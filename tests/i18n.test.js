const assert = require("assert");
const i18n = require("../src/lib/i18n.js");

assert.strictEqual(i18n.translateText("배당검색", "en"), "Odds Search");
assert.strictEqual(i18n.translateText("  오늘경기  ", "en"), "  Fixtures  ");
assert.strictEqual(i18n.translateText("표본 15경기", "en"), "Sample: 15 matches");
assert.strictEqual(i18n.translateText("홈승 62.5%", "en"), "Home 62.5%");
assert.strictEqual(i18n.translateText("Arsenal", "en"), "Arsenal");
assert.strictEqual(i18n.translateText("배당검색", "ko"), "배당검색");

console.log("i18n tests passed");
