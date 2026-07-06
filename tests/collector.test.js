const assert = require("assert");
const collector = require("../scripts/collect-api-odds.js");

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

test("merges collected matches without duplicating the same odds row", () => {
  const existing = [
    {
      date: "2026-07-01",
      league: "WORLDCUP",
      homeTeam: "Mexico",
      awayTeam: "Ecuador",
      homeOdds: "2.20",
      drawOdds: "2.78",
      awayOdds: "3.90",
      result: "UNKNOWN",
      score: "",
      source: "API 과거 배당"
    }
  ];
  const collected = [
    {
      ...existing[0],
      result: "A",
      score: "0-1"
    }
  ];

  const result = collector.mergeCollectedMatches(existing, collected);

  assert.strictEqual(result.matches.length, 1);
  assert.strictEqual(result.addedCount, 0);
  assert.strictEqual(result.updatedCount, 1);
  assert.strictEqual(result.duplicateCount, 0);
  assert.strictEqual(result.matches[0].result, "A");
  assert.strictEqual(result.matches[0].score, "0-1");
});

test("keeps a new complete odds row and reports pack quality", () => {
  const result = collector.mergeCollectedMatches([], [
    {
      date: "2026-07-02",
      league: "EPL",
      homeTeam: "Arsenal",
      awayTeam: "Chelsea",
      homeOdds: "1.90",
      drawOdds: "3.40",
      awayOdds: "4.20",
      result: "H",
      score: "2-0",
      source: "API 과거 배당"
    }
  ]);
  const quality = collector.getPackQualitySummary(result.matches);

  assert.strictEqual(result.addedCount, 1);
  assert.strictEqual(result.updatedCount, 0);
  assert.strictEqual(quality.total, 1);
  assert.strictEqual(quality.completeOdds, 1);
  assert.strictEqual(quality.knownResults, 1);
  assert.deepStrictEqual(quality.leagues, { EPL: 1 });
});

test("reads API key from local env text without exposing it in code", () => {
  const env = collector.parseLocalEnv("API_FOOTBALL_KEY=test_secret_key\nOTHER=value\n");

  assert.strictEqual(env.API_FOOTBALL_KEY, "test_secret_key");
  assert.strictEqual(env.OTHER, "value");
});

test("builds a date window around today for automatic collection", () => {
  const originalArgv = process.argv;
  process.argv = ["node", "collect-api-odds.js", "--date=2026-07-06", "--past-days=2", "--future-days=2"];

  try {
    assert.deepStrictEqual(collector.getDateRange(), [
      "2026-07-04",
      "2026-07-05",
      "2026-07-06",
      "2026-07-07",
      "2026-07-08"
    ]);
  } finally {
    process.argv = originalArgv;
  }
});

test("uses calendar year for Asian and international leagues", () => {
  assert.strictEqual(collector.getSeason("2026-03-01", "KLEAGUE1"), "2026");
  assert.strictEqual(collector.getSeason("2026-03-01", "J1LEAGUE"), "2026");
  assert.strictEqual(collector.getSeason("2026-03-01", "ACL"), "2026");
  assert.strictEqual(collector.getSeason("2026-03-01", "UCL"), "2025");
});

test("keeps unfinished fixtures as unknown results", () => {
  const match = collector.normalizeFixture({
    fixture: { id: 1, date: "2026-07-11T10:00:00+00:00" },
    teams: { home: { name: "FC Seoul" }, away: { name: "Gangwon FC" } },
    goals: { home: null, away: null }
  }, "KLEAGUE1", "2026-07-11");

  assert.strictEqual(match.result, "UNKNOWN");
  assert.strictEqual(match.score, "");
});
