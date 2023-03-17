import {reducers} from './store/reducers'
import {GetProfileEffect} from './store/effects/get-profile.effect'
import {EffectsModule} from '@ngrx/effects'
import {ProfileService} from './services/profile.service'
import {Route, RouterModule} from '@angular/router'
import {CommonModule} from '@angular/common'
import {NgModule} from '@angular/core'
import {ProfileComponent} from './components/profile/profile.component'
import {StoreModule} from '@ngrx/store'
import { FeedModule } from "../feed/feed.module";

const routes: Route[] = [
  {
    path: 'profiles/:slug',
    component: ProfileComponent,
  },
  {
    path: 'profiles/:slug/favorites',
    component: ProfileComponent,
  },
]

@NgModule({
    declarations: [ProfileComponent],
    providers: [ProfileService],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        StoreModule.forFeature('profile', reducers),
        EffectsModule.forFeature([GetProfileEffect]),
        FeedModule
    ]
})
export class ProfileModule {}
