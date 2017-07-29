import { Component } from '@angular/core';

@Component({
  selector: 'rider',
  template: '<p>Rider: {{last_name}} {{first_name}}</p>'
})
export class RiderComponent {
  first_name: string;
  last_name: string;


  constructor(){
    this.first_name = 'fn';
    this.last_name = 'ln';
  }


}
