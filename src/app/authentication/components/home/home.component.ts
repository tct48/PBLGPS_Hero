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

    ngOnInit(): void {}

    onClickPreTest(id:string) {
        if(this.status==1 || this.status==2){
            this.alert.success('คะแนน "แบบทดสอบก่อนเรียน" ของคุณคือ ' + this.preTest);
            return;
        }
        // เรียกดูคะแนนถ้ามีคะแนนแล้ว แสดงว่าทำ PRE-TEST แล้วไม่สามารถทำได้
        this.grade.getScoreExercise('5ebfd57615e8ec0024ab6faa').then(result=>{
            if(result.total_items>0){
                this.alert.success('คะแนน "แบบทดสอบก่อนเรียน" ของคุณคือ ' + result.item.score);
                this.status=1;
                this.preTest=result.item.score;
                console.log("Request1")
                return;
            }else{
                this.router.navigate(['', AppURL.Authen, AuthURL.Exercise], {
                    queryParams: { id },
                })
            }

        })

        this.status=1;
    }

    onClickPrPS() {
        if(this.status==2){
            return this.alert.notify('กรุณาทำ "แบบฝึกหัดก่อนเรียน" ก่อน!','แจ้งเตือน','warning');
        }
        // เรียกดูคะแนนถ้ามีคะแนนแล้ว แสดงว่าทำ PRE-TEST แล้วไม่สามารถทำได้
        this.grade.getScoreExercise('5ebfd57615e8ec0024ab6faa').then(result=>{
            if(result.total_items==0){
                this.alert.notify('กรุณาทำ "แบบฝึกหัดก่อนเรียน" ก่อน!');
                this.status=2;
                console.log("Request2")
                return;
            }else{
                this.alert.notify("ขณะนี้ระบบยังไม่เปิดการใช้งานแบบประเมินทักษะการแก้ปัญหา!",'แจ้งเตือน','warning');
                this.status=2;
                console.log("Request2")
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
