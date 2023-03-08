import { CartService } from './../../services/cart.service';
import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  public productList: any;

  constructor(private _api: ApiService, private _cartService : CartService) {}

  ngOnInit(): void {
    this._api.getProduct().subscribe((response) => {
      this.productList = response;

      this.productList.forEach((a:any)=>{
        Object.assign(a,{quantity:1,total:a.price});
      })
    });
  }

  addtocart(item : any){
    this._cartService.addToCart(item);
  }
}
