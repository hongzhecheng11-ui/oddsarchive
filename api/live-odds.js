const API_HOST = "v3.football.api-sports.io";

const LEAGUE_IDS = {
  EPL: 39,
  LALIGA: 140,
  SERIEA: 135,
  BUNDESLIGA: 78,
  LIGUE1: 61
};

function sendJson(response, statusCode, body) {
  response.statusCode = statusCode;
  response.setHeader("content-type", "application/json; charset=utf-8");
  response.setHeader("cache-control", "public, max-age=300");
  response.end(JSON.stringify(body));
}

function getSeason(dateText) {
  const date = new Date(`${dateText}T00:00:00Z`);
  if (Number.isNaN(date.getTime())) return String(new Date().getUTCFullYear());
  const year = date.getUTCFullYear();
  const month = date.getUTCMonth() + 1;
  return String(month < 7 ? year - 1 : year);
}

function getOutcomeOdd(values, names) {
  const normalizedNames = names.map((name) => String(name).toLowerCase());
  const matched = values.find((value) => normalizedNames.includes(String(value.value || value.name || "").toLowerCase()));
  return matched ? String(matched.odd || matched.price || "") : "";
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
  const teams = item.teams || {};
  const homeTeam = teams.home?.name || item.homeTeam || "";
  const awayTeam = teams.away?.name || item.awayTeam || "";
  const bet = getMatchWinnerBet(item.bookmakers || []);
  const values = bet?.values || [];

  return {
    id: fixture.id ? `api-football-${fixture.id}` : `api-football-${leagueKey}-${dateText}-${homeTeam}-${awayTeam}`,
    fixtureId: fixture.id || "",
    date: String(fixture.date || dateText).slice(0, 10),
    league: leagueKey,
    homeTeam,
    awayTeam,
    homeOdds: getOutcomeOdd(values, ["Home", homeTeam]),
    drawOdds: getOutcomeOdd(values, ["Draw"]),
    awayOdds: getOutcomeOdd(values, ["Away", awayTeam]),
    source: "API-Football"
  };
}

function normalizeFixtureItem(item, leagueKey, dateText) {
  const fixture = item.fixture || {};
  const teams = item.teams || {};
  const goals = item.goals || {};
  const scoreText = Number.isFinite(goals.home) && Number.isFinite(goals.away) ? `${goals.home}-${goals.away}` : "";

  return {
    id: fixture.id ? `api-football-${fixture.id}` : `api-football-fixture-${leagueKey}-${dateText}-${teams.home?.name || ""}-${teams.away?.name || ""}`,
    fixtureId: fixture.id || "",
    date: String(fixture.date || dateText).slice(0, 10),
    league: leagueKey,
    homeTeam: teams.home?.name || "",
    awayTeam: teams.away?.name || "",
    homeOdds: "",
    drawOdds: "",
    awayOdds: "",
    result: "UNKNOWN",
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

async function loadLeagueOdds({ date, leagueKey, apiKey }) {
  const leagueId = LEAGUE_IDS[leagueKey];
  const season = getSeason(date);
  const path = `/odds?league=${leagueId}&season=${season}&date=${encodeURIComponent(date)}&bet=1`;
  const payload = await fetchApiFootball(path, apiKey);
  const rows = Array.isArray(payload.response) ? payload.response : [];
  return rows.map((item) => normalizeOddsItem(item, leagueKey, date));
}

async function loadLeagueFixtures({ date, leagueKey, apiKey }) {
  const leagueId = LEAGUE_IDS[leagueKey];
  const season = getSeason(date);
  const path = `/fixtures?league=${leagueId}&season=${season}&date=${encodeURIComponent(date)}`;
  const payload = await fetchApiFootball(path, apiKey);
  const rows = Array.isArray(payload.response) ? payload.response : [];
  return rows.map((item) => normalizeFixtureItem(item, leagueKey, date));
}

function mergeFixturesWithOdds(fixtures, odds) {
  const oddsByFixtureId = new Map(odds.filter((match) => match.fixtureId).map((match) => [String(match.fixtureId), match]));
  const merged = fixtures.map((fixture) => {
    const odd = oddsByFixtureId.get(String(fixture.fixtureId));
    return odd ? { ...fixture, ...odd, source: "API-Football" } : fixture;
  });
  const fixtureIds = new Set(merged.map((match) => String(match.fixtureId)).filter(Boolean));
  const oddsOnly = odds.filter((match) => !match.fixtureId || !fixtureIds.has(String(match.fixtureId)));
  return [...merged, ...oddsOnly];
}

async function loadLeagueMatches({ date, leagueKey, apiKey }) {
  const [fixtures, odds] = await Promise.all([
    loadLeagueFixtures({ date, leagueKey, apiKey }),
    loadLeagueOdds({ date, leagueKey, apiKey })
  ]);
  return {
    matches: mergeFixturesWithOdds(fixtures, odds),
    fixtureCount: fixtures.length,
    oddsCount: odds.length
  };
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
  const leagueKeys = requestedLeague === "ALL"
    ? Object.keys(LEAGUE_IDS)
    : Object.keys(LEAGUE_IDS).filter((key) => key === requestedLeague);

  if (leagueKeys.length === 0) {
    return sendJson(response, 400, { error: "지원하지 않는 리그입니다.", matches: [] });
  }

  try {
    const results = await Promise.all(leagueKeys.map((leagueKey) => loadLeagueMatches({ date, leagueKey, apiKey })));
    const matches = results.flatMap((result) => result.matches).filter((match) => match.homeTeam && match.awayTeam);
    return sendJson(response, 200, {
      matches,
      meta: {
        provider: "API-Football",
        date,
        leagues: leagueKeys,
        count: matches.length,
        fixtureCount: results.reduce((sum, result) => sum + result.fixtureCount, 0),
        oddsCount: results.reduce((sum, result) => sum + result.oddsCount, 0)
      }
    });
  } catch (error) {
    return sendJson(response, 502, {
      error: error instanceof Error ? error.message : "API-Football 호출 중 문제가 발생했습니다.",
      matches: []
    });
  }
};
