import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ServiceProviderComponent } from './serviceProvider.component';
import { ServiceProviderService } from './serviceProvider.service';

@NgModule({
  declarations: [
    ServiceProviderComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [ServiceProviderService],
  bootstrap: [ServiceProviderComponent]
})
export class ServiceProviderModule { }