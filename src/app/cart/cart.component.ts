import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { DetailService } from '../services/detail.service';
import { CartService } from '../services/cart.service';
import { Post } from '../models/Post';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

@Output() public markname = new EventEmitter;

post = this.CartService.getdetail();
A:string = '';
B:string = '';
C:string = '';
re:string = '';
y:number=0;
x:number=0;
a:number=0;
b:number=0;
c:number=0;
name: string = '';
address: string = '';
pass:string='';
disableinput:boolean=true;
displayname:boolean = false;
displayname1:boolean = true;
displayname2:boolean = false;
displayname3:boolean = false;
displayname4:boolean = true;
displaynam5:boolean = true;


  constructor(private DetailService:DetailService,private CartService:CartService) { }

  ngOnInit(): void {

    if(window.innerWidth <= 360){
        this.displayname3 = true;
        if(this.post.length == 0){this.displayname3 = false;}
        this.displayname4 = false;
      }
    
    for(let i=0;i<this.post.length;i++){

      if(this.post[i].amount < 1){

        this.post.splice(i,1);
        break;

      }

    }
    
    this.re = '';

    for(let i=0;i<this.post.length;i++){

      this.y +=(this.post[i].price*this.post[i].amount);
      
    }    
    
    
    
    this.A = this.y.toString();

    for(let w=0;w<this.A.length;w++){

          if(this.A[w] == '.'){

            this.B = this.A.slice(0,w);
            this.C = this.A.substring(w+1,w+3);

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



  if(this.post.length!==0){this.displayname = true;this.displayname1 = false; this.displayname2 = false;};
  if(this.post.length>=2){this.displayname2 = true;};
  if(this.post.length==1){this.displayname2 = false};

  this.CartService.tem = this.post.length ;

}

namedata(event:any){
    
    this.name = event.target.value;
    this.CartService.name = this.name;
    this.CartService.z = parseInt(this.re);

    if(this.name.length>=3){

      this.a=1;

    }
    else{

      this.a = 0;

    }
    
    if(this.a == 1 && this.b == 1 && this.c == 1){

      this.disableinput=false;

    }
    else if (this.a==0){

      this.disableinput = true;

    }

  }

addressdata(event:any){
    
    this.address = event.target.value;
    this.CartService.address = this.address;

    if(this.address.length>=6){

      this.b=1;

    }

    else{

      this.b=0;

    }

    if(this.a == 1 && this.b == 1 && this.c == 1){

      this.disableinput=false;

    }

    else if (this.b==0){

      this.disableinput = true;

    }

  }


passdata(event:any){
    
    this.pass = event.target.value;

    if(this.pass.length == 16){

      this.c = 1;

    }

    else {

      this.c = 0;

    }
    
    if(this.a == 1 && this.b == 1 && this.c == 1){

      this.disableinput=false;

    }
    else if (this.c==0){

      this.disableinput = true;

    }
  
  }


update(event:any,post:Post){
    
    post.amount = parseInt(event.target.value);

    for(let i=0;i<this.post.length;i++){

      if(this.post[i].amount < 1 || Number.isNaN(this.post[i].amount) == true){

        this.post.splice(i,1);
        break;

      }

    }
    
    this.y=0;

    for(let i=0;i<this.post.length;i++){
        
      this.y += (this.post[i].price*this.post[i].amount);

    }            

        this.A = this.y.toString();

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

    
    if(this.post.length==0)
    {this.displayname = false; this.displayname1 = true; this.displayname2 = false; this.displayname3 = false;};
    if(this.post.length==1){this.displayname2 = false};
    
    this.CartService.tem = this.post.length ;
    
    if(this.post.length == 2){

      scrollTo(0,0);

    }
  
  }

  public markedname(){

    this.markname.emit(this.name);

  }

deleteAll(){

    this.post = [];

    if(this.post.length==0)
    {this.displayname = false; this.displayname1 = true; this.displayname2 = false; this.displayname3 = false;};
    this.CartService.tem = this.post.length;
    this.CartService.getdetail();

  }

addde(post:Post){

    this.DetailService.adddetail(post);

  }

delete(post:Post){

    for(let i=0;i<this.post.length;i++){

      if(this.post[i].id == post.id){

        this.y -= this.post[i].amount*this.post[i].price;

        this.post.splice(i,1);
        
        this.A = this.y.toString();

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
    break;

      }

    }

    if(this.post.length==0)
    {this.displayname = false; this.displayname1 = true; this.displayname2 = false; this.displayname3 = false;};
    if(this.post.length==1){this.displayname2 = false};
    
    this.CartService.tem = this.post.length ;
    
    if(this.post.length == 2){

      scrollTo(0,0);

    }

    this.CartService.tem = this.post.length;
    
}

confirm(){
  this.CartService.z = parseInt(this.re);
  this.displayname4 = true;
  this.displaynam5  = false;
}

}
