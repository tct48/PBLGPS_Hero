import { Component, OnInit, Sanitizer } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ResourceService, IChapter } from 'src/app/authentication/services/resource.service';
import { AppURL } from 'src/app/app.url';
import { AuthURL } from 'src/app/authentication/authentication.url';
import { AlertService } from 'src/app/share/services/alert.service';
import { QuizService } from 'src/app/authentication/services/quiz.service';
import { DomSanitizer } from '@angular/platform-browser';

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
    private quiz: QuizService,
    private sanitizer : DomSanitizer
    ) {
    this.activateRouter.queryParams.forEach(params => {
      this.chapter_id = params.item;
    })

    this.resource.onShowOneChapter(this.chapter_id).then(async result=>{
      this.item = await result.item[0];
      console.log(this.item)

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

   url_youtube:any;
   url_pdf:any;
   switch_display:String = "PDF";

  ngOnInit(): void {
  }

  showPDF(url:any){
    if(url.substring(url.length-5)=='/view'){
      url = url.substring(0,url.length-4) + "preview";
    }

    this.url_pdf = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    this.switch_display="PDF";
  }

  showYoutube(url:String){
    url = url.substring(32);
    this.url_youtube = this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube-nocookie.com/embed/" + url);
    this.switch_display="youtube";
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
