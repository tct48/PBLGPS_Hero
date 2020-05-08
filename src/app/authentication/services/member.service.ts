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

  loadMember(option:OptionSearch){
    if(option.valueData){
      return this.http.requestGet(`user/search?sp=${option.sp}&lp=${option.lp}&search=${option.valueData}`, this.authen.getAuthenticated())
      .toPromise() as Promise<IMember>
    }
    return this.http.requestGet(`user?sp=${option.sp}&lp=${option.lp}`, this.authen.getAuthenticated())
    .toPromise() as Promise<IMember>
  }

  deleteMember(_id:string){
    console.log(_id)
    return this.http.requestDelete(`user/${_id}`, this.authen.getAuthenticated())
      .toPromise() as Promise<IMember>
  }
}

export interface IResponse{
  message:string;
}

export interface OptionSearch{
  sp:Number,
  lp:Number,
  keySearch?:string,
  valueData?:string
}

export interface IMember{
  total_items?:any;
  items?:any;

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
  activity?:Date
}