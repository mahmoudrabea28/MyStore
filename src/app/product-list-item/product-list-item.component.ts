import { Component, OnInit, Input } from '@angular/core';
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
        total:''
      }
  }

ngOnInit(): void {

}


adddetail(post: Post){
    
    this.DetailService.adddetail(post);

  }


selectchange(event : any){

  this.selected = parseInt(event.target.value);
  
}

tocart(post: Post){

    for(let i=0;i<this.CartService.post.length;i++){

      for(let j=0;j<this.CartService.post.length;j++){

        if(this.post.id == this.CartService.post[j].id){

          this.post.amount = this.CartService.post[j].amount;

        }

      }
      
    }
    
    this.post.amount += this.selected;
    this.CartService.adddetail(post);

    scrollTo(0,0);
    
  }

  
  
}