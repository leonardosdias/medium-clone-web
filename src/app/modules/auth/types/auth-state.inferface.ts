import { IAPIErrors } from "src/app/shared/types/api-errors.interface";
import { ICurrentUser } from "src/app/shared/types/current-user.interface";

export interface IAuthState {
    isSubmitting: boolean;
    isLoading: boolean;
    currentUser: ICurrentUser | null;
    validationErrors: IAPIErrors | null;
    isLoggedIn: boolean | null;
}