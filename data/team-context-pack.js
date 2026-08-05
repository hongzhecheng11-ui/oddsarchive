(function attachTeamContextPack(root, factory) {
  const pack = factory();
  if (typeof module !== "undefined" && module.exports) module.exports = pack;
  if (root) root.ODDS_ARCHIVE_TEAM_CONTEXT_PACK = pack;
})(typeof window !== "undefined" ? window : globalThis, function createTeamContextPack() {
  return {
  "version": "team-context-v3",
  "date": "2026-08-06",
  "updatedAt": "2026-08-05T19:49:31.298Z",
  "collection": {
    "dates": [
      "2026-08-06"
    ],
    "requestGroups": 2,
    "skippedGroups": 24,
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
          "teamId": 637,
          "team": "Sturm Graz",
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
          "teamId": 406,
          "team": "Aarhus",
          "form": "LWW",
          "all": {
            "played": 3,
            "wins": 2,
            "draws": 0,
            "losses": 1,
            "goalsFor": 8,
            "goalsAgainst": 6
          },
          "home": {
            "played": 2,
            "wins": 1,
            "draws": 0,
            "losses": 1,
            "goalsFor": 3,
            "goalsAgainst": 5
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
          "teamId": 13976,
          "team": "Sabah FA",
          "form": "WWWWL",
          "all": {
            "played": 5,
            "wins": 4,
            "draws": 0,
            "losses": 1,
            "goalsFor": 8,
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
            "played": 3,
            "wins": 2,
            "draws": 0,
            "losses": 1,
            "goalsFor": 5,
            "goalsAgainst": 3
          }
        }
      ],
      "fixtures": [
        {
          "fixtureId": 1607165,
          "kickoff": "2026-08-06T03:00:00+09:00",
          "status": "2H",
          "homeTeamId": 611,
          "homeTeam": "Fenerbahçe",
          "awayTeamId": 637,
          "awayTeam": "Sturm Graz",
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
                "Mert Günok",
                "Nélson Semedo",
                "Milan Škriniar",
                "Nathan Aké",
                "Jayden Oosterwolde",
                "Mattéo Guendouzi",
                "N'Golo Kanté",
                "Mason Greenwood",
                "Marco Asensio",
                "Kerem Aktürkoğlu",
                "Talisca"
              ]
            },
            {
              "teamId": 637,
              "team": "Sturm Graz",
              "formation": "4-4-2",
              "coach": "Fabio Ingolitsch",
              "starters": [
                "Daniil Khudyakov",
                "Jurgen Heil",
                "Albert Vallci",
                "Jeyland Mitchell",
                "Emran Soglo",
                "Jacob Hödl",
                "Luca Weinhandl",
                "Jon Gorenc Stanković",
                "Simon Seidl",
                "Szymon Włodarczyk",
                "Seedy Jatta"
              ]
            }
          ]
        },
        {
          "fixtureId": 1607163,
          "kickoff": "2026-08-06T02:10:00+09:00",
          "status": "FT",
          "homeTeamId": 406,
          "homeTeam": "Aarhus",
          "awayTeamId": 13976,
          "awayTeam": "Sabah FA",
          "injuriesChecked": true,
          "injuries": [],
          "lineupsChecked": true,
          "lineups": [
            {
              "teamId": 406,
              "team": "Aarhus",
              "formation": "3-4-3",
              "coach": "Jakob Poulsen",
              "starters": [
                "Mads Hedenstad",
                "Colin Rösler",
                "Frederik Tingager",
                "Eric Kahl",
                "Mikael Anderson",
                "Magnus Knudsen",
                "Jens Jønsson",
                "Frederik Emmery",
                "Tobias Bech",
                "James Bogere",
                "Kristian Arnstad"
              ]
            },
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
                "Aleksey Isayev",
                "Veljko Simić",
                "Joy Lance Mickels"
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
      "standings": [],
      "teams": [
        {
          "teamId": 651,
          "team": "Ferencvarosi TC",
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
            "played": 2,
            "wins": 1,
            "draws": 1,
            "losses": 0,
            "goalsFor": 5,
            "goalsAgainst": 2
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
          "teamId": 340,
          "team": "Gornik Zabrze",
          "form": "",
          "all": {
            "played": 0,
            "wins": 0,
            "draws": 0,
            "losses": 0,
            "goalsFor": 0,
            "goalsAgainst": 0
          },
          "home": {
            "played": 0,
            "wins": 0,
            "draws": 0,
            "losses": 0,
            "goalsFor": 0,
            "goalsAgainst": 0
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
          "fixtureId": 1607561,
          "kickoff": "2026-08-06T03:15:00+09:00",
          "status": "2H",
          "homeTeamId": 651,
          "homeTeam": "Ferencvarosi TC",
          "awayTeamId": 340,
          "awayTeam": "Gornik Zabrze",
          "injuriesChecked": true,
          "injuries": [],
          "lineupsChecked": true,
          "lineups": [
            {
              "teamId": 651,
              "team": "Ferencvarosi TC",
              "formation": "4-3-3",
              "coach": "Balazs Borbely",
              "starters": [
                "Dénes Dibusz",
                "Cadu",
                "Mariano Gómez",
                "Toon Raemaekers",
                "Attila Osváth",
                "Marius Corbu",
                "Gabi Kanichowsky",
                "Jonathan Levi",
                "Kristoffer Zachariassen",
                "Lenny Joseph",
                "Yusuf Bamidele"
              ]
            },
            {
              "teamId": 340,
              "team": "Gornik Zabrze",
              "formation": "4-3-3",
              "coach": "Michal Gasparik",
              "starters": [
                "Philipp Schulze",
                "Michal Sáček",
                "Rafał Janicki",
                "Josema",
                "Erik Janža",
                "Lukáš Sadílek",
                "Maximilian Dietz",
                "Kacper Urbański",
                "Yvan Ikia Dimi",
                "Erik Prekop",
                "Taofeek Ismaheel"
              ]
            }
          ]
        }
      ]
    }
  ],
  "dates": [
    {
      "date": "2026-08-05",
      "updatedAt": "2026-08-05T10:45:51.399Z",
      "leagues": [
        {
          "key": "UCL",
          "leagueId": 2,
          "season": "2026",
          "standings": [],
          "teams": [
            {
              "teamId": 2240,
              "team": "Mjallby AIF",
              "form": "WDL",
              "all": {
                "played": 3,
                "wins": 1,
                "draws": 1,
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
                "played": 1,
                "wins": 0,
                "draws": 1,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 656,
              "team": "Slovan Bratislava",
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
                "goalsFor": 1,
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
              "teamId": 3683,
              "team": "Ararat-Armenia",
              "form": "WLWLW",
              "all": {
                "played": 5,
                "wins": 3,
                "draws": 0,
                "losses": 2,
                "goalsFor": 9,
                "goalsAgainst": 6
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
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 3,
                "goalsAgainst": 5
              }
            },
            {
              "teamId": 4360,
              "team": "Celje",
              "form": "DWL",
              "all": {
                "played": 3,
                "wins": 1,
                "draws": 1,
                "losses": 1,
                "goalsFor": 7,
                "goalsAgainst": 7
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
                "goalsFor": 4,
                "goalsAgainst": 5
              }
            },
            {
              "teamId": 563,
              "team": "Hapoel Beer Sheva",
              "form": "LWW",
              "all": {
                "played": 3,
                "wins": 2,
                "draws": 0,
                "losses": 1,
                "goalsFor": 4,
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
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 1,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 598,
              "team": "FK Crvena Zvezda",
              "form": "WWL",
              "all": {
                "played": 3,
                "wins": 2,
                "draws": 0,
                "losses": 1,
                "goalsFor": 9,
                "goalsAgainst": 1
              },
              "home": {
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 5,
                "goalsAgainst": 0
              },
              "away": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 4,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 646,
              "team": "Levski Sofia",
              "form": "DWWDW",
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
                "wins": 3,
                "draws": 0,
                "losses": 0,
                "goalsFor": 6,
                "goalsAgainst": 0
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
              "teamId": 664,
              "team": "Kairat Almaty",
              "form": "WWLWL",
              "all": {
                "played": 5,
                "wins": 3,
                "draws": 0,
                "losses": 2,
                "goalsFor": 6,
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
                "wins": 1,
                "draws": 0,
                "losses": 2,
                "goalsFor": 2,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 553,
              "team": "Olympiakos Piraeus",
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
              "teamId": 413,
              "team": "NEC Nijmegen",
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
              "teamId": 620,
              "team": "Dinamo Zagreb",
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
                "wins": 2,
                "draws": 0,
                "losses": 0,
                "goalsFor": 8,
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
              "teamId": 3872,
              "team": "Kauno Žalgiris",
              "form": "DWDWL",
              "all": {
                "played": 5,
                "wins": 2,
                "draws": 2,
                "losses": 1,
                "goalsFor": 5,
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
                "draws": 1,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 7
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
              "teamId": 80,
              "team": "Lyon",
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
              "teamId": 1393,
              "team": "Union St. Gilloise",
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
              "teamId": 327,
              "team": "Bodo/Glimt",
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
              "fixtureId": 1607168,
              "kickoff": "2026-08-05T01:00:00+09:00",
              "status": "FT",
              "homeTeamId": 2240,
              "homeTeam": "Mjallby AIF",
              "awayTeamId": 656,
              "awayTeam": "Slovan Bratislava",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1605370,
              "kickoff": "2026-08-05T01:00:00+09:00",
              "status": "FT",
              "homeTeamId": 3683,
              "homeTeam": "Ararat-Armenia",
              "awayTeamId": 4360,
              "awayTeam": "Celje",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1607166,
              "kickoff": "2026-08-05T02:30:00+09:00",
              "status": "FT",
              "homeTeamId": 563,
              "homeTeam": "Hapoel Beer Sheva",
              "awayTeamId": 598,
              "awayTeam": "FK Crvena Zvezda",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1607167,
              "kickoff": "2026-08-05T02:30:00+09:00",
              "status": "FT",
              "homeTeamId": 646,
              "homeTeam": "Levski Sofia",
              "awayTeamId": 664,
              "awayTeam": "Kairat Almaty",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1598824,
              "kickoff": "2026-08-05T03:00:00+09:00",
              "status": "FT",
              "homeTeamId": 553,
              "homeTeam": "Olympiakos Piraeus",
              "awayTeamId": 413,
              "awayTeam": "NEC Nijmegen",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1607164,
              "kickoff": "2026-08-05T03:00:00+09:00",
              "status": "FT",
              "homeTeamId": 620,
              "homeTeam": "Dinamo Zagreb",
              "awayTeamId": 3872,
              "awayTeam": "Kauno Žalgiris",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1598826,
              "kickoff": "2026-08-05T03:00:00+09:00",
              "status": "FT",
              "homeTeamId": 628,
              "homeTeam": "Sparta Praha",
              "awayTeamId": 80,
              "awayTeam": "Lyon",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1598825,
              "kickoff": "2026-08-05T03:00:00+09:00",
              "status": "FT",
              "homeTeamId": 1393,
              "homeTeam": "Union St. Gilloise",
              "awayTeamId": 327,
              "awayTeam": "Bodo/Glimt",
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
              "teamId": 652,
              "team": "Shamrock Rovers",
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
              "teamId": 3327,
              "team": "Egnatia Rrogozhinë",
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
              "teamId": 5354,
              "team": "Larne",
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
              "teamId": 3502,
              "team": "Saburtalo",
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
            }
          ],
          "fixtures": [
            {
              "fixtureId": 1606352,
              "kickoff": "2026-08-05T04:00:00+09:00",
              "status": "FT",
              "homeTeamId": 652,
              "homeTeam": "Shamrock Rovers",
              "awayTeamId": 3327,
              "awayTeam": "Egnatia Rrogozhinë",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1607176,
              "kickoff": "2026-08-05T04:00:00+09:00",
              "status": "FT",
              "homeTeamId": 5354,
              "homeTeam": "Larne",
              "awayTeamId": 3502,
              "awayTeam": "Saburtalo",
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
      "date": "2026-08-06",
      "updatedAt": "2026-08-05T19:49:31.292Z",
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
              "teamId": 637,
              "team": "Sturm Graz",
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
              "teamId": 406,
              "team": "Aarhus",
              "form": "LWW",
              "all": {
                "played": 3,
                "wins": 2,
                "draws": 0,
                "losses": 1,
                "goalsFor": 8,
                "goalsAgainst": 6
              },
              "home": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 5
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
              "teamId": 13976,
              "team": "Sabah FA",
              "form": "WWWWL",
              "all": {
                "played": 5,
                "wins": 4,
                "draws": 0,
                "losses": 1,
                "goalsFor": 8,
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
                "played": 3,
                "wins": 2,
                "draws": 0,
                "losses": 1,
                "goalsFor": 5,
                "goalsAgainst": 3
              }
            }
          ],
          "fixtures": [
            {
              "fixtureId": 1607165,
              "kickoff": "2026-08-06T03:00:00+09:00",
              "status": "2H",
              "homeTeamId": 611,
              "homeTeam": "Fenerbahçe",
              "awayTeamId": 637,
              "awayTeam": "Sturm Graz",
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
                    "Mert Günok",
                    "Nélson Semedo",
                    "Milan Škriniar",
                    "Nathan Aké",
                    "Jayden Oosterwolde",
                    "Mattéo Guendouzi",
                    "N'Golo Kanté",
                    "Mason Greenwood",
                    "Marco Asensio",
                    "Kerem Aktürkoğlu",
                    "Talisca"
                  ]
                },
                {
                  "teamId": 637,
                  "team": "Sturm Graz",
                  "formation": "4-4-2",
                  "coach": "Fabio Ingolitsch",
                  "starters": [
                    "Daniil Khudyakov",
                    "Jurgen Heil",
                    "Albert Vallci",
                    "Jeyland Mitchell",
                    "Emran Soglo",
                    "Jacob Hödl",
                    "Luca Weinhandl",
                    "Jon Gorenc Stanković",
                    "Simon Seidl",
                    "Szymon Włodarczyk",
                    "Seedy Jatta"
                  ]
                }
              ]
            },
            {
              "fixtureId": 1607163,
              "kickoff": "2026-08-06T02:10:00+09:00",
              "status": "FT",
              "homeTeamId": 406,
              "homeTeam": "Aarhus",
              "awayTeamId": 13976,
              "awayTeam": "Sabah FA",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": true,
              "lineups": [
                {
                  "teamId": 406,
                  "team": "Aarhus",
                  "formation": "3-4-3",
                  "coach": "Jakob Poulsen",
                  "starters": [
                    "Mads Hedenstad",
                    "Colin Rösler",
                    "Frederik Tingager",
                    "Eric Kahl",
                    "Mikael Anderson",
                    "Magnus Knudsen",
                    "Jens Jønsson",
                    "Frederik Emmery",
                    "Tobias Bech",
                    "James Bogere",
                    "Kristian Arnstad"
                  ]
                },
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
                    "Aleksey Isayev",
                    "Veljko Simić",
                    "Joy Lance Mickels"
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
          "standings": [],
          "teams": [
            {
              "teamId": 651,
              "team": "Ferencvarosi TC",
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
                "played": 2,
                "wins": 1,
                "draws": 1,
                "losses": 0,
                "goalsFor": 5,
                "goalsAgainst": 2
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
              "teamId": 340,
              "team": "Gornik Zabrze",
              "form": "",
              "all": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "home": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
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
              "fixtureId": 1607561,
              "kickoff": "2026-08-06T03:15:00+09:00",
              "status": "2H",
              "homeTeamId": 651,
              "homeTeam": "Ferencvarosi TC",
              "awayTeamId": 340,
              "awayTeam": "Gornik Zabrze",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": true,
              "lineups": [
                {
                  "teamId": 651,
                  "team": "Ferencvarosi TC",
                  "formation": "4-3-3",
                  "coach": "Balazs Borbely",
                  "starters": [
                    "Dénes Dibusz",
                    "Cadu",
                    "Mariano Gómez",
                    "Toon Raemaekers",
                    "Attila Osváth",
                    "Marius Corbu",
                    "Gabi Kanichowsky",
                    "Jonathan Levi",
                    "Kristoffer Zachariassen",
                    "Lenny Joseph",
                    "Yusuf Bamidele"
                  ]
                },
                {
                  "teamId": 340,
                  "team": "Gornik Zabrze",
                  "formation": "4-3-3",
                  "coach": "Michal Gasparik",
                  "starters": [
                    "Philipp Schulze",
                    "Michal Sáček",
                    "Rafał Janicki",
                    "Josema",
                    "Erik Janža",
                    "Lukáš Sadílek",
                    "Maximilian Dietz",
                    "Kacper Urbański",
                    "Yvan Ikia Dimi",
                    "Erik Prekop",
                    "Taofeek Ismaheel"
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "date": "2026-08-07",
      "updatedAt": "2026-08-05T10:46:02.663Z",
      "leagues": [
        {
          "key": "UEL",
          "leagueId": 3,
          "season": "2026",
          "standings": [],
          "teams": [
            {
              "teamId": 1165,
              "team": "KuPS",
              "form": "",
              "all": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "home": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "away": {
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
              "form": "",
              "all": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "home": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "away": {
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
              "form": "",
              "all": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "home": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "away": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 257,
              "team": "Rangers",
              "form": "",
              "all": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "home": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "away": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 604,
              "team": "Maccabi Tel Aviv",
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
              "teamId": 853,
              "team": "CSKA Sofia",
              "form": "WWDW",
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
                "wins": 2,
                "draws": 0,
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
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 347,
              "team": "Lech Poznan",
              "form": "",
              "all": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "home": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "away": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 701,
              "team": "KI Klaksvik",
              "form": "",
              "all": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "home": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "away": {
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
              "form": "",
              "all": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "home": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "away": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 3403,
              "team": "Pafos",
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
              "teamId": 667,
              "team": "Lincoln Red Imps FC",
              "form": "",
              "all": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "home": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "away": {
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
              "form": "",
              "all": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "home": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "away": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 3723,
              "team": "Hradec Králové",
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
              "teamId": 549,
              "team": "Beşiktaş",
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
              "teamId": 619,
              "team": "PAOK",
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
              "teamId": 554,
              "team": "Anderlecht",
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
                "goalsFor": 1,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 1012,
              "team": "FC Thun",
              "form": "",
              "all": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "home": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "away": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 278,
              "team": "Vikingur Reykjavik",
              "form": "",
              "all": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "home": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "away": {
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
              "form": "LW",
              "all": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 6,
                "goalsAgainst": 2
              },
              "home": {
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 5,
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
              "teamId": 254,
              "team": "Heart Of Midlothian",
              "form": "",
              "all": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "home": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
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
              "fixtureId": 1607175,
              "kickoff": "2026-08-07T00:00:00+09:00",
              "status": "NS",
              "homeTeamId": 1165,
              "homeTeam": "KuPS",
              "awayTeamId": 632,
              "awayTeam": "Universitatea Craiova",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1598830,
              "kickoff": "2026-08-07T01:00:00+09:00",
              "status": "NS",
              "homeTeamId": 336,
              "homeTeam": "Jagiellonia",
              "awayTeamId": 257,
              "awayTeam": "Rangers",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1607563,
              "kickoff": "2026-08-07T01:00:00+09:00",
              "status": "NS",
              "homeTeamId": 604,
              "homeTeam": "Maccabi Tel Aviv",
              "awayTeamId": 853,
              "awayTeam": "CSKA Sofia",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1607177,
              "kickoff": "2026-08-07T02:00:00+09:00",
              "status": "NS",
              "homeTeamId": 347,
              "homeTeam": "Lech Poznan",
              "awayTeamId": 701,
              "awayTeam": "KI Klaksvik",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1607564,
              "kickoff": "2026-08-07T02:00:00+09:00",
              "status": "NS",
              "homeTeamId": 571,
              "homeTeam": "Red Bull Salzburg",
              "awayTeamId": 3403,
              "awayTeam": "Pafos",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1607178,
              "kickoff": "2026-08-07T02:00:00+09:00",
              "status": "NS",
              "homeTeamId": 667,
              "homeTeam": "Lincoln Red Imps FC",
              "awayTeamId": 3402,
              "awayTeam": "Omonia Nicosia",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1607562,
              "kickoff": "2026-08-07T02:00:00+09:00",
              "status": "NS",
              "homeTeamId": 3723,
              "homeTeam": "Hradec Králové",
              "awayTeamId": 549,
              "awayTeam": "Beşiktaş",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1607565,
              "kickoff": "2026-08-07T02:45:00+09:00",
              "status": "NS",
              "homeTeamId": 619,
              "homeTeam": "PAOK",
              "awayTeamId": 554,
              "awayTeam": "Anderlecht",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1607179,
              "kickoff": "2026-08-07T03:00:00+09:00",
              "status": "NS",
              "homeTeamId": 1012,
              "homeTeam": "FC Thun",
              "awayTeamId": 278,
              "awayTeam": "Vikingur Reykjavik",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1607560,
              "kickoff": "2026-08-07T04:00:00+09:00",
              "status": "NS",
              "homeTeamId": 211,
              "homeTeam": "Benfica",
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
          "key": "KLEAGUE2",
          "leagueId": 293,
          "season": "2026",
          "standings": [
            {
              "teamId": 2765,
              "team": "Suwon Bluewings",
              "rank": 1,
              "points": 37,
              "goalsDiff": 11,
              "form": "DWDLW",
              "all": {
                "played": 19,
                "wins": 11,
                "draws": 4,
                "losses": 4,
                "goalsFor": 28,
                "goalsAgainst": 17
              },
              "home": {
                "played": 9,
                "wins": 5,
                "draws": 3,
                "losses": 1,
                "goalsFor": 11,
                "goalsAgainst": 6
              },
              "away": {
                "played": 10,
                "wins": 6,
                "draws": 1,
                "losses": 3,
                "goalsFor": 17,
                "goalsAgainst": 11
              }
            },
            {
              "teamId": 2749,
              "team": "Seoul E-Land FC",
              "rank": 2,
              "points": 36,
              "goalsDiff": 11,
              "form": "WWDWL",
              "all": {
                "played": 19,
                "wins": 11,
                "draws": 3,
                "losses": 5,
                "goalsFor": 36,
                "goalsAgainst": 25
              },
              "home": {
                "played": 9,
                "wins": 5,
                "draws": 1,
                "losses": 3,
                "goalsFor": 19,
                "goalsAgainst": 14
              },
              "away": {
                "played": 10,
                "wins": 6,
                "draws": 2,
                "losses": 2,
                "goalsFor": 17,
                "goalsAgainst": 11
              }
            },
            {
              "teamId": 2752,
              "team": "Busan I Park",
              "rank": 3,
              "points": 36,
              "goalsDiff": 10,
              "form": "LLLWD",
              "all": {
                "played": 19,
                "wins": 11,
                "draws": 3,
                "losses": 5,
                "goalsFor": 37,
                "goalsAgainst": 27
              },
              "home": {
                "played": 10,
                "wins": 6,
                "draws": 2,
                "losses": 2,
                "goalsFor": 19,
                "goalsAgainst": 12
              },
              "away": {
                "played": 9,
                "wins": 5,
                "draws": 1,
                "losses": 3,
                "goalsFor": 18,
                "goalsAgainst": 15
              }
            },
            {
              "teamId": 7087,
              "team": "Hwaseong",
              "rank": 4,
              "points": 34,
              "goalsDiff": 12,
              "form": "WWWLL",
              "all": {
                "played": 19,
                "wins": 10,
                "draws": 4,
                "losses": 5,
                "goalsFor": 34,
                "goalsAgainst": 22
              },
              "home": {
                "played": 14,
                "wins": 7,
                "draws": 4,
                "losses": 3,
                "goalsFor": 26,
                "goalsAgainst": 17
              },
              "away": {
                "played": 5,
                "wins": 3,
                "draws": 0,
                "losses": 2,
                "goalsFor": 8,
                "goalsAgainst": 5
              }
            },
            {
              "teamId": 2756,
              "team": "Suwon City FC",
              "rank": 5,
              "points": 33,
              "goalsDiff": 14,
              "form": "WDWWD",
              "all": {
                "played": 18,
                "wins": 9,
                "draws": 6,
                "losses": 3,
                "goalsFor": 38,
                "goalsAgainst": 24
              },
              "home": {
                "played": 8,
                "wins": 4,
                "draws": 4,
                "losses": 0,
                "goalsFor": 18,
                "goalsAgainst": 8
              },
              "away": {
                "played": 10,
                "wins": 5,
                "draws": 2,
                "losses": 3,
                "goalsFor": 20,
                "goalsAgainst": 16
              }
            },
            {
              "teamId": 2747,
              "team": "Daegu FC",
              "rank": 6,
              "points": 32,
              "goalsDiff": 8,
              "form": "LLDWW",
              "all": {
                "played": 19,
                "wins": 9,
                "draws": 5,
                "losses": 5,
                "goalsFor": 38,
                "goalsAgainst": 30
              },
              "home": {
                "played": 10,
                "wins": 6,
                "draws": 1,
                "losses": 3,
                "goalsFor": 20,
                "goalsAgainst": 14
              },
              "away": {
                "played": 9,
                "wins": 3,
                "draws": 4,
                "losses": 2,
                "goalsFor": 18,
                "goalsAgainst": 16
              }
            },
            {
              "teamId": 2753,
              "team": "Asan Mugunghwa",
              "rank": 7,
              "points": 27,
              "goalsDiff": 5,
              "form": "WLLDW",
              "all": {
                "played": 19,
                "wins": 7,
                "draws": 6,
                "losses": 6,
                "goalsFor": 28,
                "goalsAgainst": 23
              },
              "home": {
                "played": 10,
                "wins": 5,
                "draws": 3,
                "losses": 2,
                "goalsFor": 18,
                "goalsAgainst": 13
              },
              "away": {
                "played": 9,
                "wins": 2,
                "draws": 3,
                "losses": 4,
                "goalsFor": 10,
                "goalsAgainst": 10
              }
            },
            {
              "teamId": 7078,
              "team": "Gimpo Citizen",
              "rank": 8,
              "points": 27,
              "goalsDiff": 1,
              "form": "DDDLL",
              "all": {
                "played": 19,
                "wins": 6,
                "draws": 9,
                "losses": 4,
                "goalsFor": 22,
                "goalsAgainst": 21
              },
              "home": {
                "played": 5,
                "wins": 0,
                "draws": 4,
                "losses": 1,
                "goalsFor": 5,
                "goalsAgainst": 7
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
              "points": 25,
              "goalsDiff": 0,
              "form": "DDWDW",
              "all": {
                "played": 19,
                "wins": 6,
                "draws": 7,
                "losses": 6,
                "goalsFor": 27,
                "goalsAgainst": 27
              },
              "home": {
                "played": 10,
                "wins": 5,
                "draws": 2,
                "losses": 3,
                "goalsFor": 19,
                "goalsAgainst": 15
              },
              "away": {
                "played": 9,
                "wins": 1,
                "draws": 5,
                "losses": 3,
                "goalsFor": 8,
                "goalsAgainst": 12
              }
            },
            {
              "teamId": 7098,
              "team": "Paju Citizen",
              "rank": 10,
              "points": 21,
              "goalsDiff": -5,
              "form": "WLDWL",
              "all": {
                "played": 19,
                "wins": 6,
                "draws": 3,
                "losses": 10,
                "goalsFor": 19,
                "goalsAgainst": 24
              },
              "home": {
                "played": 9,
                "wins": 2,
                "draws": 1,
                "losses": 6,
                "goalsFor": 8,
                "goalsAgainst": 11
              },
              "away": {
                "played": 10,
                "wins": 4,
                "draws": 2,
                "losses": 4,
                "goalsFor": 11,
                "goalsAgainst": 13
              }
            },
            {
              "teamId": 7060,
              "team": "Cheonan City",
              "rank": 11,
              "points": 20,
              "goalsDiff": -2,
              "form": "DLLLL",
              "all": {
                "played": 19,
                "wins": 4,
                "draws": 8,
                "losses": 7,
                "goalsFor": 24,
                "goalsAgainst": 26
              },
              "home": {
                "played": 10,
                "wins": 2,
                "draws": 6,
                "losses": 2,
                "goalsFor": 9,
                "goalsAgainst": 9
              },
              "away": {
                "played": 9,
                "wins": 2,
                "draws": 2,
                "losses": 5,
                "goalsFor": 15,
                "goalsAgainst": 17
              }
            },
            {
              "teamId": 2757,
              "team": "Seongnam FC",
              "rank": 12,
              "points": 20,
              "goalsDiff": -3,
              "form": "LWLLD",
              "all": {
                "played": 18,
                "wins": 4,
                "draws": 8,
                "losses": 6,
                "goalsFor": 17,
                "goalsAgainst": 20
              },
              "home": {
                "played": 9,
                "wins": 2,
                "draws": 5,
                "losses": 2,
                "goalsFor": 7,
                "goalsAgainst": 7
              },
              "away": {
                "played": 9,
                "wins": 2,
                "draws": 3,
                "losses": 4,
                "goalsFor": 10,
                "goalsAgainst": 13
              }
            },
            {
              "teamId": 9171,
              "team": "Yongin City",
              "rank": 13,
              "points": 19,
              "goalsDiff": -6,
              "form": "DDLDW",
              "all": {
                "played": 19,
                "wins": 3,
                "draws": 10,
                "losses": 6,
                "goalsFor": 23,
                "goalsAgainst": 29
              },
              "home": {
                "played": 10,
                "wins": 1,
                "draws": 5,
                "losses": 4,
                "goalsFor": 12,
                "goalsAgainst": 16
              },
              "away": {
                "played": 9,
                "wins": 2,
                "draws": 5,
                "losses": 2,
                "goalsFor": 11,
                "goalsAgainst": 13
              }
            },
            {
              "teamId": 7061,
              "team": "Cheongju",
              "rank": 14,
              "points": 19,
              "goalsDiff": -7,
              "form": "DDWDL",
              "all": {
                "played": 19,
                "wins": 2,
                "draws": 13,
                "losses": 4,
                "goalsFor": 23,
                "goalsAgainst": 30
              },
              "home": {
                "played": 10,
                "wins": 1,
                "draws": 5,
                "losses": 4,
                "goalsFor": 11,
                "goalsAgainst": 19
              },
              "away": {
                "played": 9,
                "wins": 1,
                "draws": 8,
                "losses": 0,
                "goalsFor": 12,
                "goalsAgainst": 11
              }
            },
            {
              "teamId": 2758,
              "team": "Ansan Greeners",
              "rank": 15,
              "points": 18,
              "goalsDiff": -16,
              "form": "DWLWL",
              "all": {
                "played": 19,
                "wins": 5,
                "draws": 3,
                "losses": 11,
                "goalsFor": 20,
                "goalsAgainst": 36
              },
              "home": {
                "played": 12,
                "wins": 2,
                "draws": 2,
                "losses": 8,
                "goalsFor": 13,
                "goalsAgainst": 24
              },
              "away": {
                "played": 7,
                "wins": 3,
                "draws": 1,
                "losses": 3,
                "goalsFor": 7,
                "goalsAgainst": 12
              }
            },
            {
              "teamId": 2760,
              "team": "Jeonnam Dragons",
              "rank": 16,
              "points": 13,
              "goalsDiff": -13,
              "form": "LDWLD",
              "all": {
                "played": 19,
                "wins": 2,
                "draws": 7,
                "losses": 10,
                "goalsFor": 21,
                "goalsAgainst": 34
              },
              "home": {
                "played": 7,
                "wins": 1,
                "draws": 3,
                "losses": 3,
                "goalsFor": 8,
                "goalsAgainst": 10
              },
              "away": {
                "played": 12,
                "wins": 1,
                "draws": 4,
                "losses": 7,
                "goalsFor": 13,
                "goalsAgainst": 24
              }
            },
            {
              "teamId": 7076,
              "team": "Gimhae City",
              "rank": 17,
              "points": 11,
              "goalsDiff": -20,
              "form": "DDWLD",
              "all": {
                "played": 18,
                "wins": 2,
                "draws": 5,
                "losses": 11,
                "goalsFor": 16,
                "goalsAgainst": 36
              },
              "home": {
                "played": 8,
                "wins": 0,
                "draws": 1,
                "losses": 7,
                "goalsFor": 6,
                "goalsAgainst": 20
              },
              "away": {
                "played": 10,
                "wins": 2,
                "draws": 4,
                "losses": 4,
                "goalsFor": 10,
                "goalsAgainst": 16
              }
            }
          ],
          "teams": [
            {
              "teamId": 2751,
              "team": "Gyeongnam FC",
              "form": "LLDWDLLWLWDWLDWDWDD",
              "all": {
                "played": 19,
                "wins": 6,
                "draws": 7,
                "losses": 6,
                "goalsFor": 27,
                "goalsAgainst": 27
              },
              "home": {
                "played": 10,
                "wins": 5,
                "draws": 2,
                "losses": 3,
                "goalsFor": 19,
                "goalsAgainst": 15
              },
              "away": {
                "played": 9,
                "wins": 1,
                "draws": 5,
                "losses": 3,
                "goalsFor": 8,
                "goalsAgainst": 12
              }
            },
            {
              "teamId": 2747,
              "team": "Daegu FC",
              "form": "WWWLLDDLWDWWDWWWDLL",
              "all": {
                "played": 19,
                "wins": 9,
                "draws": 5,
                "losses": 5,
                "goalsFor": 38,
                "goalsAgainst": 30
              },
              "home": {
                "played": 10,
                "wins": 6,
                "draws": 1,
                "losses": 3,
                "goalsFor": 20,
                "goalsAgainst": 14
              },
              "away": {
                "played": 9,
                "wins": 3,
                "draws": 4,
                "losses": 2,
                "goalsFor": 18,
                "goalsAgainst": 16
              }
            },
            {
              "teamId": 2753,
              "team": "Asan Mugunghwa",
              "form": "WLLWWDDDLWLDWDWDLLW",
              "all": {
                "played": 19,
                "wins": 7,
                "draws": 6,
                "losses": 6,
                "goalsFor": 28,
                "goalsAgainst": 23
              },
              "home": {
                "played": 10,
                "wins": 5,
                "draws": 3,
                "losses": 2,
                "goalsFor": 18,
                "goalsAgainst": 13
              },
              "away": {
                "played": 9,
                "wins": 2,
                "draws": 3,
                "losses": 4,
                "goalsFor": 10,
                "goalsAgainst": 10
              }
            },
            {
              "teamId": 2758,
              "team": "Ansan Greeners",
              "form": "WLLDDLWLWLLLLLLWLWD",
              "all": {
                "played": 19,
                "wins": 5,
                "draws": 3,
                "losses": 11,
                "goalsFor": 20,
                "goalsAgainst": 36
              },
              "home": {
                "played": 12,
                "wins": 2,
                "draws": 2,
                "losses": 8,
                "goalsFor": 13,
                "goalsAgainst": 24
              },
              "away": {
                "played": 7,
                "wins": 3,
                "draws": 1,
                "losses": 3,
                "goalsFor": 7,
                "goalsAgainst": 12
              }
            },
            {
              "teamId": 2765,
              "team": "Suwon Bluewings",
              "form": "WWWWWDLWWLDWLWWLDWD",
              "all": {
                "played": 19,
                "wins": 11,
                "draws": 4,
                "losses": 4,
                "goalsFor": 28,
                "goalsAgainst": 17
              },
              "home": {
                "played": 9,
                "wins": 5,
                "draws": 3,
                "losses": 1,
                "goalsFor": 11,
                "goalsAgainst": 6
              },
              "away": {
                "played": 10,
                "wins": 6,
                "draws": 1,
                "losses": 3,
                "goalsFor": 17,
                "goalsAgainst": 11
              }
            },
            {
              "teamId": 7076,
              "team": "Gimhae City",
              "form": "LLLLLDDLLLLWLDLWDD",
              "all": {
                "played": 18,
                "wins": 2,
                "draws": 5,
                "losses": 11,
                "goalsFor": 16,
                "goalsAgainst": 36
              },
              "home": {
                "played": 8,
                "wins": 0,
                "draws": 1,
                "losses": 7,
                "goalsFor": 6,
                "goalsAgainst": 20
              },
              "away": {
                "played": 10,
                "wins": 2,
                "draws": 4,
                "losses": 4,
                "goalsFor": 10,
                "goalsAgainst": 16
              }
            },
            {
              "teamId": 7078,
              "team": "Gimpo Citizen",
              "form": "WWLDDWDDLDWWWDLLDDD",
              "all": {
                "played": 19,
                "wins": 6,
                "draws": 9,
                "losses": 4,
                "goalsFor": 22,
                "goalsAgainst": 21
              },
              "home": {
                "played": 5,
                "wins": 0,
                "draws": 4,
                "losses": 1,
                "goalsFor": 5,
                "goalsAgainst": 7
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
              "teamId": 7061,
              "team": "Cheongju",
              "form": "LDDDLDDDDDDDLWLDWDD",
              "all": {
                "played": 19,
                "wins": 2,
                "draws": 13,
                "losses": 4,
                "goalsFor": 23,
                "goalsAgainst": 30
              },
              "home": {
                "played": 10,
                "wins": 1,
                "draws": 5,
                "losses": 4,
                "goalsFor": 11,
                "goalsAgainst": 19
              },
              "away": {
                "played": 9,
                "wins": 1,
                "draws": 8,
                "losses": 0,
                "goalsFor": 12,
                "goalsAgainst": 11
              }
            },
            {
              "teamId": 7087,
              "team": "Hwaseong",
              "form": "LWDDLLWDWWDWWWLLWWW",
              "all": {
                "played": 19,
                "wins": 10,
                "draws": 4,
                "losses": 5,
                "goalsFor": 34,
                "goalsAgainst": 22
              },
              "home": {
                "played": 14,
                "wins": 7,
                "draws": 4,
                "losses": 3,
                "goalsFor": 26,
                "goalsAgainst": 17
              },
              "away": {
                "played": 5,
                "wins": 3,
                "draws": 0,
                "losses": 2,
                "goalsFor": 8,
                "goalsAgainst": 5
              }
            },
            {
              "teamId": 2749,
              "team": "Seoul E-Land FC",
              "form": "LWLDWWWWLWLDWWLWDWW",
              "all": {
                "played": 19,
                "wins": 11,
                "draws": 3,
                "losses": 5,
                "goalsFor": 36,
                "goalsAgainst": 25
              },
              "home": {
                "played": 9,
                "wins": 5,
                "draws": 1,
                "losses": 3,
                "goalsFor": 19,
                "goalsAgainst": 14
              },
              "away": {
                "played": 10,
                "wins": 6,
                "draws": 2,
                "losses": 2,
                "goalsFor": 17,
                "goalsAgainst": 11
              }
            },
            {
              "teamId": 9171,
              "team": "Yongin City",
              "form": "DLLDLDLWLWDDDDWDLDD",
              "all": {
                "played": 19,
                "wins": 3,
                "draws": 10,
                "losses": 6,
                "goalsFor": 23,
                "goalsAgainst": 29
              },
              "home": {
                "played": 10,
                "wins": 1,
                "draws": 5,
                "losses": 4,
                "goalsFor": 12,
                "goalsAgainst": 16
              },
              "away": {
                "played": 9,
                "wins": 2,
                "draws": 5,
                "losses": 2,
                "goalsFor": 11,
                "goalsAgainst": 13
              }
            },
            {
              "teamId": 2752,
              "team": "Busan I Park",
              "form": "DWWWWWWWLWWLWDDWLLL",
              "all": {
                "played": 19,
                "wins": 11,
                "draws": 3,
                "losses": 5,
                "goalsFor": 37,
                "goalsAgainst": 27
              },
              "home": {
                "played": 10,
                "wins": 6,
                "draws": 2,
                "losses": 2,
                "goalsFor": 19,
                "goalsAgainst": 12
              },
              "away": {
                "played": 9,
                "wins": 5,
                "draws": 1,
                "losses": 3,
                "goalsFor": 18,
                "goalsAgainst": 15
              }
            }
          ],
          "fixtures": [
            {
              "fixtureId": 1510405,
              "kickoff": "2026-08-07T19:30:00+09:00",
              "status": "NS",
              "homeTeamId": 2751,
              "homeTeam": "Gyeongnam FC",
              "awayTeamId": 2747,
              "awayTeam": "Daegu FC",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1510403,
              "kickoff": "2026-08-07T19:30:00+09:00",
              "status": "NS",
              "homeTeamId": 2753,
              "homeTeam": "Asan Mugunghwa",
              "awayTeamId": 2758,
              "awayTeam": "Ansan Greeners",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1510407,
              "kickoff": "2026-08-07T19:30:00+09:00",
              "status": "NS",
              "homeTeamId": 2765,
              "homeTeam": "Suwon Bluewings",
              "awayTeamId": 7076,
              "awayTeam": "Gimhae City",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1510404,
              "kickoff": "2026-08-07T19:30:00+09:00",
              "status": "NS",
              "homeTeamId": 7078,
              "homeTeam": "Gimpo Citizen",
              "awayTeamId": 7061,
              "awayTeam": "Cheongju",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1510406,
              "kickoff": "2026-08-07T19:30:00+09:00",
              "status": "NS",
              "homeTeamId": 7087,
              "homeTeam": "Hwaseong",
              "awayTeamId": 2749,
              "awayTeam": "Seoul E-Land FC",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1510408,
              "kickoff": "2026-08-07T19:30:00+09:00",
              "status": "NS",
              "homeTeamId": 9171,
              "homeTeam": "Yongin City",
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
    },
    {
      "date": "2026-08-08",
      "updatedAt": "2026-08-05T10:46:12.996Z",
      "leagues": [
        {
          "key": "EREDIVISIE",
          "leagueId": 88,
          "season": "2026",
          "standings": [
            {
              "teamId": 420,
              "team": "Cambuur",
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
              "teamId": 205,
              "team": "Fortuna Sittard",
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
              "teamId": 427,
              "team": "Telstar",
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
              "teamId": 193,
              "team": "PEC Zwolle",
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
              "teamId": 197,
              "team": "PSV Eindhoven",
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
              "teamId": 194,
              "team": "Ajax",
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
              "teamId": 415,
              "team": "Twente",
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
              "teamId": 210,
              "team": "Heerenveen",
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
              "teamId": 209,
              "team": "Feyenoord",
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
              "teamId": 413,
              "team": "NEC Nijmegen",
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
              "teamId": 207,
              "team": "Utrecht",
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
              "teamId": 201,
              "team": "AZ Alkmaar",
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
              "teamId": 426,
              "team": "Sparta Rotterdam",
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
              "teamId": 195,
              "team": "Willem II",
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
              "teamId": 196,
              "team": "Excelsior",
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
              "teamId": 198,
              "team": "ADO Den Haag",
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
              "teamId": 410,
              "team": "GO Ahead Eagles",
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
              "teamId": 202,
              "team": "Groningen",
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
              "teamId": 420,
              "team": "Cambuur",
              "form": "",
              "all": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "home": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "away": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 196,
              "team": "Excelsior",
              "form": "",
              "all": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "home": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "away": {
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
              "teamId": 427,
              "team": "Telstar",
              "form": "",
              "all": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "home": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
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
              "fixtureId": 1552117,
              "kickoff": "2026-08-08T03:00:00+09:00",
              "status": "NS",
              "homeTeamId": 420,
              "homeTeam": "Cambuur",
              "awayTeamId": 196,
              "awayTeam": "Excelsior",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1552118,
              "kickoff": "2026-08-08T23:30:00+09:00",
              "status": "NS",
              "homeTeamId": 413,
              "homeTeam": "NEC Nijmegen",
              "awayTeamId": 427,
              "awayTeam": "Telstar",
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
              "teamId": 15130,
              "team": "Estrela",
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
              "teamId": 224,
              "team": "Guimaraes",
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
              "teamId": 230,
              "team": "Estoril",
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
              "teamId": 762,
              "team": "GIL Vicente",
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
              "teamId": 226,
              "team": "Rio Ave",
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
              "teamId": 227,
              "team": "Santa Clara",
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
              "teamId": 215,
              "team": "Moreirense",
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
              "teamId": 212,
              "team": "FC Porto",
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
              "teamId": 228,
              "team": "Sporting CP",
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
              "teamId": 211,
              "team": "Benfica",
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
              "teamId": 214,
              "team": "Maritimo",
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
              "teamId": 217,
              "team": "SC Braga",
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
              "teamId": 225,
              "team": "Nacional",
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
              "teamId": 240,
              "team": "Arouca",
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
              "teamId": 4716,
              "team": "Casa Pia",
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
              "teamId": 238,
              "team": "Academico Viseu",
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
              "teamId": 4724,
              "team": "Alverca",
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
              "teamId": 242,
              "team": "Famalicao",
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
              "teamId": 230,
              "team": "Estoril",
              "form": "",
              "all": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "home": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "away": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 242,
              "team": "Famalicao",
              "form": "",
              "all": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "home": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "away": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 214,
              "team": "Maritimo",
              "form": "",
              "all": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "home": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "away": {
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
              "form": "",
              "all": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "home": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
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
              "fixtureId": 1575447,
              "kickoff": "2026-08-08T04:15:00+09:00",
              "status": "NS",
              "homeTeamId": 230,
              "homeTeam": "Estoril",
              "awayTeamId": 242,
              "awayTeam": "Famalicao",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1575451,
              "kickoff": "2026-08-08T23:30:00+09:00",
              "status": "NS",
              "homeTeamId": 214,
              "homeTeam": "Maritimo",
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
          "key": "SCOTTISH_PREMIERSHIP",
          "leagueId": 179,
          "season": "2026",
          "standings": [
            {
              "teamId": 251,
              "team": "ST Mirren",
              "rank": 1,
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
              "teamId": 258,
              "team": "ST Johnstone",
              "rank": 2,
              "points": 3,
              "goalsDiff": 1,
              "form": "W",
              "all": {
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 4,
                "goalsAgainst": 3
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
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 256,
              "team": "Motherwell",
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
              "teamId": 252,
              "team": "Aberdeen",
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
              "teamId": 247,
              "team": "Celtic",
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
              "teamId": 1386,
              "team": "Dundee Utd",
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
              "teamId": 257,
              "team": "Rangers",
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
              "teamId": 250,
              "team": "Kilmarnock",
              "rank": 8,
              "points": 0,
              "goalsDiff": -1,
              "form": "L",
              "all": {
                "played": 1,
                "wins": 0,
                "draws": 0,
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
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 254,
              "team": "Heart Of Midlothian",
              "rank": 9,
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
              "teamId": 249,
              "team": "Hibernian",
              "rank": 10,
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
              "teamId": 253,
              "team": "Dundee",
              "rank": 11,
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
              "teamId": 1389,
              "team": "Falkirk",
              "rank": 12,
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
            }
          ],
          "teams": [
            {
              "teamId": 251,
              "team": "ST Mirren",
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
              "teamId": 258,
              "team": "ST Johnstone",
              "form": "W",
              "all": {
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 4,
                "goalsAgainst": 3
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
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 253,
              "team": "Dundee",
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
              "teamId": 252,
              "team": "Aberdeen",
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
            }
          ],
          "fixtures": [
            {
              "fixtureId": 1556637,
              "kickoff": "2026-08-08T23:00:00+09:00",
              "status": "NS",
              "homeTeamId": 251,
              "homeTeam": "ST Mirren",
              "awayTeamId": 258,
              "awayTeam": "ST Johnstone",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1556634,
              "kickoff": "2026-08-08T23:00:00+09:00",
              "status": "NS",
              "homeTeamId": 253,
              "homeTeam": "Dundee",
              "awayTeamId": 252,
              "awayTeam": "Aberdeen",
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
              "teamId": 740,
              "team": "Antwerp",
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
              "teamId": 260,
              "team": "OH Leuven",
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
              "teamId": 259,
              "team": "Lommel United",
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
              "teamId": 554,
              "team": "Anderlecht",
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
              "teamId": 741,
              "team": "Cercle Brugge",
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
              "teamId": 736,
              "team": "Charleroi",
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
              "teamId": 569,
              "team": "Club Brugge KV",
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
              "teamId": 742,
              "team": "Genk",
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
              "teamId": 631,
              "team": "Gent",
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
              "teamId": 266,
              "team": "KV Mechelen",
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
              "teamId": 733,
              "team": "Standard Liege",
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
              "teamId": 735,
              "team": "St. Truiden",
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
              "teamId": 600,
              "team": "Zulte Waregem",
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
              "teamId": 261,
              "team": "KVC Westerlo",
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
              "teamId": 734,
              "team": "Kortrijk",
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
              "teamId": 1393,
              "team": "Union St. Gilloise",
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
              "teamId": 738,
              "team": "SK Beveren",
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
              "teamId": 5902,
              "team": "RAAL La Louvière",
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
              "teamId": 734,
              "team": "Kortrijk",
              "form": "",
              "all": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "home": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
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
              "fixtureId": 1558581,
              "kickoff": "2026-08-08T03:45:00+09:00",
              "status": "NS",
              "homeTeamId": 569,
              "homeTeam": "Club Brugge KV",
              "awayTeamId": 734,
              "awayTeam": "Kortrijk",
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
              "points": 43,
              "goalsDiff": 18,
              "form": "DLWWD",
              "all": {
                "played": 21,
                "wins": 13,
                "draws": 4,
                "losses": 4,
                "goalsFor": 35,
                "goalsAgainst": 17
              },
              "home": {
                "played": 10,
                "wins": 5,
                "draws": 2,
                "losses": 3,
                "goalsFor": 16,
                "goalsAgainst": 8
              },
              "away": {
                "played": 11,
                "wins": 8,
                "draws": 2,
                "losses": 1,
                "goalsFor": 19,
                "goalsAgainst": 9
              }
            },
            {
              "teamId": 2762,
              "team": "Jeonbuk Motors",
              "rank": 2,
              "points": 34,
              "goalsDiff": 11,
              "form": "DWDLW",
              "all": {
                "played": 21,
                "wins": 9,
                "draws": 7,
                "losses": 5,
                "goalsFor": 27,
                "goalsAgainst": 16
              },
              "home": {
                "played": 10,
                "wins": 5,
                "draws": 2,
                "losses": 3,
                "goalsFor": 16,
                "goalsAgainst": 10
              },
              "away": {
                "played": 11,
                "wins": 4,
                "draws": 5,
                "losses": 2,
                "goalsFor": 11,
                "goalsAgainst": 6
              }
            },
            {
              "teamId": 2746,
              "team": "Gangwon FC",
              "rank": 3,
              "points": 32,
              "goalsDiff": 8,
              "form": "LLDWD",
              "all": {
                "played": 21,
                "wins": 8,
                "draws": 8,
                "losses": 5,
                "goalsFor": 25,
                "goalsAgainst": 17
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
                "played": 11,
                "wins": 4,
                "draws": 4,
                "losses": 3,
                "goalsFor": 11,
                "goalsAgainst": 8
              }
            },
            {
              "teamId": 2767,
              "team": "Ulsan Hyundai FC",
              "rank": 4,
              "points": 31,
              "goalsDiff": 1,
              "form": "WWLDL",
              "all": {
                "played": 20,
                "wins": 9,
                "draws": 4,
                "losses": 7,
                "goalsFor": 30,
                "goalsAgainst": 29
              },
              "home": {
                "played": 10,
                "wins": 4,
                "draws": 1,
                "losses": 5,
                "goalsFor": 15,
                "goalsAgainst": 17
              },
              "away": {
                "played": 10,
                "wins": 5,
                "draws": 3,
                "losses": 2,
                "goalsFor": 15,
                "goalsAgainst": 12
              }
            },
            {
              "teamId": 2748,
              "team": "FC Anyang",
              "rank": 5,
              "points": 30,
              "goalsDiff": 5,
              "form": "LWWDW",
              "all": {
                "played": 20,
                "wins": 7,
                "draws": 9,
                "losses": 4,
                "goalsFor": 28,
                "goalsAgainst": 23
              },
              "home": {
                "played": 10,
                "wins": 2,
                "draws": 5,
                "losses": 3,
                "goalsFor": 12,
                "goalsAgainst": 13
              },
              "away": {
                "played": 10,
                "wins": 5,
                "draws": 4,
                "losses": 1,
                "goalsFor": 16,
                "goalsAgainst": 10
              }
            },
            {
              "teamId": 2763,
              "team": "Incheon United",
              "rank": 6,
              "points": 29,
              "goalsDiff": 4,
              "form": "DDWWL",
              "all": {
                "played": 21,
                "wins": 8,
                "draws": 5,
                "losses": 8,
                "goalsFor": 28,
                "goalsAgainst": 24
              },
              "home": {
                "played": 11,
                "wins": 4,
                "draws": 1,
                "losses": 6,
                "goalsFor": 12,
                "goalsAgainst": 12
              },
              "away": {
                "played": 10,
                "wins": 4,
                "draws": 4,
                "losses": 2,
                "goalsFor": 16,
                "goalsAgainst": 12
              }
            },
            {
              "teamId": 2761,
              "team": "Jeju United FC",
              "rank": 7,
              "points": 28,
              "goalsDiff": -1,
              "form": "DWDWD",
              "all": {
                "played": 21,
                "wins": 7,
                "draws": 7,
                "losses": 7,
                "goalsFor": 22,
                "goalsAgainst": 23
              },
              "home": {
                "played": 12,
                "wins": 3,
                "draws": 5,
                "losses": 4,
                "goalsFor": 12,
                "goalsAgainst": 15
              },
              "away": {
                "played": 9,
                "wins": 4,
                "draws": 2,
                "losses": 3,
                "goalsFor": 10,
                "goalsAgainst": 8
              }
            },
            {
              "teamId": 2764,
              "team": "Pohang Steelers",
              "rank": 8,
              "points": 28,
              "goalsDiff": -2,
              "form": "LLLLW",
              "all": {
                "played": 21,
                "wins": 8,
                "draws": 4,
                "losses": 9,
                "goalsFor": 20,
                "goalsAgainst": 22
              },
              "home": {
                "played": 10,
                "wins": 3,
                "draws": 2,
                "losses": 5,
                "goalsFor": 4,
                "goalsAgainst": 8
              },
              "away": {
                "played": 11,
                "wins": 5,
                "draws": 2,
                "losses": 4,
                "goalsFor": 16,
                "goalsAgainst": 14
              }
            },
            {
              "teamId": 2750,
              "team": "Daejeon Citizen",
              "rank": 9,
              "points": 23,
              "goalsDiff": 2,
              "form": "WLDDD",
              "all": {
                "played": 21,
                "wins": 5,
                "draws": 8,
                "losses": 8,
                "goalsFor": 25,
                "goalsAgainst": 23
              },
              "home": {
                "played": 11,
                "wins": 1,
                "draws": 5,
                "losses": 5,
                "goalsFor": 9,
                "goalsAgainst": 14
              },
              "away": {
                "played": 10,
                "wins": 4,
                "draws": 3,
                "losses": 3,
                "goalsFor": 16,
                "goalsAgainst": 9
              }
            },
            {
              "teamId": 2768,
              "team": "Gimcheon Sangmu FC",
              "rank": 10,
              "points": 23,
              "goalsDiff": -6,
              "form": "WWDLD",
              "all": {
                "played": 21,
                "wins": 4,
                "draws": 11,
                "losses": 6,
                "goalsFor": 22,
                "goalsAgainst": 28
              },
              "home": {
                "played": 10,
                "wins": 1,
                "draws": 6,
                "losses": 3,
                "goalsFor": 10,
                "goalsAgainst": 16
              },
              "away": {
                "played": 11,
                "wins": 3,
                "draws": 5,
                "losses": 3,
                "goalsFor": 12,
                "goalsAgainst": 12
              }
            },
            {
              "teamId": 2745,
              "team": "Bucheon FC 1995",
              "rank": 11,
              "points": 23,
              "goalsDiff": -4,
              "form": "WDLLD",
              "all": {
                "played": 21,
                "wins": 5,
                "draws": 8,
                "losses": 8,
                "goalsFor": 21,
                "goalsAgainst": 25
              },
              "home": {
                "played": 10,
                "wins": 1,
                "draws": 4,
                "losses": 5,
                "goalsFor": 9,
                "goalsAgainst": 14
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
              "teamId": 2759,
              "team": "Gwangju FC",
              "rank": 12,
              "points": 10,
              "goalsDiff": -36,
              "form": "LLDDL",
              "all": {
                "played": 21,
                "wins": 1,
                "draws": 7,
                "losses": 13,
                "goalsFor": 11,
                "goalsAgainst": 47
              },
              "home": {
                "played": 11,
                "wins": 1,
                "draws": 4,
                "losses": 6,
                "goalsFor": 8,
                "goalsAgainst": 21
              },
              "away": {
                "played": 10,
                "wins": 0,
                "draws": 3,
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
              "form": "WDLDDLWDLLWLLDWDDLLDW",
              "all": {
                "played": 21,
                "wins": 5,
                "draws": 8,
                "losses": 8,
                "goalsFor": 21,
                "goalsAgainst": 25
              },
              "home": {
                "played": 10,
                "wins": 1,
                "draws": 4,
                "losses": 5,
                "goalsFor": 9,
                "goalsAgainst": 14
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
              "teamId": 2759,
              "team": "Gwangju FC",
              "form": "DWDDLLLLLLLLDLLDLDDLL",
              "all": {
                "played": 21,
                "wins": 1,
                "draws": 7,
                "losses": 13,
                "goalsFor": 11,
                "goalsAgainst": 47
              },
              "home": {
                "played": 11,
                "wins": 1,
                "draws": 4,
                "losses": 6,
                "goalsFor": 8,
                "goalsAgainst": 21
              },
              "away": {
                "played": 10,
                "wins": 0,
                "draws": 3,
                "losses": 7,
                "goalsFor": 3,
                "goalsAgainst": 26
              }
            },
            {
              "teamId": 2748,
              "team": "FC Anyang",
              "form": "DWDLLDDWDWLDDDWLWDWWL",
              "all": {
                "played": 21,
                "wins": 7,
                "draws": 9,
                "losses": 5,
                "goalsFor": 29,
                "goalsAgainst": 26
              },
              "home": {
                "played": 10,
                "wins": 2,
                "draws": 5,
                "losses": 3,
                "goalsFor": 12,
                "goalsAgainst": 13
              },
              "away": {
                "played": 11,
                "wins": 5,
                "draws": 4,
                "losses": 2,
                "goalsFor": 17,
                "goalsAgainst": 13
              }
            },
            {
              "teamId": 2750,
              "team": "Daejeon Citizen",
              "form": "DDDWLLLWLWWDLLLDDDDLW",
              "all": {
                "played": 21,
                "wins": 5,
                "draws": 8,
                "losses": 8,
                "goalsFor": 25,
                "goalsAgainst": 23
              },
              "home": {
                "played": 11,
                "wins": 1,
                "draws": 5,
                "losses": 5,
                "goalsFor": 9,
                "goalsAgainst": 14
              },
              "away": {
                "played": 10,
                "wins": 4,
                "draws": 3,
                "losses": 3,
                "goalsFor": 16,
                "goalsAgainst": 9
              }
            },
            {
              "teamId": 2762,
              "team": "Jeonbuk Motors",
              "form": "LDDWWWLDLWWWDDWLWLDWD",
              "all": {
                "played": 21,
                "wins": 9,
                "draws": 7,
                "losses": 5,
                "goalsFor": 27,
                "goalsAgainst": 16
              },
              "home": {
                "played": 10,
                "wins": 5,
                "draws": 2,
                "losses": 3,
                "goalsFor": 16,
                "goalsAgainst": 10
              },
              "away": {
                "played": 11,
                "wins": 4,
                "draws": 5,
                "losses": 2,
                "goalsFor": 11,
                "goalsAgainst": 6
              }
            },
            {
              "teamId": 2761,
              "team": "Jeju United FC",
              "form": "DLLLDWWDWLLWWLLDDWDWD",
              "all": {
                "played": 21,
                "wins": 7,
                "draws": 7,
                "losses": 7,
                "goalsFor": 22,
                "goalsAgainst": 23
              },
              "home": {
                "played": 12,
                "wins": 3,
                "draws": 5,
                "losses": 4,
                "goalsFor": 12,
                "goalsAgainst": 15
              },
              "away": {
                "played": 9,
                "wins": 4,
                "draws": 2,
                "losses": 3,
                "goalsFor": 10,
                "goalsAgainst": 8
              }
            },
            {
              "teamId": 2764,
              "team": "Pohang Steelers",
              "form": "DDLDWWLLWLWDWWLWWLLLL",
              "all": {
                "played": 21,
                "wins": 8,
                "draws": 4,
                "losses": 9,
                "goalsFor": 20,
                "goalsAgainst": 22
              },
              "home": {
                "played": 10,
                "wins": 3,
                "draws": 2,
                "losses": 5,
                "goalsFor": 4,
                "goalsAgainst": 8
              },
              "away": {
                "played": 11,
                "wins": 5,
                "draws": 2,
                "losses": 4,
                "goalsFor": 16,
                "goalsAgainst": 14
              }
            },
            {
              "teamId": 2767,
              "team": "Ulsan Hyundai FC",
              "form": "WWWDLWLWDLLWWWLDLDLWW",
              "all": {
                "played": 21,
                "wins": 10,
                "draws": 4,
                "losses": 7,
                "goalsFor": 33,
                "goalsAgainst": 30
              },
              "home": {
                "played": 11,
                "wins": 5,
                "draws": 1,
                "losses": 5,
                "goalsFor": 18,
                "goalsAgainst": 18
              },
              "away": {
                "played": 10,
                "wins": 5,
                "draws": 3,
                "losses": 2,
                "goalsFor": 15,
                "goalsAgainst": 12
              }
            },
            {
              "teamId": 2768,
              "team": "Gimcheon Sangmu FC",
              "form": "DDDDDLDDLWWLLDLDDLDWW",
              "all": {
                "played": 21,
                "wins": 4,
                "draws": 11,
                "losses": 6,
                "goalsFor": 22,
                "goalsAgainst": 28
              },
              "home": {
                "played": 10,
                "wins": 1,
                "draws": 6,
                "losses": 3,
                "goalsFor": 10,
                "goalsAgainst": 16
              },
              "away": {
                "played": 11,
                "wins": 3,
                "draws": 5,
                "losses": 3,
                "goalsFor": 12,
                "goalsAgainst": 12
              }
            },
            {
              "teamId": 2766,
              "team": "FC Seoul",
              "form": "WWWWDWWLWWLDLWWWDWWLD",
              "all": {
                "played": 21,
                "wins": 13,
                "draws": 4,
                "losses": 4,
                "goalsFor": 35,
                "goalsAgainst": 17
              },
              "home": {
                "played": 10,
                "wins": 5,
                "draws": 2,
                "losses": 3,
                "goalsFor": 16,
                "goalsAgainst": 8
              },
              "away": {
                "played": 11,
                "wins": 8,
                "draws": 2,
                "losses": 1,
                "goalsFor": 19,
                "goalsAgainst": 9
              }
            }
          ],
          "fixtures": [
            {
              "fixtureId": 1507023,
              "kickoff": "2026-08-08T19:30:00+09:00",
              "status": "NS",
              "homeTeamId": 2745,
              "homeTeam": "Bucheon FC 1995",
              "awayTeamId": 2759,
              "awayTeam": "Gwangju FC",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1507022,
              "kickoff": "2026-08-08T19:30:00+09:00",
              "status": "NS",
              "homeTeamId": 2748,
              "homeTeam": "FC Anyang",
              "awayTeamId": 2750,
              "awayTeam": "Daejeon Citizen",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1507026,
              "kickoff": "2026-08-08T19:30:00+09:00",
              "status": "NS",
              "homeTeamId": 2762,
              "homeTeam": "Jeonbuk Motors",
              "awayTeamId": 2761,
              "awayTeam": "Jeju United FC",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1507027,
              "kickoff": "2026-08-08T19:30:00+09:00",
              "status": "NS",
              "homeTeamId": 2764,
              "homeTeam": "Pohang Steelers",
              "awayTeamId": 2767,
              "awayTeam": "Ulsan Hyundai FC",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1507025,
              "kickoff": "2026-08-08T19:30:00+09:00",
              "status": "NS",
              "homeTeamId": 2768,
              "homeTeam": "Gimcheon Sangmu FC",
              "awayTeamId": 2766,
              "awayTeam": "FC Seoul",
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
              "points": 37,
              "goalsDiff": 11,
              "form": "DWDLW",
              "all": {
                "played": 19,
                "wins": 11,
                "draws": 4,
                "losses": 4,
                "goalsFor": 28,
                "goalsAgainst": 17
              },
              "home": {
                "played": 9,
                "wins": 5,
                "draws": 3,
                "losses": 1,
                "goalsFor": 11,
                "goalsAgainst": 6
              },
              "away": {
                "played": 10,
                "wins": 6,
                "draws": 1,
                "losses": 3,
                "goalsFor": 17,
                "goalsAgainst": 11
              }
            },
            {
              "teamId": 2749,
              "team": "Seoul E-Land FC",
              "rank": 2,
              "points": 36,
              "goalsDiff": 11,
              "form": "WWDWL",
              "all": {
                "played": 19,
                "wins": 11,
                "draws": 3,
                "losses": 5,
                "goalsFor": 36,
                "goalsAgainst": 25
              },
              "home": {
                "played": 9,
                "wins": 5,
                "draws": 1,
                "losses": 3,
                "goalsFor": 19,
                "goalsAgainst": 14
              },
              "away": {
                "played": 10,
                "wins": 6,
                "draws": 2,
                "losses": 2,
                "goalsFor": 17,
                "goalsAgainst": 11
              }
            },
            {
              "teamId": 2752,
              "team": "Busan I Park",
              "rank": 3,
              "points": 36,
              "goalsDiff": 10,
              "form": "LLLWD",
              "all": {
                "played": 19,
                "wins": 11,
                "draws": 3,
                "losses": 5,
                "goalsFor": 37,
                "goalsAgainst": 27
              },
              "home": {
                "played": 10,
                "wins": 6,
                "draws": 2,
                "losses": 2,
                "goalsFor": 19,
                "goalsAgainst": 12
              },
              "away": {
                "played": 9,
                "wins": 5,
                "draws": 1,
                "losses": 3,
                "goalsFor": 18,
                "goalsAgainst": 15
              }
            },
            {
              "teamId": 7087,
              "team": "Hwaseong",
              "rank": 4,
              "points": 34,
              "goalsDiff": 12,
              "form": "WWWLL",
              "all": {
                "played": 19,
                "wins": 10,
                "draws": 4,
                "losses": 5,
                "goalsFor": 34,
                "goalsAgainst": 22
              },
              "home": {
                "played": 14,
                "wins": 7,
                "draws": 4,
                "losses": 3,
                "goalsFor": 26,
                "goalsAgainst": 17
              },
              "away": {
                "played": 5,
                "wins": 3,
                "draws": 0,
                "losses": 2,
                "goalsFor": 8,
                "goalsAgainst": 5
              }
            },
            {
              "teamId": 2756,
              "team": "Suwon City FC",
              "rank": 5,
              "points": 33,
              "goalsDiff": 14,
              "form": "WDWWD",
              "all": {
                "played": 18,
                "wins": 9,
                "draws": 6,
                "losses": 3,
                "goalsFor": 38,
                "goalsAgainst": 24
              },
              "home": {
                "played": 8,
                "wins": 4,
                "draws": 4,
                "losses": 0,
                "goalsFor": 18,
                "goalsAgainst": 8
              },
              "away": {
                "played": 10,
                "wins": 5,
                "draws": 2,
                "losses": 3,
                "goalsFor": 20,
                "goalsAgainst": 16
              }
            },
            {
              "teamId": 2747,
              "team": "Daegu FC",
              "rank": 6,
              "points": 32,
              "goalsDiff": 8,
              "form": "LLDWW",
              "all": {
                "played": 19,
                "wins": 9,
                "draws": 5,
                "losses": 5,
                "goalsFor": 38,
                "goalsAgainst": 30
              },
              "home": {
                "played": 10,
                "wins": 6,
                "draws": 1,
                "losses": 3,
                "goalsFor": 20,
                "goalsAgainst": 14
              },
              "away": {
                "played": 9,
                "wins": 3,
                "draws": 4,
                "losses": 2,
                "goalsFor": 18,
                "goalsAgainst": 16
              }
            },
            {
              "teamId": 2753,
              "team": "Asan Mugunghwa",
              "rank": 7,
              "points": 27,
              "goalsDiff": 5,
              "form": "WLLDW",
              "all": {
                "played": 19,
                "wins": 7,
                "draws": 6,
                "losses": 6,
                "goalsFor": 28,
                "goalsAgainst": 23
              },
              "home": {
                "played": 10,
                "wins": 5,
                "draws": 3,
                "losses": 2,
                "goalsFor": 18,
                "goalsAgainst": 13
              },
              "away": {
                "played": 9,
                "wins": 2,
                "draws": 3,
                "losses": 4,
                "goalsFor": 10,
                "goalsAgainst": 10
              }
            },
            {
              "teamId": 7078,
              "team": "Gimpo Citizen",
              "rank": 8,
              "points": 27,
              "goalsDiff": 1,
              "form": "DDDLL",
              "all": {
                "played": 19,
                "wins": 6,
                "draws": 9,
                "losses": 4,
                "goalsFor": 22,
                "goalsAgainst": 21
              },
              "home": {
                "played": 5,
                "wins": 0,
                "draws": 4,
                "losses": 1,
                "goalsFor": 5,
                "goalsAgainst": 7
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
              "points": 25,
              "goalsDiff": 0,
              "form": "DDWDW",
              "all": {
                "played": 19,
                "wins": 6,
                "draws": 7,
                "losses": 6,
                "goalsFor": 27,
                "goalsAgainst": 27
              },
              "home": {
                "played": 10,
                "wins": 5,
                "draws": 2,
                "losses": 3,
                "goalsFor": 19,
                "goalsAgainst": 15
              },
              "away": {
                "played": 9,
                "wins": 1,
                "draws": 5,
                "losses": 3,
                "goalsFor": 8,
                "goalsAgainst": 12
              }
            },
            {
              "teamId": 7098,
              "team": "Paju Citizen",
              "rank": 10,
              "points": 21,
              "goalsDiff": -5,
              "form": "WLDWL",
              "all": {
                "played": 19,
                "wins": 6,
                "draws": 3,
                "losses": 10,
                "goalsFor": 19,
                "goalsAgainst": 24
              },
              "home": {
                "played": 9,
                "wins": 2,
                "draws": 1,
                "losses": 6,
                "goalsFor": 8,
                "goalsAgainst": 11
              },
              "away": {
                "played": 10,
                "wins": 4,
                "draws": 2,
                "losses": 4,
                "goalsFor": 11,
                "goalsAgainst": 13
              }
            },
            {
              "teamId": 7060,
              "team": "Cheonan City",
              "rank": 11,
              "points": 20,
              "goalsDiff": -2,
              "form": "DLLLL",
              "all": {
                "played": 19,
                "wins": 4,
                "draws": 8,
                "losses": 7,
                "goalsFor": 24,
                "goalsAgainst": 26
              },
              "home": {
                "played": 10,
                "wins": 2,
                "draws": 6,
                "losses": 2,
                "goalsFor": 9,
                "goalsAgainst": 9
              },
              "away": {
                "played": 9,
                "wins": 2,
                "draws": 2,
                "losses": 5,
                "goalsFor": 15,
                "goalsAgainst": 17
              }
            },
            {
              "teamId": 2757,
              "team": "Seongnam FC",
              "rank": 12,
              "points": 20,
              "goalsDiff": -3,
              "form": "LWLLD",
              "all": {
                "played": 18,
                "wins": 4,
                "draws": 8,
                "losses": 6,
                "goalsFor": 17,
                "goalsAgainst": 20
              },
              "home": {
                "played": 9,
                "wins": 2,
                "draws": 5,
                "losses": 2,
                "goalsFor": 7,
                "goalsAgainst": 7
              },
              "away": {
                "played": 9,
                "wins": 2,
                "draws": 3,
                "losses": 4,
                "goalsFor": 10,
                "goalsAgainst": 13
              }
            },
            {
              "teamId": 9171,
              "team": "Yongin City",
              "rank": 13,
              "points": 19,
              "goalsDiff": -6,
              "form": "DDLDW",
              "all": {
                "played": 19,
                "wins": 3,
                "draws": 10,
                "losses": 6,
                "goalsFor": 23,
                "goalsAgainst": 29
              },
              "home": {
                "played": 10,
                "wins": 1,
                "draws": 5,
                "losses": 4,
                "goalsFor": 12,
                "goalsAgainst": 16
              },
              "away": {
                "played": 9,
                "wins": 2,
                "draws": 5,
                "losses": 2,
                "goalsFor": 11,
                "goalsAgainst": 13
              }
            },
            {
              "teamId": 7061,
              "team": "Cheongju",
              "rank": 14,
              "points": 19,
              "goalsDiff": -7,
              "form": "DDWDL",
              "all": {
                "played": 19,
                "wins": 2,
                "draws": 13,
                "losses": 4,
                "goalsFor": 23,
                "goalsAgainst": 30
              },
              "home": {
                "played": 10,
                "wins": 1,
                "draws": 5,
                "losses": 4,
                "goalsFor": 11,
                "goalsAgainst": 19
              },
              "away": {
                "played": 9,
                "wins": 1,
                "draws": 8,
                "losses": 0,
                "goalsFor": 12,
                "goalsAgainst": 11
              }
            },
            {
              "teamId": 2758,
              "team": "Ansan Greeners",
              "rank": 15,
              "points": 18,
              "goalsDiff": -16,
              "form": "DWLWL",
              "all": {
                "played": 19,
                "wins": 5,
                "draws": 3,
                "losses": 11,
                "goalsFor": 20,
                "goalsAgainst": 36
              },
              "home": {
                "played": 12,
                "wins": 2,
                "draws": 2,
                "losses": 8,
                "goalsFor": 13,
                "goalsAgainst": 24
              },
              "away": {
                "played": 7,
                "wins": 3,
                "draws": 1,
                "losses": 3,
                "goalsFor": 7,
                "goalsAgainst": 12
              }
            },
            {
              "teamId": 2760,
              "team": "Jeonnam Dragons",
              "rank": 16,
              "points": 13,
              "goalsDiff": -13,
              "form": "LDWLD",
              "all": {
                "played": 19,
                "wins": 2,
                "draws": 7,
                "losses": 10,
                "goalsFor": 21,
                "goalsAgainst": 34
              },
              "home": {
                "played": 7,
                "wins": 1,
                "draws": 3,
                "losses": 3,
                "goalsFor": 8,
                "goalsAgainst": 10
              },
              "away": {
                "played": 12,
                "wins": 1,
                "draws": 4,
                "losses": 7,
                "goalsFor": 13,
                "goalsAgainst": 24
              }
            },
            {
              "teamId": 7076,
              "team": "Gimhae City",
              "rank": 17,
              "points": 11,
              "goalsDiff": -20,
              "form": "DDWLD",
              "all": {
                "played": 18,
                "wins": 2,
                "draws": 5,
                "losses": 11,
                "goalsFor": 16,
                "goalsAgainst": 36
              },
              "home": {
                "played": 8,
                "wins": 0,
                "draws": 1,
                "losses": 7,
                "goalsFor": 6,
                "goalsAgainst": 20
              },
              "away": {
                "played": 10,
                "wins": 2,
                "draws": 4,
                "losses": 4,
                "goalsFor": 10,
                "goalsAgainst": 16
              }
            }
          ],
          "teams": [
            {
              "teamId": 2757,
              "team": "Seongnam FC",
              "form": "DDWDWLLDWDDLDDLLWL",
              "all": {
                "played": 18,
                "wins": 4,
                "draws": 8,
                "losses": 6,
                "goalsFor": 17,
                "goalsAgainst": 20
              },
              "home": {
                "played": 9,
                "wins": 2,
                "draws": 5,
                "losses": 2,
                "goalsFor": 7,
                "goalsAgainst": 7
              },
              "away": {
                "played": 9,
                "wins": 2,
                "draws": 3,
                "losses": 4,
                "goalsFor": 10,
                "goalsAgainst": 13
              }
            },
            {
              "teamId": 7060,
              "team": "Cheonan City",
              "form": "DLDDWDWDWLDLWDLLLLD",
              "all": {
                "played": 19,
                "wins": 4,
                "draws": 8,
                "losses": 7,
                "goalsFor": 24,
                "goalsAgainst": 26
              },
              "home": {
                "played": 10,
                "wins": 2,
                "draws": 6,
                "losses": 2,
                "goalsFor": 9,
                "goalsAgainst": 9
              },
              "away": {
                "played": 9,
                "wins": 2,
                "draws": 2,
                "losses": 5,
                "goalsFor": 15,
                "goalsAgainst": 17
              }
            },
            {
              "teamId": 7098,
              "team": "Paju Citizen",
              "form": "LLWWLWLWLDDLLLLWDLW",
              "all": {
                "played": 19,
                "wins": 6,
                "draws": 3,
                "losses": 10,
                "goalsFor": 19,
                "goalsAgainst": 24
              },
              "home": {
                "played": 9,
                "wins": 2,
                "draws": 1,
                "losses": 6,
                "goalsFor": 8,
                "goalsAgainst": 11
              },
              "away": {
                "played": 10,
                "wins": 4,
                "draws": 2,
                "losses": 4,
                "goalsFor": 11,
                "goalsAgainst": 13
              }
            },
            {
              "teamId": 2756,
              "team": "Suwon City FC",
              "form": "WWWWLDLDWDWLDDWWDW",
              "all": {
                "played": 18,
                "wins": 9,
                "draws": 6,
                "losses": 3,
                "goalsFor": 38,
                "goalsAgainst": 24
              },
              "home": {
                "played": 8,
                "wins": 4,
                "draws": 4,
                "losses": 0,
                "goalsFor": 18,
                "goalsAgainst": 8
              },
              "away": {
                "played": 10,
                "wins": 5,
                "draws": 2,
                "losses": 3,
                "goalsFor": 20,
                "goalsAgainst": 16
              }
            }
          ],
          "fixtures": [
            {
              "fixtureId": 1510410,
              "kickoff": "2026-08-08T19:30:00+09:00",
              "status": "NS",
              "homeTeamId": 2757,
              "homeTeam": "Seongnam FC",
              "awayTeamId": 7060,
              "awayTeam": "Cheonan City",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1510409,
              "kickoff": "2026-08-08T19:30:00+09:00",
              "status": "NS",
              "homeTeamId": 7098,
              "homeTeam": "Paju Citizen",
              "awayTeamId": 2756,
              "awayTeam": "Suwon City FC",
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
