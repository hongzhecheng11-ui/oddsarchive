(function initOddsArchiveI18n(globalScope) {
  const STORAGE_KEY = "oddsArchiveLanguage";
  const SUPPORTED_LANGUAGES = new Set(["ko", "en"]);
  const EN_MESSAGES = {
    "무료 베타": "Free Beta", "축구 배당 검색·분석": "Football odds search & analysis",
    "내 계정": "My Account", "로그인 필요": "Sign in", "로그인 전": "Signed out", "로그인 확인 중": "Checking sign-in",
    "언어 선택": "Language", "주요 화면": "Main navigation", "서비스 정책": "Service policies", "계정": "Account",
    "배당검색": "Odds Search", "오늘경기": "Fixtures", "즐겨찾기": "Favorites", "내정보": "Account",
    "배당 검색": "Odds Search", "빠른 동일배당 검색": "Quick Odds Search", "직접 배당 입력": "Enter Odds",
    "경기 카드가 없을 때 홈승/무/원정승 배당을 직접 넣어 검색합니다.": "Enter home, draw and away odds to search past matches.",
    "상세 필터": "More Filters", "리그": "League", "전체": "All", "팀명": "Team",
    "허용 오차 빠른 선택": "Select odds tolerance", "동배당": "Exact", "홈승": "Home", "무승부": "Draw",
    "무": "Draw", "원정승": "Away", "홈": "Home", "원정": "Away", "유사 배당 검색": "Search Similar Odds",
    "동일 배당 검색": "Search Exact Odds", "검색 상태": "Search Status",
    "배당값을 입력하면 전체 리그 기준으로 유사 결과를 검색합니다.": "Enter odds to search similar results across all leagues.",
    "최근 검색": "Recent Searches", "즐겨찾기한 배당은 위에 고정됩니다.": "Favorite searches stay at the top.",
    "검색 결과": "Search Results", "전체 통계": "Overall Stats", "리그별 통계": "Stats by League",
    "최근 10경기": "Latest 10 Matches", "경기 결과": "Match Result", "결과 미확인": "Result Pending",
    "결과 없음": "No Result", "판정": "Verdict", "위험도": "Risk", "신호": "Signals", "표본": "Sample",
    "일반": "Normal", "낮음": "Low", "보통": "Medium", "높음": "High", "매우 높음": "Very High",
    "불러오기": "Load", "삭제": "Delete", "즐겨찾기 추가": "Add Favorite", "즐겨찾기 해제": "Remove Favorite",
    "더보기": "Show More", "접기": "Collapse", "아직 검색한 배당이 없습니다.": "No recent odds searches yet.",
    "즐겨찾기한 배당이 없습니다.": "No favorites yet.", "조건에 맞는 경기가 없습니다.": "No matches found for these odds.",
    "조건에 맞는 유사 배당 경기가 없습니다.": "No similar-odds matches found.",
    "카드형 결과로 표시됩니다.": "Results are shown as match cards.",
    "오늘 이변 후보": "Today's Upset Watch", "오늘은 신뢰할 만한 이변 후보가 없습니다": "No reliable upset candidates today",
    "오늘은 뚜렷한 이변 후보가 없습니다": "No clear upset candidates today", "강한 후보만 표시": "Strong candidates only",
    "오늘 경기": "Fixtures", "오늘의 주요 경기": "Featured Matches", "전체 오늘 경기 보기": "View All Fixtures",
    "새로고침": "Refresh", "마지막 업데이트": "Last updated", "업데이트": "Updated", "업데이트 대기": "Update pending",
    "분석 준비 중": "Analysis pending", "경기 일정을 불러오는 중입니다.": "Loading fixtures.",
    "오늘 경기 불러오는 중": "Loading today's matches", "오늘 표시할 주요 경기가 없습니다": "No featured matches to show today",
    "오늘 경기 정보를 불러오지 못했습니다. 새로고침을 눌러 다시 시도해보세요.": "Could not load today's matches. Please refresh and try again.",
    "이 날짜와 카테고리에 표시할 경기가 없습니다.": "No matches for this date and category.",
    "최신 일정 확인 중": "Checking latest fixtures", "저장된 일정": "Saved fixtures", "경기 일정 확인 중": "Checking fixtures",
    "일정을 불러오지 못했습니다": "Could not load fixtures", "경기 전": "Scheduled", "진행 중": "Live",
    "종료": "Finished", "연장 종료": "After Extra Time", "승부차기 종료": "After Penalties", "취소": "Cancelled",
    "연기": "Postponed", "중단": "Suspended", "경기 요약": "Match Summary", "동일 배당": "Exact Odds",
    "AI 분석": "AI Analysis", "요약": "Summary", "유사배당": "Similar Odds", "같은 리그": "Same League",
    "최근 전적": "Recent Form", "동일배당 전적": "Exact-Odds Record", "유사배당 전적": "Similar-Odds Record",
    "같은 리그 유사배당 전적": "Same-League Similar Odds", "관련 과거 경기": "Related Past Matches",
    "최근 전적 데이터가 없습니다": "No recent form data available", "동일배당 전적이 없습니다": "No exact-odds history available",
    "유사배당 전적이 없습니다": "No similar-odds history available", "배당 변화": "Odds Movement",
    "배당 변화 기록이 쌓이는 중입니다.": "Odds movement history is being collected.", "변화 감지": "Movement Detected",
    "최초": "Opening", "최신": "Latest", "홈팀": "Home Team", "원정팀": "Away Team", "순위": "Rank",
    "최근 5경기": "Last 5", "홈 성적": "Home Record", "원정 성적": "Away Record", "평균 득실": "Avg. Goals",
    "기록 없음": "No Data", "AI 종합 분석": "AI Match Analysis", "최종 판정": "Final Verdict",
    "신뢰도": "Confidence", "데이터 근거": "Data Evidence", "종합 결론": "Summary", "AI 종합 점수": "AI Overall Score",
    "공격력": "Attack", "수비력": "Defense", "최근 흐름": "Recent Form", "배당 신뢰도": "Odds Confidence",
    "이변 가능성": "Upset Indicator", "데이터가 더 필요합니다.": "More data is needed.",
    "Google 계정 연결": "Connect Google Account", "Google로 로그인": "Sign in with Google",
    "배당 검색 또는 경기 상세를 한 번 무료로 체험한 뒤 Google 로그인으로 계속 사용할 수 있습니다. 즐겨찾기는 계정별로 안전하게 동기화됩니다.": "Try one odds search or match detail for free, then sign in with Google to continue. Favorites sync securely by account.",
    "Google 로그인 기능을 준비하는 중입니다.": "Preparing Google sign-in.",
    "Google 계정 바꾸기": "Switch Google Account", "로그아웃": "Sign Out",
    "Google 계정 연결 및 서버 데이터 삭제": "Disconnect Google Account & Delete Cloud Data",
    "Google 로그인은 이 화면에서만 불러옵니다.": "Google sign-in is loaded only on this screen.",
    "Android 베타 테스터 모집": "Android Beta Testers Wanted",
    "Google 그룹에 가입한 뒤 Play 테스트 참여를 누르면 설치할 수 있습니다.": "Join the Google Group, then opt in to install the test app.",
    "테스터 그룹 가입": "Join Tester Group", "Google Play 테스트 참여": "Join Google Play Test",
    "그룹 가입": "Join Group", "테스트 참여": "Join Test",
    "가입과 참여에는 같은 Google 계정을 사용해 주세요.": "Use the same Google account for the group and the test.",
    "이 기기 전용 계정": "Device-only Account", "닉네임": "Nickname", "계정 저장": "Save Account",
    "닉네임, 즐겨찾기, 저장 데이터는 이 브라우저에 저장됩니다. 다른 기기에서는 이어지지 않습니다.": "Nickname, favorites and saved data stay in this browser and do not sync to other devices.",
    "닉네임을 저장하면 이 기기에서 내 계정처럼 표시됩니다.": "Save a nickname to identify this device-only account.",
    "계정 해제는 닉네임만 지우고 저장 경기와 즐겨찾기는 남습니다.": "Removing the account clears only the nickname; saved matches and favorites remain.",
    "계정 해제": "Remove Account", "현재 계정": "Current Account", "저장 방식": "Storage", "로컬 계정": "Local Account",
    "확인 전": "Not Checked", "공유하기": "Share", "주소 복사": "Copy Link", "정보 제공 안내": "Information Notice",
    "설치 없이 바로 사용할 수 있는 공개 웹앱입니다.": "A public web app you can use without installation.",
    "축구 배당을 입력하면 비슷한 과거 경기의 결과와 통계를 한눈에 확인할 수 있습니다.": "Enter football odds to review similar historical results and statistics.",
    "커뮤니티에 공유해 실제 사용자를 모아보세요.": "Share it with your community and invite real users.",
    "휴대폰에 설치": "Install on Phone", "앱으로 설치": "Install App",
    "브라우저 주소창 없이 일반 앱처럼 빠르게 실행할 수 있습니다.": "Launch it quickly like a regular app without the browser address bar.",
    "Chrome 메뉴의 '홈 화면에 추가'로도 설치할 수 있습니다.": "You can also use Add to Home screen from the Chrome menu.",
    "개인정보 처리방침": "Privacy Policy", "이용약관": "Terms of Service", "계정 삭제 안내": "Account Deletion"
  };
  const EN_PATTERNS = [
    [/^표본\s*(\d+)\/(\d+)$/, "Sample $1/$2"], [/^표본\s*(\d+)경기$/, "Sample: $1 matches"],
    [/^(\d+)경기$/, "$1 matches"], [/^더보기\s*\((\d+)개\)$/, "Show More ($1)"],
    [/^과거 유사배당 표본\s*(\d+)경기$/, "Similar-odds sample: $1 matches"],
    [/^홈승\s*(\d+(?:\.\d+)?)%$/, "Home $1%"], [/^무승부\s*(\d+(?:\.\d+)?)%$/, "Draw $1%"],
    [/^원정승\s*(\d+(?:\.\d+)?)%$/, "Away $1%"], [/^홈\s*(\d+(?:\.\d+)?)%$/, "Home $1%"],
    [/^무\s*(\d+(?:\.\d+)?)%$/, "Draw $1%"], [/^원정\s*(\d+(?:\.\d+)?)%$/, "Away $1%"],
    [/^업데이트\s+(.+)$/, "Updated $1"], [/^배당\s+(.+)$/, "Odds $1"], [/^허용 오차\s+(.+)$/, "Tolerance $1"]
  ];
  function getStoredLanguage() {
    try {
      const value = globalScope.localStorage && globalScope.localStorage.getItem(STORAGE_KEY);
      return SUPPORTED_LANGUAGES.has(value) ? value : "ko";
    } catch (_error) { return "ko"; }
  }
  let activeLanguage = getStoredLanguage();
  function getLanguage() { return activeLanguage; }
  function setLanguage(language) {
    activeLanguage = SUPPORTED_LANGUAGES.has(language) ? language : "ko";
    try { if (globalScope.localStorage) globalScope.localStorage.setItem(STORAGE_KEY, activeLanguage); } catch (_error) {}
    return activeLanguage;
  }
  function translateText(value, language = activeLanguage) {
    const text = String(value == null ? "" : value);
    if (language !== "en") return text;
    const trimmed = text.trim();
    if (!trimmed) return text;
    let translated = EN_MESSAGES[trimmed];
    if (!translated) {
      const match = EN_PATTERNS.find(([pattern]) => pattern.test(trimmed));
      if (match) translated = trimmed.replace(match[0], match[1]);
    }
    if (!translated) return text;
    return `${text.match(/^\s*/)[0]}${translated}${text.match(/\s*$/)[0]}`;
  }
  function shouldSkipNode(node) {
    return !node.parentElement || ["SCRIPT", "STYLE", "NOSCRIPT", "TEXTAREA"].includes(node.parentElement.tagName);
  }
  function translateNode(node) {
    if (!node || activeLanguage !== "en") return;
    if (node.nodeType === 3 && !shouldSkipNode(node)) {
      const translated = translateText(node.nodeValue);
      if (translated !== node.nodeValue) node.nodeValue = translated;
      return;
    }
    if (node.nodeType !== 1) return;
    ["placeholder", "aria-label", "title"].forEach((attribute) => {
      if (!node.hasAttribute(attribute)) return;
      const value = node.getAttribute(attribute);
      const translated = translateText(value);
      if (translated !== value) node.setAttribute(attribute, translated);
    });
    Array.from(node.childNodes || []).forEach(translateNode);
  }
  function updateMetadata() {
    if (!globalScope.document) return;
    globalScope.document.documentElement.lang = activeLanguage;
    if (activeLanguage === "en") {
      globalScope.document.title = "OddsArchive - Football Odds History & Analysis";
      const description = globalScope.document.querySelector('meta[name="description"]');
      if (description) description.content = "Search historical football matches by home, draw and away odds.";
    }
  }
  function applyTranslations(root) {
    if (!globalScope.document) return;
    updateMetadata();
    translateNode(root || globalScope.document.body);
  }
  function start() {
    updateMetadata();
    const selector = globalScope.document.getElementById("language-select");
    if (selector) {
      selector.value = activeLanguage;
      selector.addEventListener("change", () => { setLanguage(selector.value); globalScope.location.reload(); });
    }
    applyTranslations(globalScope.document.body);
    if (!globalScope.MutationObserver || !globalScope.document.body) return;
    const observer = new globalScope.MutationObserver((mutations) => {
      if (activeLanguage === "en") mutations.forEach((mutation) => mutation.addedNodes.forEach(translateNode));
    });
    observer.observe(globalScope.document.body, { childList: true, subtree: true });
  }
  const api = { STORAGE_KEY, getLanguage, setLanguage, translateText, applyTranslations };
  globalScope.ODDS_ARCHIVE_I18N = api;
  if (typeof module !== "undefined" && module.exports) module.exports = api;
  if (globalScope.document) {
    if (globalScope.document.readyState === "loading") globalScope.document.addEventListener("DOMContentLoaded", start, { once: true });
    else start();
  }
})(typeof window !== "undefined" ? window : globalThis);
