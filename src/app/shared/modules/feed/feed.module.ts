import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeedRoutingModule } from './feed-routing.module';
import { FeedComponent } from './components/feed/feed.component';
import { FeedService } from './services/feed.service';
import { EffectsModule } from '@ngrx/effects';
import { GetFeedEffect } from './store/effects/get-feed.effect';
import { StoreModule } from '@ngrx/store';
import { feedReducers } from './store/reducers/feed.reducer';

@NgModule({
  declarations: [
    FeedComponent
  ],
  imports: [
    CommonModule,
    FeedRoutingModule,
    StoreModule.forFeature('feed', feedReducers),
    EffectsModule.forFeature([GetFeedEffect])
  ],
  exports: [
    FeedComponent
  ],
  providers: [
    FeedService
  ]
})
export class FeedModule { }
