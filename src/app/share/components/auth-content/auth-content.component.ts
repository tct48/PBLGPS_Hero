import { Router } from '@angular/router'
import { AppURL } from 'src/app/app.url'
import { Component, OnInit } from '@angular/core'
import { AlertService } from '../../services/alert.service'
import { AuthenService } from 'src/app/services/authen.service'
import { IAccount, AccountService } from '../../services/account.service'

@Component({
    selector: 'app-auth-content',
    templateUrl: './auth-content.component.html',
    styleUrls: ['./auth-content.component.css'],
})
export class AuthContentComponent implements OnInit {
    constructor(
        private account: AccountService,
        private authen: AuthenService,
        private alert: AlertService,
        private router: Router
    ) {

    }

    ngOnInit(): void {}

    
    UserLogin: any
}
