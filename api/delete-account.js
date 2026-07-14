const { getAllowedOrigins, getRequestOrigin } = require("./auth-config.js");

function getBearerToken(request) {
  const authorization = String(request.headers?.authorization || "");
  const match = authorization.match(/^Bearer\s+(.+)$/i);
  return match ? match[1].trim() : "";
}

async function readJson(response) {
  return response.json().catch(() => ({}));
}

module.exports = async function handler(request, response) {
  response.setHeader("Cache-Control", "private, no-store");
  if (request.method !== "POST") return response.status(405).json({ error: "Method not allowed" });

  const requestOrigin = getRequestOrigin(request);
  if (!requestOrigin || !getAllowedOrigins().includes(requestOrigin)) {
    return response.status(403).json({ error: "Origin not allowed" });
  }

  const supabaseUrl = String(process.env.SUPABASE_URL || "").replace(/\/$/, "");
  const publishableKey = String(process.env.SUPABASE_PUBLISHABLE_KEY || "").trim();
  const serviceRoleKey = String(process.env.SUPABASE_SERVICE_ROLE_KEY || "").trim();
  const accessToken = getBearerToken(request);
  if (!supabaseUrl || !publishableKey || !serviceRoleKey) {
    return response.status(503).json({ error: "Account deletion is not configured" });
  }
  if (!accessToken) return response.status(401).json({ error: "Authentication required" });

  try {
    const userResponse = await fetch(`${supabaseUrl}/auth/v1/user`, {
      headers: { apikey: publishableKey, Authorization: `Bearer ${accessToken}` }
    });
    const user = await readJson(userResponse);
    const userId = String(user?.id || "");
    if (!userResponse.ok || !userId) return response.status(401).json({ error: "Invalid session" });

    const deleteResponse = await fetch(`${supabaseUrl}/auth/v1/admin/users/${encodeURIComponent(userId)}`, {
      method: "DELETE",
      headers: { apikey: serviceRoleKey, Authorization: `Bearer ${serviceRoleKey}` }
    });
    if (!deleteResponse.ok) {
      console.error(JSON.stringify({ type: "account_deletion_failure", status: deleteResponse.status }));
      return response.status(502).json({ error: "Account deletion failed" });
    }
    return response.status(200).json({ deleted: true });
  } catch (_error) {
    console.error(JSON.stringify({ type: "account_deletion_failure", status: 0 }));
    return response.status(502).json({ error: "Account deletion service unavailable" });
  }
};

module.exports.getBearerToken = getBearerToken;
