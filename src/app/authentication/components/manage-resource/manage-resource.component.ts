import { Router } from '@angular/router'
import { AppURL } from 'src/app/app.url'
import { FormGroup } from '@angular/forms'
import { Component, OnInit } from '@angular/core'
import { AuthURL } from '../../authentication.url'
import { DomSanitizer } from '@angular/platform-browser'
import { ResourceService, IChapter } from '../../services/resource.service'
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
        private resource: ResourceService
    ) {
        this.onLoadChapter()
    }

    total_items: number
    items: any
    update_id:string;

    ngOnInit(): void {}

    toogle: boolean = false
    update: boolean = false

    // Object to save //
    name: string
    form: FormGroup
    pdf_title:string
    youtube_title: string
    hyperText: string = ''
    hyperText_title: string
    pdfs: string[]= ['','']
    text2:string[] = ['']
    url: string[] = ['', '']
    text: string[] = ['']
    file: string[] = ['']
    title: string[] = ['']
    purpose:string; //จุดประสงค์การเรียนรู้
    learning:string; //สาระการเรียนรู้
    // ===  end === //

    data: string //dummy
    page: any = 1
    data2: string
    status_button = 0
    number_title = [1]
    number_title2 = [1]
    isCollapsed = true
    switch_display = 'pdf'
    url_type: boolean = true // true is youtube && false is edupuzzle

    //file
    url_file: any
    url_youtube: any

    // change page up
    onAddText(number?: any) {
        if (number) {
            this.number_title.push(number + 1)
            return
        }
        this.status_button += 1
    }

    onAddText2(number?: any) {
        if (number) {
            this.number_title2.push(number + 1)
            return
        }
        this.status_button += 1
    }

    // change page down
    onMinusText() {
        this.status_button -= 1
    }

    switchToogle() {
        if (this.toogle == true) {
            if (this.update == true) this.update = true
            return (this.toogle = false)
        }
        this.toogle = true
        this.update = false
    }

    // pop data from array
    onPopText() {
        this.number_title.pop()
        this.url.pop()
        this.text.pop()
    }

    onPopText2(){
        this.number_title2.pop()
        this.pdfs.pop()
        if(this.text2.length>this.number_title2.length)
        this.text2.pop()
    }

    onLoadUpdate(data) {
        this.switchToogle()
        this.update = true
        this.resource.onShowOneChapter(data._id).then((result) => {
            var item = result.item[0]

            this.update_id = item._id

            this.name = item.name
            this.pdf_title = item.pdf.title
            // this.pdf[0] = item.pdf.title
            // this.pdf[1] = item.pdf.url
            // this.pdf[2] = item.pdf.text
            this.youtube_title = item.youtube.title
            this.purpose = item.purpose
            this.learning = item.learning

            var round = item.youtube.video.text.length
            for (var i = 0; i < round; i++) {
                this.text[i] = item.youtube.video.text[i]
                this.url[i] = item.youtube.video.url[i]

                this.text2[i] = item.pdf.file.text[i]
                this.pdfs[i] = item.pdf.file.url[i]
            }

            this.hyperText_title = item.hypertext.title
            this.hyperText = item.hypertext.title
        })
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
        var pdf: any
        if (!url) return
        if (url.substring(url.length - 5) == '/view') {
            url = url.substring(0, url.length - 4) + 'preview'
        } else {
            pdf =
                'https://drive.google.com/file/d/' + url.substr(33) + '/preview'
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
    onPreview(text?: any) {}

    urlTypeClick() {
        this.url_type = !this.url_type
    }

    onDelete(_id: string) {
        Swal.fire({
            title: 'ลบข้อมูล ?',
            text: 'คุณต้องการที่จะลบข้อมูลใช่หรือไม่',
            icon: 'warning',
            confirmButtonColor: '#6D3B47',
            confirmButtonText: 'ลบข้อมูล!',
        }).then((res) => {
            if (res.value) {
                this.resource.onDeleteChapter(_id).then((result) => {
                    this.alert.success('ลบแหล่งการเรียนรู้สำเร็จ !')
                    this.onLoadChapter()
                })
            }
        })
    }

    onLoadChapter() {
        this.resource.onShowAllChapter().then((result) => {
            this.total_items = result.total_items
            this.items = result.items
        })
    }

    onUpdate(_id) {
        var model = {
            name: this.name,
            pdf: {
                title: this.pdf_title,
                file:{
                    text: this.text2,
                    url:this.pdfs
                }
            },
            youtube: {
                title: this.youtube_title,
                video: {
                    text: this.text,
                    url: this.url,
                },
            },
            hypertext: {
                title: this.hyperText_title,
                text: this.hyperText,
            },
            purpose: this.purpose,
            learning: this.learning
        }

        this.resource.onUpdateChapter(this.update_id,model).then((result) => {
            this.alert.success('แก้ไขข้อมูลเรียบร้อยแล้ว !')
            this.router.navigate(['/', AppURL.Authen, AuthURL.ManageResource])
            this.switchToogle()
        })
    }

    // Submit
    onSubmit() {
        Swal.fire({
            title: 'คุณแน่ใจหรือไม่ ?',
            text: 'คุณต้องการจะเพิ่มแหล่งข้อมูลใช่หรือไม่!',
            icon: 'warning',
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'เพิ่มข้อมูล!',
        }).then((result) => {
            if (result.value) {
                var model = {
                    name: this.name,
                    pdf: {
                        title: this.pdf_title,
                        file: {
                            text: this.text2,
                            url: this.pdfs
                        }
                    },
                    youtube: {
                        title: this.youtube_title,
                        video: {
                            text: this.text,
                            url: this.url,
                        },
                    },
                    hypertext: {
                        title: this.hyperText_title,
                        text: this.hyperText,
                    },
                    purpose:this.purpose,
                    learning:this.learning
                }

                this.resource.onCreateChapter(model).then(() => {
                    this.alert.success('เพิ่มข้อมูลเรียบร้อยแล้ว !')
                    this.router.navigate(['/', AppURL.Authen, AuthURL.Home])
                })
            }
        })
    }
}
