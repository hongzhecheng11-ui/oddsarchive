# OddsArchive Handoff - 2026-09-02

## Member statistics
- Authentication and member records remain Supabase Auth (`auth.users`): Google OAuth PKCE, `created_at`, `last_sign_in_at`, provider metadata and user metadata. Administrators remain rows in `public.app_admins`.
- Added `supabase/member-stats.sql`: one `security definer` function aggregates member/new-member/unique last-sign-in counts in the DB (Asia/Seoul day boundary) and returns the newest 20 members. Execute is revoked from public, anon and authenticated, and granted only to `service_role`.
- Added `api/member-stats.js`: it reuses the existing bearer-token plus `app_admins` server-side guard before calling that function with the server-only service role. Its response is allowlisted to counts plus display name, email, created/last-sign-in timestamp, provider and administrator flag; it never returns tokens or user IDs.
- Added administrator-only `#admin` UI, account link, 14-day closed-test reference disclaimer, responsive statistic cards and recent-member table. App/cache versions are prepared for a future deployment.
- Tests: new admin/regular/anonymous API coverage, UI route/format coverage, English i18n audit, syntax checks and the full `npm test` suite all pass.
- The production Supabase SQL Editor applied the function successfully on 2026-09-06. The web deployment must still be verified with an administrator account and with anonymous/non-administrator API requests. No Android build or Play release is needed because the TWA serves the web application.

## Android PKCE diagnostic deployment approved
- Supabase logs show Android `authorize` with the exact production redirect and PKCE challenge, then Google callback 302, then `POST /auth/v1/token?grant_type=pkce` 422. Redirect configuration matches the deployed callback URL.
- This diagnostic records only callback/code presence, verifier/session-key presence, Android/standalone mode, session-check outcome and safe auth event names. It never records OAuth codes, access tokens, refresh tokens, user IDs, URLs or user agents.
- User approved deployment to reproduce once in Android Chrome and once in the installed TWA, then compare server log entries before choosing a fix.

## Standings-only automatic refresh (deployed)
- Added `scripts/refresh-team-standings.js`: it deduplicates the league/season pairs already present in `team-context-pack.js`, requests only `/standings`, and replaces only non-empty standings responses. Existing team statistics, fixtures, injuries and lineups are preserved.
- `.github/workflows/collect-api-odds.yml`: the existing 12:10 KST closing-odds run also performs the lightweight standings refresh. Manual Actions runs now offer `all` (the previous behavior) or `standings`; standings-only runs skip the 30-day odds collection and upset audit.
- `package.json`: added `collect:team-context:standings`. `tests/team-context.test.js` covers deduplication and preservation of non-standings context; `tests/collector.test.js` covers workflow wiring.
- Validation: JavaScript syntax check, workflow YAML parse, targeted collector/team-context tests and full `npm test` passed. No live API call was made, so no API quota was consumed and the checked-in pack was not rewritten.
- Deployment: the latest `origin/main` received implementation commit `153dc6e`. Manual `standings` run `34692344557` succeeded and created data commit `81f1399`; 14 targets updated, 0 failures. Vercel completed successfully and production `team-context-pack.js` reports `standingsRefresh.updatedAt=2026-09-12T11:56:56.532Z`.
- `preview-server.js` remains unmodified and untracked. Existing unrelated dirty files were preserved.
- Local checkout `main` still points to the equivalent local commit `2ad9b71` and is behind the automated remote data commits; do not hard-reset because the checkout also contains unrelated uncommitted auth/app work. The deployed implementation is `153dc6e` on `origin/main`.

## Phone-only saved-session timeout recovery (local, not deployed)
- Phone normal Chrome and installed app time out at "기존 로그인 확인", while phone Chrome Incognito succeeds and desktop succeeds. This points to a stale persisted Supabase session on the normal phone profile.
- `src/lib/auth.js`: when that saved-session lookup times out and an `sb-*-auth-token` key exists, delete only that Supabase token, create a fresh client and retry once. Favorites and other OddsArchive local data are untouched. If no such token exists, the original timeout still appears.
- `tests/auth-loading.test.js`: covers this timeout-to-fresh-signed-out recovery. Pending validation and user approval before commit/push/deploy.

