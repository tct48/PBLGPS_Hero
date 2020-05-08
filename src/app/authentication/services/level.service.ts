import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AccountService } from 'src/app/share/services/account.service';

@Injectable()
export class LevelService {
  constructor(private http: HttpClient, private account: AccountService) {}

  calculateLevel(exp) {
    var level;
    if (exp || exp==0) {
      if (exp < 30) {
        level = 1;
      } else if (exp < 50) {
        level = 2;
      } else if (exp < 100) {
        level = 3;
      } else if (exp < 130) {
        level = 4;
      } else if (exp < 150) {
        level = 5;
      } else if (exp < 200) {
        level = 6;
      } else if (exp < 230) {
        level = 7;
      } else if (exp < 250) {
        level = 8;
      } else if (exp < 300) {
        level = 9;
      } else if (exp < 330) {
        level = 10;
      } else if (exp < 350) {
        level = 11;
      } else if (exp < 400) {
        level = 12;
      } else if (exp < 430) {
        level = 13;
      } else if (exp < 450) {
        level = 14;
      } else if (exp < 500) {
        level = 15;
      } else if (exp < 530) {
        level = 16;
      } else if (exp < 550) {
        level = 17;
      } else if (exp < 600) {
        level = 18;
      } else if (exp < 630) {
        level = 19;
      } else if (exp < 650) {
        level = 20;
      } else if (exp < 700) {
        level = 21;
      } else if (exp < 730) {
        level = 22;
      } else if (exp < 750) {
        level = 23;
      } else if (exp < 800) {
        level = 24;
      } else if (exp < 830) {
        level = 25;
      } else if (exp < 850) {
        level = 26;
      } else if (exp < 900) {
        level = 27;
      } else if (exp < 930) {
        level = 28;
      } else if (exp < 950) {
        level = 29;
      } else if (exp < 1000) {
        level = 30;
      } else if (exp >= 1000) {
        level = 31;
      }
    }
    return level;
  }

  calExpLeftToNextLevel(exp) {
    var level: Number;
    if (exp || exp==0) {
      if (exp < 30) {
        level = exp*100/30
      } else if (exp < 50) {
        level = exp*100/ 50;
      } else if (exp < 100) {
        level = exp*100/ 100;
      } else if (exp < 130) {
        level = exp*100/ 130;
      } else if (exp < 150) {
        level = exp*100/ 150;
      } else if (exp < 200) {
        level = exp*100/ 200;
      } else if (exp < 230) {
        level = exp*100/ 230;
      } else if (exp < 250) {
        level = exp*100/ 250;
      } else if (exp < 300) {
        level = exp*100/ 300;
      } else if (exp < 330) {
        level = exp*100/ 330;
      } else if (exp < 350) {
        level = exp*100/ 350;
      } else if (exp < 400) {
        level = exp*100/ 400;
      } else if (exp < 430) {
        level = exp*100/ 430;
      } else if (exp < 450) {
        level = exp*100/ 450;
      } else if (exp < 500) {
        level = exp*100/ 500;
      } else if (exp < 530) {
        level = exp*100/ 530;
      } else if (exp < 550) {
        level = exp*100/ 550;
      } else if (exp < 600) {
        level = exp*100/ 600;
      } else if (exp < 630) {
        level = exp*100/ 630;
      } else if (exp < 650) {
        level = exp*100/ 650;
      } else if (exp < 700) {
        level = exp*100/ 700;
      } else if (exp < 730) {
        level = exp*100/ 730;
      } else if (exp < 750) {
        level = exp*100/ 750;
      } else if (exp < 800) {
        level = exp*100/ 800;
      } else if (exp < 830) {
        level = exp*100/ 830;
      } else if (exp < 850) {
        level = exp*100/ 850;
      } else if (exp < 900) {
        level = exp*100/ 900;
      } else if (exp < 930) {
        level = exp*100/ 930;
      } else if (exp < 950) {
        level = exp*100/ 950;
      } else if (exp < 1000) {
        level = exp*100/ 1000;
      } else if (exp >= 1000) {
        level = exp*100/ 1000;
      }
    }
    return level;
  }
}
