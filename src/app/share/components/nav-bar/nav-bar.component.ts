import { Component, OnInit } from '@angular/core';
import { AccountService, IAccount } from '../../services/account.service';
import { Router } from '@angular/router';
import { AuthenService } from 'src/app/services/authen.service';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { AlertService } from '../../services/alert.service';
import { AppURL } from 'src/app/app.url';
import { AuthURL } from 'src/app/authentication/authentication.url';
declare let App;
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  constructor(
    private account: AccountService,
    private authen: AuthenService,
    private router: Router,
    private alert: AlertService
  ) {
      this.initialLoadUserLogin();
  }

  ngOnInit(): void {

  }

  AppURL = AppURL;
  AuthURL = AuthURL;

  login;

  UserLogin: IAccount = {} as any;

  public initialLoadUserLogin() {
    var data = this.authen.getAuthenticated();
    if(!data){
      return;
    }
    this.account.getUserLogin(this.authen.getAuthenticated())
      .then(userLogin => {
        this.UserLogin = userLogin;
        this.login=1;
      })
      .catch(err => {
        this.alert.notify(err.message);
        this.authen.clearAuthenticated();
        this.router.navigate(['/', AppURL.Login]);
      })
  }

  onLogout() {
    this.authen.clearAuthenticated();
    this.account.onLogout();
    this.login=null;
    this.router.navigate(['/', AppURL.Login]);
  }

}
