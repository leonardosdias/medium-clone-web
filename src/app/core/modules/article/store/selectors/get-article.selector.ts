import { createSelector } from "@ngrx/store";
import { IAppState } from "src/app/shared/interfaces/app-state.interface";
import { IArticleState } from "../../interfaces/article-state.interface";

export const getArticleFeatureSelector = (
    (state: IAppState) => state.article
);

export const isLoadingArticleSelector = createSelector(
    getArticleFeatureSelector,
    (articleState: IArticleState) => articleState.isLoading
);

export const articleErrorSelector = createSelector(
    getArticleFeatureSelector,
    (articleState: IArticleState) => articleState.error
);

export const articleDataSelector = createSelector(
    getArticleFeatureSelector,
    (articleState: IArticleState) => articleState.data
);