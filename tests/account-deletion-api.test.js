const assert = require("node:assert/strict");
const handler = require("../api/delete-account.js");

function createResponse() {
  return {
    code: 0,
    headers: {},
    status(code) { this.code = code; return this; },
    setHeader(name, value) { this.headers[name] = value; },
    json(body) { this.body = body; return this; }
  };
}

const originalEnv = {
  APP_ORIGIN: process.env.APP_ORIGIN,
  SUPABASE_URL: process.env.SUPABASE_URL,
  SUPABASE_PUBLISHABLE_KEY: process.env.SUPABASE_PUBLISHABLE_KEY,
  SUPABASE_SERVICE_ROLE_KEY: process.env.SUPABASE_SERVICE_ROLE_KEY
};
const originalFetch = global.fetch;

(async () => {
  process.env.APP_ORIGIN = "https://app.example.com";
  process.env.SUPABASE_URL = "https://project.supabase.co";
  process.env.SUPABASE_PUBLISHABLE_KEY = "publishable-test";
  process.env.SUPABASE_SERVICE_ROLE_KEY = "service-role-test";

  const calls = [];
  global.fetch = async (url, options = {}) => {
    calls.push({ url, options });
    if (url.endsWith("/auth/v1/user")) {
      return { ok: true, status: 200, json: async () => ({ id: "user-123" }) };
    }
    return { ok: true, status: 200, json: async () => ({}) };
  };

  const success = createResponse();
  await handler({
    method: "POST",
    headers: { origin: "https://app.example.com", authorization: "Bearer user-token" }
  }, success);
  assert.equal(success.code, 200);
  assert.deepEqual(success.body, { deleted: true });
  assert.equal(calls.length, 2);
  assert.equal(calls[0].options.headers.Authorization, "Bearer user-token");
  assert.equal(calls[1].options.method, "DELETE");
  assert.equal(calls[1].options.headers.Authorization, "Bearer service-role-test");
  assert(!JSON.stringify(success.body).includes("service-role-test"));

  const denied = createResponse();
  await handler({
    method: "POST",
    headers: { origin: "https://evil.example.com", authorization: "Bearer user-token" }
  }, denied);
  assert.equal(denied.code, 403);
  assert.equal(calls.length, 2);

  const noToken = createResponse();
  await handler({ method: "POST", headers: { origin: "https://app.example.com" } }, noToken);
  assert.equal(noToken.code, 401);

  console.log("PASS securely deletes the authenticated Supabase account");
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
