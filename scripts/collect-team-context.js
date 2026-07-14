const fs = require("fs");
const path = require("path");
const {
  fetchApiFootball,
  getApiKey,
  getLeagueIds,
  getSeason
} = require("./collect-api-odds.js");

const ROOT_DIR = path.resolve(__dirname, "..");
const PACK_PATH = path.join(ROOT_DIR, "data", "team-context-pack.js");
const DEFAULT_LEAGUES = [
  "EPL", "CHAMPIONSHIP", "LALIGA", "SERIEA", "BUNDESLIGA", "LIGUE1",
  "EREDIVISIE", "PRIMEIRA_LIGA", "SCOTTISH_PREMIERSHIP", "BELGIAN_PRO_LEAGUE",
  "SUPER_LIG", "UCL", "UEL", "WORLDCUP", "WCQ", "KLEAGUE1", "KLEAGUE2",
  "J1LEAGUE", "J2LEAGUE", "ACL", "INTL_FRIENDLIES"
];

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function getArg(name, fallback = "") {
  const prefix = `--${name}=`;
  const found = process.argv.slice(2).find((arg) => arg.startsWith(prefix));
  return found ? found.slice(prefix.length) : fallback;
}

function getSeoulDate(now = new Date()) {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Seoul",
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  }).format(now);
}

function normalizeRecord(record = {}) {
  return {
    played: Number(record.played || 0),
    wins: Number(record.win || record.wins || 0),
    draws: Number(record.draw || record.draws || 0),
    losses: Number(record.lose || record.losses || 0),
    goalsFor: Number(record.goals?.for ?? record.goalsFor ?? 0),
    goalsAgainst: Number(record.goals?.against ?? record.goalsAgainst ?? 0)
  };
}

function normalizeStandings(payload = []) {
  const groups = payload?.[0]?.league?.standings || [];
  return groups.flat().map((row) => ({
    teamId: Number(row.team?.id || 0),
    team: String(row.team?.name || "").trim(),
    rank: Number(row.rank || 0),
    points: Number(row.points || 0),
    goalsDiff: Number(row.goalsDiff || 0),
    form: String(row.form || "").trim(),
    all: normalizeRecord(row.all),
    home: normalizeRecord(row.home),
    away: normalizeRecord(row.away)
  })).filter((row) => row.teamId && row.team);
}

function normalizeTeamStatistics(payload = {}, fallback = {}) {
  const fixtures = payload.fixtures || {};
  const goalsFor = payload.goals?.for?.total || {};
  const goalsAgainst = payload.goals?.against?.total || {};
  const createRecord = (side) => ({
    played: Number(fixtures.played?.[side] || 0),
    wins: Number(fixtures.wins?.[side] || 0),
    draws: Number(fixtures.draws?.[side] || 0),
    losses: Number(fixtures.loses?.[side] || 0),
    goalsFor: Number(goalsFor?.[side] || 0),
    goalsAgainst: Number(goalsAgainst?.[side] || 0)
  });
  return {
    teamId: Number(payload.team?.id || fallback.teamId || 0),
    team: String(payload.team?.name || fallback.team || "").trim(),
    form: String(payload.form || "").trim(),
    all: createRecord("total"),
    home: createRecord("home"),
    away: createRecord("away")
  };
}

function getFixtureTeams(payload = []) {
  const teams = new Map();
  for (const item of Array.isArray(payload) ? payload : []) {
    [item.teams?.home, item.teams?.away].forEach((team) => {
      const teamId = Number(team?.id || 0);
      const name = String(team?.name || "").trim();
      if (teamId && name) teams.set(teamId, { teamId, team: name });
    });
  }
  return [...teams.values()];
}

function getFixtureSummaries(payload = []) {
  return (Array.isArray(payload) ? payload : []).map((item) => ({
    fixtureId: Number(item.fixture?.id || 0),
    kickoff: String(item.fixture?.date || "").trim(),
    status: String(item.fixture?.status?.short || item.fixture?.status?.long || "").trim(),
    homeTeamId: Number(item.teams?.home?.id || 0),
    homeTeam: String(item.teams?.home?.name || "").trim(),
    awayTeamId: Number(item.teams?.away?.id || 0),
    awayTeam: String(item.teams?.away?.name || "").trim()
  })).filter((fixture) => fixture.fixtureId && fixture.homeTeamId && fixture.awayTeamId);
}

