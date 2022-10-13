import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Layout/navbar/navbar.component';
import { FooterComponent } from './Layout/footer/footer.component';
import { HomeComponent } from './Pages/home/home.component';
import { WhoAreWeComponent } from './Pages/home/components/who-are-we/who-are-we.component';
import { MainHomeComponent } from './Pages/home/components/main-home/main-home.component';
import { CompaniesComponent } from './Pages/home/components/companies/companies.component';
import { CertificatesComponent } from './Pages/home/components/certificates/certificates.component';
import { UpperBarComponent } from './Layout/upper-bar/upper-bar.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { MapComponent } from './Pages/contact/components/map/map.component';
import { FormComponent } from './Pages/contact/components/form/form.component';
// import { GoogleMapsModule } from '@angular/google-maps';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { ProductComponent } from './Pages/product/product.component';
import { CartItemComponent } from './Pages/product/components/cart-item/cart-item.component';
import { CartComponent } from './Layout/upper-bar/components/cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    WhoAreWeComponent,
    MainHomeComponent,
    CompaniesComponent,
    CertificatesComponent,
    UpperBarComponent,
    ContactComponent,
    MapComponent,
    FormComponent,
    ProductComponent,
    CartItemComponent,
    CartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //GoogleMapsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-center',
    }), // ToastrModule added
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
