import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ResourceService, IChapter } from 'src/app/authentication/services/resource.service';
import { AppURL } from 'src/app/app.url';
import { AuthURL } from 'src/app/authentication/authentication.url';
import { AlertService } from 'src/app/share/services/alert.service';
import { QuizService } from 'src/app/authentication/services/quiz.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
  providers: [ResourceService, QuizService]
})
export class ContentComponent implements OnInit {

  constructor(
    private activateRouter : ActivatedRoute,
    private resource: ResourceService,
    private router : Router,
    private alert : AlertService,
    private quiz: QuizService
    ) {
    this.activateRouter.queryParams.forEach(params => {
      this.chapter_id = params.item;
    })

    this.resource.onShowOneChapter(this.chapter_id).then(async result=>{
      this.item = await result.item[0];

      if(!this.item){
        this.router.navigate(['/', AppURL.Authen, AuthURL.Resource]);
        this.alert.something_wrong("เกิดข้อผิดพลาก");
      }
    })    
   }


   chapter_id:string;
   item:any;
   data:IChapter;
   isCollapsed = false;

   quiz_item:any;


  ngOnInit(): void {
  }

  startQuiz(id:string){
    if(this.isCollapsed==false){
      this.isCollapsed=true;
    }

    this.quiz.getAllQuiz(id).then(result=>{
      this.quiz_item=result;
    })
  }

  onSubmit(){
    
  }

}
