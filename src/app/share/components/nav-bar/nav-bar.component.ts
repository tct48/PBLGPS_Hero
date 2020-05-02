import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../services/account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  UserLogin:any;
  constructor(
    private account: AccountService,
    private router: Router
  ) { }

  ngOnInit(): void {

  }

  onLogout(){
    this.account.onLogout();
    return this.router.navigateByUrl('/');
  }

}
