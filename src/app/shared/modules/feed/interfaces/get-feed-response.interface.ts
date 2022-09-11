import { IArticle } from "src/app/core/modules/article/interfaces/article.interface";

export interface IGetFeedResponse {
    articles: IArticle[];
    articlesCount: number;
}