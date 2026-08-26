(function attachTeamContextPack(root, factory) {
  const pack = factory();
  if (typeof module !== "undefined" && module.exports) module.exports = pack;
  if (root) root.ODDS_ARCHIVE_TEAM_CONTEXT_PACK = pack;
})(typeof window !== "undefined" ? window : globalThis, function createTeamContextPack() {
  return {
  "version": "team-context-v3",
  "date": "2026-08-27",
  "updatedAt": "2026-08-26T19:59:15.698Z",
  "collection": {
    "dates": [
      "2026-08-27"
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
          "teamId": 536,
          "team": "Sevilla",
          "rank": 1,
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
            "goalsAgainst": 1
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
          "teamId": 543,
          "team": "Real Betis",
          "rank": 2,
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
          "teamId": 542,
          "team": "Alaves",
          "rank": 3,
          "points": 4,
          "goalsDiff": 3,
          "form": "DW",
          "all": {
            "played": 2,
            "wins": 1,
            "draws": 1,
            "losses": 0,
            "goalsFor": 4,
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
            "wins": 0,
            "draws": 1,
            "losses": 0,
            "goalsFor": 1,
            "goalsAgainst": 1
          }
        },
        {
          "teamId": 530,
          "team": "Atletico Madrid",
          "rank": 4,
          "points": 4,
          "goalsDiff": 2,
          "form": "DW",
          "all": {
            "played": 2,
            "wins": 1,
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
            "goalsFor": 4,
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
          "teamId": 529,
          "team": "Barcelona",
          "rank": 5,
          "points": 3,
          "goalsDiff": 5,
          "form": "W",
          "all": {
            "played": 1,
            "wins": 1,
            "draws": 0,
            "losses": 0,
            "goalsFor": 5,
            "goalsAgainst": 0
          },
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
            "goalsFor": 5,
            "goalsAgainst": 0
          }
        },
        {
          "teamId": 540,
          "team": "Espanyol",
          "rank": 6,
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
            "played": 2,
            "wins": 1,
            "draws": 0,
            "losses": 1,
            "goalsFor": 4,
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
          "teamId": 541,
          "team": "Real Madrid",
          "rank": 7,
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
          "teamId": 546,
          "team": "Getafe",
          "rank": 8,
          "points": 3,
          "goalsDiff": -2,
          "form": "WL",
          "all": {
            "played": 2,
            "wins": 1,
            "draws": 0,
            "losses": 1,
            "goalsFor": 1,
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
            "played": 1,
            "wins": 0,
            "draws": 0,
            "losses": 1,
            "goalsFor": 0,
            "goalsAgainst": 3
          }
        },
        {
          "teamId": 533,
          "team": "Villarreal",
          "rank": 9,
          "points": 2,
          "goalsDiff": 0,
          "form": "DD",
          "all": {
            "played": 2,
            "wins": 0,
            "draws": 2,
            "losses": 0,
            "goalsFor": 4,
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
            "draws": 2,
            "losses": 0,
            "goalsFor": 4,
            "goalsAgainst": 4
          }
        },
        {
          "teamId": 544,
          "team": "Deportivo La Coruna",
          "rank": 10,
          "points": 2,
          "goalsDiff": 0,
          "form": "DD",
          "all": {
            "played": 2,
            "wins": 0,
            "draws": 2,
            "losses": 0,
            "goalsFor": 2,
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
          "rank": 11,
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
          "teamId": 538,
          "team": "Celta Vigo",
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
          "teamId": 4665,
          "team": "Racing Santander",
          "rank": 13,
          "points": 1,
          "goalsDiff": -1,
          "form": "LD",
          "all": {
            "played": 2,
            "wins": 0,
            "draws": 1,
            "losses": 1,
            "goalsFor": 2,
            "goalsAgainst": 3
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
            "played": 1,
            "wins": 0,
            "draws": 0,
            "losses": 1,
            "goalsFor": 0,
            "goalsAgainst": 1
          }
        },
        {
          "teamId": 728,
          "team": "Rayo Vallecano",
          "rank": 14,
          "points": 1,
          "goalsDiff": -1,
          "form": "DL",
          "all": {
            "played": 2,
            "wins": 0,
            "draws": 1,
            "losses": 1,
            "goalsFor": 2,
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
            "wins": 0,
            "draws": 0,
            "losses": 1,
            "goalsFor": 1,
            "goalsAgainst": 2
          }
        },
        {
          "teamId": 532,
          "team": "Valencia",
          "rank": 15,
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
            "played": 2,
            "wins": 0,
            "draws": 1,
            "losses": 1,
            "goalsFor": 0,
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
          "teamId": 535,
          "team": "Malaga",
          "rank": 16,
          "points": 1,
          "goalsDiff": -2,
          "form": "DL",
          "all": {
            "played": 2,
            "wins": 0,
            "draws": 1,
            "losses": 1,
            "goalsFor": 1,
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
            "wins": 0,
            "draws": 0,
            "losses": 1,
            "goalsFor": 0,
            "goalsAgainst": 2
          }
        },
        {
          "teamId": 539,
          "team": "Levante",
          "rank": 17,
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
            "goalsFor": 0,
            "goalsAgainst": 3
          }
        },
        {
          "teamId": 797,
          "team": "Elche",
          "rank": 18,
          "points": 1,
          "goalsDiff": -5,
          "form": "LD",
          "all": {
            "played": 2,
            "wins": 0,
            "draws": 1,
            "losses": 1,
            "goalsFor": 1,
            "goalsAgainst": 6
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
            "draws": 1,
            "losses": 0,
            "goalsFor": 1,
            "goalsAgainst": 1
          }
        },
        {
          "teamId": 548,
          "team": "Real Sociedad",
          "rank": 19,
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
          "teamId": 531,
          "team": "Athletic Club",
          "rank": 20,
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
            "played": 1,
            "wins": 0,
            "draws": 0,
            "losses": 1,
            "goalsFor": 1,
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
      "teams": [
        {
          "teamId": 541,
          "team": "Real Madrid",
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
          "teamId": 548,
          "team": "Real Sociedad",
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
          "fixtureId": 1570340,
          "kickoff": "2026-08-27T04:00:00+09:00",
          "status": "HT",
          "homeTeamId": 541,
          "homeTeam": "Real Madrid",
          "awayTeamId": 548,
          "awayTeam": "Real Sociedad",
          "injuriesChecked": true,
          "injuries": [],
          "lineupsChecked": true,
          "lineups": [
            {
              "teamId": 541,
              "team": "Real Madrid",
              "formation": "4-2-3-1",
              "coach": "Jose Mourinho",
              "starters": [
                "Thibaut Courtois",
                "Denzel Dumfries",
                "Ibrahima Konaté",
                "Dean Huijsen",
                "Álvaro Carreras",
                "Bernardo Silva",
                "Federico Valverde",
                "Arda Güler",
                "Jude Bellingham",
                "Vinícius Júnior",
                "Kylian Mbappé"
              ]
            },
            {
              "teamId": 548,
              "team": "Real Sociedad",
              "formation": "4-2-3-1",
              "coach": "Pellegrino Matarazzo",
              "starters": [
                "Álex Remiro",
                "Jon Aramburu",
                "Luken Beitia",
                "Jon Martin",
                "Sergio Gómez",
                "Yangel Herrera",
                "Beñat Turrientes",
                "Takefusa Kubo",
                "Luka Sučić",
                "Job Ochieng",
                "Mikel Oyarzabal"
              ]
            }
          ]
        }
      ]
    },
    {
      "key": "UCL",
      "leagueId": 2,
      "season": "2026",
      "standings": [],
      "teams": [
        {
          "teamId": 80,
          "team": "Lyon",
          "form": "LWD",
          "all": {
            "played": 3,
            "wins": 1,
            "draws": 1,
            "losses": 1,
            "goalsFor": 5,
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
            "played": 2,
            "wins": 0,
            "draws": 1,
            "losses": 1,
            "goalsFor": 2,
            "goalsAgainst": 3
          }
        },
        {
          "teamId": 611,
          "team": "Fenerbahçe",
          "form": "WDWWD",
          "all": {
            "played": 5,
            "wins": 3,
            "draws": 2,
            "losses": 0,
            "goalsFor": 6,
            "goalsAgainst": 2
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
            "played": 2,
            "wins": 1,
            "draws": 1,
            "losses": 0,
            "goalsFor": 2,
            "goalsAgainst": 1
          }
        },
        {
          "teamId": 575,
          "team": "AEK Athens FC",
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
          "teamId": 646,
          "team": "Levski Sofia",
          "form": "DWWDWWD",
          "all": {
            "played": 7,
            "wins": 4,
            "draws": 3,
            "losses": 0,
            "goalsFor": 10,
            "goalsAgainst": 3
          },
          "home": {
            "played": 4,
            "wins": 3,
            "draws": 1,
            "losses": 0,
            "goalsFor": 6,
            "goalsAgainst": 0
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
          "teamId": 759,
          "team": "Viking",
          "form": "D",
          "all": {
            "played": 1,
            "wins": 0,
            "draws": 1,
            "losses": 0,
            "goalsFor": 2,
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
            "draws": 1,
            "losses": 0,
            "goalsFor": 2,
            "goalsAgainst": 2
          }
        },
        {
          "teamId": 620,
          "team": "Dinamo Zagreb",
          "form": "DWWWD",
          "all": {
            "played": 5,
            "wins": 3,
            "draws": 2,
            "losses": 0,
            "goalsFor": 13,
            "goalsAgainst": 6
          },
          "home": {
            "played": 3,
            "wins": 2,
            "draws": 1,
            "losses": 0,
            "goalsFor": 10,
            "goalsAgainst": 4
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
          "teamId": 4360,
          "team": "Celje",
          "form": "DWLWD",
          "all": {
            "played": 5,
            "wins": 2,
            "draws": 2,
            "losses": 1,
            "goalsFor": 10,
            "goalsAgainst": 8
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
            "wins": 0,
            "draws": 2,
            "losses": 1,
            "goalsFor": 5,
            "goalsAgainst": 6
          }
        },
        {
          "teamId": 656,
          "team": "Slovan Bratislava",
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
            "wins": 1,
            "draws": 2,
            "losses": 0,
            "goalsFor": 4,
            "goalsAgainst": 2
          },
          "away": {
            "played": 2,
            "wins": 2,
            "draws": 0,
            "losses": 0,
            "goalsFor": 4,
            "goalsAgainst": 1
          }
        }
      ],
      "fixtures": [
        {
          "fixtureId": 1622630,
          "kickoff": "2026-08-27T04:00:00+09:00",
          "status": "HT",
          "homeTeamId": 80,
          "homeTeam": "Lyon",
          "awayTeamId": 611,
          "awayTeam": "Fenerbahçe",
          "injuriesChecked": true,
          "injuries": [],
          "lineupsChecked": true,
          "lineups": [
            {
              "teamId": 80,
              "team": "Lyon",
              "formation": "4-3-3",
              "coach": "Paulo Fonseca",
              "starters": [
                "Dominik Greif",
                "Ainsley Maitland-Niles",
                "Ruben Kluivert",
                "Moussa Niakhaté",
                "Abner Vinícius",
                "Tanner Tessmann",
                "Tyler Morton",
                "Corentin Tolisso",
                "Ernest Nuamah",
                "Loïs Openda",
                "Malick Fofana"
              ]
            },
            {
              "teamId": 611,
              "team": "Fenerbahçe",
              "formation": "4-2-3-1",
              "coach": "Ismail Kartal",
              "starters": [
                "Ederson",
                "Nélson Semedo",
                "Milan Škriniar",
                "Nathan Aké",
                "Archie Brown",
                "N'Golo Kanté",
                "Mattéo Guendouzi",
                "Mason Greenwood",
                "Talisca",
                "Oğuz Aydın",
                "Vedat Muriqi"
              ]
            }
          ]
        },
        {
          "fixtureId": 1622629,
          "kickoff": "2026-08-27T04:00:00+09:00",
          "status": "HT",
          "homeTeamId": 575,
          "homeTeam": "AEK Athens FC",
          "awayTeamId": 646,
          "awayTeam": "Levski Sofia",
          "injuriesChecked": true,
          "injuries": [],
          "lineupsChecked": true,
          "lineups": [
            {
              "teamId": 575,
              "team": "AEK Athens FC",
              "formation": "4-4-2",
              "coach": "Marko Nikolic",
              "starters": [
                "Thomas Strakosha",
                "Lazaros Rota",
                "Harold Moukoudi",
                "Filipe Relvas",
                "Stavros Pilios",
                "Lovro Majer",
                "Răzvan Marin",
                "Kaan Kairinen",
                "Aboubakary Koita",
                "Barnabás Varga",
                "Luka Jović"
              ]
            },
            {
              "teamId": 646,
              "team": "Levski Sofia",
              "formation": "4-3-3",
              "coach": "Julio Velazquez",
              "starters": [
                "Svetoslav Vutsov",
                "Aldair",
                "Kristian Dimitrov",
                "Nikola Serafimov",
                "Álex Centelles",
                "Serginho",
                "El Mehdi Moubarik",
                "Maicon",
                "Armstrong Oko-Flex",
                "Everton Bala",
                "Reinaldo"
              ]
            }
          ]
        },
        {
          "fixtureId": 1622631,
          "kickoff": "2026-08-27T04:00:00+09:00",
          "status": "HT",
          "homeTeamId": 759,
          "homeTeam": "Viking",
          "awayTeamId": 620,
          "awayTeam": "Dinamo Zagreb",
          "injuriesChecked": true,
          "injuries": [],
          "lineupsChecked": true,
          "lineups": [
            {
              "teamId": 759,
              "team": "Viking",
              "formation": "4-3-3",
              "coach": "Bjarte Aarsheim",
              "starters": [
                "Arild Østbø",
                "Henrik Heggheim",
                "Gianni Stensness",
                "Henrik Sælebakke Falchener",
                "Kristoffer Haugen",
                "Tobias Moi",
                "Joe Bell",
                "Kristoffer Askildsen",
                "Zlatko Tripić",
                "Peter Christiansen",
                "Edvin Austbø"
              ]
            },
            {
              "teamId": 620,
              "team": "Dinamo Zagreb",
              "formation": "4-1-4-1",
              "coach": "Mario Kovacevic",
              "starters": [
                "Ivan Nevistić",
                "Moris Valinčić",
                "Sergi Domínguez",
                "Scott McKenna",
                "Matteo Pérez Vinlöf",
                "Josip Mišić",
                "Mateo Lisica",
                "Luka Stojković",
                "Miha Zajc",
                "Arber Hoxha",
                "Dion Drena Beljo"
              ]
            }
          ]
        },
        {
          "fixtureId": 1622628,
          "kickoff": "2026-08-27T04:00:00+09:00",
          "status": "HT",
          "homeTeamId": 4360,
          "homeTeam": "Celje",
          "awayTeamId": 656,
          "awayTeam": "Slovan Bratislava",
          "injuriesChecked": true,
          "injuries": [],
          "lineupsChecked": true,
          "lineups": [
            {
              "teamId": 4360,
              "team": "Celje",
              "formation": "4-2-3-1",
              "coach": "Vitor Campelos",
              "starters": [
                "Žan-Luk Leban",
                "Pijus Širvys",
                "Darko Hrka",
                "Artemijus Tutyškinas",
                "Milot Avdyli",
                "Papa Daniel",
                "Mark Zabukovnik",
                "Yaya Dukuly",
                "Svit Sešlar",
                "Mario Kvesić",
                "Andrej Kotnik"
              ]
            },
            {
              "teamId": 656,
              "team": "Slovan Bratislava",
              "formation": "4-2-3-1",
              "coach": "Yaya Toure",
              "starters": [
                "Dominik Takáč",
                "César Blackman",
                "Kenan Bajrić",
                "Svetozar Marković",
                "Sandro Cruz",
                "Cristian Martínez",
                "Peter Pokorný",
                "Tigran Barseghyan",
                "Rahim Ibrahim",
                "Suleiman Camara",
                "Andraž Šporar"
              ]
            }
          ]
        }
      ]
    }
  ],
  "dates": [
    {
      "date": "2026-08-26",
      "updatedAt": "2026-08-26T08:59:14.218Z",
      "leagues": [
        {
          "key": "LALIGA",
          "leagueId": 140,
          "season": "2026",
          "standings": [
            {
              "teamId": 536,
              "team": "Sevilla",
              "rank": 1,
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
                "goalsAgainst": 1
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
              "teamId": 543,
              "team": "Real Betis",
              "rank": 2,
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
              "teamId": 542,
              "team": "Alaves",
              "rank": 3,
              "points": 4,
              "goalsDiff": 3,
              "form": "DW",
              "all": {
                "played": 2,
                "wins": 1,
                "draws": 1,
                "losses": 0,
                "goalsFor": 4,
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
                "wins": 0,
                "draws": 1,
                "losses": 0,
                "goalsFor": 1,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 530,
              "team": "Atletico Madrid",
              "rank": 4,
              "points": 4,
              "goalsDiff": 2,
              "form": "DW",
              "all": {
                "played": 2,
                "wins": 1,
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
                "goalsFor": 4,
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
              "teamId": 529,
              "team": "Barcelona",
              "rank": 5,
              "points": 3,
              "goalsDiff": 5,
              "form": "W",
              "all": {
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 5,
                "goalsAgainst": 0
              },
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
                "goalsFor": 5,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 540,
              "team": "Espanyol",
              "rank": 6,
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
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 4,
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
              "teamId": 541,
              "team": "Real Madrid",
              "rank": 7,
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
              "teamId": 546,
              "team": "Getafe",
              "rank": 8,
              "points": 3,
              "goalsDiff": -2,
              "form": "WL",
              "all": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 1,
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
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 0,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 533,
              "team": "Villarreal",
              "rank": 9,
              "points": 2,
              "goalsDiff": 0,
              "form": "DD",
              "all": {
                "played": 2,
                "wins": 0,
                "draws": 2,
                "losses": 0,
                "goalsFor": 4,
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
                "draws": 2,
                "losses": 0,
                "goalsFor": 4,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 544,
              "team": "Deportivo La Coruna",
              "rank": 10,
              "points": 2,
              "goalsDiff": 0,
              "form": "DD",
              "all": {
                "played": 2,
                "wins": 0,
                "draws": 2,
                "losses": 0,
                "goalsFor": 2,
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
              "rank": 11,
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
              "teamId": 538,
              "team": "Celta Vigo",
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
              "teamId": 4665,
              "team": "Racing Santander",
              "rank": 13,
              "points": 1,
              "goalsDiff": -1,
              "form": "LD",
              "all": {
                "played": 2,
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 2,
                "goalsAgainst": 3
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
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 0,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 728,
              "team": "Rayo Vallecano",
              "rank": 14,
              "points": 1,
              "goalsDiff": -1,
              "form": "DL",
              "all": {
                "played": 2,
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 2,
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
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 1,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 532,
              "team": "Valencia",
              "rank": 15,
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
                "played": 2,
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 0,
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
              "teamId": 535,
              "team": "Malaga",
              "rank": 16,
              "points": 1,
              "goalsDiff": -2,
              "form": "DL",
              "all": {
                "played": 2,
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 1,
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
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 0,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 539,
              "team": "Levante",
              "rank": 17,
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
                "goalsFor": 0,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 797,
              "team": "Elche",
              "rank": 18,
              "points": 1,
              "goalsDiff": -5,
              "form": "LD",
              "all": {
                "played": 2,
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 1,
                "goalsAgainst": 6
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
                "draws": 1,
                "losses": 0,
                "goalsFor": 1,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 548,
              "team": "Real Sociedad",
              "rank": 19,
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
              "teamId": 531,
              "team": "Athletic Club",
              "rank": 20,
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
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 1,
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
          "teams": [
            {
              "teamId": 532,
              "team": "Valencia",
              "form": "DL",
              "all": {
                "played": 2,
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 0,
                "goalsAgainst": 1
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
              "fixtureId": 1570342,
              "kickoff": "2026-08-26T04:00:00+09:00",
              "status": "FT",
              "homeTeamId": 532,
              "homeTeam": "Valencia",
              "awayTeamId": 543,
              "awayTeam": "Real Betis",
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
          "standings": [],
          "teams": [
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
              "teamId": 563,
              "team": "Hapoel Beer Sheva",
              "form": "LWWWWL",
              "all": {
                "played": 6,
                "wins": 4,
                "draws": 0,
                "losses": 2,
                "goalsFor": 10,
                "goalsAgainst": 8
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
                "wins": 1,
                "draws": 0,
                "losses": 2,
                "goalsFor": 5,
                "goalsAgainst": 7
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
              "teamId": 413,
              "team": "NEC Nijmegen",
              "form": "DWLL",
              "all": {
                "played": 4,
                "wins": 1,
                "draws": 1,
                "losses": 2,
                "goalsFor": 3,
                "goalsAgainst": 7
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
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 0,
                "goalsAgainst": 3
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
              "teamId": 247,
              "team": "Celtic",
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
                "goalsAgainst": 0
              },
              "away": {
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 1,
                "goalsAgainst": 5
              }
            }
          ],
          "fixtures": [
            {
              "fixtureId": 1622626,
              "kickoff": "2026-08-26T01:45:00+09:00",
              "status": "AET",
              "homeTeamId": 13976,
              "homeTeam": "Sabah FA",
              "awayTeamId": 563,
              "awayTeam": "Hapoel Beer Sheva",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1622627,
              "kickoff": "2026-08-26T04:00:00+09:00",
              "status": "FT",
              "homeTeamId": 327,
              "homeTeam": "Bodo/Glimt",
              "awayTeamId": 413,
              "awayTeam": "NEC Nijmegen",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1610924,
              "kickoff": "2026-08-26T04:00:00+09:00",
              "status": "AET",
              "homeTeamId": 1026,
              "homeTeam": "Lask Linz",
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
          "key": "KLEAGUE1",
          "leagueId": 292,
          "season": "2026",
          "standings": [
            {
              "teamId": 2766,
              "team": "FC Seoul",
              "rank": 1,
              "points": 53,
              "goalsDiff": 28,
              "form": "WWWDD",
              "all": {
                "played": 25,
                "wins": 16,
                "draws": 5,
                "losses": 4,
                "goalsFor": 47,
                "goalsAgainst": 19
              },
              "home": {
                "played": 12,
                "wins": 7,
                "draws": 2,
                "losses": 3,
                "goalsFor": 21,
                "goalsAgainst": 10
              },
              "away": {
                "played": 13,
                "wins": 9,
                "draws": 3,
                "losses": 1,
                "goalsFor": 26,
                "goalsAgainst": 9
              }
            },
            {
              "teamId": 2762,
              "team": "Jeonbuk Motors",
              "rank": 2,
              "points": 38,
              "goalsDiff": 9,
              "form": "DWLLD",
              "all": {
                "played": 25,
                "wins": 10,
                "draws": 8,
                "losses": 7,
                "goalsFor": 31,
                "goalsAgainst": 22
              },
              "home": {
                "played": 12,
                "wins": 6,
                "draws": 2,
                "losses": 4,
                "goalsFor": 18,
                "goalsAgainst": 13
              },
              "away": {
                "played": 13,
                "wins": 4,
                "draws": 6,
                "losses": 3,
                "goalsFor": 13,
                "goalsAgainst": 9
              }
            },
            {
              "teamId": 2767,
              "team": "Ulsan Hyundai FC",
              "rank": 3,
              "points": 37,
              "goalsDiff": 3,
              "form": "LLWWW",
              "all": {
                "played": 24,
                "wins": 11,
                "draws": 4,
                "losses": 9,
                "goalsFor": 37,
                "goalsAgainst": 34
              },
              "home": {
                "played": 12,
                "wins": 5,
                "draws": 1,
                "losses": 6,
                "goalsFor": 20,
                "goalsAgainst": 21
              },
              "away": {
                "played": 12,
                "wins": 6,
                "draws": 3,
                "losses": 3,
                "goalsFor": 17,
                "goalsAgainst": 13
              }
            },
            {
              "teamId": 2746,
              "team": "Gangwon FC",
              "rank": 4,
              "points": 35,
              "goalsDiff": 6,
              "form": "LWLLD",
              "all": {
                "played": 23,
                "wins": 9,
                "draws": 8,
                "losses": 6,
                "goalsFor": 28,
                "goalsAgainst": 22
              },
              "home": {
                "played": 10,
                "wins": 4,
                "draws": 4,
                "losses": 2,
                "goalsFor": 14,
                "goalsAgainst": 9
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
              "teamId": 2761,
              "team": "Jeju United FC",
              "rank": 5,
              "points": 35,
              "goalsDiff": 2,
              "form": "LDWWD",
              "all": {
                "played": 25,
                "wins": 9,
                "draws": 8,
                "losses": 8,
                "goalsFor": 28,
                "goalsAgainst": 26
              },
              "home": {
                "played": 15,
                "wins": 4,
                "draws": 6,
                "losses": 5,
                "goalsFor": 15,
                "goalsAgainst": 17
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
              "rank": 6,
              "points": 34,
              "goalsDiff": -5,
              "form": "WLWLL",
              "all": {
                "played": 25,
                "wins": 10,
                "draws": 4,
                "losses": 11,
                "goalsFor": 24,
                "goalsAgainst": 29
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
                "played": 14,
                "wins": 7,
                "draws": 2,
                "losses": 5,
                "goalsFor": 20,
                "goalsAgainst": 19
              }
            },
            {
              "teamId": 2763,
              "team": "Incheon United",
              "rank": 7,
              "points": 33,
              "goalsDiff": 5,
              "form": "WDDDW",
              "all": {
                "played": 23,
                "wins": 9,
                "draws": 6,
                "losses": 8,
                "goalsFor": 30,
                "goalsAgainst": 25
              },
              "home": {
                "played": 12,
                "wins": 4,
                "draws": 2,
                "losses": 6,
                "goalsFor": 13,
                "goalsAgainst": 13
              },
              "away": {
                "played": 11,
                "wins": 5,
                "draws": 4,
                "losses": 2,
                "goalsFor": 17,
                "goalsAgainst": 12
              }
            },
            {
              "teamId": 2748,
              "team": "FC Anyang",
              "rank": 8,
              "points": 30,
              "goalsDiff": -7,
              "form": "LLLLW",
              "all": {
                "played": 24,
                "wins": 7,
                "draws": 9,
                "losses": 8,
                "goalsFor": 30,
                "goalsAgainst": 37
              },
              "home": {
                "played": 12,
                "wins": 2,
                "draws": 5,
                "losses": 5,
                "goalsFor": 13,
                "goalsAgainst": 22
              },
              "away": {
                "played": 12,
                "wins": 5,
                "draws": 4,
                "losses": 3,
                "goalsFor": 17,
                "goalsAgainst": 15
              }
            },
            {
              "teamId": 2745,
              "team": "Bucheon FC 1995",
              "rank": 9,
              "points": 30,
              "goalsDiff": -1,
              "form": "LWWDW",
              "all": {
                "played": 25,
                "wins": 7,
                "draws": 9,
                "losses": 9,
                "goalsFor": 27,
                "goalsAgainst": 28
              },
              "home": {
                "played": 13,
                "wins": 3,
                "draws": 5,
                "losses": 5,
                "goalsFor": 15,
                "goalsAgainst": 16
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
              "teamId": 2750,
              "team": "Daejeon Citizen",
              "rank": 10,
              "points": 29,
              "goalsDiff": 4,
              "form": "WLWWL",
              "all": {
                "played": 24,
                "wins": 7,
                "draws": 8,
                "losses": 9,
                "goalsFor": 32,
                "goalsAgainst": 28
              },
              "home": {
                "played": 12,
                "wins": 2,
                "draws": 5,
                "losses": 5,
                "goalsFor": 12,
                "goalsAgainst": 14
              },
              "away": {
                "played": 12,
                "wins": 5,
                "draws": 3,
                "losses": 4,
                "goalsFor": 20,
                "goalsAgainst": 14
              }
            },
            {
              "teamId": 2768,
              "team": "Gimcheon Sangmu FC",
              "rank": 11,
              "points": 27,
              "goalsDiff": -6,
              "form": "DDDDW",
              "all": {
                "played": 25,
                "wins": 4,
                "draws": 15,
                "losses": 6,
                "goalsFor": 23,
                "goalsAgainst": 29
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
                "played": 13,
                "wins": 3,
                "draws": 7,
                "losses": 3,
                "goalsFor": 13,
                "goalsAgainst": 13
              }
            },
            {
              "teamId": 2759,
              "team": "Gwangju FC",
              "rank": 12,
              "points": 11,
              "goalsDiff": -38,
              "form": "LLDLL",
              "all": {
                "played": 24,
                "wins": 1,
                "draws": 8,
                "losses": 15,
                "goalsFor": 12,
                "goalsAgainst": 50
              },
              "home": {
                "played": 13,
                "wins": 1,
                "draws": 4,
                "losses": 8,
                "goalsFor": 9,
                "goalsAgainst": 24
              },
              "away": {
                "played": 11,
                "wins": 0,
                "draws": 4,
                "losses": 7,
                "goalsFor": 3,
                "goalsAgainst": 26
              }
            }
          ],
          "teams": [
            {
              "teamId": 2746,
              "team": "Gangwon FC",
              "form": "LDDDLWWDWLWDDWWWDWDLLWL",
              "all": {
                "played": 23,
                "wins": 9,
                "draws": 8,
                "losses": 6,
                "goalsFor": 28,
                "goalsAgainst": 22
              },
              "home": {
                "played": 10,
                "wins": 4,
                "draws": 4,
                "losses": 2,
                "goalsFor": 14,
                "goalsAgainst": 9
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
              "teamId": 2759,
              "team": "Gwangju FC",
              "form": "DWDDLLLLLLLLDLLDLDDLLDLL",
              "all": {
                "played": 24,
                "wins": 1,
                "draws": 8,
                "losses": 15,
                "goalsFor": 12,
                "goalsAgainst": 50
              },
              "home": {
                "played": 13,
                "wins": 1,
                "draws": 4,
                "losses": 8,
                "goalsFor": 9,
                "goalsAgainst": 24
              },
              "away": {
                "played": 11,
                "wins": 0,
                "draws": 4,
                "losses": 7,
                "goalsFor": 3,
                "goalsAgainst": 26
              }
            },
            {
              "teamId": 2748,
              "team": "FC Anyang",
              "form": "DWDLLDDWDWLDDDWLWDWWLLLL",
              "all": {
                "played": 24,
                "wins": 7,
                "draws": 9,
                "losses": 8,
                "goalsFor": 30,
                "goalsAgainst": 37
              },
              "home": {
                "played": 12,
                "wins": 2,
                "draws": 5,
                "losses": 5,
                "goalsFor": 13,
                "goalsAgainst": 22
              },
              "away": {
                "played": 12,
                "wins": 5,
                "draws": 4,
                "losses": 3,
                "goalsFor": 17,
                "goalsAgainst": 15
              }
            },
            {
              "teamId": 2763,
              "team": "Incheon United",
              "form": "LLDLWWLDWWLDWLWLLWWDDDW",
              "all": {
                "played": 23,
                "wins": 9,
                "draws": 6,
                "losses": 8,
                "goalsFor": 30,
                "goalsAgainst": 25
              },
              "home": {
                "played": 12,
                "wins": 4,
                "draws": 2,
                "losses": 6,
                "goalsFor": 13,
                "goalsAgainst": 13
              },
              "away": {
                "played": 11,
                "wins": 5,
                "draws": 4,
                "losses": 2,
                "goalsFor": 17,
                "goalsAgainst": 12
              }
            },
            {
              "teamId": 2750,
              "team": "Daejeon Citizen",
              "form": "DDDWLLLWLWWDLLLDDDDLWWLW",
              "all": {
                "played": 24,
                "wins": 7,
                "draws": 8,
                "losses": 9,
                "goalsFor": 32,
                "goalsAgainst": 28
              },
              "home": {
                "played": 12,
                "wins": 2,
                "draws": 5,
                "losses": 5,
                "goalsFor": 12,
                "goalsAgainst": 14
              },
              "away": {
                "played": 12,
                "wins": 5,
                "draws": 3,
                "losses": 4,
                "goalsFor": 20,
                "goalsAgainst": 14
              }
            },
            {
              "teamId": 2767,
              "team": "Ulsan Hyundai FC",
              "form": "WWWDLWLWDLLWWWLDLDLWWWLL",
              "all": {
                "played": 24,
                "wins": 11,
                "draws": 4,
                "losses": 9,
                "goalsFor": 37,
                "goalsAgainst": 34
              },
              "home": {
                "played": 12,
                "wins": 5,
                "draws": 1,
                "losses": 6,
                "goalsFor": 20,
                "goalsAgainst": 21
              },
              "away": {
                "played": 12,
                "wins": 6,
                "draws": 3,
                "losses": 3,
                "goalsFor": 17,
                "goalsAgainst": 13
              }
            }
          ],
          "fixtures": [
            {
              "fixtureId": 1507045,
              "kickoff": "2026-08-26T19:30:00+09:00",
              "status": "NS",
              "homeTeamId": 2746,
              "homeTeam": "Gangwon FC",
              "awayTeamId": 2759,
              "awayTeam": "Gwangju FC",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": true,
              "lineups": []
            },
            {
              "fixtureId": 1507043,
              "kickoff": "2026-08-26T19:30:00+09:00",
              "status": "NS",
              "homeTeamId": 2748,
              "homeTeam": "FC Anyang",
              "awayTeamId": 2763,
              "awayTeam": "Incheon United",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": true,
              "lineups": []
            },
            {
              "fixtureId": 1507044,
              "kickoff": "2026-08-26T19:30:00+09:00",
              "status": "NS",
              "homeTeamId": 2750,
              "homeTeam": "Daejeon Citizen",
              "awayTeamId": 2767,
              "awayTeam": "Ulsan Hyundai FC",
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
      "date": "2026-08-27",
      "updatedAt": "2026-08-26T19:59:15.691Z",
      "leagues": [
        {
          "key": "LALIGA",
          "leagueId": 140,
          "season": "2026",
          "standings": [
            {
              "teamId": 536,
              "team": "Sevilla",
              "rank": 1,
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
                "goalsAgainst": 1
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
              "teamId": 543,
              "team": "Real Betis",
              "rank": 2,
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
              "teamId": 542,
              "team": "Alaves",
              "rank": 3,
              "points": 4,
              "goalsDiff": 3,
              "form": "DW",
              "all": {
                "played": 2,
                "wins": 1,
                "draws": 1,
                "losses": 0,
                "goalsFor": 4,
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
                "wins": 0,
                "draws": 1,
                "losses": 0,
                "goalsFor": 1,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 530,
              "team": "Atletico Madrid",
              "rank": 4,
              "points": 4,
              "goalsDiff": 2,
              "form": "DW",
              "all": {
                "played": 2,
                "wins": 1,
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
                "goalsFor": 4,
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
              "teamId": 529,
              "team": "Barcelona",
              "rank": 5,
              "points": 3,
              "goalsDiff": 5,
              "form": "W",
              "all": {
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 5,
                "goalsAgainst": 0
              },
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
                "goalsFor": 5,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 540,
              "team": "Espanyol",
              "rank": 6,
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
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 4,
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
              "teamId": 541,
              "team": "Real Madrid",
              "rank": 7,
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
              "teamId": 546,
              "team": "Getafe",
              "rank": 8,
              "points": 3,
              "goalsDiff": -2,
              "form": "WL",
              "all": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 1,
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
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 0,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 533,
              "team": "Villarreal",
              "rank": 9,
              "points": 2,
              "goalsDiff": 0,
              "form": "DD",
              "all": {
                "played": 2,
                "wins": 0,
                "draws": 2,
                "losses": 0,
                "goalsFor": 4,
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
                "draws": 2,
                "losses": 0,
                "goalsFor": 4,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 544,
              "team": "Deportivo La Coruna",
              "rank": 10,
              "points": 2,
              "goalsDiff": 0,
              "form": "DD",
              "all": {
                "played": 2,
                "wins": 0,
                "draws": 2,
                "losses": 0,
                "goalsFor": 2,
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
              "rank": 11,
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
              "teamId": 538,
              "team": "Celta Vigo",
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
              "teamId": 4665,
              "team": "Racing Santander",
              "rank": 13,
              "points": 1,
              "goalsDiff": -1,
              "form": "LD",
              "all": {
                "played": 2,
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 2,
                "goalsAgainst": 3
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
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 0,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 728,
              "team": "Rayo Vallecano",
              "rank": 14,
              "points": 1,
              "goalsDiff": -1,
              "form": "DL",
              "all": {
                "played": 2,
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 2,
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
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 1,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 532,
              "team": "Valencia",
              "rank": 15,
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
                "played": 2,
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 0,
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
              "teamId": 535,
              "team": "Malaga",
              "rank": 16,
              "points": 1,
              "goalsDiff": -2,
              "form": "DL",
              "all": {
                "played": 2,
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 1,
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
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 0,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 539,
              "team": "Levante",
              "rank": 17,
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
                "goalsFor": 0,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 797,
              "team": "Elche",
              "rank": 18,
              "points": 1,
              "goalsDiff": -5,
              "form": "LD",
              "all": {
                "played": 2,
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 1,
                "goalsAgainst": 6
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
                "draws": 1,
                "losses": 0,
                "goalsFor": 1,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 548,
              "team": "Real Sociedad",
              "rank": 19,
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
              "teamId": 531,
              "team": "Athletic Club",
              "rank": 20,
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
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 1,
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
          "teams": [
            {
              "teamId": 541,
              "team": "Real Madrid",
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
              "teamId": 548,
              "team": "Real Sociedad",
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
              "fixtureId": 1570340,
              "kickoff": "2026-08-27T04:00:00+09:00",
              "status": "HT",
              "homeTeamId": 541,
              "homeTeam": "Real Madrid",
              "awayTeamId": 548,
              "awayTeam": "Real Sociedad",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": true,
              "lineups": [
                {
                  "teamId": 541,
                  "team": "Real Madrid",
                  "formation": "4-2-3-1",
                  "coach": "Jose Mourinho",
                  "starters": [
                    "Thibaut Courtois",
                    "Denzel Dumfries",
                    "Ibrahima Konaté",
                    "Dean Huijsen",
                    "Álvaro Carreras",
                    "Bernardo Silva",
                    "Federico Valverde",
                    "Arda Güler",
                    "Jude Bellingham",
                    "Vinícius Júnior",
                    "Kylian Mbappé"
                  ]
                },
                {
                  "teamId": 548,
                  "team": "Real Sociedad",
                  "formation": "4-2-3-1",
                  "coach": "Pellegrino Matarazzo",
                  "starters": [
                    "Álex Remiro",
                    "Jon Aramburu",
                    "Luken Beitia",
                    "Jon Martin",
                    "Sergio Gómez",
                    "Yangel Herrera",
                    "Beñat Turrientes",
                    "Takefusa Kubo",
                    "Luka Sučić",
                    "Job Ochieng",
                    "Mikel Oyarzabal"
                  ]
                }
              ]
            }
          ]
        },
        {
          "key": "UCL",
          "leagueId": 2,
          "season": "2026",
          "standings": [],
          "teams": [
            {
              "teamId": 80,
              "team": "Lyon",
              "form": "LWD",
              "all": {
                "played": 3,
                "wins": 1,
                "draws": 1,
                "losses": 1,
                "goalsFor": 5,
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
                "played": 2,
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 2,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 611,
              "team": "Fenerbahçe",
              "form": "WDWWD",
              "all": {
                "played": 5,
                "wins": 3,
                "draws": 2,
                "losses": 0,
                "goalsFor": 6,
                "goalsAgainst": 2
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
                "played": 2,
                "wins": 1,
                "draws": 1,
                "losses": 0,
                "goalsFor": 2,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 575,
              "team": "AEK Athens FC",
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
              "teamId": 646,
              "team": "Levski Sofia",
              "form": "DWWDWWD",
              "all": {
                "played": 7,
                "wins": 4,
                "draws": 3,
                "losses": 0,
                "goalsFor": 10,
                "goalsAgainst": 3
              },
              "home": {
                "played": 4,
                "wins": 3,
                "draws": 1,
                "losses": 0,
                "goalsFor": 6,
                "goalsAgainst": 0
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
              "teamId": 759,
              "team": "Viking",
              "form": "D",
              "all": {
                "played": 1,
                "wins": 0,
                "draws": 1,
                "losses": 0,
                "goalsFor": 2,
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
                "draws": 1,
                "losses": 0,
                "goalsFor": 2,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 620,
              "team": "Dinamo Zagreb",
              "form": "DWWWD",
              "all": {
                "played": 5,
                "wins": 3,
                "draws": 2,
                "losses": 0,
                "goalsFor": 13,
                "goalsAgainst": 6
              },
              "home": {
                "played": 3,
                "wins": 2,
                "draws": 1,
                "losses": 0,
                "goalsFor": 10,
                "goalsAgainst": 4
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
              "teamId": 4360,
              "team": "Celje",
              "form": "DWLWD",
              "all": {
                "played": 5,
                "wins": 2,
                "draws": 2,
                "losses": 1,
                "goalsFor": 10,
                "goalsAgainst": 8
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
                "wins": 0,
                "draws": 2,
                "losses": 1,
                "goalsFor": 5,
                "goalsAgainst": 6
              }
            },
            {
              "teamId": 656,
              "team": "Slovan Bratislava",
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
                "wins": 1,
                "draws": 2,
                "losses": 0,
                "goalsFor": 4,
                "goalsAgainst": 2
              },
              "away": {
                "played": 2,
                "wins": 2,
                "draws": 0,
                "losses": 0,
                "goalsFor": 4,
                "goalsAgainst": 1
              }
            }
          ],
          "fixtures": [
            {
              "fixtureId": 1622630,
              "kickoff": "2026-08-27T04:00:00+09:00",
              "status": "HT",
              "homeTeamId": 80,
              "homeTeam": "Lyon",
              "awayTeamId": 611,
              "awayTeam": "Fenerbahçe",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": true,
              "lineups": [
                {
                  "teamId": 80,
                  "team": "Lyon",
                  "formation": "4-3-3",
                  "coach": "Paulo Fonseca",
                  "starters": [
                    "Dominik Greif",
                    "Ainsley Maitland-Niles",
                    "Ruben Kluivert",
                    "Moussa Niakhaté",
                    "Abner Vinícius",
                    "Tanner Tessmann",
                    "Tyler Morton",
                    "Corentin Tolisso",
                    "Ernest Nuamah",
                    "Loïs Openda",
                    "Malick Fofana"
                  ]
                },
                {
                  "teamId": 611,
                  "team": "Fenerbahçe",
                  "formation": "4-2-3-1",
                  "coach": "Ismail Kartal",
                  "starters": [
                    "Ederson",
                    "Nélson Semedo",
                    "Milan Škriniar",
                    "Nathan Aké",
                    "Archie Brown",
                    "N'Golo Kanté",
                    "Mattéo Guendouzi",
                    "Mason Greenwood",
                    "Talisca",
                    "Oğuz Aydın",
                    "Vedat Muriqi"
                  ]
                }
              ]
            },
            {
              "fixtureId": 1622629,
              "kickoff": "2026-08-27T04:00:00+09:00",
              "status": "HT",
              "homeTeamId": 575,
              "homeTeam": "AEK Athens FC",
              "awayTeamId": 646,
              "awayTeam": "Levski Sofia",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": true,
              "lineups": [
                {
                  "teamId": 575,
                  "team": "AEK Athens FC",
                  "formation": "4-4-2",
                  "coach": "Marko Nikolic",
                  "starters": [
                    "Thomas Strakosha",
                    "Lazaros Rota",
                    "Harold Moukoudi",
                    "Filipe Relvas",
                    "Stavros Pilios",
                    "Lovro Majer",
                    "Răzvan Marin",
                    "Kaan Kairinen",
                    "Aboubakary Koita",
                    "Barnabás Varga",
                    "Luka Jović"
                  ]
                },
                {
                  "teamId": 646,
                  "team": "Levski Sofia",
                  "formation": "4-3-3",
                  "coach": "Julio Velazquez",
                  "starters": [
                    "Svetoslav Vutsov",
                    "Aldair",
                    "Kristian Dimitrov",
                    "Nikola Serafimov",
                    "Álex Centelles",
                    "Serginho",
                    "El Mehdi Moubarik",
                    "Maicon",
                    "Armstrong Oko-Flex",
                    "Everton Bala",
                    "Reinaldo"
                  ]
                }
              ]
            },
            {
              "fixtureId": 1622631,
              "kickoff": "2026-08-27T04:00:00+09:00",
              "status": "HT",
              "homeTeamId": 759,
              "homeTeam": "Viking",
              "awayTeamId": 620,
              "awayTeam": "Dinamo Zagreb",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": true,
              "lineups": [
                {
                  "teamId": 759,
                  "team": "Viking",
                  "formation": "4-3-3",
                  "coach": "Bjarte Aarsheim",
                  "starters": [
                    "Arild Østbø",
                    "Henrik Heggheim",
                    "Gianni Stensness",
                    "Henrik Sælebakke Falchener",
                    "Kristoffer Haugen",
                    "Tobias Moi",
                    "Joe Bell",
                    "Kristoffer Askildsen",
                    "Zlatko Tripić",
                    "Peter Christiansen",
                    "Edvin Austbø"
                  ]
                },
                {
                  "teamId": 620,
                  "team": "Dinamo Zagreb",
                  "formation": "4-1-4-1",
                  "coach": "Mario Kovacevic",
                  "starters": [
                    "Ivan Nevistić",
                    "Moris Valinčić",
                    "Sergi Domínguez",
                    "Scott McKenna",
                    "Matteo Pérez Vinlöf",
                    "Josip Mišić",
                    "Mateo Lisica",
                    "Luka Stojković",
                    "Miha Zajc",
                    "Arber Hoxha",
                    "Dion Drena Beljo"
                  ]
                }
              ]
            },
            {
              "fixtureId": 1622628,
              "kickoff": "2026-08-27T04:00:00+09:00",
              "status": "HT",
              "homeTeamId": 4360,
              "homeTeam": "Celje",
              "awayTeamId": 656,
              "awayTeam": "Slovan Bratislava",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": true,
              "lineups": [
                {
                  "teamId": 4360,
                  "team": "Celje",
                  "formation": "4-2-3-1",
                  "coach": "Vitor Campelos",
                  "starters": [
                    "Žan-Luk Leban",
                    "Pijus Širvys",
                    "Darko Hrka",
                    "Artemijus Tutyškinas",
                    "Milot Avdyli",
                    "Papa Daniel",
                    "Mark Zabukovnik",
                    "Yaya Dukuly",
                    "Svit Sešlar",
                    "Mario Kvesić",
                    "Andrej Kotnik"
                  ]
                },
                {
                  "teamId": 656,
                  "team": "Slovan Bratislava",
                  "formation": "4-2-3-1",
                  "coach": "Yaya Toure",
                  "starters": [
                    "Dominik Takáč",
                    "César Blackman",
                    "Kenan Bajrić",
                    "Svetozar Marković",
                    "Sandro Cruz",
                    "Cristian Martínez",
                    "Peter Pokorný",
                    "Tigran Barseghyan",
                    "Rahim Ibrahim",
                    "Suleiman Camara",
                    "Andraž Šporar"
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "date": "2026-08-28",
      "updatedAt": "2026-08-26T08:59:25.810Z",
      "leagues": [
        {
          "key": "LALIGA",
          "leagueId": 140,
          "season": "2026",
          "standings": [
            {
              "teamId": 536,
              "team": "Sevilla",
              "rank": 1,
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
                "goalsAgainst": 1
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
              "teamId": 543,
              "team": "Real Betis",
              "rank": 2,
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
              "teamId": 542,
              "team": "Alaves",
              "rank": 3,
              "points": 4,
              "goalsDiff": 3,
              "form": "DW",
              "all": {
                "played": 2,
                "wins": 1,
                "draws": 1,
                "losses": 0,
                "goalsFor": 4,
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
                "wins": 0,
                "draws": 1,
                "losses": 0,
                "goalsFor": 1,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 530,
              "team": "Atletico Madrid",
              "rank": 4,
              "points": 4,
              "goalsDiff": 2,
              "form": "DW",
              "all": {
                "played": 2,
                "wins": 1,
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
                "goalsFor": 4,
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
              "teamId": 529,
              "team": "Barcelona",
              "rank": 5,
              "points": 3,
              "goalsDiff": 5,
              "form": "W",
              "all": {
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 5,
                "goalsAgainst": 0
              },
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
                "goalsFor": 5,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 540,
              "team": "Espanyol",
              "rank": 6,
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
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 4,
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
              "teamId": 541,
              "team": "Real Madrid",
              "rank": 7,
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
              "teamId": 546,
              "team": "Getafe",
              "rank": 8,
              "points": 3,
              "goalsDiff": -2,
              "form": "WL",
              "all": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 1,
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
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 0,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 533,
              "team": "Villarreal",
              "rank": 9,
              "points": 2,
              "goalsDiff": 0,
              "form": "DD",
              "all": {
                "played": 2,
                "wins": 0,
                "draws": 2,
                "losses": 0,
                "goalsFor": 4,
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
                "draws": 2,
                "losses": 0,
                "goalsFor": 4,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 544,
              "team": "Deportivo La Coruna",
              "rank": 10,
              "points": 2,
              "goalsDiff": 0,
              "form": "DD",
              "all": {
                "played": 2,
                "wins": 0,
                "draws": 2,
                "losses": 0,
                "goalsFor": 2,
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
              "rank": 11,
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
              "teamId": 538,
              "team": "Celta Vigo",
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
              "teamId": 4665,
              "team": "Racing Santander",
              "rank": 13,
              "points": 1,
              "goalsDiff": -1,
              "form": "LD",
              "all": {
                "played": 2,
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 2,
                "goalsAgainst": 3
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
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 0,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 728,
              "team": "Rayo Vallecano",
              "rank": 14,
              "points": 1,
              "goalsDiff": -1,
              "form": "DL",
              "all": {
                "played": 2,
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 2,
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
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 1,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 532,
              "team": "Valencia",
              "rank": 15,
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
                "played": 2,
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 0,
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
              "teamId": 535,
              "team": "Malaga",
              "rank": 16,
              "points": 1,
              "goalsDiff": -2,
              "form": "DL",
              "all": {
                "played": 2,
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 1,
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
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 0,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 539,
              "team": "Levante",
              "rank": 17,
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
                "goalsFor": 0,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 797,
              "team": "Elche",
              "rank": 18,
              "points": 1,
              "goalsDiff": -5,
              "form": "LD",
              "all": {
                "played": 2,
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 1,
                "goalsAgainst": 6
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
                "draws": 1,
                "losses": 0,
                "goalsFor": 1,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 548,
              "team": "Real Sociedad",
              "rank": 19,
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
              "teamId": 531,
              "team": "Athletic Club",
              "rank": 20,
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
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 1,
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
          "teams": [
            {
              "teamId": 538,
              "team": "Celta Vigo",
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
              "teamId": 727,
              "team": "Osasuna",
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
              "teamId": 529,
              "team": "Barcelona",
              "form": "W",
              "all": {
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 5,
                "goalsAgainst": 0
              },
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
                "goalsFor": 5,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 531,
              "team": "Athletic Club",
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
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 1,
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
              "fixtureId": 1570336,
              "kickoff": "2026-08-28T03:30:00+09:00",
              "status": "NS",
              "homeTeamId": 538,
              "homeTeam": "Celta Vigo",
              "awayTeamId": 727,
              "awayTeam": "Osasuna",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1570335,
              "kickoff": "2026-08-28T04:00:00+09:00",
              "status": "NS",
              "homeTeamId": 529,
              "homeTeam": "Barcelona",
              "awayTeamId": 531,
              "awayTeam": "Athletic Club",
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
          "standings": [],
          "teams": [
            {
              "teamId": 3502,
              "team": "FC Iberia 1999",
              "form": "DWL",
              "all": {
                "played": 3,
                "wins": 1,
                "draws": 1,
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
                "played": 2,
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 0,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 336,
              "team": "Jagiellonia",
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
                "played": 2,
                "wins": 2,
                "draws": 0,
                "losses": 0,
                "goalsFor": 6,
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
              "teamId": 3683,
              "team": "Ararat-Armenia",
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
              "teamId": 632,
              "team": "Universitatea Craiova",
              "form": "DWD",
              "all": {
                "played": 3,
                "wins": 1,
                "draws": 2,
                "losses": 0,
                "goalsFor": 4,
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
                "played": 1,
                "wins": 0,
                "draws": 1,
                "losses": 0,
                "goalsFor": 1,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 321,
              "team": "Lillestrom",
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
              "teamId": 3327,
              "team": "Egnatia Rrogozhinë",
              "form": "LWD",
              "all": {
                "played": 3,
                "wins": 1,
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
                "goalsFor": 5,
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
              "teamId": 567,
              "team": "Plzen",
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
              "teamId": 598,
              "team": "FK Crvena Zvezda",
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
              "teamId": 571,
              "team": "Red Bull Salzburg",
              "form": "WDW",
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
              "teamId": 2240,
              "team": "Mjallby AIF",
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
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 0,
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
              "teamId": 3402,
              "team": "Omonia Nicosia",
              "form": "DWL",
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
                "goalsFor": 1,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 735,
              "team": "St. Truiden",
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
              "teamId": 3872,
              "team": "Kauno Žalgiris",
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
              "teamId": 549,
              "team": "Beşiktaş",
              "form": "WWWWW",
              "all": {
                "played": 5,
                "wins": 5,
                "draws": 0,
                "losses": 0,
                "goalsFor": 8,
                "goalsAgainst": 0
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
                "played": 2,
                "wins": 2,
                "draws": 0,
                "losses": 0,
                "goalsFor": 3,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 406,
              "team": "Aarhus",
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
              "teamId": 211,
              "team": "Benfica",
              "form": "LWWDW",
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
                "wins": 3,
                "draws": 0,
                "losses": 0,
                "goalsFor": 14,
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
              "teamId": 853,
              "team": "CSKA Sofia",
              "form": "WWDWWLL",
              "all": {
                "played": 7,
                "wins": 4,
                "draws": 1,
                "losses": 2,
                "goalsFor": 10,
                "goalsAgainst": 9
              },
              "home": {
                "played": 3,
                "wins": 2,
                "draws": 0,
                "losses": 1,
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
              "teamId": 1124,
              "team": "OFI",
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
              "teamId": 1012,
              "team": "FC Thun",
              "form": "WLL",
              "all": {
                "played": 3,
                "wins": 1,
                "draws": 0,
                "losses": 2,
                "goalsFor": 5,
                "goalsAgainst": 10
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
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 2,
                "goalsAgainst": 10
              }
            },
            {
              "teamId": 347,
              "team": "Lech Poznan",
              "form": "WWW",
              "all": {
                "played": 3,
                "wins": 3,
                "draws": 0,
                "losses": 0,
                "goalsFor": 13,
                "goalsAgainst": 0
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
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 5,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 554,
              "team": "Anderlecht",
              "form": "DWWWW",
              "all": {
                "played": 5,
                "wins": 4,
                "draws": 1,
                "losses": 0,
                "goalsFor": 11,
                "goalsAgainst": 4
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
                "played": 3,
                "wins": 2,
                "draws": 1,
                "losses": 0,
                "goalsFor": 5,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 664,
              "team": "Kairat Almaty",
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
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 0,
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
            },
            {
              "teamId": 651,
              "team": "Ferencvarosi TC",
              "form": "WWWDWDW",
              "all": {
                "played": 7,
                "wins": 5,
                "draws": 2,
                "losses": 0,
                "goalsFor": 12,
                "goalsAgainst": 5
              },
              "home": {
                "played": 3,
                "wins": 2,
                "draws": 1,
                "losses": 0,
                "goalsFor": 6,
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
              "teamId": 998,
              "team": "Trabzonspor",
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
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 0,
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
            }
          ],
          "fixtures": [
            {
              "fixtureId": 1623446,
              "kickoff": "2026-08-28T01:00:00+09:00",
              "status": "NS",
              "homeTeamId": 3502,
              "homeTeam": "FC Iberia 1999",
              "awayTeamId": 336,
              "awayTeam": "Jagiellonia",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1623443,
              "kickoff": "2026-08-28T01:00:00+09:00",
              "status": "NS",
              "homeTeamId": 3683,
              "homeTeam": "Ararat-Armenia",
              "awayTeamId": 632,
              "awayTeam": "Universitatea Craiova",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1623448,
              "kickoff": "2026-08-28T02:00:00+09:00",
              "status": "NS",
              "homeTeamId": 321,
              "homeTeam": "Lillestrom",
              "awayTeamId": 3327,
              "awayTeam": "Egnatia Rrogozhinë",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1622633,
              "kickoff": "2026-08-28T02:00:00+09:00",
              "status": "NS",
              "homeTeamId": 567,
              "homeTeam": "Plzen",
              "awayTeamId": 598,
              "awayTeam": "FK Crvena Zvezda",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1623450,
              "kickoff": "2026-08-28T02:00:00+09:00",
              "status": "NS",
              "homeTeamId": 571,
              "homeTeam": "Red Bull Salzburg",
              "awayTeamId": 2240,
              "awayTeam": "Mjallby AIF",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1623449,
              "kickoff": "2026-08-28T02:00:00+09:00",
              "status": "NS",
              "homeTeamId": 3402,
              "homeTeam": "Omonia Nicosia",
              "awayTeamId": 735,
              "awayTeam": "St. Truiden",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1623447,
              "kickoff": "2026-08-28T02:00:00+09:00",
              "status": "NS",
              "homeTeamId": 3872,
              "homeTeam": "Kauno Žalgiris",
              "awayTeamId": 549,
              "awayTeam": "Beşiktaş",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1623441,
              "kickoff": "2026-08-28T03:00:00+09:00",
              "status": "NS",
              "homeTeamId": 406,
              "homeTeam": "Aarhus",
              "awayTeamId": 211,
              "awayTeam": "Benfica",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1623444,
              "kickoff": "2026-08-28T03:00:00+09:00",
              "status": "NS",
              "homeTeamId": 853,
              "homeTeam": "CSKA Sofia",
              "awayTeamId": 1124,
              "awayTeam": "OFI",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1627596,
              "kickoff": "2026-08-28T03:00:00+09:00",
              "status": "NS",
              "homeTeamId": 1012,
              "homeTeam": "FC Thun",
              "awayTeamId": 347,
              "awayTeam": "Lech Poznan",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1623442,
              "kickoff": "2026-08-28T03:30:00+09:00",
              "status": "NS",
              "homeTeamId": 554,
              "homeTeam": "Anderlecht",
              "awayTeamId": 664,
              "awayTeam": "Kairat Almaty",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1623445,
              "kickoff": "2026-08-28T03:30:00+09:00",
              "status": "NS",
              "homeTeamId": 651,
              "homeTeam": "Ferencvarosi TC",
              "awayTeamId": 998,
              "awayTeam": "Trabzonspor",
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
              "points": 44,
              "goalsDiff": 13,
              "form": "WDWDW",
              "all": {
                "played": 22,
                "wins": 13,
                "draws": 5,
                "losses": 4,
                "goalsFor": 32,
                "goalsAgainst": 19
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
                "played": 11,
                "wins": 7,
                "draws": 1,
                "losses": 3,
                "goalsFor": 18,
                "goalsAgainst": 11
              }
            },
            {
              "teamId": 2749,
              "team": "Seoul E-Land FC",
              "rank": 2,
              "points": 41,
              "goalsDiff": 13,
              "form": "DWDWW",
              "all": {
                "played": 22,
                "wins": 12,
                "draws": 5,
                "losses": 5,
                "goalsFor": 40,
                "goalsAgainst": 27
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
                "played": 11,
                "wins": 6,
                "draws": 3,
                "losses": 2,
                "goalsFor": 17,
                "goalsAgainst": 11
              }
            },
            {
              "teamId": 2756,
              "team": "Suwon City FC",
              "rank": 3,
              "points": 40,
              "goalsDiff": 17,
              "form": "WDWWD",
              "all": {
                "played": 21,
                "wins": 11,
                "draws": 7,
                "losses": 3,
                "goalsFor": 43,
                "goalsAgainst": 26
              },
              "home": {
                "played": 9,
                "wins": 5,
                "draws": 4,
                "losses": 0,
                "goalsFor": 20,
                "goalsAgainst": 8
              },
              "away": {
                "played": 12,
                "wins": 6,
                "draws": 3,
                "losses": 3,
                "goalsFor": 23,
                "goalsAgainst": 18
              }
            },
            {
              "teamId": 2747,
              "team": "Daegu FC",
              "rank": 4,
              "points": 39,
              "goalsDiff": 11,
              "form": "DWWLL",
              "all": {
                "played": 22,
                "wins": 11,
                "draws": 6,
                "losses": 5,
                "goalsFor": 42,
                "goalsAgainst": 31
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
                "played": 10,
                "wins": 4,
                "draws": 4,
                "losses": 2,
                "goalsFor": 19,
                "goalsAgainst": 16
              }
            },
            {
              "teamId": 2752,
              "team": "Busan I Park",
              "rank": 5,
              "points": 38,
              "goalsDiff": 8,
              "form": "DDLLL",
              "all": {
                "played": 22,
                "wins": 11,
                "draws": 5,
                "losses": 6,
                "goalsFor": 38,
                "goalsAgainst": 30
              },
              "home": {
                "played": 11,
                "wins": 6,
                "draws": 3,
                "losses": 2,
                "goalsFor": 19,
                "goalsAgainst": 12
              },
              "away": {
                "played": 11,
                "wins": 5,
                "draws": 2,
                "losses": 4,
                "goalsFor": 19,
                "goalsAgainst": 18
              }
            },
            {
              "teamId": 7087,
              "team": "Hwaseong",
              "rank": 6,
              "points": 36,
              "goalsDiff": 11,
              "form": "LDDWW",
              "all": {
                "played": 22,
                "wins": 10,
                "draws": 6,
                "losses": 6,
                "goalsFor": 34,
                "goalsAgainst": 23
              },
              "home": {
                "played": 15,
                "wins": 7,
                "draws": 5,
                "losses": 3,
                "goalsFor": 26,
                "goalsAgainst": 17
              },
              "away": {
                "played": 7,
                "wins": 3,
                "draws": 1,
                "losses": 3,
                "goalsFor": 8,
                "goalsAgainst": 6
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
              "goalsDiff": 4,
              "form": "DWDDD",
              "all": {
                "played": 21,
                "wins": 7,
                "draws": 10,
                "losses": 4,
                "goalsFor": 26,
                "goalsAgainst": 22
              },
              "home": {
                "played": 7,
                "wins": 1,
                "draws": 5,
                "losses": 1,
                "goalsFor": 9,
                "goalsAgainst": 8
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
              "points": 27,
              "goalsDiff": -1,
              "form": "DDLDD",
              "all": {
                "played": 22,
                "wins": 6,
                "draws": 9,
                "losses": 7,
                "goalsFor": 29,
                "goalsAgainst": 30
              },
              "home": {
                "played": 11,
                "wins": 5,
                "draws": 2,
                "losses": 4,
                "goalsFor": 19,
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
              "points": 26,
              "goalsDiff": -2,
              "form": "WLWLW",
              "all": {
                "played": 21,
                "wins": 6,
                "draws": 8,
                "losses": 7,
                "goalsFor": 23,
                "goalsAgainst": 25
              },
              "home": {
                "played": 10,
                "wins": 3,
                "draws": 5,
                "losses": 2,
                "goalsFor": 10,
                "goalsAgainst": 9
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
              "teamId": 7098,
              "team": "Paju Citizen",
              "rank": 11,
              "points": 25,
              "goalsDiff": -5,
              "form": "DWLWL",
              "all": {
                "played": 22,
                "wins": 7,
                "draws": 4,
                "losses": 11,
                "goalsFor": 22,
                "goalsAgainst": 27
              },
              "home": {
                "played": 11,
                "wins": 3,
                "draws": 1,
                "losses": 7,
                "goalsFor": 10,
                "goalsAgainst": 13
              },
              "away": {
                "played": 11,
                "wins": 4,
                "draws": 3,
                "losses": 4,
                "goalsFor": 12,
                "goalsAgainst": 14
              }
            },
            {
              "teamId": 7061,
              "team": "Cheongju",
              "rank": 12,
              "points": 23,
              "goalsDiff": -9,
              "form": "DWLDD",
              "all": {
                "played": 22,
                "wins": 3,
                "draws": 14,
                "losses": 5,
                "goalsFor": 26,
                "goalsAgainst": 35
              },
              "home": {
                "played": 12,
                "wins": 2,
                "draws": 6,
                "losses": 4,
                "goalsFor": 14,
                "goalsAgainst": 21
              },
              "away": {
                "played": 10,
                "wins": 1,
                "draws": 8,
                "losses": 1,
                "goalsFor": 12,
                "goalsAgainst": 14
              }
            },
            {
              "teamId": 9171,
              "team": "Yongin City",
              "rank": 13,
              "points": 22,
              "goalsDiff": -5,
              "form": "LWDDL",
              "all": {
                "played": 21,
                "wins": 4,
                "draws": 10,
                "losses": 7,
                "goalsFor": 26,
                "goalsAgainst": 31
              },
              "home": {
                "played": 11,
                "wins": 2,
                "draws": 5,
                "losses": 4,
                "goalsFor": 14,
                "goalsAgainst": 16
              },
              "away": {
                "played": 10,
                "wins": 2,
                "draws": 5,
                "losses": 3,
                "goalsFor": 12,
                "goalsAgainst": 15
              }
            },
            {
              "teamId": 7060,
              "team": "Cheonan City",
              "rank": 14,
              "points": 21,
              "goalsDiff": -4,
              "form": "LDLDL",
              "all": {
                "played": 22,
                "wins": 4,
                "draws": 9,
                "losses": 9,
                "goalsFor": 27,
                "goalsAgainst": 31
              },
              "home": {
                "played": 11,
                "wins": 2,
                "draws": 6,
                "losses": 3,
                "goalsFor": 9,
                "goalsAgainst": 10
              },
              "away": {
                "played": 11,
                "wins": 2,
                "draws": 3,
                "losses": 6,
                "goalsFor": 18,
                "goalsAgainst": 21
              }
            },
            {
              "teamId": 2758,
              "team": "Ansan Greeners",
              "rank": 15,
              "points": 19,
              "goalsDiff": -19,
              "form": "LLDDW",
              "all": {
                "played": 22,
                "wins": 5,
                "draws": 4,
                "losses": 13,
                "goalsFor": 23,
                "goalsAgainst": 42
              },
              "home": {
                "played": 13,
                "wins": 2,
                "draws": 2,
                "losses": 9,
                "goalsFor": 14,
                "goalsAgainst": 26
              },
              "away": {
                "played": 9,
                "wins": 3,
                "draws": 2,
                "losses": 4,
                "goalsFor": 9,
                "goalsAgainst": 16
              }
            },
            {
              "teamId": 2760,
              "team": "Jeonnam Dragons",
              "rank": 16,
              "points": 16,
              "goalsDiff": -13,
              "form": "WLLDW",
              "all": {
                "played": 21,
                "wins": 3,
                "draws": 7,
                "losses": 11,
                "goalsFor": 23,
                "goalsAgainst": 36
              },
              "home": {
                "played": 8,
                "wins": 2,
                "draws": 3,
                "losses": 3,
                "goalsFor": 9,
                "goalsAgainst": 10
              },
              "away": {
                "played": 13,
                "wins": 1,
                "draws": 4,
                "losses": 8,
                "goalsFor": 14,
                "goalsAgainst": 26
              }
            },
            {
              "teamId": 7076,
              "team": "Gimhae City",
              "rank": 17,
              "points": 12,
              "goalsDiff": -23,
              "form": "LDLDD",
              "all": {
                "played": 21,
                "wins": 2,
                "draws": 6,
                "losses": 13,
                "goalsFor": 17,
                "goalsAgainst": 40
              },
              "home": {
                "played": 9,
                "wins": 0,
                "draws": 2,
                "losses": 7,
                "goalsFor": 7,
                "goalsAgainst": 21
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
              "teamId": 2758,
              "team": "Ansan Greeners",
              "form": "WLLDDLWLWLLLLLLWLWDDLL",
              "all": {
                "played": 22,
                "wins": 5,
                "draws": 4,
                "losses": 13,
                "goalsFor": 23,
                "goalsAgainst": 42
              },
              "home": {
                "played": 13,
                "wins": 2,
                "draws": 2,
                "losses": 9,
                "goalsFor": 14,
                "goalsAgainst": 26
              },
              "away": {
                "played": 9,
                "wins": 3,
                "draws": 2,
                "losses": 4,
                "goalsFor": 9,
                "goalsAgainst": 16
              }
            },
            {
              "teamId": 2747,
              "team": "Daegu FC",
              "form": "WWWLLDDLWDWWDWWWDLLWWD",
              "all": {
                "played": 22,
                "wins": 11,
                "draws": 6,
                "losses": 5,
                "goalsFor": 42,
                "goalsAgainst": 31
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
                "played": 10,
                "wins": 4,
                "draws": 4,
                "losses": 2,
                "goalsFor": 19,
                "goalsAgainst": 16
              }
            },
            {
              "teamId": 2760,
              "team": "Jeonnam Dragons",
              "form": "WLLLLDLDLDDLLDDLWDLLW",
              "all": {
                "played": 21,
                "wins": 3,
                "draws": 7,
                "losses": 11,
                "goalsFor": 23,
                "goalsAgainst": 36
              },
              "home": {
                "played": 8,
                "wins": 2,
                "draws": 3,
                "losses": 3,
                "goalsFor": 9,
                "goalsAgainst": 10
              },
              "away": {
                "played": 13,
                "wins": 1,
                "draws": 4,
                "losses": 8,
                "goalsFor": 14,
                "goalsAgainst": 26
              }
            },
            {
              "teamId": 7060,
              "team": "Cheonan City",
              "form": "DLDDWDWDWLDLWDLLLLDLDL",
              "all": {
                "played": 22,
                "wins": 4,
                "draws": 9,
                "losses": 9,
                "goalsFor": 27,
                "goalsAgainst": 31
              },
              "home": {
                "played": 11,
                "wins": 2,
                "draws": 6,
                "losses": 3,
                "goalsFor": 9,
                "goalsAgainst": 10
              },
              "away": {
                "played": 11,
                "wins": 2,
                "draws": 3,
                "losses": 6,
                "goalsFor": 18,
                "goalsAgainst": 21
              }
            }
          ],
          "fixtures": [
            {
              "fixtureId": 1510427,
              "kickoff": "2026-08-28T19:30:00+09:00",
              "status": "NS",
              "homeTeamId": 2758,
              "homeTeam": "Ansan Greeners",
              "awayTeamId": 2747,
              "awayTeam": "Daegu FC",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1510428,
              "kickoff": "2026-08-28T19:30:00+09:00",
              "status": "NS",
              "homeTeamId": 2760,
              "homeTeam": "Jeonnam Dragons",
              "awayTeamId": 7060,
              "awayTeam": "Cheonan City",
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
      "date": "2026-08-29",
      "updatedAt": "2026-08-26T08:59:50.580Z",
      "leagues": [
        {
          "key": "EPL",
          "leagueId": 39,
          "season": "2026",
          "standings": [
            {
              "teamId": 51,
              "team": "Brighton",
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
              "teamId": 42,
              "team": "Arsenal",
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
              "teamId": 55,
              "team": "Brentford",
              "rank": 3,
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
              "teamId": 45,
              "team": "Everton",
              "rank": 4,
              "points": 3,
              "goalsDiff": 2,
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
              "teamId": 64,
              "team": "Hull City",
              "rank": 5,
              "points": 3,
              "goalsDiff": 2,
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
              "teamId": 49,
              "team": "Chelsea",
              "rank": 6,
              "points": 3,
              "goalsDiff": 1,
              "form": "W",
              "all": {
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 3,
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
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 3,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 50,
              "team": "Manchester City",
              "rank": 7,
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
              "teamId": 57,
              "team": "Ipswich",
              "rank": 8,
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
              "teamId": 63,
              "team": "Leeds",
              "rank": 9,
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
              "teamId": 40,
              "team": "Liverpool",
              "rank": 10,
              "points": 1,
              "goalsDiff": 0,
              "form": "D",
              "all": {
                "played": 1,
                "wins": 0,
                "draws": 1,
                "losses": 0,
                "goalsFor": 2,
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
                "draws": 1,
                "losses": 0,
                "goalsFor": 2,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 34,
              "team": "Newcastle",
              "rank": 11,
              "points": 1,
              "goalsDiff": 0,
              "form": "D",
              "all": {
                "played": 1,
                "wins": 0,
                "draws": 1,
                "losses": 0,
                "goalsFor": 2,
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
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 36,
              "team": "Fulham",
              "rank": 12,
              "points": 0,
              "goalsDiff": -1,
              "form": "L",
              "all": {
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 2,
                "goalsAgainst": 3
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
              "rank": 13,
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
              "teamId": 35,
              "team": "Bournemouth",
              "rank": 14,
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
              "teamId": 65,
              "team": "Nottingham Forest",
              "rank": 15,
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
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 0,
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
              "teamId": 33,
              "team": "Manchester United",
              "rank": 16,
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
              "teamId": 52,
              "team": "Crystal Palace",
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
              "teamId": 47,
              "team": "Tottenham",
              "rank": 18,
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
              "teamId": 1346,
              "team": "Coventry",
              "rank": 19,
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
              "teamId": 66,
              "team": "Aston Villa",
              "rank": 20,
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
            }
          ],
          "teams": [
            {
              "teamId": 52,
              "team": "Crystal Palace",
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
              "teamId": 50,
              "team": "Manchester City",
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
              "teamId": 40,
              "team": "Liverpool",
              "form": "D",
              "all": {
                "played": 1,
                "wins": 0,
                "draws": 1,
                "losses": 0,
                "goalsFor": 2,
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
                "draws": 1,
                "losses": 0,
                "goalsFor": 2,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 65,
              "team": "Nottingham Forest",
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
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 0,
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
              "teamId": 35,
              "team": "Bournemouth",
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
              "teamId": 45,
              "team": "Everton",
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
              "teamId": 1346,
              "team": "Coventry",
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
              "teamId": 64,
              "team": "Hull City",
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
            }
          ],
          "fixtures": [
            {
              "fixtureId": 1557381,
              "kickoff": "2026-08-29T04:00:00+09:00",
              "status": "NS",
              "homeTeamId": 52,
              "homeTeam": "Crystal Palace",
              "awayTeamId": 50,
              "awayTeam": "Manchester City",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1557383,
              "kickoff": "2026-08-29T20:30:00+09:00",
              "status": "NS",
              "homeTeamId": 40,
              "homeTeam": "Liverpool",
              "awayTeamId": 65,
              "awayTeam": "Nottingham Forest",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1557378,
              "kickoff": "2026-08-29T23:00:00+09:00",
              "status": "NS",
              "homeTeamId": 35,
              "homeTeam": "Bournemouth",
              "awayTeamId": 45,
              "awayTeam": "Everton",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1557380,
              "kickoff": "2026-08-29T23:00:00+09:00",
              "status": "NS",
              "homeTeamId": 1346,
              "homeTeam": "Coventry",
              "awayTeamId": 64,
              "awayTeam": "Hull City",
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
              "teamId": 58,
              "team": "Millwall",
              "rank": 1,
              "points": 6,
              "goalsDiff": 5,
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
              "teamId": 60,
              "team": "West Brom",
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
                "goalsFor": 3,
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
              "teamId": 1335,
              "team": "Charlton",
              "rank": 3,
              "points": 6,
              "goalsDiff": 2,
              "form": "WW",
              "all": {
                "played": 2,
                "wins": 2,
                "draws": 0,
                "losses": 0,
                "goalsFor": 4,
                "goalsAgainst": 2
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
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 2,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 39,
              "team": "Wolves",
              "rank": 4,
              "points": 4,
              "goalsDiff": 2,
              "form": "WD",
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
                "wins": 0,
                "draws": 1,
                "losses": 0,
                "goalsFor": 2,
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
              "teamId": 72,
              "team": "QPR",
              "rank": 5,
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
                "goalsFor": 3,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 67,
              "team": "Blackburn",
              "rank": 6,
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
                "goalsFor": 2,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 38,
              "team": "Watford",
              "rank": 7,
              "points": 4,
              "goalsDiff": 1,
              "form": "DW",
              "all": {
                "played": 2,
                "wins": 1,
                "draws": 1,
                "losses": 0,
                "goalsFor": 3,
                "goalsAgainst": 2
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
                "goalsFor": 1,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 68,
              "team": "Bolton",
              "rank": 8,
              "points": 4,
              "goalsDiff": 1,
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
              "teamId": 76,
              "team": "Swansea",
              "rank": 9,
              "points": 4,
              "goalsDiff": 1,
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
              "teamId": 1355,
              "team": "Portsmouth",
              "rank": 10,
              "points": 3,
              "goalsDiff": 0,
              "form": "WL",
              "all": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 4,
                "goalsAgainst": 4
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
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 3,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 70,
              "team": "Middlesbrough",
              "rank": 11,
              "points": 3,
              "goalsDiff": 0,
              "form": "LW",
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
              "teamId": 43,
              "team": "Cardiff",
              "rank": 12,
              "points": 2,
              "goalsDiff": 0,
              "form": "DD",
              "all": {
                "played": 2,
                "wins": 0,
                "draws": 2,
                "losses": 0,
                "goalsFor": 3,
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
                "wins": 0,
                "draws": 1,
                "losses": 0,
                "goalsFor": 2,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 54,
              "team": "Birmingham",
              "rank": 13,
              "points": 2,
              "goalsDiff": 0,
              "form": "DD",
              "all": {
                "played": 2,
                "wins": 0,
                "draws": 2,
                "losses": 0,
                "goalsFor": 2,
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
                "played": 1,
                "wins": 0,
                "draws": 1,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 1837,
              "team": "Wrexham",
              "rank": 14,
              "points": 2,
              "goalsDiff": 0,
              "form": "DD",
              "all": {
                "played": 2,
                "wins": 0,
                "draws": 2,
                "losses": 0,
                "goalsFor": 2,
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
                "played": 1,
                "wins": 0,
                "draws": 1,
                "losses": 0,
                "goalsFor": 1,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 62,
              "team": "Sheffield Utd",
              "rank": 15,
              "points": 2,
              "goalsDiff": 0,
              "form": "DD",
              "all": {
                "played": 2,
                "wins": 0,
                "draws": 2,
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
                "played": 1,
                "wins": 0,
                "draws": 1,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 69,
              "team": "Derby",
              "rank": 16,
              "points": 1,
              "goalsDiff": -1,
              "form": "DL",
              "all": {
                "played": 2,
                "wins": 0,
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
                "goalsFor": 2,
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
              "teamId": 48,
              "team": "West Ham",
              "rank": 17,
              "points": 1,
              "goalsDiff": -1,
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
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 1,
                "goalsAgainst": 2
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
              "teamId": 44,
              "team": "Burnley",
              "rank": 18,
              "points": 1,
              "goalsDiff": -2,
              "form": "LD",
              "all": {
                "played": 2,
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 3,
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
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 1,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 56,
              "team": "Bristol City",
              "rank": 19,
              "points": 1,
              "goalsDiff": -2,
              "form": "DL",
              "all": {
                "played": 2,
                "wins": 0,
                "draws": 1,
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
                "goalsAgainst": 2
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
              "teamId": 59,
              "team": "Preston",
              "rank": 20,
              "points": 0,
              "goalsDiff": -3,
              "form": "LL",
              "all": {
                "played": 2,
                "wins": 0,
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
                "goalsFor": 1,
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
              "teamId": 75,
              "team": "Stoke City",
              "rank": 21,
              "points": 0,
              "goalsDiff": -3,
              "form": "LL",
              "all": {
                "played": 2,
                "wins": 0,
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
                "goalsFor": 1,
                "goalsAgainst": 2
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
              "teamId": 1379,
              "team": "Lincoln",
              "rank": 22,
              "points": 0,
              "goalsDiff": -3,
              "form": "LL",
              "all": {
                "played": 2,
                "wins": 0,
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
                "goalsFor": 1,
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
              "teamId": 71,
              "team": "Norwich",
              "rank": 23,
              "points": 0,
              "goalsDiff": -4,
              "form": "LL",
              "all": {
                "played": 2,
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 1,
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
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 0,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 41,
              "team": "Southampton",
              "rank": 24,
              "points": -1,
              "goalsDiff": 1,
              "form": "WL",
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
            }
          ],
          "teams": [
            {
              "teamId": 1837,
              "team": "Wrexham",
              "form": "DD",
              "all": {
                "played": 2,
                "wins": 0,
                "draws": 2,
                "losses": 0,
                "goalsFor": 2,
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
                "played": 1,
                "wins": 0,
                "draws": 1,
                "losses": 0,
                "goalsFor": 1,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 54,
              "team": "Birmingham",
              "form": "DD",
              "all": {
                "played": 2,
                "wins": 0,
                "draws": 2,
                "losses": 0,
                "goalsFor": 2,
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
                "played": 1,
                "wins": 0,
                "draws": 1,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 39,
              "team": "Wolves",
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
                "wins": 0,
                "draws": 1,
                "losses": 0,
                "goalsFor": 2,
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
              "teamId": 75,
              "team": "Stoke City",
              "form": "LL",
              "all": {
                "played": 2,
                "wins": 0,
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
                "goalsFor": 1,
                "goalsAgainst": 2
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
              "teamId": 69,
              "team": "Derby",
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
                "played": 1,
                "wins": 0,
                "draws": 1,
                "losses": 0,
                "goalsFor": 2,
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
              "teamId": 76,
              "team": "Swansea",
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
              "teamId": 70,
              "team": "Middlesbrough",
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
              "teamId": 60,
              "team": "West Brom",
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
                "goalsFor": 3,
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
              "teamId": 38,
              "team": "Watford",
              "form": "WD",
              "all": {
                "played": 2,
                "wins": 1,
                "draws": 1,
                "losses": 0,
                "goalsFor": 3,
                "goalsAgainst": 2
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
                "goalsFor": 1,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 48,
              "team": "West Ham",
              "form": "DL",
              "all": {
                "played": 2,
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 4
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
                "played": 1,
                "wins": 0,
                "draws": 1,
                "losses": 0,
                "goalsFor": 2,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 41,
              "team": "Southampton",
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
              "teamId": 58,
              "team": "Millwall",
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
              "teamId": 43,
              "team": "Cardiff",
              "form": "DD",
              "all": {
                "played": 2,
                "wins": 0,
                "draws": 2,
                "losses": 0,
                "goalsFor": 3,
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
                "wins": 0,
                "draws": 1,
                "losses": 0,
                "goalsFor": 2,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 62,
              "team": "Sheffield Utd",
              "form": "DD",
              "all": {
                "played": 2,
                "wins": 0,
                "draws": 2,
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
                "played": 1,
                "wins": 0,
                "draws": 1,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 56,
              "team": "Bristol City",
              "form": "LD",
              "all": {
                "played": 2,
                "wins": 0,
                "draws": 1,
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
                "goalsAgainst": 2
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
              "teamId": 1355,
              "team": "Portsmouth",
              "form": "LW",
              "all": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 4,
                "goalsAgainst": 4
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
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 3,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 67,
              "team": "Blackburn",
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
                "goalsFor": 2,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 72,
              "team": "QPR",
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
                "goalsFor": 3,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 68,
              "team": "Bolton",
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
              "teamId": 1379,
              "team": "Lincoln",
              "form": "LL",
              "all": {
                "played": 2,
                "wins": 0,
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
                "goalsFor": 1,
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
              "teamId": 71,
              "team": "Norwich",
              "form": "LL",
              "all": {
                "played": 2,
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 1,
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
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 0,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 44,
              "team": "Burnley",
              "form": "DL",
              "all": {
                "played": 2,
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 3,
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
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 1,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 1335,
              "team": "Charlton",
              "form": "WW",
              "all": {
                "played": 2,
                "wins": 2,
                "draws": 0,
                "losses": 0,
                "goalsFor": 4,
                "goalsAgainst": 2
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
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 2,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 59,
              "team": "Preston",
              "form": "LL",
              "all": {
                "played": 2,
                "wins": 0,
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
                "goalsFor": 1,
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
            }
          ],
          "fixtures": [
            {
              "fixtureId": 1563118,
              "kickoff": "2026-08-29T04:00:00+09:00",
              "status": "NS",
              "homeTeamId": 1837,
              "homeTeam": "Wrexham",
              "awayTeamId": 54,
              "awayTeam": "Birmingham",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1563117,
              "kickoff": "2026-08-29T20:30:00+09:00",
              "status": "NS",
              "homeTeamId": 39,
              "homeTeam": "Wolves",
              "awayTeamId": 75,
              "awayTeam": "Stoke City",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1563112,
              "kickoff": "2026-08-29T20:30:00+09:00",
              "status": "NS",
              "homeTeamId": 69,
              "homeTeam": "Derby",
              "awayTeamId": 76,
              "awayTeam": "Swansea",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1563113,
              "kickoff": "2026-08-29T20:30:00+09:00",
              "status": "NS",
              "homeTeamId": 70,
              "homeTeam": "Middlesbrough",
              "awayTeamId": 60,
              "awayTeam": "West Brom",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1563116,
              "kickoff": "2026-08-29T23:00:00+09:00",
              "status": "NS",
              "homeTeamId": 38,
              "homeTeam": "Watford",
              "awayTeamId": 48,
              "awayTeam": "West Ham",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1563115,
              "kickoff": "2026-08-29T23:00:00+09:00",
              "status": "NS",
              "homeTeamId": 41,
              "homeTeam": "Southampton",
              "awayTeamId": 58,
              "awayTeam": "Millwall",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1563110,
              "kickoff": "2026-08-29T23:00:00+09:00",
              "status": "NS",
              "homeTeamId": 43,
              "homeTeam": "Cardiff",
              "awayTeamId": 62,
              "awayTeam": "Sheffield Utd",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1563109,
              "kickoff": "2026-08-29T23:00:00+09:00",
              "status": "NS",
              "homeTeamId": 56,
              "homeTeam": "Bristol City",
              "awayTeamId": 1355,
              "awayTeam": "Portsmouth",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1563107,
              "kickoff": "2026-08-29T23:00:00+09:00",
              "status": "NS",
              "homeTeamId": 67,
              "homeTeam": "Blackburn",
              "awayTeamId": 72,
              "awayTeam": "QPR",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1563108,
              "kickoff": "2026-08-29T23:00:00+09:00",
              "status": "NS",
              "homeTeamId": 68,
              "homeTeam": "Bolton",
              "awayTeamId": 1379,
              "awayTeam": "Lincoln",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1563114,
              "kickoff": "2026-08-29T23:00:00+09:00",
              "status": "NS",
              "homeTeamId": 71,
              "homeTeam": "Norwich",
              "awayTeamId": 44,
              "awayTeam": "Burnley",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1563111,
              "kickoff": "2026-08-29T23:00:00+09:00",
              "status": "NS",
              "homeTeamId": 1335,
              "homeTeam": "Charlton",
              "awayTeamId": 59,
              "awayTeam": "Preston",
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
              "teamId": 536,
              "team": "Sevilla",
              "rank": 1,
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
                "goalsAgainst": 1
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
              "teamId": 543,
              "team": "Real Betis",
              "rank": 2,
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
              "teamId": 542,
              "team": "Alaves",
              "rank": 3,
              "points": 4,
              "goalsDiff": 3,
              "form": "DW",
              "all": {
                "played": 2,
                "wins": 1,
                "draws": 1,
                "losses": 0,
                "goalsFor": 4,
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
                "wins": 0,
                "draws": 1,
                "losses": 0,
                "goalsFor": 1,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 530,
              "team": "Atletico Madrid",
              "rank": 4,
              "points": 4,
              "goalsDiff": 2,
              "form": "DW",
              "all": {
                "played": 2,
                "wins": 1,
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
                "goalsFor": 4,
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
              "teamId": 529,
              "team": "Barcelona",
              "rank": 5,
              "points": 3,
              "goalsDiff": 5,
              "form": "W",
              "all": {
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 5,
                "goalsAgainst": 0
              },
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
                "goalsFor": 5,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 540,
              "team": "Espanyol",
              "rank": 6,
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
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 4,
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
              "teamId": 541,
              "team": "Real Madrid",
              "rank": 7,
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
              "teamId": 546,
              "team": "Getafe",
              "rank": 8,
              "points": 3,
              "goalsDiff": -2,
              "form": "WL",
              "all": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 1,
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
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 0,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 533,
              "team": "Villarreal",
              "rank": 9,
              "points": 2,
              "goalsDiff": 0,
              "form": "DD",
              "all": {
                "played": 2,
                "wins": 0,
                "draws": 2,
                "losses": 0,
                "goalsFor": 4,
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
                "draws": 2,
                "losses": 0,
                "goalsFor": 4,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 544,
              "team": "Deportivo La Coruna",
              "rank": 10,
              "points": 2,
              "goalsDiff": 0,
              "form": "DD",
              "all": {
                "played": 2,
                "wins": 0,
                "draws": 2,
                "losses": 0,
                "goalsFor": 2,
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
              "rank": 11,
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
              "teamId": 538,
              "team": "Celta Vigo",
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
              "teamId": 4665,
              "team": "Racing Santander",
              "rank": 13,
              "points": 1,
              "goalsDiff": -1,
              "form": "LD",
              "all": {
                "played": 2,
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 2,
                "goalsAgainst": 3
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
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 0,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 728,
              "team": "Rayo Vallecano",
              "rank": 14,
              "points": 1,
              "goalsDiff": -1,
              "form": "DL",
              "all": {
                "played": 2,
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 2,
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
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 1,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 532,
              "team": "Valencia",
              "rank": 15,
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
                "played": 2,
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 0,
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
              "teamId": 535,
              "team": "Malaga",
              "rank": 16,
              "points": 1,
              "goalsDiff": -2,
              "form": "DL",
              "all": {
                "played": 2,
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 1,
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
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 0,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 539,
              "team": "Levante",
              "rank": 17,
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
                "goalsFor": 0,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 797,
              "team": "Elche",
              "rank": 18,
              "points": 1,
              "goalsDiff": -5,
              "form": "LD",
              "all": {
                "played": 2,
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 1,
                "goalsAgainst": 6
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
                "draws": 1,
                "losses": 0,
                "goalsFor": 1,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 548,
              "team": "Real Sociedad",
              "rank": 19,
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
              "teamId": 531,
              "team": "Athletic Club",
              "rank": 20,
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
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 1,
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
          "teams": [
            {
              "teamId": 4665,
              "team": "Racing Santander",
              "form": "DL",
              "all": {
                "played": 2,
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 2,
                "goalsAgainst": 3
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
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 0,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 797,
              "team": "Elche",
              "form": "DL",
              "all": {
                "played": 2,
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 1,
                "goalsAgainst": 6
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
                "draws": 1,
                "losses": 0,
                "goalsFor": 1,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 542,
              "team": "Alaves",
              "form": "WD",
              "all": {
                "played": 2,
                "wins": 1,
                "draws": 1,
                "losses": 0,
                "goalsFor": 4,
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
                "wins": 0,
                "draws": 1,
                "losses": 0,
                "goalsFor": 1,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 533,
              "team": "Villarreal",
              "form": "DD",
              "all": {
                "played": 2,
                "wins": 0,
                "draws": 2,
                "losses": 0,
                "goalsFor": 4,
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
                "draws": 2,
                "losses": 0,
                "goalsFor": 4,
                "goalsAgainst": 4
              }
            }
          ],
          "fixtures": [
            {
              "fixtureId": 1570359,
              "kickoff": "2026-08-29T02:00:00+09:00",
              "status": "NS",
              "homeTeamId": 4665,
              "homeTeam": "Racing Santander",
              "awayTeamId": 797,
              "awayTeam": "Elche",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1570353,
              "kickoff": "2026-08-29T04:30:00+09:00",
              "status": "NS",
              "homeTeamId": 542,
              "homeTeam": "Alaves",
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
          "key": "SERIEA",
          "leagueId": 135,
          "season": "2026",
          "standings": [
            {
              "teamId": 497,
              "team": "AS Roma",
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
              "teamId": 505,
              "team": "Inter",
              "rank": 2,
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
              "teamId": 492,
              "team": "Napoli",
              "rank": 3,
              "points": 3,
              "goalsDiff": 2,
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
              "teamId": 867,
              "team": "Lecce",
              "rank": 4,
              "points": 3,
              "goalsDiff": 2,
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
              "teamId": 489,
              "team": "AC Milan",
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
              "teamId": 499,
              "team": "Atalanta",
              "rank": 6,
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
              "teamId": 490,
              "team": "Cagliari",
              "rank": 7,
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
              "teamId": 496,
              "team": "Juventus",
              "rank": 8,
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
              "teamId": 487,
              "team": "Lazio",
              "rank": 9,
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
              "teamId": 895,
              "team": "Como",
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
              "teamId": 494,
              "team": "Udinese",
              "rank": 11,
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
              "teamId": 488,
              "team": "Sassuolo",
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
              "teamId": 503,
              "team": "Torino",
              "rank": 13,
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
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 1,
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
              "teamId": 512,
              "team": "Frosinone",
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
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 0,
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
              "teamId": 523,
              "team": "Parma",
              "rank": 15,
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
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 0,
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
              "teamId": 500,
              "team": "Bologna",
              "rank": 16,
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
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 0,
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
              "teamId": 495,
              "team": "Genoa",
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
              "teamId": 517,
              "team": "Venezia",
              "rank": 18,
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
              "teamId": 1579,
              "team": "Monza",
              "rank": 19,
              "points": 0,
              "goalsDiff": -3,
              "form": "L",
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
              "teamId": 502,
              "team": "Fiorentina",
              "rank": 20,
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
            }
          ],
          "teams": [
            {
              "teamId": 489,
              "team": "AC Milan",
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
              "teamId": 517,
              "team": "Venezia",
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
            }
          ],
          "fixtures": [
            {
              "fixtureId": 1550097,
              "kickoff": "2026-08-29T03:45:00+09:00",
              "status": "NS",
              "homeTeamId": 489,
              "homeTeam": "AC Milan",
              "awayTeamId": 517,
              "awayTeam": "Venezia",
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
              "teamId": 157,
              "team": "Bayern München",
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
              "teamId": 165,
              "team": "Borussia Dortmund",
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
              "teamId": 173,
              "team": "RB Leipzig",
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
              "teamId": 172,
              "team": "VfB Stuttgart",
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
              "teamId": 167,
              "team": "1899 Hoffenheim",
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
              "teamId": 168,
              "team": "Bayer Leverkusen",
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
              "teamId": 160,
              "team": "SC Freiburg",
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
              "teamId": 169,
              "team": "Eintracht Frankfurt",
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
              "teamId": 170,
              "team": "FC Augsburg",
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
              "teamId": 164,
              "team": "FSV Mainz 05",
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
              "teamId": 182,
              "team": "Union Berlin",
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
              "teamId": 163,
              "team": "Borussia Mönchengladbach",
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
              "teamId": 175,
              "team": "Hamburger SV",
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
              "teamId": 192,
              "team": "1. FC Köln",
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
              "teamId": 162,
              "team": "Werder Bremen",
              "rank": 15,
              "points": 0,
              "goalsDiff": 0,
              "form": "",
              "all": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "home": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "away": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 174,
              "team": "FC Schalke 04",
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
              "teamId": 1660,
              "team": "SV Elversberg",
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
              "teamId": 185,
              "team": "SC Paderborn 07",
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
            }
          ],
          "teams": [
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
              "teamId": 164,
              "team": "FSV Mainz 05",
              "form": "",
              "all": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "home": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "away": {
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
              "form": "",
              "all": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "home": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "away": {
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
            },
            {
              "teamId": 163,
              "team": "Borussia Mönchengladbach",
              "form": "",
              "all": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "home": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "away": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 182,
              "team": "Union Berlin",
              "form": "",
              "all": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "home": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "away": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 169,
              "team": "Eintracht Frankfurt",
              "form": "",
              "all": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "home": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "away": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 192,
              "team": "1. FC Köln",
              "form": "",
              "all": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "home": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "away": {
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
              "form": "",
              "all": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "home": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "away": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 1660,
              "team": "SV Elversberg",
              "form": "",
              "all": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "home": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "away": {
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
            }
          ],
          "fixtures": [
            {
              "fixtureId": 1575140,
              "kickoff": "2026-08-29T03:30:00+09:00",
              "status": "NS",
              "homeTeamId": 157,
              "homeTeam": "Bayern München",
              "awayTeamId": 172,
              "awayTeam": "VfB Stuttgart",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1575146,
              "kickoff": "2026-08-29T22:30:00+09:00",
              "status": "NS",
              "homeTeamId": 164,
              "homeTeam": "FSV Mainz 05",
              "awayTeamId": 185,
              "awayTeam": "SC Paderborn 07",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1575147,
              "kickoff": "2026-08-29T22:30:00+09:00",
              "status": "NS",
              "homeTeamId": 173,
              "homeTeam": "RB Leipzig",
              "awayTeamId": 163,
              "awayTeam": "Borussia Mönchengladbach",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1575148,
              "kickoff": "2026-08-29T22:30:00+09:00",
              "status": "NS",
              "homeTeamId": 182,
              "homeTeam": "Union Berlin",
              "awayTeamId": 169,
              "awayTeam": "Eintracht Frankfurt",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1575144,
              "kickoff": "2026-08-29T22:30:00+09:00",
              "status": "NS",
              "homeTeamId": 192,
              "homeTeam": "1. FC Köln",
              "awayTeamId": 167,
              "awayTeam": "1899 Hoffenheim",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1575143,
              "kickoff": "2026-08-29T22:30:00+09:00",
              "status": "NS",
              "homeTeamId": 1660,
              "homeTeam": "SV Elversberg",
              "awayTeamId": 168,
              "awayTeam": "Bayer Leverkusen",
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
              "teamId": 81,
              "team": "Marseille",
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
              "teamId": 116,
              "team": "Lens",
              "rank": 2,
              "points": 3,
              "goalsDiff": 3,
              "form": "W",
              "all": {
                "played": 1,
                "wins": 1,
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
                "goalsFor": 5,
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
              "teamId": 79,
              "team": "Lille",
              "rank": 3,
              "points": 3,
              "goalsDiff": 2,
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
              "teamId": 80,
              "team": "Lyon",
              "rank": 4,
              "points": 3,
              "goalsDiff": 2,
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
              "teamId": 91,
              "team": "Monaco",
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
              "teamId": 106,
              "team": "Stade Brestois 29",
              "rank": 6,
              "points": 1,
              "goalsDiff": 0,
              "form": "D",
              "all": {
                "played": 1,
                "wins": 0,
                "draws": 1,
                "losses": 0,
                "goalsFor": 2,
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
                "draws": 1,
                "losses": 0,
                "goalsFor": 2,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 1298,
              "team": "Le Mans",
              "rank": 7,
              "points": 1,
              "goalsDiff": 0,
              "form": "D",
              "all": {
                "played": 1,
                "wins": 0,
                "draws": 1,
                "losses": 0,
                "goalsFor": 2,
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
              "rank": 8,
              "points": 1,
              "goalsDiff": 0,
              "form": "D",
              "all": {
                "played": 1,
                "wins": 0,
                "draws": 1,
                "losses": 0,
                "goalsFor": 2,
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
                "draws": 1,
                "losses": 0,
                "goalsFor": 2,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 94,
              "team": "Rennes",
              "rank": 9,
              "points": 1,
              "goalsDiff": 0,
              "form": "D",
              "all": {
                "played": 1,
                "wins": 0,
                "draws": 1,
                "losses": 0,
                "goalsFor": 2,
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
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 97,
              "team": "Lorient",
              "rank": 10,
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
              "teamId": 84,
              "team": "Nice",
              "rank": 11,
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
              "teamId": 114,
              "team": "Paris FC",
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
              "teamId": 110,
              "team": "Estac Troyes",
              "rank": 13,
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
              "teamId": 111,
              "team": "Le Havre",
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
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 0,
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
              "teamId": 96,
              "team": "Toulouse",
              "rank": 15,
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
              "teamId": 77,
              "team": "Angers",
              "rank": 16,
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
              "teamId": 108,
              "team": "Auxerre",
              "rank": 17,
              "points": 0,
              "goalsDiff": -3,
              "form": "L",
              "all": {
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 2,
                "goalsAgainst": 5
              },
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
                "goalsFor": 2,
                "goalsAgainst": 5
              }
            },
            {
              "teamId": 95,
              "team": "Strasbourg",
              "rank": 18,
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
            }
          ],
          "teams": [
            {
              "teamId": 79,
              "team": "Lille",
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
              "teamId": 85,
              "team": "Paris Saint Germain",
              "form": "D",
              "all": {
                "played": 1,
                "wins": 0,
                "draws": 1,
                "losses": 0,
                "goalsFor": 2,
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
                "draws": 1,
                "losses": 0,
                "goalsFor": 2,
                "goalsAgainst": 2
              }
            }
          ],
          "fixtures": [
            {
              "fixtureId": 1552746,
              "kickoff": "2026-08-29T03:45:00+09:00",
              "status": "NS",
              "homeTeamId": 79,
              "homeTeam": "Lille",
              "awayTeamId": 85,
              "awayTeam": "Paris Saint Germain",
              "injuriesChecked": true,
              "injuries": [],
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
              "points": 9,
              "goalsDiff": 7,
              "form": "WWW",
              "all": {
                "played": 3,
                "wins": 3,
                "draws": 0,
                "losses": 0,
                "goalsFor": 8,
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
                "goalsFor": 6,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 197,
              "team": "PSV Eindhoven",
              "rank": 2,
              "points": 7,
              "goalsDiff": 5,
              "form": "WWD",
              "all": {
                "played": 3,
                "wins": 2,
                "draws": 1,
                "losses": 0,
                "goalsFor": 9,
                "goalsAgainst": 4
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
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 2,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 410,
              "team": "GO Ahead Eagles",
              "rank": 3,
              "points": 7,
              "goalsDiff": 5,
              "form": "WDW",
              "all": {
                "played": 3,
                "wins": 2,
                "draws": 1,
                "losses": 0,
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
                "played": 1,
                "wins": 0,
                "draws": 1,
                "losses": 0,
                "goalsFor": 2,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 209,
              "team": "Feyenoord",
              "rank": 4,
              "points": 7,
              "goalsDiff": 4,
              "form": "WDW",
              "all": {
                "played": 3,
                "wins": 2,
                "draws": 1,
                "losses": 0,
                "goalsFor": 8,
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
                "wins": 2,
                "draws": 0,
                "losses": 0,
                "goalsFor": 6,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 202,
              "team": "Groningen",
              "rank": 5,
              "points": 6,
              "goalsDiff": 0,
              "form": "LWW",
              "all": {
                "played": 3,
                "wins": 2,
                "draws": 0,
                "losses": 1,
                "goalsFor": 7,
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
                "goalsFor": 5,
                "goalsAgainst": 6
              }
            },
            {
              "teamId": 194,
              "team": "Ajax",
              "rank": 6,
              "points": 4,
              "goalsDiff": 2,
              "form": "DW",
              "all": {
                "played": 2,
                "wins": 1,
                "draws": 1,
                "losses": 0,
                "goalsFor": 4,
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
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 2,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 426,
              "team": "Sparta Rotterdam",
              "rank": 7,
              "points": 4,
              "goalsDiff": 1,
              "form": "DWL",
              "all": {
                "played": 3,
                "wins": 1,
                "draws": 1,
                "losses": 1,
                "goalsFor": 6,
                "goalsAgainst": 5
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
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 3,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 205,
              "team": "Fortuna Sittard",
              "rank": 8,
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
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 3,
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
              "teamId": 210,
              "team": "Heerenveen",
              "rank": 9,
              "points": 4,
              "goalsDiff": -1,
              "form": "LDW",
              "all": {
                "played": 3,
                "wins": 1,
                "draws": 1,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 4
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
                "played": 1,
                "wins": 0,
                "draws": 1,
                "losses": 0,
                "goalsFor": 2,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 196,
              "team": "Excelsior",
              "rank": 10,
              "points": 3,
              "goalsDiff": 3,
              "form": "LW",
              "all": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 5,
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
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 4,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 413,
              "team": "NEC Nijmegen",
              "rank": 11,
              "points": 3,
              "goalsDiff": 2,
              "form": "WL",
              "all": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 5,
                "goalsAgainst": 3
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
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 4,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 415,
              "team": "Twente",
              "rank": 12,
              "points": 3,
              "goalsDiff": 1,
              "form": "WL",
              "all": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 2
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
                "goalsFor": 0,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 427,
              "team": "Telstar",
              "rank": 13,
              "points": 3,
              "goalsDiff": -1,
              "form": "LW",
              "all": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 4
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
              "points": 3,
              "goalsDiff": -2,
              "form": "WLL",
              "all": {
                "played": 3,
                "wins": 1,
                "draws": 0,
                "losses": 2,
                "goalsFor": 3,
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
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 207,
              "team": "Utrecht",
              "rank": 15,
              "points": 1,
              "goalsDiff": -4,
              "form": "DLL",
              "all": {
                "played": 3,
                "wins": 0,
                "draws": 1,
                "losses": 2,
                "goalsFor": 5,
                "goalsAgainst": 9
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
              "points": 0,
              "goalsDiff": -6,
              "form": "LL",
              "all": {
                "played": 2,
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 2,
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
              "points": 0,
              "goalsDiff": -7,
              "form": "LLL",
              "all": {
                "played": 3,
                "wins": 0,
                "draws": 0,
                "losses": 3,
                "goalsFor": 2,
                "goalsAgainst": 9
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
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 1,
                "goalsAgainst": 5
              }
            },
            {
              "teamId": 420,
              "team": "Cambuur",
              "rank": 18,
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
                "played": 2,
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 2,
                "goalsAgainst": 9
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
              "teamId": 202,
              "team": "Groningen",
              "form": "WWL",
              "all": {
                "played": 3,
                "wins": 2,
                "draws": 0,
                "losses": 1,
                "goalsFor": 7,
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
                "goalsFor": 5,
                "goalsAgainst": 6
              }
            },
            {
              "teamId": 205,
              "team": "Fortuna Sittard",
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
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 3,
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
              "teamId": 196,
              "team": "Excelsior",
              "form": "WL",
              "all": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 5,
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
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 4,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 426,
              "team": "Sparta Rotterdam",
              "form": "LWD",
              "all": {
                "played": 3,
                "wins": 1,
                "draws": 1,
                "losses": 1,
                "goalsFor": 6,
                "goalsAgainst": 5
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
              "fixtureId": 1552144,
              "kickoff": "2026-08-29T03:00:00+09:00",
              "status": "NS",
              "homeTeamId": 202,
              "homeTeam": "Groningen",
              "awayTeamId": 205,
              "awayTeam": "Fortuna Sittard",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1552145,
              "kickoff": "2026-08-29T23:30:00+09:00",
              "status": "NS",
              "homeTeamId": 196,
              "homeTeam": "Excelsior",
              "awayTeamId": 426,
              "awayTeam": "Sparta Rotterdam",
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
              "points": 9,
              "goalsDiff": 6,
              "form": "WWW",
              "all": {
                "played": 3,
                "wins": 3,
                "draws": 0,
                "losses": 0,
                "goalsFor": 6,
                "goalsAgainst": 0
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
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 2,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 228,
              "team": "Sporting CP",
              "rank": 2,
              "points": 7,
              "goalsDiff": 3,
              "form": "WWD",
              "all": {
                "played": 3,
                "wins": 2,
                "draws": 1,
                "losses": 0,
                "goalsFor": 8,
                "goalsAgainst": 5
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
                "played": 1,
                "wins": 0,
                "draws": 1,
                "losses": 0,
                "goalsFor": 2,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 227,
              "team": "Santa Clara",
              "rank": 3,
              "points": 7,
              "goalsDiff": 2,
              "form": "WWD",
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
              "teamId": 214,
              "team": "Maritimo",
              "rank": 4,
              "points": 7,
              "goalsDiff": 2,
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
                "goalsFor": 2,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 762,
              "team": "GIL Vicente",
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
                "played": 2,
                "wins": 2,
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
              "teamId": 240,
              "team": "Arouca",
              "rank": 6,
              "points": 6,
              "goalsDiff": 3,
              "form": "LWW",
              "all": {
                "played": 3,
                "wins": 2,
                "draws": 0,
                "losses": 1,
                "goalsFor": 5,
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
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 1,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 211,
              "team": "Benfica",
              "rank": 7,
              "points": 4,
              "goalsDiff": 7,
              "form": "WD",
              "all": {
                "played": 2,
                "wins": 1,
                "draws": 1,
                "losses": 0,
                "goalsFor": 9,
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
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 7,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 225,
              "team": "Nacional",
              "rank": 8,
              "points": 4,
              "goalsDiff": 1,
              "form": "LWD",
              "all": {
                "played": 3,
                "wins": 1,
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
                "goalsFor": 2,
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
              "teamId": 224,
              "team": "Vitória SC",
              "rank": 9,
              "points": 3,
              "goalsDiff": -1,
              "form": "WLL",
              "all": {
                "played": 3,
                "wins": 1,
                "draws": 0,
                "losses": 2,
                "goalsFor": 3,
                "goalsAgainst": 4
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
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 2,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 226,
              "team": "Rio Ave",
              "rank": 10,
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
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 0,
                "goalsAgainst": 2
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
              "teamId": 15130,
              "team": "Estrela",
              "rank": 11,
              "points": 2,
              "goalsDiff": 0,
              "form": "DD",
              "all": {
                "played": 2,
                "wins": 0,
                "draws": 2,
                "losses": 0,
                "goalsFor": 4,
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
                "played": 1,
                "wins": 0,
                "draws": 1,
                "losses": 0,
                "goalsFor": 2,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 238,
              "team": "Academico Viseu",
              "rank": 12,
              "points": 2,
              "goalsDiff": -1,
              "form": "DLD",
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
                "draws": 0,
                "losses": 1,
                "goalsFor": 0,
                "goalsAgainst": 1
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
              "teamId": 217,
              "team": "SC Braga",
              "rank": 13,
              "points": 1,
              "goalsDiff": 0,
              "form": "D",
              "all": {
                "played": 1,
                "wins": 0,
                "draws": 1,
                "losses": 0,
                "goalsFor": 2,
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
                "draws": 1,
                "losses": 0,
                "goalsFor": 2,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 242,
              "team": "Famalicao",
              "rank": 14,
              "points": 1,
              "goalsDiff": -2,
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
                "draws": 1,
                "losses": 1,
                "goalsFor": 1,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 230,
              "team": "Estoril",
              "rank": 15,
              "points": 1,
              "goalsDiff": -4,
              "form": "LLD",
              "all": {
                "played": 3,
                "wins": 0,
                "draws": 1,
                "losses": 2,
                "goalsFor": 1,
                "goalsAgainst": 5
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
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 0,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 215,
              "team": "Moreirense",
              "rank": 16,
              "points": 1,
              "goalsDiff": -4,
              "form": "LD",
              "all": {
                "played": 2,
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 2,
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
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 0,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 4724,
              "team": "Alverca",
              "rank": 17,
              "points": 1,
              "goalsDiff": -4,
              "form": "LDL",
              "all": {
                "played": 3,
                "wins": 0,
                "draws": 1,
                "losses": 2,
                "goalsFor": 3,
                "goalsAgainst": 7
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
              "points": 0,
              "goalsDiff": -10,
              "form": "LLL",
              "all": {
                "played": 3,
                "wins": 0,
                "draws": 0,
                "losses": 3,
                "goalsFor": 0,
                "goalsAgainst": 10
              },
              "home": {
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 0,
                "goalsAgainst": 7
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
              "teamId": 226,
              "team": "Rio Ave",
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
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 0,
                "goalsAgainst": 2
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
              "teamId": 228,
              "team": "Sporting CP",
              "form": "DWW",
              "all": {
                "played": 3,
                "wins": 2,
                "draws": 1,
                "losses": 0,
                "goalsFor": 8,
                "goalsAgainst": 5
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
                "played": 1,
                "wins": 0,
                "draws": 1,
                "losses": 0,
                "goalsFor": 2,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 240,
              "team": "Arouca",
              "form": "WWL",
              "all": {
                "played": 3,
                "wins": 2,
                "draws": 0,
                "losses": 1,
                "goalsFor": 5,
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
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 1,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 214,
              "team": "Maritimo",
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
                "goalsFor": 2,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 4724,
              "team": "Alverca",
              "form": "LDL",
              "all": {
                "played": 3,
                "wins": 0,
                "draws": 1,
                "losses": 2,
                "goalsFor": 3,
                "goalsAgainst": 7
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
                "draws": 0,
                "losses": 2,
                "goalsFor": 1,
                "goalsAgainst": 5
              }
            },
            {
              "teamId": 227,
              "team": "Santa Clara",
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
            }
          ],
          "fixtures": [
            {
              "fixtureId": 1575481,
              "kickoff": "2026-08-29T04:15:00+09:00",
              "status": "NS",
              "homeTeamId": 226,
              "homeTeam": "Rio Ave",
              "awayTeamId": 228,
              "awayTeam": "Sporting CP",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1575475,
              "kickoff": "2026-08-29T23:30:00+09:00",
              "status": "NS",
              "homeTeamId": 240,
              "homeTeam": "Arouca",
              "awayTeamId": 214,
              "awayTeam": "Maritimo",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1575474,
              "kickoff": "2026-08-29T23:30:00+09:00",
              "status": "NS",
              "homeTeamId": 4724,
              "homeTeam": "Alverca",
              "awayTeamId": 227,
              "awayTeam": "Santa Clara",
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
              "points": 6,
              "goalsDiff": 5,
              "form": "WW",
              "all": {
                "played": 2,
                "wins": 2,
                "draws": 0,
                "losses": 0,
                "goalsFor": 6,
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
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 5,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 253,
              "team": "Dundee",
              "rank": 2,
              "points": 6,
              "goalsDiff": 3,
              "form": "WWL",
              "all": {
                "played": 3,
                "wins": 2,
                "draws": 0,
                "losses": 1,
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
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 2,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 251,
              "team": "ST Mirren",
              "rank": 3,
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
                "goalsFor": 1,
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
              "teamId": 256,
              "team": "Motherwell",
              "rank": 4,
              "points": 4,
              "goalsDiff": 1,
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
              "teamId": 254,
              "team": "Heart Of Midlothian",
              "rank": 5,
              "points": 3,
              "goalsDiff": 3,
              "form": "WL",
              "all": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 5,
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
                "goalsFor": 1,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 258,
              "team": "ST Johnstone",
              "rank": 6,
              "points": 3,
              "goalsDiff": 0,
              "form": "LW",
              "all": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 4,
                "goalsAgainst": 4
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
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 0,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 249,
              "team": "Hibernian",
              "rank": 7,
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
                "goalsFor": 1,
                "goalsAgainst": 2
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
              "teamId": 252,
              "team": "Aberdeen",
              "rank": 8,
              "points": 3,
              "goalsDiff": -1,
              "form": "LW",
              "all": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 2,
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
                "goalsFor": 0,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 257,
              "team": "Rangers",
              "rank": 9,
              "points": 1,
              "goalsDiff": -1,
              "form": "LD",
              "all": {
                "played": 2,
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 2,
                "goalsAgainst": 3
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
                "played": 1,
                "wins": 0,
                "draws": 1,
                "losses": 0,
                "goalsFor": 1,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 1389,
              "team": "Falkirk",
              "rank": 10,
              "points": 1,
              "goalsDiff": -2,
              "form": "DL",
              "all": {
                "played": 2,
                "wins": 0,
                "draws": 1,
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
                "played": 1,
                "wins": 0,
                "draws": 1,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 1386,
              "team": "Dundee Utd",
              "rank": 11,
              "points": 1,
              "goalsDiff": -6,
              "form": "LLD",
              "all": {
                "played": 3,
                "wins": 0,
                "draws": 1,
                "losses": 2,
                "goalsFor": 1,
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
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 0,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 250,
              "team": "Kilmarnock",
              "rank": 12,
              "points": 0,
              "goalsDiff": -5,
              "form": "LL",
              "all": {
                "played": 2,
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 4,
                "goalsAgainst": 9
              },
              "home": {
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 1,
                "goalsAgainst": 5
              },
              "away": {
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 4
              }
            }
          ],
          "teams": [
            {
              "teamId": 247,
              "team": "Celtic",
              "form": "WW",
              "all": {
                "played": 2,
                "wins": 2,
                "draws": 0,
                "losses": 0,
                "goalsFor": 6,
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
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 5,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 1389,
              "team": "Falkirk",
              "form": "LD",
              "all": {
                "played": 2,
                "wins": 0,
                "draws": 1,
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
                "played": 1,
                "wins": 0,
                "draws": 1,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 250,
              "team": "Kilmarnock",
              "form": "LL",
              "all": {
                "played": 2,
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 4,
                "goalsAgainst": 9
              },
              "home": {
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 1,
                "goalsAgainst": 5
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
              "teamId": 1386,
              "team": "Dundee Utd",
              "form": "DLL",
              "all": {
                "played": 3,
                "wins": 0,
                "draws": 1,
                "losses": 2,
                "goalsFor": 1,
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
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 0,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 254,
              "team": "Heart Of Midlothian",
              "form": "LW",
              "all": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 5,
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
                "goalsFor": 1,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 258,
              "team": "ST Johnstone",
              "form": "WL",
              "all": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 4,
                "goalsAgainst": 4
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
              "fixtureId": 1556647,
              "kickoff": "2026-08-29T23:00:00+09:00",
              "status": "NS",
              "homeTeamId": 247,
              "homeTeam": "Celtic",
              "awayTeamId": 1389,
              "awayTeam": "Falkirk",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1556650,
              "kickoff": "2026-08-29T23:00:00+09:00",
              "status": "NS",
              "homeTeamId": 250,
              "homeTeam": "Kilmarnock",
              "awayTeamId": 1386,
              "awayTeam": "Dundee Utd",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1556649,
              "kickoff": "2026-08-29T23:00:00+09:00",
              "status": "NS",
              "homeTeamId": 254,
              "homeTeam": "Heart Of Midlothian",
              "awayTeamId": 258,
              "awayTeam": "ST Johnstone",
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
              "teamId": 569,
              "team": "Club Brugge KV",
              "rank": 1,
              "points": 9,
              "goalsDiff": 7,
              "form": "WWW",
              "all": {
                "played": 3,
                "wins": 3,
                "draws": 0,
                "losses": 0,
                "goalsFor": 7,
                "goalsAgainst": 0
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
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 3,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 736,
              "team": "Charleroi",
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
              "teamId": 600,
              "team": "Zulte Waregem",
              "rank": 3,
              "points": 7,
              "goalsDiff": 5,
              "form": "WDW",
              "all": {
                "played": 3,
                "wins": 2,
                "draws": 1,
                "losses": 0,
                "goalsFor": 6,
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
                "wins": 0,
                "draws": 1,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 740,
              "team": "Antwerp",
              "rank": 4,
              "points": 7,
              "goalsDiff": 4,
              "form": "DWW",
              "all": {
                "played": 3,
                "wins": 2,
                "draws": 1,
                "losses": 0,
                "goalsFor": 9,
                "goalsAgainst": 5
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
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 3,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 631,
              "team": "Gent",
              "rank": 5,
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
              "teamId": 733,
              "team": "Standard Liege",
              "rank": 6,
              "points": 5,
              "goalsDiff": 2,
              "form": "WDD",
              "all": {
                "played": 3,
                "wins": 1,
                "draws": 2,
                "losses": 0,
                "goalsFor": 7,
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
                "played": 1,
                "wins": 0,
                "draws": 1,
                "losses": 0,
                "goalsFor": 3,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 1393,
              "team": "Union St. Gilloise",
              "rank": 7,
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
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 259,
              "team": "Lommel United",
              "rank": 8,
              "points": 4,
              "goalsDiff": 3,
              "form": "WLD",
              "all": {
                "played": 3,
                "wins": 1,
                "draws": 1,
                "losses": 1,
                "goalsFor": 5,
                "goalsAgainst": 2
              },
              "home": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
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
              "teamId": 742,
              "team": "Genk",
              "rank": 9,
              "points": 4,
              "goalsDiff": 0,
              "form": "DWL",
              "all": {
                "played": 3,
                "wins": 1,
                "draws": 1,
                "losses": 1,
                "goalsFor": 8,
                "goalsAgainst": 8
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
                "played": 2,
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 5,
                "goalsAgainst": 6
              }
            },
            {
              "teamId": 554,
              "team": "Anderlecht",
              "rank": 10,
              "points": 3,
              "goalsDiff": 0,
              "form": "LW",
              "all": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 2,
                "goalsAgainst": 2
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
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 738,
              "team": "SK Beveren",
              "rank": 11,
              "points": 3,
              "goalsDiff": -4,
              "form": "LWL",
              "all": {
                "played": 3,
                "wins": 1,
                "draws": 0,
                "losses": 2,
                "goalsFor": 2,
                "goalsAgainst": 6
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
                "goalsFor": 1,
                "goalsAgainst": 6
              }
            },
            {
              "teamId": 735,
              "team": "St. Truiden",
              "rank": 12,
              "points": 2,
              "goalsDiff": 0,
              "form": "DD",
              "all": {
                "played": 2,
                "wins": 0,
                "draws": 2,
                "losses": 0,
                "goalsFor": 4,
                "goalsAgainst": 4
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
                "wins": 0,
                "draws": 1,
                "losses": 0,
                "goalsFor": 3,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 741,
              "team": "Cercle Brugge",
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
                "draws": 1,
                "losses": 0,
                "goalsFor": 3,
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
              "teamId": 266,
              "team": "KV Mechelen",
              "rank": 14,
              "points": 1,
              "goalsDiff": -4,
              "form": "LDL",
              "all": {
                "played": 3,
                "wins": 0,
                "draws": 1,
                "losses": 2,
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
                "played": 2,
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 0,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 5902,
              "team": "RAAL La Louvière",
              "rank": 15,
              "points": 0,
              "goalsDiff": -4,
              "form": "LLL",
              "all": {
                "played": 3,
                "wins": 0,
                "draws": 0,
                "losses": 3,
                "goalsFor": 2,
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
                "draws": 0,
                "losses": 2,
                "goalsFor": 1,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 260,
              "team": "OH Leuven",
              "rank": 16,
              "points": 0,
              "goalsDiff": -5,
              "form": "LL",
              "all": {
                "played": 2,
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 1,
                "goalsAgainst": 6
              },
              "home": {
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 0,
                "goalsAgainst": 3
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
              "teamId": 734,
              "team": "Kortrijk",
              "rank": 17,
              "points": 0,
              "goalsDiff": -6,
              "form": "LL",
              "all": {
                "played": 2,
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 0,
                "goalsAgainst": 6
              },
              "home": {
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 0,
                "goalsAgainst": 3
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
              "teamId": 261,
              "team": "KVC Westerlo",
              "rank": 18,
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
                "goalsFor": 1,
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
              "teamId": 742,
              "team": "Genk",
              "form": "LWD",
              "all": {
                "played": 3,
                "wins": 1,
                "draws": 1,
                "losses": 1,
                "goalsFor": 8,
                "goalsAgainst": 8
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
                "played": 2,
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 5,
                "goalsAgainst": 6
              }
            },
            {
              "teamId": 738,
              "team": "SK Beveren",
              "form": "LWL",
              "all": {
                "played": 3,
                "wins": 1,
                "draws": 0,
                "losses": 2,
                "goalsFor": 2,
                "goalsAgainst": 6
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
                "goalsFor": 1,
                "goalsAgainst": 6
              }
            },
            {
              "teamId": 5902,
              "team": "RAAL La Louvière",
              "form": "LLL",
              "all": {
                "played": 3,
                "wins": 0,
                "draws": 0,
                "losses": 3,
                "goalsFor": 2,
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
                "draws": 0,
                "losses": 2,
                "goalsFor": 1,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 266,
              "team": "KV Mechelen",
              "form": "LDL",
              "all": {
                "played": 3,
                "wins": 0,
                "draws": 1,
                "losses": 2,
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
                "played": 2,
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 0,
                "goalsAgainst": 4
              }
            }
          ],
          "fixtures": [
            {
              "fixtureId": 1558608,
              "kickoff": "2026-08-29T03:45:00+09:00",
              "status": "NS",
              "homeTeamId": 742,
              "homeTeam": "Genk",
              "awayTeamId": 738,
              "awayTeam": "SK Beveren",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1558609,
              "kickoff": "2026-08-29T23:00:00+09:00",
              "status": "NS",
              "homeTeamId": 5902,
              "homeTeam": "RAAL La Louvière",
              "awayTeamId": 266,
              "awayTeam": "KV Mechelen",
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
              "teamId": 997,
              "team": "Gençlerbirliği S.K.",
              "rank": 1,
              "points": 6,
              "goalsDiff": 2,
              "form": "WW",
              "all": {
                "played": 2,
                "wins": 2,
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
                "goalsFor": 2,
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
              "teamId": 645,
              "team": "Galatasaray",
              "rank": 2,
              "points": 4,
              "goalsDiff": 4,
              "form": "WD",
              "all": {
                "played": 2,
                "wins": 1,
                "draws": 1,
                "losses": 0,
                "goalsFor": 6,
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
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 4,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 3603,
              "team": "Samsunspor",
              "rank": 3,
              "points": 4,
              "goalsDiff": 2,
              "form": "WD",
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
                "wins": 0,
                "draws": 1,
                "losses": 0,
                "goalsFor": 3,
                "goalsAgainst": 3
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
              "rank": 4,
              "points": 4,
              "goalsDiff": 1,
              "form": "WD",
              "all": {
                "played": 2,
                "wins": 1,
                "draws": 1,
                "losses": 0,
                "goalsFor": 3,
                "goalsAgainst": 2
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
                "goalsFor": 1,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 996,
              "team": "Alanyaspor",
              "rank": 5,
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
              "teamId": 3573,
              "team": "Gaziantep FK",
              "rank": 6,
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
              "teamId": 1004,
              "team": "Kasımpaşa",
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
              "teamId": 611,
              "team": "Fenerbahçe",
              "rank": 8,
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
              "teamId": 3579,
              "team": "Amed",
              "rank": 9,
              "points": 3,
              "goalsDiff": 1,
              "form": "LW",
              "all": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 3,
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
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 0,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 564,
              "team": "Başakşehir",
              "rank": 10,
              "points": 3,
              "goalsDiff": 1,
              "form": "LW",
              "all": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 3,
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
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 1,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 7411,
              "team": "Kocaelispor",
              "rank": 11,
              "points": 3,
              "goalsDiff": 0,
              "form": "WL",
              "all": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 2,
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
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 0,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 549,
              "team": "Beşiktaş",
              "rank": 12,
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
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 1,
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
              "teamId": 1007,
              "team": "Rizespor",
              "rank": 13,
              "points": 3,
              "goalsDiff": -1,
              "form": "LW",
              "all": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 1,
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
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 1,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 994,
              "team": "Göztepe",
              "rank": 14,
              "points": 1,
              "goalsDiff": -1,
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
                "goalsFor": 3,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 6343,
              "team": "Çorum FK",
              "rank": 15,
              "points": 1,
              "goalsDiff": -1,
              "form": "LD",
              "all": {
                "played": 2,
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 2,
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
                "draws": 1,
                "losses": 0,
                "goalsFor": 2,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 3588,
              "team": "Eyüpspor",
              "rank": 16,
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
              "teamId": 607,
              "team": "Konyaspor",
              "rank": 17,
              "points": 0,
              "goalsDiff": -3,
              "form": "LL",
              "all": {
                "played": 2,
                "wins": 0,
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
                "goalsAgainst": 1
              },
              "away": {
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 2,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 1009,
              "team": "Erzurumspor FK",
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
              "teamId": 997,
              "team": "Gençlerbirliği S.K.",
              "form": "WW",
              "all": {
                "played": 2,
                "wins": 2,
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
                "goalsFor": 2,
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
              "teamId": 1009,
              "team": "Erzurumspor FK",
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
          "fixtures": [
            {
              "fixtureId": 1584391,
              "kickoff": "2026-08-29T03:30:00+09:00",
              "status": "NS",
              "homeTeamId": 997,
              "homeTeam": "Gençlerbirliği S.K.",
              "awayTeamId": 1009,
              "awayTeam": "Erzurumspor FK",
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
              "points": 53,
              "goalsDiff": 28,
              "form": "WWWDD",
              "all": {
                "played": 25,
                "wins": 16,
                "draws": 5,
                "losses": 4,
                "goalsFor": 47,
                "goalsAgainst": 19
              },
              "home": {
                "played": 12,
                "wins": 7,
                "draws": 2,
                "losses": 3,
                "goalsFor": 21,
                "goalsAgainst": 10
              },
              "away": {
                "played": 13,
                "wins": 9,
                "draws": 3,
                "losses": 1,
                "goalsFor": 26,
                "goalsAgainst": 9
              }
            },
            {
              "teamId": 2762,
              "team": "Jeonbuk Motors",
              "rank": 2,
              "points": 38,
              "goalsDiff": 9,
              "form": "DWLLD",
              "all": {
                "played": 25,
                "wins": 10,
                "draws": 8,
                "losses": 7,
                "goalsFor": 31,
                "goalsAgainst": 22
              },
              "home": {
                "played": 12,
                "wins": 6,
                "draws": 2,
                "losses": 4,
                "goalsFor": 18,
                "goalsAgainst": 13
              },
              "away": {
                "played": 13,
                "wins": 4,
                "draws": 6,
                "losses": 3,
                "goalsFor": 13,
                "goalsAgainst": 9
              }
            },
            {
              "teamId": 2767,
              "team": "Ulsan Hyundai FC",
              "rank": 3,
              "points": 37,
              "goalsDiff": 3,
              "form": "LLWWW",
              "all": {
                "played": 24,
                "wins": 11,
                "draws": 4,
                "losses": 9,
                "goalsFor": 37,
                "goalsAgainst": 34
              },
              "home": {
                "played": 12,
                "wins": 5,
                "draws": 1,
                "losses": 6,
                "goalsFor": 20,
                "goalsAgainst": 21
              },
              "away": {
                "played": 12,
                "wins": 6,
                "draws": 3,
                "losses": 3,
                "goalsFor": 17,
                "goalsAgainst": 13
              }
            },
            {
              "teamId": 2746,
              "team": "Gangwon FC",
              "rank": 4,
              "points": 35,
              "goalsDiff": 6,
              "form": "LWLLD",
              "all": {
                "played": 23,
                "wins": 9,
                "draws": 8,
                "losses": 6,
                "goalsFor": 28,
                "goalsAgainst": 22
              },
              "home": {
                "played": 10,
                "wins": 4,
                "draws": 4,
                "losses": 2,
                "goalsFor": 14,
                "goalsAgainst": 9
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
              "teamId": 2761,
              "team": "Jeju United FC",
              "rank": 5,
              "points": 35,
              "goalsDiff": 2,
              "form": "LDWWD",
              "all": {
                "played": 25,
                "wins": 9,
                "draws": 8,
                "losses": 8,
                "goalsFor": 28,
                "goalsAgainst": 26
              },
              "home": {
                "played": 15,
                "wins": 4,
                "draws": 6,
                "losses": 5,
                "goalsFor": 15,
                "goalsAgainst": 17
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
              "rank": 6,
              "points": 34,
              "goalsDiff": -5,
              "form": "WLWLL",
              "all": {
                "played": 25,
                "wins": 10,
                "draws": 4,
                "losses": 11,
                "goalsFor": 24,
                "goalsAgainst": 29
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
                "played": 14,
                "wins": 7,
                "draws": 2,
                "losses": 5,
                "goalsFor": 20,
                "goalsAgainst": 19
              }
            },
            {
              "teamId": 2763,
              "team": "Incheon United",
              "rank": 7,
              "points": 33,
              "goalsDiff": 5,
              "form": "WDDDW",
              "all": {
                "played": 23,
                "wins": 9,
                "draws": 6,
                "losses": 8,
                "goalsFor": 30,
                "goalsAgainst": 25
              },
              "home": {
                "played": 12,
                "wins": 4,
                "draws": 2,
                "losses": 6,
                "goalsFor": 13,
                "goalsAgainst": 13
              },
              "away": {
                "played": 11,
                "wins": 5,
                "draws": 4,
                "losses": 2,
                "goalsFor": 17,
                "goalsAgainst": 12
              }
            },
            {
              "teamId": 2748,
              "team": "FC Anyang",
              "rank": 8,
              "points": 30,
              "goalsDiff": -7,
              "form": "LLLLW",
              "all": {
                "played": 24,
                "wins": 7,
                "draws": 9,
                "losses": 8,
                "goalsFor": 30,
                "goalsAgainst": 37
              },
              "home": {
                "played": 12,
                "wins": 2,
                "draws": 5,
                "losses": 5,
                "goalsFor": 13,
                "goalsAgainst": 22
              },
              "away": {
                "played": 12,
                "wins": 5,
                "draws": 4,
                "losses": 3,
                "goalsFor": 17,
                "goalsAgainst": 15
              }
            },
            {
              "teamId": 2745,
              "team": "Bucheon FC 1995",
              "rank": 9,
              "points": 30,
              "goalsDiff": -1,
              "form": "LWWDW",
              "all": {
                "played": 25,
                "wins": 7,
                "draws": 9,
                "losses": 9,
                "goalsFor": 27,
                "goalsAgainst": 28
              },
              "home": {
                "played": 13,
                "wins": 3,
                "draws": 5,
                "losses": 5,
                "goalsFor": 15,
                "goalsAgainst": 16
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
              "teamId": 2750,
              "team": "Daejeon Citizen",
              "rank": 10,
              "points": 29,
              "goalsDiff": 4,
              "form": "WLWWL",
              "all": {
                "played": 24,
                "wins": 7,
                "draws": 8,
                "losses": 9,
                "goalsFor": 32,
                "goalsAgainst": 28
              },
              "home": {
                "played": 12,
                "wins": 2,
                "draws": 5,
                "losses": 5,
                "goalsFor": 12,
                "goalsAgainst": 14
              },
              "away": {
                "played": 12,
                "wins": 5,
                "draws": 3,
                "losses": 4,
                "goalsFor": 20,
                "goalsAgainst": 14
              }
            },
            {
              "teamId": 2768,
              "team": "Gimcheon Sangmu FC",
              "rank": 11,
              "points": 27,
              "goalsDiff": -6,
              "form": "DDDDW",
              "all": {
                "played": 25,
                "wins": 4,
                "draws": 15,
                "losses": 6,
                "goalsFor": 23,
                "goalsAgainst": 29
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
                "played": 13,
                "wins": 3,
                "draws": 7,
                "losses": 3,
                "goalsFor": 13,
                "goalsAgainst": 13
              }
            },
            {
              "teamId": 2759,
              "team": "Gwangju FC",
              "rank": 12,
              "points": 11,
              "goalsDiff": -38,
              "form": "LLDLL",
              "all": {
                "played": 24,
                "wins": 1,
                "draws": 8,
                "losses": 15,
                "goalsFor": 12,
                "goalsAgainst": 50
              },
              "home": {
                "played": 13,
                "wins": 1,
                "draws": 4,
                "losses": 8,
                "goalsFor": 9,
                "goalsAgainst": 24
              },
              "away": {
                "played": 11,
                "wins": 0,
                "draws": 4,
                "losses": 7,
                "goalsFor": 3,
                "goalsAgainst": 26
              }
            }
          ],
          "teams": [
            {
              "teamId": 2745,
              "team": "Bucheon FC 1995",
              "form": "WDLDDLWDLLWLLDWDDLLDWDWWL",
              "all": {
                "played": 25,
                "wins": 7,
                "draws": 9,
                "losses": 9,
                "goalsFor": 27,
                "goalsAgainst": 28
              },
              "home": {
                "played": 13,
                "wins": 3,
                "draws": 5,
                "losses": 5,
                "goalsFor": 15,
                "goalsAgainst": 16
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
              "teamId": 2748,
              "team": "FC Anyang",
              "form": "DWDLLDDWDWLDDDWLWDWWLLLL",
              "all": {
                "played": 24,
                "wins": 7,
                "draws": 9,
                "losses": 8,
                "goalsFor": 30,
                "goalsAgainst": 37
              },
              "home": {
                "played": 12,
                "wins": 2,
                "draws": 5,
                "losses": 5,
                "goalsFor": 13,
                "goalsAgainst": 22
              },
              "away": {
                "played": 12,
                "wins": 5,
                "draws": 4,
                "losses": 3,
                "goalsFor": 17,
                "goalsAgainst": 15
              }
            },
            {
              "teamId": 2767,
              "team": "Ulsan Hyundai FC",
              "form": "WWWDLWLWDLLWWWLDLDLWWWLL",
              "all": {
                "played": 24,
                "wins": 11,
                "draws": 4,
                "losses": 9,
                "goalsFor": 37,
                "goalsAgainst": 34
              },
              "home": {
                "played": 12,
                "wins": 5,
                "draws": 1,
                "losses": 6,
                "goalsFor": 20,
                "goalsAgainst": 21
              },
              "away": {
                "played": 12,
                "wins": 6,
                "draws": 3,
                "losses": 3,
                "goalsFor": 17,
                "goalsAgainst": 13
              }
            },
            {
              "teamId": 2768,
              "team": "Gimcheon Sangmu FC",
              "form": "DDDDDLDDLWWLLDLDDLDWWDDDD",
              "all": {
                "played": 25,
                "wins": 4,
                "draws": 15,
                "losses": 6,
                "goalsFor": 23,
                "goalsAgainst": 29
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
                "played": 13,
                "wins": 3,
                "draws": 7,
                "losses": 3,
                "goalsFor": 13,
                "goalsAgainst": 13
              }
            }
          ],
          "fixtures": [
            {
              "fixtureId": 1507046,
              "kickoff": "2026-08-29T19:30:00+09:00",
              "status": "NS",
              "homeTeamId": 2745,
              "homeTeam": "Bucheon FC 1995",
              "awayTeamId": 2748,
              "awayTeam": "FC Anyang",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1507047,
              "kickoff": "2026-08-29T19:30:00+09:00",
              "status": "NS",
              "homeTeamId": 2767,
              "homeTeam": "Ulsan Hyundai FC",
              "awayTeamId": 2768,
              "awayTeam": "Gimcheon Sangmu FC",
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
              "points": 44,
              "goalsDiff": 13,
              "form": "WDWDW",
              "all": {
                "played": 22,
                "wins": 13,
                "draws": 5,
                "losses": 4,
                "goalsFor": 32,
                "goalsAgainst": 19
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
                "played": 11,
                "wins": 7,
                "draws": 1,
                "losses": 3,
                "goalsFor": 18,
                "goalsAgainst": 11
              }
            },
            {
              "teamId": 2749,
              "team": "Seoul E-Land FC",
              "rank": 2,
              "points": 41,
              "goalsDiff": 13,
              "form": "DWDWW",
              "all": {
                "played": 22,
                "wins": 12,
                "draws": 5,
                "losses": 5,
                "goalsFor": 40,
                "goalsAgainst": 27
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
                "played": 11,
                "wins": 6,
                "draws": 3,
                "losses": 2,
                "goalsFor": 17,
                "goalsAgainst": 11
              }
            },
            {
              "teamId": 2756,
              "team": "Suwon City FC",
              "rank": 3,
              "points": 40,
              "goalsDiff": 17,
              "form": "WDWWD",
              "all": {
                "played": 21,
                "wins": 11,
                "draws": 7,
                "losses": 3,
                "goalsFor": 43,
                "goalsAgainst": 26
              },
              "home": {
                "played": 9,
                "wins": 5,
                "draws": 4,
                "losses": 0,
                "goalsFor": 20,
                "goalsAgainst": 8
              },
              "away": {
                "played": 12,
                "wins": 6,
                "draws": 3,
                "losses": 3,
                "goalsFor": 23,
                "goalsAgainst": 18
              }
            },
            {
              "teamId": 2747,
              "team": "Daegu FC",
              "rank": 4,
              "points": 39,
              "goalsDiff": 11,
              "form": "DWWLL",
              "all": {
                "played": 22,
                "wins": 11,
                "draws": 6,
                "losses": 5,
                "goalsFor": 42,
                "goalsAgainst": 31
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
                "played": 10,
                "wins": 4,
                "draws": 4,
                "losses": 2,
                "goalsFor": 19,
                "goalsAgainst": 16
              }
            },
            {
              "teamId": 2752,
              "team": "Busan I Park",
              "rank": 5,
              "points": 38,
              "goalsDiff": 8,
              "form": "DDLLL",
              "all": {
                "played": 22,
                "wins": 11,
                "draws": 5,
                "losses": 6,
                "goalsFor": 38,
                "goalsAgainst": 30
              },
              "home": {
                "played": 11,
                "wins": 6,
                "draws": 3,
                "losses": 2,
                "goalsFor": 19,
                "goalsAgainst": 12
              },
              "away": {
                "played": 11,
                "wins": 5,
                "draws": 2,
                "losses": 4,
                "goalsFor": 19,
                "goalsAgainst": 18
              }
            },
            {
              "teamId": 7087,
              "team": "Hwaseong",
              "rank": 6,
              "points": 36,
              "goalsDiff": 11,
              "form": "LDDWW",
              "all": {
                "played": 22,
                "wins": 10,
                "draws": 6,
                "losses": 6,
                "goalsFor": 34,
                "goalsAgainst": 23
              },
              "home": {
                "played": 15,
                "wins": 7,
                "draws": 5,
                "losses": 3,
                "goalsFor": 26,
                "goalsAgainst": 17
              },
              "away": {
                "played": 7,
                "wins": 3,
                "draws": 1,
                "losses": 3,
                "goalsFor": 8,
                "goalsAgainst": 6
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
              "goalsDiff": 4,
              "form": "DWDDD",
              "all": {
                "played": 21,
                "wins": 7,
                "draws": 10,
                "losses": 4,
                "goalsFor": 26,
                "goalsAgainst": 22
              },
              "home": {
                "played": 7,
                "wins": 1,
                "draws": 5,
                "losses": 1,
                "goalsFor": 9,
                "goalsAgainst": 8
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
              "points": 27,
              "goalsDiff": -1,
              "form": "DDLDD",
              "all": {
                "played": 22,
                "wins": 6,
                "draws": 9,
                "losses": 7,
                "goalsFor": 29,
                "goalsAgainst": 30
              },
              "home": {
                "played": 11,
                "wins": 5,
                "draws": 2,
                "losses": 4,
                "goalsFor": 19,
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
              "points": 26,
              "goalsDiff": -2,
              "form": "WLWLW",
              "all": {
                "played": 21,
                "wins": 6,
                "draws": 8,
                "losses": 7,
                "goalsFor": 23,
                "goalsAgainst": 25
              },
              "home": {
                "played": 10,
                "wins": 3,
                "draws": 5,
                "losses": 2,
                "goalsFor": 10,
                "goalsAgainst": 9
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
              "teamId": 7098,
              "team": "Paju Citizen",
              "rank": 11,
              "points": 25,
              "goalsDiff": -5,
              "form": "DWLWL",
              "all": {
                "played": 22,
                "wins": 7,
                "draws": 4,
                "losses": 11,
                "goalsFor": 22,
                "goalsAgainst": 27
              },
              "home": {
                "played": 11,
                "wins": 3,
                "draws": 1,
                "losses": 7,
                "goalsFor": 10,
                "goalsAgainst": 13
              },
              "away": {
                "played": 11,
                "wins": 4,
                "draws": 3,
                "losses": 4,
                "goalsFor": 12,
                "goalsAgainst": 14
              }
            },
            {
              "teamId": 7061,
              "team": "Cheongju",
              "rank": 12,
              "points": 23,
              "goalsDiff": -9,
              "form": "DWLDD",
              "all": {
                "played": 22,
                "wins": 3,
                "draws": 14,
                "losses": 5,
                "goalsFor": 26,
                "goalsAgainst": 35
              },
              "home": {
                "played": 12,
                "wins": 2,
                "draws": 6,
                "losses": 4,
                "goalsFor": 14,
                "goalsAgainst": 21
              },
              "away": {
                "played": 10,
                "wins": 1,
                "draws": 8,
                "losses": 1,
                "goalsFor": 12,
                "goalsAgainst": 14
              }
            },
            {
              "teamId": 9171,
              "team": "Yongin City",
              "rank": 13,
              "points": 22,
              "goalsDiff": -5,
              "form": "LWDDL",
              "all": {
                "played": 21,
                "wins": 4,
                "draws": 10,
                "losses": 7,
                "goalsFor": 26,
                "goalsAgainst": 31
              },
              "home": {
                "played": 11,
                "wins": 2,
                "draws": 5,
                "losses": 4,
                "goalsFor": 14,
                "goalsAgainst": 16
              },
              "away": {
                "played": 10,
                "wins": 2,
                "draws": 5,
                "losses": 3,
                "goalsFor": 12,
                "goalsAgainst": 15
              }
            },
            {
              "teamId": 7060,
              "team": "Cheonan City",
              "rank": 14,
              "points": 21,
              "goalsDiff": -4,
              "form": "LDLDL",
              "all": {
                "played": 22,
                "wins": 4,
                "draws": 9,
                "losses": 9,
                "goalsFor": 27,
                "goalsAgainst": 31
              },
              "home": {
                "played": 11,
                "wins": 2,
                "draws": 6,
                "losses": 3,
                "goalsFor": 9,
                "goalsAgainst": 10
              },
              "away": {
                "played": 11,
                "wins": 2,
                "draws": 3,
                "losses": 6,
                "goalsFor": 18,
                "goalsAgainst": 21
              }
            },
            {
              "teamId": 2758,
              "team": "Ansan Greeners",
              "rank": 15,
              "points": 19,
              "goalsDiff": -19,
              "form": "LLDDW",
              "all": {
                "played": 22,
                "wins": 5,
                "draws": 4,
                "losses": 13,
                "goalsFor": 23,
                "goalsAgainst": 42
              },
              "home": {
                "played": 13,
                "wins": 2,
                "draws": 2,
                "losses": 9,
                "goalsFor": 14,
                "goalsAgainst": 26
              },
              "away": {
                "played": 9,
                "wins": 3,
                "draws": 2,
                "losses": 4,
                "goalsFor": 9,
                "goalsAgainst": 16
              }
            },
            {
              "teamId": 2760,
              "team": "Jeonnam Dragons",
              "rank": 16,
              "points": 16,
              "goalsDiff": -13,
              "form": "WLLDW",
              "all": {
                "played": 21,
                "wins": 3,
                "draws": 7,
                "losses": 11,
                "goalsFor": 23,
                "goalsAgainst": 36
              },
              "home": {
                "played": 8,
                "wins": 2,
                "draws": 3,
                "losses": 3,
                "goalsFor": 9,
                "goalsAgainst": 10
              },
              "away": {
                "played": 13,
                "wins": 1,
                "draws": 4,
                "losses": 8,
                "goalsFor": 14,
                "goalsAgainst": 26
              }
            },
            {
              "teamId": 7076,
              "team": "Gimhae City",
              "rank": 17,
              "points": 12,
              "goalsDiff": -23,
              "form": "LDLDD",
              "all": {
                "played": 21,
                "wins": 2,
                "draws": 6,
                "losses": 13,
                "goalsFor": 17,
                "goalsAgainst": 40
              },
              "home": {
                "played": 9,
                "wins": 0,
                "draws": 2,
                "losses": 7,
                "goalsFor": 7,
                "goalsAgainst": 21
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
              "teamId": 2751,
              "team": "Gyeongnam FC",
              "form": "LLDWDLLWLWDWLDWDWDDLDD",
              "all": {
                "played": 22,
                "wins": 6,
                "draws": 9,
                "losses": 7,
                "goalsFor": 29,
                "goalsAgainst": 30
              },
              "home": {
                "played": 11,
                "wins": 5,
                "draws": 2,
                "losses": 4,
                "goalsFor": 19,
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
              "teamId": 7098,
              "team": "Paju Citizen",
              "form": "LLWWLWLWLDDLLLLWDLWLWD",
              "all": {
                "played": 22,
                "wins": 7,
                "draws": 4,
                "losses": 11,
                "goalsFor": 22,
                "goalsAgainst": 27
              },
              "home": {
                "played": 11,
                "wins": 3,
                "draws": 1,
                "losses": 7,
                "goalsFor": 10,
                "goalsAgainst": 13
              },
              "away": {
                "played": 11,
                "wins": 4,
                "draws": 3,
                "losses": 4,
                "goalsFor": 12,
                "goalsAgainst": 14
              }
            },
            {
              "teamId": 2757,
              "team": "Seongnam FC",
              "form": "DDWDWLLDWDDLDDLLWLWLW",
              "all": {
                "played": 21,
                "wins": 6,
                "draws": 8,
                "losses": 7,
                "goalsFor": 23,
                "goalsAgainst": 25
              },
              "home": {
                "played": 10,
                "wins": 3,
                "draws": 5,
                "losses": 2,
                "goalsFor": 10,
                "goalsAgainst": 9
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
              "teamId": 2749,
              "team": "Seoul E-Land FC",
              "form": "LWLDWWWWLWLDWWLWDWWDWD",
              "all": {
                "played": 22,
                "wins": 12,
                "draws": 5,
                "losses": 5,
                "goalsFor": 40,
                "goalsAgainst": 27
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
                "played": 11,
                "wins": 6,
                "draws": 3,
                "losses": 2,
                "goalsFor": 17,
                "goalsAgainst": 11
              }
            },
            {
              "teamId": 7078,
              "team": "Gimpo Citizen",
              "form": "WWLDDWDDLDWWWDLLDDDWD",
              "all": {
                "played": 21,
                "wins": 7,
                "draws": 10,
                "losses": 4,
                "goalsFor": 26,
                "goalsAgainst": 22
              },
              "home": {
                "played": 7,
                "wins": 1,
                "draws": 5,
                "losses": 1,
                "goalsFor": 9,
                "goalsAgainst": 8
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
              "teamId": 2765,
              "team": "Suwon Bluewings",
              "form": "WWWWWDLWWLDWLWWLDWDWDW",
              "all": {
                "played": 22,
                "wins": 13,
                "draws": 5,
                "losses": 4,
                "goalsFor": 32,
                "goalsAgainst": 19
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
                "played": 11,
                "wins": 7,
                "draws": 1,
                "losses": 3,
                "goalsFor": 18,
                "goalsAgainst": 11
              }
            },
            {
              "teamId": 7087,
              "team": "Hwaseong",
              "form": "LWDDLLWDWWDWWWLLWWWDDL",
              "all": {
                "played": 22,
                "wins": 10,
                "draws": 6,
                "losses": 6,
                "goalsFor": 34,
                "goalsAgainst": 23
              },
              "home": {
                "played": 15,
                "wins": 7,
                "draws": 5,
                "losses": 3,
                "goalsFor": 26,
                "goalsAgainst": 17
              },
              "away": {
                "played": 7,
                "wins": 3,
                "draws": 1,
                "losses": 3,
                "goalsFor": 8,
                "goalsAgainst": 6
              }
            },
            {
              "teamId": 7061,
              "team": "Cheongju",
              "form": "LDDDLDDDDDDDLWLDWDDLWD",
              "all": {
                "played": 22,
                "wins": 3,
                "draws": 14,
                "losses": 5,
                "goalsFor": 26,
                "goalsAgainst": 35
              },
              "home": {
                "played": 12,
                "wins": 2,
                "draws": 6,
                "losses": 4,
                "goalsFor": 14,
                "goalsAgainst": 21
              },
              "away": {
                "played": 10,
                "wins": 1,
                "draws": 8,
                "losses": 1,
                "goalsFor": 12,
                "goalsAgainst": 14
              }
            }
          ],
          "fixtures": [
            {
              "fixtureId": 1510430,
              "kickoff": "2026-08-29T19:30:00+09:00",
              "status": "NS",
              "homeTeamId": 2751,
              "homeTeam": "Gyeongnam FC",
              "awayTeamId": 7098,
              "awayTeam": "Paju Citizen",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1510432,
              "kickoff": "2026-08-29T19:30:00+09:00",
              "status": "NS",
              "homeTeamId": 2757,
              "homeTeam": "Seongnam FC",
              "awayTeamId": 2749,
              "awayTeam": "Seoul E-Land FC",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1510429,
              "kickoff": "2026-08-29T19:30:00+09:00",
              "status": "NS",
              "homeTeamId": 7078,
              "homeTeam": "Gimpo Citizen",
              "awayTeamId": 2765,
              "awayTeam": "Suwon Bluewings",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1510431,
              "kickoff": "2026-08-29T19:30:00+09:00",
              "status": "NS",
              "homeTeamId": 7087,
              "homeTeam": "Hwaseong",
              "awayTeamId": 7061,
              "awayTeam": "Cheongju",
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
