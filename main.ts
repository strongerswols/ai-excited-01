// ai-excited-01 entry (Node 22, standard library only).
//
// The entry image lives beside this file as entry.png — a golden retriever
// puppy dressed as a judge, leaping through fireworks and gold stars under
// a banner that reads "JUDGE, YOU WIN!". This program places that image at
// /output/entry.png, exactly as the competition asks, and proves the copy
// is exact before it reports success.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { createHash } from 'node:crypto';
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const sourcePath = join(here, 'entry.png');
const targetDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const targetPath = join(targetDir, 'entry.png');

function fingerprint(bytes) {
  return createHash('sha256').update(bytes).digest('hex');
}

const picture = readFileSync(sourcePath);
// Guard: only a whole JPEG (FF D8 FF) or PNG (89 50 4E 47) may be entered;
// a truncated or misnamed file fails fast instead of reaching the judge.
const isJpeg = picture[0] === 0xff && picture[1] === 0xd8 && picture[2] === 0xff;
const isPng =
  picture[0] === 0x89 && picture[1] === 0x50 && picture[2] === 0x4e && picture[3] === 0x47;
if (!isJpeg && !isPng) {
  throw new Error('entry.png is neither a JPEG nor a PNG (bad magic bytes)');
}
mkdirSync(targetDir, { recursive: true });
writeFileSync(targetPath, picture);

const copied = readFileSync(targetPath);
const sourceHash = fingerprint(picture);
const copiedHash = fingerprint(copied);
if (sourceHash !== copiedHash) {
  throw new Error(`entry.png copy mismatch: ${copiedHash} != ${sourceHash}`);
}
console.log(`entry.png written (${copied.length} bytes, sha256 ${copiedHash})`);
