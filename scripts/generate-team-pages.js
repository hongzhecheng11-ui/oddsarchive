// SEO용 팀 기록 정적 페이지 생성기.
// "레알마드리드 배당 기록" 같은 검색어로 구글 유입을 노리는 정적 HTML 페이지를
// teams/ 아래에 만든다. 앱 자체(app.js)는 해시 라우팅 SPA라 검색엔진이 내용을
//못 읽으므로, 이 스크립트가 팀별로 실제 텍스트가 들어있는 별도 페이지를 미리 만든다.
//
// 실행: node scripts/generate-team-pages.js
// 출력: teams/<slug>.html, sitemap.xml, robots.txt

const fs = require("fs");
const path = require("path");
const app = require("../app.js");

const SITE_URL = "https://oddsarchive-football.vercel.app";
const OUTPUT_DIR = path.join(__dirname, "..", "teams");
const MIN_MATCHES = 20; // 표본이 너무 적은 팀은 내용이 빈약해 SEO에 안 좋으므로 제외.

function parseCsvLine(line) {
  const values = [];
  let current = "";
  let quoted = false;
  for (const char of String(line || "")) {
    if (char === "\"") { quoted = !quoted; continue; }
    if (char === "," && !quoted) { values.push(current); current = ""; continue; }
    current += char;
  }
  values.push(current);
  return values;
}

function loadApiOddsPackMatches() {
  try {
    return require("../data/api-odds-pack.js")?.matches || [];
  } catch (_error) {
    return [];
  }
}

function loadFootballDataPackMatches() {
  try {
    global.window = global.window || global;
    require("../data/football-data-pack.js");
    const pack = global.FOOTBALL_DATA_PACK || {};
    const matches = [];
    for (const [league, seasons] of Object.entries(pack)) {
      for (const csvText of Object.values(seasons || {})) {
        const lines = String(csvText || "").split(/\r?\n/).filter(Boolean);
        if (lines.length < 2) continue;
        const headers = parseCsvLine(lines[0]);
        const homeIndex = headers.indexOf("HomeTeam");
        const awayIndex = headers.indexOf("AwayTeam");
        const resultIndex = headers.indexOf("FTR");
        const homeGoalsIndex = headers.indexOf("FTHG");
        const awayGoalsIndex = headers.indexOf("FTAG");
        const dateIndex = headers.indexOf("Date");
        if (homeIndex === -1 || awayIndex === -1) continue;

        for (const line of lines.slice(1)) {
          const values = parseCsvLine(line);
          const homeGoals = values[homeGoalsIndex];
          const awayGoals = values[awayGoalsIndex];
          matches.push({
            league,
            date: values[dateIndex] || "",
            homeTeam: values[homeIndex],
            awayTeam: values[awayIndex],
            result: values[resultIndex] || "",
            score: homeGoals !== undefined && awayGoals !== undefined ? `${homeGoals}-${awayGoals}` : ""
          });
        }
      }
    }
    return matches;
  } catch (_error) {
    return [];
  }
}

function getAllMatches() {
  return [
    ...app.getBaseMatches(),
    ...loadApiOddsPackMatches(),
    ...loadFootballDataPackMatches()
  ];
}

function slugify(englishName, koreanName) {
  const base = englishName && /[A-Za-z]/.test(englishName) ? englishName : koreanName;
  return String(base || "team")
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    || "team";
}

function pct(value) {
  return value === null || value === undefined ? "-" : `${(value * 100).toFixed(1)}%`;
}

function escapeHtml(value) {
  return String(value || "").replace(/[&<>"']/g, (ch) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;", "'": "&#39;"
  }[ch]));
}

