import { Injectable } from '@angular/core'
import { HttpService } from 'src/app/services/http.service'
import { AuthenService } from 'src/app/services/authen.service'
import { HttpClient } from '@angular/common/http'
import { isNull } from 'util'

@Injectable()
export class MemberService {
    constructor(
        private http: HttpService,
        private https: HttpClient,
        private authen: AuthenService,
    ) {}

    // service แก้ไขสมาชิก
    updateMember(uid: any, model: IMember) {
        return this.http
            .requestPatch(`user/${uid}`, this.authen.getAuthenticated(), model)
            .toPromise() as Promise<IResponse>
    }

    updateRole(uid:String,role:any){
        return this.http
            .requestPatch(`user/${uid}`, this.authen.getAuthenticated(), role)
            .toPromise() as Promise<IResponse>
    }

    // โหลดสมาชิก
    loadMember(option: OptionSearch, role: string='', classroom:string='') {
        if(isNull(option.valueData)==true){
            option.valueData="";
        }
        // var url = `user/search?sp=${option.sp}&lp=${option.lp}&search=${option.valueData}&role=${role}`;
        // if(classroom){
        //     url += `&classroom=${classroom}`
        // }

        var url = "member/_get.php?sp=0&lp=5";
        if(option.valueData || role){
            var dumb;
            if(role=='student'){
                dumb = 2;
            }else{
                dumb = 1;
            }
            url += "&search=" + option.valueData + "&role=" + dumb + "&classroom=" + classroom;
        }
        return this.http.requestGet(url,this.authen.getAuthenticated()).toPromise() as Promise<any>
    }

    // เพิ่มการเข้าเรียน
    addAttendence(model: any) {
        return this.http
            .requestPost('attendence', model)
            .toPromise() as Promise<IAttendence>
    }

    // get ครั้งที่มาเรียนของนักเรียน
    getTimeAttended(userId: string) {
        return this.http
            .requestGet(`attendence/${userId}`, this.authen.getAuthenticated())
            .toPromise() as Promise<any>
    }

    // เปิดให้นักศึกษาเซ็นชื่อเข้าเรียน
    patchAttendence(_id: string, model: any) {
        return this.http
            .requestPatch(
                `attendence/switch/${_id}`,
                this.authen.getAuthenticated(),
                model
            )
            .toPromise() as Promise<any>
    }

    patchAttendenceSick(_id: string, model: any) {
        return this.http
            .requestPatch(
                `attendence/sick/${_id}`,
                this.authen.getAuthenticated(),
                model
            )
            .toPromise() as Promise<any>
    }

    // นักศึกษาลงชื่อเข้าเรียน
    checkInAttendence(_id: string, model: any) {
        return this.http
            .requestPatch(
                `attendence/${_id}`,
                this.authen.getAuthenticated(),
                model
            )
            .toPromise() as Promise<any>
    }

    // get ครั้งที่ วันที่เรียนของห้องห้องนั้น
    loadAttendence(ref?: string) {
        return this.http
            .requestGet(`attendence?ref=${ref}`, this.authen.getAuthenticated())
            .toPromise() as Promise<IAttendence>
    }

    // ลบครั้งที่เรียนนั้น ๆ
    deleteAttendence(_id?: string) {
        return this.http
            .requestDelete(`attendence/${_id}`, this.authen.getAuthenticated())
            .toPromise() as Promise<IResponse>
    }

    // เพิ่มชั้นเรียน
    addClassroom(model: any) {
        return this.http.requestPost('classroom', model).toPromise() as Promise<
            IClassroom
        >
    }

    //คืนค่าห้องเรียน
    returnClassroom(model: any) {
        return this.http
            .requestGet(`classroom/${model}`, this.authen.getAuthenticated())
            .toPromise() as Promise<IClassroom>
    }

    // ลบชั้นเรียน
    deleteClassroom(id: any) {
        return this.http
            .requestDelete(`classroom/${id}`, this.authen.getAuthenticated())
            .toPromise() as Promise<IClassroom>
    }

    // โหลดห้องเรียนทั้งหมด
    loadClassroom(option?: OptionSearch) {
        // return this.fireservice.collection('Classroom', ref => ref.where('name','!=','-')).snapshotChanges();
        if (!option)
            return this.http
                .requestGet(
                    `classroom/_get.php?sp=0&lp=10`,
                    this.authen.getAuthenticated()
                )
                .toPromise() as Promise<IClassroom>
        return this.http
            .requestGet(
                `classroom/_get.php?sp=${option.sp}&lp=${option.lp}`,
                this.authen.getAuthenticated()
            )
            .toPromise() as Promise<IClassroom>
    }

    // guild
    loadUserbyGuild(_id?: string) {
        return this.http
            .requestGet(`guild/${_id}`, this.authen.getAuthenticated())
            .toPromise() as Promise<IMember>
    }

    // โหลดสมาชิกในห้องเรียนทั้งหมด
    loadMemberFromClassroom(model: any) {
        return this.http
            .requestGet(
                `classroom/student/${model}`,
                this.authen.getAuthenticated()
            )
            .toPromise() as Promise<IMember>
    }

    getUserByID(id: String) {
        return this.http
            .requestGet(`user/userid/${id}`, this.authen.getAuthenticated())
            .toPromise() as Promise<IMember>
    }

    onChangePassword(model: any) {
        return this.http
            .requestPost('user/changePassword', model)
            .toPromise() as Promise<IResponse>
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

export interface IClassroom {
    total_items?: number
    items?: any
    message?: string

    _id: String
    name: String
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

    _id?: string
    firstname?: string
    lastname?: string
    username?: string
    password?: string
    c_password?: string
    phone?: string
    email?: string
    picture?: string
    exp?: number
    guild?: string
    activity?: Date
    class?: string
    score?: number
}

export interface IAttendence {
    total_items?: number
    items?: any

    id: string
    ref: string
    date: Date
    created: Date
    status: number
}
