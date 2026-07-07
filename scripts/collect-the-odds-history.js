const fs = require("fs");
const path = require("path");
const {
  mergeCollectedMatches,
  parseLocalEnv
} = require("./collect-api-odds.js");

const ROOT_DIR = path.resolve(__dirname, "..");
const PACK_PATH = path.join(ROOT_DIR, "data", "api-odds-pack.js");
const LOCAL_ENV_PATH = path.join(ROOT_DIR, ".env.local");
const WINDOWS_LOCAL_ENV_PATH = path.join(ROOT_DIR, ".env.local.txt");
const THE_ODDS_API_BASE = "https://api.the-odds-api.com/v4";
const API_FOOTBALL_BASE = "https://v3.football.api-sports.io";

const THE_ODDS_SPORT_KEYS = {
  EPL: "soccer_epl",
  LALIGA: "soccer_spain_la_liga",
  SERIEA: "soccer_italy_serie_a",
  BUNDESLIGA: "soccer_germany_bundesliga",
  LIGUE1: "soccer_france_ligue_one",
  UCL: "soccer_uefa_champs_league",
  UEL: "soccer_uefa_europa_league",
  KLEAGUE1: "soccer_korea_kleague1",
  J1LEAGUE: "soccer_japan_j_league",
  WORLDCUP: "soccer_fifa_world_cup"
};

const API_FOOTBALL_LEAGUE_IDS = {
  EPL: 39,
  LALIGA: 140,
  SERIEA: 135,
  BUNDESLIGA: 78,
  LIGUE1: 61,
  UCL: 2,
  UEL: 3,
  KLEAGUE1: 292,
  J1LEAGUE: 98,
  WORLDCUP: 1
};

const BOOKMAKER_PRIORITY = [
  "pinnacle",
  "bet365",
  "williamhill",
  "betfair_ex_uk",
  "unibet",
  "onexbet"
];

function loadLocalEnv(filePath = LOCAL_ENV_PATH) {
  if (!fs.existsSync(filePath)) return {};
  return parseLocalEnv(fs.readFileSync(filePath, "utf8"));
}

function getEnv() {
  return {
    ...loadLocalEnv(WINDOWS_LOCAL_ENV_PATH),
    ...loadLocalEnv(LOCAL_ENV_PATH),
    ...process.env
  };
}

function getArg(name, fallback = "") {
  const prefix = `--${name}=`;
  const found = process.argv.slice(2).find((arg) => arg.startsWith(prefix));
  return found ? found.slice(prefix.length) : fallback;
}

function hasFlag(name) {
  return process.argv.slice(2).includes(`--${name}`);
}

function normalizeName(value = "") {
  return String(value || "")
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/\b(fc|sc|cf|afc)\b/g, "")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

function formatDate(dateText = "") {
  return String(dateText || "").slice(0, 10);
}

function getResult(goals = {}) {
  const home = Number(goals.home);
  const away = Number(goals.away);
  if (!Number.isFinite(home) || !Number.isFinite(away)) return "UNKNOWN";
  if (home > away) return "H";
  if (home < away) return "A";
  return "D";
}

function getScore(goals = {}) {
  const home = Number(goals.home);
  const away = Number(goals.away);
  if (!Number.isFinite(home) || !Number.isFinite(away)) return "";
  return `${home}-${away}`;
}

function getSnapshotIso(commenceTime = "", hoursBefore = 24) {
  const date = new Date(commenceTime);
  if (Number.isNaN(date.getTime())) return "";
  date.setUTCHours(date.getUTCHours() - hoursBefore);
  return date.toISOString().replace(/\.\d{3}Z$/, "Z");
}

function parseHoursList(value = "", fallback = [24, 48, 12, 6]) {
  if (!String(value || "").trim()) return fallback;
  const parsed = String(value || "")
    .split(",")
    .map((item) => Math.max(1, Number(item.trim()) || 0))
    .filter(Boolean);
  return parsed.length > 0 ? parsed : fallback;
}

function toFixedOdd(value) {
  const number = Number(value);
  return Number.isFinite(number) && number > 1 ? number.toFixed(2) : "";
}

function getOutcomePrice(outcomes = [], name = "") {
  const target = normalizeName(name);
  const found = outcomes.find((outcome) => normalizeName(outcome.name) === target);
  return found ? Number(found.price) : NaN;
}

