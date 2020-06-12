import { Injectable } from '@angular/core'
import { HttpService } from 'src/app/services/http.service'
import { AuthenService } from 'src/app/services/authen.service'
import { IChapter } from './resource.service'
import { IResponse } from './member.service'
import { IPRPSQUIZ } from '../components/quiz/prps-quiz/prps-quiz.component'
import { promise } from 'protractor'

@Injectable()
export class QuizService {
    constructor(private http: HttpService, private authen: AuthenService) {}

    getAllQuiz(ref: string) {
        return this.http
            .requestGet(`quiz/${ref}`, this.authen.getAuthenticated())
            .toPromise() as Promise<any>
    }

    getQuizById(_id:string){
        return this.http
            .requestGet(`quiz/quizId/${_id}`, this.authen.getAuthenticated())
            .toPromise() as Promise<any>
    }

    deleteQuiz(_id:string){
        return this.http.requestDelete(`quiz/${_id}`,this.authen.getAuthenticated())
            .toPromise() as Promise<any>
    }

    deletePrps(_id:string){
        return this.http.requestDelete(`prps/${_id}`,this.authen.getAuthenticated())
            .toPromise() as Promise<any>
    }

    updateQuiz(_id:string,model:any){
        return this.http.requestPatch(`quiz/${_id}`,this.authen.getAuthenticated(),model)
            .toPromise() as Promise<any>
    }

    updatePrps(_id:string,model:any){
        return this.http.requestPatch(`prps/${_id}`,this.authen.getAuthenticated(),model)
        .toPromise() as Promise<any>
    }

    getAllQuizList(){
        return this.http.requestGet('quiz', this.authen.getAuthenticated())
            .toPromise() as Promise<any>
    }

    getAllPrpsList(){
        return this.http.requestGet('prps', this.authen.getAuthenticated())
            .toPromise() as Promise<any>
    }

    getPrpstoUpdate(_id:string){
        return this.http.requestGet(`prps/list/${_id}`,this.authen.getAuthenticated())
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
    getAllPrPsbyRef(ref?:string){
        // ref="PRE-PRPS-TEST OR POST-PRPS-TEST"
        return this.http.requestGet(`prps/${ref}`,this.authen.getAuthenticated())
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
