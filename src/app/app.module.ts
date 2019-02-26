import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {AppComponent } from './app.component';
import { EventPlanningComponent } from '../app/eventZ/eventPlanning/eventPlanning.component'
import { ServiceListingComponent } from '../app/eventZ/serviceListing/serviceListing.component'

@NgModule({
  declarations: [
    AppComponent,
    EventPlanningComponent,
    ServiceListingComponent

  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
