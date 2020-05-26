import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationRouting } from './authentication.routing';
import { SharedsModule } from '../share/shareds.module';
import { PrpsQuizComponent } from './components/quiz/prps-quiz/prps-quiz.component';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedsModule,
    AuthenticationRouting,
  ],
  providers:[]
})
export class AuthenticationModule { }
