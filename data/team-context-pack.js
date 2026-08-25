(function attachTeamContextPack(root, factory) {
  const pack = factory();
  if (typeof module !== "undefined" && module.exports) module.exports = pack;
  if (root) root.ODDS_ARCHIVE_TEAM_CONTEXT_PACK = pack;
})(typeof window !== "undefined" ? window : globalThis, function createTeamContextPack() {
  return {
  "version": "team-context-v3",
  "date": "2026-08-26",
  "updatedAt": "2026-08-25T18:52:37.818Z",
  "collection": {
    "dates": [
      "2026-08-26"
    ],
    "requestGroups": 3,
    "skippedGroups": 23,
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
          "teamId": 542,
          "team": "Alaves",
          "rank": 2,
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
          "rank": 3,
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
          "rank": 4,
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
          "rank": 5,
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
          "teamId": 543,
          "team": "Real Betis",
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
          "teamId": 532,
          "team": "Valencia",
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
          "teamId": 727,
          "team": "Osasuna",
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
          "teamId": 538,
          "team": "Celta Vigo",
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
          "rank": 14,
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
          "rank": 15,
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
          "teamId": 543,
          "team": "Real Betis",
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
        }
      ],
      "fixtures": [
        {
          "fixtureId": 1570342,
          "kickoff": "2026-08-26T04:00:00+09:00",
          "status": "NS",
          "homeTeamId": 532,
          "homeTeam": "Valencia",
          "awayTeamId": 543,
          "awayTeam": "Real Betis",
          "injuriesChecked": true,
          "injuries": [],
          "lineupsChecked": true,
          "lineups": [
            {
              "teamId": 532,
              "team": "Valencia",
              "formation": "5-3-2",
              "coach": "Carlos Corberan",
              "starters": [
                "Stole Dimitrievski",
                "Jesús Vázquez",
                "César Tárrega",
                "Pepelu",
                "Mouctar Diakhaby",
                "Pablo Maffeo",
                "Ryunosuke Sato",
                "Guido Rodríguez",
                "Javier Guerra",
                "Hugo Duro",
                "Arnaut Danjuma"
              ]
            },
            {
              "teamId": 543,
              "team": "Real Betis",
              "formation": "4-2-3-1",
              "coach": "Manuel Pellegrini",
              "starters": [
                "Álvaro Valles",
                "Angel Ortiz",
                "Diego Llorente",
                "Valentín Gómez",
                "Junior Firpo",
                "Facundo Bernal",
                "Nelson Deossa",
                "Antony",
                "Pablo Fornals",
                "Rodrigo Riquelme",
                "Cucho Hernández"
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
          "teamId": 13976,
          "team": "Sabah FA",
          "form": "WWWWLWL",
          "all": {
            "played": 7,
            "wins": 5,
            "draws": 0,
            "losses": 2,
            "goalsFor": 13,
            "goalsAgainst": 5
          },
          "home": {
            "played": 3,
            "wins": 3,
            "draws": 0,
            "losses": 0,
            "goalsFor": 7,
            "goalsAgainst": 0
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
          "form": "LWWWW",
          "all": {
            "played": 5,
            "wins": 4,
            "draws": 0,
            "losses": 1,
            "goalsFor": 8,
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
            "played": 2,
            "wins": 1,
            "draws": 0,
            "losses": 1,
            "goalsFor": 3,
            "goalsAgainst": 2
          }
        },
        {
          "teamId": 327,
          "team": "Bodo/Glimt",
          "form": "DWW",
          "all": {
            "played": 3,
            "wins": 2,
            "draws": 1,
            "losses": 0,
            "goalsFor": 9,
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
          "form": "DWL",
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
            "goalsFor": 3,
            "goalsAgainst": 4
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
          "teamId": 247,
          "team": "Celtic",
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
        }
      ],
      "fixtures": [
        {
          "fixtureId": 1622626,
          "kickoff": "2026-08-26T01:45:00+09:00",
          "status": "ET",
          "homeTeamId": 13976,
          "homeTeam": "Sabah FA",
          "awayTeamId": 563,
          "awayTeam": "Hapoel Beer Sheva",
          "injuriesChecked": true,
          "injuries": [],
          "lineupsChecked": true,
          "lineups": [
            {
              "teamId": 13976,
              "team": "Sabah FA",
              "formation": "4-2-3-1",
              "coach": "Valdas Dambrauskas",
              "starters": [
                "Stas Pokatilov",
                "Akim Zedadka",
                "Steve Solvet",
                "Rahman Dashdamirov",
                "Tymoteusz Puchacz",
                "Umarali Rakhmonaliev",
                "Ivan Lepinjica",
                "Kaheem Parris",
                "Veljko Simić",
                "Christian Nwachukwu",
                "Joy Lance Mickels"
              ]
            },
            {
              "teamId": 563,
              "team": "Hapoel Beer Sheva",
              "formation": "4-3-3",
              "coach": "Ran Kozuch",
              "starters": [
                "Ofir Marciano",
                "Guy Mizrahi",
                "Miguel Vítor",
                "Itay Rotman",
                "Pedro Amador",
                "Niv Yehoshua",
                "Lucas Ventura",
                "Eliel Peretz",
                "Javon East",
                "Igor Zlatanović",
                "Zahi Ahmed"
              ]
            }
          ]
        },
        {
          "fixtureId": 1622627,
          "kickoff": "2026-08-26T04:00:00+09:00",
          "status": "NS",
          "homeTeamId": 327,
          "homeTeam": "Bodo/Glimt",
          "awayTeamId": 413,
          "awayTeam": "NEC Nijmegen",
          "injuriesChecked": true,
          "injuries": [],
          "lineupsChecked": true,
          "lineups": [
            {
              "teamId": 327,
              "team": "Bodo/Glimt",
              "formation": "4-3-3",
              "coach": "Kjetil Knutsen",
              "starters": [
                "Nikita Haikin",
                "Fredrik Sjøvold",
                "Villads Nielsen",
                "Odin Luras Bjørtuft",
                "Fredrik André Bjørkan",
                "Sondre Auklend",
                "Patrick Berg",
                "Sondre Fet",
                "Ole Didrik Blomberg",
                "Andreas Helmersen",
                "Jens Petter Hauge"
              ]
            },
            {
              "teamId": 413,
              "team": "NEC Nijmegen",
              "formation": "3-4-2-1",
              "coach": "Dick Schreuder",
              "starters": [
                "Gonzalo Crettaz",
                "Brayann Pereira",
                "Tobias Storm",
                "Deveron Fonville",
                "Tjaronn Chery",
                "Darko Nejašmić",
                "Noé Lebreton",
                "Clement Bischoff",
                "Bryan Linssen",
                "Dušan Tadić",
                "Kaj Sierhuis"
              ]
            }
          ]
        },
        {
          "fixtureId": 1610924,
          "kickoff": "2026-08-26T04:00:00+09:00",
          "status": "NS",
          "homeTeamId": 1026,
          "homeTeam": "Lask Linz",
          "awayTeamId": 247,
          "awayTeam": "Celtic",
          "injuriesChecked": true,
          "injuries": [],
          "lineupsChecked": true,
          "lineups": [
            {
              "teamId": 1026,
              "team": "Lask Linz",
              "formation": "3-5-2",
              "coach": "Dietmar Kuhbauer",
              "starters": [
                "Lukas Jungwirth",
                "Xavier Mbuyamba",
                "Alemão",
                "Andrés Andrade",
                "Kasper Jørgensen",
                "Robert Ljubičić",
                "Melayro Bogarde",
                "Sascha Horvath",
                "George Bello",
                "Moses Usor",
                "Samuel Adeniran"
              ]
            },
            {
              "teamId": 247,
              "team": "Celtic",
              "formation": "4-2-3-1",
              "coach": "Martin O'Neill",
              "starters": [
                "Viljami Sinisalo",
                "Colby Donovan",
                "Cameron Carter-Vickers",
                "Auston Trusty",
                "Kieran Tierney",
                "Callum McGregor",
                "Mika Baur",
                "Camilo Durán",
                "Benjamin Nygren",
                "Yang Hyun-Jun",
                "Kasper Høgh"
              ]
            }
          ]
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
          "lineupsChecked": false,
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
          "lineupsChecked": false,
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
          "lineupsChecked": false,
          "lineups": []
        }
      ]
    }
  ],
  "dates": [
    {
      "date": "2026-08-25",
      "updatedAt": "2026-08-25T08:56:50.172Z",
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
              "teamId": 36,
              "team": "Fulham",
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
              "teamId": 49,
              "team": "Chelsea",
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
            }
          ],
          "fixtures": [
            {
              "fixtureId": 1557376,
              "kickoff": "2026-08-25T04:00:00+09:00",
              "status": "FT",
              "homeTeamId": 36,
              "homeTeam": "Fulham",
              "awayTeamId": 49,
              "awayTeam": "Chelsea",
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
              "teamId": 542,
              "team": "Alaves",
              "rank": 2,
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
              "rank": 3,
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
              "rank": 4,
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
              "rank": 5,
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
              "teamId": 543,
              "team": "Real Betis",
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
              "teamId": 532,
              "team": "Valencia",
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
              "teamId": 727,
              "team": "Osasuna",
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
              "teamId": 538,
              "team": "Celta Vigo",
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
              "rank": 14,
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
              "rank": 15,
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
              "teamId": 539,
              "team": "Levante",
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
              "teamId": 535,
              "team": "Malaga",
              "form": "LD",
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
              "teamId": 544,
              "team": "Deportivo La Coruna",
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
            }
          ],
          "fixtures": [
            {
              "fixtureId": 1570350,
              "kickoff": "2026-08-25T02:30:00+09:00",
              "status": "FT",
              "homeTeamId": 727,
              "homeTeam": "Osasuna",
              "awayTeamId": 539,
              "awayTeam": "Levante",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1570349,
              "kickoff": "2026-08-25T04:30:00+09:00",
              "status": "FT",
              "homeTeamId": 535,
              "homeTeam": "Malaga",
              "awayTeamId": 544,
              "awayTeam": "Deportivo La Coruna",
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
              "teamId": 500,
              "team": "Bologna",
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
              "teamId": 487,
              "team": "Lazio",
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
              "teamId": 497,
              "team": "AS Roma",
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
              "teamId": 502,
              "team": "Fiorentina",
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
          "fixtures": [
            {
              "fixtureId": 1550089,
              "kickoff": "2026-08-25T01:30:00+09:00",
              "status": "FT",
              "homeTeamId": 500,
              "homeTeam": "Bologna",
              "awayTeamId": 487,
              "awayTeam": "Lazio",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1550087,
              "kickoff": "2026-08-25T03:45:00+09:00",
              "status": "FT",
              "homeTeamId": 497,
              "homeTeam": "AS Roma",
              "awayTeamId": 502,
              "awayTeam": "Fiorentina",
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
              "teamId": 762,
              "team": "GIL Vicente",
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
              "teamId": 4716,
              "team": "Casa Pia",
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
          "fixtures": [
            {
              "fixtureId": 1575467,
              "kickoff": "2026-08-25T04:15:00+09:00",
              "status": "FT",
              "homeTeamId": 762,
              "homeTeam": "GIL Vicente",
              "awayTeamId": 4716,
              "awayTeam": "Casa Pia",
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
              "teamId": 7411,
              "team": "Kocaelispor",
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
              "teamId": 3579,
              "team": "Amed",
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
            }
          ],
          "fixtures": [
            {
              "fixtureId": 1584382,
              "kickoff": "2026-08-25T03:30:00+09:00",
              "status": "FT",
              "homeTeamId": 7411,
              "homeTeam": "Kocaelispor",
              "awayTeamId": 3579,
              "awayTeam": "Amed",
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
              "points": 50,
              "goalsDiff": 27,
              "form": "WWDDL",
              "all": {
                "played": 24,
                "wins": 15,
                "draws": 5,
                "losses": 4,
                "goalsFor": 46,
                "goalsAgainst": 19
              },
              "home": {
                "played": 11,
                "wins": 6,
                "draws": 2,
                "losses": 3,
                "goalsFor": 20,
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
              "teamId": 2767,
              "team": "Ulsan Hyundai FC",
              "rank": 2,
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
              "teamId": 2762,
              "team": "Jeonbuk Motors",
              "rank": 3,
              "points": 37,
              "goalsDiff": 9,
              "form": "WLLDW",
              "all": {
                "played": 24,
                "wins": 10,
                "draws": 7,
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
                "played": 12,
                "wins": 4,
                "draws": 5,
                "losses": 3,
                "goalsFor": 13,
                "goalsAgainst": 9
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
              "goalsDiff": 3,
              "form": "DWWDW",
              "all": {
                "played": 24,
                "wins": 9,
                "draws": 8,
                "losses": 7,
                "goalsFor": 27,
                "goalsAgainst": 24
              },
              "home": {
                "played": 14,
                "wins": 4,
                "draws": 6,
                "losses": 4,
                "goalsFor": 14,
                "goalsAgainst": 15
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
              "teamId": 2763,
              "team": "Incheon United",
              "rank": 6,
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
              "teamId": 2764,
              "team": "Pohang Steelers",
              "rank": 7,
              "points": 31,
              "goalsDiff": -6,
              "form": "LWLLL",
              "all": {
                "played": 24,
                "wins": 9,
                "draws": 4,
                "losses": 11,
                "goalsFor": 22,
                "goalsAgainst": 28
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
                "played": 13,
                "wins": 6,
                "draws": 2,
                "losses": 5,
                "goalsFor": 18,
                "goalsAgainst": 18
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
              "goalsDiff": 0,
              "form": "WWDWD",
              "all": {
                "played": 24,
                "wins": 7,
                "draws": 9,
                "losses": 8,
                "goalsFor": 27,
                "goalsAgainst": 27
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
                "played": 11,
                "wins": 4,
                "draws": 4,
                "losses": 3,
                "goalsFor": 12,
                "goalsAgainst": 11
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
              "points": 26,
              "goalsDiff": -6,
              "form": "DDDWW",
              "all": {
                "played": 24,
                "wins": 4,
                "draws": 14,
                "losses": 6,
                "goalsFor": 23,
                "goalsAgainst": 29
              },
              "home": {
                "played": 11,
                "wins": 1,
                "draws": 7,
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
              "teamId": 2761,
              "team": "Jeju United FC",
              "form": "DLLLDWWDWLLWWLLDDWDWDWWD",
              "all": {
                "played": 24,
                "wins": 9,
                "draws": 8,
                "losses": 7,
                "goalsFor": 27,
                "goalsAgainst": 24
              },
              "home": {
                "played": 14,
                "wins": 4,
                "draws": 6,
                "losses": 4,
                "goalsFor": 14,
                "goalsAgainst": 15
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
              "form": "DDLDWWLLWLWDWWLWWLLLLLWL",
              "all": {
                "played": 24,
                "wins": 9,
                "draws": 4,
                "losses": 11,
                "goalsFor": 22,
                "goalsAgainst": 28
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
                "played": 13,
                "wins": 6,
                "draws": 2,
                "losses": 5,
                "goalsFor": 18,
                "goalsAgainst": 18
              }
            },
            {
              "teamId": 2766,
              "team": "FC Seoul",
              "form": "WWWWDWWLWWLDLWWWDWWLDDWW",
              "all": {
                "played": 24,
                "wins": 15,
                "draws": 5,
                "losses": 4,
                "goalsFor": 46,
                "goalsAgainst": 19
              },
              "home": {
                "played": 11,
                "wins": 6,
                "draws": 2,
                "losses": 3,
                "goalsFor": 20,
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
              "teamId": 2745,
              "team": "Bucheon FC 1995",
              "form": "WDLDDLWDLLWLLDWDDLLDWDWW",
              "all": {
                "played": 24,
                "wins": 7,
                "draws": 9,
                "losses": 8,
                "goalsFor": 27,
                "goalsAgainst": 27
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
                "played": 11,
                "wins": 4,
                "draws": 4,
                "losses": 3,
                "goalsFor": 12,
                "goalsAgainst": 11
              }
            },
            {
              "teamId": 2768,
              "team": "Gimcheon Sangmu FC",
              "form": "DDDDDLDDLWWLLDLDDLDWWDDD",
              "all": {
                "played": 24,
                "wins": 4,
                "draws": 14,
                "losses": 6,
                "goalsFor": 23,
                "goalsAgainst": 29
              },
              "home": {
                "played": 11,
                "wins": 1,
                "draws": 7,
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
              "teamId": 2762,
              "team": "Jeonbuk Motors",
              "form": "LDDWWWLDLWWWDDWLWLDWDLLW",
              "all": {
                "played": 24,
                "wins": 10,
                "draws": 7,
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
                "played": 12,
                "wins": 4,
                "draws": 5,
                "losses": 3,
                "goalsFor": 13,
                "goalsAgainst": 9
              }
            }
          ],
          "fixtures": [
            {
              "fixtureId": 1507041,
              "kickoff": "2026-08-25T19:30:00+09:00",
              "status": "NS",
              "homeTeamId": 2761,
              "homeTeam": "Jeju United FC",
              "awayTeamId": 2764,
              "awayTeam": "Pohang Steelers",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": true,
              "lineups": []
            },
            {
              "fixtureId": 1507042,
              "kickoff": "2026-08-25T19:30:00+09:00",
              "status": "NS",
              "homeTeamId": 2766,
              "homeTeam": "FC Seoul",
              "awayTeamId": 2745,
              "awayTeam": "Bucheon FC 1995",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": true,
              "lineups": []
            },
            {
              "fixtureId": 1507040,
              "kickoff": "2026-08-25T19:30:00+09:00",
              "status": "NS",
              "homeTeamId": 2768,
              "homeTeam": "Gimcheon Sangmu FC",
              "awayTeamId": 2762,
              "awayTeam": "Jeonbuk Motors",
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
      "date": "2026-08-26",
      "updatedAt": "2026-08-25T18:52:37.807Z",
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
              "teamId": 542,
              "team": "Alaves",
              "rank": 2,
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
              "rank": 3,
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
              "rank": 4,
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
              "rank": 5,
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
              "teamId": 543,
              "team": "Real Betis",
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
              "teamId": 532,
              "team": "Valencia",
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
              "teamId": 727,
              "team": "Osasuna",
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
              "teamId": 538,
              "team": "Celta Vigo",
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
              "rank": 14,
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
              "rank": 15,
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
              "teamId": 543,
              "team": "Real Betis",
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
            }
          ],
          "fixtures": [
            {
              "fixtureId": 1570342,
              "kickoff": "2026-08-26T04:00:00+09:00",
              "status": "NS",
              "homeTeamId": 532,
              "homeTeam": "Valencia",
              "awayTeamId": 543,
              "awayTeam": "Real Betis",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": true,
              "lineups": [
                {
                  "teamId": 532,
                  "team": "Valencia",
                  "formation": "5-3-2",
                  "coach": "Carlos Corberan",
                  "starters": [
                    "Stole Dimitrievski",
                    "Jesús Vázquez",
                    "César Tárrega",
                    "Pepelu",
                    "Mouctar Diakhaby",
                    "Pablo Maffeo",
                    "Ryunosuke Sato",
                    "Guido Rodríguez",
                    "Javier Guerra",
                    "Hugo Duro",
                    "Arnaut Danjuma"
                  ]
                },
                {
                  "teamId": 543,
                  "team": "Real Betis",
                  "formation": "4-2-3-1",
                  "coach": "Manuel Pellegrini",
                  "starters": [
                    "Álvaro Valles",
                    "Angel Ortiz",
                    "Diego Llorente",
                    "Valentín Gómez",
                    "Junior Firpo",
                    "Facundo Bernal",
                    "Nelson Deossa",
                    "Antony",
                    "Pablo Fornals",
                    "Rodrigo Riquelme",
                    "Cucho Hernández"
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
              "teamId": 13976,
              "team": "Sabah FA",
              "form": "WWWWLWL",
              "all": {
                "played": 7,
                "wins": 5,
                "draws": 0,
                "losses": 2,
                "goalsFor": 13,
                "goalsAgainst": 5
              },
              "home": {
                "played": 3,
                "wins": 3,
                "draws": 0,
                "losses": 0,
                "goalsFor": 7,
                "goalsAgainst": 0
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
              "form": "LWWWW",
              "all": {
                "played": 5,
                "wins": 4,
                "draws": 0,
                "losses": 1,
                "goalsFor": 8,
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
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 327,
              "team": "Bodo/Glimt",
              "form": "DWW",
              "all": {
                "played": 3,
                "wins": 2,
                "draws": 1,
                "losses": 0,
                "goalsFor": 9,
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
              "form": "DWL",
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
                "goalsFor": 3,
                "goalsAgainst": 4
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
              "teamId": 247,
              "team": "Celtic",
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
            }
          ],
          "fixtures": [
            {
              "fixtureId": 1622626,
              "kickoff": "2026-08-26T01:45:00+09:00",
              "status": "ET",
              "homeTeamId": 13976,
              "homeTeam": "Sabah FA",
              "awayTeamId": 563,
              "awayTeam": "Hapoel Beer Sheva",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": true,
              "lineups": [
                {
                  "teamId": 13976,
                  "team": "Sabah FA",
                  "formation": "4-2-3-1",
                  "coach": "Valdas Dambrauskas",
                  "starters": [
                    "Stas Pokatilov",
                    "Akim Zedadka",
                    "Steve Solvet",
                    "Rahman Dashdamirov",
                    "Tymoteusz Puchacz",
                    "Umarali Rakhmonaliev",
                    "Ivan Lepinjica",
                    "Kaheem Parris",
                    "Veljko Simić",
                    "Christian Nwachukwu",
                    "Joy Lance Mickels"
                  ]
                },
                {
                  "teamId": 563,
                  "team": "Hapoel Beer Sheva",
                  "formation": "4-3-3",
                  "coach": "Ran Kozuch",
                  "starters": [
                    "Ofir Marciano",
                    "Guy Mizrahi",
                    "Miguel Vítor",
                    "Itay Rotman",
                    "Pedro Amador",
                    "Niv Yehoshua",
                    "Lucas Ventura",
                    "Eliel Peretz",
                    "Javon East",
                    "Igor Zlatanović",
                    "Zahi Ahmed"
                  ]
                }
              ]
            },
            {
              "fixtureId": 1622627,
              "kickoff": "2026-08-26T04:00:00+09:00",
              "status": "NS",
              "homeTeamId": 327,
              "homeTeam": "Bodo/Glimt",
              "awayTeamId": 413,
              "awayTeam": "NEC Nijmegen",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": true,
              "lineups": [
                {
                  "teamId": 327,
                  "team": "Bodo/Glimt",
                  "formation": "4-3-3",
                  "coach": "Kjetil Knutsen",
                  "starters": [
                    "Nikita Haikin",
                    "Fredrik Sjøvold",
                    "Villads Nielsen",
                    "Odin Luras Bjørtuft",
                    "Fredrik André Bjørkan",
                    "Sondre Auklend",
                    "Patrick Berg",
                    "Sondre Fet",
                    "Ole Didrik Blomberg",
                    "Andreas Helmersen",
                    "Jens Petter Hauge"
                  ]
                },
                {
                  "teamId": 413,
                  "team": "NEC Nijmegen",
                  "formation": "3-4-2-1",
                  "coach": "Dick Schreuder",
                  "starters": [
                    "Gonzalo Crettaz",
                    "Brayann Pereira",
                    "Tobias Storm",
                    "Deveron Fonville",
                    "Tjaronn Chery",
                    "Darko Nejašmić",
                    "Noé Lebreton",
                    "Clement Bischoff",
                    "Bryan Linssen",
                    "Dušan Tadić",
                    "Kaj Sierhuis"
                  ]
                }
              ]
            },
            {
              "fixtureId": 1610924,
              "kickoff": "2026-08-26T04:00:00+09:00",
              "status": "NS",
              "homeTeamId": 1026,
              "homeTeam": "Lask Linz",
              "awayTeamId": 247,
              "awayTeam": "Celtic",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": true,
              "lineups": [
                {
                  "teamId": 1026,
                  "team": "Lask Linz",
                  "formation": "3-5-2",
                  "coach": "Dietmar Kuhbauer",
                  "starters": [
                    "Lukas Jungwirth",
                    "Xavier Mbuyamba",
                    "Alemão",
                    "Andrés Andrade",
                    "Kasper Jørgensen",
                    "Robert Ljubičić",
                    "Melayro Bogarde",
                    "Sascha Horvath",
                    "George Bello",
                    "Moses Usor",
                    "Samuel Adeniran"
                  ]
                },
                {
                  "teamId": 247,
                  "team": "Celtic",
                  "formation": "4-2-3-1",
                  "coach": "Martin O'Neill",
                  "starters": [
                    "Viljami Sinisalo",
                    "Colby Donovan",
                    "Cameron Carter-Vickers",
                    "Auston Trusty",
                    "Kieran Tierney",
                    "Callum McGregor",
                    "Mika Baur",
                    "Camilo Durán",
                    "Benjamin Nygren",
                    "Yang Hyun-Jun",
                    "Kasper Høgh"
                  ]
                }
              ]
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
              "lineupsChecked": false,
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
              "lineupsChecked": false,
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
              "lineupsChecked": false,
              "lineups": []
            }
          ]
        }
      ]
    },
    {
      "date": "2026-08-27",
      "updatedAt": "2026-08-25T08:56:57.730Z",
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
              "teamId": 542,
              "team": "Alaves",
              "rank": 2,
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
              "rank": 3,
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
              "rank": 4,
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
              "rank": 5,
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
              "teamId": 543,
              "team": "Real Betis",
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
              "teamId": 532,
              "team": "Valencia",
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
              "teamId": 727,
              "team": "Osasuna",
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
              "teamId": 538,
              "team": "Celta Vigo",
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
              "rank": 14,
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
              "rank": 15,
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
              "status": "NS",
              "homeTeamId": 541,
              "homeTeam": "Real Madrid",
              "awayTeamId": 548,
              "awayTeam": "Real Sociedad",
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
              "status": "NS",
              "homeTeamId": 80,
              "homeTeam": "Lyon",
              "awayTeamId": 611,
              "awayTeam": "Fenerbahçe",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1622629,
              "kickoff": "2026-08-27T04:00:00+09:00",
              "status": "NS",
              "homeTeamId": 575,
              "homeTeam": "AEK Athens FC",
              "awayTeamId": 646,
              "awayTeam": "Levski Sofia",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1622631,
              "kickoff": "2026-08-27T04:00:00+09:00",
              "status": "NS",
              "homeTeamId": 759,
              "homeTeam": "Viking",
              "awayTeamId": 620,
              "awayTeam": "Dinamo Zagreb",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1622628,
              "kickoff": "2026-08-27T04:00:00+09:00",
              "status": "NS",
              "homeTeamId": 4360,
              "homeTeam": "Celje",
              "awayTeamId": 656,
              "awayTeam": "Slovan Bratislava",
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
      "date": "2026-08-28",
      "updatedAt": "2026-08-25T08:57:06.245Z",
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
              "teamId": 542,
              "team": "Alaves",
              "rank": 2,
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
              "rank": 3,
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
              "rank": 4,
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
              "rank": 5,
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
              "teamId": 543,
              "team": "Real Betis",
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
              "teamId": 532,
              "team": "Valencia",
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
              "teamId": 727,
              "team": "Osasuna",
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
              "teamId": 538,
              "team": "Celta Vigo",
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
              "rank": 14,
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
              "rank": 15,
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
    }
  ]
};
});
