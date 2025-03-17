import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PetService } from '../../../../services/pet.service';
import { TypeAnimalService } from '../../../../services/type-animal.service';
import { Typeanimal } from '../../../../interfaces/typeanimal';
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
      petData!: Pet;
      typeanimals!: Typeanimal[];
      genders: String[] = ['Macho', 'Femenino'];
      states: String[] = ['Vacunado', 'Esterilizado', 'Hospitalizado', 'Desparasitado', 'Entrenado'];
  
      constructor(
        private route: ActivatedRoute,
        private petService: PetService,
        private typeanimalService: TypeAnimalService,
        private router: Router
      ){
        this.formData = new FormGroup({
          name: new FormControl('', [Validators.required]),
          race: new FormControl('', [Validators.required]),
          age: new FormControl('', [Validators.required]),
          gender: new FormControl('', [Validators.required]),
          typeAnimal: new FormControl('', [Validators.required]),
          description: new FormControl('', [Validators.required]),
          urlImage: new FormControl('', [Validators.required]),
          state: new FormControl('', [Validators.required]),
        });
      }

      
      ngOnInit(){
        this.getTypeAnimal();
        this.getParamId();
        this.getFormData();
        
      

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
            this.petData = data.data !;
                  // Aqui se guardan los datos del peludos por Id
                  this.formData.patchValue({
                    name: data.data?.name,
                    race: data.data?.race,
                    age: data.data?.age,
                    gender: data.data?.gender,
                    typeAnimal: data.data?.typeAnimal,
                    description: data.data?.description,
                    urlImage: data.data?.urlImage,
                    state: data.data?.state

                  })
          
          },
          error:(err) => {
            console.error(err);
          },
          complete: () => {}
        });
      }

      getTypeAnimal(){
        this.typeanimalService.getTypeAnimal().subscribe({
          next:(data) => {
            console.log(data);        // data ==> {ok; true, data: []}
            this.typeanimals = data.data ?? [];
          },
          error: (err) => {
            console.error(err)
          },
          complete: () => {}
        })
      }

      onSubmit(){
        const inputData = this.formData.value;
    
        if(this.formData.valid){
          console.log(inputData);
        }
        
        this.petService.uptadePetById(this.petId, inputData).subscribe({
          next: (data) => {
            console.log(data);
            this.router.navigateByUrl('admin/pet')
          },
          error: (err) => {
            console.error(err)
          },
          complete: () => {},
        })
      }
  
}
