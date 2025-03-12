import { Component, inject } from '@angular/core';
import { PetService } from '../../../services/pet.service';
import { Pet } from '../../../interfaces/pet';

@Component({
  selector: 'app-list-pets',
  imports: [],
  templateUrl: './list-pets.component.html',
  styleUrl: './list-pets.component.css'
})
export class ListPetsComponent {

  pets: Pet[] = [];
  isLoading: boolean = true;

  constructor(private petService: PetService) {}

  // petService = inject(PetService);

  ngOnInit(){
    this.petService.getPets().subscribe({
      next: (data) => {
        console.log(data);

        this.pets = data.data ?? [];
        console.log('Peludos obtained successfully')
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
}
