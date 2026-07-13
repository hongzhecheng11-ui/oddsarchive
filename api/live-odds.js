const API_HOST = "v3.football.api-sports.io";

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
  KLEAGUE2: 293,
  J1LEAGUE: 98,
  J2LEAGUE: 99,
  CHAMPIONSHIP: 40,
  ACL: 17,
  WCQ: [29, 30, 31, 32, 33, 34],
  INTL_FRIENDLIES: 10
};
const CALENDAR_YEAR_LEAGUES = new Set([
  "WORLDCUP",
  "WCQ",
  "INTL_FRIENDLIES",
  "KLEAGUE1",
  "KLEAGUE2",
  "J1LEAGUE",
  "J2LEAGUE",
  "ACL"
]);

function getLeagueKeyByApiLeague(league = {}) {
  const leagueId = Number(league.id || 0);
  if (!leagueId) return "";

  return Object.entries(LEAGUE_IDS).find(([, value]) => (
    (Array.isArray(value) ? value : [value]).map(Number).includes(leagueId)
  ))?.[0] || "";
}

function sendJson(response, statusCode, body) {
  response.statusCode = statusCode;
  response.setHeader("content-type", "application/json; charset=utf-8");
  response.setHeader("cache-control", "no-store, max-age=0");
  response.end(JSON.stringify(body));
}

function getBearerToken(request = {}) {
  const authorization = String(request.headers?.authorization || "").trim();
  return authorization.toLowerCase().startsWith("bearer ") ? authorization.slice(7).trim() : "";
}

async function verifyAdminRequest(request, fetchImpl = fetch) {
  const token = getBearerToken(request);
  const supabaseUrl = String(process.env.SUPABASE_URL || "").trim().replace(/\/$/, "");
  const publishableKey = String(process.env.SUPABASE_PUBLISHABLE_KEY || "").trim();
  if (!token) return { allowed: false, status: 401, error: "Login required" };
  if (!supabaseUrl || !publishableKey) return { allowed: false, status: 503, error: "Admin authorization unavailable" };

  const headers = { apikey: publishableKey, Authorization: `Bearer ${token}`, Accept: "application/json" };
  try {
    const userResponse = await fetchImpl(`${supabaseUrl}/auth/v1/user`, { headers });
    const user = await userResponse.json().catch(() => ({}));
    if (!userResponse.ok || !user?.id) return { allowed: false, status: 401, error: "Invalid session" };

    const adminResponse = await fetchImpl(
      `${supabaseUrl}/rest/v1/app_admins?select=user_id&user_id=eq.${encodeURIComponent(user.id)}`,
      { headers }
    );
    const rows = await adminResponse.json().catch(() => []);
    if (!adminResponse.ok || !Array.isArray(rows) || rows.length === 0) {
      return { allowed: false, status: 403, error: "Admin access required" };
    }
    return { allowed: true, status: 200, userId: user.id };
  } catch (_error) {
    return { allowed: false, status: 503, error: "Admin authorization unavailable" };
  }
}

function getSeason(dateText, leagueKey = "") {
  const date = new Date(`${dateText}T00:00:00Z`);
  if (Number.isNaN(date.getTime())) return String(new Date().getUTCFullYear());
  const year = date.getUTCFullYear();
  if (CALENDAR_YEAR_LEAGUES.has(leagueKey)) return String(year);
  const month = date.getUTCMonth() + 1;
  return String(month < 7 ? year - 1 : year);
}

function getOutcomeOdd(values, names) {
  const normalizedNames = names.map((name) => String(name).toLowerCase());
  const matched = values.find((value) => normalizedNames.includes(String(value.value || value.name || "").toLowerCase()));
  return matched ? String(matched.odd || matched.price || "") : "";
}

function getSeoulDateTimeParts(dateText) {
  if (!dateText) return { date: "", time: "" };
  const date = new Date(dateText);
  if (Number.isNaN(date.getTime())) return { date: String(dateText).slice(0, 10), time: String(dateText).slice(11, 16) };
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Seoul",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23"
  }).formatToParts(date).reduce((values, part) => {
    if (part.type !== "literal") values[part.type] = part.value;
    return values;
  }, {});
  return {
    date: `${parts.year}-${parts.month}-${parts.day}`,
    time: `${parts.hour}:${parts.minute}`
  };
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

