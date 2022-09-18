import { Component, OnInit,Output,EventEmitter} from '@angular/core';
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

y:number=0;
x:number=0;
a:number=0;
b:number=0;
c:number=0;
name: string = '';
address: string = '';
pass:string='';
disableinput:boolean=true;
notnum:boolean=false;

  constructor(private DetailService:DetailService,private CartService:CartService) { }

  ngOnInit(): void {
    
    for(let i=0;i<this.post.length;i++){
        this.y=this.post[i].total;
        Math.floor(this.y);
      }
      
  }

  
  namedata(event:any){
    this.name = event.target.value;

    
    this.CartService.name = this.name;
    this.CartService.z = this.y;
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
    console.log(this.b);

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
    post.amount = event.target.value;

    for(let i=0;i<this.post.length;i++){
      if(this.post[i].amount == 0){
        this.post.splice(i,1);
        break;
      }
    }
    
    this.y=0;

    for(let i=0;i<this.post.length;i++){
      this.y+=(this.post[i].price*this.post[i].amount);
      
      Math.floor(this.y);
    }


    
  }

  public markedname(){
   this.markname.emit(this.name);
  }

}
