import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environment';
import { ClaseList } from '../models/clase-list.model';

@Injectable({
  providedIn: 'root',
})
export class ClaseService {
  private path = environment.apiUrl;

  constructor(private httpClient: HttpClient) {}

  getClases(): Observable<ClaseList[]> {
    return this.httpClient.get<ClaseList[]>(`${this.path}Clase/GetClaseLista`);
  }

}
