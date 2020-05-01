import { Component, OnInit, Injectable } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { inject } from '@angular/core/testing';

import Swal from 'sweetalert2/dist/sweetalert2.js'
import { AlertService } from 'src/app/share/services/alert.service';
import { MemberService, IMember } from 'src/app/share/services/member.service';

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
    private member_service:MemberService
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
      picture: ['', Validators.required]
  });
  }

  onSubmit(){
    if(this.form.invalid){
      return this.alert.notify("กรุณากรอกข้อมูลให้ครบถ้วน!");
    }
    if(this.password != this.c_password){
      return this.alert.notify("รหัสผ่าน และยืนยันรหัสผ่านไม่ตรงกัน!","คำเตือน!","warning")
    }

    this.member = this.form.value;

    this.member_service.signUp(this.member)

    console.log(this.member_service.showMember);
    return this.alert.success("สมัครสมาชิกเรียบร้อยแล้ว");
  }
}
