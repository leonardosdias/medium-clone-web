import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IAppState } from 'src/app/shared/types/app-state.interface';
import { AuthService } from '../../services/auth.service';
import { registerAction } from '../../store/actions/register.actions';
import { isSubmittingSelector } from '../../store/selectors/selectors';
import { IRegisterRequest } from '../../types/register-request.interface';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  isSubmittings$: Observable<boolean>;

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<IAppState>,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.initializeForm();
    this.initializeValues();
  }

  initializeValues(): void {
    this.isSubmittings$ = this.store.pipe(select(isSubmittingSelector));
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
