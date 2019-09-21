import { Component } from '@angular/core';
import { Post } from 'src/app/model/Post';
import { PostService } from './post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-Example';
  posts = new Array<Post>();

  constructor( empService: PostService ) {

    empService.getEmployees().subscribe(response => {
      this.posts = response.map(item => {
        return new Post(
            item.userId,
            item.id,
            item.title,
            item.body
        );
      });
    });

  }
}
