(function attachTeamContextPack(root, factory) {
  const pack = factory();
  if (typeof module !== "undefined" && module.exports) module.exports = pack;
  if (root) root.ODDS_ARCHIVE_TEAM_CONTEXT_PACK = pack;
})(typeof window !== "undefined" ? window : globalThis, function createTeamContextPack() {
  return {
  "version": "team-context-v3",
  "date": "2026-09-07",
  "updatedAt": "2026-09-06T20:20:56.305Z",
  "collection": {
    "dates": [
      "2026-09-07"
    ],
    "requestGroups": 8,
    "skippedGroups": 18,
    "failures": 0,
    "errors": []
  },
  "leagues": [
    {
      "key": "EPL",
      "leagueId": 39,
      "season": "2026",
      "standings": [
        {
          "teamId": 50,
          "team": "Manchester City",
          "rank": 1,
          "points": 9,
          "goalsDiff": 5,
          "form": "WWW",
          "all": {
            "played": 3,
            "wins": 3,
            "draws": 0,
            "losses": 0,
            "goalsFor": 7,
            "goalsAgainst": 2
          },
          "home": {
            "played": 2,
            "wins": 2,
            "draws": 0,
            "losses": 0,
            "goalsFor": 3,
            "goalsAgainst": 1
          },
          "away": {
            "played": 1,
            "wins": 1,
            "draws": 0,
            "losses": 0,
            "goalsFor": 4,
            "goalsAgainst": 1
          }
        },
        {
          "teamId": 42,
          "team": "Arsenal",
          "rank": 2,
          "points": 9,
          "goalsDiff": 5,
          "form": "WWW",
          "all": {
            "played": 3,
            "wins": 3,
            "draws": 0,
            "losses": 0,
            "goalsFor": 6,
            "goalsAgainst": 1
          },
          "home": {
            "played": 2,
            "wins": 2,
            "draws": 0,
            "losses": 0,
            "goalsFor": 5,
            "goalsAgainst": 1
          },
          "away": {
            "played": 1,
            "wins": 1,
            "draws": 0,
            "losses": 0,
            "goalsFor": 1,
            "goalsAgainst": 0
          }
        },
        {
          "teamId": 64,
          "team": "Hull City",
          "rank": 3,
          "points": 7,
          "goalsDiff": 3,
          "form": "DWW",
          "all": {
            "played": 3,
            "wins": 2,
            "draws": 1,
            "losses": 0,
            "goalsFor": 3,
            "goalsAgainst": 0
          },
          "home": {
            "played": 2,
            "wins": 1,
            "draws": 1,
            "losses": 0,
            "goalsFor": 2,
            "goalsAgainst": 0
          },
          "away": {
            "played": 1,
            "wins": 1,
            "draws": 0,
            "losses": 0,
            "goalsFor": 1,
            "goalsAgainst": 0
          }
        },
        {
          "teamId": 49,
          "team": "Chelsea",
          "rank": 4,
          "points": 6,
          "goalsDiff": 1,
          "form": "LWW",
          "all": {
            "played": 3,
            "wins": 2,
            "draws": 0,
            "losses": 1,
            "goalsFor": 8,
            "goalsAgainst": 7
          },
          "home": {
            "played": 1,
            "wins": 1,
            "draws": 0,
            "losses": 0,
            "goalsFor": 4,
            "goalsAgainst": 3
          },
          "away": {
            "played": 2,
            "wins": 1,
            "draws": 0,
            "losses": 1,
            "goalsFor": 4,
            "goalsAgainst": 4
          }
        },
        {
          "teamId": 55,
          "team": "Brentford",
          "rank": 5,
          "points": 5,
          "goalsDiff": 3,
          "form": "DDW",
          "all": {
            "played": 3,
            "wins": 1,
            "draws": 2,
            "losses": 0,
            "goalsFor": 5,
            "goalsAgainst": 2
          },
          "home": {
            "played": 2,
            "wins": 1,
            "draws": 1,
            "losses": 0,
            "goalsFor": 4,
            "goalsAgainst": 1
          },
          "away": {
            "played": 1,
            "wins": 0,
            "draws": 1,
            "losses": 0,
            "goalsFor": 1,
            "goalsAgainst": 1
          }
        },
        {
          "teamId": 40,
          "team": "Liverpool",
          "rank": 6,
          "points": 5,
          "goalsDiff": 2,
          "form": "WDD",
          "all": {
            "played": 3,
            "wins": 1,
            "draws": 2,
            "losses": 0,
            "goalsFor": 6,
            "goalsAgainst": 4
          },
          "home": {
            "played": 1,
            "wins": 0,
            "draws": 1,
            "losses": 0,
            "goalsFor": 2,
            "goalsAgainst": 2
          },
          "away": {
            "played": 2,
            "wins": 1,
            "draws": 1,
            "losses": 0,
            "goalsFor": 4,
            "goalsAgainst": 2
          }
        },
        {
          "teamId": 34,
          "team": "Newcastle",
          "rank": 7,
          "points": 5,
          "goalsDiff": 2,
          "form": "DWD",
          "all": {
            "played": 3,
            "wins": 1,
            "draws": 2,
            "losses": 0,
            "goalsFor": 6,
            "goalsAgainst": 4
          },
          "home": {
            "played": 2,
            "wins": 0,
            "draws": 2,
            "losses": 0,
            "goalsFor": 4,
            "goalsAgainst": 4
          },
          "away": {
            "played": 1,
            "wins": 1,
            "draws": 0,
            "losses": 0,
            "goalsFor": 2,
            "goalsAgainst": 0
          }
        },
        {
          "teamId": 45,
          "team": "Everton",
          "rank": 8,
          "points": 5,
          "goalsDiff": 2,
          "form": "DDW",
          "all": {
            "played": 3,
            "wins": 1,
            "draws": 2,
            "losses": 0,
            "goalsFor": 5,
            "goalsAgainst": 3
          },
          "home": {
            "played": 2,
            "wins": 1,
            "draws": 1,
            "losses": 0,
            "goalsFor": 4,
            "goalsAgainst": 2
          },
          "away": {
            "played": 1,
            "wins": 0,
            "draws": 1,
            "losses": 0,
            "goalsFor": 1,
            "goalsAgainst": 1
          }
        },
        {
          "teamId": 63,
          "team": "Leeds",
          "rank": 9,
          "points": 5,
          "goalsDiff": 1,
          "form": "DDW",
          "all": {
            "played": 3,
            "wins": 1,
            "draws": 2,
            "losses": 0,
            "goalsFor": 3,
            "goalsAgainst": 2
          },
          "home": {
            "played": 1,
            "wins": 0,
            "draws": 1,
            "losses": 0,
            "goalsFor": 1,
            "goalsAgainst": 1
          },
          "away": {
            "played": 2,
            "wins": 1,
            "draws": 1,
            "losses": 0,
            "goalsFor": 2,
            "goalsAgainst": 1
          }
        },
        {
          "teamId": 51,
          "team": "Brighton",
          "rank": 10,
          "points": 4,
          "goalsDiff": 3,
          "form": "DLW",
          "all": {
            "played": 3,
            "wins": 1,
            "draws": 1,
            "losses": 1,
            "goalsFor": 8,
            "goalsAgainst": 5
          },
          "home": {
            "played": 2,
            "wins": 1,
            "draws": 1,
            "losses": 0,
            "goalsFor": 5,
            "goalsAgainst": 1
          },
          "away": {
            "played": 1,
            "wins": 0,
            "draws": 0,
            "losses": 1,
            "goalsFor": 3,
            "goalsAgainst": 4
          }
        },
        {
          "teamId": 33,
          "team": "Manchester United",
          "rank": 11,
          "points": 4,
          "goalsDiff": 1,
          "form": "DWL",
          "all": {
            "played": 3,
            "wins": 1,
            "draws": 1,
            "losses": 1,
            "goalsFor": 7,
            "goalsAgainst": 6
          },
          "home": {
            "played": 1,
            "wins": 1,
            "draws": 0,
            "losses": 0,
            "goalsFor": 5,
            "goalsAgainst": 2
          },
          "away": {
            "played": 2,
            "wins": 0,
            "draws": 1,
            "losses": 1,
            "goalsFor": 2,
            "goalsAgainst": 4
          }
        },
        {
          "teamId": 746,
          "team": "Sunderland",
          "rank": 12,
          "points": 4,
          "goalsDiff": 0,
          "form": "DWL",
          "all": {
            "played": 3,
            "wins": 1,
            "draws": 1,
            "losses": 1,
            "goalsFor": 3,
            "goalsAgainst": 3
          },
          "home": {
            "played": 1,
            "wins": 1,
            "draws": 0,
            "losses": 0,
            "goalsFor": 1,
            "goalsAgainst": 0
          },
          "away": {
            "played": 2,
            "wins": 0,
            "draws": 1,
            "losses": 1,
            "goalsFor": 2,
            "goalsAgainst": 3
          }
        },
        {
          "teamId": 52,
          "team": "Crystal Palace",
          "rank": 13,
          "points": 3,
          "goalsDiff": -4,
          "form": "WLL",
          "all": {
            "played": 3,
            "wins": 1,
            "draws": 0,
            "losses": 2,
            "goalsFor": 4,
            "goalsAgainst": 8
          },
          "home": {
            "played": 1,
            "wins": 0,
            "draws": 0,
            "losses": 1,
            "goalsFor": 1,
            "goalsAgainst": 4
          },
          "away": {
            "played": 2,
            "wins": 1,
            "draws": 0,
            "losses": 1,
            "goalsFor": 3,
            "goalsAgainst": 4
          }
        },
        {
          "teamId": 57,
          "team": "Ipswich",
          "rank": 14,
          "points": 3,
          "goalsDiff": -4,
          "form": "LLW",
          "all": {
            "played": 3,
            "wins": 1,
            "draws": 0,
            "losses": 2,
            "goalsFor": 4,
            "goalsAgainst": 8
          },
          "home": {
            "played": 2,
            "wins": 1,
            "draws": 0,
            "losses": 1,
            "goalsFor": 2,
            "goalsAgainst": 3
          },
          "away": {
            "played": 1,
            "wins": 0,
            "draws": 0,
            "losses": 1,
            "goalsFor": 2,
            "goalsAgainst": 5
          }
        },
        {
          "teamId": 35,
          "team": "Bournemouth",
          "rank": 15,
          "points": 2,
          "goalsDiff": -1,
          "form": "DDL",
          "all": {
            "played": 3,
            "wins": 0,
            "draws": 2,
            "losses": 1,
            "goalsFor": 4,
            "goalsAgainst": 5
          },
          "home": {
            "played": 1,
            "wins": 0,
            "draws": 1,
            "losses": 0,
            "goalsFor": 1,
            "goalsAgainst": 1
          },
          "away": {
            "played": 2,
            "wins": 0,
            "draws": 1,
            "losses": 1,
            "goalsFor": 3,
            "goalsAgainst": 4
          }
        },
        {
          "teamId": 65,
          "team": "Nottingham Forest",
          "rank": 16,
          "points": 2,
          "goalsDiff": -1,
          "form": "DDL",
          "all": {
            "played": 3,
            "wins": 0,
            "draws": 2,
            "losses": 1,
            "goalsFor": 2,
            "goalsAgainst": 3
          },
          "home": {
            "played": 2,
            "wins": 0,
            "draws": 1,
            "losses": 1,
            "goalsFor": 0,
            "goalsAgainst": 1
          },
          "away": {
            "played": 1,
            "wins": 0,
            "draws": 1,
            "losses": 0,
            "goalsFor": 2,
            "goalsAgainst": 2
          }
        },
        {
          "teamId": 66,
          "team": "Aston Villa",
          "rank": 17,
          "points": 1,
          "goalsDiff": -5,
          "form": "DLL",
          "all": {
            "played": 3,
            "wins": 0,
            "draws": 1,
            "losses": 2,
            "goalsFor": 0,
            "goalsAgainst": 5
          },
          "home": {
            "played": 1,
            "wins": 0,
            "draws": 0,
            "losses": 1,
            "goalsFor": 0,
            "goalsAgainst": 1
          },
          "away": {
            "played": 2,
            "wins": 0,
            "draws": 1,
            "losses": 1,
            "goalsFor": 0,
            "goalsAgainst": 4
          }
        },
        {
          "teamId": 47,
          "team": "Tottenham",
          "rank": 18,
          "points": 1,
          "goalsDiff": -5,
          "form": "DLL",
          "all": {
            "played": 3,
            "wins": 0,
            "draws": 1,
            "losses": 2,
            "goalsFor": 0,
            "goalsAgainst": 5
          },
          "home": {
            "played": 1,
            "wins": 0,
            "draws": 0,
            "losses": 1,
            "goalsFor": 0,
            "goalsAgainst": 2
          },
          "away": {
            "played": 2,
            "wins": 0,
            "draws": 1,
            "losses": 1,
            "goalsFor": 0,
            "goalsAgainst": 3
          }
        },
        {
          "teamId": 36,
          "team": "Fulham",
          "rank": 19,
          "points": 0,
          "goalsDiff": -3,
          "form": "LLL",
          "all": {
            "played": 3,
            "wins": 0,
            "draws": 0,
            "losses": 3,
            "goalsFor": 4,
            "goalsAgainst": 7
          },
          "home": {
            "played": 2,
            "wins": 0,
            "draws": 0,
            "losses": 2,
            "goalsFor": 4,
            "goalsAgainst": 6
          },
          "away": {
            "played": 1,
            "wins": 0,
            "draws": 0,
            "losses": 1,
            "goalsFor": 0,
            "goalsAgainst": 1
          }
        },
        {
          "teamId": 1346,
          "team": "Coventry",
          "rank": 20,
          "points": 0,
          "goalsDiff": -5,
          "form": "LLL",
          "all": {
            "played": 3,
            "wins": 0,
            "draws": 0,
            "losses": 3,
            "goalsFor": 0,
            "goalsAgainst": 5
          },
          "home": {
            "played": 1,
            "wins": 0,
            "draws": 0,
            "losses": 1,
            "goalsFor": 0,
            "goalsAgainst": 1
          },
          "away": {
            "played": 2,
            "wins": 0,
            "draws": 0,
            "losses": 2,
            "goalsFor": 0,
            "goalsAgainst": 4
          }
        }
      ],
      "teams": [
        {
          "teamId": 42,
          "team": "Arsenal",
          "form": "WWW",
          "all": {
            "played": 3,
            "wins": 3,
            "draws": 0,
            "losses": 0,
            "goalsFor": 6,
            "goalsAgainst": 1
          },
          "home": {
            "played": 2,
            "wins": 2,
            "draws": 0,
            "losses": 0,
            "goalsFor": 5,
            "goalsAgainst": 1
          },
          "away": {
            "played": 1,
            "wins": 1,
            "draws": 0,
            "losses": 0,
            "goalsFor": 1,
            "goalsAgainst": 0
          }
        },
        {
          "teamId": 49,
          "team": "Chelsea",
          "form": "WWL",
          "all": {
            "played": 3,
            "wins": 2,
            "draws": 0,
            "losses": 1,
            "goalsFor": 8,
            "goalsAgainst": 7
          },
          "home": {
            "played": 1,
            "wins": 1,
            "draws": 0,
            "losses": 0,
            "goalsFor": 4,
            "goalsAgainst": 3
          },
          "away": {
            "played": 2,
            "wins": 1,
            "draws": 0,
            "losses": 1,
            "goalsFor": 4,
            "goalsAgainst": 4
          }
        }
      ],
      "fixtures": [
        {
          "fixtureId": 1557387,
          "kickoff": "2026-09-07T00:30:00+09:00",
          "status": "FT",
          "homeTeamId": 42,
          "homeTeam": "Arsenal",
          "awayTeamId": 49,
          "awayTeam": "Chelsea",
          "injuriesChecked": true,
          "injuries": [
            {
              "fixtureId": 1557387,
              "teamId": 42,
              "playerId": 333682,
              "player": "C. Mosquera",
              "type": "Missing Fixture",
              "reason": "Injury"
            },
            {
              "fixtureId": 1557387,
              "teamId": 42,
              "playerId": 22090,
              "player": "W. Saliba",
              "type": "Missing Fixture",
              "reason": "Back Injury"
            },
            {
              "fixtureId": 1557387,
              "teamId": 42,
              "playerId": 38746,
              "player": "J. Timber",
              "type": "Missing Fixture",
              "reason": "Ankle Injury"
            },
            {
              "fixtureId": 1557387,
              "teamId": 49,
              "playerId": 116117,
              "player": "M. Caicedo",
              "type": "Missing Fixture",
              "reason": "Injury"
            },
            {
              "fixtureId": 1557387,
              "teamId": 49,
              "playerId": 292,
              "player": "J. Henderson",
              "type": "Missing Fixture",
              "reason": "Wrist Injury"
            },
            {
              "fixtureId": 1557387,
              "teamId": 49,
              "playerId": 383018,
              "player": "M. Palestra",
              "type": "Missing Fixture",
              "reason": "Injury"
            }
          ],
          "lineupsChecked": true,
          "lineups": [
            {
              "teamId": 42,
              "team": "Arsenal",
              "formation": "4-2-3-1",
              "coach": "Mikel Arteta",
              "starters": [
                "David Raya",
                "B. White",
                "E. Konsa",
                "Gabriel Magalhães",
                "R. Calafiori",
                "D. Rice",
                "M. Lewis-Skelly",
                "B. Saka",
                "M. Ødegaard",
                "C. Tzolis",
                "K. Havertz"
              ]
            },
            {
              "teamId": 49,
              "team": "Chelsea",
              "formation": "3-4-2-1",
              "coach": "Xabi Alonso",
              "starters": [
                "E. Martínez",
                "Joshua Kofi Acheampong",
                "M. Lacroix",
                "W. Fofana",
                "Pedro Neto",
                "R. Lavia",
                "R. James",
                "J. Hato",
                "C. Palmer",
                "M. Rogers",
                "João Pedro"
              ]
            }
          ]
        }
      ]
    },
    {
      "key": "LALIGA",
      "leagueId": 140,
      "season": "2026",
      "standings": [
        {
          "teamId": 529,
          "team": "Barcelona",
          "rank": 1,
          "points": 12,
          "goalsDiff": 15,
          "form": "WWWW",
          "all": {
            "played": 4,
            "wins": 4,
            "draws": 0,
            "losses": 0,
            "goalsFor": 17,
            "goalsAgainst": 2
          },
          "home": {
            "played": 2,
            "wins": 2,
            "draws": 0,
            "losses": 0,
            "goalsFor": 7,
            "goalsAgainst": 2
          },
          "away": {
            "played": 2,
            "wins": 2,
            "draws": 0,
            "losses": 0,
            "goalsFor": 10,
            "goalsAgainst": 0
          }
        },
        {
          "teamId": 542,
          "team": "Alaves",
          "rank": 2,
          "points": 10,
          "goalsDiff": 7,
          "form": "WWDW",
          "all": {
            "played": 4,
            "wins": 3,
            "draws": 1,
            "losses": 0,
            "goalsFor": 10,
            "goalsAgainst": 3
          },
          "home": {
            "played": 3,
            "wins": 3,
            "draws": 0,
            "losses": 0,
            "goalsFor": 9,
            "goalsAgainst": 2
          },
          "away": {
            "played": 1,
            "wins": 0,
            "draws": 1,
            "losses": 0,
            "goalsFor": 1,
            "goalsAgainst": 1
          }
        },
        {
          "teamId": 541,
          "team": "Real Madrid",
          "rank": 3,
          "points": 9,
          "goalsDiff": 7,
          "form": "LWWW",
          "all": {
            "played": 4,
            "wins": 3,
            "draws": 0,
            "losses": 1,
            "goalsFor": 10,
            "goalsAgainst": 3
          },
          "home": {
            "played": 2,
            "wins": 2,
            "draws": 0,
            "losses": 0,
            "goalsFor": 8,
            "goalsAgainst": 1
          },
          "away": {
            "played": 2,
            "wins": 1,
            "draws": 0,
            "losses": 1,
            "goalsFor": 2,
            "goalsAgainst": 2
          }
        },
        {
          "teamId": 543,
          "team": "Real Betis",
          "rank": 4,
          "points": 9,
          "goalsDiff": 0,
          "form": "WLWW",
          "all": {
            "played": 4,
            "wins": 3,
            "draws": 0,
            "losses": 1,
            "goalsFor": 5,
            "goalsAgainst": 5
          },
          "home": {
            "played": 2,
            "wins": 2,
            "draws": 0,
            "losses": 0,
            "goalsFor": 2,
            "goalsAgainst": 0
          },
          "away": {
            "played": 2,
            "wins": 1,
            "draws": 0,
            "losses": 1,
            "goalsFor": 3,
            "goalsAgainst": 5
          }
        },
        {
          "teamId": 544,
          "team": "Deportivo La Coruna",
          "rank": 5,
          "points": 8,
          "goalsDiff": 3,
          "form": "WWDD",
          "all": {
            "played": 4,
            "wins": 2,
            "draws": 2,
            "losses": 0,
            "goalsFor": 8,
            "goalsAgainst": 5
          },
          "home": {
            "played": 2,
            "wins": 1,
            "draws": 1,
            "losses": 0,
            "goalsFor": 4,
            "goalsAgainst": 2
          },
          "away": {
            "played": 2,
            "wins": 1,
            "draws": 1,
            "losses": 0,
            "goalsFor": 4,
            "goalsAgainst": 3
          }
        },
        {
          "teamId": 530,
          "team": "Atletico Madrid",
          "rank": 6,
          "points": 7,
          "goalsDiff": 1,
          "form": "LWDW",
          "all": {
            "played": 4,
            "wins": 2,
            "draws": 1,
            "losses": 1,
            "goalsFor": 7,
            "goalsAgainst": 6
          },
          "home": {
            "played": 2,
            "wins": 1,
            "draws": 1,
            "losses": 0,
            "goalsFor": 4,
            "goalsAgainst": 2
          },
          "away": {
            "played": 2,
            "wins": 1,
            "draws": 0,
            "losses": 1,
            "goalsFor": 3,
            "goalsAgainst": 4
          }
        },
        {
          "teamId": 727,
          "team": "Osasuna",
          "rank": 7,
          "points": 7,
          "goalsDiff": -1,
          "form": "LWWD",
          "all": {
            "played": 4,
            "wins": 2,
            "draws": 1,
            "losses": 1,
            "goalsFor": 5,
            "goalsAgainst": 6
          },
          "home": {
            "played": 2,
            "wins": 1,
            "draws": 1,
            "losses": 0,
            "goalsFor": 1,
            "goalsAgainst": 0
          },
          "away": {
            "played": 2,
            "wins": 1,
            "draws": 0,
            "losses": 1,
            "goalsFor": 4,
            "goalsAgainst": 6
          }
        },
        {
          "teamId": 536,
          "team": "Sevilla",
          "rank": 8,
          "points": 6,
          "goalsDiff": 1,
          "form": "LWW",
          "all": {
            "played": 3,
            "wins": 2,
            "draws": 0,
            "losses": 1,
            "goalsFor": 6,
            "goalsAgainst": 5
          },
          "home": {
            "played": 2,
            "wins": 1,
            "draws": 0,
            "losses": 1,
            "goalsFor": 3,
            "goalsAgainst": 4
          },
          "away": {
            "played": 1,
            "wins": 1,
            "draws": 0,
            "losses": 0,
            "goalsFor": 3,
            "goalsAgainst": 1
          }
        },
        {
          "teamId": 531,
          "team": "Athletic Club",
          "rank": 9,
          "points": 6,
          "goalsDiff": 1,
          "form": "WWLL",
          "all": {
            "played": 4,
            "wins": 2,
            "draws": 0,
            "losses": 2,
            "goalsFor": 6,
            "goalsAgainst": 5
          },
          "home": {
            "played": 2,
            "wins": 1,
            "draws": 0,
            "losses": 1,
            "goalsFor": 4,
            "goalsAgainst": 3
          },
          "away": {
            "played": 2,
            "wins": 1,
            "draws": 0,
            "losses": 1,
            "goalsFor": 2,
            "goalsAgainst": 2
          }
        },
        {
          "teamId": 539,
          "team": "Levante",
          "rank": 10,
          "points": 5,
          "goalsDiff": 0,
          "form": "DWDL",
          "all": {
            "played": 4,
            "wins": 1,
            "draws": 2,
            "losses": 1,
            "goalsFor": 5,
            "goalsAgainst": 5
          },
          "home": {
            "played": 1,
            "wins": 1,
            "draws": 0,
            "losses": 0,
            "goalsFor": 5,
            "goalsAgainst": 2
          },
          "away": {
            "played": 3,
            "wins": 0,
            "draws": 2,
            "losses": 1,
            "goalsFor": 0,
            "goalsAgainst": 3
          }
        },
        {
          "teamId": 4665,
          "team": "Racing Santander",
          "rank": 11,
          "points": 4,
          "goalsDiff": -1,
          "form": "LWLD",
          "all": {
            "played": 4,
            "wins": 1,
            "draws": 1,
            "losses": 2,
            "goalsFor": 7,
            "goalsAgainst": 8
          },
          "home": {
            "played": 2,
            "wins": 1,
            "draws": 1,
            "losses": 0,
            "goalsFor": 5,
            "goalsAgainst": 4
          },
          "away": {
            "played": 2,
            "wins": 0,
            "draws": 0,
            "losses": 2,
            "goalsFor": 2,
            "goalsAgainst": 4
          }
        },
        {
          "teamId": 728,
          "team": "Rayo Vallecano",
          "rank": 12,
          "points": 4,
          "goalsDiff": -3,
          "form": "WLDL",
          "all": {
            "played": 4,
            "wins": 1,
            "draws": 1,
            "losses": 2,
            "goalsFor": 7,
            "goalsAgainst": 10
          },
          "home": {
            "played": 2,
            "wins": 1,
            "draws": 1,
            "losses": 0,
            "goalsFor": 4,
            "goalsAgainst": 3
          },
          "away": {
            "played": 2,
            "wins": 0,
            "draws": 0,
            "losses": 2,
            "goalsFor": 3,
            "goalsAgainst": 7
          }
        },
        {
          "teamId": 548,
          "team": "Real Sociedad",
          "rank": 13,
          "points": 4,
          "goalsDiff": -3,
          "form": "DWLL",
          "all": {
            "played": 4,
            "wins": 1,
            "draws": 1,
            "losses": 2,
            "goalsFor": 3,
            "goalsAgainst": 6
          },
          "home": {
            "played": 2,
            "wins": 1,
            "draws": 1,
            "losses": 0,
            "goalsFor": 2,
            "goalsAgainst": 1
          },
          "away": {
            "played": 2,
            "wins": 0,
            "draws": 0,
            "losses": 2,
            "goalsFor": 1,
            "goalsAgainst": 5
          }
        },
        {
          "teamId": 540,
          "team": "Espanyol",
          "rank": 14,
          "points": 3,
          "goalsDiff": 1,
          "form": "LLW",
          "all": {
            "played": 3,
            "wins": 1,
            "draws": 0,
            "losses": 2,
            "goalsFor": 5,
            "goalsAgainst": 4
          },
          "home": {
            "played": 2,
            "wins": 1,
            "draws": 0,
            "losses": 1,
            "goalsFor": 4,
            "goalsAgainst": 2
          },
          "away": {
            "played": 1,
            "wins": 0,
            "draws": 0,
            "losses": 1,
            "goalsFor": 1,
            "goalsAgainst": 2
          }
        },
        {
          "teamId": 546,
          "team": "Getafe",
          "rank": 15,
          "points": 3,
          "goalsDiff": -3,
          "form": "LWL",
          "all": {
            "played": 3,
            "wins": 1,
            "draws": 0,
            "losses": 2,
            "goalsFor": 1,
            "goalsAgainst": 4
          },
          "home": {
            "played": 1,
            "wins": 1,
            "draws": 0,
            "losses": 0,
            "goalsFor": 1,
            "goalsAgainst": 0
          },
          "away": {
            "played": 2,
            "wins": 0,
            "draws": 0,
            "losses": 2,
            "goalsFor": 0,
            "goalsAgainst": 4
          }
        },
        {
          "teamId": 533,
          "team": "Villarreal",
          "rank": 16,
          "points": 2,
          "goalsDiff": -2,
          "form": "LLDD",
          "all": {
            "played": 4,
            "wins": 0,
            "draws": 2,
            "losses": 2,
            "goalsFor": 6,
            "goalsAgainst": 8
          },
          "home": {
            "played": 1,
            "wins": 0,
            "draws": 0,
            "losses": 1,
            "goalsFor": 2,
            "goalsAgainst": 3
          },
          "away": {
            "played": 3,
            "wins": 0,
            "draws": 2,
            "losses": 1,
            "goalsFor": 4,
            "goalsAgainst": 5
          }
        },
        {
          "teamId": 538,
          "team": "Celta Vigo",
          "rank": 17,
          "points": 2,
          "goalsDiff": -3,
          "form": "DLLD",
          "all": {
            "played": 4,
            "wins": 0,
            "draws": 2,
            "losses": 2,
            "goalsFor": 1,
            "goalsAgainst": 4
          },
          "home": {
            "played": 2,
            "wins": 0,
            "draws": 0,
            "losses": 2,
            "goalsFor": 1,
            "goalsAgainst": 4
          },
          "away": {
            "played": 2,
            "wins": 0,
            "draws": 2,
            "losses": 0,
            "goalsFor": 0,
            "goalsAgainst": 0
          }
        },
        {
          "teamId": 535,
          "team": "Malaga",
          "rank": 18,
          "points": 2,
          "goalsDiff": -6,
          "form": "DLDL",
          "all": {
            "played": 4,
            "wins": 0,
            "draws": 2,
            "losses": 2,
            "goalsFor": 1,
            "goalsAgainst": 7
          },
          "home": {
            "played": 2,
            "wins": 0,
            "draws": 2,
            "losses": 0,
            "goalsFor": 1,
            "goalsAgainst": 1
          },
          "away": {
            "played": 2,
            "wins": 0,
            "draws": 0,
            "losses": 2,
            "goalsFor": 0,
            "goalsAgainst": 6
          }
        },
        {
          "teamId": 797,
          "team": "Elche",
          "rank": 19,
          "points": 1,
          "goalsDiff": -6,
          "form": "LLD",
          "all": {
            "played": 3,
            "wins": 0,
            "draws": 1,
            "losses": 2,
            "goalsFor": 3,
            "goalsAgainst": 9
          },
          "home": {
            "played": 1,
            "wins": 0,
            "draws": 0,
            "losses": 1,
            "goalsFor": 0,
            "goalsAgainst": 5
          },
          "away": {
            "played": 2,
            "wins": 0,
            "draws": 1,
            "losses": 1,
            "goalsFor": 3,
            "goalsAgainst": 4
          }
        },
        {
          "teamId": 532,
          "team": "Valencia",
          "rank": 20,
          "points": 1,
          "goalsDiff": -8,
          "form": "LLLD",
          "all": {
            "played": 4,
            "wins": 0,
            "draws": 1,
            "losses": 3,
            "goalsFor": 1,
            "goalsAgainst": 9
          },
          "home": {
            "played": 3,
            "wins": 0,
            "draws": 1,
            "losses": 2,
            "goalsFor": 0,
            "goalsAgainst": 6
          },
          "away": {
            "played": 1,
            "wins": 0,
            "draws": 0,
            "losses": 1,
            "goalsFor": 1,
            "goalsAgainst": 3
          }
        }
      ],
      "teams": [
        {
          "teamId": 535,
          "team": "Malaga",
          "form": "LDLD",
          "all": {
            "played": 4,
            "wins": 0,
            "draws": 2,
            "losses": 2,
            "goalsFor": 1,
            "goalsAgainst": 7
          },
          "home": {
            "played": 2,
            "wins": 0,
            "draws": 2,
            "losses": 0,
            "goalsFor": 1,
            "goalsAgainst": 1
          },
          "away": {
            "played": 2,
            "wins": 0,
            "draws": 0,
            "losses": 2,
            "goalsFor": 0,
            "goalsAgainst": 6
          }
        },
        {
          "teamId": 539,
          "team": "Levante",
          "form": "LDWD",
          "all": {
            "played": 4,
            "wins": 1,
            "draws": 2,
            "losses": 1,
            "goalsFor": 5,
            "goalsAgainst": 5
          },
          "home": {
            "played": 1,
            "wins": 1,
            "draws": 0,
            "losses": 0,
            "goalsFor": 5,
            "goalsAgainst": 2
          },
          "away": {
            "played": 3,
            "wins": 0,
            "draws": 2,
            "losses": 1,
            "goalsFor": 0,
            "goalsAgainst": 3
          }
        },
        {
          "teamId": 542,
          "team": "Alaves",
          "form": "WDWW",
          "all": {
            "played": 4,
            "wins": 3,
            "draws": 1,
            "losses": 0,
            "goalsFor": 10,
            "goalsAgainst": 3
          },
          "home": {
            "played": 3,
            "wins": 3,
            "draws": 0,
            "losses": 0,
            "goalsFor": 9,
            "goalsAgainst": 2
          },
          "away": {
            "played": 1,
            "wins": 0,
            "draws": 1,
            "losses": 0,
            "goalsFor": 1,
            "goalsAgainst": 1
          }
        },
        {
          "teamId": 727,
          "team": "Osasuna",
          "form": "DWWL",
          "all": {
            "played": 4,
            "wins": 2,
            "draws": 1,
            "losses": 1,
            "goalsFor": 5,
            "goalsAgainst": 6
          },
          "home": {
            "played": 2,
            "wins": 1,
            "draws": 1,
            "losses": 0,
            "goalsFor": 1,
            "goalsAgainst": 0
          },
          "away": {
            "played": 2,
            "wins": 1,
            "draws": 0,
            "losses": 1,
            "goalsFor": 4,
            "goalsAgainst": 6
          }
        },
        {
          "teamId": 540,
          "team": "Espanyol",
          "form": "WLL",
          "all": {
            "played": 3,
            "wins": 1,
            "draws": 0,
            "losses": 2,
            "goalsFor": 5,
            "goalsAgainst": 4
          },
          "home": {
            "played": 2,
            "wins": 1,
            "draws": 0,
            "losses": 1,
            "goalsFor": 4,
            "goalsAgainst": 2
          },
          "away": {
            "played": 1,
            "wins": 0,
            "draws": 0,
            "losses": 1,
            "goalsFor": 1,
            "goalsAgainst": 2
          }
        },
        {
          "teamId": 536,
          "team": "Sevilla",
          "form": "WWL",
          "all": {
            "played": 3,
            "wins": 2,
            "draws": 0,
            "losses": 1,
            "goalsFor": 6,
            "goalsAgainst": 5
          },
          "home": {
            "played": 2,
            "wins": 1,
            "draws": 0,
            "losses": 1,
            "goalsFor": 3,
            "goalsAgainst": 4
          },
          "away": {
            "played": 1,
            "wins": 1,
            "draws": 0,
            "losses": 0,
            "goalsFor": 3,
            "goalsAgainst": 1
          }
        }
      ],
      "fixtures": [
        {
          "fixtureId": 1570369,
          "kickoff": "2026-09-07T01:30:00+09:00",
          "status": "FT",
          "homeTeamId": 535,
          "homeTeam": "Malaga",
          "awayTeamId": 539,
          "awayTeam": "Levante",
          "injuriesChecked": true,
          "injuries": [
            {
              "fixtureId": 1570369,
              "teamId": 535,
              "playerId": 47478,
              "player": "F. Calero",
              "type": "Missing Fixture",
              "reason": "Ribs Injury"
            },
            {
              "fixtureId": 1570369,
              "teamId": 535,
              "playerId": 328192,
              "player": "M. Diarra",
              "type": "Missing Fixture",
              "reason": "Calf Injury"
            },
            {
              "fixtureId": 1570369,
              "teamId": 535,
              "playerId": 182602,
              "player": "J. Lobete",
              "type": "Missing Fixture",
              "reason": "Knee Injury"
            },
            {
              "fixtureId": 1570369,
              "teamId": 535,
              "playerId": 185234,
              "player": "D. Murillo",
              "type": "Missing Fixture",
              "reason": "Injury"
            },
            {
              "fixtureId": 1570369,
              "teamId": 535,
              "playerId": 444451,
              "player": "A. Ochoa",
              "type": "Missing Fixture",
              "reason": "Knee Injury"
            },
            {
              "fixtureId": 1570369,
              "teamId": 535,
              "playerId": 386850,
              "player": "A. Nino",
              "type": "Questionable",
              "reason": "Injury"
            },
            {
              "fixtureId": 1570369,
              "teamId": 539,
              "playerId": 378284,
              "player": "K. Etta Eyong",
              "type": "Missing Fixture",
              "reason": "Injury"
            },
            {
              "fixtureId": 1570369,
              "teamId": 539,
              "playerId": 338295,
              "player": "A. Primo",
              "type": "Missing Fixture",
              "reason": "Shoulder Injury"
            }
          ],
          "lineupsChecked": true,
          "lineups": [
            {
              "teamId": 535,
              "team": "Malaga",
              "formation": "4-3-3",
              "coach": "Funes",
              "starters": [
                "Alfonso Herrero",
                "Rafita",
                "Ángel Recio",
                "Einar Galilea",
                "José Salinas",
                "Carlos Dotor",
                "Pablo Martínez",
                "Dani Lorenzo",
                "David Larrubia",
                "Chupe",
                "Juan Cruz"
              ]
            },
            {
              "teamId": 539,
              "team": "Levante",
              "formation": "4-3-3",
              "coach": "Luís Castro",
              "starters": [
                "M. Ryan",
                "Nacho Pérez",
                "Dela",
                "A. Mandi",
                "Manu Sánchez",
                "E. Bardeli",
                "Oriol Rey",
                "Jon Ander Olasagasti",
                "Brugui",
                "Iván Romero",
                "T. Fernández"
              ]
            }
          ]
        },
        {
          "fixtureId": 1570363,
          "kickoff": "2026-09-07T01:30:00+09:00",
          "status": "FT",
          "homeTeamId": 542,
          "homeTeam": "Alaves",
          "awayTeamId": 727,
          "awayTeam": "Osasuna",
          "injuriesChecked": true,
          "injuries": [
            {
              "fixtureId": 1570363,
              "teamId": 542,
              "playerId": 6638,
              "player": "F. Garces",
              "type": "Missing Fixture",
              "reason": "Suspended"
            },
            {
              "fixtureId": 1570363,
              "teamId": 542,
              "playerId": 47181,
              "player": "T. Martinez",
              "type": "Missing Fixture",
              "reason": "Foot Injury"
            },
            {
              "fixtureId": 1570363,
              "teamId": 542,
              "playerId": 332645,
              "player": "M. Rodriguez",
              "type": "Missing Fixture",
              "reason": "Ankle Injury"
            },
            {
              "fixtureId": 1570363,
              "teamId": 727,
              "playerId": 182592,
              "player": "J. Herrando",
              "type": "Missing Fixture",
              "reason": "Injury"
            },
            {
              "fixtureId": 1570363,
              "teamId": 727,
              "playerId": 67939,
              "player": "A. Oroz",
              "type": "Missing Fixture",
              "reason": "Muscle Injury"
            },
            {
              "fixtureId": 1570363,
              "teamId": 727,
              "playerId": 21701,
              "player": "V. Rosier",
              "type": "Missing Fixture",
              "reason": "Hamstring Injury"
            }
          ],
          "lineupsChecked": true,
          "lineups": [
            {
              "teamId": 542,
              "team": "Alaves",
              "formation": "3-1-4-2",
              "coach": "Quique Sánchez Flores",
              "starters": [
                "Sivera",
                "N. Tenaglia",
                "V. Koski",
                "Jonny",
                "Antonio Blanco",
                "Angel Pérez",
                "Pablo Ibáñez",
                "Carles Aleñá",
                "A. Rebbach",
                "L. Boyé",
                "M. Díaz"
              ]
            },
            {
              "teamId": 727,
              "team": "Osasuna",
              "formation": "4-4-2",
              "coach": "Luis Miguel Ramis",
              "starters": [
                "Sergio Herrera",
                "Íñigo Arguibide",
                "Catena",
                "F. Boyomo",
                "Abel Bretones",
                "Rubén García",
                "Moncayola",
                "Iker Muñoz",
                "Moi Gómez",
                "Raúl García",
                "A. Budimir"
              ]
            }
          ]
        },
        {
          "fixtureId": 1570367,
          "kickoff": "2026-09-07T04:00:00+09:00",
          "status": "2H",
          "homeTeamId": 540,
          "homeTeam": "Espanyol",
          "awayTeamId": 536,
          "awayTeam": "Sevilla",
          "injuriesChecked": true,
          "injuries": [
            {
              "fixtureId": 1570367,
              "teamId": 540,
              "playerId": 47396,
              "player": "K. Garcia",
              "type": "Missing Fixture",
              "reason": "Hamstring Injury"
            },
            {
              "fixtureId": 1570367,
              "teamId": 540,
              "playerId": 47299,
              "player": "A. Gorosabel",
              "type": "Missing Fixture",
              "reason": "Injury"
            },
            {
              "fixtureId": 1570367,
              "teamId": 540,
              "playerId": 47349,
              "player": "J. Puado",
              "type": "Missing Fixture",
              "reason": "Knee Injury"
            },
            {
              "fixtureId": 1570367,
              "teamId": 536,
              "playerId": 433,
              "player": "Marcao",
              "type": "Missing Fixture",
              "reason": "Foot Injury"
            },
            {
              "fixtureId": 1570367,
              "teamId": 536,
              "playerId": 48471,
              "player": "R. Vargas",
              "type": "Missing Fixture",
              "reason": "Ankle Injury"
            }
          ],
          "lineupsChecked": true,
          "lineups": [
            {
              "teamId": 540,
              "team": "Espanyol",
              "formation": "4-2-3-1",
              "coach": "Manolo González",
              "starters": [
                "M. Dmitrović",
                "O. El Hilali",
                "Unai Núñez",
                "L. Cabrera",
                "Roger Hinojo",
                "Gabriel Moscardo",
                "Edu Expósito",
                "Álex Calatrava",
                "Javier Hernandez",
                "T. Dolan",
                "Roberto Fernández"
              ]
            },
            {
              "teamId": 536,
              "team": "Sevilla",
              "formation": "4-3-3",
              "coach": "Luis García",
              "starters": [
                "O. Vlachodimos",
                "Juan Iglesias",
                "A. Sangante",
                "Kike Salas",
                "G. Suazo",
                "G. Kochorashvili",
                "L. Agoumé",
                "Jon Guridi",
                "Miguel Ángel",
                "R. Ure",
                "C. Ejuke"
              ]
            }
          ]
        }
      ]
    },
    {
      "key": "SERIEA",
      "leagueId": 135,
      "season": "2026",
      "standings": [
        {
          "teamId": 497,
          "team": "AS Roma",
          "rank": 1,
          "points": 9,
          "goalsDiff": 9,
          "form": "WWW",
          "all": {
            "played": 3,
            "wins": 3,
            "draws": 0,
            "losses": 0,
            "goalsFor": 10,
            "goalsAgainst": 1
          },
          "home": {
            "played": 2,
            "wins": 2,
            "draws": 0,
            "losses": 0,
            "goalsFor": 6,
            "goalsAgainst": 1
          },
          "away": {
            "played": 1,
            "wins": 1,
            "draws": 0,
            "losses": 0,
            "goalsFor": 4,
            "goalsAgainst": 0
          }
        },
        {
          "teamId": 505,
          "team": "Inter",
          "rank": 2,
          "points": 9,
          "goalsDiff": 5,
          "form": "WWW",
          "all": {
            "played": 3,
            "wins": 3,
            "draws": 0,
            "losses": 0,
            "goalsFor": 8,
            "goalsAgainst": 3
          },
          "home": {
            "played": 2,
            "wins": 2,
            "draws": 0,
            "losses": 0,
            "goalsFor": 7,
            "goalsAgainst": 3
          },
          "away": {
            "played": 1,
            "wins": 1,
            "draws": 0,
            "losses": 0,
            "goalsFor": 1,
            "goalsAgainst": 0
          }
        },
        {
          "teamId": 895,
          "team": "Como",
          "rank": 3,
          "points": 7,
          "goalsDiff": 4,
          "form": "WWD",
          "all": {
            "played": 3,
            "wins": 2,
            "draws": 1,
            "losses": 0,
            "goalsFor": 7,
            "goalsAgainst": 3
          },
          "home": {
            "played": 0,
            "wins": 0,
            "draws": 0,
            "losses": 0,
            "goalsFor": 0,
            "goalsAgainst": 0
          },
          "away": {
            "played": 3,
            "wins": 2,
            "draws": 1,
            "losses": 0,
            "goalsFor": 7,
            "goalsAgainst": 3
          }
        },
        {
          "teamId": 489,
          "team": "AC Milan",
          "rank": 4,
          "points": 6,
          "goalsDiff": 3,
          "form": "WW",
          "all": {
            "played": 2,
            "wins": 2,
            "draws": 0,
            "losses": 0,
            "goalsFor": 4,
            "goalsAgainst": 1
          },
          "home": {
            "played": 1,
            "wins": 1,
            "draws": 0,
            "losses": 0,
            "goalsFor": 2,
            "goalsAgainst": 0
          },
          "away": {
            "played": 1,
            "wins": 1,
            "draws": 0,
            "losses": 0,
            "goalsFor": 2,
            "goalsAgainst": 1
          }
        },
        {
          "teamId": 496,
          "team": "Juventus",
          "rank": 5,
          "points": 6,
          "goalsDiff": 3,
          "form": "WW",
          "all": {
            "played": 2,
            "wins": 2,
            "draws": 0,
            "losses": 0,
            "goalsFor": 3,
            "goalsAgainst": 0
          },
          "home": {
            "played": 1,
            "wins": 1,
            "draws": 0,
            "losses": 0,
            "goalsFor": 2,
            "goalsAgainst": 0
          },
          "away": {
            "played": 1,
            "wins": 1,
            "draws": 0,
            "losses": 0,
            "goalsFor": 1,
            "goalsAgainst": 0
          }
        },
        {
          "teamId": 487,
          "team": "Lazio",
          "rank": 6,
          "points": 6,
          "goalsDiff": 2,
          "form": "WW",
          "all": {
            "played": 2,
            "wins": 2,
            "draws": 0,
            "losses": 0,
            "goalsFor": 2,
            "goalsAgainst": 0
          },
          "home": {
            "played": 1,
            "wins": 1,
            "draws": 0,
            "losses": 0,
            "goalsFor": 1,
            "goalsAgainst": 0
          },
          "away": {
            "played": 1,
            "wins": 1,
            "draws": 0,
            "losses": 0,
            "goalsFor": 1,
            "goalsAgainst": 0
          }
        },
        {
          "teamId": 512,
          "team": "Frosinone",
          "rank": 7,
          "points": 6,
          "goalsDiff": 3,
          "form": "WWL",
          "all": {
            "played": 3,
            "wins": 2,
            "draws": 0,
            "losses": 1,
            "goalsFor": 6,
            "goalsAgainst": 3
          },
          "home": {
            "played": 2,
            "wins": 1,
            "draws": 0,
            "losses": 1,
            "goalsFor": 3,
            "goalsAgainst": 3
          },
          "away": {
            "played": 1,
            "wins": 1,
            "draws": 0,
            "losses": 0,
            "goalsFor": 3,
            "goalsAgainst": 0
          }
        },
        {
          "teamId": 499,
          "team": "Atalanta",
          "rank": 8,
          "points": 6,
          "goalsDiff": 1,
          "form": "LWW",
          "all": {
            "played": 3,
            "wins": 2,
            "draws": 0,
            "losses": 1,
            "goalsFor": 4,
            "goalsAgainst": 3
          },
          "home": {
            "played": 2,
            "wins": 2,
            "draws": 0,
            "losses": 0,
            "goalsFor": 3,
            "goalsAgainst": 1
          },
          "away": {
            "played": 1,
            "wins": 0,
            "draws": 0,
            "losses": 1,
            "goalsFor": 1,
            "goalsAgainst": 2
          }
        },
        {
          "teamId": 494,
          "team": "Udinese",
          "rank": 9,
          "points": 4,
          "goalsDiff": 1,
          "form": "WD",
          "all": {
            "played": 2,
            "wins": 1,
            "draws": 1,
            "losses": 0,
            "goalsFor": 4,
            "goalsAgainst": 3
          },
          "home": {
            "played": 1,
            "wins": 0,
            "draws": 1,
            "losses": 0,
            "goalsFor": 1,
            "goalsAgainst": 1
          },
          "away": {
            "played": 1,
            "wins": 1,
            "draws": 0,
            "losses": 0,
            "goalsFor": 3,
            "goalsAgainst": 2
          }
        },
        {
          "teamId": 488,
          "team": "Sassuolo",
          "rank": 10,
          "points": 4,
          "goalsDiff": 0,
          "form": "DWL",
          "all": {
            "played": 3,
            "wins": 1,
            "draws": 1,
            "losses": 1,
            "goalsFor": 5,
            "goalsAgainst": 5
          },
          "home": {
            "played": 1,
            "wins": 1,
            "draws": 0,
            "losses": 0,
            "goalsFor": 2,
            "goalsAgainst": 1
          },
          "away": {
            "played": 2,
            "wins": 0,
            "draws": 1,
            "losses": 1,
            "goalsFor": 3,
            "goalsAgainst": 4
          }
        },
        {
          "teamId": 490,
          "team": "Cagliari",
          "rank": 11,
          "points": 3,
          "goalsDiff": 0,
          "form": "LW",
          "all": {
            "played": 2,
            "wins": 1,
            "draws": 0,
            "losses": 1,
            "goalsFor": 1,
            "goalsAgainst": 1
          },
          "home": {
            "played": 1,
            "wins": 0,
            "draws": 0,
            "losses": 1,
            "goalsFor": 0,
            "goalsAgainst": 1
          },
          "away": {
            "played": 1,
            "wins": 1,
            "draws": 0,
            "losses": 0,
            "goalsFor": 1,
            "goalsAgainst": 0
          }
        },
        {
          "teamId": 867,
          "team": "Lecce",
          "rank": 12,
          "points": 3,
          "goalsDiff": -2,
          "form": "LW",
          "all": {
            "played": 2,
            "wins": 1,
            "draws": 0,
            "losses": 1,
            "goalsFor": 2,
            "goalsAgainst": 4
          },
          "home": {
            "played": 1,
            "wins": 0,
            "draws": 0,
            "losses": 1,
            "goalsFor": 0,
            "goalsAgainst": 4
          },
          "away": {
            "played": 1,
            "wins": 1,
            "draws": 0,
            "losses": 0,
            "goalsFor": 2,
            "goalsAgainst": 0
          }
        },
        {
          "teamId": 492,
          "team": "Napoli",
          "rank": 13,
          "points": 3,
          "goalsDiff": 0,
          "form": "LLW",
          "all": {
            "played": 3,
            "wins": 1,
            "draws": 0,
            "losses": 2,
            "goalsFor": 5,
            "goalsAgainst": 5
          },
          "home": {
            "played": 1,
            "wins": 0,
            "draws": 0,
            "losses": 1,
            "goalsFor": 1,
            "goalsAgainst": 2
          },
          "away": {
            "played": 2,
            "wins": 1,
            "draws": 0,
            "losses": 1,
            "goalsFor": 4,
            "goalsAgainst": 3
          }
        },
        {
          "teamId": 503,
          "team": "Torino",
          "rank": 14,
          "points": 3,
          "goalsDiff": -1,
          "form": "WLL",
          "all": {
            "played": 3,
            "wins": 1,
            "draws": 0,
            "losses": 2,
            "goalsFor": 4,
            "goalsAgainst": 5
          },
          "home": {
            "played": 1,
            "wins": 0,
            "draws": 0,
            "losses": 1,
            "goalsFor": 1,
            "goalsAgainst": 2
          },
          "away": {
            "played": 2,
            "wins": 1,
            "draws": 0,
            "losses": 1,
            "goalsFor": 3,
            "goalsAgainst": 3
          }
        },
        {
          "teamId": 500,
          "team": "Bologna",
          "rank": 15,
          "points": 1,
          "goalsDiff": -2,
          "form": "DLL",
          "all": {
            "played": 3,
            "wins": 0,
            "draws": 1,
            "losses": 2,
            "goalsFor": 2,
            "goalsAgainst": 4
          },
          "home": {
            "played": 2,
            "wins": 0,
            "draws": 1,
            "losses": 1,
            "goalsFor": 2,
            "goalsAgainst": 3
          },
          "away": {
            "played": 1,
            "wins": 0,
            "draws": 0,
            "losses": 1,
            "goalsFor": 0,
            "goalsAgainst": 1
          }
        },
        {
          "teamId": 523,
          "team": "Parma",
          "rank": 16,
          "points": 1,
          "goalsDiff": -3,
          "form": "DLL",
          "all": {
            "played": 3,
            "wins": 0,
            "draws": 1,
            "losses": 2,
            "goalsFor": 1,
            "goalsAgainst": 4
          },
          "home": {
            "played": 2,
            "wins": 0,
            "draws": 1,
            "losses": 1,
            "goalsFor": 1,
            "goalsAgainst": 2
          },
          "away": {
            "played": 1,
            "wins": 0,
            "draws": 0,
            "losses": 1,
            "goalsFor": 0,
            "goalsAgainst": 2
          }
        },
        {
          "teamId": 1579,
          "team": "Monza",
          "rank": 17,
          "points": 1,
          "goalsDiff": -4,
          "form": "DLL",
          "all": {
            "played": 3,
            "wins": 0,
            "draws": 1,
            "losses": 2,
            "goalsFor": 4,
            "goalsAgainst": 8
          },
          "home": {
            "played": 1,
            "wins": 0,
            "draws": 0,
            "losses": 1,
            "goalsFor": 2,
            "goalsAgainst": 3
          },
          "away": {
            "played": 2,
            "wins": 0,
            "draws": 1,
            "losses": 1,
            "goalsFor": 2,
            "goalsAgainst": 5
          }
        },
        {
          "teamId": 517,
          "team": "Venezia",
          "rank": 18,
          "points": 0,
          "goalsDiff": -5,
          "form": "LLL",
          "all": {
            "played": 3,
            "wins": 0,
            "draws": 0,
            "losses": 3,
            "goalsFor": 2,
            "goalsAgainst": 7
          },
          "home": {
            "played": 1,
            "wins": 0,
            "draws": 0,
            "losses": 1,
            "goalsFor": 0,
            "goalsAgainst": 2
          },
          "away": {
            "played": 2,
            "wins": 0,
            "draws": 0,
            "losses": 2,
            "goalsFor": 2,
            "goalsAgainst": 5
          }
        },
        {
          "teamId": 495,
          "team": "Genoa",
          "rank": 19,
          "points": 0,
          "goalsDiff": -6,
          "form": "LLL",
          "all": {
            "played": 3,
            "wins": 0,
            "draws": 0,
            "losses": 3,
            "goalsFor": 1,
            "goalsAgainst": 7
          },
          "home": {
            "played": 2,
            "wins": 0,
            "draws": 0,
            "losses": 2,
            "goalsFor": 1,
            "goalsAgainst": 6
          },
          "away": {
            "played": 1,
            "wins": 0,
            "draws": 0,
            "losses": 1,
            "goalsFor": 0,
            "goalsAgainst": 1
          }
        },
        {
          "teamId": 502,
          "team": "Fiorentina",
          "rank": 20,
          "points": 0,
          "goalsDiff": -8,
          "form": "LLL",
          "all": {
            "played": 3,
            "wins": 0,
            "draws": 0,
            "losses": 3,
            "goalsFor": 1,
            "goalsAgainst": 9
          },
          "home": {
            "played": 2,
            "wins": 0,
            "draws": 0,
            "losses": 2,
            "goalsFor": 1,
            "goalsAgainst": 5
          },
          "away": {
            "played": 1,
            "wins": 0,
            "draws": 0,
            "losses": 1,
            "goalsFor": 0,
            "goalsAgainst": 4
          }
        }
      ],
      "teams": [
        {
          "teamId": 500,
          "team": "Bologna",
          "form": "LLD",
          "all": {
            "played": 3,
            "wins": 0,
            "draws": 1,
            "losses": 2,
            "goalsFor": 2,
            "goalsAgainst": 4
          },
          "home": {
            "played": 2,
            "wins": 0,
            "draws": 1,
            "losses": 1,
            "goalsFor": 2,
            "goalsAgainst": 3
          },
          "away": {
            "played": 1,
            "wins": 0,
            "draws": 0,
            "losses": 1,
            "goalsFor": 0,
            "goalsAgainst": 1
          }
        },
        {
          "teamId": 488,
          "team": "Sassuolo",
          "form": "LWD",
          "all": {
            "played": 3,
            "wins": 1,
            "draws": 1,
            "losses": 1,
            "goalsFor": 5,
            "goalsAgainst": 5
          },
          "home": {
            "played": 1,
            "wins": 1,
            "draws": 0,
            "losses": 0,
            "goalsFor": 2,
            "goalsAgainst": 1
          },
          "away": {
            "played": 2,
            "wins": 0,
            "draws": 1,
            "losses": 1,
            "goalsFor": 3,
            "goalsAgainst": 4
          }
        },
        {
          "teamId": 496,
          "team": "Juventus",
          "form": "WW",
          "all": {
            "played": 2,
            "wins": 2,
            "draws": 0,
            "losses": 0,
            "goalsFor": 3,
            "goalsAgainst": 0
          },
          "home": {
            "played": 1,
            "wins": 1,
            "draws": 0,
            "losses": 0,
            "goalsFor": 2,
            "goalsAgainst": 0
          },
          "away": {
            "played": 1,
            "wins": 1,
            "draws": 0,
            "losses": 0,
            "goalsFor": 1,
            "goalsAgainst": 0
          }
        },
        {
          "teamId": 489,
          "team": "AC Milan",
          "form": "WW",
          "all": {
            "played": 2,
            "wins": 2,
            "draws": 0,
            "losses": 0,
            "goalsFor": 4,
            "goalsAgainst": 1
          },
          "home": {
            "played": 1,
            "wins": 1,
            "draws": 0,
            "losses": 0,
            "goalsFor": 2,
            "goalsAgainst": 0
          },
          "away": {
            "played": 1,
            "wins": 1,
            "draws": 0,
            "losses": 0,
            "goalsFor": 2,
            "goalsAgainst": 1
          }
        }
      ],
      "fixtures": [
        {
          "fixtureId": 1550108,
          "kickoff": "2026-09-07T01:00:00+09:00",
          "status": "FT",
          "homeTeamId": 500,
          "homeTeam": "Bologna",
          "awayTeamId": 488,
          "awayTeam": "Sassuolo",
          "injuriesChecked": true,
          "injuries": [
            {
              "fixtureId": 1550108,
              "teamId": 500,
              "playerId": 319919,
              "player": "O. El Azzouzi",
              "type": "Missing Fixture",
              "reason": "Thigh Injury"
            },
            {
              "fixtureId": 1550108,
              "teamId": 500,
              "playerId": 30488,
              "player": "R. Orsolini",
              "type": "Missing Fixture",
              "reason": "Injury"
            },
            {
              "fixtureId": 1550108,
              "teamId": 488,
              "playerId": 291780,
              "player": "D. Boloca",
              "type": "Missing Fixture",
              "reason": "Muscle Injury"
            },
            {
              "fixtureId": 1550108,
              "teamId": 488,
              "playerId": 41371,
              "player": "F. Cande",
              "type": "Missing Fixture",
              "reason": "Knee Injury"
            },
            {
              "fixtureId": 1550108,
              "teamId": 488,
              "playerId": 328046,
              "player": "I. Kone",
              "type": "Missing Fixture",
              "reason": "Broken Leg"
            },
            {
              "fixtureId": 1550108,
              "teamId": 488,
              "playerId": 59513,
              "player": "Y. Paz",
              "type": "Missing Fixture",
              "reason": "Knee Injury"
            },
            {
              "fixtureId": 1550108,
              "teamId": 488,
              "playerId": 342055,
              "player": "E. Pieragnolo",
              "type": "Missing Fixture",
              "reason": "Knee Injury"
            },
            {
              "fixtureId": 1550108,
              "teamId": 488,
              "playerId": 40582,
              "player": "S. Walukiewicz",
              "type": "Missing Fixture",
              "reason": "Muscle Injury"
            }
          ],
          "lineupsChecked": true,
          "lineups": [
            {
              "teamId": 500,
              "team": "Bologna",
              "formation": "4-2-3-1",
              "coach": "D. Tedesco",
              "starters": [
                "Ł. Skorupski",
                "E. Holm",
                "T. Heggem",
                "A. Theate",
                "R. Alhassane",
                "L. Ferguson",
                "T. Pobega",
                "F. Bernardeschi",
                "J. Odgaard",
                "N. Cambiaghi",
                "R. Piccoli"
              ]
            },
            {
              "teamId": 488,
              "team": "Sassuolo",
              "formation": "4-3-3",
              "coach": "A. Aquilani",
              "starters": [
                "A. Murić",
                "S. Cinquegrano",
                "J. Idzes",
                "F. Leysen",
                "J. Doig",
                "Vasilije Adžić",
                "N. Matić",
                "L. Lipani",
                "C. Volpato",
                "K. Bowie",
                "A. Laurienté"
              ]
            }
          ]
        },
        {
          "fixtureId": 1550114,
          "kickoff": "2026-09-07T03:45:00+09:00",
          "status": "2H",
          "homeTeamId": 496,
          "homeTeam": "Juventus",
          "awayTeamId": 489,
          "awayTeam": "AC Milan",
          "injuriesChecked": true,
          "injuries": [
            {
              "fixtureId": 1550114,
              "teamId": 496,
              "playerId": 125674,
              "player": "J. Cabal",
              "type": "Missing Fixture",
              "reason": "Thigh Injury"
            },
            {
              "fixtureId": 1550114,
              "teamId": 496,
              "playerId": 127011,
              "player": "A. Cambiaso",
              "type": "Missing Fixture",
              "reason": "Ankle Injury"
            },
            {
              "fixtureId": 1550114,
              "teamId": 496,
              "playerId": 451504,
              "player": "J. Ekhator",
              "type": "Missing Fixture",
              "reason": "Muscle Injury"
            },
            {
              "fixtureId": 1550114,
              "teamId": 496,
              "playerId": 415,
              "player": "W. McKennie",
              "type": "Missing Fixture",
              "reason": "Muscle Injury"
            },
            {
              "fixtureId": 1550114,
              "teamId": 496,
              "playerId": 333,
              "player": "A. Milik",
              "type": "Missing Fixture",
              "reason": "Inactive"
            },
            {
              "fixtureId": 1550114,
              "teamId": 496,
              "playerId": 237129,
              "player": "P. M. Sarr",
              "type": "Missing Fixture",
              "reason": "Muscle Injury"
            },
            {
              "fixtureId": 1550114,
              "teamId": 496,
              "playerId": 116,
              "player": "K. Thuram",
              "type": "Missing Fixture",
              "reason": "Knee Injury"
            },
            {
              "fixtureId": 1550114,
              "teamId": 496,
              "playerId": 339883,
              "player": "K. Yildiz",
              "type": "Missing Fixture",
              "reason": "Foot Injury"
            },
            {
              "fixtureId": 1550114,
              "teamId": 489,
              "playerId": 56473,
              "player": "M. Gabbia",
              "type": "Missing Fixture",
              "reason": "Ankle Injury"
            }
          ],
          "lineupsChecked": true,
          "lineups": [
            {
              "teamId": 496,
              "team": "Juventus",
              "formation": "4-2-3-1",
              "coach": "L. Spalletti",
              "starters": [
                "G. Vicario",
                "P. Kalulu",
                "Bremer",
                "J. Lucumí",
                "Z. Çelik",
                "M. Locatelli",
                "Douglas Luiz",
                "Francisco Conceição",
                "N. González",
                "Kerim-Sam Alajbegović",
                "R. Kolo Muani"
              ]
            },
            {
              "teamId": 489,
              "team": "AC Milan",
              "formation": "3-4-2-1",
              "coach": "Ruben Amorim",
              "starters": [
                "M. Maignan",
                "Mario Gila",
                "K. De Winter",
                "S. Pavlović",
                "Diego Moreira",
                "L. Modrić",
                "Y. Musah",
                "P. Estupiñán",
                "A. Rabiot",
                "A. Saelemaekers",
                "Gonçalo Ramos"
              ]
            }
          ]
        }
      ]
    },
    {
      "key": "BUNDESLIGA",
      "leagueId": 78,
      "season": "2026",
      "standings": [
        {
          "teamId": 170,
          "team": "FC Augsburg",
          "rank": 1,
          "points": 6,
          "goalsDiff": 6,
          "form": "WW",
          "all": {
            "played": 2,
            "wins": 2,
            "draws": 0,
            "losses": 0,
            "goalsFor": 7,
            "goalsAgainst": 1
          },
          "home": {
            "played": 1,
            "wins": 1,
            "draws": 0,
            "losses": 0,
            "goalsFor": 3,
            "goalsAgainst": 0
          },
          "away": {
            "played": 1,
            "wins": 1,
            "draws": 0,
            "losses": 0,
            "goalsFor": 4,
            "goalsAgainst": 1
          }
        },
        {
          "teamId": 160,
          "team": "SC Freiburg",
          "rank": 2,
          "points": 6,
          "goalsDiff": 4,
          "form": "WW",
          "all": {
            "played": 2,
            "wins": 2,
            "draws": 0,
            "losses": 0,
            "goalsFor": 5,
            "goalsAgainst": 1
          },
          "home": {
            "played": 1,
            "wins": 1,
            "draws": 0,
            "losses": 0,
            "goalsFor": 4,
            "goalsAgainst": 1
          },
          "away": {
            "played": 1,
            "wins": 1,
            "draws": 0,
            "losses": 0,
            "goalsFor": 1,
            "goalsAgainst": 0
          }
        },
        {
          "teamId": 165,
          "team": "Borussia Dortmund",
          "rank": 3,
          "points": 6,
          "goalsDiff": 3,
          "form": "WW",
          "all": {
            "played": 2,
            "wins": 2,
            "draws": 0,
            "losses": 0,
            "goalsFor": 5,
            "goalsAgainst": 2
          },
          "home": {
            "played": 1,
            "wins": 1,
            "draws": 0,
            "losses": 0,
            "goalsFor": 2,
            "goalsAgainst": 0
          },
          "away": {
            "played": 1,
            "wins": 1,
            "draws": 0,
            "losses": 0,
            "goalsFor": 3,
            "goalsAgainst": 2
          }
        },
        {
          "teamId": 1660,
          "team": "SV Elversberg",
          "rank": 4,
          "points": 6,
          "goalsDiff": 2,
          "form": "WW",
          "all": {
            "played": 2,
            "wins": 2,
            "draws": 0,
            "losses": 0,
            "goalsFor": 7,
            "goalsAgainst": 5
          },
          "home": {
            "played": 1,
            "wins": 1,
            "draws": 0,
            "losses": 0,
            "goalsFor": 3,
            "goalsAgainst": 2
          },
          "away": {
            "played": 1,
            "wins": 1,
            "draws": 0,
            "losses": 0,
            "goalsFor": 4,
            "goalsAgainst": 3
          }
        },
        {
          "teamId": 164,
          "team": "FSV Mainz 05",
          "rank": 5,
          "points": 4,
          "goalsDiff": 5,
          "form": "WD",
          "all": {
            "played": 2,
            "wins": 1,
            "draws": 1,
            "losses": 0,
            "goalsFor": 5,
            "goalsAgainst": 0
          },
          "home": {
            "played": 1,
            "wins": 0,
            "draws": 1,
            "losses": 0,
            "goalsFor": 0,
            "goalsAgainst": 0
          },
          "away": {
            "played": 1,
            "wins": 1,
            "draws": 0,
            "losses": 0,
            "goalsFor": 5,
            "goalsAgainst": 0
          }
        },
        {
          "teamId": 157,
          "team": "Bayern München",
          "rank": 6,
          "points": 4,
          "goalsDiff": 4,
          "form": "DW",
          "all": {
            "played": 2,
            "wins": 1,
            "draws": 1,
            "losses": 0,
            "goalsFor": 5,
            "goalsAgainst": 1
          },
          "home": {
            "played": 1,
            "wins": 1,
            "draws": 0,
            "losses": 0,
            "goalsFor": 5,
            "goalsAgainst": 1
          },
          "away": {
            "played": 1,
            "wins": 0,
            "draws": 1,
            "losses": 0,
            "goalsFor": 0,
            "goalsAgainst": 0
          }
        },
        {
          "teamId": 168,
          "team": "Bayer Leverkusen",
          "rank": 7,
          "points": 3,
          "goalsDiff": 3,
          "form": "WL",
          "all": {
            "played": 2,
            "wins": 1,
            "draws": 0,
            "losses": 1,
            "goalsFor": 6,
            "goalsAgainst": 3
          },
          "home": {
            "played": 1,
            "wins": 1,
            "draws": 0,
            "losses": 0,
            "goalsFor": 4,
            "goalsAgainst": 0
          },
          "away": {
            "played": 1,
            "wins": 0,
            "draws": 0,
            "losses": 1,
            "goalsFor": 2,
            "goalsAgainst": 3
          }
        },
        {
          "teamId": 173,
          "team": "RB Leipzig",
          "rank": 8,
          "points": 3,
          "goalsDiff": 1,
          "form": "LW",
          "all": {
            "played": 2,
            "wins": 1,
            "draws": 0,
            "losses": 1,
            "goalsFor": 4,
            "goalsAgainst": 3
          },
          "home": {
            "played": 1,
            "wins": 1,
            "draws": 0,
            "losses": 0,
            "goalsFor": 3,
            "goalsAgainst": 0
          },
          "away": {
            "played": 1,
            "wins": 0,
            "draws": 0,
            "losses": 1,
            "goalsFor": 1,
            "goalsAgainst": 3
          }
        },
        {
          "teamId": 172,
          "team": "VfB Stuttgart",
          "rank": 9,
          "points": 3,
          "goalsDiff": -1,
          "form": "WL",
          "all": {
            "played": 2,
            "wins": 1,
            "draws": 0,
            "losses": 1,
            "goalsFor": 5,
            "goalsAgainst": 6
          },
          "home": {
            "played": 1,
            "wins": 1,
            "draws": 0,
            "losses": 0,
            "goalsFor": 4,
            "goalsAgainst": 1
          },
          "away": {
            "played": 1,
            "wins": 0,
            "draws": 0,
            "losses": 1,
            "goalsFor": 1,
            "goalsAgainst": 5
          }
        },
        {
          "teamId": 162,
          "team": "Werder Bremen",
          "rank": 10,
          "points": 3,
          "goalsDiff": -1,
          "form": "WL",
          "all": {
            "played": 2,
            "wins": 1,
            "draws": 0,
            "losses": 1,
            "goalsFor": 4,
            "goalsAgainst": 5
          },
          "home": {
            "played": 1,
            "wins": 1,
            "draws": 0,
            "losses": 0,
            "goalsFor": 3,
            "goalsAgainst": 1
          },
          "away": {
            "played": 1,
            "wins": 0,
            "draws": 0,
            "losses": 1,
            "goalsFor": 1,
            "goalsAgainst": 4
          }
        },
        {
          "teamId": 192,
          "team": "1. FC Köln",
          "rank": 11,
          "points": 3,
          "goalsDiff": -2,
          "form": "LW",
          "all": {
            "played": 2,
            "wins": 1,
            "draws": 0,
            "losses": 1,
            "goalsFor": 4,
            "goalsAgainst": 6
          },
          "home": {
            "played": 1,
            "wins": 1,
            "draws": 0,
            "losses": 0,
            "goalsFor": 3,
            "goalsAgainst": 2
          },
          "away": {
            "played": 1,
            "wins": 0,
            "draws": 0,
            "losses": 1,
            "goalsFor": 1,
            "goalsAgainst": 4
          }
        },
        {
          "teamId": 185,
          "team": "SC Paderborn 07",
          "rank": 12,
          "points": 1,
          "goalsDiff": -1,
          "form": "LD",
          "all": {
            "played": 2,
            "wins": 0,
            "draws": 1,
            "losses": 1,
            "goalsFor": 0,
            "goalsAgainst": 1
          },
          "home": {
            "played": 1,
            "wins": 0,
            "draws": 0,
            "losses": 1,
            "goalsFor": 0,
            "goalsAgainst": 1
          },
          "away": {
            "played": 1,
            "wins": 0,
            "draws": 1,
            "losses": 0,
            "goalsFor": 0,
            "goalsAgainst": 0
          }
        },
        {
          "teamId": 169,
          "team": "Eintracht Frankfurt",
          "rank": 13,
          "points": 1,
          "goalsDiff": -3,
          "form": "LD",
          "all": {
            "played": 2,
            "wins": 0,
            "draws": 1,
            "losses": 1,
            "goalsFor": 4,
            "goalsAgainst": 7
          },
          "home": {
            "played": 1,
            "wins": 0,
            "draws": 0,
            "losses": 1,
            "goalsFor": 1,
            "goalsAgainst": 4
          },
          "away": {
            "played": 1,
            "wins": 0,
            "draws": 1,
            "losses": 0,
            "goalsFor": 3,
            "goalsAgainst": 3
          }
        },
        {
          "teamId": 174,
          "team": "FC Schalke 04",
          "rank": 14,
          "points": 1,
          "goalsDiff": -3,
          "form": "DL",
          "all": {
            "played": 2,
            "wins": 0,
            "draws": 1,
            "losses": 1,
            "goalsFor": 0,
            "goalsAgainst": 3
          },
          "home": {
            "played": 1,
            "wins": 0,
            "draws": 1,
            "losses": 0,
            "goalsFor": 0,
            "goalsAgainst": 0
          },
          "away": {
            "played": 1,
            "wins": 0,
            "draws": 0,
            "losses": 1,
            "goalsFor": 0,
            "goalsAgainst": 3
          }
        },
        {
          "teamId": 182,
          "team": "Union Berlin",
          "rank": 15,
          "points": 1,
          "goalsDiff": -4,
          "form": "LD",
          "all": {
            "played": 2,
            "wins": 0,
            "draws": 1,
            "losses": 1,
            "goalsFor": 3,
            "goalsAgainst": 7
          },
          "home": {
            "played": 1,
            "wins": 0,
            "draws": 1,
            "losses": 0,
            "goalsFor": 3,
            "goalsAgainst": 3
          },
          "away": {
            "played": 1,
            "wins": 0,
            "draws": 0,
            "losses": 1,
            "goalsFor": 0,
            "goalsAgainst": 4
          }
        },
        {
          "teamId": 167,
          "team": "1899 Hoffenheim",
          "rank": 16,
          "points": 0,
          "goalsDiff": -2,
          "form": "LL",
          "all": {
            "played": 2,
            "wins": 0,
            "draws": 0,
            "losses": 2,
            "goalsFor": 4,
            "goalsAgainst": 6
          },
          "home": {
            "played": 1,
            "wins": 0,
            "draws": 0,
            "losses": 1,
            "goalsFor": 2,
            "goalsAgainst": 3
          },
          "away": {
            "played": 1,
            "wins": 0,
            "draws": 0,
            "losses": 1,
            "goalsFor": 2,
            "goalsAgainst": 3
          }
        },
        {
          "teamId": 163,
          "team": "Borussia Mönchengladbach",
          "rank": 17,
          "points": 0,
          "goalsDiff": -4,
          "form": "LL",
          "all": {
            "played": 2,
            "wins": 0,
            "draws": 0,
            "losses": 2,
            "goalsFor": 3,
            "goalsAgainst": 7
          },
          "home": {
            "played": 1,
            "wins": 0,
            "draws": 0,
            "losses": 1,
            "goalsFor": 3,
            "goalsAgainst": 4
          },
          "away": {
            "played": 1,
            "wins": 0,
            "draws": 0,
            "losses": 1,
            "goalsFor": 0,
            "goalsAgainst": 3
          }
        },
        {
          "teamId": 175,
          "team": "Hamburger SV",
          "rank": 18,
          "points": 0,
          "goalsDiff": -7,
          "form": "LL",
          "all": {
            "played": 2,
            "wins": 0,
            "draws": 0,
            "losses": 2,
            "goalsFor": 0,
            "goalsAgainst": 7
          },
          "home": {
            "played": 1,
            "wins": 0,
            "draws": 0,
            "losses": 1,
            "goalsFor": 0,
            "goalsAgainst": 5
          },
          "away": {
            "played": 1,
            "wins": 0,
            "draws": 0,
            "losses": 1,
            "goalsFor": 0,
            "goalsAgainst": 2
          }
        }
      ],
      "teams": [
        {
          "teamId": 169,
          "team": "Eintracht Frankfurt",
          "form": "DL",
          "all": {
            "played": 2,
            "wins": 0,
            "draws": 1,
            "losses": 1,
            "goalsFor": 4,
            "goalsAgainst": 7
          },
          "home": {
            "played": 1,
            "wins": 0,
            "draws": 0,
            "losses": 1,
            "goalsFor": 1,
            "goalsAgainst": 4
          },
          "away": {
            "played": 1,
            "wins": 0,
            "draws": 1,
            "losses": 0,
            "goalsFor": 3,
            "goalsAgainst": 3
          }
        },
        {
          "teamId": 170,
          "team": "FC Augsburg",
          "form": "WW",
          "all": {
            "played": 2,
            "wins": 2,
            "draws": 0,
            "losses": 0,
            "goalsFor": 7,
            "goalsAgainst": 1
          },
          "home": {
            "played": 1,
            "wins": 1,
            "draws": 0,
            "losses": 0,
            "goalsFor": 3,
            "goalsAgainst": 0
          },
          "away": {
            "played": 1,
            "wins": 1,
            "draws": 0,
            "losses": 0,
            "goalsFor": 4,
            "goalsAgainst": 1
          }
        }
      ],
      "fixtures": [
        {
          "fixtureId": 1575152,
          "kickoff": "2026-09-07T00:30:00+09:00",
          "status": "FT",
          "homeTeamId": 169,
          "homeTeam": "Eintracht Frankfurt",
          "awayTeamId": 170,
          "awayTeam": "FC Augsburg",
          "injuriesChecked": true,
          "injuries": [
            {
              "fixtureId": 1575152,
              "teamId": 169,
              "playerId": 269531,
              "player": "N. Collins",
              "type": "Missing Fixture",
              "reason": "Back Injury"
            },
            {
              "fixtureId": 1575152,
              "teamId": 169,
              "playerId": 161922,
              "player": "A. Knauff",
              "type": "Missing Fixture",
              "reason": "Muscle Injury"
            },
            {
              "fixtureId": 1575152,
              "teamId": 169,
              "playerId": 162771,
              "player": "J. Ngankam",
              "type": "Missing Fixture",
              "reason": "Injury"
            },
            {
              "fixtureId": 1575152,
              "teamId": 170,
              "playerId": 202755,
              "player": "T. Breithaupt",
              "type": "Missing Fixture",
              "reason": "Injury"
            },
            {
              "fixtureId": 1575152,
              "teamId": 170,
              "playerId": 14395,
              "player": "K. Jakic",
              "type": "Missing Fixture",
              "reason": "Injury"
            },
            {
              "fixtureId": 1575152,
              "teamId": 170,
              "playerId": 279993,
              "player": "A. Kade",
              "type": "Missing Fixture",
              "reason": "Injury"
            },
            {
              "fixtureId": 1575152,
              "teamId": 170,
              "playerId": 3395,
              "player": "S. Mounie",
              "type": "Missing Fixture",
              "reason": "Injury"
            }
          ],
          "lineupsChecked": true,
          "lineups": [
            {
              "teamId": 169,
              "team": "Eintracht Frankfurt",
              "formation": "4-4-2",
              "coach": "A. Hütter",
              "starters": [
                "N. Atubolu",
                "Elias Baum",
                "R. Koch",
                "L. Brassier",
                "K. Kosugi",
                "R. Dōan",
                "M. Götze",
                "R. Onyedika",
                "C. Uzun",
                "Y. Ebnoutalib",
                "J. Burkardt"
              ]
            },
            {
              "teamId": 170,
              "team": "FC Augsburg",
              "formation": "5-3-2",
              "coach": "M. Baum",
              "starters": [
                "F. Dahmen",
                "M. Wolf",
                "Noahkai Kai Daniel Banks",
                "C. Matsima",
                "C. Brackelmann",
                "Hennes Behrens",
                "H. Massengo",
                "F. Rieder",
                "R. Fellhauer",
                "A. Ibrahimović",
                "M. Gregoritsch"
              ]
            }
          ]
        }
      ]
    },
    {
      "key": "LIGUE1",
      "leagueId": 61,
      "season": "2026",
      "standings": [
        {
          "teamId": 91,
          "team": "Monaco",
          "rank": 1,
          "points": 9,
          "goalsDiff": 4,
          "form": "WWW",
          "all": {
            "played": 3,
            "wins": 3,
            "draws": 0,
            "losses": 0,
            "goalsFor": 5,
            "goalsAgainst": 1
          },
          "home": {
            "played": 1,
            "wins": 1,
            "draws": 0,
            "losses": 0,
            "goalsFor": 2,
            "goalsAgainst": 0
          },
          "away": {
            "played": 2,
            "wins": 2,
            "draws": 0,
            "losses": 0,
            "goalsFor": 3,
            "goalsAgainst": 1
          }
        },
        {
          "teamId": 80,
          "team": "Lyon",
          "rank": 2,
          "points": 7,
          "goalsDiff": 4,
          "form": "WDW",
          "all": {
            "played": 3,
            "wins": 2,
            "draws": 1,
            "losses": 0,
            "goalsFor": 6,
            "goalsAgainst": 2
          },
          "home": {
            "played": 2,
            "wins": 1,
            "draws": 1,
            "losses": 0,
            "goalsFor": 4,
            "goalsAgainst": 2
          },
          "away": {
            "played": 1,
            "wins": 1,
            "draws": 0,
            "losses": 0,
            "goalsFor": 2,
            "goalsAgainst": 0
          }
        },
        {
          "teamId": 79,
          "team": "Lille",
          "rank": 3,
          "points": 7,
          "goalsDiff": 3,
          "form": "WDW",
          "all": {
            "played": 3,
            "wins": 2,
            "draws": 1,
            "losses": 0,
            "goalsFor": 5,
            "goalsAgainst": 2
          },
          "home": {
            "played": 1,
            "wins": 0,
            "draws": 1,
            "losses": 0,
            "goalsFor": 2,
            "goalsAgainst": 2
          },
          "away": {
            "played": 2,
            "wins": 2,
            "draws": 0,
            "losses": 0,
            "goalsFor": 3,
            "goalsAgainst": 0
          }
        },
        {
          "teamId": 94,
          "team": "Rennes",
          "rank": 4,
          "points": 7,
          "goalsDiff": 2,
          "form": "WWD",
          "all": {
            "played": 3,
            "wins": 2,
            "draws": 1,
            "losses": 0,
            "goalsFor": 7,
            "goalsAgainst": 5
          },
          "home": {
            "played": 2,
            "wins": 1,
            "draws": 1,
            "losses": 0,
            "goalsFor": 5,
            "goalsAgainst": 4
          },
          "away": {
            "played": 1,
            "wins": 1,
            "draws": 0,
            "losses": 0,
            "goalsFor": 2,
            "goalsAgainst": 1
          }
        },
        {
          "teamId": 95,
          "team": "Strasbourg",
          "rank": 5,
          "points": 6,
          "goalsDiff": 1,
          "form": "WWL",
          "all": {
            "played": 3,
            "wins": 2,
            "draws": 0,
            "losses": 1,
            "goalsFor": 8,
            "goalsAgainst": 7
          },
          "home": {
            "played": 1,
            "wins": 1,
            "draws": 0,
            "losses": 0,
            "goalsFor": 2,
            "goalsAgainst": 1
          },
          "away": {
            "played": 2,
            "wins": 1,
            "draws": 0,
            "losses": 1,
            "goalsFor": 6,
            "goalsAgainst": 6
          }
        },
        {
          "teamId": 106,
          "team": "Stade Brestois 29",
          "rank": 6,
          "points": 5,
          "goalsDiff": 1,
          "form": "WDD",
          "all": {
            "played": 3,
            "wins": 1,
            "draws": 2,
            "losses": 0,
            "goalsFor": 6,
            "goalsAgainst": 5
          },
          "home": {
            "played": 1,
            "wins": 0,
            "draws": 1,
            "losses": 0,
            "goalsFor": 2,
            "goalsAgainst": 2
          },
          "away": {
            "played": 2,
            "wins": 1,
            "draws": 1,
            "losses": 0,
            "goalsFor": 4,
            "goalsAgainst": 3
          }
        },
        {
          "teamId": 114,
          "team": "Paris FC",
          "rank": 7,
          "points": 4,
          "goalsDiff": 3,
          "form": "WD",
          "all": {
            "played": 2,
            "wins": 1,
            "draws": 1,
            "losses": 0,
            "goalsFor": 3,
            "goalsAgainst": 0
          },
          "home": {
            "played": 1,
            "wins": 1,
            "draws": 0,
            "losses": 0,
            "goalsFor": 3,
            "goalsAgainst": 0
          },
          "away": {
            "played": 1,
            "wins": 0,
            "draws": 1,
            "losses": 0,
            "goalsFor": 0,
            "goalsAgainst": 0
          }
        },
        {
          "teamId": 97,
          "team": "Lorient",
          "rank": 8,
          "points": 4,
          "goalsDiff": 0,
          "form": "WLD",
          "all": {
            "played": 3,
            "wins": 1,
            "draws": 1,
            "losses": 1,
            "goalsFor": 2,
            "goalsAgainst": 2
          },
          "home": {
            "played": 1,
            "wins": 0,
            "draws": 0,
            "losses": 1,
            "goalsFor": 1,
            "goalsAgainst": 2
          },
          "away": {
            "played": 2,
            "wins": 1,
            "draws": 1,
            "losses": 0,
            "goalsFor": 1,
            "goalsAgainst": 0
          }
        },
        {
          "teamId": 110,
          "team": "Estac Troyes",
          "rank": 9,
          "points": 4,
          "goalsDiff": -3,
          "form": "LWD",
          "all": {
            "played": 3,
            "wins": 1,
            "draws": 1,
            "losses": 1,
            "goalsFor": 4,
            "goalsAgainst": 7
          },
          "home": {
            "played": 2,
            "wins": 0,
            "draws": 1,
            "losses": 1,
            "goalsFor": 2,
            "goalsAgainst": 6
          },
          "away": {
            "played": 1,
            "wins": 1,
            "draws": 0,
            "losses": 0,
            "goalsFor": 2,
            "goalsAgainst": 1
          }
        },
        {
          "teamId": 81,
          "team": "Marseille",
          "rank": 10,
          "points": 3,
          "goalsDiff": 2,
          "form": "LW",
          "all": {
            "played": 2,
            "wins": 1,
            "draws": 0,
            "losses": 1,
            "goalsFor": 4,
            "goalsAgainst": 2
          },
          "home": {
            "played": 1,
            "wins": 1,
            "draws": 0,
            "losses": 0,
            "goalsFor": 4,
            "goalsAgainst": 0
          },
          "away": {
            "played": 1,
            "wins": 0,
            "draws": 0,
            "losses": 1,
            "goalsFor": 0,
            "goalsAgainst": 2
          }
        },
        {
          "teamId": 116,
          "team": "Lens",
          "rank": 11,
          "points": 3,
          "goalsDiff": 1,
          "form": "LLW",
          "all": {
            "played": 3,
            "wins": 1,
            "draws": 0,
            "losses": 2,
            "goalsFor": 6,
            "goalsAgainst": 5
          },
          "home": {
            "played": 2,
            "wins": 1,
            "draws": 0,
            "losses": 1,
            "goalsFor": 5,
            "goalsAgainst": 3
          },
          "away": {
            "played": 1,
            "wins": 0,
            "draws": 0,
            "losses": 1,
            "goalsFor": 1,
            "goalsAgainst": 2
          }
        },
        {
          "teamId": 77,
          "team": "Angers",
          "rank": 12,
          "points": 3,
          "goalsDiff": -1,
          "form": "LWL",
          "all": {
            "played": 3,
            "wins": 1,
            "draws": 0,
            "losses": 2,
            "goalsFor": 4,
            "goalsAgainst": 5
          },
          "home": {
            "played": 2,
            "wins": 0,
            "draws": 0,
            "losses": 2,
            "goalsFor": 1,
            "goalsAgainst": 4
          },
          "away": {
            "played": 1,
            "wins": 1,
            "draws": 0,
            "losses": 0,
            "goalsFor": 3,
            "goalsAgainst": 1
          }
        },
        {
          "teamId": 85,
          "team": "Paris Saint Germain",
          "rank": 13,
          "points": 2,
          "goalsDiff": -1,
          "form": "LDD",
          "all": {
            "played": 3,
            "wins": 0,
            "draws": 2,
            "losses": 1,
            "goalsFor": 5,
            "goalsAgainst": 6
          },
          "home": {
            "played": 1,
            "wins": 0,
            "draws": 0,
            "losses": 1,
            "goalsFor": 1,
            "goalsAgainst": 2
          },
          "away": {
            "played": 2,
            "wins": 0,
            "draws": 2,
            "losses": 0,
            "goalsFor": 4,
            "goalsAgainst": 4
          }
        },
        {
          "teamId": 1298,
          "team": "Le Mans",
          "rank": 14,
          "points": 2,
          "goalsDiff": -1,
          "form": "DLD",
          "all": {
            "played": 3,
            "wins": 0,
            "draws": 2,
            "losses": 1,
            "goalsFor": 5,
            "goalsAgainst": 6
          },
          "home": {
            "played": 1,
            "wins": 0,
            "draws": 1,
            "losses": 0,
            "goalsFor": 2,
            "goalsAgainst": 2
          },
          "away": {
            "played": 2,
            "wins": 0,
            "draws": 1,
            "losses": 1,
            "goalsFor": 3,
            "goalsAgainst": 4
          }
        },
        {
          "teamId": 84,
          "team": "Nice",
          "rank": 15,
          "points": 2,
          "goalsDiff": -3,
          "form": "DLD",
          "all": {
            "played": 3,
            "wins": 0,
            "draws": 2,
            "losses": 1,
            "goalsFor": 1,
            "goalsAgainst": 4
          },
          "home": {
            "played": 2,
            "wins": 0,
            "draws": 2,
            "losses": 0,
            "goalsFor": 1,
            "goalsAgainst": 1
          },
          "away": {
            "played": 1,
            "wins": 0,
            "draws": 0,
            "losses": 1,
            "goalsFor": 0,
            "goalsAgainst": 3
          }
        },
        {
          "teamId": 111,
          "team": "Le Havre",
          "rank": 16,
          "points": 1,
          "goalsDiff": -2,
          "form": "LDL",
          "all": {
            "played": 3,
            "wins": 0,
            "draws": 1,
            "losses": 2,
            "goalsFor": 2,
            "goalsAgainst": 4
          },
          "home": {
            "played": 2,
            "wins": 0,
            "draws": 0,
            "losses": 2,
            "goalsFor": 1,
            "goalsAgainst": 3
          },
          "away": {
            "played": 1,
            "wins": 0,
            "draws": 1,
            "losses": 0,
            "goalsFor": 1,
            "goalsAgainst": 1
          }
        },
        {
          "teamId": 96,
          "team": "Toulouse",
          "rank": 17,
          "points": 1,
          "goalsDiff": -3,
          "form": "LDL",
          "all": {
            "played": 3,
            "wins": 0,
            "draws": 1,
            "losses": 2,
            "goalsFor": 2,
            "goalsAgainst": 5
          },
          "home": {
            "played": 2,
            "wins": 0,
            "draws": 0,
            "losses": 2,
            "goalsFor": 0,
            "goalsAgainst": 3
          },
          "away": {
            "played": 1,
            "wins": 0,
            "draws": 1,
            "losses": 0,
            "goalsFor": 2,
            "goalsAgainst": 2
          }
        },
        {
          "teamId": 108,
          "team": "Auxerre",
          "rank": 18,
          "points": 0,
          "goalsDiff": -7,
          "form": "LLL",
          "all": {
            "played": 3,
            "wins": 0,
            "draws": 0,
            "losses": 3,
            "goalsFor": 4,
            "goalsAgainst": 11
          },
          "home": {
            "played": 1,
            "wins": 0,
            "draws": 0,
            "losses": 1,
            "goalsFor": 1,
            "goalsAgainst": 3
          },
          "away": {
            "played": 2,
            "wins": 0,
            "draws": 0,
            "losses": 2,
            "goalsFor": 3,
            "goalsAgainst": 8
          }
        }
      ],
      "teams": [
        {
          "teamId": 77,
          "team": "Angers",
          "form": "LWL",
          "all": {
            "played": 3,
            "wins": 1,
            "draws": 0,
            "losses": 2,
            "goalsFor": 4,
            "goalsAgainst": 5
          },
          "home": {
            "played": 2,
            "wins": 0,
            "draws": 0,
            "losses": 2,
            "goalsFor": 1,
            "goalsAgainst": 4
          },
          "away": {
            "played": 1,
            "wins": 1,
            "draws": 0,
            "losses": 0,
            "goalsFor": 3,
            "goalsAgainst": 1
          }
        },
        {
          "teamId": 94,
          "team": "Rennes",
          "form": "DWW",
          "all": {
            "played": 3,
            "wins": 2,
            "draws": 1,
            "losses": 0,
            "goalsFor": 7,
            "goalsAgainst": 5
          },
          "home": {
            "played": 2,
            "wins": 1,
            "draws": 1,
            "losses": 0,
            "goalsFor": 5,
            "goalsAgainst": 4
          },
          "away": {
            "played": 1,
            "wins": 1,
            "draws": 0,
            "losses": 0,
            "goalsFor": 2,
            "goalsAgainst": 1
          }
        },
        {
          "teamId": 81,
          "team": "Marseille",
          "form": "WL",
          "all": {
            "played": 2,
            "wins": 1,
            "draws": 0,
            "losses": 1,
            "goalsFor": 4,
            "goalsAgainst": 2
          },
          "home": {
            "played": 1,
            "wins": 1,
            "draws": 0,
            "losses": 0,
            "goalsFor": 4,
            "goalsAgainst": 0
          },
          "away": {
            "played": 1,
            "wins": 0,
            "draws": 0,
            "losses": 1,
            "goalsFor": 0,
            "goalsAgainst": 2
          }
        },
        {
          "teamId": 114,
          "team": "Paris FC",
          "form": "DW",
          "all": {
            "played": 2,
            "wins": 1,
            "draws": 1,
            "losses": 0,
            "goalsFor": 3,
            "goalsAgainst": 0
          },
          "home": {
            "played": 1,
            "wins": 1,
            "draws": 0,
            "losses": 0,
            "goalsFor": 3,
            "goalsAgainst": 0
          },
          "away": {
            "played": 1,
            "wins": 0,
            "draws": 1,
            "losses": 0,
            "goalsFor": 0,
            "goalsAgainst": 0
          }
        }
      ],
      "fixtures": [
        {
          "fixtureId": 1552747,
          "kickoff": "2026-09-07T00:15:00+09:00",
          "status": "FT",
          "homeTeamId": 77,
          "homeTeam": "Angers",
          "awayTeamId": 94,
          "awayTeam": "Rennes",
          "injuriesChecked": true,
          "injuries": [
            {
              "fixtureId": 1552747,
              "teamId": 77,
              "playerId": 20554,
              "player": "H. Belkebla",
              "type": "Missing Fixture",
              "reason": "Thigh Injury"
            },
            {
              "fixtureId": 1552747,
              "teamId": 77,
              "playerId": 289555,
              "player": "L. Mouton",
              "type": "Missing Fixture",
              "reason": "Knee Injury"
            },
            {
              "fixtureId": 1552747,
              "teamId": 94,
              "playerId": 417830,
              "player": "A. Ait Boudlal",
              "type": "Missing Fixture",
              "reason": "Inactive"
            },
            {
              "fixtureId": 1552747,
              "teamId": 94,
              "playerId": 343792,
              "player": "D. Cisse",
              "type": "Missing Fixture",
              "reason": "Inactive"
            }
          ],
          "lineupsChecked": true,
          "lineups": [
            {
              "teamId": 77,
              "team": "Angers",
              "formation": "4-2-3-1",
              "coach": "S. Gilli",
              "starters": [
                "Anthony Lopes",
                "C. Arcus",
                "O. Camara",
                "J. Lefort",
                "J. Kalulu",
                "Y. Belkhdim",
                "B. van den Boomen",
                "J. Allevinah",
                "A. Sbaï",
                "A. Bermont",
                "A. El Ouazzani"
              ]
            },
            {
              "teamId": 94,
              "team": "Rennes",
              "formation": "4-3-3",
              "coach": "F. Haise",
              "starters": [
                "B. Samba",
                "P. Frankowski",
                "C. Cresswell",
                "A. Rouault",
                "Q. Merlin",
                "S. Szymański",
                "V. Rongier",
                "M. Camara",
                "L. Blas",
                "E. Lepaul",
                "Mousa Tamari"
              ]
            }
          ]
        },
        {
          "fixtureId": 1552751,
          "kickoff": "2026-09-07T03:45:00+09:00",
          "status": "2H",
          "homeTeamId": 81,
          "homeTeam": "Marseille",
          "awayTeamId": 114,
          "awayTeam": "Paris FC",
          "injuriesChecked": true,
          "injuries": [
            {
              "fixtureId": 1552751,
              "teamId": 81,
              "playerId": 926,
              "player": "G. Kondogbia",
              "type": "Missing Fixture",
              "reason": "Injury"
            },
            {
              "fixtureId": 1552751,
              "teamId": 81,
              "playerId": 354298,
              "player": "T. Nnadi",
              "type": "Missing Fixture",
              "reason": "Injury"
            },
            {
              "fixtureId": 1552751,
              "teamId": 114,
              "playerId": 22229,
              "player": "J. Ikone",
              "type": "Missing Fixture",
              "reason": "Hamstring Injury"
            },
            {
              "fixtureId": 1552751,
              "teamId": 114,
              "playerId": 490981,
              "player": "E. Mbemba",
              "type": "Missing Fixture",
              "reason": "Inactive"
            },
            {
              "fixtureId": 1552751,
              "teamId": 114,
              "playerId": 266013,
              "player": "Otavio",
              "type": "Missing Fixture",
              "reason": "Injury"
            },
            {
              "fixtureId": 1552751,
              "teamId": 114,
              "playerId": 389322,
              "player": "N. Sangui",
              "type": "Missing Fixture",
              "reason": "Injury"
            }
          ],
          "lineupsChecked": true,
          "lineups": [
            {
              "teamId": 81,
              "team": "Marseille",
              "formation": "4-1-4-1",
              "coach": "Bruno Genesio",
              "starters": [
                "J. de Lange",
                "T. Weah",
                "C. Egan-Riley",
                "N. Aguerd",
                "Emerson",
                "P. Højbjerg",
                "A. Harit",
                "H. Abdelli",
                "A. Gomes",
                "Igor Paixão",
                "A. Gouiri"
              ]
            },
            {
              "teamId": 114,
              "team": "Paris FC",
              "formation": "5-4-1",
              "coach": "L. Rosenior",
              "starters": [
                "K. Trapp",
                "A. Camara",
                "S. Chergui",
                "D. Coppola",
                "H. Traoré",
                "L. Koleosho",
                "I. Kebbal",
                "M. Lopez",
                "P. Lees-Melou",
                "P. Pagis",
                "L. Sinayoko"
              ]
            }
          ]
        }
      ]
    },
    {
      "key": "PRIMEIRA_LIGA",
      "leagueId": 94,
      "season": "2026",
      "standings": [
        {
          "teamId": 212,
          "team": "FC Porto",
          "rank": 1,
          "points": 15,
          "goalsDiff": 10,
          "form": "WWWWW",
          "all": {
            "played": 5,
            "wins": 5,
            "draws": 0,
            "losses": 0,
            "goalsFor": 11,
            "goalsAgainst": 1
          },
          "home": {
            "played": 3,
            "wins": 3,
            "draws": 0,
            "losses": 0,
            "goalsFor": 6,
            "goalsAgainst": 1
          },
          "away": {
            "played": 2,
            "wins": 2,
            "draws": 0,
            "losses": 0,
            "goalsFor": 5,
            "goalsAgainst": 0
          }
        },
        {
          "teamId": 228,
          "team": "Sporting CP",
          "rank": 2,
          "points": 13,
          "goalsDiff": 9,
          "form": "WWWWD",
          "all": {
            "played": 5,
            "wins": 4,
            "draws": 1,
            "losses": 0,
            "goalsFor": 14,
            "goalsAgainst": 5
          },
          "home": {
            "played": 3,
            "wins": 3,
            "draws": 0,
            "losses": 0,
            "goalsFor": 8,
            "goalsAgainst": 3
          },
          "away": {
            "played": 2,
            "wins": 1,
            "draws": 1,
            "losses": 0,
            "goalsFor": 6,
            "goalsAgainst": 2
          }
        },
        {
          "teamId": 227,
          "team": "Santa Clara",
          "rank": 3,
          "points": 11,
          "goalsDiff": 6,
          "form": "WDWWD",
          "all": {
            "played": 5,
            "wins": 3,
            "draws": 2,
            "losses": 0,
            "goalsFor": 9,
            "goalsAgainst": 3
          },
          "home": {
            "played": 3,
            "wins": 2,
            "draws": 1,
            "losses": 0,
            "goalsFor": 7,
            "goalsAgainst": 2
          },
          "away": {
            "played": 2,
            "wins": 1,
            "draws": 1,
            "losses": 0,
            "goalsFor": 2,
            "goalsAgainst": 1
          }
        },
        {
          "teamId": 211,
          "team": "Benfica",
          "rank": 4,
          "points": 10,
          "goalsDiff": 11,
          "form": "WWWD",
          "all": {
            "played": 4,
            "wins": 3,
            "draws": 1,
            "losses": 0,
            "goalsFor": 14,
            "goalsAgainst": 3
          },
          "home": {
            "played": 2,
            "wins": 1,
            "draws": 1,
            "losses": 0,
            "goalsFor": 4,
            "goalsAgainst": 3
          },
          "away": {
            "played": 2,
            "wins": 2,
            "draws": 0,
            "losses": 0,
            "goalsFor": 10,
            "goalsAgainst": 0
          }
        },
        {
          "teamId": 240,
          "team": "Arouca",
          "rank": 5,
          "points": 9,
          "goalsDiff": 4,
          "form": "WLWW",
          "all": {
            "played": 4,
            "wins": 3,
            "draws": 0,
            "losses": 1,
            "goalsFor": 7,
            "goalsAgainst": 3
          },
          "home": {
            "played": 2,
            "wins": 2,
            "draws": 0,
            "losses": 0,
            "goalsFor": 6,
            "goalsAgainst": 1
          },
          "away": {
            "played": 2,
            "wins": 1,
            "draws": 0,
            "losses": 1,
            "goalsFor": 1,
            "goalsAgainst": 2
          }
        },
        {
          "teamId": 762,
          "team": "GIL Vicente",
          "rank": 6,
          "points": 7,
          "goalsDiff": 3,
          "form": "DWW",
          "all": {
            "played": 3,
            "wins": 2,
            "draws": 1,
            "losses": 0,
            "goalsFor": 3,
            "goalsAgainst": 0
          },
          "home": {
            "played": 2,
            "wins": 2,
            "draws": 0,
            "losses": 0,
            "goalsFor": 3,
            "goalsAgainst": 0
          },
          "away": {
            "played": 1,
            "wins": 0,
            "draws": 1,
            "losses": 0,
            "goalsFor": 0,
            "goalsAgainst": 0
          }
        },
        {
          "teamId": 217,
          "team": "SC Braga",
          "rank": 7,
          "points": 7,
          "goalsDiff": 2,
          "form": "WWD",
          "all": {
            "played": 3,
            "wins": 2,
            "draws": 1,
            "losses": 0,
            "goalsFor": 5,
            "goalsAgainst": 3
          },
          "home": {
            "played": 1,
            "wins": 1,
            "draws": 0,
            "losses": 0,
            "goalsFor": 1,
            "goalsAgainst": 0
          },
          "away": {
            "played": 2,
            "wins": 1,
            "draws": 1,
            "losses": 0,
            "goalsFor": 4,
            "goalsAgainst": 3
          }
        },
        {
          "teamId": 214,
          "team": "Maritimo",
          "rank": 8,
          "points": 7,
          "goalsDiff": -2,
          "form": "LLDWW",
          "all": {
            "played": 5,
            "wins": 2,
            "draws": 1,
            "losses": 2,
            "goalsFor": 6,
            "goalsAgainst": 8
          },
          "home": {
            "played": 3,
            "wins": 1,
            "draws": 1,
            "losses": 1,
            "goalsFor": 3,
            "goalsAgainst": 5
          },
          "away": {
            "played": 2,
            "wins": 1,
            "draws": 0,
            "losses": 1,
            "goalsFor": 3,
            "goalsAgainst": 3
          }
        },
        {
          "teamId": 15130,
          "team": "Estrela",
          "rank": 9,
          "points": 6,
          "goalsDiff": 1,
          "form": "DWDD",
          "all": {
            "played": 4,
            "wins": 1,
            "draws": 3,
            "losses": 0,
            "goalsFor": 9,
            "goalsAgainst": 8
          },
          "home": {
            "played": 2,
            "wins": 0,
            "draws": 2,
            "losses": 0,
            "goalsFor": 4,
            "goalsAgainst": 4
          },
          "away": {
            "played": 2,
            "wins": 1,
            "draws": 1,
            "losses": 0,
            "goalsFor": 5,
            "goalsAgainst": 4
          }
        },
        {
          "teamId": 225,
          "team": "Nacional",
          "rank": 10,
          "points": 4,
          "goalsDiff": -2,
          "form": "LLLWD",
          "all": {
            "played": 5,
            "wins": 1,
            "draws": 1,
            "losses": 3,
            "goalsFor": 6,
            "goalsAgainst": 8
          },
          "home": {
            "played": 2,
            "wins": 1,
            "draws": 0,
            "losses": 1,
            "goalsFor": 4,
            "goalsAgainst": 3
          },
          "away": {
            "played": 3,
            "wins": 0,
            "draws": 1,
            "losses": 2,
            "goalsFor": 2,
            "goalsAgainst": 5
          }
        },
        {
          "teamId": 215,
          "team": "Moreirense",
          "rank": 11,
          "points": 4,
          "goalsDiff": -4,
          "form": "LWLD",
          "all": {
            "played": 4,
            "wins": 1,
            "draws": 1,
            "losses": 2,
            "goalsFor": 4,
            "goalsAgainst": 8
          },
          "home": {
            "played": 1,
            "wins": 0,
            "draws": 1,
            "losses": 0,
            "goalsFor": 2,
            "goalsAgainst": 2
          },
          "away": {
            "played": 3,
            "wins": 1,
            "draws": 0,
            "losses": 2,
            "goalsFor": 2,
            "goalsAgainst": 6
          }
        },
        {
          "teamId": 224,
          "team": "Vitória SC",
          "rank": 12,
          "points": 3,
          "goalsDiff": -2,
          "form": "LWLL",
          "all": {
            "played": 4,
            "wins": 1,
            "draws": 0,
            "losses": 3,
            "goalsFor": 3,
            "goalsAgainst": 5
          },
          "home": {
            "played": 2,
            "wins": 1,
            "draws": 0,
            "losses": 1,
            "goalsFor": 1,
            "goalsAgainst": 1
          },
          "away": {
            "played": 2,
            "wins": 0,
            "draws": 0,
            "losses": 2,
            "goalsFor": 2,
            "goalsAgainst": 4
          }
        },
        {
          "teamId": 242,
          "team": "Famalicao",
          "rank": 13,
          "points": 3,
          "goalsDiff": -2,
          "form": "DDLLD",
          "all": {
            "played": 5,
            "wins": 0,
            "draws": 3,
            "losses": 2,
            "goalsFor": 4,
            "goalsAgainst": 6
          },
          "home": {
            "played": 2,
            "wins": 0,
            "draws": 1,
            "losses": 1,
            "goalsFor": 1,
            "goalsAgainst": 2
          },
          "away": {
            "played": 3,
            "wins": 0,
            "draws": 2,
            "losses": 1,
            "goalsFor": 3,
            "goalsAgainst": 4
          }
        },
        {
          "teamId": 226,
          "team": "Rio Ave",
          "rank": 14,
          "points": 3,
          "goalsDiff": -9,
          "form": "LLWLL",
          "all": {
            "played": 5,
            "wins": 1,
            "draws": 0,
            "losses": 4,
            "goalsFor": 2,
            "goalsAgainst": 11
          },
          "home": {
            "played": 2,
            "wins": 0,
            "draws": 0,
            "losses": 2,
            "goalsFor": 0,
            "goalsAgainst": 6
          },
          "away": {
            "played": 3,
            "wins": 1,
            "draws": 0,
            "losses": 2,
            "goalsFor": 2,
            "goalsAgainst": 5
          }
        },
        {
          "teamId": 238,
          "team": "Academico Viseu",
          "rank": 15,
          "points": 2,
          "goalsDiff": -4,
          "form": "LDLD",
          "all": {
            "played": 4,
            "wins": 0,
            "draws": 2,
            "losses": 2,
            "goalsFor": 4,
            "goalsAgainst": 8
          },
          "home": {
            "played": 2,
            "wins": 0,
            "draws": 0,
            "losses": 2,
            "goalsFor": 0,
            "goalsAgainst": 4
          },
          "away": {
            "played": 2,
            "wins": 0,
            "draws": 2,
            "losses": 0,
            "goalsFor": 4,
            "goalsAgainst": 4
          }
        },
        {
          "teamId": 4724,
          "team": "Alverca",
          "rank": 16,
          "points": 2,
          "goalsDiff": -5,
          "form": "LDLDL",
          "all": {
            "played": 5,
            "wins": 0,
            "draws": 2,
            "losses": 3,
            "goalsFor": 5,
            "goalsAgainst": 10
          },
          "home": {
            "played": 3,
            "wins": 0,
            "draws": 2,
            "losses": 1,
            "goalsFor": 4,
            "goalsAgainst": 5
          },
          "away": {
            "played": 2,
            "wins": 0,
            "draws": 0,
            "losses": 2,
            "goalsFor": 1,
            "goalsAgainst": 5
          }
        },
        {
          "teamId": 230,
          "team": "Estoril",
          "rank": 17,
          "points": 1,
          "goalsDiff": -5,
          "form": "LLLD",
          "all": {
            "played": 4,
            "wins": 0,
            "draws": 1,
            "losses": 3,
            "goalsFor": 2,
            "goalsAgainst": 7
          },
          "home": {
            "played": 2,
            "wins": 0,
            "draws": 1,
            "losses": 1,
            "goalsFor": 1,
            "goalsAgainst": 3
          },
          "away": {
            "played": 2,
            "wins": 0,
            "draws": 0,
            "losses": 2,
            "goalsFor": 1,
            "goalsAgainst": 4
          }
        },
        {
          "teamId": 4716,
          "team": "Casa Pia",
          "rank": 18,
          "points": 0,
          "goalsDiff": -11,
          "form": "LLLL",
          "all": {
            "played": 4,
            "wins": 0,
            "draws": 0,
            "losses": 4,
            "goalsFor": 0,
            "goalsAgainst": 11
          },
          "home": {
            "played": 2,
            "wins": 0,
            "draws": 0,
            "losses": 2,
            "goalsFor": 0,
            "goalsAgainst": 8
          },
          "away": {
            "played": 2,
            "wins": 0,
            "draws": 0,
            "losses": 2,
            "goalsFor": 0,
            "goalsAgainst": 3
          }
        }
      ],
      "teams": [
        {
          "teamId": 762,
          "team": "GIL Vicente",
          "form": "WWD",
          "all": {
            "played": 3,
            "wins": 2,
            "draws": 1,
            "losses": 0,
            "goalsFor": 3,
            "goalsAgainst": 0
          },
          "home": {
            "played": 2,
            "wins": 2,
            "draws": 0,
            "losses": 0,
            "goalsFor": 3,
            "goalsAgainst": 0
          },
          "away": {
            "played": 1,
            "wins": 0,
            "draws": 1,
            "losses": 0,
            "goalsFor": 0,
            "goalsAgainst": 0
          }
        },
        {
          "teamId": 238,
          "team": "Academico Viseu",
          "form": "DLDL",
          "all": {
            "played": 4,
            "wins": 0,
            "draws": 2,
            "losses": 2,
            "goalsFor": 4,
            "goalsAgainst": 8
          },
          "home": {
            "played": 2,
            "wins": 0,
            "draws": 0,
            "losses": 2,
            "goalsFor": 0,
            "goalsAgainst": 4
          },
          "away": {
            "played": 2,
            "wins": 0,
            "draws": 2,
            "losses": 0,
            "goalsFor": 4,
            "goalsAgainst": 4
          }
        },
        {
          "teamId": 224,
          "team": "Vitória SC",
          "form": "LLWLD",
          "all": {
            "played": 5,
            "wins": 1,
            "draws": 1,
            "losses": 3,
            "goalsFor": 3,
            "goalsAgainst": 5
          },
          "home": {
            "played": 3,
            "wins": 1,
            "draws": 1,
            "losses": 1,
            "goalsFor": 1,
            "goalsAgainst": 1
          },
          "away": {
            "played": 2,
            "wins": 0,
            "draws": 0,
            "losses": 2,
            "goalsFor": 2,
            "goalsAgainst": 4
          }
        },
        {
          "teamId": 4716,
          "team": "Casa Pia",
          "form": "LLLLD",
          "all": {
            "played": 5,
            "wins": 0,
            "draws": 1,
            "losses": 4,
            "goalsFor": 0,
            "goalsAgainst": 11
          },
          "home": {
            "played": 2,
            "wins": 0,
            "draws": 0,
            "losses": 2,
            "goalsFor": 0,
            "goalsAgainst": 8
          },
          "away": {
            "played": 3,
            "wins": 0,
            "draws": 1,
            "losses": 2,
            "goalsFor": 0,
            "goalsAgainst": 3
          }
        }
      ],
      "fixtures": [
        {
          "fixtureId": 1575486,
          "kickoff": "2026-09-07T04:30:00+09:00",
          "status": "HT",
          "homeTeamId": 762,
          "homeTeam": "GIL Vicente",
          "awayTeamId": 238,
          "awayTeam": "Academico Viseu",
          "injuriesChecked": true,
          "injuries": [],
          "lineupsChecked": true,
          "lineups": [
            {
              "teamId": 762,
              "team": "GIL Vicente",
              "formation": "4-2-3-1",
              "coach": "Luís Pinto",
              "starters": [
                "Lucão",
                "Ricardo Esgaio",
                "M. Elimbi Gilbert",
                "Jonathan Buatu",
                "Weverson",
                "Zé Carlos",
                "Diogo Ferreira Prioste",
                "Murilo",
                "Gil Pinto Martins",
                "Joelson Fernandes",
                "Héctor Hernández"
              ]
            },
            {
              "teamId": 238,
              "team": "Academico Viseu",
              "formation": "4-1-4-1",
              "coach": "Bruno Pinheiro",
              "starters": [
                "Ewerton",
                "Robinho",
                "A. Correia",
                "N. Michelis",
                "G. Costa",
                "Luís Silva",
                "João Guilherme",
                "S. Messeguem",
                "C. Kahraman",
                "Á. Zamora",
                "André Clóvis"
              ]
            }
          ]
        },
        {
          "fixtureId": 1575490,
          "kickoff": "2026-09-07T02:00:00+09:00",
          "status": "FT",
          "homeTeamId": 224,
          "homeTeam": "Vitória SC",
          "awayTeamId": 4716,
          "awayTeam": "Casa Pia",
          "injuriesChecked": true,
          "injuries": [],
          "lineupsChecked": true,
          "lineups": [
            {
              "teamId": 224,
              "team": "Vitória SC",
              "formation": "4-2-3-1",
              "coach": "Tiago Margarido",
              "starters": [
                "O. Zych",
                "T. Strata",
                "Thiago Balieiro",
                "A. Sidibé",
                "João Mendes",
                "Beni",
                "L. Doucet",
                "Miguel Nogueira",
                "Samu",
                "Gustavo",
                "A. Ndoye"
              ]
            },
            {
              "teamId": 4716,
              "team": "Casa Pia",
              "formation": "4-2-3-1",
              "coach": "Filipe Coelho",
              "starters": [
                "André Gomes",
                "Geraldes",
                "Kaly",
                "David Sousa",
                "Pedro Rosas",
                "Silvi",
                "L. Ofori",
                "K. Prieto",
                "João Pedro Seno Luís Rêgo",
                "B. Pauwels",
                "A. Jatta"
              ]
            }
          ]
        }
      ]
    },
    {
      "key": "BELGIAN_PRO_LEAGUE",
      "leagueId": 144,
      "season": "2026",
      "standings": [
        {
          "teamId": 631,
          "team": "Gent",
          "rank": 1,
          "points": 15,
          "goalsDiff": 8,
          "form": "WWWWW",
          "all": {
            "played": 5,
            "wins": 5,
            "draws": 0,
            "losses": 0,
            "goalsFor": 10,
            "goalsAgainst": 2
          },
          "home": {
            "played": 3,
            "wins": 3,
            "draws": 0,
            "losses": 0,
            "goalsFor": 5,
            "goalsAgainst": 1
          },
          "away": {
            "played": 2,
            "wins": 2,
            "draws": 0,
            "losses": 0,
            "goalsFor": 5,
            "goalsAgainst": 1
          }
        },
        {
          "teamId": 1393,
          "team": "Union St. Gilloise",
          "rank": 2,
          "points": 13,
          "goalsDiff": 11,
          "form": "WWWDW",
          "all": {
            "played": 5,
            "wins": 4,
            "draws": 1,
            "losses": 0,
            "goalsFor": 14,
            "goalsAgainst": 3
          },
          "home": {
            "played": 2,
            "wins": 1,
            "draws": 1,
            "losses": 0,
            "goalsFor": 3,
            "goalsAgainst": 0
          },
          "away": {
            "played": 3,
            "wins": 3,
            "draws": 0,
            "losses": 0,
            "goalsFor": 11,
            "goalsAgainst": 3
          }
        },
        {
          "teamId": 569,
          "team": "Club Brugge KV",
          "rank": 3,
          "points": 12,
          "goalsDiff": 7,
          "form": "WLWWW",
          "all": {
            "played": 5,
            "wins": 4,
            "draws": 0,
            "losses": 1,
            "goalsFor": 9,
            "goalsAgainst": 2
          },
          "home": {
            "played": 2,
            "wins": 2,
            "draws": 0,
            "losses": 0,
            "goalsFor": 4,
            "goalsAgainst": 0
          },
          "away": {
            "played": 3,
            "wins": 2,
            "draws": 0,
            "losses": 1,
            "goalsFor": 5,
            "goalsAgainst": 2
          }
        },
        {
          "teamId": 736,
          "team": "Charleroi",
          "rank": 4,
          "points": 12,
          "goalsDiff": 6,
          "form": "LWWWW",
          "all": {
            "played": 5,
            "wins": 4,
            "draws": 0,
            "losses": 1,
            "goalsFor": 11,
            "goalsAgainst": 5
          },
          "home": {
            "played": 3,
            "wins": 2,
            "draws": 0,
            "losses": 1,
            "goalsFor": 7,
            "goalsAgainst": 4
          },
          "away": {
            "played": 2,
            "wins": 2,
            "draws": 0,
            "losses": 0,
            "goalsFor": 4,
            "goalsAgainst": 1
          }
        },
        {
          "teamId": 600,
          "team": "Zulte Waregem",
          "rank": 5,
          "points": 11,
          "goalsDiff": 7,
          "form": "WDWDW",
          "all": {
            "played": 5,
            "wins": 3,
            "draws": 2,
            "losses": 0,
            "goalsFor": 10,
            "goalsAgainst": 3
          },
          "home": {
            "played": 2,
            "wins": 2,
            "draws": 0,
            "losses": 0,
            "goalsFor": 6,
            "goalsAgainst": 1
          },
          "away": {
            "played": 3,
            "wins": 1,
            "draws": 2,
            "losses": 0,
            "goalsFor": 4,
            "goalsAgainst": 2
          }
        },
        {
          "teamId": 733,
          "team": "Standard Liege",
          "rank": 6,
          "points": 11,
          "goalsDiff": 4,
          "form": "WWWDD",
          "all": {
            "played": 5,
            "wins": 3,
            "draws": 2,
            "losses": 0,
            "goalsFor": 10,
            "goalsAgainst": 6
          },
          "home": {
            "played": 3,
            "wins": 2,
            "draws": 1,
            "losses": 0,
            "goalsFor": 5,
            "goalsAgainst": 2
          },
          "away": {
            "played": 2,
            "wins": 1,
            "draws": 1,
            "losses": 0,
            "goalsFor": 5,
            "goalsAgainst": 4
          }
        },
        {
          "teamId": 742,
          "team": "Genk",
          "rank": 7,
          "points": 8,
          "goalsDiff": 4,
          "form": "DWDWL",
          "all": {
            "played": 5,
            "wins": 2,
            "draws": 2,
            "losses": 1,
            "goalsFor": 12,
            "goalsAgainst": 8
          },
          "home": {
            "played": 2,
            "wins": 2,
            "draws": 0,
            "losses": 0,
            "goalsFor": 7,
            "goalsAgainst": 2
          },
          "away": {
            "played": 3,
            "wins": 0,
            "draws": 2,
            "losses": 1,
            "goalsFor": 5,
            "goalsAgainst": 6
          }
        },
        {
          "teamId": 735,
          "team": "St. Truiden",
          "rank": 8,
          "points": 8,
          "goalsDiff": 4,
          "form": "WLWDD",
          "all": {
            "played": 5,
            "wins": 2,
            "draws": 2,
            "losses": 1,
            "goalsFor": 12,
            "goalsAgainst": 8
          },
          "home": {
            "played": 3,
            "wins": 1,
            "draws": 1,
            "losses": 1,
            "goalsFor": 5,
            "goalsAgainst": 4
          },
          "away": {
            "played": 2,
            "wins": 1,
            "draws": 1,
            "losses": 0,
            "goalsFor": 7,
            "goalsAgainst": 4
          }
        },
        {
          "teamId": 259,
          "team": "Lommel United",
          "rank": 9,
          "points": 7,
          "goalsDiff": 3,
          "form": "LWWLD",
          "all": {
            "played": 5,
            "wins": 2,
            "draws": 1,
            "losses": 2,
            "goalsFor": 6,
            "goalsAgainst": 3
          },
          "home": {
            "played": 3,
            "wins": 1,
            "draws": 0,
            "losses": 2,
            "goalsFor": 4,
            "goalsAgainst": 2
          },
          "away": {
            "played": 2,
            "wins": 1,
            "draws": 1,
            "losses": 0,
            "goalsFor": 2,
            "goalsAgainst": 1
          }
        },
        {
          "teamId": 740,
          "team": "Antwerp",
          "rank": 10,
          "points": 7,
          "goalsDiff": 0,
          "form": "LLDWW",
          "all": {
            "played": 5,
            "wins": 2,
            "draws": 1,
            "losses": 2,
            "goalsFor": 10,
            "goalsAgainst": 10
          },
          "home": {
            "played": 3,
            "wins": 1,
            "draws": 1,
            "losses": 1,
            "goalsFor": 7,
            "goalsAgainst": 9
          },
          "away": {
            "played": 2,
            "wins": 1,
            "draws": 0,
            "losses": 1,
            "goalsFor": 3,
            "goalsAgainst": 1
          }
        },
        {
          "teamId": 554,
          "team": "Anderlecht",
          "rank": 11,
          "points": 7,
          "goalsDiff": -2,
          "form": "DWLLW",
          "all": {
            "played": 5,
            "wins": 2,
            "draws": 1,
            "losses": 2,
            "goalsFor": 3,
            "goalsAgainst": 5
          },
          "home": {
            "played": 3,
            "wins": 2,
            "draws": 1,
            "losses": 0,
            "goalsFor": 3,
            "goalsAgainst": 1
          },
          "away": {
            "played": 2,
            "wins": 0,
            "draws": 0,
            "losses": 2,
            "goalsFor": 0,
            "goalsAgainst": 4
          }
        },
        {
          "teamId": 261,
          "team": "KVC Westerlo",
          "rank": 12,
          "points": 4,
          "goalsDiff": -5,
          "form": "WDLLL",
          "all": {
            "played": 5,
            "wins": 1,
            "draws": 1,
            "losses": 3,
            "goalsFor": 9,
            "goalsAgainst": 14
          },
          "home": {
            "played": 2,
            "wins": 0,
            "draws": 1,
            "losses": 1,
            "goalsFor": 3,
            "goalsAgainst": 7
          },
          "away": {
            "played": 3,
            "wins": 1,
            "draws": 0,
            "losses": 2,
            "goalsFor": 6,
            "goalsAgainst": 7
          }
        },
        {
          "teamId": 738,
          "team": "SK Beveren",
          "rank": 13,
          "points": 3,
          "goalsDiff": -8,
          "form": "LLWL",
          "all": {
            "played": 4,
            "wins": 1,
            "draws": 0,
            "losses": 3,
            "goalsFor": 2,
            "goalsAgainst": 10
          },
          "home": {
            "played": 1,
            "wins": 1,
            "draws": 0,
            "losses": 0,
            "goalsFor": 1,
            "goalsAgainst": 0
          },
          "away": {
            "played": 3,
            "wins": 0,
            "draws": 0,
            "losses": 3,
            "goalsFor": 1,
            "goalsAgainst": 10
          }
        },
        {
          "teamId": 741,
          "team": "Cercle Brugge",
          "rank": 14,
          "points": 2,
          "goalsDiff": -5,
          "form": "LLLDD",
          "all": {
            "played": 5,
            "wins": 0,
            "draws": 2,
            "losses": 3,
            "goalsFor": 5,
            "goalsAgainst": 10
          },
          "home": {
            "played": 3,
            "wins": 0,
            "draws": 1,
            "losses": 2,
            "goalsFor": 3,
            "goalsAgainst": 7
          },
          "away": {
            "played": 2,
            "wins": 0,
            "draws": 1,
            "losses": 1,
            "goalsFor": 2,
            "goalsAgainst": 3
          }
        },
        {
          "teamId": 266,
          "team": "KV Mechelen",
          "rank": 15,
          "points": 2,
          "goalsDiff": -8,
          "form": "LDLDL",
          "all": {
            "played": 5,
            "wins": 0,
            "draws": 2,
            "losses": 3,
            "goalsFor": 5,
            "goalsAgainst": 13
          },
          "home": {
            "played": 2,
            "wins": 0,
            "draws": 1,
            "losses": 1,
            "goalsFor": 3,
            "goalsAgainst": 7
          },
          "away": {
            "played": 3,
            "wins": 0,
            "draws": 1,
            "losses": 2,
            "goalsFor": 2,
            "goalsAgainst": 6
          }
        },
        {
          "teamId": 5902,
          "team": "RAAL La Louvière",
          "rank": 16,
          "points": 1,
          "goalsDiff": -8,
          "form": "LDLLL",
          "all": {
            "played": 5,
            "wins": 0,
            "draws": 1,
            "losses": 4,
            "goalsFor": 4,
            "goalsAgainst": 12
          },
          "home": {
            "played": 2,
            "wins": 0,
            "draws": 1,
            "losses": 1,
            "goalsFor": 3,
            "goalsAgainst": 4
          },
          "away": {
            "played": 3,
            "wins": 0,
            "draws": 0,
            "losses": 3,
            "goalsFor": 1,
            "goalsAgainst": 8
          }
        },
        {
          "teamId": 260,
          "team": "OH Leuven",
          "rank": 17,
          "points": 0,
          "goalsDiff": -7,
          "form": "LLLL",
          "all": {
            "played": 4,
            "wins": 0,
            "draws": 0,
            "losses": 4,
            "goalsFor": 2,
            "goalsAgainst": 9
          },
          "home": {
            "played": 2,
            "wins": 0,
            "draws": 0,
            "losses": 2,
            "goalsFor": 1,
            "goalsAgainst": 5
          },
          "away": {
            "played": 2,
            "wins": 0,
            "draws": 0,
            "losses": 2,
            "goalsFor": 1,
            "goalsAgainst": 4
          }
        },
        {
          "teamId": 734,
          "team": "Kortrijk",
          "rank": 18,
          "points": 0,
          "goalsDiff": -11,
          "form": "LLLLL",
          "all": {
            "played": 5,
            "wins": 0,
            "draws": 0,
            "losses": 5,
            "goalsFor": 1,
            "goalsAgainst": 12
          },
          "home": {
            "played": 3,
            "wins": 0,
            "draws": 0,
            "losses": 3,
            "goalsFor": 1,
            "goalsAgainst": 8
          },
          "away": {
            "played": 2,
            "wins": 0,
            "draws": 0,
            "losses": 2,
            "goalsFor": 0,
            "goalsAgainst": 4
          }
        }
      ],
      "teams": [
        {
          "teamId": 554,
          "team": "Anderlecht",
          "form": "WLLWD",
          "all": {
            "played": 5,
            "wins": 2,
            "draws": 1,
            "losses": 2,
            "goalsFor": 3,
            "goalsAgainst": 5
          },
          "home": {
            "played": 3,
            "wins": 2,
            "draws": 1,
            "losses": 0,
            "goalsFor": 3,
            "goalsAgainst": 1
          },
          "away": {
            "played": 2,
            "wins": 0,
            "draws": 0,
            "losses": 2,
            "goalsFor": 0,
            "goalsAgainst": 4
          }
        },
        {
          "teamId": 742,
          "team": "Genk",
          "form": "LWDWD",
          "all": {
            "played": 5,
            "wins": 2,
            "draws": 2,
            "losses": 1,
            "goalsFor": 12,
            "goalsAgainst": 8
          },
          "home": {
            "played": 2,
            "wins": 2,
            "draws": 0,
            "losses": 0,
            "goalsFor": 7,
            "goalsAgainst": 2
          },
          "away": {
            "played": 3,
            "wins": 0,
            "draws": 2,
            "losses": 1,
            "goalsFor": 5,
            "goalsAgainst": 6
          }
        },
        {
          "teamId": 738,
          "team": "SK Beveren",
          "form": "LWLLW",
          "all": {
            "played": 5,
            "wins": 2,
            "draws": 0,
            "losses": 3,
            "goalsFor": 5,
            "goalsAgainst": 10
          },
          "home": {
            "played": 2,
            "wins": 2,
            "draws": 0,
            "losses": 0,
            "goalsFor": 4,
            "goalsAgainst": 0
          },
          "away": {
            "played": 3,
            "wins": 0,
            "draws": 0,
            "losses": 3,
            "goalsFor": 1,
            "goalsAgainst": 10
          }
        },
        {
          "teamId": 260,
          "team": "OH Leuven",
          "form": "LLLLL",
          "all": {
            "played": 5,
            "wins": 0,
            "draws": 0,
            "losses": 5,
            "goalsFor": 2,
            "goalsAgainst": 12
          },
          "home": {
            "played": 2,
            "wins": 0,
            "draws": 0,
            "losses": 2,
            "goalsFor": 1,
            "goalsAgainst": 5
          },
          "away": {
            "played": 3,
            "wins": 0,
            "draws": 0,
            "losses": 3,
            "goalsFor": 1,
            "goalsAgainst": 7
          }
        }
      ],
      "fixtures": [
        {
          "fixtureId": 1558624,
          "kickoff": "2026-09-07T01:30:00+09:00",
          "status": "FT",
          "homeTeamId": 554,
          "homeTeam": "Anderlecht",
          "awayTeamId": 742,
          "awayTeam": "Genk",
          "injuriesChecked": true,
          "injuries": [],
          "lineupsChecked": true,
          "lineups": [
            {
              "teamId": 554,
              "team": "Anderlecht",
              "formation": "4-4-2",
              "coach": "Vítor Bruno",
              "starters": [
                "C. Coosemans",
                "A. Maamar",
                "G. Biancone",
                "L. Pétrot",
                "L. Augustinsson",
                "N. Cobiella",
                "I. Koutsoupias",
                "M. Kana",
                "O. Antman",
                "T. Bentayeb",
                "D. Sikan"
              ]
            },
            {
              "teamId": 742,
              "team": "Genk",
              "formation": "4-2-3-1",
              "coach": "J. Thorup",
              "starters": [
                "L. Kiaba Mounganga",
                "K. Amaro",
                "M. Smets",
                "J. Kongolo",
                "J. Kayembe",
                "I. Bangoura",
                "B. Heynen",
                "J. Ito",
                "J. Erenbjerg",
                "A. Yokoyama",
                "R. Durosinmi"
              ]
            }
          ]
        },
        {
          "fixtureId": 1558625,
          "kickoff": "2026-09-07T02:15:00+09:00",
          "status": "FT",
          "homeTeamId": 738,
          "homeTeam": "SK Beveren",
          "awayTeamId": 260,
          "awayTeam": "OH Leuven",
          "injuriesChecked": true,
          "injuries": [],
          "lineupsChecked": true,
          "lineups": [
            {
              "teamId": 738,
              "team": "SK Beveren",
              "formation": "4-2-3-1",
              "coach": "T. Bakens",
              "starters": [
                "J. Schenk",
                "L. Jans",
                "Y. Gomis",
                "B. Godeau",
                "C. Janssens",
                "S. Dewaele",
                "C. Conde",
                "C. Lokesa",
                "C. Brüls",
                "J. Margaritha",
                "L. Mertens"
              ]
            },
            {
              "teamId": 260,
              "team": "OH Leuven",
              "formation": "3-4-1-2",
              "coach": "T. Simons",
              "starters": [
                "D. van den Heuvel",
                "J. Lawrence",
                "N. Dussenne",
                "E. Pletinckx",
                "Óscar Gil",
                "W. George",
                "B. Verstraete",
                "T. Ogiwara",
                "S. Schrijvers",
                "S. Yamada",
                "C. Ikwuemesi"
              ]
            }
          ]
        }
      ]
    },
    {
      "key": "SUPER_LIG",
      "leagueId": 203,
      "season": "2026",
      "standings": [
        {
          "teamId": 645,
          "team": "Galatasaray",
          "rank": 1,
          "points": 10,
          "goalsDiff": 6,
          "form": "WWWD",
          "all": {
            "played": 4,
            "wins": 3,
            "draws": 1,
            "losses": 0,
            "goalsFor": 12,
            "goalsAgainst": 6
          },
          "home": {
            "played": 2,
            "wins": 1,
            "draws": 1,
            "losses": 0,
            "goalsFor": 5,
            "goalsAgainst": 4
          },
          "away": {
            "played": 2,
            "wins": 2,
            "draws": 0,
            "losses": 0,
            "goalsFor": 7,
            "goalsAgainst": 2
          }
        },
        {
          "teamId": 549,
          "team": "Beşiktaş",
          "rank": 2,
          "points": 9,
          "goalsDiff": 5,
          "form": "WWLW",
          "all": {
            "played": 4,
            "wins": 3,
            "draws": 0,
            "losses": 1,
            "goalsFor": 9,
            "goalsAgainst": 4
          },
          "home": {
            "played": 2,
            "wins": 2,
            "draws": 0,
            "losses": 0,
            "goalsFor": 7,
            "goalsAgainst": 2
          },
          "away": {
            "played": 2,
            "wins": 1,
            "draws": 0,
            "losses": 1,
            "goalsFor": 2,
            "goalsAgainst": 2
          }
        },
        {
          "teamId": 7411,
          "team": "Kocaelispor",
          "rank": 3,
          "points": 9,
          "goalsDiff": 2,
          "form": "WWWL",
          "all": {
            "played": 4,
            "wins": 3,
            "draws": 0,
            "losses": 1,
            "goalsFor": 5,
            "goalsAgainst": 3
          },
          "home": {
            "played": 2,
            "wins": 2,
            "draws": 0,
            "losses": 0,
            "goalsFor": 3,
            "goalsAgainst": 0
          },
          "away": {
            "played": 2,
            "wins": 1,
            "draws": 0,
            "losses": 1,
            "goalsFor": 2,
            "goalsAgainst": 3
          }
        },
        {
          "teamId": 998,
          "team": "Trabzonspor",
          "rank": 4,
          "points": 7,
          "goalsDiff": 5,
          "form": "WLWD",
          "all": {
            "played": 4,
            "wins": 2,
            "draws": 1,
            "losses": 1,
            "goalsFor": 9,
            "goalsAgainst": 4
          },
          "home": {
            "played": 2,
            "wins": 2,
            "draws": 0,
            "losses": 0,
            "goalsFor": 7,
            "goalsAgainst": 1
          },
          "away": {
            "played": 2,
            "wins": 0,
            "draws": 1,
            "losses": 1,
            "goalsFor": 2,
            "goalsAgainst": 3
          }
        },
        {
          "teamId": 3579,
          "team": "Amed",
          "rank": 5,
          "points": 7,
          "goalsDiff": 2,
          "form": "DWLW",
          "all": {
            "played": 4,
            "wins": 2,
            "draws": 1,
            "losses": 1,
            "goalsFor": 7,
            "goalsAgainst": 5
          },
          "home": {
            "played": 2,
            "wins": 2,
            "draws": 0,
            "losses": 0,
            "goalsFor": 5,
            "goalsAgainst": 1
          },
          "away": {
            "played": 2,
            "wins": 0,
            "draws": 1,
            "losses": 1,
            "goalsFor": 2,
            "goalsAgainst": 4
          }
        },
        {
          "teamId": 997,
          "team": "Gençlerbirliği S.K.",
          "rank": 6,
          "points": 7,
          "goalsDiff": -3,
          "form": "LDWW",
          "all": {
            "played": 4,
            "wins": 2,
            "draws": 1,
            "losses": 1,
            "goalsFor": 4,
            "goalsAgainst": 7
          },
          "home": {
            "played": 2,
            "wins": 1,
            "draws": 1,
            "losses": 0,
            "goalsFor": 3,
            "goalsAgainst": 2
          },
          "away": {
            "played": 2,
            "wins": 1,
            "draws": 0,
            "losses": 1,
            "goalsFor": 1,
            "goalsAgainst": 5
          }
        },
        {
          "teamId": 611,
          "team": "Fenerbahçe",
          "rank": 7,
          "points": 6,
          "goalsDiff": 2,
          "form": "LWWL",
          "all": {
            "played": 4,
            "wins": 2,
            "draws": 0,
            "losses": 2,
            "goalsFor": 8,
            "goalsAgainst": 6
          },
          "home": {
            "played": 2,
            "wins": 1,
            "draws": 0,
            "losses": 1,
            "goalsFor": 5,
            "goalsAgainst": 4
          },
          "away": {
            "played": 2,
            "wins": 1,
            "draws": 0,
            "losses": 1,
            "goalsFor": 3,
            "goalsAgainst": 2
          }
        },
        {
          "teamId": 1004,
          "team": "Kasımpaşa",
          "rank": 8,
          "points": 6,
          "goalsDiff": 1,
          "form": "DDWD",
          "all": {
            "played": 4,
            "wins": 1,
            "draws": 3,
            "losses": 0,
            "goalsFor": 5,
            "goalsAgainst": 4
          },
          "home": {
            "played": 2,
            "wins": 0,
            "draws": 2,
            "losses": 0,
            "goalsFor": 3,
            "goalsAgainst": 3
          },
          "away": {
            "played": 2,
            "wins": 1,
            "draws": 1,
            "losses": 0,
            "goalsFor": 2,
            "goalsAgainst": 1
          }
        },
        {
          "teamId": 1007,
          "team": "Rizespor",
          "rank": 9,
          "points": 6,
          "goalsDiff": 0,
          "form": "WLW",
          "all": {
            "played": 3,
            "wins": 2,
            "draws": 0,
            "losses": 1,
            "goalsFor": 3,
            "goalsAgainst": 3
          },
          "home": {
            "played": 1,
            "wins": 0,
            "draws": 0,
            "losses": 1,
            "goalsFor": 0,
            "goalsAgainst": 2
          },
          "away": {
            "played": 2,
            "wins": 2,
            "draws": 0,
            "losses": 0,
            "goalsFor": 3,
            "goalsAgainst": 1
          }
        },
        {
          "teamId": 564,
          "team": "Başakşehir",
          "rank": 10,
          "points": 4,
          "goalsDiff": 0,
          "form": "LDLW",
          "all": {
            "played": 4,
            "wins": 1,
            "draws": 1,
            "losses": 2,
            "goalsFor": 6,
            "goalsAgainst": 6
          },
          "home": {
            "played": 3,
            "wins": 1,
            "draws": 1,
            "losses": 1,
            "goalsFor": 5,
            "goalsAgainst": 4
          },
          "away": {
            "played": 1,
            "wins": 0,
            "draws": 0,
            "losses": 1,
            "goalsFor": 1,
            "goalsAgainst": 2
          }
        },
        {
          "teamId": 3573,
          "team": "Gaziantep FK",
          "rank": 11,
          "points": 4,
          "goalsDiff": 0,
          "form": "LWD",
          "all": {
            "played": 3,
            "wins": 1,
            "draws": 1,
            "losses": 1,
            "goalsFor": 3,
            "goalsAgainst": 3
          },
          "home": {
            "played": 2,
            "wins": 0,
            "draws": 1,
            "losses": 1,
            "goalsFor": 2,
            "goalsAgainst": 3
          },
          "away": {
            "played": 1,
            "wins": 1,
            "draws": 0,
            "losses": 0,
            "goalsFor": 1,
            "goalsAgainst": 0
          }
        },
        {
          "teamId": 996,
          "team": "Alanyaspor",
          "rank": 12,
          "points": 4,
          "goalsDiff": 0,
          "form": "LWD",
          "all": {
            "played": 3,
            "wins": 1,
            "draws": 1,
            "losses": 1,
            "goalsFor": 3,
            "goalsAgainst": 3
          },
          "home": {
            "played": 1,
            "wins": 1,
            "draws": 0,
            "losses": 0,
            "goalsFor": 1,
            "goalsAgainst": 0
          },
          "away": {
            "played": 2,
            "wins": 0,
            "draws": 1,
            "losses": 1,
            "goalsFor": 2,
            "goalsAgainst": 3
          }
        },
        {
          "teamId": 3603,
          "team": "Samsunspor",
          "rank": 13,
          "points": 4,
          "goalsDiff": -1,
          "form": "LLWD",
          "all": {
            "played": 4,
            "wins": 1,
            "draws": 1,
            "losses": 2,
            "goalsFor": 5,
            "goalsAgainst": 6
          },
          "home": {
            "played": 2,
            "wins": 0,
            "draws": 1,
            "losses": 1,
            "goalsFor": 3,
            "goalsAgainst": 5
          },
          "away": {
            "played": 2,
            "wins": 1,
            "draws": 0,
            "losses": 1,
            "goalsFor": 2,
            "goalsAgainst": 1
          }
        },
        {
          "teamId": 6343,
          "team": "Çorum FK",
          "rank": 14,
          "points": 4,
          "goalsDiff": -2,
          "form": "WLLD",
          "all": {
            "played": 4,
            "wins": 1,
            "draws": 1,
            "losses": 2,
            "goalsFor": 7,
            "goalsAgainst": 9
          },
          "home": {
            "played": 2,
            "wins": 1,
            "draws": 0,
            "losses": 1,
            "goalsFor": 3,
            "goalsAgainst": 1
          },
          "away": {
            "played": 2,
            "wins": 0,
            "draws": 1,
            "losses": 1,
            "goalsFor": 4,
            "goalsAgainst": 8
          }
        },
        {
          "teamId": 1009,
          "team": "Erzurumspor FK",
          "rank": 15,
          "points": 4,
          "goalsDiff": -6,
          "form": "WDLL",
          "all": {
            "played": 4,
            "wins": 1,
            "draws": 1,
            "losses": 2,
            "goalsFor": 2,
            "goalsAgainst": 8
          },
          "home": {
            "played": 2,
            "wins": 1,
            "draws": 0,
            "losses": 1,
            "goalsFor": 1,
            "goalsAgainst": 4
          },
          "away": {
            "played": 2,
            "wins": 0,
            "draws": 1,
            "losses": 1,
            "goalsFor": 1,
            "goalsAgainst": 4
          }
        },
        {
          "teamId": 3588,
          "team": "Eyüpspor",
          "rank": 16,
          "points": 3,
          "goalsDiff": -4,
          "form": "LWLL",
          "all": {
            "played": 4,
            "wins": 1,
            "draws": 0,
            "losses": 3,
            "goalsFor": 2,
            "goalsAgainst": 6
          },
          "home": {
            "played": 2,
            "wins": 1,
            "draws": 0,
            "losses": 1,
            "goalsFor": 2,
            "goalsAgainst": 2
          },
          "away": {
            "played": 2,
            "wins": 0,
            "draws": 0,
            "losses": 2,
            "goalsFor": 0,
            "goalsAgainst": 4
          }
        },
        {
          "teamId": 994,
          "team": "Göztepe",
          "rank": 17,
          "points": 1,
          "goalsDiff": -2,
          "form": "LLD",
          "all": {
            "played": 3,
            "wins": 0,
            "draws": 1,
            "losses": 2,
            "goalsFor": 5,
            "goalsAgainst": 7
          },
          "home": {
            "played": 1,
            "wins": 0,
            "draws": 0,
            "losses": 1,
            "goalsFor": 0,
            "goalsAgainst": 1
          },
          "away": {
            "played": 2,
            "wins": 0,
            "draws": 1,
            "losses": 1,
            "goalsFor": 5,
            "goalsAgainst": 6
          }
        },
        {
          "teamId": 607,
          "team": "Konyaspor",
          "rank": 18,
          "points": 0,
          "goalsDiff": -5,
          "form": "LLLL",
          "all": {
            "played": 4,
            "wins": 0,
            "draws": 0,
            "losses": 4,
            "goalsFor": 3,
            "goalsAgainst": 8
          },
          "home": {
            "played": 2,
            "wins": 0,
            "draws": 0,
            "losses": 2,
            "goalsFor": 1,
            "goalsAgainst": 3
          },
          "away": {
            "played": 2,
            "wins": 0,
            "draws": 0,
            "losses": 2,
            "goalsFor": 2,
            "goalsAgainst": 5
          }
        }
      ],
      "teams": [
        {
          "teamId": 998,
          "team": "Trabzonspor",
          "form": "DWLW",
          "all": {
            "played": 4,
            "wins": 2,
            "draws": 1,
            "losses": 1,
            "goalsFor": 9,
            "goalsAgainst": 4
          },
          "home": {
            "played": 2,
            "wins": 2,
            "draws": 0,
            "losses": 0,
            "goalsFor": 7,
            "goalsAgainst": 1
          },
          "away": {
            "played": 2,
            "wins": 0,
            "draws": 1,
            "losses": 1,
            "goalsFor": 2,
            "goalsAgainst": 3
          }
        },
        {
          "teamId": 997,
          "team": "Gençlerbirliği S.K.",
          "form": "WWDL",
          "all": {
            "played": 4,
            "wins": 2,
            "draws": 1,
            "losses": 1,
            "goalsFor": 4,
            "goalsAgainst": 7
          },
          "home": {
            "played": 2,
            "wins": 1,
            "draws": 1,
            "losses": 0,
            "goalsFor": 3,
            "goalsAgainst": 2
          },
          "away": {
            "played": 2,
            "wins": 1,
            "draws": 0,
            "losses": 1,
            "goalsFor": 1,
            "goalsAgainst": 5
          }
        },
        {
          "teamId": 7411,
          "team": "Kocaelispor",
          "form": "LWWW",
          "all": {
            "played": 4,
            "wins": 3,
            "draws": 0,
            "losses": 1,
            "goalsFor": 5,
            "goalsAgainst": 3
          },
          "home": {
            "played": 2,
            "wins": 2,
            "draws": 0,
            "losses": 0,
            "goalsFor": 3,
            "goalsAgainst": 0
          },
          "away": {
            "played": 2,
            "wins": 1,
            "draws": 0,
            "losses": 1,
            "goalsFor": 2,
            "goalsAgainst": 3
          }
        },
        {
          "teamId": 3603,
          "team": "Samsunspor",
          "form": "DWLL",
          "all": {
            "played": 4,
            "wins": 1,
            "draws": 1,
            "losses": 2,
            "goalsFor": 5,
            "goalsAgainst": 6
          },
          "home": {
            "played": 2,
            "wins": 0,
            "draws": 1,
            "losses": 1,
            "goalsFor": 3,
            "goalsAgainst": 5
          },
          "away": {
            "played": 2,
            "wins": 1,
            "draws": 0,
            "losses": 1,
            "goalsFor": 2,
            "goalsAgainst": 1
          }
        }
      ],
      "fixtures": [
        {
          "fixtureId": 1584402,
          "kickoff": "2026-09-07T02:00:00+09:00",
          "status": "FT",
          "homeTeamId": 998,
          "homeTeam": "Trabzonspor",
          "awayTeamId": 997,
          "awayTeam": "Gençlerbirliği S.K.",
          "injuriesChecked": true,
          "injuries": [
            {
              "fixtureId": 1584402,
              "teamId": 998,
              "playerId": 63627,
              "player": "A. Batagov",
              "type": "Missing Fixture",
              "reason": "Knee Injury"
            },
            {
              "fixtureId": 1584402,
              "teamId": 998,
              "playerId": 22408,
              "player": "T. Jabol-Folcarelli",
              "type": "Missing Fixture",
              "reason": "Knee Injury"
            },
            {
              "fixtureId": 1584402,
              "teamId": 998,
              "playerId": 1938,
              "player": "R. Malinovskyi",
              "type": "Missing Fixture",
              "reason": "Inactive"
            },
            {
              "fixtureId": 1584402,
              "teamId": 998,
              "playerId": 454973,
              "player": "N. Saviolo",
              "type": "Missing Fixture",
              "reason": "Injury"
            },
            {
              "fixtureId": 1584402,
              "teamId": 998,
              "playerId": 47443,
              "player": "O. Yokuslu",
              "type": "Missing Fixture",
              "reason": "Lacking Match Fitness"
            },
            {
              "fixtureId": 1584402,
              "teamId": 997,
              "playerId": 427020,
              "player": "D. Demir",
              "type": "Missing Fixture",
              "reason": "Knee Injury"
            },
            {
              "fixtureId": 1584402,
              "teamId": 997,
              "playerId": 47304,
              "player": "K. Rodrigues",
              "type": "Missing Fixture",
              "reason": "Inactive"
            },
            {
              "fixtureId": 1584402,
              "teamId": 997,
              "playerId": 158065,
              "player": "T. Gouveia",
              "type": "Questionable",
              "reason": "Injury"
            },
            {
              "fixtureId": 1584402,
              "teamId": 997,
              "playerId": 22239,
              "player": "C. Niasse",
              "type": "Questionable",
              "reason": "Inactive"
            }
          ],
          "lineupsChecked": true,
          "lineups": [
            {
              "teamId": 998,
              "team": "Trabzonspor",
              "formation": "4-3-3",
              "coach": "Hüseyin Çimşir",
              "starters": [
                "A. Onana",
                "Wagner Pina",
                "C. Nwaiwu",
                "S. Savić",
                "M. Eskihellaç",
                "O. Tufan",
                "Fabinho",
                "E. Muçi",
                "Mohamed Salah",
                "P. Onuachu",
                "A. Şimşir"
              ]
            },
            {
              "teamId": 997,
              "team": "Gençlerbirliği S.K.",
              "formation": "4-1-4-1",
              "coach": "M. Diyadin",
              "starters": [
                "İ. Eğribayat",
                "Pedro Pereira",
                "D. Goutas",
                "Thalisson Kelven",
                "F. Üzüm",
                "Ousmane Diabate",
                "A. Traoré",
                "O. Ülgün",
                "F. Tongya",
                "Tiago Gouveia",
                "S. Koïta"
              ]
            }
          ]
        },
        {
          "fixtureId": 1584400,
          "kickoff": "2026-09-07T02:00:00+09:00",
          "status": "FT",
          "homeTeamId": 7411,
          "homeTeam": "Kocaelispor",
          "awayTeamId": 3603,
          "awayTeam": "Samsunspor",
          "injuriesChecked": true,
          "injuries": [
            {
              "fixtureId": 1584400,
              "teamId": 7411,
              "playerId": 47558,
              "player": "A. Jovanovic",
              "type": "Missing Fixture",
              "reason": "Knee Injury"
            },
            {
              "fixtureId": 1584400,
              "teamId": 7411,
              "playerId": 1331,
              "player": "B. Petkovic",
              "type": "Missing Fixture",
              "reason": "Hamstring Injury"
            },
            {
              "fixtureId": 1584400,
              "teamId": 7411,
              "playerId": 50176,
              "player": "T. Bingol",
              "type": "Questionable",
              "reason": "Inactive"
            },
            {
              "fixtureId": 1584400,
              "teamId": 7411,
              "playerId": 31280,
              "player": "R. Rivas",
              "type": "Questionable",
              "reason": "Inactive"
            },
            {
              "fixtureId": 1584400,
              "teamId": 3603,
              "playerId": 356998,
              "player": "J. Assoumou",
              "type": "Missing Fixture",
              "reason": "Inactive"
            },
            {
              "fixtureId": 1584400,
              "teamId": 3603,
              "playerId": 113581,
              "player": "T. Coulibaly",
              "type": "Missing Fixture",
              "reason": "Inactive"
            },
            {
              "fixtureId": 1584400,
              "teamId": 3603,
              "playerId": 25223,
              "player": "F. Kaya",
              "type": "Missing Fixture",
              "reason": "Injury"
            },
            {
              "fixtureId": 1584400,
              "teamId": 3603,
              "playerId": 531370,
              "player": "Marius",
              "type": "Missing Fixture",
              "reason": "Inactive"
            },
            {
              "fixtureId": 1584400,
              "teamId": 3603,
              "playerId": 130262,
              "player": "A. Sousa",
              "type": "Missing Fixture",
              "reason": "Inactive"
            },
            {
              "fixtureId": 1584400,
              "teamId": 3603,
              "playerId": 93001,
              "player": "E. Tavsan",
              "type": "Missing Fixture",
              "reason": "Inactive"
            },
            {
              "fixtureId": 1584400,
              "teamId": 3603,
              "playerId": 18749,
              "player": "E. Watt",
              "type": "Questionable",
              "reason": "Inactive"
            }
          ],
          "lineupsChecked": true,
          "lineups": [
            {
              "teamId": 7411,
              "team": "Kocaelispor",
              "formation": "4-1-4-1",
              "coach": "S. İnan",
              "starters": [
                "S. Öztaşdelen",
                "A. Dijksteel",
                "T. Zoukrou",
                "M. Maglica",
                "M. Haïdara",
                "Show",
                "D. Agyei",
                "U. Yıldız",
                "B. Kutlu",
                "Gonçalo Santos Sousa",
                "F. Ayé"
              ]
            },
            {
              "teamId": 3603,
              "team": "Samsunspor",
              "formation": "4-4-2",
              "coach": "Thorsten Fink",
              "starters": [
                "O. Kocuk",
                "J. Mendes",
                "Y. Çift",
                "G. Guarino",
                "L. Tómasson",
                "Y. Kayan",
                "C. Yüksel",
                "S. Onur",
                "E. Kılınç",
                "Saikuba Jarju",
                "Y. Sekongo"
              ]
            }
          ]
        }
      ]
    }
  ],
  "dates": [
    {
      "date": "2026-09-06",
      "updatedAt": "2026-09-06T12:08:38.992Z",
      "leagues": [
        {
          "key": "EPL",
          "leagueId": 39,
          "season": "2026",
          "standings": [
            {
              "teamId": 50,
              "team": "Manchester City",
              "rank": 1,
              "points": 9,
              "goalsDiff": 5,
              "form": "WWW",
              "all": {
                "played": 3,
                "wins": 3,
                "draws": 0,
                "losses": 0,
                "goalsFor": 7,
                "goalsAgainst": 2
              },
              "home": {
                "played": 2,
                "wins": 2,
                "draws": 0,
                "losses": 0,
                "goalsFor": 3,
                "goalsAgainst": 1
              },
              "away": {
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 4,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 64,
              "team": "Hull City",
              "rank": 2,
              "points": 7,
              "goalsDiff": 3,
              "form": "DWW",
              "all": {
                "played": 3,
                "wins": 2,
                "draws": 1,
                "losses": 0,
                "goalsFor": 3,
                "goalsAgainst": 0
              },
              "home": {
                "played": 2,
                "wins": 1,
                "draws": 1,
                "losses": 0,
                "goalsFor": 2,
                "goalsAgainst": 0
              },
              "away": {
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 1,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 42,
              "team": "Arsenal",
              "rank": 3,
              "points": 6,
              "goalsDiff": 4,
              "form": "WW",
              "all": {
                "played": 2,
                "wins": 2,
                "draws": 0,
                "losses": 0,
                "goalsFor": 4,
                "goalsAgainst": 0
              },
              "home": {
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 3,
                "goalsAgainst": 0
              },
              "away": {
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 1,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 49,
              "team": "Chelsea",
              "rank": 4,
              "points": 6,
              "goalsDiff": 2,
              "form": "WW",
              "all": {
                "played": 2,
                "wins": 2,
                "draws": 0,
                "losses": 0,
                "goalsFor": 7,
                "goalsAgainst": 5
              },
              "home": {
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 4,
                "goalsAgainst": 3
              },
              "away": {
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 3,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 55,
              "team": "Brentford",
              "rank": 5,
              "points": 5,
              "goalsDiff": 3,
              "form": "DDW",
              "all": {
                "played": 3,
                "wins": 1,
                "draws": 2,
                "losses": 0,
                "goalsFor": 5,
                "goalsAgainst": 2
              },
              "home": {
                "played": 2,
                "wins": 1,
                "draws": 1,
                "losses": 0,
                "goalsFor": 4,
                "goalsAgainst": 1
              },
              "away": {
                "played": 1,
                "wins": 0,
                "draws": 1,
                "losses": 0,
                "goalsFor": 1,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 40,
              "team": "Liverpool",
              "rank": 6,
              "points": 5,
              "goalsDiff": 2,
              "form": "WDD",
              "all": {
                "played": 3,
                "wins": 1,
                "draws": 2,
                "losses": 0,
                "goalsFor": 6,
                "goalsAgainst": 4
              },
              "home": {
                "played": 1,
                "wins": 0,
                "draws": 1,
                "losses": 0,
                "goalsFor": 2,
                "goalsAgainst": 2
              },
              "away": {
                "played": 2,
                "wins": 1,
                "draws": 1,
                "losses": 0,
                "goalsFor": 4,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 34,
              "team": "Newcastle",
              "rank": 7,
              "points": 5,
              "goalsDiff": 2,
              "form": "DWD",
              "all": {
                "played": 3,
                "wins": 1,
                "draws": 2,
                "losses": 0,
                "goalsFor": 6,
                "goalsAgainst": 4
              },
              "home": {
                "played": 2,
                "wins": 0,
                "draws": 2,
                "losses": 0,
                "goalsFor": 4,
                "goalsAgainst": 4
              },
              "away": {
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 2,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 63,
              "team": "Leeds",
              "rank": 8,
              "points": 5,
              "goalsDiff": 1,
              "form": "DDW",
              "all": {
                "played": 3,
                "wins": 1,
                "draws": 2,
                "losses": 0,
                "goalsFor": 3,
                "goalsAgainst": 2
              },
              "home": {
                "played": 1,
                "wins": 0,
                "draws": 1,
                "losses": 0,
                "goalsFor": 1,
                "goalsAgainst": 1
              },
              "away": {
                "played": 2,
                "wins": 1,
                "draws": 1,
                "losses": 0,
                "goalsFor": 2,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 51,
              "team": "Brighton",
              "rank": 9,
              "points": 4,
              "goalsDiff": 3,
              "form": "DLW",
              "all": {
                "played": 3,
                "wins": 1,
                "draws": 1,
                "losses": 1,
                "goalsFor": 8,
                "goalsAgainst": 5
              },
              "home": {
                "played": 2,
                "wins": 1,
                "draws": 1,
                "losses": 0,
                "goalsFor": 5,
                "goalsAgainst": 1
              },
              "away": {
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 45,
              "team": "Everton",
              "rank": 10,
              "points": 4,
              "goalsDiff": 2,
              "form": "DW",
              "all": {
                "played": 2,
                "wins": 1,
                "draws": 1,
                "losses": 0,
                "goalsFor": 3,
                "goalsAgainst": 1
              },
              "home": {
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 2,
                "goalsAgainst": 0
              },
              "away": {
                "played": 1,
                "wins": 0,
                "draws": 1,
                "losses": 0,
                "goalsFor": 1,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 746,
              "team": "Sunderland",
              "rank": 11,
              "points": 4,
              "goalsDiff": 0,
              "form": "DWL",
              "all": {
                "played": 3,
                "wins": 1,
                "draws": 1,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 3
              },
              "home": {
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 1,
                "goalsAgainst": 0
              },
              "away": {
                "played": 2,
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 2,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 33,
              "team": "Manchester United",
              "rank": 12,
              "points": 3,
              "goalsDiff": 1,
              "form": "WL",
              "all": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 5,
                "goalsAgainst": 4
              },
              "home": {
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 5,
                "goalsAgainst": 2
              },
              "away": {
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 0,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 52,
              "team": "Crystal Palace",
              "rank": 13,
              "points": 3,
              "goalsDiff": -4,
              "form": "WLL",
              "all": {
                "played": 3,
                "wins": 1,
                "draws": 0,
                "losses": 2,
                "goalsFor": 4,
                "goalsAgainst": 8
              },
              "home": {
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 1,
                "goalsAgainst": 4
              },
              "away": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 57,
              "team": "Ipswich",
              "rank": 14,
              "points": 3,
              "goalsDiff": -4,
              "form": "LLW",
              "all": {
                "played": 3,
                "wins": 1,
                "draws": 0,
                "losses": 2,
                "goalsFor": 4,
                "goalsAgainst": 8
              },
              "home": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 2,
                "goalsAgainst": 3
              },
              "away": {
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 2,
                "goalsAgainst": 5
              }
            },
            {
              "teamId": 35,
              "team": "Bournemouth",
              "rank": 15,
              "points": 2,
              "goalsDiff": -1,
              "form": "DDL",
              "all": {
                "played": 3,
                "wins": 0,
                "draws": 2,
                "losses": 1,
                "goalsFor": 4,
                "goalsAgainst": 5
              },
              "home": {
                "played": 1,
                "wins": 0,
                "draws": 1,
                "losses": 0,
                "goalsFor": 1,
                "goalsAgainst": 1
              },
              "away": {
                "played": 2,
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 65,
              "team": "Nottingham Forest",
              "rank": 16,
              "points": 2,
              "goalsDiff": -1,
              "form": "DDL",
              "all": {
                "played": 3,
                "wins": 0,
                "draws": 2,
                "losses": 1,
                "goalsFor": 2,
                "goalsAgainst": 3
              },
              "home": {
                "played": 2,
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 0,
                "goalsAgainst": 1
              },
              "away": {
                "played": 1,
                "wins": 0,
                "draws": 1,
                "losses": 0,
                "goalsFor": 2,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 66,
              "team": "Aston Villa",
              "rank": 17,
              "points": 1,
              "goalsDiff": -5,
              "form": "DLL",
              "all": {
                "played": 3,
                "wins": 0,
                "draws": 1,
                "losses": 2,
                "goalsFor": 0,
                "goalsAgainst": 5
              },
              "home": {
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 0,
                "goalsAgainst": 1
              },
              "away": {
                "played": 2,
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 0,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 47,
              "team": "Tottenham",
              "rank": 18,
              "points": 1,
              "goalsDiff": -5,
              "form": "DLL",
              "all": {
                "played": 3,
                "wins": 0,
                "draws": 1,
                "losses": 2,
                "goalsFor": 0,
                "goalsAgainst": 5
              },
              "home": {
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 0,
                "goalsAgainst": 2
              },
              "away": {
                "played": 2,
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 0,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 36,
              "team": "Fulham",
              "rank": 19,
              "points": 0,
              "goalsDiff": -3,
              "form": "LLL",
              "all": {
                "played": 3,
                "wins": 0,
                "draws": 0,
                "losses": 3,
                "goalsFor": 4,
                "goalsAgainst": 7
              },
              "home": {
                "played": 2,
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 4,
                "goalsAgainst": 6
              },
              "away": {
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 0,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 1346,
              "team": "Coventry",
              "rank": 20,
              "points": 0,
              "goalsDiff": -5,
              "form": "LLL",
              "all": {
                "played": 3,
                "wins": 0,
                "draws": 0,
                "losses": 3,
                "goalsFor": 0,
                "goalsAgainst": 5
              },
              "home": {
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 0,
                "goalsAgainst": 1
              },
              "away": {
                "played": 2,
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 0,
                "goalsAgainst": 4
              }
            }
          ],
          "teams": [
            {
              "teamId": 64,
              "team": "Hull City",
              "form": "WWD",
              "all": {
                "played": 3,
                "wins": 2,
                "draws": 1,
                "losses": 0,
                "goalsFor": 3,
                "goalsAgainst": 0
              },
              "home": {
                "played": 2,
                "wins": 1,
                "draws": 1,
                "losses": 0,
                "goalsFor": 2,
                "goalsAgainst": 0
              },
              "away": {
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 1,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 66,
              "team": "Aston Villa",
              "form": "LLD",
              "all": {
                "played": 3,
                "wins": 0,
                "draws": 1,
                "losses": 2,
                "goalsFor": 0,
                "goalsAgainst": 5
              },
              "home": {
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 0,
                "goalsAgainst": 1
              },
              "away": {
                "played": 2,
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 0,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 45,
              "team": "Everton",
              "form": "WD",
              "all": {
                "played": 2,
                "wins": 1,
                "draws": 1,
                "losses": 0,
                "goalsFor": 3,
                "goalsAgainst": 1
              },
              "home": {
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 2,
                "goalsAgainst": 0
              },
              "away": {
                "played": 1,
                "wins": 0,
                "draws": 1,
                "losses": 0,
                "goalsFor": 1,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 33,
              "team": "Manchester United",
              "form": "LW",
              "all": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 5,
                "goalsAgainst": 4
              },
              "home": {
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 5,
                "goalsAgainst": 2
              },
              "away": {
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 0,
                "goalsAgainst": 2
              }
            }
          ],
          "fixtures": [
            {
              "fixtureId": 1557392,
              "kickoff": "2026-09-06T01:30:00+09:00",
              "status": "FT",
              "homeTeamId": 64,
              "homeTeam": "Hull City",
              "awayTeamId": 66,
              "awayTeam": "Aston Villa",
              "injuriesChecked": true,
              "injuries": [
                {
                  "fixtureId": 1557392,
                  "teamId": 64,
                  "playerId": 380873,
                  "player": "I. Ansah",
                  "type": "Missing Fixture",
                  "reason": "Back Injury"
                },
                {
                  "fixtureId": 1557392,
                  "teamId": 64,
                  "playerId": 2930,
                  "player": "J. Butland",
                  "type": "Missing Fixture",
                  "reason": "Arm Injury"
                },
                {
                  "fixtureId": 1557392,
                  "teamId": 64,
                  "playerId": 19666,
                  "player": "M. Crooks",
                  "type": "Missing Fixture",
                  "reason": "Muscle Injury"
                },
                {
                  "fixtureId": 1557392,
                  "teamId": 64,
                  "playerId": 282124,
                  "player": "D. Gyabi",
                  "type": "Missing Fixture",
                  "reason": "Groin Injury"
                },
                {
                  "fixtureId": 1557392,
                  "teamId": 64,
                  "playerId": 331551,
                  "player": "C. Hughes",
                  "type": "Missing Fixture",
                  "reason": "Groin Injury"
                },
                {
                  "fixtureId": 1557392,
                  "teamId": 64,
                  "playerId": 162991,
                  "player": "E. Matazo",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1557392,
                  "teamId": 64,
                  "playerId": 19242,
                  "player": "P. McNair",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1557392,
                  "teamId": 64,
                  "playerId": 32960,
                  "player": "H. Morita",
                  "type": "Missing Fixture",
                  "reason": "Calf Injury"
                },
                {
                  "fixtureId": 1557392,
                  "teamId": 64,
                  "playerId": 338046,
                  "player": "O. Zambrano",
                  "type": "Missing Fixture",
                  "reason": "Hamstring Injury"
                },
                {
                  "fixtureId": 1557392,
                  "teamId": 66,
                  "playerId": 195103,
                  "player": "Joao Gomes",
                  "type": "Missing Fixture",
                  "reason": "Red Card"
                },
                {
                  "fixtureId": 1557392,
                  "teamId": 66,
                  "playerId": 514519,
                  "player": "B. Madjo",
                  "type": "Missing Fixture",
                  "reason": "Ankle Injury"
                },
                {
                  "fixtureId": 1557392,
                  "teamId": 66,
                  "playerId": 406244,
                  "player": "J. Manzambi",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1557392,
                  "teamId": 66,
                  "playerId": 162714,
                  "player": "A. Onana",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                }
              ],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1557390,
              "kickoff": "2026-09-06T22:00:00+09:00",
              "status": "NS",
              "homeTeamId": 45,
              "homeTeam": "Everton",
              "awayTeamId": 33,
              "awayTeam": "Manchester United",
              "injuriesChecked": true,
              "injuries": [
                {
                  "fixtureId": 1557390,
                  "teamId": 45,
                  "playerId": 30407,
                  "player": "C. Norgaard",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1557390,
                  "teamId": 33,
                  "playerId": 356041,
                  "player": "C. Baleba",
                  "type": "Missing Fixture",
                  "reason": "Ankle Injury"
                },
                {
                  "fixtureId": 1557390,
                  "teamId": 33,
                  "playerId": 157997,
                  "player": "A. Diallo",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1557390,
                  "teamId": 33,
                  "playerId": 51494,
                  "player": "M. Ugarte",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1557390,
                  "teamId": 33,
                  "playerId": 532,
                  "player": "M. de Ligt",
                  "type": "Missing Fixture",
                  "reason": "Back Injury"
                },
                {
                  "fixtureId": 1557390,
                  "teamId": 33,
                  "playerId": 2931,
                  "player": "T. Heaton",
                  "type": "Questionable",
                  "reason": "Injury"
                }
              ],
              "lineupsChecked": true,
              "lineups": []
            }
          ]
        },
        {
          "key": "CHAMPIONSHIP",
          "leagueId": 40,
          "season": "2026",
          "standings": [
            {
              "teamId": 76,
              "team": "Swansea",
              "rank": 1,
              "points": 11,
              "goalsDiff": 6,
              "form": "DWWDW",
              "all": {
                "played": 5,
                "wins": 3,
                "draws": 2,
                "losses": 0,
                "goalsFor": 7,
                "goalsAgainst": 1
              },
              "home": {
                "played": 3,
                "wins": 1,
                "draws": 2,
                "losses": 0,
                "goalsFor": 2,
                "goalsAgainst": 0
              },
              "away": {
                "played": 2,
                "wins": 2,
                "draws": 0,
                "losses": 0,
                "goalsFor": 5,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 70,
              "team": "Middlesbrough",
              "rank": 2,
              "points": 10,
              "goalsDiff": 3,
              "form": "WDWLW",
              "all": {
                "played": 5,
                "wins": 3,
                "draws": 1,
                "losses": 1,
                "goalsFor": 8,
                "goalsAgainst": 5
              },
              "home": {
                "played": 2,
                "wins": 2,
                "draws": 0,
                "losses": 0,
                "goalsFor": 5,
                "goalsAgainst": 2
              },
              "away": {
                "played": 3,
                "wins": 1,
                "draws": 1,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 72,
              "team": "QPR",
              "rank": 3,
              "points": 10,
              "goalsDiff": 3,
              "form": "LWWDW",
              "all": {
                "played": 5,
                "wins": 3,
                "draws": 1,
                "losses": 1,
                "goalsFor": 7,
                "goalsAgainst": 4
              },
              "home": {
                "played": 3,
                "wins": 1,
                "draws": 1,
                "losses": 1,
                "goalsFor": 2,
                "goalsAgainst": 2
              },
              "away": {
                "played": 2,
                "wins": 2,
                "draws": 0,
                "losses": 0,
                "goalsFor": 5,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 56,
              "team": "Bristol City",
              "rank": 4,
              "points": 10,
              "goalsDiff": 2,
              "form": "WWWDL",
              "all": {
                "played": 5,
                "wins": 3,
                "draws": 1,
                "losses": 1,
                "goalsFor": 9,
                "goalsAgainst": 7
              },
              "home": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 2,
                "goalsAgainst": 3
              },
              "away": {
                "played": 3,
                "wins": 2,
                "draws": 1,
                "losses": 0,
                "goalsFor": 7,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 60,
              "team": "West Brom",
              "rank": 5,
              "points": 10,
              "goalsDiff": 2,
              "form": "WDLWW",
              "all": {
                "played": 5,
                "wins": 3,
                "draws": 1,
                "losses": 1,
                "goalsFor": 8,
                "goalsAgainst": 6
              },
              "home": {
                "played": 3,
                "wins": 2,
                "draws": 1,
                "losses": 0,
                "goalsFor": 5,
                "goalsAgainst": 2
              },
              "away": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 1335,
              "team": "Charlton",
              "rank": 6,
              "points": 10,
              "goalsDiff": -1,
              "form": "LDWWW",
              "all": {
                "played": 5,
                "wins": 3,
                "draws": 1,
                "losses": 1,
                "goalsFor": 6,
                "goalsAgainst": 7
              },
              "home": {
                "played": 2,
                "wins": 2,
                "draws": 0,
                "losses": 0,
                "goalsFor": 3,
                "goalsAgainst": 1
              },
              "away": {
                "played": 3,
                "wins": 1,
                "draws": 1,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 6
              }
            },
            {
              "teamId": 58,
              "team": "Millwall",
              "rank": 7,
              "points": 9,
              "goalsDiff": 2,
              "form": "WLLWW",
              "all": {
                "played": 5,
                "wins": 3,
                "draws": 0,
                "losses": 2,
                "goalsFor": 10,
                "goalsAgainst": 8
              },
              "home": {
                "played": 3,
                "wins": 2,
                "draws": 0,
                "losses": 1,
                "goalsFor": 7,
                "goalsAgainst": 3
              },
              "away": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 5
              }
            },
            {
              "teamId": 48,
              "team": "West Ham",
              "rank": 8,
              "points": 8,
              "goalsDiff": 4,
              "form": "WWDLD",
              "all": {
                "played": 5,
                "wins": 2,
                "draws": 2,
                "losses": 1,
                "goalsFor": 11,
                "goalsAgainst": 7
              },
              "home": {
                "played": 3,
                "wins": 2,
                "draws": 0,
                "losses": 1,
                "goalsFor": 8,
                "goalsAgainst": 4
              },
              "away": {
                "played": 2,
                "wins": 0,
                "draws": 2,
                "losses": 0,
                "goalsFor": 3,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 39,
              "team": "Wolves",
              "rank": 9,
              "points": 7,
              "goalsDiff": 3,
              "form": "LWWD",
              "all": {
                "played": 4,
                "wins": 2,
                "draws": 1,
                "losses": 1,
                "goalsFor": 11,
                "goalsAgainst": 8
              },
              "home": {
                "played": 2,
                "wins": 1,
                "draws": 1,
                "losses": 0,
                "goalsFor": 6,
                "goalsAgainst": 3
              },
              "away": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 5,
                "goalsAgainst": 5
              }
            },
            {
              "teamId": 1837,
              "team": "Wrexham",
              "rank": 10,
              "points": 6,
              "goalsDiff": 2,
              "form": "DWLDD",
              "all": {
                "played": 5,
                "wins": 1,
                "draws": 3,
                "losses": 1,
                "goalsFor": 6,
                "goalsAgainst": 4
              },
              "home": {
                "played": 2,
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 2,
                "goalsAgainst": 3
              },
              "away": {
                "played": 3,
                "wins": 1,
                "draws": 2,
                "losses": 0,
                "goalsFor": 4,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 54,
              "team": "Birmingham",
              "rank": 11,
              "points": 6,
              "goalsDiff": 1,
              "form": "DWDD",
              "all": {
                "played": 4,
                "wins": 1,
                "draws": 3,
                "losses": 0,
                "goalsFor": 5,
                "goalsAgainst": 4
              },
              "home": {
                "played": 2,
                "wins": 0,
                "draws": 2,
                "losses": 0,
                "goalsFor": 3,
                "goalsAgainst": 3
              },
              "away": {
                "played": 2,
                "wins": 1,
                "draws": 1,
                "losses": 0,
                "goalsFor": 2,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 71,
              "team": "Norwich",
              "rank": 12,
              "points": 6,
              "goalsDiff": 0,
              "form": "WLWLL",
              "all": {
                "played": 5,
                "wins": 2,
                "draws": 0,
                "losses": 3,
                "goalsFor": 8,
                "goalsAgainst": 8
              },
              "home": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 5,
                "goalsAgainst": 3
              },
              "away": {
                "played": 3,
                "wins": 1,
                "draws": 0,
                "losses": 2,
                "goalsFor": 3,
                "goalsAgainst": 5
              }
            },
            {
              "teamId": 75,
              "team": "Stoke City",
              "rank": 13,
              "points": 6,
              "goalsDiff": -1,
              "form": "WWLLL",
              "all": {
                "played": 5,
                "wins": 2,
                "draws": 0,
                "losses": 3,
                "goalsFor": 8,
                "goalsAgainst": 9
              },
              "home": {
                "played": 3,
                "wins": 2,
                "draws": 0,
                "losses": 1,
                "goalsFor": 6,
                "goalsAgainst": 2
              },
              "away": {
                "played": 2,
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 2,
                "goalsAgainst": 7
              }
            },
            {
              "teamId": 1355,
              "team": "Portsmouth",
              "rank": 14,
              "points": 6,
              "goalsDiff": -1,
              "form": "WLLWL",
              "all": {
                "played": 5,
                "wins": 2,
                "draws": 0,
                "losses": 3,
                "goalsFor": 7,
                "goalsAgainst": 8
              },
              "home": {
                "played": 3,
                "wins": 1,
                "draws": 0,
                "losses": 2,
                "goalsFor": 3,
                "goalsAgainst": 5
              },
              "away": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 4,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 62,
              "team": "Sheffield Utd",
              "rank": 15,
              "points": 6,
              "goalsDiff": -1,
              "form": "LWDDD",
              "all": {
                "played": 5,
                "wins": 1,
                "draws": 3,
                "losses": 1,
                "goalsFor": 6,
                "goalsAgainst": 7
              },
              "home": {
                "played": 3,
                "wins": 1,
                "draws": 1,
                "losses": 1,
                "goalsFor": 4,
                "goalsAgainst": 5
              },
              "away": {
                "played": 2,
                "wins": 0,
                "draws": 2,
                "losses": 0,
                "goalsFor": 2,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 67,
              "team": "Blackburn",
              "rank": 16,
              "points": 5,
              "goalsDiff": -1,
              "form": "LDLWD",
              "all": {
                "played": 5,
                "wins": 1,
                "draws": 2,
                "losses": 2,
                "goalsFor": 6,
                "goalsAgainst": 7
              },
              "home": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 3
              },
              "away": {
                "played": 3,
                "wins": 0,
                "draws": 2,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 38,
              "team": "Watford",
              "rank": 17,
              "points": 5,
              "goalsDiff": -2,
              "form": "LLDDW",
              "all": {
                "played": 5,
                "wins": 1,
                "draws": 2,
                "losses": 2,
                "goalsFor": 4,
                "goalsAgainst": 6
              },
              "home": {
                "played": 2,
                "wins": 1,
                "draws": 1,
                "losses": 0,
                "goalsFor": 3,
                "goalsAgainst": 2
              },
              "away": {
                "played": 3,
                "wins": 0,
                "draws": 1,
                "losses": 2,
                "goalsFor": 1,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 1379,
              "team": "Lincoln",
              "rank": 18,
              "points": 5,
              "goalsDiff": -2,
              "form": "DDWLL",
              "all": {
                "played": 5,
                "wins": 1,
                "draws": 2,
                "losses": 2,
                "goalsFor": 4,
                "goalsAgainst": 6
              },
              "home": {
                "played": 3,
                "wins": 0,
                "draws": 2,
                "losses": 1,
                "goalsFor": 2,
                "goalsAgainst": 4
              },
              "away": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 2,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 41,
              "team": "Southampton",
              "rank": 19,
              "points": 4,
              "goalsDiff": 5,
              "form": "DDWWL",
              "all": {
                "played": 5,
                "wins": 2,
                "draws": 2,
                "losses": 1,
                "goalsFor": 11,
                "goalsAgainst": 6
              },
              "home": {
                "played": 2,
                "wins": 2,
                "draws": 0,
                "losses": 0,
                "goalsFor": 8,
                "goalsAgainst": 2
              },
              "away": {
                "played": 3,
                "wins": 0,
                "draws": 2,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 69,
              "team": "Derby",
              "rank": 20,
              "points": 4,
              "goalsDiff": -5,
              "form": "LWLDL",
              "all": {
                "played": 5,
                "wins": 1,
                "draws": 1,
                "losses": 3,
                "goalsFor": 5,
                "goalsAgainst": 10
              },
              "home": {
                "played": 2,
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 2,
                "goalsAgainst": 5
              },
              "away": {
                "played": 3,
                "wins": 1,
                "draws": 0,
                "losses": 2,
                "goalsFor": 3,
                "goalsAgainst": 5
              }
            },
            {
              "teamId": 68,
              "team": "Bolton",
              "rank": 21,
              "points": 4,
              "goalsDiff": -5,
              "form": "LLLDW",
              "all": {
                "played": 5,
                "wins": 1,
                "draws": 1,
                "losses": 3,
                "goalsFor": 4,
                "goalsAgainst": 9
              },
              "home": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 2,
                "goalsAgainst": 2
              },
              "away": {
                "played": 3,
                "wins": 0,
                "draws": 1,
                "losses": 2,
                "goalsFor": 2,
                "goalsAgainst": 7
              }
            },
            {
              "teamId": 43,
              "team": "Cardiff",
              "rank": 22,
              "points": 3,
              "goalsDiff": -3,
              "form": "LLDDD",
              "all": {
                "played": 5,
                "wins": 0,
                "draws": 3,
                "losses": 2,
                "goalsFor": 6,
                "goalsAgainst": 9
              },
              "home": {
                "played": 2,
                "wins": 0,
                "draws": 2,
                "losses": 0,
                "goalsFor": 3,
                "goalsAgainst": 3
              },
              "away": {
                "played": 3,
                "wins": 0,
                "draws": 1,
                "losses": 2,
                "goalsFor": 3,
                "goalsAgainst": 6
              }
            },
            {
              "teamId": 59,
              "team": "Preston",
              "rank": 23,
              "points": 3,
              "goalsDiff": -5,
              "form": "WLLLL",
              "all": {
                "played": 5,
                "wins": 1,
                "draws": 0,
                "losses": 4,
                "goalsFor": 5,
                "goalsAgainst": 10
              },
              "home": {
                "played": 3,
                "wins": 1,
                "draws": 0,
                "losses": 2,
                "goalsFor": 4,
                "goalsAgainst": 7
              },
              "away": {
                "played": 2,
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 1,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 44,
              "team": "Burnley",
              "rank": 24,
              "points": 2,
              "goalsDiff": -6,
              "form": "LDLLD",
              "all": {
                "played": 5,
                "wins": 0,
                "draws": 2,
                "losses": 3,
                "goalsFor": 6,
                "goalsAgainst": 12
              },
              "home": {
                "played": 3,
                "wins": 0,
                "draws": 2,
                "losses": 1,
                "goalsFor": 4,
                "goalsAgainst": 5
              },
              "away": {
                "played": 2,
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 2,
                "goalsAgainst": 7
              }
            }
          ],
          "teams": [
            {
              "teamId": 54,
              "team": "Birmingham",
              "form": "DDWD",
              "all": {
                "played": 4,
                "wins": 1,
                "draws": 3,
                "losses": 0,
                "goalsFor": 5,
                "goalsAgainst": 4
              },
              "home": {
                "played": 2,
                "wins": 0,
                "draws": 2,
                "losses": 0,
                "goalsFor": 3,
                "goalsAgainst": 3
              },
              "away": {
                "played": 2,
                "wins": 1,
                "draws": 1,
                "losses": 0,
                "goalsFor": 2,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 39,
              "team": "Wolves",
              "form": "DWWL",
              "all": {
                "played": 4,
                "wins": 2,
                "draws": 1,
                "losses": 1,
                "goalsFor": 11,
                "goalsAgainst": 8
              },
              "home": {
                "played": 2,
                "wins": 1,
                "draws": 1,
                "losses": 0,
                "goalsFor": 6,
                "goalsAgainst": 3
              },
              "away": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 5,
                "goalsAgainst": 5
              }
            },
            {
              "teamId": 76,
              "team": "Swansea",
              "form": "WDWWD",
              "all": {
                "played": 5,
                "wins": 3,
                "draws": 2,
                "losses": 0,
                "goalsFor": 7,
                "goalsAgainst": 1
              },
              "home": {
                "played": 3,
                "wins": 1,
                "draws": 2,
                "losses": 0,
                "goalsFor": 2,
                "goalsAgainst": 0
              },
              "away": {
                "played": 2,
                "wins": 2,
                "draws": 0,
                "losses": 0,
                "goalsFor": 5,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 1837,
              "team": "Wrexham",
              "form": "DDLWD",
              "all": {
                "played": 5,
                "wins": 1,
                "draws": 3,
                "losses": 1,
                "goalsFor": 6,
                "goalsAgainst": 4
              },
              "home": {
                "played": 2,
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 2,
                "goalsAgainst": 3
              },
              "away": {
                "played": 3,
                "wins": 1,
                "draws": 2,
                "losses": 0,
                "goalsFor": 4,
                "goalsAgainst": 1
              }
            }
          ],
          "fixtures": [
            {
              "fixtureId": 1563131,
              "kickoff": "2026-09-06T20:00:00+09:00",
              "status": "HT",
              "homeTeamId": 54,
              "homeTeam": "Birmingham",
              "awayTeamId": 39,
              "awayTeam": "Wolves",
              "injuriesChecked": true,
              "injuries": [
                {
                  "fixtureId": 1563131,
                  "teamId": 54,
                  "playerId": 19211,
                  "player": "M. Bird",
                  "type": "Missing Fixture",
                  "reason": "Inactive"
                },
                {
                  "fixtureId": 1563131,
                  "teamId": 54,
                  "playerId": 231078,
                  "player": "T. Gardner-Hickman",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1563131,
                  "teamId": 54,
                  "playerId": 167656,
                  "player": "M. Leonard",
                  "type": "Missing Fixture",
                  "reason": "Achilles Tendon Injury"
                },
                {
                  "fixtureId": 1563131,
                  "teamId": 54,
                  "playerId": 19202,
                  "player": "L. Buchanan",
                  "type": "Questionable",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1563131,
                  "teamId": 39,
                  "playerId": 20665,
                  "player": "J. Bellegarde",
                  "type": "Missing Fixture",
                  "reason": "Hamstring Injury"
                },
                {
                  "fixtureId": 1563131,
                  "teamId": 39,
                  "playerId": 195717,
                  "player": "Y. Mosquera",
                  "type": "Missing Fixture",
                  "reason": "Ankle Injury"
                },
                {
                  "fixtureId": 1563131,
                  "teamId": 39,
                  "playerId": 194116,
                  "player": "R. Said",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1563131,
                  "teamId": 39,
                  "playerId": 169,
                  "player": "K. Trippier",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1563131,
                  "teamId": 39,
                  "playerId": 394165,
                  "player": "S. Neave",
                  "type": "Questionable",
                  "reason": "Injury"
                }
              ],
              "lineupsChecked": true,
              "lineups": [
                {
                  "teamId": 54,
                  "team": "Birmingham",
                  "formation": "4-2-3-1",
                  "coach": "C. Davies",
                  "starters": [
                    "J. Beadle",
                    "B. Osayi-Samuel",
                    "P. Neumann",
                    "C. Klarer",
                    "A. Cochrane",
                    "Paik Seung-Ho",
                    "T. Iwata",
                    "P. Roberts",
                    "J. Stansfield",
                    "L. Millar",
                    "A. Priske"
                  ]
                },
                {
                  "teamId": 39,
                  "team": "Wolves",
                  "formation": "4-2-3-1",
                  "coach": "César Peixoto",
                  "starters": [
                    "José Sá",
                    "J. Tchatchoua",
                    "N. Djiga",
                    "L. Krejčí",
                    "Hugo Bueno",
                    "André",
                    "M. Munetsi",
                    "Rodrigo Gomes",
                    "Fer López",
                    "A. Armstrong",
                    "R. Jiménez"
                  ]
                }
              ]
            },
            {
              "fixtureId": 1563140,
              "kickoff": "2026-09-06T04:00:00+09:00",
              "status": "FT",
              "homeTeamId": 76,
              "homeTeam": "Swansea",
              "awayTeamId": 1837,
              "awayTeam": "Wrexham",
              "injuriesChecked": true,
              "injuries": [
                {
                  "fixtureId": 1563140,
                  "teamId": 76,
                  "playerId": 20457,
                  "player": "C. Burgess",
                  "type": "Missing Fixture",
                  "reason": "Achilles Tendon Injury"
                },
                {
                  "fixtureId": 1563140,
                  "teamId": 76,
                  "playerId": 68441,
                  "player": "G. Franco",
                  "type": "Missing Fixture",
                  "reason": "Ankle Injury"
                },
                {
                  "fixtureId": 1563140,
                  "teamId": 76,
                  "playerId": 45078,
                  "player": "R. Stewart",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1563140,
                  "teamId": 1837,
                  "playerId": 126791,
                  "player": "N. Broadhead",
                  "type": "Missing Fixture",
                  "reason": "Inactive"
                },
                {
                  "fixtureId": 1563140,
                  "teamId": 1837,
                  "playerId": 6931,
                  "player": "L. Cacace",
                  "type": "Missing Fixture",
                  "reason": "Calf Injury"
                },
                {
                  "fixtureId": 1563140,
                  "teamId": 1837,
                  "playerId": 278123,
                  "player": "S. Revan",
                  "type": "Missing Fixture",
                  "reason": "Hamstring Injury"
                },
                {
                  "fixtureId": 1563140,
                  "teamId": 1837,
                  "playerId": 88457,
                  "player": "B. Sheaf",
                  "type": "Missing Fixture",
                  "reason": "Inactive"
                },
                {
                  "fixtureId": 1563140,
                  "teamId": 1837,
                  "playerId": 194461,
                  "player": "G. Thomason",
                  "type": "Missing Fixture",
                  "reason": "Thigh Injury"
                }
              ],
              "lineupsChecked": false,
              "lineups": []
            }
          ]
        },
        {
          "key": "LALIGA",
          "leagueId": 140,
          "season": "2026",
          "standings": [
            {
              "teamId": 529,
              "team": "Barcelona",
              "rank": 1,
              "points": 9,
              "goalsDiff": 10,
              "form": "WWW",
              "all": {
                "played": 3,
                "wins": 3,
                "draws": 0,
                "losses": 0,
                "goalsFor": 12,
                "goalsAgainst": 2
              },
              "home": {
                "played": 2,
                "wins": 2,
                "draws": 0,
                "losses": 0,
                "goalsFor": 7,
                "goalsAgainst": 2
              },
              "away": {
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 5,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 541,
              "team": "Real Madrid",
              "rank": 2,
              "points": 9,
              "goalsDiff": 7,
              "form": "LWWW",
              "all": {
                "played": 4,
                "wins": 3,
                "draws": 0,
                "losses": 1,
                "goalsFor": 10,
                "goalsAgainst": 3
              },
              "home": {
                "played": 2,
                "wins": 2,
                "draws": 0,
                "losses": 0,
                "goalsFor": 8,
                "goalsAgainst": 1
              },
              "away": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 2,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 543,
              "team": "Real Betis",
              "rank": 3,
              "points": 9,
              "goalsDiff": 0,
              "form": "WLWW",
              "all": {
                "played": 4,
                "wins": 3,
                "draws": 0,
                "losses": 1,
                "goalsFor": 5,
                "goalsAgainst": 5
              },
              "home": {
                "played": 2,
                "wins": 2,
                "draws": 0,
                "losses": 0,
                "goalsFor": 2,
                "goalsAgainst": 0
              },
              "away": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 5
              }
            },
            {
              "teamId": 544,
              "team": "Deportivo La Coruna",
              "rank": 4,
              "points": 8,
              "goalsDiff": 3,
              "form": "WWDD",
              "all": {
                "played": 4,
                "wins": 2,
                "draws": 2,
                "losses": 0,
                "goalsFor": 8,
                "goalsAgainst": 5
              },
              "home": {
                "played": 2,
                "wins": 1,
                "draws": 1,
                "losses": 0,
                "goalsFor": 4,
                "goalsAgainst": 2
              },
              "away": {
                "played": 2,
                "wins": 1,
                "draws": 1,
                "losses": 0,
                "goalsFor": 4,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 542,
              "team": "Alaves",
              "rank": 5,
              "points": 7,
              "goalsDiff": 4,
              "form": "WDW",
              "all": {
                "played": 3,
                "wins": 2,
                "draws": 1,
                "losses": 0,
                "goalsFor": 5,
                "goalsAgainst": 1
              },
              "home": {
                "played": 2,
                "wins": 2,
                "draws": 0,
                "losses": 0,
                "goalsFor": 4,
                "goalsAgainst": 0
              },
              "away": {
                "played": 1,
                "wins": 0,
                "draws": 1,
                "losses": 0,
                "goalsFor": 1,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 727,
              "team": "Osasuna",
              "rank": 6,
              "points": 7,
              "goalsDiff": 2,
              "form": "WWD",
              "all": {
                "played": 3,
                "wins": 2,
                "draws": 1,
                "losses": 0,
                "goalsFor": 3,
                "goalsAgainst": 1
              },
              "home": {
                "played": 2,
                "wins": 1,
                "draws": 1,
                "losses": 0,
                "goalsFor": 1,
                "goalsAgainst": 0
              },
              "away": {
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 2,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 530,
              "team": "Atletico Madrid",
              "rank": 7,
              "points": 7,
              "goalsDiff": 1,
              "form": "LWDW",
              "all": {
                "played": 4,
                "wins": 2,
                "draws": 1,
                "losses": 1,
                "goalsFor": 7,
                "goalsAgainst": 6
              },
              "home": {
                "played": 2,
                "wins": 1,
                "draws": 1,
                "losses": 0,
                "goalsFor": 4,
                "goalsAgainst": 2
              },
              "away": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 536,
              "team": "Sevilla",
              "rank": 8,
              "points": 6,
              "goalsDiff": 1,
              "form": "LWW",
              "all": {
                "played": 3,
                "wins": 2,
                "draws": 0,
                "losses": 1,
                "goalsFor": 6,
                "goalsAgainst": 5
              },
              "home": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 4
              },
              "away": {
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 3,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 531,
              "team": "Athletic Club",
              "rank": 9,
              "points": 6,
              "goalsDiff": 1,
              "form": "WWLL",
              "all": {
                "played": 4,
                "wins": 2,
                "draws": 0,
                "losses": 2,
                "goalsFor": 6,
                "goalsAgainst": 5
              },
              "home": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 4,
                "goalsAgainst": 3
              },
              "away": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 2,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 539,
              "team": "Levante",
              "rank": 10,
              "points": 4,
              "goalsDiff": 0,
              "form": "WDL",
              "all": {
                "played": 3,
                "wins": 1,
                "draws": 1,
                "losses": 1,
                "goalsFor": 5,
                "goalsAgainst": 5
              },
              "home": {
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 5,
                "goalsAgainst": 2
              },
              "away": {
                "played": 2,
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 0,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 4665,
              "team": "Racing Santander",
              "rank": 11,
              "points": 4,
              "goalsDiff": -1,
              "form": "LWLD",
              "all": {
                "played": 4,
                "wins": 1,
                "draws": 1,
                "losses": 2,
                "goalsFor": 7,
                "goalsAgainst": 8
              },
              "home": {
                "played": 2,
                "wins": 1,
                "draws": 1,
                "losses": 0,
                "goalsFor": 5,
                "goalsAgainst": 4
              },
              "away": {
                "played": 2,
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 2,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 728,
              "team": "Rayo Vallecano",
              "rank": 12,
              "points": 4,
              "goalsDiff": -3,
              "form": "WLDL",
              "all": {
                "played": 4,
                "wins": 1,
                "draws": 1,
                "losses": 2,
                "goalsFor": 7,
                "goalsAgainst": 10
              },
              "home": {
                "played": 2,
                "wins": 1,
                "draws": 1,
                "losses": 0,
                "goalsFor": 4,
                "goalsAgainst": 3
              },
              "away": {
                "played": 2,
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 3,
                "goalsAgainst": 7
              }
            },
            {
              "teamId": 548,
              "team": "Real Sociedad",
              "rank": 13,
              "points": 4,
              "goalsDiff": -3,
              "form": "DWLL",
              "all": {
                "played": 4,
                "wins": 1,
                "draws": 1,
                "losses": 2,
                "goalsFor": 3,
                "goalsAgainst": 6
              },
              "home": {
                "played": 2,
                "wins": 1,
                "draws": 1,
                "losses": 0,
                "goalsFor": 2,
                "goalsAgainst": 1
              },
              "away": {
                "played": 2,
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 1,
                "goalsAgainst": 5
              }
            },
            {
              "teamId": 540,
              "team": "Espanyol",
              "rank": 14,
              "points": 3,
              "goalsDiff": 1,
              "form": "LLW",
              "all": {
                "played": 3,
                "wins": 1,
                "draws": 0,
                "losses": 2,
                "goalsFor": 5,
                "goalsAgainst": 4
              },
              "home": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 4,
                "goalsAgainst": 2
              },
              "away": {
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 1,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 546,
              "team": "Getafe",
              "rank": 15,
              "points": 3,
              "goalsDiff": -3,
              "form": "LWL",
              "all": {
                "played": 3,
                "wins": 1,
                "draws": 0,
                "losses": 2,
                "goalsFor": 1,
                "goalsAgainst": 4
              },
              "home": {
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 1,
                "goalsAgainst": 0
              },
              "away": {
                "played": 2,
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 0,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 533,
              "team": "Villarreal",
              "rank": 16,
              "points": 2,
              "goalsDiff": -2,
              "form": "LLDD",
              "all": {
                "played": 4,
                "wins": 0,
                "draws": 2,
                "losses": 2,
                "goalsFor": 6,
                "goalsAgainst": 8
              },
              "home": {
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 2,
                "goalsAgainst": 3
              },
              "away": {
                "played": 3,
                "wins": 0,
                "draws": 2,
                "losses": 1,
                "goalsFor": 4,
                "goalsAgainst": 5
              }
            },
            {
              "teamId": 538,
              "team": "Celta Vigo",
              "rank": 17,
              "points": 2,
              "goalsDiff": -3,
              "form": "DLLD",
              "all": {
                "played": 4,
                "wins": 0,
                "draws": 2,
                "losses": 2,
                "goalsFor": 1,
                "goalsAgainst": 4
              },
              "home": {
                "played": 2,
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 1,
                "goalsAgainst": 4
              },
              "away": {
                "played": 2,
                "wins": 0,
                "draws": 2,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 532,
              "team": "Valencia",
              "rank": 18,
              "points": 1,
              "goalsDiff": -3,
              "form": "LLD",
              "all": {
                "played": 3,
                "wins": 0,
                "draws": 1,
                "losses": 2,
                "goalsFor": 1,
                "goalsAgainst": 4
              },
              "home": {
                "played": 2,
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 0,
                "goalsAgainst": 1
              },
              "away": {
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 1,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 797,
              "team": "Elche",
              "rank": 19,
              "points": 1,
              "goalsDiff": -6,
              "form": "LLD",
              "all": {
                "played": 3,
                "wins": 0,
                "draws": 1,
                "losses": 2,
                "goalsFor": 3,
                "goalsAgainst": 9
              },
              "home": {
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 0,
                "goalsAgainst": 5
              },
              "away": {
                "played": 2,
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 535,
              "team": "Malaga",
              "rank": 20,
              "points": 1,
              "goalsDiff": -6,
              "form": "LDL",
              "all": {
                "played": 3,
                "wins": 0,
                "draws": 1,
                "losses": 2,
                "goalsFor": 1,
                "goalsAgainst": 7
              },
              "home": {
                "played": 1,
                "wins": 0,
                "draws": 1,
                "losses": 0,
                "goalsFor": 1,
                "goalsAgainst": 1
              },
              "away": {
                "played": 2,
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 0,
                "goalsAgainst": 6
              }
            }
          ],
          "teams": [
            {
              "teamId": 728,
              "team": "Rayo Vallecano",
              "form": "LDLW",
              "all": {
                "played": 4,
                "wins": 1,
                "draws": 1,
                "losses": 2,
                "goalsFor": 7,
                "goalsAgainst": 10
              },
              "home": {
                "played": 2,
                "wins": 1,
                "draws": 1,
                "losses": 0,
                "goalsFor": 4,
                "goalsAgainst": 3
              },
              "away": {
                "played": 2,
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 3,
                "goalsAgainst": 7
              }
            },
            {
              "teamId": 4665,
              "team": "Racing Santander",
              "form": "DLWL",
              "all": {
                "played": 4,
                "wins": 1,
                "draws": 1,
                "losses": 2,
                "goalsFor": 7,
                "goalsAgainst": 8
              },
              "home": {
                "played": 2,
                "wins": 1,
                "draws": 1,
                "losses": 0,
                "goalsFor": 5,
                "goalsAgainst": 4
              },
              "away": {
                "played": 2,
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 2,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 533,
              "team": "Villarreal",
              "form": "DDLL",
              "all": {
                "played": 4,
                "wins": 0,
                "draws": 2,
                "losses": 2,
                "goalsFor": 6,
                "goalsAgainst": 8
              },
              "home": {
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 2,
                "goalsAgainst": 3
              },
              "away": {
                "played": 3,
                "wins": 0,
                "draws": 2,
                "losses": 1,
                "goalsFor": 4,
                "goalsAgainst": 5
              }
            },
            {
              "teamId": 544,
              "team": "Deportivo La Coruna",
              "form": "DDWW",
              "all": {
                "played": 4,
                "wins": 2,
                "draws": 2,
                "losses": 0,
                "goalsFor": 8,
                "goalsAgainst": 5
              },
              "home": {
                "played": 2,
                "wins": 1,
                "draws": 1,
                "losses": 0,
                "goalsFor": 4,
                "goalsAgainst": 2
              },
              "away": {
                "played": 2,
                "wins": 1,
                "draws": 1,
                "losses": 0,
                "goalsFor": 4,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 532,
              "team": "Valencia",
              "form": "DLL",
              "all": {
                "played": 3,
                "wins": 0,
                "draws": 1,
                "losses": 2,
                "goalsFor": 1,
                "goalsAgainst": 4
              },
              "home": {
                "played": 2,
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 0,
                "goalsAgainst": 1
              },
              "away": {
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 1,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 529,
              "team": "Barcelona",
              "form": "WWW",
              "all": {
                "played": 3,
                "wins": 3,
                "draws": 0,
                "losses": 0,
                "goalsFor": 12,
                "goalsAgainst": 2
              },
              "home": {
                "played": 2,
                "wins": 2,
                "draws": 0,
                "losses": 0,
                "goalsFor": 7,
                "goalsAgainst": 2
              },
              "away": {
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 5,
                "goalsAgainst": 0
              }
            }
          ],
          "fixtures": [
            {
              "fixtureId": 1570370,
              "kickoff": "2026-09-06T01:30:00+09:00",
              "status": "FT",
              "homeTeamId": 728,
              "homeTeam": "Rayo Vallecano",
              "awayTeamId": 4665,
              "awayTeam": "Racing Santander",
              "injuriesChecked": true,
              "injuries": [
                {
                  "fixtureId": 1570370,
                  "teamId": 728,
                  "playerId": 11379,
                  "player": "A. Batalla",
                  "type": "Missing Fixture",
                  "reason": "Broken calfbone"
                },
                {
                  "fixtureId": 1570370,
                  "teamId": 728,
                  "playerId": 30924,
                  "player": "M. Kumbulla",
                  "type": "Missing Fixture",
                  "reason": "Muscle Injury"
                },
                {
                  "fixtureId": 1570370,
                  "teamId": 728,
                  "playerId": 1847,
                  "player": "Luiz Felipe",
                  "type": "Missing Fixture",
                  "reason": "Hamstring Injury"
                },
                {
                  "fixtureId": 1570370,
                  "teamId": 728,
                  "playerId": 131546,
                  "player": "I. Palazon",
                  "type": "Missing Fixture",
                  "reason": "Muscle Injury"
                },
                {
                  "fixtureId": 1570370,
                  "teamId": 728,
                  "playerId": 314006,
                  "player": "J. Vertrouwd",
                  "type": "Missing Fixture",
                  "reason": "Muscle Injury"
                },
                {
                  "fixtureId": 1570370,
                  "teamId": 4665,
                  "playerId": 548706,
                  "player": "I. Luque",
                  "type": "Missing Fixture",
                  "reason": "Inactive"
                },
                {
                  "fixtureId": 1570370,
                  "teamId": 4665,
                  "playerId": 47209,
                  "player": "A. Martin",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                }
              ],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1570372,
              "kickoff": "2026-09-06T04:00:00+09:00",
              "status": "FT",
              "homeTeamId": 533,
              "homeTeam": "Villarreal",
              "awayTeamId": 544,
              "awayTeam": "Deportivo La Coruna",
              "injuriesChecked": true,
              "injuries": [
                {
                  "fixtureId": 1570372,
                  "teamId": 533,
                  "playerId": 166,
                  "player": "J. Foyth",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1570372,
                  "teamId": 544,
                  "playerId": 162122,
                  "player": "A. Altimira",
                  "type": "Missing Fixture",
                  "reason": "Red Card"
                },
                {
                  "fixtureId": 1570372,
                  "teamId": 544,
                  "playerId": 628615,
                  "player": "N. Carrillo",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                }
              ],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1570371,
              "kickoff": "2026-09-06T23:15:00+09:00",
              "status": "NS",
              "homeTeamId": 532,
              "homeTeam": "Valencia",
              "awayTeamId": 529,
              "awayTeam": "Barcelona",
              "injuriesChecked": true,
              "injuries": [
                {
                  "fixtureId": 1570371,
                  "teamId": 532,
                  "playerId": 19352,
                  "player": "S. Canos",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1570371,
                  "teamId": 532,
                  "playerId": 181582,
                  "player": "J. Copete",
                  "type": "Missing Fixture",
                  "reason": "Ankle Injury"
                },
                {
                  "fixtureId": 1570371,
                  "teamId": 532,
                  "playerId": 36884,
                  "player": "J. De Haas",
                  "type": "Missing Fixture",
                  "reason": "Ankle Injury"
                },
                {
                  "fixtureId": 1570371,
                  "teamId": 532,
                  "playerId": 47251,
                  "player": "D. Foulquier",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1570371,
                  "teamId": 532,
                  "playerId": 162127,
                  "player": "D. Lopez",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1570371,
                  "teamId": 532,
                  "playerId": 46933,
                  "player": "L. Rioja",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1570371,
                  "teamId": 532,
                  "playerId": 2476,
                  "player": "G. Rodriguez",
                  "type": "Missing Fixture",
                  "reason": "Muscle Injury"
                },
                {
                  "fixtureId": 1570371,
                  "teamId": 532,
                  "playerId": 31406,
                  "player": "U. Sadiq",
                  "type": "Missing Fixture",
                  "reason": "Muscle Injury"
                },
                {
                  "fixtureId": 1570371,
                  "teamId": 529,
                  "playerId": 338958,
                  "player": "R. Bardghji",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1570371,
                  "teamId": 529,
                  "playerId": 426446,
                  "player": "J. Bisiwu",
                  "type": "Missing Fixture",
                  "reason": "Ankle Injury"
                },
                {
                  "fixtureId": 1570371,
                  "teamId": 529,
                  "playerId": 538,
                  "player": "F. de Jong",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                }
              ],
              "lineupsChecked": true,
              "lineups": []
            }
          ]
        },
        {
          "key": "SERIEA",
          "leagueId": 135,
          "season": "2026",
          "standings": [
            {
              "teamId": 497,
              "team": "AS Roma",
              "rank": 1,
              "points": 9,
              "goalsDiff": 9,
              "form": "WWW",
              "all": {
                "played": 3,
                "wins": 3,
                "draws": 0,
                "losses": 0,
                "goalsFor": 10,
                "goalsAgainst": 1
              },
              "home": {
                "played": 2,
                "wins": 2,
                "draws": 0,
                "losses": 0,
                "goalsFor": 6,
                "goalsAgainst": 1
              },
              "away": {
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 4,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 505,
              "team": "Inter",
              "rank": 2,
              "points": 9,
              "goalsDiff": 5,
              "form": "WWW",
              "all": {
                "played": 3,
                "wins": 3,
                "draws": 0,
                "losses": 0,
                "goalsFor": 8,
                "goalsAgainst": 3
              },
              "home": {
                "played": 2,
                "wins": 2,
                "draws": 0,
                "losses": 0,
                "goalsFor": 7,
                "goalsAgainst": 3
              },
              "away": {
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 1,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 895,
              "team": "Como",
              "rank": 3,
              "points": 7,
              "goalsDiff": 4,
              "form": "WWD",
              "all": {
                "played": 3,
                "wins": 2,
                "draws": 1,
                "losses": 0,
                "goalsFor": 7,
                "goalsAgainst": 3
              },
              "home": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "away": {
                "played": 3,
                "wins": 2,
                "draws": 1,
                "losses": 0,
                "goalsFor": 7,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 489,
              "team": "AC Milan",
              "rank": 4,
              "points": 6,
              "goalsDiff": 3,
              "form": "WW",
              "all": {
                "played": 2,
                "wins": 2,
                "draws": 0,
                "losses": 0,
                "goalsFor": 4,
                "goalsAgainst": 1
              },
              "home": {
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 2,
                "goalsAgainst": 0
              },
              "away": {
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 2,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 496,
              "team": "Juventus",
              "rank": 5,
              "points": 6,
              "goalsDiff": 3,
              "form": "WW",
              "all": {
                "played": 2,
                "wins": 2,
                "draws": 0,
                "losses": 0,
                "goalsFor": 3,
                "goalsAgainst": 0
              },
              "home": {
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 2,
                "goalsAgainst": 0
              },
              "away": {
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 1,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 487,
              "team": "Lazio",
              "rank": 6,
              "points": 6,
              "goalsDiff": 2,
              "form": "WW",
              "all": {
                "played": 2,
                "wins": 2,
                "draws": 0,
                "losses": 0,
                "goalsFor": 2,
                "goalsAgainst": 0
              },
              "home": {
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 1,
                "goalsAgainst": 0
              },
              "away": {
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 1,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 499,
              "team": "Atalanta",
              "rank": 7,
              "points": 6,
              "goalsDiff": 1,
              "form": "LWW",
              "all": {
                "played": 3,
                "wins": 2,
                "draws": 0,
                "losses": 1,
                "goalsFor": 4,
                "goalsAgainst": 3
              },
              "home": {
                "played": 2,
                "wins": 2,
                "draws": 0,
                "losses": 0,
                "goalsFor": 3,
                "goalsAgainst": 1
              },
              "away": {
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 1,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 494,
              "team": "Udinese",
              "rank": 8,
              "points": 4,
              "goalsDiff": 1,
              "form": "WD",
              "all": {
                "played": 2,
                "wins": 1,
                "draws": 1,
                "losses": 0,
                "goalsFor": 4,
                "goalsAgainst": 3
              },
              "home": {
                "played": 1,
                "wins": 0,
                "draws": 1,
                "losses": 0,
                "goalsFor": 1,
                "goalsAgainst": 1
              },
              "away": {
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 3,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 512,
              "team": "Frosinone",
              "rank": 9,
              "points": 3,
              "goalsDiff": 2,
              "form": "WL",
              "all": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 1
              },
              "home": {
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 0,
                "goalsAgainst": 1
              },
              "away": {
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 3,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 488,
              "team": "Sassuolo",
              "rank": 10,
              "points": 3,
              "goalsDiff": 0,
              "form": "WL",
              "all": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 3
              },
              "home": {
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 2,
                "goalsAgainst": 1
              },
              "away": {
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 1,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 490,
              "team": "Cagliari",
              "rank": 11,
              "points": 3,
              "goalsDiff": 0,
              "form": "LW",
              "all": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 1,
                "goalsAgainst": 1
              },
              "home": {
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 0,
                "goalsAgainst": 1
              },
              "away": {
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 1,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 867,
              "team": "Lecce",
              "rank": 12,
              "points": 3,
              "goalsDiff": -2,
              "form": "LW",
              "all": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 2,
                "goalsAgainst": 4
              },
              "home": {
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 0,
                "goalsAgainst": 4
              },
              "away": {
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 2,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 492,
              "team": "Napoli",
              "rank": 13,
              "points": 3,
              "goalsDiff": 0,
              "form": "LLW",
              "all": {
                "played": 3,
                "wins": 1,
                "draws": 0,
                "losses": 2,
                "goalsFor": 5,
                "goalsAgainst": 5
              },
              "home": {
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 1,
                "goalsAgainst": 2
              },
              "away": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 4,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 503,
              "team": "Torino",
              "rank": 14,
              "points": 3,
              "goalsDiff": -1,
              "form": "WLL",
              "all": {
                "played": 3,
                "wins": 1,
                "draws": 0,
                "losses": 2,
                "goalsFor": 4,
                "goalsAgainst": 5
              },
              "home": {
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 1,
                "goalsAgainst": 2
              },
              "away": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 500,
              "team": "Bologna",
              "rank": 15,
              "points": 0,
              "goalsDiff": -2,
              "form": "LL",
              "all": {
                "played": 2,
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 0,
                "goalsAgainst": 2
              },
              "home": {
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 0,
                "goalsAgainst": 1
              },
              "away": {
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 0,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 523,
              "team": "Parma",
              "rank": 16,
              "points": 0,
              "goalsDiff": -3,
              "form": "LL",
              "all": {
                "played": 2,
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 0,
                "goalsAgainst": 3
              },
              "home": {
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 0,
                "goalsAgainst": 1
              },
              "away": {
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 0,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 1579,
              "team": "Monza",
              "rank": 17,
              "points": 0,
              "goalsDiff": -4,
              "form": "LL",
              "all": {
                "played": 2,
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 3,
                "goalsAgainst": 7
              },
              "home": {
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 2,
                "goalsAgainst": 3
              },
              "away": {
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 1,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 517,
              "team": "Venezia",
              "rank": 18,
              "points": 0,
              "goalsDiff": -4,
              "form": "LL",
              "all": {
                "played": 2,
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 0,
                "goalsAgainst": 4
              },
              "home": {
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 0,
                "goalsAgainst": 2
              },
              "away": {
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 0,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 495,
              "team": "Genoa",
              "rank": 19,
              "points": 0,
              "goalsDiff": -6,
              "form": "LLL",
              "all": {
                "played": 3,
                "wins": 0,
                "draws": 0,
                "losses": 3,
                "goalsFor": 1,
                "goalsAgainst": 7
              },
              "home": {
                "played": 2,
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 1,
                "goalsAgainst": 6
              },
              "away": {
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 0,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 502,
              "team": "Fiorentina",
              "rank": 20,
              "points": 0,
              "goalsDiff": -8,
              "form": "LLL",
              "all": {
                "played": 3,
                "wins": 0,
                "draws": 0,
                "losses": 3,
                "goalsFor": 1,
                "goalsAgainst": 9
              },
              "home": {
                "played": 2,
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 1,
                "goalsAgainst": 5
              },
              "away": {
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 0,
                "goalsAgainst": 4
              }
            }
          ],
          "teams": [
            {
              "teamId": 505,
              "team": "Inter",
              "form": "WWW",
              "all": {
                "played": 3,
                "wins": 3,
                "draws": 0,
                "losses": 0,
                "goalsFor": 8,
                "goalsAgainst": 3
              },
              "home": {
                "played": 2,
                "wins": 2,
                "draws": 0,
                "losses": 0,
                "goalsFor": 7,
                "goalsAgainst": 3
              },
              "away": {
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 1,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 492,
              "team": "Napoli",
              "form": "WLL",
              "all": {
                "played": 3,
                "wins": 1,
                "draws": 0,
                "losses": 2,
                "goalsFor": 5,
                "goalsAgainst": 5
              },
              "home": {
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 1,
                "goalsAgainst": 2
              },
              "away": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 4,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 497,
              "team": "AS Roma",
              "form": "WWW",
              "all": {
                "played": 3,
                "wins": 3,
                "draws": 0,
                "losses": 0,
                "goalsFor": 10,
                "goalsAgainst": 1
              },
              "home": {
                "played": 2,
                "wins": 2,
                "draws": 0,
                "losses": 0,
                "goalsFor": 6,
                "goalsAgainst": 1
              },
              "away": {
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 4,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 499,
              "team": "Atalanta",
              "form": "WWL",
              "all": {
                "played": 3,
                "wins": 2,
                "draws": 0,
                "losses": 1,
                "goalsFor": 4,
                "goalsAgainst": 3
              },
              "home": {
                "played": 2,
                "wins": 2,
                "draws": 0,
                "losses": 0,
                "goalsFor": 3,
                "goalsAgainst": 1
              },
              "away": {
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 1,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 512,
              "team": "Frosinone",
              "form": "LW",
              "all": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 1
              },
              "home": {
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 0,
                "goalsAgainst": 1
              },
              "away": {
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 3,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 517,
              "team": "Venezia",
              "form": "LL",
              "all": {
                "played": 2,
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 0,
                "goalsAgainst": 4
              },
              "home": {
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 0,
                "goalsAgainst": 2
              },
              "away": {
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 0,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 523,
              "team": "Parma",
              "form": "LL",
              "all": {
                "played": 2,
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 0,
                "goalsAgainst": 3
              },
              "home": {
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 0,
                "goalsAgainst": 1
              },
              "away": {
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 0,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 1579,
              "team": "Monza",
              "form": "LL",
              "all": {
                "played": 2,
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 3,
                "goalsAgainst": 7
              },
              "home": {
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 2,
                "goalsAgainst": 3
              },
              "away": {
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 1,
                "goalsAgainst": 4
              }
            }
          ],
          "fixtures": [
            {
              "fixtureId": 1550113,
              "kickoff": "2026-09-06T01:00:00+09:00",
              "status": "FT",
              "homeTeamId": 505,
              "homeTeam": "Inter",
              "awayTeamId": 492,
              "awayTeam": "Napoli",
              "injuriesChecked": true,
              "injuries": [
                {
                  "fixtureId": 1550113,
                  "teamId": 505,
                  "playerId": 19235,
                  "player": "D. Spence",
                  "type": "Missing Fixture",
                  "reason": "Inactive"
                },
                {
                  "fixtureId": 1550113,
                  "teamId": 492,
                  "playerId": 31226,
                  "player": "A. Buongiorno",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1550113,
                  "teamId": 492,
                  "playerId": 312615,
                  "player": "Giovane",
                  "type": "Missing Fixture",
                  "reason": "Groin Injury"
                },
                {
                  "fixtureId": 1550113,
                  "teamId": 492,
                  "playerId": 388547,
                  "player": "L. Marianucci",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1550113,
                  "teamId": 492,
                  "playerId": 903,
                  "player": "S. McTominay",
                  "type": "Missing Fixture",
                  "reason": "Heart Problems"
                }
              ],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1550107,
              "kickoff": "2026-09-06T03:45:00+09:00",
              "status": "FT",
              "homeTeamId": 497,
              "homeTeam": "AS Roma",
              "awayTeamId": 499,
              "awayTeam": "Atalanta",
              "injuriesChecked": true,
              "injuries": [
                {
                  "fixtureId": 1550107,
                  "teamId": 497,
                  "playerId": 626686,
                  "player": "M. Bah",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1550107,
                  "teamId": 497,
                  "playerId": 782,
                  "player": "L. Pellegrini",
                  "type": "Missing Fixture",
                  "reason": "Thigh Injury"
                },
                {
                  "fixtureId": 1550107,
                  "teamId": 499,
                  "playerId": 137976,
                  "player": "I. Hien",
                  "type": "Missing Fixture",
                  "reason": "Muscle Injury"
                },
                {
                  "fixtureId": 1550107,
                  "teamId": 499,
                  "playerId": 199837,
                  "player": "K. Sulemana",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                }
              ],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1550111,
              "kickoff": "2026-09-06T22:00:00+09:00",
              "status": "NS",
              "homeTeamId": 512,
              "homeTeam": "Frosinone",
              "awayTeamId": 517,
              "awayTeam": "Venezia",
              "injuriesChecked": true,
              "injuries": [
                {
                  "fixtureId": 1550111,
                  "teamId": 517,
                  "playerId": 212,
                  "player": "A. Adorante",
                  "type": "Missing Fixture",
                  "reason": "Hernia"
                },
                {
                  "fixtureId": 1550111,
                  "teamId": 517,
                  "playerId": 1266,
                  "player": "T. Basic",
                  "type": "Missing Fixture",
                  "reason": "Foot Injury"
                },
                {
                  "fixtureId": 1550111,
                  "teamId": 517,
                  "playerId": 14704,
                  "player": "B. Franjic",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1550111,
                  "teamId": 517,
                  "playerId": 26095,
                  "player": "M. Sverko",
                  "type": "Missing Fixture",
                  "reason": "Hip Injury"
                }
              ],
              "lineupsChecked": true,
              "lineups": []
            },
            {
              "fixtureId": 1550115,
              "kickoff": "2026-09-06T22:00:00+09:00",
              "status": "NS",
              "homeTeamId": 523,
              "homeTeam": "Parma",
              "awayTeamId": 1579,
              "awayTeam": "Monza",
              "injuriesChecked": true,
              "injuries": [
                {
                  "fixtureId": 1550115,
                  "teamId": 523,
                  "playerId": 628,
                  "player": "A. Bernabe",
                  "type": "Missing Fixture",
                  "reason": "Inactive"
                },
                {
                  "fixtureId": 1550115,
                  "teamId": 523,
                  "playerId": 432610,
                  "player": "O. Diallo",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1550115,
                  "teamId": 523,
                  "playerId": 881,
                  "player": "H. Nicolussi Caviglia",
                  "type": "Missing Fixture",
                  "reason": "Groin Injury"
                },
                {
                  "fixtureId": 1550115,
                  "teamId": 1579,
                  "playerId": 31532,
                  "player": "P. Ciurria",
                  "type": "Missing Fixture",
                  "reason": "Inactive"
                },
                {
                  "fixtureId": 1550115,
                  "teamId": 1579,
                  "playerId": 30436,
                  "player": "M. Pessina",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1550115,
                  "teamId": 1579,
                  "playerId": 56293,
                  "player": "I. Toure",
                  "type": "Missing Fixture",
                  "reason": "Contusion"
                },
                {
                  "fixtureId": 1550115,
                  "teamId": 1579,
                  "playerId": 340547,
                  "player": "G. Varela",
                  "type": "Missing Fixture",
                  "reason": "Thigh Injury"
                },
                {
                  "fixtureId": 1550115,
                  "teamId": 1579,
                  "playerId": 384543,
                  "player": "J. Ziolkowski",
                  "type": "Missing Fixture",
                  "reason": "Foot Injury"
                }
              ],
              "lineupsChecked": true,
              "lineups": []
            }
          ]
        },
        {
          "key": "BUNDESLIGA",
          "leagueId": 78,
          "season": "2026",
          "standings": [
            {
              "teamId": 160,
              "team": "SC Freiburg",
              "rank": 1,
              "points": 6,
              "goalsDiff": 4,
              "form": "WW",
              "all": {
                "played": 2,
                "wins": 2,
                "draws": 0,
                "losses": 0,
                "goalsFor": 5,
                "goalsAgainst": 1
              },
              "home": {
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 4,
                "goalsAgainst": 1
              },
              "away": {
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 1,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 165,
              "team": "Borussia Dortmund",
              "rank": 2,
              "points": 6,
              "goalsDiff": 3,
              "form": "WW",
              "all": {
                "played": 2,
                "wins": 2,
                "draws": 0,
                "losses": 0,
                "goalsFor": 5,
                "goalsAgainst": 2
              },
              "home": {
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 2,
                "goalsAgainst": 0
              },
              "away": {
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 3,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 1660,
              "team": "SV Elversberg",
              "rank": 3,
              "points": 6,
              "goalsDiff": 2,
              "form": "WW",
              "all": {
                "played": 2,
                "wins": 2,
                "draws": 0,
                "losses": 0,
                "goalsFor": 7,
                "goalsAgainst": 5
              },
              "home": {
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 3,
                "goalsAgainst": 2
              },
              "away": {
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 4,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 157,
              "team": "Bayern München",
              "rank": 4,
              "points": 4,
              "goalsDiff": 4,
              "form": "DW",
              "all": {
                "played": 2,
                "wins": 1,
                "draws": 1,
                "losses": 0,
                "goalsFor": 5,
                "goalsAgainst": 1
              },
              "home": {
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 5,
                "goalsAgainst": 1
              },
              "away": {
                "played": 1,
                "wins": 0,
                "draws": 1,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 168,
              "team": "Bayer Leverkusen",
              "rank": 5,
              "points": 3,
              "goalsDiff": 3,
              "form": "WL",
              "all": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 6,
                "goalsAgainst": 3
              },
              "home": {
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 4,
                "goalsAgainst": 0
              },
              "away": {
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 2,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 170,
              "team": "FC Augsburg",
              "rank": 6,
              "points": 3,
              "goalsDiff": 3,
              "form": "W",
              "all": {
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 3,
                "goalsAgainst": 0
              },
              "home": {
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 3,
                "goalsAgainst": 0
              },
              "away": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 173,
              "team": "RB Leipzig",
              "rank": 7,
              "points": 3,
              "goalsDiff": 1,
              "form": "LW",
              "all": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 4,
                "goalsAgainst": 3
              },
              "home": {
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 3,
                "goalsAgainst": 0
              },
              "away": {
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 1,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 172,
              "team": "VfB Stuttgart",
              "rank": 8,
              "points": 3,
              "goalsDiff": -1,
              "form": "WL",
              "all": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 5,
                "goalsAgainst": 6
              },
              "home": {
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 4,
                "goalsAgainst": 1
              },
              "away": {
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 1,
                "goalsAgainst": 5
              }
            },
            {
              "teamId": 162,
              "team": "Werder Bremen",
              "rank": 9,
              "points": 3,
              "goalsDiff": -1,
              "form": "WL",
              "all": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 4,
                "goalsAgainst": 5
              },
              "home": {
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 3,
                "goalsAgainst": 1
              },
              "away": {
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 1,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 192,
              "team": "1. FC Köln",
              "rank": 10,
              "points": 3,
              "goalsDiff": -2,
              "form": "LW",
              "all": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 4,
                "goalsAgainst": 6
              },
              "home": {
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 3,
                "goalsAgainst": 2
              },
              "away": {
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 1,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 169,
              "team": "Eintracht Frankfurt",
              "rank": 11,
              "points": 1,
              "goalsDiff": 0,
              "form": "D",
              "all": {
                "played": 1,
                "wins": 0,
                "draws": 1,
                "losses": 0,
                "goalsFor": 3,
                "goalsAgainst": 3
              },
              "home": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "away": {
                "played": 1,
                "wins": 0,
                "draws": 1,
                "losses": 0,
                "goalsFor": 3,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 164,
              "team": "FSV Mainz 05",
              "rank": 12,
              "points": 1,
              "goalsDiff": 0,
              "form": "D",
              "all": {
                "played": 1,
                "wins": 0,
                "draws": 1,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "home": {
                "played": 1,
                "wins": 0,
                "draws": 1,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "away": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 185,
              "team": "SC Paderborn 07",
              "rank": 13,
              "points": 1,
              "goalsDiff": -1,
              "form": "LD",
              "all": {
                "played": 2,
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 0,
                "goalsAgainst": 1
              },
              "home": {
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 0,
                "goalsAgainst": 1
              },
              "away": {
                "played": 1,
                "wins": 0,
                "draws": 1,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 174,
              "team": "FC Schalke 04",
              "rank": 14,
              "points": 1,
              "goalsDiff": -3,
              "form": "DL",
              "all": {
                "played": 2,
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 0,
                "goalsAgainst": 3
              },
              "home": {
                "played": 1,
                "wins": 0,
                "draws": 1,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "away": {
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 0,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 182,
              "team": "Union Berlin",
              "rank": 15,
              "points": 1,
              "goalsDiff": -4,
              "form": "LD",
              "all": {
                "played": 2,
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 7
              },
              "home": {
                "played": 1,
                "wins": 0,
                "draws": 1,
                "losses": 0,
                "goalsFor": 3,
                "goalsAgainst": 3
              },
              "away": {
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 0,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 167,
              "team": "1899 Hoffenheim",
              "rank": 16,
              "points": 0,
              "goalsDiff": -2,
              "form": "LL",
              "all": {
                "played": 2,
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 4,
                "goalsAgainst": 6
              },
              "home": {
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 2,
                "goalsAgainst": 3
              },
              "away": {
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 2,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 175,
              "team": "Hamburger SV",
              "rank": 17,
              "points": 0,
              "goalsDiff": -2,
              "form": "L",
              "all": {
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 0,
                "goalsAgainst": 2
              },
              "home": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "away": {
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 0,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 163,
              "team": "Borussia Mönchengladbach",
              "rank": 18,
              "points": 0,
              "goalsDiff": -4,
              "form": "LL",
              "all": {
                "played": 2,
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 3,
                "goalsAgainst": 7
              },
              "home": {
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 4
              },
              "away": {
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 0,
                "goalsAgainst": 3
              }
            }
          ],
          "teams": [
            {
              "teamId": 174,
              "team": "FC Schalke 04",
              "form": "LD",
              "all": {
                "played": 2,
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 0,
                "goalsAgainst": 3
              },
              "home": {
                "played": 1,
                "wins": 0,
                "draws": 1,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "away": {
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 0,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 157,
              "team": "Bayern München",
              "form": "WD",
              "all": {
                "played": 2,
                "wins": 1,
                "draws": 1,
                "losses": 0,
                "goalsFor": 5,
                "goalsAgainst": 1
              },
              "home": {
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 5,
                "goalsAgainst": 1
              },
              "away": {
                "played": 1,
                "wins": 0,
                "draws": 1,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 175,
              "team": "Hamburger SV",
              "form": "L",
              "all": {
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 0,
                "goalsAgainst": 2
              },
              "home": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "away": {
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 0,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 164,
              "team": "FSV Mainz 05",
              "form": "D",
              "all": {
                "played": 1,
                "wins": 0,
                "draws": 1,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "home": {
                "played": 1,
                "wins": 0,
                "draws": 1,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "away": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            }
          ],
          "fixtures": [
            {
              "fixtureId": 1575156,
              "kickoff": "2026-09-06T01:30:00+09:00",
              "status": "FT",
              "homeTeamId": 174,
              "homeTeam": "FC Schalke 04",
              "awayTeamId": 157,
              "awayTeam": "Bayern München",
              "injuriesChecked": true,
              "injuries": [
                {
                  "fixtureId": 1575156,
                  "teamId": 174,
                  "playerId": 266192,
                  "player": "A. Gantenbein",
                  "type": "Missing Fixture",
                  "reason": "Ankle Injury"
                },
                {
                  "fixtureId": 1575156,
                  "teamId": 174,
                  "playerId": 339875,
                  "player": "E. Hojlund",
                  "type": "Missing Fixture",
                  "reason": "Heel Injury"
                },
                {
                  "fixtureId": 1575156,
                  "teamId": 174,
                  "playerId": 19262,
                  "player": "T. Kalas",
                  "type": "Missing Fixture",
                  "reason": "Lacking Match Fitness"
                },
                {
                  "fixtureId": 1575156,
                  "teamId": 174,
                  "playerId": 24228,
                  "player": "B. Lasme",
                  "type": "Missing Fixture",
                  "reason": "Calf Injury"
                },
                {
                  "fixtureId": 1575156,
                  "teamId": 174,
                  "playerId": 88140,
                  "player": "R. Schallenberg",
                  "type": "Missing Fixture",
                  "reason": "Red Card"
                },
                {
                  "fixtureId": 1575156,
                  "teamId": 157,
                  "playerId": 330612,
                  "player": "T. Buchmann",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1575156,
                  "teamId": 157,
                  "playerId": 510,
                  "player": "S. Gnabry",
                  "type": "Missing Fixture",
                  "reason": "Muscle Injury"
                }
              ],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1575154,
              "kickoff": "2026-09-06T22:30:00+09:00",
              "status": "NS",
              "homeTeamId": 175,
              "homeTeam": "Hamburger SV",
              "awayTeamId": 164,
              "awayTeam": "FSV Mainz 05",
              "injuriesChecked": true,
              "injuries": [
                {
                  "fixtureId": 1575154,
                  "teamId": 175,
                  "playerId": 162265,
                  "player": "W. Omari",
                  "type": "Missing Fixture",
                  "reason": "Personal Reasons"
                },
                {
                  "fixtureId": 1575154,
                  "teamId": 175,
                  "playerId": 470282,
                  "player": "A. Rossing-Lelesiit",
                  "type": "Missing Fixture",
                  "reason": "Ankle Injury"
                },
                {
                  "fixtureId": 1575154,
                  "teamId": 175,
                  "playerId": 48489,
                  "player": "M. Muheim",
                  "type": "Questionable",
                  "reason": "Muscle Injury"
                },
                {
                  "fixtureId": 1575154,
                  "teamId": 164,
                  "playerId": 979,
                  "player": "D. Kohr",
                  "type": "Missing Fixture",
                  "reason": "Foot Injury"
                },
                {
                  "fixtureId": 1575154,
                  "teamId": 164,
                  "playerId": 162480,
                  "player": "E. Martel",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1575154,
                  "teamId": 164,
                  "playerId": 202736,
                  "player": "P. Nebel",
                  "type": "Missing Fixture",
                  "reason": "Muscle Injury"
                },
                {
                  "fixtureId": 1575154,
                  "teamId": 164,
                  "playerId": 20617,
                  "player": "Silas",
                  "type": "Missing Fixture",
                  "reason": "Broken shinbone"
                },
                {
                  "fixtureId": 1575154,
                  "teamId": 164,
                  "playerId": 162946,
                  "player": "B. Hollerbach",
                  "type": "Questionable",
                  "reason": "Lacking Match Fitness"
                }
              ],
              "lineupsChecked": true,
              "lineups": []
            }
          ]
        },
        {
          "key": "LIGUE1",
          "leagueId": 61,
          "season": "2026",
          "standings": [
            {
              "teamId": 91,
              "team": "Monaco",
              "rank": 1,
              "points": 9,
              "goalsDiff": 4,
              "form": "WWW",
              "all": {
                "played": 3,
                "wins": 3,
                "draws": 0,
                "losses": 0,
                "goalsFor": 5,
                "goalsAgainst": 1
              },
              "home": {
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 2,
                "goalsAgainst": 0
              },
              "away": {
                "played": 2,
                "wins": 2,
                "draws": 0,
                "losses": 0,
                "goalsFor": 3,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 80,
              "team": "Lyon",
              "rank": 2,
              "points": 7,
              "goalsDiff": 4,
              "form": "WDW",
              "all": {
                "played": 3,
                "wins": 2,
                "draws": 1,
                "losses": 0,
                "goalsFor": 6,
                "goalsAgainst": 2
              },
              "home": {
                "played": 2,
                "wins": 1,
                "draws": 1,
                "losses": 0,
                "goalsFor": 4,
                "goalsAgainst": 2
              },
              "away": {
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 2,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 79,
              "team": "Lille",
              "rank": 3,
              "points": 7,
              "goalsDiff": 3,
              "form": "WDW",
              "all": {
                "played": 3,
                "wins": 2,
                "draws": 1,
                "losses": 0,
                "goalsFor": 5,
                "goalsAgainst": 2
              },
              "home": {
                "played": 1,
                "wins": 0,
                "draws": 1,
                "losses": 0,
                "goalsFor": 2,
                "goalsAgainst": 2
              },
              "away": {
                "played": 2,
                "wins": 2,
                "draws": 0,
                "losses": 0,
                "goalsFor": 3,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 106,
              "team": "Stade Brestois 29",
              "rank": 4,
              "points": 5,
              "goalsDiff": 1,
              "form": "WDD",
              "all": {
                "played": 3,
                "wins": 1,
                "draws": 2,
                "losses": 0,
                "goalsFor": 6,
                "goalsAgainst": 5
              },
              "home": {
                "played": 1,
                "wins": 0,
                "draws": 1,
                "losses": 0,
                "goalsFor": 2,
                "goalsAgainst": 2
              },
              "away": {
                "played": 2,
                "wins": 1,
                "draws": 1,
                "losses": 0,
                "goalsFor": 4,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 114,
              "team": "Paris FC",
              "rank": 5,
              "points": 4,
              "goalsDiff": 3,
              "form": "WD",
              "all": {
                "played": 2,
                "wins": 1,
                "draws": 1,
                "losses": 0,
                "goalsFor": 3,
                "goalsAgainst": 0
              },
              "home": {
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 3,
                "goalsAgainst": 0
              },
              "away": {
                "played": 1,
                "wins": 0,
                "draws": 1,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 94,
              "team": "Rennes",
              "rank": 6,
              "points": 4,
              "goalsDiff": 1,
              "form": "WD",
              "all": {
                "played": 2,
                "wins": 1,
                "draws": 1,
                "losses": 0,
                "goalsFor": 5,
                "goalsAgainst": 4
              },
              "home": {
                "played": 2,
                "wins": 1,
                "draws": 1,
                "losses": 0,
                "goalsFor": 5,
                "goalsAgainst": 4
              },
              "away": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 110,
              "team": "Estac Troyes",
              "rank": 7,
              "points": 4,
              "goalsDiff": 1,
              "form": "WD",
              "all": {
                "played": 2,
                "wins": 1,
                "draws": 1,
                "losses": 0,
                "goalsFor": 2,
                "goalsAgainst": 1
              },
              "home": {
                "played": 1,
                "wins": 0,
                "draws": 1,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "away": {
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 2,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 97,
              "team": "Lorient",
              "rank": 8,
              "points": 4,
              "goalsDiff": 0,
              "form": "WLD",
              "all": {
                "played": 3,
                "wins": 1,
                "draws": 1,
                "losses": 1,
                "goalsFor": 2,
                "goalsAgainst": 2
              },
              "home": {
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 1,
                "goalsAgainst": 2
              },
              "away": {
                "played": 2,
                "wins": 1,
                "draws": 1,
                "losses": 0,
                "goalsFor": 1,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 81,
              "team": "Marseille",
              "rank": 9,
              "points": 3,
              "goalsDiff": 2,
              "form": "LW",
              "all": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 4,
                "goalsAgainst": 2
              },
              "home": {
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 4,
                "goalsAgainst": 0
              },
              "away": {
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 0,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 116,
              "team": "Lens",
              "rank": 10,
              "points": 3,
              "goalsDiff": 1,
              "form": "LLW",
              "all": {
                "played": 3,
                "wins": 1,
                "draws": 0,
                "losses": 2,
                "goalsFor": 6,
                "goalsAgainst": 5
              },
              "home": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 5,
                "goalsAgainst": 3
              },
              "away": {
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 1,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 77,
              "team": "Angers",
              "rank": 11,
              "points": 3,
              "goalsDiff": 0,
              "form": "WL",
              "all": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 3
              },
              "home": {
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 0,
                "goalsAgainst": 2
              },
              "away": {
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 3,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 95,
              "team": "Strasbourg",
              "rank": 12,
              "points": 3,
              "goalsDiff": -3,
              "form": "WL",
              "all": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 2,
                "goalsAgainst": 5
              },
              "home": {
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 2,
                "goalsAgainst": 1
              },
              "away": {
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 0,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 85,
              "team": "Paris Saint Germain",
              "rank": 13,
              "points": 2,
              "goalsDiff": -1,
              "form": "LDD",
              "all": {
                "played": 3,
                "wins": 0,
                "draws": 2,
                "losses": 1,
                "goalsFor": 5,
                "goalsAgainst": 6
              },
              "home": {
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 1,
                "goalsAgainst": 2
              },
              "away": {
                "played": 2,
                "wins": 0,
                "draws": 2,
                "losses": 0,
                "goalsFor": 4,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 1298,
              "team": "Le Mans",
              "rank": 14,
              "points": 2,
              "goalsDiff": -1,
              "form": "DLD",
              "all": {
                "played": 3,
                "wins": 0,
                "draws": 2,
                "losses": 1,
                "goalsFor": 5,
                "goalsAgainst": 6
              },
              "home": {
                "played": 1,
                "wins": 0,
                "draws": 1,
                "losses": 0,
                "goalsFor": 2,
                "goalsAgainst": 2
              },
              "away": {
                "played": 2,
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 84,
              "team": "Nice",
              "rank": 15,
              "points": 2,
              "goalsDiff": -3,
              "form": "DLD",
              "all": {
                "played": 3,
                "wins": 0,
                "draws": 2,
                "losses": 1,
                "goalsFor": 1,
                "goalsAgainst": 4
              },
              "home": {
                "played": 2,
                "wins": 0,
                "draws": 2,
                "losses": 0,
                "goalsFor": 1,
                "goalsAgainst": 1
              },
              "away": {
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 0,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 111,
              "team": "Le Havre",
              "rank": 16,
              "points": 1,
              "goalsDiff": -2,
              "form": "LDL",
              "all": {
                "played": 3,
                "wins": 0,
                "draws": 1,
                "losses": 2,
                "goalsFor": 2,
                "goalsAgainst": 4
              },
              "home": {
                "played": 2,
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 1,
                "goalsAgainst": 3
              },
              "away": {
                "played": 1,
                "wins": 0,
                "draws": 1,
                "losses": 0,
                "goalsFor": 1,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 96,
              "team": "Toulouse",
              "rank": 17,
              "points": 1,
              "goalsDiff": -3,
              "form": "LDL",
              "all": {
                "played": 3,
                "wins": 0,
                "draws": 1,
                "losses": 2,
                "goalsFor": 2,
                "goalsAgainst": 5
              },
              "home": {
                "played": 2,
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 0,
                "goalsAgainst": 3
              },
              "away": {
                "played": 1,
                "wins": 0,
                "draws": 1,
                "losses": 0,
                "goalsFor": 2,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 108,
              "team": "Auxerre",
              "rank": 18,
              "points": 0,
              "goalsDiff": -7,
              "form": "LLL",
              "all": {
                "played": 3,
                "wins": 0,
                "draws": 0,
                "losses": 3,
                "goalsFor": 4,
                "goalsAgainst": 11
              },
              "home": {
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 1,
                "goalsAgainst": 3
              },
              "away": {
                "played": 2,
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 3,
                "goalsAgainst": 8
              }
            }
          ],
          "teams": [
            {
              "teamId": 116,
              "team": "Lens",
              "form": "WLL",
              "all": {
                "played": 3,
                "wins": 1,
                "draws": 0,
                "losses": 2,
                "goalsFor": 6,
                "goalsAgainst": 5
              },
              "home": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 5,
                "goalsAgainst": 3
              },
              "away": {
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 1,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 97,
              "team": "Lorient",
              "form": "DLW",
              "all": {
                "played": 3,
                "wins": 1,
                "draws": 1,
                "losses": 1,
                "goalsFor": 2,
                "goalsAgainst": 2
              },
              "home": {
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 1,
                "goalsAgainst": 2
              },
              "away": {
                "played": 2,
                "wins": 1,
                "draws": 1,
                "losses": 0,
                "goalsFor": 1,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 84,
              "team": "Nice",
              "form": "DLD",
              "all": {
                "played": 3,
                "wins": 0,
                "draws": 2,
                "losses": 1,
                "goalsFor": 1,
                "goalsAgainst": 4
              },
              "home": {
                "played": 2,
                "wins": 0,
                "draws": 2,
                "losses": 0,
                "goalsFor": 1,
                "goalsAgainst": 1
              },
              "away": {
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 0,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 1298,
              "team": "Le Mans",
              "form": "DLD",
              "all": {
                "played": 3,
                "wins": 0,
                "draws": 2,
                "losses": 1,
                "goalsFor": 5,
                "goalsAgainst": 6
              },
              "home": {
                "played": 1,
                "wins": 0,
                "draws": 1,
                "losses": 0,
                "goalsFor": 2,
                "goalsAgainst": 2
              },
              "away": {
                "played": 2,
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 111,
              "team": "Le Havre",
              "form": "LDL",
              "all": {
                "played": 3,
                "wins": 0,
                "draws": 1,
                "losses": 2,
                "goalsFor": 2,
                "goalsAgainst": 4
              },
              "home": {
                "played": 2,
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 1,
                "goalsAgainst": 3
              },
              "away": {
                "played": 1,
                "wins": 0,
                "draws": 1,
                "losses": 0,
                "goalsFor": 1,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 106,
              "team": "Stade Brestois 29",
              "form": "DDW",
              "all": {
                "played": 3,
                "wins": 1,
                "draws": 2,
                "losses": 0,
                "goalsFor": 6,
                "goalsAgainst": 5
              },
              "home": {
                "played": 1,
                "wins": 0,
                "draws": 1,
                "losses": 0,
                "goalsFor": 2,
                "goalsAgainst": 2
              },
              "away": {
                "played": 2,
                "wins": 1,
                "draws": 1,
                "losses": 0,
                "goalsFor": 4,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 110,
              "team": "Estac Troyes",
              "form": "DW",
              "all": {
                "played": 2,
                "wins": 1,
                "draws": 1,
                "losses": 0,
                "goalsFor": 2,
                "goalsAgainst": 1
              },
              "home": {
                "played": 1,
                "wins": 0,
                "draws": 1,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "away": {
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 2,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 95,
              "team": "Strasbourg",
              "form": "LW",
              "all": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 2,
                "goalsAgainst": 5
              },
              "home": {
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 2,
                "goalsAgainst": 1
              },
              "away": {
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 0,
                "goalsAgainst": 4
              }
            }
          ],
          "fixtures": [
            {
              "fixtureId": 1552749,
              "kickoff": "2026-09-06T00:15:00+09:00",
              "status": "FT",
              "homeTeamId": 116,
              "homeTeam": "Lens",
              "awayTeamId": 97,
              "awayTeam": "Lorient",
              "injuriesChecked": true,
              "injuries": [
                {
                  "fixtureId": 1552749,
                  "teamId": 116,
                  "playerId": 44594,
                  "player": "S. Abdulhamid",
                  "type": "Missing Fixture",
                  "reason": "Contusion"
                },
                {
                  "fixtureId": 1552749,
                  "teamId": 116,
                  "playerId": 322984,
                  "player": "S. Baidoo",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1552749,
                  "teamId": 116,
                  "playerId": 237191,
                  "player": "J. Chavez",
                  "type": "Missing Fixture",
                  "reason": "Thigh Injury"
                },
                {
                  "fixtureId": 1552749,
                  "teamId": 116,
                  "playerId": 178708,
                  "player": "M. Nawrocki",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1552749,
                  "teamId": 97,
                  "playerId": 162018,
                  "player": "B. Fadiga",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                }
              ],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1552752,
              "kickoff": "2026-09-06T03:45:00+09:00",
              "status": "FT",
              "homeTeamId": 84,
              "homeTeam": "Nice",
              "awayTeamId": 1298,
              "awayTeam": "Le Mans",
              "injuriesChecked": true,
              "injuries": [
                {
                  "fixtureId": 1552752,
                  "teamId": 84,
                  "playerId": 20917,
                  "player": "L. Abergel",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1552752,
                  "teamId": 84,
                  "playerId": 407017,
                  "player": "M. Bombito",
                  "type": "Missing Fixture",
                  "reason": "Leg Injury"
                },
                {
                  "fixtureId": 1552752,
                  "teamId": 84,
                  "playerId": 1914,
                  "player": "M. Sanson",
                  "type": "Missing Fixture",
                  "reason": "Surgery"
                },
                {
                  "fixtureId": 1552752,
                  "teamId": 1298,
                  "playerId": 174939,
                  "player": "E. Colas",
                  "type": "Missing Fixture",
                  "reason": "Inactive"
                },
                {
                  "fixtureId": 1552752,
                  "teamId": 1298,
                  "playerId": 551206,
                  "player": "T. Eyoum",
                  "type": "Missing Fixture",
                  "reason": "Coach's decision"
                },
                {
                  "fixtureId": 1552752,
                  "teamId": 1298,
                  "playerId": 381116,
                  "player": "W. Harhouz",
                  "type": "Missing Fixture",
                  "reason": "Coach's decision"
                },
                {
                  "fixtureId": 1552752,
                  "teamId": 1298,
                  "playerId": 24189,
                  "player": "N. Kocik",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1552752,
                  "teamId": 1298,
                  "playerId": 24259,
                  "player": "E. Quarshie",
                  "type": "Missing Fixture",
                  "reason": "Coach's decision"
                },
                {
                  "fixtureId": 1552752,
                  "teamId": 1298,
                  "playerId": 102,
                  "player": "D. Sidibe",
                  "type": "Missing Fixture",
                  "reason": "Red Card"
                }
              ],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1552748,
              "kickoff": "2026-09-06T03:45:00+09:00",
              "status": "FT",
              "homeTeamId": 111,
              "homeTeam": "Le Havre",
              "awayTeamId": 106,
              "awayTeam": "Stade Brestois 29",
              "injuriesChecked": true,
              "injuries": [
                {
                  "fixtureId": 1552748,
                  "teamId": 111,
                  "playerId": 395808,
                  "player": "P. Argney",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1552748,
                  "teamId": 111,
                  "playerId": 961,
                  "player": "F. Mambimbi",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1552748,
                  "teamId": 111,
                  "playerId": 21103,
                  "player": "A. Toure",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1552748,
                  "teamId": 111,
                  "playerId": 513415,
                  "player": "S. Zagadou",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1552748,
                  "teamId": 106,
                  "playerId": 158587,
                  "player": "R. Cagnon",
                  "type": "Missing Fixture",
                  "reason": "Shoulder Injury"
                },
                {
                  "fixtureId": 1552748,
                  "teamId": 106,
                  "playerId": 20546,
                  "player": "B. Chardonnet",
                  "type": "Missing Fixture",
                  "reason": "Calf Injury"
                },
                {
                  "fixtureId": 1552748,
                  "teamId": 106,
                  "playerId": 302915,
                  "player": "M. Diambou",
                  "type": "Missing Fixture",
                  "reason": "Ankle Injury"
                }
              ],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1552755,
              "kickoff": "2026-09-06T22:00:00+09:00",
              "status": "NS",
              "homeTeamId": 110,
              "homeTeam": "Estac Troyes",
              "awayTeamId": 95,
              "awayTeam": "Strasbourg",
              "injuriesChecked": true,
              "injuries": [
                {
                  "fixtureId": 1552755,
                  "teamId": 110,
                  "playerId": 174596,
                  "player": "I. Boura",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1552755,
                  "teamId": 110,
                  "playerId": 859,
                  "player": "P. Gozzi",
                  "type": "Missing Fixture",
                  "reason": "Muscle Injury"
                },
                {
                  "fixtureId": 1552755,
                  "teamId": 110,
                  "playerId": 395810,
                  "player": "Y. Titi",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1552755,
                  "teamId": 95,
                  "playerId": 415431,
                  "player": "S. El Mourabet",
                  "type": "Missing Fixture",
                  "reason": "Red Card"
                },
                {
                  "fixtureId": 1552755,
                  "teamId": 95,
                  "playerId": 359386,
                  "player": "M. Godo",
                  "type": "Missing Fixture",
                  "reason": "Muscle Injury"
                },
                {
                  "fixtureId": 1552755,
                  "teamId": 95,
                  "playerId": 303016,
                  "player": "M. Oyedele",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1552755,
                  "teamId": 95,
                  "playerId": 390742,
                  "player": "J. Panichelli",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1552755,
                  "teamId": 95,
                  "playerId": 271542,
                  "player": "I. Doukoure",
                  "type": "Questionable",
                  "reason": "Injury"
                }
              ],
              "lineupsChecked": true,
              "lineups": []
            }
          ]
        },
        {
          "key": "EREDIVISIE",
          "leagueId": 88,
          "season": "2026",
          "standings": [
            {
              "teamId": 197,
              "team": "PSV Eindhoven",
              "rank": 1,
              "points": 13,
              "goalsDiff": 12,
              "form": "WWWWD",
              "all": {
                "played": 5,
                "wins": 4,
                "draws": 1,
                "losses": 0,
                "goalsFor": 18,
                "goalsAgainst": 6
              },
              "home": {
                "played": 2,
                "wins": 1,
                "draws": 1,
                "losses": 0,
                "goalsFor": 7,
                "goalsAgainst": 3
              },
              "away": {
                "played": 3,
                "wins": 3,
                "draws": 0,
                "losses": 0,
                "goalsFor": 11,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 201,
              "team": "AZ Alkmaar",
              "rank": 2,
              "points": 12,
              "goalsDiff": 10,
              "form": "WWWW",
              "all": {
                "played": 4,
                "wins": 4,
                "draws": 0,
                "losses": 0,
                "goalsFor": 13,
                "goalsAgainst": 3
              },
              "home": {
                "played": 2,
                "wins": 2,
                "draws": 0,
                "losses": 0,
                "goalsFor": 7,
                "goalsAgainst": 2
              },
              "away": {
                "played": 2,
                "wins": 2,
                "draws": 0,
                "losses": 0,
                "goalsFor": 6,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 209,
              "team": "Feyenoord",
              "rank": 3,
              "points": 11,
              "goalsDiff": 6,
              "form": "WDWDW",
              "all": {
                "played": 5,
                "wins": 3,
                "draws": 2,
                "losses": 0,
                "goalsFor": 13,
                "goalsAgainst": 7
              },
              "home": {
                "played": 2,
                "wins": 0,
                "draws": 2,
                "losses": 0,
                "goalsFor": 4,
                "goalsAgainst": 4
              },
              "away": {
                "played": 3,
                "wins": 3,
                "draws": 0,
                "losses": 0,
                "goalsFor": 9,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 196,
              "team": "Excelsior",
              "rank": 4,
              "points": 9,
              "goalsDiff": 7,
              "form": "WWLW",
              "all": {
                "played": 4,
                "wins": 3,
                "draws": 0,
                "losses": 1,
                "goalsFor": 10,
                "goalsAgainst": 3
              },
              "home": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 3
              },
              "away": {
                "played": 2,
                "wins": 2,
                "draws": 0,
                "losses": 0,
                "goalsFor": 7,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 194,
              "team": "Ajax",
              "rank": 5,
              "points": 7,
              "goalsDiff": 4,
              "form": "LWDW",
              "all": {
                "played": 4,
                "wins": 2,
                "draws": 1,
                "losses": 1,
                "goalsFor": 9,
                "goalsAgainst": 5
              },
              "home": {
                "played": 2,
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 5
              },
              "away": {
                "played": 2,
                "wins": 2,
                "draws": 0,
                "losses": 0,
                "goalsFor": 6,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 410,
              "team": "GO Ahead Eagles",
              "rank": 6,
              "points": 7,
              "goalsDiff": 2,
              "form": "LWDW",
              "all": {
                "played": 4,
                "wins": 2,
                "draws": 1,
                "losses": 1,
                "goalsFor": 11,
                "goalsAgainst": 9
              },
              "home": {
                "played": 2,
                "wins": 2,
                "draws": 0,
                "losses": 0,
                "goalsFor": 7,
                "goalsAgainst": 2
              },
              "away": {
                "played": 2,
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 4,
                "goalsAgainst": 7
              }
            },
            {
              "teamId": 205,
              "team": "Fortuna Sittard",
              "rank": 7,
              "points": 7,
              "goalsDiff": 1,
              "form": "WLWD",
              "all": {
                "played": 4,
                "wins": 2,
                "draws": 1,
                "losses": 1,
                "goalsFor": 8,
                "goalsAgainst": 7
              },
              "home": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 3
              },
              "away": {
                "played": 2,
                "wins": 1,
                "draws": 1,
                "losses": 0,
                "goalsFor": 5,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 415,
              "team": "Twente",
              "rank": 8,
              "points": 6,
              "goalsDiff": 4,
              "form": "WWL",
              "all": {
                "played": 3,
                "wins": 2,
                "draws": 0,
                "losses": 1,
                "goalsFor": 7,
                "goalsAgainst": 3
              },
              "home": {
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 3,
                "goalsAgainst": 1
              },
              "away": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 4,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 413,
              "team": "NEC Nijmegen",
              "rank": 9,
              "points": 6,
              "goalsDiff": 2,
              "form": "LWWL",
              "all": {
                "played": 4,
                "wins": 2,
                "draws": 0,
                "losses": 2,
                "goalsFor": 9,
                "goalsAgainst": 7
              },
              "home": {
                "played": 2,
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 2,
                "goalsAgainst": 5
              },
              "away": {
                "played": 2,
                "wins": 2,
                "draws": 0,
                "losses": 0,
                "goalsFor": 7,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 202,
              "team": "Groningen",
              "rank": 10,
              "points": 6,
              "goalsDiff": -1,
              "form": "LLWW",
              "all": {
                "played": 4,
                "wins": 2,
                "draws": 0,
                "losses": 2,
                "goalsFor": 9,
                "goalsAgainst": 10
              },
              "home": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 4,
                "goalsAgainst": 4
              },
              "away": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 5,
                "goalsAgainst": 6
              }
            },
            {
              "teamId": 210,
              "team": "Heerenveen",
              "rank": 11,
              "points": 5,
              "goalsDiff": -1,
              "form": "DLDW",
              "all": {
                "played": 4,
                "wins": 1,
                "draws": 2,
                "losses": 1,
                "goalsFor": 5,
                "goalsAgainst": 6
              },
              "home": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 1,
                "goalsAgainst": 2
              },
              "away": {
                "played": 2,
                "wins": 0,
                "draws": 2,
                "losses": 0,
                "goalsFor": 4,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 426,
              "team": "Sparta Rotterdam",
              "rank": 12,
              "points": 5,
              "goalsDiff": 0,
              "form": "DLDWL",
              "all": {
                "played": 5,
                "wins": 1,
                "draws": 2,
                "losses": 2,
                "goalsFor": 9,
                "goalsAgainst": 9
              },
              "home": {
                "played": 3,
                "wins": 0,
                "draws": 2,
                "losses": 1,
                "goalsFor": 5,
                "goalsAgainst": 6
              },
              "away": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 4,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 193,
              "team": "PEC Zwolle",
              "rank": 13,
              "points": 4,
              "goalsDiff": -4,
              "form": "DLWLL",
              "all": {
                "played": 5,
                "wins": 1,
                "draws": 1,
                "losses": 3,
                "goalsFor": 6,
                "goalsAgainst": 10
              },
              "home": {
                "played": 2,
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 1,
                "goalsAgainst": 5
              },
              "away": {
                "played": 3,
                "wins": 1,
                "draws": 1,
                "losses": 1,
                "goalsFor": 5,
                "goalsAgainst": 5
              }
            },
            {
              "teamId": 427,
              "team": "Telstar",
              "rank": 14,
              "points": 3,
              "goalsDiff": -5,
              "form": "LLW",
              "all": {
                "played": 3,
                "wins": 1,
                "draws": 0,
                "losses": 2,
                "goalsFor": 3,
                "goalsAgainst": 8
              },
              "home": {
                "played": 2,
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 1,
                "goalsAgainst": 7
              },
              "away": {
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 2,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 198,
              "team": "ADO Den Haag",
              "rank": 15,
              "points": 1,
              "goalsDiff": -7,
              "form": "DLLL",
              "all": {
                "played": 4,
                "wins": 0,
                "draws": 1,
                "losses": 3,
                "goalsFor": 4,
                "goalsAgainst": 11
              },
              "home": {
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 1,
                "goalsAgainst": 4
              },
              "away": {
                "played": 3,
                "wins": 0,
                "draws": 1,
                "losses": 2,
                "goalsFor": 3,
                "goalsAgainst": 7
              }
            },
            {
              "teamId": 207,
              "team": "Utrecht",
              "rank": 16,
              "points": 1,
              "goalsDiff": -9,
              "form": "LDLL",
              "all": {
                "played": 4,
                "wins": 0,
                "draws": 1,
                "losses": 3,
                "goalsFor": 6,
                "goalsAgainst": 15
              },
              "home": {
                "played": 2,
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 2,
                "goalsAgainst": 10
              },
              "away": {
                "played": 2,
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 4,
                "goalsAgainst": 5
              }
            },
            {
              "teamId": 195,
              "team": "Willem II",
              "rank": 17,
              "points": 1,
              "goalsDiff": -9,
              "form": "LDLL",
              "all": {
                "played": 4,
                "wins": 0,
                "draws": 1,
                "losses": 3,
                "goalsFor": 4,
                "goalsAgainst": 13
              },
              "home": {
                "played": 3,
                "wins": 0,
                "draws": 1,
                "losses": 2,
                "goalsFor": 3,
                "goalsAgainst": 9
              },
              "away": {
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 1,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 420,
              "team": "Cambuur",
              "rank": 18,
              "points": 0,
              "goalsDiff": -12,
              "form": "LLLL",
              "all": {
                "played": 4,
                "wins": 0,
                "draws": 0,
                "losses": 4,
                "goalsFor": 4,
                "goalsAgainst": 16
              },
              "home": {
                "played": 3,
                "wins": 0,
                "draws": 0,
                "losses": 3,
                "goalsFor": 3,
                "goalsAgainst": 13
              },
              "away": {
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 1,
                "goalsAgainst": 3
              }
            }
          ],
          "teams": [
            {
              "teamId": 194,
              "team": "Ajax",
              "form": "WDWL",
              "all": {
                "played": 4,
                "wins": 2,
                "draws": 1,
                "losses": 1,
                "goalsFor": 9,
                "goalsAgainst": 5
              },
              "home": {
                "played": 2,
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 5
              },
              "away": {
                "played": 2,
                "wins": 2,
                "draws": 0,
                "losses": 0,
                "goalsFor": 6,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 197,
              "team": "PSV Eindhoven",
              "form": "DWWWW",
              "all": {
                "played": 5,
                "wins": 4,
                "draws": 1,
                "losses": 0,
                "goalsFor": 18,
                "goalsAgainst": 6
              },
              "home": {
                "played": 2,
                "wins": 1,
                "draws": 1,
                "losses": 0,
                "goalsFor": 7,
                "goalsAgainst": 3
              },
              "away": {
                "played": 3,
                "wins": 3,
                "draws": 0,
                "losses": 0,
                "goalsFor": 11,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 195,
              "team": "Willem II",
              "form": "LLDL",
              "all": {
                "played": 4,
                "wins": 0,
                "draws": 1,
                "losses": 3,
                "goalsFor": 4,
                "goalsAgainst": 13
              },
              "home": {
                "played": 3,
                "wins": 0,
                "draws": 1,
                "losses": 2,
                "goalsFor": 3,
                "goalsAgainst": 9
              },
              "away": {
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 1,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 196,
              "team": "Excelsior",
              "form": "WLWW",
              "all": {
                "played": 4,
                "wins": 3,
                "draws": 0,
                "losses": 1,
                "goalsFor": 10,
                "goalsAgainst": 3
              },
              "home": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 3
              },
              "away": {
                "played": 2,
                "wins": 2,
                "draws": 0,
                "losses": 0,
                "goalsFor": 7,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 202,
              "team": "Groningen",
              "form": "WWLLD",
              "all": {
                "played": 5,
                "wins": 2,
                "draws": 1,
                "losses": 2,
                "goalsFor": 11,
                "goalsAgainst": 12
              },
              "home": {
                "played": 3,
                "wins": 1,
                "draws": 1,
                "losses": 1,
                "goalsFor": 6,
                "goalsAgainst": 6
              },
              "away": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 5,
                "goalsAgainst": 6
              }
            },
            {
              "teamId": 415,
              "team": "Twente",
              "form": "LWW",
              "all": {
                "played": 3,
                "wins": 2,
                "draws": 0,
                "losses": 1,
                "goalsFor": 7,
                "goalsAgainst": 3
              },
              "home": {
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 3,
                "goalsAgainst": 1
              },
              "away": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 4,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 207,
              "team": "Utrecht",
              "form": "LLDL",
              "all": {
                "played": 4,
                "wins": 0,
                "draws": 1,
                "losses": 3,
                "goalsFor": 6,
                "goalsAgainst": 15
              },
              "home": {
                "played": 2,
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 2,
                "goalsAgainst": 10
              },
              "away": {
                "played": 2,
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 4,
                "goalsAgainst": 5
              }
            },
            {
              "teamId": 410,
              "team": "GO Ahead Eagles",
              "form": "WDWL",
              "all": {
                "played": 4,
                "wins": 2,
                "draws": 1,
                "losses": 1,
                "goalsFor": 11,
                "goalsAgainst": 9
              },
              "home": {
                "played": 2,
                "wins": 2,
                "draws": 0,
                "losses": 0,
                "goalsFor": 7,
                "goalsAgainst": 2
              },
              "away": {
                "played": 2,
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 4,
                "goalsAgainst": 7
              }
            },
            {
              "teamId": 210,
              "team": "Heerenveen",
              "form": "WDLD",
              "all": {
                "played": 4,
                "wins": 1,
                "draws": 2,
                "losses": 1,
                "goalsFor": 5,
                "goalsAgainst": 6
              },
              "home": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 1,
                "goalsAgainst": 2
              },
              "away": {
                "played": 2,
                "wins": 0,
                "draws": 2,
                "losses": 0,
                "goalsFor": 4,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 201,
              "team": "AZ Alkmaar",
              "form": "WWWW",
              "all": {
                "played": 4,
                "wins": 4,
                "draws": 0,
                "losses": 0,
                "goalsFor": 13,
                "goalsAgainst": 3
              },
              "home": {
                "played": 2,
                "wins": 2,
                "draws": 0,
                "losses": 0,
                "goalsFor": 7,
                "goalsAgainst": 2
              },
              "away": {
                "played": 2,
                "wins": 2,
                "draws": 0,
                "losses": 0,
                "goalsFor": 6,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 427,
              "team": "Telstar",
              "form": "WLL",
              "all": {
                "played": 3,
                "wins": 1,
                "draws": 0,
                "losses": 2,
                "goalsFor": 3,
                "goalsAgainst": 8
              },
              "home": {
                "played": 2,
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 1,
                "goalsAgainst": 7
              },
              "away": {
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 2,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 420,
              "team": "Cambuur",
              "form": "LLLL",
              "all": {
                "played": 4,
                "wins": 0,
                "draws": 0,
                "losses": 4,
                "goalsFor": 4,
                "goalsAgainst": 16
              },
              "home": {
                "played": 3,
                "wins": 0,
                "draws": 0,
                "losses": 3,
                "goalsFor": 3,
                "goalsAgainst": 13
              },
              "away": {
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 1,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 198,
              "team": "ADO Den Haag",
              "form": "LLLD",
              "all": {
                "played": 4,
                "wins": 0,
                "draws": 1,
                "losses": 3,
                "goalsFor": 4,
                "goalsAgainst": 11
              },
              "home": {
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 1,
                "goalsAgainst": 4
              },
              "away": {
                "played": 3,
                "wins": 0,
                "draws": 1,
                "losses": 2,
                "goalsFor": 3,
                "goalsAgainst": 7
              }
            },
            {
              "teamId": 205,
              "team": "Fortuna Sittard",
              "form": "DWLW",
              "all": {
                "played": 4,
                "wins": 2,
                "draws": 1,
                "losses": 1,
                "goalsFor": 8,
                "goalsAgainst": 7
              },
              "home": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 3
              },
              "away": {
                "played": 2,
                "wins": 1,
                "draws": 1,
                "losses": 0,
                "goalsFor": 5,
                "goalsAgainst": 4
              }
            }
          ],
          "fixtures": [
            {
              "fixtureId": 1552156,
              "kickoff": "2026-09-06T03:00:00+09:00",
              "status": "FT",
              "homeTeamId": 194,
              "homeTeam": "Ajax",
              "awayTeamId": 197,
              "awayTeam": "PSV Eindhoven",
              "injuriesChecked": true,
              "injuries": [
                {
                  "fixtureId": 1552156,
                  "teamId": 194,
                  "playerId": 301771,
                  "player": "S. Adingra",
                  "type": "Missing Fixture",
                  "reason": "Foot Injury"
                },
                {
                  "fixtureId": 1552156,
                  "teamId": 194,
                  "playerId": 531,
                  "player": "D. Blind",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1552156,
                  "teamId": 194,
                  "playerId": 396202,
                  "player": "R. Bounida",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1552156,
                  "teamId": 197,
                  "playerId": 508061,
                  "player": "M. Bro Hansen",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1552156,
                  "teamId": 197,
                  "playerId": 43036,
                  "player": "D. Man",
                  "type": "Missing Fixture",
                  "reason": "Inactive"
                },
                {
                  "fixtureId": 1552156,
                  "teamId": 197,
                  "playerId": 378864,
                  "player": "S. Ouaissa",
                  "type": "Missing Fixture",
                  "reason": "Muscle Injury"
                },
                {
                  "fixtureId": 1552156,
                  "teamId": 197,
                  "playerId": 25646,
                  "player": "A. Plea",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1552156,
                  "teamId": 197,
                  "playerId": 37890,
                  "player": "J. Schouten",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1552156,
                  "teamId": 197,
                  "playerId": 191233,
                  "player": "K. Sildillia",
                  "type": "Missing Fixture",
                  "reason": "Inactive"
                }
              ],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1552157,
              "kickoff": "2026-09-06T04:00:00+09:00",
              "status": "FT",
              "homeTeamId": 195,
              "homeTeam": "Willem II",
              "awayTeamId": 196,
              "awayTeam": "Excelsior",
              "injuriesChecked": true,
              "injuries": [
                {
                  "fixtureId": 1552157,
                  "teamId": 195,
                  "playerId": 444433,
                  "player": "L. Abildgaard",
                  "type": "Missing Fixture",
                  "reason": "Inactive"
                },
                {
                  "fixtureId": 1552157,
                  "teamId": 195,
                  "playerId": 411824,
                  "player": "A. Culum",
                  "type": "Missing Fixture",
                  "reason": "Foot Injury"
                },
                {
                  "fixtureId": 1552157,
                  "teamId": 195,
                  "playerId": 1405,
                  "player": "T. Didillon Hodl",
                  "type": "Missing Fixture",
                  "reason": "Hamstring Injury"
                },
                {
                  "fixtureId": 1552157,
                  "teamId": 195,
                  "playerId": 393871,
                  "player": "A. Lachkar",
                  "type": "Missing Fixture",
                  "reason": "Groin Injury"
                },
                {
                  "fixtureId": 1552157,
                  "teamId": 195,
                  "playerId": 37712,
                  "player": "J. Schuurman",
                  "type": "Missing Fixture",
                  "reason": "Knock"
                },
                {
                  "fixtureId": 1552157,
                  "teamId": 195,
                  "playerId": 480309,
                  "player": "A. Zarrouk",
                  "type": "Missing Fixture",
                  "reason": "Surgery"
                },
                {
                  "fixtureId": 1552157,
                  "teamId": 196,
                  "playerId": 321632,
                  "player": "N. Naujoks",
                  "type": "Missing Fixture",
                  "reason": "Inactive"
                }
              ],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1552158,
              "kickoff": "2026-09-06T19:15:00+09:00",
              "status": "FT",
              "homeTeamId": 202,
              "homeTeam": "Groningen",
              "awayTeamId": 415,
              "awayTeam": "Twente",
              "injuriesChecked": true,
              "injuries": [
                {
                  "fixtureId": 1552158,
                  "teamId": 202,
                  "playerId": 414188,
                  "player": "M. Jeng",
                  "type": "Missing Fixture",
                  "reason": "Leg Injury"
                },
                {
                  "fixtureId": 1552158,
                  "teamId": 202,
                  "playerId": 446871,
                  "player": "T. Mercera",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1552158,
                  "teamId": 202,
                  "playerId": 631615,
                  "player": "R. Metu",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1552158,
                  "teamId": 202,
                  "playerId": 90957,
                  "player": "M. Rente",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1552158,
                  "teamId": 415,
                  "playerId": 191879,
                  "player": "K. Hlynsson",
                  "type": "Missing Fixture",
                  "reason": "Inactive"
                },
                {
                  "fixtureId": 1552158,
                  "teamId": 415,
                  "playerId": 292553,
                  "player": "S. Lemkin",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                }
              ],
              "lineupsChecked": true,
              "lineups": [
                {
                  "teamId": 202,
                  "team": "Groningen",
                  "formation": "4-2-3-1",
                  "coach": "D. Lukkien",
                  "starters": [
                    "E. Vaessen",
                    "J. Schreuders",
                    "M. Csinger",
                    "T. Blokzijl",
                    "Wouter Prins",
                    "T. de Jonge",
                    "T. Land",
                    "D. van der Werff",
                    "T. van Bergen",
                    "P. Clement",
                    "B. Willumsson"
                  ]
                },
                {
                  "teamId": 415,
                  "team": "Twente",
                  "formation": "4-2-3-1",
                  "coach": "J. van den Brom",
                  "starters": [
                    "L. Unnerstall",
                    "B. van Rooij",
                    "M. Bruns",
                    "R. Pröpper",
                    "R. Nijstad",
                    "R. Zerrouki",
                    "D. Weidmann",
                    "S. Ørjasæter",
                    "Y. Taha",
                    "M. Pjaca",
                    "W. Weghorst"
                  ]
                }
              ]
            },
            {
              "fixtureId": 1552155,
              "kickoff": "2026-09-06T01:45:00+09:00",
              "status": "INT",
              "homeTeamId": 207,
              "homeTeam": "Utrecht",
              "awayTeamId": 410,
              "awayTeam": "GO Ahead Eagles",
              "injuriesChecked": true,
              "injuries": [
                {
                  "fixtureId": 1552155,
                  "teamId": 207,
                  "playerId": 336678,
                  "player": "O. Agougil",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1552155,
                  "teamId": 207,
                  "playerId": 321746,
                  "player": "A. Engwanda",
                  "type": "Missing Fixture",
                  "reason": "Hamstring Injury"
                },
                {
                  "fixtureId": 1552155,
                  "teamId": 207,
                  "playerId": 38752,
                  "player": "V. Jensen",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1552155,
                  "teamId": 207,
                  "playerId": 364809,
                  "player": "M. Jonathans",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1552155,
                  "teamId": 207,
                  "playerId": 280317,
                  "player": "N. Ohio",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1552155,
                  "teamId": 207,
                  "playerId": 149557,
                  "player": "K. Paredes",
                  "type": "Missing Fixture",
                  "reason": "Inactive"
                },
                {
                  "fixtureId": 1552155,
                  "teamId": 207,
                  "playerId": 47814,
                  "player": "N. Vesterlund",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1552155,
                  "teamId": 207,
                  "playerId": 494134,
                  "player": "J. van Ommeren",
                  "type": "Missing Fixture",
                  "reason": "Back Injury"
                },
                {
                  "fixtureId": 1552155,
                  "teamId": 207,
                  "playerId": 318416,
                  "player": "M. Broholm",
                  "type": "Questionable",
                  "reason": "Inactive"
                },
                {
                  "fixtureId": 1552155,
                  "teamId": 207,
                  "playerId": 37183,
                  "player": "J. van Overeem",
                  "type": "Questionable",
                  "reason": "Inactive"
                },
                {
                  "fixtureId": 1552155,
                  "teamId": 410,
                  "playerId": 25260,
                  "player": "G. Nauber",
                  "type": "Missing Fixture",
                  "reason": "Broken Leg"
                },
                {
                  "fixtureId": 1552155,
                  "teamId": 410,
                  "playerId": 378962,
                  "player": "P. Saathof",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1552155,
                  "teamId": 410,
                  "playerId": 378963,
                  "player": "R. Weijenberg",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1552155,
                  "teamId": 410,
                  "playerId": 312903,
                  "player": "G. van Zwam",
                  "type": "Questionable",
                  "reason": "Inactive"
                }
              ],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1552159,
              "kickoff": "2026-09-06T21:30:00+09:00",
              "status": "NS",
              "homeTeamId": 210,
              "homeTeam": "Heerenveen",
              "awayTeamId": 201,
              "awayTeam": "AZ Alkmaar",
              "injuriesChecked": true,
              "injuries": [
                {
                  "fixtureId": 1552159,
                  "teamId": 210,
                  "playerId": 431651,
                  "player": "M. Egbring",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1552159,
                  "teamId": 210,
                  "playerId": 272723,
                  "player": "M. Hilgers",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1552159,
                  "teamId": 210,
                  "playerId": 310037,
                  "player": "M. Linday",
                  "type": "Missing Fixture",
                  "reason": "Inactive"
                },
                {
                  "fixtureId": 1552159,
                  "teamId": 201,
                  "playerId": 179839,
                  "player": "D. Kasius",
                  "type": "Missing Fixture",
                  "reason": "Groin Injury"
                },
                {
                  "fixtureId": 1552159,
                  "teamId": 201,
                  "playerId": 291505,
                  "player": "S. Resink",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                }
              ],
              "lineupsChecked": true,
              "lineups": [
                {
                  "teamId": 210,
                  "team": "Heerenveen",
                  "formation": "4-2-3-1",
                  "coach": "R. Veldeman",
                  "starters": [
                    "B. Klaverboer",
                    "O. Braude",
                    "S. Kersten",
                    "M. Willemsen",
                    "V. Zagaritis",
                    "N. Courtens",
                    "D. Proper",
                    "J. Trenskow",
                    "R. Meerveld",
                    "M. Rivera",
                    "D. Vente"
                  ]
                },
                {
                  "teamId": 201,
                  "team": "AZ Alkmaar",
                  "formation": "4-2-3-1",
                  "coach": "L. Echteld",
                  "starters": [
                    "J. De Busser",
                    "E. Dijkstra",
                    "W. Goes",
                    "L. Schouten",
                    "M. Chávez",
                    "J. Clasie",
                    "P. Koopmeiners",
                    "Weslley Patati",
                    "D. Kwakman",
                    "R. Daal",
                    "M. Meerdink"
                  ]
                }
              ]
            },
            {
              "fixtureId": 1552160,
              "kickoff": "2026-09-06T21:30:00+09:00",
              "status": "NS",
              "homeTeamId": 427,
              "homeTeam": "Telstar",
              "awayTeamId": 420,
              "awayTeam": "Cambuur",
              "injuriesChecked": true,
              "injuries": [
                {
                  "fixtureId": 1552160,
                  "teamId": 427,
                  "playerId": 93060,
                  "player": "M. Peersman",
                  "type": "Questionable",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1552160,
                  "teamId": 420,
                  "playerId": 383068,
                  "player": "W. Asselman",
                  "type": "Missing Fixture",
                  "reason": "Inactive"
                },
                {
                  "fixtureId": 1552160,
                  "teamId": 420,
                  "playerId": 516834,
                  "player": "D. Visser",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1552160,
                  "teamId": 420,
                  "playerId": 272691,
                  "player": "J. Berkhout",
                  "type": "Questionable",
                  "reason": "Injury"
                }
              ],
              "lineupsChecked": true,
              "lineups": [
                {
                  "teamId": 427,
                  "team": "Telstar",
                  "formation": "3-4-2-1",
                  "coach": "H. Brugge",
                  "starters": [
                    "R. Koeman",
                    "S. Valk",
                    "A. Soualhia",
                    "M. Peersman",
                    "Gerald Alders",
                    "N. Rossen",
                    "T. Owusu",
                    "J. Hardeveld",
                    "Rui Mendes",
                    "P. Brouwer",
                    "N. Þórisson"
                  ]
                },
                {
                  "teamId": 420,
                  "team": "Cambuur",
                  "formation": "3-4-2-1",
                  "coach": "J. Plat",
                  "starters": [
                    "T. Jansen",
                    "J. Amofa",
                    "I. Baouf",
                    "B. van Duijl",
                    "D. Bouah",
                    "N. Souren",
                    "R. El Arguioui",
                    "M. Costarelli",
                    "I. Hamache",
                    "F. Kvam",
                    "N. Binder"
                  ]
                }
              ]
            },
            {
              "fixtureId": 1552161,
              "kickoff": "2026-09-06T23:45:00+09:00",
              "status": "NS",
              "homeTeamId": 198,
              "homeTeam": "ADO Den Haag",
              "awayTeamId": 205,
              "awayTeam": "Fortuna Sittard",
              "injuriesChecked": true,
              "injuries": [
                {
                  "fixtureId": 1552161,
                  "teamId": 198,
                  "playerId": 28378,
                  "player": "D. Barany",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1552161,
                  "teamId": 198,
                  "playerId": 216809,
                  "player": "C. Peupion",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1552161,
                  "teamId": 205,
                  "playerId": 467814,
                  "player": "R. Bayram",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1552161,
                  "teamId": 205,
                  "playerId": 37273,
                  "player": "K. Peterson",
                  "type": "Missing Fixture",
                  "reason": "Inactive"
                },
                {
                  "fixtureId": 1552161,
                  "teamId": 205,
                  "playerId": 357051,
                  "player": "S. Simons",
                  "type": "Missing Fixture",
                  "reason": "Hamstring Injury"
                },
                {
                  "fixtureId": 1552161,
                  "teamId": 205,
                  "playerId": 339169,
                  "player": "S. Wylin",
                  "type": "Missing Fixture",
                  "reason": "Inactive"
                },
                {
                  "fixtureId": 1552161,
                  "teamId": 205,
                  "playerId": 40201,
                  "player": "I. Marquez",
                  "type": "Questionable",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1552161,
                  "teamId": 205,
                  "playerId": 37383,
                  "player": "O. Romeny",
                  "type": "Questionable",
                  "reason": "Inactive"
                }
              ],
              "lineupsChecked": true,
              "lineups": []
            }
          ]
        },
        {
          "key": "PRIMEIRA_LIGA",
          "leagueId": 94,
          "season": "2026",
          "standings": [
            {
              "teamId": 212,
              "team": "FC Porto",
              "rank": 1,
              "points": 15,
              "goalsDiff": 10,
              "form": "WWWWW",
              "all": {
                "played": 5,
                "wins": 5,
                "draws": 0,
                "losses": 0,
                "goalsFor": 11,
                "goalsAgainst": 1
              },
              "home": {
                "played": 3,
                "wins": 3,
                "draws": 0,
                "losses": 0,
                "goalsFor": 6,
                "goalsAgainst": 1
              },
              "away": {
                "played": 2,
                "wins": 2,
                "draws": 0,
                "losses": 0,
                "goalsFor": 5,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 228,
              "team": "Sporting CP",
              "rank": 2,
              "points": 13,
              "goalsDiff": 9,
              "form": "WWWWD",
              "all": {
                "played": 5,
                "wins": 4,
                "draws": 1,
                "losses": 0,
                "goalsFor": 14,
                "goalsAgainst": 5
              },
              "home": {
                "played": 3,
                "wins": 3,
                "draws": 0,
                "losses": 0,
                "goalsFor": 8,
                "goalsAgainst": 3
              },
              "away": {
                "played": 2,
                "wins": 1,
                "draws": 1,
                "losses": 0,
                "goalsFor": 6,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 211,
              "team": "Benfica",
              "rank": 3,
              "points": 10,
              "goalsDiff": 11,
              "form": "WWWD",
              "all": {
                "played": 4,
                "wins": 3,
                "draws": 1,
                "losses": 0,
                "goalsFor": 14,
                "goalsAgainst": 3
              },
              "home": {
                "played": 2,
                "wins": 1,
                "draws": 1,
                "losses": 0,
                "goalsFor": 4,
                "goalsAgainst": 3
              },
              "away": {
                "played": 2,
                "wins": 2,
                "draws": 0,
                "losses": 0,
                "goalsFor": 10,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 240,
              "team": "Arouca",
              "rank": 4,
              "points": 9,
              "goalsDiff": 4,
              "form": "WLWW",
              "all": {
                "played": 4,
                "wins": 3,
                "draws": 0,
                "losses": 1,
                "goalsFor": 7,
                "goalsAgainst": 3
              },
              "home": {
                "played": 2,
                "wins": 2,
                "draws": 0,
                "losses": 0,
                "goalsFor": 6,
                "goalsAgainst": 1
              },
              "away": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 1,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 227,
              "team": "Santa Clara",
              "rank": 5,
              "points": 8,
              "goalsDiff": 2,
              "form": "DWWD",
              "all": {
                "played": 4,
                "wins": 2,
                "draws": 2,
                "losses": 0,
                "goalsFor": 5,
                "goalsAgainst": 3
              },
              "home": {
                "played": 2,
                "wins": 1,
                "draws": 1,
                "losses": 0,
                "goalsFor": 3,
                "goalsAgainst": 2
              },
              "away": {
                "played": 2,
                "wins": 1,
                "draws": 1,
                "losses": 0,
                "goalsFor": 2,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 762,
              "team": "GIL Vicente",
              "rank": 6,
              "points": 7,
              "goalsDiff": 3,
              "form": "DWW",
              "all": {
                "played": 3,
                "wins": 2,
                "draws": 1,
                "losses": 0,
                "goalsFor": 3,
                "goalsAgainst": 0
              },
              "home": {
                "played": 2,
                "wins": 2,
                "draws": 0,
                "losses": 0,
                "goalsFor": 3,
                "goalsAgainst": 0
              },
              "away": {
                "played": 1,
                "wins": 0,
                "draws": 1,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 217,
              "team": "SC Braga",
              "rank": 7,
              "points": 7,
              "goalsDiff": 2,
              "form": "WWD",
              "all": {
                "played": 3,
                "wins": 2,
                "draws": 1,
                "losses": 0,
                "goalsFor": 5,
                "goalsAgainst": 3
              },
              "home": {
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 1,
                "goalsAgainst": 0
              },
              "away": {
                "played": 2,
                "wins": 1,
                "draws": 1,
                "losses": 0,
                "goalsFor": 4,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 214,
              "team": "Maritimo",
              "rank": 8,
              "points": 7,
              "goalsDiff": -2,
              "form": "LLDWW",
              "all": {
                "played": 5,
                "wins": 2,
                "draws": 1,
                "losses": 2,
                "goalsFor": 6,
                "goalsAgainst": 8
              },
              "home": {
                "played": 3,
                "wins": 1,
                "draws": 1,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 5
              },
              "away": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 15130,
              "team": "Estrela",
              "rank": 9,
              "points": 6,
              "goalsDiff": 1,
              "form": "DWDD",
              "all": {
                "played": 4,
                "wins": 1,
                "draws": 3,
                "losses": 0,
                "goalsFor": 9,
                "goalsAgainst": 8
              },
              "home": {
                "played": 2,
                "wins": 0,
                "draws": 2,
                "losses": 0,
                "goalsFor": 4,
                "goalsAgainst": 4
              },
              "away": {
                "played": 2,
                "wins": 1,
                "draws": 1,
                "losses": 0,
                "goalsFor": 5,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 225,
              "team": "Nacional",
              "rank": 10,
              "points": 4,
              "goalsDiff": -2,
              "form": "LLLWD",
              "all": {
                "played": 5,
                "wins": 1,
                "draws": 1,
                "losses": 3,
                "goalsFor": 6,
                "goalsAgainst": 8
              },
              "home": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 4,
                "goalsAgainst": 3
              },
              "away": {
                "played": 3,
                "wins": 0,
                "draws": 1,
                "losses": 2,
                "goalsFor": 2,
                "goalsAgainst": 5
              }
            },
            {
              "teamId": 215,
              "team": "Moreirense",
              "rank": 11,
              "points": 4,
              "goalsDiff": -4,
              "form": "LWLD",
              "all": {
                "played": 4,
                "wins": 1,
                "draws": 1,
                "losses": 2,
                "goalsFor": 4,
                "goalsAgainst": 8
              },
              "home": {
                "played": 1,
                "wins": 0,
                "draws": 1,
                "losses": 0,
                "goalsFor": 2,
                "goalsAgainst": 2
              },
              "away": {
                "played": 3,
                "wins": 1,
                "draws": 0,
                "losses": 2,
                "goalsFor": 2,
                "goalsAgainst": 6
              }
            },
            {
              "teamId": 224,
              "team": "Vitória SC",
              "rank": 12,
              "points": 3,
              "goalsDiff": -2,
              "form": "LWLL",
              "all": {
                "played": 4,
                "wins": 1,
                "draws": 0,
                "losses": 3,
                "goalsFor": 3,
                "goalsAgainst": 5
              },
              "home": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 1,
                "goalsAgainst": 1
              },
              "away": {
                "played": 2,
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 2,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 242,
              "team": "Famalicao",
              "rank": 13,
              "points": 3,
              "goalsDiff": -2,
              "form": "DDLLD",
              "all": {
                "played": 5,
                "wins": 0,
                "draws": 3,
                "losses": 2,
                "goalsFor": 4,
                "goalsAgainst": 6
              },
              "home": {
                "played": 2,
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 1,
                "goalsAgainst": 2
              },
              "away": {
                "played": 3,
                "wins": 0,
                "draws": 2,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 226,
              "team": "Rio Ave",
              "rank": 14,
              "points": 3,
              "goalsDiff": -5,
              "form": "LWLL",
              "all": {
                "played": 4,
                "wins": 1,
                "draws": 0,
                "losses": 3,
                "goalsFor": 2,
                "goalsAgainst": 7
              },
              "home": {
                "played": 2,
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 0,
                "goalsAgainst": 6
              },
              "away": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 2,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 238,
              "team": "Academico Viseu",
              "rank": 15,
              "points": 2,
              "goalsDiff": -4,
              "form": "LDLD",
              "all": {
                "played": 4,
                "wins": 0,
                "draws": 2,
                "losses": 2,
                "goalsFor": 4,
                "goalsAgainst": 8
              },
              "home": {
                "played": 2,
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 0,
                "goalsAgainst": 4
              },
              "away": {
                "played": 2,
                "wins": 0,
                "draws": 2,
                "losses": 0,
                "goalsFor": 4,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 4724,
              "team": "Alverca",
              "rank": 16,
              "points": 2,
              "goalsDiff": -5,
              "form": "LDLDL",
              "all": {
                "played": 5,
                "wins": 0,
                "draws": 2,
                "losses": 3,
                "goalsFor": 5,
                "goalsAgainst": 10
              },
              "home": {
                "played": 3,
                "wins": 0,
                "draws": 2,
                "losses": 1,
                "goalsFor": 4,
                "goalsAgainst": 5
              },
              "away": {
                "played": 2,
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 1,
                "goalsAgainst": 5
              }
            },
            {
              "teamId": 230,
              "team": "Estoril",
              "rank": 17,
              "points": 1,
              "goalsDiff": -5,
              "form": "LLLD",
              "all": {
                "played": 4,
                "wins": 0,
                "draws": 1,
                "losses": 3,
                "goalsFor": 2,
                "goalsAgainst": 7
              },
              "home": {
                "played": 2,
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 1,
                "goalsAgainst": 3
              },
              "away": {
                "played": 2,
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 1,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 4716,
              "team": "Casa Pia",
              "rank": 18,
              "points": 0,
              "goalsDiff": -11,
              "form": "LLLL",
              "all": {
                "played": 4,
                "wins": 0,
                "draws": 0,
                "losses": 4,
                "goalsFor": 0,
                "goalsAgainst": 11
              },
              "home": {
                "played": 2,
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 0,
                "goalsAgainst": 8
              },
              "away": {
                "played": 2,
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 0,
                "goalsAgainst": 3
              }
            }
          ],
          "teams": [
            {
              "teamId": 214,
              "team": "Maritimo",
              "form": "WWDLL",
              "all": {
                "played": 5,
                "wins": 2,
                "draws": 1,
                "losses": 2,
                "goalsFor": 6,
                "goalsAgainst": 8
              },
              "home": {
                "played": 3,
                "wins": 1,
                "draws": 1,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 5
              },
              "away": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 211,
              "team": "Benfica",
              "form": "DWWW",
              "all": {
                "played": 4,
                "wins": 3,
                "draws": 1,
                "losses": 0,
                "goalsFor": 14,
                "goalsAgainst": 3
              },
              "home": {
                "played": 2,
                "wins": 1,
                "draws": 1,
                "losses": 0,
                "goalsFor": 4,
                "goalsAgainst": 3
              },
              "away": {
                "played": 2,
                "wins": 2,
                "draws": 0,
                "losses": 0,
                "goalsFor": 10,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 4724,
              "team": "Alverca",
              "form": "LDLDL",
              "all": {
                "played": 5,
                "wins": 0,
                "draws": 2,
                "losses": 3,
                "goalsFor": 5,
                "goalsAgainst": 10
              },
              "home": {
                "played": 3,
                "wins": 0,
                "draws": 2,
                "losses": 1,
                "goalsFor": 4,
                "goalsAgainst": 5
              },
              "away": {
                "played": 2,
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 1,
                "goalsAgainst": 5
              }
            },
            {
              "teamId": 217,
              "team": "SC Braga",
              "form": "DWW",
              "all": {
                "played": 3,
                "wins": 2,
                "draws": 1,
                "losses": 0,
                "goalsFor": 5,
                "goalsAgainst": 3
              },
              "home": {
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 1,
                "goalsAgainst": 0
              },
              "away": {
                "played": 2,
                "wins": 1,
                "draws": 1,
                "losses": 0,
                "goalsFor": 4,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 228,
              "team": "Sporting CP",
              "form": "DWWWW",
              "all": {
                "played": 5,
                "wins": 4,
                "draws": 1,
                "losses": 0,
                "goalsFor": 14,
                "goalsAgainst": 5
              },
              "home": {
                "played": 3,
                "wins": 3,
                "draws": 0,
                "losses": 0,
                "goalsFor": 8,
                "goalsAgainst": 3
              },
              "away": {
                "played": 2,
                "wins": 1,
                "draws": 1,
                "losses": 0,
                "goalsFor": 6,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 225,
              "team": "Nacional",
              "form": "DWLLL",
              "all": {
                "played": 5,
                "wins": 1,
                "draws": 1,
                "losses": 3,
                "goalsFor": 6,
                "goalsAgainst": 8
              },
              "home": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 4,
                "goalsAgainst": 3
              },
              "away": {
                "played": 3,
                "wins": 0,
                "draws": 1,
                "losses": 2,
                "goalsFor": 2,
                "goalsAgainst": 5
              }
            },
            {
              "teamId": 227,
              "team": "Santa Clara",
              "form": "DWWD",
              "all": {
                "played": 4,
                "wins": 2,
                "draws": 2,
                "losses": 0,
                "goalsFor": 5,
                "goalsAgainst": 3
              },
              "home": {
                "played": 2,
                "wins": 1,
                "draws": 1,
                "losses": 0,
                "goalsFor": 3,
                "goalsAgainst": 2
              },
              "away": {
                "played": 2,
                "wins": 1,
                "draws": 1,
                "losses": 0,
                "goalsFor": 2,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 226,
              "team": "Rio Ave",
              "form": "LLWL",
              "all": {
                "played": 4,
                "wins": 1,
                "draws": 0,
                "losses": 3,
                "goalsFor": 2,
                "goalsAgainst": 7
              },
              "home": {
                "played": 2,
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 0,
                "goalsAgainst": 6
              },
              "away": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 2,
                "goalsAgainst": 1
              }
            }
          ],
          "fixtures": [
            {
              "fixtureId": 1575487,
              "kickoff": "2026-09-06T02:00:00+09:00",
              "status": "FT",
              "homeTeamId": 214,
              "homeTeam": "Maritimo",
              "awayTeamId": 211,
              "awayTeam": "Benfica",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1575482,
              "kickoff": "2026-09-06T02:00:00+09:00",
              "status": "FT",
              "homeTeamId": 4724,
              "homeTeam": "Alverca",
              "awayTeamId": 217,
              "awayTeam": "SC Braga",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1575489,
              "kickoff": "2026-09-06T04:30:00+09:00",
              "status": "FT",
              "homeTeamId": 228,
              "homeTeam": "Sporting CP",
              "awayTeamId": 225,
              "awayTeam": "Nacional",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1575488,
              "kickoff": "2026-09-06T23:30:00+09:00",
              "status": "NS",
              "homeTeamId": 227,
              "homeTeam": "Santa Clara",
              "awayTeamId": 226,
              "awayTeam": "Rio Ave",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": true,
              "lineups": []
            }
          ]
        },
        {
          "key": "SCOTTISH_PREMIERSHIP",
          "leagueId": 179,
          "season": "2026",
          "standings": [
            {
              "teamId": 247,
              "team": "Celtic",
              "rank": 1,
              "points": 15,
              "goalsDiff": 10,
              "form": "WWWWW",
              "all": {
                "played": 5,
                "wins": 5,
                "draws": 0,
                "losses": 0,
                "goalsFor": 13,
                "goalsAgainst": 3
              },
              "home": {
                "played": 3,
                "wins": 3,
                "draws": 0,
                "losses": 0,
                "goalsFor": 6,
                "goalsAgainst": 1
              },
              "away": {
                "played": 2,
                "wins": 2,
                "draws": 0,
                "losses": 0,
                "goalsFor": 7,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 251,
              "team": "ST Mirren",
              "rank": 2,
              "points": 10,
              "goalsDiff": 3,
              "form": "LWDWW",
              "all": {
                "played": 5,
                "wins": 3,
                "draws": 1,
                "losses": 1,
                "goalsFor": 8,
                "goalsAgainst": 5
              },
              "home": {
                "played": 3,
                "wins": 1,
                "draws": 1,
                "losses": 1,
                "goalsFor": 5,
                "goalsAgainst": 5
              },
              "away": {
                "played": 2,
                "wins": 2,
                "draws": 0,
                "losses": 0,
                "goalsFor": 3,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 257,
              "team": "Rangers",
              "rank": 3,
              "points": 10,
              "goalsDiff": 2,
              "form": "WWWLD",
              "all": {
                "played": 5,
                "wins": 3,
                "draws": 1,
                "losses": 1,
                "goalsFor": 6,
                "goalsAgainst": 4
              },
              "home": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 2,
                "goalsAgainst": 2
              },
              "away": {
                "played": 3,
                "wins": 2,
                "draws": 1,
                "losses": 0,
                "goalsFor": 4,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 254,
              "team": "Heart Of Midlothian",
              "rank": 4,
              "points": 9,
              "goalsDiff": 6,
              "form": "WWWL",
              "all": {
                "played": 4,
                "wins": 3,
                "draws": 0,
                "losses": 1,
                "goalsFor": 10,
                "goalsAgainst": 4
              },
              "home": {
                "played": 2,
                "wins": 2,
                "draws": 0,
                "losses": 0,
                "goalsFor": 6,
                "goalsAgainst": 1
              },
              "away": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 4,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 256,
              "team": "Motherwell",
              "rank": 5,
              "points": 8,
              "goalsDiff": 3,
              "form": "LWDDW",
              "all": {
                "played": 5,
                "wins": 2,
                "draws": 2,
                "losses": 1,
                "goalsFor": 8,
                "goalsAgainst": 5
              },
              "home": {
                "played": 2,
                "wins": 1,
                "draws": 1,
                "losses": 0,
                "goalsFor": 3,
                "goalsAgainst": 0
              },
              "away": {
                "played": 3,
                "wins": 1,
                "draws": 1,
                "losses": 1,
                "goalsFor": 5,
                "goalsAgainst": 5
              }
            },
            {
              "teamId": 253,
              "team": "Dundee",
              "rank": 6,
              "points": 7,
              "goalsDiff": 2,
              "form": "DLWWL",
              "all": {
                "played": 5,
                "wins": 2,
                "draws": 1,
                "losses": 2,
                "goalsFor": 6,
                "goalsAgainst": 4
              },
              "home": {
                "played": 3,
                "wins": 1,
                "draws": 1,
                "losses": 1,
                "goalsFor": 4,
                "goalsAgainst": 3
              },
              "away": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 2,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 249,
              "team": "Hibernian",
              "rank": 7,
              "points": 6,
              "goalsDiff": -1,
              "form": "LWWL",
              "all": {
                "played": 4,
                "wins": 2,
                "draws": 0,
                "losses": 2,
                "goalsFor": 6,
                "goalsAgainst": 7
              },
              "home": {
                "played": 2,
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 2,
                "goalsAgainst": 5
              },
              "away": {
                "played": 2,
                "wins": 2,
                "draws": 0,
                "losses": 0,
                "goalsFor": 4,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 1386,
              "team": "Dundee Utd",
              "rank": 8,
              "points": 5,
              "goalsDiff": -5,
              "form": "DLWLL",
              "all": {
                "played": 6,
                "wins": 1,
                "draws": 2,
                "losses": 3,
                "goalsFor": 6,
                "goalsAgainst": 11
              },
              "home": {
                "played": 3,
                "wins": 0,
                "draws": 2,
                "losses": 1,
                "goalsFor": 2,
                "goalsAgainst": 4
              },
              "away": {
                "played": 3,
                "wins": 1,
                "draws": 0,
                "losses": 2,
                "goalsFor": 4,
                "goalsAgainst": 7
              }
            },
            {
              "teamId": 258,
              "team": "ST Johnstone",
              "rank": 9,
              "points": 4,
              "goalsDiff": -1,
              "form": "DLLW",
              "all": {
                "played": 4,
                "wins": 1,
                "draws": 1,
                "losses": 2,
                "goalsFor": 6,
                "goalsAgainst": 7
              },
              "home": {
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 4,
                "goalsAgainst": 3
              },
              "away": {
                "played": 3,
                "wins": 0,
                "draws": 1,
                "losses": 2,
                "goalsFor": 2,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 252,
              "team": "Aberdeen",
              "rank": 10,
              "points": 4,
              "goalsDiff": -5,
              "form": "DLLLW",
              "all": {
                "played": 5,
                "wins": 1,
                "draws": 1,
                "losses": 3,
                "goalsFor": 2,
                "goalsAgainst": 7
              },
              "home": {
                "played": 3,
                "wins": 1,
                "draws": 1,
                "losses": 1,
                "goalsFor": 2,
                "goalsAgainst": 2
              },
              "away": {
                "played": 2,
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 0,
                "goalsAgainst": 5
              }
            },
            {
              "teamId": 1389,
              "team": "Falkirk",
              "rank": 11,
              "points": 2,
              "goalsDiff": -4,
              "form": "DLLDL",
              "all": {
                "played": 5,
                "wins": 0,
                "draws": 2,
                "losses": 3,
                "goalsFor": 3,
                "goalsAgainst": 7
              },
              "home": {
                "played": 2,
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 1,
                "goalsAgainst": 4
              },
              "away": {
                "played": 3,
                "wins": 0,
                "draws": 2,
                "losses": 1,
                "goalsFor": 2,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 250,
              "team": "Kilmarnock",
              "rank": 12,
              "points": 1,
              "goalsDiff": -10,
              "form": "DLLLL",
              "all": {
                "played": 5,
                "wins": 0,
                "draws": 1,
                "losses": 4,
                "goalsFor": 4,
                "goalsAgainst": 14
              },
              "home": {
                "played": 3,
                "wins": 0,
                "draws": 0,
                "losses": 3,
                "goalsFor": 1,
                "goalsAgainst": 10
              },
              "away": {
                "played": 2,
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 4
              }
            }
          ],
          "teams": [
            {
              "teamId": 251,
              "team": "ST Mirren",
              "form": "WWDWL",
              "all": {
                "played": 5,
                "wins": 3,
                "draws": 1,
                "losses": 1,
                "goalsFor": 8,
                "goalsAgainst": 5
              },
              "home": {
                "played": 3,
                "wins": 1,
                "draws": 1,
                "losses": 1,
                "goalsFor": 5,
                "goalsAgainst": 5
              },
              "away": {
                "played": 2,
                "wins": 2,
                "draws": 0,
                "losses": 0,
                "goalsFor": 3,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 247,
              "team": "Celtic",
              "form": "WWWWW",
              "all": {
                "played": 5,
                "wins": 5,
                "draws": 0,
                "losses": 0,
                "goalsFor": 13,
                "goalsAgainst": 3
              },
              "home": {
                "played": 3,
                "wins": 3,
                "draws": 0,
                "losses": 0,
                "goalsFor": 6,
                "goalsAgainst": 1
              },
              "away": {
                "played": 2,
                "wins": 2,
                "draws": 0,
                "losses": 0,
                "goalsFor": 7,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 254,
              "team": "Heart Of Midlothian",
              "form": "LWWW",
              "all": {
                "played": 4,
                "wins": 3,
                "draws": 0,
                "losses": 1,
                "goalsFor": 10,
                "goalsAgainst": 4
              },
              "home": {
                "played": 2,
                "wins": 2,
                "draws": 0,
                "losses": 0,
                "goalsFor": 6,
                "goalsAgainst": 1
              },
              "away": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 4,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 253,
              "team": "Dundee",
              "form": "LWWLD",
              "all": {
                "played": 5,
                "wins": 2,
                "draws": 1,
                "losses": 2,
                "goalsFor": 6,
                "goalsAgainst": 4
              },
              "home": {
                "played": 3,
                "wins": 1,
                "draws": 1,
                "losses": 1,
                "goalsFor": 4,
                "goalsAgainst": 3
              },
              "away": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 2,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 258,
              "team": "ST Johnstone",
              "form": "WLLD",
              "all": {
                "played": 4,
                "wins": 1,
                "draws": 1,
                "losses": 2,
                "goalsFor": 6,
                "goalsAgainst": 7
              },
              "home": {
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 4,
                "goalsAgainst": 3
              },
              "away": {
                "played": 3,
                "wins": 0,
                "draws": 1,
                "losses": 2,
                "goalsFor": 2,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 249,
              "team": "Hibernian",
              "form": "LWWL",
              "all": {
                "played": 4,
                "wins": 2,
                "draws": 0,
                "losses": 2,
                "goalsFor": 6,
                "goalsAgainst": 7
              },
              "home": {
                "played": 2,
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 2,
                "goalsAgainst": 5
              },
              "away": {
                "played": 2,
                "wins": 2,
                "draws": 0,
                "losses": 0,
                "goalsFor": 4,
                "goalsAgainst": 2
              }
            }
          ],
          "fixtures": [
            {
              "fixtureId": 1556663,
              "kickoff": "2026-09-06T04:00:00+09:00",
              "status": "FT",
              "homeTeamId": 251,
              "homeTeam": "ST Mirren",
              "awayTeamId": 247,
              "awayTeam": "Celtic",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1556660,
              "kickoff": "2026-09-06T23:00:00+09:00",
              "status": "NS",
              "homeTeamId": 254,
              "homeTeam": "Heart Of Midlothian",
              "awayTeamId": 253,
              "awayTeam": "Dundee",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": true,
              "lineups": []
            },
            {
              "fixtureId": 1556662,
              "kickoff": "2026-09-06T23:00:00+09:00",
              "status": "NS",
              "homeTeamId": 258,
              "homeTeam": "ST Johnstone",
              "awayTeamId": 249,
              "awayTeam": "Hibernian",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": true,
              "lineups": []
            }
          ]
        },
        {
          "key": "BELGIAN_PRO_LEAGUE",
          "leagueId": 144,
          "season": "2026",
          "standings": [
            {
              "teamId": 1393,
              "team": "Union St. Gilloise",
              "rank": 1,
              "points": 13,
              "goalsDiff": 11,
              "form": "WWWDW",
              "all": {
                "played": 5,
                "wins": 4,
                "draws": 1,
                "losses": 0,
                "goalsFor": 14,
                "goalsAgainst": 3
              },
              "home": {
                "played": 2,
                "wins": 1,
                "draws": 1,
                "losses": 0,
                "goalsFor": 3,
                "goalsAgainst": 0
              },
              "away": {
                "played": 3,
                "wins": 3,
                "draws": 0,
                "losses": 0,
                "goalsFor": 11,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 569,
              "team": "Club Brugge KV",
              "rank": 2,
              "points": 12,
              "goalsDiff": 7,
              "form": "WLWWW",
              "all": {
                "played": 5,
                "wins": 4,
                "draws": 0,
                "losses": 1,
                "goalsFor": 9,
                "goalsAgainst": 2
              },
              "home": {
                "played": 2,
                "wins": 2,
                "draws": 0,
                "losses": 0,
                "goalsFor": 4,
                "goalsAgainst": 0
              },
              "away": {
                "played": 3,
                "wins": 2,
                "draws": 0,
                "losses": 1,
                "goalsFor": 5,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 736,
              "team": "Charleroi",
              "rank": 3,
              "points": 12,
              "goalsDiff": 6,
              "form": "LWWWW",
              "all": {
                "played": 5,
                "wins": 4,
                "draws": 0,
                "losses": 1,
                "goalsFor": 11,
                "goalsAgainst": 5
              },
              "home": {
                "played": 3,
                "wins": 2,
                "draws": 0,
                "losses": 1,
                "goalsFor": 7,
                "goalsAgainst": 4
              },
              "away": {
                "played": 2,
                "wins": 2,
                "draws": 0,
                "losses": 0,
                "goalsFor": 4,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 631,
              "team": "Gent",
              "rank": 4,
              "points": 12,
              "goalsDiff": 5,
              "form": "WWWW",
              "all": {
                "played": 4,
                "wins": 4,
                "draws": 0,
                "losses": 0,
                "goalsFor": 7,
                "goalsAgainst": 2
              },
              "home": {
                "played": 3,
                "wins": 3,
                "draws": 0,
                "losses": 0,
                "goalsFor": 5,
                "goalsAgainst": 1
              },
              "away": {
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 2,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 733,
              "team": "Standard Liege",
              "rank": 5,
              "points": 11,
              "goalsDiff": 4,
              "form": "WWWDD",
              "all": {
                "played": 5,
                "wins": 3,
                "draws": 2,
                "losses": 0,
                "goalsFor": 10,
                "goalsAgainst": 6
              },
              "home": {
                "played": 3,
                "wins": 2,
                "draws": 1,
                "losses": 0,
                "goalsFor": 5,
                "goalsAgainst": 2
              },
              "away": {
                "played": 2,
                "wins": 1,
                "draws": 1,
                "losses": 0,
                "goalsFor": 5,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 600,
              "team": "Zulte Waregem",
              "rank": 6,
              "points": 8,
              "goalsDiff": 5,
              "form": "DWDW",
              "all": {
                "played": 4,
                "wins": 2,
                "draws": 2,
                "losses": 0,
                "goalsFor": 8,
                "goalsAgainst": 3
              },
              "home": {
                "played": 2,
                "wins": 2,
                "draws": 0,
                "losses": 0,
                "goalsFor": 6,
                "goalsAgainst": 1
              },
              "away": {
                "played": 2,
                "wins": 0,
                "draws": 2,
                "losses": 0,
                "goalsFor": 2,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 735,
              "team": "St. Truiden",
              "rank": 7,
              "points": 8,
              "goalsDiff": 4,
              "form": "WLWDD",
              "all": {
                "played": 5,
                "wins": 2,
                "draws": 2,
                "losses": 1,
                "goalsFor": 12,
                "goalsAgainst": 8
              },
              "home": {
                "played": 3,
                "wins": 1,
                "draws": 1,
                "losses": 1,
                "goalsFor": 5,
                "goalsAgainst": 4
              },
              "away": {
                "played": 2,
                "wins": 1,
                "draws": 1,
                "losses": 0,
                "goalsFor": 7,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 742,
              "team": "Genk",
              "rank": 8,
              "points": 7,
              "goalsDiff": 4,
              "form": "WDWL",
              "all": {
                "played": 4,
                "wins": 2,
                "draws": 1,
                "losses": 1,
                "goalsFor": 12,
                "goalsAgainst": 8
              },
              "home": {
                "played": 2,
                "wins": 2,
                "draws": 0,
                "losses": 0,
                "goalsFor": 7,
                "goalsAgainst": 2
              },
              "away": {
                "played": 2,
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 5,
                "goalsAgainst": 6
              }
            },
            {
              "teamId": 259,
              "team": "Lommel United",
              "rank": 9,
              "points": 7,
              "goalsDiff": 3,
              "form": "LWWLD",
              "all": {
                "played": 5,
                "wins": 2,
                "draws": 1,
                "losses": 2,
                "goalsFor": 6,
                "goalsAgainst": 3
              },
              "home": {
                "played": 3,
                "wins": 1,
                "draws": 0,
                "losses": 2,
                "goalsFor": 4,
                "goalsAgainst": 2
              },
              "away": {
                "played": 2,
                "wins": 1,
                "draws": 1,
                "losses": 0,
                "goalsFor": 2,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 740,
              "team": "Antwerp",
              "rank": 10,
              "points": 7,
              "goalsDiff": 0,
              "form": "LLDWW",
              "all": {
                "played": 5,
                "wins": 2,
                "draws": 1,
                "losses": 2,
                "goalsFor": 10,
                "goalsAgainst": 10
              },
              "home": {
                "played": 3,
                "wins": 1,
                "draws": 1,
                "losses": 1,
                "goalsFor": 7,
                "goalsAgainst": 9
              },
              "away": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 554,
              "team": "Anderlecht",
              "rank": 11,
              "points": 6,
              "goalsDiff": -2,
              "form": "WLLW",
              "all": {
                "played": 4,
                "wins": 2,
                "draws": 0,
                "losses": 2,
                "goalsFor": 3,
                "goalsAgainst": 5
              },
              "home": {
                "played": 2,
                "wins": 2,
                "draws": 0,
                "losses": 0,
                "goalsFor": 3,
                "goalsAgainst": 1
              },
              "away": {
                "played": 2,
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 0,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 261,
              "team": "KVC Westerlo",
              "rank": 12,
              "points": 4,
              "goalsDiff": -5,
              "form": "WDLLL",
              "all": {
                "played": 5,
                "wins": 1,
                "draws": 1,
                "losses": 3,
                "goalsFor": 9,
                "goalsAgainst": 14
              },
              "home": {
                "played": 2,
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 7
              },
              "away": {
                "played": 3,
                "wins": 1,
                "draws": 0,
                "losses": 2,
                "goalsFor": 6,
                "goalsAgainst": 7
              }
            },
            {
              "teamId": 738,
              "team": "SK Beveren",
              "rank": 13,
              "points": 3,
              "goalsDiff": -8,
              "form": "LLWL",
              "all": {
                "played": 4,
                "wins": 1,
                "draws": 0,
                "losses": 3,
                "goalsFor": 2,
                "goalsAgainst": 10
              },
              "home": {
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 1,
                "goalsAgainst": 0
              },
              "away": {
                "played": 3,
                "wins": 0,
                "draws": 0,
                "losses": 3,
                "goalsFor": 1,
                "goalsAgainst": 10
              }
            },
            {
              "teamId": 741,
              "team": "Cercle Brugge",
              "rank": 14,
              "points": 2,
              "goalsDiff": -2,
              "form": "LLDD",
              "all": {
                "played": 4,
                "wins": 0,
                "draws": 2,
                "losses": 2,
                "goalsFor": 5,
                "goalsAgainst": 7
              },
              "home": {
                "played": 2,
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 4
              },
              "away": {
                "played": 2,
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 2,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 266,
              "team": "KV Mechelen",
              "rank": 15,
              "points": 2,
              "goalsDiff": -8,
              "form": "LDLDL",
              "all": {
                "played": 5,
                "wins": 0,
                "draws": 2,
                "losses": 3,
                "goalsFor": 5,
                "goalsAgainst": 13
              },
              "home": {
                "played": 2,
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 7
              },
              "away": {
                "played": 3,
                "wins": 0,
                "draws": 1,
                "losses": 2,
                "goalsFor": 2,
                "goalsAgainst": 6
              }
            },
            {
              "teamId": 5902,
              "team": "RAAL La Louvière",
              "rank": 16,
              "points": 1,
              "goalsDiff": -8,
              "form": "LDLLL",
              "all": {
                "played": 5,
                "wins": 0,
                "draws": 1,
                "losses": 4,
                "goalsFor": 4,
                "goalsAgainst": 12
              },
              "home": {
                "played": 2,
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 4
              },
              "away": {
                "played": 3,
                "wins": 0,
                "draws": 0,
                "losses": 3,
                "goalsFor": 1,
                "goalsAgainst": 8
              }
            },
            {
              "teamId": 260,
              "team": "OH Leuven",
              "rank": 17,
              "points": 0,
              "goalsDiff": -7,
              "form": "LLLL",
              "all": {
                "played": 4,
                "wins": 0,
                "draws": 0,
                "losses": 4,
                "goalsFor": 2,
                "goalsAgainst": 9
              },
              "home": {
                "played": 2,
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 1,
                "goalsAgainst": 5
              },
              "away": {
                "played": 2,
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 1,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 734,
              "team": "Kortrijk",
              "rank": 18,
              "points": 0,
              "goalsDiff": -9,
              "form": "LLLL",
              "all": {
                "played": 4,
                "wins": 0,
                "draws": 0,
                "losses": 4,
                "goalsFor": 1,
                "goalsAgainst": 10
              },
              "home": {
                "played": 2,
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 1,
                "goalsAgainst": 6
              },
              "away": {
                "played": 2,
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 0,
                "goalsAgainst": 4
              }
            }
          ],
          "teams": [
            {
              "teamId": 741,
              "team": "Cercle Brugge",
              "form": "DDLL",
              "all": {
                "played": 4,
                "wins": 0,
                "draws": 2,
                "losses": 2,
                "goalsFor": 5,
                "goalsAgainst": 7
              },
              "home": {
                "played": 2,
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 4
              },
              "away": {
                "played": 2,
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 2,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 631,
              "team": "Gent",
              "form": "WWWW",
              "all": {
                "played": 4,
                "wins": 4,
                "draws": 0,
                "losses": 0,
                "goalsFor": 7,
                "goalsAgainst": 2
              },
              "home": {
                "played": 3,
                "wins": 3,
                "draws": 0,
                "losses": 0,
                "goalsFor": 5,
                "goalsAgainst": 1
              },
              "away": {
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 2,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 266,
              "team": "KV Mechelen",
              "form": "LDLDL",
              "all": {
                "played": 5,
                "wins": 0,
                "draws": 2,
                "losses": 3,
                "goalsFor": 5,
                "goalsAgainst": 13
              },
              "home": {
                "played": 2,
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 7
              },
              "away": {
                "played": 3,
                "wins": 0,
                "draws": 1,
                "losses": 2,
                "goalsFor": 2,
                "goalsAgainst": 6
              }
            },
            {
              "teamId": 261,
              "team": "KVC Westerlo",
              "form": "LLLDW",
              "all": {
                "played": 5,
                "wins": 1,
                "draws": 1,
                "losses": 3,
                "goalsFor": 9,
                "goalsAgainst": 14
              },
              "home": {
                "played": 2,
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 7
              },
              "away": {
                "played": 3,
                "wins": 1,
                "draws": 0,
                "losses": 2,
                "goalsFor": 6,
                "goalsAgainst": 7
              }
            },
            {
              "teamId": 733,
              "team": "Standard Liege",
              "form": "DDWWW",
              "all": {
                "played": 5,
                "wins": 3,
                "draws": 2,
                "losses": 0,
                "goalsFor": 10,
                "goalsAgainst": 6
              },
              "home": {
                "played": 3,
                "wins": 2,
                "draws": 1,
                "losses": 0,
                "goalsFor": 5,
                "goalsAgainst": 2
              },
              "away": {
                "played": 2,
                "wins": 1,
                "draws": 1,
                "losses": 0,
                "goalsFor": 5,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 740,
              "team": "Antwerp",
              "form": "WWDLL",
              "all": {
                "played": 5,
                "wins": 2,
                "draws": 1,
                "losses": 2,
                "goalsFor": 10,
                "goalsAgainst": 10
              },
              "home": {
                "played": 3,
                "wins": 1,
                "draws": 1,
                "losses": 1,
                "goalsFor": 7,
                "goalsAgainst": 9
              },
              "away": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 735,
              "team": "St. Truiden",
              "form": "DDWLW",
              "all": {
                "played": 5,
                "wins": 2,
                "draws": 2,
                "losses": 1,
                "goalsFor": 12,
                "goalsAgainst": 8
              },
              "home": {
                "played": 3,
                "wins": 1,
                "draws": 1,
                "losses": 1,
                "goalsFor": 5,
                "goalsAgainst": 4
              },
              "away": {
                "played": 2,
                "wins": 1,
                "draws": 1,
                "losses": 0,
                "goalsFor": 7,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 5902,
              "team": "RAAL La Louvière",
              "form": "LLLDL",
              "all": {
                "played": 5,
                "wins": 0,
                "draws": 1,
                "losses": 4,
                "goalsFor": 4,
                "goalsAgainst": 12
              },
              "home": {
                "played": 2,
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 4
              },
              "away": {
                "played": 3,
                "wins": 0,
                "draws": 0,
                "losses": 3,
                "goalsFor": 1,
                "goalsAgainst": 8
              }
            },
            {
              "teamId": 734,
              "team": "Kortrijk",
              "form": "LLLL",
              "all": {
                "played": 4,
                "wins": 0,
                "draws": 0,
                "losses": 4,
                "goalsFor": 1,
                "goalsAgainst": 10
              },
              "home": {
                "played": 2,
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 1,
                "goalsAgainst": 6
              },
              "away": {
                "played": 2,
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 0,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 600,
              "team": "Zulte Waregem",
              "form": "WDWD",
              "all": {
                "played": 4,
                "wins": 2,
                "draws": 2,
                "losses": 0,
                "goalsFor": 8,
                "goalsAgainst": 3
              },
              "home": {
                "played": 2,
                "wins": 2,
                "draws": 0,
                "losses": 0,
                "goalsFor": 6,
                "goalsAgainst": 1
              },
              "away": {
                "played": 2,
                "wins": 0,
                "draws": 2,
                "losses": 0,
                "goalsFor": 2,
                "goalsAgainst": 2
              }
            }
          ],
          "fixtures": [
            {
              "fixtureId": 1558622,
              "kickoff": "2026-09-06T20:30:00+09:00",
              "status": "1H",
              "homeTeamId": 741,
              "homeTeam": "Cercle Brugge",
              "awayTeamId": 631,
              "awayTeam": "Gent",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": true,
              "lineups": [
                {
                  "teamId": 741,
                  "team": "Cercle Brugge",
                  "formation": "3-4-3",
                  "coach": "L. Friis",
                  "starters": [
                    "G. Coucke",
                    "I. Diakité",
                    "Emmanuel Kakou",
                    "G. Kondo",
                    "G. Magnée",
                    "L. Amani",
                    "L. Mondele",
                    "V. Konaté",
                    "V. Martens",
                    "S. Ngoura",
                    "L. Michal"
                  ]
                },
                {
                  "teamId": 631,
                  "team": "Gent",
                  "formation": "3-4-2-1",
                  "coach": "R. Demil",
                  "starters": [
                    "D. Roef",
                    "M. Ngom",
                    "C. Burgess",
                    "S. Van der Heyden",
                    "M. Volckaert",
                    "T. De Vlieger",
                    "M. Delorge-Knieper",
                    "Tiago Araújo",
                    "M. Balikwisha",
                    "M. Sonko",
                    "J. Y. Vergara Ortega"
                  ]
                }
              ]
            },
            {
              "fixtureId": 1558619,
              "kickoff": "2026-09-06T01:15:00+09:00",
              "status": "FT",
              "homeTeamId": 266,
              "homeTeam": "KV Mechelen",
              "awayTeamId": 261,
              "awayTeam": "KVC Westerlo",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1558620,
              "kickoff": "2026-09-06T03:45:00+09:00",
              "status": "FT",
              "homeTeamId": 733,
              "homeTeam": "Standard Liege",
              "awayTeamId": 740,
              "awayTeam": "Antwerp",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1558621,
              "kickoff": "2026-09-06T03:45:00+09:00",
              "status": "FT",
              "homeTeamId": 735,
              "homeTeam": "St. Truiden",
              "awayTeamId": 5902,
              "awayTeam": "RAAL La Louvière",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1558623,
              "kickoff": "2026-09-06T23:00:00+09:00",
              "status": "NS",
              "homeTeamId": 734,
              "homeTeam": "Kortrijk",
              "awayTeamId": 600,
              "awayTeam": "Zulte Waregem",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": true,
              "lineups": []
            }
          ]
        },
        {
          "key": "SUPER_LIG",
          "leagueId": 203,
          "season": "2026",
          "standings": [
            {
              "teamId": 645,
              "team": "Galatasaray",
              "rank": 1,
              "points": 10,
              "goalsDiff": 6,
              "form": "WWWD",
              "all": {
                "played": 4,
                "wins": 3,
                "draws": 1,
                "losses": 0,
                "goalsFor": 12,
                "goalsAgainst": 6
              },
              "home": {
                "played": 2,
                "wins": 1,
                "draws": 1,
                "losses": 0,
                "goalsFor": 5,
                "goalsAgainst": 4
              },
              "away": {
                "played": 2,
                "wins": 2,
                "draws": 0,
                "losses": 0,
                "goalsFor": 7,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 549,
              "team": "Beşiktaş",
              "rank": 2,
              "points": 9,
              "goalsDiff": 5,
              "form": "WWLW",
              "all": {
                "played": 4,
                "wins": 3,
                "draws": 0,
                "losses": 1,
                "goalsFor": 9,
                "goalsAgainst": 4
              },
              "home": {
                "played": 2,
                "wins": 2,
                "draws": 0,
                "losses": 0,
                "goalsFor": 7,
                "goalsAgainst": 2
              },
              "away": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 2,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 997,
              "team": "Gençlerbirliği S.K.",
              "rank": 3,
              "points": 7,
              "goalsDiff": 2,
              "form": "DWW",
              "all": {
                "played": 3,
                "wins": 2,
                "draws": 1,
                "losses": 0,
                "goalsFor": 4,
                "goalsAgainst": 2
              },
              "home": {
                "played": 2,
                "wins": 1,
                "draws": 1,
                "losses": 0,
                "goalsFor": 3,
                "goalsAgainst": 2
              },
              "away": {
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 1,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 611,
              "team": "Fenerbahçe",
              "rank": 4,
              "points": 6,
              "goalsDiff": 2,
              "form": "LWWL",
              "all": {
                "played": 4,
                "wins": 2,
                "draws": 0,
                "losses": 2,
                "goalsFor": 8,
                "goalsAgainst": 6
              },
              "home": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 5,
                "goalsAgainst": 4
              },
              "away": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 3579,
              "team": "Amed",
              "rank": 5,
              "points": 6,
              "goalsDiff": 2,
              "form": "WLW",
              "all": {
                "played": 3,
                "wins": 2,
                "draws": 0,
                "losses": 1,
                "goalsFor": 5,
                "goalsAgainst": 3
              },
              "home": {
                "played": 2,
                "wins": 2,
                "draws": 0,
                "losses": 0,
                "goalsFor": 5,
                "goalsAgainst": 1
              },
              "away": {
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 0,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 7411,
              "team": "Kocaelispor",
              "rank": 6,
              "points": 6,
              "goalsDiff": 1,
              "form": "WWL",
              "all": {
                "played": 3,
                "wins": 2,
                "draws": 0,
                "losses": 1,
                "goalsFor": 4,
                "goalsAgainst": 3
              },
              "home": {
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 2,
                "goalsAgainst": 0
              },
              "away": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 2,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 1007,
              "team": "Rizespor",
              "rank": 7,
              "points": 6,
              "goalsDiff": 0,
              "form": "WLW",
              "all": {
                "played": 3,
                "wins": 2,
                "draws": 0,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 3
              },
              "home": {
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 0,
                "goalsAgainst": 2
              },
              "away": {
                "played": 2,
                "wins": 2,
                "draws": 0,
                "losses": 0,
                "goalsFor": 3,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 1004,
              "team": "Kasımpaşa",
              "rank": 8,
              "points": 5,
              "goalsDiff": 1,
              "form": "DWD",
              "all": {
                "played": 3,
                "wins": 1,
                "draws": 2,
                "losses": 0,
                "goalsFor": 3,
                "goalsAgainst": 2
              },
              "home": {
                "played": 1,
                "wins": 0,
                "draws": 1,
                "losses": 0,
                "goalsFor": 1,
                "goalsAgainst": 1
              },
              "away": {
                "played": 2,
                "wins": 1,
                "draws": 1,
                "losses": 0,
                "goalsFor": 2,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 564,
              "team": "Başakşehir",
              "rank": 9,
              "points": 4,
              "goalsDiff": 0,
              "form": "LDLW",
              "all": {
                "played": 4,
                "wins": 1,
                "draws": 1,
                "losses": 2,
                "goalsFor": 6,
                "goalsAgainst": 6
              },
              "home": {
                "played": 3,
                "wins": 1,
                "draws": 1,
                "losses": 1,
                "goalsFor": 5,
                "goalsAgainst": 4
              },
              "away": {
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 1,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 3603,
              "team": "Samsunspor",
              "rank": 10,
              "points": 4,
              "goalsDiff": 0,
              "form": "LWD",
              "all": {
                "played": 3,
                "wins": 1,
                "draws": 1,
                "losses": 1,
                "goalsFor": 5,
                "goalsAgainst": 5
              },
              "home": {
                "played": 2,
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 5
              },
              "away": {
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 2,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 998,
              "team": "Trabzonspor",
              "rank": 11,
              "points": 4,
              "goalsDiff": 0,
              "form": "LWD",
              "all": {
                "played": 3,
                "wins": 1,
                "draws": 1,
                "losses": 1,
                "goalsFor": 4,
                "goalsAgainst": 4
              },
              "home": {
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 2,
                "goalsAgainst": 1
              },
              "away": {
                "played": 2,
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 2,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 3573,
              "team": "Gaziantep FK",
              "rank": 12,
              "points": 4,
              "goalsDiff": 0,
              "form": "LWD",
              "all": {
                "played": 3,
                "wins": 1,
                "draws": 1,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 3
              },
              "home": {
                "played": 2,
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 2,
                "goalsAgainst": 3
              },
              "away": {
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 1,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 996,
              "team": "Alanyaspor",
              "rank": 13,
              "points": 4,
              "goalsDiff": 0,
              "form": "LWD",
              "all": {
                "played": 3,
                "wins": 1,
                "draws": 1,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 3
              },
              "home": {
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 1,
                "goalsAgainst": 0
              },
              "away": {
                "played": 2,
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 2,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 1009,
              "team": "Erzurumspor FK",
              "rank": 14,
              "points": 4,
              "goalsDiff": -6,
              "form": "WDLL",
              "all": {
                "played": 4,
                "wins": 1,
                "draws": 1,
                "losses": 2,
                "goalsFor": 2,
                "goalsAgainst": 8
              },
              "home": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 1,
                "goalsAgainst": 4
              },
              "away": {
                "played": 2,
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 1,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 3588,
              "team": "Eyüpspor",
              "rank": 15,
              "points": 3,
              "goalsDiff": -1,
              "form": "WLL",
              "all": {
                "played": 3,
                "wins": 1,
                "draws": 0,
                "losses": 2,
                "goalsFor": 2,
                "goalsAgainst": 3
              },
              "home": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 2,
                "goalsAgainst": 2
              },
              "away": {
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 0,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 994,
              "team": "Göztepe",
              "rank": 16,
              "points": 1,
              "goalsDiff": -2,
              "form": "LLD",
              "all": {
                "played": 3,
                "wins": 0,
                "draws": 1,
                "losses": 2,
                "goalsFor": 5,
                "goalsAgainst": 7
              },
              "home": {
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 0,
                "goalsAgainst": 1
              },
              "away": {
                "played": 2,
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 5,
                "goalsAgainst": 6
              }
            },
            {
              "teamId": 6343,
              "team": "Çorum FK",
              "rank": 17,
              "points": 1,
              "goalsDiff": -5,
              "form": "LLD",
              "all": {
                "played": 3,
                "wins": 0,
                "draws": 1,
                "losses": 2,
                "goalsFor": 4,
                "goalsAgainst": 9
              },
              "home": {
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 0,
                "goalsAgainst": 1
              },
              "away": {
                "played": 2,
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 4,
                "goalsAgainst": 8
              }
            },
            {
              "teamId": 607,
              "team": "Konyaspor",
              "rank": 18,
              "points": 0,
              "goalsDiff": -5,
              "form": "LLLL",
              "all": {
                "played": 4,
                "wins": 0,
                "draws": 0,
                "losses": 4,
                "goalsFor": 3,
                "goalsAgainst": 8
              },
              "home": {
                "played": 2,
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 1,
                "goalsAgainst": 3
              },
              "away": {
                "played": 2,
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 2,
                "goalsAgainst": 5
              }
            }
          ],
          "teams": [
            {
              "teamId": 611,
              "team": "Fenerbahçe",
              "form": "LWWL",
              "all": {
                "played": 4,
                "wins": 2,
                "draws": 0,
                "losses": 2,
                "goalsFor": 8,
                "goalsAgainst": 6
              },
              "home": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 5,
                "goalsAgainst": 4
              },
              "away": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 549,
              "team": "Beşiktaş",
              "form": "WLWW",
              "all": {
                "played": 4,
                "wins": 3,
                "draws": 0,
                "losses": 1,
                "goalsFor": 9,
                "goalsAgainst": 4
              },
              "home": {
                "played": 2,
                "wins": 2,
                "draws": 0,
                "losses": 0,
                "goalsFor": 7,
                "goalsAgainst": 2
              },
              "away": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 2,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 1004,
              "team": "Kasımpaşa",
              "form": "DWD",
              "all": {
                "played": 3,
                "wins": 1,
                "draws": 2,
                "losses": 0,
                "goalsFor": 3,
                "goalsAgainst": 2
              },
              "home": {
                "played": 1,
                "wins": 0,
                "draws": 1,
                "losses": 0,
                "goalsFor": 1,
                "goalsAgainst": 1
              },
              "away": {
                "played": 2,
                "wins": 1,
                "draws": 1,
                "losses": 0,
                "goalsFor": 2,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 3579,
              "team": "Amed",
              "form": "WLW",
              "all": {
                "played": 3,
                "wins": 2,
                "draws": 0,
                "losses": 1,
                "goalsFor": 5,
                "goalsAgainst": 3
              },
              "home": {
                "played": 2,
                "wins": 2,
                "draws": 0,
                "losses": 0,
                "goalsFor": 5,
                "goalsAgainst": 1
              },
              "away": {
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 0,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 6343,
              "team": "Çorum FK",
              "form": "DLL",
              "all": {
                "played": 3,
                "wins": 0,
                "draws": 1,
                "losses": 2,
                "goalsFor": 4,
                "goalsAgainst": 9
              },
              "home": {
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 0,
                "goalsAgainst": 1
              },
              "away": {
                "played": 2,
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 4,
                "goalsAgainst": 8
              }
            },
            {
              "teamId": 3588,
              "team": "Eyüpspor",
              "form": "LLW",
              "all": {
                "played": 3,
                "wins": 1,
                "draws": 0,
                "losses": 2,
                "goalsFor": 2,
                "goalsAgainst": 3
              },
              "home": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 2,
                "goalsAgainst": 2
              },
              "away": {
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 0,
                "goalsAgainst": 1
              }
            }
          ],
          "fixtures": [
            {
              "fixtureId": 1584397,
              "kickoff": "2026-09-06T02:00:00+09:00",
              "status": "FT",
              "homeTeamId": 611,
              "homeTeam": "Fenerbahçe",
              "awayTeamId": 549,
              "awayTeam": "Beşiktaş",
              "injuriesChecked": true,
              "injuries": [
                {
                  "fixtureId": 1584397,
                  "teamId": 611,
                  "playerId": 746,
                  "player": "M. Asensio",
                  "type": "Missing Fixture",
                  "reason": "Muscle Injury"
                },
                {
                  "fixtureId": 1584397,
                  "teamId": 611,
                  "playerId": 272721,
                  "player": "J. Oosterwolde",
                  "type": "Missing Fixture",
                  "reason": "Achilles Tendon Injury"
                },
                {
                  "fixtureId": 1584397,
                  "teamId": 611,
                  "playerId": 18776,
                  "player": "C. Soyuncu",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                }
              ],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1584399,
              "kickoff": "2026-09-06T23:00:00+09:00",
              "status": "NS",
              "homeTeamId": 1004,
              "homeTeam": "Kasımpaşa",
              "awayTeamId": 3579,
              "awayTeam": "Amed",
              "injuriesChecked": true,
              "injuries": [
                {
                  "fixtureId": 1584399,
                  "teamId": 1004,
                  "playerId": 49870,
                  "player": "K. Corekci",
                  "type": "Missing Fixture",
                  "reason": "Achilles Tendon Injury"
                },
                {
                  "fixtureId": 1584399,
                  "teamId": 1004,
                  "playerId": 329642,
                  "player": "T. Diarra",
                  "type": "Missing Fixture",
                  "reason": "Inactive"
                },
                {
                  "fixtureId": 1584399,
                  "teamId": 1004,
                  "playerId": 50067,
                  "player": "H. Hajradinovic",
                  "type": "Questionable",
                  "reason": "Inactive"
                },
                {
                  "fixtureId": 1584399,
                  "teamId": 1004,
                  "playerId": 428299,
                  "player": "J. Jessen",
                  "type": "Questionable",
                  "reason": "Inactive"
                },
                {
                  "fixtureId": 1584399,
                  "teamId": 1004,
                  "playerId": 49469,
                  "player": "M. Ouanes",
                  "type": "Questionable",
                  "reason": "Inactive"
                },
                {
                  "fixtureId": 1584399,
                  "teamId": 3579,
                  "playerId": 24865,
                  "player": "D. Bates",
                  "type": "Questionable",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1584399,
                  "teamId": 3579,
                  "playerId": 203458,
                  "player": "Y. Sor",
                  "type": "Questionable",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1584399,
                  "teamId": 3579,
                  "playerId": 458773,
                  "player": "M. Yildirim",
                  "type": "Questionable",
                  "reason": "Inactive"
                }
              ],
              "lineupsChecked": true,
              "lineups": []
            },
            {
              "fixtureId": 1584395,
              "kickoff": "2026-09-06T23:00:00+09:00",
              "status": "NS",
              "homeTeamId": 6343,
              "homeTeam": "Çorum FK",
              "awayTeamId": 3588,
              "awayTeam": "Eyüpspor",
              "injuriesChecked": true,
              "injuries": [
                {
                  "fixtureId": 1584395,
                  "teamId": 3588,
                  "playerId": 388461,
                  "player": "A. Abdullahi",
                  "type": "Questionable",
                  "reason": "Injury"
                }
              ],
              "lineupsChecked": true,
              "lineups": []
            }
          ]
        },
        {
          "key": "KLEAGUE1",
          "leagueId": 292,
          "season": "2026",
          "standings": [
            {
              "teamId": 2766,
              "team": "FC Seoul",
              "rank": 1,
              "points": 59,
              "goalsDiff": 32,
              "form": "WWWWW",
              "all": {
                "played": 27,
                "wins": 18,
                "draws": 5,
                "losses": 4,
                "goalsFor": 53,
                "goalsAgainst": 21
              },
              "home": {
                "played": 13,
                "wins": 8,
                "draws": 2,
                "losses": 3,
                "goalsFor": 22,
                "goalsAgainst": 10
              },
              "away": {
                "played": 14,
                "wins": 10,
                "draws": 3,
                "losses": 1,
                "goalsFor": 31,
                "goalsAgainst": 11
              }
            },
            {
              "teamId": 2762,
              "team": "Jeonbuk Motors",
              "rank": 2,
              "points": 42,
              "goalsDiff": 11,
              "form": "WDDWL",
              "all": {
                "played": 27,
                "wins": 11,
                "draws": 9,
                "losses": 7,
                "goalsFor": 34,
                "goalsAgainst": 23
              },
              "home": {
                "played": 13,
                "wins": 7,
                "draws": 2,
                "losses": 4,
                "goalsFor": 20,
                "goalsAgainst": 13
              },
              "away": {
                "played": 14,
                "wins": 4,
                "draws": 7,
                "losses": 3,
                "goalsFor": 14,
                "goalsAgainst": 10
              }
            },
            {
              "teamId": 2767,
              "team": "Ulsan Hyundai FC",
              "rank": 3,
              "points": 41,
              "goalsDiff": 4,
              "form": "DWLLL",
              "all": {
                "played": 27,
                "wins": 12,
                "draws": 5,
                "losses": 10,
                "goalsFor": 41,
                "goalsAgainst": 37
              },
              "home": {
                "played": 13,
                "wins": 6,
                "draws": 1,
                "losses": 6,
                "goalsFor": 23,
                "goalsAgainst": 22
              },
              "away": {
                "played": 14,
                "wins": 6,
                "draws": 4,
                "losses": 4,
                "goalsFor": 18,
                "goalsAgainst": 15
              }
            },
            {
              "teamId": 2761,
              "team": "Jeju United FC",
              "rank": 4,
              "points": 39,
              "goalsDiff": 4,
              "form": "DWLDW",
              "all": {
                "played": 27,
                "wins": 10,
                "draws": 9,
                "losses": 8,
                "goalsFor": 31,
                "goalsAgainst": 27
              },
              "home": {
                "played": 17,
                "wins": 5,
                "draws": 7,
                "losses": 5,
                "goalsFor": 18,
                "goalsAgainst": 18
              },
              "away": {
                "played": 10,
                "wins": 5,
                "draws": 2,
                "losses": 3,
                "goalsFor": 13,
                "goalsAgainst": 9
              }
            },
            {
              "teamId": 2746,
              "team": "Gangwon FC",
              "rank": 5,
              "points": 37,
              "goalsDiff": 6,
              "form": "DDLWL",
              "all": {
                "played": 25,
                "wins": 9,
                "draws": 10,
                "losses": 6,
                "goalsFor": 30,
                "goalsAgainst": 24
              },
              "home": {
                "played": 12,
                "wins": 4,
                "draws": 6,
                "losses": 2,
                "goalsFor": 16,
                "goalsAgainst": 11
              },
              "away": {
                "played": 13,
                "wins": 5,
                "draws": 4,
                "losses": 4,
                "goalsFor": 14,
                "goalsAgainst": 13
              }
            },
            {
              "teamId": 2750,
              "team": "Daejeon Citizen",
              "rank": 6,
              "points": 35,
              "goalsDiff": 8,
              "form": "WLWWL",
              "all": {
                "played": 27,
                "wins": 9,
                "draws": 8,
                "losses": 10,
                "goalsFor": 40,
                "goalsAgainst": 32
              },
              "home": {
                "played": 13,
                "wins": 3,
                "draws": 5,
                "losses": 5,
                "goalsFor": 14,
                "goalsAgainst": 15
              },
              "away": {
                "played": 14,
                "wins": 6,
                "draws": 3,
                "losses": 5,
                "goalsFor": 26,
                "goalsAgainst": 17
              }
            },
            {
              "teamId": 2764,
              "team": "Pohang Steelers",
              "rank": 7,
              "points": 35,
              "goalsDiff": -7,
              "form": "LDWLW",
              "all": {
                "played": 27,
                "wins": 10,
                "draws": 5,
                "losses": 12,
                "goalsFor": 24,
                "goalsAgainst": 31
              },
              "home": {
                "played": 11,
                "wins": 3,
                "draws": 2,
                "losses": 6,
                "goalsFor": 4,
                "goalsAgainst": 10
              },
              "away": {
                "played": 16,
                "wins": 7,
                "draws": 3,
                "losses": 6,
                "goalsFor": 20,
                "goalsAgainst": 21
              }
            },
            {
              "teamId": 2748,
              "team": "FC Anyang",
              "rank": 8,
              "points": 34,
              "goalsDiff": -6,
              "form": "DWLLL",
              "all": {
                "played": 26,
                "wins": 8,
                "draws": 10,
                "losses": 8,
                "goalsFor": 33,
                "goalsAgainst": 39
              },
              "home": {
                "played": 13,
                "wins": 3,
                "draws": 5,
                "losses": 5,
                "goalsFor": 15,
                "goalsAgainst": 23
              },
              "away": {
                "played": 13,
                "wins": 5,
                "draws": 5,
                "losses": 3,
                "goalsFor": 18,
                "goalsAgainst": 16
              }
            },
            {
              "teamId": 2763,
              "team": "Incheon United",
              "rank": 9,
              "points": 34,
              "goalsDiff": 3,
              "form": "LDLWD",
              "all": {
                "played": 26,
                "wins": 9,
                "draws": 7,
                "losses": 10,
                "goalsFor": 32,
                "goalsAgainst": 29
              },
              "home": {
                "played": 13,
                "wins": 4,
                "draws": 3,
                "losses": 6,
                "goalsFor": 14,
                "goalsAgainst": 14
              },
              "away": {
                "played": 13,
                "wins": 5,
                "draws": 4,
                "losses": 4,
                "goalsFor": 18,
                "goalsAgainst": 15
              }
            },
            {
              "teamId": 2745,
              "team": "Bucheon FC 1995",
              "rank": 10,
              "points": 31,
              "goalsDiff": -6,
              "form": "LDLWW",
              "all": {
                "played": 27,
                "wins": 7,
                "draws": 10,
                "losses": 10,
                "goalsFor": 28,
                "goalsAgainst": 34
              },
              "home": {
                "played": 15,
                "wins": 3,
                "draws": 6,
                "losses": 6,
                "goalsFor": 16,
                "goalsAgainst": 22
              },
              "away": {
                "played": 12,
                "wins": 4,
                "draws": 4,
                "losses": 4,
                "goalsFor": 12,
                "goalsAgainst": 12
              }
            },
            {
              "teamId": 2768,
              "team": "Gimcheon Sangmu FC",
              "rank": 11,
              "points": 27,
              "goalsDiff": -8,
              "form": "LDDDD",
              "all": {
                "played": 26,
                "wins": 4,
                "draws": 15,
                "losses": 7,
                "goalsFor": 24,
                "goalsAgainst": 32
              },
              "home": {
                "played": 12,
                "wins": 1,
                "draws": 8,
                "losses": 3,
                "goalsFor": 10,
                "goalsAgainst": 16
              },
              "away": {
                "played": 14,
                "wins": 3,
                "draws": 7,
                "losses": 4,
                "goalsFor": 14,
                "goalsAgainst": 16
              }
            },
            {
              "teamId": 2759,
              "team": "Gwangju FC",
              "rank": 12,
              "points": 12,
              "goalsDiff": -41,
              "form": "LDLLD",
              "all": {
                "played": 26,
                "wins": 1,
                "draws": 9,
                "losses": 16,
                "goalsFor": 16,
                "goalsAgainst": 57
              },
              "home": {
                "played": 14,
                "wins": 1,
                "draws": 4,
                "losses": 9,
                "goalsFor": 11,
                "goalsAgainst": 29
              },
              "away": {
                "played": 12,
                "wins": 0,
                "draws": 5,
                "losses": 7,
                "goalsFor": 5,
                "goalsAgainst": 28
              }
            }
          ],
          "teams": [
            {
              "teamId": 2748,
              "team": "FC Anyang",
              "form": "DWDLLDDWDWLDDDWLWDWWLLLLWDL",
              "all": {
                "played": 27,
                "wins": 8,
                "draws": 10,
                "losses": 9,
                "goalsFor": 33,
                "goalsAgainst": 42
              },
              "home": {
                "played": 14,
                "wins": 3,
                "draws": 5,
                "losses": 6,
                "goalsFor": 15,
                "goalsAgainst": 26
              },
              "away": {
                "played": 13,
                "wins": 5,
                "draws": 5,
                "losses": 3,
                "goalsFor": 18,
                "goalsAgainst": 16
              }
            },
            {
              "teamId": 2746,
              "team": "Gangwon FC",
              "form": "LDDDLWWDWLWDDWWWDWDLLWLDDW",
              "all": {
                "played": 26,
                "wins": 10,
                "draws": 10,
                "losses": 6,
                "goalsFor": 33,
                "goalsAgainst": 24
              },
              "home": {
                "played": 12,
                "wins": 4,
                "draws": 6,
                "losses": 2,
                "goalsFor": 16,
                "goalsAgainst": 11
              },
              "away": {
                "played": 14,
                "wins": 6,
                "draws": 4,
                "losses": 4,
                "goalsFor": 17,
                "goalsAgainst": 13
              }
            },
            {
              "teamId": 2768,
              "team": "Gimcheon Sangmu FC",
              "form": "DDDDDLDDLWWLLDLDDLDWWDDDDLD",
              "all": {
                "played": 27,
                "wins": 4,
                "draws": 16,
                "losses": 7,
                "goalsFor": 26,
                "goalsAgainst": 34
              },
              "home": {
                "played": 13,
                "wins": 1,
                "draws": 9,
                "losses": 3,
                "goalsFor": 12,
                "goalsAgainst": 18
              },
              "away": {
                "played": 14,
                "wins": 3,
                "draws": 7,
                "losses": 4,
                "goalsFor": 14,
                "goalsAgainst": 16
              }
            },
            {
              "teamId": 2759,
              "team": "Gwangju FC",
              "form": "DWDDLLLLLLLLDLLDLDDLLDLLDLD",
              "all": {
                "played": 27,
                "wins": 1,
                "draws": 10,
                "losses": 16,
                "goalsFor": 18,
                "goalsAgainst": 59
              },
              "home": {
                "played": 14,
                "wins": 1,
                "draws": 4,
                "losses": 9,
                "goalsFor": 11,
                "goalsAgainst": 29
              },
              "away": {
                "played": 13,
                "wins": 0,
                "draws": 6,
                "losses": 7,
                "goalsFor": 7,
                "goalsAgainst": 30
              }
            }
          ],
          "fixtures": [
            {
              "fixtureId": 1507056,
              "kickoff": "2026-09-06T19:00:00+09:00",
              "status": "FT",
              "homeTeamId": 2748,
              "homeTeam": "FC Anyang",
              "awayTeamId": 2746,
              "awayTeam": "Gangwon FC",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": true,
              "lineups": [
                {
                  "teamId": 2748,
                  "team": "FC Anyang",
                  "formation": "4-3-3",
                  "coach": "Ryu Byeong-Hoon",
                  "starters": [
                    "Kim Jeong-Hoon",
                    "Ju Hyun-Woo",
                    "Lee Chang-Yong",
                    "Kwon Kyung-Won",
                    "Kim Dong-Jin",
                    "Matheus Oliveira",
                    "Kim Jung-Hyun",
                    "D. Bakker",
                    "Chae Hyun-Woo",
                    "Woon Kim",
                    "Airton"
                  ]
                },
                {
                  "teamId": 2746,
                  "team": "Gangwon FC",
                  "formation": "4-4-2",
                  "coach": "Chung Kyung-Ho",
                  "starters": [
                    "Park Cheong-Hyo",
                    "Park Ho-Young",
                    "Seo Min-Woo",
                    "K. Mammar",
                    "Kang Joon-Hyuck",
                    "Mo Jae-Hyeon",
                    "Kim Dong-Hyun",
                    "Lee You-Hyeon",
                    "Kim Do-Hyun",
                    "Kim Gun-Hee",
                    "J. Sekidika"
                  ]
                }
              ]
            },
            {
              "fixtureId": 1507057,
              "kickoff": "2026-09-06T19:00:00+09:00",
              "status": "FT",
              "homeTeamId": 2768,
              "homeTeam": "Gimcheon Sangmu FC",
              "awayTeamId": 2759,
              "awayTeam": "Gwangju FC",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": true,
              "lineups": [
                {
                  "teamId": 2768,
                  "team": "Gimcheon Sangmu FC",
                  "formation": "4-4-2",
                  "coach": "Seung-jin Joo",
                  "starters": [
                    "Park Man-Ho",
                    "Kim Tae-Hwan",
                    "Byeon Jun-Soo",
                    "Lee Jung-Taek",
                    "Park Cheol-Woo",
                    "Go Jae-Hyeon",
                    "Kim Yi-Seok",
                    "Lee Kang-Hyun",
                    "Hong Yun-Sang",
                    "Lee Sang-Heon",
                    "Lee Kun-Hee"
                  ]
                },
                {
                  "teamId": 2759,
                  "team": "Gwangju FC",
                  "formation": "4-4-2",
                  "coach": "Jeong-kyu Lee",
                  "starters": [
                    "Kim Dong-Hwa",
                    "Kwon Sung-Yun",
                    "Min Sang-Gi",
                    "Jang Suk-Hwan",
                    "João Pedro",
                    "Shin Chang-Moo",
                    "Choi Kyoung-Rok",
                    "Yu Je-Ho",
                    "Ju Se-Jong",
                    "A. Ba Loua",
                    "J. Iredale"
                  ]
                }
              ]
            }
          ]
        },
        {
          "key": "KLEAGUE2",
          "leagueId": 293,
          "season": "2026",
          "standings": [
            {
              "teamId": 2765,
              "team": "Suwon Bluewings",
              "rank": 1,
              "points": 47,
              "goalsDiff": 16,
              "form": "WWDWD",
              "all": {
                "played": 23,
                "wins": 14,
                "draws": 5,
                "losses": 4,
                "goalsFor": 36,
                "goalsAgainst": 20
              },
              "home": {
                "played": 11,
                "wins": 6,
                "draws": 4,
                "losses": 1,
                "goalsFor": 14,
                "goalsAgainst": 8
              },
              "away": {
                "played": 12,
                "wins": 8,
                "draws": 1,
                "losses": 3,
                "goalsFor": 22,
                "goalsAgainst": 12
              }
            },
            {
              "teamId": 2749,
              "team": "Seoul E-Land FC",
              "rank": 2,
              "points": 45,
              "goalsDiff": 15,
              "form": "WDDWD",
              "all": {
                "played": 24,
                "wins": 13,
                "draws": 6,
                "losses": 5,
                "goalsFor": 43,
                "goalsAgainst": 28
              },
              "home": {
                "played": 11,
                "wins": 6,
                "draws": 2,
                "losses": 3,
                "goalsFor": 23,
                "goalsAgainst": 16
              },
              "away": {
                "played": 13,
                "wins": 7,
                "draws": 4,
                "losses": 2,
                "goalsFor": 20,
                "goalsAgainst": 12
              }
            },
            {
              "teamId": 2756,
              "team": "Suwon City FC",
              "rank": 3,
              "points": 44,
              "goalsDiff": 18,
              "form": "DWWDW",
              "all": {
                "played": 23,
                "wins": 12,
                "draws": 8,
                "losses": 3,
                "goalsFor": 46,
                "goalsAgainst": 28
              },
              "home": {
                "played": 10,
                "wins": 6,
                "draws": 4,
                "losses": 0,
                "goalsFor": 22,
                "goalsAgainst": 9
              },
              "away": {
                "played": 13,
                "wins": 6,
                "draws": 4,
                "losses": 3,
                "goalsFor": 24,
                "goalsAgainst": 19
              }
            },
            {
              "teamId": 2747,
              "team": "Daegu FC",
              "rank": 4,
              "points": 43,
              "goalsDiff": 12,
              "form": "DWDWW",
              "all": {
                "played": 24,
                "wins": 12,
                "draws": 7,
                "losses": 5,
                "goalsFor": 44,
                "goalsAgainst": 32
              },
              "home": {
                "played": 12,
                "wins": 7,
                "draws": 2,
                "losses": 3,
                "goalsFor": 23,
                "goalsAgainst": 15
              },
              "away": {
                "played": 12,
                "wins": 5,
                "draws": 5,
                "losses": 2,
                "goalsFor": 21,
                "goalsAgainst": 17
              }
            },
            {
              "teamId": 7087,
              "team": "Hwaseong",
              "rank": 5,
              "points": 40,
              "goalsDiff": 12,
              "form": "DWLDD",
              "all": {
                "played": 24,
                "wins": 11,
                "draws": 7,
                "losses": 6,
                "goalsFor": 37,
                "goalsAgainst": 25
              },
              "home": {
                "played": 16,
                "wins": 8,
                "draws": 5,
                "losses": 3,
                "goalsFor": 28,
                "goalsAgainst": 18
              },
              "away": {
                "played": 8,
                "wins": 3,
                "draws": 2,
                "losses": 3,
                "goalsFor": 9,
                "goalsAgainst": 7
              }
            },
            {
              "teamId": 2752,
              "team": "Busan I Park",
              "rank": 6,
              "points": 38,
              "goalsDiff": 6,
              "form": "LLDDL",
              "all": {
                "played": 24,
                "wins": 11,
                "draws": 5,
                "losses": 8,
                "goalsFor": 39,
                "goalsAgainst": 33
              },
              "home": {
                "played": 12,
                "wins": 6,
                "draws": 3,
                "losses": 3,
                "goalsFor": 19,
                "goalsAgainst": 13
              },
              "away": {
                "played": 12,
                "wins": 5,
                "draws": 2,
                "losses": 5,
                "goalsFor": 20,
                "goalsAgainst": 20
              }
            },
            {
              "teamId": 2753,
              "team": "Asan Mugunghwa",
              "rank": 7,
              "points": 31,
              "goalsDiff": 4,
              "form": "WLDWL",
              "all": {
                "played": 22,
                "wins": 8,
                "draws": 7,
                "losses": 7,
                "goalsFor": 31,
                "goalsAgainst": 27
              },
              "home": {
                "played": 12,
                "wins": 6,
                "draws": 4,
                "losses": 2,
                "goalsFor": 21,
                "goalsAgainst": 15
              },
              "away": {
                "played": 10,
                "wins": 2,
                "draws": 3,
                "losses": 5,
                "goalsFor": 10,
                "goalsAgainst": 12
              }
            },
            {
              "teamId": 7078,
              "team": "Gimpo Citizen",
              "rank": 8,
              "points": 31,
              "goalsDiff": 1,
              "form": "LDWDD",
              "all": {
                "played": 22,
                "wins": 7,
                "draws": 10,
                "losses": 5,
                "goalsFor": 27,
                "goalsAgainst": 26
              },
              "home": {
                "played": 8,
                "wins": 1,
                "draws": 5,
                "losses": 2,
                "goalsFor": 10,
                "goalsAgainst": 12
              },
              "away": {
                "played": 14,
                "wins": 6,
                "draws": 5,
                "losses": 3,
                "goalsFor": 17,
                "goalsAgainst": 14
              }
            },
            {
              "teamId": 2751,
              "team": "Gyeongnam FC",
              "rank": 9,
              "points": 30,
              "goalsDiff": 0,
              "form": "WDDLD",
              "all": {
                "played": 23,
                "wins": 7,
                "draws": 9,
                "losses": 7,
                "goalsFor": 30,
                "goalsAgainst": 30
              },
              "home": {
                "played": 12,
                "wins": 6,
                "draws": 2,
                "losses": 4,
                "goalsFor": 20,
                "goalsAgainst": 16
              },
              "away": {
                "played": 11,
                "wins": 1,
                "draws": 7,
                "losses": 3,
                "goalsFor": 10,
                "goalsAgainst": 14
              }
            },
            {
              "teamId": 2757,
              "team": "Seongnam FC",
              "rank": 10,
              "points": 27,
              "goalsDiff": -2,
              "form": "DWLWL",
              "all": {
                "played": 22,
                "wins": 6,
                "draws": 9,
                "losses": 7,
                "goalsFor": 24,
                "goalsAgainst": 26
              },
              "home": {
                "played": 11,
                "wins": 3,
                "draws": 6,
                "losses": 2,
                "goalsFor": 11,
                "goalsAgainst": 10
              },
              "away": {
                "played": 11,
                "wins": 3,
                "draws": 3,
                "losses": 5,
                "goalsFor": 13,
                "goalsAgainst": 16
              }
            },
            {
              "teamId": 9171,
              "team": "Yongin City",
              "rank": 11,
              "points": 26,
              "goalsDiff": -2,
              "form": "DWLWD",
              "all": {
                "played": 23,
                "wins": 5,
                "draws": 11,
                "losses": 7,
                "goalsFor": 30,
                "goalsAgainst": 32
              },
              "home": {
                "played": 12,
                "wins": 2,
                "draws": 6,
                "losses": 4,
                "goalsFor": 15,
                "goalsAgainst": 17
              },
              "away": {
                "played": 11,
                "wins": 3,
                "draws": 5,
                "losses": 3,
                "goalsFor": 15,
                "goalsAgainst": 15
              }
            },
            {
              "teamId": 7098,
              "team": "Paju Citizen",
              "rank": 12,
              "points": 26,
              "goalsDiff": -6,
              "form": "DLDWL",
              "all": {
                "played": 24,
                "wins": 7,
                "draws": 5,
                "losses": 12,
                "goalsFor": 22,
                "goalsAgainst": 28
              },
              "home": {
                "played": 12,
                "wins": 3,
                "draws": 2,
                "losses": 7,
                "goalsFor": 10,
                "goalsAgainst": 13
              },
              "away": {
                "played": 12,
                "wins": 4,
                "draws": 3,
                "losses": 5,
                "goalsFor": 12,
                "goalsAgainst": 15
              }
            },
            {
              "teamId": 7061,
              "team": "Cheongju",
              "rank": 13,
              "points": 23,
              "goalsDiff": -12,
              "form": "LLDWL",
              "all": {
                "played": 24,
                "wins": 3,
                "draws": 14,
                "losses": 7,
                "goalsFor": 27,
                "goalsAgainst": 39
              },
              "home": {
                "played": 13,
                "wins": 2,
                "draws": 6,
                "losses": 5,
                "goalsFor": 14,
                "goalsAgainst": 23
              },
              "away": {
                "played": 11,
                "wins": 1,
                "draws": 8,
                "losses": 2,
                "goalsFor": 13,
                "goalsAgainst": 16
              }
            },
            {
              "teamId": 7060,
              "team": "Cheonan City",
              "rank": 14,
              "points": 22,
              "goalsDiff": -5,
              "form": "DLLDL",
              "all": {
                "played": 24,
                "wins": 4,
                "draws": 10,
                "losses": 10,
                "goalsFor": 28,
                "goalsAgainst": 33
              },
              "home": {
                "played": 12,
                "wins": 2,
                "draws": 7,
                "losses": 3,
                "goalsFor": 10,
                "goalsAgainst": 11
              },
              "away": {
                "played": 12,
                "wins": 2,
                "draws": 3,
                "losses": 7,
                "goalsFor": 18,
                "goalsAgainst": 22
              }
            },
            {
              "teamId": 2758,
              "team": "Ansan Greeners",
              "rank": 15,
              "points": 22,
              "goalsDiff": -19,
              "form": "WLLLD",
              "all": {
                "played": 24,
                "wins": 6,
                "draws": 4,
                "losses": 14,
                "goalsFor": 25,
                "goalsAgainst": 44
              },
              "home": {
                "played": 14,
                "wins": 2,
                "draws": 2,
                "losses": 10,
                "goalsFor": 15,
                "goalsAgainst": 28
              },
              "away": {
                "played": 10,
                "wins": 4,
                "draws": 2,
                "losses": 4,
                "goalsFor": 10,
                "goalsAgainst": 16
              }
            },
            {
              "teamId": 2760,
              "team": "Jeonnam Dragons",
              "rank": 16,
              "points": 20,
              "goalsDiff": -12,
              "form": "DWWLL",
              "all": {
                "played": 23,
                "wins": 4,
                "draws": 8,
                "losses": 11,
                "goalsFor": 26,
                "goalsAgainst": 38
              },
              "home": {
                "played": 9,
                "wins": 3,
                "draws": 3,
                "losses": 3,
                "goalsFor": 10,
                "goalsAgainst": 10
              },
              "away": {
                "played": 14,
                "wins": 1,
                "draws": 5,
                "losses": 8,
                "goalsFor": 16,
                "goalsAgainst": 28
              }
            },
            {
              "teamId": 7076,
              "team": "Gimhae City",
              "rank": 17,
              "points": 13,
              "goalsDiff": -26,
              "form": "DLLDL",
              "all": {
                "played": 23,
                "wins": 2,
                "draws": 7,
                "losses": 14,
                "goalsFor": 19,
                "goalsAgainst": 45
              },
              "home": {
                "played": 11,
                "wins": 0,
                "draws": 3,
                "losses": 8,
                "goalsFor": 9,
                "goalsAgainst": 26
              },
              "away": {
                "played": 12,
                "wins": 2,
                "draws": 4,
                "losses": 6,
                "goalsFor": 10,
                "goalsAgainst": 19
              }
            }
          ],
          "teams": [
            {
              "teamId": 2765,
              "team": "Suwon Bluewings",
              "form": "WWWWWDLWWLDWLWWLDWDWDWWW",
              "all": {
                "played": 24,
                "wins": 15,
                "draws": 5,
                "losses": 4,
                "goalsFor": 38,
                "goalsAgainst": 20
              },
              "home": {
                "played": 12,
                "wins": 7,
                "draws": 4,
                "losses": 1,
                "goalsFor": 16,
                "goalsAgainst": 8
              },
              "away": {
                "played": 12,
                "wins": 8,
                "draws": 1,
                "losses": 3,
                "goalsFor": 22,
                "goalsAgainst": 12
              }
            },
            {
              "teamId": 2753,
              "team": "Asan Mugunghwa",
              "form": "WLLWWDDDLWLDWDWDLLWDLWL",
              "all": {
                "played": 23,
                "wins": 8,
                "draws": 7,
                "losses": 8,
                "goalsFor": 31,
                "goalsAgainst": 29
              },
              "home": {
                "played": 12,
                "wins": 6,
                "draws": 4,
                "losses": 2,
                "goalsFor": 21,
                "goalsAgainst": 15
              },
              "away": {
                "played": 11,
                "wins": 2,
                "draws": 3,
                "losses": 6,
                "goalsFor": 10,
                "goalsAgainst": 14
              }
            },
            {
              "teamId": 7078,
              "team": "Gimpo Citizen",
              "form": "WWLDDWDDLDWWWDLLDDDWDLL",
              "all": {
                "played": 23,
                "wins": 7,
                "draws": 10,
                "losses": 6,
                "goalsFor": 28,
                "goalsAgainst": 28
              },
              "home": {
                "played": 9,
                "wins": 1,
                "draws": 5,
                "losses": 3,
                "goalsFor": 11,
                "goalsAgainst": 14
              },
              "away": {
                "played": 14,
                "wins": 6,
                "draws": 5,
                "losses": 3,
                "goalsFor": 17,
                "goalsAgainst": 14
              }
            },
            {
              "teamId": 2757,
              "team": "Seongnam FC",
              "form": "DDWDWLLDWDDLDDLLWLWLWDW",
              "all": {
                "played": 23,
                "wins": 7,
                "draws": 9,
                "losses": 7,
                "goalsFor": 26,
                "goalsAgainst": 27
              },
              "home": {
                "played": 11,
                "wins": 3,
                "draws": 6,
                "losses": 2,
                "goalsFor": 11,
                "goalsAgainst": 10
              },
              "away": {
                "played": 12,
                "wins": 4,
                "draws": 3,
                "losses": 5,
                "goalsFor": 15,
                "goalsAgainst": 17
              }
            }
          ],
          "fixtures": [
            {
              "fixtureId": 1510442,
              "kickoff": "2026-09-06T19:00:00+09:00",
              "status": "FT",
              "homeTeamId": 2765,
              "homeTeam": "Suwon Bluewings",
              "awayTeamId": 2753,
              "awayTeam": "Asan Mugunghwa",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": true,
              "lineups": []
            },
            {
              "fixtureId": 1510441,
              "kickoff": "2026-09-06T19:00:00+09:00",
              "status": "FT",
              "homeTeamId": 7078,
              "homeTeam": "Gimpo Citizen",
              "awayTeamId": 2757,
              "awayTeam": "Seongnam FC",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": true,
              "lineups": []
            }
          ]
        }
      ]
    },
    {
      "date": "2026-09-07",
      "updatedAt": "2026-09-06T20:20:56.284Z",
      "leagues": [
        {
          "key": "EPL",
          "leagueId": 39,
          "season": "2026",
          "standings": [
            {
              "teamId": 50,
              "team": "Manchester City",
              "rank": 1,
              "points": 9,
              "goalsDiff": 5,
              "form": "WWW",
              "all": {
                "played": 3,
                "wins": 3,
                "draws": 0,
                "losses": 0,
                "goalsFor": 7,
                "goalsAgainst": 2
              },
              "home": {
                "played": 2,
                "wins": 2,
                "draws": 0,
                "losses": 0,
                "goalsFor": 3,
                "goalsAgainst": 1
              },
              "away": {
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 4,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 42,
              "team": "Arsenal",
              "rank": 2,
              "points": 9,
              "goalsDiff": 5,
              "form": "WWW",
              "all": {
                "played": 3,
                "wins": 3,
                "draws": 0,
                "losses": 0,
                "goalsFor": 6,
                "goalsAgainst": 1
              },
              "home": {
                "played": 2,
                "wins": 2,
                "draws": 0,
                "losses": 0,
                "goalsFor": 5,
                "goalsAgainst": 1
              },
              "away": {
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 1,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 64,
              "team": "Hull City",
              "rank": 3,
              "points": 7,
              "goalsDiff": 3,
              "form": "DWW",
              "all": {
                "played": 3,
                "wins": 2,
                "draws": 1,
                "losses": 0,
                "goalsFor": 3,
                "goalsAgainst": 0
              },
              "home": {
                "played": 2,
                "wins": 1,
                "draws": 1,
                "losses": 0,
                "goalsFor": 2,
                "goalsAgainst": 0
              },
              "away": {
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 1,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 49,
              "team": "Chelsea",
              "rank": 4,
              "points": 6,
              "goalsDiff": 1,
              "form": "LWW",
              "all": {
                "played": 3,
                "wins": 2,
                "draws": 0,
                "losses": 1,
                "goalsFor": 8,
                "goalsAgainst": 7
              },
              "home": {
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 4,
                "goalsAgainst": 3
              },
              "away": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 4,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 55,
              "team": "Brentford",
              "rank": 5,
              "points": 5,
              "goalsDiff": 3,
              "form": "DDW",
              "all": {
                "played": 3,
                "wins": 1,
                "draws": 2,
                "losses": 0,
                "goalsFor": 5,
                "goalsAgainst": 2
              },
              "home": {
                "played": 2,
                "wins": 1,
                "draws": 1,
                "losses": 0,
                "goalsFor": 4,
                "goalsAgainst": 1
              },
              "away": {
                "played": 1,
                "wins": 0,
                "draws": 1,
                "losses": 0,
                "goalsFor": 1,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 40,
              "team": "Liverpool",
              "rank": 6,
              "points": 5,
              "goalsDiff": 2,
              "form": "WDD",
              "all": {
                "played": 3,
                "wins": 1,
                "draws": 2,
                "losses": 0,
                "goalsFor": 6,
                "goalsAgainst": 4
              },
              "home": {
                "played": 1,
                "wins": 0,
                "draws": 1,
                "losses": 0,
                "goalsFor": 2,
                "goalsAgainst": 2
              },
              "away": {
                "played": 2,
                "wins": 1,
                "draws": 1,
                "losses": 0,
                "goalsFor": 4,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 34,
              "team": "Newcastle",
              "rank": 7,
              "points": 5,
              "goalsDiff": 2,
              "form": "DWD",
              "all": {
                "played": 3,
                "wins": 1,
                "draws": 2,
                "losses": 0,
                "goalsFor": 6,
                "goalsAgainst": 4
              },
              "home": {
                "played": 2,
                "wins": 0,
                "draws": 2,
                "losses": 0,
                "goalsFor": 4,
                "goalsAgainst": 4
              },
              "away": {
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 2,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 45,
              "team": "Everton",
              "rank": 8,
              "points": 5,
              "goalsDiff": 2,
              "form": "DDW",
              "all": {
                "played": 3,
                "wins": 1,
                "draws": 2,
                "losses": 0,
                "goalsFor": 5,
                "goalsAgainst": 3
              },
              "home": {
                "played": 2,
                "wins": 1,
                "draws": 1,
                "losses": 0,
                "goalsFor": 4,
                "goalsAgainst": 2
              },
              "away": {
                "played": 1,
                "wins": 0,
                "draws": 1,
                "losses": 0,
                "goalsFor": 1,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 63,
              "team": "Leeds",
              "rank": 9,
              "points": 5,
              "goalsDiff": 1,
              "form": "DDW",
              "all": {
                "played": 3,
                "wins": 1,
                "draws": 2,
                "losses": 0,
                "goalsFor": 3,
                "goalsAgainst": 2
              },
              "home": {
                "played": 1,
                "wins": 0,
                "draws": 1,
                "losses": 0,
                "goalsFor": 1,
                "goalsAgainst": 1
              },
              "away": {
                "played": 2,
                "wins": 1,
                "draws": 1,
                "losses": 0,
                "goalsFor": 2,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 51,
              "team": "Brighton",
              "rank": 10,
              "points": 4,
              "goalsDiff": 3,
              "form": "DLW",
              "all": {
                "played": 3,
                "wins": 1,
                "draws": 1,
                "losses": 1,
                "goalsFor": 8,
                "goalsAgainst": 5
              },
              "home": {
                "played": 2,
                "wins": 1,
                "draws": 1,
                "losses": 0,
                "goalsFor": 5,
                "goalsAgainst": 1
              },
              "away": {
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 33,
              "team": "Manchester United",
              "rank": 11,
              "points": 4,
              "goalsDiff": 1,
              "form": "DWL",
              "all": {
                "played": 3,
                "wins": 1,
                "draws": 1,
                "losses": 1,
                "goalsFor": 7,
                "goalsAgainst": 6
              },
              "home": {
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 5,
                "goalsAgainst": 2
              },
              "away": {
                "played": 2,
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 2,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 746,
              "team": "Sunderland",
              "rank": 12,
              "points": 4,
              "goalsDiff": 0,
              "form": "DWL",
              "all": {
                "played": 3,
                "wins": 1,
                "draws": 1,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 3
              },
              "home": {
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 1,
                "goalsAgainst": 0
              },
              "away": {
                "played": 2,
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 2,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 52,
              "team": "Crystal Palace",
              "rank": 13,
              "points": 3,
              "goalsDiff": -4,
              "form": "WLL",
              "all": {
                "played": 3,
                "wins": 1,
                "draws": 0,
                "losses": 2,
                "goalsFor": 4,
                "goalsAgainst": 8
              },
              "home": {
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 1,
                "goalsAgainst": 4
              },
              "away": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 57,
              "team": "Ipswich",
              "rank": 14,
              "points": 3,
              "goalsDiff": -4,
              "form": "LLW",
              "all": {
                "played": 3,
                "wins": 1,
                "draws": 0,
                "losses": 2,
                "goalsFor": 4,
                "goalsAgainst": 8
              },
              "home": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 2,
                "goalsAgainst": 3
              },
              "away": {
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 2,
                "goalsAgainst": 5
              }
            },
            {
              "teamId": 35,
              "team": "Bournemouth",
              "rank": 15,
              "points": 2,
              "goalsDiff": -1,
              "form": "DDL",
              "all": {
                "played": 3,
                "wins": 0,
                "draws": 2,
                "losses": 1,
                "goalsFor": 4,
                "goalsAgainst": 5
              },
              "home": {
                "played": 1,
                "wins": 0,
                "draws": 1,
                "losses": 0,
                "goalsFor": 1,
                "goalsAgainst": 1
              },
              "away": {
                "played": 2,
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 65,
              "team": "Nottingham Forest",
              "rank": 16,
              "points": 2,
              "goalsDiff": -1,
              "form": "DDL",
              "all": {
                "played": 3,
                "wins": 0,
                "draws": 2,
                "losses": 1,
                "goalsFor": 2,
                "goalsAgainst": 3
              },
              "home": {
                "played": 2,
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 0,
                "goalsAgainst": 1
              },
              "away": {
                "played": 1,
                "wins": 0,
                "draws": 1,
                "losses": 0,
                "goalsFor": 2,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 66,
              "team": "Aston Villa",
              "rank": 17,
              "points": 1,
              "goalsDiff": -5,
              "form": "DLL",
              "all": {
                "played": 3,
                "wins": 0,
                "draws": 1,
                "losses": 2,
                "goalsFor": 0,
                "goalsAgainst": 5
              },
              "home": {
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 0,
                "goalsAgainst": 1
              },
              "away": {
                "played": 2,
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 0,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 47,
              "team": "Tottenham",
              "rank": 18,
              "points": 1,
              "goalsDiff": -5,
              "form": "DLL",
              "all": {
                "played": 3,
                "wins": 0,
                "draws": 1,
                "losses": 2,
                "goalsFor": 0,
                "goalsAgainst": 5
              },
              "home": {
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 0,
                "goalsAgainst": 2
              },
              "away": {
                "played": 2,
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 0,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 36,
              "team": "Fulham",
              "rank": 19,
              "points": 0,
              "goalsDiff": -3,
              "form": "LLL",
              "all": {
                "played": 3,
                "wins": 0,
                "draws": 0,
                "losses": 3,
                "goalsFor": 4,
                "goalsAgainst": 7
              },
              "home": {
                "played": 2,
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 4,
                "goalsAgainst": 6
              },
              "away": {
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 0,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 1346,
              "team": "Coventry",
              "rank": 20,
              "points": 0,
              "goalsDiff": -5,
              "form": "LLL",
              "all": {
                "played": 3,
                "wins": 0,
                "draws": 0,
                "losses": 3,
                "goalsFor": 0,
                "goalsAgainst": 5
              },
              "home": {
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 0,
                "goalsAgainst": 1
              },
              "away": {
                "played": 2,
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 0,
                "goalsAgainst": 4
              }
            }
          ],
          "teams": [
            {
              "teamId": 42,
              "team": "Arsenal",
              "form": "WWW",
              "all": {
                "played": 3,
                "wins": 3,
                "draws": 0,
                "losses": 0,
                "goalsFor": 6,
                "goalsAgainst": 1
              },
              "home": {
                "played": 2,
                "wins": 2,
                "draws": 0,
                "losses": 0,
                "goalsFor": 5,
                "goalsAgainst": 1
              },
              "away": {
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 1,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 49,
              "team": "Chelsea",
              "form": "WWL",
              "all": {
                "played": 3,
                "wins": 2,
                "draws": 0,
                "losses": 1,
                "goalsFor": 8,
                "goalsAgainst": 7
              },
              "home": {
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 4,
                "goalsAgainst": 3
              },
              "away": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 4,
                "goalsAgainst": 4
              }
            }
          ],
          "fixtures": [
            {
              "fixtureId": 1557387,
              "kickoff": "2026-09-07T00:30:00+09:00",
              "status": "FT",
              "homeTeamId": 42,
              "homeTeam": "Arsenal",
              "awayTeamId": 49,
              "awayTeam": "Chelsea",
              "injuriesChecked": true,
              "injuries": [
                {
                  "fixtureId": 1557387,
                  "teamId": 42,
                  "playerId": 333682,
                  "player": "C. Mosquera",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1557387,
                  "teamId": 42,
                  "playerId": 22090,
                  "player": "W. Saliba",
                  "type": "Missing Fixture",
                  "reason": "Back Injury"
                },
                {
                  "fixtureId": 1557387,
                  "teamId": 42,
                  "playerId": 38746,
                  "player": "J. Timber",
                  "type": "Missing Fixture",
                  "reason": "Ankle Injury"
                },
                {
                  "fixtureId": 1557387,
                  "teamId": 49,
                  "playerId": 116117,
                  "player": "M. Caicedo",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1557387,
                  "teamId": 49,
                  "playerId": 292,
                  "player": "J. Henderson",
                  "type": "Missing Fixture",
                  "reason": "Wrist Injury"
                },
                {
                  "fixtureId": 1557387,
                  "teamId": 49,
                  "playerId": 383018,
                  "player": "M. Palestra",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                }
              ],
              "lineupsChecked": true,
              "lineups": [
                {
                  "teamId": 42,
                  "team": "Arsenal",
                  "formation": "4-2-3-1",
                  "coach": "Mikel Arteta",
                  "starters": [
                    "David Raya",
                    "B. White",
                    "E. Konsa",
                    "Gabriel Magalhães",
                    "R. Calafiori",
                    "D. Rice",
                    "M. Lewis-Skelly",
                    "B. Saka",
                    "M. Ødegaard",
                    "C. Tzolis",
                    "K. Havertz"
                  ]
                },
                {
                  "teamId": 49,
                  "team": "Chelsea",
                  "formation": "3-4-2-1",
                  "coach": "Xabi Alonso",
                  "starters": [
                    "E. Martínez",
                    "Joshua Kofi Acheampong",
                    "M. Lacroix",
                    "W. Fofana",
                    "Pedro Neto",
                    "R. Lavia",
                    "R. James",
                    "J. Hato",
                    "C. Palmer",
                    "M. Rogers",
                    "João Pedro"
                  ]
                }
              ]
            }
          ]
        },
        {
          "key": "LALIGA",
          "leagueId": 140,
          "season": "2026",
          "standings": [
            {
              "teamId": 529,
              "team": "Barcelona",
              "rank": 1,
              "points": 12,
              "goalsDiff": 15,
              "form": "WWWW",
              "all": {
                "played": 4,
                "wins": 4,
                "draws": 0,
                "losses": 0,
                "goalsFor": 17,
                "goalsAgainst": 2
              },
              "home": {
                "played": 2,
                "wins": 2,
                "draws": 0,
                "losses": 0,
                "goalsFor": 7,
                "goalsAgainst": 2
              },
              "away": {
                "played": 2,
                "wins": 2,
                "draws": 0,
                "losses": 0,
                "goalsFor": 10,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 542,
              "team": "Alaves",
              "rank": 2,
              "points": 10,
              "goalsDiff": 7,
              "form": "WWDW",
              "all": {
                "played": 4,
                "wins": 3,
                "draws": 1,
                "losses": 0,
                "goalsFor": 10,
                "goalsAgainst": 3
              },
              "home": {
                "played": 3,
                "wins": 3,
                "draws": 0,
                "losses": 0,
                "goalsFor": 9,
                "goalsAgainst": 2
              },
              "away": {
                "played": 1,
                "wins": 0,
                "draws": 1,
                "losses": 0,
                "goalsFor": 1,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 541,
              "team": "Real Madrid",
              "rank": 3,
              "points": 9,
              "goalsDiff": 7,
              "form": "LWWW",
              "all": {
                "played": 4,
                "wins": 3,
                "draws": 0,
                "losses": 1,
                "goalsFor": 10,
                "goalsAgainst": 3
              },
              "home": {
                "played": 2,
                "wins": 2,
                "draws": 0,
                "losses": 0,
                "goalsFor": 8,
                "goalsAgainst": 1
              },
              "away": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 2,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 543,
              "team": "Real Betis",
              "rank": 4,
              "points": 9,
              "goalsDiff": 0,
              "form": "WLWW",
              "all": {
                "played": 4,
                "wins": 3,
                "draws": 0,
                "losses": 1,
                "goalsFor": 5,
                "goalsAgainst": 5
              },
              "home": {
                "played": 2,
                "wins": 2,
                "draws": 0,
                "losses": 0,
                "goalsFor": 2,
                "goalsAgainst": 0
              },
              "away": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 5
              }
            },
            {
              "teamId": 544,
              "team": "Deportivo La Coruna",
              "rank": 5,
              "points": 8,
              "goalsDiff": 3,
              "form": "WWDD",
              "all": {
                "played": 4,
                "wins": 2,
                "draws": 2,
                "losses": 0,
                "goalsFor": 8,
                "goalsAgainst": 5
              },
              "home": {
                "played": 2,
                "wins": 1,
                "draws": 1,
                "losses": 0,
                "goalsFor": 4,
                "goalsAgainst": 2
              },
              "away": {
                "played": 2,
                "wins": 1,
                "draws": 1,
                "losses": 0,
                "goalsFor": 4,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 530,
              "team": "Atletico Madrid",
              "rank": 6,
              "points": 7,
              "goalsDiff": 1,
              "form": "LWDW",
              "all": {
                "played": 4,
                "wins": 2,
                "draws": 1,
                "losses": 1,
                "goalsFor": 7,
                "goalsAgainst": 6
              },
              "home": {
                "played": 2,
                "wins": 1,
                "draws": 1,
                "losses": 0,
                "goalsFor": 4,
                "goalsAgainst": 2
              },
              "away": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 727,
              "team": "Osasuna",
              "rank": 7,
              "points": 7,
              "goalsDiff": -1,
              "form": "LWWD",
              "all": {
                "played": 4,
                "wins": 2,
                "draws": 1,
                "losses": 1,
                "goalsFor": 5,
                "goalsAgainst": 6
              },
              "home": {
                "played": 2,
                "wins": 1,
                "draws": 1,
                "losses": 0,
                "goalsFor": 1,
                "goalsAgainst": 0
              },
              "away": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 4,
                "goalsAgainst": 6
              }
            },
            {
              "teamId": 536,
              "team": "Sevilla",
              "rank": 8,
              "points": 6,
              "goalsDiff": 1,
              "form": "LWW",
              "all": {
                "played": 3,
                "wins": 2,
                "draws": 0,
                "losses": 1,
                "goalsFor": 6,
                "goalsAgainst": 5
              },
              "home": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 4
              },
              "away": {
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 3,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 531,
              "team": "Athletic Club",
              "rank": 9,
              "points": 6,
              "goalsDiff": 1,
              "form": "WWLL",
              "all": {
                "played": 4,
                "wins": 2,
                "draws": 0,
                "losses": 2,
                "goalsFor": 6,
                "goalsAgainst": 5
              },
              "home": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 4,
                "goalsAgainst": 3
              },
              "away": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 2,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 539,
              "team": "Levante",
              "rank": 10,
              "points": 5,
              "goalsDiff": 0,
              "form": "DWDL",
              "all": {
                "played": 4,
                "wins": 1,
                "draws": 2,
                "losses": 1,
                "goalsFor": 5,
                "goalsAgainst": 5
              },
              "home": {
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 5,
                "goalsAgainst": 2
              },
              "away": {
                "played": 3,
                "wins": 0,
                "draws": 2,
                "losses": 1,
                "goalsFor": 0,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 4665,
              "team": "Racing Santander",
              "rank": 11,
              "points": 4,
              "goalsDiff": -1,
              "form": "LWLD",
              "all": {
                "played": 4,
                "wins": 1,
                "draws": 1,
                "losses": 2,
                "goalsFor": 7,
                "goalsAgainst": 8
              },
              "home": {
                "played": 2,
                "wins": 1,
                "draws": 1,
                "losses": 0,
                "goalsFor": 5,
                "goalsAgainst": 4
              },
              "away": {
                "played": 2,
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 2,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 728,
              "team": "Rayo Vallecano",
              "rank": 12,
              "points": 4,
              "goalsDiff": -3,
              "form": "WLDL",
              "all": {
                "played": 4,
                "wins": 1,
                "draws": 1,
                "losses": 2,
                "goalsFor": 7,
                "goalsAgainst": 10
              },
              "home": {
                "played": 2,
                "wins": 1,
                "draws": 1,
                "losses": 0,
                "goalsFor": 4,
                "goalsAgainst": 3
              },
              "away": {
                "played": 2,
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 3,
                "goalsAgainst": 7
              }
            },
            {
              "teamId": 548,
              "team": "Real Sociedad",
              "rank": 13,
              "points": 4,
              "goalsDiff": -3,
              "form": "DWLL",
              "all": {
                "played": 4,
                "wins": 1,
                "draws": 1,
                "losses": 2,
                "goalsFor": 3,
                "goalsAgainst": 6
              },
              "home": {
                "played": 2,
                "wins": 1,
                "draws": 1,
                "losses": 0,
                "goalsFor": 2,
                "goalsAgainst": 1
              },
              "away": {
                "played": 2,
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 1,
                "goalsAgainst": 5
              }
            },
            {
              "teamId": 540,
              "team": "Espanyol",
              "rank": 14,
              "points": 3,
              "goalsDiff": 1,
              "form": "LLW",
              "all": {
                "played": 3,
                "wins": 1,
                "draws": 0,
                "losses": 2,
                "goalsFor": 5,
                "goalsAgainst": 4
              },
              "home": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 4,
                "goalsAgainst": 2
              },
              "away": {
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 1,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 546,
              "team": "Getafe",
              "rank": 15,
              "points": 3,
              "goalsDiff": -3,
              "form": "LWL",
              "all": {
                "played": 3,
                "wins": 1,
                "draws": 0,
                "losses": 2,
                "goalsFor": 1,
                "goalsAgainst": 4
              },
              "home": {
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 1,
                "goalsAgainst": 0
              },
              "away": {
                "played": 2,
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 0,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 533,
              "team": "Villarreal",
              "rank": 16,
              "points": 2,
              "goalsDiff": -2,
              "form": "LLDD",
              "all": {
                "played": 4,
                "wins": 0,
                "draws": 2,
                "losses": 2,
                "goalsFor": 6,
                "goalsAgainst": 8
              },
              "home": {
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 2,
                "goalsAgainst": 3
              },
              "away": {
                "played": 3,
                "wins": 0,
                "draws": 2,
                "losses": 1,
                "goalsFor": 4,
                "goalsAgainst": 5
              }
            },
            {
              "teamId": 538,
              "team": "Celta Vigo",
              "rank": 17,
              "points": 2,
              "goalsDiff": -3,
              "form": "DLLD",
              "all": {
                "played": 4,
                "wins": 0,
                "draws": 2,
                "losses": 2,
                "goalsFor": 1,
                "goalsAgainst": 4
              },
              "home": {
                "played": 2,
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 1,
                "goalsAgainst": 4
              },
              "away": {
                "played": 2,
                "wins": 0,
                "draws": 2,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 535,
              "team": "Malaga",
              "rank": 18,
              "points": 2,
              "goalsDiff": -6,
              "form": "DLDL",
              "all": {
                "played": 4,
                "wins": 0,
                "draws": 2,
                "losses": 2,
                "goalsFor": 1,
                "goalsAgainst": 7
              },
              "home": {
                "played": 2,
                "wins": 0,
                "draws": 2,
                "losses": 0,
                "goalsFor": 1,
                "goalsAgainst": 1
              },
              "away": {
                "played": 2,
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 0,
                "goalsAgainst": 6
              }
            },
            {
              "teamId": 797,
              "team": "Elche",
              "rank": 19,
              "points": 1,
              "goalsDiff": -6,
              "form": "LLD",
              "all": {
                "played": 3,
                "wins": 0,
                "draws": 1,
                "losses": 2,
                "goalsFor": 3,
                "goalsAgainst": 9
              },
              "home": {
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 0,
                "goalsAgainst": 5
              },
              "away": {
                "played": 2,
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 532,
              "team": "Valencia",
              "rank": 20,
              "points": 1,
              "goalsDiff": -8,
              "form": "LLLD",
              "all": {
                "played": 4,
                "wins": 0,
                "draws": 1,
                "losses": 3,
                "goalsFor": 1,
                "goalsAgainst": 9
              },
              "home": {
                "played": 3,
                "wins": 0,
                "draws": 1,
                "losses": 2,
                "goalsFor": 0,
                "goalsAgainst": 6
              },
              "away": {
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 1,
                "goalsAgainst": 3
              }
            }
          ],
          "teams": [
            {
              "teamId": 535,
              "team": "Malaga",
              "form": "LDLD",
              "all": {
                "played": 4,
                "wins": 0,
                "draws": 2,
                "losses": 2,
                "goalsFor": 1,
                "goalsAgainst": 7
              },
              "home": {
                "played": 2,
                "wins": 0,
                "draws": 2,
                "losses": 0,
                "goalsFor": 1,
                "goalsAgainst": 1
              },
              "away": {
                "played": 2,
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 0,
                "goalsAgainst": 6
              }
            },
            {
              "teamId": 539,
              "team": "Levante",
              "form": "LDWD",
              "all": {
                "played": 4,
                "wins": 1,
                "draws": 2,
                "losses": 1,
                "goalsFor": 5,
                "goalsAgainst": 5
              },
              "home": {
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 5,
                "goalsAgainst": 2
              },
              "away": {
                "played": 3,
                "wins": 0,
                "draws": 2,
                "losses": 1,
                "goalsFor": 0,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 542,
              "team": "Alaves",
              "form": "WDWW",
              "all": {
                "played": 4,
                "wins": 3,
                "draws": 1,
                "losses": 0,
                "goalsFor": 10,
                "goalsAgainst": 3
              },
              "home": {
                "played": 3,
                "wins": 3,
                "draws": 0,
                "losses": 0,
                "goalsFor": 9,
                "goalsAgainst": 2
              },
              "away": {
                "played": 1,
                "wins": 0,
                "draws": 1,
                "losses": 0,
                "goalsFor": 1,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 727,
              "team": "Osasuna",
              "form": "DWWL",
              "all": {
                "played": 4,
                "wins": 2,
                "draws": 1,
                "losses": 1,
                "goalsFor": 5,
                "goalsAgainst": 6
              },
              "home": {
                "played": 2,
                "wins": 1,
                "draws": 1,
                "losses": 0,
                "goalsFor": 1,
                "goalsAgainst": 0
              },
              "away": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 4,
                "goalsAgainst": 6
              }
            },
            {
              "teamId": 540,
              "team": "Espanyol",
              "form": "WLL",
              "all": {
                "played": 3,
                "wins": 1,
                "draws": 0,
                "losses": 2,
                "goalsFor": 5,
                "goalsAgainst": 4
              },
              "home": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 4,
                "goalsAgainst": 2
              },
              "away": {
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 1,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 536,
              "team": "Sevilla",
              "form": "WWL",
              "all": {
                "played": 3,
                "wins": 2,
                "draws": 0,
                "losses": 1,
                "goalsFor": 6,
                "goalsAgainst": 5
              },
              "home": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 4
              },
              "away": {
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 3,
                "goalsAgainst": 1
              }
            }
          ],
          "fixtures": [
            {
              "fixtureId": 1570369,
              "kickoff": "2026-09-07T01:30:00+09:00",
              "status": "FT",
              "homeTeamId": 535,
              "homeTeam": "Malaga",
              "awayTeamId": 539,
              "awayTeam": "Levante",
              "injuriesChecked": true,
              "injuries": [
                {
                  "fixtureId": 1570369,
                  "teamId": 535,
                  "playerId": 47478,
                  "player": "F. Calero",
                  "type": "Missing Fixture",
                  "reason": "Ribs Injury"
                },
                {
                  "fixtureId": 1570369,
                  "teamId": 535,
                  "playerId": 328192,
                  "player": "M. Diarra",
                  "type": "Missing Fixture",
                  "reason": "Calf Injury"
                },
                {
                  "fixtureId": 1570369,
                  "teamId": 535,
                  "playerId": 182602,
                  "player": "J. Lobete",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1570369,
                  "teamId": 535,
                  "playerId": 185234,
                  "player": "D. Murillo",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1570369,
                  "teamId": 535,
                  "playerId": 444451,
                  "player": "A. Ochoa",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1570369,
                  "teamId": 535,
                  "playerId": 386850,
                  "player": "A. Nino",
                  "type": "Questionable",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1570369,
                  "teamId": 539,
                  "playerId": 378284,
                  "player": "K. Etta Eyong",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1570369,
                  "teamId": 539,
                  "playerId": 338295,
                  "player": "A. Primo",
                  "type": "Missing Fixture",
                  "reason": "Shoulder Injury"
                }
              ],
              "lineupsChecked": true,
              "lineups": [
                {
                  "teamId": 535,
                  "team": "Malaga",
                  "formation": "4-3-3",
                  "coach": "Funes",
                  "starters": [
                    "Alfonso Herrero",
                    "Rafita",
                    "Ángel Recio",
                    "Einar Galilea",
                    "José Salinas",
                    "Carlos Dotor",
                    "Pablo Martínez",
                    "Dani Lorenzo",
                    "David Larrubia",
                    "Chupe",
                    "Juan Cruz"
                  ]
                },
                {
                  "teamId": 539,
                  "team": "Levante",
                  "formation": "4-3-3",
                  "coach": "Luís Castro",
                  "starters": [
                    "M. Ryan",
                    "Nacho Pérez",
                    "Dela",
                    "A. Mandi",
                    "Manu Sánchez",
                    "E. Bardeli",
                    "Oriol Rey",
                    "Jon Ander Olasagasti",
                    "Brugui",
                    "Iván Romero",
                    "T. Fernández"
                  ]
                }
              ]
            },
            {
              "fixtureId": 1570363,
              "kickoff": "2026-09-07T01:30:00+09:00",
              "status": "FT",
              "homeTeamId": 542,
              "homeTeam": "Alaves",
              "awayTeamId": 727,
              "awayTeam": "Osasuna",
              "injuriesChecked": true,
              "injuries": [
                {
                  "fixtureId": 1570363,
                  "teamId": 542,
                  "playerId": 6638,
                  "player": "F. Garces",
                  "type": "Missing Fixture",
                  "reason": "Suspended"
                },
                {
                  "fixtureId": 1570363,
                  "teamId": 542,
                  "playerId": 47181,
                  "player": "T. Martinez",
                  "type": "Missing Fixture",
                  "reason": "Foot Injury"
                },
                {
                  "fixtureId": 1570363,
                  "teamId": 542,
                  "playerId": 332645,
                  "player": "M. Rodriguez",
                  "type": "Missing Fixture",
                  "reason": "Ankle Injury"
                },
                {
                  "fixtureId": 1570363,
                  "teamId": 727,
                  "playerId": 182592,
                  "player": "J. Herrando",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1570363,
                  "teamId": 727,
                  "playerId": 67939,
                  "player": "A. Oroz",
                  "type": "Missing Fixture",
                  "reason": "Muscle Injury"
                },
                {
                  "fixtureId": 1570363,
                  "teamId": 727,
                  "playerId": 21701,
                  "player": "V. Rosier",
                  "type": "Missing Fixture",
                  "reason": "Hamstring Injury"
                }
              ],
              "lineupsChecked": true,
              "lineups": [
                {
                  "teamId": 542,
                  "team": "Alaves",
                  "formation": "3-1-4-2",
                  "coach": "Quique Sánchez Flores",
                  "starters": [
                    "Sivera",
                    "N. Tenaglia",
                    "V. Koski",
                    "Jonny",
                    "Antonio Blanco",
                    "Angel Pérez",
                    "Pablo Ibáñez",
                    "Carles Aleñá",
                    "A. Rebbach",
                    "L. Boyé",
                    "M. Díaz"
                  ]
                },
                {
                  "teamId": 727,
                  "team": "Osasuna",
                  "formation": "4-4-2",
                  "coach": "Luis Miguel Ramis",
                  "starters": [
                    "Sergio Herrera",
                    "Íñigo Arguibide",
                    "Catena",
                    "F. Boyomo",
                    "Abel Bretones",
                    "Rubén García",
                    "Moncayola",
                    "Iker Muñoz",
                    "Moi Gómez",
                    "Raúl García",
                    "A. Budimir"
                  ]
                }
              ]
            },
            {
              "fixtureId": 1570367,
              "kickoff": "2026-09-07T04:00:00+09:00",
              "status": "2H",
              "homeTeamId": 540,
              "homeTeam": "Espanyol",
              "awayTeamId": 536,
              "awayTeam": "Sevilla",
              "injuriesChecked": true,
              "injuries": [
                {
                  "fixtureId": 1570367,
                  "teamId": 540,
                  "playerId": 47396,
                  "player": "K. Garcia",
                  "type": "Missing Fixture",
                  "reason": "Hamstring Injury"
                },
                {
                  "fixtureId": 1570367,
                  "teamId": 540,
                  "playerId": 47299,
                  "player": "A. Gorosabel",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1570367,
                  "teamId": 540,
                  "playerId": 47349,
                  "player": "J. Puado",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1570367,
                  "teamId": 536,
                  "playerId": 433,
                  "player": "Marcao",
                  "type": "Missing Fixture",
                  "reason": "Foot Injury"
                },
                {
                  "fixtureId": 1570367,
                  "teamId": 536,
                  "playerId": 48471,
                  "player": "R. Vargas",
                  "type": "Missing Fixture",
                  "reason": "Ankle Injury"
                }
              ],
              "lineupsChecked": true,
              "lineups": [
                {
                  "teamId": 540,
                  "team": "Espanyol",
                  "formation": "4-2-3-1",
                  "coach": "Manolo González",
                  "starters": [
                    "M. Dmitrović",
                    "O. El Hilali",
                    "Unai Núñez",
                    "L. Cabrera",
                    "Roger Hinojo",
                    "Gabriel Moscardo",
                    "Edu Expósito",
                    "Álex Calatrava",
                    "Javier Hernandez",
                    "T. Dolan",
                    "Roberto Fernández"
                  ]
                },
                {
                  "teamId": 536,
                  "team": "Sevilla",
                  "formation": "4-3-3",
                  "coach": "Luis García",
                  "starters": [
                    "O. Vlachodimos",
                    "Juan Iglesias",
                    "A. Sangante",
                    "Kike Salas",
                    "G. Suazo",
                    "G. Kochorashvili",
                    "L. Agoumé",
                    "Jon Guridi",
                    "Miguel Ángel",
                    "R. Ure",
                    "C. Ejuke"
                  ]
                }
              ]
            }
          ]
        },
        {
          "key": "SERIEA",
          "leagueId": 135,
          "season": "2026",
          "standings": [
            {
              "teamId": 497,
              "team": "AS Roma",
              "rank": 1,
              "points": 9,
              "goalsDiff": 9,
              "form": "WWW",
              "all": {
                "played": 3,
                "wins": 3,
                "draws": 0,
                "losses": 0,
                "goalsFor": 10,
                "goalsAgainst": 1
              },
              "home": {
                "played": 2,
                "wins": 2,
                "draws": 0,
                "losses": 0,
                "goalsFor": 6,
                "goalsAgainst": 1
              },
              "away": {
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 4,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 505,
              "team": "Inter",
              "rank": 2,
              "points": 9,
              "goalsDiff": 5,
              "form": "WWW",
              "all": {
                "played": 3,
                "wins": 3,
                "draws": 0,
                "losses": 0,
                "goalsFor": 8,
                "goalsAgainst": 3
              },
              "home": {
                "played": 2,
                "wins": 2,
                "draws": 0,
                "losses": 0,
                "goalsFor": 7,
                "goalsAgainst": 3
              },
              "away": {
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 1,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 895,
              "team": "Como",
              "rank": 3,
              "points": 7,
              "goalsDiff": 4,
              "form": "WWD",
              "all": {
                "played": 3,
                "wins": 2,
                "draws": 1,
                "losses": 0,
                "goalsFor": 7,
                "goalsAgainst": 3
              },
              "home": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "away": {
                "played": 3,
                "wins": 2,
                "draws": 1,
                "losses": 0,
                "goalsFor": 7,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 489,
              "team": "AC Milan",
              "rank": 4,
              "points": 6,
              "goalsDiff": 3,
              "form": "WW",
              "all": {
                "played": 2,
                "wins": 2,
                "draws": 0,
                "losses": 0,
                "goalsFor": 4,
                "goalsAgainst": 1
              },
              "home": {
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 2,
                "goalsAgainst": 0
              },
              "away": {
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 2,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 496,
              "team": "Juventus",
              "rank": 5,
              "points": 6,
              "goalsDiff": 3,
              "form": "WW",
              "all": {
                "played": 2,
                "wins": 2,
                "draws": 0,
                "losses": 0,
                "goalsFor": 3,
                "goalsAgainst": 0
              },
              "home": {
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 2,
                "goalsAgainst": 0
              },
              "away": {
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 1,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 487,
              "team": "Lazio",
              "rank": 6,
              "points": 6,
              "goalsDiff": 2,
              "form": "WW",
              "all": {
                "played": 2,
                "wins": 2,
                "draws": 0,
                "losses": 0,
                "goalsFor": 2,
                "goalsAgainst": 0
              },
              "home": {
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 1,
                "goalsAgainst": 0
              },
              "away": {
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 1,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 512,
              "team": "Frosinone",
              "rank": 7,
              "points": 6,
              "goalsDiff": 3,
              "form": "WWL",
              "all": {
                "played": 3,
                "wins": 2,
                "draws": 0,
                "losses": 1,
                "goalsFor": 6,
                "goalsAgainst": 3
              },
              "home": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 3
              },
              "away": {
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 3,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 499,
              "team": "Atalanta",
              "rank": 8,
              "points": 6,
              "goalsDiff": 1,
              "form": "LWW",
              "all": {
                "played": 3,
                "wins": 2,
                "draws": 0,
                "losses": 1,
                "goalsFor": 4,
                "goalsAgainst": 3
              },
              "home": {
                "played": 2,
                "wins": 2,
                "draws": 0,
                "losses": 0,
                "goalsFor": 3,
                "goalsAgainst": 1
              },
              "away": {
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 1,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 494,
              "team": "Udinese",
              "rank": 9,
              "points": 4,
              "goalsDiff": 1,
              "form": "WD",
              "all": {
                "played": 2,
                "wins": 1,
                "draws": 1,
                "losses": 0,
                "goalsFor": 4,
                "goalsAgainst": 3
              },
              "home": {
                "played": 1,
                "wins": 0,
                "draws": 1,
                "losses": 0,
                "goalsFor": 1,
                "goalsAgainst": 1
              },
              "away": {
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 3,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 488,
              "team": "Sassuolo",
              "rank": 10,
              "points": 4,
              "goalsDiff": 0,
              "form": "DWL",
              "all": {
                "played": 3,
                "wins": 1,
                "draws": 1,
                "losses": 1,
                "goalsFor": 5,
                "goalsAgainst": 5
              },
              "home": {
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 2,
                "goalsAgainst": 1
              },
              "away": {
                "played": 2,
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 490,
              "team": "Cagliari",
              "rank": 11,
              "points": 3,
              "goalsDiff": 0,
              "form": "LW",
              "all": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 1,
                "goalsAgainst": 1
              },
              "home": {
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 0,
                "goalsAgainst": 1
              },
              "away": {
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 1,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 867,
              "team": "Lecce",
              "rank": 12,
              "points": 3,
              "goalsDiff": -2,
              "form": "LW",
              "all": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 2,
                "goalsAgainst": 4
              },
              "home": {
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 0,
                "goalsAgainst": 4
              },
              "away": {
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 2,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 492,
              "team": "Napoli",
              "rank": 13,
              "points": 3,
              "goalsDiff": 0,
              "form": "LLW",
              "all": {
                "played": 3,
                "wins": 1,
                "draws": 0,
                "losses": 2,
                "goalsFor": 5,
                "goalsAgainst": 5
              },
              "home": {
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 1,
                "goalsAgainst": 2
              },
              "away": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 4,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 503,
              "team": "Torino",
              "rank": 14,
              "points": 3,
              "goalsDiff": -1,
              "form": "WLL",
              "all": {
                "played": 3,
                "wins": 1,
                "draws": 0,
                "losses": 2,
                "goalsFor": 4,
                "goalsAgainst": 5
              },
              "home": {
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 1,
                "goalsAgainst": 2
              },
              "away": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 500,
              "team": "Bologna",
              "rank": 15,
              "points": 1,
              "goalsDiff": -2,
              "form": "DLL",
              "all": {
                "played": 3,
                "wins": 0,
                "draws": 1,
                "losses": 2,
                "goalsFor": 2,
                "goalsAgainst": 4
              },
              "home": {
                "played": 2,
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 2,
                "goalsAgainst": 3
              },
              "away": {
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 0,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 523,
              "team": "Parma",
              "rank": 16,
              "points": 1,
              "goalsDiff": -3,
              "form": "DLL",
              "all": {
                "played": 3,
                "wins": 0,
                "draws": 1,
                "losses": 2,
                "goalsFor": 1,
                "goalsAgainst": 4
              },
              "home": {
                "played": 2,
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 1,
                "goalsAgainst": 2
              },
              "away": {
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 0,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 1579,
              "team": "Monza",
              "rank": 17,
              "points": 1,
              "goalsDiff": -4,
              "form": "DLL",
              "all": {
                "played": 3,
                "wins": 0,
                "draws": 1,
                "losses": 2,
                "goalsFor": 4,
                "goalsAgainst": 8
              },
              "home": {
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 2,
                "goalsAgainst": 3
              },
              "away": {
                "played": 2,
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 2,
                "goalsAgainst": 5
              }
            },
            {
              "teamId": 517,
              "team": "Venezia",
              "rank": 18,
              "points": 0,
              "goalsDiff": -5,
              "form": "LLL",
              "all": {
                "played": 3,
                "wins": 0,
                "draws": 0,
                "losses": 3,
                "goalsFor": 2,
                "goalsAgainst": 7
              },
              "home": {
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 0,
                "goalsAgainst": 2
              },
              "away": {
                "played": 2,
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 2,
                "goalsAgainst": 5
              }
            },
            {
              "teamId": 495,
              "team": "Genoa",
              "rank": 19,
              "points": 0,
              "goalsDiff": -6,
              "form": "LLL",
              "all": {
                "played": 3,
                "wins": 0,
                "draws": 0,
                "losses": 3,
                "goalsFor": 1,
                "goalsAgainst": 7
              },
              "home": {
                "played": 2,
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 1,
                "goalsAgainst": 6
              },
              "away": {
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 0,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 502,
              "team": "Fiorentina",
              "rank": 20,
              "points": 0,
              "goalsDiff": -8,
              "form": "LLL",
              "all": {
                "played": 3,
                "wins": 0,
                "draws": 0,
                "losses": 3,
                "goalsFor": 1,
                "goalsAgainst": 9
              },
              "home": {
                "played": 2,
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 1,
                "goalsAgainst": 5
              },
              "away": {
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 0,
                "goalsAgainst": 4
              }
            }
          ],
          "teams": [
            {
              "teamId": 500,
              "team": "Bologna",
              "form": "LLD",
              "all": {
                "played": 3,
                "wins": 0,
                "draws": 1,
                "losses": 2,
                "goalsFor": 2,
                "goalsAgainst": 4
              },
              "home": {
                "played": 2,
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 2,
                "goalsAgainst": 3
              },
              "away": {
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 0,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 488,
              "team": "Sassuolo",
              "form": "LWD",
              "all": {
                "played": 3,
                "wins": 1,
                "draws": 1,
                "losses": 1,
                "goalsFor": 5,
                "goalsAgainst": 5
              },
              "home": {
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 2,
                "goalsAgainst": 1
              },
              "away": {
                "played": 2,
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 496,
              "team": "Juventus",
              "form": "WW",
              "all": {
                "played": 2,
                "wins": 2,
                "draws": 0,
                "losses": 0,
                "goalsFor": 3,
                "goalsAgainst": 0
              },
              "home": {
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 2,
                "goalsAgainst": 0
              },
              "away": {
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 1,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 489,
              "team": "AC Milan",
              "form": "WW",
              "all": {
                "played": 2,
                "wins": 2,
                "draws": 0,
                "losses": 0,
                "goalsFor": 4,
                "goalsAgainst": 1
              },
              "home": {
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 2,
                "goalsAgainst": 0
              },
              "away": {
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 2,
                "goalsAgainst": 1
              }
            }
          ],
          "fixtures": [
            {
              "fixtureId": 1550108,
              "kickoff": "2026-09-07T01:00:00+09:00",
              "status": "FT",
              "homeTeamId": 500,
              "homeTeam": "Bologna",
              "awayTeamId": 488,
              "awayTeam": "Sassuolo",
              "injuriesChecked": true,
              "injuries": [
                {
                  "fixtureId": 1550108,
                  "teamId": 500,
                  "playerId": 319919,
                  "player": "O. El Azzouzi",
                  "type": "Missing Fixture",
                  "reason": "Thigh Injury"
                },
                {
                  "fixtureId": 1550108,
                  "teamId": 500,
                  "playerId": 30488,
                  "player": "R. Orsolini",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1550108,
                  "teamId": 488,
                  "playerId": 291780,
                  "player": "D. Boloca",
                  "type": "Missing Fixture",
                  "reason": "Muscle Injury"
                },
                {
                  "fixtureId": 1550108,
                  "teamId": 488,
                  "playerId": 41371,
                  "player": "F. Cande",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1550108,
                  "teamId": 488,
                  "playerId": 328046,
                  "player": "I. Kone",
                  "type": "Missing Fixture",
                  "reason": "Broken Leg"
                },
                {
                  "fixtureId": 1550108,
                  "teamId": 488,
                  "playerId": 59513,
                  "player": "Y. Paz",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1550108,
                  "teamId": 488,
                  "playerId": 342055,
                  "player": "E. Pieragnolo",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1550108,
                  "teamId": 488,
                  "playerId": 40582,
                  "player": "S. Walukiewicz",
                  "type": "Missing Fixture",
                  "reason": "Muscle Injury"
                }
              ],
              "lineupsChecked": true,
              "lineups": [
                {
                  "teamId": 500,
                  "team": "Bologna",
                  "formation": "4-2-3-1",
                  "coach": "D. Tedesco",
                  "starters": [
                    "Ł. Skorupski",
                    "E. Holm",
                    "T. Heggem",
                    "A. Theate",
                    "R. Alhassane",
                    "L. Ferguson",
                    "T. Pobega",
                    "F. Bernardeschi",
                    "J. Odgaard",
                    "N. Cambiaghi",
                    "R. Piccoli"
                  ]
                },
                {
                  "teamId": 488,
                  "team": "Sassuolo",
                  "formation": "4-3-3",
                  "coach": "A. Aquilani",
                  "starters": [
                    "A. Murić",
                    "S. Cinquegrano",
                    "J. Idzes",
                    "F. Leysen",
                    "J. Doig",
                    "Vasilije Adžić",
                    "N. Matić",
                    "L. Lipani",
                    "C. Volpato",
                    "K. Bowie",
                    "A. Laurienté"
                  ]
                }
              ]
            },
            {
              "fixtureId": 1550114,
              "kickoff": "2026-09-07T03:45:00+09:00",
              "status": "2H",
              "homeTeamId": 496,
              "homeTeam": "Juventus",
              "awayTeamId": 489,
              "awayTeam": "AC Milan",
              "injuriesChecked": true,
              "injuries": [
                {
                  "fixtureId": 1550114,
                  "teamId": 496,
                  "playerId": 125674,
                  "player": "J. Cabal",
                  "type": "Missing Fixture",
                  "reason": "Thigh Injury"
                },
                {
                  "fixtureId": 1550114,
                  "teamId": 496,
                  "playerId": 127011,
                  "player": "A. Cambiaso",
                  "type": "Missing Fixture",
                  "reason": "Ankle Injury"
                },
                {
                  "fixtureId": 1550114,
                  "teamId": 496,
                  "playerId": 451504,
                  "player": "J. Ekhator",
                  "type": "Missing Fixture",
                  "reason": "Muscle Injury"
                },
                {
                  "fixtureId": 1550114,
                  "teamId": 496,
                  "playerId": 415,
                  "player": "W. McKennie",
                  "type": "Missing Fixture",
                  "reason": "Muscle Injury"
                },
                {
                  "fixtureId": 1550114,
                  "teamId": 496,
                  "playerId": 333,
                  "player": "A. Milik",
                  "type": "Missing Fixture",
                  "reason": "Inactive"
                },
                {
                  "fixtureId": 1550114,
                  "teamId": 496,
                  "playerId": 237129,
                  "player": "P. M. Sarr",
                  "type": "Missing Fixture",
                  "reason": "Muscle Injury"
                },
                {
                  "fixtureId": 1550114,
                  "teamId": 496,
                  "playerId": 116,
                  "player": "K. Thuram",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1550114,
                  "teamId": 496,
                  "playerId": 339883,
                  "player": "K. Yildiz",
                  "type": "Missing Fixture",
                  "reason": "Foot Injury"
                },
                {
                  "fixtureId": 1550114,
                  "teamId": 489,
                  "playerId": 56473,
                  "player": "M. Gabbia",
                  "type": "Missing Fixture",
                  "reason": "Ankle Injury"
                }
              ],
              "lineupsChecked": true,
              "lineups": [
                {
                  "teamId": 496,
                  "team": "Juventus",
                  "formation": "4-2-3-1",
                  "coach": "L. Spalletti",
                  "starters": [
                    "G. Vicario",
                    "P. Kalulu",
                    "Bremer",
                    "J. Lucumí",
                    "Z. Çelik",
                    "M. Locatelli",
                    "Douglas Luiz",
                    "Francisco Conceição",
                    "N. González",
                    "Kerim-Sam Alajbegović",
                    "R. Kolo Muani"
                  ]
                },
                {
                  "teamId": 489,
                  "team": "AC Milan",
                  "formation": "3-4-2-1",
                  "coach": "Ruben Amorim",
                  "starters": [
                    "M. Maignan",
                    "Mario Gila",
                    "K. De Winter",
                    "S. Pavlović",
                    "Diego Moreira",
                    "L. Modrić",
                    "Y. Musah",
                    "P. Estupiñán",
                    "A. Rabiot",
                    "A. Saelemaekers",
                    "Gonçalo Ramos"
                  ]
                }
              ]
            }
          ]
        },
        {
          "key": "BUNDESLIGA",
          "leagueId": 78,
          "season": "2026",
          "standings": [
            {
              "teamId": 170,
              "team": "FC Augsburg",
              "rank": 1,
              "points": 6,
              "goalsDiff": 6,
              "form": "WW",
              "all": {
                "played": 2,
                "wins": 2,
                "draws": 0,
                "losses": 0,
                "goalsFor": 7,
                "goalsAgainst": 1
              },
              "home": {
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 3,
                "goalsAgainst": 0
              },
              "away": {
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 4,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 160,
              "team": "SC Freiburg",
              "rank": 2,
              "points": 6,
              "goalsDiff": 4,
              "form": "WW",
              "all": {
                "played": 2,
                "wins": 2,
                "draws": 0,
                "losses": 0,
                "goalsFor": 5,
                "goalsAgainst": 1
              },
              "home": {
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 4,
                "goalsAgainst": 1
              },
              "away": {
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 1,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 165,
              "team": "Borussia Dortmund",
              "rank": 3,
              "points": 6,
              "goalsDiff": 3,
              "form": "WW",
              "all": {
                "played": 2,
                "wins": 2,
                "draws": 0,
                "losses": 0,
                "goalsFor": 5,
                "goalsAgainst": 2
              },
              "home": {
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 2,
                "goalsAgainst": 0
              },
              "away": {
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 3,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 1660,
              "team": "SV Elversberg",
              "rank": 4,
              "points": 6,
              "goalsDiff": 2,
              "form": "WW",
              "all": {
                "played": 2,
                "wins": 2,
                "draws": 0,
                "losses": 0,
                "goalsFor": 7,
                "goalsAgainst": 5
              },
              "home": {
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 3,
                "goalsAgainst": 2
              },
              "away": {
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 4,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 164,
              "team": "FSV Mainz 05",
              "rank": 5,
              "points": 4,
              "goalsDiff": 5,
              "form": "WD",
              "all": {
                "played": 2,
                "wins": 1,
                "draws": 1,
                "losses": 0,
                "goalsFor": 5,
                "goalsAgainst": 0
              },
              "home": {
                "played": 1,
                "wins": 0,
                "draws": 1,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "away": {
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 5,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 157,
              "team": "Bayern München",
              "rank": 6,
              "points": 4,
              "goalsDiff": 4,
              "form": "DW",
              "all": {
                "played": 2,
                "wins": 1,
                "draws": 1,
                "losses": 0,
                "goalsFor": 5,
                "goalsAgainst": 1
              },
              "home": {
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 5,
                "goalsAgainst": 1
              },
              "away": {
                "played": 1,
                "wins": 0,
                "draws": 1,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 168,
              "team": "Bayer Leverkusen",
              "rank": 7,
              "points": 3,
              "goalsDiff": 3,
              "form": "WL",
              "all": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 6,
                "goalsAgainst": 3
              },
              "home": {
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 4,
                "goalsAgainst": 0
              },
              "away": {
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 2,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 173,
              "team": "RB Leipzig",
              "rank": 8,
              "points": 3,
              "goalsDiff": 1,
              "form": "LW",
              "all": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 4,
                "goalsAgainst": 3
              },
              "home": {
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 3,
                "goalsAgainst": 0
              },
              "away": {
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 1,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 172,
              "team": "VfB Stuttgart",
              "rank": 9,
              "points": 3,
              "goalsDiff": -1,
              "form": "WL",
              "all": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 5,
                "goalsAgainst": 6
              },
              "home": {
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 4,
                "goalsAgainst": 1
              },
              "away": {
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 1,
                "goalsAgainst": 5
              }
            },
            {
              "teamId": 162,
              "team": "Werder Bremen",
              "rank": 10,
              "points": 3,
              "goalsDiff": -1,
              "form": "WL",
              "all": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 4,
                "goalsAgainst": 5
              },
              "home": {
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 3,
                "goalsAgainst": 1
              },
              "away": {
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 1,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 192,
              "team": "1. FC Köln",
              "rank": 11,
              "points": 3,
              "goalsDiff": -2,
              "form": "LW",
              "all": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 4,
                "goalsAgainst": 6
              },
              "home": {
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 3,
                "goalsAgainst": 2
              },
              "away": {
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 1,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 185,
              "team": "SC Paderborn 07",
              "rank": 12,
              "points": 1,
              "goalsDiff": -1,
              "form": "LD",
              "all": {
                "played": 2,
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 0,
                "goalsAgainst": 1
              },
              "home": {
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 0,
                "goalsAgainst": 1
              },
              "away": {
                "played": 1,
                "wins": 0,
                "draws": 1,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 169,
              "team": "Eintracht Frankfurt",
              "rank": 13,
              "points": 1,
              "goalsDiff": -3,
              "form": "LD",
              "all": {
                "played": 2,
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 4,
                "goalsAgainst": 7
              },
              "home": {
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 1,
                "goalsAgainst": 4
              },
              "away": {
                "played": 1,
                "wins": 0,
                "draws": 1,
                "losses": 0,
                "goalsFor": 3,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 174,
              "team": "FC Schalke 04",
              "rank": 14,
              "points": 1,
              "goalsDiff": -3,
              "form": "DL",
              "all": {
                "played": 2,
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 0,
                "goalsAgainst": 3
              },
              "home": {
                "played": 1,
                "wins": 0,
                "draws": 1,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "away": {
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 0,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 182,
              "team": "Union Berlin",
              "rank": 15,
              "points": 1,
              "goalsDiff": -4,
              "form": "LD",
              "all": {
                "played": 2,
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 7
              },
              "home": {
                "played": 1,
                "wins": 0,
                "draws": 1,
                "losses": 0,
                "goalsFor": 3,
                "goalsAgainst": 3
              },
              "away": {
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 0,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 167,
              "team": "1899 Hoffenheim",
              "rank": 16,
              "points": 0,
              "goalsDiff": -2,
              "form": "LL",
              "all": {
                "played": 2,
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 4,
                "goalsAgainst": 6
              },
              "home": {
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 2,
                "goalsAgainst": 3
              },
              "away": {
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 2,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 163,
              "team": "Borussia Mönchengladbach",
              "rank": 17,
              "points": 0,
              "goalsDiff": -4,
              "form": "LL",
              "all": {
                "played": 2,
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 3,
                "goalsAgainst": 7
              },
              "home": {
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 4
              },
              "away": {
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 0,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 175,
              "team": "Hamburger SV",
              "rank": 18,
              "points": 0,
              "goalsDiff": -7,
              "form": "LL",
              "all": {
                "played": 2,
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 0,
                "goalsAgainst": 7
              },
              "home": {
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 0,
                "goalsAgainst": 5
              },
              "away": {
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 0,
                "goalsAgainst": 2
              }
            }
          ],
          "teams": [
            {
              "teamId": 169,
              "team": "Eintracht Frankfurt",
              "form": "DL",
              "all": {
                "played": 2,
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 4,
                "goalsAgainst": 7
              },
              "home": {
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 1,
                "goalsAgainst": 4
              },
              "away": {
                "played": 1,
                "wins": 0,
                "draws": 1,
                "losses": 0,
                "goalsFor": 3,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 170,
              "team": "FC Augsburg",
              "form": "WW",
              "all": {
                "played": 2,
                "wins": 2,
                "draws": 0,
                "losses": 0,
                "goalsFor": 7,
                "goalsAgainst": 1
              },
              "home": {
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 3,
                "goalsAgainst": 0
              },
              "away": {
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 4,
                "goalsAgainst": 1
              }
            }
          ],
          "fixtures": [
            {
              "fixtureId": 1575152,
              "kickoff": "2026-09-07T00:30:00+09:00",
              "status": "FT",
              "homeTeamId": 169,
              "homeTeam": "Eintracht Frankfurt",
              "awayTeamId": 170,
              "awayTeam": "FC Augsburg",
              "injuriesChecked": true,
              "injuries": [
                {
                  "fixtureId": 1575152,
                  "teamId": 169,
                  "playerId": 269531,
                  "player": "N. Collins",
                  "type": "Missing Fixture",
                  "reason": "Back Injury"
                },
                {
                  "fixtureId": 1575152,
                  "teamId": 169,
                  "playerId": 161922,
                  "player": "A. Knauff",
                  "type": "Missing Fixture",
                  "reason": "Muscle Injury"
                },
                {
                  "fixtureId": 1575152,
                  "teamId": 169,
                  "playerId": 162771,
                  "player": "J. Ngankam",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1575152,
                  "teamId": 170,
                  "playerId": 202755,
                  "player": "T. Breithaupt",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1575152,
                  "teamId": 170,
                  "playerId": 14395,
                  "player": "K. Jakic",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1575152,
                  "teamId": 170,
                  "playerId": 279993,
                  "player": "A. Kade",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1575152,
                  "teamId": 170,
                  "playerId": 3395,
                  "player": "S. Mounie",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                }
              ],
              "lineupsChecked": true,
              "lineups": [
                {
                  "teamId": 169,
                  "team": "Eintracht Frankfurt",
                  "formation": "4-4-2",
                  "coach": "A. Hütter",
                  "starters": [
                    "N. Atubolu",
                    "Elias Baum",
                    "R. Koch",
                    "L. Brassier",
                    "K. Kosugi",
                    "R. Dōan",
                    "M. Götze",
                    "R. Onyedika",
                    "C. Uzun",
                    "Y. Ebnoutalib",
                    "J. Burkardt"
                  ]
                },
                {
                  "teamId": 170,
                  "team": "FC Augsburg",
                  "formation": "5-3-2",
                  "coach": "M. Baum",
                  "starters": [
                    "F. Dahmen",
                    "M. Wolf",
                    "Noahkai Kai Daniel Banks",
                    "C. Matsima",
                    "C. Brackelmann",
                    "Hennes Behrens",
                    "H. Massengo",
                    "F. Rieder",
                    "R. Fellhauer",
                    "A. Ibrahimović",
                    "M. Gregoritsch"
                  ]
                }
              ]
            }
          ]
        },
        {
          "key": "LIGUE1",
          "leagueId": 61,
          "season": "2026",
          "standings": [
            {
              "teamId": 91,
              "team": "Monaco",
              "rank": 1,
              "points": 9,
              "goalsDiff": 4,
              "form": "WWW",
              "all": {
                "played": 3,
                "wins": 3,
                "draws": 0,
                "losses": 0,
                "goalsFor": 5,
                "goalsAgainst": 1
              },
              "home": {
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 2,
                "goalsAgainst": 0
              },
              "away": {
                "played": 2,
                "wins": 2,
                "draws": 0,
                "losses": 0,
                "goalsFor": 3,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 80,
              "team": "Lyon",
              "rank": 2,
              "points": 7,
              "goalsDiff": 4,
              "form": "WDW",
              "all": {
                "played": 3,
                "wins": 2,
                "draws": 1,
                "losses": 0,
                "goalsFor": 6,
                "goalsAgainst": 2
              },
              "home": {
                "played": 2,
                "wins": 1,
                "draws": 1,
                "losses": 0,
                "goalsFor": 4,
                "goalsAgainst": 2
              },
              "away": {
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 2,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 79,
              "team": "Lille",
              "rank": 3,
              "points": 7,
              "goalsDiff": 3,
              "form": "WDW",
              "all": {
                "played": 3,
                "wins": 2,
                "draws": 1,
                "losses": 0,
                "goalsFor": 5,
                "goalsAgainst": 2
              },
              "home": {
                "played": 1,
                "wins": 0,
                "draws": 1,
                "losses": 0,
                "goalsFor": 2,
                "goalsAgainst": 2
              },
              "away": {
                "played": 2,
                "wins": 2,
                "draws": 0,
                "losses": 0,
                "goalsFor": 3,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 94,
              "team": "Rennes",
              "rank": 4,
              "points": 7,
              "goalsDiff": 2,
              "form": "WWD",
              "all": {
                "played": 3,
                "wins": 2,
                "draws": 1,
                "losses": 0,
                "goalsFor": 7,
                "goalsAgainst": 5
              },
              "home": {
                "played": 2,
                "wins": 1,
                "draws": 1,
                "losses": 0,
                "goalsFor": 5,
                "goalsAgainst": 4
              },
              "away": {
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 2,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 95,
              "team": "Strasbourg",
              "rank": 5,
              "points": 6,
              "goalsDiff": 1,
              "form": "WWL",
              "all": {
                "played": 3,
                "wins": 2,
                "draws": 0,
                "losses": 1,
                "goalsFor": 8,
                "goalsAgainst": 7
              },
              "home": {
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 2,
                "goalsAgainst": 1
              },
              "away": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 6,
                "goalsAgainst": 6
              }
            },
            {
              "teamId": 106,
              "team": "Stade Brestois 29",
              "rank": 6,
              "points": 5,
              "goalsDiff": 1,
              "form": "WDD",
              "all": {
                "played": 3,
                "wins": 1,
                "draws": 2,
                "losses": 0,
                "goalsFor": 6,
                "goalsAgainst": 5
              },
              "home": {
                "played": 1,
                "wins": 0,
                "draws": 1,
                "losses": 0,
                "goalsFor": 2,
                "goalsAgainst": 2
              },
              "away": {
                "played": 2,
                "wins": 1,
                "draws": 1,
                "losses": 0,
                "goalsFor": 4,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 114,
              "team": "Paris FC",
              "rank": 7,
              "points": 4,
              "goalsDiff": 3,
              "form": "WD",
              "all": {
                "played": 2,
                "wins": 1,
                "draws": 1,
                "losses": 0,
                "goalsFor": 3,
                "goalsAgainst": 0
              },
              "home": {
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 3,
                "goalsAgainst": 0
              },
              "away": {
                "played": 1,
                "wins": 0,
                "draws": 1,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 97,
              "team": "Lorient",
              "rank": 8,
              "points": 4,
              "goalsDiff": 0,
              "form": "WLD",
              "all": {
                "played": 3,
                "wins": 1,
                "draws": 1,
                "losses": 1,
                "goalsFor": 2,
                "goalsAgainst": 2
              },
              "home": {
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 1,
                "goalsAgainst": 2
              },
              "away": {
                "played": 2,
                "wins": 1,
                "draws": 1,
                "losses": 0,
                "goalsFor": 1,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 110,
              "team": "Estac Troyes",
              "rank": 9,
              "points": 4,
              "goalsDiff": -3,
              "form": "LWD",
              "all": {
                "played": 3,
                "wins": 1,
                "draws": 1,
                "losses": 1,
                "goalsFor": 4,
                "goalsAgainst": 7
              },
              "home": {
                "played": 2,
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 2,
                "goalsAgainst": 6
              },
              "away": {
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 2,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 81,
              "team": "Marseille",
              "rank": 10,
              "points": 3,
              "goalsDiff": 2,
              "form": "LW",
              "all": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 4,
                "goalsAgainst": 2
              },
              "home": {
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 4,
                "goalsAgainst": 0
              },
              "away": {
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 0,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 116,
              "team": "Lens",
              "rank": 11,
              "points": 3,
              "goalsDiff": 1,
              "form": "LLW",
              "all": {
                "played": 3,
                "wins": 1,
                "draws": 0,
                "losses": 2,
                "goalsFor": 6,
                "goalsAgainst": 5
              },
              "home": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 5,
                "goalsAgainst": 3
              },
              "away": {
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 1,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 77,
              "team": "Angers",
              "rank": 12,
              "points": 3,
              "goalsDiff": -1,
              "form": "LWL",
              "all": {
                "played": 3,
                "wins": 1,
                "draws": 0,
                "losses": 2,
                "goalsFor": 4,
                "goalsAgainst": 5
              },
              "home": {
                "played": 2,
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 1,
                "goalsAgainst": 4
              },
              "away": {
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 3,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 85,
              "team": "Paris Saint Germain",
              "rank": 13,
              "points": 2,
              "goalsDiff": -1,
              "form": "LDD",
              "all": {
                "played": 3,
                "wins": 0,
                "draws": 2,
                "losses": 1,
                "goalsFor": 5,
                "goalsAgainst": 6
              },
              "home": {
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 1,
                "goalsAgainst": 2
              },
              "away": {
                "played": 2,
                "wins": 0,
                "draws": 2,
                "losses": 0,
                "goalsFor": 4,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 1298,
              "team": "Le Mans",
              "rank": 14,
              "points": 2,
              "goalsDiff": -1,
              "form": "DLD",
              "all": {
                "played": 3,
                "wins": 0,
                "draws": 2,
                "losses": 1,
                "goalsFor": 5,
                "goalsAgainst": 6
              },
              "home": {
                "played": 1,
                "wins": 0,
                "draws": 1,
                "losses": 0,
                "goalsFor": 2,
                "goalsAgainst": 2
              },
              "away": {
                "played": 2,
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 84,
              "team": "Nice",
              "rank": 15,
              "points": 2,
              "goalsDiff": -3,
              "form": "DLD",
              "all": {
                "played": 3,
                "wins": 0,
                "draws": 2,
                "losses": 1,
                "goalsFor": 1,
                "goalsAgainst": 4
              },
              "home": {
                "played": 2,
                "wins": 0,
                "draws": 2,
                "losses": 0,
                "goalsFor": 1,
                "goalsAgainst": 1
              },
              "away": {
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 0,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 111,
              "team": "Le Havre",
              "rank": 16,
              "points": 1,
              "goalsDiff": -2,
              "form": "LDL",
              "all": {
                "played": 3,
                "wins": 0,
                "draws": 1,
                "losses": 2,
                "goalsFor": 2,
                "goalsAgainst": 4
              },
              "home": {
                "played": 2,
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 1,
                "goalsAgainst": 3
              },
              "away": {
                "played": 1,
                "wins": 0,
                "draws": 1,
                "losses": 0,
                "goalsFor": 1,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 96,
              "team": "Toulouse",
              "rank": 17,
              "points": 1,
              "goalsDiff": -3,
              "form": "LDL",
              "all": {
                "played": 3,
                "wins": 0,
                "draws": 1,
                "losses": 2,
                "goalsFor": 2,
                "goalsAgainst": 5
              },
              "home": {
                "played": 2,
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 0,
                "goalsAgainst": 3
              },
              "away": {
                "played": 1,
                "wins": 0,
                "draws": 1,
                "losses": 0,
                "goalsFor": 2,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 108,
              "team": "Auxerre",
              "rank": 18,
              "points": 0,
              "goalsDiff": -7,
              "form": "LLL",
              "all": {
                "played": 3,
                "wins": 0,
                "draws": 0,
                "losses": 3,
                "goalsFor": 4,
                "goalsAgainst": 11
              },
              "home": {
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 1,
                "goalsAgainst": 3
              },
              "away": {
                "played": 2,
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 3,
                "goalsAgainst": 8
              }
            }
          ],
          "teams": [
            {
              "teamId": 77,
              "team": "Angers",
              "form": "LWL",
              "all": {
                "played": 3,
                "wins": 1,
                "draws": 0,
                "losses": 2,
                "goalsFor": 4,
                "goalsAgainst": 5
              },
              "home": {
                "played": 2,
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 1,
                "goalsAgainst": 4
              },
              "away": {
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 3,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 94,
              "team": "Rennes",
              "form": "DWW",
              "all": {
                "played": 3,
                "wins": 2,
                "draws": 1,
                "losses": 0,
                "goalsFor": 7,
                "goalsAgainst": 5
              },
              "home": {
                "played": 2,
                "wins": 1,
                "draws": 1,
                "losses": 0,
                "goalsFor": 5,
                "goalsAgainst": 4
              },
              "away": {
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 2,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 81,
              "team": "Marseille",
              "form": "WL",
              "all": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 4,
                "goalsAgainst": 2
              },
              "home": {
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 4,
                "goalsAgainst": 0
              },
              "away": {
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 0,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 114,
              "team": "Paris FC",
              "form": "DW",
              "all": {
                "played": 2,
                "wins": 1,
                "draws": 1,
                "losses": 0,
                "goalsFor": 3,
                "goalsAgainst": 0
              },
              "home": {
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 3,
                "goalsAgainst": 0
              },
              "away": {
                "played": 1,
                "wins": 0,
                "draws": 1,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            }
          ],
          "fixtures": [
            {
              "fixtureId": 1552747,
              "kickoff": "2026-09-07T00:15:00+09:00",
              "status": "FT",
              "homeTeamId": 77,
              "homeTeam": "Angers",
              "awayTeamId": 94,
              "awayTeam": "Rennes",
              "injuriesChecked": true,
              "injuries": [
                {
                  "fixtureId": 1552747,
                  "teamId": 77,
                  "playerId": 20554,
                  "player": "H. Belkebla",
                  "type": "Missing Fixture",
                  "reason": "Thigh Injury"
                },
                {
                  "fixtureId": 1552747,
                  "teamId": 77,
                  "playerId": 289555,
                  "player": "L. Mouton",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1552747,
                  "teamId": 94,
                  "playerId": 417830,
                  "player": "A. Ait Boudlal",
                  "type": "Missing Fixture",
                  "reason": "Inactive"
                },
                {
                  "fixtureId": 1552747,
                  "teamId": 94,
                  "playerId": 343792,
                  "player": "D. Cisse",
                  "type": "Missing Fixture",
                  "reason": "Inactive"
                }
              ],
              "lineupsChecked": true,
              "lineups": [
                {
                  "teamId": 77,
                  "team": "Angers",
                  "formation": "4-2-3-1",
                  "coach": "S. Gilli",
                  "starters": [
                    "Anthony Lopes",
                    "C. Arcus",
                    "O. Camara",
                    "J. Lefort",
                    "J. Kalulu",
                    "Y. Belkhdim",
                    "B. van den Boomen",
                    "J. Allevinah",
                    "A. Sbaï",
                    "A. Bermont",
                    "A. El Ouazzani"
                  ]
                },
                {
                  "teamId": 94,
                  "team": "Rennes",
                  "formation": "4-3-3",
                  "coach": "F. Haise",
                  "starters": [
                    "B. Samba",
                    "P. Frankowski",
                    "C. Cresswell",
                    "A. Rouault",
                    "Q. Merlin",
                    "S. Szymański",
                    "V. Rongier",
                    "M. Camara",
                    "L. Blas",
                    "E. Lepaul",
                    "Mousa Tamari"
                  ]
                }
              ]
            },
            {
              "fixtureId": 1552751,
              "kickoff": "2026-09-07T03:45:00+09:00",
              "status": "2H",
              "homeTeamId": 81,
              "homeTeam": "Marseille",
              "awayTeamId": 114,
              "awayTeam": "Paris FC",
              "injuriesChecked": true,
              "injuries": [
                {
                  "fixtureId": 1552751,
                  "teamId": 81,
                  "playerId": 926,
                  "player": "G. Kondogbia",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1552751,
                  "teamId": 81,
                  "playerId": 354298,
                  "player": "T. Nnadi",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1552751,
                  "teamId": 114,
                  "playerId": 22229,
                  "player": "J. Ikone",
                  "type": "Missing Fixture",
                  "reason": "Hamstring Injury"
                },
                {
                  "fixtureId": 1552751,
                  "teamId": 114,
                  "playerId": 490981,
                  "player": "E. Mbemba",
                  "type": "Missing Fixture",
                  "reason": "Inactive"
                },
                {
                  "fixtureId": 1552751,
                  "teamId": 114,
                  "playerId": 266013,
                  "player": "Otavio",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1552751,
                  "teamId": 114,
                  "playerId": 389322,
                  "player": "N. Sangui",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                }
              ],
              "lineupsChecked": true,
              "lineups": [
                {
                  "teamId": 81,
                  "team": "Marseille",
                  "formation": "4-1-4-1",
                  "coach": "Bruno Genesio",
                  "starters": [
                    "J. de Lange",
                    "T. Weah",
                    "C. Egan-Riley",
                    "N. Aguerd",
                    "Emerson",
                    "P. Højbjerg",
                    "A. Harit",
                    "H. Abdelli",
                    "A. Gomes",
                    "Igor Paixão",
                    "A. Gouiri"
                  ]
                },
                {
                  "teamId": 114,
                  "team": "Paris FC",
                  "formation": "5-4-1",
                  "coach": "L. Rosenior",
                  "starters": [
                    "K. Trapp",
                    "A. Camara",
                    "S. Chergui",
                    "D. Coppola",
                    "H. Traoré",
                    "L. Koleosho",
                    "I. Kebbal",
                    "M. Lopez",
                    "P. Lees-Melou",
                    "P. Pagis",
                    "L. Sinayoko"
                  ]
                }
              ]
            }
          ]
        },
        {
          "key": "PRIMEIRA_LIGA",
          "leagueId": 94,
          "season": "2026",
          "standings": [
            {
              "teamId": 212,
              "team": "FC Porto",
              "rank": 1,
              "points": 15,
              "goalsDiff": 10,
              "form": "WWWWW",
              "all": {
                "played": 5,
                "wins": 5,
                "draws": 0,
                "losses": 0,
                "goalsFor": 11,
                "goalsAgainst": 1
              },
              "home": {
                "played": 3,
                "wins": 3,
                "draws": 0,
                "losses": 0,
                "goalsFor": 6,
                "goalsAgainst": 1
              },
              "away": {
                "played": 2,
                "wins": 2,
                "draws": 0,
                "losses": 0,
                "goalsFor": 5,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 228,
              "team": "Sporting CP",
              "rank": 2,
              "points": 13,
              "goalsDiff": 9,
              "form": "WWWWD",
              "all": {
                "played": 5,
                "wins": 4,
                "draws": 1,
                "losses": 0,
                "goalsFor": 14,
                "goalsAgainst": 5
              },
              "home": {
                "played": 3,
                "wins": 3,
                "draws": 0,
                "losses": 0,
                "goalsFor": 8,
                "goalsAgainst": 3
              },
              "away": {
                "played": 2,
                "wins": 1,
                "draws": 1,
                "losses": 0,
                "goalsFor": 6,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 227,
              "team": "Santa Clara",
              "rank": 3,
              "points": 11,
              "goalsDiff": 6,
              "form": "WDWWD",
              "all": {
                "played": 5,
                "wins": 3,
                "draws": 2,
                "losses": 0,
                "goalsFor": 9,
                "goalsAgainst": 3
              },
              "home": {
                "played": 3,
                "wins": 2,
                "draws": 1,
                "losses": 0,
                "goalsFor": 7,
                "goalsAgainst": 2
              },
              "away": {
                "played": 2,
                "wins": 1,
                "draws": 1,
                "losses": 0,
                "goalsFor": 2,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 211,
              "team": "Benfica",
              "rank": 4,
              "points": 10,
              "goalsDiff": 11,
              "form": "WWWD",
              "all": {
                "played": 4,
                "wins": 3,
                "draws": 1,
                "losses": 0,
                "goalsFor": 14,
                "goalsAgainst": 3
              },
              "home": {
                "played": 2,
                "wins": 1,
                "draws": 1,
                "losses": 0,
                "goalsFor": 4,
                "goalsAgainst": 3
              },
              "away": {
                "played": 2,
                "wins": 2,
                "draws": 0,
                "losses": 0,
                "goalsFor": 10,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 240,
              "team": "Arouca",
              "rank": 5,
              "points": 9,
              "goalsDiff": 4,
              "form": "WLWW",
              "all": {
                "played": 4,
                "wins": 3,
                "draws": 0,
                "losses": 1,
                "goalsFor": 7,
                "goalsAgainst": 3
              },
              "home": {
                "played": 2,
                "wins": 2,
                "draws": 0,
                "losses": 0,
                "goalsFor": 6,
                "goalsAgainst": 1
              },
              "away": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 1,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 762,
              "team": "GIL Vicente",
              "rank": 6,
              "points": 7,
              "goalsDiff": 3,
              "form": "DWW",
              "all": {
                "played": 3,
                "wins": 2,
                "draws": 1,
                "losses": 0,
                "goalsFor": 3,
                "goalsAgainst": 0
              },
              "home": {
                "played": 2,
                "wins": 2,
                "draws": 0,
                "losses": 0,
                "goalsFor": 3,
                "goalsAgainst": 0
              },
              "away": {
                "played": 1,
                "wins": 0,
                "draws": 1,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 217,
              "team": "SC Braga",
              "rank": 7,
              "points": 7,
              "goalsDiff": 2,
              "form": "WWD",
              "all": {
                "played": 3,
                "wins": 2,
                "draws": 1,
                "losses": 0,
                "goalsFor": 5,
                "goalsAgainst": 3
              },
              "home": {
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 1,
                "goalsAgainst": 0
              },
              "away": {
                "played": 2,
                "wins": 1,
                "draws": 1,
                "losses": 0,
                "goalsFor": 4,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 214,
              "team": "Maritimo",
              "rank": 8,
              "points": 7,
              "goalsDiff": -2,
              "form": "LLDWW",
              "all": {
                "played": 5,
                "wins": 2,
                "draws": 1,
                "losses": 2,
                "goalsFor": 6,
                "goalsAgainst": 8
              },
              "home": {
                "played": 3,
                "wins": 1,
                "draws": 1,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 5
              },
              "away": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 15130,
              "team": "Estrela",
              "rank": 9,
              "points": 6,
              "goalsDiff": 1,
              "form": "DWDD",
              "all": {
                "played": 4,
                "wins": 1,
                "draws": 3,
                "losses": 0,
                "goalsFor": 9,
                "goalsAgainst": 8
              },
              "home": {
                "played": 2,
                "wins": 0,
                "draws": 2,
                "losses": 0,
                "goalsFor": 4,
                "goalsAgainst": 4
              },
              "away": {
                "played": 2,
                "wins": 1,
                "draws": 1,
                "losses": 0,
                "goalsFor": 5,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 225,
              "team": "Nacional",
              "rank": 10,
              "points": 4,
              "goalsDiff": -2,
              "form": "LLLWD",
              "all": {
                "played": 5,
                "wins": 1,
                "draws": 1,
                "losses": 3,
                "goalsFor": 6,
                "goalsAgainst": 8
              },
              "home": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 4,
                "goalsAgainst": 3
              },
              "away": {
                "played": 3,
                "wins": 0,
                "draws": 1,
                "losses": 2,
                "goalsFor": 2,
                "goalsAgainst": 5
              }
            },
            {
              "teamId": 215,
              "team": "Moreirense",
              "rank": 11,
              "points": 4,
              "goalsDiff": -4,
              "form": "LWLD",
              "all": {
                "played": 4,
                "wins": 1,
                "draws": 1,
                "losses": 2,
                "goalsFor": 4,
                "goalsAgainst": 8
              },
              "home": {
                "played": 1,
                "wins": 0,
                "draws": 1,
                "losses": 0,
                "goalsFor": 2,
                "goalsAgainst": 2
              },
              "away": {
                "played": 3,
                "wins": 1,
                "draws": 0,
                "losses": 2,
                "goalsFor": 2,
                "goalsAgainst": 6
              }
            },
            {
              "teamId": 224,
              "team": "Vitória SC",
              "rank": 12,
              "points": 3,
              "goalsDiff": -2,
              "form": "LWLL",
              "all": {
                "played": 4,
                "wins": 1,
                "draws": 0,
                "losses": 3,
                "goalsFor": 3,
                "goalsAgainst": 5
              },
              "home": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 1,
                "goalsAgainst": 1
              },
              "away": {
                "played": 2,
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 2,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 242,
              "team": "Famalicao",
              "rank": 13,
              "points": 3,
              "goalsDiff": -2,
              "form": "DDLLD",
              "all": {
                "played": 5,
                "wins": 0,
                "draws": 3,
                "losses": 2,
                "goalsFor": 4,
                "goalsAgainst": 6
              },
              "home": {
                "played": 2,
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 1,
                "goalsAgainst": 2
              },
              "away": {
                "played": 3,
                "wins": 0,
                "draws": 2,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 226,
              "team": "Rio Ave",
              "rank": 14,
              "points": 3,
              "goalsDiff": -9,
              "form": "LLWLL",
              "all": {
                "played": 5,
                "wins": 1,
                "draws": 0,
                "losses": 4,
                "goalsFor": 2,
                "goalsAgainst": 11
              },
              "home": {
                "played": 2,
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 0,
                "goalsAgainst": 6
              },
              "away": {
                "played": 3,
                "wins": 1,
                "draws": 0,
                "losses": 2,
                "goalsFor": 2,
                "goalsAgainst": 5
              }
            },
            {
              "teamId": 238,
              "team": "Academico Viseu",
              "rank": 15,
              "points": 2,
              "goalsDiff": -4,
              "form": "LDLD",
              "all": {
                "played": 4,
                "wins": 0,
                "draws": 2,
                "losses": 2,
                "goalsFor": 4,
                "goalsAgainst": 8
              },
              "home": {
                "played": 2,
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 0,
                "goalsAgainst": 4
              },
              "away": {
                "played": 2,
                "wins": 0,
                "draws": 2,
                "losses": 0,
                "goalsFor": 4,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 4724,
              "team": "Alverca",
              "rank": 16,
              "points": 2,
              "goalsDiff": -5,
              "form": "LDLDL",
              "all": {
                "played": 5,
                "wins": 0,
                "draws": 2,
                "losses": 3,
                "goalsFor": 5,
                "goalsAgainst": 10
              },
              "home": {
                "played": 3,
                "wins": 0,
                "draws": 2,
                "losses": 1,
                "goalsFor": 4,
                "goalsAgainst": 5
              },
              "away": {
                "played": 2,
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 1,
                "goalsAgainst": 5
              }
            },
            {
              "teamId": 230,
              "team": "Estoril",
              "rank": 17,
              "points": 1,
              "goalsDiff": -5,
              "form": "LLLD",
              "all": {
                "played": 4,
                "wins": 0,
                "draws": 1,
                "losses": 3,
                "goalsFor": 2,
                "goalsAgainst": 7
              },
              "home": {
                "played": 2,
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 1,
                "goalsAgainst": 3
              },
              "away": {
                "played": 2,
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 1,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 4716,
              "team": "Casa Pia",
              "rank": 18,
              "points": 0,
              "goalsDiff": -11,
              "form": "LLLL",
              "all": {
                "played": 4,
                "wins": 0,
                "draws": 0,
                "losses": 4,
                "goalsFor": 0,
                "goalsAgainst": 11
              },
              "home": {
                "played": 2,
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 0,
                "goalsAgainst": 8
              },
              "away": {
                "played": 2,
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 0,
                "goalsAgainst": 3
              }
            }
          ],
          "teams": [
            {
              "teamId": 762,
              "team": "GIL Vicente",
              "form": "WWD",
              "all": {
                "played": 3,
                "wins": 2,
                "draws": 1,
                "losses": 0,
                "goalsFor": 3,
                "goalsAgainst": 0
              },
              "home": {
                "played": 2,
                "wins": 2,
                "draws": 0,
                "losses": 0,
                "goalsFor": 3,
                "goalsAgainst": 0
              },
              "away": {
                "played": 1,
                "wins": 0,
                "draws": 1,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 238,
              "team": "Academico Viseu",
              "form": "DLDL",
              "all": {
                "played": 4,
                "wins": 0,
                "draws": 2,
                "losses": 2,
                "goalsFor": 4,
                "goalsAgainst": 8
              },
              "home": {
                "played": 2,
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 0,
                "goalsAgainst": 4
              },
              "away": {
                "played": 2,
                "wins": 0,
                "draws": 2,
                "losses": 0,
                "goalsFor": 4,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 224,
              "team": "Vitória SC",
              "form": "LLWLD",
              "all": {
                "played": 5,
                "wins": 1,
                "draws": 1,
                "losses": 3,
                "goalsFor": 3,
                "goalsAgainst": 5
              },
              "home": {
                "played": 3,
                "wins": 1,
                "draws": 1,
                "losses": 1,
                "goalsFor": 1,
                "goalsAgainst": 1
              },
              "away": {
                "played": 2,
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 2,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 4716,
              "team": "Casa Pia",
              "form": "LLLLD",
              "all": {
                "played": 5,
                "wins": 0,
                "draws": 1,
                "losses": 4,
                "goalsFor": 0,
                "goalsAgainst": 11
              },
              "home": {
                "played": 2,
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 0,
                "goalsAgainst": 8
              },
              "away": {
                "played": 3,
                "wins": 0,
                "draws": 1,
                "losses": 2,
                "goalsFor": 0,
                "goalsAgainst": 3
              }
            }
          ],
          "fixtures": [
            {
              "fixtureId": 1575486,
              "kickoff": "2026-09-07T04:30:00+09:00",
              "status": "HT",
              "homeTeamId": 762,
              "homeTeam": "GIL Vicente",
              "awayTeamId": 238,
              "awayTeam": "Academico Viseu",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": true,
              "lineups": [
                {
                  "teamId": 762,
                  "team": "GIL Vicente",
                  "formation": "4-2-3-1",
                  "coach": "Luís Pinto",
                  "starters": [
                    "Lucão",
                    "Ricardo Esgaio",
                    "M. Elimbi Gilbert",
                    "Jonathan Buatu",
                    "Weverson",
                    "Zé Carlos",
                    "Diogo Ferreira Prioste",
                    "Murilo",
                    "Gil Pinto Martins",
                    "Joelson Fernandes",
                    "Héctor Hernández"
                  ]
                },
                {
                  "teamId": 238,
                  "team": "Academico Viseu",
                  "formation": "4-1-4-1",
                  "coach": "Bruno Pinheiro",
                  "starters": [
                    "Ewerton",
                    "Robinho",
                    "A. Correia",
                    "N. Michelis",
                    "G. Costa",
                    "Luís Silva",
                    "João Guilherme",
                    "S. Messeguem",
                    "C. Kahraman",
                    "Á. Zamora",
                    "André Clóvis"
                  ]
                }
              ]
            },
            {
              "fixtureId": 1575490,
              "kickoff": "2026-09-07T02:00:00+09:00",
              "status": "FT",
              "homeTeamId": 224,
              "homeTeam": "Vitória SC",
              "awayTeamId": 4716,
              "awayTeam": "Casa Pia",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": true,
              "lineups": [
                {
                  "teamId": 224,
                  "team": "Vitória SC",
                  "formation": "4-2-3-1",
                  "coach": "Tiago Margarido",
                  "starters": [
                    "O. Zych",
                    "T. Strata",
                    "Thiago Balieiro",
                    "A. Sidibé",
                    "João Mendes",
                    "Beni",
                    "L. Doucet",
                    "Miguel Nogueira",
                    "Samu",
                    "Gustavo",
                    "A. Ndoye"
                  ]
                },
                {
                  "teamId": 4716,
                  "team": "Casa Pia",
                  "formation": "4-2-3-1",
                  "coach": "Filipe Coelho",
                  "starters": [
                    "André Gomes",
                    "Geraldes",
                    "Kaly",
                    "David Sousa",
                    "Pedro Rosas",
                    "Silvi",
                    "L. Ofori",
                    "K. Prieto",
                    "João Pedro Seno Luís Rêgo",
                    "B. Pauwels",
                    "A. Jatta"
                  ]
                }
              ]
            }
          ]
        },
        {
          "key": "BELGIAN_PRO_LEAGUE",
          "leagueId": 144,
          "season": "2026",
          "standings": [
            {
              "teamId": 631,
              "team": "Gent",
              "rank": 1,
              "points": 15,
              "goalsDiff": 8,
              "form": "WWWWW",
              "all": {
                "played": 5,
                "wins": 5,
                "draws": 0,
                "losses": 0,
                "goalsFor": 10,
                "goalsAgainst": 2
              },
              "home": {
                "played": 3,
                "wins": 3,
                "draws": 0,
                "losses": 0,
                "goalsFor": 5,
                "goalsAgainst": 1
              },
              "away": {
                "played": 2,
                "wins": 2,
                "draws": 0,
                "losses": 0,
                "goalsFor": 5,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 1393,
              "team": "Union St. Gilloise",
              "rank": 2,
              "points": 13,
              "goalsDiff": 11,
              "form": "WWWDW",
              "all": {
                "played": 5,
                "wins": 4,
                "draws": 1,
                "losses": 0,
                "goalsFor": 14,
                "goalsAgainst": 3
              },
              "home": {
                "played": 2,
                "wins": 1,
                "draws": 1,
                "losses": 0,
                "goalsFor": 3,
                "goalsAgainst": 0
              },
              "away": {
                "played": 3,
                "wins": 3,
                "draws": 0,
                "losses": 0,
                "goalsFor": 11,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 569,
              "team": "Club Brugge KV",
              "rank": 3,
              "points": 12,
              "goalsDiff": 7,
              "form": "WLWWW",
              "all": {
                "played": 5,
                "wins": 4,
                "draws": 0,
                "losses": 1,
                "goalsFor": 9,
                "goalsAgainst": 2
              },
              "home": {
                "played": 2,
                "wins": 2,
                "draws": 0,
                "losses": 0,
                "goalsFor": 4,
                "goalsAgainst": 0
              },
              "away": {
                "played": 3,
                "wins": 2,
                "draws": 0,
                "losses": 1,
                "goalsFor": 5,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 736,
              "team": "Charleroi",
              "rank": 4,
              "points": 12,
              "goalsDiff": 6,
              "form": "LWWWW",
              "all": {
                "played": 5,
                "wins": 4,
                "draws": 0,
                "losses": 1,
                "goalsFor": 11,
                "goalsAgainst": 5
              },
              "home": {
                "played": 3,
                "wins": 2,
                "draws": 0,
                "losses": 1,
                "goalsFor": 7,
                "goalsAgainst": 4
              },
              "away": {
                "played": 2,
                "wins": 2,
                "draws": 0,
                "losses": 0,
                "goalsFor": 4,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 600,
              "team": "Zulte Waregem",
              "rank": 5,
              "points": 11,
              "goalsDiff": 7,
              "form": "WDWDW",
              "all": {
                "played": 5,
                "wins": 3,
                "draws": 2,
                "losses": 0,
                "goalsFor": 10,
                "goalsAgainst": 3
              },
              "home": {
                "played": 2,
                "wins": 2,
                "draws": 0,
                "losses": 0,
                "goalsFor": 6,
                "goalsAgainst": 1
              },
              "away": {
                "played": 3,
                "wins": 1,
                "draws": 2,
                "losses": 0,
                "goalsFor": 4,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 733,
              "team": "Standard Liege",
              "rank": 6,
              "points": 11,
              "goalsDiff": 4,
              "form": "WWWDD",
              "all": {
                "played": 5,
                "wins": 3,
                "draws": 2,
                "losses": 0,
                "goalsFor": 10,
                "goalsAgainst": 6
              },
              "home": {
                "played": 3,
                "wins": 2,
                "draws": 1,
                "losses": 0,
                "goalsFor": 5,
                "goalsAgainst": 2
              },
              "away": {
                "played": 2,
                "wins": 1,
                "draws": 1,
                "losses": 0,
                "goalsFor": 5,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 742,
              "team": "Genk",
              "rank": 7,
              "points": 8,
              "goalsDiff": 4,
              "form": "DWDWL",
              "all": {
                "played": 5,
                "wins": 2,
                "draws": 2,
                "losses": 1,
                "goalsFor": 12,
                "goalsAgainst": 8
              },
              "home": {
                "played": 2,
                "wins": 2,
                "draws": 0,
                "losses": 0,
                "goalsFor": 7,
                "goalsAgainst": 2
              },
              "away": {
                "played": 3,
                "wins": 0,
                "draws": 2,
                "losses": 1,
                "goalsFor": 5,
                "goalsAgainst": 6
              }
            },
            {
              "teamId": 735,
              "team": "St. Truiden",
              "rank": 8,
              "points": 8,
              "goalsDiff": 4,
              "form": "WLWDD",
              "all": {
                "played": 5,
                "wins": 2,
                "draws": 2,
                "losses": 1,
                "goalsFor": 12,
                "goalsAgainst": 8
              },
              "home": {
                "played": 3,
                "wins": 1,
                "draws": 1,
                "losses": 1,
                "goalsFor": 5,
                "goalsAgainst": 4
              },
              "away": {
                "played": 2,
                "wins": 1,
                "draws": 1,
                "losses": 0,
                "goalsFor": 7,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 259,
              "team": "Lommel United",
              "rank": 9,
              "points": 7,
              "goalsDiff": 3,
              "form": "LWWLD",
              "all": {
                "played": 5,
                "wins": 2,
                "draws": 1,
                "losses": 2,
                "goalsFor": 6,
                "goalsAgainst": 3
              },
              "home": {
                "played": 3,
                "wins": 1,
                "draws": 0,
                "losses": 2,
                "goalsFor": 4,
                "goalsAgainst": 2
              },
              "away": {
                "played": 2,
                "wins": 1,
                "draws": 1,
                "losses": 0,
                "goalsFor": 2,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 740,
              "team": "Antwerp",
              "rank": 10,
              "points": 7,
              "goalsDiff": 0,
              "form": "LLDWW",
              "all": {
                "played": 5,
                "wins": 2,
                "draws": 1,
                "losses": 2,
                "goalsFor": 10,
                "goalsAgainst": 10
              },
              "home": {
                "played": 3,
                "wins": 1,
                "draws": 1,
                "losses": 1,
                "goalsFor": 7,
                "goalsAgainst": 9
              },
              "away": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 554,
              "team": "Anderlecht",
              "rank": 11,
              "points": 7,
              "goalsDiff": -2,
              "form": "DWLLW",
              "all": {
                "played": 5,
                "wins": 2,
                "draws": 1,
                "losses": 2,
                "goalsFor": 3,
                "goalsAgainst": 5
              },
              "home": {
                "played": 3,
                "wins": 2,
                "draws": 1,
                "losses": 0,
                "goalsFor": 3,
                "goalsAgainst": 1
              },
              "away": {
                "played": 2,
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 0,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 261,
              "team": "KVC Westerlo",
              "rank": 12,
              "points": 4,
              "goalsDiff": -5,
              "form": "WDLLL",
              "all": {
                "played": 5,
                "wins": 1,
                "draws": 1,
                "losses": 3,
                "goalsFor": 9,
                "goalsAgainst": 14
              },
              "home": {
                "played": 2,
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 7
              },
              "away": {
                "played": 3,
                "wins": 1,
                "draws": 0,
                "losses": 2,
                "goalsFor": 6,
                "goalsAgainst": 7
              }
            },
            {
              "teamId": 738,
              "team": "SK Beveren",
              "rank": 13,
              "points": 3,
              "goalsDiff": -8,
              "form": "LLWL",
              "all": {
                "played": 4,
                "wins": 1,
                "draws": 0,
                "losses": 3,
                "goalsFor": 2,
                "goalsAgainst": 10
              },
              "home": {
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 1,
                "goalsAgainst": 0
              },
              "away": {
                "played": 3,
                "wins": 0,
                "draws": 0,
                "losses": 3,
                "goalsFor": 1,
                "goalsAgainst": 10
              }
            },
            {
              "teamId": 741,
              "team": "Cercle Brugge",
              "rank": 14,
              "points": 2,
              "goalsDiff": -5,
              "form": "LLLDD",
              "all": {
                "played": 5,
                "wins": 0,
                "draws": 2,
                "losses": 3,
                "goalsFor": 5,
                "goalsAgainst": 10
              },
              "home": {
                "played": 3,
                "wins": 0,
                "draws": 1,
                "losses": 2,
                "goalsFor": 3,
                "goalsAgainst": 7
              },
              "away": {
                "played": 2,
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 2,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 266,
              "team": "KV Mechelen",
              "rank": 15,
              "points": 2,
              "goalsDiff": -8,
              "form": "LDLDL",
              "all": {
                "played": 5,
                "wins": 0,
                "draws": 2,
                "losses": 3,
                "goalsFor": 5,
                "goalsAgainst": 13
              },
              "home": {
                "played": 2,
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 7
              },
              "away": {
                "played": 3,
                "wins": 0,
                "draws": 1,
                "losses": 2,
                "goalsFor": 2,
                "goalsAgainst": 6
              }
            },
            {
              "teamId": 5902,
              "team": "RAAL La Louvière",
              "rank": 16,
              "points": 1,
              "goalsDiff": -8,
              "form": "LDLLL",
              "all": {
                "played": 5,
                "wins": 0,
                "draws": 1,
                "losses": 4,
                "goalsFor": 4,
                "goalsAgainst": 12
              },
              "home": {
                "played": 2,
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 4
              },
              "away": {
                "played": 3,
                "wins": 0,
                "draws": 0,
                "losses": 3,
                "goalsFor": 1,
                "goalsAgainst": 8
              }
            },
            {
              "teamId": 260,
              "team": "OH Leuven",
              "rank": 17,
              "points": 0,
              "goalsDiff": -7,
              "form": "LLLL",
              "all": {
                "played": 4,
                "wins": 0,
                "draws": 0,
                "losses": 4,
                "goalsFor": 2,
                "goalsAgainst": 9
              },
              "home": {
                "played": 2,
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 1,
                "goalsAgainst": 5
              },
              "away": {
                "played": 2,
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 1,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 734,
              "team": "Kortrijk",
              "rank": 18,
              "points": 0,
              "goalsDiff": -11,
              "form": "LLLLL",
              "all": {
                "played": 5,
                "wins": 0,
                "draws": 0,
                "losses": 5,
                "goalsFor": 1,
                "goalsAgainst": 12
              },
              "home": {
                "played": 3,
                "wins": 0,
                "draws": 0,
                "losses": 3,
                "goalsFor": 1,
                "goalsAgainst": 8
              },
              "away": {
                "played": 2,
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 0,
                "goalsAgainst": 4
              }
            }
          ],
          "teams": [
            {
              "teamId": 554,
              "team": "Anderlecht",
              "form": "WLLWD",
              "all": {
                "played": 5,
                "wins": 2,
                "draws": 1,
                "losses": 2,
                "goalsFor": 3,
                "goalsAgainst": 5
              },
              "home": {
                "played": 3,
                "wins": 2,
                "draws": 1,
                "losses": 0,
                "goalsFor": 3,
                "goalsAgainst": 1
              },
              "away": {
                "played": 2,
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 0,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 742,
              "team": "Genk",
              "form": "LWDWD",
              "all": {
                "played": 5,
                "wins": 2,
                "draws": 2,
                "losses": 1,
                "goalsFor": 12,
                "goalsAgainst": 8
              },
              "home": {
                "played": 2,
                "wins": 2,
                "draws": 0,
                "losses": 0,
                "goalsFor": 7,
                "goalsAgainst": 2
              },
              "away": {
                "played": 3,
                "wins": 0,
                "draws": 2,
                "losses": 1,
                "goalsFor": 5,
                "goalsAgainst": 6
              }
            },
            {
              "teamId": 738,
              "team": "SK Beveren",
              "form": "LWLLW",
              "all": {
                "played": 5,
                "wins": 2,
                "draws": 0,
                "losses": 3,
                "goalsFor": 5,
                "goalsAgainst": 10
              },
              "home": {
                "played": 2,
                "wins": 2,
                "draws": 0,
                "losses": 0,
                "goalsFor": 4,
                "goalsAgainst": 0
              },
              "away": {
                "played": 3,
                "wins": 0,
                "draws": 0,
                "losses": 3,
                "goalsFor": 1,
                "goalsAgainst": 10
              }
            },
            {
              "teamId": 260,
              "team": "OH Leuven",
              "form": "LLLLL",
              "all": {
                "played": 5,
                "wins": 0,
                "draws": 0,
                "losses": 5,
                "goalsFor": 2,
                "goalsAgainst": 12
              },
              "home": {
                "played": 2,
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 1,
                "goalsAgainst": 5
              },
              "away": {
                "played": 3,
                "wins": 0,
                "draws": 0,
                "losses": 3,
                "goalsFor": 1,
                "goalsAgainst": 7
              }
            }
          ],
          "fixtures": [
            {
              "fixtureId": 1558624,
              "kickoff": "2026-09-07T01:30:00+09:00",
              "status": "FT",
              "homeTeamId": 554,
              "homeTeam": "Anderlecht",
              "awayTeamId": 742,
              "awayTeam": "Genk",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": true,
              "lineups": [
                {
                  "teamId": 554,
                  "team": "Anderlecht",
                  "formation": "4-4-2",
                  "coach": "Vítor Bruno",
                  "starters": [
                    "C. Coosemans",
                    "A. Maamar",
                    "G. Biancone",
                    "L. Pétrot",
                    "L. Augustinsson",
                    "N. Cobiella",
                    "I. Koutsoupias",
                    "M. Kana",
                    "O. Antman",
                    "T. Bentayeb",
                    "D. Sikan"
                  ]
                },
                {
                  "teamId": 742,
                  "team": "Genk",
                  "formation": "4-2-3-1",
                  "coach": "J. Thorup",
                  "starters": [
                    "L. Kiaba Mounganga",
                    "K. Amaro",
                    "M. Smets",
                    "J. Kongolo",
                    "J. Kayembe",
                    "I. Bangoura",
                    "B. Heynen",
                    "J. Ito",
                    "J. Erenbjerg",
                    "A. Yokoyama",
                    "R. Durosinmi"
                  ]
                }
              ]
            },
            {
              "fixtureId": 1558625,
              "kickoff": "2026-09-07T02:15:00+09:00",
              "status": "FT",
              "homeTeamId": 738,
              "homeTeam": "SK Beveren",
              "awayTeamId": 260,
              "awayTeam": "OH Leuven",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": true,
              "lineups": [
                {
                  "teamId": 738,
                  "team": "SK Beveren",
                  "formation": "4-2-3-1",
                  "coach": "T. Bakens",
                  "starters": [
                    "J. Schenk",
                    "L. Jans",
                    "Y. Gomis",
                    "B. Godeau",
                    "C. Janssens",
                    "S. Dewaele",
                    "C. Conde",
                    "C. Lokesa",
                    "C. Brüls",
                    "J. Margaritha",
                    "L. Mertens"
                  ]
                },
                {
                  "teamId": 260,
                  "team": "OH Leuven",
                  "formation": "3-4-1-2",
                  "coach": "T. Simons",
                  "starters": [
                    "D. van den Heuvel",
                    "J. Lawrence",
                    "N. Dussenne",
                    "E. Pletinckx",
                    "Óscar Gil",
                    "W. George",
                    "B. Verstraete",
                    "T. Ogiwara",
                    "S. Schrijvers",
                    "S. Yamada",
                    "C. Ikwuemesi"
                  ]
                }
              ]
            }
          ]
        },
        {
          "key": "SUPER_LIG",
          "leagueId": 203,
          "season": "2026",
          "standings": [
            {
              "teamId": 645,
              "team": "Galatasaray",
              "rank": 1,
              "points": 10,
              "goalsDiff": 6,
              "form": "WWWD",
              "all": {
                "played": 4,
                "wins": 3,
                "draws": 1,
                "losses": 0,
                "goalsFor": 12,
                "goalsAgainst": 6
              },
              "home": {
                "played": 2,
                "wins": 1,
                "draws": 1,
                "losses": 0,
                "goalsFor": 5,
                "goalsAgainst": 4
              },
              "away": {
                "played": 2,
                "wins": 2,
                "draws": 0,
                "losses": 0,
                "goalsFor": 7,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 549,
              "team": "Beşiktaş",
              "rank": 2,
              "points": 9,
              "goalsDiff": 5,
              "form": "WWLW",
              "all": {
                "played": 4,
                "wins": 3,
                "draws": 0,
                "losses": 1,
                "goalsFor": 9,
                "goalsAgainst": 4
              },
              "home": {
                "played": 2,
                "wins": 2,
                "draws": 0,
                "losses": 0,
                "goalsFor": 7,
                "goalsAgainst": 2
              },
              "away": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 2,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 7411,
              "team": "Kocaelispor",
              "rank": 3,
              "points": 9,
              "goalsDiff": 2,
              "form": "WWWL",
              "all": {
                "played": 4,
                "wins": 3,
                "draws": 0,
                "losses": 1,
                "goalsFor": 5,
                "goalsAgainst": 3
              },
              "home": {
                "played": 2,
                "wins": 2,
                "draws": 0,
                "losses": 0,
                "goalsFor": 3,
                "goalsAgainst": 0
              },
              "away": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 2,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 998,
              "team": "Trabzonspor",
              "rank": 4,
              "points": 7,
              "goalsDiff": 5,
              "form": "WLWD",
              "all": {
                "played": 4,
                "wins": 2,
                "draws": 1,
                "losses": 1,
                "goalsFor": 9,
                "goalsAgainst": 4
              },
              "home": {
                "played": 2,
                "wins": 2,
                "draws": 0,
                "losses": 0,
                "goalsFor": 7,
                "goalsAgainst": 1
              },
              "away": {
                "played": 2,
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 2,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 3579,
              "team": "Amed",
              "rank": 5,
              "points": 7,
              "goalsDiff": 2,
              "form": "DWLW",
              "all": {
                "played": 4,
                "wins": 2,
                "draws": 1,
                "losses": 1,
                "goalsFor": 7,
                "goalsAgainst": 5
              },
              "home": {
                "played": 2,
                "wins": 2,
                "draws": 0,
                "losses": 0,
                "goalsFor": 5,
                "goalsAgainst": 1
              },
              "away": {
                "played": 2,
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 2,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 997,
              "team": "Gençlerbirliği S.K.",
              "rank": 6,
              "points": 7,
              "goalsDiff": -3,
              "form": "LDWW",
              "all": {
                "played": 4,
                "wins": 2,
                "draws": 1,
                "losses": 1,
                "goalsFor": 4,
                "goalsAgainst": 7
              },
              "home": {
                "played": 2,
                "wins": 1,
                "draws": 1,
                "losses": 0,
                "goalsFor": 3,
                "goalsAgainst": 2
              },
              "away": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 1,
                "goalsAgainst": 5
              }
            },
            {
              "teamId": 611,
              "team": "Fenerbahçe",
              "rank": 7,
              "points": 6,
              "goalsDiff": 2,
              "form": "LWWL",
              "all": {
                "played": 4,
                "wins": 2,
                "draws": 0,
                "losses": 2,
                "goalsFor": 8,
                "goalsAgainst": 6
              },
              "home": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 5,
                "goalsAgainst": 4
              },
              "away": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 1004,
              "team": "Kasımpaşa",
              "rank": 8,
              "points": 6,
              "goalsDiff": 1,
              "form": "DDWD",
              "all": {
                "played": 4,
                "wins": 1,
                "draws": 3,
                "losses": 0,
                "goalsFor": 5,
                "goalsAgainst": 4
              },
              "home": {
                "played": 2,
                "wins": 0,
                "draws": 2,
                "losses": 0,
                "goalsFor": 3,
                "goalsAgainst": 3
              },
              "away": {
                "played": 2,
                "wins": 1,
                "draws": 1,
                "losses": 0,
                "goalsFor": 2,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 1007,
              "team": "Rizespor",
              "rank": 9,
              "points": 6,
              "goalsDiff": 0,
              "form": "WLW",
              "all": {
                "played": 3,
                "wins": 2,
                "draws": 0,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 3
              },
              "home": {
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 0,
                "goalsAgainst": 2
              },
              "away": {
                "played": 2,
                "wins": 2,
                "draws": 0,
                "losses": 0,
                "goalsFor": 3,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 564,
              "team": "Başakşehir",
              "rank": 10,
              "points": 4,
              "goalsDiff": 0,
              "form": "LDLW",
              "all": {
                "played": 4,
                "wins": 1,
                "draws": 1,
                "losses": 2,
                "goalsFor": 6,
                "goalsAgainst": 6
              },
              "home": {
                "played": 3,
                "wins": 1,
                "draws": 1,
                "losses": 1,
                "goalsFor": 5,
                "goalsAgainst": 4
              },
              "away": {
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 1,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 3573,
              "team": "Gaziantep FK",
              "rank": 11,
              "points": 4,
              "goalsDiff": 0,
              "form": "LWD",
              "all": {
                "played": 3,
                "wins": 1,
                "draws": 1,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 3
              },
              "home": {
                "played": 2,
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 2,
                "goalsAgainst": 3
              },
              "away": {
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 1,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 996,
              "team": "Alanyaspor",
              "rank": 12,
              "points": 4,
              "goalsDiff": 0,
              "form": "LWD",
              "all": {
                "played": 3,
                "wins": 1,
                "draws": 1,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 3
              },
              "home": {
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 1,
                "goalsAgainst": 0
              },
              "away": {
                "played": 2,
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 2,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 3603,
              "team": "Samsunspor",
              "rank": 13,
              "points": 4,
              "goalsDiff": -1,
              "form": "LLWD",
              "all": {
                "played": 4,
                "wins": 1,
                "draws": 1,
                "losses": 2,
                "goalsFor": 5,
                "goalsAgainst": 6
              },
              "home": {
                "played": 2,
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 5
              },
              "away": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 2,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 6343,
              "team": "Çorum FK",
              "rank": 14,
              "points": 4,
              "goalsDiff": -2,
              "form": "WLLD",
              "all": {
                "played": 4,
                "wins": 1,
                "draws": 1,
                "losses": 2,
                "goalsFor": 7,
                "goalsAgainst": 9
              },
              "home": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 1
              },
              "away": {
                "played": 2,
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 4,
                "goalsAgainst": 8
              }
            },
            {
              "teamId": 1009,
              "team": "Erzurumspor FK",
              "rank": 15,
              "points": 4,
              "goalsDiff": -6,
              "form": "WDLL",
              "all": {
                "played": 4,
                "wins": 1,
                "draws": 1,
                "losses": 2,
                "goalsFor": 2,
                "goalsAgainst": 8
              },
              "home": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 1,
                "goalsAgainst": 4
              },
              "away": {
                "played": 2,
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 1,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 3588,
              "team": "Eyüpspor",
              "rank": 16,
              "points": 3,
              "goalsDiff": -4,
              "form": "LWLL",
              "all": {
                "played": 4,
                "wins": 1,
                "draws": 0,
                "losses": 3,
                "goalsFor": 2,
                "goalsAgainst": 6
              },
              "home": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 2,
                "goalsAgainst": 2
              },
              "away": {
                "played": 2,
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 0,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 994,
              "team": "Göztepe",
              "rank": 17,
              "points": 1,
              "goalsDiff": -2,
              "form": "LLD",
              "all": {
                "played": 3,
                "wins": 0,
                "draws": 1,
                "losses": 2,
                "goalsFor": 5,
                "goalsAgainst": 7
              },
              "home": {
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 0,
                "goalsAgainst": 1
              },
              "away": {
                "played": 2,
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 5,
                "goalsAgainst": 6
              }
            },
            {
              "teamId": 607,
              "team": "Konyaspor",
              "rank": 18,
              "points": 0,
              "goalsDiff": -5,
              "form": "LLLL",
              "all": {
                "played": 4,
                "wins": 0,
                "draws": 0,
                "losses": 4,
                "goalsFor": 3,
                "goalsAgainst": 8
              },
              "home": {
                "played": 2,
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 1,
                "goalsAgainst": 3
              },
              "away": {
                "played": 2,
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 2,
                "goalsAgainst": 5
              }
            }
          ],
          "teams": [
            {
              "teamId": 998,
              "team": "Trabzonspor",
              "form": "DWLW",
              "all": {
                "played": 4,
                "wins": 2,
                "draws": 1,
                "losses": 1,
                "goalsFor": 9,
                "goalsAgainst": 4
              },
              "home": {
                "played": 2,
                "wins": 2,
                "draws": 0,
                "losses": 0,
                "goalsFor": 7,
                "goalsAgainst": 1
              },
              "away": {
                "played": 2,
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 2,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 997,
              "team": "Gençlerbirliği S.K.",
              "form": "WWDL",
              "all": {
                "played": 4,
                "wins": 2,
                "draws": 1,
                "losses": 1,
                "goalsFor": 4,
                "goalsAgainst": 7
              },
              "home": {
                "played": 2,
                "wins": 1,
                "draws": 1,
                "losses": 0,
                "goalsFor": 3,
                "goalsAgainst": 2
              },
              "away": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 1,
                "goalsAgainst": 5
              }
            },
            {
              "teamId": 7411,
              "team": "Kocaelispor",
              "form": "LWWW",
              "all": {
                "played": 4,
                "wins": 3,
                "draws": 0,
                "losses": 1,
                "goalsFor": 5,
                "goalsAgainst": 3
              },
              "home": {
                "played": 2,
                "wins": 2,
                "draws": 0,
                "losses": 0,
                "goalsFor": 3,
                "goalsAgainst": 0
              },
              "away": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 2,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 3603,
              "team": "Samsunspor",
              "form": "DWLL",
              "all": {
                "played": 4,
                "wins": 1,
                "draws": 1,
                "losses": 2,
                "goalsFor": 5,
                "goalsAgainst": 6
              },
              "home": {
                "played": 2,
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 5
              },
              "away": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 2,
                "goalsAgainst": 1
              }
            }
          ],
          "fixtures": [
            {
              "fixtureId": 1584402,
              "kickoff": "2026-09-07T02:00:00+09:00",
              "status": "FT",
              "homeTeamId": 998,
              "homeTeam": "Trabzonspor",
              "awayTeamId": 997,
              "awayTeam": "Gençlerbirliği S.K.",
              "injuriesChecked": true,
              "injuries": [
                {
                  "fixtureId": 1584402,
                  "teamId": 998,
                  "playerId": 63627,
                  "player": "A. Batagov",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1584402,
                  "teamId": 998,
                  "playerId": 22408,
                  "player": "T. Jabol-Folcarelli",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1584402,
                  "teamId": 998,
                  "playerId": 1938,
                  "player": "R. Malinovskyi",
                  "type": "Missing Fixture",
                  "reason": "Inactive"
                },
                {
                  "fixtureId": 1584402,
                  "teamId": 998,
                  "playerId": 454973,
                  "player": "N. Saviolo",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1584402,
                  "teamId": 998,
                  "playerId": 47443,
                  "player": "O. Yokuslu",
                  "type": "Missing Fixture",
                  "reason": "Lacking Match Fitness"
                },
                {
                  "fixtureId": 1584402,
                  "teamId": 997,
                  "playerId": 427020,
                  "player": "D. Demir",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1584402,
                  "teamId": 997,
                  "playerId": 47304,
                  "player": "K. Rodrigues",
                  "type": "Missing Fixture",
                  "reason": "Inactive"
                },
                {
                  "fixtureId": 1584402,
                  "teamId": 997,
                  "playerId": 158065,
                  "player": "T. Gouveia",
                  "type": "Questionable",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1584402,
                  "teamId": 997,
                  "playerId": 22239,
                  "player": "C. Niasse",
                  "type": "Questionable",
                  "reason": "Inactive"
                }
              ],
              "lineupsChecked": true,
              "lineups": [
                {
                  "teamId": 998,
                  "team": "Trabzonspor",
                  "formation": "4-3-3",
                  "coach": "Hüseyin Çimşir",
                  "starters": [
                    "A. Onana",
                    "Wagner Pina",
                    "C. Nwaiwu",
                    "S. Savić",
                    "M. Eskihellaç",
                    "O. Tufan",
                    "Fabinho",
                    "E. Muçi",
                    "Mohamed Salah",
                    "P. Onuachu",
                    "A. Şimşir"
                  ]
                },
                {
                  "teamId": 997,
                  "team": "Gençlerbirliği S.K.",
                  "formation": "4-1-4-1",
                  "coach": "M. Diyadin",
                  "starters": [
                    "İ. Eğribayat",
                    "Pedro Pereira",
                    "D. Goutas",
                    "Thalisson Kelven",
                    "F. Üzüm",
                    "Ousmane Diabate",
                    "A. Traoré",
                    "O. Ülgün",
                    "F. Tongya",
                    "Tiago Gouveia",
                    "S. Koïta"
                  ]
                }
              ]
            },
            {
              "fixtureId": 1584400,
              "kickoff": "2026-09-07T02:00:00+09:00",
              "status": "FT",
              "homeTeamId": 7411,
              "homeTeam": "Kocaelispor",
              "awayTeamId": 3603,
              "awayTeam": "Samsunspor",
              "injuriesChecked": true,
              "injuries": [
                {
                  "fixtureId": 1584400,
                  "teamId": 7411,
                  "playerId": 47558,
                  "player": "A. Jovanovic",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1584400,
                  "teamId": 7411,
                  "playerId": 1331,
                  "player": "B. Petkovic",
                  "type": "Missing Fixture",
                  "reason": "Hamstring Injury"
                },
                {
                  "fixtureId": 1584400,
                  "teamId": 7411,
                  "playerId": 50176,
                  "player": "T. Bingol",
                  "type": "Questionable",
                  "reason": "Inactive"
                },
                {
                  "fixtureId": 1584400,
                  "teamId": 7411,
                  "playerId": 31280,
                  "player": "R. Rivas",
                  "type": "Questionable",
                  "reason": "Inactive"
                },
                {
                  "fixtureId": 1584400,
                  "teamId": 3603,
                  "playerId": 356998,
                  "player": "J. Assoumou",
                  "type": "Missing Fixture",
                  "reason": "Inactive"
                },
                {
                  "fixtureId": 1584400,
                  "teamId": 3603,
                  "playerId": 113581,
                  "player": "T. Coulibaly",
                  "type": "Missing Fixture",
                  "reason": "Inactive"
                },
                {
                  "fixtureId": 1584400,
                  "teamId": 3603,
                  "playerId": 25223,
                  "player": "F. Kaya",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1584400,
                  "teamId": 3603,
                  "playerId": 531370,
                  "player": "Marius",
                  "type": "Missing Fixture",
                  "reason": "Inactive"
                },
                {
                  "fixtureId": 1584400,
                  "teamId": 3603,
                  "playerId": 130262,
                  "player": "A. Sousa",
                  "type": "Missing Fixture",
                  "reason": "Inactive"
                },
                {
                  "fixtureId": 1584400,
                  "teamId": 3603,
                  "playerId": 93001,
                  "player": "E. Tavsan",
                  "type": "Missing Fixture",
                  "reason": "Inactive"
                },
                {
                  "fixtureId": 1584400,
                  "teamId": 3603,
                  "playerId": 18749,
                  "player": "E. Watt",
                  "type": "Questionable",
                  "reason": "Inactive"
                }
              ],
              "lineupsChecked": true,
              "lineups": [
                {
                  "teamId": 7411,
                  "team": "Kocaelispor",
                  "formation": "4-1-4-1",
                  "coach": "S. İnan",
                  "starters": [
                    "S. Öztaşdelen",
                    "A. Dijksteel",
                    "T. Zoukrou",
                    "M. Maglica",
                    "M. Haïdara",
                    "Show",
                    "D. Agyei",
                    "U. Yıldız",
                    "B. Kutlu",
                    "Gonçalo Santos Sousa",
                    "F. Ayé"
                  ]
                },
                {
                  "teamId": 3603,
                  "team": "Samsunspor",
                  "formation": "4-4-2",
                  "coach": "Thorsten Fink",
                  "starters": [
                    "O. Kocuk",
                    "J. Mendes",
                    "Y. Çift",
                    "G. Guarino",
                    "L. Tómasson",
                    "Y. Kayan",
                    "C. Yüksel",
                    "S. Onur",
                    "E. Kılınç",
                    "Saikuba Jarju",
                    "Y. Sekongo"
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "date": "2026-09-08",
      "updatedAt": "2026-09-06T12:09:02.757Z",
      "leagues": [
        {
          "key": "LALIGA",
          "leagueId": 140,
          "season": "2026",
          "standings": [
            {
              "teamId": 529,
              "team": "Barcelona",
              "rank": 1,
              "points": 9,
              "goalsDiff": 10,
              "form": "WWW",
              "all": {
                "played": 3,
                "wins": 3,
                "draws": 0,
                "losses": 0,
                "goalsFor": 12,
                "goalsAgainst": 2
              },
              "home": {
                "played": 2,
                "wins": 2,
                "draws": 0,
                "losses": 0,
                "goalsFor": 7,
                "goalsAgainst": 2
              },
              "away": {
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 5,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 541,
              "team": "Real Madrid",
              "rank": 2,
              "points": 9,
              "goalsDiff": 7,
              "form": "LWWW",
              "all": {
                "played": 4,
                "wins": 3,
                "draws": 0,
                "losses": 1,
                "goalsFor": 10,
                "goalsAgainst": 3
              },
              "home": {
                "played": 2,
                "wins": 2,
                "draws": 0,
                "losses": 0,
                "goalsFor": 8,
                "goalsAgainst": 1
              },
              "away": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 2,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 543,
              "team": "Real Betis",
              "rank": 3,
              "points": 9,
              "goalsDiff": 0,
              "form": "WLWW",
              "all": {
                "played": 4,
                "wins": 3,
                "draws": 0,
                "losses": 1,
                "goalsFor": 5,
                "goalsAgainst": 5
              },
              "home": {
                "played": 2,
                "wins": 2,
                "draws": 0,
                "losses": 0,
                "goalsFor": 2,
                "goalsAgainst": 0
              },
              "away": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 5
              }
            },
            {
              "teamId": 544,
              "team": "Deportivo La Coruna",
              "rank": 4,
              "points": 8,
              "goalsDiff": 3,
              "form": "WWDD",
              "all": {
                "played": 4,
                "wins": 2,
                "draws": 2,
                "losses": 0,
                "goalsFor": 8,
                "goalsAgainst": 5
              },
              "home": {
                "played": 2,
                "wins": 1,
                "draws": 1,
                "losses": 0,
                "goalsFor": 4,
                "goalsAgainst": 2
              },
              "away": {
                "played": 2,
                "wins": 1,
                "draws": 1,
                "losses": 0,
                "goalsFor": 4,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 542,
              "team": "Alaves",
              "rank": 5,
              "points": 7,
              "goalsDiff": 4,
              "form": "WDW",
              "all": {
                "played": 3,
                "wins": 2,
                "draws": 1,
                "losses": 0,
                "goalsFor": 5,
                "goalsAgainst": 1
              },
              "home": {
                "played": 2,
                "wins": 2,
                "draws": 0,
                "losses": 0,
                "goalsFor": 4,
                "goalsAgainst": 0
              },
              "away": {
                "played": 1,
                "wins": 0,
                "draws": 1,
                "losses": 0,
                "goalsFor": 1,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 727,
              "team": "Osasuna",
              "rank": 6,
              "points": 7,
              "goalsDiff": 2,
              "form": "WWD",
              "all": {
                "played": 3,
                "wins": 2,
                "draws": 1,
                "losses": 0,
                "goalsFor": 3,
                "goalsAgainst": 1
              },
              "home": {
                "played": 2,
                "wins": 1,
                "draws": 1,
                "losses": 0,
                "goalsFor": 1,
                "goalsAgainst": 0
              },
              "away": {
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 2,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 530,
              "team": "Atletico Madrid",
              "rank": 7,
              "points": 7,
              "goalsDiff": 1,
              "form": "LWDW",
              "all": {
                "played": 4,
                "wins": 2,
                "draws": 1,
                "losses": 1,
                "goalsFor": 7,
                "goalsAgainst": 6
              },
              "home": {
                "played": 2,
                "wins": 1,
                "draws": 1,
                "losses": 0,
                "goalsFor": 4,
                "goalsAgainst": 2
              },
              "away": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 536,
              "team": "Sevilla",
              "rank": 8,
              "points": 6,
              "goalsDiff": 1,
              "form": "LWW",
              "all": {
                "played": 3,
                "wins": 2,
                "draws": 0,
                "losses": 1,
                "goalsFor": 6,
                "goalsAgainst": 5
              },
              "home": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 4
              },
              "away": {
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 3,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 531,
              "team": "Athletic Club",
              "rank": 9,
              "points": 6,
              "goalsDiff": 1,
              "form": "WWLL",
              "all": {
                "played": 4,
                "wins": 2,
                "draws": 0,
                "losses": 2,
                "goalsFor": 6,
                "goalsAgainst": 5
              },
              "home": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 4,
                "goalsAgainst": 3
              },
              "away": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 2,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 539,
              "team": "Levante",
              "rank": 10,
              "points": 4,
              "goalsDiff": 0,
              "form": "WDL",
              "all": {
                "played": 3,
                "wins": 1,
                "draws": 1,
                "losses": 1,
                "goalsFor": 5,
                "goalsAgainst": 5
              },
              "home": {
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 5,
                "goalsAgainst": 2
              },
              "away": {
                "played": 2,
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 0,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 4665,
              "team": "Racing Santander",
              "rank": 11,
              "points": 4,
              "goalsDiff": -1,
              "form": "LWLD",
              "all": {
                "played": 4,
                "wins": 1,
                "draws": 1,
                "losses": 2,
                "goalsFor": 7,
                "goalsAgainst": 8
              },
              "home": {
                "played": 2,
                "wins": 1,
                "draws": 1,
                "losses": 0,
                "goalsFor": 5,
                "goalsAgainst": 4
              },
              "away": {
                "played": 2,
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 2,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 728,
              "team": "Rayo Vallecano",
              "rank": 12,
              "points": 4,
              "goalsDiff": -3,
              "form": "WLDL",
              "all": {
                "played": 4,
                "wins": 1,
                "draws": 1,
                "losses": 2,
                "goalsFor": 7,
                "goalsAgainst": 10
              },
              "home": {
                "played": 2,
                "wins": 1,
                "draws": 1,
                "losses": 0,
                "goalsFor": 4,
                "goalsAgainst": 3
              },
              "away": {
                "played": 2,
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 3,
                "goalsAgainst": 7
              }
            },
            {
              "teamId": 548,
              "team": "Real Sociedad",
              "rank": 13,
              "points": 4,
              "goalsDiff": -3,
              "form": "DWLL",
              "all": {
                "played": 4,
                "wins": 1,
                "draws": 1,
                "losses": 2,
                "goalsFor": 3,
                "goalsAgainst": 6
              },
              "home": {
                "played": 2,
                "wins": 1,
                "draws": 1,
                "losses": 0,
                "goalsFor": 2,
                "goalsAgainst": 1
              },
              "away": {
                "played": 2,
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 1,
                "goalsAgainst": 5
              }
            },
            {
              "teamId": 540,
              "team": "Espanyol",
              "rank": 14,
              "points": 3,
              "goalsDiff": 1,
              "form": "LLW",
              "all": {
                "played": 3,
                "wins": 1,
                "draws": 0,
                "losses": 2,
                "goalsFor": 5,
                "goalsAgainst": 4
              },
              "home": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 4,
                "goalsAgainst": 2
              },
              "away": {
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 1,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 546,
              "team": "Getafe",
              "rank": 15,
              "points": 3,
              "goalsDiff": -3,
              "form": "LWL",
              "all": {
                "played": 3,
                "wins": 1,
                "draws": 0,
                "losses": 2,
                "goalsFor": 1,
                "goalsAgainst": 4
              },
              "home": {
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 1,
                "goalsAgainst": 0
              },
              "away": {
                "played": 2,
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 0,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 533,
              "team": "Villarreal",
              "rank": 16,
              "points": 2,
              "goalsDiff": -2,
              "form": "LLDD",
              "all": {
                "played": 4,
                "wins": 0,
                "draws": 2,
                "losses": 2,
                "goalsFor": 6,
                "goalsAgainst": 8
              },
              "home": {
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 2,
                "goalsAgainst": 3
              },
              "away": {
                "played": 3,
                "wins": 0,
                "draws": 2,
                "losses": 1,
                "goalsFor": 4,
                "goalsAgainst": 5
              }
            },
            {
              "teamId": 538,
              "team": "Celta Vigo",
              "rank": 17,
              "points": 2,
              "goalsDiff": -3,
              "form": "DLLD",
              "all": {
                "played": 4,
                "wins": 0,
                "draws": 2,
                "losses": 2,
                "goalsFor": 1,
                "goalsAgainst": 4
              },
              "home": {
                "played": 2,
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 1,
                "goalsAgainst": 4
              },
              "away": {
                "played": 2,
                "wins": 0,
                "draws": 2,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 532,
              "team": "Valencia",
              "rank": 18,
              "points": 1,
              "goalsDiff": -3,
              "form": "LLD",
              "all": {
                "played": 3,
                "wins": 0,
                "draws": 1,
                "losses": 2,
                "goalsFor": 1,
                "goalsAgainst": 4
              },
              "home": {
                "played": 2,
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 0,
                "goalsAgainst": 1
              },
              "away": {
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 1,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 797,
              "team": "Elche",
              "rank": 19,
              "points": 1,
              "goalsDiff": -6,
              "form": "LLD",
              "all": {
                "played": 3,
                "wins": 0,
                "draws": 1,
                "losses": 2,
                "goalsFor": 3,
                "goalsAgainst": 9
              },
              "home": {
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 0,
                "goalsAgainst": 5
              },
              "away": {
                "played": 2,
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 535,
              "team": "Malaga",
              "rank": 20,
              "points": 1,
              "goalsDiff": -6,
              "form": "LDL",
              "all": {
                "played": 3,
                "wins": 0,
                "draws": 1,
                "losses": 2,
                "goalsFor": 1,
                "goalsAgainst": 7
              },
              "home": {
                "played": 1,
                "wins": 0,
                "draws": 1,
                "losses": 0,
                "goalsFor": 1,
                "goalsAgainst": 1
              },
              "away": {
                "played": 2,
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 0,
                "goalsAgainst": 6
              }
            }
          ],
          "teams": [
            {
              "teamId": 546,
              "team": "Getafe",
              "form": "LWL",
              "all": {
                "played": 3,
                "wins": 1,
                "draws": 0,
                "losses": 2,
                "goalsFor": 1,
                "goalsAgainst": 4
              },
              "home": {
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 1,
                "goalsAgainst": 0
              },
              "away": {
                "played": 2,
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 0,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 538,
              "team": "Celta Vigo",
              "form": "DLLD",
              "all": {
                "played": 4,
                "wins": 0,
                "draws": 2,
                "losses": 2,
                "goalsFor": 1,
                "goalsAgainst": 4
              },
              "home": {
                "played": 2,
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 1,
                "goalsAgainst": 4
              },
              "away": {
                "played": 2,
                "wins": 0,
                "draws": 2,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 797,
              "team": "Elche",
              "form": "DLL",
              "all": {
                "played": 3,
                "wins": 0,
                "draws": 1,
                "losses": 2,
                "goalsFor": 3,
                "goalsAgainst": 9
              },
              "home": {
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 0,
                "goalsAgainst": 5
              },
              "away": {
                "played": 2,
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 548,
              "team": "Real Sociedad",
              "form": "LLWD",
              "all": {
                "played": 4,
                "wins": 1,
                "draws": 1,
                "losses": 2,
                "goalsFor": 3,
                "goalsAgainst": 6
              },
              "home": {
                "played": 2,
                "wins": 1,
                "draws": 1,
                "losses": 0,
                "goalsFor": 2,
                "goalsAgainst": 1
              },
              "away": {
                "played": 2,
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 1,
                "goalsAgainst": 5
              }
            }
          ],
          "fixtures": [
            {
              "fixtureId": 1570368,
              "kickoff": "2026-09-08T02:00:00+09:00",
              "status": "NS",
              "homeTeamId": 546,
              "homeTeam": "Getafe",
              "awayTeamId": 538,
              "awayTeam": "Celta Vigo",
              "injuriesChecked": true,
              "injuries": [
                {
                  "fixtureId": 1570368,
                  "teamId": 546,
                  "playerId": 47320,
                  "player": "Juanmi",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1570368,
                  "teamId": 546,
                  "playerId": 403554,
                  "player": "C. Uche",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1570368,
                  "teamId": 546,
                  "playerId": 46813,
                  "player": "A. Abqar",
                  "type": "Questionable",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1570368,
                  "teamId": 546,
                  "playerId": 388013,
                  "player": "A. Garcia",
                  "type": "Questionable",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1570368,
                  "teamId": 546,
                  "playerId": 343205,
                  "player": "M. Martin",
                  "type": "Questionable",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1570368,
                  "teamId": 538,
                  "playerId": 46711,
                  "player": "A. Febas",
                  "type": "Questionable",
                  "reason": "Ribs Injury"
                },
                {
                  "fixtureId": 1570368,
                  "teamId": 538,
                  "playerId": 47348,
                  "player": "B. Iglesias",
                  "type": "Questionable",
                  "reason": "Muscle Injury"
                }
              ],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1570366,
              "kickoff": "2026-09-08T04:30:00+09:00",
              "status": "NS",
              "homeTeamId": 797,
              "homeTeam": "Elche",
              "awayTeamId": 548,
              "awayTeam": "Real Sociedad",
              "injuriesChecked": true,
              "injuries": [
                {
                  "fixtureId": 1570366,
                  "teamId": 797,
                  "playerId": 284415,
                  "player": "Y. Santiago",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1570366,
                  "teamId": 797,
                  "playerId": 439293,
                  "player": "A. Boayar",
                  "type": "Questionable",
                  "reason": "Muscle Injury"
                },
                {
                  "fixtureId": 1570366,
                  "teamId": 797,
                  "playerId": 45,
                  "player": "T. Lemar",
                  "type": "Questionable",
                  "reason": "Coach's decision"
                },
                {
                  "fixtureId": 1570366,
                  "teamId": 548,
                  "playerId": 737,
                  "player": "A. Odriozola",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1570366,
                  "teamId": 548,
                  "playerId": 290106,
                  "player": "P. Marin",
                  "type": "Questionable",
                  "reason": "Injury"
                }
              ],
              "lineupsChecked": false,
              "lineups": []
            }
          ]
        },
        {
          "key": "SERIEA",
          "leagueId": 135,
          "season": "2026",
          "standings": [
            {
              "teamId": 497,
              "team": "AS Roma",
              "rank": 1,
              "points": 9,
              "goalsDiff": 9,
              "form": "WWW",
              "all": {
                "played": 3,
                "wins": 3,
                "draws": 0,
                "losses": 0,
                "goalsFor": 10,
                "goalsAgainst": 1
              },
              "home": {
                "played": 2,
                "wins": 2,
                "draws": 0,
                "losses": 0,
                "goalsFor": 6,
                "goalsAgainst": 1
              },
              "away": {
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 4,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 505,
              "team": "Inter",
              "rank": 2,
              "points": 9,
              "goalsDiff": 5,
              "form": "WWW",
              "all": {
                "played": 3,
                "wins": 3,
                "draws": 0,
                "losses": 0,
                "goalsFor": 8,
                "goalsAgainst": 3
              },
              "home": {
                "played": 2,
                "wins": 2,
                "draws": 0,
                "losses": 0,
                "goalsFor": 7,
                "goalsAgainst": 3
              },
              "away": {
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 1,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 895,
              "team": "Como",
              "rank": 3,
              "points": 7,
              "goalsDiff": 4,
              "form": "WWD",
              "all": {
                "played": 3,
                "wins": 2,
                "draws": 1,
                "losses": 0,
                "goalsFor": 7,
                "goalsAgainst": 3
              },
              "home": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "away": {
                "played": 3,
                "wins": 2,
                "draws": 1,
                "losses": 0,
                "goalsFor": 7,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 489,
              "team": "AC Milan",
              "rank": 4,
              "points": 6,
              "goalsDiff": 3,
              "form": "WW",
              "all": {
                "played": 2,
                "wins": 2,
                "draws": 0,
                "losses": 0,
                "goalsFor": 4,
                "goalsAgainst": 1
              },
              "home": {
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 2,
                "goalsAgainst": 0
              },
              "away": {
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 2,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 496,
              "team": "Juventus",
              "rank": 5,
              "points": 6,
              "goalsDiff": 3,
              "form": "WW",
              "all": {
                "played": 2,
                "wins": 2,
                "draws": 0,
                "losses": 0,
                "goalsFor": 3,
                "goalsAgainst": 0
              },
              "home": {
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 2,
                "goalsAgainst": 0
              },
              "away": {
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 1,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 487,
              "team": "Lazio",
              "rank": 6,
              "points": 6,
              "goalsDiff": 2,
              "form": "WW",
              "all": {
                "played": 2,
                "wins": 2,
                "draws": 0,
                "losses": 0,
                "goalsFor": 2,
                "goalsAgainst": 0
              },
              "home": {
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 1,
                "goalsAgainst": 0
              },
              "away": {
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 1,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 499,
              "team": "Atalanta",
              "rank": 7,
              "points": 6,
              "goalsDiff": 1,
              "form": "LWW",
              "all": {
                "played": 3,
                "wins": 2,
                "draws": 0,
                "losses": 1,
                "goalsFor": 4,
                "goalsAgainst": 3
              },
              "home": {
                "played": 2,
                "wins": 2,
                "draws": 0,
                "losses": 0,
                "goalsFor": 3,
                "goalsAgainst": 1
              },
              "away": {
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 1,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 494,
              "team": "Udinese",
              "rank": 8,
              "points": 4,
              "goalsDiff": 1,
              "form": "WD",
              "all": {
                "played": 2,
                "wins": 1,
                "draws": 1,
                "losses": 0,
                "goalsFor": 4,
                "goalsAgainst": 3
              },
              "home": {
                "played": 1,
                "wins": 0,
                "draws": 1,
                "losses": 0,
                "goalsFor": 1,
                "goalsAgainst": 1
              },
              "away": {
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 3,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 512,
              "team": "Frosinone",
              "rank": 9,
              "points": 3,
              "goalsDiff": 2,
              "form": "WL",
              "all": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 1
              },
              "home": {
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 0,
                "goalsAgainst": 1
              },
              "away": {
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 3,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 488,
              "team": "Sassuolo",
              "rank": 10,
              "points": 3,
              "goalsDiff": 0,
              "form": "WL",
              "all": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 3
              },
              "home": {
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 2,
                "goalsAgainst": 1
              },
              "away": {
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 1,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 490,
              "team": "Cagliari",
              "rank": 11,
              "points": 3,
              "goalsDiff": 0,
              "form": "LW",
              "all": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 1,
                "goalsAgainst": 1
              },
              "home": {
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 0,
                "goalsAgainst": 1
              },
              "away": {
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 1,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 867,
              "team": "Lecce",
              "rank": 12,
              "points": 3,
              "goalsDiff": -2,
              "form": "LW",
              "all": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 2,
                "goalsAgainst": 4
              },
              "home": {
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 0,
                "goalsAgainst": 4
              },
              "away": {
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 2,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 492,
              "team": "Napoli",
              "rank": 13,
              "points": 3,
              "goalsDiff": 0,
              "form": "LLW",
              "all": {
                "played": 3,
                "wins": 1,
                "draws": 0,
                "losses": 2,
                "goalsFor": 5,
                "goalsAgainst": 5
              },
              "home": {
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 1,
                "goalsAgainst": 2
              },
              "away": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 4,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 503,
              "team": "Torino",
              "rank": 14,
              "points": 3,
              "goalsDiff": -1,
              "form": "WLL",
              "all": {
                "played": 3,
                "wins": 1,
                "draws": 0,
                "losses": 2,
                "goalsFor": 4,
                "goalsAgainst": 5
              },
              "home": {
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 1,
                "goalsAgainst": 2
              },
              "away": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 500,
              "team": "Bologna",
              "rank": 15,
              "points": 0,
              "goalsDiff": -2,
              "form": "LL",
              "all": {
                "played": 2,
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 0,
                "goalsAgainst": 2
              },
              "home": {
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 0,
                "goalsAgainst": 1
              },
              "away": {
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 0,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 523,
              "team": "Parma",
              "rank": 16,
              "points": 0,
              "goalsDiff": -3,
              "form": "LL",
              "all": {
                "played": 2,
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 0,
                "goalsAgainst": 3
              },
              "home": {
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 0,
                "goalsAgainst": 1
              },
              "away": {
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 0,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 1579,
              "team": "Monza",
              "rank": 17,
              "points": 0,
              "goalsDiff": -4,
              "form": "LL",
              "all": {
                "played": 2,
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 3,
                "goalsAgainst": 7
              },
              "home": {
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 2,
                "goalsAgainst": 3
              },
              "away": {
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 1,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 517,
              "team": "Venezia",
              "rank": 18,
              "points": 0,
              "goalsDiff": -4,
              "form": "LL",
              "all": {
                "played": 2,
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 0,
                "goalsAgainst": 4
              },
              "home": {
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 0,
                "goalsAgainst": 2
              },
              "away": {
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 0,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 495,
              "team": "Genoa",
              "rank": 19,
              "points": 0,
              "goalsDiff": -6,
              "form": "LLL",
              "all": {
                "played": 3,
                "wins": 0,
                "draws": 0,
                "losses": 3,
                "goalsFor": 1,
                "goalsAgainst": 7
              },
              "home": {
                "played": 2,
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 1,
                "goalsAgainst": 6
              },
              "away": {
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 0,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 502,
              "team": "Fiorentina",
              "rank": 20,
              "points": 0,
              "goalsDiff": -8,
              "form": "LLL",
              "all": {
                "played": 3,
                "wins": 0,
                "draws": 0,
                "losses": 3,
                "goalsFor": 1,
                "goalsAgainst": 9
              },
              "home": {
                "played": 2,
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 1,
                "goalsAgainst": 5
              },
              "away": {
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 0,
                "goalsAgainst": 4
              }
            }
          ],
          "teams": [
            {
              "teamId": 490,
              "team": "Cagliari",
              "form": "WL",
              "all": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 1,
                "goalsAgainst": 1
              },
              "home": {
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 0,
                "goalsAgainst": 1
              },
              "away": {
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 1,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 867,
              "team": "Lecce",
              "form": "WL",
              "all": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 2,
                "goalsAgainst": 4
              },
              "home": {
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 0,
                "goalsAgainst": 4
              },
              "away": {
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 2,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 494,
              "team": "Udinese",
              "form": "DW",
              "all": {
                "played": 2,
                "wins": 1,
                "draws": 1,
                "losses": 0,
                "goalsFor": 4,
                "goalsAgainst": 3
              },
              "home": {
                "played": 1,
                "wins": 0,
                "draws": 1,
                "losses": 0,
                "goalsFor": 1,
                "goalsAgainst": 1
              },
              "away": {
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 3,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 487,
              "team": "Lazio",
              "form": "WW",
              "all": {
                "played": 2,
                "wins": 2,
                "draws": 0,
                "losses": 0,
                "goalsFor": 2,
                "goalsAgainst": 0
              },
              "home": {
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 1,
                "goalsAgainst": 0
              },
              "away": {
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 1,
                "goalsAgainst": 0
              }
            }
          ],
          "fixtures": [
            {
              "fixtureId": 1550109,
              "kickoff": "2026-09-08T01:30:00+09:00",
              "status": "NS",
              "homeTeamId": 490,
              "homeTeam": "Cagliari",
              "awayTeamId": 867,
              "awayTeam": "Lecce",
              "injuriesChecked": true,
              "injuries": [
                {
                  "fixtureId": 1550109,
                  "teamId": 490,
                  "playerId": 383026,
                  "player": "R. Idrissi",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1550109,
                  "teamId": 490,
                  "playerId": 584116,
                  "player": "Y. Trepy",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1550109,
                  "teamId": 490,
                  "playerId": 2484,
                  "player": "Y. Mina",
                  "type": "Questionable",
                  "reason": "Calf Injury"
                },
                {
                  "fixtureId": 1550109,
                  "teamId": 867,
                  "playerId": 120,
                  "player": "W. Geubbels",
                  "type": "Questionable",
                  "reason": "Injury"
                }
              ],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1550116,
              "kickoff": "2026-09-08T03:45:00+09:00",
              "status": "NS",
              "homeTeamId": 494,
              "homeTeam": "Udinese",
              "awayTeamId": 487,
              "awayTeam": "Lazio",
              "injuriesChecked": true,
              "injuries": [
                {
                  "fixtureId": 1550116,
                  "teamId": 494,
                  "playerId": 422156,
                  "player": "M. Palma",
                  "type": "Missing Fixture",
                  "reason": "Muscle Injury"
                },
                {
                  "fixtureId": 1550116,
                  "teamId": 494,
                  "playerId": 786,
                  "player": "N. Zaniolo",
                  "type": "Missing Fixture",
                  "reason": "Thigh Injury"
                },
                {
                  "fixtureId": 1550116,
                  "teamId": 494,
                  "playerId": 8481,
                  "player": "G. Chakvetadze",
                  "type": "Questionable",
                  "reason": "Foot Injury"
                },
                {
                  "fixtureId": 1550116,
                  "teamId": 494,
                  "playerId": 162907,
                  "player": "A. Zanoli",
                  "type": "Questionable",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1550116,
                  "teamId": 487,
                  "playerId": 1852,
                  "player": "D. Cataldi",
                  "type": "Missing Fixture",
                  "reason": "Groin Injury"
                },
                {
                  "fixtureId": 1550116,
                  "teamId": 487,
                  "playerId": 144740,
                  "player": "F. Dele-Bashiru",
                  "type": "Missing Fixture",
                  "reason": "Muscle Injury"
                },
                {
                  "fixtureId": 1550116,
                  "teamId": 487,
                  "playerId": 63934,
                  "player": "A. Furlanetto",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1550116,
                  "teamId": 487,
                  "playerId": 1844,
                  "player": "A. Marusic",
                  "type": "Missing Fixture",
                  "reason": "Muscle Injury"
                },
                {
                  "fixtureId": 1550116,
                  "teamId": 487,
                  "playerId": 1841,
                  "player": "Patric",
                  "type": "Missing Fixture",
                  "reason": "Ankle Injury"
                },
                {
                  "fixtureId": 1550116,
                  "teamId": 487,
                  "playerId": 30554,
                  "player": "L. Pellegrini",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1550116,
                  "teamId": 487,
                  "playerId": 30784,
                  "player": "N. Rovella",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                }
              ],
              "lineupsChecked": false,
              "lineups": []
            }
          ]
        },
        {
          "key": "PRIMEIRA_LIGA",
          "leagueId": 94,
          "season": "2026",
          "standings": [
            {
              "teamId": 212,
              "team": "FC Porto",
              "rank": 1,
              "points": 15,
              "goalsDiff": 10,
              "form": "WWWWW",
              "all": {
                "played": 5,
                "wins": 5,
                "draws": 0,
                "losses": 0,
                "goalsFor": 11,
                "goalsAgainst": 1
              },
              "home": {
                "played": 3,
                "wins": 3,
                "draws": 0,
                "losses": 0,
                "goalsFor": 6,
                "goalsAgainst": 1
              },
              "away": {
                "played": 2,
                "wins": 2,
                "draws": 0,
                "losses": 0,
                "goalsFor": 5,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 228,
              "team": "Sporting CP",
              "rank": 2,
              "points": 13,
              "goalsDiff": 9,
              "form": "WWWWD",
              "all": {
                "played": 5,
                "wins": 4,
                "draws": 1,
                "losses": 0,
                "goalsFor": 14,
                "goalsAgainst": 5
              },
              "home": {
                "played": 3,
                "wins": 3,
                "draws": 0,
                "losses": 0,
                "goalsFor": 8,
                "goalsAgainst": 3
              },
              "away": {
                "played": 2,
                "wins": 1,
                "draws": 1,
                "losses": 0,
                "goalsFor": 6,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 211,
              "team": "Benfica",
              "rank": 3,
              "points": 10,
              "goalsDiff": 11,
              "form": "WWWD",
              "all": {
                "played": 4,
                "wins": 3,
                "draws": 1,
                "losses": 0,
                "goalsFor": 14,
                "goalsAgainst": 3
              },
              "home": {
                "played": 2,
                "wins": 1,
                "draws": 1,
                "losses": 0,
                "goalsFor": 4,
                "goalsAgainst": 3
              },
              "away": {
                "played": 2,
                "wins": 2,
                "draws": 0,
                "losses": 0,
                "goalsFor": 10,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 240,
              "team": "Arouca",
              "rank": 4,
              "points": 9,
              "goalsDiff": 4,
              "form": "WLWW",
              "all": {
                "played": 4,
                "wins": 3,
                "draws": 0,
                "losses": 1,
                "goalsFor": 7,
                "goalsAgainst": 3
              },
              "home": {
                "played": 2,
                "wins": 2,
                "draws": 0,
                "losses": 0,
                "goalsFor": 6,
                "goalsAgainst": 1
              },
              "away": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 1,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 227,
              "team": "Santa Clara",
              "rank": 5,
              "points": 8,
              "goalsDiff": 2,
              "form": "DWWD",
              "all": {
                "played": 4,
                "wins": 2,
                "draws": 2,
                "losses": 0,
                "goalsFor": 5,
                "goalsAgainst": 3
              },
              "home": {
                "played": 2,
                "wins": 1,
                "draws": 1,
                "losses": 0,
                "goalsFor": 3,
                "goalsAgainst": 2
              },
              "away": {
                "played": 2,
                "wins": 1,
                "draws": 1,
                "losses": 0,
                "goalsFor": 2,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 762,
              "team": "GIL Vicente",
              "rank": 6,
              "points": 7,
              "goalsDiff": 3,
              "form": "DWW",
              "all": {
                "played": 3,
                "wins": 2,
                "draws": 1,
                "losses": 0,
                "goalsFor": 3,
                "goalsAgainst": 0
              },
              "home": {
                "played": 2,
                "wins": 2,
                "draws": 0,
                "losses": 0,
                "goalsFor": 3,
                "goalsAgainst": 0
              },
              "away": {
                "played": 1,
                "wins": 0,
                "draws": 1,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 217,
              "team": "SC Braga",
              "rank": 7,
              "points": 7,
              "goalsDiff": 2,
              "form": "WWD",
              "all": {
                "played": 3,
                "wins": 2,
                "draws": 1,
                "losses": 0,
                "goalsFor": 5,
                "goalsAgainst": 3
              },
              "home": {
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 1,
                "goalsAgainst": 0
              },
              "away": {
                "played": 2,
                "wins": 1,
                "draws": 1,
                "losses": 0,
                "goalsFor": 4,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 214,
              "team": "Maritimo",
              "rank": 8,
              "points": 7,
              "goalsDiff": -2,
              "form": "LLDWW",
              "all": {
                "played": 5,
                "wins": 2,
                "draws": 1,
                "losses": 2,
                "goalsFor": 6,
                "goalsAgainst": 8
              },
              "home": {
                "played": 3,
                "wins": 1,
                "draws": 1,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 5
              },
              "away": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 15130,
              "team": "Estrela",
              "rank": 9,
              "points": 6,
              "goalsDiff": 1,
              "form": "DWDD",
              "all": {
                "played": 4,
                "wins": 1,
                "draws": 3,
                "losses": 0,
                "goalsFor": 9,
                "goalsAgainst": 8
              },
              "home": {
                "played": 2,
                "wins": 0,
                "draws": 2,
                "losses": 0,
                "goalsFor": 4,
                "goalsAgainst": 4
              },
              "away": {
                "played": 2,
                "wins": 1,
                "draws": 1,
                "losses": 0,
                "goalsFor": 5,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 225,
              "team": "Nacional",
              "rank": 10,
              "points": 4,
              "goalsDiff": -2,
              "form": "LLLWD",
              "all": {
                "played": 5,
                "wins": 1,
                "draws": 1,
                "losses": 3,
                "goalsFor": 6,
                "goalsAgainst": 8
              },
              "home": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 4,
                "goalsAgainst": 3
              },
              "away": {
                "played": 3,
                "wins": 0,
                "draws": 1,
                "losses": 2,
                "goalsFor": 2,
                "goalsAgainst": 5
              }
            },
            {
              "teamId": 215,
              "team": "Moreirense",
              "rank": 11,
              "points": 4,
              "goalsDiff": -4,
              "form": "LWLD",
              "all": {
                "played": 4,
                "wins": 1,
                "draws": 1,
                "losses": 2,
                "goalsFor": 4,
                "goalsAgainst": 8
              },
              "home": {
                "played": 1,
                "wins": 0,
                "draws": 1,
                "losses": 0,
                "goalsFor": 2,
                "goalsAgainst": 2
              },
              "away": {
                "played": 3,
                "wins": 1,
                "draws": 0,
                "losses": 2,
                "goalsFor": 2,
                "goalsAgainst": 6
              }
            },
            {
              "teamId": 224,
              "team": "Vitória SC",
              "rank": 12,
              "points": 3,
              "goalsDiff": -2,
              "form": "LWLL",
              "all": {
                "played": 4,
                "wins": 1,
                "draws": 0,
                "losses": 3,
                "goalsFor": 3,
                "goalsAgainst": 5
              },
              "home": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 1,
                "goalsAgainst": 1
              },
              "away": {
                "played": 2,
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 2,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 242,
              "team": "Famalicao",
              "rank": 13,
              "points": 3,
              "goalsDiff": -2,
              "form": "DDLLD",
              "all": {
                "played": 5,
                "wins": 0,
                "draws": 3,
                "losses": 2,
                "goalsFor": 4,
                "goalsAgainst": 6
              },
              "home": {
                "played": 2,
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 1,
                "goalsAgainst": 2
              },
              "away": {
                "played": 3,
                "wins": 0,
                "draws": 2,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 226,
              "team": "Rio Ave",
              "rank": 14,
              "points": 3,
              "goalsDiff": -5,
              "form": "LWLL",
              "all": {
                "played": 4,
                "wins": 1,
                "draws": 0,
                "losses": 3,
                "goalsFor": 2,
                "goalsAgainst": 7
              },
              "home": {
                "played": 2,
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 0,
                "goalsAgainst": 6
              },
              "away": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 2,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 238,
              "team": "Academico Viseu",
              "rank": 15,
              "points": 2,
              "goalsDiff": -4,
              "form": "LDLD",
              "all": {
                "played": 4,
                "wins": 0,
                "draws": 2,
                "losses": 2,
                "goalsFor": 4,
                "goalsAgainst": 8
              },
              "home": {
                "played": 2,
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 0,
                "goalsAgainst": 4
              },
              "away": {
                "played": 2,
                "wins": 0,
                "draws": 2,
                "losses": 0,
                "goalsFor": 4,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 4724,
              "team": "Alverca",
              "rank": 16,
              "points": 2,
              "goalsDiff": -5,
              "form": "LDLDL",
              "all": {
                "played": 5,
                "wins": 0,
                "draws": 2,
                "losses": 3,
                "goalsFor": 5,
                "goalsAgainst": 10
              },
              "home": {
                "played": 3,
                "wins": 0,
                "draws": 2,
                "losses": 1,
                "goalsFor": 4,
                "goalsAgainst": 5
              },
              "away": {
                "played": 2,
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 1,
                "goalsAgainst": 5
              }
            },
            {
              "teamId": 230,
              "team": "Estoril",
              "rank": 17,
              "points": 1,
              "goalsDiff": -5,
              "form": "LLLD",
              "all": {
                "played": 4,
                "wins": 0,
                "draws": 1,
                "losses": 3,
                "goalsFor": 2,
                "goalsAgainst": 7
              },
              "home": {
                "played": 2,
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 1,
                "goalsAgainst": 3
              },
              "away": {
                "played": 2,
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 1,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 4716,
              "team": "Casa Pia",
              "rank": 18,
              "points": 0,
              "goalsDiff": -11,
              "form": "LLLL",
              "all": {
                "played": 4,
                "wins": 0,
                "draws": 0,
                "losses": 4,
                "goalsFor": 0,
                "goalsAgainst": 11
              },
              "home": {
                "played": 2,
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 0,
                "goalsAgainst": 8
              },
              "away": {
                "played": 2,
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 0,
                "goalsAgainst": 3
              }
            }
          ],
          "teams": [
            {
              "teamId": 230,
              "team": "Estoril",
              "form": "DLLL",
              "all": {
                "played": 4,
                "wins": 0,
                "draws": 1,
                "losses": 3,
                "goalsFor": 2,
                "goalsAgainst": 7
              },
              "home": {
                "played": 2,
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 1,
                "goalsAgainst": 3
              },
              "away": {
                "played": 2,
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 1,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 240,
              "team": "Arouca",
              "form": "WWLW",
              "all": {
                "played": 4,
                "wins": 3,
                "draws": 0,
                "losses": 1,
                "goalsFor": 7,
                "goalsAgainst": 3
              },
              "home": {
                "played": 2,
                "wins": 2,
                "draws": 0,
                "losses": 0,
                "goalsFor": 6,
                "goalsAgainst": 1
              },
              "away": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 1,
                "goalsAgainst": 2
              }
            }
          ],
          "fixtures": [
            {
              "fixtureId": 1575483,
              "kickoff": "2026-09-08T04:15:00+09:00",
              "status": "NS",
              "homeTeamId": 230,
              "homeTeam": "Estoril",
              "awayTeamId": 240,
              "awayTeam": "Arouca",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            }
          ]
        },
        {
          "key": "SUPER_LIG",
          "leagueId": 203,
          "season": "2026",
          "standings": [
            {
              "teamId": 645,
              "team": "Galatasaray",
              "rank": 1,
              "points": 10,
              "goalsDiff": 6,
              "form": "WWWD",
              "all": {
                "played": 4,
                "wins": 3,
                "draws": 1,
                "losses": 0,
                "goalsFor": 12,
                "goalsAgainst": 6
              },
              "home": {
                "played": 2,
                "wins": 1,
                "draws": 1,
                "losses": 0,
                "goalsFor": 5,
                "goalsAgainst": 4
              },
              "away": {
                "played": 2,
                "wins": 2,
                "draws": 0,
                "losses": 0,
                "goalsFor": 7,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 549,
              "team": "Beşiktaş",
              "rank": 2,
              "points": 9,
              "goalsDiff": 5,
              "form": "WWLW",
              "all": {
                "played": 4,
                "wins": 3,
                "draws": 0,
                "losses": 1,
                "goalsFor": 9,
                "goalsAgainst": 4
              },
              "home": {
                "played": 2,
                "wins": 2,
                "draws": 0,
                "losses": 0,
                "goalsFor": 7,
                "goalsAgainst": 2
              },
              "away": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 2,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 997,
              "team": "Gençlerbirliği S.K.",
              "rank": 3,
              "points": 7,
              "goalsDiff": 2,
              "form": "DWW",
              "all": {
                "played": 3,
                "wins": 2,
                "draws": 1,
                "losses": 0,
                "goalsFor": 4,
                "goalsAgainst": 2
              },
              "home": {
                "played": 2,
                "wins": 1,
                "draws": 1,
                "losses": 0,
                "goalsFor": 3,
                "goalsAgainst": 2
              },
              "away": {
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 1,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 611,
              "team": "Fenerbahçe",
              "rank": 4,
              "points": 6,
              "goalsDiff": 2,
              "form": "LWWL",
              "all": {
                "played": 4,
                "wins": 2,
                "draws": 0,
                "losses": 2,
                "goalsFor": 8,
                "goalsAgainst": 6
              },
              "home": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 5,
                "goalsAgainst": 4
              },
              "away": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 3579,
              "team": "Amed",
              "rank": 5,
              "points": 6,
              "goalsDiff": 2,
              "form": "WLW",
              "all": {
                "played": 3,
                "wins": 2,
                "draws": 0,
                "losses": 1,
                "goalsFor": 5,
                "goalsAgainst": 3
              },
              "home": {
                "played": 2,
                "wins": 2,
                "draws": 0,
                "losses": 0,
                "goalsFor": 5,
                "goalsAgainst": 1
              },
              "away": {
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 0,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 7411,
              "team": "Kocaelispor",
              "rank": 6,
              "points": 6,
              "goalsDiff": 1,
              "form": "WWL",
              "all": {
                "played": 3,
                "wins": 2,
                "draws": 0,
                "losses": 1,
                "goalsFor": 4,
                "goalsAgainst": 3
              },
              "home": {
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 2,
                "goalsAgainst": 0
              },
              "away": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 2,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 1007,
              "team": "Rizespor",
              "rank": 7,
              "points": 6,
              "goalsDiff": 0,
              "form": "WLW",
              "all": {
                "played": 3,
                "wins": 2,
                "draws": 0,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 3
              },
              "home": {
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 0,
                "goalsAgainst": 2
              },
              "away": {
                "played": 2,
                "wins": 2,
                "draws": 0,
                "losses": 0,
                "goalsFor": 3,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 1004,
              "team": "Kasımpaşa",
              "rank": 8,
              "points": 5,
              "goalsDiff": 1,
              "form": "DWD",
              "all": {
                "played": 3,
                "wins": 1,
                "draws": 2,
                "losses": 0,
                "goalsFor": 3,
                "goalsAgainst": 2
              },
              "home": {
                "played": 1,
                "wins": 0,
                "draws": 1,
                "losses": 0,
                "goalsFor": 1,
                "goalsAgainst": 1
              },
              "away": {
                "played": 2,
                "wins": 1,
                "draws": 1,
                "losses": 0,
                "goalsFor": 2,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 564,
              "team": "Başakşehir",
              "rank": 9,
              "points": 4,
              "goalsDiff": 0,
              "form": "LDLW",
              "all": {
                "played": 4,
                "wins": 1,
                "draws": 1,
                "losses": 2,
                "goalsFor": 6,
                "goalsAgainst": 6
              },
              "home": {
                "played": 3,
                "wins": 1,
                "draws": 1,
                "losses": 1,
                "goalsFor": 5,
                "goalsAgainst": 4
              },
              "away": {
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 1,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 3603,
              "team": "Samsunspor",
              "rank": 10,
              "points": 4,
              "goalsDiff": 0,
              "form": "LWD",
              "all": {
                "played": 3,
                "wins": 1,
                "draws": 1,
                "losses": 1,
                "goalsFor": 5,
                "goalsAgainst": 5
              },
              "home": {
                "played": 2,
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 5
              },
              "away": {
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 2,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 998,
              "team": "Trabzonspor",
              "rank": 11,
              "points": 4,
              "goalsDiff": 0,
              "form": "LWD",
              "all": {
                "played": 3,
                "wins": 1,
                "draws": 1,
                "losses": 1,
                "goalsFor": 4,
                "goalsAgainst": 4
              },
              "home": {
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 2,
                "goalsAgainst": 1
              },
              "away": {
                "played": 2,
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 2,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 3573,
              "team": "Gaziantep FK",
              "rank": 12,
              "points": 4,
              "goalsDiff": 0,
              "form": "LWD",
              "all": {
                "played": 3,
                "wins": 1,
                "draws": 1,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 3
              },
              "home": {
                "played": 2,
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 2,
                "goalsAgainst": 3
              },
              "away": {
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 1,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 996,
              "team": "Alanyaspor",
              "rank": 13,
              "points": 4,
              "goalsDiff": 0,
              "form": "LWD",
              "all": {
                "played": 3,
                "wins": 1,
                "draws": 1,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 3
              },
              "home": {
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 1,
                "goalsAgainst": 0
              },
              "away": {
                "played": 2,
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 2,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 1009,
              "team": "Erzurumspor FK",
              "rank": 14,
              "points": 4,
              "goalsDiff": -6,
              "form": "WDLL",
              "all": {
                "played": 4,
                "wins": 1,
                "draws": 1,
                "losses": 2,
                "goalsFor": 2,
                "goalsAgainst": 8
              },
              "home": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 1,
                "goalsAgainst": 4
              },
              "away": {
                "played": 2,
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 1,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 3588,
              "team": "Eyüpspor",
              "rank": 15,
              "points": 3,
              "goalsDiff": -1,
              "form": "WLL",
              "all": {
                "played": 3,
                "wins": 1,
                "draws": 0,
                "losses": 2,
                "goalsFor": 2,
                "goalsAgainst": 3
              },
              "home": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 2,
                "goalsAgainst": 2
              },
              "away": {
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 0,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 994,
              "team": "Göztepe",
              "rank": 16,
              "points": 1,
              "goalsDiff": -2,
              "form": "LLD",
              "all": {
                "played": 3,
                "wins": 0,
                "draws": 1,
                "losses": 2,
                "goalsFor": 5,
                "goalsAgainst": 7
              },
              "home": {
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 0,
                "goalsAgainst": 1
              },
              "away": {
                "played": 2,
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 5,
                "goalsAgainst": 6
              }
            },
            {
              "teamId": 6343,
              "team": "Çorum FK",
              "rank": 17,
              "points": 1,
              "goalsDiff": -5,
              "form": "LLD",
              "all": {
                "played": 3,
                "wins": 0,
                "draws": 1,
                "losses": 2,
                "goalsFor": 4,
                "goalsAgainst": 9
              },
              "home": {
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 0,
                "goalsAgainst": 1
              },
              "away": {
                "played": 2,
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 4,
                "goalsAgainst": 8
              }
            },
            {
              "teamId": 607,
              "team": "Konyaspor",
              "rank": 18,
              "points": 0,
              "goalsDiff": -5,
              "form": "LLLL",
              "all": {
                "played": 4,
                "wins": 0,
                "draws": 0,
                "losses": 4,
                "goalsFor": 3,
                "goalsAgainst": 8
              },
              "home": {
                "played": 2,
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 1,
                "goalsAgainst": 3
              },
              "away": {
                "played": 2,
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 2,
                "goalsAgainst": 5
              }
            }
          ],
          "teams": [
            {
              "teamId": 994,
              "team": "Göztepe",
              "form": "DLL",
              "all": {
                "played": 3,
                "wins": 0,
                "draws": 1,
                "losses": 2,
                "goalsFor": 5,
                "goalsAgainst": 7
              },
              "home": {
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 0,
                "goalsAgainst": 1
              },
              "away": {
                "played": 2,
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 5,
                "goalsAgainst": 6
              }
            },
            {
              "teamId": 3573,
              "team": "Gaziantep FK",
              "form": "DWL",
              "all": {
                "played": 3,
                "wins": 1,
                "draws": 1,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 3
              },
              "home": {
                "played": 2,
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 2,
                "goalsAgainst": 3
              },
              "away": {
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 1,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 1007,
              "team": "Rizespor",
              "form": "WLW",
              "all": {
                "played": 3,
                "wins": 2,
                "draws": 0,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 3
              },
              "home": {
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 0,
                "goalsAgainst": 2
              },
              "away": {
                "played": 2,
                "wins": 2,
                "draws": 0,
                "losses": 0,
                "goalsFor": 3,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 996,
              "team": "Alanyaspor",
              "form": "DWL",
              "all": {
                "played": 3,
                "wins": 1,
                "draws": 1,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 3
              },
              "home": {
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 1,
                "goalsAgainst": 0
              },
              "away": {
                "played": 2,
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 2,
                "goalsAgainst": 3
              }
            }
          ],
          "fixtures": [
            {
              "fixtureId": 1584398,
              "kickoff": "2026-09-08T02:00:00+09:00",
              "status": "NS",
              "homeTeamId": 994,
              "homeTeam": "Göztepe",
              "awayTeamId": 3573,
              "awayTeam": "Gaziantep FK",
              "injuriesChecked": true,
              "injuries": [
                {
                  "fixtureId": 1584398,
                  "teamId": 994,
                  "playerId": 159466,
                  "player": "Allan Godoi",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1584398,
                  "teamId": 994,
                  "playerId": 48607,
                  "player": "A. Antunes",
                  "type": "Missing Fixture",
                  "reason": "Inactive"
                },
                {
                  "fixtureId": 1584398,
                  "teamId": 994,
                  "playerId": 62378,
                  "player": "F. Bayir",
                  "type": "Missing Fixture",
                  "reason": "Inactive"
                },
                {
                  "fixtureId": 1584398,
                  "teamId": 994,
                  "playerId": 432841,
                  "player": "I. Sabra",
                  "type": "Missing Fixture",
                  "reason": "Ankle Injury"
                },
                {
                  "fixtureId": 1584398,
                  "teamId": 994,
                  "playerId": 48091,
                  "player": "N. Sonko Sundberg",
                  "type": "Missing Fixture",
                  "reason": "Inactive"
                },
                {
                  "fixtureId": 1584398,
                  "teamId": 3573,
                  "playerId": 49964,
                  "player": "N. Sangare",
                  "type": "Missing Fixture",
                  "reason": "Inactive"
                },
                {
                  "fixtureId": 1584398,
                  "teamId": 3573,
                  "playerId": 62038,
                  "player": "F. Bavuk",
                  "type": "Questionable",
                  "reason": "Injury"
                }
              ],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1584401,
              "kickoff": "2026-09-08T02:00:00+09:00",
              "status": "NS",
              "homeTeamId": 1007,
              "homeTeam": "Rizespor",
              "awayTeamId": 996,
              "awayTeam": "Alanyaspor",
              "injuriesChecked": true,
              "injuries": [
                {
                  "fixtureId": 1584401,
                  "teamId": 1007,
                  "playerId": 73509,
                  "player": "K. Alikulov",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                }
              ],
              "lineupsChecked": false,
              "lineups": []
            }
          ]
        },
        {
          "key": "KLEAGUE1",
          "leagueId": 292,
          "season": "2026",
          "standings": [
            {
              "teamId": 2766,
              "team": "FC Seoul",
              "rank": 1,
              "points": 59,
              "goalsDiff": 32,
              "form": "WWWWW",
              "all": {
                "played": 27,
                "wins": 18,
                "draws": 5,
                "losses": 4,
                "goalsFor": 53,
                "goalsAgainst": 21
              },
              "home": {
                "played": 13,
                "wins": 8,
                "draws": 2,
                "losses": 3,
                "goalsFor": 22,
                "goalsAgainst": 10
              },
              "away": {
                "played": 14,
                "wins": 10,
                "draws": 3,
                "losses": 1,
                "goalsFor": 31,
                "goalsAgainst": 11
              }
            },
            {
              "teamId": 2762,
              "team": "Jeonbuk Motors",
              "rank": 2,
              "points": 42,
              "goalsDiff": 11,
              "form": "WDDWL",
              "all": {
                "played": 27,
                "wins": 11,
                "draws": 9,
                "losses": 7,
                "goalsFor": 34,
                "goalsAgainst": 23
              },
              "home": {
                "played": 13,
                "wins": 7,
                "draws": 2,
                "losses": 4,
                "goalsFor": 20,
                "goalsAgainst": 13
              },
              "away": {
                "played": 14,
                "wins": 4,
                "draws": 7,
                "losses": 3,
                "goalsFor": 14,
                "goalsAgainst": 10
              }
            },
            {
              "teamId": 2767,
              "team": "Ulsan Hyundai FC",
              "rank": 3,
              "points": 41,
              "goalsDiff": 4,
              "form": "DWLLL",
              "all": {
                "played": 27,
                "wins": 12,
                "draws": 5,
                "losses": 10,
                "goalsFor": 41,
                "goalsAgainst": 37
              },
              "home": {
                "played": 13,
                "wins": 6,
                "draws": 1,
                "losses": 6,
                "goalsFor": 23,
                "goalsAgainst": 22
              },
              "away": {
                "played": 14,
                "wins": 6,
                "draws": 4,
                "losses": 4,
                "goalsFor": 18,
                "goalsAgainst": 15
              }
            },
            {
              "teamId": 2761,
              "team": "Jeju United FC",
              "rank": 4,
              "points": 39,
              "goalsDiff": 4,
              "form": "DWLDW",
              "all": {
                "played": 27,
                "wins": 10,
                "draws": 9,
                "losses": 8,
                "goalsFor": 31,
                "goalsAgainst": 27
              },
              "home": {
                "played": 17,
                "wins": 5,
                "draws": 7,
                "losses": 5,
                "goalsFor": 18,
                "goalsAgainst": 18
              },
              "away": {
                "played": 10,
                "wins": 5,
                "draws": 2,
                "losses": 3,
                "goalsFor": 13,
                "goalsAgainst": 9
              }
            },
            {
              "teamId": 2746,
              "team": "Gangwon FC",
              "rank": 5,
              "points": 37,
              "goalsDiff": 6,
              "form": "DDLWL",
              "all": {
                "played": 25,
                "wins": 9,
                "draws": 10,
                "losses": 6,
                "goalsFor": 30,
                "goalsAgainst": 24
              },
              "home": {
                "played": 12,
                "wins": 4,
                "draws": 6,
                "losses": 2,
                "goalsFor": 16,
                "goalsAgainst": 11
              },
              "away": {
                "played": 13,
                "wins": 5,
                "draws": 4,
                "losses": 4,
                "goalsFor": 14,
                "goalsAgainst": 13
              }
            },
            {
              "teamId": 2750,
              "team": "Daejeon Citizen",
              "rank": 6,
              "points": 35,
              "goalsDiff": 8,
              "form": "WLWWL",
              "all": {
                "played": 27,
                "wins": 9,
                "draws": 8,
                "losses": 10,
                "goalsFor": 40,
                "goalsAgainst": 32
              },
              "home": {
                "played": 13,
                "wins": 3,
                "draws": 5,
                "losses": 5,
                "goalsFor": 14,
                "goalsAgainst": 15
              },
              "away": {
                "played": 14,
                "wins": 6,
                "draws": 3,
                "losses": 5,
                "goalsFor": 26,
                "goalsAgainst": 17
              }
            },
            {
              "teamId": 2764,
              "team": "Pohang Steelers",
              "rank": 7,
              "points": 35,
              "goalsDiff": -7,
              "form": "LDWLW",
              "all": {
                "played": 27,
                "wins": 10,
                "draws": 5,
                "losses": 12,
                "goalsFor": 24,
                "goalsAgainst": 31
              },
              "home": {
                "played": 11,
                "wins": 3,
                "draws": 2,
                "losses": 6,
                "goalsFor": 4,
                "goalsAgainst": 10
              },
              "away": {
                "played": 16,
                "wins": 7,
                "draws": 3,
                "losses": 6,
                "goalsFor": 20,
                "goalsAgainst": 21
              }
            },
            {
              "teamId": 2748,
              "team": "FC Anyang",
              "rank": 8,
              "points": 34,
              "goalsDiff": -6,
              "form": "DWLLL",
              "all": {
                "played": 26,
                "wins": 8,
                "draws": 10,
                "losses": 8,
                "goalsFor": 33,
                "goalsAgainst": 39
              },
              "home": {
                "played": 13,
                "wins": 3,
                "draws": 5,
                "losses": 5,
                "goalsFor": 15,
                "goalsAgainst": 23
              },
              "away": {
                "played": 13,
                "wins": 5,
                "draws": 5,
                "losses": 3,
                "goalsFor": 18,
                "goalsAgainst": 16
              }
            },
            {
              "teamId": 2763,
              "team": "Incheon United",
              "rank": 9,
              "points": 34,
              "goalsDiff": 3,
              "form": "LDLWD",
              "all": {
                "played": 26,
                "wins": 9,
                "draws": 7,
                "losses": 10,
                "goalsFor": 32,
                "goalsAgainst": 29
              },
              "home": {
                "played": 13,
                "wins": 4,
                "draws": 3,
                "losses": 6,
                "goalsFor": 14,
                "goalsAgainst": 14
              },
              "away": {
                "played": 13,
                "wins": 5,
                "draws": 4,
                "losses": 4,
                "goalsFor": 18,
                "goalsAgainst": 15
              }
            },
            {
              "teamId": 2745,
              "team": "Bucheon FC 1995",
              "rank": 10,
              "points": 31,
              "goalsDiff": -6,
              "form": "LDLWW",
              "all": {
                "played": 27,
                "wins": 7,
                "draws": 10,
                "losses": 10,
                "goalsFor": 28,
                "goalsAgainst": 34
              },
              "home": {
                "played": 15,
                "wins": 3,
                "draws": 6,
                "losses": 6,
                "goalsFor": 16,
                "goalsAgainst": 22
              },
              "away": {
                "played": 12,
                "wins": 4,
                "draws": 4,
                "losses": 4,
                "goalsFor": 12,
                "goalsAgainst": 12
              }
            },
            {
              "teamId": 2768,
              "team": "Gimcheon Sangmu FC",
              "rank": 11,
              "points": 27,
              "goalsDiff": -8,
              "form": "LDDDD",
              "all": {
                "played": 26,
                "wins": 4,
                "draws": 15,
                "losses": 7,
                "goalsFor": 24,
                "goalsAgainst": 32
              },
              "home": {
                "played": 12,
                "wins": 1,
                "draws": 8,
                "losses": 3,
                "goalsFor": 10,
                "goalsAgainst": 16
              },
              "away": {
                "played": 14,
                "wins": 3,
                "draws": 7,
                "losses": 4,
                "goalsFor": 14,
                "goalsAgainst": 16
              }
            },
            {
              "teamId": 2759,
              "team": "Gwangju FC",
              "rank": 12,
              "points": 12,
              "goalsDiff": -41,
              "form": "LDLLD",
              "all": {
                "played": 26,
                "wins": 1,
                "draws": 9,
                "losses": 16,
                "goalsFor": 16,
                "goalsAgainst": 57
              },
              "home": {
                "played": 14,
                "wins": 1,
                "draws": 4,
                "losses": 9,
                "goalsFor": 11,
                "goalsAgainst": 29
              },
              "away": {
                "played": 12,
                "wins": 0,
                "draws": 5,
                "losses": 7,
                "goalsFor": 5,
                "goalsAgainst": 28
              }
            }
          ],
          "teams": [
            {
              "teamId": 2763,
              "team": "Incheon United",
              "form": "LLDLWWLDWWLDWLWLLWWDDDWLDL",
              "all": {
                "played": 26,
                "wins": 9,
                "draws": 7,
                "losses": 10,
                "goalsFor": 32,
                "goalsAgainst": 29
              },
              "home": {
                "played": 13,
                "wins": 4,
                "draws": 3,
                "losses": 6,
                "goalsFor": 14,
                "goalsAgainst": 14
              },
              "away": {
                "played": 13,
                "wins": 5,
                "draws": 4,
                "losses": 4,
                "goalsFor": 18,
                "goalsAgainst": 15
              }
            },
            {
              "teamId": 2745,
              "team": "Bucheon FC 1995",
              "form": "WDLDDLWDLLWLLDWDDLLDWDWWLDL",
              "all": {
                "played": 27,
                "wins": 7,
                "draws": 10,
                "losses": 10,
                "goalsFor": 28,
                "goalsAgainst": 34
              },
              "home": {
                "played": 15,
                "wins": 3,
                "draws": 6,
                "losses": 6,
                "goalsFor": 16,
                "goalsAgainst": 22
              },
              "away": {
                "played": 12,
                "wins": 4,
                "draws": 4,
                "losses": 4,
                "goalsFor": 12,
                "goalsAgainst": 12
              }
            },
            {
              "teamId": 2767,
              "team": "Ulsan Hyundai FC",
              "form": "WWWDLWLWDLLWWWLDLDLWWWLLLWD",
              "all": {
                "played": 27,
                "wins": 12,
                "draws": 5,
                "losses": 10,
                "goalsFor": 41,
                "goalsAgainst": 37
              },
              "home": {
                "played": 13,
                "wins": 6,
                "draws": 1,
                "losses": 6,
                "goalsFor": 23,
                "goalsAgainst": 22
              },
              "away": {
                "played": 14,
                "wins": 6,
                "draws": 4,
                "losses": 4,
                "goalsFor": 18,
                "goalsAgainst": 15
              }
            },
            {
              "teamId": 2766,
              "team": "FC Seoul",
              "form": "WWWWDWWLWWLDLWWWDWWLDDWWWWW",
              "all": {
                "played": 27,
                "wins": 18,
                "draws": 5,
                "losses": 4,
                "goalsFor": 53,
                "goalsAgainst": 21
              },
              "home": {
                "played": 13,
                "wins": 8,
                "draws": 2,
                "losses": 3,
                "goalsFor": 22,
                "goalsAgainst": 10
              },
              "away": {
                "played": 14,
                "wins": 10,
                "draws": 3,
                "losses": 1,
                "goalsFor": 31,
                "goalsAgainst": 11
              }
            }
          ],
          "fixtures": [
            {
              "fixtureId": 1507058,
              "kickoff": "2026-09-08T19:30:00+09:00",
              "status": "NS",
              "homeTeamId": 2763,
              "homeTeam": "Incheon United",
              "awayTeamId": 2745,
              "awayTeam": "Bucheon FC 1995",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1507059,
              "kickoff": "2026-09-08T19:30:00+09:00",
              "status": "NS",
              "homeTeamId": 2767,
              "homeTeam": "Ulsan Hyundai FC",
              "awayTeamId": 2766,
              "awayTeam": "FC Seoul",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            }
          ]
        }
      ]
    },
    {
      "date": "2026-09-09",
      "updatedAt": "2026-09-06T12:09:13.192Z",
      "leagues": [
        {
          "key": "CHAMPIONSHIP",
          "leagueId": 40,
          "season": "2026",
          "standings": [
            {
              "teamId": 76,
              "team": "Swansea",
              "rank": 1,
              "points": 11,
              "goalsDiff": 6,
              "form": "DWWDW",
              "all": {
                "played": 5,
                "wins": 3,
                "draws": 2,
                "losses": 0,
                "goalsFor": 7,
                "goalsAgainst": 1
              },
              "home": {
                "played": 3,
                "wins": 1,
                "draws": 2,
                "losses": 0,
                "goalsFor": 2,
                "goalsAgainst": 0
              },
              "away": {
                "played": 2,
                "wins": 2,
                "draws": 0,
                "losses": 0,
                "goalsFor": 5,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 70,
              "team": "Middlesbrough",
              "rank": 2,
              "points": 10,
              "goalsDiff": 3,
              "form": "WDWLW",
              "all": {
                "played": 5,
                "wins": 3,
                "draws": 1,
                "losses": 1,
                "goalsFor": 8,
                "goalsAgainst": 5
              },
              "home": {
                "played": 2,
                "wins": 2,
                "draws": 0,
                "losses": 0,
                "goalsFor": 5,
                "goalsAgainst": 2
              },
              "away": {
                "played": 3,
                "wins": 1,
                "draws": 1,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 72,
              "team": "QPR",
              "rank": 3,
              "points": 10,
              "goalsDiff": 3,
              "form": "LWWDW",
              "all": {
                "played": 5,
                "wins": 3,
                "draws": 1,
                "losses": 1,
                "goalsFor": 7,
                "goalsAgainst": 4
              },
              "home": {
                "played": 3,
                "wins": 1,
                "draws": 1,
                "losses": 1,
                "goalsFor": 2,
                "goalsAgainst": 2
              },
              "away": {
                "played": 2,
                "wins": 2,
                "draws": 0,
                "losses": 0,
                "goalsFor": 5,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 56,
              "team": "Bristol City",
              "rank": 4,
              "points": 10,
              "goalsDiff": 2,
              "form": "WWWDL",
              "all": {
                "played": 5,
                "wins": 3,
                "draws": 1,
                "losses": 1,
                "goalsFor": 9,
                "goalsAgainst": 7
              },
              "home": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 2,
                "goalsAgainst": 3
              },
              "away": {
                "played": 3,
                "wins": 2,
                "draws": 1,
                "losses": 0,
                "goalsFor": 7,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 60,
              "team": "West Brom",
              "rank": 5,
              "points": 10,
              "goalsDiff": 2,
              "form": "WDLWW",
              "all": {
                "played": 5,
                "wins": 3,
                "draws": 1,
                "losses": 1,
                "goalsFor": 8,
                "goalsAgainst": 6
              },
              "home": {
                "played": 3,
                "wins": 2,
                "draws": 1,
                "losses": 0,
                "goalsFor": 5,
                "goalsAgainst": 2
              },
              "away": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 1335,
              "team": "Charlton",
              "rank": 6,
              "points": 10,
              "goalsDiff": -1,
              "form": "LDWWW",
              "all": {
                "played": 5,
                "wins": 3,
                "draws": 1,
                "losses": 1,
                "goalsFor": 6,
                "goalsAgainst": 7
              },
              "home": {
                "played": 2,
                "wins": 2,
                "draws": 0,
                "losses": 0,
                "goalsFor": 3,
                "goalsAgainst": 1
              },
              "away": {
                "played": 3,
                "wins": 1,
                "draws": 1,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 6
              }
            },
            {
              "teamId": 58,
              "team": "Millwall",
              "rank": 7,
              "points": 9,
              "goalsDiff": 2,
              "form": "WLLWW",
              "all": {
                "played": 5,
                "wins": 3,
                "draws": 0,
                "losses": 2,
                "goalsFor": 10,
                "goalsAgainst": 8
              },
              "home": {
                "played": 3,
                "wins": 2,
                "draws": 0,
                "losses": 1,
                "goalsFor": 7,
                "goalsAgainst": 3
              },
              "away": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 5
              }
            },
            {
              "teamId": 48,
              "team": "West Ham",
              "rank": 8,
              "points": 8,
              "goalsDiff": 4,
              "form": "WWDLD",
              "all": {
                "played": 5,
                "wins": 2,
                "draws": 2,
                "losses": 1,
                "goalsFor": 11,
                "goalsAgainst": 7
              },
              "home": {
                "played": 3,
                "wins": 2,
                "draws": 0,
                "losses": 1,
                "goalsFor": 8,
                "goalsAgainst": 4
              },
              "away": {
                "played": 2,
                "wins": 0,
                "draws": 2,
                "losses": 0,
                "goalsFor": 3,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 39,
              "team": "Wolves",
              "rank": 9,
              "points": 7,
              "goalsDiff": 3,
              "form": "LWWD",
              "all": {
                "played": 4,
                "wins": 2,
                "draws": 1,
                "losses": 1,
                "goalsFor": 11,
                "goalsAgainst": 8
              },
              "home": {
                "played": 2,
                "wins": 1,
                "draws": 1,
                "losses": 0,
                "goalsFor": 6,
                "goalsAgainst": 3
              },
              "away": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 5,
                "goalsAgainst": 5
              }
            },
            {
              "teamId": 1837,
              "team": "Wrexham",
              "rank": 10,
              "points": 6,
              "goalsDiff": 2,
              "form": "DWLDD",
              "all": {
                "played": 5,
                "wins": 1,
                "draws": 3,
                "losses": 1,
                "goalsFor": 6,
                "goalsAgainst": 4
              },
              "home": {
                "played": 2,
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 2,
                "goalsAgainst": 3
              },
              "away": {
                "played": 3,
                "wins": 1,
                "draws": 2,
                "losses": 0,
                "goalsFor": 4,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 54,
              "team": "Birmingham",
              "rank": 11,
              "points": 6,
              "goalsDiff": 1,
              "form": "DWDD",
              "all": {
                "played": 4,
                "wins": 1,
                "draws": 3,
                "losses": 0,
                "goalsFor": 5,
                "goalsAgainst": 4
              },
              "home": {
                "played": 2,
                "wins": 0,
                "draws": 2,
                "losses": 0,
                "goalsFor": 3,
                "goalsAgainst": 3
              },
              "away": {
                "played": 2,
                "wins": 1,
                "draws": 1,
                "losses": 0,
                "goalsFor": 2,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 71,
              "team": "Norwich",
              "rank": 12,
              "points": 6,
              "goalsDiff": 0,
              "form": "WLWLL",
              "all": {
                "played": 5,
                "wins": 2,
                "draws": 0,
                "losses": 3,
                "goalsFor": 8,
                "goalsAgainst": 8
              },
              "home": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 5,
                "goalsAgainst": 3
              },
              "away": {
                "played": 3,
                "wins": 1,
                "draws": 0,
                "losses": 2,
                "goalsFor": 3,
                "goalsAgainst": 5
              }
            },
            {
              "teamId": 75,
              "team": "Stoke City",
              "rank": 13,
              "points": 6,
              "goalsDiff": -1,
              "form": "WWLLL",
              "all": {
                "played": 5,
                "wins": 2,
                "draws": 0,
                "losses": 3,
                "goalsFor": 8,
                "goalsAgainst": 9
              },
              "home": {
                "played": 3,
                "wins": 2,
                "draws": 0,
                "losses": 1,
                "goalsFor": 6,
                "goalsAgainst": 2
              },
              "away": {
                "played": 2,
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 2,
                "goalsAgainst": 7
              }
            },
            {
              "teamId": 1355,
              "team": "Portsmouth",
              "rank": 14,
              "points": 6,
              "goalsDiff": -1,
              "form": "WLLWL",
              "all": {
                "played": 5,
                "wins": 2,
                "draws": 0,
                "losses": 3,
                "goalsFor": 7,
                "goalsAgainst": 8
              },
              "home": {
                "played": 3,
                "wins": 1,
                "draws": 0,
                "losses": 2,
                "goalsFor": 3,
                "goalsAgainst": 5
              },
              "away": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 4,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 62,
              "team": "Sheffield Utd",
              "rank": 15,
              "points": 6,
              "goalsDiff": -1,
              "form": "LWDDD",
              "all": {
                "played": 5,
                "wins": 1,
                "draws": 3,
                "losses": 1,
                "goalsFor": 6,
                "goalsAgainst": 7
              },
              "home": {
                "played": 3,
                "wins": 1,
                "draws": 1,
                "losses": 1,
                "goalsFor": 4,
                "goalsAgainst": 5
              },
              "away": {
                "played": 2,
                "wins": 0,
                "draws": 2,
                "losses": 0,
                "goalsFor": 2,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 67,
              "team": "Blackburn",
              "rank": 16,
              "points": 5,
              "goalsDiff": -1,
              "form": "LDLWD",
              "all": {
                "played": 5,
                "wins": 1,
                "draws": 2,
                "losses": 2,
                "goalsFor": 6,
                "goalsAgainst": 7
              },
              "home": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 3
              },
              "away": {
                "played": 3,
                "wins": 0,
                "draws": 2,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 38,
              "team": "Watford",
              "rank": 17,
              "points": 5,
              "goalsDiff": -2,
              "form": "LLDDW",
              "all": {
                "played": 5,
                "wins": 1,
                "draws": 2,
                "losses": 2,
                "goalsFor": 4,
                "goalsAgainst": 6
              },
              "home": {
                "played": 2,
                "wins": 1,
                "draws": 1,
                "losses": 0,
                "goalsFor": 3,
                "goalsAgainst": 2
              },
              "away": {
                "played": 3,
                "wins": 0,
                "draws": 1,
                "losses": 2,
                "goalsFor": 1,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 1379,
              "team": "Lincoln",
              "rank": 18,
              "points": 5,
              "goalsDiff": -2,
              "form": "DDWLL",
              "all": {
                "played": 5,
                "wins": 1,
                "draws": 2,
                "losses": 2,
                "goalsFor": 4,
                "goalsAgainst": 6
              },
              "home": {
                "played": 3,
                "wins": 0,
                "draws": 2,
                "losses": 1,
                "goalsFor": 2,
                "goalsAgainst": 4
              },
              "away": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 2,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 41,
              "team": "Southampton",
              "rank": 19,
              "points": 4,
              "goalsDiff": 5,
              "form": "DDWWL",
              "all": {
                "played": 5,
                "wins": 2,
                "draws": 2,
                "losses": 1,
                "goalsFor": 11,
                "goalsAgainst": 6
              },
              "home": {
                "played": 2,
                "wins": 2,
                "draws": 0,
                "losses": 0,
                "goalsFor": 8,
                "goalsAgainst": 2
              },
              "away": {
                "played": 3,
                "wins": 0,
                "draws": 2,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 69,
              "team": "Derby",
              "rank": 20,
              "points": 4,
              "goalsDiff": -5,
              "form": "LWLDL",
              "all": {
                "played": 5,
                "wins": 1,
                "draws": 1,
                "losses": 3,
                "goalsFor": 5,
                "goalsAgainst": 10
              },
              "home": {
                "played": 2,
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 2,
                "goalsAgainst": 5
              },
              "away": {
                "played": 3,
                "wins": 1,
                "draws": 0,
                "losses": 2,
                "goalsFor": 3,
                "goalsAgainst": 5
              }
            },
            {
              "teamId": 68,
              "team": "Bolton",
              "rank": 21,
              "points": 4,
              "goalsDiff": -5,
              "form": "LLLDW",
              "all": {
                "played": 5,
                "wins": 1,
                "draws": 1,
                "losses": 3,
                "goalsFor": 4,
                "goalsAgainst": 9
              },
              "home": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 2,
                "goalsAgainst": 2
              },
              "away": {
                "played": 3,
                "wins": 0,
                "draws": 1,
                "losses": 2,
                "goalsFor": 2,
                "goalsAgainst": 7
              }
            },
            {
              "teamId": 43,
              "team": "Cardiff",
              "rank": 22,
              "points": 3,
              "goalsDiff": -3,
              "form": "LLDDD",
              "all": {
                "played": 5,
                "wins": 0,
                "draws": 3,
                "losses": 2,
                "goalsFor": 6,
                "goalsAgainst": 9
              },
              "home": {
                "played": 2,
                "wins": 0,
                "draws": 2,
                "losses": 0,
                "goalsFor": 3,
                "goalsAgainst": 3
              },
              "away": {
                "played": 3,
                "wins": 0,
                "draws": 1,
                "losses": 2,
                "goalsFor": 3,
                "goalsAgainst": 6
              }
            },
            {
              "teamId": 59,
              "team": "Preston",
              "rank": 23,
              "points": 3,
              "goalsDiff": -5,
              "form": "WLLLL",
              "all": {
                "played": 5,
                "wins": 1,
                "draws": 0,
                "losses": 4,
                "goalsFor": 5,
                "goalsAgainst": 10
              },
              "home": {
                "played": 3,
                "wins": 1,
                "draws": 0,
                "losses": 2,
                "goalsFor": 4,
                "goalsAgainst": 7
              },
              "away": {
                "played": 2,
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 1,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 44,
              "team": "Burnley",
              "rank": 24,
              "points": 2,
              "goalsDiff": -6,
              "form": "LDLLD",
              "all": {
                "played": 5,
                "wins": 0,
                "draws": 2,
                "losses": 3,
                "goalsFor": 6,
                "goalsAgainst": 12
              },
              "home": {
                "played": 3,
                "wins": 0,
                "draws": 2,
                "losses": 1,
                "goalsFor": 4,
                "goalsAgainst": 5
              },
              "away": {
                "played": 2,
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 2,
                "goalsAgainst": 7
              }
            }
          ],
          "teams": [
            {
              "teamId": 38,
              "team": "Watford",
              "form": "WDDLL",
              "all": {
                "played": 5,
                "wins": 1,
                "draws": 2,
                "losses": 2,
                "goalsFor": 4,
                "goalsAgainst": 6
              },
              "home": {
                "played": 2,
                "wins": 1,
                "draws": 1,
                "losses": 0,
                "goalsFor": 3,
                "goalsAgainst": 2
              },
              "away": {
                "played": 3,
                "wins": 0,
                "draws": 1,
                "losses": 2,
                "goalsFor": 1,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 59,
              "team": "Preston",
              "form": "LLLLW",
              "all": {
                "played": 5,
                "wins": 1,
                "draws": 0,
                "losses": 4,
                "goalsFor": 5,
                "goalsAgainst": 10
              },
              "home": {
                "played": 3,
                "wins": 1,
                "draws": 0,
                "losses": 2,
                "goalsFor": 4,
                "goalsAgainst": 7
              },
              "away": {
                "played": 2,
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 1,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 41,
              "team": "Southampton",
              "form": "LWWDD",
              "all": {
                "played": 5,
                "wins": 2,
                "draws": 2,
                "losses": 1,
                "goalsFor": 11,
                "goalsAgainst": 6
              },
              "home": {
                "played": 2,
                "wins": 2,
                "draws": 0,
                "losses": 0,
                "goalsFor": 8,
                "goalsAgainst": 2
              },
              "away": {
                "played": 3,
                "wins": 0,
                "draws": 2,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 76,
              "team": "Swansea",
              "form": "WDWWD",
              "all": {
                "played": 5,
                "wins": 3,
                "draws": 2,
                "losses": 0,
                "goalsFor": 7,
                "goalsAgainst": 1
              },
              "home": {
                "played": 3,
                "wins": 1,
                "draws": 2,
                "losses": 0,
                "goalsFor": 2,
                "goalsAgainst": 0
              },
              "away": {
                "played": 2,
                "wins": 2,
                "draws": 0,
                "losses": 0,
                "goalsFor": 5,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 43,
              "team": "Cardiff",
              "form": "DDDLL",
              "all": {
                "played": 5,
                "wins": 0,
                "draws": 3,
                "losses": 2,
                "goalsFor": 6,
                "goalsAgainst": 9
              },
              "home": {
                "played": 2,
                "wins": 0,
                "draws": 2,
                "losses": 0,
                "goalsFor": 3,
                "goalsAgainst": 3
              },
              "away": {
                "played": 3,
                "wins": 0,
                "draws": 1,
                "losses": 2,
                "goalsFor": 3,
                "goalsAgainst": 6
              }
            },
            {
              "teamId": 75,
              "team": "Stoke City",
              "form": "LLLWW",
              "all": {
                "played": 5,
                "wins": 2,
                "draws": 0,
                "losses": 3,
                "goalsFor": 8,
                "goalsAgainst": 9
              },
              "home": {
                "played": 3,
                "wins": 2,
                "draws": 0,
                "losses": 1,
                "goalsFor": 6,
                "goalsAgainst": 2
              },
              "away": {
                "played": 2,
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 2,
                "goalsAgainst": 7
              }
            },
            {
              "teamId": 67,
              "team": "Blackburn",
              "form": "DWLDL",
              "all": {
                "played": 5,
                "wins": 1,
                "draws": 2,
                "losses": 2,
                "goalsFor": 6,
                "goalsAgainst": 7
              },
              "home": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 3
              },
              "away": {
                "played": 3,
                "wins": 0,
                "draws": 2,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 62,
              "team": "Sheffield Utd",
              "form": "DDDWL",
              "all": {
                "played": 5,
                "wins": 1,
                "draws": 3,
                "losses": 1,
                "goalsFor": 6,
                "goalsAgainst": 7
              },
              "home": {
                "played": 3,
                "wins": 1,
                "draws": 1,
                "losses": 1,
                "goalsFor": 4,
                "goalsAgainst": 5
              },
              "away": {
                "played": 2,
                "wins": 0,
                "draws": 2,
                "losses": 0,
                "goalsFor": 2,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 1837,
              "team": "Wrexham",
              "form": "DDLWD",
              "all": {
                "played": 5,
                "wins": 1,
                "draws": 3,
                "losses": 1,
                "goalsFor": 6,
                "goalsAgainst": 4
              },
              "home": {
                "played": 2,
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 2,
                "goalsAgainst": 3
              },
              "away": {
                "played": 3,
                "wins": 1,
                "draws": 2,
                "losses": 0,
                "goalsFor": 4,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 44,
              "team": "Burnley",
              "form": "DLLDL",
              "all": {
                "played": 5,
                "wins": 0,
                "draws": 2,
                "losses": 3,
                "goalsFor": 6,
                "goalsAgainst": 12
              },
              "home": {
                "played": 3,
                "wins": 0,
                "draws": 2,
                "losses": 1,
                "goalsFor": 4,
                "goalsAgainst": 5
              },
              "away": {
                "played": 2,
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 2,
                "goalsAgainst": 7
              }
            },
            {
              "teamId": 68,
              "team": "Bolton",
              "form": "WDLLL",
              "all": {
                "played": 5,
                "wins": 1,
                "draws": 1,
                "losses": 3,
                "goalsFor": 4,
                "goalsAgainst": 9
              },
              "home": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 2,
                "goalsAgainst": 2
              },
              "away": {
                "played": 3,
                "wins": 0,
                "draws": 1,
                "losses": 2,
                "goalsFor": 2,
                "goalsAgainst": 7
              }
            },
            {
              "teamId": 48,
              "team": "West Ham",
              "form": "DLDWW",
              "all": {
                "played": 5,
                "wins": 2,
                "draws": 2,
                "losses": 1,
                "goalsFor": 11,
                "goalsAgainst": 7
              },
              "home": {
                "played": 3,
                "wins": 2,
                "draws": 0,
                "losses": 1,
                "goalsFor": 8,
                "goalsAgainst": 4
              },
              "away": {
                "played": 2,
                "wins": 0,
                "draws": 2,
                "losses": 0,
                "goalsFor": 3,
                "goalsAgainst": 3
              }
            }
          ],
          "fixtures": [
            {
              "fixtureId": 1563149,
              "kickoff": "2026-09-09T03:45:00+09:00",
              "status": "NS",
              "homeTeamId": 38,
              "homeTeam": "Watford",
              "awayTeamId": 59,
              "awayTeam": "Preston",
              "injuriesChecked": true,
              "injuries": [
                {
                  "fixtureId": 1563149,
                  "teamId": 38,
                  "playerId": 152699,
                  "player": "K. Baah",
                  "type": "Missing Fixture",
                  "reason": "Knock"
                },
                {
                  "fixtureId": 1563149,
                  "teamId": 38,
                  "playerId": 20044,
                  "player": "M. Bola",
                  "type": "Missing Fixture",
                  "reason": "Hamstring Injury"
                },
                {
                  "fixtureId": 1563149,
                  "teamId": 38,
                  "playerId": 367473,
                  "player": "J. Grieves",
                  "type": "Missing Fixture",
                  "reason": "Lacking Match Fitness"
                },
                {
                  "fixtureId": 1563149,
                  "teamId": 38,
                  "playerId": 193296,
                  "player": "J. Ngakia",
                  "type": "Missing Fixture",
                  "reason": "Thigh Injury"
                },
                {
                  "fixtureId": 1563149,
                  "teamId": 38,
                  "playerId": 25502,
                  "player": "O. H. Traore",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1563149,
                  "teamId": 38,
                  "playerId": 351341,
                  "player": "T. Akomeah",
                  "type": "Questionable",
                  "reason": "Lacking Match Fitness"
                },
                {
                  "fixtureId": 1563149,
                  "teamId": 59,
                  "playerId": 19455,
                  "player": "B. Potts",
                  "type": "Missing Fixture",
                  "reason": "Ankle Injury"
                },
                {
                  "fixtureId": 1563149,
                  "teamId": 59,
                  "playerId": 459284,
                  "player": "T. Carroll",
                  "type": "Questionable",
                  "reason": "Ankle Injury"
                },
                {
                  "fixtureId": 1563149,
                  "teamId": 59,
                  "playerId": 70519,
                  "player": "A. McCann",
                  "type": "Questionable",
                  "reason": "Injury"
                }
              ],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1563148,
              "kickoff": "2026-09-09T03:45:00+09:00",
              "status": "NS",
              "homeTeamId": 41,
              "homeTeam": "Southampton",
              "awayTeamId": 76,
              "awayTeam": "Swansea",
              "injuriesChecked": true,
              "injuries": [
                {
                  "fixtureId": 1563148,
                  "teamId": 41,
                  "playerId": 282060,
                  "player": "C. Jander",
                  "type": "Missing Fixture",
                  "reason": "Lacking Match Fitness"
                },
                {
                  "fixtureId": 1563148,
                  "teamId": 76,
                  "playerId": 20457,
                  "player": "C. Burgess",
                  "type": "Missing Fixture",
                  "reason": "Achilles Tendon Injury"
                },
                {
                  "fixtureId": 1563148,
                  "teamId": 76,
                  "playerId": 68441,
                  "player": "G. Franco",
                  "type": "Missing Fixture",
                  "reason": "Ankle Injury"
                },
                {
                  "fixtureId": 1563148,
                  "teamId": 76,
                  "playerId": 45078,
                  "player": "R. Stewart",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                }
              ],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1563146,
              "kickoff": "2026-09-09T03:45:00+09:00",
              "status": "NS",
              "homeTeamId": 43,
              "homeTeam": "Cardiff",
              "awayTeamId": 75,
              "awayTeam": "Stoke City",
              "injuriesChecked": true,
              "injuries": [
                {
                  "fixtureId": 1563146,
                  "teamId": 43,
                  "playerId": 19016,
                  "player": "C. Chambers",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1563146,
                  "teamId": 43,
                  "playerId": 153434,
                  "player": "W. Fish",
                  "type": "Missing Fixture",
                  "reason": "Hernia"
                },
                {
                  "fixtureId": 1563146,
                  "teamId": 43,
                  "playerId": 394973,
                  "player": "D. Lawlor",
                  "type": "Missing Fixture",
                  "reason": "Muscle Injury"
                },
                {
                  "fixtureId": 1563146,
                  "teamId": 75,
                  "playerId": 18813,
                  "player": "A. Cresswell",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1563146,
                  "teamId": 75,
                  "playerId": 18914,
                  "player": "B. Gibson",
                  "type": "Missing Fixture",
                  "reason": "Head Injury"
                },
                {
                  "fixtureId": 1563146,
                  "teamId": 75,
                  "playerId": 360011,
                  "player": "A. Ampah",
                  "type": "Questionable",
                  "reason": "Hamstring Injury"
                },
                {
                  "fixtureId": 1563146,
                  "teamId": 75,
                  "playerId": 30809,
                  "player": "S. Ingelsson",
                  "type": "Questionable",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1563146,
                  "teamId": 75,
                  "playerId": 294552,
                  "player": "J. Tchamadeu",
                  "type": "Questionable",
                  "reason": "Knee Injury"
                }
              ],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1563143,
              "kickoff": "2026-09-09T03:45:00+09:00",
              "status": "NS",
              "homeTeamId": 67,
              "homeTeam": "Blackburn",
              "awayTeamId": 62,
              "awayTeam": "Sheffield Utd",
              "injuriesChecked": true,
              "injuries": [
                {
                  "fixtureId": 1563143,
                  "teamId": 67,
                  "playerId": 429613,
                  "player": "M. Baradji",
                  "type": "Missing Fixture",
                  "reason": "Hamstring Injury"
                },
                {
                  "fixtureId": 1563143,
                  "teamId": 67,
                  "playerId": 50968,
                  "player": "M. Jorgensen",
                  "type": "Missing Fixture",
                  "reason": "Hamstring Injury"
                },
                {
                  "fixtureId": 1563143,
                  "teamId": 67,
                  "playerId": 30998,
                  "player": "A. Kargbo",
                  "type": "Missing Fixture",
                  "reason": "Muscle Injury"
                },
                {
                  "fixtureId": 1563143,
                  "teamId": 67,
                  "playerId": 7037,
                  "player": "L. Miller",
                  "type": "Missing Fixture",
                  "reason": "Achilles Tendon Injury"
                },
                {
                  "fixtureId": 1563143,
                  "teamId": 67,
                  "playerId": 33147,
                  "player": "Y. Ohashi",
                  "type": "Missing Fixture",
                  "reason": "Inactive"
                },
                {
                  "fixtureId": 1563143,
                  "teamId": 67,
                  "playerId": 17395,
                  "player": "S. Wharton",
                  "type": "Missing Fixture",
                  "reason": "Achilles Tendon Injury"
                },
                {
                  "fixtureId": 1563143,
                  "teamId": 67,
                  "playerId": 313248,
                  "player": "M. Litherland",
                  "type": "Questionable",
                  "reason": "Muscle Injury"
                },
                {
                  "fixtureId": 1563143,
                  "teamId": 67,
                  "playerId": 17685,
                  "player": "H. Pickering",
                  "type": "Questionable",
                  "reason": "Inactive"
                },
                {
                  "fixtureId": 1563143,
                  "teamId": 62,
                  "playerId": 19961,
                  "player": "H. Burrows",
                  "type": "Missing Fixture",
                  "reason": "Inactive"
                },
                {
                  "fixtureId": 1563143,
                  "teamId": 62,
                  "playerId": 906,
                  "player": "T. Chong",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1563143,
                  "teamId": 62,
                  "playerId": 373615,
                  "player": "R. One",
                  "type": "Missing Fixture",
                  "reason": "Hamstring Injury"
                },
                {
                  "fixtureId": 1563143,
                  "teamId": 62,
                  "playerId": 17407,
                  "player": "F. Seriki",
                  "type": "Missing Fixture",
                  "reason": "Inactive"
                }
              ],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1563154,
              "kickoff": "2026-09-09T03:45:00+09:00",
              "status": "NS",
              "homeTeamId": 1837,
              "homeTeam": "Wrexham",
              "awayTeamId": 44,
              "awayTeam": "Burnley",
              "injuriesChecked": true,
              "injuries": [
                {
                  "fixtureId": 1563154,
                  "teamId": 1837,
                  "playerId": 278123,
                  "player": "S. Revan",
                  "type": "Missing Fixture",
                  "reason": "Hamstring Injury"
                },
                {
                  "fixtureId": 1563154,
                  "teamId": 1837,
                  "playerId": 194461,
                  "player": "G. Thomason",
                  "type": "Missing Fixture",
                  "reason": "Thigh Injury"
                },
                {
                  "fixtureId": 1563154,
                  "teamId": 1837,
                  "playerId": 126791,
                  "player": "N. Broadhead",
                  "type": "Questionable",
                  "reason": "Inactive"
                },
                {
                  "fixtureId": 1563154,
                  "teamId": 1837,
                  "playerId": 6931,
                  "player": "L. Cacace",
                  "type": "Questionable",
                  "reason": "Calf Injury"
                },
                {
                  "fixtureId": 1563154,
                  "teamId": 1837,
                  "playerId": 88457,
                  "player": "B. Sheaf",
                  "type": "Questionable",
                  "reason": "Inactive"
                },
                {
                  "fixtureId": 1563154,
                  "teamId": 44,
                  "playerId": 361388,
                  "player": "E. Agyei",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1563154,
                  "teamId": 44,
                  "playerId": 336578,
                  "player": "J. Banel",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1563154,
                  "teamId": 44,
                  "playerId": 18927,
                  "player": "A. Barnes",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1563154,
                  "teamId": 44,
                  "playerId": 25628,
                  "player": "J. Beyer",
                  "type": "Missing Fixture",
                  "reason": "Hamstring Injury"
                },
                {
                  "fixtureId": 1563154,
                  "teamId": 44,
                  "playerId": 19827,
                  "player": "J. Cullen",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1563154,
                  "teamId": 44,
                  "playerId": 98936,
                  "player": "L. Foster",
                  "type": "Missing Fixture",
                  "reason": "Inactive"
                },
                {
                  "fixtureId": 1563154,
                  "teamId": 44,
                  "playerId": 181797,
                  "player": "B. Humphreys",
                  "type": "Missing Fixture",
                  "reason": "Inactive"
                },
                {
                  "fixtureId": 1563154,
                  "teamId": 44,
                  "playerId": 330238,
                  "player": "Lucas Pires",
                  "type": "Missing Fixture",
                  "reason": "Inactive"
                },
                {
                  "fixtureId": 1563154,
                  "teamId": 44,
                  "playerId": 445472,
                  "player": "D. Satpaev",
                  "type": "Missing Fixture",
                  "reason": "Hamstring Injury"
                }
              ],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1563144,
              "kickoff": "2026-09-09T04:00:00+09:00",
              "status": "NS",
              "homeTeamId": 68,
              "homeTeam": "Bolton",
              "awayTeamId": 48,
              "awayTeam": "West Ham",
              "injuriesChecked": true,
              "injuries": [
                {
                  "fixtureId": 1563144,
                  "teamId": 68,
                  "playerId": 82034,
                  "player": "J. Sheehan",
                  "type": "Missing Fixture",
                  "reason": "Red Card"
                },
                {
                  "fixtureId": 1563144,
                  "teamId": 68,
                  "playerId": 284367,
                  "player": "L. Stephenson",
                  "type": "Missing Fixture",
                  "reason": "Inactive"
                },
                {
                  "fixtureId": 1563144,
                  "teamId": 48,
                  "playerId": 1243,
                  "player": "T. Soucek",
                  "type": "Missing Fixture",
                  "reason": "Ankle Injury"
                }
              ],
              "lineupsChecked": false,
              "lineups": []
            }
          ]
        },
        {
          "key": "EREDIVISIE",
          "leagueId": 88,
          "season": "2026",
          "standings": [
            {
              "teamId": 197,
              "team": "PSV Eindhoven",
              "rank": 1,
              "points": 13,
              "goalsDiff": 12,
              "form": "WWWWD",
              "all": {
                "played": 5,
                "wins": 4,
                "draws": 1,
                "losses": 0,
                "goalsFor": 18,
                "goalsAgainst": 6
              },
              "home": {
                "played": 2,
                "wins": 1,
                "draws": 1,
                "losses": 0,
                "goalsFor": 7,
                "goalsAgainst": 3
              },
              "away": {
                "played": 3,
                "wins": 3,
                "draws": 0,
                "losses": 0,
                "goalsFor": 11,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 201,
              "team": "AZ Alkmaar",
              "rank": 2,
              "points": 12,
              "goalsDiff": 10,
              "form": "WWWW",
              "all": {
                "played": 4,
                "wins": 4,
                "draws": 0,
                "losses": 0,
                "goalsFor": 13,
                "goalsAgainst": 3
              },
              "home": {
                "played": 2,
                "wins": 2,
                "draws": 0,
                "losses": 0,
                "goalsFor": 7,
                "goalsAgainst": 2
              },
              "away": {
                "played": 2,
                "wins": 2,
                "draws": 0,
                "losses": 0,
                "goalsFor": 6,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 209,
              "team": "Feyenoord",
              "rank": 3,
              "points": 11,
              "goalsDiff": 6,
              "form": "WDWDW",
              "all": {
                "played": 5,
                "wins": 3,
                "draws": 2,
                "losses": 0,
                "goalsFor": 13,
                "goalsAgainst": 7
              },
              "home": {
                "played": 2,
                "wins": 0,
                "draws": 2,
                "losses": 0,
                "goalsFor": 4,
                "goalsAgainst": 4
              },
              "away": {
                "played": 3,
                "wins": 3,
                "draws": 0,
                "losses": 0,
                "goalsFor": 9,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 196,
              "team": "Excelsior",
              "rank": 4,
              "points": 9,
              "goalsDiff": 7,
              "form": "WWLW",
              "all": {
                "played": 4,
                "wins": 3,
                "draws": 0,
                "losses": 1,
                "goalsFor": 10,
                "goalsAgainst": 3
              },
              "home": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 3
              },
              "away": {
                "played": 2,
                "wins": 2,
                "draws": 0,
                "losses": 0,
                "goalsFor": 7,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 194,
              "team": "Ajax",
              "rank": 5,
              "points": 7,
              "goalsDiff": 4,
              "form": "LWDW",
              "all": {
                "played": 4,
                "wins": 2,
                "draws": 1,
                "losses": 1,
                "goalsFor": 9,
                "goalsAgainst": 5
              },
              "home": {
                "played": 2,
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 5
              },
              "away": {
                "played": 2,
                "wins": 2,
                "draws": 0,
                "losses": 0,
                "goalsFor": 6,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 410,
              "team": "GO Ahead Eagles",
              "rank": 6,
              "points": 7,
              "goalsDiff": 2,
              "form": "LWDW",
              "all": {
                "played": 4,
                "wins": 2,
                "draws": 1,
                "losses": 1,
                "goalsFor": 11,
                "goalsAgainst": 9
              },
              "home": {
                "played": 2,
                "wins": 2,
                "draws": 0,
                "losses": 0,
                "goalsFor": 7,
                "goalsAgainst": 2
              },
              "away": {
                "played": 2,
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 4,
                "goalsAgainst": 7
              }
            },
            {
              "teamId": 205,
              "team": "Fortuna Sittard",
              "rank": 7,
              "points": 7,
              "goalsDiff": 1,
              "form": "WLWD",
              "all": {
                "played": 4,
                "wins": 2,
                "draws": 1,
                "losses": 1,
                "goalsFor": 8,
                "goalsAgainst": 7
              },
              "home": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 3
              },
              "away": {
                "played": 2,
                "wins": 1,
                "draws": 1,
                "losses": 0,
                "goalsFor": 5,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 415,
              "team": "Twente",
              "rank": 8,
              "points": 6,
              "goalsDiff": 4,
              "form": "WWL",
              "all": {
                "played": 3,
                "wins": 2,
                "draws": 0,
                "losses": 1,
                "goalsFor": 7,
                "goalsAgainst": 3
              },
              "home": {
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 3,
                "goalsAgainst": 1
              },
              "away": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 4,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 413,
              "team": "NEC Nijmegen",
              "rank": 9,
              "points": 6,
              "goalsDiff": 2,
              "form": "LWWL",
              "all": {
                "played": 4,
                "wins": 2,
                "draws": 0,
                "losses": 2,
                "goalsFor": 9,
                "goalsAgainst": 7
              },
              "home": {
                "played": 2,
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 2,
                "goalsAgainst": 5
              },
              "away": {
                "played": 2,
                "wins": 2,
                "draws": 0,
                "losses": 0,
                "goalsFor": 7,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 202,
              "team": "Groningen",
              "rank": 10,
              "points": 6,
              "goalsDiff": -1,
              "form": "LLWW",
              "all": {
                "played": 4,
                "wins": 2,
                "draws": 0,
                "losses": 2,
                "goalsFor": 9,
                "goalsAgainst": 10
              },
              "home": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 4,
                "goalsAgainst": 4
              },
              "away": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 5,
                "goalsAgainst": 6
              }
            },
            {
              "teamId": 210,
              "team": "Heerenveen",
              "rank": 11,
              "points": 5,
              "goalsDiff": -1,
              "form": "DLDW",
              "all": {
                "played": 4,
                "wins": 1,
                "draws": 2,
                "losses": 1,
                "goalsFor": 5,
                "goalsAgainst": 6
              },
              "home": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 1,
                "goalsAgainst": 2
              },
              "away": {
                "played": 2,
                "wins": 0,
                "draws": 2,
                "losses": 0,
                "goalsFor": 4,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 426,
              "team": "Sparta Rotterdam",
              "rank": 12,
              "points": 5,
              "goalsDiff": 0,
              "form": "DLDWL",
              "all": {
                "played": 5,
                "wins": 1,
                "draws": 2,
                "losses": 2,
                "goalsFor": 9,
                "goalsAgainst": 9
              },
              "home": {
                "played": 3,
                "wins": 0,
                "draws": 2,
                "losses": 1,
                "goalsFor": 5,
                "goalsAgainst": 6
              },
              "away": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 4,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 193,
              "team": "PEC Zwolle",
              "rank": 13,
              "points": 4,
              "goalsDiff": -4,
              "form": "DLWLL",
              "all": {
                "played": 5,
                "wins": 1,
                "draws": 1,
                "losses": 3,
                "goalsFor": 6,
                "goalsAgainst": 10
              },
              "home": {
                "played": 2,
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 1,
                "goalsAgainst": 5
              },
              "away": {
                "played": 3,
                "wins": 1,
                "draws": 1,
                "losses": 1,
                "goalsFor": 5,
                "goalsAgainst": 5
              }
            },
            {
              "teamId": 427,
              "team": "Telstar",
              "rank": 14,
              "points": 3,
              "goalsDiff": -5,
              "form": "LLW",
              "all": {
                "played": 3,
                "wins": 1,
                "draws": 0,
                "losses": 2,
                "goalsFor": 3,
                "goalsAgainst": 8
              },
              "home": {
                "played": 2,
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 1,
                "goalsAgainst": 7
              },
              "away": {
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 2,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 198,
              "team": "ADO Den Haag",
              "rank": 15,
              "points": 1,
              "goalsDiff": -7,
              "form": "DLLL",
              "all": {
                "played": 4,
                "wins": 0,
                "draws": 1,
                "losses": 3,
                "goalsFor": 4,
                "goalsAgainst": 11
              },
              "home": {
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 1,
                "goalsAgainst": 4
              },
              "away": {
                "played": 3,
                "wins": 0,
                "draws": 1,
                "losses": 2,
                "goalsFor": 3,
                "goalsAgainst": 7
              }
            },
            {
              "teamId": 207,
              "team": "Utrecht",
              "rank": 16,
              "points": 1,
              "goalsDiff": -9,
              "form": "LDLL",
              "all": {
                "played": 4,
                "wins": 0,
                "draws": 1,
                "losses": 3,
                "goalsFor": 6,
                "goalsAgainst": 15
              },
              "home": {
                "played": 2,
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 2,
                "goalsAgainst": 10
              },
              "away": {
                "played": 2,
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 4,
                "goalsAgainst": 5
              }
            },
            {
              "teamId": 195,
              "team": "Willem II",
              "rank": 17,
              "points": 1,
              "goalsDiff": -9,
              "form": "LDLL",
              "all": {
                "played": 4,
                "wins": 0,
                "draws": 1,
                "losses": 3,
                "goalsFor": 4,
                "goalsAgainst": 13
              },
              "home": {
                "played": 3,
                "wins": 0,
                "draws": 1,
                "losses": 2,
                "goalsFor": 3,
                "goalsAgainst": 9
              },
              "away": {
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 1,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 420,
              "team": "Cambuur",
              "rank": 18,
              "points": 0,
              "goalsDiff": -12,
              "form": "LLLL",
              "all": {
                "played": 4,
                "wins": 0,
                "draws": 0,
                "losses": 4,
                "goalsFor": 4,
                "goalsAgainst": 16
              },
              "home": {
                "played": 3,
                "wins": 0,
                "draws": 0,
                "losses": 3,
                "goalsFor": 3,
                "goalsAgainst": 13
              },
              "away": {
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 1,
                "goalsAgainst": 3
              }
            }
          ],
          "teams": [
            {
              "teamId": 413,
              "team": "NEC Nijmegen",
              "form": "LWWL",
              "all": {
                "played": 4,
                "wins": 2,
                "draws": 0,
                "losses": 2,
                "goalsFor": 9,
                "goalsAgainst": 7
              },
              "home": {
                "played": 2,
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 2,
                "goalsAgainst": 5
              },
              "away": {
                "played": 2,
                "wins": 2,
                "draws": 0,
                "losses": 0,
                "goalsFor": 7,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 196,
              "team": "Excelsior",
              "form": "WLWW",
              "all": {
                "played": 4,
                "wins": 3,
                "draws": 0,
                "losses": 1,
                "goalsFor": 10,
                "goalsAgainst": 3
              },
              "home": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 3
              },
              "away": {
                "played": 2,
                "wins": 2,
                "draws": 0,
                "losses": 0,
                "goalsFor": 7,
                "goalsAgainst": 0
              }
            }
          ],
          "fixtures": [
            {
              "fixtureId": 1552136,
              "kickoff": "2026-09-09T01:45:00+09:00",
              "status": "NS",
              "homeTeamId": 413,
              "homeTeam": "NEC Nijmegen",
              "awayTeamId": 196,
              "awayTeam": "Excelsior",
              "injuriesChecked": true,
              "injuries": [
                {
                  "fixtureId": 1552136,
                  "teamId": 413,
                  "playerId": 353808,
                  "player": "D. Fonville",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1552136,
                  "teamId": 413,
                  "playerId": 278159,
                  "player": "A. Kaplan",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1552136,
                  "teamId": 413,
                  "playerId": 47446,
                  "player": "E. Mor",
                  "type": "Missing Fixture",
                  "reason": "Inactive"
                },
                {
                  "fixtureId": 1552136,
                  "teamId": 413,
                  "playerId": 625,
                  "player": "P. Sandler",
                  "type": "Questionable",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1552136,
                  "teamId": 196,
                  "playerId": 321632,
                  "player": "N. Naujoks",
                  "type": "Questionable",
                  "reason": "Inactive"
                }
              ],
              "lineupsChecked": false,
              "lineups": []
            }
          ]
        },
        {
          "key": "UCL",
          "leagueId": 2,
          "season": "2026",
          "standings": [
            {
              "teamId": 575,
              "team": "AEK Athens FC",
              "rank": 1,
              "points": 0,
              "goalsDiff": 0,
              "form": "WD",
              "all": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "home": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "away": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 42,
              "team": "Arsenal",
              "rank": 2,
              "points": 0,
              "goalsDiff": 0,
              "form": "",
              "all": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "home": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "away": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 66,
              "team": "Aston Villa",
              "rank": 3,
              "points": 0,
              "goalsDiff": 0,
              "form": "",
              "all": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "home": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "away": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 530,
              "team": "Atletico Madrid",
              "rank": 4,
              "points": 0,
              "goalsDiff": 0,
              "form": "",
              "all": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "home": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "away": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 165,
              "team": "Borussia Dortmund",
              "rank": 5,
              "points": 0,
              "goalsDiff": 0,
              "form": "",
              "all": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "home": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "away": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 529,
              "team": "Barcelona",
              "rank": 6,
              "points": 0,
              "goalsDiff": 0,
              "form": "",
              "all": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "home": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "away": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 157,
              "team": "Bayern München",
              "rank": 7,
              "points": 0,
              "goalsDiff": 0,
              "form": "",
              "all": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "home": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "away": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 327,
              "team": "Bodo/Glimt",
              "rank": 8,
              "points": 0,
              "goalsDiff": 0,
              "form": "WWWD",
              "all": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "home": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "away": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 569,
              "team": "Club Brugge KV",
              "rank": 9,
              "points": 0,
              "goalsDiff": 0,
              "form": "",
              "all": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "home": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "away": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 895,
              "team": "Como",
              "rank": 10,
              "points": 0,
              "goalsDiff": 0,
              "form": "",
              "all": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "home": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "away": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 611,
              "team": "Fenerbahçe",
              "rank": 11,
              "points": 0,
              "goalsDiff": 0,
              "form": "WDWWD",
              "all": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "home": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "away": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 209,
              "team": "Feyenoord",
              "rank": 12,
              "points": 0,
              "goalsDiff": 0,
              "form": "",
              "all": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "home": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "away": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 645,
              "team": "Galatasaray",
              "rank": 13,
              "points": 0,
              "goalsDiff": 0,
              "form": "",
              "all": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "home": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "away": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 505,
              "team": "Inter",
              "rank": 14,
              "points": 0,
              "goalsDiff": 0,
              "form": "",
              "all": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "home": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "away": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 1026,
              "team": "Lask Linz",
              "rank": 15,
              "points": 0,
              "goalsDiff": 0,
              "form": "WL",
              "all": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "home": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "away": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 173,
              "team": "RB Leipzig",
              "rank": 16,
              "points": 0,
              "goalsDiff": 0,
              "form": "",
              "all": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "home": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "away": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 116,
              "team": "Lens",
              "rank": 17,
              "points": 0,
              "goalsDiff": 0,
              "form": "",
              "all": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "home": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "away": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 79,
              "team": "Lille",
              "rank": 18,
              "points": 0,
              "goalsDiff": 0,
              "form": "",
              "all": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "home": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "away": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 40,
              "team": "Liverpool",
              "rank": 19,
              "points": 0,
              "goalsDiff": 0,
              "form": "",
              "all": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "home": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "away": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 50,
              "team": "Manchester City",
              "rank": 20,
              "points": 0,
              "goalsDiff": 0,
              "form": "",
              "all": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "home": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "away": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 33,
              "team": "Manchester United",
              "rank": 21,
              "points": 0,
              "goalsDiff": 0,
              "form": "",
              "all": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "home": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "away": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 492,
              "team": "Napoli",
              "rank": 22,
              "points": 0,
              "goalsDiff": 0,
              "form": "",
              "all": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "home": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "away": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 85,
              "team": "Paris Saint Germain",
              "rank": 23,
              "points": 0,
              "goalsDiff": 0,
              "form": "",
              "all": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "home": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "away": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 212,
              "team": "FC Porto",
              "rank": 24,
              "points": 0,
              "goalsDiff": 0,
              "form": "",
              "all": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "home": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "away": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 197,
              "team": "PSV Eindhoven",
              "rank": 25,
              "points": 0,
              "goalsDiff": 0,
              "form": "",
              "all": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "home": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "away": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 543,
              "team": "Real Betis",
              "rank": 26,
              "points": 0,
              "goalsDiff": 0,
              "form": "",
              "all": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "home": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "away": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 541,
              "team": "Real Madrid",
              "rank": 27,
              "points": 0,
              "goalsDiff": 0,
              "form": "",
              "all": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "home": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "away": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 497,
              "team": "AS Roma",
              "rank": 28,
              "points": 0,
              "goalsDiff": 0,
              "form": "",
              "all": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "home": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "away": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 656,
              "team": "Slovan Bratislava",
              "rank": 29,
              "points": 0,
              "goalsDiff": 0,
              "form": "WDWWD",
              "all": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "home": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "away": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 13976,
              "team": "Sabah FA",
              "rank": 30,
              "points": 0,
              "goalsDiff": 0,
              "form": "WLWLW",
              "all": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "home": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "away": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 550,
              "team": "Shakhtar Donetsk",
              "rank": 31,
              "points": 0,
              "goalsDiff": 0,
              "form": "",
              "all": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "home": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "away": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 560,
              "team": "Slavia Praha",
              "rank": 32,
              "points": 0,
              "goalsDiff": 0,
              "form": "",
              "all": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "home": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "away": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 228,
              "team": "Sporting CP",
              "rank": 33,
              "points": 0,
              "goalsDiff": 0,
              "form": "",
              "all": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "home": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "away": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 172,
              "team": "VfB Stuttgart",
              "rank": 34,
              "points": 0,
              "goalsDiff": 0,
              "form": "",
              "all": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "home": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "away": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 759,
              "team": "Viking",
              "rank": 35,
              "points": 0,
              "goalsDiff": 0,
              "form": "WD",
              "all": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "home": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "away": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 533,
              "team": "Villarreal",
              "rank": 36,
              "points": 0,
              "goalsDiff": 0,
              "form": "",
              "all": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "home": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "away": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            }
          ],
          "teams": [
            {
              "teamId": 569,
              "team": "Club Brugge KV",
              "form": "",
              "all": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "home": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "away": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 66,
              "team": "Aston Villa",
              "form": "",
              "all": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "home": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "away": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 575,
              "team": "AEK Athens FC",
              "form": "DW",
              "all": {
                "played": 2,
                "wins": 1,
                "draws": 1,
                "losses": 0,
                "goalsFor": 4,
                "goalsAgainst": 0
              },
              "home": {
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 4,
                "goalsAgainst": 0
              },
              "away": {
                "played": 1,
                "wins": 0,
                "draws": 1,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 1026,
              "team": "Lask Linz",
              "form": "LW",
              "all": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 5,
                "goalsAgainst": 4
              },
              "home": {
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 5,
                "goalsAgainst": 1
              },
              "away": {
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 0,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 79,
              "team": "Lille",
              "form": "",
              "all": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "home": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "away": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 543,
              "team": "Real Betis",
              "form": "",
              "all": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "home": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "away": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 165,
              "team": "Borussia Dortmund",
              "form": "",
              "all": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "home": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "away": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 533,
              "team": "Villarreal",
              "form": "",
              "all": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "home": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "away": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 212,
              "team": "FC Porto",
              "form": "",
              "all": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "home": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "away": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 50,
              "team": "Manchester City",
              "form": "",
              "all": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "home": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "away": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 541,
              "team": "Real Madrid",
              "form": "",
              "all": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "home": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "away": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 505,
              "team": "Inter",
              "form": "",
              "all": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "home": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "away": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            }
          ],
          "fixtures": [
            {
              "fixtureId": 1635643,
              "kickoff": "2026-09-09T01:45:00+09:00",
              "status": "NS",
              "homeTeamId": 569,
              "homeTeam": "Club Brugge KV",
              "awayTeamId": 66,
              "awayTeam": "Aston Villa",
              "injuriesChecked": true,
              "injuries": [
                {
                  "fixtureId": 1635643,
                  "teamId": 569,
                  "playerId": 354027,
                  "player": "J. Ordonez",
                  "type": "Missing Fixture",
                  "reason": "Foot Injury"
                },
                {
                  "fixtureId": 1635643,
                  "teamId": 66,
                  "playerId": 478441,
                  "player": "M. Cisse",
                  "type": "Missing Fixture",
                  "reason": "Off the roster"
                },
                {
                  "fixtureId": 1635643,
                  "teamId": 66,
                  "playerId": 144729,
                  "player": "T. Harwood-Bellis",
                  "type": "Missing Fixture",
                  "reason": "Off the roster"
                },
                {
                  "fixtureId": 1635643,
                  "teamId": 66,
                  "playerId": 406244,
                  "player": "J. Manzambi",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1635643,
                  "teamId": 66,
                  "playerId": 162714,
                  "player": "A. Onana",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1635643,
                  "teamId": 66,
                  "playerId": 514519,
                  "player": "B. Madjo",
                  "type": "Questionable",
                  "reason": "Ankle Injury"
                }
              ],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1635609,
              "kickoff": "2026-09-09T01:45:00+09:00",
              "status": "NS",
              "homeTeamId": 575,
              "homeTeam": "AEK Athens FC",
              "awayTeamId": 1026,
              "awayTeam": "Lask Linz",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1635683,
              "kickoff": "2026-09-09T04:00:00+09:00",
              "status": "NS",
              "homeTeamId": 79,
              "homeTeam": "Lille",
              "awayTeamId": 543,
              "awayTeam": "Real Betis",
              "injuriesChecked": true,
              "injuries": [
                {
                  "fixtureId": 1635683,
                  "teamId": 79,
                  "playerId": 487381,
                  "player": "S. Diaoune",
                  "type": "Missing Fixture",
                  "reason": "Inactive"
                },
                {
                  "fixtureId": 1635683,
                  "teamId": 79,
                  "playerId": 306979,
                  "player": "H. Igamane",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1635683,
                  "teamId": 79,
                  "playerId": 133110,
                  "player": "T. Nianzou",
                  "type": "Missing Fixture",
                  "reason": "Inactive"
                },
                {
                  "fixtureId": 1635683,
                  "teamId": 79,
                  "playerId": 394211,
                  "player": "L. Srdanovic",
                  "type": "Missing Fixture",
                  "reason": "Inactive"
                },
                {
                  "fixtureId": 1635683,
                  "teamId": 543,
                  "playerId": 122956,
                  "player": "D. Conde",
                  "type": "Missing Fixture",
                  "reason": "Shoulder Injury"
                },
                {
                  "fixtureId": 1635683,
                  "teamId": 543,
                  "playerId": 181421,
                  "player": "A. Ezzalzouli",
                  "type": "Missing Fixture",
                  "reason": "Illness"
                },
                {
                  "fixtureId": 1635683,
                  "teamId": 543,
                  "playerId": 1578,
                  "player": "G. Lo Celso",
                  "type": "Missing Fixture",
                  "reason": "Muscle Injury"
                },
                {
                  "fixtureId": 1635683,
                  "teamId": 543,
                  "playerId": 47119,
                  "player": "A. Ruibal",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1635683,
                  "teamId": 543,
                  "playerId": 47302,
                  "player": "D. Llorente",
                  "type": "Questionable",
                  "reason": "Injury"
                }
              ],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1635652,
              "kickoff": "2026-09-09T04:00:00+09:00",
              "status": "NS",
              "homeTeamId": 165,
              "homeTeam": "Borussia Dortmund",
              "awayTeamId": 533,
              "awayTeam": "Villarreal",
              "injuriesChecked": true,
              "injuries": [
                {
                  "fixtureId": 1635652,
                  "teamId": 165,
                  "playerId": 2194,
                  "player": "R. Bensebaini",
                  "type": "Missing Fixture",
                  "reason": "Red Card"
                },
                {
                  "fixtureId": 1635652,
                  "teamId": 165,
                  "playerId": 864,
                  "player": "E. Can",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1635652,
                  "teamId": 165,
                  "playerId": 592218,
                  "player": "M. Kaba",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1635652,
                  "teamId": 165,
                  "playerId": 162410,
                  "player": "G. Konstantelias",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1635652,
                  "teamId": 165,
                  "playerId": 465666,
                  "player": "J. Lerma",
                  "type": "Missing Fixture",
                  "reason": "Muscle Injury"
                },
                {
                  "fixtureId": 1635652,
                  "teamId": 165,
                  "playerId": 26243,
                  "player": "N. Schlotterbeck",
                  "type": "Missing Fixture",
                  "reason": "Red Card"
                },
                {
                  "fixtureId": 1635652,
                  "teamId": 165,
                  "playerId": 341839,
                  "player": "F. Mane",
                  "type": "Questionable",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1635652,
                  "teamId": 533,
                  "playerId": 166,
                  "player": "J. Foyth",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                }
              ],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1635654,
              "kickoff": "2026-09-09T04:00:00+09:00",
              "status": "NS",
              "homeTeamId": 212,
              "homeTeam": "FC Porto",
              "awayTeamId": 50,
              "awayTeam": "Manchester City",
              "injuriesChecked": true,
              "injuries": [
                {
                  "fixtureId": 1635654,
                  "teamId": 212,
                  "playerId": 2999,
                  "player": "J. Bednarek",
                  "type": "Missing Fixture",
                  "reason": "Red Card"
                },
                {
                  "fixtureId": 1635654,
                  "teamId": 212,
                  "playerId": 507527,
                  "player": "Gabriel Mec",
                  "type": "Missing Fixture",
                  "reason": "Off the roster"
                },
                {
                  "fixtureId": 1635654,
                  "teamId": 212,
                  "playerId": 442540,
                  "player": "O. Pietuszewski",
                  "type": "Missing Fixture",
                  "reason": "Muscle Injury"
                },
                {
                  "fixtureId": 1635654,
                  "teamId": 212,
                  "playerId": 340572,
                  "player": "D. Prpic",
                  "type": "Missing Fixture",
                  "reason": "Off the roster"
                },
                {
                  "fixtureId": 1635654,
                  "teamId": 212,
                  "playerId": 358628,
                  "player": "Samu",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1635654,
                  "teamId": 212,
                  "playerId": 325830,
                  "player": "V. Sousa",
                  "type": "Missing Fixture",
                  "reason": "Leg Injury"
                },
                {
                  "fixtureId": 1635654,
                  "teamId": 212,
                  "playerId": 126899,
                  "player": "Zaidu",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1635654,
                  "teamId": 212,
                  "playerId": 388872,
                  "player": "V. Froholdt",
                  "type": "Questionable",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1635654,
                  "teamId": 50,
                  "playerId": 1422,
                  "player": "J. Doku",
                  "type": "Missing Fixture",
                  "reason": "Calf Injury"
                },
                {
                  "fixtureId": 1635654,
                  "teamId": 50,
                  "playerId": 18592,
                  "player": "I. Ndiaye",
                  "type": "Questionable",
                  "reason": "Injury"
                }
              ],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1635714,
              "kickoff": "2026-09-09T04:00:00+09:00",
              "status": "NS",
              "homeTeamId": 541,
              "homeTeam": "Real Madrid",
              "awayTeamId": 505,
              "awayTeam": "Inter",
              "injuriesChecked": true,
              "injuries": [
                {
                  "fixtureId": 1635714,
                  "teamId": 541,
                  "playerId": 341640,
                  "player": "R. Asencio",
                  "type": "Missing Fixture",
                  "reason": "Muscle Injury"
                },
                {
                  "fixtureId": 1635714,
                  "teamId": 541,
                  "playerId": 2207,
                  "player": "E. Camavinga",
                  "type": "Missing Fixture",
                  "reason": "Red Card"
                },
                {
                  "fixtureId": 1635714,
                  "teamId": 541,
                  "playerId": 372,
                  "player": "Eder Militao",
                  "type": "Missing Fixture",
                  "reason": "Hamstring Injury"
                },
                {
                  "fixtureId": 1635714,
                  "teamId": 541,
                  "playerId": 377122,
                  "player": "Endrick",
                  "type": "Missing Fixture",
                  "reason": "Muscle Injury"
                },
                {
                  "fixtureId": 1635714,
                  "teamId": 541,
                  "playerId": 291964,
                  "player": "A. Guler",
                  "type": "Missing Fixture",
                  "reason": "Red Card"
                },
                {
                  "fixtureId": 1635714,
                  "teamId": 541,
                  "playerId": 653,
                  "player": "F. Mendy",
                  "type": "Missing Fixture",
                  "reason": "Hip Injury"
                },
                {
                  "fixtureId": 1635714,
                  "teamId": 541,
                  "playerId": 509470,
                  "player": "T. Pitarch",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1635714,
                  "teamId": 541,
                  "playerId": 10009,
                  "player": "Rodrygo",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1635714,
                  "teamId": 541,
                  "playerId": 636,
                  "player": "B. Silva",
                  "type": "Missing Fixture",
                  "reason": "Red Card"
                },
                {
                  "fixtureId": 1635714,
                  "teamId": 541,
                  "playerId": 1271,
                  "player": "A. Tchouameni",
                  "type": "Missing Fixture",
                  "reason": "Muscle Injury"
                },
                {
                  "fixtureId": 1635714,
                  "teamId": 505,
                  "playerId": 19235,
                  "player": "D. Spence",
                  "type": "Missing Fixture",
                  "reason": "Inactive"
                },
                {
                  "fixtureId": 1635714,
                  "teamId": 505,
                  "playerId": 436238,
                  "player": "M. Spinacce",
                  "type": "Missing Fixture",
                  "reason": "Inactive"
                }
              ],
              "lineupsChecked": false,
              "lineups": []
            }
          ]
        }
      ]
    }
  ]
};
});
