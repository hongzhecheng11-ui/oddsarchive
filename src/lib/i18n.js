(function initOddsArchiveI18n(globalScope) {
  const STORAGE_KEY = "oddsArchiveLanguage";
  const SUPPORTED_LANGUAGES = new Set(["ko", "en"]);
  const EN_MESSAGES = {
    "무료 베타": "Free Beta", "축구 배당 검색·분석": "Football odds search & analysis",
    "내 계정": "My Account", "로그인 필요": "Sign in", "로그인 전": "Signed out", "로그인 확인 중": "Checking sign-in",
    "언어 선택": "Language", "주요 화면": "Main navigation", "서비스 정책": "Service policies", "계정": "Account",
    "배당검색": "Odds Search", "오늘경기": "Fixtures", "즐겨찾기": "Favorites", "내정보": "Account",
    "배당 검색": "Odds Search", "빠른 동일배당 검색": "Quick Odds Search", "직접 배당 입력": "Enter Odds",
    "경기 분석": "Match Analysis", "상세 분석": "Detailed Analysis", "과거 결과 비율": "Historical Results",
    "검색 결과 기준": "Result Basis", "과거 배당 조합": "Past Odds Combinations", "최근 결과": "Recent Results",
    "경기 카드가 없을 때 홈승/무/원정승 배당을 직접 넣어 검색합니다.": "Enter home, draw and away odds to search past matches.",
    "상세 필터": "More Filters", "리그": "League", "전체": "All", "팀명": "Team",
    "허용 오차 빠른 선택": "Select odds tolerance", "동배당": "Exact", "홈승": "Home", "무승부": "Draw",
    "무": "Draw", "원정승": "Away", "홈": "Home", "원정": "Away", "유사 배당 검색": "Search Similar Odds",
    "동일 배당 검색": "Search Exact Odds", "검색 상태": "Search Status",
    "배당값을 입력하면 전체 리그 기준으로 유사 결과를 검색합니다.": "Enter odds to search similar results across all leagues.",
    "최근 검색": "Recent Searches", "즐겨찾기한 배당은 위에 고정됩니다.": "Favorite searches stay at the top.",
    "검색 결과": "Search Results", "전체 통계": "Overall Stats", "리그별 통계": "Stats by League",
    "최근 10경기": "Latest 10 Matches", "경기 결과": "Match Result", "경기결과": "Match Result", "결과 미확인": "Result Pending",
    "결과 없음": "No Result", "판정": "Verdict", "위험도": "Risk", "신호": "Signals", "표본": "Sample",
    "일반": "Normal", "낮음": "Low", "보통": "Medium", "높음": "High", "매우 높음": "Very High",
    "불러오기": "Load", "삭제": "Delete", "즐겨찾기 추가": "Add Favorite", "즐겨찾기 해제": "Remove Favorite",
    "더보기": "Show More", "접기": "Collapse", "아직 검색한 배당이 없습니다.": "No recent odds searches yet.",
    "즐겨찾기한 배당이 없습니다.": "No favorites yet.", "조건에 맞는 경기가 없습니다.": "No matches found for these odds.",
    "조건에 맞는 유사 배당 경기가 없습니다.": "No similar-odds matches found.",
    "카드형 결과로 표시됩니다.": "Results are shown as match cards.",
    "오늘 이변 후보": "Today's Upset Watch", "오늘의 이변후보 TOP": "Today's Upset Candidates",
    "오늘은 신뢰할 만한 이변 후보가 없습니다": "No reliable upset candidates today",
    "오늘은 뚜렷한 이변 후보가 없습니다": "No clear upset candidates today", "강한 후보만 표시": "Strong candidates only",
    "오늘 경기": "Fixtures", "오늘의 주요 경기": "Featured Matches", "오늘 주요 경기": "Featured Matches", "전체 오늘 경기 보기": "View All Fixtures",
    "새로고침": "Refresh", "마지막 업데이트": "Last updated", "업데이트": "Updated", "업데이트 대기": "Update pending",
    "분석 준비 중": "Analysis pending", "경기 일정을 불러오는 중입니다.": "Loading fixtures.",
    "오늘 경기 불러오는 중": "Loading today's matches", "오늘 표시할 주요 경기가 없습니다": "No featured matches to show today",
    "오늘 경기 정보를 불러오지 못했습니다. 새로고침을 눌러 다시 시도해보세요.": "Could not load today's matches. Please refresh and try again.",
    "이 날짜와 카테고리에 표시할 경기가 없습니다.": "No matches for this date and category.",
    "카테고리": "Category", "팀명 또는 리그명 검색": "Search team or league", "검색": "Search", "주요": "Featured",
    "최신 일정 확인 중": "Checking latest fixtures", "저장된 일정": "Saved fixtures", "경기 일정 확인 중": "Checking fixtures",
    "일정을 불러오지 못했습니다": "Could not load fixtures", "시간 미정": "Time TBA", "경기 전": "Scheduled", "진행 중": "Live",
    "종료": "Finished", "연장 종료": "After Extra Time", "승부차기 종료": "After Penalties", "취소": "Cancelled",
    "연기": "Postponed", "중단": "Suspended", "경기 요약": "Match Summary", "동일 배당": "Exact Odds",
    "AI 분석": "AI Analysis", "AI 종합 해설": "AI Analysis Summary", "요약": "Summary", "유사배당": "Similar Odds", "같은 리그": "Same League",
    "최근 전적": "Recent Form", "동일배당 전적": "Exact-Odds Record", "유사배당 전적": "Similar-Odds Record",
    "같은 리그 유사배당 전적": "Same-League Similar Odds", "관련 과거 경기": "Related Past Matches",
    "최근 전적 데이터가 없습니다": "No recent form data available", "동일배당 전적이 없습니다": "No exact-odds history available",
    "유사배당 전적이 없습니다": "No similar-odds history available", "배당 변화": "Odds Movement",
    "배당 변화 기록이 쌓이는 중입니다.": "Odds movement history is being collected.", "변화 감지": "Movement Detected",
    "최초": "Opening", "최신": "Latest", "홈팀": "Home Team", "원정팀": "Away Team", "순위": "Rank",
    "최근 5경기": "Last 5", "홈 성적": "Home Record", "원정 성적": "Away Record", "평균 득실": "Avg. Goals",
    "기록 없음": "No Data", "전적 없음": "No Record", "분석 보류": "Analysis Pending",
    "안정": "Stable", "주의": "Caution", "이변 주의": "Upset Caution", "고위험": "High Risk",
    "대형 이변 후보": "Major Upset Candidate", "이변 후보": "Upset Candidate", "정배불안": "Favorite at Risk",
    "박빙주의": "Close Match", "혼전": "Wide Open", "확인 중": "Checking",
    "AI 종합 분석": "AI Match Analysis", "최종 판정": "Final Verdict", "경기 공통 지표": "Match Indicators",
    "최근 사례": "Recent Examples", "관련 과거 경기가 없습니다.": "No related past matches available.",
    "배당 준비 중": "Odds Pending", "이전": "Previous", "상태": "Status", "결과": "Result",
    "승": "W", "패": "L", "득": "GF", "실": "GA", "스코어": "Score", "최종": "Final",
    "공격": "Attack", "수비": "Defense", "흐름": "Form", "양 팀 공격": "Both Teams Attack",
    "양 팀 수비": "Both Teams Defense", "양 팀 흐름": "Both Teams Form", "데이터 부족": "Insufficient Data",
    "유사배당 표본": "Similar-Odds Sample", "정배 적중 비교": "Favorite Hit-Rate Comparison",
    "정배 적중률 계산 불가": "Favorite hit rate unavailable", "선발·결장 정보": "Lineups & Absences",
    "부상·결장 등록 정보 없음": "No registered injury or absence data",
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
    "보관": "Saved", "저장 경기": "Saved Matches", "저장된 경기가 없습니다.": "No saved matches.",
    "최근 즐겨찾기": "Recent Favorites", "없음": "None", "확인": "Confirm", "대기 중": "Pending",
    "설치 없이 바로 사용할 수 있는 공개 웹앱입니다.": "A public web app you can use without installation.",
    "축구 배당을 입력하면 비슷한 과거 경기의 결과와 통계를 한눈에 확인할 수 있습니다.": "Enter football odds to review similar historical results and statistics.",
    "커뮤니티에 공유해 실제 사용자를 모아보세요.": "Share it with your community and invite real users.",
    "휴대폰에 설치": "Install on Phone", "앱으로 설치": "Install App",
    "브라우저 주소창 없이 일반 앱처럼 빠르게 실행할 수 있습니다.": "Launch it quickly like a regular app without the browser address bar.",
    "Chrome 메뉴의 '홈 화면에 추가'로도 설치할 수 있습니다.": "You can also use Add to Home screen from the Chrome menu.",
    "개인정보 처리방침": "Privacy Policy", "이용약관": "Terms of Service", "계정 삭제 안내": "Account Deletion",
    "오즈아카이브": "OddsArchive",
    "이 앱은 사용자가 보유한 축구 배당 CSV 데이터를 기록, 검색, 분석하기 위한 정보 제공용 도구입니다. 구매 연결, 구매 대행, 사설 사이트 연결 기능은 제공하지 않습니다.": "This app is an informational tool for recording, searching and analysing football odds CSV data you already own. It does not provide purchase links, purchase agency or private site connections.",
    "인기": "Popular", "유럽": "Europe", "아시아": "Asia", "국가대항": "International",
    "경기를 선택하면 상세 분석이 표시됩니다.": "Select a match to see the detailed analysis.",
    "맞대결": "Head-to-Head", "홈팀 최근": "Home Team Form", "원정팀 최근": "Away Team Form",
    "부상·결장": "Injuries & Absences", "선발": "Lineup",
    "미공개": "Not Announced", "공개": "Announced", "포메이션 미정": "Formation TBD",
    "부상·결장 확인 전": "Injuries & Absences: Not checked",
    "부상·결장 등록 정보 없음": "Injuries & Absences: None reported",
    "선발 명단 미공개": "Lineup: Not announced",
    "선발 명단 확인 전": "Lineup: Not checked",
    "무승부 주의": "Draw Watch", "균형 배당": "Balanced Odds",
    "같은 리그 정배 낮음": "Same League: Low Favorite Rate",
    "동일/유사 정배 낮음": "Exact/Similar: Low Favorite Rate",
    "세 배당이 정확히 같은 과거 경기": "Past matches with identical odds",
    "홈승·무·원정승 각각 ±0.05 범위": "Within ±0.05 on home, draw and away",
    "홈승/무/원정승 각각 ±0.05 범위": "Within ±0.05 on home, draw and away",
    "두 팀의 최근 기록과 배당 데이터를 합친 경기 전체 점수": "Overall match score combining both teams' recent form and odds data",
    "배당 검색 또는 경기 상세를 한 번 무료로 체험할 수 있습니다.": "Try one odds search or match detail for free.",
    "무료 체험을 사용했습니다. Google 로그인 후 계속 이용할 수 있습니다.": "You have used your free trial. Sign in with Google to continue.",
    "즐겨찾기를 안전하게 병합하는 중입니다.": "Merging your favorites securely.",
    "Google 계정과 즐겨찾기가 동기화되었습니다.": "Your favorites are synced with your Google account.",
    "서버 연결이 원활하지 않아 로컬·계정 캐시에 저장했습니다. 연결되면 다시 동기화합니다.": "The server could not be reached, so this was saved to the local and account cache. It will sync again once reconnected.",
    "Google 로그인을 준비하지 못했습니다. 잠시 후 다시 시도해주세요.": "Google sign-in is unavailable. Please try again shortly."
  };
  const EN_PATTERNS = [
    [/^표본\s*(\d+)\/(\d+)$/, "Sample $1/$2"], [/^표본\s*(\d+)경기$/, "Sample: $1 matches"],
    [/^(\d+)경기$/, "$1 matches"], [/^더보기\s*\((\d+)개\)$/, "Show More ($1)"],
    [/^(\d+)경기\s*·\s*저장된 일정$/, "$1 matches · Saved fixtures"],
    [/^(\d+)경기\s*·\s*최신 일정 확인 중$/, "$1 matches · Checking latest fixtures"],
    [/^시간 미정\s*·\s*경기 전$/, "Time TBA · Scheduled"],
    [/^과거 유사배당 표본\s*(\d+)경기$/, "Similar-odds sample: $1 matches"],
    [/^경기결과:\s*홈승\s+(.+)$/, "Match Result: Home Win $1"], [/^경기결과:\s*홈승$/, "Match Result: Home Win"],
    [/^경기결과:\s*무승부\s+(.+)$/, "Match Result: Draw $1"], [/^경기결과:\s*무승부$/, "Match Result: Draw"],
    [/^경기결과:\s*원정승\s+(.+)$/, "Match Result: Away Win $1"], [/^경기결과:\s*원정승$/, "Match Result: Away Win"],
    [/^결과\s+홈승\s+(.+)$/, "Result: Home Win $1"], [/^결과\s+홈승$/, "Result: Home Win"],
    [/^결과\s+무승부\s+(.+)$/, "Result: Draw $1"], [/^결과\s+무승부$/, "Result: Draw"],
    [/^결과\s+원정승\s+(.+)$/, "Result: Away Win $1"], [/^결과\s+원정승$/, "Result: Away Win"],
    [/^최종\s+홈승\s+(.+)$/, "Final: Home Win $1"], [/^최종\s+홈승$/, "Final: Home Win"],
    [/^최종\s+무승부\s+(.+)$/, "Final: Draw $1"], [/^최종\s+무승부$/, "Final: Draw"],
    [/^최종\s+원정승\s+(.+)$/, "Final: Away Win $1"], [/^최종\s+원정승$/, "Final: Away Win"],
    [/^상태\s+(.+)\s+·\s+결과\s+홈승$/, "Status: $1 · Result: Home Win"],
    [/^상태\s+(.+)\s+·\s+결과\s+무승부$/, "Status: $1 · Result: Draw"],
    [/^상태\s+(.+)\s+·\s+결과\s+원정승$/, "Status: $1 · Result: Away Win"],
    [/^홈승\s*\/\s*무\s*\/\s*원정승\s+(.+)$/, "Home / Draw / Away $1"],
    [/^홈\s+(.+?)\s*·\s*무\s+(.+?)\s*·\s*원정\s+(.+)$/, "Home $1 · Draw $2 · Away $3"],
    [/^홈승\s+(.+?)\s*·\s*무승부\s+(.+?)\s*·\s*원정승\s+(.+)$/, "Home $1 · Draw $2 · Away $3"],
    [/^홈승\s+(\d+)승\s+(.+)$/, "Home $1 W $2"],
    [/^무승부\s+(\d+)무\s+(.+)$/, "Draw $1 D $2"],
    [/^원정승\s+(\d+)승\s+(.+)$/, "Away $1 W $2"],
    [/^(\d+)승\s+(\d+)무\s+(\d+)패$/, "$1 W $2 D $3 L"],
    [/^득\s*([\d.]+)\s*·\s*실\s*([\d.]+)$/, "GF $1 · GA $2"],
    [/^신뢰도\s+(.+)$/, "Confidence: $1"], [/^유사배당\s+(\d+)경기$/, "Similar Odds: $1 matches"],
    [/^동일배당\s+(\d+)경기$/, "Exact Odds: $1 matches"],
    [/^정배 적중률\s+(.+)$/, "Favorite Hit Rate: $1"],
    [/^유사배당\s+(.+)$/, "Similar Odds: $1"],
    [/^전체\s+(.+)\s*·\s*같은 리그\s+(.+)$/, "All $1 · Same League $2"],
    [/^(.+)\s+최근\s+(\d+)경기$/, "$1 · Last $2 Matches"],
    [/^상태\s+(.+)$/, "Status: $1"], [/^판정\s+(.+)$/, "Verdict: $1"], [/^배당 구간\s+(.+)$/, "Odds Band: $1"],
    [/^이전\s+([\d.]+)$/, "Previous $1"],
    [/^유사배당에서는\s+(.+)이\s+([\d.]+)%로 가장 많이 발생했습니다\.$/, "In similar-odds history, $1 occurred most often at $2%."],
    [/^현재 배당과 비교할 수 있는 과거 유사배당 전적이 없습니다\.$/, "No comparable similar-odds history is available."],
    [/^두 팀의 최근 흐름이 비슷합니다\. 평균 득점은 홈\s+([\d.]+)골, 원정\s+([\d.]+)골입니다\.$/, "Both teams have similar recent form. Average goals: home $1, away $2."],
    [/^(.+)의 최근 흐름이 더 좋습니다\. 평균 득점은 홈\s+([\d.]+)골, 원정\s+([\d.]+)골입니다\.$/, "$1 has better recent form. Average goals: home $2, away $3."],
    [/^배당과 최근 경기 데이터를 종합하면 최종 판정은\s+(.+)입니다\.$/, "Based on odds and recent form, the final verdict is $1."],
    [/^현재 표본은\s+(\d+)경기로, 강한 판정보다는 데이터 추이를 함께 확인하는 것이 적절합니다\.$/, "The current sample is $1 matches, so review the data trend rather than relying on a strong verdict."],
    [/^홈승\s*(\d+(?:\.\d+)?)%$/, "Home $1%"], [/^무승부\s*(\d+(?:\.\d+)?)%$/, "Draw $1%"],
    [/^원정승\s*(\d+(?:\.\d+)?)%$/, "Away $1%"], [/^홈\s*(\d+(?:\.\d+)?)%$/, "Home $1%"],
    [/^무\s*(\d+(?:\.\d+)?)%$/, "Draw $1%"], [/^원정\s*(\d+(?:\.\d+)?)%$/, "Away $1%"],
    [/^업데이트\s+(.+)$/, "Updated $1"], [/^배당\s+(.+)$/, "Odds $1"], [/^허용 오차\s+(.+)$/, "Tolerance $1"],
    [/^(\d+)위$/, "#$1"], [/^(\d+)명$/, "$1 players"],
    [/^(\d{4}-\d{2}-\d{2})\s*·\s*결과\s+(.+)$/, "$1 · Result: $2"],
    [/^부상·결장\s+(.+)$/, "Injuries & Absences: $1"],
    [/^선발\s+·\s*(.+)$/, "Lineup · $1"],
    [/^선발\s+(.+?)\s*·\s*(.+)$/, "Lineup $1 · $2"],
    [/^(\d+)승\s+(\d+)무\s+(\d+)패\s*·\s*득\s*([\d.]+)\s*·\s*실\s*([\d.]+)$/, "$1 W $2 D $3 L · GF $4 · GA $5"],
    [/^(\d+)승\s+([\d.]+%)$/, "$1 W $2"], [/^(\d+)무\s+([\d.]+%)$/, "$1 D $2"], [/^(\d+)패\s+([\d.]+%)$/, "$1 L $2"],
    [/^(.+)\s+유사배당$/, "$1 Similar Odds"], [/^(.+)\s+안에서 비교$/, "Compared within $1"]
  ];
  const EN_INLINE_TERMS = [
    ["승부차기 종료", "After Penalties"], ["연장 종료", "After Extra Time"], ["경기 전", "Scheduled"],
    ["진행 중", "Live"], ["데이터 부족", "Insufficient Data"], ["대형 이변 후보", "Major Upset Candidate"],
    ["이변 후보", "Upset Candidate"], ["이변 주의", "Upset Caution"], ["정배불안", "Favorite at Risk"],
    ["박빙주의", "Close Match"], ["원정승", "Away Win"], ["무승부", "Draw"], ["홈승", "Home Win"],
    ["같은 리그", "Same League"], ["매우 높음", "Very High"], ["높음", "High"], ["보통", "Medium"],
    ["낮음", "Low"], ["종료", "Finished"], ["취소", "Cancelled"], ["연기", "Postponed"],
    ["중단", "Suspended"], ["일반", "Normal"], ["안정", "Stable"], ["주의", "Caution"], ["혼전", "Wide Open"]
  ];

  function translateInlineTerms(value) {
    return EN_INLINE_TERMS.reduce((text, [source, target]) => text.split(source).join(target), String(value || ""));
  }
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
    translated = translateInlineTerms(translated);
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
