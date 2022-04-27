import { createSelector } from "@ngrx/store";
import { IAppState } from "src/app/shared/interfaces/app-state.interface";
import { IPopularTagsState } from "../../interfaces/popular-tags-state.interface";

export const popularTagsFeatureSelector = (
    (state: IAppState) => state.popularTags
);

export const popularTagsSelector = createSelector(
    popularTagsFeatureSelector,
    (popularTagsState: IPopularTagsState) => popularTagsState.data
);

export const isLoadingPopularTagsSelector = createSelector(
    popularTagsFeatureSelector,
    (popularTagsState: IPopularTagsState) => popularTagsState.isLoading
);

export const errorPopularTagsSelector = createSelector(
    popularTagsFeatureSelector,
    (popularTagsState: IPopularTagsState) => popularTagsState.error
);

