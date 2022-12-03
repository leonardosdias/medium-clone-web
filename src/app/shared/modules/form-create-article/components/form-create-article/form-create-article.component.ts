import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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

  @Output('articleSubmit') articleSubmitEvent = new EventEmitter<IArticleInput>();

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.initializeForm();
    console.log('initialValuesProps form create component: ', this.initialValuesProps)
  }

  initializeForm(): void {
    this.form = this.formBuilder.group({
      title: [this.initialValuesProps?.title, [Validators.required]],
      description: [this.initialValuesProps?.description, [Validators.required]],
      body: [this.initialValuesProps?.body, [Validators.required]],
      tagList: [this.initialValuesProps?.tagList.join(' '), [Validators.required]]
    });
  }

  onSubmit(): void {
    this.articleSubmitEvent.emit(this.form.value);
    console.log('value form create-article: ', this.form.value)
  }

}
