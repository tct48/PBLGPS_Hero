import { Injectable } from '@angular/core'
import { HttpService } from 'src/app/services/http.service'
import { AuthenService } from 'src/app/services/authen.service'

@Injectable()
export class ResourceService {
    constructor(private http: HttpService, private authen: AuthenService) {}

    // แสดงทุกแหล่งเรียนรู้
    onShowAllChapter() {
        return this.http
            .requestGet('chapter', this.authen.getAuthenticated())
            .toPromise() as Promise<IChapter>
    }

    // แสดงแหล่งเรียนรู้จาก ID
    onShowOneChapter(_id: string) {
        return this.http
            .requestGet(`chapter/${_id}`, this.authen.getAuthenticated())
            .toPromise() as Promise<IChapter>
    }

    // สร้างแหล่งเรียนรู้
    onCreateChapter(model:any) {
        return this.http.requestPost(`chapter`, model).toPromise() as Promise<
            any
        >
    }
}

export interface IChapter {
    total_items?: number
    items?: string
    item?: string

    _id?: string
    title?: string
    text?: string
    name?: string
    file?: string
    url?: string
    quiz?: number
    created?: Date
}
