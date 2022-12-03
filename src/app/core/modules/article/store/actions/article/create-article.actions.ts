import { createAction, props } from "@ngrx/store";
import { IAPIErrors } from "src/app/shared/interfaces/api-errors.interface";
import { IArticleInput } from "src/app/core/modules/article/interfaces/article-input.interface";
import { IArticle } from "../../../interfaces/article.interface";
import { CreateArticleActionTypes } from "../types/create-article-actions.types";

export const createArticleAction = createAction(
    CreateArticleActionTypes.CREATE_ARTICLE,
    props<{ articleInput: IArticleInput }>()
);

export const createArticleSuccessAction = createAction(
    CreateArticleActionTypes.CREATE_ARTICLE_SUCCESS,
    props<{ article: IArticle }>()

);

export const createArticleFailureAction = createAction(
    CreateArticleActionTypes.CREATE_ARTICLE_FAILURE,
    props<{ errors: IAPIErrors }>()
);