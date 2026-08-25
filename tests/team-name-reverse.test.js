// 한글 팀명을 영문으로 되돌리는 맵이 두 사전을 모두 반영하는지 지킨다.
// teams.js 에만 팀을 추가해도 영어 모드에서 한글이 남지 않아야 한다.
const assert = require("assert");
const app = require("../app.js");
const teams = require("../src/lib/translations/teams.js");

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

const HANGUL = /[가-힣]/;
const externalLabels = teams.labels || {};

test("every team in teams.js can be turned back into English", () => {
  const missing = Object.values(externalLabels)
    .filter((koreanName) => HANGUL.test(String(koreanName)))
    .filter((koreanName) => HANGUL.test(app.translateTeamName(koreanName, "en")));

  assert.strictEqual(
    missing.length,
    0,
    `${missing.length} team name(s) cannot be reversed: ${missing.slice(0, 10).join(", ")}`
  );
});

test("the dictionary is large enough that the check means something", () => {
  assert(Object.keys(externalLabels).length > 500, "expected a sizeable team dictionary");
});

test("app.js spelling still wins when the two dictionaries disagree", () => {
  // Brentford 는 두 사전이 같은 표기를 쓰도록 이미 맞춰 두었다.
  assert.strictEqual(app.translateTeamName("브렌트퍼드", "en"), "Brentford");
});

test("an unknown Korean name is left as it is", () => {
  assert.strictEqual(app.translateTeamName("존재하지않는팀", "en"), "존재하지않는팀");
});
