import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class HttpService {
  constructor(
    private http: HttpClient
  ) { }

  private address: string = "http://localhost:3000/"
  //Request GET method
  requestGet(url: string, accessToken?: string) {
    return this.http.get(`${this.address}${url}`, {
      headers: this.appendHeaders(accessToken)
    })
      .pipe(catchError(err => this.handelError(err)))
  }

  // ส่งข้อมูลแบบ Post method
  requestPost(url: string, body: any, file?: any) {
    return this.http
      .post(`${this.address}${url}`, body, file)
      .pipe(catchError(err => this.handelError(err)));
  }

  //Request Patch method
  requestPatch(url: string, accessToken?: string, model?: any) {
    return this.http
      .patch(`${this.address}${url}`, model, {
        headers: this.appendHeaders(accessToken)
      })
      .pipe(catchError(err => this.handelError(err)));
  }

  //Request Delete method
  requestDelete(url: string, id: any) {
    return this.http
      .delete(`${this.address}${url}` + id)
      .pipe(catchError(err => this.handelError(err)));
  }

  // ปรับแต่ง Error ใหม่
  private handelError(errResponse: HttpErrorResponse): Observable<any> {
    errResponse['Message'] = errResponse.message;
    if (errResponse.error && errResponse.error.message)
      errResponse['Message'] = errResponse.error.message;
    throw errResponse;
  }

  // เพิ่ม Header
  appendHeaders(accessToken) {
    const headers = {};
    if (accessToken) headers['Authentication'] = `ฺBearer ${accessToken}`;
    return new HttpHeaders(headers);
  }
}