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

test("parses a Toto round CSV without changing fixture data", () => {
  const csv = [
    "roundName,no,date,league,homeTeam,awayTeam,homeOdds,drawOdds,awayOdds",
    "승무패 1,1,2026-08-10,EPL,Arsenal,Chelsea,1.80,3.40,4.20",
    "승무패 1,2,2026-08-10,LALIGA,Barcelona,Valencia,1.55,4.10,6.20"
  ].join("\n");
  const result = app.parseTotoRoundCsv(csv);

  assert.strictEqual(result.error, "");
  assert.strictEqual(result.pack.currentRound.roundName, "승무패 1");
  assert.strictEqual(result.pack.currentRound.fixtures.length, 2);
  assert.strictEqual(result.pack.currentRound.fixtures[1].awayOdds, "6.20");
});

test("rejects a Toto round CSV with more than 14 fixtures", () => {
  const header = "roundName,no,date,league,homeTeam,awayTeam,homeOdds,drawOdds,awayOdds";
  const rows = Array.from({ length: 15 }, (_, index) => `round,${index + 1},2026-08-10,EPL,Home${index},Away${index},1.80,3.40,4.20`);
  const result = app.parseTotoRoundCsv([header, ...rows].join("\n"));

  assert.match(result.error, /1~14/);
});

test("parses separate Proto markets for one fixture", () => {
  const csv = [
    "gameNo,kickoffAt,league,homeTeam,awayTeam,marketType,line,homeLabel,drawLabel,awayLabel,homeOdds,drawOdds,awayOdds",
    "1566,2026-08-12 00:00,AFC Champions League Elite,Partizan,Al-Hussein,1X2,,승,무,패,3.05,3.20,1.96",
    "1566,2026-08-12 00:00,AFC Champions League Elite,Partizan,Al-Hussein,HANDICAP,H -1.0,승,,패,3.05,,1.96",
    "1567,2026-08-12 00:00,AFC Champions League Elite,Partizan,Al-Hussein,TOTAL,U/O 2.5,언더,,오버,1.66,,1.87"
  ].join("\n");
  const result = app.parseProtoCsv(csv);

  assert.strictEqual(result.error, "");
  assert.strictEqual(result.pack.markets.length, 3);
  assert.strictEqual(result.pack.markets[1].marketType, "HANDICAP");
  assert.strictEqual(result.pack.markets[2].line, "U/O 2.5");
});

test("shows Google login in the account header when a cloud account is active", () => {
  const storage = {
    getItem() { return null; },
    setItem() {}
  };

  assert.strictEqual(app.getLocalAccountLabel(storage, "google-user-uuid"), "Google 로그인");
  assert.strictEqual(app.getLocalAccountLabel(storage), "로그인 전");
});

test("detects a stored Supabase session for header restoration after refresh", () => {
  const storage = {
    length: 2,
    key(index) {
      return ["unrelated-key", "sb-project-auth-token"][index] || null;
    }
  };
  assert.strictEqual(app.hasStoredCloudSession(storage), true);
  assert.strictEqual(app.hasStoredCloudSession({ length: 1, key: () => "unrelated-key" }), false);
});

test("requires authentication before opening user features", () => {
  assert.strictEqual(app.getAuthenticatedViewId("#search", false, false, false), "search");
  assert.strictEqual(app.getAuthenticatedViewId("#today", false, false, false), "today");
  assert.strictEqual(app.getAuthenticatedViewId("#search", false, false, true), "account");
  assert.strictEqual(app.getAuthenticatedViewId("#search", true, false), "search");
  assert.strictEqual(app.getAuthenticatedViewId("#matches", true, false), "search");
  assert.strictEqual(app.getAuthenticatedViewId("#matches", true, true), "matches");
});

test("recognizes whether the one-time guest search trial was used", () => {
  assert.strictEqual(app.hasUsedGuestSearchTrial({ getItem: () => "true" }), true);
  assert.strictEqual(app.hasUsedGuestSearchTrial({ getItem: () => null }), false);
});

test("uses the same one-time guest trial for match detail access", () => {
  const values = new Map();
  const storage = {
    getItem: (key) => values.get(key) || null,
    setItem: (key, value) => values.set(key, value)
  };
  assert.strictEqual(app.canOpenMatchDetail(storage, false), true);
  assert.strictEqual(app.hasUsedGuestSearchTrial(storage), true);
  assert.strictEqual(app.canOpenMatchDetail(storage, false), false);
});

test("builds a seven-day Seoul date strip centered on today", () => {
  const dates = app.getFixtureDateOptions("2026-07-13");

  assert.strictEqual(dates.length, 7);
  assert.strictEqual(dates[0].date, "2026-07-10");
  assert.strictEqual(dates[3].date, "2026-07-13");
  assert.strictEqual(dates[3].isToday, true);
  assert.strictEqual(dates[6].date, "2026-07-16");
  assert.strictEqual(dates.filter((item) => item.isToday).length, 1);
});

test("groups API fixtures by their actual Seoul date", () => {
  const matches = [
    { fixtureId: "1", date: "2026-07-14", league: "UCL", homeTeam: "A", awayTeam: "B" },
    { fixtureId: "2", date: "2026-07-15", league: "UCL", homeTeam: "C", awayTeam: "D" },
    { fixtureId: "2", date: "2026-07-15", league: "UCL", homeTeam: "C", awayTeam: "D" }
  ];

  assert.deepStrictEqual(app.getFixturesForDate(matches, "2026-07-14").map((match) => match.fixtureId), ["1"]);
  assert.deepStrictEqual(app.getFixturesForDate(matches, "2026-07-15").map((match) => match.fixtureId), ["2"]);
});

test("filters date fixtures by user-facing league category", () => {
  const matches = [
    { league: "Premier League", homeTeam: "Arsenal", awayTeam: "Chelsea" },
    { league: "UEFA Champions League", homeTeam: "Drita", awayTeam: "Kauno Zalgiris" },
    { league: "K League 1", homeTeam: "Ulsan HD", awayTeam: "FC Seoul" },
    { league: "International Friendlies", homeTeam: "Korea Republic", awayTeam: "Japan" }
  ];

  assert.strictEqual(app.filterFixturesByCategory(matches, "ALL").length, 4);
  assert.strictEqual(app.filterFixturesByCategory(matches, "POPULAR").length, 3);
  assert.strictEqual(app.filterFixturesByCategory(matches, "EUROPE").length, 2);
  assert.strictEqual(app.filterFixturesByCategory(matches, "ASIA").length, 1);
  assert.strictEqual(app.filterFixturesByCategory(matches, "INTERNATIONAL").length, 1);
});

test("searches visible fixtures by translated team and league name", () => {
  const matches = [
    { league: "Premier League", homeTeam: "Manchester United", awayTeam: "Chelsea" },
    { league: "K League 1", homeTeam: "Ulsan HD", awayTeam: "FC Seoul" }
  ];

  assert.strictEqual(app.filterFixturesByText(matches, "맨체스터 유나이티드").length, 1);
  assert.strictEqual(app.filterFixturesByText(matches, "K리그1").length, 1);
  assert.strictEqual(app.filterFixturesByText(matches, "없는 팀").length, 0);
});

test("builds direct odds search criteria from a live match with odds", () => {
  const criteria = app.getDirectOddsSearchCriteriaFromMatch({
    league: "ALL",
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
    league: "ALL",
    teamQuery: "",
    sourceMatchId: "|all|mexico|ecuador",
    sourceMatch: {
      date: "",
      league: "ALL",
      homeTeam: "Mexico",
      awayTeam: "Ecuador",
      startTime: ""
    }
  });
});

test("keeps odds search status focused on user results", () => {
  const text = app.getSearchStatusDetails({
    storedCount: 9999,
    pendingCount: 0,
    criteria: {
      homeOdds: "1.35",
      drawOdds: "4.15",
      awayOdds: "6.00",
      tolerance: "0.05",
      league: "ALL",
      teamQuery: ""
    },
    resultCount: 8
  });

  assert(text.includes("배당 1.35 / 4.15 / 6.00"));
  assert(text.includes("결과 8건"));
  assert(!text.includes("저장"));
  assert(!text.includes("기본 데이터"));
  assert(!text.includes("9999"));
});

