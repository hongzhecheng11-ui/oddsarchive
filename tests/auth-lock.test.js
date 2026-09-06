// supabase-js 의 Web Locks 교착 때문에 안드로이드 앱에서 로그인이 "로그인 확인" 상태로
// 멈춘 적이 있다. 잠금을 못 얻어도 로그인 흐름이 계속 진행돼야 한다.
const assert = require("assert");
const auth = require("../src/lib/auth.js");

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

// 대기 시간을 실제로 기다리지 않도록 타이머를 즉시 실행시킨다.
function immediateScope(locks) {
  return {
    navigator: locks ? { locks } : undefined,
    AbortController,
    setTimeout: (fn) => setTimeout(fn, 0),
    clearTimeout: (id) => clearTimeout(id)
  };
}

async function run() {
  await test("runs the work directly when Web Locks are unavailable", async () => {
    const lock = auth.createAuthLock(immediateScope(null));
    const result = await lock("auth-token", 0, async () => "done");
    assert.strictEqual(result, "done");
  });

  await test("uses the lock and returns its result when it can be acquired", async () => {
    let lockedName = "";
    const locks = {
      async request(name, _options, callback) {
        lockedName = name;
        return callback();
      }
    };
    const lock = auth.createAuthLock(immediateScope(locks));
    const result = await lock("auth-token", 0, async () => "locked-result");

    assert.strictEqual(result, "locked-result");
    assert.strictEqual(lockedName, "auth-token");
  });

  await test("falls back to running unlocked when the lock is never released", async () => {
    let callbackRan = false;
    // 잠금을 이미 누가 쥐고 안 놓는 상황: 요청은 취소될 때까지 영원히 안 끝난다.
    const locks = {
      request(_name, options, callback) {
        callbackRan = callbackRan || false;
        return new Promise((_resolve, reject) => {
          options.signal.addEventListener("abort", () => {
            const error = new Error("The request was aborted.");
            error.name = "AbortError";
            reject(error);
          });
          void callback;
        });
      }
    };
    const lock = auth.createAuthLock(immediateScope(locks));
    const result = await lock("auth-token", 0, async () => {
      callbackRan = true;
      return "fallback-result";
    });

    assert.strictEqual(result, "fallback-result");
    assert.strictEqual(callbackRan, true);
  });

  await test("does not swallow a real error from the work itself", async () => {
    const locks = {
      async request(_name, _options, callback) {
        return callback();
      }
    };
    const lock = auth.createAuthLock(immediateScope(locks));

    await assert.rejects(
      () => lock("auth-token", 0, async () => { throw new Error("session lookup failed"); }),
      /session lookup failed/
    );
  });
}

run();
