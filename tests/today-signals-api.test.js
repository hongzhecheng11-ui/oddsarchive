"use strict";

const assert = require("assert");
const { buildTodaySignals } = require("../api/today-signals.js");

const match = {
  id: "fixture-1",
  league: "EPL",
  homeTeam: "Home",
  awayTeam: "Away",
  homeOdds: "1.80",
  drawOdds: "3.50",
  awayOdds: "4.20"
};

const assessment = {
  isTopCandidate: true,
  topLabel: "이변 후보",
  topScore: 77,
  knownMatches: 20,
  marketFavoriteRate: 55,
  favoriteFailureLift: 15,
  strongestDirection: { key: "D" },
  evidence: ["과거 표본 20경기"],
  judgement: {
    favorite: { key: "H" },
    favoriteHitRate: 40,
    sampleSize: 20
  }
};

const fakeApp = {
  getMajorTodayMatches(matches) { return matches; },
  getSharedCandidateMatches() { return [{ id: "history-1" }]; },
  assessTodayMatches(matches, history) {
    assert.strictEqual(matches[0], match);
    assert.strictEqual(history[0].id, "history-1");
    return [{ match, assessment }];
  },
  getTodayStrongSignal(matches, history, assessed) {
    assert.strictEqual(matches[0], match);
    assert.strictEqual(history[0].id, "history-1");
    assert.strictEqual(assessed[0].assessment, assessment);
    return null;
  }
};

const result = buildTodaySignals([match], fakeApp, "2026-09-21");
assert.strictEqual(result.date, "2026-09-21");
assert.strictEqual(result.eligibleMatchCount, 1);
assert.strictEqual(result.upset.length, 1);
assert.strictEqual(result.upset[0].match.id, "fixture-1");
assert.strictEqual(result.upset[0].sampleSize, 20);
assert.strictEqual(result.upset[0].selectionKey, "D");
assert.strictEqual(result.upset[0].riskLevel, "high");
assert.strictEqual(result.strong, null);

console.log("today-signals-api.test.js passed");
