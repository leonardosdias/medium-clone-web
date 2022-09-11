import { IArticleState } from "src/app/core/modules/article/interfaces/article-state.interface";
import { IAuthState } from "src/app/core/modules/auth/interfaces/auth-state.inferface";
import { IFeedState } from "../modules/feed/interfaces/feed-state.interface";
import { IPopularTagsState } from "../modules/popular-tags/interfaces/popular-tags-state.interface";

export interface IAppState {
    auth: IAuthState;
    feed: IFeedState;
    article: IArticleState;
    popularTags: IPopularTagsState;
};