import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular/ckeditor.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertService } from 'src/app/share/services/alert.service';
import { DomSanitizer } from '@angular/platform-browser';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-manage-resource',
  templateUrl: './manage-resource.component.html',
  styleUrls: ['./manage-resource.component.css'],
})
export class ManageResourceComponent implements OnInit {
  constructor(
    private builder : FormBuilder,
    private alert: AlertService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {}

  onPreview() {
    this.text[0]=this.data;
    if(this.data2){
      this.text[this.text.length] = this.data2;
    }
    
    var obj = {
      name: this.name,
      title: this.title,
      file: this.file,
      text: this.text,
      url: this.url
    }
    if(this.file[0]){
      this.onShowPDF(this.file[0]);
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
  hyperText:string;
  // ===  end === //



  page:any=1;
  data:string; //dummy
  data2:string;
  status_button=0;
  number_title=[1];
  isCollapsed = true;
  switch_display="pdf";
  url_youtube:any;
  url_file:any;

  // pdfSrc = "https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf";

  onAddText(number?:any){
    if(number){
      this.number_title.push(number+1);
      console.log(this.number_title);
      return;
    }
    this.status_button+=1;
  }

  onMinusText(){
    this.status_button-=1;
  }

  onPopText(){
    this.number_title.pop();
    this.url.pop();
    this.text.pop();
  }

  onShowYoutube(url:string){
    if(url=='switch'){
      return this.switch_display="pdf";
    }
    // https://www.youtube.com/watch?v=zx7ndQFt7i8
    url = url.substring(32);
    this.switch_display="youtube";
    this.url_youtube = this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube-nocookie.com/embed/" + url);
  }

  onShowPDF(url:string){
    if(!url)
    return;
    if(url.substring(url.length-5)=='/view'){
      url = url.substring(0,url.length-4) + "preview";
    }
    console.log(url)
    try{
      this.url_file = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }catch(err){
      this.alert.showWarning("เกิดข้อผิดพลาดกับลิงก์ PDF", err)
    }
    
  }

  public Editor = ClassicEditor;

  public onChange({ editor }: ChangeEvent) {
    const data = editor.getData();
    setTimeout(() => {
      this.data = data;
    }, 1000);
    // console.log( data );
  }

  public onChange2({ editor }: ChangeEvent) {
    const data = editor.getData();
    setTimeout(() => {
      this.data2 = data;
    }, 1000);
    // console.log( data );
  }

  previousPage(){
    if(this.page==1){
     return ;
    }
    this.page-=1;
  }

  nextPage(){
    this.page+=1;
  }
}
