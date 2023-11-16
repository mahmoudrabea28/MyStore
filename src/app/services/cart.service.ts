import { Injectable } from '@angular/core';
import { Post } from '../models/Post';

@Injectable({
  providedIn: 'root'
})
export class CartService {

post:Post[]=[];
num:number = 0;
num1:number = 0;
x:number =0;
y:number=0;
z:number=0;
name: string = '';
address: string = '';
pass:number=0;
A:string = '';
B:string = '';
C:string = '';
re:string = '';
tem:number = 0;


adddetail(post:Post){

    this.num=post.id;
    this.x=0;
    
    
    if(this.post.length==0){

      this.post.push(post);
      
    }

    else{
      
      for(let i=0;i<(this.post.length);i++){
    
          if(this.num!==this.post[i].id){

            this.x++;

            if(this.x==this.post.length){

              this.post.push(post);
              break;

            }
            
          }

          else{

          this.post[i].amount = post.amount ;

        }
        
      }

    }
    
    
      this.num1 = 0;

      for(let i=0;i<this.post.length;i++){

        if(this.post[i].amount < 1){

          this.post.splice(i,1);
          break;

        }

      }

      for(let i=0;i<this.post.length;i++){

        this.num1 += this.post[i].price*this.post[i].amount;
        
    }   
    
    
        
        this.A = this.num1.toString();

        for(let w=0;w<this.A.length;w++){

          if(this.A[w] == '.'){

            this.B = this.A.slice(0,w);
            this.C = this.A.slice(w+1,w+3);
            
            if(parseInt(this.C)% 10 == 0){

              this.C = this.A.slice(w+1,w+2);

            }

            break;

          }

          else{

            this.B = this.A;

          }

        }
    
        if(this.B != this.A){this.re = this.B + '.' + this.C ;};
        if(this.B == this.A){this.re = this.A;};

    
        post.total = this.re;
        this.tem = this.post.length;
    
}

  getdetail(){
    
    this.post.length = this.tem ;
    return this.post;

  }

  constructor() { }
  
}
