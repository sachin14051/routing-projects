import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { RoutingModule } from './routing.module';
import { HomeComponent } from './shared/components/home/home.component';
import { ProductsComponent } from './shared/components/products/products.component';
import {HttpClientModule} from "@angular/common/http";
import { FormsModule } from '@angular/forms';
import { UsersComponent } from './shared/components/users/users.component';
import { UserComponent } from './shared/components/user/user.component';
import { ProductComponent } from './shared/components/product/product.component';
import { MaterialModule } from './shared/module/material.module';
import { EditUserComponent } from './shared/components/edit-user/edit-user.component';
import { EditProductComponent } from './shared/components/edit-product/edit-product.component';

import {MatIconModule, } from '@angular/material/icon'
import {MatButtonModule} from '@angular/material/button'
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { SuperAdminComponent } from './shared/components/super-admin/super-admin.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PageNotFoundComponent,
    HomeComponent,
    ProductsComponent,
    UsersComponent,
    UserComponent,
    ProductComponent,
    EditUserComponent,
    EditProductComponent,
    SuperAdminComponent,
    

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RoutingModule,
    HttpClientModule,
    FormsModule,
    MaterialModule,
    MatIconModule,
    MatButtonModule,
    MatButtonToggleModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
