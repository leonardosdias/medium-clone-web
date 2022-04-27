import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { TPolularTag } from 'src/app/shared/interfaces/popular-tag.types';
import { getPopularTagsAction } from '../../store/actions/popular-tags/popular-tags.actions';
import { errorPopularTagsSelector, isLoadingPopularTagsSelector, popularTagsSelector } from '../../store/selectors/popular-tags-selectors';

@Component({
  selector: 'app-popular-tags',
  templateUrl: './popular-tags.component.html',
  styleUrls: ['./popular-tags.component.scss']
})
export class PopularTagsComponent implements OnInit {
  popularTags$: Observable<TPolularTag[] | null>;
  isLoading$: Observable<boolean>;
  error$: Observable<string | null>;

  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {
   this.initializeValues();
   this.fetchData();
  }

  initializeValues():void {
    this.popularTags$ = this.store.pipe(select(popularTagsSelector));
    this.isLoading$ = this.store.pipe(select(isLoadingPopularTagsSelector));
    this.error$ = this.store.pipe(select(errorPopularTagsSelector));
  }

  fetchData():void {
    this.store.dispatch(getPopularTagsAction());
  }
 
}
