// teamNameMatches 는 여러 곳(기저율/이변후보/팀검색/맞대결 등)에서 쓰이는 공용 매칭
// 함수다. 저장된 이름을 "지금 UI 언어" 기준으로만 바꿔서 비교하던 버전은, 데이터와
// 검색어 언어가 서로 다르면(한글로 저장된 팀을 영어로 검색 등) 매칭을 놓쳤다.
const assert = require("assert");
const app = require("../app.js");

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

test("matches a Korean-stored name against an English query", () => {
  assert.strictEqual(app.teamNameMatches("레알 마드리드", "Real Madrid"), true);
});

test("matches an English-stored name against a Korean query", () => {
  assert.strictEqual(app.teamNameMatches("Real Madrid", "레알 마드리드"), true);
});

test("still matches same-language queries as before", () => {
  assert.strictEqual(app.teamNameMatches("Real Madrid", "Real Madrid"), true);
  assert.strictEqual(app.teamNameMatches("레알 마드리드", "레알 마드리드"), true);
});

test("does not match a clearly different team across languages", () => {
  assert.strictEqual(app.teamNameMatches("레알 마드리드", "Barcelona"), false);
  assert.strictEqual(app.teamNameMatches("Barcelona", "레알 마드리드"), false);
});

test("an empty query matches everything (unchanged behavior)", () => {
  assert.strictEqual(app.teamNameMatches("Real Madrid", ""), true);
});
