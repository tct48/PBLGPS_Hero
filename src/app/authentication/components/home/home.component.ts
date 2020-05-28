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
                this.UserLogin = result
            })
    }

    url:any= this.sanitizer.bypassSecurityTrustResourceUrl("https://edpuzzle.com/embed/assignments/5ebe9cbb40d77c3f106af0f4/watch");
    UserLogin: IAccount
    status:number = 0;
    preTest:number=0;
    prpsTest:number=0;

    ngOnInit(): void {}

    onClickPreTest(id:string) {
        if(this.status==1 || this.status==2 || this.status==3){
            this.alert.success('คะแนน "แบบทดสอบก่อนเรียน" ของคุณคือ ' + this.preTest);
            return;
        }
        // เรียกดูคะแนนถ้ามีคะแนนแล้ว แสดงว่าทำ PRE-TEST แล้วไม่สามารถทำได้
        this.grade.getScoreExercise('PRE-TEST').then(result=>{
            if(result.total_items>0){
                this.alert.success('คะแนน "แบบทดสอบก่อนเรียน" ของคุณคือ ' + result.item.score);
                this.preTest=result.item.score;
                return;
            }else{
                this.router.navigate(['', AppURL.Authen, AuthURL.Exercise], {
                    queryParams: { id },
                })
            }

        })
        this.status=1;
    }

    onClickPrPS(id:string) {
        if(this.status==2){
            return this.alert.notify('ขณะนี้ระบบยังไม่เปิดการใช้งานแบบประเมินทักษะการแก้ปัญหา','แจ้งเตือน','warning');
        }else if(this.status==3){
            return this.alert.notify('กรุณาทำ "แบบฝึกหัดก่อนเรียน" ก่อน!')
        }else if(this.status==4){
            return this.alert.success('คะแนน "ประเมินทักษะการแก้ปัญหา" ของคุณคือ ' + this.prpsTest);
        }
        // เรียกดูคะแนนถ้ามีคะแนนแล้ว แสดงว่าทำ PRE-TEST แล้วไม่สามารถทำได้
        this.grade.getScoreExercise('PRE-TEST').then(result=>{
            if(result.total_items>=0){
                this.router.navigate(['', AppURL.Authen, AuthURL.ExercisePrps], {
                    queryParams: { id },
                })
                this.status=3;
                return;
            }else{
                return this.alert.notify('กรุณาทำ "แบบฝึกหัดก่อนเรียน" ก่อน!')
            }
        })
    }

    hover(image) {
        if (image.id == 'button1') {
            return image.setAttribute(
                'src',
                '../../../../assets/image/01-2.gif'
            )
        }
        return image.setAttribute('src', '../../../../assets/image/02-2.gif')
    }

    unhover(image) {}
}
