import { createAction, props } from "@ngrx/store";
import { DeleteArticleActionTypes } from "../types/delete-article-actions.types";

export const deleteArticleAction = createAction(
    DeleteArticleActionTypes.DELETE_ARTICLE,
    props<{ slug: string }>()
);

export const deleteArticleSuccessAction = createAction(
    DeleteArticleActionTypes.DELETE_ARTICLE_SUCCESS,
);

export const deleteArticleFailureAction = createAction(
    DeleteArticleActionTypes.DELETE_ARTICLE_FAILURE
);