function normalizeInjuries(payload = []) {
  const seen = new Set();
  return (Array.isArray(payload) ? payload : []).map((item) => ({
    fixtureId: Number(item.fixture?.id || 0),
    teamId: Number(item.team?.id || 0),
    playerId: Number(item.player?.id || 0),
    player: String(item.player?.name || "").trim(),
    type: String(item.player?.type || "").trim(),
    reason: String(item.player?.reason || "").trim()
  })).filter((item) => {
    if (!item.fixtureId || !item.teamId || !item.player) return false;
    const key = `${item.fixtureId}|${item.teamId}|${item.playerId || item.player}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function normalizeLineups(payload = []) {
  return (Array.isArray(payload) ? payload : []).map((item) => ({
    teamId: Number(item.team?.id || 0),
    team: String(item.team?.name || "").trim(),
    formation: String(item.formation || "").trim(),
    coach: String(item.coach?.name || "").trim(),
    starters: (Array.isArray(item.startXI) ? item.startXI : [])
      .map((entry) => String(entry.player?.name || "").trim())
      .filter(Boolean)
  })).filter((item) => item.teamId && item.team);
}

function shouldCollectLineup(fixture = {}, now = new Date(), windowHours = 4) {
  const kickoff = new Date(fixture.kickoff).getTime();
  const current = now.getTime();
  if (!Number.isFinite(kickoff) || !Number.isFinite(current)) return false;
  const differenceHours = (kickoff - current) / 3600000;
  return differenceHours <= windowHours && differenceHours >= -6;
}

function attachFixtureIntel(fixtures = [], injuries = [], lineupByFixture = new Map(), injuriesChecked = false) {
  return fixtures.map((fixture) => ({
    ...fixture,
    injuriesChecked,
    injuries: injuries.filter((item) => item.fixtureId === fixture.fixtureId),
    lineupsChecked: lineupByFixture.has(fixture.fixtureId),
    lineups: lineupByFixture.get(fixture.fixtureId) || []
  }));
}

function serializePack(pack) {
  return `(function attachTeamContextPack(root, factory) {
  const pack = factory();
  if (typeof module !== "undefined" && module.exports) module.exports = pack;
  if (root) root.ODDS_ARCHIVE_TEAM_CONTEXT_PACK = pack;
})(typeof window !== "undefined" ? window : globalThis, function createTeamContextPack() {
  return ${JSON.stringify(pack, null, 2)};
});
`;
}

async function collectLeagueContext({ apiKey, leagueKey, leagueId, date, fetcher = fetchApiFootball, now = new Date() }) {
  const season = getSeason(date, leagueKey);
  const timezone = encodeURIComponent("Asia/Seoul");
  const fixtures = await fetcher(`/fixtures?league=${leagueId}&season=${season}&date=${date}&timezone=${timezone}`, apiKey);
  const fixtureTeams = getFixtureTeams(fixtures);
  if (fixtureTeams.length === 0) return null;
  const fixtureSummaries = getFixtureSummaries(fixtures);

  let standings = [];
  try {
    standings = normalizeStandings(await fetcher(`/standings?league=${leagueId}&season=${season}`, apiKey));
  } catch (error) {
    console.warn(`${leagueKey} standings unavailable: ${error.message}`);
  }

  const teams = [];
  for (const fixtureTeam of fixtureTeams) {
    try {
      const response = await fetcher(
        `/teams/statistics?league=${leagueId}&season=${season}&team=${fixtureTeam.teamId}&date=${date}`,
        apiKey,
        { responseType: "object" }
      );
      teams.push(normalizeTeamStatistics(Array.isArray(response) ? response[0] : response, fixtureTeam));
    } catch (error) {
      console.warn(`${leagueKey} team ${fixtureTeam.teamId} statistics unavailable: ${error.message}`);
      teams.push(normalizeTeamStatistics({}, fixtureTeam));
    }
    await wait(120);
  }

  let injuries = [];
  let injuriesChecked = false;
  try {
    injuries = normalizeInjuries(await fetcher(`/injuries?league=${leagueId}&season=${season}&date=${date}`, apiKey));
    injuriesChecked = true;
  } catch (error) {
    console.warn(`${leagueKey} injuries unavailable: ${error.message}`);
  }

  const lineupByFixture = new Map();
  for (const fixture of fixtureSummaries.filter((item) => shouldCollectLineup(item, now))) {
    try {
      const lineups = normalizeLineups(await fetcher(`/fixtures/lineups?fixture=${fixture.fixtureId}`, apiKey));
      lineupByFixture.set(fixture.fixtureId, lineups);
    } catch (error) {
      console.warn(`${leagueKey} fixture ${fixture.fixtureId} lineups unavailable: ${error.message}`);
    }
    await wait(120);
  }

  return {
    key: leagueKey,
    leagueId,
    season,
    standings,
    teams,
    fixtures: attachFixtureIntel(fixtureSummaries, injuries, lineupByFixture, injuriesChecked)
  };
}

async function main() {
  const apiKey = getApiKey();
  if (!apiKey) throw new Error("API_FOOTBALL_KEY is required");
  const date = String(getArg("date", getSeoulDate())).slice(0, 10);
  const leagueKeys = String(getArg("leagues", DEFAULT_LEAGUES.join(",")))
    .split(",")
    .map((value) => value.trim().toUpperCase())
    .filter(Boolean);
  const leagues = [];
  const errors = [];
  let requestGroups = 0;

  for (const leagueKey of leagueKeys) {
    for (const leagueId of getLeagueIds(leagueKey)) {
      try {
        const context = await collectLeagueContext({ apiKey, leagueKey, leagueId, date });
        requestGroups += 1;
        if (context) leagues.push(context);
      } catch (error) {
        errors.push(`${leagueKey}(${leagueId}): ${error.message}`);
        console.warn(errors[errors.length - 1]);
      }
      await wait(180);
    }
  }

  if (requestGroups === 0 && errors.length > 0) throw new Error(`All team context requests failed (${errors.length})`);
  const pack = {
    version: "team-context-v2",
    date,
    updatedAt: new Date().toISOString(),
    collection: { requestGroups, failures: errors.length, errors: errors.slice(0, 30) },
    leagues
  };
  fs.writeFileSync(PACK_PATH, serializePack(pack), "utf8");
  console.log(`team context saved: date=${date} leagues=${leagues.length} teams=${leagues.reduce((sum, league) => sum + league.teams.length, 0)} failures=${errors.length}`);
}

if (require.main === module) {
  main().catch((error) => {
    console.error(error.message || error);
    process.exitCode = 1;
  });
}

module.exports = {
  DEFAULT_LEAGUES,
  attachFixtureIntel,
  collectLeagueContext,
  getFixtureSummaries,
  getFixtureTeams,
  getSeoulDate,
  normalizeInjuries,
  normalizeLineups,
  normalizeRecord,
  normalizeStandings,
  normalizeTeamStatistics,
  serializePack,
  shouldCollectLineup
};
