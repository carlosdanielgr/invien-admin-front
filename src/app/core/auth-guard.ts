import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export function authGuard(): CanActivateFn {
  return () => {
    const router: Router = inject(Router);
    const token = localStorage.getItem('token');
    if (token) return true;
    return router.navigate(['']);
  };
}