test("keeps match detail section anchors inside the detail view", () => {
  assert.strictEqual(app.getActiveViewId("#detail"), "detail");
  assert.strictEqual(app.getActiveViewId("#detail-summary"), "detail");
  assert.strictEqual(app.getActiveViewId("#detail-same"), "detail");
  assert.strictEqual(app.getActiveViewId("#detail-similar"), "detail");
  assert.strictEqual(app.getActiveViewId("#detail-league"), "detail");
  assert.strictEqual(app.getActiveViewId("#detail-recent"), "detail");
});

test("builds match detail analysis buckets for same and similar odds", () => {
  const target = {
    date: "2026-07-01",
    league: "EPL",
    homeTeam: "Arsenal",
    awayTeam: "Chelsea",
    homeOdds: "1.80",
    drawOdds: "3.40",
    awayOdds: "4.20",
    result: "UNKNOWN"
  };
  const matches = [
    { date: "2025-01-01", league: "EPL", homeTeam: "Liverpool", awayTeam: "Everton", homeOdds: "1.80", drawOdds: "3.40", awayOdds: "4.20", result: "H", score: "2-0" },
    { date: "2025-02-01", league: "LALIGA", homeTeam: "Real Madrid", awayTeam: "Getafe", homeOdds: "1.82", drawOdds: "3.39", awayOdds: "4.18", result: "D", score: "1-1" },
    { date: "2025-03-01", league: "EPL", homeTeam: "Chelsea", awayTeam: "Arsenal", homeOdds: "1.84", drawOdds: "3.42", awayOdds: "4.19", result: "A", score: "0-1" },
    { date: "2024-12-01", league: "EPL", homeTeam: "Tottenham", awayTeam: "Chelsea", homeOdds: "2.30", drawOdds: "3.10", awayOdds: "3.00", result: "A", score: "1-2" },
    { date: "2026-07-01", league: "EPL", homeTeam: "Arsenal", awayTeam: "Chelsea", homeOdds: "1.80", drawOdds: "3.40", awayOdds: "4.20", result: "UNKNOWN" }
  ];

  const analysis = app.buildMatchDetailAnalysis(target, matches);

  assert.strictEqual(analysis.sameOdds.matches.length, 1);
  assert.strictEqual(analysis.similarOdds.matches.length, 3);
  assert.strictEqual(analysis.sameLeagueSimilar.matches.length, 2);
  assert.strictEqual(analysis.recentRecords.headToHead.length, 1);
  assert.strictEqual(analysis.recentRecords.homeTeam.length, 1);
  assert.strictEqual(analysis.recentRecords.awayTeam.length, 2);
});

test("uses dynamic similar-odds tolerance for high-priced detail matches only", () => {
  const target = {
    date: "2026-07-31",
    league: "UEL",
    homeTeam: "Benfica",
    awayTeam: "FC ST. Gallen",
    homeOdds: "1.13",
    drawOdds: "8.20",
    awayOdds: "16.50",
    result: "UNKNOWN"
  };
  const matches = [
    { date: "2025-01-01", league: "UEL", homeTeam: "Alpha", awayTeam: "Beta", homeOdds: "1.14", drawOdds: "7.88", awayOdds: "16.35", result: "H", score: "2-0" },
    { date: "2025-02-01", league: "UEL", homeTeam: "Gamma", awayTeam: "Delta", homeOdds: "1.13", drawOdds: "8.00", awayOdds: "17.00", result: "D", score: "1-1" },
    { date: "2025-03-01", league: "UEL", homeTeam: "Wide", awayTeam: "Gap", homeOdds: "1.20", drawOdds: "6.50", awayOdds: "13.00", result: "A", score: "0-1" },
    { date: "2026-07-31", league: "UEL", homeTeam: "Benfica", awayTeam: "FC ST. Gallen", homeOdds: "1.13", drawOdds: "8.20", awayOdds: "16.50", result: "UNKNOWN" }
  ];

  const analysis = app.buildMatchDetailAnalysis(target, matches);

  assert.strictEqual(analysis.sameOdds.matches.length, 0);
  assert.strictEqual(analysis.similarOdds.matches.length, 2);
  assert.strictEqual(analysis.sameLeagueSimilar.matches.length, 2);
  assert(analysis.similarOdds.matches.some((match) => match.homeTeam === "Alpha"));
  assert(analysis.similarOdds.matches.some((match) => match.homeTeam === "Gamma"));
  assert(!analysis.similarOdds.matches.some((match) => match.homeTeam === "Wide"));
});

test("falls back to closest same-league completed matches only when strict league samples are empty", () => {
  const target = {
    date: "2026-07-31",
    league: "UEL",
    homeTeam: "Benfica",
    awayTeam: "FC ST. Gallen",
    homeOdds: "1.13",
    drawOdds: "8.20",
    awayOdds: "16.50",
    result: "UNKNOWN"
  };
  const matches = [
    { date: "2025-01-01", league: "UEL", homeTeam: "Alpha", awayTeam: "Beta", homeOdds: "1.20", drawOdds: "7.80", awayOdds: "16.35", result: "H", score: "2-0" },
    { date: "2025-02-01", league: "UEL", homeTeam: "Gamma", awayTeam: "Delta", homeOdds: "1.19", drawOdds: "8.00", awayOdds: "17.20", result: "D", score: "1-1" },
    { date: "2025-03-01", league: "UEL", homeTeam: "Wide", awayTeam: "Gap", homeOdds: "1.20", drawOdds: "6.50", awayOdds: "13.00", result: "A", score: "0-1" },
    { date: "2025-04-01", league: "UEL", homeTeam: "Near 3", awayTeam: "Club", homeOdds: "1.11", drawOdds: "8.60", awayOdds: "17.20", result: "H", score: "3-0" },
    { date: "2025-05-01", league: "UEL", homeTeam: "Near 4", awayTeam: "Club", homeOdds: "1.15", drawOdds: "8.35", awayOdds: "15.80", result: "H", score: "2-1" },
    { date: "2025-06-01", league: "UEL", homeTeam: "Near 5", awayTeam: "Club", homeOdds: "1.12", drawOdds: "8.35", awayOdds: "17.25", result: "D", score: "0-0" },
    { date: "2025-07-01", league: "UEL", homeTeam: "Unknown", awayTeam: "Club", homeOdds: "1.12", drawOdds: "8.10", awayOdds: "16.70", result: "UNKNOWN", score: "" },
    { date: "2026-07-31", league: "UEL", homeTeam: "Benfica", awayTeam: "FC ST. Gallen", homeOdds: "1.13", drawOdds: "8.20", awayOdds: "16.50", result: "UNKNOWN" }
  ];

  const analysis = app.buildMatchDetailAnalysis(target, matches);

  assert.strictEqual(analysis.sameLeagueSimilar.matches.length, 0);
  assert.strictEqual(analysis.sameLeagueDisplay.label, "같은 리그 근접배당");
  assert.deepStrictEqual(
    analysis.sameLeagueDisplay.matches.map((match) => match.homeTeam),
    ["Near 4", "Near 5", "Gamma", "Near 3", "Alpha"]
  );
  assert(!analysis.sameLeagueDisplay.matches.some((match) => match.homeTeam === "Wide"));
  assert(!analysis.sameLeagueDisplay.matches.some((match) => match.homeTeam === "Unknown"));
  assert.strictEqual(analysis.sameLeagueDisplay.matches.length, 5);
});

test("keeps strict same-league samples unchanged when they already exist", () => {
  const target = {
    date: "2026-07-29",
    league: "UCL",
    homeTeam: "KuPS",
    awayTeam: "Sabah FA",
    homeOdds: "2.65",
    drawOdds: "3.45",
    awayOdds: "2.48",
    result: "A"
  };
  const matches = [
    { date: "2025-01-01", league: "UCL", homeTeam: "Exact 1", awayTeam: "A", homeOdds: "2.65", drawOdds: "3.45", awayOdds: "2.48", result: "H", score: "1-0" },
    { date: "2025-02-01", league: "UCL", homeTeam: "Exact 2", awayTeam: "B", homeOdds: "2.65", drawOdds: "3.45", awayOdds: "2.48", result: "D", score: "1-1" },
    { date: "2025-03-01", league: "UEL", homeTeam: "Other League", awayTeam: "C", homeOdds: "2.65", drawOdds: "3.45", awayOdds: "2.48", result: "A", score: "0-1" }
  ];

  const analysis = app.buildMatchDetailAnalysis(target, matches);

  assert.strictEqual(analysis.sameLeagueSimilar.matches.length, 2);
  assert.strictEqual(analysis.sameLeagueDisplay.label, "챔피언스리그 유사배당");
  assert.strictEqual(analysis.sameLeagueDisplay.matches.length, 2);
  assert.deepStrictEqual(
    analysis.sameLeagueDisplay.matches.map((match) => match.homeTeam),
    analysis.sameLeagueSimilar.matches.map((match) => match.homeTeam)
  );
});

