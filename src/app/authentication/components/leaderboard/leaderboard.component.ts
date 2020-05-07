import { Component, OnInit } from '@angular/core';
import { IAccount, AccountService } from 'src/app/share/services/account.service';
import { AuthenService } from 'src/app/services/authen.service';
import { MemberService } from 'src/app/share/services/member.service';
import { LevelService } from '../../services/level.service';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css'],
  providers: [LevelService]
})
export class LeaderboardComponent implements OnInit {
  UserLogin:IAccount
  Leaderboard:any

  crown_image= [
    "../../../../assets/image/Crown4.png",
    "../../../../assets/image/Crown3.png",
    "../../../../assets/image/Crown2.png",
    "../../../../assets/image/Crown5.png",
    "../../../../assets/image/Crown5.png"
  ]

  constructor(
    private authen: AuthenService,
    private account: AccountService,
    private member: MemberService,
    private level: LevelService
  ) {
    if(!this.UserLogin){
      this.loadUserLogin();
    }
    this.loadTopPlayer();
   }

  ngOnInit(): void {
  }

  lvl:Number;

  loadUserLogin(){
    this.account.getUserLogin(this.authen.getAuthenticated())
    .then(result=>{
      this.UserLogin = result
    })
  }

  loadTopPlayer(){
    this.member.getTopPlayer()
    .then(result=>{
      this.Leaderboard=result.items;
    })
  }

  calLevel(exp){
    return this.level.calculateLevel(exp);
  }

}
