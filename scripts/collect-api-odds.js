const fs = require("fs");
const path = require("path");

const API_HOST = "v3.football.api-sports.io";
const ROOT_DIR = path.resolve(__dirname, "..");
const PACK_PATH = path.join(ROOT_DIR, "data", "api-odds-pack.js");
const LOCAL_ENV_PATH = path.join(ROOT_DIR, ".env.local");
const WINDOWS_LOCAL_ENV_PATH = path.join(ROOT_DIR, ".env.local.txt");

const LEAGUE_IDS = {
  EPL: 39,
  LALIGA: 140,
  SERIEA: 135,
  BUNDESLIGA: 78,
  LIGUE1: 61,
  WORLDCUP: 1,
  UCL: 2,
  UEL: 3,
  KLEAGUE1: 292,
  J1LEAGUE: 98,
  ACL: 17,
  WCQ: [29, 30, 31, 32, 33, 34],
  INTL_FRIENDLIES: 10
};

const CALENDAR_YEAR_LEAGUES = new Set(["WORLDCUP", "WCQ", "INTL_FRIENDLIES"]);

function parseLocalEnv(text = "") {
  return String(text || "").split(/\r?\n/).reduce((values, line) => {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) return values;
    const index = trimmed.indexOf("=");
    if (index === -1) return values;
    const key = trimmed.slice(0, index).trim();
    const rawValue = trimmed.slice(index + 1).trim();
    if (!key) return values;
    values[key] = rawValue.replace(/^['"]|['"]$/g, "");
    return values;
  }, {});
}

function loadLocalEnv(filePath = LOCAL_ENV_PATH) {
  if (!fs.existsSync(filePath)) return {};
  return parseLocalEnv(fs.readFileSync(filePath, "utf8"));
}

function getApiKey() {
  const localEnv = {
    ...loadLocalEnv(WINDOWS_LOCAL_ENV_PATH),
    ...loadLocalEnv(LOCAL_ENV_PATH)
  };
  return process.env.API_FOOTBALL_KEY || process.env.API_SPORTS_KEY || localEnv.API_FOOTBALL_KEY || localEnv.API_SPORTS_KEY || "";
}

function getArg(name, fallback = "") {
  const prefix = `--${name}=`;
  const found = process.argv.slice(2).find((arg) => arg.startsWith(prefix));
  return found ? found.slice(prefix.length) : process.env[name.toUpperCase()] || fallback;
}

function getSeason(dateText, leagueKey = "") {
  const date = new Date(`${dateText}T00:00:00Z`);
  if (Number.isNaN(date.getTime())) return String(new Date().getUTCFullYear());
  const year = date.getUTCFullYear();
  if (CALENDAR_YEAR_LEAGUES.has(leagueKey)) return String(year);
  const month = date.getUTCMonth() + 1;
  return String(month < 7 ? year - 1 : year);
}

function getDateRange() {
  const fromArg = getArg("from");
  const toArg = getArg("to");
  if (fromArg && toArg) {
    const from = new Date(`${fromArg.slice(0, 10)}T00:00:00Z`);
    const to = new Date(`${toArg.slice(0, 10)}T00:00:00Z`);
    if (Number.isNaN(from.getTime()) || Number.isNaN(to.getTime()) || from > to) {
      throw new Error("FROM/TO 날짜를 YYYY-MM-DD 형식으로 올바르게 넣어주세요.");
    }

    const dates = [];
    for (const date = new Date(from); date <= to; date.setUTCDate(date.getUTCDate() + 1)) {
      dates.push(date.toISOString().slice(0, 10));
    }
    return dates;
  }

  const pastDaysArg = getArg("past-days");
  const futureDaysArg = getArg("future-days");
  if (pastDaysArg || futureDaysArg) {
    const pastDays = Math.max(0, Math.min(Number(pastDaysArg || "0") || 0, 30));
    const futureDays = Math.max(0, Math.min(Number(futureDaysArg || "0") || 0, 30));
    const baseText = getArg("date") || new Date().toISOString().slice(0, 10);
    const base = new Date(`${baseText.slice(0, 10)}T00:00:00Z`);
    const safeBase = Number.isNaN(base.getTime()) ? new Date() : base;
    const dates = [];

    for (let offset = -pastDays; offset <= futureDays; offset += 1) {
      const date = new Date(safeBase);
      date.setUTCDate(safeBase.getUTCDate() + offset);
      dates.push(date.toISOString().slice(0, 10));
    }

    return dates;
  }

  const days = Math.max(1, Math.min(Number(getArg("days", "7")) || 7, 60));
  const endText = getArg("date") || getArg("to") || new Date().toISOString().slice(0, 10);
  const end = new Date(`${endText.slice(0, 10)}T00:00:00Z`);
  const safeEnd = Number.isNaN(end.getTime()) ? new Date() : end;
  return Array.from({ length: days }, (_, index) => {
    const date = new Date(safeEnd);
    date.setUTCDate(safeEnd.getUTCDate() - (days - 1 - index));
    return date.toISOString().slice(0, 10);
  });
}

function getLeagueIds(leagueKey) {
  const value = LEAGUE_IDS[leagueKey];
  return Array.isArray(value) ? value : [value].filter(Boolean);
}

function getOutcomeOdd(values, names) {
  const normalizedNames = names.map((name) => String(name).toLowerCase());
  const matched = values.find((value) => normalizedNames.includes(String(value.value || value.name || "").toLowerCase()));
  return matched ? String(valueToOdd(matched)).trim() : "";
}

function valueToOdd(value) {
  return value.odd || value.price || "";
}

function getMatchWinnerBet(bookmakers = []) {
  for (const bookmaker of bookmakers) {
    const bet = (bookmaker.bets || []).find((item) => {
      const name = String(item.name || item.label || "").toLowerCase();
      return item.id === 1 || name.includes("match winner") || name.includes("1x2");
    });
    if (bet?.values?.length) return bet;
  }
  return null;
}

function getSeoulDate(dateText) {
  if (!dateText) return "";
  const date = new Date(dateText);
  if (Number.isNaN(date.getTime())) return String(dateText).slice(0, 10);
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Seoul",
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  }).format(date);
}

