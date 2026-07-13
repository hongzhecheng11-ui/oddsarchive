const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT_DIR = path.resolve(__dirname, "..");
const PACK_PATH = path.join(ROOT_DIR, "data", "football-data-pack.js");

const RECENT_SEASONS = ["2122", "2223", "2324", "2425", "2526"];

const FOOTBALL_DATA_LEAGUES = {
  EPL: { label: "EPL", code: "E0", source: "football-data.co.uk" },
  CHAMPIONSHIP: { label: "잉글랜드 챔피언십", code: "E1", source: "football-data.co.uk" },
  LALIGA: { label: "라리가", code: "SP1", source: "football-data.co.uk" },
  SERIEA: { label: "세리에A", code: "I1", source: "football-data.co.uk" },
  BUNDESLIGA: { label: "분데스리가", code: "D1", source: "football-data.co.uk" },
  LIGUE1: { label: "리그앙", code: "F1", source: "football-data.co.uk" },
  EREDIVISIE: { label: "에레디비시", code: "N1", source: "football-data.co.uk" },
  PRIMEIRA_LIGA: { label: "포르투갈 프리메이라리가", code: "P1", source: "football-data.co.uk" },
  SCOTTISH_PREMIERSHIP: { label: "스코틀랜드 프리미어십", code: "SC0", source: "football-data.co.uk" },
  BELGIAN_PRO_LEAGUE: { label: "벨기에 프로리그", code: "B1", source: "football-data.co.uk" },
  SUPER_LIG: { label: "튀르키예 쉬페르리그", code: "T1", source: "football-data.co.uk" },
  J1LEAGUE: {
    label: "J리그1",
    code: "JPN",
    source: "football-data.co.uk",
    directUrl: "https://www.football-data.co.uk/new/JPN.csv",
    targetSeasons: ["2021", "2022", "2023", "2024", "2025"],
    transform: "extraLeagueCsv"
  }
};

const TARGET_LEAGUES = {
  EPL: { label: "EPL", category: "유럽", historySource: "football-data.co.uk" },
  CHAMPIONSHIP: { label: "잉글랜드 챔피언십", category: "유럽", historySource: "football-data.co.uk/API" },
  LALIGA: { label: "라리가", category: "유럽", historySource: "football-data.co.uk" },
  SERIEA: { label: "세리에A", category: "유럽", historySource: "football-data.co.uk" },
  BUNDESLIGA: { label: "분데스리가", category: "유럽", historySource: "football-data.co.uk" },
  LIGUE1: { label: "리그앙", category: "유럽", historySource: "football-data.co.uk" },
  EREDIVISIE: { label: "에레디비시", category: "유럽", historySource: "football-data.co.uk" },
  PRIMEIRA_LIGA: { label: "포르투갈 프리메이라리가", category: "유럽", historySource: "football-data.co.uk" },
  SCOTTISH_PREMIERSHIP: { label: "스코틀랜드 프리미어십", category: "유럽", historySource: "football-data.co.uk" },
  BELGIAN_PRO_LEAGUE: { label: "벨기에 프로리그", category: "유럽", historySource: "football-data.co.uk" },
  SUPER_LIG: { label: "튀르키예 쉬페르리그", category: "유럽", historySource: "football-data.co.uk" },
  UCL: { label: "챔피언스리그", category: "유럽", historySource: "API/별도 CSV 필요" },
  UEL: { label: "유로파리그", category: "유럽", historySource: "API/별도 CSV 필요" },
  KLEAGUE1: { label: "K리그1", category: "아시아", historySource: "API/별도 CSV 필요" },
  KLEAGUE2: { label: "K리그2", category: "아시아", historySource: "API/별도 CSV 필요" },
  J1LEAGUE: { label: "J리그1", category: "아시아", historySource: "football-data.co.uk" },
  J2LEAGUE: { label: "J리그2", category: "아시아", historySource: "API/별도 CSV 필요" },
  ACL: { label: "AFC 챔피언스리그", category: "아시아", historySource: "API/별도 CSV 필요" },
  WORLDCUP: {
    label: "월드컵",
    category: "국가대항",
    historySource: "football-data.co.uk World Cup XLSX",
    targetSeasons: ["2014", "2018", "2022", "2026"]
  },
  WCQ: {
    label: "월드컵 예선",
    category: "국가대항",
    historySource: "football-data.co.uk World Cup XLSX",
    targetSeasons: ["2026"]
  },
  INTL_FRIENDLIES: { label: "국가대표 친선경기", category: "국가대항", historySource: "API/별도 CSV 필요" }
};

function loadFootballDataPack(filePath = PACK_PATH) {
  if (!fs.existsSync(filePath)) return {};
  const code = fs.readFileSync(filePath, "utf8");
  const context = { window: {} };
  vm.runInNewContext(code, context, { filename: filePath });
  return context.window.FOOTBALL_DATA_PACK || {};
}

function countCsvMatches(csvText = "") {
  return String(csvText || "")
    .split(/\r?\n/)
    .filter((line) => line.trim())
    .slice(1)
    .length;
}

function parseCsvLine(line = "") {
  const values = [];
  let current = "";
  let quoted = false;

  for (let index = 0; index < String(line).length; index += 1) {
    const char = line[index];
    const next = line[index + 1];

    if (char === '"' && quoted && next === '"') {
      current += '"';
      index += 1;
    } else if (char === '"') {
      quoted = !quoted;
    } else if (char === "," && !quoted) {
      values.push(current);
      current = "";
    } else {
      current += char;
    }
  }

  values.push(current);
  return values.map((value) => value.trim().replace(/^\uFEFF/, ""));
}

