# OddsArchive Handoff - 2026-09-02

## Deployment approved
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
