import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { pluralise } from './pipes/pluralise';


import { AppComponent } from './app.component';
import { CountryComponent } from './country/country.component';
import { CountriesComponent } from './countries/countries.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { CountryDetailsComponent } from './country-details/country-details.component';
import { HeaderComponent } from './header/header.component';
import { C2Component } from './c2/c2.component';
import { HomeComponent } from './home/home.component';
import { C1Component } from './c1/c1.component';
import { C3Component } from './c3/c3.component';


import { commonsvc } from './Model/Common';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { MyInterceptor } from './HttpInterceptor/gaby';
import { RouterModule, Routes } from '@angular/router';



const routes:Routes=[
  {path:''        , component:  HomeComponent},
  {path:'fatat'   , component:  C1Component  },
  {path:'tarek/:id'   , component:  C3Component  },
  {path:'**'      , component:      C2Component  }

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
    RouterModule.forRoot(routes) //routing

  ],
  providers: [
    commonsvc,  // service for API url look 
    { provide: HTTP_INTERCEPTORS, useClass: MyInterceptor, multi: true }   // Interceptor
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
