import {EffectsModule} from '@ngrx/effects'
import {CommonModule} from '@angular/common'
import {NgModule} from '@angular/core'
import {FollowComponent} from './components/follow.component'
import {FollowService} from './services/follow.service'
import {FollowEffects} from './store/effects'
import {StoreModule} from '@ngrx/store'
import {reducers} from './store/reducers'

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('follow', reducers),
    EffectsModule.forFeature([FollowEffects]),
  ],
  declarations: [FollowComponent],
  exports: [FollowComponent],
  providers: [FollowService],
})
export class FollowModule {}
