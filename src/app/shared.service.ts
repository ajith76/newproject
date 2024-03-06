import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }
messages:string[] = [];

addmsg(message:string){
  this.messages.push(message);
}
clear(){
  this.messages = [];
}
}
