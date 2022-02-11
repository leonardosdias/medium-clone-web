import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GlobalFeedRoutingModule } from './global-feed-routing.module';
import { GlobalFeedComponent } from './components/global-feed/global-feed.component';
import { FeedComponent } from 'src/app/shared/modules/feed/components/feed/feed.component';
import { FeedModule } from 'src/app/shared/modules/feed/feed.module';


@NgModule({
  declarations: [
    GlobalFeedComponent,
  ],
  imports: [
    CommonModule,
    GlobalFeedRoutingModule,
    FeedModule
  ]
})
export class GlobalFeedModule { }
