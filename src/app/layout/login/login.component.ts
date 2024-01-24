import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { MessageService } from 'src/app/message.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {

  username: string;
  password: string;
  authService:AuthService;
  message : MessageService;
  notUser: boolean;

  constructor( authService:AuthService, private router: Router, message: MessageService) {
    this.username = '';
    this.password ='';
    this.authService = authService;
    this.message = message;
    this. notUser =  false;
    
  }

  loged(){
    
    if( this.authService.login(this.username, this.password)) {
      this.router.navigate(['/dashboard']);
    } else {
      this.notUser = true;
    }
  }


}
