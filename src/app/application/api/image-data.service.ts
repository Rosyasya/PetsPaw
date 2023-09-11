import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  constructor(private http: HttpClient) {}
  api_key = 'live_RcW4246MGl8XvhmGIWxPDHVRbDw9K3yAFLvBfPpoSAd8sDesrIbbxY1C6fmPNcVM';
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'x-api-key': this.api_key,
  });
  options = {
    headers: this.headers,
  }

  getImage():Observable<any> {
    return this.http.get('https://api.thecatapi.com/v1/images/search', this.options);
  }

  getLimitedImage():Observable<any> {
    return this.http.get('https://api.thecatapi.com/v1/images/search?limit=10', this.options);
  }
}
