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
import { DeletetArticleEffect } from './store/effects/delete-article.effect';
import { CreateArticleComponent } from './components/create-article/create-article.component';

@NgModule({
  declarations: [
    ArticleComponent,
    CreateArticleComponent
  ],
  imports: [
    CommonModule,
    ArticleRoutingModule,
    LoadingModule,
    ErrorMessageModule,
    TagListModule,
    StoreModule.forFeature('article', articleReducers),
    EffectsModule.forFeature([GetArticleEffect, DeletetArticleEffect])
  ],
  providers: [
    ArticleService
  ]
})

export class ArticleModule { }
