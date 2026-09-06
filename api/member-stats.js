const { verifyAdminRequest } = require("./live-odds.js");

function sendJson(response, statusCode, body) {
  response.statusCode = statusCode;
  response.setHeader("content-type", "application/json; charset=utf-8");
  response.setHeader("cache-control", "private, no-store");
  response.end(JSON.stringify(body));
}

function toCount(value) {
  const number = Number(value);
  return Number.isFinite(number) && number >= 0 ? Math.floor(number) : 0;
}

function toText(value, maxLength = 300) {
  return String(value || "").slice(0, maxLength);
}

function normalizeMemberStatistics(value = {}) {
  const recentMembers = Array.isArray(value.recentMembers) ? value.recentMembers : [];
  return {
    totalMembers: toCount(value.totalMembers),
    newToday: toCount(value.newToday),
    new7Days: toCount(value.new7Days),
    new14Days: toCount(value.new14Days),
    new30Days: toCount(value.new30Days),
    activeToday: toCount(value.activeToday),
    active7Days: toCount(value.active7Days),
    active14Days: toCount(value.active14Days),
    active30Days: toCount(value.active30Days),
    recentMembers: recentMembers.slice(0, 20).map((member) => ({
      displayName: toText(member?.displayName, 120),
      email: toText(member?.email, 320),
      createdAt: toText(member?.createdAt, 40),
      lastSignInAt: toText(member?.lastSignInAt, 40),
      provider: toText(member?.provider, 40),
      isAdmin: Boolean(member?.isAdmin)
    }))
  };
}

module.exports = async function handler(request, response) {
  if (request.method !== "GET") return sendJson(response, 405, { error: "Method not allowed" });

  const adminAccess = await verifyAdminRequest(request);
  if (!adminAccess.allowed) return sendJson(response, adminAccess.status, { error: adminAccess.error });

  const supabaseUrl = String(process.env.SUPABASE_URL || "").trim().replace(/\/$/, "");
  const serviceRoleKey = String(process.env.SUPABASE_SERVICE_ROLE_KEY || "").trim();
  if (!supabaseUrl || !serviceRoleKey) {
    return sendJson(response, 503, { error: "Member statistics are not configured" });
  }

  try {
    const statisticsResponse = await fetch(`${supabaseUrl}/rest/v1/rpc/get_member_statistics`, {
      method: "POST",
      headers: {
        apikey: serviceRoleKey,
        Authorization: `Bearer ${serviceRoleKey}`,
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: "{}"
    });
    const payload = await statisticsResponse.json().catch(() => ({}));
    if (!statisticsResponse.ok || !payload || typeof payload !== "object" || Array.isArray(payload)) {
      console.error(JSON.stringify({ type: "member_statistics_failure", status: statisticsResponse.status || 0 }));
      return sendJson(response, 502, { error: "Member statistics are temporarily unavailable" });
    }
    return sendJson(response, 200, { statistics: normalizeMemberStatistics(payload) });
  } catch (_error) {
    console.error(JSON.stringify({ type: "member_statistics_failure", status: 0 }));
    return sendJson(response, 502, { error: "Member statistics are temporarily unavailable" });
  }
};

module.exports.normalizeMemberStatistics = normalizeMemberStatistics;
