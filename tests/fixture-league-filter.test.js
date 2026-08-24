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

const fixtures = [
  { league: "EPL", homeTeam: "Arsenal", awayTeam: "Chelsea" },
  { league: "EPL", homeTeam: "Everton", awayTeam: "Fulham" },
  { league: "KLEAGUE1", homeTeam: "Ulsan", awayTeam: "Jeonbuk" },
  { league: "LALIGA", homeTeam: "Elche", awayTeam: "Barcelona" },
  { league: "LALIGA", homeTeam: "Alaves", awayTeam: "Getafe" },
  { league: "LALIGA", homeTeam: "Osasuna", awayTeam: "Celta" }
];

test("keeps every fixture when no league is selected", () => {
  assert.strictEqual(app.filterFixturesByCategory(fixtures, "ALL").length, fixtures.length);
  assert.strictEqual(app.filterFixturesByCategory(fixtures, "").length, fixtures.length);
  assert.strictEqual(app.filterFixturesByCategory(fixtures).length, fixtures.length);
});

test("filters by a single league key", () => {
  const epl = app.filterFixturesByCategory(fixtures, "EPL");
  assert.strictEqual(epl.length, 2);
  assert(epl.every((match) => match.league === "EPL"));

  const kleague = app.filterFixturesByCategory(fixtures, "KLEAGUE1");
  assert.strictEqual(kleague.length, 1);
  assert.strictEqual(kleague[0].homeTeam, "Ulsan");
});

test("still honours the older category keys", () => {
  const asia = app.filterFixturesByCategory(fixtures, "ASIA");
  assert.strictEqual(asia.length, 1);
  assert.strictEqual(asia[0].league, "KLEAGUE1");

  const europe = app.filterFixturesByCategory(fixtures, "EUROPE");
  assert.strictEqual(europe.length, 5);
});

test("returns nothing for a league that is not playing", () => {
  assert.strictEqual(app.filterFixturesByCategory(fixtures, "SERIEA").length, 0);
});

test("lists only the leagues present, with a count for each", () => {
  const options = app.getDateFixtureLeagueOptions(fixtures);
  const keys = options.map((option) => option.key);
  assert.deepStrictEqual(keys.sort(), ["EPL", "KLEAGUE1", "LALIGA"]);

  const byKey = Object.fromEntries(options.map((option) => [option.key, option.count]));
  assert.strictEqual(byKey.EPL, 2);
  assert.strictEqual(byKey.LALIGA, 3);
  assert.strictEqual(byKey.KLEAGUE1, 1);
});

test("orders major leagues first, then by fixture count", () => {
  const options = app.getDateFixtureLeagueOptions(fixtures);
  assert.strictEqual(options[0].key, "EPL");
  assert.strictEqual(options[1].key, "LALIGA");
  assert.strictEqual(options[options.length - 1].key, "KLEAGUE1");
});

test("gives every option a display label", () => {
  const options = app.getDateFixtureLeagueOptions(fixtures);
  assert(options.every((option) => typeof option.label === "string" && option.label.length > 0));
});

test("ignores fixtures without a league", () => {
  const options = app.getDateFixtureLeagueOptions([
    { league: "", homeTeam: "A", awayTeam: "B" },
    { homeTeam: "C", awayTeam: "D" },
    { league: "EPL", homeTeam: "E", awayTeam: "F" }
  ]);
  assert.strictEqual(options.length, 1);
  assert.strictEqual(options[0].key, "EPL");
});

test("handles an empty fixture list", () => {
  assert.deepStrictEqual(app.getDateFixtureLeagueOptions([]), []);
  assert.deepStrictEqual(app.getDateFixtureLeagueOptions(), []);
});
