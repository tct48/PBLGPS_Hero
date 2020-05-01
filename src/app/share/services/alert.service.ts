import { Injectable } from '@angular/core';

import Swal from 'sweetalert2/dist/sweetalert2.js'

import 'sweetalert2/src/sweetalert2.scss'

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }

  notify(message: string, title: string = 'Error!', type: string = 'error') {
    Swal.fire({
      title: title,
      text: message,
      icon: type,
      confirmButtonText: 'ยืนยัน'
    })
  }

  success(message: string, title: string = 'Success!', type: string = 'success') {
    Swal.fire({
      title: title,
      text: message,
      icon: type,
    })
  }

  something_wrong(message: string ="เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง"){
    this.notify(message);
  }

}
