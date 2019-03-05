import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { EventPlanningComponent } from './eventPlanning.component';
import { EventPlanningService } from './eventPlanning.service';


@NgModule({
  declarations: [
    EventPlanningComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [EventPlanningService],

  bootstrap: [EventPlanningComponent]
})
export class EventPlanningModule { }