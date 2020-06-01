import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MemberService, IMember } from 'src/app/authentication/services/member.service';
import { GradeService } from 'src/app/authentication/services/grade.service';
import { AlertService } from 'src/app/share/services/alert.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers:[MemberService,GradeService]
})
export class CreateComponent implements OnInit {

  constructor(
    private activateRoute: ActivatedRoute,
    private member:MemberService,
    private grade: GradeService,
    private alert: AlertService,
  ) { 
    this.activateRoute.queryParams.forEach((params) => {
      this.classroom = params._id
    })

    this.loadMember();
  }

  classroom:String;
  items:IMember[];
  display_data:IMember[];

  score=[];

  itemObjectsTop:any[];
  itemObjectsMiddle:any[];
  itemObjectsMiddleTop:any[];
  itemObjectsSoSo:any[];
  itemObjectsBottom:any[];

  ngOnInit(): void {
  }

  getPreTest(_id){
    var res;
    this.grade.getScoreExerciseById(_id,'PRE-TEST').then(result=>{
      try{
          this.score.push(result.item.score)
      }catch{
        this.score.push("ยังไม่ได้ทำแบบทดสอบ Pre-Test!");
      }
    });
  }

  loadMember(){
    this.member.loadMemberFromClassroom(this.classroom).then(result=>{
      this.items = result.items
      this.display_data=this.items
      var round;
      for (var i =0 ;i<result.total_items;i++){
        this.getPreTest(result.items[i]._id)
      }
    })
  }

  cancelGroup(member:IMember){
    member.guild='';
    this.member.updateMember(member._id,member).then(result=>{
      this.alert.success("ยกเลิกกิล์ดผู้เรียนสำเร็จ" ,"สำเร็จ")
      this.loadMember();
    })
  }

  onSubmit(model:String,range_case?:String){
    var data=null;
    if(model=="เด็กเรียนเก่ง"){
      data=this.itemObjectsTop;        
    }else if(model=="ค่อนข้างดี"){
      data = this.itemObjectsMiddleTop
    }else if(model=="ปานกลาง"){
      data = this.itemObjectsMiddle
    }else if(model=="พอใช้"){
      data = this.itemObjectsSoSo
    }else if(model=="เด็กอ่อน"){
      data = this.itemObjectsBottom
    }

    for(var i=0;i<data.length;i++){
      data[i].guild=model;
    }
    
    var fullName='';

    for(var i=0;i<data.length;i++){
      fullName = data[i].firstname + " " + data[i].lastname;
      this.member.updateMember(data[i]._id,data[i]).then(result=>{
        this.alert.success("เพิ่มนักเรียน " + data.length + " คนลงในกลุ่ม " + model + "สำเร็จ", "สำเร็จ");
      })
    }

    if(model=="เด็กเรียนเก่ง"){
      this.itemObjectsTop=[];        
    }else if(model=="ค่อนข้างดี"){
      this.itemObjectsMiddleTop =[];
    }else if(model=="ปานกลาง"){
      this.itemObjectsMiddle=[];
    }else if(model=="พอใช้"){
      this.itemObjectsSoSo=[];
    }else if(model=="เด็กอ่อน"){
      this.itemObjectsBottom=[];
    }

    this.loadMember();
  }
}
