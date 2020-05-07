import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';
import { AlertService } from 'src/app/share/services/alert.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AppURL } from 'src/app/app.url';
import { AccountService } from 'src/app/share/services/account.service';
import { AuthenService } from 'src/app/services/authen.service';
import { AuthURL } from 'src/app/authentication/authentication.url';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
  providers: []
})
export class SigninComponent implements OnInit {
  form: FormGroup;
  password;
  c_password;
  returnURL;

  constructor(
    private builder: FormBuilder,
    private alert: AlertService,
    private router: Router,
    private authen: AuthenService,
    private account: AccountService,
    private activateRoute: ActivatedRoute,
    private _snackBar: MatSnackBar
  ) {
    //ย้อนกลับไปหน้า LOGIN กรณี Redirect
    this.activateRoute.params.forEach(params => {
      this.returnURL = params.returnURL || `/${AppURL.Authen}/${AuthURL.Home}`;
    })
    this.redirectPage();

    this.alert.announce("อัพเดท &nbsp; <span style='color:orange'> 7 พค 2020, 23:52:51 PM</span>", "1) ดึงข้อมูลแบบฝึกหัด (แหล่งการเรียนรู้) <br>2) เพิ่มแหล่งการเรียนรู้ <br>3) เพิ่ม Admin เพิ่มแหล่งการเรียนรู้ (ยังไม่เปิด)")
  
    this.createFormData();
  }

  ngOnInit(): void {
  }

  createFormData() {
    this.form = this.builder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  AppURL = AppURL;
  AuthURL = AuthURL;

  redirectPage(){
    var data = this.authen.getAuthenticated();
    if(data){
      this.router.navigate(['/', AppURL.Authen, AuthURL.Home]);
    }
  }

  onSubmit() {
    if (this.form.invalid) {
      return this.alert.notify("กรุณากรอกข้อมูลให้ถูกต้อง");
    }
    this.account.onLogin(this.form.value)
      .then(res => {
        // เก็บ AccessToken
        this.authen.setAuthenticated(res.accessToken);
        this.alert.success("ยินดีต้อนรับเข้าสู่ระบบ");
        this.router.navigateByUrl(this.returnURL);
      })
      .catch(err=>{
        this.alert.notify(err.message)
      })
  }
}
