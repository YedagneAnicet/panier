import { CartService } from './../../services/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  public products: any = [];
  public grandTotal!: number;

  constructor(private _cartService: CartService) {}
  ngOnInit(): void {
    this._cartService.getProducts().subscribe((respone) => {
      this.products = respone;
      this.grandTotal = this._cartService.getTotalPrice();
    });
  }

  removeItem(item: any) {
    this._cartService.removeCartItem(item);
  }

  emptycart(){
    this._cartService.removeAllCart();
  }
}
