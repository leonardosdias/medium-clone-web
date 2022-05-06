import { TPolularTag } from "./popular-tag.types";
import { IProfile } from "./profile.interface";

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