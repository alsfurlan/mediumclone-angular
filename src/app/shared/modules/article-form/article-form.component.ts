import {Component, Input} from '@angular/core'
import {ArticleInputInterface} from '../../types/article-input.interface'
import {ErrorMessagesInterface} from '../../types/error-messages.interface'

@Component({
  selector: 'mc-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.scss'],
})
export class ArticleFormComponent {
  @Input()
  initialValues: ArticleInputInterface

  @Input()
  isSubmitting: boolean

  @Input()
  errors: ErrorMessagesInterface | null
}
