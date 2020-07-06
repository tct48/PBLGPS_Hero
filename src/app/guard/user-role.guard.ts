import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AppURL } from '../app.url';
import { AuthURL } from '../authentication/authentication.url';
import { AuthenService } from '../services/authen.service';
import { AccountService } from '../share/services/account.service';
import { AlertService } from '../share/services/alert.service';

@Injectable({
  providedIn: 'root'
})
export class UserRoleGuard implements CanActivate {
  constructor(
    private authen: AuthenService,
    private account: AccountService,
    private alert: AlertService,
    private router:Router
  ) {

  }

  AppURL = AppURL;
  AuthURL =AuthURL;

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return new Promise<boolean>((resolve, reject) => {
      const roles = next.data.roles;
      this.account
        .getUserLogin(this.authen.getAuthenticated())
        .then(userLogin => {
          console.log(roles.filter(item => item == userLogin.role).length)
          if (roles.filter(item => item == localStorage.getItem("role")).length > 0)
            resolve(true);
          else {
            this.alert.notify('คุณไม่มีสิทธิ์ในการเข้าถึง URL ดังกล่าว !', 'danger');
            this.router.navigate(['/', AppURL.Authen,AuthURL.Home]);
            resolve(false);
          }
        })
        .catch(() => resolve(false));
    });
  }

}
