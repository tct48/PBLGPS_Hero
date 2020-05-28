import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from 'src/app/authentication/services/quiz.service';
import { AlertService } from 'src/app/share/services/alert.service';

@Component({
  selector: 'app-exercise-prps',
  templateUrl: './exercise-prps.component.html',
  styleUrls: ['./exercise-prps.component.css'],
  providers: [QuizService]
})
export class ExercisePrpsComponent implements OnInit {

  constructor(
    private activateRouter:ActivatedRoute,
    private quiz:QuizService,
    private alert:AlertService
  ) { 
    this.activateRouter.queryParams.forEach((params) => {
      this._id = params.id
    })  

    this.quiz.getAllPrPsbyRef(this._id).then(result=>{
      this.items = result.items[0]
      console.log("total items: " + result.total_items)
      console.log(this.items)
    })
   }

  your_answer=[];

  ngOnInit(): void {
  }

  choose(score, index: number, j: number) {
    this.your_answer[index] = {
        select: j,
        score: score,
    }

    console.log(this.your_answer)
}

onSelect(index: number, j) {
    // index = ข้อ
    if (this.your_answer[index]) {
        if (this.your_answer[index].select == j) {
            return true
        }
    }

    return false
}

  _id:string;
  items:any;
  section:number=0;
  sub_section:number=0;
  format=["1","2","3","4"]
}
