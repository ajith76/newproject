import { Component } from '@angular/core';

@Component({
  selector: '[app-users]',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  funcmt = `Nope you're not the guy bruhhhhh!!!!!......`
  funStatus = 'overloaded'

  getfunStatus(){
    return this.funStatus
  }
}
