import {EffectsModule} from '@ngrx/effects'
import {NgModule} from '@angular/core'
import {FavoriteComponent} from './components/favorite/favorite.component'
import {FavoriteService} from './services/favorite.service'
import {FavoriteEffects} from './store/effects'
import {CommonModule} from '@angular/common'

@NgModule({
  imports: [CommonModule, EffectsModule.forFeature([FavoriteEffects])],
  declarations: [FavoriteComponent],
  exports: [FavoriteComponent],
  providers: [FavoriteService],
})
export class FavoriteModule {}