test("keeps regular-price detail samples from expanding too aggressively", () => {
  const target = {
    date: "2026-07-29",
    league: "UCL",
    homeTeam: "KuPS",
    awayTeam: "Sabah FA",
    homeOdds: "2.65",
    drawOdds: "3.45",
    awayOdds: "2.48",
    result: "A"
  };
  const matches = [
    { date: "2025-01-01", league: "UCL", homeTeam: "Near 1", awayTeam: "A", homeOdds: "2.70", drawOdds: "3.44", awayOdds: "2.49", result: "H", score: "1-0" },
    { date: "2025-02-01", league: "UCL", homeTeam: "Near 2", awayTeam: "B", homeOdds: "2.55", drawOdds: "3.32", awayOdds: "2.40", result: "D", score: "1-1" },
    { date: "2025-03-01", league: "UCL", homeTeam: "Far", awayTeam: "C", homeOdds: "2.45", drawOdds: "3.00", awayOdds: "2.10", result: "A", score: "0-1" },
    { date: "2026-07-29", league: "UCL", homeTeam: "KuPS", awayTeam: "Sabah FA", homeOdds: "2.65", drawOdds: "3.45", awayOdds: "2.48", result: "A", score: "0-2" }
  ];

  const analysis = app.buildMatchDetailAnalysis(target, matches);

  assert.strictEqual(analysis.similarOdds.matches.length, 0);
  assert(!analysis.similarOdds.matches.some((match) => match.homeTeam === "Near 1"));
  assert(!analysis.similarOdds.matches.some((match) => match.homeTeam === "Near 2"));
  assert(!analysis.similarOdds.matches.some((match) => match.homeTeam === "Far"));
});

test("formats compact fixture odds only when all 1X2 odds exist", () => {
  assert.strictEqual(app.getCompactFixtureOdds({
    homeOdds: "2.10",
    drawOdds: "3.20",
    awayOdds: "3.60"
  }), "홈 2.10 · 무 3.20 · 원정 3.60");
  assert.strictEqual(app.getCompactFixtureOdds({ homeOdds: "2.10" }), "");
});

test("sorts today's major fixtures first without changing other dates", () => {
  const minor = { date: "2026-07-13", league: "OTHER", homeTeam: "A", awayTeam: "B", startTime: "10:00" };
  const major = { date: "2026-07-13", league: "EPL", homeTeam: "C", awayTeam: "D", startTime: "20:00", homeOdds: "1.80", drawOdds: "3.40", awayOdds: "4.20" };
  const todaySorted = app.sortDateFixtureMatches([minor, major], "2026-07-13");
  assert.strictEqual(todaySorted[0], major);

  const futureMinor = { ...minor, date: "2026-07-14", startTime: "09:00" };
  const futureMajor = { ...major, date: "2026-07-14", startTime: "20:00" };
  const futureSorted = app.sortDateFixtureMatches([futureMajor, futureMinor], "2026-07-14");
  assert.strictEqual(futureSorted[0], futureMajor);
});

test("reuses prepared match detail analysis across instant tab switches", () => {
  const target = {
    date: "2026-07-13",
    league: "EPL",
    homeTeam: "Arsenal",
    awayTeam: "Chelsea",
    homeOdds: "1.80",
    drawOdds: "3.40",
    awayOdds: "4.20"
  };
  const matches = [
    { date: "2026-01-01", league: "EPL", homeTeam: "Liverpool", awayTeam: "Everton", homeOdds: "1.80", drawOdds: "3.40", awayOdds: "4.20", result: "H", score: "2-0" }
  ];

  const first = app.getMatchDetailAnalysisCached(target, matches);
  const second = app.getMatchDetailAnalysisCached(target, matches);

  assert.strictEqual(first, second);
  assert.strictEqual(app.formatDetailRecord({ matches: 5, wins: 3, draws: 1, losses: 1 }), "3승 1무 1패");
  assert.strictEqual(app.formatDetailGoalAverage({ matches: 5, avgGoalsFor: 1.64, avgGoalsAgainst: 0.82 }), "득 1.6 · 실 0.8");
});

test("builds explainable AI detail scores from cached match analysis", () => {
  const target = {
    date: "2026-07-13",
    league: "EPL",
    homeTeam: "Arsenal",
    awayTeam: "Chelsea",
    homeOdds: "1.80",
    drawOdds: "3.40",
    awayOdds: "4.20"
  };
  const historical = [
    { date: "2026-01-01", league: "EPL", homeTeam: "Arsenal", awayTeam: "Everton", homeOdds: "1.80", drawOdds: "3.40", awayOdds: "4.20", result: "H", score: "2-0" },
    { date: "2026-01-02", league: "EPL", homeTeam: "Liverpool", awayTeam: "Chelsea", homeOdds: "1.82", drawOdds: "3.39", awayOdds: "4.18", result: "D", score: "1-1" },
    { date: "2026-01-03", league: "EPL", homeTeam: "Arsenal", awayTeam: "Chelsea", homeOdds: "1.79", drawOdds: "3.42", awayOdds: "4.19", result: "A", score: "0-1" }
  ];
  const analysis = app.buildMatchDetailAnalysis(target, historical);
  const view = app.buildDetailAiViewModel(target, analysis);

  assert.strictEqual(view.knownMatches, 3);
  assert.strictEqual(view.scores.length, 4);
  assert.strictEqual(view.teamScores.length, 2);
  assert.strictEqual(view.teamScores[0].side, "홈팀");
  assert.strictEqual(view.teamScores[0].scores.length, 3);
  assert.strictEqual(view.teamScores[1].side, "원정팀");
  assert.strictEqual(view.gameScores.length, 1);
  assert(!view.gameScores.some((item) => item.label.includes("이변 가능성")));
  assert(Number.isInteger(view.internalUpsetScore));
  assert(view.evidence.some((item) => item.label.includes("유사배당 3경기")));
  assert(view.evidence.some((item) => item.label.includes("아스널 최근")));
  assert.strictEqual(view.conclusions.length, 3);
  assert(Number.isInteger(view.overallScore));
});

test("calibrates AI upset scores without bunching every match at 80", () => {
  const criteria = { homeOdds: "1.80", drawOdds: "3.40", awayOdds: "4.20" };
  const lowSample = app.calculateAiUpsetScore({
    favoriteOdds: 1.8,
    baseUpsetProbability: 82,
    matchAdjustment: 12,
    confidence: "낮음"
  }, criteria, 3);
  const strongHistory = app.calculateAiUpsetScore({
    favoriteOdds: 1.8,
    baseUpsetProbability: 68,
    matchAdjustment: 6,
    confidence: "높음"
  }, criteria, 60);

  assert(lowSample < 80);
  assert(strongHistory < 80);
  assert.notStrictEqual(lowSample, strongHistory);
});

test("summarizes stored odds movement without extra API calls", () => {
  const target = {
    date: "2026-07-15",
    league: "EPL",
    fixtureId: "991",
    homeTeam: "Arsenal",
    awayTeam: "Chelsea",
    homeOdds: "1.82",
    drawOdds: "3.50",
    awayOdds: "4.30",
    oddsUpdatedAt: "2026-07-14T00:00:00.000Z",
    oddsHistory: [
      { capturedAt: "2026-07-13T00:00:00.000Z", homeOdds: "1.95", drawOdds: "3.40", awayOdds: "4.10" }
    ]
  };
  const movement = app.getMatchOddsMovement(target, []);

  assert.strictEqual(movement.history.length, 2);
  assert.strictEqual(movement.movements[0].difference, -0.13);
  assert.strictEqual(movement.movements[2].difference, 0.2);
  assert.strictEqual(movement.isAlertCandidate, true);
});

