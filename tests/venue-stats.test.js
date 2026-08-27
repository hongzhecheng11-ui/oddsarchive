const assert = require("assert");
const app = require("../app.js");

function test(name, fn) {
  try {
    fn();
    console.log(`PASS ${name}`);
  } catch (error) {
    console.error(`FAIL ${name}`);
    console.error(error);
    process.exitCode = 1;
  }
}

const matches = [
  { date: "2026-01-10", homeTeam: "Arsenal", awayTeam: "Chelsea", result: "H", score: "3-1" },
  { date: "2026-02-14", homeTeam: "Chelsea", awayTeam: "Arsenal", result: "D", score: "1-1" },
  { date: "2026-03-20", homeTeam: "Arsenal", awayTeam: "Fulham", result: "H", score: "2-0" },
  { date: "2026-04-05", homeTeam: "Everton", awayTeam: "Arsenal", result: "H", score: "3-2" },
  { date: "2026-05-01", homeTeam: "Arsenal", awayTeam: "Chelsea", result: "A", score: "0-1" }
];

test("keeps only the matches a team played at the requested venue", () => {
  const home = app.getTeamVenueMatches("Arsenal", matches, "home");
  assert.strictEqual(home.length, 3);
  assert(home.every((m) => m.homeTeam === "Arsenal"));

  const away = app.getTeamVenueMatches("Arsenal", matches, "away");
  assert.strictEqual(away.length, 2);
  assert(away.every((m) => m.awayTeam === "Arsenal"));

  const all = app.getTeamVenueMatches("Arsenal", matches, "all");
  assert.strictEqual(all.length, 5);
});

test("sorts venue matches newest first", () => {
  const list = app.getTeamVenueMatches("Arsenal", matches, "all");
  const dates = list.map((m) => m.date);
  assert.deepStrictEqual([...dates].sort().reverse(), dates);
});

test("computes the over/under rate against a goal line", () => {
  // 총득점: 4, 2, 2, 5, 1 -> line 2.5 초과: 4, 5 -> 2/5
  const rate = app.getOverUnderRate(matches, 2.5);
  assert.strictEqual(rate.matches, 5);
  assert.strictEqual(rate.overCount, 2);
  assert.strictEqual(rate.overRate, 0.4);
});

test("returns a null rate when there is nothing to compute from", () => {
  assert.deepStrictEqual(app.getOverUnderRate([], 2.5), { matches: 0, overCount: 0, overRate: null });
  assert.deepStrictEqual(app.getOverUnderRate([{ score: "" }], 2.5), { matches: 0, overCount: 0, overRate: null });
});

test("builds a venue snapshot with profile, over/under and a recent-ten list", () => {
  const snapshot = app.buildTeamVenueSnapshot("Arsenal", matches, "home");
  assert.strictEqual(snapshot.venue, "home");
  assert.strictEqual(snapshot.matches, 3);
  assert.strictEqual(snapshot.profile.matches, 3);
  assert.strictEqual(snapshot.recentTen.length, 3);
  assert.strictEqual(snapshot.recentTen[0].date, "2026-05-01");
  assert.strictEqual(snapshot.recentTen[0].opponent, "Chelsea");
  assert.strictEqual(snapshot.recentTen[0].result, "L");
});

test("caps the recent-ten list at ten even with a longer history", () => {
  const long = Array.from({ length: 15 }, (_, i) => ({
    date: `2026-01-${String(i + 1).padStart(2, "0")}`,
    homeTeam: "Arsenal",
    awayTeam: "Team" + i,
    result: "H",
    score: "1-0"
  }));
  const snapshot = app.buildTeamVenueSnapshot("Arsenal", long, "all");
  assert.strictEqual(snapshot.matches, 15);
  assert.strictEqual(snapshot.recentTen.length, 10);
});

const standings = [
  { team: "Arsenal", home: { played: 3, wins: 3, draws: 0, losses: 0, goalsFor: 8, goalsAgainst: 1 }, away: { played: 2, wins: 0, draws: 1, losses: 1, goalsFor: 1, goalsAgainst: 3 } },
  { team: "Chelsea", home: { played: 3, wins: 1, draws: 1, losses: 1, goalsFor: 4, goalsAgainst: 4 }, away: { played: 2, wins: 1, draws: 0, losses: 1, goalsFor: 3, goalsAgainst: 3 } },
  { team: "Fulham", home: { played: 0, wins: 0, draws: 0, losses: 0, goalsFor: 0, goalsAgainst: 0 }, away: { played: 2, wins: 2, draws: 0, losses: 0, goalsFor: 5, goalsAgainst: 1 } }
];

test("ranks teams by venue-specific points, breaking ties on goal difference", () => {
  const homeRank = app.getVenueRankFromStandings(standings, "Arsenal", "home");
  assert.deepStrictEqual(homeRank, { rank: 1, of: 2 });

  const awayRank = app.getVenueRankFromStandings(standings, "Fulham", "away");
  assert.deepStrictEqual(awayRank, { rank: 1, of: 3 });
});

test("excludes teams with no matches at that venue from the ranking", () => {
  const homeRank = app.getVenueRankFromStandings(standings, "Fulham", "home");
  assert.strictEqual(homeRank, null);
});

test("returns null for a team not present in the standings", () => {
  assert.strictEqual(app.getVenueRankFromStandings(standings, "Nobody", "home"), null);
  assert.strictEqual(app.getVenueRankFromStandings([], "Arsenal", "home"), null);
});

test("splits head-to-head meetings by who hosted", () => {
  const h2h = app.splitHeadToHeadByVenue("Arsenal", "Chelsea", matches);
  assert.strictEqual(h2h.hostedByHome.length, 2);
  assert(h2h.hostedByHome.every((m) => m.homeTeam === "Arsenal"));
  assert.strictEqual(h2h.hostedByAway.length, 1);
  assert(h2h.hostedByAway.every((m) => m.homeTeam === "Chelsea"));
});

test("head-to-head ignores matches between other teams", () => {
  const h2h = app.splitHeadToHeadByVenue("Arsenal", "Chelsea", matches);
  const allTexts = [...h2h.hostedByHome, ...h2h.hostedByAway];
  assert(allTexts.every((m) => (m.homeTeam === "Arsenal" || m.homeTeam === "Chelsea") && (m.awayTeam === "Arsenal" || m.awayTeam === "Chelsea")));
});

test("head-to-head returns empty groups for teams that never met", () => {
  const h2h = app.splitHeadToHeadByVenue("Fulham", "Everton", matches);
  assert.strictEqual(h2h.hostedByHome.length, 0);
  assert.strictEqual(h2h.hostedByAway.length, 0);
});
