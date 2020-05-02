import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';
import { AlertService } from 'src/app/share/services/alert.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AppURL } from 'src/app/app.url';
import { AccountService } from 'src/app/share/services/account.service';
import { HttpClient } from '@angular/common/http';
import { HttpService } from 'src/app/services/http.service';
import { MemberService } from 'src/app/share/services/member.service';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
  providers:[]
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
    private account:AccountService,
    private activateRoute: ActivatedRoute
  ) {
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

  onSubmit() {
    if (this.form.invalid) {
      return this.alert.notify("กรุณากรอกข้อมูลให้ถูกต้อง");
    }
    var username = this.form.controls["username"].value;
    console.log(this.account.mockUserItems)
    var length = this.account.mockUserItems.find(data => data.username === username);

    if(length){
      this.alert.success("ยินดีต้อนรับเข้าสู่ระบบ");
      this.account.UserLogin = length;
      return this.router.navigateByUrl('/auth');
    }else{
      return this.alert.something_wrong("Username หรือ Password ไม่ถูกต้อง");
    }


    // this.router.navigateByUrl('/auth');
  }
}
