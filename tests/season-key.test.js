// 시즌 키가 세 형식으로 섞여 있어, 해석 결과를 실제 경기 날짜와 대조한다.
const assert = require("assert");

global.window = global.window || {};
require("../data/football-data-pack.js");
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

test("reads the three season key shapes", () => {
  assert.strictEqual(app.getSeasonLabel("EPL", "102"), "2001-02");
  assert.strictEqual(app.getSeasonLabel("EPL", "910"), "2009-10");
  assert.strictEqual(app.getSeasonLabel("EPL", "0001"), "2000-01");
  assert.strictEqual(app.getSeasonLabel("EPL", "2526"), "2025-26");
});

test("the same key means different things per league", () => {
  assert.strictEqual(app.getSeasonLabel("EPL", "2021"), "2020-21");
  assert.strictEqual(app.getSeasonLabel("J1LEAGUE", "2021"), "2021");
});

test("start years sort in real chronological order", () => {
  const codes = ["0001", "102", "203", "910", "1011", "1920", "2021", "2526"];
  const years = codes.map((code) => app.getSeasonStartYear("EPL", code));
  assert.deepStrictEqual(years, [2000, 2001, 2002, 2009, 2010, 2019, 2020, 2025]);
  assert.deepStrictEqual([...years].sort((a, b) => a - b), years);
});

test("refuses keys it cannot read", () => {
  assert.strictEqual(app.getSeasonStartYear("EPL", ""), null);
  assert.strictEqual(app.getSeasonStartYear("EPL", "ab"), null);
  assert.strictEqual(app.getSeasonStartYear("EPL", "12345"), null);
  assert.strictEqual(app.getSeasonLabel("EPL", "ab"), "ab");
});

test("every season key in the pack lands on the year its matches were played", () => {
  const pack = global.window.FOOTBALL_DATA_PACK || {};
  const mismatches = [];

  for (const league of Object.keys(pack)) {
    for (const seasonCode of Object.keys(pack[league] || {})) {
      const lines = String(pack[league][seasonCode] || "").split("\n").filter((line) => line.trim());
      if (lines.length < 2) continue;
      const dateIndex = lines[0].split(",").map((value) => value.trim()).indexOf("Date");
      const firstDate = lines[1].split(",")[dateIndex] || "";
      const parsed = firstDate.match(/^(\d{1,2})\/(\d{1,2})\/(\d{2}|\d{4})$/);
      if (!parsed) continue;

      const rawYear = parsed[3];
      const firstMatchYear = rawYear.length === 2 ? 2000 + Number(rawYear) : Number(rawYear);
      const startYear = app.getSeasonStartYear(league, seasonCode);
      // 시즌 첫 경기는 시작 연도이거나, 겨울에 시작하는 대회면 그다음 해일 수 있다.
      if (startYear === null || Math.abs(firstMatchYear - startYear) > 1) {
        mismatches.push(`${league} ${seasonCode}: first match ${firstDate}, read as ${startYear}`);
      }
    }
  }

  assert.strictEqual(mismatches.length, 0, `${mismatches.length} mismatch(es):\n${mismatches.slice(0, 10).join("\n")}`);
});
