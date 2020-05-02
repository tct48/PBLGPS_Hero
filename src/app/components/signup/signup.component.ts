import { Component, OnInit, Injectable } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { inject } from '@angular/core/testing';

import Swal from 'sweetalert2/dist/sweetalert2.js'
import { AlertService } from 'src/app/share/services/alert.service';
import { MemberService, IMember } from 'src/app/share/services/member.service';
import { AccountService } from 'src/app/share/services/account.service';
import { AuthenService } from 'src/app/services/authen.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { AuthURL } from 'src/app/authentication/authentication.url';
import { AppURL } from 'src/app/app.url';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

@Injectable()
export class SignupComponent implements OnInit {
  form:FormGroup
  password:string;
  c_password:string;

  member:IMember;

  constructor(
    private builder: FormBuilder,
    private alert: AlertService,
    private account:AccountService,
    private router:Router
    ) {
    this.createFormData();
  }

  ngOnInit(): void {
  }

  createFormData(){
    this.form = this.builder.group({
      _id: ['',Validators.required],
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
      c_password: ['', Validators.required],
      phone : ['', Validators.required],
      email: ['', Validators.required],
      picture: ['']
  });
  }

  onSubmit(){
    if(this.form.invalid){
      return this.alert.notify("กรุณากรอกข้อมูลให้ครบถ้วน!");
    }
    if(this.password != this.c_password){
      return this.alert.notify("รหัสผ่าน และยืนยันรหัสผ่านไม่ตรงกัน!","คำเตือน!","warning")
    }

    if(!this.form.controls['picture'].value){
      console.log("รูปก็ไม่แนบหน้าหี")
    }

    this.account.onRegister(this.form.value)
    .then(()=>{
        this.alert.success("สมัครสมาชิกเรียบร้อยแล้ว!");
        this.router.navigate(['/',AppURL.Login]);
    })
  }
}
