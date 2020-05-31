import { Injectable } from '@angular/core'
import { HttpService } from 'src/app/services/http.service';
import { AccountService } from 'src/app/share/services/account.service';

@Injectable()
export class GradeService {
    constructor(
        private http : HttpService,
        private account: AccountService
    ) {
    }

    addScoreExercise(model){
        return this.http.requestPost('grade',model)
        .toPromise() as Promise<IGrade>;
    }

    getScoreExercise(exercise:string){
        return this.http.requestGet(`grade/${this.account.UserLogin._id}/${exercise}`)
        .toPromise() as Promise<IGrade>
    }

    getScoreExerciseById(id:string,exercise:string){
        return this.http.requestGet(`grade/${id}/${exercise}`)
        .toPromise() as Promise<IGrade>
    }

    // คำนวณ Level
}

export interface IGrade{
    total_items?:number,
    item?:any,

    _id:string,
    name:string,
    exp?:number,
    score:number,
    ref:string,
    user:string,
} 