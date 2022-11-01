import { CartService } from './../../../../core/Services/cart.service';
import {
  AfterViewInit,
  Component,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit, AfterViewInit {
  @Output() total: EventEmitter<any> = new EventEmitter();
  cartList: any[] = [];
  counter: number = 1;
  item!: any;
  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.getCartData.subscribe((res) => {
      this.cartList = res;
      console.log(this.total);
      this.cartList.forEach((item) => {
        console.log(item.price);
      });
    });
  }

  ngAfterViewInit(): void {
    // this.checkItem(this.item);
  }

  increment(item: any) {
    item.count++;
    this.total = this.cartList.reduce(
      (accumulator, current) => accumulator + current.price,
      0
    );
  }

  decrement(item: any) {
    item.count--;
    item.count == 0 ? this.removeCartItem(item.count) : false;
    this.total = this.cartList.reduce(
      (accumulator, current) => accumulator - current.price,
      0
    );
  }

  removeCartItem(id: number) {
    const objWithIdIndex = this.cartList.findIndex((obj) => obj.id === id);
    this.cartList.splice(objWithIdIndex, 1);
    this.cartService.newCartList(this.cartList);
  }

  checkItem(item: any) {
    const cartElenemt: any = document.querySelectorAll('.cartItem');
    cartElenemt.forEach((el: any) => {
      +el.dataset.id == item.id ? this.increment(item) : false;
    });
  }
}
