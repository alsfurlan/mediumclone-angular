import {
  getPopularTagsAction,
  getPopularTagsFailureAction,
  getPopularTagsSuccessAction,
} from './actions'
import {PopularTagsService} from './../popular-tags.service'
import {Injectable} from '@angular/core'
import {Actions, createEffect, ofType} from '@ngrx/effects'
import {catchError, map, of, switchMap} from 'rxjs'
import {TagType} from 'src/app/shared/types/tag.interface'

@Injectable()
export class GetPopularTagsEffect {
  getPopularTags$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getPopularTagsAction),
      switchMap(() =>
        this.popularTagsService.getPopularTags().pipe(
          map((tags: TagType[]) => getPopularTagsSuccessAction({tags})),
          catchError(() => of(getPopularTagsFailureAction()))
        )
      )
    )
  )

  constructor(
    private actions$: Actions,
    private popularTagsService: PopularTagsService
  ) {}
}
