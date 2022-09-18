import { Injectable } from '@angular/core';
import { Post } from '../models/Post';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  
post:Post[]=[];
num:number = 0;
x:number =0;
y:number=0;
z:number=0;
name: string = '';
address: string = '';
pass:number=0;

  
  
  adddetail(post:Post){
    
    this.num=post.id;
    this.x=0;

    if(this.post.length==0){
    this.post.push(post);
    }

    else{

      for(let i=0;i<this.post.length;i++){
        
          if(this.num!==this.post[i].id){
            
            this.x++;
            
            if(this.x==this.post.length){
            this.post.push(post);
            }
  
          }
          
      }

    }
    
  
      for(let i=0;i<this.post.length;i++){
        this.num+=this.post[i].price*this.post[i].amount;
        
      }
      
      post.total = this.num;
      

}

  getdetail(){

    return this.post;
  }


  constructor() { }

  
}
