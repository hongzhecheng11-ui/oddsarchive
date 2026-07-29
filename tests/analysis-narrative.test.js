"use strict";

const assert = require("assert");
const app = require("../app.js");
require("../data/api-odds-pack.js");

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

function makeMatch(overrides = {}) {
  return {
    date: "2026-07-20",
    league: "EPL",
    homeTeam: "Home FC",
    awayTeam: "Away FC",
    homeOdds: 1.55,
    drawOdds: 3.4,
    awayOdds: 5.2,
    result: "UNKNOWN",
    score: "",
    ...overrides
  };
}

function makeHistoricalMatch(date, result, overrides = {}) {
  const scoreByResult = {
    H: "2-0",
    D: "1-1",
    A: "0-2"
  };
  return makeMatch({
    date,
    result,
    score: scoreByResult[result] || "1-0",
    ...overrides
  });
}

function makeRecentSequence(teamSide, results = [], options = {}) {
  return results.map((result, index) => {
    const homeTeam = teamSide === "home" ? "Home FC" : `Opponent ${index}`;
    const awayTeam = teamSide === "home" ? `Opponent ${index}` : "Away FC";
    return makeHistoricalMatch(`2026-07-${String(10 - index).padStart(2, "0")}`, result, {
      league: options.league || "EPL",
      homeTeam,
      awayTeam,
      homeOdds: options.homeOdds ?? 2.1,
      drawOdds: options.drawOdds ?? 3.2,
      awayOdds: options.awayOdds ?? 3.5
    });
  });
}

function makeMixedMatches(config = {}) {
  const entries = [];
  let cursor = 1;
  [["H", config.home || 0], ["D", config.draw || 0], ["A", config.away || 0]].forEach(([result, count]) => {
    for (let index = 0; index < count; index += 1) {
      entries.push(makeHistoricalMatch(`2026-05-${String(cursor).padStart(2, "0")}`, result, {
        league: config.league || "EPL",
        homeOdds: config.homeOdds ?? 1.55,
        drawOdds: config.drawOdds ?? 3.4,
        awayOdds: config.awayOdds ?? 5.2
      }));
      cursor += 1;
    }
  });
  return entries;
}

function buildAnalysis(match, options = {}) {
  const sameOddsMatches = options.sameOddsMatches || [];
  const similarOddsMatches = options.similarOddsMatches || [];
  const sameLeagueMatches = options.sameLeagueMatches || [];
  const criteria = {
    league: match.league,
    homeTeam: match.homeTeam,
    awayTeam: match.awayTeam,
    homeOdds: match.homeOdds,
    drawOdds: match.drawOdds,
    awayOdds: match.awayOdds,
    exactBreakdown: app.calculateResultBreakdown(sameOddsMatches),
    sameLeagueBreakdown: app.calculateResultBreakdown(sameLeagueMatches),
    contextConfidence: options.contextConfidence || ""
  };
  const similarBreakdown = app.calculateResultBreakdown(similarOddsMatches);
  return {
    criteria,
    sameOdds: {
      breakdown: criteria.exactBreakdown
    },
    similarOdds: {
      breakdown: similarBreakdown,
      judgement: app.calculateMatchJudgement(similarBreakdown, criteria)
    },
    sameLeagueSimilar: {
      breakdown: criteria.sameLeagueBreakdown
    },
    recentRecords: {
      headToHead: options.headToHead || [],
      homeTeam: options.homeRecent || [],
      awayTeam: options.awayRecent || []
    },
    contextProfile: options.contextProfile || {}
  };
}

function createNarrative(match, analysis) {
  const context = app.buildAnalysisContextV1(match, analysis);
  return {
    context,
    tags: app.buildAnalysisTags(context),
    direction: app.decideAnalysisDirection(context),
    selection: app.buildAnalysisSentenceSelection(context, { language: "ko" }),
    narrative: app.buildAnalysisNarrativeBlock(context, { language: "ko" })
  };
}

function makeContextProfile(overrides = {}) {
  return {
    favoriteKey: overrides.favoriteKey || "H",
    homeVenueProfile: overrides.homeVenueProfile || { matches: 5, wins: 4, draws: 1, losses: 0, avgGoalsFor: 1.8, avgGoalsAgainst: 0.8, pointsPerMatch: 2.6 },
    awayVenueProfile: overrides.awayVenueProfile || { matches: 5, wins: 1, draws: 1, losses: 3, avgGoalsFor: 0.9, avgGoalsAgainst: 1.7, pointsPerMatch: 0.8 },
    homeSeasonProfile: overrides.homeSeasonProfile || {},
    awaySeasonProfile: overrides.awaySeasonProfile || {},
    homePerformanceProfile: overrides.homePerformanceProfile || {},
    awayPerformanceProfile: overrides.awayPerformanceProfile || {},
    favoriteStanding: overrides.favoriteStanding || { rank: 3, played: 20, points: 39, goalDifference: 12 },
    underdogStanding: overrides.underdogStanding || { rank: 12, played: 20, points: 24, goalDifference: -5 },
    confidence: overrides.confidence || "보통",
    signals: overrides.signals || []
  };
}

