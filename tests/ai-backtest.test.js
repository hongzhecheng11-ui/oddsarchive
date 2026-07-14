"use strict";

const assert = require("assert");
const app = require("../app.js");
const backtest = require("../scripts/backtest-ai-analysis.js");

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

function makeMatch(date, result = "H") {
  return {
    date,
    league: "TEST",
    homeTeam: "Home",
    awayTeam: "Away",
    homeOdds: 1.8,
    drawOdds: 3.4,
    awayOdds: 4.5,
    result
  };
}

test("uses only matches from earlier dates", () => {
  const history = Array.from({ length: 15 }, (_, index) => (
    makeMatch(`2026-01-${String(index + 1).padStart(2, "0")}`, index % 3 === 0 ? "A" : "H")
  ));
  const targetDate = "2026-02-01";
  const report = backtest.runBacktest([
    ...history,
    makeMatch(targetDate, "H"),
    makeMatch(targetDate, "A")
  ], app, { from: targetDate, to: targetDate });

  assert.strictEqual(report.rows.length, 2);
  assert.deepStrictEqual(report.rows.map((row) => row.priorSample), [15, 15]);
});

test("groups scores into stable calibration bands", () => {
  assert.strictEqual(backtest.getScoreBand(39), "0-39");
  assert.strictEqual(backtest.getScoreBand(40), "40-49");
  assert.strictEqual(backtest.getScoreBand(59), "50-59");
  assert.strictEqual(backtest.getScoreBand(80), "80-100");
});

test("rejects unfinished and incomplete-odds matches", () => {
  assert.strictEqual(backtest.normalizeBacktestMatch(makeMatch("2026-01-01", "UNKNOWN")), null);
  assert.strictEqual(backtest.normalizeBacktestMatch({ ...makeMatch("2026-01-01"), awayOdds: "" }), null);
});

test("summarizes candidate and no-candidate days without forcing a quota", () => {
  const summary = backtest.summarizeCandidateDays([
    { date: "2026-01-01", isCandidate: true, actualUpset: true, directionKey: "A", result: "A" },
    { date: "2026-01-01", isCandidate: true, actualUpset: false, directionKey: "D", result: "H" },
    { date: "2026-01-01", isCandidate: false, actualUpset: false, result: "H" },
    { date: "2026-01-02", isCandidate: false, actualUpset: true, result: "A" },
    { date: "2026-01-02", isCandidate: false, actualUpset: false, result: "H" },
    { date: "2026-01-03", isCandidate: true, actualUpset: false, directionKey: "D", result: "H" }
  ]);

  assert.strictEqual(summary.evaluatedDays, 3);
  assert.strictEqual(summary.candidateDays, 2);
  assert.strictEqual(summary.noCandidateDays, 1);
  assert.strictEqual(summary.daysWithCandidateHit, 1);
  assert.strictEqual(summary.daysWithDirectionHit, 1);
  assert.strictEqual(summary.maxCandidatesOnDay, 2);
  assert.strictEqual(summary.noCandidateUpsetRate, 50);
  assert.deepStrictEqual(summary.candidateCountDistribution, [
    { candidateCount: 0, days: 1 },
    { candidateCount: 1, days: 1 },
    { candidateCount: 2, days: 1 }
  ]);
});