test("displays the immediately previous odds without changing overall analysis movement", () => {
  const movement = app.getMatchOddsMovement({ oddsHistory: [
    { capturedAt: "2026-08-28T00:00:00Z", homeOdds: 2, drawOdds: 4, awayOdds: 5 },
    { capturedAt: "2026-08-29T00:00:00Z", homeOdds: 2.8, drawOdds: 3, awayOdds: 4 },
    { capturedAt: "2026-08-30T00:00:00Z", homeOdds: 2.6, drawOdds: 3.4, awayOdds: 4 }
  ] });
  const before = JSON.stringify(movement);
  const previousDocument = global.document;
  global.document = {
    createElement() {
      return {
        children: [], classList: { values: [], add(value) { this.values.push(value); } },
        append(...children) { this.children.push(...children); },
        appendChild(child) { this.children.push(child); return child; }
      };
    }
  };
  try {
    const section = app.createDetailOddsMovementSection(movement);
    const cards = section.children[1].children;
    assert.deepStrictEqual(cards.map((card) => card.children[1].children[0].textContent),
      ["이전 2.80", "이전 3.00", "이전 4.00"]);
    assert.deepStrictEqual(cards.map((card) => card.children[1].children[1].textContent),
      ["↓ 2.60", "↑ 3.40", "4.00"]);
    assert.deepStrictEqual(cards.map((card) => card.children[1].children[1].classList.values),
      [["down"], ["up"], ["same"]]);
    assert.strictEqual(JSON.stringify(movement), before);
    assert.strictEqual(movement.movements[0].from, 2);
  } finally {
    global.document = previousDocument;
  }
});

test("builds readable odds movement chart data from stored snapshots", () => {
  const chart = app.buildOddsMovementChartData([
    { capturedAt: "2026-07-13T00:00:00.000Z", homeOdds: "1.95", drawOdds: "3.40", awayOdds: "4.10" },
    { capturedAt: "2026-07-14T00:00:00.000Z", homeOdds: "1.82", drawOdds: "3.50", awayOdds: "4.30" }
  ]);

  assert(chart);
  assert.strictEqual(chart.snapshots.length, 2);
  assert.strictEqual(chart.series.length, 3);
  assert.deepStrictEqual(chart.series[0].values, [1.95, 1.82]);
  assert(chart.maxValue > 4.3);
  assert(chart.minValue < 1.82);
});

test("keeps a later return to the same odds in movement history", () => {
  const movement = app.getMatchOddsMovement({
    fixtureId: "return-odds",
    homeOdds: "1.95",
    drawOdds: "3.40",
    awayOdds: "4.10",
    oddsUpdatedAt: "2026-07-14T00:00:00.000Z",
    oddsHistory: [
      { capturedAt: "2026-07-12T00:00:00.000Z", homeOdds: "1.95", drawOdds: "3.40", awayOdds: "4.10" },
      { capturedAt: "2026-07-13T00:00:00.000Z", homeOdds: "1.82", drawOdds: "3.55", awayOdds: "4.30" }
    ]
  }, []);

  assert.strictEqual(movement.history.length, 3);
  assert.strictEqual(movement.history[2].homeOdds, 1.95);
});

test("formats expanded league and team names for Korean users", () => {
  assert.strictEqual(app.formatLeagueName("UEFA Champions League"), "챔피언스리그");
  assert.strictEqual(app.formatLeagueName("KLEAGUE1"), "K리그1");
  assert.strictEqual(app.formatLeagueName("KLEAGUE2"), "K리그2");
  assert.strictEqual(app.formatLeagueName("J2 League"), "J리그2");
  assert.strictEqual(app.formatLeagueName("EFL Championship"), "잉글랜드 챔피언십");
  assert.strictEqual(app.formatLeagueName("Eredivisie"), "에레디비시");
  assert.strictEqual(app.formatLeagueName("Liga Portugal"), "포르투갈 프리메이라리가");
  assert.strictEqual(app.formatLeagueName("Scottish Premiership"), "스코틀랜드 프리미어십");
  assert.strictEqual(app.formatLeagueName("Jupiler Pro League"), "벨기에 프로리그");
  assert.strictEqual(app.formatLeagueName("Süper Lig"), "튀르키예 쉬페르리그");
  assert.strictEqual(app.formatLeagueName("E0"), "EPL");
  assert.strictEqual(app.formatTeamName("FC Seoul"), "FC서울");
  assert.strictEqual(app.formatTeamName("Unknown FC"), "Unknown FC");
});

test("translates common API team names and aliases for Korean users", () => {
  assert.strictEqual(app.translateTeamName("Mexico"), "멕시코");
  assert.strictEqual(app.translateTeamName("England"), "잉글랜드");
  assert.strictEqual(app.translateTeamName("Manchester United"), "맨체스터 유나이티드");
  assert.strictEqual(app.translateTeamName("Manchester United", "en"), "Manchester United");
  assert.strictEqual(app.translateTeamName("Man Utd"), "맨체스터 유나이티드");
  assert.strictEqual(app.translateTeamName("Real Madrid"), "레알 마드리드");
  assert.strictEqual(app.translateTeamName("Vissel Kobe"), "비셀 고베");
  assert.strictEqual(app.translateTeamName("FK Partizan"), "파르티잔");
  assert.strictEqual(app.translateTeamName("Ulaanbaatar"), "Ulaanbaatar");
});

test("translates visible Champions League qualifier teams", () => {
  assert.strictEqual(app.translateTeamName("Ararat-Armenia"), "아라라트-아르메니아");
  assert.strictEqual(app.translateTeamName("Riga"), "리가");
  assert.strictEqual(app.translateTeamName("Vikingur Reykjavik"), "비킹구르 레이캬비크");
  assert.strictEqual(app.translateTeamName("Gyori ETO FC"), "죄르 ETO");
  assert.strictEqual(app.translateTeamName("Vardar Skopje"), "바르다르 스코페");
  assert.strictEqual(app.translateTeamName("KuPS"), "쿠오피온 팔로세우라");
  assert.strictEqual(app.translateTeamName("Borac Banja Luka"), "보라츠 바냐루카");
  assert.strictEqual(app.translateTeamName("Levski Sofia"), "레프스키 소피아");
});

test("translates expanded supported league team samples", () => {
  const samples = {
    "Ipswich Town": "입스위치 타운",
    Getafe: "헤타페",
    "Borussia Monchengladbach": "묀헨글라트바흐",
    Cagliari: "칼리아리",
    Auxerre: "오세르",
    "Kyoto Sanga": "교토 상가",
    "Tokyo Verdy": "도쿄 베르디",
    Ludogorets: "루도고레츠",
    "Maccabi Tel Aviv": "마카비 텔아비브",
    "Bodo/Glimt": "보되/글림트",
    "Dynamo Kyiv": "디나모 키이우",
    "Club Brugge": "클럽 브뤼헤",
    "Sporting CP": "스포르팅 CP",
    "Olympiakos": "올림피아코스",
    Armenia: "아르메니아",
    "North Macedonia": "북마케도니아",
    Ajax: "아약스",
    Arouca: "아로카",
    Aberdeen: "애버딘",
    Antwerp: "로열 앤트워프",
    Alanyaspor: "알라니아스포르",
    "Fortuna Sittard": "포르튀나 시타르트",
    "FC Porto": "포르투",
    "Heart Of Midlothian": "하츠",
    "Union St. Gilloise": "위니옹 생질루아즈",
    Fenerbahçe: "페네르바흐체"
  };

  for (const [rawName, koreanName] of Object.entries(samples)) {
    assert.strictEqual(app.translateTeamName(rawName), koreanName);
  }
});

test("translates common historical league team aliases", () => {
  const samples = {
    Bolton: "볼턴",
    Stoke: "스토크",
    Wigan: "위건",
    Swansea: "스완지",
    Chievo: "키에보",
    Malaga: "말라가",
    Hannover: "하노버",
    Sochaux: "소쇼",
    "La Coruna": "데포르티보 라코루냐",
    Nurnberg: "뉘른베르크",
    Reading: "레딩",
    Spal: "SPAL",
    Bari: "바리",
    Amiens: "아미앵",
    "Fortuna Dusseldorf": "포르투나 뒤셀도르프",
    Cardiff: "카디프",
    Verdy: "도쿄 베르디",
    "Bosnia & Herzegovina": "보스니아 헤르체고비나",
    "Ivory Coast": "코트디부아르",
    "North Korea": "북한"
  };

  for (const [rawName, koreanName] of Object.entries(samples)) {
    assert.strictEqual(app.translateTeamName(rawName), koreanName);
  }
});

