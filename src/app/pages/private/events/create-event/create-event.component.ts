import { Component, input } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { EventService } from '../../../../services/event.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-event',
  imports: [ ReactiveFormsModule],
  templateUrl: './create-event.component.html',
  styleUrl: './create-event.component.css'
})
export class CreateEventComponent {
  formData!: FormGroup

  constructor ( private eventService: EventService, private router: Router) {
      this.formData = new FormGroup ({
        name: new FormControl(),
        date: new FormControl(),
        starttime: new FormControl(),
        timeofcompletion: new FormControl(),
        place: new FormControl(),
        descripcion: new FormControl(),
        state: new FormControl()
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
            console.log( 'Register product successfully' );
            this.formData.reset();
            this.router.navigate(['/events']);
          }
      });
    }
  }
  }
