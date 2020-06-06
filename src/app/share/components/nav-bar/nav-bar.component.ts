
import { Router } from '@angular/router'
import { AppURL } from 'src/app/app.url'
import { Component, OnInit } from '@angular/core'
import { AuthURL } from 'src/app/authentication/authentication.url'
import { AlertService } from '../../services/alert.service'
import { AuthenService } from 'src/app/services/authen.service'
import { AccountService, IAccount } from '../../services/account.service'
import { MemberService } from 'src/app/authentication/services/member.service'
import { GradeService } from 'src/app/authentication/services/grade.service'


declare let App
@Component({
    selector: 'app-nav-bar',
    templateUrl: './nav-bar.component.html',
    styleUrls: ['./nav-bar.component.css'],
    providers:[GradeService]
})
export class NavBarComponent implements OnInit {
    constructor(
        private router: Router,
        private alert: AlertService,
        private authen: AuthenService, 
        private account: AccountService,
        private grade : GradeService
    ) {
        this.initialLoadUserLogin()
        this.UserLogin = this.account.UserLogin

        this.UserLogin
        
    }

    ngOnInit(): void {}

    menu= false;

    login:any
    AppURL = AppURL
    AuthURL = AuthURL
    UserLogin: IAccount = {} as any

    // โหลด User Login
    public initialLoadUserLogin() {
        var data = this.authen.getAuthenticated()
        if (!data) {
            return
        }
        this.account
            .getUserLogin(this.authen.getAuthenticated())
            .then((userLogin) => {
                this.UserLogin = userLogin
                this.login = 1
                
                this.grade.getScoreExerciseById(this.UserLogin._id,"PRE-PRPS-TEST").then(result=>{
                    if(result.total_items>0){
                        this.menu=true;
                    }
                })
            })
            .catch((err) => {
                this.alert.notify(err.message)
                this.authen.clearAuthenticated()
                this.router.navigate(['/', AppURL.Login])
            })
    }


    // ออกจากระบบ
    onLogout() {
        this.authen.clearAuthenticated()
        this.account.onLogout()
        this.login = null
        this.router.navigate(['/', AppURL.Login])
    }
}
