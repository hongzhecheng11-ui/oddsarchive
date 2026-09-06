const ALLOWED_TYPES = new Set(["view", "api_failure", "browser_error", "auth_diagnostic"]);
const ALLOWED_VIEWS = new Set(["search", "today", "detail", "saved", "account"]);
const AUTH_STAGES = new Set(["client_created", "oauth_start", "oauth_requested", "session_checked", "session_error", "auth_event"]);
const AUTH_RESULTS = new Set(["session", "empty", "error", "timeout", "requested"]);
const AUTH_EVENTS = new Set(["INITIAL_SESSION", "SIGNED_IN", "SIGNED_OUT", "TOKEN_REFRESHED"]);

function cleanText(value, maxLength = 80) {
  return String(value || "").replace(/[^a-zA-Z0-9_.-]/g, "").slice(0, maxLength);
}

function normalizeEvent(event = {}) {
  const type = ALLOWED_TYPES.has(event.type) ? event.type : "";
  if (!type) return null;
  if (type === "view") {
    if (!ALLOWED_VIEWS.has(event.view)) return null;
    return { type, view: event.view };
  }
  if (type === "api_failure") {
    return {
      type,
      api: event.api === "live_odds" ? "live_odds" : "unknown",
      status: Math.max(0, Math.min(599, Number(event.status || 0))),
      reason: cleanText(event.reason, 24)
    };
  }
  if (type === "auth_diagnostic") {
    const stage = AUTH_STAGES.has(event.stage) ? event.stage : "";
    if (!stage) return null;
    return {
      type,
      stage,
      result: AUTH_RESULTS.has(event.result) ? event.result : "",
      event: AUTH_EVENTS.has(event.event) ? event.event : "",
      callbackCode: Boolean(event.callbackCode),
      callbackError: Boolean(event.callbackError),
      verifierPresent: Boolean(event.verifierPresent),
      sessionStored: Boolean(event.sessionStored),
      android: Boolean(event.android),
      standalone: Boolean(event.standalone)
    };
  }
  return {
    type,
    kind: event.kind === "unhandled_rejection" ? "unhandled_rejection" : "runtime_error",
    name: cleanText(event.name, 40),
    source: cleanText(event.source, 80),
    line: Math.max(0, Number(event.line || 0)),
    column: Math.max(0, Number(event.column || 0))
  };
}

module.exports = async function handler(request, response) {
  if (request.method !== "POST") return response.status(405).json({ error: "Method not allowed" });
  let payload = {};
  try {
    payload = typeof request.body === "string" ? JSON.parse(request.body || "{}") : (request.body || {});
  } catch (_error) {
    return response.status(400).json({ error: "Invalid payload" });
  }
  const events = (Array.isArray(payload.events) ? payload.events : [])
    .slice(0, 20)
    .map(normalizeEvent)
    .filter(Boolean);
  if (events.length > 0) {
    console.log(JSON.stringify({ type: "client_telemetry", recordedAt: new Date().toISOString(), events }));
  }
  return response.status(204).end();
};
