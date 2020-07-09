import { Component, OnInit } from '@angular/core'
import {
    MemberService,
    IMember,
} from 'src/app/authentication/services/member.service'
import { AccountService } from 'src/app/share/services/account.service'
import { AuthenService } from 'src/app/services/authen.service'
import { LevelService } from 'src/app/authentication/services/level.service'
import { GradeService } from 'src/app/authentication/services/grade.service'
import { Router } from '@angular/router'
import { AppURL } from 'src/app/app.url'
import { AuthURL } from 'src/app/authentication/authentication.url'
import { AlertService } from 'src/app/share/services/alert.service'

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
      private grade : GradeService,
      private route: Router,
      private alert:AlertService) {
        this.member.loadUserbyGuild(localStorage.getItem("_id")).then(result=>{
            this.total_user = result.items.length
            this.items = result.items

            console.log(result)
            if(this.items[0].guild==" "){
                this.alert.notify("กรุณาเข้าร่วมกิล์ดก่อน!")
                this.route.navigate(['', AppURL.Authen, AuthURL.Home])
            }

            this.setGuildName(this.items[0].guild)

            for(var i=0;i<this.total_user;i++){
                this.grade.getScoreExerciseById(result.items[i]._id,'PRE-TEST').then(result=>{
                    if(result.total_items==0){
                        this.PRETEST.push("-");
                    }else{
                        this.PRETEST.push(result.item.score)
                    }
                })

                this.grade.getScoreExerciseById(result.items[i]._id,'PRE-PRPS-TEST').then(result=>{
                    if(result.total_items==0){
                        this.PrePRPS.push("-");
                    }else{
                        this.PrePRPS.push(Math.ceil(result.item.score/40*10))
                    }
                })

                this.grade.getScoreExerciseById(result.items[i]._id,'ATTENDENCE').then(result=>{
                    if(result.total_items==0){
                        this.ATTENDENCE.push("-");
                    }else{
                        this.ATTENDENCE.push(Math.round(result.item.score/18*10))
                    }
                })

            }

            console.log(result)
        })
    }

    ngOnInit(): void {}
    total_user: number
    items: any
    guild_name:number;
    description=["The strongest guild.", "Famous guild", "Guild that loves peace", "Guild hiding in the dark.", "Guilds who like to war more than use the brain."]
    guild_image=[
        "../../../../../assets/image/guild/guild4.png",
        "../../../../../assets/image/guild/guild1.png",
        "../../../../../assets/image/guild/guild3.jpg",
        "../../../../../assets/image/guild/skull.png",
        "../../../../../assets/image/guild/guild2.png",
    ]

    PRETEST=[];
    PrePRPS=[];
    ATTENDENCE=[];

    getLevel(exp: number) {
        return this.level.calculateLevel(exp)
    }


    setGuildName(model:string){
        if(model=="เด็กเรียนเก่ง"){
            this.guild_name=1
        }else if(model=="ค่อนข้างดี"){
            this.guild_name=2
        }else if(model=="ปานกลาง"){
            this.guild_name=3
        }else if(model=="พอใช้"){
            this.guild_name=4
        }else{
            this.guild_name=5
        }
    }
}
