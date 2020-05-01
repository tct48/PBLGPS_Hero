import { Component, OnInit, Injectable } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { inject } from '@angular/core/testing';

import Swal from 'sweetalert2/dist/sweetalert2.js'
import { AlertService } from 'src/app/share/services/alert.service';

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

  member:any;

  constructor(private builder: FormBuilder,
    private alert: AlertService) {
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
    console.log(this.member);
    return this.alert.success("สมัครสมาชิกเรียบร้อยแล้ว");
  }
}
