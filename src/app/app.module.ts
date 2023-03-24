import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppointmentsComponent } from './components/appointments/appointments.component';

@NgModule({
  declarations: [
    AppComponent,
    AppointmentsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
