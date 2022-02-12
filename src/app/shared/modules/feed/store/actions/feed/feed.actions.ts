import { createAction, props } from "@ngrx/store";
import { IGetFeedResponse } from "../../../interfaces/get-feed-response.interface";
import { FeedActionTypes } from "../types/feed-actions-types";

export const getFeedAction = createAction(
    FeedActionTypes.GET_FEED,
    props<{ url: string }>()
);

export const getFeedSuccessAction = createAction(
    FeedActionTypes.GET_FEED_SUCCESS,
    props<{ feed: IGetFeedResponse }>()
);

export const getFeedFailureAction = createAction(
    FeedActionTypes.GET_FEED_FAILURE
);