function normalizeOddsItem(item, leagueKey, dateText) {
  const fixture = item.fixture || {};
  const seoulDateTime = getSeoulDateTimeParts(fixture.date || dateText);
  const teams = item.teams || {};
  const homeTeam = teams.home?.name || item.homeTeam || "";
  const awayTeam = teams.away?.name || item.awayTeam || "";
  const bet = getMatchWinnerBet(item.bookmakers || []);
  const values = bet?.values || [];

  return {
    id: fixture.id ? `api-football-${fixture.id}` : `api-football-${leagueKey}-${dateText}-${homeTeam}-${awayTeam}`,
    fixtureId: fixture.id || "",
    date: seoulDateTime.date || String(fixture.date || dateText).slice(0, 10),
    league: leagueKey,
    homeTeam,
    awayTeam,
    startTime: seoulDateTime.time,
    status: fixture.status?.short || fixture.status?.long || "",
    homeOdds: getOutcomeOdd(values, ["Home", homeTeam]),
    drawOdds: getOutcomeOdd(values, ["Draw"]),
    awayOdds: getOutcomeOdd(values, ["Away", awayTeam]),
    // TODO: Some API odds rows omit their actual update time; keep the fetch-time fallback in the UI.
    updatedAt: item.update || item.updatedAt || "",
    source: "API-Football"
  };
}

function normalizeFixtureItem(item, leagueKey, dateText) {
  const fixture = item.fixture || {};
  const seoulDateTime = getSeoulDateTimeParts(fixture.date || dateText);
  const teams = item.teams || {};
  const league = item.league || {};
  const goals = item.goals || {};
  const scoreText = Number.isFinite(goals.home) && Number.isFinite(goals.away) ? `${goals.home}-${goals.away}` : "";
  const result = Number.isFinite(goals.home) && Number.isFinite(goals.away)
    ? goals.home > goals.away ? "H" : goals.home < goals.away ? "A" : "D"
    : "UNKNOWN";
  const matchedLeagueKey = getLeagueKeyByApiLeague(league);
  const leagueLabel = leagueKey === "GLOBAL"
    ? matchedLeagueKey || league.name || "GLOBAL"
    : leagueKey;

  return {
    id: fixture.id ? `api-football-${fixture.id}` : `api-football-fixture-${leagueKey}-${dateText}-${teams.home?.name || ""}-${teams.away?.name || ""}`,
    fixtureId: fixture.id || "",
    date: seoulDateTime.date || String(fixture.date || dateText).slice(0, 10),
    league: leagueLabel,
    homeTeam: teams.home?.name || "",
    awayTeam: teams.away?.name || "",
    startTime: seoulDateTime.time,
    status: fixture.status?.short || fixture.status?.long || "",
    homeOdds: "",
    drawOdds: "",
    awayOdds: "",
    result,
    score: scoreText,
    source: "API-Football Fixtures"
  };
}

async function fetchApiFootball(path, apiKey) {
  const response = await fetch(`https://${API_HOST}${path}`, {
    headers: {
      "x-apisports-key": apiKey,
      "x-rapidapi-host": API_HOST
    }
  });
  const payload = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(payload.message || payload.errors?.token || `API-Football 응답 오류 ${response.status}`);
  }
  return payload;
}

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function getLeagueIds(leagueKey) {
  const value = LEAGUE_IDS[leagueKey];
  return Array.isArray(value) ? value : [value];
}

function getDateRange(endDateText, days = 7) {
  const endDate = new Date(`${String(endDateText || "").slice(0, 10)}T00:00:00Z`);
  const safeEndDate = Number.isNaN(endDate.getTime()) ? new Date() : endDate;
  const safeDays = Math.max(1, Math.min(Number(days || 7), 14));
  return Array.from({ length: safeDays }, (_, index) => {
    const date = new Date(safeEndDate);
    date.setUTCDate(safeEndDate.getUTCDate() - index);
    return date.toISOString().slice(0, 10);
  });
}

async function loadLeagueOdds({ date, leagueKey, leagueId, apiKey }) {
  const season = getSeason(date, leagueKey);
  const path = `/odds?league=${leagueId}&season=${season}&date=${encodeURIComponent(date)}&bet=1`;
  const payload = await fetchApiFootball(path, apiKey);
  const rows = Array.isArray(payload.response) ? payload.response : [];
  return rows.map((item) => normalizeOddsItem(item, leagueKey, date));
}

async function loadFixtureOdds({ fixtureId, leagueKey, date, apiKey }) {
  if (!fixtureId) return [];
  const path = `/odds?fixture=${encodeURIComponent(fixtureId)}&bet=1`;
  const payload = await fetchApiFootball(path, apiKey);
  const rows = Array.isArray(payload.response) ? payload.response : [];
  return rows.map((item) => normalizeOddsItem(item, leagueKey, date));
}

