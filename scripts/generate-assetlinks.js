const fs = require("node:fs");
const path = require("node:path");

const packageName = process.env.ANDROID_PACKAGE_ID || "com.oddsarchive.football";
const fingerprint = String(process.env.ANDROID_SHA256_CERT_FINGERPRINT || "").trim().toUpperCase();
if (!/^([0-9A-F]{2}:){31}[0-9A-F]{2}$/.test(fingerprint)) {
  console.error("Set ANDROID_SHA256_CERT_FINGERPRINT to the Play/TWA signing certificate SHA-256 fingerprint.");
  process.exit(1);
}

const output = [{
  relation: ["delegate_permission/common.handle_all_urls"],
  target: {
    namespace: "android_app",
    package_name: packageName,
    sha256_cert_fingerprints: [fingerprint]
  }
}];
const directory = path.join(__dirname, "..", ".well-known");
fs.mkdirSync(directory, { recursive: true });
fs.writeFileSync(path.join(directory, "assetlinks.json"), `${JSON.stringify(output, null, 2)}\n`, "utf8");
console.log(`Wrote .well-known/assetlinks.json for ${packageName}`);
