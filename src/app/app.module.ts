import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ReactiveFormsModule} from "@angular/forms";
import {LoginComponentModule} from "./login/login-component.module";
import {DashboardModule} from "./dashboard/dashboard.module";
import {MatButtonModule} from "@angular/material/button";
import {VotingListModule} from "./voting-list/voting-list.module";
import {MatProgressBarModule} from "@angular/material/progress-bar";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    LoginComponentModule,
    DashboardModule,
    MatButtonModule,
    VotingListModule,
    MatProgressBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
