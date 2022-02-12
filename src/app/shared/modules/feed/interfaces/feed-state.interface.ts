import { IGetFeedResponse } from "./get-feed-response.interface";

export interface IFeedState {
    isLoadding: boolean;
    error: string | null;
    data: IGetFeedResponse;
}