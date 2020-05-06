import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppURL } from 'src/app/app.url';
import { AuthURL } from '../../authentication.url';

@Component({
  selector: 'app-resource',
  templateUrl: './resource.component.html',
  styleUrls: ['./resource.component.css']
})
export class ResourceComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  item = ["หน่วยที่ 00", "หน่วยที่ 01" ,"หน่วยที่ 02" ,"หน่วยที่ 03" ,"หน่วยที่ 04" ,"หน่วยที่ 05" ,"หน่วยที่ 06" ,"หน่วยที่ 07" ,"หน่วยที่ 08" ,"หน่วยที่ 09" ,"หน่วยที่ 10" ,"หน่วยที่ 11" ,"หน่วยที่ 12"]
  
  openContent(item:any){
    this.router.navigate(['', AppURL.Authen, AuthURL.Content], { queryParams: {item} })
  }
}
