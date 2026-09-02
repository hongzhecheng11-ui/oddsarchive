(function attachTeamContextPack(root, factory) {
  const pack = factory();
  if (typeof module !== "undefined" && module.exports) module.exports = pack;
  if (root) root.ODDS_ARCHIVE_TEAM_CONTEXT_PACK = pack;
})(typeof window !== "undefined" ? window : globalThis, function createTeamContextPack() {
  return {
  "version": "team-context-v3",
  "date": "2026-09-02",
  "updatedAt": "2026-09-02T12:46:33.620Z",
  "collection": {
    "dates": [
      "2026-09-02",
      "2026-09-03",
      "2026-09-04",
      "2026-09-05"
    ],
    "requestGroups": 21,
    "skippedGroups": 83,
    "failures": 0,
    "errors": []
  },
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
          "points": 10,
          "goalsDiff": 6,
          "form": "WWDW",
          "all": {
            "played": 4,
            "wins": 3,
            "draws": 1,
            "losses": 0,
            "goalsFor": 7,
            "goalsAgainst": 1
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
            "wins": 2,
            "draws": 0,
            "losses": 0,
            "goalsFor": 5,
            "goalsAgainst": 1
          }
        },
        {
          "teamId": 1335,
          "team": "Charlton",
          "rank": 2,
          "points": 9,
          "goalsDiff": 3,
          "form": "WWW",
          "all": {
            "played": 3,
            "wins": 3,
            "draws": 0,
            "losses": 0,
            "goalsFor": 5,
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
            "goalsFor": 2,
            "goalsAgainst": 1
          }
        },
        {
          "teamId": 39,
          "team": "Wolves",
          "rank": 3,
          "points": 7,
          "goalsDiff": 3,
          "form": "LWWD",
          "all": {
            "played": 4,
            "wins": 2,
            "draws": 1,
            "losses": 1,
            "goalsFor": 11,
            "goalsAgainst": 8
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
            "played": 2,
            "wins": 1,
            "draws": 0,
            "losses": 1,
            "goalsFor": 5,
            "goalsAgainst": 5
          }
        },
        {
          "teamId": 72,
          "team": "QPR",
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
            "goalsFor": 0,
            "goalsAgainst": 0
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
          "rank": 5,
          "points": 7,
          "goalsDiff": 1,
          "form": "WWDL",
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
            "goalsFor": 2,
            "goalsAgainst": 3
          },
          "away": {
            "played": 2,
            "wins": 1,
            "draws": 1,
            "losses": 0,
            "goalsFor": 5,
            "goalsAgainst": 3
          }
        },
        {
          "teamId": 70,
          "team": "Middlesbrough",
          "rank": 6,
          "points": 6,
          "goalsDiff": 2,
          "form": "WLW",
          "all": {
            "played": 3,
            "wins": 2,
            "draws": 0,
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
          "rank": 7,
          "points": 6,
          "goalsDiff": 1,
          "form": "LWW",
          "all": {
            "played": 3,
            "wins": 2,
            "draws": 0,
            "losses": 1,
            "goalsFor": 6,
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
            "wins": 1,
            "draws": 0,
            "losses": 1,
            "goalsFor": 3,
            "goalsAgainst": 4
          }
        },
        {
          "teamId": 58,
          "team": "Millwall",
          "rank": 8,
          "points": 6,
          "goalsDiff": 1,
          "form": "LWW",
          "all": {
            "played": 3,
            "wins": 2,
            "draws": 0,
            "losses": 1,
            "goalsFor": 6,
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
            "played": 2,
            "wins": 1,
            "draws": 0,
            "losses": 1,
            "goalsFor": 3,
            "goalsAgainst": 5
          }
        },
        {
          "teamId": 54,
          "team": "Birmingham",
          "rank": 9,
          "points": 6,
          "goalsDiff": 1,
          "form": "DWDD",
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
          "teamId": 62,
          "team": "Sheffield Utd",
          "rank": 10,
          "points": 6,
          "goalsDiff": 1,
          "form": "WDDD",
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
            "wins": 1,
            "draws": 1,
            "losses": 0,
            "goalsFor": 3,
            "goalsAgainst": 2
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
          "teamId": 48,
          "team": "West Ham",
          "rank": 11,
          "points": 5,
          "goalsDiff": 1,
          "form": "WDLD",
          "all": {
            "played": 4,
            "wins": 1,
            "draws": 2,
            "losses": 1,
            "goalsFor": 8,
            "goalsAgainst": 7
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
            "wins": 0,
            "draws": 2,
            "losses": 0,
            "goalsFor": 3,
            "goalsAgainst": 3
          }
        },
        {
          "teamId": 67,
          "team": "Blackburn",
          "rank": 12,
          "points": 5,
          "goalsDiff": 0,
          "form": "DLWD",
          "all": {
            "played": 4,
            "wins": 1,
            "draws": 2,
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
            "played": 2,
            "wins": 0,
            "draws": 2,
            "losses": 0,
            "goalsFor": 2,
            "goalsAgainst": 2
          }
        },
        {
          "teamId": 38,
          "team": "Watford",
          "rank": 13,
          "points": 5,
          "goalsDiff": -1,
          "form": "LDDW",
          "all": {
            "played": 4,
            "wins": 1,
            "draws": 2,
            "losses": 1,
            "goalsFor": 4,
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
            "played": 2,
            "wins": 0,
            "draws": 1,
            "losses": 1,
            "goalsFor": 1,
            "goalsAgainst": 3
          }
        },
        {
          "teamId": 68,
          "team": "Bolton",
          "rank": 14,
          "points": 4,
          "goalsDiff": -1,
          "form": "LLDW",
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
            "wins": 1,
            "draws": 0,
            "losses": 1,
            "goalsFor": 2,
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
          "teamId": 69,
          "team": "Derby",
          "rank": 15,
          "points": 4,
          "goalsDiff": -2,
          "form": "WLDL",
          "all": {
            "played": 4,
            "wins": 1,
            "draws": 1,
            "losses": 2,
            "goalsFor": 5,
            "goalsAgainst": 7
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
            "played": 2,
            "wins": 1,
            "draws": 0,
            "losses": 1,
            "goalsFor": 3,
            "goalsAgainst": 2
          }
        },
        {
          "teamId": 1379,
          "team": "Lincoln",
          "rank": 16,
          "points": 4,
          "goalsDiff": -2,
          "form": "DWLL",
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
            "wins": 0,
            "draws": 1,
            "losses": 1,
            "goalsFor": 1,
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
          "teamId": 41,
          "team": "Southampton",
          "rank": 17,
          "points": 3,
          "goalsDiff": 5,
          "form": "DWWL",
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
            "goalsFor": 8,
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
          "teamId": 43,
          "team": "Cardiff",
          "rank": 18,
          "points": 3,
          "goalsDiff": 0,
          "form": "DDD",
          "all": {
            "played": 3,
            "wins": 0,
            "draws": 3,
            "losses": 0,
            "goalsFor": 5,
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
            "played": 1,
            "wins": 0,
            "draws": 1,
            "losses": 0,
            "goalsFor": 2,
            "goalsAgainst": 2
          }
        },
        {
          "teamId": 71,
          "team": "Norwich",
          "rank": 19,
          "points": 3,
          "goalsDiff": -2,
          "form": "LWLL",
          "all": {
            "played": 4,
            "wins": 1,
            "draws": 0,
            "losses": 3,
            "goalsFor": 5,
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
            "draws": 0,
            "losses": 2,
            "goalsFor": 0,
            "goalsAgainst": 4
          }
        },
        {
          "teamId": 1355,
          "team": "Portsmouth",
          "rank": 20,
          "points": 3,
          "goalsDiff": -3,
          "form": "LLWL",
          "all": {
            "played": 4,
            "wins": 1,
            "draws": 0,
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
          "teamId": 75,
          "team": "Stoke City",
          "rank": 21,
          "points": 3,
          "goalsDiff": -5,
          "form": "WLLL",
          "all": {
            "played": 4,
            "wins": 1,
            "draws": 0,
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
            "played": 2,
            "wins": 0,
            "draws": 0,
            "losses": 2,
            "goalsFor": 2,
            "goalsAgainst": 7
          }
        },
        {
          "teamId": 1837,
          "team": "Wrexham",
          "rank": 22,
          "points": 2,
          "goalsDiff": -1,
          "form": "LDD",
          "all": {
            "played": 3,
            "wins": 0,
            "draws": 2,
            "losses": 1,
            "goalsFor": 3,
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
            "draws": 1,
            "losses": 0,
            "goalsFor": 1,
            "goalsAgainst": 1
          }
        },
        {
          "teamId": 44,
          "team": "Burnley",
          "rank": 23,
          "points": 1,
          "goalsDiff": -5,
          "form": "LLD",
          "all": {
            "played": 3,
            "wins": 0,
            "draws": 1,
            "losses": 2,
            "goalsFor": 4,
            "goalsAgainst": 9
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
            "goalsFor": 2,
            "goalsAgainst": 7
          }
        },
        {
          "teamId": 59,
          "team": "Preston",
          "rank": 24,
          "points": 0,
          "goalsDiff": -6,
          "form": "LLLL",
          "all": {
            "played": 4,
            "wins": 0,
            "draws": 0,
            "losses": 4,
            "goalsFor": 3,
            "goalsAgainst": 9
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
            "goalsFor": 1,
            "goalsAgainst": 3
          }
        }
      ],
      "teams": [
        {
          "teamId": 48,
          "team": "West Ham",
          "form": "DLDW",
          "all": {
            "played": 4,
            "wins": 1,
            "draws": 2,
            "losses": 1,
            "goalsFor": 8,
            "goalsAgainst": 7
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
          "form": "DWWL",
          "all": {
            "played": 4,
            "wins": 2,
            "draws": 1,
            "losses": 1,
            "goalsFor": 11,
            "goalsAgainst": 8
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
            "played": 2,
            "wins": 1,
            "draws": 0,
            "losses": 1,
            "goalsFor": 5,
            "goalsAgainst": 5
          }
        },
        {
          "teamId": 59,
          "team": "Preston",
          "form": "LLLL",
          "all": {
            "played": 4,
            "wins": 0,
            "draws": 0,
            "losses": 4,
            "goalsFor": 3,
            "goalsAgainst": 9
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
            "goalsFor": 1,
            "goalsAgainst": 3
          }
        },
        {
          "teamId": 56,
          "team": "Bristol City",
          "form": "LDWW",
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
            "goalsFor": 2,
            "goalsAgainst": 3
          },
          "away": {
            "played": 2,
            "wins": 1,
            "draws": 1,
            "losses": 0,
            "goalsFor": 5,
            "goalsAgainst": 3
          }
        },
        {
          "teamId": 62,
          "team": "Sheffield Utd",
          "form": "DDDW",
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
            "wins": 1,
            "draws": 1,
            "losses": 0,
            "goalsFor": 3,
            "goalsAgainst": 2
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
          "teamId": 68,
          "team": "Bolton",
          "form": "WDLL",
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
            "wins": 1,
            "draws": 0,
            "losses": 1,
            "goalsFor": 2,
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
          "teamId": 76,
          "team": "Swansea",
          "form": "WDWW",
          "all": {
            "played": 4,
            "wins": 3,
            "draws": 1,
            "losses": 0,
            "goalsFor": 7,
            "goalsAgainst": 1
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
            "wins": 2,
            "draws": 0,
            "losses": 0,
            "goalsFor": 5,
            "goalsAgainst": 1
          }
        },
        {
          "teamId": 38,
          "team": "Watford",
          "form": "WDDL",
          "all": {
            "played": 4,
            "wins": 1,
            "draws": 2,
            "losses": 1,
            "goalsFor": 4,
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
            "played": 2,
            "wins": 0,
            "draws": 1,
            "losses": 1,
            "goalsFor": 1,
            "goalsAgainst": 3
          }
        },
        {
          "teamId": 1355,
          "team": "Portsmouth",
          "form": "LWLL",
          "all": {
            "played": 4,
            "wins": 1,
            "draws": 0,
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
          "teamId": 69,
          "team": "Derby",
          "form": "LDLW",
          "all": {
            "played": 4,
            "wins": 1,
            "draws": 1,
            "losses": 2,
            "goalsFor": 5,
            "goalsAgainst": 7
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
            "played": 2,
            "wins": 1,
            "draws": 0,
            "losses": 1,
            "goalsFor": 3,
            "goalsAgainst": 2
          }
        },
        {
          "teamId": 1379,
          "team": "Lincoln",
          "form": "LLWD",
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
            "wins": 0,
            "draws": 1,
            "losses": 1,
            "goalsFor": 1,
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
          "teamId": 67,
          "team": "Blackburn",
          "form": "DWLD",
          "all": {
            "played": 4,
            "wins": 1,
            "draws": 2,
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
            "played": 2,
            "wins": 0,
            "draws": 2,
            "losses": 0,
            "goalsFor": 2,
            "goalsAgainst": 2
          }
        },
        {
          "teamId": 54,
          "team": "Birmingham",
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
          "teamId": 41,
          "team": "Southampton",
          "form": "LWWD",
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
            "goalsFor": 8,
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
          "teamId": 75,
          "team": "Stoke City",
          "form": "LLLW",
          "all": {
            "played": 4,
            "wins": 1,
            "draws": 0,
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
            "played": 2,
            "wins": 0,
            "draws": 0,
            "losses": 2,
            "goalsFor": 2,
            "goalsAgainst": 7
          }
        },
        {
          "teamId": 71,
          "team": "Norwich",
          "form": "LLWL",
          "all": {
            "played": 4,
            "wins": 1,
            "draws": 0,
            "losses": 3,
            "goalsFor": 5,
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
            "draws": 0,
            "losses": 2,
            "goalsFor": 0,
            "goalsAgainst": 4
          }
        }
      ],
      "fixtures": [
        {
          "fixtureId": 1563126,
          "kickoff": "2026-09-02T03:45:00+09:00",
          "status": "FT",
          "homeTeamId": 48,
          "homeTeam": "West Ham",
          "awayTeamId": 39,
          "awayTeam": "Wolves",
          "injuriesChecked": true,
          "injuries": [
            {
              "fixtureId": 1563126,
              "teamId": 48,
              "playerId": 1243,
              "player": "T. Soucek",
              "type": "Missing Fixture",
              "reason": "Ankle Injury"
            },
            {
              "fixtureId": 1563126,
              "teamId": 39,
              "playerId": 20665,
              "player": "J. Bellegarde",
              "type": "Missing Fixture",
              "reason": "Hamstring Injury"
            },
            {
              "fixtureId": 1563126,
              "teamId": 39,
              "playerId": 19143,
              "player": "S. Johnstone",
              "type": "Missing Fixture",
              "reason": "Shoulder Injury"
            },
            {
              "fixtureId": 1563126,
              "teamId": 39,
              "playerId": 195717,
              "player": "Y. Mosquera",
              "type": "Missing Fixture",
              "reason": "Ankle Injury"
            },
            {
              "fixtureId": 1563126,
              "teamId": 39,
              "playerId": 194116,
              "player": "R. Said",
              "type": "Missing Fixture",
              "reason": "Knee Injury"
            },
            {
              "fixtureId": 1563126,
              "teamId": 39,
              "playerId": 169,
              "player": "K. Trippier",
              "type": "Missing Fixture",
              "reason": "Knee Injury"
            }
          ],
          "lineupsChecked": false,
          "lineups": []
        },
        {
          "fixtureId": 1563122,
          "kickoff": "2026-09-02T03:45:00+09:00",
          "status": "FT",
          "homeTeamId": 59,
          "homeTeam": "Preston",
          "awayTeamId": 56,
          "awayTeam": "Bristol City",
          "injuriesChecked": true,
          "injuries": [
            {
              "fixtureId": 1563122,
              "teamId": 59,
              "playerId": 459284,
              "player": "T. Carroll",
              "type": "Missing Fixture",
              "reason": "Ankle Injury"
            },
            {
              "fixtureId": 1563122,
              "teamId": 59,
              "playerId": 70519,
              "player": "A. McCann",
              "type": "Missing Fixture",
              "reason": "Injury"
            },
            {
              "fixtureId": 1563122,
              "teamId": 59,
              "playerId": 19455,
              "player": "B. Potts",
              "type": "Missing Fixture",
              "reason": "Ankle Injury"
            },
            {
              "fixtureId": 1563122,
              "teamId": 56,
              "playerId": 69539,
              "player": "L. McNally",
              "type": "Missing Fixture",
              "reason": "Knee Injury"
            }
          ],
          "lineupsChecked": false,
          "lineups": []
        },
        {
          "fixtureId": 1563123,
          "kickoff": "2026-09-02T03:45:00+09:00",
          "status": "FT",
          "homeTeamId": 62,
          "homeTeam": "Sheffield Utd",
          "awayTeamId": 68,
          "awayTeam": "Bolton",
          "injuriesChecked": true,
          "injuries": [
            {
              "fixtureId": 1563123,
              "teamId": 62,
              "playerId": 19961,
              "player": "H. Burrows",
              "type": "Missing Fixture",
              "reason": "Inactive"
            },
            {
              "fixtureId": 1563123,
              "teamId": 62,
              "playerId": 906,
              "player": "T. Chong",
              "type": "Missing Fixture",
              "reason": "Injury"
            },
            {
              "fixtureId": 1563123,
              "teamId": 62,
              "playerId": 373615,
              "player": "R. One",
              "type": "Missing Fixture",
              "reason": "Hamstring Injury"
            },
            {
              "fixtureId": 1563123,
              "teamId": 62,
              "playerId": 17407,
              "player": "F. Seriki",
              "type": "Missing Fixture",
              "reason": "Inactive"
            },
            {
              "fixtureId": 1563123,
              "teamId": 68,
              "playerId": 284367,
              "player": "L. Stephenson",
              "type": "Missing Fixture",
              "reason": "Inactive"
            }
          ],
          "lineupsChecked": false,
          "lineups": []
        },
        {
          "fixtureId": 1563125,
          "kickoff": "2026-09-02T03:45:00+09:00",
          "status": "FT",
          "homeTeamId": 76,
          "homeTeam": "Swansea",
          "awayTeamId": 38,
          "awayTeam": "Watford",
          "injuriesChecked": true,
          "injuries": [
            {
              "fixtureId": 1563125,
              "teamId": 76,
              "playerId": 20457,
              "player": "C. Burgess",
              "type": "Missing Fixture",
              "reason": "Achilles Tendon Injury"
            },
            {
              "fixtureId": 1563125,
              "teamId": 76,
              "playerId": 104041,
              "player": "B. Cabango",
              "type": "Missing Fixture",
              "reason": "Inactive"
            },
            {
              "fixtureId": 1563125,
              "teamId": 76,
              "playerId": 68441,
              "player": "G. Franco",
              "type": "Missing Fixture",
              "reason": "Ankle Injury"
            },
            {
              "fixtureId": 1563125,
              "teamId": 38,
              "playerId": 351341,
              "player": "T. Akomeah",
              "type": "Missing Fixture",
              "reason": "Lacking Match Fitness"
            },
            {
              "fixtureId": 1563125,
              "teamId": 38,
              "playerId": 152699,
              "player": "K. Baah",
              "type": "Missing Fixture",
              "reason": "Knock"
            },
            {
              "fixtureId": 1563125,
              "teamId": 38,
              "playerId": 20044,
              "player": "M. Bola",
              "type": "Missing Fixture",
              "reason": "Hamstring Injury"
            },
            {
              "fixtureId": 1563125,
              "teamId": 38,
              "playerId": 367473,
              "player": "J. Grieves",
              "type": "Missing Fixture",
              "reason": "Lacking Match Fitness"
            },
            {
              "fixtureId": 1563125,
              "teamId": 38,
              "playerId": 193296,
              "player": "J. Ngakia",
              "type": "Missing Fixture",
              "reason": "Thigh Injury"
            }
          ],
          "lineupsChecked": false,
          "lineups": []
        },
        {
          "fixtureId": 1563121,
          "kickoff": "2026-09-02T03:45:00+09:00",
          "status": "FT",
          "homeTeamId": 1355,
          "homeTeam": "Portsmouth",
          "awayTeamId": 69,
          "awayTeam": "Derby",
          "injuriesChecked": true,
          "injuries": [
            {
              "fixtureId": 1563121,
              "teamId": 1355,
              "playerId": 17728,
              "player": "K. Anderson",
              "type": "Missing Fixture",
              "reason": "Muscle Injury"
            },
            {
              "fixtureId": 1563121,
              "teamId": 1355,
              "playerId": 343894,
              "player": "J. Farrell",
              "type": "Missing Fixture",
              "reason": "Groin Injury"
            },
            {
              "fixtureId": 1563121,
              "teamId": 1355,
              "playerId": 237115,
              "player": "M. Kosznovszky",
              "type": "Missing Fixture",
              "reason": "Knee Injury"
            },
            {
              "fixtureId": 1563121,
              "teamId": 1355,
              "playerId": 19002,
              "player": "J. Murphy",
              "type": "Missing Fixture",
              "reason": "Injury"
            },
            {
              "fixtureId": 1563121,
              "teamId": 1355,
              "playerId": 20138,
              "player": "C. Ogilvie",
              "type": "Missing Fixture",
              "reason": "Knee Injury"
            },
            {
              "fixtureId": 1563121,
              "teamId": 1355,
              "playerId": 340136,
              "player": "F. Umeh",
              "type": "Missing Fixture",
              "reason": "Hamstring Injury"
            },
            {
              "fixtureId": 1563121,
              "teamId": 1355,
              "playerId": 361472,
              "player": "T. Waddingham",
              "type": "Missing Fixture",
              "reason": "Ankle Injury"
            },
            {
              "fixtureId": 1563121,
              "teamId": 69,
              "playerId": 407652,
              "player": "P. Agyemang",
              "type": "Missing Fixture",
              "reason": "Achilles Tendon Injury"
            },
            {
              "fixtureId": 1563121,
              "teamId": 69,
              "playerId": 19860,
              "player": "M. Clarke",
              "type": "Missing Fixture",
              "reason": "Calf Injury"
            },
            {
              "fixtureId": 1563121,
              "teamId": 69,
              "playerId": 19083,
              "player": "C. Morris",
              "type": "Missing Fixture",
              "reason": "Inactive"
            },
            {
              "fixtureId": 1563121,
              "teamId": 69,
              "playerId": 37760,
              "player": "D. Murkin",
              "type": "Missing Fixture",
              "reason": "Hamstring Injury"
            },
            {
              "fixtureId": 1563121,
              "teamId": 69,
              "playerId": 19472,
              "player": "L. Travis",
              "type": "Missing Fixture",
              "reason": "Injury"
            }
          ],
          "lineupsChecked": false,
          "lineups": []
        },
        {
          "fixtureId": 1563120,
          "kickoff": "2026-09-02T03:45:00+09:00",
          "status": "FT",
          "homeTeamId": 1379,
          "homeTeam": "Lincoln",
          "awayTeamId": 67,
          "awayTeam": "Blackburn",
          "injuriesChecked": true,
          "injuries": [
            {
              "fixtureId": 1563120,
              "teamId": 1379,
              "playerId": 19753,
              "player": "S. Bradley",
              "type": "Missing Fixture",
              "reason": "Knock"
            },
            {
              "fixtureId": 1563120,
              "teamId": 1379,
              "playerId": 19771,
              "player": "J. Collins",
              "type": "Missing Fixture",
              "reason": "Knee Injury"
            },
            {
              "fixtureId": 1563120,
              "teamId": 1379,
              "playerId": 19288,
              "player": "T. Darikwa",
              "type": "Missing Fixture",
              "reason": "Knee Injury"
            },
            {
              "fixtureId": 1563120,
              "teamId": 67,
              "playerId": 429613,
              "player": "M. Baradji",
              "type": "Missing Fixture",
              "reason": "Hamstring Injury"
            },
            {
              "fixtureId": 1563120,
              "teamId": 67,
              "playerId": 50968,
              "player": "M. Jorgensen",
              "type": "Missing Fixture",
              "reason": "Hamstring Injury"
            },
            {
              "fixtureId": 1563120,
              "teamId": 67,
              "playerId": 30998,
              "player": "A. Kargbo",
              "type": "Missing Fixture",
              "reason": "Muscle Injury"
            },
            {
              "fixtureId": 1563120,
              "teamId": 67,
              "playerId": 313248,
              "player": "M. Litherland",
              "type": "Missing Fixture",
              "reason": "Muscle Injury"
            },
            {
              "fixtureId": 1563120,
              "teamId": 67,
              "playerId": 7037,
              "player": "L. Miller",
              "type": "Missing Fixture",
              "reason": "Achilles Tendon Injury"
            },
            {
              "fixtureId": 1563120,
              "teamId": 67,
              "playerId": 33147,
              "player": "Y. Ohashi",
              "type": "Missing Fixture",
              "reason": "Inactive"
            },
            {
              "fixtureId": 1563120,
              "teamId": 67,
              "playerId": 17685,
              "player": "H. Pickering",
              "type": "Missing Fixture",
              "reason": "Inactive"
            },
            {
              "fixtureId": 1563120,
              "teamId": 67,
              "playerId": 17395,
              "player": "S. Wharton",
              "type": "Missing Fixture",
              "reason": "Achilles Tendon Injury"
            }
          ],
          "lineupsChecked": false,
          "lineups": []
        },
        {
          "fixtureId": 1563119,
          "kickoff": "2026-09-02T04:00:00+09:00",
          "status": "FT",
          "homeTeamId": 54,
          "homeTeam": "Birmingham",
          "awayTeamId": 41,
          "awayTeam": "Southampton",
          "injuriesChecked": true,
          "injuries": [
            {
              "fixtureId": 1563119,
              "teamId": 54,
              "playerId": 19211,
              "player": "M. Bird",
              "type": "Missing Fixture",
              "reason": "Inactive"
            },
            {
              "fixtureId": 1563119,
              "teamId": 54,
              "playerId": 19202,
              "player": "L. Buchanan",
              "type": "Missing Fixture",
              "reason": "Knee Injury"
            },
            {
              "fixtureId": 1563119,
              "teamId": 54,
              "playerId": 231078,
              "player": "T. Gardner-Hickman",
              "type": "Missing Fixture",
              "reason": "Injury"
            },
            {
              "fixtureId": 1563119,
              "teamId": 54,
              "playerId": 167656,
              "player": "M. Leonard",
              "type": "Missing Fixture",
              "reason": "Achilles Tendon Injury"
            },
            {
              "fixtureId": 1563119,
              "teamId": 41,
              "playerId": 282060,
              "player": "C. Jander",
              "type": "Missing Fixture",
              "reason": "Lacking Match Fitness"
            }
          ],
          "lineupsChecked": false,
          "lineups": []
        },
        {
          "fixtureId": 1563124,
          "kickoff": "2026-09-02T04:00:00+09:00",
          "status": "FT",
          "homeTeamId": 75,
          "homeTeam": "Stoke City",
          "awayTeamId": 71,
          "awayTeam": "Norwich",
          "injuriesChecked": true,
          "injuries": [
            {
              "fixtureId": 1563124,
              "teamId": 75,
              "playerId": 360011,
              "player": "A. Ampah",
              "type": "Missing Fixture",
              "reason": "Hamstring Injury"
            },
            {
              "fixtureId": 1563124,
              "teamId": 75,
              "playerId": 312902,
              "player": "L. Cisse",
              "type": "Missing Fixture",
              "reason": "Knock"
            },
            {
              "fixtureId": 1563124,
              "teamId": 75,
              "playerId": 18813,
              "player": "A. Cresswell",
              "type": "Missing Fixture",
              "reason": "Knee Injury"
            },
            {
              "fixtureId": 1563124,
              "teamId": 75,
              "playerId": 18914,
              "player": "B. Gibson",
              "type": "Missing Fixture",
              "reason": "Inactive"
            },
            {
              "fixtureId": 1563124,
              "teamId": 75,
              "playerId": 30809,
              "player": "S. Ingelsson",
              "type": "Missing Fixture",
              "reason": "Inactive"
            },
            {
              "fixtureId": 1563124,
              "teamId": 75,
              "playerId": 294552,
              "player": "J. Tchamadeu",
              "type": "Missing Fixture",
              "reason": "Knee Injury"
            },
            {
              "fixtureId": 1563124,
              "teamId": 71,
              "playerId": 362145,
              "player": "A. Ahmed",
              "type": "Missing Fixture",
              "reason": "Knee Injury"
            },
            {
              "fixtureId": 1563124,
              "teamId": 71,
              "playerId": 162075,
              "player": "P. Maghoma",
              "type": "Missing Fixture",
              "reason": "Calf Injury"
            },
            {
              "fixtureId": 1563124,
              "teamId": 71,
              "playerId": 383773,
              "player": "L. Mahovo",
              "type": "Missing Fixture",
              "reason": "Ankle Injury"
            },
            {
              "fixtureId": 1563124,
              "teamId": 71,
              "playerId": 326105,
              "player": "J. Makama",
              "type": "Missing Fixture",
              "reason": "Foot Injury"
            },
            {
              "fixtureId": 1563124,
              "teamId": 71,
              "playerId": 45947,
              "player": "M. Topic",
              "type": "Missing Fixture",
              "reason": "Knee Injury"
            }
          ],
          "lineupsChecked": false,
          "lineups": []
        }
      ]
    }
  ],
  "dates": [
    {
      "date": "2026-09-01",
      "updatedAt": "2026-09-01T13:28:53.084Z",
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
              "points": 6,
              "goalsDiff": 4,
              "form": "WW",
              "all": {
                "played": 2,
                "wins": 2,
                "draws": 0,
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
                "goalsFor": 3,
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
              "teamId": 64,
              "team": "Hull City",
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
                "goalsFor": 4,
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
              "teamId": 55,
              "team": "Brentford",
              "rank": 5,
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
              "teamId": 34,
              "team": "Newcastle",
              "rank": 6,
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
              "teamId": 45,
              "team": "Everton",
              "rank": 7,
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
                "goalsFor": 1,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 63,
              "team": "Leeds",
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
              "teamId": 51,
              "team": "Brighton",
              "rank": 9,
              "points": 3,
              "goalsDiff": 3,
              "form": "LW",
              "all": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 7,
                "goalsAgainst": 4
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
                "goalsFor": 3,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 33,
              "team": "Manchester United",
              "rank": 10,
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
                "goalsFor": 5,
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
              "teamId": 746,
              "team": "Sunderland",
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
                "goalsFor": 1,
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
              "teamId": 57,
              "team": "Ipswich",
              "rank": 12,
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
                "goalsFor": 2,
                "goalsAgainst": 1
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
              "teamId": 40,
              "team": "Liverpool",
              "rank": 13,
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
              "teamId": 35,
              "team": "Bournemouth",
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
              "teamId": 65,
              "team": "Nottingham Forest",
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
              "teamId": 36,
              "team": "Fulham",
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
              "teamId": 1346,
              "team": "Coventry",
              "rank": 17,
              "points": 0,
              "goalsDiff": -4,
              "form": "LL",
              "all": {
                "played": 2,
                "wins": 0,
                "draws": 0,
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
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 0,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 52,
              "team": "Crystal Palace",
              "rank": 18,
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
                "goalsFor": 1,
                "goalsAgainst": 4
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
              "teamId": 66,
              "team": "Aston Villa",
              "rank": 19,
              "points": 0,
              "goalsDiff": -5,
              "form": "LL",
              "all": {
                "played": 2,
                "wins": 0,
                "draws": 0,
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
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 0,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 47,
              "team": "Tottenham",
              "rank": 20,
              "points": 0,
              "goalsDiff": -5,
              "form": "LL",
              "all": {
                "played": 2,
                "wins": 0,
                "draws": 0,
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
              "teamId": 66,
              "team": "Aston Villa",
              "form": "LL",
              "all": {
                "played": 2,
                "wins": 0,
                "draws": 0,
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
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 0,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 42,
              "team": "Arsenal",
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
                "goalsFor": 3,
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
              "fixtureId": 1557377,
              "kickoff": "2026-09-01T04:00:00+09:00",
              "status": "FT",
              "homeTeamId": 66,
              "homeTeam": "Aston Villa",
              "awayTeamId": 42,
              "awayTeam": "Arsenal",
              "injuriesChecked": true,
              "injuries": [
                {
                  "fixtureId": 1557377,
                  "teamId": 66,
                  "playerId": 983,
                  "player": "L. Bailey",
                  "type": "Missing Fixture",
                  "reason": "Muscle Injury"
                },
                {
                  "fixtureId": 1557377,
                  "teamId": 66,
                  "playerId": 195103,
                  "player": "Joao Gomes",
                  "type": "Missing Fixture",
                  "reason": "Red Card"
                },
                {
                  "fixtureId": 1557377,
                  "teamId": 66,
                  "playerId": 514519,
                  "player": "B. Madjo",
                  "type": "Missing Fixture",
                  "reason": "Ankle Injury"
                },
                {
                  "fixtureId": 1557377,
                  "teamId": 66,
                  "playerId": 406244,
                  "player": "J. Manzambi",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1557377,
                  "teamId": 66,
                  "playerId": 162714,
                  "player": "A. Onana",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1557377,
                  "teamId": 42,
                  "playerId": 643,
                  "player": "Gabriel Jesus",
                  "type": "Missing Fixture",
                  "reason": "Transfer negotiations"
                },
                {
                  "fixtureId": 1557377,
                  "teamId": 42,
                  "playerId": 127769,
                  "player": "G. Martinelli",
                  "type": "Missing Fixture",
                  "reason": "Transfer negotiations"
                },
                {
                  "fixtureId": 1557377,
                  "teamId": 42,
                  "playerId": 22090,
                  "player": "W. Saliba",
                  "type": "Missing Fixture",
                  "reason": "Back Injury"
                },
                {
                  "fixtureId": 1557377,
                  "teamId": 42,
                  "playerId": 38746,
                  "player": "J. Timber",
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
          "key": "LALIGA",
          "leagueId": 140,
          "season": "2026",
          "standings": [
            {
              "teamId": 529,
              "team": "Barcelona",
              "rank": 1,
              "points": 9,
              "goalsDiff": 10,
              "form": "WWW",
              "all": {
                "played": 3,
                "wins": 3,
                "draws": 0,
                "losses": 0,
                "goalsFor": 12,
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
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 5,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 541,
              "team": "Real Madrid",
              "rank": 2,
              "points": 9,
              "goalsDiff": 8,
              "form": "WWW",
              "all": {
                "played": 3,
                "wins": 3,
                "draws": 0,
                "losses": 0,
                "goalsFor": 10,
                "goalsAgainst": 2
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
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 2,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 530,
              "team": "Atletico Madrid",
              "rank": 3,
              "points": 7,
              "goalsDiff": 4,
              "form": "WDW",
              "all": {
                "played": 3,
                "wins": 2,
                "draws": 1,
                "losses": 0,
                "goalsFor": 7,
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
              "rank": 4,
              "points": 7,
              "goalsDiff": 4,
              "form": "WDW",
              "all": {
                "played": 3,
                "wins": 2,
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
                "goalsFor": 4,
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
              "teamId": 727,
              "team": "Osasuna",
              "rank": 5,
              "points": 7,
              "goalsDiff": 2,
              "form": "WWD",
              "all": {
                "played": 3,
                "wins": 2,
                "draws": 1,
                "losses": 0,
                "goalsFor": 3,
                "goalsAgainst": 1
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
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 2,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 536,
              "team": "Sevilla",
              "rank": 6,
              "points": 6,
              "goalsDiff": 1,
              "form": "LWW",
              "all": {
                "played": 3,
                "wins": 2,
                "draws": 0,
                "losses": 1,
                "goalsFor": 6,
                "goalsAgainst": 5
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
              "rank": 7,
              "points": 6,
              "goalsDiff": -1,
              "form": "LWW",
              "all": {
                "played": 3,
                "wins": 2,
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
                "goalsFor": 1,
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
              "rank": 8,
              "points": 5,
              "goalsDiff": 2,
              "form": "WDD",
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
              "teamId": 539,
              "team": "Levante",
              "rank": 9,
              "points": 4,
              "goalsDiff": 0,
              "form": "WDL",
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
                "goalsFor": 5,
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
              "teamId": 4665,
              "team": "Racing Santander",
              "rank": 10,
              "points": 4,
              "goalsDiff": 0,
              "form": "WLD",
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
                "draws": 1,
                "losses": 0,
                "goalsFor": 5,
                "goalsAgainst": 4
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
              "teamId": 540,
              "team": "Espanyol",
              "rank": 11,
              "points": 3,
              "goalsDiff": 1,
              "form": "LLW",
              "all": {
                "played": 3,
                "wins": 1,
                "draws": 0,
                "losses": 2,
                "goalsFor": 5,
                "goalsAgainst": 4
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
                "draws": 0,
                "losses": 1,
                "goalsFor": 1,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 531,
              "team": "Athletic Club",
              "rank": 12,
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
                "goalsFor": 1,
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
              "teamId": 548,
              "team": "Real Sociedad",
              "rank": 13,
              "points": 3,
              "goalsDiff": -3,
              "form": "WLL",
              "all": {
                "played": 3,
                "wins": 1,
                "draws": 0,
                "losses": 2,
                "goalsFor": 3,
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
              "rank": 14,
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
              "rank": 15,
              "points": 2,
              "goalsDiff": -1,
              "form": "LDD",
              "all": {
                "played": 3,
                "wins": 0,
                "draws": 2,
                "losses": 1,
                "goalsFor": 4,
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
              "rank": 16,
              "points": 1,
              "goalsDiff": -3,
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
                "goalsFor": 0,
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
              "teamId": 538,
              "team": "Celta Vigo",
              "rank": 17,
              "points": 1,
              "goalsDiff": -3,
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
                "draws": 0,
                "losses": 2,
                "goalsFor": 1,
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
              "teamId": 728,
              "team": "Rayo Vallecano",
              "rank": 18,
              "points": 1,
              "goalsDiff": -4,
              "form": "LDL",
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
                "draws": 1,
                "losses": 0,
                "goalsFor": 1,
                "goalsAgainst": 1
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
              "teamId": 535,
              "team": "Malaga",
              "rank": 20,
              "points": 1,
              "goalsDiff": -6,
              "form": "LDL",
              "all": {
                "played": 3,
                "wins": 0,
                "draws": 1,
                "losses": 2,
                "goalsFor": 1,
                "goalsAgainst": 7
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
                "draws": 0,
                "losses": 2,
                "goalsFor": 0,
                "goalsAgainst": 6
              }
            }
          ],
          "teams": [
            {
              "teamId": 727,
              "team": "Osasuna",
              "form": "DWW",
              "all": {
                "played": 3,
                "wins": 2,
                "draws": 1,
                "losses": 0,
                "goalsFor": 3,
                "goalsAgainst": 1
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
              "teamId": 529,
              "team": "Barcelona",
              "form": "WWW",
              "all": {
                "played": 3,
                "wins": 3,
                "draws": 0,
                "losses": 0,
                "goalsFor": 12,
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
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 5,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 728,
              "team": "Rayo Vallecano",
              "form": "LDL",
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
                "draws": 1,
                "losses": 0,
                "goalsFor": 1,
                "goalsAgainst": 1
              },
              "away": {
                "played": 2,
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 3,
                "goalsAgainst": 7
              }
            }
          ],
          "fixtures": [
            {
              "fixtureId": 1570358,
              "kickoff": "2026-09-01T02:30:00+09:00",
              "status": "FT",
              "homeTeamId": 727,
              "homeTeam": "Osasuna",
              "awayTeamId": 546,
              "awayTeam": "Getafe",
              "injuriesChecked": true,
              "injuries": [
                {
                  "fixtureId": 1570358,
                  "teamId": 727,
                  "playerId": 21701,
                  "player": "V. Rosier",
                  "type": "Missing Fixture",
                  "reason": "Hamstring Injury"
                },
                {
                  "fixtureId": 1570358,
                  "teamId": 546,
                  "playerId": 46813,
                  "player": "A. Abqar",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1570358,
                  "teamId": 546,
                  "playerId": 47320,
                  "player": "Juanmi",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1570358,
                  "teamId": 546,
                  "playerId": 343205,
                  "player": "M. Martin",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1570358,
                  "teamId": 546,
                  "playerId": 403554,
                  "player": "C. Uche",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                }
              ],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1570354,
              "kickoff": "2026-09-01T04:30:00+09:00",
              "status": "FT",
              "homeTeamId": 529,
              "homeTeam": "Barcelona",
              "awayTeamId": 728,
              "awayTeam": "Rayo Vallecano",
              "injuriesChecked": true,
              "injuries": [
                {
                  "fixtureId": 1570354,
                  "teamId": 529,
                  "playerId": 338958,
                  "player": "R. Bardghji",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1570354,
                  "teamId": 529,
                  "playerId": 329728,
                  "player": "M. Casado",
                  "type": "Missing Fixture",
                  "reason": "Coach's decision"
                },
                {
                  "fixtureId": 1570354,
                  "teamId": 529,
                  "playerId": 296667,
                  "player": "Gavi",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1570354,
                  "teamId": 529,
                  "playerId": 1305,
                  "player": "D. Livakovic",
                  "type": "Missing Fixture",
                  "reason": "Inactive"
                },
                {
                  "fixtureId": 1570354,
                  "teamId": 529,
                  "playerId": 538,
                  "player": "F. de Jong",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1570354,
                  "teamId": 728,
                  "playerId": 11379,
                  "player": "A. Batalla",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1570354,
                  "teamId": 728,
                  "playerId": 30924,
                  "player": "M. Kumbulla",
                  "type": "Missing Fixture",
                  "reason": "Muscle Injury"
                },
                {
                  "fixtureId": 1570354,
                  "teamId": 728,
                  "playerId": 1847,
                  "player": "Luiz Felipe",
                  "type": "Missing Fixture",
                  "reason": "Hamstring Injury"
                },
                {
                  "fixtureId": 1570354,
                  "teamId": 728,
                  "playerId": 131546,
                  "player": "I. Palazon",
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
          "key": "SERIEA",
          "leagueId": 135,
          "season": "2026",
          "standings": [
            {
              "teamId": 497,
              "team": "AS Roma",
              "rank": 1,
              "points": 6,
              "goalsDiff": 8,
              "form": "WW",
              "all": {
                "played": 2,
                "wins": 2,
                "draws": 0,
                "losses": 0,
                "goalsFor": 8,
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
                "goalsFor": 4,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 505,
              "team": "Inter",
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
              "teamId": 489,
              "team": "AC Milan",
              "rank": 3,
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
              "teamId": 496,
              "team": "Juventus",
              "rank": 4,
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
              "teamId": 499,
              "team": "Atalanta",
              "rank": 5,
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
                "played": 2,
                "wins": 2,
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
              "teamId": 494,
              "team": "Udinese",
              "rank": 7,
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
              "teamId": 895,
              "team": "Como",
              "rank": 8,
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
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
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
              "teamId": 512,
              "team": "Frosinone",
              "rank": 9,
              "points": 3,
              "goalsDiff": 2,
              "form": "WL",
              "all": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 3,
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
                "goalsFor": 3,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 492,
              "team": "Napoli",
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
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 488,
              "team": "Sassuolo",
              "rank": 11,
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
              "teamId": 490,
              "team": "Cagliari",
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
              "rank": 13,
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
              "teamId": 503,
              "team": "Torino",
              "rank": 14,
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
                "goalsFor": 1,
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
              "teamId": 500,
              "team": "Bologna",
              "rank": 15,
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
              "teamId": 495,
              "team": "Genoa",
              "rank": 16,
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
              "teamId": 523,
              "team": "Parma",
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
              "teamId": 1579,
              "team": "Monza",
              "rank": 18,
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
                "goalsFor": 2,
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
              "teamId": 517,
              "team": "Venezia",
              "rank": 19,
              "points": 0,
              "goalsDiff": -4,
              "form": "LL",
              "all": {
                "played": 2,
                "wins": 0,
                "draws": 0,
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
              "teamId": 502,
              "team": "Fiorentina",
              "rank": 20,
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
            }
          ],
          "teams": [
            {
              "teamId": 867,
              "team": "Lecce",
              "form": "WL",
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
              "teamId": 497,
              "team": "AS Roma",
              "form": "WW",
              "all": {
                "played": 2,
                "wins": 2,
                "draws": 0,
                "losses": 0,
                "goalsFor": 8,
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
                "goalsFor": 4,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 499,
              "team": "Atalanta",
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
                "played": 2,
                "wins": 2,
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
              "teamId": 500,
              "team": "Bologna",
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
            }
          ],
          "fixtures": [
            {
              "fixtureId": 1550103,
              "kickoff": "2026-09-01T01:30:00+09:00",
              "status": "FT",
              "homeTeamId": 867,
              "homeTeam": "Lecce",
              "awayTeamId": 497,
              "awayTeam": "AS Roma",
              "injuriesChecked": true,
              "injuries": [
                {
                  "fixtureId": 1550103,
                  "teamId": 497,
                  "playerId": 626686,
                  "player": "M. Bah",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1550103,
                  "teamId": 497,
                  "playerId": 782,
                  "player": "L. Pellegrini",
                  "type": "Missing Fixture",
                  "reason": "Thigh Injury"
                },
                {
                  "fixtureId": 1550103,
                  "teamId": 497,
                  "playerId": 162452,
                  "player": "D. Rensch",
                  "type": "Missing Fixture",
                  "reason": "Muscle Injury"
                }
              ],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1550098,
              "kickoff": "2026-09-01T03:45:00+09:00",
              "status": "FT",
              "homeTeamId": 499,
              "homeTeam": "Atalanta",
              "awayTeamId": 500,
              "awayTeam": "Bologna",
              "injuriesChecked": true,
              "injuries": [
                {
                  "fixtureId": 1550098,
                  "teamId": 499,
                  "playerId": 453906,
                  "player": "H. Ahanor",
                  "type": "Missing Fixture",
                  "reason": "Muscle Injury"
                },
                {
                  "fixtureId": 1550098,
                  "teamId": 499,
                  "playerId": 137976,
                  "player": "I. Hien",
                  "type": "Missing Fixture",
                  "reason": "Muscle Injury"
                },
                {
                  "fixtureId": 1550098,
                  "teamId": 499,
                  "playerId": 281495,
                  "player": "T. Kristensen",
                  "type": "Missing Fixture",
                  "reason": "Ankle Injury"
                },
                {
                  "fixtureId": 1550098,
                  "teamId": 499,
                  "playerId": 199837,
                  "player": "K. Sulemana",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1550098,
                  "teamId": 500,
                  "playerId": 319919,
                  "player": "O. El Azzouzi",
                  "type": "Missing Fixture",
                  "reason": "Thigh Injury"
                },
                {
                  "fixtureId": 1550098,
                  "teamId": 500,
                  "playerId": 278095,
                  "player": "J. Rowe",
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
          "key": "PRIMEIRA_LIGA",
          "leagueId": 94,
          "season": "2026",
          "standings": [
            {
              "teamId": 212,
              "team": "FC Porto",
              "rank": 1,
              "points": 12,
              "goalsDiff": 9,
              "form": "WWWW",
              "all": {
                "played": 4,
                "wins": 4,
                "draws": 0,
                "losses": 0,
                "goalsFor": 9,
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
              "points": 10,
              "goalsDiff": 7,
              "form": "WWWD",
              "all": {
                "played": 4,
                "wins": 3,
                "draws": 1,
                "losses": 0,
                "goalsFor": 12,
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
                "played": 2,
                "wins": 1,
                "draws": 1,
                "losses": 0,
                "goalsFor": 6,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 240,
              "team": "Arouca",
              "rank": 3,
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
              "teamId": 227,
              "team": "Santa Clara",
              "rank": 4,
              "points": 8,
              "goalsDiff": 2,
              "form": "DWWD",
              "all": {
                "played": 4,
                "wins": 2,
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
                "goalsFor": 3,
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
              "rank": 5,
              "points": 7,
              "goalsDiff": 8,
              "form": "WWD",
              "all": {
                "played": 3,
                "wins": 2,
                "draws": 1,
                "losses": 0,
                "goalsFor": 11,
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
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 7,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 762,
              "team": "GIL Vicente",
              "rank": 6,
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
                "wins": 2,
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
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 214,
              "team": "Maritimo",
              "rank": 7,
              "points": 7,
              "goalsDiff": 1,
              "form": "LDWW",
              "all": {
                "played": 4,
                "wins": 2,
                "draws": 1,
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
              "rank": 8,
              "points": 5,
              "goalsDiff": 1,
              "form": "WDD",
              "all": {
                "played": 3,
                "wins": 1,
                "draws": 2,
                "losses": 0,
                "goalsFor": 7,
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
              "rank": 9,
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
                "goalsFor": 1,
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
              "teamId": 225,
              "team": "Nacional",
              "rank": 10,
              "points": 4,
              "goalsDiff": 0,
              "form": "LLWD",
              "all": {
                "played": 4,
                "wins": 1,
                "draws": 1,
                "losses": 2,
                "goalsFor": 6,
                "goalsAgainst": 6
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
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 2,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 215,
              "team": "Moreirense",
              "rank": 11,
              "points": 4,
              "goalsDiff": -3,
              "form": "WLD",
              "all": {
                "played": 3,
                "wins": 1,
                "draws": 1,
                "losses": 1,
                "goalsFor": 3,
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
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 1,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 224,
              "team": "Vitória SC",
              "rank": 12,
              "points": 3,
              "goalsDiff": -2,
              "form": "LWLL",
              "all": {
                "played": 4,
                "wins": 1,
                "draws": 0,
                "losses": 3,
                "goalsFor": 3,
                "goalsAgainst": 5
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
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 2,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 226,
              "team": "Rio Ave",
              "rank": 13,
              "points": 3,
              "goalsDiff": -5,
              "form": "LWLL",
              "all": {
                "played": 4,
                "wins": 1,
                "draws": 0,
                "losses": 3,
                "goalsFor": 2,
                "goalsAgainst": 7
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
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 2,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 242,
              "team": "Famalicao",
              "rank": 14,
              "points": 2,
              "goalsDiff": -2,
              "form": "DLLD",
              "all": {
                "played": 4,
                "wins": 0,
                "draws": 2,
                "losses": 2,
                "goalsFor": 2,
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
                "played": 2,
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 1,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 238,
              "team": "Academico Viseu",
              "rank": 15,
              "points": 2,
              "goalsDiff": -4,
              "form": "LDLD",
              "all": {
                "played": 4,
                "wins": 0,
                "draws": 2,
                "losses": 2,
                "goalsFor": 4,
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
                "played": 2,
                "wins": 0,
                "draws": 2,
                "losses": 0,
                "goalsFor": 4,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 4724,
              "team": "Alverca",
              "rank": 16,
              "points": 2,
              "goalsDiff": -4,
              "form": "DLDL",
              "all": {
                "played": 4,
                "wins": 0,
                "draws": 2,
                "losses": 2,
                "goalsFor": 4,
                "goalsAgainst": 8
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
              "points": 0,
              "goalsDiff": -11,
              "form": "LLLL",
              "all": {
                "played": 4,
                "wins": 0,
                "draws": 0,
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
              "teamId": 211,
              "team": "Benfica",
              "form": "DWW",
              "all": {
                "played": 3,
                "wins": 2,
                "draws": 1,
                "losses": 0,
                "goalsFor": 11,
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
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 7,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 230,
              "team": "Estoril",
              "form": "DLLL",
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
              "teamId": 217,
              "team": "SC Braga",
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
                "goalsFor": 1,
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
              "teamId": 224,
              "team": "Vitória SC",
              "form": "LLWL",
              "all": {
                "played": 4,
                "wins": 1,
                "draws": 0,
                "losses": 3,
                "goalsFor": 3,
                "goalsAgainst": 5
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
              "fixtureId": 1575476,
              "kickoff": "2026-09-01T04:15:00+09:00",
              "status": "FT",
              "homeTeamId": 211,
              "homeTeam": "Benfica",
              "awayTeamId": 230,
              "awayTeam": "Estoril",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1575477,
              "kickoff": "2026-09-01T04:15:00+09:00",
              "status": "FT",
              "homeTeamId": 217,
              "homeTeam": "SC Braga",
              "awayTeamId": 224,
              "awayTeam": "Vitória SC",
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
                "goalsFor": 5,
                "goalsAgainst": 4
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
              "teamId": 997,
              "team": "Gençlerbirliği S.K.",
              "rank": 2,
              "points": 7,
              "goalsDiff": 2,
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
            },
            {
              "teamId": 549,
              "team": "Beşiktaş",
              "rank": 3,
              "points": 6,
              "goalsDiff": 4,
              "form": "WLW",
              "all": {
                "played": 3,
                "wins": 2,
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
                "goalsFor": 7,
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
              "teamId": 611,
              "team": "Fenerbahçe",
              "rank": 4,
              "points": 6,
              "goalsDiff": 3,
              "form": "WWL",
              "all": {
                "played": 3,
                "wins": 2,
                "draws": 0,
                "losses": 1,
                "goalsFor": 7,
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
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 3579,
              "team": "Amed",
              "rank": 5,
              "points": 6,
              "goalsDiff": 2,
              "form": "WLW",
              "all": {
                "played": 3,
                "wins": 2,
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
                "goalsFor": 5,
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
              "teamId": 7411,
              "team": "Kocaelispor",
              "rank": 6,
              "points": 6,
              "goalsDiff": 1,
              "form": "WWL",
              "all": {
                "played": 3,
                "wins": 2,
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
                "goalsFor": 2,
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
              "teamId": 1007,
              "team": "Rizespor",
              "rank": 7,
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
              "teamId": 1004,
              "team": "Kasımpaşa",
              "rank": 8,
              "points": 5,
              "goalsDiff": 1,
              "form": "DWD",
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
              "teamId": 564,
              "team": "Başakşehir",
              "rank": 9,
              "points": 4,
              "goalsDiff": 1,
              "form": "DLW",
              "all": {
                "played": 3,
                "wins": 1,
                "draws": 1,
                "losses": 1,
                "goalsFor": 4,
                "goalsAgainst": 3
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
              "rank": 10,
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
                "goalsFor": 3,
                "goalsAgainst": 5
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
              "rank": 11,
              "points": 4,
              "goalsDiff": 0,
              "form": "LWD",
              "all": {
                "played": 3,
                "wins": 1,
                "draws": 1,
                "losses": 1,
                "goalsFor": 4,
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
                "played": 2,
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 2,
                "goalsAgainst": 3
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
              "teamId": 3573,
              "team": "Gaziantep FK",
              "rank": 13,
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
              "teamId": 3588,
              "team": "Eyüpspor",
              "rank": 14,
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
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
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
              "teamId": 994,
              "team": "Göztepe",
              "rank": 15,
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
              "teamId": 6343,
              "team": "Çorum FK",
              "rank": 16,
              "points": 1,
              "goalsDiff": -5,
              "form": "LLD",
              "all": {
                "played": 3,
                "wins": 0,
                "draws": 1,
                "losses": 2,
                "goalsFor": 4,
                "goalsAgainst": 9
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
                "goalsFor": 4,
                "goalsAgainst": 8
              }
            },
            {
              "teamId": 1009,
              "team": "Erzurumspor FK",
              "rank": 17,
              "points": 1,
              "goalsDiff": -7,
              "form": "DLL",
              "all": {
                "played": 3,
                "wins": 0,
                "draws": 1,
                "losses": 2,
                "goalsFor": 1,
                "goalsAgainst": 8
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
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 1,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 607,
              "team": "Konyaspor",
              "rank": 18,
              "points": 0,
              "goalsDiff": -4,
              "form": "LLL",
              "all": {
                "played": 3,
                "wins": 0,
                "draws": 0,
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
                "goalsAgainst": 3
              },
              "away": {
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 2,
                "goalsAgainst": 4
              }
            }
          ],
          "teams": [
            {
              "teamId": 549,
              "team": "Beşiktaş",
              "form": "WLW",
              "all": {
                "played": 3,
                "wins": 2,
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
                "goalsFor": 7,
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
              "teamId": 6343,
              "team": "Çorum FK",
              "form": "DLL",
              "all": {
                "played": 3,
                "wins": 0,
                "draws": 1,
                "losses": 2,
                "goalsFor": 4,
                "goalsAgainst": 9
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
                "goalsFor": 4,
                "goalsAgainst": 8
              }
            },
            {
              "teamId": 3579,
              "team": "Amed",
              "form": "WLW",
              "all": {
                "played": 3,
                "wins": 2,
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
                "goalsFor": 5,
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
              "teamId": 998,
              "team": "Trabzonspor",
              "form": "DWL",
              "all": {
                "played": 3,
                "wins": 1,
                "draws": 1,
                "losses": 1,
                "goalsFor": 4,
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
              "fixtureId": 1584387,
              "kickoff": "2026-09-01T03:30:00+09:00",
              "status": "FT",
              "homeTeamId": 549,
              "homeTeam": "Beşiktaş",
              "awayTeamId": 6343,
              "awayTeam": "Çorum FK",
              "injuriesChecked": true,
              "injuries": [
                {
                  "fixtureId": 1584387,
                  "teamId": 6343,
                  "playerId": 68213,
                  "player": "A. Kyziridis",
                  "type": "Missing Fixture",
                  "reason": "Red Card"
                }
              ],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1584385,
              "kickoff": "2026-09-01T03:30:00+09:00",
              "status": "FT",
              "homeTeamId": 3579,
              "homeTeam": "Amed",
              "awayTeamId": 998,
              "awayTeam": "Trabzonspor",
              "injuriesChecked": true,
              "injuries": [
                {
                  "fixtureId": 1584385,
                  "teamId": 3579,
                  "playerId": 458773,
                  "player": "M. Yildirim",
                  "type": "Missing Fixture",
                  "reason": "Inactive"
                },
                {
                  "fixtureId": 1584385,
                  "teamId": 998,
                  "playerId": 63627,
                  "player": "A. Batagov",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1584385,
                  "teamId": 998,
                  "playerId": 274355,
                  "player": "B. Bouchouari",
                  "type": "Missing Fixture",
                  "reason": "Inactive"
                },
                {
                  "fixtureId": 1584385,
                  "teamId": 998,
                  "playerId": 22408,
                  "player": "T. Jabol-Folcarelli",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1584385,
                  "teamId": 998,
                  "playerId": 1938,
                  "player": "R. Malinovskyi",
                  "type": "Missing Fixture",
                  "reason": "Inactive"
                },
                {
                  "fixtureId": 1584385,
                  "teamId": 998,
                  "playerId": 47443,
                  "player": "O. Yokuslu",
                  "type": "Missing Fixture",
                  "reason": "Lacking Match Fitness"
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
      "date": "2026-09-02",
      "updatedAt": "2026-09-02T12:45:32.122Z",
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
              "points": 10,
              "goalsDiff": 6,
              "form": "WWDW",
              "all": {
                "played": 4,
                "wins": 3,
                "draws": 1,
                "losses": 0,
                "goalsFor": 7,
                "goalsAgainst": 1
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
                "wins": 2,
                "draws": 0,
                "losses": 0,
                "goalsFor": 5,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 1335,
              "team": "Charlton",
              "rank": 2,
              "points": 9,
              "goalsDiff": 3,
              "form": "WWW",
              "all": {
                "played": 3,
                "wins": 3,
                "draws": 0,
                "losses": 0,
                "goalsFor": 5,
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
                "goalsFor": 2,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 39,
              "team": "Wolves",
              "rank": 3,
              "points": 7,
              "goalsDiff": 3,
              "form": "LWWD",
              "all": {
                "played": 4,
                "wins": 2,
                "draws": 1,
                "losses": 1,
                "goalsFor": 11,
                "goalsAgainst": 8
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
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 5,
                "goalsAgainst": 5
              }
            },
            {
              "teamId": 72,
              "team": "QPR",
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
                "goalsFor": 0,
                "goalsAgainst": 0
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
              "rank": 5,
              "points": 7,
              "goalsDiff": 1,
              "form": "WWDL",
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
                "goalsFor": 2,
                "goalsAgainst": 3
              },
              "away": {
                "played": 2,
                "wins": 1,
                "draws": 1,
                "losses": 0,
                "goalsFor": 5,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 70,
              "team": "Middlesbrough",
              "rank": 6,
              "points": 6,
              "goalsDiff": 2,
              "form": "WLW",
              "all": {
                "played": 3,
                "wins": 2,
                "draws": 0,
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
              "rank": 7,
              "points": 6,
              "goalsDiff": 1,
              "form": "LWW",
              "all": {
                "played": 3,
                "wins": 2,
                "draws": 0,
                "losses": 1,
                "goalsFor": 6,
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
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 58,
              "team": "Millwall",
              "rank": 8,
              "points": 6,
              "goalsDiff": 1,
              "form": "LWW",
              "all": {
                "played": 3,
                "wins": 2,
                "draws": 0,
                "losses": 1,
                "goalsFor": 6,
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
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 5
              }
            },
            {
              "teamId": 54,
              "team": "Birmingham",
              "rank": 9,
              "points": 6,
              "goalsDiff": 1,
              "form": "DWDD",
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
              "teamId": 62,
              "team": "Sheffield Utd",
              "rank": 10,
              "points": 6,
              "goalsDiff": 1,
              "form": "WDDD",
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
                "wins": 1,
                "draws": 1,
                "losses": 0,
                "goalsFor": 3,
                "goalsAgainst": 2
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
              "teamId": 48,
              "team": "West Ham",
              "rank": 11,
              "points": 5,
              "goalsDiff": 1,
              "form": "WDLD",
              "all": {
                "played": 4,
                "wins": 1,
                "draws": 2,
                "losses": 1,
                "goalsFor": 8,
                "goalsAgainst": 7
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
                "wins": 0,
                "draws": 2,
                "losses": 0,
                "goalsFor": 3,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 67,
              "team": "Blackburn",
              "rank": 12,
              "points": 5,
              "goalsDiff": 0,
              "form": "DLWD",
              "all": {
                "played": 4,
                "wins": 1,
                "draws": 2,
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
                "played": 2,
                "wins": 0,
                "draws": 2,
                "losses": 0,
                "goalsFor": 2,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 38,
              "team": "Watford",
              "rank": 13,
              "points": 5,
              "goalsDiff": -1,
              "form": "LDDW",
              "all": {
                "played": 4,
                "wins": 1,
                "draws": 2,
                "losses": 1,
                "goalsFor": 4,
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
                "played": 2,
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 1,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 68,
              "team": "Bolton",
              "rank": 14,
              "points": 4,
              "goalsDiff": -1,
              "form": "LLDW",
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
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 2,
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
              "teamId": 69,
              "team": "Derby",
              "rank": 15,
              "points": 4,
              "goalsDiff": -2,
              "form": "WLDL",
              "all": {
                "played": 4,
                "wins": 1,
                "draws": 1,
                "losses": 2,
                "goalsFor": 5,
                "goalsAgainst": 7
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
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 1379,
              "team": "Lincoln",
              "rank": 16,
              "points": 4,
              "goalsDiff": -2,
              "form": "DWLL",
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
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 1,
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
              "teamId": 41,
              "team": "Southampton",
              "rank": 17,
              "points": 3,
              "goalsDiff": 5,
              "form": "DWWL",
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
                "goalsFor": 8,
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
              "teamId": 43,
              "team": "Cardiff",
              "rank": 18,
              "points": 3,
              "goalsDiff": 0,
              "form": "DDD",
              "all": {
                "played": 3,
                "wins": 0,
                "draws": 3,
                "losses": 0,
                "goalsFor": 5,
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
                "played": 1,
                "wins": 0,
                "draws": 1,
                "losses": 0,
                "goalsFor": 2,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 71,
              "team": "Norwich",
              "rank": 19,
              "points": 3,
              "goalsDiff": -2,
              "form": "LWLL",
              "all": {
                "played": 4,
                "wins": 1,
                "draws": 0,
                "losses": 3,
                "goalsFor": 5,
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
                "draws": 0,
                "losses": 2,
                "goalsFor": 0,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 1355,
              "team": "Portsmouth",
              "rank": 20,
              "points": 3,
              "goalsDiff": -3,
              "form": "LLWL",
              "all": {
                "played": 4,
                "wins": 1,
                "draws": 0,
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
              "teamId": 75,
              "team": "Stoke City",
              "rank": 21,
              "points": 3,
              "goalsDiff": -5,
              "form": "WLLL",
              "all": {
                "played": 4,
                "wins": 1,
                "draws": 0,
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
                "played": 2,
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 2,
                "goalsAgainst": 7
              }
            },
            {
              "teamId": 1837,
              "team": "Wrexham",
              "rank": 22,
              "points": 2,
              "goalsDiff": -1,
              "form": "LDD",
              "all": {
                "played": 3,
                "wins": 0,
                "draws": 2,
                "losses": 1,
                "goalsFor": 3,
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
                "draws": 1,
                "losses": 0,
                "goalsFor": 1,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 44,
              "team": "Burnley",
              "rank": 23,
              "points": 1,
              "goalsDiff": -5,
              "form": "LLD",
              "all": {
                "played": 3,
                "wins": 0,
                "draws": 1,
                "losses": 2,
                "goalsFor": 4,
                "goalsAgainst": 9
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
                "goalsFor": 2,
                "goalsAgainst": 7
              }
            },
            {
              "teamId": 59,
              "team": "Preston",
              "rank": 24,
              "points": 0,
              "goalsDiff": -6,
              "form": "LLLL",
              "all": {
                "played": 4,
                "wins": 0,
                "draws": 0,
                "losses": 4,
                "goalsFor": 3,
                "goalsAgainst": 9
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
                "goalsFor": 1,
                "goalsAgainst": 3
              }
            }
          ],
          "teams": [
            {
              "teamId": 48,
              "team": "West Ham",
              "form": "DLDW",
              "all": {
                "played": 4,
                "wins": 1,
                "draws": 2,
                "losses": 1,
                "goalsFor": 8,
                "goalsAgainst": 7
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
              "form": "DWWL",
              "all": {
                "played": 4,
                "wins": 2,
                "draws": 1,
                "losses": 1,
                "goalsFor": 11,
                "goalsAgainst": 8
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
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 5,
                "goalsAgainst": 5
              }
            },
            {
              "teamId": 59,
              "team": "Preston",
              "form": "LLLL",
              "all": {
                "played": 4,
                "wins": 0,
                "draws": 0,
                "losses": 4,
                "goalsFor": 3,
                "goalsAgainst": 9
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
                "goalsFor": 1,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 56,
              "team": "Bristol City",
              "form": "LDWW",
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
                "goalsFor": 2,
                "goalsAgainst": 3
              },
              "away": {
                "played": 2,
                "wins": 1,
                "draws": 1,
                "losses": 0,
                "goalsFor": 5,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 62,
              "team": "Sheffield Utd",
              "form": "DDDW",
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
                "wins": 1,
                "draws": 1,
                "losses": 0,
                "goalsFor": 3,
                "goalsAgainst": 2
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
              "teamId": 68,
              "team": "Bolton",
              "form": "WDLL",
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
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 2,
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
              "teamId": 76,
              "team": "Swansea",
              "form": "WDWW",
              "all": {
                "played": 4,
                "wins": 3,
                "draws": 1,
                "losses": 0,
                "goalsFor": 7,
                "goalsAgainst": 1
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
                "wins": 2,
                "draws": 0,
                "losses": 0,
                "goalsFor": 5,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 38,
              "team": "Watford",
              "form": "WDDL",
              "all": {
                "played": 4,
                "wins": 1,
                "draws": 2,
                "losses": 1,
                "goalsFor": 4,
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
                "played": 2,
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 1,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 1355,
              "team": "Portsmouth",
              "form": "LWLL",
              "all": {
                "played": 4,
                "wins": 1,
                "draws": 0,
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
              "teamId": 69,
              "team": "Derby",
              "form": "LDLW",
              "all": {
                "played": 4,
                "wins": 1,
                "draws": 1,
                "losses": 2,
                "goalsFor": 5,
                "goalsAgainst": 7
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
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 1379,
              "team": "Lincoln",
              "form": "LLWD",
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
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 1,
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
              "teamId": 67,
              "team": "Blackburn",
              "form": "DWLD",
              "all": {
                "played": 4,
                "wins": 1,
                "draws": 2,
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
                "played": 2,
                "wins": 0,
                "draws": 2,
                "losses": 0,
                "goalsFor": 2,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 54,
              "team": "Birmingham",
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
              "teamId": 41,
              "team": "Southampton",
              "form": "LWWD",
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
                "goalsFor": 8,
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
              "teamId": 75,
              "team": "Stoke City",
              "form": "LLLW",
              "all": {
                "played": 4,
                "wins": 1,
                "draws": 0,
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
                "played": 2,
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 2,
                "goalsAgainst": 7
              }
            },
            {
              "teamId": 71,
              "team": "Norwich",
              "form": "LLWL",
              "all": {
                "played": 4,
                "wins": 1,
                "draws": 0,
                "losses": 3,
                "goalsFor": 5,
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
                "draws": 0,
                "losses": 2,
                "goalsFor": 0,
                "goalsAgainst": 4
              }
            }
          ],
          "fixtures": [
            {
              "fixtureId": 1563126,
              "kickoff": "2026-09-02T03:45:00+09:00",
              "status": "FT",
              "homeTeamId": 48,
              "homeTeam": "West Ham",
              "awayTeamId": 39,
              "awayTeam": "Wolves",
              "injuriesChecked": true,
              "injuries": [
                {
                  "fixtureId": 1563126,
                  "teamId": 48,
                  "playerId": 1243,
                  "player": "T. Soucek",
                  "type": "Missing Fixture",
                  "reason": "Ankle Injury"
                },
                {
                  "fixtureId": 1563126,
                  "teamId": 39,
                  "playerId": 20665,
                  "player": "J. Bellegarde",
                  "type": "Missing Fixture",
                  "reason": "Hamstring Injury"
                },
                {
                  "fixtureId": 1563126,
                  "teamId": 39,
                  "playerId": 19143,
                  "player": "S. Johnstone",
                  "type": "Missing Fixture",
                  "reason": "Shoulder Injury"
                },
                {
                  "fixtureId": 1563126,
                  "teamId": 39,
                  "playerId": 195717,
                  "player": "Y. Mosquera",
                  "type": "Missing Fixture",
                  "reason": "Ankle Injury"
                },
                {
                  "fixtureId": 1563126,
                  "teamId": 39,
                  "playerId": 194116,
                  "player": "R. Said",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1563126,
                  "teamId": 39,
                  "playerId": 169,
                  "player": "K. Trippier",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                }
              ],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1563122,
              "kickoff": "2026-09-02T03:45:00+09:00",
              "status": "FT",
              "homeTeamId": 59,
              "homeTeam": "Preston",
              "awayTeamId": 56,
              "awayTeam": "Bristol City",
              "injuriesChecked": true,
              "injuries": [
                {
                  "fixtureId": 1563122,
                  "teamId": 59,
                  "playerId": 459284,
                  "player": "T. Carroll",
                  "type": "Missing Fixture",
                  "reason": "Ankle Injury"
                },
                {
                  "fixtureId": 1563122,
                  "teamId": 59,
                  "playerId": 70519,
                  "player": "A. McCann",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1563122,
                  "teamId": 59,
                  "playerId": 19455,
                  "player": "B. Potts",
                  "type": "Missing Fixture",
                  "reason": "Ankle Injury"
                },
                {
                  "fixtureId": 1563122,
                  "teamId": 56,
                  "playerId": 69539,
                  "player": "L. McNally",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                }
              ],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1563123,
              "kickoff": "2026-09-02T03:45:00+09:00",
              "status": "FT",
              "homeTeamId": 62,
              "homeTeam": "Sheffield Utd",
              "awayTeamId": 68,
              "awayTeam": "Bolton",
              "injuriesChecked": true,
              "injuries": [
                {
                  "fixtureId": 1563123,
                  "teamId": 62,
                  "playerId": 19961,
                  "player": "H. Burrows",
                  "type": "Missing Fixture",
                  "reason": "Inactive"
                },
                {
                  "fixtureId": 1563123,
                  "teamId": 62,
                  "playerId": 906,
                  "player": "T. Chong",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1563123,
                  "teamId": 62,
                  "playerId": 373615,
                  "player": "R. One",
                  "type": "Missing Fixture",
                  "reason": "Hamstring Injury"
                },
                {
                  "fixtureId": 1563123,
                  "teamId": 62,
                  "playerId": 17407,
                  "player": "F. Seriki",
                  "type": "Missing Fixture",
                  "reason": "Inactive"
                },
                {
                  "fixtureId": 1563123,
                  "teamId": 68,
                  "playerId": 284367,
                  "player": "L. Stephenson",
                  "type": "Missing Fixture",
                  "reason": "Inactive"
                }
              ],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1563125,
              "kickoff": "2026-09-02T03:45:00+09:00",
              "status": "FT",
              "homeTeamId": 76,
              "homeTeam": "Swansea",
              "awayTeamId": 38,
              "awayTeam": "Watford",
              "injuriesChecked": true,
              "injuries": [
                {
                  "fixtureId": 1563125,
                  "teamId": 76,
                  "playerId": 20457,
                  "player": "C. Burgess",
                  "type": "Missing Fixture",
                  "reason": "Achilles Tendon Injury"
                },
                {
                  "fixtureId": 1563125,
                  "teamId": 76,
                  "playerId": 104041,
                  "player": "B. Cabango",
                  "type": "Missing Fixture",
                  "reason": "Inactive"
                },
                {
                  "fixtureId": 1563125,
                  "teamId": 76,
                  "playerId": 68441,
                  "player": "G. Franco",
                  "type": "Missing Fixture",
                  "reason": "Ankle Injury"
                },
                {
                  "fixtureId": 1563125,
                  "teamId": 38,
                  "playerId": 351341,
                  "player": "T. Akomeah",
                  "type": "Missing Fixture",
                  "reason": "Lacking Match Fitness"
                },
                {
                  "fixtureId": 1563125,
                  "teamId": 38,
                  "playerId": 152699,
                  "player": "K. Baah",
                  "type": "Missing Fixture",
                  "reason": "Knock"
                },
                {
                  "fixtureId": 1563125,
                  "teamId": 38,
                  "playerId": 20044,
                  "player": "M. Bola",
                  "type": "Missing Fixture",
                  "reason": "Hamstring Injury"
                },
                {
                  "fixtureId": 1563125,
                  "teamId": 38,
                  "playerId": 367473,
                  "player": "J. Grieves",
                  "type": "Missing Fixture",
                  "reason": "Lacking Match Fitness"
                },
                {
                  "fixtureId": 1563125,
                  "teamId": 38,
                  "playerId": 193296,
                  "player": "J. Ngakia",
                  "type": "Missing Fixture",
                  "reason": "Thigh Injury"
                }
              ],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1563121,
              "kickoff": "2026-09-02T03:45:00+09:00",
              "status": "FT",
              "homeTeamId": 1355,
              "homeTeam": "Portsmouth",
              "awayTeamId": 69,
              "awayTeam": "Derby",
              "injuriesChecked": true,
              "injuries": [
                {
                  "fixtureId": 1563121,
                  "teamId": 1355,
                  "playerId": 17728,
                  "player": "K. Anderson",
                  "type": "Missing Fixture",
                  "reason": "Muscle Injury"
                },
                {
                  "fixtureId": 1563121,
                  "teamId": 1355,
                  "playerId": 343894,
                  "player": "J. Farrell",
                  "type": "Missing Fixture",
                  "reason": "Groin Injury"
                },
                {
                  "fixtureId": 1563121,
                  "teamId": 1355,
                  "playerId": 237115,
                  "player": "M. Kosznovszky",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1563121,
                  "teamId": 1355,
                  "playerId": 19002,
                  "player": "J. Murphy",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1563121,
                  "teamId": 1355,
                  "playerId": 20138,
                  "player": "C. Ogilvie",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1563121,
                  "teamId": 1355,
                  "playerId": 340136,
                  "player": "F. Umeh",
                  "type": "Missing Fixture",
                  "reason": "Hamstring Injury"
                },
                {
                  "fixtureId": 1563121,
                  "teamId": 1355,
                  "playerId": 361472,
                  "player": "T. Waddingham",
                  "type": "Missing Fixture",
                  "reason": "Ankle Injury"
                },
                {
                  "fixtureId": 1563121,
                  "teamId": 69,
                  "playerId": 407652,
                  "player": "P. Agyemang",
                  "type": "Missing Fixture",
                  "reason": "Achilles Tendon Injury"
                },
                {
                  "fixtureId": 1563121,
                  "teamId": 69,
                  "playerId": 19860,
                  "player": "M. Clarke",
                  "type": "Missing Fixture",
                  "reason": "Calf Injury"
                },
                {
                  "fixtureId": 1563121,
                  "teamId": 69,
                  "playerId": 19083,
                  "player": "C. Morris",
                  "type": "Missing Fixture",
                  "reason": "Inactive"
                },
                {
                  "fixtureId": 1563121,
                  "teamId": 69,
                  "playerId": 37760,
                  "player": "D. Murkin",
                  "type": "Missing Fixture",
                  "reason": "Hamstring Injury"
                },
                {
                  "fixtureId": 1563121,
                  "teamId": 69,
                  "playerId": 19472,
                  "player": "L. Travis",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                }
              ],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1563120,
              "kickoff": "2026-09-02T03:45:00+09:00",
              "status": "FT",
              "homeTeamId": 1379,
              "homeTeam": "Lincoln",
              "awayTeamId": 67,
              "awayTeam": "Blackburn",
              "injuriesChecked": true,
              "injuries": [
                {
                  "fixtureId": 1563120,
                  "teamId": 1379,
                  "playerId": 19753,
                  "player": "S. Bradley",
                  "type": "Missing Fixture",
                  "reason": "Knock"
                },
                {
                  "fixtureId": 1563120,
                  "teamId": 1379,
                  "playerId": 19771,
                  "player": "J. Collins",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1563120,
                  "teamId": 1379,
                  "playerId": 19288,
                  "player": "T. Darikwa",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1563120,
                  "teamId": 67,
                  "playerId": 429613,
                  "player": "M. Baradji",
                  "type": "Missing Fixture",
                  "reason": "Hamstring Injury"
                },
                {
                  "fixtureId": 1563120,
                  "teamId": 67,
                  "playerId": 50968,
                  "player": "M. Jorgensen",
                  "type": "Missing Fixture",
                  "reason": "Hamstring Injury"
                },
                {
                  "fixtureId": 1563120,
                  "teamId": 67,
                  "playerId": 30998,
                  "player": "A. Kargbo",
                  "type": "Missing Fixture",
                  "reason": "Muscle Injury"
                },
                {
                  "fixtureId": 1563120,
                  "teamId": 67,
                  "playerId": 313248,
                  "player": "M. Litherland",
                  "type": "Missing Fixture",
                  "reason": "Muscle Injury"
                },
                {
                  "fixtureId": 1563120,
                  "teamId": 67,
                  "playerId": 7037,
                  "player": "L. Miller",
                  "type": "Missing Fixture",
                  "reason": "Achilles Tendon Injury"
                },
                {
                  "fixtureId": 1563120,
                  "teamId": 67,
                  "playerId": 33147,
                  "player": "Y. Ohashi",
                  "type": "Missing Fixture",
                  "reason": "Inactive"
                },
                {
                  "fixtureId": 1563120,
                  "teamId": 67,
                  "playerId": 17685,
                  "player": "H. Pickering",
                  "type": "Missing Fixture",
                  "reason": "Inactive"
                },
                {
                  "fixtureId": 1563120,
                  "teamId": 67,
                  "playerId": 17395,
                  "player": "S. Wharton",
                  "type": "Missing Fixture",
                  "reason": "Achilles Tendon Injury"
                }
              ],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1563119,
              "kickoff": "2026-09-02T04:00:00+09:00",
              "status": "FT",
              "homeTeamId": 54,
              "homeTeam": "Birmingham",
              "awayTeamId": 41,
              "awayTeam": "Southampton",
              "injuriesChecked": true,
              "injuries": [
                {
                  "fixtureId": 1563119,
                  "teamId": 54,
                  "playerId": 19211,
                  "player": "M. Bird",
                  "type": "Missing Fixture",
                  "reason": "Inactive"
                },
                {
                  "fixtureId": 1563119,
                  "teamId": 54,
                  "playerId": 19202,
                  "player": "L. Buchanan",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1563119,
                  "teamId": 54,
                  "playerId": 231078,
                  "player": "T. Gardner-Hickman",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1563119,
                  "teamId": 54,
                  "playerId": 167656,
                  "player": "M. Leonard",
                  "type": "Missing Fixture",
                  "reason": "Achilles Tendon Injury"
                },
                {
                  "fixtureId": 1563119,
                  "teamId": 41,
                  "playerId": 282060,
                  "player": "C. Jander",
                  "type": "Missing Fixture",
                  "reason": "Lacking Match Fitness"
                }
              ],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1563124,
              "kickoff": "2026-09-02T04:00:00+09:00",
              "status": "FT",
              "homeTeamId": 75,
              "homeTeam": "Stoke City",
              "awayTeamId": 71,
              "awayTeam": "Norwich",
              "injuriesChecked": true,
              "injuries": [
                {
                  "fixtureId": 1563124,
                  "teamId": 75,
                  "playerId": 360011,
                  "player": "A. Ampah",
                  "type": "Missing Fixture",
                  "reason": "Hamstring Injury"
                },
                {
                  "fixtureId": 1563124,
                  "teamId": 75,
                  "playerId": 312902,
                  "player": "L. Cisse",
                  "type": "Missing Fixture",
                  "reason": "Knock"
                },
                {
                  "fixtureId": 1563124,
                  "teamId": 75,
                  "playerId": 18813,
                  "player": "A. Cresswell",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1563124,
                  "teamId": 75,
                  "playerId": 18914,
                  "player": "B. Gibson",
                  "type": "Missing Fixture",
                  "reason": "Inactive"
                },
                {
                  "fixtureId": 1563124,
                  "teamId": 75,
                  "playerId": 30809,
                  "player": "S. Ingelsson",
                  "type": "Missing Fixture",
                  "reason": "Inactive"
                },
                {
                  "fixtureId": 1563124,
                  "teamId": 75,
                  "playerId": 294552,
                  "player": "J. Tchamadeu",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1563124,
                  "teamId": 71,
                  "playerId": 362145,
                  "player": "A. Ahmed",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1563124,
                  "teamId": 71,
                  "playerId": 162075,
                  "player": "P. Maghoma",
                  "type": "Missing Fixture",
                  "reason": "Calf Injury"
                },
                {
                  "fixtureId": 1563124,
                  "teamId": 71,
                  "playerId": 383773,
                  "player": "L. Mahovo",
                  "type": "Missing Fixture",
                  "reason": "Ankle Injury"
                },
                {
                  "fixtureId": 1563124,
                  "teamId": 71,
                  "playerId": 326105,
                  "player": "J. Makama",
                  "type": "Missing Fixture",
                  "reason": "Foot Injury"
                },
                {
                  "fixtureId": 1563124,
                  "teamId": 71,
                  "playerId": 45947,
                  "player": "M. Topic",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
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
      "date": "2026-09-03",
      "updatedAt": "2026-09-02T12:45:43.067Z",
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
              "points": 10,
              "goalsDiff": 6,
              "form": "WWDW",
              "all": {
                "played": 4,
                "wins": 3,
                "draws": 1,
                "losses": 0,
                "goalsFor": 7,
                "goalsAgainst": 1
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
                "wins": 2,
                "draws": 0,
                "losses": 0,
                "goalsFor": 5,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 1335,
              "team": "Charlton",
              "rank": 2,
              "points": 9,
              "goalsDiff": 3,
              "form": "WWW",
              "all": {
                "played": 3,
                "wins": 3,
                "draws": 0,
                "losses": 0,
                "goalsFor": 5,
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
                "goalsFor": 2,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 39,
              "team": "Wolves",
              "rank": 3,
              "points": 7,
              "goalsDiff": 3,
              "form": "LWWD",
              "all": {
                "played": 4,
                "wins": 2,
                "draws": 1,
                "losses": 1,
                "goalsFor": 11,
                "goalsAgainst": 8
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
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 5,
                "goalsAgainst": 5
              }
            },
            {
              "teamId": 72,
              "team": "QPR",
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
                "goalsFor": 0,
                "goalsAgainst": 0
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
              "rank": 5,
              "points": 7,
              "goalsDiff": 1,
              "form": "WWDL",
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
                "goalsFor": 2,
                "goalsAgainst": 3
              },
              "away": {
                "played": 2,
                "wins": 1,
                "draws": 1,
                "losses": 0,
                "goalsFor": 5,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 70,
              "team": "Middlesbrough",
              "rank": 6,
              "points": 6,
              "goalsDiff": 2,
              "form": "WLW",
              "all": {
                "played": 3,
                "wins": 2,
                "draws": 0,
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
              "rank": 7,
              "points": 6,
              "goalsDiff": 1,
              "form": "LWW",
              "all": {
                "played": 3,
                "wins": 2,
                "draws": 0,
                "losses": 1,
                "goalsFor": 6,
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
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 58,
              "team": "Millwall",
              "rank": 8,
              "points": 6,
              "goalsDiff": 1,
              "form": "LWW",
              "all": {
                "played": 3,
                "wins": 2,
                "draws": 0,
                "losses": 1,
                "goalsFor": 6,
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
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 5
              }
            },
            {
              "teamId": 54,
              "team": "Birmingham",
              "rank": 9,
              "points": 6,
              "goalsDiff": 1,
              "form": "DWDD",
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
              "teamId": 62,
              "team": "Sheffield Utd",
              "rank": 10,
              "points": 6,
              "goalsDiff": 1,
              "form": "WDDD",
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
                "wins": 1,
                "draws": 1,
                "losses": 0,
                "goalsFor": 3,
                "goalsAgainst": 2
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
              "teamId": 48,
              "team": "West Ham",
              "rank": 11,
              "points": 5,
              "goalsDiff": 1,
              "form": "WDLD",
              "all": {
                "played": 4,
                "wins": 1,
                "draws": 2,
                "losses": 1,
                "goalsFor": 8,
                "goalsAgainst": 7
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
                "wins": 0,
                "draws": 2,
                "losses": 0,
                "goalsFor": 3,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 67,
              "team": "Blackburn",
              "rank": 12,
              "points": 5,
              "goalsDiff": 0,
              "form": "DLWD",
              "all": {
                "played": 4,
                "wins": 1,
                "draws": 2,
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
                "played": 2,
                "wins": 0,
                "draws": 2,
                "losses": 0,
                "goalsFor": 2,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 38,
              "team": "Watford",
              "rank": 13,
              "points": 5,
              "goalsDiff": -1,
              "form": "LDDW",
              "all": {
                "played": 4,
                "wins": 1,
                "draws": 2,
                "losses": 1,
                "goalsFor": 4,
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
                "played": 2,
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 1,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 68,
              "team": "Bolton",
              "rank": 14,
              "points": 4,
              "goalsDiff": -1,
              "form": "LLDW",
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
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 2,
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
              "teamId": 69,
              "team": "Derby",
              "rank": 15,
              "points": 4,
              "goalsDiff": -2,
              "form": "WLDL",
              "all": {
                "played": 4,
                "wins": 1,
                "draws": 1,
                "losses": 2,
                "goalsFor": 5,
                "goalsAgainst": 7
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
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 1379,
              "team": "Lincoln",
              "rank": 16,
              "points": 4,
              "goalsDiff": -2,
              "form": "DWLL",
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
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 1,
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
              "teamId": 41,
              "team": "Southampton",
              "rank": 17,
              "points": 3,
              "goalsDiff": 5,
              "form": "DWWL",
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
                "goalsFor": 8,
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
              "teamId": 43,
              "team": "Cardiff",
              "rank": 18,
              "points": 3,
              "goalsDiff": 0,
              "form": "DDD",
              "all": {
                "played": 3,
                "wins": 0,
                "draws": 3,
                "losses": 0,
                "goalsFor": 5,
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
                "played": 1,
                "wins": 0,
                "draws": 1,
                "losses": 0,
                "goalsFor": 2,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 71,
              "team": "Norwich",
              "rank": 19,
              "points": 3,
              "goalsDiff": -2,
              "form": "LWLL",
              "all": {
                "played": 4,
                "wins": 1,
                "draws": 0,
                "losses": 3,
                "goalsFor": 5,
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
                "draws": 0,
                "losses": 2,
                "goalsFor": 0,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 1355,
              "team": "Portsmouth",
              "rank": 20,
              "points": 3,
              "goalsDiff": -3,
              "form": "LLWL",
              "all": {
                "played": 4,
                "wins": 1,
                "draws": 0,
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
              "teamId": 75,
              "team": "Stoke City",
              "rank": 21,
              "points": 3,
              "goalsDiff": -5,
              "form": "WLLL",
              "all": {
                "played": 4,
                "wins": 1,
                "draws": 0,
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
                "played": 2,
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 2,
                "goalsAgainst": 7
              }
            },
            {
              "teamId": 1837,
              "team": "Wrexham",
              "rank": 22,
              "points": 2,
              "goalsDiff": -1,
              "form": "LDD",
              "all": {
                "played": 3,
                "wins": 0,
                "draws": 2,
                "losses": 1,
                "goalsFor": 3,
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
                "draws": 1,
                "losses": 0,
                "goalsFor": 1,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 44,
              "team": "Burnley",
              "rank": 23,
              "points": 1,
              "goalsDiff": -5,
              "form": "LLD",
              "all": {
                "played": 3,
                "wins": 0,
                "draws": 1,
                "losses": 2,
                "goalsFor": 4,
                "goalsAgainst": 9
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
                "goalsFor": 2,
                "goalsAgainst": 7
              }
            },
            {
              "teamId": 59,
              "team": "Preston",
              "rank": 24,
              "points": 0,
              "goalsDiff": -6,
              "form": "LLLL",
              "all": {
                "played": 4,
                "wins": 0,
                "draws": 0,
                "losses": 4,
                "goalsFor": 3,
                "goalsAgainst": 9
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
                "goalsFor": 1,
                "goalsAgainst": 3
              }
            }
          ],
          "teams": [
            {
              "teamId": 58,
              "team": "Millwall",
              "form": "WWL",
              "all": {
                "played": 3,
                "wins": 2,
                "draws": 0,
                "losses": 1,
                "goalsFor": 6,
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
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 5
              }
            },
            {
              "teamId": 1837,
              "team": "Wrexham",
              "form": "DDL",
              "all": {
                "played": 3,
                "wins": 0,
                "draws": 2,
                "losses": 1,
                "goalsFor": 3,
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
                "draws": 1,
                "losses": 0,
                "goalsFor": 1,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 60,
              "team": "West Brom",
              "form": "WWL",
              "all": {
                "played": 3,
                "wins": 2,
                "draws": 0,
                "losses": 1,
                "goalsFor": 6,
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
              "form": "WWW",
              "all": {
                "played": 3,
                "wins": 3,
                "draws": 0,
                "losses": 0,
                "goalsFor": 5,
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
                "goalsFor": 2,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 72,
              "team": "QPR",
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
                "goalsFor": 0,
                "goalsAgainst": 0
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
              "teamId": 43,
              "team": "Cardiff",
              "form": "DDD",
              "all": {
                "played": 3,
                "wins": 0,
                "draws": 3,
                "losses": 0,
                "goalsFor": 5,
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
              "form": "DLL",
              "all": {
                "played": 3,
                "wins": 0,
                "draws": 1,
                "losses": 2,
                "goalsFor": 4,
                "goalsAgainst": 9
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
                "goalsFor": 2,
                "goalsAgainst": 7
              }
            },
            {
              "teamId": 70,
              "team": "Middlesbrough",
              "form": "WLW",
              "all": {
                "played": 3,
                "wins": 2,
                "draws": 0,
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
              "fixtureId": 1563128,
              "kickoff": "2026-09-03T03:45:00+09:00",
              "status": "NS",
              "homeTeamId": 58,
              "homeTeam": "Millwall",
              "awayTeamId": 1837,
              "awayTeam": "Wrexham",
              "injuriesChecked": true,
              "injuries": [
                {
                  "fixtureId": 1563128,
                  "teamId": 58,
                  "playerId": 282637,
                  "player": "F. Azeez",
                  "type": "Missing Fixture",
                  "reason": "Abdominal strain"
                },
                {
                  "fixtureId": 1563128,
                  "teamId": 58,
                  "playerId": 19829,
                  "player": "A. Doughty",
                  "type": "Missing Fixture",
                  "reason": "Hamstring Injury"
                },
                {
                  "fixtureId": 1563128,
                  "teamId": 58,
                  "playerId": 368659,
                  "player": "M. Ivanovic",
                  "type": "Missing Fixture",
                  "reason": "Hamstring Injury"
                },
                {
                  "fixtureId": 1563128,
                  "teamId": 58,
                  "playerId": 19639,
                  "player": "R. Leonard",
                  "type": "Missing Fixture",
                  "reason": "Hamstring Injury"
                },
                {
                  "fixtureId": 1563128,
                  "teamId": 58,
                  "playerId": 325787,
                  "player": "D. Mazou-Sacko",
                  "type": "Missing Fixture",
                  "reason": "Calf Injury"
                },
                {
                  "fixtureId": 1563128,
                  "teamId": 58,
                  "playerId": 295233,
                  "player": "M. Servais",
                  "type": "Missing Fixture",
                  "reason": "Hamstring Injury"
                },
                {
                  "fixtureId": 1563128,
                  "teamId": 58,
                  "playerId": 191337,
                  "player": "T. Crama",
                  "type": "Questionable",
                  "reason": "Inactive"
                },
                {
                  "fixtureId": 1563128,
                  "teamId": 58,
                  "playerId": 2752,
                  "player": "M. Luongo",
                  "type": "Questionable",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1563128,
                  "teamId": 1837,
                  "playerId": 6931,
                  "player": "L. Cacace",
                  "type": "Missing Fixture",
                  "reason": "Calf Injury"
                },
                {
                  "fixtureId": 1563128,
                  "teamId": 1837,
                  "playerId": 88457,
                  "player": "B. Sheaf",
                  "type": "Missing Fixture",
                  "reason": "Inactive"
                },
                {
                  "fixtureId": 1563128,
                  "teamId": 1837,
                  "playerId": 194461,
                  "player": "G. Thomason",
                  "type": "Missing Fixture",
                  "reason": "Thigh Injury"
                },
                {
                  "fixtureId": 1563128,
                  "teamId": 1837,
                  "playerId": 278123,
                  "player": "S. Revan",
                  "type": "Questionable",
                  "reason": "Hamstring Injury"
                }
              ],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1563130,
              "kickoff": "2026-09-03T03:45:00+09:00",
              "status": "NS",
              "homeTeamId": 60,
              "homeTeam": "West Brom",
              "awayTeamId": 1335,
              "awayTeam": "Charlton",
              "injuriesChecked": true,
              "injuries": [
                {
                  "fixtureId": 1563130,
                  "teamId": 60,
                  "playerId": 1137,
                  "player": "M. Johnston",
                  "type": "Missing Fixture",
                  "reason": "Broken Leg"
                },
                {
                  "fixtureId": 1563130,
                  "teamId": 1335,
                  "playerId": 19408,
                  "player": "R. Burke",
                  "type": "Missing Fixture",
                  "reason": "Inactive"
                },
                {
                  "fixtureId": 1563130,
                  "teamId": 1335,
                  "playerId": 152974,
                  "player": "B. Koumetio",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1563130,
                  "teamId": 1335,
                  "playerId": 18939,
                  "player": "K. Ramsay",
                  "type": "Missing Fixture",
                  "reason": "Ankle Injury"
                },
                {
                  "fixtureId": 1563130,
                  "teamId": 1335,
                  "playerId": 283144,
                  "player": "C. Sichenje",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1563130,
                  "teamId": 1335,
                  "playerId": 125543,
                  "player": "J. Edwards",
                  "type": "Questionable",
                  "reason": "Ankle Injury"
                },
                {
                  "fixtureId": 1563130,
                  "teamId": 1335,
                  "playerId": 19970,
                  "player": "M. Godden",
                  "type": "Questionable",
                  "reason": "Inactive"
                },
                {
                  "fixtureId": 1563130,
                  "teamId": 1335,
                  "playerId": 20352,
                  "player": "C. Kelman",
                  "type": "Questionable",
                  "reason": "Shoulder Injury"
                },
                {
                  "fixtureId": 1563130,
                  "teamId": 1335,
                  "playerId": 18603,
                  "player": "W. Mannion",
                  "type": "Questionable",
                  "reason": "Inactive"
                }
              ],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1563129,
              "kickoff": "2026-09-03T03:45:00+09:00",
              "status": "NS",
              "homeTeamId": 72,
              "homeTeam": "QPR",
              "awayTeamId": 43,
              "awayTeam": "Cardiff",
              "injuriesChecked": true,
              "injuries": [
                {
                  "fixtureId": 1563129,
                  "teamId": 72,
                  "playerId": 67959,
                  "player": "K. Dembele",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1563129,
                  "teamId": 72,
                  "playerId": 430234,
                  "player": "J. Obikwu",
                  "type": "Missing Fixture",
                  "reason": "Inactive"
                },
                {
                  "fixtureId": 1563129,
                  "teamId": 72,
                  "playerId": 38737,
                  "player": "B. Kemper",
                  "type": "Questionable",
                  "reason": "Ankle Injury"
                },
                {
                  "fixtureId": 1563129,
                  "teamId": 43,
                  "playerId": 19016,
                  "player": "C. Chambers",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1563129,
                  "teamId": 43,
                  "playerId": 153434,
                  "player": "W. Fish",
                  "type": "Missing Fixture",
                  "reason": "Hernia"
                },
                {
                  "fixtureId": 1563129,
                  "teamId": 43,
                  "playerId": 394973,
                  "player": "D. Lawlor",
                  "type": "Missing Fixture",
                  "reason": "Muscle Injury"
                }
              ],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1563127,
              "kickoff": "2026-09-03T04:00:00+09:00",
              "status": "NS",
              "homeTeamId": 44,
              "homeTeam": "Burnley",
              "awayTeamId": 70,
              "awayTeam": "Middlesbrough",
              "injuriesChecked": true,
              "injuries": [
                {
                  "fixtureId": 1563127,
                  "teamId": 44,
                  "playerId": 361388,
                  "player": "E. Agyei",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1563127,
                  "teamId": 44,
                  "playerId": 336578,
                  "player": "J. Banel",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1563127,
                  "teamId": 44,
                  "playerId": 18927,
                  "player": "A. Barnes",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1563127,
                  "teamId": 44,
                  "playerId": 25628,
                  "player": "J. Beyer",
                  "type": "Missing Fixture",
                  "reason": "Hamstring Injury"
                },
                {
                  "fixtureId": 1563127,
                  "teamId": 44,
                  "playerId": 19827,
                  "player": "J. Cullen",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1563127,
                  "teamId": 44,
                  "playerId": 181797,
                  "player": "B. Humphreys",
                  "type": "Missing Fixture",
                  "reason": "Inactive"
                },
                {
                  "fixtureId": 1563127,
                  "teamId": 44,
                  "playerId": 20303,
                  "player": "J. Laurent",
                  "type": "Missing Fixture",
                  "reason": "Red Card"
                },
                {
                  "fixtureId": 1563127,
                  "teamId": 70,
                  "playerId": 37049,
                  "player": "A. Bangura",
                  "type": "Missing Fixture",
                  "reason": "Coach's decision"
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
                "goalsFor": 3,
                "goalsAgainst": 1
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
              "teamId": 251,
              "team": "ST Mirren",
              "rank": 2,
              "points": 7,
              "goalsDiff": 3,
              "form": "DWW",
              "all": {
                "played": 3,
                "wins": 2,
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
                "goalsFor": 4,
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
              "teamId": 254,
              "team": "Heart Of Midlothian",
              "rank": 3,
              "points": 6,
              "goalsDiff": 4,
              "form": "WWL",
              "all": {
                "played": 3,
                "wins": 2,
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
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 1,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 253,
              "team": "Dundee",
              "rank": 4,
              "points": 6,
              "goalsDiff": 2,
              "form": "LWWL",
              "all": {
                "played": 4,
                "wins": 2,
                "draws": 0,
                "losses": 2,
                "goalsFor": 5,
                "goalsAgainst": 3
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
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 2,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 249,
              "team": "Hibernian",
              "rank": 5,
              "points": 6,
              "goalsDiff": 1,
              "form": "WWL",
              "all": {
                "played": 3,
                "wins": 2,
                "draws": 0,
                "losses": 1,
                "goalsFor": 5,
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
                "wins": 2,
                "draws": 0,
                "losses": 0,
                "goalsFor": 4,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 256,
              "team": "Motherwell",
              "rank": 6,
              "points": 5,
              "goalsDiff": 1,
              "form": "DDW",
              "all": {
                "played": 3,
                "wins": 1,
                "draws": 2,
                "losses": 0,
                "goalsFor": 5,
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
                "draws": 1,
                "losses": 0,
                "goalsFor": 5,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 257,
              "team": "Rangers",
              "rank": 7,
              "points": 4,
              "goalsDiff": 0,
              "form": "WLD",
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
                "goalsFor": 2,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 1386,
              "team": "Dundee Utd",
              "rank": 8,
              "points": 4,
              "goalsDiff": -2,
              "form": "WLLD",
              "all": {
                "played": 4,
                "wins": 1,
                "draws": 1,
                "losses": 2,
                "goalsFor": 5,
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
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 4,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 258,
              "team": "ST Johnstone",
              "rank": 9,
              "points": 3,
              "goalsDiff": -1,
              "form": "LLW",
              "all": {
                "played": 3,
                "wins": 1,
                "draws": 0,
                "losses": 2,
                "goalsFor": 5,
                "goalsAgainst": 6
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
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 1,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 252,
              "team": "Aberdeen",
              "rank": 10,
              "points": 3,
              "goalsDiff": -2,
              "form": "LLW",
              "all": {
                "played": 3,
                "wins": 1,
                "draws": 0,
                "losses": 2,
                "goalsFor": 2,
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
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 0,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 1389,
              "team": "Falkirk",
              "rank": 11,
              "points": 1,
              "goalsDiff": -3,
              "form": "LDL",
              "all": {
                "played": 3,
                "wins": 0,
                "draws": 1,
                "losses": 2,
                "goalsFor": 1,
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
                "played": 2,
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 1,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 250,
              "team": "Kilmarnock",
              "rank": 12,
              "points": 0,
              "goalsDiff": -9,
              "form": "LLL",
              "all": {
                "played": 3,
                "wins": 0,
                "draws": 0,
                "losses": 3,
                "goalsFor": 4,
                "goalsAgainst": 13
              },
              "home": {
                "played": 2,
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 1,
                "goalsAgainst": 9
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
                "goalsFor": 3,
                "goalsAgainst": 1
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
              "teamId": 252,
              "team": "Aberdeen",
              "form": "WLL",
              "all": {
                "played": 3,
                "wins": 1,
                "draws": 0,
                "losses": 2,
                "goalsFor": 2,
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
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 0,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 250,
              "team": "Kilmarnock",
              "form": "LLL",
              "all": {
                "played": 3,
                "wins": 0,
                "draws": 0,
                "losses": 3,
                "goalsFor": 4,
                "goalsAgainst": 13
              },
              "home": {
                "played": 2,
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 1,
                "goalsAgainst": 9
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
              "teamId": 251,
              "team": "ST Mirren",
              "form": "WWD",
              "all": {
                "played": 3,
                "wins": 2,
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
                "goalsFor": 4,
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
              "teamId": 253,
              "team": "Dundee",
              "form": "LWWL",
              "all": {
                "played": 4,
                "wins": 2,
                "draws": 0,
                "losses": 2,
                "goalsFor": 5,
                "goalsAgainst": 3
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
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 2,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 258,
              "team": "ST Johnstone",
              "form": "WLL",
              "all": {
                "played": 3,
                "wins": 1,
                "draws": 0,
                "losses": 2,
                "goalsFor": 5,
                "goalsAgainst": 6
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
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 1,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 256,
              "team": "Motherwell",
              "form": "WDD",
              "all": {
                "played": 3,
                "wins": 1,
                "draws": 2,
                "losses": 0,
                "goalsFor": 5,
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
                "draws": 1,
                "losses": 0,
                "goalsFor": 5,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 1386,
              "team": "Dundee Utd",
              "form": "DLLW",
              "all": {
                "played": 4,
                "wins": 1,
                "draws": 1,
                "losses": 2,
                "goalsFor": 5,
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
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 4,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 1389,
              "team": "Falkirk",
              "form": "LDL",
              "all": {
                "played": 3,
                "wins": 0,
                "draws": 1,
                "losses": 2,
                "goalsFor": 1,
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
                "played": 2,
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 1,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 257,
              "team": "Rangers",
              "form": "DLW",
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
                "goalsFor": 2,
                "goalsAgainst": 1
              }
            }
          ],
          "fixtures": [
            {
              "fixtureId": 1556652,
              "kickoff": "2026-09-03T03:45:00+09:00",
              "status": "NS",
              "homeTeamId": 247,
              "homeTeam": "Celtic",
              "awayTeamId": 252,
              "awayTeam": "Aberdeen",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1556656,
              "kickoff": "2026-09-03T03:45:00+09:00",
              "status": "NS",
              "homeTeamId": 250,
              "homeTeam": "Kilmarnock",
              "awayTeamId": 251,
              "awayTeam": "ST Mirren",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1556653,
              "kickoff": "2026-09-03T03:45:00+09:00",
              "status": "NS",
              "homeTeamId": 253,
              "homeTeam": "Dundee",
              "awayTeamId": 258,
              "awayTeam": "ST Johnstone",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1556657,
              "kickoff": "2026-09-03T03:45:00+09:00",
              "status": "NS",
              "homeTeamId": 256,
              "homeTeam": "Motherwell",
              "awayTeamId": 1386,
              "awayTeam": "Dundee Utd",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1556654,
              "kickoff": "2026-09-03T04:00:00+09:00",
              "status": "NS",
              "homeTeamId": 1389,
              "homeTeam": "Falkirk",
              "awayTeamId": 257,
              "awayTeam": "Rangers",
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
              "teamId": 736,
              "team": "Charleroi",
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
              "teamId": 569,
              "team": "Club Brugge KV",
              "rank": 2,
              "points": 9,
              "goalsDiff": 6,
              "form": "LWWW",
              "all": {
                "played": 4,
                "wins": 3,
                "draws": 0,
                "losses": 1,
                "goalsFor": 8,
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
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 4,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 631,
              "team": "Gent",
              "rank": 3,
              "points": 9,
              "goalsDiff": 4,
              "form": "WWW",
              "all": {
                "played": 3,
                "wins": 3,
                "draws": 0,
                "losses": 0,
                "goalsFor": 6,
                "goalsAgainst": 2
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
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 2,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 600,
              "team": "Zulte Waregem",
              "rank": 4,
              "points": 8,
              "goalsDiff": 5,
              "form": "DWDW",
              "all": {
                "played": 4,
                "wins": 2,
                "draws": 2,
                "losses": 0,
                "goalsFor": 8,
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
                "wins": 0,
                "draws": 2,
                "losses": 0,
                "goalsFor": 2,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 733,
              "team": "Standard Liege",
              "rank": 5,
              "points": 8,
              "goalsDiff": 3,
              "form": "WWDD",
              "all": {
                "played": 4,
                "wins": 2,
                "draws": 2,
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
                "played": 2,
                "wins": 1,
                "draws": 1,
                "losses": 0,
                "goalsFor": 5,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 1393,
              "team": "Union St. Gilloise",
              "rank": 6,
              "points": 7,
              "goalsDiff": 7,
              "form": "WDW",
              "all": {
                "played": 3,
                "wins": 2,
                "draws": 1,
                "losses": 0,
                "goalsFor": 8,
                "goalsAgainst": 1
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
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 5,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 742,
              "team": "Genk",
              "rank": 7,
              "points": 7,
              "goalsDiff": 4,
              "form": "WDWL",
              "all": {
                "played": 4,
                "wins": 2,
                "draws": 1,
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
                "played": 2,
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 5,
                "goalsAgainst": 6
              }
            },
            {
              "teamId": 259,
              "team": "Lommel United",
              "rank": 8,
              "points": 7,
              "goalsDiff": 4,
              "form": "WWLD",
              "all": {
                "played": 4,
                "wins": 2,
                "draws": 1,
                "losses": 1,
                "goalsFor": 6,
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
              "rank": 9,
              "points": 7,
              "goalsDiff": 1,
              "form": "LDWW",
              "all": {
                "played": 4,
                "wins": 2,
                "draws": 1,
                "losses": 1,
                "goalsFor": 10,
                "goalsAgainst": 9
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
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 3,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 735,
              "team": "St. Truiden",
              "rank": 10,
              "points": 5,
              "goalsDiff": 3,
              "form": "WDD",
              "all": {
                "played": 3,
                "wins": 1,
                "draws": 2,
                "losses": 0,
                "goalsFor": 8,
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
                "wins": 1,
                "draws": 1,
                "losses": 0,
                "goalsFor": 7,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 554,
              "team": "Anderlecht",
              "rank": 11,
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
                "wins": 1,
                "draws": 0,
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
              "teamId": 738,
              "team": "SK Beveren",
              "rank": 12,
              "points": 3,
              "goalsDiff": -8,
              "form": "LLWL",
              "all": {
                "played": 4,
                "wins": 1,
                "draws": 0,
                "losses": 3,
                "goalsFor": 2,
                "goalsAgainst": 10
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
                "wins": 0,
                "draws": 0,
                "losses": 3,
                "goalsFor": 1,
                "goalsAgainst": 10
              }
            },
            {
              "teamId": 741,
              "team": "Cercle Brugge",
              "rank": 13,
              "points": 2,
              "goalsDiff": -2,
              "form": "LLDD",
              "all": {
                "played": 4,
                "wins": 0,
                "draws": 2,
                "losses": 2,
                "goalsFor": 5,
                "goalsAgainst": 7
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
              "points": 2,
              "goalsDiff": -4,
              "form": "DLDL",
              "all": {
                "played": 4,
                "wins": 0,
                "draws": 2,
                "losses": 2,
                "goalsFor": 5,
                "goalsAgainst": 9
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
              "rank": 15,
              "points": 1,
              "goalsDiff": -4,
              "form": "DLLL",
              "all": {
                "played": 4,
                "wins": 0,
                "draws": 1,
                "losses": 3,
                "goalsFor": 4,
                "goalsAgainst": 8
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
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 1,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 261,
              "team": "KVC Westerlo",
              "rank": 16,
              "points": 1,
              "goalsDiff": -9,
              "form": "DLLL",
              "all": {
                "played": 4,
                "wins": 0,
                "draws": 1,
                "losses": 3,
                "goalsFor": 5,
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
                "played": 2,
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 2,
                "goalsAgainst": 7
              }
            },
            {
              "teamId": 260,
              "team": "OH Leuven",
              "rank": 17,
              "points": 0,
              "goalsDiff": -6,
              "form": "LLL",
              "all": {
                "played": 3,
                "wins": 0,
                "draws": 0,
                "losses": 3,
                "goalsFor": 2,
                "goalsAgainst": 8
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
                "goalsFor": 1,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 734,
              "team": "Kortrijk",
              "rank": 18,
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
                "goalsAgainst": 6
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
              "teamId": 735,
              "team": "St. Truiden",
              "form": "DDW",
              "all": {
                "played": 3,
                "wins": 1,
                "draws": 2,
                "losses": 0,
                "goalsFor": 8,
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
                "wins": 1,
                "draws": 1,
                "losses": 0,
                "goalsFor": 7,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 1393,
              "team": "Union St. Gilloise",
              "form": "WDW",
              "all": {
                "played": 3,
                "wins": 2,
                "draws": 1,
                "losses": 0,
                "goalsFor": 8,
                "goalsAgainst": 1
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
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 5,
                "goalsAgainst": 1
              }
            }
          ],
          "fixtures": [
            {
              "fixtureId": 1558607,
              "kickoff": "2026-09-03T03:30:00+09:00",
              "status": "NS",
              "homeTeamId": 735,
              "homeTeam": "St. Truiden",
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
    },
    {
      "date": "2026-09-04",
      "updatedAt": "2026-09-02T12:45:50.592Z",
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
              "points": 9,
              "goalsDiff": 10,
              "form": "WWW",
              "all": {
                "played": 3,
                "wins": 3,
                "draws": 0,
                "losses": 0,
                "goalsFor": 12,
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
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 5,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 541,
              "team": "Real Madrid",
              "rank": 2,
              "points": 9,
              "goalsDiff": 8,
              "form": "WWW",
              "all": {
                "played": 3,
                "wins": 3,
                "draws": 0,
                "losses": 0,
                "goalsFor": 10,
                "goalsAgainst": 2
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
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 2,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 530,
              "team": "Atletico Madrid",
              "rank": 3,
              "points": 7,
              "goalsDiff": 4,
              "form": "WDW",
              "all": {
                "played": 3,
                "wins": 2,
                "draws": 1,
                "losses": 0,
                "goalsFor": 7,
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
              "rank": 4,
              "points": 7,
              "goalsDiff": 4,
              "form": "WDW",
              "all": {
                "played": 3,
                "wins": 2,
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
                "goalsFor": 4,
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
              "teamId": 727,
              "team": "Osasuna",
              "rank": 5,
              "points": 7,
              "goalsDiff": 2,
              "form": "WWD",
              "all": {
                "played": 3,
                "wins": 2,
                "draws": 1,
                "losses": 0,
                "goalsFor": 3,
                "goalsAgainst": 1
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
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 2,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 536,
              "team": "Sevilla",
              "rank": 6,
              "points": 6,
              "goalsDiff": 1,
              "form": "LWW",
              "all": {
                "played": 3,
                "wins": 2,
                "draws": 0,
                "losses": 1,
                "goalsFor": 6,
                "goalsAgainst": 5
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
              "rank": 7,
              "points": 6,
              "goalsDiff": -1,
              "form": "LWW",
              "all": {
                "played": 3,
                "wins": 2,
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
                "goalsFor": 1,
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
              "rank": 8,
              "points": 5,
              "goalsDiff": 2,
              "form": "WDD",
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
              "teamId": 539,
              "team": "Levante",
              "rank": 9,
              "points": 4,
              "goalsDiff": 0,
              "form": "WDL",
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
                "goalsFor": 5,
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
              "teamId": 4665,
              "team": "Racing Santander",
              "rank": 10,
              "points": 4,
              "goalsDiff": 0,
              "form": "WLD",
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
                "draws": 1,
                "losses": 0,
                "goalsFor": 5,
                "goalsAgainst": 4
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
              "teamId": 540,
              "team": "Espanyol",
              "rank": 11,
              "points": 3,
              "goalsDiff": 1,
              "form": "LLW",
              "all": {
                "played": 3,
                "wins": 1,
                "draws": 0,
                "losses": 2,
                "goalsFor": 5,
                "goalsAgainst": 4
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
                "draws": 0,
                "losses": 1,
                "goalsFor": 1,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 531,
              "team": "Athletic Club",
              "rank": 12,
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
                "goalsFor": 1,
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
              "teamId": 548,
              "team": "Real Sociedad",
              "rank": 13,
              "points": 3,
              "goalsDiff": -3,
              "form": "WLL",
              "all": {
                "played": 3,
                "wins": 1,
                "draws": 0,
                "losses": 2,
                "goalsFor": 3,
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
              "rank": 14,
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
              "rank": 15,
              "points": 2,
              "goalsDiff": -1,
              "form": "LDD",
              "all": {
                "played": 3,
                "wins": 0,
                "draws": 2,
                "losses": 1,
                "goalsFor": 4,
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
              "rank": 16,
              "points": 1,
              "goalsDiff": -3,
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
                "goalsFor": 0,
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
              "teamId": 538,
              "team": "Celta Vigo",
              "rank": 17,
              "points": 1,
              "goalsDiff": -3,
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
                "draws": 0,
                "losses": 2,
                "goalsFor": 1,
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
              "teamId": 728,
              "team": "Rayo Vallecano",
              "rank": 18,
              "points": 1,
              "goalsDiff": -4,
              "form": "LDL",
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
                "draws": 1,
                "losses": 0,
                "goalsFor": 1,
                "goalsAgainst": 1
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
              "teamId": 535,
              "team": "Malaga",
              "rank": 20,
              "points": 1,
              "goalsDiff": -6,
              "form": "LDL",
              "all": {
                "played": 3,
                "wins": 0,
                "draws": 1,
                "losses": 2,
                "goalsFor": 1,
                "goalsAgainst": 7
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
                "draws": 0,
                "losses": 2,
                "goalsFor": 0,
                "goalsAgainst": 6
              }
            }
          ],
          "teams": [
            {
              "teamId": 548,
              "team": "Real Sociedad",
              "form": "LLW",
              "all": {
                "played": 3,
                "wins": 1,
                "draws": 0,
                "losses": 2,
                "goalsFor": 3,
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
                "played": 2,
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 1,
                "goalsAgainst": 5
              }
            },
            {
              "teamId": 538,
              "team": "Celta Vigo",
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
                "draws": 0,
                "losses": 2,
                "goalsFor": 1,
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
            }
          ],
          "fixtures": [
            {
              "fixtureId": 1570392,
              "kickoff": "2026-09-04T04:00:00+09:00",
              "status": "NS",
              "homeTeamId": 548,
              "homeTeam": "Real Sociedad",
              "awayTeamId": 538,
              "awayTeam": "Celta Vigo",
              "injuriesChecked": true,
              "injuries": [
                {
                  "fixtureId": 1570392,
                  "teamId": 548,
                  "playerId": 737,
                  "player": "A. Odriozola",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1570392,
                  "teamId": 548,
                  "playerId": 386859,
                  "player": "H. Fort",
                  "type": "Questionable",
                  "reason": "Coach's decision"
                },
                {
                  "fixtureId": 1570392,
                  "teamId": 548,
                  "playerId": 290106,
                  "player": "P. Marin",
                  "type": "Questionable",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1570392,
                  "teamId": 538,
                  "playerId": 47348,
                  "player": "B. Iglesias",
                  "type": "Questionable",
                  "reason": "Muscle Injury"
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
                "goalsFor": 3,
                "goalsAgainst": 1
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
              "teamId": 251,
              "team": "ST Mirren",
              "rank": 2,
              "points": 7,
              "goalsDiff": 3,
              "form": "DWW",
              "all": {
                "played": 3,
                "wins": 2,
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
                "goalsFor": 4,
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
              "teamId": 254,
              "team": "Heart Of Midlothian",
              "rank": 3,
              "points": 6,
              "goalsDiff": 4,
              "form": "WWL",
              "all": {
                "played": 3,
                "wins": 2,
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
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 1,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 253,
              "team": "Dundee",
              "rank": 4,
              "points": 6,
              "goalsDiff": 2,
              "form": "LWWL",
              "all": {
                "played": 4,
                "wins": 2,
                "draws": 0,
                "losses": 2,
                "goalsFor": 5,
                "goalsAgainst": 3
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
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 2,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 249,
              "team": "Hibernian",
              "rank": 5,
              "points": 6,
              "goalsDiff": 1,
              "form": "WWL",
              "all": {
                "played": 3,
                "wins": 2,
                "draws": 0,
                "losses": 1,
                "goalsFor": 5,
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
                "wins": 2,
                "draws": 0,
                "losses": 0,
                "goalsFor": 4,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 256,
              "team": "Motherwell",
              "rank": 6,
              "points": 5,
              "goalsDiff": 1,
              "form": "DDW",
              "all": {
                "played": 3,
                "wins": 1,
                "draws": 2,
                "losses": 0,
                "goalsFor": 5,
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
                "draws": 1,
                "losses": 0,
                "goalsFor": 5,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 257,
              "team": "Rangers",
              "rank": 7,
              "points": 4,
              "goalsDiff": 0,
              "form": "WLD",
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
                "goalsFor": 2,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 1386,
              "team": "Dundee Utd",
              "rank": 8,
              "points": 4,
              "goalsDiff": -2,
              "form": "WLLD",
              "all": {
                "played": 4,
                "wins": 1,
                "draws": 1,
                "losses": 2,
                "goalsFor": 5,
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
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 4,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 258,
              "team": "ST Johnstone",
              "rank": 9,
              "points": 3,
              "goalsDiff": -1,
              "form": "LLW",
              "all": {
                "played": 3,
                "wins": 1,
                "draws": 0,
                "losses": 2,
                "goalsFor": 5,
                "goalsAgainst": 6
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
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 1,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 252,
              "team": "Aberdeen",
              "rank": 10,
              "points": 3,
              "goalsDiff": -2,
              "form": "LLW",
              "all": {
                "played": 3,
                "wins": 1,
                "draws": 0,
                "losses": 2,
                "goalsFor": 2,
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
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 0,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 1389,
              "team": "Falkirk",
              "rank": 11,
              "points": 1,
              "goalsDiff": -3,
              "form": "LDL",
              "all": {
                "played": 3,
                "wins": 0,
                "draws": 1,
                "losses": 2,
                "goalsFor": 1,
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
                "played": 2,
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 1,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 250,
              "team": "Kilmarnock",
              "rank": 12,
              "points": 0,
              "goalsDiff": -9,
              "form": "LLL",
              "all": {
                "played": 3,
                "wins": 0,
                "draws": 0,
                "losses": 3,
                "goalsFor": 4,
                "goalsAgainst": 13
              },
              "home": {
                "played": 2,
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 1,
                "goalsAgainst": 9
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
              "teamId": 249,
              "team": "Hibernian",
              "form": "LWW",
              "all": {
                "played": 3,
                "wins": 2,
                "draws": 0,
                "losses": 1,
                "goalsFor": 5,
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
                "wins": 2,
                "draws": 0,
                "losses": 0,
                "goalsFor": 4,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 254,
              "team": "Heart Of Midlothian",
              "form": "LWW",
              "all": {
                "played": 3,
                "wins": 2,
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
              "fixtureId": 1556655,
              "kickoff": "2026-09-04T03:45:00+09:00",
              "status": "NS",
              "homeTeamId": 249,
              "homeTeam": "Hibernian",
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
          "key": "BELGIAN_PRO_LEAGUE",
          "leagueId": 144,
          "season": "2026",
          "standings": [
            {
              "teamId": 736,
              "team": "Charleroi",
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
              "teamId": 569,
              "team": "Club Brugge KV",
              "rank": 2,
              "points": 9,
              "goalsDiff": 6,
              "form": "LWWW",
              "all": {
                "played": 4,
                "wins": 3,
                "draws": 0,
                "losses": 1,
                "goalsFor": 8,
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
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 4,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 631,
              "team": "Gent",
              "rank": 3,
              "points": 9,
              "goalsDiff": 4,
              "form": "WWW",
              "all": {
                "played": 3,
                "wins": 3,
                "draws": 0,
                "losses": 0,
                "goalsFor": 6,
                "goalsAgainst": 2
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
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 2,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 600,
              "team": "Zulte Waregem",
              "rank": 4,
              "points": 8,
              "goalsDiff": 5,
              "form": "DWDW",
              "all": {
                "played": 4,
                "wins": 2,
                "draws": 2,
                "losses": 0,
                "goalsFor": 8,
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
                "wins": 0,
                "draws": 2,
                "losses": 0,
                "goalsFor": 2,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 733,
              "team": "Standard Liege",
              "rank": 5,
              "points": 8,
              "goalsDiff": 3,
              "form": "WWDD",
              "all": {
                "played": 4,
                "wins": 2,
                "draws": 2,
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
                "played": 2,
                "wins": 1,
                "draws": 1,
                "losses": 0,
                "goalsFor": 5,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 1393,
              "team": "Union St. Gilloise",
              "rank": 6,
              "points": 7,
              "goalsDiff": 7,
              "form": "WDW",
              "all": {
                "played": 3,
                "wins": 2,
                "draws": 1,
                "losses": 0,
                "goalsFor": 8,
                "goalsAgainst": 1
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
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 5,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 742,
              "team": "Genk",
              "rank": 7,
              "points": 7,
              "goalsDiff": 4,
              "form": "WDWL",
              "all": {
                "played": 4,
                "wins": 2,
                "draws": 1,
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
                "played": 2,
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 5,
                "goalsAgainst": 6
              }
            },
            {
              "teamId": 259,
              "team": "Lommel United",
              "rank": 8,
              "points": 7,
              "goalsDiff": 4,
              "form": "WWLD",
              "all": {
                "played": 4,
                "wins": 2,
                "draws": 1,
                "losses": 1,
                "goalsFor": 6,
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
              "rank": 9,
              "points": 7,
              "goalsDiff": 1,
              "form": "LDWW",
              "all": {
                "played": 4,
                "wins": 2,
                "draws": 1,
                "losses": 1,
                "goalsFor": 10,
                "goalsAgainst": 9
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
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 3,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 735,
              "team": "St. Truiden",
              "rank": 10,
              "points": 5,
              "goalsDiff": 3,
              "form": "WDD",
              "all": {
                "played": 3,
                "wins": 1,
                "draws": 2,
                "losses": 0,
                "goalsFor": 8,
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
                "wins": 1,
                "draws": 1,
                "losses": 0,
                "goalsFor": 7,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 554,
              "team": "Anderlecht",
              "rank": 11,
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
                "wins": 1,
                "draws": 0,
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
              "teamId": 738,
              "team": "SK Beveren",
              "rank": 12,
              "points": 3,
              "goalsDiff": -8,
              "form": "LLWL",
              "all": {
                "played": 4,
                "wins": 1,
                "draws": 0,
                "losses": 3,
                "goalsFor": 2,
                "goalsAgainst": 10
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
                "wins": 0,
                "draws": 0,
                "losses": 3,
                "goalsFor": 1,
                "goalsAgainst": 10
              }
            },
            {
              "teamId": 741,
              "team": "Cercle Brugge",
              "rank": 13,
              "points": 2,
              "goalsDiff": -2,
              "form": "LLDD",
              "all": {
                "played": 4,
                "wins": 0,
                "draws": 2,
                "losses": 2,
                "goalsFor": 5,
                "goalsAgainst": 7
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
              "points": 2,
              "goalsDiff": -4,
              "form": "DLDL",
              "all": {
                "played": 4,
                "wins": 0,
                "draws": 2,
                "losses": 2,
                "goalsFor": 5,
                "goalsAgainst": 9
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
              "rank": 15,
              "points": 1,
              "goalsDiff": -4,
              "form": "DLLL",
              "all": {
                "played": 4,
                "wins": 0,
                "draws": 1,
                "losses": 3,
                "goalsFor": 4,
                "goalsAgainst": 8
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
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 1,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 261,
              "team": "KVC Westerlo",
              "rank": 16,
              "points": 1,
              "goalsDiff": -9,
              "form": "DLLL",
              "all": {
                "played": 4,
                "wins": 0,
                "draws": 1,
                "losses": 3,
                "goalsFor": 5,
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
                "played": 2,
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 2,
                "goalsAgainst": 7
              }
            },
            {
              "teamId": 260,
              "team": "OH Leuven",
              "rank": 17,
              "points": 0,
              "goalsDiff": -6,
              "form": "LLL",
              "all": {
                "played": 3,
                "wins": 0,
                "draws": 0,
                "losses": 3,
                "goalsFor": 2,
                "goalsAgainst": 8
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
                "goalsFor": 1,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 734,
              "team": "Kortrijk",
              "rank": 18,
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
                "goalsAgainst": 6
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
              "teamId": 554,
              "team": "Anderlecht",
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
                "wins": 1,
                "draws": 0,
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
              "teamId": 734,
              "team": "Kortrijk",
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
                "goalsAgainst": 6
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
              "teamId": 631,
              "team": "Gent",
              "form": "WWW",
              "all": {
                "played": 3,
                "wins": 3,
                "draws": 0,
                "losses": 0,
                "goalsFor": 6,
                "goalsAgainst": 2
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
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 2,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 260,
              "team": "OH Leuven",
              "form": "LLL",
              "all": {
                "played": 3,
                "wins": 0,
                "draws": 0,
                "losses": 3,
                "goalsFor": 2,
                "goalsAgainst": 8
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
                "goalsFor": 1,
                "goalsAgainst": 3
              }
            }
          ],
          "fixtures": [
            {
              "fixtureId": 1558604,
              "kickoff": "2026-09-04T03:30:00+09:00",
              "status": "NS",
              "homeTeamId": 554,
              "homeTeam": "Anderlecht",
              "awayTeamId": 734,
              "awayTeam": "Kortrijk",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1558603,
              "kickoff": "2026-09-04T03:30:00+09:00",
              "status": "NS",
              "homeTeamId": 631,
              "homeTeam": "Gent",
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
          "key": "KLEAGUE2",
          "leagueId": 293,
          "season": "2026",
          "standings": [
            {
              "teamId": 2765,
              "team": "Suwon Bluewings",
              "rank": 1,
              "points": 47,
              "goalsDiff": 16,
              "form": "WWDWD",
              "all": {
                "played": 23,
                "wins": 14,
                "draws": 5,
                "losses": 4,
                "goalsFor": 36,
                "goalsAgainst": 20
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
                "played": 12,
                "wins": 8,
                "draws": 1,
                "losses": 3,
                "goalsFor": 22,
                "goalsAgainst": 12
              }
            },
            {
              "teamId": 2756,
              "team": "Suwon City FC",
              "rank": 2,
              "points": 43,
              "goalsDiff": 18,
              "form": "WWDWW",
              "all": {
                "played": 22,
                "wins": 12,
                "draws": 7,
                "losses": 3,
                "goalsFor": 45,
                "goalsAgainst": 27
              },
              "home": {
                "played": 10,
                "wins": 6,
                "draws": 4,
                "losses": 0,
                "goalsFor": 22,
                "goalsAgainst": 9
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
              "rank": 3,
              "points": 42,
              "goalsDiff": 12,
              "form": "WDWWL",
              "all": {
                "played": 23,
                "wins": 12,
                "draws": 6,
                "losses": 5,
                "goalsFor": 44,
                "goalsAgainst": 32
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
                "played": 11,
                "wins": 5,
                "draws": 4,
                "losses": 2,
                "goalsFor": 21,
                "goalsAgainst": 17
              }
            },
            {
              "teamId": 2749,
              "team": "Seoul E-Land FC",
              "rank": 4,
              "points": 42,
              "goalsDiff": 13,
              "form": "DDWDW",
              "all": {
                "played": 23,
                "wins": 12,
                "draws": 6,
                "losses": 5,
                "goalsFor": 41,
                "goalsAgainst": 28
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
                "played": 12,
                "wins": 6,
                "draws": 4,
                "losses": 2,
                "goalsFor": 18,
                "goalsAgainst": 12
              }
            },
            {
              "teamId": 7087,
              "team": "Hwaseong",
              "rank": 5,
              "points": 39,
              "goalsDiff": 12,
              "form": "WLDDW",
              "all": {
                "played": 23,
                "wins": 11,
                "draws": 6,
                "losses": 6,
                "goalsFor": 36,
                "goalsAgainst": 24
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
                "played": 7,
                "wins": 3,
                "draws": 1,
                "losses": 3,
                "goalsFor": 8,
                "goalsAgainst": 6
              }
            },
            {
              "teamId": 2752,
              "team": "Busan I Park",
              "rank": 6,
              "points": 38,
              "goalsDiff": 7,
              "form": "LDDLL",
              "all": {
                "played": 23,
                "wins": 11,
                "draws": 5,
                "losses": 7,
                "goalsFor": 39,
                "goalsAgainst": 32
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
                "played": 12,
                "wins": 5,
                "draws": 2,
                "losses": 5,
                "goalsFor": 20,
                "goalsAgainst": 20
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
              "goalsDiff": 1,
              "form": "LDWDD",
              "all": {
                "played": 22,
                "wins": 7,
                "draws": 10,
                "losses": 5,
                "goalsFor": 27,
                "goalsAgainst": 26
              },
              "home": {
                "played": 8,
                "wins": 1,
                "draws": 5,
                "losses": 2,
                "goalsFor": 10,
                "goalsAgainst": 12
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
              "points": 30,
              "goalsDiff": 0,
              "form": "WDDLD",
              "all": {
                "played": 23,
                "wins": 7,
                "draws": 9,
                "losses": 7,
                "goalsFor": 30,
                "goalsAgainst": 30
              },
              "home": {
                "played": 12,
                "wins": 6,
                "draws": 2,
                "losses": 4,
                "goalsFor": 20,
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
              "points": 27,
              "goalsDiff": -2,
              "form": "DWLWL",
              "all": {
                "played": 22,
                "wins": 6,
                "draws": 9,
                "losses": 7,
                "goalsFor": 24,
                "goalsAgainst": 26
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
                "played": 11,
                "wins": 3,
                "draws": 3,
                "losses": 5,
                "goalsFor": 13,
                "goalsAgainst": 16
              }
            },
            {
              "teamId": 9171,
              "team": "Yongin City",
              "rank": 11,
              "points": 25,
              "goalsDiff": -2,
              "form": "WLWDD",
              "all": {
                "played": 22,
                "wins": 5,
                "draws": 10,
                "losses": 7,
                "goalsFor": 29,
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
                "played": 11,
                "wins": 3,
                "draws": 5,
                "losses": 3,
                "goalsFor": 15,
                "goalsAgainst": 15
              }
            },
            {
              "teamId": 7098,
              "team": "Paju Citizen",
              "rank": 12,
              "points": 25,
              "goalsDiff": -6,
              "form": "LDWLW",
              "all": {
                "played": 23,
                "wins": 7,
                "draws": 4,
                "losses": 12,
                "goalsFor": 22,
                "goalsAgainst": 28
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
                "played": 12,
                "wins": 4,
                "draws": 3,
                "losses": 5,
                "goalsFor": 12,
                "goalsAgainst": 15
              }
            },
            {
              "teamId": 7061,
              "team": "Cheongju",
              "rank": 13,
              "points": 23,
              "goalsDiff": -10,
              "form": "LDWLD",
              "all": {
                "played": 23,
                "wins": 3,
                "draws": 14,
                "losses": 6,
                "goalsFor": 27,
                "goalsAgainst": 37
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
                "played": 11,
                "wins": 1,
                "draws": 8,
                "losses": 2,
                "goalsFor": 13,
                "goalsAgainst": 16
              }
            },
            {
              "teamId": 7060,
              "team": "Cheonan City",
              "rank": 14,
              "points": 21,
              "goalsDiff": -5,
              "form": "LLDLD",
              "all": {
                "played": 23,
                "wins": 4,
                "draws": 9,
                "losses": 10,
                "goalsFor": 27,
                "goalsAgainst": 32
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
                "played": 12,
                "wins": 2,
                "draws": 3,
                "losses": 7,
                "goalsFor": 18,
                "goalsAgainst": 22
              }
            },
            {
              "teamId": 2760,
              "team": "Jeonnam Dragons",
              "rank": 15,
              "points": 19,
              "goalsDiff": -12,
              "form": "WWLLD",
              "all": {
                "played": 22,
                "wins": 4,
                "draws": 7,
                "losses": 11,
                "goalsFor": 24,
                "goalsAgainst": 36
              },
              "home": {
                "played": 9,
                "wins": 3,
                "draws": 3,
                "losses": 3,
                "goalsFor": 10,
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
              "teamId": 2758,
              "team": "Ansan Greeners",
              "rank": 16,
              "points": 19,
              "goalsDiff": -20,
              "form": "LLLDD",
              "all": {
                "played": 23,
                "wins": 5,
                "draws": 4,
                "losses": 14,
                "goalsFor": 24,
                "goalsAgainst": 44
              },
              "home": {
                "played": 14,
                "wins": 2,
                "draws": 2,
                "losses": 10,
                "goalsFor": 15,
                "goalsAgainst": 28
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
              "teamId": 7076,
              "team": "Gimhae City",
              "rank": 17,
              "points": 12,
              "goalsDiff": -26,
              "form": "LLDLD",
              "all": {
                "played": 22,
                "wins": 2,
                "draws": 6,
                "losses": 14,
                "goalsFor": 17,
                "goalsAgainst": 43
              },
              "home": {
                "played": 10,
                "wins": 0,
                "draws": 2,
                "losses": 8,
                "goalsFor": 7,
                "goalsAgainst": 24
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
              "teamId": 7061,
              "team": "Cheongju",
              "form": "LDDDLDDDDDDDLWLDWDDLWDL",
              "all": {
                "played": 23,
                "wins": 3,
                "draws": 14,
                "losses": 6,
                "goalsFor": 27,
                "goalsAgainst": 37
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
                "played": 11,
                "wins": 1,
                "draws": 8,
                "losses": 2,
                "goalsFor": 13,
                "goalsAgainst": 16
              }
            },
            {
              "teamId": 2749,
              "team": "Seoul E-Land FC",
              "form": "LWLDWWWWLWLDWWLWDWWDWDD",
              "all": {
                "played": 23,
                "wins": 12,
                "draws": 6,
                "losses": 5,
                "goalsFor": 41,
                "goalsAgainst": 28
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
                "played": 12,
                "wins": 6,
                "draws": 4,
                "losses": 2,
                "goalsFor": 18,
                "goalsAgainst": 12
              }
            },
            {
              "teamId": 7098,
              "team": "Paju Citizen",
              "form": "LLWWLWLWLDDLLLLWDLWLWDL",
              "all": {
                "played": 23,
                "wins": 7,
                "draws": 4,
                "losses": 12,
                "goalsFor": 22,
                "goalsAgainst": 28
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
                "played": 12,
                "wins": 4,
                "draws": 3,
                "losses": 5,
                "goalsFor": 12,
                "goalsAgainst": 15
              }
            },
            {
              "teamId": 2747,
              "team": "Daegu FC",
              "form": "WWWLLDDLWDWWDWWWDLLWWDW",
              "all": {
                "played": 23,
                "wins": 12,
                "draws": 6,
                "losses": 5,
                "goalsFor": 44,
                "goalsAgainst": 32
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
                "played": 11,
                "wins": 5,
                "draws": 4,
                "losses": 2,
                "goalsFor": 21,
                "goalsAgainst": 17
              }
            }
          ],
          "fixtures": [
            {
              "fixtureId": 1510435,
              "kickoff": "2026-09-04T19:30:00+09:00",
              "status": "NS",
              "homeTeamId": 7061,
              "homeTeam": "Cheongju",
              "awayTeamId": 2749,
              "awayTeam": "Seoul E-Land FC",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1510436,
              "kickoff": "2026-09-04T19:30:00+09:00",
              "status": "NS",
              "homeTeamId": 7098,
              "homeTeam": "Paju Citizen",
              "awayTeamId": 2747,
              "awayTeam": "Daegu FC",
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
      "date": "2026-09-05",
      "updatedAt": "2026-09-02T12:46:33.613Z",
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
              "points": 6,
              "goalsDiff": 4,
              "form": "WW",
              "all": {
                "played": 2,
                "wins": 2,
                "draws": 0,
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
                "goalsFor": 3,
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
              "teamId": 64,
              "team": "Hull City",
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
                "goalsFor": 4,
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
              "teamId": 55,
              "team": "Brentford",
              "rank": 5,
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
              "teamId": 34,
              "team": "Newcastle",
              "rank": 6,
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
              "teamId": 45,
              "team": "Everton",
              "rank": 7,
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
                "goalsFor": 1,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 63,
              "team": "Leeds",
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
              "teamId": 51,
              "team": "Brighton",
              "rank": 9,
              "points": 3,
              "goalsDiff": 3,
              "form": "LW",
              "all": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 7,
                "goalsAgainst": 4
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
                "goalsFor": 3,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 33,
              "team": "Manchester United",
              "rank": 10,
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
                "goalsFor": 5,
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
              "teamId": 746,
              "team": "Sunderland",
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
                "goalsFor": 1,
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
              "teamId": 57,
              "team": "Ipswich",
              "rank": 12,
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
                "goalsFor": 2,
                "goalsAgainst": 1
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
              "teamId": 40,
              "team": "Liverpool",
              "rank": 13,
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
              "teamId": 35,
              "team": "Bournemouth",
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
              "teamId": 65,
              "team": "Nottingham Forest",
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
              "teamId": 36,
              "team": "Fulham",
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
              "teamId": 1346,
              "team": "Coventry",
              "rank": 17,
              "points": 0,
              "goalsDiff": -4,
              "form": "LL",
              "all": {
                "played": 2,
                "wins": 0,
                "draws": 0,
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
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 0,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 52,
              "team": "Crystal Palace",
              "rank": 18,
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
                "goalsFor": 1,
                "goalsAgainst": 4
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
              "teamId": 66,
              "team": "Aston Villa",
              "rank": 19,
              "points": 0,
              "goalsDiff": -5,
              "form": "LL",
              "all": {
                "played": 2,
                "wins": 0,
                "draws": 0,
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
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 0,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 47,
              "team": "Tottenham",
              "rank": 20,
              "points": 0,
              "goalsDiff": -5,
              "form": "LL",
              "all": {
                "played": 2,
                "wins": 0,
                "draws": 0,
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
              "teamId": 57,
              "team": "Ipswich",
              "form": "WL",
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
                "goalsFor": 2,
                "goalsAgainst": 1
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
              "teamId": 40,
              "team": "Liverpool",
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
              "teamId": 34,
              "team": "Newcastle",
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
              "teamId": 35,
              "team": "Bournemouth",
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
              "teamId": 36,
              "team": "Fulham",
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
              "teamId": 52,
              "team": "Crystal Palace",
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
                "goalsFor": 1,
                "goalsAgainst": 4
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
              "form": "WW",
              "all": {
                "played": 2,
                "wins": 2,
                "draws": 0,
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
              "teamId": 1346,
              "team": "Coventry",
              "form": "LL",
              "all": {
                "played": 2,
                "wins": 0,
                "draws": 0,
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
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 0,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 51,
              "team": "Brighton",
              "form": "WL",
              "all": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 7,
                "goalsAgainst": 4
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
                "goalsFor": 3,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 63,
              "team": "Leeds",
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
              "teamId": 55,
              "team": "Brentford",
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
              "teamId": 746,
              "team": "Sunderland",
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
                "goalsFor": 1,
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
              "teamId": 47,
              "team": "Tottenham",
              "form": "LL",
              "all": {
                "played": 2,
                "wins": 0,
                "draws": 0,
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
              "fixtureId": 1557393,
              "kickoff": "2026-09-05T04:00:00+09:00",
              "status": "NS",
              "homeTeamId": 57,
              "homeTeam": "Ipswich",
              "awayTeamId": 40,
              "awayTeam": "Liverpool",
              "injuriesChecked": true,
              "injuries": [
                {
                  "fixtureId": 1557393,
                  "teamId": 57,
                  "playerId": 37236,
                  "player": "A. Matusiwa",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1557393,
                  "teamId": 57,
                  "playerId": 138931,
                  "player": "J. Philogene",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1557393,
                  "teamId": 57,
                  "playerId": 18397,
                  "player": "J. Taylor",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1557393,
                  "teamId": 57,
                  "playerId": 575,
                  "player": "Florentino",
                  "type": "Questionable",
                  "reason": "Inactive"
                },
                {
                  "fixtureId": 1557393,
                  "teamId": 40,
                  "playerId": 310187,
                  "player": "S. Bajcetic",
                  "type": "Missing Fixture",
                  "reason": "Hamstring Injury"
                },
                {
                  "fixtureId": 1557393,
                  "teamId": 40,
                  "playerId": 161904,
                  "player": "B. Barcola",
                  "type": "Missing Fixture",
                  "reason": "Inactive"
                },
                {
                  "fixtureId": 1557393,
                  "teamId": 40,
                  "playerId": 180317,
                  "player": "C. Bradley",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1557393,
                  "teamId": 40,
                  "playerId": 30410,
                  "player": "F. Chiesa",
                  "type": "Missing Fixture",
                  "reason": "Back Injury"
                },
                {
                  "fixtureId": 1557393,
                  "teamId": 40,
                  "playerId": 174565,
                  "player": "H. Ekitike",
                  "type": "Missing Fixture",
                  "reason": "Achilles Tendon Injury"
                },
                {
                  "fixtureId": 1557393,
                  "teamId": 40,
                  "playerId": 284,
                  "player": "J. Gomez",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1557393,
                  "teamId": 40,
                  "playerId": 409047,
                  "player": "G. Leoni",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                }
              ],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1557395,
              "kickoff": "2026-09-05T20:30:00+09:00",
              "status": "NS",
              "homeTeamId": 34,
              "homeTeam": "Newcastle",
              "awayTeamId": 35,
              "awayTeam": "Bournemouth",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1557391,
              "kickoff": "2026-09-05T23:00:00+09:00",
              "status": "NS",
              "homeTeamId": 36,
              "homeTeam": "Fulham",
              "awayTeamId": 52,
              "awayTeam": "Crystal Palace",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1557394,
              "kickoff": "2026-09-05T23:00:00+09:00",
              "status": "NS",
              "homeTeamId": 50,
              "homeTeam": "Manchester City",
              "awayTeamId": 1346,
              "awayTeam": "Coventry",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1557389,
              "kickoff": "2026-09-05T23:00:00+09:00",
              "status": "NS",
              "homeTeamId": 51,
              "homeTeam": "Brighton",
              "awayTeamId": 63,
              "awayTeam": "Leeds",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1557388,
              "kickoff": "2026-09-05T23:00:00+09:00",
              "status": "NS",
              "homeTeamId": 55,
              "homeTeam": "Brentford",
              "awayTeamId": 746,
              "awayTeam": "Sunderland",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1557396,
              "kickoff": "2026-09-05T23:00:00+09:00",
              "status": "NS",
              "homeTeamId": 65,
              "homeTeam": "Nottingham Forest",
              "awayTeamId": 47,
              "awayTeam": "Tottenham",
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
              "teamId": 76,
              "team": "Swansea",
              "rank": 1,
              "points": 10,
              "goalsDiff": 6,
              "form": "WWDW",
              "all": {
                "played": 4,
                "wins": 3,
                "draws": 1,
                "losses": 0,
                "goalsFor": 7,
                "goalsAgainst": 1
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
                "wins": 2,
                "draws": 0,
                "losses": 0,
                "goalsFor": 5,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 1335,
              "team": "Charlton",
              "rank": 2,
              "points": 9,
              "goalsDiff": 3,
              "form": "WWW",
              "all": {
                "played": 3,
                "wins": 3,
                "draws": 0,
                "losses": 0,
                "goalsFor": 5,
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
                "goalsFor": 2,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 39,
              "team": "Wolves",
              "rank": 3,
              "points": 7,
              "goalsDiff": 3,
              "form": "LWWD",
              "all": {
                "played": 4,
                "wins": 2,
                "draws": 1,
                "losses": 1,
                "goalsFor": 11,
                "goalsAgainst": 8
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
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 5,
                "goalsAgainst": 5
              }
            },
            {
              "teamId": 72,
              "team": "QPR",
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
                "goalsFor": 0,
                "goalsAgainst": 0
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
              "rank": 5,
              "points": 7,
              "goalsDiff": 1,
              "form": "WWDL",
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
                "goalsFor": 2,
                "goalsAgainst": 3
              },
              "away": {
                "played": 2,
                "wins": 1,
                "draws": 1,
                "losses": 0,
                "goalsFor": 5,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 70,
              "team": "Middlesbrough",
              "rank": 6,
              "points": 6,
              "goalsDiff": 2,
              "form": "WLW",
              "all": {
                "played": 3,
                "wins": 2,
                "draws": 0,
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
              "rank": 7,
              "points": 6,
              "goalsDiff": 1,
              "form": "LWW",
              "all": {
                "played": 3,
                "wins": 2,
                "draws": 0,
                "losses": 1,
                "goalsFor": 6,
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
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 58,
              "team": "Millwall",
              "rank": 8,
              "points": 6,
              "goalsDiff": 1,
              "form": "LWW",
              "all": {
                "played": 3,
                "wins": 2,
                "draws": 0,
                "losses": 1,
                "goalsFor": 6,
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
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 5
              }
            },
            {
              "teamId": 54,
              "team": "Birmingham",
              "rank": 9,
              "points": 6,
              "goalsDiff": 1,
              "form": "DWDD",
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
              "teamId": 62,
              "team": "Sheffield Utd",
              "rank": 10,
              "points": 6,
              "goalsDiff": 1,
              "form": "WDDD",
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
                "wins": 1,
                "draws": 1,
                "losses": 0,
                "goalsFor": 3,
                "goalsAgainst": 2
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
              "teamId": 48,
              "team": "West Ham",
              "rank": 11,
              "points": 5,
              "goalsDiff": 1,
              "form": "WDLD",
              "all": {
                "played": 4,
                "wins": 1,
                "draws": 2,
                "losses": 1,
                "goalsFor": 8,
                "goalsAgainst": 7
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
                "wins": 0,
                "draws": 2,
                "losses": 0,
                "goalsFor": 3,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 67,
              "team": "Blackburn",
              "rank": 12,
              "points": 5,
              "goalsDiff": 0,
              "form": "DLWD",
              "all": {
                "played": 4,
                "wins": 1,
                "draws": 2,
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
                "played": 2,
                "wins": 0,
                "draws": 2,
                "losses": 0,
                "goalsFor": 2,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 38,
              "team": "Watford",
              "rank": 13,
              "points": 5,
              "goalsDiff": -1,
              "form": "LDDW",
              "all": {
                "played": 4,
                "wins": 1,
                "draws": 2,
                "losses": 1,
                "goalsFor": 4,
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
                "played": 2,
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 1,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 68,
              "team": "Bolton",
              "rank": 14,
              "points": 4,
              "goalsDiff": -1,
              "form": "LLDW",
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
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 2,
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
              "teamId": 69,
              "team": "Derby",
              "rank": 15,
              "points": 4,
              "goalsDiff": -2,
              "form": "WLDL",
              "all": {
                "played": 4,
                "wins": 1,
                "draws": 1,
                "losses": 2,
                "goalsFor": 5,
                "goalsAgainst": 7
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
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 1379,
              "team": "Lincoln",
              "rank": 16,
              "points": 4,
              "goalsDiff": -2,
              "form": "DWLL",
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
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 1,
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
              "teamId": 41,
              "team": "Southampton",
              "rank": 17,
              "points": 3,
              "goalsDiff": 5,
              "form": "DWWL",
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
                "goalsFor": 8,
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
              "teamId": 43,
              "team": "Cardiff",
              "rank": 18,
              "points": 3,
              "goalsDiff": 0,
              "form": "DDD",
              "all": {
                "played": 3,
                "wins": 0,
                "draws": 3,
                "losses": 0,
                "goalsFor": 5,
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
                "played": 1,
                "wins": 0,
                "draws": 1,
                "losses": 0,
                "goalsFor": 2,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 71,
              "team": "Norwich",
              "rank": 19,
              "points": 3,
              "goalsDiff": -2,
              "form": "LWLL",
              "all": {
                "played": 4,
                "wins": 1,
                "draws": 0,
                "losses": 3,
                "goalsFor": 5,
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
                "draws": 0,
                "losses": 2,
                "goalsFor": 0,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 1355,
              "team": "Portsmouth",
              "rank": 20,
              "points": 3,
              "goalsDiff": -3,
              "form": "LLWL",
              "all": {
                "played": 4,
                "wins": 1,
                "draws": 0,
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
              "teamId": 75,
              "team": "Stoke City",
              "rank": 21,
              "points": 3,
              "goalsDiff": -5,
              "form": "WLLL",
              "all": {
                "played": 4,
                "wins": 1,
                "draws": 0,
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
                "played": 2,
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 2,
                "goalsAgainst": 7
              }
            },
            {
              "teamId": 1837,
              "team": "Wrexham",
              "rank": 22,
              "points": 2,
              "goalsDiff": -1,
              "form": "LDD",
              "all": {
                "played": 3,
                "wins": 0,
                "draws": 2,
                "losses": 1,
                "goalsFor": 3,
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
                "draws": 1,
                "losses": 0,
                "goalsFor": 1,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 44,
              "team": "Burnley",
              "rank": 23,
              "points": 1,
              "goalsDiff": -5,
              "form": "LLD",
              "all": {
                "played": 3,
                "wins": 0,
                "draws": 1,
                "losses": 2,
                "goalsFor": 4,
                "goalsAgainst": 9
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
                "goalsFor": 2,
                "goalsAgainst": 7
              }
            },
            {
              "teamId": 59,
              "team": "Preston",
              "rank": 24,
              "points": 0,
              "goalsDiff": -6,
              "form": "LLLL",
              "all": {
                "played": 4,
                "wins": 0,
                "draws": 0,
                "losses": 4,
                "goalsFor": 3,
                "goalsAgainst": 9
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
                "goalsFor": 1,
                "goalsAgainst": 3
              }
            }
          ],
          "teams": [
            {
              "teamId": 59,
              "team": "Preston",
              "form": "LLLL",
              "all": {
                "played": 4,
                "wins": 0,
                "draws": 0,
                "losses": 4,
                "goalsFor": 3,
                "goalsAgainst": 9
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
                "goalsFor": 1,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 67,
              "team": "Blackburn",
              "form": "DWLD",
              "all": {
                "played": 4,
                "wins": 1,
                "draws": 2,
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
                "played": 2,
                "wins": 0,
                "draws": 2,
                "losses": 0,
                "goalsFor": 2,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 75,
              "team": "Stoke City",
              "form": "LLLW",
              "all": {
                "played": 4,
                "wins": 1,
                "draws": 0,
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
                "played": 2,
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 2,
                "goalsAgainst": 7
              }
            },
            {
              "teamId": 1335,
              "team": "Charlton",
              "form": "WWW",
              "all": {
                "played": 3,
                "wins": 3,
                "draws": 0,
                "losses": 0,
                "goalsFor": 5,
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
                "goalsFor": 2,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 1379,
              "team": "Lincoln",
              "form": "LLWD",
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
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 1,
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
              "teamId": 41,
              "team": "Southampton",
              "form": "LWWD",
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
                "goalsFor": 8,
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
              "teamId": 44,
              "team": "Burnley",
              "form": "DLL",
              "all": {
                "played": 3,
                "wins": 0,
                "draws": 1,
                "losses": 2,
                "goalsFor": 4,
                "goalsAgainst": 9
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
                "goalsFor": 2,
                "goalsAgainst": 7
              }
            },
            {
              "teamId": 56,
              "team": "Bristol City",
              "form": "LDWW",
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
                "goalsFor": 2,
                "goalsAgainst": 3
              },
              "away": {
                "played": 2,
                "wins": 1,
                "draws": 1,
                "losses": 0,
                "goalsFor": 5,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 48,
              "team": "West Ham",
              "form": "DLDW",
              "all": {
                "played": 4,
                "wins": 1,
                "draws": 2,
                "losses": 1,
                "goalsFor": 8,
                "goalsAgainst": 7
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
                "wins": 0,
                "draws": 2,
                "losses": 0,
                "goalsFor": 3,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 69,
              "team": "Derby",
              "form": "LDLW",
              "all": {
                "played": 4,
                "wins": 1,
                "draws": 1,
                "losses": 2,
                "goalsFor": 5,
                "goalsAgainst": 7
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
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 58,
              "team": "Millwall",
              "form": "WWL",
              "all": {
                "played": 3,
                "wins": 2,
                "draws": 0,
                "losses": 1,
                "goalsFor": 6,
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
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 5
              }
            },
            {
              "teamId": 68,
              "team": "Bolton",
              "form": "WDLL",
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
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 2,
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
              "teamId": 60,
              "team": "West Brom",
              "form": "WWL",
              "all": {
                "played": 3,
                "wins": 2,
                "draws": 0,
                "losses": 1,
                "goalsFor": 6,
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
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 38,
              "team": "Watford",
              "form": "WDDL",
              "all": {
                "played": 4,
                "wins": 1,
                "draws": 2,
                "losses": 1,
                "goalsFor": 4,
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
                "played": 2,
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 1,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 62,
              "team": "Sheffield Utd",
              "form": "DDDW",
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
                "wins": 1,
                "draws": 1,
                "losses": 0,
                "goalsFor": 3,
                "goalsAgainst": 2
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
              "teamId": 71,
              "team": "Norwich",
              "form": "LLWL",
              "all": {
                "played": 4,
                "wins": 1,
                "draws": 0,
                "losses": 3,
                "goalsFor": 5,
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
                "draws": 0,
                "losses": 2,
                "goalsFor": 0,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 72,
              "team": "QPR",
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
                "goalsFor": 0,
                "goalsAgainst": 0
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
              "teamId": 70,
              "team": "Middlesbrough",
              "form": "WLW",
              "all": {
                "played": 3,
                "wins": 2,
                "draws": 0,
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
              "form": "LWLL",
              "all": {
                "played": 4,
                "wins": 1,
                "draws": 0,
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
              "teamId": 43,
              "team": "Cardiff",
              "form": "DDD",
              "all": {
                "played": 3,
                "wins": 0,
                "draws": 3,
                "losses": 0,
                "goalsFor": 5,
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
              "fixtureId": 1563136,
              "kickoff": "2026-09-05T20:30:00+09:00",
              "status": "NS",
              "homeTeamId": 59,
              "homeTeam": "Preston",
              "awayTeamId": 67,
              "awayTeam": "Blackburn",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1563139,
              "kickoff": "2026-09-05T20:30:00+09:00",
              "status": "NS",
              "homeTeamId": 75,
              "homeTeam": "Stoke City",
              "awayTeamId": 1335,
              "awayTeam": "Charlton",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1563133,
              "kickoff": "2026-09-05T20:30:00+09:00",
              "status": "NS",
              "homeTeamId": 1379,
              "homeTeam": "Lincoln",
              "awayTeamId": 41,
              "awayTeam": "Southampton",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1563132,
              "kickoff": "2026-09-05T23:00:00+09:00",
              "status": "NS",
              "homeTeamId": 44,
              "homeTeam": "Burnley",
              "awayTeamId": 56,
              "awayTeam": "Bristol City",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1563142,
              "kickoff": "2026-09-05T23:00:00+09:00",
              "status": "NS",
              "homeTeamId": 48,
              "homeTeam": "West Ham",
              "awayTeamId": 69,
              "awayTeam": "Derby",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1563134,
              "kickoff": "2026-09-05T23:00:00+09:00",
              "status": "NS",
              "homeTeamId": 58,
              "homeTeam": "Millwall",
              "awayTeamId": 68,
              "awayTeam": "Bolton",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1563141,
              "kickoff": "2026-09-05T23:00:00+09:00",
              "status": "NS",
              "homeTeamId": 60,
              "homeTeam": "West Brom",
              "awayTeamId": 38,
              "awayTeam": "Watford",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1563138,
              "kickoff": "2026-09-05T23:00:00+09:00",
              "status": "NS",
              "homeTeamId": 62,
              "homeTeam": "Sheffield Utd",
              "awayTeamId": 71,
              "awayTeam": "Norwich",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1563137,
              "kickoff": "2026-09-05T23:00:00+09:00",
              "status": "NS",
              "homeTeamId": 72,
              "homeTeam": "QPR",
              "awayTeamId": 70,
              "awayTeam": "Middlesbrough",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1563135,
              "kickoff": "2026-09-05T23:00:00+09:00",
              "status": "NS",
              "homeTeamId": 1355,
              "homeTeam": "Portsmouth",
              "awayTeamId": 43,
              "awayTeam": "Cardiff",
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
              "points": 9,
              "goalsDiff": 10,
              "form": "WWW",
              "all": {
                "played": 3,
                "wins": 3,
                "draws": 0,
                "losses": 0,
                "goalsFor": 12,
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
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 5,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 541,
              "team": "Real Madrid",
              "rank": 2,
              "points": 9,
              "goalsDiff": 8,
              "form": "WWW",
              "all": {
                "played": 3,
                "wins": 3,
                "draws": 0,
                "losses": 0,
                "goalsFor": 10,
                "goalsAgainst": 2
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
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 2,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 530,
              "team": "Atletico Madrid",
              "rank": 3,
              "points": 7,
              "goalsDiff": 4,
              "form": "WDW",
              "all": {
                "played": 3,
                "wins": 2,
                "draws": 1,
                "losses": 0,
                "goalsFor": 7,
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
              "rank": 4,
              "points": 7,
              "goalsDiff": 4,
              "form": "WDW",
              "all": {
                "played": 3,
                "wins": 2,
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
                "goalsFor": 4,
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
              "teamId": 727,
              "team": "Osasuna",
              "rank": 5,
              "points": 7,
              "goalsDiff": 2,
              "form": "WWD",
              "all": {
                "played": 3,
                "wins": 2,
                "draws": 1,
                "losses": 0,
                "goalsFor": 3,
                "goalsAgainst": 1
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
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 2,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 536,
              "team": "Sevilla",
              "rank": 6,
              "points": 6,
              "goalsDiff": 1,
              "form": "LWW",
              "all": {
                "played": 3,
                "wins": 2,
                "draws": 0,
                "losses": 1,
                "goalsFor": 6,
                "goalsAgainst": 5
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
              "rank": 7,
              "points": 6,
              "goalsDiff": -1,
              "form": "LWW",
              "all": {
                "played": 3,
                "wins": 2,
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
                "goalsFor": 1,
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
              "rank": 8,
              "points": 5,
              "goalsDiff": 2,
              "form": "WDD",
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
              "teamId": 539,
              "team": "Levante",
              "rank": 9,
              "points": 4,
              "goalsDiff": 0,
              "form": "WDL",
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
                "goalsFor": 5,
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
              "teamId": 4665,
              "team": "Racing Santander",
              "rank": 10,
              "points": 4,
              "goalsDiff": 0,
              "form": "WLD",
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
                "draws": 1,
                "losses": 0,
                "goalsFor": 5,
                "goalsAgainst": 4
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
              "teamId": 540,
              "team": "Espanyol",
              "rank": 11,
              "points": 3,
              "goalsDiff": 1,
              "form": "LLW",
              "all": {
                "played": 3,
                "wins": 1,
                "draws": 0,
                "losses": 2,
                "goalsFor": 5,
                "goalsAgainst": 4
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
                "draws": 0,
                "losses": 1,
                "goalsFor": 1,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 531,
              "team": "Athletic Club",
              "rank": 12,
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
                "goalsFor": 1,
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
              "teamId": 548,
              "team": "Real Sociedad",
              "rank": 13,
              "points": 3,
              "goalsDiff": -3,
              "form": "WLL",
              "all": {
                "played": 3,
                "wins": 1,
                "draws": 0,
                "losses": 2,
                "goalsFor": 3,
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
              "rank": 14,
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
              "rank": 15,
              "points": 2,
              "goalsDiff": -1,
              "form": "LDD",
              "all": {
                "played": 3,
                "wins": 0,
                "draws": 2,
                "losses": 1,
                "goalsFor": 4,
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
              "rank": 16,
              "points": 1,
              "goalsDiff": -3,
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
                "goalsFor": 0,
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
              "teamId": 538,
              "team": "Celta Vigo",
              "rank": 17,
              "points": 1,
              "goalsDiff": -3,
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
                "draws": 0,
                "losses": 2,
                "goalsFor": 1,
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
              "teamId": 728,
              "team": "Rayo Vallecano",
              "rank": 18,
              "points": 1,
              "goalsDiff": -4,
              "form": "LDL",
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
                "draws": 1,
                "losses": 0,
                "goalsFor": 1,
                "goalsAgainst": 1
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
              "teamId": 535,
              "team": "Malaga",
              "rank": 20,
              "points": 1,
              "goalsDiff": -6,
              "form": "LDL",
              "all": {
                "played": 3,
                "wins": 0,
                "draws": 1,
                "losses": 2,
                "goalsFor": 1,
                "goalsAgainst": 7
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
                "draws": 0,
                "losses": 2,
                "goalsFor": 0,
                "goalsAgainst": 6
              }
            }
          ],
          "teams": [
            {
              "teamId": 543,
              "team": "Real Betis",
              "form": "WWL",
              "all": {
                "played": 3,
                "wins": 2,
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
                "goalsFor": 1,
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
              "teamId": 541,
              "team": "Real Madrid",
              "form": "WWW",
              "all": {
                "played": 3,
                "wins": 3,
                "draws": 0,
                "losses": 0,
                "goalsFor": 10,
                "goalsAgainst": 2
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
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 2,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 531,
              "team": "Athletic Club",
              "form": "LLW",
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
                "goalsFor": 1,
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
              "teamId": 530,
              "team": "Atletico Madrid",
              "form": "WDW",
              "all": {
                "played": 3,
                "wins": 2,
                "draws": 1,
                "losses": 0,
                "goalsFor": 7,
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
              "fixtureId": 1570365,
              "kickoff": "2026-09-05T04:00:00+09:00",
              "status": "NS",
              "homeTeamId": 543,
              "homeTeam": "Real Betis",
              "awayTeamId": 541,
              "awayTeam": "Real Madrid",
              "injuriesChecked": true,
              "injuries": [
                {
                  "fixtureId": 1570365,
                  "teamId": 543,
                  "playerId": 122956,
                  "player": "D. Conde",
                  "type": "Missing Fixture",
                  "reason": "Shoulder Injury"
                },
                {
                  "fixtureId": 1570365,
                  "teamId": 543,
                  "playerId": 1578,
                  "player": "G. Lo Celso",
                  "type": "Missing Fixture",
                  "reason": "Muscle Injury"
                },
                {
                  "fixtureId": 1570365,
                  "teamId": 543,
                  "playerId": 544644,
                  "player": "J. Morante",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1570365,
                  "teamId": 543,
                  "playerId": 414442,
                  "player": "G. Petit",
                  "type": "Missing Fixture",
                  "reason": "Muscle Injury"
                },
                {
                  "fixtureId": 1570365,
                  "teamId": 543,
                  "playerId": 47119,
                  "player": "A. Ruibal",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1570365,
                  "teamId": 541,
                  "playerId": 341640,
                  "player": "R. Asencio",
                  "type": "Missing Fixture",
                  "reason": "Muscle Injury"
                },
                {
                  "fixtureId": 1570365,
                  "teamId": 541,
                  "playerId": 372,
                  "player": "Eder Militao",
                  "type": "Missing Fixture",
                  "reason": "Hamstring Injury"
                },
                {
                  "fixtureId": 1570365,
                  "teamId": 541,
                  "playerId": 377122,
                  "player": "Endrick",
                  "type": "Missing Fixture",
                  "reason": "Muscle Injury"
                },
                {
                  "fixtureId": 1570365,
                  "teamId": 541,
                  "playerId": 653,
                  "player": "F. Mendy",
                  "type": "Missing Fixture",
                  "reason": "Hip Injury"
                },
                {
                  "fixtureId": 1570365,
                  "teamId": 541,
                  "playerId": 509470,
                  "player": "T. Pitarch",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1570365,
                  "teamId": 541,
                  "playerId": 10009,
                  "player": "Rodrygo",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1570365,
                  "teamId": 541,
                  "playerId": 1271,
                  "player": "A. Tchouameni",
                  "type": "Missing Fixture",
                  "reason": "Muscle Injury"
                }
              ],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1570364,
              "kickoff": "2026-09-05T23:15:00+09:00",
              "status": "NS",
              "homeTeamId": 531,
              "homeTeam": "Athletic Club",
              "awayTeamId": 530,
              "awayTeam": "Atletico Madrid",
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
              "points": 6,
              "goalsDiff": 8,
              "form": "WW",
              "all": {
                "played": 2,
                "wins": 2,
                "draws": 0,
                "losses": 0,
                "goalsFor": 8,
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
                "goalsFor": 4,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 505,
              "team": "Inter",
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
              "teamId": 489,
              "team": "AC Milan",
              "rank": 3,
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
              "teamId": 496,
              "team": "Juventus",
              "rank": 4,
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
              "teamId": 499,
              "team": "Atalanta",
              "rank": 5,
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
                "played": 2,
                "wins": 2,
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
              "teamId": 494,
              "team": "Udinese",
              "rank": 7,
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
              "teamId": 895,
              "team": "Como",
              "rank": 8,
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
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
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
              "teamId": 512,
              "team": "Frosinone",
              "rank": 9,
              "points": 3,
              "goalsDiff": 2,
              "form": "WL",
              "all": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 3,
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
                "goalsFor": 3,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 492,
              "team": "Napoli",
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
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 488,
              "team": "Sassuolo",
              "rank": 11,
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
              "teamId": 490,
              "team": "Cagliari",
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
              "rank": 13,
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
              "teamId": 503,
              "team": "Torino",
              "rank": 14,
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
                "goalsFor": 1,
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
              "teamId": 500,
              "team": "Bologna",
              "rank": 15,
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
              "teamId": 495,
              "team": "Genoa",
              "rank": 16,
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
              "teamId": 523,
              "team": "Parma",
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
              "teamId": 1579,
              "team": "Monza",
              "rank": 18,
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
                "goalsFor": 2,
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
              "teamId": 517,
              "team": "Venezia",
              "rank": 19,
              "points": 0,
              "goalsDiff": -4,
              "form": "LL",
              "all": {
                "played": 2,
                "wins": 0,
                "draws": 0,
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
              "teamId": 502,
              "team": "Fiorentina",
              "rank": 20,
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
            }
          ],
          "teams": [
            {
              "teamId": 495,
              "team": "Genoa",
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
              "teamId": 895,
              "team": "Como",
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
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
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
              "teamId": 502,
              "team": "Fiorentina",
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
              "teamId": 503,
              "team": "Torino",
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
                "goalsFor": 1,
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
            }
          ],
          "fixtures": [
            {
              "fixtureId": 1550112,
              "kickoff": "2026-09-05T03:45:00+09:00",
              "status": "NS",
              "homeTeamId": 495,
              "homeTeam": "Genoa",
              "awayTeamId": 895,
              "awayTeam": "Como",
              "injuriesChecked": true,
              "injuries": [
                {
                  "fixtureId": 1550112,
                  "teamId": 495,
                  "playerId": 452033,
                  "player": "L. Venturino",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1550112,
                  "teamId": 895,
                  "playerId": 354533,
                  "player": "J. Addai",
                  "type": "Missing Fixture",
                  "reason": "Achilles Tendon Injury"
                },
                {
                  "fixtureId": 1550112,
                  "teamId": 895,
                  "playerId": 877,
                  "player": "M. Kean",
                  "type": "Questionable",
                  "reason": "Transfer negotiations"
                }
              ],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1550110,
              "kickoff": "2026-09-05T22:00:00+09:00",
              "status": "NS",
              "homeTeamId": 502,
              "homeTeam": "Fiorentina",
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
              "teamId": 157,
              "team": "Bayern München",
              "rank": 1,
              "points": 3,
              "goalsDiff": 4,
              "form": "W",
              "all": {
                "played": 1,
                "wins": 1,
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
                "goalsFor": 5,
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
              "teamId": 160,
              "team": "SC Freiburg",
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
              "teamId": 173,
              "team": "RB Leipzig",
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
              "teamId": 170,
              "team": "FC Augsburg",
              "rank": 4,
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
              "teamId": 165,
              "team": "Borussia Dortmund",
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
              "teamId": 192,
              "team": "1. FC Köln",
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
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 3,
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
              "teamId": 1660,
              "team": "SV Elversberg",
              "rank": 7,
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
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 3,
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
              "teamId": 169,
              "team": "Eintracht Frankfurt",
              "rank": 8,
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
              "teamId": 182,
              "team": "Union Berlin",
              "rank": 9,
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
              "teamId": 164,
              "team": "FSV Mainz 05",
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
              "teamId": 185,
              "team": "SC Paderborn 07",
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
              "teamId": 167,
              "team": "1899 Hoffenheim",
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
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 168,
              "team": "Bayer Leverkusen",
              "rank": 13,
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
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 175,
              "team": "Hamburger SV",
              "rank": 14,
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
              "teamId": 162,
              "team": "Werder Bremen",
              "rank": 15,
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
              "teamId": 163,
              "team": "Borussia Mönchengladbach",
              "rank": 16,
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
              "teamId": 174,
              "team": "FC Schalke 04",
              "rank": 17,
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
              "teamId": 172,
              "team": "VfB Stuttgart",
              "rank": 18,
              "points": 0,
              "goalsDiff": -4,
              "form": "L",
              "all": {
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 1,
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
                "goalsFor": 1,
                "goalsAgainst": 5
              }
            }
          ],
          "teams": [
            {
              "teamId": 172,
              "team": "VfB Stuttgart",
              "form": "L",
              "all": {
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 1,
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
                "goalsFor": 1,
                "goalsAgainst": 5
              }
            },
            {
              "teamId": 192,
              "team": "1. FC Köln",
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
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 3,
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
              "teamId": 162,
              "team": "Werder Bremen",
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
              "teamId": 173,
              "team": "RB Leipzig",
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
              "teamId": 163,
              "team": "Borussia Mönchengladbach",
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
              "teamId": 1660,
              "team": "SV Elversberg",
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
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 3,
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
              "teamId": 167,
              "team": "1899 Hoffenheim",
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
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 165,
              "team": "Borussia Dortmund",
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
              "teamId": 168,
              "team": "Bayer Leverkusen",
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
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 182,
              "team": "Union Berlin",
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
              "teamId": 185,
              "team": "SC Paderborn 07",
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
              "teamId": 160,
              "team": "SC Freiburg",
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
            }
          ],
          "fixtures": [
            {
              "fixtureId": 1575149,
              "kickoff": "2026-09-05T03:30:00+09:00",
              "status": "NS",
              "homeTeamId": 172,
              "homeTeam": "VfB Stuttgart",
              "awayTeamId": 192,
              "awayTeam": "1. FC Köln",
              "injuriesChecked": true,
              "injuries": [
                {
                  "fixtureId": 1575149,
                  "teamId": 172,
                  "playerId": 350799,
                  "player": "J. Arevalo",
                  "type": "Missing Fixture",
                  "reason": "Back Injury"
                },
                {
                  "fixtureId": 1575149,
                  "teamId": 172,
                  "playerId": 180731,
                  "player": "L. Assignon",
                  "type": "Missing Fixture",
                  "reason": "Shoulder Injury"
                },
                {
                  "fixtureId": 1575149,
                  "teamId": 172,
                  "playerId": 287927,
                  "player": "J. Diehl",
                  "type": "Missing Fixture",
                  "reason": "Muscle Injury"
                },
                {
                  "fixtureId": 1575149,
                  "teamId": 172,
                  "playerId": 349344,
                  "player": "L. Jaquez",
                  "type": "Missing Fixture",
                  "reason": "Muscle Injury"
                },
                {
                  "fixtureId": 1575149,
                  "teamId": 172,
                  "playerId": 24806,
                  "player": "N. Nartey",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1575149,
                  "teamId": 172,
                  "playerId": 342163,
                  "player": "L. Sauer",
                  "type": "Missing Fixture",
                  "reason": "Muscle Injury"
                },
                {
                  "fixtureId": 1575149,
                  "teamId": 172,
                  "playerId": 327993,
                  "player": "D. Seimen",
                  "type": "Missing Fixture",
                  "reason": "Thigh Injury"
                },
                {
                  "fixtureId": 1575149,
                  "teamId": 172,
                  "playerId": 13,
                  "player": "D. Zagadou",
                  "type": "Missing Fixture",
                  "reason": "Muscle Injury"
                },
                {
                  "fixtureId": 1575149,
                  "teamId": 172,
                  "playerId": 24798,
                  "player": "C. Fuhrich",
                  "type": "Questionable",
                  "reason": "Muscle Injury"
                },
                {
                  "fixtureId": 1575149,
                  "teamId": 192,
                  "playerId": 90641,
                  "player": "T. Hubers",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1575149,
                  "teamId": 192,
                  "playerId": 191740,
                  "player": "S. Sebulonsen",
                  "type": "Missing Fixture",
                  "reason": "Muscle Injury"
                },
                {
                  "fixtureId": 1575149,
                  "teamId": 192,
                  "playerId": 26260,
                  "player": "L. Waldschmidt",
                  "type": "Missing Fixture",
                  "reason": "Muscle Injury"
                }
              ],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1575155,
              "kickoff": "2026-09-05T22:30:00+09:00",
              "status": "NS",
              "homeTeamId": 162,
              "homeTeam": "Werder Bremen",
              "awayTeamId": 173,
              "awayTeam": "RB Leipzig",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1575153,
              "kickoff": "2026-09-05T22:30:00+09:00",
              "status": "NS",
              "homeTeamId": 163,
              "homeTeam": "Borussia Mönchengladbach",
              "awayTeamId": 1660,
              "awayTeam": "SV Elversberg",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1575150,
              "kickoff": "2026-09-05T22:30:00+09:00",
              "status": "NS",
              "homeTeamId": 167,
              "homeTeam": "1899 Hoffenheim",
              "awayTeamId": 165,
              "awayTeam": "Borussia Dortmund",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1575151,
              "kickoff": "2026-09-05T22:30:00+09:00",
              "status": "NS",
              "homeTeamId": 168,
              "homeTeam": "Bayer Leverkusen",
              "awayTeamId": 182,
              "awayTeam": "Union Berlin",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1575157,
              "kickoff": "2026-09-05T22:30:00+09:00",
              "status": "NS",
              "homeTeamId": 185,
              "homeTeam": "SC Paderborn 07",
              "awayTeamId": 160,
              "awayTeam": "SC Freiburg",
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
              "teamId": 91,
              "team": "Monaco",
              "rank": 1,
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
              "teamId": 114,
              "team": "Paris FC",
              "rank": 2,
              "points": 4,
              "goalsDiff": 3,
              "form": "WD",
              "all": {
                "played": 2,
                "wins": 1,
                "draws": 1,
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
                "played": 1,
                "wins": 0,
                "draws": 1,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 79,
              "team": "Lille",
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
              "teamId": 80,
              "team": "Lyon",
              "rank": 4,
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
                "goalsFor": 1,
                "goalsAgainst": 1
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
              "teamId": 94,
              "team": "Rennes",
              "rank": 5,
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
                "played": 2,
                "wins": 1,
                "draws": 1,
                "losses": 0,
                "goalsFor": 5,
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
              "teamId": 110,
              "team": "Estac Troyes",
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
              "teamId": 116,
              "team": "Lens",
              "rank": 7,
              "points": 3,
              "goalsDiff": 2,
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
              "teamId": 81,
              "team": "Marseille",
              "rank": 8,
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
                "goalsFor": 0,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 77,
              "team": "Angers",
              "rank": 9,
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
                "goalsFor": 0,
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
              "teamId": 95,
              "team": "Strasbourg",
              "rank": 10,
              "points": 3,
              "goalsDiff": -3,
              "form": "WL",
              "all": {
                "played": 2,
                "wins": 1,
                "draws": 0,
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
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 0,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 106,
              "team": "Stade Brestois 29",
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
              "teamId": 85,
              "team": "Paris Saint Germain",
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
              "teamId": 1298,
              "team": "Le Mans",
              "rank": 13,
              "points": 1,
              "goalsDiff": -1,
              "form": "LD",
              "all": {
                "played": 2,
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 4,
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
                "goalsFor": 2,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 97,
              "team": "Lorient",
              "rank": 14,
              "points": 1,
              "goalsDiff": -1,
              "form": "LD",
              "all": {
                "played": 2,
                "wins": 0,
                "draws": 1,
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
                "played": 1,
                "wins": 0,
                "draws": 1,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 111,
              "team": "Le Havre",
              "rank": 15,
              "points": 1,
              "goalsDiff": -1,
              "form": "DL",
              "all": {
                "played": 2,
                "wins": 0,
                "draws": 1,
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
              "teamId": 96,
              "team": "Toulouse",
              "rank": 16,
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
              "teamId": 84,
              "team": "Nice",
              "rank": 17,
              "points": 1,
              "goalsDiff": -3,
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
              "teamId": 108,
              "team": "Auxerre",
              "rank": 18,
              "points": 0,
              "goalsDiff": -5,
              "form": "LL",
              "all": {
                "played": 2,
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 3,
                "goalsAgainst": 8
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
                "goalsFor": 2,
                "goalsAgainst": 5
              }
            }
          ],
          "teams": [
            {
              "teamId": 80,
              "team": "Lyon",
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
                "goalsFor": 1,
                "goalsAgainst": 1
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
              "teamId": 108,
              "team": "Auxerre",
              "form": "LL",
              "all": {
                "played": 2,
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 3,
                "goalsAgainst": 8
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
                "goalsFor": 2,
                "goalsAgainst": 5
              }
            },
            {
              "teamId": 85,
              "team": "Paris Saint Germain",
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
              "teamId": 91,
              "team": "Monaco",
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
            }
          ],
          "fixtures": [
            {
              "fixtureId": 1552750,
              "kickoff": "2026-09-05T02:00:00+09:00",
              "status": "NS",
              "homeTeamId": 80,
              "homeTeam": "Lyon",
              "awayTeamId": 108,
              "awayTeam": "Auxerre",
              "injuriesChecked": true,
              "injuries": [
                {
                  "fixtureId": 1552750,
                  "teamId": 80,
                  "playerId": 368230,
                  "player": "J. Duranville",
                  "type": "Missing Fixture",
                  "reason": "Muscle Injury"
                },
                {
                  "fixtureId": 1552750,
                  "teamId": 108,
                  "playerId": 30748,
                  "player": "A. Diousse",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1552750,
                  "teamId": 108,
                  "playerId": 193505,
                  "player": "S. Fofana",
                  "type": "Missing Fixture",
                  "reason": "Groin Injury"
                },
                {
                  "fixtureId": 1552750,
                  "teamId": 108,
                  "playerId": 115588,
                  "player": "B. Okoh",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1552750,
                  "teamId": 108,
                  "playerId": 191240,
                  "player": "M. Senaya",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1552750,
                  "teamId": 108,
                  "playerId": 31016,
                  "player": "F. Sierralta",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                }
              ],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1552753,
              "kickoff": "2026-09-05T04:05:00+09:00",
              "status": "NS",
              "homeTeamId": 85,
              "homeTeam": "Paris Saint Germain",
              "awayTeamId": 91,
              "awayTeam": "Monaco",
              "injuriesChecked": true,
              "injuries": [
                {
                  "fixtureId": 1552753,
                  "teamId": 85,
                  "playerId": 263482,
                  "player": "N. Mendes",
                  "type": "Missing Fixture",
                  "reason": "Red Card"
                },
                {
                  "fixtureId": 1552753,
                  "teamId": 91,
                  "playerId": 138835,
                  "player": "F. Balogun",
                  "type": "Missing Fixture",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1552753,
                  "teamId": 91,
                  "playerId": 135775,
                  "player": "A. Fati",
                  "type": "Missing Fixture",
                  "reason": "Calf Injury"
                },
                {
                  "fixtureId": 1552753,
                  "teamId": 91,
                  "playerId": 1101,
                  "player": "T. Minamino",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                },
                {
                  "fixtureId": 1552753,
                  "teamId": 91,
                  "playerId": 47480,
                  "player": "M. Salisu",
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
              "teamId": 201,
              "team": "AZ Alkmaar",
              "rank": 1,
              "points": 12,
              "goalsDiff": 10,
              "form": "WWWW",
              "all": {
                "played": 4,
                "wins": 4,
                "draws": 0,
                "losses": 0,
                "goalsFor": 13,
                "goalsAgainst": 3
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
                "goalsFor": 6,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 197,
              "team": "PSV Eindhoven",
              "rank": 2,
              "points": 10,
              "goalsDiff": 10,
              "form": "WWWD",
              "all": {
                "played": 4,
                "wins": 3,
                "draws": 1,
                "losses": 0,
                "goalsFor": 15,
                "goalsAgainst": 5
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
                "played": 2,
                "wins": 2,
                "draws": 0,
                "losses": 0,
                "goalsFor": 8,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 209,
              "team": "Feyenoord",
              "rank": 3,
              "points": 8,
              "goalsDiff": 4,
              "form": "DWDW",
              "all": {
                "played": 4,
                "wins": 2,
                "draws": 2,
                "losses": 0,
                "goalsFor": 10,
                "goalsAgainst": 6
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
                "wins": 2,
                "draws": 0,
                "losses": 0,
                "goalsFor": 6,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 194,
              "team": "Ajax",
              "rank": 4,
              "points": 7,
              "goalsDiff": 6,
              "form": "WDW",
              "all": {
                "played": 3,
                "wins": 2,
                "draws": 1,
                "losses": 0,
                "goalsFor": 8,
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
                "goalsFor": 6,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 410,
              "team": "GO Ahead Eagles",
              "rank": 5,
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
              "teamId": 205,
              "team": "Fortuna Sittard",
              "rank": 6,
              "points": 7,
              "goalsDiff": 1,
              "form": "WLWD",
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
                "goalsFor": 3,
                "goalsAgainst": 3
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
              "teamId": 413,
              "team": "NEC Nijmegen",
              "rank": 7,
              "points": 6,
              "goalsDiff": 4,
              "form": "WWL",
              "all": {
                "played": 3,
                "wins": 2,
                "draws": 0,
                "losses": 1,
                "goalsFor": 8,
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
                "wins": 2,
                "draws": 0,
                "losses": 0,
                "goalsFor": 7,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 415,
              "team": "Twente",
              "rank": 8,
              "points": 6,
              "goalsDiff": 4,
              "form": "WWL",
              "all": {
                "played": 3,
                "wins": 2,
                "draws": 0,
                "losses": 1,
                "goalsFor": 7,
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
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 4,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 196,
              "team": "Excelsior",
              "rank": 9,
              "points": 6,
              "goalsDiff": 4,
              "form": "WLW",
              "all": {
                "played": 3,
                "wins": 2,
                "draws": 0,
                "losses": 1,
                "goalsFor": 7,
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
                "goalsFor": 4,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 202,
              "team": "Groningen",
              "rank": 10,
              "points": 6,
              "goalsDiff": -1,
              "form": "LLWW",
              "all": {
                "played": 4,
                "wins": 2,
                "draws": 0,
                "losses": 2,
                "goalsFor": 9,
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
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 5,
                "goalsAgainst": 6
              }
            },
            {
              "teamId": 210,
              "team": "Heerenveen",
              "rank": 11,
              "points": 5,
              "goalsDiff": -1,
              "form": "DLDW",
              "all": {
                "played": 4,
                "wins": 1,
                "draws": 2,
                "losses": 1,
                "goalsFor": 5,
                "goalsAgainst": 6
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
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 4
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
              "teamId": 427,
              "team": "Telstar",
              "rank": 13,
              "points": 3,
              "goalsDiff": -5,
              "form": "LLW",
              "all": {
                "played": 3,
                "wins": 1,
                "draws": 0,
                "losses": 2,
                "goalsFor": 3,
                "goalsAgainst": 8
              },
              "home": {
                "played": 2,
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 1,
                "goalsAgainst": 7
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
              "goalsDiff": -4,
              "form": "LWLL",
              "all": {
                "played": 4,
                "wins": 1,
                "draws": 0,
                "losses": 3,
                "goalsFor": 4,
                "goalsAgainst": 8
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
                "goalsFor": 3,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 195,
              "team": "Willem II",
              "rank": 15,
              "points": 1,
              "goalsDiff": -6,
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
                "goalsFor": 3,
                "goalsAgainst": 6
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
              "rank": 16,
              "points": 1,
              "goalsDiff": -7,
              "form": "DLLL",
              "all": {
                "played": 4,
                "wins": 0,
                "draws": 1,
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
                "goalsAgainst": 4
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
              "teamId": 207,
              "team": "Utrecht",
              "rank": 17,
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
              "teamId": 420,
              "team": "Cambuur",
              "rank": 18,
              "points": 0,
              "goalsDiff": -12,
              "form": "LLLL",
              "all": {
                "played": 4,
                "wins": 0,
                "draws": 0,
                "losses": 4,
                "goalsFor": 4,
                "goalsAgainst": 16
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
              "teamId": 426,
              "team": "Sparta Rotterdam",
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
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 4
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
              "teamId": 193,
              "team": "PEC Zwolle",
              "form": "LLWL",
              "all": {
                "played": 4,
                "wins": 1,
                "draws": 0,
                "losses": 3,
                "goalsFor": 4,
                "goalsAgainst": 8
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
                "goalsFor": 3,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 413,
              "team": "NEC Nijmegen",
              "form": "LWW",
              "all": {
                "played": 3,
                "wins": 2,
                "draws": 0,
                "losses": 1,
                "goalsFor": 8,
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
                "wins": 2,
                "draws": 0,
                "losses": 0,
                "goalsFor": 7,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 209,
              "team": "Feyenoord",
              "form": "WDWD",
              "all": {
                "played": 4,
                "wins": 2,
                "draws": 2,
                "losses": 0,
                "goalsFor": 10,
                "goalsAgainst": 6
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
                "wins": 2,
                "draws": 0,
                "losses": 0,
                "goalsFor": 6,
                "goalsAgainst": 2
              }
            }
          ],
          "fixtures": [
            {
              "fixtureId": 1552153,
              "kickoff": "2026-09-05T03:00:00+09:00",
              "status": "NS",
              "homeTeamId": 426,
              "homeTeam": "Sparta Rotterdam",
              "awayTeamId": 193,
              "awayTeam": "PEC Zwolle",
              "injuriesChecked": true,
              "injuries": [
                {
                  "fixtureId": 1552153,
                  "teamId": 426,
                  "playerId": 525881,
                  "player": "R. van Cruijsen",
                  "type": "Questionable",
                  "reason": "Injury"
                },
                {
                  "fixtureId": 1552153,
                  "teamId": 193,
                  "playerId": 584358,
                  "player": "J. Burger",
                  "type": "Missing Fixture",
                  "reason": "Knock"
                },
                {
                  "fixtureId": 1552153,
                  "teamId": 193,
                  "playerId": 36932,
                  "player": "Y. Namli",
                  "type": "Missing Fixture",
                  "reason": "Knee Injury"
                }
              ],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1552154,
              "kickoff": "2026-09-05T23:30:00+09:00",
              "status": "NS",
              "homeTeamId": 413,
              "homeTeam": "NEC Nijmegen",
              "awayTeamId": 209,
              "awayTeam": "Feyenoord",
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
              "points": 12,
              "goalsDiff": 9,
              "form": "WWWW",
              "all": {
                "played": 4,
                "wins": 4,
                "draws": 0,
                "losses": 0,
                "goalsFor": 9,
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
              "points": 10,
              "goalsDiff": 7,
              "form": "WWWD",
              "all": {
                "played": 4,
                "wins": 3,
                "draws": 1,
                "losses": 0,
                "goalsFor": 12,
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
                "played": 2,
                "wins": 1,
                "draws": 1,
                "losses": 0,
                "goalsFor": 6,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 240,
              "team": "Arouca",
              "rank": 3,
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
              "teamId": 227,
              "team": "Santa Clara",
              "rank": 4,
              "points": 8,
              "goalsDiff": 2,
              "form": "DWWD",
              "all": {
                "played": 4,
                "wins": 2,
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
                "goalsFor": 3,
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
              "rank": 5,
              "points": 7,
              "goalsDiff": 8,
              "form": "WWD",
              "all": {
                "played": 3,
                "wins": 2,
                "draws": 1,
                "losses": 0,
                "goalsFor": 11,
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
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 7,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 762,
              "team": "GIL Vicente",
              "rank": 6,
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
                "wins": 2,
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
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 214,
              "team": "Maritimo",
              "rank": 7,
              "points": 7,
              "goalsDiff": 1,
              "form": "LDWW",
              "all": {
                "played": 4,
                "wins": 2,
                "draws": 1,
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
              "rank": 8,
              "points": 5,
              "goalsDiff": 1,
              "form": "WDD",
              "all": {
                "played": 3,
                "wins": 1,
                "draws": 2,
                "losses": 0,
                "goalsFor": 7,
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
              "rank": 9,
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
                "goalsFor": 1,
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
              "teamId": 225,
              "team": "Nacional",
              "rank": 10,
              "points": 4,
              "goalsDiff": 0,
              "form": "LLWD",
              "all": {
                "played": 4,
                "wins": 1,
                "draws": 1,
                "losses": 2,
                "goalsFor": 6,
                "goalsAgainst": 6
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
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 2,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 215,
              "team": "Moreirense",
              "rank": 11,
              "points": 4,
              "goalsDiff": -3,
              "form": "WLD",
              "all": {
                "played": 3,
                "wins": 1,
                "draws": 1,
                "losses": 1,
                "goalsFor": 3,
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
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 1,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 224,
              "team": "Vitória SC",
              "rank": 12,
              "points": 3,
              "goalsDiff": -2,
              "form": "LWLL",
              "all": {
                "played": 4,
                "wins": 1,
                "draws": 0,
                "losses": 3,
                "goalsFor": 3,
                "goalsAgainst": 5
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
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 2,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 226,
              "team": "Rio Ave",
              "rank": 13,
              "points": 3,
              "goalsDiff": -5,
              "form": "LWLL",
              "all": {
                "played": 4,
                "wins": 1,
                "draws": 0,
                "losses": 3,
                "goalsFor": 2,
                "goalsAgainst": 7
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
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 2,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 242,
              "team": "Famalicao",
              "rank": 14,
              "points": 2,
              "goalsDiff": -2,
              "form": "DLLD",
              "all": {
                "played": 4,
                "wins": 0,
                "draws": 2,
                "losses": 2,
                "goalsFor": 2,
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
                "played": 2,
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 1,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 238,
              "team": "Academico Viseu",
              "rank": 15,
              "points": 2,
              "goalsDiff": -4,
              "form": "LDLD",
              "all": {
                "played": 4,
                "wins": 0,
                "draws": 2,
                "losses": 2,
                "goalsFor": 4,
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
                "played": 2,
                "wins": 0,
                "draws": 2,
                "losses": 0,
                "goalsFor": 4,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 4724,
              "team": "Alverca",
              "rank": 16,
              "points": 2,
              "goalsDiff": -4,
              "form": "DLDL",
              "all": {
                "played": 4,
                "wins": 0,
                "draws": 2,
                "losses": 2,
                "goalsFor": 4,
                "goalsAgainst": 8
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
              "points": 0,
              "goalsDiff": -11,
              "form": "LLLL",
              "all": {
                "played": 4,
                "wins": 0,
                "draws": 0,
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
              "teamId": 212,
              "team": "FC Porto",
              "form": "WWWW",
              "all": {
                "played": 4,
                "wins": 4,
                "draws": 0,
                "losses": 0,
                "goalsFor": 9,
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
                "played": 2,
                "wins": 2,
                "draws": 0,
                "losses": 0,
                "goalsFor": 5,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 215,
              "team": "Moreirense",
              "form": "DLW",
              "all": {
                "played": 3,
                "wins": 1,
                "draws": 1,
                "losses": 1,
                "goalsFor": 3,
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
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 1,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 15130,
              "team": "Estrela",
              "form": "DDW",
              "all": {
                "played": 3,
                "wins": 1,
                "draws": 2,
                "losses": 0,
                "goalsFor": 7,
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
                "wins": 1,
                "draws": 1,
                "losses": 0,
                "goalsFor": 5,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 242,
              "team": "Famalicao",
              "form": "DLLD",
              "all": {
                "played": 4,
                "wins": 0,
                "draws": 2,
                "losses": 2,
                "goalsFor": 2,
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
                "played": 2,
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 1,
                "goalsAgainst": 2
              }
            }
          ],
          "fixtures": [
            {
              "fixtureId": 1575485,
              "kickoff": "2026-09-05T04:15:00+09:00",
              "status": "NS",
              "homeTeamId": 212,
              "homeTeam": "FC Porto",
              "awayTeamId": 215,
              "awayTeam": "Moreirense",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1575484,
              "kickoff": "2026-09-05T23:30:00+09:00",
              "status": "NS",
              "homeTeamId": 15130,
              "homeTeam": "Estrela",
              "awayTeamId": 242,
              "awayTeam": "Famalicao",
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
                "goalsFor": 3,
                "goalsAgainst": 1
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
              "teamId": 251,
              "team": "ST Mirren",
              "rank": 2,
              "points": 7,
              "goalsDiff": 3,
              "form": "DWW",
              "all": {
                "played": 3,
                "wins": 2,
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
                "goalsFor": 4,
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
              "teamId": 254,
              "team": "Heart Of Midlothian",
              "rank": 3,
              "points": 6,
              "goalsDiff": 4,
              "form": "WWL",
              "all": {
                "played": 3,
                "wins": 2,
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
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 1,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 253,
              "team": "Dundee",
              "rank": 4,
              "points": 6,
              "goalsDiff": 2,
              "form": "LWWL",
              "all": {
                "played": 4,
                "wins": 2,
                "draws": 0,
                "losses": 2,
                "goalsFor": 5,
                "goalsAgainst": 3
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
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 2,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 249,
              "team": "Hibernian",
              "rank": 5,
              "points": 6,
              "goalsDiff": 1,
              "form": "WWL",
              "all": {
                "played": 3,
                "wins": 2,
                "draws": 0,
                "losses": 1,
                "goalsFor": 5,
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
                "wins": 2,
                "draws": 0,
                "losses": 0,
                "goalsFor": 4,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 256,
              "team": "Motherwell",
              "rank": 6,
              "points": 5,
              "goalsDiff": 1,
              "form": "DDW",
              "all": {
                "played": 3,
                "wins": 1,
                "draws": 2,
                "losses": 0,
                "goalsFor": 5,
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
                "draws": 1,
                "losses": 0,
                "goalsFor": 5,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 257,
              "team": "Rangers",
              "rank": 7,
              "points": 4,
              "goalsDiff": 0,
              "form": "WLD",
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
                "goalsFor": 2,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 1386,
              "team": "Dundee Utd",
              "rank": 8,
              "points": 4,
              "goalsDiff": -2,
              "form": "WLLD",
              "all": {
                "played": 4,
                "wins": 1,
                "draws": 1,
                "losses": 2,
                "goalsFor": 5,
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
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 4,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 258,
              "team": "ST Johnstone",
              "rank": 9,
              "points": 3,
              "goalsDiff": -1,
              "form": "LLW",
              "all": {
                "played": 3,
                "wins": 1,
                "draws": 0,
                "losses": 2,
                "goalsFor": 5,
                "goalsAgainst": 6
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
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 1,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 252,
              "team": "Aberdeen",
              "rank": 10,
              "points": 3,
              "goalsDiff": -2,
              "form": "LLW",
              "all": {
                "played": 3,
                "wins": 1,
                "draws": 0,
                "losses": 2,
                "goalsFor": 2,
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
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 0,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 1389,
              "team": "Falkirk",
              "rank": 11,
              "points": 1,
              "goalsDiff": -3,
              "form": "LDL",
              "all": {
                "played": 3,
                "wins": 0,
                "draws": 1,
                "losses": 2,
                "goalsFor": 1,
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
                "played": 2,
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 1,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 250,
              "team": "Kilmarnock",
              "rank": 12,
              "points": 0,
              "goalsDiff": -9,
              "form": "LLL",
              "all": {
                "played": 3,
                "wins": 0,
                "draws": 0,
                "losses": 3,
                "goalsFor": 4,
                "goalsAgainst": 13
              },
              "home": {
                "played": 2,
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 1,
                "goalsAgainst": 9
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
              "teamId": 252,
              "team": "Aberdeen",
              "form": "WLL",
              "all": {
                "played": 3,
                "wins": 1,
                "draws": 0,
                "losses": 2,
                "goalsFor": 2,
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
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 0,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 250,
              "team": "Kilmarnock",
              "form": "LLL",
              "all": {
                "played": 3,
                "wins": 0,
                "draws": 0,
                "losses": 3,
                "goalsFor": 4,
                "goalsAgainst": 13
              },
              "home": {
                "played": 2,
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 1,
                "goalsAgainst": 9
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
              "teamId": 257,
              "team": "Rangers",
              "form": "DLW",
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
                "goalsFor": 2,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 256,
              "team": "Motherwell",
              "form": "WDD",
              "all": {
                "played": 3,
                "wins": 1,
                "draws": 2,
                "losses": 0,
                "goalsFor": 5,
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
                "draws": 1,
                "losses": 0,
                "goalsFor": 5,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 1386,
              "team": "Dundee Utd",
              "form": "DLLW",
              "all": {
                "played": 4,
                "wins": 1,
                "draws": 1,
                "losses": 2,
                "goalsFor": 5,
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
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 4,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 1389,
              "team": "Falkirk",
              "form": "LDL",
              "all": {
                "played": 3,
                "wins": 0,
                "draws": 1,
                "losses": 2,
                "goalsFor": 1,
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
                "played": 2,
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 1,
                "goalsAgainst": 2
              }
            }
          ],
          "fixtures": [
            {
              "fixtureId": 1556658,
              "kickoff": "2026-09-05T23:00:00+09:00",
              "status": "NS",
              "homeTeamId": 252,
              "homeTeam": "Aberdeen",
              "awayTeamId": 250,
              "awayTeam": "Kilmarnock",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1556661,
              "kickoff": "2026-09-05T23:00:00+09:00",
              "status": "NS",
              "homeTeamId": 257,
              "homeTeam": "Rangers",
              "awayTeamId": 256,
              "awayTeam": "Motherwell",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1556659,
              "kickoff": "2026-09-05T23:00:00+09:00",
              "status": "NS",
              "homeTeamId": 1386,
              "homeTeam": "Dundee Utd",
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
              "teamId": 736,
              "team": "Charleroi",
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
              "teamId": 569,
              "team": "Club Brugge KV",
              "rank": 2,
              "points": 9,
              "goalsDiff": 6,
              "form": "LWWW",
              "all": {
                "played": 4,
                "wins": 3,
                "draws": 0,
                "losses": 1,
                "goalsFor": 8,
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
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 4,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 631,
              "team": "Gent",
              "rank": 3,
              "points": 9,
              "goalsDiff": 4,
              "form": "WWW",
              "all": {
                "played": 3,
                "wins": 3,
                "draws": 0,
                "losses": 0,
                "goalsFor": 6,
                "goalsAgainst": 2
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
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 2,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 600,
              "team": "Zulte Waregem",
              "rank": 4,
              "points": 8,
              "goalsDiff": 5,
              "form": "DWDW",
              "all": {
                "played": 4,
                "wins": 2,
                "draws": 2,
                "losses": 0,
                "goalsFor": 8,
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
                "wins": 0,
                "draws": 2,
                "losses": 0,
                "goalsFor": 2,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 733,
              "team": "Standard Liege",
              "rank": 5,
              "points": 8,
              "goalsDiff": 3,
              "form": "WWDD",
              "all": {
                "played": 4,
                "wins": 2,
                "draws": 2,
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
                "played": 2,
                "wins": 1,
                "draws": 1,
                "losses": 0,
                "goalsFor": 5,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 1393,
              "team": "Union St. Gilloise",
              "rank": 6,
              "points": 7,
              "goalsDiff": 7,
              "form": "WDW",
              "all": {
                "played": 3,
                "wins": 2,
                "draws": 1,
                "losses": 0,
                "goalsFor": 8,
                "goalsAgainst": 1
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
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 5,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 742,
              "team": "Genk",
              "rank": 7,
              "points": 7,
              "goalsDiff": 4,
              "form": "WDWL",
              "all": {
                "played": 4,
                "wins": 2,
                "draws": 1,
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
                "played": 2,
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 5,
                "goalsAgainst": 6
              }
            },
            {
              "teamId": 259,
              "team": "Lommel United",
              "rank": 8,
              "points": 7,
              "goalsDiff": 4,
              "form": "WWLD",
              "all": {
                "played": 4,
                "wins": 2,
                "draws": 1,
                "losses": 1,
                "goalsFor": 6,
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
              "rank": 9,
              "points": 7,
              "goalsDiff": 1,
              "form": "LDWW",
              "all": {
                "played": 4,
                "wins": 2,
                "draws": 1,
                "losses": 1,
                "goalsFor": 10,
                "goalsAgainst": 9
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
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 3,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 735,
              "team": "St. Truiden",
              "rank": 10,
              "points": 5,
              "goalsDiff": 3,
              "form": "WDD",
              "all": {
                "played": 3,
                "wins": 1,
                "draws": 2,
                "losses": 0,
                "goalsFor": 8,
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
                "wins": 1,
                "draws": 1,
                "losses": 0,
                "goalsFor": 7,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 554,
              "team": "Anderlecht",
              "rank": 11,
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
                "wins": 1,
                "draws": 0,
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
              "teamId": 738,
              "team": "SK Beveren",
              "rank": 12,
              "points": 3,
              "goalsDiff": -8,
              "form": "LLWL",
              "all": {
                "played": 4,
                "wins": 1,
                "draws": 0,
                "losses": 3,
                "goalsFor": 2,
                "goalsAgainst": 10
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
                "wins": 0,
                "draws": 0,
                "losses": 3,
                "goalsFor": 1,
                "goalsAgainst": 10
              }
            },
            {
              "teamId": 741,
              "team": "Cercle Brugge",
              "rank": 13,
              "points": 2,
              "goalsDiff": -2,
              "form": "LLDD",
              "all": {
                "played": 4,
                "wins": 0,
                "draws": 2,
                "losses": 2,
                "goalsFor": 5,
                "goalsAgainst": 7
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
              "points": 2,
              "goalsDiff": -4,
              "form": "DLDL",
              "all": {
                "played": 4,
                "wins": 0,
                "draws": 2,
                "losses": 2,
                "goalsFor": 5,
                "goalsAgainst": 9
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
              "rank": 15,
              "points": 1,
              "goalsDiff": -4,
              "form": "DLLL",
              "all": {
                "played": 4,
                "wins": 0,
                "draws": 1,
                "losses": 3,
                "goalsFor": 4,
                "goalsAgainst": 8
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
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 1,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 261,
              "team": "KVC Westerlo",
              "rank": 16,
              "points": 1,
              "goalsDiff": -9,
              "form": "DLLL",
              "all": {
                "played": 4,
                "wins": 0,
                "draws": 1,
                "losses": 3,
                "goalsFor": 5,
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
                "played": 2,
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 2,
                "goalsAgainst": 7
              }
            },
            {
              "teamId": 260,
              "team": "OH Leuven",
              "rank": 17,
              "points": 0,
              "goalsDiff": -6,
              "form": "LLL",
              "all": {
                "played": 3,
                "wins": 0,
                "draws": 0,
                "losses": 3,
                "goalsFor": 2,
                "goalsAgainst": 8
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
                "goalsFor": 1,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 734,
              "team": "Kortrijk",
              "rank": 18,
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
                "goalsAgainst": 6
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
              "teamId": 259,
              "team": "Lommel United",
              "form": "DLWW",
              "all": {
                "played": 4,
                "wins": 2,
                "draws": 1,
                "losses": 1,
                "goalsFor": 6,
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
                "played": 2,
                "wins": 1,
                "draws": 1,
                "losses": 0,
                "goalsFor": 2,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 569,
              "team": "Club Brugge KV",
              "form": "WWWL",
              "all": {
                "played": 4,
                "wins": 3,
                "draws": 0,
                "losses": 1,
                "goalsFor": 8,
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
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 4,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 736,
              "team": "Charleroi",
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
              "teamId": 1393,
              "team": "Union St. Gilloise",
              "form": "WDW",
              "all": {
                "played": 3,
                "wins": 2,
                "draws": 1,
                "losses": 0,
                "goalsFor": 8,
                "goalsAgainst": 1
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
                "played": 1,
                "wins": 1,
                "draws": 0,
                "losses": 0,
                "goalsFor": 5,
                "goalsAgainst": 1
              }
            }
          ],
          "fixtures": [
            {
              "fixtureId": 1558617,
              "kickoff": "2026-09-05T03:45:00+09:00",
              "status": "NS",
              "homeTeamId": 259,
              "homeTeam": "Lommel United",
              "awayTeamId": 569,
              "awayTeam": "Club Brugge KV",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1558618,
              "kickoff": "2026-09-05T23:00:00+09:00",
              "status": "NS",
              "homeTeamId": 736,
              "homeTeam": "Charleroi",
              "awayTeamId": 1393,
              "awayTeam": "Union St. Gilloise",
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
                "goalsFor": 5,
                "goalsAgainst": 4
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
              "teamId": 997,
              "team": "Gençlerbirliği S.K.",
              "rank": 2,
              "points": 7,
              "goalsDiff": 2,
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
            },
            {
              "teamId": 549,
              "team": "Beşiktaş",
              "rank": 3,
              "points": 6,
              "goalsDiff": 4,
              "form": "WLW",
              "all": {
                "played": 3,
                "wins": 2,
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
                "goalsFor": 7,
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
              "teamId": 611,
              "team": "Fenerbahçe",
              "rank": 4,
              "points": 6,
              "goalsDiff": 3,
              "form": "WWL",
              "all": {
                "played": 3,
                "wins": 2,
                "draws": 0,
                "losses": 1,
                "goalsFor": 7,
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
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 3579,
              "team": "Amed",
              "rank": 5,
              "points": 6,
              "goalsDiff": 2,
              "form": "WLW",
              "all": {
                "played": 3,
                "wins": 2,
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
                "goalsFor": 5,
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
              "teamId": 7411,
              "team": "Kocaelispor",
              "rank": 6,
              "points": 6,
              "goalsDiff": 1,
              "form": "WWL",
              "all": {
                "played": 3,
                "wins": 2,
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
                "goalsFor": 2,
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
              "teamId": 1007,
              "team": "Rizespor",
              "rank": 7,
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
              "teamId": 1004,
              "team": "Kasımpaşa",
              "rank": 8,
              "points": 5,
              "goalsDiff": 1,
              "form": "DWD",
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
              "teamId": 564,
              "team": "Başakşehir",
              "rank": 9,
              "points": 4,
              "goalsDiff": 1,
              "form": "DLW",
              "all": {
                "played": 3,
                "wins": 1,
                "draws": 1,
                "losses": 1,
                "goalsFor": 4,
                "goalsAgainst": 3
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
              "rank": 10,
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
                "goalsFor": 3,
                "goalsAgainst": 5
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
              "rank": 11,
              "points": 4,
              "goalsDiff": 0,
              "form": "LWD",
              "all": {
                "played": 3,
                "wins": 1,
                "draws": 1,
                "losses": 1,
                "goalsFor": 4,
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
                "played": 2,
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 2,
                "goalsAgainst": 3
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
              "teamId": 3573,
              "team": "Gaziantep FK",
              "rank": 13,
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
              "teamId": 3588,
              "team": "Eyüpspor",
              "rank": 14,
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
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
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
              "teamId": 994,
              "team": "Göztepe",
              "rank": 15,
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
              "teamId": 6343,
              "team": "Çorum FK",
              "rank": 16,
              "points": 1,
              "goalsDiff": -5,
              "form": "LLD",
              "all": {
                "played": 3,
                "wins": 0,
                "draws": 1,
                "losses": 2,
                "goalsFor": 4,
                "goalsAgainst": 9
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
                "goalsFor": 4,
                "goalsAgainst": 8
              }
            },
            {
              "teamId": 1009,
              "team": "Erzurumspor FK",
              "rank": 17,
              "points": 1,
              "goalsDiff": -7,
              "form": "DLL",
              "all": {
                "played": 3,
                "wins": 0,
                "draws": 1,
                "losses": 2,
                "goalsFor": 1,
                "goalsAgainst": 8
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
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 1,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 607,
              "team": "Konyaspor",
              "rank": 18,
              "points": 0,
              "goalsDiff": -4,
              "form": "LLL",
              "all": {
                "played": 3,
                "wins": 0,
                "draws": 0,
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
                "goalsAgainst": 3
              },
              "away": {
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 2,
                "goalsAgainst": 4
              }
            }
          ],
          "teams": [
            {
              "teamId": 564,
              "team": "Başakşehir",
              "form": "WLD",
              "all": {
                "played": 3,
                "wins": 1,
                "draws": 1,
                "losses": 1,
                "goalsFor": 4,
                "goalsAgainst": 3
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
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 1,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 645,
              "team": "Galatasaray",
              "form": "DWW",
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
                "goalsFor": 5,
                "goalsAgainst": 4
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
              "teamId": 1009,
              "team": "Erzurumspor FK",
              "form": "LLD",
              "all": {
                "played": 3,
                "wins": 0,
                "draws": 1,
                "losses": 2,
                "goalsFor": 1,
                "goalsAgainst": 8
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
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 1,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 607,
              "team": "Konyaspor",
              "form": "LLL",
              "all": {
                "played": 3,
                "wins": 0,
                "draws": 0,
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
                "goalsAgainst": 3
              },
              "away": {
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 2,
                "goalsAgainst": 4
              }
            }
          ],
          "fixtures": [
            {
              "fixtureId": 1584394,
              "kickoff": "2026-09-05T02:00:00+09:00",
              "status": "NS",
              "homeTeamId": 564,
              "homeTeam": "Başakşehir",
              "awayTeamId": 645,
              "awayTeam": "Galatasaray",
              "injuriesChecked": true,
              "injuries": [
                {
                  "fixtureId": 1584394,
                  "teamId": 645,
                  "playerId": 61950,
                  "player": "G. Guvenc",
                  "type": "Missing Fixture",
                  "reason": "Muscle Injury"
                },
                {
                  "fixtureId": 1584394,
                  "teamId": 645,
                  "playerId": 22236,
                  "player": "R. Leao",
                  "type": "Missing Fixture",
                  "reason": "Muscle Injury"
                }
              ],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1584396,
              "kickoff": "2026-09-05T23:00:00+09:00",
              "status": "NS",
              "homeTeamId": 1009,
              "homeTeam": "Erzurumspor FK",
              "awayTeamId": 607,
              "awayTeam": "Konyaspor",
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
              "points": 56,
              "goalsDiff": 31,
              "form": "WWWWD",
              "all": {
                "played": 26,
                "wins": 17,
                "draws": 5,
                "losses": 4,
                "goalsFor": 52,
                "goalsAgainst": 21
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
                "played": 14,
                "wins": 10,
                "draws": 3,
                "losses": 1,
                "goalsFor": 31,
                "goalsAgainst": 11
              }
            },
            {
              "teamId": 2767,
              "team": "Ulsan Hyundai FC",
              "rank": 2,
              "points": 40,
              "goalsDiff": 4,
              "form": "WLLLW",
              "all": {
                "played": 26,
                "wins": 12,
                "draws": 4,
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
                "played": 13,
                "wins": 6,
                "draws": 3,
                "losses": 4,
                "goalsFor": 18,
                "goalsAgainst": 15
              }
            },
            {
              "teamId": 2762,
              "team": "Jeonbuk Motors",
              "rank": 3,
              "points": 39,
              "goalsDiff": 9,
              "form": "DDWLL",
              "all": {
                "played": 26,
                "wins": 10,
                "draws": 9,
                "losses": 7,
                "goalsFor": 32,
                "goalsAgainst": 23
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
                "played": 14,
                "wins": 4,
                "draws": 7,
                "losses": 3,
                "goalsFor": 14,
                "goalsAgainst": 10
              }
            },
            {
              "teamId": 2761,
              "team": "Jeju United FC",
              "rank": 4,
              "points": 38,
              "goalsDiff": 4,
              "form": "WLDWW",
              "all": {
                "played": 26,
                "wins": 10,
                "draws": 8,
                "losses": 8,
                "goalsFor": 31,
                "goalsAgainst": 27
              },
              "home": {
                "played": 16,
                "wins": 5,
                "draws": 6,
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
              "teamId": 2746,
              "team": "Gangwon FC",
              "rank": 5,
              "points": 37,
              "goalsDiff": 6,
              "form": "DDLWL",
              "all": {
                "played": 25,
                "wins": 9,
                "draws": 10,
                "losses": 6,
                "goalsFor": 30,
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
                "played": 13,
                "wins": 5,
                "draws": 4,
                "losses": 4,
                "goalsFor": 14,
                "goalsAgainst": 13
              }
            },
            {
              "teamId": 2764,
              "team": "Pohang Steelers",
              "rank": 6,
              "points": 35,
              "goalsDiff": -5,
              "form": "DWLWL",
              "all": {
                "played": 26,
                "wins": 10,
                "draws": 5,
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
                "played": 15,
                "wins": 7,
                "draws": 3,
                "losses": 5,
                "goalsFor": 20,
                "goalsAgainst": 19
              }
            },
            {
              "teamId": 2748,
              "team": "FC Anyang",
              "rank": 7,
              "points": 34,
              "goalsDiff": -6,
              "form": "DWLLL",
              "all": {
                "played": 26,
                "wins": 8,
                "draws": 10,
                "losses": 8,
                "goalsFor": 33,
                "goalsAgainst": 39
              },
              "home": {
                "played": 13,
                "wins": 3,
                "draws": 5,
                "losses": 5,
                "goalsFor": 15,
                "goalsAgainst": 23
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
              "rank": 8,
              "points": 34,
              "goalsDiff": 4,
              "form": "DLWDD",
              "all": {
                "played": 25,
                "wins": 9,
                "draws": 7,
                "losses": 9,
                "goalsFor": 32,
                "goalsAgainst": 28
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
                "played": 12,
                "wins": 5,
                "draws": 4,
                "losses": 3,
                "goalsFor": 18,
                "goalsAgainst": 14
              }
            },
            {
              "teamId": 2750,
              "team": "Daejeon Citizen",
              "rank": 9,
              "points": 32,
              "goalsDiff": 3,
              "form": "LWWLW",
              "all": {
                "played": 26,
                "wins": 8,
                "draws": 8,
                "losses": 10,
                "goalsFor": 35,
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
                "played": 13,
                "wins": 5,
                "draws": 3,
                "losses": 5,
                "goalsFor": 21,
                "goalsAgainst": 17
              }
            },
            {
              "teamId": 2745,
              "team": "Bucheon FC 1995",
              "rank": 10,
              "points": 31,
              "goalsDiff": -1,
              "form": "DLWWD",
              "all": {
                "played": 26,
                "wins": 7,
                "draws": 10,
                "losses": 9,
                "goalsFor": 28,
                "goalsAgainst": 29
              },
              "home": {
                "played": 14,
                "wins": 3,
                "draws": 6,
                "losses": 5,
                "goalsFor": 16,
                "goalsAgainst": 17
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
              "points": 27,
              "goalsDiff": -8,
              "form": "LDDDD",
              "all": {
                "played": 26,
                "wins": 4,
                "draws": 15,
                "losses": 7,
                "goalsFor": 24,
                "goalsAgainst": 32
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
              "points": 12,
              "goalsDiff": -41,
              "form": "LDLLD",
              "all": {
                "played": 26,
                "wins": 1,
                "draws": 9,
                "losses": 16,
                "goalsFor": 16,
                "goalsAgainst": 57
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
                "played": 12,
                "wins": 0,
                "draws": 5,
                "losses": 7,
                "goalsFor": 5,
                "goalsAgainst": 28
              }
            }
          ],
          "teams": [
            {
              "teamId": 2745,
              "team": "Bucheon FC 1995",
              "form": "WDLDDLWDLLWLLDWDDLLDWDWWLD",
              "all": {
                "played": 26,
                "wins": 7,
                "draws": 10,
                "losses": 9,
                "goalsFor": 28,
                "goalsAgainst": 29
              },
              "home": {
                "played": 14,
                "wins": 3,
                "draws": 6,
                "losses": 5,
                "goalsFor": 16,
                "goalsAgainst": 17
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
              "form": "DDDWLLLWLWWDLLLDDDDLWWLWWL",
              "all": {
                "played": 26,
                "wins": 8,
                "draws": 8,
                "losses": 10,
                "goalsFor": 35,
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
                "played": 13,
                "wins": 5,
                "draws": 3,
                "losses": 5,
                "goalsFor": 21,
                "goalsAgainst": 17
              }
            },
            {
              "teamId": 2761,
              "team": "Jeju United FC",
              "form": "DLLLDWWDWLLWWLLDDWDWDWWDLW",
              "all": {
                "played": 26,
                "wins": 10,
                "draws": 8,
                "losses": 8,
                "goalsFor": 31,
                "goalsAgainst": 27
              },
              "home": {
                "played": 16,
                "wins": 5,
                "draws": 6,
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
              "teamId": 2767,
              "team": "Ulsan Hyundai FC",
              "form": "WWWDLWLWDLLWWWLDLDLWWWLLLW",
              "all": {
                "played": 26,
                "wins": 12,
                "draws": 4,
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
                "played": 13,
                "wins": 6,
                "draws": 3,
                "losses": 4,
                "goalsFor": 18,
                "goalsAgainst": 15
              }
            },
            {
              "teamId": 2762,
              "team": "Jeonbuk Motors",
              "form": "LDDWWWLDLWWWDDWLWLDWDLLWDD",
              "all": {
                "played": 26,
                "wins": 10,
                "draws": 9,
                "losses": 7,
                "goalsFor": 32,
                "goalsAgainst": 23
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
                "played": 14,
                "wins": 4,
                "draws": 7,
                "losses": 3,
                "goalsFor": 14,
                "goalsAgainst": 10
              }
            },
            {
              "teamId": 2764,
              "team": "Pohang Steelers",
              "form": "DDLDWWLLWLWDWWLWWLLLLLWLWD",
              "all": {
                "played": 26,
                "wins": 10,
                "draws": 5,
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
                "played": 15,
                "wins": 7,
                "draws": 3,
                "losses": 5,
                "goalsFor": 20,
                "goalsAgainst": 19
              }
            },
            {
              "teamId": 2766,
              "team": "FC Seoul",
              "form": "WWWWDWWLWWLDLWWWDWWLDDWWWW",
              "all": {
                "played": 26,
                "wins": 17,
                "draws": 5,
                "losses": 4,
                "goalsFor": 52,
                "goalsAgainst": 21
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
                "played": 14,
                "wins": 10,
                "draws": 3,
                "losses": 1,
                "goalsFor": 31,
                "goalsAgainst": 11
              }
            },
            {
              "teamId": 2763,
              "team": "Incheon United",
              "form": "LLDLWWLDWWLDWLWLLWWDDDWLD",
              "all": {
                "played": 25,
                "wins": 9,
                "draws": 7,
                "losses": 9,
                "goalsFor": 32,
                "goalsAgainst": 28
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
                "played": 12,
                "wins": 5,
                "draws": 4,
                "losses": 3,
                "goalsFor": 18,
                "goalsAgainst": 14
              }
            }
          ],
          "fixtures": [
            {
              "fixtureId": 1507052,
              "kickoff": "2026-09-05T19:00:00+09:00",
              "status": "NS",
              "homeTeamId": 2745,
              "homeTeam": "Bucheon FC 1995",
              "awayTeamId": 2750,
              "awayTeam": "Daejeon Citizen",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1507053,
              "kickoff": "2026-09-05T19:00:00+09:00",
              "status": "NS",
              "homeTeamId": 2761,
              "homeTeam": "Jeju United FC",
              "awayTeamId": 2767,
              "awayTeam": "Ulsan Hyundai FC",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1507054,
              "kickoff": "2026-09-05T19:00:00+09:00",
              "status": "NS",
              "homeTeamId": 2762,
              "homeTeam": "Jeonbuk Motors",
              "awayTeamId": 2764,
              "awayTeam": "Pohang Steelers",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1507055,
              "kickoff": "2026-09-05T19:00:00+09:00",
              "status": "NS",
              "homeTeamId": 2766,
              "homeTeam": "FC Seoul",
              "awayTeamId": 2763,
              "awayTeam": "Incheon United",
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
              "points": 47,
              "goalsDiff": 16,
              "form": "WWDWD",
              "all": {
                "played": 23,
                "wins": 14,
                "draws": 5,
                "losses": 4,
                "goalsFor": 36,
                "goalsAgainst": 20
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
                "played": 12,
                "wins": 8,
                "draws": 1,
                "losses": 3,
                "goalsFor": 22,
                "goalsAgainst": 12
              }
            },
            {
              "teamId": 2756,
              "team": "Suwon City FC",
              "rank": 2,
              "points": 43,
              "goalsDiff": 18,
              "form": "WWDWW",
              "all": {
                "played": 22,
                "wins": 12,
                "draws": 7,
                "losses": 3,
                "goalsFor": 45,
                "goalsAgainst": 27
              },
              "home": {
                "played": 10,
                "wins": 6,
                "draws": 4,
                "losses": 0,
                "goalsFor": 22,
                "goalsAgainst": 9
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
              "rank": 3,
              "points": 42,
              "goalsDiff": 12,
              "form": "WDWWL",
              "all": {
                "played": 23,
                "wins": 12,
                "draws": 6,
                "losses": 5,
                "goalsFor": 44,
                "goalsAgainst": 32
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
                "played": 11,
                "wins": 5,
                "draws": 4,
                "losses": 2,
                "goalsFor": 21,
                "goalsAgainst": 17
              }
            },
            {
              "teamId": 2749,
              "team": "Seoul E-Land FC",
              "rank": 4,
              "points": 42,
              "goalsDiff": 13,
              "form": "DDWDW",
              "all": {
                "played": 23,
                "wins": 12,
                "draws": 6,
                "losses": 5,
                "goalsFor": 41,
                "goalsAgainst": 28
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
                "played": 12,
                "wins": 6,
                "draws": 4,
                "losses": 2,
                "goalsFor": 18,
                "goalsAgainst": 12
              }
            },
            {
              "teamId": 7087,
              "team": "Hwaseong",
              "rank": 5,
              "points": 39,
              "goalsDiff": 12,
              "form": "WLDDW",
              "all": {
                "played": 23,
                "wins": 11,
                "draws": 6,
                "losses": 6,
                "goalsFor": 36,
                "goalsAgainst": 24
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
                "played": 7,
                "wins": 3,
                "draws": 1,
                "losses": 3,
                "goalsFor": 8,
                "goalsAgainst": 6
              }
            },
            {
              "teamId": 2752,
              "team": "Busan I Park",
              "rank": 6,
              "points": 38,
              "goalsDiff": 7,
              "form": "LDDLL",
              "all": {
                "played": 23,
                "wins": 11,
                "draws": 5,
                "losses": 7,
                "goalsFor": 39,
                "goalsAgainst": 32
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
                "played": 12,
                "wins": 5,
                "draws": 2,
                "losses": 5,
                "goalsFor": 20,
                "goalsAgainst": 20
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
              "goalsDiff": 1,
              "form": "LDWDD",
              "all": {
                "played": 22,
                "wins": 7,
                "draws": 10,
                "losses": 5,
                "goalsFor": 27,
                "goalsAgainst": 26
              },
              "home": {
                "played": 8,
                "wins": 1,
                "draws": 5,
                "losses": 2,
                "goalsFor": 10,
                "goalsAgainst": 12
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
              "points": 30,
              "goalsDiff": 0,
              "form": "WDDLD",
              "all": {
                "played": 23,
                "wins": 7,
                "draws": 9,
                "losses": 7,
                "goalsFor": 30,
                "goalsAgainst": 30
              },
              "home": {
                "played": 12,
                "wins": 6,
                "draws": 2,
                "losses": 4,
                "goalsFor": 20,
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
              "points": 27,
              "goalsDiff": -2,
              "form": "DWLWL",
              "all": {
                "played": 22,
                "wins": 6,
                "draws": 9,
                "losses": 7,
                "goalsFor": 24,
                "goalsAgainst": 26
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
                "played": 11,
                "wins": 3,
                "draws": 3,
                "losses": 5,
                "goalsFor": 13,
                "goalsAgainst": 16
              }
            },
            {
              "teamId": 9171,
              "team": "Yongin City",
              "rank": 11,
              "points": 25,
              "goalsDiff": -2,
              "form": "WLWDD",
              "all": {
                "played": 22,
                "wins": 5,
                "draws": 10,
                "losses": 7,
                "goalsFor": 29,
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
                "played": 11,
                "wins": 3,
                "draws": 5,
                "losses": 3,
                "goalsFor": 15,
                "goalsAgainst": 15
              }
            },
            {
              "teamId": 7098,
              "team": "Paju Citizen",
              "rank": 12,
              "points": 25,
              "goalsDiff": -6,
              "form": "LDWLW",
              "all": {
                "played": 23,
                "wins": 7,
                "draws": 4,
                "losses": 12,
                "goalsFor": 22,
                "goalsAgainst": 28
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
                "played": 12,
                "wins": 4,
                "draws": 3,
                "losses": 5,
                "goalsFor": 12,
                "goalsAgainst": 15
              }
            },
            {
              "teamId": 7061,
              "team": "Cheongju",
              "rank": 13,
              "points": 23,
              "goalsDiff": -10,
              "form": "LDWLD",
              "all": {
                "played": 23,
                "wins": 3,
                "draws": 14,
                "losses": 6,
                "goalsFor": 27,
                "goalsAgainst": 37
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
                "played": 11,
                "wins": 1,
                "draws": 8,
                "losses": 2,
                "goalsFor": 13,
                "goalsAgainst": 16
              }
            },
            {
              "teamId": 7060,
              "team": "Cheonan City",
              "rank": 14,
              "points": 21,
              "goalsDiff": -5,
              "form": "LLDLD",
              "all": {
                "played": 23,
                "wins": 4,
                "draws": 9,
                "losses": 10,
                "goalsFor": 27,
                "goalsAgainst": 32
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
                "played": 12,
                "wins": 2,
                "draws": 3,
                "losses": 7,
                "goalsFor": 18,
                "goalsAgainst": 22
              }
            },
            {
              "teamId": 2760,
              "team": "Jeonnam Dragons",
              "rank": 15,
              "points": 19,
              "goalsDiff": -12,
              "form": "WWLLD",
              "all": {
                "played": 22,
                "wins": 4,
                "draws": 7,
                "losses": 11,
                "goalsFor": 24,
                "goalsAgainst": 36
              },
              "home": {
                "played": 9,
                "wins": 3,
                "draws": 3,
                "losses": 3,
                "goalsFor": 10,
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
              "teamId": 2758,
              "team": "Ansan Greeners",
              "rank": 16,
              "points": 19,
              "goalsDiff": -20,
              "form": "LLLDD",
              "all": {
                "played": 23,
                "wins": 5,
                "draws": 4,
                "losses": 14,
                "goalsFor": 24,
                "goalsAgainst": 44
              },
              "home": {
                "played": 14,
                "wins": 2,
                "draws": 2,
                "losses": 10,
                "goalsFor": 15,
                "goalsAgainst": 28
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
              "teamId": 7076,
              "team": "Gimhae City",
              "rank": 17,
              "points": 12,
              "goalsDiff": -26,
              "form": "LLDLD",
              "all": {
                "played": 22,
                "wins": 2,
                "draws": 6,
                "losses": 14,
                "goalsFor": 17,
                "goalsAgainst": 43
              },
              "home": {
                "played": 10,
                "wins": 0,
                "draws": 2,
                "losses": 8,
                "goalsFor": 7,
                "goalsAgainst": 24
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
              "teamId": 2752,
              "team": "Busan I Park",
              "form": "DWWWWWWWLWWLWDDWLLLLDDL",
              "all": {
                "played": 23,
                "wins": 11,
                "draws": 5,
                "losses": 7,
                "goalsFor": 39,
                "goalsAgainst": 32
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
                "played": 12,
                "wins": 5,
                "draws": 2,
                "losses": 5,
                "goalsFor": 20,
                "goalsAgainst": 20
              }
            },
            {
              "teamId": 2758,
              "team": "Ansan Greeners",
              "form": "WLLDDLWLWLLLLLLWLWDDLLL",
              "all": {
                "played": 23,
                "wins": 5,
                "draws": 4,
                "losses": 14,
                "goalsFor": 24,
                "goalsAgainst": 44
              },
              "home": {
                "played": 14,
                "wins": 2,
                "draws": 2,
                "losses": 10,
                "goalsFor": 15,
                "goalsAgainst": 28
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
              "teamId": 7060,
              "team": "Cheonan City",
              "form": "DLDDWDWDWLDLWDLLLLDLDLL",
              "all": {
                "played": 23,
                "wins": 4,
                "draws": 9,
                "losses": 10,
                "goalsFor": 27,
                "goalsAgainst": 32
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
                "played": 12,
                "wins": 2,
                "draws": 3,
                "losses": 7,
                "goalsFor": 18,
                "goalsAgainst": 22
              }
            },
            {
              "teamId": 7087,
              "team": "Hwaseong",
              "form": "LWDDLLWDWWDWWWLLWWWDDLW",
              "all": {
                "played": 23,
                "wins": 11,
                "draws": 6,
                "losses": 6,
                "goalsFor": 36,
                "goalsAgainst": 24
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
                "played": 7,
                "wins": 3,
                "draws": 1,
                "losses": 3,
                "goalsFor": 8,
                "goalsAgainst": 6
              }
            },
            {
              "teamId": 7076,
              "team": "Gimhae City",
              "form": "LLLLLDDLLLLWLDLWDDLDLL",
              "all": {
                "played": 22,
                "wins": 2,
                "draws": 6,
                "losses": 14,
                "goalsFor": 17,
                "goalsAgainst": 43
              },
              "home": {
                "played": 10,
                "wins": 0,
                "draws": 2,
                "losses": 8,
                "goalsFor": 7,
                "goalsAgainst": 24
              },
              "away": {
                "played": 12,
                "wins": 2,
                "draws": 4,
                "losses": 6,
                "goalsFor": 10,
                "goalsAgainst": 19
              }
            },
            {
              "teamId": 2760,
              "team": "Jeonnam Dragons",
              "form": "WLLLLDLDLDDLLDDLWDLLWW",
              "all": {
                "played": 22,
                "wins": 4,
                "draws": 7,
                "losses": 11,
                "goalsFor": 24,
                "goalsAgainst": 36
              },
              "home": {
                "played": 9,
                "wins": 3,
                "draws": 3,
                "losses": 3,
                "goalsFor": 10,
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
              "teamId": 9171,
              "team": "Yongin City",
              "form": "DLLDLDLWLWDDDDWDLDDWLW",
              "all": {
                "played": 22,
                "wins": 5,
                "draws": 10,
                "losses": 7,
                "goalsFor": 29,
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
                "played": 11,
                "wins": 3,
                "draws": 5,
                "losses": 3,
                "goalsFor": 15,
                "goalsAgainst": 15
              }
            },
            {
              "teamId": 2756,
              "team": "Suwon City FC",
              "form": "WWWWLDLDWDWLDDWWDWWDWW",
              "all": {
                "played": 22,
                "wins": 12,
                "draws": 7,
                "losses": 3,
                "goalsFor": 45,
                "goalsAgainst": 27
              },
              "home": {
                "played": 10,
                "wins": 6,
                "draws": 4,
                "losses": 0,
                "goalsFor": 22,
                "goalsAgainst": 9
              },
              "away": {
                "played": 12,
                "wins": 6,
                "draws": 3,
                "losses": 3,
                "goalsFor": 23,
                "goalsAgainst": 18
              }
            }
          ],
          "fixtures": [
            {
              "fixtureId": 1510437,
              "kickoff": "2026-09-05T19:00:00+09:00",
              "status": "NS",
              "homeTeamId": 2752,
              "homeTeam": "Busan I Park",
              "awayTeamId": 2758,
              "awayTeam": "Ansan Greeners",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1510438,
              "kickoff": "2026-09-05T19:00:00+09:00",
              "status": "NS",
              "homeTeamId": 7060,
              "homeTeam": "Cheonan City",
              "awayTeamId": 7087,
              "awayTeam": "Hwaseong",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1510439,
              "kickoff": "2026-09-05T19:00:00+09:00",
              "status": "NS",
              "homeTeamId": 7076,
              "homeTeam": "Gimhae City",
              "awayTeamId": 2760,
              "awayTeam": "Jeonnam Dragons",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1510440,
              "kickoff": "2026-09-05T19:00:00+09:00",
              "status": "NS",
              "homeTeamId": 9171,
              "homeTeam": "Yongin City",
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
