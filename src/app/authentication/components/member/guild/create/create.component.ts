import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MemberService, IMember } from 'src/app/authentication/services/member.service';
import { GradeService } from 'src/app/authentication/services/grade.service';
import { AlertService } from 'src/app/share/services/alert.service';
import { ViewportScroller } from '@angular/common';

import Swal from 'sweetalert2/dist/sweetalert2.js'

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
    private vps: ViewportScroller
  ) {
    this.activateRoute.queryParams.forEach((params) => {
      this.classroom = params._id
    })
    this.loadMember();
  }

  classroom:String;
  items:IMember[];
  display_data:IMember[];

  per_group:number=3;

  score=[];
  test_score=[];

  itemObjectsTop:any[];
  itemObjectsMiddle:any[];
  itemObjectsMiddleTop:any[];
  itemObjectsSoSo:any[];
  itemObjectsBottom:any[];


  test:string;
  private group:string[][];


  ngOnInit(): void {
  }

  made:any=[];
  number_of_group:any;
  show_group:boolean=false;
  numb:number;
  caption:string;
  onTestGroup(){
    // let data =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];
    this.show_group=false;
    let data = this.items;
    let numb = this.numb;
    this.number_of_group = Array(Math.round(data.length/numb)).fill(5)
    // console.log(data.length/numb)
    this.caption = "แบ่งได้ " + this.number_of_group +" กลุ่ม / กลุ่มละ" + numb + " คน";
    console.log("จากทั้งหมด " + data.length + " คน")
    this.made=[];
    for(var i=0;i<data.length;i++){
      if(i<this.number_of_group.length){
        this.made[i]=[data[i]];
        var dumb = (i+1)+"";
        let _id = this.made[i][this.made[i].length-1]._id;
        this.member.updateMember(_id,{guild:dumb}).then(()=>{
          console.log("สำเร็จ[" + dumb + "]");
        }).catch(()=>{
          console.log("Error[" + dumb + "]");
          console.log(this.made[i])
        })
      }else{
        this.made[i%this.number_of_group.length].push(data[i])
        let _id = this.made[i%this.number_of_group.length][this.made[i%this.number_of_group.length].length-1]._id;
        var dumb = (i%this.number_of_group.length+1)+"";
        this.member.updateMember(_id,{guild:dumb}).then(()=>{
          console.log("สำเร็จ[" + dumb + "]");
        }).catch(()=>{
          console.log("Error[" + dumb + "]");
        })
        if(i==data.length-1){
          this.loadMember()
          this.show_group=true;
          this.vps.scrollToAnchor('group');
        }
      }
    }

    console.log(this.made);
    return;
  }

  getPreTest(_id){
    var res;
    this.grade.getScoreExerciseById(_id,'PRE-TEST').then(result=>{
      try{
          this.score.push(result.item.score)
          this.test_score.push({
            score: result.item.score,
            _id: _id
          })
      }catch{
        this.score.push("ยังไม่ได้ทำแบบทดสอบ Pre-Test!")
        this.test_score.push({
          score: "ยังไม่ได้ทำแบบทดสอบ Pre-Test!",
          _id:_id
        });
      }
    });
  }

  loadMember(){
    this.items=null;
    this.display_data=null;
    this.test_score=null;
    this.score=[];
    this.member.loadMemberFromClassroom(this.classroom).then(result=>{
      this.items = result.items
      this.display_data=this.items
      var round;
      for (var i =0 ;i<result.total_items;i++){
        this.getPreTest(result.items[i]._id)
        this.test_score=this.score;
      }
    })
  }

  cancelGroup(member:IMember){
    member.guild='';

    this.score=[];
    this.test_score=[]

    this.member.updateMember(member._id,member).then(result=>{
      this.alert.success("ยกเลิกกิล์ดผู้เรียนสำเร็จ" ,"สำเร็จ")
      this.loadMember();
    })

    console.log(this.test_score)
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

  onSelectGroup(){
    var number_of_group = Math.floor(this.display_data.length/3);
    var data = [];
    var top = [];
    var middle = [];
    var bottom = [];

    for(var j=0;j<2;j++){
      for(var i=0;i<number_of_group;i++){
        if(j!=0){
          middle.push(this.display_data[j*number_of_group+i])
        }else{
          top.push(this.display_data[i])
        }
      }
    }
    for(var i=number_of_group*2;i<this.display_data.length;i++){
      bottom.push(this.display_data[i]);
    }
    console.log("เด็กเก่ง");
    console.log(top );
    console.log("ปานกลาง");
    console.log(middle);
    console.log("อ่อน");
    console.log(bottom)


    var k = top.length;

    for(var j=0;j<k;j++){ //5 กลุ่ม กลุ่มละ 4 คน
      this.group[j].push(top.pop())
      this.group[j].push(middle.pop())
      this.group[j].push(bottom.pop())
      console.log(this.group);
    }

    console.log(this.group)
    console.log("หมดได้แล้วมั้ง !")
    console.log(top)


    this.alert.show_score("จำนวน = "+number_of_group)
  }

  onTest(){
    var length = this.display_data.length
    var number_of_person;
    var fix=0;

    if(length==4){
      number_of_person=2;
    }else{
      if(length%3==0 || length%3==2){
        number_of_person=3;
      }else{
        number_of_person=4;
      }
      if(length>=25 && length%3==1){
        number_of_person=3;
        fix=1;
      }
    }



    this.test = "นักเรียนทั้งหมด " + length +"<br>"
    this.test+="แบ่งออกเป็น "+ Math.round(length/number_of_person) +" กลุ่มกลุ่มละ " + number_of_person + " คนดังนี้<br>"
    var data=[];
    var old=0;
    var group=1;

    for(var i=0;i<length;i++){
      if(Math.floor(i/number_of_person)==old){
        data.push(this.display_data[i]._id)
      }else{
        old+=1;
        data=[];
        data.push(this.display_data[i]._id)
      }

      if(fix==1 && i==length-1){
        data.push(this.display_data[i]._id)
      }

      if(data.length==number_of_person || i==length-1){
        // for(var j=0;j<data.length;j++){
        //   this.member.updateMember(data[j],{guild:group+""}).then(result=>{
        //     console.log("เพิ่ม User ไปยังกิล์ด " + i);
        //   })
        // }
        group++;
      }
    }

    console.log(data);
    this.score=[];
    this.test_score=[];

    Swal.fire({
      title: 'จัดการแบ่งกิล์ดสำเร็จ!',
      showClass: {
        popup: 'animate__animated animate__bounceIn'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    })
    this.loadMember();
  }
}
