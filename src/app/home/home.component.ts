import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { country } from '../Model/classcountry';
import { commonsvc } from '../Model/Common';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  
  Allcountries: country[] = []
  Filtercounties: country[] = []
  specificcountry:country = new country()
  
  FirstRun:boolean = true;
  //------------------------------
  constructor(private cmm:commonsvc,private apicaller:HttpClient) {
    this.getcountries();
  }
  //------------------------------
  handleselectcountry(messagefromcountries:string){
    this.getspecificcountry(messagefromcountries)
  }

  getspecificcountry(name: string) {
    this.apicaller
    .get(this.cmm.geturl(`name/${name}`))
    .subscribe((json:any)=>{
      let c = json[0]
        this.specificcountry= new country()
        this.specificcountry.name = c.name.common;
        this.specificcountry.imgsrc = c.flags.png;
        this.specificcountry.population = c.population;
        console.log( this.specificcountry)
    })

    // fetch(this.cmm.geturl(`name/${name}`))
    //   .then(response => response.json())
    //   .then(json => {
    //     let c = json[0]
    //     this.specificcountry= new country()
    //     this.specificcountry.name = c.name.common;
    //     this.specificcountry.imgsrc = c.flags.png;
    //     this.specificcountry.population = c.population;
    //     console.log( this.specificcountry)
    //     })
  }

  getcountries() {
 //  add the headers.we add the HTTP Headers while making a request
 // ----------------------------------------------------------------------
  //   const headers= new HttpHeaders()
  // .set('Mohamad', 'Rizk')
  // .set('Cache-Control','no-cache');
  
  //   this.apicaller
  //   .get(this.cmm.geturl('all'),{ 'headers': headers })
  //   .subscribe((json)=>{
  //     this.fillarray(json)
  //   })
 // ----------------------------------------------------------------------

    this.apicaller
    .get(this.cmm.geturl('all'))
    .subscribe((json)=>{
      this.fillarray(json)
    })


    // fetch(this.cmm.geturl('all'))
    //   .then(response => response.json())
    //   .then(json => { this.fillarray(json) })
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
    this.apicaller
    .get(this.cmm.geturl(`name/${name}`))
    .subscribe((json)=>{
      this.fillarray(json)
    })
    // fetch(this.cmm.geturl(`name/${name}`))
    //   .then(response => response.json())
    //   .then(json => { this.fillarray(json) })
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
