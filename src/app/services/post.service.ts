import { Injectable } from '@angular/core';
import { Post } from '../models/Post';
import { Observable, observable } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) {}

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>('/assets/data.json');
  }

}
