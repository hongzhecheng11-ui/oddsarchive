# OddsArchive Handoff - 2026-09-02

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
