import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  member: Number[];
  constructor() { }

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

}

export interface IMember{
  _id:string,
  firstname:string,
  lastname:string,
  username:string,
  password:string,
  c_password?:string,
  phone:string,
  email:string,
  picture:string;
}

