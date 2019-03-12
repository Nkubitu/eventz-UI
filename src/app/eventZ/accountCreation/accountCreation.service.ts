import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NGXLoggerMonitor, NGXLogInterface } from 'ngx-logger';


@Injectable()
export class AccoutCreationService {

    constructor(private http: HttpClient, private seekerForm: Event) {
    };

    SubmitEventform() {
        console.log("Submitting form");
        this.http.post("", this.seekerForm)

    }

}

