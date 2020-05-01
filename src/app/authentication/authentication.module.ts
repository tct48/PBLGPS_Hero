import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationRouting } from './authentication.routing';
import { SharedsModule } from '../share/shareds.module';
import { NavBarComponent } from '../share/components/nav-bar/nav-bar.component';
import { FooterComponent } from '../share/components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    AuthenticationRouting,
  ],
  providers:[],
  exports:[
    // HomeComponent
  ]
})
export class AuthenticationModule { }
