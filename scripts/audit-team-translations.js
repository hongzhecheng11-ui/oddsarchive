const app = require("../app.js");

function loadApiOddsPackMatches() {
  try {
    return require("../data/api-odds-pack.js")?.matches || [];
  } catch (error) {
    return [];
  }
}

function parseCsvLine(line) {
  const values = [];
  let current = "";
  let quoted = false;

  for (const char of String(line || "")) {
    if (char === "\"") {
      quoted = !quoted;
      continue;
    }
    if (char === "," && !quoted) {
      values.push(current);
      current = "";
      continue;
    }
    current += char;
  }
  values.push(current);
  return values;
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
        if (homeIndex === -1 || awayIndex === -1) continue;

        for (const line of lines.slice(1)) {
          const values = parseCsvLine(line);
          matches.push({
            league,
            homeTeam: values[homeIndex],
            awayTeam: values[awayIndex]
          });
        }
      }
    }

    return matches;
  } catch (error) {
    return [];
  }
}

function getAuditMatches() {
  return [
    ...app.getBaseMatches(),
    ...loadApiOddsPackMatches(),
    ...loadFootballDataPackMatches()
  ];
}

function hasKorean(value) {
  return /[가-힣]/.test(String(value || ""));
}

function hasLatin(value) {
  return /[A-Za-z]/.test(String(value || ""));
}

function getTeamFields(match) {
  return [match?.homeTeam, match?.awayTeam, match?.teamName, match?.team].filter(Boolean);
}

function collectMissingTeamTranslationCandidates(matches) {
  const candidates = new Map();

  for (const match of Array.isArray(matches) ? matches : []) {
    for (const rawName of getTeamFields(match)) {
      const name = String(rawName || "").trim();
      if (!name || !hasLatin(name)) continue;

      const translated = app.translateTeamName(name);
      if (translated !== name || hasKorean(translated)) continue;

      const key = name.toLowerCase();
      const existing = candidates.get(key) || {
        name,
        count: 0,
        leagues: new Set()
      };
      existing.count += 1;
      if (match.league) existing.leagues.add(app.formatLeagueName(match.league));
      candidates.set(key, existing);
    }
  }

  return [...candidates.values()]
    .map((candidate) => ({
      name: candidate.name,
      count: candidate.count,
      leagues: [...candidate.leagues].sort()
    }))
    .sort((left, right) => right.count - left.count || left.name.localeCompare(right.name));
}

function main() {
  const limitArg = process.argv.find((arg) => arg.startsWith("--limit="));
  const limit = limitArg ? Number(limitArg.split("=")[1]) : 80;
  const asJson = process.argv.includes("--json");
  const matches = getAuditMatches();
  const candidates = collectMissingTeamTranslationCandidates(matches);
  const visible = Number.isFinite(limit) && limit > 0 ? candidates.slice(0, limit) : candidates;

  if (asJson) {
    console.log(JSON.stringify({ total: candidates.length, candidates: visible }, null, 2));
    return;
  }

  console.log(`Missing team translation candidates: ${candidates.length}`);
  console.log(`Checked matches: ${matches.length}`);
  console.log("");
  visible.forEach((candidate, index) => {
    const leagues = candidate.leagues.length > 0 ? candidate.leagues.join(", ") : "-";
    console.log(`${String(index + 1).padStart(2, " ")}. ${candidate.name} (${candidate.count}) [${leagues}]`);
  });
}

if (require.main === module) {
  main();
}

module.exports = {
  collectMissingTeamTranslationCandidates
};
