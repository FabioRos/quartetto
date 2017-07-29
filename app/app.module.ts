import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';

import { RiderComponent }   from './components/rider.component';


@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, RiderComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
