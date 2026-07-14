"use strict";

const assert = require("assert");
const tracker = require("../scripts/track-upset-candidates.js");

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

const candidateMatch = {
  date: "2026-07-15",
  league: "EPL",
  fixtureId: "fixture-1",
  homeTeam: "Favorite",
  awayTeam: "Underdog",
  homeOdds: "1.50",
  drawOdds: "4.00",
  awayOdds: "6.00",
  result: "UNKNOWN",
  score: ""
};

test("stores a pre-match candidate snapshot without personal or secret fields", () => {
  const snapshot = tracker.buildCandidateSnapshot({
    match: candidateMatch,
    topLabel: "원정 역배 주의",
    evidence: ["원정 역배 24%", "최근 흐름 역전"],
    judgement: { sampleSize: 28 }
  }, "2026-07-14T00:00:00.000Z");

  assert.strictEqual(snapshot.favoriteKey, "H");
  assert.strictEqual(snapshot.predictedDirection, "A");
  assert.strictEqual(snapshot.sampleSize, 28);
  assert.strictEqual(Object.hasOwn(snapshot, "email"), false);
  assert.strictEqual(Object.hasOwn(snapshot, "apiKey"), false);
});

test("keeps zero-candidate days and resolves later results", () => {
  let returnCandidate = true;
  const app = {
    getSearchableMatches: () => [],
    getTodayUpsetCandidates: (matches) => returnCandidate
      ? [{ match: matches[0], topLabel: "원정 역배 주의", evidence: ["원정 역배 24%"], judgement: { sampleSize: 20 } }]
      : []
  };
  const first = tracker.updateCandidateAudit(tracker.createEmptyAudit(), [candidateMatch], app, {
    today: "2026-07-14",
    maxDate: "2026-07-17",
    evaluatedAt: "2026-07-14T00:00:00.000Z"
  });
  assert.strictEqual(first.days[0].candidateIds.length, 1);
  assert.strictEqual(first.candidates.length, 1);

  returnCandidate = false;
  const finished = { ...candidateMatch, result: "A", score: "0-1" };
  const second = tracker.updateCandidateAudit(first, [finished], app, {
    today: "2026-07-16",
    maxDate: "2026-07-19",
    evaluatedAt: "2026-07-16T00:00:00.000Z"
  });
  assert.strictEqual(second.candidates[0].favoriteFailed, true);
  assert.strictEqual(second.candidates[0].directionHit, true);
  assert.strictEqual(second.summary.resolvedCandidates, 1);
});

test("records a future day even when no candidate qualifies", () => {
  const app = {
    getSearchableMatches: () => [],
    getTodayUpsetCandidates: () => []
  };
  const audit = tracker.updateCandidateAudit(tracker.createEmptyAudit(), [candidateMatch], app, {
    today: "2026-07-14",
    maxDate: "2026-07-17",
    evaluatedAt: "2026-07-14T00:00:00.000Z"
  });
  assert.strictEqual(audit.days.length, 1);
  assert.strictEqual(audit.days[0].candidateIds.length, 0);
});
