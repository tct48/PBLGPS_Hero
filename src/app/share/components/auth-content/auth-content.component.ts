import { Router } from '@angular/router';
import { AppURL } from 'src/app/app.url';
import { Component, OnInit } from '@angular/core';
import { AlertService } from '../../services/alert.service';
import { AuthenService } from 'src/app/services/authen.service';
import { IAccount, AccountService } from '../../services/account.service';




@Component({
  selector: 'app-auth-content',
  templateUrl: './auth-content.component.html',
  styleUrls: ['./auth-content.component.css']
})
export class AuthContentComponent implements OnInit {
  UserLogin:IAccount
  constructor(
    private account : AccountService,
    private authen: AuthenService,
    private alert : AlertService,
    private router : Router
  ) {
    if(!this.UserLogin){
      this.initialLoadUserLogin();
    }
   }

  ngOnInit(): void {
  }

  public initialLoadUserLogin() {
    var data = this.authen.getAuthenticated();
    if(!data){
      return;
    }
    this.account.getUserLogin(this.authen.getAuthenticated())
      .then(userLogin => {
        this.UserLogin = userLogin;
      })
      .catch(err => {
        this.alert.notify(err.message);
        this.authen.clearAuthenticated();
        this.router.navigate(['/', AppURL.Login]);
      })
  }

}
