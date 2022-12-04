import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IArticle, IGetArticleResponse } from 'src/app/core/modules/article/interfaces/article.interface';
import { IArticleInput } from 'src/app/core/modules/article/interfaces/article-input.interface';
import { environment } from 'src/environments/environment';
import { ISaveArticleResponse } from '../interfaces/save-article-response.interface';

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

  createArticle(articleInput: IArticleInput): Observable<IArticle> {
    const fullUrl = `${environment.apiUrl}/articles`;

    return this.http
      .post<ISaveArticleResponse>(fullUrl, { article: articleInput })
      .pipe(
        map((response: ISaveArticleResponse) => {
          return response.article
        })
      );
  }

  updateArticle(slug: string, articleInput: IArticleInput): Observable<IArticle> {
    const fullUrl = `${environment.apiUrl}/articles/${slug}`;

    return this.http
      .put<ISaveArticleResponse>(fullUrl, { article: articleInput })
      .pipe(
        map((response: ISaveArticleResponse) => {
          return response.article
        })
      );
  }
}
