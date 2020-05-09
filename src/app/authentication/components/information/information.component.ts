import { AppURL } from 'src/app/app.url';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthenService } from 'src/app/services/authen.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertService } from 'src/app/share/services/alert.service';
import { AccountService, IAccount } from 'src/app/share/services/account.service';
import { MemberService } from '../../services/member.service';
import { LevelService } from '../../services/level.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css'],
  providers: [MemberService, LevelService]
})
export class InformationComponent implements OnInit {
  constructor(
    private authen: AuthenService,
    private account: AccountService,
    private alert: AlertService,
    private router: Router,
    private builder: FormBuilder,
    private member : MemberService,
    private level_service : LevelService,
    private activateRouter: ActivatedRoute,
    private sanitizer : DomSanitizer
  ) {
    this.activateRouter.queryParams.forEach(params => {
      this.mem_id = params.item;
    })
    if (!this.UserLogin)
      this.initialLoadUserLogin();

    this.inititalCreateFormData();
    this.initialLoadUpdateFormData();
  }

  // ref
  mem_id:String;
  UserLogin: IAccount;
  form: FormGroup;
  exp: number;
  level: number;
  html = `<span class="btn-block btn-danger well-sm">Never trust not sanitized HTML!!!</span>`;
  url = this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube-nocookie.com/embed/ucHGiUPBJFQ");
  
  ngOnInit(): void {
  }

  // ปุ่มแก้ไข
  onSubmit() {   
    if(this.form.invalid){
      return this.alert.notify("กรุณากรอกข้อมูลให้ถูกต้อง และครบถ้วน");
    }

    if(this.mem_id){
      return this.member.updateMember(this.mem_id,this.form.value)
      .then(result=>{
        this.alert.success(result.message);
      })
    }
    this.member.updateMember(this.UserLogin._id,this.form.value)
    .then(result=>{
      this.alert.success(result.message);
    })
  }

  // เปิดดูคะแนนรายหัวข้อ
  onOpenScore(title:string){
    var score = Math.floor(Math.random()*101);
    return this.alert.showScore(title,score);
  }

  // โหลด UserLogin
  public initialLoadUserLogin() {
    var data = this.authen.getAuthenticated();
    if (!data) {
      return;
    }
    this.account.getUserLogin(this.authen.getAuthenticated())
      .then(userLogin => {
        this.UserLogin = userLogin;
      })
      .catch(err => {
        this.alert.notify(err.message);
        this.authen.clearAuthenticated();
        this.router.navigate(['/', AppURL.Login]);
      })
  }

  // โหลด ฟอร์ม
  private inititalCreateFormData() {
    this.form = this.builder.group({
      sid: ['', [Validators.required]],
      firstname: ['', [Validators.required]],
      lastname : ['', [Validators.required]],
      phone: ['', [Validators.required]],
      email: ['', [Validators.required]]
    })
  }

  private initialLoadUpdateFormData() {
    // var fullname = this.UserLogin.firstname + " " + this.UserLogin.lastname;
    if(this.mem_id){
      return this.account.getUserByID(this.mem_id,this.authen.getAuthenticated())
      .then(result => {
        // console.log(result);
        this.form.controls['email'].setValue(result.items[0].email);
        this.form.controls['phone'].setValue(result.items[0].phone);
        this.form.controls['firstname'].setValue(result.items[0].firstname);
        this.form.controls['sid'].setValue(result.items[0].sid);
        this.form.controls['lastname'].setValue(result.items[0].lastname);
        this.exp = result.items[0].exp;
        this.level = this.level_service.calculateLevel(this.exp);
      })
    }

    this.account.getUserLogin(this.authen.getAuthenticated())
      .then(result => {
        this.form.controls['email'].setValue(result.email);
        this.form.controls['phone'].setValue(result.phone);
        this.form.controls['firstname'].setValue(result.firstname);
        this.form.controls['sid'].setValue(result.sid);
        this.form.controls['lastname'].setValue(result.lastname);
        console.log(result)
        this.exp = result.exp;
        this.level = this.level_service.calculateLevel(this.exp);
      })
  }

  transform(value: string, args) {
    console.log(value);
    // return this.dom.bypassSecurityTrustHtml(value);
  }
}
