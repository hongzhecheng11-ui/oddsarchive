# 2026-09-25 Verified live league coverage additions

- Added Nations League (`NATIONS_LEAGUE`, ID 5) and the current 2026-season fixtures-and-odds-supported competitions: AFC Champions League Two (`ACL_TWO`, 18), MLS (253), Liga MX (262), Argentina Liga Profesional (128), and Brazil Serie A (71).
- UEFA Conference League (848) and Saudi Pro League (307) are now fixture-only in the live schedule endpoint. AFC Champions League Elite (17) was already mapped as `ACL` and remains in the existing scheduled collector list; the live endpoint treats it as fixture-only because current-season odds are unavailable.
- Updated the live allowlist, scheduled collector lists for the six odds-supported additions, calendar-year season handling for the Americas, web filters/options, and Korean/English league labels in web and native app. The `ALL` fixture route continues using Asia/Seoul; its response adds only the optional `oddsUnavailable` field, while historical odds archive records remain unchanged.
- Fixture-only live responses carry the optional `oddsUnavailable` flag, and web/native Today cards show “배당 미제공” rather than “배당 대기 중”. The live endpoint skips odds requests for these three competitions. This fixture-only patch did not change the DB schema, odds packs, API keys, or background collector workflow; the browser Today-match cache preserves the optional flag. Six odds-supported additions remain local schedule configuration from the previous change.
- API-Football metadata was checked read-only. No match-collection run, archive/database write, commit, push, deployment, versionCode change, or Play upload occurred.
- Verification: full web test suite passed, English-mode Hangul audit reported 0 leftovers, React Native full Jest suite passed (18 suites / 84 tests), TypeScript and focused ESLint passed, and `git diff --check` passed. A normal schedule would add about 40 odds lookup calls/day for the five new odds-supported leagues (and up to 40 fixture lookups when odds are returned), before result-update requests.
- The changes remain local and will not affect the live API or app until the relevant source is pushed and deployed.

# OddsArchive Handoff - 2026-09-21

## 현재 상태
웹은 정상 배포 상태(`app.js?v=160`). 이변후보 공통 API가 웹·앱 모두에 적용돼 같은 결과를 내보낸다.
남은 작업은 **React Native 앱 쪽**이며, 담당은 코덱스다. 웹 저장소 변경은 Claude가 담당한다.

## 코덱스가 이어받을 작업 (RN 앱)
1. ~~카드 중복 키 수정~~ — 완료(2026-09-21). `match.id`가 빈 값이라 `match.fixtureId`를 키로 사용.
   실기기(SM-S931N)에서 웹·앱 공통 4경기, 중복 키 경고 제거 확인.
2. **서명된 AAB 빌드** — 기존 업로드 서명키는 아래 위치에 있다.
   - keystore: `E:\코덱스\오즈아카이브-서명키-백업\oddsarchive-upload-key.jks`
   - alias: `oddsarchive`
   - 비밀번호: 같은 폴더의 `signing-credentials.txt`. **채팅에 붙여넣지 말고** 로컬 서명 설정
     (`gradle.properties` 또는 환경변수)에만 넣을 것.
   - 새 키를 만들면 기존 앱 업데이트가 불가능해지므로 반드시 이 키를 쓸 것.
3. **versionCode** — Play에 올라간 최신은 **6**(TWA). RN 프로젝트는 이미 **11**로 설정돼 있고
   6보다 크므로 그대로 쓰면 된다. (이전 메모의 "6→7"은 TWA 기준이라 잘못된 안내였다.)
4. Play Console 업로드
5. 실기기에서 **웹과 앱의 이변후보 개수가 같은지** 최종 확인 (현재 기준 4개)

## 이번 세션 변경 (Claude, 웹 저장소)
- `app.js` — 공통 API 결과를 로컬 계산이 덮어쓰던 경쟁 상태 수정.
  `sharedSignalsRendered` 플래그를 두어, 서버 답이 화면에 올라간 뒤에는 로컬 렌더가 실행되지 않는다.
  서버가 느릴 때 로컬이 먼저 보여주는 동작과 `.catch` 폴백은 그대로다.
- `index.html`, `service-worker.js` — `app.js?v=160`, 캐시 `v165-shared-signals-win`.
- 배포 커밋 `6462f00` (origin/main → Vercel).

