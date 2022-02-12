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
    tagList: [],
    createdAt: Date,
    updatedAt: Date,
}