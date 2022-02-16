import { Component, Input, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IGetFeedResponse } from '../../interfaces/get-feed-response.interface';
import { getFeedAction } from '../../store/actions/feed/feed.actions';
import { feedErrorSelector, feedDataSelector, isLoadingFeedSelector } from '../../store/selectors/feed-selectors';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {
  @Input('apiUrl') apiUrlProps: string;

  feed$: Observable<IGetFeedResponse | null>;
  error$: Observable<string | null>;
  isLoading$: Observable<boolean>;

  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {
    this.initializeValues();
    this.getFeedArticles();
  }

  initializeValues(): void {
    this.feed$ = this.store.pipe(select(feedDataSelector));
    this.error$ = this.store.pipe(select(feedErrorSelector));
    this.isLoading$ = this.store.pipe(select(isLoadingFeedSelector));
  }

  getFeedArticles(): void {
    this.store.dispatch(getFeedAction({ url: this.apiUrlProps }));
  }

}
