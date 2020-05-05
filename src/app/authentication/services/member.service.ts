import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AccountService } from 'src/app/share/services/account.service';
import { HttpService } from 'src/app/services/http.service';
import { AuthenService } from 'src/app/services/authen.service';

@Injectable()
export class MemberService{
  constructor(
    private http: HttpService,
    private authen: AuthenService,
  ){}

  // service แก้ไขสมาชิก
  updateMember(uid:any,model:IMember){
    return this.http.requestPatch(`user/${uid}`, this.authen.getAuthenticated(),model)
    .toPromise() as Promise<IResponse>
  }


}

export interface IResponse{
  message:string;
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