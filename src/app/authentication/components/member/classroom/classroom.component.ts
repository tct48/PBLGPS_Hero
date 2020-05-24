import { Component, OnInit } from '@angular/core';
import { MemberService, IMember, IClassroom, OptionSearch } from 'src/app/authentication/services/member.service';
import { AlertService } from 'src/app/share/services/alert.service';

@Component({
  selector: 'app-classroom',
  templateUrl: './classroom.component.html',
  styleUrls: ['./classroom.component.css'],
  providers:[MemberService]
})
export class ClassroomComponent implements OnInit {

  constructor(
    private member: MemberService,
    private alert: AlertService
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

  items:IMember;
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

  loadDataClassroom(){
    this.member.loadClassroom(this.option).then(result=>{
      this.Classroom_item = result.items;
      this.total_classroom = result.total_items;
    })
    this.classroom_name=null;
  }

  onDelete(model:string){
    this.member.deleteClassroom(model).then(result=>{
      this.alert.success(result.message);
      this.loadDataClassroom();
    })
  }

}
