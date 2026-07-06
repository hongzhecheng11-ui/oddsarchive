const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT_DIR = path.resolve(__dirname, "..");
const PACK_PATH = path.join(ROOT_DIR, "data", "football-data-pack.js");

const RECENT_SEASONS = ["2122", "2223", "2324", "2425", "2526"];

const FOOTBALL_DATA_LEAGUES = {
  EPL: { label: "EPL", code: "E0", source: "football-data.co.uk" },
  LALIGA: { label: "라리가", code: "SP1", source: "football-data.co.uk" },
  SERIEA: { label: "세리에A", code: "I1", source: "football-data.co.uk" },
  BUNDESLIGA: { label: "분데스리가", code: "D1", source: "football-data.co.uk" },
  LIGUE1: { label: "리그앙", code: "F1", source: "football-data.co.uk" }
};

const TARGET_LEAGUES = {
  EPL: { label: "EPL", category: "유럽", historySource: "football-data.co.uk" },
  LALIGA: { label: "라리가", category: "유럽", historySource: "football-data.co.uk" },
  SERIEA: { label: "세리에A", category: "유럽", historySource: "football-data.co.uk" },
  BUNDESLIGA: { label: "분데스리가", category: "유럽", historySource: "football-data.co.uk" },
  LIGUE1: { label: "리그앙", category: "유럽", historySource: "football-data.co.uk" },
  UCL: { label: "챔피언스리그", category: "유럽", historySource: "API/별도 CSV 필요" },
  UEL: { label: "유로파리그", category: "유럽", historySource: "API/별도 CSV 필요" },
  KLEAGUE1: { label: "K리그1", category: "아시아", historySource: "API/별도 CSV 필요" },
  J1LEAGUE: { label: "J리그1", category: "아시아", historySource: "API/별도 CSV 필요" },
  ACL: { label: "AFC 챔피언스리그", category: "아시아", historySource: "API/별도 CSV 필요" },
  WORLDCUP: { label: "월드컵", category: "국가대항", historySource: "API/별도 CSV 필요" },
  WCQ: { label: "월드컵 예선", category: "국가대항", historySource: "API/별도 CSV 필요" },
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
    const seasonCounts = summary[key] || {};
    const coveredSeasons = targetSeasons.filter((season) => Number(seasonCounts[season]) > 0);
    const missingSeasons = targetSeasons.filter((season) => !coveredSeasons.includes(season));
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
  countCsvMatches,
  getTargetCoverage,
  isValidFootballDataCsv,
  loadFootballDataPack,
  serializeFootballDataPack,
  summarizePack
};
