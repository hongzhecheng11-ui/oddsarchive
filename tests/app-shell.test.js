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

test("formats expanded league and team names for Korean users", () => {
  assert.strictEqual(app.formatLeagueName("UEFA Champions League"), "챔피언스리그");
  assert.strictEqual(app.formatLeagueName("KLEAGUE1"), "K리그1");
  assert.strictEqual(app.formatLeagueName("E0"), "EPL");
  assert.strictEqual(app.formatTeamName("FC Seoul"), "FC서울");
  assert.strictEqual(app.formatTeamName("Unknown FC"), "Unknown FC");
});

test("translates common API team names and aliases for Korean users", () => {
  assert.strictEqual(app.translateTeamName("Mexico"), "멕시코");
  assert.strictEqual(app.translateTeamName("England"), "잉글랜드");
  assert.strictEqual(app.translateTeamName("Manchester United"), "맨체스터 유나이티드");
  assert.strictEqual(app.translateTeamName("Man Utd"), "맨체스터 유나이티드");
  assert.strictEqual(app.translateTeamName("Real Madrid"), "레알 마드리드");
  assert.strictEqual(app.translateTeamName("Vissel Kobe"), "비셀 고베");
  assert.strictEqual(app.translateTeamName("FK Partizan"), "파르티잔");
  assert.strictEqual(app.translateTeamName("Ulaanbaatar"), "Ulaanbaatar");
});

test("matches expanded league aliases for fixture filters", () => {
  assert.strictEqual(app.leagueMatchesFixture("UEFA Champions League", "UCL"), true);
  assert.strictEqual(app.leagueMatchesFixture("K League 1", "KLEAGUE1"), true);
  assert.strictEqual(app.leagueMatchesFixture("International Friendlies", "INTL_FRIENDLIES"), true);
  assert.strictEqual(app.leagueMatchesFixture("UEFA Champions League", "KLEAGUE1"), false);
});

test("cleans compound league labels for display", () => {
  assert.strictEqual(app.translateLeagueName("World Cup / World"), "월드컵");
  assert.strictEqual(app.translateLeagueName("UEFA Champions League / World"), "챔피언스리그");
  assert.strictEqual(app.translateLeagueName("EPL / Mongolia"), "EPL");
});

test("filters today's major matches to supported leagues only", () => {
  const matches = app.getMajorTodayMatches([
    { league: "EPL", homeTeam: "Arsenal", awayTeam: "Chelsea" },
    { league: "World Cup / World", homeTeam: "Mexico", awayTeam: "Ecuador" },
    { league: "Premier League / Mongolia", homeTeam: "A", awayTeam: "B" },
    { league: "Club Friendlies", homeTeam: "A", awayTeam: "B" }
  ]);

  assert.strictEqual(matches.length, 2);
  assert(matches.some((match) => match.league === "EPL"));
  assert(matches.some((match) => match.league === "World Cup / World"));
  assert.strictEqual(app.isMajorTodayMatch({ league: "EPL / Mongolia" }), false);
});

test("includes Korean priority leagues in fixture league options", () => {
  const values = app.getFixtureLeagueOptions().map((option) => option.value);
  assert(values.includes("UCL"));
  assert(values.includes("UEL"));
  assert(values.includes("KLEAGUE1"));
  assert(values.includes("J1LEAGUE"));
  assert(values.includes("ACL"));
  assert(values.includes("WCQ"));
  assert(values.includes("INTL_FRIENDLIES"));
});

test("builds Korean home today card view models", () => {
  const view = app.getHomeTodayCardViewModel({
    league: "UEFA Champions League",
    homeTeam: "Mexico",
    awayTeam: "Ecuador",
    startTime: "19:30",
    status: "NS",
    homeOdds: "1.80",
    drawOdds: "3.40",
    awayOdds: "4.20"
  }, "2026. 7. 6.");

  assert.strictEqual(view.title, "멕시코 vs 에콰도르");
  assert.strictEqual(view.league, "챔피언스리그");
  assert.strictEqual(view.startTime, "19:30");
  assert.strictEqual(view.status, "경기 전");
  assert.strictEqual(view.odds, "1.80 / 3.40 / 4.20");
  assert.strictEqual(view.hasOdds, true);
});

test("sorts home today matches by odds, league priority, and time", () => {
  const sorted = app.sortHomeTodayMatches([
    { league: "KLEAGUE1", homeTeam: "FC Seoul", awayTeam: "Daegu FC", startTime: "19:00" },
    { league: "UCL", homeTeam: "Real Madrid", awayTeam: "Arsenal", startTime: "22:00", homeOdds: "2.00", drawOdds: "3.20", awayOdds: "3.80" },
    { league: "EPL", homeTeam: "Arsenal", awayTeam: "Chelsea", startTime: "21:00", homeOdds: "1.90", drawOdds: "3.30", awayOdds: "4.00" }
  ]);

  assert.strictEqual(sorted[0].league, "EPL");
  assert.strictEqual(sorted[1].league, "UCL");
  assert.strictEqual(sorted[2].league, "KLEAGUE1");
});

test("renders home today section cards without breaking the page", () => {
  class FakeElement {
    constructor(tagName = "div") {
      this.tagName = tagName;
      this.children = [];
      this.dataset = {};
      this.className = "";
      this.textContent = "";
      this.type = "";
    }

    append(...children) {
      this.children.push(...children);
    }

    appendChild(child) {
      this.children.push(child);
      return child;
    }

    replaceChildren(...children) {
      this.children = children;
    }

    addEventListener() {}
  }

  const elements = {
    "home-today-list": new FakeElement("div"),
    "home-today-updated": new FakeElement("span")
  };
  const previousDocument = global.document;
  global.document = {
    getElementById: (id) => elements[id] || null,
    createElement: (tagName) => new FakeElement(tagName)
  };

  try {
    app.renderHomeTodayMatches([
      { league: "KLEAGUE1", homeTeam: "FC Seoul", awayTeam: "Daegu FC", startTime: "19:00", status: "NS" }
    ], { status: "테스트 업데이트" });
    assert.strictEqual(elements["home-today-list"].children.length, 1);
    assert.strictEqual(elements["home-today-updated"].textContent, "테스트 업데이트");
  } finally {
    global.document = previousDocument;
  }
});

