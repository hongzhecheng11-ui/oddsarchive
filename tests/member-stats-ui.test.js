const assert = require("node:assert/strict");
const app = require("../app.js");

const statistics = app.normalizeMemberStatistics({
  totalMembers: "23",
  newToday: 2,
  new7Days: 5,
  new14Days: 8,
  new30Days: 13,
  activeToday: 4,
  active7Days: 9,
  active14Days: 12,
  active30Days: 18,
  recentMembers: Array.from({ length: 21 }, (_, index) => ({ displayName: `Member ${index}`, isAdmin: index === 0 }))
});

assert.equal(statistics.totalMembers, 23);
assert.equal(statistics.active14Days, 12);
assert.equal(statistics.recentMembers.length, 20);
assert.equal(statistics.recentMembers[0].isAdmin, true);
assert.equal(app.getAllowedViewId("#admin", false), "search");
assert.equal(app.getAllowedViewId("#admin", true), "admin");
assert.match(app.formatMemberStatisticDate("2026-09-06T01:30:00.000Z"), /2026/);
assert.equal(app.formatMemberStatisticDate(""), "기록 없음");

console.log("PASS formats member statistics and keeps the admin route protected");
