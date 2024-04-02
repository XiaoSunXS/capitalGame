import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../question.service';
import { NgFor, NgIf, UpperCasePipe } from '@angular/common';
import { Question } from '../question';

@Component({
  selector: 'app-new-game',
  standalone: true,
  imports: [UpperCasePipe, NgFor, NgIf],
  templateUrl: './new-game.component.html',
  styleUrl: './new-game.component.scss'
})

export class NewGameComponent implements OnInit {
  constructor(private questionService: QuestionService) { }

  defaultQuestionCount = 10
  currentQuestonIndex = 0
  correctAnswerCount = 0

  question: Question[] = []

  async getQuestions(): Promise<void> {
    let currentQuestionCount = 0

    while (currentQuestionCount < this.defaultQuestionCount) {
      const newQuestion = await this.questionService.getQuestion()

      const orderedOptions = newQuestion.options.sort()
      const orderedNewQuestion = { ...newQuestion, options: orderedOptions }

      this.question.push(orderedNewQuestion)
      currentQuestionCount += 1
    }
  }

  updateGameResult(isCorrect: boolean): void {
    this.correctAnswerCount = this.correctAnswerCount + (isCorrect ? 1 : 0)
    this.currentQuestonIndex = this.currentQuestonIndex + 1
  }

  ngOnInit(): void {
    this.getQuestions()
  }
}
