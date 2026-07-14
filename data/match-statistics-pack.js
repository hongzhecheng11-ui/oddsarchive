(function attachMatchStatisticsPack(root, factory) {
  const pack = factory();
  if (typeof module !== "undefined" && module.exports) module.exports = pack;
  if (root) root.ODDS_ARCHIVE_MATCH_STATISTICS_PACK = pack;
})(typeof window !== "undefined" ? window : globalThis, function createMatchStatisticsPack() {
  return {
  "version": "match-statistics-v1",
  "updatedAt": "2026-07-14T10:54:20.908Z",
  "collection": {
    "date": "2026-07-12",
    "requestGroups": 3,
    "finishedFixtures": 7,
    "saved": 2,
    "failures": 0,
    "errors": []
  },
  "matches": [
    {
      "fixtureId": 1581037,
      "date": "2026-07-12",
      "league": "WORLDCUP",
      "homeTeamId": 1090,
      "homeTeam": "Norway",
      "awayTeamId": 10,
      "awayTeam": "England",
      "home": {
        "teamId": 1090,
        "team": "Norway",
        "shots": 13,
        "shotsOnGoal": 4,
        "possession": 48,
        "corners": 7,
        "yellowCards": 1,
        "redCards": null,
        "expectedGoals": 0.68
      },
      "away": {
        "teamId": 10,
        "team": "England",
        "shots": 14,
        "shotsOnGoal": 8,
        "possession": 52,
        "corners": 4,
        "yellowCards": 0,
        "redCards": null,
        "expectedGoals": 1.04
      }
    },
    {
      "fixtureId": 1582681,
      "date": "2026-07-12",
      "league": "WORLDCUP",
      "homeTeamId": 26,
      "homeTeam": "Argentina",
      "awayTeamId": 15,
      "awayTeam": "Switzerland",
      "home": {
        "teamId": 26,
        "team": "Argentina",
        "shots": 22,
        "shotsOnGoal": 7,
        "possession": 59,
        "corners": 8,
        "yellowCards": 3,
        "redCards": 0,
        "expectedGoals": 1.94
      },
      "away": {
        "teamId": 15,
        "team": "Switzerland",
        "shots": 11,
        "shotsOnGoal": 5,
        "possession": 41,
        "corners": 2,
        "yellowCards": 2,
        "redCards": 1,
        "expectedGoals": 0.47
      }
    }
  ]
};
});
