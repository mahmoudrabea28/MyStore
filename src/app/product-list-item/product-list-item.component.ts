import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Post } from '../models/Post';
import { DetailService } from '../services/detail.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product-list-item',
  templateUrl: './product-list-item.component.html',
  styleUrls: ['./product-list-item.component.css']
})
export class ProductListItemComponent implements OnInit {
  @Input() post: Post;
  posts: Post[] = [];
  detail: Post[] = [];
  selected:number = 1;
  total:number = 0;
  

  constructor(private DetailService: DetailService ,private CartService: CartService) {
    this.post = 
      {
        id: 0,
        name: '',
        price: 0,
        url: '',
        description: '',
        amount:0,
        total:0,
      }
  }

  ngOnInit(): void {
    
  }


  adddetail(post: Post){
    this.post.amount = this.selected; 
    this.DetailService.adddetail(post);
  }


  selectchange(event : any){
    this.selected = event.target.value;
    this.post.amount = this.selected;
  }

  tocart(post: Post){
    this.CartService.adddetail(post);
    this.CartService.num=this.selected;
    
    this.total=(this.post.price * this.post.amount);

    alert('added to cart!')
  }
  
}