test("matches expanded league aliases for fixture filters", () => {
  assert.strictEqual(app.leagueMatchesFixture("UEFA Champions League", "UCL"), true);
  assert.strictEqual(app.leagueMatchesFixture("K League 1", "KLEAGUE1"), true);
  assert.strictEqual(app.leagueMatchesFixture("K League 2", "KLEAGUE2"), true);
  assert.strictEqual(app.leagueMatchesFixture("J2 League", "J2LEAGUE"), true);
  assert.strictEqual(app.leagueMatchesFixture("Championship", "CHAMPIONSHIP"), true);
  assert.strictEqual(app.leagueMatchesFixture("Eredivisie", "EREDIVISIE"), true);
  assert.strictEqual(app.leagueMatchesFixture("Liga Portugal", "PRIMEIRA_LIGA"), true);
  assert.strictEqual(app.leagueMatchesFixture("Scottish Premiership", "SCOTTISH_PREMIERSHIP"), true);
  assert.strictEqual(app.leagueMatchesFixture("Jupiler Pro League", "BELGIAN_PRO_LEAGUE"), true);
  assert.strictEqual(app.leagueMatchesFixture("Süper Lig", "SUPER_LIG"), true);
  assert.strictEqual(app.leagueMatchesFixture("International Friendlies", "INTL_FRIENDLIES"), true);
  assert.strictEqual(app.leagueMatchesFixture("UEFA Champions League", "KLEAGUE1"), false);
});

test("cleans compound league labels for display", () => {
  assert.strictEqual(app.translateLeagueName("World Cup / World"), "월드컵");
  assert.strictEqual(app.translateLeagueName("Premier League", "en"), "Premier League");
  assert.strictEqual(app.translateLeagueName("UEFA Champions League / World"), "챔피언스리그");
  assert.strictEqual(app.translateLeagueName("EPL / Mongolia"), "EPL");
  assert.strictEqual(app.translateLeagueName("UEFA Champions League Qualification"), "챔피언스리그 예선");
  assert.strictEqual(app.translateLeagueName("UEFA Europa League Qualifying"), "유로파리그 예선");
});

test("filters today's major matches to supported leagues only", () => {
  const matches = app.getMajorTodayMatches([
    { league: "EPL", homeTeam: "Arsenal", awayTeam: "Chelsea", homeOdds: "1.80", drawOdds: "3.50", awayOdds: "4.20" },
    { league: "World Cup / World", homeTeam: "Mexico", awayTeam: "Ecuador", homeOdds: "2.10", drawOdds: "3.20", awayOdds: "3.60" },
    { league: "Championship", homeTeam: "Watford", awayTeam: "Millwall", homeOdds: "2.10", drawOdds: "3.20", awayOdds: "3.60" },
    { league: "K League 2", homeTeam: "Seoul E-Land FC", awayTeam: "Gyeongnam FC", homeOdds: "2.20", drawOdds: "3.10", awayOdds: "3.30" },
    { league: "J2 League", homeTeam: "JEF United Chiba", awayTeam: "Mito Hollyhock", homeOdds: "1.95", drawOdds: "3.30", awayOdds: "3.90" },
    { league: "Eredivisie", homeTeam: "Ajax", awayTeam: "Utrecht", homeOdds: "1.70", drawOdds: "3.80", awayOdds: "4.50" },
    { league: "Liga Portugal", homeTeam: "Arouca", awayTeam: "Sp Braga", homeOdds: "3.40", drawOdds: "3.30", awayOdds: "2.10" },
    { league: "Scottish Premiership", homeTeam: "Aberdeen", awayTeam: "Hearts", homeOdds: "2.40", drawOdds: "3.20", awayOdds: "2.90" },
    { league: "Jupiler Pro League", homeTeam: "Antwerp", awayTeam: "Mechelen", homeOdds: "1.90", drawOdds: "3.40", awayOdds: "3.80" },
    { league: "Süper Lig", homeTeam: "Alanyaspor", awayTeam: "Kayserispor", homeOdds: "2.00", drawOdds: "3.30", awayOdds: "3.60" },
    { league: "EPL", homeTeam: "No Odds", awayTeam: "Pending", homeOdds: "", drawOdds: "3.40", awayOdds: "4.50" },
    { league: "Premier League / Mongolia", homeTeam: "A", awayTeam: "B", homeOdds: "1.80", drawOdds: "3.50", awayOdds: "4.20" },
    { league: "Club Friendlies", homeTeam: "A", awayTeam: "B", homeOdds: "1.80", drawOdds: "3.50", awayOdds: "4.20" }
  ]);

  assert.strictEqual(matches.length, 10);
  assert(matches.some((match) => match.league === "EPL"));
  assert(matches.some((match) => match.league === "World Cup / World"));
  assert(matches.some((match) => match.league === "Championship"));
  assert(matches.some((match) => match.league === "K League 2"));
  assert(matches.some((match) => match.league === "J2 League"));
  assert(matches.some((match) => match.league === "Eredivisie"));
  assert(matches.some((match) => match.league === "Liga Portugal"));
  assert(matches.some((match) => match.league === "Scottish Premiership"));
  assert(matches.some((match) => match.league === "Jupiler Pro League"));
  assert(matches.some((match) => match.league === "Süper Lig"));
  assert(!matches.some((match) => match.homeTeam === "No Odds"));
  assert.strictEqual(app.isMajorTodayMatch({ league: "EPL / Mongolia" }), false);
});

test("deduplicates today cards and keeps the richest fixture row", () => {
  const matches = app.deduplicateTodayMatches([
    { date: "2026-07-13", league: "EPL", homeTeam: "Arsenal", awayTeam: "Chelsea", status: "NS" },
    { date: "2026-07-13", league: "EPL", homeTeam: "Arsenal", awayTeam: "Chelsea", status: "FT", score: "2-1", result: "H", homeOdds: "1.80", drawOdds: "3.50", awayOdds: "4.20" },
    { date: "2026-07-15", league: "UCL", homeTeam: "Drita", awayTeam: "Kauno Žalgiris", status: "NS" },
    { date: "2026-07-15", league: "UEFA Champions League", homeTeam: "Drita", awayTeam: "Kauno Zalgiris", status: "NS" }
  ]);

  assert.strictEqual(matches.length, 2);
  assert.strictEqual(matches[0].status, "FT");
  assert.strictEqual(matches[0].score, "2-1");
});

test("normalizes postponed cancelled and finished match statuses", () => {
  assert.strictEqual(app.getMatchStatusLabel({ status: "PST" }), "연기");
  assert.strictEqual(app.getMatchStatusLabel({ status: "Cancelled" }), "취소");
  assert.strictEqual(app.getMatchStatusLabel({ status: "Match Finished" }), "종료");
});

test("builds API history chunks and preserves API source on saved matches", () => {
  const chunks = app.getApiHistoryChunks({ endDate: "2026-07-06", totalDays: 30, chunkDays: 7 });
  assert.strictEqual(chunks.length, 5);
  assert.deepStrictEqual(chunks[0], { endDate: "2026-07-06", days: 7 });
  assert.strictEqual(app.getApiHistoryCacheKey({ league: "EPL", endDate: chunks[0].endDate, days: chunks[0].days }), "EPL:2026-07-06:7");

  const storage = new Map();
  const fakeStorage = {
    getItem: (key) => storage.get(key) || null,
    setItem: (key, value) => storage.set(key, value),
    removeItem: (key) => storage.delete(key)
  };
  const result = app.saveMatches([
    { date: "2026-07-01", league: "EPL", homeTeam: "Arsenal", awayTeam: "Chelsea", homeOdds: "1.80", drawOdds: "3.40", awayOdds: "4.20", result: "H", score: "2-0", source: "API 과거 배당" }
  ], fakeStorage);

  assert.strictEqual(result.matches[0].source, "API 과거 배당");
});

test("includes bundled API odds pack rows in base searchable matches", () => {
  const previousPack = globalThis.ODDS_ARCHIVE_API_ODDS_PACK;
  globalThis.ODDS_ARCHIVE_API_ODDS_PACK = {
    version: "test-api-pack",
    updatedAt: "2026-07-06T00:00:00.000Z",
    matches: [
      {
        date: "2026-07-01",
        league: "FIFA World Cup",
        homeTeam: "Mexico",
        awayTeam: "Ecuador",
        homeOdds: "2.20",
        drawOdds: "2.78",
        awayOdds: "3.90",
        result: "A",
        score: "0-1"
      }
    ]
  };

  try {
    const matches = app.getBaseMatches();
    const apiMatch = matches.find((match) => (
      match.date === "2026-07-01"
      && match.league === "FIFA World Cup"
      && match.homeTeam === app.translateTeamName("Mexico")
      && match.awayTeam === app.translateTeamName("Ecuador")
    ));

    assert(apiMatch);
    assert.strictEqual(apiMatch.source, "API 과거 배당");
    assert.strictEqual(apiMatch.homeOdds, 2.2);
  } finally {
    if (previousPack) {
      globalThis.ODDS_ARCHIVE_API_ODDS_PACK = previousPack;
    } else {
      delete globalThis.ODDS_ARCHIVE_API_ODDS_PACK;
    }
  }
});

