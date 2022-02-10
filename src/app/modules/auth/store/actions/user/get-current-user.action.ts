import { createAction, props } from "@ngrx/store";
import { IAPIErrors } from "src/app/shared/types/api-errors.interface";
import { ICurrentUser } from "src/app/shared/types/current-user.interface";
import { ActionTypes } from "../types/action-types";

export const getCurrentUserAction = createAction(
    ActionTypes.GET_CURRENT_USER
);

export const getCurrentUserSuccessAction = createAction(
    ActionTypes.GET_CURRENT_USER_SUCCESS,
    props<{ currentUser: ICurrentUser }>()
);

export const getCurrentUserFailureAction = createAction(
    ActionTypes.GET_CURRENT_USER_FAILURE,
);
