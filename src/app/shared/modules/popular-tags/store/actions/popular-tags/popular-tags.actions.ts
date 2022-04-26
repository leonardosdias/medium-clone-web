import { createAction, props } from "@ngrx/store";
import { TPolularTag } from "src/app/shared/interfaces/popular-tag.types";
import { PopularTagsActionTypes } from "../types/popular-tags-actions.types";

export const getPopularTagsAction = createAction(
    PopularTagsActionTypes.GET_POPULAR_TAGS
);

export const getPopularTagsSuccessAction = createAction(
    PopularTagsActionTypes.GET_POPULAR_TAGS_SUCCESS,
    props<{ popularTags: TPolularTag[] }>()
);


export const getPopularTagsFailureAction = createAction(
    PopularTagsActionTypes.GET_POPULAR_TAGS_FAILURE
);
