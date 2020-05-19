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
    // { path: AuthURL.Signin , component:SigninComponent }
];

export const AuthenticationRouting = RouterModule.forChild(RouterLists);
