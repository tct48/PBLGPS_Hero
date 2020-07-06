import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { QuizService } from 'src/app/authentication/services/quiz.service'
import { AlertService } from 'src/app/share/services/alert.service'
import { count } from 'rxjs/operators'
import { AccountService } from 'src/app/share/services/account.service'
import { GradeService } from 'src/app/authentication/services/grade.service'
import { AppURL } from 'src/app/app.url'
import { AuthURL } from 'src/app/authentication/authentication.url'
import { LevelService } from 'src/app/authentication/services/level.service'

@Component({
    selector: 'app-exercise-prps',
    templateUrl: './exercise-prps.component.html',
    styleUrls: ['./exercise-prps.component.css'],
    providers: [QuizService, GradeService, LevelService],
})
export class ExercisePrpsComponent implements OnInit {
    constructor(
        private activateRouter: ActivatedRoute,
        private quiz: QuizService,
        private alert: AlertService,
        private account: AccountService,
        private grade : GradeService,
        private router : Router,
        private level: LevelService
    ) {
        this.activateRouter.queryParams.forEach((params) => {
            this._id = params.id
        })

        this.quiz.getAllPrPsbyRef(this._id).then((result) => {
            this.items = result.items
        })
    }

    your_answer = []
    page = 1
    progress_page: number = 0
    progress_length: number = 0
    your_score: number = 0

    ngOnInit(): void {}

    choose(score: number, index: number, j: number) {
        this.your_answer[index] = {
            select: j,
            score: score,
        }

        // console.log(this.calculateScore())
        this.progress_length = this.countAnswer(this.your_answer)
    }

    calculateScore() {
        var total_score: number = 0
        for (var i = 0; i < this.your_answer.length; i++) {
            // console.log(this.your_answer[i].score)
            total_score += Number(this.your_answer[i].score)
        }
        return total_score
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

    countAnswer(data) {
        let counter = 0
        for (const input of data) {
            if (input) counter += 1
        }
        return counter
    }

    onNext() {
        var counter = this.countAnswer(this.your_answer)
        if (this.progress_length == 9) {
            return
        }

        if (this.progress_page == 0) {
            if (counter < 4) {
                return this.alert.notify('กรุณาตอบให้ครบทุกข้อ')
            }
        }

        if (counter < (this.progress_page + 1) * 4) {
            return this.alert.notify('กรุณาตอบให้ครบทุกข้อ')
        }

        this.progress_page += 1
    }

    onPrevious() {
        if (this.progress_page > 0) this.progress_page -= 1
    }

    onSubmit() {
        this.your_score = this.calculateScore()

        var obj = {
            ref: this._id,
            name: this._id,
            score: this.your_score,
            user: localStorage.getItem("_id"),
        }

        

        this.grade.addScoreExercise(obj).then(() => {
          this.alert.success(
            'คะแนนของคุณคือ ' + this.your_score + '/40',
            'แบบทดสอบ ' + this._id
        )
            if(this._id=="PRE-PRPS-TEST"){
                var B = Number(this.your_score);
                var C = 40;
                var D = 10;
                var A = B/C*D;
                this.level.addExptoUser(localStorage.getItem("_id"),A).then(()=>{
                    this.alert.success("คุณได้รับค่าประสบการณ์เพิ่มขึ้น " + A + " แต้ม");
                    this.router.navigate(['', AppURL.Authen, AuthURL.Home])
                })
            }
        })

        
    }

    _id: string
    items: any
    section: number = 0
    sub_section: number = 0
    format = ['1', '2', '3', '4']
}
