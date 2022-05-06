import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleService } from './services/article.service';
import { EffectsModule } from '@ngrx/effects';
import { GetArticleEffect } from './store/effects/get-article.effect';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EffectsModule.forFeature([GetArticleEffect])
  ],
  providers: [
    ArticleService
  ]
})

export class ArticleModule { }
