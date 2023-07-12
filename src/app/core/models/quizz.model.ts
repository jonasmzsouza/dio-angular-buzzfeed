import { Question } from './question.model';
import { Result } from './result.model';

export type Quizz = {
	id: number | null;
	title: string;
	questions: Question[];
	result: Result;
};
