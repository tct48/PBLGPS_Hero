import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor(private activateRouter : ActivatedRoute) {
    this.activateRouter.queryParams.forEach(params => {
      this.item = params.item;
    })
   }

   item:any;
   isCollapsed = false;
  ngOnInit(): void {
  }

}
