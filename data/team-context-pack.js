(function attachTeamContextPack(root, factory) {
  const pack = factory();
  if (typeof module !== "undefined" && module.exports) module.exports = pack;
  if (root) root.ODDS_ARCHIVE_TEAM_CONTEXT_PACK = pack;
})(typeof window !== "undefined" ? window : globalThis, function createTeamContextPack() {
  return {
  "version": "team-context-v3",
  "date": "2026-09-26",
  "updatedAt": "2026-09-26T13:02:33.318Z",
  "collection": {
    "dates": [
      "2026-09-26",
      "2026-09-27",
      "2026-09-28",
      "2026-09-29"
    ],
    "requestGroups": 5,
    "skippedGroups": 99,
    "failures": 0,
    "errors": []
  },
  "leagues": [
    {
      "key": "J2LEAGUE",
      "leagueId": 99,
      "season": "2026",
      "standings": [
        {
          "teamId": 286,
          "team": "Vegalta Sendai",
          "rank": 1,
          "points": 17,
          "goalsDiff": 8,
          "form": "WWDWW",
          "all": {
            "played": 8,
            "wins": 5,
            "draws": 2,
            "losses": 1,
            "goalsFor": 15,
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
            "played": 5,
            "wins": 4,
            "draws": 0,
            "losses": 1,
            "goalsFor": 10,
            "goalsAgainst": 4
          }
        },
        {
          "teamId": 313,
          "team": "Omiya Ardija",
          "rank": 2,
          "points": 16,
          "goalsDiff": 9,
          "form": "WDDDD",
          "all": {
            "played": 8,
            "wins": 4,
            "draws": 4,
            "losses": 0,
            "goalsFor": 16,
            "goalsAgainst": 7
          },
          "home": {
            "played": 4,
            "wins": 2,
            "draws": 2,
            "losses": 0,
            "goalsFor": 8,
            "goalsAgainst": 3
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
          "teamId": 311,
          "team": "Albirex Niigata",
          "rank": 3,
          "points": 16,
          "goalsDiff": -1,
          "form": "DWWLW",
          "all": {
            "played": 8,
            "wins": 5,
            "draws": 1,
            "losses": 2,
            "goalsFor": 11,
            "goalsAgainst": 12
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
            "played": 4,
            "wins": 1,
            "draws": 1,
            "losses": 2,
            "goalsFor": 5,
            "goalsAgainst": 10
          }
        },
        {
          "teamId": 284,
          "team": "Shonan Bellmare",
          "rank": 4,
          "points": 15,
          "goalsDiff": 2,
          "form": "WDWLD",
          "all": {
            "played": 8,
            "wins": 4,
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
            "goalsFor": 3,
            "goalsAgainst": 4
          },
          "away": {
            "played": 5,
            "wins": 3,
            "draws": 2,
            "losses": 0,
            "goalsFor": 6,
            "goalsAgainst": 3
          }
        },
        {
          "teamId": 4322,
          "team": "Kataller Toyama",
          "rank": 5,
          "points": 14,
          "goalsDiff": 8,
          "form": "DWDWL",
          "all": {
            "played": 8,
            "wins": 4,
            "draws": 2,
            "losses": 2,
            "goalsFor": 16,
            "goalsAgainst": 8
          },
          "home": {
            "played": 4,
            "wins": 1,
            "draws": 2,
            "losses": 1,
            "goalsFor": 9,
            "goalsAgainst": 6
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
          "rank": 6,
          "points": 14,
          "goalsDiff": 5,
          "form": "DWLWD",
          "all": {
            "played": 8,
            "wins": 4,
            "draws": 2,
            "losses": 2,
            "goalsFor": 16,
            "goalsAgainst": 11
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
            "played": 4,
            "wins": 1,
            "draws": 1,
            "losses": 2,
            "goalsFor": 4,
            "goalsAgainst": 7
          }
        },
        {
          "teamId": 299,
          "team": "Tokushima Vortis",
          "rank": 7,
          "points": 13,
          "goalsDiff": 0,
          "form": "WWLWW",
          "all": {
            "played": 8,
            "wins": 4,
            "draws": 1,
            "losses": 3,
            "goalsFor": 8,
            "goalsAgainst": 8
          },
          "home": {
            "played": 4,
            "wins": 3,
            "draws": 1,
            "losses": 0,
            "goalsFor": 5,
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
          "rank": 8,
          "points": 12,
          "goalsDiff": 4,
          "form": "WLLLW",
          "all": {
            "played": 8,
            "wins": 4,
            "draws": 0,
            "losses": 4,
            "goalsFor": 10,
            "goalsAgainst": 6
          },
          "home": {
            "played": 5,
            "wins": 3,
            "draws": 0,
            "losses": 2,
            "goalsFor": 7,
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
          "teamId": 4317,
          "team": "Fujieda MYFC",
          "rank": 9,
          "points": 12,
          "goalsDiff": 3,
          "form": "DDLDW",
          "all": {
            "played": 8,
            "wins": 3,
            "draws": 3,
            "losses": 2,
            "goalsFor": 12,
            "goalsAgainst": 9
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
            "played": 4,
            "wins": 1,
            "draws": 1,
            "losses": 2,
            "goalsFor": 6,
            "goalsAgainst": 7
          }
        },
        {
          "teamId": 10409,
          "team": "Tegevajaro Miyazaki",
          "rank": 10,
          "points": 11,
          "goalsDiff": 0,
          "form": "WWWLL",
          "all": {
            "played": 8,
            "wins": 3,
            "draws": 2,
            "losses": 3,
            "goalsFor": 12,
            "goalsAgainst": 12
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
            "wins": 1,
            "draws": 1,
            "losses": 2,
            "goalsFor": 6,
            "goalsAgainst": 7
          }
        },
        {
          "teamId": 7145,
          "team": "Tochigi City",
          "rank": 11,
          "points": 10,
          "goalsDiff": 1,
          "form": "LLDWL",
          "all": {
            "played": 8,
            "wins": 3,
            "draws": 1,
            "losses": 4,
            "goalsFor": 14,
            "goalsAgainst": 13
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
            "played": 5,
            "wins": 2,
            "draws": 1,
            "losses": 2,
            "goalsFor": 7,
            "goalsAgainst": 7
          }
        },
        {
          "teamId": 4315,
          "team": "Blaublitz Akita",
          "rank": 12,
          "points": 10,
          "goalsDiff": 1,
          "form": "DDWDL",
          "all": {
            "played": 8,
            "wins": 2,
            "draws": 4,
            "losses": 2,
            "goalsFor": 11,
            "goalsAgainst": 10
          },
          "home": {
            "played": 5,
            "wins": 2,
            "draws": 2,
            "losses": 1,
            "goalsFor": 9,
            "goalsAgainst": 7
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
          "teamId": 280,
          "team": "Jubilo Iwata",
          "rank": 13,
          "points": 10,
          "goalsDiff": -1,
          "form": "LLWLW",
          "all": {
            "played": 8,
            "wins": 3,
            "draws": 1,
            "losses": 4,
            "goalsFor": 10,
            "goalsAgainst": 11
          },
          "home": {
            "played": 4,
            "wins": 1,
            "draws": 1,
            "losses": 2,
            "goalsFor": 4,
            "goalsAgainst": 5
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
          "teamId": 4326,
          "team": "Vanraure Hachinohe",
          "rank": 14,
          "points": 10,
          "goalsDiff": -7,
          "form": "WLLDW",
          "all": {
            "played": 8,
            "wins": 3,
            "draws": 1,
            "losses": 4,
            "goalsFor": 5,
            "goalsAgainst": 12
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
            "played": 3,
            "wins": 1,
            "draws": 1,
            "losses": 1,
            "goalsFor": 2,
            "goalsAgainst": 6
          }
        },
        {
          "teamId": 7127,
          "team": "Iwaki",
          "rank": 15,
          "points": 9,
          "goalsDiff": -4,
          "form": "LWWLL",
          "all": {
            "played": 8,
            "wins": 3,
            "draws": 0,
            "losses": 5,
            "goalsFor": 11,
            "goalsAgainst": 15
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
            "played": 4,
            "wins": 1,
            "draws": 0,
            "losses": 3,
            "goalsFor": 5,
            "goalsAgainst": 9
          }
        },
        {
          "teamId": 298,
          "team": "Oita Trinita",
          "rank": 16,
          "points": 8,
          "goalsDiff": 1,
          "form": "DDDDL",
          "all": {
            "played": 8,
            "wins": 1,
            "draws": 5,
            "losses": 2,
            "goalsFor": 7,
            "goalsAgainst": 6
          },
          "home": {
            "played": 4,
            "wins": 1,
            "draws": 2,
            "losses": 1,
            "goalsFor": 6,
            "goalsAgainst": 4
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
          "teamId": 295,
          "team": "Sagan Tosu",
          "rank": 17,
          "points": 8,
          "goalsDiff": -3,
          "form": "LLLWD",
          "all": {
            "played": 8,
            "wins": 2,
            "draws": 2,
            "losses": 4,
            "goalsFor": 8,
            "goalsAgainst": 11
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
            "played": 4,
            "wins": 0,
            "draws": 2,
            "losses": 2,
            "goalsFor": 2,
            "goalsAgainst": 5
          }
        },
        {
          "teamId": 308,
          "team": "Ventforet Kofu",
          "rank": 18,
          "points": 7,
          "goalsDiff": -9,
          "form": "LLLWW",
          "all": {
            "played": 8,
            "wins": 2,
            "draws": 1,
            "losses": 5,
            "goalsFor": 6,
            "goalsAgainst": 15
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
            "played": 4,
            "wins": 1,
            "draws": 0,
            "losses": 3,
            "goalsFor": 3,
            "goalsAgainst": 11
          }
        },
        {
          "teamId": 279,
          "team": "Consadole Sapporo",
          "rank": 19,
          "points": 5,
          "goalsDiff": -7,
          "form": "LDDLL",
          "all": {
            "played": 8,
            "wins": 1,
            "draws": 2,
            "losses": 5,
            "goalsFor": 10,
            "goalsAgainst": 17
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
            "played": 4,
            "wins": 0,
            "draws": 1,
            "losses": 3,
            "goalsFor": 5,
            "goalsAgainst": 8
          }
        },
        {
          "teamId": 10075,
          "team": "Imabari",
          "rank": 20,
          "points": 4,
          "goalsDiff": -10,
          "form": "LLWDL",
          "all": {
            "played": 8,
            "wins": 1,
            "draws": 1,
            "losses": 6,
            "goalsFor": 7,
            "goalsAgainst": 17
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
            "goalsFor": 3,
            "goalsAgainst": 9
          }
        }
      ],
      "teams": [
        {
          "teamId": 280,
          "team": "Jubilo Iwata",
          "form": "DLWWLWLL",
          "all": {
            "played": 8,
            "wins": 3,
            "draws": 1,
            "losses": 4,
            "goalsFor": 10,
            "goalsAgainst": 11
          },
          "home": {
            "played": 4,
            "wins": 1,
            "draws": 1,
            "losses": 2,
            "goalsFor": 4,
            "goalsAgainst": 5
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
          "teamId": 4326,
          "team": "Vanraure Hachinohe",
          "form": "WLLWDLLW",
          "all": {
            "played": 8,
            "wins": 3,
            "draws": 1,
            "losses": 4,
            "goalsFor": 5,
            "goalsAgainst": 12
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
            "played": 3,
            "wins": 1,
            "draws": 1,
            "losses": 1,
            "goalsFor": 2,
            "goalsAgainst": 6
          }
        },
        {
          "teamId": 298,
          "team": "Oita Trinita",
          "form": "LDWLDDDD",
          "all": {
            "played": 8,
            "wins": 1,
            "draws": 5,
            "losses": 2,
            "goalsFor": 7,
            "goalsAgainst": 6
          },
          "home": {
            "played": 4,
            "wins": 1,
            "draws": 2,
            "losses": 1,
            "goalsFor": 6,
            "goalsAgainst": 4
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
          "teamId": 4317,
          "team": "Fujieda MYFC",
          "form": "WWLWDLDD",
          "all": {
            "played": 8,
            "wins": 3,
            "draws": 3,
            "losses": 2,
            "goalsFor": 12,
            "goalsAgainst": 9
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
            "played": 4,
            "wins": 1,
            "draws": 1,
            "losses": 2,
            "goalsFor": 6,
            "goalsAgainst": 7
          }
        },
        {
          "teamId": 299,
          "team": "Tokushima Vortis",
          "form": "LDLWWLWW",
          "all": {
            "played": 8,
            "wins": 4,
            "draws": 1,
            "losses": 3,
            "goalsFor": 8,
            "goalsAgainst": 8
          },
          "home": {
            "played": 4,
            "wins": 3,
            "draws": 1,
            "losses": 0,
            "goalsFor": 5,
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
          "teamId": 7145,
          "team": "Tochigi City",
          "form": "LWWLWDLL",
          "all": {
            "played": 8,
            "wins": 3,
            "draws": 1,
            "losses": 4,
            "goalsFor": 14,
            "goalsAgainst": 13
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
            "played": 5,
            "wins": 2,
            "draws": 1,
            "losses": 2,
            "goalsFor": 7,
            "goalsAgainst": 7
          }
        },
        {
          "teamId": 312,
          "team": "Montedio Yamagata",
          "form": "WLWWLLLW",
          "all": {
            "played": 8,
            "wins": 4,
            "draws": 0,
            "losses": 4,
            "goalsFor": 10,
            "goalsAgainst": 6
          },
          "home": {
            "played": 5,
            "wins": 3,
            "draws": 0,
            "losses": 2,
            "goalsFor": 7,
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
          "teamId": 295,
          "team": "Sagan Tosu",
          "form": "WDLDWLLL",
          "all": {
            "played": 8,
            "wins": 2,
            "draws": 2,
            "losses": 4,
            "goalsFor": 8,
            "goalsAgainst": 11
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
            "played": 4,
            "wins": 0,
            "draws": 2,
            "losses": 2,
            "goalsFor": 2,
            "goalsAgainst": 5
          }
        },
        {
          "teamId": 313,
          "team": "Omiya Ardija",
          "form": "WWWDDDDW",
          "all": {
            "played": 8,
            "wins": 4,
            "draws": 4,
            "losses": 0,
            "goalsFor": 16,
            "goalsAgainst": 7
          },
          "home": {
            "played": 4,
            "wins": 2,
            "draws": 2,
            "losses": 0,
            "goalsFor": 8,
            "goalsAgainst": 3
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
          "teamId": 308,
          "team": "Ventforet Kofu",
          "form": "LDLWWLLL",
          "all": {
            "played": 8,
            "wins": 2,
            "draws": 1,
            "losses": 5,
            "goalsFor": 6,
            "goalsAgainst": 15
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
            "played": 4,
            "wins": 1,
            "draws": 0,
            "losses": 3,
            "goalsFor": 3,
            "goalsAgainst": 11
          }
        },
        {
          "teamId": 4315,
          "team": "Blaublitz Akita",
          "form": "DLWLDWDD",
          "all": {
            "played": 8,
            "wins": 2,
            "draws": 4,
            "losses": 2,
            "goalsFor": 11,
            "goalsAgainst": 10
          },
          "home": {
            "played": 5,
            "wins": 2,
            "draws": 2,
            "losses": 1,
            "goalsFor": 9,
            "goalsAgainst": 7
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
          "teamId": 311,
          "team": "Albirex Niigata",
          "form": "LWWWLWWD",
          "all": {
            "played": 8,
            "wins": 5,
            "draws": 1,
            "losses": 2,
            "goalsFor": 11,
            "goalsAgainst": 12
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
            "played": 4,
            "wins": 1,
            "draws": 1,
            "losses": 2,
            "goalsFor": 5,
            "goalsAgainst": 10
          }
        },
        {
          "teamId": 4322,
          "team": "Kataller Toyama",
          "form": "LWWLWDWD",
          "all": {
            "played": 8,
            "wins": 4,
            "draws": 2,
            "losses": 2,
            "goalsFor": 16,
            "goalsAgainst": 8
          },
          "home": {
            "played": 4,
            "wins": 1,
            "draws": 2,
            "losses": 1,
            "goalsFor": 9,
            "goalsAgainst": 6
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
          "form": "WWLDWLWD",
          "all": {
            "played": 8,
            "wins": 4,
            "draws": 2,
            "losses": 2,
            "goalsFor": 16,
            "goalsAgainst": 11
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
            "played": 4,
            "wins": 1,
            "draws": 1,
            "losses": 2,
            "goalsFor": 4,
            "goalsAgainst": 7
          }
        },
        {
          "teamId": 7127,
          "team": "Iwaki",
          "form": "WLLLLWWL",
          "all": {
            "played": 8,
            "wins": 3,
            "draws": 0,
            "losses": 5,
            "goalsFor": 11,
            "goalsAgainst": 15
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
            "played": 4,
            "wins": 1,
            "draws": 0,
            "losses": 3,
            "goalsFor": 5,
            "goalsAgainst": 9
          }
        },
        {
          "teamId": 286,
          "team": "Vegalta Sendai",
          "form": "LDWWWDWW",
          "all": {
            "played": 8,
            "wins": 5,
            "draws": 2,
            "losses": 1,
            "goalsFor": 15,
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
            "played": 5,
            "wins": 4,
            "draws": 0,
            "losses": 1,
            "goalsFor": 10,
            "goalsAgainst": 4
          }
        },
        {
          "teamId": 10075,
          "team": "Imabari",
          "form": "LLLLDWLL",
          "all": {
            "played": 8,
            "wins": 1,
            "draws": 1,
            "losses": 6,
            "goalsFor": 7,
            "goalsAgainst": 17
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
            "goalsFor": 3,
            "goalsAgainst": 9
          }
        },
        {
          "teamId": 284,
          "team": "Shonan Bellmare",
          "form": "WWDDLWDW",
          "all": {
            "played": 8,
            "wins": 4,
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
            "goalsFor": 3,
            "goalsAgainst": 4
          },
          "away": {
            "played": 5,
            "wins": 3,
            "draws": 2,
            "losses": 0,
            "goalsFor": 6,
            "goalsAgainst": 3
          }
        },
        {
          "teamId": 10409,
          "team": "Tegevajaro Miyazaki",
          "form": "LDDLLWWW",
          "all": {
            "played": 8,
            "wins": 3,
            "draws": 2,
            "losses": 3,
            "goalsFor": 12,
            "goalsAgainst": 12
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
            "wins": 1,
            "draws": 1,
            "losses": 2,
            "goalsFor": 6,
            "goalsAgainst": 7
          }
        },
        {
          "teamId": 279,
          "team": "Consadole Sapporo",
          "form": "WLLLLDDL",
          "all": {
            "played": 8,
            "wins": 1,
            "draws": 2,
            "losses": 5,
            "goalsFor": 10,
            "goalsAgainst": 17
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
            "played": 4,
            "wins": 0,
            "draws": 1,
            "losses": 3,
            "goalsFor": 5,
            "goalsAgainst": 8
          }
        }
      ],
      "fixtures": [
        {
          "fixtureId": 1606670,
          "kickoff": "2026-09-26T17:00:00+09:00",
          "status": "FT",
          "homeTeamId": 280,
          "homeTeam": "Jubilo Iwata",
          "awayTeamId": 4326,
          "awayTeam": "Vanraure Hachinohe",
          "injuriesChecked": true,
          "injuries": [],
          "lineupsChecked": true,
          "lineups": []
        },
        {
          "fixtureId": 1606666,
          "kickoff": "2026-09-26T17:00:00+09:00",
          "status": "FT",
          "homeTeamId": 298,
          "homeTeam": "Oita Trinita",
          "awayTeamId": 4317,
          "awayTeam": "Fujieda MYFC",
          "injuriesChecked": true,
          "injuries": [],
          "lineupsChecked": true,
          "lineups": []
        },
        {
          "fixtureId": 1606673,
          "kickoff": "2026-09-26T17:00:00+09:00",
          "status": "FT",
          "homeTeamId": 299,
          "homeTeam": "Tokushima Vortis",
          "awayTeamId": 7145,
          "awayTeam": "Tochigi City",
          "injuriesChecked": true,
          "injuries": [],
          "lineupsChecked": true,
          "lineups": []
        },
        {
          "fixtureId": 1606668,
          "kickoff": "2026-09-26T17:00:00+09:00",
          "status": "FT",
          "homeTeamId": 312,
          "homeTeam": "Montedio Yamagata",
          "awayTeamId": 295,
          "awayTeam": "Sagan Tosu",
          "injuriesChecked": true,
          "injuries": [],
          "lineupsChecked": true,
          "lineups": []
        },
        {
          "fixtureId": 1606671,
          "kickoff": "2026-09-26T17:00:00+09:00",
          "status": "FT",
          "homeTeamId": 313,
          "homeTeam": "Omiya Ardija",
          "awayTeamId": 308,
          "awayTeam": "Ventforet Kofu",
          "injuriesChecked": true,
          "injuries": [],
          "lineupsChecked": true,
          "lineups": []
        },
        {
          "fixtureId": 1606669,
          "kickoff": "2026-09-26T17:00:00+09:00",
          "status": "FT",
          "homeTeamId": 4315,
          "homeTeam": "Blaublitz Akita",
          "awayTeamId": 311,
          "awayTeam": "Albirex Niigata",
          "injuriesChecked": true,
          "injuries": [],
          "lineupsChecked": true,
          "lineups": []
        },
        {
          "fixtureId": 1606672,
          "kickoff": "2026-09-26T17:00:00+09:00",
          "status": "FT",
          "homeTeamId": 4322,
          "homeTeam": "Kataller Toyama",
          "awayTeamId": 307,
          "awayTeam": "Yokohama FC",
          "injuriesChecked": true,
          "injuries": [],
          "lineupsChecked": true,
          "lineups": []
        },
        {
          "fixtureId": 1606667,
          "kickoff": "2026-09-26T17:00:00+09:00",
          "status": "FT",
          "homeTeamId": 7127,
          "homeTeam": "Iwaki",
          "awayTeamId": 286,
          "awayTeam": "Vegalta Sendai",
          "injuriesChecked": true,
          "injuries": [],
          "lineupsChecked": true,
          "lineups": []
        },
        {
          "fixtureId": 1606675,
          "kickoff": "2026-09-26T17:00:00+09:00",
          "status": "FT",
          "homeTeamId": 10075,
          "homeTeam": "Imabari",
          "awayTeamId": 284,
          "awayTeam": "Shonan Bellmare",
          "injuriesChecked": true,
          "injuries": [],
          "lineupsChecked": true,
          "lineups": []
        },
        {
          "fixtureId": 1606674,
          "kickoff": "2026-09-26T17:00:00+09:00",
          "status": "FT",
          "homeTeamId": 10409,
          "homeTeam": "Tegevajaro Miyazaki",
          "awayTeamId": 279,
          "awayTeam": "Consadole Sapporo",
          "injuriesChecked": true,
          "injuries": [],
          "lineupsChecked": true,
          "lineups": []
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
          "teamId": 8194,
          "team": "France U21",
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
            "played": 2,
            "wins": 1,
            "draws": 1,
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
          "teamId": 22343,
          "team": "Ukraine U18",
          "form": "DWDDWLL",
          "all": {
            "played": 7,
            "wins": 2,
            "draws": 3,
            "losses": 2,
            "goalsFor": 6,
            "goalsAgainst": 6
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
            "played": 5,
            "wins": 2,
            "draws": 1,
            "losses": 2,
            "goalsFor": 5,
            "goalsAgainst": 5
          }
        },
        {
          "teamId": 10332,
          "team": "England U19",
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
          "teamId": 10377,
          "team": "Republic of Ireland U19",
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
          "teamId": 10365,
          "team": "Hungary U19",
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
          "teamId": 10328,
          "team": "Bulgaria U19",
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
            "played": 3,
            "wins": 3,
            "draws": 0,
            "losses": 0,
            "goalsFor": 6,
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
        }
      ],
      "fixtures": [
        {
          "fixtureId": 1640061,
          "kickoff": "2026-09-26T02:00:00+09:00",
          "status": "FT",
          "homeTeamId": 8194,
          "homeTeam": "France U21",
          "awayTeamId": 22343,
          "awayTeam": "Ukraine U18",
          "injuriesChecked": true,
          "injuries": [],
          "lineupsChecked": false,
          "lineups": []
        },
        {
          "fixtureId": 1637599,
          "kickoff": "2026-09-26T03:00:00+09:00",
          "status": "FT",
          "homeTeamId": 10332,
          "homeTeam": "England U19",
          "awayTeamId": 10377,
          "awayTeam": "Republic of Ireland U19",
          "injuriesChecked": true,
          "injuries": [],
          "lineupsChecked": false,
          "lineups": []
        },
        {
          "fixtureId": 1640504,
          "kickoff": "2026-09-26T23:00:00+09:00",
          "status": "NS",
          "homeTeamId": 10365,
          "homeTeam": "Hungary U19",
          "awayTeamId": 10328,
          "awayTeam": "Bulgaria U19",
          "injuriesChecked": true,
          "injuries": [],
          "lineupsChecked": true,
          "lineups": []
        }
      ]
    }
  ],
  "dates": [
    {
      "date": "2026-09-25",
      "updatedAt": "2026-09-25T13:41:57.984Z",
      "leagues": [
        {
          "key": "INTL_FRIENDLIES",
          "leagueId": 10,
          "season": "2026",
          "standings": [],
          "teams": [
            {
              "teamId": 17952,
              "team": "Finland U17",
              "form": "LLLDDWWW",
              "all": {
                "played": 8,
                "wins": 3,
                "draws": 2,
                "losses": 3,
                "goalsFor": 10,
                "goalsAgainst": 22
              },
              "home": {
                "played": 6,
                "wins": 3,
                "draws": 2,
                "losses": 1,
                "goalsFor": 10,
                "goalsAgainst": 10
              },
              "away": {
                "played": 2,
                "wins": 0,
                "draws": 0,
                "losses": 2,
                "goalsFor": 0,
                "goalsAgainst": 12
              }
            },
            {
              "teamId": 12507,
              "team": "France U17",
              "form": "LWLL",
              "all": {
                "played": 4,
                "wins": 1,
                "draws": 0,
                "losses": 3,
                "goalsFor": 3,
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
                "played": 4,
                "wins": 1,
                "draws": 0,
                "losses": 3,
                "goalsFor": 3,
                "goalsAgainst": 7
              }
            },
            {
              "teamId": 17970,
              "team": "Poland U17",
              "form": "WWDW",
              "all": {
                "played": 4,
                "wins": 3,
                "draws": 1,
                "losses": 0,
                "goalsFor": 11,
                "goalsAgainst": 4
              },
              "home": {
                "played": 3,
                "wins": 3,
                "draws": 0,
                "losses": 0,
                "goalsFor": 10,
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
              "teamId": 17947,
              "team": "Czechia U17",
              "form": "WL",
              "all": {
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 3,
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
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 5
              }
            },
            {
              "teamId": 10376,
              "team": "Poland U19",
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
              "teamId": 10350,
              "team": "Switzerland U19",
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
              "teamId": 20,
              "team": "Australia",
              "form": "LDD",
              "all": {
                "played": 3,
                "wins": 0,
                "draws": 2,
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
                "played": 2,
                "wins": 0,
                "draws": 1,
                "losses": 1,
                "goalsFor": 1,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 6,
              "team": "Brazil",
              "form": "LWWWD",
              "all": {
                "played": 5,
                "wins": 3,
                "draws": 1,
                "losses": 1,
                "goalsFor": 13,
                "goalsAgainst": 7
              },
              "home": {
                "played": 4,
                "wins": 3,
                "draws": 0,
                "losses": 1,
                "goalsFor": 12,
                "goalsAgainst": 6
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
              "teamId": 21460,
              "team": "Austria U18",
              "form": "LDD",
              "all": {
                "played": 3,
                "wins": 0,
                "draws": 2,
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
                "played": 3,
                "wins": 0,
                "draws": 2,
                "losses": 1,
                "goalsFor": 2,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 22431,
              "team": "Japan U18",
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
              "teamId": 1537,
              "team": "India",
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
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 0,
                "goalsAgainst": 1
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
              "teamId": 11,
              "team": "Panama",
              "form": "DLDWLWD",
              "all": {
                "played": 7,
                "wins": 2,
                "draws": 3,
                "losses": 2,
                "goalsFor": 11,
                "goalsAgainst": 13
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
                "played": 4,
                "wins": 1,
                "draws": 2,
                "losses": 1,
                "goalsFor": 6,
                "goalsAgainst": 9
              }
            },
            {
              "teamId": 22437,
              "team": "Serbia U18",
              "form": "DDW",
              "all": {
                "played": 3,
                "wins": 1,
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
                "goalsFor": 3,
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
              "teamId": 25280,
              "team": "Russia U18",
              "form": "",
              "all": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "home": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
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
              "fixtureId": 1640058,
              "kickoff": "2026-09-25T17:00:00+09:00",
              "status": "FT",
              "homeTeamId": 17952,
              "homeTeam": "Finland U17",
              "awayTeamId": 12507,
              "awayTeam": "France U17",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": true,
              "lineups": []
            },
            {
              "fixtureId": 1640059,
              "kickoff": "2026-09-25T18:00:00+09:00",
              "status": "FT",
              "homeTeamId": 17970,
              "homeTeam": "Poland U17",
              "awayTeamId": 17947,
              "awayTeam": "Czechia U17",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": true,
              "lineups": []
            },
            {
              "fixtureId": 1640060,
              "kickoff": "2026-09-25T18:30:00+09:00",
              "status": "FT",
              "homeTeamId": 10376,
              "homeTeam": "Poland U19",
              "awayTeamId": 10350,
              "awayTeam": "Switzerland U19",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": true,
              "lineups": []
            },
            {
              "fixtureId": 1583655,
              "kickoff": "2026-09-25T19:00:00+09:00",
              "status": "FT",
              "homeTeamId": 20,
              "homeTeam": "Australia",
              "awayTeamId": 6,
              "awayTeam": "Brazil",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": true,
              "lineups": []
            },
            {
              "fixtureId": 1640824,
              "kickoff": "2026-09-25T22:00:00+09:00",
              "status": "NS",
              "homeTeamId": 21460,
              "homeTeam": "Austria U18",
              "awayTeamId": 22431,
              "awayTeam": "Japan U18",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": true,
              "lineups": []
            },
            {
              "fixtureId": 1637600,
              "kickoff": "2026-09-25T23:00:00+09:00",
              "status": "NS",
              "homeTeamId": 1537,
              "homeTeam": "India",
              "awayTeamId": 11,
              "awayTeam": "Panama",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": true,
              "lineups": [
                {
                  "teamId": 1537,
                  "team": "India",
                  "formation": "",
                  "coach": "Ahmed Jamil Khalid",
                  "starters": []
                },
                {
                  "teamId": 11,
                  "team": "Panama",
                  "formation": "",
                  "coach": "Thomas Christiansen",
                  "starters": []
                }
              ]
            },
            {
              "fixtureId": 1640825,
              "kickoff": "2026-09-25T23:00:00+09:00",
              "status": "NS",
              "homeTeamId": 22437,
              "homeTeam": "Serbia U18",
              "awayTeamId": 25280,
              "awayTeam": "Russia U18",
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
      "date": "2026-09-26",
      "updatedAt": "2026-09-26T13:02:13.703Z",
      "leagues": [
        {
          "key": "J2LEAGUE",
          "leagueId": 99,
          "season": "2026",
          "standings": [
            {
              "teamId": 286,
              "team": "Vegalta Sendai",
              "rank": 1,
              "points": 17,
              "goalsDiff": 8,
              "form": "WWDWW",
              "all": {
                "played": 8,
                "wins": 5,
                "draws": 2,
                "losses": 1,
                "goalsFor": 15,
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
                "played": 5,
                "wins": 4,
                "draws": 0,
                "losses": 1,
                "goalsFor": 10,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 313,
              "team": "Omiya Ardija",
              "rank": 2,
              "points": 16,
              "goalsDiff": 9,
              "form": "WDDDD",
              "all": {
                "played": 8,
                "wins": 4,
                "draws": 4,
                "losses": 0,
                "goalsFor": 16,
                "goalsAgainst": 7
              },
              "home": {
                "played": 4,
                "wins": 2,
                "draws": 2,
                "losses": 0,
                "goalsFor": 8,
                "goalsAgainst": 3
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
              "teamId": 311,
              "team": "Albirex Niigata",
              "rank": 3,
              "points": 16,
              "goalsDiff": -1,
              "form": "DWWLW",
              "all": {
                "played": 8,
                "wins": 5,
                "draws": 1,
                "losses": 2,
                "goalsFor": 11,
                "goalsAgainst": 12
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
                "played": 4,
                "wins": 1,
                "draws": 1,
                "losses": 2,
                "goalsFor": 5,
                "goalsAgainst": 10
              }
            },
            {
              "teamId": 284,
              "team": "Shonan Bellmare",
              "rank": 4,
              "points": 15,
              "goalsDiff": 2,
              "form": "WDWLD",
              "all": {
                "played": 8,
                "wins": 4,
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
                "goalsFor": 3,
                "goalsAgainst": 4
              },
              "away": {
                "played": 5,
                "wins": 3,
                "draws": 2,
                "losses": 0,
                "goalsFor": 6,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 4322,
              "team": "Kataller Toyama",
              "rank": 5,
              "points": 14,
              "goalsDiff": 8,
              "form": "DWDWL",
              "all": {
                "played": 8,
                "wins": 4,
                "draws": 2,
                "losses": 2,
                "goalsFor": 16,
                "goalsAgainst": 8
              },
              "home": {
                "played": 4,
                "wins": 1,
                "draws": 2,
                "losses": 1,
                "goalsFor": 9,
                "goalsAgainst": 6
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
              "rank": 6,
              "points": 14,
              "goalsDiff": 5,
              "form": "DWLWD",
              "all": {
                "played": 8,
                "wins": 4,
                "draws": 2,
                "losses": 2,
                "goalsFor": 16,
                "goalsAgainst": 11
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
                "played": 4,
                "wins": 1,
                "draws": 1,
                "losses": 2,
                "goalsFor": 4,
                "goalsAgainst": 7
              }
            },
            {
              "teamId": 299,
              "team": "Tokushima Vortis",
              "rank": 7,
              "points": 13,
              "goalsDiff": 0,
              "form": "WWLWW",
              "all": {
                "played": 8,
                "wins": 4,
                "draws": 1,
                "losses": 3,
                "goalsFor": 8,
                "goalsAgainst": 8
              },
              "home": {
                "played": 4,
                "wins": 3,
                "draws": 1,
                "losses": 0,
                "goalsFor": 5,
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
              "rank": 8,
              "points": 12,
              "goalsDiff": 4,
              "form": "WLLLW",
              "all": {
                "played": 8,
                "wins": 4,
                "draws": 0,
                "losses": 4,
                "goalsFor": 10,
                "goalsAgainst": 6
              },
              "home": {
                "played": 5,
                "wins": 3,
                "draws": 0,
                "losses": 2,
                "goalsFor": 7,
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
              "teamId": 4317,
              "team": "Fujieda MYFC",
              "rank": 9,
              "points": 12,
              "goalsDiff": 3,
              "form": "DDLDW",
              "all": {
                "played": 8,
                "wins": 3,
                "draws": 3,
                "losses": 2,
                "goalsFor": 12,
                "goalsAgainst": 9
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
                "played": 4,
                "wins": 1,
                "draws": 1,
                "losses": 2,
                "goalsFor": 6,
                "goalsAgainst": 7
              }
            },
            {
              "teamId": 10409,
              "team": "Tegevajaro Miyazaki",
              "rank": 10,
              "points": 11,
              "goalsDiff": 0,
              "form": "WWWLL",
              "all": {
                "played": 8,
                "wins": 3,
                "draws": 2,
                "losses": 3,
                "goalsFor": 12,
                "goalsAgainst": 12
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
                "wins": 1,
                "draws": 1,
                "losses": 2,
                "goalsFor": 6,
                "goalsAgainst": 7
              }
            },
            {
              "teamId": 7145,
              "team": "Tochigi City",
              "rank": 11,
              "points": 10,
              "goalsDiff": 1,
              "form": "LLDWL",
              "all": {
                "played": 8,
                "wins": 3,
                "draws": 1,
                "losses": 4,
                "goalsFor": 14,
                "goalsAgainst": 13
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
                "played": 5,
                "wins": 2,
                "draws": 1,
                "losses": 2,
                "goalsFor": 7,
                "goalsAgainst": 7
              }
            },
            {
              "teamId": 4315,
              "team": "Blaublitz Akita",
              "rank": 12,
              "points": 10,
              "goalsDiff": 1,
              "form": "DDWDL",
              "all": {
                "played": 8,
                "wins": 2,
                "draws": 4,
                "losses": 2,
                "goalsFor": 11,
                "goalsAgainst": 10
              },
              "home": {
                "played": 5,
                "wins": 2,
                "draws": 2,
                "losses": 1,
                "goalsFor": 9,
                "goalsAgainst": 7
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
              "teamId": 280,
              "team": "Jubilo Iwata",
              "rank": 13,
              "points": 10,
              "goalsDiff": -1,
              "form": "LLWLW",
              "all": {
                "played": 8,
                "wins": 3,
                "draws": 1,
                "losses": 4,
                "goalsFor": 10,
                "goalsAgainst": 11
              },
              "home": {
                "played": 4,
                "wins": 1,
                "draws": 1,
                "losses": 2,
                "goalsFor": 4,
                "goalsAgainst": 5
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
              "teamId": 4326,
              "team": "Vanraure Hachinohe",
              "rank": 14,
              "points": 10,
              "goalsDiff": -7,
              "form": "WLLDW",
              "all": {
                "played": 8,
                "wins": 3,
                "draws": 1,
                "losses": 4,
                "goalsFor": 5,
                "goalsAgainst": 12
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
                "played": 3,
                "wins": 1,
                "draws": 1,
                "losses": 1,
                "goalsFor": 2,
                "goalsAgainst": 6
              }
            },
            {
              "teamId": 7127,
              "team": "Iwaki",
              "rank": 15,
              "points": 9,
              "goalsDiff": -4,
              "form": "LWWLL",
              "all": {
                "played": 8,
                "wins": 3,
                "draws": 0,
                "losses": 5,
                "goalsFor": 11,
                "goalsAgainst": 15
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
                "played": 4,
                "wins": 1,
                "draws": 0,
                "losses": 3,
                "goalsFor": 5,
                "goalsAgainst": 9
              }
            },
            {
              "teamId": 298,
              "team": "Oita Trinita",
              "rank": 16,
              "points": 8,
              "goalsDiff": 1,
              "form": "DDDDL",
              "all": {
                "played": 8,
                "wins": 1,
                "draws": 5,
                "losses": 2,
                "goalsFor": 7,
                "goalsAgainst": 6
              },
              "home": {
                "played": 4,
                "wins": 1,
                "draws": 2,
                "losses": 1,
                "goalsFor": 6,
                "goalsAgainst": 4
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
              "teamId": 295,
              "team": "Sagan Tosu",
              "rank": 17,
              "points": 8,
              "goalsDiff": -3,
              "form": "LLLWD",
              "all": {
                "played": 8,
                "wins": 2,
                "draws": 2,
                "losses": 4,
                "goalsFor": 8,
                "goalsAgainst": 11
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
                "played": 4,
                "wins": 0,
                "draws": 2,
                "losses": 2,
                "goalsFor": 2,
                "goalsAgainst": 5
              }
            },
            {
              "teamId": 308,
              "team": "Ventforet Kofu",
              "rank": 18,
              "points": 7,
              "goalsDiff": -9,
              "form": "LLLWW",
              "all": {
                "played": 8,
                "wins": 2,
                "draws": 1,
                "losses": 5,
                "goalsFor": 6,
                "goalsAgainst": 15
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
                "played": 4,
                "wins": 1,
                "draws": 0,
                "losses": 3,
                "goalsFor": 3,
                "goalsAgainst": 11
              }
            },
            {
              "teamId": 279,
              "team": "Consadole Sapporo",
              "rank": 19,
              "points": 5,
              "goalsDiff": -7,
              "form": "LDDLL",
              "all": {
                "played": 8,
                "wins": 1,
                "draws": 2,
                "losses": 5,
                "goalsFor": 10,
                "goalsAgainst": 17
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
                "played": 4,
                "wins": 0,
                "draws": 1,
                "losses": 3,
                "goalsFor": 5,
                "goalsAgainst": 8
              }
            },
            {
              "teamId": 10075,
              "team": "Imabari",
              "rank": 20,
              "points": 4,
              "goalsDiff": -10,
              "form": "LLWDL",
              "all": {
                "played": 8,
                "wins": 1,
                "draws": 1,
                "losses": 6,
                "goalsFor": 7,
                "goalsAgainst": 17
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
                "goalsFor": 3,
                "goalsAgainst": 9
              }
            }
          ],
          "teams": [
            {
              "teamId": 280,
              "team": "Jubilo Iwata",
              "form": "DLWWLWLL",
              "all": {
                "played": 8,
                "wins": 3,
                "draws": 1,
                "losses": 4,
                "goalsFor": 10,
                "goalsAgainst": 11
              },
              "home": {
                "played": 4,
                "wins": 1,
                "draws": 1,
                "losses": 2,
                "goalsFor": 4,
                "goalsAgainst": 5
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
              "teamId": 4326,
              "team": "Vanraure Hachinohe",
              "form": "WLLWDLLW",
              "all": {
                "played": 8,
                "wins": 3,
                "draws": 1,
                "losses": 4,
                "goalsFor": 5,
                "goalsAgainst": 12
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
                "played": 3,
                "wins": 1,
                "draws": 1,
                "losses": 1,
                "goalsFor": 2,
                "goalsAgainst": 6
              }
            },
            {
              "teamId": 298,
              "team": "Oita Trinita",
              "form": "LDWLDDDD",
              "all": {
                "played": 8,
                "wins": 1,
                "draws": 5,
                "losses": 2,
                "goalsFor": 7,
                "goalsAgainst": 6
              },
              "home": {
                "played": 4,
                "wins": 1,
                "draws": 2,
                "losses": 1,
                "goalsFor": 6,
                "goalsAgainst": 4
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
              "teamId": 4317,
              "team": "Fujieda MYFC",
              "form": "WWLWDLDD",
              "all": {
                "played": 8,
                "wins": 3,
                "draws": 3,
                "losses": 2,
                "goalsFor": 12,
                "goalsAgainst": 9
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
                "played": 4,
                "wins": 1,
                "draws": 1,
                "losses": 2,
                "goalsFor": 6,
                "goalsAgainst": 7
              }
            },
            {
              "teamId": 299,
              "team": "Tokushima Vortis",
              "form": "LDLWWLWW",
              "all": {
                "played": 8,
                "wins": 4,
                "draws": 1,
                "losses": 3,
                "goalsFor": 8,
                "goalsAgainst": 8
              },
              "home": {
                "played": 4,
                "wins": 3,
                "draws": 1,
                "losses": 0,
                "goalsFor": 5,
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
              "teamId": 7145,
              "team": "Tochigi City",
              "form": "LWWLWDLL",
              "all": {
                "played": 8,
                "wins": 3,
                "draws": 1,
                "losses": 4,
                "goalsFor": 14,
                "goalsAgainst": 13
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
                "played": 5,
                "wins": 2,
                "draws": 1,
                "losses": 2,
                "goalsFor": 7,
                "goalsAgainst": 7
              }
            },
            {
              "teamId": 312,
              "team": "Montedio Yamagata",
              "form": "WLWWLLLW",
              "all": {
                "played": 8,
                "wins": 4,
                "draws": 0,
                "losses": 4,
                "goalsFor": 10,
                "goalsAgainst": 6
              },
              "home": {
                "played": 5,
                "wins": 3,
                "draws": 0,
                "losses": 2,
                "goalsFor": 7,
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
              "teamId": 295,
              "team": "Sagan Tosu",
              "form": "WDLDWLLL",
              "all": {
                "played": 8,
                "wins": 2,
                "draws": 2,
                "losses": 4,
                "goalsFor": 8,
                "goalsAgainst": 11
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
                "played": 4,
                "wins": 0,
                "draws": 2,
                "losses": 2,
                "goalsFor": 2,
                "goalsAgainst": 5
              }
            },
            {
              "teamId": 313,
              "team": "Omiya Ardija",
              "form": "WWWDDDDW",
              "all": {
                "played": 8,
                "wins": 4,
                "draws": 4,
                "losses": 0,
                "goalsFor": 16,
                "goalsAgainst": 7
              },
              "home": {
                "played": 4,
                "wins": 2,
                "draws": 2,
                "losses": 0,
                "goalsFor": 8,
                "goalsAgainst": 3
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
              "teamId": 308,
              "team": "Ventforet Kofu",
              "form": "LDLWWLLL",
              "all": {
                "played": 8,
                "wins": 2,
                "draws": 1,
                "losses": 5,
                "goalsFor": 6,
                "goalsAgainst": 15
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
                "played": 4,
                "wins": 1,
                "draws": 0,
                "losses": 3,
                "goalsFor": 3,
                "goalsAgainst": 11
              }
            },
            {
              "teamId": 4315,
              "team": "Blaublitz Akita",
              "form": "DLWLDWDD",
              "all": {
                "played": 8,
                "wins": 2,
                "draws": 4,
                "losses": 2,
                "goalsFor": 11,
                "goalsAgainst": 10
              },
              "home": {
                "played": 5,
                "wins": 2,
                "draws": 2,
                "losses": 1,
                "goalsFor": 9,
                "goalsAgainst": 7
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
              "teamId": 311,
              "team": "Albirex Niigata",
              "form": "LWWWLWWD",
              "all": {
                "played": 8,
                "wins": 5,
                "draws": 1,
                "losses": 2,
                "goalsFor": 11,
                "goalsAgainst": 12
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
                "played": 4,
                "wins": 1,
                "draws": 1,
                "losses": 2,
                "goalsFor": 5,
                "goalsAgainst": 10
              }
            },
            {
              "teamId": 4322,
              "team": "Kataller Toyama",
              "form": "LWWLWDWD",
              "all": {
                "played": 8,
                "wins": 4,
                "draws": 2,
                "losses": 2,
                "goalsFor": 16,
                "goalsAgainst": 8
              },
              "home": {
                "played": 4,
                "wins": 1,
                "draws": 2,
                "losses": 1,
                "goalsFor": 9,
                "goalsAgainst": 6
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
              "form": "WWLDWLWD",
              "all": {
                "played": 8,
                "wins": 4,
                "draws": 2,
                "losses": 2,
                "goalsFor": 16,
                "goalsAgainst": 11
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
                "played": 4,
                "wins": 1,
                "draws": 1,
                "losses": 2,
                "goalsFor": 4,
                "goalsAgainst": 7
              }
            },
            {
              "teamId": 7127,
              "team": "Iwaki",
              "form": "WLLLLWWL",
              "all": {
                "played": 8,
                "wins": 3,
                "draws": 0,
                "losses": 5,
                "goalsFor": 11,
                "goalsAgainst": 15
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
                "played": 4,
                "wins": 1,
                "draws": 0,
                "losses": 3,
                "goalsFor": 5,
                "goalsAgainst": 9
              }
            },
            {
              "teamId": 286,
              "team": "Vegalta Sendai",
              "form": "LDWWWDWW",
              "all": {
                "played": 8,
                "wins": 5,
                "draws": 2,
                "losses": 1,
                "goalsFor": 15,
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
                "played": 5,
                "wins": 4,
                "draws": 0,
                "losses": 1,
                "goalsFor": 10,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 10075,
              "team": "Imabari",
              "form": "LLLLDWLL",
              "all": {
                "played": 8,
                "wins": 1,
                "draws": 1,
                "losses": 6,
                "goalsFor": 7,
                "goalsAgainst": 17
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
                "goalsFor": 3,
                "goalsAgainst": 9
              }
            },
            {
              "teamId": 284,
              "team": "Shonan Bellmare",
              "form": "WWDDLWDW",
              "all": {
                "played": 8,
                "wins": 4,
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
                "goalsFor": 3,
                "goalsAgainst": 4
              },
              "away": {
                "played": 5,
                "wins": 3,
                "draws": 2,
                "losses": 0,
                "goalsFor": 6,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 10409,
              "team": "Tegevajaro Miyazaki",
              "form": "LDDLLWWW",
              "all": {
                "played": 8,
                "wins": 3,
                "draws": 2,
                "losses": 3,
                "goalsFor": 12,
                "goalsAgainst": 12
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
                "wins": 1,
                "draws": 1,
                "losses": 2,
                "goalsFor": 6,
                "goalsAgainst": 7
              }
            },
            {
              "teamId": 279,
              "team": "Consadole Sapporo",
              "form": "WLLLLDDL",
              "all": {
                "played": 8,
                "wins": 1,
                "draws": 2,
                "losses": 5,
                "goalsFor": 10,
                "goalsAgainst": 17
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
                "played": 4,
                "wins": 0,
                "draws": 1,
                "losses": 3,
                "goalsFor": 5,
                "goalsAgainst": 8
              }
            }
          ],
          "fixtures": [
            {
              "fixtureId": 1606670,
              "kickoff": "2026-09-26T17:00:00+09:00",
              "status": "FT",
              "homeTeamId": 280,
              "homeTeam": "Jubilo Iwata",
              "awayTeamId": 4326,
              "awayTeam": "Vanraure Hachinohe",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": true,
              "lineups": []
            },
            {
              "fixtureId": 1606666,
              "kickoff": "2026-09-26T17:00:00+09:00",
              "status": "FT",
              "homeTeamId": 298,
              "homeTeam": "Oita Trinita",
              "awayTeamId": 4317,
              "awayTeam": "Fujieda MYFC",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": true,
              "lineups": []
            },
            {
              "fixtureId": 1606673,
              "kickoff": "2026-09-26T17:00:00+09:00",
              "status": "FT",
              "homeTeamId": 299,
              "homeTeam": "Tokushima Vortis",
              "awayTeamId": 7145,
              "awayTeam": "Tochigi City",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": true,
              "lineups": []
            },
            {
              "fixtureId": 1606668,
              "kickoff": "2026-09-26T17:00:00+09:00",
              "status": "FT",
              "homeTeamId": 312,
              "homeTeam": "Montedio Yamagata",
              "awayTeamId": 295,
              "awayTeam": "Sagan Tosu",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": true,
              "lineups": []
            },
            {
              "fixtureId": 1606671,
              "kickoff": "2026-09-26T17:00:00+09:00",
              "status": "FT",
              "homeTeamId": 313,
              "homeTeam": "Omiya Ardija",
              "awayTeamId": 308,
              "awayTeam": "Ventforet Kofu",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": true,
              "lineups": []
            },
            {
              "fixtureId": 1606669,
              "kickoff": "2026-09-26T17:00:00+09:00",
              "status": "FT",
              "homeTeamId": 4315,
              "homeTeam": "Blaublitz Akita",
              "awayTeamId": 311,
              "awayTeam": "Albirex Niigata",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": true,
              "lineups": []
            },
            {
              "fixtureId": 1606672,
              "kickoff": "2026-09-26T17:00:00+09:00",
              "status": "FT",
              "homeTeamId": 4322,
              "homeTeam": "Kataller Toyama",
              "awayTeamId": 307,
              "awayTeam": "Yokohama FC",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": true,
              "lineups": []
            },
            {
              "fixtureId": 1606667,
              "kickoff": "2026-09-26T17:00:00+09:00",
              "status": "FT",
              "homeTeamId": 7127,
              "homeTeam": "Iwaki",
              "awayTeamId": 286,
              "awayTeam": "Vegalta Sendai",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": true,
              "lineups": []
            },
            {
              "fixtureId": 1606675,
              "kickoff": "2026-09-26T17:00:00+09:00",
              "status": "FT",
              "homeTeamId": 10075,
              "homeTeam": "Imabari",
              "awayTeamId": 284,
              "awayTeam": "Shonan Bellmare",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": true,
              "lineups": []
            },
            {
              "fixtureId": 1606674,
              "kickoff": "2026-09-26T17:00:00+09:00",
              "status": "FT",
              "homeTeamId": 10409,
              "homeTeam": "Tegevajaro Miyazaki",
              "awayTeamId": 279,
              "awayTeam": "Consadole Sapporo",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": true,
              "lineups": []
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
              "teamId": 8194,
              "team": "France U21",
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
                "played": 2,
                "wins": 1,
                "draws": 1,
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
              "teamId": 22343,
              "team": "Ukraine U18",
              "form": "DWDDWLL",
              "all": {
                "played": 7,
                "wins": 2,
                "draws": 3,
                "losses": 2,
                "goalsFor": 6,
                "goalsAgainst": 6
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
                "played": 5,
                "wins": 2,
                "draws": 1,
                "losses": 2,
                "goalsFor": 5,
                "goalsAgainst": 5
              }
            },
            {
              "teamId": 10332,
              "team": "England U19",
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
              "teamId": 10377,
              "team": "Republic of Ireland U19",
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
              "teamId": 10365,
              "team": "Hungary U19",
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
              "teamId": 10328,
              "team": "Bulgaria U19",
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
                "played": 3,
                "wins": 3,
                "draws": 0,
                "losses": 0,
                "goalsFor": 6,
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
            }
          ],
          "fixtures": [
            {
              "fixtureId": 1640061,
              "kickoff": "2026-09-26T02:00:00+09:00",
              "status": "FT",
              "homeTeamId": 8194,
              "homeTeam": "France U21",
              "awayTeamId": 22343,
              "awayTeam": "Ukraine U18",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1637599,
              "kickoff": "2026-09-26T03:00:00+09:00",
              "status": "FT",
              "homeTeamId": 10332,
              "homeTeam": "England U19",
              "awayTeamId": 10377,
              "awayTeam": "Republic of Ireland U19",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1640504,
              "kickoff": "2026-09-26T23:00:00+09:00",
              "status": "NS",
              "homeTeamId": 10365,
              "homeTeam": "Hungary U19",
              "awayTeamId": 10328,
              "awayTeam": "Bulgaria U19",
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
      "date": "2026-09-27",
      "updatedAt": "2026-09-26T13:02:23.941Z",
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
              "points": 62,
              "goalsDiff": 31,
              "form": "LWLWW",
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
              "teamId": 2761,
              "team": "Jeju United FC",
              "rank": 3,
              "points": 46,
              "goalsDiff": 6,
              "form": "WDWDW",
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
              "rank": 4,
              "points": 44,
              "goalsDiff": 10,
              "form": "DLDWD",
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
              "teamId": 2746,
              "team": "Gangwon FC",
              "rank": 5,
              "points": 42,
              "goalsDiff": 8,
              "form": "LDDWD",
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
              "teamId": 2750,
              "team": "Daejeon Citizen",
              "rank": 6,
              "points": 40,
              "goalsDiff": 9,
              "form": "DDWWL",
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
              "rank": 7,
              "points": 40,
              "goalsDiff": -6,
              "form": "WDDLD",
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
              "teamId": 2748,
              "team": "FC Anyang",
              "rank": 8,
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
              "rank": 9,
              "points": 38,
              "goalsDiff": 3,
              "form": "DLWLD",
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
              "points": 15,
              "goalsDiff": -42,
              "form": "DDLDL",
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
            }
          ],
          "fixtures": [
            {
              "fixtureId": 1507024,
              "kickoff": "2026-09-27T19:00:00+09:00",
              "status": "NS",
              "homeTeamId": 2746,
              "homeTeam": "Gangwon FC",
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
          "key": "INTL_FRIENDLIES",
          "leagueId": 10,
          "season": "2026",
          "standings": [],
          "teams": [
            {
              "teamId": 2384,
              "team": "USA",
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
                "played": 4,
                "wins": 1,
                "draws": 0,
                "losses": 3,
                "goalsFor": 6,
                "goalsAgainst": 11
              },
              "away": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 30,
              "team": "Peru",
              "form": "LDWL",
              "all": {
                "played": 4,
                "wins": 1,
                "draws": 1,
                "losses": 2,
                "goalsFor": 5,
                "goalsAgainst": 8
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
                "played": 2,
                "wins": 1,
                "draws": 0,
                "losses": 1,
                "goalsFor": 2,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 5529,
              "team": "Canada",
              "form": "WDDWD",
              "all": {
                "played": 5,
                "wins": 2,
                "draws": 3,
                "losses": 0,
                "goalsFor": 6,
                "goalsAgainst": 3
              },
              "home": {
                "played": 5,
                "wins": 2,
                "draws": 3,
                "losses": 0,
                "goalsFor": 6,
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
              "teamId": 2383,
              "team": "Chile",
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
                "draws": 0,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 16,
              "team": "Mexico",
              "form": "WWWDDWWW",
              "all": {
                "played": 8,
                "wins": 6,
                "draws": 2,
                "losses": 0,
                "goalsFor": 15,
                "goalsAgainst": 2
              },
              "home": {
                "played": 6,
                "wins": 4,
                "draws": 2,
                "losses": 0,
                "goalsFor": 13,
                "goalsAgainst": 2
              },
              "away": {
                "played": 2,
                "wins": 2,
                "draws": 0,
                "losses": 0,
                "goalsFor": 2,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 8,
              "team": "Colombia",
              "form": "LLWW",
              "all": {
                "played": 4,
                "wins": 2,
                "draws": 0,
                "losses": 2,
                "goalsFor": 7,
                "goalsAgainst": 6
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
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 5170,
              "team": "Vanuatu",
              "form": "WDWD",
              "all": {
                "played": 4,
                "wins": 2,
                "draws": 2,
                "losses": 0,
                "goalsFor": 8,
                "goalsAgainst": 6
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
                "wins": 1,
                "draws": 1,
                "losses": 0,
                "goalsFor": 4,
                "goalsAgainst": 3
              }
            },
            {
              "teamId": 5163,
              "team": "New Caledonia",
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
                "goalsFor": 2,
                "goalsAgainst": 1
              }
            },
            {
              "teamId": 8174,
              "team": "Cook Islands",
              "form": "",
              "all": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "home": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "away": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 5167,
              "team": "Tahiti",
              "form": "",
              "all": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "home": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "away": {
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
              "form": "LDL",
              "all": {
                "played": 3,
                "wins": 0,
                "draws": 1,
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
                "goalsAgainst": 1
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
              "teamId": 8175,
              "team": "Papua New Guinea",
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
              "teamId": 17970,
              "team": "Poland U17",
              "form": "WWDW",
              "all": {
                "played": 4,
                "wins": 3,
                "draws": 1,
                "losses": 0,
                "goalsFor": 11,
                "goalsAgainst": 4
              },
              "home": {
                "played": 3,
                "wins": 3,
                "draws": 0,
                "losses": 0,
                "goalsFor": 10,
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
              "teamId": 17972,
              "team": "Republic of Ireland U17",
              "form": "WLL",
              "all": {
                "played": 3,
                "wins": 1,
                "draws": 0,
                "losses": 2,
                "goalsFor": 2,
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
                "played": 1,
                "wins": 0,
                "draws": 0,
                "losses": 1,
                "goalsFor": 0,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 1566,
              "team": "China",
              "form": "DWDW",
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
                "goalsFor": 3,
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
              "teamId": 4673,
              "team": "New Zealand",
              "form": "LLD",
              "all": {
                "played": 3,
                "wins": 0,
                "draws": 1,
                "losses": 2,
                "goalsFor": 2,
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
                "played": 3,
                "wins": 0,
                "draws": 1,
                "losses": 2,
                "goalsFor": 2,
                "goalsAgainst": 7
              }
            },
            {
              "teamId": 1515,
              "team": "Seychelles",
              "form": "",
              "all": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "home": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "away": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 5166,
              "team": "Sri Lanka",
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
              "teamId": 22343,
              "team": "Ukraine U18",
              "form": "DWDDWLL",
              "all": {
                "played": 7,
                "wins": 2,
                "draws": 3,
                "losses": 2,
                "goalsFor": 6,
                "goalsAgainst": 6
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
                "played": 5,
                "wins": 2,
                "draws": 1,
                "losses": 2,
                "goalsFor": 5,
                "goalsAgainst": 5
              }
            },
            {
              "teamId": 21460,
              "team": "Austria U18",
              "form": "LDDW",
              "all": {
                "played": 4,
                "wins": 1,
                "draws": 2,
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
              "fixtureId": 1628997,
              "kickoff": "2026-09-27T05:30:00+09:00",
              "status": "NS",
              "homeTeamId": 2384,
              "homeTeam": "USA",
              "awayTeamId": 30,
              "awayTeam": "Peru",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1610877,
              "kickoff": "2026-09-27T08:00:00+09:00",
              "status": "NS",
              "homeTeamId": 5529,
              "homeTeam": "Canada",
              "awayTeamId": 2383,
              "awayTeam": "Chile",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1628996,
              "kickoff": "2026-09-27T10:00:00+09:00",
              "status": "NS",
              "homeTeamId": 16,
              "homeTeam": "Mexico",
              "awayTeamId": 8,
              "awayTeam": "Colombia",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1640505,
              "kickoff": "2026-09-27T13:00:00+09:00",
              "status": "NS",
              "homeTeamId": 5170,
              "homeTeam": "Vanuatu",
              "awayTeamId": 5163,
              "awayTeam": "New Caledonia",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1640062,
              "kickoff": "2026-09-27T13:00:00+09:00",
              "status": "NS",
              "homeTeamId": 8174,
              "homeTeam": "Cook Islands",
              "awayTeamId": 5167,
              "awayTeam": "Tahiti",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1640506,
              "kickoff": "2026-09-27T16:00:00+09:00",
              "status": "NS",
              "homeTeamId": 5160,
              "homeTeam": "Fiji",
              "awayTeamId": 8175,
              "awayTeam": "Papua New Guinea",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1640063,
              "kickoff": "2026-09-27T18:00:00+09:00",
              "status": "NS",
              "homeTeamId": 17970,
              "homeTeam": "Poland U17",
              "awayTeamId": 17972,
              "awayTeam": "Republic of Ireland U17",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1637601,
              "kickoff": "2026-09-27T20:35:00+09:00",
              "status": "NS",
              "homeTeamId": 1566,
              "homeTeam": "China",
              "awayTeamId": 4673,
              "awayTeam": "New Zealand",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1640064,
              "kickoff": "2026-09-27T21:00:00+09:00",
              "status": "NS",
              "homeTeamId": 1515,
              "homeTeam": "Seychelles",
              "awayTeamId": 5166,
              "awayTeam": "Sri Lanka",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1640065,
              "kickoff": "2026-09-27T21:00:00+09:00",
              "status": "NS",
              "homeTeamId": 22343,
              "homeTeam": "Ukraine U18",
              "awayTeamId": 21460,
              "awayTeam": "Austria U18",
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
      "date": "2026-09-28",
      "updatedAt": "2026-09-26T13:02:33.314Z",
      "leagues": [
        {
          "key": "INTL_FRIENDLIES",
          "leagueId": 10,
          "season": "2026",
          "standings": [],
          "teams": [
            {
              "teamId": 8194,
              "team": "France U21",
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
                "played": 2,
                "wins": 1,
                "draws": 1,
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
              "teamId": 22431,
              "team": "Japan U18",
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
              "teamId": 1112,
              "team": "Malta",
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
                "draws": 0,
                "losses": 1,
                "goalsFor": 3,
                "goalsAgainst": 2
              }
            },
            {
              "teamId": 1107,
              "team": "Liechtenstein",
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
              "teamId": 1548,
              "team": "Jordan",
              "form": "DDLL",
              "all": {
                "played": 4,
                "wins": 0,
                "draws": 2,
                "losses": 2,
                "goalsFor": 5,
                "goalsAgainst": 10
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
                "draws": 0,
                "losses": 2,
                "goalsFor": 1,
                "goalsAgainst": 6
              }
            },
            {
              "teamId": 1565,
              "team": "Syria",
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
              "teamId": 2381,
              "team": "Bolivia",
              "form": "DLWLL",
              "all": {
                "played": 5,
                "wins": 1,
                "draws": 1,
                "losses": 3,
                "goalsFor": 4,
                "goalsAgainst": 10
              },
              "home": {
                "played": 5,
                "wins": 1,
                "draws": 1,
                "losses": 3,
                "goalsFor": 4,
                "goalsAgainst": 10
              },
              "away": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 2380,
              "team": "Paraguay",
              "form": "WLW",
              "all": {
                "played": 3,
                "wins": 2,
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
                "goalsFor": 4,
                "goalsAgainst": 0
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
              "teamId": 1539,
              "team": "Turkmenistan",
              "form": "",
              "all": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "home": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "away": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 1562,
              "team": "Palestine",
              "form": "DDD",
              "all": {
                "played": 3,
                "wins": 0,
                "draws": 3,
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
                "played": 2,
                "wins": 0,
                "draws": 2,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 12,
              "team": "Japan",
              "form": "WWWW",
              "all": {
                "played": 4,
                "wins": 4,
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
                "goalsFor": 4,
                "goalsAgainst": 1
              },
              "away": {
                "played": 2,
                "wins": 2,
                "draws": 0,
                "losses": 0,
                "goalsFor": 2,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 2379,
              "team": "Venezuela",
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
              "teamId": 17,
              "team": "South Korea",
              "form": "LLWWW",
              "all": {
                "played": 5,
                "wins": 3,
                "draws": 0,
                "losses": 2,
                "goalsFor": 9,
                "goalsAgainst": 5
              },
              "home": {
                "played": 4,
                "wins": 3,
                "draws": 0,
                "losses": 1,
                "goalsFor": 9,
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
              "teamId": 7,
              "team": "Uruguay",
              "form": "DDL",
              "all": {
                "played": 3,
                "wins": 0,
                "draws": 2,
                "losses": 1,
                "goalsFor": 2,
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
                "played": 3,
                "wins": 0,
                "draws": 2,
                "losses": 1,
                "goalsFor": 2,
                "goalsAgainst": 4
              }
            },
            {
              "teamId": 1536,
              "team": "Tajikistan",
              "form": "WDL",
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
                "goalsFor": 4,
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
              "teamId": 1554,
              "team": "Kyrgyzstan",
              "form": "LLDD",
              "all": {
                "played": 4,
                "wins": 0,
                "draws": 2,
                "losses": 2,
                "goalsFor": 2,
                "goalsAgainst": 6
              },
              "home": {
                "played": 4,
                "wins": 0,
                "draws": 2,
                "losses": 2,
                "goalsFor": 2,
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
              "teamId": 1551,
              "team": "Lebanon",
              "form": "",
              "all": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "home": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "away": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 17949,
              "team": "England U17",
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
              "teamId": 18914,
              "team": "Israel U17",
              "form": "",
              "all": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "home": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "away": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 22437,
              "team": "Serbia U18",
              "form": "DDWW",
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
                "wins": 2,
                "draws": 0,
                "losses": 0,
                "goalsFor": 6,
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
              "teamId": 25280,
              "team": "Russia U18",
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
            }
          ],
          "fixtures": [
            {
              "fixtureId": 1640826,
              "kickoff": "2026-09-28T01:00:00+09:00",
              "status": "NS",
              "homeTeamId": 8194,
              "homeTeam": "France U21",
              "awayTeamId": 22431,
              "awayTeam": "Japan U18",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1628998,
              "kickoff": "2026-09-28T01:30:00+09:00",
              "status": "NS",
              "homeTeamId": 1112,
              "homeTeam": "Malta",
              "awayTeamId": 1107,
              "awayTeam": "Liechtenstein",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1640066,
              "kickoff": "2026-09-28T02:00:00+09:00",
              "status": "NS",
              "homeTeamId": 1548,
              "homeTeam": "Jordan",
              "awayTeamId": 1565,
              "awayTeam": "Syria",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1637602,
              "kickoff": "2026-09-28T05:30:00+09:00",
              "status": "NS",
              "homeTeamId": 2381,
              "homeTeam": "Bolivia",
              "awayTeamId": 2380,
              "awayTeam": "Paraguay",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1638592,
              "kickoff": "2026-09-28T18:30:00+09:00",
              "status": "CANC",
              "homeTeamId": 1539,
              "homeTeam": "Turkmenistan",
              "awayTeamId": 1562,
              "awayTeam": "Palestine",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1629000,
              "kickoff": "2026-09-28T19:25:00+09:00",
              "status": "NS",
              "homeTeamId": 12,
              "homeTeam": "Japan",
              "awayTeamId": 2379,
              "awayTeam": "Venezuela",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1628999,
              "kickoff": "2026-09-28T20:00:00+09:00",
              "status": "NS",
              "homeTeamId": 17,
              "homeTeam": "South Korea",
              "awayTeamId": 7,
              "awayTeam": "Uruguay",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1638596,
              "kickoff": "2026-09-28T21:00:00+09:00",
              "status": "NS",
              "homeTeamId": 1536,
              "homeTeam": "Tajikistan",
              "awayTeamId": 1562,
              "awayTeam": "Palestine",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1640507,
              "kickoff": "2026-09-28T21:00:00+09:00",
              "status": "NS",
              "homeTeamId": 1554,
              "homeTeam": "Kyrgyzstan",
              "awayTeamId": 1551,
              "awayTeam": "Lebanon",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1638593,
              "kickoff": "2026-09-28T23:00:00+09:00",
              "status": "NS",
              "homeTeamId": 17949,
              "homeTeam": "England U17",
              "awayTeamId": 18914,
              "awayTeam": "Israel U17",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1640827,
              "kickoff": "2026-09-28T23:00:00+09:00",
              "status": "NS",
              "homeTeamId": 22437,
              "homeTeam": "Serbia U18",
              "awayTeamId": 25280,
              "awayTeam": "Russia U18",
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
      "date": "2026-09-29",
      "updatedAt": "2026-09-26T13:02:33.315Z",
      "leagues": []
    }
  ]
};
});
