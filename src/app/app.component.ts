import { Component } from '@angular/core';
import { country } from './Model/classcountry';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  Allcountries: country[] = []
  Filtercounties: country[] = []
  specificcountry:country = new country()
  FirstRun:boolean = true;
  //------------------------------
  constructor() {
    this.getcountries();
  }
  //------------------------------
  handleselectcountry(messagefromcountries:string){
    this.getspecificcountry(messagefromcountries)
  }

  getspecificcountry(name: string) {
    fetch(`https://restcountries.com/v3.1/name/${name}`)
      .then(response => response.json())
      .then(json => {
        let c = json[0]
        this.specificcountry= new country()
        this.specificcountry.name = c.name.common;
        this.specificcountry.imgsrc = c.flags.png;
        this.specificcountry.population = c.population;
        console.log( this.specificcountry)
        })
  }

  getcountries() {
    fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(json => { this.fillarray(json) })
  }

  fillarray(json: any) {
    //this.Allcountries = [];
    this.Filtercounties=[];
    json.forEach((element: any) => {
      let c = new country()
      c.name = element.name.common;
      c.imgsrc = element.flags.png;
      c.population = element.population;
      if(this.FirstRun==true){this.Allcountries.push(c);} 
      this.Filtercounties.push(c);

    });
    this.FirstRun=false;
  }

  getcountrybyname(name: string) {
    fetch(`https://restcountries.com/v3.1/name/${name}`)
      .then(response => response.json())
      .then(json => { this.fillarray(json) })
  }
  
   
         // search bar call
//------------------------------
  handlesearchbaremit(messagefromsearchbar: string) {
    if (messagefromsearchbar == '' || messagefromsearchbar=='all') {
      this.getcountries()
    }
    else {
      this.getcountrybyname(messagefromsearchbar)
    }
  }
  

}
