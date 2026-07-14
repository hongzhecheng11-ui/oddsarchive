"use strict";

const fs = require("fs");
const path = require("path");

const ROOT_DIR = path.resolve(__dirname, "..");
const AUDIT_PATH = path.join(ROOT_DIR, "data", "upset-candidate-audit.json");
const VALID_RESULTS = new Set(["H", "D", "A"]);

function getSeoulDateKey(value = new Date()) {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Seoul",
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  }).format(value);
}

function getFixtureKey(match = {}) {
  const fixtureId = String(match.fixtureId || match.id || "").trim();
  if (fixtureId) return `fixture:${fixtureId}`;
  return [match.date, match.league, match.homeTeam, match.awayTeam]
    .map((value) => String(value || "").trim().toLowerCase())
    .join("|");
}

function getFavoriteKey(match = {}) {
  return [
    ["H", Number(match.homeOdds)],
    ["D", Number(match.drawOdds)],
    ["A", Number(match.awayOdds)]
  ].filter(([, odds]) => Number.isFinite(odds) && odds > 1)
    .reduce((best, current) => (!best || current[1] < best[1] ? current : best), null)?.[0] || "";
}

function getDirectionKey(label = "") {
  if (String(label).includes("무승부")) return "D";
  if (String(label).includes("홈 역배")) return "H";
  if (String(label).includes("원정 역배")) return "A";
  return "";
}

function createEmptyAudit() {
  return {
    version: "upset-candidate-audit-v1",
    updatedAt: "",
    days: [],
    candidates: []
  };
}

function readAudit(filePath = AUDIT_PATH) {
  if (!fs.existsSync(filePath)) return createEmptyAudit();
  try {
    const parsed = JSON.parse(fs.readFileSync(filePath, "utf8"));
    return {
      ...createEmptyAudit(),
      ...parsed,
      days: Array.isArray(parsed.days) ? parsed.days : [],
      candidates: Array.isArray(parsed.candidates) ? parsed.candidates : []
    };
  } catch (_error) {
    throw new Error("이변 후보 추적 파일을 읽을 수 없습니다.");
  }
}

function hasCompleteOdds(match = {}) {
  return [match.homeOdds, match.drawOdds, match.awayOdds]
    .every((value) => Number.isFinite(Number(value)) && Number(value) > 1);
}

function buildCandidateSnapshot(item = {}, evaluatedAt = "") {
  const match = item.match || {};
  const candidateId = getFixtureKey(match);
  return {
    candidateId,
    fixtureId: String(match.fixtureId || match.id || "").trim(),
    date: String(match.date || "").slice(0, 10),
    league: String(match.league || "").trim(),
    homeTeam: String(match.homeTeam || "").trim(),
    awayTeam: String(match.awayTeam || "").trim(),
    homeOdds: String(match.homeOdds || "").trim(),
    drawOdds: String(match.drawOdds || "").trim(),
    awayOdds: String(match.awayOdds || "").trim(),
    favoriteKey: getFavoriteKey(match),
    candidateLabel: String(item.topLabel || "").trim(),
    predictedDirection: getDirectionKey(item.topLabel),
    evidence: (item.evidence || []).slice(0, 3).map(String),
    sampleSize: Number(item.judgement?.sampleSize || item.analysis?.breakdown?.knownMatches || 0),
    firstEvaluatedAt: evaluatedAt,
    lastSeenAt: evaluatedAt,
    result: "UNKNOWN",
    score: "",
    resolvedAt: "",
    favoriteFailed: null,
    directionHit: null
  };
}

