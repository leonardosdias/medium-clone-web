import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { of } from "rxjs";
import { catchError, map, switchMap, tap } from "rxjs/operators";
import { PersistenceService } from "src/app/shared/services/persistence.service";
import { ICurrentUser } from "src/app/shared/interfaces/current-user.interface";
import { AuthService } from "../../../services/auth.service";

import { registerAction, registerFailureAction, registerSuccessAction } from "../../actions/register/register.actions";

@Injectable()
export class RegisterEffect {
    constructor(
        private actions$: Actions,
        private authService: AuthService,
        private persistenceService: PersistenceService,
        private router: Router
    ) {

    }
    register$ = createEffect(() => this.actions$.pipe(
        ofType(registerAction),
        switchMap(({ request }) => {
            return this.authService.register(request).pipe(
                map((currentUser: ICurrentUser) => {
                    this.persistenceService.set('accessToken', currentUser.token);
                    return registerSuccessAction({ currentUser })
                })
            )
        }),

        catchError((errorResponse: HttpErrorResponse) => {
            return of(registerFailureAction({ errors: errorResponse.error.errors }));
        })
    ));

    redirectAfterSubmit$ = createEffect(() => this.actions$.pipe(
        ofType(registerSuccessAction),
        tap(() => {
            this.router.navigateByUrl('/');
        })
    ),
        { dispatch: false }
    );

}