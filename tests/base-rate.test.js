const assert = require("assert");
const app = require("../app.js");

function test(name, fn) {
  try {
    fn();
    console.log(`PASS ${name}`);
  } catch (error) {
    console.error(`FAIL ${name}`);
    console.error(error);
    process.exitCode = 1;
  }
}

test("picks the lower odds side as the favorite", () => {
  assert.deepStrictEqual(
    app.getFavoriteOddsInfo({ homeOdds: "1.80", drawOdds: "3.40", awayOdds: "4.20" }),
    { favoriteKey: "H", favoriteOdds: 1.8 }
  );
  assert.deepStrictEqual(
    app.getFavoriteOddsInfo({ homeOdds: "4.20", drawOdds: "3.40", awayOdds: "1.80" }),
    { favoriteKey: "A", favoriteOdds: 1.8 }
  );
});

test("treats the home side as favorite when both odds are equal", () => {
  const info = app.getFavoriteOddsInfo({ homeOdds: "2.50", drawOdds: "3.20", awayOdds: "2.50" });
  assert.strictEqual(info.favoriteKey, "H");
  assert.strictEqual(info.favoriteOdds, 2.5);
});

test("returns no favorite when odds are missing or unusable", () => {
  assert.strictEqual(app.getFavoriteOddsInfo({}), null);
  assert.strictEqual(app.getFavoriteOddsInfo({ homeOdds: "1.80" }), null);
  assert.strictEqual(app.getFavoriteOddsInfo({ homeOdds: "0", awayOdds: "2.10" }), null);
  assert.strictEqual(app.getFavoriteOddsInfo({ homeOdds: "abc", awayOdds: "2.10" }), null);
});

test("maps favorite odds onto bands without gaps at the boundaries", () => {
  assert.strictEqual(app.getOddsBandKey(1.29), "~1.30");
  assert.strictEqual(app.getOddsBandKey(1.3), "1.30~1.50");
  assert.strictEqual(app.getOddsBandKey(1.49), "1.30~1.50");
  assert.strictEqual(app.getOddsBandKey(1.9), "1.90~2.10");
  assert.strictEqual(app.getOddsBandKey(2.4), "2.40~");
  assert.strictEqual(app.getOddsBandKey(99), "2.40~");
  assert.strictEqual(app.getOddsBandKey(0), "");
  assert.strictEqual(app.getOddsBandKey("x"), "");
});

test("counts a draw as a favorite failure", () => {
  const index = app.buildOddsBaseRateIndex([
    { league: "EPL", homeOdds: "1.95", drawOdds: "3.4", awayOdds: "3.8", result: "D" }
  ]);
  const summary = app.summarizeBaseRateBucket(index.bands["1.90~2.10"]);
  assert.strictEqual(summary.sampleSize, 1);
  assert.strictEqual(summary.upsetRate, 1);
  assert.strictEqual(summary.drawRate, 1);
  assert.strictEqual(summary.favoriteWinRate, 0);
});

test("skips rows without a usable result or odds", () => {
  const index = app.buildOddsBaseRateIndex([
    { league: "EPL", homeOdds: "1.95", drawOdds: "3.4", awayOdds: "3.8", result: "UNKNOWN" },
    { league: "EPL", homeOdds: "", drawOdds: "", awayOdds: "", result: "H" },
    { league: "EPL", homeOdds: "1.95", drawOdds: "3.4", awayOdds: "3.8", result: "H" }
  ]);
  assert.strictEqual(index.overall.matches, 1);
  assert.strictEqual(index.overall.favoriteWins, 1);
});

test("returns an empty summary for a bucket with no matches", () => {
  const summary = app.summarizeBaseRateBucket(undefined);
  assert.deepStrictEqual(summary, {
    sampleSize: 0,
    upsetRate: null,
    drawRate: null,
    favoriteWinRate: null
  });
});

test("reports the band scope when the league sample is too small", () => {
  const rows = [];
  for (let i = 0; i < 10; i++) {
    rows.push({ league: "EPL", homeOdds: "1.95", drawOdds: "3.4", awayOdds: "3.8", result: i < 4 ? "H" : "A" });
  }
  const index = app.buildOddsBaseRateIndex(rows);
  const rate = app.getOddsBaseRate(
    { league: "EPL", homeOdds: "1.95", drawOdds: "3.4", awayOdds: "3.8" },
    { index, minimumSampleSize: 200 }
  );

  assert.strictEqual(rate.band, "1.90~2.10");
  assert.strictEqual(rate.scope, "band");
  assert.strictEqual(rate.league, "");
  assert.strictEqual(rate.sampleSize, 10);
  assert.strictEqual(rate.upsetRate, 0.6);
});

