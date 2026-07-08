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

test("calculates league breakdown stats for odds search results", () => {
  const stats = app.getLeagueBreakdownStats([
    { league: "EPL", result: "H" },
    { league: "EPL", result: "D" },
    { league: "EPL", result: "A" },
    { league: "LALIGA", result: "H" }
  ]);

  assert.strictEqual(stats[0].league, "EPL");
  assert.strictEqual(stats[0].breakdown.knownMatches, 3);
  assert.strictEqual(stats[0].breakdown.homeRate, "33.3%");
  assert(!Object.prototype.hasOwnProperty.call(stats[0], "sampleLabel"));
});

test("keeps recent known result flow in latest-first order", () => {
  const recent = app.getRecentKnownResults([
    { date: "2026-01-01", result: "H" },
    { date: "2026-01-03", result: "UNKNOWN" },
    { date: "2026-01-02", result: "A" },
    { date: "2026-01-04", result: "D" }
  ], 2);

  assert.deepStrictEqual(recent.map((match) => match.date), ["2026-01-04", "2026-01-02"]);
});
