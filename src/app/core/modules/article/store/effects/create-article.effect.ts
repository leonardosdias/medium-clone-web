import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { of } from "rxjs";
import { catchError, map, switchMap, tap } from "rxjs/operators";
import { ArticleService } from "../../services/article.service";
import { createArticleAction, createArticleFailureAction, createArticleSuccessAction } from "../actions/article/create-article.actions";
import { IArticle } from "../../interfaces/article.interface";


@Injectable()
export class CreateArticleEffect {
    constructor(
        private actions$: Actions,
        private articleService: ArticleService,
        private router: Router
    ) {

    }
    createArticleEffect$ = createEffect(() => this.actions$
        .pipe(
            ofType(createArticleAction),
            switchMap(({ articleInput }) => {
                return this.articleService.createArticle(articleInput).pipe(
                    map((article: IArticle) => {
                        return createArticleSuccessAction({ article })
                    })
                )
            }),

            catchError((errorResponse: HttpErrorResponse) => {
                return of(createArticleFailureAction({ errors: errorResponse.error.errors }));
            })
        ));

    redirectAfterCreate$ = createEffect(() => this.actions$.pipe(
        ofType(createArticleSuccessAction),
        tap(({ article }) => {
            this.router.navigate(['/articles', article.slug]);
        })
    ),
        { dispatch: false }
    );

}