import { Component, OnInit, Injectable } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { inject } from '@angular/core/testing';

import Swal from 'sweetalert2/dist/sweetalert2.js'

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

  constructor(private builder: FormBuilder) { 
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
      return Swal.fire({
        title: 'Error!',
        text: 'กรุณากรอกข้อมูลให้ครบถ้วน!',
        icon: 'error',
        confirmButtonText: 'ยืนยัน'
      })
    }
    if(this.password != this.c_password){
      return Swal.fire({
        title: 'คำเตือน!',
        text: 'รหัสผ่าน และยืนยันรหัสผ่านไม่ตรงกัน!',
        icon: 'warning',
        confirmButtonText: 'ยืนยัน'
      })
    }
    
    this.member = this.form.value;
    console.log(this.member);
    return Swal.fire({
      title: 'Success!',
      text: 'สมัครสมาชิกเรียบร้อยแล้ว!',
      icon: 'success',
      confirmButtonText: 'ยืนยัน'
    })
  }
}
