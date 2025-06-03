export interface Quiz {
  id: number;
  title: string;
  questions: Questions[]
}

export interface Questions {
  id: number;
  text: string;
  answers: Answers[];
}

export interface Answers {
  id: number;
  label: string;
  text: string;
  correct: boolean;
}