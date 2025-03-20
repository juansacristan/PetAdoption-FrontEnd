import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';
import { catchError, map, of } from 'rxjs';

export const noauthGuard: CanActivateFn = (route, state) => {
  const authService = inject (AuthService);
  const router = inject (Router);

  return authService.verifyAuthenticateUser().pipe(
    map((isAuth) => {
      if (isAuth) {
        router.navigateByUrl('/admin');
        return false;
      } 
      else {
        return true;
      }
      
    }),
    catchError((err) => {
      console.error(err);
      return of(true);
    })
  );
};
