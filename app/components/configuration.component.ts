import { Component } from '@angular/core';
import { RiderComponent } from './rider.component'’;

@Component({
  selector: 'configuration',
  templateUrl: 'app/view/templates/configuration.html'
})
export class ConfigurationComponent {

  velodrome_length :integer;
  starting_section_length :integer;

  riders: rider_data[];

  constructor(){
    self.velodrome_length = 400;
    self.velodrome_length = 250;
    self.riders=[
      {
        first_name: 'Mario',
        last_name: 'Rossi'
      },
      {
        first_name: 'Mario',
        last_name: 'Verdi'
      },
      {
        first_name: 'Mario',
        last_name: 'Bianchi'
      },
      {
        first_name: 'Sandro',
        last_name: 'Rossi'
      }
    ]
  }


}

interface rider_data{
    first_name: string;
    last_name: string;
}