test("analysis sentence library stays within the planned first-phase size", () => {
  const count = app.getAnalysisSentenceLibrary().length;
  assert(count >= 120, `expected at least 120 sentences, received ${count}`);
  assert(count <= 150, `expected at most 150 sentences, received ${count}`);
});

test("data-lack narrative remains stable and limited", () => {
  const match = makeMatch();
  const analysis = buildAnalysis(match, {
    similarOddsMatches: []
  });
  const { narrative, selection, direction } = createNarrative(match, analysis);
  assert.strictEqual(direction, "LOW_CONFIDENCE");
  assert.strictEqual(narrative.sentences.length, 3);
  assert.strictEqual(new Set(narrative.usedSentenceIds).size, narrative.usedSentenceIds.length);
  assert.strictEqual(new Set(narrative.usedMeaningKeys).size, narrative.usedMeaningKeys.length);
  assert.strictEqual(new Set(selection.sentences.map((item) => item.cooldownKey)).size, selection.sentences.length);
  assert(!narrative.usedMeaningKeys.includes("CLOSING_MONITOR"));
  assert.strictEqual(narrative.usedMeaningKeys.filter((key) => key.startsWith("CONCLUSION_")).length, 1);
});

test("stable home favorite narrative does not collide with balanced direction", () => {
  const match = makeMatch({ homeOdds: 1.58, drawOdds: 3.55, awayOdds: 5.5 });
  const analysis = buildAnalysis(match, {
    similarOddsMatches: makeMixedMatches({ home: 14, draw: 3, away: 3, homeOdds: 1.58, drawOdds: 3.55, awayOdds: 5.5 }),
    sameOddsMatches: makeMixedMatches({ home: 5, draw: 1, away: 1, homeOdds: 1.58, drawOdds: 3.55, awayOdds: 5.5 }),
    sameLeagueMatches: makeMixedMatches({ home: 9, draw: 2, away: 2, homeOdds: 1.58, drawOdds: 3.55, awayOdds: 5.5 }),
    homeRecent: makeRecentSequence("home", ["H", "H", "D", "H", "A"]),
    awayRecent: makeRecentSequence("away", ["A", "D", "H", "A", "A"]),
    contextProfile: makeContextProfile({ favoriteKey: "H" })
  });
  const { direction, narrative } = createNarrative(match, analysis);
  assert.strictEqual(direction, "HOME_STRONG");
  assert(!narrative.usedMeaningKeys.includes("CONCLUSION_DRAW"));
});

test("stable away favorite narrative does not collide with balanced direction", () => {
  const match = makeMatch({ homeOdds: 5.1, drawOdds: 3.6, awayOdds: 1.6 });
  const analysis = buildAnalysis(match, {
    similarOddsMatches: makeMixedMatches({ home: 3, draw: 3, away: 14, homeOdds: 5.1, drawOdds: 3.6, awayOdds: 1.6 }),
    sameOddsMatches: makeMixedMatches({ home: 1, draw: 1, away: 5, homeOdds: 5.1, drawOdds: 3.6, awayOdds: 1.6 }),
    sameLeagueMatches: makeMixedMatches({ home: 2, draw: 2, away: 7, homeOdds: 5.1, drawOdds: 3.6, awayOdds: 1.6 }),
    homeRecent: makeRecentSequence("home", ["A", "D", "A", "H", "A"]),
    awayRecent: makeRecentSequence("away", ["H", "H", "D", "H", "A"]),
    contextProfile: makeContextProfile({
      favoriteKey: "A",
      homeVenueProfile: { matches: 5, wins: 1, draws: 1, losses: 3, avgGoalsFor: 0.8, avgGoalsAgainst: 1.8, pointsPerMatch: 0.8 },
      awayVenueProfile: { matches: 5, wins: 4, draws: 0, losses: 1, avgGoalsFor: 1.9, avgGoalsAgainst: 0.9, pointsPerMatch: 2.4 }
    })
  });
  const { direction, narrative } = createNarrative(match, analysis);
  assert.strictEqual(direction, "AWAY_STRONG");
  assert(!narrative.usedMeaningKeys.includes("CONCLUSION_DRAW"));
});

