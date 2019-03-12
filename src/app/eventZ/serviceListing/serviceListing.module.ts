import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ServiceListingComponent } from './serviceListing.component';
import { ServiceListingService } from './serviceListing.service';

@NgModule({
  declarations: [
    ServiceListingComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [ServiceListingService],
  bootstrap: [ServiceListingComponent]
})
export class ServiceListingModule { }