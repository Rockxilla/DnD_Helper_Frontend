import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environment';
import { RazaList } from '../models/raza-list.model';

@Injectable({
  providedIn: 'root',
})
export class RazaService {
  private path = environment.apiUrl;
  constructor(private httpClient: HttpClient) {}

  getRazas(): Observable<RazaList[]> {
    return this.httpClient.get<RazaList[]>(`${this.path}Raza/GetRazaLista`);
  }
}
