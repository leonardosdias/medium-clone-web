import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleService } from './services/article.service';
import { EffectsModule } from '@ngrx/effects';
import { GetArticleEffect } from './store/effects/get-article.effect';
import { ArticleComponent } from './components/article/article.component';
import { ArticleRoutingModule } from './article.routing.module';
import { StoreModule } from '@ngrx/store';
import { articleReducers } from './store/reducers/article.reducer';
import { LoadingModule } from 'src/app/shared/modules/loading/loading.module';
import { ErrorMessageModule } from 'src/app/shared/modules/error-message/error-message.module';
import { TagListModule } from 'src/app/shared/modules/tag-list/tag-list.module';

@NgModule({
  declarations: [
    ArticleComponent
  ],
  imports: [
    CommonModule,
    ArticleRoutingModule,
    LoadingModule,
    ErrorMessageModule,
    TagListModule,
    StoreModule.forFeature('article', articleReducers),
    EffectsModule.forFeature([GetArticleEffect])
  ],
  providers: [
    ArticleService
  ]
})

export class ArticleModule { }
