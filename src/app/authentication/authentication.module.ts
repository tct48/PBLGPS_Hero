import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationRouting } from './authentication.routing';
import { SharedsModule } from '../share/shareds.module';
import { NavBarComponent } from '../share/components/nav-bar/nav-bar.component';
import { FooterComponent } from '../share/components/footer/footer.component';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    AuthenticationRouting,
  ],
  providers:[]
})
export class AuthenticationModule { }
