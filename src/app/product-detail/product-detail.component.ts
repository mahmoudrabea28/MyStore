import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../models/Post';
import { DetailService } from '../services/detail.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

details: Post[] = [];
posts = this.DetailService.getdetail();

  constructor(private DetailService:DetailService, private CartService:CartService ){ }//private activateRoute: ActivatedRoute private postService: PostService, 
  

  ngOnInit(): void {
    
  }

  tocart(post:Post){

    this.CartService.adddetail(post);

    alert('added to cart!');
  }

  update(post:Post,event:any){
    post.amount = event.target.value;
  }

}
