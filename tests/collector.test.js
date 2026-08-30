const assert = require("assert");
const fs = require("fs");
const path = require("path");
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
  assert.strictEqual(Object.hasOwn(result.matches[0], "oddsUpdatedAt"), false);
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

test("builds a short result update window for stored unfinished matches", () => {
  const originalArgv = process.argv;
  process.argv = ["node", "collect-api-odds.js", "--date=2026-07-06", "--result-days=3"];

  try {
    assert.deepStrictEqual(collector.getResultUpdateDates(), [
      "2026-07-03",
      "2026-07-04",
      "2026-07-05",
      "2026-07-06"
    ]);
  } finally {
    process.argv = originalArgv;
  }
});

test("updates the same fixture when future odds change instead of duplicating it", () => {
  const existing = [
    {
      date: "2026-07-10",
      league: "KLEAGUE1",
      fixtureId: "777",
      homeTeam: "FC Seoul",
      awayTeam: "Gangwon FC",
      homeOdds: "1.88",
      drawOdds: "3.25",
      awayOdds: "4.10",
      result: "UNKNOWN",
      score: "",
      oddsUpdatedAt: "2026-07-07T00:00:00.000Z",
      source: "API 怨쇨굅 諛곕떦"
    }
  ];
  const collected = [
    {
      ...existing[0],
      homeOdds: "1.82",
      drawOdds: "3.30",
      awayOdds: "4.30",
      oddsUpdatedAt: "2026-07-08T00:00:00.000Z"
    }
  ];

  const result = collector.mergeCollectedMatches(existing, collected);

  assert.strictEqual(result.matches.length, 1);
  assert.strictEqual(result.addedCount, 0);
  assert.strictEqual(result.updatedCount, 1);
  assert.strictEqual(result.duplicateCount, 0);
  assert.strictEqual(result.matches[0].homeOdds, "1.82");
  assert.strictEqual(result.matches[0].oddsHistory.length, 2);
  assert.strictEqual(result.matches[0].oddsHistory[0].homeOdds, "1.88");
  assert.strictEqual(result.matches[0].oddsHistory[1].homeOdds, "1.82");
});

test("does not add duplicate odds history snapshots when odds are unchanged", () => {
  const existing = [{
    date: "2026-07-10",
    league: "KLEAGUE1",
    fixtureId: "778",
    homeTeam: "FC Seoul",
    awayTeam: "Gangwon FC",
    homeOdds: "1.88",
    drawOdds: "3.25",
    awayOdds: "4.10",
    result: "UNKNOWN",
    oddsUpdatedAt: "2026-07-07T00:00:00.000Z"
  }];
  const collected = [{ ...existing[0], oddsUpdatedAt: "2026-07-08T00:00:00.000Z" }];
  const result = collector.mergeCollectedMatches(existing, collected);

  assert.strictEqual(result.matches.length, 1);
  assert.strictEqual(result.matches[0].oddsHistory.length, 1);
  assert.strictEqual(result.duplicateCount, 1);
});

test("runs daily upcoming collection separately from lightweight closing-odds refreshes", () => {
  const packageJson = require("../package.json");
  const workflow = fs.readFileSync(path.join(__dirname, "..", ".github", "workflows", "collect-api-odds.yml"), "utf8");
  const closingCommand = packageJson.scripts["collect:api-odds:closing"];

  assert.match(closingCommand, /--future-days=0/);
  assert.match(closingCommand, /--result-days=1/);
  assert.match(workflow, /10 8 \* \* \*/);
  assert.match(workflow, /10 18 \* \* \*/);
  assert.match(workflow, /npm run collect:api-odds:auto/);
  assert.match(workflow, /npm run collect:api-odds:closing/);
  assert.match(workflow, /npm run collect:team-context:upcoming/);
  assert.match(workflow, /concurrency:[\s\S]*cancel-in-progress: false/);
});

test("uses calendar year for Asian and international leagues", () => {
  assert.strictEqual(collector.getSeason("2026-03-01", "KLEAGUE1"), "2026");
  assert.strictEqual(collector.getSeason("2026-03-01", "KLEAGUE2"), "2026");
  assert.strictEqual(collector.getSeason("2026-03-01", "J1LEAGUE"), "2026");
  assert.strictEqual(collector.getSeason("2026-03-01", "J2LEAGUE"), "2026");
  assert.strictEqual(collector.getSeason("2026-03-01", "ACL"), "2026");
  assert.strictEqual(collector.getSeason("2026-03-01", "CHAMPIONSHIP"), "2025");
  assert.strictEqual(collector.getSeason("2026-03-01", "EREDIVISIE"), "2025");
  assert.strictEqual(collector.getSeason("2026-03-01", "PRIMEIRA_LIGA"), "2025");
  assert.strictEqual(collector.getSeason("2026-03-01", "SCOTTISH_PREMIERSHIP"), "2025");
  assert.strictEqual(collector.getSeason("2026-03-01", "BELGIAN_PRO_LEAGUE"), "2025");
  assert.strictEqual(collector.getSeason("2026-03-01", "SUPER_LIG"), "2025");
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

test("reads the real result once a fixture is actually finished (FT)", () => {
  const match = collector.normalizeFixture({
    fixture: { id: 2, date: "2026-08-30T01:30:00+09:00", status: { short: "FT" } },
    teams: { home: { name: "Tottenham" }, away: { name: "Newcastle" } },
    goals: { home: 2, away: 1 }
  }, "EPL", "2026-08-30");

  assert.strictEqual(match.result, "H");
  assert.strictEqual(match.score, "2-1");
});

test("does not mistake a live in-progress snapshot for the final result", () => {
  // 실제로 재현된 버그: API가 킥오프 직후 goals 를 0-0(null 아님)으로 주면서도
  // 상태는 아직 "1H"(전반 진행 중)인 경우, 득점 유무만 보면 이걸 최종 0-0 무승부로
  // 잘못 기록했었다. 상태가 FT/AET/PEN 이 아니면 goals 가 있어도 UNKNOWN 이어야 한다.
  const midMatch = collector.normalizeFixture({
    fixture: { id: 3, date: "2026-08-30T01:30:00+09:00", status: { short: "1H" } },
    teams: { home: { name: "Tottenham" }, away: { name: "Newcastle" } },
    goals: { home: 0, away: 0 }
  }, "EPL", "2026-08-30");
  assert.strictEqual(midMatch.result, "UNKNOWN");
  assert.strictEqual(midMatch.score, "");

  const notStarted = collector.normalizeFixture({
    fixture: { id: 4, date: "2026-08-30T01:30:00+09:00", status: { short: "NS" } },
    teams: { home: { name: "Tottenham" }, away: { name: "Newcastle" } },
    goals: { home: 0, away: 0 }
  }, "EPL", "2026-08-30");
  assert.strictEqual(notStarted.result, "UNKNOWN");
  assert.strictEqual(notStarted.score, "");
});

test("retries only temporary API response failures", () => {
  assert.strictEqual(collector.isRetryableApiStatus(429), true);
  assert.strictEqual(collector.isRetryableApiStatus(500), true);
  assert.strictEqual(collector.isRetryableApiStatus(503), true);
  assert.strictEqual(collector.isRetryableApiStatus(400), false);
  assert.strictEqual(collector.isRetryableApiStatus(401), false);
});
