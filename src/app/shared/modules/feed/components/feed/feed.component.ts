import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { stringify, parseUrl } from 'query-string';

import { environment } from 'src/environments/environment';
import { IGetFeedResponse } from '../../interfaces/get-feed-response.interface';
import { getFeedAction } from '../../store/actions/feed/feed.actions';
import { feedErrorSelector, feedDataSelector, isLoadingFeedSelector } from '../../store/selectors/feed-selectors';
@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})

export class FeedComponent implements OnInit, OnDestroy {
  @Input('apiUrl') apiUrlProps: string;

  feed$: Observable<IGetFeedResponse | null>;
  error$: Observable<string | null>;
  isLoading$: Observable<boolean>;
  limit = environment.limit;
  baseUrl: string;
  queryParamsSubscription: Subscription;
  currentPage: number;

  constructor(
    private store: Store,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.initializeValues();
    this.initializeListeners();
  }

  ngOnDestroy(): void {
    this.queryParamsSubscription.unsubscribe();
  }

  initializeListeners() {
    this.queryParamsSubscription = this.activatedRoute.queryParams.subscribe(
      (params: Params) => {
        this.currentPage = Number(params.page || '1');
        this.getFeedArticles();
      }
    );
  }

  initializeValues(): void {
    this.feed$ = this.store.pipe(select(feedDataSelector));
    this.error$ = this.store.pipe(select(feedErrorSelector));
    this.isLoading$ = this.store.pipe(select(isLoadingFeedSelector));
    this.baseUrl = this.router.url.split('?')[0];
  }

  getFeedArticles(): void {
    const offset = this.currentPage * this.limit - this.limit;
    const parsedUrl = parseUrl(this.apiUrlProps);
    const stringFieldParams = stringify(
      {
        limit: this.limit,
        offset,
        ...parsedUrl.query
      }
    );

    const apiUrlWithParams = `${parsedUrl.url}?${stringFieldParams}`;

    this.store.dispatch(getFeedAction({ url: apiUrlWithParams }));
  }
}
