import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {AppSettings} from 'src/app/AppSetings';

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

  getPosts() {
    return this.http.get(AppSettings.API_ENDPOINT + 'posts');
  }
}
