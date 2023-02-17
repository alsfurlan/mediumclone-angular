import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {CommonModule} from '@angular/common'
import {NgModule} from '@angular/core'
import {ArticleFormComponent} from './article-form.component'
import {ErrorMessagesModule} from '../error-messages/error-messages.module'

@NgModule({
  imports: [
    CommonModule,
    ErrorMessagesModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [ArticleFormComponent],
  exports: [ArticleFormComponent],
})
export class ArticleFormModule {}
