import { Pipe, PipeTransform } from '@angular/core';
import {AuthService} from '../services/auth.service.js';

@Pipe({
  name: 'showUsername'
})
export class ShowUsernamePipe implements PipeTransform {

  transform(userName: string){
    return userName.valueOf;
  }

}
