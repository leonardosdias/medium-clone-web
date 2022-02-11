import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { of } from "rxjs";
import { catchError, map, switchMap, tap } from "rxjs/operators";
import { PersistenceService } from "src/app/shared/services/persistence.service";
import { ICurrentUser } from "src/app/shared/interfaces/current-user.interface";
import { AuthService } from "../../../services/auth.service";

import { loginAction, loginFailureAction, loginSuccessAction } from "../../actions/login/login.actions";

@Injectable()
export class LoginEffect {
    constructor(
        private actions$: Actions,
        private authService: AuthService,
        private persistenceService: PersistenceService,
        private router: Router
    ) {

    }
    login$ = createEffect(() => this.actions$.pipe(
        ofType(loginAction),
        switchMap(({ request }) => {
            return this.authService.login(request).pipe(
                map((currentUser: ICurrentUser) => {
                    this.persistenceService.set('accessToken', currentUser.token);
                    return loginSuccessAction({ currentUser })
                })
            )
        }),

        catchError((errorResponse: HttpErrorResponse) => {
            return of(loginFailureAction({ errors: errorResponse.error.errors }));
        })
    ));

    redirectAfterSubmit$ = createEffect(() => this.actions$.pipe(
        ofType(loginSuccessAction),
        tap(() => {
            this.router.navigateByUrl('/');
        })
    ),
        { dispatch: false }
    );

}