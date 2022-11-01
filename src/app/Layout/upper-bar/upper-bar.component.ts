import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/core/Services/cart.service';

@Component({
  selector: 'app-upper-bar',
  templateUrl: './upper-bar.component.html',
  styleUrls: ['./upper-bar.component.scss'],
})
export class UpperBarComponent implements OnInit {
  counter!: number;
  total!: number;
  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.getCartData.subscribe((res: any[]) => {
      this.counter = res.length;
    });
  }

  getTotal(e: number | string) {
    console.log(e);
  }
}
