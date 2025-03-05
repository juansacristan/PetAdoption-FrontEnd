import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-type-pet-new',
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './type-pet-new.component.html',
  styleUrl: './type-pet-new.component.css'
})
export class TypePetNewComponent {
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
