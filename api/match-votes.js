const {invokeLiveOdds} = require('./today-signals');

function getVoteKickoff(match, now = Date.now()) {
  if (!match || !['NS','TBD'].includes(String(match.status || '').toUpperCase())) return null;
  if (!/^\d{4}-\d{2}-\d{2}$/.test(match.date) || !/^\d{2}:\d{2}$/.test(match.startTime)) return null;
  const time = Date.parse(`${match.date}T${match.startTime}:00+09:00`);
  return Number.isFinite(time) && time > now ? new Date(time).toISOString() : null;
}

async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');
  if (!['GET','POST'].includes(req.method)) return res.status(405).json({error:'Method not allowed'});
  const body = req.body && typeof req.body === 'object' ? req.body : {};
  const fixtureId = String(req.query?.fixtureId || body.fixtureId || '');
  if (!/^\d{1,20}$/.test(fixtureId)) return res.status(400).json({error:'Invalid fixture'});
  const token = String(req.headers.authorization || '').match(/^Bearer (\S+)$/)?.[1];
  if (!token) return res.status(401).json({error:'Sign in required'});
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) return res.status(503).json({error:'Voting unavailable'});
  try {
    const auth = await fetch(`${url}/auth/v1/user`, {headers:{apikey:key, Authorization:`Bearer ${token}`}, signal:AbortSignal.timeout(10000)});
    if (!auth.ok) return res.status(401).json({error:'Sign in required'});
    const user = await auth.json();
    if (!user.id) return res.status(401).json({error:'Sign in required'});
    let rpc = 'get_match_vote_counts';
    const params = {p_fixture_id:fixtureId, p_user_id:user.id};
    if (req.method === 'POST') {
      const date = String(body.date || '');
      if (!/^\d{4}-\d{2}-\d{2}$/.test(date) || !['H','D','A'].includes(body.selection)) return res.status(400).json({error:'Invalid vote'});
      const live = await invokeLiveOdds({date, league:'ALL'});
      if (live.statusCode !== 200 || !Array.isArray(live.body?.matches)) return res.status(503).json({error:'Schedule unavailable'});
      const match = live.body.matches.find(row => String(row.fixtureId || row.id) === fixtureId);
      const kickoff = getVoteKickoff(match);
      if (!kickoff) return res.status(409).json({error:'Voting closed or schedule unavailable'});
      rpc = 'cast_match_vote';
      params.p_selection = body.selection;
      params.p_kickoff = kickoff;
    }
    const response = await fetch(`${url}/rest/v1/rpc/${rpc}`, {method:'POST',headers:{apikey:key,Authorization:`Bearer ${key}`,'Content-Type':'application/json'},body:JSON.stringify(params),signal:AbortSignal.timeout(10000)});
    if (!response.ok) return res.status(503).json({error:'Voting unavailable'});
    return res.status(200).json(await response.json());
  } catch {return res.status(503).json({error:'Voting unavailable'});}
}
module.exports = handler;
module.exports.getVoteKickoff = getVoteKickoff;
