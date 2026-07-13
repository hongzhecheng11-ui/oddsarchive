const assert = require("node:assert/strict");
global.ODDS_ARCHIVE_FAVORITE_SYNC = require("../src/lib/favorite-sync.js");
const { createAccountService } = require("../src/lib/auth.js");

function createStorage() {
  const values = new Map();
  return {
    getItem(key) { return values.get(key) || null; },
    setItem(key, value) { values.set(key, String(value)); },
    removeItem(key) { values.delete(key); },
    keys() { return [...values.keys()]; }
  };
}

const storage = createStorage();
const localRecord = {
  favoriteId: "odds:local",
  active: true,
  criteria: { homeOdds: "1.85", drawOdds: "3.40", awayOdds: "4.10" },
  updatedAt: "2026-07-13T01:00:00.000Z"
};
let selectedRows = [{
  user_id: "user-a",
  favorite_id: "match:a-only",
  item_type: "match",
  source_match_id: "a-only",
  active: true,
  name: "A 계정",
  criteria: { homeOdds: "1.50", drawOdds: "4.00", awayOdds: "6.00" },
  favorite_updated_at: "2026-07-13T02:00:00.000Z"
}];
let failWrites = false;
let adminRows = [{ user_id: "user-a" }];
const upserts = [];
const fakeClient = {
  auth: {
    async getSession() { return { data: { session: { user: { id: "user-a" }, access_token: "token-a" } } }; },
    onAuthStateChange() { return { data: { subscription: { unsubscribe() {} } } }; },
    async signInWithOAuth() { return { error: null }; },
    async signOut() { return { error: null }; }
  },
  from(table) {
    return {
      async select() { return { data: table === "app_admins" ? adminRows : selectedRows, error: null }; },
      async upsert(rows) {
        if (failWrites) return { error: new Error("offline") };
        upserts.push(rows);
        return { error: null };
      }
    };
  }
};

let accountState = { userId: "", records: [] };
const favorites = {
  getLocalRecords: () => [localRecord],
  setAccountRecords(userId, records) { accountState = { userId, records }; },
  clearAccountRecords() { accountState = { userId: "", records: [] }; }
};
const statuses = [];
const service = createAccountService({
  storage,
  favorites,
  fetchConfig: async () => ({ sdkUrl: "sdk", supabaseUrl: "url", publishableKey: "key", redirectTo: "https://app.test/index.html?auth=callback#account" }),
  sdkLoader: async () => {},
  clientFactory: () => fakeClient,
  onStateChange: (state) => statuses.push(state.status)
});

(async () => {
  await service.initialize();
  assert.equal(accountState.userId, "user-a");
  assert.equal(service.getIsAdmin(), true);
  assert.equal(service.getAccessToken(), "token-a");
  assert.deepEqual(accountState.records.map((record) => record.favoriteId).sort(), ["match:a-only", "odds:local"]);
  assert(upserts.length > 0);

  selectedRows = [];
  adminRows = [];
  await service.synchronizeSession({ user: { id: "user-b" } });
  assert.equal(accountState.userId, "user-b");
  assert.equal(service.getIsAdmin(), false);
  assert.deepEqual(accountState.records.map((record) => record.favoriteId), ["odds:local"]);
  assert.notEqual(
    global.ODDS_ARCHIVE_FAVORITE_SYNC.getAccountCacheKey("user-a"),
    global.ODDS_ARCHIVE_FAVORITE_SYNC.getAccountCacheKey("user-b")
  );

  failWrites = true;
  const offlineResult = await service.syncAccountRecords([{ ...localRecord, name: "대기", updatedAt: "2026-07-13T03:00:00.000Z" }]);
  assert.equal(offlineResult.synced, false);
  assert(storage.keys().some((key) => key.includes("oddsArchiveFavoriteSyncQueue:user-b")));

  storage.removeItem(global.ODDS_ARCHIVE_FAVORITE_SYNC.getAccountCacheKey("user-b"));
  selectedRows = [{
    user_id: "user-b",
    favorite_id: "odds:local",
    item_type: "odds_search",
    source_match_id: "",
    active: true,
    name: "서버 이전값",
    criteria: localRecord.criteria,
    favorite_updated_at: "2026-07-13T02:00:00.000Z"
  }];
  failWrites = false;
  await service.synchronizeSession({ user: { id: "user-b" } });
  assert.equal(accountState.records.find((record) => record.favoriteId === "odds:local").name, "대기");

  await service.signOut();
  assert.equal(accountState.userId, "");
  assert(storage.keys().some((key) => key.includes("oddsArchiveAccountFavorites:user-a")));
  assert(statuses.includes("offline"));
  console.log("PASS restores sessions, separates accounts, and queues offline changes");
})().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