test("draw-heavy narrative stays separate from upset warning", () => {
  const match = makeMatch({ homeOdds: 2.85, drawOdds: 2.7, awayOdds: 2.95 });
  const analysis = buildAnalysis(match, {
    similarOddsMatches: makeMixedMatches({ home: 4, draw: 10, away: 6, homeOdds: 2.85, drawOdds: 2.7, awayOdds: 2.95 }),
    sameOddsMatches: makeMixedMatches({ home: 1, draw: 4, away: 1, homeOdds: 2.85, drawOdds: 2.7, awayOdds: 2.95 }),
    sameLeagueMatches: makeMixedMatches({ home: 2, draw: 5, away: 3, homeOdds: 2.85, drawOdds: 2.7, awayOdds: 2.95 })
  });
  const { direction, narrative } = createNarrative(match, analysis);
  assert.strictEqual(direction, "DRAW_HEAVY");
  assert(!narrative.usedMeaningKeys.includes("CONCLUSION_UPSET"));
});

test("upset warning narrative stays separate from draw-heavy conclusion", () => {
  const match = makeMatch({ homeOdds: 1.42, drawOdds: 4.0, awayOdds: 7.0 });
  const analysis = buildAnalysis(match, {
    similarOddsMatches: makeMixedMatches({ home: 5, draw: 7, away: 8, homeOdds: 1.42, drawOdds: 4.0, awayOdds: 7.0 }),
    sameOddsMatches: makeMixedMatches({ home: 1, draw: 3, away: 4, homeOdds: 1.42, drawOdds: 4.0, awayOdds: 7.0 }),
    sameLeagueMatches: makeMixedMatches({ home: 4, draw: 6, away: 10, homeOdds: 1.42, drawOdds: 4.0, awayOdds: 7.0 }),
    homeRecent: makeRecentSequence("home", ["H", "D", "A", "A", "D"]),
    awayRecent: makeRecentSequence("away", ["H", "H", "D", "H", "A"]),
    contextProfile: makeContextProfile({ confidence: "보통" })
  });
  const { direction, narrative } = createNarrative(match, analysis);
  assert.strictEqual(direction, "UPSET_WARNING");
  assert(!narrative.usedMeaningKeys.includes("CONCLUSION_DRAW"));
});

test("home with draw risk does not collapse into home strong", () => {
  const match = makeMatch({ homeOdds: 1.95, drawOdds: 3.15, awayOdds: 4.4 });
  const analysis = buildAnalysis(match, {
    similarOddsMatches: makeMixedMatches({ home: 9, draw: 6, away: 5, homeOdds: 1.95, drawOdds: 3.15, awayOdds: 4.4 }),
    homeRecent: makeRecentSequence("home", ["H", "D", "D", "H", "A"]),
    awayRecent: makeRecentSequence("away", ["A", "D", "H", "A", "A"]),
    contextProfile: makeContextProfile({ favoriteKey: "H" })
  });
  const { direction, narrative } = createNarrative(match, analysis);
  assert.strictEqual(direction, "HOME_WITH_DRAW_RISK");
  assert(!narrative.usedMeaningKeys.includes("CONCLUSION_DRAW"));
});

test("away with draw risk does not collapse into away strong", () => {
  const match = makeMatch({ homeOdds: 4.4, drawOdds: 3.15, awayOdds: 1.95 });
  const analysis = buildAnalysis(match, {
    similarOddsMatches: makeMixedMatches({ home: 5, draw: 6, away: 9, homeOdds: 4.4, drawOdds: 3.15, awayOdds: 1.95 }),
    homeRecent: makeRecentSequence("home", ["A", "D", "A", "H", "A"]),
    awayRecent: makeRecentSequence("away", ["H", "D", "H", "D", "A"]),
    contextProfile: makeContextProfile({ favoriteKey: "A" })
  });
  const { direction, narrative } = createNarrative(match, analysis);
  assert.strictEqual(direction, "AWAY_WITH_DRAW_RISK");
  assert(!narrative.usedMeaningKeys.includes("CONCLUSION_DRAW"));
});

