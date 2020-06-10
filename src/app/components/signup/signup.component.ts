import { Router } from '@angular/router'
import { AppURL } from 'src/app/app.url'
import { HttpClient } from '@angular/common/http'
import { HttpService } from 'src/app/services/http.service'
import { Component, OnInit, Injectable } from '@angular/core'
import { AuthenService } from 'src/app/services/authen.service'
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { AlertService } from 'src/app/share/services/alert.service'
import {
    IMember,
    MemberService,
    IResponse,
} from 'src/app/authentication/services/member.service'
import { ValidatorsService } from 'src/app/share/services/validator.service'

import { TypeaheadMatch } from 'ngx-bootstrap/typeahead/typeahead-match.class'

import {
    AccountService,
    IRegister,
    IAccount,
} from 'src/app/share/services/account.service'

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css'],
    providers: [MemberService],
})
@Injectable()
export class SignupComponent implements OnInit {
    
    constructor(
        private builder: FormBuilder,
        private alert: AlertService,
        private account: AccountService,
        private router: Router,
        private validator: ValidatorsService,
        private member_service: MemberService
    ) {
        this.createFormData()
        this.member_service.loadClassroom().then((result) => {
            this.states = result.items
        })
    }

    ngOnInit(): void {}

    image: String
    form: FormGroup
    member: IMember
    selectedFile: File = null
    year = new Date().getFullYear() + 543

    selectedValue: string
    selectedOption: any
    states: any[]

    radioModel:string="student";

    onSelect(event: TypeaheadMatch): void {
        this.selectedOption = event.item
    }

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
            role:['']
        })
    }

    // ปุ่มแก้ไข
    onSubmit() {
        this.form.controls['role'].setValue(this.radioModel);
        
        if (this.form.invalid) {
            return this.alert.notify('กรุณากรอกข้อมูลให้ครบถ้วน!')
        }
        var formdata = new FormData()
        var public_id
        if (this.image) {
            formdata.append('file', this.selectedFile)
            this.account.onUploadImage(formdata).then((result) => {
                public_id = result.public_id

                var obj = this.form.value
                obj.image = public_id
                obj.class = this.selectedOption._id
                setTimeout(() => {
                    this.account.onRegister(obj).then((result) => {
                        this.alert.success('สมัครสมาชิกเรียบร้อยแล้ว!')
                        setTimeout(() => {
                            this.router.navigate(['/', AppURL.Login])
                        }, 400)
                    })
                }, 1000)
            })
            return
        }

        var obj = this.form.value
        obj.class = this.selectedOption._id

        this.account.onRegister(obj).then(() => {
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
