import { Component, OnInit } from '@angular/core'
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms'
import { AlertService } from 'src/app/share/services/alert.service'
import { Router, ActivatedRoute } from '@angular/router'
import { AppURL } from 'src/app/app.url'
import { AccountService } from 'src/app/share/services/account.service'
import { AuthenService } from 'src/app/services/authen.service'
import { AuthURL } from 'src/app/authentication/authentication.url'
import { MemberService } from 'src/app/authentication/services/member.service'

@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html',
    styleUrls: ['./signin.component.css'],
    providers: [MemberService],
})
export class SigninComponent implements OnInit {
    constructor(
        private builder: FormBuilder,
        private alert: AlertService,
        private router: Router,
        private authen: AuthenService,
        private account: AccountService,
        private activateRoute: ActivatedRoute,
        private member: MemberService
    ) {
        //ย้อนกลับไปหน้า LOGIN กรณี Redirect
        this.activateRoute.params.forEach((params) => {
            this.returnURL =
                params.returnURL || `/${AppURL.Authen}/${AuthURL.Home}`
        })
        this.redirectPage()

        this.alert.announce(
            "อัพเดท &nbsp; <span style='color:orange'> 12 พค 2020, 14:28:51 PM</span>",
            '1) เพิ่มแหล่งเรียนรู้ได้ <br>2) แสดงผลแหล่งเรียนรู้ได้'
        )

        this.createFormData()
    }

    password: any
    returnURL: any
    c_password: any
    form: FormGroup

    AppURL = AppURL
    AuthURL = AuthURL

    ngOnInit(): void {}

    // สร้างฟอร์ม
    createFormData() {
        this.form = this.builder.group({
            username: ['', Validators.required],
            password: ['', Validators.required],
        })
    }

    // ฟังก์ชั่นเปลี่ยนหน้า ล๊อกอินสำเร็จ
    redirectPage() {
        var data = this.authen.getAuthenticated()
        if (data) {
            this.router.navigate(['/', AppURL.Authen, AuthURL.Home])
        }
    }

    // ปุ่มล๊อกอิน
    onSubmit() {
        if (this.form.invalid) {
            return this.alert.notify('กรุณากรอกข้อมูลให้ถูกต้อง')
        }
        this.account
            .onLogin(this.form.value)
            .then((res) => {
                // เก็บ AccessToken
                this.authen.setAuthenticated(res.accessToken)
                this.alert.success('ยินดีต้อนรับเข้าสู่ระบบ')
                this.router.navigateByUrl(this.returnURL)
            })
            .catch((err) => {
                this.alert.notify(err.message)
            })
    }

    onChangePassword() {
        var Time = 9000;
        this.alert.showChangePassword(Time)
        setTimeout(()=> {
            if(this.alert.email){
                this.member.onChangePassword({email : this.alert.email})
                .then(result=>{
                    this.alert.notify(result.message,"ลืมรหัสผ่าน","success");
                })
                .catch(err=>{
                    console.log(err)
                    this.alert.notify(err.Message);
                })
            }
        }, Time)
    }
}
