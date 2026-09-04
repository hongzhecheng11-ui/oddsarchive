const assert = require("assert");
const app = require("../app.js");

function test(name, fn) {
  try {
    fn();
    console.log(`PASS ${name}`);
  } catch (error) {
    console.error(`FAIL ${name}`);
    console.error(error);
    process.exitCode = 1;
  }
}

test("picks a match where the favorite's actual hit rate clearly beats the market's implied rate", () => {
  const todayMatch = {
    date: "2026-09-04",
    league: "EPL",
    homeTeam: "Arsenal",
    awayTeam: "Ipswich",
    homeOdds: "1.50",
    drawOdds: "4.00",
    awayOdds: "6.00"
  };
  // 40경기 표본, 홈(정배) 32승/4무/4패 = 80% 적중. 시장 내재확률(1/1.50 기준)은 약 61.5%라
  // 실제 적중률이 시장 예상보다 뚜렷하게(18%p 이상) 높다. 컨텍스트 신뢰도("낮음"이면
  // 강한 신호에서 제외됨)가 확보되도록 두 팀의 과거 맞대결로 최근 폼 표본도 채운다.
  const history = Array.from({ length: 40 }, (_, index) => ({
    date: `2025-${String((index % 12) + 1).padStart(2, "0")}-${String((index % 28) + 1).padStart(2, "0")}`,
    league: "EPL",
    homeTeam: "Arsenal",
    awayTeam: "Ipswich",
    homeOdds: "1.50",
    drawOdds: "4.00",
    awayOdds: "6.00",
    result: index < 32 ? "H" : index < 36 ? "D" : "A"
  }));

  const signal = app.getTodayStrongSignal([todayMatch], history);

  assert.ok(signal, "a strong signal should be found");
  assert.strictEqual(signal.match.homeTeam, "Arsenal");
  assert.strictEqual(signal.match.awayTeam, "Ipswich");
  assert.ok(signal.knownMatches >= app.STRONG_SIGNAL_MIN_SAMPLE);
  assert.ok(signal.hitRateLift >= 10);
});

test("returns null when no match today clears the strong-signal bar", () => {
  const todayMatch = {
    date: "2026-09-04",
    league: "EPL",
    homeTeam: "Arsenal",
    awayTeam: "Ipswich",
    homeOdds: "1.90",
    drawOdds: "3.40",
    awayOdds: "4.20"
  };
  // 정배 적중률이 시장 예상과 거의 같은 평범한 표본 - 강한 신호가 아니다.
  const history = Array.from({ length: 40 }, (_, index) => ({
    date: `2025-01-${String((index % 28) + 1).padStart(2, "0")}`,
    league: "EPL",
    homeTeam: `Fav ${index}`,
    awayTeam: `Dog ${index}`,
    homeOdds: "1.90",
    drawOdds: "3.40",
    awayOdds: "4.20",
    result: index < 21 ? "H" : index < 32 ? "D" : "A"
  }));

  const signal = app.getTodayStrongSignal([todayMatch], history);

  assert.strictEqual(signal, null);
});

test("returns null when there is not enough sample even if the favorite looks strong", () => {
  const todayMatch = {
    date: "2026-09-04",
    league: "EPL",
    homeTeam: "Arsenal",
    awayTeam: "Ipswich",
    homeOdds: "1.50",
    drawOdds: "4.00",
    awayOdds: "6.00"
  };
  const history = Array.from({ length: 10 }, (_, index) => ({
    date: `2025-01-${String(index + 1).padStart(2, "0")}`,
    league: "EPL",
    homeTeam: `Fav ${index}`,
    awayTeam: `Dog ${index}`,
    homeOdds: "1.50",
    drawOdds: "4.00",
    awayOdds: "6.00",
    result: index < 9 ? "H" : "D"
  }));

  const signal = app.getTodayStrongSignal([todayMatch], history);

  assert.strictEqual(signal, null);
});
