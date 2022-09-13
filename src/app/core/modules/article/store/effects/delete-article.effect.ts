import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { of } from "rxjs";
import { catchError, map, switchMap, tap } from "rxjs/operators";

import { ArticleService } from "../../services/article.service";
import { deleteArticleAction, deleteArticleFailureAction, deleteArticleSuccessAction } from "../actions/article/delete-article.actions";

@Injectable()
export class DeletetArticleEffect {
    constructor(
        private actions$: Actions,
        private articleService: ArticleService,
        private router: Router
    ) { }

    deleteArticle$ = createEffect(() => this.actions$
        .pipe(
            ofType(deleteArticleAction),
            switchMap(({ slug }) => {
                return this.articleService.deleteArticle(slug)
                    .pipe(
                        map(() => {
                            return deleteArticleSuccessAction();
                        })
                    )
            }),

            catchError(() => {
                return of(deleteArticleFailureAction());
            })
        ));

    redirectAfterDelete$ = createEffect(
        () =>
            this.actions$
                .pipe(
                    ofType(deleteArticleSuccessAction),
                    tap(() => {
                        this.router.navigate(['/']);
                    })
                ), { dispatch: false }
    )
}