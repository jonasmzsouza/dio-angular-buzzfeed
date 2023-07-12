import { QuestionOption } from './question-option.model';

export type Question = {
	id: number | null;
	question: string;
	options: QuestionOption[];
};
