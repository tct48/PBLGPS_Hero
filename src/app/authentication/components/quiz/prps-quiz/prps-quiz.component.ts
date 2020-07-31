import { Component, OnInit } from '@angular/core'
import 'sweetalert2/src/sweetalert2.scss'

import Swal from 'sweetalert2/dist/sweetalert2.js'

import { TypeaheadMatch } from 'ngx-bootstrap/typeahead/typeahead-match.class'
import { ArrayType } from '@angular/compiler'
import { FormGroup } from '@angular/forms'
import { AlertService } from 'src/app/share/services/alert.service'
import { QuizService } from 'src/app/authentication/services/quiz.service'
import { Router } from '@angular/router'
import { AuthURL } from 'src/app/authentication/authentication.url'


import pdfMake from 'pdfmake/build/pdfmake'
import pdfFonts from 'pdfmake/build/vfs_fonts'
pdfMake.vfs = pdfFonts.pdfMake.vfs
@Component({
    selector: 'app-prps-quiz',
    templateUrl: './prps-quiz.component.html',
    styleUrls: ['./prps-quiz.component.css'],
    providers: [ QuizService]
})
export class PrpsQuizComponent implements OnInit {
    constructor(
        private alert: AlertService,
        private quiz: QuizService,
        private router: Router
        ) {
            this.onLoadListItem();
        }

    ngOnInit(): void {}

    number_of_form = {
        situation: 0,
        question: 0,
        answer: 0,
    }

    interfaceFormat = ['1', '2', '3', '4']

    // OnOffMenu
    menu:boolean=false;
    list_item:any;
    _id:string;

