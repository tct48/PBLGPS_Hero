import { Injectable } from "@angular/core";
import { HttpService } from 'src/app/services/http.service';
import { AuthenService } from 'src/app/services/authen.service';
import { Router } from '@angular/router';
import { AlertService } from './alert.service';

@Injectable({
  providedIn: 'root'
})

export class AccountService {
  constructor(
    private http: HttpService,
    private authen: AuthenService,
    private router : Router,
    private alert: AlertService
  ) { }

  public mockUserItems: IAccount[] = [{
    _id: "1",
    firstname: "Worapol",
    lastname: "Mahachai",
    username: "ketar",
    password: "123456",
    email: "test@email.com",
    phone: "091-1157859"
  }]

  public UserLogin: IAccount = {} as any;
  // Set ข้อมูล User และ Return UserLogin
  public setUserLogin(UserLogin: IAccount) {
    this.UserLogin._id = UserLogin._id;
    this.UserLogin.firstname = UserLogin.firstname;
    this.UserLogin.lastname = UserLogin.lastname;
    this.UserLogin.username = UserLogin.username;
    this.UserLogin.password = UserLogin.password;
    this.UserLogin.email = UserLogin.email;
    this.UserLogin.phone = UserLogin.phone;
    this.UserLogin.image = UserLogin.image;

    return this.UserLogin;
  }

  getUserLogin(accessToken: string) {
    return (this.http.requestGet('user/login', accessToken)
      .toPromise() as Promise<IAccount>)
      .then(result => this.setUserLogin(result));
  }

  getAllUser(accessToken: string) {
    return (this.http.requestGet('user/', accessToken)
      .toPromise())
  }

  onLogin(model: ILogin) {
    return this.http.requestPost('user/login', model)
      .toPromise() as Promise<{ accessToken: string }>
  }

  onLogout(){
    this.authen.clearAuthenticated();
    this.alert.notify("ขอบคุณที่ใช้งาน")
  }

  onRegister(model: IRegister) {
    return this.http.requestPost('user/signup', model)
      .toPromise() as Promise<IRegister>
  }

  onChangePassword(accessToken: string, model: IChangePassword) {
    return this.http.requestPatch('user/change_password', accessToken, model)
      .toPromise() as Promise<IAccount>
  }
}


export interface IAccount {
  _id: string;
  firstname: string;
  lastname: string;
  username: string;
  password: string;
  email: string;
  phone: string;
  image?: string;
}

export interface IRegister {
  _id: string;
  firstname: string;
  lastname: string;
  username: string;
  password: string;
  email: string;
  phone: string;
  image?: string;
}

export interface ILogin {
  username: string;
  password: string;
}

export interface IChangePassword {
  old_pass: string;
  new_pass: string;
}
