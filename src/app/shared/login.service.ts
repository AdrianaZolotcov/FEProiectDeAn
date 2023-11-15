import {Observable, of} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class LoginService {
  constructor(
    private http: HttpClient
  ) {
  }

  public signIn(name: string, surname: string, group: string): Observable<any> {
    const payload: {name: string, surname: string, group: string } = { name, surname, group }
    return this.http.post('http://192.168.1.9:8080/login', payload);
  }
}
