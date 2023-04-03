import {ArticleCommentInterface} from './../../types/article-comment.interface'
import {Component} from '@angular/core'

@Component({
  selector: 'mc-article-comments',
  templateUrl: './article-comments.component.html',
})
export class ArticleCommentsComponent {
  comment: ArticleCommentInterface = {
    id: 1,
    body: 'my comment',
    createdAt: '2028-02-20T10:00:00',
    updatedAt: '2028-02-20T10:00:00',
    author: {
      username: 'alsfurlan1',
      bio: 'bio',
      following: false,
      image:
        'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
    },
  }
}
