import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppURL } from 'src/app/app.url';
import { AuthURL } from '../../authentication.url';
import { ResourceService, IChapter } from '../../services/resource.service';

@Component({
  selector: 'app-resource',
  templateUrl: './resource.component.html',
  styleUrls: ['./resource.component.css'],
  providers: [ResourceService]
})
export class ResourceComponent implements OnInit {
  constructor(private router: Router, private resource: ResourceService) {
    // โหลดหน่วยที่
    this.resource.onShowAllChapter().then(result=>{
      this.items = result.items
    })
  }

  ngOnInit(): void {}

  items;

  openContent(item: any) {
    this.router.navigate(['', AppURL.Authen, AuthURL.Content], {
      queryParams: { item },
    });
  }
}
