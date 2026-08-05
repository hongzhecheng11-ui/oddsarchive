(function attachMatchStatisticsPack(root, factory) {
  const pack = factory();
  if (typeof module !== "undefined" && module.exports) module.exports = pack;
  if (root) root.ODDS_ARCHIVE_MATCH_STATISTICS_PACK = pack;
})(typeof window !== "undefined" ? window : globalThis, function createMatchStatisticsPack() {
  return {
  "version": "match-statistics-v1",
  "updatedAt": "2026-08-05T10:46:15.456Z",
  "collection": {
    "dates": [
      "2026-08-04",
      "2026-08-03",
      "2026-08-02"
    ],
    "requestGroups": 5,
    "skippedGroups": 73,
    "finishedFixtures": 11,
    "skippedComplete": 10,
    "saved": 1,
    "failures": 0,
    "errors": []
  },
  "matches": [
    {
      "fixtureId": 1556633,
      "date": "2026-08-04",
      "league": "SCOTTISH_PREMIERSHIP",
      "homeTeamId": 247,
      "homeTeam": "Celtic",
      "awayTeamId": 253,
      "awayTeam": "Dundee",
      "home": {
        "teamId": 247,
        "team": "Celtic",
        "shots": 18,
        "shotsOnGoal": 4,
        "possession": 65,
        "corners": 9,
        "yellowCards": 1,
        "redCards": null,
        "expectedGoals": 2.55
      },
      "away": {
        "teamId": 253,
        "team": "Dundee",
        "shots": 11,
        "shotsOnGoal": 3,
        "possession": 35,
        "corners": 4,
        "yellowCards": 1,
        "redCards": null,
        "expectedGoals": 0.47
      },
      "statisticsChecked": true,
      "lineupsChecked": true,
      "injuriesChecked": true,
      "lineups": [
        {
          "teamId": 247,
          "team": "Celtic",
          "formation": "4-2-3-1",
          "coach": "Martin O'Neill",
          "starters": [
            "Viljami Sinisalo",
            "Alistair Johnston",
            "Cameron Carter-Vickers",
            "Auston Trusty",
            "Kieran Tierney",
            "Callum McGregor",
            "Arne Engels",
            "Camilo Durán",
            "Benjamin Nygren",
            "Yang Hyun-Jun",
            "Kasper Høgh"
          ]
        },
        {
          "teamId": 253,
          "team": "Dundee",
          "formation": "4-4-2",
          "coach": "Steven Pressley",
          "starters": [
            "Owen Goodman",
            "Drey Wright",
            "Ryan Astley",
            "Owen Bevan",
            "Idris Odutayo",
            "Joe Bevan",
            "Ethan Hamilton",
            "Ryan Finnigan",
            "Charlie Reilly",
            "Joe Westley",
            "Simon Murray"
          ]
        }
      ],
      "injuries": []
    },
    {
      "fixtureId": 1556632,
      "date": "2026-08-03",
      "league": "SCOTTISH_PREMIERSHIP",
      "homeTeamId": 249,
      "homeTeam": "Hibernian",
      "awayTeamId": 256,
      "awayTeam": "Motherwell",
      "home": {
        "teamId": 249,
        "team": "Hibernian",
        "shots": 19,
        "shotsOnGoal": 6,
        "possession": 48,
        "corners": 9,
        "yellowCards": 1,
        "redCards": null,
        "expectedGoals": 1.92
      },
      "away": {
        "teamId": 256,
        "team": "Motherwell",
        "shots": 9,
        "shotsOnGoal": 5,
        "possession": 52,
        "corners": 2,
        "yellowCards": 3,
        "redCards": null,
        "expectedGoals": 2
      },
      "statisticsChecked": true,
      "lineupsChecked": true,
      "injuriesChecked": true,
      "lineups": [
        {
          "teamId": 249,
          "team": "Hibernian",
          "formation": "3-4-3",
          "coach": "David Gray",
          "starters": [
            "R. Sallinger",
            "W. O'Hora",
            "J. Kerr",
            "J. Obita",
            "F. Passlack",
            "J. Mulligan",
            "M. Chaiwa",
            "A. Mayor",
            "O. Elding",
            "N. Lowe",
            "M. Boyle"
          ]
        },
        {
          "teamId": 256,
          "team": "Motherwell",
          "formation": "4-4-2",
          "coach": "Alfred Johansson",
          "starters": [
            "A. Paulsen",
            "T. Sparrow",
            "J. Girdwood-Reich",
            "M. Moormann",
            "D. Williams",
            "W. Vogt",
            "O. Priestman",
            "L. Fadinger",
            "E. Longelo",
            "I. Said",
            "R. Charles-Cook"
          ]
        }
      ],
      "injuries": []
    },
    {
      "fixtureId": 1556630,
      "date": "2026-08-02",
      "league": "SCOTTISH_PREMIERSHIP",
      "homeTeamId": 252,
      "homeTeam": "Aberdeen",
      "awayTeamId": 254,
      "awayTeam": "Heart Of Midlothian",
      "home": {
        "teamId": 252,
        "team": "Aberdeen",
        "shots": 11,
        "shotsOnGoal": 3,
        "possession": 51,
        "corners": 4,
        "yellowCards": 3,
        "redCards": 0,
        "expectedGoals": 2.66
      },
      "away": {
        "teamId": 254,
        "team": "Heart Of Midlothian",
        "shots": 19,
        "shotsOnGoal": 4,
        "possession": 49,
        "corners": 6,
        "yellowCards": 2,
        "redCards": 1,
        "expectedGoals": 1.34
      },
      "statisticsChecked": true,
      "lineupsChecked": true,
      "injuriesChecked": true,
      "lineups": [
        {
          "teamId": 252,
          "team": "Aberdeen",
          "formation": "4-2-3-1",
          "coach": "Stephen Robinson",
          "starters": [
            "M. Muller",
            "C. Cadden",
            "L. Mayo",
            "D. Happe",
            "N. Guinness-Walker",
            "B. Lyons",
            "A. Aremu",
            "T. Olusanya",
            "C. Ronan",
            "T. Yogane",
            "K. Nisbet"
          ]
        },
        {
          "teamId": 254,
          "team": "Heart Of Midlothian",
          "formation": "4-2-2-2",
          "coach": "Wouter Vrancken",
          "starters": [
            "B. Reus",
            "J. Altena",
            "O. McEntee",
            "S. Findlay",
            "H. Milne",
            "L. Mendy",
            "B. Spittal",
            "S. Kerjota",
            "C. Miller",
            "C. Braga",
            "A. Ba-Sy"
          ]
        }
      ],
      "injuries": []
    },
    {
      "fixtureId": 1556631,
      "date": "2026-08-02",
      "league": "SCOTTISH_PREMIERSHIP",
      "homeTeamId": 258,
      "homeTeam": "ST Johnstone",
      "awayTeamId": 250,
      "awayTeam": "Kilmarnock",
      "home": {
        "teamId": 258,
        "team": "ST Johnstone",
        "shots": 15,
        "shotsOnGoal": 5,
        "possession": 56,
        "corners": 6,
        "yellowCards": 2,
        "redCards": null,
        "expectedGoals": 1.76
      },
      "away": {
        "teamId": 250,
        "team": "Kilmarnock",
        "shots": 7,
        "shotsOnGoal": 5,
        "possession": 44,
        "corners": 3,
        "yellowCards": 2,
        "redCards": null,
        "expectedGoals": 0.79
      },
      "statisticsChecked": true,
      "lineupsChecked": true,
      "injuriesChecked": true,
      "lineups": [
        {
          "teamId": 258,
          "team": "ST Johnstone",
          "formation": "4-2-3-1",
          "coach": "Simo Valakari",
          "starters": [
            "Toby Steward",
            "Liam Smith",
            "Zach Mitchell",
            "Cheick Diabate",
            "Matty Foulds",
            "Reece McAlear",
            "Jason Holt",
            "Sam Stanton",
            "Jamie Gullan",
            "Ruari Paton",
            "Josh Fowler"
          ]
        },
        {
          "teamId": 250,
          "team": "Kilmarnock",
          "formation": "4-4-1-1",
          "coach": "Neil McCann",
          "starters": [
            "Max Stryjek",
            "Erik Ring",
            "Ethan Brown",
            "George Stanger",
            "Michael Schjønning-Larsen",
            "Greg Kiltie",
            "Aaron Tshibola",
            "Tom Lowery",
            "Nicky Cleșcenco",
            "Tyreece John-Jules",
            "Joe Hugill"
          ]
        }
      ],
      "injuries": []
    },
    {
      "fixtureId": 1507019,
      "date": "2026-08-02",
      "league": "KLEAGUE1",
      "homeTeamId": 2750,
      "homeTeam": "Daejeon Citizen",
      "awayTeamId": 2759,
      "awayTeam": "Gwangju FC",
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
          "teamId": 2750,
          "team": "Daejeon Citizen",
          "formation": "4-4-2",
          "coach": "Sun-Hong Hwang",
          "starters": [
            "Lee Chang-geun",
            "Kim Moon-hwan",
            "Jo Seong-Kwon",
            "Anton Kryvotsiuk",
            "Jin-ya Kim",
            "Won-Sang Um",
            "Kim Bong-Soo",
            "Yun-seong Kang",
            "Jin-su Seo",
            "Min-kyu Joo",
            "Masatoshi Ishida"
          ]
        },
        {
          "teamId": 2759,
          "team": "Gwangju FC",
          "formation": "4-1-4-1",
          "coach": "Jeong-kyu Lee",
          "starters": [
            "Kyeong-min Kim",
            "Sung-yun Kwon",
            "Teun van Grunsven",
            "João Pedro",
            "Won-jae Park",
            "Se-jong Ju",
            "Adriel D'Avila Ba Loua",
            "Yu Je-ho",
            "Min-seo Moon",
            "Ji-hoon Jeong",
            "John Iredale"
          ]
        }
      ],
      "injuries": []
    },
    {
      "fixtureId": 1507020,
      "date": "2026-08-02",
      "league": "KLEAGUE1",
      "homeTeamId": 2761,
      "homeTeam": "Jeju United FC",
      "awayTeamId": 2763,
      "awayTeam": "Incheon United",
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
      "statisticsChecked": true,
      "lineupsChecked": true,
      "injuriesChecked": true,
      "lineups": [
        {
          "teamId": 2761,
          "team": "Jeju United FC",
          "formation": "",
          "coach": "Sergio Costa",
          "starters": [
            "Dong-jun Kim",
            "In-su Yu",
            "Tobias Figueiredo",
            "Julien Celestine",
            "Ryun-sung Kim",
            "Italo",
            "Jae-hyeok Oh",
            "Kim Jun-Ha",
            "Chang-jun Park",
            "Emerson Ramon",
            "Kim Shin-jin"
          ]
        },
        {
          "teamId": 2763,
          "team": "Incheon United",
          "formation": "",
          "coach": "Jong-Hwan Yoon",
          "starters": [
            "Dong-heon Kim",
            "Kim Myung-Sun",
            "Gun-hee Kim",
            "Juan Ibiza",
            "Ju-yong Lee",
            "Seong-min Kim",
            "Jae-min Seo",
            "Myung Joo Lee",
            "Gerso Fernandes",
            "Chung-yong Lee",
            "Stefan Mugoša"
          ]
        }
      ],
      "injuries": []
    },
    {
      "fixtureId": 1507021,
      "date": "2026-08-02",
      "league": "KLEAGUE1",
      "homeTeamId": 2767,
      "homeTeam": "Ulsan Hyundai FC",
      "awayTeamId": 2748,
      "awayTeam": "FC Anyang",
      "home": {
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
      "away": {
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
      "statisticsChecked": true,
      "lineupsChecked": true,
      "injuriesChecked": true,
      "lineups": [
        {
          "teamId": 2767,
          "team": "Ulsan Hyundai FC",
          "formation": "",
          "coach": "Hyun-seok Kim",
          "starters": [
            "Hyeon-woo Jo",
            "Myeong-kwan Seo",
            "Jung Seung-hyeon",
            "Kim Young-gwon",
            "Jang Si-young",
            "Kyu-seong Lee",
            "Thomas Oude Kotte",
            "Hyun-taek Cho",
            "Lee Jin-hyun",
            "Dong-gyeong Lee",
            "Erick Farias"
          ]
        },
        {
          "teamId": 2748,
          "team": "FC Anyang",
          "formation": "",
          "coach": "Byeong-hoon Ryu",
          "starters": [
            "Jung-hoon Kim",
            "Kang Ji-hun",
            "Chang-yong Lee",
            "Kyung-won Kwon",
            "Dong-jin Kim",
            "Matheus Oliveira",
            "Jung-hyun Kim",
            "Branislav Knežević",
            "Geon-Joo Choi",
            "Breno Herculano",
            "Ivan Jukić"
          ]
        }
      ],
      "injuries": []
    },
    {
      "fixtureId": 1510400,
      "date": "2026-08-02",
      "league": "KLEAGUE2",
      "homeTeamId": 2752,
      "homeTeam": "Busan I Park",
      "awayTeamId": 2749,
      "awayTeam": "Seoul E-Land FC",
      "home": {
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
      "fixtureId": 1510399,
      "date": "2026-08-02",
      "league": "KLEAGUE2",
      "homeTeamId": 2758,
      "homeTeam": "Ansan Greeners",
      "awayTeamId": 7076,
      "awayTeam": "Gimhae City",
      "home": {
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
      "away": {
        "teamId": 7076,
        "team": "Gimhae City",
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
      "fixtureId": 1510402,
      "date": "2026-08-02",
      "league": "KLEAGUE2",
      "homeTeamId": 2760,
      "homeTeam": "Jeonnam Dragons",
      "awayTeamId": 7098,
      "awayTeam": "Paju Citizen",
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
      "lineups": [],
      "injuries": []
    },
    {
      "fixtureId": 1510401,
      "date": "2026-08-02",
      "league": "KLEAGUE2",
      "homeTeamId": 7078,
      "homeTeam": "Gimpo Citizen",
      "awayTeamId": 2751,
      "awayTeam": "Gyeongnam FC",
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
      "statisticsChecked": true,
      "lineupsChecked": true,
      "injuriesChecked": true,
      "lineups": [],
      "injuries": []
    },
    {
      "fixtureId": 1556628,
      "date": "2026-08-01",
      "league": "SCOTTISH_PREMIERSHIP",
      "homeTeamId": 1386,
      "homeTeam": "Dundee Utd",
      "awayTeamId": 257,
      "awayTeam": "Rangers",
      "home": {
        "teamId": 1386,
        "team": "Dundee Utd",
        "shots": 11,
        "shotsOnGoal": 3,
        "possession": 45,
        "corners": 5,
        "yellowCards": 1,
        "redCards": null,
        "expectedGoals": 1.59
      },
      "away": {
        "teamId": 257,
        "team": "Rangers",
        "shots": 21,
        "shotsOnGoal": 7,
        "possession": 55,
        "corners": 10,
        "yellowCards": 3,
        "redCards": null,
        "expectedGoals": 1.43
      },
      "statisticsChecked": true,
      "lineupsChecked": true,
      "injuriesChecked": true,
      "lineups": [
        {
          "teamId": 1386,
          "team": "Dundee Utd",
          "formation": "4-3-3",
          "coach": "Jim Goodwin",
          "starters": [
            "J. Walton",
            "J. Rawlins",
            "B. Esselink",
            "M. Forbes",
            "W. Ferry",
            "V. Sevelj",
            "D. Tait",
            "E. Agyei",
            "J. Randall",
            "L. Rose",
            "Z. Sapsford"
          ]
        },
        {
          "teamId": 257,
          "team": "Rangers",
          "formation": "4-2-3-1",
          "coach": "Derek McInnes",
          "starters": [
            "I. Pandur",
            "D. Sterling",
            "B. Godfrey",
            "E. Fernandez",
            "T. Rommens",
            "M. Diomande",
            "C. Devlin",
            "R. Naderi",
            "T. Aasgaard",
            "D. Gassama",
            "L. Shankland"
          ]
        }
      ],
      "injuries": []
    },
    {
      "fixtureId": 1556629,
      "date": "2026-08-01",
      "league": "SCOTTISH_PREMIERSHIP",
      "homeTeamId": 1389,
      "homeTeam": "Falkirk",
      "awayTeamId": 251,
      "awayTeam": "ST Mirren",
      "home": {
        "teamId": 1389,
        "team": "Falkirk",
        "shots": 10,
        "shotsOnGoal": 1,
        "possession": 58,
        "corners": 7,
        "yellowCards": 0,
        "redCards": null,
        "expectedGoals": 0.77
      },
      "away": {
        "teamId": 251,
        "team": "ST Mirren",
        "shots": 15,
        "shotsOnGoal": 5,
        "possession": 42,
        "corners": 7,
        "yellowCards": 4,
        "redCards": null,
        "expectedGoals": 1.52
      },
      "statisticsChecked": true,
      "lineupsChecked": true,
      "injuriesChecked": true,
      "lineups": [
        {
          "teamId": 1389,
          "team": "Falkirk",
          "formation": "4-2-3-1",
          "coach": "John McGlynn",
          "starters": [
            "S. Bain",
            "R. Strain",
            "D. Melniks",
            "L. Henderson",
            "S. Tanser",
            "J. McMillan",
            "C. Sibbald",
            "J. Gardner",
            "F. Yeats",
            "E. Laidlaw",
            "R. MacIver"
          ]
        },
        {
          "teamId": 251,
          "team": "ST Mirren",
          "formation": "4-2-3-1",
          "coach": "Craig McLeish",
          "starters": [
            "J. Chapman",
            "J. Richardson",
            "A. Gogic",
            "M. Fraser",
            "H. Fieldson",
            "R. Carr",
            "P. Nsio",
            "S. Ramos",
            "K. Phillips",
            "C. R. Mochrie",
            "E. Sule"
          ]
        }
      ],
      "injuries": []
    },
    {
      "fixtureId": 1507016,
      "date": "2026-08-01",
      "league": "KLEAGUE1",
      "homeTeamId": 2746,
      "homeTeam": "Gangwon FC",
      "awayTeamId": 2745,
      "awayTeam": "Bucheon FC 1995",
      "home": {
        "teamId": 2746,
        "team": "Gangwon FC",
        "shots": 11,
        "shotsOnGoal": 3,
        "possession": 67,
        "corners": 6,
        "yellowCards": 4,
        "redCards": 0,
        "expectedGoals": null
      },
      "away": {
        "teamId": 2745,
        "team": "Bucheon FC 1995",
        "shots": 10,
        "shotsOnGoal": 6,
        "possession": 33,
        "corners": 5,
        "yellowCards": 2,
        "redCards": 0,
        "expectedGoals": null
      },
      "statisticsChecked": true,
      "lineupsChecked": true,
      "injuriesChecked": true,
      "lineups": [
        {
          "teamId": 2746,
          "team": "Gangwon FC",
          "formation": "",
          "coach": "Kyung-Ho Chung",
          "starters": [
            "Park Cheong-hyo",
            "Kang Joon-hyuk",
            "Marko Tuci",
            "Gi-Hyuk Lee",
            "Song Jun-Seok",
            "Kang Yun-Gu",
            "You-Hyeon Lee",
            "Kim Dong-hyeon",
            "Dae-won Kim",
            "Byeong-chan Choi",
            "Young-jun Goh"
          ]
        },
        {
          "teamId": 2745,
          "team": "Bucheon FC 1995",
          "formation": "",
          "coach": "Ou-Ghu Kwon",
          "starters": [
            "Hyeon-yeob kim",
            "Patrick William",
            "Dong-kyu Baek",
            "Sung-wook Hong",
            "Thiaguinho Santos",
            "Sung Ye-geon",
            "Sang-jun Kim",
            "Bong-hun Yeo",
            "Rodrigo Bassani",
            "Vitor Gabriel",
            "Galego"
          ]
        }
      ],
      "injuries": []
    },
    {
      "fixtureId": 1507017,
      "date": "2026-08-01",
      "league": "KLEAGUE1",
      "homeTeamId": 2762,
      "homeTeam": "Jeonbuk Motors",
      "awayTeamId": 2766,
      "awayTeam": "FC Seoul",
      "home": {
        "teamId": 2762,
        "team": "Jeonbuk Motors",
        "shots": 3,
        "shotsOnGoal": 0,
        "possession": 53,
        "corners": 4,
        "yellowCards": 2,
        "redCards": 0,
        "expectedGoals": null
      },
      "away": {
        "teamId": 2766,
        "team": "FC Seoul",
        "shots": 2,
        "shotsOnGoal": 0,
        "possession": 47,
        "corners": 5,
        "yellowCards": 2,
        "redCards": 0,
        "expectedGoals": null
      },
      "statisticsChecked": true,
      "lineupsChecked": true,
      "injuriesChecked": true,
      "lineups": [
        {
          "teamId": 2762,
          "team": "Jeonbuk Motors",
          "formation": "",
          "coach": "Jung-Yong Chung",
          "starters": [
            "Song Bum-keun",
            "Tae-hwan Kim",
            "Wi-je Cho",
            "Yeong-bin Kim",
            "Choi Woo-jin",
            "Oberdan Alionço",
            "Jin-gyu Kim",
            "Seung-seob Kim",
            "Kang Sang-Yun",
            "Seung-Woo Lee",
            "Gytis Paulauskas"
          ]
        },
        {
          "teamId": 2766,
          "team": "FC Seoul",
          "formation": "",
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
        }
      ],
      "injuries": []
    },
    {
      "fixtureId": 1507018,
      "date": "2026-08-01",
      "league": "KLEAGUE1",
      "homeTeamId": 2764,
      "homeTeam": "Pohang Steelers",
      "awayTeamId": 2768,
      "awayTeam": "Gimcheon Sangmu FC",
      "home": {
        "teamId": 2764,
        "team": "Pohang Steelers",
        "shots": 6,
        "shotsOnGoal": 2,
        "possession": 39,
        "corners": 3,
        "yellowCards": 0,
        "redCards": 1,
        "expectedGoals": null
      },
      "away": {
        "teamId": 2768,
        "team": "Gimcheon Sangmu FC",
        "shots": 5,
        "shotsOnGoal": 2,
        "possession": 61,
        "corners": 7,
        "yellowCards": 0,
        "redCards": 0,
        "expectedGoals": null
      },
      "statisticsChecked": true,
      "lineupsChecked": true,
      "injuriesChecked": true,
      "lineups": [
        {
          "teamId": 2764,
          "team": "Pohang Steelers",
          "formation": "",
          "coach": "Tae-Ha Park",
          "starters": [
            "Sung-min Hong",
            "Kwang-hun Shin",
            "Park Chan-Yong",
            "Ho-jin Kim",
            "Jeong-won Eo",
            "Dong-jin Kim",
            "Sung-Yueng Ki",
            "Wanderson",
            "An Jae-joon",
            "Sang-hyeok Cho",
            "Jakob Tranziska"
          ]
        },
        {
          "teamId": 2768,
          "team": "Gimcheon Sangmu FC",
          "formation": "",
          "coach": "Seung-jin Joo",
          "starters": [
            "Jong-beom Baek",
            "Tae-hwan Kim",
            "Byeon Jun-soo",
            "Jung-taek Lee",
            "Park Cheol-woo",
            "Lee Kang-Hyeon",
            "Jae-hyeon Go",
            "Se-jin Park",
            "Tae-jun Park",
            "Yun-sang Hong",
            "Jeong Jae-Min"
          ]
        }
      ],
      "injuries": []
    },
    {
      "fixtureId": 1510395,
      "date": "2026-08-01",
      "league": "KLEAGUE2",
      "homeTeamId": 2753,
      "homeTeam": "Asan Mugunghwa",
      "awayTeamId": 2757,
      "awayTeam": "Seongnam FC",
      "home": {
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
      "away": {
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
      "statisticsChecked": true,
      "lineupsChecked": true,
      "injuriesChecked": true,
      "lineups": [
        {
          "teamId": 2753,
          "team": "Asan Mugunghwa",
          "formation": "3-4-3",
          "coach": "André Gaspar",
          "starters": [
            "Shin Song-Hun",
            "Lee Ho-In",
            "Jeong Woo-Jae",
            "Kim Young-Nam",
            "Son Jun-Ho",
            "Kim Ju-Sung",
            "Kim Jong-Min",
            "Denisson"
          ]
        },
        {
          "teamId": 2757,
          "team": "Seongnam FC",
          "formation": "4-4-2",
          "coach": "Kyung-jun Jeon",
          "starters": [
            "Lee Gwang-Yeon",
            "You Ju-An",
            "Lee Sang-Min",
            "Yu Sun",
            "Lee Jeong-Bin",
            "Ryu Jun-Sun",
            "Park Su-Bin",
            "Yang Tae-Yang",
            "Yun Min-Ho"
          ]
        }
      ],
      "injuries": []
    },
    {
      "fixtureId": 1510396,
      "date": "2026-08-01",
      "league": "KLEAGUE2",
      "homeTeamId": 7060,
      "homeTeam": "Cheonan City",
      "awayTeamId": 9171,
      "awayTeam": "Yongin City",
      "home": {
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
      "away": {
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
      "statisticsChecked": true,
      "lineupsChecked": true,
      "injuriesChecked": true,
      "lineups": [
        {
          "teamId": 7060,
          "team": "Cheonan City",
          "formation": "3-4-3",
          "coach": "Jin-sub Park",
          "starters": [
            "Park Dae-Han",
            "Kim Seong-Ju",
            "Choi Jun-Hyeok",
            "Cha Seung-Hyeon",
            "Bruno Lamas",
            "Koo Jong-Uk",
            "Lee Dong-hyeop",
            "Lee Kyu-Min",
            "A. Toungara"
          ]
        },
        {
          "teamId": 9171,
          "team": "Yongin City",
          "formation": "3-4-3",
          "coach": "Yun-kyum Choi",
          "starters": [
            "Kim Hyeon-Jun",
            "Kim Jin-Ho",
            "Kim Han-seo",
            "Kim Han-Gil",
            "Vitinho"
          ]
        }
      ],
      "injuries": []
    },
    {
      "fixtureId": 1510397,
      "date": "2026-08-01",
      "league": "KLEAGUE2",
      "homeTeamId": 7061,
      "homeTeam": "Cheongju",
      "awayTeamId": 2765,
      "awayTeam": "Suwon Bluewings",
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
      "statisticsChecked": true,
      "lineupsChecked": true,
      "injuriesChecked": true,
      "lineups": [
        {
          "teamId": 7061,
          "team": "Cheongju",
          "formation": "4-3-3",
          "coach": "Rui Quinta",
          "starters": [
            "Lee Seung-Hwan",
            "Bak Keon-Woo",
            "Ju-Young Jo",
            "Kim Seon-Min",
            "Jeong Jin-Woo",
            "Seung-Chan Heo",
            "Lee Jong-Eon"
          ]
        },
        {
          "teamId": 2765,
          "team": "Suwon Bluewings",
          "formation": "4-4-2",
          "coach": "Jung-hyo Lee",
          "starters": [
            "Kim Joon-Hong",
            "Lee Geon-Hee",
            "Ko Jong-Hyun",
            "Han Hyeon-Seo",
            "Lee Jun-Jae",
            "Fessin",
            "Park Hyun-Bin",
            "Jeong Ho-Yeon",
            "Reis",
            "Kang Hyun-Muk"
          ]
        }
      ],
      "injuries": []
    },
    {
      "fixtureId": 1510398,
      "date": "2026-08-01",
      "league": "KLEAGUE2",
      "homeTeamId": 7087,
      "homeTeam": "Hwaseong",
      "awayTeamId": 2747,
      "awayTeam": "Daegu FC",
      "home": {
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
      "lineups": [
        {
          "teamId": 7087,
          "team": "Hwaseong",
          "formation": "3-4-3",
          "coach": "Du-ri Cha",
          "starters": [
            "Kim Seung-Gun",
            "Park Jun-Seo",
            "A. Vojnović",
            "Min-Jun Jang",
            "Kim Dae-Hwan",
            "Park Jae-Seong",
            "Lee Jong-Sung",
            "L. Pllana",
            "Kim Byong-Oh",
            "Jegal Jae-Min"
          ]
        },
        {
          "teamId": 2747,
          "team": "Daegu FC",
          "formation": "3-4-3",
          "coach": "Sung-yong Choi",
          "starters": [
            "Kim Kang-San",
            "Kim Hyeong-Jin",
            "Hwang In-Taek",
            "Hwang Jae-Won",
            "Han Jong-Mu",
            "Ryu Jae-Moon",
            "Choi Kang-min",
            "Danrlei",
            "Kim Ju-Kong"
          ]
        }
      ],
      "injuries": []
    },
    {
      "fixtureId": 1593526,
      "date": "2026-07-31",
      "league": "UEL",
      "homeTeamId": 604,
      "homeTeam": "Maccabi Tel Aviv",
      "awayTeamId": 568,
      "awayTeam": "Sheriff Tiraspol",
      "home": {
        "teamId": 604,
        "team": "Maccabi Tel Aviv",
        "shots": null,
        "shotsOnGoal": null,
        "possession": null,
        "corners": null,
        "yellowCards": 0,
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
        "yellowCards": 2,
        "redCards": 0,
        "expectedGoals": null
      },
      "statisticsChecked": true,
      "lineupsChecked": true,
      "injuriesChecked": true,
      "lineups": [
        {
          "teamId": 604,
          "team": "Maccabi Tel Aviv",
          "formation": "4-3-3",
          "coach": "Kenny Miller",
          "starters": [
            "O. Melika",
            "N. Ben Harush",
            "M. Camara",
            "R. Shlomo",
            "R. Revivo",
            "D. Peretz",
            "I. Sissokho",
            "I. Shahar",
            "S. Jehezkel",
            "S. Abu Farkhi",
            "H. Varela"
          ]
        },
        {
          "teamId": 568,
          "team": "Sheriff Tiraspol",
          "formation": "4-3-3",
          "coach": "Victor Mihailov",
          "starters": [
            "E. Timbur",
            "M. Ouedraogo",
            "B. Ciss",
            "B. Fomba",
            "Rai",
            "Mota",
            "D. Klas",
            "A. Pergjoni",
            "L. Jaures-Ulrich",
            "S. Kone",
            "D. Forov"
          ]
        }
      ],
      "injuries": []
    },
    {
      "fixtureId": 1556549,
      "date": "2026-07-31",
      "league": "UEL",
      "homeTeamId": 397,
      "homeTeam": "FC Midtjylland",
      "awayTeamId": 549,
      "awayTeam": "Beşiktaş",
      "home": {
        "teamId": 397,
        "team": "FC Midtjylland",
        "shots": null,
        "shotsOnGoal": null,
        "possession": null,
        "corners": null,
        "yellowCards": 4,
        "redCards": 1,
        "expectedGoals": null
      },
      "away": {
        "teamId": 549,
        "team": "Beşiktaş",
        "shots": null,
        "shotsOnGoal": null,
        "possession": null,
        "corners": null,
        "yellowCards": 3,
        "redCards": 0,
        "expectedGoals": null
      },
      "statisticsChecked": true,
      "lineupsChecked": true,
      "injuriesChecked": true,
      "lineups": [
        {
          "teamId": 397,
          "team": "FC Midtjylland",
          "formation": "4-3-3",
          "coach": "Mike Tullberg",
          "starters": [
            "E. Olafsson",
            "R. Kristensen",
            "M. Erlic",
            "M. B. Sorensen",
            "D. Castillo",
            "P. Billing",
            "P. Bravo",
            "V. Byskov",
            "D. Osorio",
            "Cho Gue-Sung",
            "Franculino"
          ]
        },
        {
          "teamId": 549,
          "team": "Beşiktaş",
          "formation": "4-1-4-1",
          "coach": "Vincenzo Italiano",
          "starters": [
            "A. Nubel",
            "M. Murillo",
            "T. Djalo",
            "E. Topcu",
            "R. Yilmaz",
            "S. Ozcan",
            "V. Cerny",
            "J. Olaitan",
            "O. Kokcu",
            "I. Fakili",
            "Oh Hyeon-Gyu"
          ]
        }
      ],
      "injuries": []
    },
    {
      "fixtureId": 1593527,
      "date": "2026-07-31",
      "league": "UEL",
      "homeTeamId": 3403,
      "homeTeam": "Pafos",
      "awayTeamId": 608,
      "awayTeam": "HNK Hajduk Split",
      "home": {
        "teamId": 3403,
        "team": "Pafos",
        "shots": null,
        "shotsOnGoal": null,
        "possession": null,
        "corners": null,
        "yellowCards": 3,
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
          "teamId": 3403,
          "team": "Pafos",
          "formation": "4-3-3",
          "coach": "Albert Celades",
          "starters": [
            "R. Majecki",
            "Bruno",
            "D. Goldar",
            "David Luiz",
            "N. Ioannou",
            "D. Quina",
            "I. Sunjic",
            "Guga",
            "Biel",
            "Lele",
            "Jaja"
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
            "D. Maresic",
            "A. Van Hoorenbeeck",
            "S. Hrgovic",
            "R. Pukstas",
            "A. Pajaziti",
            "A. Guram",
            "D. de Almeida",
            "D. Melnjak",
            "M. Sego"
          ]
        }
      ],
      "injuries": []
    },
    {
      "fixtureId": 1556550,
      "date": "2026-07-31",
      "league": "UEL",
      "homeTeamId": 3723,
      "homeTeam": "Hradec Králové",
      "awayTeamId": 325,
      "awayTeam": "Tromso",
      "home": {
        "teamId": 3723,
        "team": "Hradec Králové",
        "shots": null,
        "shotsOnGoal": 3,
        "possession": 42,
        "corners": 3,
        "yellowCards": 3,
        "redCards": 0,
        "expectedGoals": null
      },
      "away": {
        "teamId": 325,
        "team": "Tromso",
        "shots": null,
        "shotsOnGoal": 3,
        "possession": 58,
        "corners": 6,
        "yellowCards": 1,
        "redCards": 0,
        "expectedGoals": null
      },
      "statisticsChecked": true,
      "lineupsChecked": true,
      "injuriesChecked": true,
      "lineups": [
        {
          "teamId": 3723,
          "team": "Hradec Králové",
          "formation": "3-4-2-1",
          "coach": "David Horejs",
          "starters": [
            "A. Zadrazil",
            "J. Uhrincat",
            "F. Cihak",
            "F. Cech",
            "J. Kucera",
            "V. Darida",
            "S. Dancak",
            "D. Horak",
            "M. van Buren",
            "T. Sloncik",
            "O. Mihalik"
          ]
        },
        {
          "teamId": 325,
          "team": "Tromso",
          "formation": "5-3-2",
          "coach": "Jorgen Vik",
          "starters": [
            "J. Haugaard",
            "A. Thongla-Iad Warneryd",
            "V. Skjaervik",
            "T. Guddal",
            "I. Vadebu",
            "S. Innvaer",
            "J. Hjerto-Dahl",
            "D. Edvardsson",
            "R. Jenssen",
            "Ieltsin Camoes",
            "H. Larsen"
          ]
        }
      ],
      "injuries": []
    },
    {
      "fixtureId": 1593528,
      "date": "2026-07-31",
      "league": "UEL",
      "homeTeamId": 619,
      "homeTeam": "PAOK",
      "awayTeamId": 572,
      "awayTeam": "Dynamo Kyiv",
      "home": {
        "teamId": 619,
        "team": "PAOK",
        "shots": null,
        "shotsOnGoal": null,
        "possession": null,
        "corners": null,
        "yellowCards": 1,
        "redCards": 0,
        "expectedGoals": null
      },
      "away": {
        "teamId": 572,
        "team": "Dynamo Kyiv",
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
          "teamId": 619,
          "team": "PAOK",
          "formation": "4-2-3-1",
          "coach": "Alessio Lisci",
          "starters": [
            "J. Pavlenka",
            "J. Kenny",
            "P. Hatzidiakos",
            "G. Michailidis",
            "Jogo",
            "C. Zafeiris",
            "B. Santamaria",
            "A. Zivkovic",
            "G. Konstantelias",
            "Taison",
            "A. Mythou"
          ]
        },
        {
          "teamId": 572,
          "team": "Dynamo Kyiv",
          "formation": "4-2-3-1",
          "coach": "Igor Kostyuk",
          "starters": [
            "V. Surkis",
            "O. Sych",
            "T. Kedziora",
            "A. Thiare",
            "T. Mykhavko",
            "V. Brazhko",
            "J. Lonwijk",
            "N. Voloshyn",
            "V. Buyalskyy",
            "B. Redushko",
            "M. Ponomarenko"
          ]
        }
      ],
      "injuries": []
    },
    {
      "fixtureId": 1593524,
      "date": "2026-07-31",
      "league": "UEL",
      "homeTeamId": 853,
      "homeTeam": "CSKA Sofia",
      "awayTeamId": 556,
      "awayTeam": "Qarabag",
      "home": {
        "teamId": 853,
        "team": "CSKA Sofia",
        "shots": null,
        "shotsOnGoal": null,
        "possession": null,
        "corners": null,
        "yellowCards": 6,
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
        "yellowCards": 3,
        "redCards": 0,
        "expectedGoals": null
      },
      "statisticsChecked": true,
      "lineupsChecked": true,
      "injuriesChecked": true,
      "lineups": [
        {
          "teamId": 853,
          "team": "CSKA Sofia",
          "formation": "4-1-4-1",
          "coach": "Hristo Yanev",
          "starters": [
            "F. Lapoukhov",
            "Pastor",
            "T. Ivanov",
            "F. Rodriguez",
            "A. Martino",
            "J. Gbamin",
            "M. Ebong",
            "S. Sensi",
            "B. Jordao",
            "I. Pittas",
            "L. Godoy"
          ]
        },
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
            "E. Cafarquliyev",
            "Pedro Bicalho",
            "M. Jankovic",
            "O. Kashchuk",
            "Kady Borges",
            "A. Zoubir",
            "Z. Sawo"
          ]
        }
      ],
      "injuries": []
    },
    {
      "fixtureId": 1556547,
      "date": "2026-07-31",
      "league": "UEL",
      "homeTeamId": 554,
      "homeTeam": "Anderlecht",
      "awayTeamId": 363,
      "awayTeam": "Hammarby FF",
      "home": {
        "teamId": 554,
        "team": "Anderlecht",
        "shots": 21,
        "shotsOnGoal": 6,
        "possession": null,
        "corners": 10,
        "yellowCards": 2,
        "redCards": 0,
        "expectedGoals": null
      },
      "away": {
        "teamId": 363,
        "team": "Hammarby FF",
        "shots": 6,
        "shotsOnGoal": 3,
        "possession": null,
        "corners": 0,
        "yellowCards": 3,
        "redCards": 0,
        "expectedGoals": null
      },
      "statisticsChecked": true,
      "lineupsChecked": true,
      "injuriesChecked": true,
      "lineups": [
        {
          "teamId": 554,
          "team": "Anderlecht",
          "formation": "4-4-2",
          "coach": "Vitor Bruno",
          "starters": [
            "C. Coosemans",
            "A. Maamar",
            "L. Petrot",
            "G. Biancone",
            "L. Augustinsson",
            "K. Nga",
            "M. Kana",
            "E. Llansana",
            "L. Ambros",
            "J. Onia Seke",
            "D. Sikan"
          ]
        },
        {
          "teamId": 363,
          "team": "Hammarby FF",
          "formation": "4-2-3-1",
          "coach": "Kalle Karlsson",
          "starters": [
            "W. Hahn",
            "H. Skoglund",
            "V. Eriksson",
            "F. Winther",
            "N. Persson",
            "T. Tekie",
            "M. Karlsson",
            "M. Madjed",
            "O. Johansson",
            "V. Lind",
            "P. Abraham"
          ]
        }
      ],
      "injuries": []
    },
    {
      "fixtureId": 1593525,
      "date": "2026-07-31",
      "league": "UEL",
      "homeTeamId": 651,
      "homeTeam": "Ferencvarosi TC",
      "awayTeamId": 415,
      "awayTeam": "Twente",
      "home": {
        "teamId": 651,
        "team": "Ferencvarosi TC",
        "shots": null,
        "shotsOnGoal": null,
        "possession": null,
        "corners": null,
        "yellowCards": 1,
        "redCards": 1,
        "expectedGoals": null
      },
      "away": {
        "teamId": 415,
        "team": "Twente",
        "shots": null,
        "shotsOnGoal": null,
        "possession": null,
        "corners": null,
        "yellowCards": 3,
        "redCards": 0,
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
            "P. Rommens",
            "G. Kanichowsky",
            "M. Corbu",
            "K. Zachariassen",
            "L. Joseph",
            "C. O'Dowda"
          ]
        },
        {
          "teamId": 415,
          "team": "Twente",
          "formation": "4-3-3",
          "coach": "John van den Brom",
          "starters": [
            "L. Unnerstall",
            "B. van Rooij",
            "S. Lemkin",
            "R. Nijstad",
            "A. Adelgaard",
            "R. Zerrouki",
            "K. Hlynsson",
            "T. van den Belt",
            "D. Rots",
            "W. Weghorst",
            "S. Orjasaeter"
          ]
        }
      ],
      "injuries": []
    },
    {
      "fixtureId": 1556548,
      "date": "2026-07-31",
      "league": "UEL",
      "homeTeamId": 211,
      "homeTeam": "Benfica",
      "awayTeamId": 1011,
      "awayTeam": "FC ST. Gallen",
      "home": {
        "teamId": 211,
        "team": "Benfica",
        "shots": null,
        "shotsOnGoal": null,
        "possession": null,
        "corners": null,
        "yellowCards": 0,
        "redCards": 0,
        "expectedGoals": null
      },
      "away": {
        "teamId": 1011,
        "team": "FC ST. Gallen",
        "shots": null,
        "shotsOnGoal": null,
        "possession": null,
        "corners": null,
        "yellowCards": 3,
        "redCards": 1,
        "expectedGoals": null
      },
      "statisticsChecked": true,
      "lineupsChecked": true,
      "injuriesChecked": true,
      "lineups": [
        {
          "teamId": 211,
          "team": "Benfica",
          "formation": "4-2-3-1",
          "coach": "Marco Silva",
          "starters": [
            "A. Trubin",
            "A. Bah",
            "A. Silva",
            "C. Lenglet",
            "S. Dahl",
            "L. Barreiro",
            "E. Barrenechea",
            "Rafa Silva",
            "G. Sudakov",
            "J. Kaminski",
            "V. Pavlidis"
          ]
        },
        {
          "teamId": 1011,
          "team": "FC ST. Gallen",
          "formation": "3-5-2",
          "coach": "Enrico Maassen",
          "starters": [
            "L. Watkowiak",
            "T. Gaal",
            "J. Stanic",
            "C. Okoroji",
            "H. Vandermersch",
            "L. Gortler",
            "L. Daschner",
            "C. Boukhalfa",
            "M. Stevanovic",
            "A. Balde",
            "C. Witzig"
          ]
        }
      ],
      "injuries": []
    },
    {
      "fixtureId": 1591938,
      "date": "2026-07-30",
      "league": "UCL",
      "homeTeamId": 664,
      "homeTeam": "Kairat Almaty",
      "awayTeamId": 3402,
      "awayTeam": "Omonia Nicosia",
      "home": {
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
      "away": {
        "teamId": 3402,
        "team": "Omonia Nicosia",
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
          "teamId": 664,
          "team": "Kairat Almaty",
          "formation": "4-2-3-1",
          "coach": "Rafael Urazbakhtin",
          "starters": [
            "T. Anarbekov",
            "A. Mrynskiy",
            "A. Martynovich",
            "Lucas Africo",
            "L. Mata",
            "D. Kasabulat",
            "G. Mendonsa",
            "O. Jukkola",
            "J. Oksanen",
            "L. Kurgin",
            "M. Gual"
          ]
        },
        {
          "teamId": 3402,
          "team": "Omonia Nicosia",
          "formation": "4-4-2",
          "coach": "Henning Berg",
          "starters": [
            "Fabiano Freitas",
            "S. Simic",
            "S. Coulibaly",
            "N. Panagiotou",
            "J. Balkovec",
            "Ewandro",
            "P. Andreou",
            "M. Maric",
            "M. Mayambela",
            "A. Kakoullis",
            "M. Tankovic"
          ]
        }
      ],
      "injuries": []
    },
    {
      "fixtureId": 1591939,
      "date": "2026-07-30",
      "league": "UCL",
      "homeTeamId": 3872,
      "homeTeam": "Kauno Žalgiris",
      "awayTeamId": 701,
      "awayTeam": "KI Klaksvik",
      "home": {
        "teamId": 3872,
        "team": "Kauno Žalgiris",
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
          "teamId": 3872,
          "team": "Kauno Žalgiris",
          "formation": "4-1-4-1",
          "coach": "Eivinas Cerniauskas",
          "starters": [
            "T. Svedkauskas",
            "J. Moutachy",
            "A. Tolordava",
            "R. Lekiatas",
            "N. Iyobosa Edokpolor",
            "F. Baldassarra",
            "M. Burba",
            "A. Benchaib",
            "V. Slivka",
            "F. Ourega",
            "Renan Oliveira"
          ]
        },
        {
          "teamId": 701,
          "team": "KI Klaksvik",
          "formation": "3-4-3",
          "coach": "Magnus Powell",
          "starters": [
            "M. Jensen",
            "G. Sorensen",
            "D. Pavlovic",
            "G. Tellechea",
            "J. Danielsen",
            "H. Hansson",
            "M. Sinyan",
            "Jean Carlos",
            "F. Brattbakk",
            "P. Klettskard",
            "O. Ali"
          ]
        }
      ],
      "injuries": []
    },
    {
      "fixtureId": 1556508,
      "date": "2026-07-30",
      "league": "UCL",
      "homeTeamId": 347,
      "homeTeam": "Lech Poznan",
      "awayTeamId": 406,
      "awayTeam": "Aarhus",
      "home": {
        "teamId": 347,
        "team": "Lech Poznan",
        "shots": 18,
        "shotsOnGoal": 9,
        "possession": 49,
        "corners": 14,
        "yellowCards": 2,
        "redCards": null,
        "expectedGoals": null
      },
      "away": {
        "teamId": 406,
        "team": "Aarhus",
        "shots": 14,
        "shotsOnGoal": 6,
        "possession": 51,
        "corners": 3,
        "yellowCards": 4,
        "redCards": null,
        "expectedGoals": null
      },
      "statisticsChecked": true,
      "lineupsChecked": true,
      "injuriesChecked": true,
      "lineups": [
        {
          "teamId": 347,
          "team": "Lech Poznan",
          "formation": "4-2-3-1",
          "coach": "Niels Frederiksen",
          "starters": [
            "M. Lis",
            "R. Gumny",
            "W. Monka",
            "T. Yegbe",
            "M. Gurgul",
            "R. Murawski",
            "A. Kozubal",
            "P. Walemark",
            "P. Rodriguez",
            "L. Palma",
            "M. Ishak"
          ]
        },
        {
          "teamId": 406,
          "team": "Aarhus",
          "formation": "3-4-2-1",
          "coach": "Jakob Poulsen",
          "starters": [
            "M. Hedenstad",
            "J. Jensen-Abbew",
            "F. Tingager",
            "E. Kahl",
            "M. Anderson",
            "M. Knudsen",
            "J. Jonsson",
            "F. Emmery",
            "T. Bech",
            "K. Arnstad",
            "J. Bogere"
          ]
        }
      ],
      "injuries": []
    },
    {
      "fixtureId": 1589422,
      "date": "2026-07-30",
      "league": "UCL",
      "homeTeamId": 563,
      "homeTeam": "Hapoel Beer Sheva",
      "awayTeamId": 278,
      "awayTeam": "Vikingur Reykjavik",
      "home": {
        "teamId": 563,
        "team": "Hapoel Beer Sheva",
        "shots": null,
        "shotsOnGoal": null,
        "possession": null,
        "corners": null,
        "yellowCards": null,
        "redCards": null,
        "expectedGoals": null
      },
      "away": {
        "teamId": 278,
        "team": "Vikingur Reykjavik",
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
          "teamId": 563,
          "team": "Hapoel Beer Sheva",
          "formation": "4-3-3",
          "coach": "Ran Kozuch",
          "starters": [
            "O. Marciano",
            "G. Mizrahi",
            "D. T. Diop",
            "Miguel Vitor",
            "M. Baltaxa",
            "N. Yehoshua",
            "Lucas Ventura",
            "K. Kangwa",
            "J. East",
            "I. Zlatanovic",
            "Z. Ahmed"
          ]
        },
        {
          "teamId": 278,
          "team": "Vikingur Reykjavik",
          "formation": "4-3-3",
          "coach": "Solvi Ottesen",
          "starters": [
            "A. Fridriksson",
            "K. Gunnarsson",
            "O. Ekroth",
            "G. Vatnhamar",
            "H. Gudjonsson",
            "G. Sigurdsson",
            "D. Hafsteinsson",
            "T. Ibrahimagic",
            "O. Borgthorsson",
            "A. Thrandarson",
            "V. Ingimundarson"
          ]
        }
      ],
      "injuries": []
    },
    {
      "fixtureId": 1591940,
      "date": "2026-07-30",
      "league": "UCL",
      "homeTeamId": 632,
      "homeTeam": "Universitatea Craiova",
      "awayTeamId": 646,
      "awayTeam": "Levski Sofia",
      "home": {
        "teamId": 632,
        "team": "Universitatea Craiova",
        "shots": null,
        "shotsOnGoal": null,
        "possession": null,
        "corners": null,
        "yellowCards": null,
        "redCards": null,
        "expectedGoals": null
      },
      "away": {
        "teamId": 646,
        "team": "Levski Sofia",
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
          "teamId": 632,
          "team": "Universitatea Craiova",
          "formation": "3-4-3",
          "coach": "Filipe Coelho",
          "starters": [
            "L. Popescu",
            "A. Rus",
            "N. Stevanovic",
            "V. Screciu",
            "C. Mora",
            "A. Mekvabishvili",
            "A. Cicaldau",
            "N. Bancu",
            "D. Matei",
            "S. Nsimba",
            "S. Baiaram"
          ]
        },
        {
          "teamId": 646,
          "team": "Levski Sofia",
          "formation": "4-3-3",
          "coach": "Julio Velazquez",
          "starters": [
            "S. Vutsov",
            "A. Neves",
            "K. Dimitrov",
            "N. Serafimov",
            "Maicon",
            "A. Bouras",
            "M. Moubarik",
            "Serginho",
            "A. Oko-Flex",
            "Reinaldo",
            "Everton Bala"
          ]
        }
      ],
      "injuries": []
    },
    {
      "fixtureId": 1556506,
      "date": "2026-07-30",
      "league": "UCL",
      "homeTeamId": 340,
      "homeTeam": "Gornik Zabrze",
      "awayTeamId": 611,
      "awayTeam": "Fenerbahçe",
      "home": {
        "teamId": 340,
        "team": "Gornik Zabrze",
        "shots": 15,
        "shotsOnGoal": 6,
        "possession": 48,
        "corners": 9,
        "yellowCards": 4,
        "redCards": null,
        "expectedGoals": null
      },
      "away": {
        "teamId": 611,
        "team": "Fenerbahçe",
        "shots": 14,
        "shotsOnGoal": 2,
        "possession": 52,
        "corners": 7,
        "yellowCards": 5,
        "redCards": null,
        "expectedGoals": null
      },
      "statisticsChecked": true,
      "lineupsChecked": true,
      "injuriesChecked": true,
      "lineups": [
        {
          "teamId": 340,
          "team": "Gornik Zabrze",
          "formation": "4-1-4-1",
          "coach": "Michal Gasparik",
          "starters": [
            "P. Schulze",
            "M. Sacek",
            "R. Janicki",
            "Josema",
            "E. Janza",
            "M. Dietz",
            "Y. Ikia Dimi",
            "L. Sadilek",
            "K. Urbanski",
            "T. Ismaheel",
            "E. Prekop"
          ]
        },
        {
          "teamId": 611,
          "team": "Fenerbahçe",
          "formation": "4-2-3-1",
          "coach": "Ismail Kartal",
          "starters": [
            "M. Gunok",
            "N. Semedo",
            "M. Skriniar",
            "N. Ake",
            "J. Oosterwolde",
            "M. Guendouzi",
            "Fred",
            "I. Kahveci",
            "M. Asensio",
            "K. Akturkoglu",
            "Talisca"
          ]
        }
      ],
      "injuries": []
    },
    {
      "fixtureId": 1589421,
      "date": "2026-07-30",
      "league": "UCL",
      "homeTeamId": 598,
      "homeTeam": "FK Crvena Zvezda",
      "awayTeamId": 5354,
      "awayTeam": "Larne",
      "home": {
        "teamId": 598,
        "team": "FK Crvena Zvezda",
        "shots": null,
        "shotsOnGoal": null,
        "possession": null,
        "corners": null,
        "yellowCards": null,
        "redCards": null,
        "expectedGoals": null
      },
      "away": {
        "teamId": 5354,
        "team": "Larne",
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
          "teamId": 598,
          "team": "FK Crvena Zvezda",
          "formation": "4-3-2-1",
          "coach": "Dejan Stankovic",
          "starters": [
            "Matheus",
            "Seol Young-Woo",
            "F. Tebo Uchenna",
            "M. Veljkovic",
            "M. Strika",
            "L. Loizou",
            "M. Abu Fani",
            "R. Krunic",
            "A. Katai",
            "M. Cham",
            "M. Arnautovic"
          ]
        },
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
            "R. Doherty",
            "C. Gallagher",
            "S. Graham",
            "D. Sloan",
            "K. O'Hara",
            "J. McEneff"
          ]
        }
      ],
      "injuries": []
    },
    {
      "fixtureId": 1589426,
      "date": "2026-07-30",
      "league": "UCL",
      "homeTeamId": 656,
      "homeTeam": "Slovan Bratislava",
      "awayTeamId": 3502,
      "awayTeam": "Saburtalo",
      "home": {
        "teamId": 656,
        "team": "Slovan Bratislava",
        "shots": null,
        "shotsOnGoal": null,
        "possession": null,
        "corners": null,
        "yellowCards": null,
        "redCards": null,
        "expectedGoals": null
      },
      "away": {
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
      "statisticsChecked": true,
      "lineupsChecked": true,
      "injuriesChecked": true,
      "lineups": [
        {
          "teamId": 656,
          "team": "Slovan Bratislava",
          "formation": "4-3-3",
          "coach": "Yaya Toure",
          "starters": [
            "A. Popovic",
            "C. Blackman",
            "K. Bajric",
            "S. Markovic",
            "S. Cruz",
            "C. Martinez",
            "P. Pokorny",
            "A. Gajdos",
            "A. Maros",
            "M. Kukharevych",
            "A. Yirajang"
          ]
        },
        {
          "teamId": 3502,
          "team": "Saburtalo",
          "formation": "4-3-3",
          "coach": "Andriy Demchenko",
          "starters": [
            "G. Makaridze",
            "J. Jinjolava",
            "V. Selimovic",
            "A. Amisulashvili",
            "G. Kobuladze",
            "G. Kutsia",
            "B. Kardava",
            "N. Dadiani",
            "Lucas Cafe",
            "Z. Natchkebia",
            "N. Sikharulashvili"
          ]
        }
      ],
      "injuries": []
    },
    {
      "fixtureId": 1589423,
      "date": "2026-07-29",
      "league": "UCL",
      "homeTeamId": 1165,
      "homeTeam": "KuPS",
      "awayTeamId": 13976,
      "awayTeam": "Sabah FA",
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
        "teamId": 13976,
        "team": "Sabah FA",
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
            "K. Adams",
            "B. Magassa",
            "C. Antwi",
            "V. R. Gasc",
            "S. Touray",
            "T. Jyry",
            "P. Pennanen",
            "B. Armah",
            "J. J. Moreno Ciorciari"
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
            "S. Solvet",
            "R. Dashdamirov",
            "T. Puchacz",
            "I. Lepinjica",
            "U. Rakhmonaliyev",
            "K. Parris",
            "A. Isayev",
            "V. Simic",
            "J. Mickels"
          ]
        }
      ],
      "injuries": []
    },
    {
      "fixtureId": 1589424,
      "date": "2026-07-29",
      "league": "UCL",
      "homeTeamId": 667,
      "homeTeam": "Lincoln Red Imps FC",
      "awayTeamId": 2240,
      "awayTeam": "Mjallby AIF",
      "home": {
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
      "away": {
        "teamId": 2240,
        "team": "Mjallby AIF",
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
          "teamId": 667,
          "team": "Lincoln Red Imps FC",
          "formation": "3-5-2",
          "coach": "Juan Bezares",
          "starters": [
            "Nauzet Garcia",
            "Julliani Eersteling",
            "Bernardo Lopes",
            "Christian Rutjens",
            "Toni",
            "Joe",
            "Mandi",
            "Facundo Alvarez",
            "Nano",
            "Manuel Toledano",
            "Kike Gómez"
          ]
        },
        {
          "teamId": 2240,
          "team": "Mjallby AIF",
          "formation": "3-4-3",
          "coach": "Karl Aksum",
          "starters": [
            "Robin Wallinder",
            "Abdullah Iqbal",
            "Ludvig Svanberg",
            "Tom Pettersson",
            "Max Nielsen",
            "Jesper Gustavsson",
            "Romeo Leandersson",
            "Elliot Stroud",
            "Áki Samuelsen",
            "Jacob Bergström",
            "Ali Youssef"
          ]
        }
      ],
      "injuries": []
    },
    {
      "fixtureId": 1556505,
      "date": "2026-07-29",
      "league": "UCL",
      "homeTeamId": 620,
      "homeTeam": "Dinamo Zagreb",
      "awayTeamId": 1012,
      "awayTeam": "FC Thun",
      "home": {
        "teamId": 620,
        "team": "Dinamo Zagreb",
        "shots": 29,
        "shotsOnGoal": 6,
        "possession": 76,
        "corners": 14,
        "yellowCards": 5,
        "redCards": 0,
        "expectedGoals": null
      },
      "away": {
        "teamId": 1012,
        "team": "FC Thun",
        "shots": 8,
        "shotsOnGoal": 3,
        "possession": 24,
        "corners": 1,
        "yellowCards": 1,
        "redCards": 1,
        "expectedGoals": null
      },
      "statisticsChecked": true,
      "lineupsChecked": true,
      "injuriesChecked": true,
      "lineups": [
        {
          "teamId": 620,
          "team": "Dinamo Zagreb",
          "formation": "4-1-4-1",
          "coach": "Mario Kovacevic",
          "starters": [
            "I. Filipovic",
            "M. Valincic",
            "S. Dominguez",
            "S. McKenna",
            "B. Goda",
            "J. Misic",
            "M. Lisica",
            "G. Vidovic",
            "M. Zajc",
            "M. Orsic",
            "D. Beljo"
          ]
        },
        {
          "teamId": 1012,
          "team": "FC Thun",
          "formation": "4-4-2",
          "coach": "Luca Privitelli Gian",
          "starters": [
            "N. Steffen",
            "F. Fehr",
            "J. Bamert",
            "M. Burki",
            "M. Heule",
            "N. Reichmuth",
            "J. Roth",
            "N. Zoukit",
            "V. Matoshi",
            "F. Dursun",
            "B. Labeau"
          ]
        }
      ],
      "injuries": []
    },
    {
      "fixtureId": 1591937,
      "date": "2026-07-29",
      "league": "UCL",
      "homeTeamId": 4360,
      "homeTeam": "Celje",
      "awayTeamId": 3327,
      "awayTeam": "Egnatia Rrogozhinë",
      "home": {
        "teamId": 4360,
        "team": "Celje",
        "shots": null,
        "shotsOnGoal": null,
        "possession": null,
        "corners": null,
        "yellowCards": null,
        "redCards": null,
        "expectedGoals": null
      },
      "away": {
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
      "statisticsChecked": true,
      "lineupsChecked": true,
      "injuriesChecked": true,
      "lineups": [
        {
          "teamId": 4360,
          "team": "Celje",
          "formation": "4-3-3",
          "coach": "Vitor Campelos",
          "starters": [
            "Žan-Luk Leban",
            "Pijus Širvys",
            "Darko Hrka",
            "Artemijus Tutyškinas",
            "Leonardo Koutris",
            "Mario Kvesić",
            "Papa Daniel",
            "Mark Zabukovnik",
            "Svit Sešlar",
            "Armandas Kučys",
            "Milot Avdyli"
          ]
        },
        {
          "teamId": 3327,
          "team": "Egnatia Rrogozhinë",
          "formation": "3-5-2",
          "coach": "Nevil Dede",
          "starters": [
            "Mario Dajsinani",
            "Eljon Sota",
            "Eneo Bitri",
            "Arbenit Xhemajli",
            "Guillem Jaime",
            "Karim Loukili",
            "Altin Kryeziu",
            "Fernando Medeiros",
            "Andrey Yago",
            "Daniel Adjessa",
            "Alessandro Albanese"
          ]
        }
      ],
      "injuries": []
    },
    {
      "fixtureId": 1556507,
      "date": "2026-07-29",
      "league": "UCL",
      "homeTeamId": 254,
      "homeTeam": "Heart Of Midlothian",
      "awayTeamId": 637,
      "awayTeam": "Sturm Graz",
      "home": {
        "teamId": 254,
        "team": "Heart Of Midlothian",
        "shots": 15,
        "shotsOnGoal": 4,
        "possession": 64,
        "corners": 8,
        "yellowCards": 0,
        "redCards": null,
        "expectedGoals": null
      },
      "away": {
        "teamId": 637,
        "team": "Sturm Graz",
        "shots": 17,
        "shotsOnGoal": 9,
        "possession": 36,
        "corners": 2,
        "yellowCards": 1,
        "redCards": null,
        "expectedGoals": null
      },
      "statisticsChecked": true,
      "lineupsChecked": true,
      "injuriesChecked": true,
      "lineups": [
        {
          "teamId": 254,
          "team": "Heart Of Midlothian",
          "formation": "4-3-3",
          "coach": "Wouter Vrancken",
          "starters": [
            "Alexander Schwolow",
            "Jordi Altena",
            "Malachi Fagan-Walcott",
            "Stephen Kingsley",
            "Harry Milne",
            "Blair Spittal",
            "Oisin McEntee",
            "Severin Sabri Guendouz",
            "Alexandros Kyziridis",
            "Cláudio Braga",
            "Calvin Miller"
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
            "Simon Seidl",
            "Luca Weinhandl",
            "Jon Gorenc Stanković",
            "Jacob Hödl",
            "Szymon Włodarczyk",
            "Seedy Jatta"
          ]
        }
      ],
      "injuries": []
    },
    {
      "fixtureId": 1589425,
      "date": "2026-07-29",
      "league": "UCL",
      "homeTeamId": 652,
      "homeTeam": "Shamrock Rovers",
      "awayTeamId": 3683,
      "awayTeam": "Ararat-Armenia",
      "home": {
        "teamId": 652,
        "team": "Shamrock Rovers",
        "shots": null,
        "shotsOnGoal": null,
        "possession": null,
        "corners": null,
        "yellowCards": null,
        "redCards": null,
        "expectedGoals": null
      },
      "away": {
        "teamId": 3683,
        "team": "Ararat-Armenia",
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
          "teamId": 652,
          "team": "Shamrock Rovers",
          "formation": "3-5-2",
          "coach": "Stephen Bradley",
          "starters": [
            "E. McGinty",
            "J. Mulraney",
            "R. Lopes",
            "L. Grace",
            "T. Sobowale",
            "D. Watts",
            "M. Healy",
            "J. Byrne",
            "A. Brennan",
            "A. Greene",
            "G. Burke"
          ]
        },
        {
          "teamId": 3683,
          "team": "Ararat-Armenia",
          "formation": "3-4-3",
          "coach": "Tulipa",
          "starters": [
            "Joao Bravim",
            "Junior Julio",
            "B. R. Wilson Valdez",
            "A. Malis",
            "H. Oliveira",
            "M. Carlier",
            "K. Muradyan",
            "E. Grigoryan",
            "A. Serobyan",
            "Sandro Lima",
            "Z. Banjaqui"
          ]
        }
      ],
      "injuries": []
    },
    {
      "fixtureId": 1507012,
      "date": "2026-07-26",
      "league": "KLEAGUE1",
      "homeTeamId": 2748,
      "homeTeam": "FC Anyang",
      "awayTeamId": 2746,
      "awayTeam": "Gangwon FC",
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
            "Kang Ji-hun",
            "Chang-yong Lee",
            "Kyung-won Kwon",
            "Dong-jin Kim",
            "Matheus Oliveira",
            "Jung-hyun Kim",
            "Branislav Knežević",
            "Geon-Joo Choi",
            "Breno Herculano",
            "Ivan Jukić"
          ]
        },
        {
          "teamId": 2746,
          "team": "Gangwon FC",
          "formation": "",
          "coach": "Kyung-Ho Chung",
          "starters": [
            "Park Cheong-hyo",
            "Kang Joon-hyuk",
            "Shin Min-Ha",
            "Gi-Hyuk Lee",
            "Song Jun-Seok",
            "You-Hyeon Lee",
            "Min-woo Seo",
            "Young-jun Goh",
            "Byeong-chan Choi",
            "Kim Gun-hee",
            "Dae-won Kim"
          ]
        }
      ],
      "injuries": []
    },
    {
      "fixtureId": 1507013,
      "date": "2026-07-26",
      "league": "KLEAGUE1",
      "homeTeamId": 2759,
      "homeTeam": "Gwangju FC",
      "awayTeamId": 2761,
      "awayTeam": "Jeju United FC",
      "home": {
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
      "away": {
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
      "statisticsChecked": true,
      "lineupsChecked": true,
      "injuriesChecked": true,
      "lineups": [
        {
          "teamId": 2759,
          "team": "Gwangju FC",
          "formation": "",
          "coach": "Jeong-kyu Lee",
          "starters": [
            "Kyeong-min Kim",
            "Hyeok-joo An",
            "Teun van Grunsven",
            "João Pedro",
            "Won-jae Park",
            "Se-jong Ju",
            "Adriel D'Avila Ba Loua",
            "Kyoung-Rok Choi",
            "Min-seo Moon",
            "Ji-hoon Jeong",
            "John Iredale"
          ]
        },
        {
          "teamId": 2761,
          "team": "Jeju United FC",
          "formation": "",
          "coach": "Sergio Costa",
          "starters": [
            "Dong-jun Kim",
            "In-su Yu",
            "Kwon Ki-Min",
            "Geon-ung Kim",
            "Ryun-sung Kim",
            "Italo",
            "Jae-hyeok Oh",
            "Chang-jun Park",
            "Kim Jun-Ha",
            "Emerson Ramon",
            "Kim Shin-jin"
          ]
        }
      ],
      "injuries": []
    },
    {
      "fixtureId": 1507014,
      "date": "2026-07-26",
      "league": "KLEAGUE1",
      "homeTeamId": 2763,
      "homeTeam": "Incheon United",
      "awayTeamId": 2745,
      "awayTeam": "Bucheon FC 1995",
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
      "statisticsChecked": true,
      "lineupsChecked": true,
      "injuriesChecked": true,
      "lineups": [
        {
          "teamId": 2763,
          "team": "Incheon United",
          "formation": "",
          "coach": "Jong-Hwan Yoon",
          "starters": [
            "Dong-heon Kim",
            "Kim Myung-Sun",
            "Gun-hee Kim",
            "Juan Ibiza",
            "Ju-yong Lee",
            "Seong-min Kim",
            "Jae-min Seo",
            "Myung Joo Lee",
            "Gerso Fernandes",
            "Chung-yong Lee",
            "Morgan Ferrier"
          ]
        },
        {
          "teamId": 2745,
          "team": "Bucheon FC 1995",
          "formation": "",
          "coach": "Ou-Ghu Kwon",
          "starters": [
            "Hyeon-yeob kim",
            "Patrick William",
            "Dong-kyu Baek",
            "Sung-wook Hong",
            "Thiaguinho Santos",
            "Jong-Woo Kim",
            "Sang-jun Kim",
            "Tae-hyeon Ahn",
            "Rodrigo Bassani",
            "Jeong-in Park",
            "Seung-bin Kim"
          ]
        }
      ],
      "injuries": []
    },
    {
      "fixtureId": 1507015,
      "date": "2026-07-26",
      "league": "KLEAGUE1",
      "homeTeamId": 2766,
      "homeTeam": "FC Seoul",
      "awayTeamId": 2767,
      "awayTeam": "Ulsan Hyundai FC",
      "home": {
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
          "teamId": 2766,
          "team": "FC Seoul",
          "formation": "",
          "coach": "Gi-Dong Kim",
          "starters": [
            "Gu Sung-yun",
            "Choi Jun",
            "Yazan Al-Arab",
            "Juan Antonio Ros",
            "Kim Jin-su",
            "Seung-Won Jeong",
            "Lee Seung-mo",
            "Hrvoje Babec",
            "Min-kyu Song",
            "Anderson Oliveira",
            "Patryk Klimala"
          ]
        },
        {
          "teamId": 2767,
          "team": "Ulsan Hyundai FC",
          "formation": "",
          "coach": "Hyun-seok Kim",
          "starters": [
            "Hyeon-woo Jo",
            "Myeong-kwan Seo",
            "Jung Seung-hyeon",
            "Kim Young-gwon",
            "Jang Si-young",
            "Kyu-seong Lee",
            "Thomas Oude Kotte",
            "Hyun-taek Cho",
            "Lee Jin-hyun",
            "Dong-gyeong Lee",
            "Erick Farias"
          ]
        }
      ],
      "injuries": []
    },
    {
      "fixtureId": 1510393,
      "date": "2026-07-26",
      "league": "KLEAGUE2",
      "homeTeamId": 7078,
      "homeTeam": "Gimpo Citizen",
      "awayTeamId": 9171,
      "awayTeam": "Yongin City",
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
      "statisticsChecked": true,
      "lineupsChecked": true,
      "injuriesChecked": true,
      "lineups": [],
      "injuries": []
    },
    {
      "fixtureId": 1510394,
      "date": "2026-07-26",
      "league": "KLEAGUE2",
      "homeTeamId": 7098,
      "homeTeam": "Paju Citizen",
      "awayTeamId": 2758,
      "awayTeam": "Ansan Greeners",
      "home": {
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
      "lineups": [],
      "injuries": []
    },
    {
      "fixtureId": 1507011,
      "date": "2026-07-25",
      "league": "KLEAGUE1",
      "homeTeamId": 2764,
      "homeTeam": "Pohang Steelers",
      "awayTeamId": 2762,
      "awayTeam": "Jeonbuk Motors",
      "home": {
        "teamId": 2764,
        "team": "Pohang Steelers",
        "shots": 6,
        "shotsOnGoal": 1,
        "possession": 63,
        "corners": 7,
        "yellowCards": 1,
        "redCards": 0,
        "expectedGoals": null
      },
      "away": {
        "teamId": 2762,
        "team": "Jeonbuk Motors",
        "shots": 9,
        "shotsOnGoal": 3,
        "possession": 37,
        "corners": 1,
        "yellowCards": 1,
        "redCards": 0,
        "expectedGoals": null
      },
      "statisticsChecked": true,
      "lineupsChecked": true,
      "injuriesChecked": true,
      "lineups": [
        {
          "teamId": 2764,
          "team": "Pohang Steelers",
          "formation": "3-4-3",
          "coach": "Tae-Ha Park",
          "starters": [
            "In-jae Hwang",
            "Kwang-hun Shin",
            "Park Chan-Yong",
            "Ho-jin Kim",
            "Jeong-won Eo",
            "Sung-Yueng Ki",
            "Dong-jin Kim",
            "Wanderson",
            "Hwang Seo-woong",
            "Sang-hyeok Cho",
            "Jakob Tranziska"
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
            "Yeong-bin Kim",
            "Choi Woo-jin",
            "Oberdan Alionço",
            "Jin-gyu Kim",
            "Dong-jun Lee",
            "Kang Sang-Yun",
            "Seung-Woo Lee",
            "Gytis Paulauskas"
          ]
        }
      ],
      "injuries": []
    },
    {
      "fixtureId": 1507010,
      "date": "2026-07-25",
      "league": "KLEAGUE1",
      "homeTeamId": 2768,
      "homeTeam": "Gimcheon Sangmu FC",
      "awayTeamId": 2750,
      "awayTeam": "Daejeon Citizen",
      "home": {
        "teamId": 2768,
        "team": "Gimcheon Sangmu FC",
        "shots": 13,
        "shotsOnGoal": 5,
        "possession": 45,
        "corners": 3,
        "yellowCards": 2,
        "redCards": 0,
        "expectedGoals": null
      },
      "away": {
        "teamId": 2750,
        "team": "Daejeon Citizen",
        "shots": 11,
        "shotsOnGoal": 3,
        "possession": 55,
        "corners": 6,
        "yellowCards": 1,
        "redCards": 0,
        "expectedGoals": null
      },
      "statisticsChecked": true,
      "lineupsChecked": true,
      "injuriesChecked": true,
      "lineups": [
        {
          "teamId": 2768,
          "team": "Gimcheon Sangmu FC",
          "formation": "4-4-2",
          "coach": "Seung-jin Joo",
          "starters": [
            "Jong-beom Baek",
            "Si-hoo Hong",
            "Byeon Jun-soo",
            "Jung-taek Lee",
            "Park Jin-Seong",
            "Jeon Byung-kwan",
            "Tae-jun Park",
            "Lee Kang-Hyeon",
            "Yun-sang Hong",
            "Se-jin Park",
            "Kun-hee Lee"
          ]
        },
        {
          "teamId": 2750,
          "team": "Daejeon Citizen",
          "formation": "4-4-2",
          "coach": "Sun-Hong Hwang",
          "starters": [
            "Lee Chang-geun",
            "Jin-ya Kim",
            "Chang-rae Ha",
            "Jo Seong-Kwon",
            "Myeong-jae Lee",
            "Jae-hee Jeong",
            "Kim Bong-Soo",
            "Lee Hyeon-sik",
            "Gustav Ludwigson",
            "Diogo Oliveira",
            "Jin-su Seo"
          ]
        }
      ],
      "injuries": []
    },
    {
      "fixtureId": 1510390,
      "date": "2026-07-25",
      "league": "KLEAGUE2",
      "homeTeamId": 2747,
      "homeTeam": "Daegu FC",
      "awayTeamId": 2756,
      "awayTeam": "Suwon City FC",
      "home": {
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
      "away": {
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
      "statisticsChecked": true,
      "lineupsChecked": true,
      "injuriesChecked": true,
      "lineups": [
        {
          "teamId": 2747,
          "team": "Daegu FC",
          "formation": "",
          "coach": "Sung-yong Choi",
          "starters": [
            "Hwang Jae-Won",
            "Kim Kang-San",
            "Kim Hyeong-Jin",
            "Hwang In-Taek",
            "Choi Kang-min",
            "Kim Dae-Woo",
            "Ryu Jae-Moon",
            "Kim Ju-Kong",
            "Danrlei"
          ]
        },
        {
          "teamId": 2756,
          "team": "Suwon City FC",
          "formation": "",
          "coach": "Kun-Ha Park",
          "starters": [
            "Yang Han-Been",
            "Lee Si-Young",
            "Lee Hyeon-yong",
            "Jo Jin-Woo",
            "Seo Jae-Min",
            "Goo Bon-Cheul",
            "Lee Jae-Won",
            "Kim Jeong-Hwan",
            "Matheus Frizzo",
            "Kim Do-Yoon",
            "Matheus Babi"
          ]
        }
      ],
      "injuries": []
    },
    {
      "fixtureId": 1510389,
      "date": "2026-07-25",
      "league": "KLEAGUE2",
      "homeTeamId": 2752,
      "homeTeam": "Busan I Park",
      "awayTeamId": 2765,
      "awayTeam": "Suwon Bluewings",
      "home": {
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
      "away": {
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
      "statisticsChecked": true,
      "lineupsChecked": true,
      "injuriesChecked": true,
      "lineups": [
        {
          "teamId": 2752,
          "team": "Busan I Park",
          "formation": "",
          "coach": "Sung-Hwan Cho",
          "starters": [
            "Koo Sang-Min",
            "Kim Jin-Hyuk",
            "Jang Ho-Ik",
            "Kim Hee-Seung",
            "Ahn Hyun-Beom",
            "Kim Min-Hyeok",
            "Antonio Xavier",
            "Cristian",
            "Son Hwi"
          ]
        },
        {
          "teamId": 2765,
          "team": "Suwon Bluewings",
          "formation": "",
          "coach": "Jung-Hyo Lee",
          "starters": [
            "Kim Joon-Hong",
            "Lee Geon-Hee",
            "Hong Jeong-Ho",
            "Ko Jong-Hyun",
            "Lee Sang-Min",
            "Fessin",
            "Park Hyun-Bin",
            "Jeong Ho-Yeon",
            "Reis",
            "S. Iljutcenko"
          ]
        }
      ],
      "injuries": []
    },
    {
      "fixtureId": 1510392,
      "date": "2026-07-25",
      "league": "KLEAGUE2",
      "homeTeamId": 2760,
      "homeTeam": "Jeonnam Dragons",
      "awayTeamId": 2751,
      "awayTeam": "Gyeongnam FC",
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
      "statisticsChecked": true,
      "lineupsChecked": true,
      "injuriesChecked": true,
      "lineups": [
        {
          "teamId": 2760,
          "team": "Jeonnam Dragons",
          "formation": "",
          "coach": "Kwan-sik Lim",
          "starters": [
            "Choi Bong-Jin",
            "Noh Dong-Geon",
            "Yoo Ji-Ha",
            "Kim Beom-Su",
            "Park Tae-Yong",
            "Hong Won-Jin",
            "Yoon Min-Ho",
            "Valdívia",
            "Yoon Young-seok"
          ]
        },
        {
          "teamId": 2751,
          "team": "Gyeongnam FC",
          "formation": "",
          "coach": "Sung-jae Bae",
          "starters": [
            "Lee Ki-Hyun",
            "Son Ho-Jun",
            "Choi Jung-Won",
            "Bae Hyun-Seo",
            "Cho Sang-Jun",
            "Kim Hyeong-Won",
            "M. Jeon",
            "Yun Il-Lok",
            "Kwon Gi-Pyo",
            "Kim Hyeon-Oh"
          ]
        }
      ],
      "injuries": []
    },
    {
      "fixtureId": 1510391,
      "date": "2026-07-25",
      "league": "KLEAGUE2",
      "homeTeamId": 7087,
      "homeTeam": "Hwaseong",
      "awayTeamId": 2753,
      "awayTeam": "Asan Mugunghwa",
      "home": {
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
      "lineups": [
        {
          "teamId": 7087,
          "team": "Hwaseong",
          "formation": "",
          "coach": "Du-Ri Cha",
          "starters": [
            "Kim Seung-Gun",
            "Park Jun-Seo",
            "Ham Sun-Woo",
            "A. Vojnović",
            "Choi Myeong-Hee",
            "Park Jae-Seong",
            "Lee Jong-Sung",
            "L. Pllana",
            "Kim Byong-Oh",
            "Demethryus"
          ]
        },
        {
          "teamId": 2753,
          "team": "Asan Mugunghwa",
          "formation": "",
          "coach": "Andre Gaspar",
          "starters": [
            "Shin Song-Hun",
            "Kim Ju-Sung",
            "Jung Se-Jun",
            "Son Jun-Ho",
            "Kim Young-Nam",
            "Kim Je-Hee",
            "Kim Jong-Min",
            "N. Mohammed"
          ]
        }
      ],
      "injuries": []
    },
    {
      "fixtureId": 1593521,
      "date": "2026-07-24",
      "league": "UEL",
      "homeTeamId": 556,
      "homeTeam": "Qarabag",
      "awayTeamId": 853,
      "awayTeam": "CSKA Sofia",
      "home": {
        "teamId": 556,
        "team": "Qarabag",
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
        "yellowCards": 2,
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
            "O. Kashchuk",
            "Kady Borges",
            "A. Zoubir",
            "Z. Sawo"
          ]
        },
        {
          "teamId": 853,
          "team": "CSKA Sofia",
          "formation": "4-4-2",
          "coach": "Hristo Yanev",
          "starters": [
            "F. Lapoukhov",
            "Pastor",
            "F. Rodriguez",
            "T. Ivanov",
            "A. Martino",
            "M. Ebong",
            "J. Gbamin",
            "B. Jordao",
            "S. Sensi",
            "L. Godoy",
            "I. Pittas"
          ]
        }
      ],
      "injuries": []
    },
    {
      "fixtureId": 1556546,
      "date": "2026-07-24",
      "league": "UEL",
      "homeTeamId": 325,
      "homeTeam": "Tromso",
      "awayTeamId": 3723,
      "awayTeam": "Hradec Králové",
      "home": {
        "teamId": 325,
        "team": "Tromso",
        "shots": null,
        "shotsOnGoal": null,
        "possession": null,
        "corners": null,
        "yellowCards": 1,
        "redCards": 0,
        "expectedGoals": null
      },
      "away": {
        "teamId": 3723,
        "team": "Hradec Králové",
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
          "teamId": 325,
          "team": "Tromso",
          "formation": "5-3-2",
          "coach": "Jorgen Vik",
          "starters": [
            "J. Haugaard",
            "L. Cornic",
            "T. Guddal",
            "I. Vadebu",
            "V. Skjaervik",
            "A. Thongla-Iad Warneryd",
            "D. Edvardsson",
            "R. Jenssen",
            "J. Hjerto-Dahl",
            "T. Nyhammer",
            "H. Larsen"
          ]
        },
        {
          "teamId": 3723,
          "team": "Hradec Králové",
          "formation": "3-4-2-1",
          "coach": "David Horejs",
          "starters": [
            "A. Zadrazil",
            "J. Uhrincat",
            "F. Cihak",
            "F. Cech",
            "T. Wiesner",
            "V. Darida",
            "D. Trubac",
            "D. Horak",
            "A. Vlkanova",
            "T. Sloncik",
            "O. Mihalik"
          ]
        }
      ],
      "injuries": []
    },
    {
      "fixtureId": 1556544,
      "date": "2026-07-24",
      "league": "UEL",
      "homeTeamId": 363,
      "homeTeam": "Hammarby FF",
      "awayTeamId": 554,
      "awayTeam": "Anderlecht",
      "home": {
        "teamId": 363,
        "team": "Hammarby FF",
        "shots": null,
        "shotsOnGoal": null,
        "possession": null,
        "corners": null,
        "yellowCards": 2,
        "redCards": 0,
        "expectedGoals": null
      },
      "away": {
        "teamId": 554,
        "team": "Anderlecht",
        "shots": null,
        "shotsOnGoal": null,
        "possession": null,
        "corners": null,
        "yellowCards": 3,
        "redCards": 1,
        "expectedGoals": null
      },
      "statisticsChecked": true,
      "lineupsChecked": true,
      "injuriesChecked": true,
      "lineups": [
        {
          "teamId": 363,
          "team": "Hammarby FF",
          "formation": "4-3-3",
          "coach": "Kalle Karlsson",
          "starters": [
            "W. Hahn",
            "H. Skoglund",
            "V. Eriksson",
            "F. Winther",
            "N. Persson",
            "M. Karlsson",
            "T. Tekie",
            "V. Lind",
            "M. Madjed",
            "N. Besara",
            "P. Abraham"
          ]
        },
        {
          "teamId": 554,
          "team": "Anderlecht",
          "formation": "4-4-2",
          "coach": "Vitor Bruno",
          "starters": [
            "C. Coosemans",
            "A. Maamar",
            "L. Petrot",
            "G. Biancone",
            "L. Augustinsson",
            "E. Llansana",
            "M. Kana",
            "N. Saliba",
            "K. Nga",
            "D. Sikan",
            "J. Onia Seke"
          ]
        }
      ],
      "injuries": []
    },
    {
      "fixtureId": 1593522,
      "date": "2026-07-24",
      "league": "UEL",
      "homeTeamId": 568,
      "homeTeam": "Sheriff Tiraspol",
      "awayTeamId": 604,
      "awayTeam": "Maccabi Tel Aviv",
      "home": {
        "teamId": 568,
        "team": "Sheriff Tiraspol",
        "shots": null,
        "shotsOnGoal": null,
        "possession": null,
        "corners": null,
        "yellowCards": 5,
        "redCards": 0,
        "expectedGoals": null
      },
      "away": {
        "teamId": 604,
        "team": "Maccabi Tel Aviv",
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
          "teamId": 568,
          "team": "Sheriff Tiraspol",
          "formation": "3-5-2",
          "coach": "Victor Mihailov",
          "starters": [
            "E. Timbur",
            "B. Ciss",
            "S. Magassouba",
            "Rai",
            "Mota",
            "A. Pergjoni",
            "D. Klas",
            "Sapata",
            "D. Forov",
            "J. Asprilla Moreno",
            "L. Jaures-Ulrich"
          ]
        },
        {
          "teamId": 604,
          "team": "Maccabi Tel Aviv",
          "formation": "3-5-2",
          "coach": "Kenny Miller",
          "starters": [
            "O. Melika",
            "I. Ben Hamo",
            "M. Camara",
            "R. Shlomo",
            "S. Jehezkel",
            "I. Shahar",
            "I. Sissokho",
            "I. Noy",
            "R. Revivo",
            "S. Abu Farkhi",
            "D. Peretz"
          ]
        }
      ],
      "injuries": []
    },
    {
      "fixtureId": 1593519,
      "date": "2026-07-24",
      "league": "UEL",
      "homeTeamId": 572,
      "homeTeam": "Dynamo Kyiv",
      "awayTeamId": 619,
      "awayTeam": "PAOK",
      "home": {
        "teamId": 572,
        "team": "Dynamo Kyiv",
        "shots": null,
        "shotsOnGoal": null,
        "possession": null,
        "corners": null,
        "yellowCards": 1,
        "redCards": 0,
        "expectedGoals": null
      },
      "away": {
        "teamId": 619,
        "team": "PAOK",
        "shots": null,
        "shotsOnGoal": null,
        "possession": null,
        "corners": null,
        "yellowCards": 3,
        "redCards": 0,
        "expectedGoals": null
      },
      "statisticsChecked": true,
      "lineupsChecked": true,
      "injuriesChecked": true,
      "lineups": [
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
            "E. Guerrero"
          ]
        },
        {
          "teamId": 619,
          "team": "PAOK",
          "formation": "4-2-3-1",
          "coach": "Alessio Lisci",
          "starters": [
            "J. Pavlenka",
            "J. Kenny",
            "P. Hatzidiakos",
            "G. Michailidis",
            "Jogo",
            "B. Santamaria",
            "C. Zafeiris",
            "A. Zivkovic",
            "G. Konstantelias",
            "T. Ali",
            "A. Mythou"
          ]
        }
      ],
      "injuries": []
    },
    {
      "fixtureId": 1593523,
      "date": "2026-07-24",
      "league": "UEL",
      "homeTeamId": 415,
      "homeTeam": "Twente",
      "awayTeamId": 651,
      "awayTeam": "Ferencvarosi TC",
      "home": {
        "teamId": 415,
        "team": "Twente",
        "shots": null,
        "shotsOnGoal": null,
        "possession": null,
        "corners": null,
        "yellowCards": 0,
        "redCards": 0,
        "expectedGoals": null
      },
      "away": {
        "teamId": 651,
        "team": "Ferencvarosi TC",
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
          "teamId": 415,
          "team": "Twente",
          "formation": "4-2-1-3",
          "coach": "John van den Brom",
          "starters": [
            "L. Unnerstall",
            "B. van Rooij",
            "S. Lemkin",
            "R. Nijstad",
            "A. Adelgaard",
            "R. Zerrouki",
            "T. van den Belt",
            "K. Hlynsson",
            "D. Rots",
            "W. Weghorst",
            "S. Orjasaeter"
          ]
        },
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
            "M. Corbu",
            "P. Rommens",
            "G. Kanichowsky",
            "K. Zachariassen",
            "L. Joseph",
            "Dele"
          ]
        }
      ],
      "injuries": []
    },
    {
      "fixtureId": 1556543,
      "date": "2026-07-24",
      "league": "UEL",
      "homeTeamId": 549,
      "homeTeam": "Beşiktaş",
      "awayTeamId": 397,
      "awayTeam": "FC Midtjylland",
      "home": {
        "teamId": 549,
        "team": "Beşiktaş",
        "shots": null,
        "shotsOnGoal": null,
        "possession": null,
        "corners": null,
        "yellowCards": 0,
        "redCards": 0,
        "expectedGoals": null
      },
      "away": {
        "teamId": 397,
        "team": "FC Midtjylland",
        "shots": null,
        "shotsOnGoal": null,
        "possession": null,
        "corners": null,
        "yellowCards": 0,
        "redCards": 1,
        "expectedGoals": null
      },
      "statisticsChecked": true,
      "lineupsChecked": true,
      "injuriesChecked": true,
      "lineups": [
        {
          "teamId": 549,
          "team": "Beşiktaş",
          "formation": "4-1-4-1",
          "coach": "Vincenzo Italiano",
          "starters": [
            "A. Nubel",
            "M. Murillo",
            "T. Djalo",
            "E. Topcu",
            "R. Yilmaz",
            "S. Ozcan",
            "V. Cerny",
            "J. Olaitan",
            "O. Kokcu",
            "I. Fakili",
            "Oh Hyeon-Gyu"
          ]
        },
        {
          "teamId": 397,
          "team": "FC Midtjylland",
          "formation": "4-3-3",
          "coach": "Mike Tullberg",
          "starters": [
            "E. Olafsson",
            "R. Kristensen",
            "Lee Han-Beom",
            "M. B. Sorensen",
            "V. Bak",
            "P. Billing",
            "P. Bravo",
            "V. Byskov",
            "D. Osorio",
            "F. Etim",
            "Franculino"
          ]
        }
      ],
      "injuries": []
    },
    {
      "fixtureId": 1556545,
      "date": "2026-07-24",
      "league": "UEL",
      "homeTeamId": 1011,
      "homeTeam": "FC ST. Gallen",
      "awayTeamId": 211,
      "awayTeam": "Benfica",
      "home": {
        "teamId": 1011,
        "team": "FC ST. Gallen",
        "shots": null,
        "shotsOnGoal": null,
        "possession": null,
        "corners": null,
        "yellowCards": 3,
        "redCards": 0,
        "expectedGoals": null
      },
      "away": {
        "teamId": 211,
        "team": "Benfica",
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
          "teamId": 1011,
          "team": "FC ST. Gallen",
          "formation": "3-5-2",
          "coach": "Enrico Maassen",
          "starters": [
            "L. Ati Zigi",
            "T. Gaal",
            "J. Stanic",
            "C. Okoroji",
            "H. Vandermersch",
            "L. Gortler",
            "L. Daschner",
            "C. Boukhalfa",
            "M. Stevanovic",
            "A. Balde",
            "C. Witzig"
          ]
        },
        {
          "teamId": 211,
          "team": "Benfica",
          "formation": "4-2-3-1",
          "coach": "Marco Silva",
          "starters": [
            "A. Trubin",
            "A. Bah",
            "A. Silva",
            "C. Lenglet",
            "S. Dahl",
            "Manu",
            "J. Kaminski",
            "Rafa Silva",
            "G. Sudakov",
            "M. Figueiredo",
            "V. Pavlidis"
          ]
        }
      ],
      "injuries": []
    },
    {
      "fixtureId": 1593520,
      "date": "2026-07-24",
      "league": "UEL",
      "homeTeamId": 608,
      "homeTeam": "HNK Hajduk Split",
      "awayTeamId": 3403,
      "awayTeam": "Pafos",
      "home": {
        "teamId": 608,
        "team": "HNK Hajduk Split",
        "shots": 8,
        "shotsOnGoal": 2,
        "possession": 45,
        "corners": 8,
        "yellowCards": 3,
        "redCards": 0,
        "expectedGoals": null
      },
      "away": {
        "teamId": 3403,
        "team": "Pafos",
        "shots": 14,
        "shotsOnGoal": 3,
        "possession": 55,
        "corners": 7,
        "yellowCards": 2,
        "redCards": 0,
        "expectedGoals": null
      },
      "statisticsChecked": true,
      "lineupsChecked": true,
      "injuriesChecked": true,
      "lineups": [
        {
          "teamId": 608,
          "team": "HNK Hajduk Split",
          "formation": "4-2-3-1",
          "coach": "Gonzalo Garcia",
          "starters": [
            "T. Silic",
            "M. Acapandie",
            "D. Maresic",
            "A. Van Hoorenbeeck",
            "S. Hrgovic",
            "R. Pukstas",
            "A. Pajaziti",
            "R. Brajkovic",
            "D. de Almeida",
            "D. Melnjak",
            "M. Sego"
          ]
        },
        {
          "teamId": 3403,
          "team": "Pafos",
          "formation": "3-4-3",
          "coach": "Albert Celades",
          "starters": [
            "R. Majecki",
            "D. Goldar",
            "David Luiz",
            "S. Mmaee",
            "Jaja",
            "Pepe",
            "I. Sunjic",
            "N. Ioannou",
            "V. Dragomir",
            "Lele",
            "Biel"
          ]
        }
      ],
      "injuries": []
    },
    {
      "fixtureId": 1510388,
      "date": "2026-07-24",
      "league": "KLEAGUE2",
      "homeTeamId": 2749,
      "homeTeam": "Seoul E-Land FC",
      "awayTeamId": 7060,
      "awayTeam": "Cheonan City",
      "home": {
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
      "lineups": [],
      "injuries": []
    },
    {
      "fixtureId": 1510387,
      "date": "2026-07-24",
      "league": "KLEAGUE2",
      "homeTeamId": 7076,
      "homeTeam": "Gimhae City",
      "awayTeamId": 7061,
      "awayTeam": "Cheongju",
      "home": {
        "teamId": 7076,
        "team": "Gimhae City",
        "shots": null,
        "shotsOnGoal": null,
        "possession": null,
        "corners": null,
        "yellowCards": null,
        "redCards": null,
        "expectedGoals": null
      },
      "away": {
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
      "statisticsChecked": true,
      "lineupsChecked": true,
      "injuriesChecked": true,
      "lineups": [],
      "injuries": []
    },
    {
      "fixtureId": 1591936,
      "date": "2026-07-23",
      "league": "UCL",
      "homeTeamId": 3402,
      "homeTeam": "Omonia Nicosia",
      "awayTeamId": 664,
      "awayTeam": "Kairat Almaty",
      "home": {
        "teamId": 3402,
        "team": "Omonia Nicosia",
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
          "teamId": 3402,
          "team": "Omonia Nicosia",
          "formation": "4-3-3",
          "coach": "Henning Berg",
          "starters": [
            "Fabiano Freitas",
            "L. Nego",
            "S. Coulibaly",
            "N. Panagiotou",
            "J. Balkovec",
            "M. Maric",
            "M. Tankovic",
            "P. Andreou",
            "Ewandro",
            "A. Kakoullis",
            "J. Montnor"
          ]
        },
        {
          "teamId": 664,
          "team": "Kairat Almaty",
          "formation": "4-2-3-1",
          "coach": "Rafael Urazbakhtin",
          "starters": [
            "T. Anarbekov",
            "E. Tapalov",
            "A. Martynovich",
            "Lucas Africo",
            "L. Mata",
            "A. Sadybekov",
            "J. Oksanen",
            "A. Mrynskiy",
            "Jorginho",
            "O. Jukkola",
            "M. Gual"
          ]
        }
      ],
      "injuries": []
    },
    {
      "fixtureId": 1591935,
      "date": "2026-07-23",
      "league": "UCL",
      "homeTeamId": 646,
      "homeTeam": "Levski Sofia",
      "awayTeamId": 632,
      "awayTeam": "Universitatea Craiova",
      "home": {
        "teamId": 646,
        "team": "Levski Sofia",
        "shots": null,
        "shotsOnGoal": null,
        "possession": null,
        "corners": null,
        "yellowCards": null,
        "redCards": null,
        "expectedGoals": null
      },
      "away": {
        "teamId": 632,
        "team": "Universitatea Craiova",
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
          "teamId": 646,
          "team": "Levski Sofia",
          "formation": "4-4-2",
          "coach": "Julio Velazquez",
          "starters": [
            "S. Vutsov",
            "A. Neves",
            "K. Dimitrov",
            "N. Serafimov",
            "Maicon",
            "A. Bouras",
            "Serginho",
            "M. Moubarik",
            "Reinaldo",
            "A. Oko-Flex",
            "Everton Bala"
          ]
        },
        {
          "teamId": 632,
          "team": "Universitatea Craiova",
          "formation": "3-4-3",
          "coach": "Filipe Coelho",
          "starters": [
            "L. Popescu",
            "O. Romanchuk",
            "A. Rus",
            "V. Screciu",
            "C. Mora",
            "A. Mekvabishvili",
            "A. Cicaldau",
            "N. Bancu",
            "M. Etim",
            "S. Elisor",
            "S. Baiaram"
          ]
        }
      ],
      "injuries": []
    },
    {
      "fixtureId": 1591933,
      "date": "2026-07-23",
      "league": "UCL",
      "homeTeamId": 3327,
      "homeTeam": "Egnatia Rrogozhinë",
      "awayTeamId": 4360,
      "awayTeam": "Celje",
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
        "teamId": 4360,
        "team": "Celje",
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
          "formation": "3-5-2",
          "coach": "Nevil Dede",
          "starters": [
            "M. Dajsinani",
            "E. Sota",
            "E. Bitri",
            "A. Xhemajli",
            "G. Jaime",
            "K. Loukili",
            "A. Kryeziu",
            "Fernando Medeiros",
            "A. Yago",
            "S. Bakayoko",
            "A. Albanese"
          ]
        },
        {
          "teamId": 4360,
          "team": "Celje",
          "formation": "4-4-2",
          "coach": "Vitor Campelos",
          "starters": [
            "Z. Leban",
            "A. Dionkou",
            "D. Vuklisevic",
            "D. Hrka",
            "L. Koutris",
            "Y. Dukuly",
            "P. Daniel",
            "M. Kvesic",
            "M. Avdyli",
            "S. Seslar",
            "A. Kucys"
          ]
        }
      ],
      "injuries": []
    },
    {
      "fixtureId": 1589418,
      "date": "2026-07-22",
      "league": "UCL",
      "homeTeamId": 2240,
      "homeTeam": "Mjallby AIF",
      "awayTeamId": 667,
      "awayTeam": "Lincoln Red Imps FC",
      "home": {
        "teamId": 2240,
        "team": "Mjallby AIF",
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
          "teamId": 2240,
          "team": "Mjallby AIF",
          "formation": "3-4-3",
          "coach": "Karl Aksum",
          "starters": [
            "R. Wallinder",
            "T. Miettinen",
            "L. Svanberg",
            "T. Pettersson",
            "J. Kjaer",
            "V. Gustafson",
            "J. Gustavsson",
            "A. Samuelsen",
            "V. Granath",
            "J. Bergstrom",
            "E. Stroud"
          ]
        },
        {
          "teamId": 667,
          "team": "Lincoln Red Imps FC",
          "formation": "3-4-3",
          "coach": "Juan Bezares",
          "starters": [
            "J. Hankins",
            "T. Cardozo",
            "B. Lopes",
            "C. Rutjens",
            "J. Eersteling",
            "Joe",
            "Mandi",
            "Nano",
            "T. Garcia",
            "M. Toledano",
            "K. Gomez"
          ]
        }
      ],
      "injuries": []
    },
    {
      "fixtureId": 1589416,
      "date": "2026-07-22",
      "league": "UCL",
      "homeTeamId": 3502,
      "homeTeam": "Saburtalo",
      "awayTeamId": 656,
      "awayTeam": "Slovan Bratislava",
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
        "teamId": 656,
        "team": "Slovan Bratislava",
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
            "G. Kobuladze",
            "V. Selimovic",
            "A. Amisulashvili",
            "J. Jinjolava",
            "N. Dadiani",
            "A. Bartishvili",
            "B. Kardava",
            "V. Bedoshvili",
            "N. Sikharulashvili",
            "Z. Natchkebia"
          ]
        },
        {
          "teamId": 656,
          "team": "Slovan Bratislava",
          "formation": "3-5-2",
          "coach": "Yaya Toure",
          "starters": [
            "D. Takac",
            "K. Bajric",
            "K. Wimmer",
            "S. Cruz",
            "A. Maros",
            "J. Medvedev",
            "A. Mustafic",
            "P. Pokorny",
            "R. Ibrahim",
            "A. Sporar",
            "A. Yirajang"
          ]
        }
      ],
      "injuries": []
    },
    {
      "fixtureId": 1589415,
      "date": "2026-07-22",
      "league": "UCL",
      "homeTeamId": 3683,
      "homeTeam": "Ararat-Armenia",
      "awayTeamId": 652,
      "awayTeam": "Shamrock Rovers",
      "home": {
        "teamId": 3683,
        "team": "Ararat-Armenia",
        "shots": null,
        "shotsOnGoal": null,
        "possession": null,
        "corners": null,
        "yellowCards": null,
        "redCards": null,
        "expectedGoals": null
      },
      "away": {
        "teamId": 652,
        "team": "Shamrock Rovers",
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
          "teamId": 3683,
          "team": "Ararat-Armenia",
          "formation": "4-3-3",
          "coach": "Tulipa",
          "starters": [
            "Joao Bravim",
            "K. Hovhannisyan",
            "B. R. Wilson Valdez",
            "Junior Julio",
            "B. Pereira",
            "A. Tera",
            "K. Muradyan",
            "H. Oliveira",
            "A. Serobyan",
            "Sandro Lima",
            "Z. Shaghoyan"
          ]
        },
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
            "T. Sobowale",
            "D. Watts",
            "M. Healy",
            "J. Byrne",
            "A. Brennan",
            "A. Greene",
            "G. Burke"
          ]
        }
      ],
      "injuries": []
    },
    {
      "fixtureId": 1589419,
      "date": "2026-07-22",
      "league": "UCL",
      "homeTeamId": 13976,
      "homeTeam": "Sabah FA",
      "awayTeamId": 1165,
      "awayTeam": "KuPS",
      "home": {
        "teamId": 13976,
        "team": "Sabah FA",
        "shots": null,
        "shotsOnGoal": null,
        "possession": null,
        "corners": null,
        "yellowCards": null,
        "redCards": null,
        "expectedGoals": null
      },
      "away": {
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
      "statisticsChecked": true,
      "lineupsChecked": true,
      "injuriesChecked": true,
      "lineups": [
        {
          "teamId": 13976,
          "team": "Sabah FA",
          "formation": "4-2-3-1",
          "coach": "Valdas Dambrauskas",
          "starters": [
            "S. Pokatilov",
            "A. Zedadka",
            "S. Solvet",
            "R. Dashdamirov",
            "T. Puchacz",
            "I. Lepinjica",
            "U. Rakhmonaliyev",
            "K. Parris",
            "A. Isayev",
            "V. Simic",
            "J. Mickels"
          ]
        },
        {
          "teamId": 1165,
          "team": "KuPS",
          "formation": "4-2-2-2",
          "coach": "Miika Nuutinen",
          "starters": [
            "J. Kreidl",
            "A. Puukko",
            "B. Magassa",
            "K. Adams",
            "C. Antwi",
            "V. R. Gasc",
            "P. Pennanen",
            "T. Jyry",
            "B. Armah",
            "P. Parzyszek",
            "G. Engvall"
          ]
        }
      ],
      "injuries": []
    },
    {
      "fixtureId": 1556501,
      "date": "2026-07-22",
      "league": "UCL",
      "homeTeamId": 406,
      "homeTeam": "Aarhus",
      "awayTeamId": 347,
      "awayTeam": "Lech Poznan",
      "home": {
        "teamId": 406,
        "team": "Aarhus",
        "shots": 11,
        "shotsOnGoal": 4,
        "possession": 43,
        "corners": 4,
        "yellowCards": 1,
        "redCards": 1,
        "expectedGoals": null
      },
      "away": {
        "teamId": 347,
        "team": "Lech Poznan",
        "shots": 17,
        "shotsOnGoal": 7,
        "possession": 57,
        "corners": 2,
        "yellowCards": 2,
        "redCards": 0,
        "expectedGoals": null
      },
      "statisticsChecked": true,
      "lineupsChecked": true,
      "injuriesChecked": true,
      "lineups": [
        {
          "teamId": 406,
          "team": "Aarhus",
          "formation": "3-4-3",
          "coach": "Jakob Poulsen",
          "starters": [
            "J. Hansen",
            "J. Jensen-Abbew",
            "F. Tingager",
            "E. Kahl",
            "G. Links",
            "M. Knudsen",
            "K. Arnstad",
            "F. Emmery",
            "S. Jorgensen",
            "T. Bech",
            "M. Anderson"
          ]
        },
        {
          "teamId": 347,
          "team": "Lech Poznan",
          "formation": "4-2-3-1",
          "coach": "Niels Frederiksen",
          "starters": [
            "M. Lis",
            "J. Pereira",
            "W. Monka",
            "T. Yegbe",
            "M. Gurgul",
            "R. Murawski",
            "A. Kozubal",
            "P. Walemark",
            "P. Rodriguez",
            "L. Palma",
            "M. Ishak"
          ]
        }
      ],
      "injuries": []
    },
    {
      "fixtureId": 1556502,
      "date": "2026-07-22",
      "league": "UCL",
      "homeTeamId": 611,
      "homeTeam": "Fenerbahçe",
      "awayTeamId": 340,
      "awayTeam": "Gornik Zabrze",
      "home": {
        "teamId": 611,
        "team": "Fenerbahçe",
        "shots": 15,
        "shotsOnGoal": 6,
        "possession": 79,
        "corners": 9,
        "yellowCards": null,
        "redCards": null,
        "expectedGoals": null
      },
      "away": {
        "teamId": 340,
        "team": "Gornik Zabrze",
        "shots": 2,
        "shotsOnGoal": 1,
        "possession": 21,
        "corners": 2,
        "yellowCards": null,
        "redCards": null,
        "expectedGoals": null
      },
      "statisticsChecked": true,
      "lineupsChecked": true,
      "injuriesChecked": true,
      "lineups": [
        {
          "teamId": 611,
          "team": "Fenerbahçe",
          "formation": "4-2-3-1",
          "coach": "Ismail Kartal",
          "starters": [
            "M. Gunok",
            "N. Semedo",
            "M. Skriniar",
            "N. Ake",
            "J. Oosterwolde",
            "M. Guendouzi",
            "B. Elmaz",
            "I. Kahveci",
            "Fred",
            "K. Akturkoglu",
            "Talisca"
          ]
        },
        {
          "teamId": 340,
          "team": "Gornik Zabrze",
          "formation": "4-3-3",
          "coach": "Michal Gasparik",
          "starters": [
            "P. Schulze",
            "M. Sacek",
            "R. Janicki",
            "Josema",
            "E. Janza",
            "L. Sadilek",
            "M. Dietz",
            "K. Urbanski",
            "Y. Ikia Dimi",
            "E. Prekop",
            "M. Khlan"
          ]
        }
      ],
      "injuries": []
    },
    {
      "fixtureId": 1556504,
      "date": "2026-07-22",
      "league": "UCL",
      "homeTeamId": 1012,
      "homeTeam": "FC Thun",
      "awayTeamId": 620,
      "awayTeam": "Dinamo Zagreb",
      "home": {
        "teamId": 1012,
        "team": "FC Thun",
        "shots": 16,
        "shotsOnGoal": 3,
        "possession": 43,
        "corners": 9,
        "yellowCards": 3,
        "redCards": null,
        "expectedGoals": null
      },
      "away": {
        "teamId": 620,
        "team": "Dinamo Zagreb",
        "shots": 20,
        "shotsOnGoal": 6,
        "possession": 57,
        "corners": 5,
        "yellowCards": 2,
        "redCards": null,
        "expectedGoals": null
      },
      "statisticsChecked": true,
      "lineupsChecked": true,
      "injuriesChecked": true,
      "lineups": [
        {
          "teamId": 1012,
          "team": "FC Thun",
          "formation": "4-4-2",
          "coach": "Luca Privitelli Gian",
          "starters": [
            "N. Steffen",
            "F. Fehr",
            "J. Bamert",
            "M. Burki",
            "M. Heule",
            "N. Reichmuth",
            "J. Roth",
            "V. Matoshi",
            "N. Maier",
            "F. Dursun",
            "B. Labeau"
          ]
        },
        {
          "teamId": 620,
          "team": "Dinamo Zagreb",
          "formation": "4-2-3-1",
          "coach": "Mario Kovacevic",
          "starters": [
            "I. Filipovic",
            "M. Valincic",
            "S. Dominguez",
            "S. McKenna",
            "B. Goda",
            "J. Misic",
            "M. Zajc",
            "M. Lisica",
            "G. Vidovic",
            "M. Orsic",
            "D. Beljo"
          ]
        }
      ],
      "injuries": []
    },
    {
      "fixtureId": 1556503,
      "date": "2026-07-22",
      "league": "UCL",
      "homeTeamId": 637,
      "homeTeam": "Sturm Graz",
      "awayTeamId": 254,
      "awayTeam": "Heart Of Midlothian",
      "home": {
        "teamId": 637,
        "team": "Sturm Graz",
        "shots": 20,
        "shotsOnGoal": 6,
        "possession": 33,
        "corners": 4,
        "yellowCards": 1,
        "redCards": null,
        "expectedGoals": null
      },
      "away": {
        "teamId": 254,
        "team": "Heart Of Midlothian",
        "shots": 19,
        "shotsOnGoal": 6,
        "possession": 67,
        "corners": 12,
        "yellowCards": 2,
        "redCards": null,
        "expectedGoals": null
      },
      "statisticsChecked": true,
      "lineupsChecked": true,
      "injuriesChecked": true,
      "lineups": [
        {
          "teamId": 637,
          "team": "Sturm Graz",
          "formation": "4-4-2",
          "coach": "Fabio Ingolitsch",
          "starters": [
            "D. Khudyakov",
            "J. Heil",
            "A. Vallci",
            "J. Mitchell",
            "E. Soglo",
            "S. Seidl",
            "J. Gorenc Stankovic",
            "L. Weinhandl",
            "J. Hodl",
            "S. Wlodarczyk",
            "S. Jatta"
          ]
        },
        {
          "teamId": 254,
          "team": "Heart Of Midlothian",
          "formation": "4-2-3-1",
          "coach": "Wouter Vrancken",
          "starters": [
            "A. Schwolow",
            "C. Borchgrevink",
            "M. Fagan-Walcott",
            "J. McCart",
            "H. Milne",
            "B. Spittal",
            "O. McEntee",
            "C. Miller",
            "C. Braga",
            "A. Kyziridis",
            "P. Kabore"
          ]
        }
      ],
      "injuries": []
    },
    {
      "fixtureId": 1589420,
      "date": "2026-07-22",
      "league": "UCL",
      "homeTeamId": 278,
      "homeTeam": "Vikingur Reykjavik",
      "awayTeamId": 563,
      "awayTeam": "Hapoel Beer Sheva",
      "home": {
        "teamId": 278,
        "team": "Vikingur Reykjavik",
        "shots": null,
        "shotsOnGoal": null,
        "possession": null,
        "corners": null,
        "yellowCards": null,
        "redCards": null,
        "expectedGoals": null
      },
      "away": {
        "teamId": 563,
        "team": "Hapoel Beer Sheva",
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
          "teamId": 278,
          "team": "Vikingur Reykjavik",
          "formation": "4-3-3",
          "coach": "Solvi Ottesen",
          "starters": [
            "A. Fridriksson",
            "K. Gunnarsson",
            "O. Ekroth",
            "G. Vatnhamar",
            "H. Gudjonsson",
            "A. Thrandarson",
            "D. Hafsteinsson",
            "G. Sigurdsson",
            "O. Borgthorsson",
            "N. Hansen",
            "V. Ingimundarson"
          ]
        },
        {
          "teamId": 563,
          "team": "Hapoel Beer Sheva",
          "formation": "4-3-3",
          "coach": "Ran Kozuch",
          "starters": [
            "O. Marciano",
            "G. Mizrahi",
            "D. T. Diop",
            "Miguel Vitor",
            "O. Davidzada",
            "N. Yehoshua",
            "Lucas Ventura",
            "K. Kangwa",
            "M. Abu Rumi",
            "I. Zlatanovic",
            "A. C. Ganah"
          ]
        }
      ],
      "injuries": []
    },
    {
      "fixtureId": 1589417,
      "date": "2026-07-22",
      "league": "UCL",
      "homeTeamId": 5354,
      "homeTeam": "Larne",
      "awayTeamId": 598,
      "awayTeam": "FK Crvena Zvezda",
      "home": {
        "teamId": 5354,
        "team": "Larne",
        "shots": null,
        "shotsOnGoal": null,
        "possession": null,
        "corners": null,
        "yellowCards": null,
        "redCards": null,
        "expectedGoals": null
      },
      "away": {
        "teamId": 598,
        "team": "FK Crvena Zvezda",
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
            "R. Doherty",
            "C. Gallagher",
            "S. Graham",
            "J. McEneff",
            "M. Lusty",
            "D. Sloan"
          ]
        },
        {
          "teamId": 598,
          "team": "FK Crvena Zvezda",
          "formation": "4-3-2-1",
          "coach": "Dejan Stankovic",
          "starters": [
            "Matheus",
            "Seol Young-Woo",
            "S. Erakovic",
            "M. Veljkovic",
            "N. Tiknizyan",
            "L. Loizou",
            "T. Elsnik",
            "M. Abu Fani",
            "V. Kostov",
            "M. Ivanic",
            "Bruno Duarte"
          ]
        }
      ],
      "injuries": []
    },
    {
      "fixtureId": 1507007,
      "date": "2026-07-22",
      "league": "KLEAGUE1",
      "homeTeamId": 2745,
      "homeTeam": "Bucheon FC 1995",
      "awayTeamId": 2748,
      "awayTeam": "FC Anyang",
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
      "statisticsChecked": true,
      "lineupsChecked": true,
      "injuriesChecked": true,
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
          "formation": "4-2-3-1",
          "coach": "Byeong-hoon Ryu",
          "starters": [
            "Jung-hoon Kim",
            "Kang Ji-hun",
            "Kyung-won Kwon",
            "Yeong-chan Kim",
            "Kim Jae-Hyun",
            "Jung-hyun Kim",
            "Branislav Knežević",
            "Geon-Joo Choi",
            "Matheus Oliveira",
            "Moon Seong-Woo",
            "Breno Herculano"
          ]
        }
      ],
      "injuries": []
    },
    {
      "fixtureId": 1507008,
      "date": "2026-07-22",
      "league": "KLEAGUE1",
      "homeTeamId": 2759,
      "homeTeam": "Gwangju FC",
      "awayTeamId": 2768,
      "awayTeam": "Gimcheon Sangmu FC",
      "home": {
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
      ],
      "injuries": []
    },
    {
      "fixtureId": 1507009,
      "date": "2026-07-22",
      "league": "KLEAGUE1",
      "homeTeamId": 2766,
      "homeTeam": "FC Seoul",
      "awayTeamId": 2764,
      "awayTeam": "Pohang Steelers",
      "home": {
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
      ],
      "injuries": []
    },
    {
      "fixtureId": 1507004,
      "date": "2026-07-21",
      "league": "KLEAGUE1",
      "homeTeamId": 2761,
      "homeTeam": "Jeju United FC",
      "awayTeamId": 2746,
      "awayTeam": "Gangwon FC",
      "home": {
        "teamId": 2761,
        "team": "Jeju United FC",
        "shots": 4,
        "shotsOnGoal": 3,
        "possession": 57,
        "corners": 5,
        "yellowCards": 2,
        "redCards": 0,
        "expectedGoals": null
      },
      "away": {
        "teamId": 2746,
        "team": "Gangwon FC",
        "shots": 8,
        "shotsOnGoal": 5,
        "possession": 43,
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
          "teamId": 2761,
          "team": "Jeju United FC",
          "formation": "",
          "coach": "Sergio Costa",
          "starters": [
            "Dong-jun Kim",
            "In-su Yu",
            "Kwon Ki-Min",
            "Julien Celestine",
            "Jo In-Jung",
            "Italo",
            "Chang-min Lee",
            "Ryun-sung Kim",
            "Kim Jun-Ha",
            "Emerson Ramon",
            "Kim Shin-jin"
          ]
        },
        {
          "teamId": 2746,
          "team": "Gangwon FC",
          "formation": "",
          "coach": "Kyung-Ho Chung",
          "starters": [
            "Park Cheong-hyo",
            "Kang Joon-hyuk",
            "Marko Tuci",
            "Gi-Hyuk Lee",
            "Do-Hyun Kim",
            "Park Sang-Hyeok",
            "You-Hyeon Lee",
            "Min-woo Seo",
            "Dae-won Kim",
            "Young-jun Goh",
            "Byeong-chan Choi"
          ]
        }
      ],
      "injuries": []
    },
    {
      "fixtureId": 1507005,
      "date": "2026-07-21",
      "league": "KLEAGUE1",
      "homeTeamId": 2762,
      "homeTeam": "Jeonbuk Motors",
      "awayTeamId": 2750,
      "awayTeam": "Daejeon Citizen",
      "home": {
        "teamId": 2762,
        "team": "Jeonbuk Motors",
        "shots": 6,
        "shotsOnGoal": 0,
        "possession": 51,
        "corners": 5,
        "yellowCards": 2,
        "redCards": 0,
        "expectedGoals": null
      },
      "away": {
        "teamId": 2750,
        "team": "Daejeon Citizen",
        "shots": 7,
        "shotsOnGoal": 0,
        "possession": 49,
        "corners": 5,
        "yellowCards": 0,
        "redCards": 0,
        "expectedGoals": null
      },
      "statisticsChecked": true,
      "lineupsChecked": true,
      "injuriesChecked": true,
      "lineups": [
        {
          "teamId": 2762,
          "team": "Jeonbuk Motors",
          "formation": "",
          "coach": "Jung-Yong Chung",
          "starters": [
            "Song Bum-keun",
            "Tae-hwan Kim",
            "Wi-je Cho",
            "Yeong-bin Kim",
            "Kim Ha-Jun",
            "Oberdan Alionço",
            "Jin-gyu Kim",
            "Dong-jun Lee",
            "Kang Sang-Yun",
            "Seung-Woo Lee",
            "Gytis Paulauskas"
          ]
        },
        {
          "teamId": 2750,
          "team": "Daejeon Citizen",
          "formation": "",
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
        }
      ],
      "injuries": []
    },
    {
      "fixtureId": 1507006,
      "date": "2026-07-21",
      "league": "KLEAGUE1",
      "homeTeamId": 2767,
      "homeTeam": "Ulsan Hyundai FC",
      "awayTeamId": 2763,
      "awayTeam": "Incheon United",
      "home": {
        "teamId": 2767,
        "team": "Ulsan Hyundai FC",
        "shots": 8,
        "shotsOnGoal": 2,
        "possession": 36,
        "corners": 2,
        "yellowCards": 1,
        "redCards": 0,
        "expectedGoals": null
      },
      "away": {
        "teamId": 2763,
        "team": "Incheon United",
        "shots": 14,
        "shotsOnGoal": 4,
        "possession": 64,
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
          "teamId": 2767,
          "team": "Ulsan Hyundai FC",
          "formation": "",
          "coach": "Hyun-seok Kim",
          "starters": [
            "Hyeon-woo Jo",
            "Myeong-kwan Seo",
            "Jung Seung-hyeon",
            "Jae-ik Lee",
            "Choi Seok-Hyun",
            "Lee Jin-hyun",
            "Miłosz Trojak",
            "Darijan Bojanić",
            "Jang Si-young",
            "Dong-gyeong Lee",
            "Erick Farias"
          ]
        },
        {
          "teamId": 2763,
          "team": "Incheon United",
          "formation": "",
          "coach": "Jong-Hwan Yoon",
          "starters": [
            "Dong-heon Kim",
            "Kim Myung-Sun",
            "Gun-hee Kim",
            "Juan Ibiza",
            "Ju-yong Lee",
            "Seong-min Kim",
            "Jae-min Seo",
            "Myung Joo Lee",
            "Gerso Fernandes",
            "Chung-yong Lee",
            "Morgan Ferrier"
          ]
        }
      ],
      "injuries": []
    },
    {
      "fixtureId": 1591866,
      "date": "2026-07-20",
      "league": "WORLDCUP",
      "homeTeamId": 9,
      "homeTeam": "Spain",
      "awayTeamId": 26,
      "awayTeam": "Argentina",
      "home": {
        "teamId": 9,
        "team": "Spain",
        "shots": 20,
        "shotsOnGoal": 12,
        "possession": 65,
        "corners": 9,
        "yellowCards": 0,
        "redCards": 0,
        "expectedGoals": 1.94
      },
      "away": {
        "teamId": 26,
        "team": "Argentina",
        "shots": 2,
        "shotsOnGoal": 0,
        "possession": 35,
        "corners": 4,
        "yellowCards": 6,
        "redCards": 1,
        "expectedGoals": 0.22
      },
      "statisticsChecked": true,
      "lineupsChecked": true,
      "injuriesChecked": true,
      "lineups": [
        {
          "teamId": 9,
          "team": "Spain",
          "formation": "4-2-3-1",
          "coach": "Luis de la Fuente",
          "starters": [
            "U. Simon",
            "P. Porro",
            "P. Cubarsi",
            "A. Laporte",
            "M. Cucurella",
            "Rodri",
            "F. Ruiz",
            "Lamine Yamal",
            "D. Olmo",
            "A. Baena",
            "M. Oyarzabal"
          ]
        },
        {
          "teamId": 26,
          "team": "Argentina",
          "formation": "4-4-2",
          "coach": "Lionel Scaloni",
          "starters": [
            "E. Martinez",
            "G. Montiel",
            "C. Romero",
            "L. Martinez",
            "N. Tagliafico",
            "R. de Paul",
            "E. Fernandez",
            "A. Mac Allister",
            "N. Gonzalez",
            "L. Messi",
            "J. Alvarez"
          ]
        }
      ],
      "injuries": []
    },
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
