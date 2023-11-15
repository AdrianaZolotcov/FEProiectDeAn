import { NgModule } from '@angular/core';
import {VotingListComponent} from "./voting-list.component";
import {BrowserModule} from "@angular/platform-browser";
import {AppRoutingModule} from "../app-routing.module";
import {ReactiveFormsModule} from "@angular/forms";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatCardModule} from "@angular/material/card";
import {MatRadioModule} from "@angular/material/radio";


@NgModule({
  declarations: [
    VotingListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatProgressBarModule,
    MatCardModule,
    MatRadioModule,
  ],
  providers: [],
  exports: [
    VotingListComponent
  ]
})

export class VotingListModule {}
