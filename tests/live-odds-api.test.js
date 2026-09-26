const assert = require("node:assert/strict");
const handler = require("../api/live-odds.js");

const originalFetch = global.fetch;
const originalApiKey = process.env.API_FOOTBALL_KEY;
process.env.API_FOOTBALL_KEY = "test-key";

const fixtureId = 2026092501;
const oddsRequests = [];
global.fetch = async (url) => {
  if (String(url).includes("/fixtures?date=2026-09-26")) {
    return {
      ok: true,
      async json() {
        return {response: [
          {
            fixture: {id: fixtureId, date: "2026-09-25T16:00:00+00:00", status: {short: "NS", long: "Not Started"}},
            league: {id: 5, name: "UEFA Nations League", season: 2026},
            teams: {home: {name: "Italy"}, away: {name: "Belgium"}},
            goals: {home: null, away: null}
          },
          {
            fixture: {id: fixtureId + 1, date: "2026-09-25T17:00:00+00:00", status: {short: "NS", long: "Not Started"}},
            league: {id: 848, name: "UEFA Europa Conference League", season: 2026},
            teams: {home: {name: "Team Conference"}, away: {name: "Opponent Conference"}},
            goals: {home: null, away: null}
          },
          {
            fixture: {id: fixtureId + 2, date: "2026-09-25T18:00:00+00:00", status: {short: "NS", long: "Not Started"}},
            league: {id: 307, name: "Saudi Pro League", season: 2026},
            teams: {home: {name: "Team Saudi"}, away: {name: "Opponent Saudi"}},
            goals: {home: null, away: null}
          },
          {
            fixture: {id: fixtureId + 3, date: "2026-09-25T19:00:00+00:00", status: {short: "NS", long: "Not Started"}},
            league: {id: 17, name: "AFC Champions League Elite", season: 2026},
            teams: {home: {name: "Team ACL"}, away: {name: "Opponent ACL"}},
            goals: {home: null, away: null}
          }
        ]};
      }
    };
  }
  if (String(url).includes("/fixtures?league=848&season=2026&date=2026-09-26")) {
    return {
      ok: true,
      async json() {
        return {response: [{
          fixture: {id: fixtureId + 4, date: "2026-09-25T17:00:00+00:00", status: {short: "NS", long: "Not Started"}},
          league: {id: 848, name: "UEFA Europa Conference League", season: 2026},
          teams: {home: {name: "Team Conference"}, away: {name: "Opponent Conference"}},
          goals: {home: null, away: null}
        }]};
      }
    };
  }
  if (String(url).includes("/odds?league=5")) {
    oddsRequests.push(String(url));
    return {
      ok: true,
      async json() {
        return {response: [{
          fixture: {id: fixtureId, date: "2026-09-25T16:00:00+00:00"},
          teams: {home: {name: "Italy"}, away: {name: "Belgium"}},
          bookmakers: [{bets: [{id: 1, values: [
            {value: "Home", odd: "2.10"},
            {value: "Draw", odd: "3.20"},
            {value: "Away", odd: "3.60"}
          ]}]}]
        }]};
      }
    };
  }
  if (String(url).includes("/odds?")) oddsRequests.push(String(url));
  throw new Error(`Unexpected API-Football request: ${url}`);
};

function makeResponse() {
  return {
    statusCode: 0,
    headers: {},
    body: "",
    setHeader(name, value) { this.headers[name] = value; },
    end(body) { this.body = body; }
  };
}

(async () => {
  const response = makeResponse();
  await handler({method: "GET", query: {date: "2026-09-26", league: "ALL"}, headers: {}}, response);

  assert.equal(response.statusCode, 200);
  const payload = JSON.parse(response.body);
  const match = payload.matches.find((item) => item.fixtureId === fixtureId);
  assert.ok(match, "Nations League fixture should pass the supported-league filter");
  assert.equal(match.league, "NATIONS_LEAGUE");
  assert.equal(match.date, "2026-09-26");
  assert.equal(match.startTime, "01:00");
  assert.deepEqual([match.homeOdds, match.drawOdds, match.awayOdds], ["2.10", "3.20", "3.60"]);
  for (const [id, league] of [
    [fixtureId + 1, "UEFA_CONFERENCE"],
    [fixtureId + 2, "SAUDI_PRO_LEAGUE"],
    [fixtureId + 3, "ACL"]
  ]) {
    const fixtureOnly = payload.matches.find((item) => item.fixtureId === id);
    assert.ok(fixtureOnly, `${league} fixture should be retained without odds`);
    assert.equal(fixtureOnly.league, league);
    assert.equal(fixtureOnly.oddsUnavailable, true);
    assert.deepEqual([fixtureOnly.homeOdds, fixtureOnly.drawOdds, fixtureOnly.awayOdds], ["", "", ""]);
  }
  assert.deepEqual(oddsRequests.map((url) => url.match(/odds\?league=(\d+)/)?.[1]), ["5"], "fixture-only leagues must not consume odds requests");
  const leagueResponse = makeResponse();
  await handler({method: "GET", query: {date: "2026-09-26", league: "UEFA_CONFERENCE"}, headers: {}}, leagueResponse);
  const leaguePayload = JSON.parse(leagueResponse.body);
  assert.equal(leagueResponse.statusCode, 200);
  assert.equal(leaguePayload.matches[0].oddsUnavailable, true);
  assert.deepEqual([leaguePayload.matches[0].homeOdds, leaguePayload.matches[0].drawOdds, leaguePayload.matches[0].awayOdds], ["", "", ""]);
  assert.equal(oddsRequests.length, 1, "league-specific fixture lookup must also skip unsupported odds requests");
  console.log("PASS keeps fixtures without odds and requests odds only for supported leagues");
})().catch((error) => {
  console.error(error);
  process.exitCode = 1;
}).finally(() => {
  global.fetch = originalFetch;
  if (originalApiKey === undefined) delete process.env.API_FOOTBALL_KEY;
  else process.env.API_FOOTBALL_KEY = originalApiKey;
});
