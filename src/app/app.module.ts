import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EventPlanningModule }  from './eventZ/eventPlanning/eventPlanning.module';
import { ServiceListingModule }  from './eventZ/serviceListing/serviceListing.module';
import { ServiceProviderModule } from './eventZ/serviceProvider/serviceProvider.module';
import { LoginModule } from './eventZ/login/login.module';
import { AccountCreationModule } from './eventZ/accountCreation/accountCreation.module';
import { RouterModule } from '@angular/router';
import { RouterModuleConfig } from './eventZ/config/routerModuleConfig';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    ServiceListingModule,
    EventPlanningModule,
    ServiceProviderModule,
    LoginModule,
    AccountCreationModule,
    RouterModule.forRoot(RouterModuleConfig.routes, {}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
