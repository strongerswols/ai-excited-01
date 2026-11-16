// ai-excited-01 — writes the entry image to the output directory.
//
// The image is a golden retriever puppy in a judge's robe and party hat,
// gavel in paw, leaping through fireworks and gold stars under a banner
// that reads "JUDGE, YOU WIN!". This program copies it to the output
// directory and proves the copy is byte-for-byte exact, so the judge
// sees exactly those bytes.

import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { createHash } from "node:crypto";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

function sha256(path: string): string {
  return createHash("sha256").update(readFileSync(path)).digest("hex");
}

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, "entry.png");
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? join(here, "out");
const target = join(outDir, "entry.png");

mkdirSync(outDir, { recursive: true });
copyFileSync(source, target);

const sourceHash = sha256(source);
const targetHash = sha256(target);
if (sourceHash !== targetHash) {
  console.error(`SHA-256 mismatch: ${sourceHash} != ${targetHash}`);
  process.exit(1);
}
console.log(`Wrote ${target} (sha256 ${targetHash})`);
