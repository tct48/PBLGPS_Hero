import { Component, OnInit } from '@angular/core';
import { AuthenService } from 'src/app/services/authen.service';
import { HttpService } from 'src/app/services/http.service';
import { AlertService } from 'src/app/share/services/alert.service';
import { IMember, MemberService, OptionSearch } from '../../services/member.service';
import { LevelService } from '../../services/level.service';
import { AccountService, IAccount } from 'src/app/share/services/account.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/src/sweetalert2.scss';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css'],
  providers:[MemberService, LevelService]
})
export class MemberComponent implements OnInit {

  constructor(
    private http: HttpService,
    private authen: AuthenService,
    private account:AccountService,
    private alert: AlertService,
    private member: MemberService,
    private level: LevelService,
    private router: Router,
  ) { 
    this.UserLogin = this.account.UserLogin;

    this.onLoadMember();
  }

  ngOnInit(): void {
  }

  option:OptionSearch= {
    sp:0,
    lp:2,
    keySearch:null,
    valueData:null,
  }

  total_items:Number;
  items:IMember;
  size_pagination:Number;
  cp:Number;

  UserLogin: IAccount;
  searchText:string;

  onLoadMember(){
    this.member.loadMember(this.option).then(result=>{
      this.total_items = result.total_items;
      this.items = result.items;

      this.size_pagination = Math.round(Number(this.total_items) / Number(this.option.lp));
      this.cp = Number(this.option.sp)+1;
    })
  }

  pageChanged(event: any): void {
    this.option.sp = event.page-1;
    this.onLoadMember(); 
  }

  calLevel(exp){
    return this.level.calculateLevel(exp)
  }

  calNextLevel(exp){
    return this.level.calExpLeftToNextLevel(exp);
  }

  onSearch(){
    if(!this.searchText){
      this.onLoadMember();
    }
    this.option.sp=0;
    this.option.valueData = this.searchText;

    this.member.loadMember(this.option).then(result=>{
      this.total_items=result.total_items;
      this.items = result.items;

      this.size_pagination=Math.round(Number(this.total_items) / Number(this.option.lp));
      this.cp = Number(this.option.sp)+1; 
    })
  }

  onDeleteClick(_id){
    Swal.fire({
      title: "แจ้งเตือน",
      text: "คุณต้องการจะลบข้อมูลใช่หรือไม่",
      icon: 'danger',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'ใช่, ลบเดี๋ยวนี้'
    }).then((result) => {
      this.member.deleteMember(_id).then(()=>{
        if (result.value) {
          Swal.fire(
            'Deleted!',
            'ข้อมูลดังกล่าวถูกลบเรียบร้อยแล้ว',
            'success'
          )
        }
        this.option.valueData=null;
        this.option.sp=0;
        this.onLoadMember();
      })
      .catch(err=>{
        this.alert.something_wrong();
      })
    })
  }

}
