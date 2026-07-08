export type Qualifier = 'MOST' | 'BEST' | 'FIRST' | 'LEAST' | 'PRIMARY' | 'NONE';
export type QuestionStyle = 'scenario' | 'recall';
export type Difficulty = 'easy' | 'medium' | 'hard';
export type SetGroup = 'A' | 'B';

export interface QuestionOption {
  text: string;
  correct: boolean;
  rationale: string;
}

export interface Question {
  id: string;
  domainId: string;
  topicId: string;
  subtopicTag: string;
  qualifier: Qualifier;
  style: QuestionStyle;
  difficulty: Difficulty;
  setGroup: SetGroup;
  stem: string;
  options: QuestionOption[];
}

export interface KeyTerm {
  term: string;
  definition: string;
}

export interface ComparisonTable {
  caption: string;
  headers: string[];
  rows: string[][];
}

export interface TopicContent {
  domainId: string;
  topicId: string;
  overview: string;
  examFraming: string;
  keyTerms: KeyTerm[];
  scenario: string;
  comparisonTables?: ComparisonTable[];
  examTraps: string[];
  resources: { label: string; url: string }[];
}
