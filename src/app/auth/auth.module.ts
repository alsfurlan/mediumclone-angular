import {CommonModule} from '@angular/common'
import {NgModule} from '@angular/core'
import {ReactiveFormsModule} from '@angular/forms'
import {Route, RouterModule} from '@angular/router'
import {RegisterComponent} from './components/register/register.component'

const routes: Route[] = [
  {
    path: 'register',
    component: RegisterComponent,
  },
]
@NgModule({
  declarations: [RegisterComponent],
  imports: [CommonModule, RouterModule.forChild(routes), ReactiveFormsModule],
})
export class AuthModule {}
