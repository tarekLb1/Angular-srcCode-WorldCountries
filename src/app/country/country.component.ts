import { Component,Input } from '@angular/core';

@Component({
  selector: 'country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent {
   @Input() name : string = '';
   @Input() description : string = '';
   @Input() flagurl : string = '';
   @Input() population: number = 0;

   getpopulation(){
    alert(this.population)
   }
}
