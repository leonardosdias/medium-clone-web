import { Injectable } from "@angular/core";
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { of } from "rxjs";
import { catchError, map, switchMap } from "rxjs/operators";
import { IGetArticleResponse } from "src/app/core/modules/article/interfaces/article.interface";

import { ArticleService } from "../../services/article.service";
import { getArticleAction, getArticleFailureAction, getArticleSuccessAction } from "../actions/article/article.actions";

@Injectable()
export class GetArticleEffect {
    constructor(
        private actions$: Actions,
        private articleService: ArticleService,
    ) { }

    getArticle$ = createEffect(() => this.actions$
        .pipe(
            ofType(getArticleAction),
            switchMap(({ slug }) => {
                return this.articleService.getArticle(slug)
                    .pipe(
                        map((article: IGetArticleResponse) => {
                            return getArticleSuccessAction({ article });
                        })
                    )
            }),

            catchError(() => {
                return of(getArticleFailureAction());
            })
        ));
}