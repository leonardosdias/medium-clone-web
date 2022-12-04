import { createAction, props } from "@ngrx/store";
import { IArticle } from "src/app/core/modules/article/interfaces/article.interface";
import { ArticleActionTypes } from "../types/get-article-actions.types";

export const getArticleAction = createAction(
    ArticleActionTypes.GET_ARTICLE,
    props<{ slug: string }>()
);

export const getArticleSuccessAction = createAction(
    ArticleActionTypes.GET_ARTICLE_SUCCESS,
    props<{ article: IArticle }>()
);

export const getArticleFailureAction = createAction(
    ArticleActionTypes.GET_ARTICLE_FAILURE
);