import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { catchError, map, of } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {

  const authService = inject (AuthService);
  const router = inject (Router);

  return authService.verifyAuthenticateUser().pipe(
    map((isAuth) => {
      if (!isAuth) {
        router.navigateByUrl('/login');
        return false;
      } 
      else {
        return true;
      }
    }),
    catchError((err) => {
      console.error(err);
      return of(false);
    })
  );
  // authService.verifyAuthenticateUser().subscribe({
  //   next:(data) => {
  //     console.log(data)
  //   },
  //   error:(err) => {
  //     console.error(err)
  //   },
  //   complete:() => {
  //     console.log('AuthGuard se ha ejecutado');
  //   }
  // });
};
