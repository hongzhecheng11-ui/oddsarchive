const assert = require("assert");
const collector = require("../scripts/collect-team-context.js");
const oddsCollector = require("../scripts/collect-api-odds.js");
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

test("collects standings and statistics only for teams playing on the target date", async () => {
  const fetcher = async (pathname) => {
    if (pathname.startsWith("/fixtures")) {
      return [
        { teams: { home: { id: 1, name: "Arsenal" }, away: { id: 2, name: "Chelsea" } } },
        { teams: { home: { id: 1, name: "Arsenal" }, away: { id: 2, name: "Chelsea" } } }
      ];
    }
    if (pathname.startsWith("/standings")) {
      return [{ league: { standings: [[
        { rank: 1, points: 10, goalsDiff: 5, form: "WWDWW", team: { id: 1, name: "Arsenal" }, all: { played: 4, win: 3, draw: 1, lose: 0, goals: { for: 9, against: 4 } }, home: { played: 2, win: 2, draw: 0, lose: 0, goals: { for: 5, against: 1 } }, away: { played: 2, win: 1, draw: 1, lose: 0, goals: { for: 4, against: 3 } } },
        { rank: 2, points: 8, goalsDiff: 3, form: "WDWLW", team: { id: 2, name: "Chelsea" }, all: { played: 4, win: 2, draw: 2, lose: 0, goals: { for: 7, against: 4 } }, home: { played: 2, win: 1, draw: 1, lose: 0, goals: { for: 4, against: 2 } }, away: { played: 2, win: 1, draw: 1, lose: 0, goals: { for: 3, against: 2 } } }
      ]] } }];
    }
    const teamId = Number(new URLSearchParams(pathname.split("?")[1]).get("team"));
    return [{
      team: { id: teamId, name: teamId === 1 ? "Arsenal" : "Chelsea" },
      form: "WWDWW",
      fixtures: { played: { home: 2, away: 2, total: 4 }, wins: { home: 2, away: 1, total: 3 }, draws: { home: 0, away: 1, total: 1 }, loses: { home: 0, away: 0, total: 0 } },
      goals: { for: { total: { home: 5, away: 4, total: 9 } }, against: { total: { home: 1, away: 3, total: 4 } } }
    }];
  };

  const context = await collector.collectLeagueContext({
    apiKey: "test-key",
    leagueKey: "EPL",
    leagueId: 39,
    date: "2026-07-14",
    fetcher
  });

  assert.strictEqual(context.teams.length, 2);
  assert.strictEqual(context.standings[0].rank, 1);
  assert.strictEqual(context.teams[0].all.goalsFor, 9);
});

test("preserves API object responses for team statistics without changing array callers", async () => {
  const fetcher = async () => ({
    ok: true,
    status: 200,
    json: async () => ({ errors: [], response: { team: { id: 1, name: "Arsenal" }, form: "WWDWW" } })
  });
  const response = await oddsCollector.fetchApiFootball("/teams/statistics", "test-key", {
    fetcher,
    attempts: 1,
    responseType: "object"
  });
  assert.strictEqual(response.team.id, 1);
});

test("normalizes fixture injuries and lineups without duplicate players", () => {
  const fixtures = collector.getFixtureSummaries([{
    fixture: { id: 101, date: "2026-07-14T19:00:00+09:00", status: { short: "NS" } },
    teams: { home: { id: 1, name: "Arsenal" }, away: { id: 2, name: "Chelsea" } }
  }]);
  const injuries = collector.normalizeInjuries([
    { fixture: { id: 101 }, team: { id: 1 }, player: { id: 9, name: "Player One", type: "Missing Fixture", reason: "Injury" } },
    { fixture: { id: 101 }, team: { id: 1 }, player: { id: 9, name: "Player One", type: "Missing Fixture", reason: "Injury" } }
  ]);
  const lineups = collector.normalizeLineups([{
    team: { id: 1, name: "Arsenal" },
    formation: "4-3-3",
    startXI: [{ player: { name: "Starter One" } }]
  }]);
  const lineupByFixture = new Map([[101, lineups]]);
  const attached = collector.attachFixtureIntel(fixtures, injuries, lineupByFixture, true);

  assert.strictEqual(injuries.length, 1);
  assert.strictEqual(attached[0].injuries.length, 1);
  assert.strictEqual(attached[0].lineups[0].formation, "4-3-3");
  assert.strictEqual(attached[0].lineups[0].starters.length, 1);
  assert.strictEqual(collector.shouldCollectLineup(fixtures[0], new Date("2026-07-14T16:00:00+09:00")), true);
  assert.strictEqual(collector.shouldCollectLineup(fixtures[0], new Date("2026-07-14T10:00:00+09:00")), false);
});

