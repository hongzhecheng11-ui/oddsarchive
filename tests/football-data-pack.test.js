const assert = require("assert");
const tools = require("../scripts/football-data-pack-tools.js");
const updater = require("../scripts/update-football-data-pack.js");

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

test("builds football-data URLs from season and league codes", () => {
  assert.strictEqual(
    tools.buildFootballDataUrl("2526", "E0"),
    "https://www.football-data.co.uk/mmz4281/2526/E0.csv"
  );
});

test("detects recent target coverage and missing expanded leagues", () => {
  const pack = {
    EPL: {
      "2122": "Div,Date\nE0,01/01/2022",
      "2223": "Div,Date\nE0,01/01/2023",
      "2324": "Div,Date\nE0,01/01/2024",
      "2425": "Div,Date\nE0,01/01/2025",
      "2526": "Div,Date\nE0,01/01/2026"
    }
  };

  const coverage = tools.getTargetCoverage(pack, tools.RECENT_SEASONS);
  const epl = coverage.find((item) => item.key === "EPL");
  const ucl = coverage.find((item) => item.key === "UCL");

  assert.strictEqual(epl.isCoveredForRecentTarget, true);
  assert.strictEqual(epl.totalMatches, 5);
  assert.strictEqual(ucl.isCoveredForRecentTarget, false);
  assert.deepStrictEqual(ucl.missingSeasons, tools.RECENT_SEASONS);
});

test("validates football-data CSV shape before writing to the pack", () => {
  const rows = Array.from({ length: 25 }, (_, index) => `E0,01/01/2026,Team${index},Team${index + 1}`).join("\n");
  assert.strictEqual(tools.isValidFootballDataCsv(`Div,Date,HomeTeam,AwayTeam\n${rows}`), true);
  assert.strictEqual(tools.isValidFootballDataCsv("not,a,football,data,file"), false);
});

test("serializes the default data pack as a browser global", () => {
  const content = tools.serializeFootballDataPack({ EPL: { "2526": "Div,Date\n" } });
  assert(content.startsWith("window.FOOTBALL_DATA_PACK = "));
  assert(content.includes('"EPL"'));
});

test("parses update target lists without network access", () => {
  assert.deepStrictEqual(updater.parseList("EPL,LALIGA", []), ["EPL", "LALIGA"]);
  assert.deepStrictEqual(updater.parseList("", ["EPL"]), ["EPL"]);
});
