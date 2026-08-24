// 내장 구간 집계가 실제 과거 데이터팩과 어긋나지 않는지 강제한다.
// 팩이 갱신되면 이 테스트가 먼저 깨지고, 그때 app.js 의 상수를 함께 갱신해야 한다.
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

function parsePackRows() {
  const pack = global.window.FOOTBALL_DATA_PACK || {};
  const rows = [];
  for (const league of Object.keys(pack)) {
    for (const season of Object.keys(pack[league] || {})) {
      const lines = String(pack[league][season] || "").split("\n").filter((line) => line.trim());
      if (lines.length < 2) continue;
      const header = lines[0].split(",").map((value) => value.trim());
      const at = {
        div: header.indexOf("Div"),
        res: header.indexOf("FTR"),
        home: header.indexOf("B365H"),
        draw: header.indexOf("B365D"),
        away: header.indexOf("B365A")
      };
      for (let i = 1; i < lines.length; i++) {
        const cells = lines[i].split(",");
        rows.push({
          league: cells[at.div],
          result: (cells[at.res] || "").trim(),
          homeOdds: cells[at.home],
          drawOdds: cells[at.draw],
          awayOdds: cells[at.away]
        });
      }
    }
  }
  return rows;
}

// 기저율은 경기 전 배당만 쓰므로, 마감 배당 리그는 기대치 계산에서도 뺀다.
function withoutClosingOddsLeagues(rows) {
  return rows.filter((row) => !app.usesClosingOdds(row.league));
}

const packRows = parsePackRows();
const packIndex = app.buildOddsBaseRateIndex(packRows);

test("the bundled pack still has odds and results to aggregate", () => {
  assert(packIndex.overall.matches > 50000, `expected a large sample, got ${packIndex.overall.matches}`);
});

test("closing-odds leagues are kept out of the base rate", () => {
  const closingRows = packRows.filter((row) => app.usesClosingOdds(row.league));
  assert(closingRows.length > 0, "expected the pack to still contain a closing-odds league");
  assert.strictEqual(packIndex.overall.matches, app.buildOddsBaseRateIndex(withoutClosingOddsLeagues(packRows)).overall.matches);
  assert.strictEqual(packIndex.leagues.J1LEAGUE, undefined);
});

test("the built-in band table matches the pack exactly", () => {
  for (const band of app.ODDS_BASE_RATE_BANDS) {
    const expected = packIndex.bands[band.key];
    const actual = app.ODDS_BASE_RATE_FALLBACK[band.key];
    assert(actual, `missing fallback entry for ${band.key}`);
    assert.deepStrictEqual(
      { matches: actual.matches, favoriteWins: actual.favoriteWins, upsets: actual.upsets, draws: actual.draws },
      { matches: expected.matches, favoriteWins: expected.favoriteWins, upsets: expected.upsets, draws: expected.draws },
      `band ${band.key} drifted from the pack`
    );
  }
});

test("the fallback index totals match the pack totals", () => {
  const fallback = app.buildFallbackOddsBaseRateIndex();
  assert.strictEqual(fallback.overall.matches, packIndex.overall.matches);
  assert.strictEqual(fallback.overall.upsets, packIndex.overall.upsets);
  assert.strictEqual(fallback.overall.favoriteWins, packIndex.overall.favoriteWins);
  assert.strictEqual(fallback.overall.draws, packIndex.overall.draws);
});

test("the fallback produces the same rate a match would get from the pack", () => {
  const match = { league: "EPL", homeOdds: "3.00", drawOdds: "3.50", awayOdds: "2.20" };
  const fromPack = app.getOddsBaseRate(match, { index: packIndex, minimumSampleSize: Infinity });
  const fromFallback = app.getOddsBaseRate(match, { index: app.buildFallbackOddsBaseRateIndex() });
  assert.strictEqual(fromFallback.band, fromPack.band);
  assert.strictEqual(fromFallback.sampleSize, fromPack.sampleSize);
  assert.strictEqual(fromFallback.upsetRate, fromPack.upsetRate);
});