    // form
    form: any
    name: String
    question = ['', '', '', '']
    answer = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '']
    score = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

    formTemplate: any = PrpsQuizComponent

    selectedValue: string
    selectedOption: any
    states: any[] = [
        { id: 1, name: 'ก่อนเรียน', _id: 'PRE-PRPS-TEST' },
        { id: 2, name: 'หลังเรียน', _id: 'POST-PRPS-TEST' },
    ]

    onSelect(event: TypeaheadMatch): void {
        this.selectedOption = event.item
    }

    onLoadListItem(){
        this.quiz.getAllPrpsList().then(result=>{
            this.list_item= result.items
        })
    }

    onInsert(){
      this.menu=true;
    }

    onLoadUpdate(_id:string){
        this.menu=true;
        this.quiz.getPrpstoUpdate(_id).then(result=>{
            this._id = result.items._id;
            this.name = result.items.situation;

            console.log(result)
            if(result.items.ref==="PRE-PRPS-TEST"){
                this.selectedOption = { id: 1, name: 'ก่อนเรียน', _id: 'PRE-PRPS-TEST' }
            }else{
                this.selectedOption = { id: 2, name: 'หลังเรียน', _id: 'POST-PRPS-TEST' }
            }
            this.selectedValue = this.selectedOption.name;

            this.question = result.items.questions;
            this.answer[0] = result.items.answers[0][0].name;
            this.answer[1] = result.items.answers[0][1].name;
            this.answer[2] = result.items.answers[0][2].name;
            this.answer[3] = result.items.answers[0][3].name;
            this.answer[4] = result.items.answers[1][0].name;
            this.answer[5] = result.items.answers[1][1].name;
            this.answer[6] = result.items.answers[1][2].name;
            this.answer[7] = result.items.answers[1][3].name;
            this.answer[8] = result.items.answers[2][0].name;
            this.answer[9] = result.items.answers[2][1].name;
            this.answer[10] = result.items.answers[2][2].name;
            this.answer[11] = result.items.answers[2][3].name;
            this.answer[12] = result.items.answers[3][0].name;
            this.answer[13] = result.items.answers[3][1].name;
            this.answer[14] = result.items.answers[3][2].name;
            this.answer[15] = result.items.answers[3][3].name;

            this.score[0] = result.items.answers[0][0].score;
            this.score[1] = result.items.answers[0][1].score;
            this.score[2] = result.items.answers[0][2].score;
            this.score[3] = result.items.answers[0][3].score;
            this.score[4] = result.items.answers[1][0].score;
            this.score[5] = result.items.answers[1][1].score;
            this.score[6] = result.items.answers[1][2].score;
            this.score[7] = result.items.answers[1][3].score;
            this.score[8] = result.items.answers[2][0].score;
            this.score[9] = result.items.answers[2][1].score;
            this.score[10] = result.items.answers[2][2].score;
            this.score[11] = result.items.answers[2][3].score;
            this.score[12] = result.items.answers[3][0].score;
            this.score[13] = result.items.answers[3][1].score;
            this.score[14] = result.items.answers[3][2].score;
            this.score[15] = result.items.answers[3][3].score;
        })
    }

    onDelete(_id:string){
        Swal.fire({
            title: 'ลบข้อมูล ?',
            text: 'คุณต้องการที่จะลบข้อมูลใช่หรือไม่',
            icon: 'warning',
            confirmButtonColor: '#6D3B47',
            confirmButtonText: 'ลบข้อมูล!',
        }).then((res) => {
            if (res.value) {
                this.quiz.deletePrps(_id).then(()=>{
                    this.alert.success("ลบข้อมูลเรียบร้อยแล้ว !");
                    this.onLoadListItem();
                })
                this.onLoadListItem();
            }
        })

    }

    formLength: number = 0

    model = []

    old_first: any
    old_seccond: any
    old_third: any

    choose(event, j: number, i: number) {
        var dumb = 3
        if (j == 0) {
            this.score[0] = 0
            this.score[1] = 0
            this.score[2] = 0
            this.score[3] = 0

            return (this.score[i] = 1)
        } else if (j == 1) {
            this.score[4] = 0
            this.score[5] = 0
            this.score[6] = 0
            this.score[7] = 0
        } else if (j == 2) {
            this.score[8] = 0
            this.score[9] = 0
            this.score[10] = 0
            this.score[11] = 0
        } else if (j == 3) {
            this.score[12] = 0
            this.score[13] = 0
            this.score[14] = 0
            this.score[15] = 0
        }

        this.score[3 * j + j + i] = 1
    }

    onSubmit() {
        if (!this.selectedOption) {
            return this.alert.notify('กรุณาเลือกประเภทบททดสอบ')
        }

        var dummy = 0
        for (var i = 0; i < 16; i++) {
            if (this.score[i] == 1) dummy += 1
        }

        if (dummy < 4) {
            return this.alert.notify('กรุณาระบุคำตอบให้ครบทุกข้อ!')
        }

        var dumb=[];

        var obj = {
            ref: this.selectedOption._id,
            situation: this.name,
            questions: this.question,
            answers:[]
        }

        // section1
        for(var i=0;i<4;i++){
            dumb.push({
                name:this.answer[i],
                score: this.score[i]
            })
        }

        obj.answers.push(dumb)
        dumb=[];

        for(var i=4;i<8;i++){
            dumb.push({
                name:this.answer[i],
                score: this.score[i]
            })
        }

        obj.answers.push(dumb)
        dumb=[];

        for(var i=8;i<12;i++){
            dumb.push({
                name:this.answer[i],
                score: this.score[i]
            })
        }
        obj.answers.push(dumb)
        dumb=[];

        for(var i=12;i<16;i++){
            dumb.push({
                name:this.answer[i],
                score: this.score[i]
            })
        }
        obj.answers.push(dumb)
        dumb=[];

        this.quiz.addPrPs(obj).then(result=>{
            this.alert.success(result.message);
            this.router.navigate(['', AuthURL.Home])
        })
    }

    onUpdate(){
        if(!this._id){
            return this.alert.notify("เกิดข้อผิดพลาด !")
        }

        if (!this.selectedOption) {
            return this.alert.notify('กรุณาเลือกประเภทบททดสอบ')
        }

        var dummy = 0
        for (var i = 0; i < 16; i++) {
            if (this.score[i] == 1) dummy += 1
        }

        if (dummy < 4) {
            return this.alert.notify('กรุณาระบุคำตอบให้ครบทุกข้อ!')
        }

        var dumb=[];

        var obj = {
            ref: this.selectedOption._id,
            situation: this.name,
            questions: this.question,
            answers:[]
        }

        // section1
        for(var i=0;i<4;i++){
            dumb.push({
                name:this.answer[i],
                score: this.score[i]
            })
        }

        obj.answers.push(dumb)
        dumb=[];

        for(var i=4;i<8;i++){
            dumb.push({
                name:this.answer[i],
                score: this.score[i]
            })
        }

        obj.answers.push(dumb)
        dumb=[];

        for(var i=8;i<12;i++){
            dumb.push({
                name:this.answer[i],
                score: this.score[i]
            })
        }
        obj.answers.push(dumb)
        dumb=[];

        for(var i=12;i<16;i++){
            dumb.push({
                name:this.answer[i],
                score: this.score[i]
            })
        }
        obj.answers.push(dumb)
        dumb=[];

        this.quiz.updatePrps(this._id,obj).then(result=>{
            this.alert.success("แก้ไขข้อมูลสำเร็จ !");
            this.onLoadListItem();
            this.onCancel();
        })
    }

    onCancel(){
        this._id=null;
        this.menu=false;
    }

    // ทำไฟล์เป็น pdf
    // ทำ export document to pdf
    generatePdf(_id?: string) {
        this.quiz.getPrpstoUpdate(_id).then(result=>{
            console.log(result) 

            const documentDefinition = this.getDocumentDefinition(result.items)
            pdfMake.fonts = {
                THSarabunNew: {
                    normal: 'THSarabunNew.ttf',
                    bold: 'THSarabunNew Bold.ttf',
                    italics: 'THSarabunNew Italic.ttf',
                    bolditalics: 'THSarabunNew BoldItalic.ttf',
                },
                Roboto: {
                    normal: 'Roboto-Regular.ttf',
                    bold: 'Roboto-Medium.ttf',
                    italics: 'Roboto-Italic.ttf',
                    bolditalics: 'Roboto-MediumItalic.ttf',
                },
            }
            pdfMake.createPdf(documentDefinition).open()
        });
    }

    //  get document
    getDocumentDefinition(question?:any) {
        sessionStorage.setItem('resume', JSON.stringify('test1'))
        return {
            content: [
                {
                    text: 'แบบทดสอบ',
                    bold: true,
                    fontSize: 20,
                    alignment: 'center',
                },
                {
                    text: question.ref,
                    bold: true,
                    fontSize: 20,
                    alignment: 'center',
                    margin: [0, 0, 0, 20],
                },
                {
                    text: 'สถานการณ์',
                    bold:true,
                    fontSize: 18
                },
                this.getEducationObject(question),
            ],
            info: {
                title: 'แบบทดสอบ ' + this.selectedValue,
                author: 'Phd.Ratchapol',
                subject: 'RESUME',
                keywords: 'RESUME, ONLINE RESUME',
            },
            defaultStyle: {
                font: 'THSarabunNew',
            },
            styles: {
                header: {
                    fontSize: 18,
                    bold: true,
                    margin: [0, 20, 0, 10],
                    decoration: 'underline',
                },
                name: {
                    fontSize: 16,
                    bold: true,
                },
                jobTitle: {
                    fontSize: 14,
                    bold: true,
                    italics: true,
                },
                sign: {
                    margin: [0, 50, 0, 10],
                    alignment: 'right',
                    italics: true,
                },
                tableHeader: {
                    bold: true,
                },
            },
        }
    }

    getEducationObject(educations: any) {
        console.log(educations);
        return [
            {
                text:educations.situation,
                alignment: 'center'
            },
            educations.questions.map((situation,index)=>{
                return [
                    {
                        text: (index+1) + '. ' + situation,
                        bold:true,
                        margin: [0,8,0,0]
                    },
                    educations.answers[index].map((sub_quest,index)=>{
                        var choices = 'ก'
                        if (index == 1) {
                            choices = 'ข'
                        } else if (index == 2) {
                            choices = 'ค'
                        } else if (index == 3) {
                            choices = 'ง'
                        }
                        if(sub_quest.score==0)
                            return [choices + '. ' + sub_quest.name]
                            return [{
                                text: choices + '. ' + sub_quest.name + '*',
                                bold:true,
                                color: 'blue'
                            }]
                    })
                ]
            })
        ]
        return educations.questions.map((situation)=>{
            console.log(situation)
            return [
                {
                    text: situation,
                } 
                // situation.questions.map((sub_quest, index)=>{
                    // return [
                    //     {
                    //         text: (index+1) + '. ' + sub_quest[index],
                    //         bold: true,
                    //     },
                    //     situation.answers[index].map((choice, j)=>{
                    //         var choices = 'ก'
                    //             if (j == 1) {
                    //                 choices = 'ข'
                    //             } else if (j == 2) {
                    //                 choices = 'ค'
                    //             } else if (j == 3) {
                    //                 choices = 'ง'
                    //             }
                    //             if(choice.correct==0)
                    //             return [choices + '. ' + choice.name]
                    //             return [{
                    //                 text: choices + '. ' + choice.name + '*',
                    //                 bold:true,
                    //                 color: 'blue'
                    //             }]
                    //     })
                    // ]
                // })
            ]
        })
        return educations.map((ed, index) => {
            return [
                {
                    text: index + 1 + '. ' + ed.question,
                    bold: true,
                    margin: [0,8,0,0]
                },
                ed.answer.map((sub_ed, jndex) => {
                    var choice = 'ก'
                    if (jndex == 1) {
                        choice = 'ข'
                    } else if (jndex == 2) {
                        choice = 'ค'
                    } else if (jndex == 3) {
                        choice = 'ง'
                    }
                    if(sub_ed.correct==0)
                    return [choice + '. ' + sub_ed.name]
                    return [{
                        text: choice + '. ' + sub_ed.name + '*',
                        bold:true,
                        color: 'blue'
                    }]
                }),
            ]
        })
    }
}

export interface IPRPSQUIZ {
    message?:string
    total_items?:number
    items?:any

    situation: Array<String>
    question: Array<String>
    answer: Array<String>
}
