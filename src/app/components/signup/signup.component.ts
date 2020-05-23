import { Router } from '@angular/router'
import { AppURL } from 'src/app/app.url'
import { HttpClient } from '@angular/common/http'
import { HttpService } from 'src/app/services/http.service'
import { Component, OnInit, Injectable } from '@angular/core'
import { AuthenService } from 'src/app/services/authen.service'
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { AlertService } from 'src/app/share/services/alert.service'
import { IMember } from 'src/app/authentication/services/member.service'
import { ValidatorsService } from 'src/app/share/services/validator.service'

import {
    AccountService,
    IRegister,
} from 'src/app/share/services/account.service'

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css'],
})
@Injectable()
export class SignupComponent implements OnInit {
    constructor(
        private builder: FormBuilder,
        private alert: AlertService,
        private account: AccountService,
        private router: Router,
        private validator: ValidatorsService,
    ) {
        this.createFormData()
    }

    ngOnInit(): void {}

    image: String
    form: FormGroup
    member: IMember
    selectedFile: File = null
    year=new Date().getFullYear()+543

    // สร้างฟอร์ม
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
            class: ['', Validators.required],
            image: [''],
        })
    }

    // ปุ่มแก้ไข
    onSubmit() {
        if (this.form.invalid) {
            return this.alert.notify('กรุณากรอกข้อมูลให้ครบถ้วน!')
        }
        var formdata = new FormData()
        var public_id
        if (this.image) {
            console.log('XXXX')
            formdata.append('file', this.selectedFile)
            this.account.onUploadImage(formdata).then((result) => {
                console.log('Upload Completed')
                public_id = result.public_id
                console.log('public_id = ' + public_id)

                var obj: IRegister = this.form.value
                obj.image = public_id

                setTimeout(() => {
                    this.account.onRegister(obj).then((result) => {
                        this.alert.success('สมัครสมาชิกเรียบร้อยแล้ว!')
                        console.log(result)
                        setTimeout(() => {
                            this.router.navigate(['/', AppURL.Login])
                        }, 400)
                    })
                }, 1000)
            })
            return
        }

        this.account.onRegister(this.form.value).then(() => {
            this.alert.success('สมัครสมาชิกเรียบร้อยแล้ว!')
            setTimeout(() => {
                //<<<---    using ()=> syntax
                this.router.navigate(['/', AppURL.Login])
            }, 1500)
        })
    }

    // เลือกไฟล์
    onFileSelected(event) {
        this.selectedFile = event.target.files[0]

        var reader = new FileReader()
        reader.onload = (event: any) => {
            this.image = event.target.result
        }
        reader.readAsDataURL(event.target.files[0])
    }
}
