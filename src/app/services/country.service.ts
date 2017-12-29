import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ICountry } from '../interfaces/ICountry';

@Injectable()
export class CountryService {
  private _countriesUrl = 'http://localhost:3000/countries';
  getCountries(): Observable<ICountry[]> {
    return this._http.get<ICountry[]>(this._countriesUrl)
      .catch(this.handleError);
  }
  
  private handleError(err: HttpErrorResponse) {
    console.log(err);
    return Observable.throw(err.message);

  }
   
  constructor(private _http :HttpClient) { }

}
