import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {VotingService} from "../shared/voting.service";
import {BehaviorSubject, combineLatest, debounceTime, map, switchMap} from "rxjs";
import {FormControl, FormGroup} from "@angular/forms";
import {VotingListComponent} from "../voting-list/voting-list.component";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [VotingService]
})
export class DashboardComponent implements OnInit {
  @ViewChild('votingListComponent') votingListComponent: VotingListComponent | null | undefined;
  public userData: any;
  public listOfCandidates: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  public percentageOfCandidatesSubject: BehaviorSubject<any> = new BehaviorSubject([]);
  public searchForm: FormGroup = new FormGroup({
    candidateName: new FormControl()
  });
  public candidateForm: FormGroup = new FormGroup({
    selectedCandidate: new FormControl()
  })
  constructor(
    private router: Router,
    private votingSrvc: VotingService
  ) { }

  ngOnInit(): void {
    this.getCandidatesList();
    this.searchCandidateByValue();
    const user: any = localStorage.getItem('userData');
    this.userData = JSON.parse(user);
  }

  private searchCandidateByValue(): void {
    const { candidateName } = this.searchForm.controls;

    combineLatest([candidateName.valueChanges, this.votingSrvc.getCandidatesList()])
      .pipe(
        debounceTime(800),
        switchMap(item => {
          return this.votingSrvc.getCandidateByName(item[0])
        }),
      )
      .subscribe(items => {
        this.listOfCandidates.next(items)
      })
  }

  public sortByRates(): void {
    this.votingSrvc.sortCandidateList().subscribe(data => {
      this.listOfCandidates.next(data);
    })
  }
  public logOut(): void {
    localStorage.clear();
    this.router.navigate([''])
  }

  public voteForCandidate(): void {
    this.votingSrvc.voteForCandidate(this.votingListComponent?.selectedCandidate).subscribe(item => {
      this.listOfCandidates.next(item);
      this.userData.voted = true;
      localStorage.setItem('userData', JSON.stringify(this.userData));
    });
  }

  private getCandidatesList(): void {
    this.votingSrvc.getCandidatesList().subscribe(data => {
      this.listOfCandidates.next(data)
    })
  }
}
