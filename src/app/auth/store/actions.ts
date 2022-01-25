import { createAction, props } from "@ngrx/store";
import { IRegisterRequest } from "../types/register-request.interface";
import { ActionTypes } from "./action-types";

export const registerAction = createAction(
    ActionTypes.REGISTER,
    props<{ request: IRegisterRequest}>()
);