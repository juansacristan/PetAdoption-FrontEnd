import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  // Atributos
  formData!: FormGroup;
  constructor(){
    // Agrupacion de campos del formulario
    this.formData = new FormGroup({
      username: new FormControl(
        '',
        [Validators.required, Validators.email]
      ),
      password: new FormControl(
        '',
        [Validators.required, Validators.minLength(6), Validators.maxLength(12)]
      )
    });
  }

  onSubmit(){
    const inputData = this.formData.value;
    if (this.formData.valid){
      console.log(inputData); // Ensviar los datos al BackEnd
    }; 
    this.formData.reset(); // Limpia los campos del formulario
  }
}
