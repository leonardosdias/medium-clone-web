import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IArticle, IGetArticleResponse } from 'src/app/core/modules/article/interfaces/article.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(
    private http: HttpClient
  ) { }

  getArticle(slug: string): Observable<IArticle | IGetArticleResponse> {
    const fullUrl = `${environment.apiUrl}/articles/${slug}`;
    return this.http.get<IGetArticleResponse>(fullUrl)
      .pipe(
        map((response: IGetArticleResponse) => {
          return response.article;
        })
      )
  }

  deleteArticle(slug: string): Observable<{}> {
    const fullUrl = `${environment.apiUrl}/articles/${slug}`;

    return this.http.delete<{}>(fullUrl);
  }
}
