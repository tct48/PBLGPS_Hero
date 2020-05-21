import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { AlertService } from 'src/app/share/services/alert.service'
import { QuizService, IQuiz } from '../../services/quiz.service'
import { AppURL } from 'src/app/app.url'
import { AuthURL } from '../../authentication.url'

@Component({
    selector: 'app-exercise',
    templateUrl: './exercise.component.html',
    styleUrls: ['./exercise.component.css'],
    providers: [QuizService],
})
export class ExerciseComponent implements OnInit {
    _id: string
    total_items: number
    item: IQuiz
    index: number = 0
    total_score:number;

    constructor(
        private activateRouter: ActivatedRoute,
        private alert: AlertService,
        private quiz: QuizService,
        private router: Router
    ) {
        this.activateRouter.queryParams.forEach((params) => {
            this._id = params.id
        })

        this.quiz
            .getAllQuiz(this._id)
            .then((result) => {
                this.item = result.items[0]
                if (!this.item) {
                    this.alert.something_wrong()
                    this.router.navigate(['', AppURL.Authen, AuthURL.Home])
                }
                console.log(this.item)
            })
            .catch(() => {
                this.alert.something_wrong()
                this.router.navigate(['', AppURL.Authen, AuthURL.Home])
            })
    }

    ngOnInit(): void {}

    onNextExercise() {
        if (this.index == 2 - 1) {
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
