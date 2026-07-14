const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const root = path.join(__dirname, "..");
const manifest = JSON.parse(fs.readFileSync(path.join(root, "manifest.webmanifest"), "utf8"));
const serviceWorker = fs.readFileSync(path.join(root, "service-worker.js"), "utf8");
const envExample = fs.readFileSync(path.join(root, ".env.example"), "utf8");
const gitignore = fs.readFileSync(path.join(root, ".gitignore"), "utf8");

function readPngSize(file) {
  const bytes = fs.readFileSync(path.join(root, file));
  assert.equal(bytes.toString("ascii", 1, 4), "PNG");
  return { width: bytes.readUInt32BE(16), height: bytes.readUInt32BE(20) };
}

assert.equal(manifest.id, "/");
assert.equal(manifest.lang, "ko-KR");
assert.equal(manifest.display, "standalone");
assert(manifest.categories.includes("sports"));
assert(manifest.icons.some((icon) => icon.sizes === "192x192" && icon.purpose === "any"));
assert(manifest.icons.some((icon) => icon.sizes === "512x512" && icon.purpose === "any"));
assert(manifest.icons.some((icon) => icon.sizes === "512x512" && icon.purpose === "maskable"));
assert.deepEqual(readPngSize("assets/app-icon-192.png"), { width: 192, height: 192 });
assert.deepEqual(readPngSize("assets/app-icon-512.png"), { width: 512, height: 512 });
assert.deepEqual(readPngSize("assets/app-icon-maskable-512.png"), { width: 512, height: 512 });
assert.match(serviceWorker, /privacy\.html/);
assert.match(serviceWorker, /account-deletion\.html/);
assert.match(envExample, /SUPABASE_SERVICE_ROLE_KEY/);
assert.match(gitignore, /\*\.keystore/);
console.log("PASS prepares install assets and policy paths for Google Play TWA packaging");
