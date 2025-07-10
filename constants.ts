export interface SliderCriterion {
  id: 'accuracy' | 'relevance' | 'legalReasoning' | 'comprehensiveness' | 'clarity';
  label: string;
  weight: number;
  description: string;
}

export const FEEDBACK_CRITERIA: SliderCriterion[] = [
  {
    id: 'accuracy',
    label: 'Accuracy',
    weight: 0.25,
    description: 'How factually correct is the legal reasoning and conclusion?',
  },
  {
    id: 'relevance',
    label: 'Relevance',
    weight: 0.20,
    description: 'Does the answer directly address the question asked?',
  },
  {
    id: 'legalReasoning',
    label: 'Legal Reasoning',
    weight: 0.25,
    description: 'How sound and well-structured is the legal argument?',
  },
  {
    id: 'comprehensiveness',
    label: 'Comprehensiveness',
    weight: 0.15,
    description: 'Does the answer identify and cover all key legal issues?',
  },
  {
    id: 'clarity',
    label: 'Clarity',
    weight: 0.15,
    description: 'Is the answer clear, concise, and easy to understand?',
  },
];