async function loadLeagueFixtures({ date, leagueKey, leagueId, apiKey }) {
  const season = getSeason(date, leagueKey);
  const path = `/fixtures?league=${leagueId}&season=${season}&date=${encodeURIComponent(date)}`;
  const payload = await fetchApiFootball(path, apiKey);
  const rows = Array.isArray(payload.response) ? payload.response : [];
  return rows.map((item) => normalizeFixtureItem(item, leagueKey, date));
}

function isWorldCupFixture(item = {}) {
  const league = item.league || {};
  const name = String(league.name || "").toLowerCase();
  return name === "world cup";
}

function isSupportedFixture(item = {}) {
  const league = item.league || {};
  return Boolean(getLeagueKeyByApiLeague(league));
}

async function loadGlobalFixtures({ date, apiKey, filter } = {}) {
  const path = `/fixtures?date=${encodeURIComponent(date)}`;
  let payload = await fetchApiFootball(path, apiKey);
  let rows = Array.isArray(payload.response) ? payload.response : [];
  if (rows.length === 0) {
    await wait(700);
    payload = await fetchApiFootball(path, apiKey);
    rows = Array.isArray(payload.response) ? payload.response : [];
  }
  const filteredRows = typeof filter === "function" ? rows.filter(filter) : rows;
  return filteredRows.slice(0, 80).map((item) => normalizeFixtureItem(item, "GLOBAL", date));
}

async function loadOddsForFixtures({ fixtures, leagueKey, date, apiKey }) {
  const limitedFixtures = fixtures.filter((match) => match.fixtureId).slice(0, 12);
  const results = await Promise.all(limitedFixtures.map((match) => (
    loadFixtureOdds({ fixtureId: match.fixtureId, leagueKey, date, apiKey }).catch(() => [])
  )));
  return results.flat();
}

function mergeFixturesWithOdds(fixtures, odds) {
  const oddsByFixtureId = new Map(odds.filter((match) => match.fixtureId).map((match) => [String(match.fixtureId), match]));
  const merged = fixtures.map((fixture) => {
    const odd = oddsByFixtureId.get(String(fixture.fixtureId));
    return odd ? {
      ...fixture,
      id: odd.id || fixture.id,
      fixtureId: odd.fixtureId || fixture.fixtureId,
      date: odd.date || fixture.date,
      league: fixture.league || odd.league,
      homeTeam: odd.homeTeam || fixture.homeTeam,
      awayTeam: odd.awayTeam || fixture.awayTeam,
      startTime: fixture.startTime || odd.startTime || "",
      status: fixture.status || odd.status || "",
      homeOdds: odd.homeOdds || "",
      drawOdds: odd.drawOdds || "",
      awayOdds: odd.awayOdds || "",
      updatedAt: odd.updatedAt || fixture.updatedAt || "",
      source: "API-Football"
    } : fixture;
  });
  const fixtureIds = new Set(merged.map((match) => String(match.fixtureId)).filter(Boolean));
  const oddsOnly = odds.filter((match) => !match.fixtureId || !fixtureIds.has(String(match.fixtureId)));
  return [...merged, ...oddsOnly];
}

async function loadLeagueMatches({ date, leagueKey, apiKey }) {
  const leagueIds = getLeagueIds(leagueKey).filter(Boolean);
  const results = await Promise.all(leagueIds.map(async (leagueId) => {
    const [fixtures, odds] = await Promise.all([
      loadLeagueFixtures({ date, leagueKey, leagueId, apiKey }),
      loadLeagueOdds({ date, leagueKey, leagueId, apiKey })
    ]);
    return { fixtures, odds };
  }));
  const fixtures = results.flatMap((result) => result.fixtures);
  const odds = results.flatMap((result) => result.odds);

  return {
    matches: mergeFixturesWithOdds(fixtures, odds),
    fixtureCount: fixtures.length,
    oddsCount: odds.length
  };
}

async function loadHistoricalLeagueMatches({ date, leagueKey, apiKey, days }) {
  const dates = getDateRange(date, days);
  const results = [];
  for (const dateText of dates) {
    try {
      const result = await loadLeagueMatches({ date: dateText, leagueKey, apiKey });
      results.push({ date: dateText, ...result });
      await wait(120);
    } catch (error) {
      results.push({ date: dateText, matches: [], fixtureCount: 0, oddsCount: 0, error: error instanceof Error ? error.message : "API error" });
    }
  }
  return results;
}

