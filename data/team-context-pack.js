(function attachTeamContextPack(root, factory) {
  const pack = factory();
  if (typeof module !== "undefined" && module.exports) module.exports = pack;
  if (root) root.ODDS_ARCHIVE_TEAM_CONTEXT_PACK = pack;
})(typeof window !== "undefined" ? window : globalThis, function createTeamContextPack() {
  return {
  "version": "team-context-v3",
  "date": "2026-09-17",
  "updatedAt": "2026-09-16T21:14:12.856Z",
  "collection": {
    "dates": [
      "2026-09-17"
    ],
    "requestGroups": 2,
    "skippedGroups": 24,
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
          "teamId": 530,
          "team": "Atletico Madrid",
          "rank": 3,
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
          "rank": 4,
          "points": 13,
          "goalsDiff": 3,
          "form": "WWDLW",
          "all": {
            "played": 6,
            "wins": 4,
            "draws": 1,
            "losses": 1,
            "goalsFor": 9,
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
            "played": 3,
            "wins": 2,
            "draws": 1,
            "losses": 0,
            "goalsFor": 5,
            "goalsAgainst": 2
          }
        },
        {
          "teamId": 543,
          "team": "Real Betis",
          "rank": 5,
          "points": 12,
          "goalsDiff": 1,
          "form": "WWLWW",
          "all": {
            "played": 5,
            "wins": 4,
            "draws": 0,
            "losses": 1,
            "goalsFor": 7,
            "goalsAgainst": 6
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
            "wins": 2,
            "draws": 0,
            "losses": 1,
            "goalsFor": 5,
            "goalsAgainst": 6
          }
        },
        {
          "teamId": 542,
          "team": "Alaves",
          "rank": 6,
          "points": 10,
          "goalsDiff": 5,
          "form": "LLWWD",
          "all": {
            "played": 6,
            "wins": 3,
            "draws": 1,
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
            "played": 2,
            "wins": 0,
            "draws": 1,
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
          "teamId": 540,
          "team": "Espanyol",
          "rank": 8,
          "points": 7,
          "goalsDiff": 2,
          "form": "LWDLL",
          "all": {
            "played": 6,
            "wins": 2,
            "draws": 1,
            "losses": 3,
            "goalsFor": 9,
            "goalsAgainst": 7
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
            "played": 3,
            "wins": 1,
            "draws": 0,
            "losses": 2,
            "goalsFor": 4,
            "goalsAgainst": 4
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
          "teamId": 728,
          "team": "Rayo Vallecano",
          "rank": 11,
          "points": 7,
          "goalsDiff": -5,
          "form": "WLWLD",
          "all": {
            "played": 6,
            "wins": 2,
            "draws": 1,
            "losses": 3,
            "goalsFor": 10,
            "goalsAgainst": 15
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
            "wins": 0,
            "draws": 0,
            "losses": 3,
            "goalsFor": 4,
            "goalsAgainst": 11
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
          "teamId": 727,
          "team": "Osasuna",
          "rank": 13,
          "points": 7,
          "goalsDiff": -7,
          "form": "LLLWW",
          "all": {
            "played": 6,
            "wins": 2,
            "draws": 1,
            "losses": 3,
            "goalsFor": 5,
            "goalsAgainst": 12
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
            "played": 3,
            "wins": 1,
            "draws": 0,
            "losses": 2,
            "goalsFor": 4,
            "goalsAgainst": 10
          }
        },
        {
          "teamId": 539,
          "team": "Levante",
          "rank": 14,
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
          "rank": 15,
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
          "rank": 16,
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
          "teamId": 532,
          "team": "Valencia",
          "rank": 17,
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
          "rank": 18,
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
          "rank": 19,
          "points": 2,
          "goalsDiff": -3,
          "form": "LLLDD",
          "all": {
            "played": 5,
            "wins": 0,
            "draws": 2,
            "losses": 3,
            "goalsFor": 7,
            "goalsAgainst": 10
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
          "rank": 20,
          "points": 2,
          "goalsDiff": -8,
          "form": "LDLLL",
          "all": {
            "played": 6,
            "wins": 0,
            "draws": 2,
            "losses": 4,
            "goalsFor": 8,
            "goalsAgainst": 16
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
            "played": 3,
            "wins": 0,
            "draws": 2,
            "losses": 1,
            "goalsFor": 4,
            "goalsAgainst": 5
          }
        }
      ],
      "teams": [
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
          "teamId": 727,
          "team": "Osasuna",
          "form": "DWWLLL",
          "all": {
            "played": 6,
            "wins": 2,
            "draws": 1,
            "losses": 3,
            "goalsFor": 5,
            "goalsAgainst": 12
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
            "played": 3,
            "wins": 1,
            "draws": 0,
            "losses": 2,
            "goalsFor": 4,
            "goalsAgainst": 10
          }
        },
        {
          "teamId": 544,
          "team": "Deportivo La Coruna",
          "form": "DDWWDL",
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
          "teamId": 536,
          "team": "Sevilla",
          "form": "WWLDWW",
          "all": {
            "played": 6,
            "wins": 4,
            "draws": 1,
            "losses": 1,
            "goalsFor": 9,
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
            "played": 3,
            "wins": 2,
            "draws": 1,
            "losses": 0,
            "goalsFor": 5,
            "goalsAgainst": 2
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
        }
      ],
      "fixtures": [
        {
          "fixtureId": 1570384,
          "kickoff": "2026-09-17T02:00:00+09:00",
          "status": "FT",
          "homeTeamId": 530,
          "homeTeam": "Atletico Madrid",
          "awayTeamId": 727,
          "awayTeam": "Osasuna",
          "injuriesChecked": true,
          "injuries": [
            {
              "fixtureId": 1570384,
              "teamId": 530,
              "playerId": 6009,
              "player": "J. Alvarez",
              "type": "Missing Fixture",
              "reason": "Muscle Injury"
            },
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
              "playerId": 8492,
              "player": "A. Sorloth",
              "type": "Missing Fixture",
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
              "type": "Missing Fixture",
              "reason": "Hamstring Injury"
            }
          ],
          "lineupsChecked": true,
          "lineups": [
            {
              "teamId": 530,
              "team": "Atletico Madrid",
              "formation": "4-4-2",
              "coach": "D. Simeone",
              "starters": [
                "J. Oblak",
                "Marcos Llorente",
                "C. Romero",
                "Robin Le Normand",
                "Álex Grimaldo",
                "Lee Kang-In",
                "Koke",
                "J. Cardoso",
                "Álex Baena",
                "J. David",
                "A. Lookman"
              ]
            },
            {
              "teamId": 727,
              "team": "Osasuna",
              "formation": "5-4-1",
              "coach": "Luis Miguel Ramis",
              "starters": [
                "Aitor Fernández",
                "Íñigo Arguibide",
                "R. Yeboah",
                "F. Boyomo",
                "U. Santos",
                "Abel Bretones",
                "Jonathan Dubasin",
                "Lucas Torró",
                "Asier Osambela",
                "Raul Moro",
                "Raúl García"
              ]
            }
          ]
        },
        {
          "fixtureId": 1570387,
          "kickoff": "2026-09-17T02:00:00+09:00",
          "status": "FT",
          "homeTeamId": 544,
          "homeTeam": "Deportivo La Coruna",
          "awayTeamId": 536,
          "awayTeam": "Sevilla",
          "injuriesChecked": true,
          "injuries": [
            {
              "fixtureId": 1570387,
              "teamId": 544,
              "playerId": 392417,
              "player": "T. Gijselhart",
              "type": "Missing Fixture",
              "reason": "Transfer negotiations"
            },
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
              "playerId": 174927,
              "player": "A. Sangante",
              "type": "Missing Fixture",
              "reason": "Ankle Injury"
            },
            {
              "fixtureId": 1570387,
              "teamId": 536,
              "playerId": 48471,
              "player": "R. Vargas",
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
                "Adrià Alti",
                "J. Giménez",
                "Miguel Loureiro",
                "Angeliño",
                "Luismi Cruz",
                "L. Amatucci",
                "Riki Rodríguez",
                "Peke",
                "B. Nsongo",
                "P. Aubameyang"
              ]
            },
            {
              "teamId": 536,
              "team": "Sevilla",
              "formation": "4-2-3-1",
              "coach": "Luis García",
              "starters": [
                "O. Vlachodimos",
                "Juan Iglesias",
                "Andrés Castrín",
                "Kike Salas",
                "G. Suazo",
                "L. Agoumé",
                "Y. Fofana",
                "M. Sierra",
                "Jon Guridi",
                "Félix Correia",
                "L. Stassin"
              ]
            }
          ]
        },
        {
          "fixtureId": 1570389,
          "kickoff": "2026-09-17T04:30:00+09:00",
          "status": "PST",
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
              "teamId": 539,
              "playerId": 313651,
              "player": "H. Sotelo",
              "type": "Missing Fixture",
              "reason": "Knee Injury"
            },
            {
              "fixtureId": 1570389,
              "teamId": 531,
              "playerId": 437643,
              "player": "P. Canales",
              "type": "Missing Fixture",
              "reason": "Muscle Injury"
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
            }
          ],
          "lineupsChecked": true,
          "lineups": [
            {
              "teamId": 539,
              "team": "Levante",
              "formation": "4-3-3",
              "coach": "Luís Castro",
              "starters": [
                "M. Ryan",
                "Nacho Pérez",
                "Dela",
                "IfeanyiIfeanyi Ndukwe",
                "Manu Sánchez",
                "Jon Ander Olasagasti",
                "Oriol Rey",
                "E. Bardeli",
                "Paco Cortés",
                "Iván Romero",
                "T. Fernández"
              ]
            },
            {
              "teamId": 531,
              "team": "Athletic Club",
              "formation": "4-2-3-1",
              "coach": "E. Terzić",
              "starters": [
                "Unai Simón",
                "J. Louis-Jean",
                "Aitor Paredes",
                "Aymeric Laporte",
                "Yuri",
                "Ruíz de Galarreta",
                "Mikel Jauregizar",
                "Robert Navarro",
                "Oihan Sancet",
                "Álex Berenguer",
                "Maroan Sannadi"
              ]
            }
          ]
        },
        {
          "fixtureId": 1570385,
          "kickoff": "2026-09-17T04:30:00+09:00",
          "status": "2H",
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
              "teamId": 4665,
              "playerId": 41157,
              "player": "A. Almeida",
              "type": "Missing Fixture",
              "reason": "Red Card"
            },
            {
              "fixtureId": 1570385,
              "teamId": 4665,
              "playerId": 408875,
              "player": "S. Eriksson",
              "type": "Missing Fixture",
              "reason": "Shoulder Injury"
            },
            {
              "fixtureId": 1570385,
              "teamId": 4665,
              "playerId": 47209,
              "player": "A. Martin",
              "type": "Missing Fixture",
              "reason": "Knee Injury"
            }
          ],
          "lineupsChecked": true,
          "lineups": [
            {
              "teamId": 529,
              "team": "Barcelona",
              "formation": "4-3-3",
              "coach": "H. Flick",
              "starters": [
                "Joan García",
                "Eric García",
                "A. Christensen",
                "Gerard Martín",
                "João Cancelo",
                "Dani Olmo",
                "Rodri",
                "Pedri",
                "Lamine Yamal",
                "Raphinha",
                "K. Adeyemi"
              ]
            },
            {
              "teamId": 4665,
              "team": "Racing Santander",
              "formation": "4-1-3-2",
              "coach": "José Alberto López",
              "starters": [
                "Julen Agirrezabala",
                "Manu Hernando",
                "Pedro Felipe",
                "Facundo González",
                "Aarón Martín",
                "M. Prati",
                "Sergio Canales",
                "M. Gueye",
                "Íñigo Sainz-Maza",
                "Asier Villalibre",
                "Juan Carlos Arana"
              ]
            }
          ]
        }
      ]
    },
    {
      "key": "UEL",
      "leagueId": 3,
      "season": "2026",
      "standings": [
        {
          "teamId": 628,
          "team": "Sparta Praha",
          "rank": 1,
          "points": 3,
          "goalsDiff": 3,
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
          "teamId": 3402,
          "team": "Omonia Nicosia",
          "rank": 2,
          "points": 3,
          "goalsDiff": 1,
          "form": "WWLWD",
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
          "teamId": 554,
          "team": "Anderlecht",
          "rank": 3,
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
          "teamId": 201,
          "team": "AZ Alkmaar",
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
          "teamId": 211,
          "team": "Benfica",
          "rank": 5,
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
          "rank": 6,
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
          "teamId": 4360,
          "team": "Celje",
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
          "teamId": 548,
          "team": "Real Sociedad",
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
          "teamId": 94,
          "team": "Rennes",
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
          "teamId": 571,
          "team": "Red Bull Salzburg",
          "rank": 29,
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
          "teamId": 637,
          "team": "Sturm Graz",
          "rank": 30,
          "points": 0,
          "goalsDiff": 0,
          "form": "",
          "all": {
            "played": 0,
            "wins": 0,
            "draws": 0,
            "losses": 0,
            "goalsFor": 0,
            "goalsAgainst": 0
          },
          "home": {
            "played": 0,
            "wins": 0,
            "draws": 0,
            "losses": 0,
            "goalsFor": 0,
            "goalsAgainst": 0
          },
          "away": {
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
          "teamId": 4799,
          "team": "Torreense",
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
          "teamId": 1393,
          "team": "Union St. Gilloise",
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
          "teamId": 567,
          "team": "Plzen",
          "rank": 34,
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
          "teamId": 538,
          "team": "Celta Vigo",
          "rank": 35,
          "points": 0,
          "goalsDiff": -1,
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
        },
        {
          "teamId": 3683,
          "team": "Ararat-Armenia",
          "rank": 36,
          "points": 0,
          "goalsDiff": -3,
          "form": "LWD",
          "all": {
            "played": 1,
            "wins": 0,
            "draws": 0,
            "losses": 1,
            "goalsFor": 1,
            "goalsAgainst": 4
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
          "form": "DWLWW",
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
            "wins": 3,
            "draws": 0,
            "losses": 0,
            "goalsFor": 6,
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
        },
        {
          "teamId": 3683,
          "team": "Ararat-Armenia",
          "form": "DWL",
          "all": {
            "played": 3,
            "wins": 1,
            "draws": 1,
            "losses": 1,
            "goalsFor": 3,
            "goalsAgainst": 5
          },
          "home": {
            "played": 2,
            "wins": 1,
            "draws": 0,
            "losses": 1,
            "goalsFor": 2,
            "goalsAgainst": 4
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
          "teamId": 168,
          "team": "Bayer Leverkusen",
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
            "played": 1,
            "wins": 1,
            "draws": 0,
            "losses": 0,
            "goalsFor": 2,
            "goalsAgainst": 0
          },
          "away": {
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
          "teamId": 489,
          "team": "AC Milan",
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
            "played": 1,
            "wins": 0,
            "draws": 0,
            "losses": 1,
            "goalsFor": 0,
            "goalsAgainst": 2
          },
          "away": {
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
          "form": "LWWDWWW",
          "all": {
            "played": 7,
            "wins": 5,
            "draws": 1,
            "losses": 1,
            "goalsFor": 21,
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
            "played": 4,
            "wins": 2,
            "draws": 1,
            "losses": 1,
            "goalsFor": 7,
            "goalsAgainst": 4
          }
        },
        {
          "teamId": 553,
          "team": "Olympiakos Piraeus",
          "form": "W",
          "all": {
            "played": 1,
            "wins": 1,
            "draws": 0,
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
          "form": "WDWWL",
          "all": {
            "played": 5,
            "wins": 3,
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
            "goalsAgainst": 1
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
          "teamId": 554,
          "team": "Anderlecht",
          "form": "DWWWWWL",
          "all": {
            "played": 7,
            "wins": 5,
            "draws": 1,
            "losses": 1,
            "goalsFor": 15,
            "goalsAgainst": 6
          },
          "home": {
            "played": 4,
            "wins": 3,
            "draws": 0,
            "losses": 1,
            "goalsFor": 10,
            "goalsAgainst": 5
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
          "form": "W",
          "all": {
            "played": 1,
            "wins": 1,
            "draws": 0,
            "losses": 0,
            "goalsFor": 2,
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
            "goalsFor": 2,
            "goalsAgainst": 1
          }
        },
        {
          "teamId": 563,
          "team": "Hapoel Beer Sheva",
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
          "teamId": 620,
          "team": "Dinamo Zagreb",
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
            "goalsFor": 0,
            "goalsAgainst": 0
          }
        },
        {
          "teamId": 637,
          "team": "Sturm Graz",
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
          "teamId": 94,
          "team": "Rennes",
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
            "goalsFor": 0,
            "goalsAgainst": 0
          }
        },
        {
          "teamId": 746,
          "team": "Sunderland",
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
          "teamId": 201,
          "team": "AZ Alkmaar",
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
          "fixtureId": 1636312,
          "kickoff": "2026-09-17T01:45:00+09:00",
          "status": "FT",
          "homeTeamId": 3402,
          "homeTeam": "Omonia Nicosia",
          "awayTeamId": 538,
          "awayTeam": "Celta Vigo",
          "injuriesChecked": true,
          "injuries": [
            {
              "fixtureId": 1636312,
              "teamId": 3402,
              "playerId": 1186,
              "player": "B. Akintola",
              "type": "Missing Fixture",
              "reason": "Inactive"
            },
            {
              "fixtureId": 1636312,
              "teamId": 3402,
              "playerId": 540,
              "player": "C. Eiting",
              "type": "Missing Fixture",
              "reason": "Knee Injury"
            },
            {
              "fixtureId": 1636312,
              "teamId": 3402,
              "playerId": 292463,
              "player": "F. Kitsos",
              "type": "Missing Fixture",
              "reason": "Knee Injury"
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
              "playerId": 47445,
              "player": "I. Aspas",
              "type": "Missing Fixture",
              "reason": "Muscle Injury"
            }
          ],
          "lineupsChecked": true,
          "lineups": [
            {
              "teamId": 3402,
              "team": "Omonia Nicosia",
              "formation": "4-2-3-1",
              "coach": "Henning Berg",
              "starters": [
                "Fabiano",
                "Jean-Kévin Duverne",
                "Senou Coulibaly",
                "Ľubomír Šatka",
                "Jure Balkovec",
                "Panagiotis Andreou",
                "Mateo Marić",
                "Ewandro Costa",
                "Muamer Tanković",
                "Jaden Montnor",
                "Loïs Diony"
              ]
            },
            {
              "teamId": 538,
              "team": "Celta Vigo",
              "formation": "3-4-1-2",
              "coach": "Claudio Giraldez",
              "starters": [
                "Ionuț Radu",
                "Javi Rodríguez",
                "Carl Starfelt",
                "Marcos Alonso",
                "Álvaro Núñez",
                "Miguel Román",
                "Sergio Carreira",
                "Couhaib Driouech",
                "Hugo Burcio",
                "Pablo Durán",
                "Ferrán Jutglà"
              ]
            }
          ]
        },
        {
          "fixtureId": 1636217,
          "kickoff": "2026-09-17T01:45:00+09:00",
          "status": "FT",
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
              "playerId": 285,
              "player": "K. Hoever",
              "type": "Missing Fixture",
              "reason": "Hip Injury"
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
            }
          ],
          "lineupsChecked": true,
          "lineups": [
            {
              "teamId": 3683,
              "team": "Ararat-Armenia",
              "formation": "4-3-3",
              "coach": "Tulipa",
              "starters": [
                "João Bravim",
                "Junior Julio",
                "Bruno Wilson",
                "Alexandros Malis",
                "Edgar Grigoryan",
                "Hugo Oliveira",
                "Karen Muradyan",
                "Bernardo Dias",
                "Artur Serobyan",
                "Sandro Lima",
                "Zidane Banjaqui"
              ]
            },
            {
              "teamId": 628,
              "team": "Sparta Praha",
              "formation": "4-3-3",
              "coach": "Brian Priske",
              "starters": [
                "Jakub Surovčík",
                "Martin Suchomel",
                "Loïc Mbe Soh",
                "Tobias Kvalvagnes Guddal",
                "Matěj Ryneš",
                "Adam Karabec",
                "Roman Macek",
                "Hugo Sochurek",
                "John Mercado",
                "Jonatan Braut Brunes",
                "Josimar Alcócer"
              ]
            }
          ]
        },
        {
          "fixtureId": 1636225,
          "kickoff": "2026-09-17T04:00:00+09:00",
          "status": "FT",
          "homeTeamId": 168,
          "homeTeam": "Bayer Leverkusen",
          "awayTeamId": 4360,
          "awayTeam": "Celje",
          "injuriesChecked": true,
          "injuries": [
            {
              "fixtureId": 1636225,
              "teamId": 168,
              "playerId": 343320,
              "player": "E. Ben Seghir",
              "type": "Missing Fixture",
              "reason": "Thigh Injury"
            },
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
              "playerId": 161747,
              "player": "G. Doue",
              "type": "Missing Fixture",
              "reason": "Inactive"
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
              "teamId": 168,
              "playerId": 380587,
              "player": "I. Maza",
              "type": "Questionable",
              "reason": "Illness"
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
            },
            {
              "fixtureId": 1636225,
              "teamId": 4360,
              "playerId": 25102,
              "player": "M. Kvesic",
              "type": "Questionable",
              "reason": "Inactive"
            },
            {
              "fixtureId": 1636225,
              "teamId": 4360,
              "playerId": 325384,
              "player": "A. Tutyskinas",
              "type": "Questionable",
              "reason": "Inactive"
            }
          ],
          "lineupsChecked": true,
          "lineups": [
            {
              "teamId": 168,
              "team": "Bayer Leverkusen",
              "formation": "4-2-3-1",
              "coach": "Carles Martinez",
              "starters": [
                "Mark Flekken",
                "Lucas Vázquez",
                "Loïc Badé",
                "Edmond Tapsoba",
                "Facundo Medina",
                "Robert Andrich",
                "Aleix García",
                "Martin Terrier",
                "Malik Tillman",
                "Moussa Diaby",
                "Patrik Schick"
              ]
            },
            {
              "teamId": 4360,
              "team": "Celje",
              "formation": "4-2-3-1",
              "coach": "Vitor Campelos",
              "starters": [
                "Žan-Luk Leban",
                "Pijus Širvys",
                "Łukasz Bejger",
                "Artemijus Tutyškinas",
                "Milot Avdyli",
                "Luka Tičić",
                "Mark Zabukovnik",
                "Yaya Dukuly",
                "Svit Sešlar",
                "Benjamin Verbič",
                "Armandas Kučys"
              ]
            }
          ]
        },
        {
          "fixtureId": 1636207,
          "kickoff": "2026-09-17T04:00:00+09:00",
          "status": "FT",
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
                "Filippo Terracciano",
                "Koni De Winter",
                "Strahinja Pavlović",
                "Samuel Chukwueze",
                "Ardon Jashari",
                "Yunus Musah",
                "Davide Bartesaghi",
                "Omari Hutchinson",
                "Alphadjo Cissè",
                "Gonçalo Ramos"
              ]
            },
            {
              "teamId": 211,
              "team": "Benfica",
              "formation": "4-2-3-1",
              "coach": "Marco Silva",
              "starters": [
                "Anatoliy Trubin",
                "Daniel Banjaqui",
                "Alessandro Circati",
                "Tomás Araújo",
                "Souffian El Karouani",
                "Fredrik Aursnes",
                "João Palhinha",
                "Dodi Lukebakio",
                "Georgiy Sudakov",
                "Jakub Kamiński",
                "Jhon Durán"
              ]
            }
          ]
        },
        {
          "fixtureId": 1636309,
          "kickoff": "2026-09-17T04:00:00+09:00",
          "status": "FT",
          "homeTeamId": 553,
          "homeTeam": "Olympiakos Piraeus",
          "awayTeamId": 336,
          "awayTeam": "Jagiellonia",
          "injuriesChecked": true,
          "injuries": [
            {
              "fixtureId": 1636309,
              "teamId": 553,
              "playerId": 195580,
              "player": "Clayton",
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
              "teamId": 553,
              "playerId": 49888,
              "player": "Y. Yazici",
              "type": "Missing Fixture",
              "reason": "Knee Injury"
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
              "playerId": 33236,
              "player": "Y. Kobayashi",
              "type": "Missing Fixture",
              "reason": "Injury"
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
              "reason": "Injury"
            }
          ],
          "lineupsChecked": true,
          "lineups": [
            {
              "teamId": 553,
              "team": "Olympiakos Piraeus",
              "formation": "4-2-3-1",
              "coach": "Imanol Alguacil",
              "starters": [
                "Stefan Ortega",
                "Manolis Saliakas",
                "Panagiotis Retsos",
                "Lorenzo Pirola",
                "Onyemaechi Bruno",
                "Santiago Hezze",
                "Remo Freuler",
                "Jota Silva",
                "Chiquinho",
                "Gelson Martins",
                "Armando González"
              ]
            },
            {
              "teamId": 336,
              "team": "Jagiellonia",
              "formation": "4-3-3",
              "coach": "Adrian Siemieniec",
              "starters": [
                "Sławomir Abramowicz",
                "Norbert Wojtuszek",
                "Bernardo Vital",
                "Apostolos Konstantopoulos",
                "Guilherme Montóia",
                "Jesús Imaz",
                "Taras Romanczuk",
                "Ferslev Anders Klynge",
                "Rodrigo Conceição",
                "Nik Prelec",
                "Kajetan Szmyt"
              ]
            }
          ]
        },
        {
          "fixtureId": 1636212,
          "kickoff": "2026-09-17T04:00:00+09:00",
          "status": "FT",
          "homeTeamId": 554,
          "homeTeam": "Anderlecht",
          "awayTeamId": 80,
          "awayTeam": "Lyon",
          "injuriesChecked": true,
          "injuries": [
            {
              "fixtureId": 1636212,
              "teamId": 554,
              "playerId": 84081,
              "player": "G. Biancone",
              "type": "Missing Fixture",
              "reason": "Inactive"
            },
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
              "playerId": 204088,
              "player": "I. Koutsoupias",
              "type": "Missing Fixture",
              "reason": "Off the roster"
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
              "playerId": 9700,
              "player": "Abner Vinicius",
              "type": "Missing Fixture",
              "reason": "Inactive"
            },
            {
              "fixtureId": 1636212,
              "teamId": 80,
              "playerId": 623922,
              "player": "A. Hamdani",
              "type": "Missing Fixture",
              "reason": "Inactive"
            }
          ],
          "lineupsChecked": true,
          "lineups": [
            {
              "teamId": 554,
              "team": "Anderlecht",
              "formation": "4-4-2",
              "coach": "Vitor Bruno",
              "starters": [
                "Colin Coosemans",
                "Ali Maamar",
                "Andrew Omobamidele",
                "Léo Pétrot",
                "Ludwig Augustinsson",
                "Lukáš Ambros",
                "Enric Llansana",
                "Romeo Amane",
                "Marten Winkler",
                "Mihajlo Cvetković",
                "Thelo Aasgaard"
              ]
            },
            {
              "teamId": 80,
              "team": "Lyon",
              "formation": "4-3-3",
              "coach": "Paulo Fonseca",
              "starters": [
                "Rémy Descamps",
                "Ruben Kluivert",
                "Clinton Mata",
                "Moussa Niakhaté",
                "Mohamed Ouédraogo",
                "Tanner Tessmann",
                "Tyler Morton",
                "Noah Nartey",
                "Kaïl Boudache",
                "Loïs Openda",
                "Keito Nakamura"
              ]
            }
          ]
        },
        {
          "fixtureId": 1636265,
          "kickoff": "2026-09-17T04:00:00+09:00",
          "status": "FT",
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
              "playerId": 80354,
              "player": "Lucas Ventura",
              "type": "Missing Fixture",
              "reason": "Inactive"
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
              "playerId": 162269,
              "player": "I. Rotman",
              "type": "Missing Fixture",
              "reason": "Inactive"
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
              "playerId": 182434,
              "player": "D. Beljo",
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
              "playerId": 14301,
              "player": "S. Radeljic",
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
            },
            {
              "fixtureId": 1636265,
              "teamId": 620,
              "playerId": 14410,
              "player": "B. Goda",
              "type": "Questionable",
              "reason": "Inactive"
            },
            {
              "fixtureId": 1636265,
              "teamId": 620,
              "playerId": 371912,
              "player": "D. Rodriguez",
              "type": "Questionable",
              "reason": "Inactive"
            }
          ],
          "lineupsChecked": true,
          "lineups": [
            {
              "teamId": 563,
              "team": "Hapoel Beer Sheva",
              "formation": "4-3-3",
              "coach": "Ran Kozuch",
              "starters": [
                "Ofir Marciano",
                "Guy Mizrahi",
                "Miguel Vítor",
                "Matan Baltaxa",
                "Pedro Amador",
                "Forson Amankwah",
                "Niv Yehoshua",
                "Zahi Ahmed",
                "Javon East",
                "Igor Zlatanović",
                "Yonas Malede"
              ]
            },
            {
              "teamId": 620,
              "team": "Dinamo Zagreb",
              "formation": "4-1-4-1",
              "coach": "Mario Kovacevic",
              "starters": [
                "Dominik Kotarski",
                "Niko Galešić",
                "Sergi Domínguez",
                "Scott McKenna",
                "Bruno Goda",
                "Josip Mišić",
                "Mateo Lisica",
                "Luka Stojković",
                "Lukas Kačavenda",
                "Mislav Oršić",
                "Arber Hoxha"
              ]
            }
          ]
        },
        {
          "fixtureId": 1636341,
          "kickoff": "2026-09-17T04:00:00+09:00",
          "status": "FT",
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
              "playerId": 216761,
              "player": "S. Jatta",
              "type": "Missing Fixture",
              "reason": "Inactive"
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
              "playerId": 343211,
              "player": "E. Soglo",
              "type": "Missing Fixture",
              "reason": "Muscle Injury"
            },
            {
              "fixtureId": 1636341,
              "teamId": 637,
              "playerId": 158614,
              "player": "S. Wlodarczyk",
              "type": "Missing Fixture",
              "reason": "Off the roster"
            }
          ],
          "lineupsChecked": true,
          "lineups": [
            {
              "teamId": 637,
              "team": "Sturm Graz",
              "formation": "5-3-2",
              "coach": "Fabio Ingolitsch",
              "starters": [
                "Daniil Khudyakov",
                "Jurgen Heil",
                "Albert Vallci",
                "Joshua Quarshie",
                "Paul Koller",
                "Luís Balbo",
                "Luca Weinhandl",
                "Valmir Matoshi",
                "Jacob Hödl",
                "Belmin Beganović",
                "Gizo Mamageishvili"
              ]
            },
            {
              "teamId": 94,
              "team": "Rennes",
              "formation": "4-1-4-1",
              "coach": "Franck Haise",
              "starters": [
                "Brice Samba",
                "Bryan Reynolds",
                "Charlie Cresswell",
                "Anthony Rouault",
                "Mahamadou Nagida",
                "Mahdi Camara",
                "Ludovic Blas",
                "Sebastian Szymański",
                "Adrien Thomasson",
                "Mousa Tamari",
                "Esteban Lepaul"
              ]
            }
          ]
        },
        {
          "fixtureId": 1636344,
          "kickoff": "2026-09-17T04:00:00+09:00",
          "status": "FT",
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
              "playerId": 224,
              "player": "J. Zoet",
              "type": "Missing Fixture",
              "reason": "Off the roster"
            }
          ],
          "lineupsChecked": true,
          "lineups": [
            {
              "teamId": 746,
              "team": "Sunderland",
              "formation": "4-2-3-1",
              "coach": "Regis Le Bris",
              "starters": [
                "Robin Roefs",
                "Nordi Mukiele",
                "Kevin Danso",
                "Omar Alderete",
                "Reinildo Mandava",
                "Granit Xhaka",
                "Noah Sadiki",
                "Trai Hume",
                "Enzo Le Fée",
                "Malick Fofana",
                "Wilson Isidor"
              ]
            },
            {
              "teamId": 201,
              "team": "AZ Alkmaar",
              "formation": "4-2-3-1",
              "coach": "Leeroy Echteld",
              "starters": [
                "Jari De Busser",
                "Elijah Dijkstra",
                "Wouter Goes",
                "Lewis Schouten",
                "Mateo Chávez",
                "Jordy Clasie",
                "Peer Koopmeiners",
                "Ayoub Oufkir",
                "Kees Smit",
                "Ro-Zangelo Daal",
                "Mexx Meerdink"
              ]
            }
          ]
        }
      ]
    }
  ],
  "dates": [
    {
      "date": "2026-09-16",
      "updatedAt": "2026-09-16T13:29:07.699Z",
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
              "teamId": 70,
              "team": "Middlesbrough",
              "rank": 3,
              "points": 14,
              "goalsDiff": 4,
              "form": "DWWDW",
              "all": {
                "played": 7,
                "wins": 4,
                "draws": 2,
                "losses": 1,
                "goalsFor": 14,
                "goalsAgainst": 10
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
                "played": 3,
                "wins": 1,
                "draws": 1,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 3
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
              "teamId": 1379,
              "team": "Lincoln",
              "rank": 8,
              "points": 11,
              "goalsDiff": 0,
              "form": "WWDDW",
              "all": {
                "played": 7,
                "wins": 3,
                "draws": 2,
                "losses": 2,
                "goalsFor": 6,
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
              "rank": 9,
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
              "rank": 10,
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
              "teamId": 58,
              "team": "Millwall",
              "rank": 11,
              "points": 10,
              "goalsDiff": 0,
              "form": "DLWLL",
              "all": {
                "played": 7,
                "wins": 3,
                "draws": 1,
                "losses": 3,
                "goalsFor": 13,
                "goalsAgainst": 13
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
                "draws": 1,
                "losses": 2,
                "goalsFor": 6,
                "goalsAgainst": 10
              }
            },
            {
              "teamId": 75,
              "team": "Stoke City",
              "rank": 12,
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
              "rank": 13,
              "points": 10,
              "goalsDiff": -2,
              "form": "LLWWW",
              "all": {
                "played": 7,
                "wins": 3,
                "draws": 1,
                "losses": 3,
                "goalsFor": 10,
                "goalsAgainst": 12
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
              "rank": 14,
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
              "teamId": 62,
              "team": "Sheffield Utd",
              "rank": 15,
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
              "rank": 16,
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
              "form": "LDWWWLL",
              "all": {
                "played": 7,
                "wins": 3,
                "draws": 1,
                "losses": 3,
                "goalsFor": 10,
                "goalsAgainst": 12
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
              "form": "LLWDDWW",
              "all": {
                "played": 7,
                "wins": 3,
                "draws": 2,
                "losses": 2,
                "goalsFor": 6,
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
                "played": 4,
                "wins": 3,
                "draws": 0,
                "losses": 1,
                "goalsFor": 4,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 70,
              "team": "Middlesbrough",
              "form": "WLWDWWD",
              "all": {
                "played": 7,
                "wins": 4,
                "draws": 2,
                "losses": 1,
                "goalsFor": 14,
                "goalsAgainst": 10
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
              "form": "WWLLWLD",
              "all": {
                "played": 7,
                "wins": 3,
                "draws": 1,
                "losses": 3,
                "goalsFor": 13,
                "goalsAgainst": 13
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
                "draws": 1,
                "losses": 2,
                "goalsFor": 6,
                "goalsAgainst": 10
              }
            }
          ],
          "fixtures": [
            {
              "fixtureId": 1563145,
              "kickoff": "2026-09-16T03:45:00+09:00",
              "status": "FT",
              "homeTeamId": 56,
              "homeTeam": "Bristol City",
              "awayTeamId": 1379,
              "awayTeam": "Lincoln",
              "injuriesChecked": true,
              "injuries": [
                {
                  "fixtureId": 1563145,
                  "teamId": 56,
                  "playerId": 8902,
                  "player": "B. De Keersmaecker",
                  "type": "Missing Fixture",
                  "reason": "Shoulder Injury"
                },
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
                  "playerId": 17740,
                  "player": "T. Hamer",
                  "type": "Missing Fixture",
                  "reason": "Health problems"
                },
                {
                  "fixtureId": 1563145,
                  "teamId": 1379,
                  "playerId": 394935,
                  "player": "M. Melia",
                  "type": "Missing Fixture",
                  "reason": "Thigh Injury"
                }
              ],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1563147,
              "kickoff": "2026-09-16T03:45:00+09:00",
              "status": "FT",
              "homeTeamId": 70,
              "homeTeam": "Middlesbrough",
              "awayTeamId": 58,
              "awayTeam": "Millwall",
              "injuriesChecked": true,
              "injuries": [
                {
                  "fixtureId": 1563147,
                  "teamId": 70,
                  "playerId": 18938,
                  "player": "A. Jones",
                  "type": "Missing Fixture",
                  "reason": "Inactive"
                },
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
                  "playerId": 19639,
                  "player": "R. Leonard",
                  "type": "Missing Fixture",
                  "reason": "Hamstring Injury"
                },
                {
                  "fixtureId": 1563147,
                  "teamId": 58,
                  "playerId": 405300,
                  "player": "K. Lisbie",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1563147,
                  "teamId": 58,
                  "playerId": 2752,
                  "player": "M. Luongo",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1563147,
                  "teamId": 58,
                  "playerId": 295233,
                  "player": "M. Servais",
                  "type": "Missing Fixture",
                  "reason": "Hamstring Injury"
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
              "points": 12,
              "goalsDiff": 1,
              "form": "WWLWW",
              "all": {
                "played": 5,
                "wins": 4,
                "draws": 0,
                "losses": 1,
                "goalsFor": 7,
                "goalsAgainst": 6
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
                "wins": 2,
                "draws": 0,
                "losses": 1,
                "goalsFor": 5,
                "goalsAgainst": 6
              }
            },
            {
              "teamId": 542,
              "team": "Alaves",
              "rank": 4,
              "points": 10,
              "goalsDiff": 5,
              "form": "LLWWD",
              "all": {
                "played": 6,
                "wins": 3,
                "draws": 1,
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
              "rank": 5,
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
              "rank": 6,
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
              "rank": 7,
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
              "teamId": 540,
              "team": "Espanyol",
              "rank": 8,
              "points": 7,
              "goalsDiff": 2,
              "form": "LWDLL",
              "all": {
                "played": 6,
                "wins": 2,
                "draws": 1,
                "losses": 3,
                "goalsFor": 9,
                "goalsAgainst": 7
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
                "played": 3,
                "wins": 1,
                "draws": 0,
                "losses": 2,
                "goalsFor": 4,
                "goalsAgainst": 4
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
              "teamId": 728,
              "team": "Rayo Vallecano",
              "rank": 12,
              "points": 7,
              "goalsDiff": -5,
              "form": "WLWLD",
              "all": {
                "played": 6,
                "wins": 2,
                "draws": 1,
                "losses": 3,
                "goalsFor": 10,
                "goalsAgainst": 15
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
                "wins": 0,
                "draws": 0,
                "losses": 3,
                "goalsFor": 4,
                "goalsAgainst": 11
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
              "teamId": 539,
              "team": "Levante",
              "rank": 14,
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
              "rank": 15,
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
              "rank": 16,
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
              "teamId": 532,
              "team": "Valencia",
              "rank": 17,
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
              "rank": 18,
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
              "rank": 19,
              "points": 2,
              "goalsDiff": -3,
              "form": "LLLDD",
              "all": {
                "played": 5,
                "wins": 0,
                "draws": 2,
                "losses": 3,
                "goalsFor": 7,
                "goalsAgainst": 10
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
              "rank": 20,
              "points": 2,
              "goalsDiff": -8,
              "form": "LDLLL",
              "all": {
                "played": 6,
                "wins": 0,
                "draws": 2,
                "losses": 4,
                "goalsFor": 8,
                "goalsAgainst": 16
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
                "played": 3,
                "wins": 0,
                "draws": 2,
                "losses": 1,
                "goalsFor": 4,
                "goalsAgainst": 5
              }
            }
          ],
          "teams": [
            {
              "teamId": 728,
              "team": "Rayo Vallecano",
              "form": "LDLWLW",
              "all": {
                "played": 6,
                "wins": 2,
                "draws": 1,
                "losses": 3,
                "goalsFor": 10,
                "goalsAgainst": 15
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
              "form": "WLLDWL",
              "all": {
                "played": 6,
                "wins": 2,
                "draws": 1,
                "losses": 3,
                "goalsFor": 9,
                "goalsAgainst": 7
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
                "played": 3,
                "wins": 1,
                "draws": 0,
                "losses": 2,
                "goalsFor": 4,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 542,
              "team": "Alaves",
              "form": "WDWWLL",
              "all": {
                "played": 6,
                "wins": 3,
                "draws": 1,
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
              "teamId": 797,
              "team": "Elche",
              "form": "DLLLDL",
              "all": {
                "played": 6,
                "wins": 0,
                "draws": 2,
                "losses": 4,
                "goalsFor": 8,
                "goalsAgainst": 16
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
              "fixtureId": 1570391,
              "kickoff": "2026-09-16T02:00:00+09:00",
              "status": "FT",
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
                  "teamId": 728,
                  "playerId": 128582,
                  "player": "J. de Frutos",
                  "type": "Missing Fixture",
                  "reason": "Red Card"
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
                  "playerId": 182674,
                  "player": "Jofre",
                  "type": "Missing Fixture",
                  "reason": "Groin Injury"
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
              "status": "FT",
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
                  "playerId": 330440,
                  "player": "A. Manas",
                  "type": "Missing Fixture",
                  "reason": "Injury"
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
                  "type": "Missing Fixture",
                  "reason": "Hamstring Injury"
                }
              ],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1570388,
              "kickoff": "2026-09-16T04:30:00+09:00",
              "status": "FT",
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
              "teamId": 194,
              "team": "Ajax",
              "rank": 4,
              "points": 13,
              "goalsDiff": 12,
              "form": "WWLWD",
              "all": {
                "played": 6,
                "wins": 4,
                "draws": 1,
                "losses": 1,
                "goalsFor": 19,
                "goalsAgainst": 7
              },
              "home": {
                "played": 3,
                "wins": 1,
                "draws": 1,
                "losses": 1,
                "goalsFor": 8,
                "goalsAgainst": 6
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
              "goalsDiff": -13,
              "form": "LDLDL",
              "all": {
                "played": 6,
                "wins": 0,
                "draws": 2,
                "losses": 4,
                "goalsFor": 6,
                "goalsAgainst": 19
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
                "wins": 0,
                "draws": 1,
                "losses": 2,
                "goalsFor": 3,
                "goalsAgainst": 10
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
              "form": "WDWLWW",
              "all": {
                "played": 6,
                "wins": 4,
                "draws": 1,
                "losses": 1,
                "goalsFor": 19,
                "goalsAgainst": 7
              },
              "home": {
                "played": 3,
                "wins": 1,
                "draws": 1,
                "losses": 1,
                "goalsFor": 8,
                "goalsAgainst": 6
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
              "form": "LLDLDL",
              "all": {
                "played": 6,
                "wins": 0,
                "draws": 2,
                "losses": 4,
                "goalsFor": 6,
                "goalsAgainst": 19
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
                "wins": 0,
                "draws": 1,
                "losses": 2,
                "goalsFor": 3,
                "goalsAgainst": 10
              }
            }
          ],
          "fixtures": [
            {
              "fixtureId": 1552143,
              "kickoff": "2026-09-16T03:00:00+09:00",
              "status": "FT",
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
              "goalsDiff": 6,
              "form": "LWWWW",
              "all": {
                "played": 6,
                "wins": 4,
                "draws": 0,
                "losses": 2,
                "goalsFor": 13,
                "goalsAgainst": 7
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
                "played": 3,
                "wins": 1,
                "draws": 0,
                "losses": 2,
                "goalsFor": 5,
                "goalsAgainst": 5
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
              "goalsDiff": -1,
              "form": "LLWDD",
              "all": {
                "played": 6,
                "wins": 2,
                "draws": 2,
                "losses": 2,
                "goalsFor": 8,
                "goalsAgainst": 9
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
              "teamId": 252,
              "team": "Aberdeen",
              "rank": 8,
              "points": 7,
              "goalsDiff": -1,
              "form": "WDLLL",
              "all": {
                "played": 6,
                "wins": 2,
                "draws": 1,
                "losses": 3,
                "goalsFor": 6,
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
                "played": 3,
                "wins": 1,
                "draws": 0,
                "losses": 2,
                "goalsFor": 4,
                "goalsAgainst": 5
              }
            },
            {
              "teamId": 249,
              "team": "Hibernian",
              "rank": 9,
              "points": 6,
              "goalsDiff": -3,
              "form": "LLLWW",
              "all": {
                "played": 6,
                "wins": 2,
                "draws": 0,
                "losses": 4,
                "goalsFor": 7,
                "goalsAgainst": 10
              },
              "home": {
                "played": 3,
                "wins": 0,
                "draws": 0,
                "losses": 3,
                "goalsFor": 2,
                "goalsAgainst": 6
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
              "rank": 10,
              "points": 5,
              "goalsDiff": -3,
              "form": "WDLLD",
              "all": {
                "played": 6,
                "wins": 1,
                "draws": 2,
                "losses": 3,
                "goalsFor": 5,
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
                "wins": 0,
                "draws": 2,
                "losses": 1,
                "goalsFor": 2,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 1386,
              "team": "Dundee Utd",
              "rank": 11,
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
              "teamId": 250,
              "team": "Kilmarnock",
              "rank": 12,
              "points": 4,
              "goalsDiff": -9,
              "form": "WDLLL",
              "all": {
                "played": 6,
                "wins": 1,
                "draws": 1,
                "losses": 4,
                "goalsFor": 5,
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
              "teamId": 249,
              "team": "Hibernian",
              "form": "LWWLLL",
              "all": {
                "played": 6,
                "wins": 2,
                "draws": 0,
                "losses": 4,
                "goalsFor": 7,
                "goalsAgainst": 10
              },
              "home": {
                "played": 3,
                "wins": 0,
                "draws": 0,
                "losses": 3,
                "goalsFor": 2,
                "goalsAgainst": 6
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
              "form": "LLLLDW",
              "all": {
                "played": 6,
                "wins": 1,
                "draws": 1,
                "losses": 4,
                "goalsFor": 5,
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
                "played": 3,
                "wins": 1,
                "draws": 1,
                "losses": 1,
                "goalsFor": 4,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 256,
              "team": "Motherwell",
              "form": "WDDWLL",
              "all": {
                "played": 6,
                "wins": 2,
                "draws": 2,
                "losses": 2,
                "goalsFor": 8,
                "goalsAgainst": 9
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
              "form": "WLLLDW",
              "all": {
                "played": 6,
                "wins": 2,
                "draws": 1,
                "losses": 3,
                "goalsFor": 6,
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
                "played": 3,
                "wins": 1,
                "draws": 0,
                "losses": 2,
                "goalsFor": 4,
                "goalsAgainst": 5
              }
            },
            {
              "teamId": 1389,
              "team": "Falkirk",
              "form": "LDLLDW",
              "all": {
                "played": 6,
                "wins": 1,
                "draws": 2,
                "losses": 3,
                "goalsFor": 5,
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
              "form": "LWWWWL",
              "all": {
                "played": 6,
                "wins": 4,
                "draws": 0,
                "losses": 2,
                "goalsFor": 13,
                "goalsAgainst": 7
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
                "played": 3,
                "wins": 1,
                "draws": 0,
                "losses": 2,
                "goalsFor": 5,
                "goalsAgainst": 5
              }
            }
          ],
          "fixtures": [
            {
              "fixtureId": 1556642,
              "kickoff": "2026-09-16T03:45:00+09:00",
              "status": "FT",
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
              "status": "FT",
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
              "status": "FT",
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
              "teamId": 2865,
              "team": "Al Ain",
              "rank": 1,
              "points": 3,
              "goalsDiff": 4,
              "form": "W",
              "all": {
                "played": 1,
                "wins": 1,
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
                "goalsFor": 4,
                "goalsAgainst": 0
              },
              "away": {
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
              "rank": 2,
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
              "teamId": 2933,
              "team": "Al-Qadisiyah FC",
              "rank": 3,
              "points": 3,
              "goalsDiff": 1,
              "form": "W",
              "all": {
                "played": 1,
                "wins": 1,
                "draws": 0,
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
              "rank": 4,
              "points": 3,
              "goalsDiff": 1,
              "form": "W",
              "all": {
                "played": 1,
                "wins": 1,
                "draws": 0,
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
              "rank": 5,
              "points": 3,
              "goalsDiff": 1,
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
              "teamId": 4217,
              "team": "Neftchi",
              "rank": 6,
              "points": 3,
              "goalsDiff": 1,
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
              "teamId": 2938,
              "team": "Al-Ittihad FC",
              "rank": 7,
              "points": 1,
              "goalsDiff": 0,
              "form": "DW",
              "all": {
                "played": 1,
                "wins": 0,
                "draws": 1,
                "losses": 0,
                "goalsFor": 1,
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
                "draws": 1,
                "losses": 0,
                "goalsFor": 1,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 2916,
              "team": "Al Shamal",
              "rank": 8,
              "points": 1,
              "goalsDiff": 0,
              "form": "D",
              "all": {
                "played": 1,
                "wins": 0,
                "draws": 1,
                "losses": 0,
                "goalsFor": 1,
                "goalsAgainst": 1
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
              "rank": 9,
              "points": 1,
              "goalsDiff": 0,
              "form": "DW",
              "all": {
                "played": 1,
                "wins": 0,
                "draws": 1,
                "losses": 0,
                "goalsFor": 1,
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
                "draws": 1,
                "losses": 0,
                "goalsFor": 1,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 2929,
              "team": "Al-Ahli Jeddah",
              "rank": 10,
              "points": 1,
              "goalsDiff": 0,
              "form": "D",
              "all": {
                "played": 1,
                "wins": 0,
                "draws": 1,
                "losses": 0,
                "goalsFor": 1,
                "goalsAgainst": 1
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
              "rank": 11,
              "points": 0,
              "goalsDiff": -1,
              "form": "L",
              "all": {
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 1,
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
                "goalsFor": 1,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 2903,
              "team": "Al-Gharafa",
              "rank": 12,
              "points": 0,
              "goalsDiff": -1,
              "form": "L",
              "all": {
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 1,
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
                "goalsFor": 1,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 8009,
              "team": "Al Quwa Al Jawiya",
              "rank": 13,
              "points": 0,
              "goalsDiff": -1,
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
            },
            {
              "teamId": 2737,
              "team": "Tractor Sazi",
              "rank": 14,
              "points": 0,
              "goalsDiff": -1,
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
            },
            {
              "teamId": 2895,
              "team": "Al Sadd",
              "rank": 15,
              "points": 0,
              "goalsDiff": -3,
              "form": "L",
              "all": {
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 0,
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
                "draws": 0,
                "losses": 1,
                "goalsFor": 0,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 2939,
              "team": "Al-Nassr",
              "rank": 16,
              "points": 0,
              "goalsDiff": -4,
              "form": "L",
              "all": {
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 0,
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
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 0,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 290,
              "team": "Kashima",
              "rank": 1,
              "points": 3,
              "goalsDiff": 6,
              "form": "W",
              "all": {
                "played": 1,
                "wins": 1,
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
                "goalsFor": 7,
                "goalsAgainst": 1
              },
              "away": {
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
              "rank": 2,
              "points": 3,
              "goalsDiff": 3,
              "form": "WW",
              "all": {
                "played": 1,
                "wins": 1,
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
                "goalsFor": 4,
                "goalsAgainst": 1
              },
              "away": {
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
              "rank": 3,
              "points": 3,
              "goalsDiff": 2,
              "form": "W",
              "all": {
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 6,
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
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 6,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 830,
              "team": "Beijing Guoan",
              "rank": 4,
              "points": 3,
              "goalsDiff": 2,
              "form": "W",
              "all": {
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 3,
                "goalsAgainst": 1
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
              "points": 3,
              "goalsDiff": 1,
              "form": "W",
              "all": {
                "played": 1,
                "wins": 1,
                "draws": 0,
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
              "points": 3,
              "goalsDiff": 1,
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
              "teamId": 2523,
              "team": "Johor Darul Takzim FC",
              "rank": 7,
              "points": 1,
              "goalsDiff": 0,
              "form": "D",
              "all": {
                "played": 1,
                "wins": 0,
                "draws": 1,
                "losses": 0,
                "goalsFor": 1,
                "goalsAgainst": 1
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
              "points": 1,
              "goalsDiff": 0,
              "form": "D",
              "all": {
                "played": 1,
                "wins": 0,
                "draws": 1,
                "losses": 0,
                "goalsFor": 1,
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
                "draws": 1,
                "losses": 0,
                "goalsFor": 1,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 289,
              "team": "Vissel Kobe",
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
              "teamId": 2789,
              "team": "Port FC",
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
              "teamId": 281,
              "team": "Kashiwa Reysol",
              "rank": 11,
              "points": 0,
              "goalsDiff": -1,
              "form": "L",
              "all": {
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 1,
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
                "goalsFor": 1,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 302,
              "team": "Kyoto Sanga",
              "rank": 12,
              "points": 0,
              "goalsDiff": -1,
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
            },
            {
              "teamId": 2776,
              "team": "Ratchaburi",
              "rank": 13,
              "points": 0,
              "goalsDiff": -2,
              "form": "L",
              "all": {
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 4,
                "goalsAgainst": 6
              },
              "home": {
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 4,
                "goalsAgainst": 6
              },
              "away": {
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
              "rank": 14,
              "points": 0,
              "goalsDiff": -2,
              "form": "L",
              "all": {
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 1,
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
                "draws": 0,
                "losses": 1,
                "goalsFor": 1,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 16400,
              "team": "Công An Nhân Dân",
              "rank": 15,
              "points": 0,
              "goalsDiff": -3,
              "form": "LW",
              "all": {
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 1,
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
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 1,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 946,
              "team": "Newcastle Jets",
              "rank": 16,
              "points": 0,
              "goalsDiff": -6,
              "form": "L",
              "all": {
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 1,
                "goalsAgainst": 7
              },
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
                "goalsFor": 1,
                "goalsAgainst": 7
              }
            }
          ],
          "teams": [
            {
              "teamId": 2865,
              "team": "Al Ain",
              "form": "W",
              "all": {
                "played": 1,
                "wins": 1,
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
                "goalsFor": 4,
                "goalsAgainst": 0
              },
              "away": {
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
              "form": "L",
              "all": {
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 0,
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
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 0,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 2932,
              "team": "Al-Hilal Saudi FC",
              "form": "W",
              "all": {
                "played": 1,
                "wins": 1,
                "draws": 0,
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
              "form": "L",
              "all": {
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 1,
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
                "goalsFor": 1,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 2762,
              "team": "Jeonbuk Motors",
              "form": "W",
              "all": {
                "played": 1,
                "wins": 1,
                "draws": 0,
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
              "form": "L",
              "all": {
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 1,
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
                "goalsFor": 1,
                "goalsAgainst": 2
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
              "status": "FT",
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
              "status": "FT",
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
              "status": "FT",
              "homeTeamId": 2762,
              "homeTeam": "Jeonbuk Motors",
              "awayTeamId": 281,
              "awayTeam": "Kashiwa Reysol",
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
                    "Kim Tae-Hwan",
                    "Cho Wi-Je",
                    "Kim Young-Bin",
                    "Kim Tae-Hyun",
                    "João Gamboa",
                    "Kim Jin-Gyu",
                    "Lee Dong-Jun",
                    "Lee Yeong-Jae",
                    "Lee Seung-Woo",
                    "Tiago Orobó"
                  ]
                },
                {
                  "teamId": 281,
                  "team": "Kashiwa Reysol",
                  "formation": "3-4-2-1",
                  "coach": "Ricardo Rodríguez",
                  "starters": [
                    "R. Kojima",
                    "S. Baba",
                    "T. Koga",
                    "H. Mitsumaru",
                    "Y. Yamanouchi",
                    "Y. Konishi",
                    "N. Nakagawa",
                    "K. Yuba",
                    "Y. Koizumi",
                    "K. Yuruki",
                    "Y. Kakita"
                  ]
                }
              ]
            },
            {
              "fixtureId": 1629926,
              "kickoff": "2026-09-16T21:15:00+09:00",
              "status": "2H",
              "homeTeamId": 2789,
              "homeTeam": "Port FC",
              "awayTeamId": 289,
              "awayTeam": "Vissel Kobe",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": true,
              "lineups": [
                {
                  "teamId": 2789,
                  "team": "Port FC",
                  "formation": "4-4-2",
                  "coach": "S. Treephan",
                  "starters": [
                    "M. Falkesgaard",
                    "P. Akkratum",
                    "M. Bihr",
                    "Marcel Scalese",
                    "Matheus Lins",
                    "Lucas Tocantins",
                    "N. Shimura",
                    "P. Chamrasamee",
                    "Bruno",
                    "Kaká Mendes",
                    "Issam Al Sabhi"
                  ]
                },
                {
                  "teamId": 289,
                  "team": "Vissel Kobe",
                  "formation": "4-3-3",
                  "coach": "M. Skibbe",
                  "starters": [
                    "S. Gonda",
                    "I. Takahashi",
                    "T. Yamakawa",
                    "Caetano",
                    "Diego",
                    "Y. Goke",
                    "Y. Kuwasaki",
                    "Y. Ideguchi",
                    "N. Iino",
                    "R. Komatsu",
                    "K. Nagato"
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "date": "2026-09-17",
      "updatedAt": "2026-09-16T21:14:12.837Z",
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
              "teamId": 530,
              "team": "Atletico Madrid",
              "rank": 3,
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
              "rank": 4,
              "points": 13,
              "goalsDiff": 3,
              "form": "WWDLW",
              "all": {
                "played": 6,
                "wins": 4,
                "draws": 1,
                "losses": 1,
                "goalsFor": 9,
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
                "played": 3,
                "wins": 2,
                "draws": 1,
                "losses": 0,
                "goalsFor": 5,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 543,
              "team": "Real Betis",
              "rank": 5,
              "points": 12,
              "goalsDiff": 1,
              "form": "WWLWW",
              "all": {
                "played": 5,
                "wins": 4,
                "draws": 0,
                "losses": 1,
                "goalsFor": 7,
                "goalsAgainst": 6
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
                "wins": 2,
                "draws": 0,
                "losses": 1,
                "goalsFor": 5,
                "goalsAgainst": 6
              }
            },
            {
              "teamId": 542,
              "team": "Alaves",
              "rank": 6,
              "points": 10,
              "goalsDiff": 5,
              "form": "LLWWD",
              "all": {
                "played": 6,
                "wins": 3,
                "draws": 1,
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
                "played": 2,
                "wins": 0,
                "draws": 1,
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
              "teamId": 540,
              "team": "Espanyol",
              "rank": 8,
              "points": 7,
              "goalsDiff": 2,
              "form": "LWDLL",
              "all": {
                "played": 6,
                "wins": 2,
                "draws": 1,
                "losses": 3,
                "goalsFor": 9,
                "goalsAgainst": 7
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
                "played": 3,
                "wins": 1,
                "draws": 0,
                "losses": 2,
                "goalsFor": 4,
                "goalsAgainst": 4
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
              "teamId": 728,
              "team": "Rayo Vallecano",
              "rank": 11,
              "points": 7,
              "goalsDiff": -5,
              "form": "WLWLD",
              "all": {
                "played": 6,
                "wins": 2,
                "draws": 1,
                "losses": 3,
                "goalsFor": 10,
                "goalsAgainst": 15
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
                "wins": 0,
                "draws": 0,
                "losses": 3,
                "goalsFor": 4,
                "goalsAgainst": 11
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
              "teamId": 727,
              "team": "Osasuna",
              "rank": 13,
              "points": 7,
              "goalsDiff": -7,
              "form": "LLLWW",
              "all": {
                "played": 6,
                "wins": 2,
                "draws": 1,
                "losses": 3,
                "goalsFor": 5,
                "goalsAgainst": 12
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
                "played": 3,
                "wins": 1,
                "draws": 0,
                "losses": 2,
                "goalsFor": 4,
                "goalsAgainst": 10
              }
            },
            {
              "teamId": 539,
              "team": "Levante",
              "rank": 14,
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
              "rank": 15,
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
              "rank": 16,
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
              "teamId": 532,
              "team": "Valencia",
              "rank": 17,
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
              "rank": 18,
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
              "rank": 19,
              "points": 2,
              "goalsDiff": -3,
              "form": "LLLDD",
              "all": {
                "played": 5,
                "wins": 0,
                "draws": 2,
                "losses": 3,
                "goalsFor": 7,
                "goalsAgainst": 10
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
              "rank": 20,
              "points": 2,
              "goalsDiff": -8,
              "form": "LDLLL",
              "all": {
                "played": 6,
                "wins": 0,
                "draws": 2,
                "losses": 4,
                "goalsFor": 8,
                "goalsAgainst": 16
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
                "played": 3,
                "wins": 0,
                "draws": 2,
                "losses": 1,
                "goalsFor": 4,
                "goalsAgainst": 5
              }
            }
          ],
          "teams": [
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
              "teamId": 727,
              "team": "Osasuna",
              "form": "DWWLLL",
              "all": {
                "played": 6,
                "wins": 2,
                "draws": 1,
                "losses": 3,
                "goalsFor": 5,
                "goalsAgainst": 12
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
                "played": 3,
                "wins": 1,
                "draws": 0,
                "losses": 2,
                "goalsFor": 4,
                "goalsAgainst": 10
              }
            },
            {
              "teamId": 544,
              "team": "Deportivo La Coruna",
              "form": "DDWWDL",
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
              "teamId": 536,
              "team": "Sevilla",
              "form": "WWLDWW",
              "all": {
                "played": 6,
                "wins": 4,
                "draws": 1,
                "losses": 1,
                "goalsFor": 9,
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
                "played": 3,
                "wins": 2,
                "draws": 1,
                "losses": 0,
                "goalsFor": 5,
                "goalsAgainst": 2
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
            }
          ],
          "fixtures": [
            {
              "fixtureId": 1570384,
              "kickoff": "2026-09-17T02:00:00+09:00",
              "status": "FT",
              "homeTeamId": 530,
              "homeTeam": "Atletico Madrid",
              "awayTeamId": 727,
              "awayTeam": "Osasuna",
              "injuriesChecked": true,
              "injuries": [
                {
                  "fixtureId": 1570384,
                  "teamId": 530,
                  "playerId": 6009,
                  "player": "J. Alvarez",
                  "type": "Missing Fixture",
                  "reason": "Muscle Injury"
                },
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
                  "playerId": 8492,
                  "player": "A. Sorloth",
                  "type": "Missing Fixture",
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
                  "type": "Missing Fixture",
                  "reason": "Hamstring Injury"
                }
              ],
              "lineupsChecked": true,
              "lineups": [
                {
                  "teamId": 530,
                  "team": "Atletico Madrid",
                  "formation": "4-4-2",
                  "coach": "D. Simeone",
                  "starters": [
                    "J. Oblak",
                    "Marcos Llorente",
                    "C. Romero",
                    "Robin Le Normand",
                    "Álex Grimaldo",
                    "Lee Kang-In",
                    "Koke",
                    "J. Cardoso",
                    "Álex Baena",
                    "J. David",
                    "A. Lookman"
                  ]
                },
                {
                  "teamId": 727,
                  "team": "Osasuna",
                  "formation": "5-4-1",
                  "coach": "Luis Miguel Ramis",
                  "starters": [
                    "Aitor Fernández",
                    "Íñigo Arguibide",
                    "R. Yeboah",
                    "F. Boyomo",
                    "U. Santos",
                    "Abel Bretones",
                    "Jonathan Dubasin",
                    "Lucas Torró",
                    "Asier Osambela",
                    "Raul Moro",
                    "Raúl García"
                  ]
                }
              ]
            },
            {
              "fixtureId": 1570387,
              "kickoff": "2026-09-17T02:00:00+09:00",
              "status": "FT",
              "homeTeamId": 544,
              "homeTeam": "Deportivo La Coruna",
              "awayTeamId": 536,
              "awayTeam": "Sevilla",
              "injuriesChecked": true,
              "injuries": [
                {
                  "fixtureId": 1570387,
                  "teamId": 544,
                  "playerId": 392417,
                  "player": "T. Gijselhart",
                  "type": "Missing Fixture",
                  "reason": "Transfer negotiations"
                },
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
                  "playerId": 174927,
                  "player": "A. Sangante",
                  "type": "Missing Fixture",
                  "reason": "Ankle Injury"
                },
                {
                  "fixtureId": 1570387,
                  "teamId": 536,
                  "playerId": 48471,
                  "player": "R. Vargas",
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
                    "Adrià Alti",
                    "J. Giménez",
                    "Miguel Loureiro",
                    "Angeliño",
                    "Luismi Cruz",
                    "L. Amatucci",
                    "Riki Rodríguez",
                    "Peke",
                    "B. Nsongo",
                    "P. Aubameyang"
                  ]
                },
                {
                  "teamId": 536,
                  "team": "Sevilla",
                  "formation": "4-2-3-1",
                  "coach": "Luis García",
                  "starters": [
                    "O. Vlachodimos",
                    "Juan Iglesias",
                    "Andrés Castrín",
                    "Kike Salas",
                    "G. Suazo",
                    "L. Agoumé",
                    "Y. Fofana",
                    "M. Sierra",
                    "Jon Guridi",
                    "Félix Correia",
                    "L. Stassin"
                  ]
                }
              ]
            },
            {
              "fixtureId": 1570389,
              "kickoff": "2026-09-17T04:30:00+09:00",
              "status": "PST",
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
                  "teamId": 539,
                  "playerId": 313651,
                  "player": "H. Sotelo",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1570389,
                  "teamId": 531,
                  "playerId": 437643,
                  "player": "P. Canales",
                  "type": "Missing Fixture",
                  "reason": "Muscle Injury"
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
                }
              ],
              "lineupsChecked": true,
              "lineups": [
                {
                  "teamId": 539,
                  "team": "Levante",
                  "formation": "4-3-3",
                  "coach": "Luís Castro",
                  "starters": [
                    "M. Ryan",
                    "Nacho Pérez",
                    "Dela",
                    "IfeanyiIfeanyi Ndukwe",
                    "Manu Sánchez",
                    "Jon Ander Olasagasti",
                    "Oriol Rey",
                    "E. Bardeli",
                    "Paco Cortés",
                    "Iván Romero",
                    "T. Fernández"
                  ]
                },
                {
                  "teamId": 531,
                  "team": "Athletic Club",
                  "formation": "4-2-3-1",
                  "coach": "E. Terzić",
                  "starters": [
                    "Unai Simón",
                    "J. Louis-Jean",
                    "Aitor Paredes",
                    "Aymeric Laporte",
                    "Yuri",
                    "Ruíz de Galarreta",
                    "Mikel Jauregizar",
                    "Robert Navarro",
                    "Oihan Sancet",
                    "Álex Berenguer",
                    "Maroan Sannadi"
                  ]
                }
              ]
            },
            {
              "fixtureId": 1570385,
              "kickoff": "2026-09-17T04:30:00+09:00",
              "status": "2H",
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
                  "teamId": 4665,
                  "playerId": 41157,
                  "player": "A. Almeida",
                  "type": "Missing Fixture",
                  "reason": "Red Card"
                },
                {
                  "fixtureId": 1570385,
                  "teamId": 4665,
                  "playerId": 408875,
                  "player": "S. Eriksson",
                  "type": "Missing Fixture",
                  "reason": "Shoulder Injury"
                },
                {
                  "fixtureId": 1570385,
                  "teamId": 4665,
                  "playerId": 47209,
                  "player": "A. Martin",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                }
              ],
              "lineupsChecked": true,
              "lineups": [
                {
                  "teamId": 529,
                  "team": "Barcelona",
                  "formation": "4-3-3",
                  "coach": "H. Flick",
                  "starters": [
                    "Joan García",
                    "Eric García",
                    "A. Christensen",
                    "Gerard Martín",
                    "João Cancelo",
                    "Dani Olmo",
                    "Rodri",
                    "Pedri",
                    "Lamine Yamal",
                    "Raphinha",
                    "K. Adeyemi"
                  ]
                },
                {
                  "teamId": 4665,
                  "team": "Racing Santander",
                  "formation": "4-1-3-2",
                  "coach": "José Alberto López",
                  "starters": [
                    "Julen Agirrezabala",
                    "Manu Hernando",
                    "Pedro Felipe",
                    "Facundo González",
                    "Aarón Martín",
                    "M. Prati",
                    "Sergio Canales",
                    "M. Gueye",
                    "Íñigo Sainz-Maza",
                    "Asier Villalibre",
                    "Juan Carlos Arana"
                  ]
                }
              ]
            }
          ]
        },
        {
          "key": "UEL",
          "leagueId": 3,
          "season": "2026",
          "standings": [
            {
              "teamId": 628,
              "team": "Sparta Praha",
              "rank": 1,
              "points": 3,
              "goalsDiff": 3,
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
              "teamId": 3402,
              "team": "Omonia Nicosia",
              "rank": 2,
              "points": 3,
              "goalsDiff": 1,
              "form": "WWLWD",
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
              "teamId": 554,
              "team": "Anderlecht",
              "rank": 3,
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
              "teamId": 201,
              "team": "AZ Alkmaar",
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
              "teamId": 211,
              "team": "Benfica",
              "rank": 5,
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
              "rank": 6,
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
              "teamId": 4360,
              "team": "Celje",
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
              "teamId": 548,
              "team": "Real Sociedad",
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
              "teamId": 94,
              "team": "Rennes",
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
              "teamId": 571,
              "team": "Red Bull Salzburg",
              "rank": 29,
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
              "teamId": 637,
              "team": "Sturm Graz",
              "rank": 30,
              "points": 0,
              "goalsDiff": 0,
              "form": "",
              "all": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "home": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "away": {
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
              "teamId": 4799,
              "team": "Torreense",
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
              "teamId": 1393,
              "team": "Union St. Gilloise",
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
              "teamId": 567,
              "team": "Plzen",
              "rank": 34,
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
              "teamId": 538,
              "team": "Celta Vigo",
              "rank": 35,
              "points": 0,
              "goalsDiff": -1,
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
            },
            {
              "teamId": 3683,
              "team": "Ararat-Armenia",
              "rank": 36,
              "points": 0,
              "goalsDiff": -3,
              "form": "LWD",
              "all": {
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 1,
                "goalsAgainst": 4
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
              "form": "DWLWW",
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
                "wins": 3,
                "draws": 0,
                "losses": 0,
                "goalsFor": 6,
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
            },
            {
              "teamId": 3683,
              "team": "Ararat-Armenia",
              "form": "DWL",
              "all": {
                "played": 3,
                "wins": 1,
                "draws": 1,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 5
              },
              "home": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 2,
                "goalsAgainst": 4
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
              "teamId": 168,
              "team": "Bayer Leverkusen",
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
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 2,
                "goalsAgainst": 0
              },
              "away": {
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
              "teamId": 489,
              "team": "AC Milan",
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
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 0,
                "goalsAgainst": 2
              },
              "away": {
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
              "form": "LWWDWWW",
              "all": {
                "played": 7,
                "wins": 5,
                "draws": 1,
                "losses": 1,
                "goalsFor": 21,
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
                "played": 4,
                "wins": 2,
                "draws": 1,
                "losses": 1,
                "goalsFor": 7,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 553,
              "team": "Olympiakos Piraeus",
              "form": "W",
              "all": {
                "played": 1,
                "wins": 1,
                "draws": 0,
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
              "form": "WDWWL",
              "all": {
                "played": 5,
                "wins": 3,
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
                "goalsAgainst": 1
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
              "teamId": 554,
              "team": "Anderlecht",
              "form": "DWWWWWL",
              "all": {
                "played": 7,
                "wins": 5,
                "draws": 1,
                "losses": 1,
                "goalsFor": 15,
                "goalsAgainst": 6
              },
              "home": {
                "played": 4,
                "wins": 3,
                "draws": 0,
                "losses": 1,
                "goalsFor": 10,
                "goalsAgainst": 5
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
              "form": "W",
              "all": {
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 2,
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
                "goalsFor": 2,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 563,
              "team": "Hapoel Beer Sheva",
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
              "teamId": 620,
              "team": "Dinamo Zagreb",
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
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 637,
              "team": "Sturm Graz",
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
              "teamId": 94,
              "team": "Rennes",
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
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 746,
              "team": "Sunderland",
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
              "teamId": 201,
              "team": "AZ Alkmaar",
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
              "fixtureId": 1636312,
              "kickoff": "2026-09-17T01:45:00+09:00",
              "status": "FT",
              "homeTeamId": 3402,
              "homeTeam": "Omonia Nicosia",
              "awayTeamId": 538,
              "awayTeam": "Celta Vigo",
              "injuriesChecked": true,
              "injuries": [
                {
                  "fixtureId": 1636312,
                  "teamId": 3402,
                  "playerId": 1186,
                  "player": "B. Akintola",
                  "type": "Missing Fixture",
                  "reason": "Inactive"
                },
                {
                  "fixtureId": 1636312,
                  "teamId": 3402,
                  "playerId": 540,
                  "player": "C. Eiting",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1636312,
                  "teamId": 3402,
                  "playerId": 292463,
                  "player": "F. Kitsos",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
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
                  "playerId": 47445,
                  "player": "I. Aspas",
                  "type": "Missing Fixture",
                  "reason": "Muscle Injury"
                }
              ],
              "lineupsChecked": true,
              "lineups": [
                {
                  "teamId": 3402,
                  "team": "Omonia Nicosia",
                  "formation": "4-2-3-1",
                  "coach": "Henning Berg",
                  "starters": [
                    "Fabiano",
                    "Jean-Kévin Duverne",
                    "Senou Coulibaly",
                    "Ľubomír Šatka",
                    "Jure Balkovec",
                    "Panagiotis Andreou",
                    "Mateo Marić",
                    "Ewandro Costa",
                    "Muamer Tanković",
                    "Jaden Montnor",
                    "Loïs Diony"
                  ]
                },
                {
                  "teamId": 538,
                  "team": "Celta Vigo",
                  "formation": "3-4-1-2",
                  "coach": "Claudio Giraldez",
                  "starters": [
                    "Ionuț Radu",
                    "Javi Rodríguez",
                    "Carl Starfelt",
                    "Marcos Alonso",
                    "Álvaro Núñez",
                    "Miguel Román",
                    "Sergio Carreira",
                    "Couhaib Driouech",
                    "Hugo Burcio",
                    "Pablo Durán",
                    "Ferrán Jutglà"
                  ]
                }
              ]
            },
            {
              "fixtureId": 1636217,
              "kickoff": "2026-09-17T01:45:00+09:00",
              "status": "FT",
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
                  "playerId": 285,
                  "player": "K. Hoever",
                  "type": "Missing Fixture",
                  "reason": "Hip Injury"
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
                }
              ],
              "lineupsChecked": true,
              "lineups": [
                {
                  "teamId": 3683,
                  "team": "Ararat-Armenia",
                  "formation": "4-3-3",
                  "coach": "Tulipa",
                  "starters": [
                    "João Bravim",
                    "Junior Julio",
                    "Bruno Wilson",
                    "Alexandros Malis",
                    "Edgar Grigoryan",
                    "Hugo Oliveira",
                    "Karen Muradyan",
                    "Bernardo Dias",
                    "Artur Serobyan",
                    "Sandro Lima",
                    "Zidane Banjaqui"
                  ]
                },
                {
                  "teamId": 628,
                  "team": "Sparta Praha",
                  "formation": "4-3-3",
                  "coach": "Brian Priske",
                  "starters": [
                    "Jakub Surovčík",
                    "Martin Suchomel",
                    "Loïc Mbe Soh",
                    "Tobias Kvalvagnes Guddal",
                    "Matěj Ryneš",
                    "Adam Karabec",
                    "Roman Macek",
                    "Hugo Sochurek",
                    "John Mercado",
                    "Jonatan Braut Brunes",
                    "Josimar Alcócer"
                  ]
                }
              ]
            },
            {
              "fixtureId": 1636225,
              "kickoff": "2026-09-17T04:00:00+09:00",
              "status": "FT",
              "homeTeamId": 168,
              "homeTeam": "Bayer Leverkusen",
              "awayTeamId": 4360,
              "awayTeam": "Celje",
              "injuriesChecked": true,
              "injuries": [
                {
                  "fixtureId": 1636225,
                  "teamId": 168,
                  "playerId": 343320,
                  "player": "E. Ben Seghir",
                  "type": "Missing Fixture",
                  "reason": "Thigh Injury"
                },
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
                  "playerId": 161747,
                  "player": "G. Doue",
                  "type": "Missing Fixture",
                  "reason": "Inactive"
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
                  "teamId": 168,
                  "playerId": 380587,
                  "player": "I. Maza",
                  "type": "Questionable",
                  "reason": "Illness"
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
                },
                {
                  "fixtureId": 1636225,
                  "teamId": 4360,
                  "playerId": 25102,
                  "player": "M. Kvesic",
                  "type": "Questionable",
                  "reason": "Inactive"
                },
                {
                  "fixtureId": 1636225,
                  "teamId": 4360,
                  "playerId": 325384,
                  "player": "A. Tutyskinas",
                  "type": "Questionable",
                  "reason": "Inactive"
                }
              ],
              "lineupsChecked": true,
              "lineups": [
                {
                  "teamId": 168,
                  "team": "Bayer Leverkusen",
                  "formation": "4-2-3-1",
                  "coach": "Carles Martinez",
                  "starters": [
                    "Mark Flekken",
                    "Lucas Vázquez",
                    "Loïc Badé",
                    "Edmond Tapsoba",
                    "Facundo Medina",
                    "Robert Andrich",
                    "Aleix García",
                    "Martin Terrier",
                    "Malik Tillman",
                    "Moussa Diaby",
                    "Patrik Schick"
                  ]
                },
                {
                  "teamId": 4360,
                  "team": "Celje",
                  "formation": "4-2-3-1",
                  "coach": "Vitor Campelos",
                  "starters": [
                    "Žan-Luk Leban",
                    "Pijus Širvys",
                    "Łukasz Bejger",
                    "Artemijus Tutyškinas",
                    "Milot Avdyli",
                    "Luka Tičić",
                    "Mark Zabukovnik",
                    "Yaya Dukuly",
                    "Svit Sešlar",
                    "Benjamin Verbič",
                    "Armandas Kučys"
                  ]
                }
              ]
            },
            {
              "fixtureId": 1636207,
              "kickoff": "2026-09-17T04:00:00+09:00",
              "status": "FT",
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
                    "Filippo Terracciano",
                    "Koni De Winter",
                    "Strahinja Pavlović",
                    "Samuel Chukwueze",
                    "Ardon Jashari",
                    "Yunus Musah",
                    "Davide Bartesaghi",
                    "Omari Hutchinson",
                    "Alphadjo Cissè",
                    "Gonçalo Ramos"
                  ]
                },
                {
                  "teamId": 211,
                  "team": "Benfica",
                  "formation": "4-2-3-1",
                  "coach": "Marco Silva",
                  "starters": [
                    "Anatoliy Trubin",
                    "Daniel Banjaqui",
                    "Alessandro Circati",
                    "Tomás Araújo",
                    "Souffian El Karouani",
                    "Fredrik Aursnes",
                    "João Palhinha",
                    "Dodi Lukebakio",
                    "Georgiy Sudakov",
                    "Jakub Kamiński",
                    "Jhon Durán"
                  ]
                }
              ]
            },
            {
              "fixtureId": 1636309,
              "kickoff": "2026-09-17T04:00:00+09:00",
              "status": "FT",
              "homeTeamId": 553,
              "homeTeam": "Olympiakos Piraeus",
              "awayTeamId": 336,
              "awayTeam": "Jagiellonia",
              "injuriesChecked": true,
              "injuries": [
                {
                  "fixtureId": 1636309,
                  "teamId": 553,
                  "playerId": 195580,
                  "player": "Clayton",
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
                  "teamId": 553,
                  "playerId": 49888,
                  "player": "Y. Yazici",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
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
                  "playerId": 33236,
                  "player": "Y. Kobayashi",
                  "type": "Missing Fixture",
                  "reason": "Injury"
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
                  "reason": "Injury"
                }
              ],
              "lineupsChecked": true,
              "lineups": [
                {
                  "teamId": 553,
                  "team": "Olympiakos Piraeus",
                  "formation": "4-2-3-1",
                  "coach": "Imanol Alguacil",
                  "starters": [
                    "Stefan Ortega",
                    "Manolis Saliakas",
                    "Panagiotis Retsos",
                    "Lorenzo Pirola",
                    "Onyemaechi Bruno",
                    "Santiago Hezze",
                    "Remo Freuler",
                    "Jota Silva",
                    "Chiquinho",
                    "Gelson Martins",
                    "Armando González"
                  ]
                },
                {
                  "teamId": 336,
                  "team": "Jagiellonia",
                  "formation": "4-3-3",
                  "coach": "Adrian Siemieniec",
                  "starters": [
                    "Sławomir Abramowicz",
                    "Norbert Wojtuszek",
                    "Bernardo Vital",
                    "Apostolos Konstantopoulos",
                    "Guilherme Montóia",
                    "Jesús Imaz",
                    "Taras Romanczuk",
                    "Ferslev Anders Klynge",
                    "Rodrigo Conceição",
                    "Nik Prelec",
                    "Kajetan Szmyt"
                  ]
                }
              ]
            },
            {
              "fixtureId": 1636212,
              "kickoff": "2026-09-17T04:00:00+09:00",
              "status": "FT",
              "homeTeamId": 554,
              "homeTeam": "Anderlecht",
              "awayTeamId": 80,
              "awayTeam": "Lyon",
              "injuriesChecked": true,
              "injuries": [
                {
                  "fixtureId": 1636212,
                  "teamId": 554,
                  "playerId": 84081,
                  "player": "G. Biancone",
                  "type": "Missing Fixture",
                  "reason": "Inactive"
                },
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
                  "playerId": 204088,
                  "player": "I. Koutsoupias",
                  "type": "Missing Fixture",
                  "reason": "Off the roster"
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
                  "playerId": 9700,
                  "player": "Abner Vinicius",
                  "type": "Missing Fixture",
                  "reason": "Inactive"
                },
                {
                  "fixtureId": 1636212,
                  "teamId": 80,
                  "playerId": 623922,
                  "player": "A. Hamdani",
                  "type": "Missing Fixture",
                  "reason": "Inactive"
                }
              ],
              "lineupsChecked": true,
              "lineups": [
                {
                  "teamId": 554,
                  "team": "Anderlecht",
                  "formation": "4-4-2",
                  "coach": "Vitor Bruno",
                  "starters": [
                    "Colin Coosemans",
                    "Ali Maamar",
                    "Andrew Omobamidele",
                    "Léo Pétrot",
                    "Ludwig Augustinsson",
                    "Lukáš Ambros",
                    "Enric Llansana",
                    "Romeo Amane",
                    "Marten Winkler",
                    "Mihajlo Cvetković",
                    "Thelo Aasgaard"
                  ]
                },
                {
                  "teamId": 80,
                  "team": "Lyon",
                  "formation": "4-3-3",
                  "coach": "Paulo Fonseca",
                  "starters": [
                    "Rémy Descamps",
                    "Ruben Kluivert",
                    "Clinton Mata",
                    "Moussa Niakhaté",
                    "Mohamed Ouédraogo",
                    "Tanner Tessmann",
                    "Tyler Morton",
                    "Noah Nartey",
                    "Kaïl Boudache",
                    "Loïs Openda",
                    "Keito Nakamura"
                  ]
                }
              ]
            },
            {
              "fixtureId": 1636265,
              "kickoff": "2026-09-17T04:00:00+09:00",
              "status": "FT",
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
                  "playerId": 80354,
                  "player": "Lucas Ventura",
                  "type": "Missing Fixture",
                  "reason": "Inactive"
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
                  "playerId": 162269,
                  "player": "I. Rotman",
                  "type": "Missing Fixture",
                  "reason": "Inactive"
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
                  "playerId": 182434,
                  "player": "D. Beljo",
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
                  "playerId": 14301,
                  "player": "S. Radeljic",
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
                },
                {
                  "fixtureId": 1636265,
                  "teamId": 620,
                  "playerId": 14410,
                  "player": "B. Goda",
                  "type": "Questionable",
                  "reason": "Inactive"
                },
                {
                  "fixtureId": 1636265,
                  "teamId": 620,
                  "playerId": 371912,
                  "player": "D. Rodriguez",
                  "type": "Questionable",
                  "reason": "Inactive"
                }
              ],
              "lineupsChecked": true,
              "lineups": [
                {
                  "teamId": 563,
                  "team": "Hapoel Beer Sheva",
                  "formation": "4-3-3",
                  "coach": "Ran Kozuch",
                  "starters": [
                    "Ofir Marciano",
                    "Guy Mizrahi",
                    "Miguel Vítor",
                    "Matan Baltaxa",
                    "Pedro Amador",
                    "Forson Amankwah",
                    "Niv Yehoshua",
                    "Zahi Ahmed",
                    "Javon East",
                    "Igor Zlatanović",
                    "Yonas Malede"
                  ]
                },
                {
                  "teamId": 620,
                  "team": "Dinamo Zagreb",
                  "formation": "4-1-4-1",
                  "coach": "Mario Kovacevic",
                  "starters": [
                    "Dominik Kotarski",
                    "Niko Galešić",
                    "Sergi Domínguez",
                    "Scott McKenna",
                    "Bruno Goda",
                    "Josip Mišić",
                    "Mateo Lisica",
                    "Luka Stojković",
                    "Lukas Kačavenda",
                    "Mislav Oršić",
                    "Arber Hoxha"
                  ]
                }
              ]
            },
            {
              "fixtureId": 1636341,
              "kickoff": "2026-09-17T04:00:00+09:00",
              "status": "FT",
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
                  "playerId": 216761,
                  "player": "S. Jatta",
                  "type": "Missing Fixture",
                  "reason": "Inactive"
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
                  "playerId": 343211,
                  "player": "E. Soglo",
                  "type": "Missing Fixture",
                  "reason": "Muscle Injury"
                },
                {
                  "fixtureId": 1636341,
                  "teamId": 637,
                  "playerId": 158614,
                  "player": "S. Wlodarczyk",
                  "type": "Missing Fixture",
                  "reason": "Off the roster"
                }
              ],
              "lineupsChecked": true,
              "lineups": [
                {
                  "teamId": 637,
                  "team": "Sturm Graz",
                  "formation": "5-3-2",
                  "coach": "Fabio Ingolitsch",
                  "starters": [
                    "Daniil Khudyakov",
                    "Jurgen Heil",
                    "Albert Vallci",
                    "Joshua Quarshie",
                    "Paul Koller",
                    "Luís Balbo",
                    "Luca Weinhandl",
                    "Valmir Matoshi",
                    "Jacob Hödl",
                    "Belmin Beganović",
                    "Gizo Mamageishvili"
                  ]
                },
                {
                  "teamId": 94,
                  "team": "Rennes",
                  "formation": "4-1-4-1",
                  "coach": "Franck Haise",
                  "starters": [
                    "Brice Samba",
                    "Bryan Reynolds",
                    "Charlie Cresswell",
                    "Anthony Rouault",
                    "Mahamadou Nagida",
                    "Mahdi Camara",
                    "Ludovic Blas",
                    "Sebastian Szymański",
                    "Adrien Thomasson",
                    "Mousa Tamari",
                    "Esteban Lepaul"
                  ]
                }
              ]
            },
            {
              "fixtureId": 1636344,
              "kickoff": "2026-09-17T04:00:00+09:00",
              "status": "FT",
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
                  "playerId": 224,
                  "player": "J. Zoet",
                  "type": "Missing Fixture",
                  "reason": "Off the roster"
                }
              ],
              "lineupsChecked": true,
              "lineups": [
                {
                  "teamId": 746,
                  "team": "Sunderland",
                  "formation": "4-2-3-1",
                  "coach": "Regis Le Bris",
                  "starters": [
                    "Robin Roefs",
                    "Nordi Mukiele",
                    "Kevin Danso",
                    "Omar Alderete",
                    "Reinildo Mandava",
                    "Granit Xhaka",
                    "Noah Sadiki",
                    "Trai Hume",
                    "Enzo Le Fée",
                    "Malick Fofana",
                    "Wilson Isidor"
                  ]
                },
                {
                  "teamId": 201,
                  "team": "AZ Alkmaar",
                  "formation": "4-2-3-1",
                  "coach": "Leeroy Echteld",
                  "starters": [
                    "Jari De Busser",
                    "Elijah Dijkstra",
                    "Wouter Goes",
                    "Lewis Schouten",
                    "Mateo Chávez",
                    "Jordy Clasie",
                    "Peer Koopmeiners",
                    "Ayoub Oufkir",
                    "Kees Smit",
                    "Ro-Zangelo Daal",
                    "Mexx Meerdink"
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "date": "2026-09-18",
      "updatedAt": "2026-09-16T13:29:34.941Z",
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
              "points": 12,
              "goalsDiff": 1,
              "form": "WWLWW",
              "all": {
                "played": 5,
                "wins": 4,
                "draws": 0,
                "losses": 1,
                "goalsFor": 7,
                "goalsAgainst": 6
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
                "wins": 2,
                "draws": 0,
                "losses": 1,
                "goalsFor": 5,
                "goalsAgainst": 6
              }
            },
            {
              "teamId": 542,
              "team": "Alaves",
              "rank": 4,
              "points": 10,
              "goalsDiff": 5,
              "form": "LLWWD",
              "all": {
                "played": 6,
                "wins": 3,
                "draws": 1,
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
              "rank": 5,
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
              "rank": 6,
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
              "rank": 7,
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
              "teamId": 540,
              "team": "Espanyol",
              "rank": 8,
              "points": 7,
              "goalsDiff": 2,
              "form": "LWDLL",
              "all": {
                "played": 6,
                "wins": 2,
                "draws": 1,
                "losses": 3,
                "goalsFor": 9,
                "goalsAgainst": 7
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
                "played": 3,
                "wins": 1,
                "draws": 0,
                "losses": 2,
                "goalsFor": 4,
                "goalsAgainst": 4
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
              "teamId": 728,
              "team": "Rayo Vallecano",
              "rank": 12,
              "points": 7,
              "goalsDiff": -5,
              "form": "WLWLD",
              "all": {
                "played": 6,
                "wins": 2,
                "draws": 1,
                "losses": 3,
                "goalsFor": 10,
                "goalsAgainst": 15
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
                "wins": 0,
                "draws": 0,
                "losses": 3,
                "goalsFor": 4,
                "goalsAgainst": 11
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
              "teamId": 539,
              "team": "Levante",
              "rank": 14,
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
              "rank": 15,
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
              "rank": 16,
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
              "teamId": 532,
              "team": "Valencia",
              "rank": 17,
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
              "rank": 18,
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
              "rank": 19,
              "points": 2,
              "goalsDiff": -3,
              "form": "LLLDD",
              "all": {
                "played": 5,
                "wins": 0,
                "draws": 2,
                "losses": 3,
                "goalsFor": 7,
                "goalsAgainst": 10
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
              "rank": 20,
              "points": 2,
              "goalsDiff": -8,
              "form": "LDLLL",
              "all": {
                "played": 6,
                "wins": 0,
                "draws": 2,
                "losses": 4,
                "goalsFor": 8,
                "goalsAgainst": 16
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
                "played": 3,
                "wins": 0,
                "draws": 2,
                "losses": 1,
                "goalsFor": 4,
                "goalsAgainst": 5
              }
            }
          ],
          "teams": [
            {
              "teamId": 543,
              "team": "Real Betis",
              "form": "WWLWW",
              "all": {
                "played": 5,
                "wins": 4,
                "draws": 0,
                "losses": 1,
                "goalsFor": 7,
                "goalsAgainst": 6
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
                "wins": 2,
                "draws": 0,
                "losses": 1,
                "goalsFor": 5,
                "goalsAgainst": 6
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
              "form": "DDLLL",
              "all": {
                "played": 5,
                "wins": 0,
                "draws": 2,
                "losses": 3,
                "goalsFor": 7,
                "goalsAgainst": 10
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
              "injuries": [
                {
                  "fixtureId": 1570386,
                  "teamId": 543,
                  "playerId": 47119,
                  "player": "A. Ruibal",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1570386,
                  "teamId": 543,
                  "playerId": 47302,
                  "player": "D. Llorente",
                  "type": "Questionable",
                  "reason": "Broken nose"
                },
                {
                  "fixtureId": 1570386,
                  "teamId": 546,
                  "playerId": 47320,
                  "player": "Juanmi",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1570386,
                  "teamId": 546,
                  "playerId": 18794,
                  "player": "Kiko Femenia",
                  "type": "Missing Fixture",
                  "reason": "Hamstring Injury"
                },
                {
                  "fixtureId": 1570386,
                  "teamId": 546,
                  "playerId": 403554,
                  "player": "C. Uche",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1570386,
                  "teamId": 546,
                  "playerId": 46813,
                  "player": "A. Abqar",
                  "type": "Questionable",
                  "reason": "Muscle Injury"
                },
                {
                  "fixtureId": 1570386,
                  "teamId": 546,
                  "playerId": 388013,
                  "player": "A. Garcia",
                  "type": "Questionable",
                  "reason": "Injury"
                }
              ],
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
              "injuries": [
                {
                  "fixtureId": 1570390,
                  "teamId": 535,
                  "playerId": 328192,
                  "player": "M. Diarra",
                  "type": "Missing Fixture",
                  "reason": "Calf Injury"
                },
                {
                  "fixtureId": 1570390,
                  "teamId": 535,
                  "playerId": 182602,
                  "player": "J. Lobete",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1570390,
                  "teamId": 535,
                  "playerId": 185234,
                  "player": "D. Murillo",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1570390,
                  "teamId": 535,
                  "playerId": 444451,
                  "player": "A. Ochoa",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1570390,
                  "teamId": 535,
                  "playerId": 47478,
                  "player": "F. Calero",
                  "type": "Questionable",
                  "reason": "Ribs Injury"
                },
                {
                  "fixtureId": 1570390,
                  "teamId": 533,
                  "playerId": 166,
                  "player": "J. Foyth",
                  "type": "Questionable",
                  "reason": "Achilles Tendon Injury"
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
              "injuries": [
                {
                  "fixtureId": 1636285,
                  "teamId": 646,
                  "playerId": 317375,
                  "player": "A. Bouras",
                  "type": "Missing Fixture",
                  "reason": "Muscle Injury"
                },
                {
                  "fixtureId": 1636285,
                  "teamId": 646,
                  "playerId": 277056,
                  "player": "O. Kamdem",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1636285,
                  "teamId": 646,
                  "playerId": 11249,
                  "player": "R. Kirilov",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1636285,
                  "teamId": 571,
                  "playerId": 361981,
                  "player": "A. Chase",
                  "type": "Missing Fixture",
                  "reason": "Off the roster"
                },
                {
                  "fixtureId": 1636285,
                  "teamId": 571,
                  "playerId": 403326,
                  "player": "S. Diabate",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1636285,
                  "teamId": 571,
                  "playerId": 457023,
                  "player": "G. Diakite",
                  "type": "Missing Fixture",
                  "reason": "Inactive"
                },
                {
                  "fixtureId": 1636285,
                  "teamId": 571,
                  "playerId": 498282,
                  "player": "F. Matijasevic",
                  "type": "Missing Fixture",
                  "reason": "Off the roster"
                },
                {
                  "fixtureId": 1636285,
                  "teamId": 571,
                  "playerId": 494747,
                  "player": "J. Moser",
                  "type": "Missing Fixture",
                  "reason": "Muscle Injury"
                },
                {
                  "fixtureId": 1636285,
                  "teamId": 571,
                  "playerId": 162121,
                  "player": "J. Omoregie",
                  "type": "Missing Fixture",
                  "reason": "Achilles Tendon Injury"
                },
                {
                  "fixtureId": 1636285,
                  "teamId": 571,
                  "playerId": 495,
                  "player": "C. Fruchtl",
                  "type": "Questionable",
                  "reason": "Inactive"
                }
              ],
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
              "injuries": [
                {
                  "fixtureId": 1636304,
                  "teamId": 1124,
                  "playerId": 26771,
                  "player": "N. Marinakis",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1636304,
                  "teamId": 167,
                  "playerId": 455332,
                  "player": "L. Engelns",
                  "type": "Missing Fixture",
                  "reason": "Off the roster"
                },
                {
                  "fixtureId": 1636304,
                  "teamId": 167,
                  "playerId": 7327,
                  "player": "A. Prass",
                  "type": "Missing Fixture",
                  "reason": "Muscle Injury"
                }
              ],
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
              "injuries": [
                {
                  "fixtureId": 1636251,
                  "teamId": 52,
                  "playerId": 3339,
                  "player": "C. Doucoure",
                  "type": "Missing Fixture",
                  "reason": "Off the roster"
                },
                {
                  "fixtureId": 1636251,
                  "teamId": 52,
                  "playerId": 412227,
                  "player": "Z. Gozo",
                  "type": "Missing Fixture",
                  "reason": "Off the roster"
                },
                {
                  "fixtureId": 1636251,
                  "teamId": 52,
                  "playerId": 137303,
                  "player": "E. Guessand",
                  "type": "Missing Fixture",
                  "reason": "Off the roster"
                },
                {
                  "fixtureId": 1636251,
                  "teamId": 52,
                  "playerId": 19088,
                  "player": "D. Henderson",
                  "type": "Missing Fixture",
                  "reason": "Foot Injury"
                },
                {
                  "fixtureId": 1636251,
                  "teamId": 52,
                  "playerId": 2490,
                  "player": "J. Lerma",
                  "type": "Missing Fixture",
                  "reason": "Off the roster"
                },
                {
                  "fixtureId": 1636251,
                  "teamId": 52,
                  "playerId": 25927,
                  "player": "J. Mateta",
                  "type": "Missing Fixture",
                  "reason": "Hamstring Injury"
                },
                {
                  "fixtureId": 1636251,
                  "teamId": 52,
                  "playerId": 19684,
                  "player": "R. Matthews",
                  "type": "Missing Fixture",
                  "reason": "Off the roster"
                },
                {
                  "fixtureId": 1636251,
                  "teamId": 52,
                  "playerId": 278898,
                  "player": "C. Riad",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1636251,
                  "teamId": 52,
                  "playerId": 2218,
                  "player": "I. Sarr",
                  "type": "Missing Fixture",
                  "reason": "Groin Injury"
                },
                {
                  "fixtureId": 1636251,
                  "teamId": 52,
                  "playerId": 412759,
                  "player": "J. Canvot",
                  "type": "Questionable",
                  "reason": "Coach's decision"
                },
                {
                  "fixtureId": 1636251,
                  "teamId": 52,
                  "playerId": 1468,
                  "player": "E. Nketiah",
                  "type": "Questionable",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1636251,
                  "teamId": 347,
                  "playerId": 105170,
                  "player": "A. Douglas",
                  "type": "Missing Fixture",
                  "reason": "Inactive"
                },
                {
                  "fixtureId": 1636251,
                  "teamId": 347,
                  "playerId": 8564,
                  "player": "A. Gholizadeh",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1636251,
                  "teamId": 347,
                  "playerId": 55342,
                  "player": "D. Hakans",
                  "type": "Missing Fixture",
                  "reason": "Inactive"
                },
                {
                  "fixtureId": 1636251,
                  "teamId": 347,
                  "playerId": 269892,
                  "player": "A. Kozubal",
                  "type": "Missing Fixture",
                  "reason": "Inactive"
                }
              ],
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
              "injuries": [
                {
                  "fixtureId": 1636247,
                  "teamId": 247,
                  "playerId": 581,
                  "player": "Jota",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1636247,
                  "teamId": 247,
                  "playerId": 359117,
                  "player": "S. Mheuka",
                  "type": "Missing Fixture",
                  "reason": "Off the roster"
                },
                {
                  "fixtureId": 1636247,
                  "teamId": 247,
                  "playerId": 339172,
                  "player": "C. Osmand",
                  "type": "Missing Fixture",
                  "reason": "Inactive"
                },
                {
                  "fixtureId": 1636247,
                  "teamId": 247,
                  "playerId": 297,
                  "player": "A. Oxlade-Chamberlain",
                  "type": "Missing Fixture",
                  "reason": "Red Card"
                },
                {
                  "fixtureId": 1636247,
                  "teamId": 247,
                  "playerId": 434623,
                  "player": "J. van den Berg",
                  "type": "Missing Fixture",
                  "reason": "Off the roster"
                },
                {
                  "fixtureId": 1636247,
                  "teamId": 247,
                  "playerId": 454935,
                  "player": "L. Emenalo",
                  "type": "Questionable",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1636247,
                  "teamId": 651,
                  "playerId": 27985,
                  "player": "B. Otvos",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1636247,
                  "teamId": 651,
                  "playerId": 369411,
                  "player": "I. Pappoe",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                }
              ],
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
              "injuries": [
                {
                  "fixtureId": 1636287,
                  "teamId": 321,
                  "playerId": 458514,
                  "player": "L. Alperud",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1636287,
                  "teamId": 321,
                  "playerId": 331919,
                  "player": "C. Jebara",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1636287,
                  "teamId": 321,
                  "playerId": 57192,
                  "player": "E. B. Garnas",
                  "type": "Questionable",
                  "reason": "Injury"
                }
              ],
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
              "injuries": [
                {
                  "fixtureId": 1636278,
                  "teamId": 496,
                  "playerId": 30531,
                  "player": "J. Boga",
                  "type": "Missing Fixture",
                  "reason": "Muscle Injury"
                },
                {
                  "fixtureId": 1636278,
                  "teamId": 496,
                  "playerId": 125674,
                  "player": "J. Cabal",
                  "type": "Missing Fixture",
                  "reason": "Thigh Injury"
                },
                {
                  "fixtureId": 1636278,
                  "teamId": 496,
                  "playerId": 127011,
                  "player": "A. Cambiaso",
                  "type": "Missing Fixture",
                  "reason": "Ankle Injury"
                },
                {
                  "fixtureId": 1636278,
                  "teamId": 496,
                  "playerId": 445447,
                  "player": "A. Durmisi",
                  "type": "Missing Fixture",
                  "reason": "Red Card"
                },
                {
                  "fixtureId": 1636278,
                  "teamId": 496,
                  "playerId": 451504,
                  "player": "J. Ekhator",
                  "type": "Missing Fixture",
                  "reason": "Off the roster"
                },
                {
                  "fixtureId": 1636278,
                  "teamId": 496,
                  "playerId": 19263,
                  "player": "L. Kelly",
                  "type": "Missing Fixture",
                  "reason": "Red Card"
                },
                {
                  "fixtureId": 1636278,
                  "teamId": 496,
                  "playerId": 30533,
                  "player": "M. Locatelli",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1636278,
                  "teamId": 496,
                  "playerId": 415,
                  "player": "W. McKennie",
                  "type": "Missing Fixture",
                  "reason": "Muscle Injury"
                },
                {
                  "fixtureId": 1636278,
                  "teamId": 496,
                  "playerId": 333,
                  "player": "A. Milik",
                  "type": "Missing Fixture",
                  "reason": "Inactive"
                },
                {
                  "fixtureId": 1636278,
                  "teamId": 496,
                  "playerId": 861,
                  "player": "D. Rugani",
                  "type": "Missing Fixture",
                  "reason": "Off the roster"
                },
                {
                  "fixtureId": 1636278,
                  "teamId": 496,
                  "playerId": 116,
                  "player": "K. Thuram",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1636278,
                  "teamId": 496,
                  "playerId": 339883,
                  "player": "K. Yildiz",
                  "type": "Missing Fixture",
                  "reason": "Foot Injury"
                },
                {
                  "fixtureId": 1636278,
                  "teamId": 496,
                  "playerId": 48392,
                  "player": "E. Zhegrova",
                  "type": "Missing Fixture",
                  "reason": "Off the roster"
                },
                {
                  "fixtureId": 1636278,
                  "teamId": 413,
                  "playerId": 129054,
                  "player": "G. Crettaz",
                  "type": "Missing Fixture",
                  "reason": "Red Card"
                },
                {
                  "fixtureId": 1636278,
                  "teamId": 413,
                  "playerId": 492120,
                  "player": "F. Entius",
                  "type": "Missing Fixture",
                  "reason": "Off the roster"
                },
                {
                  "fixtureId": 1636278,
                  "teamId": 413,
                  "playerId": 353808,
                  "player": "D. Fonville",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1636278,
                  "teamId": 413,
                  "playerId": 216770,
                  "player": "I. Hansen-Aaroen",
                  "type": "Missing Fixture",
                  "reason": "Off the roster"
                },
                {
                  "fixtureId": 1636278,
                  "teamId": 413,
                  "playerId": 278159,
                  "player": "A. Kaplan",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1636278,
                  "teamId": 413,
                  "playerId": 528298,
                  "player": "Y. Moslih",
                  "type": "Missing Fixture",
                  "reason": "Off the roster"
                },
                {
                  "fixtureId": 1636278,
                  "teamId": 413,
                  "playerId": 480306,
                  "player": "A. Tahaui",
                  "type": "Missing Fixture",
                  "reason": "Off the roster"
                },
                {
                  "fixtureId": 1636278,
                  "teamId": 413,
                  "playerId": 47446,
                  "player": "E. Mor",
                  "type": "Questionable",
                  "reason": "Injury"
                }
              ],
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
              "injuries": [
                {
                  "fixtureId": 1636321,
                  "teamId": 548,
                  "playerId": 199044,
                  "player": "J. Aramburu",
                  "type": "Missing Fixture",
                  "reason": "Red Card"
                },
                {
                  "fixtureId": 1636321,
                  "teamId": 548,
                  "playerId": 737,
                  "player": "A. Odriozola",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1636321,
                  "teamId": 548,
                  "playerId": 47314,
                  "player": "I. Zubeldia",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1636321,
                  "teamId": 35,
                  "playerId": 19070,
                  "player": "M. Aarons",
                  "type": "Missing Fixture",
                  "reason": "Off the roster"
                },
                {
                  "fixtureId": 1636321,
                  "teamId": 35,
                  "playerId": 129682,
                  "player": "A. Adli",
                  "type": "Missing Fixture",
                  "reason": "Calf Injury"
                },
                {
                  "fixtureId": 1636321,
                  "teamId": 35,
                  "playerId": 51051,
                  "player": "J. Araujo",
                  "type": "Missing Fixture",
                  "reason": "Thigh Injury"
                },
                {
                  "fixtureId": 1636321,
                  "teamId": 35,
                  "playerId": 18932,
                  "player": "F. Forster",
                  "type": "Missing Fixture",
                  "reason": "Off the roster"
                },
                {
                  "fixtureId": 1636321,
                  "teamId": 35,
                  "playerId": 343576,
                  "player": "B. Gannon-Doak",
                  "type": "Missing Fixture",
                  "reason": "Off the roster"
                },
                {
                  "fixtureId": 1636321,
                  "teamId": 35,
                  "playerId": 296458,
                  "player": "D. Jebbison",
                  "type": "Missing Fixture",
                  "reason": "Off the roster"
                },
                {
                  "fixtureId": 1636321,
                  "teamId": 35,
                  "playerId": 368030,
                  "player": "E. J. Kroupi",
                  "type": "Missing Fixture",
                  "reason": "Foot Injury"
                },
                {
                  "fixtureId": 1636321,
                  "teamId": 35,
                  "playerId": 412719,
                  "player": "V. Milosavljevic",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1636321,
                  "teamId": 35,
                  "playerId": 182772,
                  "player": "J. Sanchez",
                  "type": "Missing Fixture",
                  "reason": "Off the roster"
                },
                {
                  "fixtureId": 1636321,
                  "teamId": 35,
                  "playerId": 1150,
                  "player": "T. Adams",
                  "type": "Questionable",
                  "reason": "Injury"
                }
              ],
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
              "injuries": [
                {
                  "fixtureId": 1636232,
                  "teamId": 549,
                  "playerId": 128955,
                  "player": "C. Keles",
                  "type": "Missing Fixture",
                  "reason": "Off the roster"
                },
                {
                  "fixtureId": 1636232,
                  "teamId": 549,
                  "playerId": 25324,
                  "player": "M. Rashica",
                  "type": "Missing Fixture",
                  "reason": "Off the roster"
                },
                {
                  "fixtureId": 1636232,
                  "teamId": 549,
                  "playerId": 1987,
                  "player": "R. Yilmaz",
                  "type": "Missing Fixture",
                  "reason": "Inactive"
                },
                {
                  "fixtureId": 1636232,
                  "teamId": 81,
                  "playerId": 926,
                  "player": "G. Kondogbia",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1636232,
                  "teamId": 81,
                  "playerId": 392683,
                  "player": "A. Koum Mbondo",
                  "type": "Missing Fixture",
                  "reason": "Inactive"
                },
                {
                  "fixtureId": 1636232,
                  "teamId": 81,
                  "playerId": 354298,
                  "player": "T. Nnadi",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                }
              ],
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
              "injuries": [
                {
                  "fixtureId": 1636316,
                  "teamId": 567,
                  "playerId": 66270,
                  "player": "V. Jemelka",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1636316,
                  "teamId": 567,
                  "playerId": 338998,
                  "player": "J. Paluska",
                  "type": "Missing Fixture",
                  "reason": "Surgery"
                },
                {
                  "fixtureId": 1636316,
                  "teamId": 567,
                  "playerId": 426130,
                  "player": "K. Spacil",
                  "type": "Missing Fixture",
                  "reason": "Ankle Injury"
                },
                {
                  "fixtureId": 1636316,
                  "teamId": 567,
                  "playerId": 66447,
                  "player": "M. Tvrdon",
                  "type": "Missing Fixture",
                  "reason": "Off the roster"
                },
                {
                  "fixtureId": 1636316,
                  "teamId": 567,
                  "playerId": 18930,
                  "player": "M. Vydra",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1636316,
                  "teamId": 1393,
                  "playerId": 127414,
                  "player": "A. Ait El Hadj",
                  "type": "Missing Fixture",
                  "reason": "Off the roster"
                },
                {
                  "fixtureId": 1636316,
                  "teamId": 1393,
                  "playerId": 383670,
                  "player": "N. Chibani",
                  "type": "Missing Fixture",
                  "reason": "Off the roster"
                },
                {
                  "fixtureId": 1636316,
                  "teamId": 1393,
                  "playerId": 270201,
                  "player": "R. Florucz",
                  "type": "Missing Fixture",
                  "reason": "Red Card"
                },
                {
                  "fixtureId": 1636316,
                  "teamId": 1393,
                  "playerId": 303680,
                  "player": "I. Pavlic",
                  "type": "Missing Fixture",
                  "reason": "Off the roster"
                },
                {
                  "fixtureId": 1636316,
                  "teamId": 1393,
                  "playerId": 361966,
                  "player": "K. Rodriguez",
                  "type": "Missing Fixture",
                  "reason": "Inactive"
                },
                {
                  "fixtureId": 1636316,
                  "teamId": 1393,
                  "playerId": 20176,
                  "player": "R. Sykes",
                  "type": "Missing Fixture",
                  "reason": "Inactive"
                },
                {
                  "fixtureId": 1636316,
                  "teamId": 1393,
                  "playerId": 340574,
                  "player": "K. Van De Perre",
                  "type": "Missing Fixture",
                  "reason": "Red Card"
                },
                {
                  "fixtureId": 1636316,
                  "teamId": 1393,
                  "playerId": 4408,
                  "player": "A. Zorgane",
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
          "key": "J2LEAGUE",
          "leagueId": 99,
          "season": "2026",
          "standings": [
            {
              "teamId": 313,
              "team": "Omiya Ardija",
              "rank": 1,
              "points": 12,
              "goalsDiff": 5,
              "form": "DDDWW",
              "all": {
                "played": 6,
                "wins": 3,
                "draws": 3,
                "losses": 0,
                "goalsFor": 10,
                "goalsAgainst": 5
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
                "wins": 2,
                "draws": 1,
                "losses": 0,
                "goalsFor": 7,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 311,
              "team": "Albirex Niigata",
              "rank": 2,
              "points": 12,
              "goalsDiff": -2,
              "form": "WLWWW",
              "all": {
                "played": 6,
                "wins": 4,
                "draws": 0,
                "losses": 2,
                "goalsFor": 7,
                "goalsAgainst": 9
              },
              "home": {
                "played": 3,
                "wins": 3,
                "draws": 0,
                "losses": 0,
                "goalsFor": 4,
                "goalsAgainst": 1
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
              "rank": 3,
              "points": 11,
              "goalsDiff": 4,
              "form": "DWWWD",
              "all": {
                "played": 6,
                "wins": 3,
                "draws": 2,
                "losses": 1,
                "goalsFor": 10,
                "goalsAgainst": 6
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
                "played": 3,
                "wins": 2,
                "draws": 0,
                "losses": 1,
                "goalsFor": 5,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 284,
              "team": "Shonan Bellmare",
              "rank": 4,
              "points": 11,
              "goalsDiff": 1,
              "form": "WLDDW",
              "all": {
                "played": 6,
                "wins": 3,
                "draws": 2,
                "losses": 1,
                "goalsFor": 6,
                "goalsAgainst": 5
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
                "draws": 2,
                "losses": 0,
                "goalsFor": 4,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 7145,
              "team": "Tochigi City",
              "rank": 5,
              "points": 10,
              "goalsDiff": 6,
              "form": "DWLWW",
              "all": {
                "played": 6,
                "wins": 3,
                "draws": 1,
                "losses": 2,
                "goalsFor": 13,
                "goalsAgainst": 7
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
                "played": 4,
                "wins": 2,
                "draws": 1,
                "losses": 1,
                "goalsFor": 7,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 4322,
              "team": "Kataller Toyama",
              "rank": 6,
              "points": 10,
              "goalsDiff": 6,
              "form": "DWLWW",
              "all": {
                "played": 6,
                "wins": 3,
                "draws": 1,
                "losses": 2,
                "goalsFor": 11,
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
                "played": 3,
                "wins": 2,
                "draws": 0,
                "losses": 1,
                "goalsFor": 5,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 307,
              "team": "Yokohama FC",
              "rank": 7,
              "points": 10,
              "goalsDiff": 4,
              "form": "LWDLW",
              "all": {
                "played": 6,
                "wins": 3,
                "draws": 1,
                "losses": 2,
                "goalsFor": 11,
                "goalsAgainst": 7
              },
              "home": {
                "played": 3,
                "wins": 2,
                "draws": 1,
                "losses": 0,
                "goalsFor": 10,
                "goalsAgainst": 3
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
              "teamId": 4317,
              "team": "Fujieda MYFC",
              "rank": 8,
              "points": 10,
              "goalsDiff": 3,
              "form": "LDWLW",
              "all": {
                "played": 6,
                "wins": 3,
                "draws": 1,
                "losses": 2,
                "goalsFor": 10,
                "goalsAgainst": 7
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
                "played": 3,
                "wins": 1,
                "draws": 0,
                "losses": 2,
                "goalsFor": 5,
                "goalsAgainst": 6
              }
            },
            {
              "teamId": 280,
              "team": "Jubilo Iwata",
              "rank": 9,
              "points": 10,
              "goalsDiff": 1,
              "form": "WLWWL",
              "all": {
                "played": 6,
                "wins": 3,
                "draws": 1,
                "losses": 2,
                "goalsFor": 8,
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
                "played": 3,
                "wins": 2,
                "draws": 0,
                "losses": 1,
                "goalsFor": 5,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 312,
              "team": "Montedio Yamagata",
              "rank": 10,
              "points": 9,
              "goalsDiff": 4,
              "form": "LLWWL",
              "all": {
                "played": 6,
                "wins": 3,
                "draws": 0,
                "losses": 3,
                "goalsFor": 8,
                "goalsAgainst": 4
              },
              "home": {
                "played": 3,
                "wins": 2,
                "draws": 0,
                "losses": 1,
                "goalsFor": 5,
                "goalsAgainst": 2
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
              "rank": 11,
              "points": 8,
              "goalsDiff": 1,
              "form": "WDLWL",
              "all": {
                "played": 6,
                "wins": 2,
                "draws": 2,
                "losses": 2,
                "goalsFor": 8,
                "goalsAgainst": 7
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
                "played": 2,
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 1,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 295,
              "team": "Sagan Tosu",
              "rank": 12,
              "points": 8,
              "goalsDiff": 1,
              "form": "LWDLD",
              "all": {
                "played": 6,
                "wins": 2,
                "draws": 2,
                "losses": 2,
                "goalsFor": 7,
                "goalsAgainst": 6
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
                "played": 3,
                "wins": 0,
                "draws": 2,
                "losses": 1,
                "goalsFor": 2,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 308,
              "team": "Ventforet Kofu",
              "rank": 13,
              "points": 7,
              "goalsDiff": -4,
              "form": "LWWLD",
              "all": {
                "played": 6,
                "wins": 2,
                "draws": 1,
                "losses": 3,
                "goalsFor": 5,
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
                "played": 3,
                "wins": 1,
                "draws": 0,
                "losses": 2,
                "goalsFor": 2,
                "goalsAgainst": 6
              }
            },
            {
              "teamId": 299,
              "team": "Tokushima Vortis",
              "rank": 14,
              "points": 7,
              "goalsDiff": -4,
              "form": "LWWLD",
              "all": {
                "played": 6,
                "wins": 2,
                "draws": 1,
                "losses": 3,
                "goalsFor": 4,
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
                "played": 3,
                "wins": 0,
                "draws": 0,
                "losses": 3,
                "goalsFor": 2,
                "goalsAgainst": 8
              }
            },
            {
              "teamId": 4326,
              "team": "Vanraure Hachinohe",
              "rank": 15,
              "points": 7,
              "goalsDiff": -5,
              "form": "LDWLL",
              "all": {
                "played": 6,
                "wins": 2,
                "draws": 1,
                "losses": 3,
                "goalsFor": 3,
                "goalsAgainst": 8
              },
              "home": {
                "played": 4,
                "wins": 2,
                "draws": 0,
                "losses": 2,
                "goalsFor": 3,
                "goalsAgainst": 3
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
              "teamId": 298,
              "team": "Oita Trinita",
              "rank": 16,
              "points": 6,
              "goalsDiff": 1,
              "form": "DDLWD",
              "all": {
                "played": 6,
                "wins": 1,
                "draws": 3,
                "losses": 2,
                "goalsFor": 5,
                "goalsAgainst": 4
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
                "played": 3,
                "wins": 0,
                "draws": 2,
                "losses": 1,
                "goalsFor": 0,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 7127,
              "team": "Iwaki",
              "rank": 17,
              "points": 6,
              "goalsDiff": -4,
              "form": "WLLLL",
              "all": {
                "played": 6,
                "wins": 2,
                "draws": 0,
                "losses": 4,
                "goalsFor": 8,
                "goalsAgainst": 12
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
                "played": 3,
                "wins": 0,
                "draws": 0,
                "losses": 3,
                "goalsFor": 2,
                "goalsAgainst": 8
              }
            },
            {
              "teamId": 10409,
              "team": "Tegevajaro Miyazaki",
              "rank": 18,
              "points": 5,
              "goalsDiff": -4,
              "form": "WLLDD",
              "all": {
                "played": 6,
                "wins": 1,
                "draws": 2,
                "losses": 3,
                "goalsFor": 6,
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
                "played": 3,
                "wins": 0,
                "draws": 1,
                "losses": 2,
                "goalsFor": 3,
                "goalsAgainst": 7
              }
            },
            {
              "teamId": 279,
              "team": "Consadole Sapporo",
              "rank": 19,
              "points": 4,
              "goalsDiff": -6,
              "form": "DLLLL",
              "all": {
                "played": 6,
                "wins": 1,
                "draws": 1,
                "losses": 4,
                "goalsFor": 7,
                "goalsAgainst": 13
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
              "goalsDiff": -8,
              "form": "WDLLL",
              "all": {
                "played": 6,
                "wins": 1,
                "draws": 1,
                "losses": 4,
                "goalsFor": 5,
                "goalsAgainst": 13
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
                "played": 3,
                "wins": 0,
                "draws": 1,
                "losses": 2,
                "goalsFor": 2,
                "goalsAgainst": 7
              }
            }
          ],
          "teams": [
            {
              "teamId": 4326,
              "team": "Vanraure Hachinohe",
              "form": "WLLWDL",
              "all": {
                "played": 6,
                "wins": 2,
                "draws": 1,
                "losses": 3,
                "goalsFor": 3,
                "goalsAgainst": 8
              },
              "home": {
                "played": 4,
                "wins": 2,
                "draws": 0,
                "losses": 2,
                "goalsFor": 3,
                "goalsAgainst": 3
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
              "teamId": 10409,
              "team": "Tegevajaro Miyazaki",
              "form": "LDDLLW",
              "all": {
                "played": 6,
                "wins": 1,
                "draws": 2,
                "losses": 3,
                "goalsFor": 6,
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
                "played": 3,
                "wins": 0,
                "draws": 1,
                "losses": 2,
                "goalsFor": 3,
                "goalsAgainst": 7
              }
            }
          ],
          "fixtures": [
            {
              "fixtureId": 1606656,
              "kickoff": "2026-09-18T13:00:00+09:00",
              "status": "NS",
              "homeTeamId": 4326,
              "homeTeam": "Vanraure Hachinohe",
              "awayTeamId": 10409,
              "awayTeam": "Tegevajaro Miyazaki",
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
      "date": "2026-09-19",
      "updatedAt": "2026-09-16T13:30:21.862Z",
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
              "teamId": 63,
              "team": "Leeds",
              "rank": 3,
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
              "rank": 4,
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
              "rank": 5,
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
              "rank": 6,
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
              "rank": 7,
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
              "rank": 8,
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
              "rank": 9,
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
              "rank": 10,
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
              "teamId": 65,
              "team": "Nottingham Forest",
              "rank": 11,
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
              "teamId": 34,
              "team": "Newcastle",
              "rank": 12,
              "points": 5,
              "goalsDiff": -1,
              "form": "LDWD",
              "all": {
                "played": 4,
                "wins": 1,
                "draws": 2,
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
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 4
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
              "teamId": 55,
              "team": "Brentford",
              "form": "WDDD",
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
              "teamId": 49,
              "team": "Chelsea",
              "form": "WWLD",
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
              "teamId": 47,
              "team": "Tottenham",
              "form": "LLDD",
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
              "teamId": 66,
              "team": "Aston Villa",
              "form": "LLDL",
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
              "teamId": 34,
              "team": "Newcastle",
              "form": "DWDL",
              "all": {
                "played": 4,
                "wins": 1,
                "draws": 2,
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
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 64,
              "team": "Hull City",
              "form": "WWDD",
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
              "teamId": 45,
              "team": "Everton",
              "form": "WDDD",
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
              "teamId": 51,
              "team": "Brighton",
              "form": "WLDW",
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
              "teamId": 42,
              "team": "Arsenal",
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
            }
          ],
          "fixtures": [
            {
              "fixtureId": 1557408,
              "kickoff": "2026-09-19T04:00:00+09:00",
              "status": "NS",
              "homeTeamId": 55,
              "homeTeam": "Brentford",
              "awayTeamId": 49,
              "awayTeam": "Chelsea",
              "injuriesChecked": true,
              "injuries": [
                {
                  "fixtureId": 1557408,
                  "teamId": 55,
                  "playerId": 19495,
                  "player": "N. Collins",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1557408,
                  "teamId": 55,
                  "playerId": 19362,
                  "player": "J. Dasilva",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1557408,
                  "teamId": 55,
                  "playerId": 393193,
                  "player": "K. Furo",
                  "type": "Missing Fixture",
                  "reason": "Surgery"
                },
                {
                  "fixtureId": 1557408,
                  "teamId": 55,
                  "playerId": 319517,
                  "player": "A. Milambo",
                  "type": "Missing Fixture",
                  "reason": "Inactive"
                },
                {
                  "fixtureId": 1557408,
                  "teamId": 55,
                  "playerId": 36922,
                  "player": "S. van den Berg",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1557408,
                  "teamId": 55,
                  "playerId": 47438,
                  "player": "M. Jensen",
                  "type": "Questionable",
                  "reason": "Muscle Injury"
                },
                {
                  "fixtureId": 1557408,
                  "teamId": 49,
                  "playerId": 116117,
                  "player": "M. Caicedo",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1557408,
                  "teamId": 49,
                  "playerId": 203762,
                  "player": "E. Emegha",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1557408,
                  "teamId": 49,
                  "playerId": 292,
                  "player": "J. Henderson",
                  "type": "Missing Fixture",
                  "reason": "Wrist Injury"
                },
                {
                  "fixtureId": 1557408,
                  "teamId": 49,
                  "playerId": 383018,
                  "player": "M. Palestra",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1557408,
                  "teamId": 49,
                  "playerId": 161907,
                  "player": "M. Gusto",
                  "type": "Questionable",
                  "reason": "Injury"
                }
              ],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1557416,
              "kickoff": "2026-09-19T20:30:00+09:00",
              "status": "NS",
              "homeTeamId": 47,
              "homeTeam": "Tottenham",
              "awayTeamId": 66,
              "awayTeam": "Aston Villa",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1557414,
              "kickoff": "2026-09-19T23:00:00+09:00",
              "status": "NS",
              "homeTeamId": 34,
              "homeTeam": "Newcastle",
              "awayTeamId": 64,
              "awayTeam": "Hull City",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1557410,
              "kickoff": "2026-09-19T23:00:00+09:00",
              "status": "NS",
              "homeTeamId": 45,
              "homeTeam": "Everton",
              "awayTeamId": 57,
              "awayTeam": "Ipswich",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1557409,
              "kickoff": "2026-09-19T23:00:00+09:00",
              "status": "NS",
              "homeTeamId": 51,
              "homeTeam": "Brighton",
              "awayTeamId": 42,
              "awayTeam": "Arsenal",
              "injuriesChecked": true,
              "injuries": [],
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
              "teamId": 70,
              "team": "Middlesbrough",
              "rank": 3,
              "points": 14,
              "goalsDiff": 4,
              "form": "DWWDW",
              "all": {
                "played": 7,
                "wins": 4,
                "draws": 2,
                "losses": 1,
                "goalsFor": 14,
                "goalsAgainst": 10
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
                "played": 3,
                "wins": 1,
                "draws": 1,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 3
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
              "teamId": 1379,
              "team": "Lincoln",
              "rank": 8,
              "points": 11,
              "goalsDiff": 0,
              "form": "WWDDW",
              "all": {
                "played": 7,
                "wins": 3,
                "draws": 2,
                "losses": 2,
                "goalsFor": 6,
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
              "rank": 9,
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
              "rank": 10,
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
              "teamId": 58,
              "team": "Millwall",
              "rank": 11,
              "points": 10,
              "goalsDiff": 0,
              "form": "DLWLL",
              "all": {
                "played": 7,
                "wins": 3,
                "draws": 1,
                "losses": 3,
                "goalsFor": 13,
                "goalsAgainst": 13
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
                "draws": 1,
                "losses": 2,
                "goalsFor": 6,
                "goalsAgainst": 10
              }
            },
            {
              "teamId": 75,
              "team": "Stoke City",
              "rank": 12,
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
              "rank": 13,
              "points": 10,
              "goalsDiff": -2,
              "form": "LLWWW",
              "all": {
                "played": 7,
                "wins": 3,
                "draws": 1,
                "losses": 3,
                "goalsFor": 10,
                "goalsAgainst": 12
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
              "rank": 14,
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
              "teamId": 62,
              "team": "Sheffield Utd",
              "rank": 15,
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
              "rank": 16,
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
              "form": "LDWWWLL",
              "all": {
                "played": 7,
                "wins": 3,
                "draws": 1,
                "losses": 3,
                "goalsFor": 10,
                "goalsAgainst": 12
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
                "played": 4,
                "wins": 2,
                "draws": 1,
                "losses": 1,
                "goalsFor": 8,
                "goalsAgainst": 8
              }
            },
            {
              "teamId": 38,
              "team": "Watford",
              "form": "WDDLLWL",
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
              "teamId": 43,
              "team": "Cardiff",
              "form": "DDDLLDL",
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
              "teamId": 1335,
              "team": "Charlton",
              "form": "WWWDLDD",
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
              "teamId": 58,
              "team": "Millwall",
              "form": "WWLLWLD",
              "all": {
                "played": 7,
                "wins": 3,
                "draws": 1,
                "losses": 3,
                "goalsFor": 13,
                "goalsAgainst": 13
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
                "draws": 1,
                "losses": 2,
                "goalsFor": 6,
                "goalsAgainst": 10
              }
            },
            {
              "teamId": 48,
              "team": "West Ham",
              "form": "DLDWWWW",
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
              "teamId": 75,
              "team": "Stoke City",
              "form": "LLLWWDW",
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
              "teamId": 62,
              "team": "Sheffield Utd",
              "form": "DDDWLWL",
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
              "teamId": 44,
              "team": "Burnley",
              "form": "DLLDLDL",
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
            },
            {
              "teamId": 69,
              "team": "Derby",
              "form": "LDLWLLL",
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
              "teamId": 54,
              "team": "Birmingham",
              "form": "DDWDDLW",
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
              "teamId": 70,
              "team": "Middlesbrough",
              "form": "WLWDWWD",
              "all": {
                "played": 7,
                "wins": 4,
                "draws": 2,
                "losses": 1,
                "goalsFor": 14,
                "goalsAgainst": 10
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
              "form": "WDWWLDD",
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
              "teamId": 59,
              "team": "Preston",
              "form": "LLLLWLL",
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
              "teamId": 1355,
              "team": "Portsmouth",
              "form": "LWLLWD",
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
              "teamId": 67,
              "team": "Blackburn",
              "form": "DWLDLLW",
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
              "form": "LLWDDWW",
              "all": {
                "played": 7,
                "wins": 3,
                "draws": 2,
                "losses": 2,
                "goalsFor": 6,
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
                "played": 4,
                "wins": 3,
                "draws": 0,
                "losses": 1,
                "goalsFor": 4,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 76,
              "team": "Swansea",
              "form": "WDWWDLW",
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
              "teamId": 1837,
              "team": "Wrexham",
              "form": "DDLWDDL",
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
              "teamId": 41,
              "team": "Southampton",
              "form": "LWWDDWW",
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
            }
          ],
          "fixtures": [
            {
              "fixtureId": 1563168,
              "kickoff": "2026-09-19T04:00:00+09:00",
              "status": "NS",
              "homeTeamId": 56,
              "homeTeam": "Bristol City",
              "awayTeamId": 38,
              "awayTeam": "Watford",
              "injuriesChecked": true,
              "injuries": [
                {
                  "fixtureId": 1563168,
                  "teamId": 56,
                  "playerId": 8902,
                  "player": "B. De Keersmaecker",
                  "type": "Missing Fixture",
                  "reason": "Shoulder Injury"
                },
                {
                  "fixtureId": 1563168,
                  "teamId": 56,
                  "playerId": 69539,
                  "player": "L. McNally",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1563168,
                  "teamId": 38,
                  "playerId": 351341,
                  "player": "T. Akomeah",
                  "type": "Missing Fixture",
                  "reason": "Lacking Match Fitness"
                },
                {
                  "fixtureId": 1563168,
                  "teamId": 38,
                  "playerId": 152699,
                  "player": "K. Baah",
                  "type": "Missing Fixture",
                  "reason": "Knock"
                },
                {
                  "fixtureId": 1563168,
                  "teamId": 38,
                  "playerId": 36907,
                  "player": "M. Boadu",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1563168,
                  "teamId": 38,
                  "playerId": 20044,
                  "player": "M. Bola",
                  "type": "Missing Fixture",
                  "reason": "Hamstring Injury"
                },
                {
                  "fixtureId": 1563168,
                  "teamId": 38,
                  "playerId": 286475,
                  "player": "E. Bove",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1563168,
                  "teamId": 38,
                  "playerId": 367473,
                  "player": "J. Grieves",
                  "type": "Questionable",
                  "reason": "Lacking Match Fitness"
                },
                {
                  "fixtureId": 1563168,
                  "teamId": 38,
                  "playerId": 507646,
                  "player": "B. Mlacic",
                  "type": "Questionable",
                  "reason": "Inactive"
                },
                {
                  "fixtureId": 1563168,
                  "teamId": 38,
                  "playerId": 193296,
                  "player": "J. Ngakia",
                  "type": "Questionable",
                  "reason": "Thigh Injury"
                }
              ],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1563170,
              "kickoff": "2026-09-19T20:30:00+09:00",
              "status": "NS",
              "homeTeamId": 43,
              "homeTeam": "Cardiff",
              "awayTeamId": 1335,
              "awayTeam": "Charlton",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1563172,
              "kickoff": "2026-09-19T20:30:00+09:00",
              "status": "NS",
              "homeTeamId": 58,
              "homeTeam": "Millwall",
              "awayTeamId": 48,
              "awayTeam": "West Ham",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1563176,
              "kickoff": "2026-09-19T20:30:00+09:00",
              "status": "NS",
              "homeTeamId": 75,
              "homeTeam": "Stoke City",
              "awayTeamId": 62,
              "awayTeam": "Sheffield Utd",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1563169,
              "kickoff": "2026-09-19T23:00:00+09:00",
              "status": "NS",
              "homeTeamId": 44,
              "homeTeam": "Burnley",
              "awayTeamId": 69,
              "awayTeam": "Derby",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1563167,
              "kickoff": "2026-09-19T23:00:00+09:00",
              "status": "NS",
              "homeTeamId": 54,
              "homeTeam": "Birmingham",
              "awayTeamId": 70,
              "awayTeam": "Middlesbrough",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1563175,
              "kickoff": "2026-09-19T23:00:00+09:00",
              "status": "NS",
              "homeTeamId": 72,
              "homeTeam": "QPR",
              "awayTeamId": 59,
              "awayTeam": "Preston",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1563174,
              "kickoff": "2026-09-19T23:00:00+09:00",
              "status": "NS",
              "homeTeamId": 1355,
              "homeTeam": "Portsmouth",
              "awayTeamId": 67,
              "awayTeam": "Blackburn",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1563171,
              "kickoff": "2026-09-19T23:00:00+09:00",
              "status": "NS",
              "homeTeamId": 1379,
              "homeTeam": "Lincoln",
              "awayTeamId": 76,
              "awayTeam": "Swansea",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1563178,
              "kickoff": "2026-09-19T23:00:00+09:00",
              "status": "NS",
              "homeTeamId": 1837,
              "homeTeam": "Wrexham",
              "awayTeamId": 41,
              "awayTeam": "Southampton",
              "injuriesChecked": true,
              "injuries": [],
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
              "points": 12,
              "goalsDiff": 1,
              "form": "WWLWW",
              "all": {
                "played": 5,
                "wins": 4,
                "draws": 0,
                "losses": 1,
                "goalsFor": 7,
                "goalsAgainst": 6
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
                "wins": 2,
                "draws": 0,
                "losses": 1,
                "goalsFor": 5,
                "goalsAgainst": 6
              }
            },
            {
              "teamId": 542,
              "team": "Alaves",
              "rank": 4,
              "points": 10,
              "goalsDiff": 5,
              "form": "LLWWD",
              "all": {
                "played": 6,
                "wins": 3,
                "draws": 1,
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
              "rank": 5,
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
              "rank": 6,
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
              "rank": 7,
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
              "teamId": 540,
              "team": "Espanyol",
              "rank": 8,
              "points": 7,
              "goalsDiff": 2,
              "form": "LWDLL",
              "all": {
                "played": 6,
                "wins": 2,
                "draws": 1,
                "losses": 3,
                "goalsFor": 9,
                "goalsAgainst": 7
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
                "played": 3,
                "wins": 1,
                "draws": 0,
                "losses": 2,
                "goalsFor": 4,
                "goalsAgainst": 4
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
              "teamId": 728,
              "team": "Rayo Vallecano",
              "rank": 12,
              "points": 7,
              "goalsDiff": -5,
              "form": "WLWLD",
              "all": {
                "played": 6,
                "wins": 2,
                "draws": 1,
                "losses": 3,
                "goalsFor": 10,
                "goalsAgainst": 15
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
                "wins": 0,
                "draws": 0,
                "losses": 3,
                "goalsFor": 4,
                "goalsAgainst": 11
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
              "teamId": 539,
              "team": "Levante",
              "rank": 14,
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
              "rank": 15,
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
              "rank": 16,
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
              "teamId": 532,
              "team": "Valencia",
              "rank": 17,
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
              "rank": 18,
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
              "rank": 19,
              "points": 2,
              "goalsDiff": -3,
              "form": "LLLDD",
              "all": {
                "played": 5,
                "wins": 0,
                "draws": 2,
                "losses": 3,
                "goalsFor": 7,
                "goalsAgainst": 10
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
              "rank": 20,
              "points": 2,
              "goalsDiff": -8,
              "form": "LDLLL",
              "all": {
                "played": 6,
                "wins": 0,
                "draws": 2,
                "losses": 4,
                "goalsFor": 8,
                "goalsAgainst": 16
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
                "played": 3,
                "wins": 0,
                "draws": 2,
                "losses": 1,
                "goalsFor": 4,
                "goalsAgainst": 5
              }
            }
          ],
          "teams": [
            {
              "teamId": 540,
              "team": "Espanyol",
              "form": "WLLDWL",
              "all": {
                "played": 6,
                "wins": 2,
                "draws": 1,
                "losses": 3,
                "goalsFor": 9,
                "goalsAgainst": 7
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
                "played": 3,
                "wins": 1,
                "draws": 0,
                "losses": 2,
                "goalsFor": 4,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 797,
              "team": "Elche",
              "form": "DLLLDL",
              "all": {
                "played": 6,
                "wins": 0,
                "draws": 2,
                "losses": 4,
                "goalsFor": 8,
                "goalsAgainst": 16
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
                "played": 3,
                "wins": 0,
                "draws": 2,
                "losses": 1,
                "goalsFor": 4,
                "goalsAgainst": 5
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
              "teamId": 728,
              "team": "Rayo Vallecano",
              "form": "LDLWLW",
              "all": {
                "played": 6,
                "wins": 2,
                "draws": 1,
                "losses": 3,
                "goalsFor": 10,
                "goalsAgainst": 15
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
                "wins": 0,
                "draws": 0,
                "losses": 3,
                "goalsFor": 4,
                "goalsAgainst": 11
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
            },
            {
              "teamId": 542,
              "team": "Alaves",
              "form": "WDWWLL",
              "all": {
                "played": 6,
                "wins": 3,
                "draws": 1,
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
              "fixtureId": 1570397,
              "kickoff": "2026-09-19T04:00:00+09:00",
              "status": "NS",
              "homeTeamId": 540,
              "homeTeam": "Espanyol",
              "awayTeamId": 797,
              "awayTeam": "Elche",
              "injuriesChecked": true,
              "injuries": [
                {
                  "fixtureId": 1570397,
                  "teamId": 540,
                  "playerId": 286601,
                  "player": "O. El Hilali",
                  "type": "Missing Fixture",
                  "reason": "Red Card"
                },
                {
                  "fixtureId": 1570397,
                  "teamId": 540,
                  "playerId": 47396,
                  "player": "K. Garcia",
                  "type": "Missing Fixture",
                  "reason": "Hamstring Injury"
                },
                {
                  "fixtureId": 1570397,
                  "teamId": 540,
                  "playerId": 182674,
                  "player": "Jofre",
                  "type": "Missing Fixture",
                  "reason": "Groin Injury"
                },
                {
                  "fixtureId": 1570397,
                  "teamId": 540,
                  "playerId": 47349,
                  "player": "J. Puado",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1570397,
                  "teamId": 540,
                  "playerId": 47299,
                  "player": "A. Gorosabel",
                  "type": "Questionable",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1570397,
                  "teamId": 797,
                  "playerId": 284415,
                  "player": "Y. Santiago",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                }
              ],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1570399,
              "kickoff": "2026-09-19T21:00:00+09:00",
              "status": "NS",
              "homeTeamId": 727,
              "homeTeam": "Osasuna",
              "awayTeamId": 728,
              "awayTeam": "Rayo Vallecano",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1570393,
              "kickoff": "2026-09-19T23:15:00+09:00",
              "status": "NS",
              "homeTeamId": 531,
              "homeTeam": "Athletic Club",
              "awayTeamId": 542,
              "awayTeam": "Alaves",
              "injuriesChecked": true,
              "injuries": [],
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
              "points": 12,
              "goalsDiff": 11,
              "form": "WWWW",
              "all": {
                "played": 4,
                "wins": 4,
                "draws": 0,
                "losses": 0,
                "goalsFor": 12,
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
              "points": 12,
              "goalsDiff": 7,
              "form": "WWWW",
              "all": {
                "played": 4,
                "wins": 4,
                "draws": 0,
                "losses": 0,
                "goalsFor": 13,
                "goalsAgainst": 6
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
              "teamId": 487,
              "team": "Lazio",
              "rank": 4,
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
              "teamId": 490,
              "team": "Cagliari",
              "rank": 5,
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
              "goalsDiff": -2,
              "form": "LLWD",
              "all": {
                "played": 4,
                "wins": 1,
                "draws": 1,
                "losses": 2,
                "goalsFor": 8,
                "goalsAgainst": 10
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
              "points": 3,
              "goalsDiff": -3,
              "form": "LWLL",
              "all": {
                "played": 4,
                "wins": 1,
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
                "goalsFor": 1,
                "goalsAgainst": 4
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
              "teamId": 1579,
              "team": "Monza",
              "form": "LLDL",
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
              "teamId": 494,
              "team": "Udinese",
              "form": "DWLL",
              "all": {
                "played": 4,
                "wins": 1,
                "draws": 1,
                "losses": 2,
                "goalsFor": 8,
                "goalsAgainst": 10
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
                "draws": 0,
                "losses": 1,
                "goalsFor": 6,
                "goalsAgainst": 7
              }
            },
            {
              "teamId": 490,
              "team": "Cagliari",
              "form": "WLWW",
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
              "teamId": 503,
              "team": "Torino",
              "form": "LLWL",
              "all": {
                "played": 4,
                "wins": 1,
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
                "goalsFor": 1,
                "goalsAgainst": 4
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
              "fixtureId": 1550133,
              "kickoff": "2026-09-19T03:45:00+09:00",
              "status": "NS",
              "homeTeamId": 1579,
              "homeTeam": "Monza",
              "awayTeamId": 488,
              "awayTeam": "Sassuolo",
              "injuriesChecked": true,
              "injuries": [
                {
                  "fixtureId": 1550133,
                  "teamId": 1579,
                  "playerId": 31532,
                  "player": "P. Ciurria",
                  "type": "Missing Fixture",
                  "reason": "Inactive"
                },
                {
                  "fixtureId": 1550133,
                  "teamId": 1579,
                  "playerId": 85,
                  "player": "C. Ngonge",
                  "type": "Missing Fixture",
                  "reason": "Lacking Match Fitness"
                },
                {
                  "fixtureId": 1550133,
                  "teamId": 1579,
                  "playerId": 30436,
                  "player": "M. Pessina",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1550133,
                  "teamId": 1579,
                  "playerId": 56293,
                  "player": "I. Toure",
                  "type": "Missing Fixture",
                  "reason": "Contusion"
                },
                {
                  "fixtureId": 1550133,
                  "teamId": 1579,
                  "playerId": 384543,
                  "player": "J. Ziolkowski",
                  "type": "Missing Fixture",
                  "reason": "Foot Injury"
                },
                {
                  "fixtureId": 1550133,
                  "teamId": 488,
                  "playerId": 291780,
                  "player": "D. Boloca",
                  "type": "Missing Fixture",
                  "reason": "Muscle Injury"
                },
                {
                  "fixtureId": 1550133,
                  "teamId": 488,
                  "playerId": 41371,
                  "player": "F. Cande",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1550133,
                  "teamId": 488,
                  "playerId": 328046,
                  "player": "I. Kone",
                  "type": "Missing Fixture",
                  "reason": "Broken Leg"
                },
                {
                  "fixtureId": 1550133,
                  "teamId": 488,
                  "playerId": 59513,
                  "player": "Y. Paz",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1550133,
                  "teamId": 488,
                  "playerId": 342055,
                  "player": "E. Pieragnolo",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1550133,
                  "teamId": 488,
                  "playerId": 342035,
                  "player": "C. Volpato",
                  "type": "Missing Fixture",
                  "reason": "Thigh Injury"
                },
                {
                  "fixtureId": 1550133,
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
              "fixtureId": 1550135,
              "kickoff": "2026-09-19T22:00:00+09:00",
              "status": "NS",
              "homeTeamId": 494,
              "homeTeam": "Udinese",
              "awayTeamId": 490,
              "awayTeam": "Cagliari",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1550129,
              "kickoff": "2026-09-19T22:00:00+09:00",
              "status": "NS",
              "homeTeamId": 500,
              "homeTeam": "Bologna",
              "awayTeamId": 503,
              "awayTeam": "Torino",
              "injuriesChecked": true,
              "injuries": [],
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
            },
            {
              "teamId": 182,
              "team": "Union Berlin",
              "form": "DLL",
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
              "teamId": 162,
              "team": "Werder Bremen",
              "form": "LWD",
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
              "teamId": 170,
              "team": "FC Augsburg",
              "form": "WWD",
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
              "teamId": 163,
              "team": "Borussia Mönchengladbach",
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
              "teamId": 164,
              "team": "FSV Mainz 05",
              "form": "DWL",
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
              "form": "DLW",
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
              "teamId": 160,
              "team": "SC Freiburg",
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
              "teamId": 175,
              "team": "Hamburger SV",
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
            },
            {
              "teamId": 192,
              "team": "1. FC Köln",
              "form": "WLD",
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
            }
          ],
          "fixtures": [
            {
              "fixtureId": 1575167,
              "kickoff": "2026-09-19T03:30:00+09:00",
              "status": "NS",
              "homeTeamId": 157,
              "homeTeam": "Bayern München",
              "awayTeamId": 182,
              "awayTeam": "Union Berlin",
              "injuriesChecked": true,
              "injuries": [
                {
                  "fixtureId": 1575167,
                  "teamId": 157,
                  "playerId": 330612,
                  "player": "T. Buchmann",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1575167,
                  "teamId": 182,
                  "playerId": 1124,
                  "player": "O. Burke",
                  "type": "Missing Fixture",
                  "reason": "Achilles Tendon Injury"
                },
                {
                  "fixtureId": 1575167,
                  "teamId": 182,
                  "playerId": 45892,
                  "player": "A. Ilic",
                  "type": "Missing Fixture",
                  "reason": "Illness"
                },
                {
                  "fixtureId": 1575167,
                  "teamId": 182,
                  "playerId": 413294,
                  "player": "A. Markgraf",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1575167,
                  "teamId": 182,
                  "playerId": 24839,
                  "player": "M. Friedrich",
                  "type": "Questionable",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1575167,
                  "teamId": 182,
                  "playerId": 48612,
                  "player": "K. Imeri",
                  "type": "Questionable",
                  "reason": "Thigh Injury"
                },
                {
                  "fixtureId": 1575167,
                  "teamId": 182,
                  "playerId": 270,
                  "player": "S. Nsoki",
                  "type": "Questionable",
                  "reason": "Muscle Injury"
                }
              ],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1575172,
              "kickoff": "2026-09-19T22:30:00+09:00",
              "status": "NS",
              "homeTeamId": 162,
              "homeTeam": "Werder Bremen",
              "awayTeamId": 170,
              "awayTeam": "FC Augsburg",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1575174,
              "kickoff": "2026-09-19T22:30:00+09:00",
              "status": "NS",
              "homeTeamId": 163,
              "homeTeam": "Borussia Mönchengladbach",
              "awayTeamId": 164,
              "awayTeam": "FSV Mainz 05",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1575170,
              "kickoff": "2026-09-19T22:30:00+09:00",
              "status": "NS",
              "homeTeamId": 169,
              "homeTeam": "Eintracht Frankfurt",
              "awayTeamId": 160,
              "awayTeam": "SC Freiburg",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1575171,
              "kickoff": "2026-09-19T22:30:00+09:00",
              "status": "NS",
              "homeTeamId": 175,
              "homeTeam": "Hamburger SV",
              "awayTeamId": 192,
              "awayTeam": "1. FC Köln",
              "injuriesChecked": true,
              "injuries": [],
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
              "teamId": 91,
              "team": "Monaco",
              "form": "WWWD",
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
            }
          ],
          "fixtures": [
            {
              "fixtureId": 1552769,
              "kickoff": "2026-09-19T03:45:00+09:00",
              "status": "NS",
              "homeTeamId": 91,
              "homeTeam": "Monaco",
              "awayTeamId": 116,
              "awayTeam": "Lens",
              "injuriesChecked": true,
              "injuries": [
                {
                  "fixtureId": 1552769,
                  "teamId": 91,
                  "playerId": 138835,
                  "player": "F. Balogun",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1552769,
                  "teamId": 91,
                  "playerId": 419035,
                  "player": "M. Coulibaly",
                  "type": "Missing Fixture",
                  "reason": "Muscle Injury"
                },
                {
                  "fixtureId": 1552769,
                  "teamId": 91,
                  "playerId": 135775,
                  "player": "A. Fati",
                  "type": "Missing Fixture",
                  "reason": "Calf Injury"
                },
                {
                  "fixtureId": 1552769,
                  "teamId": 91,
                  "playerId": 1101,
                  "player": "T. Minamino",
                  "type": "Missing Fixture",
                  "reason": "Inactive"
                },
                {
                  "fixtureId": 1552769,
                  "teamId": 91,
                  "playerId": 231,
                  "player": "J. Teze",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1552769,
                  "teamId": 91,
                  "playerId": 671702,
                  "player": "A. Soubeir",
                  "type": "Questionable",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1552769,
                  "teamId": 116,
                  "playerId": 44594,
                  "player": "S. Abdulhamid",
                  "type": "Missing Fixture",
                  "reason": "Contusion"
                },
                {
                  "fixtureId": 1552769,
                  "teamId": 116,
                  "playerId": 322984,
                  "player": "S. Baidoo",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1552769,
                  "teamId": 116,
                  "playerId": 237191,
                  "player": "J. Chavez",
                  "type": "Missing Fixture",
                  "reason": "Thigh Injury"
                },
                {
                  "fixtureId": 1552769,
                  "teamId": 116,
                  "playerId": 178708,
                  "player": "M. Nawrocki",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1552769,
                  "teamId": 116,
                  "playerId": 327599,
                  "player": "Y. Titraoui",
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
              "points": 13,
              "goalsDiff": 12,
              "form": "WWLWD",
              "all": {
                "played": 6,
                "wins": 4,
                "draws": 1,
                "losses": 1,
                "goalsFor": 19,
                "goalsAgainst": 7
              },
              "home": {
                "played": 3,
                "wins": 1,
                "draws": 1,
                "losses": 1,
                "goalsFor": 8,
                "goalsAgainst": 6
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
              "goalsDiff": -13,
              "form": "LDLDL",
              "all": {
                "played": 6,
                "wins": 0,
                "draws": 2,
                "losses": 4,
                "goalsFor": 6,
                "goalsAgainst": 19
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
                "wins": 0,
                "draws": 1,
                "losses": 2,
                "goalsFor": 3,
                "goalsAgainst": 10
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
              "teamId": 202,
              "team": "Groningen",
              "form": "WWLLDD",
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
              "teamId": 193,
              "team": "PEC Zwolle",
              "form": "LLWLDL",
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
              "teamId": 198,
              "team": "ADO Den Haag",
              "form": "LLLDLL",
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
            },
            {
              "teamId": 420,
              "team": "Cambuur",
              "form": "LLLLDW",
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
            }
          ],
          "fixtures": [
            {
              "fixtureId": 1552173,
              "kickoff": "2026-09-19T03:00:00+09:00",
              "status": "NS",
              "homeTeamId": 202,
              "homeTeam": "Groningen",
              "awayTeamId": 193,
              "awayTeam": "PEC Zwolle",
              "injuriesChecked": true,
              "injuries": [
                {
                  "fixtureId": 1552173,
                  "teamId": 202,
                  "playerId": 361643,
                  "player": "N. Brandis",
                  "type": "Missing Fixture",
                  "reason": "Inactive"
                },
                {
                  "fixtureId": 1552173,
                  "teamId": 202,
                  "playerId": 384585,
                  "player": "T. Hernes",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1552173,
                  "teamId": 202,
                  "playerId": 414188,
                  "player": "M. Jeng",
                  "type": "Missing Fixture",
                  "reason": "Leg Injury"
                },
                {
                  "fixtureId": 1552173,
                  "teamId": 202,
                  "playerId": 446871,
                  "player": "T. Mercera",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1552173,
                  "teamId": 202,
                  "playerId": 631615,
                  "player": "R. Metu",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1552173,
                  "teamId": 193,
                  "playerId": 36970,
                  "player": "S. Floranus",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1552173,
                  "teamId": 193,
                  "playerId": 11245,
                  "player": "F. Krastev",
                  "type": "Missing Fixture",
                  "reason": "Achilles Tendon Injury"
                },
                {
                  "fixtureId": 1552173,
                  "teamId": 193,
                  "playerId": 36932,
                  "player": "Y. Namli",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1552173,
                  "teamId": 193,
                  "playerId": 242,
                  "player": "R. Thomas",
                  "type": "Questionable",
                  "reason": "Injury"
                }
              ],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1552172,
              "kickoff": "2026-09-19T23:30:00+09:00",
              "status": "NS",
              "homeTeamId": 198,
              "homeTeam": "ADO Den Haag",
              "awayTeamId": 420,
              "awayTeam": "Cambuur",
              "injuriesChecked": true,
              "injuries": [],
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
              "teamId": 238,
              "team": "Academico Viseu",
              "rank": 8,
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
              "goalsDiff": -4,
              "form": "LLLDW",
              "all": {
                "played": 6,
                "wins": 2,
                "draws": 1,
                "losses": 3,
                "goalsFor": 7,
                "goalsAgainst": 11
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
                "played": 3,
                "wins": 1,
                "draws": 0,
                "losses": 2,
                "goalsFor": 4,
                "goalsAgainst": 6
              }
            },
            {
              "teamId": 215,
              "team": "Moreirense",
              "rank": 11,
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
              "teamId": 4724,
              "team": "Alverca",
              "rank": 12,
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
              "rank": 13,
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
              "teamId": 226,
              "team": "Rio Ave",
              "rank": 16,
              "points": 4,
              "goalsDiff": -9,
              "form": "DLLWL",
              "all": {
                "played": 6,
                "wins": 1,
                "draws": 1,
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
                "goalsAgainst": 9
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
              "teamId": 225,
              "team": "Nacional",
              "form": "DWLLLL",
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
              "teamId": 242,
              "team": "Famalicao",
              "form": "DLLDDD",
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
              "teamId": 214,
              "team": "Maritimo",
              "form": "WWDLLL",
              "all": {
                "played": 6,
                "wins": 2,
                "draws": 1,
                "losses": 3,
                "goalsFor": 7,
                "goalsAgainst": 11
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
                "played": 3,
                "wins": 1,
                "draws": 0,
                "losses": 2,
                "goalsFor": 4,
                "goalsAgainst": 6
              }
            }
          ],
          "fixtures": [
            {
              "fixtureId": 1575505,
              "kickoff": "2026-09-19T23:30:00+09:00",
              "status": "NS",
              "homeTeamId": 225,
              "homeTeam": "Nacional",
              "awayTeamId": 242,
              "awayTeam": "Famalicao",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1575504,
              "kickoff": "2026-09-19T23:30:00+09:00",
              "status": "NS",
              "homeTeamId": 762,
              "homeTeam": "GIL Vicente",
              "awayTeamId": 214,
              "awayTeam": "Maritimo",
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
              "goalsDiff": 6,
              "form": "LWWWW",
              "all": {
                "played": 6,
                "wins": 4,
                "draws": 0,
                "losses": 2,
                "goalsFor": 13,
                "goalsAgainst": 7
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
                "played": 3,
                "wins": 1,
                "draws": 0,
                "losses": 2,
                "goalsFor": 5,
                "goalsAgainst": 5
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
              "goalsDiff": -1,
              "form": "LLWDD",
              "all": {
                "played": 6,
                "wins": 2,
                "draws": 2,
                "losses": 2,
                "goalsFor": 8,
                "goalsAgainst": 9
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
              "teamId": 252,
              "team": "Aberdeen",
              "rank": 8,
              "points": 7,
              "goalsDiff": -1,
              "form": "WDLLL",
              "all": {
                "played": 6,
                "wins": 2,
                "draws": 1,
                "losses": 3,
                "goalsFor": 6,
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
                "played": 3,
                "wins": 1,
                "draws": 0,
                "losses": 2,
                "goalsFor": 4,
                "goalsAgainst": 5
              }
            },
            {
              "teamId": 249,
              "team": "Hibernian",
              "rank": 9,
              "points": 6,
              "goalsDiff": -3,
              "form": "LLLWW",
              "all": {
                "played": 6,
                "wins": 2,
                "draws": 0,
                "losses": 4,
                "goalsFor": 7,
                "goalsAgainst": 10
              },
              "home": {
                "played": 3,
                "wins": 0,
                "draws": 0,
                "losses": 3,
                "goalsFor": 2,
                "goalsAgainst": 6
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
              "rank": 10,
              "points": 5,
              "goalsDiff": -3,
              "form": "WDLLD",
              "all": {
                "played": 6,
                "wins": 1,
                "draws": 2,
                "losses": 3,
                "goalsFor": 5,
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
                "wins": 0,
                "draws": 2,
                "losses": 1,
                "goalsFor": 2,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 1386,
              "team": "Dundee Utd",
              "rank": 11,
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
              "teamId": 250,
              "team": "Kilmarnock",
              "rank": 12,
              "points": 4,
              "goalsDiff": -9,
              "form": "WDLLL",
              "all": {
                "played": 6,
                "wins": 1,
                "draws": 1,
                "losses": 4,
                "goalsFor": 5,
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
              "teamId": 249,
              "team": "Hibernian",
              "form": "LWWLLL",
              "all": {
                "played": 6,
                "wins": 2,
                "draws": 0,
                "losses": 4,
                "goalsFor": 7,
                "goalsAgainst": 10
              },
              "home": {
                "played": 3,
                "wins": 0,
                "draws": 0,
                "losses": 3,
                "goalsFor": 2,
                "goalsAgainst": 6
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
              "teamId": 252,
              "team": "Aberdeen",
              "form": "WLLLDW",
              "all": {
                "played": 6,
                "wins": 2,
                "draws": 1,
                "losses": 3,
                "goalsFor": 6,
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
                "played": 3,
                "wins": 1,
                "draws": 0,
                "losses": 2,
                "goalsFor": 4,
                "goalsAgainst": 5
              }
            },
            {
              "teamId": 251,
              "team": "ST Mirren",
              "form": "WWDWLL",
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
              "teamId": 1386,
              "team": "Dundee Utd",
              "form": "DLLWLD",
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
              "teamId": 253,
              "team": "Dundee",
              "form": "LWWLDL",
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
              "teamId": 256,
              "team": "Motherwell",
              "form": "WDDWLL",
              "all": {
                "played": 6,
                "wins": 2,
                "draws": 2,
                "losses": 2,
                "goalsFor": 8,
                "goalsAgainst": 9
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
                "played": 3,
                "wins": 1,
                "draws": 1,
                "losses": 1,
                "goalsFor": 5,
                "goalsAgainst": 5
              }
            },
            {
              "teamId": 258,
              "team": "ST Johnstone",
              "form": "WLLDWL",
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
              "teamId": 1389,
              "team": "Falkirk",
              "form": "LDLLDW",
              "all": {
                "played": 6,
                "wins": 1,
                "draws": 2,
                "losses": 3,
                "goalsFor": 5,
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
                "wins": 0,
                "draws": 2,
                "losses": 1,
                "goalsFor": 2,
                "goalsAgainst": 3
              }
            }
          ],
          "fixtures": [
            {
              "fixtureId": 1556665,
              "kickoff": "2026-09-19T23:00:00+09:00",
              "status": "NS",
              "homeTeamId": 249,
              "homeTeam": "Hibernian",
              "awayTeamId": 252,
              "awayTeam": "Aberdeen",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1556668,
              "kickoff": "2026-09-19T23:00:00+09:00",
              "status": "NS",
              "homeTeamId": 251,
              "homeTeam": "ST Mirren",
              "awayTeamId": 1386,
              "awayTeam": "Dundee Utd",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1556664,
              "kickoff": "2026-09-19T23:00:00+09:00",
              "status": "NS",
              "homeTeamId": 253,
              "homeTeam": "Dundee",
              "awayTeamId": 256,
              "awayTeam": "Motherwell",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1556667,
              "kickoff": "2026-09-19T23:00:00+09:00",
              "status": "NS",
              "homeTeamId": 258,
              "homeTeam": "ST Johnstone",
              "awayTeamId": 1389,
              "awayTeam": "Falkirk",
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
              "teamId": 631,
              "team": "Gent",
              "form": "WWWWWD",
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
              "teamId": 733,
              "team": "Standard Liege",
              "form": "DDWWWL",
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
              "teamId": 260,
              "team": "OH Leuven",
              "form": "LLLLLD",
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
            }
          ],
          "fixtures": [
            {
              "fixtureId": 1558635,
              "kickoff": "2026-09-19T03:45:00+09:00",
              "status": "NS",
              "homeTeamId": 631,
              "homeTeam": "Gent",
              "awayTeamId": 733,
              "awayTeam": "Standard Liege",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1558636,
              "kickoff": "2026-09-19T23:00:00+09:00",
              "status": "NS",
              "homeTeamId": 260,
              "homeTeam": "OH Leuven",
              "awayTeamId": 5902,
              "awayTeam": "RAAL La Louvière",
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
              "teamId": 3573,
              "team": "Gaziantep FK",
              "rank": 7,
              "points": 8,
              "goalsDiff": 2,
              "form": "DWLWD",
              "all": {
                "played": 5,
                "wins": 2,
                "draws": 2,
                "losses": 1,
                "goalsFor": 7,
                "goalsAgainst": 5
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
                "played": 2,
                "wins": 2,
                "draws": 0,
                "losses": 0,
                "goalsFor": 5,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 996,
              "team": "Alanyaspor",
              "rank": 8,
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
              "rank": 9,
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
              "rank": 10,
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
              "teamId": 611,
              "team": "Fenerbahçe",
              "rank": 11,
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
              "teamId": 997,
              "team": "Gençlerbirliği S.K.",
              "rank": 12,
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
              "teamId": 1004,
              "team": "Kasımpaşa",
              "form": "DWDDW",
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
              "teamId": 607,
              "team": "Konyaspor",
              "form": "LLLLW",
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
              "teamId": 6343,
              "team": "Çorum FK",
              "form": "DLLWW",
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
              "teamId": 996,
              "team": "Alanyaspor",
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
              "teamId": 3573,
              "team": "Gaziantep FK",
              "form": "DWLWD",
              "all": {
                "played": 5,
                "wins": 2,
                "draws": 2,
                "losses": 1,
                "goalsFor": 7,
                "goalsAgainst": 5
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
              "fixtureId": 1584418,
              "kickoff": "2026-09-19T02:00:00+09:00",
              "status": "NS",
              "homeTeamId": 1004,
              "homeTeam": "Kasımpaşa",
              "awayTeamId": 607,
              "awayTeam": "Konyaspor",
              "injuriesChecked": true,
              "injuries": [
                {
                  "fixtureId": 1584418,
                  "teamId": 1004,
                  "playerId": 49870,
                  "player": "K. Corekci",
                  "type": "Missing Fixture",
                  "reason": "Achilles Tendon Injury"
                },
                {
                  "fixtureId": 1584418,
                  "teamId": 1004,
                  "playerId": 89723,
                  "player": "A. Baldursson",
                  "type": "Questionable",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1584418,
                  "teamId": 1004,
                  "playerId": 50067,
                  "player": "H. Hajradinovic",
                  "type": "Questionable",
                  "reason": "Inactive"
                },
                {
                  "fixtureId": 1584418,
                  "teamId": 1004,
                  "playerId": 49469,
                  "player": "M. Ouanes",
                  "type": "Questionable",
                  "reason": "Inactive"
                }
              ],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1584414,
              "kickoff": "2026-09-19T23:00:00+09:00",
              "status": "NS",
              "homeTeamId": 6343,
              "homeTeam": "Çorum FK",
              "awayTeamId": 996,
              "awayTeam": "Alanyaspor",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1584419,
              "kickoff": "2026-09-19T23:00:00+09:00",
              "status": "NS",
              "homeTeamId": 7411,
              "homeTeam": "Kocaelispor",
              "awayTeamId": 3573,
              "awayTeam": "Gaziantep FK",
              "injuriesChecked": true,
              "injuries": [],
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
              "goalsDiff": 6,
              "form": "WWDWL",
              "all": {
                "played": 29,
                "wins": 14,
                "draws": 5,
                "losses": 10,
                "goalsFor": 44,
                "goalsAgainst": 38
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
                "played": 14,
                "wins": 6,
                "draws": 4,
                "losses": 4,
                "goalsFor": 18,
                "goalsAgainst": 15
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
              "teamId": 2763,
              "team": "Incheon United",
              "rank": 7,
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
              "rank": 8,
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
              "teamId": 2748,
              "team": "FC Anyang",
              "rank": 9,
              "points": 35,
              "goalsDiff": -10,
              "form": "DLLDW",
              "all": {
                "played": 29,
                "wins": 8,
                "draws": 11,
                "losses": 10,
                "goalsFor": 36,
                "goalsAgainst": 46
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
                "played": 15,
                "wins": 5,
                "draws": 6,
                "losses": 4,
                "goalsFor": 21,
                "goalsAgainst": 20
              }
            },
            {
              "teamId": 2745,
              "team": "Bucheon FC 1995",
              "rank": 10,
              "points": 32,
              "goalsDiff": -7,
              "form": "DLLDL",
              "all": {
                "played": 29,
                "wins": 7,
                "draws": 11,
                "losses": 11,
                "goalsFor": 31,
                "goalsAgainst": 38
              },
              "home": {
                "played": 16,
                "wins": 3,
                "draws": 7,
                "losses": 6,
                "goalsFor": 18,
                "goalsAgainst": 24
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
              "teamId": 2768,
              "team": "Gimcheon Sangmu FC",
              "rank": 11,
              "points": 30,
              "goalsDiff": -8,
              "form": "DDDLD",
              "all": {
                "played": 29,
                "wins": 4,
                "draws": 18,
                "losses": 7,
                "goalsFor": 28,
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
                "played": 15,
                "wins": 3,
                "draws": 8,
                "losses": 4,
                "goalsFor": 14,
                "goalsAgainst": 16
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
              "teamId": 2745,
              "team": "Bucheon FC 1995",
              "form": "WDLDDLWDLLWLLDWDDLLDWDWWLDLLD",
              "all": {
                "played": 29,
                "wins": 7,
                "draws": 11,
                "losses": 11,
                "goalsFor": 31,
                "goalsAgainst": 38
              },
              "home": {
                "played": 16,
                "wins": 3,
                "draws": 7,
                "losses": 6,
                "goalsFor": 18,
                "goalsAgainst": 24
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
              "teamId": 2768,
              "team": "Gimcheon Sangmu FC",
              "form": "DDDDDLDDLWWLLDLDDLDWWDDDDLDDD",
              "all": {
                "played": 29,
                "wins": 4,
                "draws": 18,
                "losses": 7,
                "goalsFor": 28,
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
                "played": 15,
                "wins": 3,
                "draws": 8,
                "losses": 4,
                "goalsFor": 14,
                "goalsAgainst": 16
              }
            },
            {
              "teamId": 2748,
              "team": "FC Anyang",
              "form": "DWDLLDDWDWLDDDWLWDWWLLLLWDLLD",
              "all": {
                "played": 29,
                "wins": 8,
                "draws": 11,
                "losses": 10,
                "goalsFor": 36,
                "goalsAgainst": 46
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
                "played": 15,
                "wins": 5,
                "draws": 6,
                "losses": 4,
                "goalsFor": 21,
                "goalsAgainst": 20
              }
            },
            {
              "teamId": 2767,
              "team": "Ulsan Hyundai FC",
              "form": "WWWDLWLWDLLWWWLDLDLWWWLLLWDWW",
              "all": {
                "played": 29,
                "wins": 14,
                "draws": 5,
                "losses": 10,
                "goalsFor": 44,
                "goalsAgainst": 38
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
                "played": 14,
                "wins": 6,
                "draws": 4,
                "losses": 4,
                "goalsFor": 18,
                "goalsAgainst": 15
              }
            }
          ],
          "fixtures": [
            {
              "fixtureId": 1507070,
              "kickoff": "2026-09-19T16:30:00+09:00",
              "status": "NS",
              "homeTeamId": 2745,
              "homeTeam": "Bucheon FC 1995",
              "awayTeamId": 2768,
              "awayTeam": "Gimcheon Sangmu FC",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1507071,
              "kickoff": "2026-09-19T19:00:00+09:00",
              "status": "NS",
              "homeTeamId": 2748,
              "homeTeam": "FC Anyang",
              "awayTeamId": 2767,
              "awayTeam": "Ulsan Hyundai FC",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
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
              "teamId": 2747,
              "team": "Daegu FC",
              "rank": 2,
              "points": 46,
              "goalsDiff": 14,
              "form": "WDWDW",
              "all": {
                "played": 25,
                "wins": 13,
                "draws": 7,
                "losses": 5,
                "goalsFor": 47,
                "goalsAgainst": 33
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
                "played": 12,
                "wins": 5,
                "draws": 5,
                "losses": 2,
                "goalsFor": 21,
                "goalsAgainst": 17
              }
            },
            {
              "teamId": 2756,
              "team": "Suwon City FC",
              "rank": 3,
              "points": 45,
              "goalsDiff": 18,
              "form": "DDWWD",
              "all": {
                "played": 24,
                "wins": 12,
                "draws": 9,
                "losses": 3,
                "goalsFor": 47,
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
                "played": 13,
                "wins": 6,
                "draws": 4,
                "losses": 3,
                "goalsFor": 24,
                "goalsAgainst": 19
              }
            },
            {
              "teamId": 2749,
              "team": "Seoul E-Land FC",
              "rank": 4,
              "points": 45,
              "goalsDiff": 14,
              "form": "LWDDW",
              "all": {
                "played": 25,
                "wins": 13,
                "draws": 6,
                "losses": 6,
                "goalsFor": 43,
                "goalsAgainst": 29
              },
              "home": {
                "played": 12,
                "wins": 6,
                "draws": 2,
                "losses": 4,
                "goalsFor": 23,
                "goalsAgainst": 17
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
              "goalsDiff": 8,
              "form": "WLLDD",
              "all": {
                "played": 25,
                "wins": 12,
                "draws": 5,
                "losses": 8,
                "goalsFor": 41,
                "goalsAgainst": 33
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
                "played": 12,
                "wins": 5,
                "draws": 2,
                "losses": 5,
                "goalsFor": 20,
                "goalsAgainst": 20
              }
            },
            {
              "teamId": 2751,
              "team": "Gyeongnam FC",
              "rank": 7,
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
              "teamId": 7078,
              "team": "Gimpo Citizen",
              "rank": 8,
              "points": 32,
              "goalsDiff": 0,
              "form": "DLLDW",
              "all": {
                "played": 24,
                "wins": 7,
                "draws": 11,
                "losses": 6,
                "goalsFor": 30,
                "goalsAgainst": 30
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
              "rank": 9,
              "points": 31,
              "goalsDiff": 1,
              "form": "LLWLD",
              "all": {
                "played": 24,
                "wins": 8,
                "draws": 7,
                "losses": 9,
                "goalsFor": 31,
                "goalsAgainst": 30
              },
              "home": {
                "played": 13,
                "wins": 6,
                "draws": 4,
                "losses": 3,
                "goalsFor": 21,
                "goalsAgainst": 16
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
              "goalsDiff": -5,
              "form": "DDLLD",
              "all": {
                "played": 25,
                "wins": 4,
                "draws": 11,
                "losses": 10,
                "goalsFor": 29,
                "goalsAgainst": 34
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
                "played": 13,
                "wins": 2,
                "draws": 4,
                "losses": 7,
                "goalsFor": 19,
                "goalsAgainst": 23
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
              "goalsDiff": -12,
              "form": "DDWWL",
              "all": {
                "played": 24,
                "wins": 4,
                "draws": 9,
                "losses": 11,
                "goalsFor": 28,
                "goalsAgainst": 40
              },
              "home": {
                "played": 10,
                "wins": 3,
                "draws": 4,
                "losses": 3,
                "goalsFor": 12,
                "goalsAgainst": 12
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
              "teamId": 2753,
              "team": "Asan Mugunghwa",
              "form": "WLLWWDDDLWLDWDWDLLWDLWLL",
              "all": {
                "played": 24,
                "wins": 8,
                "draws": 7,
                "losses": 9,
                "goalsFor": 31,
                "goalsAgainst": 30
              },
              "home": {
                "played": 13,
                "wins": 6,
                "draws": 4,
                "losses": 3,
                "goalsFor": 21,
                "goalsAgainst": 16
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
              "teamId": 7060,
              "team": "Cheonan City",
              "form": "DLDDWDWDWLDLWDLLLLDLDLLDD",
              "all": {
                "played": 25,
                "wins": 4,
                "draws": 11,
                "losses": 10,
                "goalsFor": 29,
                "goalsAgainst": 34
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
                "played": 13,
                "wins": 2,
                "draws": 4,
                "losses": 7,
                "goalsFor": 19,
                "goalsAgainst": 23
              }
            },
            {
              "teamId": 2760,
              "team": "Jeonnam Dragons",
              "form": "WLLLLDLDLDDLLDDLWDLLWWDD",
              "all": {
                "played": 24,
                "wins": 4,
                "draws": 9,
                "losses": 11,
                "goalsFor": 28,
                "goalsAgainst": 40
              },
              "home": {
                "played": 10,
                "wins": 3,
                "draws": 4,
                "losses": 3,
                "goalsFor": 12,
                "goalsAgainst": 12
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
              "teamId": 2756,
              "team": "Suwon City FC",
              "form": "WWWWLDLDWDWLDDWWDWWDWWDD",
              "all": {
                "played": 24,
                "wins": 12,
                "draws": 9,
                "losses": 3,
                "goalsFor": 47,
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
                "played": 13,
                "wins": 6,
                "draws": 4,
                "losses": 3,
                "goalsFor": 24,
                "goalsAgainst": 19
              }
            },
            {
              "teamId": 2749,
              "team": "Seoul E-Land FC",
              "form": "LWLDWWWWLWLDWWLWDWWDWDDWL",
              "all": {
                "played": 25,
                "wins": 13,
                "draws": 6,
                "losses": 6,
                "goalsFor": 43,
                "goalsAgainst": 29
              },
              "home": {
                "played": 12,
                "wins": 6,
                "draws": 2,
                "losses": 4,
                "goalsFor": 23,
                "goalsAgainst": 17
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
              "form": "WWWLLDDLWDWWDWWWDLLWWDWDW",
              "all": {
                "played": 25,
                "wins": 13,
                "draws": 7,
                "losses": 5,
                "goalsFor": 47,
                "goalsAgainst": 33
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
                "played": 12,
                "wins": 5,
                "draws": 5,
                "losses": 2,
                "goalsFor": 21,
                "goalsAgainst": 17
              }
            },
            {
              "teamId": 7078,
              "team": "Gimpo Citizen",
              "form": "WWLDDWDDLDWWWDLLDDDWDLLD",
              "all": {
                "played": 24,
                "wins": 7,
                "draws": 11,
                "losses": 6,
                "goalsFor": 30,
                "goalsAgainst": 30
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
                "played": 15,
                "wins": 6,
                "draws": 6,
                "losses": 3,
                "goalsFor": 19,
                "goalsAgainst": 16
              }
            },
            {
              "teamId": 2752,
              "team": "Busan I Park",
              "form": "DWWWWWWWLWWLWDDWLLLLDDLLW",
              "all": {
                "played": 25,
                "wins": 12,
                "draws": 5,
                "losses": 8,
                "goalsFor": 41,
                "goalsAgainst": 33
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
                "played": 12,
                "wins": 5,
                "draws": 2,
                "losses": 5,
                "goalsFor": 20,
                "goalsAgainst": 20
              }
            }
          ],
          "fixtures": [
            {
              "fixtureId": 1510451,
              "kickoff": "2026-09-19T16:30:00+09:00",
              "status": "NS",
              "homeTeamId": 2753,
              "homeTeam": "Asan Mugunghwa",
              "awayTeamId": 7060,
              "awayTeam": "Cheonan City",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1510452,
              "kickoff": "2026-09-19T16:30:00+09:00",
              "status": "NS",
              "homeTeamId": 2760,
              "homeTeam": "Jeonnam Dragons",
              "awayTeamId": 2756,
              "awayTeam": "Suwon City FC",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1510454,
              "kickoff": "2026-09-19T19:00:00+09:00",
              "status": "NS",
              "homeTeamId": 2749,
              "homeTeam": "Seoul E-Land FC",
              "awayTeamId": 2747,
              "awayTeam": "Daegu FC",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1510453,
              "kickoff": "2026-09-19T19:00:00+09:00",
              "status": "NS",
              "homeTeamId": 7078,
              "homeTeam": "Gimpo Citizen",
              "awayTeamId": 2752,
              "awayTeam": "Busan I Park",
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
