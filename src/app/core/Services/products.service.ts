import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment';
import { Product, Category } from '../model/product';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  getAllProduct(): Observable<Product> {
    return this.http.get<Product>(`${env.API}/products`);
  }

  getAllProducParams(body: any): Observable<Product> {
    console.log(body);
    let params = new HttpParams();
    params = new HttpParams().set('category', body.category);
    params = new HttpParams().set('title', body.title);
    return this.http.get<Product>(`${env.API}/products`, { params: params });
  }

  getAllCategory(): Observable<Category> {
    return this.http.get<Category>(`${env.API}/categories`);
  }
}
