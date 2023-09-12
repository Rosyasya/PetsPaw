import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FavouriteService {
  constructor(private http: HttpClient) {}
  api_key = 'live_RcW4246MGl8XvhmGIWxPDHVRbDw9K3yAFLvBfPpoSAd8sDesrIbbxY1C6fmPNcVM';
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'x-api-key': this.api_key,
  });
  options = {
    headers: this.headers,
  }

  getFavourite():Observable<any> {
    return this.http.get('https://api.thecatapi.com/v1/favourites', this.options);
  }

  postFavourite(data: any):Observable<any> {
    return this.http.post('https://api.thecatapi.com/v1/favourites', data, this.options);
  }

  deleteFavourite(id: any):Observable<any> {
    return this.http.delete('https://api.thecatapi.com/v1/favourites/' + id, this.options)
  }
}
