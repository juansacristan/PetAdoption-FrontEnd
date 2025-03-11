import { Component, inject } from '@angular/core';
import { PetService } from '../../../services/pet.service';

@Component({
  selector: 'app-list-pets',
  imports: [],
  templateUrl: './list-pets.component.html',
  styleUrl: './list-pets.component.css'
})
export class ListPetsComponent {

  petService = inject(PetService);

  ngOnInit(){
    this.petService.getPets().subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (error) => {
        console.error(error);
      },
      complete: () => {
        console.log('Obtuvo todos/as los/as peludos registrados/as')
      }
    })
  }
}
