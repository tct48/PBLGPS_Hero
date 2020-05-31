import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MemberService, IMember } from 'src/app/authentication/services/member.service';
import { GradeService } from 'src/app/authentication/services/grade.service';

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
    private grade: GradeService
  ) { 
    this.activateRoute.queryParams.forEach((params) => {
      this.classroom = params._id
    })

    this.member.loadMemberFromClassroom(this.classroom).then(result=>{
      this.items = result.items
      console.log(this.items)
      var round;
      for (var i =0 ;i<result.total_items;i++){
        this.getPreTest(result.items[i]._id)
      }
      console.log(this.score)
    })
  }

  classroom:String;
  group:[];
  items:IMember[];
  score=[];

  itemObjectsTop:any[];
  itemObjectsMiddle:any[];
  itemObjectsBottom:any[];

  ngOnInit(): void {
  }

  getPreTest(_id){
    var res;
    console.log(_id)
    this.grade.getScoreExerciseById(_id,'PRE-TEST').then(result=>{
      try{
          this.score.push(result.item.score)
      }catch{
        this.score.push("ยังไม่ได้ทำแบบทดสอบ Pre-Test!");
      }
    });
  }
}
