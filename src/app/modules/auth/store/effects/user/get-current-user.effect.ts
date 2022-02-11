import { Injectable } from "@angular/core";
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { of } from "rxjs";
import { catchError, map, switchMap } from "rxjs/operators";
import { PersistenceService } from "src/app/shared/services/persistence.service";
import { ICurrentUser } from "src/app/shared/interfaces/current-user.interface";
import { AuthService } from "../../../services/auth.service";

import { getCurrentUserAction, getCurrentUserFailureAction, getCurrentUserSuccessAction } from "../../actions/user/get-current-user.action";

@Injectable()
export class GetCurrentUserEffect {
    constructor(
        private actions$: Actions,
        private authService: AuthService,
        private persistenceService: PersistenceService
    ) {

    }
    getCurrentUser$ = createEffect(() => this.actions$.pipe(
        ofType(getCurrentUserAction),
        switchMap(() => {
            const token = this.persistenceService.get('accessToken');

            if (!token) {
                return of(getCurrentUserFailureAction());
            }

            return this.authService.getCurrentUser().pipe(
                map((currentUser: ICurrentUser) => {
                    return getCurrentUserSuccessAction({ currentUser })
                })
            )
        }),

        catchError(() => {
            return of(getCurrentUserFailureAction());
        })
    ));
}