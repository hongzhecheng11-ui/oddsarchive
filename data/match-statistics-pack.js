(function attachMatchStatisticsPack(root, factory) {
  const pack = factory();
  if (typeof module !== "undefined" && module.exports) module.exports = pack;
  if (root) root.ODDS_ARCHIVE_MATCH_STATISTICS_PACK = pack;
})(typeof window !== "undefined" ? window : globalThis, function createMatchStatisticsPack() {
  return {
  "version": "match-statistics-v1",
  "updatedAt": "2026-07-20T11:11:59.811Z",
  "collection": {
    "dates": [
      "2026-07-19",
      "2026-07-18",
      "2026-07-17"
    ],
    "requestGroups": 7,
    "skippedGroups": 71,
    "finishedFixtures": 22,
    "skippedComplete": 15,
    "saved": 7,
    "failures": 0,
    "errors": []
  },
  "matches": [
    {
      "fixtureId": 1591865,
      "date": "2026-07-19",
      "league": "WORLDCUP",
      "homeTeamId": 2,
      "homeTeam": "France",
      "awayTeamId": 10,
      "awayTeam": "England",
      "home": {
        "teamId": 2,
        "team": "France",
        "shots": 19,
        "shotsOnGoal": 9,
        "possession": 46,
        "corners": 3,
        "yellowCards": null,
        "redCards": null,
        "expectedGoals": 2.87
      },
      "away": {
        "teamId": 10,
        "team": "England",
        "shots": 19,
        "shotsOnGoal": 11,
        "possession": 54,
        "corners": 4,
        "yellowCards": null,
        "redCards": null,
        "expectedGoals": 2.58
      },
      "statisticsChecked": true,
      "lineupsChecked": true,
      "injuriesChecked": true,
      "lineups": [
        {
          "teamId": 2,
          "team": "France",
          "formation": "4-2-3-1",
          "coach": "Didier Deschamps",
          "starters": [
            "M. Maignan",
            "M. Gusto",
            "I. Konate",
            "M. Lacroix",
            "T. Hernandez",
            "W. Zaire-Emery",
            "A. Rabiot",
            "M. Olise",
            "R. Cherki",
            "D. Doue",
            "K. Mbappe"
          ]
        },
        {
          "teamId": 10,
          "team": "England",
          "formation": "4-1-4-1",
          "coach": "Thomas Tuchel",
          "starters": [
            "D. Henderson",
            "J. Quansah",
            "E. Konsa",
            "M. Guehi",
            "D. Spence",
            "D. Rice",
            "B. Saka",
            "M. Rogers",
            "E. Eze",
            "M. Rashford",
            "I. Toney"
          ]
        }
      ],
      "injuries": [
        {
          "fixtureId": 1591865,
          "teamId": 2,
          "playerId": 22090,
          "player": "W. Saliba",
          "type": "Missing Fixture",
          "reason": "Back Bruise"
        },
        {
          "fixtureId": 1591865,
          "teamId": 10,
          "playerId": 284322,
          "player": "K. Mainoo",
          "type": "Missing Fixture",
          "reason": "Wound"
        }
      ]
    },
    {
      "fixtureId": 1507003,
      "date": "2026-07-19",
      "league": "KLEAGUE1",
      "homeTeamId": 2745,
      "homeTeam": "Bucheon FC 1995",
      "awayTeamId": 2766,
      "awayTeam": "FC Seoul",
      "home": {
        "teamId": 2745,
        "team": "Bucheon FC 1995",
        "shots": null,
        "shotsOnGoal": null,
        "possession": null,
        "corners": null,
        "yellowCards": null,
        "redCards": null,
        "expectedGoals": null
      },
      "away": {
        "teamId": 2766,
        "team": "FC Seoul",
        "shots": null,
        "shotsOnGoal": null,
        "possession": null,
        "corners": null,
        "yellowCards": null,
        "redCards": null,
        "expectedGoals": null
      },
      "statisticsChecked": true,
      "lineupsChecked": true,
      "injuriesChecked": true,
      "lineups": [
        {
          "teamId": 2745,
          "team": "Bucheon FC 1995",
          "formation": "",
          "coach": "Ou-Ghu Kwon",
          "starters": [
            "Hyeong-keun Kim",
            "Sung-wook Hong",
            "Dong-kyu Baek",
            "Patrick William",
            "Tae-hyeon Ahn",
            "Sung Ye-geon",
            "Sang-jun Kim",
            "Galego",
            "Min-jun Kim",
            "Jeong-in Park",
            "Ji-ho Han"
          ]
        },
        {
          "teamId": 2766,
          "team": "FC Seoul",
          "formation": "",
          "coach": "Gi-Dong Kim",
          "starters": [
            "Gu Sung-yun",
            "Soo-il Park",
            "Juan Antonio Ros",
            "Yazan Al-Arab",
            "Kim Jin-su",
            "Seung-Won Jeong",
            "Lee Seung-mo",
            "Hrvoje Babec",
            "Min-kyu Song",
            "Patryk Klimala",
            "Cho Young-wook"
          ]
        }
      ],
      "injuries": []
    },
    {
      "fixtureId": 1507002,
      "date": "2026-07-19",
      "league": "KLEAGUE1",
      "homeTeamId": 2748,
      "homeTeam": "FC Anyang",
      "awayTeamId": 2759,
      "awayTeam": "Gwangju FC",
      "home": {
        "teamId": 2748,
        "team": "FC Anyang",
        "shots": null,
        "shotsOnGoal": null,
        "possession": null,
        "corners": null,
        "yellowCards": null,
        "redCards": null,
        "expectedGoals": null
      },
      "away": {
        "teamId": 2759,
        "team": "Gwangju FC",
        "shots": null,
        "shotsOnGoal": null,
        "possession": null,
        "corners": null,
        "yellowCards": null,
        "redCards": null,
        "expectedGoals": null
      },
      "statisticsChecked": true,
      "lineupsChecked": true,
      "injuriesChecked": true,
      "lineups": [
        {
          "teamId": 2748,
          "team": "FC Anyang",
          "formation": "",
          "coach": "Byeong-hoon Ryu",
          "starters": [
            "Jung-hoon Kim",
            "Tae-heui Lee",
            "Chang-yong Lee",
            "Kyung-won Kwon",
            "Dong-jin Kim",
            "Jung-hyun Kim",
            "Gyu-hyeon  Choe",
            "Moon Seong-Woo",
            "Geon-Joo Choi",
            "Matheus Oliveira",
            "Un Kim"
          ]
        },
        {
          "teamId": 2759,
          "team": "Gwangju FC",
          "formation": "",
          "coach": "Jeong-kyu Lee",
          "starters": [
            "Kyeong-min Kim",
            "Sung-yun Kwon",
            "Teun van Grunsven",
            "João Pedro",
            "Won-jae Park",
            "Se-jong Ju",
            "Yu Je-ho",
            "Adriel D'Avila Ba Loua",
            "Min-seo Moon",
            "Ji-hoon Jeong",
            "John Iredale"
          ]
        }
      ],
      "injuries": []
    },
    {
      "fixtureId": 1510384,
      "date": "2026-07-19",
      "league": "KLEAGUE2",
      "homeTeamId": 2751,
      "homeTeam": "Gyeongnam FC",
      "awayTeamId": 2758,
      "awayTeam": "Ansan Greeners",
      "home": {
        "teamId": 2751,
        "team": "Gyeongnam FC",
        "shots": null,
        "shotsOnGoal": null,
        "possession": null,
        "corners": null,
        "yellowCards": null,
        "redCards": null,
        "expectedGoals": null
      },
      "away": {
        "teamId": 2758,
        "team": "Ansan Greeners",
        "shots": null,
        "shotsOnGoal": null,
        "possession": null,
        "corners": null,
        "yellowCards": null,
        "redCards": null,
        "expectedGoals": null
      },
      "statisticsChecked": true,
      "lineupsChecked": true,
      "injuriesChecked": true,
      "lineups": [
        {
          "teamId": 2751,
          "team": "Gyeongnam FC",
          "formation": "",
          "coach": "Sung-jae Bae",
          "starters": []
        },
        {
          "teamId": 2758,
          "team": "Ansan Greeners",
          "formation": "",
          "coach": "Moon-Sik Choi",
          "starters": []
        }
      ],
      "injuries": []
    },
    {
      "fixtureId": 1510385,
      "date": "2026-07-19",
      "league": "KLEAGUE2",
      "homeTeamId": 2765,
      "homeTeam": "Suwon Bluewings",
      "awayTeamId": 7098,
      "awayTeam": "Paju Citizen",
      "home": {
        "teamId": 2765,
        "team": "Suwon Bluewings",
        "shots": null,
        "shotsOnGoal": null,
        "possession": null,
        "corners": null,
        "yellowCards": null,
        "redCards": null,
        "expectedGoals": null
      },
      "away": {
        "teamId": 7098,
        "team": "Paju Citizen",
        "shots": null,
        "shotsOnGoal": null,
        "possession": null,
        "corners": null,
        "yellowCards": null,
        "redCards": null,
        "expectedGoals": null
      },
      "statisticsChecked": true,
      "lineupsChecked": true,
      "injuriesChecked": true,
      "lineups": [
        {
          "teamId": 2765,
          "team": "Suwon Bluewings",
          "formation": "",
          "coach": "Jung-Hyo Lee",
          "starters": []
        },
        {
          "teamId": 7098,
          "team": "Paju Citizen",
          "formation": "",
          "coach": "Gerard Nus",
          "starters": []
        }
      ],
      "injuries": []
    },
    {
      "fixtureId": 1510383,
      "date": "2026-07-19",
      "league": "KLEAGUE2",
      "homeTeamId": 7061,
      "homeTeam": "Cheongju",
      "awayTeamId": 7060,
      "awayTeam": "Cheonan City",
      "home": {
        "teamId": 7061,
        "team": "Cheongju",
        "shots": null,
        "shotsOnGoal": null,
        "possession": null,
        "corners": null,
        "yellowCards": null,
        "redCards": null,
        "expectedGoals": null
      },
      "away": {
        "teamId": 7060,
        "team": "Cheonan City",
        "shots": null,
        "shotsOnGoal": null,
        "possession": null,
        "corners": null,
        "yellowCards": null,
        "redCards": null,
        "expectedGoals": null
      },
      "statisticsChecked": true,
      "lineupsChecked": true,
      "injuriesChecked": true,
      "lineups": [
        {
          "teamId": 7061,
          "team": "Cheongju",
          "formation": "",
          "coach": "Rui Quinta",
          "starters": []
        },
        {
          "teamId": 7060,
          "team": "Cheonan City",
          "formation": "",
          "coach": "Jin-sub Park",
          "starters": []
        }
      ],
      "injuries": []
    },
    {
      "fixtureId": 1510386,
      "date": "2026-07-19",
      "league": "KLEAGUE2",
      "homeTeamId": 9171,
      "homeTeam": "Yongin City",
      "awayTeamId": 7087,
      "awayTeam": "Hwaseong",
      "home": {
        "teamId": 9171,
        "team": "Yongin City",
        "shots": null,
        "shotsOnGoal": null,
        "possession": null,
        "corners": null,
        "yellowCards": null,
        "redCards": null,
        "expectedGoals": null
      },
      "away": {
        "teamId": 7087,
        "team": "Hwaseong",
        "shots": null,
        "shotsOnGoal": null,
        "possession": null,
        "corners": null,
        "yellowCards": null,
        "redCards": null,
        "expectedGoals": null
      },
      "statisticsChecked": true,
      "lineupsChecked": true,
      "injuriesChecked": true,
      "lineups": [
        {
          "teamId": 9171,
          "team": "Yongin City",
          "formation": "",
          "coach": "Yun-Kyum Choi",
          "starters": []
        },
        {
          "teamId": 7087,
          "team": "Hwaseong",
          "formation": "",
          "coach": "Du-Ri Cha",
          "starters": []
        }
      ],
      "injuries": []
    },
    {
      "fixtureId": 1506999,
      "date": "2026-07-18",
      "league": "KLEAGUE1",
      "homeTeamId": 2746,
      "homeTeam": "Gangwon FC",
      "awayTeamId": 2768,
      "awayTeam": "Gimcheon Sangmu FC",
      "home": {
        "teamId": 2746,
        "team": "Gangwon FC",
        "shots": null,
        "shotsOnGoal": null,
        "possession": null,
        "corners": null,
        "yellowCards": null,
        "redCards": null,
        "expectedGoals": null
      },
      "away": {
        "teamId": 2768,
        "team": "Gimcheon Sangmu FC",
        "shots": null,
        "shotsOnGoal": null,
        "possession": null,
        "corners": null,
        "yellowCards": null,
        "redCards": null,
        "expectedGoals": null
      },
      "statisticsChecked": true,
      "lineupsChecked": true,
      "injuriesChecked": true,
      "lineups": [
        {
          "teamId": 2746,
          "team": "Gangwon FC",
          "formation": "4-4-2",
          "coach": "Kyung-Ho Chung",
          "starters": [
            "Park Cheong-hyo",
            "Kang Joon-hyuk",
            "Marko Tuci",
            "Gi-Hyuk Lee",
            "Song Jun-Seok",
            "Mo Jae-hyeon",
            "You-Hyeon Lee",
            "Min-woo Seo",
            "Dae-won Kim",
            "Byeong-chan Choi",
            "Young-jun Goh"
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
            "Jung-taek Lee",
            "Park Jin-Seong",
            "Jae-hyeon Go",
            "Tae-jun Park",
            "Soo-bin Lee",
            "Joo-chan Kim",
            "Se-jin Park",
            "Jeong Jae-Min"
          ]
        }
      ],
      "injuries": []
    },
    {
      "fixtureId": 1506998,
      "date": "2026-07-18",
      "league": "KLEAGUE1",
      "homeTeamId": 2750,
      "homeTeam": "Daejeon Citizen",
      "awayTeamId": 2767,
      "awayTeam": "Ulsan Hyundai FC",
      "home": {
        "teamId": 2750,
        "team": "Daejeon Citizen",
        "shots": null,
        "shotsOnGoal": null,
        "possession": null,
        "corners": null,
        "yellowCards": null,
        "redCards": null,
        "expectedGoals": null
      },
      "away": {
        "teamId": 2767,
        "team": "Ulsan Hyundai FC",
        "shots": null,
        "shotsOnGoal": null,
        "possession": null,
        "corners": null,
        "yellowCards": null,
        "redCards": null,
        "expectedGoals": null
      },
      "statisticsChecked": true,
      "lineupsChecked": true,
      "injuriesChecked": true,
      "lineups": [
        {
          "teamId": 2750,
          "team": "Daejeon Citizen",
          "formation": "4-4-2",
          "coach": "Sun-Hong Hwang",
          "starters": [
            "Lee Chang-geun",
            "Kim Moon-hwan",
            "Chang-rae Ha",
            "Jo Seong-Kwon",
            "Myeong-jae Lee",
            "Won-Sang Um",
            "Kim Bong-Soo",
            "Yun-seong Kang",
            "Gustav Ludwigson",
            "Diogo Oliveira",
            "Jin-su Seo"
          ]
        },
        {
          "teamId": 2767,
          "team": "Ulsan Hyundai FC",
          "formation": "3-4-3",
          "coach": "Hyun-seok Kim",
          "starters": [
            "Hyeon-woo Jo",
            "Jung Seung-hyeon",
            "Kim Young-gwon",
            "Jae-ik Lee",
            "Choi Seok-Hyun",
            "Kyu-seong Lee",
            "Miłosz Trojak",
            "Jang Si-young",
            "Dong-gyeong Lee",
            "Erick Farias",
            "Hui-gyun Lee"
          ]
        }
      ],
      "injuries": []
    },
    {
      "fixtureId": 1507001,
      "date": "2026-07-18",
      "league": "KLEAGUE1",
      "homeTeamId": 2761,
      "homeTeam": "Jeju United FC",
      "awayTeamId": 2764,
      "awayTeam": "Pohang Steelers",
      "home": {
        "teamId": 2761,
        "team": "Jeju United FC",
        "shots": null,
        "shotsOnGoal": null,
        "possession": null,
        "corners": null,
        "yellowCards": null,
        "redCards": null,
        "expectedGoals": null
      },
      "away": {
        "teamId": 2764,
        "team": "Pohang Steelers",
        "shots": null,
        "shotsOnGoal": null,
        "possession": null,
        "corners": null,
        "yellowCards": null,
        "redCards": null,
        "expectedGoals": null
      },
      "statisticsChecked": true,
      "lineupsChecked": true,
      "injuriesChecked": true,
      "lineups": [
        {
          "teamId": 2761,
          "team": "Jeju United FC",
          "formation": "3-4-3",
          "coach": "Sergio Costa",
          "starters": [
            "Dong-jun Kim",
            "Min-gyu Jang",
            "Tobias Figueiredo",
            "Julien Celestine",
            "In-su Yu",
            "Italo",
            "Jae-hyeok Oh",
            "Ryun-sung Kim",
            "Tae Hee Nam",
            "Shin Sang-Eun",
            "Chang-jun Park"
          ]
        },
        {
          "teamId": 2764,
          "team": "Pohang Steelers",
          "formation": "4-3-3",
          "coach": "Tae-Ha Park",
          "starters": [
            "Sung-min Hong",
            "Jeong-won Eo",
            "Park Chan-Yong",
            "Min-kwang Jeon",
            "Wanderson",
            "Dong-jin Kim",
            "Sung-Yueng Ki",
            "Kento Nishiya",
            "An Jae-joon",
            "Lee Ho-jae",
            "Jakob Tranziska"
          ]
        }
      ],
      "injuries": []
    },
    {
      "fixtureId": 1507000,
      "date": "2026-07-18",
      "league": "KLEAGUE1",
      "homeTeamId": 2763,
      "homeTeam": "Incheon United",
      "awayTeamId": 2762,
      "awayTeam": "Jeonbuk Motors",
      "home": {
        "teamId": 2763,
        "team": "Incheon United",
        "shots": null,
        "shotsOnGoal": null,
        "possession": null,
        "corners": null,
        "yellowCards": null,
        "redCards": null,
        "expectedGoals": null
      },
      "away": {
        "teamId": 2762,
        "team": "Jeonbuk Motors",
        "shots": null,
        "shotsOnGoal": null,
        "possession": null,
        "corners": null,
        "yellowCards": null,
        "redCards": null,
        "expectedGoals": null
      },
      "statisticsChecked": true,
      "lineupsChecked": true,
      "injuriesChecked": true,
      "lineups": [
        {
          "teamId": 2763,
          "team": "Incheon United",
          "formation": "4-4-2",
          "coach": "Jong-Hwan Yoon",
          "starters": [
            "Dong-heon Kim",
            "Kim Myung-Sun",
            "Gun-hee Kim",
            "Juan Ibiza",
            "Ju-yong Lee",
            "Dong-ryul Lee",
            "Jae-min Seo",
            "Myung Joo Lee",
            "Gerso Fernandes",
            "Chung-yong Lee",
            "Morgan Ferrier"
          ]
        },
        {
          "teamId": 2762,
          "team": "Jeonbuk Motors",
          "formation": "4-2-3-1",
          "coach": "Jung-Yong Chung",
          "starters": [
            "Song Bum-keun",
            "Tae-hwan Kim",
            "Wi-je Cho",
            "Park Ji-soo",
            "Kim Ha-Jun",
            "Oberdan Alionço",
            "Jin-gyu Kim",
            "Dong-jun Lee",
            "Kang Sang-Yun",
            "Seung-seob Kim",
            "Bruno Mota"
          ]
        }
      ],
      "injuries": []
    },
    {
      "fixtureId": 1510382,
      "date": "2026-07-18",
      "league": "KLEAGUE2",
      "homeTeamId": 2756,
      "homeTeam": "Suwon City FC",
      "awayTeamId": 2749,
      "awayTeam": "Seoul E-Land FC",
      "home": {
        "teamId": 2756,
        "team": "Suwon City FC",
        "shots": null,
        "shotsOnGoal": null,
        "possession": null,
        "corners": null,
        "yellowCards": null,
        "redCards": null,
        "expectedGoals": null
      },
      "away": {
        "teamId": 2749,
        "team": "Seoul E-Land FC",
        "shots": null,
        "shotsOnGoal": null,
        "possession": null,
        "corners": null,
        "yellowCards": null,
        "redCards": null,
        "expectedGoals": null
      },
      "statisticsChecked": true,
      "lineupsChecked": true,
      "injuriesChecked": true,
      "lineups": [],
      "injuries": []
    },
    {
      "fixtureId": 1510381,
      "date": "2026-07-18",
      "league": "KLEAGUE2",
      "homeTeamId": 2757,
      "homeTeam": "Seongnam FC",
      "awayTeamId": 2752,
      "awayTeam": "Busan I Park",
      "home": {
        "teamId": 2757,
        "team": "Seongnam FC",
        "shots": null,
        "shotsOnGoal": null,
        "possession": null,
        "corners": null,
        "yellowCards": null,
        "redCards": null,
        "expectedGoals": null
      },
      "away": {
        "teamId": 2752,
        "team": "Busan I Park",
        "shots": null,
        "shotsOnGoal": null,
        "possession": null,
        "corners": null,
        "yellowCards": null,
        "redCards": null,
        "expectedGoals": null
      },
      "statisticsChecked": true,
      "lineupsChecked": true,
      "injuriesChecked": true,
      "lineups": [],
      "injuries": []
    },
    {
      "fixtureId": 1510380,
      "date": "2026-07-18",
      "league": "KLEAGUE2",
      "homeTeamId": 2760,
      "homeTeam": "Jeonnam Dragons",
      "awayTeamId": 2753,
      "awayTeam": "Asan Mugunghwa",
      "home": {
        "teamId": 2760,
        "team": "Jeonnam Dragons",
        "shots": null,
        "shotsOnGoal": null,
        "possession": null,
        "corners": null,
        "yellowCards": null,
        "redCards": null,
        "expectedGoals": null
      },
      "away": {
        "teamId": 2753,
        "team": "Asan Mugunghwa",
        "shots": null,
        "shotsOnGoal": null,
        "possession": null,
        "corners": null,
        "yellowCards": null,
        "redCards": null,
        "expectedGoals": null
      },
      "statisticsChecked": true,
      "lineupsChecked": true,
      "injuriesChecked": true,
      "lineups": [],
      "injuries": []
    },
    {
      "fixtureId": 1510379,
      "date": "2026-07-18",
      "league": "KLEAGUE2",
      "homeTeamId": 7078,
      "homeTeam": "Gimpo Citizen",
      "awayTeamId": 2747,
      "awayTeam": "Daegu FC",
      "home": {
        "teamId": 7078,
        "team": "Gimpo Citizen",
        "shots": null,
        "shotsOnGoal": null,
        "possession": null,
        "corners": null,
        "yellowCards": null,
        "redCards": null,
        "expectedGoals": null
      },
      "away": {
        "teamId": 2747,
        "team": "Daegu FC",
        "shots": null,
        "shotsOnGoal": null,
        "possession": null,
        "corners": null,
        "yellowCards": null,
        "redCards": null,
        "expectedGoals": null
      },
      "statisticsChecked": true,
      "lineupsChecked": true,
      "injuriesChecked": true,
      "lineups": [],
      "injuries": []
    },
    {
      "fixtureId": 1586132,
      "date": "2026-07-18",
      "league": "INTL_FRIENDLIES",
      "homeTeamId": 1542,
      "homeTeam": "Vietnam",
      "awayTeamId": 1556,
      "awayTeam": "Myanmar",
      "home": {
        "teamId": 1542,
        "team": "Vietnam",
        "shots": null,
        "shotsOnGoal": null,
        "possession": null,
        "corners": null,
        "yellowCards": null,
        "redCards": null,
        "expectedGoals": null
      },
      "away": {
        "teamId": 1556,
        "team": "Myanmar",
        "shots": null,
        "shotsOnGoal": null,
        "possession": null,
        "corners": null,
        "yellowCards": null,
        "redCards": null,
        "expectedGoals": null
      },
      "statisticsChecked": true,
      "lineupsChecked": true,
      "injuriesChecked": true,
      "lineups": [
        {
          "teamId": 1542,
          "team": "Vietnam",
          "formation": "4-1-4-1",
          "coach": "",
          "starters": [
            "Patrik Lê Giang",
            "Phạm Xuân Mạnh",
            "Nguyễn Nhật Minh",
            "Nguyễn Thành Chung",
            "Đoàn Văn Hậu",
            "Trương Tiến Anh",
            "Nguyễn Tài Lộc",
            "Nguyễn Hoàng Đức",
            "Nguyễn Quang Hải",
            "Đỗ Hoàng Hên",
            "Nguyễn Xuân Son"
          ]
        },
        {
          "teamId": 1556,
          "team": "Myanmar",
          "formation": "",
          "coach": "Michael Feichtenbeiner",
          "starters": [
            "San Satt Naing",
            "Hein Phyo Win",
            "Soe Moe Kyaw",
            "Hein Zeyar Lin",
            "Nanda Kyaw",
            "Kyaw Min Oo",
            "Lwin Moe Aung",
            "Maung Maung Lwin",
            "Myat Kaung Khant",
            "Win Naing Tun",
            "Than Paing"
          ]
        }
      ],
      "injuries": []
    },
    {
      "fixtureId": 1554448,
      "date": "2026-07-17",
      "league": "UEL",
      "homeTeamId": 670,
      "homeTeam": "Derry City",
      "awayTeamId": 853,
      "awayTeam": "CSKA Sofia",
      "home": {
        "teamId": 670,
        "team": "Derry City",
        "shots": null,
        "shotsOnGoal": null,
        "possession": null,
        "corners": null,
        "yellowCards": 1,
        "redCards": 0,
        "expectedGoals": null
      },
      "away": {
        "teamId": 853,
        "team": "CSKA Sofia",
        "shots": null,
        "shotsOnGoal": null,
        "possession": null,
        "corners": null,
        "yellowCards": 4,
        "redCards": 0,
        "expectedGoals": null
      },
      "statisticsChecked": true,
      "lineupsChecked": true,
      "injuriesChecked": true,
      "lineups": [
        {
          "teamId": 670,
          "team": "Derry City",
          "formation": "4-3-3",
          "coach": "Tiernan Lynch",
          "starters": [
            "B. Maher",
            "C. Barr",
            "C. Grogan",
            "P. McClean",
            "B. Fleming",
            "A. O'Reilly",
            "J. Olayinka",
            "E. Chapman",
            "B. Cotter",
            "M. Duffy",
            "K. Santos"
          ]
        },
        {
          "teamId": 853,
          "team": "CSKA Sofia",
          "formation": "3-5-2",
          "coach": "Hristo Yanev",
          "starters": [
            "D. Evtimov",
            "T. Ivanov",
            "P. Panayotov",
            "F. Rodriguez",
            "Pastor",
            "I. Solet",
            "B. Jordao",
            "S. Sensi",
            "A. Martino",
            "I. Pittas",
            "L. Godoy"
          ]
        }
      ],
      "injuries": []
    },
    {
      "fixtureId": 1554450,
      "date": "2026-07-17",
      "league": "UEL",
      "homeTeamId": 2599,
      "homeTeam": "Universitatea Cluj",
      "awayTeamId": 572,
      "awayTeam": "Dynamo Kyiv",
      "home": {
        "teamId": 2599,
        "team": "Universitatea Cluj",
        "shots": 11,
        "shotsOnGoal": 3,
        "possession": null,
        "corners": 6,
        "yellowCards": 3,
        "redCards": 0,
        "expectedGoals": null
      },
      "away": {
        "teamId": 572,
        "team": "Dynamo Kyiv",
        "shots": 22,
        "shotsOnGoal": 7,
        "possession": null,
        "corners": 2,
        "yellowCards": 3,
        "redCards": 0,
        "expectedGoals": null
      },
      "statisticsChecked": true,
      "lineupsChecked": true,
      "injuriesChecked": true,
      "lineups": [
        {
          "teamId": 2599,
          "team": "Universitatea Cluj",
          "formation": "4-2-3-1",
          "coach": "Cristiano Bergodi",
          "starters": [
            "N. Michail",
            "J. Stanojev",
            "L. Cristea",
            "D. Codrea",
            "A. Chipciu",
            "P. Pinho",
            "M. Drammeh",
            "M. Stefanescu",
            "O. Bic",
            "O. Mendy",
            "I. Macalou"
          ]
        },
        {
          "teamId": 572,
          "team": "Dynamo Kyiv",
          "formation": "4-3-3",
          "coach": "Igor Kostyuk",
          "starters": [
            "R. Neshcheret",
            "T. Kedziora",
            "K. Bilovar",
            "T. Mykhavko",
            "V. Dubinchak",
            "O. Pikhalyonok",
            "V. Brazhko",
            "M. Shaparenko",
            "N. Voloshyn",
            "M. Ponomarenko",
            "B. Redushko"
          ]
        }
      ],
      "injuries": []
    },
    {
      "fixtureId": 1554447,
      "date": "2026-07-17",
      "league": "UEL",
      "homeTeamId": 4358,
      "homeTeam": "Aluminij",
      "awayTeamId": 568,
      "awayTeam": "Sheriff Tiraspol",
      "home": {
        "teamId": 4358,
        "team": "Aluminij",
        "shots": null,
        "shotsOnGoal": null,
        "possession": null,
        "corners": null,
        "yellowCards": 3,
        "redCards": 0,
        "expectedGoals": null
      },
      "away": {
        "teamId": 568,
        "team": "Sheriff Tiraspol",
        "shots": null,
        "shotsOnGoal": null,
        "possession": null,
        "corners": null,
        "yellowCards": 1,
        "redCards": 0,
        "expectedGoals": null
      },
      "statisticsChecked": true,
      "lineupsChecked": true,
      "injuriesChecked": true,
      "lineups": [
        {
          "teamId": 4358,
          "team": "Aluminij",
          "formation": "3-5-2",
          "coach": "Jure Arsic",
          "starters": [
            "F. Raduha",
            "D. Simunic",
            "M. Boben",
            "R. Schaubach",
            "V. Koderman",
            "E. Taylor",
            "T. Jagic",
            "M. Vrbanec",
            "V. Tezak",
            "B. Susso",
            "M. Bajraj"
          ]
        },
        {
          "teamId": 568,
          "team": "Sheriff Tiraspol",
          "formation": "3-4-3",
          "coach": "Victor Mihailov",
          "starters": [
            "E. Timbur",
            "B. Ciss",
            "B. Fomba",
            "Rai",
            "D. Forov",
            "D. Klas",
            "S. Kone",
            "A. Pergjoni",
            "V. Fratea",
            "J. Asprilla Moreno",
            "L. Jaures-Ulrich"
          ]
        }
      ],
      "injuries": []
    },
    {
      "fixtureId": 1554449,
      "date": "2026-07-17",
      "league": "UEL",
      "homeTeamId": 651,
      "homeTeam": "Ferencvarosi TC",
      "awayTeamId": 702,
      "awayTeam": "Vojvodina",
      "home": {
        "teamId": 651,
        "team": "Ferencvarosi TC",
        "shots": null,
        "shotsOnGoal": null,
        "possession": null,
        "corners": null,
        "yellowCards": 2,
        "redCards": 0,
        "expectedGoals": null
      },
      "away": {
        "teamId": 702,
        "team": "Vojvodina",
        "shots": null,
        "shotsOnGoal": null,
        "possession": null,
        "corners": null,
        "yellowCards": 1,
        "redCards": 1,
        "expectedGoals": null
      },
      "statisticsChecked": true,
      "lineupsChecked": true,
      "injuriesChecked": true,
      "lineups": [
        {
          "teamId": 651,
          "team": "Ferencvarosi TC",
          "formation": "4-3-3",
          "coach": "Balazs Borbely",
          "starters": [
            "D. Dibusz",
            "A. Osvath",
            "M. Gomez",
            "T. Raemaekers",
            "Cadu",
            "G. Kanichowsky",
            "N. Keita",
            "M. Corbu",
            "K. Zachariassen",
            "L. Joseph",
            "Dele"
          ]
        },
        {
          "teamId": 702,
          "team": "Vojvodina",
          "formation": "4-3-3",
          "coach": "Miroslav Tanjga",
          "starters": [
            "D. Rosic",
            "L. Nikolic",
            "K. Szucs",
            "D. Crnomarkovic",
            "Lucas Barros",
            "L. Randjelovic",
            "I. Djakovac",
            "N. Petrovic",
            "P. Sukacev",
            "A. Vukanovic",
            "D. Zukic"
          ]
        }
      ],
      "injuries": []
    },
    {
      "fixtureId": 1554452,
      "date": "2026-07-17",
      "league": "UEL",
      "homeTeamId": 3554,
      "homeTeam": "Žilina",
      "awayTeamId": 608,
      "awayTeam": "HNK Hajduk Split",
      "home": {
        "teamId": 3554,
        "team": "Žilina",
        "shots": null,
        "shotsOnGoal": null,
        "possession": null,
        "corners": null,
        "yellowCards": 2,
        "redCards": 0,
        "expectedGoals": null
      },
      "away": {
        "teamId": 608,
        "team": "HNK Hajduk Split",
        "shots": null,
        "shotsOnGoal": null,
        "possession": null,
        "corners": null,
        "yellowCards": 2,
        "redCards": 0,
        "expectedGoals": null
      },
      "statisticsChecked": true,
      "lineupsChecked": true,
      "injuriesChecked": true,
      "lineups": [
        {
          "teamId": 3554,
          "team": "Žilina",
          "formation": "3-4-3",
          "coach": "Pavol Stano",
          "starters": [
            "J. Badzgon",
            "T. Paliscak",
            "J. Minarik",
            "A. Narimanidze",
            "T. Hranica",
            "X. Adang",
            "M. Kacer",
            "K. Bari",
            "F. Kosa",
            "M. Roginic",
            "P. Ilko"
          ]
        },
        {
          "teamId": 608,
          "team": "HNK Hajduk Split",
          "formation": "4-2-3-1",
          "coach": "Gonzalo Garcia",
          "starters": [
            "T. Silic",
            "M. Acapandie",
            "M. Skelin",
            "A. Van Hoorenbeeck",
            "S. Hrgovic",
            "R. Pukstas",
            "A. Pajaziti",
            "R. Brajkovic",
            "N. Skoko",
            "D. Melnjak",
            "M. Sego"
          ]
        }
      ],
      "injuries": []
    },
    {
      "fixtureId": 1554451,
      "date": "2026-07-17",
      "league": "UEL",
      "homeTeamId": 4165,
      "homeTeam": "Vestri",
      "awayTeamId": 556,
      "awayTeam": "Qarabag",
      "home": {
        "teamId": 4165,
        "team": "Vestri",
        "shots": null,
        "shotsOnGoal": null,
        "possession": null,
        "corners": null,
        "yellowCards": 0,
        "redCards": 0,
        "expectedGoals": null
      },
      "away": {
        "teamId": 556,
        "team": "Qarabag",
        "shots": null,
        "shotsOnGoal": null,
        "possession": null,
        "corners": null,
        "yellowCards": 0,
        "redCards": 0,
        "expectedGoals": null
      },
      "statisticsChecked": true,
      "lineupsChecked": true,
      "injuriesChecked": true,
      "lineups": [
        {
          "teamId": 556,
          "team": "Qarabag",
          "formation": "4-2-3-1",
          "coach": "Qurban Qurbanov",
          "starters": [
            "M. Kochalski",
            "Matheus Silva",
            "B. Huseynov",
            "B. Varkonyi",
            "B. Langa",
            "Pedro Bicalho",
            "M. Jankovic",
            "J. Mouaddib",
            "Kady Borges",
            "A. Zoubir",
            "Z. Sawo"
          ]
        },
        {
          "teamId": 4165,
          "team": "Vestri",
          "formation": "",
          "coach": "",
          "starters": [
            "M. Steinarsson",
            "E. Gardarsson",
            "A. Johannsson",
            "Edson Eduardo",
            "G. Einarsson",
            "J. Stensson",
            "S. Fall",
            "M. Hagbardsson",
            "B. Eydal",
            "J. Selven",
            "E. Duah"
          ]
        }
      ],
      "injuries": []
    },
    {
      "fixtureId": 1554388,
      "date": "2026-07-16",
      "league": "UCL",
      "homeTeamId": 632,
      "homeTeam": "Universitatea Craiova",
      "awayTeamId": 7808,
      "awayTeam": "ML Vitebsk",
      "home": {
        "teamId": 632,
        "team": "Universitatea Craiova",
        "shots": 4,
        "shotsOnGoal": 1,
        "possession": 49,
        "corners": 2,
        "yellowCards": 0,
        "redCards": 0,
        "expectedGoals": null
      },
      "away": {
        "teamId": 7808,
        "team": "ML Vitebsk",
        "shots": 1,
        "shotsOnGoal": 1,
        "possession": 51,
        "corners": 1,
        "yellowCards": 0,
        "redCards": 0,
        "expectedGoals": null
      },
      "statisticsChecked": true,
      "lineupsChecked": true,
      "injuriesChecked": true,
      "lineups": [
        {
          "teamId": 632,
          "team": "Universitatea Craiova",
          "formation": "3-4-3",
          "coach": "Filipe Coelho",
          "starters": [
            "L. Popescu",
            "O. Romanchuk",
            "A. Rus",
            "J. Badelj",
            "C. Mora",
            "A. Cicaldau",
            "T. Baluta",
            "Teles",
            "M. Etim",
            "A. Al Hamlawi",
            "S. Baiaram"
          ]
        },
        {
          "teamId": 7808,
          "team": "ML Vitebsk",
          "formation": "4-1-4-1",
          "coach": "Mikhail Martinovich",
          "starters": [
            "P. Pavlyuchenko",
            "S. Balanovich",
            "Z. Volkov",
            "K. Gomanov",
            "Y. Skibskiy",
            "V. Bocherov",
            "D. Cleonise",
            "V. Gromyko",
            "A. Mesarovic",
            "R. Bosic",
            "A. Kontsevoy"
          ]
        }
      ],
      "injuries": []
    },
    {
      "fixtureId": 1554375,
      "date": "2026-07-16",
      "league": "UCL",
      "homeTeamId": 15847,
      "homeTeam": "Atert Bissen",
      "awayTeamId": 701,
      "awayTeam": "KI Klaksvik",
      "home": {
        "teamId": 15847,
        "team": "Atert Bissen",
        "shots": null,
        "shotsOnGoal": null,
        "possession": null,
        "corners": null,
        "yellowCards": null,
        "redCards": null,
        "expectedGoals": null
      },
      "away": {
        "teamId": 701,
        "team": "KI Klaksvik",
        "shots": null,
        "shotsOnGoal": null,
        "possession": null,
        "corners": null,
        "yellowCards": null,
        "redCards": null,
        "expectedGoals": null
      },
      "statisticsChecked": true,
      "lineupsChecked": true,
      "injuriesChecked": true,
      "lineups": [
        {
          "teamId": 15847,
          "team": "Atert Bissen",
          "formation": "4-2-3-1",
          "coach": "Pedro Fernandez",
          "starters": [
            "Y. Gourari Tebaa",
            "T. Rodrigues",
            "B. Silva",
            "Y. Mannone",
            "E. Veiga",
            "M. Terki",
            "T. Zeghdane",
            "T. Crame",
            "D. Pimentel",
            "K. Abi Ramzi",
            "R. Ferber"
          ]
        },
        {
          "teamId": 701,
          "team": "KI Klaksvik",
          "formation": "4-2-3-1",
          "coach": "Magnus Powell",
          "starters": [
            "M. Jensen",
            "J. Danielsen",
            "O. Faero",
            "G. Tellechea",
            "G. Sorensen",
            "H. Hansson",
            "D. Pavlovic",
            "A. Frederiksberg",
            "O. Ali",
            "Jean Carlos",
            "P. Klettskard"
          ]
        }
      ],
      "injuries": []
    },
    {
      "fixtureId": 1554386,
      "date": "2026-07-16",
      "league": "UCL",
      "homeTeamId": 673,
      "homeTeam": "Sutjeska",
      "awayTeamId": 664,
      "awayTeam": "Kairat Almaty",
      "home": {
        "teamId": 673,
        "team": "Sutjeska",
        "shots": null,
        "shotsOnGoal": null,
        "possession": null,
        "corners": null,
        "yellowCards": null,
        "redCards": null,
        "expectedGoals": null
      },
      "away": {
        "teamId": 664,
        "team": "Kairat Almaty",
        "shots": null,
        "shotsOnGoal": null,
        "possession": null,
        "corners": null,
        "yellowCards": null,
        "redCards": null,
        "expectedGoals": null
      },
      "statisticsChecked": true,
      "lineupsChecked": true,
      "injuriesChecked": true,
      "lineups": [
        {
          "teamId": 673,
          "team": "Sutjeska",
          "formation": "4-3-3",
          "coach": "Milorad Pekovic",
          "starters": [
            "V. Giljen",
            "A. Golubovic",
            "A. Babic",
            "B. Kopitovic",
            "A. Raznatovic",
            "J. Cadjenovic",
            "D. Hocko",
            "M. Simun",
            "V. Cavor",
            "M. Mrvaljevic",
            "P. Anicic"
          ]
        },
        {
          "teamId": 664,
          "team": "Kairat Almaty",
          "formation": "4-2-3-1",
          "coach": "Rafael Urazbakhtin",
          "starters": [
            "T. Anarbekov",
            "L. Mata",
            "Lucas Africo",
            "A. Shirobokov",
            "A. Mrynskiy",
            "J. Oksanen",
            "A. Sadybekov",
            "I. Bekbolat",
            "Jorginho",
            "O. Jukkola",
            "M. Gual"
          ]
        }
      ],
      "injuries": []
    },
    {
      "fixtureId": 1554377,
      "date": "2026-07-16",
      "league": "UCL",
      "homeTeamId": 3327,
      "homeTeam": "Egnatia Rrogozhinë",
      "awayTeamId": 2271,
      "awayTeam": "Petrocub",
      "home": {
        "teamId": 3327,
        "team": "Egnatia Rrogozhinë",
        "shots": null,
        "shotsOnGoal": null,
        "possession": null,
        "corners": null,
        "yellowCards": null,
        "redCards": null,
        "expectedGoals": null
      },
      "away": {
        "teamId": 2271,
        "team": "Petrocub",
        "shots": null,
        "shotsOnGoal": null,
        "possession": null,
        "corners": null,
        "yellowCards": null,
        "redCards": null,
        "expectedGoals": null
      },
      "statisticsChecked": true,
      "lineupsChecked": true,
      "injuriesChecked": true,
      "lineups": [
        {
          "teamId": 3327,
          "team": "Egnatia Rrogozhinë",
          "formation": "5-3-2",
          "coach": "Nevil Dede",
          "starters": [
            "M. Dajsinani",
            "G. Jaime",
            "E. Sota",
            "E. Bitri",
            "A. Xhemajli",
            "A. Yago",
            "A. Kryeziu",
            "Fernando Medeiros",
            "K. Loukili",
            "A. Albanese",
            "S. Bakayoko"
          ]
        },
        {
          "teamId": 2271,
          "team": "Petrocub",
          "formation": "5-3-2",
          "coach": "Shota Makharadze",
          "starters": [
            "C. Avram",
            "I. Jardan",
            "C. Cucos",
            "J. Guera Djou",
            "V. Pascari",
            "S. Platica",
            "D. Puscas",
            "M. Platica",
            "M. Iosipoi",
            "P. Popescu",
            "N. Rotaru"
          ]
        }
      ],
      "injuries": []
    },
    {
      "fixtureId": 1586077,
      "date": "2026-07-16",
      "league": "WORLDCUP",
      "homeTeamId": 10,
      "homeTeam": "England",
      "awayTeamId": 26,
      "awayTeam": "Argentina",
      "home": {
        "teamId": 10,
        "team": "England",
        "shots": 5,
        "shotsOnGoal": 2,
        "possession": 36,
        "corners": 1,
        "yellowCards": 1,
        "redCards": null,
        "expectedGoals": 0.53
      },
      "away": {
        "teamId": 26,
        "team": "Argentina",
        "shots": 15,
        "shotsOnGoal": 5,
        "possession": 64,
        "corners": 6,
        "yellowCards": 3,
        "redCards": null,
        "expectedGoals": 1.84
      },
      "statisticsChecked": true,
      "lineupsChecked": true,
      "injuriesChecked": true,
      "lineups": [
        {
          "teamId": 10,
          "team": "England",
          "formation": "4-2-3-1",
          "coach": "Thomas Tuchel",
          "starters": [
            "J. Pickford",
            "R. James",
            "J. Stones",
            "M. Guehi",
            "D. Spence",
            "D. Rice",
            "E. Anderson",
            "M. Rogers",
            "J. Bellingham",
            "A. Gordon",
            "H. Kane"
          ]
        },
        {
          "teamId": 26,
          "team": "Argentina",
          "formation": "4-1-4-1",
          "coach": "Lionel Scaloni",
          "starters": [
            "E. Martinez",
            "N. Molina",
            "C. Romero",
            "L. Martinez",
            "N. Tagliafico",
            "L. Paredes",
            "G. Simeone",
            "E. Fernandez",
            "A. Mac Allister",
            "J. Alvarez",
            "L. Messi"
          ]
        }
      ],
      "injuries": [
        {
          "fixtureId": 1586077,
          "teamId": 10,
          "playerId": 158698,
          "player": "J. Quansah",
          "type": "Missing Fixture",
          "reason": "Suspension Through Sports Court"
        }
      ]
    },
    {
      "fixtureId": 1554381,
      "date": "2026-07-15",
      "league": "UCL",
      "homeTeamId": 1165,
      "homeTeam": "KuPS",
      "awayTeamId": 574,
      "awayTeam": "Vardar Skopje",
      "home": {
        "teamId": 1165,
        "team": "KuPS",
        "shots": null,
        "shotsOnGoal": null,
        "possession": null,
        "corners": null,
        "yellowCards": null,
        "redCards": null,
        "expectedGoals": null
      },
      "away": {
        "teamId": 574,
        "team": "Vardar Skopje",
        "shots": null,
        "shotsOnGoal": null,
        "possession": null,
        "corners": null,
        "yellowCards": null,
        "redCards": null,
        "expectedGoals": null
      },
      "statisticsChecked": true,
      "lineupsChecked": true,
      "injuriesChecked": true,
      "lineups": [
        {
          "teamId": 1165,
          "team": "KuPS",
          "formation": "4-2-3-1",
          "coach": "Miika Nuutinen",
          "starters": [
            "J. Kreidl",
            "A. Puukko",
            "B. Magassa",
            "K. Adams",
            "C. Antwi",
            "P. Pennanen",
            "V. R. Gasc",
            "T. Jyry",
            "G. Engvall",
            "B. Armah",
            "J. J. Moreno Ciorciari"
          ]
        },
        {
          "teamId": 574,
          "team": "Vardar Skopje",
          "formation": "5-4-1",
          "coach": "Cristian Fabbiani",
          "starters": [
            "D. Taleski",
            "G. Jankulov",
            "F. Najdovski",
            "D. Velkovski",
            "M. Matic",
            "M. Manevski",
            "Miguel Pires",
            "B. Nikolov",
            "D. Castaneda",
            "G. Rodrigues",
            "A. Omeragic"
          ]
        }
      ],
      "injuries": []
    },
    {
      "fixtureId": 1554380,
      "date": "2026-07-15",
      "league": "UCL",
      "homeTeamId": 3342,
      "homeTeam": "Inter Club d'Escaldes",
      "awayTeamId": 667,
      "awayTeam": "Lincoln Red Imps FC",
      "home": {
        "teamId": 3342,
        "team": "Inter Club d'Escaldes",
        "shots": null,
        "shotsOnGoal": null,
        "possession": null,
        "corners": null,
        "yellowCards": null,
        "redCards": null,
        "expectedGoals": null
      },
      "away": {
        "teamId": 667,
        "team": "Lincoln Red Imps FC",
        "shots": null,
        "shotsOnGoal": null,
        "possession": null,
        "corners": null,
        "yellowCards": null,
        "redCards": null,
        "expectedGoals": null
      },
      "statisticsChecked": true,
      "lineupsChecked": true,
      "injuriesChecked": true,
      "lineups": [
        {
          "teamId": 3342,
          "team": "Inter Club d'Escaldes",
          "formation": "4-3-3",
          "coach": "Felip Ortiz",
          "starters": [
            "J. Diaz",
            "M. Pochettino",
            "A. H. Hernandez",
            "A. Sanchez",
            "J. Torres",
            "A. Otegui",
            "V. Alonso",
            "David Lopez",
            "D. Berlanga",
            "B. Arellano",
            "J. Camara"
          ]
        },
        {
          "teamId": 667,
          "team": "Lincoln Red Imps FC",
          "formation": "4-3-3",
          "coach": "Juan Bezares",
          "starters": [
            "J. Hankins",
            "J. Eersteling",
            "B. Lopes",
            "C. Rutjens",
            "Nano",
            "Joe",
            "Mandi",
            "A. Mula",
            "F. Alvarez",
            "T. Garcia",
            "M. Toledano"
          ]
        }
      ],
      "injuries": []
    },
    {
      "fixtureId": 1554379,
      "date": "2026-07-15",
      "league": "UCL",
      "homeTeamId": 3502,
      "homeTeam": "Saburtalo",
      "awayTeamId": 687,
      "awayTeam": "Flora Tallinn",
      "home": {
        "teamId": 3502,
        "team": "Saburtalo",
        "shots": null,
        "shotsOnGoal": null,
        "possession": null,
        "corners": null,
        "yellowCards": null,
        "redCards": null,
        "expectedGoals": null
      },
      "away": {
        "teamId": 687,
        "team": "Flora Tallinn",
        "shots": null,
        "shotsOnGoal": null,
        "possession": null,
        "corners": null,
        "yellowCards": null,
        "redCards": null,
        "expectedGoals": null
      },
      "statisticsChecked": true,
      "lineupsChecked": true,
      "injuriesChecked": true,
      "lineups": [
        {
          "teamId": 3502,
          "team": "Saburtalo",
          "formation": "4-3-3",
          "coach": "Andriy Demchenko",
          "starters": [
            "G. Makaridze",
            "A. Zohouri",
            "A. Amisulashvili",
            "V. Selimovic",
            "J. Jinjolava",
            "B. Kardava",
            "N. Dadiani",
            "G. Kutsia",
            "V. Bedoshvili",
            "N. Sikharulashvili",
            "Z. Natchkebia"
          ]
        },
        {
          "teamId": 687,
          "team": "Flora Tallinn",
          "formation": "4-3-3",
          "coach": "Konstantin Vasiliev",
          "starters": [
            "E. Grunvald",
            "D. Kuraksin",
            "M. Kolobov",
            "R. Veering",
            "S. Tovstik",
            "R. Valdmets",
            "V. Kreida",
            "T. Varjund",
            "S. Zenjov",
            "R. Sappinen",
            "S. Alamaa"
          ]
        }
      ],
      "injuries": []
    },
    {
      "fixtureId": 1554378,
      "date": "2026-07-15",
      "league": "UCL",
      "homeTeamId": 2402,
      "homeTeam": "Gyori ETO FC",
      "awayTeamId": 278,
      "awayTeam": "Vikingur Reykjavik",
      "home": {
        "teamId": 2402,
        "team": "Gyori ETO FC",
        "shots": 12,
        "shotsOnGoal": 2,
        "possession": 62,
        "corners": 5,
        "yellowCards": 6,
        "redCards": null,
        "expectedGoals": null
      },
      "away": {
        "teamId": 278,
        "team": "Vikingur Reykjavik",
        "shots": 10,
        "shotsOnGoal": 2,
        "possession": 38,
        "corners": 4,
        "yellowCards": 2,
        "redCards": null,
        "expectedGoals": null
      },
      "statisticsChecked": true,
      "lineupsChecked": true,
      "injuriesChecked": true,
      "lineups": [
        {
          "teamId": 2402,
          "team": "Gyori ETO FC",
          "formation": "4-2-3-1",
          "coach": "Efrain Juarez",
          "starters": [
            "S. Petras",
            "S. Vladoiu",
            "M. Csinger",
            "M. Krpic",
            "D. Stefulj",
            "M. Vitalis",
            "R. Toth",
            "S. Schon",
            "Z. Gavric",
            "C. Bumba",
            "N. Njie"
          ]
        },
        {
          "teamId": 278,
          "team": "Vikingur Reykjavik",
          "formation": "4-3-3",
          "coach": "Solvi Ottesen",
          "starters": [
            "O. Kristinsson",
            "K. Gunnarsson",
            "O. Ekroth",
            "S. Thorkelsson",
            "H. Gudjonsson",
            "T. Ibrahimagic",
            "D. Hafsteinsson",
            "G. Sigurdsson",
            "V. Ingimundarson",
            "N. Hansen",
            "O. Borgthorsson"
          ]
        }
      ],
      "injuries": []
    },
    {
      "fixtureId": 1554384,
      "date": "2026-07-15",
      "league": "UCL",
      "homeTeamId": 10124,
      "homeTeam": "Riga",
      "awayTeamId": 3683,
      "awayTeam": "Ararat-Armenia",
      "home": {
        "teamId": 10124,
        "team": "Riga",
        "shots": 16,
        "shotsOnGoal": 7,
        "possession": 53,
        "corners": 2,
        "yellowCards": 4,
        "redCards": 0,
        "expectedGoals": null
      },
      "away": {
        "teamId": 3683,
        "team": "Ararat-Armenia",
        "shots": 6,
        "shotsOnGoal": 3,
        "possession": 47,
        "corners": 2,
        "yellowCards": 3,
        "redCards": 0,
        "expectedGoals": null
      },
      "statisticsChecked": true,
      "lineupsChecked": true,
      "injuriesChecked": true,
      "lineups": [
        {
          "teamId": 10124,
          "team": "Riga",
          "formation": "3-5-2",
          "coach": "Adrian Gula",
          "starters": [
            "K. Zviedris",
            "R. Jurkovskis",
            "B. Musah",
            "Paulo Eduardo",
            "R. Aouani",
            "Iago Siqueira",
            "A. Ankrah",
            "O. Galo",
            "A. Salazar",
            "M. Badamosi",
            "S. Oulad M'Hand"
          ]
        },
        {
          "teamId": 3683,
          "team": "Ararat-Armenia",
          "formation": "4-3-3",
          "coach": "Tulipa",
          "starters": [
            "Joao Bravim",
            "K. Hovhannisyan",
            "B. R. Wilson Valdez",
            "Junior Julio",
            "E. Grigoryan",
            "H. Oliveira",
            "A. Tera",
            "K. Muradyan",
            "A. Serobyan",
            "Sandro Lima",
            "Z. Shaghoyan"
          ]
        }
      ],
      "injuries": []
    },
    {
      "fixtureId": 1554387,
      "date": "2026-07-15",
      "league": "UCL",
      "homeTeamId": 354,
      "homeTeam": "The New Saints",
      "awayTeamId": 13976,
      "awayTeam": "Sabah FA",
      "home": {
        "teamId": 354,
        "team": "The New Saints",
        "shots": 10,
        "shotsOnGoal": 4,
        "possession": 46,
        "corners": 3,
        "yellowCards": 2,
        "redCards": 0,
        "expectedGoals": null
      },
      "away": {
        "teamId": 13976,
        "team": "Sabah FA",
        "shots": 12,
        "shotsOnGoal": 6,
        "possession": 54,
        "corners": 3,
        "yellowCards": 1,
        "redCards": 0,
        "expectedGoals": null
      },
      "statisticsChecked": true,
      "lineupsChecked": true,
      "injuriesChecked": true,
      "lineups": [
        {
          "teamId": 354,
          "team": "The New Saints",
          "formation": "4-4-2",
          "coach": "Craig Harrison",
          "starters": [
            "N. Shepperd",
            "D. Williams",
            "D. Simeu",
            "J. Bodenham",
            "D. Redmond",
            "L. Smith",
            "E. Farrell",
            "D. Corness",
            "R. Hughes",
            "J. Williams",
            "R. Brobbel"
          ]
        },
        {
          "teamId": 13976,
          "team": "Sabah FA",
          "formation": "4-2-3-1",
          "coach": "Valdas Dambrauskas",
          "starters": [
            "S. Pokatilov",
            "A. Zedadka",
            "E. A. Santos Junior",
            "R. Dashdamirov",
            "T. Puchacz",
            "U. Rakhmonaliyev",
            "I. Lepinjica",
            "V. Simic",
            "A. Isayev",
            "A. Malouda",
            "J. Mickels"
          ]
        }
      ],
      "injuries": []
    },
    {
      "fixtureId": 1554383,
      "date": "2026-07-15",
      "league": "UCL",
      "homeTeamId": 646,
      "homeTeam": "Levski Sofia",
      "awayTeamId": 3364,
      "awayTeam": "Borac Banja Luka",
      "home": {
        "teamId": 646,
        "team": "Levski Sofia",
        "shots": 12,
        "shotsOnGoal": 4,
        "possession": 61,
        "corners": 7,
        "yellowCards": 0,
        "redCards": 0,
        "expectedGoals": null
      },
      "away": {
        "teamId": 3364,
        "team": "Borac Banja Luka",
        "shots": 4,
        "shotsOnGoal": 0,
        "possession": 39,
        "corners": 2,
        "yellowCards": 3,
        "redCards": 0,
        "expectedGoals": null
      },
      "statisticsChecked": true,
      "lineupsChecked": true,
      "injuriesChecked": true,
      "lineups": [
        {
          "teamId": 646,
          "team": "Levski Sofia",
          "formation": "4-4-2",
          "coach": "Julio Velazquez",
          "starters": [
            "S. Vutsov",
            "O. Kamdem",
            "K. Dimitrov",
            "N. Serafimov",
            "Maicon",
            "A. Oko-Flex",
            "G. Trdin",
            "Serginho",
            "A. Centelles",
            "Reinaldo",
            "Everton Bala"
          ]
        },
        {
          "teamId": 3364,
          "team": "Borac Banja Luka",
          "formation": "3-4-3",
          "coach": "Vinko Marinovic",
          "starters": [
            "N. Cetkovic",
            "N. Jaksic",
            "A. Pascual",
            "S. Sanicanin",
            "V. Rogan",
            "S. Ogrinec",
            "M. Jojic",
            "S. Herrera",
            "A. Hiros",
            "L. Juricic",
            "S. Savic"
          ]
        }
      ],
      "injuries": []
    },
    {
      "fixtureId": 1554376,
      "date": "2026-07-15",
      "league": "UCL",
      "homeTeamId": 14281,
      "homeTeam": "Drita",
      "awayTeamId": 3872,
      "awayTeam": "Kauno Žalgiris",
      "home": {
        "teamId": 14281,
        "team": "Drita",
        "shots": 12,
        "shotsOnGoal": 4,
        "possession": 37,
        "corners": 5,
        "yellowCards": 3,
        "redCards": 0,
        "expectedGoals": null
      },
      "away": {
        "teamId": 3872,
        "team": "Kauno Žalgiris",
        "shots": 27,
        "shotsOnGoal": 9,
        "possession": 63,
        "corners": 7,
        "yellowCards": 1,
        "redCards": 0,
        "expectedGoals": null
      },
      "statisticsChecked": true,
      "lineupsChecked": true,
      "injuriesChecked": true,
      "lineups": [
        {
          "teamId": 14281,
          "team": "Drita",
          "formation": "4-2-3-1",
          "coach": "Zekirija Ramadani",
          "starters": [
            "F. Maloku",
            "R. Ovouka",
            "J. Pellumbi",
            "A. Bytyci",
            "B. Krasniqi",
            "V. Limaj",
            "A. Dabiqaj",
            "B. Krasniqi",
            "L. Balaj",
            "I. Jashari",
            "A. Manaj"
          ]
        },
        {
          "teamId": 3872,
          "team": "Kauno Žalgiris",
          "formation": "4-1-4-1",
          "coach": "Eivinas Cerniauskas",
          "starters": [
            "T. Svedkauskas",
            "F. Ourega",
            "V. Slivka",
            "A. Benchaib",
            "Leo Ribeiro",
            "F. Baldassarra",
            "M. Konatar",
            "R. Lekiatas",
            "A. Tolordava",
            "J. Moutachy",
            "Renan Oliveira"
          ]
        }
      ],
      "injuries": []
    },
    {
      "fixtureId": 1554385,
      "date": "2026-07-15",
      "league": "UCL",
      "homeTeamId": 652,
      "homeTeam": "Shamrock Rovers",
      "awayTeamId": 4625,
      "awayTeam": "Floriana",
      "home": {
        "teamId": 652,
        "team": "Shamrock Rovers",
        "shots": 21,
        "shotsOnGoal": 14,
        "possession": 56,
        "corners": 6,
        "yellowCards": 3,
        "redCards": 0,
        "expectedGoals": null
      },
      "away": {
        "teamId": 4625,
        "team": "Floriana",
        "shots": 6,
        "shotsOnGoal": 1,
        "possession": 44,
        "corners": 2,
        "yellowCards": 1,
        "redCards": 0,
        "expectedGoals": null
      },
      "statisticsChecked": true,
      "lineupsChecked": true,
      "injuriesChecked": true,
      "lineups": [
        {
          "teamId": 652,
          "team": "Shamrock Rovers",
          "formation": "3-5-2",
          "coach": "Stephen Bradley",
          "starters": [
            "E. McGinty",
            "L. Grace",
            "R. Lopes",
            "C. O'Sullivan",
            "J. Mulraney",
            "D. Watts",
            "J. O'Sullivan",
            "J. Byrne",
            "A. Brennan",
            "J. McGovern",
            "G. Burke"
          ]
        },
        {
          "teamId": 4625,
          "team": "Floriana",
          "formation": "4-4-2",
          "coach": "Daniel Portela",
          "starters": [
            "G. Cioletti",
            "C. Zammit Lonardelli",
            "O. Spiteri",
            "Kauan",
            "M. Beerman",
            "R. Muric",
            "Chapi",
            "A. Kurtalic",
            "F. Varela",
            "T. Gudelj",
            "M. Jah"
          ]
        }
      ],
      "injuries": []
    },
    {
      "fixtureId": 1554382,
      "date": "2026-07-15",
      "league": "UCL",
      "homeTeamId": 5354,
      "homeTeam": "Larne",
      "awayTeamId": 2260,
      "awayTeam": "Tre Fiori",
      "home": {
        "teamId": 5354,
        "team": "Larne",
        "shots": 12,
        "shotsOnGoal": 4,
        "possession": 68,
        "corners": 5,
        "yellowCards": 1,
        "redCards": 0,
        "expectedGoals": null
      },
      "away": {
        "teamId": 2260,
        "team": "Tre Fiori",
        "shots": 7,
        "shotsOnGoal": 3,
        "possession": 32,
        "corners": 1,
        "yellowCards": 4,
        "redCards": 2,
        "expectedGoals": null
      },
      "statisticsChecked": true,
      "lineupsChecked": true,
      "injuriesChecked": true,
      "lineups": [
        {
          "teamId": 5354,
          "team": "Larne",
          "formation": "4-3-3",
          "coach": "Gary Haveron",
          "starters": [
            "R. Ferguson",
            "T. Cosgrove",
            "D. Bent",
            "M. Ridley",
            "A. Donnelly",
            "C. Gallagher",
            "R. Doherty",
            "S. Graham",
            "C. McKendry",
            "M. Gibson",
            "M. Lusty"
          ]
        },
        {
          "teamId": 2260,
          "team": "Tre Fiori",
          "formation": "4-2-3-1",
          "coach": "Matteo Cecchetti",
          "starters": [
            "M. Nardi",
            "A. D'Addario",
            "T. Syku",
            "S. Rea",
            "M. Sancisi",
            "B. Sami",
            "R. Bertani",
            "F. Benedettini",
            "N. Manara",
            "P. Mengucci",
            "M. Prandelli"
          ]
        }
      ],
      "injuries": []
    },
    {
      "fixtureId": 1585131,
      "date": "2026-07-15",
      "league": "WORLDCUP",
      "homeTeamId": 2,
      "homeTeam": "France",
      "awayTeamId": 9,
      "awayTeam": "Spain",
      "home": {
        "teamId": 2,
        "team": "France",
        "shots": 10,
        "shotsOnGoal": 3,
        "possession": 49,
        "corners": 7,
        "yellowCards": 2,
        "redCards": null,
        "expectedGoals": 0.3
      },
      "away": {
        "teamId": 9,
        "team": "Spain",
        "shots": 10,
        "shotsOnGoal": 2,
        "possession": 51,
        "corners": 1,
        "yellowCards": 1,
        "redCards": null,
        "expectedGoals": 1.63
      },
      "statisticsChecked": true,
      "lineupsChecked": true,
      "injuriesChecked": true,
      "lineups": [
        {
          "teamId": 2,
          "team": "France",
          "formation": "4-2-3-1",
          "coach": "D. Deschamps",
          "starters": [
            "M. Maignan",
            "J. Koundé",
            "D. Upamecano",
            "W. Saliba",
            "L. Digne",
            "A. Tchouaméni",
            "A. Rabiot",
            "O. Dembélé",
            "M. Olise",
            "B. Barcola",
            "Kylian Mbappé"
          ]
        },
        {
          "teamId": 9,
          "team": "Spain",
          "formation": "4-1-2-3",
          "coach": "Luis de la Fuente",
          "starters": [
            "Unai Simón",
            "Pedro Porro",
            "Pau Cubarsí Paredes",
            "Aymeric Laporte",
            "Marc Cucurella",
            "Rodri",
            "Dani Olmo",
            "Fabián Ruiz",
            "Lamine Yamal",
            "Mikel Oyarzabal",
            "Álex Baena"
          ]
        }
      ],
      "injuries": []
    },
    {
      "fixtureId": 1581037,
      "date": "2026-07-12",
      "league": "WORLDCUP",
      "homeTeamId": 1090,
      "homeTeam": "Norway",
      "awayTeamId": 10,
      "awayTeam": "England",
      "home": {
        "teamId": 1090,
        "team": "Norway",
        "shots": 13,
        "shotsOnGoal": 4,
        "possession": 48,
        "corners": 7,
        "yellowCards": 1,
        "redCards": null,
        "expectedGoals": 0.68
      },
      "away": {
        "teamId": 10,
        "team": "England",
        "shots": 14,
        "shotsOnGoal": 8,
        "possession": 52,
        "corners": 4,
        "yellowCards": 0,
        "redCards": null,
        "expectedGoals": 1.04
      },
      "statisticsChecked": true,
      "lineupsChecked": true,
      "injuriesChecked": true,
      "lineups": [
        {
          "teamId": 1090,
          "team": "Norway",
          "formation": "4-3-3",
          "coach": "Stale Solbakken",
          "starters": [
            "O. Nyland",
            "J. Ryerson",
            "K. Ajer",
            "T. Heggem",
            "D. Wolfe",
            "M. Odegaard",
            "S. Berge",
            "P. Berg",
            "A. Sorloth",
            "E. Haaland",
            "A. Schjelderup"
          ]
        },
        {
          "teamId": 10,
          "team": "England",
          "formation": "4-2-3-1",
          "coach": "Thomas Tuchel",
          "starters": [
            "J. Pickford",
            "E. Konsa",
            "J. Stones",
            "M. Guehi",
            "N. O'Reilly",
            "D. Rice",
            "E. Anderson",
            "N. Madueke",
            "J. Bellingham",
            "A. Gordon",
            "H. Kane"
          ]
        }
      ],
      "injuries": [
        {
          "fixtureId": 1581037,
          "teamId": 1090,
          "playerId": 39362,
          "player": "M. Pedersen",
          "type": "Missing Fixture",
          "reason": "Cold"
        },
        {
          "fixtureId": 1581037,
          "teamId": 10,
          "playerId": 292,
          "player": "J. Henderson",
          "type": "Missing Fixture",
          "reason": "Wirst Injury"
        },
        {
          "fixtureId": 1581037,
          "teamId": 10,
          "playerId": 158698,
          "player": "J. Quansah",
          "type": "Missing Fixture",
          "reason": "Suspension Through Sports Court"
        }
      ]
    },
    {
      "fixtureId": 1582681,
      "date": "2026-07-12",
      "league": "WORLDCUP",
      "homeTeamId": 26,
      "homeTeam": "Argentina",
      "awayTeamId": 15,
      "awayTeam": "Switzerland",
      "home": {
        "teamId": 26,
        "team": "Argentina",
        "shots": 22,
        "shotsOnGoal": 7,
        "possession": 59,
        "corners": 8,
        "yellowCards": 3,
        "redCards": 0,
        "expectedGoals": 1.94
      },
      "away": {
        "teamId": 15,
        "team": "Switzerland",
        "shots": 11,
        "shotsOnGoal": 5,
        "possession": 41,
        "corners": 2,
        "yellowCards": 2,
        "redCards": 1,
        "expectedGoals": 0.47
      },
      "statisticsChecked": true,
      "lineupsChecked": true,
      "injuriesChecked": true,
      "lineups": [
        {
          "teamId": 26,
          "team": "Argentina",
          "formation": "4-1-3-2",
          "coach": "Lionel Scaloni",
          "starters": [
            "Emiliano Martínez",
            "Nahuel Molina",
            "Cristian Romero",
            "Lisandro Martínez",
            "Nicolás Tagliafico",
            "Leandro Paredes",
            "Rodrigo De Paul",
            "Enzo Fernández",
            "Alexis Mac Allister",
            "Lionel Messi",
            "Julián Alvarez"
          ]
        },
        {
          "teamId": 15,
          "team": "Switzerland",
          "formation": "4-2-3-1",
          "coach": "Murat Yakin",
          "starters": [
            "Gregor Kobel",
            "Denis Zakaria",
            "Nico Elvedi",
            "Manuel Akanji",
            "Ricardo Rodríguez",
            "Remo Freuler",
            "Granit Xhaka",
            "Djibril Sow",
            "Fabian Rieder",
            "Dan Ndoye",
            "Breel Embolo"
          ]
        }
      ],
      "injuries": [
        {
          "fixtureId": 1582681,
          "teamId": 15,
          "playerId": 349344,
          "player": "L. Jaquez",
          "type": "Missing Fixture",
          "reason": "Muscle Bruise"
        },
        {
          "fixtureId": 1582681,
          "teamId": 15,
          "playerId": 951,
          "player": "M. Aebischer",
          "type": "Missing Fixture",
          "reason": "Muscle Bruise"
        }
      ]
    }
  ]
};
});
