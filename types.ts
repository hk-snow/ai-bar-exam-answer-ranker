export interface Question {
  id: number;
  question: string;
  goodAnswer: string;
  aiAnswer: string;
}

export interface Feedback {
  accuracy: number;
  relevance: number;
  legalReasoning: number;
  comprehensiveness: number;
  clarity: number;
  comments: string;
}
