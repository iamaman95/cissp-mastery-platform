import { domains } from '../data/domains';
import type { ExamAttempt } from './progressStore';

export interface DomainTrendPoint {
  examIndex: number;
  pct: number;
}

export interface DomainTrend {
  domainId: string;
  title: string;
  weight: number;
  points: DomainTrendPoint[];
  avgPct: number;
  belowThresholdCount: number;
  classification: 'weak' | 'strong' | 'mixed';
}

const WEAK_THRESHOLD = 0.7;

export function computeDomainTrends(exams: ExamAttempt[]): DomainTrend[] {
  return domains.map((d) => {
    const points: DomainTrendPoint[] = exams.map((exam, idx) => {
      const entry = exam.domainBreakdown.find((b) => b.domainId === d.id);
      const pct = entry && entry.total > 0 ? entry.correct / entry.total : 0;
      return { examIndex: idx + 1, pct };
    });
    const avgPct = points.length ? points.reduce((s, p) => s + p.pct, 0) / points.length : 0;
    const belowThresholdCount = points.filter((p) => p.pct < WEAK_THRESHOLD).length;
    const classification: DomainTrend['classification'] =
      belowThresholdCount >= 3 ? 'weak' : belowThresholdCount === 0 ? 'strong' : 'mixed';
    return { domainId: d.id, title: d.title, weight: d.weight, points, avgPct, belowThresholdCount, classification };
  });
}

export interface QualifierStat {
  qualifier: string;
  correct: number;
  total: number;
  accuracy: number;
}

export function computeQualifierStats(exams: ExamAttempt[]): QualifierStat[] {
  const byQualifier = new Map<string, { correct: number; total: number }>();
  for (const exam of exams) {
    for (const r of exam.results) {
      const entry = byQualifier.get(r.qualifier) ?? { correct: 0, total: 0 };
      entry.total += 1;
      if (r.correct) entry.correct += 1;
      byQualifier.set(r.qualifier, entry);
    }
  }
  return Array.from(byQualifier.entries())
    .map(([qualifier, v]) => ({ qualifier, ...v, accuracy: v.total ? v.correct / v.total : 0 }))
    .sort((a, b) => a.accuracy - b.accuracy);
}

export interface StyleStat {
  style: 'scenario' | 'recall';
  correct: number;
  total: number;
  accuracy: number;
}

export function computeStyleStats(exams: ExamAttempt[]): StyleStat[] {
  const byStyle = new Map<'scenario' | 'recall', { correct: number; total: number }>();
  for (const exam of exams) {
    for (const r of exam.results) {
      const entry = byStyle.get(r.style) ?? { correct: 0, total: 0 };
      entry.total += 1;
      if (r.correct) entry.correct += 1;
      byStyle.set(r.style, entry);
    }
  }
  return Array.from(byStyle.entries()).map(([style, v]) => ({
    style,
    ...v,
    accuracy: v.total ? v.correct / v.total : 0,
  }));
}

export interface PrioritizedTopic {
  domainId: string;
  title: string;
  weight: number;
  avgPct: number;
  weaknessScore: number;
}

export function computePrioritizedList(trends: DomainTrend[]): PrioritizedTopic[] {
  return trends
    .map((t) => ({
      domainId: t.domainId,
      title: t.title,
      weight: t.weight,
      avgPct: t.avgPct,
      weaknessScore: (1 - t.avgPct) * t.weight,
    }))
    .sort((a, b) => b.weaknessScore - a.weaknessScore);
}
