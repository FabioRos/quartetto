import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms'
import { AppComponent }   from './app.component';

import { RiderComponent }   from './components/rider.component';
import { ConfigurationComponent }   from './components/configuration.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule],
  declarations: [ AppComponent, RiderComponent, ConfigurationComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
