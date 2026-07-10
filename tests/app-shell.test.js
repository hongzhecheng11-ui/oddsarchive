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
    teamQuery: ""
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
    "North Macedonia": "북마케도니아"
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
  assert.strictEqual(app.leagueMatchesFixture("International Friendlies", "INTL_FRIENDLIES"), true);
  assert.strictEqual(app.leagueMatchesFixture("UEFA Champions League", "KLEAGUE1"), false);
});

test("cleans compound league labels for display", () => {
  assert.strictEqual(app.translateLeagueName("World Cup / World"), "월드컵");
  assert.strictEqual(app.translateLeagueName("UEFA Champions League / World"), "챔피언스리그");
  assert.strictEqual(app.translateLeagueName("EPL / Mongolia"), "EPL");
  assert.strictEqual(app.translateLeagueName("UEFA Champions League Qualification"), "챔피언스리그 예선");
  assert.strictEqual(app.translateLeagueName("UEFA Europa League Qualifying"), "유로파리그 예선");
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
  assert(!insight.text.includes("이변"));
  assert(!insight.text.includes("위험"));
  assert(!insight.text.includes("참고용"));
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
  assert(!candidates.some((item) => item.match.homeTeam === "E"));
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

test("adds team form and strong-opponent context to upset candidates", () => {
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
  assert.strictEqual(candidates.length, 1);
  assert.strictEqual(candidates[0].topLabel, "이변 후보");
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
    teamQuery: ""
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
