import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleService } from './services/article.service';
import { EffectsModule } from '@ngrx/effects';
import { GetArticleEffect } from './store/effects/get-article.effect';
import { ArticleComponent } from './components/article/article.component';
import { ArticleRoutingModule } from './article.routing.module';
import { ActionReducerMap, StoreModule } from '@ngrx/store';
import { articleReducers } from './store/reducers/article.reducer';
import { LoadingModule } from 'src/app/shared/modules/loading/loading.module';
import { ErrorMessageModule } from 'src/app/shared/modules/error-message/error-message.module';
import { TagListModule } from 'src/app/shared/modules/tag-list/tag-list.module';
import { DeletetArticleEffect } from './store/effects/delete-article.effect';
import { CreateArticleComponent } from './components/create-article/create-article.component';
import { CreateArticleEffect } from './store/effects/create-article.effect';
import { createArticleReducers } from './store/reducers/create-article.reducer';
import { IArticleState } from './interfaces/article-state.interface';
import { ICreateArticleState } from './interfaces/create-article.interface';
import { FormCreateArticleComponent } from './components/form-create-article/form-create-article.component';
import { APIErrorMessagesModule } from 'src/app/shared/modules/api-error-messages/api-error-messages.module';
import { ReactiveFormsModule } from '@angular/forms';

interface IReducersArticleState {
  article: IArticleState,
  createArticle: ICreateArticleState
}

export const reducers: ActionReducerMap<IReducersArticleState> = {
  article: articleReducers,
  createArticle: createArticleReducers
};

@NgModule({
  declarations: [
    ArticleComponent,
    CreateArticleComponent,
    FormCreateArticleComponent
  ],
  imports: [
    CommonModule,
    ArticleRoutingModule,
    LoadingModule,
    ErrorMessageModule,
    ReactiveFormsModule,
    TagListModule,
    APIErrorMessagesModule,
    StoreModule.forFeature('article', reducers),
    EffectsModule.forFeature([
      GetArticleEffect, 
      DeletetArticleEffect, 
      CreateArticleEffect
    ])
  ],
  providers: [
    ArticleService
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})

export class ArticleModule { }
