import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';

import Swal from 'sweetalert2/dist/sweetalert2.js'

import 'sweetalert2/src/sweetalert2.scss'

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  form:FormGroup;
  password;
  c_password;
 
  constructor(private builder: FormBuilder) { 
    this.createFormData();
  }

  ngOnInit(): void {
  }

  createFormData(){
    this.form = this.builder.group({
      username: ['',Validators.required],
      password: ['', Validators.required],
  });
  }

  onSubmit(){
    if(this.form.invalid){
      return Swal.fire({
        title: 'Error!',
        text: 'กรุณากรอกข้อมูลให้ถูกต้อง',
        icon: 'error',
        confirmButtonText: 'ยืนยัน'
      })
    }

    return Swal.fire({
      title: 'Success!',
      text: 'ยินดีต้อนรับเข้าสู่ระบบ',
      icon: 'success',
      showConfirmButton:false,
      timer:1500
    })
    

    
    
  }
}
