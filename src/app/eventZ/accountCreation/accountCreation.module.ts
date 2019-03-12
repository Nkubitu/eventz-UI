import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AccountCreationComponent } from './accountCreation.component';
import { AccoutCreationService } from './accountCreation.service';


@NgModule({
    declarations: [
        AccountCreationComponent
    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        FormsModule
    ],

    providers: [AccoutCreationService],
    bootstrap: [AccountCreationComponent]
})
export class AccountCreationModule { }