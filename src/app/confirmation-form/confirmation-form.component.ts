import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-confirmation-form',
  templateUrl: './confirmation-form.component.html',
  styleUrls: ['./confirmation-form.component.css']
})
export class ConfirmationFormComponent implements OnInit {

  @Output() public markname = new EventEmitter;

total = this.CartService.z;
a:number=0;
b:number=0;
c:number=0;
name: string = '';
address: string = '';
pass:string='';
disableinput:boolean=true;


  constructor(private CartService:CartService) { }

  ngOnInit(): void {
  }

  namedata(event:any){
    
    this.name = event.target.value;
    this.CartService.name = this.name;

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

  public markedname(){

    this.markname.emit(this.name);

  }

}
