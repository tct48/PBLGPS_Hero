import { Injectable } from '@angular/core';

import Swal from 'sweetalert2/dist/sweetalert2.js';

import 'sweetalert2/src/sweetalert2.scss';
import { StringifyOptions } from 'querystring';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  constructor() {}

  notify(message: string, title: string = 'Error!', type: string = 'error') {
    Swal.fire({
      title: title,
      text: message,
      icon: type,
      confirmButtonText: 'ยืนยัน',
    });
  }

  success(
    message: string,
    title: string = 'Success!',
    type: string = 'success'
  ) {
    Swal.fire({
      title: title,
      text: message,
      icon: type,
    });
  }

  something_wrong(message: string = 'เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง') {
    this.notify(message);
  }

  showScore(title:string="No data",score:number = 0) {
    let timerInterval;
    Swal.fire({
      title: title,
      html: "Your score is " + score,
      timer: 2000,
      timerProgressBar: true,
      showConfirmButton: false,
      onClose: () => {
        clearInterval(timerInterval);
      },
    }).then((result) => {
      /* Read more about handling dismissals below */
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log('I was closed by the timer');
      }
    });
  }

  showWarning(title:string = "คำเตือน", text:string = "กรุณาตรวจสอบข้อมูลให้ถูกต้อง"){
    Swal.fire({
      title: title,
      text: text,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
  }

  announce(title:string="หัวข้อ", text:string="ข้อความ"){
    Swal.fire({
      title: title,
      html: text,
      imageUrl: 'https://steamuserimages-a.akamaihd.net/ugc/281856448671146419/530EBDE21052E60163E2D890F1F78AA154F13F01/',
      imageWidth: 390,
      imageHeight: 240,
      timer: 4000,
      timerProgressBar: true,
      showConfirmButton: false,
    })
  }
}
