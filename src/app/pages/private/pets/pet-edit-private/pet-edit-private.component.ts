import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PetService } from '../../../../services/pet.service';
import { Pet } from '../../../../interfaces/pet';

@Component({
  selector: 'app-pet-edit-private',
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './pet-edit-private.component.html',
  styleUrl: './pet-edit-private.component.css'
})
export class PetEditPrivateComponent {
      formData!: FormGroup; //
      petId!: string;       //Guardar el Id de la ruta
      petData!: Pet;        //Guardar los datos del peludo por Id
      genders: String[] = ['Macho', 'Femenino'];
      typeanimals: String[] = ['Perro/a', 'Gato/a'];
      states: String[] = ['Vacunado', 'Esterilizado', 'Hospitalizado', 'Desparasitado', 'Entrenado'];
  
      constructor(
        private route: ActivatedRoute,
        private petService: PetService
      ){
        this.formData = new FormGroup({
          name: new FormControl('', [Validators.required]),
          race: new FormControl('', [Validators.required]),
          age: new FormControl('', [Validators.required]),
          gender: new FormControl('', [Validators.required]),
          typeanimal: new FormControl('', [Validators.required]),
          description: new FormControl('', [Validators.required]),
          image: new FormControl('', [Validators.required]),
          state: new FormControl('', [Validators.required]),
        });
      }

      
      ngOnInit(){
        this.getParamId();
        this.getFormData();
        this.setFormData();
        // Obtenemos el Id de la ruta parametrizada
        // this.route.params.subscribe({
        //   next:(data) => {
        //     this.petId = data ['id'];
        //     console.log(this.petId);
        //   },
        //   error:(err) => {
        //     console.error(err);
        //   },
        //   complete: () => {}
        // });
      }

      getParamId(){
        this.route.params.subscribe({
          next:(data) => {
            this.petId = data ['id']; // Asignamos el Id al atributo de la clase petId
            console.log(this.petId);

          },
          error:(err) => {
            console.error(err);
          },
          complete: () => {}
        });
      }

      getFormData(){
        this.petService.getPetById( this.petId ).subscribe({
          next: (data) => {
            console.log(data.data);

            this.petData = data.data!;        // Aqui se guardan los datos del peludos por Id
          
          },
          error:(err) => {
            console.error(err);
          },
          complete: () => {}
        });
      }

      setFormData(){
        this.formData.setValue({
          name: this.petData.name,
          race: this.petData.race,
          age: this.petData.age,
          gender: this.petData.gender,
          typeanimal: this.petData.typeAnimal,
          description: this.petData.description,
          image: this.petData.urlImage,
          state: this.petData.state,
        })
      }

      onSubmit(){
        const inputData = this.formData.value;
    
        if(this.formData.valid){
          console.log(inputData)
        }
        
        this.formData.reset();
      }
  
}
