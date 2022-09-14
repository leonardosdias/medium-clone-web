import { Component, Input, OnInit } from '@angular/core';
import { IAPIErrors } from 'src/app/shared/interfaces/api-errors.interface';
import { IArticleInput } from '../../interfaces/article-input.interface';

@Component({
  selector: 'app-form-create-article',
  templateUrl: './form-create-article.component.html',
  styleUrls: ['./form-create-article.component.scss']
})

export class FormCreateArticleComponent implements OnInit {
  @Input('initialValues') initialValuesProps: IArticleInput;
  @Input('isSubmitting') isSubmittingProps: boolean;
  @Input('errors') errorsProps: IAPIErrors | null;

  constructor() { }

  ngOnInit(): void {
  }

}
