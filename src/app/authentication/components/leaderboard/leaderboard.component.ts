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
        private account: AccountService,
    ) {
        if (!this.UserLogin) {
            this.loadUserLogin()
        }
        this.loadTopPlayer()
    }

    ngOnInit(): void {}

    lvl: Number
    Leaderboard: any
    UserLogin: IAccount
    
    // ภาพ มงกุฎ
    crown_image = [
        '../../../../assets/image/Crown4.png',
        '../../../../assets/image/Crown3.png',
        '../../../../assets/image/Crown2.png',
        '../../../../assets/image/Crown5.png',
        '../../../../assets/image/Crown5.png',
    ]



    // ดึงข้อมูล UserLogin
    loadUserLogin() {
        this.account
            .getUserLogin(this.authen.getAuthenticated())
            .then((result) => {
                this.UserLogin = result
            })
    }

    // ดึงข้อมูล Top 5 Player
    loadTopPlayer() {
        this.member.getTopPlayer().then((result) => {
            this.Leaderboard = result.items
        })
    }

    // คำนวณ Level
    calLevel(exp) {
        return this.level.calculateLevel(exp)
    }
}
