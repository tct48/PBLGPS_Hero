import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular/ckeditor.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertService } from 'src/app/share/services/alert.service';
import { DomSanitizer } from '@angular/platform-browser';
import { catchError } from 'rxjs/operators';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { ResourceService } from '../../services/resource.service';
import { Router } from '@angular/router';
import { AppURL } from 'src/app/app.url';
import { AuthURL } from '../../authentication.url';
@Component({
  selector: 'app-manage-resource',
  templateUrl: './manage-resource.component.html',
  styleUrls: ['./manage-resource.component.css'],
  providers: [ResourceService]
})
export class ManageResourceComponent implements OnInit {
  constructor(
    private builder : FormBuilder,
    private alert: AlertService,
    private sanitizer: DomSanitizer,
    private resource: ResourceService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onPreview(text?:any) {
    if(!this.name){
      return this.alert.notify("== กรุณากรอกหน่วยที่ ==", "กรุณากรอกข้อมูลให้ครบถ้วน!", "info");
    }

    if(this.title.length<3){
      return this.alert.notify("== หัวข้อให้ครบถ้วนทั้ง 3 หัวข้อ ==", "กรุณากรอกข้อมูลให้ครบถ้วน!", "info")
    }

    if(this.file[0]==""){
      return this.alert.notify("== กรุณาแนบไฟล์ PDF ด้วย ==", "กรุณากรอกข้อมูลให้ครบถ้วน!", "info")
    }

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
    
    if(text){
      return obj;
    }
    
  }

  onSubmit() {
    var obj = this.onPreview("retun that value");
    this.resource.onCreateChapter(obj)
      .then(()=>{
        this.alert.success("เพิ่มข้อมูลเรียบร้อยแล้ว !");
        this.router.navigate(['/',AppURL.Authen, AuthURL.Home]);
      })
  }

  
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