function renderTeamPage({ koreanName, englishName, summary, leagues }) {
  const title = `${koreanName} 배당 기록 · 승률 · 최근 성적 | 오즈아카이브`;
  const description = `${koreanName}(${englishName})의 과거 배당·경기 결과 기록. 전체 ${summary.matches}경기 ` +
    `${summary.wins}승 ${summary.draws}무 ${summary.losses}패, 승률 ${pct(summary.winRate)}. ` +
    `홈/원정 성적과 정배 기준 기저율을 무료로 검색해보세요.`;
  const canonical = `${SITE_URL}/teams/${slugify(englishName, koreanName)}.html`;
  const appLink = `${SITE_URL}/index.html#search`;

  return `<!doctype html>
<html lang="ko">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${escapeHtml(title)}</title>
<meta name="description" content="${escapeHtml(description)}">
<link rel="canonical" href="${canonical}">
<meta property="og:title" content="${escapeHtml(title)}">
<meta property="og:description" content="${escapeHtml(description)}">
<meta property="og:type" content="website">
<meta property="og:url" content="${canonical}">
<link rel="icon" href="../assets/app-icon.svg" type="image/svg+xml">
<style>
body{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;max-width:640px;margin:0 auto;padding:20px;color:#1c2b33;background:#fff}
h1{font-size:22px}
.sub{color:#6b7a82;font-size:13px;margin-bottom:16px}
table{width:100%;border-collapse:collapse;margin:12px 0}
td,th{padding:8px;border-bottom:1px solid #e5e9eb;text-align:left;font-size:14px}
.cta{display:block;margin-top:24px;padding:14px;border-radius:8px;background:#0f6e5c;color:#fff;text-align:center;text-decoration:none;font-weight:700}
.leagues{color:#6b7a82;font-size:12px}
footer{margin-top:32px;font-size:12px;color:#8a97a0}
footer a{color:#0f6e5c}
</style>
</head>
<body>
<h1>${escapeHtml(koreanName)} (${escapeHtml(englishName)}) 배당 기록</h1>
<p class="sub">${escapeHtml(leagues.join(", "))} 리그 기준 · 과거 ${summary.matches}경기 데이터</p>

<table>
<tr><th>전체 전적</th><td>${summary.wins}승 ${summary.draws}무 ${summary.losses}패 (승률 ${pct(summary.winRate)})</td></tr>
<tr><th>평균 득점</th><td>${summary.goalsForAverage === null ? "-" : summary.goalsForAverage.toFixed(2)}</td></tr>
<tr><th>평균 실점</th><td>${summary.goalsAgainstAverage === null ? "-" : summary.goalsAgainstAverage.toFixed(2)}</td></tr>
<tr><th>홈 전적</th><td>${summary.home.wins}승 ${summary.home.draws}무 ${summary.home.losses}패 (${summary.home.matches}경기)</td></tr>
<tr><th>원정 전적</th><td>${summary.away.wins}승 ${summary.away.draws}무 ${summary.away.losses}패 (${summary.away.matches}경기)</td></tr>
<tr><th>정배일 때 승률</th><td>${pct(summary.favoriteWinRate)} (기대치 ${pct(summary.favoriteExpectedRate)})</td></tr>
</table>

<a class="cta" href="${appLink}">오즈아카이브에서 ${escapeHtml(koreanName)} 배당 직접 검색하기 →</a>

<footer>
<p>오즈아카이브는 과거 축구 배당과 경기 결과를 검색·비교하는 무료 서비스입니다. 베팅 추천이나 결과 예측은 하지 않습니다.</p>
<p><a href="${SITE_URL}/">오즈아카이브 홈으로</a></p>
</footer>
</body>
</html>
`;
}

function main() {
  const matches = getAllMatches();
  console.log(`총 ${matches.length}경기 로드`);

  const teamNames = new Map(); // koreanName -> { englishName, leagues: Set }
  matches.forEach((match) => {
    [match.homeTeam, match.awayTeam].forEach((raw) => {
      const koreanName = app.formatTeamName(raw);
      if (!koreanName) return;
      const entry = teamNames.get(koreanName) || {
        englishName: app.translateTeamName(raw, "en"),
        leagues: new Set()
      };
      if (match.league) entry.leagues.add(app.formatLeagueName(match.league));
      teamNames.set(koreanName, entry);
    });
  });

  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  const pages = [];

  for (const [koreanName, { englishName, leagues }] of teamNames) {
    const profile = app.buildTeamProfile(koreanName, matches);
    if (profile.matches < MIN_MATCHES) continue;
    const summary = app.summarizeTeamProfile(profile);
    const slug = slugify(englishName, koreanName);
    const html = renderTeamPage({ koreanName, englishName, summary, leagues: [...leagues].sort() });
    fs.writeFileSync(path.join(OUTPUT_DIR, `${slug}.html`), html, "utf8");
    pages.push({ slug, koreanName, matches: profile.matches });
  }

  pages.sort((left, right) => right.matches - left.matches);

  const sitemapEntries = [
    `  <url><loc>${SITE_URL}/</loc><changefreq>daily</changefreq></url>`,
    ...pages.map((page) => `  <url><loc>${SITE_URL}/teams/${page.slug}.html</loc><changefreq>weekly</changefreq></url>`)
  ];
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemapEntries.join("\n")}\n</urlset>\n`;
  fs.writeFileSync(path.join(__dirname, "..", "sitemap.xml"), sitemap, "utf8");

  const robots = `User-agent: *\nAllow: /\nSitemap: ${SITE_URL}/sitemap.xml\n`;
  fs.writeFileSync(path.join(__dirname, "..", "robots.txt"), robots, "utf8");

  console.log(`팀 페이지 ${pages.length}개 생성 (표본 ${MIN_MATCHES}경기 미만 제외)`);
  console.log("상위 10개:", pages.slice(0, 10).map((p) => `${p.koreanName}(${p.matches})`).join(", "));
}

main();