module.exports = async function handler(request, response) {
  if (request.method === "OPTIONS") return sendJson(response, 200, { ok: true });

  const apiKey = process.env.API_FOOTBALL_KEY || process.env.API_SPORTS_KEY;
  if (!apiKey) {
    return sendJson(response, 500, {
      error: "API 키가 설정되어 있지 않습니다. Vercel 환경변수에 API_FOOTBALL_KEY를 추가해주세요.",
      matches: []
    });
  }

  const params = request.query || {};
  const date = String(params.date || new Date().toISOString().slice(0, 10)).slice(0, 10);
  const requestedLeague = String(params.league || "ALL").toUpperCase();
  const mode = String(params.mode || "").toLowerCase();
  const leagueKeys = requestedLeague === "ALL"
    ? Object.keys(LEAGUE_IDS)
    : Object.keys(LEAGUE_IDS).filter((key) => key === requestedLeague);

  if (leagueKeys.length === 0) {
    return sendJson(response, 400, { error: "지원하지 않는 리그입니다.", matches: [] });
  }

  try {
    if (mode === "history") {
      const adminAccess = await verifyAdminRequest(request);
      if (!adminAccess.allowed) {
        return sendJson(response, adminAccess.status, { error: adminAccess.error, matches: [] });
      }
      const historyLeagueKeys = requestedLeague === "ALL" ? ["EPL"] : leagueKeys;
      const days = Math.max(1, Math.min(Number(params.days || 7), 14));
      const results = [];
      for (const leagueKey of historyLeagueKeys.slice(0, 1)) {
        const leagueResults = await loadHistoricalLeagueMatches({ date, leagueKey, apiKey, days });
        results.push(...leagueResults.map((result) => ({ ...result, leagueKey })));
      }
      const matches = results.flatMap((result) => result.matches || []).filter((match) => (
        match.homeTeam && match.awayTeam && match.homeOdds && match.drawOdds && match.awayOdds
      ));
      return sendJson(response, 200, {
        matches,
        meta: {
          provider: "API-Football",
          mode: "history",
          date,
          days,
          leagues: historyLeagueKeys.slice(0, 1),
          count: matches.length,
          fixtureCount: results.reduce((sum, result) => sum + Number(result.fixtureCount || 0), 0),
          oddsCount: results.reduce((sum, result) => sum + Number(result.oddsCount || 0), 0),
          errors: results.filter((result) => result.error).map((result) => `${result.date}: ${result.error}`)
        }
      });
    }

    if (requestedLeague === "ALL") {
      const globalFixtures = await loadGlobalFixtures({
        date,
        apiKey,
        filter: isSupportedFixture
      });
      const fixtureOdds = await loadOddsForFixtures({
        fixtures: globalFixtures,
        leagueKey: "GLOBAL",
        date,
        apiKey
      });
      const matches = mergeFixturesWithOdds(globalFixtures, fixtureOdds).filter((match) => match.homeTeam && match.awayTeam);

      return sendJson(response, 200, {
        matches,
        meta: {
          provider: "API-Football",
          date,
          leagues: leagueKeys,
          count: matches.length,
          fixtureCount: globalFixtures.length,
          oddsCount: fixtureOdds.length
        }
      });
    }

    const results = await Promise.all(leagueKeys.map((leagueKey) => loadLeagueMatches({ date, leagueKey, apiKey })));
    let matches = results.flatMap((result) => result.matches).filter((match) => match.homeTeam && match.awayTeam);
    let fixtureCount = results.reduce((sum, result) => sum + result.fixtureCount, 0);
    let oddsCount = results.reduce((sum, result) => sum + result.oddsCount, 0);

    if ((requestedLeague === "ALL" || requestedLeague === "WORLDCUP") && matches.length === 0) {
      const globalFixtures = await loadGlobalFixtures({
        date,
        apiKey,
        filter: requestedLeague === "WORLDCUP" ? isWorldCupFixture : undefined
      });
      const fixtureOdds = await loadOddsForFixtures({
        fixtures: globalFixtures,
        leagueKey: requestedLeague === "WORLDCUP" ? "WORLDCUP" : "GLOBAL",
        date,
        apiKey
      });
      matches = mergeFixturesWithOdds(globalFixtures, fixtureOdds).filter((match) => match.homeTeam && match.awayTeam);
      fixtureCount = matches.length;
      oddsCount = fixtureOdds.length;
    }

    return sendJson(response, 200, {
      matches,
      meta: {
        provider: "API-Football",
        date,
        leagues: leagueKeys,
        count: matches.length,
        fixtureCount,
        oddsCount
      }
    });
  } catch (error) {
    return sendJson(response, 502, {
      error: error instanceof Error ? error.message : "API-Football 호출 중 문제가 발생했습니다.",
      matches: []
    });
  }
};

module.exports.getBearerToken = getBearerToken;
module.exports.verifyAdminRequest = verifyAdminRequest;
