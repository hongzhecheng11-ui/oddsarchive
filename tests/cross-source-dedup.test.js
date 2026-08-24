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

test("keys a match by date and normalized team names", () => {
  const key = app.getCrossSourceMatchKey({ date: "2026-08-24", homeTeam: "Newcastle", awayTeam: "Liverpool" });
  assert(key.startsWith("2026-08-24|"));
  assert.strictEqual(key.split("|").length, 3);
});

test("gives the same key to both sources' spelling of one match", () => {
  const fromPack = app.getCrossSourceMatchKey({ date: "2026-08-24", homeTeam: "Man United", awayTeam: "Newcastle" });
  const fromApi = app.getCrossSourceMatchKey({ date: "2026-08-24", homeTeam: "Manchester United", awayTeam: "Newcastle" });
  assert.strictEqual(fromPack, fromApi);
});

test("ignores a timestamp suffix on the date", () => {
  const plain = app.getCrossSourceMatchKey({ date: "2026-08-24", homeTeam: "Arsenal", awayTeam: "Chelsea" });
  const withTime = app.getCrossSourceMatchKey({ date: "2026-08-24T18:30:00Z", homeTeam: "Arsenal", awayTeam: "Chelsea" });
  assert.strictEqual(plain, withTime);
});

test("returns no key when the match cannot be identified", () => {
  assert.strictEqual(app.getCrossSourceMatchKey({}), "");
  assert.strictEqual(app.getCrossSourceMatchKey({ date: "2026-08-24" }), "");
  assert.strictEqual(app.getCrossSourceMatchKey({ homeTeam: "Arsenal", awayTeam: "Chelsea" }), "");
  assert.strictEqual(app.getCrossSourceMatchKey({ date: "2026-08-24", homeTeam: "Arsenal", awayTeam: "" }), "");
});

test("drops the API row when the pack already has that match", () => {
  const pack = [{ date: "2026-05-01", league: "E0", homeTeam: "Arsenal", awayTeam: "Chelsea", homeOdds: "1.80" }];
  const api = [{ date: "2026-05-01", league: "EPL", homeTeam: "Arsenal", awayTeam: "Chelsea", homeOdds: "1.75" }];
  assert.deepStrictEqual(app.dropRowsCoveredByPack(pack, api), []);
});

test("keeps API rows the pack does not have", () => {
  const pack = [{ date: "2026-05-01", league: "E0", homeTeam: "Arsenal", awayTeam: "Chelsea" }];
  const api = [
    { date: "2026-05-02", league: "EPL", homeTeam: "Arsenal", awayTeam: "Chelsea" },
    { date: "2026-05-01", league: "EPL", homeTeam: "Chelsea", awayTeam: "Arsenal" },
    { date: "2026-05-01", league: "UCL", homeTeam: "Lyon", awayTeam: "Porto" }
  ];
  assert.strictEqual(app.dropRowsCoveredByPack(pack, api).length, 3);
});

test("keeps upcoming matches, which the pack never contains", () => {
  const pack = [{ date: "2026-05-01", league: "E0", homeTeam: "Arsenal", awayTeam: "Chelsea", result: "H" }];
  const api = [{ date: "2026-09-01", league: "EPL", homeTeam: "Arsenal", awayTeam: "Chelsea", result: "UNKNOWN" }];
  assert.strictEqual(app.dropRowsCoveredByPack(pack, api).length, 1);
});

test("keeps API rows that cannot be keyed rather than guessing", () => {
  const pack = [{ date: "2026-05-01", league: "E0", homeTeam: "Arsenal", awayTeam: "Chelsea" }];
  const api = [{ league: "EPL", homeTeam: "", awayTeam: "" }];
  assert.strictEqual(app.dropRowsCoveredByPack(pack, api).length, 1);
});

test("handles empty and missing inputs", () => {
  assert.deepStrictEqual(app.dropRowsCoveredByPack([], []), []);
  assert.deepStrictEqual(app.dropRowsCoveredByPack(), []);
  const api = [{ date: "2026-05-01", homeTeam: "Arsenal", awayTeam: "Chelsea" }];
  assert.strictEqual(app.dropRowsCoveredByPack([], api).length, 1);
});
