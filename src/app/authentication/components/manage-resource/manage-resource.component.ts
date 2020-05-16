
import { Router } from '@angular/router'
import { AppURL } from 'src/app/app.url'
import { FormGroup } from '@angular/forms'
import { Component, OnInit } from '@angular/core'
import { AuthURL } from '../../authentication.url'
import { DomSanitizer } from '@angular/platform-browser'
import { ResourceService } from '../../services/resource.service'
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { AlertService } from 'src/app/share/services/alert.service'
import { ChangeEvent } from '@ckeditor/ckeditor5-angular/ckeditor.component'


import 'sweetalert2/src/sweetalert2.scss'

import Swal from 'sweetalert2/dist/sweetalert2.js'

@Component({
  selector: 'app-manage-resource',
  templateUrl: './manage-resource.component.html',
  styleUrls: ['./manage-resource.component.css'],
  providers: [ResourceService],
})

export class ManageResourceComponent implements OnInit {
  constructor(
    private router: Router,
    private alert: AlertService,
    private sanitizer: DomSanitizer,
    private resource: ResourceService,
  ) { }

  ngOnInit(): void { }

  // Object to save //
  name: string;
  form: FormGroup;
  youtube_title:string;
  hyperText: string = "";
  hyperText_title: string;
  pdf: string[] = ['', '', ''];
  url: string[] = ['',''];
  text: string[] = [''];
  file: string[] = [''];
  title: string[] = [''];
  // ===  end === //

  data: string; //dummy
  page: any = 1;
  data2: string;
  status_button = 0;
  number_title = [1];
  isCollapsed = true;
  switch_display = 'pdf';
  url_type: boolean = true; // true is youtube && false is edupuzzle

  //file
  url_file: any;
  url_youtube: any;

  // change page up
  onAddText(number?: any) {
    if (number) {
      this.number_title.push(number + 1)
      return
    }
    this.status_button += 1
  }

  // change page down
  onMinusText() {
    this.status_button -= 1
  }

  // pop data from array
  onPopText() {
    this.number_title.pop()
    this.url.pop()
    this.text.pop()
  }

  // return url to display Youtube
  onShowYoutube(url: string) {
    if (url == 'switch') {
      return (this.switch_display = 'pdf')
    }
    // https://www.youtube.com/watch?v=zx7ndQFt7i8
    url = url.substring(32)
    this.switch_display = 'youtube'
    this.url_youtube = this.sanitizer.bypassSecurityTrustResourceUrl(
      'https://www.youtube-nocookie.com/embed/' + url
    )
  }

  // return url to display PDF
  onShowPDF(url: string) {
    var pdf:any;
    if (!url) return
    if (url.substring(url.length - 5) == '/view') {
      url = url.substring(0, url.length - 4) + 'preview'
    } else {
      pdf = "https://drive.google.com/file/d/" + url.substr(33) + "/preview"
    }

    try {
      this.url_file = this.sanitizer.bypassSecurityTrustResourceUrl(url)
    } catch (err) {
      this.alert.showWarning('เกิดข้อผิดพลาดกับลิงก์ PDF', err)
    }
  }

  public Editor = ClassicEditor

  // CKeditor1
  public onChange({ editor }: ChangeEvent) {
    const data = editor.getData()
    setTimeout(() => {
      this.data = data
    }, 1000)
    // console.log( data );
  }

  // CKeditor2
  public onChange2({ editor }: ChangeEvent) {
    const data = editor.getData()
    setTimeout(() => {
      this.data2 = data
    }, 1000)
    // console.log( data );
  }

  // Check before submit
  onPreview(text?: any) {
    if (!this.name) {
      return this.alert.notify(
        '== กรุณากรอกหน่วยที่ ==',
        'กรุณากรอกข้อมูลให้ครบถ้วน!',
        'info'
      )
    }

    if (this.title.length < 3) {
      return this.alert.notify(
        '== หัวข้อให้ครบถ้วนทั้ง 3 หัวข้อ ==',
        'กรุณากรอกข้อมูลให้ครบถ้วน!',
        'info'
      )
    }

    if (this.file[0] == '') {
      return this.alert.notify(
        '== กรุณาแนบไฟล์ PDF ด้วย ==',
        'กรุณากรอกข้อมูลให้ครบถ้วน!',
        'info'
      )
    }

    this.text[0] = this.data
    if (this.data2) {
      this.text[this.text.length] = this.data2
    }

    var obj = {
      name: this.name,
      title: this.title,
      file: this.file,
      text: this.text,
      url: this.url,
    }
    if (this.file[0]) {
      this.onShowPDF(this.file[0])
    }

    if (text) {
      return obj
    }
  }

  urlTypeClick() {
    this.url_type = !this.url_type;
  }

  // Submit
  onSubmit() {
    Swal.fire({
      title: 'คุณแน่ใจหรือไม่ ?',
      text: "คุณต้องการจะเพิ่มแหล่งข้อมูลใช่หรือไม่!",
      icon: 'warning',
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'เพิ่มข้อมูล!'
    }).then((result) => {
      if (result.value) {
        var model = {
          name : this.name,
          pdf: {
            title: this.pdf[0],
            url : this.pdf[1],
            text : this.pdf[2]
          },
          youtube:{
            title: this.youtube_title,
            video : {
              text: this.text,
              url: this.url
            }
          },
          hypertext:{
            title: this.hyperText_title,
            text: this.hyperText
          }
        }

        this.resource.onCreateChapter(model).then(() => {
          this.alert.success('เพิ่มข้อมูลเรียบร้อยแล้ว !')
          this.router.navigate(['/', AppURL.Authen, AuthURL.Home])
        })
      }
    })
  }
}
