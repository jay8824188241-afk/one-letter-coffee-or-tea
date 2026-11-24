// One Letter: Coffee or Tea — entry "A" (coffee).
// Writes exactly one character, "A", to /output/entry.txt with no newline.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const LETTER: string = "A"; // coffee — exactly one character, no newline.

// Guard the gate: the entry must be exactly one character.
if (LETTER.length !== 1) {
  throw new Error("entry must be exactly one character");
}

const OUTPUT_DIR: string = process.env.OUTPUT_DIR ?? "/output";
const OUTPUT_FILE: string = join(OUTPUT_DIR, "entry.txt");

mkdirSync(dirname(OUTPUT_FILE), { recursive: true });
writeFileSync(OUTPUT_FILE, LETTER, "utf8");
