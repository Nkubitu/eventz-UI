import { Component, OnInit } from '@angular/core'
import { NgModule } from '@angular/core'
import { componentFactoryName } from '@angular/compiler';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({

selector: 'eventPlanning-eventz',
templateUrl: './eventPlanning.component.html'

})

export class EventPlanningComponent implements OnInit{
     

    constructor(private formBuilder: FormBuilder, private seeker: Event){}
     seekerForm = this.formBuilder.group({
         eventName: ['',Validators.required],
         email: ['', [Validators.required, Validators.email]],
         location: [''],
         date: ['']


     })   

    events= ['Wedding', 'Baby Shower','Funeral', 'Graduation']


    ngOnInit(){
        console.log("Starting app");
        }
}