import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AccountService } from 'src/app/share/services/account.service';

@Injectable()
export class LevelService {
  constructor(private http: HttpClient, private account: AccountService) {}

  calculateLevel(exp) {
    var level;
    if (exp > 0 && exp < 30) {
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
    return level;
  }
}
