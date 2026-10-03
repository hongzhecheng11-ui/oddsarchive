// Optional isolated PostgreSQL check: supply a temporary PGlite module path as argv[2].
// No service credentials, HTTP requests, or persistent DB are used.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const {PGlite} = process.argv[2] ? require(path.resolve(process.argv[2])) : require('@electric-sql/pglite');
const users = [1,2,3,4].map(value=>`10000000-0000-4000-8000-00000000000${value}`);
async function main() {
  const db = new PGlite();
  const rpc = async (fn, args) => (await db.query(`select public.${fn}(${args.map((_,index)=>`$${index+1}`).join(',')}) as result`,args)).rows[0].result;
  try {
    await db.exec(`create role anon; create role authenticated; create role service_role bypassrls;
      create schema auth; create table auth.users(id uuid primary key);
      create table public.app_admins(user_id uuid primary key references auth.users(id));`);
    for(const id of users) await db.query('insert into auth.users(id) values($1)',[id]);
    await db.query('insert into public.app_admins values($1)',[users[2]]);
    const migration = fs.readFileSync(path.join(__dirname,'../supabase/match-votes.sql'),'utf8')+'\n'+fs.readFileSync(path.join(__dirname,'../supabase/match-opinions.sql'),'utf8');
    await db.exec(migration);
    await db.exec(migration);
    await db.exec('set role service_role');
    const kickoff=new Date(Date.now()+86400000).toISOString();
    await rpc('cast_match_vote',['123',users[0],'H',kickoff]);
    await rpc('cast_match_vote',['123',users[1],'A',kickoff]);
    const countsBefore=await rpc('get_match_vote_counts',['123',users[0]]);
    const first=await rpc('save_match_opinion',['123',users[0],'Home team in form',kickoff]);
    const id=first.mine.id;
    assert.equal(first.opinions.length,1);assert.equal(first.isModerator,false);
    assert.equal(first.opinions[0].isMine,true);
    assert.equal(first.opinions[0].selection,'H');
    assert(!JSON.stringify(first).includes(users[0]));
    await assert.rejects(()=>rpc('save_match_opinion',['123',users[0],'Changed quickly',kickoff]),/OPINION_RATE_LIMIT/);
    await db.query("update public.match_opinions set updated_at=now()-interval '31 seconds' where id=$1",[id]);
    const edited=await rpc('save_match_opinion',['123',users[0],'Updated reason',kickoff]);
    assert.equal(edited.mine.id,id);assert.equal(edited.opinions.length,1);assert.equal(edited.mine.body,'Updated reason');
    await assert.rejects(()=>rpc('save_match_opinion',['123',users[3],'No vote',kickoff]),/VOTE_REQUIRED/);
    await assert.rejects(()=>rpc('save_match_opinion',['123',users[0],'Late opinion',new Date(Date.now()-60000).toISOString()]),/OPINION_CLOSED/);
    for(const body of ['', 'x'.repeat(201), 'line\nbreak']) await assert.rejects(()=>rpc('save_match_opinion',['123',users[0],body,kickoff]),/OPINION_INVALID/);
    await assert.rejects(()=>rpc('report_match_opinion',['123',users[0],id,'spam']),/OPINION_NOT_FOUND/);
    await assert.rejects(()=>rpc('report_match_opinion',['999',users[1],id,'spam']),/OPINION_NOT_FOUND/);
    await rpc('report_match_opinion',['123',users[1],id,'spam']);
    await rpc('report_match_opinion',['123',users[1],id,'abuse']);
    let reports=await rpc('get_match_opinion_reports',[users[2]]);
    assert.equal(reports.reports[0].reportCount,1);
    assert(!JSON.stringify(reports).includes(users[1]));
    await assert.rejects(()=>rpc('get_match_opinion_reports',[users[1]]),/MODERATOR_REQUIRED/);
    await assert.rejects(()=>rpc('hide_match_opinion',['123',users[1],id]),/MODERATOR_REQUIRED/);
    await assert.rejects(()=>rpc('dismiss_match_opinion_reports',['123',users[1],id]),/MODERATOR_REQUIRED/);
    await rpc('dismiss_match_opinion_reports',['123',users[2],id]);
    assert.equal((await rpc('get_match_opinion_reports',[users[2]])).reports.length,0);
    assert.equal((await rpc('get_match_opinions',['123',users[1]])).opinions.length,1);
    const noDelete=await rpc('delete_match_opinion',['123',users[1]]);
    assert.equal(noDelete.opinions.length,1); // A different user cannot delete this opinion.
    await rpc('hide_match_opinion',['123',users[2],id]);
    assert.equal((await rpc('get_match_opinions',['123',users[1]])).opinions.length,0);
    await assert.rejects(()=>rpc('save_match_opinion',['123',users[0],'Bypass hide',kickoff]),/OPINION_HIDDEN/);
    await rpc('delete_match_opinion',['123',users[0]]);
    const deleted=(await db.query('select body,deleted_at,hidden from public.match_opinions where id=$1',[id])).rows[0];
    assert.equal(deleted.body,null);assert(deleted.deleted_at);assert(deleted.hidden);
    await assert.rejects(()=>rpc('save_match_opinion',['123',users[0],'Repost after delete',kickoff]),/OPINION_HIDDEN/);
    assert.equal((await rpc('get_match_opinion_reports',[users[2]])).reports.length,0);
    assert.deepEqual(await rpc('get_match_vote_counts',['123',users[0]]),countsBefore);
    for(const role of ['anon','authenticated']) {
      await db.exec(`reset role; set role ${role}`);
      await assert.rejects(()=>db.query('select * from public.match_opinions'),/permission denied/);
      await assert.rejects(()=>rpc('get_match_opinions',['123',users[0]]),/permission denied/);
      await assert.rejects(()=>rpc('hide_match_opinion',['123',users[2],id]),/permission denied/);
    }
    console.log('PASS actual PostgreSQL migrations, one opinion per user, cooldown, kickoff, vote requirement, reports, moderator checks, owner deletion, hidden repost blocking, privacy, client permission denial and unchanged vote counts');
  } finally {await db.close();}
}
main().catch(error=>{console.error(error);process.exitCode=1});
