(function initializeFavoriteSync(globalScope) {
  function cleanText(value, maxLength = 300) {
    return String(value || "").trim().slice(0, maxLength);
  }

  function normalizeTimestamp(value) {
    const text = cleanText(value, 80);
    const legacy = text.match(/^(\d{4})\.\s*(\d{1,2})\.\s*(\d{1,2})\.\s*(\uC624\uC804|\uC624\uD6C4)\s*(\d{1,2}):(\d{2}):(\d{2})$/);
    let parsed;
    if (legacy) {
      const [, year, month, day, period, hour, minute, second] = legacy;
      const hours = Number(hour) % 12 + (period === "\uC624\uD6C4" ? 12 : 0);
      // Old records used toLocaleString("ko-KR") in the device's local timezone.
      const date = new Date(Number(year), Number(month) - 1, Number(day), hours, Number(minute), Number(second));
      const valid = Number(hour) >= 1 && Number(hour) <= 12
        && date.getFullYear() === Number(year) && date.getMonth() === Number(month) - 1
        && date.getDate() === Number(day) && date.getHours() === hours
        && date.getMinutes() === Number(minute) && date.getSeconds() === Number(second);
      parsed = valid ? date.getTime() : NaN;
    } else {
      parsed = Date.parse(text);
    }
    return new Date(Number.isFinite(parsed) ? parsed : 0).toISOString();
  }

  function normalizeCriteria(criteria = {}) {
    return {
      homeOdds: cleanText(criteria.homeOdds, 20),
      drawOdds: cleanText(criteria.drawOdds, 20),
      awayOdds: cleanText(criteria.awayOdds, 20),
      tolerance: cleanText(criteria.tolerance || "0.00", 20),
      customTolerance: cleanText(criteria.customTolerance, 20),
      league: cleanText(criteria.league || "ALL", 80) || "ALL"
    };
  }

  function normalizeMatchSnapshot(match = null) {
    if (!match || typeof match !== "object") return null;
    const homeTeam = cleanText(match.homeTeam, 120);
    const awayTeam = cleanText(match.awayTeam, 120);
    if (!homeTeam || !awayTeam) return null;
    return {
      date: cleanText(match.date, 10),
      league: cleanText(match.league, 80),
      homeTeam,
      awayTeam,
      startTime: cleanText(match.startTime, 20)
    };
  }

  function normalizeFavoriteRecord(record = {}) {
    const sourceMatchId = cleanText(record.sourceMatchId || record.source_match_id, 240);
    const favoriteId = cleanText(record.favoriteId || record.favorite_id, 300);
    if (!favoriteId) return null;
    return {
      schemaVersion: 1,
      favoriteId,
      itemType: sourceMatchId ? "match" : "odds_search",
      sourceMatchId,
      active: record.active !== false,
      name: cleanText(record.name, 120),
      criteria: normalizeCriteria(record.criteria),
      match: normalizeMatchSnapshot(record.match || record.match_snapshot),
      updatedAt: normalizeTimestamp(record.updatedAt || record.favoriteUpdatedAt || record.favorite_updated_at)
    };
  }

  function timestamp(value) {
    const parsed = Date.parse(value || "");
    return Number.isFinite(parsed) ? parsed : 0;
  }

  function mergeFavoriteRecords({ local = [], cache = [], server = [] } = {}) {
    const merged = new Map();
    const sources = [
      { records: local, priority: 1 },
      { records: cache, priority: 2 },
      { records: server, priority: 3 }
    ];
    for (const source of sources) {
      for (const rawRecord of Array.isArray(source.records) ? source.records : []) {
        const record = normalizeFavoriteRecord(rawRecord);
        if (!record) continue;
        const current = merged.get(record.favoriteId);
        const nextTime = timestamp(record.updatedAt);
        const currentTime = timestamp(current?.record.updatedAt);
        if (!current || nextTime > currentTime || (nextTime === currentTime && source.priority >= current.priority)) {
          merged.set(record.favoriteId, { record, priority: source.priority });
        }
      }
    }
    return [...merged.values()]
      .map((entry) => entry.record)
      .sort((a, b) => timestamp(b.updatedAt) - timestamp(a.updatedAt));
  }

  function toDatabaseRow(record, userId) {
    const normalized = normalizeFavoriteRecord(record);
    if (!normalized || !userId) return null;
    return {
      user_id: String(userId),
      favorite_id: normalized.favoriteId,
      item_type: normalized.itemType,
      source_match_id: normalized.sourceMatchId,
      active: normalized.active,
      name: normalized.name,
      criteria: normalized.criteria,
      match_snapshot: normalized.match,
      favorite_updated_at: normalized.updatedAt,
      updated_at: new Date().toISOString()
    };
  }

  function fromDatabaseRow(row = {}) {
    return normalizeFavoriteRecord(row);
  }

  function toSearchHistoryEntry(record = {}) {
    const normalized = normalizeFavoriteRecord(record);
    if (!normalized) return null;
    return {
      id: `account-${normalized.favoriteId}`,
      key: normalized.sourceMatchId ? `match|${normalized.sourceMatchId}` : normalized.favoriteId.replace(/^odds:/, ""),
      ...normalized.criteria,
      sourceMatchId: normalized.sourceMatchId,
      sourceMatch: normalized.match,
      favorite: normalized.active,
      favoriteName: normalized.name,
      favoriteId: normalized.favoriteId,
      favoriteUpdatedAt: normalized.updatedAt,
      createdAt: normalized.updatedAt,
      searchedAt: normalized.updatedAt,
      syncVersion: 1,
      accountRecord: true
    };
  }

  function getAccountCacheKey(userId) {
    return `oddsArchiveAccountFavorites:${String(userId || "")}`;
  }

  function getAccountQueueKey(userId) {
    return `oddsArchiveFavoriteSyncQueue:${String(userId || "")}`;
  }

  function coalesceSyncQueue(records = []) {
    return mergeFavoriteRecords({ cache: records });
  }

  const exportsObject = {
    coalesceSyncQueue,
    fromDatabaseRow,
    getAccountCacheKey,
    getAccountQueueKey,
    mergeFavoriteRecords,
    normalizeFavoriteRecord,
    toDatabaseRow,
    toSearchHistoryEntry
  };
  if (typeof module !== "undefined" && module.exports) module.exports = exportsObject;
  if (globalScope) globalScope.ODDS_ARCHIVE_FAVORITE_SYNC = exportsObject;
})(typeof window !== "undefined" ? window : globalThis);
