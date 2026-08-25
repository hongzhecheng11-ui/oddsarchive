// 내장한 시즌별 집계가 실제 데이터팩과 어긋나면 여기서 먼저 걸린다.
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

function aggregateFromPack() {
  const pack = global.window.FOOTBALL_DATA_PACK || {};
  const bySeason = new Map();

  for (const league of app.HOME_ADVANTAGE_LEAGUES) {
    for (const seasonCode of Object.keys(pack[league] || {})) {
      const year = app.getSeasonStartYear(league, seasonCode);
      if (year === null) continue;
      const lines = String(pack[league][seasonCode] || "").split("\n").filter((line) => line.trim());
      if (lines.length < 2) continue;
      const resultIndex = lines[0].split(",").map((value) => value.trim()).indexOf("FTR");

      if (!bySeason.has(year)) bySeason.set(year, { year, matches: 0, home: 0, draw: 0, away: 0 });
      const season = bySeason.get(year);
      for (let i = 1; i < lines.length; i++) {
        const result = (lines[i].split(",")[resultIndex] || "").trim();
        if (!["H", "D", "A"].includes(result)) continue;
        season.matches += 1;
        if (result === "H") season.home += 1;
        else if (result === "D") season.draw += 1;
        else season.away += 1;
      }
    }
  }

  return [...bySeason.values()]
    .filter((season) => season.matches >= app.HOME_ADVANTAGE_MIN_SEASON_MATCHES)
    .sort((left, right) => left.year - right.year);
}

const packSeasons = aggregateFromPack();

test("the pack still holds the seasons the trend is built from", () => {
  assert(packSeasons.length >= 20, `expected 20+ seasons, got ${packSeasons.length}`);
});

test("the built-in season table matches the pack exactly", () => {
  assert.deepStrictEqual(app.HOME_ADVANTAGE_BY_SEASON, packSeasons);
});

test("rates are derived from the counts", () => {
  const trend = app.getHomeAdvantageTrend();
  for (const season of trend) {
    const source = app.HOME_ADVANTAGE_BY_SEASON.find((item) => item.year === season.year);
    assert.strictEqual(season.homeRate, source.home / source.matches);
    assert.strictEqual(Number((season.homeRate + season.drawRate + season.awayRate).toFixed(10)), 1);
  }
});

test("the trend is ordered oldest first", () => {
  const years = app.getHomeAdvantageTrend().map((season) => season.year);
  assert.deepStrictEqual([...years].sort((a, b) => a - b), years);
});

test("reports the shift and the lowest season", () => {
  const shift = app.getHomeAdvantageShift();
  assert.strictEqual(shift.seasons, app.HOME_ADVANTAGE_BY_SEASON.length);
  assert.strictEqual(Number((shift.change - (shift.recentRate - shift.earlyRate)).toFixed(10)), 0);

  const lowest = app.getHomeAdvantageTrend().reduce((low, season) => (season.homeRate < low.homeRate ? season : low));
  assert.strictEqual(shift.lowestYear, lowest.year);
  assert.strictEqual(shift.lowestRate, lowest.homeRate);
});

test("returns nothing when there are too few seasons to compare", () => {
  assert.strictEqual(app.getHomeAdvantageShift([{ year: 2020, matches: 100, home: 40, draw: 30, away: 30 }]), null);
});
