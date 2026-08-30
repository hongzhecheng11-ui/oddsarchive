// "오늘의 경기"는 열 때마다 실시간으로 다시 받아오는 별도 경로라서, 방금 끝난 경기의
// 진짜 결과가 메인 화면엔 바로 보여도 배당팩(api-odds-pack, getBaseMatches)엔 다음
// 정기 수집 전까지 반영이 안 된다. getSearchableMatches 는 배당팩에 아직 결과가 없는
// 경기를, 이 기기에 캐시된 실시간 결과로 메워서 팀 성적 등에도 바로 반영되게 한다.
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

function createStorage(initial = {}) {
  const values = new Map(Object.entries(initial));
  return {
    getItem(key) { return values.has(key) ? values.get(key) : null; },
    setItem(key, value) { values.set(key, String(value)); },
    removeItem(key) { values.delete(key); }
  };
}

test("fills in a live-fetched final result for a match the pack doesn't have a result for yet", () => {
  const storage = createStorage({
    [app.TODAY_MATCHES_KEY]: JSON.stringify([{
      id: "today-1",
      date: "2099-01-01",
      league: "EPL",
      homeTeam: "Totally Fictional United",
      awayTeam: "Made Up Rovers",
      homeOdds: "2.60",
      drawOdds: "3.40",
      awayOdds: "2.60",
      result: "A",
      score: "0-2"
    }])
  });

  const matches = app.getSearchableMatches(storage);
  const found = matches.find((m) => m.homeTeam === "Totally Fictional United" && m.awayTeam === "Made Up Rovers");
  assert.ok(found, "the live-fetched match should be included");
  assert.strictEqual(found.result, "A");
  assert.strictEqual(found.score, "0-2");
});

test("ignores unfinished (result UNKNOWN) live-fetched matches", () => {
  const storage = createStorage({
    [app.TODAY_MATCHES_KEY]: JSON.stringify([{
      id: "today-2",
      date: "2099-01-02",
      league: "EPL",
      homeTeam: "Not Started FC",
      awayTeam: "Still Waiting Town",
      result: "UNKNOWN",
      score: ""
    }])
  });

  const matches = app.getSearchableMatches(storage);
  const found = matches.find((m) => m.homeTeam === "Not Started FC");
  assert.strictEqual(found, undefined);
});
