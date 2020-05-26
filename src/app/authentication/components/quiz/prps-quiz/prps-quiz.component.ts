import { Component, OnInit } from '@angular/core'

import { TypeaheadMatch } from 'ngx-bootstrap/typeahead/typeahead-match.class'
import { ArrayType } from '@angular/compiler'
import { FormGroup } from '@angular/forms'

@Component({
    selector: 'app-prps-quiz',
    templateUrl: './prps-quiz.component.html',
    styleUrls: ['./prps-quiz.component.css'],
})
export class PrpsQuizComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}

    form = {
        situation: '',
        question: [],
    }

    number_of_form = {
        situation: 0,
        question: 0,
        answer: 0,
    }

    answer: ['answer[0]', 'answer[1]', 'answer[2]', 'answer[3]']
    forms: FormGroup
    formTemplate: any = PrpsQuizComponent

    selectedValue: string
    selectedOption: any
    states: any[] = [
        { id: 1, name: 'ก่อนเรียน', _id: 'PRE-PRPS-TEST' },
        { id: 2, name: 'หลังเรียน', _id: 'POST-PRPS-TEST' },
    ]

    onSelect(event: TypeaheadMatch): void {
        this.selectedOption = event.item
        // console.log(this.selectedOption.ref);
    }

    formLength: number = 0

    model = []

    onTest(number: number) {
        this.form = {
            situation: 'situation[' + this.formLength + ']',
            question: [],
        }

        for (var i = 0; i < 4; i++) {
            this.form.question.push({
                name: 'question[' + this.formLength + '][' + i + ']',
                answer: [
                    {
                        name: 'answer[' + this.formLength + '][' + i + '][0]',
                        score: 0,
                    },
                    {
                        name: 'answer[' + this.formLength + '][' + i + '][1]',
                        score: 0,
                    },
                    {
                        name: 'answer[' + this.formLength + '][' + i + '][2]',
                        score: 0,
                    },
                    {
                        name: 'answer[' + this.formLength + '][' + i + '][3]',
                        score: 0,
                    },
                ],
            })
        }

        this.formLength += 1
        this.model.push(this.form)
        this.number_of_form.situation += 1
        this.number_of_form.question += 4
        this.number_of_form.answer += 16

        console.log('สถานการณ์ทั้งหมด ' + this.number_of_form.situation)
        console.log('คำถามทั้งหมด ' + this.number_of_form.question)
        console.log('ตัวเลิอกคำตอบทั้งหมด ' + this.number_of_form.answer)

        return console.log(this.model)
    }

    old_first: any
    old_seccond: any
    old_third: any

    choose(event, first: any, seccond: any, third: any) {
        

        if (first == this.old_first) {
            if (seccond == this.old_seccond) {
                if (third != this.old_third) {
                    this.model[first].question[seccond].answer[this.old_third].score = 0
                }
            }
        }

        this.model[first].question[seccond].answer[third].score = 1

        this.old_first = first
        this.old_seccond = seccond
        this.old_third = third

        var obj = {
          first: this.old_first,
          seccond: this.old_seccond,
          third: this.old_third,
      }

        
        console.log(obj)
        // if(this.model)
        //   if (this.stack_main == main) {
        //       this.article[main].answer[this.stack_index].correct = 0
        //   }
        //   this.article[main].answer[index].correct = 1

        //   this.stack_main = main
        //   this.stack_index = index
    }

    onSubmit() {}
}

export interface IPRPSQUIZ {
    situation: Array<String>
    question: Array<String>
    answer: Array<String>
}
