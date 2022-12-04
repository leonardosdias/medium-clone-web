import { IAPIErrors } from "src/app/shared/interfaces/api-errors.interface";
import { IArticle } from "./article.interface";

export interface IUpdateArticleState {
    article: IArticle | null;
    isLoading: boolean;
    isSubmitting: boolean;
    validationErrors: IAPIErrors | null;
}