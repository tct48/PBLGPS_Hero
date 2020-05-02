import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/share/services/alert.service';
import { AuthenService } from 'src/app/services/authen.service';
import { IAccount, AccountService } from 'src/app/share/services/account.service';
import { element } from 'protractor';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private alert: AlertService,
    private authen: AuthenService,
    private account: AccountService
  ) {
    this.account.getUserLogin(this.authen.getAuthenticated())
    .then(result=>{
      this.UserLogin = result;
    })
  }

  UserLogin: IAccount;

  ngOnInit(): void {

  }

  hover(image){
    if(image.id=="button1"){
      return image.setAttribute('src', '../../../../assets/image/01-2.gif')
    }
    return image.setAttribute('src', '../../../../assets/image/02-2.gif')
  }

  unhover(image){

  }

}
