// 예전엔 jsDelivr 에서 받았는데, 외부 CDN 왕복이 로그인 대기 시간에 그대로 얹혔다.
// 같은 파일을 저장소에 두고 우리 도메인에서 준다. index.html 이 미리 불러오고
// 서비스워커가 캐시하므로 로그인 시점엔 대개 이미 로드돼 있다.
// 버전을 올릴 땐 vendor 파일과 index.html 의 script 태그도 같이 교체할 것.
const SUPABASE_SDK_URL = "/vendor/supabase-js-2.49.8.min.js";

function getAllowedOrigins() {
  return String(process.env.APP_ORIGIN || "")
    .split(",")
    .map((value) => value.trim().replace(/\/$/, ""))
    .filter((value) => /^https?:\/\//.test(value));
}

function getRequestOrigin(request) {
  const explicitOrigin = String(request.headers?.origin || "").trim().replace(/\/$/, "");
  if (explicitOrigin) return explicitOrigin;
  const forwardedHost = String(request.headers?.["x-forwarded-host"] || request.headers?.host || "").trim();
  const forwardedProtocol = String(request.headers?.["x-forwarded-proto"] || "https").trim();
  return forwardedHost ? `${forwardedProtocol}://${forwardedHost}`.replace(/\/$/, "") : "";
}

module.exports = async function handler(request, response) {
  if (request.method !== "GET") return response.status(405).json({ error: "Method not allowed" });
  const allowedOrigins = getAllowedOrigins();
  const requestOrigin = getRequestOrigin(request);
  if (!requestOrigin || !allowedOrigins.includes(requestOrigin)) {
    return response.status(403).json({ error: "Origin not allowed" });
  }
  const supabaseUrl = String(process.env.SUPABASE_URL || "").trim();
  const publishableKey = String(process.env.SUPABASE_PUBLISHABLE_KEY || "").trim();
  if (!supabaseUrl || !publishableKey) {
    return response.status(503).json({ error: "Login is not configured" });
  }
  response.setHeader("Cache-Control", "private, no-store");
  return response.status(200).json({
    supabaseUrl,
    publishableKey,
    appOrigin: requestOrigin,
    redirectTo: `${requestOrigin}/index.html?auth=callback#account`,
    sdkUrl: SUPABASE_SDK_URL
  });
};

module.exports.getAllowedOrigins = getAllowedOrigins;
module.exports.getRequestOrigin = getRequestOrigin;
