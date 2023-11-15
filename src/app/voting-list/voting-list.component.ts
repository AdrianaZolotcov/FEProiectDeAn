import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-voting-list',
  templateUrl: './voting-list.component.html',
  styleUrls: ['./voting-list.component.scss']
})
export class VotingListComponent implements AfterViewInit {

  @Input() candidates?: any[] | null;
  @Input() userData?: any | null;
  @Input() percentageOfCandidates?: any | null;
  public selectedCandidate: any;
  public candidateForm: FormGroup = new FormGroup({
    selectedCandidate: new FormControl()
  })
  constructor() { }

  ngAfterViewInit() {
  }

  public checkSelected(data: any): void {
    this.selectedCandidate = data;
  }

}
