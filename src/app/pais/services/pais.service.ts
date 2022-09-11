import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {
  // https://restcountries.com/v2

  private apiUrl: string = 'https://restcountries.com/v2';

  get httpParams () { //Parametros para la consulta http
    return new HttpParams().set( 'fields', 'name,capital,alpha2Code,flag,population' );
  }//Lo puedo llamar params y por ECMAScript 6, puedo hacer {params} en la linea 22 por redundant

  constructor( private http: HttpClient) { }

  buscarPaises(name:string): Observable<Country[]> {
    const url = `${this.apiUrl}/name/${name}`;
    return this.http.get<Country[]>(url , { params: this.httpParams });
  }

  buscarCapital(name:string): Observable<Country[]> {
    const url = `${this.apiUrl}/capital/${name}`;
    return this.http.get<Country[]>(url , { params: this.httpParams });
  }

  buscarRegion(name:string): Observable<Country[]> {
    const url = `${this.apiUrl}/regionalbloc/${name}`;
    return this.http.get<Country[]>(url,{ params: this.httpParams });
  }

  getPais(id:string): Observable<Country> {
    const url = `${this.apiUrl}/alpha/${id}`;
    return this.http.get<Country>(url);
  }
}
