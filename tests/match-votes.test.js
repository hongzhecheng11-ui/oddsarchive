const assert = require('node:assert/strict');
const signals = require('../api/today-signals');
const originalInvoke = signals.invokeLiveOdds;
let schedule = [];
signals.invokeLiveOdds = async () => ({statusCode:200, body:{matches:schedule}});
const handler = require('../api/match-votes');
signals.invokeLiveOdds = originalInvoke;
function response() {return {code:200,setHeader(){},status(code){this.code=code;return this},json(body){this.body=body;return this}}}
async function main() {
  const match = {fixtureId:'123',date:'2099-01-01',startTime:'21:00',status:'NS'};
  assert(handler.getVoteKickoff(match));
  assert.equal(handler.getVoteKickoff({...match,status:'FT'}),null);
  assert.equal(handler.getVoteKickoff({...match,startTime:''}),null);
  assert.equal(handler.getVoteKickoff(match,Date.parse('2099-01-02')),null);
  const noAuth = response();
  await handler({method:'POST',headers:{},query:{fixtureId:'123'}},noAuth);
  assert.equal(noAuth.code,401);
  const oldFetch=global.fetch,oldUrl=process.env.SUPABASE_URL,oldKey=process.env.SUPABASE_SERVICE_ROLE_KEY;
  process.env.SUPABASE_URL='https://example.test';process.env.SUPABASE_SERVICE_ROLE_KEY='local-test';
  const calls=[];
  global.fetch=async (url, options) => {
    calls.push({url,options});
    return {ok:true,json:async()=>url.includes('/auth/')?{id:'verified-user'}:{home:1,draw:0,away:0,total:1,mine:'H'}};
  };
  try {
    schedule=[match];
    const cast=response();
    await handler({method:'POST',headers:{authorization:'Bearer test'},query:{fixtureId:'123'},body:{date:match.date,selection:'H',userId:'forged-user',kickoff:'2099-12-31'}},cast);
    assert.equal(cast.code,200);
    const params=JSON.parse(calls[1].options.body);
    assert.equal(params.p_user_id,'verified-user');
    assert.equal(params.p_kickoff,'2099-01-01T12:00:00.000Z');
    assert.equal(params.p_selection,'H');
    assert.equal(Object.hasOwn(cast.body,'user_id'),false);
    schedule=[{...match,status:'FT'}];calls.length=0;
    const closed=response();
    await handler({method:'POST',headers:{authorization:'Bearer test'},query:{fixtureId:'123'},body:{date:match.date,selection:'A'}},closed);
    assert.equal(closed.code,409);assert.equal(calls.length,1);
    const sql=require('fs').readFileSync(require('path').join(__dirname,'../supabase/match-votes.sql'),'utf8');
    assert(sql.includes('primary key (fixture_id, user_id)'));
    assert(sql.includes('revoke all on public.match_votes from anon, authenticated'));
    assert(sql.includes('p_kickoff <= now()'));
    console.log('PASS vote authentication, kickoff closure, authoritative user/schedule, aggregate privacy and SQL safeguards');
  } finally {
    global.fetch=oldFetch;
    if(oldUrl===undefined)delete process.env.SUPABASE_URL;else process.env.SUPABASE_URL=oldUrl;
    if(oldKey===undefined)delete process.env.SUPABASE_SERVICE_ROLE_KEY;else process.env.SUPABASE_SERVICE_ROLE_KEY=oldKey;
  }
}
main().catch(error=>{console.error(error);process.exitCode=1});
