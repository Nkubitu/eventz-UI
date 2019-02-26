import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { EventPlanningComponent } from './eventPlanning.component';


@NgModule({
  declarations: [
    EventPlanningComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule
  ],
 
  bootstrap: [EventPlanningComponent]
})
export class EventPlanningModule { }