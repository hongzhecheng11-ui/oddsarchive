const fs = require("node:fs");
const path = require("node:path");
const tools = require("./football-data-pack-tools.js");
const collector = require("./collect-new-leagues-odds.js");

function main() {
  const input = process.argv[2];
  if (!input) throw new Error("검증한 별도 과거팩 JSON 경로가 필요합니다.");
  const source = JSON.parse(fs.readFileSync(input, "utf8"));
  const original = tools.loadFootballDataPack();
  const targets = ["MLS", "LIGA_MX", "ARGENTINA_PRIMERA", "BRAZIL_SERIE_A"];
  if (Object.keys(source.pack || {}).some(league => !targets.includes(league) || original[league])) {
    throw new Error("기존 팩에 있는 리그 또는 대상 외 리그를 추가할 수 없습니다.");
  }
  const compact = tools.buildFootballDataSearchPack(source.pack);
  if (compact.matches.length !== source.totalMatches || !compact.matches.length) throw new Error("변환 후 경기 수가 일치하지 않습니다.");
  const seen = new Set();
  for (const row of compact.matches) {
    const date = compact.dates[row[0]];
    const score = compact.scores[row[8]].match(/^(\d+)-(\d+)$/);
    const key = [date, compact.leagues[row[1]], compact.teams[row[2]], compact.teams[row[3]]].join("|");
    if (!/^\d{4}-\d{2}-\d{2}$/.test(date) || !score || row.slice(4, 7).some(value => !Number.isFinite(value) || value <= 100) || ![0, 1, 2].includes(row[7])) throw new Error(`잘못된 경기: ${key}`);
    const expected = Number(score[1]) > Number(score[2]) ? 0 : Number(score[1]) < Number(score[2]) ? 2 : 1;
    if (expected !== row[7] || seen.has(key)) throw new Error(`결과 불일치 또는 중복 경기: ${key}`);
    seen.add(key);
  }
  collector.assertUncoveredLeagues();
  const output = { ...compact, collectedAt: source.collectedAt, sources: source.sources, oddsType: "closing" };
  const target = path.join(__dirname, "..", "data", "free-extra-leagues-pack.json");
  fs.writeFileSync(`${target}.tmp`, JSON.stringify(output), "utf8");
  fs.renameSync(`${target}.tmp`, target);
  const current = collector.loadPack();
  collector.writePack(current);
  delete require.cache[require.resolve("../data/new-leagues-odds-pack.js")];
  const combined = require("../data/new-leagues-odds-pack.js");
  console.log(JSON.stringify({historical: compact.matches.length, collected: current.matches.length, combined: combined.matches.length, leagues: Object.fromEntries(compact.leagues.map((league, index) => [league, compact.matches.filter(row => row[1] === index).length]))}));
}

if (require.main === module) {
  try { main(); } catch (error) { console.error(error.message); process.exitCode = 1; }
}
