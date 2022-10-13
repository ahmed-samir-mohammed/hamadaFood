import { Category } from './../../core/model/product';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductsService } from 'src/app/core/Services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  productList!: any;
  searchForm!: FormGroup;
  categoryList!: any[];
  constructor(
    private productsService: ProductsService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.searchForm = this.fb.group({
      title: [null],
      category: [null],
    });
    this.getProduct();
    this.getCategory();
  }
  getProduct() {
    this.productsService.getAllProduct().subscribe((res: any) => {
      this.productList = res.data;
    });
  }

  submitForm(form: FormGroup) {
    console.log(form);
    this.productsService
      .getAllProducParams({
        title: this.searchForm.controls['title'].value,
        category: this.searchForm.controls['category'].value,
      })
      .subscribe((res: any) => {
        this.productList = res.data;
      });
  }

  getCategory() {
    this.productsService.getAllCategory().subscribe((res: any) => {
      this.categoryList = res.data;
    });
  }
  checkValue(e: any) {
    e.target.value == '' ? this.getProduct() : false;
  }
}