test("judges favorite hit rate tiers", () => {
  const criteria = { homeOdds: "1.80", drawOdds: "3.40", awayOdds: "4.20" };
  assert.strictEqual(app.calculateMatchJudgement({ totalMatches: 100, knownMatches: 100, homeWins: 62, draws: 20, awayWins: 18 }, criteria).judgement, "안정");
  assert.strictEqual(app.calculateMatchJudgement({ totalMatches: 100, knownMatches: 100, homeWins: 53, draws: 22, awayWins: 25 }, criteria).risk, "보통");
  assert.strictEqual(app.calculateMatchJudgement({ totalMatches: 100, knownMatches: 100, homeWins: 45, draws: 25, awayWins: 30 }, criteria).judgement, "이변 주의");
  assert.strictEqual(app.calculateMatchJudgement({ totalMatches: 100, knownMatches: 100, homeWins: 38, draws: 25, awayWins: 37 }, criteria).risk, "매우 높음");
});

test("calculates upset probability from historical odds and match context", () => {
  const base = app.calculateMatchJudgement(
    { totalMatches: 100, knownMatches: 100, homeWins: 62, draws: 20, awayWins: 18 },
    { homeOdds: "1.80", drawOdds: "3.40", awayOdds: "4.20", league: "EPL" }
  );
  const adjusted = app.calculateMatchJudgement(
    { totalMatches: 100, knownMatches: 100, homeWins: 20, draws: 18, awayWins: 62 },
    { homeOdds: "4.20", drawOdds: "3.20", awayOdds: "1.80", league: "WORLDCUP" }
  );

  assert.strictEqual(Math.round(base.baseUpsetProbability), 38);
  assert.strictEqual(Math.round(base.upsetProbability), 40);
  assert.strictEqual(Math.round(adjusted.baseUpsetProbability), 38);
  assert.strictEqual(Math.round(adjusted.upsetProbability), 49);
  assert(adjusted.signals.includes("원정 정배"));
});

test("adds draw and underdog judgement badges", () => {
  const drawSignal = app.calculateMatchJudgement(
    { totalMatches: 100, knownMatches: 100, homeWins: 55, draws: 32, awayWins: 13 },
    { homeOdds: "1.75", drawOdds: "3.20", awayOdds: "4.40" }
  );
  const underdogSignal = app.calculateMatchJudgement(
    { totalMatches: 100, knownMatches: 100, homeWins: 60, draws: 15, awayWins: 25 },
    { homeOdds: "1.70", drawOdds: "3.40", awayOdds: "5.00" }
  );

  assert(drawSignal.signals.includes("무승부 주의"));
  assert(underdogSignal.signals.includes("역배 신호"));
});

test("raises judgement for favorite over-selection", () => {
  const upset = app.calculateMatchJudgement(
    { totalMatches: 100, knownMatches: 100, homeWins: 62, draws: 20, awayWins: 18 },
    { homeOdds: "1.85", drawOdds: "3.40", awayOdds: "4.20", homeSelectionRate: "75" }
  );
  const highRisk = app.calculateMatchJudgement(
    { totalMatches: 100, knownMatches: 100, homeWins: 62, draws: 20, awayWins: 18 },
    { homeOdds: "1.90", drawOdds: "3.40", awayOdds: "4.20", homeSelectionRate: "82" }
  );

  assert.strictEqual(upset.judgement, "이변 주의");
  assert(upset.signals.includes("정배 과몰림"));
  assert.strictEqual(highRisk.judgement, "고위험");
  assert.strictEqual(highRisk.risk, "매우 높음");
});

test("marks small and empty samples", () => {
  const criteria = { homeOdds: "1.80", drawOdds: "3.40", awayOdds: "4.20" };
  const small = app.calculateMatchJudgement({ totalMatches: 3, knownMatches: 3, homeWins: 2, draws: 0, awayWins: 1 }, criteria);
  const empty = app.calculateMatchJudgement({ totalMatches: 0, knownMatches: 0, homeWins: 0, draws: 0, awayWins: 0 }, criteria);

  assert(small.signals.includes("표본 부족"));
  assert.strictEqual(empty.judgement, "데이터 부족");
  assert(empty.signals.includes("데이터 부족"));
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

test("writes compact analysis memo", () => {
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

  assert.strictEqual(memo, "표본 45/45");
});

test("summarizes odds verdict with compact judgement", () => {
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

  assert(verdict.includes("판정: 안정"));
  assert(verdict.includes("위험도: 낮음"));
  assert(verdict.includes("역배 신호"));
});

test("keeps compact odds verdict independent from long recent-season text", () => {
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
  assert(verdict.includes("판정: 주의"));
  assert(!verdict.includes("최근3시즌"));
});

test("adds compact risk signals for draw and underdog patterns", () => {
  const verdict = app.getOddsSearchVerdictText({
    totalMatches: 12,
    knownMatches: 12,
    homeWins: 6,
    homeRate: "50.0%",
    draws: 4,
    drawRate: "33.3%",
    awayWins: 2,
    awayRate: "16.7%"
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

  assert(verdict.includes("위험도: 높음"));
  assert(verdict.includes("무승부 주의"));
  assert(verdict.includes("역배 신호"));
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
