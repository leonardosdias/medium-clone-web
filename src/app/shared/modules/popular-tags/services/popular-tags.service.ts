import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TPolularTag } from 'src/app/shared/interfaces/popular-tag.types';
import { environment } from 'src/environments/environment';
import { IGetPopularTagsResponse } from '../interfaces/get-popular-tags.interface';

@Injectable({
  providedIn: 'root'
})
export class PopularTagsService {

  constructor(
    private http: HttpClient
  ) { }

  getPopultarTags(): Observable<TPolularTag[]> {
    const url = `${environment.apiUrl}/tags`;
    return this.http.get(url)
      .pipe(
        map((response: IGetPopularTagsResponse) => {
          return response.tags;
        })
      );
  }
}
