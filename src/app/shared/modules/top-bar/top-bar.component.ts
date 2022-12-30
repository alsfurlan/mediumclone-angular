import { Observable } from 'rxjs';
import {select, Store} from '@ngrx/store'
import {Component, OnInit} from '@angular/core'
import { currentUserSelector, isAnounymousSelector, isLoggedInSelector } from 'src/app/auth/store/selectors'
import { CurrentUserInterface } from '../../types/current-user.interface';

@Component({
  selector: 'mc-topbar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
})
export class TopBarComponent implements OnInit{
  
  isLoggedIn$: Observable<boolean>
  isAnounymous$: Observable<boolean>;
  currentUser$: Observable<CurrentUserInterface | null>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.isLoggedIn$ = this.store.pipe(select(isLoggedInSelector))
    this.isAnounymous$ = this.store.pipe(select(isAnounymousSelector));
    this.currentUser$ = this.store.pipe(select(currentUserSelector));
  }
}
