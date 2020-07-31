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
    providers: [GradeService],
})
export class NavBarComponent implements OnInit {
    constructor(
        private router: Router,
        private alert: AlertService,
        private authen: AuthenService,
        private account: AccountService,
        private grade: GradeService
    ) {
        this.grade.getScoreExerciseById(localStorage.getItem("_id"),'PRE-TEST').then(result=>{
            if(result.total_items>0){
                this.UserLogin.menu = true
            }else{
                this.UserLogin.menu= false
            }
        })



        if (this.menu == false || !this.UserLogin.menu) {
            this.initialLoadUserLogin()
        }
    }
    private currentUser: IAccount

    ngOnInit(): void {}

    menu:boolean=false;

    login: any
    AppURL = AppURL
    AuthURL = AuthURL
    UserLogin: any = {} as any

    get isAdmin() {
        return ;
        // return this.currentUser && this.currentUser.role === Role.Admin;
    }

    // โหลด User Login
    public initialLoadUserLogin() {
        var data = this.authen.getAuthenticated()
        if (!data) {
            return
        }
        this.account
            .getUserLogin(this.authen.getAuthenticated())
            .then((userLogin) => {
                this.login = 1
                this.UserLogin = this.authen.setUserLogin();
                this.UserLogin.role = localStorage.getItem("role");
                if(this.UserLogin.role == "admin"){
                    this.UserLogin.menu =true;
                }
                this.grade
                    .getScoreExerciseById(this.UserLogin._id, 'PRE-TEST')
                    .then((result) => {
                        if (result.total_items > 0) {
                            this.account.setUserMenu();
                        }
                    })
                this.grade.getScoreExerciseById(localStorage.getItem("_id"),'PRE-TEST').then(result=>{
                    if(result.total_items>0){
                        this.UserLogin.menu = true
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
        this.account.UserLogin = {} as any;

        this.login = null
        localStorage.clear();
        this.router.navigate(['/', AppURL.Login])
    }
}
