import { AppURL } from 'src/app/app.url'
import { Router } from '@angular/router'
import 'sweetalert2/src/sweetalert2.scss'
import { Component, OnInit } from '@angular/core'
import Swal from 'sweetalert2/dist/sweetalert2.js'
import { AuthURL } from '../../authentication.url'
import { LevelService } from '../../services/level.service'
import { AlertService } from 'src/app/share/services/alert.service'

import {
    IMember,
    MemberService,
    OptionSearch,
} from '../../services/member.service'

import {
    AccountService,
    IAccount,
} from 'src/app/share/services/account.service'

@Component({
    selector: 'app-member',
    templateUrl: './member.component.html',
    styleUrls: ['./member.component.css'],
    providers: [MemberService, LevelService],
})
export class MemberComponent implements OnInit {
    constructor(
        private router: Router,
        private alert: AlertService,
        private level: LevelService,
        private member: MemberService,
        private account: AccountService,
    ) {
        this.UserLogin = this.account.UserLogin

        this.onLoadMember()
    }

    ngOnInit(): void {}

    option: OptionSearch = {
        sp: 0,
        lp: 5,
        keySearch: null,
        valueData: null,
    }

    role:string='student';

    // ref
    cp: Number;
    mem_id: String;
    items: IMember;
    total_items: Number;
    size_pagination: Number;

    searchText: string;
    UserLogin: IAccount;

    // เรียกดูสมาชิก onInit
    onLoadMember() {
        this.member.loadMember(this.option).then((result) => {
            this.total_items = result.total_items
            this.items = result.items

            this.size_pagination = Math.round(
                Number(this.total_items) / Number(this.option.lp)
            )
            this.cp = Number(this.option.sp) + 1
        })
    }

    switchLogin(_id:string,status:string){
        if(status=="ON"){
            this.member.updateRole(_id,{status:1}).then(result=>{
                this.alert.success("เปลี่ยนสถานะการเข้าใช้งานสำเร็จ!")
            })
        }else{
            this.member.updateRole(_id,{status:0}).then(result=>{
                this.alert.success("เปลี่ยนสถานะการเข้าใช้งานสำเร็จ!")
            }) 
        }

        this.onRoleClick();
    }

    onRoleClick(role?:string){
        this.role=role;    
        this.member.loadMember(this.option,role).then((result)=>{
            this.total_items=result.total_items
            this.items = result.items

            this.size_pagination = Math.round(
                Number(this.total_items)/ Number(this.option.lp)
            )
            this.cp = Number(this.option.sp)+1
        })
    }

    // PageChanged
    pageChanged(event: any): void {
        this.option.sp = event.page - 1
        this.onLoadMember()
    }

    // คำนวณเลเวล
    calLevel(exp) {
        return this.level.calculateLevel(exp)
    }

    // คำนวณ % ที่เหลือ
    calNextLevel(exp) {
        return this.level.calExpLeftToNextLevel(exp)
    }

    // ค้นหา User
    onSearch() {
        if (!this.searchText) {
            this.onLoadMember()
        }
        this.option.sp = 0
        this.option.valueData = this.searchText

        this.member.loadMember(this.option,this.role).then((result) => {
            this.total_items = result.total_items
            this.items = result.items

            this.size_pagination = Math.round(
                Number(this.total_items) / Number(this.option.lp)
            )
            this.cp = Number(this.option.sp) + 1
        })
    }

    // click View User
    openMember(item: any) {
        this.router.navigate(['', AppURL.Authen, AuthURL.Information], {
            queryParams: { item },
        })
    }

    // Click Delete User
    onDeleteClick(_id) {
        Swal.fire({
            title: 'แจ้งเตือน',
            text: 'คุณต้องการจะลบข้อมูลใช่หรือไม่',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'ใช่, ลบเดี๋ยวนี้',
        }).then((result) => {
            if (result.value) {
                this.member
                    .deleteMember(_id)
                    .then(() => {
                        this.alert.success(
                            'ข้อมูลดังกล่าวถูกลบเรียบร้อยแล้ว',
                            'Deleted!'
                        )
                        this.option.valueData = null
                        this.option.sp = 0
                        this.onLoadMember()
                    })
                    .catch((err) => {
                        this.alert.notify(err.message)
                    })
            }
        })
    }
}