test("uses the league scope once its sample clears the minimum", () => {
  const rows = [];
  for (let i = 0; i < 10; i++) {
    rows.push({ league: "EPL", homeOdds: "1.95", drawOdds: "3.4", awayOdds: "3.8", result: "A" });
    rows.push({ league: "LALIGA", homeOdds: "1.95", drawOdds: "3.4", awayOdds: "3.8", result: "H" });
  }
  const index = app.buildOddsBaseRateIndex(rows);
  const rate = app.getOddsBaseRate(
    { league: "EPL", homeOdds: "1.95", drawOdds: "3.4", awayOdds: "3.8" },
    { index, minimumSampleSize: 10 }
  );

  assert.strictEqual(rate.scope, "league");
  assert.strictEqual(rate.league, "EPL");
  assert.strictEqual(rate.sampleSize, 10);
  assert.strictEqual(rate.upsetRate, 1);
});

test("keeps league and overall buckets separate", () => {
  const index = app.buildOddsBaseRateIndex([
    { league: "EPL", homeOdds: "1.95", drawOdds: "3.4", awayOdds: "3.8", result: "H" },
    { league: "LALIGA", homeOdds: "1.95", drawOdds: "3.4", awayOdds: "3.8", result: "A" }
  ]);

  assert.strictEqual(index.bands["1.90~2.10"].matches, 2);
  assert.strictEqual(index.leagues.EPL["1.90~2.10"].matches, 1);
  assert.strictEqual(index.leagues.LALIGA["1.90~2.10"].matches, 1);
  assert.strictEqual(index.leagues.EPL["1.90~2.10"].favoriteWins, 1);
  assert.strictEqual(index.leagues.LALIGA["1.90~2.10"].upsets, 1);
});

test("returns an empty rate when the match has no usable odds", () => {
  const index = app.buildOddsBaseRateIndex([]);
  const rate = app.getOddsBaseRate({ league: "EPL" }, { index });
  assert.strictEqual(rate.scope, "none");
  assert.strictEqual(rate.sampleSize, 0);
  assert.strictEqual(rate.upsetRate, null);
});

test("builds one table row per band and keeps the declared order", () => {
  const index = app.buildOddsBaseRateIndex([
    { league: "EPL", homeOdds: "1.20", drawOdds: "6.0", awayOdds: "9.0", result: "H" },
    { league: "EPL", homeOdds: "2.60", drawOdds: "3.2", awayOdds: "2.70", result: "D" }
  ]);
  const table = app.getOddsBaseRateTable({ index });

  assert.strictEqual(table.length, app.ODDS_BASE_RATE_BANDS.length);
  assert.deepStrictEqual(table.map((row) => row.band), app.ODDS_BASE_RATE_BANDS.map((band) => band.key));
  assert.strictEqual(table[0].sampleSize, 1);
  assert.strictEqual(table[0].upsetRate, 0);
  assert.strictEqual(table[table.length - 1].sampleSize, 1);
  assert.strictEqual(table[table.length - 1].upsetRate, 1);
  assert.strictEqual(table[1].sampleSize, 0);
  assert.strictEqual(table[1].upsetRate, null);
});

test("upset rate and favorite win rate always add up to one", () => {
  const rows = [];
  const results = ["H", "D", "A", "H", "A", "D", "H", "H"];
  results.forEach((result, i) => {
    rows.push({ league: "EPL", homeOdds: "1.75", drawOdds: "3.5", awayOdds: "4.5", result });
    if (i === 0) rows.push({ league: "EPL", homeOdds: "4.5", drawOdds: "3.5", awayOdds: "1.75", result: "A" });
  });
  const index = app.buildOddsBaseRateIndex(rows);
  const summary = app.summarizeBaseRateBucket(index.bands["1.70~1.90"]);
  assert.strictEqual(Number((summary.upsetRate + summary.favoriteWinRate).toFixed(10)), 1);
});

// ---- 이변 후보 검증 기록 ----

const trackIndex = app.buildOddsBaseRateIndex([
  // 1.30~1.50 구간: 10경기 중 3건 이변 => 기저율 30%
  ...Array.from({ length: 3 }, () => ({ league: "EPL", homeOdds: "1.40", drawOdds: "4.5", awayOdds: "7.0", result: "A" })),
  ...Array.from({ length: 7 }, () => ({ league: "EPL", homeOdds: "1.40", drawOdds: "4.5", awayOdds: "7.0", result: "H" })),
  // 1.90~2.10 구간: 10경기 중 6건 이변 => 기저율 60%
  ...Array.from({ length: 6 }, () => ({ league: "EPL", homeOdds: "2.00", drawOdds: "3.3", awayOdds: "3.6", result: "D" })),
  ...Array.from({ length: 4 }, () => ({ league: "EPL", homeOdds: "2.00", drawOdds: "3.3", awayOdds: "3.6", result: "H" }))
]);

test("weighs each candidate against its own odds band, not the overall average", () => {
  const record = app.buildUpsetTrackRecord({
    candidates: {
      a: { candidateLabel: "이변 후보", league: "EPL", homeOdds: "1.40", drawOdds: "4.5", awayOdds: "7.0", favoriteFailed: true },
      b: { candidateLabel: "이변 후보", league: "EPL", homeOdds: "1.40", drawOdds: "4.5", awayOdds: "7.0", favoriteFailed: false },
      c: { candidateLabel: "무승부 주의", league: "EPL", homeOdds: "2.00", drawOdds: "3.3", awayOdds: "3.6", favoriteFailed: false }
    }
  }, { index: trackIndex });

  assert.strictEqual(record.resolved, 3);
  assert.strictEqual(record.actualFailures, 1);
  // 0.30 + 0.30 + 0.60 = 1.20
  assert.strictEqual(Number(record.expectedFailures.toFixed(4)), 1.2);
  assert.strictEqual(Number(record.actualRate.toFixed(4)), Number((1 / 3).toFixed(4)));
  assert.strictEqual(Number(record.expectedRate.toFixed(4)), 0.4);
});

test("ignores candidates that have not been resolved yet", () => {
  const record = app.buildUpsetTrackRecord({
    candidates: {
      a: { league: "EPL", homeOdds: "1.40", drawOdds: "4.5", awayOdds: "7.0", favoriteFailed: true },
      b: { league: "EPL", homeOdds: "1.40", drawOdds: "4.5", awayOdds: "7.0", favoriteFailed: null },
      c: { league: "EPL", homeOdds: "1.40", drawOdds: "4.5", awayOdds: "7.0" }
    }
  }, { index: trackIndex });

  assert.strictEqual(record.resolved, 1);
  assert.strictEqual(record.actualFailures, 1);
});

test("skips candidates whose odds cannot be placed in a band", () => {
  const record = app.buildUpsetTrackRecord({
    candidates: {
      a: { league: "EPL", homeOdds: "", drawOdds: "", awayOdds: "", favoriteFailed: true }
    }
  }, { index: trackIndex });

  assert.strictEqual(record.resolved, 0);
  assert.strictEqual(record.actualRate, null);
  assert.strictEqual(record.expectedRate, null);
});

test("groups the record by candidate label, most tracked first", () => {
  const record = app.buildUpsetTrackRecord({
    candidates: {
      a: { candidateLabel: "무승부 주의", league: "EPL", homeOdds: "2.00", drawOdds: "3.3", awayOdds: "3.6", favoriteFailed: true },
      b: { candidateLabel: "무승부 주의", league: "EPL", homeOdds: "2.00", drawOdds: "3.3", awayOdds: "3.6", favoriteFailed: false },
      c: { candidateLabel: "이변 후보", league: "EPL", homeOdds: "1.40", drawOdds: "4.5", awayOdds: "7.0", favoriteFailed: false }
    }
  }, { index: trackIndex });

  assert.strictEqual(record.byLabel.length, 2);
  assert.strictEqual(record.byLabel[0].label, "무승부 주의");
  assert.strictEqual(record.byLabel[0].resolved, 2);
  assert.strictEqual(record.byLabel[1].label, "이변 후보");
});

test("returns an empty record for an empty or missing audit", () => {
  assert.strictEqual(app.buildUpsetTrackRecord({}, { index: trackIndex }).resolved, 0);
  assert.strictEqual(app.buildUpsetTrackRecord(undefined, { index: trackIndex }).resolved, 0);
});

test("writes the track record line with both the actual and the base rate", () => {
  const text = app.formatUpsetTrackRecordText({ resolved: 24, actualRate: 0.375, expectedRate: 0.363 });
  assert.strictEqual(text, "검증 24건 · 실제 37.5% · 같은 구간 기저율 36.3%");
});

test("writes nothing when there is no resolved candidate", () => {
  assert.strictEqual(app.formatUpsetTrackRecordText({ resolved: 0 }), "");
  assert.strictEqual(app.formatUpsetTrackRecordText({}), "");
});
