import { Component } from "@angular/core";

@Component({
    selector: 'counter',
    templateUrl: './counter.html',
    styleUrls: ['./counter.css', './counter-2.css']
})

export class Counter{
    
//Atributos
counter = 0;

//Constructor

//Getters Setters

//Methods
decrement(){
    this.counter = this.counter - 1;
}
increment(){
    this.counter++;
}

}