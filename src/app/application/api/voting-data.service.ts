import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class VotingService{
  constructor(private http: HttpClient) {}
  api_key = 'live_RcW4246MGl8XvhmGIWxPDHVRbDw9K3yAFLvBfPpoSAd8sDesrIbbxY1C6fmPNcVM';

  getImage():Observable<any> {
    return this.http.get('https://api.thecatapi.com/v1/images/search',{headers: {
        'x-api-key': this.api_key
      }});
  }

  getVoting() {
    return this.http.get('https://api.thecatapi.com/v1/votes?limit=10&order=DESC',{headers: {
        'x-api-key': this.api_key
      }});
  }

  postData(data: any) {
    this.http.post('https://api.thecatapi.com/v1/votes', data, {headers: {
        'x-api-key': this.api_key
      }});
  }
}
