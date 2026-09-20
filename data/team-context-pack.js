(function attachTeamContextPack(root, factory) {
  const pack = factory();
  if (typeof module !== "undefined" && module.exports) module.exports = pack;
  if (root) root.ODDS_ARCHIVE_TEAM_CONTEXT_PACK = pack;
})(typeof window !== "undefined" ? window : globalThis, function createTeamContextPack() {
  return {
  "version": "team-context-v3",
  "date": "2026-09-21",
  "updatedAt": "2026-09-20T20:44:36.322Z",
  "collection": {
    "dates": [
      "2026-09-21"
    ],
    "requestGroups": 9,
    "skippedGroups": 17,
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
          "points": 15,
          "goalsDiff": 8,
          "form": "WWWWW",
          "all": {
            "played": 5,
            "wins": 5,
            "draws": 0,
            "losses": 0,
            "goalsFor": 13,
            "goalsAgainst": 5
          },
          "home": {
            "played": 3,
            "wins": 3,
            "draws": 0,
            "losses": 0,
            "goalsFor": 8,
            "goalsAgainst": 4
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
          "teamId": 42,
          "team": "Arsenal",
          "rank": 2,
          "points": 12,
          "goalsDiff": 4,
          "form": "LWWWW",
          "all": {
            "played": 5,
            "wins": 4,
            "draws": 0,
            "losses": 1,
            "goalsFor": 8,
            "goalsAgainst": 4
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
            "played": 3,
            "wins": 2,
            "draws": 0,
            "losses": 1,
            "goalsFor": 3,
            "goalsAgainst": 3
          }
        },
        {
          "teamId": 51,
          "team": "Brighton",
          "rank": 3,
          "points": 10,
          "goalsDiff": 11,
          "form": "WWDLW",
          "all": {
            "played": 5,
            "wins": 3,
            "draws": 1,
            "losses": 1,
            "goalsFor": 16,
            "goalsAgainst": 5
          },
          "home": {
            "played": 3,
            "wins": 2,
            "draws": 1,
            "losses": 0,
            "goalsFor": 8,
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
          "teamId": 55,
          "team": "Brentford",
          "rank": 4,
          "points": 9,
          "goalsDiff": 6,
          "form": "WDDDW",
          "all": {
            "played": 5,
            "wins": 2,
            "draws": 3,
            "losses": 0,
            "goalsFor": 10,
            "goalsAgainst": 4
          },
          "home": {
            "played": 3,
            "wins": 2,
            "draws": 1,
            "losses": 0,
            "goalsFor": 7,
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
          "teamId": 63,
          "team": "Leeds",
          "rank": 5,
          "points": 9,
          "goalsDiff": 4,
          "form": "DWDDW",
          "all": {
            "played": 5,
            "wins": 2,
            "draws": 3,
            "losses": 0,
            "goalsFor": 7,
            "goalsAgainst": 3
          },
          "home": {
            "played": 3,
            "wins": 1,
            "draws": 2,
            "losses": 0,
            "goalsFor": 5,
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
          "teamId": 40,
          "team": "Liverpool",
          "rank": 6,
          "points": 9,
          "goalsDiff": 3,
          "form": "WDWDD",
          "all": {
            "played": 5,
            "wins": 2,
            "draws": 3,
            "losses": 0,
            "goalsFor": 7,
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
            "played": 3,
            "wins": 2,
            "draws": 1,
            "losses": 0,
            "goalsFor": 5,
            "goalsAgainst": 2
          }
        },
        {
          "teamId": 45,
          "team": "Everton",
          "rank": 7,
          "points": 9,
          "goalsDiff": 3,
          "form": "WDDDW",
          "all": {
            "played": 5,
            "wins": 2,
            "draws": 3,
            "losses": 0,
            "goalsFor": 6,
            "goalsAgainst": 3
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
            "wins": 0,
            "draws": 2,
            "losses": 0,
            "goalsFor": 1,
            "goalsAgainst": 1
          }
        },
        {
          "teamId": 64,
          "team": "Hull City",
          "rank": 8,
          "points": 8,
          "goalsDiff": 2,
          "form": "LDDWW",
          "all": {
            "played": 5,
            "wins": 2,
            "draws": 2,
            "losses": 1,
            "goalsFor": 6,
            "goalsAgainst": 4
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
            "played": 3,
            "wins": 1,
            "draws": 1,
            "losses": 1,
            "goalsFor": 4,
            "goalsAgainst": 4
          }
        },
        {
          "teamId": 34,
          "team": "Newcastle",
          "rank": 9,
          "points": 8,
          "goalsDiff": 0,
          "form": "WLDWD",
          "all": {
            "played": 5,
            "wins": 2,
            "draws": 2,
            "losses": 1,
            "goalsFor": 9,
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
            "draws": 0,
            "losses": 1,
            "goalsFor": 3,
            "goalsAgainst": 4
          }
        },
        {
          "teamId": 49,
          "team": "Chelsea",
          "rank": 10,
          "points": 7,
          "goalsDiff": -2,
          "form": "LDLWW",
          "all": {
            "played": 5,
            "wins": 2,
            "draws": 1,
            "losses": 2,
            "goalsFor": 10,
            "goalsAgainst": 12
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
            "played": 3,
            "wins": 1,
            "draws": 0,
            "losses": 2,
            "goalsFor": 4,
            "goalsAgainst": 7
          }
        },
        {
          "teamId": 57,
          "team": "Ipswich",
          "rank": 11,
          "points": 6,
          "goalsDiff": -4,
          "form": "LWLLW",
          "all": {
            "played": 5,
            "wins": 2,
            "draws": 0,
            "losses": 3,
            "goalsFor": 7,
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
            "played": 3,
            "wins": 1,
            "draws": 0,
            "losses": 2,
            "goalsFor": 5,
            "goalsAgainst": 8
          }
        },
        {
          "teamId": 33,
          "team": "Manchester United",
          "rank": 12,
          "points": 5,
          "goalsDiff": 0,
          "form": "DLDWL",
          "all": {
            "played": 5,
            "wins": 1,
            "draws": 2,
            "losses": 2,
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
            "wins": 0,
            "draws": 2,
            "losses": 1,
            "goalsFor": 3,
            "goalsAgainst": 5
          }
        },
        {
          "teamId": 65,
          "team": "Nottingham Forest",
          "rank": 13,
          "points": 5,
          "goalsDiff": -1,
          "form": "LWDDL",
          "all": {
            "played": 5,
            "wins": 1,
            "draws": 2,
            "losses": 2,
            "goalsFor": 4,
            "goalsAgainst": 5
          },
          "home": {
            "played": 3,
            "wins": 0,
            "draws": 1,
            "losses": 2,
            "goalsFor": 0,
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
          "teamId": 746,
          "team": "Sunderland",
          "rank": 14,
          "points": 4,
          "goalsDiff": -4,
          "form": "LLDWL",
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
            "wins": 1,
            "draws": 0,
            "losses": 1,
            "goalsFor": 1,
            "goalsAgainst": 2
          },
          "away": {
            "played": 3,
            "wins": 0,
            "draws": 1,
            "losses": 2,
            "goalsFor": 5,
            "goalsAgainst": 8
          }
        },
        {
          "teamId": 52,
          "team": "Crystal Palace",
          "rank": 15,
          "points": 4,
          "goalsDiff": -5,
          "form": "DLWLL",
          "all": {
            "played": 5,
            "wins": 1,
            "draws": 1,
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
            "played": 3,
            "wins": 1,
            "draws": 1,
            "losses": 1,
            "goalsFor": 3,
            "goalsAgainst": 4
          }
        },
        {
          "teamId": 66,
          "team": "Aston Villa",
          "rank": 16,
          "points": 4,
          "goalsDiff": -5,
          "form": "WLDLL",
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
            "wins": 0,
            "draws": 0,
            "losses": 2,
            "goalsFor": 1,
            "goalsAgainst": 3
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
          "teamId": 35,
          "team": "Bournemouth",
          "rank": 17,
          "points": 3,
          "goalsDiff": -2,
          "form": "LDDDL",
          "all": {
            "played": 5,
            "wins": 0,
            "draws": 3,
            "losses": 2,
            "goalsFor": 6,
            "goalsAgainst": 8
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
            "played": 2,
            "wins": 0,
            "draws": 1,
            "losses": 1,
            "goalsFor": 3,
            "goalsAgainst": 4
          }
        },
        {
          "teamId": 1346,
          "team": "Coventry",
          "rank": 18,
          "points": 3,
          "goalsDiff": -9,
          "form": "WLLLL",
          "all": {
            "played": 5,
            "wins": 1,
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
            "goalsFor": 0,
            "goalsAgainst": 6
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
          "teamId": 36,
          "team": "Fulham",
          "rank": 19,
          "points": 2,
          "goalsDiff": -3,
          "form": "DDLLL",
          "all": {
            "played": 5,
            "wins": 0,
            "draws": 2,
            "losses": 3,
            "goalsFor": 5,
            "goalsAgainst": 8
          },
          "home": {
            "played": 3,
            "wins": 0,
            "draws": 1,
            "losses": 2,
            "goalsFor": 5,
            "goalsAgainst": 7
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
          "teamId": 47,
          "team": "Tottenham",
          "rank": 20,
          "points": 2,
          "goalsDiff": -6,
          "form": "LDDLL",
          "all": {
            "played": 5,
            "wins": 0,
            "draws": 2,
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
            "goalsAgainst": 5
          },
          "away": {
            "played": 2,
            "wins": 0,
            "draws": 1,
            "losses": 1,
            "goalsFor": 0,
            "goalsAgainst": 3
          }
        }
      ],
      "teams": [
        {
          "teamId": 36,
          "team": "Fulham",
          "form": "LLLDD",
          "all": {
            "played": 5,
            "wins": 0,
            "draws": 2,
            "losses": 3,
            "goalsFor": 5,
            "goalsAgainst": 8
          },
          "home": {
            "played": 3,
            "wins": 0,
            "draws": 1,
            "losses": 2,
            "goalsFor": 5,
            "goalsAgainst": 7
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
          "teamId": 33,
          "team": "Manchester United",
          "form": "LWDLD",
          "all": {
            "played": 5,
            "wins": 1,
            "draws": 2,
            "losses": 2,
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
            "wins": 0,
            "draws": 2,
            "losses": 1,
            "goalsFor": 3,
            "goalsAgainst": 5
          }
        }
      ],
      "fixtures": [
        {
          "fixtureId": 1557411,
          "kickoff": "2026-09-21T00:30:00+09:00",
          "status": "FT",
          "homeTeamId": 36,
          "homeTeam": "Fulham",
          "awayTeamId": 33,
          "awayTeam": "Manchester United",
          "injuriesChecked": true,
          "injuries": [
            {
              "fixtureId": 1557411,
              "teamId": 36,
              "playerId": 19025,
              "player": "T. Cairney",
              "type": "Missing Fixture",
              "reason": "Knee Injury"
            },
            {
              "fixtureId": 1557411,
              "teamId": 36,
              "playerId": 657,
              "player": "K. Tete",
              "type": "Missing Fixture",
              "reason": "Concussion"
            },
            {
              "fixtureId": 1557411,
              "teamId": 36,
              "playerId": 19032,
              "player": "R. Sessegnon",
              "type": "Questionable",
              "reason": "Groin Injury"
            },
            {
              "fixtureId": 1557411,
              "teamId": 33,
              "playerId": 157997,
              "player": "A. Diallo",
              "type": "Missing Fixture",
              "reason": "Injury"
            },
            {
              "fixtureId": 1557411,
              "teamId": 33,
              "playerId": 2931,
              "player": "T. Heaton",
              "type": "Missing Fixture",
              "reason": "Injury"
            },
            {
              "fixtureId": 1557411,
              "teamId": 33,
              "playerId": 51494,
              "player": "M. Ugarte",
              "type": "Missing Fixture",
              "reason": "Knee Injury"
            },
            {
              "fixtureId": 1557411,
              "teamId": 33,
              "playerId": 532,
              "player": "M. de Ligt",
              "type": "Missing Fixture",
              "reason": "Back Injury"
            },
            {
              "fixtureId": 1557411,
              "teamId": 33,
              "playerId": 356041,
              "player": "C. Baleba",
              "type": "Questionable",
              "reason": "Ankle Injury"
            },
            {
              "fixtureId": 1557411,
              "teamId": 33,
              "playerId": 891,
              "player": "L. Shaw",
              "type": "Questionable",
              "reason": "Injury"
            }
          ],
          "lineupsChecked": true,
          "lineups": [
            {
              "teamId": 36,
              "team": "Fulham",
              "formation": "4-2-3-1",
              "coach": "Álvaro Arbeloa",
              "starters": [
                "B. Leno",
                "T. Castagne",
                "D. Affengruber",
                "C. Bassey",
                "A. Robinson",
                "S. Berge",
                "S. Charles",
                "Oscar Bobb",
                "Joshua King",
                "A. Iwobi",
                "Gonzalo García"
              ]
            },
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
                "L. Shaw",
                "K. Mainoo",
                "Y. Tielemans",
                "B. Mbeumo",
                "Bruno Fernandes",
                "M. Rashford",
                "Matheus Cunha"
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
          "points": 21,
          "goalsDiff": 24,
          "form": "WWWWW",
          "all": {
            "played": 7,
            "wins": 7,
            "draws": 0,
            "losses": 0,
            "goalsFor": 31,
            "goalsAgainst": 7
          },
          "home": {
            "played": 3,
            "wins": 3,
            "draws": 0,
            "losses": 0,
            "goalsFor": 14,
            "goalsAgainst": 4
          },
          "away": {
            "played": 4,
            "wins": 4,
            "draws": 0,
            "losses": 0,
            "goalsFor": 17,
            "goalsAgainst": 3
          }
        },
        {
          "teamId": 530,
          "team": "Atletico Madrid",
          "rank": 2,
          "points": 16,
          "goalsDiff": 9,
          "form": "WWWLW",
          "all": {
            "played": 7,
            "wins": 5,
            "draws": 1,
            "losses": 1,
            "goalsFor": 16,
            "goalsAgainst": 7
          },
          "home": {
            "played": 4,
            "wins": 3,
            "draws": 1,
            "losses": 0,
            "goalsFor": 10,
            "goalsAgainst": 3
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
          "teamId": 543,
          "team": "Real Betis",
          "rank": 3,
          "points": 16,
          "goalsDiff": 2,
          "form": "DWWWL",
          "all": {
            "played": 7,
            "wins": 5,
            "draws": 1,
            "losses": 1,
            "goalsFor": 9,
            "goalsAgainst": 7
          },
          "home": {
            "played": 3,
            "wins": 3,
            "draws": 0,
            "losses": 0,
            "goalsFor": 3,
            "goalsAgainst": 0
          },
          "away": {
            "played": 4,
            "wins": 2,
            "draws": 1,
            "losses": 1,
            "goalsFor": 6,
            "goalsAgainst": 7
          }
        },
        {
          "teamId": 541,
          "team": "Real Madrid",
          "rank": 4,
          "points": 15,
          "goalsDiff": 10,
          "form": "LWWLW",
          "all": {
            "played": 7,
            "wins": 5,
            "draws": 0,
            "losses": 2,
            "goalsFor": 18,
            "goalsAgainst": 8
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
            "played": 4,
            "wins": 2,
            "draws": 0,
            "losses": 2,
            "goalsFor": 6,
            "goalsAgainst": 6
          }
        },
        {
          "teamId": 536,
          "team": "Sevilla",
          "rank": 5,
          "points": 13,
          "goalsDiff": 1,
          "form": "LWWDL",
          "all": {
            "played": 7,
            "wins": 4,
            "draws": 1,
            "losses": 2,
            "goalsFor": 10,
            "goalsAgainst": 9
          },
          "home": {
            "played": 4,
            "wins": 2,
            "draws": 0,
            "losses": 2,
            "goalsFor": 5,
            "goalsAgainst": 7
          },
          "away": {
            "played": 3,
            "wins": 2,
            "draws": 1,
            "losses": 0,
            "goalsFor": 5,
            "goalsAgainst": 2
          }
        },
        {
          "teamId": 542,
          "team": "Alaves",
          "rank": 6,
          "points": 11,
          "goalsDiff": 5,
          "form": "DLLWW",
          "all": {
            "played": 7,
            "wins": 3,
            "draws": 2,
            "losses": 2,
            "goalsFor": 11,
            "goalsAgainst": 6
          },
          "home": {
            "played": 4,
            "wins": 3,
            "draws": 0,
            "losses": 1,
            "goalsFor": 9,
            "goalsAgainst": 3
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
          "teamId": 544,
          "team": "Deportivo La Coruna",
          "rank": 7,
          "points": 10,
          "goalsDiff": 2,
          "form": "DLDWW",
          "all": {
            "played": 7,
            "wins": 2,
            "draws": 4,
            "losses": 1,
            "goalsFor": 10,
            "goalsAgainst": 8
          },
          "home": {
            "played": 4,
            "wins": 1,
            "draws": 2,
            "losses": 1,
            "goalsFor": 5,
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
          "teamId": 533,
          "team": "Villarreal",
          "rank": 8,
          "points": 8,
          "goalsDiff": 1,
          "form": "WWLLL",
          "all": {
            "played": 7,
            "wins": 2,
            "draws": 2,
            "losses": 3,
            "goalsFor": 13,
            "goalsAgainst": 12
          },
          "home": {
            "played": 3,
            "wins": 1,
            "draws": 0,
            "losses": 2,
            "goalsFor": 6,
            "goalsAgainst": 6
          },
          "away": {
            "played": 4,
            "wins": 1,
            "draws": 2,
            "losses": 1,
            "goalsFor": 7,
            "goalsAgainst": 6
          }
        },
        {
          "teamId": 531,
          "team": "Athletic Club",
          "rank": 9,
          "points": 8,
          "goalsDiff": 1,
          "form": "DDWWL",
          "all": {
            "played": 6,
            "wins": 2,
            "draws": 2,
            "losses": 2,
            "goalsFor": 7,
            "goalsAgainst": 6
          },
          "home": {
            "played": 4,
            "wins": 1,
            "draws": 2,
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
          "teamId": 546,
          "team": "Getafe",
          "rank": 10,
          "points": 8,
          "goalsDiff": -3,
          "form": "WLDDL",
          "all": {
            "played": 7,
            "wins": 2,
            "draws": 2,
            "losses": 3,
            "goalsFor": 4,
            "goalsAgainst": 7
          },
          "home": {
            "played": 4,
            "wins": 2,
            "draws": 2,
            "losses": 0,
            "goalsFor": 4,
            "goalsAgainst": 2
          },
          "away": {
            "played": 3,
            "wins": 0,
            "draws": 0,
            "losses": 3,
            "goalsFor": 0,
            "goalsAgainst": 5
          }
        },
        {
          "teamId": 728,
          "team": "Rayo Vallecano",
          "rank": 11,
          "points": 8,
          "goalsDiff": -5,
          "form": "DWLWL",
          "all": {
            "played": 7,
            "wins": 2,
            "draws": 2,
            "losses": 3,
            "goalsFor": 11,
            "goalsAgainst": 16
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
            "played": 4,
            "wins": 0,
            "draws": 1,
            "losses": 3,
            "goalsFor": 5,
            "goalsAgainst": 12
          }
        },
        {
          "teamId": 727,
          "team": "Osasuna",
          "rank": 12,
          "points": 8,
          "goalsDiff": -7,
          "form": "DLLLW",
          "all": {
            "played": 7,
            "wins": 2,
            "draws": 2,
            "losses": 3,
            "goalsFor": 6,
            "goalsAgainst": 13
          },
          "home": {
            "played": 4,
            "wins": 1,
            "draws": 2,
            "losses": 1,
            "goalsFor": 2,
            "goalsAgainst": 3
          },
          "away": {
            "played": 3,
            "wins": 1,
            "draws": 0,
            "losses": 2,
            "goalsFor": 4,
            "goalsAgainst": 10
          }
        },
        {
          "teamId": 538,
          "team": "Celta Vigo",
          "rank": 13,
          "points": 7,
          "goalsDiff": 2,
          "form": "WDDDL",
          "all": {
            "played": 7,
            "wins": 1,
            "draws": 4,
            "losses": 2,
            "goalsFor": 8,
            "goalsAgainst": 6
          },
          "home": {
            "played": 4,
            "wins": 1,
            "draws": 1,
            "losses": 2,
            "goalsFor": 7,
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
          "teamId": 540,
          "team": "Espanyol",
          "rank": 14,
          "points": 7,
          "goalsDiff": 0,
          "form": "LLWDL",
          "all": {
            "played": 7,
            "wins": 2,
            "draws": 1,
            "losses": 4,
            "goalsFor": 10,
            "goalsAgainst": 10
          },
          "home": {
            "played": 4,
            "wins": 1,
            "draws": 1,
            "losses": 2,
            "goalsFor": 6,
            "goalsAgainst": 6
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
          "teamId": 548,
          "team": "Real Sociedad",
          "rank": 15,
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
          "teamId": 4665,
          "team": "Racing Santander",
          "rank": 16,
          "points": 7,
          "goalsDiff": -10,
          "form": "LLWLW",
          "all": {
            "played": 7,
            "wins": 2,
            "draws": 1,
            "losses": 4,
            "goalsFor": 11,
            "goalsAgainst": 21
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
            "played": 4,
            "wins": 0,
            "draws": 0,
            "losses": 4,
            "goalsFor": 4,
            "goalsAgainst": 16
          }
        },
        {
          "teamId": 539,
          "team": "Levante",
          "rank": 17,
          "points": 5,
          "goalsDiff": -4,
          "form": "LLDWD",
          "all": {
            "played": 6,
            "wins": 1,
            "draws": 2,
            "losses": 3,
            "goalsFor": 8,
            "goalsAgainst": 12
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
            "played": 4,
            "wins": 0,
            "draws": 2,
            "losses": 2,
            "goalsFor": 1,
            "goalsAgainst": 6
          }
        },
        {
          "teamId": 797,
          "team": "Elche",
          "rank": 18,
          "points": 5,
          "goalsDiff": -6,
          "form": "WLDLL",
          "all": {
            "played": 7,
            "wins": 1,
            "draws": 2,
            "losses": 4,
            "goalsFor": 11,
            "goalsAgainst": 17
          },
          "home": {
            "played": 3,
            "wins": 0,
            "draws": 0,
            "losses": 3,
            "goalsFor": 4,
            "goalsAgainst": 11
          },
          "away": {
            "played": 4,
            "wins": 1,
            "draws": 2,
            "losses": 1,
            "goalsFor": 7,
            "goalsAgainst": 6
          }
        },
        {
          "teamId": 532,
          "team": "Valencia",
          "rank": 19,
          "points": 4,
          "goalsDiff": -8,
          "form": "WLLLL",
          "all": {
            "played": 6,
            "wins": 1,
            "draws": 1,
            "losses": 4,
            "goalsFor": 2,
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
            "played": 3,
            "wins": 1,
            "draws": 0,
            "losses": 2,
            "goalsFor": 2,
            "goalsAgainst": 4
          }
        },
        {
          "teamId": 535,
          "team": "Malaga",
          "rank": 20,
          "points": 3,
          "goalsDiff": -9,
          "form": "LLDDL",
          "all": {
            "played": 7,
            "wins": 0,
            "draws": 3,
            "losses": 4,
            "goalsFor": 3,
            "goalsAgainst": 12
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
            "played": 4,
            "wins": 0,
            "draws": 1,
            "losses": 3,
            "goalsFor": 1,
            "goalsAgainst": 8
          }
        }
      ],
      "teams": [
        {
          "teamId": 533,
          "team": "Villarreal",
          "form": "DDLLLWW",
          "all": {
            "played": 7,
            "wins": 2,
            "draws": 2,
            "losses": 3,
            "goalsFor": 13,
            "goalsAgainst": 12
          },
          "home": {
            "played": 3,
            "wins": 1,
            "draws": 0,
            "losses": 2,
            "goalsFor": 6,
            "goalsAgainst": 6
          },
          "away": {
            "played": 4,
            "wins": 1,
            "draws": 2,
            "losses": 1,
            "goalsFor": 7,
            "goalsAgainst": 6
          }
        },
        {
          "teamId": 539,
          "team": "Levante",
          "form": "LDWDLL",
          "all": {
            "played": 6,
            "wins": 1,
            "draws": 2,
            "losses": 3,
            "goalsFor": 8,
            "goalsAgainst": 12
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
            "played": 4,
            "wins": 0,
            "draws": 2,
            "losses": 2,
            "goalsFor": 1,
            "goalsAgainst": 6
          }
        },
        {
          "teamId": 544,
          "team": "Deportivo La Coruna",
          "form": "DDWWDLD",
          "all": {
            "played": 7,
            "wins": 2,
            "draws": 4,
            "losses": 1,
            "goalsFor": 10,
            "goalsAgainst": 8
          },
          "home": {
            "played": 4,
            "wins": 1,
            "draws": 2,
            "losses": 1,
            "goalsFor": 5,
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
          "teamId": 543,
          "team": "Real Betis",
          "form": "WWLWWWD",
          "all": {
            "played": 7,
            "wins": 5,
            "draws": 1,
            "losses": 1,
            "goalsFor": 9,
            "goalsAgainst": 7
          },
          "home": {
            "played": 3,
            "wins": 3,
            "draws": 0,
            "losses": 0,
            "goalsFor": 3,
            "goalsAgainst": 0
          },
          "away": {
            "played": 4,
            "wins": 2,
            "draws": 1,
            "losses": 1,
            "goalsFor": 6,
            "goalsAgainst": 7
          }
        },
        {
          "teamId": 532,
          "team": "Valencia",
          "form": "DLLLLW",
          "all": {
            "played": 6,
            "wins": 1,
            "draws": 1,
            "losses": 4,
            "goalsFor": 2,
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
            "played": 3,
            "wins": 1,
            "draws": 0,
            "losses": 2,
            "goalsFor": 2,
            "goalsAgainst": 4
          }
        },
        {
          "teamId": 548,
          "team": "Real Sociedad",
          "form": "LLWDWL",
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
        }
      ],
      "fixtures": [
        {
          "fixtureId": 1570402,
          "kickoff": "2026-09-21T01:30:00+09:00",
          "status": "FT",
          "homeTeamId": 533,
          "homeTeam": "Villarreal",
          "awayTeamId": 539,
          "awayTeam": "Levante",
          "injuriesChecked": true,
          "injuries": [
            {
              "fixtureId": 1570402,
              "teamId": 533,
              "playerId": 47541,
              "player": "S. Comesana",
              "type": "Missing Fixture",
              "reason": "Injury"
            },
            {
              "fixtureId": 1570402,
              "teamId": 533,
              "playerId": 166,
              "player": "J. Foyth",
              "type": "Questionable",
              "reason": "Achilles Tendon Injury"
            },
            {
              "fixtureId": 1570402,
              "teamId": 539,
              "playerId": 378284,
              "player": "K. Etta Eyong",
              "type": "Missing Fixture",
              "reason": "Injury"
            },
            {
              "fixtureId": 1570402,
              "teamId": 539,
              "playerId": 338295,
              "player": "A. Primo",
              "type": "Missing Fixture",
              "reason": "Shoulder Injury"
            },
            {
              "fixtureId": 1570402,
              "teamId": 539,
              "playerId": 313651,
              "player": "H. Sotelo",
              "type": "Missing Fixture",
              "reason": "Knee Injury"
            }
          ],
          "lineupsChecked": true,
          "lineups": [
            {
              "teamId": 533,
              "team": "Villarreal",
              "formation": "4-1-2-1-2",
              "coach": "Iñigo Pérez",
              "starters": [
                "P. Gulácsi",
                "A. Freeman",
                "Pau Navarro",
                "Renato Veiga",
                "Sergi Cardona",
                "N. Saliba",
                "P. Gueye",
                "T. Buchanan",
                "Alberto Moleiro",
                "Ilias Akhomach",
                "Ayoze Pérez"
              ]
            },
            {
              "teamId": 539,
              "team": "Levante",
              "formation": "4-3-3",
              "coach": "Luís Castro",
              "starters": [
                "M. Ryan",
                "J. Toljan",
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
          "fixtureId": 1570396,
          "kickoff": "2026-09-21T01:30:00+09:00",
          "status": "FT",
          "homeTeamId": 544,
          "homeTeam": "Deportivo La Coruna",
          "awayTeamId": 543,
          "awayTeam": "Real Betis",
          "injuriesChecked": true,
          "injuries": [
            {
              "fixtureId": 1570396,
              "teamId": 544,
              "playerId": 227,
              "player": "Angelino",
              "type": "Missing Fixture",
              "reason": "Red Card"
            },
            {
              "fixtureId": 1570396,
              "teamId": 544,
              "playerId": 628615,
              "player": "N. Carrillo",
              "type": "Questionable",
              "reason": "Ankle Injury"
            },
            {
              "fixtureId": 1570396,
              "teamId": 543,
              "playerId": 47302,
              "player": "D. Llorente",
              "type": "Missing Fixture",
              "reason": "Broken nose"
            },
            {
              "fixtureId": 1570396,
              "teamId": 543,
              "playerId": 128985,
              "player": "I. Losada",
              "type": "Missing Fixture",
              "reason": "Inactive"
            },
            {
              "fixtureId": 1570396,
              "teamId": 543,
              "playerId": 47119,
              "player": "A. Ruibal",
              "type": "Missing Fixture",
              "reason": "Knee Injury"
            }
          ],
          "lineupsChecked": true,
          "lineups": [
            {
              "teamId": 544,
              "team": "Deportivo La Coruna",
              "formation": "4-4-2",
              "coach": "Antonio Hidalgo",
              "starters": [
                "Leo Román",
                "Ximo Navarro",
                "J. Giménez",
                "B. Ede",
                "G. Quagliata",
                "David Mella",
                "Marc Casadó",
                "Mario Soriano",
                "Riki Rodríguez",
                "Jonathan Asp Jensen",
                "B. Nsongo"
              ]
            },
            {
              "teamId": 543,
              "team": "Real Betis",
              "formation": "4-3-3",
              "coach": "M. Pellegrini",
              "starters": [
                "Álvaro Vallés",
                "Héctor Bellerín",
                "Marc Bartra",
                "Natan",
                "Fran García",
                "N. Deossa",
                "Marc Roca",
                "Pablo Fornals",
                "Antony",
                "C. Hernández",
                "A. Ezzalzouli"
              ]
            }
          ]
        },
        {
          "fixtureId": 1570401,
          "kickoff": "2026-09-21T04:00:00+09:00",
          "status": "2H",
          "homeTeamId": 532,
          "homeTeam": "Valencia",
          "awayTeamId": 548,
          "awayTeam": "Real Sociedad",
          "injuriesChecked": true,
          "injuries": [
            {
              "fixtureId": 1570401,
              "teamId": 532,
              "playerId": 19352,
              "player": "S. Canos",
              "type": "Missing Fixture",
              "reason": "Knee Injury"
            },
            {
              "fixtureId": 1570401,
              "teamId": 532,
              "playerId": 181582,
              "player": "J. Copete",
              "type": "Missing Fixture",
              "reason": "Ankle Injury"
            },
            {
              "fixtureId": 1570401,
              "teamId": 532,
              "playerId": 916,
              "player": "M. Diakhaby",
              "type": "Missing Fixture",
              "reason": "Muscle Injury"
            },
            {
              "fixtureId": 1570401,
              "teamId": 532,
              "playerId": 47251,
              "player": "D. Foulquier",
              "type": "Missing Fixture",
              "reason": "Injury"
            },
            {
              "fixtureId": 1570401,
              "teamId": 532,
              "playerId": 162127,
              "player": "D. Lopez",
              "type": "Missing Fixture",
              "reason": "Knee Injury"
            },
            {
              "fixtureId": 1570401,
              "teamId": 532,
              "playerId": 31406,
              "player": "U. Sadiq",
              "type": "Missing Fixture",
              "reason": "Muscle Injury"
            },
            {
              "fixtureId": 1570401,
              "teamId": 532,
              "playerId": 333672,
              "player": "C. Tarrega",
              "type": "Missing Fixture",
              "reason": "Hamstring Injury"
            },
            {
              "fixtureId": 1570401,
              "teamId": 548,
              "playerId": 737,
              "player": "A. Odriozola",
              "type": "Missing Fixture",
              "reason": "Knee Injury"
            },
            {
              "fixtureId": 1570401,
              "teamId": 548,
              "playerId": 47314,
              "player": "I. Zubeldia",
              "type": "Missing Fixture",
              "reason": "Injury"
            }
          ],
          "lineupsChecked": true,
          "lineups": [
            {
              "teamId": 532,
              "team": "Valencia",
              "formation": "4-4-2",
              "coach": "Óscar Sánchez",
              "starters": [
                "S. Dimitrievski",
                "Pablo Maffeo",
                "Pepelu",
                "J. de Haas",
                "José Gayà",
                "F. Ugrinic",
                "Aaron Mayol",
                "G. Rodríguez",
                "A. Danjuma",
                "Javi Guerra",
                "Hugo Duro"
              ]
            },
            {
              "teamId": 548,
              "team": "Real Sociedad",
              "formation": "4-4-2",
              "coach": "P. Matarazzo",
              "starters": [
                "Álex Remiro",
                "J. Aramburu",
                "Luken Beitia",
                "Jon Martín",
                "Sergio Gómez",
                "J. Ochieng",
                "Jon Gorrotxategi",
                "Carlos Soler",
                "Gonçalo Guedes",
                "L. Sučić",
                "Mikel Oyarzabal"
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
          "points": 13,
          "goalsDiff": 11,
          "form": "DWWWW",
          "all": {
            "played": 5,
            "wins": 4,
            "draws": 1,
            "losses": 0,
            "goalsFor": 14,
            "goalsAgainst": 3
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
            "played": 2,
            "wins": 2,
            "draws": 0,
            "losses": 0,
            "goalsFor": 6,
            "goalsAgainst": 0
          }
        },
        {
          "teamId": 505,
          "team": "Inter",
          "rank": 2,
          "points": 13,
          "goalsDiff": 7,
          "form": "DWWWW",
          "all": {
            "played": 5,
            "wins": 4,
            "draws": 1,
            "losses": 0,
            "goalsFor": 15,
            "goalsAgainst": 8
          },
          "home": {
            "played": 3,
            "wins": 3,
            "draws": 0,
            "losses": 0,
            "goalsFor": 12,
            "goalsAgainst": 6
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
          "teamId": 487,
          "team": "Lazio",
          "rank": 3,
          "points": 13,
          "goalsDiff": 5,
          "form": "WDWWW",
          "all": {
            "played": 5,
            "wins": 4,
            "draws": 1,
            "losses": 0,
            "goalsFor": 8,
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
            "played": 3,
            "wins": 3,
            "draws": 0,
            "losses": 0,
            "goalsFor": 5,
            "goalsAgainst": 1
          }
        },
        {
          "teamId": 490,
          "team": "Cagliari",
          "rank": 4,
          "points": 12,
          "goalsDiff": 3,
          "form": "WWWLW",
          "all": {
            "played": 5,
            "wins": 4,
            "draws": 0,
            "losses": 1,
            "goalsFor": 5,
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
            "played": 3,
            "wins": 3,
            "draws": 0,
            "losses": 0,
            "goalsFor": 4,
            "goalsAgainst": 1
          }
        },
        {
          "teamId": 512,
          "team": "Frosinone",
          "rank": 5,
          "points": 10,
          "goalsDiff": 5,
          "form": "WDWWL",
          "all": {
            "played": 5,
            "wins": 3,
            "draws": 1,
            "losses": 1,
            "goalsFor": 9,
            "goalsAgainst": 4
          },
          "home": {
            "played": 3,
            "wins": 2,
            "draws": 0,
            "losses": 1,
            "goalsFor": 5,
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
          "rank": 6,
          "points": 10,
          "goalsDiff": 4,
          "form": "WLDWW",
          "all": {
            "played": 5,
            "wins": 3,
            "draws": 1,
            "losses": 1,
            "goalsFor": 8,
            "goalsAgainst": 4
          },
          "home": {
            "played": 3,
            "wins": 2,
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
            "goalsFor": 3,
            "goalsAgainst": 3
          }
        },
        {
          "teamId": 895,
          "team": "Como",
          "rank": 7,
          "points": 10,
          "goalsDiff": 3,
          "form": "LWWWD",
          "all": {
            "played": 5,
            "wins": 3,
            "draws": 1,
            "losses": 1,
            "goalsFor": 9,
            "goalsAgainst": 6
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
            "played": 4,
            "wins": 2,
            "draws": 1,
            "losses": 1,
            "goalsFor": 7,
            "goalsAgainst": 5
          }
        },
        {
          "teamId": 489,
          "team": "AC Milan",
          "rank": 8,
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
          "teamId": 492,
          "team": "Napoli",
          "rank": 9,
          "points": 7,
          "goalsDiff": 1,
          "form": "DWLLW",
          "all": {
            "played": 5,
            "wins": 2,
            "draws": 1,
            "losses": 2,
            "goalsFor": 7,
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
            "played": 3,
            "wins": 1,
            "draws": 1,
            "losses": 1,
            "goalsFor": 5,
            "goalsAgainst": 4
          }
        },
        {
          "teamId": 488,
          "team": "Sassuolo",
          "rank": 10,
          "points": 7,
          "goalsDiff": 0,
          "form": "LWDWL",
          "all": {
            "played": 5,
            "wins": 2,
            "draws": 1,
            "losses": 2,
            "goalsFor": 9,
            "goalsAgainst": 9
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
            "played": 3,
            "wins": 0,
            "draws": 1,
            "losses": 2,
            "goalsFor": 4,
            "goalsAgainst": 6
          }
        },
        {
          "teamId": 867,
          "team": "Lecce",
          "rank": 11,
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
          "teamId": 499,
          "team": "Atalanta",
          "rank": 12,
          "points": 6,
          "goalsDiff": -2,
          "form": "LLLWW",
          "all": {
            "played": 5,
            "wins": 2,
            "draws": 0,
            "losses": 3,
            "goalsFor": 5,
            "goalsAgainst": 7
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
            "played": 2,
            "wins": 0,
            "draws": 0,
            "losses": 2,
            "goalsFor": 1,
            "goalsAgainst": 4
          }
        },
        {
          "teamId": 494,
          "team": "Udinese",
          "rank": 13,
          "points": 4,
          "goalsDiff": -3,
          "form": "LLLWD",
          "all": {
            "played": 5,
            "wins": 1,
            "draws": 1,
            "losses": 3,
            "goalsFor": 8,
            "goalsAgainst": 11
          },
          "home": {
            "played": 3,
            "wins": 0,
            "draws": 1,
            "losses": 2,
            "goalsFor": 2,
            "goalsAgainst": 4
          },
          "away": {
            "played": 2,
            "wins": 1,
            "draws": 0,
            "losses": 1,
            "goalsFor": 6,
            "goalsAgainst": 7
          }
        },
        {
          "teamId": 503,
          "team": "Torino",
          "rank": 14,
          "points": 4,
          "goalsDiff": -3,
          "form": "DLWLL",
          "all": {
            "played": 5,
            "wins": 1,
            "draws": 1,
            "losses": 3,
            "goalsFor": 5,
            "goalsAgainst": 8
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
            "wins": 1,
            "draws": 1,
            "losses": 1,
            "goalsFor": 4,
            "goalsAgainst": 4
          }
        },
        {
          "teamId": 523,
          "team": "Parma",
          "rank": 15,
          "points": 4,
          "goalsDiff": -3,
          "form": "WLDLL",
          "all": {
            "played": 5,
            "wins": 1,
            "draws": 1,
            "losses": 3,
            "goalsFor": 4,
            "goalsAgainst": 7
          },
          "home": {
            "played": 3,
            "wins": 1,
            "draws": 1,
            "losses": 1,
            "goalsFor": 3,
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
          "teamId": 1579,
          "team": "Monza",
          "rank": 16,
          "points": 4,
          "goalsDiff": -4,
          "form": "WLDLL",
          "all": {
            "played": 5,
            "wins": 1,
            "draws": 1,
            "losses": 3,
            "goalsFor": 8,
            "goalsAgainst": 12
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
            "played": 3,
            "wins": 0,
            "draws": 1,
            "losses": 2,
            "goalsFor": 4,
            "goalsAgainst": 8
          }
        },
        {
          "teamId": 502,
          "team": "Fiorentina",
          "rank": 17,
          "points": 4,
          "goalsDiff": -6,
          "form": "DWLLL",
          "all": {
            "played": 5,
            "wins": 1,
            "draws": 1,
            "losses": 3,
            "goalsFor": 6,
            "goalsAgainst": 12
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
          "rank": 18,
          "points": 2,
          "goalsDiff": -3,
          "form": "DLDLL",
          "all": {
            "played": 5,
            "wins": 0,
            "draws": 2,
            "losses": 3,
            "goalsFor": 3,
            "goalsAgainst": 6
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
            "played": 2,
            "wins": 0,
            "draws": 0,
            "losses": 2,
            "goalsFor": 0,
            "goalsAgainst": 2
          }
        },
        {
          "teamId": 495,
          "team": "Genoa",
          "rank": 19,
          "points": 1,
          "goalsDiff": -7,
          "form": "LDLLL",
          "all": {
            "played": 5,
            "wins": 0,
            "draws": 1,
            "losses": 4,
            "goalsFor": 3,
            "goalsAgainst": 10
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
            "played": 2,
            "wins": 0,
            "draws": 0,
            "losses": 2,
            "goalsFor": 1,
            "goalsAgainst": 3
          }
        },
        {
          "teamId": 517,
          "team": "Venezia",
          "rank": 20,
          "points": 0,
          "goalsDiff": -9,
          "form": "LLLLL",
          "all": {
            "played": 5,
            "wins": 0,
            "draws": 0,
            "losses": 5,
            "goalsFor": 4,
            "goalsAgainst": 13
          },
          "home": {
            "played": 3,
            "wins": 0,
            "draws": 0,
            "losses": 3,
            "goalsFor": 2,
            "goalsAgainst": 8
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
          "teamId": 496,
          "team": "Juventus",
          "form": "WWDLW",
          "all": {
            "played": 5,
            "wins": 3,
            "draws": 1,
            "losses": 1,
            "goalsFor": 8,
            "goalsAgainst": 4
          },
          "home": {
            "played": 3,
            "wins": 2,
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
            "goalsFor": 3,
            "goalsAgainst": 3
          }
        },
        {
          "teamId": 499,
          "team": "Atalanta",
          "form": "WWLLL",
          "all": {
            "played": 5,
            "wins": 2,
            "draws": 0,
            "losses": 3,
            "goalsFor": 5,
            "goalsAgainst": 7
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
            "played": 2,
            "wins": 0,
            "draws": 0,
            "losses": 2,
            "goalsFor": 1,
            "goalsAgainst": 4
          }
        },
        {
          "teamId": 489,
          "team": "AC Milan",
          "form": "WWDDW",
          "all": {
            "played": 5,
            "wins": 3,
            "draws": 2,
            "losses": 0,
            "goalsFor": 10,
            "goalsAgainst": 4
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
            "played": 3,
            "wins": 1,
            "draws": 2,
            "losses": 0,
            "goalsFor": 5,
            "goalsAgainst": 4
          }
        },
        {
          "teamId": 867,
          "team": "Lecce",
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
            "wins": 1,
            "draws": 0,
            "losses": 1,
            "goalsFor": 3,
            "goalsAgainst": 6
          },
          "away": {
            "played": 3,
            "wins": 1,
            "draws": 0,
            "losses": 2,
            "goalsFor": 2,
            "goalsAgainst": 4
          }
        }
      ],
      "fixtures": [
        {
          "fixtureId": 1550132,
          "kickoff": "2026-09-21T01:00:00+09:00",
          "status": "FT",
          "homeTeamId": 496,
          "homeTeam": "Juventus",
          "awayTeamId": 499,
          "awayTeam": "Atalanta",
          "injuriesChecked": true,
          "injuries": [
            {
              "fixtureId": 1550132,
              "teamId": 496,
              "playerId": 30531,
              "player": "J. Boga",
              "type": "Missing Fixture",
              "reason": "Muscle Injury"
            },
            {
              "fixtureId": 1550132,
              "teamId": 496,
              "playerId": 125674,
              "player": "J. Cabal",
              "type": "Missing Fixture",
              "reason": "Thigh Injury"
            },
            {
              "fixtureId": 1550132,
              "teamId": 496,
              "playerId": 451504,
              "player": "J. Ekhator",
              "type": "Missing Fixture",
              "reason": "Muscle Injury"
            },
            {
              "fixtureId": 1550132,
              "teamId": 496,
              "playerId": 15573,
              "player": "K. Grabara",
              "type": "Missing Fixture",
              "reason": "Knee Injury"
            },
            {
              "fixtureId": 1550132,
              "teamId": 496,
              "playerId": 30533,
              "player": "M. Locatelli",
              "type": "Missing Fixture",
              "reason": "Knee Injury"
            },
            {
              "fixtureId": 1550132,
              "teamId": 496,
              "playerId": 333,
              "player": "A. Milik",
              "type": "Missing Fixture",
              "reason": "Inactive"
            },
            {
              "fixtureId": 1550132,
              "teamId": 496,
              "playerId": 116,
              "player": "K. Thuram",
              "type": "Missing Fixture",
              "reason": "Knee Injury"
            },
            {
              "fixtureId": 1550132,
              "teamId": 496,
              "playerId": 339883,
              "player": "K. Yildiz",
              "type": "Missing Fixture",
              "reason": "Foot Injury"
            },
            {
              "fixtureId": 1550132,
              "teamId": 499,
              "playerId": 137976,
              "player": "I. Hien",
              "type": "Missing Fixture",
              "reason": "Muscle Injury"
            },
            {
              "fixtureId": 1550132,
              "teamId": 499,
              "playerId": 48119,
              "player": "O. Kossounou",
              "type": "Missing Fixture",
              "reason": "Thigh Injury"
            },
            {
              "fixtureId": 1550132,
              "teamId": 499,
              "playerId": 199837,
              "player": "K. Sulemana",
              "type": "Missing Fixture",
              "reason": "Knee Injury"
            }
          ],
          "lineupsChecked": true,
          "lineups": [
            {
              "teamId": 496,
              "team": "Juventus",
              "formation": "3-4-2-1",
              "coach": "Luciano Spalletti",
              "starters": [
                "Guglielmo Vicario",
                "Pierre Kalulu",
                "Gleison Bremer",
                "Jhon Lucumí",
                "Nicolás González",
                "Weston McKennie",
                "Douglas Luiz",
                "Zeki Çelik",
                "Francisco Conceição",
                "Kerim Alajbegović",
                "Randal Kolo Muani"
              ]
            },
            {
              "teamId": 499,
              "team": "Atalanta",
              "formation": "4-3-3",
              "coach": "Maurizio Sarri",
              "starters": [
                "Marco Carnesecchi",
                "Raoul Bellanova",
                "Thomas Kristensen",
                "Giorgio Scalvini",
                "Lorenzo Bernasconi",
                "Lazar Samardžić",
                "Franck Kessié",
                "Éderson",
                "Charles De Ketelaere",
                "Nikola Krstović",
                "Jonathan Rowe"
              ]
            }
          ]
        },
        {
          "fixtureId": 1550127,
          "kickoff": "2026-09-21T03:45:00+09:00",
          "status": "FT",
          "homeTeamId": 489,
          "homeTeam": "AC Milan",
          "awayTeamId": 867,
          "awayTeam": "Lecce",
          "injuriesChecked": true,
          "injuries": [
            {
              "fixtureId": 1550127,
              "teamId": 867,
              "playerId": 335071,
              "player": "M. Berisha",
              "type": "Missing Fixture",
              "reason": "Lacking Match Fitness"
            },
            {
              "fixtureId": 1550127,
              "teamId": 867,
              "playerId": 126974,
              "player": "O. Gandelman",
              "type": "Missing Fixture",
              "reason": "Inactive"
            },
            {
              "fixtureId": 1550127,
              "teamId": 867,
              "playerId": 120,
              "player": "W. Geubbels",
              "type": "Missing Fixture",
              "reason": "Ankle Injury"
            }
          ],
          "lineupsChecked": true,
          "lineups": [
            {
              "teamId": 489,
              "team": "AC Milan",
              "formation": "3-4-2-1",
              "coach": "Ruben Amorim",
              "starters": [
                "Mike Maignan",
                "Mario Gila",
                "Koni De Winter",
                "Strahinja Pavlović",
                "Samuel Chukwueze",
                "Luka Modrić",
                "Adrien Rabiot",
                "Pervis Estupiñán",
                "Christian Pulišić",
                "Alexis Saelemaekers",
                "Gonçalo Ramos"
              ]
            },
            {
              "teamId": 867,
              "team": "Lecce",
              "formation": "4-3-3",
              "coach": "Eusebio Di Francesco",
              "starters": [
                "Wladimiro Falcone",
                "Danilo Veiga",
                "Kialonda Gaspar",
                "Jamil Siebert",
                "Antonino Gallo",
                "Santiago Pierotti",
                "Ivan Ilić",
                "Youssef Maleh",
                "Lassana Coulibaly",
                "Nikola Štulić",
                "Joël Monteiro"
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
          "teamId": 165,
          "team": "Borussia Dortmund",
          "rank": 1,
          "points": 12,
          "goalsDiff": 7,
          "form": "WWWW",
          "all": {
            "played": 4,
            "wins": 4,
            "draws": 0,
            "losses": 0,
            "goalsFor": 9,
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
            "played": 2,
            "wins": 2,
            "draws": 0,
            "losses": 0,
            "goalsFor": 4,
            "goalsAgainst": 2
          }
        },
        {
          "teamId": 157,
          "team": "Bayern München",
          "rank": 2,
          "points": 10,
          "goalsDiff": 12,
          "form": "WWDW",
          "all": {
            "played": 4,
            "wins": 3,
            "draws": 1,
            "losses": 0,
            "goalsFor": 14,
            "goalsAgainst": 2
          },
          "home": {
            "played": 2,
            "wins": 2,
            "draws": 0,
            "losses": 0,
            "goalsFor": 12,
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
          "teamId": 160,
          "team": "SC Freiburg",
          "rank": 3,
          "points": 10,
          "goalsDiff": 9,
          "form": "DWWW",
          "all": {
            "played": 4,
            "wins": 3,
            "draws": 1,
            "losses": 0,
            "goalsFor": 12,
            "goalsAgainst": 3
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
            "played": 2,
            "wins": 1,
            "draws": 1,
            "losses": 0,
            "goalsFor": 3,
            "goalsAgainst": 2
          }
        },
        {
          "teamId": 170,
          "team": "FC Augsburg",
          "rank": 4,
          "points": 7,
          "goalsDiff": 5,
          "form": "LDWW",
          "all": {
            "played": 4,
            "wins": 2,
            "draws": 1,
            "losses": 1,
            "goalsFor": 11,
            "goalsAgainst": 6
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
            "played": 2,
            "wins": 1,
            "draws": 0,
            "losses": 1,
            "goalsFor": 6,
            "goalsAgainst": 4
          }
        },
        {
          "teamId": 168,
          "team": "Bayer Leverkusen",
          "rank": 5,
          "points": 7,
          "goalsDiff": 5,
          "form": "WDWL",
          "all": {
            "played": 4,
            "wins": 2,
            "draws": 1,
            "losses": 1,
            "goalsFor": 10,
            "goalsAgainst": 5
          },
          "home": {
            "played": 2,
            "wins": 2,
            "draws": 0,
            "losses": 0,
            "goalsFor": 6,
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
          "rank": 6,
          "points": 7,
          "goalsDiff": 4,
          "form": "WLWD",
          "all": {
            "played": 4,
            "wins": 2,
            "draws": 1,
            "losses": 1,
            "goalsFor": 10,
            "goalsAgainst": 6
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
            "wins": 2,
            "draws": 0,
            "losses": 0,
            "goalsFor": 9,
            "goalsAgainst": 3
          }
        },
        {
          "teamId": 1660,
          "team": "SV Elversberg",
          "rank": 7,
          "points": 7,
          "goalsDiff": 1,
          "form": "DLWW",
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
            "goalsFor": 4,
            "goalsAgainst": 4
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
          "teamId": 162,
          "team": "Werder Bremen",
          "rank": 8,
          "points": 7,
          "goalsDiff": 0,
          "form": "WDWL",
          "all": {
            "played": 4,
            "wins": 2,
            "draws": 1,
            "losses": 1,
            "goalsFor": 8,
            "goalsAgainst": 8
          },
          "home": {
            "played": 2,
            "wins": 2,
            "draws": 0,
            "losses": 0,
            "goalsFor": 6,
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
          "teamId": 173,
          "team": "RB Leipzig",
          "rank": 9,
          "points": 6,
          "goalsDiff": 4,
          "form": "LWLW",
          "all": {
            "played": 4,
            "wins": 2,
            "draws": 0,
            "losses": 2,
            "goalsFor": 9,
            "goalsAgainst": 5
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
            "wins": 0,
            "draws": 0,
            "losses": 2,
            "goalsFor": 1,
            "goalsAgainst": 5
          }
        },
        {
          "teamId": 169,
          "team": "Eintracht Frankfurt",
          "rank": 10,
          "points": 5,
          "goalsDiff": -1,
          "form": "DWLD",
          "all": {
            "played": 4,
            "wins": 1,
            "draws": 2,
            "losses": 1,
            "goalsFor": 9,
            "goalsAgainst": 10
          },
          "home": {
            "played": 2,
            "wins": 0,
            "draws": 1,
            "losses": 1,
            "goalsFor": 3,
            "goalsAgainst": 6
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
          "teamId": 174,
          "team": "FC Schalke 04",
          "rank": 11,
          "points": 5,
          "goalsDiff": -1,
          "form": "DWDL",
          "all": {
            "played": 4,
            "wins": 1,
            "draws": 2,
            "losses": 1,
            "goalsFor": 3,
            "goalsAgainst": 4
          },
          "home": {
            "played": 2,
            "wins": 0,
            "draws": 2,
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
          "teamId": 185,
          "team": "SC Paderborn 07",
          "rank": 12,
          "points": 4,
          "goalsDiff": -2,
          "form": "WLLD",
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
            "goalsFor": 3,
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
          "teamId": 192,
          "team": "1. FC Köln",
          "rank": 13,
          "points": 4,
          "goalsDiff": -3,
          "form": "LDLW",
          "all": {
            "played": 4,
            "wins": 1,
            "draws": 1,
            "losses": 2,
            "goalsFor": 6,
            "goalsAgainst": 9
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
            "goalsFor": 2,
            "goalsAgainst": 6
          }
        },
        {
          "teamId": 167,
          "team": "1899 Hoffenheim",
          "rank": 14,
          "points": 3,
          "goalsDiff": -3,
          "form": "LWLL",
          "all": {
            "played": 4,
            "wins": 1,
            "draws": 0,
            "losses": 3,
            "goalsFor": 7,
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
            "wins": 0,
            "draws": 0,
            "losses": 2,
            "goalsFor": 3,
            "goalsAgainst": 6
          }
        },
        {
          "teamId": 172,
          "team": "VfB Stuttgart",
          "rank": 15,
          "points": 3,
          "goalsDiff": -3,
          "form": "LLWL",
          "all": {
            "played": 4,
            "wins": 1,
            "draws": 0,
            "losses": 3,
            "goalsFor": 6,
            "goalsAgainst": 9
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
            "played": 2,
            "wins": 0,
            "draws": 0,
            "losses": 2,
            "goalsFor": 2,
            "goalsAgainst": 7
          }
        },
        {
          "teamId": 175,
          "team": "Hamburger SV",
          "rank": 16,
          "points": 3,
          "goalsDiff": -11,
          "form": "WLLL",
          "all": {
            "played": 4,
            "wins": 1,
            "draws": 0,
            "losses": 3,
            "goalsFor": 2,
            "goalsAgainst": 13
          },
          "home": {
            "played": 2,
            "wins": 1,
            "draws": 0,
            "losses": 1,
            "goalsFor": 2,
            "goalsAgainst": 6
          },
          "away": {
            "played": 2,
            "wins": 0,
            "draws": 0,
            "losses": 2,
            "goalsFor": 0,
            "goalsAgainst": 7
          }
        },
        {
          "teamId": 182,
          "team": "Union Berlin",
          "rank": 17,
          "points": 1,
          "goalsDiff": -13,
          "form": "LLLD",
          "all": {
            "played": 4,
            "wins": 0,
            "draws": 1,
            "losses": 3,
            "goalsFor": 4,
            "goalsAgainst": 17
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
            "played": 2,
            "wins": 0,
            "draws": 0,
            "losses": 2,
            "goalsFor": 0,
            "goalsAgainst": 11
          }
        },
        {
          "teamId": 163,
          "team": "Borussia Mönchengladbach",
          "rank": 18,
          "points": 0,
          "goalsDiff": -10,
          "form": "LLLL",
          "all": {
            "played": 4,
            "wins": 0,
            "draws": 0,
            "losses": 4,
            "goalsFor": 6,
            "goalsAgainst": 16
          },
          "home": {
            "played": 2,
            "wins": 0,
            "draws": 0,
            "losses": 2,
            "goalsFor": 6,
            "goalsAgainst": 8
          },
          "away": {
            "played": 2,
            "wins": 0,
            "draws": 0,
            "losses": 2,
            "goalsFor": 0,
            "goalsAgainst": 8
          }
        }
      ],
      "teams": [
        {
          "teamId": 174,
          "team": "FC Schalke 04",
          "form": "LDWD",
          "all": {
            "played": 4,
            "wins": 1,
            "draws": 2,
            "losses": 1,
            "goalsFor": 3,
            "goalsAgainst": 4
          },
          "home": {
            "played": 2,
            "wins": 0,
            "draws": 2,
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
          "teamId": 1660,
          "team": "SV Elversberg",
          "form": "WWLD",
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
            "goalsFor": 4,
            "goalsAgainst": 4
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
          "teamId": 185,
          "team": "SC Paderborn 07",
          "form": "DLLW",
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
            "goalsFor": 3,
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
          "teamId": 167,
          "team": "1899 Hoffenheim",
          "form": "LLWL",
          "all": {
            "played": 4,
            "wins": 1,
            "draws": 0,
            "losses": 3,
            "goalsFor": 7,
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
            "wins": 0,
            "draws": 0,
            "losses": 2,
            "goalsFor": 3,
            "goalsAgainst": 6
          }
        }
      ],
      "fixtures": [
        {
          "fixtureId": 1575173,
          "kickoff": "2026-09-21T00:30:00+09:00",
          "status": "FT",
          "homeTeamId": 174,
          "homeTeam": "FC Schalke 04",
          "awayTeamId": 1660,
          "awayTeam": "SV Elversberg",
          "injuriesChecked": true,
          "injuries": [
            {
              "fixtureId": 1575173,
              "teamId": 174,
              "playerId": 1725,
              "player": "D. Ljubicic",
              "type": "Missing Fixture",
              "reason": "Knee Injury"
            },
            {
              "fixtureId": 1575173,
              "teamId": 1660,
              "playerId": 583807,
              "player": "L. Seifert",
              "type": "Missing Fixture",
              "reason": "Ankle Injury"
            },
            {
              "fixtureId": 1575173,
              "teamId": 1660,
              "playerId": 392254,
              "player": "F. Onyeka",
              "type": "Questionable",
              "reason": "Injury"
            },
            {
              "fixtureId": 1575173,
              "teamId": 1660,
              "playerId": 26642,
              "player": "L. Schnellbacher",
              "type": "Questionable",
              "reason": "Illness"
            },
            {
              "fixtureId": 1575173,
              "teamId": 1660,
              "playerId": 177362,
              "player": "T. Zimmerschied",
              "type": "Questionable",
              "reason": "Back Injury"
            }
          ],
          "lineupsChecked": true,
          "lineups": [
            {
              "teamId": 174,
              "team": "FC Schalke 04",
              "formation": "3-4-2-1",
              "coach": "M. Muslić",
              "starters": [
                "L. Karius",
                "T. Becker",
                "N. Katić",
                "H. Kuruçay",
                "J. Dina Ebimbe",
                "S. El-Faouzi",
                "S. Tanaka",
                "R. Gosens",
                "K. Karaman",
                "A. Aouchiche",
                "E. Džeko"
              ]
            },
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
                "Noah Darvich",
                "William Cole Campbell",
                "D. Mokwa"
              ]
            }
          ]
        },
        {
          "fixtureId": 1575175,
          "kickoff": "2026-09-21T02:30:00+09:00",
          "status": "FT",
          "homeTeamId": 185,
          "homeTeam": "SC Paderborn 07",
          "awayTeamId": 167,
          "awayTeam": "1899 Hoffenheim",
          "injuriesChecked": true,
          "injuries": [
            {
              "fixtureId": 1575175,
              "teamId": 185,
              "playerId": 373443,
              "player": "N. Awortwie-Grant",
              "type": "Missing Fixture",
              "reason": "Knee Injury"
            },
            {
              "fixtureId": 1575175,
              "teamId": 185,
              "playerId": 606733,
              "player": "L. Eickel",
              "type": "Missing Fixture",
              "reason": "Back Injury"
            },
            {
              "fixtureId": 1575175,
              "teamId": 185,
              "playerId": 108640,
              "player": "T. Gayret",
              "type": "Missing Fixture",
              "reason": "Knee Injury"
            },
            {
              "fixtureId": 1575175,
              "teamId": 185,
              "playerId": 24826,
              "player": "S. Michel",
              "type": "Missing Fixture",
              "reason": "Muscle Injury"
            },
            {
              "fixtureId": 1575175,
              "teamId": 167,
              "playerId": 18964,
              "player": "Bernardo",
              "type": "Missing Fixture",
              "reason": "Achilles Tendon Injury"
            }
          ],
          "lineupsChecked": true,
          "lineups": [
            {
              "teamId": 185,
              "team": "SC Paderborn 07",
              "formation": "3-5-2",
              "coach": "R. Kettemann",
              "starters": [
                "N. Noll",
                "J. ter Horst",
                "T. Scheller",
                "M. Hansen",
                "L. Curda",
                "L. Ulrich",
                "S. Castañeda",
                "G. Vidović",
                "R. Obermair",
                "M. Pieringer",
                "S. Marino"
              ]
            },
            {
              "teamId": 167,
              "team": "1899 Hoffenheim",
              "formation": "4-4-2",
              "coach": "C. Ilzer",
              "starters": [
                "O. Baumann",
                "V. Coufal",
                "O. Kabak",
                "K. Machida",
                "M. Rots",
                "B. Conté",
                "L. Avdullahu",
                "W. Burger",
                "A. Daghim",
                "A. Hložek",
                "Max Moerstedt"
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
          "points": 13,
          "goalsDiff": 5,
          "form": "WDWWW",
          "all": {
            "played": 5,
            "wins": 4,
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
          "teamId": 80,
          "team": "Lyon",
          "rank": 2,
          "points": 11,
          "goalsDiff": 8,
          "form": "WDWDW",
          "all": {
            "played": 5,
            "wins": 3,
            "draws": 2,
            "losses": 0,
            "goalsFor": 10,
            "goalsAgainst": 2
          },
          "home": {
            "played": 3,
            "wins": 2,
            "draws": 1,
            "losses": 0,
            "goalsFor": 8,
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
          "rank": 3,
          "points": 11,
          "goalsDiff": 5,
          "form": "WDWWD",
          "all": {
            "played": 5,
            "wins": 3,
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
            "goalsFor": 5,
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
          "teamId": 79,
          "team": "Lille",
          "rank": 4,
          "points": 10,
          "goalsDiff": 4,
          "form": "LWWDW",
          "all": {
            "played": 5,
            "wins": 3,
            "draws": 1,
            "losses": 1,
            "goalsFor": 8,
            "goalsAgainst": 4
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
            "goalsFor": 4,
            "goalsAgainst": 2
          }
        },
        {
          "teamId": 94,
          "team": "Rennes",
          "rank": 5,
          "points": 10,
          "goalsDiff": -1,
          "form": "LWWWD",
          "all": {
            "played": 5,
            "wins": 3,
            "draws": 1,
            "losses": 1,
            "goalsFor": 8,
            "goalsAgainst": 9
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
            "wins": 1,
            "draws": 0,
            "losses": 1,
            "goalsFor": 2,
            "goalsAgainst": 5
          }
        },
        {
          "teamId": 77,
          "team": "Angers",
          "rank": 6,
          "points": 7,
          "goalsDiff": 1,
          "form": "WDLWL",
          "all": {
            "played": 5,
            "wins": 2,
            "draws": 1,
            "losses": 2,
            "goalsFor": 6,
            "goalsAgainst": 5
          },
          "home": {
            "played": 3,
            "wins": 1,
            "draws": 0,
            "losses": 2,
            "goalsFor": 3,
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
          "teamId": 95,
          "team": "Strasbourg",
          "rank": 7,
          "points": 7,
          "goalsDiff": 0,
          "form": "LDWWL",
          "all": {
            "played": 5,
            "wins": 2,
            "draws": 1,
            "losses": 2,
            "goalsFor": 10,
            "goalsAgainst": 10
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
            "draws": 0,
            "losses": 2,
            "goalsFor": 7,
            "goalsAgainst": 8
          }
        },
        {
          "teamId": 1298,
          "team": "Le Mans",
          "rank": 8,
          "points": 6,
          "goalsDiff": 0,
          "form": "WDDLD",
          "all": {
            "played": 5,
            "wins": 1,
            "draws": 3,
            "losses": 1,
            "goalsFor": 9,
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
          "rank": 9,
          "points": 6,
          "goalsDiff": -5,
          "form": "WWLLL",
          "all": {
            "played": 5,
            "wins": 2,
            "draws": 0,
            "losses": 3,
            "goalsFor": 7,
            "goalsAgainst": 12
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
            "wins": 0,
            "draws": 0,
            "losses": 2,
            "goalsFor": 3,
            "goalsAgainst": 8
          }
        },
        {
          "teamId": 85,
          "team": "Paris Saint Germain",
          "rank": 10,
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
          "teamId": 106,
          "team": "Stade Brestois 29",
          "rank": 11,
          "points": 5,
          "goalsDiff": -1,
          "form": "LLWDD",
          "all": {
            "played": 5,
            "wins": 1,
            "draws": 2,
            "losses": 2,
            "goalsFor": 7,
            "goalsAgainst": 8
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
            "draws": 1,
            "losses": 1,
            "goalsFor": 5,
            "goalsAgainst": 5
          }
        },
        {
          "teamId": 97,
          "team": "Lorient",
          "rank": 12,
          "points": 5,
          "goalsDiff": -1,
          "form": "LDWLD",
          "all": {
            "played": 5,
            "wins": 1,
            "draws": 2,
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
            "goalsAgainst": 4
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
          "teamId": 96,
          "team": "Toulouse",
          "rank": 13,
          "points": 5,
          "goalsDiff": -2,
          "form": "WDLDL",
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
          "teamId": 84,
          "team": "Nice",
          "rank": 14,
          "points": 5,
          "goalsDiff": -3,
          "form": "WLDLD",
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
          "teamId": 116,
          "team": "Lens",
          "rank": 15,
          "points": 4,
          "goalsDiff": 0,
          "form": "LDLLW",
          "all": {
            "played": 5,
            "wins": 1,
            "draws": 1,
            "losses": 3,
            "goalsFor": 9,
            "goalsAgainst": 9
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
            "wins": 0,
            "draws": 1,
            "losses": 2,
            "goalsFor": 4,
            "goalsAgainst": 6
          }
        },
        {
          "teamId": 110,
          "team": "Estac Troyes",
          "rank": 16,
          "points": 4,
          "goalsDiff": -7,
          "form": "LLLWD",
          "all": {
            "played": 5,
            "wins": 1,
            "draws": 1,
            "losses": 3,
            "goalsFor": 4,
            "goalsAgainst": 11
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
            "goalsAgainst": 5
          }
        },
        {
          "teamId": 81,
          "team": "Marseille",
          "rank": 17,
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
          "teamId": 111,
          "team": "Le Havre",
          "rank": 18,
          "points": 2,
          "goalsDiff": -3,
          "form": "LDLDL",
          "all": {
            "played": 5,
            "wins": 0,
            "draws": 2,
            "losses": 3,
            "goalsFor": 4,
            "goalsAgainst": 7
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
          "teamId": 84,
          "team": "Nice",
          "form": "DLDLW",
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
          "teamId": 79,
          "team": "Lille",
          "form": "WDWWL",
          "all": {
            "played": 5,
            "wins": 3,
            "draws": 1,
            "losses": 1,
            "goalsFor": 8,
            "goalsAgainst": 4
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
            "goalsFor": 4,
            "goalsAgainst": 2
          }
        },
        {
          "teamId": 81,
          "team": "Marseille",
          "form": "WLLLL",
          "all": {
            "played": 5,
            "wins": 1,
            "draws": 0,
            "losses": 4,
            "goalsFor": 7,
            "goalsAgainst": 8
          },
          "home": {
            "played": 3,
            "wins": 1,
            "draws": 0,
            "losses": 2,
            "goalsFor": 7,
            "goalsAgainst": 5
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
          "teamId": 85,
          "team": "Paris Saint Germain",
          "form": "DDLWW",
          "all": {
            "played": 5,
            "wins": 2,
            "draws": 2,
            "losses": 1,
            "goalsFor": 8,
            "goalsAgainst": 7
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
            "played": 4,
            "wins": 2,
            "draws": 2,
            "losses": 0,
            "goalsFor": 7,
            "goalsAgainst": 5
          }
        }
      ],
      "fixtures": [
        {
          "fixtureId": 1552770,
          "kickoff": "2026-09-21T00:15:00+09:00",
          "status": "FT",
          "homeTeamId": 84,
          "homeTeam": "Nice",
          "awayTeamId": 79,
          "awayTeam": "Lille",
          "injuriesChecked": true,
          "injuries": [
            {
              "fixtureId": 1552770,
              "teamId": 84,
              "playerId": 20917,
              "player": "L. Abergel",
              "type": "Missing Fixture",
              "reason": "Knee Injury"
            },
            {
              "fixtureId": 1552770,
              "teamId": 84,
              "playerId": 407017,
              "player": "M. Bombito",
              "type": "Missing Fixture",
              "reason": "Leg Injury"
            },
            {
              "fixtureId": 1552770,
              "teamId": 84,
              "playerId": 313937,
              "player": "A. Mendy",
              "type": "Missing Fixture",
              "reason": "Knee Injury"
            },
            {
              "fixtureId": 1552770,
              "teamId": 84,
              "playerId": 1914,
              "player": "M. Sanson",
              "type": "Missing Fixture",
              "reason": "Surgery"
            },
            {
              "fixtureId": 1552770,
              "teamId": 79,
              "playerId": 306979,
              "player": "H. Igamane",
              "type": "Missing Fixture",
              "reason": "Knee Injury"
            },
            {
              "fixtureId": 1552770,
              "teamId": 79,
              "playerId": 133110,
              "player": "T. Nianzou",
              "type": "Missing Fixture",
              "reason": "Knock"
            }
          ],
          "lineupsChecked": true,
          "lineups": [
            {
              "teamId": 84,
              "team": "Nice",
              "formation": "3-4-2-1",
              "coach": "O. Pantaloni",
              "starters": [
                "Y. Diouf",
                "Mohamed Abdelmonem",
                "Y. Ndayishimiye",
                "X. Mandza Tsiendi",
                "J. Clauss",
                "D. Coulibaly",
                "A. Witsel",
                "N. Nkounkou",
                "G. Hein",
                "M. Amoura",
                "E. Wahi"
              ]
            },
            {
              "teamId": 79,
              "team": "Lille",
              "formation": "4-2-3-1",
              "coach": "Davide Ancelotti",
              "starters": [
                "B. Özer",
                "Tiago Santos",
                "N. Ngoy",
                "Alexsandro Ribeiro",
                "R. Perraud",
                "B. André",
                "N. Bentaleb",
                "E. Mbappé",
                "H. Haraldsson",
                "B. Önal",
                "A. Ueda"
              ]
            }
          ]
        },
        {
          "fixtureId": 1552773,
          "kickoff": "2026-09-21T03:45:00+09:00",
          "status": "FT",
          "homeTeamId": 81,
          "homeTeam": "Marseille",
          "awayTeamId": 85,
          "awayTeam": "Paris Saint Germain",
          "injuriesChecked": true,
          "injuries": [
            {
              "fixtureId": 1552773,
              "teamId": 81,
              "playerId": 926,
              "player": "G. Kondogbia",
              "type": "Missing Fixture",
              "reason": "Injury"
            },
            {
              "fixtureId": 1552773,
              "teamId": 81,
              "playerId": 354298,
              "player": "T. Nnadi",
              "type": "Missing Fixture",
              "reason": "Injury"
            },
            {
              "fixtureId": 1552773,
              "teamId": 85,
              "playerId": 9,
              "player": "A. Hakimi",
              "type": "Missing Fixture",
              "reason": "Thigh Injury"
            }
          ],
          "lineupsChecked": true,
          "lineups": [
            {
              "teamId": 81,
              "team": "Marseille",
              "formation": "4-4-2",
              "coach": "Bruno Genesio",
              "starters": [
                "J. de Lange",
                "T. Weah",
                "C. Egan-Riley",
                "N. Aguerd",
                "Emerson",
                "A. Harit",
                "P. Højbjerg",
                "H. Abdelli",
                "Igor Paixão",
                "N. Maupay",
                "A. Gouiri"
              ]
            },
            {
              "teamId": 85,
              "team": "Paris Saint Germain",
              "formation": "4-3-3",
              "coach": "Luis Enrique",
              "starters": [
                "M. Safonov",
                "W. Zaïre-Emery",
                "Marquinhos",
                "W. Pacho",
                "Nuno Mendes",
                "João Neves",
                "Vitinha",
                "Fabián Ruiz",
                "D. Doué",
                "O. Dembélé",
                "K. Kvaratskhelia"
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
          "points": 15,
          "goalsDiff": 9,
          "form": "DDWWW",
          "all": {
            "played": 7,
            "wins": 4,
            "draws": 3,
            "losses": 0,
            "goalsFor": 17,
            "goalsAgainst": 8
          },
          "home": {
            "played": 4,
            "wins": 3,
            "draws": 1,
            "losses": 0,
            "goalsFor": 10,
            "goalsAgainst": 5
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
          "points": 15,
          "goalsDiff": 7,
          "form": "DWWDW",
          "all": {
            "played": 7,
            "wins": 4,
            "draws": 3,
            "losses": 0,
            "goalsFor": 11,
            "goalsAgainst": 4
          },
          "home": {
            "played": 4,
            "wins": 2,
            "draws": 2,
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
          "points": 11,
          "goalsDiff": 3,
          "form": "DLDWL",
          "all": {
            "played": 7,
            "wins": 3,
            "draws": 2,
            "losses": 2,
            "goalsFor": 10,
            "goalsAgainst": 7
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
            "played": 4,
            "wins": 1,
            "draws": 2,
            "losses": 1,
            "goalsFor": 3,
            "goalsAgainst": 4
          }
        },
        {
          "teamId": 217,
          "team": "SC Braga",
          "rank": 6,
          "points": 11,
          "goalsDiff": 2,
          "form": "DWLWW",
          "all": {
            "played": 6,
            "wins": 3,
            "draws": 2,
            "losses": 1,
            "goalsFor": 7,
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
            "played": 4,
            "wins": 1,
            "draws": 2,
            "losses": 1,
            "goalsFor": 5,
            "goalsAgainst": 5
          }
        },
        {
          "teamId": 238,
          "team": "Academico Viseu",
          "rank": 7,
          "points": 11,
          "goalsDiff": 0,
          "form": "WWWLD",
          "all": {
            "played": 7,
            "wins": 3,
            "draws": 2,
            "losses": 2,
            "goalsFor": 9,
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
            "played": 4,
            "wins": 2,
            "draws": 2,
            "losses": 0,
            "goalsFor": 7,
            "goalsAgainst": 4
          }
        },
        {
          "teamId": 15130,
          "team": "Estrela",
          "rank": 8,
          "points": 10,
          "goalsDiff": 0,
          "form": "LDWDW",
          "all": {
            "played": 7,
            "wins": 2,
            "draws": 4,
            "losses": 1,
            "goalsFor": 14,
            "goalsAgainst": 14
          },
          "home": {
            "played": 4,
            "wins": 1,
            "draws": 2,
            "losses": 1,
            "goalsFor": 6,
            "goalsAgainst": 7
          },
          "away": {
            "played": 3,
            "wins": 1,
            "draws": 2,
            "losses": 0,
            "goalsFor": 8,
            "goalsAgainst": 7
          }
        },
        {
          "teamId": 762,
          "team": "GIL Vicente",
          "rank": 9,
          "points": 8,
          "goalsDiff": 0,
          "form": "DLLDW",
          "all": {
            "played": 6,
            "wins": 2,
            "draws": 2,
            "losses": 2,
            "goalsFor": 5,
            "goalsAgainst": 5
          },
          "home": {
            "played": 4,
            "wins": 2,
            "draws": 1,
            "losses": 1,
            "goalsFor": 4,
            "goalsAgainst": 2
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
          "teamId": 4724,
          "team": "Alverca",
          "rank": 10,
          "points": 8,
          "goalsDiff": -2,
          "form": "WWLDL",
          "all": {
            "played": 7,
            "wins": 2,
            "draws": 2,
            "losses": 3,
            "goalsFor": 9,
            "goalsAgainst": 11
          },
          "home": {
            "played": 4,
            "wins": 1,
            "draws": 2,
            "losses": 1,
            "goalsFor": 5,
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
          "teamId": 214,
          "team": "Maritimo",
          "rank": 11,
          "points": 8,
          "goalsDiff": -4,
          "form": "DLLLD",
          "all": {
            "played": 7,
            "wins": 2,
            "draws": 2,
            "losses": 3,
            "goalsFor": 8,
            "goalsAgainst": 12
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
            "played": 4,
            "wins": 1,
            "draws": 1,
            "losses": 2,
            "goalsFor": 5,
            "goalsAgainst": 7
          }
        },
        {
          "teamId": 215,
          "team": "Moreirense",
          "rank": 12,
          "points": 8,
          "goalsDiff": -6,
          "form": "DWLLW",
          "all": {
            "played": 7,
            "wins": 2,
            "draws": 2,
            "losses": 3,
            "goalsFor": 8,
            "goalsAgainst": 14
          },
          "home": {
            "played": 3,
            "wins": 1,
            "draws": 1,
            "losses": 1,
            "goalsFor": 5,
            "goalsAgainst": 7
          },
          "away": {
            "played": 4,
            "wins": 1,
            "draws": 1,
            "losses": 2,
            "goalsFor": 3,
            "goalsAgainst": 7
          }
        },
        {
          "teamId": 242,
          "team": "Famalicao",
          "rank": 13,
          "points": 7,
          "goalsDiff": 2,
          "form": "WDDDL",
          "all": {
            "played": 7,
            "wins": 1,
            "draws": 4,
            "losses": 2,
            "goalsFor": 9,
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
            "played": 4,
            "wins": 1,
            "draws": 2,
            "losses": 1,
            "goalsFor": 7,
            "goalsAgainst": 4
          }
        },
        {
          "teamId": 224,
          "team": "Vitória SC",
          "rank": 14,
          "points": 5,
          "goalsDiff": -3,
          "form": "DLDLW",
          "all": {
            "played": 7,
            "wins": 1,
            "draws": 2,
            "losses": 4,
            "goalsFor": 5,
            "goalsAgainst": 8
          },
          "home": {
            "played": 4,
            "wins": 1,
            "draws": 2,
            "losses": 1,
            "goalsFor": 2,
            "goalsAgainst": 2
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
          "rank": 15,
          "points": 4,
          "goalsDiff": -8,
          "form": "LLLLL",
          "all": {
            "played": 7,
            "wins": 1,
            "draws": 1,
            "losses": 5,
            "goalsFor": 7,
            "goalsAgainst": 15
          },
          "home": {
            "played": 4,
            "wins": 1,
            "draws": 0,
            "losses": 3,
            "goalsFor": 5,
            "goalsAgainst": 10
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
          "teamId": 226,
          "team": "Rio Ave",
          "rank": 16,
          "points": 4,
          "goalsDiff": -10,
          "form": "LDLLW",
          "all": {
            "played": 7,
            "wins": 1,
            "draws": 1,
            "losses": 5,
            "goalsFor": 5,
            "goalsAgainst": 15
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
            "played": 4,
            "wins": 1,
            "draws": 0,
            "losses": 3,
            "goalsFor": 2,
            "goalsAgainst": 6
          }
        },
        {
          "teamId": 4716,
          "team": "Casa Pia",
          "rank": 17,
          "points": 4,
          "goalsDiff": -13,
          "form": "WLDLL",
          "all": {
            "played": 7,
            "wins": 1,
            "draws": 1,
            "losses": 5,
            "goalsFor": 3,
            "goalsAgainst": 16
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
            "played": 4,
            "wins": 1,
            "draws": 1,
            "losses": 2,
            "goalsFor": 2,
            "goalsAgainst": 4
          }
        },
        {
          "teamId": 230,
          "team": "Estoril",
          "rank": 18,
          "points": 2,
          "goalsDiff": -7,
          "form": "LLDLL",
          "all": {
            "played": 7,
            "wins": 0,
            "draws": 2,
            "losses": 5,
            "goalsFor": 3,
            "goalsAgainst": 10
          },
          "home": {
            "played": 4,
            "wins": 0,
            "draws": 2,
            "losses": 2,
            "goalsFor": 2,
            "goalsAgainst": 5
          },
          "away": {
            "played": 3,
            "wins": 0,
            "draws": 0,
            "losses": 3,
            "goalsFor": 1,
            "goalsAgainst": 5
          }
        }
      ],
      "teams": [
        {
          "teamId": 227,
          "team": "Santa Clara",
          "form": "DWWDWWD",
          "all": {
            "played": 7,
            "wins": 4,
            "draws": 3,
            "losses": 0,
            "goalsFor": 11,
            "goalsAgainst": 4
          },
          "home": {
            "played": 4,
            "wins": 2,
            "draws": 2,
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
          "teamId": 217,
          "team": "SC Braga",
          "form": "DWWLWD",
          "all": {
            "played": 6,
            "wins": 3,
            "draws": 2,
            "losses": 1,
            "goalsFor": 7,
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
            "played": 4,
            "wins": 1,
            "draws": 2,
            "losses": 1,
            "goalsFor": 5,
            "goalsAgainst": 5
          }
        },
        {
          "teamId": 230,
          "team": "Estoril",
          "form": "DLLLDLL",
          "all": {
            "played": 7,
            "wins": 0,
            "draws": 2,
            "losses": 5,
            "goalsFor": 3,
            "goalsAgainst": 10
          },
          "home": {
            "played": 4,
            "wins": 0,
            "draws": 2,
            "losses": 2,
            "goalsFor": 2,
            "goalsAgainst": 5
          },
          "away": {
            "played": 3,
            "wins": 0,
            "draws": 0,
            "losses": 3,
            "goalsFor": 1,
            "goalsAgainst": 5
          }
        },
        {
          "teamId": 4716,
          "team": "Casa Pia",
          "form": "LLLLDLW",
          "all": {
            "played": 7,
            "wins": 1,
            "draws": 1,
            "losses": 5,
            "goalsFor": 3,
            "goalsAgainst": 16
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
            "played": 4,
            "wins": 1,
            "draws": 1,
            "losses": 2,
            "goalsFor": 2,
            "goalsAgainst": 4
          }
        },
        {
          "teamId": 212,
          "team": "FC Porto",
          "form": "WWWWWW",
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
        }
      ],
      "fixtures": [
        {
          "fixtureId": 1575506,
          "kickoff": "2026-09-21T02:00:00+09:00",
          "status": "FT",
          "homeTeamId": 227,
          "homeTeam": "Santa Clara",
          "awayTeamId": 217,
          "awayTeam": "SC Braga",
          "injuriesChecked": true,
          "injuries": [],
          "lineupsChecked": true,
          "lineups": [
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
            },
            {
              "teamId": 217,
              "team": "SC Braga",
              "formation": "3-4-3",
              "coach": "Carlos Vicens",
              "starters": [
                "Bernardo Fontes",
                "A. Barišić",
                "Vitor Carvalho",
                "A. Bajrami",
                "Víctor Gómez",
                "João Moutinho",
                "J. Gorby",
                "Gabri Martínez",
                "Pau Victor",
                "J. Milošević",
                "Ricardo Horta"
              ]
            }
          ]
        },
        {
          "fixtureId": 1575501,
          "kickoff": "2026-09-21T02:00:00+09:00",
          "status": "FT",
          "homeTeamId": 230,
          "homeTeam": "Estoril",
          "awayTeamId": 4716,
          "awayTeam": "Casa Pia",
          "injuriesChecked": true,
          "injuries": [],
          "lineupsChecked": true,
          "lineups": [
            {
              "teamId": 230,
              "team": "Estoril",
              "formation": "4-2-3-1",
              "coach": "Vasco Matos",
              "starters": [
                "Joel Robles",
                "Ricard Sánchez",
                "Xavi Sintes",
                "Isma Sierra",
                "R. Jurišić",
                "J. Holsgrove",
                "M. Robin",
                "N. Omerović",
                "João Carvalho",
                "A. Camblan",
                "Y. Begraoui"
              ]
            },
            {
              "teamId": 4716,
              "team": "Casa Pia",
              "formation": "4-2-3-1",
              "coach": "Filipe Coelho",
              "starters": [
                "Ivan Mandić",
                "Geraldes",
                "Kaly",
                "David Sousa",
                "Pedro Rosas",
                "Silvi",
                "L. Ofori",
                "M. El Boukammiri",
                "João Pedro Seno Luís Rêgo",
                "JP",
                "Henrique Araújo"
              ]
            }
          ]
        },
        {
          "fixtureId": 1575503,
          "kickoff": "2026-09-21T04:30:00+09:00",
          "status": "2H",
          "homeTeamId": 212,
          "homeTeam": "FC Porto",
          "awayTeamId": 211,
          "awayTeam": "Benfica",
          "injuriesChecked": true,
          "injuries": [],
          "lineupsChecked": true,
          "lineups": [
            {
              "teamId": 212,
              "team": "FC Porto",
              "formation": "4-3-3",
              "coach": "F. Farioli",
              "starters": [
                "Diogo Costa",
                "Alberto Baio",
                "J. Bednarek",
                "J. Kiwior",
                "Martim Fernandes",
                "Victor Mow Froholdt",
                "P. Rosario",
                "Gabri Veiga",
                "William",
                "André Silva",
                "Pepê Aquino"
              ]
            },
            {
              "teamId": 211,
              "team": "Benfica",
              "formation": "4-2-3-1",
              "coach": "Marco Silva",
              "starters": [
                "Samuel Soares",
                "A. Bah",
                "Tomás Araújo",
                "C. Lenglet",
                "S. Dahl",
                "F. Aursnes",
                "João Palhinha",
                "Rafa",
                "H. Sudakov",
                "G. Prestianni",
                "V. Pavlidis"
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
          "teamId": 1393,
          "team": "Union St. Gilloise",
          "rank": 1,
          "points": 19,
          "goalsDiff": 18,
          "form": "WWWWW",
          "all": {
            "played": 7,
            "wins": 6,
            "draws": 1,
            "losses": 0,
            "goalsFor": 21,
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
            "played": 4,
            "wins": 4,
            "draws": 0,
            "losses": 0,
            "goalsFor": 13,
            "goalsAgainst": 3
          }
        },
        {
          "teamId": 631,
          "team": "Gent",
          "rank": 2,
          "points": 19,
          "goalsDiff": 9,
          "form": "WDWWW",
          "all": {
            "played": 7,
            "wins": 6,
            "draws": 1,
            "losses": 0,
            "goalsFor": 13,
            "goalsAgainst": 4
          },
          "home": {
            "played": 4,
            "wins": 4,
            "draws": 0,
            "losses": 0,
            "goalsFor": 7,
            "goalsAgainst": 2
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
          "points": 18,
          "goalsDiff": 12,
          "form": "WWWLW",
          "all": {
            "played": 7,
            "wins": 6,
            "draws": 0,
            "losses": 1,
            "goalsFor": 15,
            "goalsAgainst": 3
          },
          "home": {
            "played": 4,
            "wins": 4,
            "draws": 0,
            "losses": 0,
            "goalsFor": 10,
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
          "points": 18,
          "goalsDiff": 8,
          "form": "WWLWW",
          "all": {
            "played": 7,
            "wins": 6,
            "draws": 0,
            "losses": 1,
            "goalsFor": 15,
            "goalsAgainst": 7
          },
          "home": {
            "played": 4,
            "wins": 3,
            "draws": 0,
            "losses": 1,
            "goalsFor": 10,
            "goalsAgainst": 6
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
          "teamId": 554,
          "team": "Anderlecht",
          "rank": 5,
          "points": 13,
          "goalsDiff": 2,
          "form": "WWDWL",
          "all": {
            "played": 7,
            "wins": 4,
            "draws": 1,
            "losses": 2,
            "goalsFor": 7,
            "goalsAgainst": 5
          },
          "home": {
            "played": 4,
            "wins": 3,
            "draws": 1,
            "losses": 0,
            "goalsFor": 6,
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
          "teamId": 600,
          "team": "Zulte Waregem",
          "rank": 6,
          "points": 11,
          "goalsDiff": 3,
          "form": "LLWDW",
          "all": {
            "played": 7,
            "wins": 3,
            "draws": 2,
            "losses": 2,
            "goalsFor": 10,
            "goalsAgainst": 7
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
            "draws": 2,
            "losses": 1,
            "goalsFor": 4,
            "goalsAgainst": 5
          }
        },
        {
          "teamId": 733,
          "team": "Standard Liege",
          "rank": 7,
          "points": 11,
          "goalsDiff": 1,
          "form": "LLWWW",
          "all": {
            "played": 7,
            "wins": 3,
            "draws": 2,
            "losses": 2,
            "goalsFor": 13,
            "goalsAgainst": 12
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
            "played": 4,
            "wins": 1,
            "draws": 1,
            "losses": 2,
            "goalsFor": 8,
            "goalsAgainst": 10
          }
        },
        {
          "teamId": 261,
          "team": "KVC Westerlo",
          "rank": 8,
          "points": 10,
          "goalsDiff": -1,
          "form": "WWWDL",
          "all": {
            "played": 7,
            "wins": 3,
            "draws": 1,
            "losses": 3,
            "goalsFor": 15,
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
            "played": 4,
            "wins": 2,
            "draws": 0,
            "losses": 2,
            "goalsFor": 8,
            "goalsAgainst": 7
          }
        },
        {
          "teamId": 738,
          "team": "SK Beveren",
          "rank": 9,
          "points": 9,
          "goalsDiff": -4,
          "form": "LWWLL",
          "all": {
            "played": 7,
            "wins": 3,
            "draws": 0,
            "losses": 4,
            "goalsFor": 7,
            "goalsAgainst": 11
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
            "played": 4,
            "wins": 0,
            "draws": 0,
            "losses": 4,
            "goalsFor": 1,
            "goalsAgainst": 11
          }
        },
        {
          "teamId": 742,
          "team": "Genk",
          "rank": 10,
          "points": 9,
          "goalsDiff": 1,
          "form": "LDDWD",
          "all": {
            "played": 7,
            "wins": 2,
            "draws": 3,
            "losses": 2,
            "goalsFor": 13,
            "goalsAgainst": 12
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
            "played": 4,
            "wins": 0,
            "draws": 2,
            "losses": 2,
            "goalsFor": 5,
            "goalsAgainst": 9
          }
        },
        {
          "teamId": 735,
          "team": "St. Truiden",
          "rank": 11,
          "points": 8,
          "goalsDiff": 0,
          "form": "LLWLW",
          "all": {
            "played": 7,
            "wins": 2,
            "draws": 2,
            "losses": 3,
            "goalsFor": 12,
            "goalsAgainst": 12
          },
          "home": {
            "played": 4,
            "wins": 1,
            "draws": 1,
            "losses": 2,
            "goalsFor": 5,
            "goalsAgainst": 6
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
          "teamId": 259,
          "team": "Lommel United",
          "rank": 12,
          "points": 8,
          "goalsDiff": -2,
          "form": "DLLWW",
          "all": {
            "played": 7,
            "wins": 2,
            "draws": 2,
            "losses": 3,
            "goalsFor": 6,
            "goalsAgainst": 8
          },
          "home": {
            "played": 4,
            "wins": 1,
            "draws": 1,
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
          "teamId": 740,
          "team": "Antwerp",
          "rank": 13,
          "points": 7,
          "goalsDiff": -4,
          "form": "LLLLD",
          "all": {
            "played": 7,
            "wins": 2,
            "draws": 1,
            "losses": 4,
            "goalsFor": 11,
            "goalsAgainst": 15
          },
          "home": {
            "played": 4,
            "wins": 1,
            "draws": 1,
            "losses": 2,
            "goalsFor": 7,
            "goalsAgainst": 11
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
          "teamId": 5902,
          "team": "RAAL La Louvière",
          "rank": 14,
          "points": 4,
          "goalsDiff": -7,
          "form": "LWLDL",
          "all": {
            "played": 7,
            "wins": 1,
            "draws": 1,
            "losses": 5,
            "goalsFor": 7,
            "goalsAgainst": 14
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
            "played": 4,
            "wins": 0,
            "draws": 0,
            "losses": 4,
            "goalsFor": 1,
            "goalsAgainst": 10
          }
        },
        {
          "teamId": 260,
          "team": "OH Leuven",
          "rank": 15,
          "points": 4,
          "goalsDiff": -8,
          "form": "WDLLL",
          "all": {
            "played": 7,
            "wins": 1,
            "draws": 1,
            "losses": 5,
            "goalsFor": 5,
            "goalsAgainst": 13
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
          "rank": 16,
          "points": 3,
          "goalsDiff": -13,
          "form": "WLLLL",
          "all": {
            "played": 7,
            "wins": 1,
            "draws": 0,
            "losses": 6,
            "goalsFor": 2,
            "goalsAgainst": 15
          },
          "home": {
            "played": 4,
            "wins": 1,
            "draws": 0,
            "losses": 3,
            "goalsFor": 2,
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
        },
        {
          "teamId": 741,
          "team": "Cercle Brugge",
          "rank": 17,
          "points": 3,
          "goalsDiff": -6,
          "form": "LDLLL",
          "all": {
            "played": 7,
            "wins": 0,
            "draws": 3,
            "losses": 4,
            "goalsFor": 8,
            "goalsAgainst": 14
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
            "played": 4,
            "wins": 0,
            "draws": 2,
            "losses": 2,
            "goalsFor": 5,
            "goalsAgainst": 7
          }
        },
        {
          "teamId": 266,
          "team": "KV Mechelen",
          "rank": 18,
          "points": 3,
          "goalsDiff": -9,
          "form": "DLLDL",
          "all": {
            "played": 7,
            "wins": 0,
            "draws": 3,
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
            "played": 4,
            "wins": 0,
            "draws": 2,
            "losses": 2,
            "goalsFor": 2,
            "goalsAgainst": 6
          }
        }
      ],
      "teams": [
        {
          "teamId": 569,
          "team": "Club Brugge KV",
          "form": "WWWLWWW",
          "all": {
            "played": 7,
            "wins": 6,
            "draws": 0,
            "losses": 1,
            "goalsFor": 15,
            "goalsAgainst": 3
          },
          "home": {
            "played": 4,
            "wins": 4,
            "draws": 0,
            "losses": 0,
            "goalsFor": 10,
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
          "teamId": 742,
          "team": "Genk",
          "form": "LWDWDDL",
          "all": {
            "played": 7,
            "wins": 2,
            "draws": 3,
            "losses": 2,
            "goalsFor": 13,
            "goalsAgainst": 12
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
            "played": 4,
            "wins": 0,
            "draws": 2,
            "losses": 2,
            "goalsFor": 5,
            "goalsAgainst": 9
          }
        },
        {
          "teamId": 734,
          "team": "Kortrijk",
          "form": "LLLLLLW",
          "all": {
            "played": 7,
            "wins": 1,
            "draws": 0,
            "losses": 6,
            "goalsFor": 2,
            "goalsAgainst": 15
          },
          "home": {
            "played": 4,
            "wins": 1,
            "draws": 0,
            "losses": 3,
            "goalsFor": 2,
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
        },
        {
          "teamId": 738,
          "team": "SK Beveren",
          "form": "LWLLWWL",
          "all": {
            "played": 7,
            "wins": 3,
            "draws": 0,
            "losses": 4,
            "goalsFor": 7,
            "goalsAgainst": 11
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
            "played": 4,
            "wins": 0,
            "draws": 0,
            "losses": 4,
            "goalsFor": 1,
            "goalsAgainst": 11
          }
        }
      ],
      "fixtures": [
        {
          "fixtureId": 1558642,
          "kickoff": "2026-09-21T01:30:00+09:00",
          "status": "FT",
          "homeTeamId": 569,
          "homeTeam": "Club Brugge KV",
          "awayTeamId": 742,
          "awayTeam": "Genk",
          "injuriesChecked": true,
          "injuries": [],
          "lineupsChecked": true,
          "lineups": [
            {
              "teamId": 569,
              "team": "Club Brugge KV",
              "formation": "4-2-3-1",
              "coach": "I. Leko",
              "starters": [
                "Y. Sommer",
                "K. Sabbe",
                "Lee Han-Beom",
                "B. Mechele",
                "J. Seys",
                "F. Potts",
                "H. Vanaken",
                "Carlos Forbs",
                "H. Vetlesen",
                "Jan Virgili",
                "N. Tresoldi"
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
                "B. Tahirović",
                "B. Heynen",
                "J. Ito",
                "J. Erenbjerg",
                "Noah Adedeji-Sternberg",
                "R. Durosinmi"
              ]
            }
          ]
        },
        {
          "fixtureId": 1558643,
          "kickoff": "2026-09-21T02:15:00+09:00",
          "status": "FT",
          "homeTeamId": 734,
          "homeTeam": "Kortrijk",
          "awayTeamId": 738,
          "awayTeam": "SK Beveren",
          "injuriesChecked": true,
          "injuries": [],
          "lineupsChecked": true,
          "lineups": [
            {
              "teamId": 734,
              "team": "Kortrijk",
              "formation": "4-4-2",
              "coach": "Christophe Lepoint",
              "starters": [
                "M. Ilić",
                "N. Mehssatou",
                "Harrison Murray-Campbell",
                "A. Drouhin",
                "J. Ndjeungoue",
                "S. Campbell",
                "B. Dejaegere",
                "J. Roche",
                "J. Van Landschoot",
                "N. Ogbuehi",
                "T. Ambrose"
              ]
            },
            {
              "teamId": 738,
              "team": "SK Beveren",
              "formation": "4-2-3-1",
              "coach": "T. Bakens",
              "starters": [
                "J. Schenk",
                "L. Jans",
                "S. Keller",
                "B. Godeau",
                "C. Janssens",
                "S. Dewaele",
                "C. Conde",
                "C. Lokesa",
                "C. Brüls",
                "J. Margaritha",
                "M. Kaboré"
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
          "teamId": 3579,
          "team": "Amed",
          "rank": 1,
          "points": 13,
          "goalsDiff": 8,
          "form": "WWDWL",
          "all": {
            "played": 6,
            "wins": 4,
            "draws": 1,
            "losses": 1,
            "goalsFor": 15,
            "goalsAgainst": 7
          },
          "home": {
            "played": 4,
            "wins": 4,
            "draws": 0,
            "losses": 0,
            "goalsFor": 13,
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
          "teamId": 645,
          "team": "Galatasaray",
          "rank": 2,
          "points": 13,
          "goalsDiff": 3,
          "form": "LWWWW",
          "all": {
            "played": 6,
            "wins": 4,
            "draws": 1,
            "losses": 1,
            "goalsFor": 13,
            "goalsAgainst": 10
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
            "played": 3,
            "wins": 2,
            "draws": 0,
            "losses": 1,
            "goalsFor": 7,
            "goalsAgainst": 6
          }
        },
        {
          "teamId": 549,
          "team": "Beşiktaş",
          "rank": 3,
          "points": 12,
          "goalsDiff": 7,
          "form": "LWWWL",
          "all": {
            "played": 6,
            "wins": 4,
            "draws": 0,
            "losses": 2,
            "goalsFor": 14,
            "goalsAgainst": 7
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
            "played": 3,
            "wins": 1,
            "draws": 0,
            "losses": 2,
            "goalsFor": 4,
            "goalsAgainst": 5
          }
        },
        {
          "teamId": 7411,
          "team": "Kocaelispor",
          "rank": 4,
          "points": 12,
          "goalsDiff": 3,
          "form": "WLWWW",
          "all": {
            "played": 6,
            "wins": 4,
            "draws": 0,
            "losses": 2,
            "goalsFor": 7,
            "goalsAgainst": 4
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
          "rank": 5,
          "points": 11,
          "goalsDiff": 2,
          "form": "WDWLW",
          "all": {
            "played": 6,
            "wins": 3,
            "draws": 2,
            "losses": 1,
            "goalsFor": 8,
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
            "played": 4,
            "wins": 2,
            "draws": 1,
            "losses": 1,
            "goalsFor": 5,
            "goalsAgainst": 4
          }
        },
        {
          "teamId": 611,
          "team": "Fenerbahçe",
          "rank": 6,
          "points": 10,
          "goalsDiff": 10,
          "form": "WDLWW",
          "all": {
            "played": 6,
            "wins": 3,
            "draws": 1,
            "losses": 2,
            "goalsFor": 16,
            "goalsAgainst": 6
          },
          "home": {
            "played": 3,
            "wins": 2,
            "draws": 0,
            "losses": 1,
            "goalsFor": 13,
            "goalsAgainst": 4
          },
          "away": {
            "played": 3,
            "wins": 1,
            "draws": 1,
            "losses": 1,
            "goalsFor": 3,
            "goalsAgainst": 2
          }
        },
        {
          "teamId": 998,
          "team": "Trabzonspor",
          "rank": 7,
          "points": 10,
          "goalsDiff": 8,
          "form": "WLWLW",
          "all": {
            "played": 6,
            "wins": 3,
            "draws": 1,
            "losses": 2,
            "goalsFor": 13,
            "goalsAgainst": 5
          },
          "home": {
            "played": 3,
            "wins": 3,
            "draws": 0,
            "losses": 0,
            "goalsFor": 11,
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
          "teamId": 1004,
          "team": "Kasımpaşa",
          "rank": 8,
          "points": 10,
          "goalsDiff": 2,
          "form": "DWDDW",
          "all": {
            "played": 6,
            "wins": 2,
            "draws": 4,
            "losses": 0,
            "goalsFor": 7,
            "goalsAgainst": 5
          },
          "home": {
            "played": 3,
            "wins": 0,
            "draws": 3,
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
          "rank": 9,
          "points": 10,
          "goalsDiff": 1,
          "form": "DWLWL",
          "all": {
            "played": 6,
            "wins": 3,
            "draws": 1,
            "losses": 2,
            "goalsFor": 7,
            "goalsAgainst": 6
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
            "played": 4,
            "wins": 3,
            "draws": 1,
            "losses": 0,
            "goalsFor": 7,
            "goalsAgainst": 3
          }
        },
        {
          "teamId": 3573,
          "team": "Gaziantep FK",
          "rank": 10,
          "points": 8,
          "goalsDiff": 0,
          "form": "LDWLW",
          "all": {
            "played": 6,
            "wins": 2,
            "draws": 2,
            "losses": 2,
            "goalsFor": 7,
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
            "wins": 2,
            "draws": 0,
            "losses": 1,
            "goalsFor": 5,
            "goalsAgainst": 4
          }
        },
        {
          "teamId": 6343,
          "team": "Çorum FK",
          "rank": 11,
          "points": 7,
          "goalsDiff": 1,
          "form": "LWWLL",
          "all": {
            "played": 6,
            "wins": 2,
            "draws": 1,
            "losses": 3,
            "goalsFor": 13,
            "goalsAgainst": 12
          },
          "home": {
            "played": 3,
            "wins": 1,
            "draws": 0,
            "losses": 2,
            "goalsFor": 4,
            "goalsAgainst": 3
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
          "teamId": 564,
          "team": "Başakşehir",
          "rank": 12,
          "points": 7,
          "goalsDiff": -1,
          "form": "WLLDL",
          "all": {
            "played": 6,
            "wins": 2,
            "draws": 1,
            "losses": 3,
            "goalsFor": 10,
            "goalsAgainst": 11
          },
          "home": {
            "played": 4,
            "wins": 2,
            "draws": 1,
            "losses": 1,
            "goalsFor": 9,
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
          "teamId": 997,
          "team": "Gençlerbirliği S.K.",
          "rank": 13,
          "points": 7,
          "goalsDiff": -8,
          "form": "LLLDW",
          "all": {
            "played": 6,
            "wins": 2,
            "draws": 1,
            "losses": 3,
            "goalsFor": 5,
            "goalsAgainst": 13
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
            "played": 3,
            "wins": 1,
            "draws": 0,
            "losses": 2,
            "goalsFor": 1,
            "goalsAgainst": 9
          }
        },
        {
          "teamId": 1009,
          "team": "Erzurumspor FK",
          "rank": 14,
          "points": 7,
          "goalsDiff": -8,
          "form": "WLWDL",
          "all": {
            "played": 6,
            "wins": 2,
            "draws": 1,
            "losses": 3,
            "goalsFor": 3,
            "goalsAgainst": 11
          },
          "home": {
            "played": 3,
            "wins": 2,
            "draws": 0,
            "losses": 1,
            "goalsFor": 2,
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
          "rank": 15,
          "points": 4,
          "goalsDiff": -4,
          "form": "DWLLL",
          "all": {
            "played": 6,
            "wins": 1,
            "draws": 1,
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
            "played": 3,
            "wins": 0,
            "draws": 1,
            "losses": 2,
            "goalsFor": 2,
            "goalsAgainst": 5
          }
        },
        {
          "teamId": 3603,
          "team": "Samsunspor",
          "rank": 16,
          "points": 4,
          "goalsDiff": -6,
          "form": "LLLLW",
          "all": {
            "played": 6,
            "wins": 1,
            "draws": 1,
            "losses": 4,
            "goalsFor": 6,
            "goalsAgainst": 12
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
            "played": 3,
            "wins": 1,
            "draws": 0,
            "losses": 2,
            "goalsFor": 2,
            "goalsAgainst": 2
          }
        },
        {
          "teamId": 994,
          "team": "Göztepe",
          "rank": 17,
          "points": 3,
          "goalsDiff": -4,
          "form": "DDLLL",
          "all": {
            "played": 6,
            "wins": 0,
            "draws": 3,
            "losses": 3,
            "goalsFor": 11,
            "goalsAgainst": 15
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
            "wins": 0,
            "draws": 2,
            "losses": 1,
            "goalsFor": 7,
            "goalsAgainst": 8
          }
        },
        {
          "teamId": 3588,
          "team": "Eyüpspor",
          "rank": 18,
          "points": 3,
          "goalsDiff": -14,
          "form": "LLLWL",
          "all": {
            "played": 6,
            "wins": 1,
            "draws": 0,
            "losses": 5,
            "goalsFor": 2,
            "goalsAgainst": 16
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
            "played": 3,
            "wins": 0,
            "draws": 0,
            "losses": 3,
            "goalsFor": 0,
            "goalsAgainst": 12
          }
        }
      ],
      "teams": [
        {
          "teamId": 994,
          "team": "Göztepe",
          "form": "DLLLDD",
          "all": {
            "played": 6,
            "wins": 0,
            "draws": 3,
            "losses": 3,
            "goalsFor": 11,
            "goalsAgainst": 15
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
            "wins": 0,
            "draws": 2,
            "losses": 1,
            "goalsFor": 7,
            "goalsAgainst": 8
          }
        },
        {
          "teamId": 1007,
          "team": "Rizespor",
          "form": "WLWLWD",
          "all": {
            "played": 6,
            "wins": 3,
            "draws": 1,
            "losses": 2,
            "goalsFor": 7,
            "goalsAgainst": 6
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
            "played": 4,
            "wins": 3,
            "draws": 1,
            "losses": 0,
            "goalsFor": 7,
            "goalsAgainst": 3
          }
        },
        {
          "teamId": 3579,
          "team": "Amed",
          "form": "WLWDWW",
          "all": {
            "played": 6,
            "wins": 4,
            "draws": 1,
            "losses": 1,
            "goalsFor": 15,
            "goalsAgainst": 7
          },
          "home": {
            "played": 4,
            "wins": 4,
            "draws": 0,
            "losses": 0,
            "goalsFor": 13,
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
          "teamId": 549,
          "team": "Beşiktaş",
          "form": "WLWWWL",
          "all": {
            "played": 6,
            "wins": 4,
            "draws": 0,
            "losses": 2,
            "goalsFor": 14,
            "goalsAgainst": 7
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
            "played": 3,
            "wins": 1,
            "draws": 0,
            "losses": 2,
            "goalsFor": 4,
            "goalsAgainst": 5
          }
        }
      ],
      "fixtures": [
        {
          "fixtureId": 1584417,
          "kickoff": "2026-09-21T02:00:00+09:00",
          "status": "FT",
          "homeTeamId": 994,
          "homeTeam": "Göztepe",
          "awayTeamId": 1007,
          "awayTeam": "Rizespor",
          "injuriesChecked": true,
          "injuries": [
            {
              "fixtureId": 1584417,
              "teamId": 994,
              "playerId": 159466,
              "player": "Allan Godoi",
              "type": "Missing Fixture",
              "reason": "Injury"
            },
            {
              "fixtureId": 1584417,
              "teamId": 994,
              "playerId": 62378,
              "player": "F. Bayir",
              "type": "Missing Fixture",
              "reason": "Inactive"
            },
            {
              "fixtureId": 1584417,
              "teamId": 994,
              "playerId": 143705,
              "player": "G. Bayrakdar",
              "type": "Missing Fixture",
              "reason": "Inactive"
            },
            {
              "fixtureId": 1584417,
              "teamId": 994,
              "playerId": 24665,
              "player": "L. Gugeshashvili",
              "type": "Missing Fixture",
              "reason": "Injury"
            },
            {
              "fixtureId": 1584417,
              "teamId": 994,
              "playerId": 432841,
              "player": "I. Sabra",
              "type": "Missing Fixture",
              "reason": "Ankle Injury"
            },
            {
              "fixtureId": 1584417,
              "teamId": 994,
              "playerId": 48091,
              "player": "N. Sonko Sundberg",
              "type": "Missing Fixture",
              "reason": "Inactive"
            },
            {
              "fixtureId": 1584417,
              "teamId": 994,
              "playerId": 303493,
              "player": "N. Miroshi",
              "type": "Questionable",
              "reason": "Inactive"
            },
            {
              "fixtureId": 1584417,
              "teamId": 1007,
              "playerId": 73509,
              "player": "K. Alikulov",
              "type": "Missing Fixture",
              "reason": "Knee Injury"
            },
            {
              "fixtureId": 1584417,
              "teamId": 1007,
              "playerId": 43056,
              "player": "V. Mihaila",
              "type": "Missing Fixture",
              "reason": "Red Card"
            }
          ],
          "lineupsChecked": true,
          "lineups": [
            {
              "teamId": 994,
              "team": "Göztepe",
              "formation": "3-4-1-2",
              "coach": "Stanimir Stoilov",
              "starters": [
                "Arda Özçimen",
                "Taha Altıkardeş",
                "Ege Yildirim",
                "Malcom Bokele",
                "Arda Kurtulan",
                "Alex Matos",
                "Rhaldney",
                "Richard Akonnor",
                "André Henrique",
                "Janderson",
                "Juan Santos da Silva"
              ]
            },
            {
              "teamId": 1007,
              "team": "Rizespor",
              "formation": "5-3-2",
              "coach": "Recep Ucar",
              "starters": [
                "Yahia Fofana",
                "Taha Şahin",
                "Tayyip Talha Sanuç",
                "Attila Mocsi",
                "Modibo Sagnan",
                "Mithat Pala",
                "Ibrahim Olawoyin",
                "Taylan Antalyalı",
                "Qazim Laci",
                "Ali Sowe",
                "Emrecan Bulut"
              ]
            }
          ]
        },
        {
          "fixtureId": 1584412,
          "kickoff": "2026-09-21T02:00:00+09:00",
          "status": "FT",
          "homeTeamId": 3579,
          "homeTeam": "Amed",
          "awayTeamId": 549,
          "awayTeam": "Beşiktaş",
          "injuriesChecked": true,
          "injuries": [
            {
              "fixtureId": 1584412,
              "teamId": 3579,
              "playerId": 427020,
              "player": "D. Demir",
              "type": "Missing Fixture",
              "reason": "Knee Injury"
            },
            {
              "fixtureId": 1584412,
              "teamId": 3579,
              "playerId": 203458,
              "player": "Y. Sor",
              "type": "Questionable",
              "reason": "Injury"
            },
            {
              "fixtureId": 1584412,
              "teamId": 549,
              "playerId": 1946,
              "player": "L. Trossard",
              "type": "Missing Fixture",
              "reason": "Injury"
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
                "Furkan Soyalp",
                "Rayan Raveloson",
                "Samuel Ballet",
                "Dia Saba",
                "Mohamed Khalil",
                "Gift Orban"
              ]
            },
            {
              "teamId": 549,
              "team": "Beşiktaş",
              "formation": "4-1-4-1",
              "coach": "Vincenzo Italiano",
              "starters": [
                "Alexander Nübel",
                "Amir Murillo",
                "Emmanuel Agbadou",
                "Tiago Djaló",
                "Rıdvan Yılmaz",
                "Salih Özcan",
                "Ernest Poku",
                "Junior Olaitan",
                "Orkun Kökçü",
                "İlhan Fakılı",
                "Dušan Vlahović"
              ]
            }
          ]
        }
      ]
    },
    {
      "key": "INTL_FRIENDLIES",
      "leagueId": 10,
      "season": "2026",
      "standings": [],
      "teams": [
        {
          "teamId": 5163,
          "team": "New Caledonia",
          "form": "",
          "all": {
            "played": 0,
            "wins": 0,
            "draws": 0,
            "losses": 0,
            "goalsFor": 0,
            "goalsAgainst": 0
          },
          "home": {
            "played": 0,
            "wins": 0,
            "draws": 0,
            "losses": 0,
            "goalsFor": 0,
            "goalsAgainst": 0
          },
          "away": {
            "played": 0,
            "wins": 0,
            "draws": 0,
            "losses": 0,
            "goalsFor": 0,
            "goalsAgainst": 0
          }
        },
        {
          "teamId": 5165,
          "team": "Solomon Islands",
          "form": "",
          "all": {
            "played": 0,
            "wins": 0,
            "draws": 0,
            "losses": 0,
            "goalsFor": 0,
            "goalsAgainst": 0
          },
          "home": {
            "played": 0,
            "wins": 0,
            "draws": 0,
            "losses": 0,
            "goalsFor": 0,
            "goalsAgainst": 0
          },
          "away": {
            "played": 0,
            "wins": 0,
            "draws": 0,
            "losses": 0,
            "goalsFor": 0,
            "goalsAgainst": 0
          }
        },
        {
          "teamId": 5160,
          "team": "Fiji",
          "form": "LD",
          "all": {
            "played": 2,
            "wins": 0,
            "draws": 1,
            "losses": 1,
            "goalsFor": 3,
            "goalsAgainst": 4
          },
          "home": {
            "played": 0,
            "wins": 0,
            "draws": 0,
            "losses": 0,
            "goalsFor": 0,
            "goalsAgainst": 0
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
          "teamId": 5170,
          "team": "Vanuatu",
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
            "played": 2,
            "wins": 1,
            "draws": 1,
            "losses": 0,
            "goalsFor": 4,
            "goalsAgainst": 3
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
          "fixtureId": 1640499,
          "kickoff": "2026-09-21T13:00:00+09:00",
          "status": "NS",
          "homeTeamId": 5163,
          "homeTeam": "New Caledonia",
          "awayTeamId": 5165,
          "awayTeam": "Solomon Islands",
          "injuriesChecked": true,
          "injuries": [],
          "lineupsChecked": false,
          "lineups": []
        },
        {
          "fixtureId": 1640500,
          "kickoff": "2026-09-21T16:00:00+09:00",
          "status": "NS",
          "homeTeamId": 5160,
          "homeTeam": "Fiji",
          "awayTeamId": 5170,
          "awayTeam": "Vanuatu",
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
      "date": "2026-09-20",
      "updatedAt": "2026-09-20T13:03:05.881Z",
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
              "teamId": 42,
              "team": "Arsenal",
              "rank": 2,
              "points": 12,
              "goalsDiff": 4,
              "form": "LWWWW",
              "all": {
                "played": 5,
                "wins": 4,
                "draws": 0,
                "losses": 1,
                "goalsFor": 8,
                "goalsAgainst": 4
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
                "played": 3,
                "wins": 2,
                "draws": 0,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 51,
              "team": "Brighton",
              "rank": 3,
              "points": 10,
              "goalsDiff": 11,
              "form": "WWDLW",
              "all": {
                "played": 5,
                "wins": 3,
                "draws": 1,
                "losses": 1,
                "goalsFor": 16,
                "goalsAgainst": 5
              },
              "home": {
                "played": 3,
                "wins": 2,
                "draws": 1,
                "losses": 0,
                "goalsFor": 8,
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
              "teamId": 55,
              "team": "Brentford",
              "rank": 4,
              "points": 9,
              "goalsDiff": 6,
              "form": "WDDDW",
              "all": {
                "played": 5,
                "wins": 2,
                "draws": 3,
                "losses": 0,
                "goalsFor": 10,
                "goalsAgainst": 4
              },
              "home": {
                "played": 3,
                "wins": 2,
                "draws": 1,
                "losses": 0,
                "goalsFor": 7,
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
              "teamId": 45,
              "team": "Everton",
              "rank": 5,
              "points": 9,
              "goalsDiff": 3,
              "form": "WDDDW",
              "all": {
                "played": 5,
                "wins": 2,
                "draws": 3,
                "losses": 0,
                "goalsFor": 6,
                "goalsAgainst": 3
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
                "wins": 0,
                "draws": 2,
                "losses": 0,
                "goalsFor": 1,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 63,
              "team": "Leeds",
              "rank": 6,
              "points": 8,
              "goalsDiff": 4,
              "form": "WDDW",
              "all": {
                "played": 4,
                "wins": 2,
                "draws": 2,
                "losses": 0,
                "goalsFor": 7,
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
                "played": 2,
                "wins": 1,
                "draws": 1,
                "losses": 0,
                "goalsFor": 2,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 64,
              "team": "Hull City",
              "rank": 7,
              "points": 8,
              "goalsDiff": 2,
              "form": "LDDWW",
              "all": {
                "played": 5,
                "wins": 2,
                "draws": 2,
                "losses": 1,
                "goalsFor": 6,
                "goalsAgainst": 4
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
                "played": 3,
                "wins": 1,
                "draws": 1,
                "losses": 1,
                "goalsFor": 4,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 34,
              "team": "Newcastle",
              "rank": 8,
              "points": 8,
              "goalsDiff": 0,
              "form": "WLDWD",
              "all": {
                "played": 5,
                "wins": 2,
                "draws": 2,
                "losses": 1,
                "goalsFor": 9,
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
                "draws": 0,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 49,
              "team": "Chelsea",
              "rank": 9,
              "points": 7,
              "goalsDiff": -2,
              "form": "LDLWW",
              "all": {
                "played": 5,
                "wins": 2,
                "draws": 1,
                "losses": 2,
                "goalsFor": 10,
                "goalsAgainst": 12
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
                "played": 3,
                "wins": 1,
                "draws": 0,
                "losses": 2,
                "goalsFor": 4,
                "goalsAgainst": 7
              }
            },
            {
              "teamId": 40,
              "team": "Liverpool",
              "rank": 10,
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
              "teamId": 57,
              "team": "Ipswich",
              "rank": 11,
              "points": 6,
              "goalsDiff": -4,
              "form": "LWLLW",
              "all": {
                "played": 5,
                "wins": 2,
                "draws": 0,
                "losses": 3,
                "goalsFor": 7,
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
                "played": 3,
                "wins": 1,
                "draws": 0,
                "losses": 2,
                "goalsFor": 5,
                "goalsAgainst": 8
              }
            },
            {
              "teamId": 65,
              "team": "Nottingham Forest",
              "rank": 12,
              "points": 5,
              "goalsDiff": -1,
              "form": "LWDDL",
              "all": {
                "played": 5,
                "wins": 1,
                "draws": 2,
                "losses": 2,
                "goalsFor": 4,
                "goalsAgainst": 5
              },
              "home": {
                "played": 3,
                "wins": 0,
                "draws": 1,
                "losses": 2,
                "goalsFor": 0,
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
              "teamId": 66,
              "team": "Aston Villa",
              "rank": 15,
              "points": 4,
              "goalsDiff": -5,
              "form": "WLDLL",
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
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 1,
                "goalsAgainst": 3
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
              "teamId": 35,
              "team": "Bournemouth",
              "rank": 16,
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
              "rank": 17,
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
              "teamId": 1346,
              "team": "Coventry",
              "rank": 18,
              "points": 3,
              "goalsDiff": -9,
              "form": "WLLLL",
              "all": {
                "played": 5,
                "wins": 1,
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
                "goalsFor": 0,
                "goalsAgainst": 6
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
              "teamId": 47,
              "team": "Tottenham",
              "rank": 19,
              "points": 2,
              "goalsDiff": -6,
              "form": "LDDLL",
              "all": {
                "played": 5,
                "wins": 0,
                "draws": 2,
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
                "goalsAgainst": 5
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
              "rank": 20,
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
            }
          ],
          "teams": [
            {
              "teamId": 35,
              "team": "Bournemouth",
              "form": "LDDD",
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
              "teamId": 40,
              "team": "Liverpool",
              "form": "DDWD",
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
            },
            {
              "teamId": 746,
              "team": "Sunderland",
              "form": "LWDL",
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
              "teamId": 63,
              "team": "Leeds",
              "form": "WDDW",
              "all": {
                "played": 4,
                "wins": 2,
                "draws": 2,
                "losses": 0,
                "goalsFor": 7,
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
                "played": 2,
                "wins": 1,
                "draws": 1,
                "losses": 0,
                "goalsFor": 2,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 52,
              "team": "Crystal Palace",
              "form": "LLWL",
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
              "teamId": 65,
              "team": "Nottingham Forest",
              "form": "LDDWL",
              "all": {
                "played": 5,
                "wins": 1,
                "draws": 2,
                "losses": 2,
                "goalsFor": 4,
                "goalsAgainst": 5
              },
              "home": {
                "played": 3,
                "wins": 0,
                "draws": 1,
                "losses": 2,
                "goalsFor": 0,
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
              "teamId": 1346,
              "team": "Coventry",
              "form": "LLLLW",
              "all": {
                "played": 5,
                "wins": 1,
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
                "goalsFor": 0,
                "goalsAgainst": 6
              },
              "away": {
                "played": 3,
                "wins": 1,
                "draws": 0,
                "losses": 2,
                "goalsFor": 1,
                "goalsAgainst": 4
              }
            }
          ],
          "fixtures": [
            {
              "fixtureId": 1557407,
              "kickoff": "2026-09-20T22:00:00+09:00",
              "status": "1H",
              "homeTeamId": 35,
              "homeTeam": "Bournemouth",
              "awayTeamId": 40,
              "awayTeam": "Liverpool",
              "injuriesChecked": true,
              "injuries": [
                {
                  "fixtureId": 1557407,
                  "teamId": 35,
                  "playerId": 129682,
                  "player": "A. Adli",
                  "type": "Missing Fixture",
                  "reason": "Calf Injury"
                },
                {
                  "fixtureId": 1557407,
                  "teamId": 35,
                  "playerId": 51051,
                  "player": "J. Araujo",
                  "type": "Missing Fixture",
                  "reason": "Thigh Injury"
                },
                {
                  "fixtureId": 1557407,
                  "teamId": 35,
                  "playerId": 368030,
                  "player": "E. J. Kroupi",
                  "type": "Missing Fixture",
                  "reason": "Foot Injury"
                },
                {
                  "fixtureId": 1557407,
                  "teamId": 35,
                  "playerId": 412719,
                  "player": "V. Milosavljevic",
                  "type": "Questionable",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1557407,
                  "teamId": 40,
                  "playerId": 180317,
                  "player": "C. Bradley",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1557407,
                  "teamId": 40,
                  "playerId": 30410,
                  "player": "F. Chiesa",
                  "type": "Missing Fixture",
                  "reason": "Back Injury"
                },
                {
                  "fixtureId": 1557407,
                  "teamId": 40,
                  "playerId": 174565,
                  "player": "H. Ekitike",
                  "type": "Missing Fixture",
                  "reason": "Achilles Tendon Injury"
                },
                {
                  "fixtureId": 1557407,
                  "teamId": 40,
                  "playerId": 409047,
                  "player": "G. Leoni",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1557407,
                  "teamId": 40,
                  "playerId": 284286,
                  "player": "I. Mabaya",
                  "type": "Questionable",
                  "reason": "Injury"
                }
              ],
              "lineupsChecked": true,
              "lineups": [
                {
                  "teamId": 35,
                  "team": "Bournemouth",
                  "formation": "4-2-3-1",
                  "coach": "M. Rose",
                  "starters": [
                    "Đ. Petrović",
                    "A. Smith",
                    "J. Hill",
                    "António Silva",
                    "A. Truffert",
                    "T. Adams",
                    "A. Scott",
                    "Rayan",
                    "R. Christie",
                    "M. Tavernier",
                    "Evanilson"
                  ]
                },
                {
                  "teamId": 40,
                  "team": "Liverpool",
                  "formation": "4-2-3-1",
                  "coach": "Andoni Iraola",
                  "starters": [
                    "Alisson Becker",
                    "R. Araújo",
                    "V. van Dijk",
                    "J. Jacquet",
                    "M. Kerkez",
                    "A. Mac Allister",
                    "D. Szoboszlai",
                    "B. Barcola",
                    "F. Wirtz",
                    "C. Gakpo",
                    "A. Isak"
                  ]
                }
              ]
            },
            {
              "fixtureId": 1557413,
              "kickoff": "2026-09-20T22:00:00+09:00",
              "status": "1H",
              "homeTeamId": 50,
              "homeTeam": "Manchester City",
              "awayTeamId": 746,
              "awayTeam": "Sunderland",
              "injuriesChecked": true,
              "injuries": [
                {
                  "fixtureId": 1557413,
                  "teamId": 50,
                  "playerId": 631,
                  "player": "P. Foden",
                  "type": "Missing Fixture",
                  "reason": "Red Card"
                },
                {
                  "fixtureId": 1557413,
                  "teamId": 50,
                  "playerId": 1422,
                  "player": "J. Doku",
                  "type": "Questionable",
                  "reason": "Calf Injury"
                },
                {
                  "fixtureId": 1557413,
                  "teamId": 746,
                  "playerId": 327631,
                  "player": "H. Diarra",
                  "type": "Missing Fixture",
                  "reason": "Hamstring Injury"
                },
                {
                  "fixtureId": 1557413,
                  "teamId": 746,
                  "playerId": 22225,
                  "player": "R. Mandava",
                  "type": "Missing Fixture",
                  "reason": "Red Card"
                },
                {
                  "fixtureId": 1557413,
                  "teamId": 746,
                  "playerId": 284414,
                  "player": "R. Mundle",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1557413,
                  "teamId": 746,
                  "playerId": 6168,
                  "player": "O. Alderete",
                  "type": "Questionable",
                  "reason": "Injury"
                }
              ],
              "lineupsChecked": true,
              "lineups": [
                {
                  "teamId": 50,
                  "team": "Manchester City",
                  "formation": "4-2-3-1",
                  "coach": "E. Maresca",
                  "starters": [
                    "G. Donnarumma",
                    "Matheus Nunes",
                    "Rúben Dias",
                    "M. Guéhi",
                    "J. Gvardiol",
                    "E. Fernández",
                    "E. Anderson",
                    "A. Semenyo",
                    "R. Cherki",
                    "I. Ndiaye",
                    "E. Haaland"
                  ]
                },
                {
                  "teamId": 746,
                  "team": "Sunderland",
                  "formation": "4-2-3-1",
                  "coach": "R. Le Bris",
                  "starters": [
                    "R. Roefs",
                    "N. Mukiele",
                    "K. Danso",
                    "D. Ballard",
                    "D. Methalie",
                    "G. Xhaka",
                    "N. Sadiki",
                    "T. Meunier",
                    "E. Le Fée",
                    "N. Angulo",
                    "B. Brobbey"
                  ]
                }
              ]
            },
            {
              "fixtureId": 1557412,
              "kickoff": "2026-09-20T22:00:00+09:00",
              "status": "1H",
              "homeTeamId": 63,
              "homeTeam": "Leeds",
              "awayTeamId": 52,
              "awayTeam": "Crystal Palace",
              "injuriesChecked": true,
              "injuries": [
                {
                  "fixtureId": 1557412,
                  "teamId": 63,
                  "playerId": 313059,
                  "player": "M. Joseph",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1557412,
                  "teamId": 63,
                  "playerId": 19321,
                  "player": "J. Rodon",
                  "type": "Missing Fixture",
                  "reason": "Muscle Injury"
                },
                {
                  "fixtureId": 1557412,
                  "teamId": 63,
                  "playerId": 19221,
                  "player": "H. Wilson",
                  "type": "Missing Fixture",
                  "reason": "Muscle Injury"
                },
                {
                  "fixtureId": 1557412,
                  "teamId": 52,
                  "playerId": 21998,
                  "player": "A. Disasi",
                  "type": "Missing Fixture",
                  "reason": "Red Card"
                },
                {
                  "fixtureId": 1557412,
                  "teamId": 52,
                  "playerId": 19088,
                  "player": "D. Henderson",
                  "type": "Missing Fixture",
                  "reason": "Foot Injury"
                },
                {
                  "fixtureId": 1557412,
                  "teamId": 52,
                  "playerId": 25927,
                  "player": "J. Mateta",
                  "type": "Missing Fixture",
                  "reason": "Hamstring Injury"
                },
                {
                  "fixtureId": 1557412,
                  "teamId": 52,
                  "playerId": 278898,
                  "player": "C. Riad",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                }
              ],
              "lineupsChecked": true,
              "lineups": [
                {
                  "teamId": 63,
                  "team": "Leeds",
                  "formation": "3-5-2",
                  "coach": "D. Farke",
                  "starters": [
                    "J. Trafford",
                    "J. Justin",
                    "N. Elvedi",
                    "T. Muharemović",
                    "J. Bogle",
                    "A. Stach",
                    "E. Ampadu",
                    "A. Tanaka",
                    "G. Gudmundsson",
                    "D. Calvert-Lewin",
                    "N. Okafor"
                  ]
                },
                {
                  "teamId": 52,
                  "team": "Crystal Palace",
                  "formation": "3-4-2-1",
                  "coach": "P. Sage",
                  "starters": [
                    "W. Benítez",
                    "J. Canvot",
                    "C. Richards",
                    "T. Tomiyasu",
                    "A. Khalaili",
                    "Q. Timber",
                    "A. Wharton",
                    "T. Mitchell",
                    "D. Kamada",
                    "Yeremy Pino",
                    "J. Strand Larsen"
                  ]
                }
              ]
            },
            {
              "fixtureId": 1557415,
              "kickoff": "2026-09-20T01:30:00+09:00",
              "status": "FT",
              "homeTeamId": 65,
              "homeTeam": "Nottingham Forest",
              "awayTeamId": 1346,
              "awayTeam": "Coventry",
              "injuriesChecked": true,
              "injuries": [
                {
                  "fixtureId": 1557415,
                  "teamId": 65,
                  "playerId": 2817,
                  "player": "N. Milenkovic",
                  "type": "Missing Fixture",
                  "reason": "Muscle Injury"
                },
                {
                  "fixtureId": 1557415,
                  "teamId": 65,
                  "playerId": 181806,
                  "player": "N. Savona",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1557415,
                  "teamId": 1346,
                  "playerId": 162414,
                  "player": "A. Amenda",
                  "type": "Missing Fixture",
                  "reason": "Calf Injury"
                },
                {
                  "fixtureId": 1557415,
                  "teamId": 1346,
                  "playerId": 8598,
                  "player": "T. Awoniyi",
                  "type": "Missing Fixture",
                  "reason": "Red Card"
                },
                {
                  "fixtureId": 1557415,
                  "teamId": 1346,
                  "playerId": 19984,
                  "player": "J. Eccles",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1557415,
                  "teamId": 1346,
                  "playerId": 298128,
                  "player": "K. Kesler-Hayden",
                  "type": "Missing Fixture",
                  "reason": "Muscle Injury"
                },
                {
                  "fixtureId": 1557415,
                  "teamId": 1346,
                  "playerId": 17714,
                  "player": "L. Woolfenden",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1557415,
                  "teamId": 1346,
                  "playerId": 427,
                  "player": "H. Wright",
                  "type": "Missing Fixture",
                  "reason": "Muscle Injury"
                }
              ],
              "lineupsChecked": false,
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
              "points": 17,
              "goalsDiff": 7,
              "form": "WWLDW",
              "all": {
                "played": 8,
                "wins": 5,
                "draws": 2,
                "losses": 1,
                "goalsFor": 13,
                "goalsAgainst": 6
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
                "played": 4,
                "wins": 3,
                "draws": 0,
                "losses": 1,
                "goalsFor": 8,
                "goalsAgainst": 5
              }
            },
            {
              "teamId": 48,
              "team": "West Ham",
              "rank": 2,
              "points": 15,
              "goalsDiff": 11,
              "form": "DWWWW",
              "all": {
                "played": 8,
                "wins": 4,
                "draws": 3,
                "losses": 1,
                "goalsFor": 22,
                "goalsAgainst": 11
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
                "played": 4,
                "wins": 1,
                "draws": 3,
                "losses": 0,
                "goalsFor": 8,
                "goalsAgainst": 7
              }
            },
            {
              "teamId": 70,
              "team": "Middlesbrough",
              "rank": 3,
              "points": 15,
              "goalsDiff": 4,
              "form": "DDWWD",
              "all": {
                "played": 8,
                "wins": 4,
                "draws": 3,
                "losses": 1,
                "goalsFor": 16,
                "goalsAgainst": 12
              },
              "home": {
                "played": 4,
                "wins": 3,
                "draws": 1,
                "losses": 0,
                "goalsFor": 11,
                "goalsAgainst": 7
              },
              "away": {
                "played": 4,
                "wins": 1,
                "draws": 2,
                "losses": 1,
                "goalsFor": 5,
                "goalsAgainst": 5
              }
            },
            {
              "teamId": 60,
              "team": "West Brom",
              "rank": 4,
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
              "teamId": 72,
              "team": "QPR",
              "rank": 5,
              "points": 13,
              "goalsDiff": 3,
              "form": "DDDLW",
              "all": {
                "played": 8,
                "wins": 3,
                "draws": 4,
                "losses": 1,
                "goalsFor": 10,
                "goalsAgainst": 7
              },
              "home": {
                "played": 4,
                "wins": 1,
                "draws": 2,
                "losses": 1,
                "goalsFor": 4,
                "goalsAgainst": 4
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
              "teamId": 75,
              "team": "Stoke City",
              "rank": 6,
              "points": 13,
              "goalsDiff": 1,
              "form": "WWDWW",
              "all": {
                "played": 8,
                "wins": 4,
                "draws": 1,
                "losses": 3,
                "goalsFor": 13,
                "goalsAgainst": 12
              },
              "home": {
                "played": 4,
                "wins": 3,
                "draws": 0,
                "losses": 1,
                "goalsFor": 8,
                "goalsAgainst": 3
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
              "rank": 7,
              "points": 13,
              "goalsDiff": -1,
              "form": "WLLWW",
              "all": {
                "played": 8,
                "wins": 4,
                "draws": 1,
                "losses": 3,
                "goalsFor": 11,
                "goalsAgainst": 12
              },
              "home": {
                "played": 4,
                "wins": 2,
                "draws": 0,
                "losses": 2,
                "goalsFor": 3,
                "goalsAgainst": 4
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
              "teamId": 1335,
              "team": "Charlton",
              "rank": 8,
              "points": 12,
              "goalsDiff": -3,
              "form": "LDDLD",
              "all": {
                "played": 8,
                "wins": 3,
                "draws": 3,
                "losses": 2,
                "goalsFor": 7,
                "goalsAgainst": 10
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
                "played": 4,
                "wins": 1,
                "draws": 1,
                "losses": 2,
                "goalsFor": 4,
                "goalsAgainst": 9
              }
            },
            {
              "teamId": 39,
              "team": "Wolves",
              "rank": 9,
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
              "teamId": 54,
              "team": "Birmingham",
              "rank": 10,
              "points": 11,
              "goalsDiff": 1,
              "form": "DWLDD",
              "all": {
                "played": 8,
                "wins": 2,
                "draws": 5,
                "losses": 1,
                "goalsFor": 12,
                "goalsAgainst": 11
              },
              "home": {
                "played": 4,
                "wins": 0,
                "draws": 4,
                "losses": 0,
                "goalsFor": 7,
                "goalsAgainst": 7
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
              "teamId": 58,
              "team": "Millwall",
              "rank": 11,
              "points": 11,
              "goalsDiff": 0,
              "form": "DDLWL",
              "all": {
                "played": 8,
                "wins": 3,
                "draws": 2,
                "losses": 3,
                "goalsFor": 15,
                "goalsAgainst": 15
              },
              "home": {
                "played": 4,
                "wins": 2,
                "draws": 1,
                "losses": 1,
                "goalsFor": 9,
                "goalsAgainst": 5
              },
              "away": {
                "played": 4,
                "wins": 1,
                "draws": 1,
                "losses": 2,
                "goalsFor": 6,
                "goalsAgainst": 10
              }
            },
            {
              "teamId": 1379,
              "team": "Lincoln",
              "rank": 12,
              "points": 11,
              "goalsDiff": -1,
              "form": "LWWDD",
              "all": {
                "played": 8,
                "wins": 3,
                "draws": 2,
                "losses": 3,
                "goalsFor": 7,
                "goalsAgainst": 8
              },
              "home": {
                "played": 4,
                "wins": 0,
                "draws": 2,
                "losses": 2,
                "goalsFor": 3,
                "goalsAgainst": 6
              },
              "away": {
                "played": 4,
                "wins": 3,
                "draws": 0,
                "losses": 1,
                "goalsFor": 4,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 41,
              "team": "Southampton",
              "rank": 13,
              "points": 10,
              "goalsDiff": 9,
              "form": "LWWDD",
              "all": {
                "played": 8,
                "wins": 4,
                "draws": 2,
                "losses": 2,
                "goalsFor": 19,
                "goalsAgainst": 10
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
                "played": 4,
                "wins": 0,
                "draws": 2,
                "losses": 2,
                "goalsFor": 4,
                "goalsAgainst": 6
              }
            },
            {
              "teamId": 1837,
              "team": "Wrexham",
              "rank": 14,
              "points": 10,
              "goalsDiff": -3,
              "form": "WLDDW",
              "all": {
                "played": 8,
                "wins": 2,
                "draws": 4,
                "losses": 2,
                "goalsFor": 9,
                "goalsAgainst": 12
              },
              "home": {
                "played": 4,
                "wins": 1,
                "draws": 2,
                "losses": 1,
                "goalsFor": 5,
                "goalsAgainst": 5
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
              "teamId": 71,
              "team": "Norwich",
              "rank": 15,
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
              "teamId": 67,
              "team": "Blackburn",
              "rank": 16,
              "points": 9,
              "goalsDiff": 0,
              "form": "DWLLD",
              "all": {
                "played": 8,
                "wins": 2,
                "draws": 3,
                "losses": 3,
                "goalsFor": 12,
                "goalsAgainst": 12
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
                "played": 4,
                "wins": 0,
                "draws": 3,
                "losses": 1,
                "goalsFor": 5,
                "goalsAgainst": 6
              }
            },
            {
              "teamId": 62,
              "team": "Sheffield Utd",
              "rank": 17,
              "points": 9,
              "goalsDiff": -2,
              "form": "LLWLW",
              "all": {
                "played": 8,
                "wins": 2,
                "draws": 3,
                "losses": 3,
                "goalsFor": 9,
                "goalsAgainst": 11
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
                "played": 4,
                "wins": 1,
                "draws": 2,
                "losses": 1,
                "goalsFor": 5,
                "goalsAgainst": 5
              }
            },
            {
              "teamId": 1355,
              "team": "Portsmouth",
              "rank": 18,
              "points": 8,
              "goalsDiff": -1,
              "form": "DDWLL",
              "all": {
                "played": 7,
                "wins": 2,
                "draws": 2,
                "losses": 3,
                "goalsFor": 9,
                "goalsAgainst": 10
              },
              "home": {
                "played": 4,
                "wins": 1,
                "draws": 1,
                "losses": 2,
                "goalsFor": 5,
                "goalsAgainst": 7
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
              "teamId": 38,
              "team": "Watford",
              "rank": 19,
              "points": 8,
              "goalsDiff": -3,
              "form": "LLWLL",
              "all": {
                "played": 8,
                "wins": 2,
                "draws": 2,
                "losses": 4,
                "goalsFor": 7,
                "goalsAgainst": 10
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
                "played": 4,
                "wins": 0,
                "draws": 1,
                "losses": 3,
                "goalsFor": 1,
                "goalsAgainst": 5
              }
            },
            {
              "teamId": 43,
              "team": "Cardiff",
              "rank": 20,
              "points": 7,
              "goalsDiff": -2,
              "form": "WLDLL",
              "all": {
                "played": 8,
                "wins": 1,
                "draws": 4,
                "losses": 3,
                "goalsFor": 10,
                "goalsAgainst": 12
              },
              "home": {
                "played": 4,
                "wins": 1,
                "draws": 3,
                "losses": 0,
                "goalsFor": 7,
                "goalsAgainst": 5
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
              "teamId": 68,
              "team": "Bolton",
              "rank": 21,
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
              "teamId": 69,
              "team": "Derby",
              "rank": 22,
              "points": 5,
              "goalsDiff": -7,
              "form": "DLLLW",
              "all": {
                "played": 8,
                "wins": 1,
                "draws": 2,
                "losses": 5,
                "goalsFor": 7,
                "goalsAgainst": 14
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
                "played": 4,
                "wins": 1,
                "draws": 1,
                "losses": 2,
                "goalsFor": 4,
                "goalsAgainst": 6
              }
            },
            {
              "teamId": 59,
              "team": "Preston",
              "rank": 23,
              "points": 4,
              "goalsDiff": -7,
              "form": "DLLWL",
              "all": {
                "played": 8,
                "wins": 1,
                "draws": 1,
                "losses": 6,
                "goalsFor": 8,
                "goalsAgainst": 15
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
                "played": 4,
                "wins": 0,
                "draws": 1,
                "losses": 3,
                "goalsFor": 4,
                "goalsAgainst": 7
              }
            },
            {
              "teamId": 44,
              "team": "Burnley",
              "rank": 24,
              "points": 4,
              "goalsDiff": -8,
              "form": "DLDLD",
              "all": {
                "played": 8,
                "wins": 0,
                "draws": 4,
                "losses": 4,
                "goalsFor": 9,
                "goalsAgainst": 17
              },
              "home": {
                "played": 4,
                "wins": 0,
                "draws": 3,
                "losses": 1,
                "goalsFor": 5,
                "goalsAgainst": 6
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
              "teamId": 71,
              "team": "Norwich",
              "form": "LLWLWWL",
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
              "teamId": 68,
              "team": "Bolton",
              "form": "WDLLLLW",
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
              "teamId": 39,
              "team": "Wolves",
              "form": "DWWLDW",
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
              "teamId": 60,
              "team": "West Brom",
              "form": "WWLDWWD",
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
            }
          ],
          "fixtures": [
            {
              "fixtureId": 1563173,
              "kickoff": "2026-09-20T21:30:00+09:00",
              "status": "1H",
              "homeTeamId": 71,
              "homeTeam": "Norwich",
              "awayTeamId": 68,
              "awayTeam": "Bolton",
              "injuriesChecked": true,
              "injuries": [
                {
                  "fixtureId": 1563173,
                  "teamId": 71,
                  "playerId": 362145,
                  "player": "A. Ahmed",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1563173,
                  "teamId": 71,
                  "playerId": 383773,
                  "player": "L. Mahovo",
                  "type": "Missing Fixture",
                  "reason": "Ankle Injury"
                },
                {
                  "fixtureId": 1563173,
                  "teamId": 71,
                  "playerId": 45947,
                  "player": "M. Topic",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1563173,
                  "teamId": 68,
                  "playerId": 138929,
                  "player": "L. Brunt",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1563173,
                  "teamId": 68,
                  "playerId": 320843,
                  "player": "C. Forino-Joseph",
                  "type": "Missing Fixture",
                  "reason": "Groin Injury"
                },
                {
                  "fixtureId": 1563173,
                  "teamId": 68,
                  "playerId": 284367,
                  "player": "L. Stephenson",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                }
              ],
              "lineupsChecked": true,
              "lineups": [
                {
                  "teamId": 71,
                  "team": "Norwich",
                  "formation": "4-2-3-1",
                  "coach": "P. Clement",
                  "starters": [
                    "V. Kovačević",
                    "J. Stacey",
                    "Ruairi McConville",
                    "J. Córdoba",
                    "B. Chrisene",
                    "K. McLean",
                    "P. Mattsson",
                    "A. Brooks",
                    "A. Musaba",
                    "O. Schwartau",
                    "M. Touré"
                  ]
                },
                {
                  "teamId": 68,
                  "team": "Bolton",
                  "formation": "4-2-3-1",
                  "coach": "S. Schumacher",
                  "starters": [
                    "G. Bazunu",
                    "Gaizka Larrazabal",
                    "E. Toal",
                    "B. Davies",
                    "M. Conway",
                    "J. Sheehan",
                    "E. Erhahon",
                    "K. Dong",
                    "Ruben Rodrigues",
                    "T. Gale",
                    "S. Dalby"
                  ]
                }
              ]
            },
            {
              "fixtureId": 1563177,
              "kickoff": "2026-09-20T20:00:00+09:00",
              "status": "FT",
              "homeTeamId": 39,
              "homeTeam": "Wolves",
              "awayTeamId": 60,
              "awayTeam": "West Brom",
              "injuriesChecked": true,
              "injuries": [
                {
                  "fixtureId": 1563177,
                  "teamId": 39,
                  "playerId": 2887,
                  "player": "R. Jimenez",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1563177,
                  "teamId": 39,
                  "playerId": 195717,
                  "player": "Y. Mosquera",
                  "type": "Missing Fixture",
                  "reason": "Ankle Injury"
                },
                {
                  "fixtureId": 1563177,
                  "teamId": 39,
                  "playerId": 194116,
                  "player": "R. Said",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1563177,
                  "teamId": 60,
                  "playerId": 333078,
                  "player": "N. Galves",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1563177,
                  "teamId": 60,
                  "playerId": 1137,
                  "player": "M. Johnston",
                  "type": "Missing Fixture",
                  "reason": "Broken Leg"
                }
              ],
              "lineupsChecked": true,
              "lineups": [
                {
                  "teamId": 39,
                  "team": "Wolves",
                  "formation": "4-2-3-1",
                  "coach": "César Peixoto",
                  "starters": [
                    "José Sá",
                    "K. Trippier",
                    "N. Djiga",
                    "Toti Gomes",
                    "Hugo Bueno",
                    "André",
                    "M. Munetsi",
                    "Rodrigo Gomes",
                    "Fer López",
                    "M. Mane",
                    "A. Armstrong"
                  ]
                },
                {
                  "teamId": 60,
                  "team": "West Brom",
                  "formation": "4-4-2",
                  "coach": "J. Morrison",
                  "starters": [
                    "M. O’Leary",
                    "C. Styles",
                    "N. Phillips",
                    "G. Campbell",
                    "C. Townsend",
                    "Harry Whitwell",
                    "J. Molumby",
                    "O. Diakité",
                    "I. Price",
                    "A. Heggebø",
                    "J. Morgan"
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
              "points": 21,
              "goalsDiff": 24,
              "form": "WWWWW",
              "all": {
                "played": 7,
                "wins": 7,
                "draws": 0,
                "losses": 0,
                "goalsFor": 31,
                "goalsAgainst": 7
              },
              "home": {
                "played": 3,
                "wins": 3,
                "draws": 0,
                "losses": 0,
                "goalsFor": 14,
                "goalsAgainst": 4
              },
              "away": {
                "played": 4,
                "wins": 4,
                "draws": 0,
                "losses": 0,
                "goalsFor": 17,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 541,
              "team": "Real Madrid",
              "rank": 2,
              "points": 15,
              "goalsDiff": 11,
              "form": "WWLWW",
              "all": {
                "played": 6,
                "wins": 5,
                "draws": 0,
                "losses": 1,
                "goalsFor": 17,
                "goalsAgainst": 6
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
                "played": 3,
                "wins": 2,
                "draws": 0,
                "losses": 1,
                "goalsFor": 5,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 543,
              "team": "Real Betis",
              "rank": 3,
              "points": 15,
              "goalsDiff": 2,
              "form": "WWWLW",
              "all": {
                "played": 6,
                "wins": 5,
                "draws": 0,
                "losses": 1,
                "goalsFor": 8,
                "goalsAgainst": 6
              },
              "home": {
                "played": 3,
                "wins": 3,
                "draws": 0,
                "losses": 0,
                "goalsFor": 3,
                "goalsAgainst": 0
              },
              "away": {
                "played": 3,
                "wins": 2,
                "draws": 0,
                "losses": 1,
                "goalsFor": 5,
                "goalsAgainst": 6
              }
            },
            {
              "teamId": 530,
              "team": "Atletico Madrid",
              "rank": 4,
              "points": 13,
              "goalsDiff": 8,
              "form": "WWLWD",
              "all": {
                "played": 6,
                "wins": 4,
                "draws": 1,
                "losses": 1,
                "goalsFor": 14,
                "goalsAgainst": 6
              },
              "home": {
                "played": 3,
                "wins": 2,
                "draws": 1,
                "losses": 0,
                "goalsFor": 8,
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
              "points": 13,
              "goalsDiff": 1,
              "form": "LWWDL",
              "all": {
                "played": 7,
                "wins": 4,
                "draws": 1,
                "losses": 2,
                "goalsFor": 10,
                "goalsAgainst": 9
              },
              "home": {
                "played": 4,
                "wins": 2,
                "draws": 0,
                "losses": 2,
                "goalsFor": 5,
                "goalsAgainst": 7
              },
              "away": {
                "played": 3,
                "wins": 2,
                "draws": 1,
                "losses": 0,
                "goalsFor": 5,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 542,
              "team": "Alaves",
              "rank": 6,
              "points": 11,
              "goalsDiff": 5,
              "form": "DLLWW",
              "all": {
                "played": 7,
                "wins": 3,
                "draws": 2,
                "losses": 2,
                "goalsFor": 11,
                "goalsAgainst": 6
              },
              "home": {
                "played": 4,
                "wins": 3,
                "draws": 0,
                "losses": 1,
                "goalsFor": 9,
                "goalsAgainst": 3
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
              "teamId": 544,
              "team": "Deportivo La Coruna",
              "rank": 7,
              "points": 9,
              "goalsDiff": 2,
              "form": "LDWWD",
              "all": {
                "played": 6,
                "wins": 2,
                "draws": 3,
                "losses": 1,
                "goalsFor": 9,
                "goalsAgainst": 7
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
                "draws": 2,
                "losses": 0,
                "goalsFor": 5,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 531,
              "team": "Athletic Club",
              "rank": 8,
              "points": 8,
              "goalsDiff": 1,
              "form": "DDWWL",
              "all": {
                "played": 6,
                "wins": 2,
                "draws": 2,
                "losses": 2,
                "goalsFor": 7,
                "goalsAgainst": 6
              },
              "home": {
                "played": 4,
                "wins": 1,
                "draws": 2,
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
              "teamId": 728,
              "team": "Rayo Vallecano",
              "rank": 9,
              "points": 8,
              "goalsDiff": -5,
              "form": "DWLWL",
              "all": {
                "played": 7,
                "wins": 2,
                "draws": 2,
                "losses": 3,
                "goalsFor": 11,
                "goalsAgainst": 16
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
                "played": 4,
                "wins": 0,
                "draws": 1,
                "losses": 3,
                "goalsFor": 5,
                "goalsAgainst": 12
              }
            },
            {
              "teamId": 727,
              "team": "Osasuna",
              "rank": 10,
              "points": 8,
              "goalsDiff": -7,
              "form": "DLLLW",
              "all": {
                "played": 7,
                "wins": 2,
                "draws": 2,
                "losses": 3,
                "goalsFor": 6,
                "goalsAgainst": 13
              },
              "home": {
                "played": 4,
                "wins": 1,
                "draws": 2,
                "losses": 1,
                "goalsFor": 2,
                "goalsAgainst": 3
              },
              "away": {
                "played": 3,
                "wins": 1,
                "draws": 0,
                "losses": 2,
                "goalsFor": 4,
                "goalsAgainst": 10
              }
            },
            {
              "teamId": 538,
              "team": "Celta Vigo",
              "rank": 11,
              "points": 7,
              "goalsDiff": 2,
              "form": "WDDDL",
              "all": {
                "played": 7,
                "wins": 1,
                "draws": 4,
                "losses": 2,
                "goalsFor": 8,
                "goalsAgainst": 6
              },
              "home": {
                "played": 4,
                "wins": 1,
                "draws": 1,
                "losses": 2,
                "goalsFor": 7,
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
              "teamId": 540,
              "team": "Espanyol",
              "rank": 12,
              "points": 7,
              "goalsDiff": 0,
              "form": "LLWDL",
              "all": {
                "played": 7,
                "wins": 2,
                "draws": 1,
                "losses": 4,
                "goalsFor": 10,
                "goalsAgainst": 10
              },
              "home": {
                "played": 4,
                "wins": 1,
                "draws": 1,
                "losses": 2,
                "goalsFor": 6,
                "goalsAgainst": 6
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
              "teamId": 548,
              "team": "Real Sociedad",
              "rank": 13,
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
              "teamId": 4665,
              "team": "Racing Santander",
              "rank": 14,
              "points": 7,
              "goalsDiff": -10,
              "form": "LLWLW",
              "all": {
                "played": 7,
                "wins": 2,
                "draws": 1,
                "losses": 4,
                "goalsFor": 11,
                "goalsAgainst": 21
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
                "played": 4,
                "wins": 0,
                "draws": 0,
                "losses": 4,
                "goalsFor": 4,
                "goalsAgainst": 16
              }
            },
            {
              "teamId": 533,
              "team": "Villarreal",
              "rank": 15,
              "points": 5,
              "goalsDiff": -1,
              "form": "WLLLD",
              "all": {
                "played": 6,
                "wins": 1,
                "draws": 2,
                "losses": 3,
                "goalsFor": 10,
                "goalsAgainst": 11
              },
              "home": {
                "played": 2,
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 3,
                "goalsAgainst": 5
              },
              "away": {
                "played": 4,
                "wins": 1,
                "draws": 2,
                "losses": 1,
                "goalsFor": 7,
                "goalsAgainst": 6
              }
            },
            {
              "teamId": 539,
              "team": "Levante",
              "rank": 16,
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
              "rank": 17,
              "points": 5,
              "goalsDiff": -4,
              "form": "LDDLW",
              "all": {
                "played": 6,
                "wins": 1,
                "draws": 2,
                "losses": 3,
                "goalsFor": 3,
                "goalsAgainst": 7
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
                "played": 3,
                "wins": 0,
                "draws": 0,
                "losses": 3,
                "goalsFor": 0,
                "goalsAgainst": 5
              }
            },
            {
              "teamId": 797,
              "team": "Elche",
              "rank": 18,
              "points": 5,
              "goalsDiff": -6,
              "form": "WLDLL",
              "all": {
                "played": 7,
                "wins": 1,
                "draws": 2,
                "losses": 4,
                "goalsFor": 11,
                "goalsAgainst": 17
              },
              "home": {
                "played": 3,
                "wins": 0,
                "draws": 0,
                "losses": 3,
                "goalsFor": 4,
                "goalsAgainst": 11
              },
              "away": {
                "played": 4,
                "wins": 1,
                "draws": 2,
                "losses": 1,
                "goalsFor": 7,
                "goalsAgainst": 6
              }
            },
            {
              "teamId": 532,
              "team": "Valencia",
              "rank": 19,
              "points": 4,
              "goalsDiff": -8,
              "form": "WLLLL",
              "all": {
                "played": 6,
                "wins": 1,
                "draws": 1,
                "losses": 4,
                "goalsFor": 2,
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
                "played": 3,
                "wins": 1,
                "draws": 0,
                "losses": 2,
                "goalsFor": 2,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 535,
              "team": "Malaga",
              "rank": 20,
              "points": 3,
              "goalsDiff": -8,
              "form": "LDDLD",
              "all": {
                "played": 6,
                "wins": 0,
                "draws": 3,
                "losses": 3,
                "goalsFor": 3,
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
                "wins": 0,
                "draws": 1,
                "losses": 2,
                "goalsFor": 1,
                "goalsAgainst": 7
              }
            }
          ],
          "teams": [
            {
              "teamId": 546,
              "team": "Getafe",
              "form": "LWLDDL",
              "all": {
                "played": 6,
                "wins": 1,
                "draws": 2,
                "losses": 3,
                "goalsFor": 3,
                "goalsAgainst": 7
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
                "played": 3,
                "wins": 0,
                "draws": 0,
                "losses": 3,
                "goalsFor": 0,
                "goalsAgainst": 5
              }
            },
            {
              "teamId": 535,
              "team": "Malaga",
              "form": "LDLDDL",
              "all": {
                "played": 6,
                "wins": 0,
                "draws": 3,
                "losses": 3,
                "goalsFor": 3,
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
                "wins": 0,
                "draws": 1,
                "losses": 2,
                "goalsFor": 1,
                "goalsAgainst": 7
              }
            },
            {
              "teamId": 538,
              "team": "Celta Vigo",
              "form": "DLLDDDW",
              "all": {
                "played": 7,
                "wins": 1,
                "draws": 4,
                "losses": 2,
                "goalsFor": 8,
                "goalsAgainst": 6
              },
              "home": {
                "played": 4,
                "wins": 1,
                "draws": 1,
                "losses": 2,
                "goalsFor": 7,
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
              "teamId": 4665,
              "team": "Racing Santander",
              "form": "DLWLWLL",
              "all": {
                "played": 7,
                "wins": 2,
                "draws": 1,
                "losses": 4,
                "goalsFor": 11,
                "goalsAgainst": 21
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
                "played": 4,
                "wins": 0,
                "draws": 0,
                "losses": 4,
                "goalsFor": 4,
                "goalsAgainst": 16
              }
            },
            {
              "teamId": 536,
              "team": "Sevilla",
              "form": "WWLDWWL",
              "all": {
                "played": 7,
                "wins": 4,
                "draws": 1,
                "losses": 2,
                "goalsFor": 10,
                "goalsAgainst": 9
              },
              "home": {
                "played": 4,
                "wins": 2,
                "draws": 0,
                "losses": 2,
                "goalsFor": 5,
                "goalsAgainst": 7
              },
              "away": {
                "played": 3,
                "wins": 2,
                "draws": 1,
                "losses": 0,
                "goalsFor": 5,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 529,
              "team": "Barcelona",
              "form": "WWWWWWW",
              "all": {
                "played": 7,
                "wins": 7,
                "draws": 0,
                "losses": 0,
                "goalsFor": 31,
                "goalsAgainst": 7
              },
              "home": {
                "played": 3,
                "wins": 3,
                "draws": 0,
                "losses": 0,
                "goalsFor": 14,
                "goalsAgainst": 4
              },
              "away": {
                "played": 4,
                "wins": 4,
                "draws": 0,
                "losses": 0,
                "goalsFor": 17,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 530,
              "team": "Atletico Madrid",
              "form": "WDWLWW",
              "all": {
                "played": 6,
                "wins": 4,
                "draws": 1,
                "losses": 1,
                "goalsFor": 14,
                "goalsAgainst": 6
              },
              "home": {
                "played": 3,
                "wins": 2,
                "draws": 1,
                "losses": 0,
                "goalsFor": 8,
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
              "teamId": 541,
              "team": "Real Madrid",
              "form": "WWWLWW",
              "all": {
                "played": 6,
                "wins": 5,
                "draws": 0,
                "losses": 1,
                "goalsFor": 17,
                "goalsAgainst": 6
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
                "played": 3,
                "wins": 2,
                "draws": 0,
                "losses": 1,
                "goalsFor": 5,
                "goalsAgainst": 4
              }
            }
          ],
          "fixtures": [
            {
              "fixtureId": 1570398,
              "kickoff": "2026-09-20T21:00:00+09:00",
              "status": "HT",
              "homeTeamId": 546,
              "homeTeam": "Getafe",
              "awayTeamId": 535,
              "awayTeam": "Malaga",
              "injuriesChecked": true,
              "injuries": [
                {
                  "fixtureId": 1570398,
                  "teamId": 546,
                  "playerId": 46813,
                  "player": "A. Abqar",
                  "type": "Missing Fixture",
                  "reason": "Muscle Injury"
                },
                {
                  "fixtureId": 1570398,
                  "teamId": 546,
                  "playerId": 47320,
                  "player": "Juanmi",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1570398,
                  "teamId": 546,
                  "playerId": 18794,
                  "player": "Kiko Femenia",
                  "type": "Missing Fixture",
                  "reason": "Hamstring Injury"
                },
                {
                  "fixtureId": 1570398,
                  "teamId": 546,
                  "playerId": 343205,
                  "player": "M. Martin",
                  "type": "Missing Fixture",
                  "reason": "Red Card"
                },
                {
                  "fixtureId": 1570398,
                  "teamId": 546,
                  "playerId": 403554,
                  "player": "C. Uche",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1570398,
                  "teamId": 535,
                  "playerId": 15797,
                  "player": "J. Cajuste",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1570398,
                  "teamId": 535,
                  "playerId": 328192,
                  "player": "M. Diarra",
                  "type": "Missing Fixture",
                  "reason": "Calf Injury"
                },
                {
                  "fixtureId": 1570398,
                  "teamId": 535,
                  "playerId": 182602,
                  "player": "J. Lobete",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1570398,
                  "teamId": 535,
                  "playerId": 185234,
                  "player": "D. Murillo",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1570398,
                  "teamId": 535,
                  "playerId": 444451,
                  "player": "A. Ochoa",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1570398,
                  "teamId": 535,
                  "playerId": 431921,
                  "player": "A. Aznou",
                  "type": "Questionable",
                  "reason": "Muscle Injury"
                },
                {
                  "fixtureId": 1570398,
                  "teamId": 535,
                  "playerId": 47478,
                  "player": "F. Calero",
                  "type": "Questionable",
                  "reason": "Ribs Injury"
                }
              ],
              "lineupsChecked": true,
              "lineups": [
                {
                  "teamId": 546,
                  "team": "Getafe",
                  "formation": "4-5-1",
                  "coach": "Pepe Bordalás",
                  "starters": [
                    "David Soria",
                    "Andrés García",
                    "D. Dakonam",
                    "Z. Romero",
                    "J. Mojica",
                    "Iván Azón",
                    "Ramón Terrats",
                    "N. Gudelj",
                    "Francho Serrano",
                    "M. Satriano",
                    "E. Ünal"
                  ]
                },
                {
                  "teamId": 535,
                  "team": "Malaga",
                  "formation": "4-1-4-1",
                  "coach": "Funes",
                  "starters": [
                    "Alfonso Herrero",
                    "Rafita",
                    "Ángel Recio",
                    "Juan Berrocal",
                    "José Salinas",
                    "Rafa Rodríguez",
                    "David Larrubia",
                    "Carlos Dotor",
                    "Dani Lorenzo",
                    "Joaquín Muñoz",
                    "Eneko Jauregi"
                  ]
                }
              ]
            },
            {
              "fixtureId": 1570395,
              "kickoff": "2026-09-20T01:30:00+09:00",
              "status": "FT",
              "homeTeamId": 538,
              "homeTeam": "Celta Vigo",
              "awayTeamId": 4665,
              "awayTeam": "Racing Santander",
              "injuriesChecked": true,
              "injuries": [
                {
                  "fixtureId": 1570395,
                  "teamId": 538,
                  "playerId": 481678,
                  "player": "A. Antanon",
                  "type": "Missing Fixture",
                  "reason": "Ankle Injury"
                },
                {
                  "fixtureId": 1570395,
                  "teamId": 538,
                  "playerId": 47445,
                  "player": "I. Aspas",
                  "type": "Missing Fixture",
                  "reason": "Muscle Injury"
                },
                {
                  "fixtureId": 1570395,
                  "teamId": 538,
                  "playerId": 351913,
                  "player": "J. El Abdellaoui",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1570395,
                  "teamId": 4665,
                  "playerId": 408875,
                  "player": "S. Eriksson",
                  "type": "Missing Fixture",
                  "reason": "Shoulder Injury"
                },
                {
                  "fixtureId": 1570395,
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
              "fixtureId": 1570400,
              "kickoff": "2026-09-20T04:00:00+09:00",
              "status": "FT",
              "homeTeamId": 536,
              "homeTeam": "Sevilla",
              "awayTeamId": 529,
              "awayTeam": "Barcelona",
              "injuriesChecked": true,
              "injuries": [
                {
                  "fixtureId": 1570400,
                  "teamId": 536,
                  "playerId": 322560,
                  "player": "L. Stassin",
                  "type": "Missing Fixture",
                  "reason": "Muscle Injury"
                },
                {
                  "fixtureId": 1570400,
                  "teamId": 536,
                  "playerId": 48471,
                  "player": "R. Vargas",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1570400,
                  "teamId": 529,
                  "playerId": 338958,
                  "player": "R. Bardghji",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1570400,
                  "teamId": 529,
                  "playerId": 182718,
                  "player": "J. Garcia",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1570400,
                  "teamId": 529,
                  "playerId": 538,
                  "player": "F. de Jong",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                }
              ],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1570394,
              "kickoff": "2026-09-20T23:15:00+09:00",
              "status": "NS",
              "homeTeamId": 530,
              "homeTeam": "Atletico Madrid",
              "awayTeamId": 541,
              "awayTeam": "Real Madrid",
              "injuriesChecked": true,
              "injuries": [
                {
                  "fixtureId": 1570394,
                  "teamId": 530,
                  "playerId": 336594,
                  "player": "P. Barrios",
                  "type": "Missing Fixture",
                  "reason": "Muscle Injury"
                },
                {
                  "fixtureId": 1570394,
                  "teamId": 530,
                  "playerId": 8492,
                  "player": "A. Sorloth",
                  "type": "Missing Fixture",
                  "reason": "Muscle Injury"
                },
                {
                  "fixtureId": 1570394,
                  "teamId": 541,
                  "playerId": 372,
                  "player": "Eder Militao",
                  "type": "Missing Fixture",
                  "reason": "Hamstring Injury"
                },
                {
                  "fixtureId": 1570394,
                  "teamId": 541,
                  "playerId": 653,
                  "player": "F. Mendy",
                  "type": "Missing Fixture",
                  "reason": "Hip Injury"
                },
                {
                  "fixtureId": 1570394,
                  "teamId": 541,
                  "playerId": 10009,
                  "player": "Rodrygo",
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
              "points": 13,
              "goalsDiff": 11,
              "form": "DWWWW",
              "all": {
                "played": 5,
                "wins": 4,
                "draws": 1,
                "losses": 0,
                "goalsFor": 14,
                "goalsAgainst": 3
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
                "played": 2,
                "wins": 2,
                "draws": 0,
                "losses": 0,
                "goalsFor": 6,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 505,
              "team": "Inter",
              "rank": 2,
              "points": 13,
              "goalsDiff": 7,
              "form": "DWWWW",
              "all": {
                "played": 5,
                "wins": 4,
                "draws": 1,
                "losses": 0,
                "goalsFor": 15,
                "goalsAgainst": 8
              },
              "home": {
                "played": 3,
                "wins": 3,
                "draws": 0,
                "losses": 0,
                "goalsFor": 12,
                "goalsAgainst": 6
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
              "teamId": 487,
              "team": "Lazio",
              "rank": 3,
              "points": 13,
              "goalsDiff": 5,
              "form": "WDWWW",
              "all": {
                "played": 5,
                "wins": 4,
                "draws": 1,
                "losses": 0,
                "goalsFor": 8,
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
                "played": 3,
                "wins": 3,
                "draws": 0,
                "losses": 0,
                "goalsFor": 5,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 490,
              "team": "Cagliari",
              "rank": 4,
              "points": 12,
              "goalsDiff": 3,
              "form": "WWWLW",
              "all": {
                "played": 5,
                "wins": 4,
                "draws": 0,
                "losses": 1,
                "goalsFor": 5,
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
                "played": 3,
                "wins": 3,
                "draws": 0,
                "losses": 0,
                "goalsFor": 4,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 895,
              "team": "Como",
              "rank": 5,
              "points": 10,
              "goalsDiff": 5,
              "form": "WWWD",
              "all": {
                "played": 4,
                "wins": 3,
                "draws": 1,
                "losses": 0,
                "goalsFor": 9,
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
              "rank": 6,
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
              "goalsDiff": 0,
              "form": "LWDWL",
              "all": {
                "played": 5,
                "wins": 2,
                "draws": 1,
                "losses": 2,
                "goalsFor": 9,
                "goalsAgainst": 9
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
                "played": 3,
                "wins": 0,
                "draws": 1,
                "losses": 2,
                "goalsFor": 4,
                "goalsAgainst": 6
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
              "goalsDiff": -3,
              "form": "LLLWD",
              "all": {
                "played": 5,
                "wins": 1,
                "draws": 1,
                "losses": 3,
                "goalsFor": 8,
                "goalsAgainst": 11
              },
              "home": {
                "played": 3,
                "wins": 0,
                "draws": 1,
                "losses": 2,
                "goalsFor": 2,
                "goalsAgainst": 4
              },
              "away": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 6,
                "goalsAgainst": 7
              }
            },
            {
              "teamId": 503,
              "team": "Torino",
              "rank": 14,
              "points": 4,
              "goalsDiff": -3,
              "form": "DLWLL",
              "all": {
                "played": 5,
                "wins": 1,
                "draws": 1,
                "losses": 3,
                "goalsFor": 5,
                "goalsAgainst": 8
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
                "wins": 1,
                "draws": 1,
                "losses": 1,
                "goalsFor": 4,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 1579,
              "team": "Monza",
              "rank": 15,
              "points": 4,
              "goalsDiff": -4,
              "form": "WLDLL",
              "all": {
                "played": 5,
                "wins": 1,
                "draws": 1,
                "losses": 3,
                "goalsFor": 8,
                "goalsAgainst": 12
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
                "played": 3,
                "wins": 0,
                "draws": 1,
                "losses": 2,
                "goalsFor": 4,
                "goalsAgainst": 8
              }
            },
            {
              "teamId": 502,
              "team": "Fiorentina",
              "rank": 16,
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
              "rank": 17,
              "points": 2,
              "goalsDiff": -3,
              "form": "DLDLL",
              "all": {
                "played": 5,
                "wins": 0,
                "draws": 2,
                "losses": 3,
                "goalsFor": 3,
                "goalsAgainst": 6
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
              "rank": 18,
              "points": 1,
              "goalsDiff": -4,
              "form": "LDLL",
              "all": {
                "played": 4,
                "wins": 0,
                "draws": 1,
                "losses": 3,
                "goalsFor": 2,
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
                "played": 2,
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 1,
                "goalsAgainst": 4
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
              "goalsDiff": -9,
              "form": "LLLLL",
              "all": {
                "played": 5,
                "wins": 0,
                "draws": 0,
                "losses": 5,
                "goalsFor": 4,
                "goalsAgainst": 13
              },
              "home": {
                "played": 3,
                "wins": 0,
                "draws": 0,
                "losses": 3,
                "goalsFor": 2,
                "goalsAgainst": 8
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
              "teamId": 497,
              "team": "AS Roma",
              "form": "WWWWD",
              "all": {
                "played": 5,
                "wins": 4,
                "draws": 1,
                "losses": 0,
                "goalsFor": 14,
                "goalsAgainst": 3
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
                "played": 2,
                "wins": 2,
                "draws": 0,
                "losses": 0,
                "goalsFor": 6,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 505,
              "team": "Inter",
              "form": "WWWWD",
              "all": {
                "played": 5,
                "wins": 4,
                "draws": 1,
                "losses": 0,
                "goalsFor": 15,
                "goalsAgainst": 8
              },
              "home": {
                "played": 3,
                "wins": 3,
                "draws": 0,
                "losses": 0,
                "goalsFor": 12,
                "goalsAgainst": 6
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
              "teamId": 517,
              "team": "Venezia",
              "form": "LLLLL",
              "all": {
                "played": 5,
                "wins": 0,
                "draws": 0,
                "losses": 5,
                "goalsFor": 4,
                "goalsAgainst": 13
              },
              "home": {
                "played": 3,
                "wins": 0,
                "draws": 0,
                "losses": 3,
                "goalsFor": 2,
                "goalsAgainst": 8
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
              "teamId": 487,
              "team": "Lazio",
              "form": "WWWDW",
              "all": {
                "played": 5,
                "wins": 4,
                "draws": 1,
                "losses": 0,
                "goalsFor": 8,
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
                "played": 3,
                "wins": 3,
                "draws": 0,
                "losses": 0,
                "goalsFor": 5,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 502,
              "team": "Fiorentina",
              "form": "LLLWD",
              "all": {
                "played": 5,
                "wins": 1,
                "draws": 1,
                "losses": 3,
                "goalsFor": 6,
                "goalsAgainst": 12
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
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 4,
                "goalsAgainst": 6
              }
            },
            {
              "teamId": 492,
              "team": "Napoli",
              "form": "WLLWD",
              "all": {
                "played": 5,
                "wins": 2,
                "draws": 1,
                "losses": 2,
                "goalsFor": 7,
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
                "played": 3,
                "wins": 1,
                "draws": 1,
                "losses": 1,
                "goalsFor": 5,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 512,
              "team": "Frosinone",
              "form": "LWWD",
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
              "teamId": 895,
              "team": "Como",
              "form": "DWWW",
              "all": {
                "played": 4,
                "wins": 3,
                "draws": 1,
                "losses": 0,
                "goalsFor": 9,
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
              "form": "LLDL",
              "all": {
                "played": 4,
                "wins": 0,
                "draws": 1,
                "losses": 3,
                "goalsFor": 2,
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
                "played": 2,
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 1,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 495,
              "team": "Genoa",
              "form": "LLLD",
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
            }
          ],
          "fixtures": [
            {
              "fixtureId": 1550128,
              "kickoff": "2026-09-20T01:00:00+09:00",
              "status": "FT",
              "homeTeamId": 497,
              "homeTeam": "AS Roma",
              "awayTeamId": 505,
              "awayTeam": "Inter",
              "injuriesChecked": true,
              "injuries": [
                {
                  "fixtureId": 1550128,
                  "teamId": 497,
                  "playerId": 626686,
                  "player": "M. Bah",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1550128,
                  "teamId": 505,
                  "playerId": 1640,
                  "player": "H. Calhanoglu",
                  "type": "Missing Fixture",
                  "reason": "Muscle Injury"
                },
                {
                  "fixtureId": 1550128,
                  "teamId": 505,
                  "playerId": 19235,
                  "player": "D. Spence",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1550128,
                  "teamId": 505,
                  "playerId": 626,
                  "player": "J. Stones",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                }
              ],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1550136,
              "kickoff": "2026-09-20T03:45:00+09:00",
              "status": "FT",
              "homeTeamId": 517,
              "homeTeam": "Venezia",
              "awayTeamId": 487,
              "awayTeam": "Lazio",
              "injuriesChecked": true,
              "injuries": [
                {
                  "fixtureId": 1550136,
                  "teamId": 517,
                  "playerId": 212,
                  "player": "A. Adorante",
                  "type": "Missing Fixture",
                  "reason": "Hernia"
                },
                {
                  "fixtureId": 1550136,
                  "teamId": 517,
                  "playerId": 1266,
                  "player": "T. Basic",
                  "type": "Missing Fixture",
                  "reason": "Foot Injury"
                },
                {
                  "fixtureId": 1550136,
                  "teamId": 517,
                  "playerId": 25061,
                  "player": "A. Bella-Kotchap",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1550136,
                  "teamId": 517,
                  "playerId": 51266,
                  "player": "G. Busio",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1550136,
                  "teamId": 517,
                  "playerId": 342025,
                  "player": "M. Dagasso",
                  "type": "Missing Fixture",
                  "reason": "Inactive"
                },
                {
                  "fixtureId": 1550136,
                  "teamId": 517,
                  "playerId": 14704,
                  "player": "B. Franjic",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1550136,
                  "teamId": 517,
                  "playerId": 37144,
                  "player": "R. Haps",
                  "type": "Missing Fixture",
                  "reason": "Inactive"
                },
                {
                  "fixtureId": 1550136,
                  "teamId": 517,
                  "playerId": 26095,
                  "player": "M. Sverko",
                  "type": "Missing Fixture",
                  "reason": "Hip Injury"
                },
                {
                  "fixtureId": 1550136,
                  "teamId": 487,
                  "playerId": 144740,
                  "player": "F. Dele-Bashiru",
                  "type": "Missing Fixture",
                  "reason": "Muscle Injury"
                },
                {
                  "fixtureId": 1550136,
                  "teamId": 487,
                  "playerId": 63934,
                  "player": "A. Furlanetto",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1550136,
                  "teamId": 487,
                  "playerId": 1844,
                  "player": "A. Marusic",
                  "type": "Missing Fixture",
                  "reason": "Muscle Injury"
                },
                {
                  "fixtureId": 1550136,
                  "teamId": 487,
                  "playerId": 1841,
                  "player": "Patric",
                  "type": "Missing Fixture",
                  "reason": "Ankle Injury"
                },
                {
                  "fixtureId": 1550136,
                  "teamId": 487,
                  "playerId": 30554,
                  "player": "L. Pellegrini",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1550136,
                  "teamId": 487,
                  "playerId": 30784,
                  "player": "N. Rovella",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                }
              ],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1550130,
              "kickoff": "2026-09-20T19:30:00+09:00",
              "status": "FT",
              "homeTeamId": 502,
              "homeTeam": "Fiorentina",
              "awayTeamId": 492,
              "awayTeam": "Napoli",
              "injuriesChecked": true,
              "injuries": [
                {
                  "fixtureId": 1550130,
                  "teamId": 502,
                  "playerId": 136087,
                  "player": "F. Parisi",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1550130,
                  "teamId": 502,
                  "playerId": 31507,
                  "player": "R. Sottil",
                  "type": "Questionable",
                  "reason": "Back Injury"
                },
                {
                  "fixtureId": 1550130,
                  "teamId": 492,
                  "playerId": 310943,
                  "player": "Alisson Santos",
                  "type": "Missing Fixture",
                  "reason": "Muscle Injury"
                },
                {
                  "fixtureId": 1550130,
                  "teamId": 492,
                  "playerId": 31226,
                  "player": "A. Buongiorno",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1550130,
                  "teamId": 492,
                  "playerId": 312615,
                  "player": "Giovane",
                  "type": "Missing Fixture",
                  "reason": "Groin Injury"
                },
                {
                  "fixtureId": 1550130,
                  "teamId": 492,
                  "playerId": 388547,
                  "player": "L. Marianucci",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1550130,
                  "teamId": 492,
                  "playerId": 903,
                  "player": "S. McTominay",
                  "type": "Missing Fixture",
                  "reason": "Heart Problems"
                },
                {
                  "fixtureId": 1550130,
                  "teamId": 492,
                  "playerId": 312,
                  "player": "A. Meret",
                  "type": "Missing Fixture",
                  "reason": "Muscle Injury"
                },
                {
                  "fixtureId": 1550130,
                  "teamId": 492,
                  "playerId": 862,
                  "player": "L. Spinazzola",
                  "type": "Missing Fixture",
                  "reason": "Muscle Injury"
                }
              ],
              "lineupsChecked": true,
              "lineups": [
                {
                  "teamId": 502,
                  "team": "Fiorentina",
                  "formation": "4-3-3",
                  "coach": "Paolo Vanoli",
                  "starters": [
                    "David De Gea",
                    "Álex Jiménez",
                    "Radu Drăguşin",
                    "Luca Ranieri",
                    "Viery",
                    "Cher Ndour",
                    "Nicolò Fagioli",
                    "Arthur Atta",
                    "Franco Mastantuono",
                    "Mateo Pellegrino",
                    "Alieu Njie"
                  ]
                },
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
                    "Mathías Olivera",
                    "Billy Gilmour",
                    "Stanislav Lobotka",
                    "Matteo Politano",
                    "Kevin De Bruyne",
                    "Noa Lang",
                    "Rasmus Højlund"
                  ]
                }
              ]
            },
            {
              "fixtureId": 1550131,
              "kickoff": "2026-09-20T22:00:00+09:00",
              "status": "NS",
              "homeTeamId": 512,
              "homeTeam": "Frosinone",
              "awayTeamId": 895,
              "awayTeam": "Como",
              "injuriesChecked": true,
              "injuries": [
                {
                  "fixtureId": 1550131,
                  "teamId": 512,
                  "playerId": 719,
                  "player": "F. Grillitsch",
                  "type": "Missing Fixture",
                  "reason": "Thigh Injury"
                }
              ],
              "lineupsChecked": true,
              "lineups": [
                {
                  "teamId": 512,
                  "team": "Frosinone",
                  "formation": "4-2-3-1",
                  "coach": "Massimiliano Alvini",
                  "starters": [
                    "Lorenzo Palmisani",
                    "Anthony Oyono",
                    "Gabriele Calvani",
                    "Ilario Monterisi",
                    "Gabriele Bracaglia",
                    "Patrizio Masini",
                    "Giacomo Calò",
                    "Farès Ghedjemis",
                    "Romano Schmid",
                    "Giorgi Kvernadze",
                    "Antonio Raimondo"
                  ]
                },
                {
                  "teamId": 895,
                  "team": "Como",
                  "formation": "4-2-3-1",
                  "coach": "Cesc Fabregas",
                  "starters": [
                    "Jean Butez",
                    "Yan Couto",
                    "Jacobo Ramón",
                    "Trevoh Chalobah",
                    "Álex Valle",
                    "Luis Milla",
                    "Lucas Da Cunha",
                    "Assane Diao",
                    "Nico Paz",
                    "Martin Baturina",
                    "Anastasios Douvikas"
                  ]
                }
              ]
            },
            {
              "fixtureId": 1550134,
              "kickoff": "2026-09-20T22:00:00+09:00",
              "status": "NS",
              "homeTeamId": 523,
              "homeTeam": "Parma",
              "awayTeamId": 495,
              "awayTeam": "Genoa",
              "injuriesChecked": true,
              "injuries": [
                {
                  "fixtureId": 1550134,
                  "teamId": 523,
                  "playerId": 628,
                  "player": "A. Bernabe",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1550134,
                  "teamId": 523,
                  "playerId": 881,
                  "player": "H. Nicolussi Caviglia",
                  "type": "Missing Fixture",
                  "reason": "Groin Injury"
                },
                {
                  "fixtureId": 1550134,
                  "teamId": 523,
                  "playerId": 6221,
                  "player": "L. Valenti",
                  "type": "Missing Fixture",
                  "reason": "Coach's decision"
                },
                {
                  "fixtureId": 1550134,
                  "teamId": 495,
                  "playerId": 162561,
                  "player": "E. Havel",
                  "type": "Missing Fixture",
                  "reason": "Ankle Injury"
                },
                {
                  "fixtureId": 1550134,
                  "teamId": 495,
                  "playerId": 35544,
                  "player": "J. Vasquez",
                  "type": "Missing Fixture",
                  "reason": "Red Card"
                },
                {
                  "fixtureId": 1550134,
                  "teamId": 495,
                  "playerId": 452033,
                  "player": "L. Venturino",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                }
              ],
              "lineupsChecked": true,
              "lineups": [
                {
                  "teamId": 523,
                  "team": "Parma",
                  "formation": "3-4-2-1",
                  "coach": "Carlos Cuesta",
                  "starters": [
                    "Edoardo Corvi",
                    "Enrico Delprato",
                    "Diego Carlos",
                    "Mariano Troilo",
                    "Dominik Drobnic",
                    "Vincent Sierro",
                    "Mandela Keita",
                    "Emanuele Valeri",
                    "Simone Lontani",
                    "El Bilal Touré",
                    "David Romero"
                  ]
                },
                {
                  "teamId": 495,
                  "team": "Genoa",
                  "formation": "3-4-2-1",
                  "coach": "Daniele De Rossi",
                  "starters": [
                    "Justin Bijlow",
                    "Alessandro Marcandalli",
                    "Leo Østigård",
                    "Sebastian Otoa",
                    "Kingsley Ehizibue",
                    "Morten Frendrup",
                    "Djibril Sow",
                    "Mikael Ellertsson",
                    "Junior Messias",
                    "Tommaso Baldanzi",
                    "Milutin Osmajić"
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
              "teamId": 165,
              "team": "Borussia Dortmund",
              "rank": 1,
              "points": 12,
              "goalsDiff": 7,
              "form": "WWWW",
              "all": {
                "played": 4,
                "wins": 4,
                "draws": 0,
                "losses": 0,
                "goalsFor": 9,
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
                "played": 2,
                "wins": 2,
                "draws": 0,
                "losses": 0,
                "goalsFor": 4,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 157,
              "team": "Bayern München",
              "rank": 2,
              "points": 10,
              "goalsDiff": 12,
              "form": "WWDW",
              "all": {
                "played": 4,
                "wins": 3,
                "draws": 1,
                "losses": 0,
                "goalsFor": 14,
                "goalsAgainst": 2
              },
              "home": {
                "played": 2,
                "wins": 2,
                "draws": 0,
                "losses": 0,
                "goalsFor": 12,
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
              "teamId": 160,
              "team": "SC Freiburg",
              "rank": 3,
              "points": 10,
              "goalsDiff": 9,
              "form": "DWWW",
              "all": {
                "played": 4,
                "wins": 3,
                "draws": 1,
                "losses": 0,
                "goalsFor": 12,
                "goalsAgainst": 3
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
                "played": 2,
                "wins": 1,
                "draws": 1,
                "losses": 0,
                "goalsFor": 3,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 170,
              "team": "FC Augsburg",
              "rank": 4,
              "points": 7,
              "goalsDiff": 5,
              "form": "LDWW",
              "all": {
                "played": 4,
                "wins": 2,
                "draws": 1,
                "losses": 1,
                "goalsFor": 11,
                "goalsAgainst": 6
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
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 6,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 164,
              "team": "FSV Mainz 05",
              "rank": 5,
              "points": 7,
              "goalsDiff": 4,
              "form": "WLWD",
              "all": {
                "played": 4,
                "wins": 2,
                "draws": 1,
                "losses": 1,
                "goalsFor": 10,
                "goalsAgainst": 6
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
                "wins": 2,
                "draws": 0,
                "losses": 0,
                "goalsFor": 9,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 162,
              "team": "Werder Bremen",
              "rank": 6,
              "points": 7,
              "goalsDiff": 0,
              "form": "WDWL",
              "all": {
                "played": 4,
                "wins": 2,
                "draws": 1,
                "losses": 1,
                "goalsFor": 8,
                "goalsAgainst": 8
              },
              "home": {
                "played": 2,
                "wins": 2,
                "draws": 0,
                "losses": 0,
                "goalsFor": 6,
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
              "teamId": 173,
              "team": "RB Leipzig",
              "rank": 7,
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
              "rank": 8,
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
              "teamId": 169,
              "team": "Eintracht Frankfurt",
              "rank": 9,
              "points": 5,
              "goalsDiff": -1,
              "form": "DWLD",
              "all": {
                "played": 4,
                "wins": 1,
                "draws": 2,
                "losses": 1,
                "goalsFor": 9,
                "goalsAgainst": 10
              },
              "home": {
                "played": 2,
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 6
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
              "teamId": 168,
              "team": "Bayer Leverkusen",
              "rank": 10,
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
              "goalsDiff": -3,
              "form": "LDLW",
              "all": {
                "played": 4,
                "wins": 1,
                "draws": 1,
                "losses": 2,
                "goalsFor": 6,
                "goalsAgainst": 9
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
                "goalsFor": 2,
                "goalsAgainst": 6
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
              "goalsDiff": -3,
              "form": "LLWL",
              "all": {
                "played": 4,
                "wins": 1,
                "draws": 0,
                "losses": 3,
                "goalsFor": 6,
                "goalsAgainst": 9
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
                "played": 2,
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 2,
                "goalsAgainst": 7
              }
            },
            {
              "teamId": 175,
              "team": "Hamburger SV",
              "rank": 15,
              "points": 3,
              "goalsDiff": -11,
              "form": "WLLL",
              "all": {
                "played": 4,
                "wins": 1,
                "draws": 0,
                "losses": 3,
                "goalsFor": 2,
                "goalsAgainst": 13
              },
              "home": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 2,
                "goalsAgainst": 6
              },
              "away": {
                "played": 2,
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 0,
                "goalsAgainst": 7
              }
            },
            {
              "teamId": 185,
              "team": "SC Paderborn 07",
              "rank": 16,
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
              "rank": 17,
              "points": 1,
              "goalsDiff": -13,
              "form": "LLLD",
              "all": {
                "played": 4,
                "wins": 0,
                "draws": 1,
                "losses": 3,
                "goalsFor": 4,
                "goalsAgainst": 17
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
                "played": 2,
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 0,
                "goalsAgainst": 11
              }
            },
            {
              "teamId": 163,
              "team": "Borussia Mönchengladbach",
              "rank": 18,
              "points": 0,
              "goalsDiff": -10,
              "form": "LLLL",
              "all": {
                "played": 4,
                "wins": 0,
                "draws": 0,
                "losses": 4,
                "goalsFor": 6,
                "goalsAgainst": 16
              },
              "home": {
                "played": 2,
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 6,
                "goalsAgainst": 8
              },
              "away": {
                "played": 2,
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 0,
                "goalsAgainst": 8
              }
            }
          ],
          "teams": [
            {
              "teamId": 172,
              "team": "VfB Stuttgart",
              "form": "LWLL",
              "all": {
                "played": 4,
                "wins": 1,
                "draws": 0,
                "losses": 3,
                "goalsFor": 6,
                "goalsAgainst": 9
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
                "played": 2,
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 2,
                "goalsAgainst": 7
              }
            },
            {
              "teamId": 165,
              "team": "Borussia Dortmund",
              "form": "WWWW",
              "all": {
                "played": 4,
                "wins": 4,
                "draws": 0,
                "losses": 0,
                "goalsFor": 9,
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
                "played": 2,
                "wins": 2,
                "draws": 0,
                "losses": 0,
                "goalsFor": 4,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 168,
              "team": "Bayer Leverkusen",
              "form": "LWD",
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
              "teamId": 173,
              "team": "RB Leipzig",
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
            }
          ],
          "fixtures": [
            {
              "fixtureId": 1575168,
              "kickoff": "2026-09-20T01:30:00+09:00",
              "status": "FT",
              "homeTeamId": 172,
              "homeTeam": "VfB Stuttgart",
              "awayTeamId": 165,
              "awayTeam": "Borussia Dortmund",
              "injuriesChecked": true,
              "injuries": [
                {
                  "fixtureId": 1575168,
                  "teamId": 172,
                  "playerId": 180731,
                  "player": "L. Assignon",
                  "type": "Missing Fixture",
                  "reason": "Shoulder Injury"
                },
                {
                  "fixtureId": 1575168,
                  "teamId": 172,
                  "playerId": 287927,
                  "player": "J. Diehl",
                  "type": "Missing Fixture",
                  "reason": "Muscle Injury"
                },
                {
                  "fixtureId": 1575168,
                  "teamId": 172,
                  "playerId": 420353,
                  "player": "M. Herwerth",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1575168,
                  "teamId": 172,
                  "playerId": 349344,
                  "player": "L. Jaquez",
                  "type": "Missing Fixture",
                  "reason": "Muscle Injury"
                },
                {
                  "fixtureId": 1575168,
                  "teamId": 172,
                  "playerId": 327993,
                  "player": "D. Seimen",
                  "type": "Missing Fixture",
                  "reason": "Thigh Injury"
                },
                {
                  "fixtureId": 1575168,
                  "teamId": 172,
                  "playerId": 265363,
                  "player": "T. Tomas",
                  "type": "Missing Fixture",
                  "reason": "Muscle Injury"
                },
                {
                  "fixtureId": 1575168,
                  "teamId": 172,
                  "playerId": 13,
                  "player": "D. Zagadou",
                  "type": "Missing Fixture",
                  "reason": "Muscle Injury"
                },
                {
                  "fixtureId": 1575168,
                  "teamId": 165,
                  "playerId": 864,
                  "player": "E. Can",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1575168,
                  "teamId": 165,
                  "playerId": 592218,
                  "player": "M. Kaba",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1575168,
                  "teamId": 165,
                  "playerId": 162410,
                  "player": "G. Konstantelias",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1575168,
                  "teamId": 165,
                  "playerId": 465666,
                  "player": "J. Lerma",
                  "type": "Missing Fixture",
                  "reason": "Muscle Injury"
                },
                {
                  "fixtureId": 1575168,
                  "teamId": 165,
                  "playerId": 341839,
                  "player": "F. Mane",
                  "type": "Missing Fixture",
                  "reason": "Muscle Injury"
                }
              ],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1575169,
              "kickoff": "2026-09-20T22:30:00+09:00",
              "status": "NS",
              "homeTeamId": 168,
              "homeTeam": "Bayer Leverkusen",
              "awayTeamId": 173,
              "awayTeam": "RB Leipzig",
              "injuriesChecked": true,
              "injuries": [
                {
                  "fixtureId": 1575169,
                  "teamId": 168,
                  "playerId": 444961,
                  "player": "M. Culbreath",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1575169,
                  "teamId": 168,
                  "playerId": 161747,
                  "player": "G. Doue",
                  "type": "Missing Fixture",
                  "reason": "Muscle Injury"
                },
                {
                  "fixtureId": 1575169,
                  "teamId": 168,
                  "playerId": 503467,
                  "player": "K. Eichhorn",
                  "type": "Missing Fixture",
                  "reason": "Illness"
                },
                {
                  "fixtureId": 1575169,
                  "teamId": 168,
                  "playerId": 231029,
                  "player": "N. Tella",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1575169,
                  "teamId": 173,
                  "playerId": 715,
                  "player": "C. Baumgartner",
                  "type": "Missing Fixture",
                  "reason": "Thigh Injury"
                },
                {
                  "fixtureId": 1575169,
                  "teamId": 173,
                  "playerId": 392270,
                  "player": "M. Guiu",
                  "type": "Missing Fixture",
                  "reason": "Hamstring Injury"
                },
                {
                  "fixtureId": 1575169,
                  "teamId": 173,
                  "playerId": 380978,
                  "player": "A. Ouedraogo",
                  "type": "Missing Fixture",
                  "reason": "Shoulder Injury"
                },
                {
                  "fixtureId": 1575169,
                  "teamId": 173,
                  "playerId": 203007,
                  "player": "R. Reitz",
                  "type": "Missing Fixture",
                  "reason": "Muscle Injury"
                }
              ],
              "lineupsChecked": true,
              "lineups": [
                {
                  "teamId": 168,
                  "team": "Bayer Leverkusen",
                  "formation": "3-4-2-1",
                  "coach": "Carles Martínez",
                  "starters": [
                    "M. Flekken",
                    "J. Quansah",
                    "F. Medina",
                    "E. Tapsoba",
                    "M. Diaby",
                    "E. Fernández",
                    "Aleix García",
                    "Miguel Gutiérrez",
                    "I. Maza",
                    "Afonso Moreira",
                    "P. Schick"
                  ]
                },
                {
                  "teamId": 173,
                  "team": "RB Leipzig",
                  "formation": "4-3-3",
                  "coach": "M. Demichelis",
                  "starters": [
                    "M. Vandevoordt",
                    "R. Baku",
                    "W. Orbán",
                    "M. Estève",
                    "D. Raum",
                    "N. El Aynaoui",
                    "C. Nkunku",
                    "E. Banzuzi",
                    "B. Gruda",
                    "Rômulo",
                    "A. Nusa"
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
              "points": 13,
              "goalsDiff": 5,
              "form": "WDWWW",
              "all": {
                "played": 5,
                "wins": 4,
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
              "teamId": 80,
              "team": "Lyon",
              "rank": 2,
              "points": 11,
              "goalsDiff": 8,
              "form": "WDWDW",
              "all": {
                "played": 5,
                "wins": 3,
                "draws": 2,
                "losses": 0,
                "goalsFor": 10,
                "goalsAgainst": 2
              },
              "home": {
                "played": 3,
                "wins": 2,
                "draws": 1,
                "losses": 0,
                "goalsFor": 8,
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
              "rank": 3,
              "points": 11,
              "goalsDiff": 5,
              "form": "WDWWD",
              "all": {
                "played": 5,
                "wins": 3,
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
                "goalsFor": 5,
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
              "teamId": 79,
              "team": "Lille",
              "rank": 4,
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
              "teamId": 94,
              "team": "Rennes",
              "rank": 5,
              "points": 10,
              "goalsDiff": -1,
              "form": "LWWWD",
              "all": {
                "played": 5,
                "wins": 3,
                "draws": 1,
                "losses": 1,
                "goalsFor": 8,
                "goalsAgainst": 9
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
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 2,
                "goalsAgainst": 5
              }
            },
            {
              "teamId": 77,
              "team": "Angers",
              "rank": 6,
              "points": 7,
              "goalsDiff": 1,
              "form": "WDLWL",
              "all": {
                "played": 5,
                "wins": 2,
                "draws": 1,
                "losses": 2,
                "goalsFor": 6,
                "goalsAgainst": 5
              },
              "home": {
                "played": 3,
                "wins": 1,
                "draws": 0,
                "losses": 2,
                "goalsFor": 3,
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
              "teamId": 95,
              "team": "Strasbourg",
              "rank": 7,
              "points": 7,
              "goalsDiff": 0,
              "form": "LDWWL",
              "all": {
                "played": 5,
                "wins": 2,
                "draws": 1,
                "losses": 2,
                "goalsFor": 10,
                "goalsAgainst": 10
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
                "draws": 0,
                "losses": 2,
                "goalsFor": 7,
                "goalsAgainst": 8
              }
            },
            {
              "teamId": 1298,
              "team": "Le Mans",
              "rank": 8,
              "points": 6,
              "goalsDiff": 0,
              "form": "WDDLD",
              "all": {
                "played": 5,
                "wins": 1,
                "draws": 3,
                "losses": 1,
                "goalsFor": 9,
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
              "rank": 9,
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
              "rank": 10,
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
              "rank": 11,
              "points": 5,
              "goalsDiff": -1,
              "form": "LDWLD",
              "all": {
                "played": 5,
                "wins": 1,
                "draws": 2,
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
                "goalsAgainst": 4
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
              "teamId": 96,
              "team": "Toulouse",
              "rank": 12,
              "points": 5,
              "goalsDiff": -2,
              "form": "WDLDL",
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
              "teamId": 116,
              "team": "Lens",
              "rank": 13,
              "points": 4,
              "goalsDiff": 0,
              "form": "LDLLW",
              "all": {
                "played": 5,
                "wins": 1,
                "draws": 1,
                "losses": 3,
                "goalsFor": 9,
                "goalsAgainst": 9
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
                "wins": 0,
                "draws": 1,
                "losses": 2,
                "goalsFor": 4,
                "goalsAgainst": 6
              }
            },
            {
              "teamId": 110,
              "team": "Estac Troyes",
              "rank": 14,
              "points": 4,
              "goalsDiff": -7,
              "form": "LLLWD",
              "all": {
                "played": 5,
                "wins": 1,
                "draws": 1,
                "losses": 3,
                "goalsFor": 4,
                "goalsAgainst": 11
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
                "goalsAgainst": 5
              }
            },
            {
              "teamId": 81,
              "team": "Marseille",
              "rank": 15,
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
              "teamId": 108,
              "team": "Auxerre",
              "rank": 16,
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
              "rank": 17,
              "points": 2,
              "goalsDiff": -3,
              "form": "LDLDL",
              "all": {
                "played": 5,
                "wins": 0,
                "draws": 2,
                "losses": 3,
                "goalsFor": 4,
                "goalsAgainst": 7
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
              "teamId": 108,
              "team": "Auxerre",
              "form": "LLLW",
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
              "teamId": 114,
              "team": "Paris FC",
              "form": "DWWDW",
              "all": {
                "played": 5,
                "wins": 3,
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
                "goalsFor": 5,
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
              "teamId": 95,
              "team": "Strasbourg",
              "form": "LWWDL",
              "all": {
                "played": 5,
                "wins": 2,
                "draws": 1,
                "losses": 2,
                "goalsFor": 10,
                "goalsAgainst": 10
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
                "draws": 0,
                "losses": 2,
                "goalsFor": 7,
                "goalsAgainst": 8
              }
            },
            {
              "teamId": 77,
              "team": "Angers",
              "form": "LWLDW",
              "all": {
                "played": 5,
                "wins": 2,
                "draws": 1,
                "losses": 2,
                "goalsFor": 6,
                "goalsAgainst": 5
              },
              "home": {
                "played": 3,
                "wins": 1,
                "draws": 0,
                "losses": 2,
                "goalsFor": 3,
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
              "form": "DWLLL",
              "all": {
                "played": 5,
                "wins": 1,
                "draws": 1,
                "losses": 3,
                "goalsFor": 4,
                "goalsAgainst": 11
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
                "goalsAgainst": 5
              }
            },
            {
              "teamId": 80,
              "team": "Lyon",
              "form": "WDWDW",
              "all": {
                "played": 5,
                "wins": 3,
                "draws": 2,
                "losses": 0,
                "goalsFor": 10,
                "goalsAgainst": 2
              },
              "home": {
                "played": 3,
                "wins": 2,
                "draws": 1,
                "losses": 0,
                "goalsFor": 8,
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
              "teamId": 94,
              "team": "Rennes",
              "form": "DWWWL",
              "all": {
                "played": 5,
                "wins": 3,
                "draws": 1,
                "losses": 1,
                "goalsFor": 8,
                "goalsAgainst": 9
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
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 2,
                "goalsAgainst": 5
              }
            },
            {
              "teamId": 96,
              "team": "Toulouse",
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
              "teamId": 111,
              "team": "Le Havre",
              "form": "LDLDL",
              "all": {
                "played": 5,
                "wins": 0,
                "draws": 2,
                "losses": 3,
                "goalsFor": 4,
                "goalsAgainst": 7
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
                "played": 2,
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 1298,
              "team": "Le Mans",
              "form": "DLDDW",
              "all": {
                "played": 5,
                "wins": 1,
                "draws": 3,
                "losses": 1,
                "goalsFor": 9,
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
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 97,
              "team": "Lorient",
              "form": "DLWDL",
              "all": {
                "played": 5,
                "wins": 1,
                "draws": 2,
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
                "goalsAgainst": 4
              },
              "away": {
                "played": 3,
                "wins": 1,
                "draws": 1,
                "losses": 1,
                "goalsFor": 2,
                "goalsAgainst": 2
              }
            }
          ],
          "fixtures": [
            {
              "fixtureId": 1552766,
              "kickoff": "2026-09-20T22:00:00+09:00",
              "status": "1H",
              "homeTeamId": 108,
              "homeTeam": "Auxerre",
              "awayTeamId": 106,
              "awayTeam": "Stade Brestois 29",
              "injuriesChecked": true,
              "injuries": [
                {
                  "fixtureId": 1552766,
                  "teamId": 108,
                  "playerId": 30748,
                  "player": "A. Diousse",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1552766,
                  "teamId": 108,
                  "playerId": 115588,
                  "player": "B. Okoh",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1552766,
                  "teamId": 108,
                  "playerId": 191240,
                  "player": "M. Senaya",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1552766,
                  "teamId": 108,
                  "playerId": 402542,
                  "player": "T. Siwe",
                  "type": "Missing Fixture",
                  "reason": "Muscle Injury"
                },
                {
                  "fixtureId": 1552766,
                  "teamId": 106,
                  "playerId": 158587,
                  "player": "R. Cagnon",
                  "type": "Missing Fixture",
                  "reason": "Shoulder Injury"
                },
                {
                  "fixtureId": 1552766,
                  "teamId": 106,
                  "playerId": 20546,
                  "player": "B. Chardonnet",
                  "type": "Missing Fixture",
                  "reason": "Calf Injury"
                },
                {
                  "fixtureId": 1552766,
                  "teamId": 106,
                  "playerId": 302915,
                  "player": "M. Diambou",
                  "type": "Missing Fixture",
                  "reason": "Ankle Injury"
                },
                {
                  "fixtureId": 1552766,
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
                  "teamId": 108,
                  "team": "Auxerre",
                  "formation": "3-4-3",
                  "coach": "W. Still",
                  "starters": [
                    "M. Diop",
                    "C. Makosso",
                    "A. Tuanzebe",
                    "C. Akpa",
                    "L. Sy",
                    "A. Piedfort",
                    "K. Danois",
                    "F. Oppegård",
                    "D. Namaso",
                    "C. Archer",
                    "R. Labeau Lascary"
                  ]
                },
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
                }
              ]
            },
            {
              "fixtureId": 1552771,
              "kickoff": "2026-09-20T00:15:00+09:00",
              "status": "FT",
              "homeTeamId": 114,
              "homeTeam": "Paris FC",
              "awayTeamId": 95,
              "awayTeam": "Strasbourg",
              "injuriesChecked": true,
              "injuries": [
                {
                  "fixtureId": 1552771,
                  "teamId": 114,
                  "playerId": 490981,
                  "player": "E. Mbemba",
                  "type": "Missing Fixture",
                  "reason": "Inactive"
                },
                {
                  "fixtureId": 1552771,
                  "teamId": 114,
                  "playerId": 266013,
                  "player": "Otavio",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1552771,
                  "teamId": 114,
                  "playerId": 389322,
                  "player": "N. Sangui",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1552771,
                  "teamId": 95,
                  "playerId": 359386,
                  "player": "M. Godo",
                  "type": "Missing Fixture",
                  "reason": "Muscle Injury"
                },
                {
                  "fixtureId": 1552771,
                  "teamId": 95,
                  "playerId": 390742,
                  "player": "J. Panichelli",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                }
              ],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1552765,
              "kickoff": "2026-09-20T03:45:00+09:00",
              "status": "FT",
              "homeTeamId": 77,
              "homeTeam": "Angers",
              "awayTeamId": 110,
              "awayTeam": "Estac Troyes",
              "injuriesChecked": true,
              "injuries": [
                {
                  "fixtureId": 1552765,
                  "teamId": 77,
                  "playerId": 289555,
                  "player": "L. Mouton",
                  "type": "Missing Fixture",
                  "reason": "Inactive"
                },
                {
                  "fixtureId": 1552765,
                  "teamId": 110,
                  "playerId": 174596,
                  "player": "I. Boura",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1552765,
                  "teamId": 110,
                  "playerId": 859,
                  "player": "P. Gozzi",
                  "type": "Missing Fixture",
                  "reason": "Muscle Injury"
                },
                {
                  "fixtureId": 1552765,
                  "teamId": 110,
                  "playerId": 275478,
                  "player": "M. Ifnaoui",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1552765,
                  "teamId": 110,
                  "playerId": 1913,
                  "player": "A. Phliponeau",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1552765,
                  "teamId": 110,
                  "playerId": 395810,
                  "player": "Y. Titi",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                }
              ],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1552768,
              "kickoff": "2026-09-20T03:45:00+09:00",
              "status": "FT",
              "homeTeamId": 80,
              "homeTeam": "Lyon",
              "awayTeamId": 94,
              "awayTeam": "Rennes",
              "injuriesChecked": true,
              "injuries": [
                {
                  "fixtureId": 1552768,
                  "teamId": 80,
                  "playerId": 368230,
                  "player": "J. Duranville",
                  "type": "Missing Fixture",
                  "reason": "Muscle Injury"
                },
                {
                  "fixtureId": 1552768,
                  "teamId": 80,
                  "playerId": 497617,
                  "player": "R. Himbert",
                  "type": "Missing Fixture",
                  "reason": "Inactive"
                },
                {
                  "fixtureId": 1552768,
                  "teamId": 80,
                  "playerId": 493026,
                  "player": "N. Kamara",
                  "type": "Missing Fixture",
                  "reason": "Inactive"
                },
                {
                  "fixtureId": 1552768,
                  "teamId": 80,
                  "playerId": 529,
                  "player": "N. Tagliafico",
                  "type": "Missing Fixture",
                  "reason": "Muscle Injury"
                }
              ],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1552772,
              "kickoff": "2026-09-20T03:45:00+09:00",
              "status": "FT",
              "homeTeamId": 96,
              "homeTeam": "Toulouse",
              "awayTeamId": 111,
              "awayTeam": "Le Havre",
              "injuriesChecked": true,
              "injuries": [
                {
                  "fixtureId": 1552772,
                  "teamId": 96,
                  "playerId": 118345,
                  "player": "A. Francis",
                  "type": "Missing Fixture",
                  "reason": "Muscle Injury"
                },
                {
                  "fixtureId": 1552772,
                  "teamId": 96,
                  "playerId": 15793,
                  "player": "R. Nicolaisen",
                  "type": "Missing Fixture",
                  "reason": "Calf Injury"
                },
                {
                  "fixtureId": 1552772,
                  "teamId": 111,
                  "playerId": 395808,
                  "player": "P. Argney",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1552772,
                  "teamId": 111,
                  "playerId": 961,
                  "player": "F. Mambimbi",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1552772,
                  "teamId": 111,
                  "playerId": 24012,
                  "player": "L. Mpasi-Nzau",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1552772,
                  "teamId": 111,
                  "playerId": 162067,
                  "player": "T. Pembele",
                  "type": "Missing Fixture",
                  "reason": "Inactive"
                },
                {
                  "fixtureId": 1552772,
                  "teamId": 111,
                  "playerId": 21103,
                  "player": "A. Toure",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1552772,
                  "teamId": 111,
                  "playerId": 513415,
                  "player": "S. Zagadou",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                }
              ],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1552767,
              "kickoff": "2026-09-20T03:45:00+09:00",
              "status": "FT",
              "homeTeamId": 1298,
              "homeTeam": "Le Mans",
              "awayTeamId": 97,
              "awayTeam": "Lorient",
              "injuriesChecked": true,
              "injuries": [
                {
                  "fixtureId": 1552767,
                  "teamId": 1298,
                  "playerId": 21448,
                  "player": "L. Buades",
                  "type": "Missing Fixture",
                  "reason": "Knock"
                },
                {
                  "fixtureId": 1552767,
                  "teamId": 1298,
                  "playerId": 174939,
                  "player": "E. Colas",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1552767,
                  "teamId": 1298,
                  "playerId": 270515,
                  "player": "T. Eyoum",
                  "type": "Missing Fixture",
                  "reason": "Coach's decision"
                },
                {
                  "fixtureId": 1552767,
                  "teamId": 1298,
                  "playerId": 24259,
                  "player": "E. Quarshie",
                  "type": "Missing Fixture",
                  "reason": "Coach's decision"
                },
                {
                  "fixtureId": 1552767,
                  "teamId": 1298,
                  "playerId": 349631,
                  "player": "M. Rossignol",
                  "type": "Missing Fixture",
                  "reason": "Coach's decision"
                },
                {
                  "fixtureId": 1552767,
                  "teamId": 97,
                  "playerId": 162018,
                  "player": "B. Fadiga",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1552767,
                  "teamId": 97,
                  "playerId": 298006,
                  "player": "N. Mbamba",
                  "type": "Missing Fixture",
                  "reason": "Muscle Injury"
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
              "teamId": 194,
              "team": "Ajax",
              "rank": 4,
              "points": 14,
              "goalsDiff": 12,
              "form": "DWWLW",
              "all": {
                "played": 7,
                "wins": 4,
                "draws": 2,
                "losses": 1,
                "goalsFor": 21,
                "goalsAgainst": 9
              },
              "home": {
                "played": 4,
                "wins": 1,
                "draws": 2,
                "losses": 1,
                "goalsFor": 10,
                "goalsAgainst": 8
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
              "teamId": 415,
              "team": "Twente",
              "rank": 5,
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
              "teamId": 205,
              "team": "Fortuna Sittard",
              "rank": 6,
              "points": 13,
              "goalsDiff": -1,
              "form": "WLWWL",
              "all": {
                "played": 7,
                "wins": 4,
                "draws": 1,
                "losses": 2,
                "goalsFor": 13,
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
                "played": 4,
                "wins": 3,
                "draws": 1,
                "losses": 0,
                "goalsFor": 9,
                "goalsAgainst": 6
              }
            },
            {
              "teamId": 196,
              "team": "Excelsior",
              "rank": 7,
              "points": 11,
              "goalsDiff": 6,
              "form": "DLDWW",
              "all": {
                "played": 7,
                "wins": 3,
                "draws": 2,
                "losses": 2,
                "goalsFor": 15,
                "goalsAgainst": 9
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
                "played": 4,
                "wins": 2,
                "draws": 2,
                "losses": 0,
                "goalsFor": 11,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 202,
              "team": "Groningen",
              "rank": 8,
              "points": 11,
              "goalsDiff": 2,
              "form": "WDDLL",
              "all": {
                "played": 7,
                "wins": 3,
                "draws": 2,
                "losses": 2,
                "goalsFor": 15,
                "goalsAgainst": 13
              },
              "home": {
                "played": 4,
                "wins": 2,
                "draws": 1,
                "losses": 1,
                "goalsFor": 9,
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
              "teamId": 410,
              "team": "GO Ahead Eagles",
              "rank": 9,
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
              "teamId": 210,
              "team": "Heerenveen",
              "rank": 10,
              "points": 9,
              "goalsDiff": 2,
              "form": "WDLDL",
              "all": {
                "played": 7,
                "wins": 2,
                "draws": 3,
                "losses": 2,
                "goalsFor": 11,
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
                "played": 3,
                "wins": 1,
                "draws": 2,
                "losses": 0,
                "goalsFor": 8,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 413,
              "team": "NEC Nijmegen",
              "rank": 11,
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
              "teamId": 427,
              "team": "Telstar",
              "rank": 12,
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
              "rank": 13,
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
              "teamId": 426,
              "team": "Sparta Rotterdam",
              "rank": 14,
              "points": 5,
              "goalsDiff": -7,
              "form": "LLDLD",
              "all": {
                "played": 7,
                "wins": 1,
                "draws": 2,
                "losses": 4,
                "goalsFor": 10,
                "goalsAgainst": 17
              },
              "home": {
                "played": 4,
                "wins": 0,
                "draws": 2,
                "losses": 2,
                "goalsFor": 5,
                "goalsAgainst": 10
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
              "teamId": 420,
              "team": "Cambuur",
              "rank": 15,
              "points": 5,
              "goalsDiff": -9,
              "form": "DWDLL",
              "all": {
                "played": 7,
                "wins": 1,
                "draws": 2,
                "losses": 4,
                "goalsFor": 10,
                "goalsAgainst": 19
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
                "played": 3,
                "wins": 0,
                "draws": 2,
                "losses": 1,
                "goalsFor": 4,
                "goalsAgainst": 6
              }
            },
            {
              "teamId": 193,
              "team": "PEC Zwolle",
              "rank": 16,
              "points": 4,
              "goalsDiff": -14,
              "form": "LLDLW",
              "all": {
                "played": 7,
                "wins": 1,
                "draws": 1,
                "losses": 5,
                "goalsFor": 6,
                "goalsAgainst": 20
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
                "played": 4,
                "wins": 1,
                "draws": 1,
                "losses": 2,
                "goalsFor": 5,
                "goalsAgainst": 8
              }
            },
            {
              "teamId": 198,
              "team": "ADO Den Haag",
              "rank": 17,
              "points": 2,
              "goalsDiff": -10,
              "form": "DLLDL",
              "all": {
                "played": 7,
                "wins": 0,
                "draws": 2,
                "losses": 5,
                "goalsFor": 7,
                "goalsAgainst": 17
              },
              "home": {
                "played": 3,
                "wins": 0,
                "draws": 1,
                "losses": 2,
                "goalsFor": 4,
                "goalsAgainst": 8
              },
              "away": {
                "played": 4,
                "wins": 0,
                "draws": 1,
                "losses": 3,
                "goalsFor": 3,
                "goalsAgainst": 9
              }
            },
            {
              "teamId": 195,
              "team": "Willem II",
              "rank": 18,
              "points": 2,
              "goalsDiff": -14,
              "form": "LLDLD",
              "all": {
                "played": 7,
                "wins": 0,
                "draws": 2,
                "losses": 5,
                "goalsFor": 6,
                "goalsAgainst": 20
              },
              "home": {
                "played": 4,
                "wins": 0,
                "draws": 1,
                "losses": 3,
                "goalsFor": 3,
                "goalsAgainst": 10
              },
              "away": {
                "played": 3,
                "wins": 0,
                "draws": 1,
                "losses": 2,
                "goalsFor": 3,
                "goalsAgainst": 10
              }
            }
          ],
          "teams": [
            {
              "teamId": 201,
              "team": "AZ Alkmaar",
              "form": "WWWWWD",
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
              "teamId": 427,
              "team": "Telstar",
              "form": "WLLDLD",
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
              "teamId": 415,
              "team": "Twente",
              "form": "LWWDWW",
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
              "form": "LWDLDLL",
              "all": {
                "played": 7,
                "wins": 1,
                "draws": 2,
                "losses": 4,
                "goalsFor": 10,
                "goalsAgainst": 17
              },
              "home": {
                "played": 4,
                "wins": 0,
                "draws": 2,
                "losses": 2,
                "goalsFor": 5,
                "goalsAgainst": 10
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
              "teamId": 210,
              "team": "Heerenveen",
              "form": "WDLDLDW",
              "all": {
                "played": 7,
                "wins": 2,
                "draws": 3,
                "losses": 2,
                "goalsFor": 11,
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
                "played": 3,
                "wins": 1,
                "draws": 2,
                "losses": 0,
                "goalsFor": 8,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 194,
              "team": "Ajax",
              "form": "WDWLWWD",
              "all": {
                "played": 7,
                "wins": 4,
                "draws": 2,
                "losses": 1,
                "goalsFor": 21,
                "goalsAgainst": 9
              },
              "home": {
                "played": 4,
                "wins": 1,
                "draws": 2,
                "losses": 1,
                "goalsFor": 10,
                "goalsAgainst": 8
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
              "form": "WLWWDLD",
              "all": {
                "played": 7,
                "wins": 3,
                "draws": 2,
                "losses": 2,
                "goalsFor": 15,
                "goalsAgainst": 9
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
                "played": 4,
                "wins": 2,
                "draws": 2,
                "losses": 0,
                "goalsFor": 11,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 195,
              "team": "Willem II",
              "form": "LLDLDLL",
              "all": {
                "played": 7,
                "wins": 0,
                "draws": 2,
                "losses": 5,
                "goalsFor": 6,
                "goalsAgainst": 20
              },
              "home": {
                "played": 4,
                "wins": 0,
                "draws": 1,
                "losses": 3,
                "goalsFor": 3,
                "goalsAgainst": 10
              },
              "away": {
                "played": 3,
                "wins": 0,
                "draws": 1,
                "losses": 2,
                "goalsFor": 3,
                "goalsAgainst": 10
              }
            },
            {
              "teamId": 205,
              "team": "Fortuna Sittard",
              "form": "DWLWWLW",
              "all": {
                "played": 7,
                "wins": 4,
                "draws": 1,
                "losses": 2,
                "goalsFor": 13,
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
                "played": 4,
                "wins": 3,
                "draws": 1,
                "losses": 0,
                "goalsFor": 9,
                "goalsAgainst": 6
              }
            },
            {
              "teamId": 209,
              "team": "Feyenoord",
              "form": "WDWDWWW",
              "all": {
                "played": 7,
                "wins": 5,
                "draws": 2,
                "losses": 0,
                "goalsFor": 25,
                "goalsAgainst": 7
              },
              "home": {
                "played": 3,
                "wins": 1,
                "draws": 2,
                "losses": 0,
                "goalsFor": 9,
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
              "teamId": 207,
              "team": "Utrecht",
              "form": "LLDLDWL",
              "all": {
                "played": 7,
                "wins": 1,
                "draws": 2,
                "losses": 4,
                "goalsFor": 11,
                "goalsAgainst": 24
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
                "played": 4,
                "wins": 1,
                "draws": 1,
                "losses": 2,
                "goalsFor": 6,
                "goalsAgainst": 11
              }
            },
            {
              "teamId": 413,
              "team": "NEC Nijmegen",
              "form": "LWWLDL",
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
              "teamId": 410,
              "team": "GO Ahead Eagles",
              "form": "WDWLDD",
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
            }
          ],
          "fixtures": [
            {
              "fixtureId": 1552177,
              "kickoff": "2026-09-20T21:30:00+09:00",
              "status": "1H",
              "homeTeamId": 201,
              "homeTeam": "AZ Alkmaar",
              "awayTeamId": 427,
              "awayTeam": "Telstar",
              "injuriesChecked": true,
              "injuries": [
                {
                  "fixtureId": 1552177,
                  "teamId": 201,
                  "playerId": 291505,
                  "player": "S. Resink",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1552177,
                  "teamId": 201,
                  "playerId": 179839,
                  "player": "D. Kasius",
                  "type": "Questionable",
                  "reason": "Groin Injury"
                },
                {
                  "fixtureId": 1552177,
                  "teamId": 427,
                  "playerId": 37817,
                  "player": "R. Koeman Jr",
                  "type": "Questionable",
                  "reason": "Personal Reasons"
                }
              ],
              "lineupsChecked": true,
              "lineups": [
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
                    "P. Koopmeiners",
                    "D. Kwakman",
                    "C. Stengs",
                    "V. Byskov",
                    "R. Daal",
                    "M. Meerdink"
                  ]
                },
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
                    "Jelani Seedorf"
                  ]
                }
              ]
            },
            {
              "fixtureId": 1552179,
              "kickoff": "2026-09-20T21:30:00+09:00",
              "status": "1H",
              "homeTeamId": 415,
              "homeTeam": "Twente",
              "awayTeamId": 197,
              "awayTeam": "PSV Eindhoven",
              "injuriesChecked": true,
              "injuries": [
                {
                  "fixtureId": 1552179,
                  "teamId": 415,
                  "playerId": 191879,
                  "player": "K. Hlynsson",
                  "type": "Missing Fixture",
                  "reason": "Inactive"
                },
                {
                  "fixtureId": 1552179,
                  "teamId": 415,
                  "playerId": 292553,
                  "player": "S. Lemkin",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1552179,
                  "teamId": 197,
                  "playerId": 36987,
                  "player": "S. Lammers",
                  "type": "Missing Fixture",
                  "reason": "Lacking Match Fitness"
                },
                {
                  "fixtureId": 1552179,
                  "teamId": 197,
                  "playerId": 307426,
                  "player": "A. Nagalo",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1552179,
                  "teamId": 197,
                  "playerId": 378864,
                  "player": "S. Ouaissa",
                  "type": "Missing Fixture",
                  "reason": "Muscle Injury"
                },
                {
                  "fixtureId": 1552179,
                  "teamId": 197,
                  "playerId": 25646,
                  "player": "A. Plea",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1552179,
                  "teamId": 197,
                  "playerId": 37890,
                  "player": "J. Schouten",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1552179,
                  "teamId": 197,
                  "playerId": 191233,
                  "player": "K. Sildillia",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                }
              ],
              "lineupsChecked": true,
              "lineups": [
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
                    "F. Thorvaldsen",
                    "Y. Taha",
                    "S. Ørjasæter",
                    "W. Weghorst"
                  ]
                },
                {
                  "teamId": 197,
                  "team": "PSV Eindhoven",
                  "formation": "4-2-3-1",
                  "coach": "P. Bosz",
                  "starters": [
                    "M. Kovář",
                    "S. Dest",
                    "L. Geertruida",
                    "A. Obispo",
                    "Mauro Júnior",
                    "K. Sano",
                    "P. Wanner",
                    "I. Perišić",
                    "G. Til",
                    "R. van Bommel",
                    "R. Pepi"
                  ]
                }
              ]
            },
            {
              "fixtureId": 1552171,
              "kickoff": "2026-09-20T01:45:00+09:00",
              "status": "FT",
              "homeTeamId": 426,
              "homeTeam": "Sparta Rotterdam",
              "awayTeamId": 210,
              "awayTeam": "Heerenveen",
              "injuriesChecked": true,
              "injuries": [
                {
                  "fixtureId": 1552171,
                  "teamId": 426,
                  "playerId": 237131,
                  "player": "S. Mito",
                  "type": "Missing Fixture",
                  "reason": "Inactive"
                },
                {
                  "fixtureId": 1552171,
                  "teamId": 210,
                  "playerId": 431651,
                  "player": "M. Egbring",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1552171,
                  "teamId": 210,
                  "playerId": 272723,
                  "player": "M. Hilgers",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1552171,
                  "teamId": 210,
                  "playerId": 152850,
                  "player": "D. Proper",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                }
              ],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1552174,
              "kickoff": "2026-09-20T03:00:00+09:00",
              "status": "FT",
              "homeTeamId": 194,
              "homeTeam": "Ajax",
              "awayTeamId": 196,
              "awayTeam": "Excelsior",
              "injuriesChecked": true,
              "injuries": [
                {
                  "fixtureId": 1552174,
                  "teamId": 194,
                  "playerId": 301771,
                  "player": "S. Adingra",
                  "type": "Missing Fixture",
                  "reason": "Foot Injury"
                },
                {
                  "fixtureId": 1552174,
                  "teamId": 194,
                  "playerId": 531,
                  "player": "D. Blind",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1552174,
                  "teamId": 194,
                  "playerId": 453706,
                  "player": "A. Bouwman",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1552174,
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
              "fixtureId": 1552175,
              "kickoff": "2026-09-20T04:00:00+09:00",
              "status": "FT",
              "homeTeamId": 195,
              "homeTeam": "Willem II",
              "awayTeamId": 205,
              "awayTeam": "Fortuna Sittard",
              "injuriesChecked": true,
              "injuries": [
                {
                  "fixtureId": 1552175,
                  "teamId": 195,
                  "playerId": 446288,
                  "player": "K. Boogaard",
                  "type": "Missing Fixture",
                  "reason": "Knock"
                },
                {
                  "fixtureId": 1552175,
                  "teamId": 195,
                  "playerId": 411824,
                  "player": "A. Culum",
                  "type": "Missing Fixture",
                  "reason": "Foot Injury"
                },
                {
                  "fixtureId": 1552175,
                  "teamId": 195,
                  "playerId": 1405,
                  "player": "T. Didillon Hodl",
                  "type": "Missing Fixture",
                  "reason": "Hamstring Injury"
                },
                {
                  "fixtureId": 1552175,
                  "teamId": 195,
                  "playerId": 24924,
                  "player": "J. Hoogma",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1552175,
                  "teamId": 195,
                  "playerId": 393871,
                  "player": "A. Lachkar",
                  "type": "Missing Fixture",
                  "reason": "Groin Injury"
                },
                {
                  "fixtureId": 1552175,
                  "teamId": 205,
                  "playerId": 467814,
                  "player": "R. Bayram",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1552175,
                  "teamId": 205,
                  "playerId": 40201,
                  "player": "I. Marquez",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1552175,
                  "teamId": 205,
                  "playerId": 181865,
                  "player": "Y. Oukili",
                  "type": "Missing Fixture",
                  "reason": "Groin Injury"
                },
                {
                  "fixtureId": 1552175,
                  "teamId": 205,
                  "playerId": 357051,
                  "player": "S. Simons",
                  "type": "Missing Fixture",
                  "reason": "Hamstring Injury"
                },
                {
                  "fixtureId": 1552175,
                  "teamId": 205,
                  "playerId": 339169,
                  "player": "S. Wylin",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                }
              ],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1552176,
              "kickoff": "2026-09-20T19:15:00+09:00",
              "status": "FT",
              "homeTeamId": 209,
              "homeTeam": "Feyenoord",
              "awayTeamId": 207,
              "awayTeam": "Utrecht",
              "injuriesChecked": true,
              "injuries": [
                {
                  "fixtureId": 1552176,
                  "teamId": 209,
                  "playerId": 328141,
                  "player": "T. Beelen",
                  "type": "Missing Fixture",
                  "reason": "Broken Leg"
                },
                {
                  "fixtureId": 1552176,
                  "teamId": 209,
                  "playerId": 337587,
                  "player": "J. Bos",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1552176,
                  "teamId": 209,
                  "playerId": 40911,
                  "player": "J. Moder",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1552176,
                  "teamId": 209,
                  "playerId": 37147,
                  "player": "B. Nieuwkoop",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1552176,
                  "teamId": 209,
                  "playerId": 37742,
                  "player": "G. Smal",
                  "type": "Missing Fixture",
                  "reason": "Ankle Injury"
                },
                {
                  "fixtureId": 1552176,
                  "teamId": 209,
                  "playerId": 128385,
                  "player": "G. Borges",
                  "type": "Questionable",
                  "reason": "Knock"
                },
                {
                  "fixtureId": 1552176,
                  "teamId": 207,
                  "playerId": 321746,
                  "player": "A. Engwanda",
                  "type": "Missing Fixture",
                  "reason": "Hamstring Injury"
                },
                {
                  "fixtureId": 1552176,
                  "teamId": 207,
                  "playerId": 38752,
                  "player": "V. Jensen",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1552176,
                  "teamId": 207,
                  "playerId": 364809,
                  "player": "M. Jonathans",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1552176,
                  "teamId": 207,
                  "playerId": 280317,
                  "player": "N. Ohio",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1552176,
                  "teamId": 207,
                  "playerId": 149557,
                  "player": "K. Paredes",
                  "type": "Missing Fixture",
                  "reason": "Inactive"
                },
                {
                  "fixtureId": 1552176,
                  "teamId": 207,
                  "playerId": 336678,
                  "player": "O. Agougil",
                  "type": "Questionable",
                  "reason": "Health problems"
                }
              ],
              "lineupsChecked": true,
              "lineups": [
                {
                  "teamId": 209,
                  "team": "Feyenoord",
                  "formation": "4-3-3",
                  "coach": "G. van Bronckhorst",
                  "starters": [
                    "T. Ernst",
                    "G. Read",
                    "T. Watanabe",
                    "J. St. Juste",
                    "Mika Màrmol",
                    "G. Zechiël",
                    "C. Vanhoutte",
                    "O. Targhalline",
                    "A. Hadj-Moussa",
                    "Nacho Ferri",
                    "L. Valente"
                  ]
                },
                {
                  "teamId": 207,
                  "team": "Utrecht",
                  "formation": "3-4-3",
                  "coach": "A. Correia",
                  "starters": [
                    "V. Barkas",
                    "S. Horemans",
                    "M. Didden",
                    "N. Panagiotou",
                    "N. Vesterlund",
                    "D. de Wit",
                    "D. van den Berg",
                    "A. Zagré",
                    "Ángel Alarcón",
                    "Artem Stepanov",
                    "A. Blake"
                  ]
                }
              ]
            },
            {
              "fixtureId": 1552178,
              "kickoff": "2026-09-20T23:45:00+09:00",
              "status": "NS",
              "homeTeamId": 413,
              "homeTeam": "NEC Nijmegen",
              "awayTeamId": 410,
              "awayTeam": "GO Ahead Eagles",
              "injuriesChecked": true,
              "injuries": [
                {
                  "fixtureId": 1552178,
                  "teamId": 413,
                  "playerId": 353808,
                  "player": "D. Fonville",
                  "type": "Missing Fixture",
                  "reason": "Ankle Injury"
                },
                {
                  "fixtureId": 1552178,
                  "teamId": 413,
                  "playerId": 278159,
                  "player": "A. Kaplan",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1552178,
                  "teamId": 413,
                  "playerId": 47446,
                  "player": "E. Mor",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1552178,
                  "teamId": 413,
                  "playerId": 441958,
                  "player": "C. Bischoff",
                  "type": "Questionable",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1552178,
                  "teamId": 410,
                  "playerId": 25260,
                  "player": "G. Nauber",
                  "type": "Missing Fixture",
                  "reason": "Broken Leg"
                },
                {
                  "fixtureId": 1552178,
                  "teamId": 410,
                  "playerId": 378962,
                  "player": "P. Saathof",
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
              "points": 15,
              "goalsDiff": 9,
              "form": "DDWWW",
              "all": {
                "played": 7,
                "wins": 4,
                "draws": 3,
                "losses": 0,
                "goalsFor": 17,
                "goalsAgainst": 8
              },
              "home": {
                "played": 4,
                "wins": 3,
                "draws": 1,
                "losses": 0,
                "goalsFor": 10,
                "goalsAgainst": 5
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
              "points": 11,
              "goalsDiff": 3,
              "form": "DLDWL",
              "all": {
                "played": 7,
                "wins": 3,
                "draws": 2,
                "losses": 2,
                "goalsFor": 10,
                "goalsAgainst": 7
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
                "played": 4,
                "wins": 1,
                "draws": 2,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 15130,
              "team": "Estrela",
              "rank": 6,
              "points": 10,
              "goalsDiff": 2,
              "form": "DWDWD",
              "all": {
                "played": 6,
                "wins": 2,
                "draws": 4,
                "losses": 0,
                "goalsFor": 14,
                "goalsAgainst": 12
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
                "played": 3,
                "wins": 1,
                "draws": 2,
                "losses": 0,
                "goalsFor": 8,
                "goalsAgainst": 7
              }
            },
            {
              "teamId": 217,
              "team": "SC Braga",
              "rank": 7,
              "points": 10,
              "goalsDiff": 2,
              "form": "WLWWD",
              "all": {
                "played": 5,
                "wins": 3,
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
                "goalsFor": 2,
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
              "rank": 8,
              "points": 8,
              "goalsDiff": 0,
              "form": "DLLDW",
              "all": {
                "played": 6,
                "wins": 2,
                "draws": 2,
                "losses": 2,
                "goalsFor": 5,
                "goalsAgainst": 5
              },
              "home": {
                "played": 4,
                "wins": 2,
                "draws": 1,
                "losses": 1,
                "goalsFor": 4,
                "goalsAgainst": 2
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
              "teamId": 238,
              "team": "Academico Viseu",
              "rank": 9,
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
              "teamId": 4724,
              "team": "Alverca",
              "rank": 10,
              "points": 8,
              "goalsDiff": -2,
              "form": "WWLDL",
              "all": {
                "played": 7,
                "wins": 2,
                "draws": 2,
                "losses": 3,
                "goalsFor": 9,
                "goalsAgainst": 11
              },
              "home": {
                "played": 4,
                "wins": 1,
                "draws": 2,
                "losses": 1,
                "goalsFor": 5,
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
              "teamId": 214,
              "team": "Maritimo",
              "rank": 11,
              "points": 8,
              "goalsDiff": -4,
              "form": "DLLLD",
              "all": {
                "played": 7,
                "wins": 2,
                "draws": 2,
                "losses": 3,
                "goalsFor": 8,
                "goalsAgainst": 12
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
                "played": 4,
                "wins": 1,
                "draws": 1,
                "losses": 2,
                "goalsFor": 5,
                "goalsAgainst": 7
              }
            },
            {
              "teamId": 242,
              "team": "Famalicao",
              "rank": 12,
              "points": 7,
              "goalsDiff": 2,
              "form": "WDDDL",
              "all": {
                "played": 7,
                "wins": 1,
                "draws": 4,
                "losses": 2,
                "goalsFor": 9,
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
                "played": 4,
                "wins": 1,
                "draws": 2,
                "losses": 1,
                "goalsFor": 7,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 215,
              "team": "Moreirense",
              "rank": 13,
              "points": 7,
              "goalsDiff": -6,
              "form": "WLLWL",
              "all": {
                "played": 6,
                "wins": 2,
                "draws": 1,
                "losses": 3,
                "goalsFor": 7,
                "goalsAgainst": 13
              },
              "home": {
                "played": 3,
                "wins": 1,
                "draws": 1,
                "losses": 1,
                "goalsFor": 5,
                "goalsAgainst": 7
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
              "rank": 14,
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
              "rank": 15,
              "points": 4,
              "goalsDiff": -8,
              "form": "LLLLL",
              "all": {
                "played": 7,
                "wins": 1,
                "draws": 1,
                "losses": 5,
                "goalsFor": 7,
                "goalsAgainst": 15
              },
              "home": {
                "played": 4,
                "wins": 1,
                "draws": 0,
                "losses": 3,
                "goalsFor": 5,
                "goalsAgainst": 10
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
              "teamId": 226,
              "team": "Rio Ave",
              "rank": 16,
              "points": 4,
              "goalsDiff": -10,
              "form": "LDLLW",
              "all": {
                "played": 7,
                "wins": 1,
                "draws": 1,
                "losses": 5,
                "goalsFor": 5,
                "goalsAgainst": 15
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
                "played": 4,
                "wins": 1,
                "draws": 0,
                "losses": 3,
                "goalsFor": 2,
                "goalsAgainst": 6
              }
            },
            {
              "teamId": 230,
              "team": "Estoril",
              "rank": 17,
              "points": 2,
              "goalsDiff": -6,
              "form": "LDLLL",
              "all": {
                "played": 6,
                "wins": 0,
                "draws": 2,
                "losses": 4,
                "goalsFor": 2,
                "goalsAgainst": 8
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
                "played": 3,
                "wins": 0,
                "draws": 0,
                "losses": 3,
                "goalsFor": 1,
                "goalsAgainst": 5
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
              "teamId": 4724,
              "team": "Alverca",
              "form": "LDLDLWW",
              "all": {
                "played": 7,
                "wins": 2,
                "draws": 2,
                "losses": 3,
                "goalsFor": 9,
                "goalsAgainst": 11
              },
              "home": {
                "played": 4,
                "wins": 1,
                "draws": 2,
                "losses": 1,
                "goalsFor": 5,
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
              "teamId": 226,
              "team": "Rio Ave",
              "form": "LLWLLDL",
              "all": {
                "played": 7,
                "wins": 1,
                "draws": 1,
                "losses": 5,
                "goalsFor": 5,
                "goalsAgainst": 15
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
                "played": 4,
                "wins": 1,
                "draws": 0,
                "losses": 3,
                "goalsFor": 2,
                "goalsAgainst": 6
              }
            },
            {
              "teamId": 228,
              "team": "Sporting CP",
              "form": "DWWWWDD",
              "all": {
                "played": 7,
                "wins": 4,
                "draws": 3,
                "losses": 0,
                "goalsFor": 17,
                "goalsAgainst": 8
              },
              "home": {
                "played": 4,
                "wins": 3,
                "draws": 1,
                "losses": 0,
                "goalsFor": 10,
                "goalsAgainst": 5
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
              "teamId": 240,
              "team": "Arouca",
              "form": "WWLWDLD",
              "all": {
                "played": 7,
                "wins": 3,
                "draws": 2,
                "losses": 2,
                "goalsFor": 10,
                "goalsAgainst": 7
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
                "played": 4,
                "wins": 1,
                "draws": 2,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 224,
              "team": "Vitória SC",
              "form": "LLWLDL",
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
              "teamId": 215,
              "team": "Moreirense",
              "form": "DLWLLW",
              "all": {
                "played": 6,
                "wins": 2,
                "draws": 1,
                "losses": 3,
                "goalsFor": 7,
                "goalsAgainst": 13
              },
              "home": {
                "played": 3,
                "wins": 1,
                "draws": 1,
                "losses": 1,
                "goalsFor": 5,
                "goalsAgainst": 7
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
              "teamId": 15130,
              "team": "Estrela",
              "form": "DDWDWD",
              "all": {
                "played": 6,
                "wins": 2,
                "draws": 4,
                "losses": 0,
                "goalsFor": 14,
                "goalsAgainst": 12
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
                "played": 3,
                "wins": 1,
                "draws": 2,
                "losses": 0,
                "goalsFor": 8,
                "goalsAgainst": 7
              }
            },
            {
              "teamId": 238,
              "team": "Academico Viseu",
              "form": "DLDLWW",
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
            }
          ],
          "fixtures": [
            {
              "fixtureId": 1575500,
              "kickoff": "2026-09-20T02:00:00+09:00",
              "status": "FT",
              "homeTeamId": 4724,
              "homeTeam": "Alverca",
              "awayTeamId": 226,
              "awayTeam": "Rio Ave",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1575507,
              "kickoff": "2026-09-20T04:30:00+09:00",
              "status": "FT",
              "homeTeamId": 228,
              "homeTeam": "Sporting CP",
              "awayTeamId": 240,
              "awayTeam": "Arouca",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1575508,
              "kickoff": "2026-09-20T23:30:00+09:00",
              "status": "NS",
              "homeTeamId": 224,
              "homeTeam": "Vitória SC",
              "awayTeamId": 215,
              "awayTeam": "Moreirense",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": true,
              "lineups": []
            },
            {
              "fixtureId": 1575502,
              "kickoff": "2026-09-20T23:30:00+09:00",
              "status": "NS",
              "homeTeamId": 15130,
              "homeTeam": "Estrela",
              "awayTeamId": 238,
              "awayTeam": "Academico Viseu",
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
              "teamId": 254,
              "team": "Heart Of Midlothian",
              "rank": 2,
              "points": 13,
              "goalsDiff": 6,
              "form": "DLWWW",
              "all": {
                "played": 7,
                "wins": 4,
                "draws": 1,
                "losses": 2,
                "goalsFor": 14,
                "goalsAgainst": 8
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
                "played": 4,
                "wins": 1,
                "draws": 1,
                "losses": 2,
                "goalsFor": 6,
                "goalsAgainst": 6
              }
            },
            {
              "teamId": 257,
              "team": "Rangers",
              "rank": 3,
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
              "teamId": 253,
              "team": "Dundee",
              "rank": 4,
              "points": 10,
              "goalsDiff": 2,
              "form": "WLDLW",
              "all": {
                "played": 7,
                "wins": 3,
                "draws": 1,
                "losses": 3,
                "goalsFor": 9,
                "goalsAgainst": 7
              },
              "home": {
                "played": 4,
                "wins": 2,
                "draws": 1,
                "losses": 1,
                "goalsFor": 6,
                "goalsAgainst": 4
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
              "teamId": 251,
              "team": "ST Mirren",
              "rank": 5,
              "points": 10,
              "goalsDiff": -1,
              "form": "LLLWD",
              "all": {
                "played": 7,
                "wins": 3,
                "draws": 1,
                "losses": 3,
                "goalsFor": 8,
                "goalsAgainst": 9
              },
              "home": {
                "played": 4,
                "wins": 1,
                "draws": 1,
                "losses": 2,
                "goalsFor": 5,
                "goalsAgainst": 8
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
              "teamId": 258,
              "team": "ST Johnstone",
              "rank": 6,
              "points": 8,
              "goalsDiff": -1,
              "form": "DLWDL",
              "all": {
                "played": 7,
                "wins": 2,
                "draws": 2,
                "losses": 3,
                "goalsFor": 9,
                "goalsAgainst": 10
              },
              "home": {
                "played": 4,
                "wins": 2,
                "draws": 1,
                "losses": 1,
                "goalsFor": 7,
                "goalsAgainst": 6
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
              "rank": 7,
              "points": 8,
              "goalsDiff": -1,
              "form": "DWDLL",
              "all": {
                "played": 7,
                "wins": 2,
                "draws": 2,
                "losses": 3,
                "goalsFor": 7,
                "goalsAgainst": 8
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
                "wins": 1,
                "draws": 1,
                "losses": 2,
                "goalsFor": 5,
                "goalsAgainst": 6
              }
            },
            {
              "teamId": 1386,
              "team": "Dundee Utd",
              "rank": 8,
              "points": 8,
              "goalsDiff": -2,
              "form": "WDLWL",
              "all": {
                "played": 7,
                "wins": 2,
                "draws": 2,
                "losses": 3,
                "goalsFor": 9,
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
                "played": 4,
                "wins": 2,
                "draws": 0,
                "losses": 2,
                "goalsFor": 7,
                "goalsAgainst": 7
              }
            },
            {
              "teamId": 256,
              "team": "Motherwell",
              "rank": 9,
              "points": 8,
              "goalsDiff": -2,
              "form": "LLLWD",
              "all": {
                "played": 7,
                "wins": 2,
                "draws": 2,
                "losses": 3,
                "goalsFor": 9,
                "goalsAgainst": 11
              },
              "home": {
                "played": 3,
                "wins": 1,
                "draws": 1,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 4
              },
              "away": {
                "played": 4,
                "wins": 1,
                "draws": 1,
                "losses": 2,
                "goalsFor": 6,
                "goalsAgainst": 7
              }
            },
            {
              "teamId": 249,
              "team": "Hibernian",
              "rank": 10,
              "points": 7,
              "goalsDiff": -3,
              "form": "DLLLW",
              "all": {
                "played": 7,
                "wins": 2,
                "draws": 1,
                "losses": 4,
                "goalsFor": 8,
                "goalsAgainst": 11
              },
              "home": {
                "played": 4,
                "wins": 0,
                "draws": 1,
                "losses": 3,
                "goalsFor": 3,
                "goalsAgainst": 7
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
              "teamId": 1389,
              "team": "Falkirk",
              "rank": 11,
              "points": 6,
              "goalsDiff": -3,
              "form": "DWDLL",
              "all": {
                "played": 7,
                "wins": 1,
                "draws": 3,
                "losses": 3,
                "goalsFor": 6,
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
                "played": 4,
                "wins": 0,
                "draws": 3,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 250,
              "team": "Kilmarnock",
              "rank": 12,
              "points": 5,
              "goalsDiff": -9,
              "form": "DWDLL",
              "all": {
                "played": 7,
                "wins": 1,
                "draws": 2,
                "losses": 4,
                "goalsFor": 6,
                "goalsAgainst": 15
              },
              "home": {
                "played": 4,
                "wins": 0,
                "draws": 1,
                "losses": 3,
                "goalsFor": 2,
                "goalsAgainst": 11
              },
              "away": {
                "played": 3,
                "wins": 1,
                "draws": 1,
                "losses": 1,
                "goalsFor": 4,
                "goalsAgainst": 4
              }
            }
          ],
          "teams": [
            {
              "teamId": 250,
              "team": "Kilmarnock",
              "form": "LLLLDWD",
              "all": {
                "played": 7,
                "wins": 1,
                "draws": 2,
                "losses": 4,
                "goalsFor": 6,
                "goalsAgainst": 15
              },
              "home": {
                "played": 4,
                "wins": 0,
                "draws": 1,
                "losses": 3,
                "goalsFor": 2,
                "goalsAgainst": 11
              },
              "away": {
                "played": 3,
                "wins": 1,
                "draws": 1,
                "losses": 1,
                "goalsFor": 4,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 254,
              "team": "Heart Of Midlothian",
              "form": "LWWWWLD",
              "all": {
                "played": 7,
                "wins": 4,
                "draws": 1,
                "losses": 2,
                "goalsFor": 14,
                "goalsAgainst": 8
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
                "played": 4,
                "wins": 1,
                "draws": 1,
                "losses": 2,
                "goalsFor": 6,
                "goalsAgainst": 6
              }
            },
            {
              "teamId": 247,
              "team": "Celtic",
              "form": "WWWWWWL",
              "all": {
                "played": 7,
                "wins": 6,
                "draws": 0,
                "losses": 1,
                "goalsFor": 14,
                "goalsAgainst": 4
              },
              "home": {
                "played": 4,
                "wins": 3,
                "draws": 0,
                "losses": 1,
                "goalsFor": 6,
                "goalsAgainst": 2
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
              "form": "DLWWWWW",
              "all": {
                "played": 7,
                "wins": 5,
                "draws": 1,
                "losses": 1,
                "goalsFor": 8,
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
                "played": 4,
                "wins": 3,
                "draws": 1,
                "losses": 0,
                "goalsFor": 5,
                "goalsAgainst": 2
              }
            }
          ],
          "fixtures": [
            {
              "fixtureId": 1556666,
              "kickoff": "2026-09-20T01:45:00+09:00",
              "status": "FT",
              "homeTeamId": 250,
              "homeTeam": "Kilmarnock",
              "awayTeamId": 254,
              "awayTeam": "Heart Of Midlothian",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1556669,
              "kickoff": "2026-09-20T20:00:00+09:00",
              "status": "FT",
              "homeTeamId": 247,
              "homeTeam": "Celtic",
              "awayTeamId": 257,
              "awayTeam": "Rangers",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": true,
              "lineups": [
                {
                  "teamId": 247,
                  "team": "Celtic",
                  "formation": "3-5-2",
                  "coach": "M. O'Neill",
                  "starters": [
                    "V. Sinisalo",
                    "C. Carter-Vickers",
                    "A. Trusty",
                    "L. Scales",
                    "Colby Donovan",
                    "L. McCowan",
                    "C. McGregor",
                    "M. Baur",
                    "K. Tierney",
                    "B. Nygren",
                    "C. Durán"
                  ]
                },
                {
                  "teamId": 257,
                  "team": "Rangers",
                  "formation": "4-4-1-1",
                  "coach": "D. McInnes",
                  "starters": [
                    "I. Pandur",
                    "D. Sterling",
                    "E. Fernandez",
                    "O. Makhanya",
                    "J. Penrice",
                    "Minsu Kim",
                    "D. Neil",
                    "N. Raskin",
                    "D. Gassama",
                    "R. Naderi",
                    "K. Kelsy"
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
              "points": 19,
              "goalsDiff": 9,
              "form": "WDWWW",
              "all": {
                "played": 7,
                "wins": 6,
                "draws": 1,
                "losses": 0,
                "goalsFor": 13,
                "goalsAgainst": 4
              },
              "home": {
                "played": 4,
                "wins": 4,
                "draws": 0,
                "losses": 0,
                "goalsFor": 7,
                "goalsAgainst": 2
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
              "teamId": 736,
              "team": "Charleroi",
              "rank": 2,
              "points": 18,
              "goalsDiff": 8,
              "form": "WWLWW",
              "all": {
                "played": 7,
                "wins": 6,
                "draws": 0,
                "losses": 1,
                "goalsFor": 15,
                "goalsAgainst": 7
              },
              "home": {
                "played": 4,
                "wins": 3,
                "draws": 0,
                "losses": 1,
                "goalsFor": 10,
                "goalsAgainst": 6
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
              "teamId": 1393,
              "team": "Union St. Gilloise",
              "rank": 3,
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
              "teamId": 569,
              "team": "Club Brugge KV",
              "rank": 4,
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
              "teamId": 554,
              "team": "Anderlecht",
              "rank": 5,
              "points": 13,
              "goalsDiff": 2,
              "form": "WWDWL",
              "all": {
                "played": 7,
                "wins": 4,
                "draws": 1,
                "losses": 2,
                "goalsFor": 7,
                "goalsAgainst": 5
              },
              "home": {
                "played": 4,
                "wins": 3,
                "draws": 1,
                "losses": 0,
                "goalsFor": 6,
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
              "teamId": 600,
              "team": "Zulte Waregem",
              "rank": 6,
              "points": 11,
              "goalsDiff": 3,
              "form": "LLWDW",
              "all": {
                "played": 7,
                "wins": 3,
                "draws": 2,
                "losses": 2,
                "goalsFor": 10,
                "goalsAgainst": 7
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
                "draws": 2,
                "losses": 1,
                "goalsFor": 4,
                "goalsAgainst": 5
              }
            },
            {
              "teamId": 733,
              "team": "Standard Liege",
              "rank": 7,
              "points": 11,
              "goalsDiff": 1,
              "form": "LLWWW",
              "all": {
                "played": 7,
                "wins": 3,
                "draws": 2,
                "losses": 2,
                "goalsFor": 13,
                "goalsAgainst": 12
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
                "played": 4,
                "wins": 1,
                "draws": 1,
                "losses": 2,
                "goalsFor": 8,
                "goalsAgainst": 10
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
              "teamId": 259,
              "team": "Lommel United",
              "rank": 11,
              "points": 8,
              "goalsDiff": -2,
              "form": "DLLWW",
              "all": {
                "played": 7,
                "wins": 2,
                "draws": 2,
                "losses": 3,
                "goalsFor": 6,
                "goalsAgainst": 8
              },
              "home": {
                "played": 4,
                "wins": 1,
                "draws": 1,
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
              "teamId": 740,
              "team": "Antwerp",
              "rank": 12,
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
              "goalsDiff": -7,
              "form": "LWLDL",
              "all": {
                "played": 7,
                "wins": 1,
                "draws": 1,
                "losses": 5,
                "goalsFor": 7,
                "goalsAgainst": 14
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
                "played": 4,
                "wins": 0,
                "draws": 0,
                "losses": 4,
                "goalsFor": 1,
                "goalsAgainst": 10
              }
            },
            {
              "teamId": 260,
              "team": "OH Leuven",
              "rank": 15,
              "points": 4,
              "goalsDiff": -8,
              "form": "WDLLL",
              "all": {
                "played": 7,
                "wins": 1,
                "draws": 1,
                "losses": 5,
                "goalsFor": 5,
                "goalsAgainst": 13
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
                "wins": 0,
                "draws": 0,
                "losses": 3,
                "goalsFor": 1,
                "goalsAgainst": 7
              }
            },
            {
              "teamId": 741,
              "team": "Cercle Brugge",
              "rank": 16,
              "points": 3,
              "goalsDiff": -6,
              "form": "LDLLL",
              "all": {
                "played": 7,
                "wins": 0,
                "draws": 3,
                "losses": 4,
                "goalsFor": 8,
                "goalsAgainst": 14
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
                "played": 4,
                "wins": 0,
                "draws": 2,
                "losses": 2,
                "goalsFor": 5,
                "goalsAgainst": 7
              }
            },
            {
              "teamId": 266,
              "team": "KV Mechelen",
              "rank": 17,
              "points": 3,
              "goalsDiff": -9,
              "form": "DLLDL",
              "all": {
                "played": 7,
                "wins": 0,
                "draws": 3,
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
                "played": 4,
                "wins": 0,
                "draws": 2,
                "losses": 2,
                "goalsFor": 2,
                "goalsAgainst": 6
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
              "teamId": 736,
              "team": "Charleroi",
              "form": "WWWWLWW",
              "all": {
                "played": 7,
                "wins": 6,
                "draws": 0,
                "losses": 1,
                "goalsFor": 15,
                "goalsAgainst": 7
              },
              "home": {
                "played": 4,
                "wins": 3,
                "draws": 0,
                "losses": 1,
                "goalsFor": 10,
                "goalsAgainst": 6
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
              "teamId": 741,
              "team": "Cercle Brugge",
              "form": "DDLLLDL",
              "all": {
                "played": 7,
                "wins": 0,
                "draws": 3,
                "losses": 4,
                "goalsFor": 8,
                "goalsAgainst": 14
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
                "played": 4,
                "wins": 0,
                "draws": 2,
                "losses": 2,
                "goalsFor": 5,
                "goalsAgainst": 7
              }
            },
            {
              "teamId": 259,
              "team": "Lommel United",
              "form": "DLWWLLD",
              "all": {
                "played": 7,
                "wins": 2,
                "draws": 2,
                "losses": 3,
                "goalsFor": 6,
                "goalsAgainst": 8
              },
              "home": {
                "played": 4,
                "wins": 1,
                "draws": 1,
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
              "teamId": 266,
              "team": "KV Mechelen",
              "form": "LDLDLLD",
              "all": {
                "played": 7,
                "wins": 0,
                "draws": 3,
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
                "played": 4,
                "wins": 0,
                "draws": 2,
                "losses": 2,
                "goalsFor": 2,
                "goalsAgainst": 6
              }
            },
            {
              "teamId": 554,
              "team": "Anderlecht",
              "form": "WLLWDWW",
              "all": {
                "played": 7,
                "wins": 4,
                "draws": 1,
                "losses": 2,
                "goalsFor": 7,
                "goalsAgainst": 5
              },
              "home": {
                "played": 4,
                "wins": 3,
                "draws": 1,
                "losses": 0,
                "goalsFor": 6,
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
              "teamId": 600,
              "team": "Zulte Waregem",
              "form": "WDWDWLL",
              "all": {
                "played": 7,
                "wins": 3,
                "draws": 2,
                "losses": 2,
                "goalsFor": 10,
                "goalsAgainst": 7
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
                "draws": 2,
                "losses": 1,
                "goalsFor": 4,
                "goalsAgainst": 5
              }
            },
            {
              "teamId": 735,
              "team": "St. Truiden",
              "form": "DDWLWL",
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
              "teamId": 261,
              "team": "KVC Westerlo",
              "form": "LLLDWW",
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
              "teamId": 740,
              "team": "Antwerp",
              "form": "WWDLLL",
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
              "teamId": 1393,
              "team": "Union St. Gilloise",
              "form": "WDWWWW",
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
            }
          ],
          "fixtures": [
            {
              "fixtureId": 1558637,
              "kickoff": "2026-09-20T01:15:00+09:00",
              "status": "FT",
              "homeTeamId": 736,
              "homeTeam": "Charleroi",
              "awayTeamId": 741,
              "awayTeam": "Cercle Brugge",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1558639,
              "kickoff": "2026-09-20T03:45:00+09:00",
              "status": "FT",
              "homeTeamId": 259,
              "homeTeam": "Lommel United",
              "awayTeamId": 266,
              "awayTeam": "KV Mechelen",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1558638,
              "kickoff": "2026-09-20T03:45:00+09:00",
              "status": "FT",
              "homeTeamId": 554,
              "homeTeam": "Anderlecht",
              "awayTeamId": 600,
              "awayTeam": "Zulte Waregem",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1558641,
              "kickoff": "2026-09-20T23:00:00+09:00",
              "status": "NS",
              "homeTeamId": 735,
              "homeTeam": "St. Truiden",
              "awayTeamId": 261,
              "awayTeam": "KVC Westerlo",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": true,
              "lineups": []
            },
            {
              "fixtureId": 1558640,
              "kickoff": "2026-09-20T20:30:00+09:00",
              "status": "2H",
              "homeTeamId": 740,
              "homeTeam": "Antwerp",
              "awayTeamId": 1393,
              "awayTeam": "Union St. Gilloise",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": true,
              "lineups": [
                {
                  "teamId": 740,
                  "team": "Antwerp",
                  "formation": "4-4-2",
                  "coach": "Marvin Compper",
                  "starters": [
                    "T. Nozawa",
                    "M. Busi",
                    "R. Van Helden",
                    "Álvaro Cortés Moyano",
                    "Luca Schelfhout",
                    "A. Vermeeren",
                    "M. Fofana",
                    "B. Deuff",
                    "X. Dierckx",
                    "C. Scott",
                    "M. Frey"
                  ]
                },
                {
                  "teamId": 1393,
                  "team": "Union St. Gilloise",
                  "formation": "3-1-4-2",
                  "coach": "D. Hubert",
                  "starters": [
                    "H. Koffi",
                    "N. Havenaar",
                    "M. Sylla",
                    "O. Kričfaluši",
                    "K. Van de Perre",
                    "L. Patris",
                    "B. Zeneli",
                    "A. Zorgane",
                    "Guilherme Henriques da Silva Carvalho",
                    "R. Mofokeng",
                    "M. Biondic"
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
              "points": 13,
              "goalsDiff": 3,
              "form": "LWWWW",
              "all": {
                "played": 6,
                "wins": 4,
                "draws": 1,
                "losses": 1,
                "goalsFor": 13,
                "goalsAgainst": 10
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
                "played": 3,
                "wins": 2,
                "draws": 0,
                "losses": 1,
                "goalsFor": 7,
                "goalsAgainst": 6
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
              "teamId": 7411,
              "team": "Kocaelispor",
              "rank": 3,
              "points": 12,
              "goalsDiff": 3,
              "form": "WLWWW",
              "all": {
                "played": 6,
                "wins": 4,
                "draws": 0,
                "losses": 2,
                "goalsFor": 7,
                "goalsAgainst": 4
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
              "rank": 4,
              "points": 11,
              "goalsDiff": 2,
              "form": "WDWLW",
              "all": {
                "played": 6,
                "wins": 3,
                "draws": 2,
                "losses": 1,
                "goalsFor": 8,
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
                "played": 4,
                "wins": 2,
                "draws": 1,
                "losses": 1,
                "goalsFor": 5,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 998,
              "team": "Trabzonspor",
              "rank": 5,
              "points": 10,
              "goalsDiff": 8,
              "form": "WLWLW",
              "all": {
                "played": 6,
                "wins": 3,
                "draws": 1,
                "losses": 2,
                "goalsFor": 13,
                "goalsAgainst": 5
              },
              "home": {
                "played": 3,
                "wins": 3,
                "draws": 0,
                "losses": 0,
                "goalsFor": 11,
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
              "teamId": 3579,
              "team": "Amed",
              "rank": 6,
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
              "rank": 7,
              "points": 10,
              "goalsDiff": 2,
              "form": "DWDDW",
              "all": {
                "played": 6,
                "wins": 2,
                "draws": 4,
                "losses": 0,
                "goalsFor": 7,
                "goalsAgainst": 5
              },
              "home": {
                "played": 3,
                "wins": 0,
                "draws": 3,
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
              "rank": 8,
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
              "teamId": 3573,
              "team": "Gaziantep FK",
              "rank": 9,
              "points": 8,
              "goalsDiff": 0,
              "form": "LDWLW",
              "all": {
                "played": 6,
                "wins": 2,
                "draws": 2,
                "losses": 2,
                "goalsFor": 7,
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
                "wins": 2,
                "draws": 0,
                "losses": 1,
                "goalsFor": 5,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 611,
              "team": "Fenerbahçe",
              "rank": 10,
              "points": 7,
              "goalsDiff": 2,
              "form": "DLWWL",
              "all": {
                "played": 5,
                "wins": 2,
                "draws": 1,
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
                "played": 3,
                "wins": 1,
                "draws": 1,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 6343,
              "team": "Çorum FK",
              "rank": 11,
              "points": 7,
              "goalsDiff": 1,
              "form": "LWWLL",
              "all": {
                "played": 6,
                "wins": 2,
                "draws": 1,
                "losses": 3,
                "goalsFor": 13,
                "goalsAgainst": 12
              },
              "home": {
                "played": 3,
                "wins": 1,
                "draws": 0,
                "losses": 2,
                "goalsFor": 4,
                "goalsAgainst": 3
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
              "teamId": 564,
              "team": "Başakşehir",
              "rank": 12,
              "points": 7,
              "goalsDiff": -1,
              "form": "WLLDL",
              "all": {
                "played": 6,
                "wins": 2,
                "draws": 1,
                "losses": 3,
                "goalsFor": 10,
                "goalsAgainst": 11
              },
              "home": {
                "played": 4,
                "wins": 2,
                "draws": 1,
                "losses": 1,
                "goalsFor": 9,
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
              "teamId": 997,
              "team": "Gençlerbirliği S.K.",
              "rank": 13,
              "points": 7,
              "goalsDiff": -8,
              "form": "LLLDW",
              "all": {
                "played": 6,
                "wins": 2,
                "draws": 1,
                "losses": 3,
                "goalsFor": 5,
                "goalsAgainst": 13
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
                "played": 3,
                "wins": 1,
                "draws": 0,
                "losses": 2,
                "goalsFor": 1,
                "goalsAgainst": 9
              }
            },
            {
              "teamId": 607,
              "team": "Konyaspor",
              "rank": 14,
              "points": 4,
              "goalsDiff": -4,
              "form": "DWLLL",
              "all": {
                "played": 6,
                "wins": 1,
                "draws": 1,
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
                "played": 3,
                "wins": 0,
                "draws": 1,
                "losses": 2,
                "goalsFor": 2,
                "goalsAgainst": 5
              }
            },
            {
              "teamId": 3603,
              "team": "Samsunspor",
              "rank": 15,
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
              "teamId": 1009,
              "team": "Erzurumspor FK",
              "rank": 16,
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
              "teamId": 564,
              "team": "Başakşehir",
              "form": "WLDLLW",
              "all": {
                "played": 6,
                "wins": 2,
                "draws": 1,
                "losses": 3,
                "goalsFor": 10,
                "goalsAgainst": 11
              },
              "home": {
                "played": 4,
                "wins": 2,
                "draws": 1,
                "losses": 1,
                "goalsFor": 9,
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
              "teamId": 997,
              "team": "Gençlerbirliği S.K.",
              "form": "WWDLLL",
              "all": {
                "played": 6,
                "wins": 2,
                "draws": 1,
                "losses": 3,
                "goalsFor": 5,
                "goalsAgainst": 13
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
                "played": 3,
                "wins": 1,
                "draws": 0,
                "losses": 2,
                "goalsFor": 1,
                "goalsAgainst": 9
              }
            },
            {
              "teamId": 998,
              "team": "Trabzonspor",
              "form": "DWLWLW",
              "all": {
                "played": 6,
                "wins": 3,
                "draws": 1,
                "losses": 2,
                "goalsFor": 13,
                "goalsAgainst": 5
              },
              "home": {
                "played": 3,
                "wins": 3,
                "draws": 0,
                "losses": 0,
                "goalsFor": 11,
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
              "teamId": 645,
              "team": "Galatasaray",
              "form": "DWWWWL",
              "all": {
                "played": 6,
                "wins": 4,
                "draws": 1,
                "losses": 1,
                "goalsFor": 13,
                "goalsAgainst": 10
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
                "played": 3,
                "wins": 2,
                "draws": 0,
                "losses": 1,
                "goalsFor": 7,
                "goalsAgainst": 6
              }
            },
            {
              "teamId": 611,
              "team": "Fenerbahçe",
              "form": "LWWLD",
              "all": {
                "played": 5,
                "wins": 2,
                "draws": 1,
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
                "played": 3,
                "wins": 1,
                "draws": 1,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 3588,
              "team": "Eyüpspor",
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
              "teamId": 1009,
              "team": "Erzurumspor FK",
              "form": "LLDWL",
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
              "teamId": 3603,
              "team": "Samsunspor",
              "form": "DWLLL",
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
            }
          ],
          "fixtures": [
            {
              "fixtureId": 1584413,
              "kickoff": "2026-09-20T02:00:00+09:00",
              "status": "FT",
              "homeTeamId": 564,
              "homeTeam": "Başakşehir",
              "awayTeamId": 997,
              "awayTeam": "Gençlerbirliği S.K.",
              "injuriesChecked": true,
              "injuries": [
                {
                  "fixtureId": 1584413,
                  "teamId": 564,
                  "playerId": 49860,
                  "player": "E. Visca",
                  "type": "Missing Fixture",
                  "reason": "Inactive"
                },
                {
                  "fixtureId": 1584413,
                  "teamId": 997,
                  "playerId": 22239,
                  "player": "C. Niasse",
                  "type": "Missing Fixture",
                  "reason": "Inactive"
                },
                {
                  "fixtureId": 1584413,
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
              "fixtureId": 1584420,
              "kickoff": "2026-09-20T02:00:00+09:00",
              "status": "FT",
              "homeTeamId": 998,
              "homeTeam": "Trabzonspor",
              "awayTeamId": 645,
              "awayTeam": "Galatasaray",
              "injuriesChecked": true,
              "injuries": [
                {
                  "fixtureId": 1584420,
                  "teamId": 998,
                  "playerId": 63627,
                  "player": "A. Batagov",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1584420,
                  "teamId": 998,
                  "playerId": 22408,
                  "player": "T. Jabol-Folcarelli",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1584420,
                  "teamId": 998,
                  "playerId": 1938,
                  "player": "R. Malinovskyi",
                  "type": "Missing Fixture",
                  "reason": "Inactive"
                },
                {
                  "fixtureId": 1584420,
                  "teamId": 998,
                  "playerId": 47443,
                  "player": "O. Yokuslu",
                  "type": "Missing Fixture",
                  "reason": "Lacking Match Fitness"
                },
                {
                  "fixtureId": 1584420,
                  "teamId": 645,
                  "playerId": 61950,
                  "player": "G. Guvenc",
                  "type": "Missing Fixture",
                  "reason": "Muscle Injury"
                },
                {
                  "fixtureId": 1584420,
                  "teamId": 645,
                  "playerId": 18947,
                  "player": "M. Lemina",
                  "type": "Missing Fixture",
                  "reason": "Muscle Injury"
                },
                {
                  "fixtureId": 1584420,
                  "teamId": 645,
                  "playerId": 2780,
                  "player": "V. Osimhen",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1584420,
                  "teamId": 645,
                  "playerId": 30504,
                  "player": "W. Singo",
                  "type": "Missing Fixture",
                  "reason": "Thigh Injury"
                }
              ],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1584416,
              "kickoff": "2026-09-20T23:00:00+09:00",
              "status": "NS",
              "homeTeamId": 611,
              "homeTeam": "Fenerbahçe",
              "awayTeamId": 3588,
              "awayTeam": "Eyüpspor",
              "injuriesChecked": true,
              "injuries": [
                {
                  "fixtureId": 1584416,
                  "teamId": 611,
                  "playerId": 746,
                  "player": "M. Asensio",
                  "type": "Missing Fixture",
                  "reason": "Muscle Injury"
                },
                {
                  "fixtureId": 1584416,
                  "teamId": 611,
                  "playerId": 272721,
                  "player": "J. Oosterwolde",
                  "type": "Missing Fixture",
                  "reason": "Achilles Tendon Injury"
                },
                {
                  "fixtureId": 1584416,
                  "teamId": 3588,
                  "playerId": 19053,
                  "player": "A. Sabiri",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1584416,
                  "teamId": 3588,
                  "playerId": 62285,
                  "player": "I. Taskin",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                }
              ],
              "lineupsChecked": true,
              "lineups": []
            },
            {
              "fixtureId": 1584415,
              "kickoff": "2026-09-20T23:00:00+09:00",
              "status": "NS",
              "homeTeamId": 1009,
              "homeTeam": "Erzurumspor FK",
              "awayTeamId": 3603,
              "awayTeam": "Samsunspor",
              "injuriesChecked": true,
              "injuries": [
                {
                  "fixtureId": 1584415,
                  "teamId": 3603,
                  "playerId": 356998,
                  "player": "J. Assoumou",
                  "type": "Missing Fixture",
                  "reason": "Inactive"
                },
                {
                  "fixtureId": 1584415,
                  "teamId": 3603,
                  "playerId": 25223,
                  "player": "F. Kaya",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1584415,
                  "teamId": 3603,
                  "playerId": 130262,
                  "player": "A. Sousa",
                  "type": "Missing Fixture",
                  "reason": "Inactive"
                },
                {
                  "fixtureId": 1584415,
                  "teamId": 3603,
                  "playerId": 93001,
                  "player": "E. Tavsan",
                  "type": "Missing Fixture",
                  "reason": "Inactive"
                },
                {
                  "fixtureId": 1584415,
                  "teamId": 3603,
                  "playerId": 113581,
                  "player": "T. Coulibaly",
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
          "key": "KLEAGUE1",
          "leagueId": 292,
          "season": "2026",
          "standings": [
            {
              "teamId": 2766,
              "team": "FC Seoul",
              "rank": 1,
              "points": 62,
              "goalsDiff": 32,
              "form": "WLWWW",
              "all": {
                "played": 29,
                "wins": 19,
                "draws": 5,
                "losses": 5,
                "goalsFor": 55,
                "goalsAgainst": 23
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
                "played": 16,
                "wins": 11,
                "draws": 3,
                "losses": 2,
                "goalsFor": 33,
                "goalsAgainst": 13
              }
            },
            {
              "teamId": 2767,
              "team": "Ulsan Hyundai FC",
              "rank": 2,
              "points": 47,
              "goalsDiff": 5,
              "form": "LWWDW",
              "all": {
                "played": 30,
                "wins": 14,
                "draws": 5,
                "losses": 11,
                "goalsFor": 45,
                "goalsAgainst": 40
              },
              "home": {
                "played": 15,
                "wins": 8,
                "draws": 1,
                "losses": 6,
                "goalsFor": 26,
                "goalsAgainst": 23
              },
              "away": {
                "played": 15,
                "wins": 6,
                "draws": 4,
                "losses": 5,
                "goalsFor": 19,
                "goalsAgainst": 17
              }
            },
            {
              "teamId": 2762,
              "team": "Jeonbuk Motors",
              "rank": 3,
              "points": 43,
              "goalsDiff": 10,
              "form": "LDWDD",
              "all": {
                "played": 29,
                "wins": 11,
                "draws": 10,
                "losses": 8,
                "goalsFor": 36,
                "goalsAgainst": 26
              },
              "home": {
                "played": 14,
                "wins": 7,
                "draws": 2,
                "losses": 5,
                "goalsFor": 21,
                "goalsAgainst": 15
              },
              "away": {
                "played": 15,
                "wins": 4,
                "draws": 8,
                "losses": 3,
                "goalsFor": 15,
                "goalsAgainst": 11
              }
            },
            {
              "teamId": 2761,
              "team": "Jeju United FC",
              "rank": 4,
              "points": 43,
              "goalsDiff": 5,
              "form": "DWDWL",
              "all": {
                "played": 29,
                "wins": 11,
                "draws": 10,
                "losses": 8,
                "goalsFor": 34,
                "goalsAgainst": 29
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
                "played": 12,
                "wins": 6,
                "draws": 3,
                "losses": 3,
                "goalsFor": 16,
                "goalsAgainst": 11
              }
            },
            {
              "teamId": 2746,
              "team": "Gangwon FC",
              "rank": 5,
              "points": 42,
              "goalsDiff": 9,
              "form": "DDWDD",
              "all": {
                "played": 28,
                "wins": 10,
                "draws": 12,
                "losses": 6,
                "goalsFor": 36,
                "goalsAgainst": 27
              },
              "home": {
                "played": 13,
                "wins": 4,
                "draws": 7,
                "losses": 2,
                "goalsFor": 17,
                "goalsAgainst": 12
              },
              "away": {
                "played": 15,
                "wins": 6,
                "draws": 5,
                "losses": 4,
                "goalsFor": 19,
                "goalsAgainst": 15
              }
            },
            {
              "teamId": 2750,
              "team": "Daejeon Citizen",
              "rank": 6,
              "points": 39,
              "goalsDiff": 9,
              "form": "DWWLW",
              "all": {
                "played": 29,
                "wins": 10,
                "draws": 9,
                "losses": 10,
                "goalsFor": 45,
                "goalsAgainst": 36
              },
              "home": {
                "played": 15,
                "wins": 4,
                "draws": 6,
                "losses": 5,
                "goalsFor": 19,
                "goalsAgainst": 19
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
              "rank": 7,
              "points": 38,
              "goalsDiff": -9,
              "form": "WDLLD",
              "all": {
                "played": 30,
                "wins": 9,
                "draws": 11,
                "losses": 10,
                "goalsFor": 38,
                "goalsAgainst": 47
              },
              "home": {
                "played": 15,
                "wins": 4,
                "draws": 5,
                "losses": 6,
                "goalsFor": 17,
                "goalsAgainst": 27
              },
              "away": {
                "played": 15,
                "wins": 5,
                "draws": 6,
                "losses": 4,
                "goalsFor": 21,
                "goalsAgainst": 20
              }
            },
            {
              "teamId": 2763,
              "team": "Incheon United",
              "rank": 8,
              "points": 37,
              "goalsDiff": 3,
              "form": "LWLDL",
              "all": {
                "played": 28,
                "wins": 10,
                "draws": 7,
                "losses": 11,
                "goalsFor": 35,
                "goalsAgainst": 32
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
                "played": 14,
                "wins": 5,
                "draws": 4,
                "losses": 5,
                "goalsFor": 19,
                "goalsAgainst": 17
              }
            },
            {
              "teamId": 2764,
              "team": "Pohang Steelers",
              "rank": 9,
              "points": 37,
              "goalsDiff": -7,
              "form": "DDLDW",
              "all": {
                "played": 29,
                "wins": 10,
                "draws": 7,
                "losses": 12,
                "goalsFor": 26,
                "goalsAgainst": 33
              },
              "home": {
                "played": 12,
                "wins": 3,
                "draws": 3,
                "losses": 6,
                "goalsFor": 4,
                "goalsAgainst": 10
              },
              "away": {
                "played": 17,
                "wins": 7,
                "draws": 4,
                "losses": 6,
                "goalsFor": 22,
                "goalsAgainst": 23
              }
            },
            {
              "teamId": 2768,
              "team": "Gimcheon Sangmu FC",
              "rank": 10,
              "points": 33,
              "goalsDiff": -6,
              "form": "WDDDL",
              "all": {
                "played": 30,
                "wins": 5,
                "draws": 18,
                "losses": 7,
                "goalsFor": 30,
                "goalsAgainst": 36
              },
              "home": {
                "played": 14,
                "wins": 1,
                "draws": 10,
                "losses": 3,
                "goalsFor": 14,
                "goalsAgainst": 20
              },
              "away": {
                "played": 16,
                "wins": 4,
                "draws": 8,
                "losses": 4,
                "goalsFor": 16,
                "goalsAgainst": 16
              }
            },
            {
              "teamId": 2745,
              "team": "Bucheon FC 1995",
              "rank": 11,
              "points": 32,
              "goalsDiff": -9,
              "form": "LDLLD",
              "all": {
                "played": 30,
                "wins": 7,
                "draws": 11,
                "losses": 12,
                "goalsFor": 31,
                "goalsAgainst": 40
              },
              "home": {
                "played": 17,
                "wins": 3,
                "draws": 7,
                "losses": 7,
                "goalsFor": 18,
                "goalsAgainst": 26
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
              "teamId": 2759,
              "team": "Gwangju FC",
              "rank": 12,
              "points": 14,
              "goalsDiff": -42,
              "form": "DLDLD",
              "all": {
                "played": 29,
                "wins": 1,
                "draws": 11,
                "losses": 17,
                "goalsFor": 19,
                "goalsAgainst": 61
              },
              "home": {
                "played": 16,
                "wins": 1,
                "draws": 5,
                "losses": 10,
                "goalsFor": 12,
                "goalsAgainst": 31
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
              "form": "LDDDLWWDWLWDDWWWDWDLLWLDDWDDL",
              "all": {
                "played": 29,
                "wins": 10,
                "draws": 12,
                "losses": 7,
                "goalsFor": 36,
                "goalsAgainst": 28
              },
              "home": {
                "played": 14,
                "wins": 4,
                "draws": 7,
                "losses": 3,
                "goalsFor": 17,
                "goalsAgainst": 13
              },
              "away": {
                "played": 15,
                "wins": 6,
                "draws": 5,
                "losses": 4,
                "goalsFor": 19,
                "goalsAgainst": 15
              }
            },
            {
              "teamId": 2761,
              "team": "Jeju United FC",
              "form": "DLLLDWWDWLLWWLLDDWDWDWWDLWDWDW",
              "all": {
                "played": 30,
                "wins": 12,
                "draws": 10,
                "losses": 8,
                "goalsFor": 35,
                "goalsAgainst": 29
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
                "played": 13,
                "wins": 7,
                "draws": 3,
                "losses": 3,
                "goalsFor": 17,
                "goalsAgainst": 11
              }
            },
            {
              "teamId": 2762,
              "team": "Jeonbuk Motors",
              "form": "LDDWWWLDLWWWDDWLWLDWDLLWDDWDLD",
              "all": {
                "played": 30,
                "wins": 11,
                "draws": 11,
                "losses": 8,
                "goalsFor": 38,
                "goalsAgainst": 28
              },
              "home": {
                "played": 15,
                "wins": 7,
                "draws": 3,
                "losses": 5,
                "goalsFor": 23,
                "goalsAgainst": 17
              },
              "away": {
                "played": 15,
                "wins": 4,
                "draws": 8,
                "losses": 3,
                "goalsFor": 15,
                "goalsAgainst": 11
              }
            },
            {
              "teamId": 2759,
              "team": "Gwangju FC",
              "form": "DWDDLLLLLLLLDLLDLDDLLDLLDLDLDD",
              "all": {
                "played": 30,
                "wins": 1,
                "draws": 12,
                "losses": 17,
                "goalsFor": 21,
                "goalsAgainst": 63
              },
              "home": {
                "played": 16,
                "wins": 1,
                "draws": 5,
                "losses": 10,
                "goalsFor": 12,
                "goalsAgainst": 31
              },
              "away": {
                "played": 14,
                "wins": 0,
                "draws": 7,
                "losses": 7,
                "goalsFor": 9,
                "goalsAgainst": 32
              }
            },
            {
              "teamId": 2763,
              "team": "Incheon United",
              "form": "LLDLWWLDWWLDWLWLLWWDDDWLDLWLD",
              "all": {
                "played": 29,
                "wins": 10,
                "draws": 8,
                "losses": 11,
                "goalsFor": 36,
                "goalsAgainst": 33
              },
              "home": {
                "played": 15,
                "wins": 5,
                "draws": 4,
                "losses": 6,
                "goalsFor": 17,
                "goalsAgainst": 16
              },
              "away": {
                "played": 14,
                "wins": 5,
                "draws": 4,
                "losses": 5,
                "goalsFor": 19,
                "goalsAgainst": 17
              }
            },
            {
              "teamId": 2750,
              "team": "Daejeon Citizen",
              "form": "DDDWLLLWLWWDLLLDDDDLWWLWWLWWDD",
              "all": {
                "played": 30,
                "wins": 10,
                "draws": 10,
                "losses": 10,
                "goalsFor": 46,
                "goalsAgainst": 37
              },
              "home": {
                "played": 15,
                "wins": 4,
                "draws": 6,
                "losses": 5,
                "goalsFor": 19,
                "goalsAgainst": 19
              },
              "away": {
                "played": 15,
                "wins": 6,
                "draws": 4,
                "losses": 5,
                "goalsFor": 27,
                "goalsAgainst": 18
              }
            },
            {
              "teamId": 2764,
              "team": "Pohang Steelers",
              "form": "DDLDWWLLWLWDWWLWWLLLLLWLWDLDDW",
              "all": {
                "played": 30,
                "wins": 11,
                "draws": 7,
                "losses": 12,
                "goalsFor": 28,
                "goalsAgainst": 34
              },
              "home": {
                "played": 13,
                "wins": 4,
                "draws": 3,
                "losses": 6,
                "goalsFor": 6,
                "goalsAgainst": 11
              },
              "away": {
                "played": 17,
                "wins": 7,
                "draws": 4,
                "losses": 6,
                "goalsFor": 22,
                "goalsAgainst": 23
              }
            },
            {
              "teamId": 2766,
              "team": "FC Seoul",
              "form": "WWWWDWWLWWLDLWWWDWWLDDWWWWWLWL",
              "all": {
                "played": 30,
                "wins": 19,
                "draws": 5,
                "losses": 6,
                "goalsFor": 56,
                "goalsAgainst": 25
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
                "played": 17,
                "wins": 11,
                "draws": 3,
                "losses": 3,
                "goalsFor": 34,
                "goalsAgainst": 15
              }
            }
          ],
          "fixtures": [
            {
              "fixtureId": 1507072,
              "kickoff": "2026-09-20T16:30:00+09:00",
              "status": "FT",
              "homeTeamId": 2746,
              "homeTeam": "Gangwon FC",
              "awayTeamId": 2761,
              "awayTeam": "Jeju United FC",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": true,
              "lineups": [
                {
                  "teamId": 2746,
                  "team": "Gangwon FC",
                  "formation": "4-4-2",
                  "coach": "Chung Kyung-Ho",
                  "starters": [
                    "Park Cheong-Hyo",
                    "Lee You-Hyeon",
                    "Park Ho-Young",
                    "Seong-Yun Kang",
                    "Hong Chul",
                    "Mo Jae-Hyeon",
                    "Kim Dong-Hyun",
                    "Seo Min-Woo",
                    "Kim Do-Hyun",
                    "Kim Gun-Hee",
                    "J. Sekidika"
                  ]
                },
                {
                  "teamId": 2761,
                  "team": "Jeju United FC",
                  "formation": "4-4-2",
                  "coach": "Sérgio Costa",
                  "starters": [
                    "Kim Dong-Jun",
                    "Yu In-Soo",
                    "Tobias Figueiredo",
                    "Kim Jae-Woo",
                    "Chung Woon",
                    "Choi Byung-Wook",
                    "Italo Moreira",
                    "Jang Min-Gyu",
                    "Park Su-Bin",
                    "Emerson Negueba",
                    "Kim Sin-Jin"
                  ]
                }
              ]
            },
            {
              "fixtureId": 1507073,
              "kickoff": "2026-09-20T16:30:00+09:00",
              "status": "FT",
              "homeTeamId": 2762,
              "homeTeam": "Jeonbuk Motors",
              "awayTeamId": 2759,
              "awayTeam": "Gwangju FC",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": true,
              "lineups": [
                {
                  "teamId": 2762,
                  "team": "Jeonbuk Motors",
                  "formation": "4-2-3-1",
                  "coach": "Chung Jung-Yong",
                  "starters": [
                    "Song Bum-Keun",
                    "Kim Tae-Hyun",
                    "Cho Wi-Je",
                    "Kim Young-Bin",
                    "Kim Tae-Hwan",
                    "João Gamboa",
                    "Kim Jin-Gyu",
                    "Lee Dong-Jun",
                    "Lee Yeong-Jae",
                    "Lee Seung-Woo",
                    "Tiago Orobó"
                  ]
                },
                {
                  "teamId": 2759,
                  "team": "Gwangju FC",
                  "formation": "4-4-2",
                  "coach": "Jeong-kyu Lee",
                  "starters": [
                    "Kim Dong-Hwa",
                    "Lee Min-Gi",
                    "Min Sang-Gi",
                    "Jang Suk-Hwan",
                    "João Pedro",
                    "A. Ba Loua",
                    "Choi Kyoung-Rok",
                    "Yu Je-Ho",
                    "Ha Seung-Un",
                    "H. Friðjónsson",
                    "Shin Chang-Moo"
                  ]
                }
              ]
            },
            {
              "fixtureId": 1507074,
              "kickoff": "2026-09-20T19:00:00+09:00",
              "status": "FT",
              "homeTeamId": 2763,
              "homeTeam": "Incheon United",
              "awayTeamId": 2750,
              "awayTeam": "Daejeon Citizen",
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
                    "Kim Geon-Hui",
                    "Juan Fernández",
                    "Lee Ju-Yong",
                    "Lee Chung-Yong",
                    "Seo Jae-Min",
                    "Lee Myung-Joo",
                    "Leandro Ribeiro",
                    "S. Mugoša",
                    "M. Ferrier"
                  ]
                },
                {
                  "teamId": 2750,
                  "team": "Daejeon Citizen",
                  "formation": "4-2-3-1",
                  "coach": "Hwang Sun-Hong",
                  "starters": [
                    "Lee Chang-Geun",
                    "Kang Yun-Sung",
                    "Ha Chang-Rae",
                    "A. Krivotsyuk",
                    "Lee Myung-Jae",
                    "Lee Soon-Min",
                    "Victor Bobsin",
                    "Jeong Jae-Hee",
                    "M. Ishida",
                    "G. Ludwigson",
                    "Joo Min-Kyu"
                  ]
                }
              ]
            },
            {
              "fixtureId": 1507075,
              "kickoff": "2026-09-20T19:00:00+09:00",
              "status": "FT",
              "homeTeamId": 2764,
              "homeTeam": "Pohang Steelers",
              "awayTeamId": 2766,
              "awayTeam": "FC Seoul",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": true,
              "lineups": [
                {
                  "teamId": 2764,
                  "team": "Pohang Steelers",
                  "formation": "4-3-3",
                  "coach": "Tae-ha Park",
                  "starters": [
                    "Hong Seong-Min",
                    "Shin Kwang-Hoon",
                    "Park Chan-Yong",
                    "Jeon Min-Gwang",
                    "Wanderson",
                    "K. Nishiya",
                    "Ki Sung-Yueng",
                    "Kim Dong-Jin",
                    "Hwang Seo-Woong",
                    "Won Ki-Jong",
                    "Jorge Luiz"
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
                    "Moon Seon-Min",
                    "Anderson Oliveira",
                    "P. Klimala"
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
              "points": 53,
              "goalsDiff": 19,
              "form": "WWWWD",
              "all": {
                "played": 25,
                "wins": 16,
                "draws": 5,
                "losses": 4,
                "goalsFor": 39,
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
                "played": 13,
                "wins": 9,
                "draws": 1,
                "losses": 3,
                "goalsFor": 23,
                "goalsAgainst": 12
              }
            },
            {
              "teamId": 2756,
              "team": "Suwon City FC",
              "rank": 2,
              "points": 48,
              "goalsDiff": 21,
              "form": "WDDWW",
              "all": {
                "played": 25,
                "wins": 13,
                "draws": 9,
                "losses": 3,
                "goalsFor": 50,
                "goalsAgainst": 29
              },
              "home": {
                "played": 11,
                "wins": 6,
                "draws": 5,
                "losses": 0,
                "goalsFor": 23,
                "goalsAgainst": 10
              },
              "away": {
                "played": 14,
                "wins": 7,
                "draws": 4,
                "losses": 3,
                "goalsFor": 27,
                "goalsAgainst": 19
              }
            },
            {
              "teamId": 2749,
              "team": "Seoul E-Land FC",
              "rank": 3,
              "points": 48,
              "goalsDiff": 15,
              "form": "WLWDD",
              "all": {
                "played": 26,
                "wins": 14,
                "draws": 6,
                "losses": 6,
                "goalsFor": 45,
                "goalsAgainst": 30
              },
              "home": {
                "played": 13,
                "wins": 7,
                "draws": 2,
                "losses": 4,
                "goalsFor": 25,
                "goalsAgainst": 18
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
              "teamId": 2747,
              "team": "Daegu FC",
              "rank": 4,
              "points": 46,
              "goalsDiff": 13,
              "form": "LWDWD",
              "all": {
                "played": 26,
                "wins": 13,
                "draws": 7,
                "losses": 6,
                "goalsFor": 48,
                "goalsAgainst": 35
              },
              "home": {
                "played": 13,
                "wins": 8,
                "draws": 2,
                "losses": 3,
                "goalsFor": 26,
                "goalsAgainst": 16
              },
              "away": {
                "played": 13,
                "wins": 5,
                "draws": 5,
                "losses": 3,
                "goalsFor": 22,
                "goalsAgainst": 19
              }
            },
            {
              "teamId": 7087,
              "team": "Hwaseong",
              "rank": 5,
              "points": 43,
              "goalsDiff": 14,
              "form": "WDWLD",
              "all": {
                "played": 25,
                "wins": 12,
                "draws": 7,
                "losses": 6,
                "goalsFor": 39,
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
                "played": 9,
                "wins": 4,
                "draws": 2,
                "losses": 3,
                "goalsFor": 11,
                "goalsAgainst": 7
              }
            },
            {
              "teamId": 2752,
              "team": "Busan I Park",
              "rank": 6,
              "points": 41,
              "goalsDiff": 7,
              "form": "LWLLD",
              "all": {
                "played": 26,
                "wins": 12,
                "draws": 5,
                "losses": 9,
                "goalsFor": 41,
                "goalsAgainst": 34
              },
              "home": {
                "played": 13,
                "wins": 7,
                "draws": 3,
                "losses": 3,
                "goalsFor": 21,
                "goalsAgainst": 13
              },
              "away": {
                "played": 13,
                "wins": 5,
                "draws": 2,
                "losses": 6,
                "goalsFor": 20,
                "goalsAgainst": 21
              }
            },
            {
              "teamId": 7078,
              "team": "Gimpo Citizen",
              "rank": 7,
              "points": 35,
              "goalsDiff": 1,
              "form": "WDLLD",
              "all": {
                "played": 25,
                "wins": 8,
                "draws": 11,
                "losses": 6,
                "goalsFor": 31,
                "goalsAgainst": 30
              },
              "home": {
                "played": 10,
                "wins": 2,
                "draws": 5,
                "losses": 3,
                "goalsFor": 12,
                "goalsAgainst": 14
              },
              "away": {
                "played": 15,
                "wins": 6,
                "draws": 6,
                "losses": 3,
                "goalsFor": 19,
                "goalsAgainst": 16
              }
            },
            {
              "teamId": 2753,
              "team": "Asan Mugunghwa",
              "rank": 8,
              "points": 34,
              "goalsDiff": 3,
              "form": "WLLWL",
              "all": {
                "played": 25,
                "wins": 9,
                "draws": 7,
                "losses": 9,
                "goalsFor": 34,
                "goalsAgainst": 31
              },
              "home": {
                "played": 14,
                "wins": 7,
                "draws": 4,
                "losses": 3,
                "goalsFor": 24,
                "goalsAgainst": 17
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
              "teamId": 2751,
              "team": "Gyeongnam FC",
              "rank": 9,
              "points": 33,
              "goalsDiff": 1,
              "form": "WWDDL",
              "all": {
                "played": 24,
                "wins": 8,
                "draws": 9,
                "losses": 7,
                "goalsFor": 31,
                "goalsAgainst": 30
              },
              "home": {
                "played": 13,
                "wins": 7,
                "draws": 2,
                "losses": 4,
                "goalsFor": 21,
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
              "points": 30,
              "goalsDiff": -2,
              "form": "LWDWL",
              "all": {
                "played": 24,
                "wins": 7,
                "draws": 9,
                "losses": 8,
                "goalsFor": 26,
                "goalsAgainst": 28
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
                "played": 13,
                "wins": 4,
                "draws": 3,
                "losses": 6,
                "goalsFor": 15,
                "goalsAgainst": 18
              }
            },
            {
              "teamId": 9171,
              "team": "Yongin City",
              "rank": 11,
              "points": 26,
              "goalsDiff": -4,
              "form": "LDWLW",
              "all": {
                "played": 24,
                "wins": 5,
                "draws": 11,
                "losses": 8,
                "goalsFor": 31,
                "goalsAgainst": 35
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
                "played": 12,
                "wins": 3,
                "draws": 5,
                "losses": 4,
                "goalsFor": 16,
                "goalsAgainst": 18
              }
            },
            {
              "teamId": 7061,
              "team": "Cheongju",
              "rank": 12,
              "points": 26,
              "goalsDiff": -11,
              "form": "WLLDW",
              "all": {
                "played": 25,
                "wins": 4,
                "draws": 14,
                "losses": 7,
                "goalsFor": 28,
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
                "played": 12,
                "wins": 2,
                "draws": 8,
                "losses": 2,
                "goalsFor": 14,
                "goalsAgainst": 16
              }
            },
            {
              "teamId": 7098,
              "team": "Paju Citizen",
              "rank": 13,
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
              "teamId": 7060,
              "team": "Cheonan City",
              "rank": 14,
              "points": 23,
              "goalsDiff": -7,
              "form": "LDDLL",
              "all": {
                "played": 26,
                "wins": 4,
                "draws": 11,
                "losses": 11,
                "goalsFor": 30,
                "goalsAgainst": 37
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
                "played": 14,
                "wins": 2,
                "draws": 4,
                "losses": 8,
                "goalsFor": 20,
                "goalsAgainst": 26
              }
            },
            {
              "teamId": 2758,
              "team": "Ansan Greeners",
              "rank": 15,
              "points": 22,
              "goalsDiff": -21,
              "form": "LWLLL",
              "all": {
                "played": 25,
                "wins": 6,
                "draws": 4,
                "losses": 15,
                "goalsFor": 25,
                "goalsAgainst": 46
              },
              "home": {
                "played": 15,
                "wins": 2,
                "draws": 2,
                "losses": 11,
                "goalsFor": 15,
                "goalsAgainst": 30
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
              "points": 21,
              "goalsDiff": -15,
              "form": "LDDWW",
              "all": {
                "played": 25,
                "wins": 4,
                "draws": 9,
                "losses": 12,
                "goalsFor": 28,
                "goalsAgainst": 43
              },
              "home": {
                "played": 11,
                "wins": 3,
                "draws": 4,
                "losses": 4,
                "goalsFor": 12,
                "goalsAgainst": 15
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
              "goalsDiff": -28,
              "form": "LDLLD",
              "all": {
                "played": 24,
                "wins": 2,
                "draws": 7,
                "losses": 15,
                "goalsFor": 19,
                "goalsAgainst": 47
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
                "played": 13,
                "wins": 2,
                "draws": 4,
                "losses": 7,
                "goalsFor": 10,
                "goalsAgainst": 21
              }
            }
          ],
          "teams": [
            {
              "teamId": 2758,
              "team": "Ansan Greeners",
              "form": "WLLDDLWLWLLLLLLWLWDDLLLWLL",
              "all": {
                "played": 26,
                "wins": 6,
                "draws": 4,
                "losses": 16,
                "goalsFor": 27,
                "goalsAgainst": 49
              },
              "home": {
                "played": 16,
                "wins": 2,
                "draws": 2,
                "losses": 12,
                "goalsFor": 17,
                "goalsAgainst": 33
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
              "teamId": 7061,
              "team": "Cheongju",
              "form": "LDDDLDDDDDDDLWLDWDDLWDLLWW",
              "all": {
                "played": 26,
                "wins": 5,
                "draws": 14,
                "losses": 7,
                "goalsFor": 31,
                "goalsAgainst": 41
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
                "played": 13,
                "wins": 3,
                "draws": 8,
                "losses": 2,
                "goalsFor": 17,
                "goalsAgainst": 18
              }
            },
            {
              "teamId": 9171,
              "team": "Yongin City",
              "form": "DLLDLDLWLWDDDDWDLDDWLWDLD",
              "all": {
                "played": 25,
                "wins": 5,
                "draws": 12,
                "losses": 8,
                "goalsFor": 31,
                "goalsAgainst": 35
              },
              "home": {
                "played": 13,
                "wins": 2,
                "draws": 7,
                "losses": 4,
                "goalsFor": 15,
                "goalsAgainst": 17
              },
              "away": {
                "played": 12,
                "wins": 3,
                "draws": 5,
                "losses": 4,
                "goalsFor": 16,
                "goalsAgainst": 18
              }
            },
            {
              "teamId": 2751,
              "team": "Gyeongnam FC",
              "form": "LLDWDLLWLWDWLDWDWDDLDDWWD",
              "all": {
                "played": 25,
                "wins": 8,
                "draws": 10,
                "losses": 7,
                "goalsFor": 31,
                "goalsAgainst": 30
              },
              "home": {
                "played": 13,
                "wins": 7,
                "draws": 2,
                "losses": 4,
                "goalsFor": 21,
                "goalsAgainst": 16
              },
              "away": {
                "played": 12,
                "wins": 1,
                "draws": 8,
                "losses": 3,
                "goalsFor": 10,
                "goalsAgainst": 14
              }
            },
            {
              "teamId": 2757,
              "team": "Seongnam FC",
              "form": "DDWDWLLDWDDLDDLLWLWLWDWLD",
              "all": {
                "played": 25,
                "wins": 7,
                "draws": 10,
                "losses": 8,
                "goalsFor": 28,
                "goalsAgainst": 30
              },
              "home": {
                "played": 12,
                "wins": 3,
                "draws": 7,
                "losses": 2,
                "goalsFor": 13,
                "goalsAgainst": 12
              },
              "away": {
                "played": 13,
                "wins": 4,
                "draws": 3,
                "losses": 6,
                "goalsFor": 15,
                "goalsAgainst": 18
              }
            },
            {
              "teamId": 7087,
              "team": "Hwaseong",
              "form": "LWDDLLWDWWDWWWLLWWWDDLWDWD",
              "all": {
                "played": 26,
                "wins": 12,
                "draws": 8,
                "losses": 6,
                "goalsFor": 41,
                "goalsAgainst": 27
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
                "played": 10,
                "wins": 4,
                "draws": 3,
                "losses": 3,
                "goalsFor": 13,
                "goalsAgainst": 9
              }
            },
            {
              "teamId": 7076,
              "team": "Gimhae City",
              "form": "LLLLLDDLLLLWLDLWDDLDLLDLL",
              "all": {
                "played": 25,
                "wins": 2,
                "draws": 7,
                "losses": 16,
                "goalsFor": 19,
                "goalsAgainst": 49
              },
              "home": {
                "played": 12,
                "wins": 0,
                "draws": 3,
                "losses": 9,
                "goalsFor": 9,
                "goalsAgainst": 28
              },
              "away": {
                "played": 13,
                "wins": 2,
                "draws": 4,
                "losses": 7,
                "goalsFor": 10,
                "goalsAgainst": 21
              }
            },
            {
              "teamId": 7098,
              "team": "Paju Citizen",
              "form": "LLWWLWLWLDDLLLLWDLWLWDLDW",
              "all": {
                "played": 25,
                "wins": 8,
                "draws": 5,
                "losses": 12,
                "goalsFor": 24,
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
                "played": 13,
                "wins": 5,
                "draws": 3,
                "losses": 5,
                "goalsFor": 14,
                "goalsAgainst": 15
              }
            }
          ],
          "fixtures": [
            {
              "fixtureId": 1510455,
              "kickoff": "2026-09-20T16:30:00+09:00",
              "status": "FT",
              "homeTeamId": 2758,
              "homeTeam": "Ansan Greeners",
              "awayTeamId": 7061,
              "awayTeam": "Cheongju",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": true,
              "lineups": []
            },
            {
              "fixtureId": 1510456,
              "kickoff": "2026-09-20T16:30:00+09:00",
              "status": "FT",
              "homeTeamId": 9171,
              "homeTeam": "Yongin City",
              "awayTeamId": 2751,
              "awayTeam": "Gyeongnam FC",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": true,
              "lineups": []
            },
            {
              "fixtureId": 1510458,
              "kickoff": "2026-09-20T19:00:00+09:00",
              "status": "FT",
              "homeTeamId": 2757,
              "homeTeam": "Seongnam FC",
              "awayTeamId": 7087,
              "awayTeam": "Hwaseong",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": true,
              "lineups": []
            },
            {
              "fixtureId": 1510457,
              "kickoff": "2026-09-20T19:00:00+09:00",
              "status": "FT",
              "homeTeamId": 7076,
              "homeTeam": "Gimhae City",
              "awayTeamId": 7098,
              "awayTeam": "Paju Citizen",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": true,
              "lineups": []
            }
          ]
        },
        {
          "key": "J2LEAGUE",
          "leagueId": 99,
          "season": "2026",
          "standings": [
            {
              "teamId": 311,
              "team": "Albirex Niigata",
              "rank": 1,
              "points": 15,
              "goalsDiff": -1,
              "form": "WWLWW",
              "all": {
                "played": 7,
                "wins": 5,
                "draws": 0,
                "losses": 2,
                "goalsFor": 9,
                "goalsAgainst": 10
              },
              "home": {
                "played": 4,
                "wins": 4,
                "draws": 0,
                "losses": 0,
                "goalsFor": 6,
                "goalsAgainst": 2
              },
              "away": {
                "played": 3,
                "wins": 1,
                "draws": 0,
                "losses": 2,
                "goalsFor": 3,
                "goalsAgainst": 8
              }
            },
            {
              "teamId": 286,
              "team": "Vegalta Sendai",
              "rank": 2,
              "points": 14,
              "goalsDiff": 6,
              "form": "WDWWW",
              "all": {
                "played": 7,
                "wins": 4,
                "draws": 2,
                "losses": 1,
                "goalsFor": 13,
                "goalsAgainst": 7
              },
              "home": {
                "played": 3,
                "wins": 1,
                "draws": 2,
                "losses": 0,
                "goalsFor": 5,
                "goalsAgainst": 3
              },
              "away": {
                "played": 4,
                "wins": 3,
                "draws": 0,
                "losses": 1,
                "goalsFor": 8,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 4322,
              "team": "Kataller Toyama",
              "rank": 3,
              "points": 13,
              "goalsDiff": 8,
              "form": "WDWLW",
              "all": {
                "played": 7,
                "wins": 4,
                "draws": 1,
                "losses": 2,
                "goalsFor": 13,
                "goalsAgainst": 5
              },
              "home": {
                "played": 3,
                "wins": 1,
                "draws": 1,
                "losses": 1,
                "goalsFor": 6,
                "goalsAgainst": 3
              },
              "away": {
                "played": 4,
                "wins": 3,
                "draws": 0,
                "losses": 1,
                "goalsFor": 7,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 307,
              "team": "Yokohama FC",
              "rank": 4,
              "points": 13,
              "goalsDiff": 5,
              "form": "WLWDL",
              "all": {
                "played": 7,
                "wins": 4,
                "draws": 1,
                "losses": 2,
                "goalsFor": 13,
                "goalsAgainst": 8
              },
              "home": {
                "played": 4,
                "wins": 3,
                "draws": 1,
                "losses": 0,
                "goalsFor": 12,
                "goalsAgainst": 4
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
              "teamId": 313,
              "team": "Omiya Ardija",
              "rank": 5,
              "points": 13,
              "goalsDiff": 5,
              "form": "DDDDW",
              "all": {
                "played": 7,
                "wins": 3,
                "draws": 4,
                "losses": 0,
                "goalsFor": 11,
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
                "played": 4,
                "wins": 2,
                "draws": 2,
                "losses": 0,
                "goalsFor": 8,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 284,
              "team": "Shonan Bellmare",
              "rank": 6,
              "points": 12,
              "goalsDiff": 1,
              "form": "DWLDD",
              "all": {
                "played": 7,
                "wins": 3,
                "draws": 3,
                "losses": 1,
                "goalsFor": 7,
                "goalsAgainst": 6
              },
              "home": {
                "played": 3,
                "wins": 1,
                "draws": 1,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 4
              },
              "away": {
                "played": 4,
                "wins": 2,
                "draws": 2,
                "losses": 0,
                "goalsFor": 4,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 4317,
              "team": "Fujieda MYFC",
              "rank": 7,
              "points": 11,
              "goalsDiff": 3,
              "form": "DLDWL",
              "all": {
                "played": 7,
                "wins": 3,
                "draws": 2,
                "losses": 2,
                "goalsFor": 11,
                "goalsAgainst": 8
              },
              "home": {
                "played": 4,
                "wins": 2,
                "draws": 2,
                "losses": 0,
                "goalsFor": 6,
                "goalsAgainst": 2
              },
              "away": {
                "played": 3,
                "wins": 1,
                "draws": 0,
                "losses": 2,
                "goalsFor": 5,
                "goalsAgainst": 6
              }
            },
            {
              "teamId": 7145,
              "team": "Tochigi City",
              "rank": 8,
              "points": 10,
              "goalsDiff": 4,
              "form": "LDWLW",
              "all": {
                "played": 7,
                "wins": 3,
                "draws": 1,
                "losses": 3,
                "goalsFor": 14,
                "goalsAgainst": 10
              },
              "home": {
                "played": 3,
                "wins": 1,
                "draws": 0,
                "losses": 2,
                "goalsFor": 7,
                "goalsAgainst": 6
              },
              "away": {
                "played": 4,
                "wins": 2,
                "draws": 1,
                "losses": 1,
                "goalsFor": 7,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 280,
              "team": "Jubilo Iwata",
              "rank": 9,
              "points": 10,
              "goalsDiff": 0,
              "form": "LWLWW",
              "all": {
                "played": 7,
                "wins": 3,
                "draws": 1,
                "losses": 3,
                "goalsFor": 9,
                "goalsAgainst": 9
              },
              "home": {
                "played": 3,
                "wins": 1,
                "draws": 1,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 3
              },
              "away": {
                "played": 4,
                "wins": 2,
                "draws": 0,
                "losses": 2,
                "goalsFor": 6,
                "goalsAgainst": 6
              }
            },
            {
              "teamId": 299,
              "team": "Tokushima Vortis",
              "rank": 10,
              "points": 10,
              "goalsDiff": -3,
              "form": "WLWWL",
              "all": {
                "played": 7,
                "wins": 3,
                "draws": 1,
                "losses": 3,
                "goalsFor": 5,
                "goalsAgainst": 8
              },
              "home": {
                "played": 3,
                "wins": 2,
                "draws": 1,
                "losses": 0,
                "goalsFor": 2,
                "goalsAgainst": 0
              },
              "away": {
                "played": 4,
                "wins": 1,
                "draws": 0,
                "losses": 3,
                "goalsFor": 3,
                "goalsAgainst": 8
              }
            },
            {
              "teamId": 312,
              "team": "Montedio Yamagata",
              "rank": 11,
              "points": 9,
              "goalsDiff": 2,
              "form": "LLLWW",
              "all": {
                "played": 7,
                "wins": 3,
                "draws": 0,
                "losses": 4,
                "goalsFor": 8,
                "goalsAgainst": 6
              },
              "home": {
                "played": 4,
                "wins": 2,
                "draws": 0,
                "losses": 2,
                "goalsFor": 5,
                "goalsAgainst": 4
              },
              "away": {
                "played": 3,
                "wins": 1,
                "draws": 0,
                "losses": 2,
                "goalsFor": 3,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 4315,
              "team": "Blaublitz Akita",
              "rank": 12,
              "points": 9,
              "goalsDiff": 1,
              "form": "DWDLW",
              "all": {
                "played": 7,
                "wins": 2,
                "draws": 3,
                "losses": 2,
                "goalsFor": 9,
                "goalsAgainst": 8
              },
              "home": {
                "played": 4,
                "wins": 2,
                "draws": 1,
                "losses": 1,
                "goalsFor": 7,
                "goalsAgainst": 5
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
              "teamId": 7127,
              "team": "Iwaki",
              "rank": 13,
              "points": 9,
              "goalsDiff": -2,
              "form": "WWLLL",
              "all": {
                "played": 7,
                "wins": 3,
                "draws": 0,
                "losses": 4,
                "goalsFor": 11,
                "goalsAgainst": 13
              },
              "home": {
                "played": 3,
                "wins": 2,
                "draws": 0,
                "losses": 1,
                "goalsFor": 6,
                "goalsAgainst": 4
              },
              "away": {
                "played": 4,
                "wins": 1,
                "draws": 0,
                "losses": 3,
                "goalsFor": 5,
                "goalsAgainst": 9
              }
            },
            {
              "teamId": 10409,
              "team": "Tegevajaro Miyazaki",
              "rank": 14,
              "points": 8,
              "goalsDiff": -1,
              "form": "WWLLD",
              "all": {
                "played": 7,
                "wins": 2,
                "draws": 2,
                "losses": 3,
                "goalsFor": 9,
                "goalsAgainst": 10
              },
              "home": {
                "played": 3,
                "wins": 1,
                "draws": 1,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 3
              },
              "away": {
                "played": 4,
                "wins": 1,
                "draws": 1,
                "losses": 2,
                "goalsFor": 6,
                "goalsAgainst": 7
              }
            },
            {
              "teamId": 295,
              "team": "Sagan Tosu",
              "rank": 15,
              "points": 8,
              "goalsDiff": -1,
              "form": "LLWDL",
              "all": {
                "played": 7,
                "wins": 2,
                "draws": 2,
                "losses": 3,
                "goalsFor": 8,
                "goalsAgainst": 9
              },
              "home": {
                "played": 4,
                "wins": 2,
                "draws": 0,
                "losses": 2,
                "goalsFor": 6,
                "goalsAgainst": 6
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
              "teamId": 298,
              "team": "Oita Trinita",
              "rank": 16,
              "points": 7,
              "goalsDiff": 1,
              "form": "DDDLW",
              "all": {
                "played": 7,
                "wins": 1,
                "draws": 4,
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
                "played": 4,
                "wins": 0,
                "draws": 3,
                "losses": 1,
                "goalsFor": 1,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 308,
              "team": "Ventforet Kofu",
              "rank": 17,
              "points": 7,
              "goalsDiff": -5,
              "form": "LLWWL",
              "all": {
                "played": 7,
                "wins": 2,
                "draws": 1,
                "losses": 4,
                "goalsFor": 5,
                "goalsAgainst": 10
              },
              "home": {
                "played": 4,
                "wins": 1,
                "draws": 1,
                "losses": 2,
                "goalsFor": 3,
                "goalsAgainst": 4
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
              "teamId": 4326,
              "team": "Vanraure Hachinohe",
              "rank": 18,
              "points": 7,
              "goalsDiff": -8,
              "form": "LLDWL",
              "all": {
                "played": 7,
                "wins": 2,
                "draws": 1,
                "losses": 4,
                "goalsFor": 3,
                "goalsAgainst": 11
              },
              "home": {
                "played": 5,
                "wins": 2,
                "draws": 0,
                "losses": 3,
                "goalsFor": 3,
                "goalsAgainst": 6
              },
              "away": {
                "played": 2,
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 0,
                "goalsAgainst": 5
              }
            },
            {
              "teamId": 279,
              "team": "Consadole Sapporo",
              "rank": 19,
              "points": 5,
              "goalsDiff": -6,
              "form": "DDLLL",
              "all": {
                "played": 7,
                "wins": 1,
                "draws": 2,
                "losses": 4,
                "goalsFor": 8,
                "goalsAgainst": 14
              },
              "home": {
                "played": 4,
                "wins": 1,
                "draws": 1,
                "losses": 2,
                "goalsFor": 5,
                "goalsAgainst": 9
              },
              "away": {
                "played": 3,
                "wins": 0,
                "draws": 1,
                "losses": 2,
                "goalsFor": 3,
                "goalsAgainst": 5
              }
            },
            {
              "teamId": 10075,
              "team": "Imabari",
              "rank": 20,
              "points": 4,
              "goalsDiff": -9,
              "form": "LWDLL",
              "all": {
                "played": 7,
                "wins": 1,
                "draws": 1,
                "losses": 5,
                "goalsFor": 6,
                "goalsAgainst": 15
              },
              "home": {
                "played": 3,
                "wins": 1,
                "draws": 0,
                "losses": 2,
                "goalsFor": 3,
                "goalsAgainst": 6
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
              "teamId": 7145,
              "team": "Tochigi City",
              "form": "LWWLWDL",
              "all": {
                "played": 7,
                "wins": 3,
                "draws": 1,
                "losses": 3,
                "goalsFor": 14,
                "goalsAgainst": 10
              },
              "home": {
                "played": 3,
                "wins": 1,
                "draws": 0,
                "losses": 2,
                "goalsFor": 7,
                "goalsAgainst": 6
              },
              "away": {
                "played": 4,
                "wins": 2,
                "draws": 1,
                "losses": 1,
                "goalsFor": 7,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 286,
              "team": "Vegalta Sendai",
              "form": "LDWWWDW",
              "all": {
                "played": 7,
                "wins": 4,
                "draws": 2,
                "losses": 1,
                "goalsFor": 13,
                "goalsAgainst": 7
              },
              "home": {
                "played": 3,
                "wins": 1,
                "draws": 2,
                "losses": 0,
                "goalsFor": 5,
                "goalsAgainst": 3
              },
              "away": {
                "played": 4,
                "wins": 3,
                "draws": 0,
                "losses": 1,
                "goalsFor": 8,
                "goalsAgainst": 4
              }
            }
          ],
          "fixtures": [
            {
              "fixtureId": 1606665,
              "kickoff": "2026-09-20T17:00:00+09:00",
              "status": "FT",
              "homeTeamId": 7145,
              "homeTeam": "Tochigi City",
              "awayTeamId": 286,
              "awayTeam": "Vegalta Sendai",
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
      "date": "2026-09-21",
      "updatedAt": "2026-09-20T20:44:36.297Z",
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
              "points": 15,
              "goalsDiff": 8,
              "form": "WWWWW",
              "all": {
                "played": 5,
                "wins": 5,
                "draws": 0,
                "losses": 0,
                "goalsFor": 13,
                "goalsAgainst": 5
              },
              "home": {
                "played": 3,
                "wins": 3,
                "draws": 0,
                "losses": 0,
                "goalsFor": 8,
                "goalsAgainst": 4
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
              "teamId": 42,
              "team": "Arsenal",
              "rank": 2,
              "points": 12,
              "goalsDiff": 4,
              "form": "LWWWW",
              "all": {
                "played": 5,
                "wins": 4,
                "draws": 0,
                "losses": 1,
                "goalsFor": 8,
                "goalsAgainst": 4
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
                "played": 3,
                "wins": 2,
                "draws": 0,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 51,
              "team": "Brighton",
              "rank": 3,
              "points": 10,
              "goalsDiff": 11,
              "form": "WWDLW",
              "all": {
                "played": 5,
                "wins": 3,
                "draws": 1,
                "losses": 1,
                "goalsFor": 16,
                "goalsAgainst": 5
              },
              "home": {
                "played": 3,
                "wins": 2,
                "draws": 1,
                "losses": 0,
                "goalsFor": 8,
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
              "teamId": 55,
              "team": "Brentford",
              "rank": 4,
              "points": 9,
              "goalsDiff": 6,
              "form": "WDDDW",
              "all": {
                "played": 5,
                "wins": 2,
                "draws": 3,
                "losses": 0,
                "goalsFor": 10,
                "goalsAgainst": 4
              },
              "home": {
                "played": 3,
                "wins": 2,
                "draws": 1,
                "losses": 0,
                "goalsFor": 7,
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
              "teamId": 63,
              "team": "Leeds",
              "rank": 5,
              "points": 9,
              "goalsDiff": 4,
              "form": "DWDDW",
              "all": {
                "played": 5,
                "wins": 2,
                "draws": 3,
                "losses": 0,
                "goalsFor": 7,
                "goalsAgainst": 3
              },
              "home": {
                "played": 3,
                "wins": 1,
                "draws": 2,
                "losses": 0,
                "goalsFor": 5,
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
              "teamId": 40,
              "team": "Liverpool",
              "rank": 6,
              "points": 9,
              "goalsDiff": 3,
              "form": "WDWDD",
              "all": {
                "played": 5,
                "wins": 2,
                "draws": 3,
                "losses": 0,
                "goalsFor": 7,
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
                "played": 3,
                "wins": 2,
                "draws": 1,
                "losses": 0,
                "goalsFor": 5,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 45,
              "team": "Everton",
              "rank": 7,
              "points": 9,
              "goalsDiff": 3,
              "form": "WDDDW",
              "all": {
                "played": 5,
                "wins": 2,
                "draws": 3,
                "losses": 0,
                "goalsFor": 6,
                "goalsAgainst": 3
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
                "wins": 0,
                "draws": 2,
                "losses": 0,
                "goalsFor": 1,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 64,
              "team": "Hull City",
              "rank": 8,
              "points": 8,
              "goalsDiff": 2,
              "form": "LDDWW",
              "all": {
                "played": 5,
                "wins": 2,
                "draws": 2,
                "losses": 1,
                "goalsFor": 6,
                "goalsAgainst": 4
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
                "played": 3,
                "wins": 1,
                "draws": 1,
                "losses": 1,
                "goalsFor": 4,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 34,
              "team": "Newcastle",
              "rank": 9,
              "points": 8,
              "goalsDiff": 0,
              "form": "WLDWD",
              "all": {
                "played": 5,
                "wins": 2,
                "draws": 2,
                "losses": 1,
                "goalsFor": 9,
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
                "draws": 0,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 49,
              "team": "Chelsea",
              "rank": 10,
              "points": 7,
              "goalsDiff": -2,
              "form": "LDLWW",
              "all": {
                "played": 5,
                "wins": 2,
                "draws": 1,
                "losses": 2,
                "goalsFor": 10,
                "goalsAgainst": 12
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
                "played": 3,
                "wins": 1,
                "draws": 0,
                "losses": 2,
                "goalsFor": 4,
                "goalsAgainst": 7
              }
            },
            {
              "teamId": 57,
              "team": "Ipswich",
              "rank": 11,
              "points": 6,
              "goalsDiff": -4,
              "form": "LWLLW",
              "all": {
                "played": 5,
                "wins": 2,
                "draws": 0,
                "losses": 3,
                "goalsFor": 7,
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
                "played": 3,
                "wins": 1,
                "draws": 0,
                "losses": 2,
                "goalsFor": 5,
                "goalsAgainst": 8
              }
            },
            {
              "teamId": 33,
              "team": "Manchester United",
              "rank": 12,
              "points": 5,
              "goalsDiff": 0,
              "form": "DLDWL",
              "all": {
                "played": 5,
                "wins": 1,
                "draws": 2,
                "losses": 2,
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
                "wins": 0,
                "draws": 2,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 5
              }
            },
            {
              "teamId": 65,
              "team": "Nottingham Forest",
              "rank": 13,
              "points": 5,
              "goalsDiff": -1,
              "form": "LWDDL",
              "all": {
                "played": 5,
                "wins": 1,
                "draws": 2,
                "losses": 2,
                "goalsFor": 4,
                "goalsAgainst": 5
              },
              "home": {
                "played": 3,
                "wins": 0,
                "draws": 1,
                "losses": 2,
                "goalsFor": 0,
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
              "teamId": 746,
              "team": "Sunderland",
              "rank": 14,
              "points": 4,
              "goalsDiff": -4,
              "form": "LLDWL",
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
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 1,
                "goalsAgainst": 2
              },
              "away": {
                "played": 3,
                "wins": 0,
                "draws": 1,
                "losses": 2,
                "goalsFor": 5,
                "goalsAgainst": 8
              }
            },
            {
              "teamId": 52,
              "team": "Crystal Palace",
              "rank": 15,
              "points": 4,
              "goalsDiff": -5,
              "form": "DLWLL",
              "all": {
                "played": 5,
                "wins": 1,
                "draws": 1,
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
                "played": 3,
                "wins": 1,
                "draws": 1,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 66,
              "team": "Aston Villa",
              "rank": 16,
              "points": 4,
              "goalsDiff": -5,
              "form": "WLDLL",
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
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 1,
                "goalsAgainst": 3
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
              "teamId": 35,
              "team": "Bournemouth",
              "rank": 17,
              "points": 3,
              "goalsDiff": -2,
              "form": "LDDDL",
              "all": {
                "played": 5,
                "wins": 0,
                "draws": 3,
                "losses": 2,
                "goalsFor": 6,
                "goalsAgainst": 8
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
                "played": 2,
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 1346,
              "team": "Coventry",
              "rank": 18,
              "points": 3,
              "goalsDiff": -9,
              "form": "WLLLL",
              "all": {
                "played": 5,
                "wins": 1,
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
                "goalsFor": 0,
                "goalsAgainst": 6
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
              "teamId": 36,
              "team": "Fulham",
              "rank": 19,
              "points": 2,
              "goalsDiff": -3,
              "form": "DDLLL",
              "all": {
                "played": 5,
                "wins": 0,
                "draws": 2,
                "losses": 3,
                "goalsFor": 5,
                "goalsAgainst": 8
              },
              "home": {
                "played": 3,
                "wins": 0,
                "draws": 1,
                "losses": 2,
                "goalsFor": 5,
                "goalsAgainst": 7
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
              "teamId": 47,
              "team": "Tottenham",
              "rank": 20,
              "points": 2,
              "goalsDiff": -6,
              "form": "LDDLL",
              "all": {
                "played": 5,
                "wins": 0,
                "draws": 2,
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
                "goalsAgainst": 5
              },
              "away": {
                "played": 2,
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 0,
                "goalsAgainst": 3
              }
            }
          ],
          "teams": [
            {
              "teamId": 36,
              "team": "Fulham",
              "form": "LLLDD",
              "all": {
                "played": 5,
                "wins": 0,
                "draws": 2,
                "losses": 3,
                "goalsFor": 5,
                "goalsAgainst": 8
              },
              "home": {
                "played": 3,
                "wins": 0,
                "draws": 1,
                "losses": 2,
                "goalsFor": 5,
                "goalsAgainst": 7
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
              "teamId": 33,
              "team": "Manchester United",
              "form": "LWDLD",
              "all": {
                "played": 5,
                "wins": 1,
                "draws": 2,
                "losses": 2,
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
                "wins": 0,
                "draws": 2,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 5
              }
            }
          ],
          "fixtures": [
            {
              "fixtureId": 1557411,
              "kickoff": "2026-09-21T00:30:00+09:00",
              "status": "FT",
              "homeTeamId": 36,
              "homeTeam": "Fulham",
              "awayTeamId": 33,
              "awayTeam": "Manchester United",
              "injuriesChecked": true,
              "injuries": [
                {
                  "fixtureId": 1557411,
                  "teamId": 36,
                  "playerId": 19025,
                  "player": "T. Cairney",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1557411,
                  "teamId": 36,
                  "playerId": 657,
                  "player": "K. Tete",
                  "type": "Missing Fixture",
                  "reason": "Concussion"
                },
                {
                  "fixtureId": 1557411,
                  "teamId": 36,
                  "playerId": 19032,
                  "player": "R. Sessegnon",
                  "type": "Questionable",
                  "reason": "Groin Injury"
                },
                {
                  "fixtureId": 1557411,
                  "teamId": 33,
                  "playerId": 157997,
                  "player": "A. Diallo",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1557411,
                  "teamId": 33,
                  "playerId": 2931,
                  "player": "T. Heaton",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1557411,
                  "teamId": 33,
                  "playerId": 51494,
                  "player": "M. Ugarte",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1557411,
                  "teamId": 33,
                  "playerId": 532,
                  "player": "M. de Ligt",
                  "type": "Missing Fixture",
                  "reason": "Back Injury"
                },
                {
                  "fixtureId": 1557411,
                  "teamId": 33,
                  "playerId": 356041,
                  "player": "C. Baleba",
                  "type": "Questionable",
                  "reason": "Ankle Injury"
                },
                {
                  "fixtureId": 1557411,
                  "teamId": 33,
                  "playerId": 891,
                  "player": "L. Shaw",
                  "type": "Questionable",
                  "reason": "Injury"
                }
              ],
              "lineupsChecked": true,
              "lineups": [
                {
                  "teamId": 36,
                  "team": "Fulham",
                  "formation": "4-2-3-1",
                  "coach": "Álvaro Arbeloa",
                  "starters": [
                    "B. Leno",
                    "T. Castagne",
                    "D. Affengruber",
                    "C. Bassey",
                    "A. Robinson",
                    "S. Berge",
                    "S. Charles",
                    "Oscar Bobb",
                    "Joshua King",
                    "A. Iwobi",
                    "Gonzalo García"
                  ]
                },
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
                    "L. Shaw",
                    "K. Mainoo",
                    "Y. Tielemans",
                    "B. Mbeumo",
                    "Bruno Fernandes",
                    "M. Rashford",
                    "Matheus Cunha"
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
              "points": 21,
              "goalsDiff": 24,
              "form": "WWWWW",
              "all": {
                "played": 7,
                "wins": 7,
                "draws": 0,
                "losses": 0,
                "goalsFor": 31,
                "goalsAgainst": 7
              },
              "home": {
                "played": 3,
                "wins": 3,
                "draws": 0,
                "losses": 0,
                "goalsFor": 14,
                "goalsAgainst": 4
              },
              "away": {
                "played": 4,
                "wins": 4,
                "draws": 0,
                "losses": 0,
                "goalsFor": 17,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 530,
              "team": "Atletico Madrid",
              "rank": 2,
              "points": 16,
              "goalsDiff": 9,
              "form": "WWWLW",
              "all": {
                "played": 7,
                "wins": 5,
                "draws": 1,
                "losses": 1,
                "goalsFor": 16,
                "goalsAgainst": 7
              },
              "home": {
                "played": 4,
                "wins": 3,
                "draws": 1,
                "losses": 0,
                "goalsFor": 10,
                "goalsAgainst": 3
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
              "teamId": 543,
              "team": "Real Betis",
              "rank": 3,
              "points": 16,
              "goalsDiff": 2,
              "form": "DWWWL",
              "all": {
                "played": 7,
                "wins": 5,
                "draws": 1,
                "losses": 1,
                "goalsFor": 9,
                "goalsAgainst": 7
              },
              "home": {
                "played": 3,
                "wins": 3,
                "draws": 0,
                "losses": 0,
                "goalsFor": 3,
                "goalsAgainst": 0
              },
              "away": {
                "played": 4,
                "wins": 2,
                "draws": 1,
                "losses": 1,
                "goalsFor": 6,
                "goalsAgainst": 7
              }
            },
            {
              "teamId": 541,
              "team": "Real Madrid",
              "rank": 4,
              "points": 15,
              "goalsDiff": 10,
              "form": "LWWLW",
              "all": {
                "played": 7,
                "wins": 5,
                "draws": 0,
                "losses": 2,
                "goalsFor": 18,
                "goalsAgainst": 8
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
                "played": 4,
                "wins": 2,
                "draws": 0,
                "losses": 2,
                "goalsFor": 6,
                "goalsAgainst": 6
              }
            },
            {
              "teamId": 536,
              "team": "Sevilla",
              "rank": 5,
              "points": 13,
              "goalsDiff": 1,
              "form": "LWWDL",
              "all": {
                "played": 7,
                "wins": 4,
                "draws": 1,
                "losses": 2,
                "goalsFor": 10,
                "goalsAgainst": 9
              },
              "home": {
                "played": 4,
                "wins": 2,
                "draws": 0,
                "losses": 2,
                "goalsFor": 5,
                "goalsAgainst": 7
              },
              "away": {
                "played": 3,
                "wins": 2,
                "draws": 1,
                "losses": 0,
                "goalsFor": 5,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 542,
              "team": "Alaves",
              "rank": 6,
              "points": 11,
              "goalsDiff": 5,
              "form": "DLLWW",
              "all": {
                "played": 7,
                "wins": 3,
                "draws": 2,
                "losses": 2,
                "goalsFor": 11,
                "goalsAgainst": 6
              },
              "home": {
                "played": 4,
                "wins": 3,
                "draws": 0,
                "losses": 1,
                "goalsFor": 9,
                "goalsAgainst": 3
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
              "teamId": 544,
              "team": "Deportivo La Coruna",
              "rank": 7,
              "points": 10,
              "goalsDiff": 2,
              "form": "DLDWW",
              "all": {
                "played": 7,
                "wins": 2,
                "draws": 4,
                "losses": 1,
                "goalsFor": 10,
                "goalsAgainst": 8
              },
              "home": {
                "played": 4,
                "wins": 1,
                "draws": 2,
                "losses": 1,
                "goalsFor": 5,
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
              "teamId": 533,
              "team": "Villarreal",
              "rank": 8,
              "points": 8,
              "goalsDiff": 1,
              "form": "WWLLL",
              "all": {
                "played": 7,
                "wins": 2,
                "draws": 2,
                "losses": 3,
                "goalsFor": 13,
                "goalsAgainst": 12
              },
              "home": {
                "played": 3,
                "wins": 1,
                "draws": 0,
                "losses": 2,
                "goalsFor": 6,
                "goalsAgainst": 6
              },
              "away": {
                "played": 4,
                "wins": 1,
                "draws": 2,
                "losses": 1,
                "goalsFor": 7,
                "goalsAgainst": 6
              }
            },
            {
              "teamId": 531,
              "team": "Athletic Club",
              "rank": 9,
              "points": 8,
              "goalsDiff": 1,
              "form": "DDWWL",
              "all": {
                "played": 6,
                "wins": 2,
                "draws": 2,
                "losses": 2,
                "goalsFor": 7,
                "goalsAgainst": 6
              },
              "home": {
                "played": 4,
                "wins": 1,
                "draws": 2,
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
              "teamId": 546,
              "team": "Getafe",
              "rank": 10,
              "points": 8,
              "goalsDiff": -3,
              "form": "WLDDL",
              "all": {
                "played": 7,
                "wins": 2,
                "draws": 2,
                "losses": 3,
                "goalsFor": 4,
                "goalsAgainst": 7
              },
              "home": {
                "played": 4,
                "wins": 2,
                "draws": 2,
                "losses": 0,
                "goalsFor": 4,
                "goalsAgainst": 2
              },
              "away": {
                "played": 3,
                "wins": 0,
                "draws": 0,
                "losses": 3,
                "goalsFor": 0,
                "goalsAgainst": 5
              }
            },
            {
              "teamId": 728,
              "team": "Rayo Vallecano",
              "rank": 11,
              "points": 8,
              "goalsDiff": -5,
              "form": "DWLWL",
              "all": {
                "played": 7,
                "wins": 2,
                "draws": 2,
                "losses": 3,
                "goalsFor": 11,
                "goalsAgainst": 16
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
                "played": 4,
                "wins": 0,
                "draws": 1,
                "losses": 3,
                "goalsFor": 5,
                "goalsAgainst": 12
              }
            },
            {
              "teamId": 727,
              "team": "Osasuna",
              "rank": 12,
              "points": 8,
              "goalsDiff": -7,
              "form": "DLLLW",
              "all": {
                "played": 7,
                "wins": 2,
                "draws": 2,
                "losses": 3,
                "goalsFor": 6,
                "goalsAgainst": 13
              },
              "home": {
                "played": 4,
                "wins": 1,
                "draws": 2,
                "losses": 1,
                "goalsFor": 2,
                "goalsAgainst": 3
              },
              "away": {
                "played": 3,
                "wins": 1,
                "draws": 0,
                "losses": 2,
                "goalsFor": 4,
                "goalsAgainst": 10
              }
            },
            {
              "teamId": 538,
              "team": "Celta Vigo",
              "rank": 13,
              "points": 7,
              "goalsDiff": 2,
              "form": "WDDDL",
              "all": {
                "played": 7,
                "wins": 1,
                "draws": 4,
                "losses": 2,
                "goalsFor": 8,
                "goalsAgainst": 6
              },
              "home": {
                "played": 4,
                "wins": 1,
                "draws": 1,
                "losses": 2,
                "goalsFor": 7,
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
              "teamId": 540,
              "team": "Espanyol",
              "rank": 14,
              "points": 7,
              "goalsDiff": 0,
              "form": "LLWDL",
              "all": {
                "played": 7,
                "wins": 2,
                "draws": 1,
                "losses": 4,
                "goalsFor": 10,
                "goalsAgainst": 10
              },
              "home": {
                "played": 4,
                "wins": 1,
                "draws": 1,
                "losses": 2,
                "goalsFor": 6,
                "goalsAgainst": 6
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
              "teamId": 548,
              "team": "Real Sociedad",
              "rank": 15,
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
              "teamId": 4665,
              "team": "Racing Santander",
              "rank": 16,
              "points": 7,
              "goalsDiff": -10,
              "form": "LLWLW",
              "all": {
                "played": 7,
                "wins": 2,
                "draws": 1,
                "losses": 4,
                "goalsFor": 11,
                "goalsAgainst": 21
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
                "played": 4,
                "wins": 0,
                "draws": 0,
                "losses": 4,
                "goalsFor": 4,
                "goalsAgainst": 16
              }
            },
            {
              "teamId": 539,
              "team": "Levante",
              "rank": 17,
              "points": 5,
              "goalsDiff": -4,
              "form": "LLDWD",
              "all": {
                "played": 6,
                "wins": 1,
                "draws": 2,
                "losses": 3,
                "goalsFor": 8,
                "goalsAgainst": 12
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
                "played": 4,
                "wins": 0,
                "draws": 2,
                "losses": 2,
                "goalsFor": 1,
                "goalsAgainst": 6
              }
            },
            {
              "teamId": 797,
              "team": "Elche",
              "rank": 18,
              "points": 5,
              "goalsDiff": -6,
              "form": "WLDLL",
              "all": {
                "played": 7,
                "wins": 1,
                "draws": 2,
                "losses": 4,
                "goalsFor": 11,
                "goalsAgainst": 17
              },
              "home": {
                "played": 3,
                "wins": 0,
                "draws": 0,
                "losses": 3,
                "goalsFor": 4,
                "goalsAgainst": 11
              },
              "away": {
                "played": 4,
                "wins": 1,
                "draws": 2,
                "losses": 1,
                "goalsFor": 7,
                "goalsAgainst": 6
              }
            },
            {
              "teamId": 532,
              "team": "Valencia",
              "rank": 19,
              "points": 4,
              "goalsDiff": -8,
              "form": "WLLLL",
              "all": {
                "played": 6,
                "wins": 1,
                "draws": 1,
                "losses": 4,
                "goalsFor": 2,
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
                "played": 3,
                "wins": 1,
                "draws": 0,
                "losses": 2,
                "goalsFor": 2,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 535,
              "team": "Malaga",
              "rank": 20,
              "points": 3,
              "goalsDiff": -9,
              "form": "LLDDL",
              "all": {
                "played": 7,
                "wins": 0,
                "draws": 3,
                "losses": 4,
                "goalsFor": 3,
                "goalsAgainst": 12
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
                "played": 4,
                "wins": 0,
                "draws": 1,
                "losses": 3,
                "goalsFor": 1,
                "goalsAgainst": 8
              }
            }
          ],
          "teams": [
            {
              "teamId": 533,
              "team": "Villarreal",
              "form": "DDLLLWW",
              "all": {
                "played": 7,
                "wins": 2,
                "draws": 2,
                "losses": 3,
                "goalsFor": 13,
                "goalsAgainst": 12
              },
              "home": {
                "played": 3,
                "wins": 1,
                "draws": 0,
                "losses": 2,
                "goalsFor": 6,
                "goalsAgainst": 6
              },
              "away": {
                "played": 4,
                "wins": 1,
                "draws": 2,
                "losses": 1,
                "goalsFor": 7,
                "goalsAgainst": 6
              }
            },
            {
              "teamId": 539,
              "team": "Levante",
              "form": "LDWDLL",
              "all": {
                "played": 6,
                "wins": 1,
                "draws": 2,
                "losses": 3,
                "goalsFor": 8,
                "goalsAgainst": 12
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
                "played": 4,
                "wins": 0,
                "draws": 2,
                "losses": 2,
                "goalsFor": 1,
                "goalsAgainst": 6
              }
            },
            {
              "teamId": 544,
              "team": "Deportivo La Coruna",
              "form": "DDWWDLD",
              "all": {
                "played": 7,
                "wins": 2,
                "draws": 4,
                "losses": 1,
                "goalsFor": 10,
                "goalsAgainst": 8
              },
              "home": {
                "played": 4,
                "wins": 1,
                "draws": 2,
                "losses": 1,
                "goalsFor": 5,
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
              "teamId": 543,
              "team": "Real Betis",
              "form": "WWLWWWD",
              "all": {
                "played": 7,
                "wins": 5,
                "draws": 1,
                "losses": 1,
                "goalsFor": 9,
                "goalsAgainst": 7
              },
              "home": {
                "played": 3,
                "wins": 3,
                "draws": 0,
                "losses": 0,
                "goalsFor": 3,
                "goalsAgainst": 0
              },
              "away": {
                "played": 4,
                "wins": 2,
                "draws": 1,
                "losses": 1,
                "goalsFor": 6,
                "goalsAgainst": 7
              }
            },
            {
              "teamId": 532,
              "team": "Valencia",
              "form": "DLLLLW",
              "all": {
                "played": 6,
                "wins": 1,
                "draws": 1,
                "losses": 4,
                "goalsFor": 2,
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
                "played": 3,
                "wins": 1,
                "draws": 0,
                "losses": 2,
                "goalsFor": 2,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 548,
              "team": "Real Sociedad",
              "form": "LLWDWL",
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
            }
          ],
          "fixtures": [
            {
              "fixtureId": 1570402,
              "kickoff": "2026-09-21T01:30:00+09:00",
              "status": "FT",
              "homeTeamId": 533,
              "homeTeam": "Villarreal",
              "awayTeamId": 539,
              "awayTeam": "Levante",
              "injuriesChecked": true,
              "injuries": [
                {
                  "fixtureId": 1570402,
                  "teamId": 533,
                  "playerId": 47541,
                  "player": "S. Comesana",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1570402,
                  "teamId": 533,
                  "playerId": 166,
                  "player": "J. Foyth",
                  "type": "Questionable",
                  "reason": "Achilles Tendon Injury"
                },
                {
                  "fixtureId": 1570402,
                  "teamId": 539,
                  "playerId": 378284,
                  "player": "K. Etta Eyong",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1570402,
                  "teamId": 539,
                  "playerId": 338295,
                  "player": "A. Primo",
                  "type": "Missing Fixture",
                  "reason": "Shoulder Injury"
                },
                {
                  "fixtureId": 1570402,
                  "teamId": 539,
                  "playerId": 313651,
                  "player": "H. Sotelo",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                }
              ],
              "lineupsChecked": true,
              "lineups": [
                {
                  "teamId": 533,
                  "team": "Villarreal",
                  "formation": "4-1-2-1-2",
                  "coach": "Iñigo Pérez",
                  "starters": [
                    "P. Gulácsi",
                    "A. Freeman",
                    "Pau Navarro",
                    "Renato Veiga",
                    "Sergi Cardona",
                    "N. Saliba",
                    "P. Gueye",
                    "T. Buchanan",
                    "Alberto Moleiro",
                    "Ilias Akhomach",
                    "Ayoze Pérez"
                  ]
                },
                {
                  "teamId": 539,
                  "team": "Levante",
                  "formation": "4-3-3",
                  "coach": "Luís Castro",
                  "starters": [
                    "M. Ryan",
                    "J. Toljan",
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
              "fixtureId": 1570396,
              "kickoff": "2026-09-21T01:30:00+09:00",
              "status": "FT",
              "homeTeamId": 544,
              "homeTeam": "Deportivo La Coruna",
              "awayTeamId": 543,
              "awayTeam": "Real Betis",
              "injuriesChecked": true,
              "injuries": [
                {
                  "fixtureId": 1570396,
                  "teamId": 544,
                  "playerId": 227,
                  "player": "Angelino",
                  "type": "Missing Fixture",
                  "reason": "Red Card"
                },
                {
                  "fixtureId": 1570396,
                  "teamId": 544,
                  "playerId": 628615,
                  "player": "N. Carrillo",
                  "type": "Questionable",
                  "reason": "Ankle Injury"
                },
                {
                  "fixtureId": 1570396,
                  "teamId": 543,
                  "playerId": 47302,
                  "player": "D. Llorente",
                  "type": "Missing Fixture",
                  "reason": "Broken nose"
                },
                {
                  "fixtureId": 1570396,
                  "teamId": 543,
                  "playerId": 128985,
                  "player": "I. Losada",
                  "type": "Missing Fixture",
                  "reason": "Inactive"
                },
                {
                  "fixtureId": 1570396,
                  "teamId": 543,
                  "playerId": 47119,
                  "player": "A. Ruibal",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                }
              ],
              "lineupsChecked": true,
              "lineups": [
                {
                  "teamId": 544,
                  "team": "Deportivo La Coruna",
                  "formation": "4-4-2",
                  "coach": "Antonio Hidalgo",
                  "starters": [
                    "Leo Román",
                    "Ximo Navarro",
                    "J. Giménez",
                    "B. Ede",
                    "G. Quagliata",
                    "David Mella",
                    "Marc Casadó",
                    "Mario Soriano",
                    "Riki Rodríguez",
                    "Jonathan Asp Jensen",
                    "B. Nsongo"
                  ]
                },
                {
                  "teamId": 543,
                  "team": "Real Betis",
                  "formation": "4-3-3",
                  "coach": "M. Pellegrini",
                  "starters": [
                    "Álvaro Vallés",
                    "Héctor Bellerín",
                    "Marc Bartra",
                    "Natan",
                    "Fran García",
                    "N. Deossa",
                    "Marc Roca",
                    "Pablo Fornals",
                    "Antony",
                    "C. Hernández",
                    "A. Ezzalzouli"
                  ]
                }
              ]
            },
            {
              "fixtureId": 1570401,
              "kickoff": "2026-09-21T04:00:00+09:00",
              "status": "2H",
              "homeTeamId": 532,
              "homeTeam": "Valencia",
              "awayTeamId": 548,
              "awayTeam": "Real Sociedad",
              "injuriesChecked": true,
              "injuries": [
                {
                  "fixtureId": 1570401,
                  "teamId": 532,
                  "playerId": 19352,
                  "player": "S. Canos",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1570401,
                  "teamId": 532,
                  "playerId": 181582,
                  "player": "J. Copete",
                  "type": "Missing Fixture",
                  "reason": "Ankle Injury"
                },
                {
                  "fixtureId": 1570401,
                  "teamId": 532,
                  "playerId": 916,
                  "player": "M. Diakhaby",
                  "type": "Missing Fixture",
                  "reason": "Muscle Injury"
                },
                {
                  "fixtureId": 1570401,
                  "teamId": 532,
                  "playerId": 47251,
                  "player": "D. Foulquier",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1570401,
                  "teamId": 532,
                  "playerId": 162127,
                  "player": "D. Lopez",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1570401,
                  "teamId": 532,
                  "playerId": 31406,
                  "player": "U. Sadiq",
                  "type": "Missing Fixture",
                  "reason": "Muscle Injury"
                },
                {
                  "fixtureId": 1570401,
                  "teamId": 532,
                  "playerId": 333672,
                  "player": "C. Tarrega",
                  "type": "Missing Fixture",
                  "reason": "Hamstring Injury"
                },
                {
                  "fixtureId": 1570401,
                  "teamId": 548,
                  "playerId": 737,
                  "player": "A. Odriozola",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1570401,
                  "teamId": 548,
                  "playerId": 47314,
                  "player": "I. Zubeldia",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                }
              ],
              "lineupsChecked": true,
              "lineups": [
                {
                  "teamId": 532,
                  "team": "Valencia",
                  "formation": "4-4-2",
                  "coach": "Óscar Sánchez",
                  "starters": [
                    "S. Dimitrievski",
                    "Pablo Maffeo",
                    "Pepelu",
                    "J. de Haas",
                    "José Gayà",
                    "F. Ugrinic",
                    "Aaron Mayol",
                    "G. Rodríguez",
                    "A. Danjuma",
                    "Javi Guerra",
                    "Hugo Duro"
                  ]
                },
                {
                  "teamId": 548,
                  "team": "Real Sociedad",
                  "formation": "4-4-2",
                  "coach": "P. Matarazzo",
                  "starters": [
                    "Álex Remiro",
                    "J. Aramburu",
                    "Luken Beitia",
                    "Jon Martín",
                    "Sergio Gómez",
                    "J. Ochieng",
                    "Jon Gorrotxategi",
                    "Carlos Soler",
                    "Gonçalo Guedes",
                    "L. Sučić",
                    "Mikel Oyarzabal"
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
              "points": 13,
              "goalsDiff": 11,
              "form": "DWWWW",
              "all": {
                "played": 5,
                "wins": 4,
                "draws": 1,
                "losses": 0,
                "goalsFor": 14,
                "goalsAgainst": 3
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
                "played": 2,
                "wins": 2,
                "draws": 0,
                "losses": 0,
                "goalsFor": 6,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 505,
              "team": "Inter",
              "rank": 2,
              "points": 13,
              "goalsDiff": 7,
              "form": "DWWWW",
              "all": {
                "played": 5,
                "wins": 4,
                "draws": 1,
                "losses": 0,
                "goalsFor": 15,
                "goalsAgainst": 8
              },
              "home": {
                "played": 3,
                "wins": 3,
                "draws": 0,
                "losses": 0,
                "goalsFor": 12,
                "goalsAgainst": 6
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
              "teamId": 487,
              "team": "Lazio",
              "rank": 3,
              "points": 13,
              "goalsDiff": 5,
              "form": "WDWWW",
              "all": {
                "played": 5,
                "wins": 4,
                "draws": 1,
                "losses": 0,
                "goalsFor": 8,
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
                "played": 3,
                "wins": 3,
                "draws": 0,
                "losses": 0,
                "goalsFor": 5,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 490,
              "team": "Cagliari",
              "rank": 4,
              "points": 12,
              "goalsDiff": 3,
              "form": "WWWLW",
              "all": {
                "played": 5,
                "wins": 4,
                "draws": 0,
                "losses": 1,
                "goalsFor": 5,
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
                "played": 3,
                "wins": 3,
                "draws": 0,
                "losses": 0,
                "goalsFor": 4,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 512,
              "team": "Frosinone",
              "rank": 5,
              "points": 10,
              "goalsDiff": 5,
              "form": "WDWWL",
              "all": {
                "played": 5,
                "wins": 3,
                "draws": 1,
                "losses": 1,
                "goalsFor": 9,
                "goalsAgainst": 4
              },
              "home": {
                "played": 3,
                "wins": 2,
                "draws": 0,
                "losses": 1,
                "goalsFor": 5,
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
              "rank": 6,
              "points": 10,
              "goalsDiff": 4,
              "form": "WLDWW",
              "all": {
                "played": 5,
                "wins": 3,
                "draws": 1,
                "losses": 1,
                "goalsFor": 8,
                "goalsAgainst": 4
              },
              "home": {
                "played": 3,
                "wins": 2,
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
                "goalsFor": 3,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 895,
              "team": "Como",
              "rank": 7,
              "points": 10,
              "goalsDiff": 3,
              "form": "LWWWD",
              "all": {
                "played": 5,
                "wins": 3,
                "draws": 1,
                "losses": 1,
                "goalsFor": 9,
                "goalsAgainst": 6
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
                "played": 4,
                "wins": 2,
                "draws": 1,
                "losses": 1,
                "goalsFor": 7,
                "goalsAgainst": 5
              }
            },
            {
              "teamId": 489,
              "team": "AC Milan",
              "rank": 8,
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
              "teamId": 492,
              "team": "Napoli",
              "rank": 9,
              "points": 7,
              "goalsDiff": 1,
              "form": "DWLLW",
              "all": {
                "played": 5,
                "wins": 2,
                "draws": 1,
                "losses": 2,
                "goalsFor": 7,
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
                "played": 3,
                "wins": 1,
                "draws": 1,
                "losses": 1,
                "goalsFor": 5,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 488,
              "team": "Sassuolo",
              "rank": 10,
              "points": 7,
              "goalsDiff": 0,
              "form": "LWDWL",
              "all": {
                "played": 5,
                "wins": 2,
                "draws": 1,
                "losses": 2,
                "goalsFor": 9,
                "goalsAgainst": 9
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
                "played": 3,
                "wins": 0,
                "draws": 1,
                "losses": 2,
                "goalsFor": 4,
                "goalsAgainst": 6
              }
            },
            {
              "teamId": 867,
              "team": "Lecce",
              "rank": 11,
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
              "teamId": 499,
              "team": "Atalanta",
              "rank": 12,
              "points": 6,
              "goalsDiff": -2,
              "form": "LLLWW",
              "all": {
                "played": 5,
                "wins": 2,
                "draws": 0,
                "losses": 3,
                "goalsFor": 5,
                "goalsAgainst": 7
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
                "played": 2,
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 1,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 494,
              "team": "Udinese",
              "rank": 13,
              "points": 4,
              "goalsDiff": -3,
              "form": "LLLWD",
              "all": {
                "played": 5,
                "wins": 1,
                "draws": 1,
                "losses": 3,
                "goalsFor": 8,
                "goalsAgainst": 11
              },
              "home": {
                "played": 3,
                "wins": 0,
                "draws": 1,
                "losses": 2,
                "goalsFor": 2,
                "goalsAgainst": 4
              },
              "away": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 6,
                "goalsAgainst": 7
              }
            },
            {
              "teamId": 503,
              "team": "Torino",
              "rank": 14,
              "points": 4,
              "goalsDiff": -3,
              "form": "DLWLL",
              "all": {
                "played": 5,
                "wins": 1,
                "draws": 1,
                "losses": 3,
                "goalsFor": 5,
                "goalsAgainst": 8
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
                "wins": 1,
                "draws": 1,
                "losses": 1,
                "goalsFor": 4,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 523,
              "team": "Parma",
              "rank": 15,
              "points": 4,
              "goalsDiff": -3,
              "form": "WLDLL",
              "all": {
                "played": 5,
                "wins": 1,
                "draws": 1,
                "losses": 3,
                "goalsFor": 4,
                "goalsAgainst": 7
              },
              "home": {
                "played": 3,
                "wins": 1,
                "draws": 1,
                "losses": 1,
                "goalsFor": 3,
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
              "teamId": 1579,
              "team": "Monza",
              "rank": 16,
              "points": 4,
              "goalsDiff": -4,
              "form": "WLDLL",
              "all": {
                "played": 5,
                "wins": 1,
                "draws": 1,
                "losses": 3,
                "goalsFor": 8,
                "goalsAgainst": 12
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
                "played": 3,
                "wins": 0,
                "draws": 1,
                "losses": 2,
                "goalsFor": 4,
                "goalsAgainst": 8
              }
            },
            {
              "teamId": 502,
              "team": "Fiorentina",
              "rank": 17,
              "points": 4,
              "goalsDiff": -6,
              "form": "DWLLL",
              "all": {
                "played": 5,
                "wins": 1,
                "draws": 1,
                "losses": 3,
                "goalsFor": 6,
                "goalsAgainst": 12
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
              "rank": 18,
              "points": 2,
              "goalsDiff": -3,
              "form": "DLDLL",
              "all": {
                "played": 5,
                "wins": 0,
                "draws": 2,
                "losses": 3,
                "goalsFor": 3,
                "goalsAgainst": 6
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
                "played": 2,
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 0,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 495,
              "team": "Genoa",
              "rank": 19,
              "points": 1,
              "goalsDiff": -7,
              "form": "LDLLL",
              "all": {
                "played": 5,
                "wins": 0,
                "draws": 1,
                "losses": 4,
                "goalsFor": 3,
                "goalsAgainst": 10
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
                "played": 2,
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 1,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 517,
              "team": "Venezia",
              "rank": 20,
              "points": 0,
              "goalsDiff": -9,
              "form": "LLLLL",
              "all": {
                "played": 5,
                "wins": 0,
                "draws": 0,
                "losses": 5,
                "goalsFor": 4,
                "goalsAgainst": 13
              },
              "home": {
                "played": 3,
                "wins": 0,
                "draws": 0,
                "losses": 3,
                "goalsFor": 2,
                "goalsAgainst": 8
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
              "teamId": 496,
              "team": "Juventus",
              "form": "WWDLW",
              "all": {
                "played": 5,
                "wins": 3,
                "draws": 1,
                "losses": 1,
                "goalsFor": 8,
                "goalsAgainst": 4
              },
              "home": {
                "played": 3,
                "wins": 2,
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
                "goalsFor": 3,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 499,
              "team": "Atalanta",
              "form": "WWLLL",
              "all": {
                "played": 5,
                "wins": 2,
                "draws": 0,
                "losses": 3,
                "goalsFor": 5,
                "goalsAgainst": 7
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
                "played": 2,
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 1,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 489,
              "team": "AC Milan",
              "form": "WWDDW",
              "all": {
                "played": 5,
                "wins": 3,
                "draws": 2,
                "losses": 0,
                "goalsFor": 10,
                "goalsAgainst": 4
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
                "played": 3,
                "wins": 1,
                "draws": 2,
                "losses": 0,
                "goalsFor": 5,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 867,
              "team": "Lecce",
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
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 6
              },
              "away": {
                "played": 3,
                "wins": 1,
                "draws": 0,
                "losses": 2,
                "goalsFor": 2,
                "goalsAgainst": 4
              }
            }
          ],
          "fixtures": [
            {
              "fixtureId": 1550132,
              "kickoff": "2026-09-21T01:00:00+09:00",
              "status": "FT",
              "homeTeamId": 496,
              "homeTeam": "Juventus",
              "awayTeamId": 499,
              "awayTeam": "Atalanta",
              "injuriesChecked": true,
              "injuries": [
                {
                  "fixtureId": 1550132,
                  "teamId": 496,
                  "playerId": 30531,
                  "player": "J. Boga",
                  "type": "Missing Fixture",
                  "reason": "Muscle Injury"
                },
                {
                  "fixtureId": 1550132,
                  "teamId": 496,
                  "playerId": 125674,
                  "player": "J. Cabal",
                  "type": "Missing Fixture",
                  "reason": "Thigh Injury"
                },
                {
                  "fixtureId": 1550132,
                  "teamId": 496,
                  "playerId": 451504,
                  "player": "J. Ekhator",
                  "type": "Missing Fixture",
                  "reason": "Muscle Injury"
                },
                {
                  "fixtureId": 1550132,
                  "teamId": 496,
                  "playerId": 15573,
                  "player": "K. Grabara",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1550132,
                  "teamId": 496,
                  "playerId": 30533,
                  "player": "M. Locatelli",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1550132,
                  "teamId": 496,
                  "playerId": 333,
                  "player": "A. Milik",
                  "type": "Missing Fixture",
                  "reason": "Inactive"
                },
                {
                  "fixtureId": 1550132,
                  "teamId": 496,
                  "playerId": 116,
                  "player": "K. Thuram",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1550132,
                  "teamId": 496,
                  "playerId": 339883,
                  "player": "K. Yildiz",
                  "type": "Missing Fixture",
                  "reason": "Foot Injury"
                },
                {
                  "fixtureId": 1550132,
                  "teamId": 499,
                  "playerId": 137976,
                  "player": "I. Hien",
                  "type": "Missing Fixture",
                  "reason": "Muscle Injury"
                },
                {
                  "fixtureId": 1550132,
                  "teamId": 499,
                  "playerId": 48119,
                  "player": "O. Kossounou",
                  "type": "Missing Fixture",
                  "reason": "Thigh Injury"
                },
                {
                  "fixtureId": 1550132,
                  "teamId": 499,
                  "playerId": 199837,
                  "player": "K. Sulemana",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                }
              ],
              "lineupsChecked": true,
              "lineups": [
                {
                  "teamId": 496,
                  "team": "Juventus",
                  "formation": "3-4-2-1",
                  "coach": "Luciano Spalletti",
                  "starters": [
                    "Guglielmo Vicario",
                    "Pierre Kalulu",
                    "Gleison Bremer",
                    "Jhon Lucumí",
                    "Nicolás González",
                    "Weston McKennie",
                    "Douglas Luiz",
                    "Zeki Çelik",
                    "Francisco Conceição",
                    "Kerim Alajbegović",
                    "Randal Kolo Muani"
                  ]
                },
                {
                  "teamId": 499,
                  "team": "Atalanta",
                  "formation": "4-3-3",
                  "coach": "Maurizio Sarri",
                  "starters": [
                    "Marco Carnesecchi",
                    "Raoul Bellanova",
                    "Thomas Kristensen",
                    "Giorgio Scalvini",
                    "Lorenzo Bernasconi",
                    "Lazar Samardžić",
                    "Franck Kessié",
                    "Éderson",
                    "Charles De Ketelaere",
                    "Nikola Krstović",
                    "Jonathan Rowe"
                  ]
                }
              ]
            },
            {
              "fixtureId": 1550127,
              "kickoff": "2026-09-21T03:45:00+09:00",
              "status": "FT",
              "homeTeamId": 489,
              "homeTeam": "AC Milan",
              "awayTeamId": 867,
              "awayTeam": "Lecce",
              "injuriesChecked": true,
              "injuries": [
                {
                  "fixtureId": 1550127,
                  "teamId": 867,
                  "playerId": 335071,
                  "player": "M. Berisha",
                  "type": "Missing Fixture",
                  "reason": "Lacking Match Fitness"
                },
                {
                  "fixtureId": 1550127,
                  "teamId": 867,
                  "playerId": 126974,
                  "player": "O. Gandelman",
                  "type": "Missing Fixture",
                  "reason": "Inactive"
                },
                {
                  "fixtureId": 1550127,
                  "teamId": 867,
                  "playerId": 120,
                  "player": "W. Geubbels",
                  "type": "Missing Fixture",
                  "reason": "Ankle Injury"
                }
              ],
              "lineupsChecked": true,
              "lineups": [
                {
                  "teamId": 489,
                  "team": "AC Milan",
                  "formation": "3-4-2-1",
                  "coach": "Ruben Amorim",
                  "starters": [
                    "Mike Maignan",
                    "Mario Gila",
                    "Koni De Winter",
                    "Strahinja Pavlović",
                    "Samuel Chukwueze",
                    "Luka Modrić",
                    "Adrien Rabiot",
                    "Pervis Estupiñán",
                    "Christian Pulišić",
                    "Alexis Saelemaekers",
                    "Gonçalo Ramos"
                  ]
                },
                {
                  "teamId": 867,
                  "team": "Lecce",
                  "formation": "4-3-3",
                  "coach": "Eusebio Di Francesco",
                  "starters": [
                    "Wladimiro Falcone",
                    "Danilo Veiga",
                    "Kialonda Gaspar",
                    "Jamil Siebert",
                    "Antonino Gallo",
                    "Santiago Pierotti",
                    "Ivan Ilić",
                    "Youssef Maleh",
                    "Lassana Coulibaly",
                    "Nikola Štulić",
                    "Joël Monteiro"
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
              "teamId": 165,
              "team": "Borussia Dortmund",
              "rank": 1,
              "points": 12,
              "goalsDiff": 7,
              "form": "WWWW",
              "all": {
                "played": 4,
                "wins": 4,
                "draws": 0,
                "losses": 0,
                "goalsFor": 9,
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
                "played": 2,
                "wins": 2,
                "draws": 0,
                "losses": 0,
                "goalsFor": 4,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 157,
              "team": "Bayern München",
              "rank": 2,
              "points": 10,
              "goalsDiff": 12,
              "form": "WWDW",
              "all": {
                "played": 4,
                "wins": 3,
                "draws": 1,
                "losses": 0,
                "goalsFor": 14,
                "goalsAgainst": 2
              },
              "home": {
                "played": 2,
                "wins": 2,
                "draws": 0,
                "losses": 0,
                "goalsFor": 12,
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
              "teamId": 160,
              "team": "SC Freiburg",
              "rank": 3,
              "points": 10,
              "goalsDiff": 9,
              "form": "DWWW",
              "all": {
                "played": 4,
                "wins": 3,
                "draws": 1,
                "losses": 0,
                "goalsFor": 12,
                "goalsAgainst": 3
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
                "played": 2,
                "wins": 1,
                "draws": 1,
                "losses": 0,
                "goalsFor": 3,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 170,
              "team": "FC Augsburg",
              "rank": 4,
              "points": 7,
              "goalsDiff": 5,
              "form": "LDWW",
              "all": {
                "played": 4,
                "wins": 2,
                "draws": 1,
                "losses": 1,
                "goalsFor": 11,
                "goalsAgainst": 6
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
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 6,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 168,
              "team": "Bayer Leverkusen",
              "rank": 5,
              "points": 7,
              "goalsDiff": 5,
              "form": "WDWL",
              "all": {
                "played": 4,
                "wins": 2,
                "draws": 1,
                "losses": 1,
                "goalsFor": 10,
                "goalsAgainst": 5
              },
              "home": {
                "played": 2,
                "wins": 2,
                "draws": 0,
                "losses": 0,
                "goalsFor": 6,
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
              "rank": 6,
              "points": 7,
              "goalsDiff": 4,
              "form": "WLWD",
              "all": {
                "played": 4,
                "wins": 2,
                "draws": 1,
                "losses": 1,
                "goalsFor": 10,
                "goalsAgainst": 6
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
                "wins": 2,
                "draws": 0,
                "losses": 0,
                "goalsFor": 9,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 1660,
              "team": "SV Elversberg",
              "rank": 7,
              "points": 7,
              "goalsDiff": 1,
              "form": "DLWW",
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
                "goalsFor": 4,
                "goalsAgainst": 4
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
              "teamId": 162,
              "team": "Werder Bremen",
              "rank": 8,
              "points": 7,
              "goalsDiff": 0,
              "form": "WDWL",
              "all": {
                "played": 4,
                "wins": 2,
                "draws": 1,
                "losses": 1,
                "goalsFor": 8,
                "goalsAgainst": 8
              },
              "home": {
                "played": 2,
                "wins": 2,
                "draws": 0,
                "losses": 0,
                "goalsFor": 6,
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
              "teamId": 173,
              "team": "RB Leipzig",
              "rank": 9,
              "points": 6,
              "goalsDiff": 4,
              "form": "LWLW",
              "all": {
                "played": 4,
                "wins": 2,
                "draws": 0,
                "losses": 2,
                "goalsFor": 9,
                "goalsAgainst": 5
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
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 1,
                "goalsAgainst": 5
              }
            },
            {
              "teamId": 169,
              "team": "Eintracht Frankfurt",
              "rank": 10,
              "points": 5,
              "goalsDiff": -1,
              "form": "DWLD",
              "all": {
                "played": 4,
                "wins": 1,
                "draws": 2,
                "losses": 1,
                "goalsFor": 9,
                "goalsAgainst": 10
              },
              "home": {
                "played": 2,
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 6
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
              "teamId": 174,
              "team": "FC Schalke 04",
              "rank": 11,
              "points": 5,
              "goalsDiff": -1,
              "form": "DWDL",
              "all": {
                "played": 4,
                "wins": 1,
                "draws": 2,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 4
              },
              "home": {
                "played": 2,
                "wins": 0,
                "draws": 2,
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
              "teamId": 185,
              "team": "SC Paderborn 07",
              "rank": 12,
              "points": 4,
              "goalsDiff": -2,
              "form": "WLLD",
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
                "goalsFor": 3,
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
              "teamId": 192,
              "team": "1. FC Köln",
              "rank": 13,
              "points": 4,
              "goalsDiff": -3,
              "form": "LDLW",
              "all": {
                "played": 4,
                "wins": 1,
                "draws": 1,
                "losses": 2,
                "goalsFor": 6,
                "goalsAgainst": 9
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
                "goalsFor": 2,
                "goalsAgainst": 6
              }
            },
            {
              "teamId": 167,
              "team": "1899 Hoffenheim",
              "rank": 14,
              "points": 3,
              "goalsDiff": -3,
              "form": "LWLL",
              "all": {
                "played": 4,
                "wins": 1,
                "draws": 0,
                "losses": 3,
                "goalsFor": 7,
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
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 3,
                "goalsAgainst": 6
              }
            },
            {
              "teamId": 172,
              "team": "VfB Stuttgart",
              "rank": 15,
              "points": 3,
              "goalsDiff": -3,
              "form": "LLWL",
              "all": {
                "played": 4,
                "wins": 1,
                "draws": 0,
                "losses": 3,
                "goalsFor": 6,
                "goalsAgainst": 9
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
                "played": 2,
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 2,
                "goalsAgainst": 7
              }
            },
            {
              "teamId": 175,
              "team": "Hamburger SV",
              "rank": 16,
              "points": 3,
              "goalsDiff": -11,
              "form": "WLLL",
              "all": {
                "played": 4,
                "wins": 1,
                "draws": 0,
                "losses": 3,
                "goalsFor": 2,
                "goalsAgainst": 13
              },
              "home": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 2,
                "goalsAgainst": 6
              },
              "away": {
                "played": 2,
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 0,
                "goalsAgainst": 7
              }
            },
            {
              "teamId": 182,
              "team": "Union Berlin",
              "rank": 17,
              "points": 1,
              "goalsDiff": -13,
              "form": "LLLD",
              "all": {
                "played": 4,
                "wins": 0,
                "draws": 1,
                "losses": 3,
                "goalsFor": 4,
                "goalsAgainst": 17
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
                "played": 2,
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 0,
                "goalsAgainst": 11
              }
            },
            {
              "teamId": 163,
              "team": "Borussia Mönchengladbach",
              "rank": 18,
              "points": 0,
              "goalsDiff": -10,
              "form": "LLLL",
              "all": {
                "played": 4,
                "wins": 0,
                "draws": 0,
                "losses": 4,
                "goalsFor": 6,
                "goalsAgainst": 16
              },
              "home": {
                "played": 2,
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 6,
                "goalsAgainst": 8
              },
              "away": {
                "played": 2,
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 0,
                "goalsAgainst": 8
              }
            }
          ],
          "teams": [
            {
              "teamId": 174,
              "team": "FC Schalke 04",
              "form": "LDWD",
              "all": {
                "played": 4,
                "wins": 1,
                "draws": 2,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 4
              },
              "home": {
                "played": 2,
                "wins": 0,
                "draws": 2,
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
              "teamId": 1660,
              "team": "SV Elversberg",
              "form": "WWLD",
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
                "goalsFor": 4,
                "goalsAgainst": 4
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
              "teamId": 185,
              "team": "SC Paderborn 07",
              "form": "DLLW",
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
                "goalsFor": 3,
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
              "teamId": 167,
              "team": "1899 Hoffenheim",
              "form": "LLWL",
              "all": {
                "played": 4,
                "wins": 1,
                "draws": 0,
                "losses": 3,
                "goalsFor": 7,
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
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 3,
                "goalsAgainst": 6
              }
            }
          ],
          "fixtures": [
            {
              "fixtureId": 1575173,
              "kickoff": "2026-09-21T00:30:00+09:00",
              "status": "FT",
              "homeTeamId": 174,
              "homeTeam": "FC Schalke 04",
              "awayTeamId": 1660,
              "awayTeam": "SV Elversberg",
              "injuriesChecked": true,
              "injuries": [
                {
                  "fixtureId": 1575173,
                  "teamId": 174,
                  "playerId": 1725,
                  "player": "D. Ljubicic",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1575173,
                  "teamId": 1660,
                  "playerId": 583807,
                  "player": "L. Seifert",
                  "type": "Missing Fixture",
                  "reason": "Ankle Injury"
                },
                {
                  "fixtureId": 1575173,
                  "teamId": 1660,
                  "playerId": 392254,
                  "player": "F. Onyeka",
                  "type": "Questionable",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1575173,
                  "teamId": 1660,
                  "playerId": 26642,
                  "player": "L. Schnellbacher",
                  "type": "Questionable",
                  "reason": "Illness"
                },
                {
                  "fixtureId": 1575173,
                  "teamId": 1660,
                  "playerId": 177362,
                  "player": "T. Zimmerschied",
                  "type": "Questionable",
                  "reason": "Back Injury"
                }
              ],
              "lineupsChecked": true,
              "lineups": [
                {
                  "teamId": 174,
                  "team": "FC Schalke 04",
                  "formation": "3-4-2-1",
                  "coach": "M. Muslić",
                  "starters": [
                    "L. Karius",
                    "T. Becker",
                    "N. Katić",
                    "H. Kuruçay",
                    "J. Dina Ebimbe",
                    "S. El-Faouzi",
                    "S. Tanaka",
                    "R. Gosens",
                    "K. Karaman",
                    "A. Aouchiche",
                    "E. Džeko"
                  ]
                },
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
                    "Noah Darvich",
                    "William Cole Campbell",
                    "D. Mokwa"
                  ]
                }
              ]
            },
            {
              "fixtureId": 1575175,
              "kickoff": "2026-09-21T02:30:00+09:00",
              "status": "FT",
              "homeTeamId": 185,
              "homeTeam": "SC Paderborn 07",
              "awayTeamId": 167,
              "awayTeam": "1899 Hoffenheim",
              "injuriesChecked": true,
              "injuries": [
                {
                  "fixtureId": 1575175,
                  "teamId": 185,
                  "playerId": 373443,
                  "player": "N. Awortwie-Grant",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1575175,
                  "teamId": 185,
                  "playerId": 606733,
                  "player": "L. Eickel",
                  "type": "Missing Fixture",
                  "reason": "Back Injury"
                },
                {
                  "fixtureId": 1575175,
                  "teamId": 185,
                  "playerId": 108640,
                  "player": "T. Gayret",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1575175,
                  "teamId": 185,
                  "playerId": 24826,
                  "player": "S. Michel",
                  "type": "Missing Fixture",
                  "reason": "Muscle Injury"
                },
                {
                  "fixtureId": 1575175,
                  "teamId": 167,
                  "playerId": 18964,
                  "player": "Bernardo",
                  "type": "Missing Fixture",
                  "reason": "Achilles Tendon Injury"
                }
              ],
              "lineupsChecked": true,
              "lineups": [
                {
                  "teamId": 185,
                  "team": "SC Paderborn 07",
                  "formation": "3-5-2",
                  "coach": "R. Kettemann",
                  "starters": [
                    "N. Noll",
                    "J. ter Horst",
                    "T. Scheller",
                    "M. Hansen",
                    "L. Curda",
                    "L. Ulrich",
                    "S. Castañeda",
                    "G. Vidović",
                    "R. Obermair",
                    "M. Pieringer",
                    "S. Marino"
                  ]
                },
                {
                  "teamId": 167,
                  "team": "1899 Hoffenheim",
                  "formation": "4-4-2",
                  "coach": "C. Ilzer",
                  "starters": [
                    "O. Baumann",
                    "V. Coufal",
                    "O. Kabak",
                    "K. Machida",
                    "M. Rots",
                    "B. Conté",
                    "L. Avdullahu",
                    "W. Burger",
                    "A. Daghim",
                    "A. Hložek",
                    "Max Moerstedt"
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
              "points": 13,
              "goalsDiff": 5,
              "form": "WDWWW",
              "all": {
                "played": 5,
                "wins": 4,
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
              "teamId": 80,
              "team": "Lyon",
              "rank": 2,
              "points": 11,
              "goalsDiff": 8,
              "form": "WDWDW",
              "all": {
                "played": 5,
                "wins": 3,
                "draws": 2,
                "losses": 0,
                "goalsFor": 10,
                "goalsAgainst": 2
              },
              "home": {
                "played": 3,
                "wins": 2,
                "draws": 1,
                "losses": 0,
                "goalsFor": 8,
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
              "rank": 3,
              "points": 11,
              "goalsDiff": 5,
              "form": "WDWWD",
              "all": {
                "played": 5,
                "wins": 3,
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
                "goalsFor": 5,
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
              "teamId": 79,
              "team": "Lille",
              "rank": 4,
              "points": 10,
              "goalsDiff": 4,
              "form": "LWWDW",
              "all": {
                "played": 5,
                "wins": 3,
                "draws": 1,
                "losses": 1,
                "goalsFor": 8,
                "goalsAgainst": 4
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
                "goalsFor": 4,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 94,
              "team": "Rennes",
              "rank": 5,
              "points": 10,
              "goalsDiff": -1,
              "form": "LWWWD",
              "all": {
                "played": 5,
                "wins": 3,
                "draws": 1,
                "losses": 1,
                "goalsFor": 8,
                "goalsAgainst": 9
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
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 2,
                "goalsAgainst": 5
              }
            },
            {
              "teamId": 77,
              "team": "Angers",
              "rank": 6,
              "points": 7,
              "goalsDiff": 1,
              "form": "WDLWL",
              "all": {
                "played": 5,
                "wins": 2,
                "draws": 1,
                "losses": 2,
                "goalsFor": 6,
                "goalsAgainst": 5
              },
              "home": {
                "played": 3,
                "wins": 1,
                "draws": 0,
                "losses": 2,
                "goalsFor": 3,
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
              "teamId": 95,
              "team": "Strasbourg",
              "rank": 7,
              "points": 7,
              "goalsDiff": 0,
              "form": "LDWWL",
              "all": {
                "played": 5,
                "wins": 2,
                "draws": 1,
                "losses": 2,
                "goalsFor": 10,
                "goalsAgainst": 10
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
                "draws": 0,
                "losses": 2,
                "goalsFor": 7,
                "goalsAgainst": 8
              }
            },
            {
              "teamId": 1298,
              "team": "Le Mans",
              "rank": 8,
              "points": 6,
              "goalsDiff": 0,
              "form": "WDDLD",
              "all": {
                "played": 5,
                "wins": 1,
                "draws": 3,
                "losses": 1,
                "goalsFor": 9,
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
              "rank": 9,
              "points": 6,
              "goalsDiff": -5,
              "form": "WWLLL",
              "all": {
                "played": 5,
                "wins": 2,
                "draws": 0,
                "losses": 3,
                "goalsFor": 7,
                "goalsAgainst": 12
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
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 3,
                "goalsAgainst": 8
              }
            },
            {
              "teamId": 85,
              "team": "Paris Saint Germain",
              "rank": 10,
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
              "teamId": 106,
              "team": "Stade Brestois 29",
              "rank": 11,
              "points": 5,
              "goalsDiff": -1,
              "form": "LLWDD",
              "all": {
                "played": 5,
                "wins": 1,
                "draws": 2,
                "losses": 2,
                "goalsFor": 7,
                "goalsAgainst": 8
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
                "draws": 1,
                "losses": 1,
                "goalsFor": 5,
                "goalsAgainst": 5
              }
            },
            {
              "teamId": 97,
              "team": "Lorient",
              "rank": 12,
              "points": 5,
              "goalsDiff": -1,
              "form": "LDWLD",
              "all": {
                "played": 5,
                "wins": 1,
                "draws": 2,
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
                "goalsAgainst": 4
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
              "teamId": 96,
              "team": "Toulouse",
              "rank": 13,
              "points": 5,
              "goalsDiff": -2,
              "form": "WDLDL",
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
              "teamId": 84,
              "team": "Nice",
              "rank": 14,
              "points": 5,
              "goalsDiff": -3,
              "form": "WLDLD",
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
              "teamId": 116,
              "team": "Lens",
              "rank": 15,
              "points": 4,
              "goalsDiff": 0,
              "form": "LDLLW",
              "all": {
                "played": 5,
                "wins": 1,
                "draws": 1,
                "losses": 3,
                "goalsFor": 9,
                "goalsAgainst": 9
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
                "wins": 0,
                "draws": 1,
                "losses": 2,
                "goalsFor": 4,
                "goalsAgainst": 6
              }
            },
            {
              "teamId": 110,
              "team": "Estac Troyes",
              "rank": 16,
              "points": 4,
              "goalsDiff": -7,
              "form": "LLLWD",
              "all": {
                "played": 5,
                "wins": 1,
                "draws": 1,
                "losses": 3,
                "goalsFor": 4,
                "goalsAgainst": 11
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
                "goalsAgainst": 5
              }
            },
            {
              "teamId": 81,
              "team": "Marseille",
              "rank": 17,
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
              "teamId": 111,
              "team": "Le Havre",
              "rank": 18,
              "points": 2,
              "goalsDiff": -3,
              "form": "LDLDL",
              "all": {
                "played": 5,
                "wins": 0,
                "draws": 2,
                "losses": 3,
                "goalsFor": 4,
                "goalsAgainst": 7
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
              "teamId": 84,
              "team": "Nice",
              "form": "DLDLW",
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
              "teamId": 79,
              "team": "Lille",
              "form": "WDWWL",
              "all": {
                "played": 5,
                "wins": 3,
                "draws": 1,
                "losses": 1,
                "goalsFor": 8,
                "goalsAgainst": 4
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
                "goalsFor": 4,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 81,
              "team": "Marseille",
              "form": "WLLLL",
              "all": {
                "played": 5,
                "wins": 1,
                "draws": 0,
                "losses": 4,
                "goalsFor": 7,
                "goalsAgainst": 8
              },
              "home": {
                "played": 3,
                "wins": 1,
                "draws": 0,
                "losses": 2,
                "goalsFor": 7,
                "goalsAgainst": 5
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
              "teamId": 85,
              "team": "Paris Saint Germain",
              "form": "DDLWW",
              "all": {
                "played": 5,
                "wins": 2,
                "draws": 2,
                "losses": 1,
                "goalsFor": 8,
                "goalsAgainst": 7
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
                "played": 4,
                "wins": 2,
                "draws": 2,
                "losses": 0,
                "goalsFor": 7,
                "goalsAgainst": 5
              }
            }
          ],
          "fixtures": [
            {
              "fixtureId": 1552770,
              "kickoff": "2026-09-21T00:15:00+09:00",
              "status": "FT",
              "homeTeamId": 84,
              "homeTeam": "Nice",
              "awayTeamId": 79,
              "awayTeam": "Lille",
              "injuriesChecked": true,
              "injuries": [
                {
                  "fixtureId": 1552770,
                  "teamId": 84,
                  "playerId": 20917,
                  "player": "L. Abergel",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1552770,
                  "teamId": 84,
                  "playerId": 407017,
                  "player": "M. Bombito",
                  "type": "Missing Fixture",
                  "reason": "Leg Injury"
                },
                {
                  "fixtureId": 1552770,
                  "teamId": 84,
                  "playerId": 313937,
                  "player": "A. Mendy",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1552770,
                  "teamId": 84,
                  "playerId": 1914,
                  "player": "M. Sanson",
                  "type": "Missing Fixture",
                  "reason": "Surgery"
                },
                {
                  "fixtureId": 1552770,
                  "teamId": 79,
                  "playerId": 306979,
                  "player": "H. Igamane",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1552770,
                  "teamId": 79,
                  "playerId": 133110,
                  "player": "T. Nianzou",
                  "type": "Missing Fixture",
                  "reason": "Knock"
                }
              ],
              "lineupsChecked": true,
              "lineups": [
                {
                  "teamId": 84,
                  "team": "Nice",
                  "formation": "3-4-2-1",
                  "coach": "O. Pantaloni",
                  "starters": [
                    "Y. Diouf",
                    "Mohamed Abdelmonem",
                    "Y. Ndayishimiye",
                    "X. Mandza Tsiendi",
                    "J. Clauss",
                    "D. Coulibaly",
                    "A. Witsel",
                    "N. Nkounkou",
                    "G. Hein",
                    "M. Amoura",
                    "E. Wahi"
                  ]
                },
                {
                  "teamId": 79,
                  "team": "Lille",
                  "formation": "4-2-3-1",
                  "coach": "Davide Ancelotti",
                  "starters": [
                    "B. Özer",
                    "Tiago Santos",
                    "N. Ngoy",
                    "Alexsandro Ribeiro",
                    "R. Perraud",
                    "B. André",
                    "N. Bentaleb",
                    "E. Mbappé",
                    "H. Haraldsson",
                    "B. Önal",
                    "A. Ueda"
                  ]
                }
              ]
            },
            {
              "fixtureId": 1552773,
              "kickoff": "2026-09-21T03:45:00+09:00",
              "status": "FT",
              "homeTeamId": 81,
              "homeTeam": "Marseille",
              "awayTeamId": 85,
              "awayTeam": "Paris Saint Germain",
              "injuriesChecked": true,
              "injuries": [
                {
                  "fixtureId": 1552773,
                  "teamId": 81,
                  "playerId": 926,
                  "player": "G. Kondogbia",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1552773,
                  "teamId": 81,
                  "playerId": 354298,
                  "player": "T. Nnadi",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1552773,
                  "teamId": 85,
                  "playerId": 9,
                  "player": "A. Hakimi",
                  "type": "Missing Fixture",
                  "reason": "Thigh Injury"
                }
              ],
              "lineupsChecked": true,
              "lineups": [
                {
                  "teamId": 81,
                  "team": "Marseille",
                  "formation": "4-4-2",
                  "coach": "Bruno Genesio",
                  "starters": [
                    "J. de Lange",
                    "T. Weah",
                    "C. Egan-Riley",
                    "N. Aguerd",
                    "Emerson",
                    "A. Harit",
                    "P. Højbjerg",
                    "H. Abdelli",
                    "Igor Paixão",
                    "N. Maupay",
                    "A. Gouiri"
                  ]
                },
                {
                  "teamId": 85,
                  "team": "Paris Saint Germain",
                  "formation": "4-3-3",
                  "coach": "Luis Enrique",
                  "starters": [
                    "M. Safonov",
                    "W. Zaïre-Emery",
                    "Marquinhos",
                    "W. Pacho",
                    "Nuno Mendes",
                    "João Neves",
                    "Vitinha",
                    "Fabián Ruiz",
                    "D. Doué",
                    "O. Dembélé",
                    "K. Kvaratskhelia"
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
              "points": 15,
              "goalsDiff": 9,
              "form": "DDWWW",
              "all": {
                "played": 7,
                "wins": 4,
                "draws": 3,
                "losses": 0,
                "goalsFor": 17,
                "goalsAgainst": 8
              },
              "home": {
                "played": 4,
                "wins": 3,
                "draws": 1,
                "losses": 0,
                "goalsFor": 10,
                "goalsAgainst": 5
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
              "points": 15,
              "goalsDiff": 7,
              "form": "DWWDW",
              "all": {
                "played": 7,
                "wins": 4,
                "draws": 3,
                "losses": 0,
                "goalsFor": 11,
                "goalsAgainst": 4
              },
              "home": {
                "played": 4,
                "wins": 2,
                "draws": 2,
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
              "points": 11,
              "goalsDiff": 3,
              "form": "DLDWL",
              "all": {
                "played": 7,
                "wins": 3,
                "draws": 2,
                "losses": 2,
                "goalsFor": 10,
                "goalsAgainst": 7
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
                "played": 4,
                "wins": 1,
                "draws": 2,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 217,
              "team": "SC Braga",
              "rank": 6,
              "points": 11,
              "goalsDiff": 2,
              "form": "DWLWW",
              "all": {
                "played": 6,
                "wins": 3,
                "draws": 2,
                "losses": 1,
                "goalsFor": 7,
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
                "played": 4,
                "wins": 1,
                "draws": 2,
                "losses": 1,
                "goalsFor": 5,
                "goalsAgainst": 5
              }
            },
            {
              "teamId": 238,
              "team": "Academico Viseu",
              "rank": 7,
              "points": 11,
              "goalsDiff": 0,
              "form": "WWWLD",
              "all": {
                "played": 7,
                "wins": 3,
                "draws": 2,
                "losses": 2,
                "goalsFor": 9,
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
                "played": 4,
                "wins": 2,
                "draws": 2,
                "losses": 0,
                "goalsFor": 7,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 15130,
              "team": "Estrela",
              "rank": 8,
              "points": 10,
              "goalsDiff": 0,
              "form": "LDWDW",
              "all": {
                "played": 7,
                "wins": 2,
                "draws": 4,
                "losses": 1,
                "goalsFor": 14,
                "goalsAgainst": 14
              },
              "home": {
                "played": 4,
                "wins": 1,
                "draws": 2,
                "losses": 1,
                "goalsFor": 6,
                "goalsAgainst": 7
              },
              "away": {
                "played": 3,
                "wins": 1,
                "draws": 2,
                "losses": 0,
                "goalsFor": 8,
                "goalsAgainst": 7
              }
            },
            {
              "teamId": 762,
              "team": "GIL Vicente",
              "rank": 9,
              "points": 8,
              "goalsDiff": 0,
              "form": "DLLDW",
              "all": {
                "played": 6,
                "wins": 2,
                "draws": 2,
                "losses": 2,
                "goalsFor": 5,
                "goalsAgainst": 5
              },
              "home": {
                "played": 4,
                "wins": 2,
                "draws": 1,
                "losses": 1,
                "goalsFor": 4,
                "goalsAgainst": 2
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
              "teamId": 4724,
              "team": "Alverca",
              "rank": 10,
              "points": 8,
              "goalsDiff": -2,
              "form": "WWLDL",
              "all": {
                "played": 7,
                "wins": 2,
                "draws": 2,
                "losses": 3,
                "goalsFor": 9,
                "goalsAgainst": 11
              },
              "home": {
                "played": 4,
                "wins": 1,
                "draws": 2,
                "losses": 1,
                "goalsFor": 5,
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
              "teamId": 214,
              "team": "Maritimo",
              "rank": 11,
              "points": 8,
              "goalsDiff": -4,
              "form": "DLLLD",
              "all": {
                "played": 7,
                "wins": 2,
                "draws": 2,
                "losses": 3,
                "goalsFor": 8,
                "goalsAgainst": 12
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
                "played": 4,
                "wins": 1,
                "draws": 1,
                "losses": 2,
                "goalsFor": 5,
                "goalsAgainst": 7
              }
            },
            {
              "teamId": 215,
              "team": "Moreirense",
              "rank": 12,
              "points": 8,
              "goalsDiff": -6,
              "form": "DWLLW",
              "all": {
                "played": 7,
                "wins": 2,
                "draws": 2,
                "losses": 3,
                "goalsFor": 8,
                "goalsAgainst": 14
              },
              "home": {
                "played": 3,
                "wins": 1,
                "draws": 1,
                "losses": 1,
                "goalsFor": 5,
                "goalsAgainst": 7
              },
              "away": {
                "played": 4,
                "wins": 1,
                "draws": 1,
                "losses": 2,
                "goalsFor": 3,
                "goalsAgainst": 7
              }
            },
            {
              "teamId": 242,
              "team": "Famalicao",
              "rank": 13,
              "points": 7,
              "goalsDiff": 2,
              "form": "WDDDL",
              "all": {
                "played": 7,
                "wins": 1,
                "draws": 4,
                "losses": 2,
                "goalsFor": 9,
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
                "played": 4,
                "wins": 1,
                "draws": 2,
                "losses": 1,
                "goalsFor": 7,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 224,
              "team": "Vitória SC",
              "rank": 14,
              "points": 5,
              "goalsDiff": -3,
              "form": "DLDLW",
              "all": {
                "played": 7,
                "wins": 1,
                "draws": 2,
                "losses": 4,
                "goalsFor": 5,
                "goalsAgainst": 8
              },
              "home": {
                "played": 4,
                "wins": 1,
                "draws": 2,
                "losses": 1,
                "goalsFor": 2,
                "goalsAgainst": 2
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
              "rank": 15,
              "points": 4,
              "goalsDiff": -8,
              "form": "LLLLL",
              "all": {
                "played": 7,
                "wins": 1,
                "draws": 1,
                "losses": 5,
                "goalsFor": 7,
                "goalsAgainst": 15
              },
              "home": {
                "played": 4,
                "wins": 1,
                "draws": 0,
                "losses": 3,
                "goalsFor": 5,
                "goalsAgainst": 10
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
              "teamId": 226,
              "team": "Rio Ave",
              "rank": 16,
              "points": 4,
              "goalsDiff": -10,
              "form": "LDLLW",
              "all": {
                "played": 7,
                "wins": 1,
                "draws": 1,
                "losses": 5,
                "goalsFor": 5,
                "goalsAgainst": 15
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
                "played": 4,
                "wins": 1,
                "draws": 0,
                "losses": 3,
                "goalsFor": 2,
                "goalsAgainst": 6
              }
            },
            {
              "teamId": 4716,
              "team": "Casa Pia",
              "rank": 17,
              "points": 4,
              "goalsDiff": -13,
              "form": "WLDLL",
              "all": {
                "played": 7,
                "wins": 1,
                "draws": 1,
                "losses": 5,
                "goalsFor": 3,
                "goalsAgainst": 16
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
                "played": 4,
                "wins": 1,
                "draws": 1,
                "losses": 2,
                "goalsFor": 2,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 230,
              "team": "Estoril",
              "rank": 18,
              "points": 2,
              "goalsDiff": -7,
              "form": "LLDLL",
              "all": {
                "played": 7,
                "wins": 0,
                "draws": 2,
                "losses": 5,
                "goalsFor": 3,
                "goalsAgainst": 10
              },
              "home": {
                "played": 4,
                "wins": 0,
                "draws": 2,
                "losses": 2,
                "goalsFor": 2,
                "goalsAgainst": 5
              },
              "away": {
                "played": 3,
                "wins": 0,
                "draws": 0,
                "losses": 3,
                "goalsFor": 1,
                "goalsAgainst": 5
              }
            }
          ],
          "teams": [
            {
              "teamId": 227,
              "team": "Santa Clara",
              "form": "DWWDWWD",
              "all": {
                "played": 7,
                "wins": 4,
                "draws": 3,
                "losses": 0,
                "goalsFor": 11,
                "goalsAgainst": 4
              },
              "home": {
                "played": 4,
                "wins": 2,
                "draws": 2,
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
              "teamId": 217,
              "team": "SC Braga",
              "form": "DWWLWD",
              "all": {
                "played": 6,
                "wins": 3,
                "draws": 2,
                "losses": 1,
                "goalsFor": 7,
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
                "played": 4,
                "wins": 1,
                "draws": 2,
                "losses": 1,
                "goalsFor": 5,
                "goalsAgainst": 5
              }
            },
            {
              "teamId": 230,
              "team": "Estoril",
              "form": "DLLLDLL",
              "all": {
                "played": 7,
                "wins": 0,
                "draws": 2,
                "losses": 5,
                "goalsFor": 3,
                "goalsAgainst": 10
              },
              "home": {
                "played": 4,
                "wins": 0,
                "draws": 2,
                "losses": 2,
                "goalsFor": 2,
                "goalsAgainst": 5
              },
              "away": {
                "played": 3,
                "wins": 0,
                "draws": 0,
                "losses": 3,
                "goalsFor": 1,
                "goalsAgainst": 5
              }
            },
            {
              "teamId": 4716,
              "team": "Casa Pia",
              "form": "LLLLDLW",
              "all": {
                "played": 7,
                "wins": 1,
                "draws": 1,
                "losses": 5,
                "goalsFor": 3,
                "goalsAgainst": 16
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
                "played": 4,
                "wins": 1,
                "draws": 1,
                "losses": 2,
                "goalsFor": 2,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 212,
              "team": "FC Porto",
              "form": "WWWWWW",
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
            }
          ],
          "fixtures": [
            {
              "fixtureId": 1575506,
              "kickoff": "2026-09-21T02:00:00+09:00",
              "status": "FT",
              "homeTeamId": 227,
              "homeTeam": "Santa Clara",
              "awayTeamId": 217,
              "awayTeam": "SC Braga",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": true,
              "lineups": [
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
                },
                {
                  "teamId": 217,
                  "team": "SC Braga",
                  "formation": "3-4-3",
                  "coach": "Carlos Vicens",
                  "starters": [
                    "Bernardo Fontes",
                    "A. Barišić",
                    "Vitor Carvalho",
                    "A. Bajrami",
                    "Víctor Gómez",
                    "João Moutinho",
                    "J. Gorby",
                    "Gabri Martínez",
                    "Pau Victor",
                    "J. Milošević",
                    "Ricardo Horta"
                  ]
                }
              ]
            },
            {
              "fixtureId": 1575501,
              "kickoff": "2026-09-21T02:00:00+09:00",
              "status": "FT",
              "homeTeamId": 230,
              "homeTeam": "Estoril",
              "awayTeamId": 4716,
              "awayTeam": "Casa Pia",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": true,
              "lineups": [
                {
                  "teamId": 230,
                  "team": "Estoril",
                  "formation": "4-2-3-1",
                  "coach": "Vasco Matos",
                  "starters": [
                    "Joel Robles",
                    "Ricard Sánchez",
                    "Xavi Sintes",
                    "Isma Sierra",
                    "R. Jurišić",
                    "J. Holsgrove",
                    "M. Robin",
                    "N. Omerović",
                    "João Carvalho",
                    "A. Camblan",
                    "Y. Begraoui"
                  ]
                },
                {
                  "teamId": 4716,
                  "team": "Casa Pia",
                  "formation": "4-2-3-1",
                  "coach": "Filipe Coelho",
                  "starters": [
                    "Ivan Mandić",
                    "Geraldes",
                    "Kaly",
                    "David Sousa",
                    "Pedro Rosas",
                    "Silvi",
                    "L. Ofori",
                    "M. El Boukammiri",
                    "João Pedro Seno Luís Rêgo",
                    "JP",
                    "Henrique Araújo"
                  ]
                }
              ]
            },
            {
              "fixtureId": 1575503,
              "kickoff": "2026-09-21T04:30:00+09:00",
              "status": "2H",
              "homeTeamId": 212,
              "homeTeam": "FC Porto",
              "awayTeamId": 211,
              "awayTeam": "Benfica",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": true,
              "lineups": [
                {
                  "teamId": 212,
                  "team": "FC Porto",
                  "formation": "4-3-3",
                  "coach": "F. Farioli",
                  "starters": [
                    "Diogo Costa",
                    "Alberto Baio",
                    "J. Bednarek",
                    "J. Kiwior",
                    "Martim Fernandes",
                    "Victor Mow Froholdt",
                    "P. Rosario",
                    "Gabri Veiga",
                    "William",
                    "André Silva",
                    "Pepê Aquino"
                  ]
                },
                {
                  "teamId": 211,
                  "team": "Benfica",
                  "formation": "4-2-3-1",
                  "coach": "Marco Silva",
                  "starters": [
                    "Samuel Soares",
                    "A. Bah",
                    "Tomás Araújo",
                    "C. Lenglet",
                    "S. Dahl",
                    "F. Aursnes",
                    "João Palhinha",
                    "Rafa",
                    "H. Sudakov",
                    "G. Prestianni",
                    "V. Pavlidis"
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
              "teamId": 1393,
              "team": "Union St. Gilloise",
              "rank": 1,
              "points": 19,
              "goalsDiff": 18,
              "form": "WWWWW",
              "all": {
                "played": 7,
                "wins": 6,
                "draws": 1,
                "losses": 0,
                "goalsFor": 21,
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
                "played": 4,
                "wins": 4,
                "draws": 0,
                "losses": 0,
                "goalsFor": 13,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 631,
              "team": "Gent",
              "rank": 2,
              "points": 19,
              "goalsDiff": 9,
              "form": "WDWWW",
              "all": {
                "played": 7,
                "wins": 6,
                "draws": 1,
                "losses": 0,
                "goalsFor": 13,
                "goalsAgainst": 4
              },
              "home": {
                "played": 4,
                "wins": 4,
                "draws": 0,
                "losses": 0,
                "goalsFor": 7,
                "goalsAgainst": 2
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
              "points": 18,
              "goalsDiff": 12,
              "form": "WWWLW",
              "all": {
                "played": 7,
                "wins": 6,
                "draws": 0,
                "losses": 1,
                "goalsFor": 15,
                "goalsAgainst": 3
              },
              "home": {
                "played": 4,
                "wins": 4,
                "draws": 0,
                "losses": 0,
                "goalsFor": 10,
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
              "points": 18,
              "goalsDiff": 8,
              "form": "WWLWW",
              "all": {
                "played": 7,
                "wins": 6,
                "draws": 0,
                "losses": 1,
                "goalsFor": 15,
                "goalsAgainst": 7
              },
              "home": {
                "played": 4,
                "wins": 3,
                "draws": 0,
                "losses": 1,
                "goalsFor": 10,
                "goalsAgainst": 6
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
              "teamId": 554,
              "team": "Anderlecht",
              "rank": 5,
              "points": 13,
              "goalsDiff": 2,
              "form": "WWDWL",
              "all": {
                "played": 7,
                "wins": 4,
                "draws": 1,
                "losses": 2,
                "goalsFor": 7,
                "goalsAgainst": 5
              },
              "home": {
                "played": 4,
                "wins": 3,
                "draws": 1,
                "losses": 0,
                "goalsFor": 6,
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
              "teamId": 600,
              "team": "Zulte Waregem",
              "rank": 6,
              "points": 11,
              "goalsDiff": 3,
              "form": "LLWDW",
              "all": {
                "played": 7,
                "wins": 3,
                "draws": 2,
                "losses": 2,
                "goalsFor": 10,
                "goalsAgainst": 7
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
                "draws": 2,
                "losses": 1,
                "goalsFor": 4,
                "goalsAgainst": 5
              }
            },
            {
              "teamId": 733,
              "team": "Standard Liege",
              "rank": 7,
              "points": 11,
              "goalsDiff": 1,
              "form": "LLWWW",
              "all": {
                "played": 7,
                "wins": 3,
                "draws": 2,
                "losses": 2,
                "goalsFor": 13,
                "goalsAgainst": 12
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
                "played": 4,
                "wins": 1,
                "draws": 1,
                "losses": 2,
                "goalsFor": 8,
                "goalsAgainst": 10
              }
            },
            {
              "teamId": 261,
              "team": "KVC Westerlo",
              "rank": 8,
              "points": 10,
              "goalsDiff": -1,
              "form": "WWWDL",
              "all": {
                "played": 7,
                "wins": 3,
                "draws": 1,
                "losses": 3,
                "goalsFor": 15,
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
                "played": 4,
                "wins": 2,
                "draws": 0,
                "losses": 2,
                "goalsFor": 8,
                "goalsAgainst": 7
              }
            },
            {
              "teamId": 738,
              "team": "SK Beveren",
              "rank": 9,
              "points": 9,
              "goalsDiff": -4,
              "form": "LWWLL",
              "all": {
                "played": 7,
                "wins": 3,
                "draws": 0,
                "losses": 4,
                "goalsFor": 7,
                "goalsAgainst": 11
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
                "played": 4,
                "wins": 0,
                "draws": 0,
                "losses": 4,
                "goalsFor": 1,
                "goalsAgainst": 11
              }
            },
            {
              "teamId": 742,
              "team": "Genk",
              "rank": 10,
              "points": 9,
              "goalsDiff": 1,
              "form": "LDDWD",
              "all": {
                "played": 7,
                "wins": 2,
                "draws": 3,
                "losses": 2,
                "goalsFor": 13,
                "goalsAgainst": 12
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
                "played": 4,
                "wins": 0,
                "draws": 2,
                "losses": 2,
                "goalsFor": 5,
                "goalsAgainst": 9
              }
            },
            {
              "teamId": 735,
              "team": "St. Truiden",
              "rank": 11,
              "points": 8,
              "goalsDiff": 0,
              "form": "LLWLW",
              "all": {
                "played": 7,
                "wins": 2,
                "draws": 2,
                "losses": 3,
                "goalsFor": 12,
                "goalsAgainst": 12
              },
              "home": {
                "played": 4,
                "wins": 1,
                "draws": 1,
                "losses": 2,
                "goalsFor": 5,
                "goalsAgainst": 6
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
              "teamId": 259,
              "team": "Lommel United",
              "rank": 12,
              "points": 8,
              "goalsDiff": -2,
              "form": "DLLWW",
              "all": {
                "played": 7,
                "wins": 2,
                "draws": 2,
                "losses": 3,
                "goalsFor": 6,
                "goalsAgainst": 8
              },
              "home": {
                "played": 4,
                "wins": 1,
                "draws": 1,
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
              "teamId": 740,
              "team": "Antwerp",
              "rank": 13,
              "points": 7,
              "goalsDiff": -4,
              "form": "LLLLD",
              "all": {
                "played": 7,
                "wins": 2,
                "draws": 1,
                "losses": 4,
                "goalsFor": 11,
                "goalsAgainst": 15
              },
              "home": {
                "played": 4,
                "wins": 1,
                "draws": 1,
                "losses": 2,
                "goalsFor": 7,
                "goalsAgainst": 11
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
              "teamId": 5902,
              "team": "RAAL La Louvière",
              "rank": 14,
              "points": 4,
              "goalsDiff": -7,
              "form": "LWLDL",
              "all": {
                "played": 7,
                "wins": 1,
                "draws": 1,
                "losses": 5,
                "goalsFor": 7,
                "goalsAgainst": 14
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
                "played": 4,
                "wins": 0,
                "draws": 0,
                "losses": 4,
                "goalsFor": 1,
                "goalsAgainst": 10
              }
            },
            {
              "teamId": 260,
              "team": "OH Leuven",
              "rank": 15,
              "points": 4,
              "goalsDiff": -8,
              "form": "WDLLL",
              "all": {
                "played": 7,
                "wins": 1,
                "draws": 1,
                "losses": 5,
                "goalsFor": 5,
                "goalsAgainst": 13
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
              "rank": 16,
              "points": 3,
              "goalsDiff": -13,
              "form": "WLLLL",
              "all": {
                "played": 7,
                "wins": 1,
                "draws": 0,
                "losses": 6,
                "goalsFor": 2,
                "goalsAgainst": 15
              },
              "home": {
                "played": 4,
                "wins": 1,
                "draws": 0,
                "losses": 3,
                "goalsFor": 2,
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
            },
            {
              "teamId": 741,
              "team": "Cercle Brugge",
              "rank": 17,
              "points": 3,
              "goalsDiff": -6,
              "form": "LDLLL",
              "all": {
                "played": 7,
                "wins": 0,
                "draws": 3,
                "losses": 4,
                "goalsFor": 8,
                "goalsAgainst": 14
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
                "played": 4,
                "wins": 0,
                "draws": 2,
                "losses": 2,
                "goalsFor": 5,
                "goalsAgainst": 7
              }
            },
            {
              "teamId": 266,
              "team": "KV Mechelen",
              "rank": 18,
              "points": 3,
              "goalsDiff": -9,
              "form": "DLLDL",
              "all": {
                "played": 7,
                "wins": 0,
                "draws": 3,
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
                "played": 4,
                "wins": 0,
                "draws": 2,
                "losses": 2,
                "goalsFor": 2,
                "goalsAgainst": 6
              }
            }
          ],
          "teams": [
            {
              "teamId": 569,
              "team": "Club Brugge KV",
              "form": "WWWLWWW",
              "all": {
                "played": 7,
                "wins": 6,
                "draws": 0,
                "losses": 1,
                "goalsFor": 15,
                "goalsAgainst": 3
              },
              "home": {
                "played": 4,
                "wins": 4,
                "draws": 0,
                "losses": 0,
                "goalsFor": 10,
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
              "teamId": 742,
              "team": "Genk",
              "form": "LWDWDDL",
              "all": {
                "played": 7,
                "wins": 2,
                "draws": 3,
                "losses": 2,
                "goalsFor": 13,
                "goalsAgainst": 12
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
                "played": 4,
                "wins": 0,
                "draws": 2,
                "losses": 2,
                "goalsFor": 5,
                "goalsAgainst": 9
              }
            },
            {
              "teamId": 734,
              "team": "Kortrijk",
              "form": "LLLLLLW",
              "all": {
                "played": 7,
                "wins": 1,
                "draws": 0,
                "losses": 6,
                "goalsFor": 2,
                "goalsAgainst": 15
              },
              "home": {
                "played": 4,
                "wins": 1,
                "draws": 0,
                "losses": 3,
                "goalsFor": 2,
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
            },
            {
              "teamId": 738,
              "team": "SK Beveren",
              "form": "LWLLWWL",
              "all": {
                "played": 7,
                "wins": 3,
                "draws": 0,
                "losses": 4,
                "goalsFor": 7,
                "goalsAgainst": 11
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
                "played": 4,
                "wins": 0,
                "draws": 0,
                "losses": 4,
                "goalsFor": 1,
                "goalsAgainst": 11
              }
            }
          ],
          "fixtures": [
            {
              "fixtureId": 1558642,
              "kickoff": "2026-09-21T01:30:00+09:00",
              "status": "FT",
              "homeTeamId": 569,
              "homeTeam": "Club Brugge KV",
              "awayTeamId": 742,
              "awayTeam": "Genk",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": true,
              "lineups": [
                {
                  "teamId": 569,
                  "team": "Club Brugge KV",
                  "formation": "4-2-3-1",
                  "coach": "I. Leko",
                  "starters": [
                    "Y. Sommer",
                    "K. Sabbe",
                    "Lee Han-Beom",
                    "B. Mechele",
                    "J. Seys",
                    "F. Potts",
                    "H. Vanaken",
                    "Carlos Forbs",
                    "H. Vetlesen",
                    "Jan Virgili",
                    "N. Tresoldi"
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
                    "B. Tahirović",
                    "B. Heynen",
                    "J. Ito",
                    "J. Erenbjerg",
                    "Noah Adedeji-Sternberg",
                    "R. Durosinmi"
                  ]
                }
              ]
            },
            {
              "fixtureId": 1558643,
              "kickoff": "2026-09-21T02:15:00+09:00",
              "status": "FT",
              "homeTeamId": 734,
              "homeTeam": "Kortrijk",
              "awayTeamId": 738,
              "awayTeam": "SK Beveren",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": true,
              "lineups": [
                {
                  "teamId": 734,
                  "team": "Kortrijk",
                  "formation": "4-4-2",
                  "coach": "Christophe Lepoint",
                  "starters": [
                    "M. Ilić",
                    "N. Mehssatou",
                    "Harrison Murray-Campbell",
                    "A. Drouhin",
                    "J. Ndjeungoue",
                    "S. Campbell",
                    "B. Dejaegere",
                    "J. Roche",
                    "J. Van Landschoot",
                    "N. Ogbuehi",
                    "T. Ambrose"
                  ]
                },
                {
                  "teamId": 738,
                  "team": "SK Beveren",
                  "formation": "4-2-3-1",
                  "coach": "T. Bakens",
                  "starters": [
                    "J. Schenk",
                    "L. Jans",
                    "S. Keller",
                    "B. Godeau",
                    "C. Janssens",
                    "S. Dewaele",
                    "C. Conde",
                    "C. Lokesa",
                    "C. Brüls",
                    "J. Margaritha",
                    "M. Kaboré"
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
              "teamId": 3579,
              "team": "Amed",
              "rank": 1,
              "points": 13,
              "goalsDiff": 8,
              "form": "WWDWL",
              "all": {
                "played": 6,
                "wins": 4,
                "draws": 1,
                "losses": 1,
                "goalsFor": 15,
                "goalsAgainst": 7
              },
              "home": {
                "played": 4,
                "wins": 4,
                "draws": 0,
                "losses": 0,
                "goalsFor": 13,
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
              "teamId": 645,
              "team": "Galatasaray",
              "rank": 2,
              "points": 13,
              "goalsDiff": 3,
              "form": "LWWWW",
              "all": {
                "played": 6,
                "wins": 4,
                "draws": 1,
                "losses": 1,
                "goalsFor": 13,
                "goalsAgainst": 10
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
                "played": 3,
                "wins": 2,
                "draws": 0,
                "losses": 1,
                "goalsFor": 7,
                "goalsAgainst": 6
              }
            },
            {
              "teamId": 549,
              "team": "Beşiktaş",
              "rank": 3,
              "points": 12,
              "goalsDiff": 7,
              "form": "LWWWL",
              "all": {
                "played": 6,
                "wins": 4,
                "draws": 0,
                "losses": 2,
                "goalsFor": 14,
                "goalsAgainst": 7
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
                "played": 3,
                "wins": 1,
                "draws": 0,
                "losses": 2,
                "goalsFor": 4,
                "goalsAgainst": 5
              }
            },
            {
              "teamId": 7411,
              "team": "Kocaelispor",
              "rank": 4,
              "points": 12,
              "goalsDiff": 3,
              "form": "WLWWW",
              "all": {
                "played": 6,
                "wins": 4,
                "draws": 0,
                "losses": 2,
                "goalsFor": 7,
                "goalsAgainst": 4
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
              "rank": 5,
              "points": 11,
              "goalsDiff": 2,
              "form": "WDWLW",
              "all": {
                "played": 6,
                "wins": 3,
                "draws": 2,
                "losses": 1,
                "goalsFor": 8,
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
                "played": 4,
                "wins": 2,
                "draws": 1,
                "losses": 1,
                "goalsFor": 5,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 611,
              "team": "Fenerbahçe",
              "rank": 6,
              "points": 10,
              "goalsDiff": 10,
              "form": "WDLWW",
              "all": {
                "played": 6,
                "wins": 3,
                "draws": 1,
                "losses": 2,
                "goalsFor": 16,
                "goalsAgainst": 6
              },
              "home": {
                "played": 3,
                "wins": 2,
                "draws": 0,
                "losses": 1,
                "goalsFor": 13,
                "goalsAgainst": 4
              },
              "away": {
                "played": 3,
                "wins": 1,
                "draws": 1,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 998,
              "team": "Trabzonspor",
              "rank": 7,
              "points": 10,
              "goalsDiff": 8,
              "form": "WLWLW",
              "all": {
                "played": 6,
                "wins": 3,
                "draws": 1,
                "losses": 2,
                "goalsFor": 13,
                "goalsAgainst": 5
              },
              "home": {
                "played": 3,
                "wins": 3,
                "draws": 0,
                "losses": 0,
                "goalsFor": 11,
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
              "teamId": 1004,
              "team": "Kasımpaşa",
              "rank": 8,
              "points": 10,
              "goalsDiff": 2,
              "form": "DWDDW",
              "all": {
                "played": 6,
                "wins": 2,
                "draws": 4,
                "losses": 0,
                "goalsFor": 7,
                "goalsAgainst": 5
              },
              "home": {
                "played": 3,
                "wins": 0,
                "draws": 3,
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
              "rank": 9,
              "points": 10,
              "goalsDiff": 1,
              "form": "DWLWL",
              "all": {
                "played": 6,
                "wins": 3,
                "draws": 1,
                "losses": 2,
                "goalsFor": 7,
                "goalsAgainst": 6
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
                "played": 4,
                "wins": 3,
                "draws": 1,
                "losses": 0,
                "goalsFor": 7,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 3573,
              "team": "Gaziantep FK",
              "rank": 10,
              "points": 8,
              "goalsDiff": 0,
              "form": "LDWLW",
              "all": {
                "played": 6,
                "wins": 2,
                "draws": 2,
                "losses": 2,
                "goalsFor": 7,
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
                "wins": 2,
                "draws": 0,
                "losses": 1,
                "goalsFor": 5,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 6343,
              "team": "Çorum FK",
              "rank": 11,
              "points": 7,
              "goalsDiff": 1,
              "form": "LWWLL",
              "all": {
                "played": 6,
                "wins": 2,
                "draws": 1,
                "losses": 3,
                "goalsFor": 13,
                "goalsAgainst": 12
              },
              "home": {
                "played": 3,
                "wins": 1,
                "draws": 0,
                "losses": 2,
                "goalsFor": 4,
                "goalsAgainst": 3
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
              "teamId": 564,
              "team": "Başakşehir",
              "rank": 12,
              "points": 7,
              "goalsDiff": -1,
              "form": "WLLDL",
              "all": {
                "played": 6,
                "wins": 2,
                "draws": 1,
                "losses": 3,
                "goalsFor": 10,
                "goalsAgainst": 11
              },
              "home": {
                "played": 4,
                "wins": 2,
                "draws": 1,
                "losses": 1,
                "goalsFor": 9,
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
              "teamId": 997,
              "team": "Gençlerbirliği S.K.",
              "rank": 13,
              "points": 7,
              "goalsDiff": -8,
              "form": "LLLDW",
              "all": {
                "played": 6,
                "wins": 2,
                "draws": 1,
                "losses": 3,
                "goalsFor": 5,
                "goalsAgainst": 13
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
                "played": 3,
                "wins": 1,
                "draws": 0,
                "losses": 2,
                "goalsFor": 1,
                "goalsAgainst": 9
              }
            },
            {
              "teamId": 1009,
              "team": "Erzurumspor FK",
              "rank": 14,
              "points": 7,
              "goalsDiff": -8,
              "form": "WLWDL",
              "all": {
                "played": 6,
                "wins": 2,
                "draws": 1,
                "losses": 3,
                "goalsFor": 3,
                "goalsAgainst": 11
              },
              "home": {
                "played": 3,
                "wins": 2,
                "draws": 0,
                "losses": 1,
                "goalsFor": 2,
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
              "rank": 15,
              "points": 4,
              "goalsDiff": -4,
              "form": "DWLLL",
              "all": {
                "played": 6,
                "wins": 1,
                "draws": 1,
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
                "played": 3,
                "wins": 0,
                "draws": 1,
                "losses": 2,
                "goalsFor": 2,
                "goalsAgainst": 5
              }
            },
            {
              "teamId": 3603,
              "team": "Samsunspor",
              "rank": 16,
              "points": 4,
              "goalsDiff": -6,
              "form": "LLLLW",
              "all": {
                "played": 6,
                "wins": 1,
                "draws": 1,
                "losses": 4,
                "goalsFor": 6,
                "goalsAgainst": 12
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
                "played": 3,
                "wins": 1,
                "draws": 0,
                "losses": 2,
                "goalsFor": 2,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 994,
              "team": "Göztepe",
              "rank": 17,
              "points": 3,
              "goalsDiff": -4,
              "form": "DDLLL",
              "all": {
                "played": 6,
                "wins": 0,
                "draws": 3,
                "losses": 3,
                "goalsFor": 11,
                "goalsAgainst": 15
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
                "wins": 0,
                "draws": 2,
                "losses": 1,
                "goalsFor": 7,
                "goalsAgainst": 8
              }
            },
            {
              "teamId": 3588,
              "team": "Eyüpspor",
              "rank": 18,
              "points": 3,
              "goalsDiff": -14,
              "form": "LLLWL",
              "all": {
                "played": 6,
                "wins": 1,
                "draws": 0,
                "losses": 5,
                "goalsFor": 2,
                "goalsAgainst": 16
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
                "played": 3,
                "wins": 0,
                "draws": 0,
                "losses": 3,
                "goalsFor": 0,
                "goalsAgainst": 12
              }
            }
          ],
          "teams": [
            {
              "teamId": 994,
              "team": "Göztepe",
              "form": "DLLLDD",
              "all": {
                "played": 6,
                "wins": 0,
                "draws": 3,
                "losses": 3,
                "goalsFor": 11,
                "goalsAgainst": 15
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
                "wins": 0,
                "draws": 2,
                "losses": 1,
                "goalsFor": 7,
                "goalsAgainst": 8
              }
            },
            {
              "teamId": 1007,
              "team": "Rizespor",
              "form": "WLWLWD",
              "all": {
                "played": 6,
                "wins": 3,
                "draws": 1,
                "losses": 2,
                "goalsFor": 7,
                "goalsAgainst": 6
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
                "played": 4,
                "wins": 3,
                "draws": 1,
                "losses": 0,
                "goalsFor": 7,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 3579,
              "team": "Amed",
              "form": "WLWDWW",
              "all": {
                "played": 6,
                "wins": 4,
                "draws": 1,
                "losses": 1,
                "goalsFor": 15,
                "goalsAgainst": 7
              },
              "home": {
                "played": 4,
                "wins": 4,
                "draws": 0,
                "losses": 0,
                "goalsFor": 13,
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
              "teamId": 549,
              "team": "Beşiktaş",
              "form": "WLWWWL",
              "all": {
                "played": 6,
                "wins": 4,
                "draws": 0,
                "losses": 2,
                "goalsFor": 14,
                "goalsAgainst": 7
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
                "played": 3,
                "wins": 1,
                "draws": 0,
                "losses": 2,
                "goalsFor": 4,
                "goalsAgainst": 5
              }
            }
          ],
          "fixtures": [
            {
              "fixtureId": 1584417,
              "kickoff": "2026-09-21T02:00:00+09:00",
              "status": "FT",
              "homeTeamId": 994,
              "homeTeam": "Göztepe",
              "awayTeamId": 1007,
              "awayTeam": "Rizespor",
              "injuriesChecked": true,
              "injuries": [
                {
                  "fixtureId": 1584417,
                  "teamId": 994,
                  "playerId": 159466,
                  "player": "Allan Godoi",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1584417,
                  "teamId": 994,
                  "playerId": 62378,
                  "player": "F. Bayir",
                  "type": "Missing Fixture",
                  "reason": "Inactive"
                },
                {
                  "fixtureId": 1584417,
                  "teamId": 994,
                  "playerId": 143705,
                  "player": "G. Bayrakdar",
                  "type": "Missing Fixture",
                  "reason": "Inactive"
                },
                {
                  "fixtureId": 1584417,
                  "teamId": 994,
                  "playerId": 24665,
                  "player": "L. Gugeshashvili",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1584417,
                  "teamId": 994,
                  "playerId": 432841,
                  "player": "I. Sabra",
                  "type": "Missing Fixture",
                  "reason": "Ankle Injury"
                },
                {
                  "fixtureId": 1584417,
                  "teamId": 994,
                  "playerId": 48091,
                  "player": "N. Sonko Sundberg",
                  "type": "Missing Fixture",
                  "reason": "Inactive"
                },
                {
                  "fixtureId": 1584417,
                  "teamId": 994,
                  "playerId": 303493,
                  "player": "N. Miroshi",
                  "type": "Questionable",
                  "reason": "Inactive"
                },
                {
                  "fixtureId": 1584417,
                  "teamId": 1007,
                  "playerId": 73509,
                  "player": "K. Alikulov",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1584417,
                  "teamId": 1007,
                  "playerId": 43056,
                  "player": "V. Mihaila",
                  "type": "Missing Fixture",
                  "reason": "Red Card"
                }
              ],
              "lineupsChecked": true,
              "lineups": [
                {
                  "teamId": 994,
                  "team": "Göztepe",
                  "formation": "3-4-1-2",
                  "coach": "Stanimir Stoilov",
                  "starters": [
                    "Arda Özçimen",
                    "Taha Altıkardeş",
                    "Ege Yildirim",
                    "Malcom Bokele",
                    "Arda Kurtulan",
                    "Alex Matos",
                    "Rhaldney",
                    "Richard Akonnor",
                    "André Henrique",
                    "Janderson",
                    "Juan Santos da Silva"
                  ]
                },
                {
                  "teamId": 1007,
                  "team": "Rizespor",
                  "formation": "5-3-2",
                  "coach": "Recep Ucar",
                  "starters": [
                    "Yahia Fofana",
                    "Taha Şahin",
                    "Tayyip Talha Sanuç",
                    "Attila Mocsi",
                    "Modibo Sagnan",
                    "Mithat Pala",
                    "Ibrahim Olawoyin",
                    "Taylan Antalyalı",
                    "Qazim Laci",
                    "Ali Sowe",
                    "Emrecan Bulut"
                  ]
                }
              ]
            },
            {
              "fixtureId": 1584412,
              "kickoff": "2026-09-21T02:00:00+09:00",
              "status": "FT",
              "homeTeamId": 3579,
              "homeTeam": "Amed",
              "awayTeamId": 549,
              "awayTeam": "Beşiktaş",
              "injuriesChecked": true,
              "injuries": [
                {
                  "fixtureId": 1584412,
                  "teamId": 3579,
                  "playerId": 427020,
                  "player": "D. Demir",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1584412,
                  "teamId": 3579,
                  "playerId": 203458,
                  "player": "Y. Sor",
                  "type": "Questionable",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1584412,
                  "teamId": 549,
                  "playerId": 1946,
                  "player": "L. Trossard",
                  "type": "Missing Fixture",
                  "reason": "Injury"
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
                    "Furkan Soyalp",
                    "Rayan Raveloson",
                    "Samuel Ballet",
                    "Dia Saba",
                    "Mohamed Khalil",
                    "Gift Orban"
                  ]
                },
                {
                  "teamId": 549,
                  "team": "Beşiktaş",
                  "formation": "4-1-4-1",
                  "coach": "Vincenzo Italiano",
                  "starters": [
                    "Alexander Nübel",
                    "Amir Murillo",
                    "Emmanuel Agbadou",
                    "Tiago Djaló",
                    "Rıdvan Yılmaz",
                    "Salih Özcan",
                    "Ernest Poku",
                    "Junior Olaitan",
                    "Orkun Kökçü",
                    "İlhan Fakılı",
                    "Dušan Vlahović"
                  ]
                }
              ]
            }
          ]
        },
        {
          "key": "INTL_FRIENDLIES",
          "leagueId": 10,
          "season": "2026",
          "standings": [],
          "teams": [
            {
              "teamId": 5163,
              "team": "New Caledonia",
              "form": "",
              "all": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "home": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "away": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 5165,
              "team": "Solomon Islands",
              "form": "",
              "all": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "home": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "away": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 5160,
              "team": "Fiji",
              "form": "LD",
              "all": {
                "played": 2,
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 4
              },
              "home": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
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
              "teamId": 5170,
              "team": "Vanuatu",
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
                "played": 2,
                "wins": 1,
                "draws": 1,
                "losses": 0,
                "goalsFor": 4,
                "goalsAgainst": 3
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
              "fixtureId": 1640499,
              "kickoff": "2026-09-21T13:00:00+09:00",
              "status": "NS",
              "homeTeamId": 5163,
              "homeTeam": "New Caledonia",
              "awayTeamId": 5165,
              "awayTeam": "Solomon Islands",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1640500,
              "kickoff": "2026-09-21T16:00:00+09:00",
              "status": "NS",
              "homeTeamId": 5160,
              "homeTeam": "Fiji",
              "awayTeamId": 5170,
              "awayTeam": "Vanuatu",
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
      "date": "2026-09-22",
      "updatedAt": "2026-09-20T13:03:24.388Z",
      "leagues": []
    },
    {
      "date": "2026-09-23",
      "updatedAt": "2026-09-20T13:03:24.388Z",
      "leagues": []
    }
  ]
};
});
