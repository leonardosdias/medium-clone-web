import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-error-message',
  template: '<div>{{messageProps}}</div>',
  styleUrls: ['./error-message.component.scss']
})
export class ErrorMessageComponent {
  @Input('message') messageProps: string = 'Aconteceu um erro durante o carregamento dos dados...';

}
