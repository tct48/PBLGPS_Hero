import { Component, OnInit } from '@angular/core'

import { TypeaheadMatch } from 'ngx-bootstrap/typeahead/typeahead-match.class'
import { ArrayType } from '@angular/compiler'
import { FormGroup } from '@angular/forms'
import { AlertService } from 'src/app/share/services/alert.service'
import { QuizService } from 'src/app/authentication/services/quiz.service'

@Component({
    selector: 'app-prps-quiz',
    templateUrl: './prps-quiz.component.html',
    styleUrls: ['./prps-quiz.component.css'],
    providers: [QuizService]
})
export class PrpsQuizComponent implements OnInit {
    constructor(
        private alert: AlertService,
        private quiz: QuizService
    ) {}

    ngOnInit(): void {}

    form = {
        situation: '',
        ref:'',
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
        if(!this.selectedOption){
            return this.alert.notify("กรุณาเลือกประเภทแบบประเมินก่อน")}

        this.form = {
            situation: 'situation[' + this.formLength + ']',
            ref:this.selectedOption._id,
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

        return console.log(this.model[0])
    }

    old_first: any
    old_seccond: any
    old_third: any

    choose(event, first: any, seccond: any, third: any) {
        if (first == this.old_first) {
            if (seccond == this.old_seccond) {
                this.model[first].question[seccond].answer[0].score=0;
                this.model[first].question[seccond].answer[1].score=0;
                this.model[first].question[seccond].answer[2].score=0;
                this.model[first].question[seccond].answer[3].score=0;
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
    }

    onSubmit() {
        for(var i=0; i<this.model.length;i++){
            this.quiz.addPrPs(this.model[i]).then(result=>{
                console.log(result);
                this.alert.success(result.message);
            })
        }
        
    }
}

export interface IPRPSQUIZ {
    total_items?:number
    items?:any
    message?: string

    situation: any
    question: any
    ref :any
    created : any    
}
