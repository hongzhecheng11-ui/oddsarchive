// SDK 는 index.html 이 미리 불러온다. 이미 준비돼 있으면 로그인 준비 단계에서 파일을
// 다시 기다리지 않아야 한다 (그 왕복이 로그인 체감 속도를 그대로 늘렸다).
const assert = require("assert");
const fs = require("fs");
const path = require("path");
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

function authRuntime(globals = {}) {
  const sandbox = {
    module: { exports: {} },
    require,
    ODDS_ARCHIVE_FAVORITE_SYNC: require("../src/lib/favorite-sync.js"),
    setTimeout,
    clearTimeout,
    ...globals
  };
  sandbox.window = sandbox;
  vm.runInNewContext(fs.readFileSync(require.resolve("../src/lib/auth.js"), "utf8"), sandbox);
  return sandbox.module.exports;
}

function createService(auth, { sdkLoads }) {
  return auth.createAccountService({
    storage: { getItem: () => null, setItem: () => {}, removeItem: () => {} },
    fetchConfig: async () => ({ sdkUrl: "/vendor/supabase-js-2.49.8.min.js", redirectTo: "https://app.test/#account" }),
    sdkLoader: async () => { sdkLoads.push("loaded"); },
    clientFactory: () => ({
      auth: {
        getSession: async () => ({ data: { session: null } }),
        onAuthStateChange: () => ({})
      }
    }),
    onStateChange: () => {}
  });
}

async function run() {
  await test("skips the SDK download when the page already loaded it", async () => {
    const sdkLoads = [];
    const auth = authRuntime({ supabase: { createClient: () => ({}) } });
    await createService(auth, { sdkLoads }).initialize();
    assert.deepStrictEqual(sdkLoads, [], "the SDK was already there, so nothing should be fetched");
  });

  await test("still downloads the SDK when the page has not loaded it", async () => {
    const sdkLoads = [];
    const auth = authRuntime();
    await createService(auth, { sdkLoads }).initialize();
    assert.deepStrictEqual(sdkLoads, ["loaded"], "without a preloaded SDK it must still be fetched");
  });

  await test("serves the SDK from our own origin, not a third-party CDN", async () => {
    const handler = require("../api/auth-config.js");
    const source = fs.readFileSync(path.join(__dirname, "..", "api", "auth-config.js"), "utf8");
    assert.doesNotMatch(source, /cdn\.jsdelivr\.net/, "the login path must not depend on an external CDN");

    const html = fs.readFileSync(path.join(__dirname, "..", "index.html"), "utf8");
    const vendored = html.match(/vendor\/supabase-js-[\d.]+\.min\.js/);
    assert.ok(vendored, "index.html should preload the vendored SDK");
    assert.ok(
      fs.existsSync(path.join(__dirname, "..", vendored[0])),
      "the vendored SDK file referenced by index.html must exist"
    );

    const serviceWorker = fs.readFileSync(path.join(__dirname, "..", "service-worker.js"), "utf8");
    assert.ok(serviceWorker.includes(`/${vendored[0]}`), "the SDK should be precached so repeat opens are instant");
    assert.ok(typeof handler === "function");
  });
}

run();
