import {reducers} from './store/reducers'
import {GetProfileEffect} from './store/effects/get-profile.effect'
import {EffectsModule} from '@ngrx/effects'
import {ProfileService} from './services/profile.service'
import {Route} from '@angular/router'
import {CommonModule} from '@angular/common'
import {NgModule} from '@angular/core'
import {ProfileComponent} from './components/profile/profile.component'
import {StoreModule} from '@ngrx/store'

const routes: Route[] = [
  {
    path: 'profile/:slug',
    component: ProfileComponent,
  },
  {
    path: 'profile/:slug/favorites',
    component: ProfileComponent,
  },
]

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('profile', reducers),
    EffectsModule.forFeature([GetProfileEffect]),
  ],
  declarations: [ProfileComponent],
  providers: [ProfileService],
})
export class ProfileModule {}
