import { AuthURL } from './authentication.url';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MemberComponent } from './components/member/member.component';
import { ResourceComponent } from './components/resource/resource.component';
import { ContentComponent } from './components/resource/content/content.component';
import { LeaderboardComponent } from './components/leaderboard/leaderboard.component';
import { InformationComponent } from './components/information/information.component';
import { ManageResourceComponent } from './components/manage-resource/manage-resource.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { AppURL } from '../app.url';
import { ExerciseComponent } from './components/exercise/exercise.component';
import { SubMenuComponent } from './components/sub-menu/sub-menu.component';
import { ClassroomComponent } from './components/member/classroom/classroom.component';
import { AttendenceComponent } from './components/member/attendence/attendence.component';
import { PrpsQuizComponent } from './components/quiz/prps-quiz/prps-quiz.component';
import { ExercisePrpsComponent } from './components/exercise/exercise-prps/exercise-prps.component';
import { DynamicFormComponent } from './components/quiz/dynamic-form/dynamic-form.component';
import { GuildComponent } from './components/member/guild/guild.component';
import { CreateComponent } from './components/member/guild/create/create.component';

const RouterLists: Routes = [
    { path: '', redirectTo: AppURL.Login, pathMatch: 'full' },
    { path: AuthURL.Home, component: HomeComponent },
    { path: AuthURL.Leaderboard, component: LeaderboardComponent },
    { path: AuthURL.Information, component: InformationComponent },
    { path: AuthURL.Resource, component: ResourceComponent },
    { path: AuthURL.Content, component: ContentComponent },
    { path: AuthURL.Member, component: MemberComponent },
    { path: AuthURL.Quiz, component: QuizComponent },
    { path: AuthURL.ManageResource, component: ManageResourceComponent },
    { path : AuthURL.Exercise, component: ExerciseComponent},
    { path: AuthURL.Menu, component: SubMenuComponent },
    { path: AuthURL.Classroom, component: ClassroomComponent },
    { path: AuthURL.Attendence, component: AttendenceComponent },
    { path: AuthURL.QuizPrPs, component:  PrpsQuizComponent},
    { path: AuthURL.ExercisePrps, component: ExercisePrpsComponent },
    { path: AuthURL.Guild,component:GuildComponent},
    { path: AuthURL.CreateGroup, component:CreateComponent }
    // { path: AuthURL.Signin , component:SigninComponent }
];

export const AuthenticationRouting = RouterModule.forChild(RouterLists);
