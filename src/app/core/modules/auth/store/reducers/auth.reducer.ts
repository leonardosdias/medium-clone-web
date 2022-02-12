import { Action, createReducer, on } from "@ngrx/store";
import { IAuthState } from "../../interfaces/auth-state.inferface";
import { loginAction, loginFailureAction, loginSuccessAction } from "../actions/login/login.actions";
import { registerAction, registerFailureAction, registerSuccessAction } from "../actions/register/register.actions";
import { getCurrentUserAction, getCurrentUserFailureAction, getCurrentUserSuccessAction } from "../actions/user/get-current-user.actions";

const initialState: IAuthState = {
    isSubmitting: false,
    isLoading: false,
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
    on(
        getCurrentUserAction,
        (state): IAuthState => ({
            ...state,
            isLoading: true
        })
    ),
    on(
        getCurrentUserSuccessAction,
        (state, action): IAuthState => ({
            ...state,
            isLoading: false,
            isLoggedIn: true,
            currentUser: action.currentUser
        })
    ),
    on(
        getCurrentUserFailureAction,
        (state): IAuthState => ({
            ...state,
            isLoading: false,
            isLoggedIn: false,
            currentUser: null
        })
    )
);

export function authReducers(state: IAuthState, action: Action) {
    return authReducer(state, action);
}