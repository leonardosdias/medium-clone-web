import { Action, createReducer, on } from "@ngrx/store";
import { ICreateArticleState } from "../../interfaces/create-article.interface";
import { createArticleAction, createArticleSuccessAction, createArticleFailureAction } from "../actions/article/create-article.actions";

const initialState: ICreateArticleState = {
    isSubmitting: false,
    validationErrors: null
};

const createArticleReducer = createReducer(
    initialState,
    on(
        createArticleAction,
        (state): ICreateArticleState => ({
            ...state,
            isSubmitting: true,
        })
    ),
    on(
        createArticleSuccessAction,
        (state): ICreateArticleState => ({
            ...state,
            isSubmitting: false,
        })
    ),
    on(
        createArticleFailureAction,
        (state, action): ICreateArticleState => ({
            ...state,
            isSubmitting: false,
            validationErrors: action.errors
        })
    ),
);

export function createArticleReducers(state: ICreateArticleState, action: Action) {
    // console.log('state: ', state)
    // console.log('action: ', action)
    return createArticleReducer(state, action);
}