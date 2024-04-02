import { Component } from '@angular/core';
import { GameHistory } from '../game-history';
import { CommonModule, NgFor, NgIf, DatePipe } from '@angular/common';

@Component({
  selector: 'app-game-history',
  standalone: true,
  imports: [NgFor, NgIf, DatePipe],
  templateUrl: './game-history.component.html',
  styleUrl: './game-history.component.scss'
})

export class GameHistoryComponent {
  mockGameHistory: GameHistory[] = [
    {
      timestamp: 1711909413
      , correctAnswerCount: 5, questionCount: 5
    },
    {
      timestamp: 1711909413
      , correctAnswerCount: 2, questionCount: 5
    },
    { timestamp: 1711909413, correctAnswerCount: 4, questionCount: 5 },
  ]


}
