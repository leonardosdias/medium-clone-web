import { createAction, props } from "@ngrx/store";
import { IAPIErrors } from "src/app/shared/interfaces/api-errors.interface";
import { IArticleInput } from "src/app/core/modules/article/interfaces/article-input.interface";
import { IArticle } from "../../../interfaces/article.interface";
import { UpdateArticleActionTypes } from "../types/update-article-actions.types";

export const updateArticleAction = createAction(
    UpdateArticleActionTypes.UPDATE_ARTICLE,
    props<{ slug: string, articleInput: IArticleInput }>()
);

export const updateArticleSuccessAction = createAction(
    UpdateArticleActionTypes.UPDATE_ARTICLE_SUCCESS,
    props<{ article: IArticle }>()

);

export const updateArticleFailureAction = createAction(
    UpdateArticleActionTypes.UPDATE_ARTICLE_FAILURE,
    props<{ errors: IAPIErrors }>()
);