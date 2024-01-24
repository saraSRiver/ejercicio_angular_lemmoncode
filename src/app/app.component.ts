import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }  from '@angular/router';
import { AuthService } from './services/auth.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'mini-app';
  authService:AuthService;
  
  constructor(auth:AuthService) {
    this.authService = auth;
  }

  getLog(): boolean {
    return this.authService.getIsLogged();
  }

  getUser(): string{
      return this.authService.getUsername();
  }

  logout():  void{
    return this.authService.logout();
  }
}


