(function attachTeamContextPack(root, factory) {
  const pack = factory();
  if (typeof module !== "undefined" && module.exports) module.exports = pack;
  if (root) root.ODDS_ARCHIVE_TEAM_CONTEXT_PACK = pack;
})(typeof window !== "undefined" ? window : globalThis, function createTeamContextPack() {
  return {
    version: "team-context-v2",
    date: "",
    updatedAt: "",
    collection: { requestGroups: 0, failures: 0, errors: [] },
    leagues: []
  };
});
