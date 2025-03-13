import { Component } from '@angular/core';
import { EventService } from '../../../../services/event.service';
import { Event } from '../../../../interfaces/event';

@Component({
  selector: 'app-list-of-events',
  imports: [],
  templateUrl: './list-of-events.component.html',
  styleUrl: './list-of-events.component.css'
})
export class ListOfEventsComponent {
  events: Event[] = [];
  isLoading: boolean = true;

  constructor( private EventService: EventService ) { }

  ngOnInit() {
    this.EventService.getEvents().subscribe( {
      next: ( data ) => {
        console.log( data );

        this.events = data.data?? [];
        console.log( "data.events" );
      },

      error: ( error ) => {
        console.log( error );
        this.isLoading = false;       
        
      },
      complete: () => {
        this.isLoading = false;
      }


  })

}

}
