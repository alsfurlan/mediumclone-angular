import {Route, RouterModule} from '@angular/router'
import {CommonModule} from '@angular/common'
import {NgModule} from '@angular/core'
import {SettingsComponent} from './components/settings/settings.component'
import {StoreModule} from '@ngrx/store'
import {reducers} from './store/reducers'
import {ErrorMessagesModule} from '../shared/modules/error-messages/error-messages.module'
import {FormsModule, ReactiveFormsModule} from '@angular/forms'

const routes: Route[] = [
  {
    path: 'settings',
    component: SettingsComponent,
  },
]

@NgModule({
  declarations: [SettingsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('settings', reducers),
    FormsModule,
    ReactiveFormsModule,
    ErrorMessagesModule,
  ],
})
export class SettingsModule {}
