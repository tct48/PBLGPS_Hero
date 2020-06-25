import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationRouting } from './authentication.routing';
import { SharedsModule } from '../share/shareds.module';
import { FormsModule } from '@angular/forms';
import { HomepageComponent } from '../components/homepage/homepage.component';
import { HomeComponent } from './components/home/home.component';
@NgModule({
  declarations: [
    HomeComponent,
    HomepageComponent
  ],
  imports: [
    CommonModule,
    SharedsModule, 
    AuthenticationRouting,
    FormsModule
  ],
  providers:[]
})
export class AuthenticationModule { }
