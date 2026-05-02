import puppeteer from "puppeteer";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const screenshotsDir = path.join(__dirname, "temporary screenshots");

if (!fs.existsSync(screenshotsDir)) {
  fs.mkdirSync(screenshotsDir, { recursive: true });
}

function nextScreenshotPath(label) {
  const files = fs.existsSync(screenshotsDir)
    ? fs.readdirSync(screenshotsDir).filter((f) => f.endsWith(".png"))
    : [];

  let maxN = 0;
  for (const f of files) {
    const m = f.match(/^screenshot-(\d+)/);
    if (m) maxN = Math.max(maxN, parseInt(m[1], 10));
  }

  const n = maxN + 1;
  const name = label ? `screenshot-${n}-${label}.png` : `screenshot-${n}.png`;
  return path.join(screenshotsDir, name);
}

const url = process.argv[2] || "http://localhost:3000";
const label = process.argv[3] || "";
const outPath = nextScreenshotPath(label);

const browser = await puppeteer.launch({
  executablePath:
    "C:/Users/Efran/.cache/puppeteer/chrome/win64-147.0.7727.57/chrome-win64/chrome.exe",
  args: ["--no-sandbox", "--disable-setuid-sandbox"],
});

const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900 });
await page.goto(url, { waitUntil: "networkidle0" });
await page.screenshot({ path: outPath, fullPage: true });
await browser.close();

console.log(`Screenshot saved: ${outPath}`);
