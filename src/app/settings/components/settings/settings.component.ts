import {CurrentUserInputInterface} from './../../../shared/types/current-user-input.interface'
import {updateCurrentUserAction} from './../../../auth/store/actions/update-current-user.action'
import {FormGroup, FormBuilder} from '@angular/forms'
import {Component, OnDestroy, OnInit} from '@angular/core'
import {select, Store} from '@ngrx/store'
import {currentUserSelector} from 'src/app/auth/store/selectors'
import {filter, Observable, Subscription, tap} from 'rxjs'
import {CurrentUserInterface} from 'src/app/shared/types/current-user.interface'
import {errorsSelector, isSubmittingSelector} from '../../store/selectors'
import {ErrorMessagesInterface} from 'src/app/shared/types/error-messages.interface'
import { logoutAction } from 'src/app/auth/store/actions/logout.action'

@Component({
  selector: 'mc-settings',
  templateUrl: './settings.component.html',
})
export class SettingsComponent implements OnInit, OnDestroy {
  form: FormGroup
  subscriptions: Subscription = new Subscription()
  currentUser: CurrentUserInterface
  isSubmitting$: Observable<boolean>
  errors$: Observable<ErrorMessagesInterface | null>

  constructor(private formBuilder: FormBuilder, private store: Store) {}

  ngOnInit(): void {
    this.initializeListeners()
    this.initializeValues()
  }

  initializeValues() {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector))
    this.errors$ = this.store.pipe(select(errorsSelector))
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe()
  }

  initializeListeners() {
    this.subscriptions.add(
      this.store
        .pipe(
          select(currentUserSelector),
          filter(Boolean),
          tap((currentUser) => {
            this.currentUser = currentUser
            this.initializeForm()
          })
        )
        .subscribe()
    )
  }

  initializeForm() {
    const {image, username, bio, email} = this.currentUser
    this.form = this.formBuilder.group({
      image,
      username,
      bio,
      email,
      password: '',
    })
  }

  submit() {
    const currentUser: CurrentUserInputInterface = {
      ...this.currentUser,
      ...this.form.value,
    }
    this.store.dispatch(updateCurrentUserAction({currentUser}))
  }

  logout() {
    this.store.dispatch(logoutAction())
  }
}
