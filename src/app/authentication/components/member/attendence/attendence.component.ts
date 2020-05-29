import { Component, OnInit } from '@angular/core'
import { AccountService } from 'src/app/share/services/account.service'
import { MemberService, IAttendence } from 'src/app/authentication/services/member.service'
import { AlertService } from 'src/app/share/services/alert.service'

@Component({
    selector: 'app-attendence',
    templateUrl: './attendence.component.html',
    styleUrls: ['./attendence.component.css'],
    providers: [MemberService]
})
export class AttendenceComponent implements OnInit {
    constructor(
        private account: AccountService,
        private member: MemberService,
        private alert: AlertService,
    ) {
        // console.log(this.account.UserLogin)
        this.loadAttendence();
        this.loadTimeAttended();
    }

    items:IAttendence;
    assign =0 ;
    total_numbers:number;
    atteneded:number;
    absent:number=0;

    ngOnInit(): void {}

    onCheckIn(_id:string){
      this.member.checkInAttendence(_id,{user:this.account.UserLogin._id}).then(result=>{
        if(result.code == "500"){
          return this.alert.notify("ลงชื่อเข้าเรียนไปแล้ว..!","แจ้งเตือน", "warning")
        }
        this.alert.success("ลงชื่อเข้าเรียนสำเร็จ!")
        this.loadAttendence();
        this.loadTimeAttended();
        this.absent=this.total_numbers-this.atteneded;
      })
    }

    loadTimeAttended(){
      this.member.getTimeAttended(this.account.UserLogin._id).then(result=>{
        this.atteneded = result.total_items;
        this.absent=this.total_numbers-this.atteneded;
      })
    }

    loadAttendence(){
      this.member.loadAttendence(this.account.UserLogin.class).then(result=>{
        this.items = result.items;
        // console.log(this.items)
        this.total_numbers = result.total_items;
        this.absent=this.total_numbers-this.atteneded;
      })
    }

    onCheckUser(user:Array<string>){
      var data = user.includes(this.account.UserLogin._id)
      return data;
    }
}
