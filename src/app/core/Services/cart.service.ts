import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor() {}

  private cart: BehaviorSubject<any[]> = new BehaviorSubject<any>([]);
  getCartData: Observable<any[]> = this.cart.asObservable();

  sendCartItem(data: any) {
    if (this.cart.value.length != 0) {
      for (var i = 0; i < this.cart.value.length; i++) {
        // console.log(this.cart.value[i]);
        if (this.cart.value[i].id == data.id) {
          data.count++;
          // console.log('From IF');
        } else {
          this.cart.next(this.cart.getValue().concat([data]));
          // console.log('From Else');
        }
      }
    } else {
      this.cart.next(this.cart.getValue().concat([data]));
    }
  }

  newCartList(data: any) {
    this.cart.next(data);
  }
}
