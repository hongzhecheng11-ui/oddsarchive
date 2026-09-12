const fs = require("fs");
const path = require("path");
const { fetchApiFootball, getApiKey } = require("./collect-api-odds.js");
const { normalizeStandings, serializePack } = require("./collect-team-context.js");

const ROOT_DIR = path.resolve(__dirname, "..");
const PACK_PATH = path.join(ROOT_DIR, "data", "team-context-pack.js");

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function getStandingsTargets(pack = {}) {
  const targets = new Map();
  for (const entry of Array.isArray(pack.dates) ? pack.dates : []) {
    for (const league of Array.isArray(entry.leagues) ? entry.leagues : []) {
      const leagueId = Number(league.leagueId || 0);
      const season = String(league.season || "").trim();
      if (!leagueId || !season) continue;
      targets.set(`${leagueId}|${season}`, { leagueId, season, key: league.key || "" });
    }
  }
  return [...targets.values()];
}

function applyStandingsUpdates(pack = {}, updates = new Map(), refreshedAt = new Date().toISOString()) {
  const dates = (Array.isArray(pack.dates) ? pack.dates : []).map((entry) => {
    let changed = false;
    const leagues = (Array.isArray(entry.leagues) ? entry.leagues : []).map((league) => {
      const standings = updates.get(`${Number(league.leagueId || 0)}|${String(league.season || "").trim()}`);
      if (!Array.isArray(standings) || standings.length === 0) return league;
      changed = true;
      return { ...league, standings, standingsUpdatedAt: refreshedAt };
    });
    return changed ? { ...entry, updatedAt: refreshedAt, leagues } : entry;
  });
  const primary = dates.find((entry) => entry.date === pack.date) || dates[0];
  return {
    ...pack,
    updatedAt: primary?.updatedAt || pack.updatedAt || refreshedAt,
    leagues: primary?.leagues || pack.leagues || [],
    dates,
    standingsRefresh: {
      updatedAt: refreshedAt,
      requested: updates.requested || updates.size,
      updated: updates.size,
      failures: updates.failures || 0
    }
  };
}

async function main() {
  const apiKey = getApiKey();
  if (!apiKey) throw new Error("API_FOOTBALL_KEY is required");
  delete require.cache[require.resolve(PACK_PATH)];
  const pack = require(PACK_PATH);
  const targets = getStandingsTargets(pack);
  if (targets.length === 0) throw new Error("No standings targets are available in team-context-pack.js");

  const updates = new Map();
  let failures = 0;
  for (const target of targets) {
    try {
      const response = await fetchApiFootball(
        `/standings?league=${target.leagueId}&season=${target.season}`,
        apiKey
      );
      const standings = normalizeStandings(response);
      if (standings.length === 0) throw new Error("empty standings response");
      updates.set(`${target.leagueId}|${target.season}`, standings);
    } catch (error) {
      failures += 1;
      console.warn(`${target.key || target.leagueId} standings refresh failed: ${error.message}`);
    }
    await wait(120);
  }

  if (updates.size === 0) throw new Error(`All standings refresh requests failed (${failures})`);
  updates.requested = targets.length;
  updates.failures = failures;
  const refreshedAt = new Date().toISOString();
  fs.writeFileSync(PACK_PATH, serializePack(applyStandingsUpdates(pack, updates, refreshedAt)), "utf8");
  console.log(`standings refreshed: requested=${targets.length} updated=${updates.size} failures=${failures}`);
}

if (require.main === module) {
  main().catch((error) => {
    console.error(error.message || error);
    process.exitCode = 1;
  });
}

module.exports = { applyStandingsUpdates, getStandingsTargets };
