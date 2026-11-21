// A working news-image-daily entry (Node 22, standard library only): its image is the entry.png beside this file, and
// the program copies it to /output/entry.png. The image sums up the world's news of Saturday 21 November 2026:
// Russia's strikes on Ukraine reaching Poland, the global markets slide, GTA 6's record first-day sales,
// a pancreatic cancer pill breakthrough, and COP31 missing its deadline.
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync } from 'node:fs';
import { join } from 'node:path';

copyFileSync(new URL('./entry.png', import.meta.url), join(process.env.MAKEFUN_OUTPUT_DIR ?? '/output', 'entry.png'));
