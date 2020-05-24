import { Component, OnInit, ViewChild, ElementRef, EventEmitter } from '@angular/core';


import { TypeaheadMatch } from 'ngx-bootstrap/typeahead/typeahead-match.class';
import { AlertService } from 'src/app/share/services/alert.service';
import { QuizService } from '../../services/quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
  providers: [ QuizService ]
})
export class QuizComponent implements OnInit {
  @ViewChild('scrollMe') private myScrollContainer: ElementRef;
  constructor(
    private alert : AlertService,
    private quiz : QuizService
  ) { 
    this.quiz.getAllChapter().then(result=>{
      var data = this.states.concat(result.items)
      
      this.states=data;
    })
  }

  ngOnInit(): void {
  }

  selectedValue: string;
  selectedOption: any;
  states: any[] = [
    { id: 1, name: 'Pre-test', _id: 'PRE-TEST' },
  ];

  onSelect(event: TypeaheadMatch): void {
    this.selectedOption = event.item;
    // console.log(this.selectedOption.ref);
  }

  article: any[] = [];
  correct: any[];
  sub_article: any[][];

  

  scrollToBottom(): void {
    try {
      this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    } catch (err) { }
  }

  onAddArticle(index: number, minus?: any) {
    if (minus) {
      if (this.article.length > 1) {
        return this.article.pop();
      }
    }
    this.article.push({
      _id: index,
      question: ""
    });
  }

  onAddSubArticle(index: number, minus?: any) {
    if (!this.article[index].answer) {
      this.article[index].answer = [
        {
          _id: index + 1,
          name: "",
          correct: 0,
        }
      ]
    } else {
      this.article[index].answer.push({
        _id: index + 1,
        name: "",
        correct: 0
      })
    }
  }

  switchInput=0;
  onSwitchInput(){
    if(this.switchInput==0){
      return this.switchInput=1;
    }
    this.switchInput=0;
  }

  stack_main: number;
  stack_index: number;
  choose(event, main: number, index: number) {
    if (this.stack_main == main) {
      this.article[main].answer[this.stack_index].correct = 0;
    }
    this.article[main].answer[index].correct = 1;

    this.stack_main = main;
    this.stack_index = index;
  }

  submit(){
    if(!this.selectedOption){
      return this.alert.notify("กรุณาเลือก แบบฝึกหัด","แจ้งเตือน", "warning")
    }

    var obj = {
      name: this.selectedOption.name,
      detail: this.selectedOption.region,
      choice : this.article,
      ref : this.selectedOption._id
    }
    this.quiz.addQuiz(obj).then(result=>{
      this.alert.success(result.message);
    })
    .catch(err=>{
      this.alert.notify(err.message)
    })
  }
}

export interface IArticle {
  answer?: any;
}
