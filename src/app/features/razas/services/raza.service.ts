import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environment';
import { RazaList } from '../models/raza-list.model';
import { RazaPersonaje } from '../models/raza.model';

@Injectable({
  providedIn: 'root',
})
export class RazaService {
  private path = environment.apiUrl;
  constructor(private httpClient: HttpClient) {}

  getRazaList(): Observable<RazaList[]> {
    return this.httpClient.get<RazaList[]>(`${this.path}Raza/GetRazaLista`);
  }
  getRaza(personajeId: number): Observable<RazaPersonaje> {
    return this.httpClient.get<RazaPersonaje>(`${this.path}Personaje/${personajeId}/raza`);
  }
}
