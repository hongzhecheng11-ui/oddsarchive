(function attachTeamContextPack(root, factory) {
  const pack = factory();
  if (typeof module !== "undefined" && module.exports) module.exports = pack;
  if (root) root.ODDS_ARCHIVE_TEAM_CONTEXT_PACK = pack;
})(typeof window !== "undefined" ? window : globalThis, function createTeamContextPack() {
  return {
  "version": "team-context-v3",
  "date": "2026-09-08",
  "updatedAt": "2026-09-08T12:52:16.386Z",
  "collection": {
    "dates": [
      "2026-09-08",
      "2026-09-09",
      "2026-09-10",
      "2026-09-11"
    ],
    "requestGroups": 16,
    "skippedGroups": 88,
    "failures": 0,
    "errors": []
  },
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
          "teamId": 536,
          "team": "Sevilla",
          "rank": 6,
          "points": 7,
          "goalsDiff": 1,
          "form": "DLWW",
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
            "draws": 0,
            "losses": 1,
            "goalsFor": 3,
            "goalsAgainst": 4
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
          "teamId": 727,
          "team": "Osasuna",
          "rank": 8,
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
          "teamId": 548,
          "team": "Real Sociedad",
          "rank": 9,
          "points": 7,
          "goalsDiff": -2,
          "form": "WDWLL",
          "all": {
            "played": 5,
            "wins": 2,
            "draws": 1,
            "losses": 2,
            "goalsFor": 6,
            "goalsAgainst": 8
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
            "played": 3,
            "wins": 1,
            "draws": 0,
            "losses": 2,
            "goalsFor": 4,
            "goalsAgainst": 7
          }
        },
        {
          "teamId": 531,
          "team": "Athletic Club",
          "rank": 10,
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
          "rank": 11,
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
          "teamId": 540,
          "team": "Espanyol",
          "rank": 12,
          "points": 4,
          "goalsDiff": 1,
          "form": "DLLW",
          "all": {
            "played": 4,
            "wins": 1,
            "draws": 1,
            "losses": 2,
            "goalsFor": 6,
            "goalsAgainst": 5
          },
          "home": {
            "played": 3,
            "wins": 1,
            "draws": 1,
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
          "teamId": 4665,
          "team": "Racing Santander",
          "rank": 13,
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
          "rank": 14,
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
          "teamId": 546,
          "team": "Getafe",
          "rank": 15,
          "points": 4,
          "goalsDiff": -3,
          "form": "DLWL",
          "all": {
            "played": 4,
            "wins": 1,
            "draws": 1,
            "losses": 2,
            "goalsFor": 2,
            "goalsAgainst": 5
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
            "goalsFor": 0,
            "goalsAgainst": 4
          }
        },
        {
          "teamId": 538,
          "team": "Celta Vigo",
          "rank": 16,
          "points": 3,
          "goalsDiff": -3,
          "form": "DDLLD",
          "all": {
            "played": 5,
            "wins": 0,
            "draws": 3,
            "losses": 2,
            "goalsFor": 2,
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
            "played": 3,
            "wins": 0,
            "draws": 3,
            "losses": 0,
            "goalsFor": 1,
            "goalsAgainst": 1
          }
        },
        {
          "teamId": 533,
          "team": "Villarreal",
          "rank": 17,
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
          "goalsDiff": -7,
          "form": "LLLD",
          "all": {
            "played": 4,
            "wins": 0,
            "draws": 1,
            "losses": 3,
            "goalsFor": 5,
            "goalsAgainst": 12
          },
          "home": {
            "played": 2,
            "wins": 0,
            "draws": 0,
            "losses": 2,
            "goalsFor": 2,
            "goalsAgainst": 8
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
          "teamId": 546,
          "team": "Getafe",
          "form": "LWLD",
          "all": {
            "played": 4,
            "wins": 1,
            "draws": 1,
            "losses": 2,
            "goalsFor": 2,
            "goalsAgainst": 5
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
            "goalsFor": 0,
            "goalsAgainst": 4
          }
        },
        {
          "teamId": 538,
          "team": "Celta Vigo",
          "form": "DLLDD",
          "all": {
            "played": 5,
            "wins": 0,
            "draws": 3,
            "losses": 2,
            "goalsFor": 2,
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
            "played": 3,
            "wins": 0,
            "draws": 3,
            "losses": 0,
            "goalsFor": 1,
            "goalsAgainst": 1
          }
        },
        {
          "teamId": 797,
          "team": "Elche",
          "form": "DLLL",
          "all": {
            "played": 4,
            "wins": 0,
            "draws": 1,
            "losses": 3,
            "goalsFor": 5,
            "goalsAgainst": 12
          },
          "home": {
            "played": 2,
            "wins": 0,
            "draws": 0,
            "losses": 2,
            "goalsFor": 2,
            "goalsAgainst": 8
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
          "form": "LLWDW",
          "all": {
            "played": 5,
            "wins": 2,
            "draws": 1,
            "losses": 2,
            "goalsFor": 6,
            "goalsAgainst": 8
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
            "played": 3,
            "wins": 1,
            "draws": 0,
            "losses": 2,
            "goalsFor": 4,
            "goalsAgainst": 7
          }
        }
      ],
      "fixtures": [
        {
          "fixtureId": 1570368,
          "kickoff": "2026-09-08T02:00:00+09:00",
          "status": "FT",
          "homeTeamId": 546,
          "homeTeam": "Getafe",
          "awayTeamId": 538,
          "awayTeam": "Celta Vigo",
          "injuriesChecked": true,
          "injuries": [
            {
              "fixtureId": 1570368,
              "teamId": 546,
              "playerId": 46813,
              "player": "A. Abqar",
              "type": "Missing Fixture",
              "reason": "Injury"
            },
            {
              "fixtureId": 1570368,
              "teamId": 546,
              "playerId": 162249,
              "player": "Francho",
              "type": "Missing Fixture",
              "reason": "Injury"
            },
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
              "teamId": 538,
              "playerId": 46711,
              "player": "A. Febas",
              "type": "Missing Fixture",
              "reason": "Ribs Injury"
            }
          ],
          "lineupsChecked": false,
          "lineups": []
        },
        {
          "fixtureId": 1570366,
          "kickoff": "2026-09-08T04:30:00+09:00",
          "status": "FT",
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
              "teamId": 548,
              "playerId": 290106,
              "player": "P. Marin",
              "type": "Missing Fixture",
              "reason": "Injury"
            },
            {
              "fixtureId": 1570366,
              "teamId": 548,
              "playerId": 737,
              "player": "A. Odriozola",
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
          "teamId": 487,
          "team": "Lazio",
          "rank": 3,
          "points": 9,
          "goalsDiff": 3,
          "form": "WWW",
          "all": {
            "played": 3,
            "wins": 3,
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
            "goalsFor": 1,
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
          "teamId": 895,
          "team": "Como",
          "rank": 4,
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
          "rank": 5,
          "points": 7,
          "goalsDiff": 3,
          "form": "DWW",
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
            "wins": 1,
            "draws": 0,
            "losses": 0,
            "goalsFor": 2,
            "goalsAgainst": 0
          },
          "away": {
            "played": 2,
            "wins": 1,
            "draws": 1,
            "losses": 0,
            "goalsFor": 3,
            "goalsAgainst": 2
          }
        },
        {
          "teamId": 496,
          "team": "Juventus",
          "rank": 6,
          "points": 7,
          "goalsDiff": 3,
          "form": "DWW",
          "all": {
            "played": 3,
            "wins": 2,
            "draws": 1,
            "losses": 0,
            "goalsFor": 4,
            "goalsAgainst": 1
          },
          "home": {
            "played": 2,
            "wins": 1,
            "draws": 1,
            "losses": 0,
            "goalsFor": 3,
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
          "teamId": 490,
          "team": "Cagliari",
          "rank": 9,
          "points": 6,
          "goalsDiff": 1,
          "form": "WLW",
          "all": {
            "played": 3,
            "wins": 2,
            "draws": 0,
            "losses": 1,
            "goalsFor": 2,
            "goalsAgainst": 1
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
            "played": 1,
            "wins": 1,
            "draws": 0,
            "losses": 0,
            "goalsFor": 1,
            "goalsAgainst": 0
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
          "teamId": 494,
          "team": "Udinese",
          "rank": 11,
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
            "goalsFor": 2,
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
          "teamId": 492,
          "team": "Napoli",
          "rank": 12,
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
          "rank": 13,
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
          "teamId": 867,
          "team": "Lecce",
          "rank": 14,
          "points": 3,
          "goalsDiff": -3,
          "form": "LLW",
          "all": {
            "played": 3,
            "wins": 1,
            "draws": 0,
            "losses": 2,
            "goalsFor": 2,
            "goalsAgainst": 5
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
            "played": 2,
            "wins": 1,
            "draws": 0,
            "losses": 1,
            "goalsFor": 2,
            "goalsAgainst": 1
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
          "teamId": 490,
          "team": "Cagliari",
          "form": "WLW",
          "all": {
            "played": 3,
            "wins": 2,
            "draws": 0,
            "losses": 1,
            "goalsFor": 2,
            "goalsAgainst": 1
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
          "form": "WLL",
          "all": {
            "played": 3,
            "wins": 1,
            "draws": 0,
            "losses": 2,
            "goalsFor": 2,
            "goalsAgainst": 5
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
            "played": 2,
            "wins": 1,
            "draws": 0,
            "losses": 1,
            "goalsFor": 2,
            "goalsAgainst": 1
          }
        },
        {
          "teamId": 494,
          "team": "Udinese",
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
            "goalsFor": 3,
            "goalsAgainst": 2
          }
        },
        {
          "teamId": 487,
          "team": "Lazio",
          "form": "WWW",
          "all": {
            "played": 3,
            "wins": 3,
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
            "goalsFor": 1,
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
        }
      ],
      "fixtures": [
        {
          "fixtureId": 1550109,
          "kickoff": "2026-09-08T01:30:00+09:00",
          "status": "FT",
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
              "playerId": 188319,
              "player": "Kevin",
              "type": "Missing Fixture",
              "reason": "Personal Reasons"
            },
            {
              "fixtureId": 1550109,
              "teamId": 490,
              "playerId": 2484,
              "player": "Y. Mina",
              "type": "Missing Fixture",
              "reason": "Calf Injury"
            },
            {
              "fixtureId": 1550109,
              "teamId": 490,
              "playerId": 31318,
              "player": "M. Nzola",
              "type": "Missing Fixture",
              "reason": "Lacking Match Fitness"
            },
            {
              "fixtureId": 1550109,
              "teamId": 490,
              "playerId": 32887,
              "player": "Y. Sugawara",
              "type": "Missing Fixture",
              "reason": "Inactive"
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
              "teamId": 867,
              "playerId": 120,
              "player": "W. Geubbels",
              "type": "Missing Fixture",
              "reason": "Injury"
            }
          ],
          "lineupsChecked": false,
          "lineups": []
        },
        {
          "fixtureId": 1550116,
          "kickoff": "2026-09-08T03:45:00+09:00",
          "status": "FT",
          "homeTeamId": 494,
          "homeTeam": "Udinese",
          "awayTeamId": 487,
          "awayTeam": "Lazio",
          "injuriesChecked": true,
          "injuries": [
            {
              "fixtureId": 1550116,
              "teamId": 494,
              "playerId": 411171,
              "player": "J. Arizala",
              "type": "Missing Fixture",
              "reason": "Thigh Injury"
            },
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
              "playerId": 162907,
              "player": "A. Zanoli",
              "type": "Missing Fixture",
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
          "points": 10,
          "goalsDiff": 4,
          "form": "DWLWW",
          "all": {
            "played": 5,
            "wins": 3,
            "draws": 1,
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
            "played": 3,
            "wins": 1,
            "draws": 1,
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
          "goalsDiff": 2,
          "form": "LDWW",
          "all": {
            "played": 4,
            "wins": 2,
            "draws": 1,
            "losses": 1,
            "goalsFor": 3,
            "goalsAgainst": 1
          },
          "home": {
            "played": 3,
            "wins": 2,
            "draws": 0,
            "losses": 1,
            "goalsFor": 3,
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
          "teamId": 238,
          "team": "Academico Viseu",
          "rank": 10,
          "points": 5,
          "goalsDiff": -3,
          "form": "WLDLD",
          "all": {
            "played": 5,
            "wins": 1,
            "draws": 2,
            "losses": 2,
            "goalsFor": 5,
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
            "played": 3,
            "wins": 1,
            "draws": 2,
            "losses": 0,
            "goalsFor": 5,
            "goalsAgainst": 4
          }
        },
        {
          "teamId": 224,
          "team": "Vitória SC",
          "rank": 11,
          "points": 4,
          "goalsDiff": -2,
          "form": "DLWLL",
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
          "teamId": 225,
          "team": "Nacional",
          "rank": 12,
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
          "rank": 13,
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
          "teamId": 242,
          "team": "Famalicao",
          "rank": 14,
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
          "rank": 15,
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
          "teamId": 230,
          "team": "Estoril",
          "rank": 16,
          "points": 2,
          "goalsDiff": -5,
          "form": "DLLLD",
          "all": {
            "played": 5,
            "wins": 0,
            "draws": 2,
            "losses": 3,
            "goalsFor": 2,
            "goalsAgainst": 7
          },
          "home": {
            "played": 3,
            "wins": 0,
            "draws": 2,
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
          "teamId": 4724,
          "team": "Alverca",
          "rank": 17,
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
          "teamId": 4716,
          "team": "Casa Pia",
          "rank": 18,
          "points": 1,
          "goalsDiff": -11,
          "form": "DLLLL",
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
      "teams": [
        {
          "teamId": 230,
          "team": "Estoril",
          "form": "DLLLD",
          "all": {
            "played": 5,
            "wins": 0,
            "draws": 2,
            "losses": 3,
            "goalsFor": 2,
            "goalsAgainst": 7
          },
          "home": {
            "played": 3,
            "wins": 0,
            "draws": 2,
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
          "form": "WWLWD",
          "all": {
            "played": 5,
            "wins": 3,
            "draws": 1,
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
            "played": 3,
            "wins": 1,
            "draws": 1,
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
          "status": "FT",
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
          "teamId": 3573,
          "team": "Gaziantep FK",
          "rank": 5,
          "points": 7,
          "goalsDiff": 2,
          "form": "WLWD",
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
            "wins": 0,
            "draws": 1,
            "losses": 1,
            "goalsFor": 2,
            "goalsAgainst": 3
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
          "teamId": 3579,
          "team": "Amed",
          "rank": 6,
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
          "teamId": 996,
          "team": "Alanyaspor",
          "rank": 7,
          "points": 7,
          "goalsDiff": 1,
          "form": "WLWD",
          "all": {
            "played": 4,
            "wins": 2,
            "draws": 1,
            "losses": 1,
            "goalsFor": 4,
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
            "played": 3,
            "wins": 1,
            "draws": 1,
            "losses": 1,
            "goalsFor": 3,
            "goalsAgainst": 3
          }
        },
        {
          "teamId": 997,
          "team": "Gençlerbirliği S.K.",
          "rank": 8,
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
          "rank": 9,
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
          "rank": 10,
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
          "rank": 11,
          "points": 6,
          "goalsDiff": -1,
          "form": "LWLW",
          "all": {
            "played": 4,
            "wins": 2,
            "draws": 0,
            "losses": 2,
            "goalsFor": 3,
            "goalsAgainst": 4
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
          "rank": 12,
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
          "goalsDiff": -4,
          "form": "LLLD",
          "all": {
            "played": 4,
            "wins": 0,
            "draws": 1,
            "losses": 3,
            "goalsFor": 7,
            "goalsAgainst": 11
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
          "teamId": 994,
          "team": "Göztepe",
          "form": "DLLL",
          "all": {
            "played": 4,
            "wins": 0,
            "draws": 1,
            "losses": 3,
            "goalsFor": 7,
            "goalsAgainst": 11
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
            "wins": 0,
            "draws": 1,
            "losses": 1,
            "goalsFor": 2,
            "goalsAgainst": 3
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
          "teamId": 1007,
          "team": "Rizespor",
          "form": "WLWL",
          "all": {
            "played": 4,
            "wins": 2,
            "draws": 0,
            "losses": 2,
            "goalsFor": 3,
            "goalsAgainst": 4
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
          "form": "DWLW",
          "all": {
            "played": 4,
            "wins": 2,
            "draws": 1,
            "losses": 1,
            "goalsFor": 4,
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
            "played": 3,
            "wins": 1,
            "draws": 1,
            "losses": 1,
            "goalsFor": 3,
            "goalsAgainst": 3
          }
        }
      ],
      "fixtures": [
        {
          "fixtureId": 1584398,
          "kickoff": "2026-09-08T02:00:00+09:00",
          "status": "FT",
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
              "playerId": 62378,
              "player": "F. Bayir",
              "type": "Missing Fixture",
              "reason": "Inactive"
            },
            {
              "fixtureId": 1584398,
              "teamId": 994,
              "playerId": 143705,
              "player": "G. Bayrakdar",
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
              "playerId": 19047,
              "player": "J. Bacuna",
              "type": "Missing Fixture",
              "reason": "Red Card"
            },
            {
              "fixtureId": 1584398,
              "teamId": 3573,
              "playerId": 62038,
              "player": "F. Bavuk",
              "type": "Missing Fixture",
              "reason": "Injury"
            },
            {
              "fixtureId": 1584398,
              "teamId": 3573,
              "playerId": 161884,
              "player": "S. Hansen",
              "type": "Missing Fixture",
              "reason": "Injury"
            },
            {
              "fixtureId": 1584398,
              "teamId": 3573,
              "playerId": 522647,
              "player": "A. O. Kalin",
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
            }
          ],
          "lineupsChecked": false,
          "lineups": []
        },
        {
          "fixtureId": 1584401,
          "kickoff": "2026-09-08T02:00:00+09:00",
          "status": "FT",
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
            },
            {
              "fixtureId": 1584401,
              "teamId": 996,
              "playerId": 237120,
              "player": "Maestro",
              "type": "Missing Fixture",
              "reason": "Inactive"
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
          "teamId": 2746,
          "team": "Gangwon FC",
          "rank": 4,
          "points": 40,
          "goalsDiff": 9,
          "form": "WDDLW",
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
          "teamId": 2761,
          "team": "Jeju United FC",
          "rank": 5,
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
          "goalsDiff": -9,
          "form": "LDWLL",
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
          "points": 28,
          "goalsDiff": -8,
          "form": "DLDDD",
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
          "rank": 12,
          "points": 13,
          "goalsDiff": -41,
          "form": "DLDLL",
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
      "teams": [
        {
          "teamId": 2763,
          "team": "Incheon United",
          "form": "LLDLWWLDWWLDWLWLLWWDDDWLDLW",
          "all": {
            "played": 27,
            "wins": 10,
            "draws": 7,
            "losses": 10,
            "goalsFor": 34,
            "goalsAgainst": 30
          },
          "home": {
            "played": 14,
            "wins": 5,
            "draws": 3,
            "losses": 6,
            "goalsFor": 16,
            "goalsAgainst": 15
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
          "form": "WDLDDLWDLLWLLDWDDLLDWDWWLDLL",
          "all": {
            "played": 28,
            "wins": 7,
            "draws": 10,
            "losses": 11,
            "goalsFor": 29,
            "goalsAgainst": 36
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
            "played": 13,
            "wins": 4,
            "draws": 4,
            "losses": 5,
            "goalsFor": 13,
            "goalsAgainst": 14
          }
        },
        {
          "teamId": 2767,
          "team": "Ulsan Hyundai FC",
          "form": "WWWDLWLWDLLWWWLDLDLWWWLLLWDW",
          "all": {
            "played": 28,
            "wins": 13,
            "draws": 5,
            "losses": 10,
            "goalsFor": 42,
            "goalsAgainst": 37
          },
          "home": {
            "played": 14,
            "wins": 7,
            "draws": 1,
            "losses": 6,
            "goalsFor": 24,
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
          "form": "WWWWDWWLWWLDLWWWDWWLDDWWWWWL",
          "all": {
            "played": 28,
            "wins": 18,
            "draws": 5,
            "losses": 5,
            "goalsFor": 53,
            "goalsAgainst": 22
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
            "played": 15,
            "wins": 10,
            "draws": 3,
            "losses": 2,
            "goalsFor": 31,
            "goalsAgainst": 12
          }
        }
      ],
      "fixtures": [
        {
          "fixtureId": 1507058,
          "kickoff": "2026-09-08T19:30:00+09:00",
          "status": "FT",
          "homeTeamId": 2763,
          "homeTeam": "Incheon United",
          "awayTeamId": 2745,
          "awayTeam": "Bucheon FC 1995",
          "injuriesChecked": true,
          "injuries": [],
          "lineupsChecked": true,
          "lineups": [
            {
              "teamId": 2763,
              "team": "Incheon United",
              "formation": "4-4-2",
              "coach": "Jong-hwan Yoon",
              "starters": [
                "Kim Dong-Heon",
                "Kim Myung-Sun",
                "Kim Yeonsoo",
                "Juan Fernández",
                "Lee Ju-Yong",
                "Lee Dong-Ryul",
                "Seo Jae-Min",
                "Lee Myung-Joo",
                "Leandro Ribeiro",
                "S. Mugoša",
                "M. Ferrier"
              ]
            },
            {
              "teamId": 2745,
              "team": "Bucheon FC 1995",
              "formation": "3-4-3",
              "coach": "Lee Young-Min",
              "starters": [
                "Kim Hyung-Geun",
                "Hong Sung-Wook",
                "Patrick William",
                "Jeong Ho-Jin",
                "An Tae-Hyun",
                "Hong Sung-Wook",
                "K. Takahashi",
                "Kim Seung-Bin",
                "Rodrigo Bassani",
                "Gustavo Nescau",
                "Jefferson Galego"
              ]
            }
          ]
        },
        {
          "fixtureId": 1507059,
          "kickoff": "2026-09-08T19:30:00+09:00",
          "status": "FT",
          "homeTeamId": 2767,
          "homeTeam": "Ulsan Hyundai FC",
          "awayTeamId": 2766,
          "awayTeam": "FC Seoul",
          "injuriesChecked": true,
          "injuries": [],
          "lineupsChecked": true,
          "lineups": [
            {
              "teamId": 2767,
              "team": "Ulsan Hyundai FC",
              "formation": "3-4-3",
              "coach": "Kim Hyun-Seok",
              "starters": [
                "Jo Hyeon-Woo",
                "Seo Myeong-Kwan",
                "Jung Seung-Hyun",
                "Kim Young-Gwon",
                "Jang Si-Young",
                "Lee Gyu-Sung",
                "T. Oude Kotte",
                "Cho Hyun-Taek",
                "Lee Jin-Hyun",
                "Lee Dong-Gyeong",
                "Erick Farias"
              ]
            },
            {
              "teamId": 2766,
              "team": "FC Seoul",
              "formation": "4-4-2",
              "coach": "Kim Gi-Dong",
              "starters": [
                "Gu Sung-Yun",
                "Choi Jun",
                "Yazan Al Arab",
                "Juan Antonio",
                "Kim Jin-Su",
                "Jeong Seung-Won",
                "J. Son",
                "H. Babec",
                "Anderson Oliveira",
                "Moon Seon-Min",
                "P. Klimala"
              ]
            }
          ]
        }
      ]
    }
  ],
  "dates": [
    {
      "date": "2026-09-07",
      "updatedAt": "2026-09-07T14:14:07.161Z",
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
              "teamId": 536,
              "team": "Sevilla",
              "rank": 7,
              "points": 7,
              "goalsDiff": 1,
              "form": "DLWW",
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
                "draws": 0,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 4
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
              "teamId": 727,
              "team": "Osasuna",
              "rank": 8,
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
              "teamId": 540,
              "team": "Espanyol",
              "rank": 11,
              "points": 4,
              "goalsDiff": 1,
              "form": "DLLW",
              "all": {
                "played": 4,
                "wins": 1,
                "draws": 1,
                "losses": 2,
                "goalsFor": 6,
                "goalsAgainst": 5
              },
              "home": {
                "played": 3,
                "wins": 1,
                "draws": 1,
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
              "teamId": 4665,
              "team": "Racing Santander",
              "rank": 12,
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
              "rank": 13,
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
              "rank": 14,
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
              "form": "WLLD",
              "all": {
                "played": 4,
                "wins": 1,
                "draws": 1,
                "losses": 2,
                "goalsFor": 6,
                "goalsAgainst": 5
              },
              "home": {
                "played": 3,
                "wins": 1,
                "draws": 1,
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
              "teamId": 536,
              "team": "Sevilla",
              "form": "WWLD",
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
                "draws": 0,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 4
              },
              "away": {
                "played": 2,
                "wins": 1,
                "draws": 1,
                "losses": 0,
                "goalsFor": 4,
                "goalsAgainst": 2
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
                  "playerId": 386850,
                  "player": "A. Nino",
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
              "lineupsChecked": false,
              "lineups": []
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
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1570367,
              "kickoff": "2026-09-07T04:00:00+09:00",
              "status": "FT",
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
              "points": 7,
              "goalsDiff": 3,
              "form": "DWW",
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
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 2,
                "goalsAgainst": 0
              },
              "away": {
                "played": 2,
                "wins": 1,
                "draws": 1,
                "losses": 0,
                "goalsFor": 3,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 496,
              "team": "Juventus",
              "rank": 5,
              "points": 7,
              "goalsDiff": 3,
              "form": "DWW",
              "all": {
                "played": 3,
                "wins": 2,
                "draws": 1,
                "losses": 0,
                "goalsFor": 4,
                "goalsAgainst": 1
              },
              "home": {
                "played": 2,
                "wins": 1,
                "draws": 1,
                "losses": 0,
                "goalsFor": 3,
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
              "form": "WWD",
              "all": {
                "played": 3,
                "wins": 2,
                "draws": 1,
                "losses": 0,
                "goalsFor": 4,
                "goalsAgainst": 1
              },
              "home": {
                "played": 2,
                "wins": 1,
                "draws": 1,
                "losses": 0,
                "goalsFor": 3,
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
              "teamId": 489,
              "team": "AC Milan",
              "form": "WWD",
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
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 2,
                "goalsAgainst": 0
              },
              "away": {
                "played": 2,
                "wins": 1,
                "draws": 1,
                "losses": 0,
                "goalsFor": 3,
                "goalsAgainst": 2
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
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1550114,
              "kickoff": "2026-09-07T03:45:00+09:00",
              "status": "FT",
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
              "lineupsChecked": false,
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
              "lineupsChecked": false,
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
              "teamId": 114,
              "team": "Paris FC",
              "rank": 2,
              "points": 7,
              "goalsDiff": 4,
              "form": "WWD",
              "all": {
                "played": 3,
                "wins": 2,
                "draws": 1,
                "losses": 0,
                "goalsFor": 6,
                "goalsAgainst": 2
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
                "played": 2,
                "wins": 1,
                "draws": 1,
                "losses": 0,
                "goalsFor": 3,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 80,
              "team": "Lyon",
              "rank": 3,
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
              "rank": 4,
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
              "rank": 5,
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
              "rank": 6,
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
              "rank": 7,
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
                "goalsFor": 6,
                "goalsAgainst": 3
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
                "goalsFor": 6,
                "goalsAgainst": 3
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
              "form": "DWW",
              "all": {
                "played": 3,
                "wins": 2,
                "draws": 1,
                "losses": 0,
                "goalsFor": 6,
                "goalsAgainst": 2
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
                "played": 2,
                "wins": 1,
                "draws": 1,
                "losses": 0,
                "goalsFor": 3,
                "goalsAgainst": 2
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
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1552751,
              "kickoff": "2026-09-07T03:45:00+09:00",
              "status": "FT",
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
              "goalsDiff": 2,
              "form": "LDWW",
              "all": {
                "played": 4,
                "wins": 2,
                "draws": 1,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 1
              },
              "home": {
                "played": 3,
                "wins": 2,
                "draws": 0,
                "losses": 1,
                "goalsFor": 3,
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
              "teamId": 238,
              "team": "Academico Viseu",
              "rank": 10,
              "points": 5,
              "goalsDiff": -3,
              "form": "WLDLD",
              "all": {
                "played": 5,
                "wins": 1,
                "draws": 2,
                "losses": 2,
                "goalsFor": 5,
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
                "played": 3,
                "wins": 1,
                "draws": 2,
                "losses": 0,
                "goalsFor": 5,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 224,
              "team": "Vitória SC",
              "rank": 11,
              "points": 4,
              "goalsDiff": -2,
              "form": "DLWLL",
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
              "teamId": 225,
              "team": "Nacional",
              "rank": 12,
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
              "rank": 13,
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
              "teamId": 242,
              "team": "Famalicao",
              "rank": 14,
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
              "rank": 15,
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
              "points": 1,
              "goalsDiff": -11,
              "form": "DLLLL",
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
          "teams": [
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
            },
            {
              "teamId": 762,
              "team": "GIL Vicente",
              "form": "WWDL",
              "all": {
                "played": 4,
                "wins": 2,
                "draws": 1,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 1
              },
              "home": {
                "played": 3,
                "wins": 2,
                "draws": 0,
                "losses": 1,
                "goalsFor": 3,
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
              "teamId": 238,
              "team": "Academico Viseu",
              "form": "DLDLW",
              "all": {
                "played": 5,
                "wins": 1,
                "draws": 2,
                "losses": 2,
                "goalsFor": 5,
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
                "played": 3,
                "wins": 1,
                "draws": 2,
                "losses": 0,
                "goalsFor": 5,
                "goalsAgainst": 4
              }
            }
          ],
          "fixtures": [
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
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1575486,
              "kickoff": "2026-09-07T04:30:00+09:00",
              "status": "FT",
              "homeTeamId": 762,
              "homeTeam": "GIL Vicente",
              "awayTeamId": 238,
              "awayTeam": "Academico Viseu",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
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
              "teamId": 738,
              "team": "SK Beveren",
              "rank": 12,
              "points": 6,
              "goalsDiff": -5,
              "form": "WLLWL",
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
              "teamId": 261,
              "team": "KVC Westerlo",
              "rank": 13,
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
              "goalsDiff": -10,
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
              "lineupsChecked": false,
              "lineups": []
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
                  "playerId": 22239,
                  "player": "C. Niasse",
                  "type": "Missing Fixture",
                  "reason": "Inactive"
                },
                {
                  "fixtureId": 1584402,
                  "teamId": 997,
                  "playerId": 47304,
                  "player": "K. Rodrigues",
                  "type": "Missing Fixture",
                  "reason": "Inactive"
                }
              ],
              "lineupsChecked": false,
              "lineups": []
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
                  "playerId": 31280,
                  "player": "R. Rivas",
                  "type": "Missing Fixture",
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
    },
    {
      "date": "2026-09-08",
      "updatedAt": "2026-09-08T12:51:35.535Z",
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
              "teamId": 536,
              "team": "Sevilla",
              "rank": 6,
              "points": 7,
              "goalsDiff": 1,
              "form": "DLWW",
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
                "draws": 0,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 4
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
              "teamId": 727,
              "team": "Osasuna",
              "rank": 8,
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
              "teamId": 548,
              "team": "Real Sociedad",
              "rank": 9,
              "points": 7,
              "goalsDiff": -2,
              "form": "WDWLL",
              "all": {
                "played": 5,
                "wins": 2,
                "draws": 1,
                "losses": 2,
                "goalsFor": 6,
                "goalsAgainst": 8
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
                "played": 3,
                "wins": 1,
                "draws": 0,
                "losses": 2,
                "goalsFor": 4,
                "goalsAgainst": 7
              }
            },
            {
              "teamId": 531,
              "team": "Athletic Club",
              "rank": 10,
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
              "rank": 11,
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
              "teamId": 540,
              "team": "Espanyol",
              "rank": 12,
              "points": 4,
              "goalsDiff": 1,
              "form": "DLLW",
              "all": {
                "played": 4,
                "wins": 1,
                "draws": 1,
                "losses": 2,
                "goalsFor": 6,
                "goalsAgainst": 5
              },
              "home": {
                "played": 3,
                "wins": 1,
                "draws": 1,
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
              "teamId": 4665,
              "team": "Racing Santander",
              "rank": 13,
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
              "rank": 14,
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
              "teamId": 546,
              "team": "Getafe",
              "rank": 15,
              "points": 4,
              "goalsDiff": -3,
              "form": "DLWL",
              "all": {
                "played": 4,
                "wins": 1,
                "draws": 1,
                "losses": 2,
                "goalsFor": 2,
                "goalsAgainst": 5
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
                "goalsFor": 0,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 538,
              "team": "Celta Vigo",
              "rank": 16,
              "points": 3,
              "goalsDiff": -3,
              "form": "DDLLD",
              "all": {
                "played": 5,
                "wins": 0,
                "draws": 3,
                "losses": 2,
                "goalsFor": 2,
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
                "played": 3,
                "wins": 0,
                "draws": 3,
                "losses": 0,
                "goalsFor": 1,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 533,
              "team": "Villarreal",
              "rank": 17,
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
              "goalsDiff": -7,
              "form": "LLLD",
              "all": {
                "played": 4,
                "wins": 0,
                "draws": 1,
                "losses": 3,
                "goalsFor": 5,
                "goalsAgainst": 12
              },
              "home": {
                "played": 2,
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 2,
                "goalsAgainst": 8
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
              "teamId": 546,
              "team": "Getafe",
              "form": "LWLD",
              "all": {
                "played": 4,
                "wins": 1,
                "draws": 1,
                "losses": 2,
                "goalsFor": 2,
                "goalsAgainst": 5
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
                "goalsFor": 0,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 538,
              "team": "Celta Vigo",
              "form": "DLLDD",
              "all": {
                "played": 5,
                "wins": 0,
                "draws": 3,
                "losses": 2,
                "goalsFor": 2,
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
                "played": 3,
                "wins": 0,
                "draws": 3,
                "losses": 0,
                "goalsFor": 1,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 797,
              "team": "Elche",
              "form": "DLLL",
              "all": {
                "played": 4,
                "wins": 0,
                "draws": 1,
                "losses": 3,
                "goalsFor": 5,
                "goalsAgainst": 12
              },
              "home": {
                "played": 2,
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 2,
                "goalsAgainst": 8
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
              "form": "LLWDW",
              "all": {
                "played": 5,
                "wins": 2,
                "draws": 1,
                "losses": 2,
                "goalsFor": 6,
                "goalsAgainst": 8
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
                "played": 3,
                "wins": 1,
                "draws": 0,
                "losses": 2,
                "goalsFor": 4,
                "goalsAgainst": 7
              }
            }
          ],
          "fixtures": [
            {
              "fixtureId": 1570368,
              "kickoff": "2026-09-08T02:00:00+09:00",
              "status": "FT",
              "homeTeamId": 546,
              "homeTeam": "Getafe",
              "awayTeamId": 538,
              "awayTeam": "Celta Vigo",
              "injuriesChecked": true,
              "injuries": [
                {
                  "fixtureId": 1570368,
                  "teamId": 546,
                  "playerId": 46813,
                  "player": "A. Abqar",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1570368,
                  "teamId": 546,
                  "playerId": 162249,
                  "player": "Francho",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                },
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
                  "teamId": 538,
                  "playerId": 46711,
                  "player": "A. Febas",
                  "type": "Missing Fixture",
                  "reason": "Ribs Injury"
                }
              ],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1570366,
              "kickoff": "2026-09-08T04:30:00+09:00",
              "status": "FT",
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
                  "teamId": 548,
                  "playerId": 290106,
                  "player": "P. Marin",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1570366,
                  "teamId": 548,
                  "playerId": 737,
                  "player": "A. Odriozola",
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
              "teamId": 487,
              "team": "Lazio",
              "rank": 3,
              "points": 9,
              "goalsDiff": 3,
              "form": "WWW",
              "all": {
                "played": 3,
                "wins": 3,
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
                "goalsFor": 1,
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
              "teamId": 895,
              "team": "Como",
              "rank": 4,
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
              "rank": 5,
              "points": 7,
              "goalsDiff": 3,
              "form": "DWW",
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
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 2,
                "goalsAgainst": 0
              },
              "away": {
                "played": 2,
                "wins": 1,
                "draws": 1,
                "losses": 0,
                "goalsFor": 3,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 496,
              "team": "Juventus",
              "rank": 6,
              "points": 7,
              "goalsDiff": 3,
              "form": "DWW",
              "all": {
                "played": 3,
                "wins": 2,
                "draws": 1,
                "losses": 0,
                "goalsFor": 4,
                "goalsAgainst": 1
              },
              "home": {
                "played": 2,
                "wins": 1,
                "draws": 1,
                "losses": 0,
                "goalsFor": 3,
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
              "teamId": 490,
              "team": "Cagliari",
              "rank": 9,
              "points": 6,
              "goalsDiff": 1,
              "form": "WLW",
              "all": {
                "played": 3,
                "wins": 2,
                "draws": 0,
                "losses": 1,
                "goalsFor": 2,
                "goalsAgainst": 1
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
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 1,
                "goalsAgainst": 0
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
              "teamId": 494,
              "team": "Udinese",
              "rank": 11,
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
                "goalsFor": 2,
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
              "teamId": 492,
              "team": "Napoli",
              "rank": 12,
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
              "rank": 13,
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
              "teamId": 867,
              "team": "Lecce",
              "rank": 14,
              "points": 3,
              "goalsDiff": -3,
              "form": "LLW",
              "all": {
                "played": 3,
                "wins": 1,
                "draws": 0,
                "losses": 2,
                "goalsFor": 2,
                "goalsAgainst": 5
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
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 2,
                "goalsAgainst": 1
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
              "teamId": 490,
              "team": "Cagliari",
              "form": "WLW",
              "all": {
                "played": 3,
                "wins": 2,
                "draws": 0,
                "losses": 1,
                "goalsFor": 2,
                "goalsAgainst": 1
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
              "form": "WLL",
              "all": {
                "played": 3,
                "wins": 1,
                "draws": 0,
                "losses": 2,
                "goalsFor": 2,
                "goalsAgainst": 5
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
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 2,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 494,
              "team": "Udinese",
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
                "goalsFor": 3,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 487,
              "team": "Lazio",
              "form": "WWW",
              "all": {
                "played": 3,
                "wins": 3,
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
                "goalsFor": 1,
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
            }
          ],
          "fixtures": [
            {
              "fixtureId": 1550109,
              "kickoff": "2026-09-08T01:30:00+09:00",
              "status": "FT",
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
                  "playerId": 188319,
                  "player": "Kevin",
                  "type": "Missing Fixture",
                  "reason": "Personal Reasons"
                },
                {
                  "fixtureId": 1550109,
                  "teamId": 490,
                  "playerId": 2484,
                  "player": "Y. Mina",
                  "type": "Missing Fixture",
                  "reason": "Calf Injury"
                },
                {
                  "fixtureId": 1550109,
                  "teamId": 490,
                  "playerId": 31318,
                  "player": "M. Nzola",
                  "type": "Missing Fixture",
                  "reason": "Lacking Match Fitness"
                },
                {
                  "fixtureId": 1550109,
                  "teamId": 490,
                  "playerId": 32887,
                  "player": "Y. Sugawara",
                  "type": "Missing Fixture",
                  "reason": "Inactive"
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
                  "teamId": 867,
                  "playerId": 120,
                  "player": "W. Geubbels",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                }
              ],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1550116,
              "kickoff": "2026-09-08T03:45:00+09:00",
              "status": "FT",
              "homeTeamId": 494,
              "homeTeam": "Udinese",
              "awayTeamId": 487,
              "awayTeam": "Lazio",
              "injuriesChecked": true,
              "injuries": [
                {
                  "fixtureId": 1550116,
                  "teamId": 494,
                  "playerId": 411171,
                  "player": "J. Arizala",
                  "type": "Missing Fixture",
                  "reason": "Thigh Injury"
                },
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
                  "playerId": 162907,
                  "player": "A. Zanoli",
                  "type": "Missing Fixture",
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
              "points": 10,
              "goalsDiff": 4,
              "form": "DWLWW",
              "all": {
                "played": 5,
                "wins": 3,
                "draws": 1,
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
                "played": 3,
                "wins": 1,
                "draws": 1,
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
              "goalsDiff": 2,
              "form": "LDWW",
              "all": {
                "played": 4,
                "wins": 2,
                "draws": 1,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 1
              },
              "home": {
                "played": 3,
                "wins": 2,
                "draws": 0,
                "losses": 1,
                "goalsFor": 3,
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
              "teamId": 238,
              "team": "Academico Viseu",
              "rank": 10,
              "points": 5,
              "goalsDiff": -3,
              "form": "WLDLD",
              "all": {
                "played": 5,
                "wins": 1,
                "draws": 2,
                "losses": 2,
                "goalsFor": 5,
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
                "played": 3,
                "wins": 1,
                "draws": 2,
                "losses": 0,
                "goalsFor": 5,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 224,
              "team": "Vitória SC",
              "rank": 11,
              "points": 4,
              "goalsDiff": -2,
              "form": "DLWLL",
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
              "teamId": 225,
              "team": "Nacional",
              "rank": 12,
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
              "rank": 13,
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
              "teamId": 242,
              "team": "Famalicao",
              "rank": 14,
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
              "rank": 15,
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
              "teamId": 230,
              "team": "Estoril",
              "rank": 16,
              "points": 2,
              "goalsDiff": -5,
              "form": "DLLLD",
              "all": {
                "played": 5,
                "wins": 0,
                "draws": 2,
                "losses": 3,
                "goalsFor": 2,
                "goalsAgainst": 7
              },
              "home": {
                "played": 3,
                "wins": 0,
                "draws": 2,
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
              "teamId": 4724,
              "team": "Alverca",
              "rank": 17,
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
              "teamId": 4716,
              "team": "Casa Pia",
              "rank": 18,
              "points": 1,
              "goalsDiff": -11,
              "form": "DLLLL",
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
          "teams": [
            {
              "teamId": 230,
              "team": "Estoril",
              "form": "DLLLD",
              "all": {
                "played": 5,
                "wins": 0,
                "draws": 2,
                "losses": 3,
                "goalsFor": 2,
                "goalsAgainst": 7
              },
              "home": {
                "played": 3,
                "wins": 0,
                "draws": 2,
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
              "form": "WWLWD",
              "all": {
                "played": 5,
                "wins": 3,
                "draws": 1,
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
                "played": 3,
                "wins": 1,
                "draws": 1,
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
              "status": "FT",
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
              "teamId": 3573,
              "team": "Gaziantep FK",
              "rank": 5,
              "points": 7,
              "goalsDiff": 2,
              "form": "WLWD",
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
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 2,
                "goalsAgainst": 3
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
              "teamId": 3579,
              "team": "Amed",
              "rank": 6,
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
              "teamId": 996,
              "team": "Alanyaspor",
              "rank": 7,
              "points": 7,
              "goalsDiff": 1,
              "form": "WLWD",
              "all": {
                "played": 4,
                "wins": 2,
                "draws": 1,
                "losses": 1,
                "goalsFor": 4,
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
                "played": 3,
                "wins": 1,
                "draws": 1,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 997,
              "team": "Gençlerbirliği S.K.",
              "rank": 8,
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
              "rank": 9,
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
              "rank": 10,
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
              "rank": 11,
              "points": 6,
              "goalsDiff": -1,
              "form": "LWLW",
              "all": {
                "played": 4,
                "wins": 2,
                "draws": 0,
                "losses": 2,
                "goalsFor": 3,
                "goalsAgainst": 4
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
              "rank": 12,
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
              "goalsDiff": -4,
              "form": "LLLD",
              "all": {
                "played": 4,
                "wins": 0,
                "draws": 1,
                "losses": 3,
                "goalsFor": 7,
                "goalsAgainst": 11
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
              "teamId": 994,
              "team": "Göztepe",
              "form": "DLLL",
              "all": {
                "played": 4,
                "wins": 0,
                "draws": 1,
                "losses": 3,
                "goalsFor": 7,
                "goalsAgainst": 11
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
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 2,
                "goalsAgainst": 3
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
              "teamId": 1007,
              "team": "Rizespor",
              "form": "WLWL",
              "all": {
                "played": 4,
                "wins": 2,
                "draws": 0,
                "losses": 2,
                "goalsFor": 3,
                "goalsAgainst": 4
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
              "form": "DWLW",
              "all": {
                "played": 4,
                "wins": 2,
                "draws": 1,
                "losses": 1,
                "goalsFor": 4,
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
                "played": 3,
                "wins": 1,
                "draws": 1,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 3
              }
            }
          ],
          "fixtures": [
            {
              "fixtureId": 1584398,
              "kickoff": "2026-09-08T02:00:00+09:00",
              "status": "FT",
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
                  "playerId": 62378,
                  "player": "F. Bayir",
                  "type": "Missing Fixture",
                  "reason": "Inactive"
                },
                {
                  "fixtureId": 1584398,
                  "teamId": 994,
                  "playerId": 143705,
                  "player": "G. Bayrakdar",
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
                  "playerId": 19047,
                  "player": "J. Bacuna",
                  "type": "Missing Fixture",
                  "reason": "Red Card"
                },
                {
                  "fixtureId": 1584398,
                  "teamId": 3573,
                  "playerId": 62038,
                  "player": "F. Bavuk",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1584398,
                  "teamId": 3573,
                  "playerId": 161884,
                  "player": "S. Hansen",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1584398,
                  "teamId": 3573,
                  "playerId": 522647,
                  "player": "A. O. Kalin",
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
                }
              ],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1584401,
              "kickoff": "2026-09-08T02:00:00+09:00",
              "status": "FT",
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
                },
                {
                  "fixtureId": 1584401,
                  "teamId": 996,
                  "playerId": 237120,
                  "player": "Maestro",
                  "type": "Missing Fixture",
                  "reason": "Inactive"
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
              "teamId": 2746,
              "team": "Gangwon FC",
              "rank": 4,
              "points": 40,
              "goalsDiff": 9,
              "form": "WDDLW",
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
              "teamId": 2761,
              "team": "Jeju United FC",
              "rank": 5,
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
              "goalsDiff": -9,
              "form": "LDWLL",
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
              "points": 28,
              "goalsDiff": -8,
              "form": "DLDDD",
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
              "rank": 12,
              "points": 13,
              "goalsDiff": -41,
              "form": "DLDLL",
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
          "teams": [
            {
              "teamId": 2763,
              "team": "Incheon United",
              "form": "LLDLWWLDWWLDWLWLLWWDDDWLDLW",
              "all": {
                "played": 27,
                "wins": 10,
                "draws": 7,
                "losses": 10,
                "goalsFor": 34,
                "goalsAgainst": 30
              },
              "home": {
                "played": 14,
                "wins": 5,
                "draws": 3,
                "losses": 6,
                "goalsFor": 16,
                "goalsAgainst": 15
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
              "form": "WDLDDLWDLLWLLDWDDLLDWDWWLDLL",
              "all": {
                "played": 28,
                "wins": 7,
                "draws": 10,
                "losses": 11,
                "goalsFor": 29,
                "goalsAgainst": 36
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
                "played": 13,
                "wins": 4,
                "draws": 4,
                "losses": 5,
                "goalsFor": 13,
                "goalsAgainst": 14
              }
            },
            {
              "teamId": 2767,
              "team": "Ulsan Hyundai FC",
              "form": "WWWDLWLWDLLWWWLDLDLWWWLLLWDW",
              "all": {
                "played": 28,
                "wins": 13,
                "draws": 5,
                "losses": 10,
                "goalsFor": 42,
                "goalsAgainst": 37
              },
              "home": {
                "played": 14,
                "wins": 7,
                "draws": 1,
                "losses": 6,
                "goalsFor": 24,
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
              "form": "WWWWDWWLWWLDLWWWDWWLDDWWWWWL",
              "all": {
                "played": 28,
                "wins": 18,
                "draws": 5,
                "losses": 5,
                "goalsFor": 53,
                "goalsAgainst": 22
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
                "played": 15,
                "wins": 10,
                "draws": 3,
                "losses": 2,
                "goalsFor": 31,
                "goalsAgainst": 12
              }
            }
          ],
          "fixtures": [
            {
              "fixtureId": 1507058,
              "kickoff": "2026-09-08T19:30:00+09:00",
              "status": "FT",
              "homeTeamId": 2763,
              "homeTeam": "Incheon United",
              "awayTeamId": 2745,
              "awayTeam": "Bucheon FC 1995",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": true,
              "lineups": [
                {
                  "teamId": 2763,
                  "team": "Incheon United",
                  "formation": "4-4-2",
                  "coach": "Jong-hwan Yoon",
                  "starters": [
                    "Kim Dong-Heon",
                    "Kim Myung-Sun",
                    "Kim Yeonsoo",
                    "Juan Fernández",
                    "Lee Ju-Yong",
                    "Lee Dong-Ryul",
                    "Seo Jae-Min",
                    "Lee Myung-Joo",
                    "Leandro Ribeiro",
                    "S. Mugoša",
                    "M. Ferrier"
                  ]
                },
                {
                  "teamId": 2745,
                  "team": "Bucheon FC 1995",
                  "formation": "3-4-3",
                  "coach": "Lee Young-Min",
                  "starters": [
                    "Kim Hyung-Geun",
                    "Hong Sung-Wook",
                    "Patrick William",
                    "Jeong Ho-Jin",
                    "An Tae-Hyun",
                    "Hong Sung-Wook",
                    "K. Takahashi",
                    "Kim Seung-Bin",
                    "Rodrigo Bassani",
                    "Gustavo Nescau",
                    "Jefferson Galego"
                  ]
                }
              ]
            },
            {
              "fixtureId": 1507059,
              "kickoff": "2026-09-08T19:30:00+09:00",
              "status": "FT",
              "homeTeamId": 2767,
              "homeTeam": "Ulsan Hyundai FC",
              "awayTeamId": 2766,
              "awayTeam": "FC Seoul",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": true,
              "lineups": [
                {
                  "teamId": 2767,
                  "team": "Ulsan Hyundai FC",
                  "formation": "3-4-3",
                  "coach": "Kim Hyun-Seok",
                  "starters": [
                    "Jo Hyeon-Woo",
                    "Seo Myeong-Kwan",
                    "Jung Seung-Hyun",
                    "Kim Young-Gwon",
                    "Jang Si-Young",
                    "Lee Gyu-Sung",
                    "T. Oude Kotte",
                    "Cho Hyun-Taek",
                    "Lee Jin-Hyun",
                    "Lee Dong-Gyeong",
                    "Erick Farias"
                  ]
                },
                {
                  "teamId": 2766,
                  "team": "FC Seoul",
                  "formation": "4-4-2",
                  "coach": "Kim Gi-Dong",
                  "starters": [
                    "Gu Sung-Yun",
                    "Choi Jun",
                    "Yazan Al Arab",
                    "Juan Antonio",
                    "Kim Jin-Su",
                    "Jeong Seung-Won",
                    "J. Son",
                    "H. Babec",
                    "Anderson Oliveira",
                    "Moon Seon-Min",
                    "P. Klimala"
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "date": "2026-09-09",
      "updatedAt": "2026-09-08T12:51:54.690Z",
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
              "points": 8,
              "goalsDiff": 3,
              "form": "DLWWD",
              "all": {
                "played": 5,
                "wins": 2,
                "draws": 2,
                "losses": 1,
                "goalsFor": 13,
                "goalsAgainst": 10
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
                "played": 3,
                "wins": 1,
                "draws": 1,
                "losses": 1,
                "goalsFor": 7,
                "goalsAgainst": 7
              }
            },
            {
              "teamId": 54,
              "team": "Birmingham",
              "rank": 10,
              "points": 7,
              "goalsDiff": 1,
              "form": "DDWDD",
              "all": {
                "played": 5,
                "wins": 1,
                "draws": 4,
                "losses": 0,
                "goalsFor": 7,
                "goalsAgainst": 6
              },
              "home": {
                "played": 3,
                "wins": 0,
                "draws": 3,
                "losses": 0,
                "goalsFor": 5,
                "goalsAgainst": 5
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
              "teamId": 1837,
              "team": "Wrexham",
              "rank": 11,
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
                  "playerId": 138929,
                  "player": "L. Brunt",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                },
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
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1563144,
                  "teamId": 48,
                  "playerId": 1243,
                  "player": "T. Soucek",
                  "type": "Missing Fixture",
                  "reason": "Ankle Injury"
                },
                {
                  "fixtureId": 1563144,
                  "teamId": 48,
                  "playerId": 50856,
                  "player": "T. Castellanos",
                  "type": "Questionable",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1563144,
                  "teamId": 48,
                  "playerId": 301187,
                  "player": "Pablo",
                  "type": "Questionable",
                  "reason": "Calf Injury"
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
              "teamId": 201,
              "team": "AZ Alkmaar",
              "rank": 1,
              "points": 15,
              "goalsDiff": 11,
              "form": "WWWWW",
              "all": {
                "played": 5,
                "wins": 5,
                "draws": 0,
                "losses": 0,
                "goalsFor": 16,
                "goalsAgainst": 5
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
                "wins": 3,
                "draws": 0,
                "losses": 0,
                "goalsFor": 9,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 197,
              "team": "PSV Eindhoven",
              "rank": 2,
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
              "teamId": 205,
              "team": "Fortuna Sittard",
              "rank": 4,
              "points": 10,
              "goalsDiff": 2,
              "form": "WWLWD",
              "all": {
                "played": 5,
                "wins": 3,
                "draws": 1,
                "losses": 1,
                "goalsFor": 11,
                "goalsAgainst": 9
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
                "wins": 2,
                "draws": 1,
                "losses": 0,
                "goalsFor": 8,
                "goalsAgainst": 6
              }
            },
            {
              "teamId": 196,
              "team": "Excelsior",
              "rank": 5,
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
              "rank": 6,
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
              "teamId": 415,
              "team": "Twente",
              "rank": 7,
              "points": 7,
              "goalsDiff": 4,
              "form": "DWWL",
              "all": {
                "played": 4,
                "wins": 2,
                "draws": 1,
                "losses": 1,
                "goalsFor": 9,
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
                "played": 3,
                "wins": 1,
                "draws": 1,
                "losses": 1,
                "goalsFor": 6,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 410,
              "team": "GO Ahead Eagles",
              "rank": 8,
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
              "teamId": 202,
              "team": "Groningen",
              "rank": 9,
              "points": 7,
              "goalsDiff": -1,
              "form": "DLLWW",
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
              "teamId": 413,
              "team": "NEC Nijmegen",
              "rank": 10,
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
              "teamId": 426,
              "team": "Sparta Rotterdam",
              "rank": 11,
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
              "teamId": 210,
              "team": "Heerenveen",
              "rank": 12,
              "points": 5,
              "goalsDiff": -2,
              "form": "LDLDW",
              "all": {
                "played": 5,
                "wins": 1,
                "draws": 2,
                "losses": 2,
                "goalsFor": 7,
                "goalsAgainst": 9
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
                "wins": 0,
                "draws": 2,
                "losses": 0,
                "goalsFor": 4,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 427,
              "team": "Telstar",
              "rank": 13,
              "points": 4,
              "goalsDiff": -5,
              "form": "DLLW",
              "all": {
                "played": 4,
                "wins": 1,
                "draws": 1,
                "losses": 2,
                "goalsFor": 5,
                "goalsAgainst": 10
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
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 2,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 193,
              "team": "PEC Zwolle",
              "rank": 14,
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
              "teamId": 207,
              "team": "Utrecht",
              "rank": 15,
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
              "rank": 16,
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
              "teamId": 198,
              "team": "ADO Den Haag",
              "rank": 17,
              "points": 1,
              "goalsDiff": -8,
              "form": "LDLLL",
              "all": {
                "played": 5,
                "wins": 0,
                "draws": 1,
                "losses": 4,
                "goalsFor": 6,
                "goalsAgainst": 14
              },
              "home": {
                "played": 2,
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 3,
                "goalsAgainst": 7
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
              "teamId": 420,
              "team": "Cambuur",
              "rank": 18,
              "points": 1,
              "goalsDiff": -12,
              "form": "DLLLL",
              "all": {
                "played": 5,
                "wins": 0,
                "draws": 1,
                "losses": 4,
                "goalsFor": 6,
                "goalsAgainst": 18
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
                "played": 2,
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 5
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
                  "type": "Questionable",
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
              "lineupsChecked": true,
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
                  "playerId": 511,
                  "player": "L. Goretzka",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
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
                  "playerId": 514519,
                  "player": "B. Madjo",
                  "type": "Missing Fixture",
                  "reason": "Ankle Injury"
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
                }
              ],
              "lineupsChecked": true,
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
              "lineupsChecked": true,
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
                  "playerId": 2096,
                  "player": "A. Bodart",
                  "type": "Missing Fixture",
                  "reason": "Off the roster"
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
                  "teamId": 543,
                  "playerId": 181421,
                  "player": "A. Ezzalzouli",
                  "type": "Missing Fixture",
                  "reason": "Illness"
                },
                {
                  "fixtureId": 1635683,
                  "teamId": 543,
                  "playerId": 47302,
                  "player": "D. Llorente",
                  "type": "Missing Fixture",
                  "reason": "Broken nose"
                },
                {
                  "fixtureId": 1635683,
                  "teamId": 543,
                  "playerId": 128985,
                  "player": "I. Losada",
                  "type": "Missing Fixture",
                  "reason": "Inactive"
                },
                {
                  "fixtureId": 1635683,
                  "teamId": 543,
                  "playerId": 47119,
                  "player": "A. Ruibal",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
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
                  "playerId": 341839,
                  "player": "F. Mane",
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
                  "teamId": 533,
                  "playerId": 166,
                  "player": "J. Foyth",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1635652,
                  "teamId": 533,
                  "playerId": 184420,
                  "player": "C. Romero",
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
                  "playerId": 388872,
                  "player": "V. Froholdt",
                  "type": "Missing Fixture",
                  "reason": "Concussion"
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
                  "teamId": 50,
                  "playerId": 1422,
                  "player": "J. Doku",
                  "type": "Missing Fixture",
                  "reason": "Calf Injury"
                },
                {
                  "fixtureId": 1635654,
                  "teamId": 50,
                  "playerId": 307123,
                  "player": "N. O'Reilly",
                  "type": "Missing Fixture",
                  "reason": "Back Injury"
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
                  "playerId": 47400,
                  "player": "A. Lunin",
                  "type": "Questionable",
                  "reason": "Illness"
                },
                {
                  "fixtureId": 1635714,
                  "teamId": 505,
                  "playerId": 31010,
                  "player": "F. Dimarco",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1635714,
                  "teamId": 505,
                  "playerId": 19235,
                  "player": "D. Spence",
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
              "teamId": 2746,
              "team": "Gangwon FC",
              "rank": 4,
              "points": 40,
              "goalsDiff": 9,
              "form": "WDDLW",
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
              "teamId": 2761,
              "team": "Jeju United FC",
              "rank": 5,
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
              "goalsDiff": -9,
              "form": "LDWLL",
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
              "points": 28,
              "goalsDiff": -8,
              "form": "DLDDD",
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
              "rank": 12,
              "points": 13,
              "goalsDiff": -41,
              "form": "DLDLL",
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
          "teams": [
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
              "teamId": 2762,
              "team": "Jeonbuk Motors",
              "form": "LDDWWWLDLWWWDDWLWLDWDLLWDDW",
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
              "teamId": 2750,
              "team": "Daejeon Citizen",
              "form": "DDDWLLLWLWWDLLLDDDDLWWLWWLW",
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
            },
            {
              "teamId": 2761,
              "team": "Jeju United FC",
              "form": "DLLLDWWDWLLWWLLDDWDWDWWDLWD",
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
              "teamId": 2764,
              "team": "Pohang Steelers",
              "form": "DDLDWWLLWLWDWWLWWLLLLLWLWDL",
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
            }
          ],
          "fixtures": [
            {
              "fixtureId": 1507061,
              "kickoff": "2026-09-09T19:30:00+09:00",
              "status": "NS",
              "homeTeamId": 2746,
              "homeTeam": "Gangwon FC",
              "awayTeamId": 2762,
              "awayTeam": "Jeonbuk Motors",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1507060,
              "kickoff": "2026-09-09T19:30:00+09:00",
              "status": "NS",
              "homeTeamId": 2750,
              "homeTeam": "Daejeon Citizen",
              "awayTeamId": 2748,
              "awayTeam": "FC Anyang",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1507062,
              "kickoff": "2026-09-09T19:30:00+09:00",
              "status": "NS",
              "homeTeamId": 2759,
              "homeTeam": "Gwangju FC",
              "awayTeamId": 2761,
              "awayTeam": "Jeju United FC",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1507063,
              "kickoff": "2026-09-09T19:30:00+09:00",
              "status": "NS",
              "homeTeamId": 2764,
              "homeTeam": "Pohang Steelers",
              "awayTeamId": 2768,
              "awayTeam": "Gimcheon Sangmu FC",
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
      "date": "2026-09-10",
      "updatedAt": "2026-09-08T12:52:09.068Z",
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
              "points": 8,
              "goalsDiff": 3,
              "form": "DLWWD",
              "all": {
                "played": 5,
                "wins": 2,
                "draws": 2,
                "losses": 1,
                "goalsFor": 13,
                "goalsAgainst": 10
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
                "played": 3,
                "wins": 1,
                "draws": 1,
                "losses": 1,
                "goalsFor": 7,
                "goalsAgainst": 7
              }
            },
            {
              "teamId": 54,
              "team": "Birmingham",
              "rank": 10,
              "points": 7,
              "goalsDiff": 1,
              "form": "DDWDD",
              "all": {
                "played": 5,
                "wins": 1,
                "draws": 4,
                "losses": 0,
                "goalsFor": 7,
                "goalsAgainst": 6
              },
              "home": {
                "played": 3,
                "wins": 0,
                "draws": 3,
                "losses": 0,
                "goalsFor": 5,
                "goalsAgainst": 5
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
              "teamId": 1837,
              "team": "Wrexham",
              "rank": 11,
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
              "teamId": 69,
              "team": "Derby",
              "form": "LDLWL",
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
              "teamId": 60,
              "team": "West Brom",
              "form": "WWLDW",
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
              "teamId": 71,
              "team": "Norwich",
              "form": "LLWLW",
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
              "teamId": 54,
              "team": "Birmingham",
              "form": "DDWDD",
              "all": {
                "played": 5,
                "wins": 1,
                "draws": 4,
                "losses": 0,
                "goalsFor": 7,
                "goalsAgainst": 6
              },
              "home": {
                "played": 3,
                "wins": 0,
                "draws": 3,
                "losses": 0,
                "goalsFor": 5,
                "goalsAgainst": 5
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
              "teamId": 1335,
              "team": "Charlton",
              "form": "WWWDL",
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
              "teamId": 72,
              "team": "QPR",
              "form": "WDWWL",
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
            }
          ],
          "fixtures": [
            {
              "fixtureId": 1563152,
              "kickoff": "2026-09-10T03:45:00+09:00",
              "status": "NS",
              "homeTeamId": 69,
              "homeTeam": "Derby",
              "awayTeamId": 60,
              "awayTeam": "West Brom",
              "injuriesChecked": true,
              "injuries": [
                {
                  "fixtureId": 1563152,
                  "teamId": 69,
                  "playerId": 407652,
                  "player": "P. Agyemang",
                  "type": "Missing Fixture",
                  "reason": "Achilles Tendon Injury"
                },
                {
                  "fixtureId": 1563152,
                  "teamId": 69,
                  "playerId": 19205,
                  "player": "C. Forsyth",
                  "type": "Missing Fixture",
                  "reason": "Inactive"
                },
                {
                  "fixtureId": 1563152,
                  "teamId": 69,
                  "playerId": 19083,
                  "player": "C. Morris",
                  "type": "Missing Fixture",
                  "reason": "Inactive"
                },
                {
                  "fixtureId": 1563152,
                  "teamId": 69,
                  "playerId": 37760,
                  "player": "D. Murkin",
                  "type": "Missing Fixture",
                  "reason": "Hamstring Injury"
                },
                {
                  "fixtureId": 1563152,
                  "teamId": 69,
                  "playerId": 19472,
                  "player": "L. Travis",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1563152,
                  "teamId": 69,
                  "playerId": 19860,
                  "player": "M. Clarke",
                  "type": "Questionable",
                  "reason": "Calf Injury"
                },
                {
                  "fixtureId": 1563152,
                  "teamId": 60,
                  "playerId": 1137,
                  "player": "M. Johnston",
                  "type": "Missing Fixture",
                  "reason": "Broken Leg"
                }
              ],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1563153,
              "kickoff": "2026-09-10T03:45:00+09:00",
              "status": "NS",
              "homeTeamId": 71,
              "homeTeam": "Norwich",
              "awayTeamId": 54,
              "awayTeam": "Birmingham",
              "injuriesChecked": true,
              "injuries": [
                {
                  "fixtureId": 1563153,
                  "teamId": 71,
                  "playerId": 362145,
                  "player": "A. Ahmed",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1563153,
                  "teamId": 71,
                  "playerId": 383773,
                  "player": "L. Mahovo",
                  "type": "Missing Fixture",
                  "reason": "Ankle Injury"
                },
                {
                  "fixtureId": 1563153,
                  "teamId": 71,
                  "playerId": 45947,
                  "player": "M. Topic",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1563153,
                  "teamId": 71,
                  "playerId": 326105,
                  "player": "J. Makama",
                  "type": "Questionable",
                  "reason": "Foot Injury"
                },
                {
                  "fixtureId": 1563153,
                  "teamId": 54,
                  "playerId": 19211,
                  "player": "M. Bird",
                  "type": "Missing Fixture",
                  "reason": "Inactive"
                },
                {
                  "fixtureId": 1563153,
                  "teamId": 54,
                  "playerId": 231078,
                  "player": "T. Gardner-Hickman",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1563153,
                  "teamId": 54,
                  "playerId": 167656,
                  "player": "M. Leonard",
                  "type": "Missing Fixture",
                  "reason": "Achilles Tendon Injury"
                },
                {
                  "fixtureId": 1563153,
                  "teamId": 54,
                  "playerId": 19202,
                  "player": "L. Buchanan",
                  "type": "Questionable",
                  "reason": "Knee Injury"
                }
              ],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1563151,
              "kickoff": "2026-09-10T04:00:00+09:00",
              "status": "NS",
              "homeTeamId": 1335,
              "homeTeam": "Charlton",
              "awayTeamId": 72,
              "awayTeam": "QPR",
              "injuriesChecked": true,
              "injuries": [
                {
                  "fixtureId": 1563151,
                  "teamId": 1335,
                  "playerId": 18803,
                  "player": "N. Chalobah",
                  "type": "Missing Fixture",
                  "reason": "Muscle Injury"
                },
                {
                  "fixtureId": 1563151,
                  "teamId": 1335,
                  "playerId": 19970,
                  "player": "M. Godden",
                  "type": "Missing Fixture",
                  "reason": "Muscle Injury"
                },
                {
                  "fixtureId": 1563151,
                  "teamId": 1335,
                  "playerId": 18603,
                  "player": "W. Mannion",
                  "type": "Missing Fixture",
                  "reason": "Shoulder Injury"
                },
                {
                  "fixtureId": 1563151,
                  "teamId": 1335,
                  "playerId": 19641,
                  "player": "D. McNamara",
                  "type": "Missing Fixture",
                  "reason": "Red Card"
                },
                {
                  "fixtureId": 1563151,
                  "teamId": 1335,
                  "playerId": 18939,
                  "player": "K. Ramsay",
                  "type": "Missing Fixture",
                  "reason": "Ankle Injury"
                },
                {
                  "fixtureId": 1563151,
                  "teamId": 1335,
                  "playerId": 283144,
                  "player": "C. Sichenje",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1563151,
                  "teamId": 1335,
                  "playerId": 125543,
                  "player": "J. Edwards",
                  "type": "Questionable",
                  "reason": "Ankle Injury"
                },
                {
                  "fixtureId": 1563151,
                  "teamId": 1335,
                  "playerId": 20352,
                  "player": "C. Kelman",
                  "type": "Questionable",
                  "reason": "Shoulder Injury"
                },
                {
                  "fixtureId": 1563151,
                  "teamId": 1335,
                  "playerId": 152974,
                  "player": "B. Koumetio",
                  "type": "Questionable",
                  "reason": "Muscle Injury"
                },
                {
                  "fixtureId": 1563151,
                  "teamId": 72,
                  "playerId": 67959,
                  "player": "K. Dembele",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1563151,
                  "teamId": 72,
                  "playerId": 38737,
                  "player": "B. Kemper",
                  "type": "Questionable",
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
              "teamId": 201,
              "team": "AZ Alkmaar",
              "rank": 1,
              "points": 15,
              "goalsDiff": 11,
              "form": "WWWWW",
              "all": {
                "played": 5,
                "wins": 5,
                "draws": 0,
                "losses": 0,
                "goalsFor": 16,
                "goalsAgainst": 5
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
                "wins": 3,
                "draws": 0,
                "losses": 0,
                "goalsFor": 9,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 197,
              "team": "PSV Eindhoven",
              "rank": 2,
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
              "teamId": 205,
              "team": "Fortuna Sittard",
              "rank": 4,
              "points": 10,
              "goalsDiff": 2,
              "form": "WWLWD",
              "all": {
                "played": 5,
                "wins": 3,
                "draws": 1,
                "losses": 1,
                "goalsFor": 11,
                "goalsAgainst": 9
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
                "wins": 2,
                "draws": 1,
                "losses": 0,
                "goalsFor": 8,
                "goalsAgainst": 6
              }
            },
            {
              "teamId": 196,
              "team": "Excelsior",
              "rank": 5,
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
              "rank": 6,
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
              "teamId": 415,
              "team": "Twente",
              "rank": 7,
              "points": 7,
              "goalsDiff": 4,
              "form": "DWWL",
              "all": {
                "played": 4,
                "wins": 2,
                "draws": 1,
                "losses": 1,
                "goalsFor": 9,
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
                "played": 3,
                "wins": 1,
                "draws": 1,
                "losses": 1,
                "goalsFor": 6,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 410,
              "team": "GO Ahead Eagles",
              "rank": 8,
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
              "teamId": 202,
              "team": "Groningen",
              "rank": 9,
              "points": 7,
              "goalsDiff": -1,
              "form": "DLLWW",
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
              "teamId": 413,
              "team": "NEC Nijmegen",
              "rank": 10,
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
              "teamId": 426,
              "team": "Sparta Rotterdam",
              "rank": 11,
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
              "teamId": 210,
              "team": "Heerenveen",
              "rank": 12,
              "points": 5,
              "goalsDiff": -2,
              "form": "LDLDW",
              "all": {
                "played": 5,
                "wins": 1,
                "draws": 2,
                "losses": 2,
                "goalsFor": 7,
                "goalsAgainst": 9
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
                "wins": 0,
                "draws": 2,
                "losses": 0,
                "goalsFor": 4,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 427,
              "team": "Telstar",
              "rank": 13,
              "points": 4,
              "goalsDiff": -5,
              "form": "DLLW",
              "all": {
                "played": 4,
                "wins": 1,
                "draws": 1,
                "losses": 2,
                "goalsFor": 5,
                "goalsAgainst": 10
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
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 2,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 193,
              "team": "PEC Zwolle",
              "rank": 14,
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
              "teamId": 207,
              "team": "Utrecht",
              "rank": 15,
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
              "rank": 16,
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
              "teamId": 198,
              "team": "ADO Den Haag",
              "rank": 17,
              "points": 1,
              "goalsDiff": -8,
              "form": "LDLLL",
              "all": {
                "played": 5,
                "wins": 0,
                "draws": 1,
                "losses": 4,
                "goalsFor": 6,
                "goalsAgainst": 14
              },
              "home": {
                "played": 2,
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 3,
                "goalsAgainst": 7
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
              "teamId": 420,
              "team": "Cambuur",
              "rank": 18,
              "points": 1,
              "goalsDiff": -12,
              "form": "DLLLL",
              "all": {
                "played": 5,
                "wins": 0,
                "draws": 1,
                "losses": 4,
                "goalsFor": 6,
                "goalsAgainst": 18
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
                "played": 2,
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 5
              }
            }
          ],
          "teams": [
            {
              "teamId": 415,
              "team": "Twente",
              "form": "LWWD",
              "all": {
                "played": 4,
                "wins": 2,
                "draws": 1,
                "losses": 1,
                "goalsFor": 9,
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
                "played": 3,
                "wins": 1,
                "draws": 1,
                "losses": 1,
                "goalsFor": 6,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 427,
              "team": "Telstar",
              "form": "WLLD",
              "all": {
                "played": 4,
                "wins": 1,
                "draws": 1,
                "losses": 2,
                "goalsFor": 5,
                "goalsAgainst": 10
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
              "fixtureId": 1552142,
              "kickoff": "2026-09-10T01:45:00+09:00",
              "status": "NS",
              "homeTeamId": 415,
              "homeTeam": "Twente",
              "awayTeamId": 427,
              "awayTeam": "Telstar",
              "injuriesChecked": true,
              "injuries": [
                {
                  "fixtureId": 1552142,
                  "teamId": 415,
                  "playerId": 191879,
                  "player": "K. Hlynsson",
                  "type": "Missing Fixture",
                  "reason": "Inactive"
                },
                {
                  "fixtureId": 1552142,
                  "teamId": 415,
                  "playerId": 292553,
                  "player": "S. Lemkin",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1552142,
                  "teamId": 427,
                  "playerId": 28786,
                  "player": "N. Thorisson",
                  "type": "Missing Fixture",
                  "reason": "Red Card"
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
              "points": 10,
              "goalsDiff": 4,
              "form": "DWLWW",
              "all": {
                "played": 5,
                "wins": 3,
                "draws": 1,
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
                "played": 3,
                "wins": 1,
                "draws": 1,
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
              "goalsDiff": 2,
              "form": "LDWW",
              "all": {
                "played": 4,
                "wins": 2,
                "draws": 1,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 1
              },
              "home": {
                "played": 3,
                "wins": 2,
                "draws": 0,
                "losses": 1,
                "goalsFor": 3,
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
              "teamId": 238,
              "team": "Academico Viseu",
              "rank": 10,
              "points": 5,
              "goalsDiff": -3,
              "form": "WLDLD",
              "all": {
                "played": 5,
                "wins": 1,
                "draws": 2,
                "losses": 2,
                "goalsFor": 5,
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
                "played": 3,
                "wins": 1,
                "draws": 2,
                "losses": 0,
                "goalsFor": 5,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 224,
              "team": "Vitória SC",
              "rank": 11,
              "points": 4,
              "goalsDiff": -2,
              "form": "DLWLL",
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
              "teamId": 225,
              "team": "Nacional",
              "rank": 12,
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
              "rank": 13,
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
              "teamId": 242,
              "team": "Famalicao",
              "rank": 14,
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
              "rank": 15,
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
              "teamId": 230,
              "team": "Estoril",
              "rank": 16,
              "points": 2,
              "goalsDiff": -5,
              "form": "DLLLD",
              "all": {
                "played": 5,
                "wins": 0,
                "draws": 2,
                "losses": 3,
                "goalsFor": 2,
                "goalsAgainst": 7
              },
              "home": {
                "played": 3,
                "wins": 0,
                "draws": 2,
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
              "teamId": 4724,
              "team": "Alverca",
              "rank": 17,
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
              "teamId": 4716,
              "team": "Casa Pia",
              "rank": 18,
              "points": 1,
              "goalsDiff": -11,
              "form": "DLLLL",
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
          "teams": [
            {
              "teamId": 215,
              "team": "Moreirense",
              "form": "DLWL",
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
            }
          ],
          "fixtures": [
            {
              "fixtureId": 1575469,
              "kickoff": "2026-09-10T04:45:00+09:00",
              "status": "NS",
              "homeTeamId": 215,
              "homeTeam": "Moreirense",
              "awayTeamId": 211,
              "awayTeam": "Benfica",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
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
              "teamId": 254,
              "team": "Heart Of Midlothian",
              "rank": 2,
              "points": 12,
              "goalsDiff": 7,
              "form": "WWWWL",
              "all": {
                "played": 5,
                "wins": 4,
                "draws": 0,
                "losses": 1,
                "goalsFor": 12,
                "goalsAgainst": 5
              },
              "home": {
                "played": 3,
                "wins": 3,
                "draws": 0,
                "losses": 0,
                "goalsFor": 8,
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
              "teamId": 251,
              "team": "ST Mirren",
              "rank": 3,
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
              "rank": 4,
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
              "goalsDiff": 1,
              "form": "LDLWW",
              "all": {
                "played": 6,
                "wins": 2,
                "draws": 1,
                "losses": 3,
                "goalsFor": 7,
                "goalsAgainst": 6
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
                "played": 3,
                "wins": 1,
                "draws": 0,
                "losses": 2,
                "goalsFor": 3,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 258,
              "team": "ST Johnstone",
              "rank": 7,
              "points": 7,
              "goalsDiff": 0,
              "form": "WDLLW",
              "all": {
                "played": 5,
                "wins": 2,
                "draws": 1,
                "losses": 2,
                "goalsFor": 8,
                "goalsAgainst": 8
              },
              "home": {
                "played": 2,
                "wins": 2,
                "draws": 0,
                "losses": 0,
                "goalsFor": 6,
                "goalsAgainst": 4
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
              "rank": 8,
              "points": 6,
              "goalsDiff": -2,
              "form": "LLWWL",
              "all": {
                "played": 5,
                "wins": 2,
                "draws": 0,
                "losses": 3,
                "goalsFor": 7,
                "goalsAgainst": 9
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
                "played": 3,
                "wins": 2,
                "draws": 0,
                "losses": 1,
                "goalsFor": 5,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 1386,
              "team": "Dundee Utd",
              "rank": 9,
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
              "teamId": 257,
              "team": "Rangers",
              "form": "DLWWW",
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
              "teamId": 258,
              "team": "ST Johnstone",
              "form": "WLLDW",
              "all": {
                "played": 5,
                "wins": 2,
                "draws": 1,
                "losses": 2,
                "goalsFor": 8,
                "goalsAgainst": 8
              },
              "home": {
                "played": 2,
                "wins": 2,
                "draws": 0,
                "losses": 0,
                "goalsFor": 6,
                "goalsAgainst": 4
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
            }
          ],
          "fixtures": [
            {
              "fixtureId": 1556644,
              "kickoff": "2026-09-10T03:45:00+09:00",
              "status": "NS",
              "homeTeamId": 257,
              "homeTeam": "Rangers",
              "awayTeamId": 251,
              "awayTeam": "ST Mirren",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1556645,
              "kickoff": "2026-09-10T04:00:00+09:00",
              "status": "NS",
              "homeTeamId": 258,
              "homeTeam": "ST Johnstone",
              "awayTeamId": 247,
              "awayTeam": "Celtic",
              "injuriesChecked": true,
              "injuries": [],
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
              "teamId": 172,
              "team": "VfB Stuttgart",
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
              "form": "DW",
              "all": {
                "played": 2,
                "wins": 1,
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
                "goalsFor": 3,
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
              "teamId": 529,
              "team": "Barcelona",
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
              "teamId": 209,
              "team": "Feyenoord",
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
              "form": "WDWWDW",
              "all": {
                "played": 6,
                "wins": 4,
                "draws": 2,
                "losses": 0,
                "goalsFor": 10,
                "goalsAgainst": 4
              },
              "home": {
                "played": 3,
                "wins": 1,
                "draws": 2,
                "losses": 0,
                "goalsFor": 4,
                "goalsAgainst": 2
              },
              "away": {
                "played": 3,
                "wins": 3,
                "draws": 0,
                "losses": 0,
                "goalsFor": 6,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 228,
              "team": "Sporting CP",
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
              "teamId": 42,
              "team": "Arsenal",
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
              "fixtureId": 1635741,
              "kickoff": "2026-09-10T01:45:00+09:00",
              "status": "NS",
              "homeTeamId": 172,
              "homeTeam": "VfB Stuttgart",
              "awayTeamId": 759,
              "awayTeam": "Viking",
              "injuriesChecked": true,
              "injuries": [
                {
                  "fixtureId": 1635741,
                  "teamId": 172,
                  "playerId": 350799,
                  "player": "J. Arevalo",
                  "type": "Missing Fixture",
                  "reason": "Back Injury"
                },
                {
                  "fixtureId": 1635741,
                  "teamId": 172,
                  "playerId": 287927,
                  "player": "J. Diehl",
                  "type": "Missing Fixture",
                  "reason": "Muscle Injury"
                },
                {
                  "fixtureId": 1635741,
                  "teamId": 172,
                  "playerId": 178217,
                  "player": "S. Drljaca",
                  "type": "Missing Fixture",
                  "reason": "Off the roster"
                },
                {
                  "fixtureId": 1635741,
                  "teamId": 172,
                  "playerId": 349344,
                  "player": "L. Jaquez",
                  "type": "Missing Fixture",
                  "reason": "Muscle Injury"
                },
                {
                  "fixtureId": 1635741,
                  "teamId": 172,
                  "playerId": 24806,
                  "player": "N. Nartey",
                  "type": "Missing Fixture",
                  "reason": "Red Card"
                },
                {
                  "fixtureId": 1635741,
                  "teamId": 172,
                  "playerId": 327993,
                  "player": "D. Seimen",
                  "type": "Missing Fixture",
                  "reason": "Thigh Injury"
                },
                {
                  "fixtureId": 1635741,
                  "teamId": 172,
                  "playerId": 48481,
                  "player": "L. Stergiou",
                  "type": "Missing Fixture",
                  "reason": "Off the roster"
                },
                {
                  "fixtureId": 1635741,
                  "teamId": 172,
                  "playerId": 265363,
                  "player": "T. Tomas",
                  "type": "Missing Fixture",
                  "reason": "Muscle Injury"
                },
                {
                  "fixtureId": 1635741,
                  "teamId": 172,
                  "playerId": 13,
                  "player": "D. Zagadou",
                  "type": "Missing Fixture",
                  "reason": "Muscle Injury"
                },
                {
                  "fixtureId": 1635741,
                  "teamId": 759,
                  "playerId": 15712,
                  "player": "A. Baertelsen",
                  "type": "Missing Fixture",
                  "reason": "Foot Injury"
                },
                {
                  "fixtureId": 1635741,
                  "teamId": 759,
                  "playerId": 39220,
                  "player": "V. Berisha",
                  "type": "Missing Fixture",
                  "reason": "Thigh Injury"
                },
                {
                  "fixtureId": 1635741,
                  "teamId": 759,
                  "playerId": 39130,
                  "player": "S. Bjorshol",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1635741,
                  "teamId": 759,
                  "playerId": 637833,
                  "player": "K. Frimpong",
                  "type": "Missing Fixture",
                  "reason": "Off the roster"
                },
                {
                  "fixtureId": 1635741,
                  "teamId": 759,
                  "playerId": 57436,
                  "player": "M. Roseth",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1635741,
                  "teamId": 759,
                  "playerId": 180937,
                  "player": "H. Falchener",
                  "type": "Questionable",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1635741,
                  "teamId": 759,
                  "playerId": 39040,
                  "player": "K. Haugen",
                  "type": "Questionable",
                  "reason": "Injury"
                }
              ],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1635628,
              "kickoff": "2026-09-10T01:45:00+09:00",
              "status": "NS",
              "homeTeamId": 529,
              "homeTeam": "Barcelona",
              "awayTeamId": 209,
              "awayTeam": "Feyenoord",
              "injuriesChecked": true,
              "injuries": [
                {
                  "fixtureId": 1635628,
                  "teamId": 529,
                  "playerId": 338958,
                  "player": "R. Bardghji",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1635628,
                  "teamId": 529,
                  "playerId": 426446,
                  "player": "J. Bisiwu",
                  "type": "Missing Fixture",
                  "reason": "Ankle Injury"
                },
                {
                  "fixtureId": 1635628,
                  "teamId": 529,
                  "playerId": 619,
                  "player": "E. Garcia",
                  "type": "Missing Fixture",
                  "reason": "Red Card"
                },
                {
                  "fixtureId": 1635628,
                  "teamId": 529,
                  "playerId": 538,
                  "player": "F. de Jong",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1635628,
                  "teamId": 209,
                  "playerId": 328141,
                  "player": "T. Beelen",
                  "type": "Missing Fixture",
                  "reason": "Broken Leg"
                },
                {
                  "fixtureId": 1635628,
                  "teamId": 209,
                  "playerId": 40911,
                  "player": "J. Moder",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1635628,
                  "teamId": 209,
                  "playerId": 37147,
                  "player": "B. Nieuwkoop",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1635628,
                  "teamId": 209,
                  "playerId": 37742,
                  "player": "G. Smal",
                  "type": "Missing Fixture",
                  "reason": "Ankle Injury"
                },
                {
                  "fixtureId": 1635628,
                  "teamId": 209,
                  "playerId": 337587,
                  "player": "J. Bos",
                  "type": "Questionable",
                  "reason": "Knee Injury"
                }
              ],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1635686,
              "kickoff": "2026-09-10T04:00:00+09:00",
              "status": "NS",
              "homeTeamId": 40,
              "homeTeam": "Liverpool",
              "awayTeamId": 530,
              "awayTeam": "Atletico Madrid",
              "injuriesChecked": true,
              "injuries": [
                {
                  "fixtureId": 1635686,
                  "teamId": 40,
                  "playerId": 180317,
                  "player": "C. Bradley",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1635686,
                  "teamId": 40,
                  "playerId": 30410,
                  "player": "F. Chiesa",
                  "type": "Missing Fixture",
                  "reason": "Back Injury"
                },
                {
                  "fixtureId": 1635686,
                  "teamId": 40,
                  "playerId": 174565,
                  "player": "H. Ekitike",
                  "type": "Missing Fixture",
                  "reason": "Achilles Tendon Injury"
                },
                {
                  "fixtureId": 1635686,
                  "teamId": 40,
                  "playerId": 8500,
                  "player": "W. Endo",
                  "type": "Missing Fixture",
                  "reason": "Off the roster"
                },
                {
                  "fixtureId": 1635686,
                  "teamId": 40,
                  "playerId": 284,
                  "player": "J. Gomez",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1635686,
                  "teamId": 40,
                  "playerId": 409047,
                  "player": "G. Leoni",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1635686,
                  "teamId": 530,
                  "playerId": 183948,
                  "player": "A. Ortiz",
                  "type": "Missing Fixture",
                  "reason": "Red Card"
                },
                {
                  "fixtureId": 1635686,
                  "teamId": 530,
                  "playerId": 8492,
                  "player": "A. Sorloth",
                  "type": "Missing Fixture",
                  "reason": "Muscle Injury"
                },
                {
                  "fixtureId": 1635686,
                  "teamId": 530,
                  "playerId": 313383,
                  "player": "O. Vargas",
                  "type": "Questionable",
                  "reason": "Coach's decision"
                }
              ],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1635705,
              "kickoff": "2026-09-10T04:00:00+09:00",
              "status": "NS",
              "homeTeamId": 85,
              "homeTeam": "Paris Saint Germain",
              "awayTeamId": 656,
              "awayTeam": "Slovan Bratislava",
              "injuriesChecked": true,
              "injuries": [
                {
                  "fixtureId": 1635705,
                  "teamId": 85,
                  "playerId": 2724,
                  "player": "L. Digne",
                  "type": "Questionable",
                  "reason": "Inactive"
                },
                {
                  "fixtureId": 1635705,
                  "teamId": 656,
                  "playerId": 269240,
                  "player": "A. Griger",
                  "type": "Missing Fixture",
                  "reason": "Off the roster"
                },
                {
                  "fixtureId": 1635705,
                  "teamId": 656,
                  "playerId": 649099,
                  "player": "M. Kianga",
                  "type": "Missing Fixture",
                  "reason": "Off the roster"
                },
                {
                  "fixtureId": 1635705,
                  "teamId": 656,
                  "playerId": 208398,
                  "player": "M. Kukharevych",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                }
              ],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1635736,
              "kickoff": "2026-09-10T04:00:00+09:00",
              "status": "NS",
              "homeTeamId": 228,
              "homeTeam": "Sporting CP",
              "awayTeamId": 645,
              "awayTeam": "Galatasaray",
              "injuriesChecked": true,
              "injuries": [
                {
                  "fixtureId": 1635736,
                  "teamId": 228,
                  "playerId": 41194,
                  "player": "N. Santos",
                  "type": "Missing Fixture",
                  "reason": "Muscle Injury"
                },
                {
                  "fixtureId": 1635736,
                  "teamId": 228,
                  "playerId": 400509,
                  "player": "J. Simoes",
                  "type": "Missing Fixture",
                  "reason": "Foot Injury"
                },
                {
                  "fixtureId": 1635736,
                  "teamId": 645,
                  "playerId": 550893,
                  "player": "E. Aydin",
                  "type": "Missing Fixture",
                  "reason": "Off the roster"
                },
                {
                  "fixtureId": 1635736,
                  "teamId": 645,
                  "playerId": 25448,
                  "player": "K. Ayhan",
                  "type": "Missing Fixture",
                  "reason": "Off the roster"
                },
                {
                  "fixtureId": 1635736,
                  "teamId": 645,
                  "playerId": 585709,
                  "player": "A. Guner",
                  "type": "Missing Fixture",
                  "reason": "Off the roster"
                },
                {
                  "fixtureId": 1635736,
                  "teamId": 645,
                  "playerId": 61950,
                  "player": "G. Guvenc",
                  "type": "Missing Fixture",
                  "reason": "Muscle Injury"
                },
                {
                  "fixtureId": 1635736,
                  "teamId": 645,
                  "playerId": 145057,
                  "player": "K. Karatas",
                  "type": "Missing Fixture",
                  "reason": "Off the roster"
                },
                {
                  "fixtureId": 1635736,
                  "teamId": 645,
                  "playerId": 18947,
                  "player": "M. Lemina",
                  "type": "Missing Fixture",
                  "reason": "Muscle Injury"
                },
                {
                  "fixtureId": 1635736,
                  "teamId": 645,
                  "playerId": 620969,
                  "player": "S. Nas",
                  "type": "Missing Fixture",
                  "reason": "Off the roster"
                },
                {
                  "fixtureId": 1635736,
                  "teamId": 645,
                  "playerId": 404443,
                  "player": "A. Unyay",
                  "type": "Missing Fixture",
                  "reason": "Off the roster"
                },
                {
                  "fixtureId": 1635736,
                  "teamId": 645,
                  "playerId": 568439,
                  "player": "A. Yilmaz",
                  "type": "Missing Fixture",
                  "reason": "Off the roster"
                },
                {
                  "fixtureId": 1635736,
                  "teamId": 645,
                  "playerId": 2780,
                  "player": "V. Osimhen",
                  "type": "Questionable",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1635736,
                  "teamId": 645,
                  "playerId": 30504,
                  "player": "W. Singo",
                  "type": "Questionable",
                  "reason": "Thigh Injury"
                }
              ],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1635698,
              "kickoff": "2026-09-10T04:00:00+09:00",
              "status": "NS",
              "homeTeamId": 492,
              "homeTeam": "Napoli",
              "awayTeamId": 42,
              "awayTeam": "Arsenal",
              "injuriesChecked": true,
              "injuries": [
                {
                  "fixtureId": 1635698,
                  "teamId": 492,
                  "playerId": 31226,
                  "player": "A. Buongiorno",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1635698,
                  "teamId": 492,
                  "playerId": 312615,
                  "player": "Giovane",
                  "type": "Missing Fixture",
                  "reason": "Groin Injury"
                },
                {
                  "fixtureId": 1635698,
                  "teamId": 492,
                  "playerId": 388547,
                  "player": "L. Marianucci",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1635698,
                  "teamId": 492,
                  "playerId": 903,
                  "player": "S. McTominay",
                  "type": "Missing Fixture",
                  "reason": "Heart Problems"
                },
                {
                  "fixtureId": 1635698,
                  "teamId": 42,
                  "playerId": 22090,
                  "player": "W. Saliba",
                  "type": "Missing Fixture",
                  "reason": "Back Injury"
                },
                {
                  "fixtureId": 1635698,
                  "teamId": 42,
                  "playerId": 333682,
                  "player": "C. Mosquera",
                  "type": "Questionable",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1635698,
                  "teamId": 42,
                  "playerId": 38746,
                  "player": "J. Timber",
                  "type": "Questionable",
                  "reason": "Ankle Injury"
                }
              ],
              "lineupsChecked": false,
              "lineups": []
            }
          ]
        }
      ]
    },
    {
      "date": "2026-09-11",
      "updatedAt": "2026-09-08T12:52:16.373Z",
      "leagues": [
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
              "points": 10,
              "goalsDiff": 4,
              "form": "DWLWW",
              "all": {
                "played": 5,
                "wins": 3,
                "draws": 1,
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
                "played": 3,
                "wins": 1,
                "draws": 1,
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
              "goalsDiff": 2,
              "form": "LDWW",
              "all": {
                "played": 4,
                "wins": 2,
                "draws": 1,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 1
              },
              "home": {
                "played": 3,
                "wins": 2,
                "draws": 0,
                "losses": 1,
                "goalsFor": 3,
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
              "teamId": 238,
              "team": "Academico Viseu",
              "rank": 10,
              "points": 5,
              "goalsDiff": -3,
              "form": "WLDLD",
              "all": {
                "played": 5,
                "wins": 1,
                "draws": 2,
                "losses": 2,
                "goalsFor": 5,
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
                "played": 3,
                "wins": 1,
                "draws": 2,
                "losses": 0,
                "goalsFor": 5,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 224,
              "team": "Vitória SC",
              "rank": 11,
              "points": 4,
              "goalsDiff": -2,
              "form": "DLWLL",
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
              "teamId": 225,
              "team": "Nacional",
              "rank": 12,
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
              "rank": 13,
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
              "teamId": 242,
              "team": "Famalicao",
              "rank": 14,
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
              "rank": 15,
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
              "teamId": 230,
              "team": "Estoril",
              "rank": 16,
              "points": 2,
              "goalsDiff": -5,
              "form": "DLLLD",
              "all": {
                "played": 5,
                "wins": 0,
                "draws": 2,
                "losses": 3,
                "goalsFor": 2,
                "goalsAgainst": 7
              },
              "home": {
                "played": 3,
                "wins": 0,
                "draws": 2,
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
              "teamId": 4724,
              "team": "Alverca",
              "rank": 17,
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
              "teamId": 4716,
              "team": "Casa Pia",
              "rank": 18,
              "points": 1,
              "goalsDiff": -11,
              "form": "DLLLL",
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
          "teams": [
            {
              "teamId": 15130,
              "team": "Estrela",
              "form": "DDWD",
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
            }
          ],
          "fixtures": [
            {
              "fixtureId": 1575465,
              "kickoff": "2026-09-11T04:15:00+09:00",
              "status": "NS",
              "homeTeamId": 15130,
              "homeTeam": "Estrela",
              "awayTeamId": 217,
              "awayTeam": "SC Braga",
              "injuriesChecked": true,
              "injuries": [],
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
              "teamId": 197,
              "team": "PSV Eindhoven",
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
              "teamId": 550,
              "team": "Shakhtar Donetsk",
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
              "form": "WDWWDW",
              "all": {
                "played": 6,
                "wins": 4,
                "draws": 2,
                "losses": 0,
                "goalsFor": 8,
                "goalsAgainst": 3
              },
              "home": {
                "played": 3,
                "wins": 2,
                "draws": 1,
                "losses": 0,
                "goalsFor": 4,
                "goalsAgainst": 1
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
              "teamId": 497,
              "team": "AS Roma",
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
              "teamId": 13976,
              "team": "Sabah FA",
              "form": "WWWWLWLW",
              "all": {
                "played": 8,
                "wins": 6,
                "draws": 0,
                "losses": 2,
                "goalsFor": 18,
                "goalsAgainst": 7
              },
              "home": {
                "played": 4,
                "wins": 4,
                "draws": 0,
                "losses": 0,
                "goalsFor": 12,
                "goalsAgainst": 2
              },
              "away": {
                "played": 4,
                "wins": 2,
                "draws": 0,
                "losses": 2,
                "goalsFor": 6,
                "goalsAgainst": 5
              }
            },
            {
              "teamId": 157,
              "team": "Bayern München",
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
              "form": "DWWW",
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
                "wins": 2,
                "draws": 0,
                "losses": 0,
                "goalsFor": 6,
                "goalsAgainst": 2
              },
              "away": {
                "played": 2,
                "wins": 1,
                "draws": 1,
                "losses": 0,
                "goalsFor": 6,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 560,
              "team": "Slavia Praha",
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
              "teamId": 173,
              "team": "RB Leipzig",
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
              "fixtureId": 1635708,
              "kickoff": "2026-09-11T01:45:00+09:00",
              "status": "NS",
              "homeTeamId": 197,
              "homeTeam": "PSV Eindhoven",
              "awayTeamId": 550,
              "awayTeam": "Shakhtar Donetsk",
              "injuriesChecked": true,
              "injuries": [
                {
                  "fixtureId": 1635708,
                  "teamId": 197,
                  "playerId": 508061,
                  "player": "M. Bro Hansen",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1635708,
                  "teamId": 197,
                  "playerId": 43036,
                  "player": "D. Man",
                  "type": "Missing Fixture",
                  "reason": "Inactive"
                },
                {
                  "fixtureId": 1635708,
                  "teamId": 197,
                  "playerId": 233,
                  "player": "Mauro Junior",
                  "type": "Missing Fixture",
                  "reason": "Red Card"
                },
                {
                  "fixtureId": 1635708,
                  "teamId": 197,
                  "playerId": 307426,
                  "player": "A. Nagalo",
                  "type": "Missing Fixture",
                  "reason": "Off the roster"
                },
                {
                  "fixtureId": 1635708,
                  "teamId": 197,
                  "playerId": 378864,
                  "player": "S. Ouaissa",
                  "type": "Missing Fixture",
                  "reason": "Muscle Injury"
                },
                {
                  "fixtureId": 1635708,
                  "teamId": 197,
                  "playerId": 25646,
                  "player": "A. Plea",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1635708,
                  "teamId": 197,
                  "playerId": 37890,
                  "player": "J. Schouten",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1635708,
                  "teamId": 197,
                  "playerId": 191233,
                  "player": "K. Sildillia",
                  "type": "Missing Fixture",
                  "reason": "Inactive"
                },
                {
                  "fixtureId": 1635708,
                  "teamId": 197,
                  "playerId": 228,
                  "player": "A. Obispo",
                  "type": "Questionable",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1635708,
                  "teamId": 550,
                  "playerId": 125417,
                  "player": "V. Korniyenko",
                  "type": "Missing Fixture",
                  "reason": "Off the roster"
                },
                {
                  "fixtureId": 1635708,
                  "teamId": 550,
                  "playerId": 428137,
                  "player": "P. Obah",
                  "type": "Missing Fixture",
                  "reason": "Off the roster"
                },
                {
                  "fixtureId": 1635708,
                  "teamId": 550,
                  "playerId": 323537,
                  "player": "T. Puzankov",
                  "type": "Missing Fixture",
                  "reason": "Off the roster"
                },
                {
                  "fixtureId": 1635708,
                  "teamId": 550,
                  "playerId": 63557,
                  "player": "M. Shved",
                  "type": "Missing Fixture",
                  "reason": "Off the roster"
                },
                {
                  "fixtureId": 1635708,
                  "teamId": 550,
                  "playerId": 544640,
                  "player": "D. Tvardovskyi",
                  "type": "Missing Fixture",
                  "reason": "Off the roster"
                },
                {
                  "fixtureId": 1635708,
                  "teamId": 550,
                  "playerId": 10244,
                  "player": "Pedrinho",
                  "type": "Questionable",
                  "reason": "Injury"
                }
              ],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1635659,
              "kickoff": "2026-09-11T01:45:00+09:00",
              "status": "NS",
              "homeTeamId": 611,
              "homeTeam": "Fenerbahçe",
              "awayTeamId": 497,
              "awayTeam": "AS Roma",
              "injuriesChecked": true,
              "injuries": [
                {
                  "fixtureId": 1635659,
                  "teamId": 611,
                  "playerId": 746,
                  "player": "M. Asensio",
                  "type": "Missing Fixture",
                  "reason": "Muscle Injury"
                },
                {
                  "fixtureId": 1635659,
                  "teamId": 611,
                  "playerId": 417861,
                  "player": "A. Diouf",
                  "type": "Missing Fixture",
                  "reason": "Off the roster"
                },
                {
                  "fixtureId": 1635659,
                  "teamId": 611,
                  "playerId": 417860,
                  "player": "A. Fall",
                  "type": "Missing Fixture",
                  "reason": "Off the roster"
                },
                {
                  "fixtureId": 1635659,
                  "teamId": 611,
                  "playerId": 1454,
                  "player": "M. Guendouzi",
                  "type": "Missing Fixture",
                  "reason": "Red Card"
                },
                {
                  "fixtureId": 1635659,
                  "teamId": 611,
                  "playerId": 272721,
                  "player": "J. Oosterwolde",
                  "type": "Missing Fixture",
                  "reason": "Achilles Tendon Injury"
                },
                {
                  "fixtureId": 1635659,
                  "teamId": 611,
                  "playerId": 829,
                  "player": "Rodrigo Becao",
                  "type": "Missing Fixture",
                  "reason": "Off the roster"
                },
                {
                  "fixtureId": 1635659,
                  "teamId": 611,
                  "playerId": 18776,
                  "player": "C. Soyuncu",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1635659,
                  "teamId": 611,
                  "playerId": 50097,
                  "player": "M. Yandas",
                  "type": "Missing Fixture",
                  "reason": "Off the roster"
                },
                {
                  "fixtureId": 1635659,
                  "teamId": 497,
                  "playerId": 626686,
                  "player": "M. Bah",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1635659,
                  "teamId": 497,
                  "playerId": 782,
                  "player": "L. Pellegrini",
                  "type": "Missing Fixture",
                  "reason": "Thigh Injury"
                }
              ],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1635697,
              "kickoff": "2026-09-11T04:00:00+09:00",
              "status": "NS",
              "homeTeamId": 33,
              "homeTeam": "Manchester United",
              "awayTeamId": 13976,
              "awayTeam": "Sabah FA",
              "injuriesChecked": true,
              "injuries": [
                {
                  "fixtureId": 1635697,
                  "teamId": 33,
                  "playerId": 356041,
                  "player": "C. Baleba",
                  "type": "Missing Fixture",
                  "reason": "Ankle Injury"
                },
                {
                  "fixtureId": 1635697,
                  "teamId": 33,
                  "playerId": 157997,
                  "player": "A. Diallo",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1635697,
                  "teamId": 33,
                  "playerId": 51494,
                  "player": "M. Ugarte",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1635697,
                  "teamId": 33,
                  "playerId": 532,
                  "player": "M. de Ligt",
                  "type": "Missing Fixture",
                  "reason": "Back Injury"
                },
                {
                  "fixtureId": 1635697,
                  "teamId": 33,
                  "playerId": 2931,
                  "player": "T. Heaton",
                  "type": "Questionable",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1635697,
                  "teamId": 13976,
                  "playerId": 348230,
                  "player": "K. Aliyev",
                  "type": "Missing Fixture",
                  "reason": "Tendon Injury"
                }
              ],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1635632,
              "kickoff": "2026-09-11T04:00:00+09:00",
              "status": "NS",
              "homeTeamId": 157,
              "homeTeam": "Bayern München",
              "awayTeamId": 327,
              "awayTeam": "Bodo/Glimt",
              "injuriesChecked": true,
              "injuries": [
                {
                  "fixtureId": 1635632,
                  "teamId": 157,
                  "playerId": 330612,
                  "player": "T. Buchmann",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1635632,
                  "teamId": 157,
                  "playerId": 510,
                  "player": "S. Gnabry",
                  "type": "Missing Fixture",
                  "reason": "Muscle Injury"
                },
                {
                  "fixtureId": 1635632,
                  "teamId": 327,
                  "playerId": 31541,
                  "player": "H. Aleesami",
                  "type": "Missing Fixture",
                  "reason": "Leg Injury"
                },
                {
                  "fixtureId": 1635632,
                  "teamId": 327,
                  "playerId": 39065,
                  "player": "H. Evjen",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1635632,
                  "teamId": 327,
                  "playerId": 39352,
                  "player": "J. Gundersen",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1635632,
                  "teamId": 327,
                  "playerId": 266663,
                  "player": "M. Riisnaes",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1635632,
                  "teamId": 327,
                  "playerId": 407659,
                  "player": "I. Sjong",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1635632,
                  "teamId": 327,
                  "playerId": 39360,
                  "player": "A. Mikkelsen",
                  "type": "Questionable",
                  "reason": "Groin Injury"
                }
              ],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1635729,
              "kickoff": "2026-09-11T04:00:00+09:00",
              "status": "NS",
              "homeTeamId": 560,
              "homeTeam": "Slavia Praha",
              "awayTeamId": 116,
              "awayTeam": "Lens",
              "injuriesChecked": true,
              "injuries": [
                {
                  "fixtureId": 1635729,
                  "teamId": 560,
                  "playerId": 1227,
                  "player": "O. Kolar",
                  "type": "Missing Fixture",
                  "reason": "Off the roster"
                },
                {
                  "fixtureId": 1635729,
                  "teamId": 560,
                  "playerId": 1174,
                  "player": "I. Ogbu",
                  "type": "Missing Fixture",
                  "reason": "Achilles Tendon Injury"
                },
                {
                  "fixtureId": 1635729,
                  "teamId": 560,
                  "playerId": 66353,
                  "player": "L. Provod",
                  "type": "Missing Fixture",
                  "reason": "Ankle Injury"
                },
                {
                  "fixtureId": 1635729,
                  "teamId": 560,
                  "playerId": 2252,
                  "player": "T. Holes",
                  "type": "Questionable",
                  "reason": "Health problems"
                },
                {
                  "fixtureId": 1635729,
                  "teamId": 560,
                  "playerId": 551776,
                  "player": "M. Suleiman",
                  "type": "Questionable",
                  "reason": "Health problems"
                },
                {
                  "fixtureId": 1635729,
                  "teamId": 560,
                  "playerId": 128772,
                  "player": "D. Zima",
                  "type": "Questionable",
                  "reason": "Concussion"
                },
                {
                  "fixtureId": 1635729,
                  "teamId": 116,
                  "playerId": 44594,
                  "player": "S. Abdulhamid",
                  "type": "Missing Fixture",
                  "reason": "Contusion"
                },
                {
                  "fixtureId": 1635729,
                  "teamId": 116,
                  "playerId": 322984,
                  "player": "S. Baidoo",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1635729,
                  "teamId": 116,
                  "playerId": 237191,
                  "player": "J. Chavez",
                  "type": "Missing Fixture",
                  "reason": "Thigh Injury"
                },
                {
                  "fixtureId": 1635729,
                  "teamId": 116,
                  "playerId": 671021,
                  "player": "M. Diarra",
                  "type": "Missing Fixture",
                  "reason": "Off the roster"
                },
                {
                  "fixtureId": 1635729,
                  "teamId": 116,
                  "playerId": 497661,
                  "player": "I. Jourdren",
                  "type": "Missing Fixture",
                  "reason": "Off the roster"
                },
                {
                  "fixtureId": 1635729,
                  "teamId": 116,
                  "playerId": 669863,
                  "player": "M. Mesloub",
                  "type": "Missing Fixture",
                  "reason": "Off the roster"
                },
                {
                  "fixtureId": 1635729,
                  "teamId": 116,
                  "playerId": 178708,
                  "player": "M. Nawrocki",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1635729,
                  "teamId": 116,
                  "playerId": 327599,
                  "player": "Y. Titraoui",
                  "type": "Questionable",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1635729,
                  "teamId": 116,
                  "playerId": 20525,
                  "player": "M. Udol",
                  "type": "Questionable",
                  "reason": "Injury"
                }
              ],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1635648,
              "kickoff": "2026-09-11T04:00:00+09:00",
              "status": "NS",
              "homeTeamId": 895,
              "homeTeam": "Como",
              "awayTeamId": 173,
              "awayTeam": "RB Leipzig",
              "injuriesChecked": true,
              "injuries": [
                {
                  "fixtureId": 1635648,
                  "teamId": 895,
                  "playerId": 354533,
                  "player": "J. Addai",
                  "type": "Missing Fixture",
                  "reason": "Achilles Tendon Injury"
                },
                {
                  "fixtureId": 1635648,
                  "teamId": 895,
                  "playerId": 659,
                  "player": "M. Caqueret",
                  "type": "Missing Fixture",
                  "reason": "Off the roster"
                },
                {
                  "fixtureId": 1635648,
                  "teamId": 895,
                  "playerId": 31073,
                  "player": "E. Goldaniga",
                  "type": "Missing Fixture",
                  "reason": "Off the roster"
                },
                {
                  "fixtureId": 1635648,
                  "teamId": 895,
                  "playerId": 288112,
                  "player": "W. Kambwala",
                  "type": "Missing Fixture",
                  "reason": "Off the roster"
                },
                {
                  "fixtureId": 1635648,
                  "teamId": 895,
                  "playerId": 459029,
                  "player": "A. Lahdo",
                  "type": "Missing Fixture",
                  "reason": "Off the roster"
                },
                {
                  "fixtureId": 1635648,
                  "teamId": 895,
                  "playerId": 31719,
                  "player": "M. Vigorito",
                  "type": "Missing Fixture",
                  "reason": "Off the roster"
                },
                {
                  "fixtureId": 1635648,
                  "teamId": 173,
                  "playerId": 715,
                  "player": "C. Baumgartner",
                  "type": "Missing Fixture",
                  "reason": "Thigh Injury"
                },
                {
                  "fixtureId": 1635648,
                  "teamId": 173,
                  "playerId": 203007,
                  "player": "R. Reitz",
                  "type": "Missing Fixture",
                  "reason": "Muscle Injury"
                },
                {
                  "fixtureId": 1635648,
                  "teamId": 173,
                  "playerId": 326102,
                  "player": "Romulo Cardoso",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1635648,
                  "teamId": 173,
                  "playerId": 371025,
                  "player": "S. Sani",
                  "type": "Missing Fixture",
                  "reason": "Off the roster"
                },
                {
                  "fixtureId": 1635648,
                  "teamId": 173,
                  "playerId": 24814,
                  "player": "L. Zingerle",
                  "type": "Missing Fixture",
                  "reason": "Off the roster"
                },
                {
                  "fixtureId": 1635648,
                  "teamId": 173,
                  "playerId": 469695,
                  "player": "V. Gebel",
                  "type": "Questionable",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1635648,
                  "teamId": 173,
                  "playerId": 328225,
                  "player": "B. Gruda",
                  "type": "Questionable",
                  "reason": "Ankle Injury"
                },
                {
                  "fixtureId": 1635648,
                  "teamId": 173,
                  "playerId": 162761,
                  "player": "C. Lukeba",
                  "type": "Questionable",
                  "reason": "Muscle Injury"
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
