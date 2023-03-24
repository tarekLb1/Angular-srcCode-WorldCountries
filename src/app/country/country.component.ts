import { Component,Input } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent {
   @Input() id : string = '';
   @Input() name : string = '';
   @Input() description : string = '';
   @Input() flagurl : string = '';
   @Input() population: number = 0;
   
   constructor(private router:Router){}

   getpopulation(){
    //alert(this.population)
      this.router.navigate(['tarek',this.id])

     }
}