## Auth-event scheduling fix: deployment approved
- Phone screenshot: saved-session lookup exceeds 15 seconds; user confirms normal phone Chrome also fails but Incognito succeeds. Device root cause is not confirmed.
- src/lib/auth.js: defer auth-event favorite synchronization with setTimeout(0), rather than a microtask, so database calls start after the SDK auth-event lock can release. No session, favorite, or account deletion and no lock bypass.
- tests/auth-loading.test.js verifies no database call during the simulated auth lock and eventual session synchronization. Full npm test passes.
- User approved deployment. Asset references: app v145, auth v8, service-worker v150-auth-event-scheduling. Phone recovery still requires verification after deployment.

## Deployed: match-detail at-a-glance card
- `app.js`: the first section of the Match Summary tab now brings together comparison basis, completed sample count, home/draw/away results, the dominant historical result and a low-sample caution. It uses similar odds first and falls back to exact odds only when no similar-odds results exist.
- `src/lib/i18n.js`: added English labels and English summary copy.
- `tests/app-shell.test.js`: added similar-odds and exact-odds fallback coverage. `npm test` passed in full before deployment.
- Deployed as commit `1c60799` after rebasing onto the latest API odds-pack updates. Production HTML includes the Search Console verification tag, and Google confirmed ownership by the HTML tag method.
- Local visual navigation is blocked by the already-used guest trial, so this session did not claim a rendered match-detail screen check. `preview-server.js` remains unmodified.

## Session-independent sign-in deployment approved
- User approved deploying the saved-session-blocking fix described below. Earlier local-only statements refer to the pre-approval state.
- Runtime versions: app v142, auth v7 and service-worker v147-session-independent-login. Existing navigation restoration and diagnostic messages remain included.
- Deploy via origin/main; no app data reset, signing changes or Play Console changes. Phone OAuth return still requires user verification.

## Phone evidence: saved-session check timeout (local fix, not deployed)
- Latest phone screenshot explicitly reports "기존 로그인 확인" timeout. Configuration and SDK loading completed; the app's getSession wait is the blocked step. The underlying device/network/SDK-lock cause remains unconfirmed.
- src/lib/auth.js: separate shared client preparation from session restoration. signInWithGoogle prepares the client and invokes normal SDK OAuth without waiting for initialize/getSession. Existing session restoration, PKCE, persistence, refresh and account synchronization remain unchanged.
- app.js: share module/service loading; the sign-in button uses it directly rather than waiting for full account restoration. Other account flows retain ensureCloudAccountReady.
- tests/auth-loading.test.js: verify OAuth starts before restoration, while getSession is indefinitely pending and after its timeout; verify the click handler uses this path, client reuse, unchanged provider/redirect, error propagation and no favorite writes.
- All 36 npm test scripts pass. No phone sign-in success claimed. No commit, version bump, push or deployment for this fix yet.
- Reviewed pinned SDK source: supabase-js 2.49.8 uses auth-js 2.69.1. Its signInWithOAuth builds the standard PKCE authorize URL without getSession's initialization/lock wait: https://github.com/supabase/auth-js/blob/v2.69.1/src/GoTrueClient.ts . No lock disabling or credential deletion introduced.

## Follow-up deployment approved
- User approved deploying the pending stage-specific login diagnostics and visible navigation changes. Earlier local-only notes below describe the state before this approval.
- Cache versions: app v141, auth v6, i18n v25, styles v146 and service-worker v146-login-diagnostics-navigation.
- Phone login root cause remains unconfirmed; preserve the phone's exact stage-specific error for the next investigation. Do not describe this as confirmed login recovery.
- No change to authentication requirements, account data, Play tracks, package name or signing keys. preview-server.js remains excluded.

