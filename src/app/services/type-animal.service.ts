import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Typeanimal } from '../interfaces/typeanimal';
import { Response } from '../interfaces/response';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TypeAnimalService {

  constructor(private http: HttpClient ) { }

  getTypeAnimal() : Observable<Response<Typeanimal[]>> {
    return this.http.get<Response<Typeanimal[]>> ('http://localhost:3000/api/animals');
  }

    // createTypeAnimal(newTypeAnimal: Typeanimal){
  //   const token = localStorage.getItem('token');
  //   const headers = new HttpHeaders().set('X-Token', token!);
  //   return this.http.post('http://localhost:3000/api/animals', newTypeAnimal);
  // }
}
