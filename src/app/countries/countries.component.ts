import { Component, EventEmitter, Input, Output } from '@angular/core';
import { country } from '../Model/classcountry';

@Component({
  selector: 'countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent {
   @Input() countries: country[] = []
   @Output() selectcountry = new EventEmitter<string>();

   handlecountryclick(c:country){
      this.selectcountry.emit(c.name)
   }


}
