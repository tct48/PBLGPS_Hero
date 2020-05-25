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
        console.log(this.account.UserLogin)
        this.loadAttendence();
    }

    items:IAttendence;
    assign =0 ;
    total_numbers:number;

    ngOnInit(): void {}

    onCheckIn(_id:string){
      this.member.checkInAttendence(_id,{user:this.account.UserLogin._id}).then(result=>{
        if(result.code == "500"){
          return this.alert.notify("ลงชื่อเข้าเรียนไปแล้ว..!","แจ้งเตือน", "warning")
        }
        this.alert.success("ลงชื่อเข้าเรียนสำเร็จ!")
        this.loadAttendence();
        console.log(result)
      })
    }

    loadAttendence(){
      this.member.loadAttendence(this.account.UserLogin.class).then(result=>{
        this.items = result.items;
        this.total_numbers = result.total_items;
      })
    }

    onCheckUser(user:Array<string>){
      var data = user.includes(this.account.UserLogin._id)
      return data;
    }
}
