(function attachMatchStatisticsPack(root, factory) {
  const pack = factory();
  if (typeof module !== "undefined" && module.exports) module.exports = pack;
  if (root) root.ODDS_ARCHIVE_MATCH_STATISTICS_PACK = pack;
})(typeof window !== "undefined" ? window : globalThis, function createMatchStatisticsPack() {
  return {
    version: "match-statistics-v1",
    updatedAt: "",
    collection: {},
    matches: []
  };
});
