// 기기에 남은 로그인 토큰이 무효해지면 getSession() 이 매달려서 로그인 화면이
// "로그인 확인"에서 안 넘어간다. 그때 토큰을 지우고 한 번 다시 시도해야 한다.
const assert = require("assert");
const fs = require("fs");
const vm = require("vm");

function test(name, fn) {
  return Promise.resolve()
    .then(fn)
    .then(() => console.log(`PASS ${name}`))
    .catch((error) => {
      console.error(`FAIL ${name}`);
      console.error(error);
      process.exitCode = 1;
    });
}

function authRuntime({ search = "" } = {}) {
  const sandbox = {
    module: { exports: {} },
    require,
    ODDS_ARCHIVE_FAVORITE_SYNC: require("../src/lib/favorite-sync.js"),
    URLSearchParams,
    location: { search },
    setTimeout,
    clearTimeout
  };
  sandbox.window = sandbox;
  vm.runInNewContext(fs.readFileSync(require.resolve("../src/lib/auth.js"), "utf8"), sandbox);
  return sandbox.module.exports;
}

function createStorage(initial = {}) {
  const values = new Map(Object.entries(initial));
  return {
    get length() { return values.size; },
    key(index) { return [...values.keys()][index] ?? null; },
    getItem(key) { return values.has(key) ? values.get(key) : null; },
    setItem(key, value) { values.set(key, String(value)); },
    removeItem(key) { values.delete(key); },
    has(key) { return values.has(key); }
  };
}

function createService(auth, { storage, onSession }) {
  let clientsCreated = 0;
  const service = auth.createAccountService({
    storage,
    fetchConfig: async () => ({ sdkUrl: "sdk", redirectTo: "https://app.test/#account" }),
    sdkLoader: async () => {},
    clientFactory: () => {
      clientsCreated += 1;
      const attempt = clientsCreated;
      return {
        auth: {
          getSession: () => onSession(attempt),
          onAuthStateChange: () => ({})
        }
      };
    },
    onStateChange: () => {}
  });
  return { service, getClientsCreated: () => clientsCreated };
}

async function run() {
  await test("clears a broken stored token and recovers on the retry", async () => {
    const auth = authRuntime();
    const storage = createStorage({
      "sb-testproject-auth-token": "{\"broken\":true}",
      "oddsArchiveFavorites": "[]"
    });
    const brokenToken = Object.assign(new Error("Invalid Refresh Token: Already Used"), {
      name: "AuthApiError",
      __isAuthError: true
    });
    const { service, getClientsCreated } = createService(auth, {
      storage,
      onSession: (attempt) => (attempt === 1
        ? Promise.reject(brokenToken)
        : Promise.resolve({ data: { session: null } }))
    });

    await service.initialize();

    assert.strictEqual(storage.has("sb-testproject-auth-token"), false, "the broken token should be removed");
    assert.strictEqual(storage.has("oddsArchiveFavorites"), true, "unrelated keys must be kept");
    assert.strictEqual(getClientsCreated(), 2, "the retry needs a fresh client to drop the in-memory session");
  });

  await test("gives up with the original error when there is no stored token to clear", async () => {
    const auth = authRuntime();
    const storage = createStorage({ "oddsArchiveFavorites": "[]" });
    const authError = Object.assign(new Error("Invalid Refresh Token"), { name: "AuthApiError", __isAuthError: true });
    const { service, getClientsCreated } = createService(auth, {
      storage,
      onSession: () => Promise.reject(authError)
    });

    await assert.rejects(() => service.initialize(), /기존 로그인 확인: Invalid Refresh Token/);
    assert.strictEqual(getClientsCreated(), 1, "no pointless retry when nothing was cleared");
  });

  // 이걸 안 지키면 느린 네트워크에서 멀쩡한 로그인이 매번 날아가 자동 로그인이 풀린다.
  await test("keeps the stored token when the check merely failed or timed out", async () => {
    const auth = authRuntime();
    const storage = createStorage({ "sb-testproject-auth-token": "{\"valid\":true}" });
    const { service, getClientsCreated } = createService(auth, {
      storage,
      onSession: () => Promise.reject(new Error("network hiccup"))
    });

    await assert.rejects(() => service.initialize(), /network hiccup/);
    assert.strictEqual(storage.has("sb-testproject-auth-token"), true, "a slow or flaky check must not log the user out");
    assert.strictEqual(getClientsCreated(), 1);
  });

  // PKCE 로그인은 구글로 가기 전에 저장해둔 code verifier 로 인증 코드를 세션과 교환한다.
  // 이 값을 세션 토큰과 같이 지워버리면 교환이 불가능해져 로그인 화면으로 되돌아간다.
  await test("never deletes the PKCE code verifier while clearing a session token", async () => {
    const auth = authRuntime();
    const storage = createStorage({
      "sb-testproject-auth-token": "{\"broken\":true}",
      "sb-testproject-auth-token.0": "chunk",
      "sb-testproject-auth-token-code-verifier": "verifier-value"
    });
    const authError = Object.assign(new Error("Invalid Refresh Token"), { name: "AuthApiError", __isAuthError: true });
    const { service } = createService(auth, {
      storage,
      onSession: (attempt) => (attempt === 1
        ? Promise.reject(authError)
        : Promise.resolve({ data: { session: null } }))
    });

    await service.initialize();

    assert.strictEqual(storage.has("sb-testproject-auth-token"), false, "the stale session token should go");
    assert.strictEqual(storage.has("sb-testproject-auth-token.0"), false, "chunked session tokens should go too");
    assert.strictEqual(
      storage.has("sb-testproject-auth-token-code-verifier"),
      true,
      "the code verifier must survive - without it a sign-in in progress can never complete"
    );
  });

  // 구글에서 막 돌아온 순간에는 로그인이 진행 중이라, 저장값을 건드리면 그 로그인이 깨진다.
  await test("leaves storage alone while an OAuth callback is being processed", async () => {
    const auth = authRuntime({ search: "?auth=callback&code=abc123" });
    const storage = createStorage({
      "sb-testproject-auth-token": "{\"stale\":true}",
      "sb-testproject-auth-token-code-verifier": "verifier-value"
    });
    const authError = Object.assign(new Error("Invalid Refresh Token"), { name: "AuthApiError", __isAuthError: true });
    const { service, getClientsCreated } = createService(auth, {
      storage,
      onSession: () => Promise.reject(authError)
    });

    await assert.rejects(() => service.initialize(), /Invalid Refresh Token/);
    assert.strictEqual(storage.has("sb-testproject-auth-token-code-verifier"), true);
    assert.strictEqual(storage.has("sb-testproject-auth-token"), true);
    assert.strictEqual(getClientsCreated(), 1, "no client rebuild mid-callback");
  });

  await test("does not touch storage when the stored session loads fine", async () => {
    const auth = authRuntime();
    const storage = createStorage({ "sb-testproject-auth-token": "{\"valid\":true}" });
    const { service, getClientsCreated } = createService(auth, {
      storage,
      onSession: () => Promise.resolve({ data: { session: null } })
    });

    await service.initialize();

    assert.strictEqual(storage.has("sb-testproject-auth-token"), true);
    assert.strictEqual(getClientsCreated(), 1);
  });
}

run();
