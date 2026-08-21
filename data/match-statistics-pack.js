(function attachMatchStatisticsPack(root, factory) {
  const pack = factory();
  if (typeof module !== "undefined" && module.exports) module.exports = pack;
  if (root) root.ODDS_ARCHIVE_MATCH_STATISTICS_PACK = pack;
})(typeof window !== "undefined" ? window : globalThis, function createMatchStatisticsPack() {
  return {
  "version": "match-statistics-v1",
  "updatedAt": "2026-08-21T08:56:26.550Z",
  "collection": {
    "dates": [
      "2026-08-20",
      "2026-08-19",
      "2026-08-18"
    ],
    "requestGroups": 7,
    "skippedGroups": 71,
    "finishedFixtures": 12,
    "skippedComplete": 7,
    "saved": 5,
    "failures": 0,
    "errors": []
  },
  "matches": [
    {
      "fixtureId": 1570334,
      "date": "2026-08-20",
      "league": "LALIGA",
      "homeTeamId": 530,
      "homeTeam": "Atletico Madrid",
      "awayTeamId": 535,
      "awayTeam": "Malaga",
      "home": {
        "teamId": 530,
        "team": "Atletico Madrid",
        "shots": 15,
        "shotsOnGoal": 6,
        "possession": 53,
        "corners": 6,
        "yellowCards": 2,
        "redCards": null,
        "expectedGoals": 0.92
      },
      "away": {
        "teamId": 535,
        "team": "Malaga",
        "shots": 5,
        "shotsOnGoal": 1,
        "possession": 47,
        "corners": 1,
        "yellowCards": 3,
        "redCards": null,
        "expectedGoals": 0.15
      },
      "statisticsChecked": true,
      "lineupsChecked": true,
      "injuriesChecked": true,
      "lineups": [
        {
          "teamId": 530,
          "team": "Atletico Madrid",
          "formation": "4-1-4-1",
          "coach": "Diego Simeone",
          "starters": [
            "J. Oblak",
            "J. Dominguez",
            "R. Le Normand",
            "D. Hancko",
            "D. Martinez",
            "Koke",
            "C. Martin",
            "R. Mendoza",
            "P. Barrios",
            "A. Ortiz",
            "A. Lookman"
          ]
        },
        {
          "teamId": 535,
          "team": "Malaga",
          "formation": "4-1-4-1",
          "coach": "Juan Funes",
          "starters": [
            "A. Herrero",
            "C. Puga",
            "A. Recio",
            "E. Galilea",
            "Rafita",
            "I. Merino",
            "D. Larrubia",
            "C. Dotor",
            "D. Lorenzo",
            "J. Munoz",
            "Chupe"
          ]
        }
      ],
      "injuries": [
        {
          "fixtureId": 1570334,
          "teamId": 530,
          "playerId": 6009,
          "player": "J. Alvarez",
          "type": "Missing Fixture",
          "reason": "Lacking Match Fitness"
        },
        {
          "fixtureId": 1570334,
          "teamId": 530,
          "playerId": 45,
          "player": "T. Lemar",
          "type": "Missing Fixture",
          "reason": "Injury"
        },
        {
          "fixtureId": 1570334,
          "teamId": 530,
          "playerId": 30776,
          "player": "C. Romero",
          "type": "Missing Fixture",
          "reason": "Injury"
        },
        {
          "fixtureId": 1570334,
          "teamId": 530,
          "playerId": 8492,
          "player": "A. Sorloth",
          "type": "Missing Fixture",
          "reason": "Muscle Injury"
        },
        {
          "fixtureId": 1570334,
          "teamId": 530,
          "playerId": 313383,
          "player": "O. Vargas",
          "type": "Missing Fixture",
          "reason": "Coach's decision"
        },
        {
          "fixtureId": 1570334,
          "teamId": 535,
          "playerId": 47478,
          "player": "F. Calero",
          "type": "Missing Fixture",
          "reason": "Ribs Injury"
        },
        {
          "fixtureId": 1570334,
          "teamId": 535,
          "playerId": 328192,
          "player": "M. Diarra",
          "type": "Missing Fixture",
          "reason": "Calf Injury"
        },
        {
          "fixtureId": 1570334,
          "teamId": 535,
          "playerId": 182786,
          "player": "Juanpe",
          "type": "Missing Fixture",
          "reason": "Muscle Injury"
        },
        {
          "fixtureId": 1570334,
          "teamId": 535,
          "playerId": 185234,
          "player": "D. Murillo",
          "type": "Missing Fixture",
          "reason": "Injury"
        },
        {
          "fixtureId": 1570334,
          "teamId": 535,
          "playerId": 386850,
          "player": "A. Nino",
          "type": "Missing Fixture",
          "reason": "Injury"
        },
        {
          "fixtureId": 1570334,
          "teamId": 535,
          "playerId": 444451,
          "player": "A. Ochoa",
          "type": "Missing Fixture",
          "reason": "Red Card"
        }
      ]
    },
    {
      "fixtureId": 1610923,
      "date": "2026-08-20",
      "league": "UCL",
      "homeTeamId": 247,
      "homeTeam": "Celtic",
      "awayTeamId": 1026,
      "awayTeam": "Lask Linz",
      "home": {
        "teamId": 247,
        "team": "Celtic",
        "shots": 17,
        "shotsOnGoal": 7,
        "possession": 64,
        "corners": 8,
        "yellowCards": 0,
        "redCards": null,
        "expectedGoals": null
      },
      "away": {
        "teamId": 1026,
        "team": "Lask Linz",
        "shots": 20,
        "shotsOnGoal": 8,
        "possession": 36,
        "corners": 3,
        "yellowCards": 1,
        "redCards": null,
        "expectedGoals": null
      },
      "statisticsChecked": true,
      "lineupsChecked": true,
      "injuriesChecked": true,
      "lineups": [
        {
          "teamId": 247,
          "team": "Celtic",
          "formation": "4-3-3",
          "coach": "Martin O'Neill",
          "starters": [
            "V. Sinisalo",
            "C. Donovan",
            "C. Carter-Vickers",
            "A. Trusty",
            "K. Tierney",
            "B. Nygren",
            "C. McGregor",
            "M. Baur",
            "C. Duran",
            "K. Hogh",
            "Yang Hyun-Jun"
          ]
        },
        {
          "teamId": 1026,
          "team": "Lask Linz",
          "formation": "3-5-2",
          "coach": "Dietmar Kuhbauer",
          "starters": [
            "L. Jungwirth",
            "X. Mbuyamba",
            "J. Tornich",
            "A. Andrade",
            "K. P. Molgaard Jorgensen",
            "K. Danek",
            "R. Ljubicic",
            "S. Horvath",
            "G. Bello",
            "M. Usor",
            "S. Adeniran"
          ]
        }
      ],
      "injuries": [
        {
          "fixtureId": 1610923,
          "teamId": 247,
          "playerId": 78547,
          "player": "A. Johnston",
          "type": "Missing Fixture",
          "reason": "Inactive"
        },
        {
          "fixtureId": 1610923,
          "teamId": 247,
          "playerId": 581,
          "player": "Jota",
          "type": "Missing Fixture",
          "reason": "Knee Injury"
        },
        {
          "fixtureId": 1610923,
          "teamId": 247,
          "playerId": 297,
          "player": "A. Oxlade-Chamberlain",
          "type": "Missing Fixture",
          "reason": "Red Card"
        },
        {
          "fixtureId": 1610923,
          "teamId": 1026,
          "playerId": 329612,
          "player": "R. Harakate",
          "type": "Missing Fixture",
          "reason": "Knee Injury"
        }
      ]
    },
    {
      "fixtureId": 1622624,
      "date": "2026-08-20",
      "league": "UCL",
      "homeTeamId": 413,
      "homeTeam": "NEC Nijmegen",
      "awayTeamId": 327,
      "awayTeam": "Bodo/Glimt",
      "home": {
        "teamId": 413,
        "team": "NEC Nijmegen",
        "shots": 22,
        "shotsOnGoal": 6,
        "possession": 69,
        "corners": 7,
        "yellowCards": 2,
        "redCards": null,
        "expectedGoals": null
      },
      "away": {
        "teamId": 327,
        "team": "Bodo/Glimt",
        "shots": 8,
        "shotsOnGoal": 4,
        "possession": 31,
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
          "teamId": 413,
          "team": "NEC Nijmegen",
          "formation": "3-4-2-1",
          "coach": "Dick Schreuder",
          "starters": [
            "G. Crettaz",
            "B. Pereira",
            "T. Storm",
            "D. Fonville",
            "E. Mor",
            "D. Nejasmic",
            "N. Lebreton",
            "C. Bischoff",
            "T. Chery",
            "D. Tadic",
            "B. Linssen"
          ]
        },
        {
          "teamId": 327,
          "team": "Bodo/Glimt",
          "formation": "4-3-3",
          "coach": "Kjetil Knutsen",
          "starters": [
            "N. Haikin",
            "F. Sjovold",
            "O. L. Bjortuft",
            "H. Aleesami",
            "F. Bjorkan",
            "S. Auklend",
            "P. Berg",
            "S. Fet",
            "O. Blomberg",
            "A. Helmersen",
            "J. Hauge"
          ]
        }
      ],
      "injuries": [
        {
          "fixtureId": 1622624,
          "teamId": 413,
          "playerId": 33289,
          "player": "K. Ogawa",
          "type": "Missing Fixture",
          "reason": "Head Injury"
        },
        {
          "fixtureId": 1622624,
          "teamId": 413,
          "playerId": 378864,
          "player": "S. Ouaissa",
          "type": "Missing Fixture",
          "reason": "Muscle Injury"
        },
        {
          "fixtureId": 1622624,
          "teamId": 413,
          "playerId": 625,
          "player": "P. Sandler",
          "type": "Missing Fixture",
          "reason": "Injury"
        },
        {
          "fixtureId": 1622624,
          "teamId": 413,
          "playerId": 535,
          "player": "P. Schuurs",
          "type": "Missing Fixture",
          "reason": "Knee Injury"
        },
        {
          "fixtureId": 1622624,
          "teamId": 327,
          "playerId": 39065,
          "player": "H. Evjen",
          "type": "Missing Fixture",
          "reason": "Knee Injury"
        },
        {
          "fixtureId": 1622624,
          "teamId": 327,
          "playerId": 39352,
          "player": "J. Gundersen",
          "type": "Missing Fixture",
          "reason": "Injury"
        },
        {
          "fixtureId": 1622624,
          "teamId": 327,
          "playerId": 39360,
          "player": "A. Mikkelsen",
          "type": "Missing Fixture",
          "reason": "Groin Injury"
        },
        {
          "fixtureId": 1622624,
          "teamId": 327,
          "playerId": 407659,
          "player": "I. Sjong",
          "type": "Missing Fixture",
          "reason": "Injury"
        }
      ]
    },
    {
      "fixtureId": 1622623,
      "date": "2026-08-20",
      "league": "UCL",
      "homeTeamId": 563,
      "homeTeam": "Hapoel Beer Sheva",
      "awayTeamId": 13976,
      "awayTeam": "Sabah FA",
      "home": {
        "teamId": 563,
        "team": "Hapoel Beer Sheva",
        "shots": 18,
        "shotsOnGoal": 7,
        "possession": 67,
        "corners": 3,
        "yellowCards": 3,
        "redCards": null,
        "expectedGoals": null
      },
      "away": {
        "teamId": 13976,
        "team": "Sabah FA",
        "shots": 8,
        "shotsOnGoal": 5,
        "possession": 33,
        "corners": 2,
        "yellowCards": 0,
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
            "Miguel Vitor",
            "I. Rotman",
            "P. Amador",
            "N. Yehoshua",
            "Lucas Ventura",
            "E. Peretz",
            "J. East",
            "I. Zlatanovic",
            "Z. Ahmed"
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
            "U. Rakhmonaliyev",
            "I. Lepinjica",
            "X. Severina",
            "A. Isayev",
            "V. Simic",
            "J. Mickels"
          ]
        }
      ],
      "injuries": [
        {
          "fixtureId": 1622623,
          "teamId": 563,
          "playerId": 70481,
          "player": "D. Biton",
          "type": "Missing Fixture",
          "reason": "Heart Problems"
        },
        {
          "fixtureId": 1622623,
          "teamId": 563,
          "playerId": 307834,
          "player": "Joao Victor",
          "type": "Missing Fixture",
          "reason": "Muscle Injury"
        },
        {
          "fixtureId": 1622623,
          "teamId": 13976,
          "playerId": 348230,
          "player": "K. Aliyev",
          "type": "Missing Fixture",
          "reason": "Tendon Injury"
        }
      ]
    },
    {
      "fixtureId": 1622625,
      "date": "2026-08-20",
      "league": "UCL",
      "homeTeamId": 656,
      "homeTeam": "Slovan Bratislava",
      "awayTeamId": 4360,
      "awayTeam": "Celje",
      "home": {
        "teamId": 656,
        "team": "Slovan Bratislava",
        "shots": 14,
        "shotsOnGoal": 2,
        "possession": 49,
        "corners": 4,
        "yellowCards": 2,
        "redCards": null,
        "expectedGoals": null
      },
      "away": {
        "teamId": 4360,
        "team": "Celje",
        "shots": 8,
        "shotsOnGoal": 4,
        "possession": 51,
        "corners": 0,
        "yellowCards": 2,
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
            "D. Takac",
            "C. Blackman",
            "K. Bajric",
            "S. Markovic",
            "S. Cruz",
            "C. Martinez",
            "P. Pokorny",
            "A. Mustafic",
            "T. Barseghyan",
            "R. Cerepkai",
            "S. Camara"
          ]
        },
        {
          "teamId": 4360,
          "team": "Celje",
          "formation": "4-2-3-1",
          "coach": "Vitor Campelos",
          "starters": [
            "Z. Leban",
            "P. Sirvys",
            "D. Hrka",
            "A. Tutyskinas",
            "M. Avdyli",
            "P. Daniel",
            "M. Zabukovnik",
            "M. Ivansek",
            "S. Seslar",
            "M. Kvesic",
            "A. Kucys"
          ]
        }
      ],
      "injuries": [
        {
          "fixtureId": 1622625,
          "teamId": 656,
          "playerId": 208398,
          "player": "M. Kukharevych",
          "type": "Missing Fixture",
          "reason": "Injury"
        },
        {
          "fixtureId": 1622625,
          "teamId": 656,
          "playerId": 383041,
          "player": "N. Marcelli",
          "type": "Missing Fixture",
          "reason": "Injury"
        },
        {
          "fixtureId": 1622625,
          "teamId": 4360,
          "playerId": 163053,
          "player": "L. Bejger",
          "type": "Missing Fixture",
          "reason": "Shin Injury"
        },
        {
          "fixtureId": 1622625,
          "teamId": 4360,
          "playerId": 161587,
          "player": "J. Pisek",
          "type": "Missing Fixture",
          "reason": "Knee Injury"
        }
      ]
    },
    {
      "fixtureId": 1622621,
      "date": "2026-08-19",
      "league": "UCL",
      "homeTeamId": 611,
      "homeTeam": "Fenerbahçe",
      "awayTeamId": 80,
      "awayTeam": "Lyon",
      "home": {
        "teamId": 611,
        "team": "Fenerbahçe",
        "shots": 12,
        "shotsOnGoal": 5,
        "possession": 52,
        "corners": 3,
        "yellowCards": 2,
        "redCards": null,
        "expectedGoals": null
      },
      "away": {
        "teamId": 80,
        "team": "Lyon",
        "shots": 12,
        "shotsOnGoal": 5,
        "possession": 48,
        "corners": 0,
        "yellowCards": 1,
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
            "Ederson",
            "N. Semedo",
            "M. Skriniar",
            "N. Ake",
            "A. Brown",
            "N. Kante",
            "M. Guendouzi",
            "M. Greenwood",
            "Talisca",
            "K. Akturkoglu",
            "V. Muriqi"
          ]
        },
        {
          "teamId": 80,
          "team": "Lyon",
          "formation": "4-2-3-1",
          "coach": "Paulo Fonseca",
          "starters": [
            "D. Greif",
            "A. Maitland-Niles",
            "R. Kluivert",
            "M. Niakhate",
            "Abner Vinicius",
            "T. Tessmann",
            "T. Morton",
            "E. Nuamah",
            "C. Tolisso",
            "M. Fofana",
            "L. Openda"
          ]
        }
      ],
      "injuries": [
        {
          "fixtureId": 1622621,
          "teamId": 611,
          "playerId": 50129,
          "player": "E. Demir",
          "type": "Missing Fixture",
          "reason": "Inactive"
        },
        {
          "fixtureId": 1622621,
          "teamId": 611,
          "playerId": 21090,
          "player": "Diego Carlos",
          "type": "Missing Fixture",
          "reason": "Inactive"
        },
        {
          "fixtureId": 1622621,
          "teamId": 611,
          "playerId": 381812,
          "player": "O. Fayed",
          "type": "Missing Fixture",
          "reason": "Inactive"
        },
        {
          "fixtureId": 1622621,
          "teamId": 611,
          "playerId": 49837,
          "player": "M. Gunok",
          "type": "Missing Fixture",
          "reason": "Muscle Injury"
        },
        {
          "fixtureId": 1622621,
          "teamId": 611,
          "playerId": 1305,
          "player": "D. Livakovic",
          "type": "Missing Fixture",
          "reason": "Inactive"
        },
        {
          "fixtureId": 1622621,
          "teamId": 611,
          "playerId": 340727,
          "player": "O. Mimovic",
          "type": "Missing Fixture",
          "reason": "Inactive"
        },
        {
          "fixtureId": 1622621,
          "teamId": 611,
          "playerId": 272721,
          "player": "J. Oosterwolde",
          "type": "Missing Fixture",
          "reason": "Achilles Tendon Injury"
        },
        {
          "fixtureId": 1622621,
          "teamId": 611,
          "playerId": 829,
          "player": "Rodrigo Becao",
          "type": "Missing Fixture",
          "reason": "Inactive"
        },
        {
          "fixtureId": 1622621,
          "teamId": 611,
          "playerId": 18776,
          "player": "C. Soyuncu",
          "type": "Missing Fixture",
          "reason": "Injury"
        },
        {
          "fixtureId": 1622621,
          "teamId": 611,
          "playerId": 785,
          "player": "C. Under",
          "type": "Missing Fixture",
          "reason": "Inactive"
        },
        {
          "fixtureId": 1622621,
          "teamId": 611,
          "playerId": 50097,
          "player": "M. Yandas",
          "type": "Missing Fixture",
          "reason": "Inactive"
        },
        {
          "fixtureId": 1622621,
          "teamId": 611,
          "playerId": 633187,
          "player": "A. Yesilyurt",
          "type": "Missing Fixture",
          "reason": "Inactive"
        },
        {
          "fixtureId": 1622621,
          "teamId": 80,
          "playerId": 519664,
          "player": "K. Merah",
          "type": "Missing Fixture",
          "reason": "Ankle Injury"
        },
        {
          "fixtureId": 1622621,
          "teamId": 80,
          "playerId": 66387,
          "player": "P. Sulc",
          "type": "Missing Fixture",
          "reason": "Knee Injury"
        },
        {
          "fixtureId": 1622621,
          "teamId": 80,
          "playerId": 529,
          "player": "N. Tagliafico",
          "type": "Missing Fixture",
          "reason": "Inactive"
        }
      ]
    },
    {
      "fixtureId": 1622620,
      "date": "2026-08-19",
      "league": "UCL",
      "homeTeamId": 620,
      "homeTeam": "Dinamo Zagreb",
      "awayTeamId": 759,
      "awayTeam": "Viking",
      "home": {
        "teamId": 620,
        "team": "Dinamo Zagreb",
        "shots": 23,
        "shotsOnGoal": 4,
        "possession": 60,
        "corners": 9,
        "yellowCards": 1,
        "redCards": null,
        "expectedGoals": null
      },
      "away": {
        "teamId": 759,
        "team": "Viking",
        "shots": 6,
        "shotsOnGoal": 3,
        "possession": 40,
        "corners": 3,
        "yellowCards": 1,
        "redCards": null,
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
            "I. Nevistic",
            "M. Valincic",
            "S. Dominguez",
            "S. McKenna",
            "M. Perez Vinlof",
            "J. Misic",
            "M. Lisica",
            "L. Stojkovic",
            "M. Zajc",
            "M. Orsic",
            "D. Beljo"
          ]
        },
        {
          "teamId": 759,
          "team": "Viking",
          "formation": "4-3-3",
          "coach": "Bjarte Aarsheim",
          "starters": [
            "A. Ostbo",
            "H. Heggheim",
            "G. Stensness",
            "H. Falchener",
            "K. Haugen",
            "T. Moi",
            "J. Bell",
            "K. Askildsen",
            "Z. Tripic",
            "P. Christiansen",
            "E. Austbo"
          ]
        }
      ],
      "injuries": [
        {
          "fixtureId": 1622620,
          "teamId": 620,
          "playerId": 14406,
          "player": "I. Filipovic",
          "type": "Missing Fixture",
          "reason": "Red Card"
        },
        {
          "fixtureId": 1622620,
          "teamId": 620,
          "playerId": 1316,
          "player": "K. Theophile-Catherine",
          "type": "Missing Fixture",
          "reason": "Inactive"
        },
        {
          "fixtureId": 1622620,
          "teamId": 759,
          "playerId": 15712,
          "player": "A. Baertelsen",
          "type": "Missing Fixture",
          "reason": "Foot Injury"
        },
        {
          "fixtureId": 1622620,
          "teamId": 759,
          "playerId": 39220,
          "player": "V. Berisha",
          "type": "Missing Fixture",
          "reason": "Thigh Injury"
        },
        {
          "fixtureId": 1622620,
          "teamId": 759,
          "playerId": 539326,
          "player": "A. Cosic",
          "type": "Missing Fixture",
          "reason": "Injury"
        },
        {
          "fixtureId": 1622620,
          "teamId": 759,
          "playerId": 57436,
          "player": "M. Roseth",
          "type": "Missing Fixture",
          "reason": "Knee Injury"
        }
      ]
    },
    {
      "fixtureId": 1622622,
      "date": "2026-08-19",
      "league": "UCL",
      "homeTeamId": 646,
      "homeTeam": "Levski Sofia",
      "awayTeamId": 575,
      "awayTeam": "AEK Athens FC",
      "home": {
        "teamId": 646,
        "team": "Levski Sofia",
        "shots": 15,
        "shotsOnGoal": 3,
        "possession": 52,
        "corners": 1,
        "yellowCards": null,
        "redCards": null,
        "expectedGoals": null
      },
      "away": {
        "teamId": 575,
        "team": "AEK Athens FC",
        "shots": 12,
        "shotsOnGoal": 1,
        "possession": 48,
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
          "teamId": 646,
          "team": "Levski Sofia",
          "formation": "4-2-3-1",
          "coach": "Julio Velazquez",
          "starters": [
            "S. Vutsov",
            "A. Neves",
            "K. Dimitrov",
            "N. Serafimov",
            "A. Centelles",
            "M. Moubarik",
            "Maicon",
            "A. Oko-Flex",
            "Serginho",
            "Everton Bala",
            "Reinaldo"
          ]
        },
        {
          "teamId": 575,
          "team": "AEK Athens FC",
          "formation": "4-4-2",
          "coach": "Marko Nikolic",
          "starters": [
            "T. Strakosha",
            "L. Rota",
            "H. Moukoudi",
            "F. Relvas",
            "S. Pilios",
            "L. Majer",
            "R. Marin",
            "K. Kairinen",
            "A. Koita",
            "Zini",
            "L. Jovic"
          ]
        }
      ],
      "injuries": []
    },
    {
      "fixtureId": 1563094,
      "date": "2026-08-18",
      "league": "CHAMPIONSHIP",
      "homeTeamId": 43,
      "homeTeam": "Cardiff",
      "awayTeamId": 1837,
      "awayTeam": "Wrexham",
      "home": {
        "teamId": 43,
        "team": "Cardiff",
        "shots": 11,
        "shotsOnGoal": 3,
        "possession": 67,
        "corners": 9,
        "yellowCards": 1,
        "redCards": null,
        "expectedGoals": 0.9
      },
      "away": {
        "teamId": 1837,
        "team": "Wrexham",
        "shots": 18,
        "shotsOnGoal": 8,
        "possession": 33,
        "corners": 9,
        "yellowCards": 2,
        "redCards": null,
        "expectedGoals": 1.43
      },
      "statisticsChecked": true,
      "lineupsChecked": true,
      "injuriesChecked": true,
      "lineups": [
        {
          "teamId": 43,
          "team": "Cardiff",
          "formation": "4-1-4-1",
          "coach": "Brian Barry-Murphy",
          "starters": [
            "N. Trott",
            "P. Ng",
            "G. Osho",
            "J. Bagan",
            "C. Scanlon",
            "A. Robertson",
            "O. Tanner",
            "J. Moylan",
            "C. Ashford",
            "C. Willock",
            "Y. Salech"
          ]
        },
        {
          "teamId": 1837,
          "team": "Wrexham",
          "formation": "5-4-1",
          "coach": "Phil Parkinson",
          "starters": [
            "A. Patterson",
            "D. Imray",
            "Z. Vyner",
            "D. Hyam",
            "C. Doyle",
            "G. Thomason",
            "O. Rathbone",
            "M. James",
            "L. O'Brien",
            "N. Broadhead",
            "K. Moore"
          ]
        }
      ],
      "injuries": [
        {
          "fixtureId": 1563094,
          "teamId": 43,
          "playerId": 153434,
          "player": "W. Fish",
          "type": "Missing Fixture",
          "reason": "Inactive"
        },
        {
          "fixtureId": 1563094,
          "teamId": 43,
          "playerId": 394973,
          "player": "D. Lawlor",
          "type": "Missing Fixture",
          "reason": "Injury"
        },
        {
          "fixtureId": 1563094,
          "teamId": 1837,
          "playerId": 6931,
          "player": "L. Cacace",
          "type": "Missing Fixture",
          "reason": "Inactive"
        },
        {
          "fixtureId": 1563094,
          "teamId": 1837,
          "playerId": 278123,
          "player": "S. Revan",
          "type": "Missing Fixture",
          "reason": "Hamstring Injury"
        },
        {
          "fixtureId": 1563094,
          "teamId": 1837,
          "playerId": 88457,
          "player": "B. Sheaf",
          "type": "Missing Fixture",
          "reason": "Inactive"
        },
        {
          "fixtureId": 1563094,
          "teamId": 1837,
          "playerId": 19566,
          "player": "J. Windass",
          "type": "Missing Fixture",
          "reason": "Inactive"
        }
      ]
    },
    {
      "fixtureId": 1570337,
      "date": "2026-08-18",
      "league": "LALIGA",
      "homeTeamId": 544,
      "homeTeam": "Deportivo La Coruna",
      "awayTeamId": 797,
      "awayTeam": "Elche",
      "home": {
        "teamId": 544,
        "team": "Deportivo La Coruna",
        "shots": 8,
        "shotsOnGoal": 3,
        "possession": 39,
        "corners": 2,
        "yellowCards": 2,
        "redCards": null,
        "expectedGoals": 0.34
      },
      "away": {
        "teamId": 797,
        "team": "Elche",
        "shots": 11,
        "shotsOnGoal": 6,
        "possession": 61,
        "corners": 6,
        "yellowCards": 2,
        "redCards": null,
        "expectedGoals": 1.23
      },
      "statisticsChecked": true,
      "lineupsChecked": true,
      "injuriesChecked": true,
      "lineups": [
        {
          "teamId": 544,
          "team": "Deportivo La Coruna",
          "formation": "4-2-3-1",
          "coach": "Antonio Hidalgo",
          "starters": [
            "L. Roman",
            "X. Navarro",
            "L. Noubi",
            "B. Ede",
            "G. Quagliata",
            "M. Soriano",
            "L. Amatucci",
            "A. Altimira",
            "B. Nsongo",
            "J. Asp",
            "P. Aubameyang"
          ]
        },
        {
          "teamId": 797,
          "team": "Elche",
          "formation": "5-4-1",
          "coach": "Martin Anselmi",
          "starters": [
            "M. Dituro",
            "Buba Sangare",
            "D. Affengruber",
            "F. Redondo Solari",
            "V. Chust",
            "G. Valera",
            "G. Villar",
            "M. Neto",
            "M. Aguado",
            "A. Houary",
            "F. Nino"
          ]
        }
      ],
      "injuries": [
        {
          "fixtureId": 1570337,
          "teamId": 544,
          "playerId": 628615,
          "player": "N. Carrillo",
          "type": "Missing Fixture",
          "reason": "Injury"
        },
        {
          "fixtureId": 1570337,
          "teamId": 544,
          "playerId": 295880,
          "player": "Y. Hernandez",
          "type": "Missing Fixture",
          "reason": "Groin Injury"
        },
        {
          "fixtureId": 1570337,
          "teamId": 797,
          "playerId": 439293,
          "player": "A. Boayar",
          "type": "Missing Fixture",
          "reason": "Muscle Injury"
        },
        {
          "fixtureId": 1570337,
          "teamId": 797,
          "playerId": 18821,
          "player": "G. Diangana",
          "type": "Missing Fixture",
          "reason": "Knee Injury"
        },
        {
          "fixtureId": 1570337,
          "teamId": 797,
          "playerId": 358600,
          "player": "A. Osorio",
          "type": "Missing Fixture",
          "reason": "Muscle Injury"
        },
        {
          "fixtureId": 1570337,
          "teamId": 797,
          "playerId": 284415,
          "player": "Y. Santiago",
          "type": "Missing Fixture",
          "reason": "Knee Injury"
        }
      ]
    },
    {
      "fixtureId": 1575459,
      "date": "2026-08-18",
      "league": "PRIMEIRA_LIGA",
      "homeTeamId": 4716,
      "homeTeam": "Casa Pia",
      "awayTeamId": 211,
      "awayTeam": "Benfica",
      "home": {
        "teamId": 4716,
        "team": "Casa Pia",
        "shots": 3,
        "shotsOnGoal": 0,
        "possession": 36,
        "corners": 1,
        "yellowCards": 3,
        "redCards": 1,
        "expectedGoals": 0.12
      },
      "away": {
        "teamId": 211,
        "team": "Benfica",
        "shots": 20,
        "shotsOnGoal": 8,
        "possession": 64,
        "corners": 3,
        "yellowCards": 0,
        "redCards": 0,
        "expectedGoals": 3.04
      },
      "statisticsChecked": true,
      "lineupsChecked": true,
      "injuriesChecked": true,
      "lineups": [
        {
          "teamId": 4716,
          "team": "Casa Pia",
          "formation": "4-3-3",
          "coach": "Filipe Coelho",
          "starters": [
            "A. Gomes",
            "A. Geraldes",
            "J. Goulart",
            "D. Sousa",
            "A. Conte",
            "S. Perez",
            "L. Ofori",
            "Gabi",
            "K. Prieto",
            "H. Araujo",
            "Rochinha"
          ]
        },
        {
          "teamId": 211,
          "team": "Benfica",
          "formation": "4-2-3-1",
          "coach": "Marco Silva",
          "starters": [
            "S. Soares",
            "A. Bah",
            "T. Araujo",
            "C. Lenglet",
            "S. Dahl",
            "L. Barreiro",
            "E. Barrenechea",
            "Rafa Silva",
            "G. Sudakov",
            "G. Prestianni",
            "V. Pavlidis"
          ]
        }
      ],
      "injuries": []
    },
    {
      "fixtureId": 1584375,
      "date": "2026-08-18",
      "league": "SUPER_LIG",
      "homeTeamId": 3603,
      "homeTeam": "Samsunspor",
      "awayTeamId": 994,
      "awayTeam": "Göztepe",
      "home": {
        "teamId": 3603,
        "team": "Samsunspor",
        "shots": 21,
        "shotsOnGoal": 3,
        "possession": 69,
        "corners": 4,
        "yellowCards": 1,
        "redCards": null,
        "expectedGoals": 2.8
      },
      "away": {
        "teamId": 994,
        "team": "Göztepe",
        "shots": 20,
        "shotsOnGoal": 7,
        "possession": 31,
        "corners": 8,
        "yellowCards": 4,
        "redCards": null,
        "expectedGoals": 1.71
      },
      "statisticsChecked": true,
      "lineupsChecked": true,
      "injuriesChecked": true,
      "lineups": [
        {
          "teamId": 3603,
          "team": "Samsunspor",
          "formation": "4-3-3",
          "coach": "Thorsten Fink",
          "starters": [
            "O. Kocuk",
            "J. Mendes",
            "T. Borevkovic",
            "A. B. Diabbate",
            "L. Tomasson",
            "A. Makoumbou",
            "C. Yuksel",
            "Y. Kayan",
            "S. Jarju",
            "Marius",
            "E. Kilinc"
          ]
        },
        {
          "teamId": 994,
          "team": "Göztepe",
          "formation": "3-4-1-2",
          "coach": "Stanimir Stoilov",
          "starters": [
            "L. Gugeshashvili",
            "T. Altikardes",
            "Allan Godoi",
            "E. Yildirim",
            "A. Kurtulan",
            "A. Matos",
            "N. Miroshi",
            "A. Cherni",
            "A. Antunes",
            "Andre Henrique",
            "S. Armstrong"
          ]
        }
      ],
      "injuries": [
        {
          "fixtureId": 1584375,
          "teamId": 3603,
          "playerId": 356998,
          "player": "J. Assoumou",
          "type": "Missing Fixture",
          "reason": "Inactive"
        },
        {
          "fixtureId": 1584375,
          "teamId": 3603,
          "playerId": 273762,
          "player": "Y. E. Cift",
          "type": "Missing Fixture",
          "reason": "Inactive"
        },
        {
          "fixtureId": 1584375,
          "teamId": 3603,
          "playerId": 113581,
          "player": "T. Coulibaly",
          "type": "Missing Fixture",
          "reason": "Inactive"
        },
        {
          "fixtureId": 1584375,
          "teamId": 3603,
          "playerId": 346522,
          "player": "I. Drapinski",
          "type": "Missing Fixture",
          "reason": "Inactive"
        },
        {
          "fixtureId": 1584375,
          "teamId": 3603,
          "playerId": 93001,
          "player": "E. Tavsan",
          "type": "Missing Fixture",
          "reason": "Inactive"
        },
        {
          "fixtureId": 1584375,
          "teamId": 3603,
          "playerId": 18749,
          "player": "E. Watt",
          "type": "Missing Fixture",
          "reason": "Suspended"
        }
      ]
    },
    {
      "fixtureId": 1563093,
      "date": "2026-08-17",
      "league": "CHAMPIONSHIP",
      "homeTeamId": 44,
      "homeTeam": "Burnley",
      "awayTeamId": 48,
      "awayTeam": "West Ham",
      "home": {
        "teamId": 44,
        "team": "Burnley",
        "shots": 18,
        "shotsOnGoal": 6,
        "possession": 46,
        "corners": 5,
        "yellowCards": 1,
        "redCards": null,
        "expectedGoals": 2.33
      },
      "away": {
        "teamId": 48,
        "team": "West Ham",
        "shots": 11,
        "shotsOnGoal": 2,
        "possession": 54,
        "corners": 6,
        "yellowCards": 4,
        "redCards": null,
        "expectedGoals": 1.33
      },
      "statisticsChecked": true,
      "lineupsChecked": true,
      "injuriesChecked": true,
      "lineups": [
        {
          "teamId": 44,
          "team": "Burnley",
          "formation": "4-2-3-1",
          "coach": "Nicky Hayen",
          "starters": [
            "M. Weiss",
            "O. Sonne",
            "K. Walker",
            "M. Alleyne",
            "B. Humphreys",
            "H. Mejbri",
            "U. Raghouber",
            "M. Edwards",
            "A. Ramsey",
            "J. Bruun Larsen",
            "Z. Flemming"
          ]
        },
        {
          "teamId": 48,
          "team": "West Ham",
          "formation": "4-4-2",
          "coach": "Nuno Espirito Santo",
          "starters": [
            "M. Hermansen",
            "K. Walker-Peters",
            "K. Mavropanos",
            "M. Kilman",
            "O. Scarles",
            "J. Bowen",
            "L. Orford",
            "M. Kante",
            "M. Solomon",
            "Pablo",
            "T. Castellanos"
          ]
        }
      ],
      "injuries": [
        {
          "fixtureId": 1563093,
          "teamId": 44,
          "playerId": 361388,
          "player": "E. Agyei",
          "type": "Missing Fixture",
          "reason": "Injury"
        },
        {
          "fixtureId": 1563093,
          "teamId": 44,
          "playerId": 336578,
          "player": "J. Banel",
          "type": "Missing Fixture",
          "reason": "Injury"
        },
        {
          "fixtureId": 1563093,
          "teamId": 44,
          "playerId": 18927,
          "player": "A. Barnes",
          "type": "Missing Fixture",
          "reason": "Injury"
        },
        {
          "fixtureId": 1563093,
          "teamId": 44,
          "playerId": 25628,
          "player": "J. Beyer",
          "type": "Missing Fixture",
          "reason": "Hamstring Injury"
        },
        {
          "fixtureId": 1563093,
          "teamId": 44,
          "playerId": 19827,
          "player": "J. Cullen",
          "type": "Missing Fixture",
          "reason": "Knee Injury"
        },
        {
          "fixtureId": 1563093,
          "teamId": 48,
          "playerId": 358969,
          "player": "K. Lamadrid",
          "type": "Missing Fixture",
          "reason": "Knee Injury"
        },
        {
          "fixtureId": 1563093,
          "teamId": 48,
          "playerId": 1243,
          "player": "T. Soucek",
          "type": "Missing Fixture",
          "reason": "Ankle Injury"
        }
      ]
    },
    {
      "fixtureId": 1570339,
      "date": "2026-08-17",
      "league": "LALIGA",
      "homeTeamId": 4665,
      "homeTeam": "Racing Santander",
      "awayTeamId": 533,
      "awayTeam": "Villarreal",
      "home": {
        "teamId": 4665,
        "team": "Racing Santander",
        "shots": 17,
        "shotsOnGoal": 3,
        "possession": 41,
        "corners": 6,
        "yellowCards": 2,
        "redCards": null,
        "expectedGoals": 1.87
      },
      "away": {
        "teamId": 533,
        "team": "Villarreal",
        "shots": 12,
        "shotsOnGoal": 7,
        "possession": 59,
        "corners": 10,
        "yellowCards": 4,
        "redCards": null,
        "expectedGoals": 0.67
      },
      "statisticsChecked": true,
      "lineupsChecked": true,
      "injuriesChecked": true,
      "lineups": [
        {
          "teamId": 4665,
          "team": "Racing Santander",
          "formation": "4-2-3-1",
          "coach": "Jose Lopez",
          "starters": [
            "J. Agirrezabala",
            "A. Mantilla",
            "Pedro Felipe",
            "P. Ramon",
            "J. Salinas",
            "G. Puerta",
            "S. Martinez",
            "A. Martin",
            "S. Canales",
            "I. Vicente",
            "A. Villalibre"
          ]
        },
        {
          "teamId": 533,
          "team": "Villarreal",
          "formation": "4-4-2",
          "coach": "Inigo Perez",
          "starters": [
            "Luiz Junior",
            "S. Mourino",
            "J. Foyth",
            "R. Veiga",
            "C. Romero",
            "N. Pepe",
            "S. Comesana",
            "P. Gueye",
            "A. Moleiro",
            "A. Perez",
            "G. Mikautadze"
          ]
        }
      ],
      "injuries": [
        {
          "fixtureId": 1570339,
          "teamId": 4665,
          "playerId": 24567,
          "player": "G. Guliashvili",
          "type": "Missing Fixture",
          "reason": "Leg Injury"
        }
      ]
    },
    {
      "fixtureId": 1570338,
      "date": "2026-08-17",
      "league": "LALIGA",
      "homeTeamId": 540,
      "homeTeam": "Espanyol",
      "awayTeamId": 539,
      "awayTeam": "Levante",
      "home": {
        "teamId": 540,
        "team": "Espanyol",
        "shots": 16,
        "shotsOnGoal": 6,
        "possession": 54,
        "corners": 0,
        "yellowCards": 3,
        "redCards": null,
        "expectedGoals": 1.55
      },
      "away": {
        "teamId": 539,
        "team": "Levante",
        "shots": 4,
        "shotsOnGoal": 0,
        "possession": 46,
        "corners": 1,
        "yellowCards": 0,
        "redCards": null,
        "expectedGoals": 0.28
      },
      "statisticsChecked": true,
      "lineupsChecked": true,
      "injuriesChecked": true,
      "lineups": [
        {
          "teamId": 540,
          "team": "Espanyol",
          "formation": "4-2-3-1",
          "coach": "Manolo Gonzalez",
          "starters": [
            "M. Dmitrovic",
            "O. El Hilali",
            "C. Riedel",
            "U. Nunez",
            "R. Hinojo",
            "U. Gonzalez",
            "Exposito",
            "A. Calatrava",
            "J. Hernandez",
            "T. Dolan",
            "R. Fernandez Jaen"
          ]
        },
        {
          "teamId": 539,
          "team": "Levante",
          "formation": "4-2-3-1",
          "coach": "Luis Castro",
          "starters": [
            "M. Ryan",
            "N. Perez",
            "Dela",
            "A. Mandi",
            "M. Sanchez",
            "J. A. Olasagasti",
            "O. Rey",
            "V. Garcia",
            "C. Alvarez",
            "P. Cortes",
            "I. Romero"
          ]
        }
      ],
      "injuries": [
        {
          "fixtureId": 1570338,
          "teamId": 540,
          "playerId": 47396,
          "player": "K. Garcia",
          "type": "Missing Fixture",
          "reason": "Hamstring Injury"
        },
        {
          "fixtureId": 1570338,
          "teamId": 540,
          "playerId": 47349,
          "player": "J. Puado",
          "type": "Missing Fixture",
          "reason": "Knee Injury"
        },
        {
          "fixtureId": 1570338,
          "teamId": 539,
          "playerId": 47225,
          "player": "R. Brugue",
          "type": "Missing Fixture",
          "reason": "Red Card"
        },
        {
          "fixtureId": 1570338,
          "teamId": 539,
          "playerId": 338295,
          "player": "A. Primo",
          "type": "Missing Fixture",
          "reason": "Shoulder Injury"
        }
      ]
    },
    {
      "fixtureId": 1575457,
      "date": "2026-08-17",
      "league": "PRIMEIRA_LIGA",
      "homeTeamId": 240,
      "homeTeam": "Arouca",
      "awayTeamId": 215,
      "awayTeam": "Moreirense",
      "home": {
        "teamId": 240,
        "team": "Arouca",
        "shots": 14,
        "shotsOnGoal": 6,
        "possession": 51,
        "corners": 5,
        "yellowCards": 3,
        "redCards": null,
        "expectedGoals": 2.14
      },
      "away": {
        "teamId": 215,
        "team": "Moreirense",
        "shots": 5,
        "shotsOnGoal": 1,
        "possession": 49,
        "corners": 3,
        "yellowCards": 4,
        "redCards": null,
        "expectedGoals": 0.49
      },
      "statisticsChecked": true,
      "lineupsChecked": true,
      "injuriesChecked": true,
      "lineups": [
        {
          "teamId": 240,
          "team": "Arouca",
          "formation": "4-2-3-1",
          "coach": "Vasco Seabra",
          "starters": [
            "I. De Arruabarrena",
            "Tiago Esgaio",
            "J. Sanchez",
            "J. Fontan",
            "O. Lebedenko",
            "E. van Ee",
            "T. Fukui",
            "A. Trezza",
            "H. Lee",
            "N. Djouahra",
            "I. Barbero"
          ]
        },
        {
          "teamId": 215,
          "team": "Moreirense",
          "formation": "4-2-3-1",
          "coach": "Vasco Costa",
          "starters": [
            "A. Ferreira",
            "L. Santos",
            "G. Batista",
            "Maracas",
            "Kiko",
            "N. John",
            "Guilherme Liberato",
            "A. Vieira",
            "Rodri",
            "Landerson",
            "A. Duville-Parsemain"
          ]
        }
      ],
      "injuries": []
    },
    {
      "fixtureId": 1575460,
      "date": "2026-08-17",
      "league": "PRIMEIRA_LIGA",
      "homeTeamId": 242,
      "homeTeam": "Famalicao",
      "awayTeamId": 214,
      "awayTeam": "Maritimo",
      "home": {
        "teamId": 242,
        "team": "Famalicao",
        "shots": 14,
        "shotsOnGoal": 4,
        "possession": 67,
        "corners": 5,
        "yellowCards": 1,
        "redCards": null,
        "expectedGoals": 0.59
      },
      "away": {
        "teamId": 214,
        "team": "Maritimo",
        "shots": 9,
        "shotsOnGoal": 4,
        "possession": 33,
        "corners": 1,
        "yellowCards": 2,
        "redCards": null,
        "expectedGoals": 1.61
      },
      "statisticsChecked": true,
      "lineupsChecked": true,
      "injuriesChecked": true,
      "lineups": [
        {
          "teamId": 242,
          "team": "Famalicao",
          "formation": "4-2-3-1",
          "coach": "Carlos Carvalhal",
          "starters": [
            "L. Carevic",
            "R. Pinheiro",
            "L. Realpe",
            "F. van Breemen",
            "Pedro Bondo",
            "T. Van de Looi",
            "M. De Amorim",
            "Sorriso",
            "P. Moreira",
            "O. Aranda",
            "G. Koutsias"
          ]
        },
        {
          "teamId": 214,
          "team": "Maritimo",
          "formation": "4-3-3",
          "coach": "Mitchell van der Gaag",
          "starters": [
            "A. Pastor",
            "Igor Juliao",
            "R. Fernandes",
            "R. Correia",
            "P. Henrique",
            "V. Danilovic",
            "R. Andrade",
            "Raphael Guzzo",
            "S. Bouzaidi",
            "A. Butzke",
            "M. Tejon"
          ]
        }
      ],
      "injuries": []
    },
    {
      "fixtureId": 1558597,
      "date": "2026-08-17",
      "league": "BELGIAN_PRO_LEAGUE",
      "homeTeamId": 266,
      "homeTeam": "KV Mechelen",
      "awayTeamId": 733,
      "awayTeam": "Standard Liege",
      "home": {
        "teamId": 266,
        "team": "KV Mechelen",
        "shots": 19,
        "shotsOnGoal": 4,
        "possession": 53,
        "corners": 5,
        "yellowCards": 0,
        "redCards": null,
        "expectedGoals": 2.75
      },
      "away": {
        "teamId": 733,
        "team": "Standard Liege",
        "shots": 16,
        "shotsOnGoal": 7,
        "possession": 47,
        "corners": 2,
        "yellowCards": 3,
        "redCards": null,
        "expectedGoals": 1.64
      },
      "statisticsChecked": true,
      "lineupsChecked": true,
      "injuriesChecked": true,
      "lineups": [
        {
          "teamId": 266,
          "team": "KV Mechelen",
          "formation": "4-2-3-1",
          "coach": "Frederic Vanderbiest",
          "starters": [
            "N. Miras",
            "M. Decoene",
            "L. Marijnissen",
            "L. F. Hjelde",
            "J. Marsa",
            "D. Salifou",
            "F. Hammar",
            "T. Koudou",
            "D. Praet",
            "M. van Brederode",
            "M. Lohunanu-Mbasi"
          ]
        },
        {
          "teamId": 733,
          "team": "Standard Liege",
          "formation": "4-3-3",
          "coach": "Vincent Euvrard",
          "starters": [
            "M. Epolo",
            "M. Fossey",
            "I. Karamoko",
            "I. Hautekiet",
            "G. Mortensen",
            "C. Nielsen",
            "A. Trouillet",
            "R. Touzghar",
            "B. Nguene",
            "D. Eckert",
            "A. Abid"
          ]
        }
      ],
      "injuries": []
    },
    {
      "fixtureId": 1558598,
      "date": "2026-08-17",
      "league": "BELGIAN_PRO_LEAGUE",
      "homeTeamId": 259,
      "homeTeam": "Lommel United",
      "awayTeamId": 736,
      "awayTeam": "Charleroi",
      "home": {
        "teamId": 259,
        "team": "Lommel United",
        "shots": 8,
        "shotsOnGoal": 0,
        "possession": 44,
        "corners": 2,
        "yellowCards": 1,
        "redCards": null,
        "expectedGoals": 0.34
      },
      "away": {
        "teamId": 736,
        "team": "Charleroi",
        "shots": 23,
        "shotsOnGoal": 5,
        "possession": 56,
        "corners": 12,
        "yellowCards": 0,
        "redCards": null,
        "expectedGoals": 1.25
      },
      "statisticsChecked": true,
      "lineupsChecked": true,
      "injuriesChecked": true,
      "lineups": [
        {
          "teamId": 259,
          "team": "Lommel United",
          "formation": "4-2-3-1",
          "coach": "Lee Johnson",
          "starters": [
            "M. Pieklak",
            "J. van Duiven",
            "T. Eyoma",
            "D. Wouters",
            "H. Oware",
            "J. Pelupessy",
            "I. Dada-Mascoll",
            "S. Appuah",
            "L. Schoofs",
            "T. Reyners",
            "R. Seuntjens"
          ]
        },
        {
          "teamId": 736,
          "team": "Charleroi",
          "formation": "4-2-3-1",
          "coach": "Mario Kohnen",
          "starters": [
            "M. Delavallee",
            "K. Van Den Kerkhof",
            "A. Ousou",
            "M. Sow",
            "M. Nzita",
            "A. Boukamir",
            "Y. Khalifi",
            "P. Pflucke",
            "J. Romsaas",
            "A. Bernier",
            "A. Bojang"
          ]
        }
      ],
      "injuries": []
    },
    {
      "fixtureId": 1584368,
      "date": "2026-08-17",
      "league": "SUPER_LIG",
      "homeTeamId": 564,
      "homeTeam": "Başakşehir",
      "awayTeamId": 7411,
      "awayTeam": "Kocaelispor",
      "home": {
        "teamId": 564,
        "team": "Başakşehir",
        "shots": 17,
        "shotsOnGoal": 5,
        "possession": 51,
        "corners": 8,
        "yellowCards": 2,
        "redCards": null,
        "expectedGoals": 1.96
      },
      "away": {
        "teamId": 7411,
        "team": "Kocaelispor",
        "shots": 8,
        "shotsOnGoal": 4,
        "possession": 49,
        "corners": 2,
        "yellowCards": 2,
        "redCards": null,
        "expectedGoals": 0.43
      },
      "statisticsChecked": true,
      "lineupsChecked": true,
      "injuriesChecked": true,
      "lineups": [
        {
          "teamId": 564,
          "team": "Başakşehir",
          "formation": "4-2-3-1",
          "coach": "Nuri Sahin",
          "starters": [
            "M. Sengezer",
            "O. Sahiner",
            "E. Bayram",
            "J. Opoku",
            "C. Operi",
            "O. Kemen",
            "J. Kaluzinski",
            "A. Skov Olsen",
            "E. Shomurodov",
            "A. Fayzullaev",
            "B. Yildirim"
          ]
        },
        {
          "teamId": 7411,
          "team": "Kocaelispor",
          "formation": "4-3-3",
          "coach": "Selcuk Inan",
          "starters": [
            "S. Oztasdelen",
            "R. Rivas",
            "T. Zoukrou",
            "A. Dijksteel",
            "M. Haidara",
            "U. Yildiz",
            "Show",
            "B. Kutlu",
            "D. Agyei",
            "M. Baku",
            "T. Bingol"
          ]
        }
      ],
      "injuries": [
        {
          "fixtureId": 1584368,
          "teamId": 7411,
          "playerId": 47558,
          "player": "A. Jovanovic",
          "type": "Missing Fixture",
          "reason": "Knee Injury"
        },
        {
          "fixtureId": 1584368,
          "teamId": 7411,
          "playerId": 1331,
          "player": "B. Petkovic",
          "type": "Missing Fixture",
          "reason": "Hamstring Injury"
        }
      ]
    },
    {
      "fixtureId": 1584369,
      "date": "2026-08-17",
      "league": "SUPER_LIG",
      "homeTeamId": 549,
      "homeTeam": "Beşiktaş",
      "awayTeamId": 3588,
      "awayTeam": "Eyüpspor",
      "home": {
        "teamId": 549,
        "team": "Beşiktaş",
        "shots": 19,
        "shotsOnGoal": 5,
        "possession": 66,
        "corners": 8,
        "yellowCards": 2,
        "redCards": 0,
        "expectedGoals": 1.28
      },
      "away": {
        "teamId": 3588,
        "team": "Eyüpspor",
        "shots": 4,
        "shotsOnGoal": 1,
        "possession": 34,
        "corners": 2,
        "yellowCards": 3,
        "redCards": 1,
        "expectedGoals": 0.09
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
            "T. Bulut",
            "E. Agbadou",
            "T. Djalo",
            "R. Yilmaz",
            "S. Ozcan",
            "V. Cerny",
            "J. Olaitan",
            "O. Kokcu",
            "L. Trossard",
            "S. Kilicsoy"
          ]
        },
        {
          "teamId": 3588,
          "team": "Eyüpspor",
          "formation": "4-2-3-1",
          "coach": "Ozhan Pulat",
          "starters": [
            "H. Moldovan",
            "Lucas Calegari",
            "J. El Yamiq",
            "Z. Jules",
            "T. Ulvan",
            "A. Sabiri",
            "Massanga Matondo",
            "K. Michalak",
            "D. Costa",
            "L. Pintor",
            "A. Abdullahi"
          ]
        }
      ],
      "injuries": [
        {
          "fixtureId": 1584369,
          "teamId": 549,
          "playerId": 364816,
          "player": "E. Ricardo",
          "type": "Missing Fixture",
          "reason": "Off the roster"
        }
      ]
    },
    {
      "fixtureId": 1584367,
      "date": "2026-08-17",
      "league": "SUPER_LIG",
      "homeTeamId": 3579,
      "homeTeam": "Amed",
      "awayTeamId": 1009,
      "awayTeam": "Erzurumspor FK",
      "home": {
        "teamId": 3579,
        "team": "Amed",
        "shots": 13,
        "shotsOnGoal": 5,
        "possession": 47,
        "corners": 4,
        "yellowCards": 1,
        "redCards": null,
        "expectedGoals": 1.15
      },
      "away": {
        "teamId": 1009,
        "team": "Erzurumspor FK",
        "shots": 5,
        "shotsOnGoal": 1,
        "possession": 53,
        "corners": 4,
        "yellowCards": 0,
        "redCards": null,
        "expectedGoals": 0.32
      },
      "statisticsChecked": true,
      "lineupsChecked": true,
      "injuriesChecked": true,
      "lineups": [
        {
          "teamId": 3579,
          "team": "Amed",
          "formation": "3-4-2-1",
          "coach": "Besnik Hasi",
          "starters": [
            "A. Lafont",
            "M. Yesil",
            "D. Bates",
            "L. Dellova",
            "E. Krasniqi",
            "R. Raveloson",
            "C. Ustundag",
            "Y. Sor",
            "D. Saba",
            "G. Orban",
            "M. Diagne"
          ]
        },
        {
          "teamId": 1009,
          "team": "Erzurumspor FK",
          "formation": "4-1-4-1",
          "coach": "Serkan Ozbalta",
          "starters": [
            "M. Orbanic",
            "O. Ovacikli",
            "A. Gerxhaliu",
            "Y. Kirtay",
            "N. Mujakic",
            "B. Baiye",
            "Fernando Andrade",
            "M. Rodriguez",
            "S. Akgun",
            "M. Fettahoglu",
            "E. Tozlu"
          ]
        }
      ],
      "injuries": [
        {
          "fixtureId": 1584367,
          "teamId": 1009,
          "playerId": 668767,
          "player": "E. Yigit",
          "type": "Missing Fixture",
          "reason": "Suspended"
        }
      ]
    },
    {
      "fixtureId": 1563091,
      "date": "2026-08-16",
      "league": "CHAMPIONSHIP",
      "homeTeamId": 62,
      "homeTeam": "Sheffield Utd",
      "awayTeamId": 54,
      "awayTeam": "Birmingham",
      "home": {
        "teamId": 62,
        "team": "Sheffield Utd",
        "shots": 3,
        "shotsOnGoal": 1,
        "possession": 45,
        "corners": 2,
        "yellowCards": null,
        "redCards": null,
        "expectedGoals": 0.29
      },
      "away": {
        "teamId": 54,
        "team": "Birmingham",
        "shots": 10,
        "shotsOnGoal": 2,
        "possession": 55,
        "corners": 8,
        "yellowCards": null,
        "redCards": null,
        "expectedGoals": 0.77
      },
      "statisticsChecked": true,
      "lineupsChecked": true,
      "injuriesChecked": true,
      "lineups": [
        {
          "teamId": 62,
          "team": "Sheffield Utd",
          "formation": "4-2-2-2",
          "coach": "Chris Wilder",
          "starters": [
            "Michael Cooper",
            "Femi Seriki",
            "Japhet Tanganga",
            "Mark McGuinness",
            "Sam McCallum",
            "Joe Rothwell",
            "Sydie Peck",
            "Romelle Donovan",
            "Callum O'Hare",
            "Patrick Bamford",
            "Thomas Cannon"
          ]
        },
        {
          "teamId": 54,
          "team": "Birmingham",
          "formation": "4-2-3-1",
          "coach": "Chris Davies",
          "starters": [
            "James Beadle",
            "Bright Osayi-Samuel",
            "Phil Neumann",
            "Christoph Klarer",
            "Alex Cochrane",
            "Tomoki Iwata",
            "Jhon Solís",
            "Carlos Vicente",
            "Seung Ho Paik",
            "Jay Stansfield",
            "August Priske"
          ]
        }
      ],
      "injuries": [
        {
          "fixtureId": 1563091,
          "teamId": 62,
          "playerId": 19130,
          "player": "K. Phillips",
          "type": "Missing Fixture",
          "reason": "Muscle Injury"
        },
        {
          "fixtureId": 1563091,
          "teamId": 62,
          "playerId": 19131,
          "player": "J. Shackleton",
          "type": "Missing Fixture",
          "reason": "Foot Injury"
        },
        {
          "fixtureId": 1563091,
          "teamId": 54,
          "playerId": 19202,
          "player": "L. Buchanan",
          "type": "Missing Fixture",
          "reason": "Knee Injury"
        },
        {
          "fixtureId": 1563091,
          "teamId": 54,
          "playerId": 25464,
          "player": "M. Ducksch",
          "type": "Missing Fixture",
          "reason": "Inactive"
        },
        {
          "fixtureId": 1563091,
          "teamId": 54,
          "playerId": 231078,
          "player": "T. Gardner-Hickman",
          "type": "Missing Fixture",
          "reason": "Inactive"
        },
        {
          "fixtureId": 1563091,
          "teamId": 54,
          "playerId": 167656,
          "player": "M. Leonard",
          "type": "Missing Fixture",
          "reason": "Achilles Tendon Injury"
        }
      ]
    },
    {
      "fixtureId": 1563092,
      "date": "2026-08-16",
      "league": "CHAMPIONSHIP",
      "homeTeamId": 38,
      "homeTeam": "Watford",
      "awayTeamId": 41,
      "awayTeam": "Southampton",
      "home": {
        "teamId": 38,
        "team": "Watford",
        "shots": 16,
        "shotsOnGoal": 4,
        "possession": 34,
        "corners": 4,
        "yellowCards": 6,
        "redCards": null,
        "expectedGoals": 0.83
      },
      "away": {
        "teamId": 41,
        "team": "Southampton",
        "shots": 17,
        "shotsOnGoal": 3,
        "possession": 66,
        "corners": 8,
        "yellowCards": 3,
        "redCards": null,
        "expectedGoals": 1.65
      },
      "statisticsChecked": true,
      "lineupsChecked": true,
      "injuriesChecked": true,
      "lineups": [
        {
          "teamId": 38,
          "team": "Watford",
          "formation": "4-2-3-1",
          "coach": "Alessio Dionisi",
          "starters": [
            "Federico Ravaglia",
            "Omar Haktab Traore",
            "Matthew Pollock",
            "Kévin Keben Biakolo",
            "Marc Bola",
            "Edoardo Bove",
            "Hector Kyprianou",
            "Amin Nabizada",
            "Iker Bravo",
            "Othmane Maamma",
            "Mamadou Doumbia"
          ]
        },
        {
          "teamId": 41,
          "team": "Southampton",
          "formation": "4-2-3-1",
          "coach": "Tonda Eckert",
          "starters": [
            "Daniel Peretz",
            "James Bree",
            "Taylor Harwood-Bellis",
            "Jack Stephens",
            "Ryan Manning",
            "Cameron Bragg",
            "Flynn Downes",
            "Kuryu Matsuki",
            "Leo Scienza",
            "Lewis Dobbin",
            "Cyle Larin"
          ]
        }
      ],
      "injuries": [
        {
          "fixtureId": 1563092,
          "teamId": 38,
          "playerId": 351341,
          "player": "T. Akomeah",
          "type": "Missing Fixture",
          "reason": "Lacking Match Fitness"
        },
        {
          "fixtureId": 1563092,
          "teamId": 38,
          "playerId": 152699,
          "player": "K. Baah",
          "type": "Missing Fixture",
          "reason": "Knock"
        },
        {
          "fixtureId": 1563092,
          "teamId": 38,
          "playerId": 367473,
          "player": "J. Grieves",
          "type": "Missing Fixture",
          "reason": "Lacking Match Fitness"
        },
        {
          "fixtureId": 1563092,
          "teamId": 38,
          "playerId": 193296,
          "player": "J. Ngakia",
          "type": "Missing Fixture",
          "reason": "Thigh Injury"
        },
        {
          "fixtureId": 1563092,
          "teamId": 41,
          "playerId": 282060,
          "player": "C. Jander",
          "type": "Missing Fixture",
          "reason": "Lacking Match Fitness"
        }
      ]
    },
    {
      "fixtureId": 1570333,
      "date": "2026-08-16",
      "league": "LALIGA",
      "homeTeamId": 542,
      "homeTeam": "Alaves",
      "awayTeamId": 546,
      "awayTeam": "Getafe",
      "home": {
        "teamId": 542,
        "team": "Alaves",
        "shots": 18,
        "shotsOnGoal": 8,
        "possession": 52,
        "corners": 5,
        "yellowCards": 4,
        "redCards": 0,
        "expectedGoals": 1.93
      },
      "away": {
        "teamId": 546,
        "team": "Getafe",
        "shots": 6,
        "shotsOnGoal": 2,
        "possession": 48,
        "corners": 3,
        "yellowCards": 3,
        "redCards": 1,
        "expectedGoals": 0.24
      },
      "statisticsChecked": true,
      "lineupsChecked": true,
      "injuriesChecked": true,
      "lineups": [
        {
          "teamId": 542,
          "team": "Alaves",
          "formation": "3-5-2",
          "coach": "Quique Sanchez Flores",
          "starters": [
            "A. Sivera",
            "N. Tenaglia",
            "V. Koski",
            "Jonny Otto",
            "A. Perez",
            "P. Ibanez",
            "A. Blanco",
            "D. Suarez",
            "A. Rebbach",
            "T. Martinez",
            "A. Manas"
          ]
        },
        {
          "teamId": 546,
          "team": "Getafe",
          "formation": "3-5-2",
          "coach": "Jose Bordalas Jimenez",
          "starters": [
            "D. Soria",
            "Djene",
            "A. Abqar",
            "Z. Romero",
            "Kiko Femenia",
            "R. Terrats",
            "O. Mangala",
            "M. Martin",
            "Davinchi",
            "A. Garcia",
            "M. Satriano"
          ]
        }
      ],
      "injuries": [
        {
          "fixtureId": 1570333,
          "teamId": 542,
          "playerId": 6638,
          "player": "F. Garces",
          "type": "Missing Fixture",
          "reason": "Suspended"
        },
        {
          "fixtureId": 1570333,
          "teamId": 542,
          "playerId": 311740,
          "player": "T. Mendes",
          "type": "Missing Fixture",
          "reason": "Knee Injury"
        },
        {
          "fixtureId": 1570333,
          "teamId": 542,
          "playerId": 311071,
          "player": "N. Valentini",
          "type": "Missing Fixture",
          "reason": "Red Card"
        },
        {
          "fixtureId": 1570333,
          "teamId": 546,
          "playerId": 47320,
          "player": "Juanmi",
          "type": "Missing Fixture",
          "reason": "Injury"
        },
        {
          "fixtureId": 1570333,
          "teamId": 546,
          "playerId": 403554,
          "player": "C. Uche",
          "type": "Missing Fixture",
          "reason": "Knee Injury"
        }
      ]
    },
    {
      "fixtureId": 1570341,
      "date": "2026-08-16",
      "league": "LALIGA",
      "homeTeamId": 536,
      "homeTeam": "Sevilla",
      "awayTeamId": 728,
      "awayTeam": "Rayo Vallecano",
      "home": {
        "teamId": 536,
        "team": "Sevilla",
        "shots": 13,
        "shotsOnGoal": 4,
        "possession": 49,
        "corners": 1,
        "yellowCards": 4,
        "redCards": 1,
        "expectedGoals": 2.19
      },
      "away": {
        "teamId": 728,
        "team": "Rayo Vallecano",
        "shots": 6,
        "shotsOnGoal": 3,
        "possession": 51,
        "corners": 2,
        "yellowCards": 4,
        "redCards": 0,
        "expectedGoals": 1.89
      },
      "statisticsChecked": true,
      "lineupsChecked": true,
      "injuriesChecked": true,
      "lineups": [
        {
          "teamId": 536,
          "team": "Sevilla",
          "formation": "4-2-3-1",
          "coach": "Luis Garcia Plaza",
          "starters": [
            "O. Vlachodimos",
            "J. Iglesias",
            "A. Sangante",
            "K. Salas",
            "G. Suazo",
            "L. Agoume",
            "N. Guilen",
            "M. Sierra",
            "J. Guridi",
            "Oso",
            "I. Romero"
          ]
        },
        {
          "teamId": 728,
          "team": "Rayo Vallecano",
          "formation": "4-2-3-1",
          "coach": "Benat San Jose",
          "starters": [
            "A. Batalla",
            "A. Ratiu",
            "F. Lejeune",
            "P. Ciss",
            "I. Balliu",
            "U. Lopez",
            "O. Valentin",
            "J. de Frutos",
            "I. Palazon",
            "A. Garcia",
            "R. Nteka"
          ]
        }
      ],
      "injuries": [
        {
          "fixtureId": 1570341,
          "teamId": 536,
          "playerId": 119213,
          "player": "A. Gonzalez",
          "type": "Missing Fixture",
          "reason": "Muscle Injury"
        },
        {
          "fixtureId": 1570341,
          "teamId": 536,
          "playerId": 433,
          "player": "Marcao",
          "type": "Missing Fixture",
          "reason": "Foot Injury"
        },
        {
          "fixtureId": 1570341,
          "teamId": 728,
          "playerId": 30924,
          "player": "M. Kumbulla",
          "type": "Missing Fixture",
          "reason": "Muscle Injury"
        },
        {
          "fixtureId": 1570341,
          "teamId": 728,
          "playerId": 1847,
          "player": "Luiz Felipe",
          "type": "Missing Fixture",
          "reason": "Hamstring Injury"
        },
        {
          "fixtureId": 1570341,
          "teamId": 728,
          "playerId": 333378,
          "player": "D. Mendez",
          "type": "Missing Fixture",
          "reason": "Knee Injury"
        }
      ]
    },
    {
      "fixtureId": 1552128,
      "date": "2026-08-16",
      "league": "EREDIVISIE",
      "homeTeamId": 207,
      "homeTeam": "Utrecht",
      "awayTeamId": 201,
      "awayTeam": "AZ Alkmaar",
      "home": {
        "teamId": 207,
        "team": "Utrecht",
        "shots": 8,
        "shotsOnGoal": 2,
        "possession": 48,
        "corners": 3,
        "yellowCards": 4,
        "redCards": null,
        "expectedGoals": 0.91
      },
      "away": {
        "teamId": 201,
        "team": "AZ Alkmaar",
        "shots": 24,
        "shotsOnGoal": 9,
        "possession": 52,
        "corners": 9,
        "yellowCards": 2,
        "redCards": null,
        "expectedGoals": 2.1
      },
      "statisticsChecked": true,
      "lineupsChecked": true,
      "injuriesChecked": true,
      "lineups": [
        {
          "teamId": 207,
          "team": "Utrecht",
          "formation": "4-2-3-1",
          "coach": "Anthony Correia",
          "starters": [
            "V. Barkas",
            "N. Vesterlund",
            "S. Horemans",
            "M. Eerdhuijzen",
            "A. Zagre",
            "F. Pohl",
            "G. Offerhaus",
            "A. Alarcon",
            "D. de Wit",
            "Y. Cathline",
            "A. Stepanov"
          ]
        },
        {
          "teamId": 201,
          "team": "AZ Alkmaar",
          "formation": "4-2-3-1",
          "coach": "Leeroy Echteld",
          "starters": [
            "J. De Busser",
            "E. Dijkstra",
            "W. Goes",
            "L. Schouten",
            "M. Chavez Garcia",
            "D. Kwakman",
            "P. Koopmeiners",
            "Weslley Patati",
            "K. Smit",
            "R. Daal",
            "M. Meerdink"
          ]
        }
      ],
      "injuries": [
        {
          "fixtureId": 1552128,
          "teamId": 207,
          "playerId": 336678,
          "player": "O. Agougil",
          "type": "Missing Fixture",
          "reason": "Injury"
        },
        {
          "fixtureId": 1552128,
          "teamId": 207,
          "playerId": 321746,
          "player": "A. Engwanda",
          "type": "Missing Fixture",
          "reason": "Hamstring Injury"
        },
        {
          "fixtureId": 1552128,
          "teamId": 207,
          "playerId": 38752,
          "player": "V. Jensen",
          "type": "Missing Fixture",
          "reason": "Knee Injury"
        },
        {
          "fixtureId": 1552128,
          "teamId": 207,
          "playerId": 364809,
          "player": "M. Jonathans",
          "type": "Missing Fixture",
          "reason": "Knee Injury"
        },
        {
          "fixtureId": 1552128,
          "teamId": 207,
          "playerId": 280317,
          "player": "N. Ohio",
          "type": "Missing Fixture",
          "reason": "Knee Injury"
        },
        {
          "fixtureId": 1552128,
          "teamId": 201,
          "playerId": 37154,
          "player": "J. Clasie",
          "type": "Missing Fixture",
          "reason": "Injury"
        },
        {
          "fixtureId": 1552128,
          "teamId": 201,
          "playerId": 36985,
          "player": "J. Hornkamp",
          "type": "Missing Fixture",
          "reason": "Ankle Injury"
        },
        {
          "fixtureId": 1552128,
          "teamId": 201,
          "playerId": 179839,
          "player": "D. Kasius",
          "type": "Missing Fixture",
          "reason": "Groin Injury"
        },
        {
          "fixtureId": 1552128,
          "teamId": 201,
          "playerId": 462228,
          "player": "A. Natali",
          "type": "Missing Fixture",
          "reason": "Inactive"
        },
        {
          "fixtureId": 1552128,
          "teamId": 201,
          "playerId": 149551,
          "player": "T. Parrott",
          "type": "Missing Fixture",
          "reason": "Inactive"
        }
      ]
    },
    {
      "fixtureId": 1552129,
      "date": "2026-08-16",
      "league": "EREDIVISIE",
      "homeTeamId": 196,
      "homeTeam": "Excelsior",
      "awayTeamId": 197,
      "awayTeam": "PSV Eindhoven",
      "home": {
        "teamId": 196,
        "team": "Excelsior",
        "shots": 5,
        "shotsOnGoal": 2,
        "possession": 41,
        "corners": 1,
        "yellowCards": 1,
        "redCards": null,
        "expectedGoals": 0.51
      },
      "away": {
        "teamId": 197,
        "team": "PSV Eindhoven",
        "shots": 20,
        "shotsOnGoal": 8,
        "possession": 59,
        "corners": 7,
        "yellowCards": 0,
        "redCards": null,
        "expectedGoals": 2.24
      },
      "statisticsChecked": true,
      "lineupsChecked": true,
      "injuriesChecked": true,
      "lineups": [
        {
          "teamId": 196,
          "team": "Excelsior",
          "formation": "4-3-3",
          "coach": "Ruben den Uil",
          "starters": [
            "S. van Gassel",
            "R. Meissen",
            "C. Widell",
            "J. Plug",
            "S. Janssen",
            "I. Yegoian",
            "L. Hartjes",
            "D. van Vianen",
            "A. Sliti",
            "D. Garden",
            "I. Silva Timas"
          ]
        },
        {
          "teamId": 197,
          "team": "PSV Eindhoven",
          "formation": "4-3-3",
          "coach": "Peter Bosz",
          "starters": [
            "M. Kovar",
            "S. Dest",
            "R. Flamingo",
            "A. Obispo",
            "Mauro Junior",
            "G. Til",
            "J. Veerman",
            "P. Wanner",
            "I. Perisic",
            "R. Pepi",
            "R. van Bommel"
          ]
        }
      ],
      "injuries": [
        {
          "fixtureId": 1552129,
          "teamId": 196,
          "playerId": 427056,
          "player": "K. Bos",
          "type": "Missing Fixture",
          "reason": "Shoulder Injury"
        },
        {
          "fixtureId": 1552129,
          "teamId": 197,
          "playerId": 37890,
          "player": "J. Schouten",
          "type": "Missing Fixture",
          "reason": "Knee Injury"
        }
      ]
    },
    {
      "fixtureId": 1552130,
      "date": "2026-08-16",
      "league": "EREDIVISIE",
      "homeTeamId": 205,
      "homeTeam": "Fortuna Sittard",
      "awayTeamId": 420,
      "awayTeam": "Cambuur",
      "home": {
        "teamId": 205,
        "team": "Fortuna Sittard",
        "shots": 17,
        "shotsOnGoal": 7,
        "possession": 36,
        "corners": 6,
        "yellowCards": 0,
        "redCards": null,
        "expectedGoals": 1.91
      },
      "away": {
        "teamId": 420,
        "team": "Cambuur",
        "shots": 19,
        "shotsOnGoal": 7,
        "possession": 64,
        "corners": 7,
        "yellowCards": 2,
        "redCards": null,
        "expectedGoals": 2.51
      },
      "statisticsChecked": true,
      "lineupsChecked": true,
      "injuriesChecked": true,
      "lineups": [
        {
          "teamId": 205,
          "team": "Fortuna Sittard",
          "formation": "3-4-2-1",
          "coach": "Danny Buijs",
          "starters": [
            "M. Branderhorst",
            "I. Pinto",
            "S. van Ottele",
            "J. Hubner",
            "S. Wylin",
            "P. Brittijn",
            "Y. Oukili",
            "J. Dahlhaus",
            "M. Ihattaren",
            "O. Romeny",
            "L. Zeefuik"
          ]
        },
        {
          "teamId": 420,
          "team": "Cambuur",
          "formation": "4-3-3",
          "coach": "Johan Plat",
          "starters": [
            "T. Jansen",
            "M. Costarelli",
            "I. Baouf",
            "J. Amofa",
            "L. Jetten",
            "R. El Arguioui",
            "S. Vink",
            "N. Souren",
            "I. Henstra",
            "S. Bouhoudane",
            "I. Hamache"
          ]
        }
      ],
      "injuries": [
        {
          "fixtureId": 1552130,
          "teamId": 205,
          "playerId": 40201,
          "player": "I. Marquez",
          "type": "Missing Fixture",
          "reason": "Injury"
        },
        {
          "fixtureId": 1552130,
          "teamId": 205,
          "playerId": 357051,
          "player": "S. Simons",
          "type": "Missing Fixture",
          "reason": "Hamstring Injury"
        },
        {
          "fixtureId": 1552130,
          "teamId": 420,
          "playerId": 516834,
          "player": "D. Visser",
          "type": "Missing Fixture",
          "reason": "Knee Injury"
        }
      ]
    },
    {
      "fixtureId": 1552131,
      "date": "2026-08-16",
      "league": "EREDIVISIE",
      "homeTeamId": 198,
      "homeTeam": "ADO Den Haag",
      "awayTeamId": 202,
      "awayTeam": "Groningen",
      "home": {
        "teamId": 198,
        "team": "ADO Den Haag",
        "shots": 10,
        "shotsOnGoal": 4,
        "possession": 55,
        "corners": 5,
        "yellowCards": 0,
        "redCards": null,
        "expectedGoals": 1.01
      },
      "away": {
        "teamId": 202,
        "team": "Groningen",
        "shots": 17,
        "shotsOnGoal": 14,
        "possession": 45,
        "corners": 2,
        "yellowCards": 1,
        "redCards": null,
        "expectedGoals": 3.2
      },
      "statisticsChecked": true,
      "lineupsChecked": true,
      "injuriesChecked": true,
      "lineups": [
        {
          "teamId": 198,
          "team": "ADO Den Haag",
          "formation": "4-4-2",
          "coach": "Robin Peter",
          "starters": [
            "K. Nikiema",
            "M. Hokke",
            "P. Mulder",
            "M. Waem",
            "S. Sylla",
            "D. van Mieghem",
            "J. Zamburek",
            "J. Kilo",
            "I. de Ruijter",
            "J. Bal",
            "Y. Eduardo"
          ]
        },
        {
          "teamId": 202,
          "team": "Groningen",
          "formation": "4-2-3-1",
          "coach": "Dick Lukkien",
          "starters": [
            "E. Vaessen",
            "J. Schreuders",
            "T. Blokzijl",
            "E. van der Laan",
            "W. Prins",
            "T. de Jonge",
            "T. Land",
            "D. van der Werff",
            "T. van Bergen",
            "P. Clement",
            "B. Willumsson"
          ]
        }
      ],
      "injuries": [
        {
          "fixtureId": 1552131,
          "teamId": 198,
          "playerId": 28378,
          "player": "D. Barany",
          "type": "Missing Fixture",
          "reason": "Knee Injury"
        },
        {
          "fixtureId": 1552131,
          "teamId": 198,
          "playerId": 202745,
          "player": "J. Hawkins",
          "type": "Missing Fixture",
          "reason": "Hamstring Injury"
        },
        {
          "fixtureId": 1552131,
          "teamId": 198,
          "playerId": 216809,
          "player": "C. Peupion",
          "type": "Missing Fixture",
          "reason": "Knee Injury"
        },
        {
          "fixtureId": 1552131,
          "teamId": 202,
          "playerId": 414188,
          "player": "M. Jeng",
          "type": "Missing Fixture",
          "reason": "Leg Injury"
        },
        {
          "fixtureId": 1552131,
          "teamId": 202,
          "playerId": 446871,
          "player": "T. Mercera",
          "type": "Missing Fixture",
          "reason": "Injury"
        },
        {
          "fixtureId": 1552131,
          "teamId": 202,
          "playerId": 631615,
          "player": "R. Metu",
          "type": "Missing Fixture",
          "reason": "Injury"
        },
        {
          "fixtureId": 1552131,
          "teamId": 202,
          "playerId": 90957,
          "player": "M. Rente",
          "type": "Missing Fixture",
          "reason": "Injury"
        },
        {
          "fixtureId": 1552131,
          "teamId": 202,
          "playerId": 291505,
          "player": "S. Resink",
          "type": "Missing Fixture",
          "reason": "Knee Injury"
        },
        {
          "fixtureId": 1552131,
          "teamId": 202,
          "playerId": 40298,
          "player": "O. Zawada",
          "type": "Missing Fixture",
          "reason": "Knock"
        }
      ]
    },
    {
      "fixtureId": 1552132,
      "date": "2026-08-16",
      "league": "EREDIVISIE",
      "homeTeamId": 209,
      "homeTeam": "Feyenoord",
      "awayTeamId": 410,
      "awayTeam": "GO Ahead Eagles",
      "home": {
        "teamId": 209,
        "team": "Feyenoord",
        "shots": 28,
        "shotsOnGoal": 6,
        "possession": 53,
        "corners": 6,
        "yellowCards": null,
        "redCards": null,
        "expectedGoals": 2.85
      },
      "away": {
        "teamId": 410,
        "team": "GO Ahead Eagles",
        "shots": 14,
        "shotsOnGoal": 6,
        "possession": 47,
        "corners": 6,
        "yellowCards": null,
        "redCards": null,
        "expectedGoals": 1.51
      },
      "statisticsChecked": true,
      "lineupsChecked": true,
      "injuriesChecked": true,
      "lineups": [
        {
          "teamId": 209,
          "team": "Feyenoord",
          "formation": "4-3-3",
          "coach": "Giovanni van Bronckhorst",
          "starters": [
            "T. Ernst",
            "G. Read",
            "T. Watanabe",
            "J. St. Juste",
            "M. Marmol",
            "G. Zechiel",
            "C. Vanhoutte",
            "L. Valente",
            "A. Hadj Moussa",
            "A. Ueda",
            "G. Diarra"
          ]
        },
        {
          "teamId": 410,
          "team": "GO Ahead Eagles",
          "formation": "4-2-3-1",
          "coach": "Joseph Oosting",
          "starters": [
            "K. Haug",
            "A. Sampsted",
            "G. van Zwam",
            "J. Kramer",
            "D. James",
            "E. Linthorst",
            "Y. Salah Rahmouni",
            "S. Tengstedt",
            "V. Edvardsen",
            "M. Suray",
            "E. Flataker"
          ]
        }
      ],
      "injuries": [
        {
          "fixtureId": 1552132,
          "teamId": 209,
          "playerId": 328141,
          "player": "T. Beelen",
          "type": "Missing Fixture",
          "reason": "Broken Leg"
        },
        {
          "fixtureId": 1552132,
          "teamId": 209,
          "playerId": 337587,
          "player": "J. Bos",
          "type": "Missing Fixture",
          "reason": "Knee Injury"
        },
        {
          "fixtureId": 1552132,
          "teamId": 209,
          "playerId": 40911,
          "player": "J. Moder",
          "type": "Missing Fixture",
          "reason": "Knee Injury"
        },
        {
          "fixtureId": 1552132,
          "teamId": 209,
          "playerId": 37147,
          "player": "B. Nieuwkoop",
          "type": "Missing Fixture",
          "reason": "Injury"
        },
        {
          "fixtureId": 1552132,
          "teamId": 209,
          "playerId": 37742,
          "player": "G. Smal",
          "type": "Missing Fixture",
          "reason": "Ankle Injury"
        },
        {
          "fixtureId": 1552132,
          "teamId": 410,
          "playerId": 25260,
          "player": "G. Nauber",
          "type": "Missing Fixture",
          "reason": "Broken Leg"
        },
        {
          "fixtureId": 1552132,
          "teamId": 410,
          "playerId": 378962,
          "player": "P. Saathof",
          "type": "Missing Fixture",
          "reason": "Knee Injury"
        },
        {
          "fixtureId": 1552132,
          "teamId": 410,
          "playerId": 378963,
          "player": "R. Weijenberg",
          "type": "Missing Fixture",
          "reason": "Knee Injury"
        }
      ]
    },
    {
      "fixtureId": 1552133,
      "date": "2026-08-16",
      "league": "EREDIVISIE",
      "homeTeamId": 415,
      "homeTeam": "Twente",
      "awayTeamId": 193,
      "awayTeam": "PEC Zwolle",
      "home": {
        "teamId": 415,
        "team": "Twente",
        "shots": 27,
        "shotsOnGoal": 10,
        "possession": 69,
        "corners": 6,
        "yellowCards": null,
        "redCards": null,
        "expectedGoals": 2.11
      },
      "away": {
        "teamId": 193,
        "team": "PEC Zwolle",
        "shots": 8,
        "shotsOnGoal": 3,
        "possession": 31,
        "corners": 3,
        "yellowCards": null,
        "redCards": null,
        "expectedGoals": 0.68
      },
      "statisticsChecked": true,
      "lineupsChecked": true,
      "injuriesChecked": true,
      "lineups": [
        {
          "teamId": 415,
          "team": "Twente",
          "formation": "4-2-3-1",
          "coach": "John van den Brom",
          "starters": [
            "L. Unnerstall",
            "B. van Rooij",
            "R. Propper",
            "R. Nijstad",
            "A. Adelgaard",
            "R. Zerrouki",
            "D. Weidmann",
            "M. Pjaca",
            "D. Rots",
            "S. Orjasaeter",
            "W. Weghorst"
          ]
        },
        {
          "teamId": 193,
          "team": "PEC Zwolle",
          "formation": "4-2-3-1",
          "coach": "Henry Van Der Vegt",
          "starters": [
            "J. Schendelaar",
            "O. Aertssen",
            "S. Graves",
            "N. Viergever",
            "D. van der Haar",
            "R. Thomas",
            "T. Sommer",
            "D. Mbayo",
            "T. Oosting",
            "E. Sorensen",
            "K. Kostons"
          ]
        }
      ],
      "injuries": [
        {
          "fixtureId": 1552133,
          "teamId": 415,
          "playerId": 272723,
          "player": "M. Hilgers",
          "type": "Missing Fixture",
          "reason": "Knee Injury"
        },
        {
          "fixtureId": 1552133,
          "teamId": 415,
          "playerId": 292553,
          "player": "S. Lemkin",
          "type": "Missing Fixture",
          "reason": "Injury"
        },
        {
          "fixtureId": 1552133,
          "teamId": 193,
          "playerId": 36970,
          "player": "S. Floranus",
          "type": "Missing Fixture",
          "reason": "Red Card"
        },
        {
          "fixtureId": 1552133,
          "teamId": 193,
          "playerId": 36932,
          "player": "Y. Namli",
          "type": "Missing Fixture",
          "reason": "Knee Injury"
        }
      ]
    },
    {
      "fixtureId": 1552134,
      "date": "2026-08-16",
      "league": "EREDIVISIE",
      "homeTeamId": 194,
      "homeTeam": "Ajax",
      "awayTeamId": 210,
      "awayTeam": "Heerenveen",
      "home": {
        "teamId": 194,
        "team": "Ajax",
        "shots": 23,
        "shotsOnGoal": 4,
        "possession": 54,
        "corners": 7,
        "yellowCards": 3,
        "redCards": null,
        "expectedGoals": 2
      },
      "away": {
        "teamId": 210,
        "team": "Heerenveen",
        "shots": 14,
        "shotsOnGoal": 8,
        "possession": 46,
        "corners": 2,
        "yellowCards": 1,
        "redCards": null,
        "expectedGoals": 1.36
      },
      "statisticsChecked": true,
      "lineupsChecked": true,
      "injuriesChecked": true,
      "lineups": [
        {
          "teamId": 194,
          "team": "Ajax",
          "formation": "4-2-3-1",
          "coach": "Michel",
          "starters": [
            "M. ter Stegen",
            "L. Rosa",
            "A. Bouwman",
            "Y. Baas",
            "Caio Henrique",
            "D. Klaassen",
            "Y. Regeer",
            "S. Berghuis",
            "O. Gloukh",
            "A. Ouazane",
            "K. Dolberg"
          ]
        },
        {
          "teamId": 210,
          "team": "Heerenveen",
          "formation": "4-2-3-1",
          "coach": "Robin Veldman",
          "starters": [
            "B. Klaverboer",
            "O. Braude",
            "S. Kersten",
            "M. Willemsen",
            "V. Zagaritis",
            "M. Linday",
            "D. Proper",
            "J. Trenskow",
            "R. Meerveld",
            "L. Oyen",
            "D. Vente"
          ]
        }
      ],
      "injuries": [
        {
          "fixtureId": 1552134,
          "teamId": 194,
          "playerId": 531,
          "player": "D. Blind",
          "type": "Missing Fixture",
          "reason": "Injury"
        },
        {
          "fixtureId": 1552134,
          "teamId": 194,
          "playerId": 396202,
          "player": "R. Bounida",
          "type": "Missing Fixture",
          "reason": "Injury"
        },
        {
          "fixtureId": 1552134,
          "teamId": 194,
          "playerId": 278159,
          "player": "A. Kaplan",
          "type": "Missing Fixture",
          "reason": "Knee Injury"
        },
        {
          "fixtureId": 1552134,
          "teamId": 194,
          "playerId": 14701,
          "player": "J. Sutalo",
          "type": "Missing Fixture",
          "reason": "Injury"
        },
        {
          "fixtureId": 1552134,
          "teamId": 194,
          "playerId": 202087,
          "player": "A. van Axel Dongen",
          "type": "Missing Fixture",
          "reason": "Thigh Injury"
        },
        {
          "fixtureId": 1552134,
          "teamId": 210,
          "playerId": 431651,
          "player": "M. Egbring",
          "type": "Missing Fixture",
          "reason": "Injury"
        }
      ]
    },
    {
      "fixtureId": 1575455,
      "date": "2026-08-16",
      "league": "PRIMEIRA_LIGA",
      "homeTeamId": 238,
      "homeTeam": "Academico Viseu",
      "awayTeamId": 227,
      "awayTeam": "Santa Clara",
      "home": {
        "teamId": 238,
        "team": "Academico Viseu",
        "shots": 10,
        "shotsOnGoal": 1,
        "possession": 60,
        "corners": 4,
        "yellowCards": 1,
        "redCards": null,
        "expectedGoals": 0.69
      },
      "away": {
        "teamId": 227,
        "team": "Santa Clara",
        "shots": 8,
        "shotsOnGoal": 2,
        "possession": 40,
        "corners": 2,
        "yellowCards": 3,
        "redCards": null,
        "expectedGoals": 1.26
      },
      "statisticsChecked": true,
      "lineupsChecked": true,
      "injuriesChecked": true,
      "lineups": [
        {
          "teamId": 238,
          "team": "Academico Viseu",
          "formation": "4-2-3-1",
          "coach": "Bruno Pinheiro",
          "starters": [
            "Ewerton",
            "Robinho",
            "A. Correia",
            "R. Pereira",
            "I. Milioransa",
            "A. Mestanza",
            "S. Messeguem",
            "Joao Guilherme",
            "C. Kahraman",
            "A. Zamora",
            "Andre Clovis"
          ]
        },
        {
          "teamId": 227,
          "team": "Santa Clara",
          "formation": "4-2-3-1",
          "coach": "Petit",
          "starters": [
            "Lucas Franca",
            "Diogo Calila",
            "P. Pacheco",
            "E. Fernandes",
            "Guilherme Romao",
            "P. Ferreira",
            "Daniel Borges",
            "Sorriso",
            "J. Tavares",
            "Vinicius Lopes",
            "G. Paciencia"
          ]
        }
      ],
      "injuries": []
    },
    {
      "fixtureId": 1575462,
      "date": "2026-08-16",
      "league": "PRIMEIRA_LIGA",
      "homeTeamId": 226,
      "homeTeam": "Rio Ave",
      "awayTeamId": 212,
      "awayTeam": "FC Porto",
      "home": {
        "teamId": 226,
        "team": "Rio Ave",
        "shots": 13,
        "shotsOnGoal": 1,
        "possession": 48,
        "corners": 6,
        "yellowCards": null,
        "redCards": null,
        "expectedGoals": 0.58
      },
      "away": {
        "teamId": 212,
        "team": "FC Porto",
        "shots": 14,
        "shotsOnGoal": 6,
        "possession": 52,
        "corners": 6,
        "yellowCards": null,
        "redCards": null,
        "expectedGoals": 1.97
      },
      "statisticsChecked": true,
      "lineupsChecked": true,
      "injuriesChecked": true,
      "lineups": [
        {
          "teamId": 226,
          "team": "Rio Ave",
          "formation": "4-3-3",
          "coach": "Sotiris Sylaidopoulos",
          "starters": [
            "E. van der Gouw",
            "G. Liavas",
            "F. Petrasso",
            "Gustavo Mancha",
            "N. Abbey",
            "R. Galcik",
            "D. Nascimento",
            "T. Nikitscher",
            "J. Blesa",
            "T. Monteiro",
            "Diogo Bezerra"
          ]
        },
        {
          "teamId": 212,
          "team": "FC Porto",
          "formation": "4-3-3",
          "coach": "Francesco Farioli",
          "starters": [
            "D. Costa",
            "N. Perez",
            "J. Bednarek",
            "J. Kiwior",
            "Zaidu",
            "V. Froholdt",
            "P. Rosario",
            "G. Veiga",
            "William Gomes",
            "D. Gul",
            "Pepê"
          ]
        }
      ],
      "injuries": []
    },
    {
      "fixtureId": 1575461,
      "date": "2026-08-16",
      "league": "PRIMEIRA_LIGA",
      "homeTeamId": 225,
      "homeTeam": "Nacional",
      "awayTeamId": 230,
      "awayTeam": "Estoril",
      "home": {
        "teamId": 225,
        "team": "Nacional",
        "shots": 20,
        "shotsOnGoal": 3,
        "possession": 59,
        "corners": 7,
        "yellowCards": 2,
        "redCards": 0,
        "expectedGoals": 2.08
      },
      "away": {
        "teamId": 230,
        "team": "Estoril",
        "shots": 9,
        "shotsOnGoal": 5,
        "possession": 41,
        "corners": 4,
        "yellowCards": 4,
        "redCards": 1,
        "expectedGoals": 0.82
      },
      "statisticsChecked": true,
      "lineupsChecked": true,
      "injuriesChecked": true,
      "lineups": [
        {
          "teamId": 225,
          "team": "Nacional",
          "formation": "3-4-2-1",
          "coach": "Giao Joao",
          "starters": [
            "R. Marin",
            "Leo Santos",
            "Matheus Dias",
            "Ze Vitor",
            "Wesley Gasolina",
            "Liziero",
            "F. Soares",
            "M. Jensen",
            "M. Baeza",
            "Daniel Junior",
            "Pablo Ruan"
          ]
        },
        {
          "teamId": 230,
          "team": "Estoril",
          "formation": "4-2-3-1",
          "coach": "Vasco Matos",
          "starters": [
            "J. Robles",
            "R. Sanchez",
            "Ferro",
            "I. Sierra",
            "F. Medrano",
            "Xeka",
            "A. Tsoungui",
            "R. Guitane",
            "J. Carvalho",
            "A. Lacximicant",
            "Y. Begraoui"
          ]
        }
      ],
      "injuries": []
    },
    {
      "fixtureId": 1558592,
      "date": "2026-08-16",
      "league": "BELGIAN_PRO_LEAGUE",
      "homeTeamId": 734,
      "homeTeam": "Kortrijk",
      "awayTeamId": 740,
      "awayTeam": "Antwerp",
      "home": {
        "teamId": 734,
        "team": "Kortrijk",
        "shots": 15,
        "shotsOnGoal": 2,
        "possession": 49,
        "corners": 3,
        "yellowCards": 1,
        "redCards": null,
        "expectedGoals": 0.77
      },
      "away": {
        "teamId": 740,
        "team": "Antwerp",
        "shots": 16,
        "shotsOnGoal": 7,
        "possession": 51,
        "corners": 10,
        "yellowCards": 0,
        "redCards": null,
        "expectedGoals": 1.19
      },
      "statisticsChecked": true,
      "lineupsChecked": true,
      "injuriesChecked": true,
      "lineups": [
        {
          "teamId": 734,
          "team": "Kortrijk",
          "formation": "3-4-2-1",
          "coach": "Michiel Jonckheere",
          "starters": [
            "M. Ilic",
            "R. Kohon",
            "G. Ruyssen",
            "J. Ndjeungoue",
            "S. Campbell",
            "B. Dejaegere",
            "B. Lambert",
            "M. Anderson",
            "T. Ambrose",
            "K. Masui",
            "G. Koyalipou"
          ]
        },
        {
          "teamId": 740,
          "team": "Antwerp",
          "formation": "4-2-3-1",
          "coach": "Marvin Compper",
          "starters": [
            "T. Nozawa",
            "T. Somers",
            "Y. Tsunashima",
            "R. Van Helden",
            "E. Tuypens",
            "J. Ahoka",
            "X. Dierckx",
            "M. Fofana",
            "A. Valencia",
            "I. Salah",
            "M. Frey"
          ]
        }
      ],
      "injuries": []
    },
    {
      "fixtureId": 1558594,
      "date": "2026-08-16",
      "league": "BELGIAN_PRO_LEAGUE",
      "homeTeamId": 260,
      "homeTeam": "OH Leuven",
      "awayTeamId": 569,
      "awayTeam": "Club Brugge KV",
      "home": {
        "teamId": 260,
        "team": "OH Leuven",
        "shots": 16,
        "shotsOnGoal": 1,
        "possession": 39,
        "corners": 4,
        "yellowCards": null,
        "redCards": null,
        "expectedGoals": 0.72
      },
      "away": {
        "teamId": 569,
        "team": "Club Brugge KV",
        "shots": 28,
        "shotsOnGoal": 9,
        "possession": 61,
        "corners": 16,
        "yellowCards": null,
        "redCards": null,
        "expectedGoals": 2.92
      },
      "statisticsChecked": true,
      "lineupsChecked": true,
      "injuriesChecked": true,
      "lineups": [
        {
          "teamId": 260,
          "team": "OH Leuven",
          "formation": "3-4-3",
          "coach": "Timmy Simons",
          "starters": [
            "D. van den Heuvel",
            "E. Pletinckx",
            "N. Dussenne",
            "R. Nyakossi",
            "O. Gil",
            "W. George",
            "S. Schrijvers",
            "H. Teklab",
            "K. Vaesen",
            "C. Ikwuemesi",
            "W. Balikwisha"
          ]
        },
        {
          "teamId": 569,
          "team": "Club Brugge KV",
          "formation": "4-2-3-1",
          "coach": "Ivan Leko",
          "starters": [
            "Y. Sommer",
            "K. Sabbe",
            "Lee Han-Beom",
            "B. Mechele",
            "J. Seys",
            "F. Potts",
            "H. Vanaken",
            "C. Forbs",
            "H. Vetlesen",
            "M. Diakhon",
            "N. Tresoldi"
          ]
        }
      ],
      "injuries": []
    },
    {
      "fixtureId": 1558593,
      "date": "2026-08-16",
      "league": "BELGIAN_PRO_LEAGUE",
      "homeTeamId": 742,
      "homeTeam": "Genk",
      "awayTeamId": 261,
      "awayTeam": "KVC Westerlo",
      "home": {
        "teamId": 742,
        "team": "Genk",
        "shots": null,
        "shotsOnGoal": null,
        "possession": null,
        "corners": null,
        "yellowCards": null,
        "redCards": null,
        "expectedGoals": null
      },
      "away": {
        "teamId": 261,
        "team": "KVC Westerlo",
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
          "teamId": 742,
          "team": "Genk",
          "formation": "",
          "coach": "Jess Thorup",
          "starters": [
            "L. Brughmans",
            "Z. El Ouahdi",
            "M. Smets",
            "J. Kongolo",
            "J. Kayembe",
            "I. Bangoura",
            "B. Heynen",
            "J. Ito",
            "J. Erenbjerg",
            "A. Yokoyama",
            "R. Durosinmi"
          ]
        },
        {
          "teamId": 261,
          "team": "KVC Westerlo",
          "formation": "",
          "coach": "Issame Charai",
          "starters": [
            "A. Jungdal",
            "L. Mbamba-Muanda",
            "S. Kimura",
            "R. Munz",
            "D. Ourega",
            "C. Congreve",
            "C. Sandra",
            "I. Fofana",
            "S. Saito",
            "N. Bassette",
            "I. Sakamoto"
          ]
        }
      ],
      "injuries": []
    },
    {
      "fixtureId": 1558595,
      "date": "2026-08-16",
      "league": "BELGIAN_PRO_LEAGUE",
      "homeTeamId": 738,
      "homeTeam": "SK Beveren",
      "awayTeamId": 554,
      "awayTeam": "Anderlecht",
      "home": {
        "teamId": 738,
        "team": "SK Beveren",
        "shots": 10,
        "shotsOnGoal": 3,
        "possession": 40,
        "corners": 1,
        "yellowCards": 0,
        "redCards": null,
        "expectedGoals": 0.64
      },
      "away": {
        "teamId": 554,
        "team": "Anderlecht",
        "shots": 14,
        "shotsOnGoal": 6,
        "possession": 60,
        "corners": 12,
        "yellowCards": 1,
        "redCards": null,
        "expectedGoals": 1.11
      },
      "statisticsChecked": true,
      "lineupsChecked": true,
      "injuriesChecked": true,
      "lineups": [
        {
          "teamId": 738,
          "team": "SK Beveren",
          "formation": "4-2-3-1",
          "coach": "Tim Bakens",
          "starters": [
            "J. Schenk",
            "L. Jans",
            "Y. Gomis",
            "B. Godeau",
            "C. Janssens",
            "S. Dewaele",
            "F. Slegers",
            "K. Abrahams",
            "C. Bruls",
            "C. Lokesa",
            "L. Mertens"
          ]
        },
        {
          "teamId": 554,
          "team": "Anderlecht",
          "formation": "4-3-3",
          "coach": "Vitor Bruno",
          "starters": [
            "C. Coosemans",
            "A. Maamar",
            "G. Biancone",
            "L. Petrot",
            "L. Augustinsson",
            "N. Saliba",
            "E. Llansana",
            "T. Degreef",
            "L. Ambros",
            "D. Sikan",
            "O. Antman"
          ]
        }
      ],
      "injuries": []
    },
    {
      "fixtureId": 1558596,
      "date": "2026-08-16",
      "league": "BELGIAN_PRO_LEAGUE",
      "homeTeamId": 5902,
      "homeTeam": "RAAL La Louvière",
      "awayTeamId": 631,
      "awayTeam": "Gent",
      "home": {
        "teamId": 5902,
        "team": "RAAL La Louvière",
        "shots": 11,
        "shotsOnGoal": 5,
        "possession": 45,
        "corners": 6,
        "yellowCards": 1,
        "redCards": null,
        "expectedGoals": 0.54
      },
      "away": {
        "teamId": 631,
        "team": "Gent",
        "shots": 8,
        "shotsOnGoal": 3,
        "possession": 55,
        "corners": 3,
        "yellowCards": 0,
        "redCards": null,
        "expectedGoals": 1.18
      },
      "statisticsChecked": true,
      "lineupsChecked": true,
      "injuriesChecked": true,
      "lineups": [
        {
          "teamId": 5902,
          "team": "RAAL La Louvière",
          "formation": "5-3-2",
          "coach": "Edward Still",
          "starters": [
            "M. Peano",
            "S. Delos",
            "W. Faye",
            "P. Nkoa",
            "Y. Okou",
            "T. Lutonda",
            "M. Wade",
            "I. Coulibaly",
            "A. Tajaouart",
            "E. Filet",
            "M. Isah"
          ]
        },
        {
          "teamId": 631,
          "team": "Gent",
          "formation": "4-2-3-1",
          "coach": "Rik De Mil",
          "starters": [
            "D. Roef",
            "M. Ngom",
            "C. Burgess",
            "S. Van Der Heyden",
            "T. Araujo",
            "A. Omgba",
            "L. Lopes",
            "M. Volckaert",
            "A. Kadri",
            "M. Sonko",
            "I. Cisse"
          ]
        }
      ],
      "injuries": []
    },
    {
      "fixtureId": 1584374,
      "date": "2026-08-16",
      "league": "SUPER_LIG",
      "homeTeamId": 607,
      "homeTeam": "Konyaspor",
      "awayTeamId": 1007,
      "awayTeam": "Rizespor",
      "home": {
        "teamId": 607,
        "team": "Konyaspor",
        "shots": 7,
        "shotsOnGoal": 3,
        "possession": 44,
        "corners": 1,
        "yellowCards": 1,
        "redCards": null,
        "expectedGoals": 0.62
      },
      "away": {
        "teamId": 1007,
        "team": "Rizespor",
        "shots": 14,
        "shotsOnGoal": 5,
        "possession": 56,
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
          "teamId": 607,
          "team": "Konyaspor",
          "formation": "4-1-4-1",
          "coach": "Ilhan Palut",
          "starters": [
            "Bahadır Han Güngördü",
            "Yhoan Andzouana",
            "Chidozie Awaziem",
            "Adil Demirbağ",
            "Arif Boşluk",
            "Uğurcan Yazğılı",
            "Deniz Türüç",
            "Melih İbrahimoğlu",
            "Diogo Gonçalves",
            "Ebrima Colley",
            "Jackson Muleka"
          ]
        },
        {
          "teamId": 1007,
          "team": "Rizespor",
          "formation": "4-2-3-1",
          "coach": "Recep Ucar",
          "starters": [
            "Yahia Fofana",
            "Mithat Pala",
            "Attila Mocsi",
            "Modibo Sagnan",
            "Zakaria Ariss",
            "Qazim Laci",
            "Taylan Antalyalı",
            "Adedire Mebude",
            "Dal Varešanović",
            "Ahmed Kutucu",
            "Ali Sowe"
          ]
        }
      ],
      "injuries": [
        {
          "fixtureId": 1584374,
          "teamId": 607,
          "playerId": 194880,
          "player": "A. Ndao",
          "type": "Missing Fixture",
          "reason": "Suspended"
        },
        {
          "fixtureId": 1584374,
          "teamId": 1007,
          "playerId": 73509,
          "player": "K. Alikulov",
          "type": "Missing Fixture",
          "reason": "Knee Injury"
        },
        {
          "fixtureId": 1584374,
          "teamId": 1007,
          "playerId": 385760,
          "player": "F. Orak",
          "type": "Missing Fixture",
          "reason": "Inactive"
        }
      ]
    },
    {
      "fixtureId": 1584373,
      "date": "2026-08-16",
      "league": "SUPER_LIG",
      "homeTeamId": 1004,
      "homeTeam": "Kasımpaşa",
      "awayTeamId": 998,
      "awayTeam": "Trabzonspor",
      "home": {
        "teamId": 1004,
        "team": "Kasımpaşa",
        "shots": 9,
        "shotsOnGoal": 4,
        "possession": 40,
        "corners": 3,
        "yellowCards": 2,
        "redCards": null,
        "expectedGoals": 1.86
      },
      "away": {
        "teamId": 998,
        "team": "Trabzonspor",
        "shots": 13,
        "shotsOnGoal": 5,
        "possession": 60,
        "corners": 10,
        "yellowCards": 0,
        "redCards": null,
        "expectedGoals": 0.85
      },
      "statisticsChecked": true,
      "lineupsChecked": true,
      "injuriesChecked": true,
      "lineups": [
        {
          "teamId": 1004,
          "team": "Kasımpaşa",
          "formation": "4-2-3-1",
          "coach": "Shota Arveladze",
          "starters": [
            "Andreas Gianniotis",
            "Cláudio Winck",
            "Adem Arous",
            "Matei Ilie",
            "Jakob Jessen",
            "Andri Fannar Baldursson",
            "Elson Mendes",
            "Mortadha Ben Ouanes",
            "Fousseni Diabaté",
            "Güven Yalçın",
            "Adrian Benedyczak"
          ]
        },
        {
          "teamId": 998,
          "team": "Trabzonspor",
          "formation": "4-2-3-1",
          "coach": "Fatih Tekke",
          "starters": [
            "André Onana",
            "Wagner Pina",
            "Chibuike Nwaiwu",
            "Stefan Savić",
            "Mustafa Eskihellaç",
            "Benjamin Bouchouari",
            "Ruslan Malinovskyi",
            "Noah Saviolo",
            "Aral Şimşir",
            "Metehan Mimaroğlu",
            "Paul Onuachu"
          ]
        }
      ],
      "injuries": [
        {
          "fixtureId": 1584373,
          "teamId": 1004,
          "playerId": 49870,
          "player": "K. Corekci",
          "type": "Missing Fixture",
          "reason": "Achilles Tendon Injury"
        },
        {
          "fixtureId": 1584373,
          "teamId": 998,
          "playerId": 63627,
          "player": "A. Batagov",
          "type": "Missing Fixture",
          "reason": "Knee Injury"
        },
        {
          "fixtureId": 1584373,
          "teamId": 998,
          "playerId": 22408,
          "player": "T. Jabol-Folcarelli",
          "type": "Missing Fixture",
          "reason": "Knee Injury"
        },
        {
          "fixtureId": 1584373,
          "teamId": 998,
          "playerId": 3638,
          "player": "E. Muci",
          "type": "Missing Fixture",
          "reason": "Hamstring Injury"
        },
        {
          "fixtureId": 1584373,
          "teamId": 998,
          "playerId": 47443,
          "player": "O. Yokuslu",
          "type": "Missing Fixture",
          "reason": "Lacking Match Fitness"
        }
      ]
    },
    {
      "fixtureId": 1584372,
      "date": "2026-08-16",
      "league": "SUPER_LIG",
      "homeTeamId": 997,
      "homeTeam": "Gençlerbirliği S.K.",
      "awayTeamId": 611,
      "awayTeam": "Fenerbahçe",
      "home": {
        "teamId": 997,
        "team": "Gençlerbirliği S.K.",
        "shots": 10,
        "shotsOnGoal": 3,
        "possession": 29,
        "corners": 1,
        "yellowCards": 0,
        "redCards": null,
        "expectedGoals": 1.19
      },
      "away": {
        "teamId": 611,
        "team": "Fenerbahçe",
        "shots": 27,
        "shotsOnGoal": 11,
        "possession": 71,
        "corners": 12,
        "yellowCards": 1,
        "redCards": null,
        "expectedGoals": 2.9
      },
      "statisticsChecked": true,
      "lineupsChecked": true,
      "injuriesChecked": true,
      "lineups": [
        {
          "teamId": 997,
          "team": "Gençlerbirliği S.K.",
          "formation": "4-4-2",
          "coach": "Ozcan Bizati",
          "starters": [
            "İrfan Can Eğribayat",
            "Pedro Pereira",
            "Dimitris Goutas",
            "Žan Žužek",
            "Abdurrahim Dursun",
            "Adama Malouda Traoré",
            "Ousmane Diabate",
            "Ensar Kemaloğlu",
            "Franco Tongya",
            "Oğulcan Ülgün",
            "Sekou Koita"
          ]
        },
        {
          "teamId": 611,
          "team": "Fenerbahçe",
          "formation": "4-2-3-1",
          "coach": "Ismail Kartal",
          "starters": [
            "Tarık Çetin",
            "Mert Müldür",
            "Milan Škriniar",
            "Nathan Aké",
            "Levent Mercan",
            "İsmail Yüksek",
            "Mattéo Guendouzi",
            "İrfan Can Kahveci",
            "Marco Asensio",
            "Oğuz Aydın",
            "Talisca"
          ]
        }
      ],
      "injuries": [
        {
          "fixtureId": 1584372,
          "teamId": 997,
          "playerId": 427020,
          "player": "D. Demir",
          "type": "Missing Fixture",
          "reason": "Knee Injury"
        },
        {
          "fixtureId": 1584372,
          "teamId": 611,
          "playerId": 417861,
          "player": "A. Diouf",
          "type": "Missing Fixture",
          "reason": "Lacking Match Fitness"
        },
        {
          "fixtureId": 1584372,
          "teamId": 611,
          "playerId": 617,
          "player": "Ederson",
          "type": "Missing Fixture",
          "reason": "Illness"
        },
        {
          "fixtureId": 1584372,
          "teamId": 611,
          "playerId": 49837,
          "player": "M. Gunok",
          "type": "Missing Fixture",
          "reason": "Muscle Injury"
        },
        {
          "fixtureId": 1584372,
          "teamId": 611,
          "playerId": 37380,
          "player": "A. Musaba",
          "type": "Missing Fixture",
          "reason": "Injury"
        },
        {
          "fixtureId": 1584372,
          "teamId": 611,
          "playerId": 272721,
          "player": "J. Oosterwolde",
          "type": "Missing Fixture",
          "reason": "Achilles Tendon Injury"
        },
        {
          "fixtureId": 1584372,
          "teamId": 611,
          "playerId": 18776,
          "player": "C. Soyuncu",
          "type": "Missing Fixture",
          "reason": "Injury"
        }
      ]
    },
    {
      "fixtureId": 1584371,
      "date": "2026-08-16",
      "league": "SUPER_LIG",
      "homeTeamId": 3573,
      "homeTeam": "Gaziantep FK",
      "awayTeamId": 996,
      "awayTeam": "Alanyaspor",
      "home": {
        "teamId": 3573,
        "team": "Gaziantep FK",
        "shots": 13,
        "shotsOnGoal": 5,
        "possession": 61,
        "corners": 0,
        "yellowCards": 3,
        "redCards": null,
        "expectedGoals": 1.28
      },
      "away": {
        "teamId": 996,
        "team": "Alanyaspor",
        "shots": 11,
        "shotsOnGoal": 2,
        "possession": 39,
        "corners": 4,
        "yellowCards": 3,
        "redCards": null,
        "expectedGoals": 1.25
      },
      "statisticsChecked": true,
      "lineupsChecked": true,
      "injuriesChecked": true,
      "lineups": [
        {
          "teamId": 3573,
          "team": "Gaziantep FK",
          "formation": "3-4-2-1",
          "coach": "Mirel Radoi",
          "starters": [
            "Kacper Tobiasz",
            "Luis Pérez",
            "Myenty Abena",
            "Ulrich Meleke",
            "Deian Sorescu",
            "Juninho Bacuna",
            "Alexandru Maxim",
            "Florin Ştefan",
            "Kacper Kozłowski",
            "Drissa Camara",
            "Trivante Stewart"
          ]
        },
        {
          "teamId": 996,
          "team": "Alanyaspor",
          "formation": "3-4-3",
          "coach": "Joao Pereira",
          "starters": [
            "Paulo Victor",
            "Nuno Lima",
            "Fidan Aliti",
            "Ümit Akdağ",
            "Florent Hadergjonaj",
            "Gaius Makouta",
            "Maestro",
            "Ruan Pereira Duarte",
            "Hwang Ui-Jo",
            "Arda Usluoğlu",
            "Ibrahim Kaya"
          ]
        }
      ],
      "injuries": [
        {
          "fixtureId": 1584371,
          "teamId": 3573,
          "playerId": 451,
          "player": "B. Ndiaye",
          "type": "Missing Fixture",
          "reason": "Injury"
        }
      ]
    },
    {
      "fixtureId": 1507031,
      "date": "2026-08-16",
      "league": "KLEAGUE1",
      "homeTeamId": 2745,
      "homeTeam": "Bucheon FC 1995",
      "awayTeamId": 2762,
      "awayTeam": "Jeonbuk Motors",
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
            "Jong-Woo Kim",
            "Tae-hyeon Ahn",
            "Galego",
            "Gustavo Nescau",
            "Rodrigo Bassani"
          ]
        },
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
            "Seong-ung Maeng",
            "Jin-gyu Kim",
            "Dong-jun Lee",
            "Ye-geon Kim",
            "Seung-Woo Lee",
            "Bruno Mota"
          ]
        }
      ],
      "injuries": []
    },
    {
      "fixtureId": 1507032,
      "date": "2026-08-16",
      "league": "KLEAGUE1",
      "homeTeamId": 2763,
      "homeTeam": "Incheon United",
      "awayTeamId": 2768,
      "awayTeam": "Gimcheon Sangmu FC",
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
          "teamId": 2768,
          "team": "Gimcheon Sangmu FC",
          "formation": "4-4-2",
          "coach": "Seung-jin Joo",
          "starters": [
            "Jong-beom Baek",
            "Tae-hwan Kim",
            "Byeon Jun-soo",
            "Jung-taek Lee",
            "Park Cheol-woo",
            "Jae-hyeon Go",
            "Lee Kang-Hyeon",
            "Tae-jun Park",
            "Joo-chan Kim",
            "Kim Lee-Seok",
            "Jeong Jae-Min"
          ]
        }
      ],
      "injuries": []
    },
    {
      "fixtureId": 1507033,
      "date": "2026-08-16",
      "league": "KLEAGUE1",
      "homeTeamId": 2767,
      "homeTeam": "Ulsan Hyundai FC",
      "awayTeamId": 2746,
      "awayTeam": "Gangwon FC",
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
            "Kang Sang-woo"
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
            "Hong Chul",
            "Young-jun Goh",
            "You-Hyeon Lee",
            "Min-woo Seo",
            "Jesse Sekidika",
            "Byeong-chan Choi",
            "Dae-won Kim"
          ]
        }
      ],
      "injuries": []
    },
    {
      "fixtureId": 1510415,
      "date": "2026-08-16",
      "league": "KLEAGUE2",
      "homeTeamId": 2747,
      "homeTeam": "Daegu FC",
      "awayTeamId": 2753,
      "awayTeam": "Asan Mugunghwa",
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
          "teamId": 2747,
          "team": "Daegu FC",
          "formation": "",
          "coach": "Sung-yong Choi",
          "starters": []
        },
        {
          "teamId": 2753,
          "team": "Asan Mugunghwa",
          "formation": "",
          "coach": "Andre Gaspar",
          "starters": []
        }
      ],
      "injuries": []
    },
    {
      "fixtureId": 1510418,
      "date": "2026-08-16",
      "league": "KLEAGUE2",
      "homeTeamId": 2749,
      "homeTeam": "Seoul E-Land FC",
      "awayTeamId": 2758,
      "awayTeam": "Ansan Greeners",
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
          "teamId": 2749,
          "team": "Seoul E-Land FC",
          "formation": "",
          "coach": "Do-Kyun Kim",
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
      "fixtureId": 1510416,
      "date": "2026-08-16",
      "league": "KLEAGUE2",
      "homeTeamId": 7078,
      "homeTeam": "Gimpo Citizen",
      "awayTeamId": 7060,
      "awayTeam": "Cheonan City",
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
          "teamId": 7078,
          "team": "Gimpo Citizen",
          "formation": "",
          "coach": "Jeong-woon Ko",
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
      "fixtureId": 1510417,
      "date": "2026-08-16",
      "league": "KLEAGUE2",
      "homeTeamId": 7098,
      "homeTeam": "Paju Citizen",
      "awayTeamId": 2757,
      "awayTeam": "Seongnam FC",
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
          "teamId": 7098,
          "team": "Paju Citizen",
          "formation": "",
          "coach": "Gerard Nus",
          "starters": []
        },
        {
          "teamId": 2757,
          "team": "Seongnam FC",
          "formation": "",
          "coach": "Kyung-Jun Jeon",
          "starters": []
        }
      ],
      "injuries": []
    },
    {
      "fixtureId": 1606614,
      "date": "2026-08-16",
      "league": "J2LEAGUE",
      "homeTeamId": 307,
      "homeTeam": "Yokohama FC",
      "awayTeamId": 280,
      "awayTeam": "Jubilo Iwata",
      "home": {
        "teamId": 307,
        "team": "Yokohama FC",
        "shots": null,
        "shotsOnGoal": null,
        "possession": null,
        "corners": null,
        "yellowCards": null,
        "redCards": null,
        "expectedGoals": null
      },
      "away": {
        "teamId": 280,
        "team": "Jubilo Iwata",
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
          "teamId": 307,
          "team": "Yokohama FC",
          "formation": "",
          "coach": "Daisuke Sudo",
          "starters": [
            "A. Ichikawa",
            "K. Iwatake",
            "H. Sugita",
            "K. Hosoi",
            "T. Murata",
            "K. Yamada",
            "L. Takae",
            "K. Shimbo",
            "T. Shimamura",
            "A. Yokoyama",
            "Lukian"
          ]
        },
        {
          "teamId": 280,
          "team": "Jubilo Iwata",
          "formation": "",
          "coach": "Ryo Shigaki",
          "starters": [
            "A. Niekawa",
            "I. Kawasaki",
            "Danilo Cardoso",
            "Yuri Lara",
            "K. Matsubara",
            "K. Fujiwara",
            "D. Kaneko",
            "K. Sumi",
            "T. Kawai",
            "Iago Teles",
            "R. Ota"
          ]
        }
      ],
      "injuries": []
    },
    {
      "fixtureId": 1606615,
      "date": "2026-08-16",
      "league": "J2LEAGUE",
      "homeTeamId": 299,
      "homeTeam": "Tokushima Vortis",
      "awayTeamId": 295,
      "awayTeam": "Sagan Tosu",
      "home": {
        "teamId": 299,
        "team": "Tokushima Vortis",
        "shots": null,
        "shotsOnGoal": null,
        "possession": null,
        "corners": null,
        "yellowCards": null,
        "redCards": null,
        "expectedGoals": null
      },
      "away": {
        "teamId": 295,
        "team": "Sagan Tosu",
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
          "teamId": 299,
          "team": "Tokushima Vortis",
          "formation": "",
          "coach": "Gert Engels",
          "starters": [
            "K. C. Kitamura",
            "M. Moyo",
            "N. Yamada",
            "H. Tanaka",
            "K. Yanagisawa",
            "N. Kanuma",
            "K. Iwao",
            "Y. Takagi",
            "D. Watari",
            "S. Kodama",
            "Thonny Anderson"
          ]
        },
        {
          "teamId": 295,
          "team": "Sagan Tosu",
          "formation": "",
          "coach": "Akio Kogiku",
          "starters": [
            "R. Izumori",
            "S. Nagasawa",
            "K. Abe",
            "S. Ogawa",
            "M. Yoshida",
            "N. Matsumoto",
            "T. Sakurai",
            "R. Shiohama",
            "R. Hyon",
            "K. Nishizawa",
            "T. Takahashi"
          ]
        }
      ],
      "injuries": []
    },
    {
      "fixtureId": 1563083,
      "date": "2026-08-15",
      "league": "CHAMPIONSHIP",
      "homeTeamId": 39,
      "homeTeam": "Wolves",
      "awayTeamId": 67,
      "awayTeam": "Blackburn",
      "home": {
        "teamId": 39,
        "team": "Wolves",
        "shots": 18,
        "shotsOnGoal": 3,
        "possession": 55,
        "corners": 5,
        "yellowCards": 1,
        "redCards": null,
        "expectedGoals": 2.04
      },
      "away": {
        "teamId": 67,
        "team": "Blackburn",
        "shots": 10,
        "shotsOnGoal": 5,
        "possession": 45,
        "corners": 5,
        "yellowCards": 3,
        "redCards": null,
        "expectedGoals": 0.82
      },
      "statisticsChecked": true,
      "lineupsChecked": true,
      "injuriesChecked": true,
      "lineups": [
        {
          "teamId": 39,
          "team": "Wolves",
          "formation": "4-3-3",
          "coach": "Cesar Peixoto",
          "starters": [
            "D. Bentley",
            "K. Trippier",
            "Y. Mosquera",
            "Toti",
            "D. Wolfe",
            "F. Lopez",
            "Andre",
            "M. Munetsi",
            "R. Gomes",
            "A. Armstrong",
            "M. Mane"
          ]
        },
        {
          "teamId": 67,
          "team": "Blackburn",
          "formation": "4-2-3-1",
          "coach": "Tony Mowbray",
          "starters": [
            "B. Toth",
            "R. Alebiosu",
            "T. Atcheson",
            "S. McLoughlin",
            "H. Pickering",
            "K. Montgomery",
            "A. Forshaw",
            "R. Morishita",
            "T. Cantwell",
            "O. Afolayan",
            "A. Gudjohnsen"
          ]
        }
      ],
      "injuries": [
        {
          "fixtureId": 1563083,
          "teamId": 39,
          "playerId": 20665,
          "player": "J. Bellegarde",
          "type": "Missing Fixture",
          "reason": "Inactive"
        },
        {
          "fixtureId": 1563083,
          "teamId": 39,
          "playerId": 19143,
          "player": "S. Johnstone",
          "type": "Missing Fixture",
          "reason": "Knock"
        },
        {
          "fixtureId": 1563083,
          "teamId": 39,
          "playerId": 66407,
          "player": "L. Krejci",
          "type": "Missing Fixture",
          "reason": "Lacking Match Fitness"
        },
        {
          "fixtureId": 1563083,
          "teamId": 39,
          "playerId": 194116,
          "player": "R. Said",
          "type": "Missing Fixture",
          "reason": "Inactive"
        },
        {
          "fixtureId": 1563083,
          "teamId": 67,
          "playerId": 429613,
          "player": "M. Baradji",
          "type": "Missing Fixture",
          "reason": "Hamstring Injury"
        },
        {
          "fixtureId": 1563083,
          "teamId": 67,
          "playerId": 324097,
          "player": "D. De Neve",
          "type": "Missing Fixture",
          "reason": "Injury"
        },
        {
          "fixtureId": 1563083,
          "teamId": 67,
          "playerId": 50968,
          "player": "M. Jorgensen",
          "type": "Missing Fixture",
          "reason": "Injury"
        },
        {
          "fixtureId": 1563083,
          "teamId": 67,
          "playerId": 30998,
          "player": "A. Kargbo",
          "type": "Missing Fixture",
          "reason": "Muscle Injury"
        },
        {
          "fixtureId": 1563083,
          "teamId": 67,
          "playerId": 7037,
          "player": "L. Miller",
          "type": "Missing Fixture",
          "reason": "Achilles Tendon Injury"
        },
        {
          "fixtureId": 1563083,
          "teamId": 67,
          "playerId": 17395,
          "player": "S. Wharton",
          "type": "Missing Fixture",
          "reason": "Achilles Tendon Injury"
        }
      ]
    },
    {
      "fixtureId": 1563084,
      "date": "2026-08-15",
      "league": "CHAMPIONSHIP",
      "homeTeamId": 68,
      "homeTeam": "Bolton",
      "awayTeamId": 59,
      "awayTeam": "Preston",
      "home": {
        "teamId": 68,
        "team": "Bolton",
        "shots": 15,
        "shotsOnGoal": 6,
        "possession": 55,
        "corners": 5,
        "yellowCards": 2,
        "redCards": null,
        "expectedGoals": 1.1
      },
      "away": {
        "teamId": 59,
        "team": "Preston",
        "shots": 9,
        "shotsOnGoal": 3,
        "possession": 45,
        "corners": 2,
        "yellowCards": 3,
        "redCards": null,
        "expectedGoals": 0.81
      },
      "statisticsChecked": true,
      "lineupsChecked": true,
      "injuriesChecked": true,
      "lineups": [
        {
          "teamId": 68,
          "team": "Bolton",
          "formation": "",
          "coach": "Steven Schumacher",
          "starters": [
            "Jack Bonham",
            "Luca Stephenson",
            "Chris Forino",
            "Akin Famewo",
            "Max Conway",
            "Josh Sheehan",
            "Ethan Erhahon",
            "Gaizka Larrazabal",
            "John McAtee",
            "Thierry Gale",
            "Sam Dalby"
          ]
        },
        {
          "teamId": 59,
          "team": "Preston",
          "formation": "",
          "coach": "Paul Heckingbottom",
          "starters": [
            "Daniel Iversen",
            "Pol Valentín",
            "Jordan Storey",
            "Liam Lindsay",
            "Andrew Hughes",
            "Ali McCann",
            "Jordan Thompson",
            "Alfie Devine",
            "Callum Lang",
            "Delano Burgzorg",
            "Milutin Osmajić"
          ]
        }
      ],
      "injuries": [
        {
          "fixtureId": 1563084,
          "teamId": 68,
          "playerId": 38575,
          "player": "R. Rodrigues",
          "type": "Missing Fixture",
          "reason": "Knee Injury"
        },
        {
          "fixtureId": 1563084,
          "teamId": 68,
          "playerId": 152952,
          "player": "X. Simons",
          "type": "Missing Fixture",
          "reason": "Red Card"
        },
        {
          "fixtureId": 1563084,
          "teamId": 59,
          "playerId": 459284,
          "player": "T. Carroll",
          "type": "Missing Fixture",
          "reason": "Ankle Injury"
        },
        {
          "fixtureId": 1563084,
          "teamId": 59,
          "playerId": 153424,
          "player": "L. Gibson",
          "type": "Missing Fixture",
          "reason": "Red Card"
        },
        {
          "fixtureId": 1563084,
          "teamId": 59,
          "playerId": 19455,
          "player": "B. Potts",
          "type": "Missing Fixture",
          "reason": "Injury"
        }
      ]
    },
    {
      "fixtureId": 1563085,
      "date": "2026-08-15",
      "league": "CHAMPIONSHIP",
      "homeTeamId": 56,
      "homeTeam": "Bristol City",
      "awayTeamId": 58,
      "awayTeam": "Millwall",
      "home": {
        "teamId": 56,
        "team": "Bristol City",
        "shots": 8,
        "shotsOnGoal": 0,
        "possession": 34,
        "corners": 6,
        "yellowCards": 2,
        "redCards": 1,
        "expectedGoals": 0.5
      },
      "away": {
        "teamId": 58,
        "team": "Millwall",
        "shots": 24,
        "shotsOnGoal": 3,
        "possession": 66,
        "corners": 6,
        "yellowCards": 2,
        "redCards": 0,
        "expectedGoals": 3
      },
      "statisticsChecked": true,
      "lineupsChecked": true,
      "injuriesChecked": true,
      "lineups": [
        {
          "teamId": 56,
          "team": "Bristol City",
          "formation": "",
          "coach": "Roy Hodgson",
          "starters": [
            "Sam Tickle",
            "George Tanner",
            "Rob Dickie",
            "Robert Atkinson",
            "Lisav Naif Eissat",
            "Jason Knight",
            "Adam Randell",
            "Yu Hirakawa",
            "Dominic Ballard",
            "Sam Greenwood",
            "Lorent Tolaj"
          ]
        },
        {
          "teamId": 58,
          "team": "Millwall",
          "formation": "",
          "coach": "Alex Neil",
          "starters": [
            "Lukas Jensen",
            "Ryan Leonard",
            "Caleb Taylor",
            "Jake Cooper",
            "Zak Sturge",
            "Jenson Metcalfe",
            "Casper De Norre",
            "Camiel Neghli",
            "Femi Azeez",
            "Josh Coburn",
            "Tairyk Arconte"
          ]
        }
      ],
      "injuries": [
        {
          "fixtureId": 1563085,
          "teamId": 56,
          "playerId": 69539,
          "player": "L. McNally",
          "type": "Missing Fixture",
          "reason": "Knee Injury"
        },
        {
          "fixtureId": 1563085,
          "teamId": 56,
          "playerId": 403218,
          "player": "O. Thomas",
          "type": "Missing Fixture",
          "reason": "Injury"
        },
        {
          "fixtureId": 1563085,
          "teamId": 58,
          "playerId": 191337,
          "player": "T. Crama",
          "type": "Missing Fixture",
          "reason": "Injury"
        },
        {
          "fixtureId": 1563085,
          "teamId": 58,
          "playerId": 19829,
          "player": "A. Doughty",
          "type": "Missing Fixture",
          "reason": "Injury"
        },
        {
          "fixtureId": 1563085,
          "teamId": 58,
          "playerId": 368659,
          "player": "M. Ivanovic",
          "type": "Missing Fixture",
          "reason": "Injury"
        },
        {
          "fixtureId": 1563085,
          "teamId": 58,
          "playerId": 325787,
          "player": "D. Mazou-Sacko",
          "type": "Missing Fixture",
          "reason": "Injury"
        },
        {
          "fixtureId": 1563085,
          "teamId": 58,
          "playerId": 295233,
          "player": "M. Servais",
          "type": "Missing Fixture",
          "reason": "Injury"
        }
      ]
    },
    {
      "fixtureId": 1563087,
      "date": "2026-08-15",
      "league": "CHAMPIONSHIP",
      "homeTeamId": 70,
      "homeTeam": "Middlesbrough",
      "awayTeamId": 1379,
      "awayTeam": "Lincoln",
      "home": {
        "teamId": 70,
        "team": "Middlesbrough",
        "shots": 22,
        "shotsOnGoal": 7,
        "possession": 77,
        "corners": 5,
        "yellowCards": 0,
        "redCards": null,
        "expectedGoals": 2.22
      },
      "away": {
        "teamId": 1379,
        "team": "Lincoln",
        "shots": 10,
        "shotsOnGoal": 2,
        "possession": 23,
        "corners": 5,
        "yellowCards": 2,
        "redCards": null,
        "expectedGoals": 0.62
      },
      "statisticsChecked": true,
      "lineupsChecked": true,
      "injuriesChecked": true,
      "lineups": [
        {
          "teamId": 70,
          "team": "Middlesbrough",
          "formation": "",
          "coach": "Kim Hellberg",
          "starters": [
            "Radek Vitek",
            "Callum Brittain",
            "Luke Ayling",
            "Adilson Malanda",
            "Neto Borges",
            "Abdoulaye Kanté",
            "Sebastian Berhalter",
            "Morgan Whittaker",
            "Leo Castledine",
            "Will Lankshear",
            "Kyle Joseph"
          ]
        },
        {
          "teamId": 1379,
          "team": "Lincoln",
          "formation": "5-3-2",
          "coach": "",
          "starters": [
            "George Wickens",
            "Tendayi Darikwa",
            "Thomas Hamer",
            "Deji Elerewe",
            "Ryley Towler",
            "Adam Reach",
            "Dom Jefferies",
            "Ivan Varfolomeev",
            "Conor McGrandles",
            "Freddie Draper",
            "Ben House"
          ]
        }
      ],
      "injuries": [
        {
          "fixtureId": 1563087,
          "teamId": 70,
          "playerId": 282767,
          "player": "T. Conway",
          "type": "Missing Fixture",
          "reason": "Injury"
        },
        {
          "fixtureId": 1563087,
          "teamId": 70,
          "playerId": 201714,
          "player": "A. Morris",
          "type": "Missing Fixture",
          "reason": "Injury"
        },
        {
          "fixtureId": 1563087,
          "teamId": 70,
          "playerId": 61156,
          "player": "D. Strelec",
          "type": "Missing Fixture",
          "reason": "Health problems"
        },
        {
          "fixtureId": 1563087,
          "teamId": 1379,
          "playerId": 19753,
          "player": "S. Bradley",
          "type": "Missing Fixture",
          "reason": "Knock"
        },
        {
          "fixtureId": 1563087,
          "teamId": 1379,
          "playerId": 19786,
          "player": "A. Jackson",
          "type": "Missing Fixture",
          "reason": "Surgery"
        }
      ]
    },
    {
      "fixtureId": 1563088,
      "date": "2026-08-15",
      "league": "CHAMPIONSHIP",
      "homeTeamId": 71,
      "homeTeam": "Norwich",
      "awayTeamId": 60,
      "awayTeam": "West Brom",
      "home": {
        "teamId": 71,
        "team": "Norwich",
        "shots": 20,
        "shotsOnGoal": 7,
        "possession": 54,
        "corners": 8,
        "yellowCards": 0,
        "redCards": null,
        "expectedGoals": 2.72
      },
      "away": {
        "teamId": 60,
        "team": "West Brom",
        "shots": 8,
        "shotsOnGoal": 4,
        "possession": 46,
        "corners": 2,
        "yellowCards": 2,
        "redCards": null,
        "expectedGoals": 1.45
      },
      "statisticsChecked": true,
      "lineupsChecked": true,
      "injuriesChecked": true,
      "lineups": [
        {
          "teamId": 71,
          "team": "Norwich",
          "formation": "",
          "coach": "Philippe Clement",
          "starters": [
            "Vladan Kovačević",
            "Kellen Fisher",
            "Harry Darling",
            "José Córdoba",
            "Ben Chrisene",
            "Kenny McLean",
            "Pelle Mattsson",
            "Andre Brooks",
            "Anis Ben Slimane",
            "Paris Maghoma",
            "Mohamed Touré"
          ]
        },
        {
          "teamId": 60,
          "team": "West Brom",
          "formation": "4-4-2",
          "coach": "",
          "starters": [
            "Max O'Leary",
            "Nolan Galves",
            "Nathaniel Phillips",
            "George Campbell",
            "Callum Styles",
            "Harry Whitwell",
            "Ousmane Diakité",
            "Felix Horn Myhre",
            "Isaac Price",
            "Aune Selland Heggebø",
            "Jimmy Morgan"
          ]
        }
      ],
      "injuries": [
        {
          "fixtureId": 1563088,
          "teamId": 71,
          "playerId": 171034,
          "player": "L. Gibbs",
          "type": "Missing Fixture",
          "reason": "Muscle Injury"
        },
        {
          "fixtureId": 1563088,
          "teamId": 71,
          "playerId": 326105,
          "player": "J. Makama",
          "type": "Missing Fixture",
          "reason": "Foot Injury"
        },
        {
          "fixtureId": 1563088,
          "teamId": 60,
          "playerId": 294978,
          "player": "T. Bany",
          "type": "Missing Fixture",
          "reason": "Inactive"
        }
      ]
    },
    {
      "fixtureId": 1563090,
      "date": "2026-08-15",
      "league": "CHAMPIONSHIP",
      "homeTeamId": 75,
      "homeTeam": "Stoke City",
      "awayTeamId": 76,
      "awayTeam": "Swansea",
      "home": {
        "teamId": 75,
        "team": "Stoke City",
        "shots": 6,
        "shotsOnGoal": 2,
        "possession": 41,
        "corners": 4,
        "yellowCards": 1,
        "redCards": null,
        "expectedGoals": 0.63
      },
      "away": {
        "teamId": 76,
        "team": "Swansea",
        "shots": 7,
        "shotsOnGoal": 3,
        "possession": 59,
        "corners": 5,
        "yellowCards": 3,
        "redCards": null,
        "expectedGoals": 0.61
      },
      "statisticsChecked": true,
      "lineupsChecked": true,
      "injuriesChecked": true,
      "lineups": [
        {
          "teamId": 75,
          "team": "Stoke City",
          "formation": "",
          "coach": "Mark Robins",
          "starters": [
            "Viktor Johansson",
            "Ben Wilmot",
            "Bosun Lawal",
            "Luke Graham",
            "Eric Bocat",
            "Ethan Galbraith",
            "Svante Ingelsson",
            "Million Manhoef",
            "Tomáš Rigo",
            "Sorba Thomas",
            "Sam Gallagher"
          ]
        },
        {
          "teamId": 76,
          "team": "Swansea",
          "formation": "",
          "coach": "Vitor Emanuel Soares Matos",
          "starters": [
            "Lawrence Vigouroux",
            "Filip Lissah",
            "Ben Cabango",
            "Stephen Welsh",
            "Josh Tymon",
            "Jay Fulton",
            "Joseph Opoku",
            "Elijah Just",
            "Marko Stamenić",
            "Moussa Kounfolo Yeo",
            "Žan Vipotnik"
          ]
        }
      ],
      "injuries": [
        {
          "fixtureId": 1563090,
          "teamId": 75,
          "playerId": 360011,
          "player": "A. Ampah",
          "type": "Missing Fixture",
          "reason": "Hamstring Injury"
        },
        {
          "fixtureId": 1563090,
          "teamId": 75,
          "playerId": 18813,
          "player": "A. Cresswell",
          "type": "Missing Fixture",
          "reason": "Injury"
        },
        {
          "fixtureId": 1563090,
          "teamId": 75,
          "playerId": 294552,
          "player": "J. Tchamadeu",
          "type": "Missing Fixture",
          "reason": "Knee Injury"
        },
        {
          "fixtureId": 1563090,
          "teamId": 76,
          "playerId": 20457,
          "player": "C. Burgess",
          "type": "Missing Fixture",
          "reason": "Achilles Tendon Injury"
        },
        {
          "fixtureId": 1563090,
          "teamId": 76,
          "playerId": 45078,
          "player": "R. Stewart",
          "type": "Missing Fixture",
          "reason": "Injury"
        }
      ]
    },
    {
      "fixtureId": 1563086,
      "date": "2026-08-15",
      "league": "CHAMPIONSHIP",
      "homeTeamId": 1335,
      "homeTeam": "Charlton",
      "awayTeamId": 69,
      "awayTeam": "Derby",
      "home": {
        "teamId": 1335,
        "team": "Charlton",
        "shots": 13,
        "shotsOnGoal": 4,
        "possession": 45,
        "corners": 5,
        "yellowCards": 0,
        "redCards": null,
        "expectedGoals": 1.07
      },
      "away": {
        "teamId": 69,
        "team": "Derby",
        "shots": 15,
        "shotsOnGoal": 4,
        "possession": 55,
        "corners": 4,
        "yellowCards": 3,
        "redCards": null,
        "expectedGoals": 1.01
      },
      "statisticsChecked": true,
      "lineupsChecked": true,
      "injuriesChecked": true,
      "lineups": [
        {
          "teamId": 1335,
          "team": "Charlton",
          "formation": "",
          "coach": "Nathan Jones",
          "starters": [
            "William Mannion",
            "Danny McNamara",
            "Lloyd Jones",
            "Billy Koumetio",
            "Amari'i Bell",
            "Conor Coventry",
            "Nathaniel Chalobah",
            "Tyreece Campbell",
            "Sonny Carey",
            "Karlan Grant",
            "Matt Godden"
          ]
        },
        {
          "teamId": 69,
          "team": "Derby",
          "formation": "",
          "coach": "John Eustace",
          "starters": [
            "Jacob Widell Zetterström",
            "Joe Ward",
            "Sondre Langås",
            "Dion Sanderson",
            "Craig Forsyth",
            "Charlie Taylor",
            "Oscar Fraulo",
            "Lewis Travis",
            "Bobby Clark",
            "Carlton Morris",
            "Sammie Szmodics"
          ]
        }
      ],
      "injuries": [
        {
          "fixtureId": 1563086,
          "teamId": 1335,
          "playerId": 125543,
          "player": "J. Edwards",
          "type": "Missing Fixture",
          "reason": "Ankle Injury"
        },
        {
          "fixtureId": 1563086,
          "teamId": 1335,
          "playerId": 20352,
          "player": "C. Kelman",
          "type": "Missing Fixture",
          "reason": "Injury"
        },
        {
          "fixtureId": 1563086,
          "teamId": 1335,
          "playerId": 445921,
          "player": "M. Mbick",
          "type": "Missing Fixture",
          "reason": "Knee Injury"
        },
        {
          "fixtureId": 1563086,
          "teamId": 1335,
          "playerId": 571695,
          "player": "T. Ouma",
          "type": "Missing Fixture",
          "reason": "Lacking Match Fitness"
        },
        {
          "fixtureId": 1563086,
          "teamId": 1335,
          "playerId": 18939,
          "player": "K. Ramsay",
          "type": "Missing Fixture",
          "reason": "Injury"
        },
        {
          "fixtureId": 1563086,
          "teamId": 69,
          "playerId": 407652,
          "player": "P. Agyemang",
          "type": "Missing Fixture",
          "reason": "Achilles Tendon Injury"
        },
        {
          "fixtureId": 1563086,
          "teamId": 69,
          "playerId": 19860,
          "player": "M. Clarke",
          "type": "Missing Fixture",
          "reason": "Injury"
        },
        {
          "fixtureId": 1563086,
          "teamId": 69,
          "playerId": 37760,
          "player": "D. Murkin",
          "type": "Missing Fixture",
          "reason": "Hamstring Injury"
        }
      ]
    },
    {
      "fixtureId": 1563089,
      "date": "2026-08-15",
      "league": "CHAMPIONSHIP",
      "homeTeamId": 1355,
      "homeTeam": "Portsmouth",
      "awayTeamId": 72,
      "awayTeam": "QPR",
      "home": {
        "teamId": 1355,
        "team": "Portsmouth",
        "shots": 16,
        "shotsOnGoal": 6,
        "possession": 54,
        "corners": 7,
        "yellowCards": 0,
        "redCards": null,
        "expectedGoals": 2
      },
      "away": {
        "teamId": 72,
        "team": "QPR",
        "shots": 13,
        "shotsOnGoal": 6,
        "possession": 46,
        "corners": 3,
        "yellowCards": 1,
        "redCards": null,
        "expectedGoals": 2.04
      },
      "statisticsChecked": true,
      "lineupsChecked": true,
      "injuriesChecked": true,
      "lineups": [
        {
          "teamId": 1355,
          "team": "Portsmouth",
          "formation": "",
          "coach": "John Mousinho",
          "starters": [
            "Nicolas Schmid",
            "Terry Devlin",
            "Regan Poole",
            "Conor Shaughnessy",
            "Zak Swanson",
            "Rocco Robert Shein",
            "Ebou Adams",
            "Abu Kamara",
            "Adrian Segečić",
            "Luke Brooke-Smith",
            "Colby Bishop"
          ]
        },
        {
          "teamId": 72,
          "team": "QPR",
          "formation": "",
          "coach": "Julien Stephan",
          "starters": [
            "Pierce Charles",
            "Amadou Salif Mbengue",
            "Jimmy Dunne",
            "Jake Clarke-Salter",
            "Boy Kemper",
            "Harvey Vale",
            "Ronnie Edwards",
            "Kwame Poku",
            "Ilias Chair",
            "Koki Saito",
            "Rumarn Burrell"
          ]
        }
      ],
      "injuries": [
        {
          "fixtureId": 1563089,
          "teamId": 1355,
          "playerId": 17728,
          "player": "K. Anderson",
          "type": "Missing Fixture",
          "reason": "Injury"
        },
        {
          "fixtureId": 1563089,
          "teamId": 1355,
          "playerId": 87878,
          "player": "J. Bursik",
          "type": "Missing Fixture",
          "reason": "Injury"
        },
        {
          "fixtureId": 1563089,
          "teamId": 1355,
          "playerId": 343894,
          "player": "J. Farrell",
          "type": "Missing Fixture",
          "reason": "Groin Injury"
        },
        {
          "fixtureId": 1563089,
          "teamId": 1355,
          "playerId": 237115,
          "player": "M. Kosznovszky",
          "type": "Missing Fixture",
          "reason": "Knee Injury"
        },
        {
          "fixtureId": 1563089,
          "teamId": 1355,
          "playerId": 20138,
          "player": "C. Ogilvie",
          "type": "Missing Fixture",
          "reason": "Knee Injury"
        },
        {
          "fixtureId": 1563089,
          "teamId": 1355,
          "playerId": 19273,
          "player": "M. Pack",
          "type": "Missing Fixture",
          "reason": "Knee Injury"
        },
        {
          "fixtureId": 1563089,
          "teamId": 1355,
          "playerId": 340136,
          "player": "F. Umeh",
          "type": "Missing Fixture",
          "reason": "Hamstring Injury"
        },
        {
          "fixtureId": 1563089,
          "teamId": 1355,
          "playerId": 361472,
          "player": "T. Waddingham",
          "type": "Missing Fixture",
          "reason": "Ankle Injury"
        },
        {
          "fixtureId": 1563089,
          "teamId": 72,
          "playerId": 67959,
          "player": "K. Dembele",
          "type": "Missing Fixture",
          "reason": "Knee Injury"
        },
        {
          "fixtureId": 1563089,
          "teamId": 72,
          "playerId": 431885,
          "player": "R. Kolli",
          "type": "Missing Fixture",
          "reason": "Coach's decision"
        }
      ]
    },
    {
      "fixtureId": 1552126,
      "date": "2026-08-15",
      "league": "EREDIVISIE",
      "homeTeamId": 427,
      "homeTeam": "Telstar",
      "awayTeamId": 426,
      "awayTeam": "Sparta Rotterdam",
      "home": {
        "teamId": 427,
        "team": "Telstar",
        "shots": 7,
        "shotsOnGoal": 1,
        "possession": 61,
        "corners": 7,
        "yellowCards": 1,
        "redCards": null,
        "expectedGoals": 1.4
      },
      "away": {
        "teamId": 426,
        "team": "Sparta Rotterdam",
        "shots": 16,
        "shotsOnGoal": 9,
        "possession": 39,
        "corners": 5,
        "yellowCards": 1,
        "redCards": null,
        "expectedGoals": 2.54
      },
      "statisticsChecked": true,
      "lineupsChecked": true,
      "injuriesChecked": true,
      "lineups": [
        {
          "teamId": 427,
          "team": "Telstar",
          "formation": "4-2-3-1",
          "coach": "Henk Brugge",
          "starters": [
            "R. Koeman Jr",
            "G. Caschili",
            "A. Soualhia",
            "M. Peersman",
            "J. Hardeveld",
            "N. Rossen",
            "T. Owusu",
            "R. Mendes",
            "P. Brouwer",
            "S. Hetli",
            "J. Seedorf"
          ]
        },
        {
          "teamId": 426,
          "team": "Sparta Rotterdam",
          "formation": "4-2-3-1",
          "coach": "Rogier Meijer",
          "starters": [
            "F. Bednarek",
            "L. Martes",
            "M. Young",
            "N. Verschuren",
            "B. Kuipers",
            "J. Baas",
            "J. Toornstra",
            "C. Terho",
            "S. Mito",
            "A. Santos",
            "N. Thorisson"
          ]
        }
      ],
      "injuries": []
    },
    {
      "fixtureId": 1552127,
      "date": "2026-08-15",
      "league": "EREDIVISIE",
      "homeTeamId": 195,
      "homeTeam": "Willem II",
      "awayTeamId": 413,
      "awayTeam": "NEC Nijmegen",
      "home": {
        "teamId": 195,
        "team": "Willem II",
        "shots": 9,
        "shotsOnGoal": 2,
        "possession": 32,
        "corners": 1,
        "yellowCards": 1,
        "redCards": null,
        "expectedGoals": 1.43
      },
      "away": {
        "teamId": 413,
        "team": "NEC Nijmegen",
        "shots": 21,
        "shotsOnGoal": 10,
        "possession": 68,
        "corners": 2,
        "yellowCards": 0,
        "redCards": null,
        "expectedGoals": 2.99
      },
      "statisticsChecked": true,
      "lineupsChecked": true,
      "injuriesChecked": true,
      "lineups": [
        {
          "teamId": 195,
          "team": "Willem II",
          "formation": "4-4-1-1",
          "coach": "John Stegeman",
          "starters": [
            "K. de Leeuw",
            "P. van Loon",
            "F. Stam",
            "J. Hoogma",
            "N. Tjoe a On",
            "E. Gurbuz",
            "A. Ciranni",
            "K. Boogaard",
            "J. Slory",
            "U. van Aalst",
            "D. Haen"
          ]
        },
        {
          "teamId": 413,
          "team": "NEC Nijmegen",
          "formation": "3-4-2-1",
          "coach": "Dick Schreuder",
          "starters": [
            "G. Crettaz",
            "B. Pereira",
            "T. Storm",
            "D. Fonville",
            "A. Tahaui",
            "D. Nejasmic",
            "J. Monteiro",
            "C. Bischoff",
            "T. Chery",
            "D. Tadic",
            "B. Linssen"
          ]
        }
      ],
      "injuries": [
        {
          "fixtureId": 1552127,
          "teamId": 195,
          "playerId": 411824,
          "player": "A. Culum",
          "type": "Missing Fixture",
          "reason": "Foot Injury"
        },
        {
          "fixtureId": 1552127,
          "teamId": 195,
          "playerId": 1405,
          "player": "T. Didillon Hodl",
          "type": "Missing Fixture",
          "reason": "Hamstring Injury"
        },
        {
          "fixtureId": 1552127,
          "teamId": 195,
          "playerId": 393871,
          "player": "A. Lachkar",
          "type": "Missing Fixture",
          "reason": "Groin Injury"
        },
        {
          "fixtureId": 1552127,
          "teamId": 195,
          "playerId": 37712,
          "player": "J. Schuurman",
          "type": "Missing Fixture",
          "reason": "Knock"
        },
        {
          "fixtureId": 1552127,
          "teamId": 195,
          "playerId": 480309,
          "player": "A. Zarrouk",
          "type": "Missing Fixture",
          "reason": "Surgery"
        },
        {
          "fixtureId": 1552127,
          "teamId": 413,
          "playerId": 528298,
          "player": "Y. Moslih",
          "type": "Missing Fixture",
          "reason": "Injury"
        },
        {
          "fixtureId": 1552127,
          "teamId": 413,
          "playerId": 33289,
          "player": "K. Ogawa",
          "type": "Missing Fixture",
          "reason": "Injury"
        },
        {
          "fixtureId": 1552127,
          "teamId": 413,
          "playerId": 378864,
          "player": "S. Ouaissa",
          "type": "Missing Fixture",
          "reason": "Injury"
        },
        {
          "fixtureId": 1552127,
          "teamId": 413,
          "playerId": 625,
          "player": "P. Sandler",
          "type": "Missing Fixture",
          "reason": "Injury"
        },
        {
          "fixtureId": 1552127,
          "teamId": 413,
          "playerId": 535,
          "player": "P. Schuurs",
          "type": "Missing Fixture",
          "reason": "Knee Injury"
        }
      ]
    },
    {
      "fixtureId": 1575463,
      "date": "2026-08-15",
      "league": "PRIMEIRA_LIGA",
      "homeTeamId": 228,
      "homeTeam": "Sporting CP",
      "awayTeamId": 224,
      "awayTeam": "Vitória SC",
      "home": {
        "teamId": 228,
        "team": "Sporting CP",
        "shots": 5,
        "shotsOnGoal": 3,
        "possession": 56,
        "corners": 5,
        "yellowCards": 4,
        "redCards": null,
        "expectedGoals": 1.12
      },
      "away": {
        "teamId": 224,
        "team": "Vitória SC",
        "shots": 12,
        "shotsOnGoal": 3,
        "possession": 44,
        "corners": 1,
        "yellowCards": 4,
        "redCards": null,
        "expectedGoals": 1.12
      },
      "statisticsChecked": true,
      "lineupsChecked": true,
      "injuriesChecked": true,
      "lineups": [
        {
          "teamId": 228,
          "team": "Sporting CP",
          "formation": "4-2-3-1",
          "coach": "Rui Borges",
          "starters": [
            "R. Silva",
            "G. Vagiannidis",
            "E. Quaresma",
            "G. Inacio",
            "M. Araujo",
            "S. Altimira",
            "I. Doumbia",
            "G. Catamo",
            "R. Zalazar",
            "F. Goncalves",
            "F. Ioannidis"
          ]
        },
        {
          "teamId": 224,
          "team": "Vitória SC",
          "formation": "4-2-3-1",
          "coach": "Tiago Margarido",
          "starters": [
            "O. Zych",
            "Maga",
            "O. Rivas Viondi",
            "Thiago Balieiro",
            "J. I. Mendes",
            "G. Nogueira",
            "Beni",
            "O. Camara",
            "Samu",
            "Gustavo",
            "A. Ndoye"
          ]
        }
      ],
      "injuries": []
    },
    {
      "fixtureId": 1575456,
      "date": "2026-08-15",
      "league": "PRIMEIRA_LIGA",
      "homeTeamId": 4724,
      "homeTeam": "Alverca",
      "awayTeamId": 15130,
      "awayTeam": "Estrela",
      "home": {
        "teamId": 4724,
        "team": "Alverca",
        "shots": 14,
        "shotsOnGoal": 4,
        "possession": 46,
        "corners": 2,
        "yellowCards": 2,
        "redCards": 1,
        "expectedGoals": 1.75
      },
      "away": {
        "teamId": 15130,
        "team": "Estrela",
        "shots": 10,
        "shotsOnGoal": 7,
        "possession": 54,
        "corners": 0,
        "yellowCards": 4,
        "redCards": 0,
        "expectedGoals": 1.29
      },
      "statisticsChecked": true,
      "lineupsChecked": true,
      "injuriesChecked": true,
      "lineups": [
        {
          "teamId": 4724,
          "team": "Alverca",
          "formation": "3-4-2-1",
          "coach": "Sergio Ferreira",
          "starters": [
            "Matheus Mendes",
            "S. Baseya",
            "Y. Bojang",
            "B. Meupiyou",
            "N. Touaizi",
            "D. Gui",
            "Ian Luccas",
            "I. James",
            "Chiquinho",
            "Figueiredo",
            "V. Semedo"
          ]
        },
        {
          "teamId": 15130,
          "team": "Estrela",
          "formation": "4-3-3",
          "coach": "Pepa",
          "starters": [
            "Leo Linck",
            "J. Encada",
            "Luan Patrick",
            "S. Lekovic",
            "Rafa Soares",
            "L. Zvonarek",
            "G. Doue",
            "Robinho",
            "A. Marcus",
            "L. Antonetti",
            "I. Stoica"
          ]
        }
      ],
      "injuries": []
    },
    {
      "fixtureId": 1558590,
      "date": "2026-08-15",
      "league": "BELGIAN_PRO_LEAGUE",
      "homeTeamId": 741,
      "homeTeam": "Cercle Brugge",
      "awayTeamId": 735,
      "awayTeam": "St. Truiden",
      "home": {
        "teamId": 741,
        "team": "Cercle Brugge",
        "shots": 26,
        "shotsOnGoal": 8,
        "possession": 55,
        "corners": 10,
        "yellowCards": 0,
        "redCards": null,
        "expectedGoals": 4.15
      },
      "away": {
        "teamId": 735,
        "team": "St. Truiden",
        "shots": 13,
        "shotsOnGoal": 7,
        "possession": 45,
        "corners": 3,
        "yellowCards": 3,
        "redCards": null,
        "expectedGoals": 2.04
      },
      "statisticsChecked": true,
      "lineupsChecked": true,
      "injuriesChecked": true,
      "lineups": [
        {
          "teamId": 741,
          "team": "Cercle Brugge",
          "formation": "3-4-2-1",
          "coach": "Lars Friis",
          "starters": [
            "G. Coucke",
            "E. Kakou",
            "C. Ravych",
            "G. Kondo",
            "G. Magnee",
            "L. Mondele",
            "I. Diaby",
            "K. Valy",
            "D. Vanzeir",
            "V. Martens",
            "S. Ngoura"
          ]
        },
        {
          "teamId": 735,
          "team": "St. Truiden",
          "formation": "",
          "coach": "",
          "starters": [
            "L. Kokubo",
            "T. Hata",
            "L. Mbe Soh",
            "V. Musliu",
            "J. Pupe",
            "N. Ishiwatari",
            "A. Sissako",
            "R. Vanwesemael",
            "R. Merlen",
            "I. Sebaoui",
            "F. Soelle"
          ]
        }
      ],
      "injuries": []
    },
    {
      "fixtureId": 1558591,
      "date": "2026-08-15",
      "league": "BELGIAN_PRO_LEAGUE",
      "homeTeamId": 1393,
      "homeTeam": "Union St. Gilloise",
      "awayTeamId": 600,
      "awayTeam": "Zulte Waregem",
      "home": {
        "teamId": 1393,
        "team": "Union St. Gilloise",
        "shots": null,
        "shotsOnGoal": null,
        "possession": null,
        "corners": null,
        "yellowCards": null,
        "redCards": null,
        "expectedGoals": null
      },
      "away": {
        "teamId": 600,
        "team": "Zulte Waregem",
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
          "teamId": 1393,
          "team": "Union St. Gilloise",
          "formation": "",
          "coach": "David Hubert",
          "starters": [
            "H. Koffi",
            "K. Mac Allister",
            "N. Havenaar",
            "F. Leysen",
            "L. Patris",
            "K. Van De Perre",
            "R. Schoofs",
            "Guilherme Smith",
            "R. Florucz",
            "B. Zeneli",
            "M. Fuseini"
          ]
        },
        {
          "teamId": 600,
          "team": "Zulte Waregem",
          "formation": "",
          "coach": "Michael Beale",
          "starters": [
            "L. Bostyn",
            "W. Paugain",
            "L. Lemoine",
            "J. Kiilerich",
            "Y. Cappelle",
            "T. Claes",
            "E. Lofolomo",
            "S. Ujka",
            "T. Hedl",
            "A. Ementa",
            "M. Ake"
          ]
        }
      ],
      "injuries": []
    },
    {
      "fixtureId": 1584370,
      "date": "2026-08-15",
      "league": "SUPER_LIG",
      "homeTeamId": 645,
      "homeTeam": "Galatasaray",
      "awayTeamId": 6343,
      "awayTeam": "Çorum FK",
      "home": {
        "teamId": 645,
        "team": "Galatasaray",
        "shots": 38,
        "shotsOnGoal": 13,
        "possession": 64,
        "corners": 8,
        "yellowCards": 1,
        "redCards": 0,
        "expectedGoals": 2.9
      },
      "away": {
        "teamId": 6343,
        "team": "Çorum FK",
        "shots": 8,
        "shotsOnGoal": 3,
        "possession": 36,
        "corners": 1,
        "yellowCards": 0,
        "redCards": 1,
        "expectedGoals": 0.61
      },
      "statisticsChecked": true,
      "lineupsChecked": true,
      "injuriesChecked": true,
      "lineups": [
        {
          "teamId": 645,
          "team": "Galatasaray",
          "formation": "4-2-3-1",
          "coach": "Okan Buruk",
          "starters": [
            "U. Cakir",
            "R. Sallai",
            "D. Sanchez",
            "A. Bardakci",
            "I. Jakobs",
            "L. Torreira",
            "Gabriel Sara",
            "L. Sane",
            "Y. Akgun",
            "B. Yilmaz",
            "V. Osimhen"
          ]
        },
        {
          "teamId": 6343,
          "team": "Çorum FK",
          "formation": "4-1-4-1",
          "coach": "Cagdas Cavus",
          "starters": [
            "Marcos Felipe",
            "G. Sazdagi",
            "Penetra",
            "H. Smolcic",
            "A. Borza",
            "B. Ozdemir",
            "S. Gurler",
            "M. Karlsbakk",
            "Fredy",
            "A. Kyziridis",
            "J. Ramirez"
          ]
        }
      ],
      "injuries": [
        {
          "fixtureId": 1584370,
          "teamId": 6343,
          "playerId": 61930,
          "player": "S. Osmanoglu",
          "type": "Missing Fixture",
          "reason": "Injury"
        }
      ]
    },
    {
      "fixtureId": 1607181,
      "date": "2026-08-15",
      "league": "UEL",
      "homeTeamId": 701,
      "homeTeam": "KI Klaksvik",
      "awayTeamId": 347,
      "awayTeam": "Lech Poznan",
      "home": {
        "teamId": 701,
        "team": "KI Klaksvik",
        "shots": 11,
        "shotsOnGoal": 3,
        "possession": 46,
        "corners": 4,
        "yellowCards": 4,
        "redCards": 0,
        "expectedGoals": null
      },
      "away": {
        "teamId": 347,
        "team": "Lech Poznan",
        "shots": 18,
        "shotsOnGoal": 9,
        "possession": 54,
        "corners": 9,
        "yellowCards": 2,
        "redCards": 0,
        "expectedGoals": null
      },
      "statisticsChecked": true,
      "lineupsChecked": true,
      "injuriesChecked": true,
      "lineups": [
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
            "M. Sinyan",
            "H. Hansson",
            "O. Ali",
            "A. Frederiksberg",
            "P. Klettskard",
            "Jean Carlos"
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
            "M. Skrzypczak",
            "M. Gurgul",
            "A. Kozubal",
            "P. Rodriguez",
            "P. Walemark",
            "L. Palma",
            "A. Sayyadmanesh",
            "M. Ishak"
          ]
        }
      ],
      "injuries": []
    },
    {
      "fixtureId": 1507028,
      "date": "2026-08-15",
      "league": "KLEAGUE1",
      "homeTeamId": 2759,
      "homeTeam": "Gwangju FC",
      "awayTeamId": 2764,
      "awayTeam": "Pohang Steelers",
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
          "teamId": 2759,
          "team": "Gwangju FC",
          "formation": "",
          "coach": "Jeong-kyu Lee",
          "starters": [
            "Kyeong-min Kim",
            "Sung-yun Kwon",
            "Teun van Grunsven",
            "Yeong-kyu Ahn",
            "João Pedro",
            "Chang-mu Shin",
            "Kyoung-Rok Choi",
            "Yong-jik Ri",
            "Min-seo Moon",
            "Hólmbert Aron Friðjónsson",
            "John Iredale"
          ]
        },
        {
          "teamId": 2764,
          "team": "Pohang Steelers",
          "formation": "",
          "coach": "Tae-Ha Park",
          "starters": [
            "Sung-min Hong",
            "Park Chan-Yong",
            "Min-kwang Jeon",
            "Ho-jin Kim",
            "Jeong-won Eo",
            "Sung-Yueng Ki",
            "Dong-jin Kim",
            "Wanderson",
            "Hwang Seo-woong",
            "Jakob Tranziska",
            "Han-min Jung"
          ]
        }
      ],
      "injuries": []
    },
    {
      "fixtureId": 1507029,
      "date": "2026-08-15",
      "league": "KLEAGUE1",
      "homeTeamId": 2761,
      "homeTeam": "Jeju United FC",
      "awayTeamId": 2748,
      "awayTeam": "FC Anyang",
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
          "teamId": 2761,
          "team": "Jeju United FC",
          "formation": "",
          "coach": "Sergio Costa",
          "starters": [
            "Dong-jun Kim",
            "In-su Yu",
            "Kwon Ki-Min",
            "Julien Celestine",
            "Woon Jeong",
            "Min-gyu Jang",
            "Shin Sang-Eun",
            "Chang-min Lee",
            "Italo",
            "Emerson Ramon",
            "Matheus Aiás"
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
            "Kim Jae-Hyun",
            "Matheus Oliveira",
            "Branislav Knežević",
            "Jung-hyun Kim",
            "Chae Hyun-woo",
            "Breno Herculano",
            "Ivan Jukić"
          ]
        }
      ],
      "injuries": []
    },
    {
      "fixtureId": 1507030,
      "date": "2026-08-15",
      "league": "KLEAGUE1",
      "homeTeamId": 2766,
      "homeTeam": "FC Seoul",
      "awayTeamId": 2750,
      "awayTeam": "Daejeon Citizen",
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
            "Soo-il Park",
            "Yazan Al-Arab",
            "Juan Antonio Ros",
            "Kim Jin-su",
            "Seung-Won Jeong",
            "Son Jeong-beom",
            "Hrvoje Babec",
            "Anderson Oliveira",
            "Lee Seung-mo",
            "Patryk Klimala"
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
            "Jo Seong-Kwon",
            "Anton Kryvotsiuk",
            "Myeong-jae Lee",
            "Won-Sang Um",
            "Kim Bong-Soo",
            "Yun-seong Kang",
            "Gustav Ludwigson",
            "Min-kyu Joo",
            "Masatoshi Ishida"
          ]
        }
      ],
      "injuries": []
    },
    {
      "fixtureId": 1510411,
      "date": "2026-08-15",
      "league": "KLEAGUE2",
      "homeTeamId": 2752,
      "homeTeam": "Busan I Park",
      "awayTeamId": 7087,
      "awayTeam": "Hwaseong",
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
      "lineups": [],
      "injuries": []
    },
    {
      "fixtureId": 1510414,
      "date": "2026-08-15",
      "league": "KLEAGUE2",
      "homeTeamId": 2765,
      "homeTeam": "Suwon Bluewings",
      "awayTeamId": 2756,
      "awayTeam": "Suwon City FC",
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
      "lineups": [],
      "injuries": []
    },
    {
      "fixtureId": 1510412,
      "date": "2026-08-15",
      "league": "KLEAGUE2",
      "homeTeamId": 7061,
      "homeTeam": "Cheongju",
      "awayTeamId": 2760,
      "awayTeam": "Jeonnam Dragons",
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
      "statisticsChecked": true,
      "lineupsChecked": true,
      "injuriesChecked": true,
      "lineups": [],
      "injuries": []
    },
    {
      "fixtureId": 1510413,
      "date": "2026-08-15",
      "league": "KLEAGUE2",
      "homeTeamId": 7076,
      "homeTeam": "Gimhae City",
      "awayTeamId": 2751,
      "awayTeam": "Gyeongnam FC",
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
      "fixtureId": 1606606,
      "date": "2026-08-15",
      "league": "J2LEAGUE",
      "homeTeamId": 4315,
      "homeTeam": "Blaublitz Akita",
      "awayTeamId": 4322,
      "awayTeam": "Kataller Toyama",
      "home": {
        "teamId": 4315,
        "team": "Blaublitz Akita",
        "shots": null,
        "shotsOnGoal": null,
        "possession": null,
        "corners": null,
        "yellowCards": null,
        "redCards": null,
        "expectedGoals": null
      },
      "away": {
        "teamId": 4322,
        "team": "Kataller Toyama",
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
      "fixtureId": 1606607,
      "date": "2026-08-15",
      "league": "J2LEAGUE",
      "homeTeamId": 7145,
      "homeTeam": "Tochigi City",
      "awayTeamId": 4326,
      "awayTeam": "Vanraure Hachinohe",
      "home": {
        "teamId": 7145,
        "team": "Tochigi City",
        "shots": null,
        "shotsOnGoal": null,
        "possession": null,
        "corners": null,
        "yellowCards": null,
        "redCards": null,
        "expectedGoals": null
      },
      "away": {
        "teamId": 4326,
        "team": "Vanraure Hachinohe",
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
      "fixtureId": 1606608,
      "date": "2026-08-15",
      "league": "J2LEAGUE",
      "homeTeamId": 4317,
      "homeTeam": "Fujieda MYFC",
      "awayTeamId": 7127,
      "awayTeam": "Iwaki",
      "home": {
        "teamId": 4317,
        "team": "Fujieda MYFC",
        "shots": null,
        "shotsOnGoal": null,
        "possession": null,
        "corners": null,
        "yellowCards": null,
        "redCards": null,
        "expectedGoals": null
      },
      "away": {
        "teamId": 7127,
        "team": "Iwaki",
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
      "fixtureId": 1606613,
      "date": "2026-08-15",
      "league": "J2LEAGUE",
      "homeTeamId": 284,
      "homeTeam": "Shonan Bellmare",
      "awayTeamId": 312,
      "awayTeam": "Montedio Yamagata",
      "home": {
        "teamId": 284,
        "team": "Shonan Bellmare",
        "shots": null,
        "shotsOnGoal": null,
        "possession": null,
        "corners": null,
        "yellowCards": null,
        "redCards": null,
        "expectedGoals": null
      },
      "away": {
        "teamId": 312,
        "team": "Montedio Yamagata",
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
      "fixtureId": 1606610,
      "date": "2026-08-15",
      "league": "J2LEAGUE",
      "homeTeamId": 286,
      "homeTeam": "Vegalta Sendai",
      "awayTeamId": 298,
      "awayTeam": "Oita Trinita",
      "home": {
        "teamId": 286,
        "team": "Vegalta Sendai",
        "shots": null,
        "shotsOnGoal": null,
        "possession": null,
        "corners": null,
        "yellowCards": null,
        "redCards": null,
        "expectedGoals": null
      },
      "away": {
        "teamId": 298,
        "team": "Oita Trinita",
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
      "fixtureId": 1606612,
      "date": "2026-08-15",
      "league": "J2LEAGUE",
      "homeTeamId": 308,
      "homeTeam": "Ventforet Kofu",
      "awayTeamId": 10409,
      "awayTeam": "Tegevajaro Miyazaki",
      "home": {
        "teamId": 308,
        "team": "Ventforet Kofu",
        "shots": null,
        "shotsOnGoal": null,
        "possession": null,
        "corners": null,
        "yellowCards": null,
        "redCards": null,
        "expectedGoals": null
      },
      "away": {
        "teamId": 10409,
        "team": "Tegevajaro Miyazaki",
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
      "fixtureId": 1606609,
      "date": "2026-08-15",
      "league": "J2LEAGUE",
      "homeTeamId": 311,
      "homeTeam": "Albirex Niigata",
      "awayTeamId": 279,
      "awayTeam": "Consadole Sapporo",
      "home": {
        "teamId": 311,
        "team": "Albirex Niigata",
        "shots": null,
        "shotsOnGoal": null,
        "possession": null,
        "corners": null,
        "yellowCards": null,
        "redCards": null,
        "expectedGoals": null
      },
      "away": {
        "teamId": 279,
        "team": "Consadole Sapporo",
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
      "fixtureId": 1606611,
      "date": "2026-08-15",
      "league": "J2LEAGUE",
      "homeTeamId": 10075,
      "homeTeam": "Imabari",
      "awayTeamId": 313,
      "awayTeam": "Omiya Ardija",
      "home": {
        "teamId": 10075,
        "team": "Imabari",
        "shots": null,
        "shotsOnGoal": null,
        "possession": null,
        "corners": null,
        "yellowCards": null,
        "redCards": null,
        "expectedGoals": null
      },
      "away": {
        "teamId": 313,
        "team": "Omiya Ardija",
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
      "fixtureId": 1607569,
      "date": "2026-08-14",
      "league": "UEL",
      "homeTeamId": 340,
      "homeTeam": "Gornik Zabrze",
      "awayTeamId": 651,
      "awayTeam": "Ferencvarosi TC",
      "home": {
        "teamId": 340,
        "team": "Gornik Zabrze",
        "shots": null,
        "shotsOnGoal": null,
        "possession": null,
        "corners": null,
        "yellowCards": null,
        "redCards": null,
        "expectedGoals": null
      },
      "away": {
        "teamId": 651,
        "team": "Ferencvarosi TC",
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
          "teamId": 340,
          "team": "Gornik Zabrze",
          "formation": "",
          "coach": "Michal Gasparik",
          "starters": [
            "P. Schulze",
            "M. Sacek",
            "R. Janicki",
            "Josema",
            "E. Janza",
            "K. Urbanski",
            "M. Dietz",
            "P. Bernardo",
            "Peter Federico",
            "E. Prekop",
            "M. Khlan"
          ]
        },
        {
          "teamId": 651,
          "team": "Ferencvarosi TC",
          "formation": "",
          "coach": "Balazs Borbely",
          "starters": [
            "D. Dibusz",
            "A. Osvath",
            "T. Raemaekers",
            "M. Gomez",
            "Cadu",
            "M. Corbu",
            "P. Rommens",
            "K. Zachariassen",
            "G. Kanichowsky",
            "Dele",
            "L. Joseph"
          ]
        }
      ],
      "injuries": []
    },
    {
      "fixtureId": 1607567,
      "date": "2026-08-14",
      "league": "UEL",
      "homeTeamId": 549,
      "homeTeam": "Beşiktaş",
      "awayTeamId": 3723,
      "awayTeam": "Hradec Králové",
      "home": {
        "teamId": 549,
        "team": "Beşiktaş",
        "shots": null,
        "shotsOnGoal": null,
        "possession": null,
        "corners": null,
        "yellowCards": null,
        "redCards": null,
        "expectedGoals": null
      },
      "away": {
        "teamId": 3723,
        "team": "Hradec Králové",
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
          "teamId": 549,
          "team": "Beşiktaş",
          "formation": "",
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
          "teamId": 3723,
          "team": "Hradec Králové",
          "formation": "",
          "coach": "David Horejs",
          "starters": [
            "A. Zadrazil",
            "J. Uhrincat",
            "F. Cihak",
            "F. Cech",
            "D. Ludvicek",
            "V. Darida",
            "S. Dancak",
            "D. Horak",
            "M. van Buren",
            "T. Sloncik",
            "O. Mihalik"
          ]
        }
      ],
      "injuries": []
    },
    {
      "fixtureId": 1607183,
      "date": "2026-08-14",
      "league": "UEL",
      "homeTeamId": 632,
      "homeTeam": "Universitatea Craiova",
      "awayTeamId": 1165,
      "awayTeam": "KuPS",
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
          "teamId": 632,
          "team": "Universitatea Craiova",
          "formation": "",
          "coach": "Filipe Coelho",
          "starters": [
            "L. Popescu",
            "A. Rus",
            "O. Romanchuk",
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
          "teamId": 1165,
          "team": "KuPS",
          "formation": "",
          "coach": "Miika Nuutinen",
          "starters": [
            "J. Kreidl",
            "A. Puukko",
            "B. Magassa",
            "K. Adams",
            "T. Hamalainen",
            "V. R. Gasc",
            "S. Touray",
            "T. Jyry",
            "P. Pennanen",
            "B. Armah",
            "J. J. Moreno Ciorciari"
          ]
        }
      ],
      "injuries": []
    },
    {
      "fixtureId": 1607182,
      "date": "2026-08-14",
      "league": "UEL",
      "homeTeamId": 3402,
      "homeTeam": "Omonia Nicosia",
      "awayTeamId": 667,
      "awayTeam": "Lincoln Red Imps FC",
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
          "teamId": 3402,
          "team": "Omonia Nicosia",
          "formation": "",
          "coach": "Henning Berg",
          "starters": [
            "Fabiano Freitas",
            "S. Coulibaly",
            "N. Panagiotou",
            "J. Balkovec",
            "L. Nego",
            "M. Maric",
            "M. Tankovic",
            "P. Andreou",
            "J. Montnor",
            "L. Diony",
            "Ewandro"
          ]
        },
        {
          "teamId": 667,
          "team": "Lincoln Red Imps FC",
          "formation": "",
          "coach": "Juan Bezares",
          "starters": [
            "Nauzet Santana",
            "T. Cardozo",
            "C. Rutjens",
            "B. Lopes",
            "E. Jolley",
            "Joe",
            "J. Eersteling",
            "N. Pinto",
            "F. Alvarez",
            "Y. Flalhi Idrissi",
            "M. Toledano"
          ]
        }
      ],
      "injuries": []
    },
    {
      "fixtureId": 1607184,
      "date": "2026-08-14",
      "league": "UEL",
      "homeTeamId": 278,
      "homeTeam": "Vikingur Reykjavik",
      "awayTeamId": 1012,
      "awayTeam": "FC Thun",
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
        "teamId": 1012,
        "team": "FC Thun",
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
          "formation": "",
          "coach": "Solvi Ottesen",
          "starters": [
            "A. Fridriksson",
            "K. Gunnarsson",
            "O. Ekroth",
            "G. Vatnhamar",
            "H. Gudjonsson",
            "A. Finnbogason",
            "G. Sigurdsson",
            "V. Andrason",
            "A. Thrandarson",
            "V. Ingimundarson",
            "S. Thordarson"
          ]
        },
        {
          "teamId": 1012,
          "team": "FC Thun",
          "formation": "",
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
            "M. Gutbub",
            "B. Labeau"
          ]
        }
      ],
      "injuries": []
    },
    {
      "fixtureId": 1607568,
      "date": "2026-08-14",
      "league": "UEL",
      "homeTeamId": 853,
      "homeTeam": "CSKA Sofia",
      "awayTeamId": 604,
      "awayTeam": "Maccabi Tel Aviv",
      "home": {
        "teamId": 853,
        "team": "CSKA Sofia",
        "shots": null,
        "shotsOnGoal": null,
        "possession": null,
        "corners": null,
        "yellowCards": null,
        "redCards": null,
        "expectedGoals": null
      },
      "away": {
        "teamId": 604,
        "team": "Maccabi Tel Aviv",
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
          "teamId": 853,
          "team": "CSKA Sofia",
          "formation": "",
          "coach": "Hristo Yanev",
          "starters": [
            "F. Lapoukhov",
            "Pastor",
            "T. Ivanov",
            "F. Rodriguez",
            "A. Yordanov",
            "J. Gbamin",
            "B. Jordao",
            "S. Sensi",
            "M. Ebong",
            "L. Godoy",
            "I. Pittas"
          ]
        },
        {
          "teamId": 604,
          "team": "Maccabi Tel Aviv",
          "formation": "",
          "coach": "Kenny Miller",
          "starters": [
            "O. Melika",
            "T. Asante",
            "M. Camara",
            "R. Shlomo",
            "R. Revivo",
            "D. Peretz",
            "I. Sissokho",
            "I. Shahar",
            "O. Davida",
            "E. Sokler",
            "H. Varela"
          ]
        }
      ],
      "injuries": []
    },
    {
      "fixtureId": 1598831,
      "date": "2026-08-14",
      "league": "UEL",
      "homeTeamId": 257,
      "homeTeam": "Rangers",
      "awayTeamId": 336,
      "awayTeam": "Jagiellonia",
      "home": {
        "teamId": 257,
        "team": "Rangers",
        "shots": null,
        "shotsOnGoal": null,
        "possession": null,
        "corners": null,
        "yellowCards": null,
        "redCards": null,
        "expectedGoals": null
      },
      "away": {
        "teamId": 336,
        "team": "Jagiellonia",
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
          "teamId": 257,
          "team": "Rangers",
          "formation": "",
          "coach": "Derek McInnes",
          "starters": [
            "I. Pandur",
            "D. Sterling",
            "E. Fernandez",
            "O. Makhanya",
            "D. Yokota",
            "N. Raskin",
            "D. Neil",
            "T. Aasgaard",
            "D. Gassama",
            "L. Shankland",
            "R. Naderi"
          ]
        },
        {
          "teamId": 336,
          "team": "Jagiellonia",
          "formation": "",
          "coach": "Adrian Siemieniec",
          "starters": [
            "S. Abramowicz",
            "N. Wojtuszek",
            "B. Vital",
            "Y. Kobayashi",
            "G. Montoia",
            "J. Imaz",
            "T. Romanczuk",
            "A. Klynge",
            "R. Conceicao",
            "N. Prelec",
            "K. Szmyt"
          ]
        }
      ],
      "injuries": []
    },
    {
      "fixtureId": 1607566,
      "date": "2026-08-14",
      "league": "UEL",
      "homeTeamId": 554,
      "homeTeam": "Anderlecht",
      "awayTeamId": 619,
      "awayTeam": "PAOK",
      "home": {
        "teamId": 554,
        "team": "Anderlecht",
        "shots": null,
        "shotsOnGoal": null,
        "possession": null,
        "corners": null,
        "yellowCards": null,
        "redCards": null,
        "expectedGoals": null
      },
      "away": {
        "teamId": 619,
        "team": "PAOK",
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
          "teamId": 554,
          "team": "Anderlecht",
          "formation": "",
          "coach": "Vitor Bruno",
          "starters": [
            "C. Coosemans",
            "A. Maamar",
            "G. Biancone",
            "L. Petrot",
            "M. N'Diaye",
            "E. Llansana",
            "M. Kana",
            "K. Nga",
            "L. Ambros",
            "M. Cvetkovic",
            "D. Sikan"
          ]
        },
        {
          "teamId": 619,
          "team": "PAOK",
          "formation": "",
          "coach": "Alessio Lisci",
          "starters": [
            "J. Pavlenka",
            "J. Kenny",
            "A. Elustondo",
            "G. Michailidis",
            "A. Baba",
            "C. Zafeiris",
            "B. Santamaria",
            "A. Zivkovic",
            "G. Konstantelias",
            "Taison",
            "A. Mythou"
          ]
        }
      ],
      "injuries": []
    },
    {
      "fixtureId": 1607570,
      "date": "2026-08-14",
      "league": "UEL",
      "homeTeamId": 254,
      "homeTeam": "Heart Of Midlothian",
      "awayTeamId": 211,
      "awayTeam": "Benfica",
      "home": {
        "teamId": 254,
        "team": "Heart Of Midlothian",
        "shots": null,
        "shotsOnGoal": null,
        "possession": null,
        "corners": null,
        "yellowCards": null,
        "redCards": null,
        "expectedGoals": null
      },
      "away": {
        "teamId": 211,
        "team": "Benfica",
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
          "teamId": 254,
          "team": "Heart Of Midlothian",
          "formation": "",
          "coach": "Wouter Vrancken",
          "starters": [
            "B. Reus",
            "J. Altena",
            "O. McEntee",
            "S. Findlay",
            "J. McCart",
            "B. Spittal",
            "T. Renaud",
            "C. Miller",
            "S. Guendouz",
            "J. McPake",
            "C. Braga"
          ]
        },
        {
          "teamId": 211,
          "team": "Benfica",
          "formation": "",
          "coach": "Marco Silva",
          "starters": [
            "S. Soares",
            "A. Dedic",
            "Manu",
            "C. Lenglet",
            "J. Neto",
            "R. Rios",
            "E. Barrenechea",
            "D. Lukebakio",
            "G. Sudakov",
            "A. Schjelderup",
            "J. Duran"
          ]
        }
      ],
      "injuries": []
    },
    {
      "fixtureId": 1606353,
      "date": "2026-08-14",
      "league": "UEL",
      "homeTeamId": 3327,
      "homeTeam": "Egnatia Rrogozhinë",
      "awayTeamId": 652,
      "awayTeam": "Shamrock Rovers",
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
          "teamId": 3327,
          "team": "Egnatia Rrogozhinë",
          "formation": "",
          "coach": "Nevil Dede",
          "starters": [
            "M. Dajsinani",
            "E. Sota",
            "E. Bitri",
            "A. Aleksi",
            "G. Jaime",
            "K. Loukili",
            "Fernando Medeiros",
            "A. Albanese",
            "E. Ndreca",
            "D. Adjessa",
            "I. Gruda"
          ]
        },
        {
          "teamId": 652,
          "team": "Shamrock Rovers",
          "formation": "",
          "coach": "Stephen Bradley",
          "starters": [
            "E. McGinty",
            "T. Sobowale",
            "R. Lopes",
            "E. Stevens",
            "J. Mulraney",
            "D. Watts",
            "M. Healy",
            "J. Byrne",
            "W. Fitzgerald",
            "G. Burke",
            "A. Greene"
          ]
        }
      ],
      "injuries": []
    },
    {
      "fixtureId": 1607170,
      "date": "2026-08-12",
      "league": "UCL",
      "homeTeamId": 664,
      "homeTeam": "Kairat Almaty",
      "awayTeamId": 646,
      "awayTeam": "Levski Sofia",
      "home": {
        "teamId": 664,
        "team": "Kairat Almaty",
        "shots": 20,
        "shotsOnGoal": 6,
        "possession": 56,
        "corners": 9,
        "yellowCards": 3,
        "redCards": null,
        "expectedGoals": null
      },
      "away": {
        "teamId": 646,
        "team": "Levski Sofia",
        "shots": 9,
        "shotsOnGoal": 2,
        "possession": 44,
        "corners": 4,
        "yellowCards": 4,
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
            "D. Kasabulat",
            "A. Shirobokov",
            "Lucas Africo",
            "L. Mata",
            "O. Baybek",
            "J. Oksanen",
            "A. Mrynskiy",
            "G. Mendonsa",
            "O. Jukkola",
            "M. Gual"
          ]
        },
        {
          "teamId": 646,
          "team": "Levski Sofia",
          "formation": "4-2-3-1",
          "coach": "Julio Velazquez",
          "starters": [
            "S. Vutsov",
            "A. Neves",
            "K. Dimitrov",
            "N. Serafimov",
            "A. Centelles",
            "G. Trdin",
            "M. Moubarik",
            "A. Oko-Flex",
            "Serginho",
            "Everton Bala",
            "Reinaldo"
          ]
        }
      ],
      "injuries": []
    },
    {
      "fixtureId": 1598827,
      "date": "2026-08-12",
      "league": "UCL",
      "homeTeamId": 327,
      "homeTeam": "Bodo/Glimt",
      "awayTeamId": 1393,
      "awayTeam": "Union St. Gilloise",
      "home": {
        "teamId": 327,
        "team": "Bodo/Glimt",
        "shots": 23,
        "shotsOnGoal": 9,
        "possession": 70,
        "corners": 10,
        "yellowCards": 2,
        "redCards": 0,
        "expectedGoals": null
      },
      "away": {
        "teamId": 1393,
        "team": "Union St. Gilloise",
        "shots": 19,
        "shotsOnGoal": 5,
        "possession": 30,
        "corners": 1,
        "yellowCards": 4,
        "redCards": 1,
        "expectedGoals": null
      },
      "statisticsChecked": true,
      "lineupsChecked": true,
      "injuriesChecked": true,
      "lineups": [
        {
          "teamId": 327,
          "team": "Bodo/Glimt",
          "formation": "4-3-3",
          "coach": "Kjetil Knutsen",
          "starters": [
            "N. Haikin",
            "F. Sjovold",
            "O. L. Bjortuft",
            "J. Gundersen",
            "F. Bjorkan",
            "S. Auklend",
            "P. Berg",
            "S. Fet",
            "O. Blomberg",
            "O. Brynhildsen",
            "J. Hauge"
          ]
        },
        {
          "teamId": 1393,
          "team": "Union St. Gilloise",
          "formation": "3-5-2",
          "coach": "David Hubert",
          "starters": [
            "V. Chambaere",
            "K. Mac Allister",
            "M. Sylla",
            "N. Havenaar",
            "L. Patris",
            "B. Zeneli",
            "K. Van De Perre",
            "A. Zorgane",
            "Guilherme Smith",
            "P. David",
            "D. Olaru"
          ]
        }
      ],
      "injuries": []
    },
    {
      "fixtureId": 1607172,
      "date": "2026-08-12",
      "league": "UCL",
      "homeTeamId": 13976,
      "homeTeam": "Sabah FA",
      "awayTeamId": 406,
      "awayTeam": "Aarhus",
      "home": {
        "teamId": 13976,
        "team": "Sabah FA",
        "shots": 29,
        "shotsOnGoal": 10,
        "possession": 50,
        "corners": 7,
        "yellowCards": 0,
        "redCards": null,
        "expectedGoals": null
      },
      "away": {
        "teamId": 406,
        "team": "Aarhus",
        "shots": 14,
        "shotsOnGoal": 5,
        "possession": 50,
        "corners": 4,
        "yellowCards": 3,
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
            "U. Rakhmonaliyev",
            "I. Lepinjica",
            "V. Simic",
            "A. Isayev",
            "J. Mickels",
            "O. Mbina"
          ]
        },
        {
          "teamId": 406,
          "team": "Aarhus",
          "formation": "3-1-4-2",
          "coach": "Jakob Poulsen",
          "starters": [
            "M. Hedenstad",
            "J. Andersen",
            "C. Rosler",
            "E. Kahl",
            "J. Jonsson",
            "R. Carstensen",
            "M. Knudsen",
            "K. Arnstad",
            "G. Links",
            "T. Bech",
            "J. Bogere"
          ]
        }
      ],
      "injuries": []
    },
    {
      "fixtureId": 1607171,
      "date": "2026-08-12",
      "league": "UCL",
      "homeTeamId": 3872,
      "homeTeam": "Kauno Žalgiris",
      "awayTeamId": 620,
      "awayTeam": "Dinamo Zagreb",
      "home": {
        "teamId": 3872,
        "team": "Kauno Žalgiris",
        "shots": null,
        "shotsOnGoal": 7,
        "possession": 61,
        "corners": 8,
        "yellowCards": 2,
        "redCards": 0,
        "expectedGoals": null
      },
      "away": {
        "teamId": 620,
        "team": "Dinamo Zagreb",
        "shots": null,
        "shotsOnGoal": 5,
        "possession": 39,
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
          "teamId": 3872,
          "team": "Kauno Žalgiris",
          "formation": "4-1-4-1",
          "coach": "Eivinas Cerniauskas",
          "starters": [
            "D. Mikelionis",
            "J. Moutachy",
            "A. Tolordava",
            "R. Lekiatas",
            "M. Konatar",
            "F. Baldassarra",
            "M. Burba",
            "A. Benchaib",
            "V. Slivka",
            "L. Krekovic",
            "Renan Oliveira"
          ]
        },
        {
          "teamId": 620,
          "team": "Dinamo Zagreb",
          "formation": "4-3-3",
          "coach": "Mario Kovacevic",
          "starters": [
            "I. Filipovic",
            "M. Valincic",
            "S. Dominguez",
            "S. McKenna",
            "M. Perez Vinlof",
            "L. Kacavenda",
            "J. Misic",
            "L. Stojkovic",
            "M. Lisica",
            "D. Beljo",
            "M. Orsic"
          ]
        }
      ],
      "injuries": []
    },
    {
      "fixtureId": 1598829,
      "date": "2026-08-12",
      "league": "UCL",
      "homeTeamId": 413,
      "homeTeam": "NEC Nijmegen",
      "awayTeamId": 553,
      "awayTeam": "Olympiakos Piraeus",
      "home": {
        "teamId": 413,
        "team": "NEC Nijmegen",
        "shots": 16,
        "shotsOnGoal": 7,
        "possession": 54,
        "corners": 3,
        "yellowCards": 2,
        "redCards": 0,
        "expectedGoals": null
      },
      "away": {
        "teamId": 553,
        "team": "Olympiakos Piraeus",
        "shots": 10,
        "shotsOnGoal": 2,
        "possession": 46,
        "corners": 4,
        "yellowCards": 4,
        "redCards": 1,
        "expectedGoals": null
      },
      "statisticsChecked": true,
      "lineupsChecked": true,
      "injuriesChecked": true,
      "lineups": [
        {
          "teamId": 413,
          "team": "NEC Nijmegen",
          "formation": "3-1-4-2",
          "coach": "Dick Schreuder",
          "starters": [
            "G. Crettaz",
            "T. Storm",
            "P. Sandler",
            "D. Fonville",
            "D. Nejasmic",
            "S. Ouaissa",
            "N. Lebreton",
            "D. Tadic",
            "C. Bischoff",
            "T. Chery",
            "B. Linssen"
          ]
        },
        {
          "teamId": 553,
          "team": "Olympiakos Piraeus",
          "formation": "4-2-3-1",
          "coach": "Luis Mendilibar Jose",
          "starters": [
            "B. Popovic",
            "Rodinei",
            "P. Retsos",
            "L. Pirola",
            "B. Onyemaechi",
            "D. Garcia",
            "S. Hezze",
            "G. Martins",
            "G. Sa",
            "Jota Silva",
            "A. El Kaabi"
          ]
        }
      ],
      "injuries": []
    },
    {
      "fixtureId": 1607169,
      "date": "2026-08-12",
      "league": "UCL",
      "homeTeamId": 598,
      "homeTeam": "FK Crvena Zvezda",
      "awayTeamId": 563,
      "awayTeam": "Hapoel Beer Sheva",
      "home": {
        "teamId": 598,
        "team": "FK Crvena Zvezda",
        "shots": null,
        "shotsOnGoal": 2,
        "possession": 4,
        "corners": 3,
        "yellowCards": 0,
        "redCards": 1,
        "expectedGoals": null
      },
      "away": {
        "teamId": 563,
        "team": "Hapoel Beer Sheva",
        "shots": null,
        "shotsOnGoal": 6,
        "possession": 96,
        "corners": 3,
        "yellowCards": 2,
        "redCards": 0,
        "expectedGoals": null
      },
      "statisticsChecked": true,
      "lineupsChecked": true,
      "injuriesChecked": true,
      "lineups": [
        {
          "teamId": 598,
          "team": "FK Crvena Zvezda",
          "formation": "4-2-3-1",
          "coach": "Dejan Stankovic",
          "starters": [
            "Matheus",
            "Seol Young-Woo",
            "D. Luckassen",
            "S. Erakovic",
            "N. Tiknizyan",
            "T. Elsnik",
            "R. Krunic",
            "O. Bukari",
            "V. Kostov",
            "Bruno Duarte",
            "J. Enem"
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
            "Miguel Vitor",
            "I. Rotman",
            "P. Amador",
            "E. Peretz",
            "Lucas Ventura",
            "N. Yehoshua",
            "J. East",
            "I. Zlatanovic",
            "Z. Ahmed"
          ]
        }
      ],
      "injuries": []
    },
    {
      "fixtureId": 1607173,
      "date": "2026-08-12",
      "league": "UCL",
      "homeTeamId": 656,
      "homeTeam": "Slovan Bratislava",
      "awayTeamId": 2240,
      "awayTeam": "Mjallby AIF",
      "home": {
        "teamId": 656,
        "team": "Slovan Bratislava",
        "shots": null,
        "shotsOnGoal": 4,
        "possession": 50,
        "corners": 2,
        "yellowCards": 3,
        "redCards": 0,
        "expectedGoals": null
      },
      "away": {
        "teamId": 2240,
        "team": "Mjallby AIF",
        "shots": null,
        "shotsOnGoal": 2,
        "possession": 50,
        "corners": 4,
        "yellowCards": 2,
        "redCards": 0,
        "expectedGoals": null
      },
      "statisticsChecked": true,
      "lineupsChecked": true,
      "injuriesChecked": true,
      "lineups": [
        {
          "teamId": 656,
          "team": "Slovan Bratislava",
          "formation": "4-1-4-1",
          "coach": "Yaya Toure",
          "starters": [
            "D. Takac",
            "C. Blackman",
            "K. Bajric",
            "S. Markovic",
            "S. Cruz",
            "P. Pokorny",
            "M. Kianga",
            "A. Mustafic",
            "R. Ibrahim",
            "S. Camara",
            "M. Kukharevych"
          ]
        },
        {
          "teamId": 2240,
          "team": "Mjallby AIF",
          "formation": "3-4-3",
          "coach": "Karl Aksum",
          "starters": [
            "R. Wallinder",
            "A. Iqbal",
            "L. Svanberg",
            "T. Pettersson",
            "V. Granath",
            "J. Gustavsson",
            "V. Gustafson",
            "I. Hoffmann",
            "J. Kjaer",
            "J. Bergstrom",
            "A. Samuelsen"
          ]
        }
      ],
      "injuries": []
    },
    {
      "fixtureId": 1605371,
      "date": "2026-08-12",
      "league": "UCL",
      "homeTeamId": 4360,
      "homeTeam": "Celje",
      "awayTeamId": 3683,
      "awayTeam": "Ararat-Armenia",
      "home": {
        "teamId": 4360,
        "team": "Celje",
        "shots": null,
        "shotsOnGoal": 8,
        "possession": 50,
        "corners": 12,
        "yellowCards": 5,
        "redCards": 0,
        "expectedGoals": null
      },
      "away": {
        "teamId": 3683,
        "team": "Ararat-Armenia",
        "shots": null,
        "shotsOnGoal": 3,
        "possession": 50,
        "corners": 9,
        "yellowCards": 3,
        "redCards": 0,
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
            "Z. Leban",
            "P. Sirvys",
            "D. Hrka",
            "A. Tutyskinas",
            "L. Koutris",
            "M. Kvesic",
            "M. Zabukovnik",
            "S. Seslar",
            "M. Ivansek",
            "A. Kucys",
            "M. Avdyli"
          ]
        },
        {
          "teamId": 3683,
          "team": "Ararat-Armenia",
          "formation": "4-3-3",
          "coach": "Tulipa",
          "starters": [
            "Joao Bravim",
            "Junior Julio",
            "B. R. Wilson Valdez",
            "A. Malis",
            "E. Grigoryan",
            "H. Oliveira",
            "K. Muradyan",
            "A. Tera",
            "A. Serobyan",
            "Sandro Lima",
            "Z. Banjaqui"
          ]
        }
      ],
      "injuries": []
    },
    {
      "fixtureId": 1607174,
      "date": "2026-08-12",
      "league": "UCL",
      "homeTeamId": 637,
      "homeTeam": "Sturm Graz",
      "awayTeamId": 611,
      "awayTeam": "Fenerbahçe",
      "home": {
        "teamId": 637,
        "team": "Sturm Graz",
        "shots": 19,
        "shotsOnGoal": 2,
        "possession": 50,
        "corners": 7,
        "yellowCards": 1,
        "redCards": null,
        "expectedGoals": null
      },
      "away": {
        "teamId": 611,
        "team": "Fenerbahçe",
        "shots": 11,
        "shotsOnGoal": 6,
        "possession": 50,
        "corners": 6,
        "yellowCards": 3,
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
            "A. Malic",
            "J. Mitchell",
            "P. Petrovic",
            "E. Soglo",
            "S. Seidl",
            "J. Gorenc Stankovic",
            "L. Weinhandl",
            "J. Hodl",
            "A. Kayombo",
            "S. Jatta"
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
            "A. Brown",
            "M. Guendouzi",
            "N. Kante",
            "M. Greenwood",
            "M. Asensio",
            "K. Akturkoglu",
            "Talisca"
          ]
        }
      ],
      "injuries": []
    },
    {
      "fixtureId": 1598828,
      "date": "2026-08-12",
      "league": "UCL",
      "homeTeamId": 80,
      "homeTeam": "Lyon",
      "awayTeamId": 628,
      "awayTeam": "Sparta Praha",
      "home": {
        "teamId": 80,
        "team": "Lyon",
        "shots": 19,
        "shotsOnGoal": 11,
        "possession": 56,
        "corners": 7,
        "yellowCards": 1,
        "redCards": 0,
        "expectedGoals": null
      },
      "away": {
        "teamId": 628,
        "team": "Sparta Praha",
        "shots": 6,
        "shotsOnGoal": 1,
        "possession": 44,
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
          "teamId": 80,
          "team": "Lyon",
          "formation": "4-2-3-1",
          "coach": "Paulo Fonseca",
          "starters": [
            "D. Greif",
            "A. Maitland-Niles",
            "R. Kluivert",
            "M. Niakhate",
            "Abner Vinicius",
            "T. Tessmann",
            "T. Morton",
            "E. Nuamah",
            "C. Tolisso",
            "M. Fofana",
            "L. Openda"
          ]
        },
        {
          "teamId": 628,
          "team": "Sparta Praha",
          "formation": "4-2-3-1",
          "coach": "Brian Priske",
          "starters": [
            "J. Surovcik",
            "M. Suchomel",
            "A. Sevinsky",
            "A. Sorensen",
            "M. Rynes",
            "R. Macek",
            "A. Irving",
            "J. Mercado",
            "A. Karabec",
            "J. Alcocer",
            "J. Brunes"
          ]
        }
      ],
      "injuries": []
    },
    {
      "fixtureId": 1607180,
      "date": "2026-08-12",
      "league": "UEL",
      "homeTeamId": 3502,
      "homeTeam": "Saburtalo",
      "awayTeamId": 5354,
      "awayTeam": "Larne",
      "home": {
        "teamId": 3502,
        "team": "Saburtalo",
        "shots": null,
        "shotsOnGoal": 5,
        "possession": 68,
        "corners": 11,
        "yellowCards": 4,
        "redCards": 0,
        "expectedGoals": null
      },
      "away": {
        "teamId": 5354,
        "team": "Larne",
        "shots": null,
        "shotsOnGoal": 1,
        "possession": 32,
        "corners": 1,
        "yellowCards": 3,
        "redCards": 0,
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
            "V. Selimovic",
            "G. Kobuladze",
            "A. Amisulashvili",
            "J. Jinjolava",
            "N. Dadiani",
            "G. Kutsia",
            "B. Kardava",
            "N. Sikharulashvili",
            "Z. Natchkebia",
            "V. Bedoshvili"
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
            "M. Ridley",
            "D. Bent",
            "A. Donnelly",
            "R. Doherty",
            "C. Gallagher",
            "S. Graham",
            "D. Sloan",
            "M. Gibson",
            "M. Lusty"
          ]
        }
      ],
      "injuries": []
    },
    {
      "fixtureId": 1567329,
      "date": "2026-08-12",
      "league": "ACL",
      "homeTeamId": 4220,
      "homeTeam": "Pakhtakor",
      "awayTeamId": 4532,
      "awayTeam": "Al Hussein",
      "home": {
        "teamId": 4220,
        "team": "Pakhtakor",
        "shots": null,
        "shotsOnGoal": null,
        "possession": null,
        "corners": null,
        "yellowCards": null,
        "redCards": null,
        "expectedGoals": null
      },
      "away": {
        "teamId": 4532,
        "team": "Al Hussein",
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
          "teamId": 4220,
          "team": "Pakhtakor",
          "formation": "4-2-3-1",
          "coach": "Kamoliddin Tadzhiev",
          "starters": [
            "Sandzhar Kuvvatov",
            "Sherzod Nasrullaev",
            "Muhammadrasul Abdumajidov",
            "Zaid Tahseen",
            "Dilshod Saitov",
            "Akmal Mozgovoy",
            "Abdurauf Buriev",
            "Bashar Resan",
            "Giovino Flamarion",
            "Dostonbek Khamdamov",
            "Aymen Hussein"
          ]
        },
        {
          "teamId": 4532,
          "team": "Al Hussein",
          "formation": "5-4-1",
          "coach": "Ney Franco",
          "starters": [
            "Yazeed Abu Laila",
            "Ahmad Assaf",
            "Saleem Obaid",
            "Yousef Abu Al Jazar",
            "Ali Ahmad Hajabi",
            "Mahmoud Deeb",
            "Aref Al-Haj",
            "Ahmad Haikal",
            "Yousef Qashi",
            "Mahmoud Al-Mardi",
            "Paul Komolafe"
          ]
        }
      ],
      "injuries": []
    },
    {
      "fixtureId": 1567327,
      "date": "2026-08-12",
      "league": "ACL",
      "homeTeamId": 2871,
      "homeTeam": "Al-Jazira",
      "awayTeamId": 2938,
      "awayTeam": "Al-Ittihad FC",
      "home": {
        "teamId": 2871,
        "team": "Al-Jazira",
        "shots": null,
        "shotsOnGoal": null,
        "possession": null,
        "corners": null,
        "yellowCards": null,
        "redCards": null,
        "expectedGoals": null
      },
      "away": {
        "teamId": 2938,
        "team": "Al-Ittihad FC",
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
          "teamId": 2871,
          "team": "Al-Jazira",
          "formation": "4-4-2",
          "coach": "Hussein Ammouta",
          "starters": [
            "Ali Khasif",
            "Mohammed Rabii",
            "Willyan Rocha",
            "Khalifa Al-Hammadi",
            "Rúben Amaral",
            "Bruno Oliveira",
            "Marcus Meloni",
            "Mamadou Coulibaly",
            "Milson",
            "Vinicius Mello",
            "Simon Banza"
          ]
        },
        {
          "teamId": 2938,
          "team": "Al-Ittihad FC",
          "formation": "4-2-3-1",
          "coach": "Sergio Conceicao",
          "starters": [
            "Predrag Rajković",
            "Jan-Carlo Simić",
            "Stephane Keller",
            "Danilo Pereira",
            "Faris Abdi",
            "Dion Lopy",
            "Houssem Aouar",
            "Moussa Diaby",
            "Farhah Ali Alshamrani",
            "Steven Bergwijn",
            "Youssef En-Nesyri"
          ]
        }
      ],
      "injuries": []
    },
    {
      "fixtureId": 1575453,
      "date": "2026-08-11",
      "league": "PRIMEIRA_LIGA",
      "homeTeamId": 227,
      "homeTeam": "Santa Clara",
      "awayTeamId": 225,
      "awayTeam": "Nacional",
      "home": {
        "teamId": 227,
        "team": "Santa Clara",
        "shots": 19,
        "shotsOnGoal": 7,
        "possession": 52,
        "corners": 4,
        "yellowCards": 2,
        "redCards": null,
        "expectedGoals": 1.43
      },
      "away": {
        "teamId": 225,
        "team": "Nacional",
        "shots": 10,
        "shotsOnGoal": 4,
        "possession": 48,
        "corners": 4,
        "yellowCards": 2,
        "redCards": null,
        "expectedGoals": 1.23
      },
      "statisticsChecked": true,
      "lineupsChecked": true,
      "injuriesChecked": true,
      "lineups": [
        {
          "teamId": 227,
          "team": "Santa Clara",
          "formation": "4-2-3-1",
          "coach": "Petit",
          "starters": [
            "Lucas Franca",
            "Diogo Calila",
            "S. Lima",
            "P. Pacheco",
            "Guilherme Romao",
            "P. Ferreira",
            "Daniel Borges",
            "Sorriso",
            "J. Tavares",
            "Vinicius Lopes",
            "G. Paciencia"
          ]
        },
        {
          "teamId": 225,
          "team": "Nacional",
          "formation": "",
          "coach": "",
          "starters": [
            "R. Marin",
            "Leo Santos",
            "Matheus Dias",
            "Ze Vitor",
            "Wesley Gasolina",
            "Liziero",
            "J. Silva",
            "M. Jensen",
            "M. Baeza",
            "Pablo Ruan",
            "Daniel Junior"
          ]
        }
      ],
      "injuries": []
    },
    {
      "fixtureId": 1567326,
      "date": "2026-08-11",
      "league": "ACL",
      "homeTeamId": 948,
      "homeTeam": "Adelaide United",
      "awayTeamId": 16400,
      "awayTeam": "Công An Nhân Dân",
      "home": {
        "teamId": 948,
        "team": "Adelaide United",
        "shots": null,
        "shotsOnGoal": null,
        "possession": null,
        "corners": null,
        "yellowCards": null,
        "redCards": null,
        "expectedGoals": null
      },
      "away": {
        "teamId": 16400,
        "team": "Công An Nhân Dân",
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
          "teamId": 948,
          "team": "Adelaide United",
          "formation": "4-3-3",
          "coach": "Airton Andrioli",
          "starters": [
            "Joshua Smits",
            "Bart Vriends",
            "Jay Barnett",
            "Panagiotis Kikianis",
            "Fabian Talladira",
            "Harry Crawford",
            "Ethan Alagich",
            "Ryan White",
            "Juan Muñiz",
            "Jonny Yull",
            "Craig Goodwin"
          ]
        },
        {
          "teamId": 16400,
          "team": "Công An Nhân Dân",
          "formation": "3-4-3",
          "coach": "Alexandre Polking",
          "starters": [
            "Nguyễn Filip",
            "Frans Putros",
            "Trần Đình Trọng",
            "Adou Leygley Minh",
            "Kevin Phạm Ba",
            "Stefan Mauk",
            "Damia Sabater",
            "Cao Pendant Quang Vinh",
            "David Henen",
            "Brayan Perea",
            "Alan Grafite"
          ]
        }
      ],
      "injuries": []
    },
    {
      "fixtureId": 1567328,
      "date": "2026-08-11",
      "league": "ACL",
      "homeTeamId": 2746,
      "homeTeam": "Gangwon FC",
      "awayTeamId": 293,
      "awayTeam": "Gamba Osaka",
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
        "teamId": 293,
        "team": "Gamba Osaka",
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
            "Hong Chul",
            "Jesse Sekidika",
            "You-Hyeon Lee",
            "Min-woo Seo",
            "Dae-won Kim",
            "Young-jun Goh",
            "Byeong-chan Choi"
          ]
        },
        {
          "teamId": 293,
          "team": "Gamba Osaka",
          "formation": "4-2-3-1",
          "coach": "Tomokazu Myojin",
          "starters": [
            "Rui Araki",
            "Shinya Nakano",
            "Ginjiro Ikegaya",
            "Shinnosuke Nakatani",
            "Ryo Hatsuse",
            "Rin Mito",
            "Shuto Abe",
            "Ryoya Yamashita",
            "Issam Jebali",
            "Takeru Kishimoto",
            "Deniz Hümmet"
          ]
        }
      ],
      "injuries": []
    },
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
