// main.ts — entry program for the make.fun bounty
// "Promote make.fun's make-your-own-bounty post on X".
//
// The whole job of this program is to hand the house the post this entry
// is about: it copies POST.json from the repository root into the output
// directory the grader reads. It does no network, reads no clock and
// touches no file outside the repository.

import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? ".";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";

const source = join(botDir, "POST.json");

// Fail loudly on a malformed POST.json instead of copying a broken file.
const parsed = JSON.parse(readFileSync(source, "utf8")) as unknown;
if (typeof parsed !== "object" || parsed === null || typeof (parsed as { url?: unknown }).url !== "string") {
  throw new Error("POST.json must be a JSON object with a string url field");
}

mkdirSync(outDir, { recursive: true });
copyFileSync(source, join(outDir, "POST.json"));
