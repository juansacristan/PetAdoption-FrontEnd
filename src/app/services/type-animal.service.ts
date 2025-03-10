import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TypeAnimalService {

  constructor(private http: HttpClient ) { }

  getTypeAnimal(){
    return this.http.get('http://localhost:3000/api/animals');
  }
}
