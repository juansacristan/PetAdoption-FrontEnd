import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import  { Event } from '../interfaces/event';
import { Response } from '../interfaces/response';
@Injectable({
  providedIn: 'root'
})
export class EventService {

  private token!: string;
  private headers!: HttpHeaders;

  constructor( private http: HttpClient) {
    this.token = localStorage.getItem('token')??'';
    this.headers = new HttpHeaders().set('X-Token', this.token!);
  }

  createEvent( newEvent: Event ) : Observable<Response<Event>>{
    console.log( newEvent );
    //return this.http.post<Response<Event>>( "http://localhost:3000/api/events", newEvent);
    //debe quedar de esta forma para que funcione
    return this.http.post<Response<Event>>( "http://localhost:3000/api/events", newEvent, { headers: this.headers });
  }

  getEvents() : Observable<Response<Event[]>>{
    return this.http.get<Response<Event[]>>( "http://localhost:3000/api/events");
  }

    deleteEventById(id: string) : Observable<Response<Event>> {
      // this.http.delete('http://localhost:3000/api/events/' + id);
      return this.http.delete<Response<Event>>(`http://localhost:3000/api/events/${id}`, {headers: this.headers});
    }

    getEventById(id: string) : Observable<Response<Event>>{
      return this.http.get<Response<Event>>('http://localhost:3000/api/events/' + id);
    }
    uptadeEventById(id:string, uptadePet: Event): Observable<Response<Event>>{
    return this.http.patch<Response<Event>>(`http://localhost:3000/api/events/${id}`, uptadePet, {headers: this.headers});
    }
}


