import { Routes, RouterModule } from '@angular/router';
import { AppURL } from './app.url';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomepageComponent } from './components/homepage/homepage.component';

const RouterLists: Routes = [
  { path: '', redirectTo: AppURL.Login, pathMatch:'full' },
  { path: AppURL.Login, component: SigninComponent },
  { path : AppURL.Register, component: SignupComponent},
  { path: AppURL.Home, component: HomepageComponent},
  {
    path: AppURL.Authen, loadChildren: './authentication/authentication.module#AuthenticationModule',
    // canActivate:[AuthenticationGuard] ./authentication/authentication.module#AuthenticationModule
  }
]

export const AppRouting = RouterModule.forRoot(RouterLists);
