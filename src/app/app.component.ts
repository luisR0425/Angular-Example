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

  constructor( postService: PostService ) { }
}
