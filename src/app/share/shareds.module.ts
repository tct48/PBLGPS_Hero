import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertService } from './services/alert.service';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { MemberService } from './services/member.service';
import { AuthContentComponent } from './components/auth-content/auth-content.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ValidatorsService } from './services/validator.service';

@NgModule({
  declarations: [NavBarComponent, FooterComponent, AuthContentComponent],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
  ]
  ,
  exports: [
    NavBarComponent,
    FooterComponent,
    ReactiveFormsModule,
    FormsModule,
    AuthContentComponent
  ],
  providers: [AlertService, MemberService,ValidatorsService],
})
export class SharedsModule { }
