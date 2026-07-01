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
const MATCH_TABLE_COLUMN_COUNT = CSV_HEADERS.length + 1;
const SEARCH_RESULT_COLUMN_COUNT = CSV_HEADERS.length + 1;
const RESULT_PAGE_SIZE = 20;
const STORED_MATCH_RENDER_LIMIT = 100;
const LIVE_ODDS_ENDPOINT = "/api/live-odds";
let currentValidRows = [];
let memoryStoredMatches = [];
let memorySavedSearches = [];
let memorySearchHistory = [];
let memoryAutoUpdateState = null;
let memoryLocalAccount = null;
let memoryTodayMatches = [];
let currentOddsSearchResults = [];
let visibleOddsSearchCount = RESULT_PAGE_SIZE;
let currentTeamMatchResults = [];
let visibleTeamMatchCount = RESULT_PAGE_SIZE;
let cachedDefaultPackRows = null;

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
  "World Cup": "월드컵",
  FIFA: "FIFA",
  World: "세계",
  USA: "미국",
  Chile: "칠레"
};
const TEAM_NAME_LABELS = {
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
  Brentford: "브렌트포드",
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

function getNormalizedLabelKey(value) {
  return String(value || "")
    .trim()
    .toLowerCase()
    .replace(/[\s_\-.'’]/g, "");
}

function normalizeTeamNameForStorage(teamName) {
  const originalName = String(teamName || "").trim();
  if (!originalName) return "";
  if (Object.values(TEAM_NAME_LABELS).includes(originalName)) return originalName;

  const exactLabel = TEAM_NAME_LABELS[originalName];
  if (exactLabel) return exactLabel;

  const normalizedName = getNormalizedLabelKey(originalName);
  const matchedEntry = Object.entries(TEAM_NAME_LABELS).find(([englishName]) => getNormalizedLabelKey(englishName) === normalizedName);
  return matchedEntry ? matchedEntry[1] : originalName;
}

function setPendingValidRows(rows) {
  currentValidRows = Array.isArray(rows) ? rows : [];
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

  return dataLines.map((line, lineIndex) => {
    const values = parseCsvLine(line);
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
  return [
    row.date,
    row.league,
    row.homeTeam,
    row.awayTeam,
    row.homeOdds.toFixed(2),
    row.drawOdds.toFixed(2),
    row.awayOdds.toFixed(2)
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
      score: row.score
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

function getSearchableMatches(storage) {
  return getUniqueMatches([...getBaseMatches(), ...getStorageMatches(storage), ...currentValidRows]);
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

  if (!targetStorage) return [...memorySearchHistory];

  try {
    const storedValue = targetStorage.getItem(SEARCH_HISTORY_KEY);
    if (!storedValue) return [];
    const parsed = JSON.parse(storedValue);
    return Array.isArray(parsed) ? parsed : [];
  } catch (_error) {
    updateStorageModeStatus(true);
    return [...memorySearchHistory];
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
  return [
    match.date || "",
    match.league || "",
    normalizeTeamSearchText(match.homeTeam || ""),
    normalizeTeamSearchText(match.awayTeam || "")
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
      homeOdds: String(match.homeOdds || "").trim(),
      drawOdds: String(match.drawOdds || "").trim(),
      awayOdds: String(match.awayOdds || "").trim(),
      tolerance: match.tolerance || "0.05",
      roundName: match.roundName || "",
      totoNo: match.totoNo || "",
      createdAt: match.createdAt || getCurrentTimestamp()
    };
    const key = getTodayMatchKey(normalizedMatch);

    if (!normalizedMatch.homeTeam || !normalizedMatch.awayTeam || existingKeys.has(key)) {
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
  const safeHistory = Array.isArray(history) ? history.slice(0, 30) : [];
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
  return getStorageSearchHistory(storage);
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

function getLocalAccountLabel(storage) {
  const account = loadLocalAccount(storage);
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
  return [
    String(criteria.league || "ALL").trim() || "ALL",
    String(criteria.homeOdds || "").trim(),
    String(criteria.drawOdds || "").trim(),
    String(criteria.awayOdds || "").trim(),
    String(criteria.tolerance || "0.00").trim(),
    String(criteria.customTolerance || "").trim()
  ].join("|");
}

function getSearchHistoryDisplayTitle(entry) {
  const leagueLabel = entry.league && entry.league !== "ALL" ? entry.league : "전체";
  return `${leagueLabel} ${entry.homeOdds} / ${entry.drawOdds} / ${entry.awayOdds}`;
}

function getFavoriteName(entry, fallback = "") {
  return String(entry?.favoriteName || "").trim() || fallback || getSearchHistoryDisplayTitle(entry || {});
}

function requestFavoriteName(entry) {
  const fallback = getFavoriteName(entry);
  if (typeof window === "undefined" || typeof window.prompt !== "function") return fallback;
  const value = window.prompt("즐겨찾기 이름", fallback);
  return String(value || "").trim() || fallback;
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
    favorite: Boolean(existing?.favorite),
    favoriteName: String(existing?.favoriteName || "").trim(),
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
    history: storedHistory
  };
}

function toggleSearchHistoryFavorite(entryId, storage, favoriteName = "") {
  const nextHistory = getStorageSearchHistory(storage)
    .map((entry) => {
      if (entry.id !== entryId) return entry;
      const nextFavorite = !entry.favorite;
      return {
        ...entry,
        favorite: nextFavorite,
        favoriteName: nextFavorite ? getFavoriteName({ ...entry, favoriteName }, favoriteName) : entry.favoriteName
      };
    })
    .sort((a, b) => {
      if (a.favorite !== b.favorite) return a.favorite ? -1 : 1;
      return String(b.searchedAt || "").localeCompare(String(a.searchedAt || ""));
    });

  return setStorageSearchHistory(nextHistory, storage);
}

function updateSearchHistoryFavoriteName(entryId, favoriteName, storage) {
  const nextName = String(favoriteName || "").trim();
  const nextHistory = getStorageSearchHistory(storage).map((entry) => {
    if (entry.id !== entryId) return entry;
    return {
      ...entry,
      favoriteName: nextName || getFavoriteName(entry)
    };
  });

  return setStorageSearchHistory(nextHistory, storage);
}

function deleteSearchHistoryEntry(entryId, storage) {
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
  const labels = {
    H: "홈승",
    D: "무승부",
    A: "원정승",
    UNKNOWN: "결과 미확인"
  };

  return labels[result] || result;
}

function formatMatchResultText(match) {
  const score = String(match?.score || "").trim();
  return `경기결과: ${formatResultLabel(match?.result)}${score ? ` ${score}` : ""}`;
}

function formatTeamName(teamName) {
  const originalName = String(teamName || "").trim();
  return normalizeTeamNameForStorage(originalName);
}

function formatLeagueName(leagueName) {
  const originalName = String(leagueName || "").trim();
  if (!originalName) return "";
  return originalName
    .split("/")
    .map((part) => {
      const label = part.trim();
      return LEAGUE_NAME_LABELS[label] || label;
    })
    .join(" / ");
}

function formatTableValue(header, value) {
  if (header === "result") return formatResultLabel(value);
  if (header === "homeTeam" || header === "awayTeam") return formatTeamName(value);
  return value;
}

function normalizeLeagueNameForStorage(leagueName) {
  const originalName = String(leagueName || "").trim();
  if (!originalName) return "";

  const matchedLeague = Object.entries(LEAGUE_FILTERS).find(([leagueKey, aliases]) => {
    if (normalizeTeamSearchText(leagueKey) === normalizeTeamSearchText(originalName)) return true;
    return aliases.some((alias) => normalizeTeamSearchText(alias) === normalizeTeamSearchText(originalName));
  });

  return matchedLeague ? matchedLeague[0] : originalName;
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
  return originalName.includes(normalizedQuery) || displayName.includes(normalizedQuery);
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
  EPL: ["EPL", "E0"],
  LALIGA: ["LALIGA", "라리가", "SP1"],
  SERIEA: ["SERIEA", "세리에A", "I1"],
  BUNDESLIGA: ["BUNDESLIGA", "분데스리가", "D1"],
  LIGUE1: ["LIGUE1", "리그앙", "F1"],
  WORLDCUP: ["WORLDCUP", "월드컵", "WORLD CUP", "FIFA WORLD CUP"]
};
const FIXTURE_LEAGUE_OPTIONS = [
  { value: "ALL", label: "전체" },
  { value: "EPL", label: "EPL" },
  { value: "LALIGA", label: "라리가" },
  { value: "SERIEA", label: "세리에A" },
  { value: "BUNDESLIGA", label: "분데스리가" },
  { value: "LIGUE1", label: "리그앙" },
  { value: "WORLDCUP", label: "월드컵" }
];

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

function updateFixtureLeagueOptions(matches = getSearchableMatches()) {
  const select = document.getElementById("fixture-league");
  if (!select) return;

  const currentValue = select.value || "ALL";
  const options = getFixtureLeagueOptions(matches);
  const optionElements = options.map((option) => {
    const element = document.createElement("option");
    element.value = option.value;
    element.textContent = option.label;
    return element;
  });

  select.replaceChildren(...optionElements);
  select.value = options.some((option) => option.value === currentValue) ? currentValue : "ALL";
}

function updateOddsLeagueOptions(matches = getSearchableMatches()) {
  const select = document.getElementById("search-league");
  if (!select) return;

  const currentValue = select.value || "ALL";
  const options = getFixtureLeagueOptions(matches);
  const optionElements = options.map((option) => {
    const element = document.createElement("option");
    element.value = option.value;
    element.textContent = option.label;
    return element;
  });

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

function formatRate(count, knownMatches) {
  if (knownMatches === 0) return "0%";
  return `${((count / knownMatches) * 100).toFixed(1)}%`;
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

function getResultBreakdownMemo(breakdown) {
  const parts = [];

  if (breakdown.knownMatches > 0) {
    const resultCounts = [
      { label: "홈승", count: breakdown.homeWins },
      { label: "무승부", count: breakdown.draws },
      { label: "원정승", count: breakdown.awayWins }
    ];
    const topResult = resultCounts.reduce((top, item) => (item.count > top.count ? item : top), resultCounts[0]);

    if (topResult.count > 0) {
      const wording = topResult.label === "무승부" ? "비교적 많이 나타났습니다." : "가장 많이 나타났습니다.";
      parts.push(`과거 데이터 기준, 이 배당대에서는 ${topResult.label} 결과가 ${wording}`);
    }
  }

  if (breakdown.knownMatches < 10) {
    parts.push("결과 확인 경기 수가 적어 해석에 주의가 필요합니다.");
  }

  return parts.join(" ");
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
  return date.toISOString().slice(0, 10);
}

function getDateOffsetKey(offsetDays = 0, baseDate = new Date()) {
  const date = new Date(baseDate);
  date.setDate(date.getDate() + Number(offsetDays || 0));
  return getTodayKey(date);
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
  if (league === "WORLDCUP") return "월드컵";
  return DEFAULT_DATA_PACK_LEAGUES[league]?.label || league;
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

function renderLocalAccount(storage) {
  const account = loadLocalAccount(storage);
  const label = account.nickname || "로그인 전";
  const storageMode = getStorageModeLabel(storage);
  const storedMatches = loadStoredMatches(storage);
  const counts = getDashboardCounts(storedMatches);
  const favoriteSearches = loadSearchHistory(storage).filter((entry) => entry.favorite);
  const autoUpdateState = getAutoUpdateState(storage);
  const lastUpdateLabel = autoUpdateState.lastUpdatedAt || autoUpdateState.lastChecked || "확인 전";
  const accountModeLabel = storageMode === "브라우저 저장" ? "로컬 계정" : storageMode === "탭 저장" ? "탭 계정" : "임시 로컬 계정";
  const values = {
    "account-display-name": label,
    "account-summary-name": label,
    "account-summary-mode": accountModeLabel,
    "account-data-stored-count": String(storedMatches.length),
    "account-data-analyzable-count": String(counts.analyzableMatches),
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

function getBundledTotoRoundPack() {
  if (typeof window !== "undefined" && window.TOTO_ROUND_PACK) return window.TOTO_ROUND_PACK;
  if (typeof globalThis !== "undefined" && globalThis.TOTO_ROUND_PACK) return globalThis.TOTO_ROUND_PACK;
  return {};
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

function getBaseMatches() {
  return getDefaultPackRows();
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
    button.addEventListener("click", downloadSampleCsv);
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
    searchStatus.textContent = `검색 가능 경기: 기본 데이터팩 + 내 저장 경기 합계 ${searchableMatches.length}개`;
  }

  updateTodayAnalysisDataStatus(searchableMatches);
  renderTodayCenter();
  updateEmptyDataActions(searchableMatches);
}

function updateTodayAnalysisDataStatus(matches = getSearchableMatches()) {
  const element = document.getElementById("today-analysis-data-status");
  if (element) element.textContent = `검색 가능 경기 ${matches.length}개`;
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

function updateEmptyDataActions(matches = getSearchableMatches()) {
  const actions = document.getElementById("empty-data-actions");
  if (!actions) return;
  actions.hidden = Array.isArray(matches) && matches.length > 0;
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
      action.addEventListener("click", () => searchWithMatchOdds(match));

      card.append(meta, title, detail, action);
      return card;
    });
    cardList.replaceChildren(...cards);
  }

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
  const card = document.createElement("article");
  card.className = "search-result-card";

  const header = document.createElement("div");
  header.className = "result-card-header";

  const meta = document.createElement("span");
  meta.textContent = `${match.date} · ${formatLeagueName(match.league)}`;

  const resultPill = document.createElement("strong");
  resultPill.className = "result-pill";
  resultPill.textContent = formatResultLabel(match.result);

  header.append(meta, resultPill);

  const title = document.createElement("strong");
  title.className = "result-match-title";
  title.textContent = `${formatTeamName(match.homeTeam)} vs ${formatTeamName(match.awayTeam)}`;

  const odds = document.createElement("div");
  odds.className = "result-odds-strip";
  [
    ["홈승", match.homeOdds],
    ["무", match.drawOdds],
    ["원정승", match.awayOdds]
  ].forEach(([label, value]) => {
    const item = document.createElement("span");
    const itemLabel = document.createElement("small");
    const itemValue = document.createElement("strong");
    itemLabel.textContent = label;
    itemValue.textContent = formatOdds(value);
    item.append(itemLabel, itemValue);
    odds.appendChild(item);
  });

  const result = document.createElement("small");
  result.className = "result-score-line";
  result.textContent = formatMatchResultText(match);

  card.append(header, title, odds, result);
  return card;
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

function renderResultBreakdown(matches) {
  const breakdown = calculateResultBreakdown(matches);
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
}

function createTodaySummaryItem(label, value) {
  const item = document.createElement("div");
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

  return analyzeTodayMatch(matches, {
    homeTeam: match.homeTeam,
    awayTeam: match.awayTeam,
    league: match.league,
    homeOdds: match.homeOdds,
    drawOdds: match.drawOdds,
    awayOdds: match.awayOdds,
    tolerance: match.tolerance
  });
}

function hasCompleteOdds(match = {}) {
  return ["homeOdds", "drawOdds", "awayOdds"].every((field) => parseSearchNumber(match[field]) !== null);
}

function setTodaySearchFromMatch(match) {
  setOddsSearchCriteria({
    homeOdds: match.homeOdds,
    drawOdds: match.drawOdds,
    awayOdds: match.awayOdds,
    tolerance: match.tolerance || "0.05",
    sortOrder: "CLOSEST",
    customTolerance: "",
    league: match.league || "ALL"
  });
  runOddsSearchFromCurrentCriteria();
}

function createTodayCenterCard(match, analysis) {
  const card = document.createElement("article");
  card.className = "today-center-card";

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
    : "배당 대기중 · 경기 일정만 확인됨";

  const breakdown = analysis.breakdown || calculateResultBreakdown([]);
  const stats = document.createElement("div");
  stats.className = "today-card-stats";
  stats.append(
    createTodaySummaryItem("유사 경기", String(breakdown.totalMatches)),
    createTodaySummaryItem("결과 확인", String(breakdown.knownMatches)),
    createTodaySummaryItem("홈승", `${breakdown.homeWins} / ${breakdown.homeRate}`),
    createTodaySummaryItem("무/원정", `${breakdown.draws} / ${breakdown.drawRate} · ${breakdown.awayWins} / ${breakdown.awayRate}`)
  );

  const actions = document.createElement("div");
  actions.className = "today-card-actions";
  const detailButton = document.createElement("button");
  detailButton.type = "button";
  detailButton.textContent = hasOdds ? "과거 유사 배당 보기" : "배당 없음";
  detailButton.addEventListener("click", () => {
    if (!hasOdds) {
      renderTodayMatchAnalysis(analysis);
      setTodayAnalysisStatus(`${formatTeamName(match.homeTeam)} vs ${formatTeamName(match.awayTeam)}는 아직 배당이 없어 과거 유사 배당 검색을 할 수 없습니다.`);
      return;
    }
    renderTodayMatchAnalysis(analysis);
    setTodayAnalysisStatus(`${analysis.label} 상세 흐름을 표시했습니다.`);
    setTodaySearchFromMatch(match);
  });

  const deleteButton = document.createElement("button");
  deleteButton.type = "button";
  deleteButton.className = "ghost-action";
  deleteButton.textContent = "삭제";
  deleteButton.addEventListener("click", () => {
    renderTodayCenter(deleteTodayMatch(match.id));
    setTodayAnalysisStatus("관심 경기에서 삭제했습니다.");
  });
  actions.append(detailButton, deleteButton);

  card.append(header, odds, stats, actions);
  return card;
}

function renderTodayCenter(todayMatches = getStorageTodayMatches()) {
  if (typeof document === "undefined") return;
  const list = document.getElementById("today-center-list");

  if (!Array.isArray(todayMatches) || todayMatches.length === 0) {
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
  const analyses = todayMatches.map((match) => getTodayMatchAnalysis(match, searchableMatches));
  const readyCount = todayMatches.filter(hasCompleteOdds).length;
  const knownCount = analyses.reduce((sum, analysis) => sum + (analysis.breakdown?.knownMatches || 0), 0);
  const values = {
    "today-center-count": String(todayMatches.length),
    "today-center-ready-count": String(readyCount),
    "today-center-known-count": String(knownCount)
  };

  for (const [id, value] of Object.entries(values)) {
    const element = document.getElementById(id);
    if (element) element.textContent = value;
  }

  updateTodayAnalysisDataStatus(searchableMatches);
  if (!list) return;

  list.replaceChildren(...todayMatches.map((match, index) => createTodayCenterCard(match, analyses[index])));
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
    createTodaySummaryItem("결과 확인", String(breakdown.knownMatches)),
    createTodaySummaryItem("홈승 비율", `${breakdown.homeWins} / ${breakdown.homeRate}`),
    createTodaySummaryItem("무승부/원정승", `${breakdown.draws} / ${breakdown.drawRate} · ${breakdown.awayWins} / ${breakdown.awayRate}`)
  );
  resultElement.appendChild(summary);

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
    homeOdds: String(homeOdds || "").trim(),
    drawOdds: String(drawOdds || "").trim(),
    awayOdds: String(awayOdds || "").trim(),
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
  params.set("_", String(Date.now()));

  const response = await fetch(`${LIVE_ODDS_ENDPOINT}?${params.toString()}`, {
    cache: "no-store",
    headers: { Accept: "application/json" }
  });

  let payload = {};
  try {
    payload = await response.json();
  } catch (_error) {
    payload = {};
  }

  if (!response.ok || payload.error) {
    return {
      error: payload.error || `API 응답을 불러오지 못했습니다. 상태 코드 ${response.status}`,
      matches: []
    };
  }

  const matches = Array.isArray(payload.matches) ? payload.matches.map(normalizeLiveOddsMatch) : [];
  return { error: "", matches, meta: payload.meta || {} };
}

async function loadLiveOddsFromApi() {
  const button = document.getElementById("load-live-odds");
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
    setLiveOddsStatus(`경기 ${result.matches.length}개 업데이트 / 배당 확인 ${oddsCount}개 / 새로 추가 ${merged.addedCount}개`);
    return { ...result, ...merged, visibleMatches };
  } catch (error) {
    const message = error instanceof Error ? error.message : "알 수 없는 오류";
    setLiveOddsStatus(`경기 업데이트 중 문제가 발생했습니다. ${message}`);
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
  const sampleButton = document.getElementById("download-today-csv-sample");
  const apiButton = document.getElementById("load-live-odds");
  if (!input && !sampleButton && !apiButton) return;

  initializeLiveOddsControls();
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
  if (sampleButton) {
    sampleButton.addEventListener("click", downloadTodayCsvSample);
  }
  document.querySelectorAll("[data-live-date-offset]").forEach((button) => {
    button.addEventListener("click", () => {
      setLiveOddsDate(getDateOffsetKey(button.dataset.liveDateOffset || 0));
    });
  });
  document.querySelectorAll("[data-live-date-weekend]").forEach((button) => {
    button.addEventListener("click", () => {
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
  const teamText = teamQuery ? ` / 팀명 ${teamQuery}` : "";
  return `내 저장 경기 ${storedCount}개 / 기본 데이터팩 포함 / 임시 정상 행 ${pendingCount}개 / 입력 배당 ${criteria.homeOdds || "-"}, ${criteria.drawOdds || "-"}, ${criteria.awayOdds || "-"}${teamText} / 허용 오차 ${tolerance || "-"} / 검색 결과 ${resultCount}개`;
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
    currentValidRows = [];
    setSaveButtonState(currentValidRows);
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
  currentValidRows = validation.validRows;
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
      currentValidRows = [];
      setSaveButtonState(currentValidRows);
      setSaveStatus("검증 완료 후 정상 행이 있으면 저장할 수 있습니다.");
      return;
    }

    const validation = validateCsvRows(result.rows);
    currentValidRows = validation.validRows;
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
    currentValidRows = [];
    setSaveButtonState(currentValidRows);
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
    handleCsvFiles(event.target.files);
  });
}

function wireDefaultDataImport() {
  const button = document.getElementById("fetch-default-data");
  const downloadLink = document.getElementById("default-data-download-link");

  if (downloadLink) {
    downloadLink.addEventListener("click", async () => {
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

    currentValidRows = [];
    setSaveButtonState(currentValidRows);
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
    setFiveLeagueUpdateStatus("5대 리그 데이터팩을 확인하는 중입니다.");
    button.disabled = true;

    const result = await autoUpdateLeagues();

    if (!result.error) {
      currentValidRows = [];
      setSaveButtonState(currentValidRows);
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
    currentValidRows = [];
    setSaveButtonState(currentValidRows);
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
      renderOddsSearchResults([], storedMatches.length === 0 ? "저장된 경기 데이터가 없습니다." : "조건에 맞는 유사 배당 경기가 없습니다.", { show: false });
      renderResultBreakdown([]);
      setClearMatchesStatus(`${storedMatches.length}개의 경기 데이터가 저장되어 있습니다.`);
      setOddsSearchStatus(`검색 가능 경기: 기본 데이터팩 + 내 저장 경기 합계 ${getSearchableMatches().length}개`);
      setSaveStatus(`정상 행 ${result.savedCount}개가 저장되었습니다. 중복 제외 ${result.duplicateCount || 0}개. 현재 저장된 전체 경기 수: ${storedMatches.length}개`);
      currentValidRows = [];
      setSaveButtonState(currentValidRows);
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
    renderOddsSearchResults([], "저장된 경기 데이터가 없습니다.", { show: false });
    renderResultBreakdown([]);
    setOddsSearchError("");
    setOddsSearchStatus("저장된 경기 데이터가 없습니다.");
    currentValidRows = [];
    setSaveButtonState(currentValidRows);
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
    teamQuery: document.getElementById("search-team-query")?.value || ""
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

function runOddsSearchFromCurrentCriteria() {
  moveSearchResultsTo("odds-result-anchor");
  setSearchResultsTitle("검색 결과");
  setOddsSearchStatus("검색 중입니다.");

  try {
    const matches = getSearchableMatches();
    const storedMatches = loadStoredMatches();
    const criteria = getOddsSearchCriteria();

    if (matches.length === 0) {
      setOddsSearchError("저장된 경기 데이터가 없습니다.");
      setOddsSearchStatus("저장된 경기 데이터가 없습니다. 먼저 데이터를 준비해주세요.");
      updateEmptyDataActions([]);
      resetOddsResultLimit();
      renderOddsSearchResults([], "저장된 경기 데이터가 없습니다.");
      renderResultBreakdown([]);
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
        ? `조건에 맞는 유사 배당 경기가 없습니다. / ${statusDetails}`
        : `검색 결과가 표시됩니다. / ${statusDetails}`
    );
    resetOddsResultLimit();
    renderOddsSearchResults(result.matches, "조건에 맞는 유사 배당 경기가 없습니다.");
    renderResultBreakdown(result.matches);
  } catch (error) {
    const message = error instanceof Error ? error.message : "알 수 없는 오류";
    setOddsSearchError("검색 중 문제가 발생했습니다.");
    setOddsSearchStatus(`검색 중 문제가 발생했습니다. ${message}`);
    resetOddsResultLimit();
    renderOddsSearchResults([], "검색 중 문제가 발생했습니다.");
    renderResultBreakdown([]);
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
    homeOdds: formatOdds(match.homeOdds),
    drawOdds: formatOdds(match.drawOdds),
    awayOdds: formatOdds(match.awayOdds),
    tolerance: "0.05",
    sortOrder: "CLOSEST",
    customTolerance: "",
    league: ""
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

function renderSearchHistory(history = loadSearchHistory()) {
  const list = document.getElementById("search-history-list");
  if (!list) return;

  if (history.length === 0) {
    const empty = document.createElement("div");
    empty.className = "empty-state compact-empty";
    empty.textContent = "아직 검색한 배당이 없습니다.";
    list.replaceChildren(empty);
    return;
  }

  const cards = history.map((entry) => {
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
    return card;
  });

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

const VIEW_IDS = ["search", "matches", "saved", "upload", "account"];

function getActiveViewId(hashValue) {
  const viewId = String(hashValue || "").replace("#", "");
  return VIEW_IDS.includes(viewId) ? viewId : "search";
}

function showActiveView(hashValue) {
  if (typeof document === "undefined") return;

  const activeViewId = getActiveViewId(hashValue);
  const dashboard = document.getElementById("dashboard");
  const notice = document.getElementById("notice");

  if (dashboard) {
    dashboard.hidden = activeViewId !== "search";
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
}

function wireViewNavigation() {
  if (typeof window === "undefined") return;

  showActiveView(window.location.hash);
  window.addEventListener("hashchange", () => {
    showActiveView(window.location.hash);
  });
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

function registerServiceWorker() {
  if (typeof navigator === "undefined" || !("serviceWorker" in navigator)) return;
  if (typeof window === "undefined" || !window.isSecureContext) return;

  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/service-worker.js").catch(() => {
      // PWA install support is optional; app functionality should not depend on it.
    });
  });
}

if (typeof document !== "undefined") {
  wireViewNavigation();
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
  wireFixtureSearch();
  wireTeamMatchSearch();
  wireShowMoreResults();
  wireEmptyDataActions();
  wireSaveSearchForm();
  wireLocalAccount();
  wireShareLinkCopy();
  wireTodayCsvImport();
  updateStorageModeStatus();
  updateDashboard();
  updateStoredMatchStatus();
  updateDataStatus();
  renderTeamMatchResults([], "팀명을 입력하면 과거 경기 기록과 배당이 표시됩니다.", { show: false });
  renderTeamMatchBreakdown([]);
  renderOddsSearchResults([], loadStoredMatches().length === 0 ? "저장된 경기 데이터가 없습니다." : "조건에 맞는 유사 배당 경기가 없습니다.", { show: false });
  renderResultBreakdown([]);
  renderSearchHistory();
  renderOddsPatternSuggestions();
  renderSavedSearches();
  renderLocalAccount();
  renderAutoUpdateManager();
  setAutoUpdateStatus("자동 업데이트는 꺼져 있습니다. 필요할 때 데이터 추가에서 직접 확인하세요.");
  registerServiceWorker();
}

if (typeof module !== "undefined") {
  module.exports = {
    AUTO_UPDATE_KEY,
    CSV_HEADERS,
    clearStoredMatches,
    clearLocalAccount,
    EMPTY_DATA_ERROR,
    HEADER_ERROR,
    RESULT_VALUES,
    RESULT_PAGE_SIZE,
    LOCAL_ACCOUNT_KEY,
    SAMPLE_CSV,
    SAMPLE_CSV_FILENAME,
    SAVED_SEARCHES_KEY,
    SEARCH_HISTORY_KEY,
    STORAGE_KEY,
    TODAY_MATCHES_KEY,
    autoUpdateDefaultData,
    autoUpdateLeagues,
    analyzeTodayMatch,
    calculateResultBreakdown,
    deleteSavedSearch,
    deleteSearchHistoryEntry,
    downloadSampleCsv,
    filterMatches,
    formatRate,
    formatOdds,
    formatMatchResultText,
    formatResultLabel,
    formatTeamName,
    formatTableValue,
    fetchLiveOdds,
    getDefaultDataSource,
    getBundledTotoRoundPack,
    getCurrentTotoRoundFixtures,
    getDashboardCounts,
    getDuplicateKey,
    getBaseMatches,
    getCurrentTimestamp,
    getResultBreakdownMemo,
    getFixtureLeagueOptions,
    getMatchLeagueOptions,
    getMatchTeamOptions,
    getAutoUpdateState,
    getAutoUpdateSummary,
    getLocalAccountLabel,
    getOddsPatternSuggestions,
    getSearchHistoryDisplayTitle,
    getSearchableMatches,
    getUniqueMatches,
    getStorageMatches,
    getStorageTodayMatches,
    getTeamMatchCriteria,
    getTodayMatchCriteria,
    getTodayKey,
    getOddsDistance,
    getStorageModeLabel,
    isRealDate,
    isLocalStorageAvailable,
    importDefaultData,
    importTotoRoundPack,
    loadLocalAccount,
    loadSearchHistory,
    loadSavedSearches,
    loadStoredMatches,
    normalizeOdds,
    normalizeTeamSearchText,
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
    showActiveView,
    showMoreOddsResults,
    showMoreTeamMatches,
    wireShowMoreResults,
    wireSampleCsvDownload
  };
}
