"use strict";

const ODDS_TOLERANCE = 0.05;
const BUCKET_SIZE = 0.05;
const MIN_SAMPLE = 15;

function toFiniteOdds(value) {
  const odds = Number(value);
  return Number.isFinite(odds) && odds > 1 ? odds : null;
}

function normalizeBacktestMatch(match = {}) {
  const homeOdds = toFiniteOdds(match.homeOdds);
  const drawOdds = toFiniteOdds(match.drawOdds);
  const awayOdds = toFiniteOdds(match.awayOdds);
  const result = String(match.result || "").toUpperCase();
  const date = String(match.date || "").slice(0, 10);
  if (!homeOdds || !drawOdds || !awayOdds) return null;
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) return null;
  if (!["H", "D", "A"].includes(result)) return null;
  return { ...match, date, homeOdds, drawOdds, awayOdds, result };
}

function oddsBucket(value) {
  return Math.floor((Number(value) + 1e-9) / BUCKET_SIZE);
}

function bucketKey(home, draw, away) {
  return `${home}|${draw}|${away}`;
}

function addToIndex(index, match) {
  const key = bucketKey(
    oddsBucket(match.homeOdds),
    oddsBucket(match.drawOdds),
    oddsBucket(match.awayOdds)
  );
  const bucket = index.get(key) || [];
  bucket.push(match);
  index.set(key, bucket);
}

function contextKey(value) {
  return String(value || "").trim().toLowerCase();
}

function addToContextIndexes(teamIndex, leagueIndex, match) {
  for (const team of [match.homeTeam, match.awayTeam]) {
    const key = contextKey(team);
    if (!key) continue;
    const matches = teamIndex.get(key) || [];
    matches.push(match);
    teamIndex.set(key, matches);
  }
  const leagueKey = contextKey(match.league);
  if (leagueKey) {
    const matches = leagueIndex.get(leagueKey) || [];
    matches.push(match);
    leagueIndex.set(leagueKey, matches);
  }
}

function getPriorContextSource(teamIndex, leagueIndex, match) {
  const rows = [
    ...(teamIndex.get(contextKey(match.homeTeam)) || []).slice(-24),
    ...(teamIndex.get(contextKey(match.awayTeam)) || []).slice(-24),
    ...(leagueIndex.get(contextKey(match.league)) || []).slice(-500)
  ];
  return [...new Set(rows)];
}

function findPriorSimilarMatches(index, match, tolerance = ODDS_TOLERANCE) {
  const centers = [
    oddsBucket(match.homeOdds),
    oddsBucket(match.drawOdds),
    oddsBucket(match.awayOdds)
  ];
  const matches = [];
  for (let homeOffset = -1; homeOffset <= 1; homeOffset += 1) {
    for (let drawOffset = -1; drawOffset <= 1; drawOffset += 1) {
      for (let awayOffset = -1; awayOffset <= 1; awayOffset += 1) {
        const bucket = index.get(bucketKey(
          centers[0] + homeOffset,
          centers[1] + drawOffset,
          centers[2] + awayOffset
        ));
        if (!bucket) continue;
        for (const prior of bucket) {
          if (
            Math.abs(prior.homeOdds - match.homeOdds) <= tolerance + 1e-9
            && Math.abs(prior.drawOdds - match.drawOdds) <= tolerance + 1e-9
            && Math.abs(prior.awayOdds - match.awayOdds) <= tolerance + 1e-9
          ) matches.push(prior);
        }
      }
    }
  }
  return matches;
}

function getFavoriteKey(match) {
  return [
    ["H", match.homeOdds],
    ["D", match.drawOdds],
    ["A", match.awayOdds]
  ].reduce((best, current) => (current[1] < best[1] ? current : best))[0];
}

function getScoreBand(score) {
  if (score < 40) return "0-39";
  if (score < 50) return "40-49";
  if (score < 60) return "50-59";
  if (score < 70) return "60-69";
  if (score < 80) return "70-79";
  return "80-100";
}