test("balanced matches stay balanced without strong home or away claims", () => {
  const match = makeMatch({ homeOdds: 1.95, drawOdds: 3.45, awayOdds: 4.0 });
  const analysis = buildAnalysis(match, {
    similarOddsMatches: makeMixedMatches({ home: 8, draw: 4, away: 8, homeOdds: 1.95, drawOdds: 3.45, awayOdds: 4.0 }),
    sameOddsMatches: makeMixedMatches({ home: 2, draw: 2, away: 2, homeOdds: 1.95, drawOdds: 3.45, awayOdds: 4.0 }),
    sameLeagueMatches: makeMixedMatches({ home: 3, draw: 2, away: 3, homeOdds: 1.95, drawOdds: 3.45, awayOdds: 4.0 })
  });
  const { direction, narrative } = createNarrative(match, analysis);
  assert.strictEqual(direction, "BALANCED");
  assert(!narrative.usedMeaningKeys.includes("CONCLUSION_HOME"));
  assert(!narrative.usedMeaningKeys.includes("CONCLUSION_AWAY"));
});

test("missing data categories do not force unsupported sentences", () => {
  const match = makeMatch({ homeOdds: 1.62, drawOdds: 3.55, awayOdds: 5.1 });
  const analysis = buildAnalysis(match, {
    similarOddsMatches: makeMixedMatches({ home: 12, draw: 4, away: 4, homeOdds: 1.62, drawOdds: 3.55, awayOdds: 5.1 }),
    sameOddsMatches: [],
    sameLeagueMatches: [],
    homeRecent: [],
    awayRecent: [],
    headToHead: [],
    contextProfile: makeContextProfile({
      favoriteKey: "H",
      homeVenueProfile: { matches: 0, wins: 0, draws: 0, losses: 0, avgGoalsFor: 0, avgGoalsAgainst: 0, pointsPerMatch: 0 },
      awayVenueProfile: { matches: 0, wins: 0, draws: 0, losses: 0, avgGoalsFor: 0, avgGoalsAgainst: 0, pointsPerMatch: 0 }
    })
  });
  const { narrative } = createNarrative(match, analysis);
  assert(!narrative.usedMeaningKeys.includes("EXACT_HOME_SUPPORT"));
  assert(!narrative.usedMeaningKeys.includes("EXACT_AWAY_SUPPORT"));
  assert(!narrative.usedMeaningKeys.includes("EXACT_DRAW_SUPPORT"));
  assert(!narrative.usedMeaningKeys.includes("LEAGUE_HOME_SUPPORT"));
  assert(!narrative.usedMeaningKeys.includes("LEAGUE_AWAY_SUPPORT"));
  assert(!narrative.usedMeaningKeys.includes("LEAGUE_DRAW_SUPPORT"));
});

test("same input always returns identical seeded narrative", () => {
  const match = makeMatch({ homeOdds: 1.7, drawOdds: 3.4, awayOdds: 4.9 });
  const analysis = buildAnalysis(match, {
    similarOddsMatches: makeMixedMatches({ home: 12, draw: 4, away: 4, homeOdds: 1.7, drawOdds: 3.4, awayOdds: 4.9 }),
    sameOddsMatches: makeMixedMatches({ home: 4, draw: 1, away: 1, homeOdds: 1.7, drawOdds: 3.4, awayOdds: 4.9 }),
    sameLeagueMatches: makeMixedMatches({ home: 6, draw: 2, away: 2, homeOdds: 1.7, drawOdds: 3.4, awayOdds: 4.9 }),
    homeRecent: makeRecentSequence("home", ["H", "H", "D", "H", "A"]),
    awayRecent: makeRecentSequence("away", ["A", "D", "A", "H", "A"]),
    contextProfile: makeContextProfile({ favoriteKey: "H" })
  });
  const first = createNarrative(match, analysis).narrative;
  const second = createNarrative(match, analysis).narrative;
  assert.deepStrictEqual(first, second);
});

test("data change can produce a different seeded narrative", () => {
  const match = makeMatch({ homeOdds: 1.7, drawOdds: 3.4, awayOdds: 4.9 });
  const analysisA = buildAnalysis(match, {
    similarOddsMatches: makeMixedMatches({ home: 12, draw: 4, away: 4, homeOdds: 1.7, drawOdds: 3.4, awayOdds: 4.9 }),
    homeRecent: makeRecentSequence("home", ["H", "H", "D", "H", "A"]),
    awayRecent: makeRecentSequence("away", ["A", "D", "A", "H", "A"]),
    contextProfile: makeContextProfile({ favoriteKey: "H" })
  });
  const analysisB = buildAnalysis(match, {
    similarOddsMatches: makeMixedMatches({ home: 9, draw: 6, away: 5, homeOdds: 1.7, drawOdds: 3.4, awayOdds: 4.9 }),
    homeRecent: makeRecentSequence("home", ["H", "D", "D", "H", "A"]),
    awayRecent: makeRecentSequence("away", ["A", "D", "H", "A", "A"]),
    contextProfile: makeContextProfile({ favoriteKey: "H" })
  });
  const first = createNarrative(match, analysisA).narrative;
  const second = createNarrative(match, analysisB).narrative;
  assert.notStrictEqual(first.paragraph, second.paragraph);
});

