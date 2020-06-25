
import { AppURL } from './app.url'
import { Routes, RouterModule } from '@angular/router'
import { HahaComponent } from './components/haha/haha.component'
import { SigninComponent } from './components/signin/signin.component'
import { SignupComponent } from './components/signup/signup.component'
import { HomepageComponent } from './components/homepage/homepage.component'
import { AuthenticationModule } from './authentication/authentication.module'
import { AuthenticationGuard } from './guard/authentication.guard'

const RouterLists: Routes = [
    { path: '', redirectTo: AppURL.Login, pathMatch: 'full' },
    { path: AppURL.Login, component: SigninComponent },
    { path: AppURL.Home, component: HomepageComponent },
    { path: AppURL.Register, component: SignupComponent },
    { path: AppURL.Haha, component: HahaComponent },
    {
        // path: AppURL.Authen,
        // loadChildren:
        //     './authentication/authentication.module#AuthenticationModule',
        path: AppURL.Authen, loadChildren:()=> AuthenticationModule,
        canActivate:[AuthenticationGuard]
    },
]

export const AppRouting = RouterModule.forRoot(RouterLists)
