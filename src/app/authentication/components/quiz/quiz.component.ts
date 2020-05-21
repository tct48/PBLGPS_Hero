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
  ) { }

  ngOnInit(): void {
  }

  selectedValue: string;
  selectedOption: any;
  states: any[] = [
    { id: 1, name: 'Pre-test', region: 'South' },
    { id: 2, name: 'PrPS Test', region: 'West' },
    // { id: 3, name: 'หน่วยการเรียนรู้ที่ 1', region: 'West' },
    // { id: 4, name: 'หน่วยการเรียนรู้ที่ 2', region: 'South' },
    // { id: 5, name: 'หน่วยการเรียนรู้ที่ n', region: 'West' },
    { id: 6, name: 'PoPs Test', region: 'West' },
    { id: 7, name: 'Post-test', region: 'Northeast' }
  ];

  article: any[] = [];
  correct: any[];
  sub_article: any[][];

  onSelect(event: TypeaheadMatch): void {
    this.selectedOption = event.item;
    console.log(this.selectedOption);
  }

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
    var obj = {
      name: this.selectedOption.name,
      detail: this.selectedOption.region,
      choice : this.article,
      ref : "5ebfd57615e8ec0024ab6faa" 
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