function normalizeFixture(item = {}, leagueKey, dateText) {
  const fixture = item.fixture || {};
  const teams = item.teams || {};
  const goals = item.goals || {};
  const hasScore = goals.home !== null && goals.home !== undefined && goals.away !== null && goals.away !== undefined;
  const homeGoals = hasScore ? Number(goals.home) : NaN;
  const awayGoals = hasScore ? Number(goals.away) : NaN;
  const hasValidScore = hasScore && Number.isFinite(homeGoals) && Number.isFinite(awayGoals);

  return {
    fixtureId: fixture.id || "",
    date: getSeoulDate(fixture.date || dateText),
    league: leagueKey,
    homeTeam: teams.home?.name || "",
    awayTeam: teams.away?.name || "",
    result: hasValidScore ? (homeGoals > awayGoals ? "H" : homeGoals < awayGoals ? "A" : "D") : "UNKNOWN",
    score: hasValidScore ? `${homeGoals}-${awayGoals}` : ""
  };
}

function normalizeOdds(item = {}, leagueKey, dateText) {
  const fixture = item.fixture || {};
  const teams = item.teams || {};
  const homeTeam = teams.home?.name || "";
  const awayTeam = teams.away?.name || "";
  const bet = getMatchWinnerBet(item.bookmakers || []);
  const values = bet?.values || [];

  return {
    fixtureId: fixture.id || "",
    date: getSeoulDate(fixture.date || dateText),
    league: leagueKey,
    homeTeam,
    awayTeam,
    homeOdds: getOutcomeOdd(values, ["Home", homeTeam]),
    drawOdds: getOutcomeOdd(values, ["Draw"]),
    awayOdds: getOutcomeOdd(values, ["Away", awayTeam])
  };
}

