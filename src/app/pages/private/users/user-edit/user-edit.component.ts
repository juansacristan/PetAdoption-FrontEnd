import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-edit',
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './user-edit.component.html',
  styleUrl: './user-edit.component.css'
})
export class UserEditComponent {
   formData!: FormGroup;
    roles: String[] = ['registered', 'moderator', 'admin' ];
  
    constructor() {
      // Agrupacion de campos del formulario
      this.formData = new FormGroup({
        name: new FormControl(
          '',
          [Validators.required]
        ),
        age: new FormControl(),
        addres: new FormControl(),
        cellular: new FormControl(
          '',
          [Validators.required, Validators.minLength(9), Validators.maxLength(12)]
        ),
        role: new FormControl('',[Validators.required]),
        username: new FormControl(
          '',
          [Validators.required, Validators.email]
        ),
        password: new FormControl(
          '',
          [Validators.required, Validators.minLength(5), Validators.maxLength(8)]
        )
      });
     
    }
  
    onSubmit() {
      // Obtiene los valores de los campos campos del formulario
      const inputData = this.formData.value;
  
      // Verifica el estado de validacion del formulario
      if( this.formData.valid ) {
        console.log( inputData );   // Enviar los datos al BackEnd
      }
  
      this.formData.reset();    // Limpia los campos del formulario
    }
}
