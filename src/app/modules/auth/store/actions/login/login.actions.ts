import { createAction, props } from "@ngrx/store";
import { IAPIErrors } from "src/app/shared/interfaces/api-errors.interface";
import { ICurrentUser } from "src/app/shared/interfaces/current-user.interface";
import { ILoginRequest } from "../../../interfaces/login-request.interface";
import { AuthActionTypes } from "../types/auth-action-types";

export const loginAction = createAction(
    AuthActionTypes.LOGIN,
    props<{ request: ILoginRequest }>()
);

export const loginSuccessAction = createAction(
    AuthActionTypes.LOGIN_SUCCESS,
    props<{ currentUser: ICurrentUser }>()
);

export const loginFailureAction = createAction(
    AuthActionTypes.LOGIN_FAILURE,
    props<{ errors: IAPIErrors }>()
);