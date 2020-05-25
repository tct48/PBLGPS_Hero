import { Component, OnInit } from '@angular/core';
import { MemberService, IMember, IClassroom, OptionSearch, IAttendence } from 'src/app/authentication/services/member.service';
import { AlertService } from 'src/app/share/services/alert.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AppURL } from 'src/app/app.url';
import { AuthURL } from 'src/app/authentication/authentication.url';
import { defineLocale } from 'ngx-bootstrap/chronos';
import { deLocale } from 'ngx-bootstrap/locale';

import { BsLocaleService } from 'ngx-bootstrap/datepicker';

 
@Component({
  selector: 'app-classroom',
  templateUrl: './classroom.component.html',
  styleUrls: ['./classroom.component.css'],
  providers:[MemberService]
})
export class ClassroomComponent implements OnInit {

  constructor(
    private member: MemberService,
    private alert: AlertService,
  ) { 
    this.loadDataClassroom();
  }
  
  option: OptionSearch = {
    sp: 0,
    lp: 5,
    keySearch: null,
    valueData: null,
}

  Classroom_item:IClassroom;
  total_classroom:number;
  classroom_name:String;

  classroom_id:String;
  dateAdd=null;

  title:String;
  total_items:number;
  items:IMember;

  attendence_id:any;
  attendence_item:IAttendence;
  room:String="5eca83a411df253bb42f2eee";

  ngOnInit(): void {
  }

  onSubmit(){
    console.log("Working")
    this.member.addClassroom({ name :this.classroom_name}).then(result=>{
      this.alert.success(result.message);
      this.loadDataClassroom();
    })
    .catch(err=>{
      console.log(err)
      if(err.Message=="ValidationError")
      this.alert.notify("กรุณากรอกข้อมูลให้ครบถ้วน!");
    })
  }

  onLoadStudent(model:any){
    if(this.classroom_id==model._id){
      return;
    }
    this.classroom_id=model._id;
    this.title = model.name;
    // โหลดเข้าเรียนด้วย
    this.attendence_id = model._id
    this.loadAttendence(model._id);
    this.member.loadMemberFromClassroom(model._id).then(result=>{
      this.items = result.items
      this.total_items = result.total_items
    })
  }

  loadDataClassroom(){
    this.member.loadClassroom(this.option).then(result=>{
      this.Classroom_item = result.items;
      this.total_classroom = result.total_items;
    })
    this.classroom_name=null;
  }

  loadAttendence(_id:string){
    this.member.loadAttendence(_id).then(result=>{
      this.attendence_item=result.items
      console.log(this.attendence_item)
    })
  }

  addAttendence(){
    if(!this.dateAdd){
      return this.alert.notify("กรุณาระบุวันที่เช็คชื่อ")
    }
    var obj={
      date: this.dateAdd,
      ref: this.classroom_id,
      status: 1
    }
    this.member.addAttendence(obj).then(result=>{
      this.loadAttendence(this.attendence_id);
      this.dateAdd=null;
    })
  }

  deleteAttendence(_id:string){
    this.member.deleteAttendence(_id).then(result=>{
      this.alert.success("ลบข้อมูลเรียบร้อยแล้ว !");
      this.loadAttendence(this.attendence_id)
    })
  }

  statusAttendence(model:any){
    var status=!model.status;
    if(model.status==1){
      this.member.patchAttendence(model._id,{status:status}).then(result=>{
      })
      
      this.alert.success("ไม่อนุญาติให้นักศึกษาเข้าห้องเรียน","แจ้งเตือน","success")
      return this.loadAttendence(this.attendence_id);
    }
    this.member.patchAttendence(model._id,{status:status}).then(result=>{
      this.alert.success("อนุญาติให้นักศึกษาเข้าห้องเรียน")
    })
    return this.loadAttendence(this.attendence_id);
  }

  getAttended(model:string, attend:any){
      var data:Array<String> = attend;
      var result = data.includes(model)
      return result;
  }

  onDelete(model:string){
    if(!this.total_items){
      return this.alert.notify("กรุณาลบนักศึกษาในชั้นเรียนก่อน", "ไม่สามารถลบชั้นเรียนได้", "error")
    }
    if(this.total_items>0){
      return this.alert.notify("กรุณาลบนักศึกษาในชั้นเรียนก่อน", "ไม่สามารถลบชั้นเรียนได้", "error")
    }
    this.member.deleteClassroom(model).then(result=>{
      this.alert.success(result.message);
      this.loadDataClassroom();
    })
  }

}
