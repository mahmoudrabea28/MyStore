import { Component, OnInit } from '@angular/core';
import { Post } from '../models/Post';
import { PostService } from '../services/post.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  title: string = "MyStore";
  posts: Post[] = [];
  pos:string= '';
  constructor(private postService: PostService, private HttpClient:HttpClient) { }

ngOnInit(): void {
    
  this.postService.getPosts().subscribe(res => {

    this.posts = res;

  });

}

reload(){

  window.location.reload();
  
}

}
