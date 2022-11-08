import { ProductDetaileComponent } from './Pages/product-detaile/product-detaile.component';
import { ProductComponent } from './Pages/product/product.component';
import { HomeComponent } from './Pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './Pages/contact/contact.component';
import { CheckoutComponent } from './Pages/checkout/checkout.component';
import { WhoAreWeComponent } from './Pages/home/components/who-are-we/who-are-we.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'product', component: ProductComponent },
  { path: 'product/:id', component: ProductDetaileComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'checkout', component: CheckoutComponent },
  {
    path: 'who' , component: WhoAreWeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
