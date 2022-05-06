import { createAction, props } from "@ngrx/store";
import { IGetArticleResponse } from "src/app/shared/interfaces/article.interface";
import { ArticleActionTypes } from "../types/article-actions.types";

export const getArticleAction = createAction(
    ArticleActionTypes.GET_ARTICLE,
    props<{ slug: string }>()
);

export const getArticleSuccessAction = createAction(
    ArticleActionTypes.GET_ARTICLE_SUCCESS,
    props<{ article: IGetArticleResponse }>()
);

export const getArticleFailureAction = createAction(
    ArticleActionTypes.GET_ARTICLE_FAILURE
);