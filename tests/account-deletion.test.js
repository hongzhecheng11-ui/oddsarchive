const assert = require("node:assert/strict");
global.ODDS_ARCHIVE_FAVORITE_SYNC = require("../src/lib/favorite-sync.js");
const { createAccountService } = require("../src/lib/auth.js");

const localFavorite = { favoriteId: "odds:local", active: true, criteria: { homeOdds: "1.85" }, updatedAt: "2026-07-14T00:00:00.000Z" };
let accountCleared = false;
let signOutScope = "";
let deleteRequest = null;
const client = {
  auth: {
    async getSession() { return { data: { session: { user: { id: "user-a" }, access_token: "token-a" } } }; },
    onAuthStateChange() { return { data: { subscription: { unsubscribe() {} } } }; },
    async signOut(options) { signOutScope = options?.scope || ""; return { error: null }; }
  },
  from(table) {
    return {
      async select() { return { data: table === "app_admins" ? [] : [], error: null }; },
      async upsert() { return { error: null }; }
    };
  }
};
const service = createAccountService({
  storage: { getItem() { return null; }, setItem() {} },
  favorites: {
    getLocalRecords: () => [localFavorite],
    setAccountRecords() {},
    clearAccountRecords() { accountCleared = true; }
  },
  fetchConfig: async () => ({ sdkUrl: "sdk", supabaseUrl: "url", publishableKey: "key", redirectTo: "https://app.example.com/index.html#account" }),
  sdkLoader: async () => {},
  clientFactory: () => client,
  request: async (url, options) => {
    deleteRequest = { url, options };
    return { ok: true, json: async () => ({ deleted: true }) };
  }
});

(async () => {
  await service.initialize();
  const result = await service.deleteAccount();
  assert.deepEqual(result, { deleted: true });
  assert.equal(deleteRequest.url, "/api/delete-account");
  assert.equal(deleteRequest.options.headers.Authorization, "Bearer token-a");
  assert.equal(accountCleared, true);
  assert.equal(signOutScope, "local");
  assert.equal(service.getUserId(), "");
  assert.equal(localFavorite.active, true);
  console.log("PASS deletes the server account while preserving local favorites");
})().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
