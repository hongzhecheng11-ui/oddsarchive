// 영어 모드에서 한글이 남는 문구가 새로 생기면 여기서 먼저 걸린다.
// 오늘까지 두 번(로그인 문구, 판정 라벨) 운영에 올린 뒤에야 눈으로 발견했다.
const assert = require("assert");
const audit = require("../scripts/audit-i18n.js");

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

test("no Korean is left in English mode", () => {
  const findings = audit.auditI18n();
  const report = findings.map((finding) => `  [${finding.kind}] ${finding.file}: ${finding.text}`).join("\n");
  assert.strictEqual(findings.length, 0, `${findings.length} untranslated string(s):\n${report}`);
});

test("recognises a translated string and an untranslated one", () => {
  assert.strictEqual(audit.isTranslated("전체"), true);
  assert.strictEqual(audit.isTranslated("이건사전에없는문구입니다"), false);
});

test("substitutes template values before checking", () => {
  assert.strictEqual(audit.isTemplateTranslated("표본 ${count}"), true);
  assert.strictEqual(audit.isTemplateTranslated("사전에없는템플릿 ${value}"), false);
});

test("skips markup that is untranslated by design", () => {
  const html = [
    "<title>오즈아카이브 안내</title>",
    '<meta property="og:title" content="오즈아카이브 소개">',
    '<select id="language-select"><option value="ko">한국어</option></select>',
    "<p>사전에없는본문</p>"
  ].join("\n");
  const findings = audit.collectFromMarkup(html, "test.html");
  assert.strictEqual(findings.length, 1);
  assert.strictEqual(findings[0].text, "사전에없는본문");
});

test("reads textContent and aria-label assignments from script source", () => {
  const source = [
    'element.textContent = "사전에없는대입";',
    'node.setAttribute("aria-label", "사전에없는라벨");',
    'ok.textContent = "전체";'
  ].join("\n");
  const findings = audit.collectFromScript(source, "test.js");
  const kinds = findings.map((finding) => finding.kind).sort();
  assert.deepStrictEqual(kinds, ["aria-label", "textContent"]);
});
