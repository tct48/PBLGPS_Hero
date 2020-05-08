import { Component, OnInit, Injectable } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { inject } from '@angular/core/testing';

import Swal from 'sweetalert2/dist/sweetalert2.js'
import { AlertService } from 'src/app/share/services/alert.service';

import { AccountService } from 'src/app/share/services/account.service';
import { AuthenService } from 'src/app/services/authen.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { AuthURL } from 'src/app/authentication/authentication.url';
import { AppURL } from 'src/app/app.url';
import { IMember } from 'src/app/authentication/services/member.service';
import { ValidatorsService } from 'src/app/share/services/validator.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

@Injectable()
export class SignupComponent implements OnInit {
  form:FormGroup
  member:IMember;
  // c_password:string;

  constructor(
    private builder: FormBuilder,
    private alert: AlertService,
    private account:AccountService,
    private router:Router,
    private validator: ValidatorsService
    ) {
    this.createFormData();
  }

  ngOnInit(): void {
  }

  createFormData(){
    this.form = this.builder.group({
      sid: ['',Validators.required],
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', [Validators.required, this.validator.isPassword]],
      // c_password: ['',[Validators.required, this.validator.comparePassword('password')]],
      phone : ['', Validators.required],
      email: ['', Validators.required],
      picture: ['']
  });
  }

  onSubmit(){
    if(this.form.invalid){
      return this.alert.notify("กรุณากรอกข้อมูลให้ครบถ้วน!");
    }

    this.account.onRegister(this.form.value)
    .then(()=>{
        this.alert.success("สมัครสมาชิกเรียบร้อยแล้ว!");
        this.router.navigate(['/',AppURL.Login]);
    })
  }
}
