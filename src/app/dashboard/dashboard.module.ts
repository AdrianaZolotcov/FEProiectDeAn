import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {DashboardComponent} from "./dashboard.component";
import {AppRoutingModule} from "../app-routing.module";
import {ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {VotingListModule} from "../voting-list/voting-list.module";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatButtonModule,
    VotingListModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
})

export class DashboardModule {}
