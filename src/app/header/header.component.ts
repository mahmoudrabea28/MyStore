import { Component, OnInit } from '@angular/core';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  icon = faShoppingCart ;
  post = this.CartService.getdetail();
  


constructor(private CartService:CartService) { }

ngOnInit(): void {
}

// reload(){
//   window.location.reload();
// }

}
