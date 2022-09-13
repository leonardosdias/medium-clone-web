import { IArticle, IGetArticleResponse } from "./article.interface";

export interface IArticleState {
    isLoading: boolean;
    error: string | null;
    data: IArticle | null;
}