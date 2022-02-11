import { createAction, props } from "@ngrx/store";
import { ICurrentUser } from "src/app/shared/interfaces/current-user.interface";
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
