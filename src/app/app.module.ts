// common
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
// module
import { AppRouting } from './app.routing'
import { PdfViewerModule } from 'ng2-pdf-viewer'
import { TabsModule } from 'ngx-bootstrap/tabs';
import { TooltipModule } from 'ngx-bootstrap/tooltip'
import { SharedsModule } from './share/shareds.module'
import { CollapseModule } from 'ngx-bootstrap/collapse'
import { HttpClientModule } from '@angular/common/http'
import { CarouselModule } from 'ngx-bootstrap/carousel'
import { PaginationModule } from 'ngx-bootstrap/pagination'
import { CKEditorModule } from '@ckeditor/ckeditor5-angular'
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'


// component
import { Cloudinary } from 'cloudinary-core'
import { AppComponent } from './app.component'
import { HahaComponent } from './components/haha/haha.component'
import { SigninComponent } from './components/signin/signin.component'
import { SignupComponent } from './components/signup/signup.component'
import { HomepageComponent } from './components/homepage/homepage.component'
import { HomeComponent } from './authentication/components/home/home.component'
import { MemberComponent } from './authentication/components/member/member.component'
import { ResourceComponent } from './authentication/components/resource/resource.component'
import { ContentComponent } from './authentication/components/resource/content/content.component'
import { LeaderboardComponent } from './authentication/components/leaderboard/leaderboard.component'
import { InformationComponent } from './authentication/components/information/information.component'
import { ManageResourceComponent } from './authentication/components/manage-resource/manage-resource.component'



import {
  CloudinaryModule,
  CloudinaryConfiguration,
} from '@cloudinary/angular-5.x'

// pipe
import { DateAgoPipe } from './services/pipes/date-ago.pipe'
import { Youtube } from './services/pipes/youtube.pipe'
import { AuthenticationModule } from './authentication/authentication.module'
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { QuizComponent } from './authentication/components/quiz/quiz.component'
import {MatRadioModule} from '@angular/material/radio';
import { ExerciseComponent } from './authentication/components/exercise/exercise.component'
import { SubMenuComponent } from './authentication/components/sub-menu/sub-menu.component'
import { ClassroomComponent } from './authentication/components/member/classroom/classroom.component'
import { AttendenceComponent } from './authentication/components/member/attendence/attendence.component'
import { PrpsQuizComponent } from './authentication/components/quiz/prps-quiz/prps-quiz.component'

@NgModule({
    declarations: [
        Youtube,
        DateAgoPipe,
        AppComponent,
        HomeComponent,
        HahaComponent,
        QuizComponent,
        MemberComponent,
        SigninComponent,
        SignupComponent,
        SubMenuComponent,
        ContentComponent,
        PrpsQuizComponent,
        ResourceComponent,
        ExerciseComponent,
        HomepageComponent,
        ClassroomComponent,
        InformationComponent,
        LeaderboardComponent,
        AttendenceComponent,
        ManageResourceComponent,
    ],
    imports: [
        AppRouting,
        FormsModule,
        SharedsModule,
        BrowserModule,
        MatRadioModule,
        CKEditorModule,
        PdfViewerModule,
        HttpClientModule, 
        ReactiveFormsModule,
        AuthenticationModule,
        TabsModule.forRoot(),
        TooltipModule.forRoot(),
        BrowserAnimationsModule,
        CollapseModule.forRoot(), 
        CarouselModule.forRoot(),
        ProgressbarModule.forRoot(),
        BsDatepickerModule.forRoot(),
        TypeaheadModule.forRoot(),
        PaginationModule.forRoot(),
        CloudinaryModule.forRoot({ Cloudinary }, {
            cloud_name: 'hgflnfcwf',
        } as CloudinaryConfiguration),
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
