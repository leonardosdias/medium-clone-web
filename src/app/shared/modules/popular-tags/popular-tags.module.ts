import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { popularTagsReducers } from './store/reducers/popular-tags.reducer';
import { EffectsModule } from '@ngrx/effects';
import { GetPopularTagsEffect } from './store/effects/get-popular-tags-effect';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('popularTags', popularTagsReducers),
    EffectsModule.forFeature([GetPopularTagsEffect]),
  ]
})

export class PopularTagsModule { }
