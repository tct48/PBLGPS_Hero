import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/share/services/alert.service';

@Component({
  selector: 'app-exercise-stage',
  templateUrl: './exercise-stage.component.html',
  styleUrls: ['./exercise-stage.component.css']
})
export class ExerciseStageComponent implements OnInit {

  constructor(
    private alert:AlertService
  ) { }

  ngOnInit(): void {
  }

  menu:boolean=false;
  stage:string;

  setStage(status?:number){
    if(status==0){
      this.stage=null;
      this.menu=false;
      return;
    }
    this.stage="1"; 
    this.menu=true; 
  }

  onDisable(){
      this.alert.notify("ยังไม่สามารถใช้งานได้ในขณะนี้","แจ้งเตือน","warning")
  }
}
