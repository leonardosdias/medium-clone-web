import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { APIErrorMessagesComponent } from './components/api-error-messages/api-error-messages.component';

@NgModule({
  declarations: [
    APIErrorMessagesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    APIErrorMessagesComponent
  ]
})
export class APIErrorMessagesModule { }
