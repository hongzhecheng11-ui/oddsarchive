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

test("builds direct odds search criteria from a live match with odds", () => {
  const criteria = app.getDirectOddsSearchCriteriaFromMatch({
    league: "WORLDCUP",
    homeTeam: "Mexico",
    awayTeam: "Ecuador",
    homeOdds: "2.10",
    drawOdds: "3.20",
    awayOdds: "3.60"
  });

  assert.deepStrictEqual(criteria, {
    homeOdds: "2.10",
    drawOdds: "3.20",
    awayOdds: "3.60",
    tolerance: "0.05",
    sortOrder: "CLOSEST",
    customTolerance: "",
    league: "WORLDCUP",
    teamQuery: "멕시코 에콰도르"
  });
});

test("builds direct odds search criteria from a live match without odds", () => {
  const criteria = app.getDirectOddsSearchCriteriaFromMatch({
    league: "WORLDCUP",
    homeTeam: "England",
    awayTeam: "Congo DR"
  });

  assert.deepStrictEqual(criteria, {
    homeOdds: "",
    drawOdds: "",
    awayOdds: "",
    tolerance: "0.05",
    sortOrder: "CLOSEST",
    customTolerance: "",
    league: "WORLDCUP",
    teamQuery: "잉글랜드 콩고민주공화국"
  });
});

test("formats inline odds rate when known historical results exist", () => {
  const summary = app.getInlineOddsRateText({
    totalMatches: 5,
    knownMatches: 4,
    homeRate: "50.0%",
    drawRate: "25.0%",
    awayRate: "25.0%"
  });

  assert(summary.includes("50.0%"));
  assert(summary.includes("25.0%"));
  assert(summary.includes("4/5"));
});

test("formats inline odds rate as sample shortage without known results", () => {
  const summary = app.getInlineOddsRateText({
    totalMatches: 2,
    knownMatches: 0,
    homeRate: "0%",
    drawRate: "0%",
    awayRate: "0%"
  });

  assert(summary.includes("표본 부족"));
});

test("adds confidence label to inline odds rate", () => {
  const high = app.getInlineOddsConfidence({ knownMatches: 30 });
  const medium = app.getInlineOddsConfidence({ knownMatches: 12 });
  const low = app.getInlineOddsConfidence({ knownMatches: 3 });

  assert.strictEqual(high.label, "신뢰도 높음");
  assert.strictEqual(medium.label, "신뢰도 보통");
  assert.strictEqual(low.label, "참고용");
});

test("formats today analysis odds summary in one line", () => {
  const summary = app.getTodayOddsSummaryText({
    knownMatches: 45,
    homeWins: 31,
    homeRate: "68.9%",
    draws: 10,
    drawRate: "22.2%",
    awayWins: 4,
    awayRate: "8.9%"
  });

  assert.strictEqual(summary, "홈승 31/68.9% · 무 10/22.2% · 원정승 4/8.9% · 표본 45");
});

test("writes stronger analysis memo with sample confidence", () => {
  const memo = app.getResultBreakdownMemo({
    totalMatches: 45,
    knownMatches: 45,
    homeWins: 31,
    homeRate: "68.9%",
    draws: 10,
    drawRate: "22.2%",
    awayWins: 4,
    awayRate: "8.9%"
  });

  assert(memo.includes("45경기 표본"));
  assert(memo.includes("홈승 흐름"));
  assert(memo.includes("신뢰도 높음"));
});

test("summarizes odds verdict with pattern winner and confidence", () => {
  const verdict = app.getOddsSearchVerdictText({
    totalMatches: 45,
    knownMatches: 45,
    homeWins: 31,
    homeRate: "68.9%",
    draws: 10,
    drawRate: "22.2%",
    awayWins: 4,
    awayRate: "8.9%"
  }, {
    homeOdds: "1.75",
    drawOdds: "3.60",
    awayOdds: "4.50"
  });

  assert(verdict.includes("홈 우세형"));
  assert(verdict.includes("홈승 우세 68.9%"));
  assert(verdict.includes("신뢰도 높음"));
});

test("uses recent three seasons in odds verdict", () => {
  const matches = [
    { date: "2021-05-10", result: "A" },
    { date: "2023-08-10", result: "H" },
    { date: "2024-03-10", result: "D" },
    { date: "2025-09-10", result: "H" }
  ];
  const recentBreakdown = app.calculateResultBreakdown(app.getRecentSeasonMatches(matches));
  const verdict = app.getOddsSearchVerdictText({
    totalMatches: 4,
    knownMatches: 4,
    homeWins: 2,
    homeRate: "50.0%",
    draws: 1,
    drawRate: "25.0%",
    awayWins: 1,
    awayRate: "25.0%"
  }, {
    homeOdds: "1.75",
    drawOdds: "3.60",
    awayOdds: "4.50"
  }, recentBreakdown);

  assert.strictEqual(recentBreakdown.totalMatches, 3);
  assert(verdict.includes("최근3시즌 홈승"));
});

test("adds risk signals for draw rate and recent disagreement", () => {
  const verdict = app.getOddsSearchVerdictText({
    totalMatches: 12,
    knownMatches: 12,
    homeWins: 6,
    homeRate: "50.0%",
    draws: 3,
    drawRate: "25.0%",
    awayWins: 3,
    awayRate: "25.0%"
  }, {
    homeOdds: "2.10",
    drawOdds: "3.00",
    awayOdds: "3.40"
  }, {
    totalMatches: 4,
    knownMatches: 4,
    homeWins: 1,
    homeRate: "25.0%",
    draws: 1,
    drawRate: "25.0%",
    awayWins: 2,
    awayRate: "50.0%"
  });

  assert(verdict.includes("주의: 무승부 높음"));
  assert(verdict.includes("최근 흐름 다름"));
});

test("falls back to all leagues and wider tolerance for live match analysis", () => {
  const analysis = app.analyzeLiveMatchOdds([
    { league: "EPL", homeTeam: "A", awayTeam: "B", homeOdds: "2.18", drawOdds: "2.80", awayOdds: "3.92", result: "H" },
    { league: "EPL", homeTeam: "C", awayTeam: "D", homeOdds: "2.23", drawOdds: "2.76", awayOdds: "3.88", result: "A" },
    { league: "LALIGA", homeTeam: "E", awayTeam: "F", homeOdds: "2.19", drawOdds: "2.79", awayOdds: "3.91", result: "D" }
  ], {
    league: "WORLDCUP",
    homeTeam: "Mexico",
    awayTeam: "Ecuador",
    homeOdds: "2.20",
    drawOdds: "2.78",
    awayOdds: "3.90"
  });

  assert.strictEqual(analysis.matches.length, 3);
  assert.strictEqual(analysis.breakdown.knownMatches, 3);
  assert.strictEqual(analysis.scope, "전체 과거");
});

test("falls back to closest historical odds when tolerance search has no matches", () => {
  const analysis = app.analyzeLiveMatchOdds([
    { league: "EPL", homeTeam: "A", awayTeam: "B", homeOdds: "1.50", drawOdds: "4.00", awayOdds: "6.00", result: "H" },
    { league: "LALIGA", homeTeam: "C", awayTeam: "D", homeOdds: "3.00", drawOdds: "3.00", awayOdds: "2.20", result: "A" }
  ], {
    league: "WORLDCUP",
    homeTeam: "Mexico",
    awayTeam: "Ecuador",
    homeOdds: "2.20",
    drawOdds: "2.78",
    awayOdds: "3.90"
  });

  assert.strictEqual(analysis.matches.length, 2);
  assert.strictEqual(analysis.scope, "가까운 과거");
});
