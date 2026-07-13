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
  assert.strictEqual(tools.FOOTBALL_DATA_LEAGUES.CHAMPIONSHIP.code, "E1");
  assert.strictEqual(tools.FOOTBALL_DATA_LEAGUES.EREDIVISIE.code, "N1");
  assert.strictEqual(tools.FOOTBALL_DATA_LEAGUES.PRIMEIRA_LIGA.code, "P1");
  assert.strictEqual(tools.FOOTBALL_DATA_LEAGUES.SCOTTISH_PREMIERSHIP.code, "SC0");
  assert.strictEqual(tools.FOOTBALL_DATA_LEAGUES.BELGIAN_PRO_LEAGUE.code, "B1");
  assert.strictEqual(tools.FOOTBALL_DATA_LEAGUES.SUPER_LIG.code, "T1");
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
  const championship = coverage.find((item) => item.key === "CHAMPIONSHIP");
  const kleague2 = coverage.find((item) => item.key === "KLEAGUE2");
  const jleague2 = coverage.find((item) => item.key === "J2LEAGUE");
  const eredivisie = coverage.find((item) => item.key === "EREDIVISIE");
  const primeiraLiga = coverage.find((item) => item.key === "PRIMEIRA_LIGA");
  const scottishPremiership = coverage.find((item) => item.key === "SCOTTISH_PREMIERSHIP");
  const belgianProLeague = coverage.find((item) => item.key === "BELGIAN_PRO_LEAGUE");
  const superLig = coverage.find((item) => item.key === "SUPER_LIG");

  assert.strictEqual(epl.isCoveredForRecentTarget, true);
  assert.strictEqual(epl.totalMatches, 5);
  assert.strictEqual(ucl.isCoveredForRecentTarget, false);
  assert.deepStrictEqual(ucl.missingSeasons, tools.RECENT_SEASONS);
  assert(championship);
  assert(kleague2);
  assert(jleague2);
  assert(eredivisie);
  assert(primeiraLiga);
  assert(scottishPremiership);
  assert(belgianProLeague);
  assert(superLig);
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

test("converts worldwide football-data CSV into standard season packs", () => {
  const csv = [
    "Country,League,Season,Date,Time,Home,Away,HG,AG,Res,PSCH,PSCD,PSCA,MaxCH,MaxCD,MaxCA,AvgCH,AvgCD,AvgCA,BFECH,BFECD,BFECA,B365CH,B365CD,B36CA",
    "Japan, J1 League,2025,15/02/2025,05:00,Gamba Osaka,Vissel Kobe,2,3,A,1.90,3.40,4.00,1.94,4,5.5,1.71,3.62,4.55,,,,1.80,3.50,4.20",
    "Japan, J1 League,2025,16/02/2025,05:00,Sagan Tosu,Cerezo Osaka,0,0,D,3.31,3.48,2.29,3.31,3.48,2.29,3.01,3.23,2.24,,,,,,"
  ].join("\n");

  const pack = tools.convertExtraLeagueCsvToSeasonPack(csv, "J1LEAGUE");

  assert(pack["2025"].includes("Div,Date,HomeTeam,AwayTeam,FTHG,FTAG,FTR,B365H,B365D,B365A"));
  assert(pack["2025"].includes("J1LEAGUE,15/02/2025,Gamba Osaka,Vissel Kobe,2,3,A,1.80,3.50,4.20"));
  assert(pack["2025"].includes("J1LEAGUE,16/02/2025,Sagan Tosu,Cerezo Osaka,0,0,D,3.01,3.23,2.24"));
});
