import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() { 
  }

 wrongUser(username: string, pass:string):boolean{

    if (username != 'master@lemoncode.net' || pass != '12345678' ) return true;
    return false;

  }

  
}
