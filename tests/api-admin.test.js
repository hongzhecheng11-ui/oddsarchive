const assert = require("node:assert/strict");
const handler = require("../api/live-odds.js");

const originalEnv = {
  SUPABASE_URL: process.env.SUPABASE_URL,
  SUPABASE_PUBLISHABLE_KEY: process.env.SUPABASE_PUBLISHABLE_KEY
};
process.env.SUPABASE_URL = "https://project.supabase.co";
process.env.SUPABASE_PUBLISHABLE_KEY = "sb_publishable_test";

function makeRequest(token = "") {
  return { headers: token ? { authorization: `Bearer ${token}` } : {} };
}

function makeFetch({ admin = false } = {}) {
  return async (url) => {
    if (url.includes("/auth/v1/user")) {
      return { ok: true, async json() { return { id: "user-a" }; } };
    }
    return { ok: true, async json() { return admin ? [{ user_id: "user-a" }] : []; } };
  };
}

(async () => {
  const anonymous = await handler.verifyAdminRequest(makeRequest(), makeFetch({ admin: true }));
  assert.equal(anonymous.allowed, false);
  assert.equal(anonymous.status, 401);

  const regularUser = await handler.verifyAdminRequest(makeRequest("regular-token"), makeFetch({ admin: false }));
  assert.equal(regularUser.allowed, false);
  assert.equal(regularUser.status, 403);

  const admin = await handler.verifyAdminRequest(makeRequest("admin-token"), makeFetch({ admin: true }));
  assert.equal(admin.allowed, true);
  assert.equal(admin.userId, "user-a");

  console.log("PASS protects operational API access with Supabase admin membership");
})().catch((error) => {
  console.error(error);
  process.exitCode = 1;
}).finally(() => {
  Object.entries(originalEnv).forEach(([key, value]) => {
    if (value === undefined) delete process.env[key];
    else process.env[key] = value;
  });
});
