import { Routes, RouterModule } from '@angular/router';
import { AuthURL } from './authentication.url';
import { HomeComponent } from './components/home/home.component';
import { LeaderboardComponent } from './components/leaderboard/leaderboard.component';
import { InformationComponent } from './components/information/information.component';

const RouterLists: Routes = [
    { path : '', redirectTo: AuthURL.Home, pathMatch:'full'},
    { path :AuthURL.Home, component:HomeComponent },
    { path: AuthURL.Leaderboard, component:LeaderboardComponent },
    { path: AuthURL.Information, component: InformationComponent }
]

export const AuthenticationRouting = RouterModule.forChild(RouterLists);
