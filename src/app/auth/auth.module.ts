import {CommonModule} from '@angular/common'
import {NgModule} from '@angular/core'
import {ReactiveFormsModule} from '@angular/forms'
import {Route, RouterModule} from '@angular/router'
import {StoreModule} from '@ngrx/store'
import {RegisterComponent} from './components/register/register.component'
import {reducers} from './store/reducers'
import {AuthService} from './services/auth.service'

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
  ],
  providers: [AuthService],
})
export class AuthModule {}