function summarizeRows(rows, keySelector) {
  const groups = new Map();
  for (const row of rows) {
    const key = keySelector(row);
    const group = groups.get(key) || { key, count: 0, upsetCount: 0, scoreTotal: 0, brierTotal: 0 };
    group.count += 1;
    group.upsetCount += row.actualUpset ? 1 : 0;
    group.scoreTotal += row.score;
    group.brierTotal += row.brier;
    groups.set(key, group);
  }
  return [...groups.values()].map((group) => ({
    ...group,
    upsetRate: group.count ? (group.upsetCount / group.count) * 100 : 0,
    averageScore: group.count ? group.scoreTotal / group.count : 0,
    brier: group.count ? group.brierTotal / group.count : 0
  }));
}

function summarizeCandidateDays(rows = []) {
  const byDate = new Map();
  for (const row of rows) {
    const dateRows = byDate.get(row.date) || [];
    dateRows.push(row);
    byDate.set(row.date, dateRows);
  }

  const dayRows = [...byDate.entries()].map(([date, matches]) => {
    const candidates = matches.filter((row) => row.isCandidate);
    return {
      date,
      matches: matches.length,
      candidates: candidates.length,
      actualCandidateHits: candidates.filter((row) => row.actualUpset).length,
      directionHits: candidates.filter((row) => row.directionKey && row.result === row.directionKey).length,
      naturalUpsets: matches.filter((row) => row.actualUpset).length
    };
  });
  const candidateDays = dayRows.filter((day) => day.candidates > 0);
  const noCandidateDays = dayRows.filter((day) => day.candidates === 0);
  const noCandidateMatches = noCandidateDays.reduce((sum, day) => sum + day.matches, 0);
  const noCandidateUpsets = noCandidateDays.reduce((sum, day) => sum + day.naturalUpsets, 0);
  const candidateCountDistribution = new Map();
  for (const day of dayRows) {
    candidateCountDistribution.set(day.candidates, (candidateCountDistribution.get(day.candidates) || 0) + 1);
  }

  return {
    evaluatedDays: dayRows.length,
    candidateDays: candidateDays.length,
    noCandidateDays: noCandidateDays.length,
    daysWithCandidateHit: candidateDays.filter((day) => day.actualCandidateHits > 0).length,
    daysWithDirectionHit: candidateDays.filter((day) => day.directionHits > 0).length,
    averageCandidatesOnCandidateDay: candidateDays.length > 0
      ? candidateDays.reduce((sum, day) => sum + day.candidates, 0) / candidateDays.length
      : 0,
    maxCandidatesOnDay: dayRows.reduce((max, day) => Math.max(max, day.candidates), 0),
    noCandidateMatches,
    noCandidateUpsets,
    noCandidateUpsetRate: noCandidateMatches > 0 ? (noCandidateUpsets / noCandidateMatches) * 100 : 0,
    candidateCountDistribution: [...candidateCountDistribution.entries()]
      .map(([candidateCount, days]) => ({ candidateCount, days }))
      .sort((left, right) => left.candidateCount - right.candidateCount),
    days: dayRows
  };
}

