(function attachTeamContextPack(root, factory) {
  const pack = factory();
  if (typeof module !== "undefined" && module.exports) module.exports = pack;
  if (root) root.ODDS_ARCHIVE_TEAM_CONTEXT_PACK = pack;
})(typeof window !== "undefined" ? window : globalThis, function createTeamContextPack() {
  return {
  "version": "team-context-v3",
  "date": "2026-09-15",
  "updatedAt": "2026-09-14T15:01:25.628Z",
  "collection": {
    "dates": [
      "2026-09-15",
      "2026-09-16",
      "2026-09-17",
      "2026-09-18"
    ],
    "requestGroups": 15,
    "skippedGroups": 89,
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
          "teamId": 42,
          "team": "Arsenal",
          "rank": 1,
          "points": 12,
          "goalsDiff": 7,
          "form": "WWWW",
          "all": {
            "played": 4,
            "wins": 4,
            "draws": 0,
            "losses": 0,
            "goalsFor": 8,
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
            "played": 2,
            "wins": 2,
            "draws": 0,
            "losses": 0,
            "goalsFor": 3,
            "goalsAgainst": 0
          }
        },
        {
          "teamId": 50,
          "team": "Manchester City",
          "rank": 2,
          "points": 12,
          "goalsDiff": 6,
          "form": "WWWW",
          "all": {
            "played": 4,
            "wins": 4,
            "draws": 0,
            "losses": 0,
            "goalsFor": 8,
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
            "played": 2,
            "wins": 2,
            "draws": 0,
            "losses": 0,
            "goalsFor": 5,
            "goalsAgainst": 1
          }
        },
        {
          "teamId": 64,
          "team": "Hull City",
          "rank": 3,
          "points": 8,
          "goalsDiff": 3,
          "form": "DDWW",
          "all": {
            "played": 4,
            "wins": 2,
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
          "teamId": 51,
          "team": "Brighton",
          "rank": 4,
          "points": 7,
          "goalsDiff": 8,
          "form": "WDLW",
          "all": {
            "played": 4,
            "wins": 2,
            "draws": 1,
            "losses": 1,
            "goalsFor": 13,
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
            "played": 2,
            "wins": 1,
            "draws": 0,
            "losses": 1,
            "goalsFor": 8,
            "goalsAgainst": 4
          }
        },
        {
          "teamId": 49,
          "team": "Chelsea",
          "rank": 5,
          "points": 7,
          "goalsDiff": 1,
          "form": "DLWW",
          "all": {
            "played": 4,
            "wins": 2,
            "draws": 1,
            "losses": 1,
            "goalsFor": 10,
            "goalsAgainst": 9
          },
          "home": {
            "played": 2,
            "wins": 1,
            "draws": 1,
            "losses": 0,
            "goalsFor": 6,
            "goalsAgainst": 5
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
          "rank": 6,
          "points": 6,
          "goalsDiff": 3,
          "form": "DDDW",
          "all": {
            "played": 4,
            "wins": 1,
            "draws": 3,
            "losses": 0,
            "goalsFor": 7,
            "goalsAgainst": 4
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
            "played": 2,
            "wins": 0,
            "draws": 2,
            "losses": 0,
            "goalsFor": 3,
            "goalsAgainst": 3
          }
        },
        {
          "teamId": 40,
          "team": "Liverpool",
          "rank": 7,
          "points": 6,
          "goalsDiff": 2,
          "form": "DWDD",
          "all": {
            "played": 4,
            "wins": 1,
            "draws": 3,
            "losses": 0,
            "goalsFor": 6,
            "goalsAgainst": 4
          },
          "home": {
            "played": 2,
            "wins": 0,
            "draws": 2,
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
          "teamId": 45,
          "team": "Everton",
          "rank": 8,
          "points": 6,
          "goalsDiff": 2,
          "form": "DDDW",
          "all": {
            "played": 4,
            "wins": 1,
            "draws": 3,
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
            "played": 2,
            "wins": 0,
            "draws": 2,
            "losses": 0,
            "goalsFor": 1,
            "goalsAgainst": 1
          }
        },
        {
          "teamId": 57,
          "team": "Ipswich",
          "rank": 9,
          "points": 6,
          "goalsDiff": -3,
          "form": "WLLW",
          "all": {
            "played": 4,
            "wins": 2,
            "draws": 0,
            "losses": 2,
            "goalsFor": 7,
            "goalsAgainst": 10
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
            "played": 2,
            "wins": 1,
            "draws": 0,
            "losses": 1,
            "goalsFor": 5,
            "goalsAgainst": 7
          }
        },
        {
          "teamId": 34,
          "team": "Newcastle",
          "rank": 10,
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
          "rank": 11,
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
          "teamId": 65,
          "team": "Nottingham Forest",
          "rank": 12,
          "points": 5,
          "goalsDiff": 0,
          "form": "WDDL",
          "all": {
            "played": 4,
            "wins": 1,
            "draws": 2,
            "losses": 1,
            "goalsFor": 4,
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
            "played": 2,
            "wins": 1,
            "draws": 1,
            "losses": 0,
            "goalsFor": 4,
            "goalsAgainst": 3
          }
        },
        {
          "teamId": 33,
          "team": "Manchester United",
          "rank": 13,
          "points": 4,
          "goalsDiff": 0,
          "form": "LDWL",
          "all": {
            "played": 4,
            "wins": 1,
            "draws": 1,
            "losses": 2,
            "goalsFor": 7,
            "goalsAgainst": 7
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
          "rank": 14,
          "points": 4,
          "goalsDiff": -2,
          "form": "LDWL",
          "all": {
            "played": 4,
            "wins": 1,
            "draws": 1,
            "losses": 2,
            "goalsFor": 3,
            "goalsAgainst": 5
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
            "draws": 1,
            "losses": 1,
            "goalsFor": 2,
            "goalsAgainst": 3
          }
        },
        {
          "teamId": 35,
          "team": "Bournemouth",
          "rank": 15,
          "points": 3,
          "goalsDiff": -1,
          "form": "DDDL",
          "all": {
            "played": 4,
            "wins": 0,
            "draws": 3,
            "losses": 1,
            "goalsFor": 6,
            "goalsAgainst": 7
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
            "wins": 0,
            "draws": 1,
            "losses": 1,
            "goalsFor": 3,
            "goalsAgainst": 4
          }
        },
        {
          "teamId": 52,
          "team": "Crystal Palace",
          "rank": 16,
          "points": 3,
          "goalsDiff": -5,
          "form": "LWLL",
          "all": {
            "played": 4,
            "wins": 1,
            "draws": 0,
            "losses": 3,
            "goalsFor": 6,
            "goalsAgainst": 11
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
            "played": 2,
            "wins": 1,
            "draws": 0,
            "losses": 1,
            "goalsFor": 3,
            "goalsAgainst": 4
          }
        },
        {
          "teamId": 47,
          "team": "Tottenham",
          "rank": 17,
          "points": 2,
          "goalsDiff": -5,
          "form": "DDLL",
          "all": {
            "played": 4,
            "wins": 0,
            "draws": 2,
            "losses": 2,
            "goalsFor": 0,
            "goalsAgainst": 5
          },
          "home": {
            "played": 2,
            "wins": 0,
            "draws": 1,
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
          "rank": 18,
          "points": 1,
          "goalsDiff": -3,
          "form": "DLLL",
          "all": {
            "played": 4,
            "wins": 0,
            "draws": 1,
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
            "played": 2,
            "wins": 0,
            "draws": 1,
            "losses": 1,
            "goalsFor": 0,
            "goalsAgainst": 1
          }
        },
        {
          "teamId": 66,
          "team": "Aston Villa",
          "rank": 19,
          "points": 1,
          "goalsDiff": -6,
          "form": "LDLL",
          "all": {
            "played": 4,
            "wins": 0,
            "draws": 1,
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
            "goalsAgainst": 3
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
          "teamId": 1346,
          "team": "Coventry",
          "rank": 20,
          "points": 0,
          "goalsDiff": -10,
          "form": "LLLL",
          "all": {
            "played": 4,
            "wins": 0,
            "draws": 0,
            "losses": 4,
            "goalsFor": 0,
            "goalsAgainst": 10
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
          "teamId": 63,
          "team": "Leeds",
          "form": "WDD",
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
          "teamId": 34,
          "team": "Newcastle",
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
        }
      ],
      "fixtures": [
        {
          "fixtureId": 1557402,
          "kickoff": "2026-09-15T04:00:00+09:00",
          "status": "NS",
          "homeTeamId": 63,
          "homeTeam": "Leeds",
          "awayTeamId": 34,
          "awayTeam": "Newcastle",
          "injuriesChecked": true,
          "injuries": [
            {
              "fixtureId": 1557402,
              "teamId": 63,
              "playerId": 313059,
              "player": "M. Joseph",
              "type": "Missing Fixture",
              "reason": "Knee Injury"
            },
            {
              "fixtureId": 1557402,
              "teamId": 63,
              "playerId": 19321,
              "player": "J. Rodon",
              "type": "Missing Fixture",
              "reason": "Muscle Injury"
            },
            {
              "fixtureId": 1557402,
              "teamId": 34,
              "playerId": 18961,
              "player": "D. Burn",
              "type": "Missing Fixture",
              "reason": "Ankle Injury"
            },
            {
              "fixtureId": 1557402,
              "teamId": 34,
              "playerId": 723,
              "player": "Joelinton",
              "type": "Missing Fixture",
              "reason": "Thigh Injury"
            },
            {
              "fixtureId": 1557402,
              "teamId": 34,
              "playerId": 315237,
              "player": "W. Osula",
              "type": "Missing Fixture",
              "reason": "Injury"
            },
            {
              "fixtureId": 1557402,
              "teamId": 34,
              "playerId": 329640,
              "player": "E. Jaouen",
              "type": "Questionable",
              "reason": "Ankle Injury"
            }
          ],
          "lineupsChecked": true,
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
          "points": 15,
          "goalsDiff": 17,
          "form": "WWWWW",
          "all": {
            "played": 5,
            "wins": 5,
            "draws": 0,
            "losses": 0,
            "goalsFor": 21,
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
            "played": 3,
            "wins": 3,
            "draws": 0,
            "losses": 0,
            "goalsFor": 14,
            "goalsAgainst": 2
          }
        },
        {
          "teamId": 541,
          "team": "Real Madrid",
          "rank": 2,
          "points": 12,
          "goalsDiff": 10,
          "form": "WLWWW",
          "all": {
            "played": 5,
            "wins": 4,
            "draws": 0,
            "losses": 1,
            "goalsFor": 14,
            "goalsAgainst": 4
          },
          "home": {
            "played": 3,
            "wins": 3,
            "draws": 0,
            "losses": 0,
            "goalsFor": 12,
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
          "teamId": 542,
          "team": "Alaves",
          "rank": 3,
          "points": 10,
          "goalsDiff": 6,
          "form": "LWWDW",
          "all": {
            "played": 5,
            "wins": 3,
            "draws": 1,
            "losses": 1,
            "goalsFor": 11,
            "goalsAgainst": 5
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
            "played": 2,
            "wins": 0,
            "draws": 1,
            "losses": 1,
            "goalsFor": 2,
            "goalsAgainst": 3
          }
        },
        {
          "teamId": 530,
          "team": "Atletico Madrid",
          "rank": 4,
          "points": 10,
          "goalsDiff": 4,
          "form": "WLWDW",
          "all": {
            "played": 5,
            "wins": 3,
            "draws": 1,
            "losses": 1,
            "goalsFor": 10,
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
            "played": 3,
            "wins": 2,
            "draws": 0,
            "losses": 1,
            "goalsFor": 6,
            "goalsAgainst": 4
          }
        },
        {
          "teamId": 536,
          "team": "Sevilla",
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
            "draws": 0,
            "losses": 1,
            "goalsFor": 4,
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
          "teamId": 544,
          "team": "Deportivo La Coruna",
          "rank": 6,
          "points": 9,
          "goalsDiff": 3,
          "form": "DWWDD",
          "all": {
            "played": 5,
            "wins": 2,
            "draws": 3,
            "losses": 0,
            "goalsFor": 9,
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
            "played": 3,
            "wins": 1,
            "draws": 2,
            "losses": 0,
            "goalsFor": 5,
            "goalsAgainst": 4
          }
        },
        {
          "teamId": 543,
          "team": "Real Betis",
          "rank": 7,
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
          "teamId": 540,
          "team": "Espanyol",
          "rank": 8,
          "points": 7,
          "goalsDiff": 3,
          "form": "WDLLW",
          "all": {
            "played": 5,
            "wins": 2,
            "draws": 1,
            "losses": 2,
            "goalsFor": 8,
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
            "played": 2,
            "wins": 1,
            "draws": 0,
            "losses": 1,
            "goalsFor": 3,
            "goalsAgainst": 2
          }
        },
        {
          "teamId": 531,
          "team": "Athletic Club",
          "rank": 9,
          "points": 7,
          "goalsDiff": 1,
          "form": "DWWLL",
          "all": {
            "played": 5,
            "wins": 2,
            "draws": 1,
            "losses": 2,
            "goalsFor": 7,
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
            "played": 2,
            "wins": 1,
            "draws": 0,
            "losses": 1,
            "goalsFor": 2,
            "goalsAgainst": 2
          }
        },
        {
          "teamId": 4665,
          "team": "Racing Santander",
          "rank": 10,
          "points": 7,
          "goalsDiff": 0,
          "form": "WLWLD",
          "all": {
            "played": 5,
            "wins": 2,
            "draws": 1,
            "losses": 2,
            "goalsFor": 9,
            "goalsAgainst": 9
          },
          "home": {
            "played": 3,
            "wins": 2,
            "draws": 1,
            "losses": 0,
            "goalsFor": 7,
            "goalsAgainst": 5
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
          "teamId": 727,
          "team": "Osasuna",
          "rank": 11,
          "points": 7,
          "goalsDiff": -3,
          "form": "LLWWD",
          "all": {
            "played": 5,
            "wins": 2,
            "draws": 1,
            "losses": 2,
            "goalsFor": 5,
            "goalsAgainst": 8
          },
          "home": {
            "played": 3,
            "wins": 1,
            "draws": 1,
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
            "goalsAgainst": 6
          }
        },
        {
          "teamId": 548,
          "team": "Real Sociedad",
          "rank": 12,
          "points": 7,
          "goalsDiff": -5,
          "form": "LWDWL",
          "all": {
            "played": 6,
            "wins": 2,
            "draws": 1,
            "losses": 3,
            "goalsFor": 6,
            "goalsAgainst": 11
          },
          "home": {
            "played": 3,
            "wins": 1,
            "draws": 1,
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
          "teamId": 539,
          "team": "Levante",
          "rank": 13,
          "points": 5,
          "goalsDiff": -2,
          "form": "LDWDL",
          "all": {
            "played": 5,
            "wins": 1,
            "draws": 2,
            "losses": 2,
            "goalsFor": 7,
            "goalsAgainst": 9
          },
          "home": {
            "played": 2,
            "wins": 1,
            "draws": 0,
            "losses": 1,
            "goalsFor": 7,
            "goalsAgainst": 6
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
          "teamId": 546,
          "team": "Getafe",
          "rank": 14,
          "points": 5,
          "goalsDiff": -3,
          "form": "DDLWL",
          "all": {
            "played": 5,
            "wins": 1,
            "draws": 2,
            "losses": 2,
            "goalsFor": 3,
            "goalsAgainst": 6
          },
          "home": {
            "played": 3,
            "wins": 1,
            "draws": 2,
            "losses": 0,
            "goalsFor": 3,
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
          "teamId": 538,
          "team": "Celta Vigo",
          "rank": 15,
          "points": 4,
          "goalsDiff": -3,
          "form": "DDDLL",
          "all": {
            "played": 6,
            "wins": 0,
            "draws": 4,
            "losses": 2,
            "goalsFor": 3,
            "goalsAgainst": 6
          },
          "home": {
            "played": 3,
            "wins": 0,
            "draws": 1,
            "losses": 2,
            "goalsFor": 2,
            "goalsAgainst": 5
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
          "teamId": 728,
          "team": "Rayo Vallecano",
          "rank": 16,
          "points": 4,
          "goalsDiff": -6,
          "form": "LWLDL",
          "all": {
            "played": 5,
            "wins": 1,
            "draws": 1,
            "losses": 3,
            "goalsFor": 8,
            "goalsAgainst": 14
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
            "played": 3,
            "wins": 0,
            "draws": 0,
            "losses": 3,
            "goalsFor": 4,
            "goalsAgainst": 11
          }
        },
        {
          "teamId": 535,
          "team": "Malaga",
          "rank": 17,
          "points": 3,
          "goalsDiff": -6,
          "form": "DDLDL",
          "all": {
            "played": 5,
            "wins": 0,
            "draws": 3,
            "losses": 2,
            "goalsFor": 2,
            "goalsAgainst": 8
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
            "played": 3,
            "wins": 0,
            "draws": 1,
            "losses": 2,
            "goalsFor": 1,
            "goalsAgainst": 7
          }
        },
        {
          "teamId": 533,
          "team": "Villarreal",
          "rank": 18,
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
          "teamId": 797,
          "team": "Elche",
          "rank": 19,
          "points": 2,
          "goalsDiff": -7,
          "form": "DLLLD",
          "all": {
            "played": 5,
            "wins": 0,
            "draws": 2,
            "losses": 3,
            "goalsFor": 6,
            "goalsAgainst": 13
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
            "played": 3,
            "wins": 0,
            "draws": 2,
            "losses": 1,
            "goalsFor": 4,
            "goalsAgainst": 5
          }
        },
        {
          "teamId": 532,
          "team": "Valencia",
          "rank": 20,
          "points": 1,
          "goalsDiff": -9,
          "form": "LLLLD",
          "all": {
            "played": 5,
            "wins": 0,
            "draws": 1,
            "losses": 4,
            "goalsFor": 1,
            "goalsAgainst": 10
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
            "played": 2,
            "wins": 0,
            "draws": 0,
            "losses": 2,
            "goalsFor": 1,
            "goalsAgainst": 4
          }
        }
      ],
      "teams": [
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
          "teamId": 543,
          "team": "Real Betis",
          "form": "WWLW",
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
        }
      ],
      "fixtures": [
        {
          "fixtureId": 1570382,
          "kickoff": "2026-09-15T04:00:00+09:00",
          "status": "NS",
          "homeTeamId": 533,
          "homeTeam": "Villarreal",
          "awayTeamId": 543,
          "awayTeam": "Real Betis",
          "injuriesChecked": true,
          "injuries": [
            {
              "fixtureId": 1570382,
              "teamId": 533,
              "playerId": 166,
              "player": "J. Foyth",
              "type": "Missing Fixture",
              "reason": "Achilles Tendon Injury"
            },
            {
              "fixtureId": 1570382,
              "teamId": 543,
              "playerId": 47302,
              "player": "D. Llorente",
              "type": "Missing Fixture",
              "reason": "Broken nose"
            },
            {
              "fixtureId": 1570382,
              "teamId": 543,
              "playerId": 544644,
              "player": "J. Morante",
              "type": "Missing Fixture",
              "reason": "Coach's decision"
            },
            {
              "fixtureId": 1570382,
              "teamId": 543,
              "playerId": 47119,
              "player": "A. Ruibal",
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
          "teamId": 487,
          "team": "Lazio",
          "rank": 1,
          "points": 10,
          "goalsDiff": 3,
          "form": "DWWW",
          "all": {
            "played": 4,
            "wins": 3,
            "draws": 1,
            "losses": 0,
            "goalsFor": 6,
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
            "wins": 2,
            "draws": 0,
            "losses": 0,
            "goalsFor": 3,
            "goalsAgainst": 1
          }
        },
        {
          "teamId": 497,
          "team": "AS Roma",
          "rank": 2,
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
          "rank": 3,
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
          "teamId": 490,
          "team": "Cagliari",
          "rank": 4,
          "points": 9,
          "goalsDiff": 2,
          "form": "WWLW",
          "all": {
            "played": 4,
            "wins": 3,
            "draws": 0,
            "losses": 1,
            "goalsFor": 4,
            "goalsAgainst": 2
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
            "wins": 2,
            "draws": 0,
            "losses": 0,
            "goalsFor": 3,
            "goalsAgainst": 1
          }
        },
        {
          "teamId": 489,
          "team": "AC Milan",
          "rank": 5,
          "points": 8,
          "goalsDiff": 3,
          "form": "DDWW",
          "all": {
            "played": 4,
            "wins": 2,
            "draws": 2,
            "losses": 0,
            "goalsFor": 7,
            "goalsAgainst": 4
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
            "played": 3,
            "wins": 1,
            "draws": 2,
            "losses": 0,
            "goalsFor": 5,
            "goalsAgainst": 4
          }
        },
        {
          "teamId": 895,
          "team": "Como",
          "rank": 6,
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
          "teamId": 512,
          "team": "Frosinone",
          "rank": 7,
          "points": 7,
          "goalsDiff": 3,
          "form": "DWWL",
          "all": {
            "played": 4,
            "wins": 2,
            "draws": 1,
            "losses": 1,
            "goalsFor": 7,
            "goalsAgainst": 4
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
            "goalsFor": 4,
            "goalsAgainst": 1
          }
        },
        {
          "teamId": 496,
          "team": "Juventus",
          "rank": 8,
          "points": 7,
          "goalsDiff": 2,
          "form": "LDWW",
          "all": {
            "played": 4,
            "wins": 2,
            "draws": 1,
            "losses": 1,
            "goalsFor": 6,
            "goalsAgainst": 4
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
            "played": 2,
            "wins": 1,
            "draws": 0,
            "losses": 1,
            "goalsFor": 3,
            "goalsAgainst": 3
          }
        },
        {
          "teamId": 488,
          "team": "Sassuolo",
          "rank": 9,
          "points": 7,
          "goalsDiff": 1,
          "form": "WDWL",
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
            "wins": 2,
            "draws": 0,
            "losses": 0,
            "goalsFor": 5,
            "goalsAgainst": 3
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
          "teamId": 492,
          "team": "Napoli",
          "rank": 10,
          "points": 6,
          "goalsDiff": 1,
          "form": "WLLW",
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
            "goalsFor": 2,
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
          "teamId": 499,
          "team": "Atalanta",
          "rank": 11,
          "points": 6,
          "goalsDiff": 0,
          "form": "LLWW",
          "all": {
            "played": 4,
            "wins": 2,
            "draws": 0,
            "losses": 2,
            "goalsFor": 5,
            "goalsAgainst": 5
          },
          "home": {
            "played": 3,
            "wins": 2,
            "draws": 0,
            "losses": 1,
            "goalsFor": 4,
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
          "teamId": 867,
          "team": "Lecce",
          "rank": 12,
          "points": 6,
          "goalsDiff": -2,
          "form": "WLLW",
          "all": {
            "played": 4,
            "wins": 2,
            "draws": 0,
            "losses": 2,
            "goalsFor": 5,
            "goalsAgainst": 7
          },
          "home": {
            "played": 2,
            "wins": 1,
            "draws": 0,
            "losses": 1,
            "goalsFor": 3,
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
          "teamId": 494,
          "team": "Udinese",
          "rank": 13,
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
          "teamId": 502,
          "team": "Fiorentina",
          "rank": 15,
          "points": 3,
          "goalsDiff": -6,
          "form": "WLLL",
          "all": {
            "played": 4,
            "wins": 1,
            "draws": 0,
            "losses": 3,
            "goalsFor": 5,
            "goalsAgainst": 11
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
            "wins": 1,
            "draws": 0,
            "losses": 1,
            "goalsFor": 4,
            "goalsAgainst": 6
          }
        },
        {
          "teamId": 500,
          "team": "Bologna",
          "rank": 16,
          "points": 1,
          "goalsDiff": -3,
          "form": "LDLL",
          "all": {
            "played": 4,
            "wins": 0,
            "draws": 1,
            "losses": 3,
            "goalsFor": 2,
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
            "wins": 0,
            "draws": 0,
            "losses": 2,
            "goalsFor": 0,
            "goalsAgainst": 2
          }
        },
        {
          "teamId": 523,
          "team": "Parma",
          "rank": 17,
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
          "rank": 18,
          "points": 1,
          "goalsDiff": -5,
          "form": "LDLL",
          "all": {
            "played": 4,
            "wins": 0,
            "draws": 1,
            "losses": 3,
            "goalsFor": 6,
            "goalsAgainst": 11
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
            "draws": 1,
            "losses": 2,
            "goalsFor": 4,
            "goalsAgainst": 8
          }
        },
        {
          "teamId": 495,
          "team": "Genoa",
          "rank": 19,
          "points": 1,
          "goalsDiff": -6,
          "form": "DLLL",
          "all": {
            "played": 4,
            "wins": 0,
            "draws": 1,
            "losses": 3,
            "goalsFor": 2,
            "goalsAgainst": 8
          },
          "home": {
            "played": 3,
            "wins": 0,
            "draws": 1,
            "losses": 2,
            "goalsFor": 2,
            "goalsAgainst": 7
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
          "teamId": 517,
          "team": "Venezia",
          "rank": 20,
          "points": 0,
          "goalsDiff": -7,
          "form": "LLLL",
          "all": {
            "played": 4,
            "wins": 0,
            "draws": 0,
            "losses": 4,
            "goalsFor": 4,
            "goalsAgainst": 11
          },
          "home": {
            "played": 2,
            "wins": 0,
            "draws": 0,
            "losses": 2,
            "goalsFor": 2,
            "goalsAgainst": 6
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
          "teamId": 895,
          "team": "Como",
          "form": "DWW",
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
          "teamId": 523,
          "team": "Parma",
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
          "teamId": 503,
          "team": "Torino",
          "form": "LLW",
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
        }
      ],
      "fixtures": [
        {
          "fixtureId": 1550118,
          "kickoff": "2026-09-15T01:30:00+09:00",
          "status": "NS",
          "homeTeamId": 895,
          "homeTeam": "Como",
          "awayTeamId": 523,
          "awayTeam": "Parma",
          "injuriesChecked": true,
          "injuries": [
            {
              "fixtureId": 1550118,
              "teamId": 895,
              "playerId": 354533,
              "player": "J. Addai",
              "type": "Missing Fixture",
              "reason": "Achilles Tendon Injury"
            },
            {
              "fixtureId": 1550118,
              "teamId": 523,
              "playerId": 881,
              "player": "H. Nicolussi Caviglia",
              "type": "Missing Fixture",
              "reason": "Groin Injury"
            }
          ],
          "lineupsChecked": true,
          "lineups": []
        },
        {
          "fixtureId": 1550125,
          "kickoff": "2026-09-15T01:30:00+09:00",
          "status": "NS",
          "homeTeamId": 503,
          "homeTeam": "Torino",
          "awayTeamId": 497,
          "awayTeam": "AS Roma",
          "injuriesChecked": true,
          "injuries": [
            {
              "fixtureId": 1550125,
              "teamId": 503,
              "playerId": 19524,
              "player": "C. Adams",
              "type": "Missing Fixture",
              "reason": "Muscle Injury"
            },
            {
              "fixtureId": 1550125,
              "teamId": 503,
              "playerId": 270507,
              "player": "C. Casadei",
              "type": "Missing Fixture",
              "reason": "Rest"
            },
            {
              "fixtureId": 1550125,
              "teamId": 503,
              "playerId": 56266,
              "player": "F. Israel",
              "type": "Missing Fixture",
              "reason": "Shoulder Injury"
            },
            {
              "fixtureId": 1550125,
              "teamId": 503,
              "playerId": 123,
              "player": "P. Pellegri",
              "type": "Missing Fixture",
              "reason": "Knee Injury"
            },
            {
              "fixtureId": 1550125,
              "teamId": 503,
              "playerId": 30414,
              "player": "G. Simeone",
              "type": "Questionable",
              "reason": "Back Injury"
            },
            {
              "fixtureId": 1550125,
              "teamId": 497,
              "playerId": 626686,
              "player": "M. Bah",
              "type": "Missing Fixture",
              "reason": "Knee Injury"
            }
          ],
          "lineupsChecked": true,
          "lineups": []
        },
        {
          "fixtureId": 1550120,
          "kickoff": "2026-09-15T03:45:00+09:00",
          "status": "NS",
          "homeTeamId": 505,
          "homeTeam": "Inter",
          "awayTeamId": 494,
          "awayTeam": "Udinese",
          "injuriesChecked": true,
          "injuries": [
            {
              "fixtureId": 1550120,
              "teamId": 505,
              "playerId": 19235,
              "player": "D. Spence",
              "type": "Missing Fixture",
              "reason": "Injury"
            },
            {
              "fixtureId": 1550120,
              "teamId": 494,
              "playerId": 411171,
              "player": "J. Arizala",
              "type": "Missing Fixture",
              "reason": "Thigh Injury"
            },
            {
              "fixtureId": 1550120,
              "teamId": 494,
              "playerId": 422156,
              "player": "M. Palma",
              "type": "Missing Fixture",
              "reason": "Muscle Injury"
            },
            {
              "fixtureId": 1550120,
              "teamId": 494,
              "playerId": 1939,
              "player": "J. Piotrowski",
              "type": "Missing Fixture",
              "reason": "Heart Problems"
            },
            {
              "fixtureId": 1550120,
              "teamId": 494,
              "playerId": 656,
              "player": "O. Solet",
              "type": "Missing Fixture",
              "reason": "Injury"
            },
            {
              "fixtureId": 1550120,
              "teamId": 494,
              "playerId": 786,
              "player": "N. Zaniolo",
              "type": "Missing Fixture",
              "reason": "Thigh Injury"
            },
            {
              "fixtureId": 1550120,
              "teamId": 494,
              "playerId": 162907,
              "player": "A. Zanoli",
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
      "key": "PRIMEIRA_LIGA",
      "leagueId": 94,
      "season": "2026",
      "standings": [
        {
          "teamId": 212,
          "team": "FC Porto",
          "rank": 1,
          "points": 18,
          "goalsDiff": 13,
          "form": "WWWWW",
          "all": {
            "played": 6,
            "wins": 6,
            "draws": 0,
            "losses": 0,
            "goalsFor": 15,
            "goalsAgainst": 2
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
            "played": 3,
            "wins": 3,
            "draws": 0,
            "losses": 0,
            "goalsFor": 9,
            "goalsAgainst": 1
          }
        },
        {
          "teamId": 211,
          "team": "Benfica",
          "rank": 2,
          "points": 16,
          "goalsDiff": 17,
          "form": "WWWWW",
          "all": {
            "played": 6,
            "wins": 5,
            "draws": 1,
            "losses": 0,
            "goalsFor": 21,
            "goalsAgainst": 4
          },
          "home": {
            "played": 3,
            "wins": 2,
            "draws": 1,
            "losses": 0,
            "goalsFor": 7,
            "goalsAgainst": 4
          },
          "away": {
            "played": 3,
            "wins": 3,
            "draws": 0,
            "losses": 0,
            "goalsFor": 14,
            "goalsAgainst": 0
          }
        },
        {
          "teamId": 228,
          "team": "Sporting CP",
          "rank": 3,
          "points": 14,
          "goalsDiff": 9,
          "form": "DWWWW",
          "all": {
            "played": 6,
            "wins": 4,
            "draws": 2,
            "losses": 0,
            "goalsFor": 15,
            "goalsAgainst": 6
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
            "played": 3,
            "wins": 1,
            "draws": 2,
            "losses": 0,
            "goalsFor": 7,
            "goalsAgainst": 3
          }
        },
        {
          "teamId": 227,
          "team": "Santa Clara",
          "rank": 4,
          "points": 14,
          "goalsDiff": 7,
          "form": "WWDWW",
          "all": {
            "played": 6,
            "wins": 4,
            "draws": 2,
            "losses": 0,
            "goalsFor": 11,
            "goalsAgainst": 4
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
            "played": 3,
            "wins": 2,
            "draws": 1,
            "losses": 0,
            "goalsFor": 4,
            "goalsAgainst": 2
          }
        },
        {
          "teamId": 240,
          "team": "Arouca",
          "rank": 5,
          "points": 10,
          "goalsDiff": 3,
          "form": "LDWLW",
          "all": {
            "played": 6,
            "wins": 3,
            "draws": 1,
            "losses": 2,
            "goalsFor": 8,
            "goalsAgainst": 5
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
            "played": 3,
            "wins": 1,
            "draws": 1,
            "losses": 1,
            "goalsFor": 1,
            "goalsAgainst": 2
          }
        },
        {
          "teamId": 15130,
          "team": "Estrela",
          "rank": 6,
          "points": 9,
          "goalsDiff": 2,
          "form": "WDWDD",
          "all": {
            "played": 5,
            "wins": 2,
            "draws": 3,
            "losses": 0,
            "goalsFor": 11,
            "goalsAgainst": 9
          },
          "home": {
            "played": 3,
            "wins": 1,
            "draws": 2,
            "losses": 0,
            "goalsFor": 6,
            "goalsAgainst": 5
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
          "rank": 7,
          "points": 8,
          "goalsDiff": -2,
          "form": "WWLDL",
          "all": {
            "played": 6,
            "wins": 2,
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
            "goalsFor": 2,
            "goalsAgainst": 5
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
          "teamId": 217,
          "team": "SC Braga",
          "rank": 8,
          "points": 7,
          "goalsDiff": 1,
          "form": "LWWD",
          "all": {
            "played": 4,
            "wins": 2,
            "draws": 1,
            "losses": 1,
            "goalsFor": 6,
            "goalsAgainst": 5
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
            "goalsFor": 5,
            "goalsAgainst": 5
          }
        },
        {
          "teamId": 762,
          "team": "GIL Vicente",
          "rank": 9,
          "points": 7,
          "goalsDiff": 0,
          "form": "LLDWW",
          "all": {
            "played": 5,
            "wins": 2,
            "draws": 1,
            "losses": 2,
            "goalsFor": 4,
            "goalsAgainst": 4
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
            "played": 2,
            "wins": 0,
            "draws": 1,
            "losses": 1,
            "goalsFor": 1,
            "goalsAgainst": 3
          }
        },
        {
          "teamId": 214,
          "team": "Maritimo",
          "rank": 10,
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
          "teamId": 4724,
          "team": "Alverca",
          "rank": 11,
          "points": 5,
          "goalsDiff": -3,
          "form": "WLDLD",
          "all": {
            "played": 6,
            "wins": 1,
            "draws": 2,
            "losses": 3,
            "goalsFor": 8,
            "goalsAgainst": 11
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
            "played": 3,
            "wins": 1,
            "draws": 0,
            "losses": 2,
            "goalsFor": 4,
            "goalsAgainst": 6
          }
        },
        {
          "teamId": 242,
          "team": "Famalicao",
          "rank": 12,
          "points": 4,
          "goalsDiff": -2,
          "form": "DDDLL",
          "all": {
            "played": 6,
            "wins": 0,
            "draws": 4,
            "losses": 2,
            "goalsFor": 5,
            "goalsAgainst": 7
          },
          "home": {
            "played": 3,
            "wins": 0,
            "draws": 2,
            "losses": 1,
            "goalsFor": 2,
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
          "teamId": 224,
          "team": "Vitória SC",
          "rank": 13,
          "points": 4,
          "goalsDiff": -3,
          "form": "LDLWL",
          "all": {
            "played": 6,
            "wins": 1,
            "draws": 1,
            "losses": 4,
            "goalsFor": 4,
            "goalsAgainst": 7
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
            "played": 3,
            "wins": 0,
            "draws": 0,
            "losses": 3,
            "goalsFor": 3,
            "goalsAgainst": 6
          }
        },
        {
          "teamId": 225,
          "team": "Nacional",
          "rank": 14,
          "points": 4,
          "goalsDiff": -4,
          "form": "LLLLW",
          "all": {
            "played": 6,
            "wins": 1,
            "draws": 1,
            "losses": 4,
            "goalsFor": 7,
            "goalsAgainst": 11
          },
          "home": {
            "played": 3,
            "wins": 1,
            "draws": 0,
            "losses": 2,
            "goalsFor": 5,
            "goalsAgainst": 6
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
          "rank": 15,
          "points": 4,
          "goalsDiff": -8,
          "form": "LLWLD",
          "all": {
            "played": 5,
            "wins": 1,
            "draws": 1,
            "losses": 3,
            "goalsFor": 4,
            "goalsAgainst": 12
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
            "played": 3,
            "wins": 1,
            "draws": 0,
            "losses": 2,
            "goalsFor": 2,
            "goalsAgainst": 6
          }
        },
        {
          "teamId": 226,
          "team": "Rio Ave",
          "rank": 16,
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
          "rank": 17,
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
          "teamId": 4716,
          "team": "Casa Pia",
          "rank": 18,
          "points": 1,
          "goalsDiff": -14,
          "form": "LDLLL",
          "all": {
            "played": 6,
            "wins": 0,
            "draws": 1,
            "losses": 5,
            "goalsFor": 1,
            "goalsAgainst": 15
          },
          "home": {
            "played": 3,
            "wins": 0,
            "draws": 0,
            "losses": 3,
            "goalsFor": 1,
            "goalsAgainst": 12
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
          "teamId": 226,
          "team": "Rio Ave",
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
          "teamId": 15130,
          "team": "Estrela",
          "form": "DDWDW",
          "all": {
            "played": 5,
            "wins": 2,
            "draws": 3,
            "losses": 0,
            "goalsFor": 11,
            "goalsAgainst": 9
          },
          "home": {
            "played": 3,
            "wins": 1,
            "draws": 2,
            "losses": 0,
            "goalsFor": 6,
            "goalsAgainst": 5
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
          "teamId": 215,
          "team": "Moreirense",
          "form": "DLWLL",
          "all": {
            "played": 5,
            "wins": 1,
            "draws": 1,
            "losses": 3,
            "goalsFor": 4,
            "goalsAgainst": 12
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
            "played": 3,
            "wins": 1,
            "draws": 0,
            "losses": 2,
            "goalsFor": 2,
            "goalsAgainst": 6
          }
        },
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
          "teamId": 217,
          "team": "SC Braga",
          "form": "DWWL",
          "all": {
            "played": 4,
            "wins": 2,
            "draws": 1,
            "losses": 1,
            "goalsFor": 6,
            "goalsAgainst": 5
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
            "goalsFor": 5,
            "goalsAgainst": 5
          }
        },
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
        }
      ],
      "fixtures": [
        {
          "fixtureId": 1575499,
          "kickoff": "2026-09-15T02:45:00+09:00",
          "status": "NS",
          "homeTeamId": 226,
          "homeTeam": "Rio Ave",
          "awayTeamId": 15130,
          "awayTeam": "Estrela",
          "injuriesChecked": true,
          "injuries": [],
          "lineupsChecked": true,
          "lineups": []
        },
        {
          "fixtureId": 1575497,
          "kickoff": "2026-09-15T04:15:00+09:00",
          "status": "NS",
          "homeTeamId": 215,
          "homeTeam": "Moreirense",
          "awayTeamId": 214,
          "awayTeam": "Maritimo",
          "injuriesChecked": true,
          "injuries": [],
          "lineupsChecked": false,
          "lineups": []
        },
        {
          "fixtureId": 1575494,
          "kickoff": "2026-09-15T04:45:00+09:00",
          "status": "NS",
          "homeTeamId": 217,
          "homeTeam": "SC Braga",
          "awayTeamId": 230,
          "awayTeam": "Estoril",
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
          "points": 13,
          "goalsDiff": 7,
          "form": "WWWWD",
          "all": {
            "played": 5,
            "wins": 4,
            "draws": 1,
            "losses": 0,
            "goalsFor": 13,
            "goalsAgainst": 6
          },
          "home": {
            "played": 3,
            "wins": 2,
            "draws": 1,
            "losses": 0,
            "goalsFor": 6,
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
          "points": 12,
          "goalsDiff": 8,
          "form": "WWWLW",
          "all": {
            "played": 5,
            "wins": 4,
            "draws": 0,
            "losses": 1,
            "goalsFor": 12,
            "goalsAgainst": 4
          },
          "home": {
            "played": 3,
            "wins": 3,
            "draws": 0,
            "losses": 0,
            "goalsFor": 10,
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
          "teamId": 3579,
          "team": "Amed",
          "rank": 3,
          "points": 10,
          "goalsDiff": 7,
          "form": "WDWLW",
          "all": {
            "played": 5,
            "wins": 3,
            "draws": 1,
            "losses": 1,
            "goalsFor": 12,
            "goalsAgainst": 5
          },
          "home": {
            "played": 3,
            "wins": 3,
            "draws": 0,
            "losses": 0,
            "goalsFor": 10,
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
          "teamId": 1004,
          "team": "Kasımpaşa",
          "rank": 4,
          "points": 9,
          "goalsDiff": 2,
          "form": "WDDWD",
          "all": {
            "played": 5,
            "wins": 2,
            "draws": 3,
            "losses": 0,
            "goalsFor": 7,
            "goalsAgainst": 5
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
            "wins": 2,
            "draws": 1,
            "losses": 0,
            "goalsFor": 4,
            "goalsAgainst": 2
          }
        },
        {
          "teamId": 1007,
          "team": "Rizespor",
          "rank": 5,
          "points": 9,
          "goalsDiff": 1,
          "form": "WLWLW",
          "all": {
            "played": 5,
            "wins": 3,
            "draws": 0,
            "losses": 2,
            "goalsFor": 5,
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
            "played": 3,
            "wins": 3,
            "draws": 0,
            "losses": 0,
            "goalsFor": 5,
            "goalsAgainst": 1
          }
        },
        {
          "teamId": 7411,
          "team": "Kocaelispor",
          "rank": 6,
          "points": 9,
          "goalsDiff": 1,
          "form": "LWWWL",
          "all": {
            "played": 5,
            "wins": 3,
            "draws": 0,
            "losses": 2,
            "goalsFor": 5,
            "goalsAgainst": 4
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
            "played": 3,
            "wins": 1,
            "draws": 0,
            "losses": 2,
            "goalsFor": 2,
            "goalsAgainst": 4
          }
        },
        {
          "teamId": 996,
          "team": "Alanyaspor",
          "rank": 7,
          "points": 8,
          "goalsDiff": 1,
          "form": "DWLWD",
          "all": {
            "played": 5,
            "wins": 2,
            "draws": 2,
            "losses": 1,
            "goalsFor": 6,
            "goalsAgainst": 5
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
            "wins": 1,
            "draws": 1,
            "losses": 1,
            "goalsFor": 3,
            "goalsAgainst": 3
          }
        },
        {
          "teamId": 998,
          "team": "Trabzonspor",
          "rank": 8,
          "points": 7,
          "goalsDiff": 4,
          "form": "LWLWD",
          "all": {
            "played": 5,
            "wins": 2,
            "draws": 1,
            "losses": 2,
            "goalsFor": 9,
            "goalsAgainst": 5
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
            "played": 3,
            "wins": 0,
            "draws": 1,
            "losses": 2,
            "goalsFor": 2,
            "goalsAgainst": 4
          }
        },
        {
          "teamId": 6343,
          "team": "Çorum FK",
          "rank": 9,
          "points": 7,
          "goalsDiff": 2,
          "form": "WWLLD",
          "all": {
            "played": 5,
            "wins": 2,
            "draws": 1,
            "losses": 2,
            "goalsFor": 12,
            "goalsAgainst": 10
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
            "played": 3,
            "wins": 1,
            "draws": 1,
            "losses": 1,
            "goalsFor": 9,
            "goalsAgainst": 9
          }
        },
        {
          "teamId": 3573,
          "team": "Gaziantep FK",
          "rank": 10,
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
          "teamId": 997,
          "team": "Gençlerbirliği S.K.",
          "rank": 11,
          "points": 7,
          "goalsDiff": -4,
          "form": "LLDWW",
          "all": {
            "played": 5,
            "wins": 2,
            "draws": 1,
            "losses": 2,
            "goalsFor": 5,
            "goalsAgainst": 9
          },
          "home": {
            "played": 3,
            "wins": 1,
            "draws": 1,
            "losses": 1,
            "goalsFor": 4,
            "goalsAgainst": 4
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
          "rank": 12,
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
          "teamId": 3603,
          "team": "Samsunspor",
          "rank": 13,
          "points": 4,
          "goalsDiff": -5,
          "form": "LLLWD",
          "all": {
            "played": 5,
            "wins": 1,
            "draws": 1,
            "losses": 3,
            "goalsFor": 6,
            "goalsAgainst": 11
          },
          "home": {
            "played": 3,
            "wins": 0,
            "draws": 1,
            "losses": 2,
            "goalsFor": 4,
            "goalsAgainst": 10
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
          "teamId": 564,
          "team": "Başakşehir",
          "rank": 14,
          "points": 4,
          "goalsDiff": -5,
          "form": "LLDLW",
          "all": {
            "played": 5,
            "wins": 1,
            "draws": 1,
            "losses": 3,
            "goalsFor": 6,
            "goalsAgainst": 11
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
            "wins": 0,
            "draws": 0,
            "losses": 2,
            "goalsFor": 1,
            "goalsAgainst": 7
          }
        },
        {
          "teamId": 1009,
          "team": "Erzurumspor FK",
          "rank": 15,
          "points": 4,
          "goalsDiff": -9,
          "form": "LWDLL",
          "all": {
            "played": 5,
            "wins": 1,
            "draws": 1,
            "losses": 3,
            "goalsFor": 2,
            "goalsAgainst": 11
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
            "played": 3,
            "wins": 0,
            "draws": 1,
            "losses": 2,
            "goalsFor": 1,
            "goalsAgainst": 7
          }
        },
        {
          "teamId": 607,
          "team": "Konyaspor",
          "rank": 16,
          "points": 3,
          "goalsDiff": -4,
          "form": "WLLLL",
          "all": {
            "played": 5,
            "wins": 1,
            "draws": 0,
            "losses": 4,
            "goalsFor": 4,
            "goalsAgainst": 8
          },
          "home": {
            "played": 3,
            "wins": 1,
            "draws": 0,
            "losses": 2,
            "goalsFor": 2,
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
        },
        {
          "teamId": 3588,
          "team": "Eyüpspor",
          "rank": 17,
          "points": 3,
          "goalsDiff": -6,
          "form": "LLWLL",
          "all": {
            "played": 5,
            "wins": 1,
            "draws": 0,
            "losses": 4,
            "goalsFor": 2,
            "goalsAgainst": 8
          },
          "home": {
            "played": 3,
            "wins": 1,
            "draws": 0,
            "losses": 2,
            "goalsFor": 2,
            "goalsAgainst": 4
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
          "rank": 18,
          "points": 2,
          "goalsDiff": -4,
          "form": "DLLLD",
          "all": {
            "played": 5,
            "wins": 0,
            "draws": 2,
            "losses": 3,
            "goalsFor": 9,
            "goalsAgainst": 13
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
            "wins": 0,
            "draws": 2,
            "losses": 1,
            "goalsFor": 7,
            "goalsAgainst": 8
          }
        }
      ],
      "teams": [
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
        }
      ],
      "fixtures": [
        {
          "fixtureId": 1584408,
          "kickoff": "2026-09-15T02:00:00+09:00",
          "status": "NS",
          "homeTeamId": 3573,
          "homeTeam": "Gaziantep FK",
          "awayTeamId": 611,
          "awayTeam": "Fenerbahçe",
          "injuriesChecked": true,
          "injuries": [
            {
              "fixtureId": 1584408,
              "teamId": 3573,
              "playerId": 62038,
              "player": "F. Bavuk",
              "type": "Missing Fixture",
              "reason": "Injury"
            },
            {
              "fixtureId": 1584408,
              "teamId": 3573,
              "playerId": 161884,
              "player": "S. Hansen",
              "type": "Missing Fixture",
              "reason": "Injury"
            },
            {
              "fixtureId": 1584408,
              "teamId": 3573,
              "playerId": 522647,
              "player": "A. O. Kalin",
              "type": "Missing Fixture",
              "reason": "Inactive"
            },
            {
              "fixtureId": 1584408,
              "teamId": 3573,
              "playerId": 49964,
              "player": "N. Sangare",
              "type": "Missing Fixture",
              "reason": "Inactive"
            },
            {
              "fixtureId": 1584408,
              "teamId": 611,
              "playerId": 746,
              "player": "M. Asensio",
              "type": "Missing Fixture",
              "reason": "Muscle Injury"
            },
            {
              "fixtureId": 1584408,
              "teamId": 611,
              "playerId": 272721,
              "player": "J. Oosterwolde",
              "type": "Missing Fixture",
              "reason": "Achilles Tendon Injury"
            }
          ],
          "lineupsChecked": true,
          "lineups": []
        }
      ]
    },
    {
      "key": "ACL",
      "leagueId": 17,
      "season": "2026",
      "standings": [
        {
          "teamId": 2929,
          "team": "Al-Ahli Jeddah",
          "rank": 1,
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
          "teamId": 2939,
          "team": "Al-Nassr",
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
          "teamId": 2932,
          "team": "Al-Hilal Saudi FC",
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
          "teamId": 2933,
          "team": "Al-Qadisiyah FC",
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
          "teamId": 2865,
          "team": "Al Ain",
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
          "teamId": 2870,
          "team": "Shabab Al Ahli Dubai",
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
          "teamId": 2872,
          "team": "Al-Wasl FC",
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
          "teamId": 2895,
          "team": "Al Sadd",
          "rank": 8,
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
          "teamId": 2903,
          "team": "Al-Gharafa",
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
          "teamId": 2916,
          "team": "Al Shamal",
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
          "teamId": 2733,
          "team": "Esteghlal FC",
          "rank": 11,
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
          "teamId": 2737,
          "team": "Tractor Sazi",
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
          "teamId": 4217,
          "team": "Neftchi",
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
          "teamId": 8009,
          "team": "Al Quwa Al Jawiya",
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
          "teamId": 2938,
          "team": "Al-Ittihad FC",
          "rank": 15,
          "points": 0,
          "goalsDiff": 0,
          "form": "W",
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
          "teamId": 4220,
          "team": "Pakhtakor",
          "rank": 16,
          "points": 0,
          "goalsDiff": 0,
          "form": "W",
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
          "teamId": 290,
          "team": "Kashima",
          "rank": 1,
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
          "teamId": 289,
          "team": "Vissel Kobe",
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
          "teamId": 281,
          "team": "Kashiwa Reysol",
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
          "teamId": 302,
          "team": "Kyoto Sanga",
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
          "teamId": 2762,
          "team": "Jeonbuk Motors",
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
          "teamId": 2750,
          "team": "Daejeon Citizen",
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
          "teamId": 2764,
          "team": "Pohang Steelers",
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
          "teamId": 2780,
          "team": "Buriram United",
          "rank": 8,
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
          "teamId": 2789,
          "team": "Port FC",
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
          "teamId": 2776,
          "team": "Ratchaburi",
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
          "teamId": 836,
          "team": "SHANGHAI SIPG",
          "rank": 11,
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
          "teamId": 830,
          "team": "Beijing Guoan",
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
          "teamId": 946,
          "team": "Newcastle Jets",
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
          "teamId": 2523,
          "team": "Johor Darul Takzim FC",
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
          "teamId": 293,
          "team": "Gamba Osaka",
          "rank": 15,
          "points": 0,
          "goalsDiff": 0,
          "form": "W",
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
          "teamId": 16400,
          "team": "Công An Nhân Dân",
          "rank": 16,
          "points": 0,
          "goalsDiff": 0,
          "form": "W",
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
          "teamId": 2870,
          "team": "Shabab Al Ahli Dubai",
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
          "teamId": 2737,
          "team": "Tractor Sazi",
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
          "teamId": 2916,
          "team": "Al Shamal",
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
          "teamId": 2938,
          "team": "Al-Ittihad FC",
          "form": "W",
          "all": {
            "played": 1,
            "wins": 1,
            "draws": 0,
            "losses": 0,
            "goalsFor": 4,
            "goalsAgainst": 1
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
            "wins": 1,
            "draws": 0,
            "losses": 0,
            "goalsFor": 4,
            "goalsAgainst": 1
          }
        },
        {
          "teamId": 2733,
          "team": "Esteghlal FC",
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
          "teamId": 2895,
          "team": "Al Sadd",
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
          "teamId": 2929,
          "team": "Al-Ahli Jeddah",
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
          "teamId": 4220,
          "team": "Pakhtakor",
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
          "teamId": 2933,
          "team": "Al-Qadisiyah FC",
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
          "teamId": 2872,
          "team": "Al-Wasl FC",
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
          "teamId": 290,
          "team": "Kashima",
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
          "teamId": 946,
          "team": "Newcastle Jets",
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
          "teamId": 293,
          "team": "Gamba Osaka",
          "form": "W",
          "all": {
            "played": 1,
            "wins": 1,
            "draws": 0,
            "losses": 0,
            "goalsFor": 1,
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
            "played": 1,
            "wins": 1,
            "draws": 0,
            "losses": 0,
            "goalsFor": 1,
            "goalsAgainst": 0
          }
        },
        {
          "teamId": 16400,
          "team": "Công An Nhân Dân",
          "form": "W",
          "all": {
            "played": 1,
            "wins": 1,
            "draws": 0,
            "losses": 0,
            "goalsFor": 2,
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
            "played": 1,
            "wins": 1,
            "draws": 0,
            "losses": 0,
            "goalsFor": 2,
            "goalsAgainst": 0
          }
        },
        {
          "teamId": 2750,
          "team": "Daejeon Citizen",
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
          "teamId": 302,
          "team": "Kyoto Sanga",
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
          "teamId": 2776,
          "team": "Ratchaburi",
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
          "teamId": 836,
          "team": "SHANGHAI SIPG",
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
          "teamId": 830,
          "team": "Beijing Guoan",
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
          "teamId": 2764,
          "team": "Pohang Steelers",
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
          "teamId": 2523,
          "team": "Johor Darul Takzim FC",
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
          "teamId": 2780,
          "team": "Buriram United",
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
          "fixtureId": 1629913,
          "kickoff": "2026-09-15T01:00:00+09:00",
          "status": "NS",
          "homeTeamId": 2870,
          "homeTeam": "Shabab Al Ahli Dubai",
          "awayTeamId": 2737,
          "awayTeam": "Tractor Sazi",
          "injuriesChecked": true,
          "injuries": [],
          "lineupsChecked": true,
          "lineups": []
        },
        {
          "fixtureId": 1629914,
          "kickoff": "2026-09-15T01:00:00+09:00",
          "status": "NS",
          "homeTeamId": 2916,
          "homeTeam": "Al Shamal",
          "awayTeamId": 2938,
          "awayTeam": "Al-Ittihad FC",
          "injuriesChecked": true,
          "injuries": [],
          "lineupsChecked": true,
          "lineups": []
        },
        {
          "fixtureId": 1629912,
          "kickoff": "2026-09-15T03:15:00+09:00",
          "status": "NS",
          "homeTeamId": 2733,
          "homeTeam": "Esteghlal FC",
          "awayTeamId": 2895,
          "awayTeam": "Al Sadd",
          "injuriesChecked": true,
          "injuries": [],
          "lineupsChecked": true,
          "lineups": []
        },
        {
          "fixtureId": 1629915,
          "kickoff": "2026-09-15T03:15:00+09:00",
          "status": "NS",
          "homeTeamId": 2929,
          "homeTeam": "Al-Ahli Jeddah",
          "awayTeamId": 4220,
          "awayTeam": "Pakhtakor",
          "injuriesChecked": true,
          "injuries": [],
          "lineupsChecked": true,
          "lineups": []
        },
        {
          "fixtureId": 1629916,
          "kickoff": "2026-09-15T03:15:00+09:00",
          "status": "NS",
          "homeTeamId": 2933,
          "homeTeam": "Al-Qadisiyah FC",
          "awayTeamId": 2872,
          "awayTeam": "Al-Wasl FC",
          "injuriesChecked": true,
          "injuries": [],
          "lineupsChecked": true,
          "lineups": []
        },
        {
          "fixtureId": 1629919,
          "kickoff": "2026-09-15T19:00:00+09:00",
          "status": "NS",
          "homeTeamId": 290,
          "homeTeam": "Kashima",
          "awayTeamId": 946,
          "awayTeam": "Newcastle Jets",
          "injuriesChecked": true,
          "injuries": [],
          "lineupsChecked": false,
          "lineups": []
        },
        {
          "fixtureId": 1629918,
          "kickoff": "2026-09-15T19:00:00+09:00",
          "status": "NS",
          "homeTeamId": 293,
          "homeTeam": "Gamba Osaka",
          "awayTeamId": 16400,
          "awayTeam": "Công An Nhân Dân",
          "injuriesChecked": true,
          "injuries": [],
          "lineupsChecked": false,
          "lineups": []
        },
        {
          "fixtureId": 1629917,
          "kickoff": "2026-09-15T19:00:00+09:00",
          "status": "NS",
          "homeTeamId": 2750,
          "homeTeam": "Daejeon Citizen",
          "awayTeamId": 302,
          "awayTeam": "Kyoto Sanga",
          "injuriesChecked": true,
          "injuries": [],
          "lineupsChecked": false,
          "lineups": []
        },
        {
          "fixtureId": 1629920,
          "kickoff": "2026-09-15T19:00:00+09:00",
          "status": "NS",
          "homeTeamId": 2776,
          "homeTeam": "Ratchaburi",
          "awayTeamId": 836,
          "awayTeam": "SHANGHAI SIPG",
          "injuriesChecked": true,
          "injuries": [],
          "lineupsChecked": false,
          "lineups": []
        },
        {
          "fixtureId": 1629921,
          "kickoff": "2026-09-15T21:15:00+09:00",
          "status": "NS",
          "homeTeamId": 830,
          "homeTeam": "Beijing Guoan",
          "awayTeamId": 2764,
          "awayTeam": "Pohang Steelers",
          "injuriesChecked": true,
          "injuries": [],
          "lineupsChecked": false,
          "lineups": []
        },
        {
          "fixtureId": 1629922,
          "kickoff": "2026-09-15T21:15:00+09:00",
          "status": "NS",
          "homeTeamId": 2523,
          "homeTeam": "Johor Darul Takzim FC",
          "awayTeamId": 2780,
          "awayTeam": "Buriram United",
          "injuriesChecked": true,
          "injuries": [],
          "lineupsChecked": false,
          "lineups": []
        }
      ]
    }
  ],
  "dates": [
    {
      "date": "2026-09-14",
      "updatedAt": "2026-09-14T08:49:13.092Z",
      "leagues": [
        {
          "key": "EPL",
          "leagueId": 39,
          "season": "2026",
          "standings": [
            {
              "teamId": 42,
              "team": "Arsenal",
              "rank": 1,
              "points": 12,
              "goalsDiff": 7,
              "form": "WWWW",
              "all": {
                "played": 4,
                "wins": 4,
                "draws": 0,
                "losses": 0,
                "goalsFor": 8,
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
                "played": 2,
                "wins": 2,
                "draws": 0,
                "losses": 0,
                "goalsFor": 3,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 50,
              "team": "Manchester City",
              "rank": 2,
              "points": 12,
              "goalsDiff": 6,
              "form": "WWWW",
              "all": {
                "played": 4,
                "wins": 4,
                "draws": 0,
                "losses": 0,
                "goalsFor": 8,
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
                "played": 2,
                "wins": 2,
                "draws": 0,
                "losses": 0,
                "goalsFor": 5,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 64,
              "team": "Hull City",
              "rank": 3,
              "points": 8,
              "goalsDiff": 3,
              "form": "DDWW",
              "all": {
                "played": 4,
                "wins": 2,
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
              "teamId": 51,
              "team": "Brighton",
              "rank": 4,
              "points": 7,
              "goalsDiff": 8,
              "form": "WDLW",
              "all": {
                "played": 4,
                "wins": 2,
                "draws": 1,
                "losses": 1,
                "goalsFor": 13,
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
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 8,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 49,
              "team": "Chelsea",
              "rank": 5,
              "points": 7,
              "goalsDiff": 1,
              "form": "DLWW",
              "all": {
                "played": 4,
                "wins": 2,
                "draws": 1,
                "losses": 1,
                "goalsFor": 10,
                "goalsAgainst": 9
              },
              "home": {
                "played": 2,
                "wins": 1,
                "draws": 1,
                "losses": 0,
                "goalsFor": 6,
                "goalsAgainst": 5
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
              "rank": 6,
              "points": 6,
              "goalsDiff": 3,
              "form": "DDDW",
              "all": {
                "played": 4,
                "wins": 1,
                "draws": 3,
                "losses": 0,
                "goalsFor": 7,
                "goalsAgainst": 4
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
                "played": 2,
                "wins": 0,
                "draws": 2,
                "losses": 0,
                "goalsFor": 3,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 40,
              "team": "Liverpool",
              "rank": 7,
              "points": 6,
              "goalsDiff": 2,
              "form": "DWDD",
              "all": {
                "played": 4,
                "wins": 1,
                "draws": 3,
                "losses": 0,
                "goalsFor": 6,
                "goalsAgainst": 4
              },
              "home": {
                "played": 2,
                "wins": 0,
                "draws": 2,
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
              "teamId": 45,
              "team": "Everton",
              "rank": 8,
              "points": 6,
              "goalsDiff": 2,
              "form": "DDDW",
              "all": {
                "played": 4,
                "wins": 1,
                "draws": 3,
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
                "played": 2,
                "wins": 0,
                "draws": 2,
                "losses": 0,
                "goalsFor": 1,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 57,
              "team": "Ipswich",
              "rank": 9,
              "points": 6,
              "goalsDiff": -3,
              "form": "WLLW",
              "all": {
                "played": 4,
                "wins": 2,
                "draws": 0,
                "losses": 2,
                "goalsFor": 7,
                "goalsAgainst": 10
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
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 5,
                "goalsAgainst": 7
              }
            },
            {
              "teamId": 34,
              "team": "Newcastle",
              "rank": 10,
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
              "rank": 11,
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
              "teamId": 65,
              "team": "Nottingham Forest",
              "rank": 12,
              "points": 5,
              "goalsDiff": 0,
              "form": "WDDL",
              "all": {
                "played": 4,
                "wins": 1,
                "draws": 2,
                "losses": 1,
                "goalsFor": 4,
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
                "played": 2,
                "wins": 1,
                "draws": 1,
                "losses": 0,
                "goalsFor": 4,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 33,
              "team": "Manchester United",
              "rank": 13,
              "points": 4,
              "goalsDiff": 0,
              "form": "LDWL",
              "all": {
                "played": 4,
                "wins": 1,
                "draws": 1,
                "losses": 2,
                "goalsFor": 7,
                "goalsAgainst": 7
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
              "rank": 14,
              "points": 4,
              "goalsDiff": -2,
              "form": "LDWL",
              "all": {
                "played": 4,
                "wins": 1,
                "draws": 1,
                "losses": 2,
                "goalsFor": 3,
                "goalsAgainst": 5
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
                "draws": 1,
                "losses": 1,
                "goalsFor": 2,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 35,
              "team": "Bournemouth",
              "rank": 15,
              "points": 3,
              "goalsDiff": -1,
              "form": "DDDL",
              "all": {
                "played": 4,
                "wins": 0,
                "draws": 3,
                "losses": 1,
                "goalsFor": 6,
                "goalsAgainst": 7
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
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 52,
              "team": "Crystal Palace",
              "rank": 16,
              "points": 3,
              "goalsDiff": -5,
              "form": "LWLL",
              "all": {
                "played": 4,
                "wins": 1,
                "draws": 0,
                "losses": 3,
                "goalsFor": 6,
                "goalsAgainst": 11
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
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 47,
              "team": "Tottenham",
              "rank": 17,
              "points": 2,
              "goalsDiff": -5,
              "form": "DDLL",
              "all": {
                "played": 4,
                "wins": 0,
                "draws": 2,
                "losses": 2,
                "goalsFor": 0,
                "goalsAgainst": 5
              },
              "home": {
                "played": 2,
                "wins": 0,
                "draws": 1,
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
              "rank": 18,
              "points": 1,
              "goalsDiff": -3,
              "form": "DLLL",
              "all": {
                "played": 4,
                "wins": 0,
                "draws": 1,
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
                "played": 2,
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 0,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 66,
              "team": "Aston Villa",
              "rank": 19,
              "points": 1,
              "goalsDiff": -6,
              "form": "LDLL",
              "all": {
                "played": 4,
                "wins": 0,
                "draws": 1,
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
                "goalsAgainst": 3
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
              "teamId": 1346,
              "team": "Coventry",
              "rank": 20,
              "points": 0,
              "goalsDiff": -10,
              "form": "LLLL",
              "all": {
                "played": 4,
                "wins": 0,
                "draws": 0,
                "losses": 4,
                "goalsFor": 0,
                "goalsAgainst": 10
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
              "teamId": 33,
              "team": "Manchester United",
              "form": "LWDL",
              "all": {
                "played": 4,
                "wins": 1,
                "draws": 1,
                "losses": 2,
                "goalsFor": 7,
                "goalsAgainst": 7
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
                "played": 2,
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 2,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 50,
              "team": "Manchester City",
              "form": "WWWW",
              "all": {
                "played": 4,
                "wins": 4,
                "draws": 0,
                "losses": 0,
                "goalsFor": 8,
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
                "played": 2,
                "wins": 2,
                "draws": 0,
                "losses": 0,
                "goalsFor": 5,
                "goalsAgainst": 1
              }
            }
          ],
          "fixtures": [
            {
              "fixtureId": 1557404,
              "kickoff": "2026-09-14T00:30:00+09:00",
              "status": "FT",
              "homeTeamId": 33,
              "homeTeam": "Manchester United",
              "awayTeamId": 50,
              "awayTeam": "Manchester City",
              "injuriesChecked": true,
              "injuries": [
                {
                  "fixtureId": 1557404,
                  "teamId": 33,
                  "playerId": 356041,
                  "player": "C. Baleba",
                  "type": "Missing Fixture",
                  "reason": "Ankle Injury"
                },
                {
                  "fixtureId": 1557404,
                  "teamId": 33,
                  "playerId": 157997,
                  "player": "A. Diallo",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1557404,
                  "teamId": 33,
                  "playerId": 2931,
                  "player": "T. Heaton",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1557404,
                  "teamId": 33,
                  "playerId": 51494,
                  "player": "M. Ugarte",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1557404,
                  "teamId": 33,
                  "playerId": 532,
                  "player": "M. de Ligt",
                  "type": "Missing Fixture",
                  "reason": "Back Injury"
                },
                {
                  "fixtureId": 1557404,
                  "teamId": 50,
                  "playerId": 1422,
                  "player": "J. Doku",
                  "type": "Missing Fixture",
                  "reason": "Calf Injury"
                },
                {
                  "fixtureId": 1557404,
                  "teamId": 50,
                  "playerId": 307123,
                  "player": "N. O'Reilly",
                  "type": "Questionable",
                  "reason": "Back Injury"
                }
              ],
              "lineupsChecked": true,
              "lineups": [
                {
                  "teamId": 33,
                  "team": "Manchester United",
                  "formation": "4-2-3-1",
                  "coach": "M. Carrick",
                  "starters": [
                    "S. Lammens",
                    "Diogo Dalot",
                    "H. Maguire",
                    "Lisandro Martínez",
                    "P. Dorgu",
                    "Y. Tielemans",
                    "K. Mainoo",
                    "B. Mbeumo",
                    "Bruno Fernandes",
                    "M. Rashford",
                    "Matheus Cunha"
                  ]
                },
                {
                  "teamId": 50,
                  "team": "Manchester City",
                  "formation": "4-2-3-1",
                  "coach": "E. Maresca",
                  "starters": [
                    "G. Donnarumma",
                    "Matheus Nunes",
                    "M. Guéhi",
                    "Rúben Dias",
                    "J. Gvardiol",
                    "E. Fernández",
                    "E. Anderson",
                    "P. Foden",
                    "R. Cherki",
                    "A. Semenyo",
                    "E. Haaland"
                  ]
                }
              ]
            }
          ],
          "standingsUpdatedAt": "2026-09-14T08:49:13.092Z"
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
              "points": 15,
              "goalsDiff": 17,
              "form": "WWWWW",
              "all": {
                "played": 5,
                "wins": 5,
                "draws": 0,
                "losses": 0,
                "goalsFor": 21,
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
                "played": 3,
                "wins": 3,
                "draws": 0,
                "losses": 0,
                "goalsFor": 14,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 541,
              "team": "Real Madrid",
              "rank": 2,
              "points": 12,
              "goalsDiff": 10,
              "form": "WLWWW",
              "all": {
                "played": 5,
                "wins": 4,
                "draws": 0,
                "losses": 1,
                "goalsFor": 14,
                "goalsAgainst": 4
              },
              "home": {
                "played": 3,
                "wins": 3,
                "draws": 0,
                "losses": 0,
                "goalsFor": 12,
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
              "teamId": 542,
              "team": "Alaves",
              "rank": 3,
              "points": 10,
              "goalsDiff": 6,
              "form": "LWWDW",
              "all": {
                "played": 5,
                "wins": 3,
                "draws": 1,
                "losses": 1,
                "goalsFor": 11,
                "goalsAgainst": 5
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
                "played": 2,
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 2,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 530,
              "team": "Atletico Madrid",
              "rank": 4,
              "points": 10,
              "goalsDiff": 4,
              "form": "WLWDW",
              "all": {
                "played": 5,
                "wins": 3,
                "draws": 1,
                "losses": 1,
                "goalsFor": 10,
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
                "played": 3,
                "wins": 2,
                "draws": 0,
                "losses": 1,
                "goalsFor": 6,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 536,
              "team": "Sevilla",
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
                "draws": 0,
                "losses": 1,
                "goalsFor": 4,
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
              "teamId": 544,
              "team": "Deportivo La Coruna",
              "rank": 6,
              "points": 9,
              "goalsDiff": 3,
              "form": "DWWDD",
              "all": {
                "played": 5,
                "wins": 2,
                "draws": 3,
                "losses": 0,
                "goalsFor": 9,
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
                "played": 3,
                "wins": 1,
                "draws": 2,
                "losses": 0,
                "goalsFor": 5,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 543,
              "team": "Real Betis",
              "rank": 7,
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
              "teamId": 540,
              "team": "Espanyol",
              "rank": 8,
              "points": 7,
              "goalsDiff": 3,
              "form": "WDLLW",
              "all": {
                "played": 5,
                "wins": 2,
                "draws": 1,
                "losses": 2,
                "goalsFor": 8,
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
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 531,
              "team": "Athletic Club",
              "rank": 9,
              "points": 7,
              "goalsDiff": 1,
              "form": "DWWLL",
              "all": {
                "played": 5,
                "wins": 2,
                "draws": 1,
                "losses": 2,
                "goalsFor": 7,
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
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 2,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 4665,
              "team": "Racing Santander",
              "rank": 10,
              "points": 7,
              "goalsDiff": 0,
              "form": "WLWLD",
              "all": {
                "played": 5,
                "wins": 2,
                "draws": 1,
                "losses": 2,
                "goalsFor": 9,
                "goalsAgainst": 9
              },
              "home": {
                "played": 3,
                "wins": 2,
                "draws": 1,
                "losses": 0,
                "goalsFor": 7,
                "goalsAgainst": 5
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
              "teamId": 727,
              "team": "Osasuna",
              "rank": 11,
              "points": 7,
              "goalsDiff": -3,
              "form": "LLWWD",
              "all": {
                "played": 5,
                "wins": 2,
                "draws": 1,
                "losses": 2,
                "goalsFor": 5,
                "goalsAgainst": 8
              },
              "home": {
                "played": 3,
                "wins": 1,
                "draws": 1,
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
                "goalsAgainst": 6
              }
            },
            {
              "teamId": 548,
              "team": "Real Sociedad",
              "rank": 12,
              "points": 7,
              "goalsDiff": -5,
              "form": "LWDWL",
              "all": {
                "played": 6,
                "wins": 2,
                "draws": 1,
                "losses": 3,
                "goalsFor": 6,
                "goalsAgainst": 11
              },
              "home": {
                "played": 3,
                "wins": 1,
                "draws": 1,
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
              "teamId": 539,
              "team": "Levante",
              "rank": 13,
              "points": 5,
              "goalsDiff": -2,
              "form": "LDWDL",
              "all": {
                "played": 5,
                "wins": 1,
                "draws": 2,
                "losses": 2,
                "goalsFor": 7,
                "goalsAgainst": 9
              },
              "home": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 7,
                "goalsAgainst": 6
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
              "teamId": 546,
              "team": "Getafe",
              "rank": 14,
              "points": 5,
              "goalsDiff": -3,
              "form": "DDLWL",
              "all": {
                "played": 5,
                "wins": 1,
                "draws": 2,
                "losses": 2,
                "goalsFor": 3,
                "goalsAgainst": 6
              },
              "home": {
                "played": 3,
                "wins": 1,
                "draws": 2,
                "losses": 0,
                "goalsFor": 3,
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
              "teamId": 538,
              "team": "Celta Vigo",
              "rank": 15,
              "points": 4,
              "goalsDiff": -3,
              "form": "DDDLL",
              "all": {
                "played": 6,
                "wins": 0,
                "draws": 4,
                "losses": 2,
                "goalsFor": 3,
                "goalsAgainst": 6
              },
              "home": {
                "played": 3,
                "wins": 0,
                "draws": 1,
                "losses": 2,
                "goalsFor": 2,
                "goalsAgainst": 5
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
              "teamId": 728,
              "team": "Rayo Vallecano",
              "rank": 16,
              "points": 4,
              "goalsDiff": -6,
              "form": "LWLDL",
              "all": {
                "played": 5,
                "wins": 1,
                "draws": 1,
                "losses": 3,
                "goalsFor": 8,
                "goalsAgainst": 14
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
                "played": 3,
                "wins": 0,
                "draws": 0,
                "losses": 3,
                "goalsFor": 4,
                "goalsAgainst": 11
              }
            },
            {
              "teamId": 535,
              "team": "Malaga",
              "rank": 17,
              "points": 3,
              "goalsDiff": -6,
              "form": "DDLDL",
              "all": {
                "played": 5,
                "wins": 0,
                "draws": 3,
                "losses": 2,
                "goalsFor": 2,
                "goalsAgainst": 8
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
                "played": 3,
                "wins": 0,
                "draws": 1,
                "losses": 2,
                "goalsFor": 1,
                "goalsAgainst": 7
              }
            },
            {
              "teamId": 533,
              "team": "Villarreal",
              "rank": 18,
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
              "teamId": 797,
              "team": "Elche",
              "rank": 19,
              "points": 2,
              "goalsDiff": -7,
              "form": "DLLLD",
              "all": {
                "played": 5,
                "wins": 0,
                "draws": 2,
                "losses": 3,
                "goalsFor": 6,
                "goalsAgainst": 13
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
                "played": 3,
                "wins": 0,
                "draws": 2,
                "losses": 1,
                "goalsFor": 4,
                "goalsAgainst": 5
              }
            },
            {
              "teamId": 532,
              "team": "Valencia",
              "rank": 20,
              "points": 1,
              "goalsDiff": -9,
              "form": "LLLLD",
              "all": {
                "played": 5,
                "wins": 0,
                "draws": 1,
                "losses": 4,
                "goalsFor": 1,
                "goalsAgainst": 10
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
                "played": 2,
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 1,
                "goalsAgainst": 4
              }
            }
          ],
          "teams": [
            {
              "teamId": 546,
              "team": "Getafe",
              "form": "LWLDD",
              "all": {
                "played": 5,
                "wins": 1,
                "draws": 2,
                "losses": 2,
                "goalsFor": 3,
                "goalsAgainst": 6
              },
              "home": {
                "played": 3,
                "wins": 1,
                "draws": 2,
                "losses": 0,
                "goalsFor": 3,
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
              "teamId": 544,
              "team": "Deportivo La Coruna",
              "form": "DDWWD",
              "all": {
                "played": 5,
                "wins": 2,
                "draws": 3,
                "losses": 0,
                "goalsFor": 9,
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
                "played": 3,
                "wins": 1,
                "draws": 2,
                "losses": 0,
                "goalsFor": 5,
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
            },
            {
              "teamId": 530,
              "team": "Atletico Madrid",
              "form": "WDWL",
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
            }
          ],
          "fixtures": [
            {
              "fixtureId": 1570375,
              "kickoff": "2026-09-14T01:30:00+09:00",
              "status": "FT",
              "homeTeamId": 546,
              "homeTeam": "Getafe",
              "awayTeamId": 544,
              "awayTeam": "Deportivo La Coruna",
              "injuriesChecked": true,
              "injuries": [
                {
                  "fixtureId": 1570375,
                  "teamId": 546,
                  "playerId": 46813,
                  "player": "A. Abqar",
                  "type": "Missing Fixture",
                  "reason": "Muscle Injury"
                },
                {
                  "fixtureId": 1570375,
                  "teamId": 546,
                  "playerId": 47320,
                  "player": "Juanmi",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1570375,
                  "teamId": 546,
                  "playerId": 18794,
                  "player": "Kiko Femenia",
                  "type": "Missing Fixture",
                  "reason": "Hamstring Injury"
                },
                {
                  "fixtureId": 1570375,
                  "teamId": 546,
                  "playerId": 180927,
                  "player": "Z. Romero",
                  "type": "Missing Fixture",
                  "reason": "Red Card"
                },
                {
                  "fixtureId": 1570375,
                  "teamId": 546,
                  "playerId": 403554,
                  "player": "C. Uche",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1570375,
                  "teamId": 546,
                  "playerId": 162249,
                  "player": "Francho",
                  "type": "Questionable",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1570375,
                  "teamId": 544,
                  "playerId": 354754,
                  "player": "J. Asp",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                }
              ],
              "lineupsChecked": true,
              "lineups": [
                {
                  "teamId": 546,
                  "team": "Getafe",
                  "formation": "4-4-2",
                  "coach": "Pepe Bordalás",
                  "starters": [
                    "David Soria",
                    "S. Boselli",
                    "N. Gudelj",
                    "D. Dakonam",
                    "J. Mojica",
                    "Ramón Terrats",
                    "Mario Martín",
                    "O. Mangala",
                    "M. Satriano",
                    "E. Ünal",
                    "Iván Azón"
                  ]
                },
                {
                  "teamId": 544,
                  "team": "Deportivo La Coruna",
                  "formation": "4-4-2",
                  "coach": "Antonio Hidalgo",
                  "starters": [
                    "Leo Román",
                    "Ximo Navarro",
                    "L. Noubi",
                    "J. Giménez",
                    "G. Quagliata",
                    "Luismi Cruz",
                    "L. Amatucci",
                    "Marc Casadó",
                    "Mario Soriano",
                    "B. Nsongo",
                    "P. Aubameyang"
                  ]
                }
              ]
            },
            {
              "fixtureId": 1570380,
              "kickoff": "2026-09-14T04:00:00+09:00",
              "status": "2H",
              "homeTeamId": 548,
              "homeTeam": "Real Sociedad",
              "awayTeamId": 530,
              "awayTeam": "Atletico Madrid",
              "injuriesChecked": true,
              "injuries": [
                {
                  "fixtureId": 1570380,
                  "teamId": 548,
                  "playerId": 405073,
                  "player": "J. Martin",
                  "type": "Missing Fixture",
                  "reason": "Red Card"
                },
                {
                  "fixtureId": 1570380,
                  "teamId": 548,
                  "playerId": 737,
                  "player": "A. Odriozola",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1570380,
                  "teamId": 548,
                  "playerId": 47314,
                  "player": "I. Zubeldia",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1570380,
                  "teamId": 530,
                  "playerId": 336594,
                  "player": "P. Barrios",
                  "type": "Missing Fixture",
                  "reason": "Muscle Injury"
                },
                {
                  "fixtureId": 1570380,
                  "teamId": 530,
                  "playerId": 6009,
                  "player": "J. Alvarez",
                  "type": "Questionable",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1570380,
                  "teamId": 530,
                  "playerId": 8492,
                  "player": "A. Sorloth",
                  "type": "Questionable",
                  "reason": "Muscle Injury"
                }
              ],
              "lineupsChecked": true,
              "lineups": [
                {
                  "teamId": 548,
                  "team": "Real Sociedad",
                  "formation": "4-2-3-1",
                  "coach": "P. Matarazzo",
                  "starters": [
                    "Álex Remiro",
                    "J. Aramburu",
                    "Luken Beitia",
                    "M. Sarr",
                    "Sergio Gómez",
                    "Y. Herrera",
                    "Carlos Soler",
                    "Barrenetxea",
                    "L. Sučić",
                    "Gonçalo Guedes",
                    "Mikel Oyarzabal"
                  ]
                },
                {
                  "teamId": 530,
                  "team": "Atletico Madrid",
                  "formation": "3-4-2-1",
                  "coach": "D. Simeone",
                  "starters": [
                    "J. Oblak",
                    "Marc Pubill",
                    "C. Romero",
                    "D. Hancko",
                    "G. Simeone",
                    "Marcos Llorente",
                    "M. Hjulmand",
                    "Álex Grimaldo",
                    "Lee Kang-In",
                    "Álex Baena",
                    "A. Lookman"
                  ]
                }
              ]
            }
          ],
          "standingsUpdatedAt": "2026-09-14T08:49:13.092Z"
        },
        {
          "key": "SERIEA",
          "leagueId": 135,
          "season": "2026",
          "standings": [
            {
              "teamId": 487,
              "team": "Lazio",
              "rank": 1,
              "points": 10,
              "goalsDiff": 3,
              "form": "DWWW",
              "all": {
                "played": 4,
                "wins": 3,
                "draws": 1,
                "losses": 0,
                "goalsFor": 6,
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
                "wins": 2,
                "draws": 0,
                "losses": 0,
                "goalsFor": 3,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 497,
              "team": "AS Roma",
              "rank": 2,
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
              "rank": 3,
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
              "teamId": 490,
              "team": "Cagliari",
              "rank": 4,
              "points": 9,
              "goalsDiff": 2,
              "form": "WWLW",
              "all": {
                "played": 4,
                "wins": 3,
                "draws": 0,
                "losses": 1,
                "goalsFor": 4,
                "goalsAgainst": 2
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
                "wins": 2,
                "draws": 0,
                "losses": 0,
                "goalsFor": 3,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 489,
              "team": "AC Milan",
              "rank": 5,
              "points": 8,
              "goalsDiff": 3,
              "form": "DDWW",
              "all": {
                "played": 4,
                "wins": 2,
                "draws": 2,
                "losses": 0,
                "goalsFor": 7,
                "goalsAgainst": 4
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
                "played": 3,
                "wins": 1,
                "draws": 2,
                "losses": 0,
                "goalsFor": 5,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 895,
              "team": "Como",
              "rank": 6,
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
              "teamId": 512,
              "team": "Frosinone",
              "rank": 7,
              "points": 7,
              "goalsDiff": 3,
              "form": "DWWL",
              "all": {
                "played": 4,
                "wins": 2,
                "draws": 1,
                "losses": 1,
                "goalsFor": 7,
                "goalsAgainst": 4
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
                "goalsFor": 4,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 496,
              "team": "Juventus",
              "rank": 8,
              "points": 7,
              "goalsDiff": 2,
              "form": "LDWW",
              "all": {
                "played": 4,
                "wins": 2,
                "draws": 1,
                "losses": 1,
                "goalsFor": 6,
                "goalsAgainst": 4
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
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 488,
              "team": "Sassuolo",
              "rank": 9,
              "points": 7,
              "goalsDiff": 1,
              "form": "WDWL",
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
                "wins": 2,
                "draws": 0,
                "losses": 0,
                "goalsFor": 5,
                "goalsAgainst": 3
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
              "teamId": 492,
              "team": "Napoli",
              "rank": 10,
              "points": 6,
              "goalsDiff": 1,
              "form": "WLLW",
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
                "goalsFor": 2,
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
              "teamId": 499,
              "team": "Atalanta",
              "rank": 11,
              "points": 6,
              "goalsDiff": 0,
              "form": "LLWW",
              "all": {
                "played": 4,
                "wins": 2,
                "draws": 0,
                "losses": 2,
                "goalsFor": 5,
                "goalsAgainst": 5
              },
              "home": {
                "played": 3,
                "wins": 2,
                "draws": 0,
                "losses": 1,
                "goalsFor": 4,
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
              "teamId": 867,
              "team": "Lecce",
              "rank": 12,
              "points": 6,
              "goalsDiff": -2,
              "form": "WLLW",
              "all": {
                "played": 4,
                "wins": 2,
                "draws": 0,
                "losses": 2,
                "goalsFor": 5,
                "goalsAgainst": 7
              },
              "home": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 3,
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
              "teamId": 494,
              "team": "Udinese",
              "rank": 13,
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
              "teamId": 502,
              "team": "Fiorentina",
              "rank": 15,
              "points": 3,
              "goalsDiff": -6,
              "form": "WLLL",
              "all": {
                "played": 4,
                "wins": 1,
                "draws": 0,
                "losses": 3,
                "goalsFor": 5,
                "goalsAgainst": 11
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
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 4,
                "goalsAgainst": 6
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
              "teamId": 500,
              "team": "Bologna",
              "rank": 17,
              "points": 1,
              "goalsDiff": -3,
              "form": "LDLL",
              "all": {
                "played": 4,
                "wins": 0,
                "draws": 1,
                "losses": 3,
                "goalsFor": 2,
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
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 0,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 1579,
              "team": "Monza",
              "rank": 18,
              "points": 1,
              "goalsDiff": -5,
              "form": "LDLL",
              "all": {
                "played": 4,
                "wins": 0,
                "draws": 1,
                "losses": 3,
                "goalsFor": 6,
                "goalsAgainst": 11
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
                "draws": 1,
                "losses": 2,
                "goalsFor": 4,
                "goalsAgainst": 8
              }
            },
            {
              "teamId": 495,
              "team": "Genoa",
              "rank": 19,
              "points": 1,
              "goalsDiff": -6,
              "form": "DLLL",
              "all": {
                "played": 4,
                "wins": 0,
                "draws": 1,
                "losses": 3,
                "goalsFor": 2,
                "goalsAgainst": 8
              },
              "home": {
                "played": 3,
                "wins": 0,
                "draws": 1,
                "losses": 2,
                "goalsFor": 2,
                "goalsAgainst": 7
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
              "teamId": 517,
              "team": "Venezia",
              "rank": 20,
              "points": 0,
              "goalsDiff": -7,
              "form": "LLLL",
              "all": {
                "played": 4,
                "wins": 0,
                "draws": 0,
                "losses": 4,
                "goalsFor": 4,
                "goalsAgainst": 11
              },
              "home": {
                "played": 2,
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 2,
                "goalsAgainst": 6
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
              "teamId": 492,
              "team": "Napoli",
              "form": "WLLW",
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
                "goalsFor": 2,
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
              "teamId": 500,
              "team": "Bologna",
              "form": "LLDL",
              "all": {
                "played": 4,
                "wins": 0,
                "draws": 1,
                "losses": 3,
                "goalsFor": 2,
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
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 0,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 488,
              "team": "Sassuolo",
              "form": "LWDW",
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
                "wins": 2,
                "draws": 0,
                "losses": 0,
                "goalsFor": 5,
                "goalsAgainst": 3
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
              "form": "WWDL",
              "all": {
                "played": 4,
                "wins": 2,
                "draws": 1,
                "losses": 1,
                "goalsFor": 6,
                "goalsAgainst": 4
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
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 3
              }
            }
          ],
          "fixtures": [
            {
              "fixtureId": 1550123,
              "kickoff": "2026-09-14T01:00:00+09:00",
              "status": "FT",
              "homeTeamId": 492,
              "homeTeam": "Napoli",
              "awayTeamId": 500,
              "awayTeam": "Bologna",
              "injuriesChecked": true,
              "injuries": [
                {
                  "fixtureId": 1550123,
                  "teamId": 492,
                  "playerId": 310943,
                  "player": "Alisson Santos",
                  "type": "Missing Fixture",
                  "reason": "Muscle Injury"
                },
                {
                  "fixtureId": 1550123,
                  "teamId": 492,
                  "playerId": 3406,
                  "player": "F. Anguissa",
                  "type": "Missing Fixture",
                  "reason": "Muscle Injury"
                },
                {
                  "fixtureId": 1550123,
                  "teamId": 492,
                  "playerId": 31226,
                  "player": "A. Buongiorno",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1550123,
                  "teamId": 492,
                  "playerId": 312615,
                  "player": "Giovane",
                  "type": "Missing Fixture",
                  "reason": "Groin Injury"
                },
                {
                  "fixtureId": 1550123,
                  "teamId": 492,
                  "playerId": 388547,
                  "player": "L. Marianucci",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1550123,
                  "teamId": 492,
                  "playerId": 903,
                  "player": "S. McTominay",
                  "type": "Missing Fixture",
                  "reason": "Heart Problems"
                },
                {
                  "fixtureId": 1550123,
                  "teamId": 492,
                  "playerId": 312,
                  "player": "A. Meret",
                  "type": "Missing Fixture",
                  "reason": "Muscle Injury"
                },
                {
                  "fixtureId": 1550123,
                  "teamId": 500,
                  "playerId": 15811,
                  "player": "A. Dovbyk",
                  "type": "Missing Fixture",
                  "reason": "Muscle Injury"
                },
                {
                  "fixtureId": 1550123,
                  "teamId": 500,
                  "playerId": 319919,
                  "player": "O. El Azzouzi",
                  "type": "Missing Fixture",
                  "reason": "Thigh Injury"
                },
                {
                  "fixtureId": 1550123,
                  "teamId": 500,
                  "playerId": 30488,
                  "player": "R. Orsolini",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1550123,
                  "teamId": 500,
                  "playerId": 128461,
                  "player": "N. Zortea",
                  "type": "Missing Fixture",
                  "reason": "Hip Injury"
                }
              ],
              "lineupsChecked": true,
              "lineups": [
                {
                  "teamId": 492,
                  "team": "Napoli",
                  "formation": "4-2-3-1",
                  "coach": "Massimiliano Allegri",
                  "starters": [
                    "Vanja Milinković-Savić",
                    "Giovanni Di Lorenzo",
                    "Amir Rrahmani",
                    "Rafa Marín",
                    "Leonardo Spinazzola",
                    "Billy Gilmour",
                    "Stanislav Lobotka",
                    "Matteo Politano",
                    "Kevin De Bruyne",
                    "Antonio Vergara",
                    "Rasmus Højlund"
                  ]
                },
                {
                  "teamId": 500,
                  "team": "Bologna",
                  "formation": "4-2-3-1",
                  "coach": "Domenico Tedesco",
                  "starters": [
                    "Massimo Pessina",
                    "Emil Holm",
                    "Torbjørn Heggem",
                    "Arthur Theate",
                    "Juan Miranda",
                    "Lewis Ferguson",
                    "Tommaso Pobega",
                    "Federico Bernardeschi",
                    "Mikel Amondarain",
                    "Nicolò Cambiaghi",
                    "Roberto Piccoli"
                  ]
                }
              ]
            },
            {
              "fixtureId": 1550124,
              "kickoff": "2026-09-14T03:45:00+09:00",
              "status": "FT",
              "homeTeamId": 488,
              "homeTeam": "Sassuolo",
              "awayTeamId": 496,
              "awayTeam": "Juventus",
              "injuriesChecked": true,
              "injuries": [
                {
                  "fixtureId": 1550124,
                  "teamId": 488,
                  "playerId": 291780,
                  "player": "D. Boloca",
                  "type": "Missing Fixture",
                  "reason": "Muscle Injury"
                },
                {
                  "fixtureId": 1550124,
                  "teamId": 488,
                  "playerId": 41371,
                  "player": "F. Cande",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1550124,
                  "teamId": 488,
                  "playerId": 328046,
                  "player": "I. Kone",
                  "type": "Missing Fixture",
                  "reason": "Broken Leg"
                },
                {
                  "fixtureId": 1550124,
                  "teamId": 488,
                  "playerId": 59513,
                  "player": "Y. Paz",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1550124,
                  "teamId": 488,
                  "playerId": 342055,
                  "player": "E. Pieragnolo",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1550124,
                  "teamId": 488,
                  "playerId": 342035,
                  "player": "C. Volpato",
                  "type": "Missing Fixture",
                  "reason": "Thigh Injury"
                },
                {
                  "fixtureId": 1550124,
                  "teamId": 488,
                  "playerId": 40582,
                  "player": "S. Walukiewicz",
                  "type": "Missing Fixture",
                  "reason": "Muscle Injury"
                },
                {
                  "fixtureId": 1550124,
                  "teamId": 496,
                  "playerId": 30531,
                  "player": "J. Boga",
                  "type": "Missing Fixture",
                  "reason": "Muscle Injury"
                },
                {
                  "fixtureId": 1550124,
                  "teamId": 496,
                  "playerId": 125674,
                  "player": "J. Cabal",
                  "type": "Missing Fixture",
                  "reason": "Thigh Injury"
                },
                {
                  "fixtureId": 1550124,
                  "teamId": 496,
                  "playerId": 451504,
                  "player": "J. Ekhator",
                  "type": "Missing Fixture",
                  "reason": "Muscle Injury"
                },
                {
                  "fixtureId": 1550124,
                  "teamId": 496,
                  "playerId": 30533,
                  "player": "M. Locatelli",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1550124,
                  "teamId": 496,
                  "playerId": 333,
                  "player": "A. Milik",
                  "type": "Missing Fixture",
                  "reason": "Inactive"
                },
                {
                  "fixtureId": 1550124,
                  "teamId": 496,
                  "playerId": 116,
                  "player": "K. Thuram",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1550124,
                  "teamId": 496,
                  "playerId": 339883,
                  "player": "K. Yildiz",
                  "type": "Missing Fixture",
                  "reason": "Foot Injury"
                },
                {
                  "fixtureId": 1550124,
                  "teamId": 496,
                  "playerId": 127011,
                  "player": "A. Cambiaso",
                  "type": "Questionable",
                  "reason": "Ankle Injury"
                },
                {
                  "fixtureId": 1550124,
                  "teamId": 496,
                  "playerId": 415,
                  "player": "W. McKennie",
                  "type": "Questionable",
                  "reason": "Muscle Injury"
                }
              ],
              "lineupsChecked": true,
              "lineups": [
                {
                  "teamId": 488,
                  "team": "Sassuolo",
                  "formation": "4-2-3-1",
                  "coach": "Alberto Aquilani",
                  "starters": [
                    "Arijanet Murić",
                    "Simone Cinquegrano",
                    "Jay Idzes",
                    "Fedde Leysen",
                    "Josh Doig",
                    "Nemanja Matić",
                    "Luca Lipani",
                    "Domenico Berardi",
                    "Kristian Thorstvedt",
                    "Armand Laurienté",
                    "Sebastiano Esposito"
                  ]
                },
                {
                  "teamId": 496,
                  "team": "Juventus",
                  "formation": "4-2-3-1",
                  "coach": "Luciano Spalletti",
                  "starters": [
                    "Guglielmo Vicario",
                    "Pierre Kalulu",
                    "Gleison Bremer",
                    "Jhon Lucumí",
                    "Zeki Çelik",
                    "Douglas Luiz",
                    "Teun Koopmeiners",
                    "Francisco Conceição",
                    "Nicolás González",
                    "Kerim Alajbegović",
                    "Randal Kolo Muani"
                  ]
                }
              ]
            }
          ],
          "standingsUpdatedAt": "2026-09-14T08:49:13.092Z"
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
                "goalsFor": 9,
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
              "points": 9,
              "goalsDiff": 6,
              "form": "WWW",
              "all": {
                "played": 3,
                "wins": 3,
                "draws": 0,
                "losses": 0,
                "goalsFor": 8,
                "goalsAgainst": 2
              },
              "home": {
                "played": 2,
                "wins": 2,
                "draws": 0,
                "losses": 0,
                "goalsFor": 5,
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
              "teamId": 170,
              "team": "FC Augsburg",
              "rank": 3,
              "points": 7,
              "goalsDiff": 6,
              "form": "DWW",
              "all": {
                "played": 3,
                "wins": 2,
                "draws": 1,
                "losses": 0,
                "goalsFor": 9,
                "goalsAgainst": 3
              },
              "home": {
                "played": 2,
                "wins": 1,
                "draws": 1,
                "losses": 0,
                "goalsFor": 5,
                "goalsAgainst": 2
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
              "teamId": 157,
              "team": "Bayern München",
              "rank": 4,
              "points": 7,
              "goalsDiff": 5,
              "form": "WDW",
              "all": {
                "played": 3,
                "wins": 2,
                "draws": 1,
                "losses": 0,
                "goalsFor": 7,
                "goalsAgainst": 2
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
                "played": 2,
                "wins": 1,
                "draws": 1,
                "losses": 0,
                "goalsFor": 2,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 173,
              "team": "RB Leipzig",
              "rank": 5,
              "points": 6,
              "goalsDiff": 6,
              "form": "WLW",
              "all": {
                "played": 3,
                "wins": 2,
                "draws": 0,
                "losses": 1,
                "goalsFor": 9,
                "goalsAgainst": 3
              },
              "home": {
                "played": 2,
                "wins": 2,
                "draws": 0,
                "losses": 0,
                "goalsFor": 8,
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
              "teamId": 1660,
              "team": "SV Elversberg",
              "rank": 6,
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
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 4,
                "goalsAgainst": 4
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
              "teamId": 168,
              "team": "Bayer Leverkusen",
              "rank": 7,
              "points": 4,
              "goalsDiff": 3,
              "form": "DWL",
              "all": {
                "played": 3,
                "wins": 1,
                "draws": 1,
                "losses": 1,
                "goalsFor": 8,
                "goalsAgainst": 5
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
                "played": 2,
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 4,
                "goalsAgainst": 5
              }
            },
            {
              "teamId": 164,
              "team": "FSV Mainz 05",
              "rank": 8,
              "points": 4,
              "goalsDiff": 3,
              "form": "LWD",
              "all": {
                "played": 3,
                "wins": 1,
                "draws": 1,
                "losses": 1,
                "goalsFor": 6,
                "goalsAgainst": 3
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
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 5,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 169,
              "team": "Eintracht Frankfurt",
              "rank": 9,
              "points": 4,
              "goalsDiff": -1,
              "form": "WLD",
              "all": {
                "played": 3,
                "wins": 1,
                "draws": 1,
                "losses": 1,
                "goalsFor": 7,
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
                "draws": 1,
                "losses": 0,
                "goalsFor": 6,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 162,
              "team": "Werder Bremen",
              "rank": 10,
              "points": 4,
              "goalsDiff": -1,
              "form": "DWL",
              "all": {
                "played": 3,
                "wins": 1,
                "draws": 1,
                "losses": 1,
                "goalsFor": 5,
                "goalsAgainst": 6
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
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 2,
                "goalsAgainst": 5
              }
            },
            {
              "teamId": 174,
              "team": "FC Schalke 04",
              "rank": 11,
              "points": 4,
              "goalsDiff": -1,
              "form": "WDL",
              "all": {
                "played": 3,
                "wins": 1,
                "draws": 1,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 4
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
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 192,
              "team": "1. FC Köln",
              "rank": 12,
              "points": 4,
              "goalsDiff": -2,
              "form": "DLW",
              "all": {
                "played": 3,
                "wins": 1,
                "draws": 1,
                "losses": 1,
                "goalsFor": 5,
                "goalsAgainst": 7
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
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 1,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 167,
              "team": "1899 Hoffenheim",
              "rank": 13,
              "points": 3,
              "goalsDiff": -1,
              "form": "WLL",
              "all": {
                "played": 3,
                "wins": 1,
                "draws": 0,
                "losses": 2,
                "goalsFor": 6,
                "goalsAgainst": 7
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
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 2,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 172,
              "team": "VfB Stuttgart",
              "rank": 14,
              "points": 3,
              "goalsDiff": -2,
              "form": "LWL",
              "all": {
                "played": 3,
                "wins": 1,
                "draws": 0,
                "losses": 2,
                "goalsFor": 6,
                "goalsAgainst": 8
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
                "played": 2,
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 2,
                "goalsAgainst": 7
              }
            },
            {
              "teamId": 185,
              "team": "SC Paderborn 07",
              "rank": 15,
              "points": 1,
              "goalsDiff": -4,
              "form": "LLD",
              "all": {
                "played": 3,
                "wins": 0,
                "draws": 1,
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
                "goalsAgainst": 1
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
              "teamId": 182,
              "team": "Union Berlin",
              "rank": 16,
              "points": 1,
              "goalsDiff": -6,
              "form": "LLD",
              "all": {
                "played": 3,
                "wins": 0,
                "draws": 1,
                "losses": 2,
                "goalsFor": 4,
                "goalsAgainst": 10
              },
              "home": {
                "played": 2,
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 4,
                "goalsAgainst": 6
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
              "teamId": 163,
              "team": "Borussia Mönchengladbach",
              "rank": 17,
              "points": 0,
              "goalsDiff": -9,
              "form": "LLL",
              "all": {
                "played": 3,
                "wins": 0,
                "draws": 0,
                "losses": 3,
                "goalsFor": 3,
                "goalsAgainst": 12
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
                "played": 2,
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 0,
                "goalsAgainst": 8
              }
            },
            {
              "teamId": 175,
              "team": "Hamburger SV",
              "rank": 18,
              "points": 0,
              "goalsDiff": -12,
              "form": "LLL",
              "all": {
                "played": 3,
                "wins": 0,
                "draws": 0,
                "losses": 3,
                "goalsFor": 0,
                "goalsAgainst": 12
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
                "draws": 0,
                "losses": 2,
                "goalsFor": 0,
                "goalsAgainst": 7
              }
            }
          ],
          "teams": [
            {
              "teamId": 1660,
              "team": "SV Elversberg",
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
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 4,
                "goalsAgainst": 4
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
              "form": "WDW",
              "all": {
                "played": 3,
                "wins": 2,
                "draws": 1,
                "losses": 0,
                "goalsFor": 7,
                "goalsAgainst": 2
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
                "played": 2,
                "wins": 1,
                "draws": 1,
                "losses": 0,
                "goalsFor": 2,
                "goalsAgainst": 1
              }
            }
          ],
          "fixtures": [
            {
              "fixtureId": 1575166,
              "kickoff": "2026-09-14T00:30:00+09:00",
              "status": "FT",
              "homeTeamId": 1660,
              "homeTeam": "SV Elversberg",
              "awayTeamId": 157,
              "awayTeam": "Bayern München",
              "injuriesChecked": true,
              "injuries": [
                {
                  "fixtureId": 1575166,
                  "teamId": 1660,
                  "playerId": 583807,
                  "player": "L. Seifert",
                  "type": "Missing Fixture",
                  "reason": "Ankle Injury"
                },
                {
                  "fixtureId": 1575166,
                  "teamId": 1660,
                  "playerId": 177362,
                  "player": "T. Zimmerschied",
                  "type": "Missing Fixture",
                  "reason": "Back Injury"
                },
                {
                  "fixtureId": 1575166,
                  "teamId": 157,
                  "playerId": 330612,
                  "player": "T. Buchmann",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1575166,
                  "teamId": 157,
                  "playerId": 510,
                  "player": "S. Gnabry",
                  "type": "Questionable",
                  "reason": "Muscle Injury"
                }
              ],
              "lineupsChecked": true,
              "lineups": [
                {
                  "teamId": 1660,
                  "team": "SV Elversberg",
                  "formation": "4-2-3-1",
                  "coach": "V. Wagner",
                  "starters": [
                    "N. Kristof",
                    "J. Gyamerah",
                    "L. Pinckert",
                    "M. Rohr",
                    "L. Günther",
                    "F. Keidel",
                    "Ł. Poręba",
                    "L. Petkov",
                    "Francis-Ikechukwu Onyeka",
                    "William Cole Campbell",
                    "D. Mokwa"
                  ]
                },
                {
                  "teamId": 157,
                  "team": "Bayern München",
                  "formation": "4-2-3-1",
                  "coach": "V. Kompany",
                  "starters": [
                    "J. Urbig",
                    "J. Stanišić",
                    "D. Upamecano",
                    "Kim Min-Jae",
                    "N. Brown",
                    "A. Pavlović",
                    "T. Bischof",
                    "L. Karl",
                    "M. Olise",
                    "I. Saibari",
                    "H. Kane"
                  ]
                }
              ]
            }
          ],
          "standingsUpdatedAt": "2026-09-14T08:49:13.092Z"
        },
        {
          "key": "LIGUE1",
          "leagueId": 61,
          "season": "2026",
          "standings": [
            {
              "teamId": 79,
              "team": "Lille",
              "rank": 1,
              "points": 10,
              "goalsDiff": 5,
              "form": "WWDW",
              "all": {
                "played": 4,
                "wins": 3,
                "draws": 1,
                "losses": 0,
                "goalsFor": 7,
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
                "played": 2,
                "wins": 2,
                "draws": 0,
                "losses": 0,
                "goalsFor": 3,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 91,
              "team": "Monaco",
              "rank": 2,
              "points": 10,
              "goalsDiff": 4,
              "form": "DWWW",
              "all": {
                "played": 4,
                "wins": 3,
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
                "goalsFor": 2,
                "goalsAgainst": 0
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
              "teamId": 94,
              "team": "Rennes",
              "rank": 3,
              "points": 10,
              "goalsDiff": 3,
              "form": "WWWD",
              "all": {
                "played": 4,
                "wins": 3,
                "draws": 1,
                "losses": 0,
                "goalsFor": 8,
                "goalsAgainst": 5
              },
              "home": {
                "played": 3,
                "wins": 2,
                "draws": 1,
                "losses": 0,
                "goalsFor": 6,
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
              "teamId": 80,
              "team": "Lyon",
              "rank": 4,
              "points": 8,
              "goalsDiff": 4,
              "form": "DWDW",
              "all": {
                "played": 4,
                "wins": 2,
                "draws": 2,
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
                "played": 2,
                "wins": 1,
                "draws": 1,
                "losses": 0,
                "goalsFor": 2,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 114,
              "team": "Paris FC",
              "rank": 5,
              "points": 8,
              "goalsDiff": 4,
              "form": "DWWD",
              "all": {
                "played": 4,
                "wins": 2,
                "draws": 2,
                "losses": 0,
                "goalsFor": 6,
                "goalsAgainst": 2
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
                "played": 2,
                "wins": 1,
                "draws": 1,
                "losses": 0,
                "goalsFor": 3,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 95,
              "team": "Strasbourg",
              "rank": 6,
              "points": 7,
              "goalsDiff": 1,
              "form": "DWWL",
              "all": {
                "played": 4,
                "wins": 2,
                "draws": 1,
                "losses": 1,
                "goalsFor": 9,
                "goalsAgainst": 8
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
                "goalsFor": 6,
                "goalsAgainst": 6
              }
            },
            {
              "teamId": 106,
              "team": "Stade Brestois 29",
              "rank": 7,
              "points": 5,
              "goalsDiff": 0,
              "form": "LWDD",
              "all": {
                "played": 4,
                "wins": 1,
                "draws": 2,
                "losses": 1,
                "goalsFor": 6,
                "goalsAgainst": 6
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
                "wins": 1,
                "draws": 1,
                "losses": 0,
                "goalsFor": 4,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 85,
              "team": "Paris Saint Germain",
              "rank": 8,
              "points": 5,
              "goalsDiff": 0,
              "form": "WLDD",
              "all": {
                "played": 4,
                "wins": 1,
                "draws": 2,
                "losses": 1,
                "goalsFor": 6,
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
                "played": 3,
                "wins": 1,
                "draws": 2,
                "losses": 0,
                "goalsFor": 5,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 97,
              "team": "Lorient",
              "rank": 9,
              "points": 5,
              "goalsDiff": 0,
              "form": "DWLD",
              "all": {
                "played": 4,
                "wins": 1,
                "draws": 2,
                "losses": 1,
                "goalsFor": 4,
                "goalsAgainst": 4
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
                "wins": 1,
                "draws": 1,
                "losses": 0,
                "goalsFor": 1,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 116,
              "team": "Lens",
              "rank": 10,
              "points": 4,
              "goalsDiff": 1,
              "form": "DLLW",
              "all": {
                "played": 4,
                "wins": 1,
                "draws": 1,
                "losses": 2,
                "goalsFor": 8,
                "goalsAgainst": 7
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
                "played": 2,
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 77,
              "team": "Angers",
              "rank": 11,
              "points": 4,
              "goalsDiff": -1,
              "form": "DLWL",
              "all": {
                "played": 4,
                "wins": 1,
                "draws": 1,
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
                "played": 2,
                "wins": 1,
                "draws": 1,
                "losses": 0,
                "goalsFor": 3,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 110,
              "team": "Estac Troyes",
              "rank": 12,
              "points": 4,
              "goalsDiff": -5,
              "form": "LLWD",
              "all": {
                "played": 4,
                "wins": 1,
                "draws": 1,
                "losses": 2,
                "goalsFor": 4,
                "goalsAgainst": 9
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
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 2,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 81,
              "team": "Marseille",
              "rank": 13,
              "points": 3,
              "goalsDiff": 0,
              "form": "LLLW",
              "all": {
                "played": 4,
                "wins": 1,
                "draws": 0,
                "losses": 3,
                "goalsFor": 6,
                "goalsAgainst": 6
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
                "played": 2,
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 0,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 1298,
              "team": "Le Mans",
              "rank": 14,
              "points": 3,
              "goalsDiff": -1,
              "form": "DDLD",
              "all": {
                "played": 4,
                "wins": 0,
                "draws": 3,
                "losses": 1,
                "goalsFor": 7,
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
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 108,
              "team": "Auxerre",
              "rank": 15,
              "points": 3,
              "goalsDiff": -6,
              "form": "WLLL",
              "all": {
                "played": 4,
                "wins": 1,
                "draws": 0,
                "losses": 3,
                "goalsFor": 5,
                "goalsAgainst": 11
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
                "played": 2,
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 3,
                "goalsAgainst": 8
              }
            },
            {
              "teamId": 111,
              "team": "Le Havre",
              "rank": 16,
              "points": 2,
              "goalsDiff": -2,
              "form": "DLDL",
              "all": {
                "played": 4,
                "wins": 0,
                "draws": 2,
                "losses": 2,
                "goalsFor": 2,
                "goalsAgainst": 4
              },
              "home": {
                "played": 3,
                "wins": 0,
                "draws": 1,
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
              "points": 2,
              "goalsDiff": -3,
              "form": "DLDL",
              "all": {
                "played": 4,
                "wins": 0,
                "draws": 2,
                "losses": 2,
                "goalsFor": 4,
                "goalsAgainst": 7
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
                "wins": 0,
                "draws": 2,
                "losses": 0,
                "goalsFor": 4,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 84,
              "team": "Nice",
              "rank": 18,
              "points": 2,
              "goalsDiff": -4,
              "form": "LDLD",
              "all": {
                "played": 4,
                "wins": 0,
                "draws": 2,
                "losses": 2,
                "goalsFor": 1,
                "goalsAgainst": 5
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
                "goalsAgainst": 4
              }
            }
          ],
          "teams": [
            {
              "teamId": 1298,
              "team": "Le Mans",
              "form": "DLDD",
              "all": {
                "played": 4,
                "wins": 0,
                "draws": 3,
                "losses": 1,
                "goalsFor": 7,
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
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 116,
              "team": "Lens",
              "form": "WLLD",
              "all": {
                "played": 4,
                "wins": 1,
                "draws": 1,
                "losses": 2,
                "goalsFor": 8,
                "goalsAgainst": 7
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
                "played": 2,
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 106,
              "team": "Stade Brestois 29",
              "form": "DDWL",
              "all": {
                "played": 4,
                "wins": 1,
                "draws": 2,
                "losses": 1,
                "goalsFor": 6,
                "goalsAgainst": 6
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
                "wins": 1,
                "draws": 1,
                "losses": 0,
                "goalsFor": 4,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 85,
              "team": "Paris Saint Germain",
              "form": "DDLW",
              "all": {
                "played": 4,
                "wins": 1,
                "draws": 2,
                "losses": 1,
                "goalsFor": 6,
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
              "fixtureId": 1552759,
              "kickoff": "2026-09-14T00:15:00+09:00",
              "status": "FT",
              "homeTeamId": 1298,
              "homeTeam": "Le Mans",
              "awayTeamId": 116,
              "awayTeam": "Lens",
              "injuriesChecked": true,
              "injuries": [
                {
                  "fixtureId": 1552759,
                  "teamId": 1298,
                  "playerId": 21448,
                  "player": "L. Buades",
                  "type": "Missing Fixture",
                  "reason": "Knock"
                },
                {
                  "fixtureId": 1552759,
                  "teamId": 1298,
                  "playerId": 174939,
                  "player": "E. Colas",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1552759,
                  "teamId": 1298,
                  "playerId": 270515,
                  "player": "T. Eyoum",
                  "type": "Missing Fixture",
                  "reason": "Coach's decision"
                },
                {
                  "fixtureId": 1552759,
                  "teamId": 1298,
                  "playerId": 381116,
                  "player": "W. Harhouz",
                  "type": "Missing Fixture",
                  "reason": "Coach's decision"
                },
                {
                  "fixtureId": 1552759,
                  "teamId": 1298,
                  "playerId": 24259,
                  "player": "E. Quarshie",
                  "type": "Missing Fixture",
                  "reason": "Coach's decision"
                },
                {
                  "fixtureId": 1552759,
                  "teamId": 1298,
                  "playerId": 349631,
                  "player": "M. Rossignol",
                  "type": "Missing Fixture",
                  "reason": "Coach's decision"
                },
                {
                  "fixtureId": 1552759,
                  "teamId": 116,
                  "playerId": 44594,
                  "player": "S. Abdulhamid",
                  "type": "Missing Fixture",
                  "reason": "Contusion"
                },
                {
                  "fixtureId": 1552759,
                  "teamId": 116,
                  "playerId": 322984,
                  "player": "S. Baidoo",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1552759,
                  "teamId": 116,
                  "playerId": 237191,
                  "player": "J. Chavez",
                  "type": "Missing Fixture",
                  "reason": "Thigh Injury"
                },
                {
                  "fixtureId": 1552759,
                  "teamId": 116,
                  "playerId": 178708,
                  "player": "M. Nawrocki",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1552759,
                  "teamId": 116,
                  "playerId": 437139,
                  "player": "S. Sagnan",
                  "type": "Missing Fixture",
                  "reason": "Red Card"
                },
                {
                  "fixtureId": 1552759,
                  "teamId": 116,
                  "playerId": 327599,
                  "player": "Y. Titraoui",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                }
              ],
              "lineupsChecked": true,
              "lineups": [
                {
                  "teamId": 1298,
                  "team": "Le Mans",
                  "formation": "3-1-4-2",
                  "coach": "P. Videira",
                  "starters": [
                    "E. Hatfout",
                    "N. Boissé",
                    "S. Yohou",
                    "H. Voyer",
                    "L. Bretelle",
                    "R. Bamba",
                    "A. Bourabaa",
                    "J. Vercruysse",
                    "L. Calodat",
                    "L. Mafouta",
                    "D. Guèye"
                  ]
                },
                {
                  "teamId": 116,
                  "team": "Lens",
                  "formation": "3-4-2-1",
                  "coach": "D. Toppmöller",
                  "starters": [
                    "R. Risser",
                    "J. Gradit",
                    "K. Antonio",
                    "M. Udol",
                    "R. Aguilar",
                    "M. Cuisance",
                    "A. Bulatović",
                    "M. Skóraś",
                    "A. Sima",
                    "F. Thauvin",
                    "O. Édouard"
                  ]
                }
              ]
            },
            {
              "fixtureId": 1552757,
              "kickoff": "2026-09-14T03:45:00+09:00",
              "status": "FT",
              "homeTeamId": 106,
              "homeTeam": "Stade Brestois 29",
              "awayTeamId": 85,
              "awayTeam": "Paris Saint Germain",
              "injuriesChecked": true,
              "injuries": [
                {
                  "fixtureId": 1552757,
                  "teamId": 106,
                  "playerId": 158587,
                  "player": "R. Cagnon",
                  "type": "Missing Fixture",
                  "reason": "Shoulder Injury"
                },
                {
                  "fixtureId": 1552757,
                  "teamId": 106,
                  "playerId": 20546,
                  "player": "B. Chardonnet",
                  "type": "Missing Fixture",
                  "reason": "Calf Injury"
                },
                {
                  "fixtureId": 1552757,
                  "teamId": 106,
                  "playerId": 302915,
                  "player": "M. Diambou",
                  "type": "Missing Fixture",
                  "reason": "Ankle Injury"
                },
                {
                  "fixtureId": 1552757,
                  "teamId": 106,
                  "playerId": 430816,
                  "player": "N. Edjouma",
                  "type": "Missing Fixture",
                  "reason": "Muscle Injury"
                }
              ],
              "lineupsChecked": true,
              "lineups": [
                {
                  "teamId": 106,
                  "team": "Stade Brestois 29",
                  "formation": "4-2-3-1",
                  "coach": "Julien Lachuer",
                  "starters": [
                    "E. Selvik",
                    "K. Lala",
                    "R. Le Guen",
                    "G. Lloris",
                    "B. Locko",
                    "J. Chotard",
                    "H. Magnetti",
                    "G. Versini",
                    "K. Doumbia",
                    "P. Mboup",
                    "L. Ajorque"
                  ]
                },
                {
                  "teamId": 85,
                  "team": "Paris Saint Germain",
                  "formation": "4-3-3",
                  "coach": "Luis Enrique",
                  "starters": [
                    "M. Safonov",
                    "A. Hakimi",
                    "Marquinhos",
                    "W. Pacho",
                    "Nuno Mendes",
                    "W. Zaïre-Emery",
                    "Vitinha",
                    "João Neves",
                    "O. Dembélé",
                    "Ferran Torres",
                    "K. Kvaratskhelia"
                  ]
                }
              ]
            }
          ],
          "standingsUpdatedAt": "2026-09-14T08:49:13.092Z"
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
              "points": 16,
              "goalsDiff": 15,
              "form": "WWWWW",
              "all": {
                "played": 6,
                "wins": 5,
                "draws": 1,
                "losses": 0,
                "goalsFor": 22,
                "goalsAgainst": 7
              },
              "home": {
                "played": 3,
                "wins": 2,
                "draws": 1,
                "losses": 0,
                "goalsFor": 11,
                "goalsAgainst": 4
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
              "points": 16,
              "goalsDiff": 11,
              "form": "DWWWW",
              "all": {
                "played": 6,
                "wins": 5,
                "draws": 1,
                "losses": 0,
                "goalsFor": 17,
                "goalsAgainst": 6
              },
              "home": {
                "played": 3,
                "wins": 2,
                "draws": 1,
                "losses": 0,
                "goalsFor": 8,
                "goalsAgainst": 3
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
              "teamId": 209,
              "team": "Feyenoord",
              "rank": 3,
              "points": 14,
              "goalsDiff": 13,
              "form": "WWDWD",
              "all": {
                "played": 6,
                "wins": 4,
                "draws": 2,
                "losses": 0,
                "goalsFor": 20,
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
                "played": 4,
                "wins": 4,
                "draws": 0,
                "losses": 0,
                "goalsFor": 16,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 415,
              "team": "Twente",
              "rank": 4,
              "points": 13,
              "goalsDiff": 7,
              "form": "WWDWW",
              "all": {
                "played": 6,
                "wins": 4,
                "draws": 1,
                "losses": 1,
                "goalsFor": 12,
                "goalsAgainst": 5
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
                "played": 3,
                "wins": 1,
                "draws": 1,
                "losses": 1,
                "goalsFor": 6,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 194,
              "team": "Ajax",
              "rank": 5,
              "points": 10,
              "goalsDiff": 8,
              "form": "WLWDW",
              "all": {
                "played": 5,
                "wins": 3,
                "draws": 1,
                "losses": 1,
                "goalsFor": 14,
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
                "played": 3,
                "wins": 3,
                "draws": 0,
                "losses": 0,
                "goalsFor": 11,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 196,
              "team": "Excelsior",
              "rank": 6,
              "points": 10,
              "goalsDiff": 6,
              "form": "LDWWL",
              "all": {
                "played": 6,
                "wins": 3,
                "draws": 1,
                "losses": 2,
                "goalsFor": 13,
                "goalsAgainst": 7
              },
              "home": {
                "played": 3,
                "wins": 1,
                "draws": 0,
                "losses": 2,
                "goalsFor": 4,
                "goalsAgainst": 5
              },
              "away": {
                "played": 3,
                "wins": 2,
                "draws": 1,
                "losses": 0,
                "goalsFor": 9,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 205,
              "team": "Fortuna Sittard",
              "rank": 7,
              "points": 10,
              "goalsDiff": -2,
              "form": "LWWLW",
              "all": {
                "played": 6,
                "wins": 3,
                "draws": 1,
                "losses": 2,
                "goalsFor": 12,
                "goalsAgainst": 14
              },
              "home": {
                "played": 3,
                "wins": 1,
                "draws": 0,
                "losses": 2,
                "goalsFor": 4,
                "goalsAgainst": 8
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
              "teamId": 410,
              "team": "GO Ahead Eagles",
              "rank": 8,
              "points": 9,
              "goalsDiff": 2,
              "form": "DDLWD",
              "all": {
                "played": 6,
                "wins": 2,
                "draws": 3,
                "losses": 1,
                "goalsFor": 15,
                "goalsAgainst": 13
              },
              "home": {
                "played": 3,
                "wins": 2,
                "draws": 1,
                "losses": 0,
                "goalsFor": 8,
                "goalsAgainst": 3
              },
              "away": {
                "played": 3,
                "wins": 0,
                "draws": 2,
                "losses": 1,
                "goalsFor": 7,
                "goalsAgainst": 10
              }
            },
            {
              "teamId": 202,
              "team": "Groningen",
              "rank": 9,
              "points": 8,
              "goalsDiff": -1,
              "form": "DDLLW",
              "all": {
                "played": 6,
                "wins": 2,
                "draws": 2,
                "losses": 2,
                "goalsFor": 12,
                "goalsAgainst": 13
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
                "played": 3,
                "wins": 1,
                "draws": 1,
                "losses": 1,
                "goalsFor": 6,
                "goalsAgainst": 7
              }
            },
            {
              "teamId": 413,
              "team": "NEC Nijmegen",
              "rank": 10,
              "points": 7,
              "goalsDiff": -1,
              "form": "LDLWW",
              "all": {
                "played": 6,
                "wins": 2,
                "draws": 1,
                "losses": 3,
                "goalsFor": 11,
                "goalsAgainst": 12
              },
              "home": {
                "played": 3,
                "wins": 0,
                "draws": 1,
                "losses": 2,
                "goalsFor": 4,
                "goalsAgainst": 7
              },
              "away": {
                "played": 3,
                "wins": 2,
                "draws": 0,
                "losses": 1,
                "goalsFor": 7,
                "goalsAgainst": 5
              }
            },
            {
              "teamId": 210,
              "team": "Heerenveen",
              "rank": 11,
              "points": 6,
              "goalsDiff": -2,
              "form": "DLDLD",
              "all": {
                "played": 6,
                "wins": 1,
                "draws": 3,
                "losses": 2,
                "goalsFor": 7,
                "goalsAgainst": 9
              },
              "home": {
                "played": 4,
                "wins": 1,
                "draws": 1,
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
              "teamId": 426,
              "team": "Sparta Rotterdam",
              "rank": 12,
              "points": 5,
              "goalsDiff": -3,
              "form": "LDLDW",
              "all": {
                "played": 6,
                "wins": 1,
                "draws": 2,
                "losses": 3,
                "goalsFor": 10,
                "goalsAgainst": 13
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
                "played": 3,
                "wins": 1,
                "draws": 0,
                "losses": 2,
                "goalsFor": 5,
                "goalsAgainst": 7
              }
            },
            {
              "teamId": 427,
              "team": "Telstar",
              "rank": 13,
              "points": 5,
              "goalsDiff": -6,
              "form": "DLDLL",
              "all": {
                "played": 6,
                "wins": 1,
                "draws": 2,
                "losses": 3,
                "goalsFor": 5,
                "goalsAgainst": 11
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
                "played": 3,
                "wins": 1,
                "draws": 1,
                "losses": 1,
                "goalsFor": 2,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 207,
              "team": "Utrecht",
              "rank": 14,
              "points": 5,
              "goalsDiff": -8,
              "form": "WDLDL",
              "all": {
                "played": 6,
                "wins": 1,
                "draws": 2,
                "losses": 3,
                "goalsFor": 11,
                "goalsAgainst": 19
              },
              "home": {
                "played": 3,
                "wins": 0,
                "draws": 1,
                "losses": 2,
                "goalsFor": 5,
                "goalsAgainst": 13
              },
              "away": {
                "played": 3,
                "wins": 1,
                "draws": 1,
                "losses": 1,
                "goalsFor": 6,
                "goalsAgainst": 6
              }
            },
            {
              "teamId": 420,
              "team": "Cambuur",
              "rank": 15,
              "points": 4,
              "goalsDiff": -9,
              "form": "WDLLL",
              "all": {
                "played": 6,
                "wins": 1,
                "draws": 1,
                "losses": 4,
                "goalsFor": 9,
                "goalsAgainst": 18
              },
              "home": {
                "played": 4,
                "wins": 1,
                "draws": 0,
                "losses": 3,
                "goalsFor": 6,
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
            },
            {
              "teamId": 193,
              "team": "PEC Zwolle",
              "rank": 16,
              "points": 4,
              "goalsDiff": -11,
              "form": "LDLWL",
              "all": {
                "played": 6,
                "wins": 1,
                "draws": 1,
                "losses": 4,
                "goalsFor": 6,
                "goalsAgainst": 17
              },
              "home": {
                "played": 3,
                "wins": 0,
                "draws": 0,
                "losses": 3,
                "goalsFor": 1,
                "goalsAgainst": 12
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
              "teamId": 195,
              "team": "Willem II",
              "rank": 17,
              "points": 2,
              "goalsDiff": -9,
              "form": "DLDLL",
              "all": {
                "played": 5,
                "wins": 0,
                "draws": 2,
                "losses": 3,
                "goalsFor": 5,
                "goalsAgainst": 14
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
                "played": 2,
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 2,
                "goalsAgainst": 5
              }
            },
            {
              "teamId": 198,
              "team": "ADO Den Haag",
              "rank": 18,
              "points": 1,
              "goalsDiff": -10,
              "form": "LLDLL",
              "all": {
                "played": 6,
                "wins": 0,
                "draws": 1,
                "losses": 5,
                "goalsFor": 6,
                "goalsAgainst": 16
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
                "played": 4,
                "wins": 0,
                "draws": 1,
                "losses": 3,
                "goalsFor": 3,
                "goalsAgainst": 9
              }
            }
          ],
          "teams": [
            {
              "teamId": 197,
              "team": "PSV Eindhoven",
              "form": "DWWWWW",
              "all": {
                "played": 6,
                "wins": 5,
                "draws": 1,
                "losses": 0,
                "goalsFor": 22,
                "goalsAgainst": 7
              },
              "home": {
                "played": 3,
                "wins": 2,
                "draws": 1,
                "losses": 0,
                "goalsFor": 11,
                "goalsAgainst": 4
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
              "teamId": 426,
              "team": "Sparta Rotterdam",
              "form": "LWDLDL",
              "all": {
                "played": 6,
                "wins": 1,
                "draws": 2,
                "losses": 3,
                "goalsFor": 10,
                "goalsAgainst": 13
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
                "played": 3,
                "wins": 1,
                "draws": 0,
                "losses": 2,
                "goalsFor": 5,
                "goalsAgainst": 7
              }
            }
          ],
          "fixtures": [
            {
              "fixtureId": 1552169,
              "kickoff": "2026-09-14T03:00:00+09:00",
              "status": "FT",
              "homeTeamId": 197,
              "homeTeam": "PSV Eindhoven",
              "awayTeamId": 426,
              "awayTeam": "Sparta Rotterdam",
              "injuriesChecked": true,
              "injuries": [
                {
                  "fixtureId": 1552169,
                  "teamId": 197,
                  "playerId": 508061,
                  "player": "M. Bro Hansen",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1552169,
                  "teamId": 197,
                  "playerId": 36987,
                  "player": "S. Lammers",
                  "type": "Missing Fixture",
                  "reason": "Lacking Match Fitness"
                },
                {
                  "fixtureId": 1552169,
                  "teamId": 197,
                  "playerId": 378864,
                  "player": "S. Ouaissa",
                  "type": "Missing Fixture",
                  "reason": "Muscle Injury"
                },
                {
                  "fixtureId": 1552169,
                  "teamId": 197,
                  "playerId": 25646,
                  "player": "A. Plea",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1552169,
                  "teamId": 197,
                  "playerId": 37890,
                  "player": "J. Schouten",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1552169,
                  "teamId": 197,
                  "playerId": 191233,
                  "player": "K. Sildillia",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1552169,
                  "teamId": 426,
                  "playerId": 525881,
                  "player": "R. van Cruijsen",
                  "type": "Questionable",
                  "reason": "Injury"
                }
              ],
              "lineupsChecked": true,
              "lineups": [
                {
                  "teamId": 197,
                  "team": "PSV Eindhoven",
                  "formation": "4-3-3",
                  "coach": "P. Bosz",
                  "starters": [
                    "M. Kovář",
                    "S. Dest",
                    "L. Geertruida",
                    "A. Obispo",
                    "Mauro Júnior",
                    "G. Til",
                    "P. Wanner",
                    "K. Sano",
                    "E. Bajraktarevic",
                    "S. Mijnans",
                    "A. Bouhamdi"
                  ]
                },
                {
                  "teamId": 426,
                  "team": "Sparta Rotterdam",
                  "formation": "3-4-2-1",
                  "coach": "R. Meijer",
                  "starters": [
                    "M. Brouwer",
                    "M. Young",
                    "N. Verschuren",
                    "B. Martins Indi",
                    "L. Martes",
                    "J. Baas",
                    "Cedric Hatenboer",
                    "B. Kuipers",
                    "C. Terho",
                    "M. van Bergen",
                    "M. Zonneveld"
                  ]
                }
              ]
            }
          ],
          "standingsUpdatedAt": "2026-09-14T08:49:13.092Z"
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
              "points": 18,
              "goalsDiff": 13,
              "form": "WWWWW",
              "all": {
                "played": 6,
                "wins": 6,
                "draws": 0,
                "losses": 0,
                "goalsFor": 15,
                "goalsAgainst": 2
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
                "played": 3,
                "wins": 3,
                "draws": 0,
                "losses": 0,
                "goalsFor": 9,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 211,
              "team": "Benfica",
              "rank": 2,
              "points": 16,
              "goalsDiff": 17,
              "form": "WWWWW",
              "all": {
                "played": 6,
                "wins": 5,
                "draws": 1,
                "losses": 0,
                "goalsFor": 21,
                "goalsAgainst": 4
              },
              "home": {
                "played": 3,
                "wins": 2,
                "draws": 1,
                "losses": 0,
                "goalsFor": 7,
                "goalsAgainst": 4
              },
              "away": {
                "played": 3,
                "wins": 3,
                "draws": 0,
                "losses": 0,
                "goalsFor": 14,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 228,
              "team": "Sporting CP",
              "rank": 3,
              "points": 14,
              "goalsDiff": 9,
              "form": "DWWWW",
              "all": {
                "played": 6,
                "wins": 4,
                "draws": 2,
                "losses": 0,
                "goalsFor": 15,
                "goalsAgainst": 6
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
                "played": 3,
                "wins": 1,
                "draws": 2,
                "losses": 0,
                "goalsFor": 7,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 227,
              "team": "Santa Clara",
              "rank": 4,
              "points": 14,
              "goalsDiff": 7,
              "form": "WWDWW",
              "all": {
                "played": 6,
                "wins": 4,
                "draws": 2,
                "losses": 0,
                "goalsFor": 11,
                "goalsAgainst": 4
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
                "played": 3,
                "wins": 2,
                "draws": 1,
                "losses": 0,
                "goalsFor": 4,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 240,
              "team": "Arouca",
              "rank": 5,
              "points": 10,
              "goalsDiff": 3,
              "form": "LDWLW",
              "all": {
                "played": 6,
                "wins": 3,
                "draws": 1,
                "losses": 2,
                "goalsFor": 8,
                "goalsAgainst": 5
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
                "played": 3,
                "wins": 1,
                "draws": 1,
                "losses": 1,
                "goalsFor": 1,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 15130,
              "team": "Estrela",
              "rank": 6,
              "points": 9,
              "goalsDiff": 2,
              "form": "WDWDD",
              "all": {
                "played": 5,
                "wins": 2,
                "draws": 3,
                "losses": 0,
                "goalsFor": 11,
                "goalsAgainst": 9
              },
              "home": {
                "played": 3,
                "wins": 1,
                "draws": 2,
                "losses": 0,
                "goalsFor": 6,
                "goalsAgainst": 5
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
              "rank": 7,
              "points": 8,
              "goalsDiff": -2,
              "form": "WWLDL",
              "all": {
                "played": 6,
                "wins": 2,
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
                "goalsFor": 2,
                "goalsAgainst": 5
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
              "teamId": 217,
              "team": "SC Braga",
              "rank": 8,
              "points": 7,
              "goalsDiff": 1,
              "form": "LWWD",
              "all": {
                "played": 4,
                "wins": 2,
                "draws": 1,
                "losses": 1,
                "goalsFor": 6,
                "goalsAgainst": 5
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
                "goalsFor": 5,
                "goalsAgainst": 5
              }
            },
            {
              "teamId": 762,
              "team": "GIL Vicente",
              "rank": 9,
              "points": 7,
              "goalsDiff": 0,
              "form": "LLDWW",
              "all": {
                "played": 5,
                "wins": 2,
                "draws": 1,
                "losses": 2,
                "goalsFor": 4,
                "goalsAgainst": 4
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
                "played": 2,
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 1,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 214,
              "team": "Maritimo",
              "rank": 10,
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
              "teamId": 4724,
              "team": "Alverca",
              "rank": 11,
              "points": 5,
              "goalsDiff": -3,
              "form": "WLDLD",
              "all": {
                "played": 6,
                "wins": 1,
                "draws": 2,
                "losses": 3,
                "goalsFor": 8,
                "goalsAgainst": 11
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
                "played": 3,
                "wins": 1,
                "draws": 0,
                "losses": 2,
                "goalsFor": 4,
                "goalsAgainst": 6
              }
            },
            {
              "teamId": 242,
              "team": "Famalicao",
              "rank": 12,
              "points": 4,
              "goalsDiff": -2,
              "form": "DDDLL",
              "all": {
                "played": 6,
                "wins": 0,
                "draws": 4,
                "losses": 2,
                "goalsFor": 5,
                "goalsAgainst": 7
              },
              "home": {
                "played": 3,
                "wins": 0,
                "draws": 2,
                "losses": 1,
                "goalsFor": 2,
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
              "teamId": 224,
              "team": "Vitória SC",
              "rank": 13,
              "points": 4,
              "goalsDiff": -3,
              "form": "LDLWL",
              "all": {
                "played": 6,
                "wins": 1,
                "draws": 1,
                "losses": 4,
                "goalsFor": 4,
                "goalsAgainst": 7
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
                "played": 3,
                "wins": 0,
                "draws": 0,
                "losses": 3,
                "goalsFor": 3,
                "goalsAgainst": 6
              }
            },
            {
              "teamId": 225,
              "team": "Nacional",
              "rank": 14,
              "points": 4,
              "goalsDiff": -4,
              "form": "LLLLW",
              "all": {
                "played": 6,
                "wins": 1,
                "draws": 1,
                "losses": 4,
                "goalsFor": 7,
                "goalsAgainst": 11
              },
              "home": {
                "played": 3,
                "wins": 1,
                "draws": 0,
                "losses": 2,
                "goalsFor": 5,
                "goalsAgainst": 6
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
              "rank": 15,
              "points": 4,
              "goalsDiff": -8,
              "form": "LLWLD",
              "all": {
                "played": 5,
                "wins": 1,
                "draws": 1,
                "losses": 3,
                "goalsFor": 4,
                "goalsAgainst": 12
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
                "played": 3,
                "wins": 1,
                "draws": 0,
                "losses": 2,
                "goalsFor": 2,
                "goalsAgainst": 6
              }
            },
            {
              "teamId": 226,
              "team": "Rio Ave",
              "rank": 16,
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
              "rank": 17,
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
              "teamId": 4716,
              "team": "Casa Pia",
              "rank": 18,
              "points": 1,
              "goalsDiff": -14,
              "form": "LDLLL",
              "all": {
                "played": 6,
                "wins": 0,
                "draws": 1,
                "losses": 5,
                "goalsFor": 1,
                "goalsAgainst": 15
              },
              "home": {
                "played": 3,
                "wins": 0,
                "draws": 0,
                "losses": 3,
                "goalsFor": 1,
                "goalsAgainst": 12
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
              "teamId": 211,
              "team": "Benfica",
              "form": "DWWWWW",
              "all": {
                "played": 6,
                "wins": 5,
                "draws": 1,
                "losses": 0,
                "goalsFor": 21,
                "goalsAgainst": 4
              },
              "home": {
                "played": 3,
                "wins": 2,
                "draws": 1,
                "losses": 0,
                "goalsFor": 7,
                "goalsAgainst": 4
              },
              "away": {
                "played": 3,
                "wins": 3,
                "draws": 0,
                "losses": 0,
                "goalsFor": 14,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 762,
              "team": "GIL Vicente",
              "form": "WWDLL",
              "all": {
                "played": 5,
                "wins": 2,
                "draws": 1,
                "losses": 2,
                "goalsFor": 4,
                "goalsAgainst": 4
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
                "played": 2,
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 1,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 240,
              "team": "Arouca",
              "form": "WWLWDL",
              "all": {
                "played": 6,
                "wins": 3,
                "draws": 1,
                "losses": 2,
                "goalsFor": 8,
                "goalsAgainst": 5
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
                "played": 3,
                "wins": 1,
                "draws": 1,
                "losses": 1,
                "goalsFor": 1,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 227,
              "team": "Santa Clara",
              "form": "DWWDWW",
              "all": {
                "played": 6,
                "wins": 4,
                "draws": 2,
                "losses": 0,
                "goalsFor": 11,
                "goalsAgainst": 4
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
                "played": 3,
                "wins": 2,
                "draws": 1,
                "losses": 0,
                "goalsFor": 4,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 242,
              "team": "Famalicao",
              "form": "DLLDD",
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
            }
          ],
          "fixtures": [
            {
              "fixtureId": 1575493,
              "kickoff": "2026-09-14T02:00:00+09:00",
              "status": "FT",
              "homeTeamId": 211,
              "homeTeam": "Benfica",
              "awayTeamId": 762,
              "awayTeam": "GIL Vicente",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": true,
              "lineups": [
                {
                  "teamId": 211,
                  "team": "Benfica",
                  "formation": "4-2-3-1",
                  "coach": "Marco Silva",
                  "starters": [
                    "Samuel Soares",
                    "Daniel Banjaqui",
                    "Tomás Araújo",
                    "C. Lenglet",
                    "S. Dahl",
                    "E. Barrenechea",
                    "L. Barreiro",
                    "Rafa",
                    "G. Prestianni",
                    "A. Schjelderup",
                    "V. Pavlidis"
                  ]
                },
                {
                  "teamId": 762,
                  "team": "GIL Vicente",
                  "formation": "5-4-1",
                  "coach": "Luís Pinto",
                  "starters": [
                    "Lucão",
                    "Ricardo Esgaio",
                    "M. Elimbi Gilbert",
                    "Jonathan Buatu",
                    "David Moreira",
                    "Gil Pinto Martins",
                    "Murilo",
                    "Zé Carlos",
                    "A. Lausen",
                    "A. Moreira",
                    "Héctor Hernández"
                  ]
                }
              ]
            },
            {
              "fixtureId": 1575492,
              "kickoff": "2026-09-14T02:00:00+09:00",
              "status": "FT",
              "homeTeamId": 240,
              "homeTeam": "Arouca",
              "awayTeamId": 227,
              "awayTeam": "Santa Clara",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": true,
              "lineups": [
                {
                  "teamId": 240,
                  "team": "Arouca",
                  "formation": "4-2-3-1",
                  "coach": "Vasco Seabra",
                  "starters": [
                    "I. de Arruabarrena",
                    "Tiago Esgaio",
                    "Javi Sánchez",
                    "José Fontán",
                    "O. Lebedenko",
                    "E. van Ee",
                    "T. Fukui",
                    "A. Trezza",
                    "Pablo Gozálbez",
                    "N. Djouahra",
                    "Barbero"
                  ]
                },
                {
                  "teamId": 227,
                  "team": "Santa Clara",
                  "formation": "4-3-3",
                  "coach": "Petit",
                  "starters": [
                    "Lucas França",
                    "Lucas Soares",
                    "Pedro Pacheco",
                    "Emanuel Fernandes",
                    "Guilherme Romão",
                    "José Luís Rocha Tavares",
                    "Pedro Ferreira",
                    "Tiago Ribeiro",
                    "Vinícius Lopes",
                    "Gonçalo Paciência",
                    "Brenner Lucas Gonçalves Santos"
                  ]
                }
              ]
            },
            {
              "fixtureId": 1575496,
              "kickoff": "2026-09-14T04:30:00+09:00",
              "status": "2H",
              "homeTeamId": 242,
              "homeTeam": "Famalicao",
              "awayTeamId": 228,
              "awayTeam": "Sporting CP",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": true,
              "lineups": [
                {
                  "teamId": 242,
                  "team": "Famalicao",
                  "formation": "4-2-3-1",
                  "coach": "Carlos Carvalhal",
                  "starters": [
                    "L. Carević",
                    "Rodrigo Pinheiro",
                    "Víctor Rofino",
                    "F. van Breemen",
                    "Pedro Francisco",
                    "Mathias De Amorim",
                    "Marcos Peña",
                    "Gil Dias",
                    "Tamás Szücs",
                    "Sorriso",
                    "G. Koutsias"
                  ]
                },
                {
                  "teamId": 228,
                  "team": "Sporting CP",
                  "formation": "4-2-3-1",
                  "coach": "Rui Borges",
                  "starters": [
                    "Rui Silva",
                    "Iván Fresneda",
                    "Z. Debast",
                    "Gonçalo Inácio",
                    "M. Araújo",
                    "Sergi Altimira",
                    "I. Doumbia",
                    "Geny Catamo",
                    "Flávio Gonçalves",
                    "Luis Guilherme",
                    "L. Suárez"
                  ]
                }
              ]
            }
          ],
          "standingsUpdatedAt": "2026-09-14T08:49:13.092Z"
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
              "points": 16,
              "goalsDiff": 16,
              "form": "WWWWD",
              "all": {
                "played": 6,
                "wins": 5,
                "draws": 1,
                "losses": 0,
                "goalsFor": 19,
                "goalsAgainst": 3
              },
              "home": {
                "played": 3,
                "wins": 2,
                "draws": 1,
                "losses": 0,
                "goalsFor": 8,
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
              "teamId": 631,
              "team": "Gent",
              "rank": 2,
              "points": 16,
              "goalsDiff": 8,
              "form": "DWWWW",
              "all": {
                "played": 6,
                "wins": 5,
                "draws": 1,
                "losses": 0,
                "goalsFor": 11,
                "goalsAgainst": 3
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
                "played": 3,
                "wins": 2,
                "draws": 1,
                "losses": 0,
                "goalsFor": 6,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 569,
              "team": "Club Brugge KV",
              "rank": 3,
              "points": 15,
              "goalsDiff": 9,
              "form": "WWLWW",
              "all": {
                "played": 6,
                "wins": 5,
                "draws": 0,
                "losses": 1,
                "goalsFor": 12,
                "goalsAgainst": 3
              },
              "home": {
                "played": 3,
                "wins": 3,
                "draws": 0,
                "losses": 0,
                "goalsFor": 7,
                "goalsAgainst": 1
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
              "points": 15,
              "goalsDiff": 7,
              "form": "WLWWW",
              "all": {
                "played": 6,
                "wins": 5,
                "draws": 0,
                "losses": 1,
                "goalsFor": 12,
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
                "played": 3,
                "wins": 3,
                "draws": 0,
                "losses": 0,
                "goalsFor": 5,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 600,
              "team": "Zulte Waregem",
              "rank": 5,
              "points": 11,
              "goalsDiff": 6,
              "form": "LWDWD",
              "all": {
                "played": 6,
                "wins": 3,
                "draws": 2,
                "losses": 1,
                "goalsFor": 10,
                "goalsAgainst": 4
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
              "goalsDiff": 2,
              "form": "LWWWD",
              "all": {
                "played": 6,
                "wins": 3,
                "draws": 2,
                "losses": 1,
                "goalsFor": 12,
                "goalsAgainst": 10
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
                "played": 3,
                "wins": 1,
                "draws": 1,
                "losses": 1,
                "goalsFor": 7,
                "goalsAgainst": 8
              }
            },
            {
              "teamId": 554,
              "team": "Anderlecht",
              "rank": 7,
              "points": 10,
              "goalsDiff": -1,
              "form": "WDWLL",
              "all": {
                "played": 6,
                "wins": 3,
                "draws": 1,
                "losses": 2,
                "goalsFor": 4,
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
                "played": 3,
                "wins": 1,
                "draws": 0,
                "losses": 2,
                "goalsFor": 1,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 738,
              "team": "SK Beveren",
              "rank": 8,
              "points": 9,
              "goalsDiff": -3,
              "form": "WWLLW",
              "all": {
                "played": 6,
                "wins": 3,
                "draws": 0,
                "losses": 3,
                "goalsFor": 7,
                "goalsAgainst": 10
              },
              "home": {
                "played": 3,
                "wins": 3,
                "draws": 0,
                "losses": 0,
                "goalsFor": 6,
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
              "teamId": 742,
              "team": "Genk",
              "rank": 9,
              "points": 9,
              "goalsDiff": 4,
              "form": "DDWDW",
              "all": {
                "played": 6,
                "wins": 2,
                "draws": 3,
                "losses": 1,
                "goalsFor": 13,
                "goalsAgainst": 9
              },
              "home": {
                "played": 3,
                "wins": 2,
                "draws": 1,
                "losses": 0,
                "goalsFor": 8,
                "goalsAgainst": 3
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
              "rank": 10,
              "points": 8,
              "goalsDiff": 2,
              "form": "LWLWD",
              "all": {
                "played": 6,
                "wins": 2,
                "draws": 2,
                "losses": 2,
                "goalsFor": 12,
                "goalsAgainst": 10
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
                "played": 3,
                "wins": 1,
                "draws": 1,
                "losses": 1,
                "goalsFor": 7,
                "goalsAgainst": 6
              }
            },
            {
              "teamId": 740,
              "team": "Antwerp",
              "rank": 11,
              "points": 7,
              "goalsDiff": -2,
              "form": "LLLDW",
              "all": {
                "played": 6,
                "wins": 2,
                "draws": 1,
                "losses": 3,
                "goalsFor": 11,
                "goalsAgainst": 13
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
                "played": 3,
                "wins": 1,
                "draws": 0,
                "losses": 2,
                "goalsFor": 4,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 259,
              "team": "Lommel United",
              "rank": 12,
              "points": 7,
              "goalsDiff": -2,
              "form": "LLWWL",
              "all": {
                "played": 6,
                "wins": 2,
                "draws": 1,
                "losses": 3,
                "goalsFor": 6,
                "goalsAgainst": 8
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
                "played": 3,
                "wins": 1,
                "draws": 1,
                "losses": 1,
                "goalsFor": 2,
                "goalsAgainst": 6
              }
            },
            {
              "teamId": 261,
              "team": "KVC Westerlo",
              "rank": 13,
              "points": 7,
              "goalsDiff": -3,
              "form": "WWDLL",
              "all": {
                "played": 6,
                "wins": 2,
                "draws": 1,
                "losses": 3,
                "goalsFor": 13,
                "goalsAgainst": 16
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
                "played": 3,
                "wins": 1,
                "draws": 0,
                "losses": 2,
                "goalsFor": 6,
                "goalsAgainst": 7
              }
            },
            {
              "teamId": 5902,
              "team": "RAAL La Louvière",
              "rank": 14,
              "points": 4,
              "goalsDiff": -5,
              "form": "WLDLL",
              "all": {
                "played": 6,
                "wins": 1,
                "draws": 1,
                "losses": 4,
                "goalsFor": 7,
                "goalsAgainst": 12
              },
              "home": {
                "played": 3,
                "wins": 1,
                "draws": 1,
                "losses": 1,
                "goalsFor": 6,
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
              "teamId": 741,
              "team": "Cercle Brugge",
              "rank": 15,
              "points": 3,
              "goalsDiff": -5,
              "form": "DLLLD",
              "all": {
                "played": 6,
                "wins": 0,
                "draws": 3,
                "losses": 3,
                "goalsFor": 6,
                "goalsAgainst": 11
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
                "played": 3,
                "wins": 0,
                "draws": 2,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 266,
              "team": "KV Mechelen",
              "rank": 16,
              "points": 2,
              "goalsDiff": -9,
              "form": "LLDLD",
              "all": {
                "played": 6,
                "wins": 0,
                "draws": 2,
                "losses": 4,
                "goalsFor": 5,
                "goalsAgainst": 14
              },
              "home": {
                "played": 3,
                "wins": 0,
                "draws": 1,
                "losses": 2,
                "goalsFor": 3,
                "goalsAgainst": 8
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
              "teamId": 260,
              "team": "OH Leuven",
              "rank": 17,
              "points": 1,
              "goalsDiff": -10,
              "form": "DLLLL",
              "all": {
                "played": 6,
                "wins": 0,
                "draws": 1,
                "losses": 5,
                "goalsFor": 3,
                "goalsAgainst": 13
              },
              "home": {
                "played": 3,
                "wins": 0,
                "draws": 1,
                "losses": 2,
                "goalsFor": 2,
                "goalsAgainst": 6
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
              "goalsDiff": -14,
              "form": "LLLLL",
              "all": {
                "played": 6,
                "wins": 0,
                "draws": 0,
                "losses": 6,
                "goalsFor": 1,
                "goalsAgainst": 15
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
                "played": 3,
                "wins": 0,
                "draws": 0,
                "losses": 3,
                "goalsFor": 0,
                "goalsAgainst": 7
              }
            }
          ],
          "teams": [
            {
              "teamId": 600,
              "team": "Zulte Waregem",
              "form": "WDWDWL",
              "all": {
                "played": 6,
                "wins": 3,
                "draws": 2,
                "losses": 1,
                "goalsFor": 10,
                "goalsAgainst": 4
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
                "played": 3,
                "wins": 1,
                "draws": 2,
                "losses": 0,
                "goalsFor": 4,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 736,
              "team": "Charleroi",
              "form": "WWWWLW",
              "all": {
                "played": 6,
                "wins": 5,
                "draws": 0,
                "losses": 1,
                "goalsFor": 12,
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
                "played": 3,
                "wins": 3,
                "draws": 0,
                "losses": 0,
                "goalsFor": 5,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 5902,
              "team": "RAAL La Louvière",
              "form": "LLLDLW",
              "all": {
                "played": 6,
                "wins": 1,
                "draws": 1,
                "losses": 4,
                "goalsFor": 7,
                "goalsAgainst": 12
              },
              "home": {
                "played": 3,
                "wins": 1,
                "draws": 1,
                "losses": 1,
                "goalsFor": 6,
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
              "form": "LLLLLL",
              "all": {
                "played": 6,
                "wins": 0,
                "draws": 0,
                "losses": 6,
                "goalsFor": 1,
                "goalsAgainst": 15
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
                "played": 3,
                "wins": 0,
                "draws": 0,
                "losses": 3,
                "goalsFor": 0,
                "goalsAgainst": 7
              }
            }
          ],
          "fixtures": [
            {
              "fixtureId": 1558633,
              "kickoff": "2026-09-14T01:30:00+09:00",
              "status": "FT",
              "homeTeamId": 600,
              "homeTeam": "Zulte Waregem",
              "awayTeamId": 736,
              "awayTeam": "Charleroi",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": true,
              "lineups": [
                {
                  "teamId": 600,
                  "team": "Zulte Waregem",
                  "formation": "4-3-2-1",
                  "coach": "M. Beale",
                  "starters": [
                    "L. Bostyn",
                    "F. Tangala",
                    "L. Lemoine",
                    "J. Kiilerich",
                    "Y. Cappelle",
                    "T. Claes",
                    "E. Lofolomo",
                    "O. Niang",
                    "Á. Zalán",
                    "M. Aké",
                    "A. Ementa"
                  ]
                },
                {
                  "teamId": 736,
                  "team": "Charleroi",
                  "formation": "4-2-3-1",
                  "coach": "Mario Kohnen",
                  "starters": [
                    "M. Koné",
                    "K. Van Den Kerkhof",
                    "A. Ousou",
                    "C. Keita",
                    "M. Nzita",
                    "Y. Khalifi",
                    "A. Boukamir",
                    "P. Pflücke",
                    "J. Romsaas",
                    "F. Situmona Mbemba",
                    "A. Scheidler"
                  ]
                }
              ]
            },
            {
              "fixtureId": 1558634,
              "kickoff": "2026-09-14T02:15:00+09:00",
              "status": "FT",
              "homeTeamId": 5902,
              "homeTeam": "RAAL La Louvière",
              "awayTeamId": 734,
              "awayTeam": "Kortrijk",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": true,
              "lineups": [
                {
                  "teamId": 5902,
                  "team": "RAAL La Louvière",
                  "formation": "3-4-3",
                  "coach": "Edward Still",
                  "starters": [
                    "M. Peano",
                    "W. Faye",
                    "P. Nkoa",
                    "Y. Okou",
                    "Máté Krisztián Kovács",
                    "M. Courcoul",
                    "I. Coulibaly",
                    "S. Delos",
                    "Z. Gruber",
                    "M. Ubandoma",
                    "A. Tajaouart"
                  ]
                },
                {
                  "teamId": 734,
                  "team": "Kortrijk",
                  "formation": "4-3-3",
                  "coach": "Michiel Jonckheere",
                  "starters": [
                    "P. Gunnarsson",
                    "B. Vroninks",
                    "A. Drouhin",
                    "G. Ruyssen",
                    "Harrison Murray-Campbell",
                    "B. Dejaegere",
                    "J. Roche",
                    "S. Podgoreanu",
                    "R. Štorman",
                    "G. Koyalipou",
                    "T. Ambrose"
                  ]
                }
              ]
            }
          ],
          "standingsUpdatedAt": "2026-09-14T08:49:13.092Z"
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
              "points": 13,
              "goalsDiff": 7,
              "form": "WWWWD",
              "all": {
                "played": 5,
                "wins": 4,
                "draws": 1,
                "losses": 0,
                "goalsFor": 13,
                "goalsAgainst": 6
              },
              "home": {
                "played": 3,
                "wins": 2,
                "draws": 1,
                "losses": 0,
                "goalsFor": 6,
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
              "points": 12,
              "goalsDiff": 8,
              "form": "WWWLW",
              "all": {
                "played": 5,
                "wins": 4,
                "draws": 0,
                "losses": 1,
                "goalsFor": 12,
                "goalsAgainst": 4
              },
              "home": {
                "played": 3,
                "wins": 3,
                "draws": 0,
                "losses": 0,
                "goalsFor": 10,
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
              "teamId": 3579,
              "team": "Amed",
              "rank": 3,
              "points": 10,
              "goalsDiff": 7,
              "form": "WDWLW",
              "all": {
                "played": 5,
                "wins": 3,
                "draws": 1,
                "losses": 1,
                "goalsFor": 12,
                "goalsAgainst": 5
              },
              "home": {
                "played": 3,
                "wins": 3,
                "draws": 0,
                "losses": 0,
                "goalsFor": 10,
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
              "teamId": 1004,
              "team": "Kasımpaşa",
              "rank": 4,
              "points": 9,
              "goalsDiff": 2,
              "form": "WDDWD",
              "all": {
                "played": 5,
                "wins": 2,
                "draws": 3,
                "losses": 0,
                "goalsFor": 7,
                "goalsAgainst": 5
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
                "wins": 2,
                "draws": 1,
                "losses": 0,
                "goalsFor": 4,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 1007,
              "team": "Rizespor",
              "rank": 5,
              "points": 9,
              "goalsDiff": 1,
              "form": "WLWLW",
              "all": {
                "played": 5,
                "wins": 3,
                "draws": 0,
                "losses": 2,
                "goalsFor": 5,
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
                "played": 3,
                "wins": 3,
                "draws": 0,
                "losses": 0,
                "goalsFor": 5,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 7411,
              "team": "Kocaelispor",
              "rank": 6,
              "points": 9,
              "goalsDiff": 1,
              "form": "LWWWL",
              "all": {
                "played": 5,
                "wins": 3,
                "draws": 0,
                "losses": 2,
                "goalsFor": 5,
                "goalsAgainst": 4
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
                "played": 3,
                "wins": 1,
                "draws": 0,
                "losses": 2,
                "goalsFor": 2,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 996,
              "team": "Alanyaspor",
              "rank": 7,
              "points": 8,
              "goalsDiff": 1,
              "form": "DWLWD",
              "all": {
                "played": 5,
                "wins": 2,
                "draws": 2,
                "losses": 1,
                "goalsFor": 6,
                "goalsAgainst": 5
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
                "wins": 1,
                "draws": 1,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 998,
              "team": "Trabzonspor",
              "rank": 8,
              "points": 7,
              "goalsDiff": 4,
              "form": "LWLWD",
              "all": {
                "played": 5,
                "wins": 2,
                "draws": 1,
                "losses": 2,
                "goalsFor": 9,
                "goalsAgainst": 5
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
                "played": 3,
                "wins": 0,
                "draws": 1,
                "losses": 2,
                "goalsFor": 2,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 6343,
              "team": "Çorum FK",
              "rank": 9,
              "points": 7,
              "goalsDiff": 2,
              "form": "WWLLD",
              "all": {
                "played": 5,
                "wins": 2,
                "draws": 1,
                "losses": 2,
                "goalsFor": 12,
                "goalsAgainst": 10
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
                "played": 3,
                "wins": 1,
                "draws": 1,
                "losses": 1,
                "goalsFor": 9,
                "goalsAgainst": 9
              }
            },
            {
              "teamId": 3573,
              "team": "Gaziantep FK",
              "rank": 10,
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
              "teamId": 997,
              "team": "Gençlerbirliği S.K.",
              "rank": 11,
              "points": 7,
              "goalsDiff": -4,
              "form": "LLDWW",
              "all": {
                "played": 5,
                "wins": 2,
                "draws": 1,
                "losses": 2,
                "goalsFor": 5,
                "goalsAgainst": 9
              },
              "home": {
                "played": 3,
                "wins": 1,
                "draws": 1,
                "losses": 1,
                "goalsFor": 4,
                "goalsAgainst": 4
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
              "rank": 12,
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
              "teamId": 3603,
              "team": "Samsunspor",
              "rank": 13,
              "points": 4,
              "goalsDiff": -5,
              "form": "LLLWD",
              "all": {
                "played": 5,
                "wins": 1,
                "draws": 1,
                "losses": 3,
                "goalsFor": 6,
                "goalsAgainst": 11
              },
              "home": {
                "played": 3,
                "wins": 0,
                "draws": 1,
                "losses": 2,
                "goalsFor": 4,
                "goalsAgainst": 10
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
              "teamId": 564,
              "team": "Başakşehir",
              "rank": 14,
              "points": 4,
              "goalsDiff": -5,
              "form": "LLDLW",
              "all": {
                "played": 5,
                "wins": 1,
                "draws": 1,
                "losses": 3,
                "goalsFor": 6,
                "goalsAgainst": 11
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
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 1,
                "goalsAgainst": 7
              }
            },
            {
              "teamId": 1009,
              "team": "Erzurumspor FK",
              "rank": 15,
              "points": 4,
              "goalsDiff": -9,
              "form": "LWDLL",
              "all": {
                "played": 5,
                "wins": 1,
                "draws": 1,
                "losses": 3,
                "goalsFor": 2,
                "goalsAgainst": 11
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
                "played": 3,
                "wins": 0,
                "draws": 1,
                "losses": 2,
                "goalsFor": 1,
                "goalsAgainst": 7
              }
            },
            {
              "teamId": 607,
              "team": "Konyaspor",
              "rank": 16,
              "points": 3,
              "goalsDiff": -4,
              "form": "WLLLL",
              "all": {
                "played": 5,
                "wins": 1,
                "draws": 0,
                "losses": 4,
                "goalsFor": 4,
                "goalsAgainst": 8
              },
              "home": {
                "played": 3,
                "wins": 1,
                "draws": 0,
                "losses": 2,
                "goalsFor": 2,
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
            },
            {
              "teamId": 3588,
              "team": "Eyüpspor",
              "rank": 17,
              "points": 3,
              "goalsDiff": -6,
              "form": "LLWLL",
              "all": {
                "played": 5,
                "wins": 1,
                "draws": 0,
                "losses": 4,
                "goalsFor": 2,
                "goalsAgainst": 8
              },
              "home": {
                "played": 3,
                "wins": 1,
                "draws": 0,
                "losses": 2,
                "goalsFor": 2,
                "goalsAgainst": 4
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
              "rank": 18,
              "points": 2,
              "goalsDiff": -4,
              "form": "DLLLD",
              "all": {
                "played": 5,
                "wins": 0,
                "draws": 2,
                "losses": 3,
                "goalsFor": 9,
                "goalsAgainst": 13
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
                "wins": 0,
                "draws": 2,
                "losses": 1,
                "goalsFor": 7,
                "goalsAgainst": 8
              }
            }
          ],
          "teams": [
            {
              "teamId": 645,
              "team": "Galatasaray",
              "form": "DWWWW",
              "all": {
                "played": 5,
                "wins": 4,
                "draws": 1,
                "losses": 0,
                "goalsFor": 13,
                "goalsAgainst": 6
              },
              "home": {
                "played": 3,
                "wins": 2,
                "draws": 1,
                "losses": 0,
                "goalsFor": 6,
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
              "teamId": 7411,
              "team": "Kocaelispor",
              "form": "LWWWL",
              "all": {
                "played": 5,
                "wins": 3,
                "draws": 0,
                "losses": 2,
                "goalsFor": 5,
                "goalsAgainst": 4
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
                "played": 3,
                "wins": 1,
                "draws": 0,
                "losses": 2,
                "goalsFor": 2,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 3579,
              "team": "Amed",
              "form": "WLWDW",
              "all": {
                "played": 5,
                "wins": 3,
                "draws": 1,
                "losses": 1,
                "goalsFor": 12,
                "goalsAgainst": 5
              },
              "home": {
                "played": 3,
                "wins": 3,
                "draws": 0,
                "losses": 0,
                "goalsFor": 10,
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
              "teamId": 564,
              "team": "Başakşehir",
              "form": "WLDLL",
              "all": {
                "played": 5,
                "wins": 1,
                "draws": 1,
                "losses": 3,
                "goalsFor": 6,
                "goalsAgainst": 11
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
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 1,
                "goalsAgainst": 7
              }
            }
          ],
          "fixtures": [
            {
              "fixtureId": 1584407,
              "kickoff": "2026-09-14T02:00:00+09:00",
              "status": "FT",
              "homeTeamId": 645,
              "homeTeam": "Galatasaray",
              "awayTeamId": 7411,
              "awayTeam": "Kocaelispor",
              "injuriesChecked": true,
              "injuries": [
                {
                  "fixtureId": 1584407,
                  "teamId": 645,
                  "playerId": 61950,
                  "player": "G. Guvenc",
                  "type": "Missing Fixture",
                  "reason": "Muscle Injury"
                },
                {
                  "fixtureId": 1584407,
                  "teamId": 645,
                  "playerId": 18947,
                  "player": "M. Lemina",
                  "type": "Missing Fixture",
                  "reason": "Muscle Injury"
                },
                {
                  "fixtureId": 1584407,
                  "teamId": 645,
                  "playerId": 2780,
                  "player": "V. Osimhen",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1584407,
                  "teamId": 645,
                  "playerId": 30504,
                  "player": "W. Singo",
                  "type": "Missing Fixture",
                  "reason": "Thigh Injury"
                },
                {
                  "fixtureId": 1584407,
                  "teamId": 7411,
                  "playerId": 47558,
                  "player": "A. Jovanovic",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1584407,
                  "teamId": 7411,
                  "playerId": 1331,
                  "player": "B. Petkovic",
                  "type": "Missing Fixture",
                  "reason": "Hamstring Injury"
                },
                {
                  "fixtureId": 1584407,
                  "teamId": 7411,
                  "playerId": 31280,
                  "player": "R. Rivas",
                  "type": "Questionable",
                  "reason": "Inactive"
                }
              ],
              "lineupsChecked": true,
              "lineups": [
                {
                  "teamId": 645,
                  "team": "Galatasaray",
                  "formation": "4-2-3-1",
                  "coach": "Okan Buruk",
                  "starters": [
                    "Uğurcan Çakır",
                    "Roland Sallai",
                    "Davinson Sánchez",
                    "Abdülkerim Bardakcı",
                    "Eren Elmalı",
                    "Lucas Torreira",
                    "Gabriel Sara",
                    "Barış Alper Yılmaz",
                    "Yunus Akgün",
                    "Rafael Leão",
                    "Deniz Gül"
                  ]
                },
                {
                  "teamId": 7411,
                  "team": "Kocaelispor",
                  "formation": "4-3-3",
                  "coach": "Selcuk Inan",
                  "starters": [
                    "Serhat Öztaşdelen",
                    "Anfernee Jamal Dijksteel",
                    "Tanguy Zoukrou",
                    "Matej Maglica",
                    "Massadio Haïdara",
                    "Berkan Kutlu",
                    "Show",
                    "Mahamadou Susoho",
                    "Gonçalo Sousa",
                    "Florian Ayé",
                    "Dan Agyei"
                  ]
                }
              ]
            },
            {
              "fixtureId": 1584404,
              "kickoff": "2026-09-14T02:00:00+09:00",
              "status": "FT",
              "homeTeamId": 3579,
              "homeTeam": "Amed",
              "awayTeamId": 564,
              "awayTeam": "Başakşehir",
              "injuriesChecked": true,
              "injuries": [
                {
                  "fixtureId": 1584404,
                  "teamId": 3579,
                  "playerId": 203458,
                  "player": "Y. Sor",
                  "type": "Questionable",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1584404,
                  "teamId": 3579,
                  "playerId": 458773,
                  "player": "M. Yildirim",
                  "type": "Questionable",
                  "reason": "Inactive"
                },
                {
                  "fixtureId": 1584404,
                  "teamId": 564,
                  "playerId": 21447,
                  "player": "U. Bozok",
                  "type": "Missing Fixture",
                  "reason": "Red Card"
                },
                {
                  "fixtureId": 1584404,
                  "teamId": 564,
                  "playerId": 49860,
                  "player": "E. Visca",
                  "type": "Questionable",
                  "reason": "Inactive"
                }
              ],
              "lineupsChecked": true,
              "lineups": [
                {
                  "teamId": 3579,
                  "team": "Amed",
                  "formation": "4-2-3-1",
                  "coach": "Besnik Hasi",
                  "starters": [
                    "Alban Lafont",
                    "Ermal Krasniqi",
                    "Lumbardh Dellova",
                    "David Robert Bates",
                    "Umut Meraş",
                    "Rayan Raveloson",
                    "Furkan Soyalp",
                    "Samuel Ballet",
                    "Dia Saba",
                    "Mohamed Khalil",
                    "Gift Orban"
                  ]
                },
                {
                  "teamId": 564,
                  "team": "Başakşehir",
                  "formation": "4-2-3-1",
                  "coach": "Nuri Sahin",
                  "starters": [
                    "Deniz Dilmen",
                    "Ömer Ali Şahiner",
                    "Emin Bayram",
                    "Jerome Opoku",
                    "Christopher Operi",
                    "Jakub Kałuziński",
                    "Umut Güneş",
                    "Andreas Skov Olsen",
                    "Olivier Kemen",
                    "Abbosbek Fayzullaev",
                    "Eldor Shomurodov"
                  ]
                }
              ]
            }
          ],
          "standingsUpdatedAt": "2026-09-14T08:49:13.092Z"
        },
        {
          "key": "ACL",
          "leagueId": 17,
          "season": "2026",
          "standings": [
            {
              "teamId": 2929,
              "team": "Al-Ahli Jeddah",
              "rank": 1,
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
              "teamId": 2939,
              "team": "Al-Nassr",
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
              "teamId": 2932,
              "team": "Al-Hilal Saudi FC",
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
              "teamId": 2933,
              "team": "Al-Qadisiyah FC",
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
              "teamId": 2865,
              "team": "Al Ain",
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
              "teamId": 2870,
              "team": "Shabab Al Ahli Dubai",
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
              "teamId": 2872,
              "team": "Al-Wasl FC",
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
              "teamId": 2895,
              "team": "Al Sadd",
              "rank": 8,
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
              "teamId": 2903,
              "team": "Al-Gharafa",
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
              "teamId": 2916,
              "team": "Al Shamal",
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
              "teamId": 2733,
              "team": "Esteghlal FC",
              "rank": 11,
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
              "teamId": 2737,
              "team": "Tractor Sazi",
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
              "teamId": 4217,
              "team": "Neftchi",
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
              "teamId": 8009,
              "team": "Al Quwa Al Jawiya",
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
              "teamId": 2938,
              "team": "Al-Ittihad FC",
              "rank": 15,
              "points": 0,
              "goalsDiff": 0,
              "form": "W",
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
              "teamId": 4220,
              "team": "Pakhtakor",
              "rank": 16,
              "points": 0,
              "goalsDiff": 0,
              "form": "W",
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
              "teamId": 290,
              "team": "Kashima",
              "rank": 1,
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
              "teamId": 289,
              "team": "Vissel Kobe",
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
              "teamId": 281,
              "team": "Kashiwa Reysol",
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
              "teamId": 302,
              "team": "Kyoto Sanga",
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
              "teamId": 2762,
              "team": "Jeonbuk Motors",
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
              "teamId": 2750,
              "team": "Daejeon Citizen",
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
              "teamId": 2764,
              "team": "Pohang Steelers",
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
              "teamId": 2780,
              "team": "Buriram United",
              "rank": 8,
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
              "teamId": 2789,
              "team": "Port FC",
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
              "teamId": 2776,
              "team": "Ratchaburi",
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
              "teamId": 836,
              "team": "SHANGHAI SIPG",
              "rank": 11,
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
              "teamId": 830,
              "team": "Beijing Guoan",
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
              "teamId": 946,
              "team": "Newcastle Jets",
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
              "teamId": 2523,
              "team": "Johor Darul Takzim FC",
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
              "teamId": 293,
              "team": "Gamba Osaka",
              "rank": 15,
              "points": 0,
              "goalsDiff": 0,
              "form": "W",
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
              "teamId": 16400,
              "team": "Công An Nhân Dân",
              "rank": 16,
              "points": 0,
              "goalsDiff": 0,
              "form": "W",
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
              "teamId": 4217,
              "team": "Neftchi",
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
              "teamId": 8009,
              "team": "Al Quwa Al Jawiya",
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
              "fixtureId": 1629911,
              "kickoff": "2026-09-14T22:45:00+09:00",
              "status": "NS",
              "homeTeamId": 4217,
              "homeTeam": "Neftchi",
              "awayTeamId": 8009,
              "awayTeam": "Al Quwa Al Jawiya",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            }
          ],
          "standingsUpdatedAt": "2026-09-14T08:49:13.092Z"
        }
      ]
    },
    {
      "date": "2026-09-15",
      "updatedAt": "2026-09-14T15:00:45.921Z",
      "leagues": [
        {
          "key": "EPL",
          "leagueId": 39,
          "season": "2026",
          "standings": [
            {
              "teamId": 42,
              "team": "Arsenal",
              "rank": 1,
              "points": 12,
              "goalsDiff": 7,
              "form": "WWWW",
              "all": {
                "played": 4,
                "wins": 4,
                "draws": 0,
                "losses": 0,
                "goalsFor": 8,
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
                "played": 2,
                "wins": 2,
                "draws": 0,
                "losses": 0,
                "goalsFor": 3,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 50,
              "team": "Manchester City",
              "rank": 2,
              "points": 12,
              "goalsDiff": 6,
              "form": "WWWW",
              "all": {
                "played": 4,
                "wins": 4,
                "draws": 0,
                "losses": 0,
                "goalsFor": 8,
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
                "played": 2,
                "wins": 2,
                "draws": 0,
                "losses": 0,
                "goalsFor": 5,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 64,
              "team": "Hull City",
              "rank": 3,
              "points": 8,
              "goalsDiff": 3,
              "form": "DDWW",
              "all": {
                "played": 4,
                "wins": 2,
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
              "teamId": 51,
              "team": "Brighton",
              "rank": 4,
              "points": 7,
              "goalsDiff": 8,
              "form": "WDLW",
              "all": {
                "played": 4,
                "wins": 2,
                "draws": 1,
                "losses": 1,
                "goalsFor": 13,
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
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 8,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 49,
              "team": "Chelsea",
              "rank": 5,
              "points": 7,
              "goalsDiff": 1,
              "form": "DLWW",
              "all": {
                "played": 4,
                "wins": 2,
                "draws": 1,
                "losses": 1,
                "goalsFor": 10,
                "goalsAgainst": 9
              },
              "home": {
                "played": 2,
                "wins": 1,
                "draws": 1,
                "losses": 0,
                "goalsFor": 6,
                "goalsAgainst": 5
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
              "rank": 6,
              "points": 6,
              "goalsDiff": 3,
              "form": "DDDW",
              "all": {
                "played": 4,
                "wins": 1,
                "draws": 3,
                "losses": 0,
                "goalsFor": 7,
                "goalsAgainst": 4
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
                "played": 2,
                "wins": 0,
                "draws": 2,
                "losses": 0,
                "goalsFor": 3,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 40,
              "team": "Liverpool",
              "rank": 7,
              "points": 6,
              "goalsDiff": 2,
              "form": "DWDD",
              "all": {
                "played": 4,
                "wins": 1,
                "draws": 3,
                "losses": 0,
                "goalsFor": 6,
                "goalsAgainst": 4
              },
              "home": {
                "played": 2,
                "wins": 0,
                "draws": 2,
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
              "teamId": 45,
              "team": "Everton",
              "rank": 8,
              "points": 6,
              "goalsDiff": 2,
              "form": "DDDW",
              "all": {
                "played": 4,
                "wins": 1,
                "draws": 3,
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
                "played": 2,
                "wins": 0,
                "draws": 2,
                "losses": 0,
                "goalsFor": 1,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 57,
              "team": "Ipswich",
              "rank": 9,
              "points": 6,
              "goalsDiff": -3,
              "form": "WLLW",
              "all": {
                "played": 4,
                "wins": 2,
                "draws": 0,
                "losses": 2,
                "goalsFor": 7,
                "goalsAgainst": 10
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
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 5,
                "goalsAgainst": 7
              }
            },
            {
              "teamId": 34,
              "team": "Newcastle",
              "rank": 10,
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
              "rank": 11,
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
              "teamId": 65,
              "team": "Nottingham Forest",
              "rank": 12,
              "points": 5,
              "goalsDiff": 0,
              "form": "WDDL",
              "all": {
                "played": 4,
                "wins": 1,
                "draws": 2,
                "losses": 1,
                "goalsFor": 4,
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
                "played": 2,
                "wins": 1,
                "draws": 1,
                "losses": 0,
                "goalsFor": 4,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 33,
              "team": "Manchester United",
              "rank": 13,
              "points": 4,
              "goalsDiff": 0,
              "form": "LDWL",
              "all": {
                "played": 4,
                "wins": 1,
                "draws": 1,
                "losses": 2,
                "goalsFor": 7,
                "goalsAgainst": 7
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
              "rank": 14,
              "points": 4,
              "goalsDiff": -2,
              "form": "LDWL",
              "all": {
                "played": 4,
                "wins": 1,
                "draws": 1,
                "losses": 2,
                "goalsFor": 3,
                "goalsAgainst": 5
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
                "draws": 1,
                "losses": 1,
                "goalsFor": 2,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 35,
              "team": "Bournemouth",
              "rank": 15,
              "points": 3,
              "goalsDiff": -1,
              "form": "DDDL",
              "all": {
                "played": 4,
                "wins": 0,
                "draws": 3,
                "losses": 1,
                "goalsFor": 6,
                "goalsAgainst": 7
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
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 52,
              "team": "Crystal Palace",
              "rank": 16,
              "points": 3,
              "goalsDiff": -5,
              "form": "LWLL",
              "all": {
                "played": 4,
                "wins": 1,
                "draws": 0,
                "losses": 3,
                "goalsFor": 6,
                "goalsAgainst": 11
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
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 47,
              "team": "Tottenham",
              "rank": 17,
              "points": 2,
              "goalsDiff": -5,
              "form": "DDLL",
              "all": {
                "played": 4,
                "wins": 0,
                "draws": 2,
                "losses": 2,
                "goalsFor": 0,
                "goalsAgainst": 5
              },
              "home": {
                "played": 2,
                "wins": 0,
                "draws": 1,
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
              "rank": 18,
              "points": 1,
              "goalsDiff": -3,
              "form": "DLLL",
              "all": {
                "played": 4,
                "wins": 0,
                "draws": 1,
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
                "played": 2,
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 0,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 66,
              "team": "Aston Villa",
              "rank": 19,
              "points": 1,
              "goalsDiff": -6,
              "form": "LDLL",
              "all": {
                "played": 4,
                "wins": 0,
                "draws": 1,
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
                "goalsAgainst": 3
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
              "teamId": 1346,
              "team": "Coventry",
              "rank": 20,
              "points": 0,
              "goalsDiff": -10,
              "form": "LLLL",
              "all": {
                "played": 4,
                "wins": 0,
                "draws": 0,
                "losses": 4,
                "goalsFor": 0,
                "goalsAgainst": 10
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
              "teamId": 63,
              "team": "Leeds",
              "form": "WDD",
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
              "teamId": 34,
              "team": "Newcastle",
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
            }
          ],
          "fixtures": [
            {
              "fixtureId": 1557402,
              "kickoff": "2026-09-15T04:00:00+09:00",
              "status": "NS",
              "homeTeamId": 63,
              "homeTeam": "Leeds",
              "awayTeamId": 34,
              "awayTeam": "Newcastle",
              "injuriesChecked": true,
              "injuries": [
                {
                  "fixtureId": 1557402,
                  "teamId": 63,
                  "playerId": 313059,
                  "player": "M. Joseph",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1557402,
                  "teamId": 63,
                  "playerId": 19321,
                  "player": "J. Rodon",
                  "type": "Missing Fixture",
                  "reason": "Muscle Injury"
                },
                {
                  "fixtureId": 1557402,
                  "teamId": 34,
                  "playerId": 18961,
                  "player": "D. Burn",
                  "type": "Missing Fixture",
                  "reason": "Ankle Injury"
                },
                {
                  "fixtureId": 1557402,
                  "teamId": 34,
                  "playerId": 723,
                  "player": "Joelinton",
                  "type": "Missing Fixture",
                  "reason": "Thigh Injury"
                },
                {
                  "fixtureId": 1557402,
                  "teamId": 34,
                  "playerId": 315237,
                  "player": "W. Osula",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1557402,
                  "teamId": 34,
                  "playerId": 329640,
                  "player": "E. Jaouen",
                  "type": "Questionable",
                  "reason": "Ankle Injury"
                }
              ],
              "lineupsChecked": true,
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
              "points": 15,
              "goalsDiff": 17,
              "form": "WWWWW",
              "all": {
                "played": 5,
                "wins": 5,
                "draws": 0,
                "losses": 0,
                "goalsFor": 21,
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
                "played": 3,
                "wins": 3,
                "draws": 0,
                "losses": 0,
                "goalsFor": 14,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 541,
              "team": "Real Madrid",
              "rank": 2,
              "points": 12,
              "goalsDiff": 10,
              "form": "WLWWW",
              "all": {
                "played": 5,
                "wins": 4,
                "draws": 0,
                "losses": 1,
                "goalsFor": 14,
                "goalsAgainst": 4
              },
              "home": {
                "played": 3,
                "wins": 3,
                "draws": 0,
                "losses": 0,
                "goalsFor": 12,
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
              "teamId": 542,
              "team": "Alaves",
              "rank": 3,
              "points": 10,
              "goalsDiff": 6,
              "form": "LWWDW",
              "all": {
                "played": 5,
                "wins": 3,
                "draws": 1,
                "losses": 1,
                "goalsFor": 11,
                "goalsAgainst": 5
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
                "played": 2,
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 2,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 530,
              "team": "Atletico Madrid",
              "rank": 4,
              "points": 10,
              "goalsDiff": 4,
              "form": "WLWDW",
              "all": {
                "played": 5,
                "wins": 3,
                "draws": 1,
                "losses": 1,
                "goalsFor": 10,
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
                "played": 3,
                "wins": 2,
                "draws": 0,
                "losses": 1,
                "goalsFor": 6,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 536,
              "team": "Sevilla",
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
                "draws": 0,
                "losses": 1,
                "goalsFor": 4,
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
              "teamId": 544,
              "team": "Deportivo La Coruna",
              "rank": 6,
              "points": 9,
              "goalsDiff": 3,
              "form": "DWWDD",
              "all": {
                "played": 5,
                "wins": 2,
                "draws": 3,
                "losses": 0,
                "goalsFor": 9,
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
                "played": 3,
                "wins": 1,
                "draws": 2,
                "losses": 0,
                "goalsFor": 5,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 543,
              "team": "Real Betis",
              "rank": 7,
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
              "teamId": 540,
              "team": "Espanyol",
              "rank": 8,
              "points": 7,
              "goalsDiff": 3,
              "form": "WDLLW",
              "all": {
                "played": 5,
                "wins": 2,
                "draws": 1,
                "losses": 2,
                "goalsFor": 8,
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
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 531,
              "team": "Athletic Club",
              "rank": 9,
              "points": 7,
              "goalsDiff": 1,
              "form": "DWWLL",
              "all": {
                "played": 5,
                "wins": 2,
                "draws": 1,
                "losses": 2,
                "goalsFor": 7,
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
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 2,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 4665,
              "team": "Racing Santander",
              "rank": 10,
              "points": 7,
              "goalsDiff": 0,
              "form": "WLWLD",
              "all": {
                "played": 5,
                "wins": 2,
                "draws": 1,
                "losses": 2,
                "goalsFor": 9,
                "goalsAgainst": 9
              },
              "home": {
                "played": 3,
                "wins": 2,
                "draws": 1,
                "losses": 0,
                "goalsFor": 7,
                "goalsAgainst": 5
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
              "teamId": 727,
              "team": "Osasuna",
              "rank": 11,
              "points": 7,
              "goalsDiff": -3,
              "form": "LLWWD",
              "all": {
                "played": 5,
                "wins": 2,
                "draws": 1,
                "losses": 2,
                "goalsFor": 5,
                "goalsAgainst": 8
              },
              "home": {
                "played": 3,
                "wins": 1,
                "draws": 1,
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
                "goalsAgainst": 6
              }
            },
            {
              "teamId": 548,
              "team": "Real Sociedad",
              "rank": 12,
              "points": 7,
              "goalsDiff": -5,
              "form": "LWDWL",
              "all": {
                "played": 6,
                "wins": 2,
                "draws": 1,
                "losses": 3,
                "goalsFor": 6,
                "goalsAgainst": 11
              },
              "home": {
                "played": 3,
                "wins": 1,
                "draws": 1,
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
              "teamId": 539,
              "team": "Levante",
              "rank": 13,
              "points": 5,
              "goalsDiff": -2,
              "form": "LDWDL",
              "all": {
                "played": 5,
                "wins": 1,
                "draws": 2,
                "losses": 2,
                "goalsFor": 7,
                "goalsAgainst": 9
              },
              "home": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 7,
                "goalsAgainst": 6
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
              "teamId": 546,
              "team": "Getafe",
              "rank": 14,
              "points": 5,
              "goalsDiff": -3,
              "form": "DDLWL",
              "all": {
                "played": 5,
                "wins": 1,
                "draws": 2,
                "losses": 2,
                "goalsFor": 3,
                "goalsAgainst": 6
              },
              "home": {
                "played": 3,
                "wins": 1,
                "draws": 2,
                "losses": 0,
                "goalsFor": 3,
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
              "teamId": 538,
              "team": "Celta Vigo",
              "rank": 15,
              "points": 4,
              "goalsDiff": -3,
              "form": "DDDLL",
              "all": {
                "played": 6,
                "wins": 0,
                "draws": 4,
                "losses": 2,
                "goalsFor": 3,
                "goalsAgainst": 6
              },
              "home": {
                "played": 3,
                "wins": 0,
                "draws": 1,
                "losses": 2,
                "goalsFor": 2,
                "goalsAgainst": 5
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
              "teamId": 728,
              "team": "Rayo Vallecano",
              "rank": 16,
              "points": 4,
              "goalsDiff": -6,
              "form": "LWLDL",
              "all": {
                "played": 5,
                "wins": 1,
                "draws": 1,
                "losses": 3,
                "goalsFor": 8,
                "goalsAgainst": 14
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
                "played": 3,
                "wins": 0,
                "draws": 0,
                "losses": 3,
                "goalsFor": 4,
                "goalsAgainst": 11
              }
            },
            {
              "teamId": 535,
              "team": "Malaga",
              "rank": 17,
              "points": 3,
              "goalsDiff": -6,
              "form": "DDLDL",
              "all": {
                "played": 5,
                "wins": 0,
                "draws": 3,
                "losses": 2,
                "goalsFor": 2,
                "goalsAgainst": 8
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
                "played": 3,
                "wins": 0,
                "draws": 1,
                "losses": 2,
                "goalsFor": 1,
                "goalsAgainst": 7
              }
            },
            {
              "teamId": 533,
              "team": "Villarreal",
              "rank": 18,
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
              "teamId": 797,
              "team": "Elche",
              "rank": 19,
              "points": 2,
              "goalsDiff": -7,
              "form": "DLLLD",
              "all": {
                "played": 5,
                "wins": 0,
                "draws": 2,
                "losses": 3,
                "goalsFor": 6,
                "goalsAgainst": 13
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
                "played": 3,
                "wins": 0,
                "draws": 2,
                "losses": 1,
                "goalsFor": 4,
                "goalsAgainst": 5
              }
            },
            {
              "teamId": 532,
              "team": "Valencia",
              "rank": 20,
              "points": 1,
              "goalsDiff": -9,
              "form": "LLLLD",
              "all": {
                "played": 5,
                "wins": 0,
                "draws": 1,
                "losses": 4,
                "goalsFor": 1,
                "goalsAgainst": 10
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
                "played": 2,
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 1,
                "goalsAgainst": 4
              }
            }
          ],
          "teams": [
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
              "teamId": 543,
              "team": "Real Betis",
              "form": "WWLW",
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
            }
          ],
          "fixtures": [
            {
              "fixtureId": 1570382,
              "kickoff": "2026-09-15T04:00:00+09:00",
              "status": "NS",
              "homeTeamId": 533,
              "homeTeam": "Villarreal",
              "awayTeamId": 543,
              "awayTeam": "Real Betis",
              "injuriesChecked": true,
              "injuries": [
                {
                  "fixtureId": 1570382,
                  "teamId": 533,
                  "playerId": 166,
                  "player": "J. Foyth",
                  "type": "Missing Fixture",
                  "reason": "Achilles Tendon Injury"
                },
                {
                  "fixtureId": 1570382,
                  "teamId": 543,
                  "playerId": 47302,
                  "player": "D. Llorente",
                  "type": "Missing Fixture",
                  "reason": "Broken nose"
                },
                {
                  "fixtureId": 1570382,
                  "teamId": 543,
                  "playerId": 544644,
                  "player": "J. Morante",
                  "type": "Missing Fixture",
                  "reason": "Coach's decision"
                },
                {
                  "fixtureId": 1570382,
                  "teamId": 543,
                  "playerId": 47119,
                  "player": "A. Ruibal",
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
              "teamId": 487,
              "team": "Lazio",
              "rank": 1,
              "points": 10,
              "goalsDiff": 3,
              "form": "DWWW",
              "all": {
                "played": 4,
                "wins": 3,
                "draws": 1,
                "losses": 0,
                "goalsFor": 6,
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
                "wins": 2,
                "draws": 0,
                "losses": 0,
                "goalsFor": 3,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 497,
              "team": "AS Roma",
              "rank": 2,
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
              "rank": 3,
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
              "teamId": 490,
              "team": "Cagliari",
              "rank": 4,
              "points": 9,
              "goalsDiff": 2,
              "form": "WWLW",
              "all": {
                "played": 4,
                "wins": 3,
                "draws": 0,
                "losses": 1,
                "goalsFor": 4,
                "goalsAgainst": 2
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
                "wins": 2,
                "draws": 0,
                "losses": 0,
                "goalsFor": 3,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 489,
              "team": "AC Milan",
              "rank": 5,
              "points": 8,
              "goalsDiff": 3,
              "form": "DDWW",
              "all": {
                "played": 4,
                "wins": 2,
                "draws": 2,
                "losses": 0,
                "goalsFor": 7,
                "goalsAgainst": 4
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
                "played": 3,
                "wins": 1,
                "draws": 2,
                "losses": 0,
                "goalsFor": 5,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 895,
              "team": "Como",
              "rank": 6,
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
              "teamId": 512,
              "team": "Frosinone",
              "rank": 7,
              "points": 7,
              "goalsDiff": 3,
              "form": "DWWL",
              "all": {
                "played": 4,
                "wins": 2,
                "draws": 1,
                "losses": 1,
                "goalsFor": 7,
                "goalsAgainst": 4
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
                "goalsFor": 4,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 496,
              "team": "Juventus",
              "rank": 8,
              "points": 7,
              "goalsDiff": 2,
              "form": "LDWW",
              "all": {
                "played": 4,
                "wins": 2,
                "draws": 1,
                "losses": 1,
                "goalsFor": 6,
                "goalsAgainst": 4
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
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 488,
              "team": "Sassuolo",
              "rank": 9,
              "points": 7,
              "goalsDiff": 1,
              "form": "WDWL",
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
                "wins": 2,
                "draws": 0,
                "losses": 0,
                "goalsFor": 5,
                "goalsAgainst": 3
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
              "teamId": 492,
              "team": "Napoli",
              "rank": 10,
              "points": 6,
              "goalsDiff": 1,
              "form": "WLLW",
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
                "goalsFor": 2,
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
              "teamId": 499,
              "team": "Atalanta",
              "rank": 11,
              "points": 6,
              "goalsDiff": 0,
              "form": "LLWW",
              "all": {
                "played": 4,
                "wins": 2,
                "draws": 0,
                "losses": 2,
                "goalsFor": 5,
                "goalsAgainst": 5
              },
              "home": {
                "played": 3,
                "wins": 2,
                "draws": 0,
                "losses": 1,
                "goalsFor": 4,
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
              "teamId": 867,
              "team": "Lecce",
              "rank": 12,
              "points": 6,
              "goalsDiff": -2,
              "form": "WLLW",
              "all": {
                "played": 4,
                "wins": 2,
                "draws": 0,
                "losses": 2,
                "goalsFor": 5,
                "goalsAgainst": 7
              },
              "home": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 3,
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
              "teamId": 494,
              "team": "Udinese",
              "rank": 13,
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
              "teamId": 502,
              "team": "Fiorentina",
              "rank": 15,
              "points": 3,
              "goalsDiff": -6,
              "form": "WLLL",
              "all": {
                "played": 4,
                "wins": 1,
                "draws": 0,
                "losses": 3,
                "goalsFor": 5,
                "goalsAgainst": 11
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
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 4,
                "goalsAgainst": 6
              }
            },
            {
              "teamId": 500,
              "team": "Bologna",
              "rank": 16,
              "points": 1,
              "goalsDiff": -3,
              "form": "LDLL",
              "all": {
                "played": 4,
                "wins": 0,
                "draws": 1,
                "losses": 3,
                "goalsFor": 2,
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
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 0,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 523,
              "team": "Parma",
              "rank": 17,
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
              "rank": 18,
              "points": 1,
              "goalsDiff": -5,
              "form": "LDLL",
              "all": {
                "played": 4,
                "wins": 0,
                "draws": 1,
                "losses": 3,
                "goalsFor": 6,
                "goalsAgainst": 11
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
                "draws": 1,
                "losses": 2,
                "goalsFor": 4,
                "goalsAgainst": 8
              }
            },
            {
              "teamId": 495,
              "team": "Genoa",
              "rank": 19,
              "points": 1,
              "goalsDiff": -6,
              "form": "DLLL",
              "all": {
                "played": 4,
                "wins": 0,
                "draws": 1,
                "losses": 3,
                "goalsFor": 2,
                "goalsAgainst": 8
              },
              "home": {
                "played": 3,
                "wins": 0,
                "draws": 1,
                "losses": 2,
                "goalsFor": 2,
                "goalsAgainst": 7
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
              "teamId": 517,
              "team": "Venezia",
              "rank": 20,
              "points": 0,
              "goalsDiff": -7,
              "form": "LLLL",
              "all": {
                "played": 4,
                "wins": 0,
                "draws": 0,
                "losses": 4,
                "goalsFor": 4,
                "goalsAgainst": 11
              },
              "home": {
                "played": 2,
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 2,
                "goalsAgainst": 6
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
              "teamId": 895,
              "team": "Como",
              "form": "DWW",
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
              "teamId": 523,
              "team": "Parma",
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
              "teamId": 503,
              "team": "Torino",
              "form": "LLW",
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
            }
          ],
          "fixtures": [
            {
              "fixtureId": 1550118,
              "kickoff": "2026-09-15T01:30:00+09:00",
              "status": "NS",
              "homeTeamId": 895,
              "homeTeam": "Como",
              "awayTeamId": 523,
              "awayTeam": "Parma",
              "injuriesChecked": true,
              "injuries": [
                {
                  "fixtureId": 1550118,
                  "teamId": 895,
                  "playerId": 354533,
                  "player": "J. Addai",
                  "type": "Missing Fixture",
                  "reason": "Achilles Tendon Injury"
                },
                {
                  "fixtureId": 1550118,
                  "teamId": 523,
                  "playerId": 881,
                  "player": "H. Nicolussi Caviglia",
                  "type": "Missing Fixture",
                  "reason": "Groin Injury"
                }
              ],
              "lineupsChecked": true,
              "lineups": []
            },
            {
              "fixtureId": 1550125,
              "kickoff": "2026-09-15T01:30:00+09:00",
              "status": "NS",
              "homeTeamId": 503,
              "homeTeam": "Torino",
              "awayTeamId": 497,
              "awayTeam": "AS Roma",
              "injuriesChecked": true,
              "injuries": [
                {
                  "fixtureId": 1550125,
                  "teamId": 503,
                  "playerId": 19524,
                  "player": "C. Adams",
                  "type": "Missing Fixture",
                  "reason": "Muscle Injury"
                },
                {
                  "fixtureId": 1550125,
                  "teamId": 503,
                  "playerId": 270507,
                  "player": "C. Casadei",
                  "type": "Missing Fixture",
                  "reason": "Rest"
                },
                {
                  "fixtureId": 1550125,
                  "teamId": 503,
                  "playerId": 56266,
                  "player": "F. Israel",
                  "type": "Missing Fixture",
                  "reason": "Shoulder Injury"
                },
                {
                  "fixtureId": 1550125,
                  "teamId": 503,
                  "playerId": 123,
                  "player": "P. Pellegri",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1550125,
                  "teamId": 503,
                  "playerId": 30414,
                  "player": "G. Simeone",
                  "type": "Questionable",
                  "reason": "Back Injury"
                },
                {
                  "fixtureId": 1550125,
                  "teamId": 497,
                  "playerId": 626686,
                  "player": "M. Bah",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                }
              ],
              "lineupsChecked": true,
              "lineups": []
            },
            {
              "fixtureId": 1550120,
              "kickoff": "2026-09-15T03:45:00+09:00",
              "status": "NS",
              "homeTeamId": 505,
              "homeTeam": "Inter",
              "awayTeamId": 494,
              "awayTeam": "Udinese",
              "injuriesChecked": true,
              "injuries": [
                {
                  "fixtureId": 1550120,
                  "teamId": 505,
                  "playerId": 19235,
                  "player": "D. Spence",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1550120,
                  "teamId": 494,
                  "playerId": 411171,
                  "player": "J. Arizala",
                  "type": "Missing Fixture",
                  "reason": "Thigh Injury"
                },
                {
                  "fixtureId": 1550120,
                  "teamId": 494,
                  "playerId": 422156,
                  "player": "M. Palma",
                  "type": "Missing Fixture",
                  "reason": "Muscle Injury"
                },
                {
                  "fixtureId": 1550120,
                  "teamId": 494,
                  "playerId": 1939,
                  "player": "J. Piotrowski",
                  "type": "Missing Fixture",
                  "reason": "Heart Problems"
                },
                {
                  "fixtureId": 1550120,
                  "teamId": 494,
                  "playerId": 656,
                  "player": "O. Solet",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1550120,
                  "teamId": 494,
                  "playerId": 786,
                  "player": "N. Zaniolo",
                  "type": "Missing Fixture",
                  "reason": "Thigh Injury"
                },
                {
                  "fixtureId": 1550120,
                  "teamId": 494,
                  "playerId": 162907,
                  "player": "A. Zanoli",
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
          "key": "PRIMEIRA_LIGA",
          "leagueId": 94,
          "season": "2026",
          "standings": [
            {
              "teamId": 212,
              "team": "FC Porto",
              "rank": 1,
              "points": 18,
              "goalsDiff": 13,
              "form": "WWWWW",
              "all": {
                "played": 6,
                "wins": 6,
                "draws": 0,
                "losses": 0,
                "goalsFor": 15,
                "goalsAgainst": 2
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
                "played": 3,
                "wins": 3,
                "draws": 0,
                "losses": 0,
                "goalsFor": 9,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 211,
              "team": "Benfica",
              "rank": 2,
              "points": 16,
              "goalsDiff": 17,
              "form": "WWWWW",
              "all": {
                "played": 6,
                "wins": 5,
                "draws": 1,
                "losses": 0,
                "goalsFor": 21,
                "goalsAgainst": 4
              },
              "home": {
                "played": 3,
                "wins": 2,
                "draws": 1,
                "losses": 0,
                "goalsFor": 7,
                "goalsAgainst": 4
              },
              "away": {
                "played": 3,
                "wins": 3,
                "draws": 0,
                "losses": 0,
                "goalsFor": 14,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 228,
              "team": "Sporting CP",
              "rank": 3,
              "points": 14,
              "goalsDiff": 9,
              "form": "DWWWW",
              "all": {
                "played": 6,
                "wins": 4,
                "draws": 2,
                "losses": 0,
                "goalsFor": 15,
                "goalsAgainst": 6
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
                "played": 3,
                "wins": 1,
                "draws": 2,
                "losses": 0,
                "goalsFor": 7,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 227,
              "team": "Santa Clara",
              "rank": 4,
              "points": 14,
              "goalsDiff": 7,
              "form": "WWDWW",
              "all": {
                "played": 6,
                "wins": 4,
                "draws": 2,
                "losses": 0,
                "goalsFor": 11,
                "goalsAgainst": 4
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
                "played": 3,
                "wins": 2,
                "draws": 1,
                "losses": 0,
                "goalsFor": 4,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 240,
              "team": "Arouca",
              "rank": 5,
              "points": 10,
              "goalsDiff": 3,
              "form": "LDWLW",
              "all": {
                "played": 6,
                "wins": 3,
                "draws": 1,
                "losses": 2,
                "goalsFor": 8,
                "goalsAgainst": 5
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
                "played": 3,
                "wins": 1,
                "draws": 1,
                "losses": 1,
                "goalsFor": 1,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 15130,
              "team": "Estrela",
              "rank": 6,
              "points": 9,
              "goalsDiff": 2,
              "form": "WDWDD",
              "all": {
                "played": 5,
                "wins": 2,
                "draws": 3,
                "losses": 0,
                "goalsFor": 11,
                "goalsAgainst": 9
              },
              "home": {
                "played": 3,
                "wins": 1,
                "draws": 2,
                "losses": 0,
                "goalsFor": 6,
                "goalsAgainst": 5
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
              "rank": 7,
              "points": 8,
              "goalsDiff": -2,
              "form": "WWLDL",
              "all": {
                "played": 6,
                "wins": 2,
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
                "goalsFor": 2,
                "goalsAgainst": 5
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
              "teamId": 217,
              "team": "SC Braga",
              "rank": 8,
              "points": 7,
              "goalsDiff": 1,
              "form": "LWWD",
              "all": {
                "played": 4,
                "wins": 2,
                "draws": 1,
                "losses": 1,
                "goalsFor": 6,
                "goalsAgainst": 5
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
                "goalsFor": 5,
                "goalsAgainst": 5
              }
            },
            {
              "teamId": 762,
              "team": "GIL Vicente",
              "rank": 9,
              "points": 7,
              "goalsDiff": 0,
              "form": "LLDWW",
              "all": {
                "played": 5,
                "wins": 2,
                "draws": 1,
                "losses": 2,
                "goalsFor": 4,
                "goalsAgainst": 4
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
                "played": 2,
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 1,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 214,
              "team": "Maritimo",
              "rank": 10,
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
              "teamId": 4724,
              "team": "Alverca",
              "rank": 11,
              "points": 5,
              "goalsDiff": -3,
              "form": "WLDLD",
              "all": {
                "played": 6,
                "wins": 1,
                "draws": 2,
                "losses": 3,
                "goalsFor": 8,
                "goalsAgainst": 11
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
                "played": 3,
                "wins": 1,
                "draws": 0,
                "losses": 2,
                "goalsFor": 4,
                "goalsAgainst": 6
              }
            },
            {
              "teamId": 242,
              "team": "Famalicao",
              "rank": 12,
              "points": 4,
              "goalsDiff": -2,
              "form": "DDDLL",
              "all": {
                "played": 6,
                "wins": 0,
                "draws": 4,
                "losses": 2,
                "goalsFor": 5,
                "goalsAgainst": 7
              },
              "home": {
                "played": 3,
                "wins": 0,
                "draws": 2,
                "losses": 1,
                "goalsFor": 2,
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
              "teamId": 224,
              "team": "Vitória SC",
              "rank": 13,
              "points": 4,
              "goalsDiff": -3,
              "form": "LDLWL",
              "all": {
                "played": 6,
                "wins": 1,
                "draws": 1,
                "losses": 4,
                "goalsFor": 4,
                "goalsAgainst": 7
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
                "played": 3,
                "wins": 0,
                "draws": 0,
                "losses": 3,
                "goalsFor": 3,
                "goalsAgainst": 6
              }
            },
            {
              "teamId": 225,
              "team": "Nacional",
              "rank": 14,
              "points": 4,
              "goalsDiff": -4,
              "form": "LLLLW",
              "all": {
                "played": 6,
                "wins": 1,
                "draws": 1,
                "losses": 4,
                "goalsFor": 7,
                "goalsAgainst": 11
              },
              "home": {
                "played": 3,
                "wins": 1,
                "draws": 0,
                "losses": 2,
                "goalsFor": 5,
                "goalsAgainst": 6
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
              "rank": 15,
              "points": 4,
              "goalsDiff": -8,
              "form": "LLWLD",
              "all": {
                "played": 5,
                "wins": 1,
                "draws": 1,
                "losses": 3,
                "goalsFor": 4,
                "goalsAgainst": 12
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
                "played": 3,
                "wins": 1,
                "draws": 0,
                "losses": 2,
                "goalsFor": 2,
                "goalsAgainst": 6
              }
            },
            {
              "teamId": 226,
              "team": "Rio Ave",
              "rank": 16,
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
              "rank": 17,
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
              "teamId": 4716,
              "team": "Casa Pia",
              "rank": 18,
              "points": 1,
              "goalsDiff": -14,
              "form": "LDLLL",
              "all": {
                "played": 6,
                "wins": 0,
                "draws": 1,
                "losses": 5,
                "goalsFor": 1,
                "goalsAgainst": 15
              },
              "home": {
                "played": 3,
                "wins": 0,
                "draws": 0,
                "losses": 3,
                "goalsFor": 1,
                "goalsAgainst": 12
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
              "teamId": 226,
              "team": "Rio Ave",
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
              "teamId": 15130,
              "team": "Estrela",
              "form": "DDWDW",
              "all": {
                "played": 5,
                "wins": 2,
                "draws": 3,
                "losses": 0,
                "goalsFor": 11,
                "goalsAgainst": 9
              },
              "home": {
                "played": 3,
                "wins": 1,
                "draws": 2,
                "losses": 0,
                "goalsFor": 6,
                "goalsAgainst": 5
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
              "teamId": 215,
              "team": "Moreirense",
              "form": "DLWLL",
              "all": {
                "played": 5,
                "wins": 1,
                "draws": 1,
                "losses": 3,
                "goalsFor": 4,
                "goalsAgainst": 12
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
                "played": 3,
                "wins": 1,
                "draws": 0,
                "losses": 2,
                "goalsFor": 2,
                "goalsAgainst": 6
              }
            },
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
              "teamId": 217,
              "team": "SC Braga",
              "form": "DWWL",
              "all": {
                "played": 4,
                "wins": 2,
                "draws": 1,
                "losses": 1,
                "goalsFor": 6,
                "goalsAgainst": 5
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
                "goalsFor": 5,
                "goalsAgainst": 5
              }
            },
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
            }
          ],
          "fixtures": [
            {
              "fixtureId": 1575499,
              "kickoff": "2026-09-15T02:45:00+09:00",
              "status": "NS",
              "homeTeamId": 226,
              "homeTeam": "Rio Ave",
              "awayTeamId": 15130,
              "awayTeam": "Estrela",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": true,
              "lineups": []
            },
            {
              "fixtureId": 1575497,
              "kickoff": "2026-09-15T04:15:00+09:00",
              "status": "NS",
              "homeTeamId": 215,
              "homeTeam": "Moreirense",
              "awayTeamId": 214,
              "awayTeam": "Maritimo",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1575494,
              "kickoff": "2026-09-15T04:45:00+09:00",
              "status": "NS",
              "homeTeamId": 217,
              "homeTeam": "SC Braga",
              "awayTeamId": 230,
              "awayTeam": "Estoril",
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
              "points": 13,
              "goalsDiff": 7,
              "form": "WWWWD",
              "all": {
                "played": 5,
                "wins": 4,
                "draws": 1,
                "losses": 0,
                "goalsFor": 13,
                "goalsAgainst": 6
              },
              "home": {
                "played": 3,
                "wins": 2,
                "draws": 1,
                "losses": 0,
                "goalsFor": 6,
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
              "points": 12,
              "goalsDiff": 8,
              "form": "WWWLW",
              "all": {
                "played": 5,
                "wins": 4,
                "draws": 0,
                "losses": 1,
                "goalsFor": 12,
                "goalsAgainst": 4
              },
              "home": {
                "played": 3,
                "wins": 3,
                "draws": 0,
                "losses": 0,
                "goalsFor": 10,
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
              "teamId": 3579,
              "team": "Amed",
              "rank": 3,
              "points": 10,
              "goalsDiff": 7,
              "form": "WDWLW",
              "all": {
                "played": 5,
                "wins": 3,
                "draws": 1,
                "losses": 1,
                "goalsFor": 12,
                "goalsAgainst": 5
              },
              "home": {
                "played": 3,
                "wins": 3,
                "draws": 0,
                "losses": 0,
                "goalsFor": 10,
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
              "teamId": 1004,
              "team": "Kasımpaşa",
              "rank": 4,
              "points": 9,
              "goalsDiff": 2,
              "form": "WDDWD",
              "all": {
                "played": 5,
                "wins": 2,
                "draws": 3,
                "losses": 0,
                "goalsFor": 7,
                "goalsAgainst": 5
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
                "wins": 2,
                "draws": 1,
                "losses": 0,
                "goalsFor": 4,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 1007,
              "team": "Rizespor",
              "rank": 5,
              "points": 9,
              "goalsDiff": 1,
              "form": "WLWLW",
              "all": {
                "played": 5,
                "wins": 3,
                "draws": 0,
                "losses": 2,
                "goalsFor": 5,
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
                "played": 3,
                "wins": 3,
                "draws": 0,
                "losses": 0,
                "goalsFor": 5,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 7411,
              "team": "Kocaelispor",
              "rank": 6,
              "points": 9,
              "goalsDiff": 1,
              "form": "LWWWL",
              "all": {
                "played": 5,
                "wins": 3,
                "draws": 0,
                "losses": 2,
                "goalsFor": 5,
                "goalsAgainst": 4
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
                "played": 3,
                "wins": 1,
                "draws": 0,
                "losses": 2,
                "goalsFor": 2,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 996,
              "team": "Alanyaspor",
              "rank": 7,
              "points": 8,
              "goalsDiff": 1,
              "form": "DWLWD",
              "all": {
                "played": 5,
                "wins": 2,
                "draws": 2,
                "losses": 1,
                "goalsFor": 6,
                "goalsAgainst": 5
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
                "wins": 1,
                "draws": 1,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 998,
              "team": "Trabzonspor",
              "rank": 8,
              "points": 7,
              "goalsDiff": 4,
              "form": "LWLWD",
              "all": {
                "played": 5,
                "wins": 2,
                "draws": 1,
                "losses": 2,
                "goalsFor": 9,
                "goalsAgainst": 5
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
                "played": 3,
                "wins": 0,
                "draws": 1,
                "losses": 2,
                "goalsFor": 2,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 6343,
              "team": "Çorum FK",
              "rank": 9,
              "points": 7,
              "goalsDiff": 2,
              "form": "WWLLD",
              "all": {
                "played": 5,
                "wins": 2,
                "draws": 1,
                "losses": 2,
                "goalsFor": 12,
                "goalsAgainst": 10
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
                "played": 3,
                "wins": 1,
                "draws": 1,
                "losses": 1,
                "goalsFor": 9,
                "goalsAgainst": 9
              }
            },
            {
              "teamId": 3573,
              "team": "Gaziantep FK",
              "rank": 10,
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
              "teamId": 997,
              "team": "Gençlerbirliği S.K.",
              "rank": 11,
              "points": 7,
              "goalsDiff": -4,
              "form": "LLDWW",
              "all": {
                "played": 5,
                "wins": 2,
                "draws": 1,
                "losses": 2,
                "goalsFor": 5,
                "goalsAgainst": 9
              },
              "home": {
                "played": 3,
                "wins": 1,
                "draws": 1,
                "losses": 1,
                "goalsFor": 4,
                "goalsAgainst": 4
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
              "rank": 12,
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
              "teamId": 3603,
              "team": "Samsunspor",
              "rank": 13,
              "points": 4,
              "goalsDiff": -5,
              "form": "LLLWD",
              "all": {
                "played": 5,
                "wins": 1,
                "draws": 1,
                "losses": 3,
                "goalsFor": 6,
                "goalsAgainst": 11
              },
              "home": {
                "played": 3,
                "wins": 0,
                "draws": 1,
                "losses": 2,
                "goalsFor": 4,
                "goalsAgainst": 10
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
              "teamId": 564,
              "team": "Başakşehir",
              "rank": 14,
              "points": 4,
              "goalsDiff": -5,
              "form": "LLDLW",
              "all": {
                "played": 5,
                "wins": 1,
                "draws": 1,
                "losses": 3,
                "goalsFor": 6,
                "goalsAgainst": 11
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
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 1,
                "goalsAgainst": 7
              }
            },
            {
              "teamId": 1009,
              "team": "Erzurumspor FK",
              "rank": 15,
              "points": 4,
              "goalsDiff": -9,
              "form": "LWDLL",
              "all": {
                "played": 5,
                "wins": 1,
                "draws": 1,
                "losses": 3,
                "goalsFor": 2,
                "goalsAgainst": 11
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
                "played": 3,
                "wins": 0,
                "draws": 1,
                "losses": 2,
                "goalsFor": 1,
                "goalsAgainst": 7
              }
            },
            {
              "teamId": 607,
              "team": "Konyaspor",
              "rank": 16,
              "points": 3,
              "goalsDiff": -4,
              "form": "WLLLL",
              "all": {
                "played": 5,
                "wins": 1,
                "draws": 0,
                "losses": 4,
                "goalsFor": 4,
                "goalsAgainst": 8
              },
              "home": {
                "played": 3,
                "wins": 1,
                "draws": 0,
                "losses": 2,
                "goalsFor": 2,
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
            },
            {
              "teamId": 3588,
              "team": "Eyüpspor",
              "rank": 17,
              "points": 3,
              "goalsDiff": -6,
              "form": "LLWLL",
              "all": {
                "played": 5,
                "wins": 1,
                "draws": 0,
                "losses": 4,
                "goalsFor": 2,
                "goalsAgainst": 8
              },
              "home": {
                "played": 3,
                "wins": 1,
                "draws": 0,
                "losses": 2,
                "goalsFor": 2,
                "goalsAgainst": 4
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
              "rank": 18,
              "points": 2,
              "goalsDiff": -4,
              "form": "DLLLD",
              "all": {
                "played": 5,
                "wins": 0,
                "draws": 2,
                "losses": 3,
                "goalsFor": 9,
                "goalsAgainst": 13
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
                "wins": 0,
                "draws": 2,
                "losses": 1,
                "goalsFor": 7,
                "goalsAgainst": 8
              }
            }
          ],
          "teams": [
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
            }
          ],
          "fixtures": [
            {
              "fixtureId": 1584408,
              "kickoff": "2026-09-15T02:00:00+09:00",
              "status": "NS",
              "homeTeamId": 3573,
              "homeTeam": "Gaziantep FK",
              "awayTeamId": 611,
              "awayTeam": "Fenerbahçe",
              "injuriesChecked": true,
              "injuries": [
                {
                  "fixtureId": 1584408,
                  "teamId": 3573,
                  "playerId": 62038,
                  "player": "F. Bavuk",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1584408,
                  "teamId": 3573,
                  "playerId": 161884,
                  "player": "S. Hansen",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1584408,
                  "teamId": 3573,
                  "playerId": 522647,
                  "player": "A. O. Kalin",
                  "type": "Missing Fixture",
                  "reason": "Inactive"
                },
                {
                  "fixtureId": 1584408,
                  "teamId": 3573,
                  "playerId": 49964,
                  "player": "N. Sangare",
                  "type": "Missing Fixture",
                  "reason": "Inactive"
                },
                {
                  "fixtureId": 1584408,
                  "teamId": 611,
                  "playerId": 746,
                  "player": "M. Asensio",
                  "type": "Missing Fixture",
                  "reason": "Muscle Injury"
                },
                {
                  "fixtureId": 1584408,
                  "teamId": 611,
                  "playerId": 272721,
                  "player": "J. Oosterwolde",
                  "type": "Missing Fixture",
                  "reason": "Achilles Tendon Injury"
                }
              ],
              "lineupsChecked": true,
              "lineups": []
            }
          ]
        },
        {
          "key": "ACL",
          "leagueId": 17,
          "season": "2026",
          "standings": [
            {
              "teamId": 2929,
              "team": "Al-Ahli Jeddah",
              "rank": 1,
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
              "teamId": 2939,
              "team": "Al-Nassr",
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
              "teamId": 2932,
              "team": "Al-Hilal Saudi FC",
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
              "teamId": 2933,
              "team": "Al-Qadisiyah FC",
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
              "teamId": 2865,
              "team": "Al Ain",
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
              "teamId": 2870,
              "team": "Shabab Al Ahli Dubai",
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
              "teamId": 2872,
              "team": "Al-Wasl FC",
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
              "teamId": 2895,
              "team": "Al Sadd",
              "rank": 8,
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
              "teamId": 2903,
              "team": "Al-Gharafa",
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
              "teamId": 2916,
              "team": "Al Shamal",
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
              "teamId": 2733,
              "team": "Esteghlal FC",
              "rank": 11,
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
              "teamId": 2737,
              "team": "Tractor Sazi",
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
              "teamId": 4217,
              "team": "Neftchi",
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
              "teamId": 8009,
              "team": "Al Quwa Al Jawiya",
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
              "teamId": 2938,
              "team": "Al-Ittihad FC",
              "rank": 15,
              "points": 0,
              "goalsDiff": 0,
              "form": "W",
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
              "teamId": 4220,
              "team": "Pakhtakor",
              "rank": 16,
              "points": 0,
              "goalsDiff": 0,
              "form": "W",
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
              "teamId": 290,
              "team": "Kashima",
              "rank": 1,
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
              "teamId": 289,
              "team": "Vissel Kobe",
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
              "teamId": 281,
              "team": "Kashiwa Reysol",
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
              "teamId": 302,
              "team": "Kyoto Sanga",
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
              "teamId": 2762,
              "team": "Jeonbuk Motors",
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
              "teamId": 2750,
              "team": "Daejeon Citizen",
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
              "teamId": 2764,
              "team": "Pohang Steelers",
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
              "teamId": 2780,
              "team": "Buriram United",
              "rank": 8,
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
              "teamId": 2789,
              "team": "Port FC",
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
              "teamId": 2776,
              "team": "Ratchaburi",
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
              "teamId": 836,
              "team": "SHANGHAI SIPG",
              "rank": 11,
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
              "teamId": 830,
              "team": "Beijing Guoan",
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
              "teamId": 946,
              "team": "Newcastle Jets",
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
              "teamId": 2523,
              "team": "Johor Darul Takzim FC",
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
              "teamId": 293,
              "team": "Gamba Osaka",
              "rank": 15,
              "points": 0,
              "goalsDiff": 0,
              "form": "W",
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
              "teamId": 16400,
              "team": "Công An Nhân Dân",
              "rank": 16,
              "points": 0,
              "goalsDiff": 0,
              "form": "W",
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
              "teamId": 2870,
              "team": "Shabab Al Ahli Dubai",
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
              "teamId": 2737,
              "team": "Tractor Sazi",
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
              "teamId": 2916,
              "team": "Al Shamal",
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
              "teamId": 2938,
              "team": "Al-Ittihad FC",
              "form": "W",
              "all": {
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 4,
                "goalsAgainst": 1
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
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 4,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 2733,
              "team": "Esteghlal FC",
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
              "teamId": 2895,
              "team": "Al Sadd",
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
              "teamId": 2929,
              "team": "Al-Ahli Jeddah",
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
              "teamId": 4220,
              "team": "Pakhtakor",
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
              "teamId": 2933,
              "team": "Al-Qadisiyah FC",
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
              "teamId": 2872,
              "team": "Al-Wasl FC",
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
              "teamId": 290,
              "team": "Kashima",
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
              "teamId": 946,
              "team": "Newcastle Jets",
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
              "teamId": 293,
              "team": "Gamba Osaka",
              "form": "W",
              "all": {
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 1,
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
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 1,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 16400,
              "team": "Công An Nhân Dân",
              "form": "W",
              "all": {
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 2,
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
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 2,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 2750,
              "team": "Daejeon Citizen",
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
              "teamId": 302,
              "team": "Kyoto Sanga",
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
              "teamId": 2776,
              "team": "Ratchaburi",
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
              "teamId": 836,
              "team": "SHANGHAI SIPG",
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
              "teamId": 830,
              "team": "Beijing Guoan",
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
              "teamId": 2764,
              "team": "Pohang Steelers",
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
              "teamId": 2523,
              "team": "Johor Darul Takzim FC",
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
              "teamId": 2780,
              "team": "Buriram United",
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
              "fixtureId": 1629913,
              "kickoff": "2026-09-15T01:00:00+09:00",
              "status": "NS",
              "homeTeamId": 2870,
              "homeTeam": "Shabab Al Ahli Dubai",
              "awayTeamId": 2737,
              "awayTeam": "Tractor Sazi",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": true,
              "lineups": []
            },
            {
              "fixtureId": 1629914,
              "kickoff": "2026-09-15T01:00:00+09:00",
              "status": "NS",
              "homeTeamId": 2916,
              "homeTeam": "Al Shamal",
              "awayTeamId": 2938,
              "awayTeam": "Al-Ittihad FC",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": true,
              "lineups": []
            },
            {
              "fixtureId": 1629912,
              "kickoff": "2026-09-15T03:15:00+09:00",
              "status": "NS",
              "homeTeamId": 2733,
              "homeTeam": "Esteghlal FC",
              "awayTeamId": 2895,
              "awayTeam": "Al Sadd",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": true,
              "lineups": []
            },
            {
              "fixtureId": 1629915,
              "kickoff": "2026-09-15T03:15:00+09:00",
              "status": "NS",
              "homeTeamId": 2929,
              "homeTeam": "Al-Ahli Jeddah",
              "awayTeamId": 4220,
              "awayTeam": "Pakhtakor",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": true,
              "lineups": []
            },
            {
              "fixtureId": 1629916,
              "kickoff": "2026-09-15T03:15:00+09:00",
              "status": "NS",
              "homeTeamId": 2933,
              "homeTeam": "Al-Qadisiyah FC",
              "awayTeamId": 2872,
              "awayTeam": "Al-Wasl FC",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": true,
              "lineups": []
            },
            {
              "fixtureId": 1629919,
              "kickoff": "2026-09-15T19:00:00+09:00",
              "status": "NS",
              "homeTeamId": 290,
              "homeTeam": "Kashima",
              "awayTeamId": 946,
              "awayTeam": "Newcastle Jets",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1629918,
              "kickoff": "2026-09-15T19:00:00+09:00",
              "status": "NS",
              "homeTeamId": 293,
              "homeTeam": "Gamba Osaka",
              "awayTeamId": 16400,
              "awayTeam": "Công An Nhân Dân",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1629917,
              "kickoff": "2026-09-15T19:00:00+09:00",
              "status": "NS",
              "homeTeamId": 2750,
              "homeTeam": "Daejeon Citizen",
              "awayTeamId": 302,
              "awayTeam": "Kyoto Sanga",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1629920,
              "kickoff": "2026-09-15T19:00:00+09:00",
              "status": "NS",
              "homeTeamId": 2776,
              "homeTeam": "Ratchaburi",
              "awayTeamId": 836,
              "awayTeam": "SHANGHAI SIPG",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1629921,
              "kickoff": "2026-09-15T21:15:00+09:00",
              "status": "NS",
              "homeTeamId": 830,
              "homeTeam": "Beijing Guoan",
              "awayTeamId": 2764,
              "awayTeam": "Pohang Steelers",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1629922,
              "kickoff": "2026-09-15T21:15:00+09:00",
              "status": "NS",
              "homeTeamId": 2523,
              "homeTeam": "Johor Darul Takzim FC",
              "awayTeamId": 2780,
              "awayTeam": "Buriram United",
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
      "date": "2026-09-16",
      "updatedAt": "2026-09-14T15:01:01.134Z",
      "leagues": [
        {
          "key": "CHAMPIONSHIP",
          "leagueId": 40,
          "season": "2026",
          "standings": [
            {
              "teamId": 48,
              "team": "West Ham",
              "rank": 1,
              "points": 14,
              "goalsDiff": 11,
              "form": "WWWWD",
              "all": {
                "played": 7,
                "wins": 4,
                "draws": 2,
                "losses": 1,
                "goalsFor": 20,
                "goalsAgainst": 9
              },
              "home": {
                "played": 4,
                "wins": 3,
                "draws": 0,
                "losses": 1,
                "goalsFor": 14,
                "goalsAgainst": 4
              },
              "away": {
                "played": 3,
                "wins": 1,
                "draws": 2,
                "losses": 0,
                "goalsFor": 6,
                "goalsAgainst": 5
              }
            },
            {
              "teamId": 76,
              "team": "Swansea",
              "rank": 2,
              "points": 14,
              "goalsDiff": 6,
              "form": "WLDWW",
              "all": {
                "played": 7,
                "wins": 4,
                "draws": 2,
                "losses": 1,
                "goalsFor": 11,
                "goalsAgainst": 5
              },
              "home": {
                "played": 4,
                "wins": 2,
                "draws": 2,
                "losses": 0,
                "goalsFor": 5,
                "goalsAgainst": 1
              },
              "away": {
                "played": 3,
                "wins": 2,
                "draws": 0,
                "losses": 1,
                "goalsFor": 6,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 60,
              "team": "West Brom",
              "rank": 3,
              "points": 14,
              "goalsDiff": 3,
              "form": "DWWDL",
              "all": {
                "played": 7,
                "wins": 4,
                "draws": 2,
                "losses": 1,
                "goalsFor": 10,
                "goalsAgainst": 7
              },
              "home": {
                "played": 4,
                "wins": 2,
                "draws": 2,
                "losses": 0,
                "goalsFor": 6,
                "goalsAgainst": 3
              },
              "away": {
                "played": 3,
                "wins": 2,
                "draws": 0,
                "losses": 1,
                "goalsFor": 4,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 70,
              "team": "Middlesbrough",
              "rank": 4,
              "points": 13,
              "goalsDiff": 4,
              "form": "WWDWL",
              "all": {
                "played": 6,
                "wins": 4,
                "draws": 1,
                "losses": 1,
                "goalsFor": 12,
                "goalsAgainst": 8
              },
              "home": {
                "played": 3,
                "wins": 3,
                "draws": 0,
                "losses": 0,
                "goalsFor": 9,
                "goalsAgainst": 5
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
              "rank": 5,
              "points": 12,
              "goalsDiff": 3,
              "form": "DDLWW",
              "all": {
                "played": 7,
                "wins": 3,
                "draws": 3,
                "losses": 1,
                "goalsFor": 8,
                "goalsAgainst": 5
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
                "played": 4,
                "wins": 2,
                "draws": 2,
                "losses": 0,
                "goalsFor": 6,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 1335,
              "team": "Charlton",
              "rank": 6,
              "points": 12,
              "goalsDiff": -1,
              "form": "DDLDW",
              "all": {
                "played": 7,
                "wins": 3,
                "draws": 3,
                "losses": 1,
                "goalsFor": 6,
                "goalsAgainst": 7
              },
              "home": {
                "played": 4,
                "wins": 2,
                "draws": 2,
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
              "teamId": 39,
              "team": "Wolves",
              "rank": 7,
              "points": 11,
              "goalsDiff": 4,
              "form": "WDLWW",
              "all": {
                "played": 6,
                "wins": 3,
                "draws": 2,
                "losses": 1,
                "goalsFor": 14,
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
                "played": 4,
                "wins": 2,
                "draws": 1,
                "losses": 1,
                "goalsFor": 8,
                "goalsAgainst": 7
              }
            },
            {
              "teamId": 41,
              "team": "Southampton",
              "rank": 8,
              "points": 10,
              "goalsDiff": 10,
              "form": "WWDDW",
              "all": {
                "played": 7,
                "wins": 4,
                "draws": 2,
                "losses": 1,
                "goalsFor": 18,
                "goalsAgainst": 8
              },
              "home": {
                "played": 4,
                "wins": 4,
                "draws": 0,
                "losses": 0,
                "goalsFor": 15,
                "goalsAgainst": 4
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
              "teamId": 54,
              "team": "Birmingham",
              "rank": 9,
              "points": 10,
              "goalsDiff": 1,
              "form": "WLDDW",
              "all": {
                "played": 7,
                "wins": 2,
                "draws": 4,
                "losses": 1,
                "goalsFor": 10,
                "goalsAgainst": 9
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
                "played": 4,
                "wins": 2,
                "draws": 1,
                "losses": 1,
                "goalsFor": 5,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 75,
              "team": "Stoke City",
              "rank": 10,
              "points": 10,
              "goalsDiff": 0,
              "form": "WDWWL",
              "all": {
                "played": 7,
                "wins": 3,
                "draws": 1,
                "losses": 3,
                "goalsFor": 11,
                "goalsAgainst": 11
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
                "played": 4,
                "wins": 1,
                "draws": 1,
                "losses": 2,
                "goalsFor": 5,
                "goalsAgainst": 9
              }
            },
            {
              "teamId": 56,
              "team": "Bristol City",
              "rank": 11,
              "points": 10,
              "goalsDiff": -1,
              "form": "LWWWD",
              "all": {
                "played": 6,
                "wins": 3,
                "draws": 1,
                "losses": 2,
                "goalsFor": 10,
                "goalsAgainst": 11
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
                "played": 4,
                "wins": 2,
                "draws": 1,
                "losses": 1,
                "goalsFor": 8,
                "goalsAgainst": 8
              }
            },
            {
              "teamId": 71,
              "team": "Norwich",
              "rank": 12,
              "points": 9,
              "goalsDiff": 0,
              "form": "LWWLW",
              "all": {
                "played": 7,
                "wins": 3,
                "draws": 0,
                "losses": 4,
                "goalsFor": 13,
                "goalsAgainst": 13
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
                "played": 4,
                "wins": 1,
                "draws": 0,
                "losses": 3,
                "goalsFor": 6,
                "goalsAgainst": 9
              }
            },
            {
              "teamId": 58,
              "team": "Millwall",
              "rank": 13,
              "points": 9,
              "goalsDiff": 0,
              "form": "LWLLW",
              "all": {
                "played": 6,
                "wins": 3,
                "draws": 0,
                "losses": 3,
                "goalsFor": 11,
                "goalsAgainst": 11
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
                "played": 3,
                "wins": 1,
                "draws": 0,
                "losses": 2,
                "goalsFor": 4,
                "goalsAgainst": 8
              }
            },
            {
              "teamId": 62,
              "team": "Sheffield Utd",
              "rank": 14,
              "points": 9,
              "goalsDiff": -1,
              "form": "LWLWD",
              "all": {
                "played": 7,
                "wins": 2,
                "draws": 3,
                "losses": 2,
                "goalsFor": 8,
                "goalsAgainst": 9
              },
              "home": {
                "played": 4,
                "wins": 1,
                "draws": 1,
                "losses": 2,
                "goalsFor": 4,
                "goalsAgainst": 6
              },
              "away": {
                "played": 3,
                "wins": 1,
                "draws": 2,
                "losses": 0,
                "goalsFor": 4,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 67,
              "team": "Blackburn",
              "rank": 15,
              "points": 8,
              "goalsDiff": 0,
              "form": "WLLDL",
              "all": {
                "played": 7,
                "wins": 2,
                "draws": 2,
                "losses": 3,
                "goalsFor": 10,
                "goalsAgainst": 10
              },
              "home": {
                "played": 4,
                "wins": 2,
                "draws": 0,
                "losses": 2,
                "goalsFor": 7,
                "goalsAgainst": 6
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
              "teamId": 1379,
              "team": "Lincoln",
              "rank": 16,
              "points": 8,
              "goalsDiff": -1,
              "form": "WDDWL",
              "all": {
                "played": 6,
                "wins": 2,
                "draws": 2,
                "losses": 2,
                "goalsFor": 5,
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
                "played": 3,
                "wins": 2,
                "draws": 0,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 38,
              "team": "Watford",
              "rank": 17,
              "points": 8,
              "goalsDiff": -2,
              "form": "LWLLD",
              "all": {
                "played": 7,
                "wins": 2,
                "draws": 2,
                "losses": 3,
                "goalsFor": 7,
                "goalsAgainst": 9
              },
              "home": {
                "played": 4,
                "wins": 2,
                "draws": 1,
                "losses": 1,
                "goalsFor": 6,
                "goalsAgainst": 5
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
              "teamId": 1355,
              "team": "Portsmouth",
              "rank": 18,
              "points": 7,
              "goalsDiff": -1,
              "form": "DWLLW",
              "all": {
                "played": 6,
                "wins": 2,
                "draws": 1,
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
                "played": 3,
                "wins": 1,
                "draws": 1,
                "losses": 1,
                "goalsFor": 4,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 1837,
              "team": "Wrexham",
              "rank": 19,
              "points": 7,
              "goalsDiff": -4,
              "form": "LDDWL",
              "all": {
                "played": 7,
                "wins": 1,
                "draws": 4,
                "losses": 2,
                "goalsFor": 7,
                "goalsAgainst": 11
              },
              "home": {
                "played": 3,
                "wins": 0,
                "draws": 2,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 4
              },
              "away": {
                "played": 4,
                "wins": 1,
                "draws": 2,
                "losses": 1,
                "goalsFor": 4,
                "goalsAgainst": 7
              }
            },
            {
              "teamId": 68,
              "team": "Bolton",
              "rank": 20,
              "points": 7,
              "goalsDiff": -5,
              "form": "WLLLL",
              "all": {
                "played": 7,
                "wins": 2,
                "draws": 1,
                "losses": 4,
                "goalsFor": 7,
                "goalsAgainst": 12
              },
              "home": {
                "played": 4,
                "wins": 2,
                "draws": 0,
                "losses": 2,
                "goalsFor": 5,
                "goalsAgainst": 5
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
              "rank": 21,
              "points": 4,
              "goalsDiff": -4,
              "form": "LDLLD",
              "all": {
                "played": 7,
                "wins": 0,
                "draws": 4,
                "losses": 3,
                "goalsFor": 7,
                "goalsAgainst": 11
              },
              "home": {
                "played": 3,
                "wins": 0,
                "draws": 3,
                "losses": 0,
                "goalsFor": 4,
                "goalsAgainst": 4
              },
              "away": {
                "played": 4,
                "wins": 0,
                "draws": 1,
                "losses": 3,
                "goalsFor": 3,
                "goalsAgainst": 7
              }
            },
            {
              "teamId": 69,
              "team": "Derby",
              "rank": 22,
              "points": 4,
              "goalsDiff": -7,
              "form": "LLLWL",
              "all": {
                "played": 7,
                "wins": 1,
                "draws": 1,
                "losses": 5,
                "goalsFor": 6,
                "goalsAgainst": 13
              },
              "home": {
                "played": 4,
                "wins": 0,
                "draws": 1,
                "losses": 3,
                "goalsFor": 3,
                "goalsAgainst": 8
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
              "teamId": 59,
              "team": "Preston",
              "rank": 23,
              "points": 3,
              "goalsDiff": -7,
              "form": "LLWLL",
              "all": {
                "played": 7,
                "wins": 1,
                "draws": 0,
                "losses": 6,
                "goalsFor": 6,
                "goalsAgainst": 13
              },
              "home": {
                "played": 4,
                "wins": 1,
                "draws": 0,
                "losses": 3,
                "goalsFor": 4,
                "goalsAgainst": 8
              },
              "away": {
                "played": 3,
                "wins": 0,
                "draws": 0,
                "losses": 3,
                "goalsFor": 2,
                "goalsAgainst": 5
              }
            },
            {
              "teamId": 44,
              "team": "Burnley",
              "rank": 24,
              "points": 3,
              "goalsDiff": -8,
              "form": "LDLDL",
              "all": {
                "played": 7,
                "wins": 0,
                "draws": 3,
                "losses": 4,
                "goalsFor": 8,
                "goalsAgainst": 16
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
                "played": 4,
                "wins": 0,
                "draws": 1,
                "losses": 3,
                "goalsFor": 4,
                "goalsAgainst": 11
              }
            }
          ],
          "teams": [
            {
              "teamId": 56,
              "team": "Bristol City",
              "form": "LDWWWL",
              "all": {
                "played": 6,
                "wins": 3,
                "draws": 1,
                "losses": 2,
                "goalsFor": 10,
                "goalsAgainst": 11
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
                "played": 4,
                "wins": 2,
                "draws": 1,
                "losses": 1,
                "goalsFor": 8,
                "goalsAgainst": 8
              }
            },
            {
              "teamId": 1379,
              "team": "Lincoln",
              "form": "LLWDDW",
              "all": {
                "played": 6,
                "wins": 2,
                "draws": 2,
                "losses": 2,
                "goalsFor": 5,
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
                "played": 3,
                "wins": 2,
                "draws": 0,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 70,
              "team": "Middlesbrough",
              "form": "WLWDWW",
              "all": {
                "played": 6,
                "wins": 4,
                "draws": 1,
                "losses": 1,
                "goalsFor": 12,
                "goalsAgainst": 8
              },
              "home": {
                "played": 3,
                "wins": 3,
                "draws": 0,
                "losses": 0,
                "goalsFor": 9,
                "goalsAgainst": 5
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
              "teamId": 58,
              "team": "Millwall",
              "form": "WWLLWL",
              "all": {
                "played": 6,
                "wins": 3,
                "draws": 0,
                "losses": 3,
                "goalsFor": 11,
                "goalsAgainst": 11
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
                "played": 3,
                "wins": 1,
                "draws": 0,
                "losses": 2,
                "goalsFor": 4,
                "goalsAgainst": 8
              }
            }
          ],
          "fixtures": [
            {
              "fixtureId": 1563145,
              "kickoff": "2026-09-16T03:45:00+09:00",
              "status": "NS",
              "homeTeamId": 56,
              "homeTeam": "Bristol City",
              "awayTeamId": 1379,
              "awayTeam": "Lincoln",
              "injuriesChecked": true,
              "injuries": [
                {
                  "fixtureId": 1563145,
                  "teamId": 56,
                  "playerId": 69539,
                  "player": "L. McNally",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1563145,
                  "teamId": 1379,
                  "playerId": 19288,
                  "player": "T. Darikwa",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1563145,
                  "teamId": 1379,
                  "playerId": 394935,
                  "player": "M. Melia",
                  "type": "Missing Fixture",
                  "reason": "Thigh Injury"
                },
                {
                  "fixtureId": 1563145,
                  "teamId": 1379,
                  "playerId": 17740,
                  "player": "T. Hamer",
                  "type": "Questionable",
                  "reason": "Health problems"
                }
              ],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1563147,
              "kickoff": "2026-09-16T03:45:00+09:00",
              "status": "NS",
              "homeTeamId": 70,
              "homeTeam": "Middlesbrough",
              "awayTeamId": 58,
              "awayTeam": "Millwall",
              "injuriesChecked": true,
              "injuries": [
                {
                  "fixtureId": 1563147,
                  "teamId": 58,
                  "playerId": 272553,
                  "player": "J. Coburn",
                  "type": "Missing Fixture",
                  "reason": "Muscle Injury"
                },
                {
                  "fixtureId": 1563147,
                  "teamId": 58,
                  "playerId": 191337,
                  "player": "T. Crama",
                  "type": "Missing Fixture",
                  "reason": "Inactive"
                },
                {
                  "fixtureId": 1563147,
                  "teamId": 58,
                  "playerId": 149564,
                  "player": "L. Cundle",
                  "type": "Missing Fixture",
                  "reason": "Inactive"
                },
                {
                  "fixtureId": 1563147,
                  "teamId": 58,
                  "playerId": 1935,
                  "player": "C. De Norre",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1563147,
                  "teamId": 58,
                  "playerId": 19829,
                  "player": "A. Doughty",
                  "type": "Missing Fixture",
                  "reason": "Hamstring Injury"
                },
                {
                  "fixtureId": 1563147,
                  "teamId": 58,
                  "playerId": 368659,
                  "player": "M. Ivanovic",
                  "type": "Missing Fixture",
                  "reason": "Hamstring Injury"
                },
                {
                  "fixtureId": 1563147,
                  "teamId": 58,
                  "playerId": 190595,
                  "player": "L. Jensen",
                  "type": "Missing Fixture",
                  "reason": "Inactive"
                },
                {
                  "fixtureId": 1563147,
                  "teamId": 58,
                  "playerId": 295233,
                  "player": "M. Servais",
                  "type": "Missing Fixture",
                  "reason": "Hamstring Injury"
                },
                {
                  "fixtureId": 1563147,
                  "teamId": 58,
                  "playerId": 405300,
                  "player": "K. Lisbie",
                  "type": "Questionable",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1563147,
                  "teamId": 58,
                  "playerId": 2752,
                  "player": "M. Luongo",
                  "type": "Questionable",
                  "reason": "Knee Injury"
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
              "points": 15,
              "goalsDiff": 17,
              "form": "WWWWW",
              "all": {
                "played": 5,
                "wins": 5,
                "draws": 0,
                "losses": 0,
                "goalsFor": 21,
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
                "played": 3,
                "wins": 3,
                "draws": 0,
                "losses": 0,
                "goalsFor": 14,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 541,
              "team": "Real Madrid",
              "rank": 2,
              "points": 12,
              "goalsDiff": 10,
              "form": "WLWWW",
              "all": {
                "played": 5,
                "wins": 4,
                "draws": 0,
                "losses": 1,
                "goalsFor": 14,
                "goalsAgainst": 4
              },
              "home": {
                "played": 3,
                "wins": 3,
                "draws": 0,
                "losses": 0,
                "goalsFor": 12,
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
              "teamId": 542,
              "team": "Alaves",
              "rank": 3,
              "points": 10,
              "goalsDiff": 6,
              "form": "LWWDW",
              "all": {
                "played": 5,
                "wins": 3,
                "draws": 1,
                "losses": 1,
                "goalsFor": 11,
                "goalsAgainst": 5
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
                "played": 2,
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 2,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 530,
              "team": "Atletico Madrid",
              "rank": 4,
              "points": 10,
              "goalsDiff": 4,
              "form": "WLWDW",
              "all": {
                "played": 5,
                "wins": 3,
                "draws": 1,
                "losses": 1,
                "goalsFor": 10,
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
                "played": 3,
                "wins": 2,
                "draws": 0,
                "losses": 1,
                "goalsFor": 6,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 536,
              "team": "Sevilla",
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
                "draws": 0,
                "losses": 1,
                "goalsFor": 4,
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
              "teamId": 544,
              "team": "Deportivo La Coruna",
              "rank": 6,
              "points": 9,
              "goalsDiff": 3,
              "form": "DWWDD",
              "all": {
                "played": 5,
                "wins": 2,
                "draws": 3,
                "losses": 0,
                "goalsFor": 9,
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
                "played": 3,
                "wins": 1,
                "draws": 2,
                "losses": 0,
                "goalsFor": 5,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 543,
              "team": "Real Betis",
              "rank": 7,
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
              "teamId": 540,
              "team": "Espanyol",
              "rank": 8,
              "points": 7,
              "goalsDiff": 3,
              "form": "WDLLW",
              "all": {
                "played": 5,
                "wins": 2,
                "draws": 1,
                "losses": 2,
                "goalsFor": 8,
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
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 531,
              "team": "Athletic Club",
              "rank": 9,
              "points": 7,
              "goalsDiff": 1,
              "form": "DWWLL",
              "all": {
                "played": 5,
                "wins": 2,
                "draws": 1,
                "losses": 2,
                "goalsFor": 7,
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
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 2,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 4665,
              "team": "Racing Santander",
              "rank": 10,
              "points": 7,
              "goalsDiff": 0,
              "form": "WLWLD",
              "all": {
                "played": 5,
                "wins": 2,
                "draws": 1,
                "losses": 2,
                "goalsFor": 9,
                "goalsAgainst": 9
              },
              "home": {
                "played": 3,
                "wins": 2,
                "draws": 1,
                "losses": 0,
                "goalsFor": 7,
                "goalsAgainst": 5
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
              "teamId": 727,
              "team": "Osasuna",
              "rank": 11,
              "points": 7,
              "goalsDiff": -3,
              "form": "LLWWD",
              "all": {
                "played": 5,
                "wins": 2,
                "draws": 1,
                "losses": 2,
                "goalsFor": 5,
                "goalsAgainst": 8
              },
              "home": {
                "played": 3,
                "wins": 1,
                "draws": 1,
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
                "goalsAgainst": 6
              }
            },
            {
              "teamId": 548,
              "team": "Real Sociedad",
              "rank": 12,
              "points": 7,
              "goalsDiff": -5,
              "form": "LWDWL",
              "all": {
                "played": 6,
                "wins": 2,
                "draws": 1,
                "losses": 3,
                "goalsFor": 6,
                "goalsAgainst": 11
              },
              "home": {
                "played": 3,
                "wins": 1,
                "draws": 1,
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
              "teamId": 539,
              "team": "Levante",
              "rank": 13,
              "points": 5,
              "goalsDiff": -2,
              "form": "LDWDL",
              "all": {
                "played": 5,
                "wins": 1,
                "draws": 2,
                "losses": 2,
                "goalsFor": 7,
                "goalsAgainst": 9
              },
              "home": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 7,
                "goalsAgainst": 6
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
              "teamId": 546,
              "team": "Getafe",
              "rank": 14,
              "points": 5,
              "goalsDiff": -3,
              "form": "DDLWL",
              "all": {
                "played": 5,
                "wins": 1,
                "draws": 2,
                "losses": 2,
                "goalsFor": 3,
                "goalsAgainst": 6
              },
              "home": {
                "played": 3,
                "wins": 1,
                "draws": 2,
                "losses": 0,
                "goalsFor": 3,
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
              "teamId": 538,
              "team": "Celta Vigo",
              "rank": 15,
              "points": 4,
              "goalsDiff": -3,
              "form": "DDDLL",
              "all": {
                "played": 6,
                "wins": 0,
                "draws": 4,
                "losses": 2,
                "goalsFor": 3,
                "goalsAgainst": 6
              },
              "home": {
                "played": 3,
                "wins": 0,
                "draws": 1,
                "losses": 2,
                "goalsFor": 2,
                "goalsAgainst": 5
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
              "teamId": 728,
              "team": "Rayo Vallecano",
              "rank": 16,
              "points": 4,
              "goalsDiff": -6,
              "form": "LWLDL",
              "all": {
                "played": 5,
                "wins": 1,
                "draws": 1,
                "losses": 3,
                "goalsFor": 8,
                "goalsAgainst": 14
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
                "played": 3,
                "wins": 0,
                "draws": 0,
                "losses": 3,
                "goalsFor": 4,
                "goalsAgainst": 11
              }
            },
            {
              "teamId": 535,
              "team": "Malaga",
              "rank": 17,
              "points": 3,
              "goalsDiff": -6,
              "form": "DDLDL",
              "all": {
                "played": 5,
                "wins": 0,
                "draws": 3,
                "losses": 2,
                "goalsFor": 2,
                "goalsAgainst": 8
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
                "played": 3,
                "wins": 0,
                "draws": 1,
                "losses": 2,
                "goalsFor": 1,
                "goalsAgainst": 7
              }
            },
            {
              "teamId": 533,
              "team": "Villarreal",
              "rank": 18,
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
              "teamId": 797,
              "team": "Elche",
              "rank": 19,
              "points": 2,
              "goalsDiff": -7,
              "form": "DLLLD",
              "all": {
                "played": 5,
                "wins": 0,
                "draws": 2,
                "losses": 3,
                "goalsFor": 6,
                "goalsAgainst": 13
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
                "played": 3,
                "wins": 0,
                "draws": 2,
                "losses": 1,
                "goalsFor": 4,
                "goalsAgainst": 5
              }
            },
            {
              "teamId": 532,
              "team": "Valencia",
              "rank": 20,
              "points": 1,
              "goalsDiff": -9,
              "form": "LLLLD",
              "all": {
                "played": 5,
                "wins": 0,
                "draws": 1,
                "losses": 4,
                "goalsFor": 1,
                "goalsAgainst": 10
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
                "played": 2,
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 1,
                "goalsAgainst": 4
              }
            }
          ],
          "teams": [
            {
              "teamId": 728,
              "team": "Rayo Vallecano",
              "form": "LDLWL",
              "all": {
                "played": 5,
                "wins": 1,
                "draws": 1,
                "losses": 3,
                "goalsFor": 8,
                "goalsAgainst": 14
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
                "played": 3,
                "wins": 0,
                "draws": 0,
                "losses": 3,
                "goalsFor": 4,
                "goalsAgainst": 11
              }
            },
            {
              "teamId": 540,
              "team": "Espanyol",
              "form": "WLLDW",
              "all": {
                "played": 5,
                "wins": 2,
                "draws": 1,
                "losses": 2,
                "goalsFor": 8,
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
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 542,
              "team": "Alaves",
              "form": "WDWWL",
              "all": {
                "played": 5,
                "wins": 3,
                "draws": 1,
                "losses": 1,
                "goalsFor": 11,
                "goalsAgainst": 5
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
                "played": 2,
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 2,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 532,
              "team": "Valencia",
              "form": "DLLLL",
              "all": {
                "played": 5,
                "wins": 0,
                "draws": 1,
                "losses": 4,
                "goalsFor": 1,
                "goalsAgainst": 10
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
                "played": 2,
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 1,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 797,
              "team": "Elche",
              "form": "DLLLD",
              "all": {
                "played": 5,
                "wins": 0,
                "draws": 2,
                "losses": 3,
                "goalsFor": 6,
                "goalsAgainst": 13
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
                "played": 3,
                "wins": 0,
                "draws": 2,
                "losses": 1,
                "goalsFor": 4,
                "goalsAgainst": 5
              }
            },
            {
              "teamId": 541,
              "team": "Real Madrid",
              "form": "WWWLW",
              "all": {
                "played": 5,
                "wins": 4,
                "draws": 0,
                "losses": 1,
                "goalsFor": 14,
                "goalsAgainst": 4
              },
              "home": {
                "played": 3,
                "wins": 3,
                "draws": 0,
                "losses": 0,
                "goalsFor": 12,
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
            }
          ],
          "fixtures": [
            {
              "fixtureId": 1570391,
              "kickoff": "2026-09-16T02:00:00+09:00",
              "status": "NS",
              "homeTeamId": 728,
              "homeTeam": "Rayo Vallecano",
              "awayTeamId": 540,
              "awayTeam": "Espanyol",
              "injuriesChecked": true,
              "injuries": [
                {
                  "fixtureId": 1570391,
                  "teamId": 728,
                  "playerId": 11379,
                  "player": "A. Batalla",
                  "type": "Missing Fixture",
                  "reason": "Broken calfbone"
                },
                {
                  "fixtureId": 1570391,
                  "teamId": 728,
                  "playerId": 1847,
                  "player": "Luiz Felipe",
                  "type": "Missing Fixture",
                  "reason": "Hamstring Injury"
                },
                {
                  "fixtureId": 1570391,
                  "teamId": 728,
                  "playerId": 122657,
                  "player": "R. Nteka",
                  "type": "Missing Fixture",
                  "reason": "Muscle Injury"
                },
                {
                  "fixtureId": 1570391,
                  "teamId": 728,
                  "playerId": 131546,
                  "player": "I. Palazon",
                  "type": "Missing Fixture",
                  "reason": "Muscle Injury"
                },
                {
                  "fixtureId": 1570391,
                  "teamId": 728,
                  "playerId": 314006,
                  "player": "J. Vertrouwd",
                  "type": "Missing Fixture",
                  "reason": "Muscle Injury"
                },
                {
                  "fixtureId": 1570391,
                  "teamId": 540,
                  "playerId": 47396,
                  "player": "K. Garcia",
                  "type": "Missing Fixture",
                  "reason": "Hamstring Injury"
                },
                {
                  "fixtureId": 1570391,
                  "teamId": 540,
                  "playerId": 47299,
                  "player": "A. Gorosabel",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1570391,
                  "teamId": 540,
                  "playerId": 47349,
                  "player": "J. Puado",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                }
              ],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1570383,
              "kickoff": "2026-09-16T03:00:00+09:00",
              "status": "NS",
              "homeTeamId": 542,
              "homeTeam": "Alaves",
              "awayTeamId": 532,
              "awayTeam": "Valencia",
              "injuriesChecked": true,
              "injuries": [
                {
                  "fixtureId": 1570383,
                  "teamId": 542,
                  "playerId": 6638,
                  "player": "F. Garces",
                  "type": "Missing Fixture",
                  "reason": "Suspended"
                },
                {
                  "fixtureId": 1570383,
                  "teamId": 542,
                  "playerId": 332645,
                  "player": "M. Rodriguez",
                  "type": "Missing Fixture",
                  "reason": "Ankle Injury"
                },
                {
                  "fixtureId": 1570383,
                  "teamId": 542,
                  "playerId": 330440,
                  "player": "A. Manas",
                  "type": "Questionable",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1570383,
                  "teamId": 532,
                  "playerId": 19352,
                  "player": "S. Canos",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1570383,
                  "teamId": 532,
                  "playerId": 181582,
                  "player": "J. Copete",
                  "type": "Missing Fixture",
                  "reason": "Ankle Injury"
                },
                {
                  "fixtureId": 1570383,
                  "teamId": 532,
                  "playerId": 916,
                  "player": "M. Diakhaby",
                  "type": "Missing Fixture",
                  "reason": "Muscle Injury"
                },
                {
                  "fixtureId": 1570383,
                  "teamId": 532,
                  "playerId": 47251,
                  "player": "D. Foulquier",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1570383,
                  "teamId": 532,
                  "playerId": 162127,
                  "player": "D. Lopez",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1570383,
                  "teamId": 532,
                  "playerId": 46933,
                  "player": "L. Rioja",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1570383,
                  "teamId": 532,
                  "playerId": 2476,
                  "player": "G. Rodriguez",
                  "type": "Missing Fixture",
                  "reason": "Muscle Injury"
                },
                {
                  "fixtureId": 1570383,
                  "teamId": 532,
                  "playerId": 31406,
                  "player": "U. Sadiq",
                  "type": "Missing Fixture",
                  "reason": "Muscle Injury"
                },
                {
                  "fixtureId": 1570383,
                  "teamId": 532,
                  "playerId": 333672,
                  "player": "C. Tarrega",
                  "type": "Questionable",
                  "reason": "Injury"
                }
              ],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1570388,
              "kickoff": "2026-09-16T04:30:00+09:00",
              "status": "NS",
              "homeTeamId": 797,
              "homeTeam": "Elche",
              "awayTeamId": 541,
              "awayTeam": "Real Madrid",
              "injuriesChecked": true,
              "injuries": [
                {
                  "fixtureId": 1570388,
                  "teamId": 797,
                  "playerId": 284415,
                  "player": "Y. Santiago",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1570388,
                  "teamId": 541,
                  "playerId": 372,
                  "player": "Eder Militao",
                  "type": "Missing Fixture",
                  "reason": "Hamstring Injury"
                },
                {
                  "fixtureId": 1570388,
                  "teamId": 541,
                  "playerId": 653,
                  "player": "F. Mendy",
                  "type": "Missing Fixture",
                  "reason": "Hip Injury"
                },
                {
                  "fixtureId": 1570388,
                  "teamId": 541,
                  "playerId": 10009,
                  "player": "Rodrygo",
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
          "key": "EREDIVISIE",
          "leagueId": 88,
          "season": "2026",
          "standings": [
            {
              "teamId": 197,
              "team": "PSV Eindhoven",
              "rank": 1,
              "points": 16,
              "goalsDiff": 15,
              "form": "WWWWW",
              "all": {
                "played": 6,
                "wins": 5,
                "draws": 1,
                "losses": 0,
                "goalsFor": 22,
                "goalsAgainst": 7
              },
              "home": {
                "played": 3,
                "wins": 2,
                "draws": 1,
                "losses": 0,
                "goalsFor": 11,
                "goalsAgainst": 4
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
              "points": 16,
              "goalsDiff": 11,
              "form": "DWWWW",
              "all": {
                "played": 6,
                "wins": 5,
                "draws": 1,
                "losses": 0,
                "goalsFor": 17,
                "goalsAgainst": 6
              },
              "home": {
                "played": 3,
                "wins": 2,
                "draws": 1,
                "losses": 0,
                "goalsFor": 8,
                "goalsAgainst": 3
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
              "teamId": 209,
              "team": "Feyenoord",
              "rank": 3,
              "points": 14,
              "goalsDiff": 13,
              "form": "WWDWD",
              "all": {
                "played": 6,
                "wins": 4,
                "draws": 2,
                "losses": 0,
                "goalsFor": 20,
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
                "played": 4,
                "wins": 4,
                "draws": 0,
                "losses": 0,
                "goalsFor": 16,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 415,
              "team": "Twente",
              "rank": 4,
              "points": 13,
              "goalsDiff": 7,
              "form": "WWDWW",
              "all": {
                "played": 6,
                "wins": 4,
                "draws": 1,
                "losses": 1,
                "goalsFor": 12,
                "goalsAgainst": 5
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
                "played": 3,
                "wins": 1,
                "draws": 1,
                "losses": 1,
                "goalsFor": 6,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 194,
              "team": "Ajax",
              "rank": 5,
              "points": 10,
              "goalsDiff": 8,
              "form": "WLWDW",
              "all": {
                "played": 5,
                "wins": 3,
                "draws": 1,
                "losses": 1,
                "goalsFor": 14,
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
                "played": 3,
                "wins": 3,
                "draws": 0,
                "losses": 0,
                "goalsFor": 11,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 196,
              "team": "Excelsior",
              "rank": 6,
              "points": 10,
              "goalsDiff": 6,
              "form": "LDWWL",
              "all": {
                "played": 6,
                "wins": 3,
                "draws": 1,
                "losses": 2,
                "goalsFor": 13,
                "goalsAgainst": 7
              },
              "home": {
                "played": 3,
                "wins": 1,
                "draws": 0,
                "losses": 2,
                "goalsFor": 4,
                "goalsAgainst": 5
              },
              "away": {
                "played": 3,
                "wins": 2,
                "draws": 1,
                "losses": 0,
                "goalsFor": 9,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 205,
              "team": "Fortuna Sittard",
              "rank": 7,
              "points": 10,
              "goalsDiff": -2,
              "form": "LWWLW",
              "all": {
                "played": 6,
                "wins": 3,
                "draws": 1,
                "losses": 2,
                "goalsFor": 12,
                "goalsAgainst": 14
              },
              "home": {
                "played": 3,
                "wins": 1,
                "draws": 0,
                "losses": 2,
                "goalsFor": 4,
                "goalsAgainst": 8
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
              "teamId": 410,
              "team": "GO Ahead Eagles",
              "rank": 8,
              "points": 9,
              "goalsDiff": 2,
              "form": "DDLWD",
              "all": {
                "played": 6,
                "wins": 2,
                "draws": 3,
                "losses": 1,
                "goalsFor": 15,
                "goalsAgainst": 13
              },
              "home": {
                "played": 3,
                "wins": 2,
                "draws": 1,
                "losses": 0,
                "goalsFor": 8,
                "goalsAgainst": 3
              },
              "away": {
                "played": 3,
                "wins": 0,
                "draws": 2,
                "losses": 1,
                "goalsFor": 7,
                "goalsAgainst": 10
              }
            },
            {
              "teamId": 202,
              "team": "Groningen",
              "rank": 9,
              "points": 8,
              "goalsDiff": -1,
              "form": "DDLLW",
              "all": {
                "played": 6,
                "wins": 2,
                "draws": 2,
                "losses": 2,
                "goalsFor": 12,
                "goalsAgainst": 13
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
                "played": 3,
                "wins": 1,
                "draws": 1,
                "losses": 1,
                "goalsFor": 6,
                "goalsAgainst": 7
              }
            },
            {
              "teamId": 413,
              "team": "NEC Nijmegen",
              "rank": 10,
              "points": 7,
              "goalsDiff": -1,
              "form": "LDLWW",
              "all": {
                "played": 6,
                "wins": 2,
                "draws": 1,
                "losses": 3,
                "goalsFor": 11,
                "goalsAgainst": 12
              },
              "home": {
                "played": 3,
                "wins": 0,
                "draws": 1,
                "losses": 2,
                "goalsFor": 4,
                "goalsAgainst": 7
              },
              "away": {
                "played": 3,
                "wins": 2,
                "draws": 0,
                "losses": 1,
                "goalsFor": 7,
                "goalsAgainst": 5
              }
            },
            {
              "teamId": 210,
              "team": "Heerenveen",
              "rank": 11,
              "points": 6,
              "goalsDiff": -2,
              "form": "DLDLD",
              "all": {
                "played": 6,
                "wins": 1,
                "draws": 3,
                "losses": 2,
                "goalsFor": 7,
                "goalsAgainst": 9
              },
              "home": {
                "played": 4,
                "wins": 1,
                "draws": 1,
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
              "teamId": 426,
              "team": "Sparta Rotterdam",
              "rank": 12,
              "points": 5,
              "goalsDiff": -3,
              "form": "LDLDW",
              "all": {
                "played": 6,
                "wins": 1,
                "draws": 2,
                "losses": 3,
                "goalsFor": 10,
                "goalsAgainst": 13
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
                "played": 3,
                "wins": 1,
                "draws": 0,
                "losses": 2,
                "goalsFor": 5,
                "goalsAgainst": 7
              }
            },
            {
              "teamId": 427,
              "team": "Telstar",
              "rank": 13,
              "points": 5,
              "goalsDiff": -6,
              "form": "DLDLL",
              "all": {
                "played": 6,
                "wins": 1,
                "draws": 2,
                "losses": 3,
                "goalsFor": 5,
                "goalsAgainst": 11
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
                "played": 3,
                "wins": 1,
                "draws": 1,
                "losses": 1,
                "goalsFor": 2,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 207,
              "team": "Utrecht",
              "rank": 14,
              "points": 5,
              "goalsDiff": -8,
              "form": "WDLDL",
              "all": {
                "played": 6,
                "wins": 1,
                "draws": 2,
                "losses": 3,
                "goalsFor": 11,
                "goalsAgainst": 19
              },
              "home": {
                "played": 3,
                "wins": 0,
                "draws": 1,
                "losses": 2,
                "goalsFor": 5,
                "goalsAgainst": 13
              },
              "away": {
                "played": 3,
                "wins": 1,
                "draws": 1,
                "losses": 1,
                "goalsFor": 6,
                "goalsAgainst": 6
              }
            },
            {
              "teamId": 420,
              "team": "Cambuur",
              "rank": 15,
              "points": 4,
              "goalsDiff": -9,
              "form": "WDLLL",
              "all": {
                "played": 6,
                "wins": 1,
                "draws": 1,
                "losses": 4,
                "goalsFor": 9,
                "goalsAgainst": 18
              },
              "home": {
                "played": 4,
                "wins": 1,
                "draws": 0,
                "losses": 3,
                "goalsFor": 6,
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
            },
            {
              "teamId": 193,
              "team": "PEC Zwolle",
              "rank": 16,
              "points": 4,
              "goalsDiff": -11,
              "form": "LDLWL",
              "all": {
                "played": 6,
                "wins": 1,
                "draws": 1,
                "losses": 4,
                "goalsFor": 6,
                "goalsAgainst": 17
              },
              "home": {
                "played": 3,
                "wins": 0,
                "draws": 0,
                "losses": 3,
                "goalsFor": 1,
                "goalsAgainst": 12
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
              "teamId": 195,
              "team": "Willem II",
              "rank": 17,
              "points": 2,
              "goalsDiff": -9,
              "form": "DLDLL",
              "all": {
                "played": 5,
                "wins": 0,
                "draws": 2,
                "losses": 3,
                "goalsFor": 5,
                "goalsAgainst": 14
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
                "played": 2,
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 2,
                "goalsAgainst": 5
              }
            },
            {
              "teamId": 198,
              "team": "ADO Den Haag",
              "rank": 18,
              "points": 1,
              "goalsDiff": -10,
              "form": "LLDLL",
              "all": {
                "played": 6,
                "wins": 0,
                "draws": 1,
                "losses": 5,
                "goalsFor": 6,
                "goalsAgainst": 16
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
                "played": 4,
                "wins": 0,
                "draws": 1,
                "losses": 3,
                "goalsFor": 3,
                "goalsAgainst": 9
              }
            }
          ],
          "teams": [
            {
              "teamId": 194,
              "team": "Ajax",
              "form": "WDWLW",
              "all": {
                "played": 5,
                "wins": 3,
                "draws": 1,
                "losses": 1,
                "goalsFor": 14,
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
                "played": 3,
                "wins": 3,
                "draws": 0,
                "losses": 0,
                "goalsFor": 11,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 195,
              "team": "Willem II",
              "form": "LLDLD",
              "all": {
                "played": 5,
                "wins": 0,
                "draws": 2,
                "losses": 3,
                "goalsFor": 5,
                "goalsAgainst": 14
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
                "played": 2,
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 2,
                "goalsAgainst": 5
              }
            }
          ],
          "fixtures": [
            {
              "fixtureId": 1552143,
              "kickoff": "2026-09-16T03:00:00+09:00",
              "status": "NS",
              "homeTeamId": 194,
              "homeTeam": "Ajax",
              "awayTeamId": 195,
              "awayTeam": "Willem II",
              "injuriesChecked": true,
              "injuries": [
                {
                  "fixtureId": 1552143,
                  "teamId": 194,
                  "playerId": 301771,
                  "player": "S. Adingra",
                  "type": "Missing Fixture",
                  "reason": "Foot Injury"
                },
                {
                  "fixtureId": 1552143,
                  "teamId": 194,
                  "playerId": 531,
                  "player": "D. Blind",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1552143,
                  "teamId": 194,
                  "playerId": 453706,
                  "player": "A. Bouwman",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1552143,
                  "teamId": 195,
                  "playerId": 411824,
                  "player": "A. Culum",
                  "type": "Missing Fixture",
                  "reason": "Foot Injury"
                },
                {
                  "fixtureId": 1552143,
                  "teamId": 195,
                  "playerId": 1405,
                  "player": "T. Didillon Hodl",
                  "type": "Missing Fixture",
                  "reason": "Hamstring Injury"
                },
                {
                  "fixtureId": 1552143,
                  "teamId": 195,
                  "playerId": 24924,
                  "player": "J. Hoogma",
                  "type": "Missing Fixture",
                  "reason": "Inactive"
                },
                {
                  "fixtureId": 1552143,
                  "teamId": 195,
                  "playerId": 393871,
                  "player": "A. Lachkar",
                  "type": "Missing Fixture",
                  "reason": "Groin Injury"
                },
                {
                  "fixtureId": 1552143,
                  "teamId": 195,
                  "playerId": 37712,
                  "player": "J. Schuurman",
                  "type": "Missing Fixture",
                  "reason": "Knock"
                },
                {
                  "fixtureId": 1552143,
                  "teamId": 195,
                  "playerId": 480309,
                  "player": "A. Zarrouk",
                  "type": "Missing Fixture",
                  "reason": "Surgery"
                },
                {
                  "fixtureId": 1552143,
                  "teamId": 195,
                  "playerId": 36937,
                  "player": "V. van Crooij",
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
          "key": "SCOTTISH_PREMIERSHIP",
          "leagueId": 179,
          "season": "2026",
          "standings": [
            {
              "teamId": 247,
              "team": "Celtic",
              "rank": 1,
              "points": 18,
              "goalsDiff": 11,
              "form": "WWWWW",
              "all": {
                "played": 6,
                "wins": 6,
                "draws": 0,
                "losses": 0,
                "goalsFor": 14,
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
                "played": 3,
                "wins": 3,
                "draws": 0,
                "losses": 0,
                "goalsFor": 8,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 257,
              "team": "Rangers",
              "rank": 2,
              "points": 13,
              "goalsDiff": 3,
              "form": "WWWWL",
              "all": {
                "played": 6,
                "wins": 4,
                "draws": 1,
                "losses": 1,
                "goalsFor": 7,
                "goalsAgainst": 4
              },
              "home": {
                "played": 3,
                "wins": 2,
                "draws": 0,
                "losses": 1,
                "goalsFor": 3,
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
              "rank": 3,
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
              "rank": 4,
              "points": 10,
              "goalsDiff": 2,
              "form": "LLWDW",
              "all": {
                "played": 6,
                "wins": 3,
                "draws": 1,
                "losses": 2,
                "goalsFor": 8,
                "goalsAgainst": 6
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
                "played": 3,
                "wins": 2,
                "draws": 0,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 1
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
              "goalsDiff": -1,
              "form": "LWDLL",
              "all": {
                "played": 6,
                "wins": 2,
                "draws": 1,
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
                "goalsAgainst": 5
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
              "teamId": 249,
              "team": "Hibernian",
              "form": "LWWLL",
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
              "teamId": 250,
              "team": "Kilmarnock",
              "form": "LLLLD",
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
            },
            {
              "teamId": 256,
              "team": "Motherwell",
              "form": "WDDWL",
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
              "teamId": 252,
              "team": "Aberdeen",
              "form": "WLLLD",
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
              "form": "LDLLD",
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
              "teamId": 254,
              "team": "Heart Of Midlothian",
              "form": "LWWWW",
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
            }
          ],
          "fixtures": [
            {
              "fixtureId": 1556642,
              "kickoff": "2026-09-16T03:45:00+09:00",
              "status": "NS",
              "homeTeamId": 249,
              "homeTeam": "Hibernian",
              "awayTeamId": 250,
              "awayTeam": "Kilmarnock",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1556643,
              "kickoff": "2026-09-16T03:45:00+09:00",
              "status": "NS",
              "homeTeamId": 256,
              "homeTeam": "Motherwell",
              "awayTeamId": 252,
              "awayTeam": "Aberdeen",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1556641,
              "kickoff": "2026-09-16T03:45:00+09:00",
              "status": "NS",
              "homeTeamId": 1389,
              "homeTeam": "Falkirk",
              "awayTeamId": 254,
              "awayTeam": "Heart Of Midlothian",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            }
          ]
        },
        {
          "key": "ACL",
          "leagueId": 17,
          "season": "2026",
          "standings": [
            {
              "teamId": 2929,
              "team": "Al-Ahli Jeddah",
              "rank": 1,
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
              "teamId": 2939,
              "team": "Al-Nassr",
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
              "teamId": 2932,
              "team": "Al-Hilal Saudi FC",
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
              "teamId": 2933,
              "team": "Al-Qadisiyah FC",
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
              "teamId": 2865,
              "team": "Al Ain",
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
              "teamId": 2870,
              "team": "Shabab Al Ahli Dubai",
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
              "teamId": 2872,
              "team": "Al-Wasl FC",
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
              "teamId": 2895,
              "team": "Al Sadd",
              "rank": 8,
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
              "teamId": 2903,
              "team": "Al-Gharafa",
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
              "teamId": 2916,
              "team": "Al Shamal",
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
              "teamId": 2733,
              "team": "Esteghlal FC",
              "rank": 11,
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
              "teamId": 2737,
              "team": "Tractor Sazi",
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
              "teamId": 4217,
              "team": "Neftchi",
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
              "teamId": 8009,
              "team": "Al Quwa Al Jawiya",
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
              "teamId": 2938,
              "team": "Al-Ittihad FC",
              "rank": 15,
              "points": 0,
              "goalsDiff": 0,
              "form": "W",
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
              "teamId": 4220,
              "team": "Pakhtakor",
              "rank": 16,
              "points": 0,
              "goalsDiff": 0,
              "form": "W",
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
              "teamId": 290,
              "team": "Kashima",
              "rank": 1,
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
              "teamId": 289,
              "team": "Vissel Kobe",
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
              "teamId": 281,
              "team": "Kashiwa Reysol",
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
              "teamId": 302,
              "team": "Kyoto Sanga",
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
              "teamId": 2762,
              "team": "Jeonbuk Motors",
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
              "teamId": 2750,
              "team": "Daejeon Citizen",
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
              "teamId": 2764,
              "team": "Pohang Steelers",
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
              "teamId": 2780,
              "team": "Buriram United",
              "rank": 8,
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
              "teamId": 2789,
              "team": "Port FC",
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
              "teamId": 2776,
              "team": "Ratchaburi",
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
              "teamId": 836,
              "team": "SHANGHAI SIPG",
              "rank": 11,
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
              "teamId": 830,
              "team": "Beijing Guoan",
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
              "teamId": 946,
              "team": "Newcastle Jets",
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
              "teamId": 2523,
              "team": "Johor Darul Takzim FC",
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
              "teamId": 293,
              "team": "Gamba Osaka",
              "rank": 15,
              "points": 0,
              "goalsDiff": 0,
              "form": "W",
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
              "teamId": 16400,
              "team": "Công An Nhân Dân",
              "rank": 16,
              "points": 0,
              "goalsDiff": 0,
              "form": "W",
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
              "teamId": 2865,
              "team": "Al Ain",
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
              "teamId": 2939,
              "team": "Al-Nassr",
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
              "teamId": 2932,
              "team": "Al-Hilal Saudi FC",
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
              "teamId": 2903,
              "team": "Al-Gharafa",
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
              "teamId": 2762,
              "team": "Jeonbuk Motors",
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
              "teamId": 281,
              "team": "Kashiwa Reysol",
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
              "teamId": 2789,
              "team": "Port FC",
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
              "teamId": 289,
              "team": "Vissel Kobe",
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
              "fixtureId": 1629923,
              "kickoff": "2026-09-16T01:00:00+09:00",
              "status": "NS",
              "homeTeamId": 2865,
              "homeTeam": "Al Ain",
              "awayTeamId": 2939,
              "awayTeam": "Al-Nassr",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1629924,
              "kickoff": "2026-09-16T03:15:00+09:00",
              "status": "NS",
              "homeTeamId": 2932,
              "homeTeam": "Al-Hilal Saudi FC",
              "awayTeamId": 2903,
              "awayTeam": "Al-Gharafa",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1629925,
              "kickoff": "2026-09-16T19:00:00+09:00",
              "status": "NS",
              "homeTeamId": 2762,
              "homeTeam": "Jeonbuk Motors",
              "awayTeamId": 281,
              "awayTeam": "Kashiwa Reysol",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1629926,
              "kickoff": "2026-09-16T21:15:00+09:00",
              "status": "NS",
              "homeTeamId": 2789,
              "homeTeam": "Port FC",
              "awayTeamId": 289,
              "awayTeam": "Vissel Kobe",
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
      "date": "2026-09-17",
      "updatedAt": "2026-09-14T15:01:14.613Z",
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
              "points": 15,
              "goalsDiff": 17,
              "form": "WWWWW",
              "all": {
                "played": 5,
                "wins": 5,
                "draws": 0,
                "losses": 0,
                "goalsFor": 21,
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
                "played": 3,
                "wins": 3,
                "draws": 0,
                "losses": 0,
                "goalsFor": 14,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 541,
              "team": "Real Madrid",
              "rank": 2,
              "points": 12,
              "goalsDiff": 10,
              "form": "WLWWW",
              "all": {
                "played": 5,
                "wins": 4,
                "draws": 0,
                "losses": 1,
                "goalsFor": 14,
                "goalsAgainst": 4
              },
              "home": {
                "played": 3,
                "wins": 3,
                "draws": 0,
                "losses": 0,
                "goalsFor": 12,
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
              "teamId": 542,
              "team": "Alaves",
              "rank": 3,
              "points": 10,
              "goalsDiff": 6,
              "form": "LWWDW",
              "all": {
                "played": 5,
                "wins": 3,
                "draws": 1,
                "losses": 1,
                "goalsFor": 11,
                "goalsAgainst": 5
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
                "played": 2,
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 2,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 530,
              "team": "Atletico Madrid",
              "rank": 4,
              "points": 10,
              "goalsDiff": 4,
              "form": "WLWDW",
              "all": {
                "played": 5,
                "wins": 3,
                "draws": 1,
                "losses": 1,
                "goalsFor": 10,
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
                "played": 3,
                "wins": 2,
                "draws": 0,
                "losses": 1,
                "goalsFor": 6,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 536,
              "team": "Sevilla",
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
                "draws": 0,
                "losses": 1,
                "goalsFor": 4,
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
              "teamId": 544,
              "team": "Deportivo La Coruna",
              "rank": 6,
              "points": 9,
              "goalsDiff": 3,
              "form": "DWWDD",
              "all": {
                "played": 5,
                "wins": 2,
                "draws": 3,
                "losses": 0,
                "goalsFor": 9,
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
                "played": 3,
                "wins": 1,
                "draws": 2,
                "losses": 0,
                "goalsFor": 5,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 543,
              "team": "Real Betis",
              "rank": 7,
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
              "teamId": 540,
              "team": "Espanyol",
              "rank": 8,
              "points": 7,
              "goalsDiff": 3,
              "form": "WDLLW",
              "all": {
                "played": 5,
                "wins": 2,
                "draws": 1,
                "losses": 2,
                "goalsFor": 8,
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
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 531,
              "team": "Athletic Club",
              "rank": 9,
              "points": 7,
              "goalsDiff": 1,
              "form": "DWWLL",
              "all": {
                "played": 5,
                "wins": 2,
                "draws": 1,
                "losses": 2,
                "goalsFor": 7,
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
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 2,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 4665,
              "team": "Racing Santander",
              "rank": 10,
              "points": 7,
              "goalsDiff": 0,
              "form": "WLWLD",
              "all": {
                "played": 5,
                "wins": 2,
                "draws": 1,
                "losses": 2,
                "goalsFor": 9,
                "goalsAgainst": 9
              },
              "home": {
                "played": 3,
                "wins": 2,
                "draws": 1,
                "losses": 0,
                "goalsFor": 7,
                "goalsAgainst": 5
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
              "teamId": 727,
              "team": "Osasuna",
              "rank": 11,
              "points": 7,
              "goalsDiff": -3,
              "form": "LLWWD",
              "all": {
                "played": 5,
                "wins": 2,
                "draws": 1,
                "losses": 2,
                "goalsFor": 5,
                "goalsAgainst": 8
              },
              "home": {
                "played": 3,
                "wins": 1,
                "draws": 1,
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
                "goalsAgainst": 6
              }
            },
            {
              "teamId": 548,
              "team": "Real Sociedad",
              "rank": 12,
              "points": 7,
              "goalsDiff": -5,
              "form": "LWDWL",
              "all": {
                "played": 6,
                "wins": 2,
                "draws": 1,
                "losses": 3,
                "goalsFor": 6,
                "goalsAgainst": 11
              },
              "home": {
                "played": 3,
                "wins": 1,
                "draws": 1,
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
              "teamId": 539,
              "team": "Levante",
              "rank": 13,
              "points": 5,
              "goalsDiff": -2,
              "form": "LDWDL",
              "all": {
                "played": 5,
                "wins": 1,
                "draws": 2,
                "losses": 2,
                "goalsFor": 7,
                "goalsAgainst": 9
              },
              "home": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 7,
                "goalsAgainst": 6
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
              "teamId": 546,
              "team": "Getafe",
              "rank": 14,
              "points": 5,
              "goalsDiff": -3,
              "form": "DDLWL",
              "all": {
                "played": 5,
                "wins": 1,
                "draws": 2,
                "losses": 2,
                "goalsFor": 3,
                "goalsAgainst": 6
              },
              "home": {
                "played": 3,
                "wins": 1,
                "draws": 2,
                "losses": 0,
                "goalsFor": 3,
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
              "teamId": 538,
              "team": "Celta Vigo",
              "rank": 15,
              "points": 4,
              "goalsDiff": -3,
              "form": "DDDLL",
              "all": {
                "played": 6,
                "wins": 0,
                "draws": 4,
                "losses": 2,
                "goalsFor": 3,
                "goalsAgainst": 6
              },
              "home": {
                "played": 3,
                "wins": 0,
                "draws": 1,
                "losses": 2,
                "goalsFor": 2,
                "goalsAgainst": 5
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
              "teamId": 728,
              "team": "Rayo Vallecano",
              "rank": 16,
              "points": 4,
              "goalsDiff": -6,
              "form": "LWLDL",
              "all": {
                "played": 5,
                "wins": 1,
                "draws": 1,
                "losses": 3,
                "goalsFor": 8,
                "goalsAgainst": 14
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
                "played": 3,
                "wins": 0,
                "draws": 0,
                "losses": 3,
                "goalsFor": 4,
                "goalsAgainst": 11
              }
            },
            {
              "teamId": 535,
              "team": "Malaga",
              "rank": 17,
              "points": 3,
              "goalsDiff": -6,
              "form": "DDLDL",
              "all": {
                "played": 5,
                "wins": 0,
                "draws": 3,
                "losses": 2,
                "goalsFor": 2,
                "goalsAgainst": 8
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
                "played": 3,
                "wins": 0,
                "draws": 1,
                "losses": 2,
                "goalsFor": 1,
                "goalsAgainst": 7
              }
            },
            {
              "teamId": 533,
              "team": "Villarreal",
              "rank": 18,
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
              "teamId": 797,
              "team": "Elche",
              "rank": 19,
              "points": 2,
              "goalsDiff": -7,
              "form": "DLLLD",
              "all": {
                "played": 5,
                "wins": 0,
                "draws": 2,
                "losses": 3,
                "goalsFor": 6,
                "goalsAgainst": 13
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
                "played": 3,
                "wins": 0,
                "draws": 2,
                "losses": 1,
                "goalsFor": 4,
                "goalsAgainst": 5
              }
            },
            {
              "teamId": 532,
              "team": "Valencia",
              "rank": 20,
              "points": 1,
              "goalsDiff": -9,
              "form": "LLLLD",
              "all": {
                "played": 5,
                "wins": 0,
                "draws": 1,
                "losses": 4,
                "goalsFor": 1,
                "goalsAgainst": 10
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
                "played": 2,
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 1,
                "goalsAgainst": 4
              }
            }
          ],
          "teams": [
            {
              "teamId": 530,
              "team": "Atletico Madrid",
              "form": "WDWLW",
              "all": {
                "played": 5,
                "wins": 3,
                "draws": 1,
                "losses": 1,
                "goalsFor": 10,
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
                "played": 3,
                "wins": 2,
                "draws": 0,
                "losses": 1,
                "goalsFor": 6,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 727,
              "team": "Osasuna",
              "form": "DWWLL",
              "all": {
                "played": 5,
                "wins": 2,
                "draws": 1,
                "losses": 2,
                "goalsFor": 5,
                "goalsAgainst": 8
              },
              "home": {
                "played": 3,
                "wins": 1,
                "draws": 1,
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
                "goalsAgainst": 6
              }
            },
            {
              "teamId": 544,
              "team": "Deportivo La Coruna",
              "form": "DDWWD",
              "all": {
                "played": 5,
                "wins": 2,
                "draws": 3,
                "losses": 0,
                "goalsFor": 9,
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
                "played": 3,
                "wins": 1,
                "draws": 2,
                "losses": 0,
                "goalsFor": 5,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 536,
              "team": "Sevilla",
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
                "draws": 0,
                "losses": 1,
                "goalsFor": 4,
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
              "teamId": 529,
              "team": "Barcelona",
              "form": "WWWWW",
              "all": {
                "played": 5,
                "wins": 5,
                "draws": 0,
                "losses": 0,
                "goalsFor": 21,
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
                "played": 3,
                "wins": 3,
                "draws": 0,
                "losses": 0,
                "goalsFor": 14,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 4665,
              "team": "Racing Santander",
              "form": "DLWLW",
              "all": {
                "played": 5,
                "wins": 2,
                "draws": 1,
                "losses": 2,
                "goalsFor": 9,
                "goalsAgainst": 9
              },
              "home": {
                "played": 3,
                "wins": 2,
                "draws": 1,
                "losses": 0,
                "goalsFor": 7,
                "goalsAgainst": 5
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
              "teamId": 539,
              "team": "Levante",
              "form": "LDWDL",
              "all": {
                "played": 5,
                "wins": 1,
                "draws": 2,
                "losses": 2,
                "goalsFor": 7,
                "goalsAgainst": 9
              },
              "home": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 7,
                "goalsAgainst": 6
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
              "teamId": 531,
              "team": "Athletic Club",
              "form": "LLWWD",
              "all": {
                "played": 5,
                "wins": 2,
                "draws": 1,
                "losses": 2,
                "goalsFor": 7,
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
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 2,
                "goalsAgainst": 2
              }
            }
          ],
          "fixtures": [
            {
              "fixtureId": 1570384,
              "kickoff": "2026-09-17T02:00:00+09:00",
              "status": "NS",
              "homeTeamId": 530,
              "homeTeam": "Atletico Madrid",
              "awayTeamId": 727,
              "awayTeam": "Osasuna",
              "injuriesChecked": true,
              "injuries": [
                {
                  "fixtureId": 1570384,
                  "teamId": 530,
                  "playerId": 336594,
                  "player": "P. Barrios",
                  "type": "Missing Fixture",
                  "reason": "Muscle Injury"
                },
                {
                  "fixtureId": 1570384,
                  "teamId": 530,
                  "playerId": 6009,
                  "player": "J. Alvarez",
                  "type": "Questionable",
                  "reason": "Muscle Injury"
                },
                {
                  "fixtureId": 1570384,
                  "teamId": 530,
                  "playerId": 491091,
                  "player": "S. Esteban",
                  "type": "Questionable",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1570384,
                  "teamId": 530,
                  "playerId": 8492,
                  "player": "A. Sorloth",
                  "type": "Questionable",
                  "reason": "Muscle Injury"
                },
                {
                  "fixtureId": 1570384,
                  "teamId": 727,
                  "playerId": 47574,
                  "player": "M. Gomez",
                  "type": "Missing Fixture",
                  "reason": "Hamstring Injury"
                },
                {
                  "fixtureId": 1570384,
                  "teamId": 727,
                  "playerId": 182592,
                  "player": "J. Herrando",
                  "type": "Missing Fixture",
                  "reason": "Muscle Injury"
                },
                {
                  "fixtureId": 1570384,
                  "teamId": 727,
                  "playerId": 67939,
                  "player": "A. Oroz",
                  "type": "Missing Fixture",
                  "reason": "Muscle Injury"
                },
                {
                  "fixtureId": 1570384,
                  "teamId": 727,
                  "playerId": 21701,
                  "player": "V. Rosier",
                  "type": "Questionable",
                  "reason": "Hamstring Injury"
                }
              ],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1570387,
              "kickoff": "2026-09-17T02:00:00+09:00",
              "status": "NS",
              "homeTeamId": 544,
              "homeTeam": "Deportivo La Coruna",
              "awayTeamId": 536,
              "awayTeam": "Sevilla",
              "injuriesChecked": true,
              "injuries": [
                {
                  "fixtureId": 1570387,
                  "teamId": 544,
                  "playerId": 628615,
                  "player": "N. Carrillo",
                  "type": "Questionable",
                  "reason": "Ankle Injury"
                },
                {
                  "fixtureId": 1570387,
                  "teamId": 536,
                  "playerId": 48471,
                  "player": "R. Vargas",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1570387,
                  "teamId": 536,
                  "playerId": 174927,
                  "player": "A. Sangante",
                  "type": "Questionable",
                  "reason": "Ankle Injury"
                }
              ],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1570385,
              "kickoff": "2026-09-17T04:30:00+09:00",
              "status": "NS",
              "homeTeamId": 529,
              "homeTeam": "Barcelona",
              "awayTeamId": 4665,
              "awayTeam": "Racing Santander",
              "injuriesChecked": true,
              "injuries": [
                {
                  "fixtureId": 1570385,
                  "teamId": 529,
                  "playerId": 338958,
                  "player": "R. Bardghji",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1570385,
                  "teamId": 529,
                  "playerId": 538,
                  "player": "F. de Jong",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1570385,
                  "teamId": 529,
                  "playerId": 181701,
                  "player": "G. Martin",
                  "type": "Questionable",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1570385,
                  "teamId": 4665,
                  "playerId": 41157,
                  "player": "A. Almeida",
                  "type": "Missing Fixture",
                  "reason": "Red Card"
                },
                {
                  "fixtureId": 1570385,
                  "teamId": 4665,
                  "playerId": 47209,
                  "player": "A. Martin",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1570385,
                  "teamId": 4665,
                  "playerId": 408875,
                  "player": "S. Eriksson",
                  "type": "Questionable",
                  "reason": "Shoulder Injury"
                }
              ],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1570389,
              "kickoff": "2026-09-17T04:30:00+09:00",
              "status": "NS",
              "homeTeamId": 539,
              "homeTeam": "Levante",
              "awayTeamId": 531,
              "awayTeam": "Athletic Club",
              "injuriesChecked": true,
              "injuries": [
                {
                  "fixtureId": 1570389,
                  "teamId": 539,
                  "playerId": 378284,
                  "player": "K. Etta Eyong",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1570389,
                  "teamId": 539,
                  "playerId": 338295,
                  "player": "A. Primo",
                  "type": "Missing Fixture",
                  "reason": "Shoulder Injury"
                },
                {
                  "fixtureId": 1570389,
                  "teamId": 531,
                  "playerId": 332305,
                  "player": "U. Egiluz",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1570389,
                  "teamId": 531,
                  "playerId": 47278,
                  "player": "D. Vivian",
                  "type": "Missing Fixture",
                  "reason": "Hamstring Injury"
                },
                {
                  "fixtureId": 1570389,
                  "teamId": 531,
                  "playerId": 437643,
                  "player": "P. Canales",
                  "type": "Questionable",
                  "reason": "Muscle Injury"
                },
                {
                  "fixtureId": 1570389,
                  "teamId": 531,
                  "playerId": 47291,
                  "player": "G. Guruzeta",
                  "type": "Questionable",
                  "reason": "Hamstring Injury"
                }
              ],
              "lineupsChecked": false,
              "lineups": []
            }
          ]
        },
        {
          "key": "UEL",
          "leagueId": 3,
          "season": "2026",
          "standings": [
            {
              "teamId": 554,
              "team": "Anderlecht",
              "rank": 1,
              "points": 0,
              "goalsDiff": 0,
              "form": "WWWWW",
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
              "teamId": 3683,
              "team": "Ararat-Armenia",
              "rank": 2,
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
              "teamId": 201,
              "team": "AZ Alkmaar",
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
              "teamId": 211,
              "team": "Benfica",
              "rank": 4,
              "points": 0,
              "goalsDiff": 0,
              "form": "WWDWW",
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
              "teamId": 549,
              "team": "Beşiktaş",
              "rank": 5,
              "points": 0,
              "goalsDiff": 0,
              "form": "LWWWW",
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
              "teamId": 35,
              "team": "Bournemouth",
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
              "teamId": 4360,
              "team": "Celje",
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
              "teamId": 538,
              "team": "Celta Vigo",
              "rank": 8,
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
              "teamId": 247,
              "team": "Celtic",
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
              "teamId": 52,
              "team": "Crystal Palace",
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
              "teamId": 651,
              "team": "Ferencvarosi TC",
              "rank": 11,
              "points": 0,
              "goalsDiff": 0,
              "form": "WWDWD",
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
              "teamId": 620,
              "team": "Dinamo Zagreb",
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
              "teamId": 563,
              "team": "Hapoel Beer Sheva",
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
              "teamId": 167,
              "team": "1899 Hoffenheim",
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
              "teamId": 336,
              "team": "Jagiellonia",
              "rank": 15,
              "points": 0,
              "goalsDiff": 0,
              "form": "WWDW",
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
              "teamId": 496,
              "team": "Juventus",
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
              "teamId": 347,
              "team": "Lech Poznan",
              "rank": 17,
              "points": 0,
              "goalsDiff": 0,
              "form": "DWWW",
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
              "teamId": 168,
              "team": "Bayer Leverkusen",
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
              "teamId": 646,
              "team": "Levski Sofia",
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
              "teamId": 321,
              "team": "Lillestrom",
              "rank": 20,
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
              "teamId": 80,
              "team": "Lyon",
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
              "teamId": 81,
              "team": "Marseille",
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
              "teamId": 489,
              "team": "AC Milan",
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
              "teamId": 413,
              "team": "NEC Nijmegen",
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
              "teamId": 1124,
              "team": "OFI",
              "rank": 25,
              "points": 0,
              "goalsDiff": 0,
              "form": "WW",
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
              "teamId": 553,
              "team": "Olympiakos Piraeus",
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
              "teamId": 3402,
              "team": "Omonia Nicosia",
              "rank": 27,
              "points": 0,
              "goalsDiff": 0,
              "form": "WLWD",
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
              "teamId": 548,
              "team": "Real Sociedad",
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
              "teamId": 94,
              "team": "Rennes",
              "rank": 29,
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
              "teamId": 571,
              "team": "Red Bull Salzburg",
              "rank": 30,
              "points": 0,
              "goalsDiff": 0,
              "form": "WWDW",
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
              "teamId": 628,
              "team": "Sparta Praha",
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
              "teamId": 637,
              "team": "Sturm Graz",
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
              "teamId": 746,
              "team": "Sunderland",
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
              "teamId": 4799,
              "team": "Torreense",
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
              "teamId": 1393,
              "team": "Union St. Gilloise",
              "rank": 35,
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
              "teamId": 567,
              "team": "Plzen",
              "rank": 36,
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
            }
          ],
          "teams": [
            {
              "teamId": 3402,
              "team": "Omonia Nicosia",
              "form": "DWLW",
              "all": {
                "played": 4,
                "wins": 2,
                "draws": 1,
                "losses": 1,
                "goalsFor": 6,
                "goalsAgainst": 4
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
                "played": 2,
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 1,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 538,
              "team": "Celta Vigo",
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
              "teamId": 3683,
              "team": "Ararat-Armenia",
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
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 1,
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
              "teamId": 628,
              "team": "Sparta Praha",
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
              "teamId": 168,
              "team": "Bayer Leverkusen",
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
              "teamId": 4360,
              "team": "Celje",
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
              "teamId": 489,
              "team": "AC Milan",
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
              "teamId": 211,
              "team": "Benfica",
              "form": "LWWDWW",
              "all": {
                "played": 6,
                "wins": 4,
                "draws": 1,
                "losses": 1,
                "goalsFor": 19,
                "goalsAgainst": 6
              },
              "home": {
                "played": 3,
                "wins": 3,
                "draws": 0,
                "losses": 0,
                "goalsFor": 14,
                "goalsAgainst": 2
              },
              "away": {
                "played": 3,
                "wins": 1,
                "draws": 1,
                "losses": 1,
                "goalsFor": 5,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 553,
              "team": "Olympiakos Piraeus",
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
              "teamId": 336,
              "team": "Jagiellonia",
              "form": "WDWW",
              "all": {
                "played": 4,
                "wins": 3,
                "draws": 1,
                "losses": 0,
                "goalsFor": 9,
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
                "draws": 1,
                "losses": 0,
                "goalsFor": 3,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 554,
              "team": "Anderlecht",
              "form": "DWWWWW",
              "all": {
                "played": 6,
                "wins": 5,
                "draws": 1,
                "losses": 0,
                "goalsFor": 14,
                "goalsAgainst": 4
              },
              "home": {
                "played": 3,
                "wins": 3,
                "draws": 0,
                "losses": 0,
                "goalsFor": 9,
                "goalsAgainst": 3
              },
              "away": {
                "played": 3,
                "wins": 2,
                "draws": 1,
                "losses": 0,
                "goalsFor": 5,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 80,
              "team": "Lyon",
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
              "teamId": 563,
              "team": "Hapoel Beer Sheva",
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
              "teamId": 620,
              "team": "Dinamo Zagreb",
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
              "teamId": 637,
              "team": "Sturm Graz",
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
              "teamId": 94,
              "team": "Rennes",
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
              "teamId": 746,
              "team": "Sunderland",
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
              "teamId": 201,
              "team": "AZ Alkmaar",
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
              "fixtureId": 1636312,
              "kickoff": "2026-09-17T01:45:00+09:00",
              "status": "NS",
              "homeTeamId": 3402,
              "homeTeam": "Omonia Nicosia",
              "awayTeamId": 538,
              "awayTeam": "Celta Vigo",
              "injuriesChecked": true,
              "injuries": [
                {
                  "fixtureId": 1636312,
                  "teamId": 3402,
                  "playerId": 343302,
                  "player": "A. Neofytou",
                  "type": "Missing Fixture",
                  "reason": "Inactive"
                },
                {
                  "fixtureId": 1636312,
                  "teamId": 538,
                  "playerId": 481678,
                  "player": "A. Antanon",
                  "type": "Missing Fixture",
                  "reason": "Ankle Injury"
                },
                {
                  "fixtureId": 1636312,
                  "teamId": 538,
                  "playerId": 351913,
                  "player": "J. El Abdellaoui",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1636312,
                  "teamId": 538,
                  "playerId": 46711,
                  "player": "A. Febas",
                  "type": "Missing Fixture",
                  "reason": "Ribs Injury"
                },
                {
                  "fixtureId": 1636312,
                  "teamId": 538,
                  "playerId": 47348,
                  "player": "B. Iglesias",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                }
              ],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1636217,
              "kickoff": "2026-09-17T01:45:00+09:00",
              "status": "NS",
              "homeTeamId": 3683,
              "homeTeam": "Ararat-Armenia",
              "awayTeamId": 628,
              "awayTeam": "Sparta Praha",
              "injuriesChecked": true,
              "injuries": [
                {
                  "fixtureId": 1636217,
                  "teamId": 628,
                  "playerId": 15905,
                  "player": "M. Andersen",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1636217,
                  "teamId": 628,
                  "playerId": 1409,
                  "player": "E. Cobbaut",
                  "type": "Missing Fixture",
                  "reason": "Groin Injury"
                },
                {
                  "fixtureId": 1636217,
                  "teamId": 628,
                  "playerId": 57443,
                  "player": "S. Mannsverk",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1636217,
                  "teamId": 628,
                  "playerId": 66425,
                  "player": "J. Martinec",
                  "type": "Missing Fixture",
                  "reason": "Health problems"
                },
                {
                  "fixtureId": 1636217,
                  "teamId": 628,
                  "playerId": 555427,
                  "player": "O. Penxa",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1636217,
                  "teamId": 628,
                  "playerId": 340644,
                  "player": "A. Sevinsky",
                  "type": "Missing Fixture",
                  "reason": "Red Card"
                },
                {
                  "fixtureId": 1636217,
                  "teamId": 628,
                  "playerId": 471381,
                  "player": "E. Uchenna",
                  "type": "Missing Fixture",
                  "reason": "Groin Injury"
                },
                {
                  "fixtureId": 1636217,
                  "teamId": 628,
                  "playerId": 285,
                  "player": "K. Hoever",
                  "type": "Questionable",
                  "reason": "Hip Injury"
                }
              ],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1636225,
              "kickoff": "2026-09-17T04:00:00+09:00",
              "status": "NS",
              "homeTeamId": 168,
              "homeTeam": "Bayer Leverkusen",
              "awayTeamId": 4360,
              "awayTeam": "Celje",
              "injuriesChecked": true,
              "injuries": [
                {
                  "fixtureId": 1636225,
                  "teamId": 168,
                  "playerId": 39071,
                  "player": "V. Boniface",
                  "type": "Missing Fixture",
                  "reason": "Off the roster"
                },
                {
                  "fixtureId": 1636225,
                  "teamId": 168,
                  "playerId": 444961,
                  "player": "M. Culbreath",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1636225,
                  "teamId": 168,
                  "playerId": 503467,
                  "player": "K. Eichhorn",
                  "type": "Missing Fixture",
                  "reason": "Illness"
                },
                {
                  "fixtureId": 1636225,
                  "teamId": 168,
                  "playerId": 25635,
                  "player": "J. Hofmann",
                  "type": "Missing Fixture",
                  "reason": "Off the roster"
                },
                {
                  "fixtureId": 1636225,
                  "teamId": 168,
                  "playerId": 280091,
                  "player": "T. Oermann",
                  "type": "Missing Fixture",
                  "reason": "Off the roster"
                },
                {
                  "fixtureId": 1636225,
                  "teamId": 168,
                  "playerId": 231029,
                  "player": "N. Tella",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1636225,
                  "teamId": 4360,
                  "playerId": 91447,
                  "player": "A. Kotnik",
                  "type": "Missing Fixture",
                  "reason": "Red Card"
                },
                {
                  "fixtureId": 1636225,
                  "teamId": 4360,
                  "playerId": 161587,
                  "player": "J. Pisek",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                }
              ],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1636207,
              "kickoff": "2026-09-17T04:00:00+09:00",
              "status": "NS",
              "homeTeamId": 489,
              "homeTeam": "AC Milan",
              "awayTeamId": 211,
              "awayTeam": "Benfica",
              "injuriesChecked": true,
              "injuries": [
                {
                  "fixtureId": 1636207,
                  "teamId": 211,
                  "playerId": 15623,
                  "player": "A. Bah",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1636207,
                  "teamId": 211,
                  "playerId": 1163,
                  "player": "Bruma",
                  "type": "Missing Fixture",
                  "reason": "Off the roster"
                }
              ],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1636309,
              "kickoff": "2026-09-17T04:00:00+09:00",
              "status": "NS",
              "homeTeamId": 553,
              "homeTeam": "Olympiakos Piraeus",
              "awayTeamId": 336,
              "awayTeam": "Jagiellonia",
              "injuriesChecked": true,
              "injuries": [
                {
                  "fixtureId": 1636309,
                  "teamId": 553,
                  "playerId": 22093,
                  "player": "R. Cabella",
                  "type": "Missing Fixture",
                  "reason": "Off the roster"
                },
                {
                  "fixtureId": 1636309,
                  "teamId": 553,
                  "playerId": 2722,
                  "player": "A. El Kaabi",
                  "type": "Missing Fixture",
                  "reason": "Broken Leg"
                },
                {
                  "fixtureId": 1636309,
                  "teamId": 553,
                  "playerId": 1609,
                  "player": "K. Fortounis",
                  "type": "Missing Fixture",
                  "reason": "Red Card"
                },
                {
                  "fixtureId": 1636309,
                  "teamId": 553,
                  "playerId": 47281,
                  "player": "D. Garcia",
                  "type": "Missing Fixture",
                  "reason": "Off the roster"
                },
                {
                  "fixtureId": 1636309,
                  "teamId": 553,
                  "playerId": 66898,
                  "player": "B. Popovic",
                  "type": "Missing Fixture",
                  "reason": "Off the roster"
                },
                {
                  "fixtureId": 1636309,
                  "teamId": 553,
                  "playerId": 339105,
                  "player": "J. Roca",
                  "type": "Missing Fixture",
                  "reason": "Shoulder Injury"
                },
                {
                  "fixtureId": 1636309,
                  "teamId": 553,
                  "playerId": 364513,
                  "player": "L. Scipioni",
                  "type": "Missing Fixture",
                  "reason": "Off the roster"
                },
                {
                  "fixtureId": 1636309,
                  "teamId": 336,
                  "playerId": 364659,
                  "player": "D. Drachal",
                  "type": "Missing Fixture",
                  "reason": "Off the roster"
                },
                {
                  "fixtureId": 1636309,
                  "teamId": 336,
                  "playerId": 480855,
                  "player": "D. Rallis",
                  "type": "Missing Fixture",
                  "reason": "Off the roster"
                },
                {
                  "fixtureId": 1636309,
                  "teamId": 336,
                  "playerId": 574681,
                  "player": "Z. Zalewski",
                  "type": "Missing Fixture",
                  "reason": "Off the roster"
                },
                {
                  "fixtureId": 1636309,
                  "teamId": 336,
                  "playerId": 394784,
                  "player": "O. Sow",
                  "type": "Questionable",
                  "reason": "Inactive"
                }
              ],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1636212,
              "kickoff": "2026-09-17T04:00:00+09:00",
              "status": "NS",
              "homeTeamId": 554,
              "homeTeam": "Anderlecht",
              "awayTeamId": 80,
              "awayTeam": "Lyon",
              "injuriesChecked": true,
              "injuries": [
                {
                  "fixtureId": 1636212,
                  "teamId": 554,
                  "playerId": 371839,
                  "player": "I. Camara",
                  "type": "Missing Fixture",
                  "reason": "Foot Injury"
                },
                {
                  "fixtureId": 1636212,
                  "teamId": 554,
                  "playerId": 315615,
                  "player": "L. Hey",
                  "type": "Missing Fixture",
                  "reason": "Broken Leg"
                },
                {
                  "fixtureId": 1636212,
                  "teamId": 554,
                  "playerId": 127418,
                  "player": "K. Sardella",
                  "type": "Missing Fixture",
                  "reason": "Thigh Injury"
                },
                {
                  "fixtureId": 1636212,
                  "teamId": 80,
                  "playerId": 368230,
                  "player": "J. Duranville",
                  "type": "Missing Fixture",
                  "reason": "Muscle Injury"
                },
                {
                  "fixtureId": 1636212,
                  "teamId": 80,
                  "playerId": 623922,
                  "player": "A. Hamdani",
                  "type": "Missing Fixture",
                  "reason": "Inactive"
                },
                {
                  "fixtureId": 1636212,
                  "teamId": 80,
                  "playerId": 497617,
                  "player": "R. Himbert",
                  "type": "Missing Fixture",
                  "reason": "Inactive"
                },
                {
                  "fixtureId": 1636212,
                  "teamId": 80,
                  "playerId": 412049,
                  "player": "M. Ouedraogo",
                  "type": "Missing Fixture",
                  "reason": "Inactive"
                }
              ],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1636265,
              "kickoff": "2026-09-17T04:00:00+09:00",
              "status": "NS",
              "homeTeamId": 563,
              "homeTeam": "Hapoel Beer Sheva",
              "awayTeamId": 620,
              "awayTeam": "Dinamo Zagreb",
              "injuriesChecked": true,
              "injuries": [
                {
                  "fixtureId": 1636265,
                  "teamId": 563,
                  "playerId": 70481,
                  "player": "D. Biton",
                  "type": "Missing Fixture",
                  "reason": "Heart Problems"
                },
                {
                  "fixtureId": 1636265,
                  "teamId": 563,
                  "playerId": 335770,
                  "player": "D. T. Diop",
                  "type": "Missing Fixture",
                  "reason": "Red Card"
                },
                {
                  "fixtureId": 1636265,
                  "teamId": 563,
                  "playerId": 126960,
                  "player": "R. Levy",
                  "type": "Missing Fixture",
                  "reason": "Off the roster"
                },
                {
                  "fixtureId": 1636265,
                  "teamId": 563,
                  "playerId": 105786,
                  "player": "E. Peretz",
                  "type": "Missing Fixture",
                  "reason": "Red Card"
                },
                {
                  "fixtureId": 1636265,
                  "teamId": 563,
                  "playerId": 293294,
                  "player": "Y. Stoyanov",
                  "type": "Missing Fixture",
                  "reason": "Off the roster"
                },
                {
                  "fixtureId": 1636265,
                  "teamId": 620,
                  "playerId": 14410,
                  "player": "B. Goda",
                  "type": "Missing Fixture",
                  "reason": "Inactive"
                },
                {
                  "fixtureId": 1636265,
                  "teamId": 620,
                  "playerId": 1297,
                  "player": "R. Mudrazija",
                  "type": "Missing Fixture",
                  "reason": "Off the roster"
                },
                {
                  "fixtureId": 1636265,
                  "teamId": 620,
                  "playerId": 14532,
                  "player": "I. Nevistic",
                  "type": "Missing Fixture",
                  "reason": "Off the roster"
                },
                {
                  "fixtureId": 1636265,
                  "teamId": 620,
                  "playerId": 567804,
                  "player": "N. Nsoki",
                  "type": "Missing Fixture",
                  "reason": "Off the roster"
                },
                {
                  "fixtureId": 1636265,
                  "teamId": 620,
                  "playerId": 371912,
                  "player": "D. Rodriguez",
                  "type": "Missing Fixture",
                  "reason": "Inactive"
                },
                {
                  "fixtureId": 1636265,
                  "teamId": 620,
                  "playerId": 428414,
                  "player": "A. Stojakovic",
                  "type": "Missing Fixture",
                  "reason": "Off the roster"
                },
                {
                  "fixtureId": 1636265,
                  "teamId": 620,
                  "playerId": 307952,
                  "player": "P. Tabinas",
                  "type": "Missing Fixture",
                  "reason": "Off the roster"
                },
                {
                  "fixtureId": 1636265,
                  "teamId": 620,
                  "playerId": 339162,
                  "player": "F. Topic",
                  "type": "Missing Fixture",
                  "reason": "Off the roster"
                }
              ],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1636341,
              "kickoff": "2026-09-17T04:00:00+09:00",
              "status": "NS",
              "homeTeamId": 637,
              "homeTeam": "Sturm Graz",
              "awayTeamId": 94,
              "awayTeam": "Rennes",
              "injuriesChecked": true,
              "injuries": [
                {
                  "fixtureId": 1636341,
                  "teamId": 637,
                  "playerId": 334429,
                  "player": "O. Diakite",
                  "type": "Missing Fixture",
                  "reason": "Off the roster"
                },
                {
                  "fixtureId": 1636341,
                  "teamId": 637,
                  "playerId": 169498,
                  "player": "N. Geyrhofer",
                  "type": "Missing Fixture",
                  "reason": "Off the roster"
                },
                {
                  "fixtureId": 1636341,
                  "teamId": 637,
                  "playerId": 372585,
                  "player": "L. Grgic",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1636341,
                  "teamId": 637,
                  "playerId": 427260,
                  "player": "A. Kayombo",
                  "type": "Missing Fixture",
                  "reason": "Off the roster"
                },
                {
                  "fixtureId": 1636341,
                  "teamId": 637,
                  "playerId": 158614,
                  "player": "S. Wlodarczyk",
                  "type": "Missing Fixture",
                  "reason": "Off the roster"
                },
                {
                  "fixtureId": 1636341,
                  "teamId": 94,
                  "playerId": 343792,
                  "player": "D. Cisse",
                  "type": "Missing Fixture",
                  "reason": "Inactive"
                },
                {
                  "fixtureId": 1636341,
                  "teamId": 94,
                  "playerId": 22097,
                  "player": "A. Nordin",
                  "type": "Missing Fixture",
                  "reason": "Inactive"
                },
                {
                  "fixtureId": 1636341,
                  "teamId": 94,
                  "playerId": 400525,
                  "player": "G. Oliveira",
                  "type": "Missing Fixture",
                  "reason": "Inactive"
                }
              ],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1636344,
              "kickoff": "2026-09-17T04:00:00+09:00",
              "status": "NS",
              "homeTeamId": 746,
              "homeTeam": "Sunderland",
              "awayTeamId": 201,
              "awayTeam": "AZ Alkmaar",
              "injuriesChecked": true,
              "injuries": [
                {
                  "fixtureId": 1636344,
                  "teamId": 746,
                  "playerId": 646252,
                  "player": "J. Angulo",
                  "type": "Missing Fixture",
                  "reason": "Off the roster"
                },
                {
                  "fixtureId": 1636344,
                  "teamId": 746,
                  "playerId": 19446,
                  "player": "A. Browne",
                  "type": "Missing Fixture",
                  "reason": "Off the roster"
                },
                {
                  "fixtureId": 1636344,
                  "teamId": 746,
                  "playerId": 327631,
                  "player": "H. Diarra",
                  "type": "Missing Fixture",
                  "reason": "Hamstring Injury"
                },
                {
                  "fixtureId": 1636344,
                  "teamId": 746,
                  "playerId": 278454,
                  "player": "M. Ellborg",
                  "type": "Missing Fixture",
                  "reason": "Off the roster"
                },
                {
                  "fixtureId": 1636344,
                  "teamId": 746,
                  "playerId": 284414,
                  "player": "R. Mundle",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1636344,
                  "teamId": 746,
                  "playerId": 492528,
                  "player": "J. Ta Bi",
                  "type": "Missing Fixture",
                  "reason": "Off the roster"
                },
                {
                  "fixtureId": 1636344,
                  "teamId": 746,
                  "playerId": 336659,
                  "player": "C. Talbi",
                  "type": "Missing Fixture",
                  "reason": "Off the roster"
                },
                {
                  "fixtureId": 1636344,
                  "teamId": 201,
                  "playerId": 179839,
                  "player": "D. Kasius",
                  "type": "Missing Fixture",
                  "reason": "Groin Injury"
                },
                {
                  "fixtureId": 1636344,
                  "teamId": 201,
                  "playerId": 291505,
                  "player": "S. Resink",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1636344,
                  "teamId": 201,
                  "playerId": 388786,
                  "player": "K. Smit",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1636344,
                  "teamId": 201,
                  "playerId": 37602,
                  "player": "H. Verhulst",
                  "type": "Missing Fixture",
                  "reason": "Off the roster"
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
      "date": "2026-09-18",
      "updatedAt": "2026-09-14T15:01:25.611Z",
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
              "points": 15,
              "goalsDiff": 17,
              "form": "WWWWW",
              "all": {
                "played": 5,
                "wins": 5,
                "draws": 0,
                "losses": 0,
                "goalsFor": 21,
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
                "played": 3,
                "wins": 3,
                "draws": 0,
                "losses": 0,
                "goalsFor": 14,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 541,
              "team": "Real Madrid",
              "rank": 2,
              "points": 12,
              "goalsDiff": 10,
              "form": "WLWWW",
              "all": {
                "played": 5,
                "wins": 4,
                "draws": 0,
                "losses": 1,
                "goalsFor": 14,
                "goalsAgainst": 4
              },
              "home": {
                "played": 3,
                "wins": 3,
                "draws": 0,
                "losses": 0,
                "goalsFor": 12,
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
              "teamId": 542,
              "team": "Alaves",
              "rank": 3,
              "points": 10,
              "goalsDiff": 6,
              "form": "LWWDW",
              "all": {
                "played": 5,
                "wins": 3,
                "draws": 1,
                "losses": 1,
                "goalsFor": 11,
                "goalsAgainst": 5
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
                "played": 2,
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 2,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 530,
              "team": "Atletico Madrid",
              "rank": 4,
              "points": 10,
              "goalsDiff": 4,
              "form": "WLWDW",
              "all": {
                "played": 5,
                "wins": 3,
                "draws": 1,
                "losses": 1,
                "goalsFor": 10,
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
                "played": 3,
                "wins": 2,
                "draws": 0,
                "losses": 1,
                "goalsFor": 6,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 536,
              "team": "Sevilla",
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
                "draws": 0,
                "losses": 1,
                "goalsFor": 4,
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
              "teamId": 544,
              "team": "Deportivo La Coruna",
              "rank": 6,
              "points": 9,
              "goalsDiff": 3,
              "form": "DWWDD",
              "all": {
                "played": 5,
                "wins": 2,
                "draws": 3,
                "losses": 0,
                "goalsFor": 9,
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
                "played": 3,
                "wins": 1,
                "draws": 2,
                "losses": 0,
                "goalsFor": 5,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 543,
              "team": "Real Betis",
              "rank": 7,
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
              "teamId": 540,
              "team": "Espanyol",
              "rank": 8,
              "points": 7,
              "goalsDiff": 3,
              "form": "WDLLW",
              "all": {
                "played": 5,
                "wins": 2,
                "draws": 1,
                "losses": 2,
                "goalsFor": 8,
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
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 531,
              "team": "Athletic Club",
              "rank": 9,
              "points": 7,
              "goalsDiff": 1,
              "form": "DWWLL",
              "all": {
                "played": 5,
                "wins": 2,
                "draws": 1,
                "losses": 2,
                "goalsFor": 7,
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
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 2,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 4665,
              "team": "Racing Santander",
              "rank": 10,
              "points": 7,
              "goalsDiff": 0,
              "form": "WLWLD",
              "all": {
                "played": 5,
                "wins": 2,
                "draws": 1,
                "losses": 2,
                "goalsFor": 9,
                "goalsAgainst": 9
              },
              "home": {
                "played": 3,
                "wins": 2,
                "draws": 1,
                "losses": 0,
                "goalsFor": 7,
                "goalsAgainst": 5
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
              "teamId": 727,
              "team": "Osasuna",
              "rank": 11,
              "points": 7,
              "goalsDiff": -3,
              "form": "LLWWD",
              "all": {
                "played": 5,
                "wins": 2,
                "draws": 1,
                "losses": 2,
                "goalsFor": 5,
                "goalsAgainst": 8
              },
              "home": {
                "played": 3,
                "wins": 1,
                "draws": 1,
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
                "goalsAgainst": 6
              }
            },
            {
              "teamId": 548,
              "team": "Real Sociedad",
              "rank": 12,
              "points": 7,
              "goalsDiff": -5,
              "form": "LWDWL",
              "all": {
                "played": 6,
                "wins": 2,
                "draws": 1,
                "losses": 3,
                "goalsFor": 6,
                "goalsAgainst": 11
              },
              "home": {
                "played": 3,
                "wins": 1,
                "draws": 1,
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
              "teamId": 539,
              "team": "Levante",
              "rank": 13,
              "points": 5,
              "goalsDiff": -2,
              "form": "LDWDL",
              "all": {
                "played": 5,
                "wins": 1,
                "draws": 2,
                "losses": 2,
                "goalsFor": 7,
                "goalsAgainst": 9
              },
              "home": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 7,
                "goalsAgainst": 6
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
              "teamId": 546,
              "team": "Getafe",
              "rank": 14,
              "points": 5,
              "goalsDiff": -3,
              "form": "DDLWL",
              "all": {
                "played": 5,
                "wins": 1,
                "draws": 2,
                "losses": 2,
                "goalsFor": 3,
                "goalsAgainst": 6
              },
              "home": {
                "played": 3,
                "wins": 1,
                "draws": 2,
                "losses": 0,
                "goalsFor": 3,
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
              "teamId": 538,
              "team": "Celta Vigo",
              "rank": 15,
              "points": 4,
              "goalsDiff": -3,
              "form": "DDDLL",
              "all": {
                "played": 6,
                "wins": 0,
                "draws": 4,
                "losses": 2,
                "goalsFor": 3,
                "goalsAgainst": 6
              },
              "home": {
                "played": 3,
                "wins": 0,
                "draws": 1,
                "losses": 2,
                "goalsFor": 2,
                "goalsAgainst": 5
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
              "teamId": 728,
              "team": "Rayo Vallecano",
              "rank": 16,
              "points": 4,
              "goalsDiff": -6,
              "form": "LWLDL",
              "all": {
                "played": 5,
                "wins": 1,
                "draws": 1,
                "losses": 3,
                "goalsFor": 8,
                "goalsAgainst": 14
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
                "played": 3,
                "wins": 0,
                "draws": 0,
                "losses": 3,
                "goalsFor": 4,
                "goalsAgainst": 11
              }
            },
            {
              "teamId": 535,
              "team": "Malaga",
              "rank": 17,
              "points": 3,
              "goalsDiff": -6,
              "form": "DDLDL",
              "all": {
                "played": 5,
                "wins": 0,
                "draws": 3,
                "losses": 2,
                "goalsFor": 2,
                "goalsAgainst": 8
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
                "played": 3,
                "wins": 0,
                "draws": 1,
                "losses": 2,
                "goalsFor": 1,
                "goalsAgainst": 7
              }
            },
            {
              "teamId": 533,
              "team": "Villarreal",
              "rank": 18,
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
              "teamId": 797,
              "team": "Elche",
              "rank": 19,
              "points": 2,
              "goalsDiff": -7,
              "form": "DLLLD",
              "all": {
                "played": 5,
                "wins": 0,
                "draws": 2,
                "losses": 3,
                "goalsFor": 6,
                "goalsAgainst": 13
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
                "played": 3,
                "wins": 0,
                "draws": 2,
                "losses": 1,
                "goalsFor": 4,
                "goalsAgainst": 5
              }
            },
            {
              "teamId": 532,
              "team": "Valencia",
              "rank": 20,
              "points": 1,
              "goalsDiff": -9,
              "form": "LLLLD",
              "all": {
                "played": 5,
                "wins": 0,
                "draws": 1,
                "losses": 4,
                "goalsFor": 1,
                "goalsAgainst": 10
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
                "played": 2,
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 1,
                "goalsAgainst": 4
              }
            }
          ],
          "teams": [
            {
              "teamId": 543,
              "team": "Real Betis",
              "form": "WWLW",
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
              "teamId": 546,
              "team": "Getafe",
              "form": "LWLDD",
              "all": {
                "played": 5,
                "wins": 1,
                "draws": 2,
                "losses": 2,
                "goalsFor": 3,
                "goalsAgainst": 6
              },
              "home": {
                "played": 3,
                "wins": 1,
                "draws": 2,
                "losses": 0,
                "goalsFor": 3,
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
              "teamId": 535,
              "team": "Malaga",
              "form": "LDLDD",
              "all": {
                "played": 5,
                "wins": 0,
                "draws": 3,
                "losses": 2,
                "goalsFor": 2,
                "goalsAgainst": 8
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
                "played": 3,
                "wins": 0,
                "draws": 1,
                "losses": 2,
                "goalsFor": 1,
                "goalsAgainst": 7
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
            }
          ],
          "fixtures": [
            {
              "fixtureId": 1570386,
              "kickoff": "2026-09-18T02:00:00+09:00",
              "status": "NS",
              "homeTeamId": 543,
              "homeTeam": "Real Betis",
              "awayTeamId": 546,
              "awayTeam": "Getafe",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1570390,
              "kickoff": "2026-09-18T04:30:00+09:00",
              "status": "NS",
              "homeTeamId": 535,
              "homeTeam": "Malaga",
              "awayTeamId": 533,
              "awayTeam": "Villarreal",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            }
          ]
        },
        {
          "key": "UEL",
          "leagueId": 3,
          "season": "2026",
          "standings": [
            {
              "teamId": 554,
              "team": "Anderlecht",
              "rank": 1,
              "points": 0,
              "goalsDiff": 0,
              "form": "WWWWW",
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
              "teamId": 3683,
              "team": "Ararat-Armenia",
              "rank": 2,
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
              "teamId": 201,
              "team": "AZ Alkmaar",
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
              "teamId": 211,
              "team": "Benfica",
              "rank": 4,
              "points": 0,
              "goalsDiff": 0,
              "form": "WWDWW",
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
              "teamId": 549,
              "team": "Beşiktaş",
              "rank": 5,
              "points": 0,
              "goalsDiff": 0,
              "form": "LWWWW",
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
              "teamId": 35,
              "team": "Bournemouth",
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
              "teamId": 4360,
              "team": "Celje",
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
              "teamId": 538,
              "team": "Celta Vigo",
              "rank": 8,
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
              "teamId": 247,
              "team": "Celtic",
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
              "teamId": 52,
              "team": "Crystal Palace",
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
              "teamId": 651,
              "team": "Ferencvarosi TC",
              "rank": 11,
              "points": 0,
              "goalsDiff": 0,
              "form": "WWDWD",
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
              "teamId": 620,
              "team": "Dinamo Zagreb",
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
              "teamId": 563,
              "team": "Hapoel Beer Sheva",
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
              "teamId": 167,
              "team": "1899 Hoffenheim",
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
              "teamId": 336,
              "team": "Jagiellonia",
              "rank": 15,
              "points": 0,
              "goalsDiff": 0,
              "form": "WWDW",
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
              "teamId": 496,
              "team": "Juventus",
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
              "teamId": 347,
              "team": "Lech Poznan",
              "rank": 17,
              "points": 0,
              "goalsDiff": 0,
              "form": "DWWW",
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
              "teamId": 168,
              "team": "Bayer Leverkusen",
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
              "teamId": 646,
              "team": "Levski Sofia",
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
              "teamId": 321,
              "team": "Lillestrom",
              "rank": 20,
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
              "teamId": 80,
              "team": "Lyon",
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
              "teamId": 81,
              "team": "Marseille",
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
              "teamId": 489,
              "team": "AC Milan",
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
              "teamId": 413,
              "team": "NEC Nijmegen",
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
              "teamId": 1124,
              "team": "OFI",
              "rank": 25,
              "points": 0,
              "goalsDiff": 0,
              "form": "WW",
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
              "teamId": 553,
              "team": "Olympiakos Piraeus",
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
              "teamId": 3402,
              "team": "Omonia Nicosia",
              "rank": 27,
              "points": 0,
              "goalsDiff": 0,
              "form": "WLWD",
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
              "teamId": 548,
              "team": "Real Sociedad",
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
              "teamId": 94,
              "team": "Rennes",
              "rank": 29,
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
              "teamId": 571,
              "team": "Red Bull Salzburg",
              "rank": 30,
              "points": 0,
              "goalsDiff": 0,
              "form": "WWDW",
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
              "teamId": 628,
              "team": "Sparta Praha",
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
              "teamId": 637,
              "team": "Sturm Graz",
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
              "teamId": 746,
              "team": "Sunderland",
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
              "teamId": 4799,
              "team": "Torreense",
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
              "teamId": 1393,
              "team": "Union St. Gilloise",
              "rank": 35,
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
              "teamId": 567,
              "team": "Plzen",
              "rank": 36,
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
            }
          ],
          "teams": [
            {
              "teamId": 646,
              "team": "Levski Sofia",
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
              "teamId": 571,
              "team": "Red Bull Salzburg",
              "form": "WDWW",
              "all": {
                "played": 4,
                "wins": 3,
                "draws": 1,
                "losses": 0,
                "goalsFor": 8,
                "goalsAgainst": 3
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
                "played": 2,
                "wins": 1,
                "draws": 1,
                "losses": 0,
                "goalsFor": 4,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 1124,
              "team": "OFI",
              "form": "WW",
              "all": {
                "played": 2,
                "wins": 2,
                "draws": 0,
                "losses": 0,
                "goalsFor": 5,
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
                "goalsFor": 2,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 167,
              "team": "1899 Hoffenheim",
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
              "teamId": 52,
              "team": "Crystal Palace",
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
              "teamId": 347,
              "team": "Lech Poznan",
              "form": "WWWD",
              "all": {
                "played": 4,
                "wins": 3,
                "draws": 1,
                "losses": 0,
                "goalsFor": 15,
                "goalsAgainst": 2
              },
              "home": {
                "played": 2,
                "wins": 2,
                "draws": 0,
                "losses": 0,
                "goalsFor": 8,
                "goalsAgainst": 0
              },
              "away": {
                "played": 2,
                "wins": 1,
                "draws": 1,
                "losses": 0,
                "goalsFor": 7,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 247,
              "team": "Celtic",
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
              "teamId": 651,
              "team": "Ferencvarosi TC",
              "form": "WWWDWDWW",
              "all": {
                "played": 8,
                "wins": 6,
                "draws": 2,
                "losses": 0,
                "goalsFor": 16,
                "goalsAgainst": 5
              },
              "home": {
                "played": 4,
                "wins": 3,
                "draws": 1,
                "losses": 0,
                "goalsFor": 10,
                "goalsAgainst": 2
              },
              "away": {
                "played": 4,
                "wins": 3,
                "draws": 1,
                "losses": 0,
                "goalsFor": 6,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 321,
              "team": "Lillestrom",
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
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 2,
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
              "teamId": 4799,
              "team": "Torreense",
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
              "teamId": 496,
              "team": "Juventus",
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
              "teamId": 413,
              "team": "NEC Nijmegen",
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
              "teamId": 548,
              "team": "Real Sociedad",
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
              "teamId": 35,
              "team": "Bournemouth",
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
              "teamId": 549,
              "team": "Beşiktaş",
              "form": "WWWWWL",
              "all": {
                "played": 6,
                "wins": 5,
                "draws": 0,
                "losses": 1,
                "goalsFor": 8,
                "goalsAgainst": 1
              },
              "home": {
                "played": 3,
                "wins": 3,
                "draws": 0,
                "losses": 0,
                "goalsFor": 5,
                "goalsAgainst": 0
              },
              "away": {
                "played": 3,
                "wins": 2,
                "draws": 0,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 81,
              "team": "Marseille",
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
              "teamId": 567,
              "team": "Plzen",
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
              "teamId": 1393,
              "team": "Union St. Gilloise",
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
              "fixtureId": 1636285,
              "kickoff": "2026-09-18T01:45:00+09:00",
              "status": "NS",
              "homeTeamId": 646,
              "homeTeam": "Levski Sofia",
              "awayTeamId": 571,
              "awayTeam": "Red Bull Salzburg",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1636304,
              "kickoff": "2026-09-18T01:45:00+09:00",
              "status": "NS",
              "homeTeamId": 1124,
              "homeTeam": "OFI",
              "awayTeamId": 167,
              "awayTeam": "1899 Hoffenheim",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1636251,
              "kickoff": "2026-09-18T04:00:00+09:00",
              "status": "NS",
              "homeTeamId": 52,
              "homeTeam": "Crystal Palace",
              "awayTeamId": 347,
              "awayTeam": "Lech Poznan",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1636247,
              "kickoff": "2026-09-18T04:00:00+09:00",
              "status": "NS",
              "homeTeamId": 247,
              "homeTeam": "Celtic",
              "awayTeamId": 651,
              "awayTeam": "Ferencvarosi TC",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1636287,
              "kickoff": "2026-09-18T04:00:00+09:00",
              "status": "NS",
              "homeTeamId": 321,
              "homeTeam": "Lillestrom",
              "awayTeamId": 4799,
              "awayTeam": "Torreense",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1636278,
              "kickoff": "2026-09-18T04:00:00+09:00",
              "status": "NS",
              "homeTeamId": 496,
              "homeTeam": "Juventus",
              "awayTeamId": 413,
              "awayTeam": "NEC Nijmegen",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1636321,
              "kickoff": "2026-09-18T04:00:00+09:00",
              "status": "NS",
              "homeTeamId": 548,
              "homeTeam": "Real Sociedad",
              "awayTeamId": 35,
              "awayTeam": "Bournemouth",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1636232,
              "kickoff": "2026-09-18T04:00:00+09:00",
              "status": "NS",
              "homeTeamId": 549,
              "homeTeam": "Beşiktaş",
              "awayTeamId": 81,
              "awayTeam": "Marseille",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1636316,
              "kickoff": "2026-09-18T04:00:00+09:00",
              "status": "NS",
              "homeTeamId": 567,
              "homeTeam": "Plzen",
              "awayTeamId": 1393,
              "awayTeam": "Union St. Gilloise",
              "injuriesChecked": true,
              "injuries": [],
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
