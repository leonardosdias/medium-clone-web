import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TagFeedRoutingModule } from './tag-feed-routing.module';
import { TagFeedComponent } from './components/tag-feed/tag-feed.component';
import { FeedModule } from 'src/app/shared/modules/feed/feed.module';
import { BannerModule } from 'src/app/shared/modules/banner/banner.module';
import { PopularTagsModule } from 'src/app/shared/modules/popular-tags/popular-tags.module';
import { FeedTogglerModule } from 'src/app/shared/modules/feed-toggler/feed-toggler.module';

@NgModule({
  declarations: [
    TagFeedComponent,
  ],
  imports: [
    CommonModule,
    TagFeedRoutingModule,
    FeedModule,
    BannerModule,
    PopularTagsModule,
    FeedTogglerModule
  ]
})

export class TagFeedModule { }
