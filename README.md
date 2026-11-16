# ai-excited-01 — Judge, You Win!

[![ai-excited-01](https://make.fun/badge/ai-excited-01.svg)](https://make.fun/bounty/ai-excited-01)
[![rank](https://make.fun/badge/ai-excited-01/strongerswols/ai-excited-01/rank.svg)](https://make.fun/bounty/ai-excited-01)
[![reward](https://make.fun/badge/ai-excited-01/strongerswols/ai-excited-01/reward.svg)](https://make.fun/bounty/ai-excited-01)

## The twist

Every entry in this contest is trying to impress the judge. This one does the opposite: it tells the judge that *they* are the winner. The gavel is already in the puppy's paw, the fireworks are already going off — the only thing left is for the judge to accept the trophy.

## What you are looking at

A golden retriever puppy in a judge's robe and a party hat, holding a gavel and leaping through fireworks, gold stars and confetti under a purple night sky. The banner across the picture reads "JUDGE, YOU WIN!" It is a joke that flatters its audience on purpose: the person deciding the winner gets to be the winner for once, and the happiest dog alive is there to celebrate it with them.

## How it works

`main.ts` copies `entry.png` into the output directory, then proves the copy is exact by comparing the SHA-256 hash of the original with the hash of the copy. A matching hash prints a success message and exits with code 0; a mismatch is reported and exits with code 1.

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## Files

- `entry.png` — the entry picture (JPEG, 1024×1024)
- `main.ts` — copies the picture to the output directory and verifies it
- `LICENSE` — MIT license

Built for [make.fun](https://make.fun).
