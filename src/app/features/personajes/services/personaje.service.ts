import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environment';
import { PersonajeBase } from '../models/personaje-base.model';
import { PersonajeList } from '../models/personaje-list.model';
import { CreatePersonajeDto, CreatePersonajeResponse } from '../models/create-personaje.model';
import { UpdatePersonajeDto } from '../models/update-personaje.model';

@Injectable({
  providedIn: 'root',
})
export class PersonajeService {

  private path = environment.apiUrl;

  constructor(private httpClient: HttpClient) {}

  getPersonajes(): Observable<PersonajeBase[]> {
    return this.httpClient.get<PersonajeBase[]>(`${this.path}Personaje`);
  }

  getPersonajesList(): Observable<PersonajeList[]> {
    return this.httpClient.get<PersonajeList[]>(`${this.path}Personaje/Lista`);
  }

  getPersonajeById(id: number): Observable<PersonajeBase> {
    return this.httpClient.get<PersonajeBase>(`${this.path}Personaje/?id=${id}`);
  }

  createPersonaje(dto: CreatePersonajeDto): Observable<CreatePersonajeResponse> {
    return this.httpClient.post<CreatePersonajeResponse>(`${this.path}Personaje`,dto);
  }

  updatePersonaje(dto: UpdatePersonajeDto): Observable<void> {
    return this.httpClient.put<void>(`${this.path}Personaje`, dto);
  }

  deletePersonaje(id: number): Observable<boolean> {
    return this.httpClient.delete<boolean>(`${this.path}Personaje/?id=${id}`);
  }
}