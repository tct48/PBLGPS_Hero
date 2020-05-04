import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AccountService } from 'src/app/share/services/account.service';

@Injectable()
export class LeaderboardService{
  constructor(
    private http: HttpClient,
    private account: AccountService
  ){}
}
