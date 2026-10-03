const assert = require('node:assert/strict');
const signals = require('../api/today-signals');
const originalInvoke = signals.invokeLiveOdds;
let schedule = [{fixtureId:'123',date:'2099-01-01',startTime:'21:00',status:'NS'}];
signals.invokeLiveOdds=async()=>({statusCode:200,body:{matches:schedule}});
const handler = require('../api/match-opinions');
signals.invokeLiveOdds=originalInvoke;
const id='a0000000-0000-4000-8000-000000000001';
function response(){return {code:200,setHeader(){},status(code){this.code=code;return this},json(body){this.body=body;return this}};}
async function call(method,body={},query={fixtureId:'123'},authorized=true){
  const res=response();await handler({method,body,query,headers:authorized?{authorization:'Bearer test'}:{}},res);return res;
}
async function main(){
  assert.equal(handler.normalizeOpinion('  Home looks strong  '),'Home looks strong');
  for(const value of ['',null,5,'x'.repeat(201),'hello\nworld','hello\tworld','hello\u2028world']) assert.equal(handler.normalizeOpinion(value),null);
  assert.equal([...handler.normalizeOpinion('😀'.repeat(200))].length,200);
  assert.equal((await call('GET',{},undefined,false)).code,401);
  const originalFetch=global.fetch,oldUrl=process.env.SUPABASE_URL,oldKey=process.env.SUPABASE_SERVICE_ROLE_KEY;
  process.env.SUPABASE_URL='https://local.test';process.env.SUPABASE_SERVICE_ROLE_KEY='fake-service-key';
  const calls=[];let rpcError=null;let validAuth=true;
  global.fetch=async(url,options)=>{
    calls.push({url,options});
    if(url.includes('/auth/'))return {ok:validAuth,json:async()=>({id:'verified-user'})};
    return rpcError?{ok:false,json:async()=>({message:rpcError})}:{ok:true,json:async()=>({opinions:[],mine:null,isModerator:false})};
  };
  try {
    assert.equal((await call('POST',{date:'2099-01-01',text:'Home team in form',userId:'forged-user',kickoff:'2099-12-31'})).code,200);
    let rpc=calls.at(-1);
    assert(rpc.url.endsWith('/save_match_opinion'));
    assert.deepEqual(JSON.parse(rpc.options.body),{p_user_id:'verified-user',p_fixture_id:'123',p_body:'Home team in form',p_kickoff:'2099-01-01T12:00:00.000Z'});
    schedule=[{...schedule[0],status:'FT'}];calls.length=0;
    assert.equal((await call('POST',{date:'2099-01-01',text:'Late opinion'})).code,409);assert.equal(calls.length,1);
    schedule[0].status='NS';
    assert.equal((await call('DELETE',{userId:'other-person',opinionId:id})).code,200);
    assert.deepEqual(JSON.parse(calls.at(-1).options.body),{p_user_id:'verified-user',p_fixture_id:'123'});
    assert(calls.at(-1).url.endsWith('/delete_match_opinion'));
    assert.equal((await call('POST',{action:'report',opinionId:id,reason:'abuse'})).code,200);
    assert.deepEqual(JSON.parse(calls.at(-1).options.body),{p_user_id:'verified-user',p_fixture_id:'123',p_opinion_id:id,p_reason:'abuse'});
    assert.equal((await call('POST',{action:'report',opinionId:id,reason:'invented'})).code,400);
    rpcError='MODERATOR_REQUIRED';
    assert.equal((await call('GET',{}, {action:'reports'})).code,403);
    assert.deepEqual(JSON.parse(calls.at(-1).options.body),{p_user_id:'verified-user'});
    assert.equal((await call('POST',{action:'hide',opinionId:id})).code,403);
    assert.equal((await call('POST',{action:'dismiss',opinionId:id})).code,403);
    rpcError='VOTE_REQUIRED';assert.equal((await call('POST',{date:'2099-01-01',text:'One opinion'})).code,409);
    rpcError='OPINION_RATE_LIMIT';assert.equal((await call('POST',{date:'2099-01-01',text:'One opinion'})).code,429);
    rpcError='Database secret details must stay private';
    const failed=await call('GET');assert.equal(failed.code,503);assert(!JSON.stringify(failed.body).includes('secret details'));
    validAuth=false;calls.length=0;
    assert.equal((await call('DELETE')).code,401);assert.equal(calls.length,1);
    const sql=require('fs').readFileSync(require('path').join(__dirname,'../supabase/match-opinions.sql'),'utf8');
    assert(sql.includes('unique (fixture_id, user_id)'));
    assert(sql.includes('primary key (opinion_id, reporter_id)'));
    assert(sql.includes('user_id<>p_user_id'));
    assert(sql.includes('body=null,deleted_at=now()'));
    assert(sql.includes('match_opinions.hidden=false'));
    assert.equal((sql.match(/MODERATOR_REQUIRED/g)||[]).length,3);
    console.log('PASS opinion length, authentication, authoritative kickoff/user, owner deletion, reports, moderation authorization, rate limits and private error handling');
  } finally {
    global.fetch=originalFetch;
    if(oldUrl===undefined)delete process.env.SUPABASE_URL;else process.env.SUPABASE_URL=oldUrl;
    if(oldKey===undefined)delete process.env.SUPABASE_SERVICE_ROLE_KEY;else process.env.SUPABASE_SERVICE_ROLE_KEY=oldKey;
  }
}
main().catch(error=>{console.error(error);process.exitCode=1});
