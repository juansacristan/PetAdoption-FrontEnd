import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-type-pet-edit',
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './type-pet-edit.component.html',
  styleUrl: './type-pet-edit.component.css'
})
export class TypePetEditComponent {
  formData!: FormGroup;
  constructor(){
      this.formData = new FormGroup({
        name: new FormControl(
          '',
          [Validators.required]
        ),
        description: new FormControl(
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
