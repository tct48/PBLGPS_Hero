import { Injectable } from '@angular/core'
import { HttpService } from 'src/app/services/http.service';
import { AccountService } from 'src/app/share/services/account.service';
import { AuthenService } from 'src/app/services/authen.service';

@Injectable()
export class GuideService {
    constructor(
        private http : HttpService,
        private account: AccountService,
        private authen: AuthenService
    ) {
    }

    getAllGuide(){
        return this.http.requestGet('guide/',this.authen.getAuthenticated()).toPromise() as Promise<IGuide>
    }

    patchGuide(_id:string,model:any){
        return this.http.requestPatch(`guide/${_id}`,this.authen.getAuthenticated(),model).toPromise() as Promise<IGuide>
    }
}

export interface IGuide{
    items?:any
    _id:string
    name:string
    url:string
}