function getBookmakerOdds(bookmaker = {}, homeTeam = "", awayTeam = "") {
  const market = (bookmaker.markets || []).find((item) => item.key === "h2h");
  if (!market) return null;

  const home = getOutcomePrice(market.outcomes || [], homeTeam);
  const draw = getOutcomePrice(market.outcomes || [], "Draw");
  const away = getOutcomePrice(market.outcomes || [], awayTeam);
  if (![home, draw, away].every((value) => Number.isFinite(value) && value > 1)) return null;

  return { home, draw, away, bookmaker: bookmaker.key || "" };
}

function averageOdds(bookmakers = [], homeTeam = "", awayTeam = "") {
  const odds = bookmakers
    .map((bookmaker) => getBookmakerOdds(bookmaker, homeTeam, awayTeam))
    .filter(Boolean);
  if (odds.length === 0) return null;

  const sum = odds.reduce((total, item) => ({
    home: total.home + item.home,
    draw: total.draw + item.draw,
    away: total.away + item.away
  }), { home: 0, draw: 0, away: 0 });

  return {
    home: sum.home / odds.length,
    draw: sum.draw / odds.length,
    away: sum.away / odds.length,
    bookmaker: `average-${odds.length}`
  };
}

function pickOddsForEvent(event = {}, homeTeam = "", awayTeam = "") {
  for (const key of BOOKMAKER_PRIORITY) {
    const bookmaker = (event.bookmakers || []).find((item) => item.key === key);
    const odds = bookmaker ? getBookmakerOdds(bookmaker, homeTeam, awayTeam) : null;
    if (odds) return odds;
  }
  return averageOdds(event.bookmakers || [], homeTeam, awayTeam);
}

function findHistoricalEvent(events = [], fixture = {}) {
  const home = normalizeName(fixture.homeTeam);
  const away = normalizeName(fixture.awayTeam);
  return events.find((event) => (
    normalizeName(event.home_team) === home
    && normalizeName(event.away_team) === away
  ));
}

async function fetchJson(url, options = {}) {
  const response = await fetch(url, options);
  const payload = await response.json().catch(() => ({}));
  if (!response.ok) {
    const message = payload.message || payload.error_code || `HTTP ${response.status}`;
    throw new Error(message);
  }
  return { payload, response };
}

async function fetchApiFootballFixtures({ apiKey, leagueKey, season }) {
  const leagueId = API_FOOTBALL_LEAGUE_IDS[leagueKey];
  if (!leagueId) throw new Error(`Unsupported API-Football league: ${leagueKey}`);

  const url = `${API_FOOTBALL_BASE}/fixtures?league=${leagueId}&season=${season}`;
  const { payload } = await fetchJson(url, {
    headers: {
      "x-apisports-key": apiKey,
      "x-rapidapi-host": "v3.football.api-sports.io"
    }
  });

  return (payload.response || []).map((item) => ({
    date: formatDate(item.fixture?.date),
    commenceTime: item.fixture?.date || "",
    league: leagueKey,
    homeTeam: item.teams?.home?.name || "",
    awayTeam: item.teams?.away?.name || "",
    result: getResult(item.goals || {}),
    score: getScore(item.goals || {})
  })).filter((match) => match.date && match.homeTeam && match.awayTeam);
}

async function fetchHistoricalOdds({ apiKey, sportKey, snapshotIso }) {
  const params = new URLSearchParams({
    apiKey,
    regions: "eu",
    markets: "h2h",
    oddsFormat: "decimal",
    dateFormat: "iso",
    date: snapshotIso
  });
  const url = `${THE_ODDS_API_BASE}/historical/sports/${sportKey}/odds?${params.toString()}`;
  const { payload, response } = await fetchJson(url);
  return {
    events: Array.isArray(payload.data) ? payload.data : [],
    remaining: response.headers.get("x-requests-remaining"),
    used: response.headers.get("x-requests-used")
  };
}

