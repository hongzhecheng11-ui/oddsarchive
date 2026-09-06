// 로그인 벽이 1회 만에 막혀서 처음 온 사람이 앱을 제대로 못 봤다. 구글 플레이가 지적한
// "테스터가 실제로 앱을 쓰지 않았다"의 원인이기도 해서 무료 체험 횟수를 늘렸다.
const assert = require("assert");

// 남은 횟수는 저장소뿐 아니라 모듈 안의 메모리 카운터로도 센다 (브라우저에서 저장소를
// 지워 횟수를 되돌리지 못하게 하려는 것). 그래서 테스트마다 모듈을 새로 불러와야 한다.
function freshApp() {
  delete require.cache[require.resolve("../app.js")];
  return require("../app.js");
}

function test(name, fn) {
  try {
    fn();
    console.log(`PASS ${name}`);
  } catch (error) {
    console.error(`FAIL ${name}`);
    console.error(error);
    process.exitCode = 1;
  }
}

function createStorage(initial = {}) {
  const values = new Map(Object.entries(initial));
  return {
    get length() { return values.size; },
    key(index) { return [...values.keys()][index] ?? null; },
    getItem(key) { return values.has(key) ? values.get(key) : null; },
    setItem(key, value) { values.set(key, String(value)); },
    removeItem(key) { values.delete(key); }
  };
}

test("a new visitor can browse the full allowance before the login wall", () => {
  const app = freshApp();
  const storage = createStorage();
  assert.strictEqual(app.getGuestSearchTrialsLeft(storage), app.GUEST_SEARCH_TRIAL_LIMIT);

  let used = 0;
  while (!app.hasUsedGuestSearchTrial(storage) && used < 50) {
    app.markGuestSearchTrialUsed(storage);
    used += 1;
  }

  assert.strictEqual(used, app.GUEST_SEARCH_TRIAL_LIMIT);
  assert.strictEqual(app.getGuestSearchTrialsLeft(storage), 0);
  assert.strictEqual(app.hasUsedGuestSearchTrial(storage), true);
});

test("the remaining count goes down one at a time", () => {
  const app = freshApp();
  const storage = createStorage();
  app.markGuestSearchTrialUsed(storage);
  assert.strictEqual(app.getGuestSearchTrialsLeft(storage), app.GUEST_SEARCH_TRIAL_LIMIT - 1);
  app.markGuestSearchTrialUsed(storage);
  assert.strictEqual(app.getGuestSearchTrialsLeft(storage), app.GUEST_SEARCH_TRIAL_LIMIT - 2);
});

// 1회 제한이던 시절 사용자는 "true" 가 저장돼 있다. 그대로 두면 이미 소진된 것으로 읽혀
// 기존 테스터 전원이 계속 벽에 막힌다 - 이번 변경의 목적과 정반대다.
test("someone who used the old single trial is not left locked out", () => {
  const app = freshApp();
  const storage = createStorage({ oddsArchiveGuestSearchTrialUsed: "true" });

  assert.strictEqual(app.hasUsedGuestSearchTrial(storage), false);
  assert.strictEqual(app.getGuestSearchTrialsLeft(storage), app.GUEST_SEARCH_TRIAL_LIMIT - 1);
});

test("a damaged stored value is treated as unused rather than locking the app", () => {
  const app = freshApp();
  assert.strictEqual(
    app.getGuestSearchTrialsLeft(createStorage({ oddsArchiveGuestSearchTrialUsed: "nonsense" })),
    app.GUEST_SEARCH_TRIAL_LIMIT
  );
});
