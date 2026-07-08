// Validates every topic content + question bank against the app schema.
// Run: node scripts/validate-bank.mjs
import { readdirSync, existsSync, readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..', 'src');

const domainTopics = {
  d1: 13, d2: 6, d3: 13, d4: 3, d5: 6, d6: 5, d7: 15, d8: 5,
};

const QUALIFIERS = ['MOST', 'BEST', 'FIRST', 'LEAST', 'PRIMARY', 'NONE'];
let errors = 0;
let contentCount = 0;
let bankCount = 0;
let questionCount = 0;
const missing = [];

for (const [d, n] of Object.entries(domainTopics)) {
  for (let i = 1; i <= n; i++) {
    const topicId = `${d}-t${i}`;
    const contentPath = join(root, 'content', d, `${topicId}.ts`);
    const bankPath = join(root, 'data', 'questions', d, `${topicId}.json`);
    const hasContent = existsSync(contentPath);
    const hasBank = existsSync(bankPath);
    if (hasContent) contentCount++;
    if (hasBank) bankCount++;
    if (!hasContent) missing.push(`${topicId} content`);
    if (!hasBank) missing.push(`${topicId} questions`);

    if (hasBank) {
      let arr;
      try {
        arr = JSON.parse(readFileSync(bankPath, 'utf8'));
      } catch (e) {
        console.error(`✗ ${topicId}: invalid JSON — ${e.message}`);
        errors++;
        continue;
      }
      if (!Array.isArray(arr) || arr.length !== 20) {
        console.error(`✗ ${topicId}: expected 20 questions, got ${arr?.length}`);
        errors++;
      }
      const a = arr.filter((q) => q.setGroup === 'A').length;
      const b = arr.filter((q) => q.setGroup === 'B').length;
      if (a !== 10 || b !== 10) {
        console.error(`✗ ${topicId}: set split A=${a} B=${b} (expected 10/10)`);
        errors++;
      }
      const stems = new Set();
      for (const q of arr) {
        questionCount++;
        if (q.domainId !== d || q.topicId !== topicId) {
          console.error(`✗ ${q.id}: wrong domainId/topicId`);
          errors++;
        }
        if (!QUALIFIERS.includes(q.qualifier)) {
          console.error(`✗ ${q.id}: bad qualifier "${q.qualifier}"`);
          errors++;
        }
        if (!q.options || q.options.length !== 4) {
          console.error(`✗ ${q.id}: expected 4 options`);
          errors++;
        } else {
          if (q.options.filter((o) => o.correct).length !== 1) {
            console.error(`✗ ${q.id}: must have exactly one correct option`);
            errors++;
          }
          if (q.options.some((o) => !o.rationale || o.rationale.trim().length < 10)) {
            console.error(`✗ ${q.id}: an option is missing a substantive rationale`);
            errors++;
          }
        }
        if (stems.has(q.stem)) {
          console.error(`✗ ${topicId}: duplicate stem across sets: "${q.stem.slice(0, 50)}..."`);
          errors++;
        }
        stems.add(q.stem);
      }
    }
  }
}

const totalTopics = Object.values(domainTopics).reduce((s, n) => s + n, 0);
console.log(`\nContent pages: ${contentCount}/${totalTopics}`);
console.log(`Question banks: ${bankCount}/${totalTopics}`);
console.log(`Total questions: ${questionCount}`);
if (missing.length) {
  console.log(`\nMissing (${missing.length}):`);
  console.log(missing.join(', '));
}
console.log(errors === 0 ? '\n✓ No schema errors in existing banks.' : `\n✗ ${errors} schema errors.`);
process.exit(errors === 0 ? 0 : 1);
