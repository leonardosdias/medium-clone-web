import { Action, createReducer, on } from "@ngrx/store";
import { IPopularTagsState } from "../../interfaces/popular-tags-state.interface";
import { getPopularTagsAction, getPopularTagsFailureAction, getPopularTagsSuccessAction } from "../actions/popular-tags/popular-tags.actions";

const initialState: IPopularTagsState = {
    data: null,
    isLoading: false,
    error: null
};

const popularTagsReducer = createReducer(
    initialState,
    on(
        getPopularTagsAction,
        (state): IPopularTagsState => ({
            ...state,
            isLoading: true
        })
    ),
    on(
        getPopularTagsSuccessAction,
        (state, action): IPopularTagsState => ({
            ...state,
            isLoading: false,
            data: action.popularTags
        })
    ),
    on(
        getPopularTagsFailureAction,
        (state): IPopularTagsState => ({
            ...state,
            isLoading: false
        })
    ),
);

export function popularTagsReducers(state: IPopularTagsState, action: Action) {
    return popularTagsReducer(state, action);
};