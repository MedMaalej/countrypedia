import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountryService } from '../../services/country.service';
import { ICountry } from '../../interfaces/ICountry';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.css']
})
export class CountryDetailComponent implements OnInit {
  errorMessage: string;
  country:ICountry;
  countryAnthemLink:string;
  constructor(private _route: ActivatedRoute, private _countryService:CountryService) { }
 
  ngOnInit() {
    let code = this._route.snapshot.paramMap.get('code');
    console.log(code);
    this._countryService.getCountries().subscribe(countries => {
      
      this.country = countries.filter(x=>(x["code"]==code))[0];
      this.countryAnthemLink = this.country.anthem;
    },
    error => this.errorMessage = <any>error)    
  }
 
  
}
