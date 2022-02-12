import { Action, createReducer, on } from "@ngrx/store";
import { IFeedState } from "../../interfaces/feed-state.interface";
import { getFeedAction, getFeedFailureAction, getFeedSuccessAction } from "../actions/feed/feed.actions";

const initialState: IFeedState = {
    data: null,
    isLoadding: false,
    error: null,
};

const feedReducer = createReducer(
    initialState,
    on(
        getFeedAction,
        (state): IFeedState => ({
            ...state,
            isLoadding: true,
        })
    ),
    on(
        getFeedSuccessAction,
        (state, action): IFeedState => ({
            ...state,
            isLoadding: true,
            data: action.feed
        })
    ),
    on(
        getFeedFailureAction,
        (state): IFeedState => ({
            ...state,
            isLoadding: false,
        })
    ),
);

export function feedReducers(state: IFeedState, action: Action) {
    return feedReducer(state, action);
}