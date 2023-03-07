import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CountryComponent } from './country/country.component';
import { CountriesComponent } from './countries/countries.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { pluralise } from './pipes/pluralise';
import { FormsModule } from '@angular/forms';





@NgModule({
  declarations: [
    AppComponent,
    CountryComponent,
    CountriesComponent,
    SearchbarComponent,
    pluralise
    
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
