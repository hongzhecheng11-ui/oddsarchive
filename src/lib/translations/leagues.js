(function attachLeagueTranslations(root, factory) {
  const translations = factory();

  if (typeof module !== "undefined" && module.exports) {
    module.exports = translations;
  }

  if (root) {
    root.ODDS_ARCHIVE_TRANSLATIONS = root.ODDS_ARCHIVE_TRANSLATIONS || {};
    root.ODDS_ARCHIVE_TRANSLATIONS.leagues = translations;
  }
})(typeof window !== "undefined" ? window : globalThis, function createLeagueTranslations() {
  return {
    labels: {
      EPL: "EPL",
      LALIGA: "라리가",
      SERIEA: "세리에A",
      BUNDESLIGA: "분데스리가",
      LIGUE1: "리그앙",
      WORLDCUP: "월드컵",
      UCL: "챔피언스리그",
      UEL: "유로파리그",
      KLEAGUE1: "K리그1",
      J1LEAGUE: "J리그1",
      ACL: "AFC 챔피언스리그",
      WCQ: "월드컵 예선",
      INTL_FRIENDLIES: "국가대표 친선경기",
      "Premier League": "EPL",
      "English Premier League": "EPL",
      "La Liga": "라리가",
      "Primera Division": "라리가",
      "Serie A": "세리에A",
      Bundesliga: "분데스리가",
      "Ligue 1": "리그앙",
      "World Cup": "월드컵",
      "FIFA World Cup": "월드컵",
      "UEFA Champions League": "챔피언스리그",
      "Champions League": "챔피언스리그",
      "UEFA Europa League": "유로파리그",
      "Europa League": "유로파리그",
      "K League 1": "K리그1",
      "J1 League": "J리그1",
      "AFC Champions League": "AFC 챔피언스리그",
      "AFC Champions League Elite": "AFC 챔피언스리그",
      "FIFA World Cup Qualification": "월드컵 예선",
      "World Cup Qualification": "월드컵 예선",
      "International Friendlies": "국가대표 친선경기",
      Friendlies: "국가대표 친선경기",
      World: "세계",
      Europe: "유럽",
      Asia: "아시아"
    },
    categories: [
      {
        label: "인기",
        leagues: ["EPL", "UCL", "KLEAGUE1", "J1LEAGUE"]
      },
      {
        label: "유럽",
        leagues: ["EPL", "LALIGA", "SERIEA", "BUNDESLIGA", "LIGUE1", "UCL", "UEL"]
      },
      {
        label: "아시아",
        leagues: ["KLEAGUE1", "J1LEAGUE", "ACL"]
      },
      {
        label: "국가대항",
        leagues: ["WORLDCUP", "WCQ", "INTL_FRIENDLIES"]
      }
    ]
  };
});
