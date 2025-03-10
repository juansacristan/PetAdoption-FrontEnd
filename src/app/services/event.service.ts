import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor( private http: HttpClient) { }

  createEvent( newEvent: any ) {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('X-token', token!);
    return this.http.post( "http://localhost:3000/api/event", newEvent);
    // debe quedar de esta forma para que funcione
    // return this.http.post( "http://localhost:3000/api/event", newEvent, { headers });
  }
}


