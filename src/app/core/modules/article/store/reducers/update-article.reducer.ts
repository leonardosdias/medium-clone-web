import { Action, createReducer, on } from "@ngrx/store";
import { IUpdateArticleState } from "../../interfaces/update-article.interface";
import { updateArticleAction, updateArticleSuccessAction, updateArticleFailureAction } from "../actions/article/update-article.actions";

const initialState: IUpdateArticleState = {
    isLoading: false,
    article: null,
    isSubmitting: false,
    validationErrors: null
};

const updateArticleReducer = createReducer(
    initialState,
    on(
        updateArticleAction,
        (state): IUpdateArticleState => ({
            ...state,
            isSubmitting: true,
        })
    ),
    on(
        updateArticleSuccessAction,
        (state): IUpdateArticleState => ({
            ...state,
            isSubmitting: false,
        })
    ),
    on(
        updateArticleFailureAction,
        (state, action): IUpdateArticleState => ({
            ...state,
            isSubmitting: false,
            validationErrors: action.errors
        })
    ),
);

export function updateArticleReducers(state: IUpdateArticleState, action: Action) {
    return updateArticleReducer(state, action);
}