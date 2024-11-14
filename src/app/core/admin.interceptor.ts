import { HttpInterceptorFn } from '@angular/common/http';

export const adminInterceptor: HttpInterceptorFn = (req, next) => {
  const token = localStorage.getItem('token');
  if (token) {
    const clonedReq = req.clone({
      headers: req.headers.set('Authorization', token),
    });
    return next(clonedReq);
  }
  return next(req);
};