test("summarizes odds result data sources for search trust", () => {
  const summary = app.getOddsResultSourceSummary([
    { source: "API 과거 배당" },
    { source: "API 과거 배당" },
    { source: "CSV" },
    {}
  ]);

  assert.deepStrictEqual(summary, {
    total: 4,
    labels: ["API 과거 2", "CSV 1", "기본 데이터 1"],
    text: "검색 기준 데이터: API 과거 2 · CSV 1 · 기본 데이터 1"
  });
});

test("includes Korean priority leagues in fixture league options", () => {
  const values = app.getFixtureLeagueOptions().map((option) => option.value);
  assert(values.includes("UCL"));
  assert(values.includes("UEL"));
  assert(values.includes("KLEAGUE1"));
  assert(values.includes("KLEAGUE2"));
  assert(values.includes("J1LEAGUE"));
  assert(values.includes("J2LEAGUE"));
  assert(values.includes("CHAMPIONSHIP"));
  assert(values.includes("EREDIVISIE"));
  assert(values.includes("PRIMEIRA_LIGA"));
  assert(values.includes("SCOTTISH_PREMIERSHIP"));
  assert(values.includes("BELGIAN_PRO_LEAGUE"));
  assert(values.includes("SUPER_LIG"));
  assert(values.includes("ACL"));
  assert(values.includes("WCQ"));
  assert(values.includes("INTL_FRIENDLIES"));
});

