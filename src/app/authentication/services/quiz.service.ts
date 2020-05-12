import { Injectable } from '@angular/core'
import { HttpService } from 'src/app/services/http.service'
import { AuthenService } from 'src/app/services/authen.service'

@Injectable()
export class QuizService {
    constructor(private http: HttpService, private authen: AuthenService) {}

    getAllQuiz(ref: string) {
        return this.http
            .requestGet(`quiz/${ref}`, this.authen.getAuthenticated())
            .toPromise() as Promise<IQuiz>
    }
}

export interface IQuiz {
    total_items?: number
    items?: string

    _id: string
    question: string
    choice: string

    answer: string
    point: number

    type: string
    ref?: string
}
