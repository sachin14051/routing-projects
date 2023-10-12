import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PageNotFoundComponent } from "./shared/components/page-not-found/page-not-found.component";
import { HomeComponent } from "./shared/components/home/home.component";
import { ProductsComponent } from "./shared/components/products/products.component";
import { UsersComponent } from "./shared/components/users/users.component";
import { UserComponent } from "./shared/components/user/user.component";
import { ProductComponent } from "./shared/components/product/product.component";
import { EditUserComponent } from "./shared/components/edit-user/edit-user.component";
import { EditProductComponent } from "./shared/components/edit-product/edit-product.component";
import { AuthGuard } from "./shared/service/auth.guard";
import { AdminComponent } from "./shared/components/admin/admin.component";
import { SuperAdminComponent } from "./shared/components/super-admin/super-admin.component";
import { UserRoleGuard } from "./shared/service/user-role.guard";

const routes: Routes = [
  { path: "", component: HomeComponent },
  {
    path: "users", component: UsersComponent, title: "users",
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard], children: [
      { path: 'adduser', component: EditUserComponent },
      { path: ':userdId', component: UserComponent },
      { path: ":userId/edit", component: EditUserComponent }
    ]
  },
  {
    path: "superAdmin", component: SuperAdminComponent, data: { userRole: "superAdmin" },title: "superAdmin",
    canActivate: [AuthGuard,UserRoleGuard]
  },
  { path: "admin", component: AdminComponent, canActivate:[AuthGuard,UserRoleGuard], title: "admin" ,data: { userRole: "admin" }},
  {
    path: "products", component: ProductsComponent, title: "products",
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: [
      { path: ":pId", component: ProductComponent, },
      { path: ":pId/editProduct", component: EditProductComponent },]
  },

  {
    path: "page-not-found", component: PageNotFoundComponent,
    data: { msg: "error page" }
  },
  { path: "**", redirectTo: "page-not-found" }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }