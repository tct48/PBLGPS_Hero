import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertService } from './services/alert.service';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    NavBarComponent,
    MenuBarComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavBarComponent,
    MenuBarComponent,
  ],
  providers:[
    AlertService,
  ]
})
export class SharedsModule { }
