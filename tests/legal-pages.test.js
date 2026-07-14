const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const root = path.join(__dirname, "..");
const index = fs.readFileSync(path.join(root, "index.html"), "utf8");
const privacy = fs.readFileSync(path.join(root, "privacy.html"), "utf8");
const terms = fs.readFileSync(path.join(root, "terms.html"), "utf8");
const deletion = fs.readFileSync(path.join(root, "account-deletion.html"), "utf8");

assert.match(index, /href="privacy\.html"/);
assert.match(index, /href="terms\.html"/);
assert.match(index, /href="account-deletion\.html"/);
assert.match(index, /id="google-delete-account"/);
assert.match(privacy, /Supabase/);
assert.match(privacy, /사용자 UUID/);
assert.match(privacy, /이메일, 이름, 프로필 사진을 복사해 저장하지 않으며/);
assert.match(privacy, /Google과 Supabase Auth가 처리하는 이메일/);
assert.match(terms, /수익을 보장하지 않습니다/);
assert.match(deletion, /내정보에서 계정 삭제/);
assert.match(deletion, /서버 즐겨찾기/);
console.log("PASS publishes privacy, terms, and account deletion pathways");
