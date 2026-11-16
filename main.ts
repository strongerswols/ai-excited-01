import { createHash } from "node:crypto";
import { copyFileSync, existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const pictureName = "entry.png";
const sourcePath = join(here, pictureName);

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? join(here, "out");
const destPath = join(outDir, pictureName);

mkdirSync(outDir, { recursive: true });
copyFileSync(sourcePath, destPath);

const fingerprint = (path: string) =>
  createHash("sha256").update(readFileSync(path)).digest("hex");

const before = fingerprint(sourcePath);
const after = fingerprint(destPath);

if (before !== after) {
  console.error(`Hash mismatch: ${before} != ${after}`);
  process.exit(1);
}

console.log(`Wrote ${destPath} (sha256 ${after})`);
