import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CoinsComponent } from "../components/coins/coins.component";
import { PageNotFoundComponent } from "../components/page-not-found/page-not-found.component";
import { HomeComponent } from "../components/home/home.component";
import { ProductsComponent } from "../components/products/products.component";
import { UsersComponent } from "../components/users/users.component";
import { UserComponent } from "../components/user/user.component";
import { ProductComponent } from "../components/product/product.component";
import { CoinComponent } from "../components/coin/coin.component";
import { EditUserComponent } from "../components/edit-user/edit-user.component";
import { EditProductComponent } from "../components/edit-product/edit-product.component";

const routes : Routes = [
    {path : "" , component: HomeComponent},
    {path : "users", component : UsersComponent},
    {path:"users/:userdId", component :UserComponent},
    {path:"users/:userdId/edit", component :EditUserComponent},
    {path :"coin" , component : CoinsComponent},
    {path :"coin/:cNameId" , component : CoinComponent},
    {path :"products" , component : ProductsComponent},
    {path :"products/:pId" , component : ProductComponent},
    {path :"products/:pId/editProduct" , component : EditProductComponent},
    {path: "page-not-found", component : PageNotFoundComponent},
    {path: "**" , redirectTo : "page-not-found"}
]

@NgModule({
  imports :[RouterModule.forRoot(routes)],
  exports :[RouterModule]
})
export class RoutingModule{}