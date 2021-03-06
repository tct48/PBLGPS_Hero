import { Component, OnInit } from '@angular/core'
import { AccountService } from 'src/app/share/services/account.service'
import { MemberService, IAttendence } from 'src/app/authentication/services/member.service'
import { AlertService } from 'src/app/share/services/alert.service'
import { LevelService } from 'src/app/authentication/services/level.service';
import { GradeService } from 'src/app/authentication/services/grade.service';

@Component({
    selector: 'app-attendence',
    templateUrl: './attendence.component.html',
    styleUrls: ['./attendence.component.css'],
    providers: [MemberService,LevelService,GradeService]
})
export class AttendenceComponent implements OnInit {
    constructor(
        private account: AccountService,
        private member: MemberService,
        private alert: AlertService,
        private level: LevelService,
        private grade: GradeService
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
    sick:number=0;
    rate_time:number=0;


    ngOnInit(): void {}

    onCheckIn(_id:string){
      this.member.checkInAttendence(_id,{user:localStorage.getItem("_id")}).then(result=>{
        if(result.code == "500"){
          return this.alert.notify("ลงชื่อเข้าเรียนไปแล้ว..!","แจ้งเตือน", "warning")
        }
        this.alert.success(result.message)

        var A=1

        // this.grade.getScoreExerciseById(localStorage.getItem("_id"),'ATTENDENCE').then(sub_result=>{
        //   console.log(sub_result)
        //   พึ่งเข้าเรียนครั้งแรกเพิ่มคะแนนมาเรียน
        //   if(sub_result.total_items==0){
        //     var obj={
        //       name: 'คะแนนมาเรียน (Attendence)',
        //       score: A,
        //       ref: 'ATTENDENCE',
        //       user: localStorage.getItem("_id")
        //     }

        //     setTimeout(()=>{
        //       this.grade.addScoreExercise(obj).then(()=>{
        //         this.level.addExptoUser(localStorage.getItem("_id"),A*10).then(result=>{
        //           this.alert.success("คุณได้รับแต้ม Exp เพิ่มขึ้น " + A*10 + " แต้ม")
        //         })
        //       })
        //     },1000)
        //   }

        //   if(sub_result.total_items>0 && sub_result.total_items<=17){
        //     this.grade.updateScoreExcerciseById(sub_result.item._id,{score:sub_result.item.score+1}).then(sub=>{
        //       this.level.addExptoUser(localStorage.getItem("_id"),A*10).then(result=>{
        //         this.alert.success("คุณได้รับแต้ม Exp เพิ่มขึ้น " + A*10 + " แต้ม")
        //       })
        //     })
        //   }
        // })

        this.loadAttendence();
        this.loadTimeAttended();
      })
    }

    loadTimeAttended(){
      this.member.getTimeAttended(localStorage.getItem("_id")).then(result=>{
        var round = result.items.length;
        // var dumb = data.user.includes(localStorage.getItem("_id"))
        console.log(result.items)
        for(var i=0;i<round;i++){
          if(result.items[i].rate_time.includes(localStorage.getItem("_id"))){
            this.rate_time+=1;
          }
        }

        
        this.atteneded = result.total_items;
        this.absent=this.total_numbers-this.atteneded;
        console.log(this.atteneded);
        console.log(this.rate_time)
      })
    }

    loadAttendence(){
      this.member.loadAttendence(localStorage.getItem("classroom")).then(result=>{
        this.items = result.items;
        var round = result.total_items;
        for(var i =0 ; i<round;i++){
          if(result.items[i].sick.includes(localStorage.getItem("_id"))){
            this.sick+=1;
          }
        }

        console.log(result)

        this.total_numbers = result.total_items;
        this.absent=this.total_numbers-this.atteneded;
      })
    }

    onCheckUser(data:any){
      var dumb = data.user.includes(localStorage.getItem("_id"))
      if(dumb==false){
        var sick = data.sick.includes(localStorage.getItem("_id"))
        if(sick==true){
          return "sick"
        }
      }
      return dumb;
    }

}
