import { Component } from '@angular/core';
import { EventService } from '../../../../services/event.service';
import { Event } from '../../../../interfaces/event';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-list-of-events',
  imports: [RouterLink],
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
        console.log( "eventos obtained successfully" );
      },

      error: (error) => {
        console.error(error);

        setTimeout(() =>{
          this.isLoading=false;
        }, 2000);
      },
      complete: () => {
        setTimeout(() => {
          this.isLoading = false;
        }, 2000);
      }
    })
  }
  onRemove(id: string){

    if(!id){
      console.error('Id de evento invalido/a');
      return;
    }

    this.EventService.deleteEventById(id).subscribe({
      next:(data) => {
        console.log(data);
        console.log(`evento ${id} eliminado/a exitosamente`);
      },
      error: (err) => {
        console.error(err);
      },
      complete: () => {
        
      }
    })

    console.log('Elimina evento con Id: ' + id)
  }

}
