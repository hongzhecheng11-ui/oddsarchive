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

function authRuntime() {
  const sandbox = {
    module: { exports: {} },
    require,
    ODDS_ARCHIVE_FAVORITE_SYNC: require("../src/lib/favorite-sync.js"),
    setTimeout,
    clearTimeout
  };
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
    const { service, getClientsCreated } = createService(auth, {
      storage,
      onSession: (attempt) => (attempt === 1
        ? Promise.reject(new Error("stuck refreshing"))
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
    const { service, getClientsCreated } = createService(auth, {
      storage,
      onSession: () => Promise.reject(new Error("session lookup failed"))
    });

    await assert.rejects(() => service.initialize(), /기존 로그인 확인: session lookup failed/);
    assert.strictEqual(getClientsCreated(), 1, "no pointless retry when nothing was cleared");
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
