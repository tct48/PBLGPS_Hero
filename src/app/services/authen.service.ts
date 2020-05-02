import { Injectable } from '@angular/core';

@Injectable({
  providedIn:'root'
})
export class AuthenService{
  private accessKey = 'accessToken';
  constructor(){}

  setAuthenticated(accessToken: string): void {
    localStorage.setItem(this.accessKey, accessToken);
  }

  getAuthenticated(accessToken: string): string {
    return localStorage.getItem(this.accessKey)
  }

  clearAuthenticated(): void{
    localStorage.removeItem(this.accessKey);
  }

}
