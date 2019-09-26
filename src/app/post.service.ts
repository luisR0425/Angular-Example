import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from 'src/app/model/Post';
import {AppSettings} from 'src/app/AppSetings';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  items = [];

  constructor(
    private http: HttpClient
  ) { }

  addPost(post: any) {
    this.items.push(post);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  /*getPosts() {
    return this.http.get(AppSettings.API_ENDPOINT + 'posts');
  }*/

  public getPosts(): Observable<Post[]> {
    const url = AppSettings.API_ENDPOINT;
    return this.http.get<Post[]>(url + 'posts');
  }
}
