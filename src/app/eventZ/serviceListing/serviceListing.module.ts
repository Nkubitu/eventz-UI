import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ServiceListingComponent } from './serviceListing.component';
import { EventPlanningService } from './serviceListing.service';

@NgModule({
  declarations: [
    ServiceListingComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [EventPlanningService],
  bootstrap: [ServiceListingComponent]
})
export class EventPlanningModule { }