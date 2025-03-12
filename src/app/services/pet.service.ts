import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core'
import { Pet } from '../interfaces/pet';
import { Observable } from 'rxjs';
import { Response } from '../interfaces/response';

@Injectable({
  providedIn: 'root'
})
export class PetService {

  constructor( private http: HttpClient) { }

  createPet(newPet: Pet): Observable<Response<Pet>>{
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('X-Token', token!);

    return this.http.post<Response<Pet>>('http://localhost:3000/api/pets', newPet, {headers});
  }

  getPets(): Observable<Response<Pet[]>> {
    return this.http.get<Response<Pet[]>>('http://localhost:3000/api/pets')
  }
}








// constructor( private http: HttpClient) { }

// createPet(newPet: any){
//   return this.http.post('http://localhost:3000/api/pets', newPet);
// }


// createPet(newPet: Pet): Observable<Response<Pet>>{
//   const token = localStorage.getItem('token');
//   const header = new HttpHeaders().set('X-Token', token!)
//   return this.http.post<Response<Pet>>('http://localhost:3000/api/pets', newPet, {});
// }