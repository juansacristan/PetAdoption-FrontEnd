import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PetService } from '../../../../services/pet.service';
import { TypeAnimalService } from '../../../../services/type-animal.service';
import { Typeanimal } from '../../../../interfaces/typeanimal';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-pet',
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './register-pet.component.html',
  styleUrl: './register-pet.component.css'
})
export class RegisterPetComponent {

    formData!: FormGroup;
    genders: String[] = ['Macho', 'Femenino'];
    typeanimals!: Typeanimal[];
    states: String[] = ['Vacunado', 'Esterilizado', 'Hospitalizado', 'Desparasitado', 'Entrenado'];

    constructor(
      private petService: PetService,
      private typeanimalService: TypeAnimalService,
      private router: Router
    ){
      this.formData = new FormGroup({
        name: new FormControl(
          '',
          [Validators.required]
        ),
        race: new FormControl(
          '',
          [Validators.required]
        ),
        age: new FormControl(
          '',
          [Validators.required]
        ),
        gender: new FormControl(
          '',
          [Validators.required]
        ),
        typeanimal: new FormControl(
          '',
          [Validators.required]
        ),
        description: new FormControl(
          '',
          [Validators.required]
        ),
        image: new FormControl(
          '',
          [Validators.required]
        ),
        state: new FormControl(
          '',
          [Validators.required]
        ),
      });
    }

    ngOnInit(){
      this.typeanimalService.getTypeAnimal().subscribe({
        next: ( data ) => {
          console.log( data );

          this.typeanimals = data.data ?? [];
          console.log( this.typeanimals );
          console.log('Obtiene todos los tipos de peludos');
        },
        error: ( err ) => {
          console.error( err );
        },
        complete: () => {
      
        }
      });
    }

    onSubmit(){
      const inputData = this.formData.value;
  
      if( this.formData.valid ) {
        console.log( inputData );
  
        this.petService.createPet( inputData ).subscribe({
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
