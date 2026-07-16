const assert = require("node:assert/strict");
global.ODDS_ARCHIVE_FAVORITE_SYNC = require("../src/lib/favorite-sync.js");
const { createAccountService } = require("../src/lib/auth.js");

let oauthRequest = null;
let signOutOptions = null;
let accountCleared = false;
const client = {
  auth: {
    async getSession() {
      return { data: { session: { user: { id: "user-a" }, access_token: "token-a" } } };
    },
    onAuthStateChange() {
      return { data: { subscription: { unsubscribe() {} } } };
    },
    async signInWithOAuth(request) {
      oauthRequest = request;
      return { error: null };
    },
    async signOut(options) {
      signOutOptions = options;
      return { error: null };
    }
  },
  from() {
    return {
      async select() { return { data: [], error: null }; },
      async upsert() { return { error: null }; }
    };
  }
};

const service = createAccountService({
  favorites: {
    getLocalRecords: () => [],
    setAccountRecords() {},
    clearAccountRecords() { accountCleared = true; }
  },
  fetchConfig: async () => ({
    sdkUrl: "sdk",
    supabaseUrl: "url",
    publishableKey: "key",
    redirectTo: "https://app.example.com/index.html#account"
  }),
  sdkLoader: async () => {},
  clientFactory: () => client
});

(async () => {
  await service.initialize();
  await service.switchGoogleAccount();
  assert.deepEqual(signOutOptions, { scope: "local" });
  assert.equal(accountCleared, true);
  assert.equal(service.getUserId(), "");
  assert.equal(oauthRequest.provider, "google");
  assert.equal(oauthRequest.options.redirectTo, "https://app.example.com/index.html#account");
  assert.deepEqual(oauthRequest.options.queryParams, { prompt: "select_account" });
  console.log("PASS switches Google accounts without mixing account state");
})().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
