import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ServiceListingComponent } from './serviceListing.component';

@NgModule({
  declarations: [
    ServiceListingComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule
  ],

  bootstrap: [ServiceListingComponent]
})
export class ServiceListingModule { }