import {Observable, of} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class VotingService {
  constructor(
    private http: HttpClient
  ) {
  }

  public getCandidatesList(): Observable<any> {
    return this.http.get('http://192.168.1.9:8080/getCandidates')
  }

  public voteForCandidate(candidateData: any): Observable<any> {
    const payload: any = {
      name: candidateData.name,
      surname: candidateData.surname,
      votes: +candidateData.votes++,
    }
    return this.http.post('http://192.168.1.9:8080/voted', payload)
  }

  public sortCandidateList(): Observable<any> {
    return this.http.get('http://192.168.1.9:8080/getCandidatesSort')
  }

  public getCandidateByName(candidate: string): Observable<any> {
    return this.http.get(`http://192.168.1.9:8080/getCandidatesByName?name=${candidate}`)
  }
}
