const fs = require("fs");
const path = require("path");
const {
  fetchApiFootball,
  getApiKey,
  getLeagueIds,
  getSeason
} = require("./collect-api-odds.js");
const {
  DEFAULT_LEAGUES,
  getSeoulDate,
  normalizeInjuries,
  normalizeLineups
} = require("./collect-team-context.js");

const ROOT_DIR = path.resolve(__dirname, "..");
const PACK_PATH = path.join(ROOT_DIR, "data", "match-statistics-pack.js");
const ODDS_PACK_PATH = path.join(ROOT_DIR, "data", "api-odds-pack.js");
const FINISHED_STATUSES = new Set(["FT", "AET", "PEN"]);

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function getArg(name, fallback = "") {
  const prefix = `--${name}=`;
  const found = process.argv.slice(2).find((arg) => arg.startsWith(prefix));
  return found ? found.slice(prefix.length) : fallback;
}

function getPreviousSeoulDate(now = new Date()) {
  const today = getSeoulDate(now);
  const date = new Date(`${today}T00:00:00Z`);
  date.setUTCDate(date.getUTCDate() - 1);
  return date.toISOString().slice(0, 10);
}

function getPreviousSeoulDates(now = new Date(), pastDays = 1) {
  const today = getSeoulDate(now);
  const base = new Date(`${today}T00:00:00Z`);
  const count = Math.max(1, Math.min(Number(pastDays) || 1, 7));
  return Array.from({ length: count }, (_, index) => {
    const date = new Date(base);
    date.setUTCDate(date.getUTCDate() - index - 1);
    return date.toISOString().slice(0, 10);
  });
}

function loadPack(packPath, fallback) {
  try {
    delete require.cache[require.resolve(packPath)];
    return require(packPath);
  } catch (_) {
    return fallback;
  }
}

function normalizeTeamKey(value = "") {
  return String(value || "").trim().toLowerCase().replace(/[^a-z0-9]+/g, "");
}

function getOddsTargetsByLeagueDate(oddsPack = {}, dates = [], allowedLeagues = []) {
  const dateSet = new Set(dates);
  const leagueSet = new Set(allowedLeagues);
  const targets = new Map();
  for (const match of Array.isArray(oddsPack.matches) ? oddsPack.matches : []) {
    const date = String(match.date || "").slice(0, 10);
    const league = String(match.league || "").trim().toUpperCase();
    if (!dateSet.has(date) || !league || (leagueSet.size && !leagueSet.has(league))) continue;
    const key = `${date}|${league}`;
    if (!targets.has(key)) targets.set(key, []);
    targets.get(key).push(match);
  }
  return targets;
}

function fixtureMatchesTarget(fixture = {}, targets = []) {
  return targets.some((target) => (
    (fixture.fixtureId && target.fixtureId && String(fixture.fixtureId) === String(target.fixtureId))
    || (
      normalizeTeamKey(fixture.homeTeam) === normalizeTeamKey(target.homeTeam)
      && normalizeTeamKey(fixture.awayTeam) === normalizeTeamKey(target.awayTeam)
    )
  ));
}

function hasCompleteMatchStatistics(match = {}) {
  return Boolean(match.statisticsChecked && match.lineupsChecked && match.injuriesChecked);
}

function parseStatisticValue(value) {
  if (value === null || value === undefined || value === "") return null;
  const parsed = Number(String(value).replace("%", "").trim());
  return Number.isFinite(parsed) ? parsed : null;
}

function normalizeTeamStatistics(item = {}) {
  const statistics = new Map((Array.isArray(item.statistics) ? item.statistics : []).map((entry) => (
    [String(entry.type || "").trim().toLowerCase(), parseStatisticValue(entry.value)]
  )));
  const read = (...names) => {
    for (const name of names) {
      const value = statistics.get(name.toLowerCase());
      if (value !== null && value !== undefined) return value;
    }
    return null;
  };
  return {
    teamId: Number(item.team?.id || 0),
    team: String(item.team?.name || "").trim(),
    shots: read("Total Shots"),
    shotsOnGoal: read("Shots on Goal"),
    possession: read("Ball Possession"),
    corners: read("Corner Kicks"),
    yellowCards: read("Yellow Cards"),
    redCards: read("Red Cards"),
    expectedGoals: read("expected_goals", "Expected Goals")
  };
}

