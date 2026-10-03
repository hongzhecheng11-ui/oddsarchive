const context = require('../data/team-context-pack');
const cache = new Map();
const pending = new Map();
const TTL = 60 * 60 * 1000;

async function provider(path) {
  const response = await fetch(`https://v3.football.api-sports.io${path}`, {
    headers: {'x-apisports-key': process.env.API_FOOTBALL_KEY},
    signal: AbortSignal.timeout(10000)
  });
  const payload = await response.json();
  if (!response.ok || Object.keys(payload.errors || {}).length || !Array.isArray(payload.response)) {
    throw new Error('History unavailable');
  }
  return payload.response;
}

function storedFixture(id) {
  for (const day of context.dates || []) {
    for (const league of day.leagues || []) {
      const row = (league.fixtures || []).find(item => String(item.fixtureId) === id);
      if (row) return {home: Number(row.homeTeamId), away: Number(row.awayTeamId)};
    }
  }
  return null;
}

function normalizeHistory(rows) {
  return rows.filter(row => ['FT', 'AET', 'PEN'].includes(row.fixture?.status?.short))
    .map(row => ({...row, fullTime: row.score?.fulltime || (row.fixture.status.short === 'FT' ? row.goals : {})}))
    .filter(row => Number.isInteger(row.fullTime?.home) && Number.isInteger(row.fullTime?.away))
    .map(row => ({
      fixtureId: String(row.fixture.id),
      kickoff: row.fixture.date,
      homeTeam: row.teams.home.name,
      awayTeam: row.teams.away.name,
      homeTeamId: Number(row.teams.home.id),
      awayTeamId: Number(row.teams.away.id),
      homeGoals: row.fullTime.home,
      awayGoals: row.fullTime.away
    }));
}

async function load(id) {
  if (cache.get(id)?.expires > Date.now()) return cache.get(id).rows;
  if (pending.has(id)) return pending.get(id);
  const request = (async () => {
    let teams = storedFixture(id);
    if (!teams?.home || !teams.away) {
      const [fixture] = await provider(`/fixtures?id=${id}`);
      if (!fixture) throw new Error('History unavailable');
      teams = {home: Number(fixture.teams?.home?.id), away: Number(fixture.teams?.away?.id)};
    }
    if (!Number.isInteger(teams.home) || !Number.isInteger(teams.away) || teams.home <= 0 || teams.away <= 0) {
      throw new Error('History unavailable');
    }
    const rows = normalizeHistory(await provider(`/fixtures/headtohead?h2h=${teams.home}-${teams.away}&last=20`))
      .filter(row => (row.homeTeamId === teams.home && row.awayTeamId === teams.away) ||
        (row.homeTeamId === teams.away && row.awayTeamId === teams.home))
      .map(row => ({...row, homeIsCurrentHome: row.homeTeamId === teams.home}));
    if (cache.size >= 500) cache.delete(cache.keys().next().value);
    cache.set(id, {rows, expires: Date.now() + TTL});
    return rows;
  })();
  pending.set(id, request);
  try {return await request;} finally {pending.delete(id);}
}

async function handler(req, res) {
  res.setHeader('Cache-Control', 'private, max-age=600');
  if (req.method !== 'GET') return res.status(405).json({error: 'Method not allowed'});
  const id = String(req.query?.fixtureId || '');
  if (!/^\d{1,12}$/.test(id)) return res.status(400).json({error: 'Invalid fixture'});
  const token = String(req.headers.authorization || '').match(/^Bearer (\S+)$/)?.[1];
  if (!token) return res.status(401).json({error: 'Sign in required'});
  const url = process.env.SUPABASE_URL, key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key || !process.env.API_FOOTBALL_KEY) return res.status(503).json({error: 'History unavailable'});
  try {
    const auth = await fetch(`${url}/auth/v1/user`, {
      headers: {apikey: key, Authorization: `Bearer ${token}`}, signal: AbortSignal.timeout(10000)
    });
    if (!auth.ok || !(await auth.json()).id) return res.status(401).json({error: 'Sign in required'});
    return res.status(200).json({matches: await load(id)});
  } catch {return res.status(503).json({error: 'History unavailable'});}
}
module.exports = handler;
module.exports.normalizeHistory = normalizeHistory;