### 검증 결과
- `npm test` 280개 통과, `audit-i18n` 0건.
- 프로덕션 실측: 수정 전 `4개(서버) → 7개(로컬이 덮어씀)`, 수정 후 `4개`로 고정. 콘솔 에러 0건.
- 폴백 확인: 로컬 프리뷰(API 404 상황)에서 기존처럼 로컬 계산 결과가 표시됨.
- 회귀 확인: 배당검색·오늘경기·즐겨찾기 탭 이동, 강한 신호 표시 정상.

## 참고: 기저율 기준값 (웹 기준, 대조용)
정배 = 홈·원정 중 낮은 배당(무승부 제외), 7구간, 무승부를 이변에 포함, 리그 표본 200경기 기준,
J1리그(마감배당) 제외. **집계 대상 54,696경기** — 검색 가능 경기 수(57,425)나 전체(59,908)와 다르다.
앱이 기저율 화면에서 59,908을 보여주면 오히려 잘못된 것이다.

| 구간 | 적중 | 무 | 이변 | 표본 |
|---|---|---|---|---|
| ~1.30 | 83.2% | 11.8% | 16.8% | 4,369 |
| 1.30~1.50 | 70.7% | 18.9% | 29.3% | 5,770 |
| 1.50~1.70 | 60.9% | 23.6% | 39.1% | 7,706 |
| 1.70~1.90 | 54.2% | 26.5% | 45.8% | 7,679 |
| 1.90~2.10 | 47.3% | 28.2% | 52.7% | 7,791 |
| 2.10~2.40 | 43.1% | 29.5% | 56.9% | 12,964 |
| 2.40~ | 38.5% | 30.1% | 61.5% | 8,417 |

## 이미 배포된 주요 기능 (참고)
- **공통 후보 API** `api/today-signals.js` — 웹의 `assessTodayMatches` / `getTodayStrongSignal`을 서버에서
  한 번만 실행. 공개 후보는 `getBaseMatches`(football-data-pack + 중복 제거된 api-odds-pack)만 사용하며,
  기기에 저장된 개인 데이터는 일반 배당 검색에는 계속 쓰이되 공개 후보 계산에서는 제외된다.
- **회원 통계** — `supabase/member-stats.sql`(service_role 전용 함수) + `api/member-stats.js`(관리자 가드) +
  관리자 전용 `#admin` 화면. 프로덕션 동작 확인 완료.
- **순위 자동 갱신** — `scripts/refresh-team-standings.js`, 워크플로의 12:10 KST 실행에 포함.
  수동 실행 시 `all` / `standings` 선택 가능.
- **Google 로그인** — 과거 안드로이드에서 반복 실패하던 문제는 해결됨. 원인은 supabase-js 기본
  `navigator.locks` 잠금이 백그라운드로 내려가 얼어붙은 페이지에 물려 `getSession()`이 무한 대기한 것.
  현재는 페이지 내부 전용 잠금을 써서 같은 화면의 인증 호출만 직렬화한다
  (잠금을 아예 우회하면 refresh token이 중복 사용돼 세션이 무효화되므로 되돌리지 말 것).

## 주의사항 / 한계
- `preview-server.js`는 untracked 상태로 두고 수정·커밋하지 말 것. 로컬 프리뷰는 서버리스 함수를
  제공하지 않으므로 `/api/*`가 404다(로그인·공통 후보는 로컬에서 폴백 경로를 탄다).
- 이 작업 폴더는 코덱스와 공유한다. 미커밋 변경이 있으면 `git pull`이 조용히 실패하므로,
  데이터 신선도는 로컬 파일이 아니라 `git fetch` 후 `origin/main` 기준으로 확인할 것.
- API-Football은 **Pro 요금제, 만료 2026-10-14**. 만료되면 수집이 멈춰도 워크플로는 성공으로 뜰 수 있다.
- 한국어 팀명 별칭 경고가 일부 남아 있음(Urawa, Kashima, FC Augsburg, FC Schalke 04, SC Freiburg 등).
- 비공개 테스트 요건(14일·12명) 미충족 상태 — 최근 14일 활성 5명. 이는 코드가 아니라 테스터 확보 문제다.
# Separate odds pack and automatic collection - 2026-09-25

