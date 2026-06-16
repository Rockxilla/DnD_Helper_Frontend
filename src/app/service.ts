import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environment';
import { Personaje } from './models/personaje.model';

@Injectable({
  providedIn: 'root',
})
export class Service {
  private path = environment.apiUrl

  constructor (private httpClient: HttpClient){ }

  
  getPersonajes(): Observable<any> {
    return this.httpClient.get<Personaje[]>(`${this.path}Personaje/GetPersonaje`);
  }
}
