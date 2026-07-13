const fs = require("fs");
const {
  FOOTBALL_DATA_LEAGUES,
  PACK_PATH,
  RECENT_SEASONS,
  buildFootballDataUrl,
  compactFootballDataPack,
  convertExtraLeagueCsvToSeasonPack,
  isValidFootballDataCsv,
  loadFootballDataPack,
  serializeFootballDataPack
} = require("./football-data-pack-tools.js");

function getArg(name, fallback = "") {
  const prefix = `--${name}=`;
  const found = process.argv.slice(2).find((arg) => arg.startsWith(prefix));
  return found ? found.slice(prefix.length) : fallback;
}

function hasFlag(name) {
  return process.argv.slice(2).includes(`--${name}`);
}

function parseList(value, fallback) {
  if (!value) return fallback;
  return String(value).split(",").map((item) => item.trim().toUpperCase()).filter(Boolean);
}

async function downloadFootballDataCsv({ season, leagueKey, fetcher = fetch }) {
  const league = FOOTBALL_DATA_LEAGUES[leagueKey];
  if (!league) throw new Error(`지원하지 않는 football-data 리그입니다: ${leagueKey}`);

  const url = buildFootballDataUrl(season, league.code);
  const response = await fetcher(url);
  if (!response.ok) throw new Error(`${leagueKey} ${season} 다운로드 실패: ${response.status}`);

  const csvText = await response.text();
  if (!isValidFootballDataCsv(csvText)) throw new Error(`${leagueKey} ${season} CSV 형식이 올바르지 않습니다.`);
  return csvText;
}

async function downloadExtraLeagueSeasonPack({ leagueKey, fetcher = fetch }) {
  const league = FOOTBALL_DATA_LEAGUES[leagueKey];
  if (!league?.directUrl) throw new Error(`직접 CSV 리그가 아닙니다: ${leagueKey}`);

  const response = await fetcher(league.directUrl);
  if (!response.ok) throw new Error(`${leagueKey} 다운로드 실패: ${response.status}`);

  const csvText = await response.text();
  const seasonPack = convertExtraLeagueCsvToSeasonPack(csvText, leagueKey);
  if (Object.keys(seasonPack).length === 0) throw new Error(`${leagueKey} 변환 가능한 경기 데이터가 없습니다.`);
  return seasonPack;
}

async function updateFootballDataPack({
  leagues = Object.keys(FOOTBALL_DATA_LEAGUES),
  seasons = RECENT_SEASONS,
  force = false,
  fetcher = fetch
} = {}) {
  const pack = loadFootballDataPack();
  const changes = [];
  const skipped = [];

  for (const leagueKey of leagues) {
    const league = FOOTBALL_DATA_LEAGUES[leagueKey];
    if (!league) {
      skipped.push({ leagueKey, reason: "지원하지 않는 football-data 리그" });
      continue;
    }

    pack[leagueKey] = pack[leagueKey] || {};
    if (league.directUrl) {
      const seasonPack = await downloadExtraLeagueSeasonPack({ leagueKey, fetcher });
      const targetSeasons = seasons.length > 0 ? seasons : (league.targetSeasons || Object.keys(seasonPack));

      for (const season of targetSeasons) {
        if (!seasonPack[season]) {
          skipped.push({ leagueKey, season, reason: "원본 CSV에 시즌 없음" });
          continue;
        }

        if (!force && pack[leagueKey][season]) {
          skipped.push({ leagueKey, season, reason: "이미 보유" });
          continue;
        }

        pack[leagueKey][season] = seasonPack[season];
        changes.push({ leagueKey, season });
      }
      continue;
    }

    for (const season of seasons) {
      if (!force && pack[leagueKey][season]) {
        skipped.push({ leagueKey, season, reason: "이미 보유" });
        continue;
      }

      const csvText = await downloadFootballDataCsv({ season, leagueKey, fetcher });
      pack[leagueKey][season] = csvText;
      changes.push({ leagueKey, season });
    }
  }

  if (changes.length > 0) {
    fs.writeFileSync(PACK_PATH, serializeFootballDataPack(compactFootballDataPack(pack)), "utf8");
  }

  return { changes, skipped };
}

async function main() {
  const leagues = parseList(getArg("leagues"), Object.keys(FOOTBALL_DATA_LEAGUES));
  const seasons = parseList(getArg("seasons"), RECENT_SEASONS);
  const force = hasFlag("force");
  const result = await updateFootballDataPack({ leagues, seasons, force });

  console.log(`football-data 보충 완료: 추가/갱신 ${result.changes.length}건, 건너뜀 ${result.skipped.length}건`);
  for (const change of result.changes) {
    console.log(`- 추가: ${change.leagueKey} ${change.season}`);
  }
  if (result.changes.length === 0) {
    console.log("현재 대상 시즌은 이미 기본 데이터팩에 들어있습니다.");
  }
}

if (require.main === module) {
  main().catch((error) => {
    console.error(error.message || error);
    process.exitCode = 1;
  });
}

module.exports = {
  downloadFootballDataCsv,
  downloadExtraLeagueSeasonPack,
  getArg,
  hasFlag,
  parseList,
  updateFootballDataPack
};
