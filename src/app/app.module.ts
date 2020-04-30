import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './share/components/nav-bar/nav-bar.component';
import { MenuBarComponent } from './share/components/menu-bar/menu-bar.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { RouterModule } from '@angular/router';



// RECOMMENDED
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
// RECOMMENDED
import { CarouselModule } from 'ngx-bootstrap/carousel';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    MenuBarComponent,
    HomepageComponent,
    SigninComponent,
    SignupComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    CarouselModule.forRoot(),
    RouterModule.forRoot([
      { path : '', component: HomepageComponent },
      { path : 'signin', component: SigninComponent},
      { path : 'signup', component: SignupComponent }
    ]),
    TypeaheadModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
