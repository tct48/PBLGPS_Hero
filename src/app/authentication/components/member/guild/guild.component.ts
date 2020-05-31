import { Component, OnInit } from '@angular/core'
import {
    MemberService,
    IMember,
} from 'src/app/authentication/services/member.service'
import { AccountService } from 'src/app/share/services/account.service'
import { AuthenService } from 'src/app/services/authen.service'
import { LevelService } from 'src/app/authentication/services/level.service'
import { GradeService } from 'src/app/authentication/services/grade.service'

@Component({
    selector: 'app-guild',
    templateUrl: './guild.component.html',
    styleUrls: ['./guild.component.css'],
    providers: [MemberService, LevelService, GradeService],
})
export class GuildComponent implements OnInit {
    constructor(
      private member: MemberService, 
      private level: LevelService,
      private account: AccountService,
      private grade : GradeService) {
        this.classroom = this.account.UserLogin.class;
        if (this.guild_id)
            this.member
                .loadUserbyGuild('5ed0b69ec449952490ed6e9d')
                .then((result) => {
                    this.total_user = result.items.user.length
                    this.items = result.items
                    this.setDetailUser()
                })
        else {
          this.member.loadMemberFromClassroom(this.classroom).then(result=>{
            this.total_user = result.items.length;
            // console.log(result)
            // console.log(this.no_group_user)
            this.ur_id = this.account.UserLogin._id
          })
        }
    }

    ngOnInit(): void {}
    guild_id: String='1ss'
    ur_id:String

    total_user: number
    items: any
    classroom:String
    detail_user = [];

    setDetailUser() {
        this.detail_user = []
        for (var i = 0; i < this.total_user; i++) {
            this.member.getUserByID(this.items.user[i]).then((result) => {
                this.detail_user.push(result.items[0])
            })
        }
        // console.log(this.detail_user)
    }

    getLevel(exp: number) {
        return this.level.calculateLevel(exp)
    }
}