- Added `data/new-leagues-odds-pack.js` with 66 real, complete-odds fixtures absent from both older packs: Nations League 16, MLS 16, Liga MX 9, Argentina Primera 15, Brazil Serie A 10. 58 have confirmed results. ACL Two returned no odds in the queried window and remains an automatic-collection target; no rows were fabricated. The 30-day API query returned available odds only from September 18 onward for these leagues.
- `scripts/collect-new-leagues-odds.js` writes only those six leagues into the separate pack, fails closed if an older pack already contains a target league, validates fixture uniqueness, and uses a temporary file before replacement. Repeating September 25 collection kept 66 rows and added 0 duplicates. The older `football-data-pack.js` and `api-odds-pack.js` were not modified.
- Existing scheduled collection retains its old target leagues. The same workflow now also runs the new collector and stages its file. Web search/base rates and shared today signals read the supplementary pack; the React Native loader reads it optionally, so older API deployments still load the two original packs.
- Web full test suite passed. Samsung SM-S931N local proxy/debug test showed 9 Nations League fixtures on September 26 and a Nations League match in odds search/detail; no fatal logcat errors. Original installed version 12 was restored without clearing app data. No commit, push, production deploy, or Play upload. The scheduled extension is therefore local only until an approved release.

## 2026-09-26 신규 리그 배포 및 배당 보정
- 신규 리그 자동수집 워크플로와 별도 66경기 배당팩/API/웹 연결을 main에 배포했다(`91a1edf`, `abdc845`). 공개 파일과 실제 웹의 2026-09-26 경기 24건·네이션스리그 9건을 확인했다.
- 종료된 네이션스리그 카드에서 새 팩의 배당 보정이 누락된 것을 발견해 `getStoredFixturesForDate`와 `mergeStoredOddsIntoFixtures`에 별도 팩을 추가했다. 관련 회귀 테스트와 전체 `npm test`, `git diff --check`가 통과했다.
- 무료 과거팩 22,918경기는 원본 제공처의 공개 서비스·자동수집 이용 제한을 확인해 로컬에만 보관했다. 기존 데이터팩은 교체하지 않았다.
- Android 버전 13 서명 빌드와 검사는 통과했다. Play에는 빈 Alpha 초안만 생성되어 있으며 업로드·심사 제출은 아직 완료되지 않았다. 로컬 설치는 Play 서명 차이로 거절되어 휴대폰의 기존 버전 12와 데이터를 유지했다.

## 2026-09-26 무료 추가 과거팩 연결
- 이용 허가가 확인되지 않은 상태라는 안내 후 사용자가 무료 과거팩 사용·배포를 요청했다. 제공처가 사용 사실을 모를 것이라는 추측을 허가로 간주한 것은 아니다. 기존 팩 삭제나 은폐 조치는 하지 않았다.
- `data/free-extra-leagues-pack.json`에 기존 팩에 없는 MLS 6,203, Liga MX 4,734, Argentina 6,385, Brazil 5,596경기를 별도 보관한다. 원본 수집 시각·출처·해시와 마감 배당 성격을 기록했다. 기존 `football-data-pack.js`, `api-odds-pack.js`는 변경하지 않았다.
- 앱 13이 이미 읽는 `new-leagues-odds-pack.js`에 과거 22,900건(중복 18건 제외)과 자동수집 85건을 제공한다. 자동수집은 API 행만 갱신한 뒤 별도 과거팩을 다시 연결하므로 과거팩이 사라지지 않는다. 추가 앱 바이너리는 필요 없다.
- 변환 스크립트는 `node scripts/build-free-leagues-pack.js <검증된 원본 JSON>`이다. 기존 대상 리그, 경기 수, 중복·배당·결과를 검증하고 임시 파일 후 교체한다. 새 과거 경기의 FT 상태가 정규화 때 보존되도록 한 줄 추가했다.
- 전체 `npm test`, 원본 두 팩 변경 없음 검사, 버전 13 JSON 파서 호환 검사 통과. 로컬 웹에서 2012-03-10 MLS 2.01/3.19/3.65 검색·상세 종료 표시 확인. `../oddsarchive-data-review/verify-native-supplement.cjs`로 실제 RN 로더·검색 함수를 실행해 4개 리그 과거 경기와 검색을 확인했다. 실기기 추가팩 검증은 앱 13 제공 뒤 남아 있다.
- 앱 13은 Alpha 검토 전송을 완료했으며 게시 개요에 검토 중으로 표시됐다. 빠른 자동 검사 진행 상태에서 승인은 확인되지 않았다.