test("actual stored matches produce valid narratives across a 20-match sample", () => {
  const searchableMatches = app.getSearchableMatches().filter((match) => (
    match && match.homeOdds && match.drawOdds && match.awayOdds && match.homeTeam && match.awayTeam
  )).slice(0, 20);
  assert(searchableMatches.length >= 20, "expected at least 20 searchable matches");
  searchableMatches.forEach((match) => {
    const analysis = app.buildMatchDetailAnalysis(match, app.getSearchableMatches());
    const context = app.buildAnalysisContextV1(match, analysis);
    const selection = app.buildAnalysisSentenceSelection(context, { language: "ko" });
    const narrative = app.buildAnalysisNarrativeBlock(context, { language: "ko" });
    const expectedMax = narrative.direction === "LOW_CONFIDENCE" ? 3 : 7;
    const expectedMin = narrative.direction === "LOW_CONFIDENCE" ? 3 : 4;
    assert(selection.sentences.length >= expectedMin && selection.sentences.length <= expectedMax, `${match.homeTeam} vs ${match.awayTeam} sentence count`);
    assert.strictEqual(new Set(narrative.usedSentenceIds).size, narrative.usedSentenceIds.length);
    assert.strictEqual(new Set(narrative.usedMeaningKeys).size, narrative.usedMeaningKeys.length);
    assert(narrative.paragraph.length > 0);
    assert(!narrative.usedMeaningKeys.includes("CLOSING_MONITOR"));
    assert.strictEqual(narrative.usedMeaningKeys.filter((key) => key.startsWith("CONCLUSION_")).length, 1, `${match.homeTeam} vs ${match.awayTeam} conclusion count`);
  });
});

test("starter text is chosen from candidates instead of auto-rewritten", () => {
  const match = makeMatch({ homeOdds: 4.4, drawOdds: 3.15, awayOdds: 1.95 });
  const analysis = buildAnalysis(match, {
    similarOddsMatches: makeMixedMatches({ home: 5, draw: 6, away: 9, homeOdds: 4.4, drawOdds: 3.15, awayOdds: 1.95 }),
    homeRecent: makeRecentSequence("home", ["A", "D", "A", "H", "A"]),
    awayRecent: makeRecentSequence("away", ["H", "D", "H", "D", "A"]),
    contextProfile: makeContextProfile({ favoriteKey: "A" })
  });
  const { narrative } = createNarrative(match, analysis);
  assert(!narrative.paragraph.includes("직전 흐름만 보면"));
  assert.strictEqual(narrative.usedMeaningKeys.filter((key) => key.startsWith("CONCLUSION_")).length, 1);
});

test("detail narrative view model is exposed only for korean with paragraph", () => {
  const match = makeMatch({ homeOdds: 1.58, drawOdds: 3.55, awayOdds: 5.5 });
  const analysis = buildAnalysis(match, {
    similarOddsMatches: makeMixedMatches({ home: 14, draw: 3, away: 3, homeOdds: 1.58, drawOdds: 3.55, awayOdds: 5.5 }),
    sameOddsMatches: makeMixedMatches({ home: 5, draw: 1, away: 1, homeOdds: 1.58, drawOdds: 3.55, awayOdds: 5.5 }),
    sameLeagueMatches: makeMixedMatches({ home: 9, draw: 2, away: 2, homeOdds: 1.58, drawOdds: 3.55, awayOdds: 5.5 }),
    homeRecent: makeRecentSequence("home", ["H", "H", "D", "H", "A"]),
    awayRecent: makeRecentSequence("away", ["A", "D", "H", "A", "A"]),
    contextProfile: makeContextProfile({ favoriteKey: "H" })
  });
  const koreanView = app.buildDetailNarrativeViewModel(match, analysis, { language: "ko" });
  assert(koreanView);
  assert(koreanView.headline.length > 0);
  assert(koreanView.paragraph.length > 0);

  const englishView = app.buildDetailNarrativeViewModel(match, analysis, { language: "en" });
  assert.strictEqual(englishView, null);

  const hiddenView = app.buildDetailNarrativeViewModel(match, analysis, {
    language: "ko",
    narrative: { headline: "테스트", paragraph: "   " }
  });
  assert.strictEqual(hiddenView, null);
});
