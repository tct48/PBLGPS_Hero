import { Component, OnInit } from '@angular/core'
import { MemberService } from '../../services/member.service'
import { LevelService } from '../../services/level.service'
import { GradeService } from '../../services/grade.service'
import { AccountService } from 'src/app/share/services/account.service'
import { AlertService } from 'src/app/share/services/alert.service'
import { Router } from '@angular/router'
import { AppURL } from 'src/app/app.url'
import { AuthURL } from '../../authentication.url'

@Component({
    selector: 'app-stage',
    templateUrl: './stage.component.html',
    styleUrls: ['./stage.component.css'],
    providers: [LevelService, MemberService, GradeService],
})
export class StageComponent implements OnInit {
    constructor(
        private member: MemberService,
        private level: LevelService,
        private account: AccountService,
        private grade: GradeService,
        private alert: AlertService,
        private router: Router
    ) {
        this.member
            .loadUserbyGuild(localStorage.getItem("_id"))
            .then((result) => {
                this.total_user = result.items.length
                this.items = result.items
                this.setGuildName(this.items[0].guild)

                console.log(this.items)
            })
    }

    total_user: number
    items: number
    guild_name: number
    description = [
        'The strongest guild.',
        'Famous guild',
        'Guild that loves peace',
        'Guild hiding in the dark.',
        'Guilds who like to war more than use the brain.',
    ]
    guild_image = [
        '../../../../../assets/image/guild/guild4.png',
        '../../../../../assets/image/guild/guild1.png',
        '../../../../../assets/image/guild/guild3.jpg',
        '../../../../../assets/image/guild/skull.png',
        '../../../../../assets/image/guild/guild2.png',
    ]

    ready = []

    setGuildName(model: string) {
        if (model == 'เด็กเรียนเก่ง') {
            this.guild_name = 1
        } else if (model == 'ค่อนข้างดี') {
            this.guild_name = 2
        } else if (model == 'ปานกลาง') {
            this.guild_name = 3
        } else if (model == 'พอใช้') {
            this.guild_name = 4
        } else {
            this.guild_name = 5
        }
    }

    onReady(_id:String,i:number){
      if(!this.ready.includes(_id)==true){
        this.ready[i]=_id;
      }
    }

    onSubmit() {
      console.log(this.ready)
        if (this.ready.length != this.total_user) {
            return this.alert.notify(
                'ทีมของคุณยังไม่พร้อม !',
                'แจ้งเตือน',
                'warning'
            )
        }

      this.router.navigate(['/',AppURL.Authen,AuthURL.ExerciseStage])
    }

    ngOnInit(): void {}
}
