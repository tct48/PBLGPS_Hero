import { Injectable } from '@angular/core';

import Swal from 'sweetalert2/dist/sweetalert2.js';

import 'sweetalert2/src/sweetalert2.scss';

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
}
