import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular/ckeditor.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertService } from 'src/app/share/services/alert.service';

@Component({
  selector: 'app-manage-resource',
  templateUrl: './manage-resource.component.html',
  styleUrls: ['./manage-resource.component.css'],
})
export class ManageResourceComponent implements OnInit {
  constructor(
    private builder : FormBuilder,
    private alert: AlertService
  ) {}

  ngOnInit(): void {}

  onPreview() {
    this.text[0]=this.data;
    var obj = {
      name: this.name,
      title: this.title,
      file: this.file,
      text: this.text,
      url: this.url
    }

    console.log(obj);
  }

  onSubmit() {}

  
  form:FormGroup;

  // Object to save //
  name:string;
  title: string[] = [''];
  file:string[]=[''];
  url:string[]=[''];
  text: string[] = [''];
  // ===  end === //

  data:string; //dummy

  number_title=[1];
  status_button=0;
  isCollapsed = true;

  onAddText(number?:any){
    if(number){
      this.number_title.push(number+1);
      console.log(this.number_title);
      return;
    }
    this.status_button+=1;
  }

  onPopText(){
    this.number_title.pop();
    this.url.pop();
    this.text.pop();
  }

  onAlert(url:string){
    this.alert.showScore(url);
  }

  public Editor = ClassicEditor;
  public onChange({ editor }: ChangeEvent) {
    const data = editor.getData();
    setTimeout(() => {
      this.data = data;
    }, 1000);
    // console.log( data );
  }


}
