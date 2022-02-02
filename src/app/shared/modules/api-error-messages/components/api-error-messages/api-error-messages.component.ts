import { Component, Input, OnInit } from '@angular/core';
import { IAPIErrors } from 'src/app/shared/types/api-errors.interface';

@Component({
  selector: 'app-api-error-messages',
  templateUrl: './api-error-messages.component.html',
  styleUrls: ['./api-error-messages.component.scss']
})
export class APIErrorMessagesComponent implements OnInit {

  constructor() { }

  @Input('errorMessages') apiErrorMessagesProps: IAPIErrors;

  errorMessages: string[];

  ngOnInit(): void {
    this.formatErrorMessages();
  }

  formatErrorMessages() {
    this.errorMessages = Object.keys(this.apiErrorMessagesProps).map(
      (name: string) => {
        const messages = this.apiErrorMessagesProps[name].join(' ');
        return `${messages}`
      }
    );
  }
}
