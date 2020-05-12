import { Injectable } from '@angular/core'
import { HttpService } from 'src/app/services/http.service'
import { AuthenService } from 'src/app/services/authen.service'
import { IMember } from 'src/app/authentication/services/member.service'

@Injectable({
    providedIn: 'root',
})
export class MemberService {
    member: Number[]
    constructor(private http: HttpService, private authen: AuthenService) {}

    showMember() {
        return this.member
    }

    getTopPlayer() {
        return this.http
            .requestGet('user/leaderboard', this.authen.getAuthenticated())
            .toPromise() as Promise<IMember>
    }
}
