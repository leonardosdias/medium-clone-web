import { TPolularTag } from "../../../../shared/interfaces/popular-tag.types";
import { IProfile } from "../../../../shared/interfaces/profile.interface";

export interface IArticle {
    id: string,
    slug: string,
    title: string,
    body: string,
    description: string,
    favoritesCount: number,
    favorited: boolean,
    author: IProfile,
    tagList: TPolularTag[],
    createdAt: Date,
    updatedAt: Date,
}

export interface IGetArticleResponse {
    article: IArticle
}