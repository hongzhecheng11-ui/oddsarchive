const assert = require("node:assert/strict");
const fs = require("node:fs");
const vm = require("node:vm");
const app = require("../app.js");

function clock() {
  const timers = new Map();
  let id = 0;
  return {
    setTimeout(fn, ms) { timers.set(++id, { fn, ms }); return id; },
    clearTimeout(key) { timers.delete(key); },
    expire() {
      for (const [key, timer] of [...timers]) {
        assert.equal(timer.ms, 15000);
        timers.delete(key);
        timer.fn();
      }
    },
    get size() { return timers.size; }
  };
}

function fakeDocument() {
  const scripts = [];
  const append = (script) => scripts.push(script);
  return {
    scripts,
    head: { append, appendChild: append },
    querySelector: () => scripts[0] || null,
    createElement() {
      const listeners = new Map();
      return {
        dataset: {},
        addEventListener(type, fn) {
          if (!listeners.has(type)) listeners.set(type, new Set());
          listeners.get(type).add(fn);
        },
        removeEventListener(type, fn) { listeners.get(type)?.delete(fn); },
        fire(type) { [...(listeners.get(type) || [])].forEach((fn) => fn()); },
        remove() { const index = scripts.indexOf(this); if (index >= 0) scripts.splice(index, 1); }
      };
    }
  };
}

function authRuntime(timer, document) {
  const sandbox = { module: { exports: {} }, require, document,
    ODDS_ARCHIVE_FAVORITE_SYNC: require("../src/lib/favorite-sync.js"),
    setTimeout: timer.setTimeout, clearTimeout: timer.clearTimeout };
  vm.runInNewContext(fs.readFileSync(require.resolve("../src/lib/auth.js"), "utf8"), sandbox);
  return sandbox.module.exports;
}

async function drain() { for (let i = 0; i < 20; i += 1) await Promise.resolve(); }

async function checkLoader(load, document, timer) {
  const failed = assert.rejects(load(), /load|불러오지/);
  document.scripts[0].fire("error");
  await failed;
  assert.equal(document.scripts.length, 0);
  const timeout = assert.rejects(load(), /초과/);
  const stalledScript = document.scripts[0];
  timer.expire();
  await timeout;
  assert.equal(document.scripts.length, 0);
  const retry = load();
  const concurrent = load();
  assert.equal(document.scripts.length, 1);
  stalledScript.fire("load");
  assert.notEqual(document.scripts[0].dataset.loaded, "true");
  document.scripts[0].fire("load");
  await Promise.all([retry, concurrent]);
  await load();
  assert.equal(document.scripts.length, 1);
  assert.equal(timer.size, 0);
}

(async () => {
  const sdkTimer = clock();
  const sdkDocument = fakeDocument();
  const runtime = authRuntime(sdkTimer, sdkDocument);
  await checkLoader(() => runtime.loadScriptOnce("https://sdk.example.test/sdk.js"), sdkDocument, sdkTimer);

  const original = { document: global.document, setTimeout: global.setTimeout, clearTimeout: global.clearTimeout };
  const moduleTimer = clock();
  global.document = fakeDocument();
  global.setTimeout = moduleTimer.setTimeout;
  global.clearTimeout = moduleTimer.clearTimeout;
  try {
    await checkLoader(() => app.loadBrowserScript("/src/lib/auth.js", "account-auth"), global.document, moduleTimer);
  } finally {
    Object.assign(global, original);
  }

  for (const stalledStep of ["config", "sdk", "session"]) {
    const timer = clock();
    const auth = authRuntime(timer);
    let stalled = true;
    let release;
    let createdClients = 0;
    let subscriptions = 0;
    const statuses = [];
    const config = { sdkUrl: "sdk", redirectTo: "https://app.test/#account" };
    const session = { data: { session: null } };
    const step = (name, result) => stalled && name === stalledStep
      ? new Promise((resolve) => { release = () => resolve(result); }) : Promise.resolve(result);
    const service = auth.createAccountService({
      fetchConfig: () => step("config", config),
      sdkLoader: () => step("sdk"),
      clientFactory: () => {
        createdClients += 1;
        return { auth: {
          getSession: () => step("session", session),
          onAuthStateChange: () => { subscriptions += 1; return {}; }
        } };
      },
      onStateChange: ({ status }) => statuses.push(status)
    });
    const expectedStage = { config: "로그인 설정 확인", sdk: "로그인 필수 파일 로딩", session: "기존 로그인 확인" }[stalledStep];
    const failed = assert.rejects(service.initialize(), (error) => error.message.startsWith(`${expectedStage}:`) && /초과/.test(error.message));
    await drain();
    timer.expire();
    await failed;
    assert.equal(statuses.at(-1), "unavailable");
    stalled = false;
    await service.initialize();
    assert.equal(statuses.at(-1), "signed_out");
    release();
    await drain();
    assert.equal(createdClients, 1);
    assert.equal(subscriptions, 1);
    assert.equal(timer.size, 0);
  }
  console.log("PASS login loaders recover after failure and timeout; stalled preparation is retryable without stale state");
})().catch((error) => { console.error(error); process.exitCode = 1; });
