import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core'
import { Pet } from '../interfaces/pet';
import { Observable } from 'rxjs';
import { Response } from '../interfaces/response';

@Injectable({
  providedIn: 'root'
})
export class PetService {

  private token!: string;
  private headers!: HttpHeaders;

  constructor( private http: HttpClient) {
    this.token = localStorage.getItem('token')??'';
    this.headers = new HttpHeaders().set('X-Token', this.token!);
  }

  createPet(newPet: Pet): Observable<Response<Pet>>{
    return this.http.post<Response<Pet>>('http://localhost:3000/api/pets', newPet, {headers: this.headers});
  }

  getPets(): Observable<Response<Pet[]>> {
    return this.http.get<Response<Pet[]>>('http://localhost:3000/api/pets')
  }

  deletePetById(id: string) : Observable<Response<Pet>> {
    // this.http.delete('http://localhost:3000/api/pets/' + id);
    return this.http.delete<Response<Pet>>(`http://localhost:3000/api/pets/${id}`, {headers: this.headers});
  }

  getPetById(id: string) : Observable<Response<Pet>>{
    return this.http.get<Response<Pet>>('http://localhost:3000/api/pets/' + id);
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