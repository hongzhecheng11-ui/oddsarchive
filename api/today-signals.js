"use strict";

const liveOddsHandler = require("./live-odds.js");

function getSeoulDateKey(value = new Date()) {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Seoul",
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  }).format(value);
}

function loadAnalysisApp() {
  global.window = globalThis;
  require("../data/football-data-pack.js");
  require("../data/api-odds-pack.js");
  require("../data/new-leagues-odds-pack.js");
  require("../data/team-context-pack.js");
  require("../data/match-statistics-pack.js");
  return require("../app.js");
}

function serializeUpset(item = {}) {
  const assessment = item.assessment || {};
  const judgement = assessment.judgement || item.judgement || {};
  return {
    match: item.match || {},
    label: assessment.topLabel || item.topLabel || "이변 후보",
    sampleSize: Number(assessment.knownMatches || judgement.sampleSize || 0),
    favoriteKey: String(judgement.favorite?.key || "H"),
    selectionKey: String(assessment.strongestDirection?.key || "D"),
    favoriteHitRate: Number(judgement.favoriteHitRate || 0),
    marketFavoriteRate: Number(assessment.marketFavoriteRate || 0),
    lift: Number(assessment.favoriteFailureLift || 0),
    evidence: (assessment.evidence || item.evidence || []).slice(0, 3),
    riskLevel: Number(assessment.favoriteFailureLift || 0) >= 12 ? "high" : "medium",
    score: Number(assessment.topScore || item.topScore || 0)
  };
}

function serializeStrong(item = {}) {
  if (!item?.match) return null;
  const judgement = item.judgement || {};
  return {
    match: item.match,
    label: "정배 후보",
    sampleSize: Number(item.knownMatches || judgement.sampleSize || 0),
    favoriteKey: String(judgement.favorite?.key || "H"),
    selectionKey: String(judgement.favorite?.key || "H"),
    favoriteHitRate: Number(judgement.favoriteHitRate || 0),
    marketFavoriteRate: Number(item.marketFavoriteRate || 0),
    lift: Number(item.hitRateLift || 0),
    evidence: [],
    riskLevel: "low",
    score: Number(item.strongScore || 0)
  };
}

function buildTodaySignals(matches = [], app = loadAnalysisApp(), date = "") {
  const storedMatches = typeof app.getStoredFixturesForDate === "function"
    ? app.getStoredFixturesForDate(date, null)
    : [];
  const mergedMatches = typeof app.mergeStoredOddsIntoFixtures === "function"
    ? app.mergeStoredOddsIntoFixtures(Array.isArray(matches) ? matches : [], storedMatches)
    : (Array.isArray(matches) ? matches : []);
  const candidateMatches = mergedMatches.length > 0 ? mergedMatches : storedMatches;
  const majorMatches = app.getMajorTodayMatches(candidateMatches);
  const history = app.getSharedCandidateMatches();
  const assessed = app.assessTodayMatches(majorMatches, history);
  const upset = assessed
    .filter(({ assessment }) => assessment?.isTopCandidate)
    .sort((left, right) => Number(right.assessment?.topScore || 0) - Number(left.assessment?.topScore || 0))
    .map(serializeUpset);
  const strong = serializeStrong(app.getTodayStrongSignal(majorMatches, history, assessed));
  return {
    version: "today-signals-v1",
    date,
    generatedAt: new Date().toISOString(),
    eligibleMatchCount: majorMatches.length,
    upset,
    strong
  };
}

function invokeLiveOdds(query) {
  return new Promise((resolve, reject) => {
    const response = {
      statusCode: 200,
      headers: {},
      setHeader(name, value) { this.headers[name] = value; },
      status(code) { this.statusCode = code; return this; },
      json(body) { resolve({ statusCode: this.statusCode, body }); },
      end(body) {
        try { resolve({ statusCode: this.statusCode, body: JSON.parse(body || "{}") }); }
        catch (error) { reject(error); }
      }
    };
    Promise.resolve(liveOddsHandler({ method: "GET", query }, response)).catch(reject);
  });
}

async function handler(request, response) {
  if (request.method === "OPTIONS") return response.status(200).json({ ok: true });
  if (request.method !== "GET") return response.status(405).json({ error: "Method not allowed" });
  const date = String(request.query?.date || getSeoulDateKey()).slice(0, 10);
  try {
    const app = loadAnalysisApp();
    const storedMatches = app.getStoredFixturesForDate(date, null);
    if (storedMatches.length > 0) {
      const result = buildTodaySignals(storedMatches, app, date);
      response.setHeader("Cache-Control", "public, s-maxage=300, stale-while-revalidate=600");
      return response.status(200).json(result);
    }
    const live = await invokeLiveOdds({ date, league: "ALL" });
    if (live.statusCode !== 200) {
      return response.status(live.statusCode).json({
        error: live.body?.error || "오늘 경기 데이터를 불러오지 못했습니다."
      });
    }
    const result = buildTodaySignals(live.body?.matches || [], app, date);
    response.setHeader("Cache-Control", "public, s-maxage=300, stale-while-revalidate=600");
    return response.status(200).json(result);
  } catch (error) {
    return response.status(500).json({
      error: error instanceof Error ? error.message : "후보 계산에 실패했습니다."
    });
  }
}

module.exports = handler;
module.exports.buildTodaySignals = buildTodaySignals;
module.exports.serializeStrong = serializeStrong;
module.exports.serializeUpset = serializeUpset;
