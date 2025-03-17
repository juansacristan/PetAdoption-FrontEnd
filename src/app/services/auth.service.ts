import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';
import { Response } from '../interfaces/response'
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authUser!: User | null;
  constructor( private http: HttpClient ) { }

  //Getter
  get user(): User | null{
    const authUser = localStorage.getItem('authUser');
    if(authUser){
      this.authUser = JSON.parse(authUser);
    }
    return this.authUser;
  }

  registerUser( newUser: User ) : Observable<Response<User>> {
    return this.http.post<Response<User>>( 'http://localhost:3000/api/auth/register', newUser );
  }

  loginUser( credentials: User ) : Observable<Response<User>> {
    return this.http.post<Response<User>>( 'http://localhost:3000/api/auth/login', credentials );
  }

  logoutUser() : Observable<boolean>{
    if(this.authUser){
      this.authUser = null;                     // Eliminar los datos del usuario autenticado atributo de clase
      localStorage.removeItem('token');
      localStorage.removeItem('authUser');

      return of(true);          // Usiario logueado   -of: Es la forma de envolver un valor para retornar un Observable de tipo boolean
    }

    return of(false);           // Usuario no esta logueado  -of: Es la forma de envolver un valor para retornar un Observable de tipo boolean
  }

}