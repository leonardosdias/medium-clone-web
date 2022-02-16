import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IAppState } from 'src/app/shared/interfaces/app-state.interface';
import { IAPIErrors } from 'src/app/shared/interfaces/api-errors.interface';
import { registerAction } from '../../store/actions/register/register.actions';
import { isSubmittingSelector, validationErrorsSelector } from '../../store/selectors/auth-selectors';
import { IRegisterRequest } from '../../interfaces/register-request.interface';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
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
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    const request: IRegisterRequest = {
      user: this.form.value
    };
    this.store.dispatch(registerAction({ request }));
  }

}
