import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationRouting } from './authentication.routing';
import { ContentComponent } from './components/resource/content/content.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AuthenticationRouting,
  ],
  providers:[]
})
export class AuthenticationModule { }
