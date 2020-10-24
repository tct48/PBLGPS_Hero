import { Injectable } from '@angular/core'
import { HttpService } from 'src/app/services/http.service';
import { AccountService } from 'src/app/share/services/account.service';
import { AuthenService } from 'src/app/services/authen.service';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable()
export class GradeService {
    constructor(
        private http : HttpService,
        private account: AccountService,
        private authen: AuthenService,
        private fireservice:AngularFirestore,
    ) {
    }

    addScoreExercise(model){
        return this.http.requestPost('grade',model)
        .toPromise() as Promise<IGrade>;
    }

    getScoreExercise(exercise:string){
        return this.http.requestGet(`grade/${localStorage.getItem("_id")}/${exercise}`)
        .toPromise() as Promise<IGrade>
    }

    getScoreExerciseById(id:string,exercise:string){
        return this.fireservice.collection('Grade', ref => ref.where('user','==',id).where('name','==',exercise)).snapshotChanges()
        // return this.http.requestGet(`grade/${id}/${exercise}`)
        // .toPromise() as Promise<IGrade>
    }

    updateScoreExcerciseById(exercise_id:string,model:any){
        return this.http.requestPatch(`grade/${exercise_id}`,this.authen.getAuthenticated(),model)
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