import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environment';
import { Personaje } from '../models/personaje.model';
import { PersonajeList } from '../models/personaje-list.model';
import { CreatePersonaje } from '../models/create-personaje.model';
import { UpdatePersonaje } from '../models/update-personaje.model';

@Injectable({
  providedIn: 'root',
})
export class PersonajeService {

  private path = environment.apiUrl;

  constructor(private httpClient: HttpClient) {}

  getPersonajes(): Observable<Personaje[]> {
    return this.httpClient.get<Personaje[]>(
      `${this.path}Personaje/GetPersonaje`
    );
  }

  getPersonajesList(): Observable<PersonajeList[]> {
    return this.httpClient.get<PersonajeList[]>(
      `${this.path}Personaje/GetPersonajeLista`
    );
  }

  getPersonajeById(id: number): Observable<Personaje> {
    return this.httpClient.get<Personaje>(
      `${this.path}Personaje/GetPersonajeById?id=${id}`
    );
  }

  createPersonaje(dto: CreatePersonaje): Observable<Personaje> {
    return this.httpClient.post<Personaje>(
      `${this.path}Personaje/CreatePersonaje`,
      dto
    );
  }

  updatePersonaje(dto: UpdatePersonaje): Observable<void> {
    return this.httpClient.put<void>(
      `${this.path}Personaje/UpdatePersonaje`,
      dto
    );
  }

  deletePersonaje(id: number): Observable<boolean> {
    return this.httpClient.delete<boolean>(
      `${this.path}Personaje/DeletePersonaje?id=${id}`
    );
  }
}