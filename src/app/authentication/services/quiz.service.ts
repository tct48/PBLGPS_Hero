import { Injectable } from '@angular/core'
import { HttpService } from 'src/app/services/http.service'
import { AuthenService } from 'src/app/services/authen.service'
import { IChapter } from './resource.service'
import { IResponse } from './member.service'
import { IPRPSQUIZ } from '../components/quiz/prps-quiz/prps-quiz.component'

@Injectable()
export class QuizService {
    constructor(private http: HttpService, private authen: AuthenService) {}

    getAllQuiz(ref: string) {
        return this.http
            .requestGet(`quiz/${ref}`, this.authen.getAuthenticated())
            .toPromise() as Promise<any>
    }

    getAllChapter(){
        return this.http.requestGet('chapter', this.authen.getAuthenticated())
            .toPromise() as Promise<any>
    }

    getChapterByID(_id:string){
        return this.http.requestGet(`chapter/${_id}`, this.authen.getAuthenticated())
            .toPromise() as Promise<any>
    }

    addQuiz(model:any){
        return this.http
        .requestPost(`quiz/`, model)
        .toPromise() as Promise<IQuiz>
    }

    addPrPs(model:any){
        return this.http.requestPost('prps/',model)
            .toPromise() as Promise<IPRPSQUIZ>
    }

    getPrpsByRef(ref:string){
        return this.http.requestGet(`prps/${ref}`, this.authen.getAuthenticated())
            .toPromise() as Promise<IPRPSQUIZ>
    }
}

export interface IQuiz {
    message?:string,

    choice: Object,
     
    created: Date,
    detail: string,
    name: string,
    ref: string,
    _id: string
}
