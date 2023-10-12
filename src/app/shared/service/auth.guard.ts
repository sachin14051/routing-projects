import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthServiceService } from "./auth-service.service";

@Injectable({
   providedIn: 'root'
})

export class AuthGuard implements CanActivate, CanActivateChild {
   constructor(private _authService: AuthServiceService) {

   }
   canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
      boolean | Promise<boolean> | Observable<boolean> {

      return this._authService.authrization()
         .then((res: boolean) => {
            if (res) {
               return true
            } else {
               return false
            }
         })

   }
   canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
      return true
   }
}