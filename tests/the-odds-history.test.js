const assert = require("assert");
const collector = require("../scripts/collect-the-odds-history.js");

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

const event = {
  home_team: "Ulsan Hyundai FC",
  away_team: "Daegu FC",
  bookmakers: [
    {
      key: "pinnacle",
      markets: [
        {
          key: "h2h",
          outcomes: [
            { name: "Daegu FC", price: 5.88 },
            { name: "Ulsan Hyundai FC", price: 1.51 },
            { name: "Draw", price: 4.51 }
          ]
        }
      ]
    }
  ]
};

test("matches historical events by normalized home and away names", () => {
  const matched = collector.findHistoricalEvent([event], {
    homeTeam: "Ulsan Hyundai FC",
    awayTeam: "Daegu FC"
  });

  assert.strictEqual(matched, event);
});

test("prefers Pinnacle h2h odds when available", () => {
  const odds = collector.pickOddsForEvent(event, "Ulsan Hyundai FC", "Daegu FC");

  assert.deepStrictEqual(odds, {
    home: 1.51,
    draw: 4.51,
    away: 5.88,
    bookmaker: "pinnacle"
  });
});

test("averages bookmaker odds when priority bookmaker is missing", () => {
  const odds = collector.averageOdds([
    {
      key: "book-a",
      markets: [{ key: "h2h", outcomes: [
        { name: "Home FC", price: 2 },
        { name: "Draw", price: 3 },
        { name: "Away FC", price: 4 }
      ] }]
    },
    {
      key: "book-b",
      markets: [{ key: "h2h", outcomes: [
        { name: "Home FC", price: 2.2 },
        { name: "Draw", price: 3.2 },
        { name: "Away FC", price: 4.2 }
      ] }]
    }
  ], "Home FC", "Away FC");

  assert.strictEqual(odds.home.toFixed(2), "2.10");
  assert.strictEqual(odds.draw.toFixed(2), "3.10");
  assert.strictEqual(odds.away.toFixed(2), "4.10");
  assert.strictEqual(odds.bookmaker, "average-2");
});

test("builds one archive match row from historical odds", () => {
  const match = collector.buildMatchFromHistoricalEvent({
    date: "2025-07-12",
    league: "KLEAGUE1",
    homeTeam: "Ulsan Hyundai FC",
    awayTeam: "Daegu FC",
    result: "H",
    score: "2-0"
  }, event, {
    home: 1.51,
    draw: 4.51,
    away: 5.88,
    bookmaker: "pinnacle"
  });

  assert.deepStrictEqual(match, {
    date: "2025-07-12",
    league: "KLEAGUE1",
    homeTeam: "Ulsan Hyundai FC",
    awayTeam: "Daegu FC",
    homeOdds: "1.51",
    drawOdds: "4.51",
    awayOdds: "5.88",
    result: "H",
    score: "2-0",
    source: "The Odds API pinnacle"
  });
});

test("uses a 24 hour pre-match historical snapshot by default", () => {
  assert.strictEqual(
    collector.getSnapshotIso("2025-07-12T10:00:00Z", 24),
    "2025-07-11T10:00:00Z"
  );
});

test("parses fallback snapshot hour attempts", () => {
  assert.deepStrictEqual(collector.parseHoursList("24,48,12"), [24, 48, 12]);
  assert.deepStrictEqual(collector.parseHoursList(""), [24, 48, 12, 6]);
});
