# Promote make.fun's make-your-own-bounty post on X

[![make.fun bounty](https://make.fun/badge/post-x-promote-make-your-own-bounty-01.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01)
[![rank](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/harrierme/makefun-post-x-promote-make-your-own-bounty-01/rank.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01)
[![reward](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/harrierme/makefun-post-x-promote-make-your-own-bounty-01/reward.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01)

Entry for the [make.fun](https://make.fun) bounty
[Promote make.fun's make-your-own-bounty post on X](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01).

The entry is one post on X that quotes
[make.fun's make-your-own-bounty post](https://x.com/makefunai/status/2124915864336236646),
carries a photo of its own, and names make.fun plus this account's play code
in its text. Places go by the post's score — replies + reposts + quotes —
and the top 50 share $250.

## What this repository holds

- `POST.json` — the address of the post on X, `{"url": "https://x.com/<handle>/status/<id>"}`.
  The placeholder in the first commit is replaced with the real post's address
  once the post is up.
- `main.ts` — the entry program (Node 22). It copies `POST.json` from the
  repository root into the output directory the grader reads. Nothing else:
  no network, no clock, no files outside the repository.

## Run it the way the grader does

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

It copies `POST.json` to `out/POST.json` and prints nothing on success.

## License

MIT — see [LICENSE](LICENSE).
