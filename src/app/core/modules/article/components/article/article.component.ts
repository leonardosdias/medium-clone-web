import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { combineLatest, Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { ICurrentUser } from 'src/app/shared/interfaces/current-user.interface';
import { currentUserSelector } from '../../../auth/store/selectors/auth-selectors';
import { IArticle } from '../../interfaces/article.interface';
import { getArticleAction } from '../../store/actions/article/get-article.actions';
import { deleteArticleAction } from '../../store/actions/article/delete-article.actions';
import { articleDataSelector, articleErrorSelector, isLoadingArticleSelector } from '../../store/selectors/get-article.selector';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})

export class ArticleComponent implements OnInit, OnDestroy {
  slug: string;
  article: IArticle;
  articleSubscription$: Subscription;
  isLoading$: Observable<boolean>;
  isError$: Observable<string | null>;
  isAuthor$: Observable<boolean>;

  constructor(
    private store: Store,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.initializeValues();
    this.initializeListeners();
    this.fetchData();
  }

  ngOnDestroy(): void {
    this.articleSubscription$.unsubscribe();
  }

  initializeValues(): void {
    this.slug = this.activatedRoute.snapshot.paramMap.get('slug');
    this.isLoading$ = this.store.pipe(select(isLoadingArticleSelector));
    this.isError$ = this.store.pipe(select(articleErrorSelector));
    this.validateIfIsAuthor();
  }

  initializeListeners(): void {
    this.articleSubscription$ = this.store
      .pipe((select(articleDataSelector)))
      .subscribe(article => {
        this.article = article
      })
  }

  fetchData(): void {
    this.store.dispatch(getArticleAction({ slug: this.slug }));
  }

  validateIfIsAuthor(): any {
    this.isAuthor$ = combineLatest(
      this.store.pipe(select(articleDataSelector)),
      this.store.pipe(select(currentUserSelector))
    ).pipe(
      map(
        ([article, currentUser]: [
          IArticle | null,
          ICurrentUser | null
        ]) => {
          if (!article || !currentUser) {
            return false
          }
          return currentUser.username === article?.author?.username;
        }
      )
    )
  }

  deleteArticle(): void {
    this.store.dispatch(deleteArticleAction({ slug: this.slug }));
  }
}
