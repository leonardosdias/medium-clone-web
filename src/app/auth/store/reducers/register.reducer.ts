import { Action, createReducer, on } from "@ngrx/store";
import { IAuthState } from "../../types/auth-state.inferface";
import { registerAction } from "../actions/register.actions";

const initialState: IAuthState = {
    isSubmitting: false
};

const authReducer = createReducer(
    initialState,
    on(
        registerAction,
        (state: IAuthState) => ({
            ...state,
            isSubmitting: true
        }))
);

export function reducers(state: IAuthState, action: Action) {
    return authReducer(state, action);
}