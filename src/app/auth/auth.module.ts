import {CommonModule} from '@angular/common'
import {NgModule} from '@angular/core'
import {ReactiveFormsModule} from '@angular/forms'
import {Route, RouterModule} from '@angular/router'
import {EffectsModule} from '@ngrx/effects'
import {StoreModule} from '@ngrx/store'
import {RegisterComponent} from './components/register/register.component'
import {reducers} from './store/reducers'
import {AuthService} from './services/auth.service'
import {RegisterEffect} from './store/effects/register.effect'
import {ErrorMessagesModule} from '../shared/modules/error-messages/error-messages.module'
import {PersistanceService} from '../shared/services/persistance.service'
import {LoginEffect} from './store/effects/login.effect'

const routes: Route[] = [
  {
    path: 'register',
    component: RegisterComponent,
  },
]
@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    StoreModule.forFeature('auth', reducers),
    EffectsModule.forFeature([RegisterEffect, LoginEffect]),
    ErrorMessagesModule,
  ],
  providers: [AuthService, PersistanceService],
})
export class AuthModule {}
