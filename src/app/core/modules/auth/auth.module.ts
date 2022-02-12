import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './components/register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { authReducers } from './store/reducers/auth.reducer';
import { AuthService } from './services/auth.service';
import { EffectsModule } from '@ngrx/effects';
import { RegisterEffect } from './store/effects/register/register.effect';
import { APIErrorMessagesModule } from '../../../shared/modules/api-error-messages/api-error-messages.module';
import { PersistenceService } from 'src/app/shared/services/persistence.service';
import { LoginEffect } from 'src/app/core/modules/auth/store/effects/login/login.effect';
import { LoginComponent } from './components/login/login.component';
import { AuthRoutingModule } from 'src/app/core/modules/auth/auth-routing.module';
import { GetCurrentUserEffect } from './store/effects/user/get-current-user.effect';
@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AuthRoutingModule,
    StoreModule.forFeature('auth', authReducers),
    EffectsModule.forFeature(
      [
        RegisterEffect,
        LoginEffect,
        GetCurrentUserEffect
      ]
    ),
    APIErrorMessagesModule
  ],
  providers: [
    AuthService,
    PersistenceService
  ]
})

export class AuthModule { }
