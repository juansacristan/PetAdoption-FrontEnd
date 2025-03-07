import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  // Atributos
  formData!: FormGroup;
  constructor(private authService: AuthService){
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
    this.authService.loginUser( inputData ).subscribe({
      next: ( data ) => {
        console.log( data );
        localStorage.setItem('token', data.token! );
        delete data.data?.password;
        localStorage.setItem('authUser', JSON.stringify( data.data ) );
      },
      error: ( err ) => {
        console.error( err );
      },
      complete: () => {
        this.formData.reset();    // Limpia los campos del formulario
      }
    }); // Limpia los campos del formulario
  }
}
