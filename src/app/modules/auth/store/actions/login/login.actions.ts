import { createAction, props } from "@ngrx/store";
import { IAPIErrors } from "src/app/shared/interfaces/api-errors.interface";
import { ICurrentUser } from "src/app/shared/interfaces/current-user.interface";
import { ILoginRequest } from "../../../types/login-request.interface";
import { ActionTypes } from "../types/action-types";

export const loginAction = createAction(
    ActionTypes.LOGIN,
    props<{ request: ILoginRequest }>()
);

export const loginSuccessAction = createAction(
    ActionTypes.LOGIN_SUCCESS,
    props<{ currentUser: ICurrentUser }>()
);

export const loginFailureAction = createAction(
    ActionTypes.LOGIN_FAILURE,
    props<{ errors: IAPIErrors }>()
);