function toCsvValue(value = "") {
  const text = String(value ?? "");
  return /[",\r\n]/.test(text) ? `"${text.replace(/"/g, '""')}"` : text;
}

function normalizeExtraLeagueDate(value = "") {
  const text = String(value || "").trim();
  const match = text.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);
  if (!match) return text;
  return `${match[1].padStart(2, "0")}/${match[2].padStart(2, "0")}/${match[3]}`;
}

function pickFirstValue(values, indexes, names) {
  for (const name of names) {
    const index = indexes[name.toLowerCase()];
    const value = index === undefined ? "" : String(values[index] || "").trim();
    if (value) return value;
  }
  return "";
}

function convertExtraLeagueCsvToSeasonPack(csvText = "", leagueKey = "") {
  const lines = String(csvText || "")
    .replace(/^\uFEFF/, "")
    .split(/\r?\n/)
    .filter((line) => line.trim());
  const [headerLine, ...dataLines] = lines;
  const header = parseCsvLine(headerLine || "");
  const indexes = header.reduce((result, value, index) => {
    result[String(value || "").trim().toLowerCase()] = index;
    return result;
  }, {});

  const seasonRows = {};
  for (const line of dataLines) {
    const values = parseCsvLine(line);
    const season = pickFirstValue(values, indexes, ["Season"]);
    const homeTeam = pickFirstValue(values, indexes, ["Home", "HomeTeam"]);
    const awayTeam = pickFirstValue(values, indexes, ["Away", "AwayTeam"]);
    const date = normalizeExtraLeagueDate(pickFirstValue(values, indexes, ["Date"]));
    const homeOdds = pickFirstValue(values, indexes, ["B365CH", "AvgCH", "MaxCH", "PSCH"]);
    const drawOdds = pickFirstValue(values, indexes, ["B365CD", "AvgCD", "MaxCD", "PSCD"]);
    const awayOdds = pickFirstValue(values, indexes, ["B36CA", "B365CA", "AvgCA", "MaxCA", "PSCA"]);
    const row = [
      leagueKey,
      date,
      homeTeam,
      awayTeam,
      pickFirstValue(values, indexes, ["HG", "FTHG"]),
      pickFirstValue(values, indexes, ["AG", "FTAG"]),
      pickFirstValue(values, indexes, ["Res", "FTR"]) || "UNKNOWN",
      homeOdds,
      drawOdds,
      awayOdds
    ];

    if (!season || !date || !homeTeam || !awayTeam || !homeOdds || !drawOdds || !awayOdds) continue;
    seasonRows[season] = seasonRows[season] || [];
    seasonRows[season].push(row.map(toCsvValue).join(","));
  }

  return Object.fromEntries(Object.entries(seasonRows).map(([season, rows]) => [
    season,
    ["Div,Date,HomeTeam,AwayTeam,FTHG,FTAG,FTR,B365H,B365D,B365A", ...rows].join("\n")
  ]));
}

function summarizePack(pack = {}) {
  return Object.fromEntries(Object.entries(pack).map(([league, seasons]) => [
    league,
    Object.fromEntries(Object.entries(seasons || {}).map(([season, csvText]) => [
      season,
      countCsvMatches(csvText)
    ]))
  ]));
}

function getTargetCoverage(pack = {}, targetSeasons = RECENT_SEASONS) {
  const summary = summarizePack(pack);
  return Object.entries(TARGET_LEAGUES).map(([key, meta]) => {
    const leagueTargetSeasons = meta.targetSeasons || FOOTBALL_DATA_LEAGUES[key]?.targetSeasons || targetSeasons;
    const seasonCounts = summary[key] || {};
    const coveredSeasons = leagueTargetSeasons.filter((season) => Number(seasonCounts[season]) > 0);
    const missingSeasons = leagueTargetSeasons.filter((season) => !coveredSeasons.includes(season));
    const totalMatches = Object.values(seasonCounts).reduce((sum, count) => sum + (Number(count) || 0), 0);

    return {
      key,
      label: meta.label,
      category: meta.category,
      historySource: meta.historySource,
      totalMatches,
      coveredSeasons,
      missingSeasons,
      isCoveredForRecentTarget: missingSeasons.length === 0
    };
  });
}

function buildFootballDataUrl(seasonCode, leagueCode) {
  return `https://www.football-data.co.uk/mmz4281/${seasonCode}/${leagueCode}.csv`;
}

function isValidFootballDataCsv(csvText = "") {
  const text = String(csvText || "");
  const firstLine = text.split(/\r?\n/)[0] || "";
  return firstLine.includes("Div") && firstLine.includes("Date") && countCsvMatches(text) > 20;
}

function serializeFootballDataPack(pack = {}) {
  return `window.FOOTBALL_DATA_PACK = ${JSON.stringify(pack)};\n`;
}

module.exports = {
  FOOTBALL_DATA_LEAGUES,
  PACK_PATH,
  RECENT_SEASONS,
  TARGET_LEAGUES,
  buildFootballDataUrl,
  convertExtraLeagueCsvToSeasonPack,
  countCsvMatches,
  getTargetCoverage,
  isValidFootballDataCsv,
  loadFootballDataPack,
  serializeFootballDataPack,
  summarizePack
};
