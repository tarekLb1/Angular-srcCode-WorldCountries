import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CountryComponent } from './country/country.component';
import { CountriesComponent } from './countries/countries.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { pluralise } from './pipes/pluralise';
import { FormsModule } from '@angular/forms';
import { CountryDetailsComponent } from './country-details/country-details.component';
import { HeaderComponent } from './header/header.component';
import { commonsvc } from './Model/Common';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { MyInterceptor } from './HttpInterceptor/gaby';
import { HomeComponent } from './home/home.component';
import { C1Component } from './c1/c1.component';
import { RouterModule, Routes } from '@angular/router';
import { C2Component } from './c2/c2.component';

const routes:Routes=[
  {path:''        , component:  HomeComponent},
  {path:'fatat'   , component:  C1Component  },
  {path:'**'      , component:  C2Component  }


]






@NgModule({
  declarations: [
    AppComponent,
    CountryComponent,
    CountriesComponent,
    SearchbarComponent,
    pluralise,
    CountryDetailsComponent,
    HeaderComponent,
    HomeComponent,
    C1Component
    
  ],
  imports: [
    BrowserModule,
    FormsModule , // [(ngModel)]
    HttpClientModule, // API calls
    RouterModule.forRoot(routes)

  ],
  providers: [
    commonsvc,  // service for API url look 
    { provide: HTTP_INTERCEPTORS, useClass: MyInterceptor, multi: true }   // Interceptor
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
