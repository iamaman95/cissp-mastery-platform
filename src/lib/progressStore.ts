import { totalTopicCount } from '../data/domains';

export type TopicStatus = 'not-started' | 'in-progress' | 'remediation' | 'complete';

export interface TopicAttempt {
  date: string;
  score: number; // number correct out of 10
  missedIds: string[];
  setUsed: 'A' | 'B';
}

export interface TopicProgress {
  studied: boolean;
  status: TopicStatus;
  attempts: TopicAttempt[];
  remediationCount: number;
  timeSpentSec: number;
  studyStartedAt?: string;
}

export interface DomainBreakdownEntry {
  domainId: string;
  correct: number;
  total: number;
}

export interface QuestionResult {
  questionId: string;
  domainId: string;
  qualifier: string;
  style: 'scenario' | 'recall';
  correct: boolean;
}

export interface ExamAttempt {
  id: string;
  date: string;
  durationSec: number;
  questionIds: string[];
  score: number; // fraction 0-1
  correctCount: number;
  totalCount: number;
  domainBreakdown: DomainBreakdownEntry[];
  results: QuestionResult[];
}

export interface LearnerProfile {
  version: 1;
  topics: Record<string, TopicProgress>;
  exams: ExamAttempt[];
  settings: {
    passThreshold: number;
    examPassTarget: number;
  };
}

const STORAGE_KEY = 'cissp-mastery-profile-v1';

function defaultProfile(): LearnerProfile {
  return {
    version: 1,
    topics: {},
    exams: [],
    settings: { passThreshold: 0.8, examPassTarget: 0.7 },
  };
}

function defaultTopicProgress(): TopicProgress {
  return {
    studied: false,
    status: 'not-started',
    attempts: [],
    remediationCount: 0,
    timeSpentSec: 0,
  };
}

let cache: LearnerProfile | null = null;
const listeners = new Set<() => void>();

export function subscribe(cb: () => void): () => void {
  listeners.add(cb);
  return () => listeners.delete(cb);
}

function notify() {
  for (const cb of listeners) cb();
}

export function loadProfile(): LearnerProfile {
  if (cache) return cache;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    cache = raw ? (JSON.parse(raw) as LearnerProfile) : defaultProfile();
  } catch {
    cache = defaultProfile();
  }
  return cache;
}

function saveProfile(profile: LearnerProfile) {
  cache = profile;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(profile));
  notify();
}

export function getTopicProgress(topicId: string): TopicProgress {
  const profile = loadProfile();
  return profile.topics[topicId] ?? defaultTopicProgress();
}

export function markStudied(topicId: string) {
  const profile = loadProfile();
  const existing = profile.topics[topicId] ?? defaultTopicProgress();
  profile.topics[topicId] = {
    ...existing,
    studied: true,
    status: existing.status === 'not-started' ? 'in-progress' : existing.status,
    studyStartedAt: existing.studyStartedAt ?? new Date().toISOString(),
  };
  saveProfile(profile);
}

export function recordTopicAttempt(
  topicId: string,
  score: number,
  missedIds: string[],
  setUsed: 'A' | 'B',
  passThresholdCount = 8
) {
  const profile = loadProfile();
  const existing = profile.topics[topicId] ?? defaultTopicProgress();
  const passed = score >= passThresholdCount;
  const attempt: TopicAttempt = { date: new Date().toISOString(), score, missedIds, setUsed };
  profile.topics[topicId] = {
    ...existing,
    attempts: [...existing.attempts, attempt],
    status: passed ? 'complete' : 'remediation',
    remediationCount: passed ? existing.remediationCount : existing.remediationCount + 1,
  };
  saveProfile(profile);
  return passed;
}

export function isTopicComplete(topicId: string): boolean {
  return getTopicProgress(topicId).status === 'complete';
}

export function isTopicUnlocked(_domainId: string, topicIndex: number, orderedTopicIds: string[]): boolean {
  if (topicIndex === 0) return true;
  const prevTopicId = orderedTopicIds[topicIndex - 1];
  return isTopicComplete(prevTopicId);
}

export function domainCompletionPct(topicIds: string[]): number {
  if (topicIds.length === 0) return 0;
  const done = topicIds.filter((id) => isTopicComplete(id)).length;
  return done / topicIds.length;
}

export function allDomainsComplete(allTopicIds: string[]): boolean {
  return allTopicIds.length > 0 && allTopicIds.every((id) => isTopicComplete(id));
}

export function overallCompletionPct(): number {
  const profile = loadProfile();
  const done = Object.values(profile.topics).filter((t) => t.status === 'complete').length;
  const total = totalTopicCount();
  return total === 0 ? 0 : done / total;
}

export function recordExamAttempt(attempt: ExamAttempt) {
  const profile = loadProfile();
  profile.exams = [...profile.exams, attempt];
  saveProfile(profile);
}

export function getExams(): ExamAttempt[] {
  return loadProfile().exams;
}

export function resetProfile() {
  saveProfile(defaultProfile());
}
