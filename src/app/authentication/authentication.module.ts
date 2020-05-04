import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationRouting } from './authentication.routing';
import { LeaderboardComponent } from './components/leaderboard/leaderboard.component';
import { HomeComponent } from './components/home/home.component';
import { InformationComponent } from './components/information/information.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AuthenticationRouting,
  ],
  providers:[]
})
export class AuthenticationModule { }
