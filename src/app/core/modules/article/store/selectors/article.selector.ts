import { createSelector } from "@ngrx/store";
import { IAppState } from "src/app/shared/interfaces/app-state.interface";
import { IArticleState } from "../../interfaces/article-state.interface";

export const articleFeatureSelector = (
    (state: IAppState) => state.article
);

export const isLoadingArticleSelector = createSelector(
    articleFeatureSelector,
    (articleState: IArticleState) => articleState.isLoading
);

export const articleErrorSelector = createSelector(
    articleFeatureSelector,
    (articleState: IArticleState) => articleState.error
);

export const articleDataSelector = createSelector(
    articleFeatureSelector,
    (articleState: IArticleState) => articleState.data
);