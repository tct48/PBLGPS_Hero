import { Component, OnInit } from '@angular/core'
import { AuthenService } from 'src/app/services/authen.service'
import { AlertService } from 'src/app/share/services/alert.service'
import {
    IAccount,
    AccountService,
} from 'src/app/share/services/account.service'

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
    constructor(
        private alert: AlertService,
        private authen: AuthenService,
        private account: AccountService
    ) {
        this.account
            .getUserLogin(this.authen.getAuthenticated())
            .then((result) => {
                this.UserLogin = result
            })
    }

    UserLogin: IAccount

    ngOnInit(): void {}

    onClickPreTest() {
        this.alert.notify('Okay')
    }

    onClickPrPS() {
        this.alert.showWarning('', 'กรุณาทำแบบฝึกหัดก่อน')
    }

    hover(image) {
        if (image.id == 'button1') {
            return image.setAttribute(
                'src',
                '../../../../assets/image/01-2.gif'
            )
        }
        return image.setAttribute('src', '../../../../assets/image/02-2.gif')
    }

    unhover(image) {}
}
