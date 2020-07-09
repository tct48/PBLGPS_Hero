import { Component, OnInit, Sanitizer } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import {
    ResourceService,
    IChapter,
} from 'src/app/authentication/services/resource.service'
import { AppURL } from 'src/app/app.url'
import { AuthURL } from 'src/app/authentication/authentication.url'
import { AlertService } from 'src/app/share/services/alert.service'
import { QuizService } from 'src/app/authentication/services/quiz.service'
import { DomSanitizer } from '@angular/platform-browser'

@Component({
    selector: 'app-content',
    templateUrl: './content.component.html',
    styleUrls: ['./content.component.css'],
    providers: [ResourceService, QuizService],
})
export class ContentComponent implements OnInit {
    constructor(
        private activateRouter: ActivatedRoute,
        private resource: ResourceService,
        private router: Router,
        private alert: AlertService,
        private quiz: QuizService,
        private sanitizer: DomSanitizer
    ) {
        this.activateRouter.queryParams.forEach((params) => {
            this.chapter_id = params.item
        })

        this.quiz.getChapterByID(this.chapter_id).then((result) => {
            if (result.item.length > 0) {
                this.total_item = 1
            }
        })

        this.resource.onShowOneChapter(this.chapter_id).then(async (result) => {
            this.item = result.item[0]      

            if (!this.item) {
                this.router.navigate(['/', AppURL.Authen, AuthURL.Resource])
                this.alert.something_wrong('เกิดข้อผิดพลาก')
            }
        })
    }

    chapter_id: string
    item: any
    data: IChapter
    isCollapsed = false

    quiz_item: any
    total_item: number
    url_youtube: any
    url_pdf: any
    switch_display: String = 'PDF'

    ngOnInit(): void {}

    showPDF(url: any) {
        var pdf: any
        if (!url) return
        if (url.substring(url.length - 5) == '/view') {
            pdf = url.substring(0, url.length - 4) + 'preview'
        } else {
            pdf =
                'https://drive.google.com/file/d/' + url.substr(33) + '/preview'
        }

        
        if(url.substring(url.length - 17)=='/view?usp=sharing'){
            url = url.substring(0,url.length-17) + '/preview'
            pdf=url;
        }
        
        console.log(pdf)

        if (this.isCollapsed == false) {
            this.isCollapsed = true
        }

        try {
            this.url_pdf = this.sanitizer.bypassSecurityTrustResourceUrl(pdf)
        } catch (err) {
            this.alert.showWarning('เกิดข้อผิดพลาดกับลิงก์ PDF', err)
        }
        this.switch_display = 'PDF'
    }

    showYoutube(url: String) {
        url = url.substring(32)

        if (this.isCollapsed == false) {
            this.isCollapsed = true
        }

        this.url_youtube = this.sanitizer.bypassSecurityTrustResourceUrl(
            'https://www.youtube-nocookie.com/embed/' + url
        )
        this.switch_display = 'youtube'
    }

    startQuiz(id: string) {
        if (this.isCollapsed == false) {
            this.isCollapsed = true
        }

        // this.quiz.getAllQuiz(id).then(result=>{
        //   this.quiz_item=result;
        // })

        this.router.navigate(['', AppURL.Authen, AuthURL.Exercise], {
            queryParams: { id },
        })
    }

    onSubmit() {}
}