## Missing navigation during phone login failure (local only)
- styles.css: removed the auth-locked navigation hiding and single-column override; the normal desktop/mobile navigation layout remains visible. Protected panels and login gating are unchanged.
- tests/app-shell.test.js: verifies navigation is not hidden by auth-locked CSS and all four destinations still route to account when access is locked.
- Verified in the real local browser at 375px: navigation rendered, no horizontal overflow, selecting Fixtures retained the account gate. Local auth-config remains unavailable by preview-server design.
- All 36 npm test scripts pass. No new commit or deployment; pending login diagnostics above remain local as well.

## Phone still fails after deployment: diagnostic follow-up (local only)
- New phone screenshot shows the generic preparation-failed message, not successful login. Root cause on the phone remains unknown.
- app.js now preserves the original preparation error during the retry cooldown instead of replacing it with a generic message.
- src/lib/auth.js labels configuration, SDK and saved-session failures/timeouts; corresponding English translations and tests added.
- All 36 npm test scripts pass. These diagnostic changes have not been committed or deployed, and do not establish successful phone login.
- Asked the user to compare the same site's sign-in via the phone menu's Chrome/browser opening option. Do not delete app data or reset account credentials.

## Deployment approved
- Deployment outcome: pushed commit 8cafb8a to origin/main. Vercel oddsarchive-football reports success; all six changed runtime files on the production URL match local contents. Browser loaded app v140 / auth v5 / favorites v2 / i18n v24 and restored the existing login without console errors.
- IMPORTANT: production account still reports Sync Pending. Do not claim favorite synchronization is fully fixed. Phone sign-in recovery remains to be checked on the user's phone. No further production changes were made during deployment verification.
- Final validation: 36 npm test scripts and both additional AI analysis scripts passed. This outcome note was added locally after the deployment commit.
- User approved deploying the accumulated verified fixes. Earlier "not deployed" entries below describe the pre-deployment state.
- Fast-forwarded to 82455582a9db9dd1485d6b12aa95695e61b32f59; incoming changes were automated collection data only.
- Cache references: app.js v140, auth.js v5, favorite-sync.js v2, i18n.js v24, service-worker cache v145-login-recovery.
- Deploy through origin/main and existing Vercel integration; no Android package, signing key, Play track, testers or distribution settings changed.

## Follow-up: phone stuck preparing Google sign-in (not deployed)
- User screenshot shows persistent sign-in preparation, before account synchronization. The exact stalled request on the phone is not known.
- Confirmed production auth-config, auth module and pinned Supabase SDK respond HTTP 200. Desktop restored the existing session; this does not verify the phone's new sign-in flow.
- app.js and src/lib/auth.js: remove failed/timed-out script elements so retries reload them; impose 15-second waits on module loading, configuration, SDK loading and session lookup. Reuse the account service/client on retry and show immediate button feedback. Account data, keys and OAuth destinations unchanged.
- src/lib/i18n.js and tests/i18n.test.js: translate feedback and timeout messages.
- tests/auth-loading.test.js: simulate script error, timeout, concurrent loading, retry and late completion; test stalled config/SDK/session recovery. Added to package.json test command.
- Validation: all 36 npm test scripts passed; git diff --check passed. No Android-device success claim: the phone must be retested after approved deployment. This bounds preparation waits, not every OAuth or favorite-sync network operation.
- Prior changes below preserved. No commit, push, cache/version bump or deployment performed.

## Local changes (not committed or deployed)
- app.js: detail odds summary compares the previous snapshot with the latest. Overall first-to-latest movement used by analysis and alerts is unchanged.
- src/lib/favorite-sync.js: normalize legacy Korean local timestamps to ISO before merge and upload. Invalid dates fall back to epoch rather than overwriting newer records.
- src/lib/i18n.js: add observed English gaps in account status, underdog warnings, search counts, and team statistics.
- Related regression tests: tests/app-shell.test.js, tests/auth.test.js, tests/favorite-sync.test.js, tests/i18n.test.js.

