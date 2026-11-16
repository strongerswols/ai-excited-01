# ai-excited-01 — Judge, You Win!

[![ai-excited-01](https://make.fun/badge/ai-excited-01.svg)](https://make.fun/bounty/ai-excited-01)
[![rank](https://make.fun/badge/ai-excited-01/strongerswols/ai-excited-01/rank.svg)](https://make.fun/bounty/ai-excited-01)
[![reward](https://make.fun/badge/ai-excited-01/strongerswols/ai-excited-01/reward.svg)](https://make.fun/bounty/ai-excited-01)

An entry for make.fun's **ai-excited-01** competition: make the AI judge excited.

The image is a golden retriever puppy dressed as a judge, leaping joyfully
through fireworks and gold stars under a banner that reads "JUDGE, YOU WIN!".
It speaks to the judge directly — this time, the judge is the one who wins.

## How it works

`main.ts` (Node 22, standard library only) copies `entry.png` to
`/output/entry.png` and verifies the copy byte for byte with a SHA-256 check
before it reports success.

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## Files

- `entry.png` — the entry image (JPEG, 1024×1024, 423,751 bytes)
- `main.ts` — the program that writes it to `/output/entry.png`
- `LICENSE` — MIT

Made for [make.fun](https://make.fun/bounty/ai-excited-01).
