import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { AlertService } from 'src/app/share/services/alert.service'
import { QuizService, IQuiz } from '../../services/quiz.service'
import { AppURL } from 'src/app/app.url'
import { AuthURL } from '../../authentication.url'
import { AccountService } from 'src/app/share/services/account.service'
import { GradeService } from '../../services/grade.service'
import { AuthenService } from 'src/app/services/authen.service'
import { LevelService } from '../../services/level.service'

@Component({
    selector: 'app-exercise',
    templateUrl: './exercise.component.html',
    styleUrls: ['./exercise.component.css'],
    providers: [QuizService, GradeService, LevelService],
})
export class ExerciseComponent implements OnInit {
    _id: string
    total_items: number
    item: IQuiz
    index: number = 0
    total_score: number

    your_answer: any[] = []

    constructor(
        private activateRouter: ActivatedRoute,
        private alert: AlertService,
        private quiz: QuizService,
        private account: AccountService,
        private router: Router,
        private grade: GradeService,
        private authen: AuthenService,
        private level:LevelService
    ) {
        this.activateRouter.queryParams.forEach((params) => {
            this._id = params.id
        })

        this.account
            .getUserLogin(this.authen.getAuthenticated())
            .then((result) => {
                // เรียกดูคะแนนถ้ามีคะแนนแล้ว แสดงว่าทำ PRE-TEST แล้วไม่สามารถทำได้
                this.grade
                    .getScoreExercise(this._id)
                    .then((result) => {
                        if (result.total_items > 0) {
                            this.alert.success(
                                'คะแนน "แบบทดสอบก่อนเรียน" ของคุณคือ ' +
                                    result.item.score
                            )
                            this.router.navigate([
                                '',
                                AppURL.Authen,
                                AuthURL.Home,
                            ])
                        }
                    })
            });
            console.log(this._id)

        // โหลดข้อมูลแบบฝึกหัด 
        this.quiz
            .getAllQuiz(this._id)
            .then((result) => {
                console.log(result)
                this.item = result.items
                this.total_items = result.total_items
                if (!this.item) {
                    this.alert.something_wrong()
                    this.router.navigate(['', AppURL.Authen, AuthURL.Home])
                }
                // console.log(result);
            })
            .catch(() => {
                this.alert.something_wrong()
                this.router.navigate(['', AppURL.Authen, AuthURL.Home])
            })
    }

    ngOnInit(): void {}

    choose(score, index: number, j: number) {
        this.your_answer[index] = {
            select: j,
            score: score,
        }
    }

    onSelect(index: number, j) {
        // index = ข้อ
        if (this.your_answer[index]) {
            if (this.your_answer[index].select == j) {
                return true
            }
        }

        return false
    }

    onSubmit() {
        this.total_score = 0

        // Array of numbers
        for (var i = 0; i < this.total_items; i++) {
            this.total_score += this.your_answer[i].score
        }

        var obj = {
            ref: this._id,
            name: this.item.name,
            score: this.total_score,
            user: localStorage.getItem("_id"),
        }

        this.grade.addScoreExercise(obj).then(() => {
            if(this._id=="PRE-TEST"){
                var B = this.total_score
                var C = 40
                var D = 2;
    
                var A = (B/C*D)*10;
    
                this.level.addExptoUser(localStorage.getItem("_id"), A).then(()=>{
                    this.alert.show_score("คุณได้รับค่าประสบการณ์เพิ่มขึ้น " + A + " แต้ม</br>ตอบถูกทั้งหมด " + this.total_score + " ข้อ",this.item.name)
                    this.router.navigate(['', AppURL.Authen, AuthURL.Home])
                })
            }
            
        })
    }

    onNextExercise() {
        if (this.index == this.total_items - 1) {
            return
        }
        this.index += 1
    }

    onPreviousExercise() {
        if (this.index == 0) {
            return
        }
        this.index -= 1
    }
}
