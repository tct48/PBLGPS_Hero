import { Routes, RouterModule } from '@angular/router';
import { AuthURL } from './authentication.url';
import { HomeComponent } from './components/home/home.component';

const RouterLists: Routes = [
    { path : '', redirectTo: AuthURL.Home, pathMatch:'full'},
    { path :AuthURL.Home, component:HomeComponent }
]

export const AuthenticationRouting = RouterModule.forChild(RouterLists);
