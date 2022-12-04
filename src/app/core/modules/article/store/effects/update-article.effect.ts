import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { of } from "rxjs";
import { catchError, map, switchMap, tap } from "rxjs/operators";
import { ArticleService } from "../../services/article.service";
import { updateArticleAction, updateArticleFailureAction, updateArticleSuccessAction } from "../actions/article/update-article.actions";
import { IArticle } from "../../interfaces/article.interface";


@Injectable()
export class UpdateArticleEffect {
    constructor(
        private actions$: Actions,
        private articleService: ArticleService,
        private router: Router
    ) {

    }
    updaterticleEffect$ = createEffect(() => this.actions$
        .pipe(
            ofType(updateArticleAction),
            switchMap(({ slug, articleInput }) => {
                return this.articleService.updateArticle(slug, articleInput).pipe(
                    map((article: IArticle) => {
                        return updateArticleSuccessAction({ article })
                    })
                )
            }),

            catchError((errorResponse: HttpErrorResponse) => {
                return of(updateArticleFailureAction({ errors: errorResponse.error.errors }));
            })
        ));

    redirectAfterCreate$ = createEffect(() => this.actions$.pipe(
        ofType(updateArticleSuccessAction),
        tap(({ article }) => {
            this.router.navigate(['/articles', article.slug]);
        })
    ),
        { dispatch: false }
    );

}