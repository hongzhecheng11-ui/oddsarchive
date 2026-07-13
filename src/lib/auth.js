(function initializeAuth(globalScope) {
  const syncTools = globalScope?.ODDS_ARCHIVE_FAVORITE_SYNC
    || (typeof require !== "undefined" ? require("./favorite-sync.js") : null);

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
      script.addEventListener("load", () => { script.dataset.loaded = "true"; resolve(); }, { once: true });
      script.addEventListener("error", () => reject(new Error("Login library failed to load")), { once: true });
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
    const fetchConfig = options.fetchConfig || (async () => {
      const response = await fetch("/api/auth-config", { headers: { Accept: "application/json" }, credentials: "same-origin" });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(payload.error || "Login configuration unavailable");
      return payload;
    });
    const sdkLoader = options.sdkLoader || loadScriptOnce;
    const clientFactory = options.clientFactory || ((config) => globalScope.supabase.createClient(
      config.supabaseUrl,
      config.publishableKey,
      { auth: { flowType: "pkce", persistSession: true, autoRefreshToken: true, detectSessionInUrl: true } }
    ));
    let client = null;
    let config = null;
    let userId = "";
    let initializePromise = null;
    let authSubscription = null;

    function emit(status, extra = {}) {
      onStateChange({ status, userId, ...extra });
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

    async function synchronizeSession(session) {
      const nextUserId = String(session?.user?.id || "");
      if (!nextUserId) {
        userId = "";
        favorites?.clearAccountRecords?.();
        emit("signed_out");
        return { records: [], offline: false };
      }
      userId = nextUserId;
      emit("syncing");
      const localRecords = favorites?.getLocalRecords?.() || [];
      const cachedRecords = readCache(userId);
      const queuedRecords = readQueue(userId);
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
      emit(offline ? "offline" : "signed_in", { favoriteCount: merged.filter((record) => record.active).length });
      return { records: merged, offline };
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

    async function initialize() {
      if (initializePromise) return initializePromise;
      initializePromise = (async () => {
        emit("loading");
        config = await fetchConfig();
        await sdkLoader(config.sdkUrl);
        client = clientFactory(config);
        const { data } = await client.auth.getSession();
        await synchronizeSession(data?.session || null);
        const listener = client.auth.onAuthStateChange((_event, session) => {
          Promise.resolve().then(() => synchronizeSession(session)).catch(() => emit("offline"));
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

    async function signInWithGoogle() {
      await initialize();
      const { error } = await client.auth.signInWithOAuth({
        provider: "google",
        options: { redirectTo: config.redirectTo }
      });
      if (error) throw error;
    }

    async function signOut() {
      if (!client) return;
      const { error } = await client.auth.signOut();
      if (error) throw error;
      userId = "";
      favorites?.clearAccountRecords?.();
      emit("signed_out");
    }

    function destroy() {
      authSubscription?.unsubscribe?.();
      authSubscription = null;
    }

    return { destroy, initialize, signInWithGoogle, signOut, syncAccountRecords, synchronizeSession, getUserId: () => userId };
  }

  const exportsObject = { createAccountService, loadScriptOnce };
  if (typeof module !== "undefined" && module.exports) module.exports = exportsObject;
  if (globalScope) globalScope.ODDS_ARCHIVE_AUTH = exportsObject;
})(typeof window !== "undefined" ? window : globalThis);
