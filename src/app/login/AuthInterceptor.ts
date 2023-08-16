import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { AuthService } from './AuthService';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('access_token');
    if (token) {
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
        },
      });
    }

    return next.handle(req).pipe(
      catchError((error) => {
        if (error.status === 401) {
          // Intenta refrescar el token si la solicitud falla con un error 401
          return this.authService.refreshToken().pipe(
            switchMap((response) => {
              localStorage.setItem('access_token', response.access_token);
              const newRequest = req.clone({
                setHeaders: {
                  Authorization: `Bearer ${response.access_token}`,
                },
              });
              return next.handle(newRequest);
            })
          );
        }
        throw error;
      })
    );
  }
}
