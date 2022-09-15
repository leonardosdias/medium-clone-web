import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormCreateArticleComponent } from './components/form-create-article/form-create-article.component';
import { APIErrorMessagesModule } from '../api-error-messages/api-error-messages.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    FormCreateArticleComponent
  ],
  imports: [
    CommonModule,
    APIErrorMessagesModule,
    ReactiveFormsModule,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  exports: [
    FormCreateArticleComponent
  ]
})

export class FormCreateArticleModule { }
