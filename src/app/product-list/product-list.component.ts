import { Component, OnInit } from '@angular/core';
import { Post } from '../models/Post';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  title: string = "MyStore";
  posts: Post[] = [];
  detail: Post[] = [];
  total: number=0;


  constructor(private postService: PostService) { }

  ngOnInit(): void {

    this.postService.getPosts().subscribe(res => {
      this.posts = res;
    });
    
  }

  hide(){
    
  }

}
