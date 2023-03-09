import {TagListModule} from './../tag-list/tag-list.module'
import {PaginationModule} from './../pagination/pagination.module'
import {LoadingModule} from './../loading/loading.module'
import {ErrorMessageModule} from './../error-message/error-message.module'
import {RouterModule} from '@angular/router'
import {HttpClientModule} from '@angular/common/http'
import {GetFeedEffect} from './store/effects/get-feed.effect'
import {EffectsModule} from '@ngrx/effects'
import {FeedService} from './services/feed.service'
import {CommonModule} from '@angular/common'
import {NgModule} from '@angular/core'
import {FeedComponent} from './components/feed/feed.component'
import {StoreModule} from '@ngrx/store'
import {reducers} from './store/reducers'
import { FavoriteModule } from "../favorite/favorite.module";

@NgModule({
    declarations: [FeedComponent],
    exports: [FeedComponent],
    providers: [FeedService],
    imports: [
        CommonModule,
        RouterModule,
        EffectsModule.forFeature([GetFeedEffect]),
        StoreModule.forFeature('feed', reducers),
        ErrorMessageModule,
        LoadingModule,
        PaginationModule,
        TagListModule,
        FavoriteModule
    ]
})
export class FeedModule {}
