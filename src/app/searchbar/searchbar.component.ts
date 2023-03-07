import { Component,EventEmitter,Output ,Input} from '@angular/core';
import { country } from '../Model/classcountry';

@Component({
  selector: 'searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent {
  @Input() countries: country[] = [];
  @Input() countriesselect: country[] = [];

  @Output() searchbuttonclick = new EventEmitter<string>();
  @Output() selectoptionclick = new EventEmitter<string>();

 countryNameoption = ''
 countryName = '';


 emitcountryname(){
  this.searchbuttonclick.emit(this.countryName) 
 }


 
 emitcountrynameoption(){
  this.selectoptionclick.emit(this.countryNameoption)
 }
}
