import { Component, OnInit } from '@angular/core'
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms'
import { AlertService } from 'src/app/share/services/alert.service'
import { Router, ActivatedRoute } from '@angular/router'
import { AppURL } from 'src/app/app.url'
import { AccountService } from 'src/app/share/services/account.service'
import { AuthenService } from 'src/app/services/authen.service'
import { AuthURL } from 'src/app/authentication/authentication.url'
import { MemberService } from 'src/app/authentication/services/member.service'
import { Observable } from 'rxjs'
import Swal from 'sweetalert2/dist/sweetalert2.js'

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

  ngOnInit(): void { }

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
        this.account.getUserLogin(this.authen.getAuthenticated())
        this.router.navigateByUrl(this.returnURL)
      })
      .catch((err) => {
        console.log(err);
        this.alert.notify(err.Message)
      })
  }

  async onChangePassword() {
    var Time = 9000;
    var data;
    Swal.mixin({
      input: 'text',
      confirmButtonText: 'Next &rarr;',
      showCancelButton: true,
      progressSteps: ['1', '2','3'],
      // timer: timer,
      timerProgressBar: true,
    }).queue([
      {
        title : 'เปลี่ยนรหัสผ่าน',
        text : 'กรุรณากรอกยูซเซอร์เนม'
      },
      {
        title: 'เปลี่ยนรหัสผ่าน',
        text: 'กรุณากรอกรหัสผ่านเดิม'
      },
      {
        title : 'เปลี่ยนรหัสผ่าน',
        text: 'กรุณากรอกรหัสผ่านใหม่'
      }
    ]).then((result) => {
      if (result.value) {
        const answers = JSON.stringify(result.value)
        // this.email = answers;
        // this.email = this.email.substring(1,this.email.length-1);
        var username = result.value[0];
        var old_pass = result.value[1];
        var new_pass = result.value[2];

        var obj = {
          username: username,
          old_password: old_pass,
          new_password: new_pass
        }

        this.member.onChangePassword(obj).then(()=>{
          this.alert.success("แก้ไขรหัสผ่านเรียบร้อยแล้ว!")
        }).catch(err=>{
          this.alert.success(err);
        })
        // return answers;
      }
    })

    // var data = this.alert.showChangePassword()



    // console.log(data[0]);
    // console.log(data[1]);
    // console.log(data[2]);
    // setTimeout(()=> {
    //     if(this.alert.email){
    //         this.member.onForgetPassword({email : this.alert.email})
    //         .then(result=>{
    //             this.alert.notify(result.message,"ลืมรหัสผ่าน","success");
    //         })
    //         .catch(err=>{
    //             console.log(err)
    //             this.alert.notify(err.Message);
    //         })
    //     }
    // }, Time)
  }
}
