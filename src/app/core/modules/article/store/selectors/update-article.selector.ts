import { createSelector } from "@ngrx/store";
import { IAppState } from "src/app/shared/interfaces/app-state.interface";
import { IUpdateArticleState } from "../../interfaces/update-article.interface";

export const updateArticleFeatureSelector = (
    (state: IAppState) => state.updateArticle
);

export const getArticleSelector = createSelector(
    updateArticleFeatureSelector,
    (updateArticleState: IUpdateArticleState) => updateArticleState.article
);

export const isLoadingArticleSelector = createSelector(
    updateArticleFeatureSelector,
    (updateArticleState: IUpdateArticleState) => updateArticleState.isLoading
);

export const isSubmittingCreateArticleSelector = createSelector(
    updateArticleFeatureSelector,
    (updateArticleState: IUpdateArticleState) => updateArticleState.isSubmitting
);

export const validationErrorsCreateArticleErrorSelector = createSelector(
    updateArticleFeatureSelector,
    (updateArticleState: IUpdateArticleState) => updateArticleState.validationErrors
);
