const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const handler = require("../api/auth-config.js");

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
  SUPABASE_PUBLISHABLE_KEY: process.env.SUPABASE_PUBLISHABLE_KEY
};
process.env.APP_ORIGIN = "https://app.example.com";
process.env.SUPABASE_URL = "https://project.supabase.co";
process.env.SUPABASE_PUBLISHABLE_KEY = "sb_publishable_test";

(async () => {
  const allowed = createResponse();
  await handler({ method: "GET", headers: { origin: "https://app.example.com" } }, allowed);
  assert.equal(allowed.code, 200);
  assert.equal(allowed.body.redirectTo, "https://app.example.com/index.html?auth=callback#account");
  assert.equal(Object.hasOwn(allowed.body, "serviceRoleKey"), false);

  const denied = createResponse();
  await handler({ method: "GET", headers: { origin: "https://evil.example.com" } }, denied);
  assert.equal(denied.code, 403);

  const sql = fs.readFileSync(path.join(__dirname, "..", "supabase", "schema.sql"), "utf8");
  assert.match(sql, /primary key \(user_id, favorite_id\)/i);
  assert.match(sql, /enable row level security/i);
  assert.match(sql, /force row level security/i);
  assert.match(sql, /auth\.uid\(\) = user_id/i);
  assert.doesNotMatch(sql, /email|profile_photo|display_name/i);
  assert.doesNotMatch(sql, /service_role/i);

  Object.entries(originalEnv).forEach(([key, value]) => {
    if (value === undefined) delete process.env[key];
    else process.env[key] = value;
  });
  console.log("PASS restricts auth config origins and enforces favorite RLS");
})().catch((error) => {
  Object.entries(originalEnv).forEach(([key, value]) => {
    if (value === undefined) delete process.env[key];
    else process.env[key] = value;
  });
  console.error(error);
  process.exitCode = 1;
});
