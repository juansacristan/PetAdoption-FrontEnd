import { Component } from '@angular/core';
import { PetService } from '../../../services/pet.service';
import { Pet } from '../../../interfaces/pet';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-list-pets',
  imports: [RouterLink],
  templateUrl: './pets.component.html',
  styleUrl: './pets.component.css'
})
export class PetsComponent {

  pets: Pet[] = [];
  isLoading: boolean = true;

  constructor(private petService: PetService) {}

  // petService = inject(PetService);

  ngOnInit(){
    this.petService.getPets().subscribe({
      next: (data) => {
        console.log(data);

        this.pets = data.data ?? [];
        console.log('Peludos obtained successfully');

      },
      error: (error) => {
        console.error(error);

        setTimeout(() =>{
          this.isLoading=false;
        }, 2000);
      },
      complete: () => {
        setTimeout(() => {
          this.isLoading = false;
        }, 2000);
      }
    })
  }

  onRemove(id: string){

    if(!id){
      console.error('Id de peludo/a invalido/a');
      return;
    }

    this.petService.deletePetById(id).subscribe({
      next:(data) => {
        console.log(data);
        console.log(`Peludo/a ${id} eliminado/a exitosamente`);

        this.ngOnInit();    // Actualiza datos
      },
      error: (err) => {
        console.error(err);
      },
      complete: () => {
        
      }
    })

    console.log('Elimina peludo/a con Id: ' + id)
  }
}
