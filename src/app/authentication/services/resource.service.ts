import { Injectable } from "@angular/core";
import { HttpService } from 'src/app/services/http.service';
import { AuthenService } from 'src/app/services/authen.service';

@Injectable()
export class ResourceService{
    constructor(
        private http: HttpService,
        private authen : AuthenService
    ){}

    onShowAllChapter(){
        return this.http.requestGet('chapter', this.authen.getAuthenticated())
        .toPromise() as Promise<IChapter>;
    }

    onShowOneChapter(_id:string){
        return this.http.requestGet(`chapter/${_id}`, this.authen.getAuthenticated())
            .toPromise() as Promise<IChapter>; 
    }

}

export interface IChapter{
    total_items?:number;
    items?:string;
    item?:string;

    _id:string;
    title:string;
    name:string;
    files?:string;
    url?:string;
    quiz?:string;
}