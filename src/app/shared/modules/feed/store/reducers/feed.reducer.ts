import { routerNavigatedAction } from "@ngrx/router-store";
import { Action, createReducer, on } from "@ngrx/store";
import { IFeedState } from "../../interfaces/feed-state.interface";
import { getFeedAction, getFeedFailureAction, getFeedSuccessAction } from "../actions/feed/feed.actions";

const initialState: IFeedState = {
    data: null,
    isLoading: false,
    error: null,
};

const feedReducer = createReducer(
    initialState,
    on(
        getFeedAction,
        (state): IFeedState => ({
            ...state,
            isLoading: true,
        })
    ),
    on(
        getFeedSuccessAction,
        (state, action): IFeedState => ({
            ...state,
            isLoading: false,
            data: action.feed
        })
    ),
    on(
        getFeedFailureAction,
        (state): IFeedState => ({
            ...state,
            isLoading: false,
        })
    ),
    on(routerNavigatedAction, (): IFeedState => initialState)
);

export function feedReducers(stateFeed: IFeedState, action: Action) {
    return feedReducer(stateFeed, action);
}