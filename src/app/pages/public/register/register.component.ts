import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  formData!: FormGroup;

  constructor(private authService: AuthService){
    this.formData = new FormGroup({
      name: new FormControl( '' , [ Validators.required ] ),
      username: new FormControl( '', [ Validators.required, Validators.email ] ),
      password: new FormControl( '', [ Validators.required, Validators.minLength( 6 ), Validators.maxLength( 12 ) ] ),
    });
  }
  onSubmit(){
    const inputData = this.formData.value;

    if( this.formData.valid ) {
      console.log( inputData );

    this.authService.registerUser( inputData ).subscribe({
      next: ( data ) => {
        console.log( data );
      },
      error: ( err ) => {
        console.error( err );
      },
      complete: () => {
        console.log( 'Registro exitoso' );
        this.formData.reset();    // Limpia los campos del formulario
      } 
    });
  }
 }
}