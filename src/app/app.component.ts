import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getCurrentUserAction } from './core/modules/auth/store/actions/user/get-current-user.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {
    this.store.dispatch(getCurrentUserAction());
  }

}
