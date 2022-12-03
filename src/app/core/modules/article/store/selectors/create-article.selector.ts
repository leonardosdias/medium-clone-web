import { createSelector } from "@ngrx/store";
import { IAppState } from "src/app/shared/interfaces/app-state.interface";
import { ICreateArticleState } from "../../interfaces/create-article.interface";

export const createArticleFeatureSelector = (
    (state: IAppState) => state.createArticle
);

export const isSubmittingCreateArticleSelector = createSelector(
    createArticleFeatureSelector,
    (createArticleState: ICreateArticleState) => createArticleState.isSubmitting
);

export const validationErrorsCreateArticleErrorSelector = createSelector(
    createArticleFeatureSelector,
    (createArticleState: ICreateArticleState) => createArticleState.validationErrors
);
