import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { YourFeedRoutingModule } from './your-feed-routing.module';
import { YourFeedComponent } from './components/your-feed/your-feed.component';
import { FeedModule } from 'src/app/shared/modules/feed/feed.module';
import { BannerModule } from 'src/app/shared/modules/banner/banner.module';
import { PopularTagsModule } from 'src/app/shared/modules/popular-tags/popular-tags.module';
import { FeedTogglerModule } from 'src/app/shared/modules/feed-toggler/feed-toggler.module';

@NgModule({
  declarations: [
    YourFeedComponent,
  ],
  imports: [
    CommonModule,
    YourFeedRoutingModule,
    FeedModule,
    BannerModule,
    PopularTagsModule,
    FeedTogglerModule
  ]
})

export class YourFeedModule { }
