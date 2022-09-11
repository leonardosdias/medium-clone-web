import {createSelector } from "@ngrx/store";
import { IAppState } from "src/app/shared/interfaces/app-state.interface";
import { IFeedState } from "../../interfaces/feed-state.interface";

export const feedFeatureSelector = (
    (state: IAppState) => state.feed
);

export const isLoadingFeedSelector = createSelector(
    feedFeatureSelector,
    (feedState: IFeedState) => feedState.isLoading
);

export const feedErrorSelector = createSelector(
    feedFeatureSelector,
    (feedState: IFeedState) => feedState.error
);

export const feedDataSelector = createSelector(
    feedFeatureSelector,
    (feedState: IFeedState) => feedState.data
);