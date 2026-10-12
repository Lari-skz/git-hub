// Verifică fișierul data/echipa.js. Rulează cu: node scripts/valideaza.js
// Același script rulează automat pe fiecare Pull Request (GitHub Actions).
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const fisier = path.join(__dirname, "..", "data", "echipa.js");
const cod = fs.readFileSync(fisier, "utf8");

if (/^(<<<<<<<|=======|>>>>>>>)/m.test(cod)) {
  console.error("❌ Au rămas markeri de conflict (<<<<<<< ======= >>>>>>>) în data/echipa.js");
  process.exit(1);
}

let echipa;
try {
  echipa = vm.runInNewContext(cod + "\n;echipa");
} catch (e) {
  console.error("❌ data/echipa.js nu este JavaScript valid:", e.message);
  process.exit(1);
}

const campuri = ["nume", "rol", "hobby", "emoji"];
const erori = [];
const nume = new Set();

echipa.forEach((p, i) => {
  campuri.forEach((c) => {
    if (typeof p[c] !== "string" || p[c].trim() === "") {
      erori.push(`Intrarea #${i + 1} (${p.nume || "fără nume"}): lipsește câmpul "${c}"`);
    }
  });
  if (nume.has(p.nume)) erori.push(`Numele "${p.nume}" apare de două ori`);
  nume.add(p.nume);
});

if (erori.length) {
  erori.forEach((e) => console.error("❌ " + e));
  process.exit(1);
}
console.log(`✅ Totul e în regulă: ${echipa.length} membri în echipă.`);
