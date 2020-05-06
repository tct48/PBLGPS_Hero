import { Routes, RouterModule } from '@angular/router';
import { AuthURL } from './authentication.url';
import { HomeComponent } from './components/home/home.component';
import { LeaderboardComponent } from './components/leaderboard/leaderboard.component';
import { InformationComponent } from './components/information/information.component';
import { ResourceComponent } from './components/resource/resource.component';
import { ContentComponent } from './components/resource/content/content.component';

const RouterLists: Routes = [
    { path : '', redirectTo: AuthURL.Home, pathMatch:'full'},
    { path :AuthURL.Home, component:HomeComponent },
    { path: AuthURL.Leaderboard, component:LeaderboardComponent },
    { path: AuthURL.Information, component: InformationComponent },
    { path: AuthURL.Resource, component: ResourceComponent },
    { path: AuthURL.Content, component:ContentComponent }
]

export const AuthenticationRouting = RouterModule.forChild(RouterLists);
