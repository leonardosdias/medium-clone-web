import { Action, createReducer, on } from "@ngrx/store";
import { IAuthState } from "../../types/auth-state.inferface";
import { loginAction, loginFailureAction, loginSuccessAction } from "../actions/login/login.actions";
import { registerAction, registerFailureAction, registerSuccessAction } from "../actions/register/register.actions";

const initialState: IAuthState = {
    isSubmitting: false,
    currentUser: null,
    validationErrors: null,
    isLoggedIn: null
};

const authReducer = createReducer(
    initialState,
    on(
        registerAction,
        (state: IAuthState) => ({
            ...state,
            isSubmitting: true,
            validationErrors: null
        })
    ),
    on(
        registerSuccessAction,
        (state, action): IAuthState => ({
            ...state,
            isSubmitting: false,
            isLoggedIn: true,
            currentUser: action.currentUser
        })
    ),
    on(
        registerFailureAction,
        (state, action): IAuthState => ({
            ...state,
            isSubmitting: false,
            validationErrors: action.errors
        })
    ),
    on(
        loginAction,
        (state): IAuthState => ({
            ...state,
            isSubmitting: true,
            validationErrors: null
        })
    ),
    on(
        loginSuccessAction,
        (state, action) => ({
            ...state,
            isSubmitting: false,
            isLoggedIn: true,
            currentUser: action.currentUser
        })
    ),
    on(
        loginFailureAction,
        (state, action): IAuthState => ({
            ...state,
            isSubmitting: false,
            validationErrors: action.errors
        })
    ),
);

export function reducers(state: IAuthState, action: Action) {
    return authReducer(state, action);
}