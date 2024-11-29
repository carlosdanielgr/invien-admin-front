import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';

import { errorFn } from '@shared/functions/errors.function';

export const adminInterceptor: HttpInterceptorFn = (req, next) => {
  const router = inject(Router);
  const token = localStorage.getItem('token');

  const handleError = (err: any) => {
    if (err.status === 401) {
      localStorage.removeItem('token');
      router.navigate(['']);
      errorFn('La sesión ha expirado');
    }
    return throwError(() => err);
  };

  if (token) {
    const clonedReq = req.clone({
      headers: req.headers.set('Authorization', token),
    });
    return next(clonedReq).pipe(catchError((err) => handleError(err)));
  }
  return next(req).pipe(catchError((err) => handleError(err)));
};
