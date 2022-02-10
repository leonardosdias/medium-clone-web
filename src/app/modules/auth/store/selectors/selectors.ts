import { createSelector } from "@ngrx/store";
import { IAppState } from "src/app/shared/types/app-state.interface";
import { IAuthState } from "../../types/auth-state.inferface";

export const authFeatureSelector = (
    (state: IAppState): IAuthState => state.auth
);

export const isSubmittingSelector = createSelector(
    authFeatureSelector,
    (authState: IAuthState) => authState.isSubmitting
);

export const validationErrorsSelector = createSelector(
    authFeatureSelector,
    (authState: IAuthState) => authState.validationErrors
);

export const isLoggedInSelector = createSelector(
    authFeatureSelector,
    (authState: IAuthState) => authState.isLoggedIn
);

export const isAnonymousSelector = createSelector(
    authFeatureSelector,
    (authState: IAuthState) => !authState.isLoggedIn
);

export const currentUserSelector = createSelector(
    authFeatureSelector,
    (authState: IAuthState) => authState.currentUser
);