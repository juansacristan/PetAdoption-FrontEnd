import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-type-pets',
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './type-pets.component.html',
  styleUrl: './type-pets.component.css'
})
export class TypePetsComponent {
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
