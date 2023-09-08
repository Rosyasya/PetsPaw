import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {forkJoin, map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class VotingService{
  constructor(private http: HttpClient) {}
  api_key = 'live_RcW4246MGl8XvhmGIWxPDHVRbDw9K3yAFLvBfPpoSAd8sDesrIbbxY1C6fmPNcVM';
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'x-api-key': this.api_key,
  });
  options = {
    headers: this.headers,
  }

  getData():Observable<any> {
    return forkJoin(this.getImage(), this.getVoting());
  }

  getImage():Observable<any> {
    return this.http.get('https://api.thecatapi.com/v1/images/search', this.options);
  }

  getVoting():Observable<any> {
    return this.http.get('https://api.thecatapi.com/v1/votes?limit=10&order=DESC', this.options);
  }

  postData(data: any):Observable<any> {
    return this.http.post('https://api.thecatapi.com/v1/votes', data, this.options)
      .pipe(map((response: any) => response));
  }
}
