import {FormBuilder, FormGroup} from '@angular/forms'
import {ArticleInputInterface} from './../../types/article-input.interface'
import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core'
import {ErrorMessagesInterface} from '../../types/error-messages.interface'

@Component({
  selector: 'mc-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.scss'],
})
export class ArticleFormComponent implements OnInit {
  @Input()
  initialValues: ArticleInputInterface

  @Input()
  isSubmitting: boolean

  @Input()
  errors: ErrorMessagesInterface | null

  @Output()
  articleSubmit = new EventEmitter<ArticleInputInterface>()

  form: FormGroup

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    const {title, body, description, tagList} = this.initialValues
    this.form = this.formBuilder.group({
      title,
      description,
      body,
      tagList: tagList.join(' '),
    })
  }

  onSubmit(): void {
    this.articleSubmit.emit(this.form.value)
  }
}