function runBacktest(matches, app, options = {}) {
  const minSample = Number(options.minSample || MIN_SAMPLE);
  const from = options.from || "0000-00-00";
  const to = options.to || "9999-99-99";
  const maxRows = Number(options.maxRows || 0);
  const useContext = options.context === true;
  const normalized = matches.map(normalizeBacktestMatch).filter(Boolean);
  const byDate = new Map();
  for (const match of normalized) {
    const group = byDate.get(match.date) || [];
    group.push(match);
    byDate.set(match.date, group);
  }

  const index = new Map();
  const teamIndex = new Map();
  const leagueIndex = new Map();
  const rows = [];
  let lowSampleCount = 0;
  let candidateChecks = 0;
  for (const date of [...byDate.keys()].sort()) {
    const dayMatches = byDate.get(date);
    const shouldEvaluate = date >= from && date <= to && (!maxRows || rows.length < maxRows);
    if (shouldEvaluate) {
      for (const match of dayMatches) {
        if (maxRows && rows.length >= maxRows) break;
        const priorMatches = findPriorSimilarMatches(index, match);
        candidateChecks += priorMatches.length;
        if (priorMatches.length < minSample) {
          lowSampleCount += 1;
          continue;
        }
        const breakdown = app.calculateResultBreakdown(priorMatches);
        const contextProfile = useContext && typeof app.getMatchContextProfile === "function"
          ? app.getMatchContextProfile(match, getPriorContextSource(teamIndex, leagueIndex, match))
          : null;
        const criteria = {
          homeOdds: match.homeOdds,
          drawOdds: match.drawOdds,
          awayOdds: match.awayOdds,
          league: match.league,
          homeTeam: match.homeTeam,
          awayTeam: match.awayTeam,
          tolerance: ODDS_TOLERANCE,
          contextAdjustment: Number(contextProfile?.adjustment || 0),
          contextSignals: contextProfile?.signals || [],
          contextConfidence: contextProfile?.confidence || ""
        };
        const judgement = app.calculateMatchJudgement(breakdown, criteria);
        const score = app.calculateAiUpsetScore(judgement, criteria, breakdown.knownMatches);
        if (!Number.isFinite(score)) continue;
        const actualUpset = match.result !== getFavoriteKey(match);
        const candidate = typeof app.assessTodayUpsetCandidate === "function"
          ? app.assessTodayUpsetCandidate(match, breakdown, contextProfile)
          : { isTopCandidate: false, topLabel: "", strongestDirection: null };
        const probability = score / 100;
        rows.push({
          date,
          league: String(match.league || "UNKNOWN"),
          score,
          scoreBand: getScoreBand(score),
          actualUpset,
          result: match.result,
          isCandidate: Boolean(candidate.isTopCandidate),
          candidateLabel: candidate.topLabel || "",
          directionKey: candidate.strongestDirection?.key || "",
          marketFailureRate: 100 - Number(candidate.marketFavoriteRate || 0),
          favoriteOdds: Number(candidate.judgement?.favoriteOdds || 0),
          favoriteFailureLift: Number(candidate.favoriteFailureLift || 0),
          directionExcess: Number(candidate.directionExcess || 0),
          contextAdjustment: Number(contextProfile?.adjustment || 0),
          evidenceCount: Number(candidate.evidence?.length || 0),
          scheduleSignalCount: Number(candidate.scheduleSignals?.length || 0),
          priorSample: priorMatches.length,
          brier: (probability - (actualUpset ? 1 : 0)) ** 2
        });
      }
    }

    // Add the whole day only after evaluation so same-day results cannot leak.
    for (const match of dayMatches) {
      addToIndex(index, match);
      addToContextIndexes(teamIndex, leagueIndex, match);
    }
  }

  const scoreBandOrder = ["0-39", "40-49", "50-59", "60-69", "70-79", "80-100"];
  const bands = summarizeRows(rows, (row) => row.scoreBand)
    .sort((a, b) => scoreBandOrder.indexOf(a.key) - scoreBandOrder.indexOf(b.key));
  const leagues = summarizeRows(rows, (row) => row.league)
    .sort((a, b) => b.count - a.count);
  const overall = summarizeRows(rows, () => "overall")[0] || {
    count: 0, upsetCount: 0, upsetRate: 0, averageScore: 0, brier: 0
  };
  const candidateRows = rows.filter((row) => row.isCandidate);
  const candidateSummary = summarizeRows(candidateRows, () => "candidates")[0] || {
    count: 0, upsetCount: 0, upsetRate: 0, averageScore: 0, brier: 0
  };
  candidateSummary.per15Matches = rows.length > 0 ? (candidateRows.length / rows.length) * 15 : 0;
  candidateSummary.directionHits = candidateRows.filter((row) => row.directionKey && row.result === row.directionKey).length;
  candidateSummary.directionHitRate = candidateRows.length > 0
    ? (candidateSummary.directionHits / candidateRows.length) * 100
    : 0;
  candidateSummary.marketFailureRate = candidateRows.length > 0
    ? candidateRows.reduce((sum, row) => sum + row.marketFailureRate, 0) / candidateRows.length
    : 0;
  candidateSummary.marketLift = candidateSummary.upsetRate - candidateSummary.marketFailureRate;
  const candidateLabels = summarizeRows(candidateRows, (row) => row.candidateLabel)
    .sort((left, right) => right.count - left.count);
  const dailyCandidateValidation = summarizeCandidateDays(rows);
  const candidateEvidence = summarizeRows(candidateRows, (row) => (
    row.evidenceCount >= 3 ? "3+ signals" : `${row.evidenceCount} signals`
  )).sort((left, right) => left.key.localeCompare(right.key));
  const candidateOddsBands = summarizeRows(candidateRows, (row) => (
    row.favoriteOdds <= 1.6 ? "1.20-1.60" : row.favoriteOdds <= 2 ? "1.61-2.00" : "2.01+"
  )).sort((left, right) => left.key.localeCompare(right.key));
  const auditSelection = (label, predicate) => {
    const selected = rows.filter(predicate);
    const summary = summarizeRows(selected, () => label)[0] || { count: 0, upsetRate: 0 };
    const marketRate = selected.length > 0
      ? selected.reduce((sum, row) => sum + row.marketFailureRate, 0) / selected.length
      : 0;
    return { label, count: selected.length, upsetRate: summary.upsetRate, marketRate, lift: summary.upsetRate - marketRate };
  };
  const thresholdAudit = [
    auditSelection("major-balanced", (row) => row.favoriteOdds >= 1.2 && row.favoriteOdds <= 1.6 && row.favoriteFailureLift >= 8 && row.directionExcess >= 5 && row.contextAdjustment >= 5),
    auditSelection("major-strong", (row) => row.favoriteOdds >= 1.2 && row.favoriteOdds <= 1.6 && row.favoriteFailureLift >= 12 && row.directionExcess >= 8 && row.contextAdjustment >= 8),
    auditSelection("major-schedule", (row) => row.favoriteOdds >= 1.2 && row.favoriteOdds <= 1.6 && row.favoriteFailureLift >= 8 && row.directionExcess >= 5 && row.scheduleSignalCount >= 1),
    auditSelection("major-score70", (row) => row.favoriteOdds >= 1.2 && row.favoriteOdds <= 1.6 && row.score >= 70),
    auditSelection("major-score80", (row) => row.favoriteOdds >= 1.2 && row.favoriteOdds <= 1.6 && row.score >= 80),
    auditSelection("unstable-balanced", (row) => row.favoriteOdds > 1.6 && row.favoriteOdds <= 2 && row.favoriteFailureLift >= 10 && row.directionExcess >= 6 && row.contextAdjustment >= 8),
    auditSelection("unstable-strong", (row) => row.favoriteOdds > 1.6 && row.favoriteOdds <= 2 && row.favoriteFailureLift >= 14 && row.directionExcess >= 10 && row.contextAdjustment >= 10),
    auditSelection("unstable-schedule", (row) => row.favoriteOdds > 1.6 && row.favoriteOdds <= 2 && row.favoriteFailureLift >= 10 && row.directionExcess >= 6 && row.scheduleSignalCount >= 1),
    auditSelection("unstable-score70", (row) => row.favoriteOdds > 1.6 && row.favoriteOdds <= 2 && row.score >= 70),
    auditSelection("unstable-score80", (row) => row.favoriteOdds > 1.6 && row.favoriteOdds <= 2 && row.score >= 80)
  ];
  return {
    useContext,
    sourceMatches: normalized.length,
    evaluatedMatches: rows.length,
    lowSampleCount,
    candidateChecks,
    overall,
    candidateSummary,
    candidateLabels,
    dailyCandidateValidation,
    candidateEvidence,
    candidateOddsBands,
    thresholdAudit,
    bands,
    leagues,
    rows
  };
}

