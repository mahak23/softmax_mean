import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from '../_services/authentication.service';



@Injectable({ providedIn: 'root' })
export class UserAuthGuard implements CanActivate {
    constructor(private Authguardservice: AuthenticationService, private router: Router) { }


    canActivate(): boolean {
        if (!this.Authguardservice.gettoken()) {
            this.router.navigateByUrl("/auth/login");
        }
        return this.Authguardservice.gettoken();
    }
}