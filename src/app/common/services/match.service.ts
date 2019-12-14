import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Match} from '../interfaces/match';
import {environment} from '../../../environments/environment';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MatchService {
  constructor(private http: HttpClient) {
  }

  list(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'X-Auth-Token': environment.apiKey
      })
    };
    return this.http.get('https://api.football-data.org/v2/competitions/CL/matches', httpOptions).pipe(
      map((res) => {
        return res;
      })
    );
  }

  show(id: number): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'X-Auth-Token': environment.apiKey
      })
    };
    return this.http.get('https://api.football-data.org/v2/matches/' + id, httpOptions).pipe(
      map((res) => {
        return res;
      })
    );
  }
}