## Evidence and verification
- Production favorite sync reproduced HTTP 400 / PostgreSQL 22007: legacy timestamp `2026. 7. 30. 오후 1:30:36` was rejected by user_favorites. No database edits were made.
- Date conversion follows the device-local timezone used by the original toLocaleString producer. Old timestamps do not contain a timezone; the original zone cannot be recovered if the device zone has since changed.
- npm test: all 35 scripts passed. Separate analysis-context and analysis-narrative scripts passed. Added date conversion, sync integration, previous-odds direction, and translation cases passed.
- Real browser: production login, date selection, detail, search, and favorite add/remove exercised. Test favorite removed; existing favorites preserved.
- Local detail at 375px: summary, exact/similar odds, base rate, team information, home/away stats and AI tabs opened with no horizontal overflow or console errors. Green increase/red decrease colors confirmed.
- Screenshot: E:/코덱스/oddsarchive-mobile-audit-20260902.png
- Final supplemental team-stat translations passed unit tests; after reloading, local guest access was exhausted, so those supplemental texts were not rechecked in-browser.

## Remaining / limits
- Real server sync recovery still needs verification after an approved deployment. Tests use a mock that rejects non-ISO timestamps.
- The existing preview-server.js does not serve the auth config API. Local login is unavailable after the guest trial. This file was not changed.
- Some Korean team-alias warnings remain (including Urawa, Kashima, FC Augsburg, FC Schalke 04, SC Freiburg).
- First production detail access had one browser timeout; retry and later tab switches worked. No general performance fix or measured speedup is claimed.
- Cached fixture cards briefly showed scheduled status before live refresh. No collection or historical data logic was changed in this task.
- No version/cache bump, commit, push, or deployment. Current base: bfb9116d46112c69df0c93b2b4ff250de9edfff2; pulled automated data updates only.
- preview-server.js was already untracked; do not modify or commit it. Local preview runs at http://127.0.0.1:4222/ (process 20552).

## 2026-09-21 shared candidate history (local only)

- Public upset/favorite candidate signals now use only the deployed `football-data-pack` plus deduplicated automatic `api-odds-pack` through `getBaseMatches`. Browser-local imported matches and cached live results remain available to ordinary odds search but no longer change the public candidate list per device.
- Added a regression check that the public candidate source is the shared server-pack source. All web tests passed.
- No authentication, Supabase, database, automatic collector, search, favorite, commit, push, cache/version, or deployment change was made. Existing unrelated local edits were preserved.
- Web and native Google login both create/use the same Supabase `auth.users` records. No signup-platform field is currently stored, so historical users cannot be reliably attributed to web versus native app from the member totals alone.
## 2026-09-21 이변후보 단일 계산 API (로컬, 미배포)

- 웹과 React Native의 후보 개수 차이 및 앱의 약 6초 계산 지연을 없애기 위해 `api/today-signals.js`를 추가했다.
- 후보 판정은 웹의 기존 `assessTodayMatches` / `getTodayStrongSignal`을 서버에서 한 번만 실행하며, 웹과 앱은 같은 결과를 받는다.
- 기존 자동수집 워크플로는 변경하지 않았다. GitHub Actions에서 2026-09-20까지 정상 실행됨을 확인했다.
- 서버 요청 실패 시 기존 기기 계산으로 복귀하는 fallback을 유지했다.
- 웹 전체 테스트와 새 API 테스트, RN typecheck/lint/Jest(18 suites, 83 tests), Android debug build가 통과했다.
- 아직 commit/push/Vercel 배포/Play 업로드는 하지 않았다. 실제 개수·속도 실기기 검증은 서버 API 배포 후 앱 빌드에서 수행해야 한다.
