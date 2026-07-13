const assert = require("node:assert/strict");
const sync = require("../src/lib/favorite-sync.js");

const base = {
  favoriteId: "match:123",
  itemType: "match",
  sourceMatchId: "123",
  active: true,
  name: "로컬",
  criteria: { homeOdds: "1.85", drawOdds: "3.40", awayOdds: "4.10", tolerance: "0.05", league: "ALL" },
  match: { date: "2026-07-13", league: "KLEAGUE1", homeTeam: "Ulsan HD", awayTeam: "Jeonbuk", startTime: "19:30" }
};

const merged = sync.mergeFavoriteRecords({
  local: [{ ...base, updatedAt: "2026-07-13T01:00:00.000Z" }],
  cache: [{ ...base, name: "캐시", updatedAt: "2026-07-13T02:00:00.000Z" }],
  server: [{ ...base, name: "서버 최신", active: false, updatedAt: "2026-07-13T03:00:00.000Z" }]
});
assert.equal(merged.length, 1);
assert.equal(merged[0].name, "서버 최신");
assert.equal(merged[0].active, false);

const equalTime = sync.mergeFavoriteRecords({
  local: [{ ...base, name: "로컬", updatedAt: "2026-07-13T03:00:00.000Z" }],
  server: [{ ...base, name: "서버", updatedAt: "2026-07-13T03:00:00.000Z" }]
});
assert.equal(equalTime[0].name, "서버");

const direct = sync.normalizeFavoriteRecord({
  favoriteId: "odds:ALL|2.00|3.00|4.00|0.05|",
  active: true,
  criteria: { homeOdds: "2.00", drawOdds: "3.00", awayOdds: "4.00" },
  updatedAt: "2026-07-13T04:00:00.000Z",
  email: "must-not-copy@example.com"
});
assert.equal(direct.itemType, "odds_search");
assert.equal(Object.hasOwn(direct, "email"), false);

const row = sync.toDatabaseRow(merged[0], "user-a");
assert.equal(row.user_id, "user-a");
assert.equal(row.favorite_id, "match:123");
assert.equal(Object.hasOwn(row, "email"), false);

const queue = sync.coalesceSyncQueue([
  { ...base, name: "이전", updatedAt: "2026-07-13T01:00:00.000Z" },
  { ...base, name: "최신", updatedAt: "2026-07-13T05:00:00.000Z" }
]);
assert.equal(queue.length, 1);
assert.equal(queue[0].name, "최신");
assert.notEqual(sync.getAccountCacheKey("user-a"), sync.getAccountCacheKey("user-b"));

console.log("PASS merges favorites by latest update without account leakage");
