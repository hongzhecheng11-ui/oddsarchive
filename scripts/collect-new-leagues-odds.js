const fs = require("fs");
const path = require("path");
const vm = require("vm");
const collector = require("./collect-api-odds.js");

const root = path.resolve(__dirname, "..");
const packPath = path.join(root, "data", "new-leagues-odds-pack.js");
const existingApiPath = path.join(root, "data", "api-odds-pack.js");
const footballPath = path.join(root, "data", "football-data-pack.js");
const leagues = ["NATIONS_LEAGUE", "ACL_TWO", "MLS", "LIGA_MX", "ARGENTINA_PRIMERA", "BRAZIL_SERIE_A"];

function identity(match) {
  const fixtureId = String(match.fixtureId || "").trim();
  return fixtureId ? `fixture|${match.league}|${fixtureId}` : `teams|${match.date}|${match.league}|${String(match.homeTeam || "").toLowerCase()}|${String(match.awayTeam || "").toLowerCase()}`;
}

function assertUncoveredLeagues() {
  const existingApi = require(existingApiPath);
  const apiLeagues = new Set((existingApi.matches || []).map(match => match.league));
  const context = { window: {} };
  vm.runInNewContext(fs.readFileSync(footballPath, "utf8"), context, { filename: footballPath });
  const footballLeagues = new Set(context.window.FOOTBALL_DATA_SEARCH_PACK?.leagues || []);
  const covered = leagues.filter(league => apiLeagues.has(league) || footballLeagues.has(league));
  if (covered.length) throw new Error(`기존 데이터팩에 수록된 리그가 있어 별도 수집을 중단합니다: ${covered.join(", ")}`);
}

function loadPack() {
  if (!fs.existsSync(packPath)) return { version: "api-odds-pack-v1", updatedAt: "", collection: {}, matches: [] };
  delete require.cache[require.resolve(packPath)];
  return require(packPath);
}

function writePack(pack) {
  const content = `(function attachNewLeaguesOddsPack(root, factory) {\n  const pack = factory();\n  if (typeof module !== "undefined" && module.exports) module.exports = pack;\n  if (root) root.ODDS_ARCHIVE_NEW_LEAGUES_ODDS_PACK = pack;\n})(typeof window !== "undefined" ? window : globalThis, function createApiOddsPack() {\n  return ${JSON.stringify(pack, null, 2)};\n});\n`;
  const temporaryPath = `${packPath}.tmp`;
  fs.writeFileSync(temporaryPath, content, "utf8");
  fs.renameSync(temporaryPath, packPath);
}

async function main() {
  assertUncoveredLeagues();
  const apiKey = collector.getApiKey();
  if (!apiKey) throw new Error("API_FOOTBALL_KEY가 필요합니다.");
  const existing = loadPack();
  const dates = collector.getDateRange();
  const diagnostics = { successes: 0, failures: [] };
  const collected = [];
  for (const league of leagues) {
    for (const date of dates) {
      for (const leagueId of collector.getLeagueIds(league)) {
        try {
          const rows = await collector.collectLeagueDate({ apiKey, leagueKey: league, leagueId, date });
          diagnostics.successes += 1;
          const oddsUpdatedAt = new Date().toISOString();
          collected.push(...rows.map(row => ({ ...row, oddsUpdatedAt })));
          console.log(`${date} ${league} ${rows.length}건`);
        } catch (error) {
          diagnostics.failures.push(`${date} ${league}: ${error.message}`);
          console.warn(`${date} ${league} 수집 실패: ${error.message}`);
        }
      }
    }
  }
  const resultUpdates = await collector.collectFixtureResultUpdates({
    apiKey,
    existingMatches: existing.matches || [],
    leagueKeys: leagues,
    dates: collector.getResultUpdateDates(),
    diagnostics
  });
  collected.push(...resultUpdates);
  if (!diagnostics.successes && !collected.length) throw new Error("모든 API 요청이 실패해 데이터팩을 변경하지 않았습니다.");
  const merged = collector.mergeCollectedMatches(existing.matches || [], collected);
  const unique = new Set();
  for (const match of merged.matches) {
    if (!leagues.includes(match.league)) throw new Error(`대상 외 리그 발견: ${match.league}`);
    const key = identity(match);
    if (unique.has(key)) throw new Error(`중복 경기 발견: ${key}`);
    unique.add(key);
  }
  if (merged.matches.length < (existing.matches || []).length) throw new Error("기존 경기 수가 줄어 저장을 중단합니다.");
  const completedAt = new Date().toISOString();
  writePack({
    version: "api-odds-pack-v1",
    updatedAt: collected.length ? completedAt : (existing.updatedAt || ""),
    collection: {
      lastAttemptAt: completedAt,
      lastSuccessAt: completedAt,
      requestSuccesses: diagnostics.successes,
      requestFailures: diagnostics.failures.length,
      addedCount: merged.addedCount,
      updatedCount: merged.updatedCount,
      errors: diagnostics.failures.slice(0, 50)
    },
    matches: merged.matches
  });
  console.log(`별도 데이터팩 저장: 전체 ${merged.matches.length}건, 추가 ${merged.addedCount}건, 결과 갱신 ${merged.updatedCount}건`);
}

if (require.main === module) main().catch(error => { console.error(error.message || error); process.exitCode = 1; });

module.exports = { leagues, identity, assertUncoveredLeagues, loadPack, main };
