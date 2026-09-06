const assert = require("node:assert/strict");
const fs = require("node:fs");
const vm = require("node:vm");

const values = new Map([
  ["sb-project-auth-token-code-verifier", "private-verifier"],
  ["oddsArchiveFavorites", "[]"]
]);
const storage = {
  get length() { return values.size; },
  key(index) { return [...values.keys()][index] || null; },
  getItem(key) { return values.get(key) || null; }
};
const diagnostics = [];
let authCallback;
const sandbox = {
  module: { exports: {} },
  require,
  URLSearchParams,
  location: { search: "?code=private-code" },
  navigator: { userAgent: "Android" },
  matchMedia: () => ({ matches: true }),
  ODDS_ARCHIVE_FAVORITE_SYNC: require("../src/lib/favorite-sync.js"),
  setTimeout,
  clearTimeout
};
vm.runInNewContext(fs.readFileSync(require.resolve("../src/lib/auth.js"), "utf8"), sandbox);

const service = sandbox.module.exports.createAccountService({
  storage,
  fetchConfig: async () => ({ sdkUrl: "sdk", redirectTo: "https://app.test/index.html?auth=callback#account" }),
  sdkLoader: async () => {},
  clientFactory: () => ({ auth: {
    getSession: async () => ({ data: { session: null }, error: null }),
    onAuthStateChange(callback) { authCallback = callback; return {}; },
    signInWithOAuth: async () => ({ error: null })
  } }),
  onDiagnostic: (entry) => diagnostics.push(entry)
});

(async () => {
  await service.initialize();
  await service.signInWithGoogle();
  authCallback("SIGNED_IN", { user: { id: "private-user" } });

  const created = diagnostics.find((entry) => entry.stage === "client_created");
  const checked = diagnostics.find((entry) => entry.stage === "session_checked");
  const event = diagnostics.find((entry) => entry.stage === "auth_event");
  assert.deepEqual(JSON.parse(JSON.stringify(created)), {
    stage: "client_created",
    callbackCode: true,
    callbackError: false,
    verifierPresent: true,
    sessionStored: false,
    android: true,
    standalone: true
  });
  assert.equal(checked.result, "empty");
  assert.equal(event.event, "SIGNED_IN");
  assert.doesNotMatch(JSON.stringify(diagnostics), /private-code|private-verifier|private-user/);
  console.log("PASS records only safe Android OAuth diagnostic flags");
})().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
