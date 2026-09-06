(function initializeAuth(globalScope) {
  const syncTools = globalScope?.ODDS_ARCHIVE_FAVORITE_SYNC
    || (typeof require !== "undefined" ? require("./favorite-sync.js") : null);
  const LOGIN_TIMEOUT_MS = 15000;
  const LOCK_ACQUIRE_TIMEOUT_MS = 3000;
  const LOGIN_TIMEOUT_MESSAGE = "로그인 준비 시간이 초과되었습니다. 네트워크 연결을 확인한 뒤 다시 눌러주세요.";

  // supabase-js 는 인증 호출이 탭 간에 겹치지 않게 Web Locks(navigator.locks)로 직렬화한다.
  // 문제는 잠금을 쥔 컨텍스트가 비정상 종료되면 그 잠금이 영영 안 풀린다는 것이다. 그러면
  // getSession() 이 무한정 대기해서 로그인 화면이 "로그인 확인"에서 멈춘다. TWA 앱은 크롬
  // 프로필을 공유하기 때문에 앱을 지웠다 다시 깔아도 이 상태가 남아 계속 재현된다.
  // 잠금은 잠깐만 기다리고, 못 얻으면 잠금 없이 진행해서 교착을 끊는다.
  function createAuthLock(scope) {
    const setTimer = (fn, ms) => (scope?.setTimeout ? scope.setTimeout(fn, ms) : setTimeout(fn, ms));
    const clearTimer = (id) => (scope?.clearTimeout ? scope.clearTimeout(id) : clearTimeout(id));

    return async function authLock(name, _acquireTimeout, fn) {
      const locks = scope?.navigator?.locks;
      const AbortControllerRef = scope?.AbortController;
      if (typeof locks?.request !== "function" || typeof AbortControllerRef !== "function") return fn();

      const controller = new AbortControllerRef();
      const timer = setTimer(() => controller.abort(), LOCK_ACQUIRE_TIMEOUT_MS);
      try {
        return await locks.request(name, { signal: controller.signal }, () => fn());
      } catch (error) {
        if (error?.name !== "AbortError") throw error;
        return fn();
      } finally {
        clearTimer(timer);
      }
    };
  }

  // 어느 단계가 얼마나 걸렸는지 남긴다. 로그인이 느리다는 신고가 들어왔을 때
  // 화면에서 바로 확인할 수 있어야 어림짐작으로 고치지 않는다.
  const loginTimings = [];

  function recordLoginTiming(stage, startedAt, outcome) {
    loginTimings.push({ stage, ms: Math.round(Date.now() - startedAt), outcome });
    if (loginTimings.length > 12) loginTimings.shift();
  }

  function waitForLoginStep(promise, stage) {
    const startedAt = Date.now();
    return new Promise((resolve, reject) => {
      const timer = setTimeout(() => {
        recordLoginTiming(stage, startedAt, "timeout");
        const timeoutError = new Error(`${stage}: ${LOGIN_TIMEOUT_MESSAGE}`);
        timeoutError.isLoginTimeout = true;
        reject(timeoutError);
      }, LOGIN_TIMEOUT_MS);
      Promise.resolve(promise).then(
        (value) => { recordLoginTiming(stage, startedAt, "ok"); resolve(value); },
        (error) => {
          recordLoginTiming(stage, startedAt, "error");
          const wrapped = new Error(`${stage}: ${error?.message || String(error)}`);
          wrapped.cause = error;
          reject(wrapped);
        }
      ).finally(() => clearTimeout(timer));
    });
  }

  function parseStoredArray(storage, key) {
    try {
      const value = JSON.parse(storage?.getItem(key) || "[]");
      return Array.isArray(value) ? value : [];
    } catch (_error) {
      return [];
    }
  }

  function writeStoredArray(storage, key, value) {
    try {
      storage?.setItem(key, JSON.stringify(Array.isArray(value) ? value : []));
      return true;
    } catch (_error) {
      return false;
    }
  }

  function loadScriptOnce(url) {
    if (typeof document === "undefined") return Promise.reject(new Error("Browser required"));
    const existing = document.querySelector(`script[data-supabase-sdk="${url}"]`);
    if (existing?.dataset.loaded === "true") return Promise.resolve();
    return new Promise((resolve, reject) => {
      const script = existing || document.createElement("script");
      script.dataset.supabaseSdk = url;
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
      const onError = () => fail("Login library failed to load");
      const timer = setTimeout(() => fail(LOGIN_TIMEOUT_MESSAGE), LOGIN_TIMEOUT_MS);
      script.addEventListener("load", onLoad, { once: true });
      script.addEventListener("error", onError, { once: true });
      if (!existing) {
        script.src = url;
        script.defer = true;
        document.head.append(script);
      }
    });
  }

  function createAccountService(options = {}) {
    if (!syncTools) throw new Error("Favorite sync tools are required");
    const storage = options.storage || (typeof localStorage !== "undefined" ? localStorage : null);
    const favorites = options.favorites;
    const onStateChange = options.onStateChange || (() => {});
    const request = options.request || ((...args) => fetch(...args));
    const fetchConfig = options.fetchConfig || (async () => {
      const response = await request("/api/auth-config", { headers: { Accept: "application/json" }, credentials: "same-origin" });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(payload.error || "Login configuration unavailable");
      return payload;
    });
    const sdkLoader = options.sdkLoader || loadScriptOnce;
    const clientFactory = options.clientFactory || ((config) => globalScope.supabase.createClient(
      config.supabaseUrl,
      config.publishableKey,
      {
        auth: {
          flowType: "pkce",
          persistSession: true,
          autoRefreshToken: true,
          detectSessionInUrl: true,
          lock: createAuthLock(globalScope)
        }
      }
    ));
    let client = null;
    let config = null;
    let userId = "";
    let isAdmin = false;
    let accessToken = "";
    let preparePromise = null;
    let initializePromise = null;
    let authSubscription = null;

    function emit(status, extra = {}) {
      onStateChange({ status, userId, isAdmin, ...extra });
    }

    function cacheKey(id) { return syncTools.getAccountCacheKey(id); }
    function queueKey(id) { return syncTools.getAccountQueueKey(id); }
    function readCache(id) { return parseStoredArray(storage, cacheKey(id)).map(syncTools.normalizeFavoriteRecord).filter(Boolean); }
    function writeCache(id, records) { return writeStoredArray(storage, cacheKey(id), records); }
    function readQueue(id) { return parseStoredArray(storage, queueKey(id)).map(syncTools.normalizeFavoriteRecord).filter(Boolean); }
    function writeQueue(id, records) { return writeStoredArray(storage, queueKey(id), syncTools.coalesceSyncQueue(records)); }

    async function upsertRecords(id, records) {
      const rows = records.map((record) => syncTools.toDatabaseRow(record, id)).filter(Boolean);
      if (rows.length === 0) return;
      const { error } = await client.from("user_favorites").upsert(rows, { onConflict: "user_id,favorite_id" });
      if (error) throw error;
    }

    async function flushQueue(id) {
      const queued = readQueue(id);
      if (queued.length === 0) return true;
      try {
        await upsertRecords(id, queued);
        writeQueue(id, []);
        return true;
      } catch (_error) {
        return false;
      }
    }

    async function checkAdminAccess(id) {
      if (!id) return false;
      try {
        const { data, error } = await client.from("app_admins").select("user_id");
        if (error) throw error;
        return (Array.isArray(data) ? data : []).some((row) => String(row?.user_id || "") === id);
      } catch (_error) {
        return false;
      }
    }

    async function synchronizeSession(session) {
      const nextUserId = String(session?.user?.id || "");
      if (!nextUserId) {
        userId = "";
        isAdmin = false;
        accessToken = "";
        favorites?.clearAccountRecords?.();
        emit("signed_out");
        return { records: [], offline: false };
      }
      userId = nextUserId;
      isAdmin = false;
      accessToken = String(session?.access_token || "");
      const localRecords = favorites?.getLocalRecords?.() || [];
      const cachedRecords = readCache(userId);
      const queuedRecords = readQueue(userId);
      const cachedMerge = syncTools.mergeFavoriteRecords({
        local: localRecords,
        cache: [...cachedRecords, ...queuedRecords]
      });
      writeCache(userId, cachedMerge);
      favorites?.setAccountRecords?.(userId, cachedMerge);
      emit("syncing");
      const adminAccessPromise = checkAdminAccess(userId);
      let serverRecords = [];
      let offline = false;
      try {
        const { data, error } = await client.from("user_favorites").select("*");
        if (error) throw error;
        serverRecords = (Array.isArray(data) ? data : []).map(syncTools.fromDatabaseRow).filter(Boolean);
      } catch (_error) {
        offline = true;
      }
      const merged = syncTools.mergeFavoriteRecords({ local: localRecords, cache: [...cachedRecords, ...queuedRecords], server: serverRecords });
      writeCache(userId, merged);
      favorites?.setAccountRecords?.(userId, merged);
      if (!offline) {
        try {
          await flushQueue(userId);
          await upsertRecords(userId, merged);
        } catch (_error) {
          offline = true;
          writeQueue(userId, [...readQueue(userId), ...merged]);
        }
      } else {
        writeQueue(userId, [...readQueue(userId), ...merged]);
      }
      isAdmin = await adminAccessPromise;
      emit(offline ? "offline" : "signed_in", { favoriteCount: merged.filter((record) => record.active).length });
      return { records: merged, offline, isAdmin };
    }

    async function syncAccountRecords(records = []) {
      if (!client || !userId) return { synced: false, reason: "signed_out" };
      const normalized = syncTools.mergeFavoriteRecords({ cache: records });
      writeCache(userId, normalized);
      favorites?.setAccountRecords?.(userId, normalized);
      try {
        await flushQueue(userId);
        await upsertRecords(userId, normalized);
        emit("signed_in", { favoriteCount: normalized.filter((record) => record.active).length });
        return { synced: true };
      } catch (_error) {
        writeQueue(userId, [...readQueue(userId), ...normalized]);
        emit("offline", { favoriteCount: normalized.filter((record) => record.active).length });
        return { synced: false, reason: "offline" };
      }
    }

    async function prepareClient() {
      if (preparePromise) return preparePromise;
      preparePromise = (async () => {
        config = await waitForLoginStep(fetchConfig(), "로그인 설정 확인");
        // index.html 이 SDK 를 미리 불러오므로 대개 이 시점에 이미 준비돼 있다. 그러면
        // 설정을 받은 뒤 파일을 또 기다리는 왕복을 통째로 건너뛴다.
        if (typeof globalScope?.supabase?.createClient !== "function") {
          await waitForLoginStep(sdkLoader(config.sdkUrl), "로그인 필수 파일 로딩");
        }
        if (!client) client = clientFactory(config);
        return client;
      })().catch((error) => {
        preparePromise = null;
        throw error;
      });
      return preparePromise;
    }

    // supabase-js 는 세션을 "sb-<프로젝트>-auth-token" 키로 저장한다. 저장된 토큰이
    // 무효해지면 getSession() 이 갱신 시도에서 매달려 로그인 화면이 "로그인 확인"에서
    // 영영 안 넘어간다. 실제로 지운 게 있을 때만 true 를 돌려줘서, 지울 게 없으면
    // 괜히 재시도하지 않게 한다.
    function clearStoredAuthTokens() {
      try {
        if (typeof storage?.key !== "function") return false;
        const staleKeys = [];
        for (let index = 0; index < Number(storage.length || 0); index += 1) {
          const key = String(storage.key(index) || "");
          if (/^sb-.+-auth-token/.test(key)) staleKeys.push(key);
        }
        staleKeys.forEach((key) => storage.removeItem(key));
        return staleKeys.length > 0;
      } catch (_error) {
        return false;
      }
    }

    async function readStoredSession(stage) {
      const { data, error } = await waitForLoginStep(client.auth.getSession(), stage);
      if (error) throw error;
      return data;
    }

    // 기기에 남은 토큰이 원인이면 사용자가 브라우저 사이트 데이터를 직접 지우는 것 말고는
    // 빠져나올 방법이 없다. 한 번은 우리가 대신 지우고 다시 시도한다. 클라이언트도 새로
    // 만드는데, 이미 메모리에 올라간 세션까지 버려야 지운 효과가 나기 때문이다.
    // 저장된 토큰이 진짜로 못 쓰게 됐을 때만 지운다. 느려서 시간이 초과된 것뿐인데
    // 지워버리면 멀쩡한 로그인이 날아가고 자동 로그인이 매번 풀린다.
    function isBrokenSessionError(error) {
      if (error?.isLoginTimeout) return false;
      const cause = error?.cause;
      if (cause?.__isAuthError) return true;
      return /AuthApiError|AuthSessionMissingError|invalid[ _]?grant|refresh[ _]?token/i.test(
        `${cause?.name || ""} ${cause?.message || error?.message || ""}`
      );
    }

    async function readStoredSessionWithRecovery() {
      try {
        return await readStoredSession("기존 로그인 확인");
      } catch (error) {
        if (!isBrokenSessionError(error) || !clearStoredAuthTokens()) throw error;
        client = clientFactory(config);
        return readStoredSession("기존 로그인 다시 확인");
      }
    }

    async function initialize() {
      if (initializePromise) return initializePromise;
      initializePromise = (async () => {
        emit("loading");
        await prepareClient();
        const data = await readStoredSessionWithRecovery();
        await synchronizeSession(data?.session || null);
        const listener = client.auth.onAuthStateChange((_event, session) => {
          // Run database calls after the auth event has released its session lock.
          setTimeout(() => {
            synchronizeSession(session).catch(() => emit("offline"));
          }, 0);
        });
        authSubscription = listener?.data?.subscription || null;
        return { client, userId };
      })().catch((error) => {
        initializePromise = null;
        emit("unavailable", { message: error.message });
        throw error;
      });
      return initializePromise;
    }

    async function signInWithGoogle(options = {}) {
      // Starting OAuth must not wait on restoration of an old, possibly stalled session.
      await prepareClient();
      const { error } = await client.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: config.redirectTo,
          ...(options.selectAccount ? { queryParams: { prompt: "select_account" } } : {})
        }
      });
      if (error) throw error;
    }

    async function switchGoogleAccount() {
      await initialize();
      if (userId) {
        const { error } = await client.auth.signOut({ scope: "local" });
        if (error) throw error;
        userId = "";
        isAdmin = false;
        accessToken = "";
        favorites?.clearAccountRecords?.();
        emit("signed_out");
      }
      return signInWithGoogle({ selectAccount: true });
    }

    async function signOut() {
      if (!client) return;
      const { error } = await client.auth.signOut();
      if (error) throw error;
      userId = "";
      isAdmin = false;
      accessToken = "";
      favorites?.clearAccountRecords?.();
      emit("signed_out");
    }

    async function deleteAccount() {
      if (!client || !userId || !accessToken) throw new Error("Google 로그인이 필요합니다.");
      const response = await request("/api/delete-account", {
        method: "POST",
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${accessToken}`
        },
        credentials: "same-origin"
      });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(payload.error || "계정을 삭제하지 못했습니다.");
      try {
        await client.auth.signOut({ scope: "local" });
      } catch (_error) {
        // The remote user has already been deleted; local cleanup still must complete.
      }
      userId = "";
      isAdmin = false;
      accessToken = "";
      favorites?.clearAccountRecords?.();
      emit("signed_out", { accountDeleted: true });
      return { deleted: true };
    }

    function destroy() {
      authSubscription?.unsubscribe?.();
      authSubscription = null;
    }

    return {
      destroy,
      initialize,
      signInWithGoogle,
      switchGoogleAccount,
      signOut,
      deleteAccount,
      syncAccountRecords,
      synchronizeSession,
      getUserId: () => userId,
      getIsAdmin: () => isAdmin,
      getAccessToken: () => accessToken,
      getLoginTimings: () => loginTimings.map((entry) => ({ ...entry }))
    };
  }

  const exportsObject = { createAccountService, loadScriptOnce, createAuthLock };
  if (typeof module !== "undefined" && module.exports) module.exports = exportsObject;
  if (globalScope) globalScope.ODDS_ARCHIVE_AUTH = exportsObject;
})(typeof window !== "undefined" ? window : globalThis);
