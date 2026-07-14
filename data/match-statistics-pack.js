(function attachMatchStatisticsPack(root, factory) {
  const pack = factory();
  if (typeof module !== "undefined" && module.exports) module.exports = pack;
  if (root) root.ODDS_ARCHIVE_MATCH_STATISTICS_PACK = pack;
})(typeof window !== "undefined" ? window : globalThis, function createMatchStatisticsPack() {
  return {
  "version": "match-statistics-v1",
  "updatedAt": "2026-07-14T11:12:48.055Z",
  "collection": {
    "date": "2026-07-12",
    "requestGroups": 1,
    "finishedFixtures": 2,
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
      },
      "statisticsChecked": true,
      "lineupsChecked": true,
      "injuriesChecked": true,
      "lineups": [
        {
          "teamId": 1090,
          "team": "Norway",
          "formation": "4-3-3",
          "coach": "Stale Solbakken",
          "starters": [
            "O. Nyland",
            "J. Ryerson",
            "K. Ajer",
            "T. Heggem",
            "D. Wolfe",
            "M. Odegaard",
            "S. Berge",
            "P. Berg",
            "A. Sorloth",
            "E. Haaland",
            "A. Schjelderup"
          ]
        },
        {
          "teamId": 10,
          "team": "England",
          "formation": "4-2-3-1",
          "coach": "Thomas Tuchel",
          "starters": [
            "J. Pickford",
            "E. Konsa",
            "J. Stones",
            "M. Guehi",
            "N. O'Reilly",
            "D. Rice",
            "E. Anderson",
            "N. Madueke",
            "J. Bellingham",
            "A. Gordon",
            "H. Kane"
          ]
        }
      ],
      "injuries": [
        {
          "fixtureId": 1581037,
          "teamId": 1090,
          "playerId": 39362,
          "player": "M. Pedersen",
          "type": "Missing Fixture",
          "reason": "Cold"
        },
        {
          "fixtureId": 1581037,
          "teamId": 10,
          "playerId": 292,
          "player": "J. Henderson",
          "type": "Missing Fixture",
          "reason": "Wirst Injury"
        },
        {
          "fixtureId": 1581037,
          "teamId": 10,
          "playerId": 158698,
          "player": "J. Quansah",
          "type": "Missing Fixture",
          "reason": "Suspension Through Sports Court"
        }
      ]
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
      },
      "statisticsChecked": true,
      "lineupsChecked": true,
      "injuriesChecked": true,
      "lineups": [
        {
          "teamId": 26,
          "team": "Argentina",
          "formation": "4-1-3-2",
          "coach": "Lionel Scaloni",
          "starters": [
            "Emiliano Martínez",
            "Nahuel Molina",
            "Cristian Romero",
            "Lisandro Martínez",
            "Nicolás Tagliafico",
            "Leandro Paredes",
            "Rodrigo De Paul",
            "Enzo Fernández",
            "Alexis Mac Allister",
            "Lionel Messi",
            "Julián Alvarez"
          ]
        },
        {
          "teamId": 15,
          "team": "Switzerland",
          "formation": "4-2-3-1",
          "coach": "Murat Yakin",
          "starters": [
            "Gregor Kobel",
            "Denis Zakaria",
            "Nico Elvedi",
            "Manuel Akanji",
            "Ricardo Rodríguez",
            "Remo Freuler",
            "Granit Xhaka",
            "Djibril Sow",
            "Fabian Rieder",
            "Dan Ndoye",
            "Breel Embolo"
          ]
        }
      ],
      "injuries": [
        {
          "fixtureId": 1582681,
          "teamId": 15,
          "playerId": 349344,
          "player": "L. Jaquez",
          "type": "Missing Fixture",
          "reason": "Muscle Bruise"
        },
        {
          "fixtureId": 1582681,
          "teamId": 15,
          "playerId": 951,
          "player": "M. Aebischer",
          "type": "Missing Fixture",
          "reason": "Muscle Bruise"
        }
      ]
    }
  ]
};
});
