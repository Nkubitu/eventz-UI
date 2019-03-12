import { Routes } from '@angular/router';
import  { AccountCreationComponent } from '../accountCreation/accountCreation.component';
import  { LoginComponent } from '../login/login.component';
import  { ServiceProviderComponent } from '../serviceProvider/serviceProvider.component';
import  { ServiceListingComponent } from '../serviceListing/serviceListing.component';
import  { EventPlanningComponent } from '../eventPlanning/eventPlanning.component';
import  { AppComponent } from '../../app.component';

export class RouterModuleConfig {
    static routes:Routes = [
        { path: 'accountCreation', component: AccountCreationComponent },
        { path: 'login', component: LoginComponent },
        { path: 'serviceProvider', component: ServiceProviderComponent },
        { path: 'serviceListing', component: ServiceListingComponent },
        { path: 'eventPlanning', component: EventPlanningComponent },
        { path: '', component: AppComponent },
        { path: '**', component: AppComponent}
    ];
}