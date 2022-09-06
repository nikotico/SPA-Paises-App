import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {
  // https://restcountries.com/v2

  private apiUrl: string = 'https://restcountries.com/v2';

  constructor( private http: HttpClient) { }

  buscarPais(name:string): Observable<Country[]> {
    const url = `${this.apiUrl}/name/${name}`;

    return this.http.get<Country[]>(url);

  }
}
