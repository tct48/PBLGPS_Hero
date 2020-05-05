import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AccountService } from 'src/app/share/services/account.service';

@Injectable()
export class LevelService{
  constructor(
    private http: HttpClient,
    private account: AccountService
  ){}

  calculateLevel(exp){
    var level;
    level = Math.round(exp / 100 * 3 +1);

    return level;
  }
}
