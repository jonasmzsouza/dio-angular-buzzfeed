import { Component, OnInit } from '@angular/core';
import { Question } from '../../../../../core/models/question.model';
import quizz_question from '../../../../../../assets/static/quizz_questions.json';
import { Result } from '../../../../../core/models/result.model';

@Component({
	selector: 'app-quizz',
	templateUrl: './quizz.component.html',
	styleUrls: ['./quizz.component.css'],
})
export class QuizzComponent implements OnInit {
	title: string = '';
	questions: Question[] = [];
	questionSelected: Question = {
		id: null,
		question: '',
		options: [],
	};

	answers: string[] = [];
	answerSelected: string = '';

	questionIndex = 0;

	finished: boolean = false;

	constructor() {}

	ngOnInit(): void {
		if (quizz_question) {
			this.finished = false;
			this.title = quizz_question.title;
			this.questions = quizz_question.questions;
			this.questionSelected = this.questions[this.questionIndex];
		}
	}

	playerChoose(value: string) {
		this.answers.push(value);
		this.nextStep();
	}

	async nextStep() {
		this.questionIndex += 1;
		if (this.questionIndex < this.questions.length) {
			this.questionSelected = this.questions[this.questionIndex];
		} else {
			const result: string = await this.checkResult(this.answers);
			this.answerSelected = quizz_question.results[result as keyof Result];
			this.finished = true;
		}
	}

	async checkResult(answers: string[]) {
		const result = answers.reduce((previous, current, i, arr) => {
			if (
				arr.filter((item) => item === previous).length >
				arr.filter((item) => item === current).length
			) {
				return previous;
			} else {
				return current;
			}
		});

		return result;
	}
}
