import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { EventService } from '../../../../services/event.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-event',
  imports: [ReactiveFormsModule],
  templateUrl: './create-event.component.html',
  styleUrl: './create-event.component.css'
})
export class CreateEventComponent {
  formData!: FormGroup
  states: String[] = ['abierto', 'cerrado']

  constructor ( 
    private eventService: EventService,
    private router: Router
  ){
      this.formData = new FormGroup ({
        name: new FormControl(),
        date: new FormControl(),
        starttime: new FormControl(),
        timeofCompletion: new FormControl(),
        place: new FormControl(),
        description: new FormControl(),
        state: new FormControl(),
        urlImage: new FormControl()
      })
    }
    onSubmit () {
      const inputData = this.formData.value;

      console.log( this.formData.value);
      if( this.formData.valid) {
        console.log( inputData );
        
        this.eventService.createEvent( inputData ).subscribe({
          next: (data) => {
            console.log( data );
          },
          error: (err) => {
            console.log( err );
          },
          complete: () => {
            console.log( 'Register event successfully' );
            this.formData.reset();
            this.router.navigate(['/events']);
          }
      });
    }
  }
  }
