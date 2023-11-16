import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
  
  name = this.CartService.name;
  total = this.CartService.z;

  constructor(private CartService:CartService) { }

  ngOnInit(): void {
    
  }

}
