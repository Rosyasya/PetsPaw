import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CatDataService{
  constructor(private http: HttpClient) {}
  api_key = 'live_RcW4246MGl8XvhmGIWxPDHVRbDw9K3yAFLvBfPpoSAd8sDesrIbbxY1C6fmPNcVM';

  getData():Observable<any> {
    return this.http.get('https://api.thecatapi.com/v1/breeds',{headers: {
        'x-api-key': this.api_key
      }});
  }
}
