import { createAction, props } from "@ngrx/store";
import { IAPIErrors } from "src/app/shared/types/api-errors.interface";
import { ICurrentUser } from "src/app/shared/types/current-user.interface";
import { IRegisterRequest } from "../../types/register-request.interface";
import { ActionTypes } from "./action-types";

export const registerAction = createAction(
    ActionTypes.REGISTER,
    props<{ request: IRegisterRequest }>()
);

export const registerSuccessAction = createAction(
    ActionTypes.REGISTER_SUCCESS,
    props<{ currentUser: ICurrentUser }>()
);

export const registerFailureAction = createAction(
    ActionTypes.REGISTER_FAILURE,
    props<{ errors: IAPIErrors }>()
);