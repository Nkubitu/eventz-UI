import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AccountCreationComponent } from './accountCreation.component';


@NgModule({
  declarations: [
    AccountCreationComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule
  ],
  bootstrap: [AccountCreationComponent]
})
export class AccountCreationModule { }