import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';



// RECOMMENDED
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
// RECOMMENDED
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRouting } from './app.routing';
import { SharedsModule } from './share/shareds.module';
import { HahaComponent } from './components/haha/haha.component';
import { HomeComponent } from './authentication/components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    SigninComponent,
    SignupComponent,
    HahaComponent,
    HomeComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRouting,
    SharedsModule,
    CarouselModule.forRoot(),
    TypeaheadModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
