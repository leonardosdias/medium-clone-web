import { routerNavigatedAction } from "@ngrx/router-store";
import { Action, createReducer, on } from "@ngrx/store";
import { IArticleState } from "../../interfaces/article-state.interface";
import { getArticleAction, getArticleFailureAction, getArticleSuccessAction } from "../actions/article/get-article.actions";

const initialState: IArticleState = {
    data: null,
    isLoading: false,
    error: null,
};

const articleReducer = createReducer(
    initialState,
    on(
        getArticleAction,
        (state): IArticleState => ({
            ...state,
            isLoading: true,
        })
    ),
    on(
        getArticleSuccessAction,
        (state, action): IArticleState => ({
            ...state,
            isLoading: false,
            data: action.article
        })
    ),
    on(
        getArticleFailureAction,
        (state): IArticleState => ({
            ...state,
            isLoading: false,
        })
    ),
    on(routerNavigatedAction, (): IArticleState => initialState)
);

export function articleReducers(stateFeed: IArticleState, action: Action) {
    return articleReducer(stateFeed, action);
}