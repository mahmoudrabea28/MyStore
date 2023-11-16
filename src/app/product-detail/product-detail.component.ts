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

@Input() post:Post;
details: Post[] = [];
posts = this.DetailService.getdetail();
selected:number = 1;


  constructor(private DetailService:DetailService, private CartService:CartService )
  {

    this.post = 
      {
        id: 0,
        name: '',
        price: 0,
        url: '',
        description: '',
        amount:0,
        total:''
      }

  }
  

ngOnInit(): void {
  console.log(this.posts);
}

update(event:any){

  this.selected = parseInt(event.target.value);

}

tocart(post:Post){

  for(let j=0;j<this.CartService.post.length;j++){

    if(post.id == this.CartService.post[j].id){

        post.amount = this.CartService.post[j].amount;

    }

  }

    post.amount += this.selected;

    this.CartService.adddetail(post);

  }

}
