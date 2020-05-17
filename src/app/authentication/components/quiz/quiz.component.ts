import { Component, OnInit } from '@angular/core';


import { TypeaheadMatch } from 'ngx-bootstrap/typeahead/typeahead-match.class';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  selectedValue: string;
  selectedOption: any;
  states: any[] = [
    { id: 1, name: 'Pre-test', region: 'South' },
    { id: 2, name: 'PrPS Test', region: 'West' },
    { id: 3, name: 'หน่วยการเรียนรู้ที่ 1', region: 'West' },
    { id: 4, name: 'หน่วยการเรียนรู้ที่ 2', region: 'South' },
    { id: 5, name: 'หน่วยการเรียนรู้ที่ n', region: 'West' },
    { id: 6, name: 'PoPs Test', region: 'West' },
    { id: 7, name: 'Post-test', region: 'Northeast' }
  ];

  onSelect(event: TypeaheadMatch): void {
    this.selectedOption = event.item;
    console.log(this.selectedOption);
  }
}
