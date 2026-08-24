// 영어 모드에서 한글이 남는 문구를 찾는다.
// 화면에 실제로 닿는 자리만 본다: index.html 의 텍스트와 접근성 속성,
// app.js 에서 textContent / aria-label / placeholder / title 에 넣는 값.
// 팀명·리그명 사전은 별도 경로(translateTeamName)로 처리되므로 대상이 아니다.
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const i18n = require(path.join(ROOT, "src/lib/i18n.js"));

const HANGUL = /[\uAC00-\uD7A3]/;
const PLACEHOLDER_SAMPLES = ["1", "3.50", "EPL", "12,345"];

function readFile(relativePath) {
  return fs.readFileSync(path.join(ROOT, relativePath), "utf8");
}

function isTranslated(text) {
  return !HANGUL.test(i18n.translateText(text, "en"));
}

// 템플릿 리터럴은 값이 끼워지므로 표본을 넣어 패턴이 걸리는지 본다.
function isTemplateTranslated(template) {
  const candidates = PLACEHOLDER_SAMPLES.map((sample) => template.replace(/\$\{[^}]*\}/g, sample));
  return candidates.some(isTranslated);
}

// 검사 대상에서 빼는 영역:
// - <title> 과 og/twitter 메타는 updateMetadata 가 따로 바꾼다
// - 언어 선택기의 "한국어" 는 그 언어로 적혀 있어야 한다
function stripUntranslatedByDesign(html) {
  return String(html)
    .replace(/<title>[\s\S]*?<\/title>/g, "")
    .replace(/<meta[^>]*(og:|twitter:)[^>]*>/g, "")
    .replace(/<select[^>]*id="language-select"[\s\S]*?<\/select>/g, "");
}

function collectFromMarkup(rawHtml, file) {
  const html = stripUntranslatedByDesign(rawHtml);
  const findings = [];

  // 접근성 속성
  const attributeMatcher = /(aria-label|placeholder|title)="([^"]*)"/g;
  let match;
  while ((match = attributeMatcher.exec(html))) {
    const [, attribute, value] = match;
    const text = value.trim();
    if (!text || !HANGUL.test(text) || isTranslated(text)) continue;
    findings.push({ file, kind: attribute, text });
  }

  // 태그 사이의 사용자 문구
  const textMatcher = />([^<>{}]*[\uAC00-\uD7A3][^<>{}]*)</g;
  while ((match = textMatcher.exec(html))) {
    const text = match[1].replace(/\s+/g, " ").trim();
    if (!text || isTranslated(text)) continue;
    findings.push({ file, kind: "text", text });
  }

  return findings;
}

function collectFromScript(source, file) {
  const findings = [];
  const seen = new Set();

  const add = (kind, text, translated) => {
    const key = `${kind}|${text}`;
    if (translated || seen.has(key)) return;
    seen.add(key);
    findings.push({ file, kind, text });
  };

  // textContent / placeholder / title 대입 - 따옴표 문자열
  const assignMatcher = /\.(textContent|placeholder|title)\s*=\s*"([^"\\]*)"/g;
  let match;
  while ((match = assignMatcher.exec(source))) {
    const [, property, text] = match;
    if (!HANGUL.test(text)) continue;
    add(property, text, isTranslated(text));
  }

  // textContent 대입 - 템플릿 리터럴
  const templateMatcher = /\.(textContent|title)\s*=\s*`([^`]*)`/g;
  while ((match = templateMatcher.exec(source))) {
    const [, property, text] = match;
    if (!HANGUL.test(text)) continue;
    add(`${property} (템플릿)`, text, isTemplateTranslated(text));
  }

  // 상태·안내 문구를 넘기는 헬퍼 호출 (setAutoUpdateStatus("...") 등)
  const setterMatcher = /\bset[A-Za-z]*(?:Status|Message|Text|Label|Title|Note|Summary)\s*\(\s*"([^"\\]*)"/g;
  while ((match = setterMatcher.exec(source))) {
    const text = match[1];
    if (!HANGUL.test(text)) continue;
    add("status", text, isTranslated(text));
  }

  const setterTemplateMatcher = /\bset[A-Za-z]*(?:Status|Message|Text|Label|Title|Note|Summary)\s*\(\s*`([^`]*)`/g;
  while ((match = setterTemplateMatcher.exec(source))) {
    const text = match[1];
    if (!HANGUL.test(text)) continue;
    add("status (템플릿)", text, isTemplateTranslated(text));
  }

  // setAttribute("aria-label", "...")
  const ariaMatcher = /setAttribute\(\s*"(aria-label|title|placeholder)"\s*,\s*"([^"\\]*)"\s*\)/g;
  while ((match = ariaMatcher.exec(source))) {
    const [, attribute, text] = match;
    if (!HANGUL.test(text)) continue;
    add(attribute, text, isTranslated(text));
  }

  // setAttribute("aria-label", `...${값}...`)
  const ariaTemplateMatcher = /setAttribute\??\(\s*"(aria-label|title|placeholder)"\s*,\s*`([^`]*)`/g;
  while ((match = ariaTemplateMatcher.exec(source))) {
    const [, attribute, text] = match;
    if (!HANGUL.test(text)) continue;
    add(`${attribute} (템플릿)`, text, isTemplateTranslated(text));
  }

  return findings;
}

function auditI18n() {
  return [
    ...collectFromMarkup(readFile("index.html"), "index.html"),
    ...collectFromScript(readFile("app.js"), "app.js")
  ];
}

if (require.main === module) {
  const findings = auditI18n();
  const byKind = findings.reduce((groups, finding) => {
    (groups[finding.kind] = groups[finding.kind] || []).push(finding);
    return groups;
  }, {});

  console.log(`영어 모드 한글 잔존: ${findings.length}건`);
  for (const [kind, items] of Object.entries(byKind).sort((left, right) => right[1].length - left[1].length)) {
    console.log(`\n[${kind}] ${items.length}건`);
    items.forEach((item) => console.log(`  ${item.file}  ${item.text.slice(0, 70)}`));
  }
  if (findings.length > 0) process.exitCode = 1;
}

module.exports = { auditI18n, collectFromMarkup, collectFromScript, isTranslated, isTemplateTranslated };
