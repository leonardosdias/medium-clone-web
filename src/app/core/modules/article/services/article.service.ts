import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IArticle, IGetArticleResponse } from 'src/app/shared/interfaces/article.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(
    private http: HttpClient
  ) { }

  getArticle(url: string): Observable<IArticle> {
    const fullUrl = `${environment.apiUrl}/articles/${url}`;
    return this.http.get<IGetArticleResponse>(fullUrl).pipe(
      map((response: IGetArticleResponse) => {
        return response.article;
      })
    )
  }
}