function updateCandidateAudit(existingAudit, apiMatches, app, options = {}) {
  const evaluatedAt = options.evaluatedAt || new Date().toISOString();
  const today = options.today || getSeoulDateKey(new Date(evaluatedAt));
  const maxDate = options.maxDate || getSeoulDateKey(new Date(new Date(`${today}T00:00:00+09:00`).getTime() + (3 * 86400000)));
  const safeMatches = Array.isArray(apiMatches) ? apiMatches : [];
  const searchableMatches = options.searchableMatches || app.getSearchableMatches();
  const resultByKey = new Map(safeMatches.map((match) => [getFixtureKey(match), match]));
  const candidateMap = new Map((existingAudit.candidates || []).map((candidate) => [candidate.candidateId, { ...candidate }]));

  for (const [candidateId, candidate] of candidateMap) {
    const current = resultByKey.get(candidateId);
    const result = String(current?.result || "").toUpperCase();
    if (!VALID_RESULTS.has(result)) continue;
    candidate.result = result;
    candidate.score = String(current.score || "").trim();
    candidate.resolvedAt = candidate.resolvedAt || evaluatedAt;
    candidate.favoriteFailed = Boolean(candidate.favoriteKey && result !== candidate.favoriteKey);
    candidate.directionHit = candidate.predictedDirection ? result === candidate.predictedDirection : null;
  }

  const targetByDate = new Map();
  for (const match of safeMatches) {
    const date = String(match.date || "").slice(0, 10);
    if (date < today || date > maxDate || !hasCompleteOdds(match) || VALID_RESULTS.has(String(match.result || "").toUpperCase())) continue;
    const rows = targetByDate.get(date) || [];
    rows.push(match);
    targetByDate.set(date, rows);
  }

  const dayMap = new Map((existingAudit.days || []).map((day) => [day.date, { ...day }]));
  for (const [date, matches] of targetByDate) {
    const candidates = app.getTodayUpsetCandidates(matches, searchableMatches);
    const candidateIds = [];
    for (const item of candidates) {
      const snapshot = buildCandidateSnapshot(item, evaluatedAt);
      candidateIds.push(snapshot.candidateId);
      const existing = candidateMap.get(snapshot.candidateId);
      candidateMap.set(snapshot.candidateId, existing
        ? { ...existing, lastSeenAt: evaluatedAt }
        : snapshot);
    }
    const previousDay = dayMap.get(date);
    dayMap.set(date, {
      date,
      firstEvaluatedAt: previousDay?.firstEvaluatedAt || evaluatedAt,
      lastEvaluatedAt: evaluatedAt,
      eligibleMatchCount: matches.length,
      candidateIds
    });
  }

  const candidates = [...candidateMap.values()].sort((left, right) => (
    String(left.date).localeCompare(String(right.date)) || String(left.candidateId).localeCompare(String(right.candidateId))
  ));
  const resolved = candidates.filter((candidate) => VALID_RESULTS.has(candidate.result));
  return {
    version: "upset-candidate-audit-v1",
    updatedAt: evaluatedAt,
    summary: {
      trackedDays: dayMap.size,
      trackedCandidates: candidates.length,
      resolvedCandidates: resolved.length,
      favoriteFailures: resolved.filter((candidate) => candidate.favoriteFailed).length,
      directionHits: resolved.filter((candidate) => candidate.directionHit).length
    },
    days: [...dayMap.values()].sort((left, right) => String(left.date).localeCompare(String(right.date))),
    candidates
  };
}

function writeAudit(audit, filePath = AUDIT_PATH) {
  fs.writeFileSync(filePath, `${JSON.stringify(audit, null, 2)}\n`, "utf8");
}

function main() {
  global.window = globalThis;
  const apiPack = require("../data/api-odds-pack.js");
  require("../data/football-data-pack.js");
  const app = require("../app.js");
  const audit = updateCandidateAudit(readAudit(), apiPack.matches || [], app);
  writeAudit(audit);
  console.log(`이변 후보 추적: 날짜 ${audit.summary.trackedDays}일 / 후보 ${audit.summary.trackedCandidates}건 / 결과 확인 ${audit.summary.resolvedCandidates}건`);
}

if (require.main === module) main();

module.exports = {
  buildCandidateSnapshot,
  createEmptyAudit,
  getDirectionKey,
  getFavoriteKey,
  getFixtureKey,
  readAudit,
  updateCandidateAudit,
  writeAudit
};
