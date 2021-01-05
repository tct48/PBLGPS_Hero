import { Injectable } from '@angular/core'
import { HttpService } from 'src/app/services/http.service'
import { AuthenService } from 'src/app/services/authen.service'
import { IMember } from 'src/app/authentication/services/member.service'

@Injectable({
    providedIn: 'root',
})
export class MemberService {
    member: Number[]

    constructor(private http: HttpService, private authen: AuthenService) { }

    showMember() {
        return this.member
    }
    item: any[] = [];
    getTopPlayer(classroom?: string) {
        this.item = [];
        if (classroom) {
            //เฉพาะห้องตัวเอง
            return this.http.requestGet(`member/_GET/leaderboard.php?classroom=${classroom}`, "OK").toPromise() as Promise <any>
        }
        return this.http.requestGet('member/_GET/leaderboard.php?', "OK").toPromise() as Promise <any>

        // ทั้งหมด
        // var dumb = this.fireservice.collection('User', ref => ref.where('role', '==', 'student').limit(5))
        // dumb.ref.orderBy('exp', 'desc').onSnapshot((snapshot) => {
        //     snapshot.docChanges().forEach(change => {
        //         this.item.push(
        //             {
        //                 _id: change.doc.id,
        //                 username: change.doc.data().username,
        //                 exp: change.doc.data().exp,
        //             }
        //         )
        //     })
        // })
    }
}

export interface ITopPlayer {
    items: any,
    username: string,
    exp: number,
    badge: any
}
