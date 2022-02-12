import { IAPIErrors } from "src/app/shared/interfaces/api-errors.interface";
import { ICurrentUser } from "src/app/shared/interfaces/current-user.interface";

export interface IAuthState {
    isSubmitting: boolean;
    isLoading: boolean;
    currentUser: ICurrentUser | null;
    validationErrors: IAPIErrors | null;
    isLoggedIn: boolean | null;
}