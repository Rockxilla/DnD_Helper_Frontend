import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environment';
import { ClaseList } from '../models/clase-list.model';
import { ClasePersonaje } from '../models/clase.model';

@Injectable({
  providedIn: 'root',
})
export class ClaseService {
  private path = environment.apiUrl;
  constructor(private httpClient: HttpClient) {}

  getClaseList(): Observable<ClaseList[]> {
    return this.httpClient.get<ClaseList[]>(`${this.path}Clase/GetClaseLista`);
  }
  getClases(personajeId: number): Observable<ClasePersonaje[]> {
    return this.httpClient.get<ClasePersonaje[]>(`${this.path}Personaje/${personajeId}/clases`);
  }
}
