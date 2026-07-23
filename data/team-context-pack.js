(function attachTeamContextPack(root, factory) {
  const pack = factory();
  if (typeof module !== "undefined" && module.exports) module.exports = pack;
  if (root) root.ODDS_ARCHIVE_TEAM_CONTEXT_PACK = pack;
})(typeof window !== "undefined" ? window : globalThis, function createTeamContextPack() {
  return {
  "version": "team-context-v3",
  "date": "2026-07-23",
  "updatedAt": "2026-07-23T10:34:44.119Z",
  "collection": {
    "dates": [
      "2026-07-23",
      "2026-07-24",
      "2026-07-25",
      "2026-07-26"
    ],
    "requestGroups": 7,
    "skippedGroups": 97,
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
          "teamId": 3402,
          "team": "Omonia Nicosia",
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
          "teamId": 664,
          "team": "Kairat Almaty",
          "form": "WWL",
          "all": {
            "played": 3,
            "wins": 2,
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
            "goalsFor": 2,
            "goalsAgainst": 1
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
          "teamId": 646,
          "team": "Levski Sofia",
          "form": "DWW",
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
            "goalsFor": 5,
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
            "goalsFor": 1,
            "goalsAgainst": 0
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
          "teamId": 3327,
          "team": "Egnatia Rrogozhinë",
          "form": "DWD",
          "all": {
            "played": 3,
            "wins": 1,
            "draws": 2,
            "losses": 0,
            "goalsFor": 10,
            "goalsAgainst": 5
          },
          "home": {
            "played": 2,
            "wins": 1,
            "draws": 1,
            "losses": 0,
            "goalsFor": 9,
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
          "teamId": 4360,
          "team": "Celje",
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
          "fixtureId": 1591936,
          "kickoff": "2026-07-23T02:00:00+09:00",
          "status": "FT",
          "homeTeamId": 3402,
          "homeTeam": "Omonia Nicosia",
          "awayTeamId": 664,
          "awayTeam": "Kairat Almaty",
          "injuriesChecked": true,
          "injuries": [],
          "lineupsChecked": false,
          "lineups": []
        },
        {
          "fixtureId": 1591935,
          "kickoff": "2026-07-23T02:30:00+09:00",
          "status": "FT",
          "homeTeamId": 646,
          "homeTeam": "Levski Sofia",
          "awayTeamId": 632,
          "awayTeam": "Universitatea Craiova",
          "injuriesChecked": true,
          "injuries": [],
          "lineupsChecked": false,
          "lineups": []
        },
        {
          "fixtureId": 1591933,
          "kickoff": "2026-07-23T04:00:00+09:00",
          "status": "FT",
          "homeTeamId": 3327,
          "homeTeam": "Egnatia Rrogozhinë",
          "awayTeamId": 4360,
          "awayTeam": "Celje",
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
      "date": "2026-07-22",
      "updatedAt": "2026-07-22T10:33:56.476Z",
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
              "teamId": 667,
              "team": "Lincoln Red Imps FC",
              "form": "WDL",
              "all": {
                "played": 3,
                "wins": 1,
                "draws": 1,
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
                "played": 2,
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 1,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 3502,
              "team": "Saburtalo",
              "form": "WDL",
              "all": {
                "played": 3,
                "wins": 1,
                "draws": 1,
                "losses": 1,
                "goalsFor": 5,
                "goalsAgainst": 6
              },
              "home": {
                "played": 2,
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 2,
                "goalsAgainst": 4
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
              "teamId": 656,
              "team": "Slovan Bratislava",
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
              "teamId": 3683,
              "team": "Ararat-Armenia",
              "form": "WLW",
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
                "wins": 2,
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
              "teamId": 652,
              "team": "Shamrock Rovers",
              "form": "LWL",
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
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 5,
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
              "teamId": 13976,
              "team": "Sabah FA",
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
                "played": 2,
                "wins": 2,
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
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 1165,
              "team": "KuPS",
              "form": "WLL",
              "all": {
                "played": 3,
                "wins": 1,
                "draws": 0,
                "losses": 2,
                "goalsFor": 4,
                "goalsAgainst": 4
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
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 2,
                "goalsAgainst": 1
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
            },
            {
              "teamId": 347,
              "team": "Lech Poznan",
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
              "teamId": 611,
              "team": "Fenerbahçe",
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
              "teamId": 340,
              "team": "Gornik Zabrze",
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
              "teamId": 1012,
              "team": "FC Thun",
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
              "teamId": 620,
              "team": "Dinamo Zagreb",
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
              "teamId": 637,
              "team": "Sturm Graz",
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
              "teamId": 254,
              "team": "Heart Of Midlothian",
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
              "teamId": 701,
              "team": "KI Klaksvik",
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
              "teamId": 3872,
              "team": "Kauno Žalgiris",
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
                "goalsFor": 3,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 278,
              "team": "Vikingur Reykjavik",
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
                "draws": 1,
                "losses": 0,
                "goalsFor": 2,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 563,
              "team": "Hapoel Beer Sheva",
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
              "teamId": 5354,
              "team": "Larne",
              "form": "WWL",
              "all": {
                "played": 3,
                "wins": 2,
                "draws": 0,
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
                "goalsAgainst": 5
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
              "teamId": 598,
              "team": "FK Crvena Zvezda",
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
                "goalsAgainst": 0
              }
            }
          ],
          "fixtures": [
            {
              "fixtureId": 1589418,
              "kickoff": "2026-07-22T01:00:00+09:00",
              "status": "FT",
              "homeTeamId": 2240,
              "homeTeam": "Mjallby AIF",
              "awayTeamId": 667,
              "awayTeam": "Lincoln Red Imps FC",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1589416,
              "kickoff": "2026-07-22T01:00:00+09:00",
              "status": "FT",
              "homeTeamId": 3502,
              "homeTeam": "Saburtalo",
              "awayTeamId": 656,
              "awayTeam": "Slovan Bratislava",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1589415,
              "kickoff": "2026-07-22T01:00:00+09:00",
              "status": "FT",
              "homeTeamId": 3683,
              "homeTeam": "Ararat-Armenia",
              "awayTeamId": 652,
              "awayTeam": "Shamrock Rovers",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1589419,
              "kickoff": "2026-07-22T01:00:00+09:00",
              "status": "FT",
              "homeTeamId": 13976,
              "homeTeam": "Sabah FA",
              "awayTeamId": 1165,
              "awayTeam": "KuPS",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1556501,
              "kickoff": "2026-07-22T02:00:00+09:00",
              "status": "FT",
              "homeTeamId": 406,
              "homeTeam": "Aarhus",
              "awayTeamId": 347,
              "awayTeam": "Lech Poznan",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1556502,
              "kickoff": "2026-07-22T03:00:00+09:00",
              "status": "FT",
              "homeTeamId": 611,
              "homeTeam": "Fenerbahçe",
              "awayTeamId": 340,
              "awayTeam": "Gornik Zabrze",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1556504,
              "kickoff": "2026-07-22T03:00:00+09:00",
              "status": "FT",
              "homeTeamId": 1012,
              "homeTeam": "FC Thun",
              "awayTeamId": 620,
              "awayTeam": "Dinamo Zagreb",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1556503,
              "kickoff": "2026-07-22T03:30:00+09:00",
              "status": "FT",
              "homeTeamId": 637,
              "homeTeam": "Sturm Graz",
              "awayTeamId": 254,
              "awayTeam": "Heart Of Midlothian",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1591934,
              "kickoff": "2026-07-22T03:45:00+09:00",
              "status": "FT",
              "homeTeamId": 701,
              "homeTeam": "KI Klaksvik",
              "awayTeamId": 3872,
              "awayTeam": "Kauno Žalgiris",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1589420,
              "kickoff": "2026-07-22T04:00:00+09:00",
              "status": "FT",
              "homeTeamId": 278,
              "homeTeam": "Vikingur Reykjavik",
              "awayTeamId": 563,
              "awayTeam": "Hapoel Beer Sheva",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1589417,
              "kickoff": "2026-07-22T04:00:00+09:00",
              "status": "FT",
              "homeTeamId": 5354,
              "homeTeam": "Larne",
              "awayTeamId": 598,
              "awayTeam": "FK Crvena Zvezda",
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
              "points": 39,
              "goalsDiff": 18,
              "form": "WDWWW",
              "all": {
                "played": 18,
                "wins": 12,
                "draws": 3,
                "losses": 3,
                "goalsFor": 31,
                "goalsAgainst": 13
              },
              "home": {
                "played": 8,
                "wins": 4,
                "draws": 2,
                "losses": 2,
                "goalsFor": 12,
                "goalsAgainst": 4
              },
              "away": {
                "played": 10,
                "wins": 8,
                "draws": 1,
                "losses": 1,
                "goalsFor": 19,
                "goalsAgainst": 9
              }
            },
            {
              "teamId": 2746,
              "team": "Gangwon FC",
              "rank": 2,
              "points": 32,
              "goalsDiff": 12,
              "form": "DWDWW",
              "all": {
                "played": 19,
                "wins": 8,
                "draws": 8,
                "losses": 3,
                "goalsFor": 24,
                "goalsAgainst": 12
              },
              "home": {
                "played": 9,
                "wins": 4,
                "draws": 4,
                "losses": 1,
                "goalsFor": 14,
                "goalsAgainst": 6
              },
              "away": {
                "played": 10,
                "wins": 4,
                "draws": 4,
                "losses": 2,
                "goalsFor": 10,
                "goalsAgainst": 6
              }
            },
            {
              "teamId": 2762,
              "team": "Jeonbuk Motors",
              "rank": 3,
              "points": 30,
              "goalsDiff": 9,
              "form": "DLWLW",
              "all": {
                "played": 19,
                "wins": 8,
                "draws": 6,
                "losses": 5,
                "goalsFor": 25,
                "goalsAgainst": 16
              },
              "home": {
                "played": 9,
                "wins": 5,
                "draws": 1,
                "losses": 3,
                "goalsFor": 16,
                "goalsAgainst": 10
              },
              "away": {
                "played": 10,
                "wins": 3,
                "draws": 5,
                "losses": 2,
                "goalsFor": 9,
                "goalsAgainst": 6
              }
            },
            {
              "teamId": 2767,
              "team": "Ulsan Hyundai FC",
              "rank": 4,
              "points": 28,
              "goalsDiff": -1,
              "form": "LDLDL",
              "all": {
                "played": 19,
                "wins": 8,
                "draws": 4,
                "losses": 7,
                "goalsFor": 27,
                "goalsAgainst": 28
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
                "played": 9,
                "wins": 4,
                "draws": 3,
                "losses": 2,
                "goalsFor": 12,
                "goalsAgainst": 11
              }
            },
            {
              "teamId": 2764,
              "team": "Pohang Steelers",
              "rank": 5,
              "points": 28,
              "goalsDiff": 3,
              "form": "LWWLW",
              "all": {
                "played": 18,
                "wins": 8,
                "draws": 4,
                "losses": 6,
                "goalsFor": 19,
                "goalsAgainst": 16
              },
              "home": {
                "played": 8,
                "wins": 3,
                "draws": 2,
                "losses": 3,
                "goalsFor": 4,
                "goalsAgainst": 5
              },
              "away": {
                "played": 10,
                "wins": 5,
                "draws": 2,
                "losses": 3,
                "goalsFor": 15,
                "goalsAgainst": 11
              }
            },
            {
              "teamId": 2763,
              "team": "Incheon United",
              "rank": 6,
              "points": 27,
              "goalsDiff": 4,
              "form": "WWLLW",
              "all": {
                "played": 19,
                "wins": 8,
                "draws": 3,
                "losses": 8,
                "goalsFor": 24,
                "goalsAgainst": 20
              },
              "home": {
                "played": 10,
                "wins": 4,
                "draws": 0,
                "losses": 6,
                "goalsFor": 11,
                "goalsAgainst": 11
              },
              "away": {
                "played": 9,
                "wins": 4,
                "draws": 3,
                "losses": 2,
                "goalsFor": 13,
                "goalsAgainst": 9
              }
            },
            {
              "teamId": 2748,
              "team": "FC Anyang",
              "rank": 7,
              "points": 24,
              "goalsDiff": 3,
              "form": "DWLWD",
              "all": {
                "played": 18,
                "wins": 5,
                "draws": 9,
                "losses": 4,
                "goalsFor": 23,
                "goalsAgainst": 20
              },
              "home": {
                "played": 9,
                "wins": 1,
                "draws": 5,
                "losses": 3,
                "goalsFor": 10,
                "goalsAgainst": 12
              },
              "away": {
                "played": 9,
                "wins": 4,
                "draws": 4,
                "losses": 1,
                "goalsFor": 13,
                "goalsAgainst": 8
              }
            },
            {
              "teamId": 2761,
              "team": "Jeju United FC",
              "rank": 8,
              "points": 24,
              "goalsDiff": -2,
              "form": "DWDDL",
              "all": {
                "played": 19,
                "wins": 6,
                "draws": 6,
                "losses": 7,
                "goalsFor": 17,
                "goalsAgainst": 19
              },
              "home": {
                "played": 11,
                "wins": 3,
                "draws": 4,
                "losses": 4,
                "goalsFor": 9,
                "goalsAgainst": 12
              },
              "away": {
                "played": 8,
                "wins": 3,
                "draws": 2,
                "losses": 3,
                "goalsFor": 8,
                "goalsAgainst": 7
              }
            },
            {
              "teamId": 2750,
              "team": "Daejeon Citizen",
              "rank": 9,
              "points": 20,
              "goalsDiff": 1,
              "form": "DDDDL",
              "all": {
                "played": 19,
                "wins": 4,
                "draws": 8,
                "losses": 7,
                "goalsFor": 21,
                "goalsAgainst": 20
              },
              "home": {
                "played": 10,
                "wins": 0,
                "draws": 5,
                "losses": 5,
                "goalsFor": 7,
                "goalsAgainst": 14
              },
              "away": {
                "played": 9,
                "wins": 4,
                "draws": 3,
                "losses": 2,
                "goalsFor": 14,
                "goalsAgainst": 6
              }
            },
            {
              "teamId": 2745,
              "team": "Bucheon FC 1995",
              "rank": 10,
              "points": 19,
              "goalsDiff": -6,
              "form": "LDDWD",
              "all": {
                "played": 18,
                "wins": 4,
                "draws": 7,
                "losses": 7,
                "goalsFor": 15,
                "goalsAgainst": 21
              },
              "home": {
                "played": 9,
                "wins": 1,
                "draws": 4,
                "losses": 4,
                "goalsFor": 7,
                "goalsAgainst": 11
              },
              "away": {
                "played": 9,
                "wins": 3,
                "draws": 3,
                "losses": 3,
                "goalsFor": 8,
                "goalsAgainst": 10
              }
            },
            {
              "teamId": 2768,
              "team": "Gimcheon Sangmu FC",
              "rank": 11,
              "points": 16,
              "goalsDiff": -8,
              "form": "LDDLD",
              "all": {
                "played": 18,
                "wins": 2,
                "draws": 10,
                "losses": 6,
                "goalsFor": 17,
                "goalsAgainst": 25
              },
              "home": {
                "played": 9,
                "wins": 0,
                "draws": 6,
                "losses": 3,
                "goalsFor": 7,
                "goalsAgainst": 14
              },
              "away": {
                "played": 9,
                "wins": 2,
                "draws": 4,
                "losses": 3,
                "goalsFor": 10,
                "goalsAgainst": 11
              }
            },
            {
              "teamId": 2759,
              "team": "Gwangju FC",
              "rank": 12,
              "points": 9,
              "goalsDiff": -33,
              "form": "DLDLL",
              "all": {
                "played": 18,
                "wins": 1,
                "draws": 6,
                "losses": 11,
                "goalsFor": 9,
                "goalsAgainst": 42
              },
              "home": {
                "played": 9,
                "wins": 1,
                "draws": 3,
                "losses": 5,
                "goalsFor": 6,
                "goalsAgainst": 18
              },
              "away": {
                "played": 9,
                "wins": 0,
                "draws": 3,
                "losses": 6,
                "goalsFor": 3,
                "goalsAgainst": 24
              }
            }
          ],
          "teams": [
            {
              "teamId": 2745,
              "team": "Bucheon FC 1995",
              "form": "WDLDDLWDLLWLLDWDDL",
              "all": {
                "played": 18,
                "wins": 4,
                "draws": 7,
                "losses": 7,
                "goalsFor": 15,
                "goalsAgainst": 21
              },
              "home": {
                "played": 9,
                "wins": 1,
                "draws": 4,
                "losses": 4,
                "goalsFor": 7,
                "goalsAgainst": 11
              },
              "away": {
                "played": 9,
                "wins": 3,
                "draws": 3,
                "losses": 3,
                "goalsFor": 8,
                "goalsAgainst": 10
              }
            },
            {
              "teamId": 2748,
              "team": "FC Anyang",
              "form": "DWDLLDDWDWLDDDWLWD",
              "all": {
                "played": 18,
                "wins": 5,
                "draws": 9,
                "losses": 4,
                "goalsFor": 23,
                "goalsAgainst": 20
              },
              "home": {
                "played": 9,
                "wins": 1,
                "draws": 5,
                "losses": 3,
                "goalsFor": 10,
                "goalsAgainst": 12
              },
              "away": {
                "played": 9,
                "wins": 4,
                "draws": 4,
                "losses": 1,
                "goalsFor": 13,
                "goalsAgainst": 8
              }
            },
            {
              "teamId": 2759,
              "team": "Gwangju FC",
              "form": "DWDDLLLLLLLLDLLDLD",
              "all": {
                "played": 18,
                "wins": 1,
                "draws": 6,
                "losses": 11,
                "goalsFor": 9,
                "goalsAgainst": 42
              },
              "home": {
                "played": 9,
                "wins": 1,
                "draws": 3,
                "losses": 5,
                "goalsFor": 6,
                "goalsAgainst": 18
              },
              "away": {
                "played": 9,
                "wins": 0,
                "draws": 3,
                "losses": 6,
                "goalsFor": 3,
                "goalsAgainst": 24
              }
            },
            {
              "teamId": 2768,
              "team": "Gimcheon Sangmu FC",
              "form": "DDDDDLDDLWWLLDLDDL",
              "all": {
                "played": 18,
                "wins": 2,
                "draws": 10,
                "losses": 6,
                "goalsFor": 17,
                "goalsAgainst": 25
              },
              "home": {
                "played": 9,
                "wins": 0,
                "draws": 6,
                "losses": 3,
                "goalsFor": 7,
                "goalsAgainst": 14
              },
              "away": {
                "played": 9,
                "wins": 2,
                "draws": 4,
                "losses": 3,
                "goalsFor": 10,
                "goalsAgainst": 11
              }
            },
            {
              "teamId": 2766,
              "team": "FC Seoul",
              "form": "WWWWDWWLWWLDLWWWDW",
              "all": {
                "played": 18,
                "wins": 12,
                "draws": 3,
                "losses": 3,
                "goalsFor": 31,
                "goalsAgainst": 13
              },
              "home": {
                "played": 8,
                "wins": 4,
                "draws": 2,
                "losses": 2,
                "goalsFor": 12,
                "goalsAgainst": 4
              },
              "away": {
                "played": 10,
                "wins": 8,
                "draws": 1,
                "losses": 1,
                "goalsFor": 19,
                "goalsAgainst": 9
              }
            },
            {
              "teamId": 2764,
              "team": "Pohang Steelers",
              "form": "DDLDWWLLWLWDWWLWWL",
              "all": {
                "played": 18,
                "wins": 8,
                "draws": 4,
                "losses": 6,
                "goalsFor": 19,
                "goalsAgainst": 16
              },
              "home": {
                "played": 8,
                "wins": 3,
                "draws": 2,
                "losses": 3,
                "goalsFor": 4,
                "goalsAgainst": 5
              },
              "away": {
                "played": 10,
                "wins": 5,
                "draws": 2,
                "losses": 3,
                "goalsFor": 15,
                "goalsAgainst": 11
              }
            }
          ],
          "fixtures": [
            {
              "fixtureId": 1507007,
              "kickoff": "2026-07-22T19:30:00+09:00",
              "status": "1H",
              "homeTeamId": 2745,
              "homeTeam": "Bucheon FC 1995",
              "awayTeamId": 2748,
              "awayTeam": "FC Anyang",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": true,
              "lineups": [
                {
                  "teamId": 2745,
                  "team": "Bucheon FC 1995",
                  "formation": "3-5-2",
                  "coach": "Ou-Ghu Kwon",
                  "starters": [
                    "Hyeon-yeob kim",
                    "Lee Jae-won",
                    "Patrick William",
                    "Sung-wook Hong",
                    "Thiaguinho Santos",
                    "Jong-Woo Kim",
                    "Sang-jun Kim",
                    "Seung-bin Kim",
                    "Galego",
                    "Rodrigo Bassani",
                    "Vitor Gabriel"
                  ]
                },
                {
                  "teamId": 2748,
                  "team": "FC Anyang",
                  "formation": "4-3-3",
                  "coach": "Byeong-hoon Ryu",
                  "starters": [
                    "Jung-hoon Kim",
                    "Kang Ji-hun",
                    "Kyung-won Kwon",
                    "Yeong-chan Kim",
                    "Kim Jae-Hyun",
                    "Matheus Oliveira",
                    "Jung-hyun Kim",
                    "Branislav Knežević",
                    "Geon-Joo Choi",
                    "Breno Herculano",
                    "Moon Seong-Woo"
                  ]
                }
              ]
            },
            {
              "fixtureId": 1507008,
              "kickoff": "2026-07-22T19:30:00+09:00",
              "status": "1H",
              "homeTeamId": 2759,
              "homeTeam": "Gwangju FC",
              "awayTeamId": 2768,
              "awayTeam": "Gimcheon Sangmu FC",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": true,
              "lineups": [
                {
                  "teamId": 2759,
                  "team": "Gwangju FC",
                  "formation": "4-1-4-1",
                  "coach": "Jeong-kyu Lee",
                  "starters": [
                    "Kyeong-min Kim",
                    "Won-jae Park",
                    "Teun van Grunsven",
                    "Yeong-kyu Ahn",
                    "João Pedro",
                    "Yu Je-ho",
                    "Emir Saitoski",
                    "Kyoung-Rok Choi",
                    "Min-seo Moon",
                    "Seung-un Ha",
                    "John Iredale"
                  ]
                },
                {
                  "teamId": 2768,
                  "team": "Gimcheon Sangmu FC",
                  "formation": "4-4-2",
                  "coach": "Seung-jin Joo",
                  "starters": [
                    "Jong-beom Baek",
                    "Tae-hwan Kim",
                    "Byeon Jun-soo",
                    "Deok-geun Lim",
                    "Park Jin-Seong",
                    "Jae-hyeon Go",
                    "Tae-jun Park",
                    "Lee Kang-Hyeon",
                    "Yun-sang Hong",
                    "Se-jin Park",
                    "Jeong Jae-Min"
                  ]
                }
              ]
            },
            {
              "fixtureId": 1507009,
              "kickoff": "2026-07-22T19:30:00+09:00",
              "status": "1H",
              "homeTeamId": 2766,
              "homeTeam": "FC Seoul",
              "awayTeamId": 2764,
              "awayTeam": "Pohang Steelers",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": true,
              "lineups": [
                {
                  "teamId": 2766,
                  "team": "FC Seoul",
                  "formation": "4-4-2",
                  "coach": "Gi-Dong Kim",
                  "starters": [
                    "Gu Sung-yun",
                    "Choi Jun",
                    "Yazan Al-Arab",
                    "Juan Antonio Ros",
                    "Kim Jin-su",
                    "Seung-Won Jeong",
                    "Son Jeong-beom",
                    "Hrvoje Babec",
                    "Min-kyu Song",
                    "Anderson Oliveira",
                    "Patryk Klimala"
                  ]
                },
                {
                  "teamId": 2764,
                  "team": "Pohang Steelers",
                  "formation": "3-4-3",
                  "coach": "Tae-Ha Park",
                  "starters": [
                    "In-jae Hwang",
                    "Kwang-hun Shin",
                    "Park Chan-Yong",
                    "Dong-jin Kim",
                    "Ye-Sung Kim",
                    "Sung-Yueng Ki",
                    "Chang-woo Lee",
                    "Ho-jin Kim",
                    "Hwang Seo-woong",
                    "Lee Ho-jae",
                    "Jakob Tranziska"
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "date": "2026-07-23",
      "updatedAt": "2026-07-23T10:34:28.692Z",
      "leagues": [
        {
          "key": "UCL",
          "leagueId": 2,
          "season": "2026",
          "standings": [],
          "teams": [
            {
              "teamId": 3402,
              "team": "Omonia Nicosia",
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
              "teamId": 664,
              "team": "Kairat Almaty",
              "form": "WWL",
              "all": {
                "played": 3,
                "wins": 2,
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
                "goalsFor": 2,
                "goalsAgainst": 1
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
              "teamId": 646,
              "team": "Levski Sofia",
              "form": "DWW",
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
                "goalsFor": 5,
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
                "goalsFor": 1,
                "goalsAgainst": 0
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
              "teamId": 3327,
              "team": "Egnatia Rrogozhinë",
              "form": "DWD",
              "all": {
                "played": 3,
                "wins": 1,
                "draws": 2,
                "losses": 0,
                "goalsFor": 10,
                "goalsAgainst": 5
              },
              "home": {
                "played": 2,
                "wins": 1,
                "draws": 1,
                "losses": 0,
                "goalsFor": 9,
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
              "teamId": 4360,
              "team": "Celje",
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
              "fixtureId": 1591936,
              "kickoff": "2026-07-23T02:00:00+09:00",
              "status": "FT",
              "homeTeamId": 3402,
              "homeTeam": "Omonia Nicosia",
              "awayTeamId": 664,
              "awayTeam": "Kairat Almaty",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1591935,
              "kickoff": "2026-07-23T02:30:00+09:00",
              "status": "FT",
              "homeTeamId": 646,
              "homeTeam": "Levski Sofia",
              "awayTeamId": 632,
              "awayTeam": "Universitatea Craiova",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1591933,
              "kickoff": "2026-07-23T04:00:00+09:00",
              "status": "FT",
              "homeTeamId": 3327,
              "homeTeam": "Egnatia Rrogozhinë",
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
      "date": "2026-07-24",
      "updatedAt": "2026-07-23T10:34:35.622Z",
      "leagues": [
        {
          "key": "UEL",
          "leagueId": 3,
          "season": "2026",
          "standings": [],
          "teams": [
            {
              "teamId": 556,
              "team": "Qarabag",
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
                "goalsFor": 3,
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
              "teamId": 853,
              "team": "CSKA Sofia",
              "form": "WW",
              "all": {
                "played": 2,
                "wins": 2,
                "draws": 0,
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
              "teamId": 325,
              "team": "Tromso",
              "form": "",
              "all": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "home": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "away": {
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
              "form": "",
              "all": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "home": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "away": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 363,
              "team": "Hammarby FF",
              "form": "",
              "all": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "home": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "away": {
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
              "form": "",
              "all": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "home": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "away": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 568,
              "team": "Sheriff Tiraspol",
              "form": "DW",
              "all": {
                "played": 2,
                "wins": 1,
                "draws": 1,
                "losses": 0,
                "goalsFor": 1,
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
                "goalsFor": 1,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 604,
              "team": "Maccabi Tel Aviv",
              "form": "",
              "all": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "home": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "away": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 572,
              "team": "Dynamo Kyiv",
              "form": "DW",
              "all": {
                "played": 2,
                "wins": 1,
                "draws": 1,
                "losses": 0,
                "goalsFor": 1,
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
                "goalsFor": 1,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 619,
              "team": "PAOK",
              "form": "",
              "all": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "home": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "away": {
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
              "form": "",
              "all": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "home": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "away": {
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
                "goalsFor": 3,
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
              "teamId": 549,
              "team": "Beşiktaş",
              "form": "",
              "all": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "home": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "away": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 397,
              "team": "FC Midtjylland",
              "form": "",
              "all": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "home": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "away": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 1011,
              "team": "FC ST. Gallen",
              "form": "",
              "all": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "home": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "away": {
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
              "form": "",
              "all": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "home": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "away": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 608,
              "team": "HNK Hajduk Split",
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
              "teamId": 3403,
              "team": "Pafos",
              "form": "",
              "all": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "home": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
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
              "fixtureId": 1593521,
              "kickoff": "2026-07-24T01:00:00+09:00",
              "status": "NS",
              "homeTeamId": 556,
              "homeTeam": "Qarabag",
              "awayTeamId": 853,
              "awayTeam": "CSKA Sofia",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1556546,
              "kickoff": "2026-07-24T02:00:00+09:00",
              "status": "NS",
              "homeTeamId": 325,
              "homeTeam": "Tromso",
              "awayTeamId": 3723,
              "awayTeam": "Hradec Králové",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1556544,
              "kickoff": "2026-07-24T02:00:00+09:00",
              "status": "NS",
              "homeTeamId": 363,
              "homeTeam": "Hammarby FF",
              "awayTeamId": 554,
              "awayTeam": "Anderlecht",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1593522,
              "kickoff": "2026-07-24T02:00:00+09:00",
              "status": "NS",
              "homeTeamId": 568,
              "homeTeam": "Sheriff Tiraspol",
              "awayTeamId": 604,
              "awayTeam": "Maccabi Tel Aviv",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1593519,
              "kickoff": "2026-07-24T02:00:00+09:00",
              "status": "NS",
              "homeTeamId": 572,
              "homeTeam": "Dynamo Kyiv",
              "awayTeamId": 619,
              "awayTeam": "PAOK",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1593523,
              "kickoff": "2026-07-24T03:00:00+09:00",
              "status": "NS",
              "homeTeamId": 415,
              "homeTeam": "Twente",
              "awayTeamId": 651,
              "awayTeam": "Ferencvarosi TC",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1556543,
              "kickoff": "2026-07-24T03:00:00+09:00",
              "status": "NS",
              "homeTeamId": 549,
              "homeTeam": "Beşiktaş",
              "awayTeamId": 397,
              "awayTeam": "FC Midtjylland",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1556545,
              "kickoff": "2026-07-24T03:00:00+09:00",
              "status": "NS",
              "homeTeamId": 1011,
              "homeTeam": "FC ST. Gallen",
              "awayTeamId": 211,
              "awayTeam": "Benfica",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1593520,
              "kickoff": "2026-07-24T04:00:00+09:00",
              "status": "NS",
              "homeTeamId": 608,
              "homeTeam": "HNK Hajduk Split",
              "awayTeamId": 3403,
              "awayTeam": "Pafos",
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
              "teamId": 2752,
              "team": "Busan I Park",
              "rank": 1,
              "points": 36,
              "goalsDiff": 14,
              "form": "LWDDW",
              "all": {
                "played": 17,
                "wins": 11,
                "draws": 3,
                "losses": 3,
                "goalsFor": 35,
                "goalsAgainst": 21
              },
              "home": {
                "played": 8,
                "wins": 6,
                "draws": 2,
                "losses": 0,
                "goalsFor": 17,
                "goalsAgainst": 6
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
              "teamId": 2765,
              "team": "Suwon Bluewings",
              "rank": 2,
              "points": 33,
              "goalsDiff": 8,
              "form": "DLWWL",
              "all": {
                "played": 17,
                "wins": 10,
                "draws": 3,
                "losses": 4,
                "goalsFor": 22,
                "goalsAgainst": 14
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
                "played": 8,
                "wins": 5,
                "draws": 0,
                "losses": 3,
                "goalsFor": 11,
                "goalsAgainst": 8
              }
            },
            {
              "teamId": 2747,
              "team": "Daegu FC",
              "rank": 3,
              "points": 32,
              "goalsDiff": 13,
              "form": "DWWWD",
              "all": {
                "played": 17,
                "wins": 9,
                "draws": 5,
                "losses": 3,
                "goalsFor": 36,
                "goalsAgainst": 23
              },
              "home": {
                "played": 9,
                "wins": 6,
                "draws": 1,
                "losses": 2,
                "goalsFor": 19,
                "goalsAgainst": 12
              },
              "away": {
                "played": 8,
                "wins": 3,
                "draws": 4,
                "losses": 1,
                "goalsFor": 17,
                "goalsAgainst": 11
              }
            },
            {
              "teamId": 2756,
              "team": "Suwon City FC",
              "rank": 4,
              "points": 30,
              "goalsDiff": 13,
              "form": "DWWDD",
              "all": {
                "played": 17,
                "wins": 8,
                "draws": 6,
                "losses": 3,
                "goalsFor": 36,
                "goalsAgainst": 23
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
                "played": 9,
                "wins": 4,
                "draws": 2,
                "losses": 3,
                "goalsFor": 18,
                "goalsAgainst": 15
              }
            },
            {
              "teamId": 2749,
              "team": "Seoul E-Land FC",
              "rank": 5,
              "points": 30,
              "goalsDiff": 9,
              "form": "DWLWW",
              "all": {
                "played": 17,
                "wins": 9,
                "draws": 3,
                "losses": 5,
                "goalsFor": 30,
                "goalsAgainst": 21
              },
              "home": {
                "played": 8,
                "wins": 4,
                "draws": 1,
                "losses": 3,
                "goalsFor": 15,
                "goalsAgainst": 11
              },
              "away": {
                "played": 9,
                "wins": 5,
                "draws": 2,
                "losses": 2,
                "goalsFor": 15,
                "goalsAgainst": 10
              }
            },
            {
              "teamId": 7087,
              "team": "Hwaseong",
              "rank": 6,
              "points": 28,
              "goalsDiff": 7,
              "form": "WLLWW",
              "all": {
                "played": 17,
                "wins": 8,
                "draws": 4,
                "losses": 5,
                "goalsFor": 26,
                "goalsAgainst": 19
              },
              "home": {
                "played": 12,
                "wins": 5,
                "draws": 4,
                "losses": 3,
                "goalsFor": 18,
                "goalsAgainst": 14
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
              "teamId": 7078,
              "team": "Gimpo Citizen",
              "rank": 7,
              "points": 25,
              "goalsDiff": 1,
              "form": "DLLDW",
              "all": {
                "played": 17,
                "wins": 6,
                "draws": 7,
                "losses": 4,
                "goalsFor": 20,
                "goalsAgainst": 19
              },
              "home": {
                "played": 3,
                "wins": 0,
                "draws": 2,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 5
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
              "teamId": 2753,
              "team": "Asan Mugunghwa",
              "rank": 8,
              "points": 24,
              "goalsDiff": 4,
              "form": "LDWDW",
              "all": {
                "played": 17,
                "wins": 6,
                "draws": 6,
                "losses": 5,
                "goalsFor": 24,
                "goalsAgainst": 20
              },
              "home": {
                "played": 9,
                "wins": 4,
                "draws": 3,
                "losses": 2,
                "goalsFor": 16,
                "goalsAgainst": 13
              },
              "away": {
                "played": 8,
                "wins": 2,
                "draws": 3,
                "losses": 3,
                "goalsFor": 8,
                "goalsAgainst": 7
              }
            },
            {
              "teamId": 2751,
              "team": "Gyeongnam FC",
              "rank": 9,
              "points": 23,
              "goalsDiff": 0,
              "form": "WDWDL",
              "all": {
                "played": 17,
                "wins": 6,
                "draws": 5,
                "losses": 6,
                "goalsFor": 25,
                "goalsAgainst": 25
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
                "played": 7,
                "wins": 1,
                "draws": 3,
                "losses": 3,
                "goalsFor": 6,
                "goalsAgainst": 10
              }
            },
            {
              "teamId": 2757,
              "team": "Seongnam FC",
              "rank": 10,
              "points": 20,
              "goalsDiff": -1,
              "form": "WLLDD",
              "all": {
                "played": 17,
                "wins": 4,
                "draws": 8,
                "losses": 5,
                "goalsFor": 17,
                "goalsAgainst": 18
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
                "played": 8,
                "wins": 2,
                "draws": 3,
                "losses": 3,
                "goalsFor": 10,
                "goalsAgainst": 11
              }
            },
            {
              "teamId": 7060,
              "team": "Cheonan City",
              "rank": 11,
              "points": 19,
              "goalsDiff": -1,
              "form": "LLLDW",
              "all": {
                "played": 17,
                "wins": 4,
                "draws": 7,
                "losses": 6,
                "goalsFor": 19,
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
                "played": 8,
                "wins": 2,
                "draws": 2,
                "losses": 4,
                "goalsFor": 12,
                "goalsAgainst": 13
              }
            },
            {
              "teamId": 7098,
              "team": "Paju Citizen",
              "rank": 12,
              "points": 18,
              "goalsDiff": -5,
              "form": "DWLLL",
              "all": {
                "played": 17,
                "wins": 5,
                "draws": 3,
                "losses": 9,
                "goalsFor": 17,
                "goalsAgainst": 22
              },
              "home": {
                "played": 8,
                "wins": 2,
                "draws": 1,
                "losses": 5,
                "goalsFor": 8,
                "goalsAgainst": 10
              },
              "away": {
                "played": 9,
                "wins": 3,
                "draws": 2,
                "losses": 4,
                "goalsFor": 9,
                "goalsAgainst": 12
              }
            },
            {
              "teamId": 9171,
              "team": "Yongin City",
              "rank": 13,
              "points": 17,
              "goalsDiff": -6,
              "form": "LDWDD",
              "all": {
                "played": 17,
                "wins": 3,
                "draws": 8,
                "losses": 6,
                "goalsFor": 20,
                "goalsAgainst": 26
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
                "played": 7,
                "wins": 2,
                "draws": 3,
                "losses": 2,
                "goalsFor": 8,
                "goalsAgainst": 10
              }
            },
            {
              "teamId": 7061,
              "team": "Cheongju",
              "rank": 14,
              "points": 17,
              "goalsDiff": -7,
              "form": "WDLWL",
              "all": {
                "played": 17,
                "wins": 2,
                "draws": 11,
                "losses": 4,
                "goalsFor": 20,
                "goalsAgainst": 27
              },
              "home": {
                "played": 9,
                "wins": 1,
                "draws": 4,
                "losses": 4,
                "goalsFor": 9,
                "goalsAgainst": 17
              },
              "away": {
                "played": 8,
                "wins": 1,
                "draws": 7,
                "losses": 0,
                "goalsFor": 11,
                "goalsAgainst": 10
              }
            },
            {
              "teamId": 2758,
              "team": "Ansan Greeners",
              "rank": 15,
              "points": 14,
              "goalsDiff": -17,
              "form": "LWLLL",
              "all": {
                "played": 17,
                "wins": 4,
                "draws": 2,
                "losses": 11,
                "goalsFor": 17,
                "goalsAgainst": 34
              },
              "home": {
                "played": 11,
                "wins": 2,
                "draws": 1,
                "losses": 8,
                "goalsFor": 11,
                "goalsAgainst": 22
              },
              "away": {
                "played": 6,
                "wins": 2,
                "draws": 1,
                "losses": 3,
                "goalsFor": 6,
                "goalsAgainst": 12
              }
            },
            {
              "teamId": 2760,
              "team": "Jeonnam Dragons",
              "rank": 16,
              "points": 12,
              "goalsDiff": -12,
              "form": "WLDDL",
              "all": {
                "played": 17,
                "wins": 2,
                "draws": 6,
                "losses": 9,
                "goalsFor": 19,
                "goalsAgainst": 31
              },
              "home": {
                "played": 5,
                "wins": 1,
                "draws": 2,
                "losses": 2,
                "goalsFor": 6,
                "goalsAgainst": 7
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
              "points": 9,
              "goalsDiff": -20,
              "form": "WLDLW",
              "all": {
                "played": 16,
                "wins": 2,
                "draws": 3,
                "losses": 11,
                "goalsFor": 13,
                "goalsAgainst": 33
              },
              "home": {
                "played": 7,
                "wins": 0,
                "draws": 0,
                "losses": 7,
                "goalsFor": 5,
                "goalsAgainst": 19
              },
              "away": {
                "played": 9,
                "wins": 2,
                "draws": 3,
                "losses": 4,
                "goalsFor": 8,
                "goalsAgainst": 14
              }
            }
          ],
          "teams": [
            {
              "teamId": 2749,
              "team": "Seoul E-Land FC",
              "form": "LWLDWWWWLWLDWWLWD",
              "all": {
                "played": 17,
                "wins": 9,
                "draws": 3,
                "losses": 5,
                "goalsFor": 30,
                "goalsAgainst": 21
              },
              "home": {
                "played": 8,
                "wins": 4,
                "draws": 1,
                "losses": 3,
                "goalsFor": 15,
                "goalsAgainst": 11
              },
              "away": {
                "played": 9,
                "wins": 5,
                "draws": 2,
                "losses": 2,
                "goalsFor": 15,
                "goalsAgainst": 10
              }
            },
            {
              "teamId": 7060,
              "team": "Cheonan City",
              "form": "DLDDWDWDWLDLWDLLL",
              "all": {
                "played": 17,
                "wins": 4,
                "draws": 7,
                "losses": 6,
                "goalsFor": 19,
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
                "played": 8,
                "wins": 2,
                "draws": 2,
                "losses": 4,
                "goalsFor": 12,
                "goalsAgainst": 13
              }
            },
            {
              "teamId": 7076,
              "team": "Gimhae City",
              "form": "LLLLLDDLLLLWLDLW",
              "all": {
                "played": 16,
                "wins": 2,
                "draws": 3,
                "losses": 11,
                "goalsFor": 13,
                "goalsAgainst": 33
              },
              "home": {
                "played": 7,
                "wins": 0,
                "draws": 0,
                "losses": 7,
                "goalsFor": 5,
                "goalsAgainst": 19
              },
              "away": {
                "played": 9,
                "wins": 2,
                "draws": 3,
                "losses": 4,
                "goalsFor": 8,
                "goalsAgainst": 14
              }
            },
            {
              "teamId": 7061,
              "team": "Cheongju",
              "form": "LDDDLDDDDDDDLWLDW",
              "all": {
                "played": 17,
                "wins": 2,
                "draws": 11,
                "losses": 4,
                "goalsFor": 20,
                "goalsAgainst": 27
              },
              "home": {
                "played": 9,
                "wins": 1,
                "draws": 4,
                "losses": 4,
                "goalsFor": 9,
                "goalsAgainst": 17
              },
              "away": {
                "played": 8,
                "wins": 1,
                "draws": 7,
                "losses": 0,
                "goalsFor": 11,
                "goalsAgainst": 10
              }
            }
          ],
          "fixtures": [
            {
              "fixtureId": 1510388,
              "kickoff": "2026-07-24T19:30:00+09:00",
              "status": "NS",
              "homeTeamId": 2749,
              "homeTeam": "Seoul E-Land FC",
              "awayTeamId": 7060,
              "awayTeam": "Cheonan City",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1510387,
              "kickoff": "2026-07-24T19:30:00+09:00",
              "status": "NS",
              "homeTeamId": 7076,
              "homeTeam": "Gimhae City",
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
    },
    {
      "date": "2026-07-25",
      "updatedAt": "2026-07-23T10:34:39.902Z",
      "leagues": [
        {
          "key": "KLEAGUE1",
          "leagueId": 292,
          "season": "2026",
          "standings": [
            {
              "teamId": 2766,
              "team": "FC Seoul",
              "rank": 1,
              "points": 42,
              "goalsDiff": 20,
              "form": "WWDWW",
              "all": {
                "played": 19,
                "wins": 13,
                "draws": 3,
                "losses": 3,
                "goalsFor": 34,
                "goalsAgainst": 14
              },
              "home": {
                "played": 9,
                "wins": 5,
                "draws": 2,
                "losses": 2,
                "goalsFor": 15,
                "goalsAgainst": 5
              },
              "away": {
                "played": 10,
                "wins": 8,
                "draws": 1,
                "losses": 1,
                "goalsFor": 19,
                "goalsAgainst": 9
              }
            },
            {
              "teamId": 2746,
              "team": "Gangwon FC",
              "rank": 2,
              "points": 32,
              "goalsDiff": 12,
              "form": "DWDWW",
              "all": {
                "played": 19,
                "wins": 8,
                "draws": 8,
                "losses": 3,
                "goalsFor": 24,
                "goalsAgainst": 12
              },
              "home": {
                "played": 9,
                "wins": 4,
                "draws": 4,
                "losses": 1,
                "goalsFor": 14,
                "goalsAgainst": 6
              },
              "away": {
                "played": 10,
                "wins": 4,
                "draws": 4,
                "losses": 2,
                "goalsFor": 10,
                "goalsAgainst": 6
              }
            },
            {
              "teamId": 2762,
              "team": "Jeonbuk Motors",
              "rank": 3,
              "points": 30,
              "goalsDiff": 9,
              "form": "DLWLW",
              "all": {
                "played": 19,
                "wins": 8,
                "draws": 6,
                "losses": 5,
                "goalsFor": 25,
                "goalsAgainst": 16
              },
              "home": {
                "played": 9,
                "wins": 5,
                "draws": 1,
                "losses": 3,
                "goalsFor": 16,
                "goalsAgainst": 10
              },
              "away": {
                "played": 10,
                "wins": 3,
                "draws": 5,
                "losses": 2,
                "goalsFor": 9,
                "goalsAgainst": 6
              }
            },
            {
              "teamId": 2767,
              "team": "Ulsan Hyundai FC",
              "rank": 4,
              "points": 28,
              "goalsDiff": -1,
              "form": "LDLDL",
              "all": {
                "played": 19,
                "wins": 8,
                "draws": 4,
                "losses": 7,
                "goalsFor": 27,
                "goalsAgainst": 28
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
                "played": 9,
                "wins": 4,
                "draws": 3,
                "losses": 2,
                "goalsFor": 12,
                "goalsAgainst": 11
              }
            },
            {
              "teamId": 2764,
              "team": "Pohang Steelers",
              "rank": 5,
              "points": 28,
              "goalsDiff": 1,
              "form": "LLWWL",
              "all": {
                "played": 19,
                "wins": 8,
                "draws": 4,
                "losses": 7,
                "goalsFor": 20,
                "goalsAgainst": 19
              },
              "home": {
                "played": 8,
                "wins": 3,
                "draws": 2,
                "losses": 3,
                "goalsFor": 4,
                "goalsAgainst": 5
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
              "teamId": 2748,
              "team": "FC Anyang",
              "rank": 6,
              "points": 27,
              "goalsDiff": 4,
              "form": "WDWLW",
              "all": {
                "played": 19,
                "wins": 6,
                "draws": 9,
                "losses": 4,
                "goalsFor": 26,
                "goalsAgainst": 22
              },
              "home": {
                "played": 9,
                "wins": 1,
                "draws": 5,
                "losses": 3,
                "goalsFor": 10,
                "goalsAgainst": 12
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
              "rank": 7,
              "points": 27,
              "goalsDiff": 4,
              "form": "WWLLW",
              "all": {
                "played": 19,
                "wins": 8,
                "draws": 3,
                "losses": 8,
                "goalsFor": 24,
                "goalsAgainst": 20
              },
              "home": {
                "played": 10,
                "wins": 4,
                "draws": 0,
                "losses": 6,
                "goalsFor": 11,
                "goalsAgainst": 11
              },
              "away": {
                "played": 9,
                "wins": 4,
                "draws": 3,
                "losses": 2,
                "goalsFor": 13,
                "goalsAgainst": 9
              }
            },
            {
              "teamId": 2761,
              "team": "Jeju United FC",
              "rank": 8,
              "points": 24,
              "goalsDiff": -2,
              "form": "DWDDL",
              "all": {
                "played": 19,
                "wins": 6,
                "draws": 6,
                "losses": 7,
                "goalsFor": 17,
                "goalsAgainst": 19
              },
              "home": {
                "played": 11,
                "wins": 3,
                "draws": 4,
                "losses": 4,
                "goalsFor": 9,
                "goalsAgainst": 12
              },
              "away": {
                "played": 8,
                "wins": 3,
                "draws": 2,
                "losses": 3,
                "goalsFor": 8,
                "goalsAgainst": 7
              }
            },
            {
              "teamId": 2750,
              "team": "Daejeon Citizen",
              "rank": 9,
              "points": 20,
              "goalsDiff": 1,
              "form": "DDDDL",
              "all": {
                "played": 19,
                "wins": 4,
                "draws": 8,
                "losses": 7,
                "goalsFor": 21,
                "goalsAgainst": 20
              },
              "home": {
                "played": 10,
                "wins": 0,
                "draws": 5,
                "losses": 5,
                "goalsFor": 7,
                "goalsAgainst": 14
              },
              "away": {
                "played": 9,
                "wins": 4,
                "draws": 3,
                "losses": 2,
                "goalsFor": 14,
                "goalsAgainst": 6
              }
            },
            {
              "teamId": 2745,
              "team": "Bucheon FC 1995",
              "rank": 10,
              "points": 19,
              "goalsDiff": -7,
              "form": "LLDDW",
              "all": {
                "played": 19,
                "wins": 4,
                "draws": 7,
                "losses": 8,
                "goalsFor": 17,
                "goalsAgainst": 24
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
                "played": 9,
                "wins": 3,
                "draws": 3,
                "losses": 3,
                "goalsFor": 8,
                "goalsAgainst": 10
              }
            },
            {
              "teamId": 2768,
              "team": "Gimcheon Sangmu FC",
              "rank": 11,
              "points": 17,
              "goalsDiff": -8,
              "form": "DLDDL",
              "all": {
                "played": 19,
                "wins": 2,
                "draws": 11,
                "losses": 6,
                "goalsFor": 18,
                "goalsAgainst": 26
              },
              "home": {
                "played": 9,
                "wins": 0,
                "draws": 6,
                "losses": 3,
                "goalsFor": 7,
                "goalsAgainst": 14
              },
              "away": {
                "played": 10,
                "wins": 2,
                "draws": 5,
                "losses": 3,
                "goalsFor": 11,
                "goalsAgainst": 12
              }
            },
            {
              "teamId": 2759,
              "team": "Gwangju FC",
              "rank": 12,
              "points": 10,
              "goalsDiff": -33,
              "form": "DDLDL",
              "all": {
                "played": 19,
                "wins": 1,
                "draws": 7,
                "losses": 11,
                "goalsFor": 10,
                "goalsAgainst": 43
              },
              "home": {
                "played": 10,
                "wins": 1,
                "draws": 4,
                "losses": 5,
                "goalsFor": 7,
                "goalsAgainst": 19
              },
              "away": {
                "played": 9,
                "wins": 0,
                "draws": 3,
                "losses": 6,
                "goalsFor": 3,
                "goalsAgainst": 24
              }
            }
          ],
          "teams": [
            {
              "teamId": 2764,
              "team": "Pohang Steelers",
              "form": "DDLDWWLLWLWDWWLWWLL",
              "all": {
                "played": 19,
                "wins": 8,
                "draws": 4,
                "losses": 7,
                "goalsFor": 20,
                "goalsAgainst": 19
              },
              "home": {
                "played": 8,
                "wins": 3,
                "draws": 2,
                "losses": 3,
                "goalsFor": 4,
                "goalsAgainst": 5
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
              "teamId": 2762,
              "team": "Jeonbuk Motors",
              "form": "LDDWWWLDLWWWDDWLWLD",
              "all": {
                "played": 19,
                "wins": 8,
                "draws": 6,
                "losses": 5,
                "goalsFor": 25,
                "goalsAgainst": 16
              },
              "home": {
                "played": 9,
                "wins": 5,
                "draws": 1,
                "losses": 3,
                "goalsFor": 16,
                "goalsAgainst": 10
              },
              "away": {
                "played": 10,
                "wins": 3,
                "draws": 5,
                "losses": 2,
                "goalsFor": 9,
                "goalsAgainst": 6
              }
            },
            {
              "teamId": 2768,
              "team": "Gimcheon Sangmu FC",
              "form": "DDDDDLDDLWWLLDLDDLD",
              "all": {
                "played": 19,
                "wins": 2,
                "draws": 11,
                "losses": 6,
                "goalsFor": 18,
                "goalsAgainst": 26
              },
              "home": {
                "played": 9,
                "wins": 0,
                "draws": 6,
                "losses": 3,
                "goalsFor": 7,
                "goalsAgainst": 14
              },
              "away": {
                "played": 10,
                "wins": 2,
                "draws": 5,
                "losses": 3,
                "goalsFor": 11,
                "goalsAgainst": 12
              }
            },
            {
              "teamId": 2750,
              "team": "Daejeon Citizen",
              "form": "DDDWLLLWLWWDLLLDDDD",
              "all": {
                "played": 19,
                "wins": 4,
                "draws": 8,
                "losses": 7,
                "goalsFor": 21,
                "goalsAgainst": 20
              },
              "home": {
                "played": 10,
                "wins": 0,
                "draws": 5,
                "losses": 5,
                "goalsFor": 7,
                "goalsAgainst": 14
              },
              "away": {
                "played": 9,
                "wins": 4,
                "draws": 3,
                "losses": 2,
                "goalsFor": 14,
                "goalsAgainst": 6
              }
            }
          ],
          "fixtures": [
            {
              "fixtureId": 1507011,
              "kickoff": "2026-07-25T19:30:00+09:00",
              "status": "NS",
              "homeTeamId": 2764,
              "homeTeam": "Pohang Steelers",
              "awayTeamId": 2762,
              "awayTeam": "Jeonbuk Motors",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1507010,
              "kickoff": "2026-07-25T19:30:00+09:00",
              "status": "NS",
              "homeTeamId": 2768,
              "homeTeam": "Gimcheon Sangmu FC",
              "awayTeamId": 2750,
              "awayTeam": "Daejeon Citizen",
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
              "teamId": 2752,
              "team": "Busan I Park",
              "rank": 1,
              "points": 36,
              "goalsDiff": 14,
              "form": "LWDDW",
              "all": {
                "played": 17,
                "wins": 11,
                "draws": 3,
                "losses": 3,
                "goalsFor": 35,
                "goalsAgainst": 21
              },
              "home": {
                "played": 8,
                "wins": 6,
                "draws": 2,
                "losses": 0,
                "goalsFor": 17,
                "goalsAgainst": 6
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
              "teamId": 2765,
              "team": "Suwon Bluewings",
              "rank": 2,
              "points": 33,
              "goalsDiff": 8,
              "form": "DLWWL",
              "all": {
                "played": 17,
                "wins": 10,
                "draws": 3,
                "losses": 4,
                "goalsFor": 22,
                "goalsAgainst": 14
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
                "played": 8,
                "wins": 5,
                "draws": 0,
                "losses": 3,
                "goalsFor": 11,
                "goalsAgainst": 8
              }
            },
            {
              "teamId": 2747,
              "team": "Daegu FC",
              "rank": 3,
              "points": 32,
              "goalsDiff": 13,
              "form": "DWWWD",
              "all": {
                "played": 17,
                "wins": 9,
                "draws": 5,
                "losses": 3,
                "goalsFor": 36,
                "goalsAgainst": 23
              },
              "home": {
                "played": 9,
                "wins": 6,
                "draws": 1,
                "losses": 2,
                "goalsFor": 19,
                "goalsAgainst": 12
              },
              "away": {
                "played": 8,
                "wins": 3,
                "draws": 4,
                "losses": 1,
                "goalsFor": 17,
                "goalsAgainst": 11
              }
            },
            {
              "teamId": 2756,
              "team": "Suwon City FC",
              "rank": 4,
              "points": 30,
              "goalsDiff": 13,
              "form": "DWWDD",
              "all": {
                "played": 17,
                "wins": 8,
                "draws": 6,
                "losses": 3,
                "goalsFor": 36,
                "goalsAgainst": 23
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
                "played": 9,
                "wins": 4,
                "draws": 2,
                "losses": 3,
                "goalsFor": 18,
                "goalsAgainst": 15
              }
            },
            {
              "teamId": 2749,
              "team": "Seoul E-Land FC",
              "rank": 5,
              "points": 30,
              "goalsDiff": 9,
              "form": "DWLWW",
              "all": {
                "played": 17,
                "wins": 9,
                "draws": 3,
                "losses": 5,
                "goalsFor": 30,
                "goalsAgainst": 21
              },
              "home": {
                "played": 8,
                "wins": 4,
                "draws": 1,
                "losses": 3,
                "goalsFor": 15,
                "goalsAgainst": 11
              },
              "away": {
                "played": 9,
                "wins": 5,
                "draws": 2,
                "losses": 2,
                "goalsFor": 15,
                "goalsAgainst": 10
              }
            },
            {
              "teamId": 7087,
              "team": "Hwaseong",
              "rank": 6,
              "points": 28,
              "goalsDiff": 7,
              "form": "WLLWW",
              "all": {
                "played": 17,
                "wins": 8,
                "draws": 4,
                "losses": 5,
                "goalsFor": 26,
                "goalsAgainst": 19
              },
              "home": {
                "played": 12,
                "wins": 5,
                "draws": 4,
                "losses": 3,
                "goalsFor": 18,
                "goalsAgainst": 14
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
              "teamId": 7078,
              "team": "Gimpo Citizen",
              "rank": 7,
              "points": 25,
              "goalsDiff": 1,
              "form": "DLLDW",
              "all": {
                "played": 17,
                "wins": 6,
                "draws": 7,
                "losses": 4,
                "goalsFor": 20,
                "goalsAgainst": 19
              },
              "home": {
                "played": 3,
                "wins": 0,
                "draws": 2,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 5
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
              "teamId": 2753,
              "team": "Asan Mugunghwa",
              "rank": 8,
              "points": 24,
              "goalsDiff": 4,
              "form": "LDWDW",
              "all": {
                "played": 17,
                "wins": 6,
                "draws": 6,
                "losses": 5,
                "goalsFor": 24,
                "goalsAgainst": 20
              },
              "home": {
                "played": 9,
                "wins": 4,
                "draws": 3,
                "losses": 2,
                "goalsFor": 16,
                "goalsAgainst": 13
              },
              "away": {
                "played": 8,
                "wins": 2,
                "draws": 3,
                "losses": 3,
                "goalsFor": 8,
                "goalsAgainst": 7
              }
            },
            {
              "teamId": 2751,
              "team": "Gyeongnam FC",
              "rank": 9,
              "points": 23,
              "goalsDiff": 0,
              "form": "WDWDL",
              "all": {
                "played": 17,
                "wins": 6,
                "draws": 5,
                "losses": 6,
                "goalsFor": 25,
                "goalsAgainst": 25
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
                "played": 7,
                "wins": 1,
                "draws": 3,
                "losses": 3,
                "goalsFor": 6,
                "goalsAgainst": 10
              }
            },
            {
              "teamId": 2757,
              "team": "Seongnam FC",
              "rank": 10,
              "points": 20,
              "goalsDiff": -1,
              "form": "WLLDD",
              "all": {
                "played": 17,
                "wins": 4,
                "draws": 8,
                "losses": 5,
                "goalsFor": 17,
                "goalsAgainst": 18
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
                "played": 8,
                "wins": 2,
                "draws": 3,
                "losses": 3,
                "goalsFor": 10,
                "goalsAgainst": 11
              }
            },
            {
              "teamId": 7060,
              "team": "Cheonan City",
              "rank": 11,
              "points": 19,
              "goalsDiff": -1,
              "form": "LLLDW",
              "all": {
                "played": 17,
                "wins": 4,
                "draws": 7,
                "losses": 6,
                "goalsFor": 19,
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
                "played": 8,
                "wins": 2,
                "draws": 2,
                "losses": 4,
                "goalsFor": 12,
                "goalsAgainst": 13
              }
            },
            {
              "teamId": 7098,
              "team": "Paju Citizen",
              "rank": 12,
              "points": 18,
              "goalsDiff": -5,
              "form": "DWLLL",
              "all": {
                "played": 17,
                "wins": 5,
                "draws": 3,
                "losses": 9,
                "goalsFor": 17,
                "goalsAgainst": 22
              },
              "home": {
                "played": 8,
                "wins": 2,
                "draws": 1,
                "losses": 5,
                "goalsFor": 8,
                "goalsAgainst": 10
              },
              "away": {
                "played": 9,
                "wins": 3,
                "draws": 2,
                "losses": 4,
                "goalsFor": 9,
                "goalsAgainst": 12
              }
            },
            {
              "teamId": 9171,
              "team": "Yongin City",
              "rank": 13,
              "points": 17,
              "goalsDiff": -6,
              "form": "LDWDD",
              "all": {
                "played": 17,
                "wins": 3,
                "draws": 8,
                "losses": 6,
                "goalsFor": 20,
                "goalsAgainst": 26
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
                "played": 7,
                "wins": 2,
                "draws": 3,
                "losses": 2,
                "goalsFor": 8,
                "goalsAgainst": 10
              }
            },
            {
              "teamId": 7061,
              "team": "Cheongju",
              "rank": 14,
              "points": 17,
              "goalsDiff": -7,
              "form": "WDLWL",
              "all": {
                "played": 17,
                "wins": 2,
                "draws": 11,
                "losses": 4,
                "goalsFor": 20,
                "goalsAgainst": 27
              },
              "home": {
                "played": 9,
                "wins": 1,
                "draws": 4,
                "losses": 4,
                "goalsFor": 9,
                "goalsAgainst": 17
              },
              "away": {
                "played": 8,
                "wins": 1,
                "draws": 7,
                "losses": 0,
                "goalsFor": 11,
                "goalsAgainst": 10
              }
            },
            {
              "teamId": 2758,
              "team": "Ansan Greeners",
              "rank": 15,
              "points": 14,
              "goalsDiff": -17,
              "form": "LWLLL",
              "all": {
                "played": 17,
                "wins": 4,
                "draws": 2,
                "losses": 11,
                "goalsFor": 17,
                "goalsAgainst": 34
              },
              "home": {
                "played": 11,
                "wins": 2,
                "draws": 1,
                "losses": 8,
                "goalsFor": 11,
                "goalsAgainst": 22
              },
              "away": {
                "played": 6,
                "wins": 2,
                "draws": 1,
                "losses": 3,
                "goalsFor": 6,
                "goalsAgainst": 12
              }
            },
            {
              "teamId": 2760,
              "team": "Jeonnam Dragons",
              "rank": 16,
              "points": 12,
              "goalsDiff": -12,
              "form": "WLDDL",
              "all": {
                "played": 17,
                "wins": 2,
                "draws": 6,
                "losses": 9,
                "goalsFor": 19,
                "goalsAgainst": 31
              },
              "home": {
                "played": 5,
                "wins": 1,
                "draws": 2,
                "losses": 2,
                "goalsFor": 6,
                "goalsAgainst": 7
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
              "points": 9,
              "goalsDiff": -20,
              "form": "WLDLW",
              "all": {
                "played": 16,
                "wins": 2,
                "draws": 3,
                "losses": 11,
                "goalsFor": 13,
                "goalsAgainst": 33
              },
              "home": {
                "played": 7,
                "wins": 0,
                "draws": 0,
                "losses": 7,
                "goalsFor": 5,
                "goalsAgainst": 19
              },
              "away": {
                "played": 9,
                "wins": 2,
                "draws": 3,
                "losses": 4,
                "goalsFor": 8,
                "goalsAgainst": 14
              }
            }
          ],
          "teams": [
            {
              "teamId": 2747,
              "team": "Daegu FC",
              "form": "WWWLLDDLWDWWDWWWD",
              "all": {
                "played": 17,
                "wins": 9,
                "draws": 5,
                "losses": 3,
                "goalsFor": 36,
                "goalsAgainst": 23
              },
              "home": {
                "played": 9,
                "wins": 6,
                "draws": 1,
                "losses": 2,
                "goalsFor": 19,
                "goalsAgainst": 12
              },
              "away": {
                "played": 8,
                "wins": 3,
                "draws": 4,
                "losses": 1,
                "goalsFor": 17,
                "goalsAgainst": 11
              }
            },
            {
              "teamId": 2756,
              "team": "Suwon City FC",
              "form": "WWWWLDLDWDWLDDWWD",
              "all": {
                "played": 17,
                "wins": 8,
                "draws": 6,
                "losses": 3,
                "goalsFor": 36,
                "goalsAgainst": 23
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
                "played": 9,
                "wins": 4,
                "draws": 2,
                "losses": 3,
                "goalsFor": 18,
                "goalsAgainst": 15
              }
            },
            {
              "teamId": 2752,
              "team": "Busan I Park",
              "form": "DWWWWWWWLWWLWDDWL",
              "all": {
                "played": 17,
                "wins": 11,
                "draws": 3,
                "losses": 3,
                "goalsFor": 35,
                "goalsAgainst": 21
              },
              "home": {
                "played": 8,
                "wins": 6,
                "draws": 2,
                "losses": 0,
                "goalsFor": 17,
                "goalsAgainst": 6
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
              "teamId": 2765,
              "team": "Suwon Bluewings",
              "form": "WWWWWDLWWLDWLWWLD",
              "all": {
                "played": 17,
                "wins": 10,
                "draws": 3,
                "losses": 4,
                "goalsFor": 22,
                "goalsAgainst": 14
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
                "played": 8,
                "wins": 5,
                "draws": 0,
                "losses": 3,
                "goalsFor": 11,
                "goalsAgainst": 8
              }
            },
            {
              "teamId": 2760,
              "team": "Jeonnam Dragons",
              "form": "WLLLLDLDLDDLLDDLW",
              "all": {
                "played": 17,
                "wins": 2,
                "draws": 6,
                "losses": 9,
                "goalsFor": 19,
                "goalsAgainst": 31
              },
              "home": {
                "played": 5,
                "wins": 1,
                "draws": 2,
                "losses": 2,
                "goalsFor": 6,
                "goalsAgainst": 7
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
              "teamId": 2751,
              "team": "Gyeongnam FC",
              "form": "LLDWDLLWLWDWLDWDW",
              "all": {
                "played": 17,
                "wins": 6,
                "draws": 5,
                "losses": 6,
                "goalsFor": 25,
                "goalsAgainst": 25
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
                "played": 7,
                "wins": 1,
                "draws": 3,
                "losses": 3,
                "goalsFor": 6,
                "goalsAgainst": 10
              }
            },
            {
              "teamId": 7087,
              "team": "Hwaseong",
              "form": "LWDDLLWDWWDWWWLLW",
              "all": {
                "played": 17,
                "wins": 8,
                "draws": 4,
                "losses": 5,
                "goalsFor": 26,
                "goalsAgainst": 19
              },
              "home": {
                "played": 12,
                "wins": 5,
                "draws": 4,
                "losses": 3,
                "goalsFor": 18,
                "goalsAgainst": 14
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
              "teamId": 2753,
              "team": "Asan Mugunghwa",
              "form": "WLLWWDDDLWLDWDWDL",
              "all": {
                "played": 17,
                "wins": 6,
                "draws": 6,
                "losses": 5,
                "goalsFor": 24,
                "goalsAgainst": 20
              },
              "home": {
                "played": 9,
                "wins": 4,
                "draws": 3,
                "losses": 2,
                "goalsFor": 16,
                "goalsAgainst": 13
              },
              "away": {
                "played": 8,
                "wins": 2,
                "draws": 3,
                "losses": 3,
                "goalsFor": 8,
                "goalsAgainst": 7
              }
            }
          ],
          "fixtures": [
            {
              "fixtureId": 1510390,
              "kickoff": "2026-07-25T19:30:00+09:00",
              "status": "NS",
              "homeTeamId": 2747,
              "homeTeam": "Daegu FC",
              "awayTeamId": 2756,
              "awayTeam": "Suwon City FC",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1510389,
              "kickoff": "2026-07-25T19:30:00+09:00",
              "status": "NS",
              "homeTeamId": 2752,
              "homeTeam": "Busan I Park",
              "awayTeamId": 2765,
              "awayTeam": "Suwon Bluewings",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1510392,
              "kickoff": "2026-07-25T19:30:00+09:00",
              "status": "NS",
              "homeTeamId": 2760,
              "homeTeam": "Jeonnam Dragons",
              "awayTeamId": 2751,
              "awayTeam": "Gyeongnam FC",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1510391,
              "kickoff": "2026-07-25T19:30:00+09:00",
              "status": "NS",
              "homeTeamId": 7087,
              "homeTeam": "Hwaseong",
              "awayTeamId": 2753,
              "awayTeam": "Asan Mugunghwa",
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
      "date": "2026-07-26",
      "updatedAt": "2026-07-23T10:34:44.115Z",
      "leagues": [
        {
          "key": "KLEAGUE1",
          "leagueId": 292,
          "season": "2026",
          "standings": [
            {
              "teamId": 2766,
              "team": "FC Seoul",
              "rank": 1,
              "points": 42,
              "goalsDiff": 20,
              "form": "WWDWW",
              "all": {
                "played": 19,
                "wins": 13,
                "draws": 3,
                "losses": 3,
                "goalsFor": 34,
                "goalsAgainst": 14
              },
              "home": {
                "played": 9,
                "wins": 5,
                "draws": 2,
                "losses": 2,
                "goalsFor": 15,
                "goalsAgainst": 5
              },
              "away": {
                "played": 10,
                "wins": 8,
                "draws": 1,
                "losses": 1,
                "goalsFor": 19,
                "goalsAgainst": 9
              }
            },
            {
              "teamId": 2746,
              "team": "Gangwon FC",
              "rank": 2,
              "points": 32,
              "goalsDiff": 12,
              "form": "DWDWW",
              "all": {
                "played": 19,
                "wins": 8,
                "draws": 8,
                "losses": 3,
                "goalsFor": 24,
                "goalsAgainst": 12
              },
              "home": {
                "played": 9,
                "wins": 4,
                "draws": 4,
                "losses": 1,
                "goalsFor": 14,
                "goalsAgainst": 6
              },
              "away": {
                "played": 10,
                "wins": 4,
                "draws": 4,
                "losses": 2,
                "goalsFor": 10,
                "goalsAgainst": 6
              }
            },
            {
              "teamId": 2762,
              "team": "Jeonbuk Motors",
              "rank": 3,
              "points": 30,
              "goalsDiff": 9,
              "form": "DLWLW",
              "all": {
                "played": 19,
                "wins": 8,
                "draws": 6,
                "losses": 5,
                "goalsFor": 25,
                "goalsAgainst": 16
              },
              "home": {
                "played": 9,
                "wins": 5,
                "draws": 1,
                "losses": 3,
                "goalsFor": 16,
                "goalsAgainst": 10
              },
              "away": {
                "played": 10,
                "wins": 3,
                "draws": 5,
                "losses": 2,
                "goalsFor": 9,
                "goalsAgainst": 6
              }
            },
            {
              "teamId": 2767,
              "team": "Ulsan Hyundai FC",
              "rank": 4,
              "points": 28,
              "goalsDiff": -1,
              "form": "LDLDL",
              "all": {
                "played": 19,
                "wins": 8,
                "draws": 4,
                "losses": 7,
                "goalsFor": 27,
                "goalsAgainst": 28
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
                "played": 9,
                "wins": 4,
                "draws": 3,
                "losses": 2,
                "goalsFor": 12,
                "goalsAgainst": 11
              }
            },
            {
              "teamId": 2764,
              "team": "Pohang Steelers",
              "rank": 5,
              "points": 28,
              "goalsDiff": 1,
              "form": "LLWWL",
              "all": {
                "played": 19,
                "wins": 8,
                "draws": 4,
                "losses": 7,
                "goalsFor": 20,
                "goalsAgainst": 19
              },
              "home": {
                "played": 8,
                "wins": 3,
                "draws": 2,
                "losses": 3,
                "goalsFor": 4,
                "goalsAgainst": 5
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
              "teamId": 2748,
              "team": "FC Anyang",
              "rank": 6,
              "points": 27,
              "goalsDiff": 4,
              "form": "WDWLW",
              "all": {
                "played": 19,
                "wins": 6,
                "draws": 9,
                "losses": 4,
                "goalsFor": 26,
                "goalsAgainst": 22
              },
              "home": {
                "played": 9,
                "wins": 1,
                "draws": 5,
                "losses": 3,
                "goalsFor": 10,
                "goalsAgainst": 12
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
              "rank": 7,
              "points": 27,
              "goalsDiff": 4,
              "form": "WWLLW",
              "all": {
                "played": 19,
                "wins": 8,
                "draws": 3,
                "losses": 8,
                "goalsFor": 24,
                "goalsAgainst": 20
              },
              "home": {
                "played": 10,
                "wins": 4,
                "draws": 0,
                "losses": 6,
                "goalsFor": 11,
                "goalsAgainst": 11
              },
              "away": {
                "played": 9,
                "wins": 4,
                "draws": 3,
                "losses": 2,
                "goalsFor": 13,
                "goalsAgainst": 9
              }
            },
            {
              "teamId": 2761,
              "team": "Jeju United FC",
              "rank": 8,
              "points": 24,
              "goalsDiff": -2,
              "form": "DWDDL",
              "all": {
                "played": 19,
                "wins": 6,
                "draws": 6,
                "losses": 7,
                "goalsFor": 17,
                "goalsAgainst": 19
              },
              "home": {
                "played": 11,
                "wins": 3,
                "draws": 4,
                "losses": 4,
                "goalsFor": 9,
                "goalsAgainst": 12
              },
              "away": {
                "played": 8,
                "wins": 3,
                "draws": 2,
                "losses": 3,
                "goalsFor": 8,
                "goalsAgainst": 7
              }
            },
            {
              "teamId": 2750,
              "team": "Daejeon Citizen",
              "rank": 9,
              "points": 20,
              "goalsDiff": 1,
              "form": "DDDDL",
              "all": {
                "played": 19,
                "wins": 4,
                "draws": 8,
                "losses": 7,
                "goalsFor": 21,
                "goalsAgainst": 20
              },
              "home": {
                "played": 10,
                "wins": 0,
                "draws": 5,
                "losses": 5,
                "goalsFor": 7,
                "goalsAgainst": 14
              },
              "away": {
                "played": 9,
                "wins": 4,
                "draws": 3,
                "losses": 2,
                "goalsFor": 14,
                "goalsAgainst": 6
              }
            },
            {
              "teamId": 2745,
              "team": "Bucheon FC 1995",
              "rank": 10,
              "points": 19,
              "goalsDiff": -7,
              "form": "LLDDW",
              "all": {
                "played": 19,
                "wins": 4,
                "draws": 7,
                "losses": 8,
                "goalsFor": 17,
                "goalsAgainst": 24
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
                "played": 9,
                "wins": 3,
                "draws": 3,
                "losses": 3,
                "goalsFor": 8,
                "goalsAgainst": 10
              }
            },
            {
              "teamId": 2768,
              "team": "Gimcheon Sangmu FC",
              "rank": 11,
              "points": 17,
              "goalsDiff": -8,
              "form": "DLDDL",
              "all": {
                "played": 19,
                "wins": 2,
                "draws": 11,
                "losses": 6,
                "goalsFor": 18,
                "goalsAgainst": 26
              },
              "home": {
                "played": 9,
                "wins": 0,
                "draws": 6,
                "losses": 3,
                "goalsFor": 7,
                "goalsAgainst": 14
              },
              "away": {
                "played": 10,
                "wins": 2,
                "draws": 5,
                "losses": 3,
                "goalsFor": 11,
                "goalsAgainst": 12
              }
            },
            {
              "teamId": 2759,
              "team": "Gwangju FC",
              "rank": 12,
              "points": 10,
              "goalsDiff": -33,
              "form": "DDLDL",
              "all": {
                "played": 19,
                "wins": 1,
                "draws": 7,
                "losses": 11,
                "goalsFor": 10,
                "goalsAgainst": 43
              },
              "home": {
                "played": 10,
                "wins": 1,
                "draws": 4,
                "losses": 5,
                "goalsFor": 7,
                "goalsAgainst": 19
              },
              "away": {
                "played": 9,
                "wins": 0,
                "draws": 3,
                "losses": 6,
                "goalsFor": 3,
                "goalsAgainst": 24
              }
            }
          ],
          "teams": [
            {
              "teamId": 2748,
              "team": "FC Anyang",
              "form": "DWDLLDDWDWLDDDWLWDW",
              "all": {
                "played": 19,
                "wins": 6,
                "draws": 9,
                "losses": 4,
                "goalsFor": 26,
                "goalsAgainst": 22
              },
              "home": {
                "played": 9,
                "wins": 1,
                "draws": 5,
                "losses": 3,
                "goalsFor": 10,
                "goalsAgainst": 12
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
              "teamId": 2746,
              "team": "Gangwon FC",
              "form": "LDDDLWWDWLWDDWWWDWD",
              "all": {
                "played": 19,
                "wins": 8,
                "draws": 8,
                "losses": 3,
                "goalsFor": 24,
                "goalsAgainst": 12
              },
              "home": {
                "played": 9,
                "wins": 4,
                "draws": 4,
                "losses": 1,
                "goalsFor": 14,
                "goalsAgainst": 6
              },
              "away": {
                "played": 10,
                "wins": 4,
                "draws": 4,
                "losses": 2,
                "goalsFor": 10,
                "goalsAgainst": 6
              }
            },
            {
              "teamId": 2759,
              "team": "Gwangju FC",
              "form": "DWDDLLLLLLLLDLLDLDD",
              "all": {
                "played": 19,
                "wins": 1,
                "draws": 7,
                "losses": 11,
                "goalsFor": 10,
                "goalsAgainst": 43
              },
              "home": {
                "played": 10,
                "wins": 1,
                "draws": 4,
                "losses": 5,
                "goalsFor": 7,
                "goalsAgainst": 19
              },
              "away": {
                "played": 9,
                "wins": 0,
                "draws": 3,
                "losses": 6,
                "goalsFor": 3,
                "goalsAgainst": 24
              }
            },
            {
              "teamId": 2761,
              "team": "Jeju United FC",
              "form": "DLLLDWWDWLLWWLLDDWD",
              "all": {
                "played": 19,
                "wins": 6,
                "draws": 6,
                "losses": 7,
                "goalsFor": 17,
                "goalsAgainst": 19
              },
              "home": {
                "played": 11,
                "wins": 3,
                "draws": 4,
                "losses": 4,
                "goalsFor": 9,
                "goalsAgainst": 12
              },
              "away": {
                "played": 8,
                "wins": 3,
                "draws": 2,
                "losses": 3,
                "goalsFor": 8,
                "goalsAgainst": 7
              }
            },
            {
              "teamId": 2763,
              "team": "Incheon United",
              "form": "LLDLWWLDWWLDWLWLLWW",
              "all": {
                "played": 19,
                "wins": 8,
                "draws": 3,
                "losses": 8,
                "goalsFor": 24,
                "goalsAgainst": 20
              },
              "home": {
                "played": 10,
                "wins": 4,
                "draws": 0,
                "losses": 6,
                "goalsFor": 11,
                "goalsAgainst": 11
              },
              "away": {
                "played": 9,
                "wins": 4,
                "draws": 3,
                "losses": 2,
                "goalsFor": 13,
                "goalsAgainst": 9
              }
            },
            {
              "teamId": 2745,
              "team": "Bucheon FC 1995",
              "form": "WDLDDLWDLLWLLDWDDLL",
              "all": {
                "played": 19,
                "wins": 4,
                "draws": 7,
                "losses": 8,
                "goalsFor": 17,
                "goalsAgainst": 24
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
                "played": 9,
                "wins": 3,
                "draws": 3,
                "losses": 3,
                "goalsFor": 8,
                "goalsAgainst": 10
              }
            },
            {
              "teamId": 2766,
              "team": "FC Seoul",
              "form": "WWWWDWWLWWLDLWWWDWW",
              "all": {
                "played": 19,
                "wins": 13,
                "draws": 3,
                "losses": 3,
                "goalsFor": 34,
                "goalsAgainst": 14
              },
              "home": {
                "played": 9,
                "wins": 5,
                "draws": 2,
                "losses": 2,
                "goalsFor": 15,
                "goalsAgainst": 5
              },
              "away": {
                "played": 10,
                "wins": 8,
                "draws": 1,
                "losses": 1,
                "goalsFor": 19,
                "goalsAgainst": 9
              }
            },
            {
              "teamId": 2767,
              "team": "Ulsan Hyundai FC",
              "form": "WWWDLWLWDLLWWWLDLDL",
              "all": {
                "played": 19,
                "wins": 8,
                "draws": 4,
                "losses": 7,
                "goalsFor": 27,
                "goalsAgainst": 28
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
                "played": 9,
                "wins": 4,
                "draws": 3,
                "losses": 2,
                "goalsFor": 12,
                "goalsAgainst": 11
              }
            }
          ],
          "fixtures": [
            {
              "fixtureId": 1507012,
              "kickoff": "2026-07-26T19:30:00+09:00",
              "status": "NS",
              "homeTeamId": 2748,
              "homeTeam": "FC Anyang",
              "awayTeamId": 2746,
              "awayTeam": "Gangwon FC",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1507013,
              "kickoff": "2026-07-26T19:30:00+09:00",
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
              "fixtureId": 1507014,
              "kickoff": "2026-07-26T19:30:00+09:00",
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
              "fixtureId": 1507015,
              "kickoff": "2026-07-26T19:30:00+09:00",
              "status": "NS",
              "homeTeamId": 2766,
              "homeTeam": "FC Seoul",
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
              "teamId": 2752,
              "team": "Busan I Park",
              "rank": 1,
              "points": 36,
              "goalsDiff": 14,
              "form": "LWDDW",
              "all": {
                "played": 17,
                "wins": 11,
                "draws": 3,
                "losses": 3,
                "goalsFor": 35,
                "goalsAgainst": 21
              },
              "home": {
                "played": 8,
                "wins": 6,
                "draws": 2,
                "losses": 0,
                "goalsFor": 17,
                "goalsAgainst": 6
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
              "teamId": 2765,
              "team": "Suwon Bluewings",
              "rank": 2,
              "points": 33,
              "goalsDiff": 8,
              "form": "DLWWL",
              "all": {
                "played": 17,
                "wins": 10,
                "draws": 3,
                "losses": 4,
                "goalsFor": 22,
                "goalsAgainst": 14
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
                "played": 8,
                "wins": 5,
                "draws": 0,
                "losses": 3,
                "goalsFor": 11,
                "goalsAgainst": 8
              }
            },
            {
              "teamId": 2747,
              "team": "Daegu FC",
              "rank": 3,
              "points": 32,
              "goalsDiff": 13,
              "form": "DWWWD",
              "all": {
                "played": 17,
                "wins": 9,
                "draws": 5,
                "losses": 3,
                "goalsFor": 36,
                "goalsAgainst": 23
              },
              "home": {
                "played": 9,
                "wins": 6,
                "draws": 1,
                "losses": 2,
                "goalsFor": 19,
                "goalsAgainst": 12
              },
              "away": {
                "played": 8,
                "wins": 3,
                "draws": 4,
                "losses": 1,
                "goalsFor": 17,
                "goalsAgainst": 11
              }
            },
            {
              "teamId": 2756,
              "team": "Suwon City FC",
              "rank": 4,
              "points": 30,
              "goalsDiff": 13,
              "form": "DWWDD",
              "all": {
                "played": 17,
                "wins": 8,
                "draws": 6,
                "losses": 3,
                "goalsFor": 36,
                "goalsAgainst": 23
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
                "played": 9,
                "wins": 4,
                "draws": 2,
                "losses": 3,
                "goalsFor": 18,
                "goalsAgainst": 15
              }
            },
            {
              "teamId": 2749,
              "team": "Seoul E-Land FC",
              "rank": 5,
              "points": 30,
              "goalsDiff": 9,
              "form": "DWLWW",
              "all": {
                "played": 17,
                "wins": 9,
                "draws": 3,
                "losses": 5,
                "goalsFor": 30,
                "goalsAgainst": 21
              },
              "home": {
                "played": 8,
                "wins": 4,
                "draws": 1,
                "losses": 3,
                "goalsFor": 15,
                "goalsAgainst": 11
              },
              "away": {
                "played": 9,
                "wins": 5,
                "draws": 2,
                "losses": 2,
                "goalsFor": 15,
                "goalsAgainst": 10
              }
            },
            {
              "teamId": 7087,
              "team": "Hwaseong",
              "rank": 6,
              "points": 28,
              "goalsDiff": 7,
              "form": "WLLWW",
              "all": {
                "played": 17,
                "wins": 8,
                "draws": 4,
                "losses": 5,
                "goalsFor": 26,
                "goalsAgainst": 19
              },
              "home": {
                "played": 12,
                "wins": 5,
                "draws": 4,
                "losses": 3,
                "goalsFor": 18,
                "goalsAgainst": 14
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
              "teamId": 7078,
              "team": "Gimpo Citizen",
              "rank": 7,
              "points": 25,
              "goalsDiff": 1,
              "form": "DLLDW",
              "all": {
                "played": 17,
                "wins": 6,
                "draws": 7,
                "losses": 4,
                "goalsFor": 20,
                "goalsAgainst": 19
              },
              "home": {
                "played": 3,
                "wins": 0,
                "draws": 2,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 5
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
              "teamId": 2753,
              "team": "Asan Mugunghwa",
              "rank": 8,
              "points": 24,
              "goalsDiff": 4,
              "form": "LDWDW",
              "all": {
                "played": 17,
                "wins": 6,
                "draws": 6,
                "losses": 5,
                "goalsFor": 24,
                "goalsAgainst": 20
              },
              "home": {
                "played": 9,
                "wins": 4,
                "draws": 3,
                "losses": 2,
                "goalsFor": 16,
                "goalsAgainst": 13
              },
              "away": {
                "played": 8,
                "wins": 2,
                "draws": 3,
                "losses": 3,
                "goalsFor": 8,
                "goalsAgainst": 7
              }
            },
            {
              "teamId": 2751,
              "team": "Gyeongnam FC",
              "rank": 9,
              "points": 23,
              "goalsDiff": 0,
              "form": "WDWDL",
              "all": {
                "played": 17,
                "wins": 6,
                "draws": 5,
                "losses": 6,
                "goalsFor": 25,
                "goalsAgainst": 25
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
                "played": 7,
                "wins": 1,
                "draws": 3,
                "losses": 3,
                "goalsFor": 6,
                "goalsAgainst": 10
              }
            },
            {
              "teamId": 2757,
              "team": "Seongnam FC",
              "rank": 10,
              "points": 20,
              "goalsDiff": -1,
              "form": "WLLDD",
              "all": {
                "played": 17,
                "wins": 4,
                "draws": 8,
                "losses": 5,
                "goalsFor": 17,
                "goalsAgainst": 18
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
                "played": 8,
                "wins": 2,
                "draws": 3,
                "losses": 3,
                "goalsFor": 10,
                "goalsAgainst": 11
              }
            },
            {
              "teamId": 7060,
              "team": "Cheonan City",
              "rank": 11,
              "points": 19,
              "goalsDiff": -1,
              "form": "LLLDW",
              "all": {
                "played": 17,
                "wins": 4,
                "draws": 7,
                "losses": 6,
                "goalsFor": 19,
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
                "played": 8,
                "wins": 2,
                "draws": 2,
                "losses": 4,
                "goalsFor": 12,
                "goalsAgainst": 13
              }
            },
            {
              "teamId": 7098,
              "team": "Paju Citizen",
              "rank": 12,
              "points": 18,
              "goalsDiff": -5,
              "form": "DWLLL",
              "all": {
                "played": 17,
                "wins": 5,
                "draws": 3,
                "losses": 9,
                "goalsFor": 17,
                "goalsAgainst": 22
              },
              "home": {
                "played": 8,
                "wins": 2,
                "draws": 1,
                "losses": 5,
                "goalsFor": 8,
                "goalsAgainst": 10
              },
              "away": {
                "played": 9,
                "wins": 3,
                "draws": 2,
                "losses": 4,
                "goalsFor": 9,
                "goalsAgainst": 12
              }
            },
            {
              "teamId": 9171,
              "team": "Yongin City",
              "rank": 13,
              "points": 17,
              "goalsDiff": -6,
              "form": "LDWDD",
              "all": {
                "played": 17,
                "wins": 3,
                "draws": 8,
                "losses": 6,
                "goalsFor": 20,
                "goalsAgainst": 26
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
                "played": 7,
                "wins": 2,
                "draws": 3,
                "losses": 2,
                "goalsFor": 8,
                "goalsAgainst": 10
              }
            },
            {
              "teamId": 7061,
              "team": "Cheongju",
              "rank": 14,
              "points": 17,
              "goalsDiff": -7,
              "form": "WDLWL",
              "all": {
                "played": 17,
                "wins": 2,
                "draws": 11,
                "losses": 4,
                "goalsFor": 20,
                "goalsAgainst": 27
              },
              "home": {
                "played": 9,
                "wins": 1,
                "draws": 4,
                "losses": 4,
                "goalsFor": 9,
                "goalsAgainst": 17
              },
              "away": {
                "played": 8,
                "wins": 1,
                "draws": 7,
                "losses": 0,
                "goalsFor": 11,
                "goalsAgainst": 10
              }
            },
            {
              "teamId": 2758,
              "team": "Ansan Greeners",
              "rank": 15,
              "points": 14,
              "goalsDiff": -17,
              "form": "LWLLL",
              "all": {
                "played": 17,
                "wins": 4,
                "draws": 2,
                "losses": 11,
                "goalsFor": 17,
                "goalsAgainst": 34
              },
              "home": {
                "played": 11,
                "wins": 2,
                "draws": 1,
                "losses": 8,
                "goalsFor": 11,
                "goalsAgainst": 22
              },
              "away": {
                "played": 6,
                "wins": 2,
                "draws": 1,
                "losses": 3,
                "goalsFor": 6,
                "goalsAgainst": 12
              }
            },
            {
              "teamId": 2760,
              "team": "Jeonnam Dragons",
              "rank": 16,
              "points": 12,
              "goalsDiff": -12,
              "form": "WLDDL",
              "all": {
                "played": 17,
                "wins": 2,
                "draws": 6,
                "losses": 9,
                "goalsFor": 19,
                "goalsAgainst": 31
              },
              "home": {
                "played": 5,
                "wins": 1,
                "draws": 2,
                "losses": 2,
                "goalsFor": 6,
                "goalsAgainst": 7
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
              "points": 9,
              "goalsDiff": -20,
              "form": "WLDLW",
              "all": {
                "played": 16,
                "wins": 2,
                "draws": 3,
                "losses": 11,
                "goalsFor": 13,
                "goalsAgainst": 33
              },
              "home": {
                "played": 7,
                "wins": 0,
                "draws": 0,
                "losses": 7,
                "goalsFor": 5,
                "goalsAgainst": 19
              },
              "away": {
                "played": 9,
                "wins": 2,
                "draws": 3,
                "losses": 4,
                "goalsFor": 8,
                "goalsAgainst": 14
              }
            }
          ],
          "teams": [
            {
              "teamId": 7078,
              "team": "Gimpo Citizen",
              "form": "WWLDDWDDLDWWWDLLD",
              "all": {
                "played": 17,
                "wins": 6,
                "draws": 7,
                "losses": 4,
                "goalsFor": 20,
                "goalsAgainst": 19
              },
              "home": {
                "played": 3,
                "wins": 0,
                "draws": 2,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 5
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
              "teamId": 9171,
              "team": "Yongin City",
              "form": "DLLDLDLWLWDDDDWDL",
              "all": {
                "played": 17,
                "wins": 3,
                "draws": 8,
                "losses": 6,
                "goalsFor": 20,
                "goalsAgainst": 26
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
                "played": 7,
                "wins": 2,
                "draws": 3,
                "losses": 2,
                "goalsFor": 8,
                "goalsAgainst": 10
              }
            },
            {
              "teamId": 7098,
              "team": "Paju Citizen",
              "form": "LLWWLWLWLDDLLLLWD",
              "all": {
                "played": 17,
                "wins": 5,
                "draws": 3,
                "losses": 9,
                "goalsFor": 17,
                "goalsAgainst": 22
              },
              "home": {
                "played": 8,
                "wins": 2,
                "draws": 1,
                "losses": 5,
                "goalsFor": 8,
                "goalsAgainst": 10
              },
              "away": {
                "played": 9,
                "wins": 3,
                "draws": 2,
                "losses": 4,
                "goalsFor": 9,
                "goalsAgainst": 12
              }
            },
            {
              "teamId": 2758,
              "team": "Ansan Greeners",
              "form": "WLLDDLWLWLLLLLLWL",
              "all": {
                "played": 17,
                "wins": 4,
                "draws": 2,
                "losses": 11,
                "goalsFor": 17,
                "goalsAgainst": 34
              },
              "home": {
                "played": 11,
                "wins": 2,
                "draws": 1,
                "losses": 8,
                "goalsFor": 11,
                "goalsAgainst": 22
              },
              "away": {
                "played": 6,
                "wins": 2,
                "draws": 1,
                "losses": 3,
                "goalsFor": 6,
                "goalsAgainst": 12
              }
            }
          ],
          "fixtures": [
            {
              "fixtureId": 1510393,
              "kickoff": "2026-07-26T19:30:00+09:00",
              "status": "NS",
              "homeTeamId": 7078,
              "homeTeam": "Gimpo Citizen",
              "awayTeamId": 9171,
              "awayTeam": "Yongin City",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1510394,
              "kickoff": "2026-07-26T19:30:00+09:00",
              "status": "NS",
              "homeTeamId": 7098,
              "homeTeam": "Paju Citizen",
              "awayTeamId": 2758,
              "awayTeam": "Ansan Greeners",
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
