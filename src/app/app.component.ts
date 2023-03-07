import { Component } from '@angular/core';
import { country } from './Model/classcountry';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  Allcountiesselect: country[] = []
  Allcountries:      country[] = []
  //------------------------------
  constructor() {
    this.getcountriesselect()
    this.getcountries();
  }
  //------------------------------
  getcountriesselect() {
    fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(json => {

        
        json.forEach((element: any) => {
          let c = new country()
          c.name = element.name.common;
          c.imgsrc = element.flags.png;
          c.population = element.population;
          this.Allcountiesselect.push(c);

        });
     })
  }

  getcountries() {
    fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(json => { this.fillarray(json) })
  }
  fillarray(json: any) {
    this.Allcountries = [];
    json.forEach((element: any) => {
      let c = new country()
      c.name = element.name.common;
      c.imgsrc = element.flags.png;
      c.population = element.population;
      this.Allcountries.push(c);

    });

  }

  getcountrybyname(name: string) {
    fetch(`https://restcountries.com/v3.1/name/${name}`)
      .then(response => response.json())
      .then(json => { this.fillarray(json) })
  }
  
   // handle @outpu calls

           // select option call
  //------------------------------
  handleselectoptionemit(messagefromselectoption: string) {
    if(messagefromselectoption == 'all'){
      this.getcountries()
    }
    else {
      this.getcountrybyname(messagefromselectoption)
    }
    
  }
         // search bar call
//------------------------------
  handlesearchbaremit(messagefromsearchbar: string) {
    if (messagefromsearchbar == '') {
      this.getcountries()
    }
    else {
      this.getcountrybyname(messagefromsearchbar)
    }
  }
  

}