test("uses official context only for the pack date and falls back when stale", () => {
  globalThis.ODDS_ARCHIVE_TEAM_CONTEXT_PACK = {
    date: "2026-07-14",
    updatedAt: "2026-07-14T08:00:00.000Z",
    leagues: [{
      key: "EPL",
      standings: [{ teamId: 1, team: "Arsenal", rank: 1, all: { played: 10, wins: 8, draws: 1, losses: 1 }, home: { played: 5, wins: 5, draws: 0, losses: 0, goalsFor: 12, goalsAgainst: 2 }, away: { played: 5, wins: 3, draws: 1, losses: 1, goalsFor: 8, goalsAgainst: 5 } }],
      teams: [{ teamId: 1, team: "Arsenal", all: { played: 10, wins: 8, draws: 1, losses: 1, goalsFor: 20, goalsAgainst: 7 } }]
    }]
  };

  const current = app.getOfficialTeamContext({ date: "2026-07-14", league: "EPL" }, "Arsenal");
  const stale = app.getOfficialTeamContext({ date: "2026-07-15", league: "EPL" }, "Arsenal");
  assert.strictEqual(current.standing.rank, 1);
  assert.strictEqual(current.seasonProfile.avgGoalsFor, 2);
  assert.strictEqual(stale, null);
  delete globalThis.ODDS_ARCHIVE_TEAM_CONTEXT_PACK;
});

test("keeps future team context dates and selects the matching fixture date", () => {
  const merged = collector.mergeDateContexts({
    date: "2026-07-16",
    updatedAt: "2026-07-16T08:00:00.000Z",
    leagues: [{ key: "EPL", teams: [] }]
  }, [{
    date: "2026-07-17",
    updatedAt: "2026-07-16T09:00:00.000Z",
    leagues: [{ key: "UEL", teams: [{ team: "Derry City" }] }]
  }], "2026-07-16");

  assert.deepStrictEqual(collector.getCollectionDates("2026-07-16", 3), [
    "2026-07-16", "2026-07-17", "2026-07-18", "2026-07-19"
  ]);
  assert.strictEqual(merged.length, 2);
  assert.strictEqual(app.getTeamContextForDate({ dates: merged }, "2026-07-17").leagues[0].key, "UEL");
});

test("targets only leagues with stored odds on each requested date", () => {
  const targets = collector.getOddsTargetsByDate({ matches: [
    { date: "2026-07-16", league: "EPL" },
    { date: "2026-07-17", league: "UEL" },
    { date: "2026-07-17", league: "UNSUPPORTED" }
  ] }, ["2026-07-16", "2026-07-17"], ["EPL", "UEL"]);
  assert.deepStrictEqual([...targets.get("2026-07-16")], ["EPL"]);
  assert.deepStrictEqual([...targets.get("2026-07-17")], ["UEL"]);
});

test("matches fixture availability by fixture id and separates each team", () => {
  globalThis.ODDS_ARCHIVE_TEAM_CONTEXT_PACK = {
    date: "2026-07-14",
    updatedAt: "2026-07-14T08:00:00.000Z",
    leagues: [{
      key: "EPL",
      fixtures: [{
        fixtureId: 101,
        homeTeamId: 1,
        homeTeam: "Arsenal",
        awayTeamId: 2,
        awayTeam: "Chelsea",
        injuriesChecked: true,
        injuries: [{ fixtureId: 101, teamId: 1, playerId: 9, player: "Player One" }],
        lineupsChecked: true,
        lineups: [{ teamId: 1, team: "Arsenal", formation: "4-3-3", starters: ["Starter One"] }]
      }]
    }]
  };

  const fixture = app.getOfficialFixtureContext({ id: "101", date: "2026-07-14", league: "EPL", homeTeam: "Arsenal", awayTeam: "Chelsea" });
  const home = app.getFixtureTeamAvailability(fixture, "Arsenal");
  const away = app.getFixtureTeamAvailability(fixture, "Chelsea");
  assert.strictEqual(home.injuries.length, 1);
  assert.strictEqual(home.lineup.formation, "4-3-3");
  assert.strictEqual(away.injuries.length, 0);
  assert.strictEqual(away.lineup, null);
  delete globalThis.ODDS_ARCHIVE_TEAM_CONTEXT_PACK;
});