test("translates first expanded league team samples", () => {
  assert.strictEqual(app.translateTeamName("Seoul E-Land FC"), "서울 이랜드");
  assert.strictEqual(app.translateTeamName("JEF United Chiba"), "제프 유나이티드 지바");
  assert.strictEqual(app.translateTeamName("West Brom"), "웨스트 브로미치");
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

test("keeps live API team names translated on today cards", () => {
  const view = app.getHomeTodayCardViewModel({
    league: "FIFA World Cup",
    homeTeam: "England",
    awayTeam: "Congo DR",
    startTime: "20:00",
    status: "NS",
    homeOdds: "1.70",
    drawOdds: "3.50",
    awayOdds: "5.00"
  });

  assert.strictEqual(view.title, "잉글랜드 vs 콩고민주공화국");
  assert.strictEqual(view.league, "월드컵");
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

test("summarizes today match insight for users", () => {
  const insight = app.getTodayUserInsight(
    { league: "EPL", homeTeam: "Arsenal", awayTeam: "Chelsea", homeOdds: "1.80", drawOdds: "3.40", awayOdds: "4.20" },
    { breakdown: { totalMatches: 50, knownMatches: 50, homeWins: 31, draws: 10, awayWins: 9, homeRate: "62.0%", drawRate: "20.0%", awayRate: "18.0%" } }
  );

  assert(insight.text.includes("홈 62.0%"));
  assert(!insight.text.includes("이변"));
  assert(insight.text.includes("표본 50"));
  assert(insight.score > 500);
});

test("keeps low sample today insight free from upset wording", () => {
  const insight = app.getTodayUserInsight(
    { league: "EPL", homeTeam: "Arsenal", awayTeam: "Chelsea", homeOdds: "1.80", drawOdds: "3.40", awayOdds: "4.20" },
    { breakdown: { totalMatches: 8, knownMatches: 8, homeWins: 2, draws: 1, awayWins: 5, homeRate: "25.0%", drawRate: "12.5%", awayRate: "62.5%" } }
  );

  assert(insight.text.includes("유사배당 8경기"));
  assert(insight.text.includes("신뢰도 낮음"));
  assert(!insight.text.includes("이변"));
  assert(!insight.text.includes("위험"));
  assert(!insight.text.includes("참고용"));
});

test("keeps operational data views available only in admin mode", () => {
  assert.strictEqual(app.getAllowedViewId("#matches", false), "search");
  assert.strictEqual(app.getAllowedViewId("#upload", false), "search");
  assert.strictEqual(app.getAllowedViewId("#matches", true), "matches");
  assert.strictEqual(app.getAllowedViewId("#upload", true), "upload");
  assert.strictEqual(app.getAllowedViewId("#account", false), "account");
});

test("shows final collected odds for finished cards and stale warnings only before kickoff", () => {
  const finished = app.getHomeTodayCardViewModel({
    league: "KLEAGUE1",
    homeTeam: "FC Seoul",
    awayTeam: "Gangwon FC",
    status: "FT",
    homeOdds: "2.10",
    drawOdds: "3.20",
    awayOdds: "3.40",
    result: "D",
    score: "0-0"
  });
  const stale = app.getHomeTodayCardViewModel({
    league: "KLEAGUE1",
    homeTeam: "FC Seoul",
    awayTeam: "Gangwon FC",
    status: "NS",
    homeOdds: "2.10",
    drawOdds: "3.20",
    awayOdds: "3.40",
    updatedAt: "2020-01-01T00:00:00.000Z"
  });

  assert.strictEqual(finished.resultText, "경기결과: 무승부 0-0");
  assert.strictEqual(finished.insight.text, "최종 수집 배당");
  assert.strictEqual(stale.insight.text, "신뢰도 낮음 · 오래된 배당");
});

test("sorts user useful today matches before low sample matches", () => {
  const searchableMatches = [
    { date: "2026-01-01", league: "EPL", homeTeam: "A", awayTeam: "B", homeOdds: 1.8, drawOdds: 3.4, awayOdds: 4.2, result: "H" },
    { date: "2026-01-02", league: "EPL", homeTeam: "C", awayTeam: "D", homeOdds: 1.8, drawOdds: 3.4, awayOdds: 4.2, result: "D" },
    { date: "2026-01-03", league: "EPL", homeTeam: "E", awayTeam: "F", homeOdds: 1.8, drawOdds: 3.4, awayOdds: 4.2, result: "H" },
    { date: "2026-01-04", league: "EPL", homeTeam: "G", awayTeam: "H", homeOdds: 1.8, drawOdds: 3.4, awayOdds: 4.2, result: "A" },
    { date: "2026-01-05", league: "EPL", homeTeam: "I", awayTeam: "J", homeOdds: 1.8, drawOdds: 3.4, awayOdds: 4.2, result: "H" }
  ];
  const sorted = app.sortHomeTodayMatchesForUsers([
    { league: "KLEAGUE1", homeTeam: "FC Seoul", awayTeam: "Daegu FC", startTime: "19:00" },
    { league: "EPL", homeTeam: "Arsenal", awayTeam: "Chelsea", startTime: "22:00", homeOdds: "1.80", drawOdds: "3.40", awayOdds: "4.20" }
  ], searchableMatches);

  assert.strictEqual(sorted[0].league, "EPL");
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
  assert.strictEqual(app.calculateMatchJudgement({ totalMatches: 100, knownMatches: 100, homeWins: 62, draws: 20, awayWins: 18 }, criteria).judgement, "일반");
  assert.strictEqual(app.calculateMatchJudgement({ totalMatches: 100, knownMatches: 100, homeWins: 53, draws: 22, awayWins: 25 }, criteria).risk, "보통");
  assert.strictEqual(app.calculateMatchJudgement({ totalMatches: 100, knownMatches: 100, homeWins: 45, draws: 25, awayWins: 30 }, criteria).judgement, "정배불안");
  assert.strictEqual(app.calculateMatchJudgement({ totalMatches: 100, knownMatches: 100, homeWins: 38, draws: 25, awayWins: 37 }, criteria).risk, "보통");
});

test("classifies upset candidates by favorite odds band", () => {
  const hugeUpset = app.calculateMatchJudgement(
    { totalMatches: 40, knownMatches: 40, homeWins: 20, draws: 10, awayWins: 10 },
    { homeOdds: "1.30", drawOdds: "5.20", awayOdds: "9.00" }
  );
  const upset = app.calculateMatchJudgement(
    { totalMatches: 40, knownMatches: 40, homeWins: 20, draws: 10, awayWins: 10 },
    { homeOdds: "1.55", drawOdds: "4.20", awayOdds: "6.00" }
  );
  const shakyFavorite = app.calculateMatchJudgement(
    { totalMatches: 40, knownMatches: 40, homeWins: 20, draws: 10, awayWins: 10 },
    { homeOdds: "1.75", drawOdds: "3.80", awayOdds: "4.80" }
  );
  const closeFavorite = app.calculateMatchJudgement(
    { totalMatches: 40, knownMatches: 40, homeWins: 16, draws: 12, awayWins: 12 },
    { homeOdds: "1.90", drawOdds: "3.30", awayOdds: "3.90" }
  );

  assert.strictEqual(hugeUpset.judgement, "대형 이변 후보");
  assert.strictEqual(hugeUpset.favoriteOdds, 1.3);
  assert.strictEqual(hugeUpset.favoriteBand, "초강정배");
  assert.strictEqual(upset.judgement, "이변 후보");
  assert.strictEqual(shakyFavorite.judgement, "정배불안");
  assert.strictEqual(closeFavorite.judgement, "박빙주의");
});

test("does not mark low sample or close favorites as upset candidates", () => {
  const lowSample = app.calculateMatchJudgement(
    { totalMatches: 14, knownMatches: 14, homeWins: 5, draws: 4, awayWins: 5 },
    { homeOdds: "1.35", drawOdds: "5.00", awayOdds: "8.00" }
  );
  const closeFavorite = app.calculateMatchJudgement(
    { totalMatches: 80, knownMatches: 80, homeWins: 30, draws: 25, awayWins: 25 },
    { homeOdds: "1.85", drawOdds: "3.40", awayOdds: "4.20", homeSelectionRate: "90" }
  );

  assert.notStrictEqual(lowSample.judgement, "대형 이변 후보");
  assert(lowSample.signals.includes("표본 부족"));
  assert.strictEqual(closeFavorite.judgement, "박빙주의");
  assert(!["대형 이변 후보", "이변 후보"].includes(closeFavorite.judgement));
});

test("keeps today upset top to true low-odds upset candidates only", () => {
  const todayMatches = [
    { date: "2026-07-08", league: "EPL", homeTeam: "A", awayTeam: "B", homeOdds: "1.30", drawOdds: "5.20", awayOdds: "9.00" },
    { date: "2026-07-08", league: "EPL", homeTeam: "C", awayTeam: "D", homeOdds: "1.55", drawOdds: "4.20", awayOdds: "6.00" },
    { date: "2026-07-08", league: "EPL", homeTeam: "E", awayTeam: "F", homeOdds: "1.85", drawOdds: "3.40", awayOdds: "4.20" }
  ];
  const history = [];
  const addHistory = (prefix, odds, results) => {
    results.forEach((result, index) => {
      history.push({
        date: `2025-01-${String(index + 1).padStart(2, "0")}`,
        league: "EPL",
        homeTeam: `${prefix} Home ${index}`,
        awayTeam: `${prefix} Away ${index}`,
        homeOdds: odds[0],
        drawOdds: odds[1],
        awayOdds: odds[2],
        result
      });
    });
  };
  addHistory("Big", ["1.30", "5.20", "9.00"], [...Array(10).fill("H"), ...Array(5).fill("D"), ...Array(5).fill("A")]);
  addHistory("Upset", ["1.55", "4.20", "6.00"], [...Array(10).fill("H"), ...Array(5).fill("D"), ...Array(5).fill("A")]);
  addHistory("Close", ["1.85", "3.40", "4.20"], [...Array(8).fill("H"), ...Array(6).fill("D"), ...Array(6).fill("A")]);

  const candidates = app.getTodayUpsetCandidates(todayMatches, history);

  assert.strictEqual(candidates.length, 2);
  assert.deepStrictEqual(candidates.map((item) => item.topLabel), ["대형 이변 후보", "무승부 주의"]);
  assert(candidates.every((item) => item.evidence.length > 0));
  assert(!candidates.some((item) => item.match.homeTeam === "E"));
});

test("does not cap naturally qualified upset candidates", () => {
  const todayMatches = Array.from({ length: 4 }, (_, index) => ({
    date: "2026-07-08",
    league: "EPL",
    homeTeam: `Favorite ${index}`,
    awayTeam: `Underdog ${index}`,
    homeOdds: "1.30",
    drawOdds: "5.20",
    awayOdds: "9.00"
  }));
  const history = Array.from({ length: 20 }, (_, index) => ({
    date: `2025-01-${String(index + 1).padStart(2, "0")}`,
    league: "EPL",
    homeTeam: `Past Home ${index}`,
    awayTeam: `Past Away ${index}`,
    homeOdds: "1.30",
    drawOdds: "5.20",
    awayOdds: "9.00",
    result: index < 10 ? "H" : index < 15 ? "D" : "A"
  }));

  const candidates = app.getTodayUpsetCandidates(todayMatches, history);

  assert.strictEqual(candidates.length, 4);
});

test("widens the sample for upset scoring when the same-league exact-odds sample is too thin", () => {
  // 실제 프로덕션에서 재현된 상황: 특정 배당 조합이 그 리그 안에서는 표본이 1~2건뿐이라
  // 심사 기준(15경기)을 못 채웠다. 다른 리그까지 넓혀 찾으면 표본이 충분한데도,
  // getTodayUpsetCandidates 가 예전엔 "같은 리그·오차 0.05"에서 1건만 찾아도 거기서
  // 멈춰버려서 이변 신호가 강해도 항상 탈락했다.
  const todayMatch = { date: "2026-08-27", league: "LALIGA", homeTeam: "Real Madrid", awayTeam: "Real Sociedad", homeOdds: "1.20", drawOdds: "6.50", awayOdds: "12.50" };
  const leagues = ["LALIGA", "LALIGA", "EPL", "SERIEA", "BUNDESLIGA", "LIGUE1", "EREDIVISIE", "PRIMEIRA_LIGA", "UCL", "UEL", "EPL", "SERIEA", "BUNDESLIGA", "LIGUE1", "EREDIVISIE", "UCL", "UEL"];
  const results = [...Array(5).fill("H"), ...Array(8).fill("D"), ...Array(4).fill("A")];
  const history = results.map((result, index) => ({
    date: `2025-0${(index % 9) + 1}-10`,
    league: leagues[index],
    homeTeam: `Fav ${index}`,
    awayTeam: `Dog ${index}`,
    homeOdds: "1.20",
    drawOdds: "6.50",
    awayOdds: "12.50",
    result
  }));

  const sameLeagueSample = history.filter((match) => match.league === "LALIGA");
  assert.strictEqual(sameLeagueSample.length, 2); // 같은 리그 표본은 원래 이만큼밖에 없다.

  const candidates = app.getTodayUpsetCandidates([todayMatch], history);
  assert.strictEqual(candidates.length, 1);
  assert.strictEqual(candidates[0].topLabel, "대형 이변 후보");
});

test("requires multiple signals for the 1.61 to 2.00 favorite band", () => {
  const match = { league: "EPL", homeTeam: "A", awayTeam: "B", homeOdds: "1.80", drawOdds: "3.40", awayOdds: "4.50" };
  const breakdown = { totalMatches: 40, knownMatches: 40, homeWins: 16, draws: 12, awayWins: 12 };
  const withoutContext = app.assessTodayUpsetCandidate(match, breakdown, null);
  const withScheduleContext = app.assessTodayUpsetCandidate(match, breakdown, {
    adjustment: 10,
    confidence: "보통",
    signals: ["정배 일정 부담", "최근 흐름 역전"]
  });

  assert.strictEqual(withoutContext.isTopCandidate, false);
  assert.strictEqual(withScheduleContext.isTopCandidate, true);
  assert.strictEqual(withScheduleContext.topLabel, "정배 불안");
});

test("uses market expectation instead of a fixed 55 percent favorite cutoff", () => {
  const strongFavorite = app.assessTodayUpsetCandidate(
    { league: "EPL", homeTeam: "A", awayTeam: "B", homeOdds: "1.30", drawOdds: "5.20", awayOdds: "9.00" },
    { totalMatches: 100, knownMatches: 100, homeWins: 60, draws: 20, awayWins: 20 },
    null
  );
  const unstableFavorite = app.assessTodayUpsetCandidate(
    { league: "EPL", homeTeam: "C", awayTeam: "D", homeOdds: "1.80", drawOdds: "3.40", awayOdds: "4.50" },
    { totalMatches: 100, knownMatches: 100, homeWins: 39, draws: 31, awayWins: 30 },
    null
  );

  assert.strictEqual(strongFavorite.isTopCandidate, true);
  assert(strongFavorite.favoriteFailureLift > 10);
  assert.strictEqual(unstableFavorite.isTopCandidate, true);
  assert.strictEqual(unstableFavorite.topLabel, "정배 불안");
});

test("adds recent schedule pressure without using future matches", () => {
  const history = [
    { date: "2026-07-08", league: "EPL", homeTeam: "Alpha", awayTeam: "X", result: "A", score: "0-2" },
    { date: "2026-07-11", league: "EPL", homeTeam: "Y", awayTeam: "Alpha", result: "H", score: "2-0" },
    { date: "2026-07-13", league: "EPL", homeTeam: "Alpha", awayTeam: "Z", result: "D", score: "1-1" },
    { date: "2026-06-01", league: "EPL", homeTeam: "Beta", awayTeam: "P", result: "H", score: "2-0" },
    { date: "2026-06-05", league: "EPL", homeTeam: "Q", awayTeam: "Beta", result: "A", score: "0-1" },
    { date: "2026-06-09", league: "EPL", homeTeam: "Beta", awayTeam: "R", result: "H", score: "2-1" },
    { date: "2026-07-16", league: "EPL", homeTeam: "Alpha", awayTeam: "Future", result: "H", score: "5-0" }
  ];
  const profile = app.getMatchContextProfile({
    date: "2026-07-15",
    league: "EPL",
    homeTeam: "Alpha",
    awayTeam: "Beta",
    homeOdds: "1.50",
    drawOdds: "4.00",
    awayOdds: "6.00"
  }, history);

  assert.strictEqual(profile.favoriteScheduleProfile.matches, 3);
  assert(profile.favoriteScheduleProfile.matchesLast7 >= 2);
  assert(profile.signals.includes("정배 일정 부담"));
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

test("uses team form without forcing a low-confidence upset label", () => {
  const todayMatch = {
    date: "2026-07-09",
    league: "WORLDCUP",
    roundName: "Quarter-finals",
    homeTeam: "France",
    awayTeam: "Morocco",
    homeOdds: "1.45",
    drawOdds: "3.40",
    awayOdds: "7.00",
    result: "UNKNOWN"
  };
  const history = [];
  const addSimilar = (result, index) => {
    history.push({
      date: `2025-01-${String(index + 1).padStart(2, "0")}`,
      league: "WORLDCUP",
      homeTeam: `Strong ${index}`,
      awayTeam: `Dog ${index}`,
      homeOdds: "1.45",
      drawOdds: "3.40",
      awayOdds: "7.00",
      result,
      score: result === "H" ? "2-0" : result === "D" ? "1-1" : "0-1"
    });
  };
  [...Array(10).fill("H"), ...Array(5).fill("D"), ...Array(5).fill("A")].forEach(addSimilar);
  [
    ["2026-06-01", "Morocco", "Spain", "1-1", "D"],
    ["2026-06-05", "Morocco", "England", "1-0", "H"],
    ["2026-06-09", "Morocco", "Germany", "2-1", "H"],
    ["2026-06-13", "Morocco", "Brazil", "2-0", "H"],
    ["2026-06-17", "Argentina", "Morocco", "0-0", "D"]
  ].forEach(([date, homeTeam, awayTeam, score, result]) => {
    history.push({ date, league: "WORLDCUP", homeTeam, awayTeam, homeOdds: "3.20", drawOdds: "3.20", awayOdds: "2.20", result, score });
  });

  const profile = app.getMatchContextProfile(todayMatch, history);
  const candidates = app.getTodayUpsetCandidates([todayMatch], history);

  assert(profile.signals.includes("토너먼트 변수"));
  assert(profile.signals.includes("약팀 득점 흐름"));
  assert(profile.signals.includes("강팀 상대 버팀"));
  assert.strictEqual(profile.confidence, "낮음");
  assert.strictEqual(candidates.length, 1);
  assert.strictEqual(candidates[0].topLabel, "무승부 주의");
});

test("uses league rank and home-away form in match context", () => {
  const history = [];
  for (let index = 1; index <= 5; index += 1) {
    history.push({
      date: `2026-01-0${index}`,
      league: "EPL",
      homeTeam: "Alpha",
      awayTeam: `Club ${index}`,
      result: "A",
      score: "0-2"
    });
    history.push({
      date: `2026-02-0${index}`,
      league: "EPL",
      homeTeam: `Club ${index}`,
      awayTeam: "Beta",
      result: "A",
      score: "0-2"
    });
  }

  const profile = app.getMatchContextProfile({
    date: "2026-07-01",
    league: "EPL",
    homeTeam: "Alpha",
    awayTeam: "Beta",
    homeOdds: "1.50",
    drawOdds: "4.00",
    awayOdds: "6.00"
  }, history);

  assert.strictEqual(profile.confidence, "높음");
  assert(profile.homeVenueProfile.matches >= 3);
  assert(profile.awayVenueProfile.matches >= 3);
  assert(profile.underdogStanding.rank < profile.favoriteStanding.rank);
  assert(profile.signals.includes("리그 순위 역전"));
  assert(profile.signals.includes("홈원정 흐름 역전"));
});

test("blocks strong upset judgement when context confidence is low", () => {
  const judgement = app.calculateMatchJudgement({
    totalMatches: 30,
    knownMatches: 30,
    homeWins: 12,
    draws: 9,
    awayWins: 9
  }, {
    homeOdds: "1.50",
    drawOdds: "4.00",
    awayOdds: "6.00",
    contextConfidence: "낮음"
  });

  assert.strictEqual(judgement.confidence, "낮음");
  assert(!["이변 후보", "대형 이변 후보"].includes(judgement.judgement));
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

  assert.strictEqual(upset.judgement, "박빙주의");
  assert(upset.signals.includes("정배 과몰림"));
  assert.strictEqual(highRisk.judgement, "박빙주의");
  assert.strictEqual(highRisk.risk, "보통");
});

test("marks small and empty samples", () => {
  const criteria = { homeOdds: "1.80", drawOdds: "3.40", awayOdds: "4.20" };
  const small = app.calculateMatchJudgement({ totalMatches: 3, knownMatches: 3, homeWins: 2, draws: 0, awayWins: 1 }, criteria);
  const empty = app.calculateMatchJudgement({ totalMatches: 0, knownMatches: 0, homeWins: 0, draws: 0, awayWins: 0 }, criteria);

  assert(small.signals.includes("표본 부족"));
  assert.strictEqual(empty.judgement, "데이터 부족");
  assert(empty.signals.includes("데이터 부족"));
});

test("keeps unknown pre-match result labels blank for detail cards", () => {
  assert.strictEqual(app.formatResultLabel(undefined), "");
  assert.strictEqual(app.formatResultLabel(null), "");
  assert.strictEqual(app.formatMatchResultText({ status: "NS", result: undefined }), "");
  assert(!app.formatMatchResultText({ status: "NS", result: undefined }).includes("undefined"));
  assert.strictEqual(app.formatMatchResultText({ result: "H", score: "2-0" }), "경기결과: 홈승 2-0");
});

test("builds direct odds search criteria from a live match without odds", () => {
  const criteria = app.getDirectOddsSearchCriteriaFromMatch({
    league: "ALL",
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
    league: "ALL",
    teamQuery: "",
    sourceMatchId: "|all|england|congo dr",
    sourceMatch: {
      date: "",
      league: "ALL",
      homeTeam: "England",
      awayTeam: "Congo DR",
      startTime: ""
    }
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

  assert(summary.includes("전적 없음"));
  assert(!summary.includes("표본 부족"));
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

  assert.strictEqual(summary, "홈승 31/68.9% · 무 10/22.2% · 원정승 4/8.9% · 45경기");
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

  assert.strictEqual(memo, "45/45경기");
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

  assert(verdict.includes("판정: 일반"));
  assert(!verdict.includes("위험도"));
  assert(!verdict.includes("역배 신호"));
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
  assert(verdict.includes("판정: 일반"));
  assert(!verdict.includes("표본 부족"));
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

  assert(!verdict.includes("위험도"));
  assert(verdict.includes("무승부 주의"));
  assert(!verdict.includes("역배 신호"));
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
