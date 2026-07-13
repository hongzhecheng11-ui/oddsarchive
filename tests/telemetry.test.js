const assert = require("node:assert/strict");
const { createTelemetry } = require("../src/lib/telemetry.js");

const sent = [];
const telemetry = createTelemetry({
  sender: (_endpoint, payload) => sent.push(payload),
  schedule: () => 1
});

telemetry.recordView("today");
telemetry.recordView("today");
telemetry.recordView("unknown");
telemetry.recordView("detail");
telemetry.recordApiFailure({ api: "live_odds", status: 502, reason: "http" });
telemetry.recordBrowserError({ name: "TypeError", source: "https://example.com/app.js", line: 12, column: 4 });
telemetry.flush();

assert.equal(sent.length, 1);
assert.deepEqual(sent[0].events.map((event) => event.type), ["view", "view", "api_failure", "browser_error"]);
assert.deepEqual(sent[0].events.filter((event) => event.type === "view").map((event) => event.view), ["today", "detail"]);
assert.equal(sent[0].events[3].source, "app.js");
assert.equal(Object.hasOwn(sent[0].events[0], "userId"), false);
console.log("PASS records anonymous batched telemetry");
