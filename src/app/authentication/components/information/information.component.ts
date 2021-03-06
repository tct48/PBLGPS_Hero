import { AppURL } from 'src/app/app.url'
import { Component, OnInit } from '@angular/core'
import { Cloudinary } from '@cloudinary/angular-5.x'
import { Router, ActivatedRoute } from '@angular/router'
import { DomSanitizer } from '@angular/platform-browser'
import { LevelService } from '../../services/level.service'
import { MemberService } from '../../services/member.service'
import { AuthenService } from 'src/app/services/authen.service'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { AlertService } from 'src/app/share/services/alert.service'
import {
  AccountService,
  IAccount,
} from 'src/app/share/services/account.service'
import { GradeService } from '../../services/grade.service'


@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css'],
  providers: [MemberService, LevelService, GradeService],
})
export class InformationComponent implements OnInit {
  constructor(
    private router: Router,
    private grade : GradeService,
    private alert: AlertService,
    private builder: FormBuilder,
    private authen: AuthenService,
    private member: MemberService,
    private account: AccountService,
    private level_service: LevelService,
    private activateRouter: ActivatedRoute,
  ) {
    this.activateRouter.queryParams.forEach((params) => {
      this.mem_id = params.item
    })
    if (!this.UserLogin) this.initialLoadUserLogin()

    this.inititalCreateFormData()
    this.initialLoadUpdateFormData()
  }

  role:string;

  exp: number;
  level: number;
  mem_id: String;
  form: FormGroup;
  classroom: String;
  image_name: String;
  UserLogin: any;
  year=new Date().getFullYear()+543;
  x: String = 'user/image/olqpjyoomeqmsfmvjww3'

  checkData:any;
  checkDataClassroom:any;

  badge=["Design", "Device", "Final_City", "Internet", "IP", "LAN", "Monitor", "NOS", "Novice", "Overview", "Security", "Transmission", "WLAN"];

  setPath(path:string){
    // console.log(path);
    return "http://www.pblgps.com/assets/image/badge/" + path + ".png"
  }

  ngOnInit(): void { }

  // คลิปเปลี่ยนสถานะ
  onRoleClick(role:string){
    return this.member.updateRole(this.mem_id,{role:role}).then(result=>{
      this.member.updateMember(this.mem_id,{
        class:null
      }).then(()=>{
        this.alert.success("เปลี่ยนสถานะผู้ใช้เป็น '" + role +"'");
      })
    })
  }

  // เปิดดูคะแนนรายหัวข้อ
  onOpenScore(title: string) {
    this.grade.getScoreExercise(title).then(result=>{
      if(result.total_items>0)
      return this.alert.show_score(result.item.name, result.item.score)

      this.alert.show_score("ยังไม่มีคะแนนส่วนดังกล่าว!","แจ้งเตือน","danger")
    })
    .catch(err=>{
      this.alert.show_score("ยังไม่มีคะแนนส่วนดังกล่าว!","แจ้งเตือน","danger")
    })
  }

  // โหลด UserLogin
  public initialLoadUserLogin() {
  
  }

  // สร้าง ฟอร์มครั้งแรก
  private inititalCreateFormData() {
    this.form = this.builder.group({
      sid: ['', [Validators.required]],
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      email: ['', [Validators.required]],
      class: ['', [Validators.required]],
      etc:['']
    })
  }
  alternateSituation:[];

  // โหลดฟอร์มครั้งแรก
  private initialLoadUpdateFormData() {
    // var fullname = this.UserLogin.firstname + " " + this.UserLogin.lastname;
    if (this.mem_id) {
      return this.account
        .getUserByID(this.mem_id, this.authen.getAuthenticated())
        .then((result) => {
          this.form.controls['email'].setValue(result.items[0].email)
          this.form.controls['phone'].setValue(result.items[0].phone)
          this.form.controls['firstname'].setValue(
            result.items[0].firstname
          )
          this.form.controls['sid'].setValue(result.items[0].sid)
          this.form.controls['lastname'].setValue(
            result.items[0].lastname
          )

          if(result.items[0].role=='student'){
            this.member.returnClassroom(result.items[0].class).then(res=>{
              this.form.controls['class'].setValue(res.items._id)
              this.classroom = res.items.name;
              this.checkDataClassroom = 1
            })
          }
          

          this.role=result.items[0].role;

          this.exp = result.items[0].exp
          this.level = this.level_service.calculateLevel(this.exp)

          if (result.items[0].image) {
            this.image_name = result.items[0].image
          }

          this.checkData = 1;
        })
    }

  }

  getClassroom(_id:String){
    this.member.returnClassroom(_id).then(result=>{
      console.log(result)
      return result.items.name;
    })
  }

  // ปุ่มแก้ไขข้อมูลผู้ใช้
  onSubmit() {
    if (this.form.invalid) {
      return this.alert.notify('กรุณากรอกข้อมูลให้ถูกต้อง และครบถ้วน')
    }

    if (this.mem_id) {
      return this.member
        .updateMember(this.mem_id, this.form.value)
        .then((result) => {
          this.alert.success(result.message)
        })
    }
    this.member
      .updateMember(this.UserLogin._id, this.form.value)
      .then((result) => {
        this.alert.success(result.message)
      })
  }
}
