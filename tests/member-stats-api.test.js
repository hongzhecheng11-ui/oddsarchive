const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const handler = require("../api/member-stats.js");

function createResponse() {
  return {
    code: 0,
    headers: {},
    body: null,
    setHeader(name, value) { this.headers[name] = value; },
    end(value) { this.body = JSON.parse(value); }
  };
}

const originalEnv = {
  SUPABASE_URL: process.env.SUPABASE_URL,
  SUPABASE_PUBLISHABLE_KEY: process.env.SUPABASE_PUBLISHABLE_KEY,
  SUPABASE_SERVICE_ROLE_KEY: process.env.SUPABASE_SERVICE_ROLE_KEY
};
const originalFetch = global.fetch;

function makeFetch({ admin = false, statistics = null } = {}) {
  return async (url, options = {}) => {
    if (url.includes("/auth/v1/user")) return { ok: true, status: 200, json: async () => ({ id: "admin-user" }) };
    if (url.includes("/rest/v1/app_admins")) return { ok: true, status: 200, json: async () => admin ? [{ user_id: "admin-user" }] : [] };
    if (url.includes("/rpc/get_member_statistics")) {
      assert.equal(options.method, "POST");
      assert.equal(options.headers.Authorization, "Bearer service-role-test");
      return { ok: true, status: 200, json: async () => statistics };
    }
    throw new Error(`Unexpected request: ${url}`);
  };
}

(async () => {
  process.env.SUPABASE_URL = "https://project.supabase.co";
  process.env.SUPABASE_PUBLISHABLE_KEY = "publishable-test";
  process.env.SUPABASE_SERVICE_ROLE_KEY = "service-role-test";

  const anonymous = createResponse();
  await handler({ method: "GET", headers: {} }, anonymous);
  assert.equal(anonymous.statusCode, 401);
  assert.deepEqual(anonymous.body, { error: "Login required" });

  global.fetch = makeFetch({ admin: false });
  const regularUser = createResponse();
  await handler({ method: "GET", headers: { authorization: "Bearer regular-token" } }, regularUser);
  assert.equal(regularUser.statusCode, 403);
  assert.deepEqual(regularUser.body, { error: "Admin access required" });

  const recentMembers = Array.from({ length: 21 }, (_, index) => ({
    displayName: `Member ${index}`,
    email: `member${index}@example.com`,
    createdAt: "2026-09-06T01:00:00.000Z",
    lastSignInAt: "2026-09-06T02:00:00.000Z",
    provider: "google",
    isAdmin: index === 0,
    access_token: "must-not-leak"
  }));
  global.fetch = makeFetch({
    admin: true,
    statistics: {
      totalMembers: 23,
      newToday: 2,
      new7Days: 5,
      new14Days: 8,
      new30Days: 13,
      activeToday: 4,
      active7Days: 9,
      active14Days: 12,
      active30Days: 18,
      recentMembers
    }
  });
  const administrator = createResponse();
  await handler({ method: "GET", headers: { authorization: "Bearer admin-token" } }, administrator);
  assert.equal(administrator.statusCode, 200);
  assert.equal(administrator.body.statistics.totalMembers, 23);
  assert.equal(administrator.body.statistics.recentMembers.length, 20);
  assert.equal(administrator.body.statistics.recentMembers[0].isAdmin, true);
  assert(!JSON.stringify(administrator.body).includes("must-not-leak"));
  assert(!JSON.stringify(administrator.body).includes("service-role-test"));

  const sql = fs.readFileSync(path.join(__dirname, "..", "supabase", "member-stats.sql"), "utf8");
  assert.match(sql, /from auth\.users/i);
  assert.match(sql, /count\(\*\) filter/i);
  assert.match(sql, /last_sign_in_at/i);
  assert.match(sql, /limit 20/i);
  assert.match(sql, /security definer/i);
  assert.match(sql, /revoke all on function public\.get_member_statistics\(\) from authenticated/i);
  assert.match(sql, /grant execute on function public\.get_member_statistics\(\) to service_role/i);

  console.log("PASS protects member statistics and returns only the approved fields");
})().catch((error) => {
  console.error(error);
  process.exitCode = 1;
}).finally(() => {
  global.fetch = originalFetch;
  Object.entries(originalEnv).forEach(([key, value]) => {
    if (value === undefined) delete process.env[key];
    else process.env[key] = value;
  });
});
