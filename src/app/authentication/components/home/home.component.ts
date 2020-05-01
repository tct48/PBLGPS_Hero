import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/share/services/alert.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private alert:AlertService
  ) { }

  ngOnInit(): void {
    this.alert.notify("Fuck off");
  }

}
