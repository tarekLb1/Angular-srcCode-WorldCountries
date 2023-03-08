import { Component , Input} from '@angular/core';
import { country } from '../Model/classcountry';

@Component({
  selector: 'country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.css']
})
export class CountryDetailsComponent {
  @Input() Mycountry = new country()
}