async function findHistoricalOddsForFixture({ apiKey, sportKey, fixture, hoursList = [24, 48, 12, 6] }) {
  const attempts = [];

  for (const hoursBefore of hoursList) {
    const snapshotIso = getSnapshotIso(fixture.commenceTime, hoursBefore);
    if (!snapshotIso) continue;

    const { events, remaining, used } = await fetchHistoricalOdds({ apiKey, sportKey, snapshotIso });
    const event = findHistoricalEvent(events, fixture);
    const odds = event ? pickOddsForEvent(event, fixture.homeTeam, fixture.awayTeam) : null;
    attempts.push({ hoursBefore, snapshotIso, remaining, used, found: Boolean(event && odds) });
    if (event && odds) return { event, odds, attempts, remaining, used };
  }

  return { event: null, odds: null, attempts, remaining: attempts.at(-1)?.remaining, used: attempts.at(-1)?.used };
}

function buildMatchFromHistoricalEvent(fixture = {}, event = {}, odds = {}) {
  return {
    date: fixture.date,
    league: fixture.league,
    homeTeam: fixture.homeTeam,
    awayTeam: fixture.awayTeam,
    homeOdds: toFixedOdd(odds.home),
    drawOdds: toFixedOdd(odds.draw),
    awayOdds: toFixedOdd(odds.away),
    result: fixture.result || "UNKNOWN",
    score: fixture.score || "",
    source: `The Odds API ${odds.bookmaker || "historical"}`
  };
}

function loadExistingPack() {
  if (!fs.existsSync(PACK_PATH)) return { version: "api-odds-pack-v1", updatedAt: "", matches: [] };
  delete require.cache[require.resolve(PACK_PATH)];
  const pack = require(PACK_PATH);
  return {
    version: pack.version || "api-odds-pack-v1",
    updatedAt: pack.updatedAt || "",
    matches: Array.isArray(pack.matches) ? pack.matches : []
  };
}

function writePack(pack) {
  const content = `(function attachApiOddsPack(root, factory) {
  const pack = factory();
  if (typeof module !== "undefined" && module.exports) module.exports = pack;
  if (root) root.ODDS_ARCHIVE_API_ODDS_PACK = pack;
})(typeof window !== "undefined" ? window : globalThis, function createApiOddsPack() {
  return ${JSON.stringify(pack, null, 2)};
});
`;
  fs.writeFileSync(PACK_PATH, content, "utf8");
}

function saveCollectedMatches(collected = []) {
  if (!Array.isArray(collected) || collected.length === 0) {
    return { addedCount: 0, updatedCount: 0, duplicateCount: 0, matches: loadExistingPack().matches };
  }

  const existingPack = loadExistingPack();
  const mergeResult = mergeCollectedMatches(existingPack.matches, collected);
  writePack({
    version: existingPack.version || "api-odds-pack-v1",
    updatedAt: new Date().toISOString(),
    matches: mergeResult.matches
  });
  return mergeResult;
}

function getStoredFixtureKey(match = {}) {
  return [
    match.date,
    match.league,
    normalizeName(match.homeTeam),
    normalizeName(match.awayTeam)
  ].join("|");
}

function hasCompleteStoredOdds(match = {}) {
  return ["homeOdds", "drawOdds", "awayOdds"].every((field) => {
    const value = Number(match[field]);
    return Number.isFinite(value) && value > 1;
  });
}

function getExistingFixtureKeys(leagueKey = "") {
  return new Set(loadExistingPack().matches
    .filter((match) => !leagueKey || match.league === leagueKey)
    .filter(hasCompleteStoredOdds)
    .map(getStoredFixtureKey));
}

