import { AppURL } from 'src/app/app.url';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthenService } from 'src/app/services/authen.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertService } from 'src/app/share/services/alert.service';
import { AccountService, IAccount } from 'src/app/share/services/account.service';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit {
  constructor(
    private authen: AuthenService,
    private account: AccountService,
    private alert: AlertService,
    private router: Router,
    private builder: FormBuilder
  ) {
    if (!this.UserLogin)
      this.initialLoadUserLogin();

    this.inititalCreateFormData();
    this.initialLoadUpdateFormData();
  }

  UserLogin: IAccount;
  form: FormGroup;
  exp: number;
  level: number;
  html = `<span class="btn-block btn-danger well-sm">Never trust not sanitized HTML!!!</span>`;


  ngOnInit(): void {
  }

  onSubmit() {
    this.alert.success("แก้ไขข้อมูลสำเร็จ!");
  }

  // โหลด UserLogin
  public initialLoadUserLogin() {
    var data = this.authen.getAuthenticated();
    if (!data) {
      return;
    }
    this.account.getUserLogin(this.authen.getAuthenticated())
      .then(userLogin => {
        this.UserLogin = userLogin;
        if (!userLogin.exp) {
          this.exp = 3500;
        }
        this.level = this.exp / 100
        if (this.level == 0) {
          this.level = 1;
        }
      })
      .catch(err => {
        this.alert.notify(err.message);
        this.authen.clearAuthenticated();
        this.router.navigate(['/', AppURL.Login]);
      })
  }

  // โหลด ฟอร์ม
  private inititalCreateFormData() {
    this.form = this.builder.group({
      sid: ['', Validators.required],
      firstname: [''],
      phone: ['', Validators.required],
      email: ['', Validators.required]
    })
  }

  private initialLoadUpdateFormData() {
    // var fullname = this.UserLogin.firstname + " " + this.UserLogin.lastname;
    this.account.getUserLogin(this.authen.getAuthenticated())
      .then(result => {
        var fullname = result.firstname + " " + result.lastname;
        this.form.controls['email'].setValue(result.email);
        this.form.controls['phone'].setValue(result.phone);
        this.form.controls['firstname'].setValue(fullname);
        this.form.controls['sid'].setValue(result.sid);
      })
  }
}
