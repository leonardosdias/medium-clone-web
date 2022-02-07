import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './components/register/register.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/reducers/register.reducer';
import { AuthService } from './services/auth.service';
import { EffectsModule } from '@ngrx/effects';
import { RegisterEffect } from './store/effects/register/register.effect';
import { APIErrorMessagesModule } from '../../shared/modules/api-error-messages/api-error-messages.module';
import { PersistenceService } from 'src/app/shared/services/persistence.service';
import { LoginEffect } from 'src/app/modules/auth/store/effects/login/login.effect';
import { LoginComponent } from './components/login/login.component';
import { AuthRoutingModule } from 'src/app/modules/auth/auth-routing.module';
@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AuthRoutingModule,
    StoreModule.forFeature('auth', reducers),
    EffectsModule.forFeature([RegisterEffect, LoginEffect]),
    APIErrorMessagesModule
  ],
  providers: [
    AuthService,
    PersistenceService
  ]
})

export class AuthModule { }
