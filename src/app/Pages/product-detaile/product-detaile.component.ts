import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/core/Services/products.service';
import { CartService } from 'src/app/core/Services/cart.service';

@Component({
  selector: 'app-product-detaile',
  templateUrl: './product-detaile.component.html',
  styleUrls: ['./product-detaile.component.scss'],
})
export class ProductDetaileComponent implements OnInit {
  id!: number;
  productDetail!: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private productsService: ProductsService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.id = params['id'];
    });
    console.log(this.id);
    this.getProductItem(this.id);
  }

  getProductItem(id: number) {
    this.productsService.getProductDetail(id).subscribe((res: any) => {
      this.productDetail = res.data;
      console.log(this.productDetail);
    });
  }

  addToCard(e: any, item: any) {
    this.cartService.sendCartItem(item);
  }
}
