import { Routes } from '@angular/router';
import { NewGameComponent } from './new-game/new-game.component';
import { HomeComponent } from './home/home.component';
import { GameHistoryComponent } from './game-history/game-history.component';

export const routes: Routes = [
    { path: 'newGame', component: NewGameComponent },
    { path: 'gameHistory', component: GameHistoryComponent },
    { path: '', component: HomeComponent },
];
