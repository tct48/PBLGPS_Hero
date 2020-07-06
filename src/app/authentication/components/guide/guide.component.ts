import { Component, OnInit } from '@angular/core'
import {
    AccountService,
    IAccount,
} from 'src/app/share/services/account.service'
import { AuthenService } from 'src/app/services/authen.service'
import 'sweetalert2/src/sweetalert2.scss'
import Swal from 'sweetalert2/dist/sweetalert2.js'
import { GuideService, IGuide } from '../../services/guide.service'
import { AlertService } from 'src/app/share/services/alert.service'

@Component({
    selector: 'app-guide',
    templateUrl: './guide.component.html',
    styleUrls: ['./guide.component.css'],
    providers: [GuideService],
})
export class GuideComponent implements OnInit {
    constructor(
        private account: AccountService,
        private authen: AuthenService,
        private guide: GuideService,
        private alert: AlertService
    ) {
        this.account
            .getUserLogin(this.authen.getAuthenticated())
            .then((result) => {
                this.UserLogin = this.authen.setUserLogin();
                console.log(this.UserLogin)
            })

        this.guide.getAllGuide().then((result) => {
            this.items = result.items
            console.log(this.items)
        })
    }

    ngOnInit(): void {}

    UserLogin: any
    items: IGuide[]

    onClickMenu(menu?: string) {
        var x = this.items.findIndex((arr) => {
            return arr._id == menu
        })

        var value

        if (this.items[x].url) {
            value = this.items[x].url
        }

        Swal.mixin({
            input: 'text',
            confirmButtonText: 'ยืนยัน',
            showCancelButton: true,
        })
            .queue([
                {
                    title: 'แนบ URL ไฟล์แนะนำ',
                    text:
                        'ลิงก์สำหรับเมนู "' +
                        this.items[x].name +
                        '" จาก Google Drive',
                    inputPlaceholder: 'ลิงก์สำหรับเปิดไฟล์',
                    inputValue: value,
                },
                // 'Question 2',
                // 'Question 3'
            ])
            .then((result) => {
                if (result.value) {
                    const answers = result.value[0]
                    console.log()

                    this.guide
                        .patchGuide(this.items[x]._id, { url: answers })
                        .then((result) => {
                          this.alert.success("เพิ่มข้อมูลสำเร็จ!");
                        })
                }
            })
    }

    onOpenMenu(menu?: string) {
        var x = this.items.findIndex((arr) => {
            return arr._id == menu
        })

        if(!this.items[x].url){
          return this.alert.notify("ยังไม่มีข้อมูล!");
        }
        // window.location(this.items[x].url)
        window.open(this.items[x].url, '_blank')
    }
}
