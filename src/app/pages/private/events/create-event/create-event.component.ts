import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-event',
  imports: [ ReactiveFormsModule],
  templateUrl: './create-event.component.html',
  styleUrl: './create-event.component.css'
})
export class CreateEventComponent {
  formData!: FormGroup

  constructor () {
    this.formData = new FormGroup ({
      name: new FormControl(),
      date: new FormControl(),
      starTime: new FormControl(),
      timeOfCompletion: new FormControl(),
      place: new FormControl(),
      descripcion: new FormControl()
      
    })
  }
onSubmit () {
  console.log( this.formData.value);
  this.formData.reset();
}
}
