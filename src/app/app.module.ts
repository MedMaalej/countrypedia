import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { RouterModule } from '@angular/router';
import { CountryDetailComponent } from './components/countries/country-detail.component';
import { CountryComponent } from './components/countries/country.component';
import { routing } from './app.routing';
import { AppComponent } from './components/main/app.component';
import { CountryService } from './services/country.service';
import { HttpClientModule } from '@angular/common/http';

import { AgmCoreModule } from '@agm/core';
import { SafePipe } from './pipes/SafePipe';

@NgModule({
  declarations: [
    AppComponent,
    CountryComponent,
    CountryDetailComponent,
    SafePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    routing,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCZ3fMi30hsyWvHrWFsPFkvc-qaHV9XdAE'
    })
    ],
  providers: [CountryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
