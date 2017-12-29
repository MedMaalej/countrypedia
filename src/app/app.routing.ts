import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountryComponent } from './components/countries/country.component';
import { CountryDetailComponent } from './components/countries/country-detail.component';
import { ModuleWithProviders } from '@angular/core';

const routes: Routes = [
  { path: 'countries', component: CountryComponent },
  {
    path: 'countries/:code',
    component: CountryDetailComponent,
  },
  { path: '', redirectTo: "/", pathMatch: "full" }
];
export const routing: ModuleWithProviders = RouterModule.forRoot(routes);