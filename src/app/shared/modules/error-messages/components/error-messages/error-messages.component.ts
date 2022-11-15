import {Component, Input, OnInit} from '@angular/core'
import {ErrorMessagesInterface} from 'src/app/shared/types/error-messages.interface'

@Component({
  selector: 'mc-error-messages',
  templateUrl: './error-messages.component.html',
  styleUrls: ['./error-messages.component.css'],
})
export class ErrorMessagesComponent implements OnInit {
  @Input('errors')
  errorsProps: ErrorMessagesInterface

  errorMessages: string[]

  ngOnInit(): void {
    this.errorMessages = Object.entries(this.errorsProps).map(
      ([prop, value]) => `${prop} ${value.join(' ')}`
    )
  }
}
