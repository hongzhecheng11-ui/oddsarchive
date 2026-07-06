const {
  RECENT_SEASONS,
  getTargetCoverage,
  loadFootballDataPack,
  summarizePack
} = require("./football-data-pack-tools.js");

function formatSeasonList(seasons = []) {
  return seasons.length > 0 ? seasons.join(", ") : "-";
}

function main() {
  const pack = loadFootballDataPack();
  const summary = summarizePack(pack);
  const coverage = getTargetCoverage(pack, RECENT_SEASONS);

  console.log("기본 데이터팩 현황");
  for (const [league, seasons] of Object.entries(summary)) {
    const total = Object.values(seasons).reduce((sum, count) => sum + (Number(count) || 0), 0);
    console.log(`- ${league}: ${Object.keys(seasons).length}시즌 / ${total}경기`);
  }

  console.log("\n카테고리 리그 최근 5시즌 점검");
  for (const item of coverage) {
    const status = item.isCoveredForRecentTarget ? "충분" : "부족";
    console.log(
      `- ${item.label}(${item.key}) [${item.category}] ${status}: `
      + `보유 ${formatSeasonList(item.coveredSeasons)} / 부족 ${formatSeasonList(item.missingSeasons)} / 출처 ${item.historySource}`
    );
  }

  const missing = coverage.filter((item) => !item.isCoveredForRecentTarget);
  console.log(`\n요약: 최근 5시즌 기준 ${coverage.length - missing.length}/${coverage.length}개 리그가 기본팩에 충분합니다.`);
  if (missing.length > 0) {
    console.log(`추가 확보 필요: ${missing.map((item) => item.label).join(", ")}`);
  }
}

if (require.main === module) main();
