import { Component, Input } from '@angular/core';
import { country } from '../Model/classcountry';

@Component({
  selector: 'countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent {
   @Input() countries: country[] = []
}
