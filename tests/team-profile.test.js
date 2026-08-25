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

// 1.30~1.50 구간의 기저율을 60%로 만들어 둔 인덱스
const index = app.buildOddsBaseRateIndex([
  ...Array.from({ length: 6 }, () => ({ league: "E0", homeOdds: "1.40", drawOdds: "4.5", awayOdds: "7.0", result: "H" })),
  ...Array.from({ length: 4 }, () => ({ league: "E0", homeOdds: "1.40", drawOdds: "4.5", awayOdds: "7.0", result: "A" }))
]);

const matches = [
  { league: "E0", homeTeam: "Arsenal", awayTeam: "Chelsea", result: "H", score: "2-0", homeOdds: "1.40", drawOdds: "4.5", awayOdds: "7.0" },
  { league: "E0", homeTeam: "Chelsea", awayTeam: "Arsenal", result: "D", score: "1-1", homeOdds: "2.50", drawOdds: "3.2", awayOdds: "2.60" },
  { league: "E0", homeTeam: "Everton", awayTeam: "Arsenal", result: "H", score: "3-1", homeOdds: "4.00", drawOdds: "3.6", awayOdds: "1.85" },
  { league: "E0", homeTeam: "Arsenal", awayTeam: "Fulham", result: "A", score: "0-1", homeOdds: "1.40", drawOdds: "4.5", awayOdds: "7.0" },
  { league: "E0", homeTeam: "Fulham", awayTeam: "Everton", result: "H", score: "2-1", homeOdds: "1.90", drawOdds: "3.4", awayOdds: "3.9" }
];

test("counts only the team's own matches", () => {
  const profile = app.buildTeamProfile("Arsenal", matches, { index });
  assert.strictEqual(profile.matches, 4);
});

test("splits the record by home and away", () => {
  const profile = app.buildTeamProfile("Arsenal", matches, { index });
  assert.deepStrictEqual(
    { m: profile.home.matches, w: profile.home.wins, d: profile.home.draws, l: profile.home.losses },
    { m: 2, w: 1, d: 0, l: 1 }
  );
  assert.deepStrictEqual(
    { m: profile.away.matches, w: profile.away.wins, d: profile.away.draws, l: profile.away.losses },
    { m: 2, w: 0, d: 1, l: 1 }
  );
  assert.strictEqual(profile.wins + profile.draws + profile.losses, profile.matches);
});

test("adds goals from the team's own side of the score", () => {
  const profile = app.buildTeamProfile("Arsenal", matches, { index });
  // 2-0 홈 승(2득 0실), 1-1 원정(1득 1실), 3-1 원정 패(1득 3실), 0-1 홈 패(0득 1실)
  assert.strictEqual(profile.goalsFor, 4);
  assert.strictEqual(profile.goalsAgainst, 5);
});

test("compares favorite results against the same odds band", () => {
  const profile = app.buildTeamProfile("Arsenal", matches, { index });
  // 정배였던 경기는 1.40 두 경기뿐이고 한 번 이겼다. 그 구간 기저율은 60%.
  assert.strictEqual(profile.favorite.matches, 2);
  assert.strictEqual(profile.favorite.wins, 1);
  assert.strictEqual(Number(profile.favorite.expectedWins.toFixed(4)), 1.2);

  const summary = app.summarizeTeamProfile(profile);
  assert.strictEqual(summary.favoriteWinRate, 0.5);
  assert.strictEqual(Number(summary.favoriteExpectedRate.toFixed(4)), 0.6);
  assert.strictEqual(Number(summary.favoriteLift.toFixed(4)), -0.1);
});

test("matches a team through the name dictionary", () => {
  const korean = app.buildTeamProfile("아스널", matches, { index });
  assert.strictEqual(korean.matches, 4);
});

test("returns an empty profile for an unknown or blank team", () => {
  assert.strictEqual(app.buildTeamProfile("존재하지않는팀", matches, { index }).matches, 0);
  assert.strictEqual(app.buildTeamProfile("", matches, { index }).matches, 0);
  assert.strictEqual(app.buildTeamProfile(undefined, matches, { index }).matches, 0);
});

test("skips matches without a confirmed result", () => {
  const profile = app.buildTeamProfile("Arsenal", [
    { league: "E0", homeTeam: "Arsenal", awayTeam: "Chelsea", result: "UNKNOWN", homeOdds: "1.40", drawOdds: "4.5", awayOdds: "7.0" }
  ], { index });
  assert.strictEqual(profile.matches, 0);
});

test("summarizes an empty profile without dividing by zero", () => {
  const summary = app.summarizeTeamProfile(app.buildTeamProfile("Nobody", [], { index }));
  assert.strictEqual(summary.winRate, null);
  assert.strictEqual(summary.favoriteWinRate, null);
  assert.strictEqual(summary.favoriteLift, null);
  assert.strictEqual(summary.goalsForAverage, null);
});
