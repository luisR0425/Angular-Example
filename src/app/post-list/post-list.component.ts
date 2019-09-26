import { Component, OnInit } from '@angular/core';

import { PostService } from '../post.service';
import { Post } from '../model/Post';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  posts: any;

  selectedPost: Post;

  constructor(
    private postService: PostService
  ) { }

  ngOnInit() {
    this.postService.getPosts().subscribe(response => {
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

  onSelect(post: Post): void {
    this.selectedPost = post;
  }
}
