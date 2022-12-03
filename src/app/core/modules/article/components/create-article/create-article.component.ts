import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IArticleInput } from 'src/app/shared/modules/form-create-article/interfaces/article-input.interface';
import { IAPIErrors } from 'src/app/shared/interfaces/api-errors.interface';
import { isSubmittingCreateArticleSelector, validationErrorsCreateArticleErrorSelector } from '../../store/selectors/create-article.selector';
import { createArticleAction } from '../../store/actions/article/create-article.actions';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.scss']
})

export class CreateArticleComponent implements OnInit {
  initialValues: IArticleInput = {
    title: '',
    description: '',
    body: '',
    tagList: []
  }

  isSubmitting$: Observable<boolean>;
  apiErrors$: Observable<IAPIErrors | null>;

  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingCreateArticleSelector));

    this.apiErrors$ = this.store.pipe(select(validationErrorsCreateArticleErrorSelector));
  }

  onSubmit(articleInput: IArticleInput): void {
    this.store.dispatch(createArticleAction({ articleInput }));
  }

}
