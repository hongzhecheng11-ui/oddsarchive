const assert = require("node:assert/strict");
const {
  getDirectOddsSearchCriteriaFromMatch,
  getFavoriteSyncRecords,
  loadSearchHistory,
  normalizeSearchHistoryEntries,
  recordOddsSearchHistory,
  toggleSearchHistoryFavorite
} = require("../app.js");

function createStorage() {
  const values = new Map();
  return {
    getItem(key) { return values.has(key) ? values.get(key) : null; },
    setItem(key, value) { values.set(key, String(value)); },
    removeItem(key) { values.delete(key); }
  };
}

const storage = createStorage();
const match = {
  id: "fixture-123",
  date: "2026-07-13",
  league: "KLEAGUE1",
  homeTeam: "Ulsan HD",
  awayTeam: "Jeonbuk Hyundai Motors",
  startTime: "19:30",
  homeOdds: "1.85",
  drawOdds: "3.40",
  awayOdds: "4.10"
};
const criteria = getDirectOddsSearchCriteriaFromMatch(match);
const first = recordOddsSearchHistory(criteria, storage);
const second = recordOddsSearchHistory({ ...criteria, homeOdds: "1.90" }, storage);

assert.equal(first.entry.id, second.entry.id);
assert.equal(loadSearchHistory(storage).length, 1);
assert.equal(second.entry.sourceMatchId, "fixture-123");

toggleSearchHistoryFavorite(second.entry.id, storage, "울산 경기");
let reloaded = loadSearchHistory(storage);
assert.equal(reloaded[0].favorite, true);
assert.equal(reloaded[0].favoriteId, "match:fixture-123");
assert.equal(reloaded[0].sourceMatch.homeTeam, "Ulsan HD");

let syncRecords = getFavoriteSyncRecords(storage);
assert.equal(syncRecords.length, 1);
assert.equal(syncRecords[0].itemType, "match");
assert.equal(syncRecords[0].active, true);

toggleSearchHistoryFavorite(second.entry.id, storage);
assert.equal(getFavoriteSyncRecords(storage)[0].active, false);
toggleSearchHistoryFavorite(second.entry.id, storage, "울산 경기");
assert.equal(getFavoriteSyncRecords(storage)[0].active, true);

const safeEntries = normalizeSearchHistoryEntries([
  { key: "ALL|2.00|3.00|4.00|0.05|", homeOdds: "2.00", drawOdds: "3.00", awayOdds: "4.00", sourceMatch: { homeTeam: "" } },
  null,
  { broken: true }
]);
assert.equal(safeEntries.length, 1);
assert.equal(safeEntries[0].sourceMatch, null);
assert.equal(safeEntries[0].favoriteId.startsWith("odds:"), true);

const noOddsMatch = {
  id: "fixture-no-odds",
  date: "2026-07-14",
  league: "EPL",
  homeTeam: "Arsenal",
  awayTeam: "Chelsea"
};
const noOddsCriteria = getDirectOddsSearchCriteriaFromMatch(noOddsMatch);
const noOddsEntry = recordOddsSearchHistory(noOddsCriteria, storage).entry;
toggleSearchHistoryFavorite(noOddsEntry.id, storage, "아스널 vs 첼시");
const noOddsFavorite = loadSearchHistory(storage).find((entry) => entry.sourceMatchId === "fixture-no-odds");
assert.equal(noOddsFavorite.favorite, true);
assert.equal(noOddsFavorite.favoriteId, "match:fixture-no-odds");

console.log("PASS keeps local favorites stable and ready for account merge");
