import { Injectable } from '@angular/core';
import { SharedService } from './shared.service';

@Injectable({
  providedIn: 'root'
})
export class CheckingService {

  constructor(private sharedService : SharedService) { }

 add(n1:number,n2:number){
  
  this.sharedService.addmsg('add operation was done')
  return n1 + n2;
 }
 sub(n1:number,n2:number){
  this.sharedService.addmsg('subtract operation was done')
  return n1-n2;
 }
}
