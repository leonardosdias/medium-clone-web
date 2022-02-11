import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IAppState } from 'src/app/shared/interfaces/app-state.interface';
import { IAPIErrors } from 'src/app/shared/interfaces/api-errors.interface';
import { loginAction } from '../../store/actions/login/login.actions';
import { isSubmittingSelector, validationErrorsSelector } from '../../store/selectors/selectors';
import { ILoginRequest } from '../../interfaces/login-request.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  isSubmittings$: Observable<boolean>;
  apiErrors$: Observable<IAPIErrors | null>;

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<IAppState>,
  ) { }

  ngOnInit(): void {
    this.initializeForm();
    this.initializeValues();
  }

  initializeValues(): void {
    this.isSubmittings$ = this.store.pipe(select(isSubmittingSelector));
    this.apiErrors$ = this.store.pipe(select(validationErrorsSelector));
  }

  initializeForm(): void {
    this.form = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    const request: ILoginRequest = {
      user: this.form.value
    };
    this.store.dispatch(loginAction({ request }));
  }

}
