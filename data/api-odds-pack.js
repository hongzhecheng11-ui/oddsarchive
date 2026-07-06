(function attachApiOddsPack(root, factory) {
  const pack = factory();
  if (typeof module !== "undefined" && module.exports) module.exports = pack;
  if (root) root.ODDS_ARCHIVE_API_ODDS_PACK = pack;
})(typeof window !== "undefined" ? window : globalThis, function createApiOddsPack() {
  return {
    version: "api-odds-pack-v1",
    updatedAt: "",
    matches: []
  };
});
