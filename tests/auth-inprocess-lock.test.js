// 안드로이드 앱에서는 로그인하러 구글로 갈 때 원래 화면이 얼면서 navigator.locks 잠금을
// 안 놓아, 돌아온 화면의 getSession() 이 영영 기다렸다 (기기에서 15초 제한까지 확인).
// 그래서 이 페이지 안에서만 도는 잠금을 쓴다. 다만 "잠금을 아예 안 건다"로 가면
// 교체형 refresh token 이 동시에 두 번 쓰여 세션이 통째로 무효화된다 - 실제로 겪은 사고다.
// 즉 이 잠금은 반드시 같은 컨텍스트의 호출을 직렬화해야 한다.
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
    URLSearchParams,
    setTimeout,
    clearTimeout
  };
  sandbox.window = sandbox;
  vm.runInNewContext(fs.readFileSync(require.resolve("../src/lib/auth.js"), "utf8"), sandbox);
  return sandbox.module.exports;
}

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function run() {
  await test("runs same-key work one at a time so token refreshes cannot overlap", async () => {
    const lock = authRuntime().createInProcessLock();
    let running = 0;
    let maxConcurrent = 0;
    const order = [];

    const job = (label) => lock("auth-token", -1, async () => {
      running += 1;
      maxConcurrent = Math.max(maxConcurrent, running);
      await delay(20);
      order.push(label);
      running -= 1;
      return label;
    });

    const results = await Promise.all([job("a"), job("b"), job("c")]);

    assert.strictEqual(maxConcurrent, 1, "two auth operations must never overlap");
    assert.deepStrictEqual(order, ["a", "b", "c"], "work should run in the order it was requested");
    assert.deepStrictEqual(results, ["a", "b", "c"]);
  });

  await test("a failed operation does not wedge the queue behind it", async () => {
    const lock = authRuntime().createInProcessLock();
    const failed = lock("auth-token", -1, async () => { throw new Error("refresh failed"); });

    await assert.rejects(() => failed, /refresh failed/);
    assert.strictEqual(await lock("auth-token", -1, async () => "recovered"), "recovered");
  });

  await test("different keys do not block each other", async () => {
    const lock = authRuntime().createInProcessLock();
    let released = null;
    const blocking = lock("key-a", -1, () => new Promise((resolve) => { released = resolve; }));
    const other = await lock("key-b", -1, async () => "not blocked");

    assert.strictEqual(other, "not blocked");
    released("done");
    assert.strictEqual(await blocking, "done");
  });

  // navigator.locks 를 쓰지 않는 것이 이 잠금의 핵심이다. 다른(얼어붙은) 화면이 잠금을
  // 쥐고 있어도 우리 화면은 진행돼야 한다.
  await test("never consults navigator.locks, so a frozen page cannot block sign-in", async () => {
    const auth = authRuntime();
    let navigatorLockCalls = 0;
    const scope = { navigator: { locks: { request: () => { navigatorLockCalls += 1; return new Promise(() => {}); } } } };
    const lock = auth.createInProcessLock(scope);

    assert.strictEqual(await lock("auth-token", -1, async () => "done"), "done");
    assert.strictEqual(navigatorLockCalls, 0);
  });
}

run();
