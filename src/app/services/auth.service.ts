import { Injectable } from '@angular/core';
import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private userName: string;
  private linkLoged: any;
  private isLogged:boolean = false;
  
 constructor() {
    this.userName = '';  
   }
   

   login(username: string, password: string):boolean {

    this.userName = username;

    if (username == 'master@lemoncode.net' && password == '12345678'){

    localStorage.setItem('usuario', JSON.stringify(username));
    
     this.isLogged = true;
      return true;

    } 
    else{
      return false;
    }
  }

  
  getIsLogged(): boolean{
    this.isLogged = false;
    this.userName;
     if(localStorage.getItem('usuario')) {
      this.userName = 'master@lemoncode.net';
      return true;
     }
     else{
      return false;
     }
  }

  
  getUsername(): string{
    return this.userName;
  }

  logout(): void{
    this.userName = '';
    this.isLogged = false;
    localStorage.clear();

  }

  

}
