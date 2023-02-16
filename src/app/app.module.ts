import {TagFeedModule} from './tag-feed/tag-feed.module'
import {YourFeedModule} from './your-feed/your-feed.module'
import {GlobalFeedModule} from './global-feed/global-feed.module'
import {PersistanceService} from 'src/app/shared/services/persistance.service'
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import {NgModule} from '@angular/core'
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {BrowserModule} from '@angular/platform-browser'
import {EffectsModule} from '@ngrx/effects'
import {StoreModule} from '@ngrx/store'
import {StoreDevtoolsModule} from '@ngrx/store-devtools'
import {environment} from 'src/environments/environment'

import {AppRoutingModule} from './app-routing.module'
import {AppComponent} from './app.component'
import {AuthModule} from './auth/auth.module'
import {TopBarModule} from './shared/modules/top-bar/top-bar.module'
import {AuthInterceptor} from './shared/services/auth-interceptor.service'
import {routerReducer, StoreRouterConnectingModule} from '@ngrx/router-store'
import {ArticleModule} from './article/article.module'
import {CreateArticleModule} from './create-article/create-article.module'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    EffectsModule.forRoot([]),
    StoreModule.forRoot({router: routerReducer}),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    StoreRouterConnectingModule.forRoot(),
    TopBarModule,
    GlobalFeedModule,
    YourFeedModule,
    TagFeedModule,
    CreateArticleModule,
    ArticleModule,
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
    PersistanceService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
