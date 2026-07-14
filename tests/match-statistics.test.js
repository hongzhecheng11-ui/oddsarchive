const assert = require("assert");
const collector = require("../scripts/collect-match-statistics.js");
const app = require("../app.js");

function test(name, fn) {
  Promise.resolve().then(fn).then(() => {
    console.log(`PASS ${name}`);
  }).catch((error) => {
    console.error(`FAIL ${name}`);
    console.error(error);
    process.exitCode = 1;
  });
}

test("normalizes completed fixture performance statistics", () => {
  const fixture = collector.normalizeFinishedFixtures([{
    fixture: { id: 501, date: "2026-07-13T19:00:00+09:00", status: { short: "FT" } },
    teams: { home: { id: 1, name: "Arsenal" }, away: { id: 2, name: "Chelsea" } }
  }], "EPL", "2026-07-13")[0];
  const match = collector.createMatchStatistics(fixture, [
    { team: { id: 1, name: "Arsenal" }, statistics: [
      { type: "Total Shots", value: 14 },
      { type: "Shots on Goal", value: 6 },
      { type: "Ball Possession", value: "58%" },
      { type: "expected_goals", value: "1.72" }
    ] },
    { team: { id: 2, name: "Chelsea" }, statistics: [
      { type: "Total Shots", value: 9 },
      { type: "Shots on Goal", value: 3 },
      { type: "Ball Possession", value: "42%" },
      { type: "expected_goals", value: "0.81" }
    ] }
  ]);
  assert.strictEqual(match.home.shotsOnGoal, 6);
  assert.strictEqual(match.home.possession, 58);
  assert.strictEqual(match.away.expectedGoals, 0.81);
});

test("merges fixture statistics by id and removes old records", () => {
  const existing = [
    { fixtureId: 1, date: "2025-01-01", home: { shots: 1 } },
    { fixtureId: 2, date: "2026-07-12", home: { shots: 8 } }
  ];
  const incoming = [{ fixtureId: 2, date: "2026-07-12", home: { shots: 12 } }];
  const merged = collector.mergeMatchStatistics(existing, incoming, { today: "2026-07-14", maxDays: 180 });
  assert.strictEqual(merged.length, 1);
  assert.strictEqual(merged[0].home.shots, 12);
});

test("keeps historical lineup and injury context when performance statistics are absent", () => {
  const match = collector.createMatchStatistics({
    fixtureId: 1582681,
    date: "2026-07-12",
    league: "WORLDCUP",
    homeTeamId: 26,
    homeTeam: "Argentina",
    awayTeamId: 15,
    awayTeam: "Switzerland"
  }, [], {
    lineupsChecked: true,
    injuriesChecked: true,
    lineups: [{ teamId: 26, team: "Argentina", starters: ["Player One"] }],
    injuries: [{ fixtureId: 1582681, teamId: 26, player: "Player Two" }]
  });
  assert.strictEqual(match.home.shots, null);
  assert.strictEqual(match.lineups[0].starters[0], "Player One");
  assert.strictEqual(match.injuries[0].player, "Player Two");
});

test("finds historical player context in the cumulative statistics pack", () => {
  globalThis.ODDS_ARCHIVE_MATCH_STATISTICS_PACK = {
    updatedAt: "2026-07-14T08:00:00.000Z",
    matches: [{
      fixtureId: 1582681,
      date: "2026-07-12",
      homeTeamId: 26,
      homeTeam: "Argentina",
      awayTeamId: 15,
      awayTeam: "Switzerland",
      lineupsChecked: true,
      injuriesChecked: true,
      lineups: [{ teamId: 26, team: "Argentina", starters: ["Player One"] }],
      injuries: []
    }]
  };
  const context = app.getOfficialFixtureContext({
    id: "1582681",
    date: "2026-07-12",
    league: "WORLDCUP",
    homeTeam: "Argentina",
    awayTeam: "Switzerland"
  });
  assert.strictEqual(context.lineups[0].starters[0], "Player One");
  delete globalThis.ODDS_ARCHIVE_MATCH_STATISTICS_PACK;
});

test("builds a recent team performance profile without treating missing values as zero", () => {
  globalThis.ODDS_ARCHIVE_MATCH_STATISTICS_PACK = {
    updatedAt: "2026-07-14T08:00:00.000Z",
    matches: [
      { fixtureId: 1, date: "2026-07-12", homeTeam: "Arsenal", awayTeam: "Chelsea", home: { shots: 14, shotsOnGoal: 6, possession: 58, expectedGoals: 1.7 }, away: {} },
      { fixtureId: 2, date: "2026-07-10", homeTeam: "Liverpool", awayTeam: "Arsenal", home: {}, away: { shots: 10, shotsOnGoal: 4, possession: null, expectedGoals: 1.1 } }
    ]
  };
  const profile = app.getTeamPerformanceProfile("Arsenal", "2026-07-14", 5);
  assert.strictEqual(profile.matches, 2);
  assert.strictEqual(profile.avgShotsOnGoal, 5);
  assert.strictEqual(profile.avgPossession, 58);
  assert.strictEqual(profile.avgExpectedGoals, 1.4);
  delete globalThis.ODDS_ARCHIVE_MATCH_STATISTICS_PACK;
});
