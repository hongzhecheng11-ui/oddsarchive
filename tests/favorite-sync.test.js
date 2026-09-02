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

const legacyDate = "2026. 7. 30. 오후 1:30:36";
const legacyIso = new Date(2026, 6, 30, 13, 30, 36).toISOString();
assert.equal(sync.toDatabaseRow({ ...base, favoriteUpdatedAt: legacyDate }, "user-a").favorite_updated_at, legacyIso);
assert.equal(sync.normalizeFavoriteRecord({ ...base, updatedAt: "2026. 7. 30. 오전 12:00:00" }).updatedAt,
  new Date(2026, 6, 30, 0, 0, 0).toISOString());
assert.equal(sync.normalizeFavoriteRecord({ ...base, updatedAt: "2026. 7. 30. 오후 12:00:00" }).updatedAt,
  new Date(2026, 6, 30, 12, 0, 0).toISOString());
assert.equal(sync.normalizeFavoriteRecord({ ...base, updatedAt: "2026-07-30T13:30:36+09:00" }).updatedAt,
  "2026-07-30T04:30:36.000Z");
for (const updatedAt of ["", "invalid", "2026. 2. 30. 오후 1:30:36", "2026. 7. 30. 오후 13:30:36", "2026. 7. 30. 오전 1:60:00"]) {
  assert.equal(sync.normalizeFavoriteRecord({ ...base, updatedAt }).updatedAt, new Date(0).toISOString());
}
assert.equal(sync.mergeFavoriteRecords({
  local: [{ ...base, updatedAt: "invalid", active: true }],
  server: [{ ...base, updatedAt: legacyIso, active: false }]
})[0].active, false);
assert.equal(sync.mergeFavoriteRecords({
  local: [{ ...base, updatedAt: legacyDate, name: "legacy latest" }],
  server: [{ ...base, updatedAt: "2026-07-29T00:00:00.000Z" }]
})[0].name, "legacy latest");
assert.equal(sync.mergeFavoriteRecords({
  local: [{ ...base, updatedAt: legacyDate }],
  server: [{ ...base, updatedAt: legacyIso, active: false }]
})[0].active, false);

console.log("PASS merges favorites by latest update without account leakage");
