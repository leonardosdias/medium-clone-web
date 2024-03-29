import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IGetFeedResponse } from '../interfaces/get-feed-response.interface';

@Injectable({
  providedIn: 'root'
})
export class FeedService {

  constructor(
    private http: HttpClient
  ) { }

  getFeed(url: string): Observable<IGetFeedResponse> {
    const fullUrl = `${environment.apiUrl}/${url}`;
    return this.http.get<IGetFeedResponse>(fullUrl);
  }
}
