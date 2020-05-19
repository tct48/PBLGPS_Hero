import { Component, OnInit, ViewChild, ElementRef, EventEmitter } from '@angular/core';


import { TypeaheadMatch } from 'ngx-bootstrap/typeahead/typeahead-match.class';
import { AlertService } from 'src/app/share/services/alert.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  @ViewChild('scrollMe') private myScrollContainer: ElementRef;
  constructor(
    private alert : AlertService
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

    console.log(this.article);
  }

  onAddSubArticle(index: number, minus?: any) {
    console.log(index)
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
    console.log(this.article);
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
    this.alert.showWarning("คุณแน่ใจแล้วใช่หรือไม่ ?", "นี้เป็นการเพิ่มข้อมูลแบบฝึกหัดลงไปในทันที","เพิ่มข้อมูลแบบฝึกหัด", "ยกเลิก")
  }
}

export interface IArticle {
  answer?: any;
}
