import { Injectable } from '@angular/core'
import { HttpService } from 'src/app/services/http.service'
import { AuthenService } from 'src/app/services/authen.service'

@Injectable()
export class MemberService {
    constructor(private http: HttpService, private authen: AuthenService) {}

    // service แก้ไขสมาชิก
    updateMember(uid: any, model: IMember) {
        return this.http
            .requestPatch(`user/${uid}`, this.authen.getAuthenticated(), model)
            .toPromise() as Promise<IResponse>
    }

    // โหลดสมาชิก
    loadMember(option: OptionSearch) {
        if (option.valueData) {
            return this.http
                .requestGet(
                    `user/search?sp=${option.sp}&lp=${option.lp}&search=${option.valueData}`,
                    this.authen.getAuthenticated()
                )
                .toPromise() as Promise<IMember>
        }
        return this.http
            .requestGet(
                `user?sp=${option.sp}&lp=${option.lp}`,
                this.authen.getAuthenticated()
            )
            .toPromise() as Promise<IMember>
    }

    // เพิ่มการเข้าเรียน
    addAttendence(model:any){
        return this.http.requestPost('attendence',model)
        .toPromise() as Promise<IAttendence>
    }

    patchAttendence(_id:string,model:any){
        return this.http.requestPatch(`attendence/switch/${_id}`,this.authen.getAuthenticated(),model)
            .toPromise() as Promise<any>
    }

    // นักศึกษาลงชื่อเข้าใช้
    checkInAttendence(_id:string,model:any){
        return this.http.requestPatch(`attendence/${_id}`, this.authen.getAuthenticated(), model)
            .toPromise() as Promise<any>
    }

    loadAttendence(ref?:string){
        return this.http.requestGet(`attendence?ref=${ref}`,this.authen.getAuthenticated())
        .toPromise() as Promise<IAttendence>
    }
    
    deleteAttendence(_id?:string){
        return this.http.requestDelete(`attendence/${_id}`,this.authen.getAuthenticated())
            .toPromise() as Promise<IResponse>
    }

    // เพิ่มชั้นเรียน
    addClassroom(model:any){
        return this.http.requestPost('classroom',model)
        .toPromise() as Promise<IClassroom>
    }

    //คืนค่าห้องเรียน
    returnClassroom(model:any){
        return this.http.requestGet(`classroom/${model}`, this.authen.getAuthenticated())
        .toPromise() as Promise<IClassroom>
    }

    // ลบชั้นเรียน
    deleteClassroom(id:any){
        return this.http.requestDelete(`classroom/${id}`,this.authen.getAuthenticated())
        .toPromise() as Promise<IClassroom>
    }

    // โหลดห้องเรียนทั้งหมด
    loadClassroom(option?: OptionSearch){
        if(!option)
        return this.http.requestGet(`classroom?sp=0&lp=10`,this.authen.getAuthenticated())
        .toPromise() as Promise<IClassroom>
        return this.http.requestGet(`classroom?sp=${option.sp}&lp=${option.lp}`,this.authen.getAuthenticated())
        .toPromise() as Promise<IClassroom>
    }

    // โหลดสมาชิกในห้องเรียนทั้งหมด
    loadMemberFromClassroom(model:any){
        return this.http.requestGet(`classroom/student/${model}`,this.authen.getAuthenticated())
        .toPromise() as Promise<IMember>
    }

    onChangePassword(model:any){
        return this.http.requestPost('user/changePassword', model)
            .toPromise() as Promise<IResponse>;
    }

    deleteMember(_id) {
        return this.http
            .requestDelete(`user/${_id}`, this.authen.getAuthenticated())
            .toPromise() as Promise<IMember>
    }
}

export interface IResponse {
    message: string
}

export interface IClassroom{3
    total_items?:number
    items?:any
    message?:string

    _id:String;
    name:String;
}

export interface OptionSearch {
    sp: Number
    lp: Number
    keySearch?: string
    valueData?: string
}

export interface IMember {
    total_items?: any
    items?: any

    _id: string
    firstname?: string
    lastname?: string
    username?: string
    password?: string
    c_password?: string
    phone?: string
    email?: string
    picture?: string
    exp?: number
    activity?: Date
    class?:string
}

export interface IAttendence{
    total_items?:number;
    items?: any;

    id:string;
    ref:string;
    date:Date;
    created:Date;
    status:number;
}