async function fetchApiFootball(pathname, apiKey) {
  const response = await fetch(`https://${API_HOST}${pathname}`, {
    headers: {
      "x-apisports-key": apiKey,
      "x-rapidapi-host": API_HOST
    }
  });
  const payload = await response.json().catch(() => ({}));
  const errors = payload.errors && typeof payload.errors === "object" ? Object.values(payload.errors).filter(Boolean) : [];
  if (!response.ok || errors.length > 0) {
    throw new Error(payload.message || errors.join(" / ") || `API-Football response ${response.status}`);
  }
  return Array.isArray(payload.response) ? payload.response : [];
}

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function collectLeagueDate({ apiKey, leagueKey, leagueId, date }) {
  const season = getSeason(date, leagueKey);
  const [fixturesRaw, oddsRaw] = await Promise.all([
    fetchApiFootball(`/fixtures?league=${leagueId}&season=${season}&date=${encodeURIComponent(date)}`, apiKey),
    fetchApiFootball(`/odds?league=${leagueId}&season=${season}&date=${encodeURIComponent(date)}&bet=1`, apiKey)
  ]);
  const fixtures = fixturesRaw.map((item) => normalizeFixture(item, leagueKey, date));
  const odds = oddsRaw.map((item) => normalizeOdds(item, leagueKey, date));
  const fixturesById = new Map(fixtures.filter((match) => match.fixtureId).map((match) => [String(match.fixtureId), match]));

  return odds.map((odd) => {
    const fixture = fixturesById.get(String(odd.fixtureId)) || {};
    return {
      date: odd.date || fixture.date || date,
      league: odd.league || fixture.league || leagueKey,
      homeTeam: odd.homeTeam || fixture.homeTeam || "",
      awayTeam: odd.awayTeam || fixture.awayTeam || "",
      homeOdds: odd.homeOdds,
      drawOdds: odd.drawOdds,
      awayOdds: odd.awayOdds,
      result: fixture.result || "UNKNOWN",
      score: fixture.score || "",
      source: "API 과거 배당"
    };
  }).filter((match) => (
    match.date && match.league && match.homeTeam && match.awayTeam
    && match.homeOdds && match.drawOdds && match.awayOdds
  ));
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

function getDuplicateKey(match) {
  return [
    match.date,
    match.league,
    match.homeTeam,
    match.awayTeam,
    Number(match.homeOdds).toFixed(2),
    Number(match.drawOdds).toFixed(2),
    Number(match.awayOdds).toFixed(2)
  ].join("|");
}

function hasKnownResult(match = {}) {
  return ["H", "D", "A"].includes(String(match.result || "").toUpperCase());
}

function hasCompleteOdds(match = {}) {
  return ["homeOdds", "drawOdds", "awayOdds"].every((field) => {
    const value = Number(match[field]);
    return Number.isFinite(value) && value >= 1;
  });
}

function normalizePackMatch(match = {}) {
  return {
    date: String(match.date || "").slice(0, 10),
    league: String(match.league || "").trim(),
    homeTeam: String(match.homeTeam || "").trim(),
    awayTeam: String(match.awayTeam || "").trim(),
    homeOdds: String(match.homeOdds || "").trim(),
    drawOdds: String(match.drawOdds || "").trim(),
    awayOdds: String(match.awayOdds || "").trim(),
    result: String(match.result || "UNKNOWN").trim().toUpperCase() || "UNKNOWN",
    score: String(match.score || "").trim(),
    source: match.source || "API 과거 배당"
  };
}

function shouldReplaceMatch(existing = {}, incoming = {}) {
  if (!hasKnownResult(existing) && hasKnownResult(incoming)) return true;
  if (!existing.score && incoming.score) return true;
  if (!hasCompleteOdds(existing) && hasCompleteOdds(incoming)) return true;
  return false;
}

function mergeCollectedMatches(existingMatches = [], collectedMatches = []) {
  const byKey = new Map();
  let addedCount = 0;
  let updatedCount = 0;
  let duplicateCount = 0;

  for (const match of existingMatches) {
    const normalized = normalizePackMatch(match);
    const key = getDuplicateKey(normalized);
    if (!key.includes("NaN")) byKey.set(key, normalized);
  }

  for (const match of collectedMatches) {
    const normalized = normalizePackMatch(match);
    const key = getDuplicateKey(normalized);
    if (key.includes("NaN")) continue;

    const existing = byKey.get(key);
    if (!existing) {
      byKey.set(key, normalized);
      addedCount += 1;
      continue;
    }

    if (shouldReplaceMatch(existing, normalized)) {
      byKey.set(key, { ...existing, ...normalized });
      updatedCount += 1;
    } else {
      duplicateCount += 1;
    }
  }

  return {
    matches: Array.from(byKey.values()).sort((a, b) => (
      String(a.date).localeCompare(String(b.date))
      || String(a.league).localeCompare(String(b.league))
      || String(a.homeTeam).localeCompare(String(b.homeTeam))
    )),
    addedCount,
    updatedCount,
    duplicateCount
  };
}

function getPackQualitySummary(matches = []) {
  const safeMatches = Array.isArray(matches) ? matches : [];
  const leagues = {};
  for (const match of safeMatches) {
    const league = String(match.league || "UNKNOWN").trim() || "UNKNOWN";
    leagues[league] = (leagues[league] || 0) + 1;
  }

  return {
    total: safeMatches.length,
    completeOdds: safeMatches.filter(hasCompleteOdds).length,
    knownResults: safeMatches.filter(hasKnownResult).length,
    unknownResults: safeMatches.filter((match) => !hasKnownResult(match)).length,
    leagues
  };
}

function writePack(pack) {
  const json = JSON.stringify(pack, null, 2);
  const content = `(function attachApiOddsPack(root, factory) {
  const pack = factory();
  if (typeof module !== "undefined" && module.exports) module.exports = pack;
  if (root) root.ODDS_ARCHIVE_API_ODDS_PACK = pack;
})(typeof window !== "undefined" ? window : globalThis, function createApiOddsPack() {
  return ${json};
});
`;
  fs.writeFileSync(PACK_PATH, content, "utf8");
}

async function main() {
  const apiKey = getApiKey();
  if (!apiKey) throw new Error("API_FOOTBALL_KEY가 필요합니다. .env.local 파일에 API_FOOTBALL_KEY=키값 형식으로 저장해주세요.");

  const leagueKeys = String(getArg("leagues", "EPL"))
    .split(",")
    .map((value) => value.trim().toUpperCase())
    .filter(Boolean);
  const dates = getDateRange();
  const existingPack = loadExistingPack();
  const collected = [];

  for (const leagueKey of leagueKeys) {
    const leagueIds = getLeagueIds(leagueKey);
    if (leagueIds.length === 0) {
      console.warn(`지원하지 않는 리그라 건너뜁니다: ${leagueKey}`);
      continue;
    }

    for (const date of dates) {
      for (const leagueId of leagueIds) {
        try {
          const rows = await collectLeagueDate({ apiKey, leagueKey, leagueId, date });
          collected.push(...rows);
          console.log(`${date} ${leagueKey}(${leagueId}) ${rows.length}건`);
        } catch (error) {
          console.warn(`${date} ${leagueKey}(${leagueId}) 실패: ${error.message}`);
        }
        await wait(250);
      }
    }
  }

  if (collected.length === 0) {
    console.log("수집된 배당이 없어 데이터팩을 변경하지 않았습니다.");
    return;
  }

  const mergeResult = mergeCollectedMatches(existingPack.matches, collected);
  const quality = getPackQualitySummary(mergeResult.matches);

  const nextPack = {
    version: "api-odds-pack-v1",
    updatedAt: new Date().toISOString(),
    matches: mergeResult.matches
  };
  writePack(nextPack);
  console.log(`merge: collected=${collected.length} added=${mergeResult.addedCount} updated=${mergeResult.updatedCount} duplicate=${mergeResult.duplicateCount}`);
  console.log(`quality: total=${quality.total} completeOdds=${quality.completeOdds} knownResults=${quality.knownResults} unknownResults=${quality.unknownResults}`);
  console.log(`저장 완료: ${path.relative(ROOT_DIR, PACK_PATH)} / 신규 ${collected.length}건 / 전체 ${nextPack.matches.length}건`);
}

if (require.main === module) {
  main().catch((error) => {
    console.error(error.message || error);
    process.exitCode = 1;
  });
}

module.exports = {
  getDateRange,
  getSeason,
  getApiKey,
  getPackQualitySummary,
  mergeCollectedMatches,
  parseLocalEnv,
  normalizeFixture,
  normalizeOdds,
  collectLeagueDate
};