async function collectTheOddsHistory({
  leagueKey = "KLEAGUE1",
  season = "2025",
  sportKeyOverride = "",
  from = "",
  to = "",
  limit = 0,
  minRemaining = 100,
  hoursList = [24, 48, 12, 6],
  dryRun = false,
  logger = console
} = {}) {
  const env = getEnv();
  const theOddsKey = env.THE_ODDS_API_KEY || "";
  const apiFootballKey = env.API_FOOTBALL_KEY || env.API_SPORTS_KEY || "";
  const sportKey = sportKeyOverride || THE_ODDS_SPORT_KEYS[leagueKey];
  if (!theOddsKey) throw new Error("THE_ODDS_API_KEY is required.");
  if (!apiFootballKey) throw new Error("API_FOOTBALL_KEY is required.");
  if (!sportKey) throw new Error(`Unsupported The Odds API sport: ${leagueKey}`);

  const allFixtures = await fetchApiFootballFixtures({ apiKey: apiFootballKey, leagueKey, season });
  const filteredFixtures = allFixtures.filter((fixture) => (
    (!from || fixture.date >= from)
    && (!to || fixture.date <= to)
    && ["H", "D", "A"].includes(fixture.result)
  ));
  const existingFixtureKeys = getExistingFixtureKeys(leagueKey);
  const pendingFixtures = filteredFixtures.filter((fixture) => !existingFixtureKeys.has(getStoredFixtureKey(fixture)));
  const fixtures = limit > 0 ? pendingFixtures.slice(0, limit) : pendingFixtures;
  const collected = [];
  let missCount = 0;
  const skippedExistingCount = filteredFixtures.length - pendingFixtures.length;
  let addedCount = 0;
  let updatedCount = 0;
  let duplicateCount = 0;

  for (const fixture of fixtures) {
    const { event, odds, attempts, remaining, used } = await findHistoricalOddsForFixture({
      apiKey: theOddsKey,
      sportKey,
      fixture,
      hoursList
    });
    if (event && odds) {
      const match = buildMatchFromHistoricalEvent(fixture, event, odds);
      collected.push(match);
      if (!dryRun) {
        const mergeResult = saveCollectedMatches([match]);
        addedCount += mergeResult.addedCount || 0;
        updatedCount += mergeResult.updatedCount || 0;
        duplicateCount += mergeResult.duplicateCount || 0;
      }
      const attempt = attempts.find((item) => item.found);
      logger.log(`${fixture.date} ${fixture.homeTeam} vs ${fixture.awayTeam} 저장 후보(${attempt?.hoursBefore || "?"}h) / remaining=${remaining || "-"} used=${used || "-"}`);
    } else {
      missCount += 1;
      logger.log(`${fixture.date} ${fixture.homeTeam} vs ${fixture.awayTeam} 배당 없음 / remaining=${remaining || "-"} used=${used || "-"}`);
    }

    const remainingNumber = Number(remaining);
    if (Number.isFinite(remainingNumber) && remainingNumber <= minRemaining) {
      logger.log(`remaining=${remainingNumber}: 안전 기준 ${minRemaining} 이하라서 수집을 중단합니다.`);
      break;
    }
  }

  if (dryRun || collected.length === 0) {
    return {
      collected,
      addedCount: 0,
      updatedCount: 0,
      duplicateCount: 0,
      fixtureCount: fixtures.length,
      skippedExistingCount,
      missCount
    };
  }

  return {
    addedCount,
    updatedCount,
    duplicateCount,
    collected,
    fixtureCount: fixtures.length,
    skippedExistingCount,
    missCount
  };
}

async function main() {
  const leagueKey = String(getArg("league", "KLEAGUE1")).toUpperCase();
  const season = String(getArg("season", "2025"));
  const sportKeyOverride = getArg("sport-key");
  const from = getArg("from");
  const to = getArg("to");
  const limit = Math.max(0, Number(getArg("limit", "0")) || 0);
  const minRemaining = Math.max(0, Number(getArg("min-remaining", "100")) || 0);
  const hoursList = parseHoursList(getArg("hours", getArg("hours-before", "")));
  const dryRun = hasFlag("dry-run");
  const result = await collectTheOddsHistory({ leagueKey, season, sportKeyOverride, from, to, limit, minRemaining, hoursList, dryRun });

  console.log(`the-odds history: fixtures=${result.fixtureCount} collected=${result.collected.length} missing=${result.missCount}`);
  if (result.skippedExistingCount) console.log(`skipped existing: ${result.skippedExistingCount}`);
  console.log(`merge: added=${result.addedCount} updated=${result.updatedCount} duplicate=${result.duplicateCount}`);
  if (dryRun) console.log("dry-run: 데이터팩을 변경하지 않았습니다.");
}

if (require.main === module) {
  main().catch((error) => {
    console.error(error.message || error);
    process.exitCode = 1;
  });
}

module.exports = {
  averageOdds,
  buildMatchFromHistoricalEvent,
  collectTheOddsHistory,
  findHistoricalOddsForFixture,
  findHistoricalEvent,
  getBookmakerOdds,
  getSnapshotIso,
  normalizeName,
  parseHoursList,
  pickOddsForEvent
};
