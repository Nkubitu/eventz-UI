import { Component, OnInit } from '@angular/core'
import { NgModule } from '@angular/core'
import { componentFactoryName } from '@angular/compiler';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EventPlanningService } from './eventPlanning.service'


@Component({

    selector: 'eventPlanning-eventz',
    templateUrl: './eventPlanning.component.html',
    styleUrls: ['./eventPlanning.component.scss']

})

export class EventPlanningComponent implements OnInit {

    public seekerForm: FormGroup;
    my: FormGroup;

    constructor(private formBuilder: FormBuilder,
        private seeker: Event,
        private seekerService: EventPlanningService) { }

    ngOnInit() {
        console.log("Starting app");
        this.seekerForm = new FormGroup({
            firstName: new FormControl(['', Validators.required]),
            lastName: new FormControl(['', Validators.required]),
            phoneNumber: new FormControl(['', Validators.required]),
            email: new FormControl(['', Validators.required]),
            date: new FormControl(['', Validators.required]),
            location: new FormControl(['', Validators.required]),
            eventName: new FormControl(['', Validators.required]),
        });
    }

    onFormSubmit() {
        if (this.seekerForm.valid) {
            this.seekerService.SubmitEventform()
        }

    }
}