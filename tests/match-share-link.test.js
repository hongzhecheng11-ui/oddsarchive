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

test("getMatchIdentity builds the same key for equivalent spelling/casing", () => {
  const a = app.getMatchIdentity({ date: "2026-08-27T10:00:00Z", league: "EPL", homeTeam: "Arsenal", awayTeam: "Chelsea" });
  const b = app.getMatchIdentity({ date: "2026-08-27", league: "EPL", homeTeam: " arsenal ", awayTeam: "CHELSEA" });
  assert.strictEqual(a, b);
});

test("getMatchIdentity gives different matches different keys", () => {
  const a = app.getMatchIdentity({ date: "2026-08-27", league: "EPL", homeTeam: "Arsenal", awayTeam: "Chelsea" });
  const b = app.getMatchIdentity({ date: "2026-08-28", league: "EPL", homeTeam: "Arsenal", awayTeam: "Chelsea" });
  assert.notStrictEqual(a, b);
});

test("findMatchByIdentity finds the match a share link points to", () => {
  const matches = [
    { date: "2026-08-27", league: "EPL", homeTeam: "Arsenal", awayTeam: "Chelsea" },
    { date: "2026-08-27", league: "EPL", homeTeam: "Liverpool", awayTeam: "Everton" }
  ];
  const identity = app.getMatchIdentity(matches[1]);
  const found = app.findMatchByIdentity(identity, matches);
  assert.strictEqual(found, matches[1]);
});

test("findMatchByIdentity returns null for an unknown or empty identity", () => {
  const matches = [{ date: "2026-08-27", league: "EPL", homeTeam: "Arsenal", awayTeam: "Chelsea" }];
  assert.strictEqual(app.findMatchByIdentity("2099-01-01|nope|a|b", matches), null);
  assert.strictEqual(app.findMatchByIdentity("", matches), null);
  assert.strictEqual(app.findMatchByIdentity(undefined, matches), null);
});

test("stripMatchShareParam removes only the share param, keeping the rest", () => {
  assert.strictEqual(app.stripMatchShareParam("?source=twa&m=2026-08-27%7Cepl%7Ca%7Cb"), "?source=twa");
  assert.strictEqual(app.stripMatchShareParam("?m=only"), "");
  assert.strictEqual(app.stripMatchShareParam(""), "");
});
