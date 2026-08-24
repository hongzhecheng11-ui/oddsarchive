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

console.log("i18n tests passed");
