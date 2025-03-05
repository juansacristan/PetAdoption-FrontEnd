import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  // El servicio es quien se habla con el BackEnd, dirigiendose a cada uno de los EndPoints al mismo.

  private http = inject (HttpClient);

  constructor() { }

  registerUser(newUser: any){
    return this.http.post('http//localhost:3000/api/auth/register', newUser)
  }
}
