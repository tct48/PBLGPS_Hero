import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {

  constructor(
    private _builder : FormBuilder
  ) { 

  }

  dynamicForm = this._builder.group({
    firstname : ['', [Validators.required]],
    lastname:[''],
    address: this._builder.group({
      address1: [''],
      address2: [''],
      state : [''],
      zip: ['']
    }),

    mobiles:this._builder.array([
      this._builder.control('')
    ])
  })

  form = this._builder.group({
    name: ['', [Validators.required]],
    questions: this._builder.array([
      this._builder.control('')
    ])
  })

  ngOnInit(): void {
  }

  get mobiles(){
    return this.dynamicForm.get('mobiles') as FormArray
  }

  get situations(){
    return this.form.get('situations') as FormArray
  }

  get questions(){
    return this.form.get('questions') as FormArray
  }

  get answers(){
    return this.form.get('answers') as FormArray
  }

  addNewSituation(){
    this.situations.push(this._builder.control(''));
  }

  addNewQuestion(){
    this.questions.push(this._builder.control(''))
  }

  addNewAnswer(){
    this.answers.push(this._builder.control(''));
  }

  addNewMobile(){
    this.mobiles.push(this._builder.control(''));
  }

  onSubmit(){
    console.log(this.form.value)
  }
}
