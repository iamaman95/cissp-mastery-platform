import { domains } from '../data/domains';
import type { Question } from '../data/types';
import { getAllQuestions } from './registry';
import { getExams } from './progressStore';

function shuffle<T>(arr: T[]): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

/**
 * Selects `examLength` questions proportioned exactly to each domain's official
 * weight, preferring questions not yet used in a prior exam of this 5-exam cycle
 * (falls back to reuse once a domain's fresh pool is exhausted).
 */
export function generateExam(examLength = 125): Question[] {
  const allQuestions = getAllQuestions();
  const priorUsedIds = new Set(getExams().flatMap((e) => e.questionIds));

  const counts = domains.map((d) => ({
    domainId: d.id,
    count: Math.round(d.weight * examLength),
  }));

  // reconcile rounding so total exactly equals examLength
  const diff = examLength - counts.reduce((s, c) => s + c.count, 0);
  if (diff !== 0) counts[0].count += diff;

  const selected: Question[] = [];
  for (const { domainId, count } of counts) {
    const pool = allQuestions.filter((q) => q.domainId === domainId);
    const fresh = shuffle(pool.filter((q) => !priorUsedIds.has(q.id)));
    const stale = shuffle(pool.filter((q) => priorUsedIds.has(q.id)));
    const combined = [...fresh, ...stale];
    selected.push(...combined.slice(0, Math.min(count, combined.length)));
  }
  return shuffle(selected);
}

export function domainBreakdown(questions: Question[], answers: Record<string, string>) {
  const byDomain = new Map<string, { correct: number; total: number }>();
  for (const q of questions) {
    const entry = byDomain.get(q.domainId) ?? { correct: 0, total: 0 };
    entry.total += 1;
    const chosen = answers[q.id];
    const correctOption = q.options.find((o) => o.correct);
    if (chosen !== undefined && correctOption && q.options[Number(chosen)]?.correct) {
      entry.correct += 1;
    }
    byDomain.set(q.domainId, entry);
  }
  return Array.from(byDomain.entries()).map(([domainId, v]) => ({ domainId, ...v }));
}
