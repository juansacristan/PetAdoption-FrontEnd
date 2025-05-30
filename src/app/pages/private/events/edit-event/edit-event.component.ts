import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from '../../../../services/event.service';
import { Event } from '../../../../interfaces/event';

@Component({
  selector: 'app-edit-event',
  imports: [ReactiveFormsModule],
  templateUrl: './edit-event.component.html',
  styleUrl: './edit-event.component.css'
})
export class EditEventComponent {
  formData!: FormGroup;
  eventId!: string;
  eventData!: Event;
  genders: String[] = ['abierto', 'cerrado'];

  constructor (
      private route: ActivatedRoute,
      private EventService: EventService,
      private router: Router
  ) {
    this.formData = new FormGroup ({
      name: new FormControl('', [Validators.required]),
      date: new FormControl(''),
      starttime: new FormControl(''),
      timeofCompletion: new FormControl(''),
      place: new FormControl(''),
      description: new FormControl(''),
      state: new FormControl(''),
      urlImage: new FormControl('')
    })
  }

  ngOnInit(){
    this.getParamId();
    this.getFormData();
  }


  getParamId(){
    this.route.params.subscribe({
      next:(data) => {
        this.eventId = data ['id']; // Asignamos el Id al atributo de la clase eventId
        console.log(this.eventId);

      },
      error:(err) => {
        console.error(err);
      },
      complete: () => {}
    });
  }

  getFormData(){
    this.EventService.getEventById( this.eventId ).subscribe({
      next: (data) => {
        this.eventData = data.data !;
              // Aqui se guardan los datos del evento por Id
              this.formData.patchValue({
                name: data.data?.name,
                date: data.data?.date,
                starttime: data.data?.starttime,
                timeofCompletion: data.data?.timeofCompletion,
                place: data.data?.place,
                description: data.data?.description,
                state: data.data?.state,
                urlImage: data.data?.urlImage
              })
      
      },
      error:(err) => {
        console.error(err);
      },
      complete: () => {}
    });
  }


  onSubmit(){
    const inputData = this.formData.value;

    if(this.formData.valid){
      console.log(inputData);
    }
    
    this.EventService.uptadeEventById(this.eventId, inputData).subscribe({
      next: (data) => {
        console.log(data);
        this.router.navigateByUrl('admin/events')
      },
      error: (err) => {
        console.error(err)
      },
      complete: () => {},
    })
  }

}