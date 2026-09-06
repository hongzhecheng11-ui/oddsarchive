(function initializeTelemetry(globalScope) {
  const ALLOWED_VIEWS = new Set(["search", "today", "detail", "saved", "account"]);
  const AUTH_STAGES = new Set(["client_created", "oauth_start", "oauth_requested", "session_checked", "session_error", "auth_event"]);
  const AUTH_RESULTS = new Set(["session", "empty", "error", "timeout", "requested"]);
  const AUTH_EVENTS = new Set(["INITIAL_SESSION", "SIGNED_IN", "SIGNED_OUT", "TOKEN_REFRESHED"]);
  const MAX_BATCH_SIZE = 20;
  const FLUSH_DELAY_MS = 10000;

  function createTelemetry(options = {}) {
    const endpoint = options.endpoint || "/api/client-log";
    const sender = options.sender || defaultSender;
    const schedule = options.schedule || ((callback, delay) => setTimeout(callback, delay));
    const enabled = options.enabled !== false;
    const queue = [];
    let flushTimer = null;
    let lastView = "";

    function enqueue(event) {
      if (!enabled || !event) return;
      queue.push({ ...event, at: new Date().toISOString() });
      if (queue.length >= MAX_BATCH_SIZE) {
        flush();
        return;
      }
      if (flushTimer === null) flushTimer = schedule(flush, FLUSH_DELAY_MS);
    }

    function recordView(view) {
      const normalizedView = String(view || "").replace(/^#/, "");
      if (!ALLOWED_VIEWS.has(normalizedView) || normalizedView === lastView) return;
      lastView = normalizedView;
      enqueue({ type: "view", view: normalizedView });
    }

    function recordApiFailure(details = {}) {
      enqueue({
        type: "api_failure",
        api: details.api === "live_odds" ? "live_odds" : "unknown",
        status: Number.isFinite(Number(details.status)) ? Number(details.status) : 0,
        reason: ["network", "http", "provider", "invalid_response"].includes(details.reason) ? details.reason : "unknown"
      });
    }

    function recordBrowserError(details = {}) {
      enqueue({
        type: "browser_error",
        kind: details.kind === "unhandled_rejection" ? "unhandled_rejection" : "runtime_error",
        name: String(details.name || "Error").slice(0, 40),
        source: String(details.source || "").split(/[\\/]/).pop().slice(0, 80),
        line: Math.max(0, Number(details.line || 0)),
        column: Math.max(0, Number(details.column || 0))
      });
    }

    function recordAuthDiagnostic(details = {}) {
      enqueue({
        type: "auth_diagnostic",
        stage: AUTH_STAGES.has(details.stage) ? details.stage : "",
        result: AUTH_RESULTS.has(details.result) ? details.result : "",
        event: AUTH_EVENTS.has(details.event) ? details.event : "",
        callbackCode: Boolean(details.callbackCode),
        callbackError: Boolean(details.callbackError),
        verifierPresent: Boolean(details.verifierPresent),
        sessionStored: Boolean(details.sessionStored),
        android: Boolean(details.android),
        standalone: Boolean(details.standalone)
      });
    }

    function flush({ useBeacon = false } = {}) {
      flushTimer = null;
      if (!enabled || queue.length === 0) return Promise.resolve(false);
      const events = queue.splice(0, MAX_BATCH_SIZE);
      return Promise.resolve(sender(endpoint, { events }, { useBeacon })).catch(() => false);
    }

    return { recordView, recordApiFailure, recordBrowserError, recordAuthDiagnostic, flush, getPendingCount: () => queue.length };
  }

  function defaultSender(endpoint, payload, { useBeacon = false } = {}) {
    const body = JSON.stringify(payload);
    if (useBeacon && typeof navigator !== "undefined" && typeof navigator.sendBeacon === "function") {
      return navigator.sendBeacon(endpoint, new Blob([body], { type: "application/json" }));
    }
    if (typeof fetch !== "function") return false;
    return fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body,
      keepalive: true,
      credentials: "omit"
    }).then(() => true);
  }

  const exportsObject = { createTelemetry };
  if (typeof module !== "undefined" && module.exports) module.exports = exportsObject;
  if (globalScope) globalScope.ODDS_ARCHIVE_TELEMETRY = exportsObject;
})(typeof window !== "undefined" ? window : globalThis);
