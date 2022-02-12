import { Injectable } from "@angular/core";
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { of } from "rxjs";
import { catchError, map, switchMap, tap } from "rxjs/operators";
import { IGetFeedResponse } from "../../interfaces/get-feed-response.interface";

import { FeedService } from "../../services/feed.service";
import { getFeedAction, getFeedFailureAction, getFeedSuccessAction } from "../actions/feed/feed.actions";

@Injectable()
export class GetFeedEffect {
    constructor(
        private actions$: Actions,
        private feedService: FeedService,
    ) {

    }
    getFeed$ = createEffect(() => this.actions$.pipe(
        ofType(getFeedAction),
        switchMap(({ url }) => {
            return this.feedService.getFeed(url).pipe(
                map((feed: IGetFeedResponse) => {
                    return getFeedSuccessAction({ feed });
                })
            )
        }),

        catchError(() => {
            return of(getFeedFailureAction());
        })
    ));
}