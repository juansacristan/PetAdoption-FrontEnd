import { state } from '@angular/animations';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-event',
  imports: [ReactiveFormsModule],
  templateUrl: './edit-event.component.html',
  styleUrl: './edit-event.component.css'
})
export class EditEventComponent {
  formData!: FormGroup

  constructor () {
    this.formData = new FormGroup ({
      name: new FormControl(),
      date: new FormControl(),
      starTime: new FormControl(),
      timeOfCompletion: new FormControl(),
      place: new FormControl(),
      descripcion: new FormControl(),
      state: new FormControl()
    })
  }
onSubmit () {
  console.log( this.formData.value);
  this.formData.reset();
}
}