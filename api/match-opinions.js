const {invokeLiveOdds} = require('./today-signals');
const {getVoteKickoff} = require('./match-votes');
const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

function normalizeOpinion(value) {
  if (typeof value !== 'string' || /[\u0000-\u001f\u007f-\u009f\u2028\u2029]/u.test(value)) return null;
  const text = value.trim();
  return [...text].length >= 1 && [...text].length <= 200 ? text : null;
}

async function handler(req, res) {
  res.setHeader('Cache-Control','no-store');
  if (!['GET','POST','DELETE'].includes(req.method)) return res.status(405).json({error:'Method not allowed'});
  const body = req.body && typeof req.body === 'object' ? req.body : {};
  const action = req.method === 'DELETE' ? 'delete' : String(req.query?.action || body.action || (req.method === 'GET' ? 'list' : 'save'));
  const valid = req.method === 'GET' ? ['list','reports'] : req.method === 'POST' ? ['save','report','hide','dismiss'] : ['delete'];
  if (!valid.includes(action)) return res.status(400).json({error:'Invalid action'});
  const fixtureId = String(req.query?.fixtureId || body.fixtureId || '');
  if (action !== 'reports' && !/^\d{1,20}$/.test(fixtureId)) return res.status(400).json({error:'Invalid fixture'});
  const token = String(req.headers?.authorization || '').match(/^Bearer (\S+)$/)?.[1];
  if (!token) return res.status(401).json({error:'Sign in required'});
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) return res.status(503).json({error:'Opinions unavailable'});
  try {
    const auth = await fetch(`${url}/auth/v1/user`,{headers:{apikey:key,Authorization:`Bearer ${token}`},signal:AbortSignal.timeout(10000)});
    if (!auth.ok) return res.status(401).json({error:'Sign in required'});
    const user = await auth.json();
    if (!user.id) return res.status(401).json({error:'Sign in required'});
    const params = {p_user_id:user.id};
    let rpc = 'get_match_opinions';
    if (action !== 'reports') params.p_fixture_id = fixtureId;
    if (action === 'save') {
      const text = normalizeOpinion(body.text);
      const date = String(body.date || '');
      if (!text || !/^\d{4}-\d{2}-\d{2}$/.test(date)) return res.status(400).json({error:'Invalid opinion'});
      const live = await invokeLiveOdds({date,league:'ALL'});
      if (live.statusCode !== 200 || !Array.isArray(live.body?.matches)) return res.status(503).json({error:'Schedule unavailable'});
      const match = live.body.matches.find(row=>String(row.fixtureId || row.id)===fixtureId);
      const kickoff = getVoteKickoff(match);
      if (!kickoff) return res.status(409).json({error:'Voting closed or schedule unavailable',code:'OPINION_CLOSED'});
      rpc = 'save_match_opinion'; params.p_body=text; params.p_kickoff=kickoff;
    } else if (action === 'delete') rpc='delete_match_opinion';
    else if (['report','hide','dismiss'].includes(action)) {
      if (!UUID.test(String(body.opinionId || ''))) return res.status(400).json({error:'Invalid opinion'});
      params.p_opinion_id=body.opinionId;
      if (action === 'report') {
        if (!['spam','abuse','other'].includes(body.reason)) return res.status(400).json({error:'Invalid reason'});
        params.p_reason=body.reason; rpc='report_match_opinion';
      } else rpc=action === 'hide' ? 'hide_match_opinion' : 'dismiss_match_opinion_reports';
    } else if (action === 'reports') rpc='get_match_opinion_reports';
    const response = await fetch(`${url}/rest/v1/rpc/${rpc}`,{method:'POST',headers:{apikey:key,Authorization:`Bearer ${key}`,'Content-Type':'application/json'},body:JSON.stringify(params),signal:AbortSignal.timeout(10000)});
    const payload = await response.json();
    if (!response.ok) {
      const message = String(payload.message || '');
      const errors = {VOTE_REQUIRED:[409,'Vote before writing'],OPINION_CLOSED:[409,'Voting closed'],
        OPINION_RATE_LIMIT:[429,'Wait 30 seconds before editing'],OPINION_INVALID:[400,'Invalid opinion'],
        OPINION_HIDDEN:[403,'Opinion hidden by moderator'],MODERATOR_REQUIRED:[403,'Moderator required'],OPINION_NOT_FOUND:[404,'Opinion not found']};
      const error = errors[message];
      return res.status(error ? error[0] : 503).json({error:error ? error[1] : 'Opinions unavailable',...(error ? {code:message} : {})});
    }
    return res.status(200).json(payload);
  } catch {return res.status(503).json({error:'Opinions unavailable'});}
}
module.exports=handler;
module.exports.normalizeOpinion=normalizeOpinion;
