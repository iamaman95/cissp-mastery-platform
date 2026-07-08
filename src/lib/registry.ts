import type { Question, TopicContent } from '../data/types';

// Eagerly import every topic content module and question bank as they're added,
// so new domains/topics register themselves without touching app logic.
const contentModules = import.meta.glob('../content/*/*.ts', { eager: true }) as Record<
  string,
  { content: TopicContent }
>;
const questionModules = import.meta.glob('../data/questions/*/*.json', { eager: true }) as Record<
  string,
  { default: Question[] }
>;

const contentByTopic = new Map<string, TopicContent>();
for (const mod of Object.values(contentModules)) {
  if (mod.content) contentByTopic.set(mod.content.topicId, mod.content);
}

const questionsByTopic = new Map<string, Question[]>();
for (const mod of Object.values(questionModules)) {
  const list = mod.default ?? [];
  if (list.length === 0) continue;
  const topicId = list[0].topicId;
  questionsByTopic.set(topicId, list);
}

export function getTopicContent(topicId: string): TopicContent | undefined {
  return contentByTopic.get(topicId);
}

export function hasTopicContent(topicId: string): boolean {
  return contentByTopic.has(topicId);
}

export function getTopicQuestions(topicId: string): Question[] {
  return questionsByTopic.get(topicId) ?? [];
}

export function getQuestionSet(topicId: string, setGroup: 'A' | 'B'): Question[] {
  return getTopicQuestions(topicId).filter((q) => q.setGroup === setGroup);
}

export function getAllQuestions(): Question[] {
  return Array.from(questionsByTopic.values()).flat();
}

export function getQuestionsByDomain(domainId: string): Question[] {
  return getAllQuestions().filter((q) => q.domainId === domainId);
}
