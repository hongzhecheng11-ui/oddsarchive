const SAMPLE_CSV_FILENAME = "sample-odds-archive.csv";
const SAMPLE_CSV = [
  "date,league,homeTeam,awayTeam,homeOdds,drawOdds,awayOdds,result,score",
  "2026-05-28,K League 1,FC Seoul,Suwon FC,1.85,3.40,4.10,H,2-1",
  "2026-05-29,EPL,Arsenal,Chelsea,1.95,3.30,3.80,UNKNOWN,"
].join("\n");
const CSV_HEADERS = ["date", "league", "homeTeam", "awayTeam", "homeOdds", "drawOdds", "awayOdds", "result", "score"];
const REQUIRED_CSV_HEADERS = CSV_HEADERS.filter((header) => header !== "score");
const CSV_HEADER_LINE = CSV_HEADERS.join(",");
const HEADER_ERROR = `CSV 헤더가 올바르지 않습니다. ${CSV_HEADER_LINE} 형식이 필요합니다.`;
const EMPTY_DATA_ERROR = "데이터 행이 없습니다. 샘플 CSV 형식에 맞는 행을 추가해주세요.";
const RESULT_VALUES = new Set(["H", "D", "A", "UNKNOWN"]);
const STORAGE_KEY = "oddsArchiveMatches";
const SAVED_SEARCHES_KEY = "oddsArchiveSavedSearches";
const SEARCH_HISTORY_KEY = "oddsArchiveSearchHistory";
const AUTO_UPDATE_KEY = "oddsArchiveAutoUpdate";
const LOCAL_ACCOUNT_KEY = "oddsArchiveLocalAccount";
const TODAY_MATCHES_KEY = "oddsArchiveTodayMatches";
const TOTO_ROUND_PACK_KEY = "oddsArchiveTotoRoundPack";
const PROTO_MARKET_PACK_KEY = "oddsArchiveProtoMarketPack";
const API_HISTORY_CACHE_KEY = "oddsArchiveApiHistoryCache";
const GUEST_SEARCH_TRIAL_KEY = "oddsArchiveGuestSearchTrialUsed";
const TEAM_PROFILE_RECENT_KEY = "oddsArchiveTeamProfileRecent";
const TEAM_PROFILE_RECENT_LIMIT = 6;
const MATCH_TABLE_COLUMN_COUNT = CSV_HEADERS.length + 1;
const SEARCH_RESULT_COLUMN_COUNT = CSV_HEADERS.length + 1;
const RESULT_PAGE_SIZE = 20;
const STORED_MATCH_RENDER_LIMIT = 100;
const LIVE_ODDS_ENDPOINT = "/api/live-odds";
const TELEMETRY_ENDPOINT = "/api/client-log";
const HOME_TODAY_MATCH_LIMIT = 8;
const DATE_FIXTURE_CACHE_TTL = 15 * 60 * 1000;
const DATE_FIXTURE_OFFSETS = [-3, -2, -1, 0, 1, 2, 3];
const DATE_FIXTURE_CATEGORY_LEAGUES = {
  POPULAR: ["EPL", "UCL", "KLEAGUE1", "J1LEAGUE", "WORLDCUP"],
  EUROPE: ["EPL", "CHAMPIONSHIP", "LALIGA", "SERIEA", "BUNDESLIGA", "LIGUE1", "EREDIVISIE", "PRIMEIRA_LIGA", "SCOTTISH_PREMIERSHIP", "BELGIAN_PRO_LEAGUE", "SUPER_LIG", "UCL", "UEL"],
  ASIA: ["KLEAGUE1", "KLEAGUE2", "J1LEAGUE", "J2LEAGUE", "ACL"],
  INTERNATIONAL: ["WORLDCUP", "WCQ", "INTL_FRIENDLIES"]
};
const HOME_TODAY_LEAGUE_PRIORITY = [
  "EPL",
  "LALIGA",
  "SERIEA",
  "BUNDESLIGA",
  "LIGUE1",
  "UCL",
  "UEL",
  "CHAMPIONSHIP",
  "EREDIVISIE",
  "PRIMEIRA_LIGA",
  "SCOTTISH_PREMIERSHIP",
  "BELGIAN_PRO_LEAGUE",
  "SUPER_LIG",
  "KLEAGUE1",
  "KLEAGUE2",
  "J1LEAGUE",
  "J2LEAGUE",
  "ACL",
  "WORLDCUP",
  "WCQ",
  "INTL_FRIENDLIES"
];
const HOME_TODAY_STRONG_TEAM_HINTS = [
  "arsenal",
  "chelsea",
  "liverpool",
  "tottenham",
  "manchester",
  "city",
  "united",
  "real madrid",
  "barcelona",
  "atletico",
  "bayern",
  "dortmund",
  "psg",
  "paris",
  "inter",
  "milan",
  "juventus",
  "napoli",
  "leverkusen",
  "seoul",
  "ulsan",
  "jeonbuk",
  "pohang",
  "yokohama",
  "kawasaki",
  "urawa",
  "kashima",
  "japan",
  "korea",
  "england",
  "france",
  "spain",
  "brazil",
  "argentina",
  "germany",
  "mexico"
];
const EXTERNAL_TRANSLATIONS = (() => {
  if (typeof window !== "undefined" && window.ODDS_ARCHIVE_TRANSLATIONS) return window.ODDS_ARCHIVE_TRANSLATIONS;
  if (typeof require !== "undefined") {
    try {
      return {
        leagues: require("./src/lib/translations/leagues.js"),
        teams: require("./src/lib/translations/teams.js")
      };
    } catch (_error) {
      return {};
    }
  }
  return {};
})();
const IS_DEVELOPMENT_MODE = (() => {
  if (typeof process !== "undefined" && process.env?.NODE_ENV === "development") return true;
  if (typeof location !== "undefined") return ["localhost", "127.0.0.1"].includes(location.hostname);
  return false;
})();
const TELEMETRY_LIBRARY = (() => {
  if (typeof window !== "undefined" && window.ODDS_ARCHIVE_TELEMETRY) return window.ODDS_ARCHIVE_TELEMETRY;
  if (typeof require !== "undefined") {
    try {
      return require("./src/lib/telemetry.js");
    } catch (_error) {
      return {};
    }
  }
  return {};
})();
const appTelemetry = typeof TELEMETRY_LIBRARY.createTelemetry === "function"
  ? TELEMETRY_LIBRARY.createTelemetry({
    endpoint: TELEMETRY_ENDPOINT,
    enabled: typeof location !== "undefined" && location.protocol === "https:" && !IS_DEVELOPMENT_MODE
  })
  : null;
const FAVORITE_SYNC_LIBRARY = (() => {
  if (typeof window !== "undefined" && window.ODDS_ARCHIVE_FAVORITE_SYNC) return window.ODDS_ARCHIVE_FAVORITE_SYNC;
  if (typeof require !== "undefined") {
    try {
      return require("./src/lib/favorite-sync.js");
    } catch (_error) {
      return {};
    }
  }
  return {};
})();
const ANALYSIS_SENTENCE_LIBRARY = (() => {
  if (typeof window !== "undefined" && window.ODDS_ARCHIVE_ANALYSIS_SENTENCES) return window.ODDS_ARCHIVE_ANALYSIS_SENTENCES;
  if (typeof require !== "undefined") {
    try {
      return require("./src/lib/analysis-sentences.js");
    } catch (_error) {
      return {};
    }
  }
  return {};
})();
const warnedMissingTeamLabels = new Set();
let currentValidRows = [];
let memoryStoredMatches = [];
let memorySavedSearches = [];
let memorySearchHistory = [];
let activeFavoriteAccountId = "";
let activeAccountFavoriteRecords = [];
let cloudAccountService = null;
let cloudAccountLoadPromise = null;
let cloudAccountLastFailureAt = 0;
let cloudAccountLastError = null;
const CLOUD_ACCOUNT_RETRY_COOLDOWN_MS = 5000;
let cloudAccountState = "local";
let cloudAccountIsAdmin = false;
let adminMemberStatistics = null;
let adminMemberStatisticsOwnerId = "";
let adminMemberStatisticsLoadPromise = null;
let guestAccessGateRequested = false;
let memoryGuestSearchTrialUsed = false;
let memoryAutoUpdateState = null;
let memoryLocalAccount = null;
let memoryTodayMatches = [];
let memoryApiHistoryCache = {};
let currentOddsSearchResults = [];
let visibleOddsSearchCount = RESULT_PAGE_SIZE;
let currentTeamMatchResults = [];
let visibleTeamMatchCount = RESULT_PAGE_SIZE;
let activeOddsSearchSource = null;
let homeTodayMatches = [];
let homeTodayLastUpdatedAt = "";
let homeTodayLoadStarted = false;
let selectedFixtureDate = "";
let selectedFixtureCategory = "ALL";
let selectedFixtureQuery = "";
let dateFixtureRequestId = 0;
const dateFixtureCache = new Map();
let matchDetailReturnState = null;
const matchDetailAnalysisCache = new Map();
let cachedDefaultPackRows = null;
let cachedBaseMatches = null;
let cachedSearchableMatches = null;
let footballDataPackLoadPromise = null;
const matchContextProfileCache = new Map();
const todayMatchAnalysisCache = new Map();
const upsetCandidateAnalysisCache = new Map();
let homeTodayAnalysisRenderVersion = 0;

const CSV_HEADER_ALIASES = {
  date: ["date", "matchdate", "gamedate", "날짜", "경기날짜", "일자"],
  league: ["league", "competition", "div", "division", "리그", "대회"],
  homeTeam: ["hometeam", "home", "home_team", "홈팀", "홈", "홈팀명"],
  awayTeam: ["awayteam", "away", "away_team", "원정팀", "원정", "어웨이팀", "원정팀명"],
  homeOdds: ["homeodds", "homeodd", "homewinodds", "home_win_odds", "b365h", "홈승배당", "홈배당", "홈승", "홈"],
  drawOdds: ["drawodds", "drawodd", "draw", "b365d", "무승부배당", "무배당", "무승부", "무"],
  awayOdds: ["awayodds", "awayodd", "awaywinodds", "away_win_odds", "b365a", "원정승배당", "원정배당", "원정승", "어웨이승"],
  result: ["result", "outcome", "ftr", "결과", "경기결과"],
  score: ["score", "스코어", "점수", "경기스코어"]
};

const FOOTBALL_DATA_HEADERS = ["Div", "Date", "HomeTeam", "AwayTeam", "FTHG", "FTAG", "FTR", "B365H", "B365D", "B365A"];
const FOOTBALL_DATA_NOTICE = "Football-Data 형식 CSV를 감지하여 변환했습니다.";
const BUILT_IN_EPL_2025_2026_CSV = [
  "Div,Date,HomeTeam,AwayTeam,FTHG,FTAG,FTR,B365H,B365D,B365A",
  "E0,16/08/2025,Liverpool,Bournemouth,,,,1.36,5.25,7.50",
  "E0,16/08/2025,Aston Villa,Newcastle,,,,2.35,3.40,3.00",
  "E0,16/08/2025,Tottenham,Burnley,,,,1.50,4.50,6.00",
  "E0,17/08/2025,Chelsea,Crystal Palace,,,,1.55,4.20,5.75",
  "E0,17/08/2025,Man United,Arsenal,,,,2.80,3.40,2.45",
  "E0,23/08/2025,Man City,Tottenham,,,,1.45,4.75,6.50",
  "E0,23/08/2025,Arsenal,Leeds,,,,1.28,5.75,10.00",
  "E0,24/08/2025,Everton,Brighton,,,,2.70,3.25,2.60",
  "E0,24/08/2025,Fulham,Man United,,,,3.80,3.60,1.95",
  "E0,25/08/2025,Newcastle,Liverpool,,,,2.90,3.50,2.35",
  "E0,30/08/2025,Chelsea,Fulham,,,,1.50,4.33,6.25",
  "E0,30/08/2025,Wolves,Everton,,,,2.55,3.20,2.80"
].join("\n");
const DEFAULT_DATA_SOURCES = {
  EPL: {
    "2020-2026": {
      label: "EPL 2020-2026 데이터팩",
      url: "https://www.football-data.co.uk/englandm.php",
      packLeague: "EPL",
      packSeasonCodes: ["2021", "2122", "2223", "2324", "2425", "2526"]
    },
    "2025-2026": {
      label: "EPL 2025-2026",
      url: "https://www.football-data.co.uk/mmz4281/2526/E0.csv",
      embeddedCsv: BUILT_IN_EPL_2025_2026_CSV
    }
  }
};
const DEFAULT_DATA_PACK_LEAGUES = {
  EPL: { label: "EPL", url: "https://www.football-data.co.uk/englandm.php" },
  LALIGA: { label: "라리가", url: "https://www.football-data.co.uk/spainm.php" },
  SERIEA: { label: "세리에A", url: "https://www.football-data.co.uk/italym.php" },
  BUNDESLIGA: { label: "분데스리가", url: "https://www.football-data.co.uk/germanym.php" },
  LIGUE1: { label: "리그앙", url: "https://www.football-data.co.uk/francem.php" }
};
const FIVE_MAJOR_LEAGUES = ["EPL", "LALIGA", "SERIEA", "BUNDESLIGA", "LIGUE1"];
const DEFAULT_DATA_PACK_2019_SEASONS = ["1920", "2021", "2122", "2223", "2324", "2425", "2526"];
const DEFAULT_DATA_PACK_SEASONS = ["2021", "2122", "2223", "2324", "2425", "2526"];
const LEAGUE_NAME_LABELS = {
  ...(EXTERNAL_TRANSLATIONS.leagues?.labels || {}),
  "World Cup": "월드컵",
  FIFA: "FIFA",
  World: "세계",
  USA: "미국",
  Chile: "칠레"
};
const ENGLISH_LEAGUE_LABELS = {
  EPL: "EPL",
  LALIGA: "La Liga",
  SERIEA: "Serie A",
  BUNDESLIGA: "Bundesliga",
  LIGUE1: "Ligue 1",
  WORLDCUP: "World Cup",
  UCL: "Champions League",
  UEL: "Europa League",
  CHAMPIONSHIP: "EFL Championship",
  EREDIVISIE: "Eredivisie",
  PRIMEIRA_LIGA: "Primeira Liga",
  SCOTTISH_PREMIERSHIP: "Scottish Premiership",
  BELGIAN_PRO_LEAGUE: "Belgian Pro League",
  SUPER_LIG: "Super Lig",
  KLEAGUE1: "K League 1",
  KLEAGUE2: "K League 2",
  J1LEAGUE: "J1 League",
  J2LEAGUE: "J2 League",
  ACL: "AFC Champions League",
  WCQ: "World Cup Qualifiers",
  INTL_FRIENDLIES: "International Friendlies"
};
const TEAM_NAME_LABELS = {
  ...(EXTERNAL_TRANSLATIONS.teams?.labels || {}),
  Arsenal: "아스널",
  Chelsea: "첼시",
  Liverpool: "리버풀",
  "Man City": "맨시티",
  "Man United": "맨유",
  Tottenham: "토트넘",
  Everton: "에버턴",
  Newcastle: "뉴캐슬",
  "Aston Villa": "애스턴 빌라",
  Wolves: "울버햄튼",
  Brighton: "브라이튼",
  "West Ham": "웨스트햄",
  "Crystal Palace": "크리스탈 팰리스",
  Fulham: "풀럼",
  Bournemouth: "본머스",
  Brentford: "브렌트퍼드",
  "Nott'm Forest": "노팅엄 포레스트",
  Burnley: "번리",
  Ipswich: "입스위치",
  Leeds: "리즈",
  Leicester: "레스터",
  Luton: "루턴 타운",
  Norwich: "노리치",
  "Sheffield United": "셰필드 유나이티드",
  Southampton: "사우샘프턴",
  Sunderland: "선덜랜드",
  Watford: "왓포드",
  "West Brom": "웨스트 브로미치",
  Celta: "셀타 비고",
  "Ath Bilbao": "아틀레틱 빌바오",
  Osasuna: "오사수나",
  Betis: "레알 베티스",
  Sociedad: "레알 소시에다드",
  Villarreal: "비야레알",
  Valencia: "발렌시아",
  Getafe: "헤타페",
  "Real Madrid": "레알 마드리드",
  "Ath Madrid": "아틀레티코 마드리드",
  Sevilla: "세비야",
  Barcelona: "바르셀로나",
  Alaves: "알라베스",
  Mallorca: "마요르카",
  Vallecano: "라요 바예카노",
  Cadiz: "카디스",
  Elche: "엘체",
  Espanol: "에스파뇰",
  Girona: "지로나",
  Granada: "그라나다",
  Valladolid: "바야돌리드",
  Levante: "레반테",
  Almeria: "알메리아",
  "Las Palmas": "라스 팔마스",
  Eibar: "에이바르",
  Huesca: "우에스카",
  Leganes: "레가네스",
  Oviedo: "오비에도",
  Fiorentina: "피오렌티나",
  Torino: "토리노",
  Verona: "베로나",
  Roma: "로마",
  Napoli: "나폴리",
  Juventus: "유벤투스",
  Milan: "AC 밀란",
  Bologna: "볼로냐",
  Atalanta: "아탈란타",
  Lazio: "라치오",
  Inter: "인터 밀란",
  Udinese: "우디네세",
  Genoa: "제노아",
  Sassuolo: "사수올로",
  Cagliari: "칼리아리",
  Empoli: "엠폴리",
  Lecce: "레체",
  Parma: "파르마",
  Sampdoria: "삼프도리아",
  Spezia: "스페치아",
  Salernitana: "살레르니타나",
  Monza: "몬차",
  Venezia: "베네치아",
  Cremonese: "크레모네세",
  Como: "코모",
  Crotone: "크로토네",
  Benevento: "베네벤토",
  Frosinone: "프로시노네",
  Pisa: "피사",
  "Bayern Munich": "바이에른 뮌헨",
  "Ein Frankfurt": "프랑크푸르트",
  Hoffenheim: "호펜하임",
  Stuttgart: "슈투트가르트",
  Freiburg: "프라이부르크",
  "Union Berlin": "우니온 베를린",
  Augsburg: "아우크스부르크",
  Dortmund: "도르트문트",
  "M'gladbach": "묀헨글라트바흐",
  "RB Leipzig": "라이프치히",
  Mainz: "마인츠",
  Wolfsburg: "볼프스부르크",
  Leverkusen: "레버쿠젠",
  "FC Koln": "쾰른",
  "Werder Bremen": "베르더 브레멘",
  Bochum: "보훔",
  Hertha: "헤르타 베를린",
  Heidenheim: "하이덴하임",
  "Schalke 04": "샬케 04",
  Bielefeld: "빌레펠트",
  "St Pauli": "장크트 파울리",
  "Greuther Furth": "그로이터 퓌르트",
  Darmstadt: "다름슈타트",
  "Holstein Kiel": "홀슈타인 킬",
  Hamburg: "함부르크",
  Lille: "릴",
  Rennes: "렌",
  Monaco: "모나코",
  Strasbourg: "스트라스부르",
  Brest: "브레스트",
  Nice: "니스",
  Lens: "랑스",
  Lyon: "리옹",
  Marseille: "마르세유",
  "Paris SG": "파리 생제르맹",
  Nantes: "낭트",
  Angers: "앙제",
  Reims: "랭스",
  Lorient: "로리앙",
  Montpellier: "몽펠리에",
  Metz: "메스",
  Toulouse: "툴루즈",
  "St Etienne": "생테티엔",
  Clermont: "클레르몽",
  Auxerre: "오세르",
  "Le Havre": "르아브르",
  Bordeaux: "보르도",
  Troyes: "트루아",
  Dijon: "디종",
  Nimes: "님",
  Ajaccio: "아작시오",
  "Paris FC": "파리 FC",
  Argentina: "아르헨티나",
  Australia: "호주",
  Austria: "오스트리아",
  Belgium: "벨기에",
  Brazil: "브라질",
  Cameroon: "카메룬",
  Canada: "캐나다",
  Chile: "칠레",
  Colombia: "콜롬비아",
  "Costa Rica": "코스타리카",
  "Congo DR": "콩고민주공화국",
  "DR Congo": "콩고민주공화국",
  Croatia: "크로아티아",
  Denmark: "덴마크",
  Ecuador: "에콰도르",
  Egypt: "이집트",
  England: "잉글랜드",
  France: "프랑스",
  Germany: "독일",
  Ghana: "가나",
  Iran: "이란",
  Italy: "이탈리아",
  Japan: "일본",
  "Korea Republic": "대한민국",
  "South Korea": "대한민국",
  Korea: "대한민국",
  Mexico: "멕시코",
  Morocco: "모로코",
  Netherlands: "네덜란드",
  Nigeria: "나이지리아",
  Norway: "노르웨이",
  Paraguay: "파라과이",
  Peru: "페루",
  Poland: "폴란드",
  Portugal: "포르투갈",
  Qatar: "카타르",
  Romania: "루마니아",
  Russia: "러시아",
  "Saudi Arabia": "사우디아라비아",
  Scotland: "스코틀랜드",
  Senegal: "세네갈",
  Serbia: "세르비아",
  Spain: "스페인",
  Sweden: "스웨덴",
  Switzerland: "스위스",
  Tunisia: "튀니지",
  Turkey: "튀르키예",
  Turkiye: "튀르키예",
  Ukraine: "우크라이나",
  Uruguay: "우루과이",
  USA: "미국",
  "United States": "미국",
  Wales: "웨일스"
};

const TEAM_TRANSLATION_ALIAS_LABELS = Object.entries(EXTERNAL_TRANSLATIONS.teams?.aliases || {}).reduce((labels, [displayName, aliases]) => {
  (Array.isArray(aliases) ? aliases : []).forEach((alias) => {
    labels[alias] = displayName;
  });
  return labels;
}, {});

const TEAM_TRANSLATION_ENGLISH_LABELS = Object.entries(TEAM_NAME_LABELS).reduce((labels, [englishName, koreanName]) => {
  const normalizedKoreanName = getNormalizedLabelKey(koreanName);
  if (normalizedKoreanName && !labels[normalizedKoreanName]) labels[normalizedKoreanName] = englishName;
  return labels;
}, {});
Object.entries(TEAM_TRANSLATION_ALIAS_LABELS).forEach(([alias, displayName]) => {
  const normalizedDisplayName = getNormalizedLabelKey(displayName);
  if (normalizedDisplayName && !TEAM_TRANSLATION_ENGLISH_LABELS[normalizedDisplayName]) {
    TEAM_TRANSLATION_ENGLISH_LABELS[normalizedDisplayName] = alias;
  }
});
// teams.js 에만 있는 팀도 한글에서 영문으로 되돌릴 수 있어야 한다.
// 앞의 두 출처를 덮어쓰지 않으므로 기존 표기가 우선한다.
Object.entries(EXTERNAL_TRANSLATIONS.teams?.labels || {}).forEach(([englishName, koreanName]) => {
  const normalizedKoreanName = getNormalizedLabelKey(koreanName);
  if (normalizedKoreanName && !TEAM_TRANSLATION_ENGLISH_LABELS[normalizedKoreanName]) {
    TEAM_TRANSLATION_ENGLISH_LABELS[normalizedKoreanName] = englishName;
  }
});

function getNormalizedLabelKey(value) {
  return String(value || "")
    .trim()
    .toLowerCase()
    .replace(/[\s_\-.'’]/g, "");
}

function getTeamTranslationLabel(teamName, language = "ko") {
  const originalName = String(teamName || "").trim();
  if (!originalName) return "";
  if (language !== "ko") {
    const englishName = TEAM_TRANSLATION_ENGLISH_LABELS[getNormalizedLabelKey(originalName)];
    return englishName || originalName;
  }
  if (Object.values(EXTERNAL_TRANSLATIONS.teams?.labels || {}).includes(originalName)) return originalName;

  const directLabel = EXTERNAL_TRANSLATIONS.teams?.labels?.[originalName] || TEAM_TRANSLATION_ALIAS_LABELS[originalName];
  if (directLabel) return directLabel;

  const normalizedName = getNormalizedLabelKey(originalName);
  const externalLabelEntry = Object.entries(EXTERNAL_TRANSLATIONS.teams?.labels || {}).find(([englishName]) => getNormalizedLabelKey(englishName) === normalizedName);
  if (externalLabelEntry) return externalLabelEntry[1];

  const aliasEntry = Object.entries(TEAM_TRANSLATION_ALIAS_LABELS).find(([alias]) => getNormalizedLabelKey(alias) === normalizedName);
  return aliasEntry ? aliasEntry[1] : "";
}

// 팀명 사전은 로드 후 변경되지 않으므로 이름별 결과를 재사용한다.
const TEAM_NAME_STORAGE_CACHE = new Map();

function resolveTeamNameForStorage(originalName) {
  const translatedLabel = getTeamTranslationLabel(originalName);
  if (translatedLabel) return translatedLabel;
  if (Object.values(TEAM_NAME_LABELS).includes(originalName)) return originalName;

  const exactLabel = TEAM_NAME_LABELS[originalName];
  if (exactLabel) return exactLabel;

  const normalizedName = getNormalizedLabelKey(originalName);
  const matchedEntry = Object.entries(TEAM_NAME_LABELS).find(([englishName]) => getNormalizedLabelKey(englishName) === normalizedName);
  return matchedEntry ? matchedEntry[1] : originalName;
}

function normalizeTeamNameForStorage(teamName) {
  const originalName = String(teamName || "").trim();
  if (!originalName) return "";
  const cached = TEAM_NAME_STORAGE_CACHE.get(originalName);
  if (cached !== undefined) return cached;

  const resolved = resolveTeamNameForStorage(originalName);
  TEAM_NAME_STORAGE_CACHE.set(originalName, resolved);
  return resolved;
}

function maybeWarnMissingTeamLabel(teamName) {
  const originalName = String(teamName || "").trim();
  if (!IS_DEVELOPMENT_MODE || !originalName) return;
  if (Object.values(TEAM_NAME_LABELS).includes(originalName)) return;
  if (TEAM_NAME_LABELS[originalName] || getTeamTranslationLabel(originalName)) return;

  const normalizedName = getNormalizedLabelKey(originalName);
  const hasMatch = Object.keys(TEAM_NAME_LABELS).some((englishName) => getNormalizedLabelKey(englishName) === normalizedName);
  if (hasMatch || warnedMissingTeamLabels.has(originalName)) return;

  warnedMissingTeamLabels.add(originalName);
  if (typeof console !== "undefined" && typeof console.warn === "function") {
    console.warn(`[OddsArchive] Missing team translation: ${originalName}`);
  }
}

function getMissingTeamNames() {
  return [...warnedMissingTeamLabels].sort((left, right) => left.localeCompare(right));
}

function invalidateSearchableMatchesCache() {
  cachedSearchableMatches = null;
  matchContextProfileCache.clear();
  todayMatchAnalysisCache.clear();
  upsetCandidateAnalysisCache.clear();
}

function setPendingValidRows(rows) {
  currentValidRows = Array.isArray(rows) ? rows : [];
  invalidateSearchableMatchesCache();
  setSaveButtonState(currentValidRows);
}

function getSafeLocalStorage() {
  try {
    if (typeof window === "undefined") return null;
    const storage = window.localStorage;
    const testKey = "__oddsArchiveStorageTest";
    storage.setItem(testKey, "1");
    storage.removeItem(testKey);
    return storage;
  } catch (_error) {
    return null;
  }
}

function getSafeSessionStorage() {
  try {
    if (typeof window === "undefined") return null;
    const storage = window.sessionStorage;
    const testKey = "__oddsArchiveStorageTest";
    storage.setItem(testKey, "1");
    storage.removeItem(testKey);
    return storage;
  } catch (_error) {
    return null;
  }
}

function getWindowNameStore() {
  if (typeof window === "undefined") return {};

  try {
    const parsed = JSON.parse(window.name || "{}");
    return parsed && typeof parsed === "object" && parsed.__oddsArchiveTabStore
      ? parsed.__oddsArchiveTabStore
      : {};
  } catch (_error) {
    return {};
  }
}

function setWindowNameStore(store) {
  if (typeof window === "undefined") return;
  window.name = JSON.stringify({ __oddsArchiveTabStore: store && typeof store === "object" ? store : {} });
}

function getSafeWindowNameStorage() {
  try {
    if (typeof window === "undefined") return null;
    const testKey = "__oddsArchiveStorageTest";
    const store = getWindowNameStore();
    store[testKey] = "1";
    delete store[testKey];
    setWindowNameStore(store);
    return {
      getItem(key) {
        const currentStore = getWindowNameStore();
        return Object.prototype.hasOwnProperty.call(currentStore, key) ? currentStore[key] : null;
      },
      setItem(key, value) {
        const currentStore = getWindowNameStore();
        currentStore[key] = String(value);
        setWindowNameStore(currentStore);
      },
      removeItem(key) {
        const currentStore = getWindowNameStore();
        delete currentStore[key];
        setWindowNameStore(currentStore);
      }
    };
  } catch (_error) {
    return null;
  }
}

function getSafeBrowserStorage() {
  return getSafeLocalStorage() || getSafeSessionStorage() || getSafeWindowNameStorage();
}

function isLocalStorageAvailable(storage) {
  try {
    const targetStorage = storage || getSafeLocalStorage();
    if (!targetStorage) return false;
    const testKey = "__oddsArchiveStorageTest";
    targetStorage.setItem(testKey, "1");
    if (typeof targetStorage.removeItem === "function") {
      targetStorage.removeItem(testKey);
    }
    return true;
  } catch (_error) {
    return false;
  }
}

function isBrowserStorageAvailable(storage) {
  try {
    const targetStorage = storage || getSafeBrowserStorage();
    if (!targetStorage) return false;
    const testKey = "__oddsArchiveStorageTest";
    targetStorage.setItem(testKey, "1");
    if (typeof targetStorage.removeItem === "function") {
      targetStorage.removeItem(testKey);
    }
    return true;
  } catch (_error) {
    return false;
  }
}

function updateStorageModeStatus(isFallback = !isBrowserStorageAvailable()) {
  const element = typeof document === "undefined" ? null : document.getElementById("storage-mode-status");
  if (element) {
    element.hidden = !isFallback;
  }
}

function getStorageModeLabel(storage) {
  if (storage) return isBrowserStorageAvailable(storage) ? "브라우저 저장" : "임시 저장";
  if (getSafeLocalStorage()) return "브라우저 저장";
  if (getSafeSessionStorage() || getSafeWindowNameStorage()) return "탭 저장";
  return "임시 저장";
}

function getStorageTarget(storage) {
  if (storage) {
    return isBrowserStorageAvailable(storage) ? storage : null;
  }

  return getSafeBrowserStorage();
}

function parseCsvLine(line) {
  const values = [];
  let current = "";
  let inQuotes = false;

  for (let index = 0; index < line.length; index += 1) {
    const character = line[index];
    const nextCharacter = line[index + 1];

    if (character === '"' && inQuotes && nextCharacter === '"') {
      current += '"';
      index += 1;
    } else if (character === '"') {
      inQuotes = !inQuotes;
    } else if (character === "," && !inQuotes) {
      values.push(current.trim());
      current = "";
    } else {
      current += character;
    }
  }

  values.push(current.trim());
  return values;
}

function normalizeCsvHeaderName(value) {
  return String(value || "")
    .replace(/^\uFEFF/, "")
    .replace(/[\s_\-./()]/g, "")
    .toLowerCase();
}

function getHeaderAliasMap() {
  return Object.entries(CSV_HEADER_ALIASES).reduce((aliasMap, [standardHeader, aliases]) => {
    for (const alias of aliases) {
      aliasMap.set(normalizeCsvHeaderName(alias), standardHeader);
    }
    return aliasMap;
  }, new Map());
}

function getHeaderIndexes(headerValues) {
  return headerValues.reduce((indexes, headerValue, index) => {
    indexes[normalizeCsvHeaderName(headerValue)] = index;
    return indexes;
  }, {});
}

function isFootballDataHeader(headerValues) {
  const indexes = getHeaderIndexes(headerValues);
  return FOOTBALL_DATA_HEADERS.every((header) => indexes[normalizeCsvHeaderName(header)] !== undefined);
}

function normalizeFootballDataDate(value) {
  const trimmedValue = String(value || "").trim();
  const match = trimmedValue.match(/^(\d{1,2})\/(\d{1,2})\/(\d{2}|\d{4})$/);

  if (!match) return trimmedValue;

  const day = match[1].padStart(2, "0");
  const month = match[2].padStart(2, "0");
  const year = match[3].length === 2 ? `20${match[3]}` : match[3];
  return `${year}-${month}-${day}`;
}

function parseFootballDataRows(dataLines, headerValues) {
  const indexes = getHeaderIndexes(headerValues);
  const readValue = (values, header) => values[indexes[normalizeCsvHeaderName(header)]] || "";
  const isCompactPack = headerValues.join(",") === "Div,Date,HomeTeam,AwayTeam,FTHG,FTAG,FTR,B365H,B365D,B365A";

  return dataLines.map((line, lineIndex) => {
    const values = isCompactPack ? line.split(",") : parseCsvLine(line);
    const homeGoals = readValue(values, "FTHG");
    const awayGoals = readValue(values, "FTAG");
    const score = homeGoals !== "" && awayGoals !== "" ? `${homeGoals}-${awayGoals}` : "";

    return {
      rowNumber: lineIndex + 2,
      date: normalizeFootballDataDate(readValue(values, "Date")),
      league: readValue(values, "Div"),
      homeTeam: readValue(values, "HomeTeam"),
      awayTeam: readValue(values, "AwayTeam"),
      homeOdds: readValue(values, "B365H"),
      drawOdds: readValue(values, "B365D"),
      awayOdds: readValue(values, "B365A"),
      result: readValue(values, "FTR") || "UNKNOWN",
      score
    };
  });
}

function resolveCsvHeaderIndexes(headerValues) {
  const aliasMap = getHeaderAliasMap();
  const indexes = {};

  headerValues.forEach((headerValue, index) => {
    const standardHeader = aliasMap.get(normalizeCsvHeaderName(headerValue));
    if (standardHeader && indexes[standardHeader] === undefined) {
      indexes[standardHeader] = index;
    }
  });

  const missingHeaders = REQUIRED_CSV_HEADERS.filter((header) => indexes[header] === undefined);

  return {
    error: missingHeaders.length > 0 ? HEADER_ERROR : "",
    indexes
  };
}

function parseCsvPreview(csvText) {
  const lines = String(csvText)
    .replace(/^\uFEFF/, "")
    .split(/\r?\n/)
    .filter((line) => line.trim() !== "");
  const [headerLine, ...dataLines] = lines;
  const headerValues = parseCsvLine(headerLine || "");

  if (!headerLine) {
    return { error: HEADER_ERROR, rows: [] };
  }

  if (dataLines.length === 0) {
    return { error: EMPTY_DATA_ERROR, rows: [] };
  }

  if (isFootballDataHeader(headerValues)) {
    return {
      error: "",
      notice: FOOTBALL_DATA_NOTICE,
      rows: parseFootballDataRows(dataLines, headerValues)
    };
  }

  const resolvedHeaders = resolveCsvHeaderIndexes(headerValues);

  if (resolvedHeaders.error) {
    return { error: HEADER_ERROR, rows: [] };
  }

  const rows = dataLines.map((line, lineIndex) => {
    const values = parseCsvLine(line);
    const row = CSV_HEADERS.reduce((rowData, header, index) => {
      const sourceIndex = resolvedHeaders.indexes[header];
      rowData[header] = sourceIndex === undefined ? "" : values[sourceIndex] || "";
      return rowData;
    }, {});
    row.rowNumber = lineIndex + 2;
    return row;
  });

  return { error: "", notice: "", rows };
}

function isRealDate(value) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) {
    return false;
  }

  const [year, month, day] = value.split("-").map(Number);
  const date = new Date(Date.UTC(year, month - 1, day));
  return date.getUTCFullYear() === year && date.getUTCMonth() === month - 1 && date.getUTCDate() === day;
}

function normalizeOdds(value) {
  if (value === "") return { error: "필수입니다.", value: null };

  const numberValue = Number(value);
  if (!Number.isFinite(numberValue)) {
    return { error: "숫자여야 합니다.", value: null };
  }

  if (numberValue < 1) {
    return { error: "1.00 이상이어야 합니다.", value: null };
  }

  return { error: "", value: Number(numberValue.toFixed(2)) };
}

function validateCsvRow(row) {
  const messages = [];
  const normalized = {
    rowNumber: row.rowNumber,
    date: String(row.date || "").trim(),
    league: normalizeLeagueNameForStorage(row.league),
    homeTeam: normalizeTeamNameForStorage(row.homeTeam),
    awayTeam: normalizeTeamNameForStorage(row.awayTeam),
    homeOdds: null,
    drawOdds: null,
    awayOdds: null,
    result: String(row.result || "").trim().toUpperCase() || "UNKNOWN",
    score: String(row.score || "").trim()
  };

  if (!normalized.date) {
    messages.push("date는 필수입니다.");
  } else if (!isRealDate(normalized.date)) {
    messages.push("date는 실제 존재하는 YYYY-MM-DD 날짜여야 합니다.");
  }

  for (const field of ["league", "homeTeam", "awayTeam"]) {
    if (!normalized[field]) {
      messages.push(`${field}는 필수입니다.`);
    }
  }

  for (const field of ["homeOdds", "drawOdds", "awayOdds"]) {
    const result = normalizeOdds(String(row[field] || "").trim());
    normalized[field] = result.value;

    if (result.error) {
      messages.push(`${field}는 ${result.error}`);
    }
  }

  if (!RESULT_VALUES.has(normalized.result)) {
    messages.push("result는 H, D, A, UNKNOWN 중 하나여야 합니다.");
  }

  return { messages, row: normalized };
}

function getDuplicateKey(row) {
  const formatKeyOdds = (value) => {
    const parsed = parseSearchNumber(value);
    return parsed === null ? "" : parsed.toFixed(2);
  };
  return [
    row.date,
    row.league,
    row.homeTeam,
    row.awayTeam,
    formatKeyOdds(row.homeOdds),
    formatKeyOdds(row.drawOdds),
    formatKeyOdds(row.awayOdds)
  ].join("|");
}

function validateCsvRows(rows) {
  const seenKeys = new Set();
  const validRows = [];
  const errorRows = [];
  const duplicateRows = [];

  for (const rawRow of rows) {
    const result = validateCsvRow(rawRow);

    if (result.messages.length > 0) {
      errorRows.push({
        rowNumber: rawRow.rowNumber,
        messages: result.messages,
        row: rawRow
      });
      continue;
    }

    const duplicateKey = getDuplicateKey(result.row);
    if (seenKeys.has(duplicateKey)) {
      duplicateRows.push({
        rowNumber: rawRow.rowNumber,
        messages: ["중복 행입니다."],
        row: result.row
      });
      continue;
    }

    seenKeys.add(duplicateKey);
    validRows.push(result.row);
  }

  return {
    validRows,
    errorRows,
    duplicateRows,
    summary: {
      validRows: validRows.length,
      errorRows: errorRows.length,
      duplicateRows: duplicateRows.length
    }
  };
}

function getStorageMatches(storage) {
  const targetStorage = getStorageTarget(storage);
  updateStorageModeStatus(!targetStorage);

  if (!targetStorage) return [...memoryStoredMatches];

  try {
    const storedValue = targetStorage.getItem(STORAGE_KEY);
    if (!storedValue) return [];
    const parsed = JSON.parse(storedValue);
    return Array.isArray(parsed) ? parsed : [];
  } catch (_error) {
    updateStorageModeStatus(true);
    return [...memoryStoredMatches];
  }
}

function setStorageMatches(matches, storage) {
  const safeMatches = Array.isArray(matches) ? matches : [];
  const targetStorage = getStorageTarget(storage);
  updateStorageModeStatus(!targetStorage);
  invalidateSearchableMatchesCache();

  if (!targetStorage) {
    memoryStoredMatches = [...safeMatches];
    return [...memoryStoredMatches];
  }

  try {
    targetStorage.setItem(STORAGE_KEY, JSON.stringify(safeMatches));
    return safeMatches;
  } catch (_error) {
    memoryStoredMatches = [...safeMatches];
    updateStorageModeStatus(true);
    return [...memoryStoredMatches];
  }
}

function loadStoredMatches(storage) {
  return getStorageMatches(storage);
}

function saveMatches(rows, storage) {
  const existingRows = getStorageMatches(storage);
  const existingKeys = new Set(existingRows.map((row) => getDuplicateKey(row)));
  const rowsToStore = [];
  let duplicateCount = 0;

  for (const row of rows) {
    const normalizedRow = {
      date: row.date,
      league: row.league,
      homeTeam: row.homeTeam,
      awayTeam: row.awayTeam,
      homeOdds: row.homeOdds,
      drawOdds: row.drawOdds,
      awayOdds: row.awayOdds,
      result: row.result,
      score: row.score,
      source: row.source || ""
    };
    const duplicateKey = getDuplicateKey(normalizedRow);

    if (existingKeys.has(duplicateKey)) {
      duplicateCount += 1;
      continue;
    }

    existingKeys.add(duplicateKey);
    rowsToStore.push(normalizedRow);
  }

  const nextRows = [...existingRows, ...rowsToStore];
  const storedRows = setStorageMatches(nextRows, storage);

  return {
    savedCount: rowsToStore.length,
    duplicateCount,
    matches: storedRows
  };
}

function getApiHistoryCache(storage) {
  const targetStorage = getStorageTarget(storage);
  updateStorageModeStatus(!targetStorage);

  if (!targetStorage) return { ...memoryApiHistoryCache };

  try {
    const storedValue = targetStorage.getItem(API_HISTORY_CACHE_KEY);
    if (!storedValue) return {};
    const parsed = JSON.parse(storedValue);
    return parsed && typeof parsed === "object" && !Array.isArray(parsed) ? parsed : {};
  } catch (_error) {
    updateStorageModeStatus(true);
    return { ...memoryApiHistoryCache };
  }
}

function setApiHistoryCache(cache, storage) {
  const safeCache = cache && typeof cache === "object" && !Array.isArray(cache) ? cache : {};
  const targetStorage = getStorageTarget(storage);
  updateStorageModeStatus(!targetStorage);

  if (!targetStorage) {
    memoryApiHistoryCache = { ...safeCache };
    return { ...memoryApiHistoryCache };
  }

  try {
    targetStorage.setItem(API_HISTORY_CACHE_KEY, JSON.stringify(safeCache));
    return safeCache;
  } catch (_error) {
    memoryApiHistoryCache = { ...safeCache };
    updateStorageModeStatus(true);
    return { ...memoryApiHistoryCache };
  }
}

function getApiHistoryCacheKey({ league, endDate, days }) {
  return [String(league || "EPL").toUpperCase(), String(endDate || "").slice(0, 10), String(days || 7)].join(":");
}

function clearStoredMatches(storage) {
  const deletedCount = getStorageMatches(storage).length;
  const targetStorage = getStorageTarget(storage);

  if (targetStorage && typeof targetStorage.removeItem === "function") {
    try {
      targetStorage.removeItem(STORAGE_KEY);
    } catch (_error) {
      updateStorageModeStatus(true);
    }
  } else {
    setStorageMatches([], storage);
  }
  memoryStoredMatches = [];

  return {
    deletedCount,
    matches: []
  };
}

// "오늘의 경기"는 열 때마다 실시간으로 다시 받아오는 별도 경로라서, 방금 끝난 경기의
// 진짜 결과가 메인 화면엔 바로 보여도 배당팩(api-odds-pack)엔 다음 정기 수집 전까지
// 반영이 안 된다. 배당팩에 아직 결과가 없는 경기는, 이 기기에 캐시된 실시간 결과로
// 메워서 팀 성적·기저율 등에도 바로 반영되게 한다. 배당팩에 이미 결과가 있으면
// (다음 정기 수집이 끝난 뒤) 그쪽을 그대로 쓴다 - 배당 이력 등 더 온전한 데이터라서다.
function getSearchableMatches(storage) {
  if (!storage && cachedSearchableMatches) return cachedSearchableMatches;

  const base = getBaseMatches();
  const baseKnownKeys = new Set(
    base.filter(isKnownResultMatch).map(getCrossSourceMatchKey).filter(Boolean)
  );
  const liveTodayMatches = getStorageTodayMatches(storage)
    .filter(isKnownResultMatch)
    .filter((match) => !baseKnownKeys.has(getCrossSourceMatchKey(match)));

  const matches = getUniqueMatches([...base, ...getStorageMatches(storage), ...liveTodayMatches, ...currentValidRows]);
  if (!storage) cachedSearchableMatches = matches;
  return matches;
}

function getStorageSavedSearches(storage) {
  const targetStorage = getStorageTarget(storage);
  updateStorageModeStatus(!targetStorage);

  if (!targetStorage) return [...memorySavedSearches];

  try {
    const storedValue = targetStorage.getItem(SAVED_SEARCHES_KEY);
    if (!storedValue) return [];
    const parsed = JSON.parse(storedValue);
    return Array.isArray(parsed) ? parsed : [];
  } catch (_error) {
    updateStorageModeStatus(true);
    return [...memorySavedSearches];
  }
}

function getStorageSearchHistory(storage) {
  const targetStorage = getStorageTarget(storage);
  updateStorageModeStatus(!targetStorage);

  if (!targetStorage) return normalizeSearchHistoryEntries(memorySearchHistory);

  try {
    const storedValue = targetStorage.getItem(SEARCH_HISTORY_KEY);
    if (!storedValue) return [];
    const parsed = JSON.parse(storedValue);
    return Array.isArray(parsed) ? normalizeSearchHistoryEntries(parsed) : [];
  } catch (_error) {
    updateStorageModeStatus(true);
    return normalizeSearchHistoryEntries(memorySearchHistory);
  }
}

function getStorageTodayMatches(storage) {
  const targetStorage = getStorageTarget(storage);
  updateStorageModeStatus(!targetStorage);

  if (!targetStorage) return [...memoryTodayMatches];

  try {
    const storedValue = targetStorage.getItem(TODAY_MATCHES_KEY);
    if (!storedValue) return [];
    const parsed = JSON.parse(storedValue);
    return Array.isArray(parsed) ? parsed : [];
  } catch (_error) {
    updateStorageModeStatus(true);
    return [...memoryTodayMatches];
  }
}

function setStorageTodayMatches(matches, storage) {
  const safeMatches = Array.isArray(matches) ? matches : [];
  const targetStorage = getStorageTarget(storage);
  updateStorageModeStatus(!targetStorage);

  if (!targetStorage) {
    memoryTodayMatches = [...safeMatches];
    return [...memoryTodayMatches];
  }

  try {
    targetStorage.setItem(TODAY_MATCHES_KEY, JSON.stringify(safeMatches));
    return safeMatches;
  } catch (_error) {
    memoryTodayMatches = [...safeMatches];
    updateStorageModeStatus(true);
    return [...memoryTodayMatches];
  }
}

function saveTodayMatch(match, storage) {
  const todayMatch = {
    id: match.id || `today-${Date.now()}-${Math.random().toString(16).slice(2)}`,
    date: match.date || getTodayKey(),
    league: match.league || "EPL",
    homeTeam: String(match.homeTeam || "").trim(),
    awayTeam: String(match.awayTeam || "").trim(),
    startTime: String(match.startTime || match.kickoff || match.time || "").trim(),
    status: String(match.status || match.fixtureStatus || match.statusShort || "").trim(),
    homeOdds: String(match.homeOdds || "").trim(),
    drawOdds: String(match.drawOdds || "").trim(),
    awayOdds: String(match.awayOdds || "").trim(),
    tolerance: match.tolerance || "0.05",
    createdAt: match.createdAt || getCurrentTimestamp()
  };
  const nextMatches = [todayMatch, ...getStorageTodayMatches(storage)];

  return {
    match: todayMatch,
    matches: setStorageTodayMatches(nextMatches, storage)
  };
}

function getTodayMatchKey(match) {
  const league = getLeagueKeyFromText(match.league) || normalizeTeamSearchText(getLeagueLabel(match.league || ""));
  return [
    match.date || "",
    league,
    normalizeTeamSearchText(normalizeTeamNameForStorage(match.homeTeam || "")),
    normalizeTeamSearchText(normalizeTeamNameForStorage(match.awayTeam || ""))
  ].join("|");
}

function mergeTodayMatches(matches, storage) {
  const existingMatches = getStorageTodayMatches(storage);
  const existingKeys = new Set(existingMatches.map(getTodayMatchKey));
  const nextMatches = [...existingMatches];
  let addedCount = 0;
  let duplicateCount = 0;

  for (const match of Array.isArray(matches) ? matches : []) {
    const normalizedMatch = {
      id: match.id || `today-${Date.now()}-${Math.random().toString(16).slice(2)}`,
      date: match.date || getTodayKey(),
      league: match.league || "EPL",
      homeTeam: String(match.homeTeam || "").trim(),
      awayTeam: String(match.awayTeam || "").trim(),
      startTime: String(match.startTime || match.kickoff || match.time || "").trim(),
      status: String(match.status || match.fixtureStatus || match.statusShort || "").trim(),
      homeOdds: String(match.homeOdds || "").trim(),
      drawOdds: String(match.drawOdds || "").trim(),
      awayOdds: String(match.awayOdds || "").trim(),
      result: String(match.result || "").trim().toUpperCase(),
      score: String(match.score || "").trim(),
      updatedAt: String(match.updatedAt || match.oddsUpdatedAt || "").trim(),
      fixtureId: String(match.fixtureId || "").trim(),
      tolerance: match.tolerance || "0.05",
      roundName: match.roundName || "",
      totoNo: match.totoNo || "",
      createdAt: match.createdAt || getCurrentTimestamp()
    };
    const key = getTodayMatchKey(normalizedMatch);

    if (!normalizedMatch.homeTeam || !normalizedMatch.awayTeam) {
      duplicateCount += 1;
      continue;
    }

    const existingIndex = nextMatches.findIndex((item) => getTodayMatchKey(item) === key);
    if (existingIndex >= 0) {
      const existingMatch = nextMatches[existingIndex];
      const mergedMatch = { ...existingMatch, ...normalizedMatch, id: existingMatch.id || normalizedMatch.id };
      if (!hasCompleteOdds(normalizedMatch) && hasCompleteOdds(existingMatch)) {
        mergedMatch.homeOdds = existingMatch.homeOdds;
        mergedMatch.drawOdds = existingMatch.drawOdds;
        mergedMatch.awayOdds = existingMatch.awayOdds;
      }
      const incomingHasResult = ["H", "D", "A"].includes(normalizedMatch.result);
      const existingHasResult = ["H", "D", "A"].includes(String(existingMatch.result || "").toUpperCase());
      if (!incomingHasResult && existingHasResult) mergedMatch.result = existingMatch.result;
      if (!mergedMatch.score && existingMatch.score) mergedMatch.score = existingMatch.score;
      if (!mergedMatch.updatedAt && existingMatch.updatedAt) mergedMatch.updatedAt = existingMatch.updatedAt;
      nextMatches[existingIndex] = mergedMatch;
      duplicateCount += 1;
      continue;
    }

    existingKeys.add(key);
    nextMatches.push(normalizedMatch);
    addedCount += 1;
  }

  return {
    addedCount,
    duplicateCount,
    matches: setStorageTodayMatches(nextMatches, storage)
  };
}

function deleteTodayMatch(matchId, storage) {
  const nextMatches = getStorageTodayMatches(storage).filter((match) => match.id !== matchId);
  return setStorageTodayMatches(nextMatches, storage);
}

function setStorageSavedSearches(searches, storage) {
  const safeSearches = Array.isArray(searches) ? searches : [];
  const targetStorage = getStorageTarget(storage);
  updateStorageModeStatus(!targetStorage);

  if (!targetStorage) {
    memorySavedSearches = [...safeSearches];
    return [...memorySavedSearches];
  }

  try {
    targetStorage.setItem(SAVED_SEARCHES_KEY, JSON.stringify(safeSearches));
    return safeSearches;
  } catch (_error) {
    memorySavedSearches = [...safeSearches];
    updateStorageModeStatus(true);
    return [...memorySavedSearches];
  }
}

function setStorageSearchHistory(history, storage) {
  const safeHistory = normalizeSearchHistoryEntries(history).slice(0, 30);
  const targetStorage = getStorageTarget(storage);
  updateStorageModeStatus(!targetStorage);

  if (!targetStorage) {
    memorySearchHistory = [...safeHistory];
    return [...memorySearchHistory];
  }

  try {
    targetStorage.setItem(SEARCH_HISTORY_KEY, JSON.stringify(safeHistory));
    return safeHistory;
  } catch (_error) {
    memorySearchHistory = [...safeHistory];
    updateStorageModeStatus(true);
    return [...memorySearchHistory];
  }
}

function loadSavedSearches(storage) {
  return getStorageSavedSearches(storage);
}

function loadSearchHistory(storage) {
  const localHistory = getStorageSearchHistory(storage);
  if (storage || !activeFavoriteAccountId || typeof FAVORITE_SYNC_LIBRARY.toSearchHistoryEntry !== "function") return localHistory;
  const effective = new Map(localHistory.map((entry) => [entry.favoriteId || getFavoriteRecordId(entry), entry]));
  for (const record of activeAccountFavoriteRecords) {
    const accountEntry = FAVORITE_SYNC_LIBRARY.toSearchHistoryEntry(record);
    if (!accountEntry) continue;
    if (record.active) {
      effective.set(record.favoriteId, accountEntry);
    } else if (effective.has(record.favoriteId)) {
      effective.set(record.favoriteId, { ...effective.get(record.favoriteId), favorite: false, favoriteUpdatedAt: record.updatedAt });
    }
  }
  return normalizeSearchHistoryEntries([...effective.values()]);
}

function historyEntryToSyncRecord(entry = {}) {
  return FAVORITE_SYNC_LIBRARY.normalizeFavoriteRecord?.({
    favoriteId: entry.favoriteId || getFavoriteRecordId(entry),
    sourceMatchId: entry.sourceMatchId || "",
    active: Boolean(entry.favorite),
    name: getFavoriteName(entry),
    criteria: {
      homeOdds: entry.homeOdds,
      drawOdds: entry.drawOdds,
      awayOdds: entry.awayOdds,
      tolerance: entry.tolerance,
      customTolerance: entry.customTolerance || "",
      league: entry.league || "ALL"
    },
    match: entry.sourceMatch || null,
    updatedAt: entry.favoriteUpdatedAt || entry.searchedAt || entry.createdAt || new Date().toISOString()
  }) || null;
}

function refreshFavoriteViews() {
  if (typeof document === "undefined") return;
  renderSearchHistory();
  renderSavedSearches();
  renderLocalAccount();
}

function setActiveAccountFavoriteRecords(userId, records = []) {
  const nextUserId = String(userId || "");
  if (activeFavoriteAccountId && activeFavoriteAccountId !== nextUserId) {
    adminMemberStatistics = null;
    adminMemberStatisticsOwnerId = "";
  }
  activeFavoriteAccountId = nextUserId;
  activeAccountFavoriteRecords = (Array.isArray(records) ? records : [])
    .map((record) => FAVORITE_SYNC_LIBRARY.normalizeFavoriteRecord?.(record))
    .filter(Boolean);
  refreshFavoriteViews();
}

function clearActiveAccountFavoriteRecords() {
  activeFavoriteAccountId = "";
  activeAccountFavoriteRecords = [];
  adminMemberStatistics = null;
  adminMemberStatisticsOwnerId = "";
  refreshFavoriteViews();
}

function persistAccountFavoriteEntry(entry) {
  const record = historyEntryToSyncRecord(entry);
  if (!record || !activeFavoriteAccountId) return loadSearchHistory();
  activeAccountFavoriteRecords = FAVORITE_SYNC_LIBRARY.mergeFavoriteRecords({
    cache: activeAccountFavoriteRecords,
    server: [record]
  });
  refreshFavoriteViews();
  cloudAccountService?.syncAccountRecords(activeAccountFavoriteRecords).catch(() => {});
  return loadSearchHistory();
}

function getAutoUpdateState(storage) {
  const targetStorage = getStorageTarget(storage);
  updateStorageModeStatus(!targetStorage);

  if (!targetStorage) return memoryAutoUpdateState || {};

  try {
    const storedValue = targetStorage.getItem(AUTO_UPDATE_KEY);
    if (!storedValue) return {};
    const parsed = JSON.parse(storedValue);
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch (_error) {
    updateStorageModeStatus(true);
    return memoryAutoUpdateState || {};
  }
}

function setAutoUpdateState(state, storage) {
  const safeState = state && typeof state === "object" ? state : {};
  const targetStorage = getStorageTarget(storage);
  updateStorageModeStatus(!targetStorage);

  if (!targetStorage) {
    memoryAutoUpdateState = { ...safeState };
    return memoryAutoUpdateState;
  }

  try {
    targetStorage.setItem(AUTO_UPDATE_KEY, JSON.stringify(safeState));
    return safeState;
  } catch (_error) {
    memoryAutoUpdateState = { ...safeState };
    updateStorageModeStatus(true);
    return memoryAutoUpdateState;
  }
}

function getStorageLocalAccount(storage) {
  const emptyAccount = { nickname: "", createdAt: "" };
  const targetStorage = getStorageTarget(storage);
  updateStorageModeStatus(!targetStorage);

  if (!targetStorage) return memoryLocalAccount || emptyAccount;

  try {
    const storedValue = targetStorage.getItem(LOCAL_ACCOUNT_KEY);
    if (!storedValue) return emptyAccount;
    const parsed = JSON.parse(storedValue);
    return parsed && typeof parsed === "object" ? { ...emptyAccount, ...parsed } : emptyAccount;
  } catch (_error) {
    updateStorageModeStatus(true);
    return memoryLocalAccount || emptyAccount;
  }
}

function setStorageLocalAccount(account, storage) {
  const safeAccount = {
    nickname: String(account?.nickname || "").trim(),
    createdAt: account?.createdAt || getCurrentTimestamp()
  };
  const targetStorage = getStorageTarget(storage);
  updateStorageModeStatus(!targetStorage);

  if (!targetStorage) {
    memoryLocalAccount = safeAccount;
    return memoryLocalAccount;
  }

  try {
    targetStorage.setItem(LOCAL_ACCOUNT_KEY, JSON.stringify(safeAccount));
    return safeAccount;
  } catch (_error) {
    memoryLocalAccount = safeAccount;
    updateStorageModeStatus(true);
    return memoryLocalAccount;
  }
}

function loadLocalAccount(storage) {
  return getStorageLocalAccount(storage);
}

function saveLocalAccount(account, storage) {
  return setStorageLocalAccount(account, storage);
}

function clearLocalAccount(storage) {
  const targetStorage = getStorageTarget(storage);

  if (targetStorage && typeof targetStorage.removeItem === "function") {
    try {
      targetStorage.removeItem(LOCAL_ACCOUNT_KEY);
    } catch (_error) {
      updateStorageModeStatus(true);
    }
  }

  memoryLocalAccount = null;
  return { nickname: "", createdAt: "" };
}

function getLocalAccountLabel(storage, googleAccountId = "") {
  const account = loadLocalAccount(storage);
  if (googleAccountId) return "Google 로그인";
  return account.nickname || "로그인 전";
}

function saveSearchCondition(condition, storage) {
  const savedSearches = getStorageSavedSearches(storage);
  const search = {
    id: `search-${Date.now()}-${Math.random().toString(16).slice(2)}`,
    name: String(condition.name || "").trim() || "이름 없는 즐겨찾기",
    memo: String(condition.memo || "").trim(),
    homeOdds: String(condition.homeOdds || "").trim(),
    drawOdds: String(condition.drawOdds || "").trim(),
    awayOdds: String(condition.awayOdds || "").trim(),
    tolerance: condition.tolerance || "0.00",
    customTolerance: String(condition.customTolerance || "").trim(),
    league: String(condition.league || "").trim(),
    createdAt: new Date().toISOString(),
    lastViewedAt: ""
  };
  const nextSearches = [search, ...savedSearches];
  const storedSearches = setStorageSavedSearches(nextSearches, storage);

  return {
    savedCount: 1,
    search,
    searches: storedSearches
  };
}

function getSearchHistoryKey(criteria) {
  const sourceMatchId = String(criteria.sourceMatchId || "").trim();
  if (sourceMatchId) return `match|${sourceMatchId}`;
  return [
    String(criteria.league || "ALL").trim() || "ALL",
    String(criteria.homeOdds || "").trim(),
    String(criteria.drawOdds || "").trim(),
    String(criteria.awayOdds || "").trim(),
    String(criteria.tolerance || "0.00").trim(),
    String(criteria.customTolerance || "").trim()
  ].join("|");
}

function getTodayMatchDisplayScore(match = {}) {
  const result = String(match.result || "").trim().toUpperCase();
  return Number(hasCompleteOdds(match)) * 100
    + Number(Boolean(String(match.score || "").trim())) * 20
    + Number(["H", "D", "A"].includes(result)) * 20
    + Number(Boolean(String(match.status || match.fixtureStatus || match.statusShort || "").trim())) * 5;
}

function deduplicateTodayMatches(matches = []) {
  const byMatch = new Map();
  for (const match of Array.isArray(matches) ? matches : []) {
    const key = getTodayMatchKey(match);
    if (!key || key === "|||") continue;
    const current = byMatch.get(key);
    if (!current) {
      byMatch.set(key, match);
      continue;
    }

    const currentScore = getTodayMatchDisplayScore(current);
    const nextScore = getTodayMatchDisplayScore(match);
    const currentUpdatedAt = Date.parse(current.updatedAt || current.createdAt || "") || 0;
    const nextUpdatedAt = Date.parse(match.updatedAt || match.createdAt || "") || 0;
    if (nextScore > currentScore || (nextScore === currentScore && nextUpdatedAt > currentUpdatedAt)) {
      byMatch.set(key, match);
    }
  }
  return [...byMatch.values()];
}

function getFavoriteRecordId(entry = {}) {
  const sourceMatchId = String(entry.sourceMatchId || "").trim();
  return sourceMatchId ? `match:${sourceMatchId}` : `odds:${entry.key || getSearchHistoryKey(entry)}`;
}

function normalizeFavoriteMatchSnapshot(snapshot = {}) {
  if (!snapshot || typeof snapshot !== "object") return null;
  const homeTeam = String(snapshot.homeTeam || "").trim();
  const awayTeam = String(snapshot.awayTeam || "").trim();
  if (!homeTeam || !awayTeam) return null;
  return {
    date: String(snapshot.date || "").slice(0, 10),
    league: String(snapshot.league || "").trim(),
    homeTeam,
    awayTeam,
    startTime: String(snapshot.startTime || "").trim()
  };
}

function normalizeSearchHistoryEntry(entry = {}) {
  const key = String(entry.key || getSearchHistoryKey(entry)).trim();
  const sourceMatchId = String(entry.sourceMatchId || "").trim();
  return {
    ...entry,
    id: String(entry.id || `history-${getFavoriteRecordId({ ...entry, key, sourceMatchId })}`).trim(),
    key,
    sourceMatchId,
    sourceMatch: normalizeFavoriteMatchSnapshot(entry.sourceMatch),
    favorite: Boolean(entry.favorite),
    favoriteName: String(entry.favoriteName || "").trim(),
    favoriteId: String(entry.favoriteId || getFavoriteRecordId({ ...entry, key, sourceMatchId })).trim(),
    favoriteUpdatedAt: String(entry.favoriteUpdatedAt || entry.searchedAt || entry.createdAt || "").trim(),
    syncVersion: 1
  };
}

function normalizeSearchHistoryEntries(history = []) {
  const uniqueEntries = new Map();
  for (const entry of Array.isArray(history) ? history : []) {
    if (!entry || typeof entry !== "object") continue;
    const normalized = normalizeSearchHistoryEntry(entry);
    const hasOddsCriteria = Boolean(normalized.homeOdds || normalized.drawOdds || normalized.awayOdds);
    if (!normalized.key || (!hasOddsCriteria && !normalized.sourceMatchId)) continue;
    const uniqueKey = normalized.favoriteId || normalized.key;
    const current = uniqueEntries.get(uniqueKey);
    if (!current || String(normalized.searchedAt || normalized.createdAt || "") >= String(current.searchedAt || current.createdAt || "")) {
      uniqueEntries.set(uniqueKey, normalized);
    }
  }
  return [...uniqueEntries.values()].sort((a, b) => {
    if (a.favorite !== b.favorite) return a.favorite ? -1 : 1;
    return String(b.searchedAt || b.createdAt || "").localeCompare(String(a.searchedAt || a.createdAt || ""));
  });
}

function getFavoriteSyncRecords(storage) {
  return getStorageSearchHistory(storage)
    .filter((entry) => entry.favorite || entry.favoriteUpdatedAt)
    .map((entry) => ({
      schemaVersion: 1,
      favoriteId: entry.favoriteId,
      itemType: entry.sourceMatchId ? "match" : "odds_search",
      sourceMatchId: entry.sourceMatchId || "",
      active: Boolean(entry.favorite),
      name: getFavoriteName(entry),
      criteria: {
        homeOdds: entry.homeOdds,
        drawOdds: entry.drawOdds,
        awayOdds: entry.awayOdds,
        tolerance: entry.tolerance,
        customTolerance: entry.customTolerance || "",
        league: entry.league || "ALL"
      },
      match: entry.sourceMatch || null,
      updatedAt: entry.favoriteUpdatedAt || entry.searchedAt || entry.createdAt || ""
    }));
}

function getSearchHistoryDisplayTitle(entry) {
  if (entry?.sourceMatch?.homeTeam && entry?.sourceMatch?.awayTeam) {
    return `${formatTeamName(entry.sourceMatch.homeTeam)} vs ${formatTeamName(entry.sourceMatch.awayTeam)}`;
  }
  const leagueLabel = entry.league && entry.league !== "ALL" ? entry.league : "전체";
  return `${leagueLabel} ${entry.homeOdds} / ${entry.drawOdds} / ${entry.awayOdds}`;
}

function getMatchFavoriteEntry(match = {}, history = loadSearchHistory()) {
  const criteria = getDirectOddsSearchCriteriaFromMatch(match);
  const favoriteId = getFavoriteRecordId({ sourceMatchId: criteria.sourceMatchId, key: getSearchHistoryKey(criteria) });
  return (Array.isArray(history) ? history : []).find((entry) => entry.favoriteId === favoriteId) || null;
}

function setMatchFavorite(match = {}, favorite = true) {
  const criteria = getDirectOddsSearchCriteriaFromMatch(match);
  let entry = getMatchFavoriteEntry(match);
  if (!entry) entry = recordOddsSearchHistory(criteria).entry;
  if (Boolean(entry.favorite) !== Boolean(favorite)) {
    const favoriteName = favorite
      ? `${formatTeamName(match.homeTeam)} vs ${formatTeamName(match.awayTeam)}`
      : "";
    toggleSearchHistoryFavorite(entry.id, undefined, favoriteName);
  }
  return Boolean(getMatchFavoriteEntry(match)?.favorite);
}

function getFavoriteName(entry, fallback = "") {
  return String(entry?.favoriteName || "").trim() || fallback || getSearchHistoryDisplayTitle(entry || {});
}

function requestFavoriteName(entry) {
  return getFavoriteName(entry);
}

function recordOddsSearchHistory(criteria, storage) {
  const history = getStorageSearchHistory(storage);
  const key = getSearchHistoryKey(criteria);
  const existing = history.find((entry) => entry.key === key);
  const searchedAt = getCurrentTimestamp();
  const entry = {
    id: existing?.id || `history-${Date.now()}-${Math.random().toString(16).slice(2)}`,
    key,
    homeOdds: String(criteria.homeOdds || "").trim(),
    drawOdds: String(criteria.drawOdds || "").trim(),
    awayOdds: String(criteria.awayOdds || "").trim(),
    tolerance: criteria.tolerance || "0.00",
    customTolerance: String(criteria.customTolerance || "").trim(),
    league: String(criteria.league || "ALL").trim() || "ALL",
    sourceMatchId: String(criteria.sourceMatchId || existing?.sourceMatchId || "").trim(),
    sourceMatch: normalizeFavoriteMatchSnapshot(criteria.sourceMatch || existing?.sourceMatch),
    favorite: Boolean(existing?.favorite),
    favoriteName: String(existing?.favoriteName || "").trim(),
    favoriteId: existing?.favoriteId || getFavoriteRecordId({ key, sourceMatchId: criteria.sourceMatchId }),
    favoriteUpdatedAt: existing?.favoriteUpdatedAt || "",
    syncVersion: 1,
    createdAt: existing?.createdAt || searchedAt,
    searchedAt
  };
  const withoutCurrent = history.filter((item) => item.key !== key);
  const nextHistory = [entry, ...withoutCurrent].sort((a, b) => {
    if (a.favorite !== b.favorite) return a.favorite ? -1 : 1;
    return String(b.searchedAt || "").localeCompare(String(a.searchedAt || ""));
  });
  const storedHistory = setStorageSearchHistory(nextHistory, storage);

  return {
    entry,
    history: storage || !activeFavoriteAccountId ? storedHistory : loadSearchHistory()
  };
}

function toggleSearchHistoryFavorite(entryId, storage, favoriteName = "") {
  const accountMode = !storage && Boolean(activeFavoriteAccountId);
  const nextHistory = (accountMode ? loadSearchHistory() : getStorageSearchHistory(storage))
    .map((entry) => {
      if (entry.id !== entryId) return entry;
      const nextFavorite = !entry.favorite;
      return {
        ...entry,
        favorite: nextFavorite,
        favoriteName: nextFavorite ? getFavoriteName({ ...entry, favoriteName }, favoriteName) : entry.favoriteName,
        favoriteUpdatedAt: new Date().toISOString(),
        syncVersion: 1
      };
    })
    .sort((a, b) => {
      if (a.favorite !== b.favorite) return a.favorite ? -1 : 1;
      return String(b.searchedAt || "").localeCompare(String(a.searchedAt || ""));
    });
  if (accountMode) {
    const changedEntry = nextHistory.find((entry) => entry.id === entryId);
    return changedEntry ? persistAccountFavoriteEntry(changedEntry) : loadSearchHistory();
  }
  return setStorageSearchHistory(nextHistory, storage);
}

function updateSearchHistoryFavoriteName(entryId, favoriteName, storage) {
  const nextName = String(favoriteName || "").trim();
  const accountMode = !storage && Boolean(activeFavoriteAccountId);
  const nextHistory = (accountMode ? loadSearchHistory() : getStorageSearchHistory(storage)).map((entry) => {
    if (entry.id !== entryId) return entry;
    return {
      ...entry,
      favoriteName: nextName || getFavoriteName(entry),
      favoriteUpdatedAt: new Date().toISOString(),
      syncVersion: 1
    };
  });
  if (accountMode) {
    const changedEntry = nextHistory.find((entry) => entry.id === entryId);
    return changedEntry ? persistAccountFavoriteEntry(changedEntry) : loadSearchHistory();
  }
  return setStorageSearchHistory(nextHistory, storage);
}

function deleteSearchHistoryEntry(entryId, storage) {
  if (!storage && activeFavoriteAccountId) {
    const target = loadSearchHistory().find((entry) => entry.id === entryId);
    if (target?.favorite) return persistAccountFavoriteEntry({ ...target, favorite: false, favoriteUpdatedAt: new Date().toISOString() });
  }
  const nextHistory = getStorageSearchHistory(storage).filter((entry) => entry.id !== entryId);
  return setStorageSearchHistory(nextHistory, storage);
}

function normalizePatternOdds(value) {
  const normalized = normalizeOdds(value);
  return normalized.error || normalized.value === null ? "" : formatOdds(normalized.value);
}

function getOddsPatternKey(pattern) {
  return `${pattern.homeOdds}|${pattern.drawOdds}|${pattern.awayOdds}`;
}

function getCriteriaPatternDistance(pattern, criteria = {}) {
  const fields = [
    ["homeOdds", criteria.homeOdds],
    ["drawOdds", criteria.drawOdds],
    ["awayOdds", criteria.awayOdds]
  ];
  let matchedFields = 0;
  let distance = 0;

  for (const [field, rawValue] of fields) {
    const target = normalizePatternOdds(rawValue);
    if (!target) continue;
    matchedFields += 1;
    distance += Math.abs(Number(pattern[field]) - Number(target));
  }

  return { matchedFields, distance };
}

function getOddsPatternSuggestions({ criteria = {}, storage, limit = 5 } = {}) {
  const patterns = new Map();
  const addPattern = (source, weight = 1) => {
    const pattern = {
      homeOdds: normalizePatternOdds(source.homeOdds),
      drawOdds: normalizePatternOdds(source.drawOdds),
      awayOdds: normalizePatternOdds(source.awayOdds)
    };
    if (!pattern.homeOdds || !pattern.drawOdds || !pattern.awayOdds) return;
    const key = getOddsPatternKey(pattern);
    const existing = patterns.get(key) || { ...pattern, count: 0 };
    existing.count += weight;
    patterns.set(key, existing);
  };

  for (const entry of loadSearchHistory(storage)) addPattern(entry, 3);
  for (const match of getStorageMatches(storage)) addPattern(match, 1);
  for (const match of currentValidRows) addPattern(match, 1);

  const scored = [...patterns.values()]
    .map((pattern) => ({ ...pattern, ...getCriteriaPatternDistance(pattern, criteria) }))
    .filter((pattern) => pattern.matchedFields === 0 || pattern.distance <= 0.15)
    .sort((a, b) => {
      if (b.matchedFields !== a.matchedFields) return b.matchedFields - a.matchedFields;
      if (a.distance !== b.distance) return a.distance - b.distance;
      if (b.count !== a.count) return b.count - a.count;
      return Number(a.homeOdds) - Number(b.homeOdds);
    });

  return scored.slice(0, limit);
}

function deleteSavedSearch(searchId, storage) {
  const nextSearches = getStorageSavedSearches(storage).filter((search) => search.id !== searchId);
  return setStorageSavedSearches(nextSearches, storage);
}

function getDashboardCounts(matches) {
  return {
    totalMatches: matches.length,
    analyzableMatches: matches.filter((match) => ["H", "D", "A"].includes(match.result)).length
  };
}

function formatOdds(value) {
  return Number(value).toFixed(2);
}

function formatResultLabel(result) {
  const normalized = String(result || "").trim().toUpperCase();
  const labels = {
    H: "홈승",
    D: "무승부",
    A: "원정승",
    UNKNOWN: "결과 미확인"
  };

  return labels[normalized] || "";
}

function formatMatchResultText(match) {
  const score = String(match?.score || "").trim();
  const resultLabel = formatResultLabel(match?.result);
  if (!resultLabel || resultLabel === "결과 미확인") return score ? `스코어 ${score}` : "";
  return `경기결과: ${resultLabel}${score ? ` ${score}` : ""}`;
}

function formatDataSourceLabel(match = {}) {
  const source = String(match.source || "").trim();
  if (!source) return "기본 데이터";
  if (source.includes("API")) return source.includes("과거") ? "API 과거" : "API";
  if (source.includes("CSV")) return "CSV";
  return source;
}

function getOddsResultSourceSummary(matches = []) {
  const counts = new Map();
  for (const match of Array.isArray(matches) ? matches : []) {
    const label = formatDataSourceLabel(match);
    counts.set(label, (counts.get(label) || 0) + 1);
  }

  const priority = ["API 과거", "API", "CSV", "기본 데이터"];
  const labels = Array.from(counts.entries())
    .sort(([labelA], [labelB]) => {
      const indexA = priority.includes(labelA) ? priority.indexOf(labelA) : priority.length;
      const indexB = priority.includes(labelB) ? priority.indexOf(labelB) : priority.length;
      if (indexA !== indexB) return indexA - indexB;
      return labelA.localeCompare(labelB);
    })
    .map(([label, count]) => `${label} ${count}`);

  return {
    total: Array.isArray(matches) ? matches.length : 0,
    labels,
    text: labels.length > 0 ? `검색 기준 데이터: ${labels.join(" · ")}` : "검색 기준 데이터: 결과 없음"
  };
}

function formatTeamName(teamName) {
  return translateTeamName(teamName);
}

function getUiLanguage() {
  if (typeof window !== "undefined" && window.ODDS_ARCHIVE_I18N) {
    return window.ODDS_ARCHIVE_I18N.getLanguage();
  }
  return "ko";
}

function translateUiText(value) {
  if (typeof window !== "undefined" && window.ODDS_ARCHIVE_I18N) {
    return window.ODDS_ARCHIVE_I18N.translateText(value, getUiLanguage());
  }
  return value;
}

function translateTeamName(teamName, language = getUiLanguage()) {
  const originalName = String(teamName || "").trim();
  const displayName = language === "ko"
    ? normalizeTeamNameForStorage(originalName)
    : getTeamTranslationLabel(originalName, language);
  if (displayName === originalName) maybeWarnMissingTeamLabel(originalName);
  return displayName;
}

function getDisplayLeagueLabel(leagueName) {
  const originalName = String(leagueName || "").trim();
  if (!originalName) return "";
  if (LEAGUE_NAME_LABELS[originalName]) return LEAGUE_NAME_LABELS[originalName];

  const normalizedName = normalizeTeamSearchText(originalName);
  const matchedEntry = Object.entries(LEAGUE_FILTERS).find(([key, aliases]) => (
    normalizeTeamSearchText(key) === normalizedName ||
    aliases.some((alias) => normalizeTeamSearchText(alias) === normalizedName)
  ));

  return matchedEntry ? (LEAGUE_NAME_LABELS[matchedEntry[0]] || matchedEntry[0]) : originalName;
}

function formatLeagueName(leagueName) {
  const originalName = String(leagueName || "").trim();
  if (!originalName) return "";
  const normalizedOriginal = normalizeTeamSearchText(originalName);
  const lowerOriginal = originalName.toLowerCase();
  const isQualifier = /(QUALIF|QUALIFY|QUALIFYING|QUALIFICATION|QUALIFIER|PRELIMINARY|예선)/i.test(originalName);
  const language = getUiLanguage();
  if (isQualifier && (lowerOriginal.includes("champions league") || normalizedOriginal.includes("championsleague") || lowerOriginal.includes("ucl"))) {
    return language === "en" ? "Champions League Qualifying" : "챔피언스리그 예선";
  }
  if (isQualifier && (lowerOriginal.includes("europa league") || normalizedOriginal.includes("europaleague") || lowerOriginal.includes("uel"))) {
    return language === "en" ? "Europa League Qualifying" : "유로파리그 예선";
  }
  const matchedLeagueKey = getLeagueKeyFromText(originalName);
  if (matchedLeagueKey) {
    return language === "en"
      ? (ENGLISH_LEAGUE_LABELS[matchedLeagueKey] || matchedLeagueKey)
      : (LEAGUE_NAME_LABELS[matchedLeagueKey] || matchedLeagueKey);
  }
  if (language === "en") return originalName;
  return originalName
    .split("/")
    .map((part) => getDisplayLeagueLabel(part.trim()))
    .join(" / ");
}

function translateLeagueName(leagueName, language = getUiLanguage()) {
  if (language === getUiLanguage()) return formatLeagueName(leagueName);
  return String(leagueName || "").trim();
}

function formatTableValue(header, value) {
  if (header === "result") return formatResultLabel(value);
  if (header === "homeTeam" || header === "awayTeam") return formatTeamName(value);
  return value;
}

function normalizeLeagueNameForStorage(leagueName) {
  const originalName = String(leagueName || "").trim();
  if (!originalName) return "";

  return originalName;
}

function filterMatches(matches, filters = {}) {
  const league = String(filters.league || "ALL").trim();
  const team = String(filters.team || "ALL").trim();
  const result = filters.result || "ALL";

  return matches.filter((match) => {
    if (league && league !== "ALL" && !leagueMatchesFixture(match.league, league)) return false;
    if (team && team !== "ALL" && !teamNameMatches(match.homeTeam, team) && !teamNameMatches(match.awayTeam, team)) return false;
    if (!matchResultFitsFilter(match, team, result)) return false;
    return true;
  });
}

function normalizeTeamSearchText(value) {
  return String(value || "")
    .trim()
    .toLowerCase()
    .replaceAll("씨티", "시티")
    .replaceAll("맨체스터 유나이티드", "맨유")
    .replaceAll("맨체스터 시티", "맨시티");
}

function teamNameMatches(matchTeamName, query) {
  const normalizedQuery = normalizeTeamSearchText(query);
  if (!normalizedQuery) return true;

  const originalName = normalizeTeamSearchText(matchTeamName);
  const displayName = normalizeTeamSearchText(formatTeamName(matchTeamName));
  if (originalName.includes(normalizedQuery) || displayName.includes(normalizedQuery)) return true;

  // 위 두 비교는 저장된 이름을 "지금 UI 언어" 기준으로만 바꿔서 대조한다. 그래서 UI가
  // 영어인데 검색어나 데이터가 한글이면(또는 그 반대) 둘 다 못 잡고 지나칠 수 있다.
  // 언어와 무관한 내부 표준 표기로 양쪽을 다시 맞춰서 한 번 더 대조한다.
  const canonicalName = normalizeTeamSearchText(normalizeTeamNameForStorage(matchTeamName));
  const canonicalQuery = normalizeTeamSearchText(normalizeTeamNameForStorage(query));
  return Boolean(canonicalQuery) && canonicalName.includes(canonicalQuery);
}

function matchResultFitsFilter(match, team, result) {
  if (result === "ALL") return true;
  if (!team || team === "ALL") return match.result === result;

  const homeMatches = teamNameMatches(match.homeTeam, team);
  const awayMatches = teamNameMatches(match.awayTeam, team);

  if (result === "H") return homeMatches && match.result === "H";
  if (result === "A") return awayMatches && match.result === "A";
  if (result === "D") return (homeMatches || awayMatches) && match.result === "D";
  if (result === "UNKNOWN") return (homeMatches || awayMatches) && match.result === "UNKNOWN";
  return match.result === result;
}

const LEAGUE_FILTERS = {
  EPL: ["EPL", "E0", "Premier League", "English Premier League"],
  LALIGA: ["LALIGA", "라리가", "SP1", "La Liga", "Primera Division"],
  SERIEA: ["SERIEA", "세리에A", "I1", "Serie A"],
  BUNDESLIGA: ["BUNDESLIGA", "분데스리가", "D1", "Bundesliga"],
  LIGUE1: ["LIGUE1", "리그앙", "F1", "Ligue 1"],
  WORLDCUP: ["WORLDCUP", "월드컵", "WORLD CUP", "FIFA WORLD CUP"],
  UCL: ["UCL", "UEFA Champions League", "Champions League", "챔피언스리그"],
  UEL: ["UEL", "UEFA Europa League", "Europa League", "유로파리그"],
  CHAMPIONSHIP: ["CHAMPIONSHIP", "Championship", "EFL Championship", "English Championship", "잉글랜드 챔피언십"],
  EREDIVISIE: ["EREDIVISIE", "Eredivisie", "에레디비시", "N1"],
  PRIMEIRA_LIGA: ["PRIMEIRA_LIGA", "Primeira Liga", "Liga Portugal", "포르투갈 프리메이라리가", "P1"],
  SCOTTISH_PREMIERSHIP: ["SCOTTISH_PREMIERSHIP", "Scottish Premiership", "Premiership", "스코틀랜드 프리미어십", "SC0"],
  BELGIAN_PRO_LEAGUE: ["BELGIAN_PRO_LEAGUE", "Belgian Pro League", "Jupiler Pro League", "First Division A", "벨기에 프로리그", "B1"],
  SUPER_LIG: ["SUPER_LIG", "Super Lig", "Süper Lig", "튀르키예 쉬페르리그", "T1"],
  KLEAGUE1: ["KLEAGUE1", "K League 1", "K리그1", "K LEAGUE 1"],
  KLEAGUE2: ["KLEAGUE2", "K League 2", "K리그2", "K LEAGUE 2"],
  J1LEAGUE: ["J1LEAGUE", "J1 League", "J리그1", "J. League Division 1", "J-League"],
  J2LEAGUE: ["J2LEAGUE", "J2 League", "J리그2", "J. League Division 2", "J-League 2"],
  ACL: ["ACL", "AFC Champions League", "AFC Champions League Elite", "AFC 챔피언스리그"],
  WCQ: ["WCQ", "FIFA World Cup Qualification", "World Cup Qualification", "월드컵 예선"],
  INTL_FRIENDLIES: ["INTL_FRIENDLIES", "International Friendlies", "Friendlies", "국가대표 친선경기"]
};
const FIXTURE_LEAGUE_OPTIONS = [
  { value: "ALL", label: "전체" },
  { value: "EPL", label: "EPL" },
  { value: "LALIGA", label: "라리가" },
  { value: "SERIEA", label: "세리에A" },
  { value: "BUNDESLIGA", label: "분데스리가" },
  { value: "LIGUE1", label: "리그앙" },
  { value: "WORLDCUP", label: "월드컵" },
  { value: "UCL", label: "챔피언스리그" },
  { value: "UEL", label: "유로파리그" },
  { value: "CHAMPIONSHIP", label: "잉글랜드 챔피언십" },
  { value: "EREDIVISIE", label: "에레디비시" },
  { value: "PRIMEIRA_LIGA", label: "포르투갈 프리메이라리가" },
  { value: "SCOTTISH_PREMIERSHIP", label: "스코틀랜드 프리미어십" },
  { value: "BELGIAN_PRO_LEAGUE", label: "벨기에 프로리그" },
  { value: "SUPER_LIG", label: "튀르키예 쉬페르리그" },
  { value: "KLEAGUE1", label: "K리그1" },
  { value: "KLEAGUE2", label: "K리그2" },
  { value: "J1LEAGUE", label: "J리그1" },
  { value: "J2LEAGUE", label: "J리그2" },
  { value: "ACL", label: "AFC 챔피언스리그" },
  { value: "WCQ", label: "월드컵 예선" },
  { value: "INTL_FRIENDLIES", label: "국가대표 친선경기" }
];
const LEAGUE_CATEGORY_GROUPS = EXTERNAL_TRANSLATIONS.leagues?.categories || [
  { label: "인기", values: ["EPL", "UCL", "CHAMPIONSHIP", "KLEAGUE1", "J1LEAGUE"] },
  { label: "유럽", values: ["EPL", "CHAMPIONSHIP", "LALIGA", "SERIEA", "BUNDESLIGA", "LIGUE1", "EREDIVISIE", "PRIMEIRA_LIGA", "SCOTTISH_PREMIERSHIP", "BELGIAN_PRO_LEAGUE", "SUPER_LIG", "UCL", "UEL"] },
  { label: "아시아", values: ["KLEAGUE1", "KLEAGUE2", "J1LEAGUE", "J2LEAGUE", "ACL"] },
  { label: "국가대항", values: ["WORLDCUP", "WCQ", "INTL_FRIENDLIES"] }
];

const EXPECTED_LEAGUE_COUNTRIES = {
  EPL: ["england"],
  LALIGA: ["spain"],
  SERIEA: ["italy"],
  BUNDESLIGA: ["germany"],
  LIGUE1: ["france"],
  UCL: ["world", "europe"],
  UEL: ["world", "europe"],
  CHAMPIONSHIP: ["england"],
  EREDIVISIE: ["netherlands"],
  PRIMEIRA_LIGA: ["portugal"],
  SCOTTISH_PREMIERSHIP: ["scotland"],
  BELGIAN_PRO_LEAGUE: ["belgium"],
  SUPER_LIG: ["turkey", "türkiye", "turkiye"],
  KLEAGUE1: ["south korea", "korea republic", "korea"],
  KLEAGUE2: ["south korea", "korea republic", "korea"],
  J1LEAGUE: ["japan"],
  J2LEAGUE: ["japan"],
  ACL: ["world", "asia"],
  WORLDCUP: ["world"],
  WCQ: ["world"],
  INTL_FRIENDLIES: ["world"]
};

function getLeagueKeyFromText(leagueName) {
  const originalName = String(leagueName || "").trim();
  if (!originalName) return "";
  const parts = originalName.split("/").map((part) => part.trim()).filter(Boolean);
  const candidates = parts.length > 0 ? parts : [originalName];

  for (const [key, aliases] of Object.entries(LEAGUE_FILTERS)) {
    const normalizedValues = [key, ...aliases].map((alias) => normalizeTeamSearchText(alias));
    if (candidates.some((candidate) => normalizedValues.includes(normalizeTeamSearchText(candidate)))) return key;
  }

  return "";
}

function hasUnexpectedLeagueCountry(leagueName) {
  const parts = String(leagueName || "").split("/").map((part) => part.trim()).filter(Boolean);
  if (parts.length < 2) return false;
  const leagueKey = getLeagueKeyFromText(parts[0]);
  if (!leagueKey) return false;
  const expectedCountries = EXPECTED_LEAGUE_COUNTRIES[leagueKey];
  if (!expectedCountries) return false;
  const country = normalizeTeamSearchText(parts[1]).replace(/-/g, " ");
  return country && !expectedCountries.some((expected) => country.includes(normalizeTeamSearchText(expected)));
}

function leagueMatchesFixture(matchLeague, selectedLeague) {
  const selected = String(selectedLeague || "ALL").trim();
  if (!selected || selected === "ALL") return true;

  const aliases = LEAGUE_FILTERS[selected] || [selected];
  const normalizedLeague = normalizeTeamSearchText(matchLeague);
  if (selected === "WORLDCUP" && normalizedLeague.includes("worldcup")) return true;
  return aliases.some((alias) => normalizedLeague === normalizeTeamSearchText(alias));
}

function getFixtureLeagueOptions(matches = []) {
  const baseOptions = [...FIXTURE_LEAGUE_OPTIONS];
  const knownValues = new Set(baseOptions.map((option) => option.value));
  const customLeagues = [...new Set(matches.map((match) => String(match.league || "").trim()).filter(Boolean))]
    .filter((league) => !Object.keys(LEAGUE_FILTERS).some((key) => leagueMatchesFixture(league, key)))
    .filter((league) => !knownValues.has(league))
    .sort((left, right) => left.localeCompare(right));

  return [
    ...baseOptions,
    ...customLeagues.map((league) => ({ value: league, label: league }))
  ];
}

function createLeagueOptionElements(options, { allLabel = "전체", categorized = true } = {}) {
  const optionByValue = new Map(options.map((option) => [option.value, option]));
  const elements = [];
  const allOption = document.createElement("option");
  allOption.value = "ALL";
  allOption.textContent = allLabel;
  elements.push(allOption);

  if (categorized) {
    LEAGUE_CATEGORY_GROUPS.forEach((group) => {
      const groupValues = group.values || group.leagues || [];
      const optgroup = document.createElement("optgroup");
      optgroup.label = group.label;
      groupValues.forEach((value) => {
        const option = optionByValue.get(value);
        if (!option || option.value === "ALL") return;
        const element = document.createElement("option");
        element.value = option.value;
        element.textContent = option.label;
        optgroup.appendChild(element);
      });
      if (optgroup.children.length > 0) elements.push(optgroup);
    });
  }

  const categorizedValues = new Set(LEAGUE_CATEGORY_GROUPS.flatMap((group) => group.values || group.leagues || []));
  const extraOptions = options.filter((option) => option.value !== "ALL" && (!categorized || !categorizedValues.has(option.value)));
  if (extraOptions.length > 0) {
    const optgroup = document.createElement("optgroup");
    optgroup.label = "기타";
    extraOptions.forEach((option) => {
      const element = document.createElement("option");
      element.value = option.value;
      element.textContent = formatLeagueName(option.label);
      optgroup.appendChild(element);
    });
    elements.push(optgroup);
  }

  return elements;
}

function updateFixtureLeagueOptions(matches = getSearchableMatches()) {
  const select = document.getElementById("fixture-league");
  if (!select) return;

  const currentValue = select.value || "ALL";
  const options = getFixtureLeagueOptions(matches);
  const optionElements = createLeagueOptionElements(options, { allLabel: "전체 경기" });

  select.replaceChildren(...optionElements);
  select.value = options.some((option) => option.value === currentValue) ? currentValue : "ALL";
}

function updateOddsLeagueOptions(matches = getSearchableMatches()) {
  const select = document.getElementById("search-league");
  if (!select) return;

  const currentValue = select.value || "ALL";
  const options = getFixtureLeagueOptions(matches);
  const optionElements = createLeagueOptionElements(options, { allLabel: "전체 리그" });

  select.replaceChildren(...optionElements);
  select.value = options.some((option) => option.value === currentValue) ? currentValue : "ALL";
}

function updateLiveOddsLeagueOptions(matches = getSearchableMatches()) {
  const select = document.getElementById("live-odds-league");
  if (!select) return;

  const currentValue = select.value || "ALL";
  const options = getFixtureLeagueOptions(matches);
  const optionElements = createLeagueOptionElements(options, { allLabel: "전체 경기" });

  select.replaceChildren(...optionElements);
  select.value = options.some((option) => option.value === currentValue) ? currentValue : "ALL";
}

function getMatchLeagueOptions(matches = []) {
  return getFixtureLeagueOptions(matches);
}

function getMatchTeamOptions(matches = [], selectedLeague = "ALL") {
  const leagueValue = String(selectedLeague || "ALL").trim();
  const teamNames = new Set();

  for (const match of matches) {
    if (leagueValue !== "ALL" && !leagueMatchesFixture(match.league, leagueValue)) continue;
    if (match.homeTeam) teamNames.add(String(match.homeTeam).trim());
    if (match.awayTeam) teamNames.add(String(match.awayTeam).trim());
  }

  const teamOptions = [...teamNames]
    .filter(Boolean)
    .map((teamName) => ({ value: teamName, label: formatTeamName(teamName) }))
    .sort((left, right) => left.label.localeCompare(right.label, "ko"));

  return [
    { value: "ALL", label: "전체 팀" },
    ...teamOptions
  ];
}

function updateMatchFilterOptions(matches = getSearchableMatches()) {
  const leagueSelect = document.getElementById("filter-league");
  const teamSelect = document.getElementById("filter-team");
  if (!leagueSelect || !teamSelect) return;

  const currentLeague = leagueSelect.value || "ALL";
  const leagueOptions = getMatchLeagueOptions(matches);
  const leagueElements = leagueOptions.map((option) => {
    const element = document.createElement("option");
    element.value = option.value;
    element.textContent = option.label;
    return element;
  });

  leagueSelect.replaceChildren(...leagueElements);
  leagueSelect.value = leagueOptions.some((option) => option.value === currentLeague) ? currentLeague : "ALL";

  const currentTeam = teamSelect.value || "ALL";
  const teamOptions = getMatchTeamOptions(matches, leagueSelect.value);
  const teamElements = teamOptions.map((option) => {
    const element = document.createElement("option");
    element.value = option.value;
    element.textContent = option.label;
    return element;
  });

  teamSelect.replaceChildren(...teamElements);
  teamSelect.value = teamOptions.some((option) => option.value === currentTeam) ? currentTeam : "ALL";
}

function searchTeamMatches(matches, criteria = {}) {
  const firstTeam = String(criteria.firstTeam || "").trim();
  const secondTeam = String(criteria.secondTeam || "").trim();

  if (!firstTeam && !secondTeam) {
    return { error: "팀명을 입력해주세요.", matches: [] };
  }

  const searchedMatches = matches.filter((match) => {
    const firstMatchesHome = teamNameMatches(match.homeTeam, firstTeam);
    const firstMatchesAway = teamNameMatches(match.awayTeam, firstTeam);
    const secondMatchesHome = teamNameMatches(match.homeTeam, secondTeam);
    const secondMatchesAway = teamNameMatches(match.awayTeam, secondTeam);

    if (firstTeam && secondTeam) {
      return (firstMatchesHome && secondMatchesAway) || (firstMatchesAway && secondMatchesHome);
    }

    if (firstTeam) return firstMatchesHome || firstMatchesAway;
    return secondMatchesHome || secondMatchesAway;
  });

  return {
    error: "",
    matches: sortTeamMatchResults(searchedMatches, criteria)
  };
}

function searchMatchesByKeyword(matches, keyword) {
  const query = normalizeTeamSearchText(keyword);

  if (!query) {
    return { error: "팀명 또는 리그명을 입력해주세요.", matches: [] };
  }

  const searchedMatches = matches.filter((match) => {
    const league = normalizeTeamSearchText(match.league);
    return league.includes(query) || teamNameMatches(match.homeTeam, query) || teamNameMatches(match.awayTeam, query);
  });

  return {
    error: "",
    matches: sortTeamMatchResults(searchedMatches, { sortOrder: "DATE_DESC" })
  };
}

function searchMatchesByFixture(matches, criteria = {}) {
  const league = criteria.league || "ALL";
  const homeTeam = String(criteria.homeTeam || "").trim();
  const awayTeam = String(criteria.awayTeam || "").trim();

  if (!homeTeam && !awayTeam) {
    return { error: "홈팀 또는 원정팀을 입력해주세요.", matches: [] };
  }

  const searchedMatches = matches.filter((match) => {
    if (!leagueMatchesFixture(match.league, league)) return false;
    if (homeTeam && !teamNameMatches(match.homeTeam, homeTeam)) return false;
    if (awayTeam && !teamNameMatches(match.awayTeam, awayTeam)) return false;
    return true;
  });

  return {
    error: "",
    matches: sortTeamMatchResults(searchedMatches, { sortOrder: "DATE_DESC" })
  };
}

function sortTeamMatchResults(matches, criteria = {}) {
  const sortOrder = criteria.sortOrder || "DATE_DESC";
  const sortedMatches = [...matches];

  sortedMatches.sort((left, right) => {
    if (sortOrder === "DATE_ASC") {
      return String(left.date).localeCompare(String(right.date));
    }

    if (sortOrder === "KNOWN_FIRST") {
      const leftKnown = ["H", "D", "A"].includes(left.result) ? 0 : 1;
      const rightKnown = ["H", "D", "A"].includes(right.result) ? 0 : 1;
      if (leftKnown !== rightKnown) return leftKnown - rightKnown;
      return String(right.date).localeCompare(String(left.date));
    }

    if (sortOrder === "LEAGUE") {
      const leagueDifference = String(left.league).localeCompare(String(right.league));
      if (leagueDifference !== 0) return leagueDifference;
      return String(right.date).localeCompare(String(left.date));
    }

    if (sortOrder === "HOME_TEAM") {
      const homeTeamDifference = formatTeamName(left.homeTeam).localeCompare(formatTeamName(right.homeTeam));
      if (homeTeamDifference !== 0) return homeTeamDifference;
      return String(right.date).localeCompare(String(left.date));
    }

    return String(right.date).localeCompare(String(left.date));
  });

  return sortedMatches;
}

function parseSearchNumber(value) {
  const trimmedValue = String(value).trim().replace(",", ".");
  if (trimmedValue === "") return null;

  const numberValue = Number(trimmedValue);
  return Number.isFinite(numberValue) ? numberValue : null;
}

function resolveTolerance(tolerance, customTolerance) {
  if (tolerance === "CUSTOM") {
    const customValue = parseSearchNumber(customTolerance);
    return customValue !== null && customValue >= 0 ? customValue : null;
  }

  const selectedValue = parseSearchNumber(tolerance);
  return selectedValue !== null && selectedValue >= 0 ? selectedValue : null;
}

function getOddsDistance(match, criteria) {
  const targetHomeOdds = parseSearchNumber(criteria.homeOdds);
  const targetDrawOdds = parseSearchNumber(criteria.drawOdds);
  const targetAwayOdds = parseSearchNumber(criteria.awayOdds);
  const distances = [];

  if (targetHomeOdds !== null) distances.push(Math.abs(Number(match.homeOdds) - targetHomeOdds));
  if (targetDrawOdds !== null) distances.push(Math.abs(Number(match.drawOdds) - targetDrawOdds));
  if (targetAwayOdds !== null) distances.push(Math.abs(Number(match.awayOdds) - targetAwayOdds));

  return distances.length === 0 ? Number.POSITIVE_INFINITY : distances.reduce((total, distance) => total + distance, 0);
}

function sortOddsSearchMatches(matches, criteria = {}) {
  const sortOrder = criteria.sortOrder || "DATE_DESC";
  const sortedMatches = [...matches];

  sortedMatches.sort((left, right) => {
    if (sortOrder === "DATE_ASC") {
      return String(left.date).localeCompare(String(right.date));
    }

    if (sortOrder === "CLOSEST") {
      const distanceDifference = getOddsDistance(left, criteria) - getOddsDistance(right, criteria);
      if (distanceDifference !== 0) return distanceDifference;
      return String(right.date).localeCompare(String(left.date));
    }

    if (sortOrder === "LEAGUE") {
      const leagueDifference = String(left.league).localeCompare(String(right.league));
      if (leagueDifference !== 0) return leagueDifference;
      return String(right.date).localeCompare(String(left.date));
    }

    return String(right.date).localeCompare(String(left.date));
  });

  return sortedMatches;
}

function searchOdds(matches, criteria) {
  const targetHomeOdds = parseSearchNumber(criteria.homeOdds);
  const targetDrawOdds = parseSearchNumber(criteria.drawOdds);
  const targetAwayOdds = parseSearchNumber(criteria.awayOdds);
  const tolerance = resolveTolerance(criteria.tolerance, criteria.customTolerance);
  const teamQuery = String(criteria.teamQuery || "").trim();
  const activeTargets = [
    { field: "homeOdds", value: targetHomeOdds },
    { field: "drawOdds", value: targetDrawOdds },
    { field: "awayOdds", value: targetAwayOdds }
  ].filter((target) => target.value !== null);

  if (activeTargets.length === 0) {
    return { error: "배당값을 입력해주세요.", matches: [] };
  }

  if (tolerance === null) {
    return { error: "허용 오차를 0 이상의 숫자로 입력해주세요.", matches: [] };
  }

  const league = String(criteria.league || "ALL").trim();
  const matchesInRange = matches.filter((match) => {
    if (league && league !== "ALL" && !leagueMatchesFixture(match.league, league)) return false;
    if (teamQuery && !teamNameMatches(match.homeTeam, teamQuery) && !teamNameMatches(match.awayTeam, teamQuery)) return false;

    return activeTargets.every((target) => {
      const matchOdds = Number(match[target.field]);
      return Number.isFinite(matchOdds) && Math.abs(matchOdds - target.value) <= tolerance;
    });
  });

  return { error: "", matches: sortOddsSearchMatches(matchesInRange, criteria) };
}

function analyzeTodayMatch(matches, criteria = {}) {
  const homeTeam = String(criteria.homeTeam || "").trim();
  const awayTeam = String(criteria.awayTeam || "").trim();
  const league = String(criteria.league || "ALL").trim() || "ALL";

  if (!homeTeam || !awayTeam) {
    return { error: "홈팀과 원정팀을 입력해주세요.", matches: [], breakdown: calculateResultBreakdown([]) };
  }

  const result = searchOdds(matches, {
    homeOdds: criteria.homeOdds,
    drawOdds: criteria.drawOdds,
    awayOdds: criteria.awayOdds,
    tolerance: criteria.tolerance || "0.05",
    customTolerance: "",
    sortOrder: "CLOSEST",
    league
  });

  return {
    error: result.error,
    matches: result.matches,
    breakdown: calculateResultBreakdown(result.matches),
    label: `${homeTeam} vs ${awayTeam}`
  };
}

function analyzeLiveMatchOdds(matches, criteria = {}) {
  const attempts = [
    { tolerance: criteria.tolerance || "0.05", league: criteria.league || "ALL", scope: "같은 리그" },
    { tolerance: "0.10", league: "ALL", scope: "전체 과거" },
    { tolerance: "0.20", league: "ALL", scope: "전체 과거" }
  ];

  let fallbackAnalysis = null;

  for (const attempt of attempts) {
    const analysis = analyzeTodayMatch(matches, {
      ...criteria,
      tolerance: attempt.tolerance,
      league: attempt.league
    });
    analysis.scope = attempt.scope;
    analysis.tolerance = attempt.tolerance;
    analysis.breakdown.scope = attempt.scope;
    analysis.breakdown.tolerance = attempt.tolerance;

    if (!fallbackAnalysis) fallbackAnalysis = analysis;
    if (analysis.breakdown.knownMatches > 0) return analysis;
    if (analysis.matches.length > 0 && fallbackAnalysis.breakdown.knownMatches === 0) fallbackAnalysis = analysis;
  }

  const closestMatches = getClosestOddsMatches(matches, criteria, 30);
  if (closestMatches.length > 0) {
    const breakdown = calculateResultBreakdown(closestMatches);
    return {
      error: "",
      matches: closestMatches,
      breakdown: {
        ...breakdown,
        scope: "가까운 과거",
        tolerance: ""
      },
      label: `${criteria.homeTeam || ""} vs ${criteria.awayTeam || ""}`,
      scope: "가까운 과거",
      tolerance: ""
    };
  }

  return fallbackAnalysis || analyzeTodayMatch(matches, criteria);
}

function getClosestOddsMatches(matches, criteria = {}, limit = 30) {
  const targetHomeOdds = parseSearchNumber(criteria.homeOdds);
  const targetDrawOdds = parseSearchNumber(criteria.drawOdds);
  const targetAwayOdds = parseSearchNumber(criteria.awayOdds);
  const activeTargets = [
    { field: "homeOdds", value: targetHomeOdds },
    { field: "drawOdds", value: targetDrawOdds },
    { field: "awayOdds", value: targetAwayOdds }
  ].filter((target) => target.value !== null);

  if (activeTargets.length === 0) return [];

  return matches
    .filter((match) => activeTargets.every((target) => Number.isFinite(Number(match[target.field]))))
    .map((match) => ({
      match,
      distance: activeTargets.reduce((total, target) => total + Math.abs(Number(match[target.field]) - target.value), 0)
    }))
    .sort((left, right) => {
      if (left.distance !== right.distance) return left.distance - right.distance;
      return String(right.match.date || "").localeCompare(String(left.match.date || ""));
    })
    .slice(0, limit)
    .map((item) => item.match);
}

function formatRate(count, knownMatches) {
  if (knownMatches === 0) return "0%";
  return `${((count / knownMatches) * 100).toFixed(1)}%`;
}

function getMatchSeasonStartYear(match = {}) {
  const dateValue = String(match.date || "");
  const matchDate = dateValue.match(/^(\d{4})-(\d{2})-\d{2}$/);
  if (!matchDate) return null;

  const year = Number(matchDate[1]);
  const month = Number(matchDate[2]);
  if (!Number.isFinite(year) || !Number.isFinite(month)) return null;

  return month >= 7 ? year : year - 1;
}

function getRecentSeasonMatches(matches = [], seasonCount = 3) {
  const seasons = matches
    .map(getMatchSeasonStartYear)
    .filter((season) => Number.isFinite(season));

  if (seasons.length === 0) return [];

  const latestSeason = Math.max(...seasons);
  const earliestSeason = latestSeason - Math.max(1, seasonCount) + 1;
  return matches.filter((match) => {
    const season = getMatchSeasonStartYear(match);
    return Number.isFinite(season) && season >= earliestSeason && season <= latestSeason;
  });
}

function calculateResultBreakdown(matches) {
  const homeWins = matches.filter((match) => match.result === "H").length;
  const draws = matches.filter((match) => match.result === "D").length;
  const awayWins = matches.filter((match) => match.result === "A").length;
  const unknownMatches = matches.filter((match) => match.result === "UNKNOWN").length;
  const knownMatches = homeWins + draws + awayWins;

  return {
    totalMatches: matches.length,
    knownMatches,
    unknownMatches,
    homeWins,
    draws,
    awayWins,
    homeRate: formatRate(homeWins, knownMatches),
    drawRate: formatRate(draws, knownMatches),
    awayRate: formatRate(awayWins, knownMatches)
  };
}

function getInlineOddsRateText(breakdown = {}) {
  const totalMatches = Number(breakdown.totalMatches || 0);
  const knownMatches = Number(breakdown.knownMatches || 0);
  const scope = breakdown.scope ? `${breakdown.scope} ` : "";
  const tolerance = breakdown.tolerance || "0.05";
  const title = tolerance ? `${scope}유사배당 ±${tolerance}` : `${scope}유사배당`;

  if (knownMatches <= 0) {
    return `${title}\n전적 없음${totalMatches > 0 ? ` · 결과 확인 0/${totalMatches}` : ""}`;
  }

  return `${title}\n홈승 ${breakdown.homeRate || "0%"} · 무 ${breakdown.drawRate || "0%"} · 원정승 ${breakdown.awayRate || "0%"} · ${knownMatches}/${totalMatches}경기`;
}

function getInlineOddsConfidence(breakdown = {}) {
  const knownMatches = Number(breakdown.knownMatches || 0);
  if (knownMatches >= 30) return { label: "신뢰도 높음", className: "confidence-high" };
  if (knownMatches >= 10) return { label: "신뢰도 보통", className: "confidence-medium" };
  return { label: "참고용", className: "confidence-low" };
}

function getTodayOddsSummaryText(breakdown = {}) {
  const knownMatches = Number(breakdown.knownMatches || 0);
  if (knownMatches <= 0) return "유사배당 전적 없음";

  return [
    `홈승 ${breakdown.homeWins || 0}/${breakdown.homeRate || "0%"}`,
    `무 ${breakdown.draws || 0}/${breakdown.drawRate || "0%"}`,
    `원정승 ${breakdown.awayWins || 0}/${breakdown.awayRate || "0%"}`,
    `${knownMatches}경기`
  ].join(" · ");
}

function getTopBreakdownResult(breakdown = {}) {
  const resultCounts = [
    { key: "H", label: "홈승", count: breakdown.homeWins || 0, rate: breakdown.homeRate || "0%" },
    { key: "D", label: "무승부", count: breakdown.draws || 0, rate: breakdown.drawRate || "0%" },
    { key: "A", label: "원정승", count: breakdown.awayWins || 0, rate: breakdown.awayRate || "0%" }
  ];
  return resultCounts.reduce((top, item) => (item.count > top.count ? item : top), resultCounts[0]);
}

function parseRateValue(value) {
  const numberValue = Number(String(value || "0").replace("%", ""));
  return Number.isFinite(numberValue) ? numberValue : 0;
}

const MATCH_JUDGEMENT_LEVELS = ["일반", "박빙주의", "정배불안", "이변 후보", "대형 이변 후보"];
const MATCH_JUDGEMENT_RISK = {
  일반: "낮음",
  박빙주의: "보통",
  정배불안: "보통",
  혼전: "보통",
  "이변 후보": "높음",
  "대형 이변 후보": "매우 높음",
  "데이터 부족": "매우 높음"
};

function raiseMatchJudgement(current, minimum) {
  if (current === "데이터 부족") return current;
  const currentIndex = MATCH_JUDGEMENT_LEVELS.indexOf(current);
  const minimumIndex = MATCH_JUDGEMENT_LEVELS.indexOf(minimum);
  if (minimumIndex === -1) return current;
  if (currentIndex === -1) return minimum;
  return MATCH_JUDGEMENT_LEVELS[Math.max(currentIndex, minimumIndex)];
}

function getRatePercent(count, total) {
  const safeCount = Number(count || 0);
  const safeTotal = Number(total || 0);
  if (safeTotal <= 0) return 0;
  return (safeCount / safeTotal) * 100;
}

function getSelectionRateForResult(resultKey, criteria = {}) {
  const rateFields = {
    H: ["homeSelectionRate", "homePickRate", "homeVoteRate", "homeChoiceRate"],
    D: ["drawSelectionRate", "drawPickRate", "drawVoteRate", "drawChoiceRate"],
    A: ["awaySelectionRate", "awayPickRate", "awayVoteRate", "awayChoiceRate"]
  };

  const directValue = criteria.selectionRates?.[resultKey] ?? criteria.pickRates?.[resultKey] ?? criteria.voteRates?.[resultKey];
  const values = [directValue, ...(rateFields[resultKey] || []).map((field) => criteria[field])];
  const parsed = values.map(parseSearchNumber).find((value) => value !== null);
  return parsed === undefined ? null : parsed;
}

function clampPercent(value, min = 0, max = 100) {
  const numberValue = Number(value || 0);
  if (!Number.isFinite(numberValue)) return min;
  return Math.max(min, Math.min(max, numberValue));
}

function parseScoreParts(score) {
  const match = String(score || "").match(/(\d+)\D+(\d+)/);
  if (!match) return null;
  return {
    home: Number(match[1]),
    away: Number(match[2])
  };
}

function getTeamSide(match = {}, teamName = "") {
  if (teamNameMatches(match.homeTeam, teamName)) return "home";
  if (teamNameMatches(match.awayTeam, teamName)) return "away";
  return "";
}

function getTeamResultFromMatch(match = {}, teamName = "") {
  const side = getTeamSide(match, teamName);
  if (!side || match.result === "UNKNOWN") return "";
  if (match.result === "D") return "D";
  if (side === "home") return match.result === "H" ? "W" : "L";
  return match.result === "A" ? "W" : "L";
}

function getTeamScoreFromMatch(match = {}, teamName = "") {
  const side = getTeamSide(match, teamName);
  const score = parseScoreParts(match.score);
  if (!side || !score) return null;
  return {
    forGoals: side === "home" ? score.home : score.away,
    againstGoals: side === "home" ? score.away : score.home
  };
}

function hasStrongOpponentNameHint(teamName = "") {
  const text = normalizeTeamSearchText(teamName);
  const plainText = String(teamName || "").trim().toLowerCase();
  const nationalPowerhouses = ["france", "england", "spain", "germany", "brazil", "argentina", "portugal", "netherlands", "italy", "belgium", "croatia", "uruguay"];
  if (nationalPowerhouses.some((hint) => plainText.includes(hint))) return true;
  const contextHints = [
    ...HOME_TODAY_STRONG_TEAM_HINTS,
    ...nationalPowerhouses
  ];
  return contextHints.some((hint) => {
    const normalizedHint = normalizeTeamSearchText(hint);
    return text.includes(normalizedHint) || normalizedHint.includes(text);
  });
}

function getTeamRecentProfile(teamName = "", matches = [], limit = 5) {
  const recentMatches = (Array.isArray(matches) ? matches : [])
    .filter(isKnownResultMatch)
    .filter((match) => teamAppearsInMatch(match, teamName))
    .sort((a, b) => String(b.date || "").localeCompare(String(a.date || "")))
    .slice(0, limit);
  const totals = recentMatches.reduce((profile, match) => {
    const result = getTeamResultFromMatch(match, teamName);
    const score = getTeamScoreFromMatch(match, teamName);
    if (result === "W") profile.wins += 1;
    if (result === "D") profile.draws += 1;
    if (result === "L") profile.losses += 1;
    if (score) {
      profile.goalsFor += score.forGoals;
      profile.goalsAgainst += score.againstGoals;
      if (score.forGoals > 0) profile.scoredMatches += 1;
      if (score.againstGoals <= 1) profile.lowConcedeMatches += 1;
    }
    return profile;
  }, {
    matches: recentMatches.length,
    wins: 0,
    draws: 0,
    losses: 0,
    goalsFor: 0,
    goalsAgainst: 0,
    scoredMatches: 0,
    lowConcedeMatches: 0
  });

  return {
    ...totals,
    avgGoalsFor: totals.matches > 0 ? totals.goalsFor / totals.matches : 0,
    avgGoalsAgainst: totals.matches > 0 ? totals.goalsAgainst / totals.matches : 0,
    winRate: getRatePercent(totals.wins, totals.matches),
    pointsPerMatch: totals.matches > 0 ? ((totals.wins * 3) + totals.draws) / totals.matches : 0,
    drawRate: getRatePercent(totals.draws, totals.matches),
    scoredRate: getRatePercent(totals.scoredMatches, totals.matches),
    lowConcedeRate: getRatePercent(totals.lowConcedeMatches, totals.matches)
  };
}

function getTeamScheduleProfile(teamName = "", matches = [], targetDate = "", limit = 8) {
  const targetTimestamp = Date.parse(`${String(targetDate || "").slice(0, 10)}T00:00:00Z`);
  const safeTargetTimestamp = Number.isFinite(targetTimestamp) ? targetTimestamp : Date.now();
  const dayMs = 86400000;
  const recentMatches = (Array.isArray(matches) ? matches : [])
    .filter(isKnownResultMatch)
    .filter((match) => teamAppearsInMatch(match, teamName))
    .map((match) => ({
      match,
      timestamp: Date.parse(`${String(match.date || "").slice(0, 10)}T00:00:00Z`)
    }))
    .filter((entry) => Number.isFinite(entry.timestamp) && entry.timestamp < safeTargetTimestamp)
    .sort((left, right) => right.timestamp - left.timestamp)
    .slice(0, limit);
  const getPoints = (match) => {
    const result = getTeamResultFromMatch(match, teamName);
    return result === "W" ? 3 : result === "D" ? 1 : 0;
  };
  const getGoalDifference = (match) => {
    const score = getTeamScoreFromMatch(match, teamName);
    return score ? score.forGoals - score.againstGoals : 0;
  };
  const summarize = (entries) => {
    if (entries.length === 0) return { pointsPerMatch: 0, goalDifferencePerMatch: 0 };
    return {
      pointsPerMatch: entries.reduce((sum, entry) => sum + getPoints(entry.match), 0) / entries.length,
      goalDifferencePerMatch: entries.reduce((sum, entry) => sum + getGoalDifference(entry.match), 0) / entries.length
    };
  };
  const latest = recentMatches[0] || null;
  const currentForm = summarize(recentMatches.slice(0, 3));
  const previousForm = summarize(recentMatches.slice(3, 5));
  let consecutiveAway = 0;
  for (const entry of recentMatches) {
    if (getTeamSide(entry.match, teamName) !== "away") break;
    consecutiveAway += 1;
  }

  return {
    matches: recentMatches.length,
    restDays: latest ? Math.max(0, Math.floor((safeTargetTimestamp - latest.timestamp) / dayMs)) : null,
    matchesLast7: recentMatches.filter((entry) => safeTargetTimestamp - entry.timestamp <= 7 * dayMs).length,
    matchesLast14: recentMatches.filter((entry) => safeTargetTimestamp - entry.timestamp <= 14 * dayMs).length,
    consecutiveAway,
    formTrend: previousForm.pointsPerMatch > 0
      ? currentForm.pointsPerMatch - previousForm.pointsPerMatch
      : 0,
    goalTrend: previousForm.goalDifferencePerMatch !== 0
      ? currentForm.goalDifferencePerMatch - previousForm.goalDifferencePerMatch
      : 0
  };
}

function getTeamVenueProfile(teamName = "", matches = [], venue = "", limit = 8) {
  const venueMatches = (Array.isArray(matches) ? matches : []).filter((match) => {
    if (venue === "home") return teamNameMatches(match.homeTeam, teamName);
    if (venue === "away") return teamNameMatches(match.awayTeam, teamName);
    return teamAppearsInMatch(match, teamName);
  });
  return getTeamRecentProfile(teamName, venueMatches, limit);
}

function getStoredTeamContextPack() {
  if (typeof window !== "undefined" && window.ODDS_ARCHIVE_TEAM_CONTEXT_PACK) {
    return window.ODDS_ARCHIVE_TEAM_CONTEXT_PACK;
  }
  if (typeof globalThis !== "undefined" && globalThis.ODDS_ARCHIVE_TEAM_CONTEXT_PACK) {
    return globalThis.ODDS_ARCHIVE_TEAM_CONTEXT_PACK;
  }
  return { date: "", updatedAt: "", leagues: [] };
}

function getTeamContextForDate(pack = {}, targetDate = "") {
  const date = String(targetDate || "").slice(0, 10);
  const dated = (Array.isArray(pack.dates) ? pack.dates : []).find((entry) => (
    String(entry?.date || "").slice(0, 10) === date
  ));
  if (dated) return {
    date,
    updatedAt: String(dated.updatedAt || pack.updatedAt || ""),
    leagues: Array.isArray(dated.leagues) ? dated.leagues : []
  };
  if (date && date === String(pack.date || "").slice(0, 10)) return {
    date,
    updatedAt: String(pack.updatedAt || ""),
    leagues: Array.isArray(pack.leagues) ? pack.leagues : []
  };
  return null;
}

function getStoredMatchStatisticsPack() {
  if (typeof window !== "undefined" && window.ODDS_ARCHIVE_MATCH_STATISTICS_PACK) {
    return window.ODDS_ARCHIVE_MATCH_STATISTICS_PACK;
  }
  if (typeof globalThis !== "undefined" && globalThis.ODDS_ARCHIVE_MATCH_STATISTICS_PACK) {
    return globalThis.ODDS_ARCHIVE_MATCH_STATISTICS_PACK;
  }
  return { updatedAt: "", matches: [] };
}

function averageKnownStatistic(values = []) {
  const known = values
    .filter((value) => value !== null && value !== undefined && value !== "")
    .map(Number)
    .filter(Number.isFinite);
  return known.length ? known.reduce((sum, value) => sum + value, 0) / known.length : null;
}

function getTeamPerformanceProfile(teamName = "", targetDate = "", limit = 5) {
  const matches = (Array.isArray(getStoredMatchStatisticsPack().matches)
    ? getStoredMatchStatisticsPack().matches
    : [])
    .filter((match) => (
      (!targetDate || String(match.date || "") < String(targetDate).slice(0, 10))
      && (teamNameMatches(match.homeTeam, teamName) || teamNameMatches(match.awayTeam, teamName))
    ))
    .sort((left, right) => String(right.date || "").localeCompare(String(left.date || "")))
    .slice(0, Math.max(1, Number(limit) || 5))
    .map((match) => teamNameMatches(match.homeTeam, teamName) ? match.home : match.away)
    .filter((team) => team && [team.shots, team.shotsOnGoal, team.possession, team.expectedGoals]
      .some((value) => value !== null && value !== undefined && value !== ""));
  return {
    matches: matches.length,
    avgShots: averageKnownStatistic(matches.map((team) => team.shots)),
    avgShotsOnGoal: averageKnownStatistic(matches.map((team) => team.shotsOnGoal)),
    avgPossession: averageKnownStatistic(matches.map((team) => team.possession)),
    avgCorners: averageKnownStatistic(matches.map((team) => team.corners)),
    avgExpectedGoals: averageKnownStatistic(matches.map((team) => team.expectedGoals))
  };
}

function createOfficialRecordProfile(record = {}) {
  const matches = Number(record.played || 0);
  const wins = Number(record.wins || 0);
  const draws = Number(record.draws || 0);
  const losses = Number(record.losses || 0);
  const goalsFor = Number(record.goalsFor || 0);
  const goalsAgainst = Number(record.goalsAgainst || 0);
  return {
    matches,
    wins,
    draws,
    losses,
    pointsPerMatch: matches > 0 ? ((wins * 3) + draws) / matches : 0,
    avgGoalsFor: matches > 0 ? goalsFor / matches : 0,
    avgGoalsAgainst: matches > 0 ? goalsAgainst / matches : 0
  };
}

function getOfficialTeamContext(match = {}, teamName = "") {
  const pack = getStoredTeamContextPack();
  const matchDate = String(match.date || "").slice(0, 10);
  const dateContext = getTeamContextForDate(pack, matchDate);
  if (!dateContext) return null;
  const leagues = dateContext.leagues.filter((league) => (
    leagueMatchesFixture(match.league, league.key)
  ));
  for (const league of leagues) {
    const standing = (league.standings || []).find((row) => teamNameMatches(row.team, teamName)) || null;
    const team = (league.teams || []).find((row) => teamNameMatches(row.team, teamName)) || null;
    if (!standing && !team) continue;
    return {
      standing,
      seasonProfile: createOfficialRecordProfile(team?.all || standing?.all),
      homeProfile: createOfficialRecordProfile(standing?.home || team?.home),
      awayProfile: createOfficialRecordProfile(standing?.away || team?.away),
      updatedAt: dateContext.updatedAt
    };
  }
  return null;
}

function getOfficialFixtureContext(match = {}) {
  const pack = getStoredTeamContextPack();
  const matchDate = String(match.date || "").slice(0, 10);
  const fixtureId = String(match.fixtureId || match.id || "").trim();
  const dateContext = getTeamContextForDate(pack, matchDate);
  if (dateContext) {
    const leagues = dateContext.leagues.filter((league) => (
      leagueMatchesFixture(match.league, league.key)
    ));
    for (const league of leagues) {
      const fixtures = Array.isArray(league.fixtures) ? league.fixtures : [];
      const fixture = fixtures.find((item) => fixtureId && String(item.fixtureId || "") === fixtureId)
        || fixtures.find((item) => (
          teamNameMatches(item.homeTeam, match.homeTeam)
          && teamNameMatches(item.awayTeam, match.awayTeam)
        ));
      if (fixture) return { ...fixture, updatedAt: dateContext.updatedAt };
    }
  }
  const statisticsPack = getStoredMatchStatisticsPack();
  const historicalMatches = Array.isArray(statisticsPack.matches) ? statisticsPack.matches : [];
  const historical = historicalMatches.find((item) => (
    fixtureId && String(item.fixtureId || "") === fixtureId
  )) || historicalMatches.find((item) => (
    String(item.date || "").slice(0, 10) === matchDate
    && teamNameMatches(item.homeTeam, match.homeTeam)
    && teamNameMatches(item.awayTeam, match.awayTeam)
  ));
  return historical ? { ...historical, updatedAt: String(statisticsPack.updatedAt || "") } : null;
}

function getFixtureTeamAvailability(fixture = null, teamName = "") {
  if (!fixture) return null;
  const isHome = teamNameMatches(fixture.homeTeam, teamName);
  const isAway = teamNameMatches(fixture.awayTeam, teamName);
  if (!isHome && !isAway) return null;
  const teamId = Number(isHome ? fixture.homeTeamId : fixture.awayTeamId);
  const injuries = (Array.isArray(fixture.injuries) ? fixture.injuries : []).filter((item) => (
    Number(item.teamId || 0) === teamId
  ));
  const lineup = (Array.isArray(fixture.lineups) ? fixture.lineups : []).find((item) => (
    Number(item.teamId || 0) === teamId || teamNameMatches(item.team, teamName)
  )) || null;
  return {
    teamId: Number.isFinite(teamId) && teamId > 0 ? teamId : null,
    injuries,
    injuriesChecked: Boolean(fixture.injuriesChecked),
    lineup,
    lineupsChecked: Boolean(fixture.lineupsChecked)
  };
}

// API-Football 이 제공하는 팀 엠블럼 CDN. teamId 가 없으면(과거 기록/미수집 팀) 빈 문자열.
function getTeamLogoUrl(teamId) {
  const id = Number(teamId);
  return Number.isFinite(id) && id > 0 ? `https://media.api-sports.io/football/teams/${id}.png` : "";
}

function getLeagueTable(match = {}, matches = []) {
  const league = String(match.league || "").trim();
  const targetDate = String(match.date || "").slice(0, 10);
  const targetTimestamp = new Date(`${targetDate || "9999-12-31"}T00:00:00Z`).getTime();
  const fromTimestamp = Number.isFinite(targetTimestamp) ? targetTimestamp - (370 * 86400000) : 0;
  const rows = new Map();
  const ensureRow = (teamName) => {
    const key = normalizeTeamSearchText(teamName);
    if (!rows.has(key)) rows.set(key, { team: teamName, played: 0, points: 0, goalsFor: 0, goalsAgainst: 0 });
    return rows.get(key);
  };

  for (const fixture of Array.isArray(matches) ? matches : []) {
    if (!isKnownResultMatch(fixture) || !leagueMatchesFixture(fixture.league, league)) continue;
    const fixtureTimestamp = new Date(`${String(fixture.date || "").slice(0, 10)}T00:00:00Z`).getTime();
    if (Number.isFinite(targetTimestamp) && (!Number.isFinite(fixtureTimestamp) || fixtureTimestamp >= targetTimestamp || fixtureTimestamp < fromTimestamp)) continue;
    const score = parseScoreParts(fixture.score);
    if (!score) continue;
    const home = ensureRow(fixture.homeTeam);
    const away = ensureRow(fixture.awayTeam);
    home.played += 1;
    away.played += 1;
    home.goalsFor += score.home;
    home.goalsAgainst += score.away;
    away.goalsFor += score.away;
    away.goalsAgainst += score.home;
    if (score.home > score.away) home.points += 3;
    else if (score.home < score.away) away.points += 3;
    else {
      home.points += 1;
      away.points += 1;
    }
  }

  return [...rows.values()]
    .map((row) => ({ ...row, goalDifference: row.goalsFor - row.goalsAgainst }))
    .sort((left, right) => right.points - left.points || right.goalDifference - left.goalDifference || right.goalsFor - left.goalsFor)
    .map((row, index) => ({ ...row, rank: index + 1 }));
}

function getTeamLeagueStanding(teamName = "", table = []) {
  return table.find((row) => teamNameMatches(row.team, teamName)) || null;
}

function getVsStrongTeamProfile(teamName = "", matches = [], limit = 10) {
  const strongMatches = (Array.isArray(matches) ? matches : [])
    .filter(isKnownResultMatch)
    .filter((match) => teamAppearsInMatch(match, teamName))
    .filter((match) => {
      const side = getTeamSide(match, teamName);
      const opponent = side === "home" ? match.awayTeam : side === "away" ? match.homeTeam : "";
      return hasStrongOpponentNameHint(opponent);
    })
    .sort((a, b) => String(b.date || "").localeCompare(String(a.date || "")))
    .slice(0, limit);
  const profile = getTeamRecentProfile(teamName, strongMatches, limit);
  return {
    ...profile,
    matches: strongMatches.length
  };
}

function getMatchImportanceSignal(match = {}) {
  const text = normalizeTeamSearchText([
    match.league,
    match.leagueName,
    match.roundName,
    match.stage,
    match.round
  ].filter(Boolean).join(" "));
  const isWorldOrCup = ["WORLDCUP", "WCQ", "UCL", "UEL", "ACL"].some((league) => leagueMatchesFixture(match.league, league));
  const isKnockout = ["round of", "16", "quarter", "semi", "final", "playoff", "knockout", "8강", "4강", "결승", "토너먼트", "플레이오프"].some((word) => text.includes(normalizeTeamSearchText(word)));
  if (isWorldOrCup && isKnockout) return { adjustment: 8, signal: "토너먼트 변수" };
  if (isWorldOrCup) return { adjustment: 4, signal: "중요 경기 변수" };
  return { adjustment: 0, signal: "" };
}

function getMatchContextProfile(match = {}, sourceMatches = []) {
  const contextPack = getStoredTeamContextPack();
  const statisticsPack = getStoredMatchStatisticsPack();
  const cacheKey = `${getMatchIdentity(match)}|${formatOdds(match.homeOdds)}|${formatOdds(match.drawOdds)}|${formatOdds(match.awayOdds)}|${Array.isArray(sourceMatches) ? sourceMatches.length : 0}|${contextPack.updatedAt || ""}|${statisticsPack.updatedAt || ""}`;
  if (matchContextProfileCache.has(cacheKey)) return matchContextProfileCache.get(cacheKey);

  const favoriteOdds = Math.min(
    ...[match.homeOdds, match.drawOdds, match.awayOdds]
      .map(parseSearchNumber)
      .filter((value) => value !== null)
  );
  const favoriteKey = parseSearchNumber(match.homeOdds) === favoriteOdds ? "H"
    : parseSearchNumber(match.awayOdds) === favoriteOdds ? "A"
      : "D";
  const underdogTeam = favoriteKey === "H" ? match.awayTeam : favoriteKey === "A" ? match.homeTeam : "";
  const favoriteTeam = favoriteKey === "H" ? match.homeTeam : favoriteKey === "A" ? match.awayTeam : "";
  const homeTeamMatches = [];
  const awayTeamMatches = [];
  const leagueMatches = [];
  const targetDate = String(match.date || "").slice(0, 10);
  for (const sourceMatch of Array.isArray(sourceMatches) ? sourceMatches : []) {
    if (!isKnownResultMatch(sourceMatch)) continue;
    const sourceDate = String(sourceMatch.date || "").slice(0, 10);
    if (targetDate && sourceDate && sourceDate >= targetDate) continue;
    if (teamAppearsInMatch(sourceMatch, match.homeTeam)) homeTeamMatches.push(sourceMatch);
    if (teamAppearsInMatch(sourceMatch, match.awayTeam)) awayTeamMatches.push(sourceMatch);
    if (leagueMatchesFixture(sourceMatch.league, match.league)) leagueMatches.push(sourceMatch);
  }
  const favoriteMatches = favoriteKey === "H" ? homeTeamMatches : favoriteKey === "A" ? awayTeamMatches : [];
  const underdogMatches = favoriteKey === "H" ? awayTeamMatches : favoriteKey === "A" ? homeTeamMatches : [];
  const underdogProfile = underdogTeam ? getTeamRecentProfile(underdogTeam, underdogMatches) : null;
  const favoriteProfile = favoriteTeam ? getTeamRecentProfile(favoriteTeam, favoriteMatches) : null;
  const underdogVsStrong = underdogTeam ? getVsStrongTeamProfile(underdogTeam, underdogMatches) : null;
  const localHomeVenueProfile = getTeamVenueProfile(match.homeTeam, homeTeamMatches, "home");
  const localAwayVenueProfile = getTeamVenueProfile(match.awayTeam, awayTeamMatches, "away");
  const leagueTable = getLeagueTable(match, leagueMatches);
  const localFavoriteStanding = favoriteTeam ? getTeamLeagueStanding(favoriteTeam, leagueTable) : null;
  const localUnderdogStanding = underdogTeam ? getTeamLeagueStanding(underdogTeam, leagueTable) : null;
  const officialHomeContext = getOfficialTeamContext(match, match.homeTeam);
  const officialAwayContext = getOfficialTeamContext(match, match.awayTeam);
  const homeVenueProfile = officialHomeContext?.homeProfile?.matches >= 3 ? officialHomeContext.homeProfile : localHomeVenueProfile;
  const awayVenueProfile = officialAwayContext?.awayProfile?.matches >= 3 ? officialAwayContext.awayProfile : localAwayVenueProfile;
  const favoriteVenueProfile = favoriteKey === "H" ? homeVenueProfile : favoriteKey === "A" ? awayVenueProfile : null;
  const underdogVenueProfile = favoriteKey === "H" ? awayVenueProfile : favoriteKey === "A" ? homeVenueProfile : null;
  const favoriteOfficialContext = favoriteKey === "H" ? officialHomeContext : favoriteKey === "A" ? officialAwayContext : null;
  const underdogOfficialContext = favoriteKey === "H" ? officialAwayContext : favoriteKey === "A" ? officialHomeContext : null;
  const favoriteStanding = favoriteOfficialContext?.standing || localFavoriteStanding;
  const underdogStanding = underdogOfficialContext?.standing || localUnderdogStanding;
  const homeScheduleProfile = getTeamScheduleProfile(match.homeTeam, homeTeamMatches, targetDate);
  const awayScheduleProfile = getTeamScheduleProfile(match.awayTeam, awayTeamMatches, targetDate);
  const favoriteScheduleProfile = favoriteKey === "H" ? homeScheduleProfile : favoriteKey === "A" ? awayScheduleProfile : null;
  const underdogScheduleProfile = favoriteKey === "H" ? awayScheduleProfile : favoriteKey === "A" ? homeScheduleProfile : null;
  const homePerformanceProfile = getTeamPerformanceProfile(match.homeTeam, targetDate, 5);
  const awayPerformanceProfile = getTeamPerformanceProfile(match.awayTeam, targetDate, 5);
  const favoritePerformanceProfile = favoriteKey === "H" ? homePerformanceProfile : favoriteKey === "A" ? awayPerformanceProfile : null;
  const underdogPerformanceProfile = favoriteKey === "H" ? awayPerformanceProfile : favoriteKey === "A" ? homePerformanceProfile : null;
  const signals = [];
  let adjustment = 0;
  const importance = getMatchImportanceSignal(match);

  if (importance.signal) {
    adjustment += importance.adjustment;
    signals.push(importance.signal);
  }

  if (underdogProfile?.matches >= 3) {
    if (underdogProfile.scoredRate >= 60) {
      adjustment += 4;
      signals.push("약팀 득점 흐름");
    }
    if (underdogProfile.lowConcedeRate >= 60 || underdogProfile.drawRate >= 35) {
      adjustment += 5;
      signals.push("수비 버팀");
    }
  }

  if (underdogVsStrong?.matches >= 2) {
    if (underdogVsStrong.drawRate >= 30 || underdogVsStrong.lowConcedeRate >= 50 || underdogVsStrong.scoredRate >= 50) {
      adjustment += 6;
      signals.push("강팀 상대 버팀");
    }
  }

  if (favoriteProfile?.matches >= 3) {
    if (favoriteProfile.avgGoalsAgainst >= 1.4) {
      adjustment += 4;
      signals.push("정배 수비 불안");
    }
    if (favoriteProfile.losses >= 2 || favoriteProfile.drawRate >= 35) {
      adjustment += 4;
      signals.push("정배 최근 흔들림");
    }
  }

  if (favoriteVenueProfile?.matches >= 3 && underdogVenueProfile?.matches >= 3) {
    if (underdogVenueProfile.pointsPerMatch >= favoriteVenueProfile.pointsPerMatch + 0.5) {
      adjustment += 5;
      signals.push("홈원정 흐름 역전");
    }
    if (underdogVenueProfile.avgGoalsFor >= 1.4 && favoriteVenueProfile.avgGoalsAgainst >= 1.2) {
      adjustment += 4;
      signals.push("득실점 상성 주의");
    }
  }

  if (favoriteStanding?.played >= 5 && underdogStanding?.played >= 5) {
    if (underdogStanding.rank < favoriteStanding.rank) {
      adjustment += 5;
      signals.push("리그 순위 역전");
    } else if (underdogStanding.rank <= favoriteStanding.rank + 2) {
      adjustment += 3;
      signals.push("리그 순위 박빙");
    }
  }

  if (favoriteScheduleProfile?.matches >= 3 && underdogScheduleProfile?.matches >= 3) {
    const restAdvantage = Number(favoriteScheduleProfile.restDays || 0) - Number(underdogScheduleProfile.restDays || 0);
    if (favoriteScheduleProfile.matchesLast7 >= 2 && restAdvantage <= -2) {
      signals.push("정배 일정 부담");
    }
    if (favoriteKey === "A" && favoriteScheduleProfile.consecutiveAway >= 2) {
      signals.push("정배 연속 원정");
    }
    if (underdogScheduleProfile.formTrend >= 0.5 && favoriteScheduleProfile.formTrend <= -0.3) {
      signals.push("최근 흐름 역전");
    }
    if (underdogScheduleProfile.goalTrend >= 0.7 && favoriteScheduleProfile.goalTrend <= -0.5) {
      signals.push("득실점 흐름 역전");
    }
  }

  if (favoritePerformanceProfile?.matches >= 3 && underdogPerformanceProfile?.matches >= 3) {
    if (
      underdogPerformanceProfile.avgShotsOnGoal !== null
      && favoritePerformanceProfile.avgShotsOnGoal !== null
      && underdogPerformanceProfile.avgShotsOnGoal >= favoritePerformanceProfile.avgShotsOnGoal + 1.2
    ) {
      adjustment += 3;
      signals.push("최근 경기력 역전");
    }
    if (
      underdogPerformanceProfile.avgExpectedGoals !== null
      && favoritePerformanceProfile.avgExpectedGoals !== null
      && underdogPerformanceProfile.avgExpectedGoals >= favoritePerformanceProfile.avgExpectedGoals + 0.3
    ) {
      adjustment += 3;
      signals.push("기대득점 우세");
    }
    if (favoritePerformanceProfile.avgShotsOnGoal !== null && favoritePerformanceProfile.avgShotsOnGoal < 3) {
      adjustment += 2;
      signals.push("정배 공격력 저하");
    }
  }

  const hasFullRecentSample = favoriteProfile?.matches >= 5 && underdogProfile?.matches >= 5;
  const hasVenueSample = favoriteVenueProfile?.matches >= 3 && underdogVenueProfile?.matches >= 3;
  const hasStandingSample = favoriteStanding?.played >= 5 && underdogStanding?.played >= 5;
  const confidence = hasFullRecentSample && hasVenueSample && (hasStandingSample || leagueTable.length === 0)
    ? "높음"
    : favoriteProfile?.matches >= 3 && underdogProfile?.matches >= 3
      ? "보통"
      : "낮음";

  const profile = {
    adjustment,
    signals: [...new Set(signals)],
    confidence,
    favoriteKey,
    favoriteTeam,
    underdogTeam,
    favoriteProfile,
    underdogProfile,
    underdogVsStrong,
    homeVenueProfile,
    awayVenueProfile,
    homeSeasonProfile: officialHomeContext?.seasonProfile || null,
    awaySeasonProfile: officialAwayContext?.seasonProfile || null,
    officialContextUpdatedAt: officialHomeContext?.updatedAt || officialAwayContext?.updatedAt || "",
    homeScheduleProfile,
    awayScheduleProfile,
    homePerformanceProfile,
    awayPerformanceProfile,
    favoritePerformanceProfile,
    underdogPerformanceProfile,
    favoriteScheduleProfile,
    underdogScheduleProfile,
    favoriteStanding,
    underdogStanding
  };
  matchContextProfileCache.set(cacheKey, profile);
  return profile;
}

function getMatchContextAdjustment(criteria = {}, favorite = null, breakdown = {}) {
  const signals = [];
  let adjustment = 0;
  const leagueText = normalizeTeamSearchText([criteria.league, criteria.leagueName].filter(Boolean).join(" "));
  const teamText = normalizeTeamSearchText([criteria.homeTeam, criteria.awayTeam, criteria.teamQuery].filter(Boolean).join(" "));
  const drawOdds = parseSearchNumber(criteria.drawOdds);
  const knownMatches = Number(breakdown.knownMatches || 0);
  const favoriteOdds = favorite?.odds ?? null;

  if (["WORLDCUP", "WCQ", "INTL_FRIENDLIES"].some((league) => leagueMatchesFixture(criteria.league, league))) {
    adjustment += leagueMatchesFixture(criteria.league, "INTL_FRIENDLIES") ? 6 : 4;
    signals.push("국가대항 보정");
  } else if (["UCL", "UEL", "ACL"].some((league) => leagueMatchesFixture(criteria.league, league))) {
    adjustment += 2;
    signals.push("컵대회 보정");
  } else if (leagueText.includes("friendly") || leagueText.includes("친선")) {
    adjustment += 6;
    signals.push("친선경기 보정");
  }

  if (favorite?.key === "A") {
    adjustment += 3;
    signals.push("원정 정배");
  }

  if (drawOdds !== null && drawOdds <= 3.25) {
    adjustment += 4;
    signals.push("무승부 낮음");
  } else if (drawOdds !== null && drawOdds <= 3.4) {
    adjustment += 2;
  }

  if (knownMatches > 0 && knownMatches < 5) {
    adjustment += 5;
  }

  const hasStrongFavoriteHint = HOME_TODAY_STRONG_TEAM_HINTS.some((hint) => teamText.includes(normalizeTeamSearchText(hint)));
  if (hasStrongFavoriteHint && favoriteOdds !== null && favoriteOdds < 1.75) {
    adjustment -= 3;
    signals.push("강팀 정배");
  }

  if (Number.isFinite(Number(criteria.contextAdjustment))) {
    adjustment += Number(criteria.contextAdjustment);
  }
  if (Array.isArray(criteria.contextSignals)) {
    signals.push(...criteria.contextSignals);
  }

  return { adjustment, signals };
}

function getJudgementOutcomes(breakdown = {}, criteria = {}) {
  return [
    { key: "H", label: "홈승", odds: parseSearchNumber(criteria.homeOdds), count: Number(breakdown.homeWins || 0) },
    { key: "D", label: "무승부", odds: parseSearchNumber(criteria.drawOdds), count: Number(breakdown.draws || 0) },
    { key: "A", label: "원정승", odds: parseSearchNumber(criteria.awayOdds), count: Number(breakdown.awayWins || 0) }
  ];
}

function getOutcomeToneClass(keyOrLabel = "") {
  const text = String(keyOrLabel || "").toUpperCase();
  if (text === "H" || text.includes("홈")) return "outcome-home";
  if (text === "D" || text.includes("무")) return "outcome-draw";
  if (text === "A" || text.includes("원정")) return "outcome-away";
  return "";
}

function formatOutcomeStatText(key, count = 0, rate = "0%") {
  const labels = {
    H: ["홈승", "승"],
    D: ["무승부", "무"],
    A: ["원정승", "승"]
  };
  const [label, suffix] = labels[key] || [String(key || ""), ""];
  return `${label} ${Number(count || 0)}${suffix} ${rate || "0%"}`;
}

function getFavoriteOddsBand(favoriteOdds) {
  const odds = Number(favoriteOdds);
  if (!Number.isFinite(odds)) return "배당 없음";
  if (odds >= 1.2 && odds <= 1.35) return "초강정배";
  if (odds <= 1.5) return "강정배";
  if (odds <= 1.65) return "정배";
  if (odds <= 1.8) return "약정배";
  if (odds <= 2.1) return "박빙정배";
  return "혼전";
}

function getFavoriteHitRateFromBreakdown(breakdown = {}, favoriteKey = "") {
  const knownMatches = Number(breakdown.knownMatches || 0);
  if (knownMatches <= 0) return null;
  const counts = {
    H: Number(breakdown.homeWins || 0),
    D: Number(breakdown.draws || 0),
    A: Number(breakdown.awayWins || 0)
  };
  return getRatePercent(counts[favoriteKey] || 0, knownMatches);
}

function calculateMatchJudgement(breakdown = {}, criteria = {}) {
  const totalMatches = Number(breakdown.totalMatches || 0);
  const knownMatches = Number(breakdown.knownMatches || 0);
  const signals = [];

  if (totalMatches <= 0) {
    return {
      judgement: "데이터 부족",
      risk: MATCH_JUDGEMENT_RISK["데이터 부족"],
      signals: ["데이터 부족"],
      favorite: null,
      favoriteHitRate: 0,
      drawRate: 0,
      underdogRate: 0,
      upsetProbability: null,
      baseUpsetProbability: null,
      matchAdjustment: 0,
      sampleSize: totalMatches,
      favoriteOdds: null,
      favoriteBand: "배당 없음",
      strongSignalCount: 0,
      confidence: "낮음"
    };
  }

  if (knownMatches < 15) signals.push("표본 부족");

  const outcomes = getJudgementOutcomes(breakdown, criteria);
  const outcomesWithOdds = outcomes.filter((outcome) => outcome.odds !== null);
  const favorite = outcomesWithOdds.length > 0
    ? outcomesWithOdds.reduce((best, outcome) => (outcome.odds < best.odds ? outcome : best), outcomesWithOdds[0])
    : outcomes.reduce((best, outcome) => (outcome.count > best.count ? outcome : best), outcomes[0]);

  const favoriteHitRate = getRatePercent(favorite?.count || 0, knownMatches);
  const drawRate = getRatePercent(Number(breakdown.draws || 0), knownMatches);
  const underdogRate = Math.max(...outcomes.filter((outcome) => outcome.key !== favorite?.key).map((outcome) => getRatePercent(outcome.count, knownMatches)));
  const favoriteOdds = favorite?.odds ?? null;
  const favoriteBand = getFavoriteOddsBand(favoriteOdds);
  const contextConfidence = ["높음", "보통", "낮음"].includes(criteria.contextConfidence) ? criteria.contextConfidence : "";
  const confidence = knownMatches < 15 || contextConfidence === "낮음"
    ? "낮음"
    : knownMatches >= 30 && contextConfidence !== "보통"
      ? "높음"
      : "보통";
  const strongSignals = [];

  if (favoriteHitRate < 55) strongSignals.push("정배 적중 낮음");

  if (drawRate >= 28) signals.push("무승부 주의");
  if (drawRate >= 25) strongSignals.push("무승부 주의");

  if (underdogRate >= 22) signals.push("역배 신호");
  if (underdogRate >= 18) strongSignals.push("역배 신호");

  const favoriteSelectionRate = favorite ? getSelectionRateForResult(favorite.key, criteria) : null;
  if (favoriteSelectionRate !== null && favoriteOdds !== null) {
    if (favoriteOdds >= 1.8 && favoriteOdds <= 1.95 && favoriteSelectionRate >= 60) {
      signals.push("정배 과몰림");
      strongSignals.push("정배 과몰림");
    } else if (favoriteOdds >= 1.7 && favoriteOdds <= 1.79 && favoriteSelectionRate >= 75) {
      signals.push("정배 과몰림");
      strongSignals.push("정배 과몰림");
    } else if (favoriteOdds >= 1.5 && favoriteOdds <= 1.69 && favoriteSelectionRate >= 85) {
      signals.push("정배 과몰림");
      strongSignals.push("정배 과몰림");
    }
  }

  if (outcomesWithOdds.length === 3) {
    const oddsValues = outcomesWithOdds.map((outcome) => outcome.odds);
    const oddsSpread = Math.max(...oddsValues) - Math.min(...oddsValues);
    if (oddsSpread <= 0.6 || favoriteOdds >= 2) {
      signals.push("균형 배당");
    }
  }

  const sameLeagueFavoriteHitRate = getFavoriteHitRateFromBreakdown(criteria.sameLeagueBreakdown, favorite?.key);
  if (sameLeagueFavoriteHitRate !== null && sameLeagueFavoriteHitRate < 55) strongSignals.push("같은 리그 정배 낮음");

  const exactFavoriteHitRate = getFavoriteHitRateFromBreakdown(criteria.exactBreakdown, favorite?.key);
  if (exactFavoriteHitRate !== null && exactFavoriteHitRate < 55 && favoriteHitRate < 55) {
    strongSignals.push("동일/유사 정배 낮음");
  }

  const strongSignalCount = [...new Set(strongSignals)].length;
  const canBeUpsetCandidate = favoriteOdds !== null && favoriteOdds <= 1.65 && knownMatches >= 15 && confidence !== "낮음";
  let judgement = "일반";
  if (canBeUpsetCandidate && favoriteOdds <= 1.35 && strongSignalCount >= 2) {
    judgement = "대형 이변 후보";
  } else if (canBeUpsetCandidate && favoriteOdds >= 1.36 && favoriteOdds <= 1.65 && strongSignalCount >= 2) {
    judgement = "이변 후보";
  } else if (favoriteOdds !== null && favoriteOdds >= 1.66 && favoriteOdds <= 1.8 && strongSignalCount >= 2 && knownMatches >= 15) {
    judgement = "정배불안";
  } else if (favoriteOdds !== null && favoriteOdds >= 1.81 && favoriteOdds <= 2.1) {
    judgement = "박빙주의";
  } else if (favoriteOdds !== null && favoriteOdds > 2.1) {
    judgement = "혼전";
  }

  signals.push(...strongSignals);
  if (signals.length === 0) signals.push("정배 우세");

  const nonDrawUnderdogRate = Math.max(0, ...outcomes
    .filter((outcome) => outcome.key !== favorite?.key && outcome.key !== "D")
    .map((outcome) => getRatePercent(outcome.count, knownMatches)));
  const baseUpsetProbability = clampPercent(drawRate + nonDrawUnderdogRate);
  const contextAdjustment = getMatchContextAdjustment(criteria, favorite, breakdown);
  signals.push(...contextAdjustment.signals);
  const upsetProbability = clampPercent(baseUpsetProbability + contextAdjustment.adjustment, totalMatches < 5 ? 0 : 5, 80);
  const uniqueSignals = [...new Set(signals)];
  return {
    judgement,
    risk: MATCH_JUDGEMENT_RISK[judgement] || "보통",
    signals: uniqueSignals,
    favorite,
    favoriteHitRate,
    drawRate,
    underdogRate,
    upsetProbability,
    baseUpsetProbability,
    matchAdjustment: contextAdjustment.adjustment,
    sampleSize: totalMatches,
    favoriteOdds,
    favoriteBand,
    strongSignalCount,
    confidence
  };
}

function getOddsPatternLabel(criteria = {}) {
  const homeOdds = parseSearchNumber(criteria.homeOdds);
  const drawOdds = parseSearchNumber(criteria.drawOdds);
  const awayOdds = parseSearchNumber(criteria.awayOdds);

  if (homeOdds === null || drawOdds === null || awayOdds === null) return "배당 패턴 준비중";

  const favorite = Math.min(homeOdds, awayOdds);
  const spread = Math.abs(homeOdds - awayOdds);

  if (favorite <= 1.55) return homeOdds < awayOdds ? "강한 홈 정배형" : "강한 원정 정배형";
  if (spread <= 0.25) return "균형형";
  if (homeOdds < awayOdds && homeOdds <= 2.05) return "홈 우세형";
  if (awayOdds < homeOdds && awayOdds <= 2.05) return "원정 우세형";
  if (drawOdds <= 3.15) return "무승부 경계형";
  return "혼전 배당형";
}

function getOddsRiskSignals(breakdown = {}, recentBreakdown = null) {
  const signals = [];
  const knownMatches = Number(breakdown.knownMatches || 0);
  const drawRate = parseRateValue(breakdown.drawRate);

  if (knownMatches > 0 && knownMatches < 10) signals.push("표본 부족");
  if (drawRate >= 25) signals.push("무승부 높음");

  if (recentBreakdown && Number(recentBreakdown.knownMatches || 0) > 0) {
    const top = getTopBreakdownResult(breakdown);
    const recentTop = getTopBreakdownResult(recentBreakdown);
    if (top.key !== recentTop.key) signals.push("최근 흐름 다름");
  }

  return signals;
}

function getOddsSearchVerdictText(breakdown = {}, criteria = {}, recentBreakdown = null) {
  const probabilityJudgement = calculateMatchJudgement(breakdown, criteria, recentBreakdown);
  if (probabilityJudgement.upsetProbability === null) {
    return "전적 없음";
  }
  const cleanSignals = (probabilityJudgement.signals || [])
    .filter((signal) => !["표본 부족", "데이터 부족", "역배 신호", "정배 적중 낮음"].includes(signal))
    .slice(0, 2);
  return `판정: ${probabilityJudgement.judgement}${cleanSignals.length ? ` · 신호: ${cleanSignals.join(" / ")}` : ""}`;
}

function getResultBreakdownMemo(breakdown) {
  const knownMatches = Number(breakdown.knownMatches || 0);
  const totalMatches = Number(breakdown.totalMatches || 0);

  if (totalMatches <= 0 || knownMatches <= 0) return "전적 없음";
  return `${knownMatches}/${totalMatches}경기`;
}

function downloadSampleCsv() {
  const blob = new Blob([SAMPLE_CSV], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");

  link.href = url;
  link.download = SAMPLE_CSV_FILENAME;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function getDefaultDataSource(league, season) {
  if (season === "2019-2026" && DEFAULT_DATA_PACK_LEAGUES[league]) {
    return {
      label: `${DEFAULT_DATA_PACK_LEAGUES[league].label} 2019-2026 데이터팩`,
      url: DEFAULT_DATA_PACK_LEAGUES[league].url,
      packLeague: league,
      packSeasonCodes: DEFAULT_DATA_PACK_2019_SEASONS
    };
  }

  if (season === "2020-2026" && DEFAULT_DATA_PACK_LEAGUES[league]) {
    return {
      label: `${DEFAULT_DATA_PACK_LEAGUES[league].label} 2020-2026 데이터팩`,
      url: DEFAULT_DATA_PACK_LEAGUES[league].url,
      packLeague: league,
      packSeasonCodes: DEFAULT_DATA_PACK_SEASONS
    };
  }

  return DEFAULT_DATA_SOURCES[league]?.[season] || null;
}

function setDefaultDataStatus(message) {
  const element = typeof document === "undefined" ? null : document.getElementById("default-data-status");
  if (element) element.textContent = message;
}

function waitForUiUpdate() {
  return new Promise((resolve) => {
    if (typeof requestAnimationFrame === "function") {
      requestAnimationFrame(() => resolve());
      return;
    }

    setTimeout(resolve, 0);
  });
}

function setAutoUpdateStatus(message) {
  const element = typeof document === "undefined" ? null : document.getElementById("auto-update-status");
  if (element) element.textContent = message;
}

function getTodayKey(date = new Date()) {
  if (typeof date === "string") return date.slice(0, 10);
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Seoul",
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  }).formatToParts(date).reduce((values, part) => {
    if (part.type !== "literal") values[part.type] = part.value;
    return values;
  }, {});
  return `${parts.year}-${parts.month}-${parts.day}`;
}

function getDateOffsetKey(offsetDays = 0, baseDate = new Date()) {
  const date = new Date(baseDate);
  date.setDate(date.getDate() + Number(offsetDays || 0));
  return getTodayKey(date);
}

function shiftDateKey(dateText, dayOffset) {
  const date = new Date(`${String(dateText || getTodayKey()).slice(0, 10)}T00:00:00+09:00`);
  if (Number.isNaN(date.getTime())) return getTodayKey();
  date.setDate(date.getDate() + Number(dayOffset || 0));
  return getTodayKey(date);
}

function getApiHistoryChunks({ endDate = getTodayKey(), totalDays = 30, chunkDays = 7 } = {}) {
  const safeTotalDays = Math.max(1, Math.min(Number(totalDays || 30), 60));
  const safeChunkDays = Math.max(1, Math.min(Number(chunkDays || 7), 14));
  const chunks = [];
  for (let offset = 0; offset < safeTotalDays; offset += safeChunkDays) {
    const days = Math.min(safeChunkDays, safeTotalDays - offset);
    chunks.push({
      endDate: shiftDateKey(endDate, -offset),
      days
    });
  }
  return chunks;
}

function getNextWeekendKey(baseDate = new Date()) {
  const date = new Date(baseDate);
  const day = date.getDay();
  const daysUntilSaturday = (6 - day + 7) % 7 || 7;
  date.setDate(date.getDate() + daysUntilSaturday);
  return getTodayKey(date);
}

function getPreviousWeekendKey(baseDate = new Date()) {
  const date = new Date(baseDate);
  const day = date.getDay();
  const daysSinceSaturday = (day - 6 + 7) % 7 || 7;
  date.setDate(date.getDate() - daysSinceSaturday);
  return getTodayKey(date);
}

function getCurrentTimestamp() {
  return new Date().toLocaleString("ko-KR");
}

function getLeagueLabel(league) {
  return DEFAULT_DATA_PACK_LEAGUES[league]?.label || formatLeagueName(league);
}

function getAutoUpdateSummary(storage) {
  const state = getAutoUpdateState(storage);
  const leagues = Array.isArray(state.lastLeagues) && state.lastLeagues.length > 0
    ? state.lastLeagues.map(getLeagueLabel).join(", ")
    : "5대 리그";
  const resultParts = [];

  if (Number.isFinite(state.lastImportedCount)) resultParts.push(`새로 저장 ${state.lastImportedCount}개`);
  if (Number.isFinite(state.lastDuplicateCount)) resultParts.push(`중복 제외 ${state.lastDuplicateCount}개`);
  if (state.lastStatus && !resultParts.length) resultParts.push(state.lastStatus);

  return {
    leagueSummary: leagues,
    lastCheck: state.lastUpdatedAt || state.lastChecked || "확인 전",
    resultSummary: resultParts.join(" / ") || "대기 중",
    message: state.lastMessage || "자동 업데이트 기록이 없습니다."
  };
}

function renderAutoUpdateManager(storage) {
  const summary = getAutoUpdateSummary(storage);
  const values = {
    "auto-update-league-summary": summary.leagueSummary,
    "auto-update-last-check": summary.lastCheck,
    "auto-update-result-summary": summary.resultSummary
  };

  for (const [id, value] of Object.entries(values)) {
    const element = document.getElementById(id);
    if (element) element.textContent = value;
  }
}

function setAccountStatus(message) {
  const element = document.getElementById("account-status");
  if (element) element.textContent = message;
}

function hasUsedGuestSearchTrial(storage) {
  const target = storage || (typeof window !== "undefined" ? window.localStorage : null);
  try {
    return target?.getItem(GUEST_SEARCH_TRIAL_KEY) === "true" || memoryGuestSearchTrialUsed;
  } catch (_error) {
    return memoryGuestSearchTrialUsed;
  }
}

function markGuestSearchTrialUsed(storage) {
  memoryGuestSearchTrialUsed = true;
  const target = storage || (typeof window !== "undefined" ? window.localStorage : null);
  try {
    target?.setItem(GUEST_SEARCH_TRIAL_KEY, "true");
  } catch (_error) {
    // Memory state still prevents repeated guest searches in this session.
  }
}

function requestGoogleLogin(message = "무료 체험을 사용했습니다. Google 로그인 후 계속 이용할 수 있습니다.") {
  if (activeFavoriteAccountId) return false;
  guestAccessGateRequested = true;
  setCloudAccountUi({ status: "signed_out", message });
  return true;
}

function canRunOddsSearch(storage) {
  if (activeFavoriteAccountId || !hasUsedGuestSearchTrial(storage)) return true;
  requestGoogleLogin();
  return false;
}

function canOpenMatchDetail(storage, showLogin = true) {
  if (activeFavoriteAccountId) return true;
  if (hasUsedGuestSearchTrial(storage)) {
    if (showLogin) {
      requestGoogleLogin("무료 체험을 사용했습니다. Google 로그인 후 경기 상세 분석을 계속 볼 수 있습니다.");
    }
    return false;
  }
  markGuestSearchTrialUsed(storage);
  return true;
}

function hasStoredCloudSession(storage) {
  const target = storage || (typeof window !== "undefined" ? window.localStorage : null);
  if (!target) return false;
  try {
    for (let index = 0; index < target.length; index += 1) {
      const key = String(target.key(index) || "");
      if (/^sb-.+-auth-token(?:\.\d+)?$/.test(key)) return true;
    }
  } catch (_error) {
    return false;
  }
  return false;
}

function renderLocalAccount(storage) {
  const account = loadLocalAccount(storage);
  const label = cloudAccountState === "loading" && !activeFavoriteAccountId
    ? "로그인 확인 중"
    : getLocalAccountLabel(storage, activeFavoriteAccountId);
  const storageMode = getStorageModeLabel(storage);
  const favoriteSearches = loadSearchHistory(storage).filter((entry) => entry.favorite);
  const autoUpdateState = getAutoUpdateState(storage);
  const lastUpdateLabel = autoUpdateState.lastUpdatedAt || autoUpdateState.lastChecked || "확인 전";
  const accountModeLabel = activeFavoriteAccountId
    ? (cloudAccountState === "offline" ? "Google 계정 · 동기화 대기" : "Google 계정 · 동기화")
    : storageMode === "브라우저 저장" ? "로컬 계정" : storageMode === "탭 저장" ? "탭 계정" : "임시 로컬 계정";
  const values = {
    "account-display-name": label,
    "account-summary-name": label,
    "account-summary-mode": accountModeLabel,
    "account-data-saved-search-count": String(favoriteSearches.length),
    "account-data-last-update": lastUpdateLabel
  };

  for (const [id, value] of Object.entries(values)) {
    const element = document.getElementById(id);
    if (element) element.textContent = value;
  }

  const input = document.getElementById("account-nickname");
  if (input && !input.value) input.value = account.nickname || "";
}

function getBundledFootballDataPack() {
  if (typeof window !== "undefined" && window.FOOTBALL_DATA_PACK) return window.FOOTBALL_DATA_PACK;
  if (typeof globalThis !== "undefined" && globalThis.FOOTBALL_DATA_PACK) return globalThis.FOOTBALL_DATA_PACK;
  return {};
}

function getBundledFootballDataSearchPack() {
  if (typeof window !== "undefined" && window.FOOTBALL_DATA_SEARCH_PACK) return window.FOOTBALL_DATA_SEARCH_PACK;
  if (typeof globalThis !== "undefined" && globalThis.FOOTBALL_DATA_SEARCH_PACK) return globalThis.FOOTBALL_DATA_SEARCH_PACK;
  return null;
}

// 로그인이 느리다는 신고를 어림짐작으로 쫓지 않으려고, 오래 걸린 단계를 화면에 같이 적는다.
// 1초 넘게 걸린 단계만 보여줘서 평소에는 눈에 띄지 않는다.
// 안드로이드 앱에서만 로그인이 안 되는 원인을 기기 화면에서 바로 읽기 위한 표시다.
// 특히 "코드는 돌아왔는데 검증값이 없음"이면 로그인 창과 앱이 저장소를 공유하지 못한다는 뜻이라,
// 그 한 줄로 원인이 갈린다.
function renderAuthDiagnosticNote(details = {}) {
  if (typeof document === "undefined") return;
  const note = document.getElementById("auth-diagnostic-note");
  if (!note) return;
  // 평소에는 숨긴다. 테스터에게 보이는 화면이라 기술 문구가 늘 떠 있을 이유가 없다.
  // 로그인이 실패했을 때만 띄워서, 재발하면 캡처 한 장으로 원인을 가릴 수 있게 남겨둔다.
  const failed = details.stage === "session_error" || Boolean(details.callbackError);
  if (!failed) {
    note.hidden = true;
    note.textContent = "";
    return;
  }

  // 표시는 영문/기호로만 만든다. 화면 문구가 아니라 진단용 값이라 번역 대상이 아니다.
  const mark = (value) => (value ? "O" : "X");
  note.hidden = false;
  note.textContent = `[${details.stage || "-"}${details.result ? `/${details.result}` : ""}] `
    + `code:${mark(details.callbackCode)} verifier:${mark(details.verifierPresent)} `
    + `session:${mark(details.sessionStored)} err:${mark(details.callbackError)} `
    + `android:${mark(details.android)} standalone:${mark(details.standalone)}`;
}

function formatLoginTimingNote() {
  const timings = cloudAccountService?.getLoginTimings?.() || [];
  const slow = timings.filter((entry) => Number(entry.ms) >= 1000);
  if (slow.length === 0) return "";
  return ` (${slow.map((entry) => `${entry.stage} ${(entry.ms / 1000).toFixed(1)}초`).join(" · ")})`;
}

function normalizeMemberStatistics(value = {}) {
  const count = (item) => {
    const number = Number(item);
    return Number.isFinite(number) && number >= 0 ? Math.floor(number) : 0;
  };
  return {
    totalMembers: count(value.totalMembers),
    newToday: count(value.newToday),
    new7Days: count(value.new7Days),
    new14Days: count(value.new14Days),
    new30Days: count(value.new30Days),
    activeToday: count(value.activeToday),
    active7Days: count(value.active7Days),
    active14Days: count(value.active14Days),
    active30Days: count(value.active30Days),
    recentMembers: (Array.isArray(value.recentMembers) ? value.recentMembers : []).slice(0, 20).map((member) => ({
      displayName: String(member?.displayName || ""),
      email: String(member?.email || ""),
      createdAt: String(member?.createdAt || ""),
      lastSignInAt: String(member?.lastSignInAt || ""),
      provider: String(member?.provider || ""),
      isAdmin: Boolean(member?.isAdmin)
    }))
  };
}

function formatMemberStatisticDate(value, emptyLabel = "기록 없음") {
  if (!value) return emptyLabel;
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return emptyLabel;
  return new Intl.DateTimeFormat("ko-KR", {
    timeZone: "Asia/Seoul",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23"
  }).format(date);
}

function setMemberStatisticsStatus(message) {
  const element = document.getElementById("member-statistics-status");
  if (element) element.textContent = translateUiText(message);
}

function renderMemberStatistics(statistics = null) {
  if (typeof document === "undefined") return;
  const data = statistics ? normalizeMemberStatistics(statistics) : null;
  const values = {
    "member-stat-total": data ? `${data.totalMembers}명` : "-",
    "member-stat-new-today": data ? `${data.newToday}명` : "-",
    "member-stat-new-7-days": data ? `${data.new7Days}명` : "-",
    "member-stat-new-14-days": data ? `${data.new14Days}명` : "-",
    "member-stat-new-30-days": data ? `${data.new30Days}명` : "-",
    "member-stat-active-today": data ? `${data.activeToday}명` : "-",
    "member-stat-active-7-days": data ? `${data.active7Days}명` : "-",
    "member-stat-active-14-days": data ? `${data.active14Days}명` : "-",
    "member-stat-active-30-days": data ? `${data.active30Days}명` : "-",
    "member-stat-private-test-summary": data
      ? `최근 14일 가입 ${data.new14Days}명 · 최근 14일 활성 ${data.active14Days}명`
      : "최근 14일 가입 -명 · 최근 14일 활성 -명"
  };
  Object.entries(values).forEach(([id, text]) => {
    const element = document.getElementById(id);
    if (element) element.textContent = text;
  });

  const body = document.getElementById("member-statistics-members");
  if (!body) return;
  body.replaceChildren();
  const members = data?.recentMembers || [];
  if (members.length === 0) {
    const row = document.createElement("tr");
    const cell = document.createElement("td");
    cell.colSpan = 6;
    cell.textContent = data ? "최근 가입 회원이 없습니다." : "회원 통계를 불러오는 중입니다.";
    row.appendChild(cell);
    body.appendChild(row);
    return;
  }
  members.forEach((member) => {
    const row = document.createElement("tr");
    [
      member.displayName || "이름 없음",
      member.email || "이메일 없음",
      formatMemberStatisticDate(member.createdAt),
      formatMemberStatisticDate(member.lastSignInAt),
      member.provider || "확인 불가",
      member.isAdmin ? "관리자" : "일반"
    ].forEach((text) => {
      const cell = document.createElement("td");
      cell.textContent = text;
      row.appendChild(cell);
    });
    body.appendChild(row);
  });
}

async function loadMemberStatistics(force = false) {
  if (!isAdminMode()) return { error: "관리자 권한이 필요합니다." };
  const ownerId = activeFavoriteAccountId;
  if (!force && adminMemberStatistics && adminMemberStatisticsOwnerId === ownerId) {
    renderMemberStatistics(adminMemberStatistics);
    return { statistics: adminMemberStatistics };
  }
  if (adminMemberStatisticsLoadPromise) return adminMemberStatisticsLoadPromise;
  const accessToken = cloudAccountService?.getAccessToken?.() || "";
  if (!accessToken) return { error: "로그인 세션을 확인하지 못했습니다." };

  setMemberStatisticsStatus("회원 통계를 불러오는 중입니다.");
  adminMemberStatisticsLoadPromise = (async () => {
    const response = await fetch("/api/member-stats", {
      headers: { Accept: "application/json", Authorization: `Bearer ${accessToken}` },
      credentials: "same-origin"
    });
    const payload = await response.json().catch(() => ({}));
    if (!response.ok || !payload.statistics) throw new Error(payload.error || "회원 통계를 불러오지 못했습니다.");
    if (!isAdminMode() || activeFavoriteAccountId !== ownerId) return { error: "계정이 변경되었습니다." };
    adminMemberStatistics = normalizeMemberStatistics(payload.statistics);
    adminMemberStatisticsOwnerId = ownerId;
    renderMemberStatistics(adminMemberStatistics);
    setMemberStatisticsStatus(`최근 갱신: ${formatMemberStatisticDate(new Date().toISOString(), "방금")}`);
    return { statistics: adminMemberStatistics };
  })().catch((error) => {
    setMemberStatisticsStatus(error.message || "회원 통계를 불러오지 못했습니다.");
    return { error: error.message || "회원 통계를 불러오지 못했습니다." };
  }).finally(() => {
    adminMemberStatisticsLoadPromise = null;
  });
  return adminMemberStatisticsLoadPromise;
}

function wireMemberStatistics() {
  const refreshButton = document.getElementById("refresh-member-statistics");
  refreshButton?.addEventListener("click", async () => {
    refreshButton.disabled = true;
    await loadMemberStatistics(true);
    refreshButton.disabled = false;
  });
}

function setCloudAccountUi(state = {}) {
  cloudAccountState = state.status || cloudAccountState;
  cloudAccountIsAdmin = Boolean(state.isAdmin);
  const status = document.getElementById("cloud-account-status");
  const signInButton = document.getElementById("google-sign-in");
  const switchAccountButton = document.getElementById("google-switch-account");
  const signOutButton = document.getElementById("google-sign-out");
  const deleteButton = document.getElementById("google-delete-account");
  const signedIn = Boolean(state.userId || activeFavoriteAccountId);
  if (signedIn) guestAccessGateRequested = false;
  const accessLocked = !signedIn && guestAccessGateRequested;
  const messages = {
    loading: "Google 로그인 기능을 준비하는 중입니다.",
    syncing: "즐겨찾기를 안전하게 병합하는 중입니다.",
    signed_in: "Google 계정과 즐겨찾기가 동기화되었습니다.",
    signed_out: hasUsedGuestSearchTrial()
      ? "무료 체험을 사용했습니다. Google 로그인 후 계속 이용할 수 있습니다."
      : "배당 검색 또는 경기 상세를 한 번 무료로 체험할 수 있습니다.",
    offline: "서버 연결이 원활하지 않아 로컬·계정 캐시에 저장했습니다. 연결되면 다시 동기화합니다.",
    unavailable: "Google 로그인을 준비하지 못했습니다. 잠시 후 다시 시도해주세요."
  };
  if (status) status.textContent = `${state.message || messages[state.status] || "Google 로그인은 이 화면에서만 불러옵니다."}${formatLoginTimingNote()}`;
  if (signInButton) signInButton.hidden = signedIn;
  if (switchAccountButton) switchAccountButton.hidden = !signedIn;
  if (signOutButton) signOutButton.hidden = !signedIn;
  if (deleteButton) deleteButton.hidden = !signedIn;
  document.body?.classList.toggle("auth-locked", accessLocked);
  document.body?.classList.toggle("auth-pending", !signedIn && ["loading", "syncing"].includes(cloudAccountState));
  document.body?.classList.toggle("is-authenticated", signedIn);
  if (!cloudAccountIsAdmin) renderMemberStatistics(null);
  updateAdminControls();
  if (!isAdminMode() && typeof window !== "undefined" && ADMIN_VIEW_IDS.includes(getActiveViewId(window.location.hash))) {
    showActiveView(window.location.hash);
  }
  renderLocalAccount();
  showActiveView(typeof window !== "undefined" ? window.location.hash : "#account");
}

function loadBrowserScript(source, marker) {
  if (typeof document === "undefined") return Promise.reject(new Error("브라우저에서만 사용할 수 있습니다."));
  const existing = document.querySelector(`script[data-module="${marker}"]`);
  if (existing?.dataset.loaded === "true") return Promise.resolve();
  return new Promise((resolve, reject) => {
    const script = existing || document.createElement("script");
    script.dataset.module = marker;
    const cleanup = () => {
      clearTimeout(timer);
      script.removeEventListener("load", onLoad);
      script.removeEventListener("error", onError);
    };
    const fail = (message) => {
      cleanup();
      script.remove();
      reject(new Error(message));
    };
    const onLoad = () => { cleanup(); script.dataset.loaded = "true"; resolve(); };
    const onError = () => fail("로그인 모듈을 불러오지 못했습니다.");
    const timer = setTimeout(() => fail("로그인 준비 시간이 초과되었습니다. 네트워크 연결을 확인한 뒤 다시 눌러주세요."), 15000);
    script.addEventListener("load", onLoad, { once: true });
    script.addEventListener("error", onError, { once: true });
    if (!existing) {
      script.src = source;
      script.defer = true;
      document.head.appendChild(script);
    }
  });
}

async function loadCloudAccountService() {
  if (cloudAccountService) return cloudAccountService;
  await loadBrowserScript("/src/lib/auth.js?v=16", "account-auth");
  if (typeof window.ODDS_ARCHIVE_AUTH?.createAccountService !== "function") throw new Error("로그인 모듈을 초기화하지 못했습니다.");
  if (!cloudAccountService) cloudAccountService = window.ODDS_ARCHIVE_AUTH.createAccountService({
    favorites: {
      getLocalRecords: () => getFavoriteSyncRecords(),
      setAccountRecords: setActiveAccountFavoriteRecords,
      clearAccountRecords: clearActiveAccountFavoriteRecords
    },
    onStateChange: setCloudAccountUi,
    onDiagnostic: (details) => {
      appTelemetry?.recordAuthDiagnostic(details);
      renderAuthDiagnosticNote(details);
    }
  });
  return cloudAccountService;
}

function ensureCloudAccountReady() {
  if (cloudAccountLoadPromise) return cloudAccountLoadPromise;

  // setCloudAccountUi 가 실패 상태를 반영하려고 showActiveView 를 다시 부르는데,
  // 그 화면이 "account"면 showActiveView 가 여기를 또 부른다. 쿨다운 없이 두면
  // 실패할 때마다 즉시 재시도가 반복돼서 초당 수백 번씩 요청을 쏘는 무한 루프가 된다.
  // 실패 직후 얼마간은 새로 fetch 하지 않고 바로 거절해서 그 연쇄를 끊는다.
  if (cloudAccountLastFailureAt && Date.now() - cloudAccountLastFailureAt < CLOUD_ACCOUNT_RETRY_COOLDOWN_MS) {
    return Promise.reject(cloudAccountLastError || new Error("Google 로그인을 준비하지 못했습니다. 잠시 후 다시 시도해주세요."));
  }

  cloudAccountLoadPromise = (async () => {
    await loadCloudAccountService();
    await cloudAccountService.initialize();
    cloudAccountLastFailureAt = 0;
    cloudAccountLastError = null;
    return cloudAccountService;
  })().catch((error) => {
    cloudAccountLoadPromise = null;
    cloudAccountLastFailureAt = Date.now();
    cloudAccountLastError = error;
    setCloudAccountUi({ status: "unavailable", message: error.message || "Google 로그인을 준비하지 못했습니다." });
    throw error;
  });
  return cloudAccountLoadPromise;
}

function restoreStoredCloudSession(storage) {
  if (!hasStoredCloudSession(storage)) return false;
  cloudAccountState = "loading";
  renderLocalAccount(storage);
  if (guestAccessGateRequested) {
    ensureCloudAccountReady().catch(() => {});
  } else {
    runWhenBrowserIsIdle(() => ensureCloudAccountReady().catch(() => {}));
  }
  return true;
}

function wireCloudAccount() {
  const signInButton = document.getElementById("google-sign-in");
  const switchAccountButton = document.getElementById("google-switch-account");
  const signOutButton = document.getElementById("google-sign-out");
  const deleteButton = document.getElementById("google-delete-account");
  signInButton?.addEventListener("click", async () => {
    signInButton.disabled = true;
    const status = document.getElementById("cloud-account-status");
    if (status) status.textContent = translateUiText("Google 로그인 창을 여는 중입니다.");
    try {
      const service = await loadCloudAccountService();
      await service.signInWithGoogle();
    } catch (error) {
      setCloudAccountUi({ status: "unavailable", message: error.message });
    } finally {
      signInButton.disabled = false;
    }
  });
  switchAccountButton?.addEventListener("click", async () => {
    switchAccountButton.disabled = true;
    try {
      const service = await ensureCloudAccountReady();
      await service.switchGoogleAccount();
    } catch (error) {
      setCloudAccountUi({ status: "offline", message: error.message || "Google 계정을 바꾸지 못했습니다." });
    } finally {
      switchAccountButton.disabled = false;
    }
  });
  signOutButton?.addEventListener("click", async () => {
    signOutButton.disabled = true;
    try {
      await cloudAccountService?.signOut();
    } catch (error) {
      setCloudAccountUi({ status: "offline", message: error.message });
    } finally {
      signOutButton.disabled = false;
    }
  });
  deleteButton?.addEventListener("click", async () => {
    const confirmed = window.confirm("Google 로그인 계정과 서버에 동기화된 즐겨찾기를 영구 삭제할까요? 이 작업은 되돌릴 수 없습니다. 이 기기의 로컬 즐겨찾기는 유지됩니다.");
    if (!confirmed) return;
    deleteButton.disabled = true;
    try {
      const service = await ensureCloudAccountReady();
      await service.deleteAccount();
      setCloudAccountUi({ status: "signed_out", message: "Google 계정과 서버 즐겨찾기를 삭제했습니다. 이 기기의 로컬 즐겨찾기는 유지됩니다." });
    } catch (error) {
      setCloudAccountUi({ status: "offline", message: error.message || "계정을 삭제하지 못했습니다." });
    } finally {
      deleteButton.disabled = false;
    }
  });
}

function ensureFootballDataPackLoaded() {
  if (Object.keys(getBundledFootballDataPack()).length > 0) return Promise.resolve();
  if (footballDataPackLoadPromise) return footballDataPackLoadPromise;
  if (typeof document === "undefined") return Promise.resolve();

  footballDataPackLoadPromise = new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = "data/football-data-pack.js";
    script.async = true;
    script.onload = () => {
      cachedDefaultPackRows = null;
      cachedBaseMatches = null;
      cachedOddsBaseRateIndex = null;
      invalidateSearchableMatchesCache();
      resolve();
    };
    script.onerror = () => {
      footballDataPackLoadPromise = null;
      reject(new Error("과거 배당 데이터를 불러오지 못했습니다."));
    };
    document.head.appendChild(script);
  });

  return footballDataPackLoadPromise;
}

function getBundledApiOddsPack() {
  if (typeof window !== "undefined" && window.ODDS_ARCHIVE_API_ODDS_PACK) return window.ODDS_ARCHIVE_API_ODDS_PACK;
  if (typeof globalThis !== "undefined" && globalThis.ODDS_ARCHIVE_API_ODDS_PACK) return globalThis.ODDS_ARCHIVE_API_ODDS_PACK;
  return { matches: [] };
}

function getBundledTotoRoundPack() {
  const storedPack = getStoredTotoRoundPack();
  if (storedPack.currentRound?.fixtures?.length) return storedPack;
  if (typeof window !== "undefined" && window.TOTO_ROUND_PACK) return window.TOTO_ROUND_PACK;
  if (typeof globalThis !== "undefined" && globalThis.TOTO_ROUND_PACK) return globalThis.TOTO_ROUND_PACK;
  return {};
}

function getStoredTotoRoundPack(storage) {
  const targetStorage = getStorageTarget(storage);
  if (!targetStorage) return {};
  try {
    const value = JSON.parse(targetStorage.getItem(TOTO_ROUND_PACK_KEY) || "{}");
    return value && typeof value === "object" ? value : {};
  } catch (_error) {
    return {};
  }
}

function setStoredTotoRoundPack(pack, storage) {
  const targetStorage = getStorageTarget(storage);
  if (!targetStorage) return false;
  try {
    targetStorage.setItem(TOTO_ROUND_PACK_KEY, JSON.stringify(pack || {}));
    return true;
  } catch (_error) {
    return false;
  }
}

function getStoredProtoMarketPack(storage) {
  const targetStorage = getStorageTarget(storage);
  if (!targetStorage) return { markets: [] };
  try {
    const value = JSON.parse(targetStorage.getItem(PROTO_MARKET_PACK_KEY) || "{}");
    return value && Array.isArray(value.markets) ? value : { markets: [] };
  } catch (_error) {
    return { markets: [] };
  }
}

function setStoredProtoMarketPack(pack, storage) {
  const targetStorage = getStorageTarget(storage);
  if (!targetStorage) return false;
  try {
    targetStorage.setItem(PROTO_MARKET_PACK_KEY, JSON.stringify(pack || { markets: [] }));
    return true;
  } catch (_error) {
    return false;
  }
}

function parseProtoCsv(csvText) {
  const lines = String(csvText || "")
    .replace(/^\uFEFF/, "")
    .split(/\r?\n/)
    .filter((line) => line.trim());
  const headers = parseCsvLine(lines.shift() || "").map((header) => normalizeCsvHeaderName(header));
  const requiredHeaders = ["gameno", "kickoffat", "league", "hometeam", "awayteam", "markettype", "line", "homelabel", "awaylabel", "homeodds", "awayodds"];
  if (requiredHeaders.some((header) => !headers.includes(header))) {
    return { error: "프로토 CSV 헤더가 올바르지 않습니다.", pack: { markets: [] } };
  }

  const markets = lines.map((line) => {
    const values = parseCsvLine(line);
    const row = Object.fromEntries(headers.map((header, index) => [header, String(values[index] || "").trim()]));
    return {
      gameNo: row.gameno,
      kickoffAt: row.kickoffat,
      league: row.league,
      homeTeam: row.hometeam,
      awayTeam: row.awayteam,
      marketType: row.markettype,
      line: row.line,
      homeLabel: row.homelabel,
      drawLabel: row.drawlabel || "",
      awayLabel: row.awaylabel,
      homeOdds: row.homeodds,
      drawOdds: row.drawodds || "",
      awayOdds: row.awayodds
    };
  }).filter((market) => market.gameNo && market.homeTeam && market.awayTeam && market.marketType);

  if (markets.length === 0) {
    return { error: "프로토 경기 데이터가 없습니다.", pack: { markets: [] } };
  }
  return { error: "", pack: { markets } };
}

async function loadProtoCsvFile(file, storage) {
  if (!requireAdminMode()) return { error: "관리자 권한이 필요합니다.", pack: { markets: [] } };
  if (!file || typeof file.text !== "function") return { error: "프로토 CSV를 선택해주세요.", pack: { markets: [] } };
  const result = parseProtoCsv(await file.text());
  if (!result.error && !setStoredProtoMarketPack(result.pack, storage)) {
    return { error: "프로토 데이터를 저장하지 못했습니다.", pack: { markets: [] } };
  }
  return result;
}

function parseTotoRoundCsv(csvText) {
  const lines = String(csvText || "")
    .replace(/^\uFEFF/, "")
    .split(/\r?\n/)
    .filter((line) => line.trim());
  const headers = parseCsvLine(lines.shift() || "").map((header) => normalizeCsvHeaderName(header));
  const requiredHeaders = ["roundname", "no", "date", "league", "hometeam", "awayteam", "homeodds", "drawodds", "awayodds"];
  if (requiredHeaders.some((header) => !headers.includes(header))) {
    return { error: "승무패 회차 CSV 헤더가 올바르지 않습니다.", pack: {} };
  }

  const rows = lines.map((line) => {
    const values = parseCsvLine(line);
    const row = Object.fromEntries(headers.map((header, index) => [header, String(values[index] || "").trim()]));
    return {
      roundName: row.roundname,
      date: row.date,
      league: row.league,
      homeTeam: row.hometeam,
      awayTeam: row.awayteam,
      homeOdds: row.homeodds,
      drawOdds: row.drawodds,
      awayOdds: row.awayodds,
      no: row.no
    };
  }).filter((row) => row.homeTeam && row.awayTeam && row.no);

  if (rows.length === 0 || rows.length > 14) {
    return { error: "승무패 회차는 1~14경기만 등록할 수 있습니다.", pack: {} };
  }
  const roundName = String(rows[0].roundName || "").trim();
  return { error: "", pack: { currentRound: { roundName, fixtures: rows } } };
}

async function loadTotoRoundCsvFile(file, storage) {
  if (!requireAdminMode()) return { error: "관리자 권한이 필요합니다.", pack: {} };
  if (!file || typeof file.text !== "function") return { error: "승무패 회차 CSV를 선택해주세요.", pack: {} };
  const result = parseTotoRoundCsv(await file.text());
  if (!result.error && !setStoredTotoRoundPack(result.pack, storage)) {
    return { error: "승무패 회차를 저장하지 못했습니다.", pack: {} };
  }
  return result;
}

function normalizeTotoRoundFixture(fixture, round = {}) {
  return {
    date: fixture.date || getTodayKey(),
    league: fixture.league || "EPL",
    homeTeam: fixture.homeTeam || "",
    awayTeam: fixture.awayTeam || "",
    homeOdds: fixture.homeOdds || "",
    drawOdds: fixture.drawOdds || "",
    awayOdds: fixture.awayOdds || "",
    tolerance: fixture.tolerance || "0.05",
    roundName: round.roundName || "",
    totoNo: fixture.no || ""
  };
}

function getCurrentTotoRoundFixtures(pack = getBundledTotoRoundPack()) {
  const round = pack.currentRound || {};
  const fixtures = Array.isArray(round.fixtures) ? round.fixtures : [];
  return fixtures.map((fixture) => normalizeTotoRoundFixture(fixture, round));
}

function getEmbeddedCsvFromSource(source) {
  if (source.embeddedCsv) return source.embeddedCsv;

  if (source.packLeague && source.packSeasonCodes) {
    const pack = getBundledFootballDataPack()[source.packLeague] || {};
    return source.packSeasonCodes
      .map((seasonCode) => pack[seasonCode])
      .filter(Boolean);
  }

  return null;
}

function getDefaultPackRows() {
  if (cachedDefaultPackRows) return cachedDefaultPackRows;

  const searchPack = getBundledFootballDataSearchPack();
  if (searchPack?.version === 1 && Array.isArray(searchPack.matches)) {
    const resultLabels = ["H", "D", "A", "UNKNOWN"];
    cachedDefaultPackRows = searchPack.matches.map((match) => ({
      date: searchPack.dates[match[0]],
      league: searchPack.leagues[match[1]],
      homeTeam: searchPack.teams[match[2]],
      awayTeam: searchPack.teams[match[3]],
      homeOdds: match[4] / 100,
      drawOdds: match[5] / 100,
      awayOdds: match[6] / 100,
      result: resultLabels[match[7]] || "UNKNOWN",
      score: searchPack.scores[match[8]] || ""
    }));
    return cachedDefaultPackRows;
  }

  const pack = getBundledFootballDataPack();
  const parsedResults = [];

  for (const [league, seasons] of Object.entries(pack)) {
    for (const [seasonCode, csvText] of Object.entries(seasons || {})) {
      parsedResults.push({
        fileName: `${league} ${seasonCode}`,
        ...parseCsvPreview(csvText)
      });
    }
  }

  if (parsedResults.length === 0) {
    cachedDefaultPackRows = [];
    return cachedDefaultPackRows;
  }

  const merged = mergeCsvParseResults(parsedResults);
  cachedDefaultPackRows = validateCsvRows(merged.rows).validRows;
  return cachedDefaultPackRows;
}

// ---- 시즌 키 해석 ----
// 데이터팩의 시즌 키는 세 형식이 섞여 있다.
//   "102"  -> 0102 -> 2001-02   (앞자리 0 이 빠진 분할 시즌)
//   "0506" -> 2005-06           (분할 시즌)
//   "2021" -> 리그에 따라 다르다: EPL 은 2020-21, J리그는 달력연도 2021
// 그래서 리그를 함께 봐야 한다. 단일 연도로 도는 대회만 따로 둔다.
const CALENDAR_SEASON_LEAGUES = new Set(["J1LEAGUE", "J2LEAGUE", "KLEAGUE1", "KLEAGUE2", "WORLDCUP", "WCQ", "ACL"]);

function usesCalendarSeason(leagueKey) {
  return CALENDAR_SEASON_LEAGUES.has(String(leagueKey || "").trim().toUpperCase());
}

function getSeasonStartYear(leagueKey, seasonCode) {
  const code = String(seasonCode || "").trim();
  if (!/^\d{3,4}$/.test(code)) return null;

  if (usesCalendarSeason(leagueKey) && code.length === 4 && Number(code) >= 1990) return Number(code);

  const startTwoDigits = Number(code.padStart(4, "0").slice(0, 2));
  return startTwoDigits >= 80 ? 1900 + startTwoDigits : 2000 + startTwoDigits;
}

function getSeasonLabel(leagueKey, seasonCode) {
  const startYear = getSeasonStartYear(leagueKey, seasonCode);
  if (startYear === null) return String(seasonCode || "");
  if (usesCalendarSeason(leagueKey)) return String(startYear);
  return `${startYear}-${String((startYear + 1) % 100).padStart(2, "0")}`;
}

// "이번 시즌"이 언제 시작했는지, 리그별 시즌제 기준으로 추정한다. 정확한 개막일 데이터가
// 없어서, 달력 시즌 리그(K리그·J리그 등)는 1/1, 유럽식 시즌 리그는 7/1을 기준으로 삼는다.
function getCurrentSeasonStartDate(leagueKey, referenceDate = new Date()) {
  const ref = referenceDate instanceof Date ? referenceDate : new Date(`${String(referenceDate).slice(0, 10)}T00:00:00Z`);
  const safeRef = Number.isNaN(ref.getTime()) ? new Date() : ref;
  const year = safeRef.getUTCFullYear();
  if (usesCalendarSeason(leagueKey)) return `${year}-01-01`;
  const month = safeRef.getUTCMonth(); // 0 = 1월
  const startYear = month >= 6 ? year : year - 1; // 7월부터 다음 시즌 시작으로 본다.
  return `${startYear}-07-01`;
}

// ---- 팀 프로필 ----
// 팀의 전적을 배당 구간 기저율과 나란히 놓는다.
// "정배일 때 몇 번 이겼나" 만으로는 의미가 없고, 같은 배당대의 평균과 비교해야 한다.
function buildTeamProfile(teamName, matches = [], options = {}) {
  const { index = getDefaultOddsBaseRateIndex() } = options;
  const target = normalizeTeamSearchText(normalizeTeamNameForStorage(teamName));
  const empty = {
    team: String(teamName || "").trim(),
    matches: 0,
    wins: 0,
    draws: 0,
    losses: 0,
    home: { matches: 0, wins: 0, draws: 0, losses: 0 },
    away: { matches: 0, wins: 0, draws: 0, losses: 0 },
    goalsFor: 0,
    goalsAgainst: 0,
    favorite: { matches: 0, wins: 0, expectedWins: 0 }
  };
  if (!target) return empty;

  const profile = { ...empty, home: { ...empty.home }, away: { ...empty.away }, favorite: { ...empty.favorite } };

  for (const match of Array.isArray(matches) ? matches : []) {
    const result = String(match?.result || "").trim().toUpperCase();
    if (!BASE_RATE_RESULTS.has(result)) continue;

    const home = normalizeTeamSearchText(normalizeTeamNameForStorage(match.homeTeam));
    const away = normalizeTeamSearchText(normalizeTeamNameForStorage(match.awayTeam));
    const isHome = home === target;
    const isAway = away === target;
    if (!isHome && !isAway) continue;

    const side = isHome ? profile.home : profile.away;
    profile.matches += 1;
    side.matches += 1;

    const won = (isHome && result === "H") || (isAway && result === "A");
    const lost = (isHome && result === "A") || (isAway && result === "H");
    if (result === "D") {
      profile.draws += 1;
      side.draws += 1;
    } else if (won) {
      profile.wins += 1;
      side.wins += 1;
    } else if (lost) {
      profile.losses += 1;
      side.losses += 1;
    }

    const score = String(match.score || "").match(/^(\d+)\s*-\s*(\d+)$/);
    if (score) {
      const homeGoals = Number(score[1]);
      const awayGoals = Number(score[2]);
      profile.goalsFor += isHome ? homeGoals : awayGoals;
      profile.goalsAgainst += isHome ? awayGoals : homeGoals;
    }

    // 이 팀이 정배였던 경기만 모아, 같은 구간의 평균 승률과 비교한다.
    const info = getFavoriteOddsInfo(match);
    if (!info) continue;
    const teamIsFavorite = (isHome && info.favoriteKey === "H") || (isAway && info.favoriteKey === "A");
    if (!teamIsFavorite) continue;

    const rate = getOddsBaseRate(match, { index });
    if (rate.favoriteWinRate === null) continue;
    profile.favorite.matches += 1;
    profile.favorite.expectedWins += rate.favoriteWinRate;
    if (won) profile.favorite.wins += 1;
  }

  return profile;
}

function summarizeTeamProfile(profile = {}) {
  const matches = Number(profile.matches || 0);
  const favoriteMatches = Number(profile.favorite?.matches || 0);
  return {
    ...profile,
    winRate: matches > 0 ? profile.wins / matches : null,
    goalsForAverage: matches > 0 ? profile.goalsFor / matches : null,
    goalsAgainstAverage: matches > 0 ? profile.goalsAgainst / matches : null,
    favoriteWinRate: favoriteMatches > 0 ? profile.favorite.wins / favoriteMatches : null,
    favoriteExpectedRate: favoriteMatches > 0 ? profile.favorite.expectedWins / favoriteMatches : null,
    favoriteLift: favoriteMatches > 0 ? (profile.favorite.wins - profile.favorite.expectedWins) / favoriteMatches : null
  };
}

function createTeamProfileRow(label, value, note = "") {
  const row = document.createElement("div");
  row.className = "team-profile-row";
  const name = document.createElement("span");
  name.textContent = label;
  const amount = document.createElement("strong");
  amount.textContent = value;
  row.append(name, amount);
  if (note) {
    const hint = document.createElement("small");
    hint.textContent = note;
    row.appendChild(hint);
  }
  return row;
}

function renderTeamHeadToHead(teamName, opponentName) {
  if (typeof document === "undefined") return;
  const container = document.getElementById("team-profile-h2h");
  if (!container) return;

  const opponent = String(opponentName || "").trim();
  if (!opponent) {
    container.hidden = true;
    container.replaceChildren();
    return;
  }

  // teamNameMatches 는 저장된 이름 쪽만 한/영을 오가며 비교하고 검색창에 입력된
  // 이름은 그대로 두기 때문에, 입력값도 저장 형식(정규화된 이름)으로 먼저 바꿔야
  // 언어가 섞인 데이터에서도 정확히 찾는다.
  const resolvedTeam = normalizeTeamNameForStorage(teamName) || teamName;
  const resolvedOpponent = normalizeTeamNameForStorage(opponent) || opponent;
  const h2h = splitHeadToHeadByVenue(resolvedTeam, resolvedOpponent, getSearchableMatches(), 10);
  const record = summarizeHeadToHeadRecord(resolvedTeam, h2h.all);
  const heading = document.createElement("strong");
  heading.textContent = `${translateUiText("맞대결")}: ${formatTeamName(resolvedTeam)} vs ${formatTeamName(resolvedOpponent)}`;
  const summary = document.createElement("small");
  summary.textContent = formatVenueRecordSummary(record);
  container.replaceChildren(heading, summary, createHeadToHeadVenueList(h2h.all));
  container.hidden = false;
}

function renderTeamProfile(teamName, opponentName = "") {
  if (typeof document === "undefined") return;
  const body = document.getElementById("team-profile-body");
  const status = document.getElementById("team-profile-status");
  if (!body || !status) return;

  const name = String(teamName || "").trim();
  if (!name) {
    body.hidden = true;
    status.textContent = "팀 이름을 넣으면 과거 전적과 배당 대비 성적을 보여줍니다. 상대팀도 넣으면 두 팀의 맞대결을 보여줍니다.";
    renderTeamHeadToHead("", "");
    return;
  }

  renderTeamHeadToHead(name, opponentName);

  const summary = summarizeTeamProfile(buildTeamProfile(name, getSearchableMatches()));
  if (summary.matches === 0) {
    body.hidden = true;
    status.textContent = "그 이름으로 찾은 과거 경기가 없습니다.";
    return;
  }

  const percent = (value) => (value === null ? "-" : `${(value * 100).toFixed(1)}%`);
  const record = (side) => `${side.wins}승 ${side.draws}무 ${side.losses}패`;

  const rows = [
    createTeamProfileRow("전체 전적", record(summary), `${summary.matches}경기 · 승률 ${percent(summary.winRate)}`),
    createTeamProfileRow("홈", record(summary.home), `${summary.home.matches}경기`),
    createTeamProfileRow("원정", record(summary.away), `${summary.away.matches}경기`),
    createTeamProfileRow("평균 득실", `득 ${(summary.goalsForAverage || 0).toFixed(2)} · 실 ${(summary.goalsAgainstAverage || 0).toFixed(2)}`, "")
  ];

  if (summary.favorite.matches > 0) {
    const lift = summary.favoriteLift;
    const liftText = `${lift >= 0 ? "+" : ""}${(lift * 100).toFixed(1)}%p`;
    rows.push(createTeamProfileRow(
      "정배일 때 승률",
      percent(summary.favoriteWinRate),
      `같은 구간 기저율 ${percent(summary.favoriteExpectedRate)} · 차이 ${liftText} · 표본 ${summary.favorite.matches}경기`
    ));
  }

  body.replaceChildren(...rows);
  body.hidden = false;
  status.textContent = `${formatTeamName(name)} 기록입니다.`;
}

function loadTeamProfileRecent(storage = getStorageTarget()) {
  try {
    const value = JSON.parse(storage?.getItem(TEAM_PROFILE_RECENT_KEY) || "[]");
    return Array.isArray(value) ? value.filter((item) => item && item.team) : [];
  } catch (_error) {
    return [];
  }
}

function saveTeamProfileRecent(teamName, opponentName, storage = getStorageTarget()) {
  const team = String(teamName || "").trim();
  if (!team) return loadTeamProfileRecent(storage);
  const opponent = String(opponentName || "").trim();
  const existing = loadTeamProfileRecent(storage).filter((item) => !(item.team === team && item.opponent === opponent));
  const next = [{ team, opponent }, ...existing].slice(0, TEAM_PROFILE_RECENT_LIMIT);
  try {
    storage?.setItem(TEAM_PROFILE_RECENT_KEY, JSON.stringify(next));
  } catch (_error) {
    // 저장 공간이 막혀 있어도(시크릿 모드 등) 검색 자체는 계속 동작해야 한다.
  }
  return next;
}

function renderTeamProfileRecent(onSelect) {
  if (typeof document === "undefined") return;
  const container = document.getElementById("team-profile-recent");
  if (!container) return;

  const recent = loadTeamProfileRecent();
  if (recent.length === 0) {
    container.hidden = true;
    container.replaceChildren();
    return;
  }

  const chips = recent.map((item) => {
    const chip = document.createElement("button");
    chip.type = "button";
    chip.className = "team-profile-recent-chip";
    chip.textContent = item.opponent
      ? `${formatTeamName(item.team)} vs ${formatTeamName(item.opponent)}`
      : formatTeamName(item.team);
    chip.addEventListener("click", () => onSelect(item.team, item.opponent));
    return chip;
  });
  container.replaceChildren(...chips);
  container.hidden = false;
}

function wireTeamProfile() {
  if (typeof document === "undefined") return;
  const input = document.getElementById("team-profile-input");
  const opponentInput = document.getElementById("team-profile-opponent-input");
  const button = document.getElementById("team-profile-search");
  if (!input || !button) return;

  const run = () => {
    const teamName = input.value;
    const opponentName = opponentInput?.value || "";
    renderTeamProfile(teamName, opponentName);
    if (String(teamName || "").trim()) {
      saveTeamProfileRecent(teamName, opponentName);
      renderTeamProfileRecent(applyRecent);
    }
  };
  const applyRecent = (teamName, opponentName) => {
    input.value = teamName;
    if (opponentInput) opponentInput.value = opponentName || "";
    run();
  };
  button.addEventListener("click", run);
  input.addEventListener("keydown", (event) => {
    if (event.key !== "Enter") return;
    event.preventDefault();
    run();
  });
  opponentInput?.addEventListener("keydown", (event) => {
    if (event.key !== "Enter") return;
    event.preventDefault();
    run();
  });
  renderTeamProfileRecent(applyRecent);
}

// ---- 홈 어드밴티지 추이 ----
// 5대 리그(EPL·라리가·세리에A·분데스리가·리그앙)를 합친 시즌별 결과 분포.
// 과거 데이터팩은 지연 로딩이라 여기 담아 두고,
// tests/home-advantage.test.js 가 팩과 어긋나지 않는지 지킨다.
const HOME_ADVANTAGE_LEAGUES = ["EPL", "LALIGA", "SERIEA", "BUNDESLIGA", "LIGUE1"];
const HOME_ADVANTAGE_MIN_SEASON_MATCHES = 500;

const HOME_ADVANTAGE_BY_SEASON = [
  { year: 2000, matches: 1678, home: 836, draw: 441, away: 401 },
  { year: 2001, matches: 1678, home: 810, draw: 443, away: 425 },
  { year: 2002, matches: 1752, home: 836, draw: 470, away: 446 },
  { year: 2003, matches: 1752, home: 816, draw: 464, away: 472 },
  { year: 2004, matches: 1826, home: 857, draw: 532, away: 437 },
  { year: 2005, matches: 1826, home: 831, draw: 504, away: 491 },
  { year: 2006, matches: 1826, home: 842, draw: 506, away: 478 },
  { year: 2007, matches: 1826, home: 843, draw: 493, away: 490 },
  { year: 2008, matches: 1826, home: 861, draw: 461, away: 504 },
  { year: 2009, matches: 1826, home: 877, draw: 476, away: 473 },
  { year: 2010, matches: 1826, home: 853, draw: 480, away: 493 },
  { year: 2011, matches: 1826, home: 850, draw: 485, away: 491 },
  { year: 2012, matches: 1826, home: 832, draw: 474, away: 520 },
  { year: 2013, matches: 1826, home: 852, draw: 426, away: 548 },
  { year: 2014, matches: 1826, home: 821, draw: 474, away: 531 },
  { year: 2015, matches: 1826, home: 810, draw: 473, away: 543 },
  { year: 2016, matches: 1826, home: 888, draw: 421, away: 517 },
  { year: 2017, matches: 1826, home: 828, draw: 447, away: 551 },
  { year: 2018, matches: 1826, home: 817, draw: 472, away: 537 },
  { year: 2019, matches: 1725, home: 761, draw: 420, away: 544 },
  { year: 2020, matches: 1826, home: 728, draw: 465, away: 633 },
  { year: 2021, matches: 1826, home: 781, draw: 472, away: 573 },
  { year: 2022, matches: 1826, home: 835, draw: 443, away: 548 },
  { year: 2023, matches: 1752, home: 755, draw: 463, away: 534 },
  { year: 2024, matches: 1752, home: 736, draw: 437, away: 579 },
  { year: 2025, matches: 1751, home: 771, draw: 445, away: 535 }
];

function summarizeHomeAdvantageSeason(season = {}) {
  const matches = Number(season.matches || 0);
  if (matches <= 0) return { year: season.year, matches: 0, homeRate: null, drawRate: null, awayRate: null };
  return {
    year: season.year,
    matches,
    homeRate: season.home / matches,
    drawRate: season.draw / matches,
    awayRate: season.away / matches
  };
}

function getHomeAdvantageTrend(seasons = HOME_ADVANTAGE_BY_SEASON) {
  return seasons.map(summarizeHomeAdvantageSeason).sort((left, right) => left.year - right.year);
}

// 처음 몇 시즌과 최근 몇 시즌의 홈승률을 비교해 변화 폭을 돌려준다.
function getHomeAdvantageShift(seasons = HOME_ADVANTAGE_BY_SEASON, span = 5) {
  const trend = getHomeAdvantageTrend(seasons).filter((season) => season.homeRate !== null);
  if (trend.length < span * 2) return null;

  const average = (list) => list.reduce((total, season) => total + season.homeRate, 0) / list.length;
  const earlyRate = average(trend.slice(0, span));
  const recentRate = average(trend.slice(-span));
  const lowest = trend.reduce((low, season) => (season.homeRate < low.homeRate ? season : low), trend[0]);

  return {
    span,
    earlyRate,
    recentRate,
    change: recentRate - earlyRate,
    lowestYear: lowest.year,
    lowestRate: lowest.homeRate,
    seasons: trend.length
  };
}

function renderHomeAdvantageTrend() {
  if (typeof document === "undefined") return;
  const chart = document.getElementById("home-advantage-chart");
  const summary = document.getElementById("home-advantage-summary");
  if (!chart || !summary) return;

  const trend = getHomeAdvantageTrend();
  const shift = getHomeAdvantageShift();
  if (trend.length === 0 || !shift) return;

  const change = (shift.change * 100).toFixed(1);
  summary.textContent = `${shift.seasons}시즌 동안 홈승률 ${(shift.earlyRate * 100).toFixed(1)}% → ${(shift.recentRate * 100).toFixed(1)}% · 변화 ${change}%p · 최저 ${shift.lowestYear}년 ${(shift.lowestRate * 100).toFixed(1)}%`;

  const width = 320;
  const height = 96;
  const padding = { top: 8, right: 6, bottom: 16, left: 6 };
  const rates = trend.map((season) => season.homeRate);
  const lowest = Math.min(...rates);
  const highest = Math.max(...rates);
  const span = highest - lowest || 1;
  const innerWidth = width - padding.left - padding.right;
  const innerHeight = height - padding.top - padding.bottom;
  const step = trend.length > 1 ? innerWidth / (trend.length - 1) : 0;
  const pointX = (index) => padding.left + step * index;
  const pointY = (rate) => padding.top + innerHeight - ((rate - lowest) / span) * innerHeight;

  const line = trend.map((season, index) => `${index === 0 ? "M" : "L"}${pointX(index).toFixed(1)} ${pointY(season.homeRate).toFixed(1)}`).join(" ");
  const lowestIndex = trend.findIndex((season) => season.year === shift.lowestYear);
  const firstYear = trend[0].year;
  const lastYear = trend[trend.length - 1].year;

  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("viewBox", `0 0 ${width} ${height}`);
  svg.setAttribute("role", "img");
  svg.setAttribute("aria-label", "시즌별 홈승률 추이");
  svg.classList.add("home-advantage-svg");
  svg.innerHTML = [
    `<path d="${line}" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" />`,
    lowestIndex >= 0
      ? `<circle cx="${pointX(lowestIndex).toFixed(1)}" cy="${pointY(trend[lowestIndex].homeRate).toFixed(1)}" r="3" fill="currentColor" />`
      : "",
    `<text x="${padding.left}" y="${height - 4}" class="home-advantage-axis">${firstYear}</text>`,
    `<text x="${width - padding.right}" y="${height - 4}" text-anchor="end" class="home-advantage-axis">${lastYear}</text>`
  ].join("");

  chart.replaceChildren(svg);
}

// ---- 배당 구간 기저율 엔진 ----
// 관측값 옆에 비교 기준을 두기 위한 공용 계산부.
// 정배(배당이 낮은 쪽)의 배당 구간별로 그 정배가 실패한 비율을 집계한다.
// 무승부는 정배 실패로 계산한다(track-upset-candidates.js 의 favoriteFailed 와 동일 기준).

const ODDS_BASE_RATE_BANDS = [
  { key: "~1.30", min: 0, max: 1.3 },
  { key: "1.30~1.50", min: 1.3, max: 1.5 },
  { key: "1.50~1.70", min: 1.5, max: 1.7 },
  { key: "1.70~1.90", min: 1.7, max: 1.9 },
  { key: "1.90~2.10", min: 1.9, max: 2.1 },
  { key: "2.10~2.40", min: 2.1, max: 2.4 },
  { key: "2.40~", min: 2.4, max: Infinity }
];

// RESULT_VALUES 는 UNKNOWN 을 포함하므로 여기서는 확정 결과만 따로 둔다.
const BASE_RATE_RESULTS = new Set(["H", "D", "A"]);

// 기저율은 경기 전 배당 하나의 기준으로만 계산한다.
// football-data.co.uk 의 new/*.csv 는 마감 배당만 제공하므로 그 리그는 제외한다.
// 마감 배당은 시장 정보가 더 반영돼 이변률이 낮게 나오고, 섞으면 기준이 오염된다.
const CLOSING_ODDS_LEAGUES = new Set(["J1LEAGUE"]);

function usesClosingOdds(league) {
  return CLOSING_ODDS_LEAGUES.has(String(league || "").trim().toUpperCase());
}
const BASE_RATE_MIN_SAMPLE = 200;

// 과거 데이터팩(4.9MB)은 경기 상세와 배당 검색에서만 로드된다.
// 팩이 없는 화면에서도 같은 기준을 쓰기 위해 구간 집계를 내장해 둔다.
// 이 값이 팩과 어긋나지 않는지는 tests/base-rate.test.js 가 강제한다.
const ODDS_BASE_RATE_FALLBACK = {
  "~1.30": { matches: 4369, favoriteWins: 3637, upsets: 732, draws: 515 },
  "1.30~1.50": { matches: 5770, favoriteWins: 4079, upsets: 1691, draws: 1093 },
  "1.50~1.70": { matches: 7706, favoriteWins: 4694, upsets: 3012, draws: 1822 },
  "1.70~1.90": { matches: 7679, favoriteWins: 4165, upsets: 3514, draws: 2033 },
  "1.90~2.10": { matches: 7791, favoriteWins: 3687, upsets: 4104, draws: 2195 },
  "2.10~2.40": { matches: 12964, favoriteWins: 5593, upsets: 7371, draws: 3818 },
  "2.40~": { matches: 8417, favoriteWins: 3240, upsets: 5177, draws: 2532 }
};

function buildFallbackOddsBaseRateIndex() {
  const bands = {};
  const overall = createBaseRateBucket();
  for (const [band, bucket] of Object.entries(ODDS_BASE_RATE_FALLBACK)) {
    bands[band] = { ...bucket };
    overall.matches += bucket.matches;
    overall.favoriteWins += bucket.favoriteWins;
    overall.upsets += bucket.upsets;
    overall.draws += bucket.draws;
  }
  return { overall, bands, leagues: {} };
}

let cachedOddsBaseRateIndex = null;

function getFavoriteOddsInfo(match = {}) {
  const homeOdds = Number.parseFloat(match.homeOdds);
  const awayOdds = Number.parseFloat(match.awayOdds);
  if (!(homeOdds > 0) || !(awayOdds > 0)) return null;
  return homeOdds <= awayOdds
    ? { favoriteKey: "H", favoriteOdds: homeOdds }
    : { favoriteKey: "A", favoriteOdds: awayOdds };
}

function getOddsBandKey(favoriteOdds) {
  const odds = Number.parseFloat(favoriteOdds);
  if (!(odds > 0)) return "";
  const band = ODDS_BASE_RATE_BANDS.find((entry) => odds >= entry.min && odds < entry.max);
  return band ? band.key : "";
}

function createBaseRateBucket() {
  return { matches: 0, favoriteWins: 0, upsets: 0, draws: 0 };
}

function addToBaseRateBucket(bucket, result, favoriteKey) {
  bucket.matches += 1;
  if (result === favoriteKey) bucket.favoriteWins += 1;
  else bucket.upsets += 1;
  if (result === "D") bucket.draws += 1;
}

function buildOddsBaseRateIndex(rows = []) {
  const index = { overall: createBaseRateBucket(), bands: {}, leagues: {} };

  for (const row of Array.isArray(rows) ? rows : []) {
    const result = String(row?.result || "").trim().toUpperCase();
    if (!BASE_RATE_RESULTS.has(result)) continue;
    if (usesClosingOdds(row?.league)) continue;

    const info = getFavoriteOddsInfo(row);
    if (!info) continue;

    const band = getOddsBandKey(info.favoriteOdds);
    if (!band) continue;

    addToBaseRateBucket(index.overall, result, info.favoriteKey);

    if (!index.bands[band]) index.bands[band] = createBaseRateBucket();
    addToBaseRateBucket(index.bands[band], result, info.favoriteKey);

    const league = String(row.league || "").trim();
    if (!league) continue;
    if (!index.leagues[league]) index.leagues[league] = {};
    if (!index.leagues[league][band]) index.leagues[league][band] = createBaseRateBucket();
    addToBaseRateBucket(index.leagues[league][band], result, info.favoriteKey);
  }

  return index;
}

function summarizeBaseRateBucket(bucket) {
  const matches = Number(bucket?.matches || 0);
  if (matches <= 0) {
    return { sampleSize: 0, upsetRate: null, drawRate: null, favoriteWinRate: null };
  }
  return {
    sampleSize: matches,
    upsetRate: bucket.upsets / matches,
    drawRate: bucket.draws / matches,
    favoriteWinRate: bucket.favoriteWins / matches
  };
}

function getDefaultOddsBaseRateIndex() {
  if (cachedOddsBaseRateIndex) return cachedOddsBaseRateIndex;

  const index = buildOddsBaseRateIndex(getDefaultPackRows());
  // 팩이 아직 없으면 내장 집계로 답한다. 캐시하지 않으므로 로드 후에는 실제 값으로 바뀐다.
  if (index.overall.matches <= 0) return buildFallbackOddsBaseRateIndex();

  cachedOddsBaseRateIndex = index;
  return index;
}

function createOddsBaseRateNote(match = {}) {
  if (typeof document === "undefined") return null;

  const baseRate = getOddsBaseRate(match);
  if (!(baseRate.sampleSize > 0)) return null;

  const note = document.createElement("small");
  note.className = "match-detail-base-rate";
  const rate = `${(baseRate.upsetRate * 100).toFixed(1)}%`;
  const sample = baseRate.sampleSize.toLocaleString("en-US");
  const favorite = formatOdds(baseRate.favoriteOdds);
  note.textContent = baseRate.scope === "league"
    ? `정배 ${favorite} · ${formatLeagueName(baseRate.league)} 역대 이변률 ${rate} · 표본 ${sample}경기`
    : `정배 ${favorite} · 역대 이변률 ${rate} · 표본 ${sample}경기`;
  return note;
}

// 리그 표본이 충분하면 리그 기준, 아니면 전체 구간 기준으로 물러선다.
// 어느 기준을 썼는지 scope 로 함께 돌려주어 화면에서 숨기지 않는다.
function getOddsBaseRate(match = {}, options = {}) {
  const {
    league = String(match.league || "").trim(),
    index = getDefaultOddsBaseRateIndex(),
    minimumSampleSize = BASE_RATE_MIN_SAMPLE
  } = options;

  const info = getFavoriteOddsInfo(match);
  const empty = {
    band: "",
    scope: "none",
    league: "",
    favoriteKey: "",
    favoriteOdds: null,
    sampleSize: 0,
    upsetRate: null,
    drawRate: null,
    favoriteWinRate: null
  };
  if (!info) return empty;

  const band = getOddsBandKey(info.favoriteOdds);
  if (!band) return empty;

  const leagueBucket = league ? index?.leagues?.[league]?.[band] : null;
  const useLeague = Number(leagueBucket?.matches || 0) >= minimumSampleSize;
  const bucket = useLeague ? leagueBucket : index?.bands?.[band];
  const summary = summarizeBaseRateBucket(bucket);

  return {
    band,
    scope: summary.sampleSize > 0 ? (useLeague ? "league" : "band") : "none",
    league: useLeague ? league : "",
    favoriteKey: info.favoriteKey,
    favoriteOdds: info.favoriteOdds,
    ...summary
  };
}

function getOddsBaseRateTable(options = {}) {
  const { index = getDefaultOddsBaseRateIndex(), league = "" } = options;
  const source = league ? index?.leagues?.[league] || {} : index?.bands || {};
  return ODDS_BASE_RATE_BANDS.map((entry) => ({
    band: entry.key,
    ...summarizeBaseRateBucket(source[entry.key])
  }));
}

// ---- 이변 후보 공개 검증 기록 ----
// 후보별로 그 경기의 정배 배당 구간 기저율을 더해 기대치를 만들고 실제와 비교한다.
// 전체 평균이 아니라 구간을 맞춰야 비교가 성립한다.

const UPSET_AUDIT_PATH = "data/upset-candidate-audit.json";
let upsetAuditPack = null;
let upsetAuditLoadPromise = null;

function buildUpsetTrackRecord(audit = {}, options = {}) {
  const { index = getDefaultOddsBaseRateIndex() } = options;
  const candidates = Object.values(audit?.candidates || {});
  const labels = new Map();
  let resolved = 0;
  let actualFailures = 0;
  let expectedFailures = 0;

  for (const candidate of candidates) {
    if (candidate?.favoriteFailed !== true && candidate?.favoriteFailed !== false) continue;

    const rate = getOddsBaseRate({
      homeOdds: candidate.homeOdds,
      drawOdds: candidate.drawOdds,
      awayOdds: candidate.awayOdds,
      league: candidate.league
    }, { index });
    if (rate.upsetRate === null) continue;

    const failed = candidate.favoriteFailed === true;
    resolved += 1;
    if (failed) actualFailures += 1;
    expectedFailures += rate.upsetRate;

    const label = String(candidate.candidateLabel || "").trim() || "기타";
    if (!labels.has(label)) labels.set(label, { label, resolved: 0, actualFailures: 0, expectedFailures: 0 });
    const bucket = labels.get(label);
    bucket.resolved += 1;
    if (failed) bucket.actualFailures += 1;
    bucket.expectedFailures += rate.upsetRate;
  }

  return {
    resolved,
    actualFailures,
    expectedFailures,
    actualRate: resolved > 0 ? actualFailures / resolved : null,
    expectedRate: resolved > 0 ? expectedFailures / resolved : null,
    byLabel: [...labels.values()].sort((left, right) => right.resolved - left.resolved)
  };
}

function ensureUpsetAuditLoaded() {
  if (upsetAuditPack) return Promise.resolve(upsetAuditPack);
  if (upsetAuditLoadPromise) return upsetAuditLoadPromise;
  if (typeof fetch !== "function") return Promise.resolve(null);

  upsetAuditLoadPromise = fetch(UPSET_AUDIT_PATH)
    .then((response) => (response.ok ? response.json() : null))
    .then((pack) => {
      upsetAuditPack = pack;
      return pack;
    })
    .catch(() => {
      upsetAuditLoadPromise = null;
      return null;
    });

  return upsetAuditLoadPromise;
}

function formatUpsetTrackRecordText(record = {}) {
  if (!record || !(record.resolved > 0)) return "";
  const actual = `${(record.actualRate * 100).toFixed(1)}%`;
  const expected = `${(record.expectedRate * 100).toFixed(1)}%`;
  return `검증 ${record.resolved}건 · 실제 ${actual} · 같은 구간 기저율 ${expected}`;
}

function renderUpsetTrackRecord(record = {}) {
  if (typeof document === "undefined") return;
  const panel = document.querySelector(".home-upset-panel");
  if (!panel) return;

  const text = formatUpsetTrackRecordText(record);
  let note = document.getElementById("home-upset-track-record");

  if (!text) {
    if (note) note.remove();
    return;
  }

  if (!note) {
    note = document.createElement("small");
    note.id = "home-upset-track-record";
    note.className = "home-upset-track-record";
    const heading = panel.querySelector(".home-upset-heading");
    if (heading && heading.nextSibling) panel.insertBefore(note, heading.nextSibling);
    else panel.appendChild(note);
  }
  note.textContent = text;
}

async function loadUpsetTrackRecord() {
  const audit = await ensureUpsetAuditLoaded();
  if (!audit) return null;
  const record = buildUpsetTrackRecord(audit);
  renderUpsetTrackRecord(record);
  return record;
}

function normalizeApiOddsPackMatch(match = {}) {
  const source = match.source || "API 과거 배당";
  const normalized = {
    date: String(match.date || match.fixtureDate || "").slice(0, 10),
    league: normalizeLeagueNameForStorage(match.league || match.leagueKey || ""),
    homeTeam: normalizeTeamNameForStorage(match.homeTeam || match.home_team || match.home || ""),
    awayTeam: normalizeTeamNameForStorage(match.awayTeam || match.away_team || match.away || ""),
    homeOdds: String(match.homeOdds ?? match.home_odd ?? match.homeOdd ?? "").trim(),
    drawOdds: String(match.drawOdds ?? match.draw_odd ?? match.drawOdd ?? "").trim(),
    awayOdds: String(match.awayOdds ?? match.away_odd ?? match.awayOdd ?? "").trim(),
    result: String(match.result || "UNKNOWN").trim().toUpperCase(),
    score: String(match.score || "").trim(),
    source
  };

  const validation = validateCsvRow(normalized);
  return validation.messages.length === 0 ? {
    ...validation.row,
    source,
    fixtureId: String(match.fixtureId || "").trim(),
    oddsUpdatedAt: String(match.oddsUpdatedAt || "").trim(),
    oddsHistory: Array.isArray(match.oddsHistory) ? match.oddsHistory : []
  } : null;
}

function getApiOddsPackRows(pack = getBundledApiOddsPack()) {
  const matches = Array.isArray(pack?.matches) ? pack.matches : [];
  return matches
    .map(normalizeApiOddsPackMatch)
    .filter(Boolean);
}

// 번들 팩은 런타임에 바뀌지 않으므로 행별 정규화 결과를 재사용한다.
// 호출부가 결과를 수정해도 캐시가 오염되지 않도록 매번 얕은 복사본을 돌려준다.
const API_ODDS_PACK_NORMALIZED_CACHE = new WeakMap();

function getNormalizedApiOddsPackMatch(match) {
  if (!match || typeof match !== "object") return normalizeApiOddsPackMatch(match);
  let normalized = API_ODDS_PACK_NORMALIZED_CACHE.get(match);
  if (normalized === undefined) {
    normalized = normalizeApiOddsPackMatch(match);
    API_ODDS_PACK_NORMALIZED_CACHE.set(match, normalized);
  }
  return normalized ? { ...normalized } : normalized;
}

function getApiOddsPackRowsForDates(dates = [], pack = getBundledApiOddsPack()) {
  const dateSet = new Set(
    (dates instanceof Set ? [...dates] : Array.isArray(dates) ? dates : [dates])
      .map((date) => String(date || "").slice(0, 10))
      .filter(Boolean)
  );
  if (dateSet.size === 0) return [];

  const matches = Array.isArray(pack?.matches) ? pack.matches : [];
  return matches
    .filter((match) => dateSet.has(String(match?.date || match?.fixtureDate || "").slice(0, 10)))
    .map(getNormalizedApiOddsPackMatch)
    .filter(Boolean);
}

function getUniqueMatches(matches) {
  const seenKeys = new Set();
  const uniqueMatches = [];

  for (const match of matches) {
    const key = getDuplicateKey(match);
    if (seenKeys.has(key)) continue;
    seenKeys.add(key);
    uniqueMatches.push(match);
  }

  return uniqueMatches;
}

// 같은 경기가 두 소스에 있으면 과거 데이터팩을 채택한다.
// 팩은 경기 전 배당이고 26시즌과 팀명 표기가 같아 기저율 기준과 어긋나지 않는다.
// 팩에는 종료된 경기만 있으므로, 예정 경기는 이 규칙에 걸리지 않고 API 행이 그대로 남는다.
function getCrossSourceMatchKey(match = {}) {
  const date = String(match?.date || "").slice(0, 10);
  if (!date) return "";

  const homeTeam = normalizeTeamNameForStorage(match?.homeTeam);
  const awayTeam = normalizeTeamNameForStorage(match?.awayTeam);
  if (!homeTeam || !awayTeam) return "";

  return [date, homeTeam, awayTeam].join("|");
}

function dropRowsCoveredByPack(packRows = [], apiRows = []) {
  const covered = new Set();
  for (const row of Array.isArray(packRows) ? packRows : []) {
    const key = getCrossSourceMatchKey(row);
    if (key) covered.add(key);
  }

  return (Array.isArray(apiRows) ? apiRows : []).filter((row) => {
    const key = getCrossSourceMatchKey(row);
    return !key || !covered.has(key);
  });
}

function getBaseMatches() {
  if (cachedBaseMatches) return cachedBaseMatches;

  const packRows = getDefaultPackRows();
  cachedBaseMatches = getUniqueMatches([...packRows, ...dropRowsCoveredByPack(packRows, getApiOddsPackRows())]);
  return cachedBaseMatches;
}

function buildDefaultDataFailureMessage({ url = "", status = "", reason = "", responsePreview = "" } = {}) {
  const parts = ["데이터를 불러오지 못했습니다. 데이터 추가를 이용해주세요."];
  if (url) parts.push(`CSV URL: ${url}`);
  if (status) parts.push(`응답 상태 코드: ${status}`);
  if (reason) parts.push(`원인: ${reason}`);
  if (responsePreview) parts.push(`응답 내용 일부: ${responsePreview}`);
  parts.push("CORS 또는 브라우저 차단 가능성이 있습니다.");
  parts.push("자동 가져오기가 차단된 경우 Football-Data 파일을 직접 다운로드해 데이터 추가를 이용해주세요.");
  return parts.join(" ");
}

async function importDefaultData({ league, season, fetcher = fetch, storage, preferRemote = false } = {}) {
  const source = getDefaultDataSource(league, season);
  if (!source) {
    return {
      error: buildDefaultDataFailureMessage({ reason: "지원하지 않는 리그 또는 시즌입니다." }),
      importedCount: 0,
      matches: loadStoredMatches(storage)
    };
  }

  const embeddedCsv = getEmbeddedCsvFromSource(source);
  if (embeddedCsv && !preferRemote) {
    const csvList = Array.isArray(embeddedCsv) ? embeddedCsv : [embeddedCsv];
    const parsedResults = csvList.map((csvText, index) => ({
      fileName: `${source.label} ${index + 1}`,
      ...parseCsvPreview(csvText)
    }));
    const merged = mergeCsvParseResults(parsedResults);

    if (merged.rows.length === 0) {
      return {
        error: buildDefaultDataFailureMessage({
          reason: merged.fileErrors.join(" ") || "내장 CSV 데이터가 비어 있습니다.",
          responsePreview: csvList[0]?.slice(0, 160) || ""
        }),
        importedCount: 0,
        matches: loadStoredMatches(storage),
        source
      };
    }

    const validation = validateCsvRows(merged.rows);
    const saveResult = saveMatches(validation.validRows, storage);

    return {
      error: "",
      importedCount: saveResult.savedCount,
      duplicateCount: saveResult.duplicateCount,
      matches: saveResult.matches,
      validation,
      source,
      fileCount: csvList.length,
      mode: "embedded"
    };
  }

  try {
    const response = await fetcher(source.url);
    if (!response) {
      return {
        error: buildDefaultDataFailureMessage({ url: source.url, reason: "네트워크 응답이 없습니다." }),
        importedCount: 0,
        matches: loadStoredMatches(storage),
        source
      };
    }

    const csvText = await response.text();
    if (response.ok === false) {
      return {
        error: buildDefaultDataFailureMessage({
          url: source.url,
          status: String(response.status || "알 수 없음"),
          reason: "CSV URL 오류 또는 서버 응답 오류",
          responsePreview: csvText.slice(0, 160)
        }),
        importedCount: 0,
        matches: loadStoredMatches(storage),
        source
      };
    }

    const parsed = parseCsvPreview(csvText);
    if (parsed.error) {
      return {
        error: buildDefaultDataFailureMessage({
          url: source.url,
          status: String(response.status || "200"),
          reason: parsed.error,
          responsePreview: csvText.slice(0, 160)
        }),
        importedCount: 0,
        matches: loadStoredMatches(storage),
        source
      };
    }

    const validation = validateCsvRows(parsed.rows);
    const saveResult = saveMatches(validation.validRows, storage);

    return {
      error: "",
      importedCount: saveResult.savedCount,
      duplicateCount: saveResult.duplicateCount,
      matches: saveResult.matches,
      validation,
      source
    };
  } catch (error) {
    const reason = error instanceof Error ? error.message : "네트워크 오류";
    return {
      error: buildDefaultDataFailureMessage({
        url: source.url,
        reason: `네트워크 오류 또는 브라우저 차단: ${reason}`
      }),
      importedCount: 0,
      matches: loadStoredMatches(storage),
      source
    };
  }
}

async function autoUpdateDefaultData({
  league = "EPL",
  season = "2025-2026",
  fetcher = typeof fetch === "function" ? fetch : null,
  storage,
  todayKey = getTodayKey()
} = {}) {
  const previousState = getAutoUpdateState(storage);

  if (previousState.lastChecked === todayKey) {
    return {
      skipped: true,
      error: "",
      importedCount: 0,
      duplicateCount: 0,
      matches: loadStoredMatches(storage),
      message: `자동 업데이트: 오늘 이미 확인했습니다. ${previousState.lastMessage || ""}`.trim()
    };
  }

  if (!fetcher) {
    const message = "자동 업데이트: 현재 환경에서는 네트워크 확인을 사용할 수 없습니다. 내장 기본 데이터로 계속 검색할 수 있습니다.";
    setAutoUpdateState({ lastChecked: todayKey, lastStatus: "unavailable", lastMessage: message, lastUpdatedAt: getCurrentTimestamp() }, storage);
    return {
      skipped: false,
      error: message,
      importedCount: 0,
      duplicateCount: 0,
      matches: loadStoredMatches(storage),
      message
    };
  }

  const result = await importDefaultData({ league, season, fetcher, storage, preferRemote: true });

  if (result.error) {
    const message = "자동 업데이트: 최신 데이터 확인이 차단되었습니다. 내장 기본 데이터로 계속 검색할 수 있습니다.";
    setAutoUpdateState({ lastChecked: todayKey, lastStatus: "blocked", lastMessage: message, lastUpdatedAt: getCurrentTimestamp() }, storage);
    return {
      ...result,
      skipped: false,
      message
    };
  }

  const message = `자동 업데이트 완료: 새로 저장 ${result.importedCount}개 / 중복 제외 ${result.duplicateCount || 0}개.`;
  setAutoUpdateState({ lastChecked: todayKey, lastStatus: "success", lastMessage: message, lastUpdatedAt: getCurrentTimestamp() }, storage);

  return {
    ...result,
    skipped: false,
    message
  };
}

async function autoUpdateLeagues({
  leagues = FIVE_MAJOR_LEAGUES,
  season = "2019-2026",
  fetcher = typeof fetch === "function" ? fetch : null,
  storage,
  todayKey = getTodayKey(),
  preferRemote = false
} = {}) {
  const targetLeagues = Array.isArray(leagues) && leagues.length > 0 ? leagues : FIVE_MAJOR_LEAGUES;
  let importedCount = 0;
  let duplicateCount = 0;
  let matches = loadStoredMatches(storage);
  const errors = [];

  for (const league of targetLeagues) {
    const result = await importDefaultData({ league, season, fetcher, storage, preferRemote });
    matches = result.matches || matches;

    if (result.error) {
      errors.push(`${getLeagueLabel(league)}: ${result.error}`);
      continue;
    }

    importedCount += result.importedCount || 0;
    duplicateCount += result.duplicateCount || 0;
  }

  const checkedAt = getCurrentTimestamp();
  const okCount = targetLeagues.length - errors.length;
  const message = errors.length === targetLeagues.length
    ? "5대 리그 업데이트 확인에 실패했습니다. 데이터 추가를 이용해주세요."
    : `5대 리그 업데이트 확인 완료: ${okCount}개 리그 / 새로 저장 ${importedCount}개 / 중복 제외 ${duplicateCount}개`;

  setAutoUpdateState({
    lastChecked: todayKey,
    lastStatus: errors.length ? "partial" : "success",
    lastMessage: errors.length ? `${message} ${errors.join(" ")}` : message,
    lastUpdatedAt: checkedAt,
    lastLeagues: targetLeagues,
    lastLeagueCount: targetLeagues.length,
    lastSeason: season,
    lastImportedCount: importedCount,
    lastDuplicateCount: duplicateCount
  }, storage);

  return {
    skipped: false,
    error: errors.length === targetLeagues.length ? errors.join(" ") : "",
    errors,
    importedCount,
    duplicateCount,
    matches,
    message
  };
}

function wireSampleCsvDownload() {
  const buttons = [
    document.getElementById("download-sample-csv"),
    document.getElementById("download-sample-csv-header")
  ].filter(Boolean);

  for (const button of buttons) {
    button.addEventListener("click", () => {
      if (requireAdminMode()) downloadSampleCsv();
    });
  }
}

function renderPreviewRows(rows) {
  const previewBody = document.getElementById("preview-table-body");
  if (!previewBody) return;

  previewBody.replaceChildren();

  for (const row of rows) {
    const tableRow = document.createElement("tr");

    for (const header of CSV_HEADERS) {
      const cell = document.createElement("td");
      cell.textContent = formatTableValue(header, row[header]);
      tableRow.appendChild(cell);
    }

    previewBody.appendChild(tableRow);
  }
}

function setValidationSummary(summary) {
  const counts = {
    "valid-row-count": summary.validRows,
    "error-row-count": summary.errorRows,
    "duplicate-row-count": summary.duplicateRows
  };

  for (const [id, value] of Object.entries(counts)) {
    const element = document.getElementById(id);
    if (element) element.textContent = String(value);
  }
}

function setSaveButtonState(validRows) {
  const button = document.getElementById("save-valid-rows");
  if (button) {
    button.disabled = validRows.length === 0;
  }
}

function setSaveStatus(message) {
  const status = document.getElementById("save-status");
  if (status) {
    status.textContent = message;
  }
}

function updateStoredMatchStatus(matches = loadStoredMatches()) {
  const uploadStatus = document.getElementById("stored-match-status");
  const searchStatus = document.getElementById("searchable-match-status");
  const searchableMatches = getSearchableMatches();

  if (uploadStatus) {
    uploadStatus.textContent = `현재 저장된 전체 경기 수: ${matches.length}개`;
  }

  if (searchStatus) {
    searchStatus.textContent = "";
  }

  updateTodayAnalysisDataStatus(searchableMatches);
  renderTodayCenter();
  updateEmptyDataActions(searchableMatches);
}

function updateTodayAnalysisDataStatus(matches = getSearchableMatches()) {
  const element = document.getElementById("today-analysis-data-status");
  if (element) element.textContent = "";
}

function updateSearchLeagueStatus(matches = getSearchableMatches()) {
  updateOddsLeagueOptions(matches);
}

function updateDashboard(matches = getSearchableMatches()) {
  const counts = getDashboardCounts(matches);
  const totalElement = document.getElementById("total-match-count");
  const analyzableElement = document.getElementById("analyzable-match-count");

  if (totalElement) totalElement.textContent = String(counts.totalMatches);
  if (analyzableElement) analyzableElement.textContent = String(counts.analyzableMatches);
  updateEmptyDataActions(matches);
}

function updateEmptyDataActions(matches) {
  const actions = document.getElementById("empty-data-actions");
  if (!actions) return;
  if (!isAdminMode()) {
    actions.hidden = true;
    return;
  }
  const availableMatches = Array.isArray(matches) ? matches : getSearchableMatches();
  actions.hidden = availableMatches.length > 0;
}

function updateDataStatus(storage) {
  const storedMatches = loadStoredMatches(storage);
  const searchableMatches = getSearchableMatches(storage);
  const searchableCounts = getDashboardCounts(searchableMatches);
  const unknownCount = searchableMatches.filter((match) => match.result === "UNKNOWN").length;
  const autoUpdateState = getAutoUpdateState(storage);
  const lastUpdateLabel = autoUpdateState.lastUpdatedAt || autoUpdateState.lastChecked || "확인 전";
  const storageModeLabel = getStorageModeLabel(storage);
  const values = {
    "data-status-stored-count": String(storedMatches.length),
    "data-status-analyzable-count": String(searchableCounts.analyzableMatches),
    "data-status-unknown-count": String(unknownCount),
    "data-status-last-update": lastUpdateLabel,
    "data-status-storage-mode": storageModeLabel,
    "top-status-match-count": String(searchableMatches.length),
    "top-status-last-update": lastUpdateLabel,
    "top-status-storage-mode": storageModeLabel
  };

  for (const [id, value] of Object.entries(values)) {
    const element = document.getElementById(id);
    if (element) element.textContent = value;
  }

  updateFixtureLeagueOptions(searchableMatches);
  updateOddsLeagueOptions(searchableMatches);
  updateMatchFilterOptions(searchableMatches);
  renderAutoUpdateManager(storage);
  renderLocalAccount(storage);
}

function setClearMatchesStatus(message) {
  const element = document.getElementById("clear-matches-status");
  if (element) element.textContent = message;
}

function setClearMatchesButtonState(matches = loadStoredMatches()) {
  const button = document.getElementById("clear-stored-matches");
  if (button) button.disabled = matches.length === 0;
}

function getMatchFilters() {
  return {
    league: document.getElementById("filter-league")?.value || "ALL",
    team: document.getElementById("filter-team")?.value || "ALL",
    result: document.getElementById("filter-result")?.value || "ALL"
  };
}

function renderStoredMatches(matches = getSearchableMatches()) {
  const body = document.getElementById("matches-table-body");
  const cardList = document.getElementById("stored-match-cards");
  const count = document.getElementById("visible-match-count");
  if (!body && !cardList) return;
  if (typeof window !== "undefined" && !isAdminMode()) {
    body?.replaceChildren();
    cardList?.replaceChildren();
    if (count) count.textContent = "0";
    return;
  }

  setClearMatchesButtonState(loadStoredMatches());
  updateMatchFilterOptions(matches);
  const filteredMatches = filterMatches(matches, getMatchFilters());
  const visibleMatches = filteredMatches.slice(0, STORED_MATCH_RENDER_LIMIT);
  if (count) count.textContent = String(filteredMatches.length);
  renderMatchDataBreakdown(filteredMatches);

  if (filteredMatches.length === 0) {
    if (cardList) {
      const empty = document.createElement("div");
      empty.className = "empty-state";
      empty.textContent = matches.length === 0 ? "저장된 경기가 없습니다." : "필터에 맞는 저장 경기가 없습니다.";
      cardList.replaceChildren(empty);
    }
    const row = document.createElement("tr");
    const cell = document.createElement("td");
    cell.colSpan = MATCH_TABLE_COLUMN_COUNT;
    cell.textContent = matches.length === 0 ? "저장된 경기 데이터가 없습니다." : "필터에 맞는 경기 데이터가 없습니다.";
    row.appendChild(cell);
    if (body) body.replaceChildren(row);
    return;
  }

  if (cardList) {
    const cards = visibleMatches.map((match) => {
      const card = document.createElement("article");
      card.className = "stored-match-card";
      card.tabIndex = 0;
      card.setAttribute?.("role", "button");

      const meta = document.createElement("span");
      meta.textContent = `${match.date} · ${formatLeagueName(match.league)}`;

      const title = document.createElement("strong");
      title.textContent = `${formatTeamName(match.homeTeam)} vs ${formatTeamName(match.awayTeam)}`;

      const detail = document.createElement("p");
      detail.textContent = `${formatOdds(match.homeOdds)} / ${formatOdds(match.drawOdds)} / ${formatOdds(match.awayOdds)} · ${formatMatchResultText(match)}`;

      const action = document.createElement("button");
      action.type = "button";
      action.className = "inline-action";
      action.textContent = "이 배당 검색";
      action.addEventListener("click", (event) => {
        event.stopPropagation();
        searchWithMatchOdds(match);
      });

      card.append(meta, title, detail, action);
      card.addEventListener("click", (event) => {
        if (isInteractiveElement(event.target)) return;
        openMatchDetail(match);
      });
      card.addEventListener("keydown", (event) => {
        if (event.key !== "Enter" && event.key !== " ") return;
        if (isInteractiveElement(event.target)) return;
        event.preventDefault();
        openMatchDetail(match);
      });
      return card;
    });
    cardList.replaceChildren(...cards);
  }

  const renderedRows = visibleMatches.map((match) => {
    const row = document.createElement("tr");
    row.tabIndex = 0;
    row.setAttribute?.("role", "button");
    const values = [
      match.date,
      formatLeagueName(match.league),
      formatTeamName(match.homeTeam),
      formatTeamName(match.awayTeam),
      formatOdds(match.homeOdds),
      formatOdds(match.drawOdds),
      formatOdds(match.awayOdds),
      formatResultLabel(match.result),
      match.score
    ];

    for (const value of values) {
      const cell = document.createElement("td");
      cell.textContent = value;
      row.appendChild(cell);
    }

    const actionCell = document.createElement("td");
    const searchButton = document.createElement("button");
    searchButton.type = "button";
    searchButton.className = "inline-action";
    searchButton.textContent = "이 배당으로 검색";
    searchButton.addEventListener("click", (event) => {
      event.stopPropagation();
      searchWithMatchOdds(match);
    });
    actionCell.appendChild(searchButton);
    row.appendChild(actionCell);

    row.addEventListener("click", (event) => {
      if (isInteractiveElement(event.target)) return;
      openMatchDetail(match);
    });
    row.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" && event.key !== " ") return;
      if (isInteractiveElement(event.target)) return;
      event.preventDefault();
      openMatchDetail(match);
    });

    return row;
  });

  body.replaceChildren(...renderedRows);
}

function setElementHidden(id, hidden) {
  const element = document.getElementById(id);
  if (element) element.hidden = hidden;
}

function setOddsResultVisibility(show) {
  setElementHidden("odds-results-section", !show);
  setElementHidden("analysis", !show);
}

function setTeamResultVisibility(show) {
  setElementHidden("team-match-count-row", !show);
  setElementHidden("team-breakdown-section", !show);
  setElementHidden("team-match-results-section", !show);
}

function createSearchResultCard(match) {
  const card = document.createElement("details");
  card.className = "search-result-card";
  card.open = true;
  card.tabIndex = 0;
  card.setAttribute?.("role", "button");

  const summary = document.createElement("summary");
  summary.className = "result-card-summary";

  const header = document.createElement("div");
  header.className = "result-card-header";

  const leftGroup = document.createElement("span");
  leftGroup.className = "result-card-header-left";

  const meta = document.createElement("span");
  meta.textContent = formatLeagueName(match.league);

  const detailButton = document.createElement("button");
  detailButton.type = "button";
  detailButton.className = "result-card-detail-button";
  detailButton.textContent = "상세분석 보기";
  detailButton.addEventListener("click", (event) => {
    event.preventDefault();
    openMatchDetail(match);
  });

  leftGroup.append(meta, detailButton);

  const resultPill = document.createElement("strong");
  resultPill.className = `result-pill ${getResultChipClass(match.result)}`;
  resultPill.textContent = formatResultLabel(match.result);

  header.append(leftGroup, resultPill);

  const title = document.createElement("strong");
  title.className = "result-match-title";
  title.textContent = match.score
    ? `${formatTeamName(match.homeTeam)} ${match.score.replace("-", " : ")} ${formatTeamName(match.awayTeam)}`
    : `${formatTeamName(match.homeTeam)} vs ${formatTeamName(match.awayTeam)}`;

  const scoreLine = document.createElement("p");
  scoreLine.className = "result-score-hero";
  scoreLine.textContent = `배당 ${formatOdds(match.homeOdds)} / ${formatOdds(match.drawOdds)} / ${formatOdds(match.awayOdds)}`;

  summary.append(header, title, scoreLine);

  const result = document.createElement("small");
  result.className = "result-score-line result-card-footer";
  result.textContent = match.date || "";

  const details = document.createElement("div");
  details.className = "result-card-details";
  const resultDate = document.createElement("span");
  resultDate.textContent = match.date || "";
  result.replaceChildren(...[resultDate].filter((item) => item.textContent));
  details.append(result);

  card.append(summary, details);
  card.addEventListener("click", (event) => {
    if (isInteractiveElement(event.target)) return;
    event.preventDefault();
    openMatchDetail(match);
  });
  card.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" && event.key !== " ") return;
    if (isInteractiveElement(event.target)) return;
    event.preventDefault();
    openMatchDetail(match);
  });
  return card;
}

function getResultChipClass(result) {
  if (result === "H") return "result-chip-home";
  if (result === "D") return "result-chip-draw";
  if (result === "A") return "result-chip-away";
  return "result-chip-unknown";
}

function formatResultChipLabel(result) {
  if (getUiLanguage() === "en") return ["H", "D", "A"].includes(result) ? result : "?";
  return formatResultLabel(result).slice(0, 1);
}

function getRecentKnownResults(matches = [], limit = 10) {
  return [...matches]
    .filter((match) => ["H", "D", "A"].includes(match.result))
    .sort((a, b) => String(b.date || "").localeCompare(String(a.date || "")))
    .slice(0, limit);
}

const MATCH_DETAIL_SIMILAR_TOLERANCE = 0.05;
const matchDetailMetaCache = new WeakMap();

function getSimilarOddsTolerance(targetOdds) {
  const numericTargetOdds = Number(targetOdds);
  if (!Number.isFinite(numericTargetOdds) || numericTargetOdds <= 0) return MATCH_DETAIL_SIMILAR_TOLERANCE;
  if (numericTargetOdds < 5) return MATCH_DETAIL_SIMILAR_TOLERANCE;
  return Math.min(0.75, numericTargetOdds * 0.04);
}

function isKnownResultMatch(match = {}) {
  return ["H", "D", "A"].includes(match.result);
}

function getMatchDetailMeta(match = {}) {
  if (match && typeof match === "object" && matchDetailMetaCache.has(match)) {
    return matchDetailMetaCache.get(match);
  }

  const meta = {
    date: String(match.date || "").slice(0, 10),
    league: normalizeTeamSearchText(getLeagueLabel(match.league || "")),
    homeTeam: normalizeTeamSearchText(match.homeTeam),
    awayTeam: normalizeTeamSearchText(match.awayTeam),
    homeOdds: parseSearchNumber(match.homeOdds),
    drawOdds: parseSearchNumber(match.drawOdds),
    awayOdds: parseSearchNumber(match.awayOdds)
  };

  if (match && typeof match === "object") matchDetailMetaCache.set(match, meta);
  return meta;
}

function getMatchDetailCriteria(match = {}, tolerance = MATCH_DETAIL_SIMILAR_TOLERANCE) {
  return {
    homeOdds: formatOdds(match.homeOdds),
    drawOdds: formatOdds(match.drawOdds),
    awayOdds: formatOdds(match.awayOdds),
    tolerance: formatOdds(tolerance),
    league: match.league || "ALL",
    leagueName: match.league || "",
    homeTeam: match.homeTeam || "",
    awayTeam: match.awayTeam || ""
  };
}

function getMatchIdentity(match = {}) {
  return [
    String(match.date || "").slice(0, 10),
    normalizeTeamSearchText(getLeagueLabel(match.league || "")),
    normalizeTeamSearchText(match.homeTeam),
    normalizeTeamSearchText(match.awayTeam)
  ].join("|");
}

// 공유 링크(?m=)로 들어왔을 때 그 식별자에 해당하는 경기를 원본 목록에서 찾는다.
function findMatchByIdentity(identity = "", matches = []) {
  const target = String(identity || "").trim();
  if (!target) return null;
  return (Array.isArray(matches) ? matches : []).find((match) => getMatchIdentity(match) === target) || null;
}

function isCurrentMatchRecord(match = {}, target = {}) {
  const matchMeta = getMatchDetailMeta(match);
  const targetMeta = getMatchDetailMeta(target);
  return (
    matchMeta.date === targetMeta.date
    && matchMeta.league === targetMeta.league
    && matchMeta.homeTeam === targetMeta.homeTeam
    && matchMeta.awayTeam === targetMeta.awayTeam
  );
}

function doOddsMatchTarget(match = {}, target = {}, tolerance = 0, exact = false) {
  const matchMeta = getMatchDetailMeta(match);
  const targetMeta = getMatchDetailMeta(target);
  const fields = ["homeOdds", "drawOdds", "awayOdds"];
  return fields.every((field) => {
    const matchOdds = matchMeta[field];
    const targetOdds = targetMeta[field];
    if (matchOdds === null || targetOdds === null) return false;
    if (exact) return Math.round(matchOdds * 100) === Math.round(targetOdds * 100);
    return Math.abs(matchOdds - targetOdds) <= getSimilarOddsTolerance(targetOdds);
  });
}

function getNormalizedImpliedOddsVector(match = {}) {
  const meta = getMatchDetailMeta(match);
  const homeOdds = Number(meta.homeOdds);
  const drawOdds = Number(meta.drawOdds);
  const awayOdds = Number(meta.awayOdds);

  if (![homeOdds, drawOdds, awayOdds].every((value) => Number.isFinite(value) && value > 0)) {
    return null;
  }

  const rawHome = 1 / homeOdds;
  const rawDraw = 1 / drawOdds;
  const rawAway = 1 / awayOdds;
  const total = rawHome + rawDraw + rawAway;

  if (!Number.isFinite(total) || total <= 0) return null;

  return {
    homeProbability: rawHome / total,
    drawProbability: rawDraw / total,
    awayProbability: rawAway / total
  };
}

function getImpliedOddsDistance(candidate = {}, target = {}) {
  const candidateVector = getNormalizedImpliedOddsVector(candidate);
  const targetVector = getNormalizedImpliedOddsVector(target);
  if (!candidateVector || !targetVector) return Number.POSITIVE_INFINITY;

  return (
    Math.abs(candidateVector.homeProbability - targetVector.homeProbability)
    + Math.abs(candidateVector.drawProbability - targetVector.drawProbability)
    + Math.abs(candidateVector.awayProbability - targetVector.awayProbability)
  );
}

function getSameLeagueClosestOddsMatches(target = {}, matches = [], limit = 5) {
  const targetMeta = getMatchDetailMeta(target);
  if (!hasCompleteOdds(target)) return [];

  return (Array.isArray(matches) ? matches : [])
    .filter(isKnownResultMatch)
    .filter((match) => !isCurrentMatchRecord(match, target))
    .filter((match) => hasCompleteOdds(match))
    .filter((match) => {
      const matchMeta = getMatchDetailMeta(match);
      return matchMeta.league === targetMeta.league || leagueMatchesFixture(match.league, target.league);
    })
    .map((match) => ({ match, distance: getImpliedOddsDistance(match, target) }))
    .filter((entry) => Number.isFinite(entry.distance))
    .sort((left, right) => {
      if (left.distance !== right.distance) return left.distance - right.distance;
      return String(right.match.date || "").localeCompare(String(left.match.date || ""));
    })
    .slice(0, limit)
    .map((entry) => entry.match);
}

function getOddsHistoryMatches(target = {}, matches = [], { tolerance = MATCH_DETAIL_SIMILAR_TOLERANCE, exact = false, sameLeague = false } = {}) {
  if (!hasCompleteOdds(target)) return [];
  return (Array.isArray(matches) ? matches : [])
    .filter(isKnownResultMatch)
    .filter((match) => !isCurrentMatchRecord(match, target))
    .filter((match) => !sameLeague || leagueMatchesFixture(match.league, target.league) || normalizeTeamSearchText(getLeagueLabel(match.league)) === normalizeTeamSearchText(getLeagueLabel(target.league)))
    .filter((match) => doOddsMatchTarget(match, target, tolerance, exact))
    .sort((a, b) => String(b.date || "").localeCompare(String(a.date || "")));
}

function teamAppearsInMatch(match = {}, teamName = "") {
  const query = typeof teamName === "string" ? normalizeTeamSearchText(teamName) : String(teamName || "");
  if (!query) return false;
  const meta = getMatchDetailMeta(match);
  return meta.homeTeam === query || meta.awayTeam === query;
}

function getRecentTeamMatches(target = {}, matches = [], teamName = "", limit = 5) {
  return (Array.isArray(matches) ? matches : [])
    .filter(isKnownResultMatch)
    .filter((match) => !isCurrentMatchRecord(match, target))
    .filter((match) => teamAppearsInMatch(match, teamName))
    .sort((a, b) => String(b.date || "").localeCompare(String(a.date || "")))
    .slice(0, limit);
}

function getMatchOddsMovement(target = {}, matches = []) {
  const snapshots = [];
  const relatedMatches = [target, ...(Array.isArray(matches) ? matches.filter((match) => isCurrentMatchRecord(match, target)) : [])];
  relatedMatches.forEach((match) => {
    (Array.isArray(match.oddsHistory) ? match.oddsHistory : []).forEach((entry) => snapshots.push(entry));
    const capturedAt = String(match.oddsUpdatedAt || match.updatedAt || "").trim();
    if (capturedAt && hasCompleteOdds(match)) {
      snapshots.push({
        capturedAt,
        homeOdds: match.homeOdds,
        drawOdds: match.drawOdds,
        awayOdds: match.awayOdds
      });
    }
  });

  const unique = new Map();
  snapshots.forEach((entry) => {
    const capturedAt = String(entry?.capturedAt || "").trim();
    const odds = [entry?.homeOdds, entry?.drawOdds, entry?.awayOdds].map(parseSearchNumber);
    if (!capturedAt || odds.some((value) => value === null || value < 1)) return;
    const key = `${capturedAt}|${odds.map((value) => value.toFixed(2)).join("|")}`;
    if (!unique.has(key)) {
      unique.set(key, {
        capturedAt,
        homeOdds: odds[0],
        drawOdds: odds[1],
        awayOdds: odds[2]
      });
    }
  });
  const history = Array.from(unique.values()).sort((left, right) => left.capturedAt.localeCompare(right.capturedAt));
  const first = history[0] || null;
  const latest = history[history.length - 1] || null;
  const movements = first && latest ? [
    { key: "H", label: "홈승", from: first.homeOdds, to: latest.homeOdds },
    { key: "D", label: "무승부", from: first.drawOdds, to: latest.drawOdds },
    { key: "A", label: "원정승", from: first.awayOdds, to: latest.awayOdds }
  ].map((item) => ({ ...item, difference: Number((item.to - item.from).toFixed(2)) })) : [];

  return {
    history,
    first,
    latest,
    movements,
    hasMovement: history.length >= 2,
    isAlertCandidate: movements.some((item) => Math.abs(item.difference) >= 0.1)
  };
}

function buildOddsMovementChartData(history = []) {
  const snapshots = (Array.isArray(history) ? history : []).map((entry) => ({
    capturedAt: String(entry?.capturedAt || "").trim(),
    homeOdds: parseSearchNumber(entry?.homeOdds),
    drawOdds: parseSearchNumber(entry?.drawOdds),
    awayOdds: parseSearchNumber(entry?.awayOdds)
  })).filter((entry) => entry.capturedAt && [entry.homeOdds, entry.drawOdds, entry.awayOdds].every((value) => value !== null && value >= 1));

  if (snapshots.length < 2) return null;

  const series = [
    { key: "H", label: "홈승", color: "#2563eb", values: snapshots.map((entry) => entry.homeOdds) },
    { key: "D", label: "무승부", color: "#64748b", values: snapshots.map((entry) => entry.drawOdds) },
    { key: "A", label: "원정승", color: "#dc2626", values: snapshots.map((entry) => entry.awayOdds) }
  ];
  const allValues = series.flatMap((item) => item.values);
  const rawMin = Math.min(...allValues);
  const rawMax = Math.max(...allValues);
  const padding = Math.max(0.08, (rawMax - rawMin) * 0.08);

  return {
    snapshots,
    series,
    minValue: Math.max(1, rawMin - padding),
    maxValue: rawMax + padding,
    firstCapturedAt: snapshots[0].capturedAt,
    latestCapturedAt: snapshots[snapshots.length - 1].capturedAt
  };
}

function buildDetailStats(label, matches = [], criteria = {}) {
  const breakdown = calculateResultBreakdown(matches);
  const judgement = calculateMatchJudgement(breakdown, criteria);
  return {
    label,
    matches,
    breakdown,
    judgement,
    recent: getRecentKnownResults(matches, 10)
  };
}

function buildMatchDetailAnalysis(target = {}, sourceMatches = getSearchableMatches()) {
  const matches = Array.isArray(sourceMatches) ? sourceMatches : [];
  const criteria = getMatchDetailCriteria(target);
  const targetMeta = getMatchDetailMeta(target);
  const targetHomeTeam = targetMeta.homeTeam;
  const targetAwayTeam = targetMeta.awayTeam;
  const targetLeague = targetMeta.league;
  const sameOddsMatches = [];
  const similarOddsMatches = [];
  const sameLeagueSimilarMatches = [];
  const headToHead = [];
  const homeTeamMatches = [];
  const awayTeamMatches = [];
  const hasTargetOdds = hasCompleteOdds(target);
  const contextProfile = getMatchContextProfile(target, matches);

  for (const match of matches) {
    if (!isKnownResultMatch(match) || isCurrentMatchRecord(match, target)) continue;

    const matchMeta = getMatchDetailMeta(match);
    const isSameLeague = matchMeta.league === targetLeague || leagueMatchesFixture(match.league, target.league);
    const hasHomeTeam = matchMeta.homeTeam === targetHomeTeam || matchMeta.awayTeam === targetHomeTeam;
    const hasAwayTeam = matchMeta.homeTeam === targetAwayTeam || matchMeta.awayTeam === targetAwayTeam;

    if (hasTargetOdds) {
      if (doOddsMatchTarget(match, target, 0, true)) sameOddsMatches.push(match);
      if (doOddsMatchTarget(match, target, MATCH_DETAIL_SIMILAR_TOLERANCE)) {
        similarOddsMatches.push(match);
        if (isSameLeague) sameLeagueSimilarMatches.push(match);
      }
    }

    if (hasHomeTeam && hasAwayTeam) headToHead.push(match);
    if (hasHomeTeam) homeTeamMatches.push(match);
    if (hasAwayTeam) awayTeamMatches.push(match);
  }

  const sortLatest = (items) => items.sort((a, b) => String(b.date || "").localeCompare(String(a.date || "")));
  sortLatest(sameOddsMatches);
  sortLatest(similarOddsMatches);
  sortLatest(sameLeagueSimilarMatches);
  sortLatest(headToHead);
  sortLatest(homeTeamMatches);
  sortLatest(awayTeamMatches);

  const relatedMap = new Map();
  [...sameOddsMatches, ...similarOddsMatches, ...sameLeagueSimilarMatches].forEach((match) => {
    relatedMap.set(`${getMatchIdentity(match)}|${formatOdds(match.homeOdds)}|${formatOdds(match.drawOdds)}|${formatOdds(match.awayOdds)}`, match);
  });
  const sameOddsBreakdown = calculateResultBreakdown(sameOddsMatches);
  const sameLeagueSimilarBreakdown = calculateResultBreakdown(sameLeagueSimilarMatches);
  const detailCriteria = {
    ...criteria,
    exactBreakdown: sameOddsBreakdown,
    sameLeagueBreakdown: sameLeagueSimilarBreakdown,
    contextAdjustment: contextProfile.adjustment,
    contextSignals: contextProfile.signals,
    contextConfidence: contextProfile.confidence
  };
  const sameLeagueSimilar = buildDetailStats(`${formatLeagueName(target.league)} 유사배당`, sameLeagueSimilarMatches, detailCriteria);
  const sameLeagueFallbackMatches = sameLeagueSimilarMatches.length > 0
    ? []
    : getSameLeagueClosestOddsMatches(target, matches, 5);
  const sameLeagueDisplay = sameLeagueSimilarMatches.length > 0
    ? sameLeagueSimilar
    : buildDetailStats("같은 리그 근접배당", sameLeagueFallbackMatches, detailCriteria);

  return {
    match: target,
    criteria: detailCriteria,
    contextProfile,
    oddsMovement: getMatchOddsMovement(target, matches),
    sameOdds: buildDetailStats("동일배당 전적", sameOddsMatches, { ...detailCriteria, tolerance: "0.00" }),
    similarOdds: buildDetailStats("유사배당 전적", similarOddsMatches, detailCriteria),
    sameLeagueSimilar,
    sameLeagueDisplay,
    recentRecords: {
      headToHead: headToHead.slice(0, 5),
      homeTeam: homeTeamMatches.slice(0, 5),
      awayTeam: awayTeamMatches.slice(0, 5)
    },
    relatedMatches: Array.from(relatedMap.values()).sort((a, b) => String(b.date || "").localeCompare(String(a.date || ""))),
    sourceMatches: matches
  };
}

function createDetailBadge(text, className = "") {
  const badge = document.createElement("span");
  badge.className = `match-detail-badge${className ? ` ${className}` : ""}`;
  badge.textContent = text;
  return badge;
}

function createDetailMetric(label, value, className = "") {
  const item = document.createElement("div");
  if (className) item.className = className;
  const labelElement = document.createElement("span");
  const valueElement = document.createElement("strong");
  labelElement.textContent = label;
  valueElement.textContent = value;
  item.append(labelElement, valueElement);
  return item;
}

function createDetailResultFlow(matches = []) {
  const flow = document.createElement("div");
  flow.className = "match-detail-flow";
  const recentMatches = getRecentKnownResults(matches, 10);

  if (recentMatches.length === 0) {
    const empty = document.createElement("small");
    empty.textContent = "최근 결과 흐름 없음";
    flow.appendChild(empty);
    return flow;
  }

  recentMatches.forEach((match) => {
    const chip = document.createElement("button");
    chip.type = "button";
    chip.className = `result-chip ${getResultChipClass(match.result)}`;
    chip.textContent = formatResultChipLabel(match.result);
    chip.title = `${formatTeamName(match.homeTeam)} vs ${formatTeamName(match.awayTeam)} · ${formatMatchResultText(match)}`;
    chip.addEventListener("click", () => openMatchDetail(match));
    flow.appendChild(chip);
  });

  return flow;
}

function createDetailMatchCard(match = {}) {
  const card = document.createElement("article");
  card.className = "match-detail-history-card";
  card.tabIndex = 0;
  card.setAttribute?.("role", "button");

  const league = document.createElement("span");
  league.textContent = formatLeagueName(match.league);

  const title = document.createElement("strong");
  title.textContent = match.score
    ? `${formatTeamName(match.homeTeam)} ${String(match.score).replace("-", " : ")} ${formatTeamName(match.awayTeam)}`
    : `${formatTeamName(match.homeTeam)} vs ${formatTeamName(match.awayTeam)}`;

  const odds = document.createElement("p");
  odds.textContent = `배당 ${formatOdds(match.homeOdds)} / ${formatOdds(match.drawOdds)} / ${formatOdds(match.awayOdds)}`;

  const result = document.createElement("small");
  const resultLabel = formatResultLabel(match.result);
  result.textContent = [match.date || "", resultLabel ? `결과 ${resultLabel}` : ""].filter(Boolean).join(" · ");

  card.append(league, title, odds, result);
  card.addEventListener("click", () => openMatchDetail(match));
  card.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" && event.key !== " ") return;
    event.preventDefault();
    openMatchDetail(match);
  });
  return card;
}

function createDetailStatsSection(stat = {}, { note = "" } = {}) {
  const section = document.createElement("section");
  section.className = "match-detail-section";

  const header = document.createElement("div");
  header.className = "match-detail-section-head";
  const title = document.createElement("strong");
  title.textContent = stat.label;
  const knownMatches = Number(stat.breakdown?.knownMatches || 0);
  const totalMatches = Number(stat.breakdown?.totalMatches || 0);
  const isEmpty = knownMatches <= 0;
  const canJudge = knownMatches >= 15;
  header.append(title);

  const judgement = stat.judgement || calculateMatchJudgement(stat.breakdown, {});
  const badges = document.createElement("div");
  badges.className = "match-detail-badges";
  if (canJudge) {
    badges.append(
      createDetailBadge(`판정 ${judgement.judgement}`, "primary"),
      createDetailBadge(`배당 구간 ${judgement.favoriteBand || "확인 중"}`)
    );
    (judgement.signals || [])
      .filter((signal) => !["표본 부족", "데이터 부족", "역배 신호", "정배 적중 낮음"].includes(signal))
      .slice(0, 4)
      .forEach((signal) => badges.appendChild(createDetailBadge(signal)));
  } else if (isEmpty) {
    badges.append(createDetailBadge("전적 없음", "warning"));
  }

  const metrics = document.createElement("div");
  metrics.className = "match-detail-metrics";
  metrics.append(
    createDetailMetric("표본", `${knownMatches}/${totalMatches}`),
    createDetailMetric("홈승", `${stat.breakdown.homeWins}승 ${stat.breakdown.homeRate}`, "outcome-home"),
    createDetailMetric("무승부", `${stat.breakdown.draws}무 ${stat.breakdown.drawRate}`, "outcome-draw"),
    createDetailMetric("원정승", `${stat.breakdown.awayWins}승 ${stat.breakdown.awayRate}`, "outcome-away")
  );

  const helper = document.createElement("p");
  helper.className = "match-detail-note";
  helper.textContent = isEmpty
    ? `${stat.label} 전적이 없습니다`
    : note || "최근 확정 경기 기준";

  const children = [header];
  if (badges.children.length > 0) children.push(badges);
  children.push(metrics);
  if (!isEmpty) children.push(createDetailResultFlow(stat.matches));
  children.push(helper);
  section.append(...children);
  return section;
}

function createDetailSummarySection(analysis = {}) {
  const section = document.createElement("section");
  section.className = "match-detail-section";
  section.id = "detail-summary";

  const title = document.createElement("strong");
  title.textContent = "요약";

  const breakdown = analysis?.similarOdds?.breakdown || calculateResultBreakdown([]);
  const judgement = analysis?.similarOdds?.judgement || calculateMatchJudgement(breakdown, analysis?.criteria || {});
  const knownMatches = Number(breakdown.knownMatches || 0);

  const badges = document.createElement("div");
  badges.className = "match-detail-badges";
  badges.append(createDetailBadge(`배당 구간 ${judgement.favoriteBand || "확인 중"}`));
  if (knownMatches >= 15) {
    badges.append(createDetailBadge(`판정 ${judgement.judgement}`, "primary"));
    (judgement.signals || [])
      .filter((signal) => !["표본 부족", "데이터 부족", "역배 신호", "정배 적중 낮음"].includes(signal))
      .slice(0, 3)
      .forEach((signal) => badges.appendChild(createDetailBadge(signal)));
  } else if (knownMatches <= 0) {
    badges.append(createDetailBadge("전적 없음", "warning"));
  }

  const metrics = document.createElement("div");
  metrics.className = "match-detail-metrics";
  metrics.append(
    createDetailMetric("유사배당 표본", `${knownMatches}/${breakdown.totalMatches || 0}`),
    createDetailMetric("홈승", `${breakdown.homeWins || 0}승 ${breakdown.homeRate || "0%"}`, "outcome-home"),
    createDetailMetric("무승부", `${breakdown.draws || 0}무 ${breakdown.drawRate || "0%"}`, "outcome-draw"),
    createDetailMetric("원정승", `${breakdown.awayWins || 0}승 ${breakdown.awayRate || "0%"}`, "outcome-away")
  );

  const note = document.createElement("p");
  note.className = "match-detail-note";
  note.textContent = knownMatches >= 15
    ? "유사배당 ±0.05 기준 요약"
    : knownMatches > 0
      ? `유사배당 ${knownMatches}경기`
      : "유사배당 데이터가 없습니다";

  section.append(title, badges, metrics, note);
  return section;
}

function createRecentRecordSection(recentRecords = {}) {
  const section = document.createElement("section");
  section.className = "match-detail-section";
  const title = document.createElement("strong");
  title.textContent = "최근 전적";
  const groups = document.createElement("div");
  groups.className = "match-detail-recent-groups";

  [
    ["맞대결", recentRecords.headToHead || []],
    ["홈팀 최근", recentRecords.homeTeam || []],
    ["원정팀 최근", recentRecords.awayTeam || []]
  ].forEach(([label, matches]) => {
    const group = document.createElement("article");
    const groupTitle = document.createElement("span");
    groupTitle.textContent = label;
    group.appendChild(groupTitle);

    if (matches.length === 0) {
      const empty = document.createElement("small");
      empty.textContent = "최근 전적 데이터가 없습니다";
      group.appendChild(empty);
    } else {
      const list = document.createElement("div");
      list.className = "match-detail-mini-list";
      list.append(...matches.map(createDetailMatchCard));
      group.appendChild(list);
    }

    groups.appendChild(group);
  });

  section.append(title, groups);
  return section;
}

function renderMatchDetail(match = {}, sourceMatches = getSearchableMatches()) {
  const shell = document.getElementById("match-detail-shell");
  if (!shell) return;

  const analysis = buildMatchDetailAnalysis(match, sourceMatches);
  const summaryBreakdown = analysis.similarOdds.breakdown.knownMatches > 0 ? analysis.similarOdds.breakdown : analysis.sameOdds.breakdown;
  const summaryJudgement = calculateMatchJudgement(summaryBreakdown, analysis.criteria);
  const hasOdds = hasCompleteOdds(match);

  const hero = document.createElement("section");
  hero.className = "match-detail-hero";

  const back = document.createElement("button");
  back.type = "button";
  back.className = "ghost-action match-detail-back";
  back.textContent = "← 돌아가기";
  back.addEventListener("click", () => {
    if (typeof window !== "undefined") window.history.back();
  });

  const meta = document.createElement("span");
  meta.textContent = `${formatLeagueName(match.league)} · ${match.date || ""}${match.startTime ? ` ${match.startTime}` : ""}`;

  const title = document.createElement("strong");
  title.textContent = `${formatTeamName(match.homeTeam)} vs ${formatTeamName(match.awayTeam)}`;

  const odds = document.createElement("p");
  odds.textContent = hasOdds
    ? `홈승 / 무 / 원정승 ${formatOdds(match.homeOdds)} / ${formatOdds(match.drawOdds)} / ${formatOdds(match.awayOdds)}`
    : "배당 준비 중";

  const status = document.createElement("small");
  const resultLabel = formatResultLabel(match.result);
  status.textContent = [`상태 ${getMatchStatusLabel(match)}`, resultLabel ? `결과 ${resultLabel}` : ""].filter(Boolean).join(" · ");

  const badges = document.createElement("div");
  badges.className = "match-detail-badges";
  const summaryKnownMatches = Number(summaryBreakdown.knownMatches || 0);
  badges.append(createDetailBadge(`배당 구간 ${summaryJudgement.favoriteBand || "확인 중"}`));
  if (summaryKnownMatches >= 15) {
    badges.append(
      createDetailBadge(`판정 ${summaryJudgement.judgement}`, "primary")
    );
    (summaryJudgement.signals || [])
      .filter((signal) => !["표본 부족", "데이터 부족", "역배 신호", "정배 적중 낮음"].includes(signal))
      .slice(0, 3)
      .forEach((signal) => badges.appendChild(createDetailBadge(signal)));
  } else if (summaryKnownMatches <= 0) {
    badges.append(createDetailBadge("전적 없음", "warning"));
  }

  hero.append(back, meta, title, odds, status, badges);

  const tabs = document.createElement("nav");
  tabs.className = "match-detail-tabs";
  [
    ["요약", "#detail-summary"],
    ["동일배당", "#detail-same"],
    ["유사배당", "#detail-similar"],
    ["같은 리그", "#detail-league"],
    ["최근 전적", "#detail-recent"]
  ].forEach(([label, href]) => {
    const link = document.createElement("a");
    link.href = href;
    link.textContent = label;
    tabs.appendChild(link);
  });

  const summary = createDetailSummarySection(analysis);
  const same = createDetailStatsSection(analysis.sameOdds, { note: "세 배당이 정확히 같은 과거 경기" });
  same.id = "detail-same";
  const similar = createDetailStatsSection(analysis.similarOdds, { note: "홈승/무/원정승 각각 ±0.05 범위" });
  similar.id = "detail-similar";
  const sameLeagueStat = analysis.sameLeagueDisplay || analysis.sameLeagueSimilar;
  const sameLeague = createDetailStatsSection(sameLeagueStat, {
    note: sameLeagueStat?.label === "같은 리그 근접배당"
      ? "엄격한 유사배당 표본이 없어 같은 리그에서 가장 가까운 배당 5경기를 표시합니다."
      : `${formatLeagueName(match.league)} 안에서만 비교`
  });
  sameLeague.id = "detail-league";
  const recent = createRecentRecordSection(analysis.recentRecords);
  recent.id = "detail-recent";

  const related = document.createElement("section");
  related.className = "match-detail-section";
  const relatedTitle = document.createElement("strong");
  relatedTitle.textContent = "관련 과거 경기";
  const relatedList = document.createElement("div");
  relatedList.className = "match-detail-history-list";
  if (analysis.relatedMatches.length === 0) {
    const empty = document.createElement("div");
    empty.className = "empty-state compact-empty";
    empty.textContent = "관련 과거 경기 리스트가 없습니다";
    relatedList.appendChild(empty);
  } else {
    relatedList.append(...analysis.relatedMatches.slice(0, 30).map(createDetailMatchCard));
  }
  related.append(relatedTitle, relatedList);

  shell.replaceChildren(hero, tabs, summary, same, similar, sameLeague, recent, related);
}

function formatDetailRecord(profile = {}) {
  const matches = Number(profile.matches || 0);
  if (matches <= 0) return "기록 없음";
  return `${Number(profile.wins || 0)}승 ${Number(profile.draws || 0)}무 ${Number(profile.losses || 0)}패`;
}

function formatDetailGoalAverage(profile = {}) {
  const matches = Number(profile.matches || 0);
  if (matches <= 0) return "기록 없음";
  return `득 ${Number(profile.avgGoalsFor || 0).toFixed(1)} · 실 ${Number(profile.avgGoalsAgainst || 0).toFixed(1)}`;
}

function createDetailTeamOverview(label, teamName, profile = {}, venueProfile = {}, standing = null, seasonProfile = null, performance = null, availability = null) {
  const card = document.createElement("article");
  card.className = "match-detail-team-card";

  const eyebrow = document.createElement("span");
  eyebrow.textContent = label;
  const name = document.createElement("strong");
  name.textContent = formatTeamName(teamName);
  const metrics = document.createElement("dl");
  const metricRows = [
    ["순위", standing?.rank ? `${standing.rank}위` : "-"],
    ["최근 5경기", formatDetailRecord(profile)],
    [label === "홈팀" ? "홈 성적" : "원정 성적", formatDetailRecord(venueProfile)],
    ["평균 득실", formatDetailGoalAverage(seasonProfile?.matches ? seasonProfile : profile)]
  ];
  if (availability) {
    metricRows.push([
      "부상·결장",
      availability.injuriesChecked ? `${availability.injuries.length}명` : "확인 전"
    ]);
    metricRows.push([
      "선발",
      availability.lineup
        ? `${availability.lineup.formation || "포메이션 미정"} · 공개`
        : availability.lineupsChecked ? "미공개" : "확인 전"
    ]);
  }
  if (performance?.matches > 0) {
    metricRows.push([
      "최근 유효슈팅",
      performance.avgShotsOnGoal === null ? "-" : `${performance.avgShotsOnGoal.toFixed(1)}개`
    ]);
    metricRows.push([
      "최근 점유율",
      performance.avgPossession === null ? "-" : `${performance.avgPossession.toFixed(1)}%`
    ]);
    if (performance.avgExpectedGoals !== null) {
      metricRows.push(["최근 기대득점", performance.avgExpectedGoals.toFixed(2)]);
    }
  }
  metricRows.forEach(([term, value]) => {
    const item = document.createElement("div");
    const dt = document.createElement("dt");
    const dd = document.createElement("dd");
    dt.textContent = term;
    dd.textContent = value;
    item.append(dt, dd);
    metrics.appendChild(item);
  });
  card.append(eyebrow, name, metrics);
  return card;
}

function createDetailAvailabilitySection(fixture = null) {
  if (!fixture) return null;
  const section = document.createElement("section");
  section.className = "match-detail-section match-detail-availability";
  const title = document.createElement("strong");
  title.textContent = "선발·결장 정보";
  const grid = document.createElement("div");

  [
    { teamId: fixture.homeTeamId, team: fixture.homeTeam },
    { teamId: fixture.awayTeamId, team: fixture.awayTeam }
  ].forEach(({ teamId, team }) => {
    const availability = getFixtureTeamAvailability(fixture, team);
    const card = document.createElement("article");
    const name = document.createElement("strong");
    name.textContent = formatTeamName(team);
    const injury = document.createElement("p");
    const injuryNames = (availability?.injuries || []).slice(0, 6).map((item) => (
      item.reason ? `${item.player} (${item.reason})` : item.player
    ));
    injury.textContent = availability?.injuriesChecked
      ? `부상·결장 ${injuryNames.length ? injuryNames.join(", ") : "등록 정보 없음"}`
      : "부상·결장 확인 전";
    const lineup = document.createElement("p");
    const lineupData = availability?.lineup;
    lineup.textContent = lineupData
      ? `선발${lineupData.formation ? ` ${lineupData.formation}` : ""} · ${(lineupData.starters || []).join(", ")}`
      : availability?.lineupsChecked ? "선발 명단 미공개" : "선발 명단 확인 전";
    card.dataset.teamId = String(teamId || "");
    card.append(name, injury, lineup);
    grid.appendChild(card);
  });

  section.append(title, grid);
  return section;
}

function formatOddsMovementTimestamp(value) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "시간 미확인";
  return new Intl.DateTimeFormat("ko-KR", {
    timeZone: "Asia/Seoul",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false
  }).format(date).replace(/\. /g, ".").replace(/\.$/, "");
}

function createDetailOddsMovementSection(movement = {}) {
  const section = document.createElement("section");
  section.className = "match-detail-section match-detail-odds-movement";
  const heading = document.createElement("div");
  const title = document.createElement("strong");
  title.textContent = "배당 변화";
  heading.appendChild(title);

  if (!movement.hasMovement) {
    const pending = document.createElement("p");
    pending.textContent = "배당 변화 기록이 쌓이는 중입니다.";
    section.append(heading, pending);
    return section;
  }

  if (movement.isAlertCandidate) {
    const badge = document.createElement("span");
    badge.textContent = "변화 감지";
    heading.appendChild(badge);
  }
  const grid = document.createElement("div");
  grid.className = "match-detail-odds-movement-grid";
  const previousSnapshot = movement.history?.[movement.history.length - 2];
  movement.movements.forEach((item) => {
    const oddsKey = { H: "homeOdds", D: "drawOdds", A: "awayOdds" }[item.key];
    const from = Number(previousSnapshot?.[oddsKey] ?? item.from);
    const difference = item.to - from;
    const card = document.createElement("div");
    const label = document.createElement("span");
    label.textContent = item.label;
    const values = document.createElement("div");
    values.className = "match-detail-odds-movement-values";
    const previous = document.createElement("span");
    previous.className = "match-detail-odds-movement-previous";
    previous.textContent = `이전 ${from.toFixed(2)}`;
    const latest = document.createElement("strong");
    latest.className = "match-detail-odds-movement-latest";
    const arrow = difference > 0 ? "↑" : difference < 0 ? "↓" : "";
    latest.textContent = `${arrow ? `${arrow} ` : ""}${item.to.toFixed(2)}`;
    latest.classList.add(difference > 0 ? "up" : difference < 0 ? "down" : "same");
    values.append(previous, latest);
    card.append(label, values);
    grid.appendChild(card);
  });
  section.appendChild(heading);
  section.appendChild(grid);
  const table = createOddsMovementHistoryTable(movement.history);
  if (table) section.appendChild(table);
  return section;
}

// 배당 변화를 그래프 대신 시점별 숫자 표로 보여준다 (오래된 순 -> 최신 순).
function createOddsMovementHistoryTable(history = []) {
  const rows = (Array.isArray(history) ? history : []).filter((entry) => (
    [entry?.homeOdds, entry?.drawOdds, entry?.awayOdds].every((value) => Number(value) >= 1)
  ));
  if (rows.length < 2) return null;

  const table = document.createElement("div");
  table.className = "match-detail-odds-history-table";

  const header = document.createElement("div");
  header.className = "match-detail-odds-history-row match-detail-odds-history-header";
  header.append(
    createOddsHistoryCell(translateUiText("시간"), "time"),
    createOddsHistoryCell(translateUiText("홈승"), "value"),
    createOddsHistoryCell(translateUiText("무승부"), "value"),
    createOddsHistoryCell(translateUiText("원정승"), "value")
  );
  table.appendChild(header);

  let previous = null;
  rows.forEach((entry) => {
    const row = document.createElement("div");
    row.className = "match-detail-odds-history-row";
    row.append(
      createOddsHistoryCell(formatOddsMovementTimestamp(entry.capturedAt), "time"),
      createOddsHistoryCell(Number(entry.homeOdds).toFixed(2), "value", getOddsTrend(entry.homeOdds, previous?.homeOdds)),
      createOddsHistoryCell(Number(entry.drawOdds).toFixed(2), "value", getOddsTrend(entry.drawOdds, previous?.drawOdds)),
      createOddsHistoryCell(Number(entry.awayOdds).toFixed(2), "value", getOddsTrend(entry.awayOdds, previous?.awayOdds))
    );
    table.appendChild(row);
    previous = entry;
  });

  return table;
}

// 배당은 낮아질수록 그 결과 쪽으로 정배가 몰린다는 뜻이라, 숫자만 보면 오르내림이
// 직관적이지 않다. 그래서 화살표·색은 "숫자가 커졌다/작아졌다"를 그대로 따른다.
function getOddsTrend(current, previous) {
  if (previous === undefined || previous === null) return "";
  const currentValue = Number(current);
  const previousValue = Number(previous);
  if (!Number.isFinite(currentValue) || !Number.isFinite(previousValue)) return "";
  if (currentValue > previousValue) return "up";
  if (currentValue < previousValue) return "down";
  return "same";
}

function createOddsHistoryCell(text, kind, trend = "") {
  const cell = document.createElement("span");
  cell.className = `match-detail-odds-history-cell match-detail-odds-history-${kind}`;
  if (trend) cell.classList.add(`match-detail-odds-history-${trend}`);
  const arrow = trend === "up" ? "↑ " : trend === "down" ? "↓ " : "";
  cell.textContent = `${arrow}${text}`;
  return cell;
}

function createDetailTabPanel(tabName, { active = false } = {}) {
  const panel = document.createElement("div");
  panel.className = active ? "match-detail-tab-panel active" : "match-detail-tab-panel";
  panel.dataset.detailTabPanel = tabName;
  panel.setAttribute("role", "tabpanel");
  return panel;
}

function buildDetailOverviewSummary(analysis = {}) {
  const english = getUiLanguage() === "en";
  const similarBreakdown = analysis?.similarOdds?.breakdown || calculateResultBreakdown([]);
  const sameBreakdown = analysis?.sameOdds?.breakdown || calculateResultBreakdown([]);
  const useSimilarOdds = Number(similarBreakdown.knownMatches || 0) > 0;
  const useSameOdds = !useSimilarOdds && Number(sameBreakdown.knownMatches || 0) > 0;
  const breakdown = useSimilarOdds ? similarBreakdown : useSameOdds ? sameBreakdown : similarBreakdown;
  const knownMatches = Number(breakdown.knownMatches || 0);
  const totalMatches = Number(breakdown.totalMatches || 0);
  const comparison = useSameOdds ? (english ? "Exact odds" : "동일배당") : (english ? "Similar odds ±0.05" : "유사배당 ±0.05");
  const sourceTopResult = getTopBreakdownResult(breakdown);
  const topResult = {
    ...sourceTopResult,
    label: english ? ({ H: "Home win", D: "Draw", A: "Away win" }[sourceTopResult.key] || "") : sourceTopResult.label
  };
  const topClassName = topResult.key === "H" ? "outcome-home" : topResult.key === "D" ? "outcome-draw" : "outcome-away";
  const headline = knownMatches <= 0
    ? (english ? `There are no past results for ${comparison.toLowerCase()} comparison.` : `비교할 ${comparison} 과거 결과가 없습니다.`)
    : english
      ? `${topResult.label} had the highest rate in ${knownMatches} ${comparison.toLowerCase()} matches (${topResult.rate}).`
      : `${comparison} ${knownMatches}경기에서 ${topResult.label} 비율이 가장 높았습니다 (${topResult.rate}).`;
  const caution = knownMatches <= 0
    ? (english ? "Comparison results will appear as past odds records are collected." : "과거 배당 기록이 쌓이면 비교 결과를 보여드립니다.")
    : knownMatches < 15
      ? (english ? "Fewer than 15 matches: use this as a reference only." : "표본이 15경기 미만이라 참고용으로만 확인하세요.")
      : (english ? "Based on completed past matches; it does not guarantee future results." : "확정된 과거 경기 결과 기준이며, 미래 결과를 보장하지 않습니다.");

  return { breakdown, knownMatches, totalMatches, comparison, topResult, topClassName, headline, caution };
}

function createDetailOverviewSummarySection(analysis = {}) {
  const view = buildDetailOverviewSummary(analysis);
  const section = document.createElement("section");
  section.className = "match-detail-section";

  const title = document.createElement("strong");
  title.textContent = translateUiText("한눈에 보기");
  const headline = document.createElement("p");
  headline.className = "match-detail-note";
  headline.textContent = view.headline;
  const metrics = document.createElement("div");
  metrics.className = "match-detail-metrics";
  metrics.append(
    createDetailMetric(translateUiText("비교 기준"), view.comparison),
    createDetailMetric(translateUiText("확정 결과"), `${view.knownMatches}/${view.totalMatches}${translateUiText("경기")}`),
    createDetailMetric(translateUiText("홈승"), `${view.breakdown.homeWins || 0}${translateUiText("승")} ${view.breakdown.homeRate || "0%"}`, "outcome-home"),
    createDetailMetric(translateUiText("무/원정승"), `${view.breakdown.draws || 0}${translateUiText("무")} · ${view.breakdown.awayWins || 0}${translateUiText("승")}`, view.topClassName)
  );
  const caution = document.createElement("p");
  caution.className = "match-detail-note";
  caution.textContent = view.caution;
  section.append(title, headline, metrics, caution);
  return section;
}

// 요약: 경기 흐름만 남긴다. 팀 전력과 선발 정보는 각자의 탭으로 옮겼다.
function createDetailOverviewPanel(match = {}, analysis = {}) {
  const panel = createDetailTabPanel("summary", { active: true });
  const recent = createRecentRecordSection(analysis.recentRecords || {});
  recent.classList.add("match-detail-recent-section");
  panel.append(createDetailOverviewSummarySection(analysis), createDetailOddsMovementSection(analysis.oddsMovement || {}), recent);
  return panel;
}

// 전력: 순위·최근 폼·홈원정 성적·평균 득실을 팀별로 모아 본다.
// ---- 홈/원정 통계 ----
// 팀의 경기를 홈/원정/전체로 걸러 최신순으로 정렬한다. 승률·최근10·언더오버가 전부 이걸 기반으로 한다.
function getTeamVenueMatches(teamName = "", matches = [], venue = "all") {
  return (Array.isArray(matches) ? matches : [])
    .filter(isKnownResultMatch)
    .filter((match) => {
      if (venue === "home") return teamNameMatches(match.homeTeam, teamName);
      if (venue === "away") return teamNameMatches(match.awayTeam, teamName);
      // teamAppearsInMatch 는 원문 표기가 정확히 같아야만 인정하는 엄격 비교라,
      // 같은 팀이 한글/영문 등 다른 표기로 섞여 저장된 경우 "전체"만 유독 다 빠뜨렸다.
      // home/away 분기와 같은 느슨한 매칭으로 통일한다.
      return teamNameMatches(match.homeTeam, teamName) || teamNameMatches(match.awayTeam, teamName);
    })
    .sort((a, b) => String(b.date || "").localeCompare(String(a.date || "")));
}

function getOverUnderRate(matchList = [], line = 2.5) {
  const totals = (Array.isArray(matchList) ? matchList : [])
    .map((match) => parseScoreParts(match.score))
    .filter(Boolean)
    .map((score) => score.home + score.away);
  if (totals.length === 0) return { matches: 0, overCount: 0, overRate: null };
  const overCount = totals.filter((total) => total > line).length;
  return { matches: totals.length, overCount, overRate: overCount / totals.length };
}

// list 는 이미 teamName 기준으로 걸러져 있으므로, getTeamRecentProfile 로 다시 걸러 세지 않는다.
// (getTeamRecentProfile 내부는 원문 표기가 정확히 같아야만 인정하는 엄격 비교를 쓰기 때문에,
// 같은 팀이 한글/영문 등 다른 표기로 섞여 저장된 경우 이중 필터링에서 다시 빠질 수 있다.)
function summarizeTeamVenueProfile(teamName = "", list = []) {
  const totals = list.reduce((profile, match) => {
    const result = getTeamResultFromMatch(match, teamName);
    const score = getTeamScoreFromMatch(match, teamName);
    if (result === "W") profile.wins += 1;
    if (result === "D") profile.draws += 1;
    if (result === "L") profile.losses += 1;
    if (score) {
      profile.goalsFor += score.forGoals;
      profile.goalsAgainst += score.againstGoals;
    }
    return profile;
  }, { matches: list.length, wins: 0, draws: 0, losses: 0, goalsFor: 0, goalsAgainst: 0 });

  return {
    ...totals,
    avgGoalsFor: totals.matches > 0 ? totals.goalsFor / totals.matches : 0,
    avgGoalsAgainst: totals.matches > 0 ? totals.goalsAgainst / totals.matches : 0,
    winRate: getRatePercent(totals.wins, totals.matches)
  };
}

// 팀 하나의 홈/원정/전체 스냅샷: 전적, 언더오버, 최근 10경기 리본.
function buildTeamVenueSnapshot(teamName = "", matches = [], venue = "all") {
  const list = getTeamVenueMatches(teamName, matches, venue);
  const profile = summarizeTeamVenueProfile(teamName, list);
  const overUnder = getOverUnderRate(list, 2.5);
  const recentTen = list.slice(0, 10).map((match) => ({
    date: match.date || "",
    opponent: getTeamSide(match, teamName) === "home" ? match.awayTeam : match.homeTeam,
    result: getTeamResultFromMatch(match, teamName),
    score: match.score || ""
  }));
  return { venue, matches: list.length, profile, overUnder, recentTen };
}

// team-context-pack 은 날짜별로만 저장되므로, 이 경기 날짜에 데이터가 없으면 빈 배열을 돌려준다.
function getLeagueStandingsForMatch(match = {}) {
  const pack = getStoredTeamContextPack();
  const dateContext = getTeamContextForDate(pack, String(match.date || "").slice(0, 10));
  if (!dateContext) return [];
  const league = dateContext.leagues.find((entry) => leagueMatchesFixture(match.league, entry.key));
  return Array.isArray(league?.standings) ? league.standings : [];
}

// API 가 홈/원정 전용 순위를 안 주므로, 같은 리그 팀들을 홈(또는 원정) 승점 기준으로 다시 정렬해 만든다.
// 공식 순위표가 아니라 이 값에서 계산한 추정 순위임을 화면에서 밝혀야 한다.
function getVenueRankFromStandings(standings = [], teamName = "", venue = "home") {
  const key = venue === "away" ? "away" : "home";
  const rows = (Array.isArray(standings) ? standings : [])
    .map((row) => {
      const venueRecord = row?.[key] || {};
      const played = Number(venueRecord.played || 0);
      const points = Number(venueRecord.wins || 0) * 3 + Number(venueRecord.draws || 0);
      const goalsDiff = Number(venueRecord.goalsFor || 0) - Number(venueRecord.goalsAgainst || 0);
      return { team: row?.team || "", played, points, goalsDiff };
    })
    .filter((row) => row.played > 0)
    .sort((left, right) => (right.points - left.points) || (right.goalsDiff - left.goalsDiff));

  const index = rows.findIndex((row) => teamNameMatches(row.team, teamName));
  return index === -1 ? null : { rank: index + 1, of: rows.length };
}

// 이번 경기 두 팀의 과거 맞대결을, 누구 홈에서 열렸는지로 나눈다.
// venue 로 "전체"를 주면 누가 홈이었든 합쳐서 최신순 limit 개를 돌려준다.
function splitHeadToHeadByVenue(homeTeam = "", awayTeam = "", matches = [], limit = 10) {
  const meetings = (Array.isArray(matches) ? matches : [])
    .filter(isKnownResultMatch)
    .filter((match) => (
      (teamNameMatches(match.homeTeam, homeTeam) && teamNameMatches(match.awayTeam, awayTeam))
      || (teamNameMatches(match.homeTeam, awayTeam) && teamNameMatches(match.awayTeam, homeTeam))
    ))
    .sort((a, b) => String(b.date || "").localeCompare(String(a.date || "")));

  const hostedByHome = meetings.filter((match) => teamNameMatches(match.homeTeam, homeTeam));
  const hostedByAway = meetings.filter((match) => teamNameMatches(match.homeTeam, awayTeam));

  return {
    all: meetings.slice(0, limit),
    hostedByHome: hostedByHome.slice(0, limit),
    hostedByAway: hostedByAway.slice(0, limit)
  };
}

// 이 경기가 속한 리그의 전체 순위표. 수집된 최신 스냅샷 기준이라 "추정치"임을 밝힌다.
function createLeagueStandingsSection(match = {}) {
  const standings = getLeagueStandingsForMatch(match);
  if (!Array.isArray(standings) || standings.length === 0) return null;

  const sorted = [...standings].sort((left, right) => Number(left.rank || 999) - Number(right.rank || 999));

  const section = document.createElement("section");
  section.className = "match-detail-section match-detail-standings";
  const title = document.createElement("strong");
  title.textContent = `${formatLeagueName(match.league)} ${translateUiText("순위표")}`;
  const note = document.createElement("small");
  note.textContent = "최근 수집 시점 기준 · 추정치";
  section.append(title, note);

  const table = document.createElement("div");
  table.className = "match-detail-standings-table";
  const header = document.createElement("div");
  header.className = "match-detail-standings-row match-detail-standings-header";
  header.append(
    createStandingsCell("순위", "rank"),
    createStandingsCell("팀", "team"),
    createStandingsCell("경기", "played"),
    createStandingsCell(formatVenueResultBadge("W"), "wins"),
    createStandingsCell(formatVenueResultBadge("D"), "draws"),
    createStandingsCell(formatVenueResultBadge("L"), "losses"),
    createStandingsCell("득실", "diff"),
    createStandingsCell("승점", "points")
  );
  table.appendChild(header);

  sorted.forEach((row) => {
    const isMatchTeam = teamNameMatches(row.team, match.homeTeam) || teamNameMatches(row.team, match.awayTeam);
    const rowEl = document.createElement("div");
    rowEl.className = isMatchTeam ? "match-detail-standings-row highlight" : "match-detail-standings-row";

    const rankCell = createStandingsCell(`${row.rank || "-"}`, "rank");
    const teamCell = createStandingsCell("", "team");
    const logoUrl = getTeamLogoUrl(row.teamId);
    if (logoUrl) {
      const logo = document.createElement("img");
      logo.className = "match-detail-standings-logo";
      logo.src = logoUrl;
      logo.alt = "";
      logo.loading = "lazy";
      teamCell.appendChild(logo);
    }
    const teamName = document.createElement("span");
    teamName.textContent = formatTeamName(row.team);
    teamCell.appendChild(teamName);

    rowEl.append(
      rankCell,
      teamCell,
      createStandingsCell(`${row.all?.played ?? 0}`, "played"),
      createStandingsCell(`${row.all?.wins ?? 0}`, "wins"),
      createStandingsCell(`${row.all?.draws ?? 0}`, "draws"),
      createStandingsCell(`${row.all?.losses ?? 0}`, "losses"),
      createStandingsCell(`${row.goalsDiff > 0 ? "+" : ""}${row.goalsDiff ?? 0}`, "diff"),
      createStandingsCell(`${row.points ?? 0}`, "points")
    );
    table.appendChild(rowEl);
  });

  section.appendChild(table);
  return section;
}

function createStandingsCell(text, kind) {
  const cell = document.createElement("span");
  cell.className = `match-detail-standings-cell match-detail-standings-${kind}`;
  if (text) cell.appendChild(document.createTextNode(text));
  return cell;
}

// 팀 정보: 팀 전력 카드와 라인업·결장 정보를 한 탭에 담는다. 원래 두 탭이었다.
function createDetailStrengthPanel(match = {}, analysis = {}) {
  const panel = createDetailTabPanel("strength");
  const context = analysis.contextProfile || {};
  const homeProfile = getTeamRecentProfile(match.homeTeam, analysis.recentRecords?.homeTeam || [], 5);
  const awayProfile = getTeamRecentProfile(match.awayTeam, analysis.recentRecords?.awayTeam || [], 5);
  const homeStanding = context.favoriteKey === "H" ? context.favoriteStanding : context.favoriteKey === "A" ? context.underdogStanding : null;
  const awayStanding = context.favoriteKey === "A" ? context.favoriteStanding : context.favoriteKey === "H" ? context.underdogStanding : null;
  const fixtureContext = getOfficialFixtureContext(match);

  const teams = document.createElement("section");
  teams.className = "match-detail-team-grid";
  teams.append(
    createDetailTeamOverview("홈팀", match.homeTeam, homeProfile, context.homeVenueProfile, homeStanding, context.homeSeasonProfile, context.homePerformanceProfile, getFixtureTeamAvailability(fixtureContext, match.homeTeam)),
    createDetailTeamOverview("원정팀", match.awayTeam, awayProfile, context.awayVenueProfile, awayStanding, context.awaySeasonProfile, context.awayPerformanceProfile, getFixtureTeamAvailability(fixtureContext, match.awayTeam))
  );
  panel.append(teams);

  const availability = createDetailAvailabilitySection(fixtureContext);
  if (availability) {
    panel.append(availability);
  } else {
    const empty = document.createElement("div");
    empty.className = "empty-state compact-empty";
    empty.textContent = "선발 명단은 경기가 임박하면 공개됩니다.";
    panel.append(empty);
  }

  const standingsSection = createLeagueStandingsSection(match);
  if (standingsSection) panel.append(standingsSection);
  return panel;
}

function createVenueStatRow(label, value, note = "") {
  const row = document.createElement("div");
  row.className = "match-detail-venue-row";
  const name = document.createElement("span");
  name.textContent = label;
  const amount = document.createElement("strong");
  amount.textContent = value;
  row.append(name, amount);
  if (note) {
    const hint = document.createElement("small");
    hint.textContent = note;
    row.appendChild(hint);
  }
  return row;
}

// 최근 10경기를 맞대결처럼 날짜·상대·스코어가 보이는 목록으로 보여준다.
// 승/무/패 배지: 무슨 언어든 한 글자로 끝나야 20px 동그라미 안에 들어간다.
// i18n 사전의 "무" → "Draw" 는 다른 화면용이라 여기서는 안 쓰고 따로 매핑한다.
function formatVenueResultBadge(result) {
  const labels = { W: { ko: "승", en: "W" }, D: { ko: "무", en: "D" }, L: { ko: "패", en: "L" } };
  return labels[result]?.[getUiLanguage() === "en" ? "en" : "ko"] || result || "?";
}

function createVenueRecentList(recentTen = []) {
  const wrap = document.createElement("div");
  wrap.className = "match-detail-venue-h2h-list";
  if (recentTen.length === 0) {
    const empty = document.createElement("small");
    empty.className = "match-detail-venue-h2h-empty";
    empty.textContent = "최근 경기 없음";
    wrap.appendChild(empty);
    return wrap;
  }
  recentTen.forEach((entry) => {
    const row = document.createElement("span");
    row.className = "match-detail-venue-recent-row";
    const dot = document.createElement("i");
    dot.className = "match-detail-venue-dot venue-" + String(entry.result || "").toLowerCase();
    dot.textContent = formatVenueResultBadge(entry.result);
    const text = document.createElement("span");
    text.textContent = (entry.date || "") + " vs " + formatTeamName(entry.opponent || "") + " " + (entry.score || "");
    row.append(dot, text);
    wrap.appendChild(row);
  });
  return wrap;
}

// 최근 10경기 목록(W/D/L 이 이미 붙어 있음)에서 승/무/패와 승률을 센다.
function summarizeRecentRecord(recentTen = []) {
  const totals = recentTen.reduce((acc, entry) => {
    if (entry.result === "W") acc.wins += 1;
    else if (entry.result === "D") acc.draws += 1;
    else if (entry.result === "L") acc.losses += 1;
    return acc;
  }, { wins: 0, draws: 0, losses: 0 });
  const matches = totals.wins + totals.draws + totals.losses;
  return { ...totals, matches, winRate: getRatePercent(totals.wins, matches) };
}

// 맞대결 목록에서 teamName 기준으로 승/무/패와 승률을 센다.
function summarizeHeadToHeadRecord(teamName = "", meetings = []) {
  const totals = meetings.reduce((acc, match) => {
    const result = getTeamResultFromMatch(match, teamName);
    if (result === "W") acc.wins += 1;
    else if (result === "D") acc.draws += 1;
    else if (result === "L") acc.losses += 1;
    return acc;
  }, { wins: 0, draws: 0, losses: 0 });
  const matches = totals.wins + totals.draws + totals.losses;
  return { ...totals, matches, winRate: getRatePercent(totals.wins, matches) };
}

function formatVenueRecordSummary(summary) {
  if (summary.matches <= 0) return "기록 없음";
  return `${summary.wins}승 ${summary.draws}무 ${summary.losses}패 · 승률 ${summary.winRate.toFixed(1)}%`;
}

// 전체/홈/원정 버튼 한 벌. 섹션마다 따로 붙여서 서로 독립적으로 선택할 수 있게 한다.
function createVenueInlineToggle(activeVenue, onSelect) {
  const row = document.createElement("div");
  row.className = "match-detail-venue-inline-toggle";
  row.setAttribute("role", "tablist");
  [["all", "전체"], ["home", "홈"], ["away", "원정"]].forEach(([value, label]) => {
    const button = document.createElement("button");
    button.type = "button";
    button.dataset.venue = value;
    button.className = value === activeVenue ? "active" : "";
    button.textContent = label;
    button.addEventListener("click", () => {
      row.querySelectorAll("button").forEach((b) => b.classList.toggle("active", b === button));
      onSelect(value);
    });
    row.appendChild(button);
  });
  return row;
}

// 팀 카드: 순위는 홈/원정 항상 같이 보여주고, 성적과 최근10경기는 각자 자기 옆의
// 전체/홈/원정 버튼으로 따로 조절한다 (둘이 같은 선택을 공유하지 않는다).
function renderVenueTeamCard(container, label, teamName, matches, standings, seasonMatches = matches) {
  const homeRank = getVenueRankFromStandings(standings, teamName, "home");
  const awayRank = getVenueRankFromStandings(standings, teamName, "away");

  const card = document.createElement("article");
  card.className = "match-detail-venue-card";
  const eyebrow = document.createElement("span");
  eyebrow.textContent = label;
  const name = document.createElement("strong");
  name.textContent = formatTeamName(teamName);
  card.append(eyebrow, name);

  card.append(
    createVenueStatRow("홈 기준 순위", homeRank ? (homeRank.rank + "위") : "-", homeRank ? (homeRank.of + "팀 중 · 추정치") : "표본 없음"),
    createVenueStatRow("원정 기준 순위", awayRank ? (awayRank.rank + "위") : "-", awayRank ? (awayRank.of + "팀 중 · 추정치") : "표본 없음")
  );

  const statHead = document.createElement("div");
  statHead.className = "match-detail-venue-section-head";
  const statLabel = document.createElement("small");
  statLabel.textContent = "시즌 성적";
  const statRows = document.createElement("div");
  const renderStats = (venue) => {
    const snapshot = buildTeamVenueSnapshot(teamName, seasonMatches, venue);
    statRows.replaceChildren(
      createVenueStatRow(
        "승률",
        snapshot.matches > 0 ? (snapshot.profile.winRate.toFixed(1) + "%") : "-",
        snapshot.matches > 0 ? (formatDetailRecord(snapshot.profile) + " · " + snapshot.matches + "경기") : snapshot.matches + "경기"
      ),
      createVenueStatRow("평균 득실", formatDetailGoalAverage(snapshot.profile), ""),
      createVenueStatRow(
        "오버/언더 2.5",
        snapshot.overUnder.overRate === null ? "-" : ("오버 " + (snapshot.overUnder.overRate * 100).toFixed(1) + "%"),
        snapshot.overUnder.matches > 0 ? (snapshot.overUnder.matches + "경기 중 " + snapshot.overUnder.overCount + "경기") : "표본 없음"
      )
    );
  };
  statHead.append(statLabel, createVenueInlineToggle("all", renderStats));
  card.append(statHead, statRows);
  renderStats("all");

  const ribbonWrap = document.createElement("div");
  ribbonWrap.className = "match-detail-venue-recent";
  const ribbonHead = document.createElement("div");
  ribbonHead.className = "match-detail-venue-section-head";
  const ribbonLabel = document.createElement("small");
  ribbonLabel.textContent = "최근 10경기";
  const ribbonSummary = document.createElement("small");
  ribbonSummary.className = "match-detail-venue-recent-summary";
  const ribbonBody = document.createElement("div");
  const renderRibbon = (venue) => {
    const snapshot = buildTeamVenueSnapshot(teamName, matches, venue);
    ribbonSummary.textContent = formatVenueRecordSummary(summarizeRecentRecord(snapshot.recentTen));
    ribbonBody.replaceChildren(createVenueRecentList(snapshot.recentTen));
  };
  ribbonHead.append(ribbonLabel, createVenueInlineToggle("all", renderRibbon));
  ribbonWrap.append(ribbonHead, ribbonSummary, ribbonBody);
  renderRibbon("all");
  card.appendChild(ribbonWrap);

  container.replaceChildren(card);
}

function createHeadToHeadVenueList(meetings = []) {
  const wrap = document.createElement("div");
  wrap.className = "match-detail-venue-h2h-group";

  if (meetings.length === 0) {
    const empty = document.createElement("small");
    empty.className = "match-detail-venue-h2h-empty";
    empty.textContent = "맞대결 기록 없음";
    wrap.appendChild(empty);
    return wrap;
  }

  const list = document.createElement("div");
  list.className = "match-detail-venue-h2h-list";
  meetings.forEach((match) => {
    const row = document.createElement("span");
    row.textContent = (match.date || "") + " " + formatTeamName(match.homeTeam) + " " + (match.score || "") + " " + formatTeamName(match.awayTeam);
    list.appendChild(row);
  });
  wrap.appendChild(list);
  return wrap;
}

// 통계: 팀 카드(성적/최근10)와 맞대결이 각자 자기 옆의 전체/홈/원정 버튼으로 따로 움직인다.
function createDetailVenueStatsPanel(match = {}, analysis = {}) {
  const panel = createDetailTabPanel("venue");
  const sourceMatches = analysis.sourceMatches || [];
  const standings = getLeagueStandingsForMatch(match);
  const seasonStartDate = getCurrentSeasonStartDate(match.league, match.date || new Date());
  const seasonMatches = sourceMatches.filter((item) => String(item.date || "").slice(0, 10) >= seasonStartDate);

  const homeCard = document.createElement("div");
  const awayCard = document.createElement("div");
  const cards = document.createElement("section");
  cards.className = "match-detail-venue-grid";
  cards.append(homeCard, awayCard);
  renderVenueTeamCard(homeCard, "홈팀", match.homeTeam, sourceMatches, standings, seasonMatches);
  renderVenueTeamCard(awayCard, "원정팀", match.awayTeam, sourceMatches, standings, seasonMatches);

  const h2h = splitHeadToHeadByVenue(match.homeTeam, match.awayTeam, sourceMatches, 10);
  const h2hMeetings = { all: h2h.all, home: h2h.hostedByHome, away: h2h.hostedByAway };

  const h2hSection = document.createElement("section");
  h2hSection.className = "match-detail-section match-detail-venue-h2h";
  const h2hHead = document.createElement("div");
  h2hHead.className = "match-detail-venue-section-head";
  const h2hTitle = document.createElement("strong");
  h2hTitle.textContent = "맞대결";
  const h2hSummary = document.createElement("small");
  h2hSummary.className = "match-detail-venue-recent-summary";
  const h2hList = document.createElement("div");
  const renderH2h = (venue) => {
    h2hSummary.textContent = formatVenueRecordSummary(summarizeHeadToHeadRecord(match.homeTeam, h2hMeetings[venue]));
    h2hList.replaceChildren(createHeadToHeadVenueList(h2hMeetings[venue]));
  };
  h2hHead.append(h2hTitle, createVenueInlineToggle("all", renderH2h));
  h2hSection.append(h2hHead, h2hSummary, h2hList);
  renderH2h("all");

  panel.append(cards, h2hSection);
  return panel;
}

// 기저율: 이 경기의 정배 구간이 역대 어디쯤인지 표로 보여준다.
function createDetailBaseRatePanel(match = {}) {
  const panel = createDetailTabPanel("baserate");
  const rate = getOddsBaseRate(match);
  const table = getOddsBaseRateTable();
  const hasSample = table.some((row) => row.sampleSize > 0);

  if (!hasSample) {
    const empty = document.createElement("div");
    empty.className = "empty-state compact-empty";
    empty.textContent = "과거 배당 데이터를 불러오는 중입니다.";
    panel.append(empty);
    return panel;
  }

  const section = document.createElement("section");
  section.className = "match-detail-section";
  const title = document.createElement("strong");
  title.textContent = "정배 배당 구간별 이변률";
  const note = document.createElement("small");
  note.className = "match-detail-base-rate-note";
  note.textContent = "정배가 무너진 비율입니다. 무승부도 실패로 셉니다.";

  const list = document.createElement("div");
  list.className = "match-detail-base-rate-list";
  for (const row of table) {
    const item = document.createElement("div");
    item.className = row.band === rate.band ? "match-detail-base-rate-row current" : "match-detail-base-rate-row";
    const band = document.createElement("span");
    band.textContent = row.band;
    const value = document.createElement("strong");
    value.textContent = row.sampleSize > 0 ? `${(row.upsetRate * 100).toFixed(1)}%` : "-";
    const sample = document.createElement("small");
    sample.textContent = row.sampleSize > 0 ? `${row.sampleSize.toLocaleString("en-US")}경기` : "표본 없음";
    item.append(band, value, sample);
    list.appendChild(item);
  }

  section.append(title, note, list);
  panel.append(section);
  return panel;
}

function createDetailOddsPanel(match = {}, analysis = {}) {
  const panel = document.createElement("div");
  panel.className = "match-detail-tab-panel";
  panel.dataset.detailTabPanel = "odds";
  panel.setAttribute("role", "tabpanel");
  panel.hidden = true;

  const same = createDetailStatsSection(analysis.sameOdds, { note: "세 배당이 정확히 같은 과거 경기" });
  const similar = createDetailStatsSection(analysis.similarOdds, { note: "홈승·무·원정승 각각 ±0.05 범위" });
  const sameLeagueStat = analysis.sameLeagueDisplay || analysis.sameLeagueSimilar;
  const sameLeague = createDetailStatsSection(sameLeagueStat, {
    note: sameLeagueStat?.label === "같은 리그 근접배당"
      ? "엄격한 유사배당 표본이 없어 같은 리그에서 가장 가까운 배당 5경기를 표시합니다."
      : `${formatLeagueName(match.league)} 안에서 비교`
  });

  const related = document.createElement("section");
  related.className = "match-detail-section";
  const relatedTitle = document.createElement("strong");
  relatedTitle.textContent = "최근 사례";
  const relatedList = document.createElement("div");
  relatedList.className = "match-detail-history-list";
  if ((analysis.relatedMatches || []).length === 0) {
    const empty = document.createElement("div");
    empty.className = "empty-state compact-empty";
    empty.textContent = "관련 과거 경기가 없습니다.";
    relatedList.appendChild(empty);
  } else {
    relatedList.append(...analysis.relatedMatches.slice(0, 20).map(createDetailMatchCard));
  }
  related.append(relatedTitle, relatedList);
  panel.append(same, similar, sameLeague, related);
  return panel;
}

function clampAiScore(value) {
  if (!Number.isFinite(Number(value))) return null;
  return Math.max(0, Math.min(100, Math.round(Number(value))));
}

function averageAvailableScores(values = []) {
  const scores = values.filter((value) => (
    value !== null
    && value !== undefined
    && value !== ""
    && Number.isFinite(Number(value))
  ));
  if (scores.length === 0) return null;
  return clampAiScore(scores.reduce((sum, value) => sum + Number(value), 0) / scores.length);
}

function calculateAiUpsetScore(judgement = {}, criteria = {}, knownMatches = 0) {
  if (judgement.baseUpsetProbability === null || Number(knownMatches) <= 0) return null;

  const odds = [criteria.homeOdds, criteria.drawOdds, criteria.awayOdds]
    .map(parseSearchNumber);
  const favoriteOdds = Number(judgement.favoriteOdds);
  const hasCompleteOdds = odds.every((value) => value !== null && value > 1)
    && Number.isFinite(favoriteOdds)
    && favoriteOdds > 1;
  const impliedTotal = hasCompleteOdds
    ? odds.reduce((sum, value) => sum + (1 / value), 0)
    : 0;
  const marketUpsetProbability = impliedTotal > 0
    ? 100 - (((1 / favoriteOdds) / impliedTotal) * 100)
    : 50;
  const sampleWeight = Math.min(0.65, Number(knownMatches) / (Number(knownMatches) + 30));
  const contextWeight = judgement.confidence === "높음"
    ? 0.6
    : judgement.confidence === "보통"
      ? 0.35
      : 0.15;
  const blendedProbability = (marketUpsetProbability * (1 - sampleWeight))
    + (Number(judgement.baseUpsetProbability) * sampleWeight)
    + (Number(judgement.matchAdjustment || 0) * contextWeight);

  return clampAiScore(blendedProbability);
}

function getDetailTeamAiScores(profile = {}) {
  if (Number(profile.matches || 0) <= 0) {
    return [
      { key: "attack", label: "공격", value: null },
      { key: "defense", label: "수비", value: null },
      { key: "form", label: "흐름", value: null }
    ];
  }
  return [
    { key: "attack", label: "공격", value: clampAiScore((profile.avgGoalsFor / 2.5) * 100) },
    { key: "defense", label: "수비", value: clampAiScore(((2.5 - Math.min(profile.avgGoalsAgainst, 2.5)) / 2.5) * 100) },
    { key: "form", label: "흐름", value: clampAiScore((profile.pointsPerMatch / 3) * 100) }
  ];
}

function buildDetailAiViewModel(match = {}, analysis = {}) {
  const breakdown = analysis.similarOdds?.breakdown || calculateResultBreakdown([]);
  const sameBreakdown = analysis.sameOdds?.breakdown || calculateResultBreakdown([]);
  const leagueBreakdown = analysis.sameLeagueSimilar?.breakdown || calculateResultBreakdown([]);
  const judgement = calculateMatchJudgement(breakdown, analysis.criteria || {});
  const knownMatches = Number(breakdown.knownMatches || 0);
  const canJudge = knownMatches >= 15;
  const context = analysis.contextProfile || {};
  const homeProfile = getTeamRecentProfile(match.homeTeam, analysis.recentRecords?.homeTeam || [], 5);
  const awayProfile = getTeamRecentProfile(match.awayTeam, analysis.recentRecords?.awayTeam || [], 5);
  const homeScores = getDetailTeamAiScores(homeProfile);
  const awayScores = getDetailTeamAiScores(awayProfile);
  const attackScore = averageAvailableScores([homeScores[0].value, awayScores[0].value]);
  const defenseScore = averageAvailableScores([homeScores[1].value, awayScores[1].value]);
  const formScore = averageAvailableScores([homeScores[2].value, awayScores[2].value]);
  const contextScore = { 높음: 100, 보통: 70, 낮음: 35 }[context.confidence] || 35;
  const sampleScore = knownMatches <= 0 ? 0 : Math.min(100, (knownMatches / 50) * 100);
  const oddsConfidenceScore = knownMatches > 0 ? clampAiScore((sampleScore * 0.7) + (contextScore * 0.3)) : null;
  const upsetScore = calculateAiUpsetScore(judgement, analysis.criteria || {}, knownMatches);
  const scores = [
    { key: "attack", label: "양 팀 공격", value: attackScore },
    { key: "defense", label: "양 팀 수비", value: defenseScore },
    { key: "form", label: "양 팀 흐름", value: formScore },
    { key: "odds", label: "배당 신뢰도", value: oddsConfidenceScore }
  ];
  const teamScores = [
    { side: "홈팀", teamName: formatTeamName(match.homeTeam), scores: homeScores },
    { side: "원정팀", teamName: formatTeamName(match.awayTeam), scores: awayScores }
  ];
  const gameScores = scores.slice(3);
  const overallScore = averageAvailableScores(scores.map((item) => item.value));
  const confidence = canJudge
    ? (knownMatches >= 30 && context.confidence === "높음" ? "높음" : "보통")
    : "데이터 부족";
  const favoriteKey = judgement.favorite?.key || "";
  const sameLeagueFavoriteRate = getFavoriteHitRateFromBreakdown(leagueBreakdown, favoriteKey);
  const exactFavoriteRate = getFavoriteHitRateFromBreakdown(sameBreakdown, favoriteKey);
  const outcomeRates = [
    { key: "H", label: "홈승", rate: parseRateValue(breakdown.homeRate) },
    { key: "D", label: "무승부", rate: parseRateValue(breakdown.drawRate) },
    { key: "A", label: "원정승", rate: parseRateValue(breakdown.awayRate) }
  ];
  const evidence = [];
  if (knownMatches > 0) {
    evidence.push({
      label: `유사배당 ${knownMatches}경기`,
      value: `홈승 ${Math.round(outcomeRates[0].rate)}% · 무승부 ${Math.round(outcomeRates[1].rate)}% · 원정승 ${Math.round(outcomeRates[2].rate)}%`
    });
  }
  if (Number(sameBreakdown.knownMatches || 0) > 0) {
    evidence.push({
      label: `동일배당 ${Number(sameBreakdown.knownMatches || 0)}경기`,
      value: exactFavoriteRate === null ? "정배 적중률 계산 불가" : `정배 적중률 ${Math.round(exactFavoriteRate)}%`
    });
  }
  if (judgement.favoriteHitRate !== null && knownMatches > 0) {
    evidence.push({
      label: "정배 적중 비교",
      value: sameLeagueFavoriteRate === null
        ? `유사배당 ${Math.round(judgement.favoriteHitRate)}%`
        : `전체 ${Math.round(judgement.favoriteHitRate)}% · 같은 리그 ${Math.round(sameLeagueFavoriteRate)}%`
    });
  }
  if (homeProfile.matches > 0) {
    evidence.push({
      label: `${formatTeamName(match.homeTeam)} 최근 ${homeProfile.matches}경기`,
      value: `${formatDetailRecord(homeProfile)} · 득 ${homeProfile.avgGoalsFor.toFixed(1)} · 실 ${homeProfile.avgGoalsAgainst.toFixed(1)}`
    });
  }
  if (awayProfile.matches > 0) {
    evidence.push({
      label: `${formatTeamName(match.awayTeam)} 최근 ${awayProfile.matches}경기`,
      value: `${formatDetailRecord(awayProfile)} · 득 ${awayProfile.avgGoalsFor.toFixed(1)} · 실 ${awayProfile.avgGoalsAgainst.toFixed(1)}`
    });
  }

  const highestOutcome = [...outcomeRates].sort((left, right) => right.rate - left.rate)[0];
  const conclusions = [];
  if (knownMatches > 0) {
    conclusions.push(`유사배당에서는 ${highestOutcome.label}이 ${Math.round(highestOutcome.rate)}%로 가장 많이 발생했습니다.`);
  } else {
    conclusions.push("현재 배당과 비교할 수 있는 과거 유사배당 전적이 없습니다.");
  }
  if (homeProfile.matches > 0 && awayProfile.matches > 0) {
    const strongerTeam = homeProfile.pointsPerMatch === awayProfile.pointsPerMatch
      ? "두 팀의 최근 흐름이 비슷합니다"
      : homeProfile.pointsPerMatch > awayProfile.pointsPerMatch
        ? `${formatTeamName(match.homeTeam)}의 최근 흐름이 더 좋습니다`
        : `${formatTeamName(match.awayTeam)}의 최근 흐름이 더 좋습니다`;
    conclusions.push(`${strongerTeam}. 평균 득점은 홈 ${homeProfile.avgGoalsFor.toFixed(1)}골, 원정 ${awayProfile.avgGoalsFor.toFixed(1)}골입니다.`);
  }
  conclusions.push(canJudge
    ? `배당과 최근 경기 데이터를 종합하면 최종 판정은 ${judgement.judgement}입니다.`
    : `현재 표본은 ${knownMatches}경기로, 강한 판정보다는 데이터 추이를 함께 확인하는 것이 적절합니다.`);

  return {
    judgement,
    knownMatches,
    canJudge,
    confidence,
    overallScore,
    internalUpsetScore: upsetScore,
    scores,
    teamScores,
    gameScores,
    evidence,
    conclusions
  };
}

function getAnalysisOutcomeLabel(resultKey = "") {
  if (resultKey === "H") return "home";
  if (resultKey === "D") return "draw";
  if (resultKey === "A") return "away";
  return "";
}

function normalizeAnalysisRate(count = 0, total = 0) {
  const safeTotal = Number(total || 0);
  if (safeTotal <= 0) return null;
  return getRatePercent(Number(count || 0), safeTotal);
}

function getAnalysisSampleBucket(sampleSize = 0) {
  const safeSampleSize = Number(sampleSize || 0);
  if (safeSampleSize <= 0) return "none";
  if (safeSampleSize < 15) return "low";
  if (safeSampleSize < 30) return "medium";
  return "high";
}

function buildAnalysisBreakdownContext(breakdown = {}, favoriteKey = "") {
  const total = Number(breakdown.totalMatches || 0);
  const known = Number(breakdown.knownMatches || 0);
  const homeWins = Number(breakdown.homeWins || 0);
  const draws = Number(breakdown.draws || 0);
  const awayWins = Number(breakdown.awayWins || 0);
  const rates = {
    home: normalizeAnalysisRate(homeWins, known),
    draw: normalizeAnalysisRate(draws, known),
    away: normalizeAnalysisRate(awayWins, known)
  };
  const favoriteHitRate = favoriteKey ? normalizeAnalysisRate(
    favoriteKey === "H" ? homeWins : favoriteKey === "D" ? draws : awayWins,
    known
  ) : null;
  const topOutcome = getTopBreakdownResult({
    knownMatches: known,
    homeWins,
    draws,
    awayWins,
    homeRate: rates.home === null ? "" : `${rates.home.toFixed(1)}%`,
    drawRate: rates.draw === null ? "" : `${rates.draw.toFixed(1)}%`,
    awayRate: rates.away === null ? "" : `${rates.away.toFixed(1)}%`
  });

  return {
    total,
    known,
    sampleBucket: getAnalysisSampleBucket(known),
    counts: {
      home: homeWins,
      draw: draws,
      away: awayWins
    },
    rates,
    favoriteHitRate,
    topOutcomeKey: topOutcome.key || "",
    topOutcomeRate: Number.isFinite(Number(topOutcome.rate)) ? Number(topOutcome.rate) : null
  };
}

function buildAnalysisTeamProfileContext(profile = {}) {
  const matches = Number(profile.matches || 0);
  if (matches <= 0) {
    return {
      matches: 0,
      wins: 0,
      draws: 0,
      losses: 0,
      goalsFor: 0,
      goalsAgainst: 0,
      avgGoalsFor: null,
      avgGoalsAgainst: null,
      winRate: null,
      drawRate: null,
      pointsPerMatch: null,
      scoredRate: null,
      lowConcedeRate: null
    };
  }

  return {
    matches,
    wins: Number(profile.wins || 0),
    draws: Number(profile.draws || 0),
    losses: Number(profile.losses || 0),
    goalsFor: Number(profile.goalsFor || 0),
    goalsAgainst: Number(profile.goalsAgainst || 0),
    avgGoalsFor: Number.isFinite(Number(profile.avgGoalsFor)) ? Number(profile.avgGoalsFor) : null,
    avgGoalsAgainst: Number.isFinite(Number(profile.avgGoalsAgainst)) ? Number(profile.avgGoalsAgainst) : null,
    winRate: normalizeAnalysisRate(profile.wins, matches),
    drawRate: normalizeAnalysisRate(profile.draws, matches),
    pointsPerMatch: Number.isFinite(Number(profile.pointsPerMatch)) ? Number(profile.pointsPerMatch) : null,
    scoredRate: Number.isFinite(Number(profile.scoredRate)) ? Number(profile.scoredRate) : null,
    lowConcedeRate: Number.isFinite(Number(profile.lowConcedeRate)) ? Number(profile.lowConcedeRate) : null
  };
}

function buildAnalysisVenueContext(profile = {}) {
  const normalized = buildAnalysisTeamProfileContext(profile);
  return {
    matches: normalized.matches,
    wins: normalized.wins,
    draws: normalized.draws,
    losses: normalized.losses,
    avgGoalsFor: normalized.avgGoalsFor,
    avgGoalsAgainst: normalized.avgGoalsAgainst,
    pointsPerMatch: normalized.pointsPerMatch
  };
}

function buildAnalysisStandingContext(row = null) {
  if (!row) return { rank: null, played: null, points: null, goalDifference: null };
  return {
    rank: Number.isFinite(Number(row.rank)) ? Number(row.rank) : null,
    played: Number.isFinite(Number(row.played)) ? Number(row.played) : null,
    points: Number.isFinite(Number(row.points)) ? Number(row.points) : null,
    goalDifference: Number.isFinite(Number(row.goalDifference)) ? Number(row.goalDifference) : null
  };
}

function buildAnalysisPerformanceContext(profile = {}) {
  const matches = Number(profile.matches || 0);
  return {
    matches,
    avgShots: matches > 0 && Number.isFinite(Number(profile.avgShots)) ? Number(profile.avgShots) : null,
    avgShotsOnGoal: matches > 0 && Number.isFinite(Number(profile.avgShotsOnGoal)) ? Number(profile.avgShotsOnGoal) : null,
    avgPossession: matches > 0 && Number.isFinite(Number(profile.avgPossession)) ? Number(profile.avgPossession) : null,
    avgCorners: matches > 0 && Number.isFinite(Number(profile.avgCorners)) ? Number(profile.avgCorners) : null,
    avgExpectedGoals: matches > 0 && Number.isFinite(Number(profile.avgExpectedGoals)) ? Number(profile.avgExpectedGoals) : null
  };
}

function buildAnalysisHeadToHeadContext(match = {}, recentRecords = {}) {
  const matches = Array.isArray(recentRecords.headToHead) ? recentRecords.headToHead : [];
  const breakdown = calculateResultBreakdown(matches);
  const homePerspective = getTeamRecentProfile(match.homeTeam, matches, 10);
  return {
    sample: buildAnalysisBreakdownContext(breakdown, ""),
    homePerspective: buildAnalysisTeamProfileContext(homePerspective)
  };
}

function getAnalysisSignalKeys(signals = []) {
  const map = {
    "무승부 주의": "DRAW_RISK",
    "역배 신호": "UNDERDOG_ALERT",
    "정배 과몰림": "OVERBACKED_FAVORITE",
    "균형 배당": "BALANCED_ODDS",
    "정배 적중 낮음": "LOW_FAVORITE_HIT",
    "같은 리그 정배 낮음": "LOW_LEAGUE_FAVORITE_HIT",
    "동일/유사 정배 낮음": "LOW_EXACT_AND_SIMILAR_FAVORITE_HIT",
    "데이터 부족": "DATA_LACK",
    "표본 부족": "LOW_SAMPLE",
    "국가대항 보정": "NATIONAL_MATCH_CONTEXT",
    "컵대회 보정": "CUP_CONTEXT",
    "친선경기 보정": "FRIENDLY_CONTEXT",
    "원정 정배": "AWAY_FAVORITE",
    "강팀 정배": "STRONG_FAVORITE",
    "중요 경기 보정": "HIGH_IMPORTANCE_CONTEXT",
    "토너먼트 변수": "TOURNAMENT_CONTEXT",
    "약팀 득점 흐름": "UNDERDOG_SCORING_FORM",
    "수비 버팀": "UNDERDOG_DEFENSIVE_STABILITY",
    "강팀 상대 버팀": "UNDERDOG_STRONG_OPPONENT_RESISTANCE",
    "정배 수비 불안": "FAVORITE_DEFENSIVE_RISK",
    "정배 최근 흔들림": "FAVORITE_RECENT_SLIP",
    "홈원정 흐름 역전": "VENUE_FORM_REVERSAL",
    "득실점 상성 주의": "GOAL_PROFILE_CAUTION",
    "리그 순위 역전": "TABLE_REVERSAL",
    "리그 순위 박빙": "TABLE_BALANCED",
    "정배 일정 부담": "FAVORITE_SCHEDULE_RISK",
    "정배 연속 원정": "FAVORITE_AWAY_SEQUENCE",
    "최근 흐름 역전": "RECENT_FORM_REVERSAL",
    "득실점 흐름 역전": "GOAL_TREND_REVERSAL",
    "최근 경기력 역전": "PERFORMANCE_REVERSAL",
    "기대득점 우세": "XG_EDGE",
    "정배 공격력 저하": "FAVORITE_ATTACK_DROP"
  };
  return [...new Set((Array.isArray(signals) ? signals : []).map((signal) => map[signal]).filter(Boolean))];
}

function getAnalysisJudgementKey(judgement = "") {
  const map = {
    "데이터 부족": "DATA_LACK",
    "일반": "GENERAL",
    "대형 이변 후보": "MAJOR_UPSET_WARNING",
    "이변 후보": "UPSET_WARNING",
    "정배불안": "FAVORITE_UNSTABLE",
    "박빙주의": "BALANCED_CAUTION",
    "혼전": "MIXED"
  };
  return map[judgement] || "GENERAL";
}

function buildAnalysisContextV1(match = {}, analysis = {}) {
  const contextProfile = analysis.contextProfile || {};
  const sameOddsBreakdown = analysis.sameOdds?.breakdown || calculateResultBreakdown([]);
  const similarOddsBreakdown = analysis.similarOdds?.breakdown || calculateResultBreakdown([]);
  const sameLeagueBreakdown = analysis.sameLeagueSimilar?.breakdown || calculateResultBreakdown([]);
  const judgement = analysis.similarOdds?.judgement || calculateMatchJudgement(similarOddsBreakdown, analysis.criteria || {});
  const favoriteKey = judgement.favorite?.key || "";
  const homeRecent = buildAnalysisTeamProfileContext(getTeamRecentProfile(match.homeTeam, analysis.recentRecords?.homeTeam || [], 5));
  const awayRecent = buildAnalysisTeamProfileContext(getTeamRecentProfile(match.awayTeam, analysis.recentRecords?.awayTeam || [], 5));
  const upsetScore = calculateAiUpsetScore(judgement, analysis.criteria || {}, Number(similarOddsBreakdown.knownMatches || 0));
  const homeStanding = contextProfile.favoriteKey === "H" ? contextProfile.favoriteStanding : contextProfile.favoriteKey === "A" ? contextProfile.underdogStanding : null;
  const awayStanding = contextProfile.favoriteKey === "A" ? contextProfile.favoriteStanding : contextProfile.favoriteKey === "H" ? contextProfile.underdogStanding : null;
  const dataFingerprintSource = {
    matchId: getMatchIdentity(match),
    odds: [match.homeOdds, match.drawOdds, match.awayOdds].map(formatOdds),
    similarKnown: Number(similarOddsBreakdown.knownMatches || 0),
    sameKnown: Number(sameOddsBreakdown.knownMatches || 0),
    leagueKnown: Number(sameLeagueBreakdown.knownMatches || 0),
    judgement: judgement.judgement || "",
    confidence: judgement.confidence || "",
    signals: judgement.signals || [],
    homeRecent,
    awayRecent
  };

  return {
    version: "analysis-context-v1",
    matchId: getMatchIdentity(match),
    fixtureId: String(match.fixtureId || match.id || "").trim() || null,
    league: String(match.league || "").trim(),
    homeTeam: String(match.homeTeam || "").trim(),
    awayTeam: String(match.awayTeam || "").trim(),
    odds: {
      home: parseSearchNumber(match.homeOdds),
      draw: parseSearchNumber(match.drawOdds),
      away: parseSearchNumber(match.awayOdds),
      favoriteKey,
      favoriteLabel: getAnalysisOutcomeLabel(favoriteKey),
      favoriteOdds: Number.isFinite(Number(judgement.favoriteOdds)) ? Number(judgement.favoriteOdds) : null,
      favoriteBand: judgement.favoriteBand || ""
    },
    samples: {
      sameOdds: buildAnalysisBreakdownContext(sameOddsBreakdown, favoriteKey),
      similarOdds: buildAnalysisBreakdownContext(similarOddsBreakdown, favoriteKey),
      sameLeagueSimilar: buildAnalysisBreakdownContext(sameLeagueBreakdown, favoriteKey)
    },
    recent: {
      headToHead: buildAnalysisHeadToHeadContext(match, analysis.recentRecords || {}),
      homeTeam: homeRecent,
      awayTeam: awayRecent
    },
    venue: {
      home: buildAnalysisVenueContext(contextProfile.homeVenueProfile || {}),
      away: buildAnalysisVenueContext(contextProfile.awayVenueProfile || {})
    },
    season: {
      home: buildAnalysisVenueContext(contextProfile.homeSeasonProfile || {}),
      away: buildAnalysisVenueContext(contextProfile.awaySeasonProfile || {})
    },
    standings: {
      home: buildAnalysisStandingContext(homeStanding),
      away: buildAnalysisStandingContext(awayStanding)
    },
    performance: {
      home: buildAnalysisPerformanceContext(contextProfile.homePerformanceProfile || {}),
      away: buildAnalysisPerformanceContext(contextProfile.awayPerformanceProfile || {})
    },
    judgement: {
      value: judgement.judgement || "",
      key: getAnalysisJudgementKey(judgement.judgement || ""),
      confidence: judgement.confidence || "",
      risk: judgement.risk || "",
      signalTexts: Array.isArray(judgement.signals) ? judgement.signals.slice() : [],
      signalKeys: getAnalysisSignalKeys(judgement.signals || []),
      upsetProbability: judgement.upsetProbability === null ? null : Number(judgement.upsetProbability),
      baseUpsetProbability: judgement.baseUpsetProbability === null ? null : Number(judgement.baseUpsetProbability),
      matchAdjustment: Number.isFinite(Number(judgement.matchAdjustment)) ? Number(judgement.matchAdjustment) : null,
      strongSignalCount: Number.isFinite(Number(judgement.strongSignalCount)) ? Number(judgement.strongSignalCount) : 0,
      sampleSize: Number.isFinite(Number(judgement.sampleSize)) ? Number(judgement.sampleSize) : 0
    },
    upsetScore: upsetScore === null ? null : Number(upsetScore),
    context: {
      contextConfidence: String(contextProfile.confidence || ""),
      contextSignals: Array.isArray(contextProfile.signals) ? contextProfile.signals.slice() : [],
      officialContextUpdatedAt: String(contextProfile.officialContextUpdatedAt || "").trim() || null
    },
    dataFingerprint: JSON.stringify(dataFingerprintSource)
  };
}

function buildAnalysisTags(context = {}) {
  const tags = [];
  const add = (tag) => {
    if (tag) tags.push(tag);
  };
  const addSampleTags = (prefix, sample = {}) => {
    const bucket = String(sample.sampleBucket || "none").toUpperCase();
    add(`${prefix}_SAMPLE_${bucket}`);
    if (sample.known > 0 && sample.favoriteHitRate !== null) add(`${prefix}_HAS_RESULT_RATES`);
    if (sample.topOutcomeKey) add(`${prefix}_TOP_${sample.topOutcomeKey}`);
  };

  addSampleTags("EXACT", context.samples?.sameOdds || {});
  addSampleTags("SIMILAR", context.samples?.similarOdds || {});
  addSampleTags("LEAGUE", context.samples?.sameLeagueSimilar || {});

  add(`JUDGEMENT_${context.judgement?.key || "GENERAL"}`);
  if (context.judgement?.confidence) add(`CONFIDENCE_${String(context.judgement.confidence).toUpperCase()}`);
  if (context.odds?.favoriteKey) add(`FAVORITE_${context.odds.favoriteKey}`);
  if (context.odds?.favoriteBand) add(`FAVORITE_BAND_${normalizeTeamSearchText(context.odds.favoriteBand).replace(/[^a-z0-9가-힣]/g, "_").toUpperCase()}`);
  (context.judgement?.signalKeys || []).forEach((signalKey) => add(`SIGNAL_${signalKey}`));

  return [...new Set(tags)];
}

function decideAnalysisDirection(context = {}) {
  const similarSample = context.samples?.similarOdds || {};
  const signalKeys = new Set(context.judgement?.signalKeys || []);
  const favouriteKey = context.odds?.favoriteKey || "";
  const judgementValue = context.judgement?.value || "";
  const topOutcomeKey = similarSample.topOutcomeKey || "";

  if (Number(similarSample.known || 0) < 15) return "LOW_CONFIDENCE";
  if (["대형 이변 후보", "이변 후보", "정배불안"].includes(judgementValue)) return "UPSET_WARNING";
  if (topOutcomeKey === "D" || favouriteKey === "D") return "DRAW_HEAVY";
  if (signalKeys.has("DRAW_RISK")) {
    if (favouriteKey === "H") return "HOME_WITH_DRAW_RISK";
    if (favouriteKey === "A") return "AWAY_WITH_DRAW_RISK";
    return "DRAW_HEAVY";
  }
  if (["박빙주의", "혼전"].includes(judgementValue)) return "BALANCED";
  if (favouriteKey === "H") return "HOME_STRONG";
  if (favouriteKey === "A") return "AWAY_STRONG";
  return "BALANCED";
}

function hashSeedString(input = "") {
  let hash = 2166136261;
  const text = String(input || "");
  for (let index = 0; index < text.length; index += 1) {
    hash ^= text.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }
  return Math.abs(hash >>> 0);
}

function buildAnalysisSeedKey(context = {}, { language = "ko" } = {}) {
  const similarSample = context.samples?.similarOdds || {};
  const seedPayload = [
    context.matchId || "",
    language,
    decideAnalysisDirection(context),
    context.judgement?.value || "",
    similarSample.sampleBucket || "none",
    context.dataFingerprint || ""
  ];
  return seedPayload.join("|");
}

function pickSeededValue(values = [], seedKey = "") {
  const safeValues = Array.isArray(values) ? values.filter((value) => value !== undefined && value !== null) : [];
  if (safeValues.length === 0) return null;
  const index = hashSeedString(seedKey) % safeValues.length;
  return safeValues[index];
}

function getAnalysisSignalKeys(signals = []) {
  const map = {
    "무승부 주의": "DRAW_RISK",
    "역배 신호": "UNDERDOG_ALERT",
    "정배 과몰림": "OVERBACKED_FAVORITE",
    "균형 배당": "BALANCED_ODDS",
    "정배 적중 낮음": "LOW_FAVORITE_HIT",
    "같은 리그 정배 낮음": "LOW_LEAGUE_FAVORITE_HIT",
    "동일/유사 정배 낮음": "LOW_EXACT_AND_SIMILAR_FAVORITE_HIT",
    "데이터 부족": "DATA_LACK",
    "표본 부족": "LOW_SAMPLE",
    "국가대표 보정": "NATIONAL_MATCH_CONTEXT",
    "컵대회 보정": "CUP_CONTEXT",
    "친선경기 보정": "FRIENDLY_CONTEXT",
    "원정 정배": "AWAY_FAVORITE",
    "강한 정배": "STRONG_FAVORITE",
    "중요 경기 보정": "HIGH_IMPORTANCE_CONTEXT",
    "토너먼트 보정": "TOURNAMENT_CONTEXT",
    "약팀 득점 흐름": "UNDERDOG_SCORING_FORM",
    "수비 버팀": "UNDERDOG_DEFENSIVE_STABILITY",
    "강팀 상대 버팀": "UNDERDOG_STRONG_OPPONENT_RESISTANCE",
    "정배 수비 불안": "FAVORITE_DEFENSIVE_RISK",
    "정배 최근 흔들림": "FAVORITE_RECENT_SLIP",
    "원정장 이점 역전": "VENUE_FORM_REVERSAL",
    "실점/득점 성향 주의": "GOAL_PROFILE_CAUTION",
    "리그 순위 역전": "TABLE_REVERSAL",
    "리그 순위 박빙": "TABLE_BALANCED",
    "정배 일정 부담": "FAVORITE_SCHEDULE_RISK",
    "정배 연속 원정": "FAVORITE_AWAY_SEQUENCE",
    "최근 흐름 역전": "RECENT_FORM_REVERSAL",
    "득점 흐름 역전": "GOAL_TREND_REVERSAL",
    "최근 경기력 역전": "PERFORMANCE_REVERSAL",
    "기대 득점 우세": "XG_EDGE",
    "정배 공격력 저하": "FAVORITE_ATTACK_DROP"
  };
  return [...new Set((Array.isArray(signals) ? signals : []).map((signal) => map[signal]).filter(Boolean))];
}

function getAnalysisJudgementKey(judgement = "") {
  const map = {
    "데이터 부족": "DATA_LACK",
    "일반": "GENERAL",
    "대형 이변 후보": "MAJOR_UPSET_WARNING",
    "이변 후보": "UPSET_WARNING",
    "정배불안": "FAVORITE_UNSTABLE",
    "박빙주의": "BALANCED_CAUTION",
    "혼전": "MIXED"
  };
  return map[judgement] || "GENERAL";
}

function getAnalysisConfidenceKey(confidence = "") {
  const value = String(confidence || "").trim();
  if (value === "높음") return "HIGH";
  if (value === "보통") return "MEDIUM";
  if (value === "낮음") return "LOW";
  return "";
}

function getAnalysisFavoriteBandKey(favoriteOdds = null) {
  const value = Number(favoriteOdds);
  if (!Number.isFinite(value)) return "NO_ODDS";
  if (value >= 1.2 && value <= 1.35) return "SUPER_STRONG_FAVORITE";
  if (value <= 1.5) return "STRONG_FAVORITE";
  if (value <= 1.65) return "FAVORITE";
  if (value <= 1.8) return "LIGHT_FAVORITE";
  if (value <= 2.1) return "BALANCED_FAVORITE";
  return "MIXED";
}

function getAnalysisUpsetWarningTone(favoriteOdds = null) {
  const value = Number(favoriteOdds);
  if (!Number.isFinite(value)) return "";
  if (value >= 1.2 && value <= 1.39) return "STRONG";
  if (value >= 1.4 && value <= 1.5) return "CAUTION";
  return "";
}

function buildAnalysisContextV1(match = {}, analysis = {}) {
  const contextProfile = analysis.contextProfile || {};
  const sameOddsBreakdown = analysis.sameOdds?.breakdown || calculateResultBreakdown([]);
  const similarOddsBreakdown = analysis.similarOdds?.breakdown || calculateResultBreakdown([]);
  const sameLeagueBreakdown = analysis.sameLeagueSimilar?.breakdown || calculateResultBreakdown([]);
  const judgement = analysis.similarOdds?.judgement || calculateMatchJudgement(similarOddsBreakdown, analysis.criteria || {});
  const favoriteKey = judgement.favorite?.key || "";
  const homeRecent = buildAnalysisTeamProfileContext(getTeamRecentProfile(match.homeTeam, analysis.recentRecords?.homeTeam || [], 5));
  const awayRecent = buildAnalysisTeamProfileContext(getTeamRecentProfile(match.awayTeam, analysis.recentRecords?.awayTeam || [], 5));
  const upsetScore = calculateAiUpsetScore(judgement, analysis.criteria || {}, Number(similarOddsBreakdown.knownMatches || 0));
  const homeStanding = contextProfile.favoriteKey === "H" ? contextProfile.favoriteStanding : contextProfile.favoriteKey === "A" ? contextProfile.underdogStanding : null;
  const awayStanding = contextProfile.favoriteKey === "A" ? contextProfile.favoriteStanding : contextProfile.favoriteKey === "H" ? contextProfile.underdogStanding : null;
  const dataFingerprintSource = {
    matchId: getMatchIdentity(match),
    odds: [match.homeOdds, match.drawOdds, match.awayOdds].map(formatOdds),
    similarKnown: Number(similarOddsBreakdown.knownMatches || 0),
    sameKnown: Number(sameOddsBreakdown.knownMatches || 0),
    leagueKnown: Number(sameLeagueBreakdown.knownMatches || 0),
    judgement: judgement.judgement || "",
    confidence: judgement.confidence || "",
    signals: judgement.signals || [],
    homeRecent,
    awayRecent
  };

  return {
    version: "analysis-context-v1",
    matchId: getMatchIdentity(match),
    fixtureId: String(match.fixtureId || match.id || "").trim() || null,
    league: String(match.league || "").trim(),
    homeTeam: String(match.homeTeam || "").trim(),
    awayTeam: String(match.awayTeam || "").trim(),
    odds: {
      home: parseSearchNumber(match.homeOdds),
      draw: parseSearchNumber(match.drawOdds),
      away: parseSearchNumber(match.awayOdds),
      favoriteKey,
      favoriteLabel: getAnalysisOutcomeLabel(favoriteKey),
      favoriteOdds: Number.isFinite(Number(judgement.favoriteOdds)) ? Number(judgement.favoriteOdds) : null,
      favoriteBand: judgement.favoriteBand || "",
      favoriteBandKey: getAnalysisFavoriteBandKey(judgement.favoriteOdds)
    },
    samples: {
      sameOdds: buildAnalysisBreakdownContext(sameOddsBreakdown, favoriteKey),
      similarOdds: buildAnalysisBreakdownContext(similarOddsBreakdown, favoriteKey),
      sameLeagueSimilar: buildAnalysisBreakdownContext(sameLeagueBreakdown, favoriteKey)
    },
    recent: {
      headToHead: buildAnalysisHeadToHeadContext(match, analysis.recentRecords || {}),
      homeTeam: homeRecent,
      awayTeam: awayRecent
    },
    venue: {
      home: buildAnalysisVenueContext(contextProfile.homeVenueProfile || {}),
      away: buildAnalysisVenueContext(contextProfile.awayVenueProfile || {})
    },
    season: {
      home: buildAnalysisVenueContext(contextProfile.homeSeasonProfile || {}),
      away: buildAnalysisVenueContext(contextProfile.awaySeasonProfile || {})
    },
    standings: {
      home: buildAnalysisStandingContext(homeStanding),
      away: buildAnalysisStandingContext(awayStanding)
    },
    performance: {
      home: buildAnalysisPerformanceContext(contextProfile.homePerformanceProfile || {}),
      away: buildAnalysisPerformanceContext(contextProfile.awayPerformanceProfile || {})
    },
    judgement: {
      value: judgement.judgement || "",
      key: getAnalysisJudgementKey(judgement.judgement || ""),
      confidence: judgement.confidence || "",
      confidenceKey: getAnalysisConfidenceKey(judgement.confidence || ""),
      risk: judgement.risk || "",
      signalTexts: Array.isArray(judgement.signals) ? judgement.signals.slice() : [],
      signalKeys: getAnalysisSignalKeys(judgement.signals || []),
      upsetProbability: judgement.upsetProbability === null ? null : Number(judgement.upsetProbability),
      baseUpsetProbability: judgement.baseUpsetProbability === null ? null : Number(judgement.baseUpsetProbability),
      matchAdjustment: Number.isFinite(Number(judgement.matchAdjustment)) ? Number(judgement.matchAdjustment) : null,
      strongSignalCount: Number.isFinite(Number(judgement.strongSignalCount)) ? Number(judgement.strongSignalCount) : 0,
      sampleSize: Number.isFinite(Number(judgement.sampleSize)) ? Number(judgement.sampleSize) : 0
    },
    upsetScore: upsetScore === null ? null : Number(upsetScore),
    context: {
      contextConfidence: String(contextProfile.confidence || ""),
      contextSignals: Array.isArray(contextProfile.signals) ? contextProfile.signals.slice() : [],
      officialContextUpdatedAt: String(contextProfile.officialContextUpdatedAt || "").trim() || null
    },
    dataFingerprint: JSON.stringify(dataFingerprintSource)
  };
}

function buildAnalysisTags(context = {}) {
  const tags = [];
  const add = (tag) => {
    if (tag) tags.push(tag);
  };
  const addSampleTags = (prefix, sample = {}) => {
    const bucket = String(sample.sampleBucket || "none").toUpperCase();
    add(`${prefix}_SAMPLE_${bucket}`);
    if (sample.known > 0 && sample.favoriteHitRate !== null) add(`${prefix}_HAS_RESULT_RATES`);
    if (sample.topOutcomeKey) add(`${prefix}_TOP_${sample.topOutcomeKey}`);
  };

  addSampleTags("EXACT", context.samples?.sameOdds || {});
  addSampleTags("SIMILAR", context.samples?.similarOdds || {});
  addSampleTags("LEAGUE", context.samples?.sameLeagueSimilar || {});

  add(`JUDGEMENT_${context.judgement?.key || "GENERAL"}`);
  if (context.judgement?.confidenceKey) add(`CONFIDENCE_${context.judgement.confidenceKey}`);
  if (context.odds?.favoriteKey) add(`FAVORITE_${context.odds.favoriteKey}`);
  if (context.odds?.favoriteBandKey) add(`FAVORITE_BAND_${context.odds.favoriteBandKey}`);
  (context.judgement?.signalKeys || []).forEach((signalKey) => add(`SIGNAL_${signalKey}`));

  const recentHome = context.recent?.homeTeam || {};
  const recentAway = context.recent?.awayTeam || {};
  if (recentHome.matches >= 3 && recentAway.matches >= 3) {
    const diff = Number(recentHome.pointsPerMatch || 0) - Number(recentAway.pointsPerMatch || 0);
    if (diff >= 0.4) add("RECENT_HOME_EDGE");
    else if (diff <= -0.4) add("RECENT_AWAY_EDGE");
  }

  const venueHome = context.venue?.home || {};
  const venueAway = context.venue?.away || {};
  if (venueHome.matches >= 3 && venueAway.matches >= 3) {
    const diff = Number(venueHome.pointsPerMatch || 0) - Number(venueAway.pointsPerMatch || 0);
    if (diff >= 0.35) add("VENUE_HOME_EDGE");
    else if (diff <= -0.35) add("VENUE_AWAY_EDGE");
  }

  if (recentHome.matches >= 3 && recentAway.matches >= 3) {
    const attackDiff = Number(recentHome.avgGoalsFor || 0) - Number(recentAway.avgGoalsFor || 0);
    const defenseDiff = Number(recentAway.avgGoalsAgainst || 0) - Number(recentHome.avgGoalsAgainst || 0);
    if (attackDiff >= 0.25) add("ATTACK_HOME_EDGE");
    else if (attackDiff <= -0.25) add("ATTACK_AWAY_EDGE");
    if (defenseDiff >= 0.25) add("DEFENSE_HOME_EDGE");
    else if (defenseDiff <= -0.25) add("DEFENSE_AWAY_EDGE");
  }

  return [...new Set(tags)];
}

function decideAnalysisDirection(context = {}) {
  const similarSample = context.samples?.similarOdds || {};
  const signalKeys = new Set(context.judgement?.signalKeys || []);
  const favouriteKey = context.odds?.favoriteKey || "";
  const judgementKey = context.judgement?.key || "GENERAL";
  const topOutcomeKey = similarSample.topOutcomeKey || "";
  const hasUpsetJudgement = ["MAJOR_UPSET_WARNING", "UPSET_WARNING", "FAVORITE_UNSTABLE"].includes(judgementKey);

  if (judgementKey === "DATA_LACK") return "LOW_CONFIDENCE";
  if (signalKeys.has("DRAW_RISK")) {
    if (favouriteKey === "H") return "HOME_WITH_DRAW_RISK";
    if (favouriteKey === "A") return "AWAY_WITH_DRAW_RISK";
    return "DRAW_HEAVY";
  }
  if (topOutcomeKey === "D" || favouriteKey === "D") return "DRAW_HEAVY";
  if (hasUpsetJudgement) return "BALANCED";
  if (["BALANCED_CAUTION", "MIXED"].includes(judgementKey)) return "BALANCED";
  if (favouriteKey === "H") return "HOME_STRONG";
  if (favouriteKey === "A") return "AWAY_STRONG";
  return "BALANCED";
}

function buildAnalysisSeedKey(context = {}, { language = "ko" } = {}) {
  const similarSample = context.samples?.similarOdds || {};
  const seedPayload = [
    context.matchId || "",
    language,
    decideAnalysisDirection(context),
    context.judgement?.key || "",
    similarSample.sampleBucket || "none",
    context.dataFingerprint || ""
  ];
  return seedPayload.join("|");
}

function getAnalysisSentenceLibrary() {
  return Array.isArray(ANALYSIS_SENTENCE_LIBRARY.ANALYSIS_SENTENCE_LIBRARY)
    ? ANALYSIS_SENTENCE_LIBRARY.ANALYSIS_SENTENCE_LIBRARY
    : [];
}

function getAnalysisHeadlineLibrary() {
  return ANALYSIS_SENTENCE_LIBRARY.ANALYSIS_HEADLINE_LIBRARY || {};
}

function pickWeightedSeededValue(values = [], seedKey = "") {
  const safeValues = Array.isArray(values) ? values.filter(Boolean) : [];
  if (safeValues.length === 0) return null;
  const totalWeight = safeValues.reduce((sum, item) => sum + Math.max(1, Number(item.weight || 1)), 0);
  const target = hashSeedString(seedKey) % totalWeight;
  let cursor = 0;
  for (const item of safeValues) {
    cursor += Math.max(1, Number(item.weight || 1));
    if (target < cursor) return item;
  }
  return safeValues[safeValues.length - 1] || null;
}

function getContextValue(object, path) {
  return String(path || "").split(".").reduce((current, key) => (
    current && typeof current === "object" ? current[key] : undefined
  ), object);
}

function replaceAnalysisPlaceholders(text = "", context = {}) {
  if (!text) return "";
  const replacements = {
    "{{homeTeam}}": context.homeTeam || "",
    "{{awayTeam}}": context.awayTeam || "",
    "{{league}}": formatLeagueName(context.league || ""),
    "{{favoriteLabel}}": context.odds?.favoriteLabel === "home" ? "홈팀"
      : context.odds?.favoriteLabel === "away" ? "원정팀"
        : context.odds?.favoriteLabel === "draw" ? "무승부"
          : "정배 축",
    "{{similarKnown}}": String(context.samples?.similarOdds?.known ?? 0),
    "{{exactKnown}}": String(context.samples?.sameOdds?.known ?? 0),
    "{{leagueKnown}}": String(context.samples?.sameLeagueSimilar?.known ?? 0)
  };
  return Object.entries(replacements).reduce((output, [key, value]) => output.replaceAll(key, value), String(text));
}

function buildAnalysisEvidenceKeys(sentence = {}, context = {}) {
  return [...new Set((Array.isArray(sentence.evidenceKeys) ? sentence.evidenceKeys : []).filter((path) => {
    const value = getContextValue(context, path);
    return value !== null && value !== undefined && value !== "";
  }))];
}

function categoryMatchesDirection(sentence = {}, direction = "") {
  const allowedDirections = Array.isArray(sentence.allowedDirections) ? sentence.allowedDirections : [];
  return allowedDirections.length === 0 || allowedDirections.includes(direction);
}

function sentenceMatchesTags(sentence = {}, tags = new Set()) {
  const requiredTags = Array.isArray(sentence.requiredTags) ? sentence.requiredTags : [];
  const excludedTags = Array.isArray(sentence.excludedTags) ? sentence.excludedTags : [];
  return requiredTags.every((tag) => tags.has(tag)) && excludedTags.every((tag) => !tags.has(tag));
}

function pickAnalysisSentenceCandidate(candidates = [], seedKey = "") {
  if (!Array.isArray(candidates) || candidates.length === 0) return null;
  const topPriority = Math.max(...candidates.map((candidate) => Number(candidate.priority || 0)));
  const priorityCandidates = candidates.filter((candidate) => Number(candidate.priority || 0) === topPriority);
  return pickWeightedSeededValue(priorityCandidates, seedKey);
}

const NARRATIVE_EXCLUDED_CATEGORIES = new Set(["closing"]);
const NARRATIVE_REPEATED_TERM_PATTERNS = [
  /단단한 흐름/g,
  /안정적(?:으로|인|이라는)?/g,
  /방향(?:성)?/g,
  /해석/g,
  /데이터/g,
  /표본/g
];

function countNarrativeRepeatedTerms(text = "") {
  const content = String(text || "");
  return NARRATIVE_REPEATED_TERM_PATTERNS.reduce((count, pattern) => (
    count + ((content.match(pattern) || []).length > 0 ? 1 : 0)
  ), 0);
}

function isNarrativeRepeatedTermSafe(existingSentences = [], candidateText = "") {
  const usedMatches = new Set();
  existingSentences.forEach((sentence) => {
    const text = String(sentence?.text || "");
    NARRATIVE_REPEATED_TERM_PATTERNS.forEach((pattern) => {
      if ((text.match(pattern) || []).length > 0) usedMatches.add(pattern.source);
    });
  });
  let repeatedCount = 0;
  NARRATIVE_REPEATED_TERM_PATTERNS.forEach((pattern) => {
    if (usedMatches.has(pattern.source) && (String(candidateText || "").match(pattern) || []).length > 0) repeatedCount += 1;
  });
  return repeatedCount === 0;
}

function getNarrativeSentenceStarter(text = "") {
  const content = String(text || "").trim();
  const starters = ["다만", "그렇지만", "반대로", "반대 방향", "하지만", "최근", "결론적으로", "종합하면", "정리하면", "전체적으로 보면", "특히", "여기에", "마지막으로"];
  return starters.find((starter) => content.startsWith(starter)) || "";
}

function renderNarrativeSentenceText(sentence = {}, index = 0) {
  const text = String(sentence.text || "").trim();
  if (index <= 0) return text;
  if (sentence.connectorType === "contrast" && !/^(다만|그렇지만|반대로|반대 방향|하지만|특히|여기에)/.test(text)) return `다만 ${text}`;
  if (sentence.connectorType === "conclusion" && !/^(종합하면|전체적으로 보면|결론적으로|정리하면)/.test(text)) return `종합하면 ${text}`;
  if (sentence.connectorType === "closing" && !/^(마지막으로|끝으로|마무리하면)/.test(text)) return `마지막으로 ${text}`;
  return text;
}

function canUseSentenceStarter(existingSentences = [], candidate = {}) {
  if (existingSentences.length === 0) return true;
  const previousRendered = renderNarrativeSentenceText(existingSentences[existingSentences.length - 1], existingSentences.length - 1);
  const candidateRendered = renderNarrativeSentenceText(candidate, existingSentences.length);
  const previousStarter = getNarrativeSentenceStarter(previousRendered);
  const candidateStarter = getNarrativeSentenceStarter(candidateRendered);
  if (!previousStarter || !candidateStarter) return true;
  return previousStarter !== candidateStarter;
}

function getAnalysisMeaningPlan(context = {}, direction = "", tagSet = new Set()) {
  const similarSample = context.samples?.similarOdds || {};
  const exactSample = context.samples?.sameOdds || {};
  const leagueSample = context.samples?.sameLeagueSimilar || {};
  const signalKeys = new Set(context.judgement?.signalKeys || []);
  const meaningKeys = [];
  const push = (key, condition = true) => {
    if (condition && key && !meaningKeys.includes(key)) meaningKeys.push(key);
  };

  if (direction !== "LOW_CONFIDENCE") {
    push(`INTRO_${direction}`);
  }
  if (direction === "LOW_CONFIDENCE") {
    if (similarSample.known === 0) push("SAMPLE_NONE");
    else if (similarSample.sampleBucket === "low") push("SAMPLE_LOW");
    else if (similarSample.sampleBucket === "medium") push("SAMPLE_MEDIUM");
    else if (similarSample.sampleBucket === "high") push("SAMPLE_HIGH");
  } else {
    if (similarSample.sampleBucket === "low") push("SAMPLE_LOW");
    else if (similarSample.sampleBucket === "medium") push("SAMPLE_MEDIUM");
    else if (similarSample.sampleBucket === "high") push("SAMPLE_HIGH");
  }

  if (exactSample.known >= 15 || exactSample.topOutcomeKey) {
    if (exactSample.topOutcomeKey === "H") push("EXACT_HOME_SUPPORT");
    else if (exactSample.topOutcomeKey === "A") push("EXACT_AWAY_SUPPORT");
    else if (exactSample.topOutcomeKey === "D") push("EXACT_DRAW_SUPPORT");
  } else if (exactSample.known > 0) {
    push("EXACT_SAMPLE_THIN");
  }

  if (similarSample.topOutcomeKey === "H") push("SIMILAR_HOME_SUPPORT");
  else if (similarSample.topOutcomeKey === "A") push("SIMILAR_AWAY_SUPPORT");
  else if (similarSample.topOutcomeKey === "D") push("SIMILAR_DRAW_SUPPORT");
  if (direction === "UPSET_WARNING" || signalKeys.has("UNDERDOG_ALERT")) push("SIMILAR_UPSET_FLAG");

  if (leagueSample.known >= 15 || leagueSample.topOutcomeKey) {
    if (leagueSample.topOutcomeKey === "H") push("LEAGUE_HOME_SUPPORT");
    else if (leagueSample.topOutcomeKey === "A") push("LEAGUE_AWAY_SUPPORT");
    else if (leagueSample.topOutcomeKey === "D") push("LEAGUE_DRAW_SUPPORT");
  }

  if (tagSet.has("RECENT_HOME_EDGE")) push("RECENT_HOME_EDGE");
  else if (tagSet.has("RECENT_AWAY_EDGE")) push("RECENT_AWAY_EDGE");

  if (tagSet.has("VENUE_HOME_EDGE")) push("VENUE_HOME_EDGE");
  else if (tagSet.has("VENUE_AWAY_EDGE")) push("VENUE_AWAY_EDGE");

  if (tagSet.has("ATTACK_HOME_EDGE")) push("ATTACK_HOME_EDGE");
  else if (tagSet.has("ATTACK_AWAY_EDGE")) push("ATTACK_AWAY_EDGE");

  if (tagSet.has("DEFENSE_HOME_EDGE")) push("DEFENSE_HOME_EDGE");
  else if (tagSet.has("DEFENSE_AWAY_EDGE")) push("DEFENSE_AWAY_EDGE");

  if (signalKeys.has("DRAW_RISK")) push("RISK_DRAW_SIGNAL");
  if (signalKeys.has("UNDERDOG_ALERT")) push("RISK_UNDERDOG_SIGNAL");
  if (direction === "LOW_CONFIDENCE" || (!tagSet.has("RECENT_HOME_EDGE") && !tagSet.has("RECENT_AWAY_EDGE")
    && !tagSet.has("VENUE_HOME_EDGE") && !tagSet.has("VENUE_AWAY_EDGE"))) {
    push("DATA_GAP_GENERAL");
  }

  if (direction === "UPSET_WARNING") push("CONCLUSION_UPSET");
  else if (direction === "LOW_CONFIDENCE") push("CONCLUSION_LOW_CONFIDENCE");
  else if (["DRAW_HEAVY", "BALANCED"].includes(direction)) push("CONCLUSION_DRAW");
  else if (["HOME_STRONG", "HOME_WITH_DRAW_RISK"].includes(direction)) push("CONCLUSION_HOME");
  else if (["AWAY_STRONG", "AWAY_WITH_DRAW_RISK"].includes(direction)) push("CONCLUSION_AWAY");

  push("CLOSING_MONITOR");
  return meaningKeys;
}

function buildAnalysisSentenceSelection(context = {}, { language = "ko" } = {}) {
  const tags = buildAnalysisTags(context);
  const tagSet = new Set(tags);
  const direction = decideAnalysisDirection(context);
  const library = getAnalysisSentenceLibrary();
  const meaningPlan = getAnalysisMeaningPlan(context, direction, tagSet);
  const usedSentenceIds = [];
  const usedMeaningKeys = [];
  const usedCooldownKeys = new Set();
  const evidenceKeys = new Set();
  const sentences = [];
  const maxSentences = direction === "LOW_CONFIDENCE" ? 3 : 7;
  const conclusionMeaningKeys = new Set(["CONCLUSION_HOME", "CONCLUSION_AWAY", "CONCLUSION_DRAW", "CONCLUSION_UPSET", "CONCLUSION_LOW_CONFIDENCE"]);
  const regularMeaningPlan = meaningPlan.filter((meaningKey) => !conclusionMeaningKeys.has(meaningKey));
  const conclusionMeaningPlan = meaningPlan.filter((meaningKey) => conclusionMeaningKeys.has(meaningKey));

  for (const meaningKey of regularMeaningPlan) {
    const remainingConclusionSlots = conclusionMeaningPlan.length > 0 ? 1 : 0;
    if (sentences.length >= Math.max(0, maxSentences - remainingConclusionSlots)) break;
    const candidates = library
      .filter((sentence) => sentence.meaningKey === meaningKey)
      .filter((sentence) => !NARRATIVE_EXCLUDED_CATEGORIES.has(sentence.category))
      .filter((sentence) => categoryMatchesDirection(sentence, direction))
      .filter((sentence) => sentenceMatchesTags(sentence, tagSet))
      .filter((sentence) => !usedCooldownKeys.has(sentence.cooldownKey))
      .filter((sentence) => !usedMeaningKeys.includes(sentence.meaningKey));

    const seedKey = `${buildAnalysisSeedKey(context, { language })}|${meaningKey}|${sentences.length}`;
    const preferredCandidates = candidates.filter((sentence) => {
      const text = replaceAnalysisPlaceholders(sentence.text, context);
      const hydratedSentence = { ...sentence, text };
      return isNarrativeRepeatedTermSafe(sentences, text) && canUseSentenceStarter(sentences, hydratedSentence);
    });
    const selected = pickAnalysisSentenceCandidate(preferredCandidates.length > 0 ? preferredCandidates : candidates, seedKey);
    if (!selected) continue;
    const text = replaceAnalysisPlaceholders(selected.text, context);
    if (!text) continue;
    const sentenceEvidenceKeys = buildAnalysisEvidenceKeys(selected, context);
    sentences.push({
      id: selected.id,
      category: selected.category,
      meaningKey: selected.meaningKey,
      cooldownKey: selected.cooldownKey,
      connectorType: selected.connectorType || "independent",
      tone: selected.tone || "neutral",
      text,
      evidenceKeys: sentenceEvidenceKeys
    });
    usedSentenceIds.push(selected.id);
    usedMeaningKeys.push(selected.meaningKey);
    usedCooldownKeys.add(selected.cooldownKey);
    sentenceEvidenceKeys.forEach((key) => evidenceKeys.add(key));
  }

  for (const meaningKey of conclusionMeaningPlan) {
    if (sentences.length >= maxSentences) break;
    const candidates = library
      .filter((sentence) => sentence.meaningKey === meaningKey)
      .filter((sentence) => !NARRATIVE_EXCLUDED_CATEGORIES.has(sentence.category))
      .filter((sentence) => categoryMatchesDirection(sentence, direction))
      .filter((sentence) => sentenceMatchesTags(sentence, tagSet))
      .filter((sentence) => !usedCooldownKeys.has(sentence.cooldownKey))
      .filter((sentence) => !usedMeaningKeys.includes(sentence.meaningKey));

    const seedKey = `${buildAnalysisSeedKey(context, { language })}|${meaningKey}|${sentences.length}`;
    const preferredCandidates = candidates.filter((sentence) => {
      const text = replaceAnalysisPlaceholders(sentence.text, context);
      const hydratedSentence = { ...sentence, text };
      return isNarrativeRepeatedTermSafe(sentences, text) && canUseSentenceStarter(sentences, hydratedSentence);
    });
    const selected = pickAnalysisSentenceCandidate(preferredCandidates.length > 0 ? preferredCandidates : candidates, seedKey);
    if (!selected) continue;
    const text = replaceAnalysisPlaceholders(selected.text, context);
    if (!text) continue;
    const sentenceEvidenceKeys = buildAnalysisEvidenceKeys(selected, context);
    sentences.push({
      id: selected.id,
      category: selected.category,
      meaningKey: selected.meaningKey,
      cooldownKey: selected.cooldownKey,
      connectorType: selected.connectorType || "independent",
      tone: selected.tone || "neutral",
      text,
      evidenceKeys: sentenceEvidenceKeys
    });
    usedSentenceIds.push(selected.id);
    usedMeaningKeys.push(selected.meaningKey);
    usedCooldownKeys.add(selected.cooldownKey);
    sentenceEvidenceKeys.forEach((key) => evidenceKeys.add(key));
  }

  return {
    direction,
    tags,
    sentences: sentences.slice(0, maxSentences),
    usedSentenceIds,
    usedMeaningKeys,
    evidenceKeys: [...evidenceKeys]
  };
}

function buildAnalysisParagraph(sentences = []) {
  const safeSentences = Array.isArray(sentences) ? sentences.filter((sentence) => sentence?.text) : [];
  if (safeSentences.length === 0) return "";
  return safeSentences.map((sentence, index) => renderNarrativeSentenceText(sentence, index)).join(" ");
}

function getAnalysisHeadlineCandidatesForContext(direction = "", context = {}) {
  const library = getAnalysisHeadlineLibrary();
  if (direction !== "UPSET_WARNING") return library[direction] || library.BALANCED || [];

  const tone = getAnalysisUpsetWarningTone(context.odds?.favoriteOdds);
  if (tone === "STRONG") {
    return [
      "강한 정배 구간이지만 이변 신호가 겹쳐 주의가 필요한 경기입니다.",
      "정배 쏠림은 강하지만 결과가 흔들릴 여지도 함께 보이는 매치업입니다.",
      "강정배 흐름으로 보이지만 예상보다 결과 변동 폭이 클 수 있습니다."
    ];
  }
  if (tone === "CAUTION") {
    return [
      "정배 쪽으로 기울어 있지만 이변 가능성도 함께 체크할 경기입니다.",
      "기본 흐름은 정배지만 방심하기에는 변수 신호가 남아 있습니다.",
      "정배 우세로 보이더라도 결과가 한쪽으로 쉽게 굳지 않을 수 있습니다."
    ];
  }
  return library[direction] || library.BALANCED || [];
}

function applyUpsetNarrativeTone(sentences = [], context = {}, { language = "ko" } = {}) {
  if (!Array.isArray(sentences) || sentences.length === 0 || language !== "ko") return sentences;
  if (decideAnalysisDirection(context) !== "UPSET_WARNING") return sentences;

  const tone = getAnalysisUpsetWarningTone(context.odds?.favoriteOdds);
  if (!tone) return sentences;

  const overridesByTone = {
    STRONG: {
      INTRO_UPSET_WARNING: [
        "강한 정배 구간이지만 과거 유사 흐름을 보면 이변 가능성을 가볍게 넘기기 어렵습니다.",
        "배당만 보면 정배 쪽이 강하지만, 실제 결과 쪽에서는 흔들릴 만한 신호가 겹쳐 있습니다."
      ],
      CONCLUSION_UPSET: [
        "종합하면 강정배 경기로 보이더라도 이변 가능성을 함께 열어두는 편이 좋습니다.",
        "전체적으로는 정배 우세 경기지만, 이번에는 이변 가능성까지 같이 확인할 필요가 있습니다."
      ]
    },
    CAUTION: {
      INTRO_UPSET_WARNING: [
        "정배 쪽으로 기울어 있는 경기지만 이변 가능성도 함께 체크할 필요가 있습니다.",
        "기본 흐름은 정배에 가깝지만 결과가 예상보다 까다롭게 전개될 여지는 남아 있습니다."
      ],
      CONCLUSION_UPSET: [
        "종합하면 정배 흐름을 우선 보되, 이변 가능성도 같이 경계하는 편이 좋습니다.",
        "전체적으로는 정배 쪽이 앞서지만, 이번 경기는 변수까지 함께 보는 편이 좋습니다."
      ]
    }
  };

  const overrides = overridesByTone[tone];
  if (!overrides) return sentences;

  return sentences.map((sentence, index) => {
    const candidates = overrides[sentence.meaningKey];
    if (!Array.isArray(candidates) || candidates.length === 0) return sentence;
    const text = pickSeededValue(
      candidates,
      `${buildAnalysisSeedKey(context, { language })}|tone|${sentence.meaningKey}|${index}`
    ) || sentence.text;
    return { ...sentence, text };
  });
}

function buildAnalysisNarrativeBlock(context = {}, { language = "ko" } = {}) {
  const direction = decideAnalysisDirection(context);
  const selection = buildAnalysisSentenceSelection(context, { language });
  const resolvedSentences = applyUpsetNarrativeTone(selection.sentences, context, { language });
  const headlineCandidates = getAnalysisHeadlineCandidatesForContext(direction, context);
  const headline = pickSeededValue(headlineCandidates, `${buildAnalysisSeedKey(context, { language })}|headline`) || "";
  return {
    version: ANALYSIS_SENTENCE_LIBRARY.ANALYSIS_SENTENCE_LIBRARY_VERSION || "analysis-sentences-v1",
    direction,
    headline,
    sentences: resolvedSentences.map((sentence) => sentence.text),
    paragraph: buildAnalysisParagraph(resolvedSentences),
    usedSentenceIds: resolvedSentences.map((sentence) => sentence.id),
    usedMeaningKeys: resolvedSentences.map((sentence) => sentence.meaningKey),
    evidenceKeys: selection.evidenceKeys
  };
}

function createDetailAiScoreRows(scores = []) {
  const list = document.createElement("div");
  list.className = "match-detail-ai-score-list";
  scores.forEach((score) => {
    const row = document.createElement("div");
    const label = document.createElement("span");
    label.textContent = score.label;
    const track = document.createElement("i");
    const fill = document.createElement("b");
    fill.style.width = `${score.value ?? 0}%`;
    track.appendChild(fill);
    const value = document.createElement("strong");
    value.textContent = score.value === null ? "-" : String(score.value);
    row.append(label, track, value);
    list.appendChild(row);
  });
  return list;
}

function buildDetailNarrativeViewModel(match = {}, analysis = {}, { language = getUiLanguage(), narrative = null } = {}) {
  if (language !== "ko") return null;
  const resolvedNarrative = narrative || buildAnalysisNarrativeBlock(buildAnalysisContextV1(match, analysis), { language });
  const headline = String(resolvedNarrative?.headline || "").trim();
  const paragraph = String(resolvedNarrative?.paragraph || "").trim();
  if (!paragraph) return null;
  return { headline, paragraph };
}

function createDetailNarrativeSection(match = {}, analysis = {}) {
  const view = buildDetailNarrativeViewModel(match, analysis);
  if (!view) return null;

  const section = document.createElement("section");
  section.className = "match-detail-section";

  const title = document.createElement("strong");
  title.textContent = "AI 종합 해설";

  const headline = document.createElement("p");
  headline.className = "match-detail-note";
  headline.textContent = view.headline;

  const paragraph = document.createElement("p");
  paragraph.className = "match-detail-note";
  paragraph.textContent = view.paragraph;

  section.append(title, headline, paragraph);
  return section;
}

function createDetailAiPanel(match = {}, analysis = {}) {
  const panel = document.createElement("div");
  panel.className = "match-detail-tab-panel";
  panel.dataset.detailTabPanel = "ai";
  panel.setAttribute("role", "tabpanel");
  panel.hidden = true;

  const view = buildDetailAiViewModel(match, analysis);

  const result = document.createElement("section");
  result.className = "match-detail-section match-detail-ai-card";
  const heading = document.createElement("div");
  heading.className = "match-detail-ai-heading";
  const title = document.createElement("span");
  title.textContent = "AI 종합 분석";
  const verdict = document.createElement("strong");
  verdict.textContent = view.canJudge ? view.judgement.judgement : "분석 보류";
  heading.append(title, verdict);

  const badges = document.createElement("div");
  badges.className = "match-detail-badges";
  badges.append(createDetailBadge(`신뢰도 ${view.confidence}`, view.canJudge ? "good" : "warning"));
  if (view.knownMatches > 0) badges.append(createDetailBadge(`유사배당 ${view.knownMatches}경기`));

  const scoreCard = document.createElement("section");
  scoreCard.className = "match-detail-ai-score-card";
  const scoreHead = document.createElement("div");
  const scoreLabel = document.createElement("span");
  scoreLabel.textContent = "AI 종합 점수";
  const scoreValue = document.createElement("strong");
  scoreValue.textContent = view.overallScore === null ? "-" : `${view.overallScore} / 100`;
  scoreHead.append(scoreLabel, scoreValue);
  const scoreNote = document.createElement("small");
  scoreNote.textContent = "두 팀의 최근 기록과 배당 데이터를 합친 경기 전체 점수";
  const teamGrid = document.createElement("div");
  teamGrid.className = "match-detail-ai-team-grid";
  view.teamScores.forEach((team) => {
    const teamCard = document.createElement("section");
    const teamHeading = document.createElement("div");
    const side = document.createElement("span");
    side.textContent = team.side;
    const name = document.createElement("strong");
    name.textContent = team.teamName;
    teamHeading.append(side, name);
    teamCard.append(teamHeading, createDetailAiScoreRows(team.scores));
    teamGrid.appendChild(teamCard);
  });
  const gameHeading = document.createElement("strong");
  gameHeading.className = "match-detail-ai-game-heading";
  gameHeading.textContent = "경기 공통 지표";
  scoreCard.append(scoreHead, scoreNote, teamGrid, gameHeading, createDetailAiScoreRows(view.gameScores));

  const grounds = document.createElement("div");
  grounds.className = "match-detail-ai-grounds";
  const groundsTitle = document.createElement("strong");
  groundsTitle.textContent = "데이터 근거";
  const signalList = document.createElement("ul");
  (view.evidence.length > 0 ? view.evidence : [{ label: "데이터 없음", value: "비교 가능한 전적이 없습니다." }]).forEach((evidence) => {
    const item = document.createElement("li");
    const label = document.createElement("strong");
    label.textContent = evidence.label;
    const value = document.createElement("span");
    value.textContent = evidence.value;
    item.append(label, value);
    signalList.appendChild(item);
  });
  grounds.append(groundsTitle, signalList);

  const conclusion = document.createElement("section");
  conclusion.className = "match-detail-ai-conclusion";
  const conclusionTitle = document.createElement("strong");
  conclusionTitle.textContent = "종합 결론";
  conclusion.appendChild(conclusionTitle);
  view.conclusions.forEach((text) => {
    const paragraph = document.createElement("p");
    paragraph.textContent = text;
    conclusion.appendChild(paragraph);
  });

  const narrativeSection = createDetailNarrativeSection(match, analysis);
  result.append(heading, badges, scoreCard, grounds, conclusion);
  if (narrativeSection) result.appendChild(narrativeSection);
  panel.appendChild(result);
  return panel;
}

function activateMatchDetailTab(shell, tabName) {
  shell.querySelectorAll("[data-detail-tab]").forEach((button) => {
    const active = button.dataset.detailTab === tabName;
    button.classList.toggle("active", active);
    button.setAttribute("aria-selected", String(active));
  });
  shell.querySelectorAll("[data-detail-tab-panel]").forEach((panel) => {
    const active = panel.dataset.detailTabPanel === tabName;
    panel.hidden = !active;
    panel.classList.toggle("active", active);
  });
}

function getMatchDetailAnalysisCached(match = {}, sourceMatches = []) {
  const cacheKey = `${getMatchIdentity(match)}|${formatOdds(match.homeOdds)}|${formatOdds(match.drawOdds)}|${formatOdds(match.awayOdds)}|${sourceMatches.length}`;
  if (!matchDetailAnalysisCache.has(cacheKey)) {
    matchDetailAnalysisCache.set(cacheKey, buildMatchDetailAnalysis(match, sourceMatches));
  }
  return matchDetailAnalysisCache.get(cacheKey);
}

function renderMatchDetailScreen(match = {}, sourceMatches = getSearchableMatches(), activeTab = "summary") {
  const shell = document.getElementById("match-detail-shell");
  if (!shell) return;
  const analysis = getMatchDetailAnalysisCached(match, sourceMatches);
  const hasOdds = hasCompleteOdds(match);

  const hero = document.createElement("header");
  hero.className = "match-detail-hero match-detail-screen-header";
  const top = document.createElement("div");
  top.className = "match-detail-screen-top";
  const back = document.createElement("button");
  back.type = "button";
  back.className = "match-detail-back-button";
  back.setAttribute("aria-label", "경기 목록으로 돌아가기");
  back.textContent = "‹";
  back.addEventListener("click", closeMatchDetail);
  const league = document.createElement("span");
  league.textContent = formatLeagueName(match.league);
  const status = document.createElement("span");
  status.className = "match-detail-status-pill";
  status.textContent = getMatchStatusLabel(match);
  const share = document.createElement("button");
  share.type = "button";
  share.className = "match-detail-share-button";
  share.textContent = "공유";
  share.setAttribute("aria-label", "이 경기 공유하기");
  share.addEventListener("click", () => shareMatchDetail(match, share));
  top.append(back, league, status, share);

  const fixtureContext = getOfficialFixtureContext(match);
  const homeLogoUrl = getTeamLogoUrl(getFixtureTeamAvailability(fixtureContext, match.homeTeam)?.teamId);
  const awayLogoUrl = getTeamLogoUrl(getFixtureTeamAvailability(fixtureContext, match.awayTeam)?.teamId);

  const title = document.createElement("strong");
  title.className = "match-detail-title";
  if (homeLogoUrl || awayLogoUrl) {
    const homeLogo = document.createElement("img");
    homeLogo.className = "match-detail-team-logo";
    homeLogo.alt = "";
    homeLogo.loading = "lazy";
    homeLogo.src = homeLogoUrl;
    homeLogo.hidden = !homeLogoUrl;
    const homeName = document.createElement("span");
    homeName.textContent = formatTeamName(match.homeTeam);
    const vs = document.createElement("span");
    vs.textContent = "vs";
    const awayLogo = document.createElement("img");
    awayLogo.className = "match-detail-team-logo";
    awayLogo.alt = "";
    awayLogo.loading = "lazy";
    awayLogo.src = awayLogoUrl;
    awayLogo.hidden = !awayLogoUrl;
    const awayName = document.createElement("span");
    awayName.textContent = formatTeamName(match.awayTeam);
    title.append(homeLogo, homeName, vs, awayLogo, awayName);
  } else {
    title.textContent = `${formatTeamName(match.homeTeam)} vs ${formatTeamName(match.awayTeam)}`;
  }
  const meta = document.createElement("small");
  meta.textContent = [match.date || "", match.startTime || "", getMatchStatusLabel(match)].filter(Boolean).join(" · ");
  const odds = document.createElement("p");
  odds.textContent = hasOdds
    ? `홈 ${formatOdds(match.homeOdds)} · 무 ${formatOdds(match.drawOdds)} · 원정 ${formatOdds(match.awayOdds)}`
    : "배당 준비 중";
  const baseRateNote = createOddsBaseRateNote(match);
  const resultText = formatMatchResultText(match);
  if (resultText) {
    const result = document.createElement("strong");
    result.className = "match-detail-final-result";
    result.textContent = resultText.replace(/^경기결과:\s*/, "최종 ");
    hero.append(...[top, title, meta, odds, baseRateNote, result].filter(Boolean));
  } else {
    hero.append(...[top, title, meta, odds, baseRateNote].filter(Boolean));
  }

  const tabs = document.createElement("nav");
  tabs.className = "match-detail-tabs match-detail-primary-tabs";
  tabs.setAttribute("role", "tablist");
  [
    ["summary", "경기 요약"],
    ["odds", "동일 배당"],
    ["baserate", "기저율"],
    ["strength", "팀 정보"],
    ["venue", "홈/원정 통계"],
    ["ai", "AI 분석"]
  ].forEach(([value, label]) => {
    const button = document.createElement("button");
    button.type = "button";
    button.dataset.detailTab = value;
    button.setAttribute("role", "tab");
    button.setAttribute("aria-selected", String(value === "summary"));
    button.className = value === "summary" ? "active" : "";
    button.textContent = label;
    button.addEventListener("click", () => activateMatchDetailTab(shell, value));
    tabs.appendChild(button);
  });

  shell.replaceChildren(
    hero,
    tabs,
    createDetailOverviewPanel(match, analysis),
    createDetailOddsPanel(match, analysis),
    createDetailBaseRatePanel(match),
    createDetailStrengthPanel(match, analysis),
    createDetailVenueStatsPanel(match, analysis),
    createDetailAiPanel(match, analysis)
  );
  activateMatchDetailTab(shell, activeTab);
}

// 공유 링크(?m=)만 지우고 나머지 쿼리(?source=twa 등)는 그대로 둔다.
function stripMatchShareParam(search = "") {
  const params = new URLSearchParams(search);
  params.delete("m");
  const query = params.toString();
  return query ? `?${query}` : "";
}

function closeMatchDetail() {
  if (typeof window === "undefined") return;
  if (window.history.state?.matchDetail) {
    window.history.back();
    return;
  }
  const targetHash = matchDetailReturnState?.hash || "#today";
  window.history.replaceState(null, "", `${window.location.pathname}${stripMatchShareParam(window.location.search)}${targetHash}`);
  showActiveView(targetHash);
}

function getMatchShareUrl(match = {}) {
  if (typeof window === "undefined") return "";
  const params = new URLSearchParams(stripMatchShareParam(window.location.search));
  params.set("m", getMatchIdentity(match));
  return `${window.location.origin}${window.location.pathname}?${params.toString()}#detail`;
}

async function shareMatchDetail(match = {}, button = null) {
  const url = getMatchShareUrl(match);
  if (!url) return;
  const title = `${formatTeamName(match.homeTeam)} vs ${formatTeamName(match.awayTeam)} · 오즈아카이브`;

  if (typeof navigator !== "undefined" && navigator.share) {
    try {
      await navigator.share({ title, url });
      return;
    } catch (_error) {
      // 공유 시트를 취소한 경우 등은 조용히 클립보드 복사로 넘어간다.
    }
  }

  try {
    await navigator.clipboard.writeText(url);
    if (button) {
      const original = button.textContent;
      button.textContent = "복사됨";
      window.setTimeout(() => { button.textContent = original; }, 1500);
    }
  } catch (_error) {
    // 클립보드 접근이 막힌 환경에서는 조용히 무시한다.
  }
}

async function openMatchDetail(match = {}) {
  if (!canOpenMatchDetail()) return;
  if (typeof window !== "undefined") {
    if (getActiveViewId(window.location.hash) !== "detail") {
      matchDetailReturnState = {
        hash: window.location.hash || "#today",
        scrollY: window.scrollY,
        fixtureDate: selectedFixtureDate
      };
      const params = new URLSearchParams(stripMatchShareParam(window.location.search));
      params.set("m", getMatchIdentity(match));
      window.history.pushState({ matchDetail: true }, "", `${window.location.pathname}?${params.toString()}#detail`);
    }
  }
  showActiveView("#detail");
  const shell = document.getElementById("match-detail-shell");
  const initialMatches = getStorageTodayMatches();
  renderMatchDetailScreen(match, initialMatches);
  const screen = document.getElementById("detail");
  if (screen) screen.scrollTop = 0;
  window.setTimeout(async () => {
    try {
      await ensureFootballDataPackLoaded();
    } catch (_error) {
      // The selected match can still use locally available data.
    }
    if (getActiveViewId(window.location.hash) !== "detail") return;
    const preparedMatches = getSearchableMatches();
    if (preparedMatches.length !== initialMatches.length) {
      const activeTab = shell?.querySelector("[data-detail-tab].active")?.dataset.detailTab || "summary";
      renderMatchDetailScreen(match, preparedMatches, activeTab);
    }
  }, 150);
}

function getLeagueBreakdownStats(matches = []) {
  const groups = new Map();
  for (const match of Array.isArray(matches) ? matches : []) {
    const league = String(match.league || "UNKNOWN").trim() || "UNKNOWN";
    if (!groups.has(league)) groups.set(league, []);
    groups.get(league).push(match);
  }

  return Array.from(groups.entries())
    .map(([league, leagueMatches]) => {
      const breakdown = calculateResultBreakdown(leagueMatches);
      return {
        league,
        label: formatLeagueName(league),
        breakdown
      };
    })
    .sort((left, right) => (
      Number(right.breakdown.knownMatches || 0) - Number(left.breakdown.knownMatches || 0)
      || String(left.label).localeCompare(String(right.label))
    ));
}

function createLeagueBreakdownCard(stat) {
  const card = document.createElement("article");
  card.className = "league-breakdown-card";

  const header = document.createElement("div");
  const title = document.createElement("strong");
  title.textContent = stat.label;
  header.append(title);

  const count = document.createElement("small");
  count.textContent = `표본 ${stat.breakdown.knownMatches}/${stat.breakdown.totalMatches}`;

  const rates = document.createElement("div");
  rates.className = "league-breakdown-rates";
  [
    ["H", "홈", stat.breakdown.homeRate],
    ["D", "무", stat.breakdown.drawRate],
    ["A", "원정", stat.breakdown.awayRate]
  ].forEach(([key, label, value]) => {
    const item = document.createElement("span");
    item.className = getOutcomeToneClass(key);
    item.textContent = `${label} ${value || "0%"}`;
    rates.appendChild(item);
  });

  card.append(header, count, rates);
  return card;
}

function renderResultBreakdownExtras(matches = [], breakdown = {}) {
  const analysis = document.getElementById("analysis");
  const memo = document.getElementById("breakdown-memo");
  if (!analysis) return;

  analysis.querySelectorAll(".compact-breakdown-strip, .recent-result-row, .league-breakdown-section").forEach((node) => node.remove());

  const strip = document.createElement("div");
  strip.className = "compact-breakdown-strip";
  [
    ["H", "홈승", breakdown.homeWins, breakdown.homeRate],
    ["D", "무", breakdown.draws, breakdown.drawRate],
    ["A", "원정", breakdown.awayWins, breakdown.awayRate]
  ].forEach(([key, label, count, rate]) => {
    const item = document.createElement("div");
    item.className = getOutcomeToneClass(key);
    const labelElement = document.createElement("span");
    const valueElement = document.createElement("strong");
    labelElement.textContent = label;
    valueElement.textContent = `${count || 0} / ${rate || "0%"}`;
    item.append(labelElement, valueElement);
    strip.appendChild(item);
  });

  const recent = document.createElement("div");
  recent.className = "recent-result-row";
  const recentLabel = document.createElement("span");
  recentLabel.textContent = "최근 10경기";
  const recentChips = document.createElement("div");
  recentChips.className = "recent-result-chips";

  const recentMatches = getRecentKnownResults(matches);
  if (recentMatches.length === 0) {
    const empty = document.createElement("small");
    empty.textContent = "결과 표본 없음";
    recentChips.appendChild(empty);
  } else {
    recentMatches.forEach((match) => {
      const chip = document.createElement("button");
      chip.type = "button";
      chip.className = `result-chip ${getResultChipClass(match.result)}`;
      chip.textContent = formatResultChipLabel(match.result);
      chip.title = `${formatTeamName(match.homeTeam)} vs ${formatTeamName(match.awayTeam)} · ${formatMatchResultText(match)}`;
      chip.addEventListener("click", () => openMatchDetail(match));
      recentChips.appendChild(chip);
    });
  }
  recent.append(recentLabel, recentChips);

  const leagueSection = document.createElement("section");
  leagueSection.className = "league-breakdown-section";
  const leagueTitle = document.createElement("strong");
  leagueTitle.textContent = "리그별 통계";
  const leagueList = document.createElement("div");
  leagueList.className = "league-breakdown-list";
  const leagueStats = getLeagueBreakdownStats(matches);
  if (leagueStats.length === 0) {
    const empty = document.createElement("small");
    empty.textContent = "리그별 표본 없음";
    leagueList.appendChild(empty);
  } else {
    leagueList.append(...leagueStats.map(createLeagueBreakdownCard));
  }
  leagueSection.append(leagueTitle, leagueList);

  if (memo) {
    analysis.insertBefore(strip, memo);
    analysis.insertBefore(leagueSection, memo);
    analysis.insertBefore(recent, memo);
  } else {
    analysis.append(strip, leagueSection, recent);
  }
}

function renderSearchResultCards(matches, message = "") {
  const list = document.getElementById("search-result-cards");
  if (!list) return;

  if (!Array.isArray(matches) || matches.length === 0) {
    const empty = document.createElement("div");
    empty.className = "empty-state compact-empty";
    empty.textContent = message || "조건에 맞는 경기가 없습니다.";
    list.replaceChildren(empty);
    return;
  }

  list.replaceChildren(...matches.slice(0, visibleOddsSearchCount).map(createSearchResultCard));
}

function setSearchResultsTitle(title) {
  const element = document.getElementById("search-results-title");
  if (element) element.textContent = title;
}

function clearHiddenOddsResultTable(message = "카드형 결과로 표시됩니다.") {
  const body = document.getElementById("odds-search-results-body");
  if (!body) return;

  const row = document.createElement("tr");
  const cell = document.createElement("td");
  cell.colSpan = SEARCH_RESULT_COLUMN_COUNT;
  cell.textContent = message;
  row.appendChild(cell);
  body.replaceChildren(row);
}

function moveSearchResultsTo(anchorId) {
  const anchor = document.getElementById(anchorId);
  const results = document.getElementById("odds-results-section");
  const analysis = document.getElementById("analysis");
  if (!anchor || !results) return;

  if (analysis) anchor.appendChild(analysis);
  anchor.appendChild(results);
}

function renderOddsSearchResults(matches, message = "", options = {}) {
  const body = document.getElementById("odds-search-results-body");
  const count = document.getElementById("odds-search-count");
  const showMoreButton = document.getElementById("show-more-odds-results");
  if (!body) return;

  setOddsResultVisibility(options.show !== false);
  currentOddsSearchResults = Array.isArray(matches) ? matches : [];
  visibleOddsSearchCount = Math.max(RESULT_PAGE_SIZE, Math.min(visibleOddsSearchCount, currentOddsSearchResults.length || RESULT_PAGE_SIZE));

  if (count) count.textContent = String(matches.length);
  renderSearchResultCards(matches, message || "조건에 맞는 유사 배당 경기가 없습니다.");

  if (matches.length === 0) {
    if (showMoreButton) showMoreButton.hidden = true;
    const row = document.createElement("tr");
    const cell = document.createElement("td");
    cell.colSpan = SEARCH_RESULT_COLUMN_COUNT;
    cell.textContent = message || "조건에 맞는 유사 배당 경기가 없습니다.";
    row.appendChild(cell);
    body.replaceChildren(row);
    return;
  }

  clearHiddenOddsResultTable();
  if (showMoreButton) {
    showMoreButton.hidden = visibleOddsSearchCount >= matches.length;
    showMoreButton.textContent = `더보기 (${Math.min(RESULT_PAGE_SIZE, matches.length - visibleOddsSearchCount)}개)`;
  }
}

function renderTeamMatchResults(matches, message = "", options = {}) {
  const body = document.getElementById("team-match-results-body");
  const count = document.getElementById("team-match-count");
  const showMoreButton = document.getElementById("show-more-team-matches");
  if (!body) return;

  setTeamResultVisibility(options.show !== false);
  currentTeamMatchResults = Array.isArray(matches) ? matches : [];
  visibleTeamMatchCount = Math.max(RESULT_PAGE_SIZE, Math.min(visibleTeamMatchCount, currentTeamMatchResults.length || RESULT_PAGE_SIZE));

  if (count) count.textContent = String(matches.length);

  if (matches.length === 0) {
    if (showMoreButton) showMoreButton.hidden = true;
    const row = document.createElement("tr");
    const cell = document.createElement("td");
    cell.colSpan = SEARCH_RESULT_COLUMN_COUNT;
    cell.textContent = message || "조건에 맞는 팀별 경기 기록이 없습니다.";
    row.appendChild(cell);
    body.replaceChildren(row);
    return;
  }

  const visibleMatches = matches.slice(0, visibleTeamMatchCount);
  const renderedRows = visibleMatches.map((match) => {
    const row = document.createElement("tr");
    const values = [
      match.date,
      formatLeagueName(match.league),
      formatTeamName(match.homeTeam),
      formatTeamName(match.awayTeam),
      formatOdds(match.homeOdds),
      formatOdds(match.drawOdds),
      formatOdds(match.awayOdds),
      formatResultLabel(match.result),
      match.score
    ];

    for (const value of values) {
      const cell = document.createElement("td");
      cell.textContent = value;
      row.appendChild(cell);
    }

    const actionCell = document.createElement("td");
    const searchButton = document.createElement("button");
    searchButton.type = "button";
    searchButton.className = "inline-action";
    searchButton.textContent = "이 배당으로 검색";
    searchButton.addEventListener("click", () => searchWithMatchOdds(match));
    actionCell.appendChild(searchButton);
    row.appendChild(actionCell);

    return row;
  });

  body.replaceChildren(...renderedRows);
  if (showMoreButton) {
    showMoreButton.hidden = visibleTeamMatchCount >= matches.length;
    showMoreButton.textContent = `더보기 (${Math.min(RESULT_PAGE_SIZE, matches.length - visibleTeamMatchCount)}개)`;
  }
}

function renderTeamMatchBreakdown(matches) {
  const breakdown = calculateResultBreakdown(matches);
  const values = {
    "team-breakdown-total": String(breakdown.totalMatches),
    "team-breakdown-known": String(breakdown.knownMatches),
    "team-breakdown-unknown": String(breakdown.unknownMatches),
    "team-breakdown-home": `${breakdown.homeWins} / ${breakdown.homeRate}`,
    "team-breakdown-draw": `${breakdown.draws} / ${breakdown.drawRate}`,
    "team-breakdown-away": `${breakdown.awayWins} / ${breakdown.awayRate}`
  };

  for (const [id, value] of Object.entries(values)) {
    const element = document.getElementById(id);
    if (element) element.textContent = value;
  }
}

function renderMatchDataBreakdown(matches) {
  const breakdown = calculateResultBreakdown(matches);
  const values = {
    "match-breakdown-total": String(breakdown.totalMatches),
    "match-breakdown-known": String(breakdown.knownMatches),
    "match-breakdown-unknown": String(breakdown.unknownMatches),
    "match-breakdown-home": `${breakdown.homeWins} / ${breakdown.homeRate}`,
    "match-breakdown-draw": `${breakdown.draws} / ${breakdown.drawRate}`,
    "match-breakdown-away": `${breakdown.awayWins} / ${breakdown.awayRate}`
  };

  for (const [id, value] of Object.entries(values)) {
    const element = document.getElementById(id);
    if (element) element.textContent = value;
  }

  const memo = document.getElementById("match-breakdown-memo");
  if (memo) memo.textContent = getResultBreakdownMemo(breakdown);
}

function resetOddsResultLimit() {
  visibleOddsSearchCount = RESULT_PAGE_SIZE;
}

function resetTeamMatchResultLimit() {
  visibleTeamMatchCount = RESULT_PAGE_SIZE;
}

function showMoreOddsResults() {
  visibleOddsSearchCount += RESULT_PAGE_SIZE;
  renderOddsSearchResults(currentOddsSearchResults, "조건에 맞는 유사 배당 경기가 없습니다.");
}

function showMoreTeamMatches() {
  visibleTeamMatchCount += RESULT_PAGE_SIZE;
  renderTeamMatchResults(currentTeamMatchResults, "조건에 맞는 팀별 경기 기록이 없습니다.");
}

function renderMatchJudgementSummary(element, judgement) {
  if (!element) return;
  element.replaceChildren();
  const top = document.createElement("div");
  top.className = "judgement-top";

  const probabilityMain = document.createElement("strong");
  probabilityMain.className = "judgement-main";
  probabilityMain.textContent = judgement.upsetProbability === null
    ? "전적 없음"
    : `판정: ${judgement.judgement}`;

  const probabilityRisk = document.createElement("span");
  probabilityRisk.className = "judgement-risk";
  probabilityRisk.textContent = `배당 구간: ${judgement.favoriteBand || "확인 중"}`;
  top.append(probabilityMain, probabilityRisk);

  if (judgement.upsetProbability !== null) {
    const detail = document.createElement("small");
    detail.className = "judgement-detail";
    detail.textContent = `정배 ${Math.round(judgement.favoriteHitRate || 0)}%`;
    top.appendChild(detail);
  }

  const probabilitySignals = document.createElement("div");
  probabilitySignals.className = "judgement-signals";
  const probabilitySignalValues = (judgement.signals || [])
    .filter((signal) => !["표본 부족", "데이터 부족", "역배 신호", "정배 적중 낮음"].includes(signal))
    .slice(0, 3);
  const visibleSignals = probabilitySignalValues.length > 0 ? probabilitySignalValues : ["정배 우세"];
  visibleSignals.forEach((signal) => {
    const badge = document.createElement("span");
    badge.className = "judgement-signal";
    badge.textContent = signal;
    probabilitySignals.appendChild(badge);
  });

  element.append(top, probabilitySignals);
  element.className = `odds-verdict judgement-${normalizeTeamSearchText(judgement.judgement).replace(/[^a-z0-9가-힣]/g, "")}`;
}

function renderResultBreakdown(matches, criteria = getOddsSearchCriteria()) {
  const breakdown = calculateResultBreakdown(matches);
  const recentBreakdown = calculateResultBreakdown(getRecentSeasonMatches(matches));
  const judgement = calculateMatchJudgement(breakdown, criteria);
  const values = {
    "breakdown-total": String(breakdown.totalMatches),
    "breakdown-known": String(breakdown.knownMatches),
    "breakdown-unknown": String(breakdown.unknownMatches),
    "breakdown-home": `${breakdown.homeWins} / ${breakdown.homeRate}`,
    "breakdown-draw": `${breakdown.draws} / ${breakdown.drawRate}`,
    "breakdown-away": `${breakdown.awayWins} / ${breakdown.awayRate}`
  };

  for (const [id, value] of Object.entries(values)) {
    const element = document.getElementById(id);
    if (element) element.textContent = value;
  }

  const memo = document.getElementById("breakdown-memo");
  if (memo) memo.textContent = getResultBreakdownMemo(breakdown);
  renderResultBreakdownExtras(matches, breakdown);

  const sourceSummary = document.getElementById("odds-source-summary");
  if (sourceSummary) {
    sourceSummary.textContent = "";
    sourceSummary.hidden = true;
  }

  const verdict = document.getElementById("odds-verdict");
  renderMatchJudgementSummary(verdict, judgement);
}

function createTodaySummaryItem(label, value, className = "") {
  const item = document.createElement("div");
  if (className) item.className = className;
  const labelElement = document.createElement("span");
  const valueElement = document.createElement("strong");
  labelElement.textContent = label;
  valueElement.textContent = value;
  item.append(labelElement, valueElement);
  return item;
}

function createTodaySampleItem(match) {
  const item = document.createElement("article");
  const meta = document.createElement("span");
  const title = document.createElement("strong");
  const detail = document.createElement("small");

  meta.textContent = `${match.date} · ${formatLeagueName(match.league)}`;
  title.textContent = `${formatTeamName(match.homeTeam)} vs ${formatTeamName(match.awayTeam)}`;
  detail.textContent = `${formatOdds(match.homeOdds)} / ${formatOdds(match.drawOdds)} / ${formatOdds(match.awayOdds)} · ${formatMatchResultText(match)}`;
  item.append(meta, title, detail);
  return item;
}

function getTodayMatchAnalysis(match, matches = getSearchableMatches()) {
  if (!hasCompleteOdds(match)) {
    return { error: "배당 대기중", matches: [], breakdown: calculateResultBreakdown([]), label: `${match.homeTeam} vs ${match.awayTeam}` };
  }

  const cacheKey = `${getMatchIdentity(match)}|${formatOdds(match.homeOdds)}|${formatOdds(match.drawOdds)}|${formatOdds(match.awayOdds)}|${match.tolerance || "0.05"}|${Array.isArray(matches) ? matches.length : 0}`;
  if (todayMatchAnalysisCache.has(cacheKey)) return todayMatchAnalysisCache.get(cacheKey);

  const analysis = analyzeLiveMatchOdds(matches, {
    homeTeam: match.homeTeam,
    awayTeam: match.awayTeam,
    league: match.league,
    homeOdds: match.homeOdds,
    drawOdds: match.drawOdds,
    awayOdds: match.awayOdds,
    tolerance: match.tolerance
  });
  todayMatchAnalysisCache.set(cacheKey, analysis);
  return analysis;
}

function hasCompleteOdds(match = {}) {
  return ["homeOdds", "drawOdds", "awayOdds"].every((field) => parseSearchNumber(match[field]) !== null);
}

function isMajorTodayMatch(match = {}) {
  const leagueName = String(match.league || "").trim();
  if (!leagueName || hasUnexpectedLeagueCountry(leagueName)) return false;
  const leagueKey = getLeagueKeyFromText(leagueName);
  return HOME_TODAY_LEAGUE_PRIORITY.includes(leagueKey);
}

function getMajorTodayMatches(matches = []) {
  return deduplicateTodayMatches(matches)
    .filter((match) => isMajorTodayMatch(match) && hasCompleteOdds(match));
}

// 리그명은 종류가 한정적이라 우선순위를 리그 문자열 단위로 재사용한다.
const MATCH_LEAGUE_PRIORITY_CACHE = new Map();

function getMatchLeaguePriority(match = {}) {
  const leagueText = String(match.league || "");
  const cached = MATCH_LEAGUE_PRIORITY_CACHE.get(leagueText);
  if (cached !== undefined) return cached;

  const leagueKey = getLeagueKeyFromText(match.league);
  const index = HOME_TODAY_LEAGUE_PRIORITY.indexOf(leagueKey);
  const priority = index === -1 ? HOME_TODAY_LEAGUE_PRIORITY.length : index;
  MATCH_LEAGUE_PRIORITY_CACHE.set(leagueText, priority);
  return priority;
}

function getMatchStartTimestamp(match = {}) {
  const dateText = String(match.date || getTodayKey()).slice(0, 10);
  const timeText = String(match.startTime || match.kickoff || match.time || "").trim();
  const isoText = timeText
    ? `${dateText}T${timeText.length === 5 ? `${timeText}:00` : timeText}+09:00`
    : `${dateText}T23:59:59+09:00`;
  const timestamp = Date.parse(isoText);
  return Number.isFinite(timestamp) ? timestamp : Number.MAX_SAFE_INTEGER;
}

// 힌트 목록은 상수라 정규화 결과를 한 번만 만든다.
let strongTeamHintKeys = null;

function getStrongTeamHintKeys() {
  if (!strongTeamHintKeys) strongTeamHintKeys = HOME_TODAY_STRONG_TEAM_HINTS.map(normalizeTeamSearchText);
  return strongTeamHintKeys;
}

function hasStrongTeamHint(match = {}) {
  const text = normalizeTeamSearchText([
    match.homeTeam,
    match.awayTeam,
    formatTeamName(match.homeTeam),
    formatTeamName(match.awayTeam)
  ].filter(Boolean).join(" "));
  return getStrongTeamHintKeys().some((hint) => text.includes(hint));
}

function compareHomeTodayMatches(left, right) {
  const oddsDifference = Number(hasCompleteOdds(right)) - Number(hasCompleteOdds(left));
  if (oddsDifference !== 0) return oddsDifference;

  const leagueDifference = getMatchLeaguePriority(left) - getMatchLeaguePriority(right);
  if (leagueDifference !== 0) return leagueDifference;

  const timeDifference = getMatchStartTimestamp(left) - getMatchStartTimestamp(right);
  if (timeDifference !== 0) return timeDifference;

  return Number(hasStrongTeamHint(right)) - Number(hasStrongTeamHint(left));
}

function sortHomeTodayMatches(matches = []) {
  return [...matches].sort(compareHomeTodayMatches);
}

function getTodayUserInsight(match = {}, analysis = null) {
  if (!hasCompleteOdds(match)) {
    return {
      text: "배당 준비 중",
      tone: "pending",
      sampleSize: 0,
      upsetProbability: null,
      score: 0
    };
  }

  const breakdown = analysis?.breakdown || getTodayMatchAnalysis(match, getSearchableMatches()).breakdown || calculateResultBreakdown([]);
  const judgement = calculateMatchJudgement(breakdown, {
    homeOdds: match.homeOdds,
    drawOdds: match.drawOdds,
    awayOdds: match.awayOdds,
    league: match.league,
    homeTeam: match.homeTeam,
    awayTeam: match.awayTeam,
    tolerance: match.tolerance || "0.05"
  });
  const knownMatches = Number(breakdown.knownMatches || 0);
  const totalMatches = Number(breakdown.totalMatches || 0);

  if (knownMatches <= 0) {
    return {
      text: "유사배당 전적 없음",
      tone: "low",
      sampleSize: knownMatches,
      upsetProbability: null,
      score: 100
    };
  }

  const confidence = getInlineOddsConfidence(breakdown);
  const text = knownMatches < 15
    ? `신뢰도 낮음 · 유사배당 ${knownMatches}경기`
    : `홈 ${breakdown.homeRate || "0%"} · 무 ${breakdown.drawRate || "0%"} · 원정 ${breakdown.awayRate || "0%"} · 표본 ${knownMatches}`;
  const sampleScore = Math.min(knownMatches, 80) * 4;
  const clarityScore = Math.max(
    parseRateValue(breakdown.homeRate),
    parseRateValue(breakdown.drawRate),
    parseRateValue(breakdown.awayRate)
  );
  const confidenceScore = confidence.className === "confidence-high" ? 80 : confidence.className === "confidence-medium" ? 40 : 0;

  return {
    text,
    tone: confidence.className.replace("confidence-", ""),
    sampleSize: knownMatches,
    upsetProbability: judgement.upsetProbability,
    score: 500 + sampleScore + clarityScore + confidenceScore
  };
}

// 이변 후보로 인정하려면 최소 이 정도 과거 표본이 있어야 신뢰할 수 있다고 본다.
const UPSET_CANDIDATE_MIN_SAMPLE = 15;

function assessTodayUpsetCandidate(match = {}, breakdown = {}, contextProfile = null) {
  const criteria = {
    homeOdds: match.homeOdds,
    drawOdds: match.drawOdds,
    awayOdds: match.awayOdds,
    league: match.league,
    homeTeam: match.homeTeam,
    awayTeam: match.awayTeam,
    tolerance: match.tolerance || "0.05",
    contextAdjustment: Number(contextProfile?.adjustment || 0),
    contextSignals: contextProfile?.signals || [],
    contextConfidence: contextProfile?.confidence || ""
  };
  const judgement = calculateMatchJudgement(breakdown, criteria);
  const knownMatches = Number(breakdown.knownMatches || 0);
  const favorite = judgement.favorite;
  const favoriteOdds = Number(judgement.favoriteOdds || favorite?.odds || 0);
  const outcomes = getJudgementOutcomes(breakdown, criteria);
  const inverseTotal = outcomes.reduce((sum, outcome) => (
    Number(outcome.odds) > 1 ? sum + (1 / Number(outcome.odds)) : sum
  ), 0);
  const marketRates = Object.fromEntries(outcomes.map((outcome) => [
    outcome.key,
    inverseTotal > 0 && Number(outcome.odds) > 1 ? ((1 / Number(outcome.odds)) / inverseTotal) * 100 : 0
  ]));
  const historyRates = Object.fromEntries(outcomes.map((outcome) => [
    outcome.key,
    getRatePercent(outcome.count, knownMatches)
  ]));
  const marketFavoriteRate = Number(marketRates[favorite?.key] || 0);
  const favoriteFailureLift = (100 - Number(judgement.favoriteHitRate || 0)) - (100 - marketFavoriteRate);
  const directions = outcomes
    .filter((outcome) => outcome.key !== favorite?.key)
    .map((outcome) => ({
      ...outcome,
      historyRate: Number(historyRates[outcome.key] || 0),
      marketRate: Number(marketRates[outcome.key] || 0),
      excess: Number(historyRates[outcome.key] || 0) - Number(marketRates[outcome.key] || 0)
    }))
    .sort((left, right) => right.excess - left.excess);
  const strongestDirection = directions[0] || null;
  const directionExcess = Number(strongestDirection?.excess || 0);
  const drawDirection = directions.find((direction) => direction.key === "D") || null;
  const winDirection = directions.find((direction) => direction.key !== "D") || null;
  const labelDirection = drawDirection && (!winDirection || drawDirection.historyRate >= winDirection.historyRate)
    ? drawDirection
    : winDirection || strongestDirection;
  const contextAdjustment = Number(contextProfile?.adjustment || 0);
  const scheduleSignals = (contextProfile?.signals || []).filter((signal) => (
    ["정배 일정 부담", "정배 연속 원정", "최근 흐름 역전", "득실점 흐름 역전"].includes(signal)
  ));
  const evidence = [
    favoriteFailureLift >= 4 ? "배당 기준 초과 위험" : "",
    directionExcess >= 3 ? "무승부·역배 초과 발생" : "",
    contextAdjustment >= 5 ? "팀·경기 흐름 위험" : "",
    scheduleSignals.length > 0 ? "최근 일정·흐름 위험" : ""
  ].filter(Boolean);
  const isMajorBand = favoriteOdds >= 1.2 && favoriteOdds <= 1.65;
  const isUnstableBand = favoriteOdds > 1.65 && favoriteOdds <= 2;
  const majorCandidate = isMajorBand
    && knownMatches >= UPSET_CANDIDATE_MIN_SAMPLE
    && favoriteFailureLift >= 4
    && evidence.length >= 2;
  const unstableCandidate = isUnstableBand
    && knownMatches >= UPSET_CANDIDATE_MIN_SAMPLE
    && favoriteFailureLift >= 6
    && (evidence.length >= 3 || (favoriteFailureLift >= 12 && directionExcess >= 6));
  const isTopCandidate = majorCandidate || unstableCandidate;
  let topLabel = "";
  if (majorCandidate && favoriteOdds <= 1.35 && favoriteFailureLift >= 10) {
    topLabel = "대형 이변 후보";
  } else if (unstableCandidate) {
    topLabel = "정배 불안";
  } else if (majorCandidate && labelDirection?.key === "D") {
    topLabel = "무승부 주의";
  } else if (majorCandidate && labelDirection?.key === "H") {
    topLabel = "홈 역배 주의";
  } else if (majorCandidate && labelDirection?.key === "A") {
    topLabel = "원정 역배 주의";
  } else if (majorCandidate) {
    topLabel = "이변 후보";
  }
  const topScore = Math.max(0,
    (favoriteFailureLift * 1.3)
    + (Math.max(0, directionExcess) * 0.7)
    + (contextAdjustment * 0.5)
    + Math.min(5, knownMatches / 20)
  );

  return {
    judgement,
    topLabel,
    topScore,
    isTopCandidate,
    candidateBand: isMajorBand ? "대형 이변 구간" : isUnstableBand ? "정배 불안 구간" : "제외 구간",
    favoriteFailureLift,
    marketFavoriteRate,
    directionExcess,
    strongestDirection,
    evidence,
    scheduleSignals,
    knownMatches
  };
}

// "오늘의 강한 신호": 이변 후보(정배가 위험하다는 쪽)의 반대 방향 — 시장이 예상한 것보다
// 정배가 실제로 훨씬 더 잘 맞아떨어진 경기를 하루 최대 1건만 골라 보여준다. 예측이나
// 승부 단정이 아니라 "이 조건에서 실제 적중률이 시장 예상보다 이만큼 높았다"는 과거
// 근거만 보여주는 것이라, 표본이 충분치 않으면(하루에 그런 경기가 없으면) 억지로
// 채우지 않고 그냥 비워둔다.
const STRONG_SIGNAL_MIN_SAMPLE = 25;
const STRONG_SIGNAL_MIN_LIFT = 10;
const STRONG_SIGNAL_MIN_HIT_RATE = 65;

function getTodayStrongSignal(matches = [], searchableMatches = getSearchableMatches(), assessed = null) {
  const candidates = (assessed || assessTodayMatches(matches, searchableMatches))
    .filter(({ assessment }) => (
      assessment.knownMatches >= STRONG_SIGNAL_MIN_SAMPLE
      && assessment.judgement.confidence !== "낮음"
      && assessment.judgement.favoriteOdds !== null
      && assessment.judgement.favoriteOdds <= 2.1
      && Number(assessment.judgement.favoriteHitRate || 0) >= STRONG_SIGNAL_MIN_HIT_RATE
      && (Number(assessment.judgement.favoriteHitRate || 0) - Number(assessment.marketFavoriteRate || 0)) >= STRONG_SIGNAL_MIN_LIFT
    ))
    .map(({ match, assessment }) => {
      const hitRateLift = Number(assessment.judgement.favoriteHitRate || 0) - Number(assessment.marketFavoriteRate || 0);
      return {
        match,
        judgement: assessment.judgement,
        knownMatches: assessment.knownMatches,
        marketFavoriteRate: assessment.marketFavoriteRate,
        hitRateLift,
        strongScore: hitRateLift * 1.2 + Math.min(5, assessment.knownMatches / 20)
      };
    })
    .sort((left, right) => right.strongScore - left.strongScore);

  return candidates[0] || null;
}

// 이변 후보 심사 전용 표본 탐색: analyzeLiveMatchOdds 는 "같은 리그·오차 0.05"에서
// 단 1경기만 걸려도 그걸로 확정하고 멈춰서, 배당이 흔치 않은 경기는 표본이 거의 항상
// 1~2건에 머물렀다 (UPSET_CANDIDATE_MIN_SAMPLE 을 구조적으로 못 넘김). 여기서는 그
// 판정 기준(15경기)을 채울 때까지 오차·리그 범위를 넓혀가며 다시 찾는다.
// 오늘의 경기 카드 등 다른 화면이 쓰는 getTodayMatchAnalysis 자체는 건드리지 않는다.
// 이 함수는 전체 배당 데이터를 최대 네 번까지 훑기 때문에 오늘 경기 화면에서 가장 무겁다.
// 같은 렌더 안에서도 여러 곳이 같은 경기를 물어보므로 결과를 캐시한다. 데이터가 바뀌면
// invalidateSearchableMatchesCache 에서 같이 비운다.
function getUpsetCandidateAnalysis(match = {}, searchableMatches = []) {
  const cacheKey = `${getMatchIdentity(match)}|${formatOdds(match.homeOdds)}|${formatOdds(match.drawOdds)}|${formatOdds(match.awayOdds)}|${match.tolerance || "0.05"}|${Array.isArray(searchableMatches) ? searchableMatches.length : 0}`;
  if (upsetCandidateAnalysisCache.has(cacheKey)) return upsetCandidateAnalysisCache.get(cacheKey);
  const analysis = computeUpsetCandidateAnalysis(match, searchableMatches);
  upsetCandidateAnalysisCache.set(cacheKey, analysis);
  return analysis;
}

function computeUpsetCandidateAnalysis(match = {}, searchableMatches = []) {
  const criteria = {
    homeTeam: match.homeTeam,
    awayTeam: match.awayTeam,
    homeOdds: match.homeOdds,
    drawOdds: match.drawOdds,
    awayOdds: match.awayOdds
  };
  const attempts = [
    { tolerance: match.tolerance || "0.05", league: match.league || "ALL" },
    { tolerance: "0.10", league: "ALL" },
    { tolerance: "0.20", league: "ALL" }
  ];

  let widest = null;
  for (const attempt of attempts) {
    const analysis = analyzeTodayMatch(searchableMatches, { ...criteria, ...attempt });
    if (!widest || analysis.breakdown.knownMatches > widest.breakdown.knownMatches) widest = analysis;
    if (analysis.breakdown.knownMatches >= UPSET_CANDIDATE_MIN_SAMPLE) return analysis;
  }

  const closestMatches = getClosestOddsMatches(searchableMatches, criteria, 30);
  if (closestMatches.length > 0) {
    const breakdown = calculateResultBreakdown(closestMatches);
    if (!widest || breakdown.knownMatches > widest.breakdown.knownMatches) {
      return { error: "", matches: closestMatches, breakdown, label: `${criteria.homeTeam} vs ${criteria.awayTeam}` };
    }
  }
  return widest || { error: "", matches: [], breakdown: calculateResultBreakdown([]) };
}

// 이변 후보와 강한 신호는 같은 심사 결과를 서로 다른 기준으로 걸러 쓴다. 경기당 심사가
// 전체 데이터 스캔을 동반할 만큼 비싸서, 한 번만 돌려 두 곳이 나눠 쓰도록 한다.
function assessTodayMatches(matches = [], searchableMatches = getSearchableMatches()) {
  return (Array.isArray(matches) ? matches : [])
    .filter(hasCompleteOdds)
    .map((match) => {
      const analysis = getUpsetCandidateAnalysis(match, searchableMatches);
      const contextProfile = getMatchContextProfile(match, searchableMatches);
      const assessment = assessTodayUpsetCandidate(
        match,
        analysis?.breakdown || calculateResultBreakdown([]),
        contextProfile
      );
      return { match, analysis, contextProfile, assessment };
    });
}

function getTodayUpsetCandidates(matches = [], searchableMatches = getSearchableMatches(), assessed = null) {
  return (assessed || assessTodayMatches(matches, searchableMatches))
    .map(({ match, analysis, contextProfile, assessment }) => ({
      match,
      analysis,
      judgement: assessment.judgement,
      contextProfile,
      topLabel: assessment.topLabel,
      topScore: assessment.topScore,
      evidence: assessment.evidence.slice(0, 2),
      isTopCandidate: assessment.isTopCandidate
    }))
    .filter((item) => item.isTopCandidate)
    .sort((left, right) => Number(right.topScore || 0) - Number(left.topScore || 0));
}

function sortHomeTodayMatchesForUsers(matches = [], searchableMatches = getSearchableMatches()) {
  return [...matches].sort((left, right) => {
    const leftAnalysis = hasCompleteOdds(left) ? getTodayMatchAnalysis(left, searchableMatches) : null;
    const rightAnalysis = hasCompleteOdds(right) ? getTodayMatchAnalysis(right, searchableMatches) : null;
    const leftInsight = getTodayUserInsight(left, leftAnalysis);
    const rightInsight = getTodayUserInsight(right, rightAnalysis);
    const insightDifference = rightInsight.score - leftInsight.score;
    if (insightDifference !== 0) return insightDifference;

    return compareHomeTodayMatches(left, right) <= 0 ? -1 : 1;
  });
}

function formatMatchStartTime(match = {}) {
  const timeText = String(match.startTime || match.kickoff || match.time || "").trim();
  if (timeText) return timeText.slice(0, 5);
  return translateUiText("시간 미정");
}

function getMatchStatusLabel(match = {}) {
  const status = String(match.status || match.fixtureStatus || match.statusShort || "").trim();
  if (!status) return translateUiText("경기 전");
  const normalizedStatus = status.toUpperCase().replaceAll("_", " ");
  const labels = {
    NS: "경기 전",
    "NOT STARTED": "경기 전",
    TBD: "시간 미정",
    "1H": "전반 진행",
    HT: "하프타임",
    "2H": "후반 진행",
    LIVE: "진행 중",
    ET: "연장",
    BT: "휴식",
    P: "승부차기",
    INT: "중단",
    SUSP: "중단",
    FT: "종료",
    "MATCH FINISHED": "종료",
    AET: "연장 종료",
    PEN: "승부차기 종료",
    PST: "연기",
    POSTPONED: "연기",
    CANC: "취소",
    CANCELLED: "취소",
    ABD: "중단",
    ABANDONED: "중단",
    AWD: "몰수 종료",
    WO: "부전승"
  };
  return translateUiText(labels[normalizedStatus] || status);
}

function getOddsUpdateAgeHours(value, now = Date.now()) {
  if (!value) return null;
  const timestamp = new Date(value).getTime();
  if (!Number.isFinite(timestamp)) return null;
  return Math.max(0, (now - timestamp) / 3600000);
}

function isFinishedMatch(match = {}) {
  const status = String(match.status || match.fixtureStatus || match.statusShort || "")
    .trim()
    .toUpperCase()
    .replaceAll("_", " ");
  return new Set(["FT", "MATCH FINISHED", "AET", "PEN", "AWD", "WO"]).has(status);
}

function formatTodayUpdateTime(value) {
  if (!value) return "";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return String(value);
  return new Intl.DateTimeFormat("ko-KR", {
    timeZone: "Asia/Seoul",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false
  }).format(date);
}

function getHomeTodayCardViewModel(match = {}, updatedAt = "", analysis = null) {
  const hasOdds = hasCompleteOdds(match);
  const finished = isFinishedMatch(match);
  let insight = hasOdds && analysis
    ? getTodayUserInsight(match, analysis)
    : {
      text: hasOdds ? "배당 확인 가능" : "배당 준비 중",
      tone: hasOdds ? "balanced" : "pending",
      sampleSize: 0,
      upsetProbability: null,
      score: hasOdds ? 1 : 0
    };
  const oddsAgeHours = getOddsUpdateAgeHours(match.updatedAt);
  if (hasOdds && finished) {
    insight = {
      ...insight,
      text: "최종 수집 배당",
      tone: "balanced"
    };
  } else if (hasOdds && oddsAgeHours !== null && oddsAgeHours >= 6) {
    insight = {
      ...insight,
      text: "신뢰도 낮음 · 오래된 배당",
      tone: "low"
    };
  }
  return {
    id: match.id || getTodayMatchKey(match),
    title: `${formatTeamName(match.homeTeam)} vs ${formatTeamName(match.awayTeam)}`,
    league: translateLeagueName(getLeagueLabel(match.league || "")),
    startTime: formatMatchStartTime(match),
    status: getMatchStatusLabel(match),
    odds: hasOdds ? `${formatOdds(match.homeOdds)} / ${formatOdds(match.drawOdds)} / ${formatOdds(match.awayOdds)}` : "배당 준비 중",
    resultText: formatMatchResultText(match),
    insight,
    hasOdds,
    updatedAt: formatTodayUpdateTime(match.updatedAt || match.createdAt) || updatedAt || ""
  };
}

function setHomeTodayStatus(message) {
  const element = document.getElementById("home-today-updated");
  if (element) element.textContent = message;
}

function createHomeUpsetCandidateCard(item = {}) {
  const match = item.match || {};
  const judgement = item.judgement || {};
  const card = document.createElement("article");
  card.className = "home-upset-card";
  card.tabIndex = 0;
  card.setAttribute?.("role", "button");

  const league = document.createElement("span");
  league.className = "home-upset-league";
  league.textContent = `${formatLeagueName(match.league)} · ${formatMatchStartTime(match)}`;

  const title = document.createElement("strong");
  title.textContent = `${formatTeamName(match.homeTeam)} vs ${formatTeamName(match.awayTeam)}`;

  const odds = document.createElement("span");
  odds.className = "home-upset-odds";
  odds.textContent = `배당 ${formatOdds(match.homeOdds)} / ${formatOdds(match.drawOdds)} / ${formatOdds(match.awayOdds)}`;

  const meta = document.createElement("div");
  meta.className = "home-upset-meta";
  const judgementBadge = document.createElement("b");
  judgementBadge.textContent = item.topLabel || judgement.judgement || "대형 이변 후보";
  meta.appendChild(judgementBadge);
  const sampleBadge = document.createElement("span");
  sampleBadge.textContent = `표본 ${Number(judgement.sampleSize || 0)}`;
  meta.appendChild(sampleBadge);
  (item.evidence || []).slice(0, 2).forEach((text) => {
    const evidenceBadge = document.createElement("span");
    evidenceBadge.className = "home-upset-evidence";
    evidenceBadge.textContent = text;
    meta.appendChild(evidenceBadge);
  });

  card.append(league, title, odds, meta);
  card.addEventListener("click", () => openMatchDetail(match));
  card.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" && event.key !== " ") return;
    event.preventDefault();
    openMatchDetail(match);
  });
  return card;
}

// 계산이 끝나기 전에 "후보가 없습니다"를 띄우면 없다고 했다가 뒤늦게 나타나는 꼴이 된다.
// 계산 중임을 먼저 알린다.
function setHomeUpsetLoading() {
  if (typeof document === "undefined") return;
  const list = document.getElementById("home-upset-list");
  if (!list) return;
  const loading = document.createElement("div");
  loading.className = "home-upset-empty";
  loading.textContent = translateUiText("이변 후보를 계산하는 중입니다");
  list.replaceChildren(loading);
}

function renderHomeUpsetCandidates(matches = [], assessed = null) {
  if (typeof document === "undefined") return;
  const list = document.getElementById("home-upset-list");
  if (!list) return;

  // 후보 목록 옆에 지금까지의 검증 성적을 같이 둔다. 실패해도 화면은 그대로 진행한다.
  loadUpsetTrackRecord().catch(() => {});

  if (!cachedSearchableMatches) {
    const empty = document.createElement("div");
    empty.className = "home-upset-empty";
    empty.textContent = "오늘은 신뢰할 만한 이변 후보가 없습니다";
    list.replaceChildren(empty);
    return;
  }

  const candidates = getTodayUpsetCandidates(matches, cachedSearchableMatches, assessed);
  if (candidates.length === 0) {
    const empty = document.createElement("div");
    empty.className = "home-upset-empty";
    empty.textContent = "오늘은 신뢰할 만한 이변 후보가 없습니다";
    list.replaceChildren(empty);
    return;
  }

  list.replaceChildren(...candidates.map(createHomeUpsetCandidateCard));
}

function createHomeStrongSignalCard(item = {}) {
  const match = item.match || {};
  const judgement = item.judgement || {};
  const card = document.createElement("article");
  card.className = "home-strong-signal-card";
  card.tabIndex = 0;
  card.setAttribute?.("role", "button");

  const league = document.createElement("span");
  league.className = "home-strong-signal-league";
  league.textContent = `${formatLeagueName(match.league)} · ${formatMatchStartTime(match)}`;

  const title = document.createElement("strong");
  title.textContent = `${formatTeamName(match.homeTeam)} vs ${formatTeamName(match.awayTeam)}`;

  const odds = document.createElement("span");
  odds.className = "home-strong-signal-odds";
  odds.textContent = `배당 ${formatOdds(match.homeOdds)} / ${formatOdds(match.drawOdds)} / ${formatOdds(match.awayOdds)}`;

  const meta = document.createElement("div");
  meta.className = "home-strong-signal-meta";
  const evidence = document.createElement("b");
  evidence.textContent = `이 조건 실제 적중률 ${Math.round(Number(judgement.favoriteHitRate || 0))}% · 시장 예상보다 ${Math.round(Number(item.hitRateLift || 0))}%p 높음`;
  meta.appendChild(evidence);
  const sampleBadge = document.createElement("span");
  sampleBadge.textContent = `표본 ${Number(item.knownMatches || 0)}`;
  meta.appendChild(sampleBadge);

  card.append(league, title, odds, meta);
  card.addEventListener("click", () => openMatchDetail(match));
  card.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" && event.key !== " ") return;
    event.preventDefault();
    openMatchDetail(match);
  });
  return card;
}

function renderHomeStrongSignal(matches = [], assessed = null) {
  if (typeof document === "undefined") return;
  const section = document.getElementById("home-strong-signal-section");
  const list = document.getElementById("home-strong-signal-list");
  if (!section || !list) return;

  if (!cachedSearchableMatches) {
    section.hidden = true;
    return;
  }

  const signal = getTodayStrongSignal(matches, cachedSearchableMatches, assessed);
  if (!signal) {
    section.hidden = true;
    list.replaceChildren();
    return;
  }

  section.hidden = false;
  list.replaceChildren(createHomeStrongSignalCard(signal));
}

function createHomeTodayMatchCard(match, updatedAt = "", analysis = null) {
  const view = getHomeTodayCardViewModel(match, updatedAt, analysis);
  const card = document.createElement("article");
  card.className = `home-today-card${view.hasOdds ? " has-odds" : ""}`;
  card.tabIndex = 0;
  card.setAttribute?.("role", "button");

  const top = document.createElement("div");
  top.className = "home-today-card-top";
  const league = document.createElement("span");
  const time = document.createElement("span");
  league.textContent = view.league;
  time.textContent = `${view.startTime} · ${view.status}`;
  top.append(league, time);

  const title = document.createElement("strong");
  title.textContent = view.title;

  const odds = document.createElement("p");
  odds.className = view.hasOdds ? "home-today-odds ready" : "home-today-odds";
  const insight = document.createElement("p");
  insight.className = `home-today-insight ${view.insight?.tone || "pending"}`;
  insight.textContent = view.insight?.text || "분석 준비 중";
  odds.textContent = view.hasOdds ? `홈승 / 무 / 원정승 ${view.odds}` : view.odds;
  const result = document.createElement("p");
  result.className = "home-today-result";
  result.textContent = view.resultText;
  result.hidden = !view.resultText;

  const footer = document.createElement("div");
  footer.className = "home-today-card-footer";
  const updated = document.createElement("small");
  updated.textContent = view.updatedAt ? `업데이트 ${view.updatedAt}` : "업데이트 대기";
  const button = document.createElement("button");
  button.type = "button";
  button.textContent = "배당 검색";
  button.addEventListener("click", (event) => {
    event.stopPropagation();
    openOddsSearchForTodayMatch(match, getTodayMatchAnalysis(match, getSearchableMatches()));
  });
  const detailButton = document.createElement("button");
  detailButton.type = "button";
  detailButton.className = "home-today-detail-button";
  detailButton.textContent = "상세분석 보기";
  detailButton.addEventListener("click", (event) => {
    event.stopPropagation();
    openMatchDetail(match);
  });
  const actions = document.createElement("div");
  actions.className = "home-today-card-actions";
  actions.append(button, detailButton);
  footer.append(updated, actions);

  card.append(top, title, odds, result, insight, footer);
  card.addEventListener("click", (event) => {
    if (isInteractiveElement(event.target)) return;
    openMatchDetail(match);
  });
  card.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" && event.key !== " ") return;
    if (isInteractiveElement(event.target)) return;
    event.preventDefault();
    openMatchDetail(match);
  });
  return card;
}

function renderHomeTodayMatches(matches = homeTodayMatches, { status = "" } = {}) {
  if (typeof document === "undefined") return;
  const list = document.getElementById("home-today-list");

  if (status) setHomeTodayStatus(status);

  const majorMatches = getMajorTodayMatches(matches);
  const renderVersion = ++homeTodayAnalysisRenderVersion;

  if (majorMatches.length === 0) {
    renderHomeUpsetCandidates([]);
    renderHomeStrongSignal([]);
    if (!list) return;
    const empty = document.createElement("div");
    empty.className = "empty-state compact-empty";
    empty.textContent = status && status.includes("불러오는 중")
      ? "오늘 경기 불러오는 중"
      : status && status.includes("실패")
        ? "오늘 경기 정보를 불러오지 못했습니다. 새로고침을 눌러 다시 시도해보세요."
        : translateUiText("오늘 표시할 주요 경기가 없습니다");
    list.replaceChildren(empty);
    return;
  }

  if (list) {
    const initialMatches = sortHomeTodayMatches(majorMatches).slice(0, HOME_TODAY_MATCH_LIMIT);
    list.replaceChildren(...initialMatches.map((match) => (
      createHomeTodayMatchCard(match, homeTodayLastUpdatedAt, null)
    )));
  }

  if (!cachedSearchableMatches || typeof window === "undefined") {
    // 아직 과거 데이터가 없으면 심사할 것도 없다. 두 렌더러가 알아서 빈 상태를 그린다.
    renderHomeUpsetCandidates(majorMatches);
    renderHomeStrongSignal(majorMatches);
    return;
  }

  const renderTodaySignals = () => {
    if (renderVersion !== homeTodayAnalysisRenderVersion) return;
    // 이 콜백은 나중에 실행돼서 그 사이 데이터 캐시가 비워졌을 수 있다.
    const assessed = cachedSearchableMatches
      ? assessTodayMatches(majorMatches, cachedSearchableMatches)
      : null;
    renderHomeUpsetCandidates(majorMatches, assessed);
    renderHomeStrongSignal(majorMatches, assessed);
  };

  let analysisIndex = 0;
  const analyzeNextMatch = () => {
    if (renderVersion !== homeTodayAnalysisRenderVersion) return;
    if (analysisIndex < majorMatches.length) {
      getTodayMatchAnalysis(majorMatches[analysisIndex], cachedSearchableMatches);
      analysisIndex += 1;
      window.setTimeout(analyzeNextMatch, 0);
      return;
    }

    const visibleMatches = sortHomeTodayMatchesForUsers(majorMatches, cachedSearchableMatches)
      .slice(0, HOME_TODAY_MATCH_LIMIT);
    const analyses = visibleMatches.map((match) => getTodayMatchAnalysis(match, cachedSearchableMatches));
    if (list) {
      list.replaceChildren(...visibleMatches.map((match, index) => (
        createHomeTodayMatchCard(match, homeTodayLastUpdatedAt, analyses[index] || null)
      )));
    }
  };

  // 이변 후보는 사용자가 이 화면에서 가장 먼저 찾는 정보다. 예전에는 경기 카드를 하나씩
  // 전부 분석한 뒤에야 계산을 시작해서 한참 뒤에야 떴다. 카드 목록은 이미 그려둔 상태이므로,
  // 후보 계산을 앞으로 당기고 카드별 분석을 그 뒤로 미룬다.
  setHomeUpsetLoading();
  window.setTimeout(() => {
    renderTodaySignals();
    window.setTimeout(analyzeNextMatch, 0);
  }, 0);
}

function getFixtureDateOptions(todayKey = getTodayKey()) {
  const weekdayFormatter = new Intl.DateTimeFormat(getUiLanguage() === "en" ? "en-US" : "ko-KR", {
    timeZone: "Asia/Seoul",
    weekday: "short"
  });
  return DATE_FIXTURE_OFFSETS.map((offset) => {
    const date = shiftDateKey(todayKey, offset);
    const parsedDate = new Date(`${date}T12:00:00+09:00`);
    return {
      date,
      weekday: weekdayFormatter.format(parsedDate).replace("요일", ""),
      shortDate: date.slice(5),
      isToday: offset === 0
    };
  });
}

function getStoredFixturesForDate(date, storage) {
  const targetDate = String(date || "").slice(0, 10);
  return getFixturesForDate([
    ...getStorageTodayMatches(storage),
    ...getApiOddsPackRowsForDates([targetDate])
  ], targetDate);
}

function getFixturesForDate(matches = [], date = "") {
  return deduplicateTodayMatches((Array.isArray(matches) ? matches : []).filter((match) => (
    String(match.date || "").slice(0, 10) === date
  )));
}

function mergeStoredOddsIntoFixtures(matches = [], storedMatches = []) {
  const fixtureDates = new Set(
    (Array.isArray(matches) ? matches : [])
      .map((match) => String(match?.date || "").slice(0, 10))
      .filter(Boolean)
  );
  const fallbackRows = [
    ...(Array.isArray(storedMatches) ? storedMatches : []),
    ...getApiOddsPackRowsForDates(fixtureDates)
  ].filter(hasCompleteOdds);
  if (fallbackRows.length === 0) return [...(Array.isArray(matches) ? matches : [])];

  const byFixtureId = new Map();
  const byMatchKey = new Map();
  for (const row of fallbackRows) {
    const fixtureId = String(row.fixtureId || row.id || "").trim();
    if (fixtureId && !byFixtureId.has(fixtureId)) byFixtureId.set(fixtureId, row);
    const key = getTodayMatchKey(row);
    if (key && key !== "|||" && !byMatchKey.has(key)) byMatchKey.set(key, row);
  }

  return (Array.isArray(matches) ? matches : []).map((match) => {
    if (hasCompleteOdds(match)) return match;
    const fixtureId = String(match.fixtureId || match.id || "").trim();
    const fallback = byFixtureId.get(fixtureId) || byMatchKey.get(getTodayMatchKey(match));
    if (!fallback) return match;
    return {
      ...match,
      homeOdds: fallback.homeOdds,
      drawOdds: fallback.drawOdds,
      awayOdds: fallback.awayOdds,
      oddsUpdatedAt: fallback.oddsUpdatedAt || match.oddsUpdatedAt || "",
      oddsHistory: fallback.oddsHistory || match.oddsHistory || [],
      source: match.source || fallback.source
    };
  });
}

// 값은 "ALL", 기존 카테고리 키, 또는 리그 키 하나를 받는다.
function filterFixturesByCategory(matches = [], category = "ALL") {
  const list = Array.isArray(matches) ? matches : [];
  const key = String(category || "ALL").toUpperCase();
  if (!key || key === "ALL") return [...list];

  const leagueKeys = DATE_FIXTURE_CATEGORY_LEAGUES[key] || [key];
  return list.filter((match) => leagueKeys.some((leagueKey) => leagueMatchesFixture(match.league, leagueKey)));
}

// 그 날짜에 실제로 있는 리그만 뽑는다. 주요 리그를 먼저, 그다음 경기 많은 순.
// 전체 리그 목록을 주는 getFixtureLeagueOptions 와는 용도가 다르다.
function getDateFixtureLeagueOptions(matches = []) {
  const options = new Map();
  for (const match of Array.isArray(matches) ? matches : []) {
    const key = getLeagueKeyFromText(match?.league) || String(match?.league || "").trim().toUpperCase();
    if (!key) continue;
    if (!options.has(key)) options.set(key, { key, label: formatLeagueName(match.league), count: 0 });
    options.get(key).count += 1;
  }

  return [...options.values()].sort((left, right) => {
    const leftRank = HOME_TODAY_LEAGUE_PRIORITY.indexOf(left.key);
    const rightRank = HOME_TODAY_LEAGUE_PRIORITY.indexOf(right.key);
    const leftOrder = leftRank === -1 ? HOME_TODAY_LEAGUE_PRIORITY.length : leftRank;
    const rightOrder = rightRank === -1 ? HOME_TODAY_LEAGUE_PRIORITY.length : rightRank;
    if (leftOrder !== rightOrder) return leftOrder - rightOrder;
    if (left.count !== right.count) return right.count - left.count;
    return String(left.label).localeCompare(String(right.label));
  });
}

function renderFixtureLeagueFilter(matches = [], date = selectedFixtureDate || getTodayKey()) {
  if (typeof document === "undefined") return;
  const select = document.getElementById("fixture-category-filter");
  if (!select) return;

  const options = getDateFixtureLeagueOptions(getFixturesForDate(matches, date));
  // 고른 리그가 이 날짜에 없으면 전체로 되돌린다.
  if (selectedFixtureCategory !== "ALL" && !options.some((option) => option.key === selectedFixtureCategory)) {
    selectedFixtureCategory = "ALL";
  }

  const allOption = document.createElement("option");
  allOption.value = "ALL";
  allOption.textContent = "전체";

  select.replaceChildren(allOption, ...options.map((option) => {
    const element = document.createElement("option");
    element.value = option.key;
    element.textContent = `${option.label} ${option.count}`;
    return element;
  }));
  select.value = selectedFixtureCategory;
}

function filterFixturesByText(matches = [], query = "") {
  const normalizedQuery = normalizeTeamSearchText(query);
  if (!normalizedQuery) return [...(Array.isArray(matches) ? matches : [])];
  return (Array.isArray(matches) ? matches : []).filter((match) => {
    const searchableText = [
      match.league,
      translateLeagueName(getLeagueLabel(match.league || "")),
      match.homeTeam,
      formatTeamName(match.homeTeam),
      match.awayTeam,
      formatTeamName(match.awayTeam)
    ].map(normalizeTeamSearchText).join(" ");
    return searchableText.includes(normalizedQuery);
  });
}

function getVisibleFixturesForDate(matches = [], date = selectedFixtureDate || getTodayKey(), category = selectedFixtureCategory) {
  return filterFixturesByText(
    filterFixturesByCategory(getFixturesForDate(matches, date), category),
    selectedFixtureQuery
  );
}

function getCachedFixturesForDate(date, storage) {
  const cached = dateFixtureCache.get(date);
  if (cached) return cached.matches;
  return getStoredFixturesForDate(date, storage);
}

function setDateFixtureStatus(message) {
  const status = document.getElementById("selected-fixture-date-status");
  if (status) status.textContent = message;
}

function formatFixtureDateTitle(date) {
  if (date === getTodayKey()) return translateUiText("오늘 경기");
  const parsedDate = new Date(`${date}T12:00:00+09:00`);
  return new Intl.DateTimeFormat(getUiLanguage() === "en" ? "en-US" : "ko-KR", {
    timeZone: "Asia/Seoul",
    month: "long",
    day: "numeric",
    weekday: "short"
  }).format(parsedDate);
}

function renderFixtureDateTabs(selectedDate = selectedFixtureDate || getTodayKey()) {
  if (typeof document === "undefined") return;
  const strip = document.getElementById("fixture-date-strip");
  if (!strip) return;
  selectedFixtureDate = selectedDate;

  const buttons = getFixtureDateOptions().map((item) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `date-tab${item.date === selectedDate ? " selected" : ""}${item.isToday ? " today" : ""}`;
    button.dataset.fixtureDate = item.date;
    button.setAttribute("role", "tab");
    button.setAttribute("aria-selected", String(item.date === selectedDate));
    button.setAttribute("aria-label", `${item.date}${item.isToday ? ` ${translateUiText("오늘")}` : ""}`);

    const weekday = document.createElement("span");
    weekday.textContent = item.weekday;
    const date = document.createElement("strong");
    date.textContent = item.shortDate;
    button.append(weekday, date);

    if (item.isToday) {
      const badge = document.createElement("small");
      badge.textContent = getUiLanguage() === "en" ? "●Today" : "●오늘";
      button.appendChild(badge);
    }
    button.addEventListener("click", () => selectFixtureDate(item.date));
    return button;
  });

  strip.replaceChildren(...buttons);
  const selectedButton = strip.querySelector(".date-tab.selected");
  if (selectedButton) {
    strip.scrollLeft = Math.max(0, selectedButton.offsetLeft - (strip.clientWidth - selectedButton.offsetWidth) / 2);
  }
}

function createDateFixtureCard(match = {}) {
  const card = document.createElement("article");
  card.className = "date-fixture-card";
  card.tabIndex = 0;
  card.setAttribute("role", "button");

  const meta = document.createElement("div");
  meta.className = "date-fixture-meta";
  const leagueRow = document.createElement("div");
  leagueRow.className = "date-fixture-league-row";
  const league = document.createElement("span");
  league.className = "date-fixture-league";
  league.textContent = translateLeagueName(getLeagueLabel(match.league || ""));
  leagueRow.appendChild(league);
  const isTodayMajor = String(match.date || "").slice(0, 10) === getTodayKey()
    && isMajorTodayMatch(match)
    && hasCompleteOdds(match);
  if (isTodayMajor) {
    const majorBadge = document.createElement("b");
    majorBadge.className = "date-fixture-major-badge";
    majorBadge.textContent = getUiLanguage() === "en" ? "🔥 Featured" : "🔥 주요";
    leagueRow.appendChild(majorBadge);
    card.classList.add("major");
  }
  const state = document.createElement("span");
  const statusLabel = getMatchStatusLabel(match);
  const statusClass = {
    "종료": "finished",
    "취소": "cancelled",
    "연기": "postponed",
    "중단": "suspended"
  }[statusLabel] || "scheduled";
  state.className = `date-fixture-status ${statusClass}`;
  state.textContent = `${formatMatchStartTime(match)} · ${statusLabel}`;
  state.dataset.status = statusLabel;

  const favoriteButton = document.createElement("button");
  favoriteButton.type = "button";
  favoriteButton.className = "date-fixture-favorite";
  const updateFavoriteButton = (favorite) => {
    favoriteButton.classList.toggle("active", favorite);
    favoriteButton.textContent = favorite ? "★" : "☆";
    favoriteButton.setAttribute("aria-pressed", String(favorite));
    favoriteButton.setAttribute("aria-label", favorite ? "즐겨찾기 해제" : "즐겨찾기 추가");
    favoriteButton.title = favorite ? "즐겨찾기 해제" : "즐겨찾기 추가";
  };
  updateFavoriteButton(Boolean(getMatchFavoriteEntry(match)?.favorite));
  favoriteButton.addEventListener("click", (event) => {
    event.stopPropagation();
    updateFavoriteButton(setMatchFavorite(match, !Boolean(getMatchFavoriteEntry(match)?.favorite)));
    renderSearchHistory();
    renderSavedSearches();
  });
  meta.append(leagueRow, state, favoriteButton);

  const content = document.createElement("div");
  content.className = "date-fixture-content";

  const teams = document.createElement("div");
  teams.className = "date-fixture-teams";
  const home = document.createElement("strong");
  home.textContent = formatTeamName(match.homeTeam);
  const versus = document.createElement("span");
  versus.textContent = "vs";
  const away = document.createElement("strong");
  away.textContent = formatTeamName(match.awayTeam);
  teams.append(home, versus, away);

  const resultText = formatMatchResultText(match);
  if (resultText) {
    const result = document.createElement("small");
    result.className = "date-fixture-result";
    result.textContent = resultText;
    teams.appendChild(result);
  }

  content.appendChild(teams);
  if (hasCompleteOdds(match)) {
    const odds = document.createElement("div");
    odds.className = "date-fixture-odds";
    odds.textContent = getCompactFixtureOdds(match);
    content.appendChild(odds);
  }

  const button = document.createElement("button");
  button.type = "button";
  button.className = "date-fixture-search";
  button.textContent = "배당 검색";
  button.addEventListener("click", (event) => {
    event.stopPropagation();
    openOddsSearchForTodayMatch(match, getTodayMatchAnalysis(match, getSearchableMatches()));
  });

  card.append(meta, content, button);
  card.addEventListener("click", (event) => {
    if (!isInteractiveElement(event.target)) openMatchDetail(match);
  });
  card.addEventListener("keydown", (event) => {
    if ((event.key === "Enter" || event.key === " ") && !isInteractiveElement(event.target)) {
      event.preventDefault();
      openMatchDetail(match);
    }
  });
  return card;
}

function getCompactFixtureOdds(match = {}) {
  if (!hasCompleteOdds(match)) return "";
  return `홈 ${formatOdds(match.homeOdds)} · 무 ${formatOdds(match.drawOdds)} · 원정 ${formatOdds(match.awayOdds)}`;
}

function sortDateFixtureMatches(matches = [], date = getTodayKey()) {
  // 비교마다 다시 구하던 오늘 여부와 주요 경기 여부를 정렬 전에 한 번만 계산한다.
  const isToday = date === getTodayKey();
  const majorFlags = new Map();
  const getMajorFlag = (match) => {
    let flag = majorFlags.get(match);
    if (flag === undefined) {
      flag = Number(isMajorTodayMatch(match) && hasCompleteOdds(match));
      majorFlags.set(match, flag);
    }
    return flag;
  };

  return [...(Array.isArray(matches) ? matches : [])].sort((left, right) => {
    if (isToday) {
      const majorDifference = getMajorFlag(right) - getMajorFlag(left);
      if (majorDifference !== 0) return majorDifference;
    }
    return compareHomeTodayMatches(left, right) <= 0 ? -1 : 1;
  });
}

function renderDateFixtures(matches = [], date = selectedFixtureDate || getTodayKey(), { loading = false } = {}) {
  if (typeof document === "undefined") return;
  const list = document.getElementById("date-fixture-list");
  const title = document.getElementById("selected-fixture-date-title");
  if (title) title.textContent = formatFixtureDateTitle(date);
  if (!list) return;

  renderFixtureLeagueFilter(matches, date);
  const visibleMatches = getVisibleFixturesForDate(matches, date);
  const dateMatches = sortDateFixtureMatches(visibleMatches, date);
  if (dateMatches.length === 0) {
    const empty = document.createElement("div");
    empty.className = "empty-state compact-empty";
    empty.textContent = loading ? "경기 일정을 불러오는 중입니다." : "이 날짜와 카테고리에 표시할 경기가 없습니다.";
    list.replaceChildren(empty);
    return visibleMatches;
  }

  list.replaceChildren(...dateMatches.map(createDateFixtureCard));
  return visibleMatches;
}

async function selectFixtureDate(date, { force = false } = {}) {
  const targetDate = String(date || getTodayKey()).slice(0, 10);
  selectedFixtureDate = targetDate;
  renderFixtureDateTabs(targetDate);
  const cachedMatches = getCachedFixturesForDate(targetDate);
  // 렌더가 이미 계산한 노출 목록을 상태 문구에서 재사용한다.
  const renderedVisible = renderDateFixtures(cachedMatches, targetDate, { loading: cachedMatches.length === 0 });
  const cachedVisibleCount = (renderedVisible || getVisibleFixturesForDate(cachedMatches, targetDate)).length;

  const cached = dateFixtureCache.get(targetDate);
  if (!force && cached && Date.now() - cached.fetchedAt < DATE_FIXTURE_CACHE_TTL) {
    setDateFixtureStatus(`${cachedVisibleCount}경기`);
    return { error: "", matches: cached.matches, cached: true };
  }

  setDateFixtureStatus(cachedMatches.length > 0 ? `${cachedVisibleCount}경기 · 최신 일정 확인 중` : "경기 일정 확인 중");
  const requestId = ++dateFixtureRequestId;
  try {
    const result = await fetchLiveOdds({ date: targetDate, league: "ALL" });
    if (requestId !== dateFixtureRequestId) return result;
    if (result.error) {
      setDateFixtureStatus(cachedMatches.length > 0 ? `${cachedVisibleCount}경기 · 저장된 일정` : "일정을 불러오지 못했습니다");
      renderDateFixtures(cachedMatches, targetDate);
      return result;
    }

    const fetchedMatches = deduplicateTodayMatches(result.matches || []);
    const fetchedTargetMatches = mergeStoredOddsIntoFixtures(
      getFixturesForDate(fetchedMatches, targetDate),
      cachedMatches
    );
    const matches = fetchedTargetMatches.length > 0 ? fetchedTargetMatches : cachedMatches;
    dateFixtureCache.set(targetDate, { matches, fetchedAt: Date.now() });
    if (fetchedMatches.length > 0) mergeTodayMatches(fetchedMatches);
    if (selectedFixtureDate === targetDate) {
      const visibleMatches = renderDateFixtures(matches, targetDate);
      setDateFixtureStatus(`${(visibleMatches || getVisibleFixturesForDate(matches, targetDate)).length}경기`);
    }
    if (targetDate === getTodayKey()) {
      homeTodayMatches = sortHomeTodayMatches(matches);
      renderHomeTodayMatches(homeTodayMatches, { status: `마지막 업데이트: ${getCurrentTimestamp()}` });
    }
    return { ...result, matches };
  } catch (error) {
    const message = error instanceof Error ? error.message : "알 수 없는 오류";
    if (requestId === dateFixtureRequestId) {
      setDateFixtureStatus(cachedMatches.length > 0 ? `${cachedVisibleCount}경기 · 저장된 일정` : "일정을 불러오지 못했습니다");
      renderDateFixtures(cachedMatches, targetDate);
    }
    return { error: message, matches: cachedMatches };
  }
}

async function loadHomeTodayMatches() {
  const refreshButton = document.getElementById("refresh-home-today");
  if (refreshButton) refreshButton.disabled = true;
  setHomeTodayStatus("오늘 경기 불러오는 중");

  try {
    const today = getTodayKey();
    const result = await fetchLiveOdds({ date: today, league: "ALL" });
    if (result.error) {
      setHomeTodayStatus("오늘 경기 업데이트 실패");
      const cachedTodayMatches = getCachedFixturesForDate(today);
      renderDateFixtures(cachedTodayMatches, today);
      setDateFixtureStatus(cachedTodayMatches.length > 0
        ? `${getVisibleFixturesForDate(cachedTodayMatches, today).length}경기 · 저장된 일정`
        : "일정을 불러오지 못했습니다");
      renderHomeTodayMatches(homeTodayMatches, { status: "저장된 일정 표시 중" });
      return result;
    }

    homeTodayLastUpdatedAt = getCurrentTimestamp();
    const fetchedMatches = deduplicateTodayMatches(result.matches || []);
    const storedTodayMatches = getStoredFixturesForDate(today);
    const fetchedTodayMatches = mergeStoredOddsIntoFixtures(
      getFixturesForDate(fetchedMatches, today),
      storedTodayMatches
    );
    homeTodayMatches = sortHomeTodayMatches(fetchedTodayMatches.length > 0 ? fetchedTodayMatches : storedTodayMatches);
    dateFixtureCache.set(today, { matches: homeTodayMatches, fetchedAt: Date.now() });
    if (fetchedMatches.length > 0) {
      mergeTodayMatches(fetchedMatches);
    }
    if (homeTodayMatches.length > 0) {
      renderTodayCenter(homeTodayMatches);
    }
    if ((selectedFixtureDate || today) === today) {
      renderDateFixtures(homeTodayMatches, today);
      setDateFixtureStatus(`${getVisibleFixturesForDate(homeTodayMatches, today).length}경기`);
    }
    renderHomeTodayMatches(homeTodayMatches, { status: `마지막 업데이트: ${homeTodayLastUpdatedAt}` });
    return { ...result, matches: homeTodayMatches };
  } catch (error) {
    const message = error instanceof Error ? error.message : "알 수 없는 오류";
    setHomeTodayStatus(`오늘 경기 업데이트 실패: ${message}`);
    const today = getTodayKey();
    const cachedTodayMatches = getCachedFixturesForDate(today);
    renderDateFixtures(cachedTodayMatches, today);
    setDateFixtureStatus(cachedTodayMatches.length > 0
      ? `${getVisibleFixturesForDate(cachedTodayMatches, today).length}경기 · 저장된 일정`
      : "일정을 불러오지 못했습니다");
    renderHomeTodayMatches(homeTodayMatches, { status: "저장된 일정 표시 중" });
    return { error: message, matches: homeTodayMatches };
  } finally {
    if (refreshButton) refreshButton.disabled = false;
  }
}

function showAllHomeTodayMatches() {
  const matches = homeTodayMatches.length > 0 ? homeTodayMatches : getStorageTodayMatches();
  renderTodayCenter(sortHomeTodayMatches(matches));
  document.querySelector(".live-api-panel")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function focusOddsSearchPanel() {
  if (typeof window !== "undefined" && window.location.hash !== "#search") {
    window.location.hash = "#search";
  }
  showActiveView("#search");
  window.setTimeout(() => {
    document.getElementById("simple-odds-card")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, 30);
}

function setTodaySearchFromMatch(match) {
  focusOddsSearchPanel();
  setOddsSearchCriteria(getDirectOddsSearchCriteriaFromMatch(match));
  runOddsSearchFromCurrentCriteria();
}

function getDirectOddsSearchCriteriaFromMatch(match = {}) {
  const hasOdds = hasCompleteOdds(match);
  const sourceMatchId = String(match.id || match.fixtureId || getMatchIdentity(match)).trim();
  return {
    homeOdds: hasOdds ? String(match.homeOdds || "").trim() : "",
    drawOdds: hasOdds ? String(match.drawOdds || "").trim() : "",
    awayOdds: hasOdds ? String(match.awayOdds || "").trim() : "",
    tolerance: match.tolerance || "0.05",
    sortOrder: "CLOSEST",
    customTolerance: "",
    league: "ALL",
    teamQuery: "",
    sourceMatchId,
    sourceMatch: normalizeFavoriteMatchSnapshot(match)
  };
}

function openManualOddsEntryForMatch(match) {
  focusOddsSearchPanel();
  setOddsSearchCriteria(getDirectOddsSearchCriteriaFromMatch({ ...match, homeOdds: "", drawOdds: "", awayOdds: "" }));
  setOddsSearchStatus(`${formatTeamName(match.homeTeam)} vs ${formatTeamName(match.awayTeam)} 배당을 직접 입력하면 과거 유사 배당을 바로 확인할 수 있습니다.`);
  window.setTimeout(() => document.getElementById("search-home-odds")?.focus(), 350);
}

function openOddsSearchForTodayMatch(match, analysis) {
  if (!hasCompleteOdds(match)) {
    renderTodayMatchAnalysis(analysis);
    openManualOddsEntryForMatch(match);
    setTodayAnalysisStatus(`${formatTeamName(match.homeTeam)} vs ${formatTeamName(match.awayTeam)} API 배당이 아직 없어서 직접 입력 모드로 열었습니다.`);
    return;
  }

  renderTodayMatchAnalysis(analysis);
  setTodayAnalysisStatus(`${formatTeamName(match.homeTeam)} vs ${formatTeamName(match.awayTeam)} 배당으로 과거 유사 결과를 검색했습니다.`);
  setTodaySearchFromMatch(match);
}

function isInteractiveElement(element) {
  return Boolean(element?.closest?.("button, a, input, select, textarea, label"));
}

function createTodayCenterCard(match, analysis) {
  const card = document.createElement("article");
  card.className = "today-center-card";
  card.tabIndex = 0;
  card.setAttribute?.("role", "button");
  card.setAttribute?.("aria-label", `${formatTeamName(match.homeTeam)} vs ${formatTeamName(match.awayTeam)} 배당 검색 열기`);

  const header = document.createElement("div");
  header.className = "today-center-card-header";
  const meta = document.createElement("span");
  const title = document.createElement("strong");
  meta.textContent = `${match.date || getTodayKey()} · ${formatLeagueName(getLeagueLabel(match.league || "EPL"))}`;
  title.textContent = `${formatTeamName(match.homeTeam)} vs ${formatTeamName(match.awayTeam)}`;
  header.append(meta, title);

  const odds = document.createElement("p");
  const hasOdds = hasCompleteOdds(match);
  odds.textContent = hasOdds
    ? `배당 ${match.homeOdds} / ${match.drawOdds} / ${match.awayOdds} · 허용 오차 ${match.tolerance || "0.05"}`
    : "API 배당 대기중 · 직접 입력으로 검색 가능";
  const matchResult = document.createElement("p");
  matchResult.className = "home-today-result";
  matchResult.textContent = formatMatchResultText(match);
  matchResult.hidden = !matchResult.textContent;

  const breakdown = analysis.breakdown || calculateResultBreakdown([]);
  const inlineRate = document.createElement("p");
  inlineRate.className = `inline-odds-rate ${getInlineOddsConfidence(breakdown).className}`;
  inlineRate.textContent = hasOdds
    ? Number(breakdown.knownMatches || 0) <= 0
      ? "유사배당 전적 없음"
      : Number(breakdown.knownMatches || 0) < 15
        ? `유사배당 ${breakdown.knownMatches}경기`
        : `홈 ${breakdown.homeRate || "0%"} · 무 ${breakdown.drawRate || "0%"} · 원정 ${breakdown.awayRate || "0%"} · 표본 ${breakdown.knownMatches}`
    : "배당 입력 후 확인 가능";
  const stats = document.createElement("div");
  stats.className = "today-card-stats";
  if (hasOdds) {
    stats.append(
      createTodaySummaryItem("유사 경기", String(breakdown.totalMatches)),
      createTodaySummaryItem("결과 확인", String(breakdown.knownMatches)),
      createTodaySummaryItem("홈승", `${breakdown.homeWins}승 ${breakdown.homeRate}`, "outcome-home"),
      createTodaySummaryItem("무승부", `${breakdown.draws}무 ${breakdown.drawRate}`, "outcome-draw"),
      createTodaySummaryItem("원정승", `${breakdown.awayWins}승 ${breakdown.awayRate}`, "outcome-away")
    );
  } else {
    stats.append(
      createTodaySummaryItem("일정", "확인됨"),
      createTodaySummaryItem("API 배당", "대기"),
      createTodaySummaryItem("검색", "직접 입력")
    );
  }

  const actions = document.createElement("div");
  actions.className = "today-card-actions";
  const searchButton = document.createElement("button");
  searchButton.type = "button";
  searchButton.textContent = hasOdds ? "유사 배당 검색" : "배당 직접 입력";
  searchButton.addEventListener("click", (event) => {
    event.stopImmediatePropagation();
    openOddsSearchForTodayMatch(match, analysis);
  });
  const viewDetailButton = document.createElement("button");
  viewDetailButton.type = "button";
  viewDetailButton.className = "today-card-detail-button";
  viewDetailButton.textContent = "상세분석 보기";
  viewDetailButton.addEventListener("click", (event) => {
    event.stopImmediatePropagation();
    openMatchDetail(match);
  });
  actions.append(searchButton, viewDetailButton);

  card.append(header, odds, matchResult, inlineRate, stats, actions);
  card.addEventListener("click", (event) => {
    if (isInteractiveElement(event.target)) return;
    openMatchDetail(match);
  });
  card.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" && event.key !== " ") return;
    if (isInteractiveElement(event.target)) return;
    event.preventDefault();
    openMatchDetail(match);
  });
  return card;
}

function renderTodayCenter(todayMatches = getStorageTodayMatches()) {
  if (typeof document === "undefined") return;
  const list = document.getElementById("today-center-list");

  const displayMatches = deduplicateTodayMatches(todayMatches);
  if (displayMatches.length === 0) {
    const values = {
      "today-center-count": "0",
      "today-center-ready-count": "0",
      "today-center-known-count": "0"
    };

    for (const [id, value] of Object.entries(values)) {
      const element = document.getElementById(id);
      if (element) element.textContent = value;
    }

    if (list) {
      const empty = document.createElement("div");
      empty.className = "empty-state compact-empty";
      empty.textContent = "불러온 경기가 없습니다. 날짜나 리그를 바꿔 다시 업데이트해보세요.";
      list.replaceChildren(empty);
    }
    return;
  }

  const searchableMatches = getSearchableMatches();
  const visibleTodayMatches = displayMatches.slice(0, HOME_TODAY_MATCH_LIMIT);
  const analyses = visibleTodayMatches.map((match) => getTodayMatchAnalysis(match, searchableMatches));
  const readyCount = displayMatches.filter(hasCompleteOdds).length;
  const knownCount = analyses.reduce((sum, analysis) => sum + (analysis.breakdown?.knownMatches || 0), 0);
  const values = {
    "today-center-count": String(displayMatches.length),
    "today-center-ready-count": String(readyCount),
    "today-center-known-count": String(knownCount)
  };

  for (const [id, value] of Object.entries(values)) {
    const element = document.getElementById(id);
    if (element) element.textContent = value;
  }

  updateTodayAnalysisDataStatus(searchableMatches);
  if (!list) return;

  list.replaceChildren(...visibleTodayMatches.map((match, index) => createTodayCenterCard(match, analyses[index])));
}

function renderTodayMatchAnalysis(analysis) {
  const resultElement = document.getElementById("today-analysis-result");
  if (!resultElement) return;

  resultElement.hidden = false;
  resultElement.replaceChildren();

  if (analysis.error) {
    const empty = document.createElement("div");
    empty.className = "empty-state compact-empty";
    empty.textContent = analysis.error;
    resultElement.appendChild(empty);
    return;
  }

  const breakdown = analysis.breakdown;
  const summary = document.createElement("div");
  summary.className = "today-summary-grid";
  summary.append(
    createTodaySummaryItem("유사 경기", String(breakdown.totalMatches)),
    createTodaySummaryItem("표본", String(breakdown.knownMatches))
  );
  resultElement.appendChild(summary);

  const oddsSummary = document.createElement("p");
  oddsSummary.className = "today-odds-summary-line";
  oddsSummary.textContent = getTodayOddsSummaryText(breakdown);
  resultElement.appendChild(oddsSummary);

  const memo = document.createElement("p");
  memo.className = "analysis-memo";
  memo.textContent = getResultBreakdownMemo(breakdown) || "조건에 맞는 과거 유사 경기를 확인했습니다.";
  resultElement.appendChild(memo);

  if (analysis.matches.length > 0) {
    const samples = document.createElement("div");
    samples.className = "today-sample-list";
    samples.append(...analysis.matches.slice(0, 3).map(createTodaySampleItem));
    resultElement.appendChild(samples);
  }
}

function setLiveOddsStatus(message) {
  const element = document.getElementById("live-odds-status");
  if (element) element.textContent = message;
}

function initializeLiveOddsControls() {
  const dateInput = document.getElementById("live-odds-date");
  if (dateInput && !dateInput.value) dateInput.value = getTodayKey();
  updateLiveOddsLeagueOptions();
  renderTodayCenter();
}

function setLiveOddsDate(dateText, shouldLoad = true) {
  const dateInput = document.getElementById("live-odds-date");
  if (dateInput) dateInput.value = getTodayKey(dateText || getTodayKey());
  setLiveOddsStatus("날짜를 바꿨습니다. 해당 날짜의 경기/배당을 다시 확인합니다.");
  if (shouldLoad) loadLiveOddsFromApi();
}

function getLiveOddsCriteria() {
  const date = document.getElementById("live-odds-date")?.value || getTodayKey();
  const league = document.getElementById("live-odds-league")?.value || "ALL";
  return { date, league };
}

function normalizeTodayCsvMatch(match = {}) {
  const homeOdds = match.homeOdds ?? match.home ?? match.home_odd ?? "";
  const drawOdds = match.drawOdds ?? match.draw ?? match.draw_odd ?? "";
  const awayOdds = match.awayOdds ?? match.away ?? match.away_odd ?? "";

  return {
    id: match.id || `today-csv-${match.date || getTodayKey()}-${match.homeTeam || ""}-${match.awayTeam || ""}`,
    date: getTodayKey(match.date || match.commenceTime || getTodayKey()),
    league: normalizeLeagueNameForStorage(match.league || match.leagueKey || "EPL"),
    homeTeam: normalizeTeamNameForStorage(match.homeTeam || match.home_team || ""),
    awayTeam: normalizeTeamNameForStorage(match.awayTeam || match.away_team || ""),
    startTime: String(match.startTime || match.kickoff || match.time || "").trim(),
    status: String(match.status || match.fixtureStatus || match.statusShort || "").trim(),
    homeOdds: String(homeOdds || "").trim(),
    drawOdds: String(drawOdds || "").trim(),
    awayOdds: String(awayOdds || "").trim(),
    result: String(match.result || "UNKNOWN").trim().toUpperCase() || "UNKNOWN",
    score: String(match.score || "").trim(),
    updatedAt: String(match.updatedAt || match.oddsUpdatedAt || "").trim(),
    tolerance: match.tolerance || "0.05",
    source: match.source || "CSV"
  };
}

function normalizeLiveOddsMatch(match = {}) {
  return normalizeTodayCsvMatch({
    ...match,
    id: match.id || match.fixtureId || `api-${match.date || getTodayKey()}-${match.homeTeam || ""}-${match.awayTeam || ""}`,
    source: match.source || "API"
  });
}

async function fetchLiveOdds(criteria = getLiveOddsCriteria()) {
  if (typeof fetch !== "function") {
    return { error: "이 브라우저에서는 API 호출을 사용할 수 없습니다.", matches: [] };
  }

  const params = new URLSearchParams();
  params.set("date", criteria.date || getTodayKey());
  params.set("league", criteria.league || "ALL");
  if (criteria.mode) params.set("mode", criteria.mode);
  if (criteria.days) params.set("days", String(criteria.days));
  params.set("_", String(Date.now()));

  const headers = { Accept: "application/json" };
  if (criteria.mode === "history") {
    const accessToken = cloudAccountService?.getAccessToken?.() || "";
    if (accessToken) headers.Authorization = `Bearer ${accessToken}`;
  }

  let response;
  const requestController = typeof AbortController === "function" ? new AbortController() : null;
  const requestTimeout = requestController ? setTimeout(() => requestController.abort(), 12000) : null;
  try {
    response = await fetch(`${LIVE_ODDS_ENDPOINT}?${params.toString()}`, {
      cache: "no-store",
      headers,
      ...(requestController ? { signal: requestController.signal } : {})
    });
  } catch (error) {
    appTelemetry?.recordApiFailure({ api: "live_odds", status: 0, reason: "network" });
    throw error;
  } finally {
    if (requestTimeout) clearTimeout(requestTimeout);
  }

  let payload = {};
  try {
    payload = await response.json();
  } catch (_error) {
    payload = {};
  }

  if (!response.ok || payload.error) {
    appTelemetry?.recordApiFailure({
      api: "live_odds",
      status: response.status,
      reason: response.ok ? "provider" : "http"
    });
    return {
      error: payload.error || `API 응답을 불러오지 못했습니다. 상태 코드 ${response.status}`,
      matches: []
    };
  }

  const matches = Array.isArray(payload.matches) ? payload.matches.map(normalizeLiveOddsMatch) : [];
  return { error: "", matches, meta: payload.meta || {} };
}

async function fetchApiHistoryOdds(criteria = {}) {
  const searchCriteria = getOddsSearchCriteria();
  const league = String(criteria.league || searchCriteria.league || "ALL").trim();
  return fetchLiveOdds({
    date: criteria.date || getTodayKey(),
    league: league === "ALL" ? "EPL" : league,
    mode: "history",
    days: criteria.days || 7
  });
}

async function loadLiveOddsFromApi() {
  const button = document.getElementById("load-live-odds");
  if (!requireAdminMode()) return { error: "관리자 권한이 필요합니다.", matches: [] };
  const criteria = getLiveOddsCriteria();

  if (button) button.disabled = true;
  setLiveOddsStatus("경기 일정과 배당을 확인하는 중입니다.");

  try {
    const result = await fetchLiveOdds(criteria);
    if (result.error) {
      setLiveOddsStatus(`${result.error} 잠시 후 다시 시도하거나 CSV 직접 추가를 이용하세요.`);
      return result;
    }

    if (result.matches.length === 0) {
      const leagueText = criteria.league === "ALL" ? "전체 리그" : getLeagueLabel(criteria.league);
      const emptyReason = criteria.league === "WORLDCUP"
        ? "월드컵 일정이 API에 아직 제공되지 않았습니다."
        : "경기 일정이 없습니다. 비시즌이거나 API 제공 전일 수 있습니다.";
      setLiveOddsStatus(`${criteria.date} ${leagueText} ${emptyReason} 날짜를 바꾸거나 CSV로 직접 추가해보세요.`);
      renderTodayCenter([]);
      return result;
    }

    const merged = mergeTodayMatches(result.matches);
    const visibleMatches = result.matches;
    renderTodayCenter(visibleMatches);
    const oddsCount = result.meta?.oddsCount ?? result.matches.filter(hasCompleteOdds).length;
    const oddsMessage = oddsCount > 0
      ? `배당 확인 ${oddsCount}개`
      : "API가 일정은 줬지만 배당은 아직 제공하지 않았습니다. 경기 카드의 배당 직접 입력으로 검색할 수 있습니다.";
    setLiveOddsStatus(`경기 ${result.matches.length}개 업데이트 / ${oddsMessage} / 새로 추가 ${merged.addedCount}개`);
    return { ...result, ...merged, visibleMatches };
  } catch (error) {
    const message = error instanceof Error ? error.message : "알 수 없는 오류";
    setLiveOddsStatus(`경기 업데이트 중 문제가 발생했습니다. ${message}`);
    return { error: message, matches: [] };
  } finally {
    if (button) button.disabled = false;
  }
}

async function loadApiHistoryForSearch() {
  if (!requireAdminMode()) return { error: "관리자 권한이 필요합니다.", matches: [] };
  const button = document.getElementById("load-api-history");
  const criteria = getOddsSearchCriteria();
  const targetLeague = criteria.league && criteria.league !== "ALL" ? getLeagueLabel(criteria.league) : "EPL";
  const targetLeagueKey = criteria.league && criteria.league !== "ALL" ? criteria.league : "EPL";
  const chunks = getApiHistoryChunks({ endDate: getTodayKey(), totalDays: 30, chunkDays: 7 });
  const cache = getApiHistoryCache();
  const pendingChunks = chunks.filter((chunk) => !cache[getApiHistoryCacheKey({ league: targetLeagueKey, endDate: chunk.endDate, days: chunk.days })]);
  if (button) button.disabled = true;
  if (pendingChunks.length === 0) {
    setOddsSearchStatus(`최근 30일 ${targetLeague} API 배당은 이미 확인했습니다. 다른 리그를 선택하거나 나중에 다시 시도하세요.`);
    return { error: "", matches: [], skipped: true };
  }
  setOddsSearchStatus(`최근 30일 API 배당을 추가하는 중입니다. 범위: ${targetLeague} · ${pendingChunks.length}개 구간`);

  try {
    const allMatches = [];
    const errors = [];
    let checkedMatches = 0;
    for (let index = 0; index < pendingChunks.length; index += 1) {
      const chunk = pendingChunks[index];
      setOddsSearchStatus(`최근 30일 API 배당 추가 중: ${targetLeague} ${index + 1}/${pendingChunks.length}구간`);
      const result = await fetchApiHistoryOdds({ league: targetLeagueKey, date: chunk.endDate, days: chunk.days });
      const cacheKey = getApiHistoryCacheKey({ league: targetLeagueKey, endDate: chunk.endDate, days: chunk.days });
      cache[cacheKey] = {
        checkedAt: getCurrentTimestamp(),
        matchCount: result.matches?.length || 0,
        error: result.error || ""
      };
      if (result.error) errors.push(result.error);
      const matches = Array.isArray(result.matches) ? result.matches : [];
      checkedMatches += matches.length;
      allMatches.push(...matches.map((match) => ({ ...match, source: "API 과거 배당" })));
    }
    setApiHistoryCache(cache);

    const completeMatches = allMatches.filter(hasCompleteOdds);
    const noOddsCount = Math.max(0, checkedMatches - completeMatches.length);
    if (completeMatches.length === 0) {
      const errorText = errors.length ? ` / 일부 오류 ${errors.length}건` : "";
      setOddsSearchStatus(`최근 30일 API 배당에서 추가할 완성 배당이 없습니다. 확인 ${checkedMatches}경기 / 배당 없음 ${noOddsCount}경기${errorText}`);
      return { error: errors[0] || "", matches: allMatches };
    }

    const saveResult = saveMatches(completeMatches);
    updateDashboard(saveResult.matches);
    updateStoredMatchStatus(saveResult.matches);
    updateSearchLeagueStatus(getSearchableMatches());
    renderStoredMatches(getSearchableMatches());
    const errorText = errors.length ? ` / 일부 오류 ${errors.length}건` : "";
    setOddsSearchStatus(`최근 30일 API 배당 추가 완료: 새로 저장 ${saveResult.savedCount}경기 / 중복 ${saveResult.duplicateCount || 0}경기 / 배당 없음 ${noOddsCount}경기${errorText}`);
    runOddsSearchFromCurrentCriteria();
    return { error: errors[0] || "", matches: allMatches, savedCount: saveResult.savedCount, duplicateCount: saveResult.duplicateCount };
  } catch (error) {
    const message = error instanceof Error ? error.message : "알 수 없는 오류";
    setOddsSearchStatus(`최근 30일 API 배당 추가 중 문제가 발생했습니다. ${message}`);
    return { error: message, matches: [] };
  } finally {
    if (button) button.disabled = false;
  }
}

function downloadTodayCsvSample() {
  const today = getTodayKey();
  const sample = [
    CSV_HEADER_LINE,
    `${today},EPL,Arsenal,Chelsea,1.95,3.30,3.80,UNKNOWN,`,
    `${today},LALIGA,Barcelona,Valencia,1.55,4.10,6.20,UNKNOWN,`
  ].join("\n");
  const blob = new Blob([sample], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "today-odds-sample.csv";
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function filterTodayCsvMatches(matches, criteria = getLiveOddsCriteria()) {
  const date = String(criteria.date || "").trim();
  const league = String(criteria.league || "ALL").trim();
  return matches.filter((match) => {
    if (date && match.date !== date) return false;
    if (league && league !== "ALL" && !leagueMatchesFixture(match.league, league)) return false;
    return true;
  });
}

async function parseTodayCsvFiles(files, criteria = getLiveOddsCriteria()) {
  const fileList = Array.from(files || []);
  if (fileList.length === 0) return { error: "CSV 파일을 선택해주세요.", matches: [] };

  const parseResults = await Promise.all(fileList.map(async (file) => {
    const text = await file.text();
    return { ...parseCsvPreview(text), fileName: file.name };
  }));
  const merged = mergeCsvParseResults(parseResults);
  if (merged.error) return { error: merged.error, matches: [] };

  const validation = validateCsvRows(merged.rows);
  if (validation.validRows.length === 0) {
    const firstError = validation.errorRows[0]?.messages?.join(" ") || "정상 행이 없습니다.";
    return { error: firstError, matches: [] };
  }

  const matches = filterTodayCsvMatches(validation.validRows.map(normalizeTodayCsvMatch), criteria);
  return {
    error: "",
    matches,
    totalRows: validation.validRows.length,
    errorCount: validation.errorRows.length,
    duplicateCount: validation.duplicateRows.length
  };
}

async function loadTodayCsvFiles(files) {
  if (!requireAdminMode()) return { error: "관리자 권한이 필요합니다.", matches: [] };
  const input = document.getElementById("today-csv-input");
  const button = document.getElementById("download-today-csv-sample");
  const criteria = getLiveOddsCriteria();

  if (button) button.disabled = true;
  setLiveOddsStatus("오늘 경기 CSV를 읽는 중입니다.");

  try {
    const result = await parseTodayCsvFiles(files || input?.files, criteria);
    if (result.error) {
      setLiveOddsStatus(result.error);
      return result;
    }

    if (result.matches.length === 0) {
      setLiveOddsStatus("선택한 날짜/리그에 맞는 CSV 경기가 없습니다.");
      renderTodayCenter();
      return result;
    }

    const merged = mergeTodayMatches(result.matches);
    const visibleMatches = filterTodayCsvMatches(result.matches, criteria);
    renderTodayCenter(visibleMatches);
    setLiveOddsStatus(`CSV 경기 ${result.matches.length}개 반영 / 새로 추가 ${merged.addedCount}개 / 중복 제외 ${merged.duplicateCount}개`);
    return { ...result, ...merged, visibleMatches };
  } catch (error) {
    const message = error instanceof Error ? error.message : "알 수 없는 오류";
    setLiveOddsStatus(`CSV 처리 중 문제가 발생했습니다. ${message}`);
    return { error: message, matches: [] };
  } finally {
    if (button) button.disabled = false;
  }
}

function wireTodayCsvImport() {
  const input = document.getElementById("today-csv-input");
  const totoRoundInput = document.getElementById("toto-round-csv-input");
  const protoInput = document.getElementById("proto-csv-input");
  const sampleButton = document.getElementById("download-today-csv-sample");
  const apiButton = document.getElementById("load-live-odds");
  if (!input && !totoRoundInput && !protoInput && !sampleButton && !apiButton) return;

  // This panel is hidden for ordinary users. Initializing it here scans the
  // full local match archive before the visible today screen can respond.
  // The controls already have safe HTML defaults for administrator actions.
  if (apiButton) {
    apiButton.addEventListener("click", () => {
      loadLiveOddsFromApi();
    });
  }
  if (input) {
    input.addEventListener("change", () => {
      loadTodayCsvFiles(input.files);
    });
  }
  if (totoRoundInput) {
    totoRoundInput.addEventListener("change", async () => {
      const result = await loadTotoRoundCsvFile(totoRoundInput.files?.[0]);
      setLiveOddsStatus(result.error || `승무패 회차 ${result.pack.currentRound.fixtures.length}경기를 저장했습니다.`);
      if (!result.error) importTotoRoundPack();
    });
  }
  if (protoInput) {
    protoInput.addEventListener("change", async () => {
      const result = await loadProtoCsvFile(protoInput.files?.[0]);
      setLiveOddsStatus(result.error || `프로토 게임 ${result.pack.markets.length}개를 저장했습니다.`);
    });
  }
  if (sampleButton) {
    sampleButton.addEventListener("click", () => {
      if (requireAdminMode()) downloadTodayCsvSample();
    });
  }
  document.querySelectorAll("[data-live-date-offset]").forEach((button) => {
    button.addEventListener("click", () => {
      if (!requireAdminMode()) return;
      setLiveOddsDate(getDateOffsetKey(button.dataset.liveDateOffset || 0));
    });
  });
  document.querySelectorAll("[data-live-date-weekend]").forEach((button) => {
    button.addEventListener("click", () => {
      if (!requireAdminMode()) return;
      const weekendMode = button.dataset.liveDateWeekend || "next";
      setLiveOddsDate(weekendMode === "previous" ? getPreviousWeekendKey() : getNextWeekendKey());
    });
  });
  document.querySelectorAll("[data-live-date-preset]").forEach((button) => {
    button.addEventListener("click", () => {
      setLiveOddsDate(button.dataset.liveDatePreset);
    });
  });
  document.getElementById("live-odds-date")?.addEventListener("change", () => {
    setLiveOddsStatus("날짜를 바꿨습니다. API로 불러오기 또는 CSV 선택을 다시 실행하세요.");
  });
  document.getElementById("live-odds-league")?.addEventListener("change", () => {
    setLiveOddsStatus("리그를 바꿨습니다. CSV를 다시 선택하면 해당 리그만 반영됩니다.");
  });
}

function wireHomeTodayMatches() {
  const refreshButton = document.getElementById("refresh-home-today");
  const list = document.getElementById("home-today-list");
  const dateStrip = document.getElementById("fixture-date-strip");
  if (!refreshButton && !list && !dateStrip) return;

  if (refreshButton) refreshButton.addEventListener("click", loadHomeTodayMatches);
  const categoryFilter = document.getElementById("fixture-category-filter");
  if (categoryFilter) {
    categoryFilter.value = selectedFixtureCategory;
    categoryFilter.addEventListener("change", () => {
      selectedFixtureCategory = categoryFilter.value || "ALL";
      const date = selectedFixtureDate || getTodayKey();
      const matches = getCachedFixturesForDate(date);
      const visibleMatches = getVisibleFixturesForDate(matches, date);
      renderDateFixtures(matches, date);
      setDateFixtureStatus(`${visibleMatches.length}경기`);
    });
  }
  const searchToggle = document.getElementById("fixture-search-toggle");
  const searchPanel = document.getElementById("fixture-search-panel");
  const searchInput = document.getElementById("fixture-search-input");
  const setSearchOpen = (open) => {
    if (!searchToggle || !searchPanel) return;
    searchPanel.hidden = !open;
    searchToggle.setAttribute("aria-expanded", String(open));
    searchToggle.setAttribute("aria-label", open ? "경기 검색 닫기" : "경기 검색 열기");
    searchToggle.classList.toggle("active", open);
    if (open) searchInput?.focus();
  };
  searchToggle?.addEventListener("click", () => setSearchOpen(searchPanel?.hidden !== false));
  searchInput?.addEventListener("input", () => {
    selectedFixtureQuery = searchInput.value.trim();
    const date = selectedFixtureDate || getTodayKey();
    const matches = getCachedFixturesForDate(date);
    const visibleMatches = getVisibleFixturesForDate(matches, date);
    renderDateFixtures(matches, date);
    setDateFixtureStatus(`${visibleMatches.length}경기`);
  });
  searchInput?.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      searchInput.blur();
      setSearchOpen(false);
    }
  });
  const majorHeading = document.querySelector(".home-major-heading strong");
  const upsetHeading = document.querySelector(".home-upset-heading strong");
  if (majorHeading) majorHeading.textContent = translateUiText("오늘 주요 경기");
  if (upsetHeading) upsetHeading.textContent = "오늘 이변 후보";

  const today = getTodayKey();
  selectedFixtureDate = today;
  renderFixtureDateTabs(today);
  const cachedTodayMatches = getCachedFixturesForDate(today);
  homeTodayMatches = sortHomeTodayMatches(cachedTodayMatches);
  renderHomeTodayMatches(homeTodayMatches, { status: cachedTodayMatches.length > 0 ? "저장된 오늘 경기" : "오늘 경기 불러오는 중" });
  renderDateFixtures(cachedTodayMatches, today, { loading: cachedTodayMatches.length === 0 });
  const cachedVisibleCount = getVisibleFixturesForDate(cachedTodayMatches, today).length;
  setDateFixtureStatus(cachedTodayMatches.length > 0 ? `${cachedVisibleCount}경기 · 최신 일정 확인 중` : "경기 일정 확인 중");
  if ((window.location.hash || "#search") === "#today") ensureHomeTodayMatchesLoaded();
}

function ensureHomeTodayMatchesLoaded() {
  if (homeTodayLoadStarted) return;
  homeTodayLoadStarted = true;
  loadHomeTodayMatches();
}

function setOddsSearchError(message) {
  const element = document.getElementById("odds-search-error");
  if (element) element.textContent = message;
}

function setOddsSearchStatus(message) {
  const element = document.getElementById("odds-search-status");
  if (element) element.textContent = message;
}

function getSearchStatusDetails({ storedCount, pendingCount, criteria, resultCount }) {
  const tolerance = criteria.tolerance === "CUSTOM" ? criteria.customTolerance : criteria.tolerance;
  const teamQuery = String(criteria.teamQuery || "").trim();
  const leagueText = criteria.league && criteria.league !== "ALL" ? `${formatLeagueName(criteria.league)} · ` : "";
  const teamText = teamQuery ? ` · 팀명 ${teamQuery}` : "";
  const pendingText = pendingCount > 0 ? ` · 미리보기 ${pendingCount}건 포함` : "";
  return `${leagueText}배당 ${criteria.homeOdds || "-"} / ${criteria.drawOdds || "-"} / ${criteria.awayOdds || "-"} · 오차 ${tolerance || "-"} · 결과 ${resultCount}건${teamText}${pendingText}`;
}

function renderValidationRows(validation) {
  const body = document.getElementById("validation-errors-body");
  if (!body) return;

  const rows = [
    ...validation.errorRows.map((row) => ({ type: "오류 행", rowNumber: row.rowNumber, messages: row.messages })),
    ...validation.duplicateRows.map((row) => ({ type: "중복 행", rowNumber: row.rowNumber, messages: row.messages }))
  ];

  if (rows.length === 0) {
    const tableRow = document.createElement("tr");
    const cell = document.createElement("td");
    cell.colSpan = 3;
    cell.textContent = "오류 행과 중복 행이 없습니다.";
    tableRow.appendChild(cell);
    body.replaceChildren(tableRow);
    return;
  }

  const renderedRows = rows.map((row) => {
    const tableRow = document.createElement("tr");
    const rowNumber = document.createElement("td");
    const type = document.createElement("td");
    const message = document.createElement("td");

    rowNumber.textContent = String(row.rowNumber);
    type.textContent = row.type;
    message.textContent = row.messages.join(" ");
    tableRow.append(rowNumber, type, message);
    return tableRow;
  });

  body.replaceChildren(...renderedRows);
}

function renderPreviewMessage(message) {
  const previewBody = document.getElementById("preview-table-body");
  if (!previewBody) return;

  const row = document.createElement("tr");
  const cell = document.createElement("td");
  cell.colSpan = CSV_HEADERS.length;
  cell.textContent = message;
  row.appendChild(cell);
  previewBody.replaceChildren(row);
}

function setCsvError(message) {
  const errorElement = document.getElementById("csv-error");
  if (errorElement) {
    errorElement.classList.remove("notice");
    errorElement.textContent = message;
  }
}

function setCsvNotice(message) {
  const errorElement = document.getElementById("csv-error");
  if (errorElement) {
    errorElement.classList.add("notice");
    errorElement.textContent = message;
  }
}

function readCsvFile(file) {
  return new Promise((resolve) => {
    if (!file) {
      resolve({ fileName: "", error: "CSV 파일을 읽을 수 없습니다.", rows: [] });
      return;
    }

    const reader = new FileReader();
    reader.addEventListener("load", () => {
      const result = parseCsvPreview(reader.result || "");
      resolve({
        fileName: file.name || "CSV 파일",
        error: result.error || "",
        notice: result.notice || "",
        rows: result.rows || []
      });
    });
    reader.addEventListener("error", () => {
      resolve({ fileName: file.name || "CSV 파일", error: "CSV 파일을 읽을 수 없습니다.", rows: [] });
    });
    reader.readAsText(file, "utf-8");
  });
}

function mergeCsvParseResults(results) {
  let nextRowNumber = 2;
  const rows = [];
  const fileErrors = [];
  const notices = new Set();

  for (const result of results) {
    if (result.error) {
      fileErrors.push(`${result.fileName}: ${result.error}`);
      continue;
    }

    if (result.notice) notices.add(result.notice);

    for (const row of result.rows) {
      rows.push({
        ...row,
        sourceFile: result.fileName,
        rowNumber: nextRowNumber
      });
      nextRowNumber += 1;
    }
  }

  return {
    rows,
    fileErrors,
    notice: [...notices].join(" ")
  };
}

function applyCsvRowsToUploadState({ rows, fileErrors = [], notice = "", fileCount = 1 }) {
  if (rows.length === 0) {
    setPendingValidRows([]);
    setValidationSummary({ validRows: 0, errorRows: fileErrors.length, duplicateRows: 0 });
    renderPreviewMessage("미리보기할 데이터가 없습니다.");
    renderValidationRows({
      errorRows: fileErrors.map((message, index) => ({ rowNumber: index + 1, messages: [message] })),
      duplicateRows: []
    });
    setCsvError(fileErrors.join(" ") || "미리보기할 데이터가 없습니다.");
    setSaveStatus("검색할 정상 행이 없습니다. CSV 오류 행을 확인해주세요.");
    return;
  }

  const validation = validateCsvRows(rows);
  setPendingValidRows(validation.validRows);
  renderPreviewRows(rows);
  setValidationSummary({
    validRows: validation.summary.validRows,
    errorRows: validation.summary.errorRows + fileErrors.length,
    duplicateRows: validation.summary.duplicateRows
  });
  renderValidationRows({
    errorRows: [
      ...fileErrors.map((message, index) => ({ rowNumber: index + 1, messages: [message] })),
      ...validation.errorRows
    ],
    duplicateRows: validation.duplicateRows
  });
  setSaveButtonState(currentValidRows);

  const prefix = fileCount > 1 ? `${fileCount}개 CSV를 읽었습니다. ` : "";
  const statusMessage = currentValidRows.length > 0
    ? `${prefix}${currentValidRows.length}개의 정상 행을 경기 데이터에서 바로 검색할 수 있습니다. 새로고침 후에도 남기려면 저장하기를 눌러주세요.`
    : `${prefix}검색할 정상 행이 없습니다. CSV 오류 행을 확인해주세요.`;
  setSaveStatus(statusMessage);

  if (fileErrors.length > 0) {
    setCsvError(`${fileErrors.length}개 파일은 읽지 못했습니다. ${fileErrors.join(" ")}`);
  } else {
    setCsvNotice(notice || `${fileCount}개 CSV를 읽었습니다.`);
  }

  updateStoredMatchStatus();
  renderStoredMatches(getSearchableMatches());
}

function handleCsvFile(file) {
  if (!file) return;

  const reader = new FileReader();
  reader.addEventListener("load", () => {
    const result = parseCsvPreview(reader.result || "");

    if (result.error) {
      setCsvError(result.error);
      renderPreviewMessage("미리보기할 데이터가 없습니다.");
      setValidationSummary({ validRows: 0, errorRows: 0, duplicateRows: 0 });
      renderValidationRows({ errorRows: [], duplicateRows: [] });
      setPendingValidRows([]);
      setSaveStatus("검증 완료 후 정상 행이 있으면 저장할 수 있습니다.");
      return;
    }

    const validation = validateCsvRows(result.rows);
    setPendingValidRows(validation.validRows);
    setCsvNotice(result.notice || "");
    renderPreviewRows(result.rows);
    setValidationSummary(validation.summary);
    renderValidationRows(validation);
    setSaveButtonState(currentValidRows);
    setSaveStatus(
      currentValidRows.length > 0
        ? `${currentValidRows.length}개의 정상 행을 경기 데이터에서 바로 검색할 수 있습니다. 새로고침 후에도 남기려면 저장하기를 눌러주세요.`
        : "검색할 정상 행이 없습니다. CSV 오류 행을 확인해주세요."
    );
    updateStoredMatchStatus();
    renderStoredMatches(getSearchableMatches());
  });
  reader.addEventListener("error", () => {
    setCsvError("CSV 파일을 읽을 수 없습니다. 파일을 다시 선택해주세요.");
    renderPreviewMessage("미리보기할 데이터가 없습니다.");
    setValidationSummary({ validRows: 0, errorRows: 0, duplicateRows: 0 });
    renderValidationRows({ errorRows: [], duplicateRows: [] });
    setPendingValidRows([]);
    setSaveStatus("검증 완료 후 정상 행이 있으면 저장할 수 있습니다.");
  });
  reader.readAsText(file, "utf-8");
}

async function handleCsvFiles(files) {
  const fileList = Array.from(files || []);
  if (fileList.length === 0) return;

  if (fileList.length === 1) {
    handleCsvFile(fileList[0]);
    return;
  }

  setCsvNotice(`${fileList.length}개 CSV를 읽는 중입니다.`);
  const results = await Promise.all(fileList.map(readCsvFile));
  const merged = mergeCsvParseResults(results);
  applyCsvRowsToUploadState({
    ...merged,
    fileCount: fileList.length
  });
}

function wireCsvPreview() {
  const input = document.getElementById("csv-file-input");
  if (!input) return;

  input.addEventListener("change", (event) => {
    if (requireAdminMode()) handleCsvFiles(event.target.files);
    else event.target.value = "";
  });
}

function wireDefaultDataImport() {
  const button = document.getElementById("fetch-default-data");
  const downloadLink = document.getElementById("default-data-download-link");

  if (downloadLink) {
    downloadLink.addEventListener("click", async () => {
      if (!requireAdminMode()) return;
      const league = document.getElementById("default-data-league")?.value || "EPL";
      const season = document.getElementById("default-data-season")?.value || "2025-2026";
      const source = getDefaultDataSource(league, season);
      const url = source?.url || "https://www.football-data.co.uk/";
      const clipboard = typeof navigator === "undefined" ? null : navigator.clipboard;

      try {
        if (clipboard?.writeText) {
          await clipboard.writeText(url);
          setDefaultDataStatus(`다운로드 주소를 복사했습니다. 주소: ${url}`);
          return;
        }
      } catch (_error) {
        // Clipboard can be blocked in local file mode; showing the URL is still useful.
      }

      setDefaultDataStatus(`다운로드 주소: ${url}`);
    });
  }

  if (!button) return;

  button.addEventListener("click", async () => {
    if (!requireAdminMode()) return;
    const league = document.getElementById("default-data-league")?.value || "EPL";
    const season = document.getElementById("default-data-season")?.value || "2025-2026";
    const source = getDefaultDataSource(league, season);
    const originalButtonText = button.textContent;

    setDefaultDataStatus("기본 데이터를 준비하는 중입니다. 잠시만 기다려주세요.");
    button.textContent = "불러오는 중";
    button.disabled = true;
    await waitForUiUpdate();

    const result = await importDefaultData({ league, season });

    if (result.error) {
      setDefaultDataStatus(result.error);
      button.textContent = originalButtonText;
      button.disabled = false;
      return;
    }

    setPendingValidRows([]);
    updateDashboard(result.matches);
    updateStoredMatchStatus(result.matches);
    updateDataStatus();
    renderStoredMatches(result.matches);
    renderOddsSearchResults([], "조건에 맞는 유사 배당 경기가 없습니다.", { show: false });
    renderResultBreakdown([]);
      setSaveStatus(`기본 데이터 새로 저장 ${result.importedCount}개 / 중복 제외 ${result.duplicateCount || 0}개. 현재 저장된 전체 경기 수: ${result.matches.length}개`);
    setDefaultDataStatus(
      result.mode === "embedded"
        ? `내장 기본 데이터 새로 저장 ${result.importedCount}개 / 중복 제외 ${result.duplicateCount || 0}개.${result.fileCount ? ` CSV ${result.fileCount}개 기준입니다.` : ""}`
        : `기본 데이터 새로 저장 ${result.importedCount}개 / 중복 제외 ${result.duplicateCount || 0}개.`
    );
    setCsvNotice(FOOTBALL_DATA_NOTICE);
    button.textContent = originalButtonText;
    button.disabled = false;
  });
}

function setFiveLeagueUpdateStatus(message) {
  const element = document.getElementById("update-five-leagues-status");
  if (element) element.textContent = message;
}

function wireFiveLeagueUpdate() {
  const button = document.getElementById("update-five-leagues");
  if (!button) return;

  button.addEventListener("click", async () => {
    if (!requireAdminMode()) return;
    setFiveLeagueUpdateStatus("5대 리그 데이터팩을 확인하는 중입니다.");
    button.disabled = true;

    const result = await autoUpdateLeagues();

    if (!result.error) {
      setPendingValidRows([]);
      updateDashboard(result.matches);
      updateStoredMatchStatus(result.matches);
      renderStoredMatches(getSearchableMatches());
      renderOddsSearchResults([], "조건에 맞는 유사 배당 경기가 없습니다.", { show: false });
      renderResultBreakdown([]);
    }

    updateDataStatus();
    setAutoUpdateStatus(result.message);
    setFiveLeagueUpdateStatus(result.error ? `${result.message} 자동 가져오기가 차단된 경우 데이터 추가를 이용해주세요.` : result.message);
    button.disabled = false;
  });
}

async function runStartupAutoUpdate() {
  setAutoUpdateStatus("자동 업데이트: 최신 데이터를 확인하는 중입니다.");
  const result = await autoUpdateDefaultData();
  setAutoUpdateStatus(result.message);
  renderAutoUpdateManager();

  if (!result.error && !result.skipped) {
    setPendingValidRows([]);
    updateDashboard(result.matches);
    updateStoredMatchStatus(result.matches);
    updateDataStatus();
    renderStoredMatches(getSearchableMatches());
    renderTeamMatchResults([], "팀명을 입력하면 과거 경기 기록과 배당이 표시됩니다.", { show: false });
    renderTeamMatchBreakdown([]);
    renderOddsSearchResults([], "조건에 맞는 유사 배당 경기가 없습니다.", { show: false });
    renderResultBreakdown([]);
  }
}

function wireSaveValidRows() {
  const button = document.getElementById("save-valid-rows");
  if (!button) return;

  button.addEventListener("click", () => {
    if (!requireAdminMode()) return;
    setSaveStatus("저장 중입니다.");

    try {
      if (currentValidRows.length === 0) {
        const storedMatches = loadStoredMatches();
        setSaveStatus("저장할 정상 행이 없습니다.");
        updateStoredMatchStatus(storedMatches);
        updateDashboard(storedMatches);
        updateDataStatus();
        renderStoredMatches(storedMatches);
        return;
      }

      const result = saveMatches(currentValidRows);
      const storedMatches = loadStoredMatches();

      updateDashboard(storedMatches);
      updateStoredMatchStatus(storedMatches);
      setAutoUpdateState({ ...getAutoUpdateState(), lastUpdatedAt: getCurrentTimestamp() });
      updateDataStatus();
      renderStoredMatches(storedMatches);
      renderOddsSearchResults([], "조건에 맞는 유사 배당 경기가 없습니다.", { show: false });
      renderResultBreakdown([]);
      setClearMatchesStatus(`${storedMatches.length}개의 경기 데이터가 저장되어 있습니다.`);
      setOddsSearchStatus("배당을 입력하면 전체 리그 기준으로 유사 결과를 검색합니다.");
      setSaveStatus(`정상 행 ${result.savedCount}개가 저장되었습니다. 중복 제외 ${result.duplicateCount || 0}개. 현재 저장된 전체 경기 수: ${storedMatches.length}개`);
      setPendingValidRows([]);
    } catch (error) {
      const message = error instanceof Error ? error.message : "알 수 없는 오류";
      setSaveStatus(`저장에 실패했습니다. ${message}`);
    }
  });
}

function wireClearStoredMatches() {
  const button = document.getElementById("clear-stored-matches");
  if (!button) return;

  button.addEventListener("click", () => {
    if (!requireAdminMode()) return;
    const matches = loadStoredMatches();
    if (matches.length === 0) {
      setClearMatchesStatus("삭제할 경기 데이터가 없습니다.");
      setClearMatchesButtonState([]);
      updateStoredMatchStatus(matches);
      return;
    }

    const confirmed = window.confirm("저장된 경기 데이터를 모두 삭제할까요?");
    if (!confirmed) return;

    const result = clearStoredMatches();
    updateDashboard(result.matches);
    updateStoredMatchStatus(result.matches);
    setAutoUpdateState({ ...getAutoUpdateState(), lastUpdatedAt: getCurrentTimestamp() });
    updateDataStatus();
    renderStoredMatches(result.matches);
    renderOddsSearchResults([], "조건에 맞는 결과가 없습니다.", { show: false });
    renderResultBreakdown([]);
    setOddsSearchError("");
    setOddsSearchStatus("배당을 입력하면 전체 리그 기준으로 유사 결과를 검색합니다.");
    setPendingValidRows([]);
    setClearMatchesStatus(`${result.deletedCount}개의 경기 데이터를 삭제했습니다.`);
  });
}

function wireMatchFilters() {
  const form = document.getElementById("match-filters");
  if (!form) return;

  form.addEventListener("input", () => renderStoredMatches());
  form.addEventListener("change", (event) => {
    if (event.target?.id === "filter-league") updateMatchFilterOptions();
    renderStoredMatches();
  });
}

function getOddsSearchCriteria() {
  return {
    homeOdds: document.getElementById("search-home-odds")?.value || "",
    drawOdds: document.getElementById("search-draw-odds")?.value || "",
    awayOdds: document.getElementById("search-away-odds")?.value || "",
    tolerance: document.getElementById("search-tolerance")?.value || "0.00",
    sortOrder: document.getElementById("search-sort-order")?.value || "DATE_DESC",
    customTolerance: document.getElementById("search-custom-tolerance")?.value || "",
    league: document.getElementById("search-league")?.value || "ALL",
    teamQuery: document.getElementById("search-team-query")?.value || "",
    sourceMatchId: activeOddsSearchSource?.sourceMatchId || "",
    sourceMatch: activeOddsSearchSource?.sourceMatch || null
  };
}

function getTodayMatchCriteria() {
  return {
    date: document.getElementById("today-match-date")?.value || "",
    league: document.getElementById("today-match-league")?.value || "EPL",
    homeTeam: document.getElementById("today-home-team")?.value || "",
    awayTeam: document.getElementById("today-away-team")?.value || "",
    homeOdds: document.getElementById("today-home-odds")?.value || "",
    drawOdds: document.getElementById("today-draw-odds")?.value || "",
    awayOdds: document.getElementById("today-away-odds")?.value || "",
    tolerance: document.getElementById("today-tolerance")?.value || "0.05"
  };
}

function setTodayAnalysisStatus(message) {
  const element = document.getElementById("today-analysis-status");
  if (element) element.textContent = message;
}

function setTotoRoundStatus(message) {
  if (typeof document === "undefined") return;
  const element = document.getElementById("toto-round-status");
  if (element) element.textContent = message;
}

function importTotoRoundPack({ storage, auto = false } = {}) {
  const pack = getBundledTotoRoundPack();
  const round = pack.currentRound || {};
  const fixtures = getCurrentTotoRoundFixtures(pack);

  if (fixtures.length === 0) {
    const message = "회차팩 데이터가 없습니다.";
    setTotoRoundStatus(message);
    return { error: message, addedCount: 0, duplicateCount: 0, matches: getStorageTodayMatches(storage), fixtures: [] };
  }

  const result = mergeTodayMatches(fixtures, storage);
  const sourceLabel = round.roundName ? `${round.roundName}` : "승무패 회차팩";
  const countLabel = fixtures.length === 14 ? "14경기" : `${fixtures.length}경기`;
  const message = `${sourceLabel} ${countLabel} ${auto ? "자동 반영" : "반영"}: 새로 추가 ${result.addedCount}개 / 중복 제외 ${result.duplicateCount}개`;
  setTotoRoundStatus(message);
  renderTodayCenter(result.matches);

  return {
    ...result,
    error: "",
    fixtures,
    round
  };
}

function getTeamMatchCriteria() {
  return {
    firstTeam: document.getElementById("team-search-first")?.value || "",
    secondTeam: document.getElementById("team-search-second")?.value || "",
    sortOrder: document.getElementById("team-match-sort-order")?.value || "DATE_DESC"
  };
}

function setTeamMatchSearchStatus(message) {
  const element = document.getElementById("team-match-search-status");
  if (element) element.textContent = message;
}

function setOddsSearchCriteria(condition) {
  activeOddsSearchSource = condition?.sourceMatchId
    ? {
      sourceMatchId: String(condition.sourceMatchId).trim(),
      sourceMatch: normalizeFavoriteMatchSnapshot(condition.sourceMatch)
    }
    : null;
  const fields = {
    "search-home-odds": condition.homeOdds,
    "search-draw-odds": condition.drawOdds,
    "search-away-odds": condition.awayOdds,
    "search-tolerance": condition.tolerance || "0.00",
    "search-sort-order": condition.sortOrder || "DATE_DESC",
    "search-custom-tolerance": condition.customTolerance,
    "search-league": condition.league || "ALL",
    "search-team-query": condition.teamQuery || ""
  };

  for (const [id, value] of Object.entries(fields)) {
    const element = document.getElementById(id);
    if (element) element.value = id === "search-league" ? (value || "ALL") : (value || "");
  }

  const customTolerance = document.getElementById("search-custom-tolerance");
  if (customTolerance) {
    customTolerance.disabled = (condition.tolerance || "0.00") !== "CUSTOM";
  }

  updateToleranceChipState(condition.tolerance || "0.00");
}

const TOLERANCE_CHIP_VALUES = {
  "tolerance-chip-0": "0.00",
  "tolerance-chip-001": "0.01",
  "tolerance-chip-003": "0.03",
  "tolerance-chip-005": "0.05",
  "tolerance-chip-010": "0.10"
};

function updateToleranceChipState(selectedValue) {
  for (const [id, value] of Object.entries(TOLERANCE_CHIP_VALUES)) {
    const chip = document.getElementById(id);
    if (!chip) continue;
    const isSelected = value === selectedValue;
    chip.classList.toggle("active", isSelected);
    chip.setAttribute("aria-pressed", String(isSelected));
  }
}

function wireSimpleToleranceButtons() {
  for (const [id, value] of Object.entries(TOLERANCE_CHIP_VALUES)) {
    const chip = document.getElementById(id);
    if (!chip) continue;

    chip.addEventListener("click", () => {
      const tolerance = document.getElementById("search-tolerance");
      const customTolerance = document.getElementById("search-custom-tolerance");
      if (tolerance) tolerance.value = value;
      if (customTolerance) {
        customTolerance.value = "";
        customTolerance.disabled = true;
      }
      updateToleranceChipState(value);
    });
  }
}

function wireExampleOddsButtons() {
  document.querySelectorAll("[data-example-odds]").forEach((button) => {
    button.addEventListener("click", () => {
      const [homeOdds, drawOdds, awayOdds] = String(button.dataset.exampleOdds || "").split("|");
      setOddsSearchCriteria({
        homeOdds,
        drawOdds,
        awayOdds,
        tolerance: "0.05",
        sortOrder: "CLOSEST",
        customTolerance: "",
        league: "ALL",
        teamQuery: ""
      });
      setOddsSearchStatus("예시 배당으로 바로 검색합니다.");
      runOddsSearchFromCurrentCriteria();
    });
  });
}

async function runOddsSearchFromCurrentCriteria() {
  if (!canRunOddsSearch()) return;
  const isGuestTrialSearch = !activeFavoriteAccountId && !hasUsedGuestSearchTrial();
  moveSearchResultsTo("odds-result-anchor");
  setSearchResultsTitle("검색 결과");
  setOddsSearchStatus("검색 중입니다.");

  try {
    setOddsSearchStatus("과거 배당 데이터를 준비하는 중입니다.");
    await ensureFootballDataPackLoaded();
    const matches = getSearchableMatches();
    const storedMatches = loadStoredMatches();
    const criteria = getOddsSearchCriteria();

    if (matches.length === 0) {
      setOddsSearchError("검색할 수 있는 결과가 없습니다.");
      setOddsSearchStatus("조건에 맞는 결과가 없습니다. 다른 배당이나 오차 범위로 다시 검색해보세요.");
      updateEmptyDataActions([]);
      resetOddsResultLimit();
      renderOddsSearchResults([], "검색된 과거 결과가 없습니다.");
      renderResultBreakdown([], criteria);
      return;
    }

    const result = searchOdds(matches, criteria);
    const statusDetails = getSearchStatusDetails({
      storedCount: storedMatches.length,
      pendingCount: currentValidRows.length,
      criteria,
      resultCount: result.matches.length
    });

    setOddsSearchError(result.error);

    if (result.error) {
      setOddsSearchStatus(`${result.error} / ${statusDetails}`);
      resetOddsResultLimit();
      renderOddsSearchResults([], result.error);
      renderResultBreakdown([]);
      return;
    }

    renderSearchHistory(recordOddsSearchHistory(criteria).history);
    renderOddsPatternSuggestions();
    setOddsSearchStatus(
      result.matches.length === 0
        ? `조건에 맞는 유사 배당 경기가 없습니다. ${statusDetails}`
        : `검색 결과가 표시됩니다. ${statusDetails}`
    );
    resetOddsResultLimit();
    renderOddsSearchResults(result.matches, "조건에 맞는 유사 배당 경기가 없습니다.");
    renderResultBreakdown(result.matches, criteria);
    if (isGuestTrialSearch && result.matches.length > 0) {
      markGuestSearchTrialUsed();
      const currentStatus = document.getElementById("odds-search-status")?.textContent || "검색 결과가 표시됩니다.";
      setOddsSearchStatus(`${currentStatus} 다음 검색부터 Google 로그인이 필요합니다.`);
    }
  } catch (error) {
    const message = error instanceof Error ? error.message : "알 수 없는 오류";
    setOddsSearchError("검색 중 문제가 발생했습니다.");
    setOddsSearchStatus(`검색 중 문제가 발생했습니다. ${message}`);
    resetOddsResultLimit();
    renderOddsSearchResults([], "검색 중 문제가 발생했습니다.");
    renderResultBreakdown([], getOddsSearchCriteria());
  }
}

function runTodayMatchAnalysis() {
  const matches = getSearchableMatches();
  const resultElement = document.getElementById("today-analysis-result");

  if (matches.length === 0) {
    setTodayAnalysisStatus("저장된 경기 데이터가 없습니다. 먼저 기본 데이터를 가져와주세요.");
    if (resultElement) resultElement.hidden = true;
    updateEmptyDataActions([]);
    return;
  }

  const criteria = getTodayMatchCriteria();
  const analysis = analyzeTodayMatch(matches, criteria);

  if (analysis.error) {
    renderTodayMatchAnalysis(analysis);
    setTodayAnalysisStatus(analysis.error);
    return;
  }

  const saved = saveTodayMatch(criteria);
  renderTodayCenter(saved.matches);
  renderTodayMatchAnalysis(analysis);
  setTodayAnalysisStatus(
    analysis.matches.length === 0
      ? `${analysis.label} 관심 경기를 추가했습니다. 조건에 맞는 과거 유사 경기는 아직 없습니다.`
      : `${analysis.label} 관심 경기를 추가했습니다. 유사 경기 ${analysis.matches.length}개를 확인했습니다.`
  );
}

function runTeamMatchSearchFromCurrentCriteria() {
  setTeamMatchSearchStatus("팀별 경기 검색 중입니다.");

  const matches = getSearchableMatches();
  const criteria = getTeamMatchCriteria();

  if (matches.length === 0) {
    setTeamMatchSearchStatus("저장된 경기 데이터가 없습니다.");
    resetTeamMatchResultLimit();
    renderTeamMatchResults([], "저장된 경기 데이터가 없습니다.");
    renderTeamMatchBreakdown([]);
    return;
  }

  const result = searchTeamMatches(matches, criteria);

  if (result.error) {
    setTeamMatchSearchStatus(result.error);
    resetTeamMatchResultLimit();
    renderTeamMatchResults([], result.error);
    renderTeamMatchBreakdown([]);
    return;
  }

  setTeamMatchSearchStatus(
    result.matches.length === 0
      ? "조건에 맞는 팀별 경기 기록이 없습니다."
      : `팀별 경기 검색 결과 ${result.matches.length}개가 표시됩니다.`
  );
  resetTeamMatchResultLimit();
  renderTeamMatchResults(result.matches, "조건에 맞는 팀별 경기 기록이 없습니다.");
  renderTeamMatchBreakdown(result.matches);
}

function getFixtureSearchCriteria() {
  return {
    league: document.getElementById("fixture-league")?.value || "ALL",
    homeTeam: document.getElementById("fixture-home-team")?.value || "",
    awayTeam: document.getElementById("fixture-away-team")?.value || ""
  };
}

function runFixtureSearch() {
  const status = document.getElementById("fixture-search-status");
  const criteria = getFixtureSearchCriteria();
  const matches = getSearchableMatches();

  moveSearchResultsTo("fixture-result-anchor");
  setSearchResultsTitle("경기 검색 결과");
  if (status) status.textContent = "경기 검색 중입니다.";

  if (matches.length === 0) {
    if (status) status.textContent = "저장된 경기 데이터가 없습니다.";
    setOddsSearchStatus("저장된 경기 데이터가 없습니다. 먼저 데이터를 준비해주세요.");
    updateEmptyDataActions([]);
    resetOddsResultLimit();
    renderOddsSearchResults([], "저장된 경기 데이터가 없습니다.");
    renderResultBreakdown([]);
    return;
  }

  const result = searchMatchesByFixture(matches, criteria);
  resetOddsResultLimit();

  if (result.error) {
    if (status) status.textContent = result.error;
    setOddsSearchStatus(result.error);
    renderOddsSearchResults([], result.error);
    renderResultBreakdown([]);
    return;
  }

  if (status) {
    status.textContent = result.matches.length === 0 ? "조건에 맞는 경기가 없습니다." : `경기 검색 결과 ${result.matches.length}개가 표시됩니다.`;
  }

  setOddsSearchStatus(
    result.matches.length === 0
      ? "조건에 맞는 경기가 없습니다."
      : `경기 검색 결과가 표시됩니다. / 검색 결과 ${result.matches.length}개`
  );
  renderOddsSearchResults(result.matches, "조건에 맞는 경기가 없습니다.");
  renderResultBreakdown(result.matches);
}

function searchWithMatchOdds(match) {
  setOddsSearchCriteria({
    ...getDirectOddsSearchCriteriaFromMatch(match),
    tolerance: "0.05"
  });

  if (typeof window !== "undefined") {
    window.location.hash = "#search";
  }

  showActiveView("#search");
  setOddsSearchStatus("저장 경기에서 불러와 검색 중입니다.");
  runOddsSearchFromCurrentCriteria();

  const status = document.getElementById("odds-search-status");
  if (status && status.textContent) {
    status.textContent = `저장 경기에서 불러와 검색했습니다. / ${status.textContent}`;
  }
}

function getSaveSearchCondition() {
  return {
    ...getOddsSearchCriteria(),
    name: document.getElementById("saved-search-name")?.value || "",
    memo: document.getElementById("saved-search-memo")?.value || ""
  };
}

function setSavedSearchStatus(message) {
  const status = document.getElementById("saved-search-status");
  if (status) status.textContent = message;
}

// 즐겨찾기 카드에 그 경기 배당이 최근에 어느 방향으로 움직였는지 한 줄로 보여준다.
// 특정 배당 조합 즐겨찾기(sourceMatch 없음)엔 안 붙는다 - 비교할 "그 경기"가 없어서다.
function createFavoriteMovementNote(sourceMatch) {
  const movement = getMatchOddsMovement(sourceMatch, getSearchableMatches());
  if (!movement.hasMovement) return null;

  const note = document.createElement("p");
  note.className = "search-history-movement-note";
  const label = document.createElement("span");
  label.textContent = `${translateUiText("배당 변화")}: `;
  note.appendChild(label);

  movement.movements.forEach((item, index) => {
    if (index > 0) note.appendChild(document.createTextNode(" · "));
    const trend = getOddsTrend(item.to, item.from);
    const value = document.createElement("span");
    if (trend === "up") value.className = "match-detail-odds-history-up";
    if (trend === "down") value.className = "match-detail-odds-history-down";
    const arrow = trend === "up" ? "↑ " : trend === "down" ? "↓ " : "";
    value.textContent = `${translateUiText(item.label)} ${arrow}${item.to.toFixed(2)}`;
    note.appendChild(value);
  });

  return note;
}

function renderSearchHistory(history = loadSearchHistory()) {
  const list = document.getElementById("search-history-list");
  if (!list) return;

  const isExpanded = list.dataset.expanded === "true";
  const visibleHistory = isExpanded ? history : history.slice(0, 5);

  if (history.length === 0) {
    const empty = document.createElement("div");
    empty.className = "empty-state compact-empty";
    empty.textContent = "아직 검색한 배당이 없습니다.";
    list.replaceChildren(empty);
    return;
  }

  const cards = visibleHistory.map((entry) => {
    const card = document.createElement("article");
    card.className = entry.favorite ? "search-history-card favorite" : "search-history-card";

    const title = document.createElement("strong");
    title.textContent = entry.favorite ? getFavoriteName(entry) : getSearchHistoryDisplayTitle(entry);

    const detail = document.createElement("p");
    const tolerance = entry.tolerance === "CUSTOM" ? entry.customTolerance : entry.tolerance;
    detail.textContent = entry.favorite
      ? `${getSearchHistoryDisplayTitle(entry)} · 허용 오차 ±${tolerance}`
      : `허용 오차 ±${tolerance}`;

    const meta = document.createElement("small");
    meta.textContent = entry.favorite ? "즐겨찾기" : "최근 검색";

    const movementNote = entry.favorite && entry.sourceMatch ? createFavoriteMovementNote(entry.sourceMatch) : null;

    const actions = document.createElement("div");
    actions.className = "search-history-actions";

    const loadButton = document.createElement("button");
    loadButton.type = "button";
    loadButton.textContent = "불러오기";
    loadButton.addEventListener("click", () => {
      setOddsSearchCriteria(entry);
      setOddsSearchStatus("최근 검색에서 불러왔습니다.");
    });

    const favoriteButton = document.createElement("button");
    favoriteButton.type = "button";
    favoriteButton.className = entry.favorite ? "favorite-action active" : "favorite-action";
    favoriteButton.textContent = entry.favorite ? "즐겨찾기 해제" : "즐겨찾기";
    favoriteButton.addEventListener("click", () => {
      const favoriteName = entry.favorite ? "" : requestFavoriteName(entry);
      const nextHistory = toggleSearchHistoryFavorite(entry.id, undefined, favoriteName);
      renderSearchHistory(nextHistory);
      renderSavedSearches();
    });

    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.className = "ghost-action";
    deleteButton.textContent = "삭제";
    deleteButton.addEventListener("click", () => {
      const nextHistory = deleteSearchHistoryEntry(entry.id);
      renderSearchHistory(nextHistory);
      renderSavedSearches();
    });

    actions.append(loadButton, favoriteButton, deleteButton);
    card.append(title, detail, meta, actions);
    if (movementNote) card.appendChild(movementNote);
    return card;
  });

  if (history.length > 5) {
    const toggleButton = document.createElement("button");
    toggleButton.type = "button";
    toggleButton.className = "search-history-toggle";
    toggleButton.textContent = isExpanded ? "접기 -" : `더보기 +${history.length - 5}`;
    toggleButton.addEventListener("click", () => {
      list.dataset.expanded = isExpanded ? "false" : "true";
      renderSearchHistory(history);
    });
    cards.push(toggleButton);
  }

  list.replaceChildren(...cards);
}

function renderOddsPatternSuggestions(storage) {
  const container = document.getElementById("odds-pattern-suggestions");
  if (!container) return;

  const patterns = getOddsPatternSuggestions({ criteria: getOddsSearchCriteria(), storage });

  if (patterns.length === 0) {
    const empty = document.createElement("small");
    empty.textContent = "맞는 조합 없음";
    container.replaceChildren(empty);
    return;
  }

  const chips = patterns.map((pattern) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "odds-pattern-chip";
    button.textContent = `${pattern.homeOdds} / ${pattern.drawOdds} / ${pattern.awayOdds}`;
    button.addEventListener("click", () => {
      setOddsSearchCriteria({
        ...getOddsSearchCriteria(),
        homeOdds: pattern.homeOdds,
        drawOdds: pattern.drawOdds,
        awayOdds: pattern.awayOdds
      });
    });
    return button;
  });

  container.replaceChildren(...chips);
}

function renderSavedSearches(searches = loadSavedSearches()) {
  const list = document.getElementById("saved-searches-list");
  if (!list) return;

  const favorites = loadSearchHistory().filter((entry) => entry.favorite);

  if (favorites.length === 0) {
    const empty = document.createElement("div");
    empty.className = "empty-state";
    empty.textContent = "즐겨찾기한 배당이 없습니다.";
    list.replaceChildren(empty);
    return;
  }

  const cards = favorites.map((search) => {
    const card = document.createElement("article");
    card.className = "saved-search-card";

    const title = document.createElement("strong");
    title.textContent = getFavoriteName(search);

    const nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.className = "favorite-name-input";
    nameInput.value = getFavoriteName(search);
    nameInput.hidden = true;
    nameInput.setAttribute("aria-label", "즐겨찾기 이름");

    const detail = document.createElement("p");
    const tolerance = search.tolerance === "CUSTOM" ? search.customTolerance : search.tolerance;
    detail.textContent = `${getSearchHistoryDisplayTitle(search)} · 허용 오차 ±${tolerance}`;

    const meta = document.createElement("small");
    meta.textContent = "즐겨찾기";

    const actions = document.createElement("div");
    actions.className = "saved-search-actions";

    const loadButton = document.createElement("button");
    loadButton.type = "button";
    loadButton.textContent = "불러오기";
    loadButton.addEventListener("click", () => {
      setOddsSearchCriteria(search);
      if (typeof window !== "undefined") window.location.hash = "#search";
      showActiveView("#search");
      setOddsSearchStatus("즐겨찾기에서 불러왔습니다.");
    });

    const renameButton = document.createElement("button");
    renameButton.type = "button";
    renameButton.className = "ghost-action";
    renameButton.textContent = "이름 변경";
    renameButton.addEventListener("click", () => {
      if (nameInput.hidden) {
        nameInput.hidden = false;
        renameButton.textContent = "저장";
        if (typeof nameInput.focus === "function") nameInput.focus();
        return;
      }

      const nextHistory = updateSearchHistoryFavoriteName(search.id, nameInput.value);
      renderSearchHistory(nextHistory);
      renderSavedSearches();
    });

    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.className = "ghost-action";
    deleteButton.textContent = "해제";
    deleteButton.addEventListener("click", () => {
      const nextHistory = toggleSearchHistoryFavorite(search.id);
      renderSearchHistory(nextHistory);
      renderSavedSearches();
    });

    actions.append(loadButton, renameButton, deleteButton);
    card.append(title, nameInput, detail, meta, actions);
    return card;
  });

  list.replaceChildren(...cards);
}

function wireOddsSearch() {
  const form = document.getElementById("odds-search-form");
  const button = document.getElementById("run-odds-search");
  const apiHistoryButton = document.getElementById("load-api-history");
  const tolerance = document.getElementById("search-tolerance");
  const customTolerance = document.getElementById("search-custom-tolerance");

  if (tolerance && customTolerance) {
    tolerance.addEventListener("change", () => {
      customTolerance.disabled = tolerance.value !== "CUSTOM";
      if (customTolerance.disabled) customTolerance.value = "";
    });
  }

  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    runOddsSearchFromCurrentCriteria();
  });

  form.addEventListener("input", () => {
    renderOddsPatternSuggestions();
  });

  if (button) {
    button.addEventListener("click", () => {
      runOddsSearchFromCurrentCriteria();
    });
  }

  if (apiHistoryButton) {
    apiHistoryButton.addEventListener("click", () => {
      loadApiHistoryForSearch();
    });
  }
}

function initializeTodayAnalysisForm() {
  const dateInput = document.getElementById("today-match-date");
  if (dateInput && !dateInput.value) dateInput.value = getTodayKey();
  updateTodayAnalysisDataStatus();
  renderTodayCenter();
}

function wireTodayAnalysis() {
  const form = document.getElementById("today-analysis-form");
  const loadRoundButton = document.getElementById("load-toto-round");
  const clearButton = document.getElementById("clear-today-center");

  if (!form && !loadRoundButton && !clearButton) return;

  initializeTodayAnalysisForm();

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      runTodayMatchAnalysis();
    });
  }

  if (loadRoundButton) {
    loadRoundButton.addEventListener("click", () => {
      const result = importTotoRoundPack();
      if (!result.error) setTodayAnalysisStatus("승무패 회차팩을 관심 경기 센터에 반영했습니다.");
    });
  }

  if (clearButton) {
    clearButton.addEventListener("click", () => {
      const matches = setStorageTodayMatches([]);
      renderTodayCenter(matches);
      setTodayAnalysisStatus("관심 경기 센터를 비웠습니다.");
      setTotoRoundStatus("회차팩을 다시 불러올 수 있습니다.");
    });
  }

  if (getStorageTodayMatches().length === 0) {
    importTotoRoundPack({ auto: true });
  } else {
    const fixtures = getCurrentTotoRoundFixtures();
    setTotoRoundStatus(fixtures.length ? `회차팩 준비됨: ${fixtures.length}경기` : "회차팩 데이터가 없습니다.");
  }
}

function wireFixtureSearch() {
  const button = document.getElementById("run-fixture-search");
  const homeInput = document.getElementById("fixture-home-team");
  const awayInput = document.getElementById("fixture-away-team");

  if (button) {
    button.addEventListener("click", () => {
      runFixtureSearch();
    });
  }

  for (const input of [homeInput, awayInput]) {
    if (!input) continue;
    input.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        runFixtureSearch();
      }
    });
  }
}

function wireTeamMatchSearch() {
  const form = document.getElementById("team-match-search-form");
  const button = document.getElementById("run-team-match-search");

  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    runTeamMatchSearchFromCurrentCriteria();
  });

  if (button) {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      runTeamMatchSearchFromCurrentCriteria();
    });
  }
}

function wireShowMoreResults() {
  const oddsButton = document.getElementById("show-more-odds-results");
  const teamButton = document.getElementById("show-more-team-matches");

  if (oddsButton) {
    oddsButton.addEventListener("click", () => {
      showMoreOddsResults();
    });
  }

  if (teamButton) {
    teamButton.addEventListener("click", () => {
      showMoreTeamMatches();
    });
  }
}

function openUploadView() {
  if (!requireAdminMode()) return;
  if (typeof window !== "undefined") {
    window.location.hash = "#upload";
  }
  showActiveView("#upload");
}

function wireEmptyDataActions() {
  const importButton = document.getElementById("empty-import-data");
  const uploadButton = document.getElementById("empty-open-upload");

  if (uploadButton) {
    uploadButton.addEventListener("click", () => {
      openUploadView();
    });
  }

  if (importButton) {
    importButton.addEventListener("click", () => {
      openUploadView();
      const fetchButton = document.getElementById("fetch-default-data");
      if (fetchButton) fetchButton.click();
    });
  }
}

function wireSaveSearchForm() {
  const form = document.getElementById("save-search-form");
  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const result = saveSearchCondition(getSaveSearchCondition());
    renderSavedSearches(result.searches);
    setSavedSearchStatus(`"${result.search.name}" 조건을 저장했습니다.`);
  });
}

function wireLocalAccount() {
  const form = document.getElementById("account-form");
  const input = document.getElementById("account-nickname");
  const clearButton = document.getElementById("clear-local-account");

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const nickname = String(input?.value || "").trim();

      if (!nickname) {
        setAccountStatus("닉네임을 입력해주세요.");
        return;
      }

      const account = saveLocalAccount({ nickname });
      renderLocalAccount();
      const storageMode = getStorageModeLabel();
      const modeMessage = storageMode === "탭 저장" ? "새로고침해도 유지되지만 탭을 닫으면 사라질 수 있습니다." : "이 브라우저에서만 유지됩니다.";
      setAccountStatus(`${account.nickname} 계정으로 저장했습니다. ${modeMessage}`);
    });
  }

  if (clearButton) {
    clearButton.addEventListener("click", () => {
      clearLocalAccount();
      if (input) input.value = "";
      renderLocalAccount();
      setAccountStatus("계정을 해제했습니다. 저장 경기와 즐겨찾기는 남아 있습니다.");
    });
  }
}

const VIEW_IDS = ["search", "today", "detail", "matches", "saved", "upload", "admin", "account"];
const DETAIL_SECTION_IDS = ["detail-summary", "detail-same", "detail-similar", "detail-league", "detail-recent"];
const ADMIN_VIEW_IDS = ["matches", "upload", "admin"];

function isAdminMode() {
  return Boolean(activeFavoriteAccountId && cloudAccountIsAdmin);
}

function updateAdminControls() {
  if (typeof document === "undefined") return;
  const adminMode = isAdminMode();
  document.querySelectorAll("[data-admin-only]").forEach((element) => {
    element.hidden = !adminMode;
  });
  updateEmptyDataActions();
}

function requireAdminMode() {
  return isAdminMode();
}

function getActiveViewId(hashValue) {
  const viewId = String(hashValue || "").replace("#", "");
  if (DETAIL_SECTION_IDS.includes(viewId)) return "detail";
  return VIEW_IDS.includes(viewId) ? viewId : "search";
}

function getAllowedViewId(hashValue, adminMode = false) {
  const viewId = getActiveViewId(hashValue);
  return ADMIN_VIEW_IDS.includes(viewId) && !adminMode ? "search" : viewId;
}

function getAuthenticatedViewId(hashValue, authenticated = false, adminMode = false, accessLocked = false) {
  if (!authenticated && accessLocked) return "account";
  return getAllowedViewId(hashValue, adminMode);
}

function showActiveView(hashValue) {
  if (typeof document === "undefined") return;

  const detailWasOpen = document.body.classList.contains("match-detail-open");
  const adminMode = isAdminMode();
  const requestedViewId = getActiveViewId(hashValue);
  const authenticated = Boolean(activeFavoriteAccountId);
  const activeViewId = getAuthenticatedViewId(hashValue, authenticated, adminMode, guestAccessGateRequested);
  if (authenticated && activeViewId !== requestedViewId) {
    if (typeof window !== "undefined" && window.location.hash !== "#search") {
      window.history?.replaceState(null, "", `${window.location.pathname}${window.location.search}#search`);
    }
  }
  updateAdminControls();
  document.body.classList.toggle("match-detail-open", activeViewId === "detail");
  appTelemetry?.recordView(activeViewId);
  const dashboard = document.getElementById("dashboard");
  const notice = document.getElementById("notice");

  if (dashboard) {
    dashboard.hidden = true;
  }

  if (notice) {
    notice.hidden = activeViewId !== "search";
  }

  VIEW_IDS.forEach((viewId) => {
    const panel = document.getElementById(viewId);
    if (!panel) return;

    const isActive = viewId === activeViewId;
    panel.hidden = !isActive;
    if (isActive && panel.tagName.toLowerCase() === "details") {
      panel.open = true;
    }
  });

  document.querySelectorAll(".nav-item").forEach((item) => {
    const isActive = item.getAttribute("href") === `#${activeViewId}`;
    item.classList.toggle("active", isActive);
    if (isActive) {
      item.setAttribute("aria-current", "page");
    } else {
      item.removeAttribute("aria-current");
    }
  });

  if (activeViewId === "matches") {
    renderStoredMatches();
  }
  if (activeViewId === "today") {
    ensureHomeTodayMatchesLoaded();
  }
  if (activeViewId === "account") {
    ensureCloudAccountReady().catch(() => {});
  }
  if (activeViewId === "admin") {
    loadMemberStatistics().catch(() => {});
  }
  if (detailWasOpen && activeViewId !== "detail" && matchDetailReturnState) {
    if (matchDetailReturnState.fixtureDate) selectedFixtureDate = matchDetailReturnState.fixtureDate;
    const scrollY = Number(matchDetailReturnState.scrollY || 0);
    window.requestAnimationFrame(() => window.scrollTo({ top: scrollY, behavior: "auto" }));
  }
}

function wireViewNavigation() {
  if (typeof window === "undefined") return;

  showActiveView(window.location.hash);
  // 네비게이션 탭은 <a href="#today"> 형태라, 클릭하면 브라우저가 기본 동작으로
  // 해당 id 요소(패널 상단)까지 스크롤을 확 점프시킨다. 탭 전환은 화면을 바꾸는
  // 것뿐 특정 위치로 스크롤하려는 의도가 아니므로, 기본 동작을 막고 히스토리만
  // 갱신해서 지금 스크롤 위치를 그대로 유지한다.
  document.querySelectorAll(".nav-item").forEach((item) => {
    item.addEventListener("click", (event) => {
      const targetHash = item.getAttribute("href");
      if (!targetHash || !targetHash.startsWith("#")) return;
      event.preventDefault();
      if (window.location.hash !== targetHash) {
        window.history.pushState(null, "", `${window.location.pathname}${window.location.search}${targetHash}`);
      }
      showActiveView(targetHash);
    });
  });
  window.addEventListener("hashchange", () => {
    showActiveView(window.location.hash);
  });
  // 공유 링크의 ?m= 처럼 뒤로가기가 해시와 쿼리스트링을 동시에 바꾸면, 일부
  // 브라우저는 hashchange 를 안 쏜다 (popstate 만 옴). popstate 도 같이 들어서
  // 그런 경우에도 화면이 갱신되게 한다. 평소 해시 링크 클릭은 두 이벤트가 같이
  // 와도 showActiveView 가 같은 값으로 다시 불리는 것뿐이라 문제없다.
  window.addEventListener("popstate", () => {
    showActiveView(window.location.hash);
  });
}

// 공유 링크(?m=...#detail)로 바로 들어왔을 때 그 경기를 찾아 상세 화면을 연다.
// 최근 경기는 부팅 시 이미 있는 데이터로 바로 찾고, 옛날 경기는 과거 배당 데이터를
// 추가로 불러온 뒤 다시 찾는다 (openMatchDetail 자체가 하는 것과 같은 방식).
async function resolveSharedMatchLink() {
  if (typeof window === "undefined") return;
  if (getActiveViewId(window.location.hash) !== "detail") return;
  const identity = new URLSearchParams(window.location.search).get("m");
  if (!identity) return;

  const found = findMatchByIdentity(identity, getSearchableMatches());
  if (found) {
    openMatchDetail(found);
    return;
  }

  try {
    await ensureFootballDataPackLoaded();
  } catch (_error) {
    // 옛날 데이터를 못 불러와도 아래에서 #today 로 조용히 돌아간다.
  }
  const foundAfterLoad = findMatchByIdentity(identity, getSearchableMatches());
  if (foundAfterLoad) {
    openMatchDetail(foundAfterLoad);
    return;
  }
  window.history.replaceState(null, "", `${window.location.pathname}${stripMatchShareParam(window.location.search)}#today`);
  showActiveView("#today");
}

function wireShareLinkCopy() {
  const button = document.getElementById("copy-share-url");
  const urlElement = document.getElementById("share-url");
  const statusElement = document.getElementById("share-copy-status");

  if (!button || !urlElement) return;

  button.addEventListener("click", async () => {
    const shareUrl = String(urlElement.textContent || "").trim();
    const clipboard = typeof navigator === "undefined" ? null : navigator.clipboard;

    try {
      if (navigator?.share) {
        await navigator.share({
          title: "오즈아카이브",
          text: "축구 배당과 과거 유사 경기 통계를 확인해보세요.",
          url: shareUrl
        });
        if (statusElement) statusElement.textContent = "공유 화면을 열었습니다.";
        return;
      }
      if (clipboard?.writeText) {
        await clipboard.writeText(shareUrl);
        if (statusElement) statusElement.textContent = "공유 주소를 복사했습니다.";
        return;
      }
    } catch (error) {
      // Local file mode can block clipboard access; showing the URL keeps the action useful.
    }

    if (statusElement) statusElement.textContent = `공유 주소: ${shareUrl}`;
  });
}

// 임시 피드백 통로: mailto 링크만 여는 거라 서버 저장·공개 노출이 없다 (댓글 기능과
// 달리 신고/차단 같은 모더레이션 요건이 없는 이유). 계정 화면에서 눈에 띄게 둔다.
const FEEDBACK_EMAIL = "ozakyb1112@gmail.com";

function wireBetaFeedback() {
  const textarea = document.getElementById("beta-feedback-text");
  const button = document.getElementById("beta-feedback-send");
  const status = document.getElementById("beta-feedback-status");
  if (!textarea || !button) return;

  button.addEventListener("click", () => {
    const message = textarea.value.trim();
    if (!message) {
      if (status) {
        status.hidden = false;
        status.textContent = translateUiText("내용을 먼저 적어주세요.");
      }
      return;
    }

    const context = [
      `날짜: ${new Date().toISOString().slice(0, 10)}`,
      `언어: ${getUiLanguage()}`,
      typeof navigator !== "undefined" ? `기기: ${navigator.userAgent}` : ""
    ].filter(Boolean).join("\n");
    const body = `${message}\n\n---\n${context}`;
    const mailtoUrl = `mailto:${FEEDBACK_EMAIL}?subject=${encodeURIComponent("오즈아카이브 테스터 피드백")}&body=${encodeURIComponent(body)}`;

    if (typeof window !== "undefined") window.location.href = mailtoUrl;
    if (status) {
      status.hidden = false;
      status.textContent = `${translateUiText("메일 앱을 열었습니다. 안 열리면 이 주소로 직접 보내주세요")}: ${FEEDBACK_EMAIL}`;
    }
  });
}

let deferredInstallPrompt = null;

function wirePwaInstall() {
  const button = document.getElementById("install-pwa");
  const statusElement = document.getElementById("install-pwa-status");
  if (!button || typeof window === "undefined") return;

  const isInstalled = () =>
    window.matchMedia?.("(display-mode: standalone)").matches || window.navigator.standalone === true;

  const updateInstalledState = () => {
    if (!isInstalled()) return false;
    button.textContent = "설치됨";
    button.disabled = true;
    if (statusElement) statusElement.textContent = "오즈아카이브가 이 기기에 설치되어 있습니다.";
    return true;
  };

  window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    deferredInstallPrompt = event;
    button.disabled = false;
    if (statusElement) statusElement.textContent = "버튼을 누르면 홈 화면에 설치됩니다.";
  });

  window.addEventListener("appinstalled", () => {
    deferredInstallPrompt = null;
    updateInstalledState();
  });

  button.addEventListener("click", async () => {
    if (updateInstalledState()) return;
    if (deferredInstallPrompt) {
      deferredInstallPrompt.prompt();
      const choice = await deferredInstallPrompt.userChoice.catch(() => null);
      deferredInstallPrompt = null;
      if (statusElement) {
        statusElement.textContent = choice?.outcome === "accepted"
          ? "설치를 시작했습니다."
          : "Chrome 메뉴의 '홈 화면에 추가'로 언제든 설치할 수 있습니다.";
      }
      return;
    }
    if (statusElement) {
      statusElement.textContent = "Chrome 오른쪽 위 메뉴에서 '홈 화면에 추가' 또는 '앱 설치'를 선택하세요.";
    }
  });

  updateInstalledState();
}

function registerServiceWorker() {
  if (typeof navigator === "undefined" || !("serviceWorker" in navigator)) return;
  if (typeof window === "undefined" || !window.isSecureContext) return;

  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/service-worker.js").catch(() => {
      // PWA install support is optional; app functionality should not depend on it.
    });
  });
}

function wireAnonymousTelemetry() {
  if (typeof window === "undefined" || !appTelemetry) return;
  window.addEventListener("error", (event) => {
    appTelemetry.recordBrowserError({
      kind: "runtime_error",
      name: event.error?.name || "Error",
      source: event.filename || "",
      line: event.lineno,
      column: event.colno
    });
  });
  window.addEventListener("unhandledrejection", (event) => {
    appTelemetry.recordBrowserError({
      kind: "unhandled_rejection",
      name: event.reason?.name || "UnhandledRejection"
    });
  });
  window.addEventListener("pagehide", () => {
    appTelemetry.flush({ useBeacon: true });
  });
}

function runWhenBrowserIsIdle(callback) {
  if (typeof window === "undefined" || typeof callback !== "function") return;
  if ("requestIdleCallback" in window) {
    window.requestIdleCallback(callback, { timeout: 2500 });
    return;
  }
  window.setTimeout(callback, 120);
}

if (typeof document !== "undefined") {
  guestAccessGateRequested = hasUsedGuestSearchTrial();
  wireAnonymousTelemetry();
  wireViewNavigation();
  resolveSharedMatchLink();
  wireSampleCsvDownload();
  wireCsvPreview();
  wireDefaultDataImport();
  wireFiveLeagueUpdate();
  wireSaveValidRows();
  wireClearStoredMatches();
  wireMatchFilters();
  wireTodayAnalysis();
  wireOddsSearch();
  wireSimpleToleranceButtons();
  wireExampleOddsButtons();
  wireFixtureSearch();
  wireTeamMatchSearch();
  wireShowMoreResults();
  wireEmptyDataActions();
  wireSaveSearchForm();
  wireLocalAccount();
  wireCloudAccount();
  wireMemberStatistics();
  wireShareLinkCopy();
  wireBetaFeedback();
  wirePwaInstall();
  wireTodayCsvImport();
  wireHomeTodayMatches();
  updateStorageModeStatus();
  if (["#matches", "#upload", "#account"].includes(window.location.hash || "")) {
    runWhenBrowserIsIdle(() => {
      updateDashboard();
      updateStoredMatchStatus();
      updateDataStatus();
    });
  }
  renderTeamMatchResults([], "팀명을 입력하면 과거 경기 기록과 배당이 표시됩니다.", { show: false });
  renderTeamMatchBreakdown([]);
  renderOddsSearchResults([], "조건에 맞는 유사 배당 경기가 없습니다.", { show: false });
  renderResultBreakdown([]);
  renderSearchHistory();
  renderOddsPatternSuggestions();
  renderSavedSearches();
  renderLocalAccount();
  if (!restoreStoredCloudSession()) {
    cloudAccountState = "loading";
    setCloudAccountUi({ status: "loading" });
    ensureCloudAccountReady().catch(() => {});
  }
  renderAutoUpdateManager();
  renderHomeAdvantageTrend();
  wireTeamProfile();
  setAutoUpdateStatus("자동 업데이트는 꺼져 있습니다. 필요할 때 데이터 추가에서 직접 확인하세요.");
  registerServiceWorker();
}

if (typeof module !== "undefined") {
  module.exports = {
    AUTO_UPDATE_KEY,
    ODDS_BASE_RATE_BANDS,
    buildTeamProfile,
    renderTeamProfile,
    wireTeamProfile,
    summarizeTeamProfile,
    getTeamVenueMatches,
    getOverUnderRate,
    summarizeTeamVenueProfile,
    summarizeRecentRecord,
    summarizeHeadToHeadRecord,
    buildTeamVenueSnapshot,
    getLeagueStandingsForMatch,
    getVenueRankFromStandings,
    splitHeadToHeadByVenue,
    HOME_ADVANTAGE_LEAGUES,
    HOME_ADVANTAGE_BY_SEASON,
    HOME_ADVANTAGE_MIN_SEASON_MATCHES,
    getHomeAdvantageTrend,
    getHomeAdvantageShift,
    renderHomeAdvantageTrend,
    CALENDAR_SEASON_LEAGUES,
    usesCalendarSeason,
    getSeasonStartYear,
    getSeasonLabel,
    getCurrentSeasonStartDate,
    CLOSING_ODDS_LEAGUES,
    usesClosingOdds,
    getFavoriteOddsInfo,
    getOddsBandKey,
    buildOddsBaseRateIndex,
    summarizeBaseRateBucket,
    getOddsBaseRate,
    getOddsBaseRateTable,
    createOddsBaseRateNote,
    ODDS_BASE_RATE_FALLBACK,
    buildFallbackOddsBaseRateIndex,
    buildUpsetTrackRecord,
    formatUpsetTrackRecordText,
    CSV_HEADERS,
    clearStoredMatches,
    clearLocalAccount,
    EMPTY_DATA_ERROR,
    HEADER_ERROR,
    RESULT_VALUES,
    RESULT_PAGE_SIZE,
    LOCAL_ACCOUNT_KEY,
    GUEST_SEARCH_TRIAL_KEY,
    SAMPLE_CSV,
    SAMPLE_CSV_FILENAME,
    SAVED_SEARCHES_KEY,
    SEARCH_HISTORY_KEY,
    STORAGE_KEY,
    TOTO_ROUND_PACK_KEY,
    PROTO_MARKET_PACK_KEY,
    TODAY_MATCHES_KEY,
    autoUpdateDefaultData,
    autoUpdateLeagues,
    analyzeTodayMatch,
    analyzeLiveMatchOdds,
    calculateResultBreakdown,
    calculateMatchJudgement,
    calculateAiUpsetScore,
    buildAnalysisContextV1,
    buildAnalysisTags,
    decideAnalysisDirection,
    buildAnalysisSeedKey,
    pickSeededValue,
    buildAnalysisSentenceSelection,
    buildAnalysisNarrativeBlock,
    buildAnalysisParagraph,
    getAnalysisSentenceLibrary,
    deleteSavedSearch,
    deleteSearchHistoryEntry,
    downloadSampleCsv,
    filterMatches,
    formatRate,
    formatOdds,
    formatLeagueName,
    formatDataSourceLabel,
    getOddsResultSourceSummary,
    translateLeagueName,
    translateTeamName,
    formatMatchResultText,
    formatResultLabel,
    formatTeamName,
    formatTableValue,
    fetchLiveOdds,
    getDefaultDataSource,
    getBundledApiOddsPack,
    getBundledTotoRoundPack,
    getApiOddsPackRows,
    getCurrentTotoRoundFixtures,
    getStoredTotoRoundPack,
    parseTotoRoundCsv,
    getStoredProtoMarketPack,
    parseProtoCsv,
    getDashboardCounts,
    getDuplicateKey,
    getBaseMatches,
    getCurrentTimestamp,
    deduplicateTodayMatches,
    getResultBreakdownMemo,
    getDirectOddsSearchCriteriaFromMatch,
    getInlineOddsRateText,
    getInlineOddsConfidence,
    getApiHistoryChunks,
    getHomeTodayCardViewModel,
    getFixturesForDate,
    filterFixturesByCategory,
    getDateFixtureLeagueOptions,
    getCrossSourceMatchKey,
    dropRowsCoveredByPack,
    filterFixturesByText,
    getMatchStatusLabel,
    getMatchContextProfile,
    getOfficialFixtureContext,
    getOfficialTeamContext,
    getFixtureTeamAvailability,
    getTeamLogoUrl,
    getStoredMatchStatisticsPack,
    getTeamPerformanceProfile,
    createOfficialRecordProfile,
    getTeamScheduleProfile,
    getTodayUserInsight,
    assessTodayUpsetCandidate,
    getUpsetCandidateAnalysis,
    getTodayUpsetCandidates,
    assessTodayMatches,
    UPSET_CANDIDATE_MIN_SAMPLE,
    getTodayStrongSignal,
    STRONG_SIGNAL_MIN_SAMPLE,
    getLeagueBreakdownStats,
    getRecentKnownResults,
    buildMatchDetailAnalysis,
    buildDetailOverviewSummary,
    buildDetailAiViewModel,
    buildDetailNarrativeViewModel,
    getMatchDetailAnalysisCached,
    formatDetailRecord,
    formatDetailGoalAverage,
    getOddsHistoryMatches,
    getMatchOddsMovement,
    loadBrowserScript,
    createDetailOddsMovementSection,
    buildOddsMovementChartData,
    getMissingTeamNames,
    getMajorTodayMatches,
    sortHomeTodayMatches,
    sortHomeTodayMatchesForUsers,
    getTodayOddsSummaryText,
    getOddsSearchVerdictText,
    getSearchStatusDetails,
    getOddsPatternLabel,
    getOddsRiskSignals,
    getRecentSeasonMatches,
    getFixtureLeagueOptions,
    getFavoriteSyncRecords,
    leagueMatchesFixture,
    getMatchLeagueOptions,
    getMatchTeamOptions,
    getAutoUpdateState,
    getAutoUpdateSummary,
    getLocalAccountLabel,
    hasStoredCloudSession,
    hasUsedGuestSearchTrial,
    markGuestSearchTrialUsed,
    canRunOddsSearch,
    canOpenMatchDetail,
    getOddsPatternSuggestions,
    getSearchHistoryDisplayTitle,
    getSearchableMatches,
    getMatchIdentity,
    findMatchByIdentity,
    stripMatchShareParam,
    getUniqueMatches,
    getStorageMatches,
    getStorageTodayMatches,
    getTeamMatchCriteria,
    getTeamContextForDate,
    getTodayMatchCriteria,
    getTodayKey,
    getFixtureDateOptions,
    getCompactFixtureOdds,
    getMatchFavoriteEntry,
    sortDateFixtureMatches,
    getStoredFixturesForDate,
    renderDateFixtures,
    selectFixtureDate,
    getOddsDistance,
    getStorageModeLabel,
    isRealDate,
    isMajorTodayMatch,
    isLocalStorageAvailable,
    importDefaultData,
    importTotoRoundPack,
    loadLocalAccount,
    loadSearchHistory,
    loadSavedSearches,
    loadStoredMatches,
    normalizeOdds,
    normalizeSearchHistoryEntries,
    normalizeTeamSearchText,
    teamNameMatches,
    parseCsvLine,
    parseCsvPreview,
    parseSearchNumber,
    mergeCsvParseResults,
    runOddsSearchFromCurrentCriteria,
    runFixtureSearch,
    runStartupAutoUpdate,
    runTeamMatchSearchFromCurrentCriteria,
    runTodayMatchAnalysis,
    renderOddsSearchResults,
    renderOddsPatternSuggestions,
    renderSearchHistory,
    renderMatchDataBreakdown,
    renderAutoUpdateManager,
    renderLocalAccount,
    renderResultBreakdown,
    renderTodayMatchAnalysis,
    renderTodayCenter,
    renderHomeTodayMatches,
    renderSavedSearches,
    renderTeamMatchBreakdown,
    renderTeamMatchResults,
    renderValidationRows,
    renderStoredMatches,
    renderPreviewMessage,
    renderPreviewRows,
    resetOddsResultLimit,
    resetTeamMatchResultLimit,
    recordOddsSearchHistory,
    saveMatches,
    saveLocalAccount,
    saveSearchCondition,
    saveTodayMatch,
    mergeTodayMatches,
    normalizeLiveOddsMatch,
    normalizeTodayCsvMatch,
    parseTodayCsvFiles,
    setStorageMatches,
    setStorageTodayMatches,
    setAutoUpdateState,
    setAutoUpdateStatus,
    setCsvError,
    setOddsSearchError,
    setOddsSearchCriteria,
    setOddsSearchStatus,
    getSearchStatusDetails,
    getApiHistoryCacheKey,
    setPendingValidRows,
    searchWithMatchOdds,
    setSaveButtonState,
    setSavedSearchStatus,
    setSaveStatus,
    setValidationSummary,
    matchResultFitsFilter,
    searchOdds,
    deleteTodayMatch,
    searchMatchesByKeyword,
    searchMatchesByFixture,
    searchTeamMatches,
    toggleSearchHistoryFavorite,
    setMatchFavorite,
    updateSearchHistoryFavoriteName,
    sortOddsSearchMatches,
    sortTeamMatchResults,
    updateDashboard,
    updateDataStatus,
    updateEmptyDataActions,
    updateFixtureLeagueOptions,
    updateMatchFilterOptions,
    updateOddsLeagueOptions,
    updateStoredMatchStatus,
    updateStorageModeStatus,
    updateTodayAnalysisDataStatus,
    validateCsvRow,
    validateCsvRows,
    wireCsvPreview,
    wireClearStoredMatches,
    wireDefaultDataImport,
    wireFiveLeagueUpdate,
    wireLocalAccount,
    wireCloudAccount,
    wireTodayCsvImport,
    wireEmptyDataActions,
    wireMatchFilters,
    wireOddsSearch,
    wireTodayAnalysis,
    wireSimpleToleranceButtons,
    wireFixtureSearch,
    wireTeamMatchSearch,
    wireSaveSearchForm,
    wireSaveValidRows,
    wireViewNavigation,
    getActiveViewId,
    getAllowedViewId,
    getAuthenticatedViewId,
    isAdminMode,
    normalizeMemberStatistics,
    formatMemberStatisticDate,
    showActiveView,
    showMoreOddsResults,
    showMoreTeamMatches,
    wireShowMoreResults,
    wireSampleCsvDownload
  };
}
