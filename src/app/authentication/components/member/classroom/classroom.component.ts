import { Component, OnInit } from '@angular/core';
import { MemberService, IMember, IClassroom, OptionSearch, IAttendence } from 'src/app/authentication/services/member.service';
import { AlertService } from 'src/app/share/services/alert.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AppURL } from 'src/app/app.url';
import { AuthURL } from 'src/app/authentication/authentication.url';
import { ResourceLoader } from '@angular/compiler';
 
import 'sweetalert2/src/sweetalert2.scss'
import Swal from 'sweetalert2/dist/sweetalert2.js'

import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
@Component({
  selector: 'app-classroom',
  templateUrl: './classroom.component.html',
  styleUrls: ['./classroom.component.css'],
  providers:[MemberService]
})
export class ClassroomComponent implements OnInit {

  constructor(
    private member: MemberService,
    private alert: AlertService,
    private router: Router
  ) { 
    this.loadDataClassroom();
  }
  
  option: OptionSearch = {
    sp: 0,
    lp: 5,
    keySearch: null,
    valueData: null,
}

  title_name:string='';

  Classroom_item:any;
  total_classroom:number;
  classroom_name:String;

  classroom_id:String;
  dateAdd=null;
  colspan:number=0;

  title:String;
  total_items:number;
  items:IMember;



  attendence_id:any;
  attendence_item:IAttendence;

  attendence_sick=[];
  room:String="5eca83a411df253bb42f2eee";

  ngOnInit(): void {
  }

  onSubmit(){
    this.member.addClassroom({ name :this.classroom_name}).then(result=>{
      this.alert.success(result.message);
      this.loadDataClassroom();
    })
    .catch(err=>{
      if(err.Message=="ValidationError")
      this.alert.notify("กรุณากรอกข้อมูลให้ครบถ้วน!");
    })
  }

  onLoadStudent(model:any){
    if(this.classroom_id==model._id){
      return;
    }
    this.classroom_id=model._id;
    this.title = model.name;
    // โหลดเข้าเรียนด้วย
    this.attendence_id = model._id
    this.loadAttendence(model._id);
    this.member.loadMemberFromClassroom(model._id).then(result=>{
      this.items = result.items
      this.total_items = result.total_items;
    })

    this.title_name="ดูสมาชิกในห้องเรียน"
  }

  loadDataClassroom(){
    this.member.loadClassroom().subscribe(result=>{
      this.Classroom_item = result.map(e => {
          return {
              _id: e.payload.doc.id,
              name: e.payload.doc.data()['name']
          }
      })
      this.total_classroom = this.Classroom_item.length;
  });
    this.classroom_name=null;
  }

  loadAttendence(_id:string){
    this.member.loadAttendence(_id).then(result=>{
      this.attendence_item=result.items
      this.attendence_sick=result.items.sick
      this.colspan = result.total_items
    })
  }

  addAttendence(){
    if(!this.dateAdd){
      return this.alert.notify("กรุณาระบุวันที่เช็คชื่อ")
    }
    var obj={
      date: this.dateAdd,
      ref: this.classroom_id,
      status: 1
    }
    this.member.addAttendence(obj).then(result=>{
      this.loadAttendence(this.attendence_id);
      this.dateAdd=null;
    })
  }

  deleteAttendence(_id:string){
    this.member.deleteAttendence(_id).then(result=>{
      this.alert.success("ลบข้อมูลเรียบร้อยแล้ว !");
      this.loadAttendence(this.attendence_id)
    })
  }

  statusAttendence(model:any){
    var status=!model.status;
    if(model.status==1){
      this.member.patchAttendence(model._id,{status:status}).then(result=>{
      })
      
      this.alert.success("ไม่อนุญาติให้นักศึกษาเข้าห้องเรียน","แจ้งเตือน","success")
      return this.loadAttendence(this.attendence_id);
    }
    this.member.patchAttendence(model._id,{status:status}).then(result=>{
      this.alert.success("อนุญาติให้นักศึกษาเข้าห้องเรียน")
    })
    return this.loadAttendence(this.attendence_id);
  }

  getAttended(model:string, attend:any){
      var data:Array<String> = attend;
      var result = data.includes(model)
      return result;
  }

  updateAttendence(attendence:any,user:any){
    var data:Array<String> = attendence.user;
    var result = data.includes(user._id)

    if(result==true){
      return;
    }

    this.member.patchAttendenceSick(attendence._id,{sick:user._id}).then(result=>{
      this.alert.success("ดำเนินการสำเร็จ")
      this.loadAttendence(this.attendence_id)
    })
  }

  onGroupCreate(_id:String){
    this.router.navigate(['', AppURL.Authen, AuthURL.CreateGroup], {
      queryParams: { _id },
  })
  }

  onDelete(model:string){
    Swal.fire({
      title: 'แจ้งเตือน',
      text: 'คุณต้องการจะลบข้อมูลใช่หรือไม่',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'ใช่, ลบเดี๋ยวนี้',
  }).then((result) => {
      if (result.value) {
        this.member.deleteClassroom(model).then(result=>{
          this.alert.success(result.message);
          this.loadDataClassroom();
        }).catch(err=>{
          this.alert.notify(err.name)
        })
      }
  })
  }


  // ส่วน Export PDF
  generatePdf(){
    const documentDefinition = this.getDocumentDefinition();
    pdfMake.fonts = {
      THSarabunNew: {
        normal: 'THSarabunNew.ttf',
        bold: 'THSarabunNew Bold.ttf',
        italics: 'THSarabunNew Italic.ttf',
        bolditalics: 'THSarabunNew BoldItalic.ttf'
      },
      Roboto: {
        normal: 'Roboto-Regular.ttf',
        bold: 'Roboto-Medium.ttf',
        italics: 'Roboto-Italic.ttf',
        bolditalics: 'Roboto-MediumItalic.ttf'
      }
    }
    pdfMake.createPdf(documentDefinition).open();
   }

  //  get document
   getDocumentDefinition() {
    sessionStorage.setItem('resume', JSON.stringify('test1'));
    return {
      content: [
        {
          text: this.title,
          bold: true,
          fontSize: 20,
          alignment: 'center',
        },
        {
          text: 'ข้อมูลนักศึกษาทั้งหมด',
          style: 'header'
        },
        {
          text: 'จำนวนทั้งสิ้น ' + this.total_items + ' คน',
          style: 'name'
        },
        this.getEducationObject(this.items),
      ],
      defaultStyle:{
        font: 'THSarabunNew'
      },
        styles: {
          header: {
            fontSize: 18,
            bold: true,
            margin: [0, 20, 0, 10],
            decoration: 'underline'
          },
          name: {
            fontSize: 16,
            bold: true
          },
          jobTitle: {
            fontSize: 14,
            bold: true,
            italics: true
          },
          sign: {
            margin: [0, 50, 0, 10],
            alignment: 'right',
            italics: true
          },
          tableHeader: {
            bold: true,
            alignment:'center'
          }
        }
    };
  }

  getEducationObject(educations: any) {
    return {
      table: {
        widths: ['*', '*', '*', '*'],
        body: [
          [{
            text: 'ชื่อจริง',
            style: 'tableHeader'
          },
          {
            text: 'นามสกุล',
            style: 'tableHeader'
          },
          {
            text: 'เบอร์โทรศัพท์',
            style: 'tableHeader'
          },
          {
            text: 'ค่าประสบการณ์',
            style: 'tableHeader'
          },
          ],
          ...educations.map(ed => {
            return [ed.firstname, ed.lastname, ed.phone, ed.exp];
          })
        ]
      }
    };
  }
}
