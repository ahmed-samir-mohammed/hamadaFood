import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/core/model/product';
import { CartService } from 'src/app/core/Services/cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
})
export class CartItemComponent implements OnInit {
  @Input('id') id!: string;
  @Input('sale') sale!: string;
  @Input('img') img!: string;
  @Input('category') category!: string;
  @Input('title') title!: string;
  @Input('price') price!: string;
  @Input('item') item!: Product;
  EyeImg: string = '../../../../../assets/img/eye.png';
  ShoppingCartImg: string = '../../../../../assets/img/shopping-cart.png';
  cartItems: any[] = [];
  constructor(private cartService: CartService) {}

  ngOnInit(): void {}

  addToCard(e: any, item: any) {
    this.cartService.sendCartItem(item);
    // this.cartItems.push(item);
    // console.log(this.cartItems);
    // localStorage.setItem('cart', JSON.stringify(this.cartItems));
  }
}
