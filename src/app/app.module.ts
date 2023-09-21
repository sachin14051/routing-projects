import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { CoinsComponent } from './shared/components/coins/coins.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { RoutingModule } from './shared/module/routing.module';
import { HomeComponent } from './shared/components/home/home.component';
import { ProductsComponent } from './shared/components/products/products.component';
import {HttpClientModule} from "@angular/common/http";
import { SearchPipe } from './shared/pipe/search.pipe'
import { FormsModule } from '@angular/forms';
import { UsersComponent } from './shared/components/users/users.component';
import { UserComponent } from './shared/components/user/user.component';
import { ProductComponent } from './shared/components/product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CoinsComponent,
    PageNotFoundComponent,
    HomeComponent,
    ProductsComponent,
    SearchPipe,
    UsersComponent,
    UserComponent,
    ProductComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