function normalizeFinishedFixtures(payload = [], leagueKey = "", date = "") {
  return (Array.isArray(payload) ? payload : []).filter((item) => (
    FINISHED_STATUSES.has(String(item.fixture?.status?.short || "").toUpperCase())
  )).map((item) => ({
    fixtureId: Number(item.fixture?.id || 0),
    date: getSeoulDate(new Date(item.fixture?.date || `${date}T00:00:00Z`)),
    league: leagueKey,
    homeTeamId: Number(item.teams?.home?.id || 0),
    homeTeam: String(item.teams?.home?.name || "").trim(),
    awayTeamId: Number(item.teams?.away?.id || 0),
    awayTeam: String(item.teams?.away?.name || "").trim()
  })).filter((item) => item.fixtureId && item.homeTeam && item.awayTeam);
}

function createEmptyTeamStatistics(teamId = 0, team = "") {
  return {
    teamId: Number(teamId || 0),
    team: String(team || "").trim(),
    shots: null,
    shotsOnGoal: null,
    possession: null,
    corners: null,
    yellowCards: null,
    redCards: null,
    expectedGoals: null
  };
}

function createMatchStatistics(fixture = {}, payload = [], extra = {}) {
  const teams = (Array.isArray(payload) ? payload : []).map(normalizeTeamStatistics);
  const home = teams.find((team) => team.teamId === fixture.homeTeamId)
    || createEmptyTeamStatistics(fixture.homeTeamId, fixture.homeTeam);
  const away = teams.find((team) => team.teamId === fixture.awayTeamId)
    || createEmptyTeamStatistics(fixture.awayTeamId, fixture.awayTeam);
  return { ...fixture, home, away, ...extra };
}

function mergeMatchStatistics(existing = [], incoming = [], { today = getSeoulDate(), maxDays = 180, maxMatches = 3000 } = {}) {
  const cutoff = new Date(`${today}T00:00:00Z`);
  cutoff.setUTCDate(cutoff.getUTCDate() - maxDays);
  const cutoffText = cutoff.toISOString().slice(0, 10);
  const byFixture = new Map();
  [...existing, ...incoming].forEach((match) => {
    const fixtureId = String(match.fixtureId || "").trim();
    if (!fixtureId || String(match.date || "") < cutoffText) return;
    byFixture.set(fixtureId, match);
  });
  return [...byFixture.values()]
    .sort((left, right) => String(right.date).localeCompare(String(left.date)))
    .slice(0, maxMatches);
}

function loadExistingPack() {
  try {
    delete require.cache[require.resolve(PACK_PATH)];
    return require(PACK_PATH);
  } catch (_) {
    return { matches: [] };
  }
}

function serializePack(pack) {
  return `(function attachMatchStatisticsPack(root, factory) {
  const pack = factory();
  if (typeof module !== "undefined" && module.exports) module.exports = pack;
  if (root) root.ODDS_ARCHIVE_MATCH_STATISTICS_PACK = pack;
})(typeof window !== "undefined" ? window : globalThis, function createMatchStatisticsPack() {
  return ${JSON.stringify(pack, null, 2)};
});
`;
}

async function collectLeagueStatistics({ apiKey, leagueKey, leagueId, date, fetcher = fetchApiFootball, targets, existingByFixture = new Map() }) {
  const season = getSeason(date, leagueKey);
  let fixtures = normalizeFinishedFixtures(
    await fetcher(`/fixtures?league=${leagueId}&season=${season}&date=${date}&timezone=Asia%2FSeoul`, apiKey),
    leagueKey,
    date
  );
  if (Array.isArray(targets)) fixtures = fixtures.filter((fixture) => fixtureMatchesTarget(fixture, targets));
  const targetFixtureCount = fixtures.length;
  fixtures = fixtures.filter((fixture) => !hasCompleteMatchStatistics(existingByFixture.get(String(fixture.fixtureId))));
  const matches = [];
  const failures = [];
  for (const fixture of fixtures) {
    let statistics = [];
    let lineups = [];
    let injuries = [];
    let statisticsChecked = false;
    let lineupsChecked = false;
    let injuriesChecked = false;
    try {
      statistics = await fetcher(`/fixtures/statistics?fixture=${fixture.fixtureId}`, apiKey);
      statisticsChecked = true;
    } catch (error) {
      failures.push(`${leagueKey} fixture ${fixture.fixtureId} statistics: ${error.message}`);
    }
    await wait(120);
    try {
      lineups = normalizeLineups(await fetcher(`/fixtures/lineups?fixture=${fixture.fixtureId}`, apiKey));
      lineupsChecked = true;
    } catch (error) {
      failures.push(`${leagueKey} fixture ${fixture.fixtureId} lineups: ${error.message}`);
    }
    await wait(120);
    try {
      injuries = normalizeInjuries(await fetcher(`/injuries?fixture=${fixture.fixtureId}`, apiKey));
      injuriesChecked = true;
    } catch (error) {
      failures.push(`${leagueKey} fixture ${fixture.fixtureId} injuries: ${error.message}`);
    }
    matches.push(createMatchStatistics(fixture, statistics, {
      statisticsChecked,
      lineupsChecked,
      injuriesChecked,
      lineups,
      injuries
    }));
    await wait(120);
  }
  return { matches, failures, fixtureCount: targetFixtureCount, skippedComplete: targetFixtureCount - fixtures.length };
}

