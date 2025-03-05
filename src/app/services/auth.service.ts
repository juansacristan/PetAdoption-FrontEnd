import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';
import { Response } from '../interfaces/response'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private http: HttpClient ) { }

  registerUser( newUser: User ) : Observable<Response<User>> {
    return this.http.post<Response<User>>( 'http://localhost:3000/api/auth/register', newUser );
  }

  loginUser( credentials: User ) : Observable<Response<User>> {
    return this.http.post<Response<User>>( 'http://localhost:3000/api/auth/login', credentials );
  }
}