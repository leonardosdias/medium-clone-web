import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeedRoutingModule } from './feed-routing.module';
import { FeedComponent } from './components/feed/feed.component';
import { FeedService } from './services/feed.service';
import { EffectsModule } from '@ngrx/effects';
import { GetFeedEffect } from './store/effects/get-feed.effect';
import { StoreModule } from '@ngrx/store';
import { feedReducers } from './store/reducers/feed.reducer';
import { BannerModule } from '../banner/banner.module';
import { ErrorMessageModule } from '../error-message/error-message.module';
import { LoadingModule } from '../loading/loading.module';
import { PaginationModule } from '../pagination/pagination.module';
import { TagListModule } from '../tag-list/tag-list.module';

@NgModule({
  declarations: [
    FeedComponent
  ],
  imports: [
    CommonModule,
    FeedRoutingModule,
    BannerModule,
    ErrorMessageModule,
    LoadingModule,
    PaginationModule,
    TagListModule,
    StoreModule.forFeature('feed', feedReducers),
    EffectsModule.forFeature([GetFeedEffect])
  ],
  exports: [
    FeedComponent
  ],
  providers: [
    FeedService
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class FeedModule { }
