const assert = require("assert");
const i18n = require("../src/lib/i18n.js");

assert.strictEqual(i18n.translateText("배당검색", "en"), "Odds Search");
assert.strictEqual(i18n.translateText("  오늘경기  ", "en"), "  Fixtures  ");
assert.strictEqual(i18n.translateText("표본 15경기", "en"), "Sample: 15 matches");
assert.strictEqual(i18n.translateText("홈승 62.5%", "en"), "Home 62.5%");
assert.strictEqual(i18n.translateText("경기결과: 홈승 2-1", "en"), "Match Result: Home Win 2-1");
assert.strictEqual(i18n.translateText("최종 무승부 1-1", "en"), "Final: Draw 1-1");
assert.strictEqual(i18n.translateText("홈승 / 무 / 원정승 1.75 / 3.60 / 4.50", "en"), "Home / Draw / Away 1.75 / 3.60 / 4.50");
assert.strictEqual(i18n.translateText("홈 45% · 무 30% · 원정 25%", "en"), "Home 45% · Draw 30% · Away 25%");
assert.strictEqual(i18n.translateText("3승 1무 1패", "en"), "3 W 1 D 1 L");
assert.strictEqual(i18n.translateText("AI 분석", "en"), "AI Analysis");
assert.strictEqual(i18n.translateText("상태 종료 · 결과 원정승", "en"), "Status: Finished · Result: Away Win");
assert.strictEqual(i18n.translateText("판정 이변 주의", "en"), "Verdict: Upset Caution");
assert.strictEqual(i18n.translateText("유사배당에서는 무승부이 31%로 가장 많이 발생했습니다.", "en"), "In similar-odds history, Draw occurred most often at 31%.");
assert.strictEqual(i18n.translateText("Arsenal", "en"), "Arsenal");
assert.strictEqual(i18n.translateText("배당검색", "ko"), "배당검색");
for (const [ko, en] of [
  ["Google 로그인", "Google Account"],
  ["Google 로그인 창을 여는 중입니다.", "Opening Google sign-in."],
  ["로그인 준비 시간이 초과되었습니다. 네트워크 연결을 확인한 뒤 다시 눌러주세요.", "Sign-in preparation timed out. Check your connection and try again."],
  ["Google 계정 · 동기화", "Google Account · Synced"],
  ["Google 계정 · 동기화 대기", "Google Account · Sync Pending"],
  ["홈 역배 주의", "Home Underdog Caution"],
  ["원정 역배 주의", "Away Underdog Caution"],
  ["78/80경기", "78/80 matches"],
  ["더보기 +3", "Show More +3"],
  ["최근 유효슈팅", "Recent Shots on Target"],
  ["최근 점유율", "Recent Possession"],
  ["최근 기대득점", "Recent Expected Goals"],
  ["4.0개", "4.0"],
  ["4-2-3-1 · 공개", "4-2-3-1 · Announced"],
  ["포메이션 미정 · 공개", "Formation TBD · Announced"]
]) {
  assert.strictEqual(i18n.translateText(ko, "en"), en);
  assert.strictEqual(i18n.translateText(ko, "ko"), ko);
}

console.log("i18n tests passed");
