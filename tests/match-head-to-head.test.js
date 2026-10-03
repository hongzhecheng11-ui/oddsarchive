const assert = require('node:assert/strict');
const handler = require('../api/match-head-to-head');
const raw = {fixture:{id:1,date:'2025-01-01T00:00:00Z',status:{short:'FT'}},teams:{home:{id:2,name:'A'},away:{id:3,name:'B'}},goals:{home:2,away:1}};
const rows = handler.normalizeHistory([raw,{...raw,fixture:{...raw.fixture,status:{short:'NS'}}},
  {...raw,fixture:{...raw.fixture,id:4,status:{short:'AET'}},score:{fulltime:{home:1,away:1}},goals:{home:2,away:1}}]);
assert.equal(rows.length,2);
assert.equal(rows[1].homeGoals,1);
assert.equal(rows[1].awayGoals,1);
async function main() {
  for (const [req,expected] of [[{method:'POST'},405],[{method:'GET',query:{fixtureId:'bad'}},400],
    [{method:'GET',query:{fixtureId:'1'},headers:{}},401]]) {
    const res={setHeader(){},status(code){this.code=code;return this},json(value){this.body=value;return this}};
    await handler(req,res);assert.equal(res.code,expected);
  }
  console.log('PASS completed/full-time H2H normalization and method/fixture/auth guards');
}
main().catch(e=>{console.error(e);process.exitCode=1});