function parseArgs(argv) {
  return argv.reduce((options, arg) => {
    if (arg === "--context") options.context = true;
    const match = /^--(from|to|max)=(.+)$/.exec(arg);
    if (match) options[match[1] === "max" ? "maxRows" : match[1]] = match[2];
    return options;
  }, {});
}

function formatPercent(value) {
  return `${Number(value || 0).toFixed(1)}%`;
}

function printReport(report) {
  console.log(`AI analysis backtest (prior-date data only, odds tolerance +/-0.05, context ${report.useContext ? "on" : "off"})`);
  console.log(`Source completed matches: ${report.sourceMatches}`);
  console.log(`Evaluated (sample >= ${MIN_SAMPLE}): ${report.evaluatedMatches}`);
  console.log(`Skipped for low sample: ${report.lowSampleCount}`);
  console.log(`Overall: score ${report.overall.averageScore.toFixed(1)}, actual upset ${formatPercent(report.overall.upsetRate)}, Brier ${report.overall.brier.toFixed(4)}`);
  console.log(`Dynamic candidates: ${report.candidateSummary.count} (${report.candidateSummary.per15Matches.toFixed(2)} per 15 matches), actual upset ${formatPercent(report.candidateSummary.upsetRate)}, market baseline ${formatPercent(report.candidateSummary.marketFailureRate)}, lift ${formatPercent(report.candidateSummary.marketLift)}, direction hit ${formatPercent(report.candidateSummary.directionHitRate)}`);
  for (const label of report.candidateLabels) {
    console.log(`  ${label.key}: n=${label.count}, actual=${formatPercent(label.upsetRate)}`);
  }
  const daily = report.dailyCandidateValidation;
  console.log(`Candidate days: ${daily.candidateDays}/${daily.evaluatedDays}, no-candidate days: ${daily.noCandidateDays}, days with >=1 actual hit: ${daily.daysWithCandidateHit}, days with direction hit: ${daily.daysWithDirectionHit}`);
  console.log(`Candidates on issued days: avg ${daily.averageCandidatesOnCandidateDay.toFixed(2)}, max ${daily.maxCandidatesOnDay}; no-candidate-day natural upset rate: ${formatPercent(daily.noCandidateUpsetRate)}`);
  console.log(`Daily candidate distribution: ${daily.candidateCountDistribution.map((row) => `${row.candidateCount}=${row.days}d`).join(", ")}`);
  console.log("Candidate signal overlap:");
  for (const row of report.candidateEvidence) {
    console.log(`  ${row.key.padEnd(10)} n=${String(row.count).padStart(4)} actual=${formatPercent(row.upsetRate).padStart(6)}`);
  }
  console.log("Candidate favorite-odds bands:");
  for (const row of report.candidateOddsBands) {
    console.log(`  ${row.key.padEnd(10)} n=${String(row.count).padStart(4)} actual=${formatPercent(row.upsetRate).padStart(6)}`);
  }
  console.log("Candidate threshold audit:");
  for (const row of report.thresholdAudit) {
    console.log(`  ${row.label.padEnd(18)} n=${String(row.count).padStart(4)} actual=${formatPercent(row.upsetRate).padStart(6)} market=${formatPercent(row.marketRate).padStart(6)} lift=${formatPercent(row.lift).padStart(6)}`);
  }
  console.log("\nScore calibration:");
  for (const band of report.bands) {
    console.log(`  ${band.key.padEnd(6)} n=${String(band.count).padStart(5)} score=${band.averageScore.toFixed(1).padStart(4)} actual=${formatPercent(band.upsetRate).padStart(6)} brier=${band.brier.toFixed(4)}`);
  }
  console.log("\nLargest league samples:");
  for (const league of report.leagues.slice(0, 12)) {
    console.log(`  ${league.key.padEnd(20)} n=${String(league.count).padStart(5)} score=${league.averageScore.toFixed(1).padStart(4)} actual=${formatPercent(league.upsetRate).padStart(6)}`);
  }
}

function loadBundledMatches() {
  global.window = globalThis;
  require("../data/football-data-pack.js");
  require("../data/api-odds-pack.js");
  const app = require("../app.js");
  return { app, matches: app.getSearchableMatches() };
}

if (require.main === module) {
  const { app, matches } = loadBundledMatches();
  printReport(runBacktest(matches, app, parseArgs(process.argv.slice(2))));
}

module.exports = {
  findPriorSimilarMatches,
  getScoreBand,
  normalizeBacktestMatch,
  runBacktest,
  summarizeCandidateDays,
  summarizeRows
};