async function main() {
  const apiKey = getApiKey();
  if (!apiKey) throw new Error("API_FOOTBALL_KEY is required");
  const requestedDate = String(getArg("date", "")).slice(0, 10);
  const dates = requestedDate
    ? [requestedDate]
    : getPreviousSeoulDates(new Date(), getArg("past-days", "1"));
  const leagueKeys = String(getArg("leagues", DEFAULT_LEAGUES.join(",")))
    .split(",")
    .map((value) => value.trim().toUpperCase())
    .filter(Boolean);
  const collected = [];
  const errors = [];
  let requestGroups = 0;
  let finishedFixtures = 0;
  let skippedComplete = 0;
  let skippedGroups = 0;
  const existingPack = loadExistingPack();
  const existingByFixture = new Map((existingPack.matches || []).map((match) => [String(match.fixtureId || ""), match]));
  const oddsPack = loadPack(ODDS_PACK_PATH, { matches: [] });
  const targetsByLeagueDate = getOddsTargetsByLeagueDate(oddsPack, dates, leagueKeys);

  for (const date of dates) {
    for (const leagueKey of leagueKeys) {
      const targets = targetsByLeagueDate.get(`${date}|${leagueKey}`) || [];
      if (targets.length === 0) {
        skippedGroups += getLeagueIds(leagueKey).length;
        continue;
      }
      for (const leagueId of getLeagueIds(leagueKey)) {
        try {
          const result = await collectLeagueStatistics({ apiKey, leagueKey, leagueId, date, targets, existingByFixture });
          requestGroups += 1;
          finishedFixtures += result.fixtureCount;
          skippedComplete += result.skippedComplete;
          collected.push(...result.matches);
          errors.push(...result.failures);
        } catch (error) {
          errors.push(`${date} ${leagueKey}(${leagueId}): ${error.message}`);
        }
        await wait(180);
      }
    }
  }

  if (requestGroups === 0 && errors.length > 0) throw new Error(`All match statistics requests failed (${errors.length})`);
  const matches = mergeMatchStatistics(existingPack.matches, collected);
  const pack = {
    version: "match-statistics-v1",
    updatedAt: new Date().toISOString(),
    collection: { dates, requestGroups, skippedGroups, finishedFixtures, skippedComplete, saved: collected.length, failures: errors.length, errors: errors.slice(0, 30) },
    matches
  };
  fs.writeFileSync(PACK_PATH, serializePack(pack), "utf8");
  console.log(`match statistics saved: dates=${dates.length} finished=${finishedFixtures} saved=${collected.length} cached=${skippedComplete} skipped=${skippedGroups} total=${matches.length} failures=${errors.length}`);
}

if (require.main === module) {
  main().catch((error) => {
    console.error(error.message || error);
    process.exitCode = 1;
  });
}

module.exports = {
  collectLeagueStatistics,
  createEmptyTeamStatistics,
  createMatchStatistics,
  fixtureMatchesTarget,
  getOddsTargetsByLeagueDate,
  getPreviousSeoulDate,
  getPreviousSeoulDates,
  hasCompleteMatchStatistics,
  mergeMatchStatistics,
  normalizeFinishedFixtures,
  normalizeTeamStatistics,
  parseStatisticValue,
  serializePack
};
