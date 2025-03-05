import { Component } from '@angular/core';
import { FormControl, FormControlName, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-events',
  imports: [ ReactiveFormsModule],
  templateUrl: './events.component.html',
  styleUrl: './events.component.css'
})
export class EventsComponent {
  formData!: FormGroup

  constructor () {
    this.formData = new FormGroup ({
      nameofevents: new FormControl(),
      date: new FormControl(),
      starttime: new FormControl(),
      timeofcompletion: new FormControl(),
      place: new FormControl(),
      descripcion: new FormControl()
    })
  }
  onSubmit () {
    console.log( this.formData.value);
    this.formData.reset();
  }
};
