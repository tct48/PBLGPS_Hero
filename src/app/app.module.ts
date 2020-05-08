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
import { HttpClientModule } from '@angular/common/http';
import { LeaderboardComponent } from './authentication/components/leaderboard/leaderboard.component';
import { InformationComponent } from './authentication/components/information/information.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ResourceComponent } from './authentication/components/resource/resource.component';
import { ContentComponent } from './authentication/components/resource/content/content.component';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { MemberComponent } from './authentication/components/member/member.component';

import { PaginationModule } from 'ngx-bootstrap/pagination';
import { DateAgoPipe } from './services/pipes/date-ago.pipe';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HahaComponent,
    MemberComponent,
    SigninComponent,
    SignupComponent, 
    HomepageComponent,
    ContentComponent,
    ResourceComponent,
    InformationComponent,
    LeaderboardComponent,
    DateAgoPipe,
  ],
  imports: [
    FormsModule,
    AppRouting,
    SharedsModule,
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    TooltipModule.forRoot(), 
    BrowserAnimationsModule,
    CollapseModule.forRoot(),
    CarouselModule.forRoot(),
    TypeaheadModule.forRoot(),
    PaginationModule.forRoot(),
    ProgressbarModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
