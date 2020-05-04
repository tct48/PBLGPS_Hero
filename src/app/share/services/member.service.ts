import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpService } from 'src/app/services/http.service';
import { AuthenService } from 'src/app/services/authen.service';
import { IAccount } from './account.service';

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  member: Number[];
  constructor(
    private http : HttpService,
    private authen : AuthenService
  ) { }

  signUp(form:IMember){
    var obj = {
      _id: "6102041520131",
      firstname: "6102041520131",
      lastname: "6102041520131",
      username: "6102041520131",
      password: "6102041520131",
      c_password: "6102041520131",
      phone : "6102041520131",
      email: "6102041520131",
      picture: "6102041520131",
    }
    this.member.push(1);
  }

  showMember(){
    return this.member;
  }

  getTopPlayer(){
    return this.http.requestGet('user/leaderboard', this.authen.getAuthenticated())
    .toPromise() as Promise<IMember>
  }

}

export interface IMember{
  items?:any

  _id:string,
  firstname:string,
  lastname:string,
  username:string,
  password:string,
  c_password?:string,
  phone:string,
  email:string,
  picture:string,
  exp?:number,
}

