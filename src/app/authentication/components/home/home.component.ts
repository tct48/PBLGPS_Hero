import { Component, OnInit } from '@angular/core'
import { AuthenService } from 'src/app/services/authen.service'
import { AlertService } from 'src/app/share/services/alert.service'
import {
    IAccount,
    AccountService,
} from 'src/app/share/services/account.service'
import { DomSanitizer } from '@angular/platform-browser'
import { Router } from '@angular/router'
import { AppURL } from 'src/app/app.url'
import { AuthURL } from '../../authentication.url'
import { GradeService } from '../../services/grade.service'

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    providers: [GradeService]
})
export class HomeComponent implements OnInit {
    constructor(
        private alert: AlertService,
        private authen: AuthenService,
        private account: AccountService,
        private sanitizer: DomSanitizer,
        private router: Router,
        private grade:GradeService
    ) {
        this.account
            .getUserLogin(this.authen.getAuthenticated())
            .then((result) => {
                this.UserLogin = this.authen.setUserLogin();
            })
    }

    url:any= this.sanitizer.bypassSecurityTrustResourceUrl("https://edpuzzle.com/embed/assignments/5ebe9cbb40d77c3f106af0f4/watch");
    UserLogin: any
    status:number = 0;
    preTest:number=0;
    prpsTest:number=0;

    ngOnInit(): void {}

    handleEvent(data){
        // console.log(data);
        if(data.action == "start"){
            console.log("เริ่มจับเวลา")
        }else if(data.action=="done"){
            console.log("จับเวลาเสร็จแล้ว")
        }
    }

    onClickPreTest(id:string) {
        if(this.status==1){
            return this.alert.show_score('คะแนน "แบบทดสอบก่อนเรียน" ของคุณคือ ' + this.preTest);
        }

        this.grade.getScoreExerciseById(localStorage.getItem("_id"),'PRE-TEST').then(result=>{
            if(result.total_items==0){
                this.router.navigate(['', AppURL.Authen, AuthURL.Exercise], {
                    queryParams: { id },
                })
            }else{
                this.status=1;
                this.preTest = result.item.score
                return this.alert.show_score('คะแนน "แบบทดสอบก่อนเรียน" ของคุณคือ ' + this.preTest);
            }
        })
    }

    onClickPrPS(id:string) {
        if(this.status==2){
            return this.alert.notify('กรุณาทำ "แบบฝึกหัดก่อนเรียน" ก่อน!')
        }

        this.grade.getScoreExerciseById(localStorage.getItem("_id"),'PRE-TEST').then(result=>{

            if(result.total_items==0){
                this.status=2;
                this.alert.notify('กรุณาทำ "แบบฝึกหัดก่อนเรียน" ก่อน!')
                return;
            }
            if(result.total_items>0){
                this.grade.getScoreExerciseById(localStorage.getItem("_id"),'PRE-PRPS-TEST').then(result=>{
                    if(result.total_items==0){
                        this.router.navigate(['', AppURL.Authen, AuthURL.ExercisePrps], {
                            queryParams: { id },
                        })
                    }else{
                        this.prpsTest = result.item.score
                        return this.alert.show_score('คะแนน "แบบประเมินทักษะการแก้ปัญหาก่อนเรียน" ของคุณคือ ' + this.prpsTest);
                    }
                })
            }
        })
    }

    hover(image) {
        if (image.id == 'button1') {
            return image.setAttribute(
                'src',
                'http://www.pblgps.com/assets/image/01-2.gif'
            )
        }
        return image.setAttribute('src', 'http://www.pblgps.com/assets/image/02-2.gif')
    }

    unhover(image) {}
}
