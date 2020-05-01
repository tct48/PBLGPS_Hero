import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';
import { AlertService } from 'src/app/share/services/alert.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AppURL } from 'src/app/app.url';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  form: FormGroup;
  password;
  c_password;
  returnURL;

  constructor(
    private builder: FormBuilder,
    private alert: AlertService,
    private router: Router,
    private activateRoute: ActivatedRoute
  ) {
    this.createFormData();
  }

  ngOnInit(): void {
  }

  createFormData() {
    this.form = this.builder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.form.invalid) {
      return this.alert.notify("กรุณากรอกข้อมูลให้ถูกต้อง");
    }

    this.router.navigateByUrl('/auth');
  }
}
