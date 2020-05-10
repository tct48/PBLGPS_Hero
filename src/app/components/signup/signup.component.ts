import { Component, OnInit, Injectable } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { inject } from '@angular/core/testing';

import Swal from 'sweetalert2/dist/sweetalert2.js';
import { AlertService } from 'src/app/share/services/alert.service';

import { AccountService, IRegister } from 'src/app/share/services/account.service';
import { AuthenService } from 'src/app/services/authen.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { AuthURL } from 'src/app/authentication/authentication.url';
import { AppURL } from 'src/app/app.url';
import { IMember } from 'src/app/authentication/services/member.service';
import { ValidatorsService } from 'src/app/share/services/validator.service';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
@Injectable()
export class SignupComponent implements OnInit {
  form: FormGroup;
  member: IMember;
  image: String;

  selectedFile: File = null;
  // c_password:string;

  constructor(
    private builder: FormBuilder,
    private alert: AlertService,
    private account: AccountService,
    private router: Router,
    private validator: ValidatorsService,
    private http: HttpClient,
    private https: HttpService,
    private authen: AuthenService
  ) {
    this.createFormData();
  }

  ngOnInit(): void {}

  createFormData() {
    this.form = this.builder.group({
      sid: ['', Validators.required],
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', [Validators.required, this.validator.isPassword]],
      // c_password: ['',[Validators.required, this.validator.comparePassword('password')]],
      phone: ['', Validators.required],
      email: ['', Validators.required],
      image: [''],
    });
  }

  onSubmit() {
    if (this.form.invalid) {
      return this.alert.notify('กรุณากรอกข้อมูลให้ครบถ้วน!');
    }
    var formdata = new FormData();
    var public_id;
    if (this.image) {
      console.log("XXXX");
      formdata.append('file', this.selectedFile);
      this.account.onUploadImage(formdata).then(result=>{
        console.log("Upload Completed");
        public_id = result.public_id;
        console.log("public_id = " + public_id);
        
        var obj:IRegister = this.form.value;
        obj.image = public_id;

        setTimeout(()=>{
          this.account.onRegister(obj).then(result => {
            this.alert.success('สมัครสมาชิกเรียบร้อยแล้ว!');
            console.log(result);
            setTimeout(() => {
              this.router.navigate(['/', AppURL.Login]);
            }, 400);
          });
        },1000)
      })
      return;
    }

    this.account.onRegister(this.form.value).then(() => {
      this.alert.success('สมัครสมาชิกเรียบร้อยแล้ว!');
      setTimeout(() => {
        //<<<---    using ()=> syntax
        this.router.navigate(['/', AppURL.Login]);
      }, 1500);
    });
  }

  onUpload() {
    console.log(this.form.value);
  }

  onFileSelected(event) {
    this.selectedFile = event.target.files[0];

    var reader = new FileReader();
    reader.onload = (event: any) => {
      this.image = event.target.result;
    };
    reader.readAsDataURL(event.target.files[0]);
  }
}
