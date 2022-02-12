import { createAction, props } from "@ngrx/store";
import { IAPIErrors } from "src/app/shared/interfaces/api-errors.interface";
import { ICurrentUser } from "src/app/shared/interfaces/current-user.interface";
import { IRegisterRequest } from "../../../interfaces/register-request.interface";
import { AuthActionTypes } from "../types/auth-action-types";

export const registerAction = createAction(
    AuthActionTypes.REGISTER,
    props<{ request: IRegisterRequest }>()
);

export const registerSuccessAction = createAction(
    AuthActionTypes.REGISTER_SUCCESS,
    props<{ currentUser: ICurrentUser }>()
);

export const registerFailureAction = createAction(
    AuthActionTypes.REGISTER_FAILURE,
    props<{ errors: IAPIErrors }>()
);