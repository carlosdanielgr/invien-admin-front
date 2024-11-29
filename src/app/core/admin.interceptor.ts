import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { errorFn } from '@shared/functions/errors.function';
import { catchError, throwError } from 'rxjs';

export const adminInterceptor: HttpInterceptorFn = (req, next) => {
  const router = inject(Router);

  const token = localStorage.getItem('token');
  if (token) {
    const clonedReq = req.clone({
      headers: req.headers.set('Authorization', token),
    });
    return next(clonedReq);
  }
  return next(req).pipe(
    catchError((err) => {
      if (err.status === 401) {
        router.navigate(['']);
        errorFn('La sesión ha expirado');
      }
      return throwError(() => err);
    })
  );
};
