"use strict";

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

function makeRecentSequence(teamSide, results = []) {
  return results.map((result, index) => {
    const homeTeam = teamSide === "home" ? "Home FC" : `Opponent ${index}`;
    const awayTeam = teamSide === "home" ? `Opponent ${index}` : "Away FC";
    return makeHistoricalMatch(`2026-07-${String(10 - index).padStart(2, "0")}`, result, {
      league: "EPL",
      homeTeam,
      awayTeam,
      homeOdds: 2.1,
      drawOdds: 3.2,
      awayOdds: 3.5
    });
  });
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

function makeManyMatches({ count, result, odds = {}, league = "EPL" }) {
  return Array.from({ length: count }, (_, index) => (
    makeHistoricalMatch(`2026-06-${String(index + 1).padStart(2, "0")}`, result, {
      league,
      homeOdds: odds.homeOdds ?? 1.55,
      drawOdds: odds.drawOdds ?? 3.4,
      awayOdds: odds.awayOdds ?? 5.2
    })
  ));
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

test("distinguishes no-sample rates from real zero percent", () => {
  const match = makeMatch();
  const noSampleContext = app.buildAnalysisContextV1(match, buildAnalysis(match));
  assert.strictEqual(noSampleContext.samples.sameOdds.rates.draw, null);
  assert.strictEqual(noSampleContext.samples.similarOdds.rates.home, null);

  const exactMatches = makeManyMatches({ count: 2, result: "H" });
  const withSampleContext = app.buildAnalysisContextV1(match, buildAnalysis(match, {
    sameOddsMatches: exactMatches,
    similarOddsMatches: exactMatches
  }));
  assert.strictEqual(withSampleContext.samples.sameOdds.rates.home, 100);
  assert.strictEqual(withSampleContext.samples.sameOdds.rates.draw, 0);
  assert.strictEqual(withSampleContext.samples.sameOdds.rates.away, 0);
});

test("returns low confidence direction when judgement is data lack", () => {
  const match = makeMatch();
  const context = app.buildAnalysisContextV1(match, buildAnalysis(match, { similarOddsMatches: [] }));
  assert.strictEqual(app.decideAnalysisDirection(context), "LOW_CONFIDENCE");
});

test("routes strong upset judgement into draw-risk direction when draw signal exists", () => {
  const match = makeMatch({ homeOdds: 1.42, drawOdds: 4.0, awayOdds: 7.0 });
  const similarOddsMatches = makeMixedMatches({
    home: 5,
    draw: 7,
    away: 8,
    homeOdds: 1.42,
    drawOdds: 4.0,
    awayOdds: 7.0
  });
  const sameLeagueMatches = makeMixedMatches({
    home: 4,
    draw: 6,
    away: 10,
    homeOdds: 1.42,
    drawOdds: 4.0,
    awayOdds: 7.0
  });
  const context = app.buildAnalysisContextV1(match, buildAnalysis(match, {
    similarOddsMatches,
    sameLeagueMatches,
    contextConfidence: "보통"
  }));
  assert.strictEqual(context.judgement.value, "이변 후보");
  assert.strictEqual(app.decideAnalysisDirection(context), "HOME_WITH_DRAW_RISK");
});

test("does not return upset warning inside the 1.20 to 1.39 band", () => {
  const buildContextForOdds = (homeOdds) => {
    const match = makeMatch({ homeOdds, drawOdds: 4.0, awayOdds: 7.0 });
    return app.buildAnalysisContextV1(match, buildAnalysis(match, {
      similarOddsMatches: makeMixedMatches({
        home: 5,
        draw: 7,
        away: 8,
        homeOdds,
        drawOdds: 4.0,
        awayOdds: 7.0
      }),
      sameLeagueMatches: makeMixedMatches({
        home: 4,
        draw: 6,
        away: 10,
        homeOdds,
        drawOdds: 4.0,
        awayOdds: 7.0
      }),
      contextConfidence: "蹂댄넻"
    }));
  };

  const context120 = { ...buildContextForOdds(1.2), upsetScore: 50 };
  const context139 = { ...buildContextForOdds(1.39), upsetScore: 50 };
  assert.notStrictEqual(app.decideAnalysisDirection(context120), "UPSET_WARNING");
  assert.notStrictEqual(app.decideAnalysisDirection(context139), "UPSET_WARNING");
});

test("does not return upset warning inside the 1.40 to 1.50 band", () => {
  const buildContextForOdds = (homeOdds) => {
    const match = makeMatch({ homeOdds, drawOdds: 4.0, awayOdds: 7.0 });
    return app.buildAnalysisContextV1(match, buildAnalysis(match, {
      similarOddsMatches: makeMixedMatches({
        home: 5,
        draw: 7,
        away: 8,
        homeOdds,
        drawOdds: 4.0,
        awayOdds: 7.0
      }),
      sameLeagueMatches: makeMixedMatches({
        home: 4,
        draw: 6,
        away: 10,
        homeOdds,
        drawOdds: 4.0,
        awayOdds: 7.0
      }),
      contextConfidence: "蹂댄넻"
    }));
  };

  const context140 = { ...buildContextForOdds(1.4), upsetScore: 50 };
  const context150 = { ...buildContextForOdds(1.5), upsetScore: 50 };
  assert.notStrictEqual(app.decideAnalysisDirection(context140), "UPSET_WARNING");
  assert.notStrictEqual(app.decideAnalysisDirection(context150), "UPSET_WARNING");
});

test("routes upset-style judgements without draw risk to balanced", () => {
  const match = makeMatch({ homeOdds: 1.42, drawOdds: 4.0, awayOdds: 7.0 });
  const context = app.buildAnalysisContextV1(match, buildAnalysis(match, {
    similarOddsMatches: makeMixedMatches({
      home: 9,
      draw: 3,
      away: 8,
      homeOdds: 1.42,
      drawOdds: 4.0,
      awayOdds: 7.0
    }),
    sameLeagueMatches: makeMixedMatches({
      home: 8,
      draw: 2,
      away: 10,
      homeOdds: 1.42,
      drawOdds: 4.0,
      awayOdds: 7.0
    }),
    contextConfidence: "蹂댄넻"
  }));

  assert.notStrictEqual(context.judgement.key, "DATA_LACK");
  assert.strictEqual(app.decideAnalysisDirection(context), "BALANCED");
});

test("does not return upset warning above 1.50 even with upset signals", () => {
  const match = makeMatch({ homeOdds: 1.51, drawOdds: 4.0, awayOdds: 7.0 });
  const context = app.buildAnalysisContextV1(match, buildAnalysis(match, {
    similarOddsMatches: makeMixedMatches({
      home: 5,
      draw: 7,
      away: 8,
      homeOdds: 1.51,
      drawOdds: 4.0,
      awayOdds: 7.0
    }),
    sameLeagueMatches: makeMixedMatches({
      home: 4,
      draw: 6,
      away: 10,
      homeOdds: 1.51,
      drawOdds: 4.0,
      awayOdds: 7.0
    }),
    contextConfidence: "蹂댄넻"
  }));

  assert.notStrictEqual(app.decideAnalysisDirection(context), "UPSET_WARNING");
});

test("does not return upset warning when favorite odds are invalid", () => {
  const match = makeMatch({ homeOdds: "", drawOdds: 4.0, awayOdds: 7.0 });
  const context = app.buildAnalysisContextV1(match, buildAnalysis(match, {
    similarOddsMatches: makeMixedMatches({
      home: 5,
      draw: 7,
      away: 8,
      homeOdds: 1.42,
      drawOdds: 4.0,
      awayOdds: 7.0
    }),
    sameLeagueMatches: makeMixedMatches({
      home: 4,
      draw: 6,
      away: 10,
      homeOdds: 1.42,
      drawOdds: 4.0,
      awayOdds: 7.0
    }),
    contextConfidence: "蹂댄넻"
  }));

  assert.notStrictEqual(app.decideAnalysisDirection(context), "UPSET_WARNING");
});

test("returns home strong direction for stable home favorite", () => {
  const match = makeMatch({ homeOdds: 1.58, drawOdds: 3.55, awayOdds: 5.5 });
  const similarOddsMatches = makeMixedMatches({
    home: 14,
    draw: 3,
    away: 3,
    homeOdds: 1.58,
    drawOdds: 3.55,
    awayOdds: 5.5
  });
  const context = app.buildAnalysisContextV1(match, buildAnalysis(match, {
    similarOddsMatches,
    homeRecent: makeRecentSequence("home", ["H", "H", "D", "H", "A"]),
    awayRecent: makeRecentSequence("away", ["A", "D", "H", "A", "A"])
  }));
  assert.strictEqual(app.decideAnalysisDirection(context), "HOME_STRONG");
});

test("returns away strong direction for stable away favorite", () => {
  const match = makeMatch({ homeOdds: 5.1, drawOdds: 3.6, awayOdds: 1.6 });
  const similarOddsMatches = makeMixedMatches({
    home: 3,
    draw: 3,
    away: 14,
    homeOdds: 5.1,
    drawOdds: 3.6,
    awayOdds: 1.6
  });
  const context = app.buildAnalysisContextV1(match, buildAnalysis(match, { similarOddsMatches }));
  assert.strictEqual(app.decideAnalysisDirection(context), "AWAY_STRONG");
});

test("returns draw heavy direction when draw is top outcome", () => {
  const match = makeMatch({ homeOdds: 2.85, drawOdds: 2.7, awayOdds: 2.95 });
  const similarOddsMatches = makeMixedMatches({
    home: 4,
    draw: 10,
    away: 6,
    homeOdds: 2.85,
    drawOdds: 2.7,
    awayOdds: 2.95
  });
  const context = app.buildAnalysisContextV1(match, buildAnalysis(match, { similarOddsMatches }));
  assert.strictEqual(app.decideAnalysisDirection(context), "DRAW_HEAVY");
});

test("returns home with draw risk when home favorite also has draw signal", () => {
  const match = makeMatch({ homeOdds: 1.95, drawOdds: 3.15, awayOdds: 4.4 });
  const similarOddsMatches = makeMixedMatches({
    home: 9,
    draw: 6,
    away: 5,
    homeOdds: 1.95,
    drawOdds: 3.15,
    awayOdds: 4.4
  });
  const context = app.buildAnalysisContextV1(match, buildAnalysis(match, { similarOddsMatches }));
  assert.strictEqual(app.decideAnalysisDirection(context), "HOME_WITH_DRAW_RISK");
});

test("returns away with draw risk when away favorite also has draw signal", () => {
  const match = makeMatch({ homeOdds: 4.4, drawOdds: 3.15, awayOdds: 1.95 });
  const similarOddsMatches = makeMixedMatches({
    home: 5,
    draw: 6,
    away: 9,
    homeOdds: 4.4,
    drawOdds: 3.15,
    awayOdds: 1.95
  });
  const context = app.buildAnalysisContextV1(match, buildAnalysis(match, { similarOddsMatches }));
  assert.strictEqual(app.decideAnalysisDirection(context), "AWAY_WITH_DRAW_RISK");
});

test("returns balanced direction for mixed but non-draw-heavy matches", () => {
  const match = makeMatch({ homeOdds: 1.95, drawOdds: 3.45, awayOdds: 4.0 });
  const similarOddsMatches = makeMixedMatches({
    home: 8,
    draw: 4,
    away: 8,
    homeOdds: 1.95,
    drawOdds: 3.45,
    awayOdds: 4.0
  });
  const context = app.buildAnalysisContextV1(match, buildAnalysis(match, { similarOddsMatches }));
  assert.strictEqual(context.judgement.value, "박빙주의");
  assert.strictEqual(app.decideAnalysisDirection(context), "BALANCED");
});

test("builds separated sample tags for exact, similar, and same-league groups", () => {
  const match = makeMatch();
  const context = app.buildAnalysisContextV1(match, buildAnalysis(match, {
    sameOddsMatches: makeMixedMatches({ home: 1, draw: 0, away: 0 }),
    similarOddsMatches: makeMixedMatches({ home: 9, draw: 6, away: 5 }),
    sameLeagueMatches: makeMixedMatches({ home: 18, draw: 6, away: 6 })
  }));
  const tags = app.buildAnalysisTags(context);
  assert(tags.includes("EXACT_SAMPLE_LOW"));
  assert(tags.includes("SIMILAR_SAMPLE_MEDIUM"));
  assert(tags.includes("LEAGUE_SAMPLE_HIGH"));
});

test("uses a stable seeded selection for identical input", () => {
  const match = makeMatch();
  const context = app.buildAnalysisContextV1(match, buildAnalysis(match, {
    similarOddsMatches: makeMixedMatches({ home: 14, draw: 3, away: 3 })
  }));
  const seedA = app.buildAnalysisSeedKey(context, { language: "ko" });
  const seedB = app.buildAnalysisSeedKey(context, { language: "ko" });
  const values = Array.from({ length: 20 }, (_, index) => `sentence-${index}`);
  assert.strictEqual(seedA, seedB);
  assert.strictEqual(app.pickSeededValue(values, seedA), app.pickSeededValue(values, seedB));
});

test("updates seed when analysis data changes", () => {
  const match = makeMatch();
  const contextA = app.buildAnalysisContextV1(match, buildAnalysis(match, {
    similarOddsMatches: makeMixedMatches({ home: 14, draw: 3, away: 3 })
  }));
  const contextB = app.buildAnalysisContextV1(match, buildAnalysis(match, {
    similarOddsMatches: makeMixedMatches({ home: 13, draw: 3, away: 4 })
  }));
  const seedA = app.buildAnalysisSeedKey(contextA, { language: "ko" });
  const seedB = app.buildAnalysisSeedKey(contextB, { language: "ko" });
  assert.notStrictEqual(seedA, seedB);
});

test("direction result is always a single allowed value", () => {
  const match = makeMatch({ homeOdds: 4.8, drawOdds: 3.4, awayOdds: 1.72 });
  const context = app.buildAnalysisContextV1(match, buildAnalysis(match, {
    similarOddsMatches: makeMixedMatches({ home: 4, draw: 5, away: 11 })
  }));
  const allowed = new Set([
    "LOW_CONFIDENCE",
    "UPSET_WARNING",
    "DRAW_HEAVY",
    "HOME_WITH_DRAW_RISK",
    "AWAY_WITH_DRAW_RISK",
    "HOME_STRONG",
    "AWAY_STRONG",
    "BALANCED"
  ]);
  const direction = app.decideAnalysisDirection(context);
  assert.strictEqual(typeof direction, "string");
  assert(allowed.has(direction));
});
