import { TPolularTag } from "src/app/shared/interfaces/popular-tag.types";

export interface IPopularTagsState {
    data: TPolularTag[] | null;
    isLoading: boolean;
    error: string | null;
};