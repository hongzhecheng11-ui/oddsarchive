(function attachTeamContextPack(root, factory) {
  const pack = factory();
  if (typeof module !== "undefined" && module.exports) module.exports = pack;
  if (root) root.ODDS_ARCHIVE_TEAM_CONTEXT_PACK = pack;
})(typeof window !== "undefined" ? window : globalThis, function createTeamContextPack() {
  return {
  "version": "team-context-v3",
  "date": "2026-08-19",
  "updatedAt": "2026-08-18T18:51:40.376Z",
  "collection": {
    "dates": [
      "2026-08-19"
    ],
    "requestGroups": 1,
    "skippedGroups": 25,
    "failures": 0,
    "errors": []
  },
  "leagues": [
    {
      "key": "UCL",
      "leagueId": 2,
      "season": "2026",
      "standings": [],
      "teams": [
        {
          "teamId": 611,
          "team": "Fenerbahçe",
          "form": "WDWW",
          "all": {
            "played": 4,
            "wins": 3,
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
            "goalsFor": 3,
            "goalsAgainst": 0
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
          "teamId": 80,
          "team": "Lyon",
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
            "goalsFor": 3,
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
          "teamId": 620,
          "team": "Dinamo Zagreb",
          "form": "DWWW",
          "all": {
            "played": 4,
            "wins": 3,
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
            "goalsFor": 8,
            "goalsAgainst": 2
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
          "teamId": 759,
          "team": "Viking",
          "form": "",
          "all": {
            "played": 0,
            "wins": 0,
            "draws": 0,
            "losses": 0,
            "goalsFor": 0,
            "goalsAgainst": 0
          },
          "home": {
            "played": 0,
            "wins": 0,
            "draws": 0,
            "losses": 0,
            "goalsFor": 0,
            "goalsAgainst": 0
          },
          "away": {
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
          "form": "DWWDWW",
          "all": {
            "played": 6,
            "wins": 4,
            "draws": 2,
            "losses": 0,
            "goalsFor": 10,
            "goalsAgainst": 3
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
            "wins": 1,
            "draws": 2,
            "losses": 0,
            "goalsFor": 4,
            "goalsAgainst": 3
          }
        },
        {
          "teamId": 575,
          "team": "AEK Athens FC",
          "form": "",
          "all": {
            "played": 0,
            "wins": 0,
            "draws": 0,
            "losses": 0,
            "goalsFor": 0,
            "goalsAgainst": 0
          },
          "home": {
            "played": 0,
            "wins": 0,
            "draws": 0,
            "losses": 0,
            "goalsFor": 0,
            "goalsAgainst": 0
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
          "fixtureId": 1622621,
          "kickoff": "2026-08-19T04:00:00+09:00",
          "status": "NS",
          "homeTeamId": 611,
          "homeTeam": "Fenerbahçe",
          "awayTeamId": 80,
          "awayTeam": "Lyon",
          "injuriesChecked": true,
          "injuries": [],
          "lineupsChecked": true,
          "lineups": [
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
                "Kerem Aktürkoğlu",
                "Vedat Muriqi"
              ]
            },
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
                "Corentin Tolisso",
                "Tanner Tessmann",
                "Tyler Morton",
                "Ernest Nuamah",
                "Loïs Openda",
                "Malick Fofana"
              ]
            }
          ]
        },
        {
          "fixtureId": 1622620,
          "kickoff": "2026-08-19T04:00:00+09:00",
          "status": "NS",
          "homeTeamId": 620,
          "homeTeam": "Dinamo Zagreb",
          "awayTeamId": 759,
          "awayTeam": "Viking",
          "injuriesChecked": true,
          "injuries": [],
          "lineupsChecked": true,
          "lineups": [
            {
              "teamId": 620,
              "team": "Dinamo Zagreb",
              "formation": "4-3-3",
              "coach": "Mario Kovacevic",
              "starters": [
                "Ivan Nevistić",
                "Moris Valinčić",
                "Sergi Domínguez",
                "Scott McKenna",
                "Matteo Pérez Vinlöf",
                "Luka Stojković",
                "Josip Mišić",
                "Miha Zajc",
                "Mateo Lisica",
                "Dion Drena Beljo",
                "Mislav Oršić"
              ]
            },
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
                "Kristoffer Askildsen",
                "Joe Bell",
                "Tobias Moi",
                "Zlatko Tripić",
                "Peter Christiansen",
                "Edvin Austbø"
              ]
            }
          ]
        },
        {
          "fixtureId": 1622622,
          "kickoff": "2026-08-19T04:00:00+09:00",
          "status": "NS",
          "homeTeamId": 646,
          "homeTeam": "Levski Sofia",
          "awayTeamId": 575,
          "awayTeam": "AEK Athens FC",
          "injuriesChecked": true,
          "injuries": [],
          "lineupsChecked": true,
          "lineups": [
            {
              "teamId": 646,
              "team": "Levski Sofia",
              "formation": "4-2-3-1",
              "coach": "Julio Velazquez",
              "starters": [
                "Svetoslav Vutsov",
                "Aldair",
                "Kristian Dimitrov",
                "Nikola Serafimov",
                "Maicon",
                "Álex Centelles",
                "El Mehdi Moubarik",
                "Reinaldo",
                "Serginho",
                "Armstrong Oko-Flex",
                "Everton Bala"
              ]
            },
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
                "Aboubakary Koita",
                "Răzvan Marin",
                "Kaan Kairinen",
                "Lovro Majer",
                "Luka Jović",
                "Zini"
              ]
            }
          ]
        }
      ]
    }
  ],
  "dates": [
    {
      "date": "2026-08-18",
      "updatedAt": "2026-08-18T08:51:30.792Z",
      "leagues": [
        {
          "key": "CHAMPIONSHIP",
          "leagueId": 40,
          "season": "2026",
          "standings": [
            {
              "teamId": 72,
              "team": "QPR",
              "rank": 1,
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
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 58,
              "team": "Millwall",
              "rank": 2,
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
              "teamId": 68,
              "team": "Bolton",
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
              "teamId": 70,
              "team": "Middlesbrough",
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
              "teamId": 1335,
              "team": "Charlton",
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
              "teamId": 38,
              "team": "Watford",
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
              "teamId": 60,
              "team": "West Brom",
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
              "teamId": 76,
              "team": "Swansea",
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
              "teamId": 67,
              "team": "Blackburn",
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
              "teamId": 48,
              "team": "West Ham",
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
              "teamId": 44,
              "team": "Burnley",
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
              "teamId": 39,
              "team": "Wolves",
              "rank": 12,
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
              "teamId": 43,
              "team": "Cardiff",
              "rank": 13,
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
              "teamId": 1837,
              "team": "Wrexham",
              "rank": 14,
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
              "teamId": 54,
              "team": "Birmingham",
              "rank": 15,
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
              "teamId": 62,
              "team": "Sheffield Utd",
              "rank": 16,
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
              "teamId": 69,
              "team": "Derby",
              "rank": 17,
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
              "teamId": 71,
              "team": "Norwich",
              "rank": 18,
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
              "teamId": 59,
              "team": "Preston",
              "rank": 19,
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
              "teamId": 75,
              "team": "Stoke City",
              "rank": 20,
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
              "teamId": 1379,
              "team": "Lincoln",
              "rank": 21,
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
              "teamId": 1355,
              "team": "Portsmouth",
              "rank": 22,
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
            },
            {
              "teamId": 56,
              "team": "Bristol City",
              "rank": 23,
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
              "teamId": 41,
              "team": "Southampton",
              "rank": 24,
              "points": -4,
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
            }
          ],
          "teams": [
            {
              "teamId": 43,
              "team": "Cardiff",
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
              "teamId": 1837,
              "team": "Wrexham",
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
            }
          ],
          "fixtures": [
            {
              "fixtureId": 1563094,
              "kickoff": "2026-08-18T04:00:00+09:00",
              "status": "FT",
              "homeTeamId": 43,
              "homeTeam": "Cardiff",
              "awayTeamId": 1837,
              "awayTeam": "Wrexham",
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
              "teamId": 540,
              "team": "Espanyol",
              "rank": 1,
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
              "teamId": 542,
              "team": "Alaves",
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
              "teamId": 536,
              "team": "Sevilla",
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
              "teamId": 4665,
              "team": "Racing Santander",
              "rank": 4,
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
              "teamId": 533,
              "team": "Villarreal",
              "rank": 5,
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
              "teamId": 797,
              "team": "Elche",
              "rank": 6,
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
              "teamId": 544,
              "team": "Deportivo La Coruna",
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
              "teamId": 529,
              "team": "Barcelona",
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
              "teamId": 541,
              "team": "Real Madrid",
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
              "teamId": 530,
              "team": "Atletico Madrid",
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
              "teamId": 543,
              "team": "Real Betis",
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
              "teamId": 538,
              "team": "Celta Vigo",
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
              "teamId": 532,
              "team": "Valencia",
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
              "teamId": 548,
              "team": "Real Sociedad",
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
              "teamId": 531,
              "team": "Athletic Club",
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
              "teamId": 727,
              "team": "Osasuna",
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
              "teamId": 535,
              "team": "Malaga",
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
              "teamId": 728,
              "team": "Rayo Vallecano",
              "rank": 18,
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
              "teamId": 539,
              "team": "Levante",
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
              "teamId": 546,
              "team": "Getafe",
              "rank": 20,
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
            }
          ],
          "teams": [
            {
              "teamId": 544,
              "team": "Deportivo La Coruna",
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
              "teamId": 797,
              "team": "Elche",
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
            }
          ],
          "fixtures": [
            {
              "fixtureId": 1570337,
              "kickoff": "2026-08-18T04:00:00+09:00",
              "status": "FT",
              "homeTeamId": 544,
              "homeTeam": "Deportivo La Coruna",
              "awayTeamId": 797,
              "awayTeam": "Elche",
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
              "teamId": 240,
              "team": "Arouca",
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
                "goalsFor": 4,
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
              "teamId": 212,
              "team": "FC Porto",
              "rank": 2,
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
                "goalsFor": 2,
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
              "teamId": 214,
              "team": "Maritimo",
              "rank": 3,
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
              "teamId": 211,
              "team": "Benfica",
              "rank": 4,
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
              "rank": 5,
              "points": 4,
              "goalsDiff": 2,
              "form": "WD",
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
                "goalsFor": 2,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 227,
              "team": "Santa Clara",
              "rank": 6,
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
                "goalsFor": 1,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 228,
              "team": "Sporting CP",
              "rank": 7,
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
                "draws": 1,
                "losses": 0,
                "goalsFor": 2,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 762,
              "team": "GIL Vicente",
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
              "teamId": 15130,
              "team": "Estrela",
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
              "teamId": 217,
              "team": "SC Braga",
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
              "teamId": 238,
              "team": "Academico Viseu",
              "rank": 11,
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
              "teamId": 242,
              "team": "Famalicao",
              "rank": 12,
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
              "teamId": 230,
              "team": "Estoril",
              "rank": 13,
              "points": 1,
              "goalsDiff": -2,
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
              "teamId": 4724,
              "team": "Alverca",
              "rank": 14,
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
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 215,
              "team": "Moreirense",
              "rank": 15,
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
              "teamId": 224,
              "team": "Vitória SC",
              "rank": 16,
              "points": 0,
              "goalsDiff": -2,
              "form": "LL",
              "all": {
                "played": 2,
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 2,
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
                "draws": 0,
                "losses": 1,
                "goalsFor": 2,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 226,
              "team": "Rio Ave",
              "rank": 17,
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
              "teamId": 4716,
              "team": "Casa Pia",
              "rank": 18,
              "points": 0,
              "goalsDiff": -8,
              "form": "LL",
              "all": {
                "played": 2,
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 0,
                "goalsAgainst": 8
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
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 0,
                "goalsAgainst": 1
              }
            }
          ],
          "teams": [
            {
              "teamId": 4716,
              "team": "Casa Pia",
              "form": "LL",
              "all": {
                "played": 2,
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 0,
                "goalsAgainst": 8
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
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 0,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 211,
              "team": "Benfica",
              "form": "DW",
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
            }
          ],
          "fixtures": [
            {
              "fixtureId": 1575459,
              "kickoff": "2026-08-18T04:15:00+09:00",
              "status": "FT",
              "homeTeamId": 4716,
              "homeTeam": "Casa Pia",
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
          "key": "SUPER_LIG",
          "leagueId": 203,
          "season": "2026",
          "standings": [
            {
              "teamId": 3579,
              "team": "Amed",
              "rank": 1,
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
              "teamId": 564,
              "team": "Başakşehir",
              "rank": 2,
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
              "teamId": 997,
              "team": "Gençlerbirliği S.K.",
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
              "teamId": 549,
              "team": "Beşiktaş",
              "rank": 4,
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
              "teamId": 1007,
              "team": "Rizespor",
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
              "teamId": 994,
              "team": "Göztepe",
              "rank": 6,
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
              "teamId": 3603,
              "team": "Samsunspor",
              "rank": 7,
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
                "played": 1,
                "wins": 0,
                "draws": 1,
                "losses": 0,
                "goalsFor": 3,
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
              "teamId": 645,
              "team": "Galatasaray",
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
              "teamId": 6343,
              "team": "Çorum FK",
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
              "teamId": 996,
              "team": "Alanyaspor",
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
              "teamId": 3573,
              "team": "Gaziantep FK",
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
              "teamId": 1004,
              "team": "Kasımpaşa",
              "rank": 12,
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
              "teamId": 998,
              "team": "Trabzonspor",
              "rank": 13,
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
              "teamId": 611,
              "team": "Fenerbahçe",
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
              "teamId": 3588,
              "team": "Eyüpspor",
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
              "teamId": 607,
              "team": "Konyaspor",
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
              "teamId": 7411,
              "team": "Kocaelispor",
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
              "teamId": 1009,
              "team": "Erzurumspor FK",
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
            }
          ],
          "teams": [
            {
              "teamId": 3603,
              "team": "Samsunspor",
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
                "played": 1,
                "wins": 0,
                "draws": 1,
                "losses": 0,
                "goalsFor": 3,
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
              "teamId": 994,
              "team": "Göztepe",
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
            }
          ],
          "fixtures": [
            {
              "fixtureId": 1584375,
              "kickoff": "2026-08-18T03:30:00+09:00",
              "status": "FT",
              "homeTeamId": 3603,
              "homeTeam": "Samsunspor",
              "awayTeamId": 994,
              "awayTeam": "Göztepe",
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
      "date": "2026-08-19",
      "updatedAt": "2026-08-18T18:51:40.369Z",
      "leagues": [
        {
          "key": "UCL",
          "leagueId": 2,
          "season": "2026",
          "standings": [],
          "teams": [
            {
              "teamId": 611,
              "team": "Fenerbahçe",
              "form": "WDWW",
              "all": {
                "played": 4,
                "wins": 3,
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
                "goalsFor": 3,
                "goalsAgainst": 0
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
              "teamId": 80,
              "team": "Lyon",
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
                "goalsFor": 3,
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
              "teamId": 620,
              "team": "Dinamo Zagreb",
              "form": "DWWW",
              "all": {
                "played": 4,
                "wins": 3,
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
                "goalsFor": 8,
                "goalsAgainst": 2
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
              "teamId": 759,
              "team": "Viking",
              "form": "",
              "all": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "home": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "away": {
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
              "form": "DWWDWW",
              "all": {
                "played": 6,
                "wins": 4,
                "draws": 2,
                "losses": 0,
                "goalsFor": 10,
                "goalsAgainst": 3
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
                "wins": 1,
                "draws": 2,
                "losses": 0,
                "goalsFor": 4,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 575,
              "team": "AEK Athens FC",
              "form": "",
              "all": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "home": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
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
              "fixtureId": 1622621,
              "kickoff": "2026-08-19T04:00:00+09:00",
              "status": "NS",
              "homeTeamId": 611,
              "homeTeam": "Fenerbahçe",
              "awayTeamId": 80,
              "awayTeam": "Lyon",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": true,
              "lineups": [
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
                    "Kerem Aktürkoğlu",
                    "Vedat Muriqi"
                  ]
                },
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
                    "Corentin Tolisso",
                    "Tanner Tessmann",
                    "Tyler Morton",
                    "Ernest Nuamah",
                    "Loïs Openda",
                    "Malick Fofana"
                  ]
                }
              ]
            },
            {
              "fixtureId": 1622620,
              "kickoff": "2026-08-19T04:00:00+09:00",
              "status": "NS",
              "homeTeamId": 620,
              "homeTeam": "Dinamo Zagreb",
              "awayTeamId": 759,
              "awayTeam": "Viking",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": true,
              "lineups": [
                {
                  "teamId": 620,
                  "team": "Dinamo Zagreb",
                  "formation": "4-3-3",
                  "coach": "Mario Kovacevic",
                  "starters": [
                    "Ivan Nevistić",
                    "Moris Valinčić",
                    "Sergi Domínguez",
                    "Scott McKenna",
                    "Matteo Pérez Vinlöf",
                    "Luka Stojković",
                    "Josip Mišić",
                    "Miha Zajc",
                    "Mateo Lisica",
                    "Dion Drena Beljo",
                    "Mislav Oršić"
                  ]
                },
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
                    "Kristoffer Askildsen",
                    "Joe Bell",
                    "Tobias Moi",
                    "Zlatko Tripić",
                    "Peter Christiansen",
                    "Edvin Austbø"
                  ]
                }
              ]
            },
            {
              "fixtureId": 1622622,
              "kickoff": "2026-08-19T04:00:00+09:00",
              "status": "NS",
              "homeTeamId": 646,
              "homeTeam": "Levski Sofia",
              "awayTeamId": 575,
              "awayTeam": "AEK Athens FC",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": true,
              "lineups": [
                {
                  "teamId": 646,
                  "team": "Levski Sofia",
                  "formation": "4-2-3-1",
                  "coach": "Julio Velazquez",
                  "starters": [
                    "Svetoslav Vutsov",
                    "Aldair",
                    "Kristian Dimitrov",
                    "Nikola Serafimov",
                    "Maicon",
                    "Álex Centelles",
                    "El Mehdi Moubarik",
                    "Reinaldo",
                    "Serginho",
                    "Armstrong Oko-Flex",
                    "Everton Bala"
                  ]
                },
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
                    "Aboubakary Koita",
                    "Răzvan Marin",
                    "Kaan Kairinen",
                    "Lovro Majer",
                    "Luka Jović",
                    "Zini"
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "date": "2026-08-20",
      "updatedAt": "2026-08-18T08:51:35.593Z",
      "leagues": [
        {
          "key": "LALIGA",
          "leagueId": 140,
          "season": "2026",
          "standings": [
            {
              "teamId": 540,
              "team": "Espanyol",
              "rank": 1,
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
              "teamId": 542,
              "team": "Alaves",
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
              "teamId": 536,
              "team": "Sevilla",
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
              "teamId": 4665,
              "team": "Racing Santander",
              "rank": 4,
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
              "teamId": 533,
              "team": "Villarreal",
              "rank": 5,
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
              "teamId": 797,
              "team": "Elche",
              "rank": 6,
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
              "teamId": 544,
              "team": "Deportivo La Coruna",
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
              "teamId": 529,
              "team": "Barcelona",
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
              "teamId": 541,
              "team": "Real Madrid",
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
              "teamId": 530,
              "team": "Atletico Madrid",
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
              "teamId": 543,
              "team": "Real Betis",
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
              "teamId": 538,
              "team": "Celta Vigo",
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
              "teamId": 532,
              "team": "Valencia",
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
              "teamId": 548,
              "team": "Real Sociedad",
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
              "teamId": 531,
              "team": "Athletic Club",
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
              "teamId": 727,
              "team": "Osasuna",
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
              "teamId": 535,
              "team": "Malaga",
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
              "teamId": 728,
              "team": "Rayo Vallecano",
              "rank": 18,
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
              "teamId": 539,
              "team": "Levante",
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
              "teamId": 546,
              "team": "Getafe",
              "rank": 20,
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
            }
          ],
          "teams": [
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
              "teamId": 535,
              "team": "Malaga",
              "form": "",
              "all": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "home": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
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
              "fixtureId": 1570334,
              "kickoff": "2026-08-20T04:00:00+09:00",
              "status": "NS",
              "homeTeamId": 530,
              "homeTeam": "Atletico Madrid",
              "awayTeamId": 535,
              "awayTeam": "Malaga",
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
              "teamId": 1026,
              "team": "Lask Linz",
              "form": "",
              "all": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "home": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "away": {
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
              "teamId": 327,
              "team": "Bodo/Glimt",
              "form": "DW",
              "all": {
                "played": 2,
                "wins": 1,
                "draws": 1,
                "losses": 0,
                "goalsFor": 6,
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
                "wins": 0,
                "draws": 1,
                "losses": 0,
                "goalsFor": 3,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 563,
              "team": "Hapoel Beer Sheva",
              "form": "LWWW",
              "all": {
                "played": 4,
                "wins": 3,
                "draws": 0,
                "losses": 1,
                "goalsFor": 6,
                "goalsAgainst": 2
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
                "goalsFor": 3,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 13976,
              "team": "Sabah FA",
              "form": "WWWWLW",
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
                "goalsAgainst": 0
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
              "teamId": 656,
              "team": "Slovan Bratislava",
              "form": "WDWW",
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
                "goalsFor": 3,
                "goalsAgainst": 1
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
              "teamId": 4360,
              "team": "Celje",
              "form": "DWLW",
              "all": {
                "played": 4,
                "wins": 2,
                "draws": 1,
                "losses": 1,
                "goalsFor": 9,
                "goalsAgainst": 7
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
                "goalsFor": 4,
                "goalsAgainst": 5
              }
            }
          ],
          "fixtures": [
            {
              "fixtureId": 1610923,
              "kickoff": "2026-08-20T04:00:00+09:00",
              "status": "NS",
              "homeTeamId": 247,
              "homeTeam": "Celtic",
              "awayTeamId": 1026,
              "awayTeam": "Lask Linz",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1622624,
              "kickoff": "2026-08-20T04:00:00+09:00",
              "status": "NS",
              "homeTeamId": 413,
              "homeTeam": "NEC Nijmegen",
              "awayTeamId": 327,
              "awayTeam": "Bodo/Glimt",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1622623,
              "kickoff": "2026-08-20T04:00:00+09:00",
              "status": "NS",
              "homeTeamId": 563,
              "homeTeam": "Hapoel Beer Sheva",
              "awayTeamId": 13976,
              "awayTeam": "Sabah FA",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1622625,
              "kickoff": "2026-08-20T04:00:00+09:00",
              "status": "NS",
              "homeTeamId": 656,
              "homeTeam": "Slovan Bratislava",
              "awayTeamId": 4360,
              "awayTeam": "Celje",
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
      "date": "2026-08-21",
      "updatedAt": "2026-08-18T08:51:42.231Z",
      "leagues": [
        {
          "key": "LALIGA",
          "leagueId": 140,
          "season": "2026",
          "standings": [
            {
              "teamId": 540,
              "team": "Espanyol",
              "rank": 1,
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
              "teamId": 542,
              "team": "Alaves",
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
              "teamId": 536,
              "team": "Sevilla",
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
              "teamId": 4665,
              "team": "Racing Santander",
              "rank": 4,
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
              "teamId": 533,
              "team": "Villarreal",
              "rank": 5,
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
              "teamId": 797,
              "team": "Elche",
              "rank": 6,
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
              "teamId": 544,
              "team": "Deportivo La Coruna",
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
              "teamId": 529,
              "team": "Barcelona",
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
              "teamId": 541,
              "team": "Real Madrid",
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
              "teamId": 530,
              "team": "Atletico Madrid",
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
              "teamId": 543,
              "team": "Real Betis",
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
              "teamId": 538,
              "team": "Celta Vigo",
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
              "teamId": 532,
              "team": "Valencia",
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
              "teamId": 548,
              "team": "Real Sociedad",
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
              "teamId": 531,
              "team": "Athletic Club",
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
              "teamId": 727,
              "team": "Osasuna",
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
              "teamId": 535,
              "team": "Malaga",
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
              "teamId": 728,
              "team": "Rayo Vallecano",
              "rank": 18,
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
              "teamId": 539,
              "team": "Levante",
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
              "teamId": 546,
              "team": "Getafe",
              "rank": 20,
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
            }
          ],
          "teams": [
            {
              "teamId": 728,
              "team": "Rayo Vallecano",
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
              "teamId": 542,
              "team": "Alaves",
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
              "fixtureId": 1570351,
              "kickoff": "2026-08-21T04:00:00+09:00",
              "status": "NS",
              "homeTeamId": 728,
              "homeTeam": "Rayo Vallecano",
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
          "key": "UEL",
          "leagueId": 3,
          "season": "2026",
          "standings": [],
          "teams": [
            {
              "teamId": 664,
              "team": "Kairat Almaty",
              "form": "",
              "all": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "home": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "away": {
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
              "form": "DWWW",
              "all": {
                "played": 4,
                "wins": 3,
                "draws": 1,
                "losses": 0,
                "goalsFor": 8,
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
                "played": 2,
                "wins": 1,
                "draws": 1,
                "losses": 0,
                "goalsFor": 2,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 336,
              "team": "Jagiellonia",
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
              "teamId": 3502,
              "team": "Saburtalo",
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
              "teamId": 2240,
              "team": "Mjallby AIF",
              "form": "",
              "all": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "home": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "away": {
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
                "goalsFor": 1,
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
              "teamId": 347,
              "team": "Lech Poznan",
              "form": "WW",
              "all": {
                "played": 2,
                "wins": 2,
                "draws": 0,
                "losses": 0,
                "goalsFor": 6,
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
                "goalsFor": 5,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 1012,
              "team": "FC Thun",
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
                "goalsFor": 2,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 549,
              "team": "Beşiktaş",
              "form": "WWWW",
              "all": {
                "played": 4,
                "wins": 4,
                "draws": 0,
                "losses": 0,
                "goalsFor": 5,
                "goalsAgainst": 0
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
                "wins": 2,
                "draws": 0,
                "losses": 0,
                "goalsFor": 3,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 3872,
              "team": "Kauno Žalgiris",
              "form": "",
              "all": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "home": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "away": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 632,
              "team": "Universitatea Craiova",
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
              "teamId": 3683,
              "team": "Ararat-Armenia",
              "form": "",
              "all": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "home": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "away": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 998,
              "team": "Trabzonspor",
              "form": "",
              "all": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "home": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "away": {
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
              "form": "WWWDWD",
              "all": {
                "played": 6,
                "wins": 4,
                "draws": 2,
                "losses": 0,
                "goalsFor": 11,
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
                "played": 3,
                "wins": 2,
                "draws": 1,
                "losses": 0,
                "goalsFor": 5,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 3327,
              "team": "Egnatia Rrogozhinë",
              "form": "LW",
              "all": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 6,
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
                "goalsFor": 1,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 321,
              "team": "Lillestrom",
              "form": "",
              "all": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "home": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "away": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 598,
              "team": "FK Crvena Zvezda",
              "form": "",
              "all": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "home": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "away": {
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
              "form": "",
              "all": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "home": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "away": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 735,
              "team": "St. Truiden",
              "form": "",
              "all": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "home": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "away": {
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
              "teamId": 1124,
              "team": "OFI",
              "form": "",
              "all": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "home": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "away": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 853,
              "team": "CSKA Sofia",
              "form": "WWDWWL",
              "all": {
                "played": 6,
                "wins": 4,
                "draws": 1,
                "losses": 1,
                "goalsFor": 10,
                "goalsAgainst": 6
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
                "played": 3,
                "wins": 2,
                "draws": 1,
                "losses": 0,
                "goalsFor": 5,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 211,
              "team": "Benfica",
              "form": "LWWD",
              "all": {
                "played": 4,
                "wins": 2,
                "draws": 1,
                "losses": 1,
                "goalsFor": 13,
                "goalsAgainst": 4
              },
              "home": {
                "played": 2,
                "wins": 2,
                "draws": 0,
                "losses": 0,
                "goalsFor": 11,
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
              "teamId": 406,
              "team": "Aarhus",
              "form": "",
              "all": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "home": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
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
              "fixtureId": 1623435,
              "kickoff": "2026-08-21T00:00:00+09:00",
              "status": "NS",
              "homeTeamId": 664,
              "homeTeam": "Kairat Almaty",
              "awayTeamId": 554,
              "awayTeam": "Anderlecht",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1623434,
              "kickoff": "2026-08-21T01:00:00+09:00",
              "status": "NS",
              "homeTeamId": 336,
              "homeTeam": "Jagiellonia",
              "awayTeamId": 3502,
              "awayTeam": "Saburtalo",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1623436,
              "kickoff": "2026-08-21T01:00:00+09:00",
              "status": "NS",
              "homeTeamId": 2240,
              "homeTeam": "Mjallby AIF",
              "awayTeamId": 571,
              "awayTeam": "Red Bull Salzburg",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1627595,
              "kickoff": "2026-08-21T02:00:00+09:00",
              "status": "NS",
              "homeTeamId": 347,
              "homeTeam": "Lech Poznan",
              "awayTeamId": 1012,
              "awayTeam": "FC Thun",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1623432,
              "kickoff": "2026-08-21T02:00:00+09:00",
              "status": "NS",
              "homeTeamId": 549,
              "homeTeam": "Beşiktaş",
              "awayTeamId": 3872,
              "awayTeam": "Kauno Žalgiris",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1623440,
              "kickoff": "2026-08-21T02:00:00+09:00",
              "status": "NS",
              "homeTeamId": 632,
              "homeTeam": "Universitatea Craiova",
              "awayTeamId": 3683,
              "awayTeam": "Ararat-Armenia",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1623439,
              "kickoff": "2026-08-21T02:00:00+09:00",
              "status": "NS",
              "homeTeamId": 998,
              "homeTeam": "Trabzonspor",
              "awayTeamId": 651,
              "awayTeam": "Ferencvarosi TC",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1623433,
              "kickoff": "2026-08-21T02:00:00+09:00",
              "status": "NS",
              "homeTeamId": 3327,
              "homeTeam": "Egnatia Rrogozhinë",
              "awayTeamId": 321,
              "awayTeam": "Lillestrom",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1622632,
              "kickoff": "2026-08-21T03:00:00+09:00",
              "status": "NS",
              "homeTeamId": 598,
              "homeTeam": "FK Crvena Zvezda",
              "awayTeamId": 567,
              "awayTeam": "Plzen",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1623438,
              "kickoff": "2026-08-21T03:00:00+09:00",
              "status": "NS",
              "homeTeamId": 735,
              "homeTeam": "St. Truiden",
              "awayTeamId": 3402,
              "awayTeam": "Omonia Nicosia",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1623437,
              "kickoff": "2026-08-21T03:00:00+09:00",
              "status": "NS",
              "homeTeamId": 1124,
              "homeTeam": "OFI",
              "awayTeamId": 853,
              "awayTeam": "CSKA Sofia",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1623431,
              "kickoff": "2026-08-21T04:00:00+09:00",
              "status": "NS",
              "homeTeamId": 211,
              "homeTeam": "Benfica",
              "awayTeamId": 406,
              "awayTeam": "Aarhus",
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
