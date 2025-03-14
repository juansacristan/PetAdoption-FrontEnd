import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pet-edit',
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './pet-edit.component.html',
  styleUrl: './pet-edit.component.css'
})
export class PetEditComponent {
   formData!: FormGroup;
      genders: String[] = ['Macho', 'Femenino'];
      typeanimals: String[] = ['Perro/a', 'Gato/a'];
      states: String[] = ['Vacunado', 'Esterilizado', 'Hospitalizado', 'Desparasitado', 'Entrenado'];
  
      constructor(){
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
      onSubmit(){
        const inputData = this.formData.value;
    
        if(this.formData.valid){
          console.log(inputData)
        }
        
        this.formData.reset();
      }
  
}
