(function attachTeamContextPack(root, factory) {
  const pack = factory();
  if (typeof module !== "undefined" && module.exports) module.exports = pack;
  if (root) root.ODDS_ARCHIVE_TEAM_CONTEXT_PACK = pack;
})(typeof window !== "undefined" ? window : globalThis, function createTeamContextPack() {
  return {
  "version": "team-context-v3",
  "date": "2026-09-22",
  "updatedAt": "2026-09-21T21:56:13.087Z",
  "collection": {
    "dates": [
      "2026-09-22"
    ],
    "requestGroups": 1,
    "skippedGroups": 25,
    "failures": 0,
    "errors": []
  },
  "leagues": [
    {
      "key": "INTL_FRIENDLIES",
      "leagueId": 10,
      "season": "2026",
      "standings": [],
      "teams": [
        {
          "teamId": 5531,
          "team": "Dominica",
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
            "played": 1,
            "wins": 1,
            "draws": 0,
            "losses": 0,
            "goalsFor": 1,
            "goalsAgainst": 0
          },
          "away": {
            "played": 0,
            "wins": 0,
            "draws": 0,
            "losses": 0,
            "goalsFor": 0,
            "goalsAgainst": 0
          }
        },
        {
          "teamId": 8150,
          "team": "Anguilla",
          "form": "L",
          "all": {
            "played": 1,
            "wins": 0,
            "draws": 0,
            "losses": 1,
            "goalsFor": 0,
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
          "fixtureId": 1640822,
          "kickoff": "2026-09-22T00:00:00+09:00",
          "status": "FT",
          "homeTeamId": 5531,
          "homeTeam": "Dominica",
          "awayTeamId": 8150,
          "awayTeam": "Anguilla",
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
      "date": "2026-09-21",
      "updatedAt": "2026-09-22T08:27:37.269Z",
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
          ],
          "standingsUpdatedAt": "2026-09-22T08:27:37.269Z"
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
              "teamId": 548,
              "team": "Real Sociedad",
              "rank": 8,
              "points": 10,
              "goalsDiff": -4,
              "form": "WLWDW",
              "all": {
                "played": 7,
                "wins": 3,
                "draws": 1,
                "losses": 3,
                "goalsFor": 9,
                "goalsAgainst": 13
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
                "played": 4,
                "wins": 2,
                "draws": 0,
                "losses": 2,
                "goalsFor": 7,
                "goalsAgainst": 9
              }
            },
            {
              "teamId": 533,
              "team": "Villarreal",
              "rank": 9,
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
              "rank": 10,
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
              "rank": 11,
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
              "rank": 12,
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
              "rank": 13,
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
              "rank": 14,
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
              "rank": 15,
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
              "goalsDiff": -9,
              "form": "LWLLL",
              "all": {
                "played": 7,
                "wins": 1,
                "draws": 1,
                "losses": 5,
                "goalsFor": 4,
                "goalsAgainst": 13
              },
              "home": {
                "played": 4,
                "wins": 0,
                "draws": 1,
                "losses": 3,
                "goalsFor": 2,
                "goalsAgainst": 9
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
          ],
          "standingsUpdatedAt": "2026-09-22T08:27:37.269Z"
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
              "teamId": 489,
              "team": "AC Milan",
              "rank": 5,
              "points": 11,
              "goalsDiff": 6,
              "form": "WDDWW",
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
              "teamId": 512,
              "team": "Frosinone",
              "rank": 6,
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
              "rank": 7,
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
              "rank": 8,
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
              "teamId": 499,
              "team": "Atalanta",
              "rank": 11,
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
              "teamId": 867,
              "team": "Lecce",
              "rank": 12,
              "points": 6,
              "goalsDiff": -5,
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
          ],
          "standingsUpdatedAt": "2026-09-22T08:27:37.269Z"
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
          ],
          "standingsUpdatedAt": "2026-09-22T08:27:37.269Z"
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
              "teamId": 85,
              "team": "Paris Saint Germain",
              "rank": 6,
              "points": 8,
              "goalsDiff": 1,
              "form": "WWLDD",
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
            },
            {
              "teamId": 77,
              "team": "Angers",
              "rank": 7,
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
              "rank": 8,
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
              "rank": 9,
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
              "rank": 10,
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
              "goalsDiff": -1,
              "form": "LLLLW",
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
          ],
          "standingsUpdatedAt": "2026-09-22T08:27:37.269Z"
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
              "points": 21,
              "goalsDiff": 15,
              "form": "WWWWW",
              "all": {
                "played": 7,
                "wins": 7,
                "draws": 0,
                "losses": 0,
                "goalsFor": 18,
                "goalsAgainst": 3
              },
              "home": {
                "played": 4,
                "wins": 4,
                "draws": 0,
                "losses": 0,
                "goalsFor": 9,
                "goalsAgainst": 2
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
              "goalsDiff": 15,
              "form": "LWWWW",
              "all": {
                "played": 7,
                "wins": 5,
                "draws": 1,
                "losses": 1,
                "goalsFor": 22,
                "goalsAgainst": 7
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
                "played": 4,
                "wins": 3,
                "draws": 0,
                "losses": 1,
                "goalsFor": 15,
                "goalsAgainst": 3
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
          ],
          "standingsUpdatedAt": "2026-09-22T08:27:37.269Z"
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
          ],
          "standingsUpdatedAt": "2026-09-22T08:27:37.269Z"
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
          ],
          "standingsUpdatedAt": "2026-09-22T08:27:37.269Z"
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
      "updatedAt": "2026-09-21T21:56:13.087Z",
      "leagues": [
        {
          "key": "INTL_FRIENDLIES",
          "leagueId": 10,
          "season": "2026",
          "standings": [],
          "teams": [
            {
              "teamId": 5531,
              "team": "Dominica",
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
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 1,
                "goalsAgainst": 0
              },
              "away": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 8150,
              "team": "Anguilla",
              "form": "L",
              "all": {
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 0,
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
              "fixtureId": 1640822,
              "kickoff": "2026-09-22T00:00:00+09:00",
              "status": "FT",
              "homeTeamId": 5531,
              "homeTeam": "Dominica",
              "awayTeamId": 8150,
              "awayTeam": "Anguilla",
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
      "date": "2026-09-23",
      "updatedAt": "2026-09-21T15:04:48.974Z",
      "leagues": []
    },
    {
      "date": "2026-09-24",
      "updatedAt": "2026-09-21T15:04:48.974Z",
      "leagues": []
    },
    {
      "date": "2026-09-25",
      "updatedAt": "2026-09-21T15:04:48.974Z",
      "leagues": []
    }
  ],
  "standingsRefresh": {
    "updatedAt": "2026-09-22T08:27:37.269Z",
    "requested": 9,
    "updated": 8,
    "failures": 1
  }
};
});
