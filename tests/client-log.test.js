const assert = require("node:assert/strict");
const handler = require("../api/client-log.js");

let statusCode = 0;
let logged = "";
const originalLog = console.log;
console.log = (message) => { logged = String(message); };
const response = {
  status(code) { statusCode = code; return this; },
  json(body) { this.body = body; return this; },
  end() { return this; }
};

handler({
  method: "POST",
  body: {
    userId: "must-not-be-recorded",
    events: [
      { type: "view", view: "today", email: "private@example.com" },
      { type: "api_failure", api: "live_odds", status: 502, reason: "http", query: "private search" }
    ]
  }
}, response).then(() => {
  console.log = originalLog;
  assert.equal(statusCode, 204);
  assert.match(logged, /client_telemetry/);
  assert.doesNotMatch(logged, /private|email|userId|query/);
  console.log("PASS stores allowlisted telemetry fields only");
}).catch((error) => {
  console.log = originalLog;
  throw error;
});
