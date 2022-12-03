import { IAPIErrors } from "src/app/shared/interfaces/api-errors.interface";

export interface ICreateArticleState {
    isSubmitting: boolean;
    validationErrors: IAPIErrors | null;
}