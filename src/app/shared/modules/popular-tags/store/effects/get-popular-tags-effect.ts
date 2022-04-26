import { Injectable } from "@angular/core";
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { of } from "rxjs";
import { catchError, map, switchMap } from "rxjs/operators";
import { TPolularTag } from "src/app/shared/interfaces/popular-tag.types";

import { PopularTagsService } from "../../services/popular-tags.service";
import { getPopularTagsAction, getPopularTagsSuccessAction, getPopularTagsFailureAction } from "../actions/popular-tags/popular-tags.actions";

@Injectable()
export class GetPopularTagsEffect {
    constructor(
        private actions$: Actions,
        private popularTagsService: PopularTagsService,
    ) { }

    getPopularTags$ = createEffect(() => this.actions$.pipe(
        ofType(getPopularTagsAction),
        switchMap(() => {
            return this.popularTagsService.getPopultarTags()
                .pipe(
                    map((popularTags: TPolularTag[]) => {
                        return getPopularTagsSuccessAction({ popularTags });
                    })
                )
        }),
        catchError(() => {
            return of(getPopularTagsFailureAction());
        })
    ));
}