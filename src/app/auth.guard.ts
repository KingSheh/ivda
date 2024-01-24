// auth.guard.ts
import { Injectable } from '@angular/core';
import { CanActivateFn, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {



  constructor(private authService: AuthService, private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const isAuthenticated = this.authService.isAuthenticated();

    if (!isAuthenticated) {
      this.router.navigate(['/login']);
      return false;
    }

    return true;
  }
}
