import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'c3',
  templateUrl: './c3.component.html',
  styleUrls: ['./c3.component.css']
})
export class C3Component {
 constructor(private ac:ActivatedRoute){
  
     const CountryID =  this.ac.snapshot.paramMap.get('id');
     console.log(CountryID)
 }
}
