import { Component, OnInit } from '@angular/core'
import { LevelService } from '../../services/level.service'
import { AuthenService } from 'src/app/services/authen.service'
import { MemberService } from 'src/app/share/services/member.service'
import {
    IAccount,
    AccountService,
} from 'src/app/share/services/account.service'

@Component({
    selector: 'app-leaderboard',
    templateUrl: './leaderboard.component.html',
    styleUrls: ['./leaderboard.component.css'],
    providers: [LevelService],
})
export class LeaderboardComponent implements OnInit {
    constructor(
        private level: LevelService,
        private member: MemberService,
        private authen: AuthenService,
        private account: AccountService
    ) {
        if (!this.UserLogin) {
            this.loadUserLogin()
        }
        this.loadTopPlayer()
    }

    ngOnInit(): void { }

    lvl: Number
    Leaderboard: any
    UserLogin: any
    status: string

    // ภาพ มงกุฎ
    crown_image = [
        'http://www.pblgps.com/assets/image/Crown4.png',
        'http://www.pblgps.com/assets/image/Crown3.png',
        'http://www.pblgps.com/assets/image/Crown2.png',
        'http://www.pblgps.com/assets/image/Crown5.png',
        'http://www.pblgps.com/assets/image/Crown5.png',
    ]

    loadTopPlayerFromMyClassroom() {
        if (this.status == "B")
            return;
        console.log("Come in");

        // this.Leaderboard = this.member.getTopPlayer(localStorage.getItem("classroom"));
        this.member.getTopPlayer(localStorage.getItem("classroom")).then(result=>{
            console.log(result);
        })
        this.status = "B"
    }

    // ดึงข้อมูล UserLogin
    loadUserLogin() {
        this.UserLogin = this.authen.setUserLogin();
    }

    // ดึงข้อมูล Top 5 Player
    loadTopPlayer() {
        if (this.status == "A")
            return;
        this.member.getTopPlayer().then(result=>{
            console.log(result);
            this.Leaderboard = result[0].items;
        })
        this.status = "A";
    }

    // คำนวณ Level
    calLevel(exp) {
        return this.level.calculateLevel(exp)
    }
}
