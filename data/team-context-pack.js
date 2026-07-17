(function attachTeamContextPack(root, factory) {
  const pack = factory();
  if (typeof module !== "undefined" && module.exports) module.exports = pack;
  if (root) root.ODDS_ARCHIVE_TEAM_CONTEXT_PACK = pack;
})(typeof window !== "undefined" ? window : globalThis, function createTeamContextPack() {
  return {
  "version": "team-context-v3",
  "date": "2026-07-18",
  "updatedAt": "2026-07-17T19:23:27.478Z",
  "collection": {
    "dates": [
      "2026-07-18"
    ],
    "requestGroups": 2,
    "skippedGroups": 24,
    "failures": 0,
    "errors": []
  },
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
          "points": 36,
          "goalsDiff": 16,
          "form": "DWWWL",
          "all": {
            "played": 17,
            "wins": 11,
            "draws": 3,
            "losses": 3,
            "goalsFor": 28,
            "goalsAgainst": 12
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
            "played": 9,
            "wins": 7,
            "draws": 1,
            "losses": 1,
            "goalsFor": 16,
            "goalsAgainst": 8
          }
        },
        {
          "teamId": 2762,
          "team": "Jeonbuk Motors",
          "rank": 2,
          "points": 29,
          "goalsDiff": 10,
          "form": "WLWDD",
          "all": {
            "played": 17,
            "wins": 8,
            "draws": 5,
            "losses": 4,
            "goalsFor": 25,
            "goalsAgainst": 15
          },
          "home": {
            "played": 8,
            "wins": 5,
            "draws": 0,
            "losses": 3,
            "goalsFor": 16,
            "goalsAgainst": 10
          },
          "away": {
            "played": 9,
            "wins": 3,
            "draws": 5,
            "losses": 1,
            "goalsFor": 9,
            "goalsAgainst": 5
          }
        },
        {
          "teamId": 2746,
          "team": "Gangwon FC",
          "rank": 3,
          "points": 28,
          "goalsDiff": 10,
          "form": "DWWWD",
          "all": {
            "played": 17,
            "wins": 7,
            "draws": 7,
            "losses": 3,
            "goalsFor": 21,
            "goalsAgainst": 11
          },
          "home": {
            "played": 8,
            "wins": 3,
            "draws": 4,
            "losses": 1,
            "goalsFor": 12,
            "goalsAgainst": 6
          },
          "away": {
            "played": 9,
            "wins": 4,
            "draws": 3,
            "losses": 2,
            "goalsFor": 9,
            "goalsAgainst": 5
          }
        },
        {
          "teamId": 2764,
          "team": "Pohang Steelers",
          "rank": 4,
          "points": 28,
          "goalsDiff": 4,
          "form": "WWLWW",
          "all": {
            "played": 17,
            "wins": 8,
            "draws": 4,
            "losses": 5,
            "goalsFor": 18,
            "goalsAgainst": 14
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
            "played": 9,
            "wins": 5,
            "draws": 2,
            "losses": 2,
            "goalsFor": 14,
            "goalsAgainst": 9
          }
        },
        {
          "teamId": 2767,
          "team": "Ulsan Hyundai FC",
          "rank": 5,
          "points": 27,
          "goalsDiff": 0,
          "form": "LDLWW",
          "all": {
            "played": 17,
            "wins": 8,
            "draws": 3,
            "losses": 6,
            "goalsFor": 24,
            "goalsAgainst": 24
          },
          "home": {
            "played": 9,
            "wins": 4,
            "draws": 1,
            "losses": 4,
            "goalsFor": 14,
            "goalsAgainst": 15
          },
          "away": {
            "played": 8,
            "wins": 4,
            "draws": 2,
            "losses": 2,
            "goalsFor": 10,
            "goalsAgainst": 9
          }
        },
        {
          "teamId": 2748,
          "team": "FC Anyang",
          "rank": 6,
          "points": 23,
          "goalsDiff": 3,
          "form": "WLWDD",
          "all": {
            "played": 17,
            "wins": 5,
            "draws": 8,
            "losses": 4,
            "goalsFor": 22,
            "goalsAgainst": 19
          },
          "home": {
            "played": 8,
            "wins": 1,
            "draws": 4,
            "losses": 3,
            "goalsFor": 9,
            "goalsAgainst": 11
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
          "teamId": 2763,
          "team": "Incheon United",
          "rank": 7,
          "points": 21,
          "goalsDiff": 2,
          "form": "LLWLW",
          "all": {
            "played": 17,
            "wins": 6,
            "draws": 3,
            "losses": 8,
            "goalsFor": 21,
            "goalsAgainst": 19
          },
          "home": {
            "played": 9,
            "wins": 3,
            "draws": 0,
            "losses": 6,
            "goalsFor": 10,
            "goalsAgainst": 11
          },
          "away": {
            "played": 8,
            "wins": 3,
            "draws": 3,
            "losses": 2,
            "goalsFor": 11,
            "goalsAgainst": 8
          }
        },
        {
          "teamId": 2761,
          "team": "Jeju United FC",
          "rank": 8,
          "points": 20,
          "goalsDiff": -3,
          "form": "DDLLW",
          "all": {
            "played": 17,
            "wins": 5,
            "draws": 5,
            "losses": 7,
            "goalsFor": 14,
            "goalsAgainst": 17
          },
          "home": {
            "played": 9,
            "wins": 2,
            "draws": 3,
            "losses": 4,
            "goalsFor": 6,
            "goalsAgainst": 10
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
          "teamId": 2745,
          "team": "Bucheon FC 1995",
          "rank": 9,
          "points": 19,
          "goalsDiff": -4,
          "form": "DDWDL",
          "all": {
            "played": 17,
            "wins": 4,
            "draws": 7,
            "losses": 6,
            "goalsFor": 14,
            "goalsAgainst": 18
          },
          "home": {
            "played": 8,
            "wins": 1,
            "draws": 4,
            "losses": 3,
            "goalsFor": 6,
            "goalsAgainst": 8
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
          "teamId": 2750,
          "team": "Daejeon Citizen",
          "rank": 10,
          "points": 18,
          "goalsDiff": 1,
          "form": "DDLLL",
          "all": {
            "played": 17,
            "wins": 4,
            "draws": 6,
            "losses": 7,
            "goalsFor": 19,
            "goalsAgainst": 18
          },
          "home": {
            "played": 9,
            "wins": 0,
            "draws": 4,
            "losses": 5,
            "goalsFor": 5,
            "goalsAgainst": 12
          },
          "away": {
            "played": 8,
            "wins": 4,
            "draws": 2,
            "losses": 2,
            "goalsFor": 14,
            "goalsAgainst": 6
          }
        },
        {
          "teamId": 2768,
          "team": "Gimcheon Sangmu FC",
          "rank": 11,
          "points": 16,
          "goalsDiff": -6,
          "form": "DDLDL",
          "all": {
            "played": 17,
            "wins": 2,
            "draws": 10,
            "losses": 5,
            "goalsFor": 17,
            "goalsAgainst": 23
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
            "played": 8,
            "wins": 2,
            "draws": 4,
            "losses": 2,
            "goalsFor": 10,
            "goalsAgainst": 9
          }
        },
        {
          "teamId": 2759,
          "team": "Gwangju FC",
          "rank": 12,
          "points": 8,
          "goalsDiff": -33,
          "form": "LDLLD",
          "all": {
            "played": 17,
            "wins": 1,
            "draws": 5,
            "losses": 11,
            "goalsFor": 8,
            "goalsAgainst": 41
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
            "played": 8,
            "wins": 0,
            "draws": 2,
            "losses": 6,
            "goalsFor": 2,
            "goalsAgainst": 23
          }
        }
      ],
      "teams": [
        {
          "teamId": 2746,
          "team": "Gangwon FC",
          "form": "LDDDLWWDWLWDDWWWD",
          "all": {
            "played": 17,
            "wins": 7,
            "draws": 7,
            "losses": 3,
            "goalsFor": 21,
            "goalsAgainst": 11
          },
          "home": {
            "played": 8,
            "wins": 3,
            "draws": 4,
            "losses": 1,
            "goalsFor": 12,
            "goalsAgainst": 6
          },
          "away": {
            "played": 9,
            "wins": 4,
            "draws": 3,
            "losses": 2,
            "goalsFor": 9,
            "goalsAgainst": 5
          }
        },
        {
          "teamId": 2768,
          "team": "Gimcheon Sangmu FC",
          "form": "DDDDDLDDLWWLLDLDD",
          "all": {
            "played": 17,
            "wins": 2,
            "draws": 10,
            "losses": 5,
            "goalsFor": 17,
            "goalsAgainst": 23
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
            "played": 8,
            "wins": 2,
            "draws": 4,
            "losses": 2,
            "goalsFor": 10,
            "goalsAgainst": 9
          }
        },
        {
          "teamId": 2750,
          "team": "Daejeon Citizen",
          "form": "DDDWLLLWLWWDLLLDD",
          "all": {
            "played": 17,
            "wins": 4,
            "draws": 6,
            "losses": 7,
            "goalsFor": 19,
            "goalsAgainst": 18
          },
          "home": {
            "played": 9,
            "wins": 0,
            "draws": 4,
            "losses": 5,
            "goalsFor": 5,
            "goalsAgainst": 12
          },
          "away": {
            "played": 8,
            "wins": 4,
            "draws": 2,
            "losses": 2,
            "goalsFor": 14,
            "goalsAgainst": 6
          }
        },
        {
          "teamId": 2767,
          "team": "Ulsan Hyundai FC",
          "form": "WWWDLWLWDLLWWWLDL",
          "all": {
            "played": 17,
            "wins": 8,
            "draws": 3,
            "losses": 6,
            "goalsFor": 24,
            "goalsAgainst": 24
          },
          "home": {
            "played": 9,
            "wins": 4,
            "draws": 1,
            "losses": 4,
            "goalsFor": 14,
            "goalsAgainst": 15
          },
          "away": {
            "played": 8,
            "wins": 4,
            "draws": 2,
            "losses": 2,
            "goalsFor": 10,
            "goalsAgainst": 9
          }
        },
        {
          "teamId": 2761,
          "team": "Jeju United FC",
          "form": "DLLLDWWDWLLWWLLDD",
          "all": {
            "played": 17,
            "wins": 5,
            "draws": 5,
            "losses": 7,
            "goalsFor": 14,
            "goalsAgainst": 17
          },
          "home": {
            "played": 9,
            "wins": 2,
            "draws": 3,
            "losses": 4,
            "goalsFor": 6,
            "goalsAgainst": 10
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
          "teamId": 2764,
          "team": "Pohang Steelers",
          "form": "DDLDWWLLWLWDWWLWW",
          "all": {
            "played": 17,
            "wins": 8,
            "draws": 4,
            "losses": 5,
            "goalsFor": 18,
            "goalsAgainst": 14
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
            "played": 9,
            "wins": 5,
            "draws": 2,
            "losses": 2,
            "goalsFor": 14,
            "goalsAgainst": 9
          }
        },
        {
          "teamId": 2763,
          "team": "Incheon United",
          "form": "LLDLWWLDWWLDWLWLL",
          "all": {
            "played": 17,
            "wins": 6,
            "draws": 3,
            "losses": 8,
            "goalsFor": 21,
            "goalsAgainst": 19
          },
          "home": {
            "played": 9,
            "wins": 3,
            "draws": 0,
            "losses": 6,
            "goalsFor": 10,
            "goalsAgainst": 11
          },
          "away": {
            "played": 8,
            "wins": 3,
            "draws": 3,
            "losses": 2,
            "goalsFor": 11,
            "goalsAgainst": 8
          }
        },
        {
          "teamId": 2762,
          "team": "Jeonbuk Motors",
          "form": "LDDWWWLDLWWWDDWLW",
          "all": {
            "played": 17,
            "wins": 8,
            "draws": 5,
            "losses": 4,
            "goalsFor": 25,
            "goalsAgainst": 15
          },
          "home": {
            "played": 8,
            "wins": 5,
            "draws": 0,
            "losses": 3,
            "goalsFor": 16,
            "goalsAgainst": 10
          },
          "away": {
            "played": 9,
            "wins": 3,
            "draws": 5,
            "losses": 1,
            "goalsFor": 9,
            "goalsAgainst": 5
          }
        }
      ],
      "fixtures": [
        {
          "fixtureId": 1506999,
          "kickoff": "2026-07-18T19:30:00+09:00",
          "status": "NS",
          "homeTeamId": 2746,
          "homeTeam": "Gangwon FC",
          "awayTeamId": 2768,
          "awayTeam": "Gimcheon Sangmu FC",
          "injuriesChecked": true,
          "injuries": [],
          "lineupsChecked": false,
          "lineups": []
        },
        {
          "fixtureId": 1506998,
          "kickoff": "2026-07-18T19:30:00+09:00",
          "status": "NS",
          "homeTeamId": 2750,
          "homeTeam": "Daejeon Citizen",
          "awayTeamId": 2767,
          "awayTeam": "Ulsan Hyundai FC",
          "injuriesChecked": true,
          "injuries": [],
          "lineupsChecked": false,
          "lineups": []
        },
        {
          "fixtureId": 1507001,
          "kickoff": "2026-07-18T19:30:00+09:00",
          "status": "NS",
          "homeTeamId": 2761,
          "homeTeam": "Jeju United FC",
          "awayTeamId": 2764,
          "awayTeam": "Pohang Steelers",
          "injuriesChecked": true,
          "injuries": [],
          "lineupsChecked": false,
          "lineups": []
        },
        {
          "fixtureId": 1507000,
          "kickoff": "2026-07-18T19:30:00+09:00",
          "status": "NS",
          "homeTeamId": 2763,
          "homeTeam": "Incheon United",
          "awayTeamId": 2762,
          "awayTeam": "Jeonbuk Motors",
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
          "goalsDiff": 15,
          "form": "WDDWL",
          "all": {
            "played": 16,
            "wins": 11,
            "draws": 3,
            "losses": 2,
            "goalsFor": 35,
            "goalsAgainst": 20
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
            "played": 8,
            "wins": 5,
            "draws": 1,
            "losses": 2,
            "goalsFor": 18,
            "goalsAgainst": 14
          }
        },
        {
          "teamId": 2765,
          "team": "Suwon Bluewings",
          "rank": 2,
          "points": 32,
          "goalsDiff": 8,
          "form": "LWWLW",
          "all": {
            "played": 16,
            "wins": 10,
            "draws": 2,
            "losses": 4,
            "goalsFor": 22,
            "goalsAgainst": 14
          },
          "home": {
            "played": 8,
            "wins": 5,
            "draws": 2,
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
          "points": 31,
          "goalsDiff": 13,
          "form": "WWWDW",
          "all": {
            "played": 16,
            "wins": 9,
            "draws": 4,
            "losses": 3,
            "goalsFor": 35,
            "goalsAgainst": 22
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
            "played": 7,
            "wins": 3,
            "draws": 3,
            "losses": 1,
            "goalsFor": 16,
            "goalsAgainst": 10
          }
        },
        {
          "teamId": 2756,
          "team": "Suwon City FC",
          "rank": 4,
          "points": 29,
          "goalsDiff": 13,
          "form": "WWDDL",
          "all": {
            "played": 16,
            "wins": 8,
            "draws": 5,
            "losses": 3,
            "goalsFor": 34,
            "goalsAgainst": 21
          },
          "home": {
            "played": 7,
            "wins": 4,
            "draws": 3,
            "losses": 0,
            "goalsFor": 16,
            "goalsAgainst": 6
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
          "points": 29,
          "goalsDiff": 9,
          "form": "WLWWD",
          "all": {
            "played": 16,
            "wins": 9,
            "draws": 2,
            "losses": 5,
            "goalsFor": 28,
            "goalsAgainst": 19
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
            "played": 8,
            "wins": 5,
            "draws": 1,
            "losses": 2,
            "goalsFor": 13,
            "goalsAgainst": 8
          }
        },
        {
          "teamId": 7087,
          "team": "Hwaseong",
          "rank": 6,
          "points": 25,
          "goalsDiff": 4,
          "form": "LLWWW",
          "all": {
            "played": 16,
            "wins": 7,
            "draws": 4,
            "losses": 5,
            "goalsFor": 23,
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
            "played": 4,
            "wins": 2,
            "draws": 0,
            "losses": 2,
            "goalsFor": 5,
            "goalsAgainst": 5
          }
        },
        {
          "teamId": 2753,
          "team": "Asan Mugunghwa",
          "rank": 7,
          "points": 24,
          "goalsDiff": 5,
          "form": "DWDWD",
          "all": {
            "played": 16,
            "wins": 6,
            "draws": 6,
            "losses": 4,
            "goalsFor": 24,
            "goalsAgainst": 19
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
            "played": 7,
            "wins": 2,
            "draws": 3,
            "losses": 2,
            "goalsFor": 8,
            "goalsAgainst": 6
          }
        },
        {
          "teamId": 7078,
          "team": "Gimpo Citizen",
          "rank": 8,
          "points": 24,
          "goalsDiff": 1,
          "form": "LLDWW",
          "all": {
            "played": 16,
            "wins": 6,
            "draws": 6,
            "losses": 4,
            "goalsFor": 19,
            "goalsAgainst": 18
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
          "points": 20,
          "goalsDiff": -5,
          "form": "DWDLW",
          "all": {
            "played": 16,
            "wins": 5,
            "draws": 5,
            "losses": 6,
            "goalsFor": 20,
            "goalsAgainst": 25
          },
          "home": {
            "played": 9,
            "wins": 4,
            "draws": 2,
            "losses": 3,
            "goalsFor": 14,
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
          "teamId": 7060,
          "team": "Cheonan City",
          "rank": 10,
          "points": 19,
          "goalsDiff": 0,
          "form": "LLDWL",
          "all": {
            "played": 16,
            "wins": 4,
            "draws": 7,
            "losses": 5,
            "goalsFor": 19,
            "goalsAgainst": 19
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
            "played": 7,
            "wins": 2,
            "draws": 2,
            "losses": 3,
            "goalsFor": 12,
            "goalsAgainst": 12
          }
        },
        {
          "teamId": 9171,
          "team": "Yongin City",
          "rank": 11,
          "points": 17,
          "goalsDiff": -3,
          "form": "DWDDD",
          "all": {
            "played": 16,
            "wins": 3,
            "draws": 8,
            "losses": 5,
            "goalsFor": 20,
            "goalsAgainst": 23
          },
          "home": {
            "played": 9,
            "wins": 1,
            "draws": 5,
            "losses": 3,
            "goalsFor": 12,
            "goalsAgainst": 13
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
          "rank": 12,
          "points": 17,
          "goalsDiff": -5,
          "form": "WLLLL",
          "all": {
            "played": 16,
            "wins": 5,
            "draws": 2,
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
            "played": 8,
            "wins": 3,
            "draws": 1,
            "losses": 4,
            "goalsFor": 9,
            "goalsAgainst": 12
          }
        },
        {
          "teamId": 2757,
          "team": "Seongnam FC",
          "rank": 13,
          "points": 17,
          "goalsDiff": -2,
          "form": "LLDDL",
          "all": {
            "played": 16,
            "wins": 3,
            "draws": 8,
            "losses": 5,
            "goalsFor": 16,
            "goalsAgainst": 18
          },
          "home": {
            "played": 8,
            "wins": 1,
            "draws": 5,
            "losses": 2,
            "goalsFor": 6,
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
          "teamId": 7061,
          "team": "Cheongju",
          "rank": 14,
          "points": 14,
          "goalsDiff": -8,
          "form": "DLWLD",
          "all": {
            "played": 16,
            "wins": 1,
            "draws": 11,
            "losses": 4,
            "goalsFor": 19,
            "goalsAgainst": 27
          },
          "home": {
            "played": 8,
            "wins": 0,
            "draws": 4,
            "losses": 4,
            "goalsFor": 8,
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
          "goalsDiff": -12,
          "form": "WLLLL",
          "all": {
            "played": 16,
            "wins": 4,
            "draws": 2,
            "losses": 10,
            "goalsFor": 17,
            "goalsAgainst": 29
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
            "played": 5,
            "wins": 2,
            "draws": 1,
            "losses": 2,
            "goalsFor": 6,
            "goalsAgainst": 7
          }
        },
        {
          "teamId": 2760,
          "team": "Jeonnam Dragons",
          "rank": 16,
          "points": 9,
          "goalsDiff": -13,
          "form": "LDDLL",
          "all": {
            "played": 16,
            "wins": 1,
            "draws": 6,
            "losses": 9,
            "goalsFor": 18,
            "goalsAgainst": 31
          },
          "home": {
            "played": 4,
            "wins": 0,
            "draws": 2,
            "losses": 2,
            "goalsFor": 5,
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
          "teamId": 2756,
          "team": "Suwon City FC",
          "form": "WWWWLDLDWDWLDDWW",
          "all": {
            "played": 16,
            "wins": 8,
            "draws": 5,
            "losses": 3,
            "goalsFor": 34,
            "goalsAgainst": 21
          },
          "home": {
            "played": 7,
            "wins": 4,
            "draws": 3,
            "losses": 0,
            "goalsFor": 16,
            "goalsAgainst": 6
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
          "form": "LWLDWWWWLWLDWWLW",
          "all": {
            "played": 16,
            "wins": 9,
            "draws": 2,
            "losses": 5,
            "goalsFor": 28,
            "goalsAgainst": 19
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
            "played": 8,
            "wins": 5,
            "draws": 1,
            "losses": 2,
            "goalsFor": 13,
            "goalsAgainst": 8
          }
        },
        {
          "teamId": 2757,
          "team": "Seongnam FC",
          "form": "DDWDWLLDWDDLDDLL",
          "all": {
            "played": 16,
            "wins": 3,
            "draws": 8,
            "losses": 5,
            "goalsFor": 16,
            "goalsAgainst": 18
          },
          "home": {
            "played": 8,
            "wins": 1,
            "draws": 5,
            "losses": 2,
            "goalsFor": 6,
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
          "teamId": 2752,
          "team": "Busan I Park",
          "form": "DWWWWWWWLWWLWDDW",
          "all": {
            "played": 16,
            "wins": 11,
            "draws": 3,
            "losses": 2,
            "goalsFor": 35,
            "goalsAgainst": 20
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
            "played": 8,
            "wins": 5,
            "draws": 1,
            "losses": 2,
            "goalsFor": 18,
            "goalsAgainst": 14
          }
        },
        {
          "teamId": 2760,
          "team": "Jeonnam Dragons",
          "form": "WLLLLDLDLDDLLDDL",
          "all": {
            "played": 16,
            "wins": 1,
            "draws": 6,
            "losses": 9,
            "goalsFor": 18,
            "goalsAgainst": 31
          },
          "home": {
            "played": 4,
            "wins": 0,
            "draws": 2,
            "losses": 2,
            "goalsFor": 5,
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
          "teamId": 2753,
          "team": "Asan Mugunghwa",
          "form": "WLLWWDDDLWLDWDWD",
          "all": {
            "played": 16,
            "wins": 6,
            "draws": 6,
            "losses": 4,
            "goalsFor": 24,
            "goalsAgainst": 19
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
            "played": 7,
            "wins": 2,
            "draws": 3,
            "losses": 2,
            "goalsFor": 8,
            "goalsAgainst": 6
          }
        },
        {
          "teamId": 7078,
          "team": "Gimpo Citizen",
          "form": "WWLDDWDDLDWWWDLL",
          "all": {
            "played": 16,
            "wins": 6,
            "draws": 6,
            "losses": 4,
            "goalsFor": 19,
            "goalsAgainst": 18
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
            "played": 14,
            "wins": 6,
            "draws": 5,
            "losses": 3,
            "goalsFor": 17,
            "goalsAgainst": 14
          }
        },
        {
          "teamId": 2747,
          "team": "Daegu FC",
          "form": "WWWLLDDLWDWWDWWW",
          "all": {
            "played": 16,
            "wins": 9,
            "draws": 4,
            "losses": 3,
            "goalsFor": 35,
            "goalsAgainst": 22
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
            "played": 7,
            "wins": 3,
            "draws": 3,
            "losses": 1,
            "goalsFor": 16,
            "goalsAgainst": 10
          }
        }
      ],
      "fixtures": [
        {
          "fixtureId": 1510382,
          "kickoff": "2026-07-18T19:30:00+09:00",
          "status": "NS",
          "homeTeamId": 2756,
          "homeTeam": "Suwon City FC",
          "awayTeamId": 2749,
          "awayTeam": "Seoul E-Land FC",
          "injuriesChecked": true,
          "injuries": [],
          "lineupsChecked": false,
          "lineups": []
        },
        {
          "fixtureId": 1510381,
          "kickoff": "2026-07-18T19:30:00+09:00",
          "status": "NS",
          "homeTeamId": 2757,
          "homeTeam": "Seongnam FC",
          "awayTeamId": 2752,
          "awayTeam": "Busan I Park",
          "injuriesChecked": true,
          "injuries": [],
          "lineupsChecked": false,
          "lineups": []
        },
        {
          "fixtureId": 1510380,
          "kickoff": "2026-07-18T19:30:00+09:00",
          "status": "NS",
          "homeTeamId": 2760,
          "homeTeam": "Jeonnam Dragons",
          "awayTeamId": 2753,
          "awayTeam": "Asan Mugunghwa",
          "injuriesChecked": true,
          "injuries": [],
          "lineupsChecked": false,
          "lineups": []
        },
        {
          "fixtureId": 1510379,
          "kickoff": "2026-07-18T19:30:00+09:00",
          "status": "NS",
          "homeTeamId": 7078,
          "homeTeam": "Gimpo Citizen",
          "awayTeamId": 2747,
          "awayTeam": "Daegu FC",
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
      "date": "2026-07-17",
      "updatedAt": "2026-07-17T10:09:37.742Z",
      "leagues": [
        {
          "key": "UEL",
          "leagueId": 3,
          "season": "2026",
          "standings": [],
          "teams": [
            {
              "teamId": 670,
              "team": "Derry City",
              "form": "LL",
              "all": {
                "played": 2,
                "wins": 0,
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
              "teamId": 2599,
              "team": "Universitatea Cluj",
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
              "teamId": 4358,
              "team": "Aluminij",
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
              "teamId": 702,
              "team": "Vojvodina",
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
              "teamId": 3554,
              "team": "Žilina",
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
              "teamId": 4165,
              "team": "Vestri",
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
            }
          ],
          "fixtures": [
            {
              "fixtureId": 1554448,
              "kickoff": "2026-07-17T02:30:00+09:00",
              "status": "FT",
              "homeTeamId": 670,
              "homeTeam": "Derry City",
              "awayTeamId": 853,
              "awayTeam": "CSKA Sofia",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1554450,
              "kickoff": "2026-07-17T02:30:00+09:00",
              "status": "PEN",
              "homeTeamId": 2599,
              "homeTeam": "Universitatea Cluj",
              "awayTeamId": 572,
              "awayTeam": "Dynamo Kyiv",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1554447,
              "kickoff": "2026-07-17T03:00:00+09:00",
              "status": "FT",
              "homeTeamId": 4358,
              "homeTeam": "Aluminij",
              "awayTeamId": 568,
              "awayTeam": "Sheriff Tiraspol",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1554449,
              "kickoff": "2026-07-17T03:15:00+09:00",
              "status": "FT",
              "homeTeamId": 651,
              "homeTeam": "Ferencvarosi TC",
              "awayTeamId": 702,
              "awayTeam": "Vojvodina",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1554452,
              "kickoff": "2026-07-17T03:30:00+09:00",
              "status": "FT",
              "homeTeamId": 3554,
              "homeTeam": "Žilina",
              "awayTeamId": 608,
              "awayTeam": "HNK Hajduk Split",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1554451,
              "kickoff": "2026-07-17T05:00:00+09:00",
              "status": "FT",
              "homeTeamId": 4165,
              "homeTeam": "Vestri",
              "awayTeamId": 556,
              "awayTeam": "Qarabag",
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
      "date": "2026-07-18",
      "updatedAt": "2026-07-17T19:23:27.472Z",
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
              "points": 36,
              "goalsDiff": 16,
              "form": "DWWWL",
              "all": {
                "played": 17,
                "wins": 11,
                "draws": 3,
                "losses": 3,
                "goalsFor": 28,
                "goalsAgainst": 12
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
                "played": 9,
                "wins": 7,
                "draws": 1,
                "losses": 1,
                "goalsFor": 16,
                "goalsAgainst": 8
              }
            },
            {
              "teamId": 2762,
              "team": "Jeonbuk Motors",
              "rank": 2,
              "points": 29,
              "goalsDiff": 10,
              "form": "WLWDD",
              "all": {
                "played": 17,
                "wins": 8,
                "draws": 5,
                "losses": 4,
                "goalsFor": 25,
                "goalsAgainst": 15
              },
              "home": {
                "played": 8,
                "wins": 5,
                "draws": 0,
                "losses": 3,
                "goalsFor": 16,
                "goalsAgainst": 10
              },
              "away": {
                "played": 9,
                "wins": 3,
                "draws": 5,
                "losses": 1,
                "goalsFor": 9,
                "goalsAgainst": 5
              }
            },
            {
              "teamId": 2746,
              "team": "Gangwon FC",
              "rank": 3,
              "points": 28,
              "goalsDiff": 10,
              "form": "DWWWD",
              "all": {
                "played": 17,
                "wins": 7,
                "draws": 7,
                "losses": 3,
                "goalsFor": 21,
                "goalsAgainst": 11
              },
              "home": {
                "played": 8,
                "wins": 3,
                "draws": 4,
                "losses": 1,
                "goalsFor": 12,
                "goalsAgainst": 6
              },
              "away": {
                "played": 9,
                "wins": 4,
                "draws": 3,
                "losses": 2,
                "goalsFor": 9,
                "goalsAgainst": 5
              }
            },
            {
              "teamId": 2764,
              "team": "Pohang Steelers",
              "rank": 4,
              "points": 28,
              "goalsDiff": 4,
              "form": "WWLWW",
              "all": {
                "played": 17,
                "wins": 8,
                "draws": 4,
                "losses": 5,
                "goalsFor": 18,
                "goalsAgainst": 14
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
                "played": 9,
                "wins": 5,
                "draws": 2,
                "losses": 2,
                "goalsFor": 14,
                "goalsAgainst": 9
              }
            },
            {
              "teamId": 2767,
              "team": "Ulsan Hyundai FC",
              "rank": 5,
              "points": 27,
              "goalsDiff": 0,
              "form": "LDLWW",
              "all": {
                "played": 17,
                "wins": 8,
                "draws": 3,
                "losses": 6,
                "goalsFor": 24,
                "goalsAgainst": 24
              },
              "home": {
                "played": 9,
                "wins": 4,
                "draws": 1,
                "losses": 4,
                "goalsFor": 14,
                "goalsAgainst": 15
              },
              "away": {
                "played": 8,
                "wins": 4,
                "draws": 2,
                "losses": 2,
                "goalsFor": 10,
                "goalsAgainst": 9
              }
            },
            {
              "teamId": 2748,
              "team": "FC Anyang",
              "rank": 6,
              "points": 23,
              "goalsDiff": 3,
              "form": "WLWDD",
              "all": {
                "played": 17,
                "wins": 5,
                "draws": 8,
                "losses": 4,
                "goalsFor": 22,
                "goalsAgainst": 19
              },
              "home": {
                "played": 8,
                "wins": 1,
                "draws": 4,
                "losses": 3,
                "goalsFor": 9,
                "goalsAgainst": 11
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
              "teamId": 2763,
              "team": "Incheon United",
              "rank": 7,
              "points": 21,
              "goalsDiff": 2,
              "form": "LLWLW",
              "all": {
                "played": 17,
                "wins": 6,
                "draws": 3,
                "losses": 8,
                "goalsFor": 21,
                "goalsAgainst": 19
              },
              "home": {
                "played": 9,
                "wins": 3,
                "draws": 0,
                "losses": 6,
                "goalsFor": 10,
                "goalsAgainst": 11
              },
              "away": {
                "played": 8,
                "wins": 3,
                "draws": 3,
                "losses": 2,
                "goalsFor": 11,
                "goalsAgainst": 8
              }
            },
            {
              "teamId": 2761,
              "team": "Jeju United FC",
              "rank": 8,
              "points": 20,
              "goalsDiff": -3,
              "form": "DDLLW",
              "all": {
                "played": 17,
                "wins": 5,
                "draws": 5,
                "losses": 7,
                "goalsFor": 14,
                "goalsAgainst": 17
              },
              "home": {
                "played": 9,
                "wins": 2,
                "draws": 3,
                "losses": 4,
                "goalsFor": 6,
                "goalsAgainst": 10
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
              "teamId": 2745,
              "team": "Bucheon FC 1995",
              "rank": 9,
              "points": 19,
              "goalsDiff": -4,
              "form": "DDWDL",
              "all": {
                "played": 17,
                "wins": 4,
                "draws": 7,
                "losses": 6,
                "goalsFor": 14,
                "goalsAgainst": 18
              },
              "home": {
                "played": 8,
                "wins": 1,
                "draws": 4,
                "losses": 3,
                "goalsFor": 6,
                "goalsAgainst": 8
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
              "teamId": 2750,
              "team": "Daejeon Citizen",
              "rank": 10,
              "points": 18,
              "goalsDiff": 1,
              "form": "DDLLL",
              "all": {
                "played": 17,
                "wins": 4,
                "draws": 6,
                "losses": 7,
                "goalsFor": 19,
                "goalsAgainst": 18
              },
              "home": {
                "played": 9,
                "wins": 0,
                "draws": 4,
                "losses": 5,
                "goalsFor": 5,
                "goalsAgainst": 12
              },
              "away": {
                "played": 8,
                "wins": 4,
                "draws": 2,
                "losses": 2,
                "goalsFor": 14,
                "goalsAgainst": 6
              }
            },
            {
              "teamId": 2768,
              "team": "Gimcheon Sangmu FC",
              "rank": 11,
              "points": 16,
              "goalsDiff": -6,
              "form": "DDLDL",
              "all": {
                "played": 17,
                "wins": 2,
                "draws": 10,
                "losses": 5,
                "goalsFor": 17,
                "goalsAgainst": 23
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
                "played": 8,
                "wins": 2,
                "draws": 4,
                "losses": 2,
                "goalsFor": 10,
                "goalsAgainst": 9
              }
            },
            {
              "teamId": 2759,
              "team": "Gwangju FC",
              "rank": 12,
              "points": 8,
              "goalsDiff": -33,
              "form": "LDLLD",
              "all": {
                "played": 17,
                "wins": 1,
                "draws": 5,
                "losses": 11,
                "goalsFor": 8,
                "goalsAgainst": 41
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
                "played": 8,
                "wins": 0,
                "draws": 2,
                "losses": 6,
                "goalsFor": 2,
                "goalsAgainst": 23
              }
            }
          ],
          "teams": [
            {
              "teamId": 2746,
              "team": "Gangwon FC",
              "form": "LDDDLWWDWLWDDWWWD",
              "all": {
                "played": 17,
                "wins": 7,
                "draws": 7,
                "losses": 3,
                "goalsFor": 21,
                "goalsAgainst": 11
              },
              "home": {
                "played": 8,
                "wins": 3,
                "draws": 4,
                "losses": 1,
                "goalsFor": 12,
                "goalsAgainst": 6
              },
              "away": {
                "played": 9,
                "wins": 4,
                "draws": 3,
                "losses": 2,
                "goalsFor": 9,
                "goalsAgainst": 5
              }
            },
            {
              "teamId": 2768,
              "team": "Gimcheon Sangmu FC",
              "form": "DDDDDLDDLWWLLDLDD",
              "all": {
                "played": 17,
                "wins": 2,
                "draws": 10,
                "losses": 5,
                "goalsFor": 17,
                "goalsAgainst": 23
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
                "played": 8,
                "wins": 2,
                "draws": 4,
                "losses": 2,
                "goalsFor": 10,
                "goalsAgainst": 9
              }
            },
            {
              "teamId": 2750,
              "team": "Daejeon Citizen",
              "form": "DDDWLLLWLWWDLLLDD",
              "all": {
                "played": 17,
                "wins": 4,
                "draws": 6,
                "losses": 7,
                "goalsFor": 19,
                "goalsAgainst": 18
              },
              "home": {
                "played": 9,
                "wins": 0,
                "draws": 4,
                "losses": 5,
                "goalsFor": 5,
                "goalsAgainst": 12
              },
              "away": {
                "played": 8,
                "wins": 4,
                "draws": 2,
                "losses": 2,
                "goalsFor": 14,
                "goalsAgainst": 6
              }
            },
            {
              "teamId": 2767,
              "team": "Ulsan Hyundai FC",
              "form": "WWWDLWLWDLLWWWLDL",
              "all": {
                "played": 17,
                "wins": 8,
                "draws": 3,
                "losses": 6,
                "goalsFor": 24,
                "goalsAgainst": 24
              },
              "home": {
                "played": 9,
                "wins": 4,
                "draws": 1,
                "losses": 4,
                "goalsFor": 14,
                "goalsAgainst": 15
              },
              "away": {
                "played": 8,
                "wins": 4,
                "draws": 2,
                "losses": 2,
                "goalsFor": 10,
                "goalsAgainst": 9
              }
            },
            {
              "teamId": 2761,
              "team": "Jeju United FC",
              "form": "DLLLDWWDWLLWWLLDD",
              "all": {
                "played": 17,
                "wins": 5,
                "draws": 5,
                "losses": 7,
                "goalsFor": 14,
                "goalsAgainst": 17
              },
              "home": {
                "played": 9,
                "wins": 2,
                "draws": 3,
                "losses": 4,
                "goalsFor": 6,
                "goalsAgainst": 10
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
              "teamId": 2764,
              "team": "Pohang Steelers",
              "form": "DDLDWWLLWLWDWWLWW",
              "all": {
                "played": 17,
                "wins": 8,
                "draws": 4,
                "losses": 5,
                "goalsFor": 18,
                "goalsAgainst": 14
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
                "played": 9,
                "wins": 5,
                "draws": 2,
                "losses": 2,
                "goalsFor": 14,
                "goalsAgainst": 9
              }
            },
            {
              "teamId": 2763,
              "team": "Incheon United",
              "form": "LLDLWWLDWWLDWLWLL",
              "all": {
                "played": 17,
                "wins": 6,
                "draws": 3,
                "losses": 8,
                "goalsFor": 21,
                "goalsAgainst": 19
              },
              "home": {
                "played": 9,
                "wins": 3,
                "draws": 0,
                "losses": 6,
                "goalsFor": 10,
                "goalsAgainst": 11
              },
              "away": {
                "played": 8,
                "wins": 3,
                "draws": 3,
                "losses": 2,
                "goalsFor": 11,
                "goalsAgainst": 8
              }
            },
            {
              "teamId": 2762,
              "team": "Jeonbuk Motors",
              "form": "LDDWWWLDLWWWDDWLW",
              "all": {
                "played": 17,
                "wins": 8,
                "draws": 5,
                "losses": 4,
                "goalsFor": 25,
                "goalsAgainst": 15
              },
              "home": {
                "played": 8,
                "wins": 5,
                "draws": 0,
                "losses": 3,
                "goalsFor": 16,
                "goalsAgainst": 10
              },
              "away": {
                "played": 9,
                "wins": 3,
                "draws": 5,
                "losses": 1,
                "goalsFor": 9,
                "goalsAgainst": 5
              }
            }
          ],
          "fixtures": [
            {
              "fixtureId": 1506999,
              "kickoff": "2026-07-18T19:30:00+09:00",
              "status": "NS",
              "homeTeamId": 2746,
              "homeTeam": "Gangwon FC",
              "awayTeamId": 2768,
              "awayTeam": "Gimcheon Sangmu FC",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1506998,
              "kickoff": "2026-07-18T19:30:00+09:00",
              "status": "NS",
              "homeTeamId": 2750,
              "homeTeam": "Daejeon Citizen",
              "awayTeamId": 2767,
              "awayTeam": "Ulsan Hyundai FC",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1507001,
              "kickoff": "2026-07-18T19:30:00+09:00",
              "status": "NS",
              "homeTeamId": 2761,
              "homeTeam": "Jeju United FC",
              "awayTeamId": 2764,
              "awayTeam": "Pohang Steelers",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1507000,
              "kickoff": "2026-07-18T19:30:00+09:00",
              "status": "NS",
              "homeTeamId": 2763,
              "homeTeam": "Incheon United",
              "awayTeamId": 2762,
              "awayTeam": "Jeonbuk Motors",
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
              "goalsDiff": 15,
              "form": "WDDWL",
              "all": {
                "played": 16,
                "wins": 11,
                "draws": 3,
                "losses": 2,
                "goalsFor": 35,
                "goalsAgainst": 20
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
                "played": 8,
                "wins": 5,
                "draws": 1,
                "losses": 2,
                "goalsFor": 18,
                "goalsAgainst": 14
              }
            },
            {
              "teamId": 2765,
              "team": "Suwon Bluewings",
              "rank": 2,
              "points": 32,
              "goalsDiff": 8,
              "form": "LWWLW",
              "all": {
                "played": 16,
                "wins": 10,
                "draws": 2,
                "losses": 4,
                "goalsFor": 22,
                "goalsAgainst": 14
              },
              "home": {
                "played": 8,
                "wins": 5,
                "draws": 2,
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
              "points": 31,
              "goalsDiff": 13,
              "form": "WWWDW",
              "all": {
                "played": 16,
                "wins": 9,
                "draws": 4,
                "losses": 3,
                "goalsFor": 35,
                "goalsAgainst": 22
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
                "played": 7,
                "wins": 3,
                "draws": 3,
                "losses": 1,
                "goalsFor": 16,
                "goalsAgainst": 10
              }
            },
            {
              "teamId": 2756,
              "team": "Suwon City FC",
              "rank": 4,
              "points": 29,
              "goalsDiff": 13,
              "form": "WWDDL",
              "all": {
                "played": 16,
                "wins": 8,
                "draws": 5,
                "losses": 3,
                "goalsFor": 34,
                "goalsAgainst": 21
              },
              "home": {
                "played": 7,
                "wins": 4,
                "draws": 3,
                "losses": 0,
                "goalsFor": 16,
                "goalsAgainst": 6
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
              "points": 29,
              "goalsDiff": 9,
              "form": "WLWWD",
              "all": {
                "played": 16,
                "wins": 9,
                "draws": 2,
                "losses": 5,
                "goalsFor": 28,
                "goalsAgainst": 19
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
                "played": 8,
                "wins": 5,
                "draws": 1,
                "losses": 2,
                "goalsFor": 13,
                "goalsAgainst": 8
              }
            },
            {
              "teamId": 7087,
              "team": "Hwaseong",
              "rank": 6,
              "points": 25,
              "goalsDiff": 4,
              "form": "LLWWW",
              "all": {
                "played": 16,
                "wins": 7,
                "draws": 4,
                "losses": 5,
                "goalsFor": 23,
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
                "played": 4,
                "wins": 2,
                "draws": 0,
                "losses": 2,
                "goalsFor": 5,
                "goalsAgainst": 5
              }
            },
            {
              "teamId": 2753,
              "team": "Asan Mugunghwa",
              "rank": 7,
              "points": 24,
              "goalsDiff": 5,
              "form": "DWDWD",
              "all": {
                "played": 16,
                "wins": 6,
                "draws": 6,
                "losses": 4,
                "goalsFor": 24,
                "goalsAgainst": 19
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
                "played": 7,
                "wins": 2,
                "draws": 3,
                "losses": 2,
                "goalsFor": 8,
                "goalsAgainst": 6
              }
            },
            {
              "teamId": 7078,
              "team": "Gimpo Citizen",
              "rank": 8,
              "points": 24,
              "goalsDiff": 1,
              "form": "LLDWW",
              "all": {
                "played": 16,
                "wins": 6,
                "draws": 6,
                "losses": 4,
                "goalsFor": 19,
                "goalsAgainst": 18
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
              "points": 20,
              "goalsDiff": -5,
              "form": "DWDLW",
              "all": {
                "played": 16,
                "wins": 5,
                "draws": 5,
                "losses": 6,
                "goalsFor": 20,
                "goalsAgainst": 25
              },
              "home": {
                "played": 9,
                "wins": 4,
                "draws": 2,
                "losses": 3,
                "goalsFor": 14,
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
              "teamId": 7060,
              "team": "Cheonan City",
              "rank": 10,
              "points": 19,
              "goalsDiff": 0,
              "form": "LLDWL",
              "all": {
                "played": 16,
                "wins": 4,
                "draws": 7,
                "losses": 5,
                "goalsFor": 19,
                "goalsAgainst": 19
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
                "played": 7,
                "wins": 2,
                "draws": 2,
                "losses": 3,
                "goalsFor": 12,
                "goalsAgainst": 12
              }
            },
            {
              "teamId": 9171,
              "team": "Yongin City",
              "rank": 11,
              "points": 17,
              "goalsDiff": -3,
              "form": "DWDDD",
              "all": {
                "played": 16,
                "wins": 3,
                "draws": 8,
                "losses": 5,
                "goalsFor": 20,
                "goalsAgainst": 23
              },
              "home": {
                "played": 9,
                "wins": 1,
                "draws": 5,
                "losses": 3,
                "goalsFor": 12,
                "goalsAgainst": 13
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
              "rank": 12,
              "points": 17,
              "goalsDiff": -5,
              "form": "WLLLL",
              "all": {
                "played": 16,
                "wins": 5,
                "draws": 2,
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
                "played": 8,
                "wins": 3,
                "draws": 1,
                "losses": 4,
                "goalsFor": 9,
                "goalsAgainst": 12
              }
            },
            {
              "teamId": 2757,
              "team": "Seongnam FC",
              "rank": 13,
              "points": 17,
              "goalsDiff": -2,
              "form": "LLDDL",
              "all": {
                "played": 16,
                "wins": 3,
                "draws": 8,
                "losses": 5,
                "goalsFor": 16,
                "goalsAgainst": 18
              },
              "home": {
                "played": 8,
                "wins": 1,
                "draws": 5,
                "losses": 2,
                "goalsFor": 6,
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
              "teamId": 7061,
              "team": "Cheongju",
              "rank": 14,
              "points": 14,
              "goalsDiff": -8,
              "form": "DLWLD",
              "all": {
                "played": 16,
                "wins": 1,
                "draws": 11,
                "losses": 4,
                "goalsFor": 19,
                "goalsAgainst": 27
              },
              "home": {
                "played": 8,
                "wins": 0,
                "draws": 4,
                "losses": 4,
                "goalsFor": 8,
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
              "goalsDiff": -12,
              "form": "WLLLL",
              "all": {
                "played": 16,
                "wins": 4,
                "draws": 2,
                "losses": 10,
                "goalsFor": 17,
                "goalsAgainst": 29
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
                "played": 5,
                "wins": 2,
                "draws": 1,
                "losses": 2,
                "goalsFor": 6,
                "goalsAgainst": 7
              }
            },
            {
              "teamId": 2760,
              "team": "Jeonnam Dragons",
              "rank": 16,
              "points": 9,
              "goalsDiff": -13,
              "form": "LDDLL",
              "all": {
                "played": 16,
                "wins": 1,
                "draws": 6,
                "losses": 9,
                "goalsFor": 18,
                "goalsAgainst": 31
              },
              "home": {
                "played": 4,
                "wins": 0,
                "draws": 2,
                "losses": 2,
                "goalsFor": 5,
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
              "teamId": 2756,
              "team": "Suwon City FC",
              "form": "WWWWLDLDWDWLDDWW",
              "all": {
                "played": 16,
                "wins": 8,
                "draws": 5,
                "losses": 3,
                "goalsFor": 34,
                "goalsAgainst": 21
              },
              "home": {
                "played": 7,
                "wins": 4,
                "draws": 3,
                "losses": 0,
                "goalsFor": 16,
                "goalsAgainst": 6
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
              "form": "LWLDWWWWLWLDWWLW",
              "all": {
                "played": 16,
                "wins": 9,
                "draws": 2,
                "losses": 5,
                "goalsFor": 28,
                "goalsAgainst": 19
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
                "played": 8,
                "wins": 5,
                "draws": 1,
                "losses": 2,
                "goalsFor": 13,
                "goalsAgainst": 8
              }
            },
            {
              "teamId": 2757,
              "team": "Seongnam FC",
              "form": "DDWDWLLDWDDLDDLL",
              "all": {
                "played": 16,
                "wins": 3,
                "draws": 8,
                "losses": 5,
                "goalsFor": 16,
                "goalsAgainst": 18
              },
              "home": {
                "played": 8,
                "wins": 1,
                "draws": 5,
                "losses": 2,
                "goalsFor": 6,
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
              "teamId": 2752,
              "team": "Busan I Park",
              "form": "DWWWWWWWLWWLWDDW",
              "all": {
                "played": 16,
                "wins": 11,
                "draws": 3,
                "losses": 2,
                "goalsFor": 35,
                "goalsAgainst": 20
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
                "played": 8,
                "wins": 5,
                "draws": 1,
                "losses": 2,
                "goalsFor": 18,
                "goalsAgainst": 14
              }
            },
            {
              "teamId": 2760,
              "team": "Jeonnam Dragons",
              "form": "WLLLLDLDLDDLLDDL",
              "all": {
                "played": 16,
                "wins": 1,
                "draws": 6,
                "losses": 9,
                "goalsFor": 18,
                "goalsAgainst": 31
              },
              "home": {
                "played": 4,
                "wins": 0,
                "draws": 2,
                "losses": 2,
                "goalsFor": 5,
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
              "teamId": 2753,
              "team": "Asan Mugunghwa",
              "form": "WLLWWDDDLWLDWDWD",
              "all": {
                "played": 16,
                "wins": 6,
                "draws": 6,
                "losses": 4,
                "goalsFor": 24,
                "goalsAgainst": 19
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
                "played": 7,
                "wins": 2,
                "draws": 3,
                "losses": 2,
                "goalsFor": 8,
                "goalsAgainst": 6
              }
            },
            {
              "teamId": 7078,
              "team": "Gimpo Citizen",
              "form": "WWLDDWDDLDWWWDLL",
              "all": {
                "played": 16,
                "wins": 6,
                "draws": 6,
                "losses": 4,
                "goalsFor": 19,
                "goalsAgainst": 18
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
                "played": 14,
                "wins": 6,
                "draws": 5,
                "losses": 3,
                "goalsFor": 17,
                "goalsAgainst": 14
              }
            },
            {
              "teamId": 2747,
              "team": "Daegu FC",
              "form": "WWWLLDDLWDWWDWWW",
              "all": {
                "played": 16,
                "wins": 9,
                "draws": 4,
                "losses": 3,
                "goalsFor": 35,
                "goalsAgainst": 22
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
                "played": 7,
                "wins": 3,
                "draws": 3,
                "losses": 1,
                "goalsFor": 16,
                "goalsAgainst": 10
              }
            }
          ],
          "fixtures": [
            {
              "fixtureId": 1510382,
              "kickoff": "2026-07-18T19:30:00+09:00",
              "status": "NS",
              "homeTeamId": 2756,
              "homeTeam": "Suwon City FC",
              "awayTeamId": 2749,
              "awayTeam": "Seoul E-Land FC",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1510381,
              "kickoff": "2026-07-18T19:30:00+09:00",
              "status": "NS",
              "homeTeamId": 2757,
              "homeTeam": "Seongnam FC",
              "awayTeamId": 2752,
              "awayTeam": "Busan I Park",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1510380,
              "kickoff": "2026-07-18T19:30:00+09:00",
              "status": "NS",
              "homeTeamId": 2760,
              "homeTeam": "Jeonnam Dragons",
              "awayTeamId": 2753,
              "awayTeam": "Asan Mugunghwa",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1510379,
              "kickoff": "2026-07-18T19:30:00+09:00",
              "status": "NS",
              "homeTeamId": 7078,
              "homeTeam": "Gimpo Citizen",
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
      "date": "2026-07-19",
      "updatedAt": "2026-07-17T10:09:47.406Z",
      "leagues": [
        {
          "key": "WORLDCUP",
          "leagueId": 1,
          "season": "2026",
          "standings": [
            {
              "teamId": 16,
              "team": "Mexico",
              "rank": 1,
              "points": 9,
              "goalsDiff": 6,
              "form": "LWWWW",
              "all": {
                "played": 3,
                "wins": 3,
                "draws": 0,
                "losses": 0,
                "goalsFor": 6,
                "goalsAgainst": 0
              },
              "home": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "away": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 1531,
              "team": "South Africa",
              "rank": 2,
              "points": 4,
              "goalsDiff": -1,
              "form": "LWDL",
              "all": {
                "played": 3,
                "wins": 1,
                "draws": 1,
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
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 17,
              "team": "South Korea",
              "rank": 3,
              "points": 3,
              "goalsDiff": -1,
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
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "away": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 770,
              "team": "Czechia",
              "rank": 4,
              "points": 1,
              "goalsDiff": -4,
              "form": "LDL",
              "all": {
                "played": 3,
                "wins": 0,
                "draws": 1,
                "losses": 2,
                "goalsFor": 2,
                "goalsAgainst": 6
              },
              "home": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "away": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 15,
              "team": "Switzerland",
              "rank": 1,
              "points": 7,
              "goalsDiff": 4,
              "form": "LWWWW",
              "all": {
                "played": 3,
                "wins": 2,
                "draws": 1,
                "losses": 0,
                "goalsFor": 7,
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
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 5529,
              "team": "Canada",
              "rank": 2,
              "points": 4,
              "goalsDiff": 5,
              "form": "LWLWD",
              "all": {
                "played": 3,
                "wins": 1,
                "draws": 1,
                "losses": 1,
                "goalsFor": 8,
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
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 1113,
              "team": "Bosnia & Herzegovina",
              "rank": 3,
              "points": 4,
              "goalsDiff": -1,
              "form": "LWLD",
              "all": {
                "played": 3,
                "wins": 1,
                "draws": 1,
                "losses": 1,
                "goalsFor": 5,
                "goalsAgainst": 6
              },
              "home": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "away": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 1569,
              "team": "Qatar",
              "rank": 4,
              "points": 1,
              "goalsDiff": -8,
              "form": "LLD",
              "all": {
                "played": 3,
                "wins": 0,
                "draws": 1,
                "losses": 2,
                "goalsFor": 2,
                "goalsAgainst": 10
              },
              "home": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "away": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 6,
              "team": "Brazil",
              "rank": 1,
              "points": 7,
              "goalsDiff": 6,
              "form": "LWWWD",
              "all": {
                "played": 3,
                "wins": 2,
                "draws": 1,
                "losses": 0,
                "goalsFor": 7,
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
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 31,
              "team": "Morocco",
              "rank": 2,
              "points": 7,
              "goalsDiff": 3,
              "form": "LWWWW",
              "all": {
                "played": 3,
                "wins": 2,
                "draws": 1,
                "losses": 0,
                "goalsFor": 6,
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
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 1108,
              "team": "Scotland",
              "rank": 3,
              "points": 3,
              "goalsDiff": -3,
              "form": "LLW",
              "all": {
                "played": 3,
                "wins": 1,
                "draws": 0,
                "losses": 2,
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
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 2386,
              "team": "Haiti",
              "rank": 4,
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
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "away": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 2384,
              "team": "USA",
              "rank": 1,
              "points": 6,
              "goalsDiff": 4,
              "form": "LWLWW",
              "all": {
                "played": 3,
                "wins": 2,
                "draws": 0,
                "losses": 1,
                "goalsFor": 8,
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
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 20,
              "team": "Australia",
              "rank": 2,
              "points": 4,
              "goalsDiff": 0,
              "form": "LDLW",
              "all": {
                "played": 3,
                "wins": 1,
                "draws": 1,
                "losses": 1,
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
              "rank": 3,
              "points": 4,
              "goalsDiff": -2,
              "form": "LWDWL",
              "all": {
                "played": 3,
                "wins": 1,
                "draws": 1,
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
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 777,
              "team": "Türkiye",
              "rank": 4,
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
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "away": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 25,
              "team": "Germany",
              "rank": 1,
              "points": 6,
              "goalsDiff": 6,
              "form": "LLWW",
              "all": {
                "played": 3,
                "wins": 2,
                "draws": 0,
                "losses": 1,
                "goalsFor": 10,
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
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 1501,
              "team": "Ivory Coast",
              "rank": 2,
              "points": 6,
              "goalsDiff": 2,
              "form": "LWLW",
              "all": {
                "played": 3,
                "wins": 2,
                "draws": 0,
                "losses": 1,
                "goalsFor": 4,
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
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 2382,
              "team": "Ecuador",
              "rank": 3,
              "points": 4,
              "goalsDiff": 0,
              "form": "LWDL",
              "all": {
                "played": 3,
                "wins": 1,
                "draws": 1,
                "losses": 1,
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
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 5530,
              "team": "Curaçao",
              "rank": 4,
              "points": 1,
              "goalsDiff": -8,
              "form": "LDL",
              "all": {
                "played": 3,
                "wins": 0,
                "draws": 1,
                "losses": 2,
                "goalsFor": 1,
                "goalsAgainst": 9
              },
              "home": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "away": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 1118,
              "team": "Netherlands",
              "rank": 1,
              "points": 7,
              "goalsDiff": 6,
              "form": "LWWD",
              "all": {
                "played": 3,
                "wins": 2,
                "draws": 1,
                "losses": 0,
                "goalsFor": 10,
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
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 12,
              "team": "Japan",
              "rank": 2,
              "points": 5,
              "goalsDiff": 4,
              "form": "LDWD",
              "all": {
                "played": 3,
                "wins": 1,
                "draws": 2,
                "losses": 0,
                "goalsFor": 7,
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
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 5,
              "team": "Sweden",
              "rank": 3,
              "points": 4,
              "goalsDiff": 0,
              "form": "LDLW",
              "all": {
                "played": 3,
                "wins": 1,
                "draws": 1,
                "losses": 1,
                "goalsFor": 7,
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
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 28,
              "team": "Tunisia",
              "rank": 4,
              "points": 0,
              "goalsDiff": -10,
              "form": "LLL",
              "all": {
                "played": 3,
                "wins": 0,
                "draws": 0,
                "losses": 3,
                "goalsFor": 2,
                "goalsAgainst": 12
              },
              "home": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "away": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 1,
              "team": "Belgium",
              "rank": 1,
              "points": 5,
              "goalsDiff": 4,
              "form": "LWWWD",
              "all": {
                "played": 3,
                "wins": 1,
                "draws": 2,
                "losses": 0,
                "goalsFor": 6,
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
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 32,
              "team": "Egypt",
              "rank": 2,
              "points": 5,
              "goalsDiff": 2,
              "form": "LWDWD",
              "all": {
                "played": 3,
                "wins": 1,
                "draws": 2,
                "losses": 0,
                "goalsFor": 5,
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
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 22,
              "team": "Iran",
              "rank": 3,
              "points": 3,
              "goalsDiff": 0,
              "form": "DDD",
              "all": {
                "played": 3,
                "wins": 0,
                "draws": 3,
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
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 4673,
              "team": "New Zealand",
              "rank": 4,
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
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "away": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 9,
              "team": "Spain",
              "rank": 1,
              "points": 7,
              "goalsDiff": 5,
              "form": "WWWWW",
              "all": {
                "played": 3,
                "wins": 2,
                "draws": 1,
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
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 1533,
              "team": "Cape Verde Islands",
              "rank": 2,
              "points": 3,
              "goalsDiff": 0,
              "form": "LDDD",
              "all": {
                "played": 3,
                "wins": 0,
                "draws": 3,
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
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 7,
              "team": "Uruguay",
              "rank": 3,
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
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "away": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 23,
              "team": "Saudi Arabia",
              "rank": 4,
              "points": 2,
              "goalsDiff": -4,
              "form": "DLD",
              "all": {
                "played": 3,
                "wins": 0,
                "draws": 2,
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
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 2,
              "team": "France",
              "rank": 1,
              "points": 9,
              "goalsDiff": 8,
              "form": "LWWWW",
              "all": {
                "played": 3,
                "wins": 3,
                "draws": 0,
                "losses": 0,
                "goalsFor": 10,
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
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 1090,
              "team": "Norway",
              "rank": 2,
              "points": 6,
              "goalsDiff": 1,
              "form": "LWWLW",
              "all": {
                "played": 3,
                "wins": 2,
                "draws": 0,
                "losses": 1,
                "goalsFor": 8,
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
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 13,
              "team": "Senegal",
              "rank": 3,
              "points": 3,
              "goalsDiff": 2,
              "form": "LWLL",
              "all": {
                "played": 3,
                "wins": 1,
                "draws": 0,
                "losses": 2,
                "goalsFor": 8,
                "goalsAgainst": 6
              },
              "home": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "away": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 1567,
              "team": "Iraq",
              "rank": 4,
              "points": 0,
              "goalsDiff": -11,
              "form": "LLL",
              "all": {
                "played": 3,
                "wins": 0,
                "draws": 0,
                "losses": 3,
                "goalsFor": 1,
                "goalsAgainst": 12
              },
              "home": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "away": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 26,
              "team": "Argentina",
              "rank": 1,
              "points": 9,
              "goalsDiff": 7,
              "form": "WWWWW",
              "all": {
                "played": 3,
                "wins": 3,
                "draws": 0,
                "losses": 0,
                "goalsFor": 8,
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
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 775,
              "team": "Austria",
              "rank": 2,
              "points": 4,
              "goalsDiff": 0,
              "form": "LDLW",
              "all": {
                "played": 3,
                "wins": 1,
                "draws": 1,
                "losses": 1,
                "goalsFor": 6,
                "goalsAgainst": 6
              },
              "home": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "away": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 1532,
              "team": "Algeria",
              "rank": 3,
              "points": 4,
              "goalsDiff": -2,
              "form": "LDWL",
              "all": {
                "played": 3,
                "wins": 1,
                "draws": 1,
                "losses": 1,
                "goalsFor": 5,
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
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 1548,
              "team": "Jordan",
              "rank": 4,
              "points": 0,
              "goalsDiff": -5,
              "form": "LLL",
              "all": {
                "played": 3,
                "wins": 0,
                "draws": 0,
                "losses": 3,
                "goalsFor": 3,
                "goalsAgainst": 8
              },
              "home": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "away": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 8,
              "team": "Colombia",
              "rank": 1,
              "points": 7,
              "goalsDiff": 3,
              "form": "LWDWW",
              "all": {
                "played": 3,
                "wins": 2,
                "draws": 1,
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
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 27,
              "team": "Portugal",
              "rank": 2,
              "points": 5,
              "goalsDiff": 5,
              "form": "LWDWD",
              "all": {
                "played": 3,
                "wins": 1,
                "draws": 2,
                "losses": 0,
                "goalsFor": 6,
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
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 1508,
              "team": "Congo DR",
              "rank": 3,
              "points": 4,
              "goalsDiff": 1,
              "form": "LWLD",
              "all": {
                "played": 3,
                "wins": 1,
                "draws": 1,
                "losses": 1,
                "goalsFor": 4,
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
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 1568,
              "team": "Uzbekistan",
              "rank": 4,
              "points": 0,
              "goalsDiff": -9,
              "form": "LLL",
              "all": {
                "played": 3,
                "wins": 0,
                "draws": 0,
                "losses": 3,
                "goalsFor": 2,
                "goalsAgainst": 11
              },
              "home": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "away": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 10,
              "team": "England",
              "rank": 1,
              "points": 7,
              "goalsDiff": 4,
              "form": "LWWWW",
              "all": {
                "played": 3,
                "wins": 2,
                "draws": 1,
                "losses": 0,
                "goalsFor": 6,
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
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 3,
              "team": "Croatia",
              "rank": 2,
              "points": 6,
              "goalsDiff": 0,
              "form": "LWWL",
              "all": {
                "played": 3,
                "wins": 2,
                "draws": 0,
                "losses": 1,
                "goalsFor": 5,
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
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 1504,
              "team": "Ghana",
              "rank": 3,
              "points": 4,
              "goalsDiff": 0,
              "form": "LLDW",
              "all": {
                "played": 3,
                "wins": 1,
                "draws": 1,
                "losses": 1,
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
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 11,
              "team": "Panama",
              "rank": 4,
              "points": 0,
              "goalsDiff": -4,
              "form": "LLL",
              "all": {
                "played": 3,
                "wins": 0,
                "draws": 0,
                "losses": 3,
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
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 1508,
              "team": "Congo DR",
              "rank": 1,
              "points": 4,
              "goalsDiff": 1,
              "form": "LWLD",
              "all": {
                "played": 3,
                "wins": 1,
                "draws": 1,
                "losses": 1,
                "goalsFor": 4,
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
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 5,
              "team": "Sweden",
              "rank": 2,
              "points": 4,
              "goalsDiff": 0,
              "form": "LDLW",
              "all": {
                "played": 3,
                "wins": 1,
                "draws": 1,
                "losses": 1,
                "goalsFor": 7,
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
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 1504,
              "team": "Ghana",
              "rank": 3,
              "points": 4,
              "goalsDiff": 0,
              "form": "LLDW",
              "all": {
                "played": 3,
                "wins": 1,
                "draws": 1,
                "losses": 1,
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
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 2382,
              "team": "Ecuador",
              "rank": 4,
              "points": 4,
              "goalsDiff": 0,
              "form": "LWDL",
              "all": {
                "played": 3,
                "wins": 1,
                "draws": 1,
                "losses": 1,
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
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 1113,
              "team": "Bosnia & Herzegovina",
              "rank": 5,
              "points": 4,
              "goalsDiff": -1,
              "form": "LWLD",
              "all": {
                "played": 3,
                "wins": 1,
                "draws": 1,
                "losses": 1,
                "goalsFor": 5,
                "goalsAgainst": 6
              },
              "home": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "away": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 1532,
              "team": "Algeria",
              "rank": 6,
              "points": 4,
              "goalsDiff": -2,
              "form": "LDWL",
              "all": {
                "played": 3,
                "wins": 1,
                "draws": 1,
                "losses": 1,
                "goalsFor": 5,
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
              "rank": 7,
              "points": 4,
              "goalsDiff": -2,
              "form": "LWDWL",
              "all": {
                "played": 3,
                "wins": 1,
                "draws": 1,
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
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 13,
              "team": "Senegal",
              "rank": 8,
              "points": 3,
              "goalsDiff": 2,
              "form": "LWLL",
              "all": {
                "played": 3,
                "wins": 1,
                "draws": 0,
                "losses": 2,
                "goalsFor": 8,
                "goalsAgainst": 6
              },
              "home": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "away": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 22,
              "team": "Iran",
              "rank": 9,
              "points": 3,
              "goalsDiff": 0,
              "form": "DDD",
              "all": {
                "played": 3,
                "wins": 0,
                "draws": 3,
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
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 17,
              "team": "South Korea",
              "rank": 10,
              "points": 3,
              "goalsDiff": -1,
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
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "away": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 1108,
              "team": "Scotland",
              "rank": 11,
              "points": 3,
              "goalsDiff": -3,
              "form": "LLW",
              "all": {
                "played": 3,
                "wins": 1,
                "draws": 0,
                "losses": 2,
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
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 7,
              "team": "Uruguay",
              "rank": 12,
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
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
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
              "teamId": 2,
              "team": "France",
              "form": "WWWWWWL",
              "all": {
                "played": 7,
                "wins": 6,
                "draws": 0,
                "losses": 1,
                "goalsFor": 16,
                "goalsAgainst": 4
              },
              "home": {
                "played": 5,
                "wins": 4,
                "draws": 0,
                "losses": 1,
                "goalsFor": 11,
                "goalsAgainst": 3
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
              "teamId": 10,
              "team": "England",
              "form": "WDWWWWL",
              "all": {
                "played": 7,
                "wins": 5,
                "draws": 1,
                "losses": 1,
                "goalsFor": 14,
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
                "wins": 3,
                "draws": 0,
                "losses": 0,
                "goalsFor": 7,
                "goalsAgainst": 3
              }
            }
          ],
          "fixtures": [
            {
              "fixtureId": 1591865,
              "kickoff": "2026-07-19T06:00:00+09:00",
              "status": "NS",
              "homeTeamId": 2,
              "homeTeam": "France",
              "awayTeamId": 10,
              "awayTeam": "England",
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
              "points": 36,
              "goalsDiff": 16,
              "form": "DWWWL",
              "all": {
                "played": 17,
                "wins": 11,
                "draws": 3,
                "losses": 3,
                "goalsFor": 28,
                "goalsAgainst": 12
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
                "played": 9,
                "wins": 7,
                "draws": 1,
                "losses": 1,
                "goalsFor": 16,
                "goalsAgainst": 8
              }
            },
            {
              "teamId": 2762,
              "team": "Jeonbuk Motors",
              "rank": 2,
              "points": 29,
              "goalsDiff": 10,
              "form": "WLWDD",
              "all": {
                "played": 17,
                "wins": 8,
                "draws": 5,
                "losses": 4,
                "goalsFor": 25,
                "goalsAgainst": 15
              },
              "home": {
                "played": 8,
                "wins": 5,
                "draws": 0,
                "losses": 3,
                "goalsFor": 16,
                "goalsAgainst": 10
              },
              "away": {
                "played": 9,
                "wins": 3,
                "draws": 5,
                "losses": 1,
                "goalsFor": 9,
                "goalsAgainst": 5
              }
            },
            {
              "teamId": 2746,
              "team": "Gangwon FC",
              "rank": 3,
              "points": 28,
              "goalsDiff": 10,
              "form": "DWWWD",
              "all": {
                "played": 17,
                "wins": 7,
                "draws": 7,
                "losses": 3,
                "goalsFor": 21,
                "goalsAgainst": 11
              },
              "home": {
                "played": 8,
                "wins": 3,
                "draws": 4,
                "losses": 1,
                "goalsFor": 12,
                "goalsAgainst": 6
              },
              "away": {
                "played": 9,
                "wins": 4,
                "draws": 3,
                "losses": 2,
                "goalsFor": 9,
                "goalsAgainst": 5
              }
            },
            {
              "teamId": 2764,
              "team": "Pohang Steelers",
              "rank": 4,
              "points": 28,
              "goalsDiff": 4,
              "form": "WWLWW",
              "all": {
                "played": 17,
                "wins": 8,
                "draws": 4,
                "losses": 5,
                "goalsFor": 18,
                "goalsAgainst": 14
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
                "played": 9,
                "wins": 5,
                "draws": 2,
                "losses": 2,
                "goalsFor": 14,
                "goalsAgainst": 9
              }
            },
            {
              "teamId": 2767,
              "team": "Ulsan Hyundai FC",
              "rank": 5,
              "points": 27,
              "goalsDiff": 0,
              "form": "LDLWW",
              "all": {
                "played": 17,
                "wins": 8,
                "draws": 3,
                "losses": 6,
                "goalsFor": 24,
                "goalsAgainst": 24
              },
              "home": {
                "played": 9,
                "wins": 4,
                "draws": 1,
                "losses": 4,
                "goalsFor": 14,
                "goalsAgainst": 15
              },
              "away": {
                "played": 8,
                "wins": 4,
                "draws": 2,
                "losses": 2,
                "goalsFor": 10,
                "goalsAgainst": 9
              }
            },
            {
              "teamId": 2748,
              "team": "FC Anyang",
              "rank": 6,
              "points": 23,
              "goalsDiff": 3,
              "form": "WLWDD",
              "all": {
                "played": 17,
                "wins": 5,
                "draws": 8,
                "losses": 4,
                "goalsFor": 22,
                "goalsAgainst": 19
              },
              "home": {
                "played": 8,
                "wins": 1,
                "draws": 4,
                "losses": 3,
                "goalsFor": 9,
                "goalsAgainst": 11
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
              "teamId": 2763,
              "team": "Incheon United",
              "rank": 7,
              "points": 21,
              "goalsDiff": 2,
              "form": "LLWLW",
              "all": {
                "played": 17,
                "wins": 6,
                "draws": 3,
                "losses": 8,
                "goalsFor": 21,
                "goalsAgainst": 19
              },
              "home": {
                "played": 9,
                "wins": 3,
                "draws": 0,
                "losses": 6,
                "goalsFor": 10,
                "goalsAgainst": 11
              },
              "away": {
                "played": 8,
                "wins": 3,
                "draws": 3,
                "losses": 2,
                "goalsFor": 11,
                "goalsAgainst": 8
              }
            },
            {
              "teamId": 2761,
              "team": "Jeju United FC",
              "rank": 8,
              "points": 20,
              "goalsDiff": -3,
              "form": "DDLLW",
              "all": {
                "played": 17,
                "wins": 5,
                "draws": 5,
                "losses": 7,
                "goalsFor": 14,
                "goalsAgainst": 17
              },
              "home": {
                "played": 9,
                "wins": 2,
                "draws": 3,
                "losses": 4,
                "goalsFor": 6,
                "goalsAgainst": 10
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
              "teamId": 2745,
              "team": "Bucheon FC 1995",
              "rank": 9,
              "points": 19,
              "goalsDiff": -4,
              "form": "DDWDL",
              "all": {
                "played": 17,
                "wins": 4,
                "draws": 7,
                "losses": 6,
                "goalsFor": 14,
                "goalsAgainst": 18
              },
              "home": {
                "played": 8,
                "wins": 1,
                "draws": 4,
                "losses": 3,
                "goalsFor": 6,
                "goalsAgainst": 8
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
              "teamId": 2750,
              "team": "Daejeon Citizen",
              "rank": 10,
              "points": 18,
              "goalsDiff": 1,
              "form": "DDLLL",
              "all": {
                "played": 17,
                "wins": 4,
                "draws": 6,
                "losses": 7,
                "goalsFor": 19,
                "goalsAgainst": 18
              },
              "home": {
                "played": 9,
                "wins": 0,
                "draws": 4,
                "losses": 5,
                "goalsFor": 5,
                "goalsAgainst": 12
              },
              "away": {
                "played": 8,
                "wins": 4,
                "draws": 2,
                "losses": 2,
                "goalsFor": 14,
                "goalsAgainst": 6
              }
            },
            {
              "teamId": 2768,
              "team": "Gimcheon Sangmu FC",
              "rank": 11,
              "points": 16,
              "goalsDiff": -6,
              "form": "DDLDL",
              "all": {
                "played": 17,
                "wins": 2,
                "draws": 10,
                "losses": 5,
                "goalsFor": 17,
                "goalsAgainst": 23
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
                "played": 8,
                "wins": 2,
                "draws": 4,
                "losses": 2,
                "goalsFor": 10,
                "goalsAgainst": 9
              }
            },
            {
              "teamId": 2759,
              "team": "Gwangju FC",
              "rank": 12,
              "points": 8,
              "goalsDiff": -33,
              "form": "LDLLD",
              "all": {
                "played": 17,
                "wins": 1,
                "draws": 5,
                "losses": 11,
                "goalsFor": 8,
                "goalsAgainst": 41
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
                "played": 8,
                "wins": 0,
                "draws": 2,
                "losses": 6,
                "goalsFor": 2,
                "goalsAgainst": 23
              }
            }
          ],
          "teams": [
            {
              "teamId": 2745,
              "team": "Bucheon FC 1995",
              "form": "WDLDDLWDLLWLLDWDD",
              "all": {
                "played": 17,
                "wins": 4,
                "draws": 7,
                "losses": 6,
                "goalsFor": 14,
                "goalsAgainst": 18
              },
              "home": {
                "played": 8,
                "wins": 1,
                "draws": 4,
                "losses": 3,
                "goalsFor": 6,
                "goalsAgainst": 8
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
              "form": "WWWWDWWLWWLDLWWWD",
              "all": {
                "played": 17,
                "wins": 11,
                "draws": 3,
                "losses": 3,
                "goalsFor": 28,
                "goalsAgainst": 12
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
                "played": 9,
                "wins": 7,
                "draws": 1,
                "losses": 1,
                "goalsFor": 16,
                "goalsAgainst": 8
              }
            },
            {
              "teamId": 2748,
              "team": "FC Anyang",
              "form": "DWDLLDDWDWLDDDWLW",
              "all": {
                "played": 17,
                "wins": 5,
                "draws": 8,
                "losses": 4,
                "goalsFor": 22,
                "goalsAgainst": 19
              },
              "home": {
                "played": 8,
                "wins": 1,
                "draws": 4,
                "losses": 3,
                "goalsFor": 9,
                "goalsAgainst": 11
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
              "form": "DWDDLLLLLLLLDLLDL",
              "all": {
                "played": 17,
                "wins": 1,
                "draws": 5,
                "losses": 11,
                "goalsFor": 8,
                "goalsAgainst": 41
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
                "played": 8,
                "wins": 0,
                "draws": 2,
                "losses": 6,
                "goalsFor": 2,
                "goalsAgainst": 23
              }
            }
          ],
          "fixtures": [
            {
              "fixtureId": 1507003,
              "kickoff": "2026-07-19T19:30:00+09:00",
              "status": "NS",
              "homeTeamId": 2745,
              "homeTeam": "Bucheon FC 1995",
              "awayTeamId": 2766,
              "awayTeam": "FC Seoul",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1507002,
              "kickoff": "2026-07-19T19:30:00+09:00",
              "status": "NS",
              "homeTeamId": 2748,
              "homeTeam": "FC Anyang",
              "awayTeamId": 2759,
              "awayTeam": "Gwangju FC",
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
              "goalsDiff": 15,
              "form": "WDDWL",
              "all": {
                "played": 16,
                "wins": 11,
                "draws": 3,
                "losses": 2,
                "goalsFor": 35,
                "goalsAgainst": 20
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
                "played": 8,
                "wins": 5,
                "draws": 1,
                "losses": 2,
                "goalsFor": 18,
                "goalsAgainst": 14
              }
            },
            {
              "teamId": 2765,
              "team": "Suwon Bluewings",
              "rank": 2,
              "points": 32,
              "goalsDiff": 8,
              "form": "LWWLW",
              "all": {
                "played": 16,
                "wins": 10,
                "draws": 2,
                "losses": 4,
                "goalsFor": 22,
                "goalsAgainst": 14
              },
              "home": {
                "played": 8,
                "wins": 5,
                "draws": 2,
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
              "points": 31,
              "goalsDiff": 13,
              "form": "WWWDW",
              "all": {
                "played": 16,
                "wins": 9,
                "draws": 4,
                "losses": 3,
                "goalsFor": 35,
                "goalsAgainst": 22
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
                "played": 7,
                "wins": 3,
                "draws": 3,
                "losses": 1,
                "goalsFor": 16,
                "goalsAgainst": 10
              }
            },
            {
              "teamId": 2756,
              "team": "Suwon City FC",
              "rank": 4,
              "points": 29,
              "goalsDiff": 13,
              "form": "WWDDL",
              "all": {
                "played": 16,
                "wins": 8,
                "draws": 5,
                "losses": 3,
                "goalsFor": 34,
                "goalsAgainst": 21
              },
              "home": {
                "played": 7,
                "wins": 4,
                "draws": 3,
                "losses": 0,
                "goalsFor": 16,
                "goalsAgainst": 6
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
              "points": 29,
              "goalsDiff": 9,
              "form": "WLWWD",
              "all": {
                "played": 16,
                "wins": 9,
                "draws": 2,
                "losses": 5,
                "goalsFor": 28,
                "goalsAgainst": 19
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
                "played": 8,
                "wins": 5,
                "draws": 1,
                "losses": 2,
                "goalsFor": 13,
                "goalsAgainst": 8
              }
            },
            {
              "teamId": 7087,
              "team": "Hwaseong",
              "rank": 6,
              "points": 25,
              "goalsDiff": 4,
              "form": "LLWWW",
              "all": {
                "played": 16,
                "wins": 7,
                "draws": 4,
                "losses": 5,
                "goalsFor": 23,
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
                "played": 4,
                "wins": 2,
                "draws": 0,
                "losses": 2,
                "goalsFor": 5,
                "goalsAgainst": 5
              }
            },
            {
              "teamId": 2753,
              "team": "Asan Mugunghwa",
              "rank": 7,
              "points": 24,
              "goalsDiff": 5,
              "form": "DWDWD",
              "all": {
                "played": 16,
                "wins": 6,
                "draws": 6,
                "losses": 4,
                "goalsFor": 24,
                "goalsAgainst": 19
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
                "played": 7,
                "wins": 2,
                "draws": 3,
                "losses": 2,
                "goalsFor": 8,
                "goalsAgainst": 6
              }
            },
            {
              "teamId": 7078,
              "team": "Gimpo Citizen",
              "rank": 8,
              "points": 24,
              "goalsDiff": 1,
              "form": "LLDWW",
              "all": {
                "played": 16,
                "wins": 6,
                "draws": 6,
                "losses": 4,
                "goalsFor": 19,
                "goalsAgainst": 18
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
              "points": 20,
              "goalsDiff": -5,
              "form": "DWDLW",
              "all": {
                "played": 16,
                "wins": 5,
                "draws": 5,
                "losses": 6,
                "goalsFor": 20,
                "goalsAgainst": 25
              },
              "home": {
                "played": 9,
                "wins": 4,
                "draws": 2,
                "losses": 3,
                "goalsFor": 14,
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
              "teamId": 7060,
              "team": "Cheonan City",
              "rank": 10,
              "points": 19,
              "goalsDiff": 0,
              "form": "LLDWL",
              "all": {
                "played": 16,
                "wins": 4,
                "draws": 7,
                "losses": 5,
                "goalsFor": 19,
                "goalsAgainst": 19
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
                "played": 7,
                "wins": 2,
                "draws": 2,
                "losses": 3,
                "goalsFor": 12,
                "goalsAgainst": 12
              }
            },
            {
              "teamId": 9171,
              "team": "Yongin City",
              "rank": 11,
              "points": 17,
              "goalsDiff": -3,
              "form": "DWDDD",
              "all": {
                "played": 16,
                "wins": 3,
                "draws": 8,
                "losses": 5,
                "goalsFor": 20,
                "goalsAgainst": 23
              },
              "home": {
                "played": 9,
                "wins": 1,
                "draws": 5,
                "losses": 3,
                "goalsFor": 12,
                "goalsAgainst": 13
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
              "rank": 12,
              "points": 17,
              "goalsDiff": -5,
              "form": "WLLLL",
              "all": {
                "played": 16,
                "wins": 5,
                "draws": 2,
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
                "played": 8,
                "wins": 3,
                "draws": 1,
                "losses": 4,
                "goalsFor": 9,
                "goalsAgainst": 12
              }
            },
            {
              "teamId": 2757,
              "team": "Seongnam FC",
              "rank": 13,
              "points": 17,
              "goalsDiff": -2,
              "form": "LLDDL",
              "all": {
                "played": 16,
                "wins": 3,
                "draws": 8,
                "losses": 5,
                "goalsFor": 16,
                "goalsAgainst": 18
              },
              "home": {
                "played": 8,
                "wins": 1,
                "draws": 5,
                "losses": 2,
                "goalsFor": 6,
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
              "teamId": 7061,
              "team": "Cheongju",
              "rank": 14,
              "points": 14,
              "goalsDiff": -8,
              "form": "DLWLD",
              "all": {
                "played": 16,
                "wins": 1,
                "draws": 11,
                "losses": 4,
                "goalsFor": 19,
                "goalsAgainst": 27
              },
              "home": {
                "played": 8,
                "wins": 0,
                "draws": 4,
                "losses": 4,
                "goalsFor": 8,
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
              "goalsDiff": -12,
              "form": "WLLLL",
              "all": {
                "played": 16,
                "wins": 4,
                "draws": 2,
                "losses": 10,
                "goalsFor": 17,
                "goalsAgainst": 29
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
                "played": 5,
                "wins": 2,
                "draws": 1,
                "losses": 2,
                "goalsFor": 6,
                "goalsAgainst": 7
              }
            },
            {
              "teamId": 2760,
              "team": "Jeonnam Dragons",
              "rank": 16,
              "points": 9,
              "goalsDiff": -13,
              "form": "LDDLL",
              "all": {
                "played": 16,
                "wins": 1,
                "draws": 6,
                "losses": 9,
                "goalsFor": 18,
                "goalsAgainst": 31
              },
              "home": {
                "played": 4,
                "wins": 0,
                "draws": 2,
                "losses": 2,
                "goalsFor": 5,
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
              "teamId": 2751,
              "team": "Gyeongnam FC",
              "form": "LLDWDLLWLWDWLDWD",
              "all": {
                "played": 16,
                "wins": 5,
                "draws": 5,
                "losses": 6,
                "goalsFor": 20,
                "goalsAgainst": 25
              },
              "home": {
                "played": 9,
                "wins": 4,
                "draws": 2,
                "losses": 3,
                "goalsFor": 14,
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
              "teamId": 2758,
              "team": "Ansan Greeners",
              "form": "WLLDDLWLWLLLLLLW",
              "all": {
                "played": 16,
                "wins": 4,
                "draws": 2,
                "losses": 10,
                "goalsFor": 17,
                "goalsAgainst": 29
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
                "played": 5,
                "wins": 2,
                "draws": 1,
                "losses": 2,
                "goalsFor": 6,
                "goalsAgainst": 7
              }
            },
            {
              "teamId": 2765,
              "team": "Suwon Bluewings",
              "form": "WWWWWDLWWLDWLWWL",
              "all": {
                "played": 16,
                "wins": 10,
                "draws": 2,
                "losses": 4,
                "goalsFor": 22,
                "goalsAgainst": 14
              },
              "home": {
                "played": 8,
                "wins": 5,
                "draws": 2,
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
              "teamId": 7098,
              "team": "Paju Citizen",
              "form": "LLWWLWLWLDDLLLLW",
              "all": {
                "played": 16,
                "wins": 5,
                "draws": 2,
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
                "played": 8,
                "wins": 3,
                "draws": 1,
                "losses": 4,
                "goalsFor": 9,
                "goalsAgainst": 12
              }
            },
            {
              "teamId": 7061,
              "team": "Cheongju",
              "form": "LDDDLDDDDDDDLWLD",
              "all": {
                "played": 16,
                "wins": 1,
                "draws": 11,
                "losses": 4,
                "goalsFor": 19,
                "goalsAgainst": 27
              },
              "home": {
                "played": 8,
                "wins": 0,
                "draws": 4,
                "losses": 4,
                "goalsFor": 8,
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
              "teamId": 7060,
              "team": "Cheonan City",
              "form": "DLDDWDWDWLDLWDLL",
              "all": {
                "played": 16,
                "wins": 4,
                "draws": 7,
                "losses": 5,
                "goalsFor": 19,
                "goalsAgainst": 19
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
                "played": 7,
                "wins": 2,
                "draws": 2,
                "losses": 3,
                "goalsFor": 12,
                "goalsAgainst": 12
              }
            },
            {
              "teamId": 9171,
              "team": "Yongin City",
              "form": "DLLDLDLWLWDDDDWD",
              "all": {
                "played": 16,
                "wins": 3,
                "draws": 8,
                "losses": 5,
                "goalsFor": 20,
                "goalsAgainst": 23
              },
              "home": {
                "played": 9,
                "wins": 1,
                "draws": 5,
                "losses": 3,
                "goalsFor": 12,
                "goalsAgainst": 13
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
              "teamId": 7087,
              "team": "Hwaseong",
              "form": "LWDDLLWDWWDWWWLL",
              "all": {
                "played": 16,
                "wins": 7,
                "draws": 4,
                "losses": 5,
                "goalsFor": 23,
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
                "played": 4,
                "wins": 2,
                "draws": 0,
                "losses": 2,
                "goalsFor": 5,
                "goalsAgainst": 5
              }
            }
          ],
          "fixtures": [
            {
              "fixtureId": 1510384,
              "kickoff": "2026-07-19T19:30:00+09:00",
              "status": "NS",
              "homeTeamId": 2751,
              "homeTeam": "Gyeongnam FC",
              "awayTeamId": 2758,
              "awayTeam": "Ansan Greeners",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1510385,
              "kickoff": "2026-07-19T19:30:00+09:00",
              "status": "NS",
              "homeTeamId": 2765,
              "homeTeam": "Suwon Bluewings",
              "awayTeamId": 7098,
              "awayTeam": "Paju Citizen",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1510383,
              "kickoff": "2026-07-19T19:30:00+09:00",
              "status": "NS",
              "homeTeamId": 7061,
              "homeTeam": "Cheongju",
              "awayTeamId": 7060,
              "awayTeam": "Cheonan City",
              "injuriesChecked": true,
              "injuries": [],
              "lineupsChecked": false,
              "lineups": []
            },
            {
              "fixtureId": 1510386,
              "kickoff": "2026-07-19T19:30:00+09:00",
              "status": "NS",
              "homeTeamId": 9171,
              "homeTeam": "Yongin City",
              "awayTeamId": 7087,
              "awayTeam": "Hwaseong",
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
      "date": "2026-07-20",
      "updatedAt": "2026-07-17T10:09:48.307Z",
      "leagues": [
        {
          "key": "WORLDCUP",
          "leagueId": 1,
          "season": "2026",
          "standings": [
            {
              "teamId": 16,
              "team": "Mexico",
              "rank": 1,
              "points": 9,
              "goalsDiff": 6,
              "form": "LWWWW",
              "all": {
                "played": 3,
                "wins": 3,
                "draws": 0,
                "losses": 0,
                "goalsFor": 6,
                "goalsAgainst": 0
              },
              "home": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "away": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 1531,
              "team": "South Africa",
              "rank": 2,
              "points": 4,
              "goalsDiff": -1,
              "form": "LWDL",
              "all": {
                "played": 3,
                "wins": 1,
                "draws": 1,
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
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 17,
              "team": "South Korea",
              "rank": 3,
              "points": 3,
              "goalsDiff": -1,
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
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "away": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 770,
              "team": "Czechia",
              "rank": 4,
              "points": 1,
              "goalsDiff": -4,
              "form": "LDL",
              "all": {
                "played": 3,
                "wins": 0,
                "draws": 1,
                "losses": 2,
                "goalsFor": 2,
                "goalsAgainst": 6
              },
              "home": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "away": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 15,
              "team": "Switzerland",
              "rank": 1,
              "points": 7,
              "goalsDiff": 4,
              "form": "LWWWW",
              "all": {
                "played": 3,
                "wins": 2,
                "draws": 1,
                "losses": 0,
                "goalsFor": 7,
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
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 5529,
              "team": "Canada",
              "rank": 2,
              "points": 4,
              "goalsDiff": 5,
              "form": "LWLWD",
              "all": {
                "played": 3,
                "wins": 1,
                "draws": 1,
                "losses": 1,
                "goalsFor": 8,
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
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 1113,
              "team": "Bosnia & Herzegovina",
              "rank": 3,
              "points": 4,
              "goalsDiff": -1,
              "form": "LWLD",
              "all": {
                "played": 3,
                "wins": 1,
                "draws": 1,
                "losses": 1,
                "goalsFor": 5,
                "goalsAgainst": 6
              },
              "home": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "away": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 1569,
              "team": "Qatar",
              "rank": 4,
              "points": 1,
              "goalsDiff": -8,
              "form": "LLD",
              "all": {
                "played": 3,
                "wins": 0,
                "draws": 1,
                "losses": 2,
                "goalsFor": 2,
                "goalsAgainst": 10
              },
              "home": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "away": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 6,
              "team": "Brazil",
              "rank": 1,
              "points": 7,
              "goalsDiff": 6,
              "form": "LWWWD",
              "all": {
                "played": 3,
                "wins": 2,
                "draws": 1,
                "losses": 0,
                "goalsFor": 7,
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
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 31,
              "team": "Morocco",
              "rank": 2,
              "points": 7,
              "goalsDiff": 3,
              "form": "LWWWW",
              "all": {
                "played": 3,
                "wins": 2,
                "draws": 1,
                "losses": 0,
                "goalsFor": 6,
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
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 1108,
              "team": "Scotland",
              "rank": 3,
              "points": 3,
              "goalsDiff": -3,
              "form": "LLW",
              "all": {
                "played": 3,
                "wins": 1,
                "draws": 0,
                "losses": 2,
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
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 2386,
              "team": "Haiti",
              "rank": 4,
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
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "away": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 2384,
              "team": "USA",
              "rank": 1,
              "points": 6,
              "goalsDiff": 4,
              "form": "LWLWW",
              "all": {
                "played": 3,
                "wins": 2,
                "draws": 0,
                "losses": 1,
                "goalsFor": 8,
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
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 20,
              "team": "Australia",
              "rank": 2,
              "points": 4,
              "goalsDiff": 0,
              "form": "LDLW",
              "all": {
                "played": 3,
                "wins": 1,
                "draws": 1,
                "losses": 1,
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
              "rank": 3,
              "points": 4,
              "goalsDiff": -2,
              "form": "LWDWL",
              "all": {
                "played": 3,
                "wins": 1,
                "draws": 1,
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
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 777,
              "team": "Türkiye",
              "rank": 4,
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
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "away": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 25,
              "team": "Germany",
              "rank": 1,
              "points": 6,
              "goalsDiff": 6,
              "form": "LLWW",
              "all": {
                "played": 3,
                "wins": 2,
                "draws": 0,
                "losses": 1,
                "goalsFor": 10,
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
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 1501,
              "team": "Ivory Coast",
              "rank": 2,
              "points": 6,
              "goalsDiff": 2,
              "form": "LWLW",
              "all": {
                "played": 3,
                "wins": 2,
                "draws": 0,
                "losses": 1,
                "goalsFor": 4,
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
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 2382,
              "team": "Ecuador",
              "rank": 3,
              "points": 4,
              "goalsDiff": 0,
              "form": "LWDL",
              "all": {
                "played": 3,
                "wins": 1,
                "draws": 1,
                "losses": 1,
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
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 5530,
              "team": "Curaçao",
              "rank": 4,
              "points": 1,
              "goalsDiff": -8,
              "form": "LDL",
              "all": {
                "played": 3,
                "wins": 0,
                "draws": 1,
                "losses": 2,
                "goalsFor": 1,
                "goalsAgainst": 9
              },
              "home": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "away": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 1118,
              "team": "Netherlands",
              "rank": 1,
              "points": 7,
              "goalsDiff": 6,
              "form": "LWWD",
              "all": {
                "played": 3,
                "wins": 2,
                "draws": 1,
                "losses": 0,
                "goalsFor": 10,
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
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 12,
              "team": "Japan",
              "rank": 2,
              "points": 5,
              "goalsDiff": 4,
              "form": "LDWD",
              "all": {
                "played": 3,
                "wins": 1,
                "draws": 2,
                "losses": 0,
                "goalsFor": 7,
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
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 5,
              "team": "Sweden",
              "rank": 3,
              "points": 4,
              "goalsDiff": 0,
              "form": "LDLW",
              "all": {
                "played": 3,
                "wins": 1,
                "draws": 1,
                "losses": 1,
                "goalsFor": 7,
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
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 28,
              "team": "Tunisia",
              "rank": 4,
              "points": 0,
              "goalsDiff": -10,
              "form": "LLL",
              "all": {
                "played": 3,
                "wins": 0,
                "draws": 0,
                "losses": 3,
                "goalsFor": 2,
                "goalsAgainst": 12
              },
              "home": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "away": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 1,
              "team": "Belgium",
              "rank": 1,
              "points": 5,
              "goalsDiff": 4,
              "form": "LWWWD",
              "all": {
                "played": 3,
                "wins": 1,
                "draws": 2,
                "losses": 0,
                "goalsFor": 6,
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
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 32,
              "team": "Egypt",
              "rank": 2,
              "points": 5,
              "goalsDiff": 2,
              "form": "LWDWD",
              "all": {
                "played": 3,
                "wins": 1,
                "draws": 2,
                "losses": 0,
                "goalsFor": 5,
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
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 22,
              "team": "Iran",
              "rank": 3,
              "points": 3,
              "goalsDiff": 0,
              "form": "DDD",
              "all": {
                "played": 3,
                "wins": 0,
                "draws": 3,
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
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 4673,
              "team": "New Zealand",
              "rank": 4,
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
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "away": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 9,
              "team": "Spain",
              "rank": 1,
              "points": 7,
              "goalsDiff": 5,
              "form": "WWWWW",
              "all": {
                "played": 3,
                "wins": 2,
                "draws": 1,
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
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 1533,
              "team": "Cape Verde Islands",
              "rank": 2,
              "points": 3,
              "goalsDiff": 0,
              "form": "LDDD",
              "all": {
                "played": 3,
                "wins": 0,
                "draws": 3,
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
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 7,
              "team": "Uruguay",
              "rank": 3,
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
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "away": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 23,
              "team": "Saudi Arabia",
              "rank": 4,
              "points": 2,
              "goalsDiff": -4,
              "form": "DLD",
              "all": {
                "played": 3,
                "wins": 0,
                "draws": 2,
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
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 2,
              "team": "France",
              "rank": 1,
              "points": 9,
              "goalsDiff": 8,
              "form": "LWWWW",
              "all": {
                "played": 3,
                "wins": 3,
                "draws": 0,
                "losses": 0,
                "goalsFor": 10,
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
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 1090,
              "team": "Norway",
              "rank": 2,
              "points": 6,
              "goalsDiff": 1,
              "form": "LWWLW",
              "all": {
                "played": 3,
                "wins": 2,
                "draws": 0,
                "losses": 1,
                "goalsFor": 8,
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
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 13,
              "team": "Senegal",
              "rank": 3,
              "points": 3,
              "goalsDiff": 2,
              "form": "LWLL",
              "all": {
                "played": 3,
                "wins": 1,
                "draws": 0,
                "losses": 2,
                "goalsFor": 8,
                "goalsAgainst": 6
              },
              "home": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "away": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 1567,
              "team": "Iraq",
              "rank": 4,
              "points": 0,
              "goalsDiff": -11,
              "form": "LLL",
              "all": {
                "played": 3,
                "wins": 0,
                "draws": 0,
                "losses": 3,
                "goalsFor": 1,
                "goalsAgainst": 12
              },
              "home": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "away": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 26,
              "team": "Argentina",
              "rank": 1,
              "points": 9,
              "goalsDiff": 7,
              "form": "WWWWW",
              "all": {
                "played": 3,
                "wins": 3,
                "draws": 0,
                "losses": 0,
                "goalsFor": 8,
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
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 775,
              "team": "Austria",
              "rank": 2,
              "points": 4,
              "goalsDiff": 0,
              "form": "LDLW",
              "all": {
                "played": 3,
                "wins": 1,
                "draws": 1,
                "losses": 1,
                "goalsFor": 6,
                "goalsAgainst": 6
              },
              "home": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "away": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 1532,
              "team": "Algeria",
              "rank": 3,
              "points": 4,
              "goalsDiff": -2,
              "form": "LDWL",
              "all": {
                "played": 3,
                "wins": 1,
                "draws": 1,
                "losses": 1,
                "goalsFor": 5,
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
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 1548,
              "team": "Jordan",
              "rank": 4,
              "points": 0,
              "goalsDiff": -5,
              "form": "LLL",
              "all": {
                "played": 3,
                "wins": 0,
                "draws": 0,
                "losses": 3,
                "goalsFor": 3,
                "goalsAgainst": 8
              },
              "home": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "away": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 8,
              "team": "Colombia",
              "rank": 1,
              "points": 7,
              "goalsDiff": 3,
              "form": "LWDWW",
              "all": {
                "played": 3,
                "wins": 2,
                "draws": 1,
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
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 27,
              "team": "Portugal",
              "rank": 2,
              "points": 5,
              "goalsDiff": 5,
              "form": "LWDWD",
              "all": {
                "played": 3,
                "wins": 1,
                "draws": 2,
                "losses": 0,
                "goalsFor": 6,
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
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 1508,
              "team": "Congo DR",
              "rank": 3,
              "points": 4,
              "goalsDiff": 1,
              "form": "LWLD",
              "all": {
                "played": 3,
                "wins": 1,
                "draws": 1,
                "losses": 1,
                "goalsFor": 4,
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
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 1568,
              "team": "Uzbekistan",
              "rank": 4,
              "points": 0,
              "goalsDiff": -9,
              "form": "LLL",
              "all": {
                "played": 3,
                "wins": 0,
                "draws": 0,
                "losses": 3,
                "goalsFor": 2,
                "goalsAgainst": 11
              },
              "home": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "away": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 10,
              "team": "England",
              "rank": 1,
              "points": 7,
              "goalsDiff": 4,
              "form": "LWWWW",
              "all": {
                "played": 3,
                "wins": 2,
                "draws": 1,
                "losses": 0,
                "goalsFor": 6,
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
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 3,
              "team": "Croatia",
              "rank": 2,
              "points": 6,
              "goalsDiff": 0,
              "form": "LWWL",
              "all": {
                "played": 3,
                "wins": 2,
                "draws": 0,
                "losses": 1,
                "goalsFor": 5,
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
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 1504,
              "team": "Ghana",
              "rank": 3,
              "points": 4,
              "goalsDiff": 0,
              "form": "LLDW",
              "all": {
                "played": 3,
                "wins": 1,
                "draws": 1,
                "losses": 1,
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
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 11,
              "team": "Panama",
              "rank": 4,
              "points": 0,
              "goalsDiff": -4,
              "form": "LLL",
              "all": {
                "played": 3,
                "wins": 0,
                "draws": 0,
                "losses": 3,
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
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 1508,
              "team": "Congo DR",
              "rank": 1,
              "points": 4,
              "goalsDiff": 1,
              "form": "LWLD",
              "all": {
                "played": 3,
                "wins": 1,
                "draws": 1,
                "losses": 1,
                "goalsFor": 4,
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
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 5,
              "team": "Sweden",
              "rank": 2,
              "points": 4,
              "goalsDiff": 0,
              "form": "LDLW",
              "all": {
                "played": 3,
                "wins": 1,
                "draws": 1,
                "losses": 1,
                "goalsFor": 7,
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
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 1504,
              "team": "Ghana",
              "rank": 3,
              "points": 4,
              "goalsDiff": 0,
              "form": "LLDW",
              "all": {
                "played": 3,
                "wins": 1,
                "draws": 1,
                "losses": 1,
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
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 2382,
              "team": "Ecuador",
              "rank": 4,
              "points": 4,
              "goalsDiff": 0,
              "form": "LWDL",
              "all": {
                "played": 3,
                "wins": 1,
                "draws": 1,
                "losses": 1,
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
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 1113,
              "team": "Bosnia & Herzegovina",
              "rank": 5,
              "points": 4,
              "goalsDiff": -1,
              "form": "LWLD",
              "all": {
                "played": 3,
                "wins": 1,
                "draws": 1,
                "losses": 1,
                "goalsFor": 5,
                "goalsAgainst": 6
              },
              "home": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "away": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 1532,
              "team": "Algeria",
              "rank": 6,
              "points": 4,
              "goalsDiff": -2,
              "form": "LDWL",
              "all": {
                "played": 3,
                "wins": 1,
                "draws": 1,
                "losses": 1,
                "goalsFor": 5,
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
              "rank": 7,
              "points": 4,
              "goalsDiff": -2,
              "form": "LWDWL",
              "all": {
                "played": 3,
                "wins": 1,
                "draws": 1,
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
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 13,
              "team": "Senegal",
              "rank": 8,
              "points": 3,
              "goalsDiff": 2,
              "form": "LWLL",
              "all": {
                "played": 3,
                "wins": 1,
                "draws": 0,
                "losses": 2,
                "goalsFor": 8,
                "goalsAgainst": 6
              },
              "home": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "away": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 22,
              "team": "Iran",
              "rank": 9,
              "points": 3,
              "goalsDiff": 0,
              "form": "DDD",
              "all": {
                "played": 3,
                "wins": 0,
                "draws": 3,
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
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 17,
              "team": "South Korea",
              "rank": 10,
              "points": 3,
              "goalsDiff": -1,
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
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              },
              "away": {
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 1108,
              "team": "Scotland",
              "rank": 11,
              "points": 3,
              "goalsDiff": -3,
              "form": "LLW",
              "all": {
                "played": 3,
                "wins": 1,
                "draws": 0,
                "losses": 2,
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
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 7,
              "team": "Uruguay",
              "rank": 12,
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
                "played": 0,
                "wins": 0,
                "draws": 0,
                "losses": 0,
                "goalsFor": 0,
                "goalsAgainst": 0
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
              "teamId": 9,
              "team": "Spain",
              "form": "DWWWWWW",
              "all": {
                "played": 7,
                "wins": 6,
                "draws": 1,
                "losses": 0,
                "goalsFor": 13,
                "goalsAgainst": 1
              },
              "home": {
                "played": 4,
                "wins": 3,
                "draws": 1,
                "losses": 0,
                "goalsFor": 9,
                "goalsAgainst": 1
              },
              "away": {
                "played": 3,
                "wins": 3,
                "draws": 0,
                "losses": 0,
                "goalsFor": 4,
                "goalsAgainst": 0
              }
            },
            {
              "teamId": 26,
              "team": "Argentina",
              "form": "WWWWWWW",
              "all": {
                "played": 7,
                "wins": 7,
                "draws": 0,
                "losses": 0,
                "goalsFor": 19,
                "goalsAgainst": 7
              },
              "home": {
                "played": 5,
                "wins": 5,
                "draws": 0,
                "losses": 0,
                "goalsFor": 14,
                "goalsAgainst": 5
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
              "fixtureId": 1591866,
              "kickoff": "2026-07-20T04:00:00+09:00",
              "status": "NS",
              "homeTeamId": 9,
              "homeTeam": "Spain",
              "awayTeamId": 26,
              "awayTeam": "Argentina",
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
