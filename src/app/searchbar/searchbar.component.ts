import { Component,EventEmitter,Output ,Input} from '@angular/core';
import { country } from '../Model/classcountry';

@Component({
  selector: 'searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent {
  @Input() countries: country[] = [];
  @Output() searchbuttonclick = new EventEmitter<string>();
  countryName = '';


 emitcountryname(){
  this.searchbuttonclick.emit(this.countryName) 
 }
 emitoption(){
  this.searchbuttonclick.emit(this.countryName) 
 }
 emitcountrytyping(){
  this.searchbuttonclick.emit(this.countryName) 
 }
}
