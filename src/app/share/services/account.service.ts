import { Injectable } from '@angular/core'
import { AlertService } from './alert.service'
import { HttpService } from 'src/app/services/http.service'
import { AuthenService } from 'src/app/services/authen.service'

@Injectable({
    providedIn: 'root',
})
export class AccountService {
    constructor(
        private http: HttpService,
        private alert: AlertService,
        private authen: AuthenService
    ) {}

    public UserLogin: IAccount = {} as any
    // Set ข้อมูล User และ Return UserLogin
    public setUserLogin(UserLogin: IAccount) {
        this.UserLogin._id = UserLogin._id
        this.UserLogin.email = UserLogin.email
        this.UserLogin.phone = UserLogin.phone
        this.UserLogin.firstname = UserLogin.firstname
        this.UserLogin.lastname = UserLogin.lastname
        this.UserLogin.username = UserLogin.username
        this.UserLogin.password = UserLogin.password
        if (UserLogin.image) {
            this.UserLogin.image = UserLogin.image
        }
        this.UserLogin.sid = UserLogin.sid
        this.UserLogin.role = UserLogin.role
        this.UserLogin.exp = UserLogin.exp
        this.UserLogin.class = UserLogin.class
        this.UserLogin.guild = UserLogin.guild
        // console.log(this.UserLogin);
        return this.UserLogin
    }

    // เซตค่า UserLogin
    getUserLogin(accessToken: string) {
        return (this.http
            .requestGet('user/data', accessToken)
            .toPromise() as Promise<IAccount>).then((result) =>
            this.setUserLogin(result)
        )
    }

    // ข้อมูล User จาก _id
    getUserByID(_id: String, accessToken: string) {
        return this.http
            .requestGet(`user/userid/${_id}`, accessToken)
            .toPromise() as Promise<any>
    }

    // ล๊อกอิน
    onLogin(model: ILogin) {
        return this.http
            .requestPost('user/login', model)
            .toPromise() as Promise<{ accessToken: string }>
    }

    // ล๊อกเอาท์
    onLogout() {
        this.alert.notify('ขอบคุณที่ใช้งาน')
    }

    // สมัครสมาชิก
    onRegister(model: IRegister) {
        console.log(model)
        return this.http
            .requestPost('user/signup', model)
            .toPromise() as Promise<IRegister>
    }

    // อัพโหลดรูปภาพ
    onUploadImage(model: any) {
        return this.http
            .requestPost('user/uploadImage', model)
            .toPromise() as Promise<any>
    }

    // เปลี่ยนรหัสผ่าน
    onChangePassword(accessToken: string, model: IChangePassword) {
        return this.http
            .requestPatch('user/change_password', accessToken, model)
            .toPromise() as Promise<IAccount>
    }
}

export interface IAccount {
    _id: string
    firstname: string
    lastname: string
    username: string
    password: string
    email: string
    phone: string

    class?:string
    image?: string
    sid?: string

    exp?: number
    guild?:string
    role?: string
}

export interface IRegister {
    _id: string
    firstname: string
    lastname: string
    username: string
    password: string
    email: string
    phone: string
    image?: string
    class?:string
}

export interface ILogin {
    username: string
    password: string
}

export interface IChangePassword {
    old_pass: string
    new_pass: string
}
